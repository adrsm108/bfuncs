(ns bfuncs.steps
  (:require
   ["/bfuncs/CoverageTable" :default CoverageTable]
   ["/bfuncs/VariablesDragDrop" :default VariablesDragDrop]
   [applied-science.js-interop :as j]
   [bfuncs.data :refer [replace-operands]]
   [bfuncs.algebra :refer [|| && ! ->SOP ->POS &&* ||* *cancellation-rules*]]
   [bfuncs.minimization :as bmin :refer [covered-terms minimization-steps quine-mccluskey-meta
                                         implicant? covers? int->imp imp->bobj strict-term->int
                                         consistent? imp->bobj-fn index-bobj minterms maxterms
                                         ints->bobj int->bobj decode-selection]]
   [bfuncs.style :refer [classes]]
   [bfuncs.parsing :refer [bexpr->bobj]]
   [bfuncs.typesetting-data :refer [default-macros]]
   [bfuncs.reduction-steps :refer [reduction-steps-section]]
   [bfuncs.typesetting :refer [expression $ $$ ->latex format-latex-var katex-options
                               terms-expression
                               format-minterm format-maxterm
                               format-prime-implicant format-prime-implicate
                               format-var format-covered-var format-prime-var]]
   [bfuncs.glossary :refer [gloss]]
   [bfuncs.utils :refer [echo map-vals map-assoc echol
                         map-reduce event-value event-checked str-join
                         pass for' fori fori' conj-when log
                         fn-> let-case exec timed-fn get-meta
                         if-first count-when positions toggle-class
                         singleton? maximal-by applied mp add-keys condf rrange
                         maximum int-digits toggle-selection toggle!
                         toggle-selection-key-up-fn toggle-selection-key-down-fn
                         ]]
   [cljs.core.async :refer [<! >! put! chan timeout] :refer-macros [go]]
   [clojure.set :refer [subset?]]
   [clojure.string :as str]
   [goog.string :as gstr]
   [reagent-material-ui.core.accordion :refer [accordion]]
   [reagent-material-ui.core.accordion-actions :refer [accordion-actions]]
   [reagent-material-ui.core.accordion-details :refer [accordion-details]]
   [reagent-material-ui.core.accordion-summary :refer [accordion-summary]]
   [reagent-material-ui.core.app-bar :refer [app-bar]]
   [reagent-material-ui.core.avatar :refer [avatar]]
   [reagent-material-ui.core.button :refer [button]]
   [reagent-material-ui.core.button-base :refer [button-base]]
   [reagent-material-ui.core.card :refer [card]]
   [reagent-material-ui.core.card-content :refer [card-content]]
   [reagent-material-ui.core.card-header :refer [card-header]]
   [reagent-material-ui.core.chip :refer [chip]]
   [reagent-material-ui.core.click-away-listener :refer [click-away-listener]]
   [reagent-material-ui.core.collapse :refer [collapse]]
   [reagent-material-ui.core.divider :refer [divider]]
   [reagent-material-ui.core.grid :refer [grid]]
   [reagent-material-ui.core.icon-button :refer [icon-button]]
   [reagent-material-ui.core.link :refer [link]]
   ;[reagent-material-ui.core.step-icon :refer [step-icon]]
   [reagent-material-ui.core.svg-icon :refer [svg-icon]]
   [reagent-material-ui.core.table :refer [table]]
   [reagent-material-ui.core.table-head :refer [table-head]]
   [reagent-material-ui.core.table-body :refer [table-body]]
   [reagent-material-ui.core.table-container :refer [table-container]]
   [reagent-material-ui.core.table-cell :refer [table-cell]]
   [reagent-material-ui.core.table-row :refer [table-row]]
   [reagent-material-ui.core.tooltip :refer [tooltip]]
   [reagent-material-ui.core.typography :refer [typography]]
   [reagent-material-ui.icons.check-outlined :refer [check-outlined]]
   [reagent-material-ui.icons.loop-outlined :refer [loop-outlined]]
   [reagent-material-ui.icons.expand-more-outlined :refer [expand-more-outlined]]
   [reagent-material-ui.icons.edit :refer [edit]]
   ["react-router-dom" :refer [useHistory useLocation]]
   [reagent.core :as r :refer-macros [with-let]]))

(defn edit-button-f [{:keys [search-string]}]
  (let [history (useHistory)]
    [icon-button {:on-click #(j/call history :push
                               #js {:pathname "/"
                                    :search search-string})}
     [edit]]))

(defn- get-outer [form-type]
  (case form-type
    (:POS :max) &&
    (:SOP :min) ||
    (throw (ex-info (str "Unrecognized form type: " form-type) {}))))

