(ns bfuncs.typesetting
  (:require
   [reagent.core :as r]
   [clojure.string :as str]
   [applied-science.js-interop :as j]
   [goog.dom :as gdom]
   [cljs.core.async :refer [put! <! >! chan] :refer-macros [go]]
   [bfuncs.utils
    :refer [assoc-in' echo map-vals clipboard-write! for' fori' log let-case get-meta
            int-digits pass mp condo-> re-count toggle! str-surround str-join non-empties]]
   [bfuncs.parsing :refer [operation-operands]]
   [bfuncs.globals :refer [notify!]]
   [bfuncs.style :refer [classes]]
   [bfuncs.typesetting-data :as data]
   ;region [mui componenets ...]
   [reagent-material-ui.core.button :refer [button]]
   [reagent-material-ui.core.icon-button :refer [icon-button]]
   [reagent-material-ui.core.typography :refer [typography]]
   [reagent-material-ui.core.button-base :refer [button-base]]
   [reagent-material-ui.core.swipeable-drawer :refer [swipeable-drawer]]
   [reagent-material-ui.core.hidden :refer [hidden]]
   [reagent-material-ui.core.slider :refer [slider]]
   [reagent-material-ui.lab.toggle-button :refer [toggle-button]]
   [reagent-material-ui.lab.toggle-button-group :refer [toggle-button-group]]
   [reagent-material-ui.icons.close-outlined :refer [close-outlined]]
   [reagent-material-ui.icons.file-copy-outlined :refer [file-copy-outlined]]
   [reagent-material-ui.core.tooltip :refer [tooltip]]
   [reagent-material-ui.core.collapse :refer [collapse]]
   [reagent-material-ui.core.text-field :refer [text-field]]
   ;endregion
   ["katex" :as katex]))


(defonce !g-formatters (r/atom {}))

(defn- tex-var-escape [string _alt?]
  (str/replace
   string
   #"[%${}_#&~^-]"
   #(case %
      "~" "{\\sim}"
      "^" "{\\char94}"
      "-" "\\text{--}"
      (str "\\" %))))

