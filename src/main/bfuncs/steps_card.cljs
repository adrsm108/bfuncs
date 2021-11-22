(ns bfuncs.steps-card
  (:require
   ["/bfuncs/CoverageTable" :default CoverageTable]
   ["/bfuncs/VariablesDragDrop" :default VariablesDragDrop]
   [applied-science.js-interop :as j]
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
                               format-minterm format-maxterm
                               format-prime-implicant format-prime-implicate
                               format-var format-covered-var format-prime-var]]
   [bfuncs.glossary :refer [gloss]]
   [bfuncs.utils :refer [echo map-vals map-assoc
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
   [reagent-material-ui.icons.expand-more-outlined :refer [expand-more-outlined]]
   [reagent.core :as r :refer-macros [with-let]]))

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
   [grid {:item true, :xs 12
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
       :primeType (get data :prime-type)
       :termType (get data :term-type)
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
       [:td.head "Prime"]
       [:td.head "Uniquely Covers"]]
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
         :aria-label (str "step " number)
         }
   number])

(defn- step [{:keys [number result default-open last]
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
                             (if content?
                               (r/class-names "collapsable"
                                              (if open "open" "closed"))
                               "non-collapsable"))}
       [:div.icon-and-line
        [step-icon (if result "Result" number)]
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

(defn terms-section [{:keys [!vars !sel data format-term alt alt-text]}]
  (let [{:keys [terms vars expr indexed-expr target-form]} data
        nvars (count vars)
        nterms (count terms)
        num-vars (range nvars)
        format-num-var (format-var nvars)
        outer (get-outer target-form)
        inner (get-inner target-form)
        normal-expr ((alt ->SOP ->POS) (echo :indexed indexed-expr) :simplify true)
        full-normal-expr (ints->bobj num-vars outer inner terms)
        ex-term (choose-ex-term terms nvars)]
    [:<>
     ;; Find terms
     [typography {:component "div"}
      "Let "
      [$ (str-join "F(" "," ")=" format-latex-var vars)]
      [expression {:display true} expr]]

     [typography {:variant "h5"}
      (str "Find " (alt "Minterms" "Maxterms"))]
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
      [step {:number 1.5}
       [step-summary "Expand to " (target-form-link target-form) "."]
       [expression {:var-fn format-num-var
                    :display true
                    :expandable true
                    :pre (str-join "{F(" "," ")} =" format-num-var (range nvars))}
        normal-expr]]
      [step {:number 2}
       [step-summary "Expand to full " (target-form-link target-form) "."]
       [expression {:var-fn format-num-var
                    :display true
                    :expandable true
                    :pre (str-join "{F(" "," ")} =" format-num-var (range nvars))}
        full-normal-expr]]
      [step {:number 3}
       [step-summary "Map each clause to its unique integer representation."]
       [typography {:component "div"}
        "This is the binary integer with digits" [$ "b_{n-1}, \\dots, b_1, b_0" ","]
        "where" [$ "b_i"] "is" [$ (alt "1" "0")] "if the clause contains" [$ (format-num-var :i) ","]
        "and" [$ (alt "0" "1")] "if it contains" [$ (->latex (! :i) format-num-var) "."]
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
          [$ (format-term ex-term)]]]]]
      [step {:number 4 :result true :last true}
       [step-summary (alt-text "Minterms" "Maxterms") " (" nterms ")"]
       [:div {:class (classes :terms-table)}
        (for' [term terms]
          ^{:key term} [term-chip term format-term !sel])]
       ]]
     ]))

(defn- prime-implicants-section [{:keys [data alt alt-text] :as data-map}]
  (let [{:keys [primes target-form]} data
        nprimes (count primes)]
    [:<>
     [typography {:variant "h5"}
      "Find Prime " (alt "Implicants" "Implicates")]
     [typography {:component "div"}
      "an"
      [gloss :implicant "implicant"]
      " implicant is"
      [gloss :implicate "implicate"]
      "coverage "
      [gloss :cover-sop "covers"]
      "or can have also"
      [gloss :cover-pos "covers"]
      "implicants."
      ]
     [reduction-steps-section data-map]
     [typography {:component "div"}
      [$ "F"] "has" [:span nprimes] "prime"
      (if (= nprimes 1)
        (alt-text "implicant:" "implicate:")
        (alt-text "implicants:" "implicates:"))]
     [prime-implicants-grid data-map]])
  )