(defn- get-inner [form-type]
  (case form-type
    (:POS :max) ||
    (:SOP :min) &&
    (throw (ex-info (str "Unrecognized form type: " form-type) {}))))

(defn- selection-data
  ([imp] (selection-data imp (get-meta imp :step)))
  ([imp step] [step (count-when true? imp) imp]))

(defn- section-title
  ([title] (section-title title "h5"))
  ([title variant]
   [grid {:item true, :xs 12}
    [typography {:variant variant
                 :class "section-title"}
     title]])
  ([title variant n]
   [grid {:item true
          :xs 12
          :container true
          :direction "row"
          :spacing 2
          :align-items "center"}
    [grid {:item true}
     [typography {:variant variant
                  :class "section-title"}
      title]]
    [grid {:item true}
     [typography {:variant "subtitle1"
                  :color "textSecondary"
                  :class "section-count"}
      (str "(" n ")")]]]))

(defn- data->js [data !sel]
  (let [{:keys [primes terms covers essentials remaining]} data
        covers (vec covers)
        all-terms-covered? (atom true)
        terms-covered (fori' [i :index, term terms]
                        {:term term
                         :index i
                         :covered (if (contains? remaining i)
                                    (reset! all-terms-covered? false)
                                    true)
                         :coveredBy (get covers i)
                         :onClick #(swap! !sel toggle-selection % term 0)
                         :onKeyDown (toggle-selection-key-down-fn !sel term 0)
                         :onKeyUp (toggle-selection-key-up-fn !sel term 0)})]
    (clj->js
     {:terms terms-covered
      :rows (for' [prime primes
                   :let [{i :prime-index
                          step :step} (meta prime)
                         essential? (contains? essentials i)
                         all-covered? (atom true)]]
              {:index i
               :prime prime
               :essential essential?
               :onClick #(swap! !sel toggle-selection % prime step)
               :onKeyDown (toggle-selection-key-down-fn !sel prime step)
               :onKeyUp (toggle-selection-key-up-fn !sel prime step)
               :cols (doall
                      (map (fn [cov-set {:keys [term covered]}]
                             {:term term
                              :dot (and (contains? cov-set i)
                                        (or covered (not (reset! all-covered? false))))
                              :covered covered})
                           covers
                           terms-covered))
               :allCovered (and (not essential?) @all-covered?)})
      :allPrimesEssential
      (= (count primes) (count essentials))
      :noPrimesEssential
      (empty? essentials)
      :allTermsCovered
      @all-terms-covered?})))

(defn- vars->js [vars]
  (clj->js (fori' [i :index
                   var vars]
             {:name var
              :element (r/as-element [$ {:class "var"
                                         :aria-label var}
                                      (->latex var)])
              :index i})))

(defn- reset-vars! [!vars new-vars]
  (reset! !vars (vec new-vars)))

(defn- variables-dnd [{:keys [!vars class]}]
  (let [vars @!vars
        nvars (count vars)
        equals-sign (r/as-element [$ "\\colonequals"])]
    [:> VariablesDragDrop
     {:key vars
      :class (r/class-names class)
      :variables (vars->js vars)
      :rowHeaders (clj->js (for' [i (range nvars)]
                             (r/as-element [$ (format-var i nvars)])))
      :equalsSign equals-sign
      :onChangeCommitted (r/partial reset-vars! !vars)}]))