(defn- format-multi-char [string alt?]
  (if (str/blank? string)
    "{}"
    (let [[split tail] (str/split string #"_" 2)
          fmt-split (cond->> (tex-var-escape split alt?)
                      (not (or (char? split)
                               (re-matches #"\d*" split)))
                      (str-surround "\\mathit{"
                                    (if (and alt? (not tail))
                                      "\\,}"
                                      "}")))]
      (if tail
        (str "{" fmt-split "_{" (format-multi-char tail alt?) "}}")
        fmt-split))))

(defn- estimate-var-cost
  ([x]
   (let [s (str x)]
     (let-case [len (count s)]
       0 0
       1 (if (re-matches #"[A-Z]" s)
           (data/cost :uppercase)
           (data/cost :lowercase))
       (let [uppers (re-count #"[A-Z]" s)
             lowers (re-count #"[a-z]" s)]
         (+ (* (data/cost :uppercase-italic) uppers)
            (* (data/cost :lowercase-italic) lowers)
            (* (data/cost :digit-italic) (- len uppers lowers)))))))
  ([x var-fn]
   (if-some [v (when (ifn? var-fn) (var-fn x))]
     (if-some [cf (get-meta var-fn :cost-fn)]
       (cf x)
       (estimate-var-cost v))
     (estimate-var-cost x))))

(def format-latex-var
  (memoize
   (fn [x alt?]
     (let [s (str x)]
       (if (char? s)
         (tex-var-escape s alt?)
         (format-multi-char s alt?)
         #_(str "\\mathit{" (tex-var-escape s) "}"))))))

(defn- estimate-subscript-cost [x]
  (if (int? x)
    (cond-> (* (int-digits x) (data/cost :digit-script))
      (neg? x) (+ (data/cost :operator-script)))
    (let [s (str x)]
      (+ (* (re-count #"[A-Z]" s) (data/cost :uppercase-script))
         (* (re-count #"[a-z]" s) (data/cost :lowercase-script))
         (* (re-count #"[-+]" s) (data/cost :operator-script))
         (* (re-count #"\d" s) (data/cost :digit-script))))))

(defn name-or [f] #(if (keyword? %) (name %) (f %)))

(defn name-or-identity [x]
  (if (keyword? x)
    (name x)
    x))

(def int-or-keyword? (some-fn int? keyword?))

(defn- subscript-formatter
  ([spec] (subscript-formatter spec int-or-keyword? name-or-identity))
  ([spec tf] (subscript-formatter spec int-or-keyword? tf))
  ([[base desc base-cost] pred tf]
   (with-meta
    (fn
      ([] (str base))
      ([x] (when (pred x) (str base "_{" (tf x) "}"))))
    {:cost-fn #(+ base-cost (estimate-subscript-cost (tf %)))
     :text-fn #(when (pred %) (str base (tf %)))
     :desc-fn #(when (pred %) (str desc " " (tf %)))})))


(def format-prime-implicant
  (subscript-formatter (data/bases :pimplicant) (name-or inc)))

(def format-prime-implicate
  (subscript-formatter (data/bases :pimplicate) (name-or inc)))

(def format-minterm
  (subscript-formatter (data/bases :minterm)))

(def format-maxterm
  (subscript-formatter (data/bases :maxterm)))

(defn format-var
  ([nvars]
   (subscript-formatter (data/bases :var) (name-or (partial - (dec nvars)))))
  ([i nvars]
   (when (int-or-keyword? i)
     (str "\\var_{" (if (keyword? i)
                      (name i)
                      (- nvars i 1)) "}"))))

(def format-covered-var
  (subscript-formatter (data/bases :cvar)))

(def format-prime-var
  (subscript-formatter (data/bases :pvar) (name-or inc)))

;TODO escape
(def ^:private format-failure
  (with-meta (fn [failure]
               (str "{\\color{red} " (second failure) "}"))
             {:cost (constantly 100)}))

(defn- breaking-infix [op]
  (str " \\allowbreak " op " \\nobreak "))

(defn- ->op-formatter [f fixity cost]
  (with-meta f {:fixity fixity, :cost cost}))

(defn- op-formatter [spec]
  (cond
    (vector? spec) (let [[fixity op price alt] spec]
                     (case fixity
                       :constant (->op-formatter (constantly op)
                                                 fixity [price 0])
                       :infix (let [alt-op (or alt (breaking-infix op))]
                                (->op-formatter #(str/join (if %2 alt-op op) %1)
                                                fixity [0 price]))
                       :prefix (->op-formatter #(str op (first %))
                                               fixity [price 0])
                       :postfix (->op-formatter #(str (first %) op)
                                                fixity [price 0])
                       :matchfix (let [[l r sep] op, [pl pr ps] price]
                                   (->op-formatter (if sep
                                                     (partial str-join l r sep)
                                                     #(str l (str/join %) r))
                                                   fixity [(+ pl pr) (or ps 0)]))))
    (string? spec) (->op-formatter #(str/join spec %) :infix nil)
    (ifn? spec) spec
    :else (-> spec
              pr-str
              (str " is not a function, string, or vector of the form [fixity ops price macros].")
              js/Error.
              throw)))

(def ^:private default-latex-formatters
  (assoc (map-vals
          #(-> % (get-in [:formats 0 :latex]) op-formatter)
          data/operations)
    :instaparse/failure format-failure
    :var format-latex-var))

(def ^:private default-text-formatters
  (assoc (map-vals
          #(-> % (get-in [:formats 0 :text]) op-formatter)
          data/operations)
    :instaparse/failure format-failure
    :var #(str %)  #_"only want 1 arg"))

(def ^:private default-grouping-value 2)

(def ^:private default-grouping
  (get-in data/grouping [default-grouping-value :spec]))

(defn- if-paren
  [test x] (if test (str "(" x ")") x))

(defn- paren-str [x] (str "(" x ")"))

#_(defn- matchfix-formatter? [formatter]
    (boolean (some-> formatter (get-meta :spec) first (= :matchfix))))

(defn- with-var-fn [formatters var-fn]
  (if (some? var-fn)
    (update formatters :var (partial some-fn var-fn))
    formatters))

(defn- prepare-formatters
  [formatters defaults var-fn]
  (cond-> (merge defaults formatters)
    var-fn (update :var (partial some-fn var-fn))))


(defn- prepare-grouping [grouping formatters]
  "Prevents matchfix formatters from being grouped by setting their precedence to ##NaN"
  (update grouping
    :precedence
    (fn [prec]
      (reduce #(if (some-> %2 formatters meta :fixity (= :matchfix))
                 (assoc %1 %2 ##NaN)
                 %1)
              prec (keys prec)))))

(defn- expression-formatter
  [formatters grouping alt]
  (let [{:keys [precedence group?]} (prepare-grouping grouping formatters)]
    (fn go [parent-prec child]
      (let [[op operands] (operation-operands child true)]
        (case op
          (:var :TRUE :FALSE) ((formatters op) (first operands) alt)
          (let [child-prec (precedence op)]
            (condo-> (map (partial go child-prec) operands)
              true ((formatters op) alt)
              (group? parent-prec child-prec) paren-str)))))))

(defn ->plaintext
  ([x] (->plaintext x nil nil nil))
  ([x text-formatters grouping var-fn]
   (if (some? x)
     ((expression-formatter (prepare-formatters text-formatters
                                                default-text-formatters
                                                (get-meta var-fn :text-fn))
                            (merge default-grouping grouping)
                            false)
      ##-Inf x)
     "")))

(defn- grouped-latex
  ([x latex-formatters grouping var-fn]
   (grouped-latex x latex-formatters grouping var-fn 16))
  ([x latex-formatters grouping var-fn max-cost]
   (if-not (some? x)
     ""
     (let [formatters (prepare-formatters latex-formatters
                                          default-latex-formatters
                                          var-fn)
           {:keys [precedence group?]} (prepare-grouping (merge default-grouping grouping)
                                                         formatters)
           p (fn p [parent-prec child]
               (when (some? child)
                 (let [[op operands] (operation-operands child true)
                       fmt (formatters op)]
                   (if (= op :var)
                     (let [o (first operands)]
                       [(fmt o true) (estimate-var-cost o var-fn) false])
                     (let [child-prec (precedence op)
                           {fixity :fixity
                            [init marginal] :cost} (meta fmt)]
                       (if (= fixity :constant)
                         [(fmt) init false]
                         (let [[r c] (loop [i 0
                                            items operands
                                            gitems (transient [])
                                            gidxs (transient []) ; indices of groupable items
                                            cost init]
                                       (if-let [[r c g] (p child-prec (first items))]
                                         (recur (inc i)
                                                (next items)
                                                (conj! gitems r)
                                                (if (and g (<= c max-cost))
                                                  (conj! gidxs i)
                                                  gidxs)
                                                (+ cost c marginal))
                                         [(fmt (persistent!
                                                (if (<= cost max-cost)
                                                  gitems
                                                  ;; when cost of this expression exceeds max-cost,
                                                  ;; surround groupable sub-expressions
                                                  (reduce #(assoc! %1 %2 (str "{" (gitems %2) "}"))
                                                          gitems
                                                          (persistent! gidxs))))
                                               true)
                                          cost]))]
                           (if (group? parent-prec child-prec)
                             [(paren-str r) (+ c (data/cost :parentheses)) true]
                             [r c true]))))))))
           [result cost groupable] (p ##-Inf x)]
       (if (and groupable
                (<= cost max-cost))
         (str "{" result "}")
         result)))))

(defn ->latex
  ([x] (->latex x nil nil nil true))
  ([x var-fn] (->latex x !g-formatters var-fn 16))
  ([x !formatters var-fn]
   (->latex x !formatters var-fn 16))
  ([x !formatters var-fn max-cost]
   (let [{:keys [latex grouping]} @!formatters]
     (->latex x latex grouping var-fn max-cost)))
  ([x latex-formatters grouping var-fn max-cost]
   (if-not (some? x)
     ""
     (if max-cost
       (grouped-latex x latex-formatters grouping var-fn max-cost)
       ((expression-formatter (prepare-formatters latex-formatters
                                                  default-latex-formatters
                                                  var-fn)
                              (merge default-grouping grouping)
                              false)
        ##-Inf x)))))


;; Components

(defn copy-button [value]
  [tooltip {:title "Copy"
            :placement "left"}
   [icon-button {:class "copy-button"
                 :edge "end"
                 :on-click #(notify! {:message (if (clipboard-write! value)
                                                 "Copied!"
                                                 "Clipboard unavailable.")
                                      :auto-hide-duration
                                      1000
                                      :immediate true})
                 :size "small"}
    [file-copy-outlined]]])

(defn- close-button [props]
  [icon-button props
   [close-outlined]])

(defn- katex-trust-handler [x]
  (contains?
   #{"\\htmlClass" "\\htmlStyle"}
   (j/get x :command)))

(defn- katex-strict-handler
  [error-code _error-msg _token]
  (if (= error-code "htmlExtension")
    "ignore"
    "warn"))

(defn- katex-macros
  ([] data/default-macros)
  ([macros] (if macros
              (j/call js/Object :assign (clj->js macros) data/default-macros)
              data/default-macros)))

(defn katex-options
  ([] #js {:displayMode false
           :throwOnError false
           :macros (katex-macros)
           :trust katex-trust-handler
           :strict katex-strict-handler
           :maxExpand ##Inf})
  ([display macros options]
   (j/call js/Object :assign
     #js {:displayMode display
          :throwOnError false
          :macros (katex-macros macros)
          :trust katex-trust-handler
          :strict katex-strict-handler
          :maxExpand ##Inf}
     options)))

(defn- katex-render [latex punct display macros options]
  (let [string-to-render (if punct
                           (str latex " \\htmlClass{punct}{" punct "}")
                           (str latex))]
    (fn [element]
      (when element
        (j/call katex :render
          string-to-render
          element
          (katex-options display macros options))))))

(defn- hanging-indent [indent]
  (when indent
    {:padding-left indent
     :text-indent (if (number? indent)
                    (- indent)
                    (str "-" indent))}))

(defn $
  ([latex] ($ nil latex nil))
  ([a b] (if (string? a) ($ nil a b) ($ a b nil)))
  ([{:keys [class macros options indent component] :as opts} latex punct]
   [(or component (keyword opts) :span)
    {:class (classes :math class)
     :ref (katex-render latex punct false macros options)
     :style (hanging-indent indent)}]))

(defn $$
  ([latex] ($$ nil latex nil))
  ([arg1 arg2] (if (string? arg1) ($$ nil arg1 arg2) ($$ arg1 arg2 nil)))
  ([{:keys [class macros options indent component] :as props} latex punct]
   [(or component (keyword props) :div)
    {:class (classes :math "display" class)
     :ref (katex-render latex punct true macros options)
     :style (hanging-indent indent)}]))

(defn- copy-panel [{:keys [!formatters var-fn]
                    :or {!formatters !g-formatters}}
                   expr]
  (let [{:keys [latex text grouping]} @!formatters
        latex-str (->latex expr latex grouping var-fn false)
        text-str (->plaintext expr text grouping var-fn)
        label-props {:class "label"
                     :component "span"
                     :variant "subtitle2"}
        text-field-props {:class "copy-field"
                          :full-width true
                          :multiline true
                          :rows-max 3
                          :variant "outlined"
                          :InputProps {:read-only true
                                       :on-focus #(j/call-in % [:target :select])
                                       :class "copy-field-input"
                                       :spell-check false}}]
    [:div {:class (classes :copy-panel)}
     [:div.row
      [typography label-props
       [:span "Text"]]
      [text-field (assoc text-field-props
                    :value text-str)]
      [copy-button text-str]]
     [:div.row
      [typography label-props
       [:span "LaTeX"]]
      [text-field (assoc text-field-props
                    :value latex-str)]
      [copy-button latex-str]]]))

(def !open-expr-id (r/atom nil))

(defn- handle-expression-click-fn [id]
  (fn []
    (swap! !open-expr-id (fn [open-id] (when-not (= id open-id) id)))))

(defn- expression-wrapper* [{:keys [component]
                             :or {component :div}
                             :as props}
                            id open summary details]
  [component (r/merge-props {:class (classes :expandable-expression (if open "open" "closed"))}
                            (dissoc props :component))
   [button-base {:on-click (handle-expression-click-fn id)
                 :focus-ripple true
                 :class "summary"}
    summary]
   [hidden {:xs-down true}
    [collapse {:in open
               :mountOnEnter true
               :class (classes :fade-collapse "details")}
     details]]
   [hidden {:sm-up true}
    [swipeable-drawer {:open open
                       :class (classes :expression-drawer)
                       :anchor "bottom"
                       :disable-discovery true
                       :disable-swipe-to-open true
                       :on-open pass
                       :on-close #(reset! !open-expr-id nil)}
     [close-button {:on-click #(reset! !open-expr-id nil)
                    :edge "end"
                    :class "close-button"}]
     summary
     details
     [typography {:class "notification-space"
                  :variant "body2"}
      "."]]]])

(defn- expression-wrapper [props summary details]
  (r/with-let [id (random-uuid)]
    [expression-wrapper* props id (= id @!open-expr-id) summary details]))

(defn minterms-expression [{:keys [minterms unspecified]}]
  [$$ (if (and (empty? minterms) (empty? unspecified))
        (->latex [:FALSE])
        (str-join "\\sum{" " + " "}"
                  (non-empties (when-not (empty? minterms)
                                 (str-join "m(" "," ")" (sort minterms)))
                               (when-not (empty? unspecified)
                                 (str-join "d(" "," ")" (sort unspecified))))))])

(defn maxterms-expression [{:keys [maxterms unspecified]}]
  [$$ (if (and (empty? maxterms) (empty? unspecified))
        (->latex [:TRUE])
        (str-join "\\prod{" " \\cdot " "}"
                  (non-empties (when-not (empty? maxterms)
                                 (str-join "M(" "," ")" (sort maxterms)))
                               (when-not (empty? unspecified)
                                 (str-join "D(" "," ")" (sort unspecified))))))])

(defn expression
  [{:keys [display !formatters expandable wrap class var-fn
           pre post math-props punct max-cost wrapper-props]
    :or {wrap true, max-cost 16, !formatters !g-formatters}}
   expr]
  (when (some? expr)
    (let [formatters @!formatters
          latex (grouped-latex expr
                               (get formatters :latex)
                               (get formatters :grouping)
                               var-fn
                               max-cost)
          math-content [(if (or expandable display) $$ $)
                        math-props
                        (str pre latex post)
                        punct]]
      (if-not expandable
        [(if display :div :span) {:class (classes :expression class "non-expandable")}
         math-content]
        [expression-wrapper wrapper-props
         math-content
         [copy-panel (mp !formatters var-fn) expr]]))))

(defn- ->label
  ([spec] (->label spec "a" "b"))
  ([spec a] (->label spec a "b"))
  ([[fixity o _ alt-o] a b]
   (let [op (or alt-o o)]
     (case fixity
       :constant (str op)
       :infix (str a op b)
       :prefix (str op a)
       :postfix (str a op)
       :matchfix (let [[l r s] op]
                   (if s
                     (str l a s b r)
                     (str l a r)))))))

(defn- options-group [operation group-key formats !formatters]
  (r/with-let [change (fn [_ i]
                        (when (some? i)
                          (let [v (nth formats i)]
                            (swap! !formatters
                                   assoc-in'
                                   [:latex group-key] (op-formatter (get v :latex))
                                   [:text group-key] (op-formatter (get v :text))
                                   [:choices group-key] i))))]
    [:div.toggle-button-container
     [typography {:class "label"
                  :variant "caption"}
      operation]
     (into [toggle-button-group {:size "small"
                                 :exclusive true
                                 :aria-label operation
                                 :value (or @(r/cursor !formatters [:choices group-key]) 0)
                                 :on-change change}]
           (fori' [i :index
                   {:keys [name latex]} formats]
             [toggle-button {:key name
                             :value i
                             :title name
                             :aria-label name
                             :class (classes :math-toggle)}
              [$ (->label latex)]]))]))

(defn- toggle-set
  ([props !formatters] (toggle-set props !formatters nil))
  ([{:keys [ops more title class]} !formatters !open]
   (let [static? (or (empty? more) (nil? !open))
         tset [:div {:class (classes "toggle-set-wrapper"
                                     class
                                     (if static? "static" "expanding"))}
               (into [:div.toggle-set.primary]
                     (for' [key ops
                            :let [{:keys [operation formats]} (get data/operations key {})]]
                       (when formats
                         [options-group operation key formats !formatters])))]]
     [:div.section
      (when title
        [typography {:class "section-title"
                     :variant "subtitle1"}
         title])
      (if static?
        tset
        (let [open @!open]
          (conj tset
                [collapse {:class (classes :fade-collapse)
                           :in open}
                 (into [:div.toggle-set.secondary]
                       (for' [key more
                              :let [{:keys [operation formats]} (get data/operations key {})]]
                         (when formats
                           [options-group operation key formats !formatters])))]
                [:div.more-button
                 [button {:on-click #(toggle! !open)
                          :size "small"}
                  (if open "Less" "More")]])))])))

(def ^:private grouping-marks
  (vec (map-indexed (fn [i x]
                      {:value i
                       :label (some-> x (get :label) r/as-element)})
                    data/grouping)))

(defn- preview-box [props !formatters !operators-open !relations-open]
  [:div.preview-box props
   [typography {:variant "caption"
                :class "label"}
    "Preview"]
   [:div.expression-container
    [expression {:display true
                 :class "demo-expression"
                 :!formatters !formatters
                 :wrap true
                 :max-cost 15}
     data/demo-expression]
    [collapse {:class (classes :fade-collapse)
               :in @!operators-open}
     [expression {:display true
                  :class "demo-expression-extra-operators"
                  :!formatters !formatters
                  :wrap true
                  :max-cost 15}
      data/demo-expression-extra-operators]]
    [collapse {:class (classes :fade-collapse)
               :in @!relations-open}
     [expression {:display true
                  :class "demo-expression-extra-relations"
                  :!formatters !formatters
                  :wrap true
                  :max-cost 15}
      data/demo-expression-extra-relations]]]])

(defn typesetting-menu
  [{:keys [anchor on-open on-close open]
    :or {anchor "right"}}]
  (r/with-let [!demo-formatters (r/atom @!g-formatters)
               !tip-visible (r/atom false)
               !observer (atom nil)
               !operators-open (r/atom false)
               !relations-open (r/atom false)
               update-and-close (fn [e]
                                  (reset! !g-formatters @!demo-formatters)
                                  (on-close e))
               cancel-and-close (fn [e]
                                  (reset! !demo-formatters @!g-formatters)
                                  (on-close e))
               observer-chan (chan 1)
               root-ref (fn [element]
                          (when (and element (not @!observer))
                            (put! observer-chan
                                  (js/IntersectionObserver.
                                   (fn [[entry]]
                                     (j/call-in entry [:target :classList :toggle]
                                       "stuck"
                                       (not (j/get entry :isIntersecting))))
                                   (j/obj :threshold 1.0
                                          :root element)))))
               target-ref (fn [target]
                            (when (and target (not @!observer))
                              (go (let [observer (<! observer-chan)]
                                    (j/call observer :observe target)
                                    (reset! !observer observer)))))]
    [swipeable-drawer {:anchor anchor
                       :open open
                       :disable-discovery true
                       :disable-swipe-to-open true
                       :class (classes :typesetting-menu)
                       :ModalProps {:keepMounted true}
                       :on-open (fn [e]
                                  (reset! !demo-formatters @!g-formatters)
                                  (on-open e))
                       :on-close update-and-close}
     [:div.drawer-content {:ref root-ref}
      [:div.title-and-close
       [typography {:variant "h4"}
        "Typesetting"]
       [close-button {:on-click update-and-close
                      :color "inherit"
                      :edge "end"}]]
      [preview-box {:ref target-ref} !demo-formatters !operators-open !relations-open]
      [toggle-set {:title "Logical Operators"
                   :class "operators"
                   :ops [:NOT :AND :OR :XOR]
                   :more [:NAND :NOR :XNOR]}
       !demo-formatters !operators-open]
      [toggle-set {:title "Relational Operators"
                   :class "relations"
                   :ops [:EQ :IMP]
                   :more [:CON :NEQ :NIMP :NCON]}
       !demo-formatters !relations-open]
      [toggle-set {:title "Constants"
                   :class "constants"
                   :ops [:TRUE :FALSE]}
       !demo-formatters]
      [:div.section
       [typography {:class "section-title"
                    :variant "subtitle1"}
        "Grouping"]
       (let [slider-value (or @(r/cursor !demo-formatters
                                         [:choices :grouping])
                              default-grouping-value)]
         [:div {:class (classes "slider-container" (when @!tip-visible "tip-visible"))}
          [slider {:marks grouping-marks
                   :min 0
                   :max (dec (count data/grouping))
                   :step nil
                   :value slider-value
                   :on-change (fn [_ i]
                                (reset! !tip-visible true)
                                (swap! !demo-formatters assoc-in'
                                       [:grouping] (get-in data/grouping [i :spec])
                                       [:choices :grouping] i))
                   :on-change-committed #(reset! !tip-visible false)}]
          [typography {:variant "body1"
                       ;:color "textSecondary"
                       :class "tip-title"}
           "Group with Parentheses:"]
          (into [typography {:variant "body2"
                             :component "ul"
                             :class "tip"}]
                (fori' [i :index
                        {tip :tip} data/grouping]
                  [:li {:class (if (<= i slider-value) "active" "inactive")}
                   tip]))])]
      [:div.actions
       [button {:class "reset"
                :on-click #(reset! !demo-formatters {})
                :disabled (every? #(case (key %)
                                     :grouping (= (val %) default-grouping-value)
                                     (zero? (val %)))
                                  @(r/cursor !demo-formatters [:choices]))}
        "Reset"]
       [:div.right-actions
        [button {:class "cancel"
                 :on-click cancel-and-close}
         "Cancel"]
        [button {:class "ok"
                 :color "primary"
                 :variant "outlined"
                 :on-click update-and-close}
         "Ok"]]]]]))


;region Measuring
(defn measure [element norm latex]
  (j/call katex :render
    (str "\\htmlClass{measure}{" latex "}")
    element
    (katex-options true nil nil))
  (let [px (-> element
               (j/call :querySelector ".measure")
               (j/call :getClientRects)
               first
               (j/get :width))
        rem (/ px norm)]
    (gdom/removeChildren element)
    (js/parseFloat (j/call rem :toPrecision 5))))

(defn compute-cost
  [element norm [fixity o _ alt-o :as spec]]
  (let [a "{}"
        op (or alt-o o)
        latex (case fixity
                :constant (str op)
                :infix (str a op a)
                :prefix (str op a)
                :postfix (str a op)
                :matchfix (let [[l r s] op]
                            [(str l a r) (str a s a)]))]
    (echo spec
          (assoc spec
            2 (if (string? latex)
                (measure element norm latex)
                (mapv (partial measure element norm) latex))))))

(defn operator-calibration []
  [:div {:class (classes :calibration)
         :ref (fn [element]
                (when element
                  (let [sq (gdom/createElement "div")
                        norm (do
                               (j/call element :append sq)
                               (j/call-in sq [:style :setProperty] "width" "1rem")
                               (j/get (first (j/call sq :getClientRects)) :width))]
                    (gdom/removeChildren element)
                    (prn (reduce
                          (fn [m op-key]
                            (update-in m
                              [op-key :formats]
                              (fn [formats]
                                (mapv (fn [format]
                                        (update format :latex
                                                       (partial compute-cost element norm)))
                                      formats))))
                          data/operations (keys data/operations))))))}])
;endregion