(defn- coverage-table-section [{:keys [data format-prime format-term alt alt-text] :as data-map}]
  (let [{:keys [terms target-form term-type prime-type essentials]} data]
    [:<>
     [typography {:component "div"}
      "We know that any minimal solution"
      [$ "F^*"] "must be a" (alt-text "disjunction" "conjunction")
      "of prime" (alt-text "implicants." "implicates.")
      "That is, for some subset of prime" (alt-text "implicants" "implicates")
      [$ (str "\\P \\subseteq \\{" (format-prime 1) ", " (format-prime 2) ", \\dots \\}") ","]
      [$$ (str "F^* = " (alt "\\bigvee" "\\bigwedge") "_{" (format-prime) "\\in \\P}" (format-prime)) "."]
      "From this perspective, minimization involves determining" [$ "\\P"] "such that"
      ]
     #_[typography {:component "div"}
        [$ "F^*"] "must be a "
        (alt-text "dis" "con") "junction of prime implicants.
         That is, for some subset of prime implicants"
        ]
     [typography {:variant "h5"}
      "Create Coverage Table"]
     [coverage-table
      (mp :table-props {:formatColumnHeader format-term
                        :minColumnWidth (+ 32 (* (maximum int-digits terms) 7))}
          data-map
          )]
     [typography {:component "div"}
      "TABLE EXPLANATION GOES HERE MAYBE?"]

     [typography {:component "div"}
      "A prime implicant is considered"
      [gloss :essential "essential"]
      "if it covers a" (alt-text "minterm" "maxterm") "that no others do."
      (if (empty? essentials)
        [:<>
         " In this case, no prime implicants are essential."]
        [:<>
         "The following prime implicants are essential: "
         [essentials-table data-map]
         ]
        )
      (if (empty? essentials)
        "Since there are no essential prime implicants in this case, "
        "We remove all rows corresponding to essential primes,
        columns corresponding to any terms those essential primes cover.")]]))

(defn- petricks-method-section [{:keys [data format-term format-prime alt-text] :as data-map}]
  (let [{:keys [terms term-type target-form remaining essentials]} data
        varp (apply && (map (applied ||) (vals remaining)))
        espanded (->SOP varp)
        remaining-terms (map (partial get terms) (keys remaining))
        [rem-idx rem-cov] (first remaining)
        rem-cov (sort rem-cov)
        nrem-cov (count rem-cov)
        rem-term (get terms rem-idx)
        rem-term-formatted (format-term rem-term)]
    [:<>
     [typography {:variant "h5"} "Petrick's Method"]
     [:div.steps
      [step {:number 1}
       [step-summary "Remove essential prime implicants from the coverage table."]

       [typography {:component "div"}
        (if (empty? essentials)
          "Since there are no essential prime implicants in this case, "
          "We remove all rows corresponding to essential primes,
          columns corresponding to any terms those essential primes cover.")]]
      [step {:number 2}
       [step-summary "Derive new boolean variables from the remaining rows
          and columns in the reduced coverage table."]
       [typography
        "For each remaining prime implicant" [$ (format-prime :i) ","]
        "let" [$ "\\pvar_{i}"] "be a boolean variable which is true when"
        [$ (str (format-prime :i) " \\in \\P") "."]
        "For each uncovered " term-type [$ (format-term :i) ","]
        "let" [$ "\\cvar_{i}"] "be a boolean variable which is true when"
        [$ (format-term :i)] "is covered by some element of" [$ "\\P" "."]]]
      [step {:number 3}
       [step-summary
        "Define a function in terms of the variables "
        [$ "\\pvar_1, \\pvar_2, \\dots"]
        " that is true when all remaining terms are covered."]
       [typography {:component "div"}
        "It's clear that"
        [expression {:class "original"
                     :pre "\\tag{1}"
                     :var-fn format-covered-var
                     :display true
                     :math-props {:options {:displayMode true}}}
         (apply && remaining-terms)]
        "is satisfied when " [$ "F^*"]
        "covers all remaining terms. Now, we can use the reduced coverage table to put this in terms of our"
        [$ "\\pvar_i" "."]
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
          1 [$ (str (format-prime (first rem-cov)) "\\in \\P") "."]
          2 [:<>
             [$ (str (format-prime (first rem-cov)) "\\in \\P")]
             "or"
             [$ (str (format-prime (second rem-cov)) "\\in \\P") "."]]
          (interpose "or"
                     (fori' [i :index, c rem-cov]
                       [$ {:key c} (str (format-prime c) "\\in \\P") (if (< i (dec nrem-cov)) "," ".")])))
        "Applying the same reasoning to each uncovered term gives the following set of relations:"
        [implications-grid data-map]

        "Substituting, we find" [$ "(1)"] "is equivalent to"
        [expression {:var-fn format-prime-var
                     :display true
                     :punct "."}
         varp]]]
      [step {:number 4}
       [step-summary "Expand to a sum of products and simplify."]
       [typography {:component "div"}
        "Expanding to a sum of products,"
        [expression {:var-fn format-prime-var
                     :display true}
         espanded]]
       ]
      [step {:number 5, :last true}
       [step-summary "Choose minimal terms"]
       [typography "go"]]]
     [typography
      (when (seq essentials)
        [:<>
         "After removing essential implicants and the columns they cover from the table, we are left with "
         (verbalize-coll "column" remaining-terms)
         ". "])]
     ]
    )
  )

(defn steps-card [{:keys [title expr !vars target-form]
                   :or {title "Steps" target-form :SOP}}]
  (with-let [!data (r/atom nil)]
    (let [{:keys [target-form] :as data} (reset! !data (minimization-steps target-form @!vars expr))
          !sel (r/atom {:selection nil, :page [0 1]})
          format-term (case target-form
                        :SOP format-minterm
                        :POS format-maxterm)
          format-prime (case target-form
                         :SOP format-prime-implicant
                         :POS format-prime-implicate)
          alt (case target-form
                :SOP (fn [a _] a)
                :POS (fn [_ b] b))
          alt-text (case target-form
                     :SOP (fn [a _] [:span a])
                     :POS (fn [_ b] [:span b]))
          data-map (mp data !vars !sel format-term format-prime alt alt-text)]
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
        [typography {:variant "h2"}
         title]
        [terms-section data-map]
        [prime-implicants-section data-map]
        [coverage-table-section data-map]
        [petricks-method-section data-map]
        ]])))