(defn term-chip
  "type should be one of #{\"minterm\" \"maxterm\"}"
  [term format-term !sel]
  (let [selection @(r/cursor !sel [:selection])
        class (cond
                (and (int? selection)
                     (= selection term)) "selected"
                (and (implicant? selection)
                     (contains? (covered-terms selection) term)) "covered"
                :else nil)]
    [button-base {:disable-ripple true
                  :aria-label (let [desc-fn (get-meta format-term :desc-fn)]
                                (when desc-fn (desc-fn term)))
                  :class (classes :math-chip "term-chip clicky" class)
                  :title (when (= class "covered") "Covered by selection")
                  :on-click #(swap! !sel toggle-selection % term 0)}
     [$ (format-term term)]]))

(defn- prime-chip [prime format-prime !sel]
  (let [{:keys [prime-index step]} (meta prime)
        prime-terms (covered-terms prime)
        selection @(r/cursor !sel [:selection])
        [_ _ sel-imp sel-terms :as sel] (decode-selection selection)
        sel-prime-index (get-meta sel-imp :prime-index)
        cov-status (when sel (cond (= prime-index sel-prime-index) "selected"
                                   (subset? sel-terms prime-terms) "covered"))]
    [button-base {:class (classes :math-chip "clicky" cov-status)
                  :disable-ripple true
                  :aria-label (let [desc-fn (get-meta format-prime :desc-fn)]
                                (when desc-fn (desc-fn prime-index)))
                  :title (when (= cov-status "covered") "Covers selection")
                  :on-click #(swap! !sel toggle-selection % prime step)
                  :tab-index 0}
     [$ (format-prime prime-index)]]))

(defn coverage-table [{:keys [katex-options table-props legend-labels data-map]
                       :or {katex-options (katex-options)}}]
  (let [{:keys [data !sel format-term format-prime]} data-map
        sel @(r/cursor !sel [:selection])
        sel-prime-index (get-meta sel :prime-index)
        sel-term (when (int? sel) sel)]
    [:> CoverageTable
     (merge
      {:key @(r/track hash data)
       :class (classes :coverage-table)
       :data @(r/track data->js data !sel)
       :primeType (get data :imp-word)
       :termType (get data :term-word)
       :selectedPrime (or sel-prime-index nil)
       :selectedTerm (when-not sel-prime-index sel-term)
       :formatColumnHeader format-term
       :formatRowHeader format-prime
       :katexOptions katex-options}
      table-props)]))

(defn prime-implicants-grid [{:keys [data format-prime !sel]}]
  (let [{:keys [primes target-form term-length]} data
        format-vars (format-var term-length)
        last? (partial = (dec (count primes)))
        colon-equals [$ "\\colonequals"]
        ->bobj (imp->bobj-fn target-form (vec (range term-length)))]
    [:div {:class (classes :aligned-environment)}
     (fori' [i :index
             prime primes]
       [:<> {:key i}
        [:div]
        [prime-chip prime format-prime !sel]
        colon-equals
        [$ (->latex (->bobj prime) format-vars)
         (if (last? i) "." ",")]
        [:div]])]))


(defn- essentials-table [{:keys [data !sel format-term format-prime]}]
  (let [{:keys [essentials primes terms]} data]
    [:div {:class (classes :essentials-table)}
     [:table>tbody
      [:tr
       [:td.head.prime "Prime"]
       [:td.head.covers "Uniquely Covers"]]
      (for' [[ess eidxs] essentials]
        [:tr {:key ess}
         [:td [prime-chip (get primes ess) format-prime !sel]]
         [:td>div.terms-container
          (for' [ix eidxs]
            ^{:key ix} [term-chip (get terms ix) format-term !sel])]])]]))

(defn- verbalize-coll
  ([coll]
   (case (count coll)
     1 (first coll)
     2 (str/join " and " coll)
     (str (str/join ", " (butlast coll)) ", and " (last coll))))
  ([tag coll]
   (str (if (= (count coll) 1)
          (if (vector? tag) (first tag) tag)
          (if (vector? tag) (second tag) (str tag "s")))
        " " (verbalize-coll coll))))

(defn- step-summary [& children]
  (into [typography {:variant "subtitle1"
                     :color "textSecondary"}]
        children))

(defn- step-icon [number]
  [:div {:class (classes :step-icon)
         :aria-label (str "step " number)}
   number])

(defn- step [{:keys [number result default-open last loop]
              :or {default-open true}} label content]
  (with-let [!open (r/atom true)
             toggle (fn [e]
                      (j/call e :stopPropagation)
                      (toggle! !open))]
    (let [open @!open
          content? (some? content)]
      [:div {:class (classes :step
                             (when last "last")
                             (when result "result")
                             (when loop "loop")
                             (if content?
                               (r/class-names "collapsable"
                                              (if open "open" "closed"))
                               "non-collapsable"))}
       [:div.icon-and-line
        [step-icon (cond
                     result (r/as-element [check-outlined {:font-size "small"}])
                     loop (r/as-element [loop-outlined {:font-size "small"}])
                     :else number)]
        [:div.liney-box
         [:svg.liney
          [:line {:x1 "50%" :y1 0
                  :x2 "50%" :y2 "100%"}]]]]
       [:div.step-summary {:on-click (if content? toggle pass)}
        label]
       (when content?
         [icon-button {:class "step-opener"
                       :size "small"
                       :edge "end"
                       :aria-label (str "expand step " number)
                       :on-click toggle}
          [expand-more-outlined]])
       (when content?
         [collapse {:in open
                    :class "step-content"}
          content])])))

(defn target-form-link [target-form]
  (case target-form
    :SOP [link {:target "_blank"
                :on-click #(j/call % :stopPropagation)
                :rel "noreferrer"
                :href "https://en.wikipedia.org/wiki/Disjunctive_normal_form"}
          "disjunctive normal form"]
    :POS [link {:target "_blank"
                :on-click #(j/call % :stopPropagation)
                :rel "noreferrer"
                :href "https://en.wikipedia.org/wiki/Conjunctive_normal_form"}
          "conjunctive normal form"]))

(defn- choose-ex-term [terms nvars]
  (if (= 1 (count terms))
    (first terms)
    (let [i (rand-int (count terms))
          t (nth terms i)]
      (cond
        (zero? t) (nth terms (inc i) t)
        (= (bit-count t) nvars) (nth terms (dec i) t)
        :else t))))

(defn implications-grid [{:keys [data]}]
  (let [{:keys [remaining terms]} data
        dec-nrem (dec (count remaining))
        iff [$ "\\iff"]]
    [:div {:class (classes :implications-grid :aligned-environment)}
     (fori' [j :index
             [i cov] remaining
             :let [term (terms i)]]
       [:<> {:key i}
        [:div]
        [$ (format-covered-var i)]
        iff
        [expression {:var-fn format-prime-var
                     :punct (if (< j dec-nrem) "," ".")}
         (apply || cov)]
        [:div]])]))

(defn- find-terms-steps-from-expression [{:keys [!vars !sel data format-term ifsop] :as props}]
  (let [{:keys [terms vars indexed-expr target-form]} data
        nvars (count vars)
        nterms (count terms)
        num-vars (range nvars)
        outer (get-outer target-form)
        inner (get-inner target-form)
        format-num-var (format-var nvars)
        normal-expr ((ifsop ->SOP ->POS) (echo :indexed indexed-expr) :simplify true)
        full-normal-expr (when (pos? nterms) (ints->bobj num-vars outer inner terms))
        ex-term (when (pos? nterms) (choose-ex-term terms nvars))]
    [:div {:class (classes :steps)}
     [step {:number 1}
      [step-summary "Index each variable."]
      [typography {:component "div"
                   :class "index-step-content"}
       "Let "
       [variables-dnd (mp :class (classes :variables-dnd) !vars)]
       [expression {:display true
                    :pre (str-join "F(" "," ") = " format-num-var (range nvars))
                    :math-props {:indent "1em"}
                    :var-fn format-num-var}
        indexed-expr]]]
     [step {:number 2}
      [step-summary "Expand to " (target-form-link target-form) "."]
      [expression {:var-fn format-num-var
                   :display true
                   :expandable true
                   :pre (str-join "{F(" "," ")} =" format-num-var (range nvars))}
       normal-expr]]
     [step {:number 3}
      [step-summary "Expand to full " (target-form-link target-form) "."]
      [expression {:var-fn format-num-var
                   :display true
                   :expandable true
                   :pre (str-join "{F(" "," ")} =" format-num-var (range nvars))}
       full-normal-expr]]
     (if (zero? nterms)
       [:div "no terms."]
       [step {:number 4}
        [step-summary "Map each clause to its unique integer representation."]
        [typography {:component "div"}
         "This is the binary integer with digits" [$ "b_{n-1}, \\dots, b_1, b_0" ","]
         "where" [$ "b_i"] "is" [$ (ifsop "1" "0")] "if the clause contains" [$ (format-num-var :i) ","]
         "and" [$ (ifsop "0" "1")] "if it contains" [$ (->latex (! :i) format-num-var) "."]
         "For instance,"
         [:div.example-term
          [$ (->latex (int->bobj num-vars inner ex-term) format-num-var)]
          [:div.break-group
           [$ {:class "rel-op"} "\\mapsto"]
           [:span
            (-> ex-term
                (j/call :toString 2)
                (j/call :padStart nvars \0))
            [:sub "2"]]]
          [:div.break-group
           [$ {:class "rel-op"} "="]
           [$ (format-term ex-term)]]]]])
     [step {:number 5 :result true :last true}
      [step-summary (ifsop "Minterms" "Maxterms") [:span.normal " (" nterms ")"]]
      (if (zero? nterms)
        [:div {:class (classes :terms-table)}
         "No terms."]
        [:div {:class (classes :terms-table)}
         (for' [term terms]
           ^{:key term} [term-chip term format-term !sel])])]]))

(defn- find-terms-steps-from-terms [{:keys [!vars !sel data format-term ifsop]}]
  (let [{:keys [terms target-form inverted-terms input-type]} data
        nterms (count terms)
        must-invert (ifsop (= input-type :maxterms)
                           (= input-type :minterms))
        ]
    [:div {:class (classes :steps)}
     (if must-invert
       [:<>
        [step {:number 1}
         [step-summary "others"]]]

       [step {:number 1}
        [typography {:component "div"}
         "We were given minterms. That's convenient!"]])
     [step {:number 4 :result true :last true}
      [step-summary (ifsop "Minterms" "Maxterms") [:span.normal " (" nterms ")"]]
      (if (zero? nterms)
        [:div {:class (classes :terms-table)}
         "No terms."]
        [:div {:class (classes :terms-table)}
         (for' [term terms]
           ^{:key term} [term-chip term format-term !sel])])
      ]
     ])
  )

(defn terms-section [{:keys [data ifsop] :as props}]
  (let [{:keys [vars expr input-terms input-type unspecified]} data]
    [:<>
     [typography {:variant "h5"}
      (str "Find " (ifsop "Minterms" "Maxterms"))]
     (if (= input-type :expression)
       [find-terms-steps-from-expression props]
       [find-terms-steps-from-terms props])
     ]
    ))

(defn- conditions [& conds]
  (into [typography {:component "ol"
                     :class (classes :conditions)}]
        conds))

(defn- introduction-section [{:keys [data ifsop ifsop-implies format-prime search-string] :as data-map}]
  (let [{:keys [primes target-form imp-word term-word]} data
        nprimes (count primes)]
    [:<>
     (let [{:keys [vars expr input-terms input-type unspecified]} data]
       [:<>
        ;; Find terms
        [typography {:variant "h5"}
         "Function"

        [:f> edit-button-f {:search-string search-string}]]
        [typography {:component "div"}
         "Let "
         [$ (str-join "F(" "," ")=" format-latex-var vars)]
         (if (= input-type :expression)
           [expression {:display true
                        :class (classes :main-function)}
            expr]
           [terms-expression {input-type input-terms
                              :unspecified unspecified
                              :class (classes :main-function)}])]])
     [typography {:variant "h5"} "Motivation"]
     [typography {:component "div"}
      "An " [:em imp-word] [$ "X"] " of a Boolean function " [$ "F"] "is any "
      (ifsop "conjunction" "disjunction") " of literals (variables and their complements) where "
      [$ (ifsop-implies "X" "F") "."]
      "We say the " imp-word [$ "X_1"] [:em "covers"] imp-word [$ "X_2"] "when every literal in"
      [$ "X_1"] "is also a literal in" [$ "X_2" ","] "or equivalently," [$ (ifsop-implies "X_2" "X_1") "."]
      "An " imp-word " is " [:em "prime"] " if it is not covered by any other " imp-word "s of the same function."
      ]
     [typography {:component "div"}
      "We want to find a " [:em "minimal realization"] " of" [$ "F"] "as a " (ifsop "sum of products" "product of sums")
      "—a function" [$ "F^*"] "such that:"
      [conditions
       [:li [$ "F^* \\iff F"]]
       [:li [expression {:pre "F^* = "} [(ifsop :OR :AND) "X_1" "X_2" "\\dots" "X_m"]]
        " where the " [$ "X_i"] " are " (ifsop "products" "sums") " of literals."]
       [:li "There exists no expression satisfying the previous properties with fewer total literals than " [$ "F^*" "."]]]
      "From (1) and (2), it follows immediately that these " [$ "X_1, X_2, \\dots"] " are " imp-word "s of" [$ "F" "."]
      "Moreover, they must be prime; if" [$ "X_k"] "could be covered by a different "
      imp-word [$ "X_k'" ","] "then the function"
      [expression {:pre "{F^*}' = " :var-fn identity}
       [(ifsop :OR :AND) "X_1" "\\dots" "X_{k-1}" "X_k'" "\\dots" "X_m"]]
      "would violate (3)."]
     [typography {:component "div"}
      "Consequently, if" [$ (str (format-prime 1) ", " (format-prime 2) ", \\dots")]
      "are the prime " imp-word "s of the function" [$ "F" ","]
      "then minimizing it is equivalent to finding some (not necessarily unique) subset"
      [$ (str "\\impset \\subseteq \\{" (format-prime 1) ", " (format-prime 2) ", \\dots \\}")]
      "for which"
      [$ (str "F^* = " (ifsop "\\sum" "\\prod") "_{" (format-prime) "\\in \\impset}" (format-prime))]
      "is minimal."]
     [typography {:component "div"}
      "The " [:em "Quine-McCluskey"]
      " algorithm is a technique for minimizing a Boolean function by determining its prime implicants and then determining a minimal subset "
      ]])
  )

(defn- base2 [x]
  [:span x [:sub "2"]])

(defn- prime-implicants-section [{:keys [data ifsop ifsop-implies format-var] :as data-map}]
  (let [{:keys [primes target-form imp-word term-word vars steps]} data
        nprimes (count primes)
        lit (ifsop (fn [x one?] (case one? true x false [:NOT x] nil))
                   (fn [x one?] (case one? true [:NOT x] false x nil)))
        mapsto [$ {:class "rel-op"} "\\mapsto"]
        inner-op (ifsop :AND :OR)
        example-imp (fn [& vs] [$ {:class "ex-imp"} (->latex (into [inner-op]
                                                                   (keep-indexed #(lit (str "\\var_" (- 3 %1)) %2))
                                                                   vs))])]
    [:<>
     [typography {:variant "h5"}
      "Find Prime " (ifsop "Implicants" "Implicates")]
     [:div.steps
      [step {:number 1}
       [step-summary "Group " imp-word "s by the number of 1's in their binary representations."]
       [typography {:component "div"}
        "Observe that each " term-word " is itself an " imp-word " of " [$ "F" "."]
        ]]
      [step {:number 2}
       [step-summary "Identify and merge pairs of " imp-word "s whose binary forms differ in exactly one position."]
       [:<>
        [typography {:component "div" :style {:margin-bottom 8}}
         "If " [$ "F"] "has two " imp-word "s that differ in exactly one position, then the expression derived by"
         " removing the conflicting variable is an " imp-word " of" [$ "F" ","] "that covers both of the original "
         imp-word "s. The removed variable is often expressed as a dash in the binary representation."]
        [typography {:component "div"}
         "For example, supposing we were working with some 4-variable function, " (base2 "1010") "and" (base2 "1110")
         "would be merged as" (base2 "1-10") ". This corresponds to the observation that the " imp-word "s"
         [:div.example-imps
          (base2 "1010") mapsto (example-imp true false true false)
          (base2 "1110") mapsto (example-imp true true true false)]
         "are both covered by a more general " imp-word ":"
         [:div.example-imps
          (base2 "1‒10") mapsto (conj (example-imp true nil true false) ".")]]]]
      [step {:number 3}
       [step-summary "Mark any " imp-word "s which can not be merged as prime."]
       ]
      [step {:number 4 :loop true}
       [step-summary "Return to step 1 with the newly merged " imp-word "s, removing duplicates as necessary."]
       [typography {:component "div"}
        "Repeat until no further merges can be made."]]
      [step {:number 5 :result true}
       [step-summary "Merging Steps" [:span.normal " (" (count steps) ")"]
        [:span.normal " and "] "Prime " (ifsop "Implicants" "Implicates") [:span.normal " (" nprimes ")"]]
       [:div {:class (classes :vertical-grid)}
        [reduction-steps-section data-map]
        [typography {:variant "subtitle1"}
         "Prime " (ifsop "Implicants" "Implicates")]
        [prime-implicants-grid data-map]]]]]))

(defn- coverage-table-section [{:keys [data format-prime format-term ifsop ifsop-implies] :as data-map}]
  (let [{:keys [terms target-form term-word imp-word essentials]} data]
    (if (zero? (count terms))
      [:<>
       [typography {:component "div"}
        "Zero terms"]
       ]
      [:<>
       [typography {:variant "h5"}
        "Create A Coverage Table"]
       [:div.steps
        [step {:number 1}
         [step-summary "Create a table with one row for each prime " imp-word ", and one column for each " term-word "."]]
        (let [pi (format-prime :i)
              mj (format-term :j)]
          [step {:number 2}
           [step-summary "In each row" [$ "i" ","] "mark all columns" [$ "j"]
            "where the corresponding prime " imp-word [$ pi] "covers " term-word [$ mj "."]]])
        [step {:number 3}
         [step-summary "Identify any essential prime " imp-word "s."]
         [typography {:component "div"}
          "A prime implicant is considered " [:em "essential"]
          " if it uniquely covers a particular " term-word ". Since " [$ "F^*"]
          "covers all " term-word "s, we may conclude that all essential prime " imp-word "s are necessarily in" [$ "\\impset" "."]
          " Thus, we can remove them, and all of the " term-word "s they cover from the table."]]
        [step {:number 3}
         [step-summary "Remove any essential prime " imp-word "s and " term-word "s they cover from the table."]
         ]
        [step {:number 4, :last true, :result true}
         [step-summary "Coverage Table" [:span.normal " and "]
          (str "Essential Prime " imp-word "s")
          [:span.normal " (" (count essentials) ")"]]
         [:div {:class (classes :vertical-grid)}
          [typography {:variant "subtitle1"} "Coverage Table"]
          [coverage-table
           (mp :table-props {:formatColumnHeader format-term
                             :minColumnWidth (+ 32 (* (maximum int-digits terms) 7))}
               data-map)]
          [typography {:component "div"}
           (if (empty? essentials)
             [typography {:variant "subtitle1"}
              "No essential prime " imp-word "s exist."]
             [:<>
              [typography {:variant "subtitle1"}
               "Essential Prime " (ifsop "Implicants" "Implicates")]
              [essentials-table data-map]
              ]
             )
           (if (empty? essentials)
             "Since there are no essential prime implicants in this case, "
             "We remove all rows corresponding to essential primes,
             columns corresponding to any terms those essential primes cover.")]]
         ]]

       ]
      )
    ))

(defn- petricks-method-section [{:keys [data format-term format-prime ifsop imp-word] :as data-map}]
  (let [{:keys [primes vars terms term-length target-form term-word imp-word remaining essentials]} (echol :petdat data)
        varp (apply && (map (applied ||) (vals remaining)))
        espanded (->SOP varp)
        remaining-terms (map (partial get terms) (keys remaining))
        [rem-idx rem-cov] (first remaining)
        rem-cov (sort rem-cov)
        nrem-cov (count rem-cov)
        rem-term (get terms rem-idx)
        rem-term-formatted (format-term rem-term)
        ->bobj (imp->bobj-fn target-form (vec (range term-length)))
        ess-primes (keys essentials)
        prime-bobj (into [(ifsop :OR :AND)] ess-primes)
        indexed-expr (into [(ifsop :OR :AND)]
                           (map #(->bobj (get primes %)))
                           ess-primes)
        format-vars (format-var term-length)]
    (cond
      (empty? remaining-terms)
      [typography {:component "div"}
       "Since all " term-word "s are covered by an essential " imp-word
       ", and a minimal " (ifsop "sum" "product")
       " must include all prime " imp-word "s as terms, it follows that the minimal form is exactly "
       [expression {:var-fn format-prime
                    :display true}
        prime-bobj]
       [expression {:pre " = "
                    :var-fn format-vars
                    :display true}
        indexed-expr]
       [expression {:pre " = "
                    :var-fn #(format-latex-var (get vars %))
                    :display true}
        indexed-expr]
       ]

      (singleton? remaining-terms)
      [:<>
       [typography {:component "div"}
        "With essential prime " imp-word "s removed, only the " term-word
        [$ (format-term (first remaining-terms))] "remains uncovered."
        " It suffices to choose a prime " imp-word " that covers it with minimal terms."
        " Of the non-essential prime " imp-word "s that cover it"
        [expression {:var-fn format-prime
                     :display true}
         prime-bobj]
        [expression {:pre " = "
                     :var-fn format-vars
                     :display true}
         indexed-expr]
        [expression {:pre " = "
                     :var-fn #(format-latex-var (get vars %))
                     :display true}
         indexed-expr]
        ]
       ]

      :else
      [:<>
       [typography {:component "div"}
        "After removing essential prime " imp-word "s and the " term-word "s they cover from the table, columns "
        (str/join ", " (butlast remaining-terms))
        (if (> (count remaining-terms) 2) ",")
        " and "
        (last remaining-terms)
        " remain uncovered."]
       [typography {:variant "h5"} "Petrick's Method"]
       [:div.steps
        [step {:number 1}
         [step-summary "Derive new boolean variables from the remaining rows and columns in the reduced coverage table."]
         [typography {:component "div"}
          "For each uncovered " term-word [$ (format-term :i) ","]
          "let" [$ "\\cvar_{i}"] "be a boolean variable which is true when"
          [$ (format-term :i)] "is covered by some element of" [$ "\\impset" "."]
          "The statement that" [$ "F^*"] "covers all remaining terms is equivalent to the conjunction of these"
          [$ "\\cvar_{i}" ":"]
          [expression {:class "original"
                       :pre "\\tag{1}"
                       :post "."
                       :var-fn format-covered-var
                       :display true
                       :math-props {:options {:displayMode true}}}
           (apply && remaining-terms)]
          "This represents the assertion that" [$ "F^*"] "covers" [$ (format-term (first remaining-terms)) ","] "and"
          [$ "F^*"] "covers" [$ (format-term (second remaining-terms)) ","] "and etc."]]
        [step {:number 2}
         [step-summary "Define a function that is true when all remaining " term-word "s are covered."]
         [:<>
          [typography {:component "div"}
           "For each remaining prime " imp-word [$ (format-prime :i) ","]
           "let" [$ "\\pvar_{i}"] "be a boolean variable which is true when"
           [$ (str (format-prime :i) " \\in \\impset") "."]
           "It is our goal to rewrite (1) in terms of these new variables" [$ "\\pvar_i" "."]
           ]
          [typography {:component "div"}
           "With essential rows hidden, it's easy to see that"
           (case nrem-cov
             2 [:<>
                [$ (format-prime (first rem-cov))]
                "and"
                [$ (format-prime (second rem-cov))]]
             [:<>
              (for' [c (butlast rem-cov)]
                [$ {:key c} (format-prime c) ","])
              "and"
              [$ (format-prime (last rem-cov))]])
           "are the only prime implicants that cover" [$ rem-term-formatted "."]
           "Thus,"
           [expression {:pre (str "\\cvar_{" rem-term "} \\iff ")
                        :var-fn format-prime-var
                        :display false
                        :punct ","}
            (apply || rem-cov)]
           "since" [$ "F^*"] "covers" [$ rem-term-formatted] "if and only if"
           (case nrem-cov
             1 [$ (str (format-prime (first rem-cov)) "\\in \\impset") "."]
             2 [:<>
                [$ (str (format-prime (first rem-cov)) "\\in \\impset")]
                "or"
                [$ (str (format-prime (second rem-cov)) "\\in \\impset") "."]]
             (interpose "or"
                        (fori' [i :index, c rem-cov]
                          [$ {:key c} (str (format-prime c) "\\in \\impset") (if (< i (dec nrem-cov)) "," ".")])))
           "Applying the same reasoning to each uncovered term gives the following set of relations:"
           [implications-grid data-map]

           "Substituting, we find (1) is equivalent to"
           [expression {:var-fn format-prime-var
                        :display true
                        :punct "."}
            varp]]]]
        (let [first-espanded (first espanded)]
          [step {:number 3}
           [step-summary "Expand to a sum of products and simplify."]
           [typography {:component "div"}
            "Recursively applying the identities"
            [$ (str (->latex [:AND "A" [:OR "B" "C"]])
                    " = "
                    (->latex [:OR [:AND "A" "B"] [:AND "A" "C"]]))]
            "and"
            [$ (str (->latex [:OR "A" [:AND "A" "B"]])
                    " = "
                    (->latex [:var "A"]))]
            "results in the expression"
            [expression {:var-fn format-prime-var
                         :post "."
                         :display true}
             espanded]
            "Each term in the above sum represents a set of prime " imp-word "s, which, when taken together, cover all remaining "
            term-word "s. For example,"
            [$ (->latex first-espanded format-prime-var)]
            "represents the choice of"
            [$ (str-join "" ", " "" format-prime (butlast first-espanded))]
            " and " [$ (format-prime (last first-espanded)) "."]
            ]])
        [step {:number 4, :last true}
         [step-summary "Select products with the"]
         ]]
       [typography
        (when (seq essentials)
          [:<>
           "After removing essential implicants and the columns they cover from the table, we are left with "
           (verbalize-coll "column" remaining-terms)
           ". "])]
       ])
    )
  )

(defn steps-card [{:keys [title expr !vars target-form results-type terms search-string]
                   :or {title "Minimization Steps" target-form :SOP}}]
  (with-let [!data (r/atom nil)]
    (let [{:keys [target-form] :as data}
          (reset! !data
                  (minimization-steps
                   target-form
                   @!vars
                   (if (= results-type :expression) expr terms)))
          !sel (r/atom {:selection nil, :page [0 1]})
          format-term (case target-form
                        :SOP format-minterm
                        :POS format-maxterm)
          format-prime (case target-form
                         :SOP format-prime-implicant
                         :POS format-prime-implicate)
          ifsop (case target-form
                  :SOP (fn [a _] a)
                  :POS (fn [_ b] b))
          ifsop-implies (case target-form
                          :SOP (fn [a b] (str a " \\implies " b))
                          :POS (fn [a b] (str b " \\implies " a)))
          data-map (mp data !vars !sel format-term format-prime ifsop ifsop-implies search-string)]
      [card {:class (classes :steps-card :vertical-grid)
             :on-click (fn [e]
                         (when (j/get-in e [:target :closest])
                           (when-not (j/call-in e [:target :closest] ".clicky")
                             (swap! !sel assoc :selection nil))))
             :data-ustr (gstr/createUniqueString)
             :id "steps-card"}
       ;[card-header {:class (:card-header classes)
       ;              :title title}]
       ;       [divider {:class (:divider classes)}]
       [card-content {:class (classes :card-content)}
        [typography {:variant "h5"} title]
        [introduction-section data-map]
        [terms-section data-map]
        [prime-implicants-section data-map]
        [coverage-table-section data-map]
        [petricks-method-section data-map]
        ]])))
