(ns bfuncs.input
  (:require
   [reagent.core :as r :refer-macros [with-let]]
   [bfuncs.style :refer [classes]]
   [applied-science.js-interop :as j]
   [bfuncs.utils :refer [echol echo mp toggle! event-value let-case reduce!]]
   [bfuncs.typesetting :refer [$ format-latex-var terms-expression expression ->latex]]
   [reagent-material-ui.core.typography :refer [typography]]
   [reagent-material-ui.core.button-base :refer [button-base]]
   [reagent-material-ui.core.click-away-listener :refer [click-away-listener]]
   [reagent-material-ui.core.button :refer [button]]
   [reagent-material-ui.core.card :refer [card]]
   [reagent-material-ui.core.card-content :refer [card-content]]
   [reagent-material-ui.core.form-label :refer [form-label]]
   [reagent-material-ui.core.form-control-label :refer [form-control-label]]
   [reagent-material-ui.core.form-control :refer [form-control]]
   [reagent-material-ui.core.fade :refer [fade]]
   [reagent-material-ui.core.icon-button :refer [icon-button]]
   [reagent-material-ui.core.radio :refer [radio]]
   [reagent-material-ui.core.radio-group :refer [radio-group]]
   [reagent-material-ui.core.link :refer [link]]
   [bfuncs.transitions :refer [switch-transition]]
   ["/bfuncs/EditorField" :refer [TermsField ExpressionField oneShotExpressionParse]]
   [clojure.set :as set]
   [clojure.string :as string]))


(defonce !expression-field-state (r/atom {:issues nil, :parse nil}))
(defonce !marked-var (r/atom nil))

(defonce !minterms-field-state (r/atom {:issues nil, :parse nil}))
(defonce !u-minterms-field-state (r/atom {:issues nil, :parse nil}))
(defonce !duped-minterms (r/atom #{}))

(defonce !maxterms-field-state (r/atom {:issues nil :parse nil}))
(defonce !u-maxterms-field-state (r/atom {:issues nil :parse nil}))
(defonce !duped-maxterms (r/atom #{}))

(def state-atoms
  {"minterms" !minterms-field-state
   "maxterms" !maxterms-field-state})

(def u-state-atoms
  {"minterms" !u-minterms-field-state
   "maxterms" !u-maxterms-field-state})

(defn- reset-state! []
  (reset! !expression-field-state {:issues nil, :parse nil})
  (reset! !marked-var nil)

  (reset! !minterms-field-state {:issues nil, :parse nil})
  (reset! !u-minterms-field-state {:issues nil, :parse nil})
  (reset! !duped-minterms #{})

  (reset! !maxterms-field-state {:issues nil :parse nil})
  (reset! !u-maxterms-field-state {:issues nil :parse nil})
  (reset! !duped-maxterms #{}))

(defn- parse-result->clj [parse-result type]
  (case type
    :expression {:tree (j/get parse-result :parse)
                 :vars (j/get parse-result :vars)
                 :errors? (j/get parse-result :errors)
                 :text (j/get parse-result :text)
                 :type type}
    (:unspecified
     :minterms
     :maxterms) {:terms (vec (j/get parse-result :terms))
                 :extra (j/get parse-result :extra)
                 :errors? (j/get parse-result :errors)
                 :duplicates? (j/get parse-result :duplicates)
                 :text (j/get parse-result :text)
                 :type type}))

(defn query-expression-parse [expr-str]
  (when-some [parse (echol :osep (oneShotExpressionParse expr-str))]
    (parse-result->clj parse :expression)))

(defn query-terms-parse [terms-str unspecified-str type]
  (let [terms (mapv js/parseInt (j/call terms-str :split ","))
        unspecified (mapv js/parseInt (j/call unspecified-str :split ","))
        all-terms (concat terms unspecified)]
    (when (and (every? #(and (int? %) (>= % 0)) all-terms)
               (apply distinct? (concat terms unspecified)))
      {:terms [terms unspecified]
       :type type})))


(defn- term-intersection [{t1 :terms, x1 :extra} {t2 :terms, x2 :extra}]
  (if (or (empty? t1) (empty? t2))
    #{}
    (disj
     (let [[t1 t2] (sort-by count [t1 t2])]
       (into #{}
             (filter (partial contains? (set t2)))
             t1))
     x1 x2)))

(defn- handle-terms-fn [type !this-state !other-state !duped-terms]
  (fn [js-result]
    (let [new-parse (parse-result->clj js-result type)]
      (swap! !this-state assoc :parse new-parse)
      (reset! !duped-terms (term-intersection new-parse (:parse @!other-state))))))


(defn expression-field [{:keys [marked-var on-parse class initial-doc placeholder issues]}]
  [:> ExpressionField {:class (classes :editor-field :expression-field class)
                       :onParse on-parse
                       :showErrors (contains? issues :errors)
                       :markedVariable marked-var
                       :placeholder placeholder
                       :initialDoc initial-doc}])

(defn terms-field [{:keys [class on-parse issues duped-terms allow-empty initial-doc placeholder]
                    :or {allow-empty false}}]
  [:> TermsField {:class (classes :editor-field :terms-field class)
                  :onParse on-parse
                  :showErrors (contains? issues :errors)
                  :duplicatedTerms duped-terms
                  :placeholder placeholder
                  :initialDoc initial-doc
                  :allowEmpty allow-empty}])

(defn variable [var marked?]
  [button-base {:class (classes :input-variable :chip-like (when marked? "selected"))
                :on-click (fn []
                            (toggle! !marked-var [var true]))
                :on-mouse-enter (fn []
                                  (swap! !marked-var #(if (second %) % [var false])))
                :on-mouse-leave (fn []
                                  (swap! !marked-var #(if (second %) % [nil false])))}
   [$ (format-latex-var var)]])

(defn term [t]
  [:div.term (j/call t :toString)])

(defn variables-section [vars mvar]
  [:div.variables-section
   [typography {:variant "body1"
                :class "title"}
    (str "Variables (" (count vars) ")")]
   (into [:div.variables-container]
         (map (fn [v] [variable v (= v mvar)]))
         vars)])

(defn terms-section [title terms]
  (when (seq terms)
    [:div.terms-section
     [typography {:variant "body1"
                  :class "title"}
      (str title " (" (count terms) ")")]
     (into [:div.terms-container]
           (map (fn [t] [:div.term {:key t} t]))
           terms)]))

(defn expression-section [expr]
  [:div.expression-section
   [typography {:variant "body1"
                :class "title"}
    "Expression"]
   [expression {:expandable false
                :display true}
    expr]])

(defn expression-input [{:keys [class expression-default]}]
  (r/with-let [handle-parse (fn [js-result]
                              (swap! !expression-field-state assoc
                                     :parse (parse-result->clj
                                             js-result
                                             :expression)))
               handle-click-away #(reset! !marked-var [nil false])
               default-text (get-in @!expression-field-state [:parse :text] expression-default)
               !last-valid-expr (atom nil)]
    (let [marked-var @(r/track! first @!marked-var)
          {issues :issues
           {:keys [vars tree errors?]} :parse} @!expression-field-state]
      [click-away-listener {:on-click-away handle-click-away}
       [:div {:class (classes :expression-input class)}
        [expression-field {:marked-var marked-var
                           :on-parse handle-parse
                           :issues issues
                           :initial-doc default-text}]
        (when-not (empty? tree)
          [expression-section (if errors?
                                @!last-valid-expr
                                (reset! !last-valid-expr tree))])
        (when-not (empty? vars)
          [variables-section vars marked-var])]])))

(defn- minterms-input [{:keys [class terms-default unspecified-default]}]
  (with-let [default-text (get-in @!minterms-field-state [:parse :text] terms-default)
             handle-minterms-parse (handle-terms-fn :minterms
                                                    !minterms-field-state
                                                    !u-minterms-field-state
                                                    !duped-minterms)
             default-u-text (get-in @!u-minterms-field-state [:parse :text] unspecified-default)
             handle-u-minterms-parse (handle-terms-fn :unspecified
                                                      !u-minterms-field-state
                                                      !minterms-field-state
                                                      !duped-minterms)]
    (let [duped-minterms @(r/track clj->js @!duped-minterms)
          {issues :issues
           {terms :terms} :parse} @!minterms-field-state
          {u-issues :issues
           {u-terms :terms} :parse} @!u-minterms-field-state]
      [:div {:class (classes :minterms-input class)}
       [terms-field {:class "required"
                     :duped-terms duped-minterms
                     :placeholder "Minterms..."
                     :on-parse handle-minterms-parse
                     :issues issues
                     :initial-doc default-text}]
       [terms-field {:class "unspecified"
                     :placeholder "Unspecified terms..."
                     :duped-terms duped-minterms
                     :issues u-issues
                     :on-parse handle-u-minterms-parse
                     :initial-doc default-u-text
                     :allow-empty true}]
       [terms-section "Minterms" terms]
       [terms-section "Unspecified" u-terms]
       (when-not (and (empty? terms) (empty? u-terms))
         [terms-expression {:minterms terms :unspecified u-terms}])])))

(defn- maxterms-input [{:keys [class terms-default unspecified-default]}]
  (with-let [default-text (get-in @!maxterms-field-state [:parse :text] terms-default)
             handle-maxterms-parse (handle-terms-fn :maxterms
                                                    !maxterms-field-state
                                                    !u-maxterms-field-state
                                                    !duped-maxterms)
             default-u-text (get-in @!u-maxterms-field-state [:parse :text] unspecified-default)
             handle-u-maxterms-parse (handle-terms-fn :unspecified
                                                      !u-maxterms-field-state
                                                      !maxterms-field-state
                                                      !duped-maxterms)]
    (let [duped-maxterms @(r/track clj->js @!duped-maxterms)
          {issues :issues
           {terms :terms} :parse} @!maxterms-field-state
          {u-issues :issues
           {u-terms :terms} :parse} @!u-maxterms-field-state]
      [:div {:class (classes :maxterms-input class)}
       [terms-field {:class "required"
                     :duped-terms duped-maxterms
                     :placeholder "Maxterms..."
                     :on-parse handle-maxterms-parse
                     :issues issues
                     :initial-doc terms-default}]
       [terms-field {:class "unspecified"
                     :placeholder "Unspecified terms..."
                     :duped-terms duped-maxterms
                     :issues u-issues
                     :on-parse handle-u-maxterms-parse
                     :initial-doc unspecified-default
                     :allow-empty true}]
       [terms-section "Maxterms" terms]
       [terms-section "Unspecified" u-terms]
       (when-not (and (empty? terms) (empty? u-terms))
         [terms-expression {:maxterms terms :unspecified u-terms}])])))

(defn update-issues! [!state]
  (swap! !state #(assoc % :issues
                          (let [{:keys [errors? duplicates?]} (get % :parse)]
                            (into #{}
                                  (remove nil?)
                                  [(when errors? :errors) (when duplicates? :duplicates)])))))

(defn truth-table [])

(defn syntax-example [{} & examples]
  [:pre (string/join "\n" examples)])

(defn join-lines [& lines]
  (string/join "\n" lines))

(defn term-input-info [{}]
  [typography {:class (classes :input-info)
               :component "div"}
   [typography {:variant "h6"}
    "Minterm/Maxterm Syntax"]
   [typography {:component "div"}
    "Minterms and maxterms should be given as lists of numbers separated by commas or whitespace.
     Integers in base 10, 2, 8, and 16 are supported through the corresponding javascript literal syntax.
    For instance, 24 can be input in decimal, binary, octal, and hex as "
    [:span.syntax [:div.x [:span.cmt-number "24"]]] ", "
    [:span.syntax [:div.x [:span.cmt-number "0b11000"]]] ", "
    [:span.syntax [:div.x [:span.cmt-number "0o30"]]] ", and "
    [:span.syntax [:div.x [:span.cmt-number "0x18"]]] "  respectively."]
   ]
  )

(defn expression-input-info [{}]
  (let [a [:span.cmt-variableName "a"]
        b [:span.cmt-variableName "b"]
        bin (fn [[tag o]] [:div.x a [tag (str " " o " ")] b])
        link (fn [text href] [link {:href href :color "secondary"} text])
        ass (fn [expr] [$ {:class "ass"} (->latex expr nil {:precedence {} :group? >=} nil false)])
        ]
    [typography {:component "div"
                 :class (classes :input-info)}
     [typography {:variant "h6"}
      "Expression Syntax"]
     [typography {:component "div"}
      "Expressions are combinations of variables and operators."]
     [typography {:component "div"}
      "Variables can consist of alphanumeric characters, dashes, and underscores,
      with the restriction that names must begin with a letter, and cannot end with an underscore."]
     [typography {:component "div"}
      "The following table gives supported operators from highest to lowest precedence.
      Operators within the same group have equal precedence.
      Associative operators with equal precedence are left-associative."]
     [typography {:component "div"}
      "Any non-alphabetic operator may be prefixed with "
      [:span.syntax [:div.x [:span.cmt-negated.cmt-operator "!"]]]
      " or "
      [:span.syntax [:div.x [:span.cmt-negated.cmt-operator "~"]]]
      " to obtain its negation; "
      [:span.syntax [:div.x (bin [:span.cmt-negated.cmt-operator "!=>"])]]
      " denotes nonimplication, "
      [:span.syntax [:div.x (bin [:span.cmt-negated.cmt-operator "!<=>"])]]
      " denotes nonequivalence, and so on."
      ]
     [typography {:component "div"}
      "You can change the way expressions are rendered through the typesetting menu in the app bar."]
     [:table
      [:thead
       [:tr
        [:th "Operation"]
        [:th "Truth Vector"]
        [:th "Associativity"]
        [:th "Syntax"]]]

      [:tbody
       [:tr
        [:td "Grouping"]
        [:td]
        [:td]
        [:td>div.syntax
         [:div.x "( " [:em "expr"] " )"]]]]

      [:tbody
       [:tr
        [:td "True"]
        [:td "1"]
        [:td (ass [:TRUE])]
        [:td>div.syntax
         [:div.x [:span.cmt-keyword.cmt-bool "true"]]
         [:div.x [:span.cmt-bool "1"]]
         [:div.x [:span.cmt-bool "⊤"]]]]

       [:tr
        [:td "False"]
        [:td "0"]
        [:td (ass [:FALSE])]
        [:td>div.syntax
         [:div.x [:span.cmt-keyword.cmt-bool "false"]]
         [:div.x [:span.cmt-bool "0"]]
         [:div.x [:span.cmt-bool "⊥"]]]]]

      [:tbody
       [:tr
        [:td (link "NOT" "https://en.wikipedia.org/wiki/Negation")]
        [:td "(10)"]
        [:td (ass [:NOT "a"])]
        [:td>div.syntax
         [:div.x [:span.cmt-operator-keyword.cmt-operator.cmt-keyword.cmt-negated.cmt-operator "not "] a]
         [:div.x [:span.cmt-negated.cmt-operator "!"] a]
         [:div.x a [:span.cmt-negated.cmt-operator "'"]]
         [:div.x [:span.cmt-negated.cmt-operator "~"] a]]]]

      [:tbody
       [:tr
        [:td (link "AND" "https://en.wikipedia.org/wiki/Logical_conjunction")]
        [:td "(0001)"]
        [:td (ass [:AND "a" "b" "c"])]
        [:td>div.syntax
         (bin [:span.cmt-operator-keyword.cmt-operator.cmt-keyword.cmt-log-op.cmt-operator "and"])
         [:div.x a " " b]
         (bin [:span.cmt-log-op.cmt-operator "&&"])
         (bin [:span.cmt-log-op.cmt-operator "&"])
         (bin [:span.cmt-log-op.cmt-operator "."])
         (bin [:span.cmt-log-op.cmt-operator "*"])
         (bin [:span.cmt-log-op.cmt-operator "∧"])]]

       [:tr
        [:td (link "NAND" "https://en.wikipedia.org/wiki/Sheffer_stroke")]
        [:td "(1110)"]
        [:td (ass [:NAND "a" "b" "c"])]
        [:td>div.syntax
         (bin [:span.cmt-operator-keyword.cmt-operator.cmt-keyword.cmt-log-op.cmt-operator "nand"])
         (bin [:span.cmt-log-op.cmt-operator "⊼"])
         (bin [:span.cmt-log-op.cmt-operator "↑"])]]]

      [:tbody
       [:tr
        [:td (link "XOR" "https://en.wikipedia.org/wiki/Exclusive_or")]
        [:td "(0110)"]
        [:td (ass [:XOR "a" "b" "c"])]
        [:td>div.syntax
         (bin [:span.cmt-operator-keyword.cmt-operator.cmt-keyword.cmt-log-op.cmt-operator "xor"])
         (bin [:span.cmt-log-op.cmt-operator "^"])
         (bin [:span.cmt-log-op.cmt-operator "!="])
         (bin [:span.cmt-log-op.cmt-operator "<+>"])
         (bin [:span.cmt-log-op.cmt-operator "⊕"])
         (bin [:span.cmt-log-op.cmt-operator "⊻"])]]

       [:tr
        [:td (link "XNOR" "https://en.wikipedia.org/wiki/Logical_biconditional")]
        [:td "(1001)"]
        [:td (ass [:XNOR "a" "b" "c"])]
        [:td>div.syntax
         (bin [:span.cmt-operator-keyword.cmt-operator.cmt-keyword.cmt-log-op.cmt-operator "xnor"])
         (bin [:span.cmt-log-op.cmt-operator "=="])
         (bin [:span.cmt-log-op.cmt-operator "<*>"])
         (bin [:span.cmt-log-op.cmt-operator "⊙"])
         (bin [:span.cmt-log-op.cmt-operator "⩟"])]]]

      [:tbody
       [:tr
        [:td
         (link "OR" "https://en.wikipedia.org/wiki/Logical_disjunction")]
        [:td "(0111)"]
        [:td (ass [:OR "a" "b" "c"])]
        [:td>div.syntax
         (bin [:span.cmt-operator-keyword.cmt-operator.cmt-keyword.cmt-log-op.cmt-operator "or"])
         (bin [:span.cmt-log-op.cmt-operator "+"])
         (bin [:span.cmt-log-op.cmt-operator "||"])
         (bin [:span.cmt-log-op.cmt-operator "|"])]]

       [:tr
        [:td (link "NOR" "https://en.wikipedia.org/wiki/Logical_NOR")]
        [:td "(1000)"]
        [:td (ass [:NOR "a" "b" "c"])]
        [:td>div.syntax
         (bin [:span.cmt-operator-keyword.cmt-operator.cmt-keyword.cmt-log-op.cmt-operator "nor"])
         (bin [:span.cmt-log-op.cmt-operator "⊽"])
         (bin [:span.cmt-log-op.cmt-operator "↓"])]]]

      [:tbody
       [:tr
        [:td [:em "n"] "-ary Equivalence"]
        [:td "(10…01)"]
        [:td (ass [:EQ "a" "b" "c"])]
        [:td>div.syntax
         (bin [:span.cmt-operator-keyword.cmt-operator.cmt-keyword.cmt-rel-op.cmt-operator "equiv"])
         (bin [:span.cmt-rel-op.cmt-operator "<=>"])
         (bin [:span.cmt-rel-op.cmt-operator "<->"])
         (bin [:span.cmt-rel-op.cmt-operator "⇔"])
         (bin [:span.cmt-rel-op.cmt-operator "↔"])
         (bin [:span.cmt-rel-op.cmt-operator "≡"])]]

       [:tr
        [:td [:em "n"] "-ary Non\u00adequivalence"]
        [:td "(01…10)"]
        [:td (ass [:NEQ "a" "b" "c"])]
        [:td>div.syntax
         (bin [:span.cmt-operator-keyword.cmt-operator.cmt-keyword.cmt-rel-op.cmt-operator "nequiv"])
         (bin [:span.cmt-rel-op.cmt-operator "<=/=>"])
         (bin [:span.cmt-rel-op.cmt-operator "<-/->"])
         (bin [:span.cmt-rel-op.cmt-operator "⇎"])
         (bin [:span.cmt-rel-op.cmt-operator "↮"])
         (bin [:span.cmt-rel-op.cmt-operator "≢"])] ]]

      [:tbody
       [:tr
        [:td (link "Converse Implication" "https://en.wikipedia.org/wiki/Converse_(logic)")]
        [:td "(1101)"]
        [:td (ass [:CON [:CON "a" "b"] "c"])]
        [:td>div.syntax
         (bin [:span.cmt-operator-keyword.cmt-operator.cmt-keyword.cmt-rel-op.cmt-operator "impby"])
         (bin [:span.cmt-rel-op.cmt-operator "<-"])
         (bin [:span.cmt-rel-op.cmt-operator "<="])
         (bin [:span.cmt-rel-op.cmt-operator "⇐"])
         (bin [:span.cmt-rel-op.cmt-operator "←"])
         (bin [:span.cmt-rel-op.cmt-operator "⊂"])]]

       [:tr
        [:td (link "Converse Non\u00adimplication" "https://en.wikipedia.org/wiki/Converse_nonimplication")]
        [:td "(0010)"]
        [:td (ass [:NCON [:NCON "a" "b"] "c"])]
        [:td>div.syntax
         (bin [:span.cmt-operator-keyword.cmt-operator.cmt-keyword.cmt-rel-op.cmt-operator "nimpby"])
         (bin [:span.cmt-rel-op.cmt-operator "</-"])
         (bin [:span.cmt-rel-op.cmt-operator "</="])
         (bin [:span.cmt-rel-op.cmt-operator "⇍"])
         (bin [:span.cmt-rel-op.cmt-operator "⊄"])]]]

      [:tbody
       [:tr
        [:td (link "Implication" "https://en.wikipedia.org/wiki/Material_conditional")]
        [:td "(1011)"]
        [:td (ass [:IMP "a" [:IMP "b" "c"]])]
        [:td>div.syntax
         (bin [:span.cmt-operator-keyword.cmt-operator.cmt-keyword.cmt-rel-op.cmt-operator "imp"])
         (bin [:span.cmt-rel-op.cmt-operator "=>"])
         (bin [:span.cmt-rel-op.cmt-operator "->"])
         (bin [:span.cmt-rel-op.cmt-operator "→"])
         (bin [:span.cmt-rel-op.cmt-operator "⇒"])
         (bin [:span.cmt-rel-op.cmt-operator "⊃"])]]

       [:tr
        [:td (link "Non\u00adimplication" "https://en.wikipedia.org/wiki/Material_nonimplication")]
        [:td "(0100)"]
        [:td (ass [:NIMP "a" [:NIMP "b" "c"]])]
        [:td>div.syntax
         (bin [:span.cmt-operator-keyword.cmt-operator.cmt-keyword.cmt-rel-op.cmt-operator "nimp"])
         (bin [:span.cmt-rel-op.cmt-operator "=/>"])
         (bin [:span.cmt-rel-op.cmt-operator "-/>"])
         (bin [:span.cmt-rel-op.cmt-operator "⇏"])
         (bin [:span.cmt-rel-op.cmt-operator "↛"])
         (bin [:span.cmt-rel-op.cmt-operator "⊅"])]]]]

     ]))

(defn input-card [{:keys [on-success on-failure on-submit key search-params]}]
  (r/with-let [init-type (j/call search-params :get "t")
               !input-type (r/atom (get #{"expression" "minterms" "maxterms"}
                                        init-type "expression"))
               init-expr (when (= init-type "expression")
                           (j/call search-params :get "e"))
               init-minterms (when (= init-type "minterms")
                               (j/call search-params :get "m"))
               init-minterms-d (when (= init-type "minterms")
                                 (j/call search-params :get "d"))
               init-maxterms (when (= init-type "maxterms")
                               (j/call search-params :get "m"))
               init-maxterms-d (when (= init-type "maxterms")
                                 (j/call search-params :get "d"))
               submit (fn []
                        (on-submit)
                        (let-case [input-type @!input-type]
                          "expression" (let [{:keys [issues parse]}
                                             (update-issues! !expression-field-state)]
                                         ((if-not (empty? issues)
                                            on-failure
                                            on-success) parse))
                          ("minterms"
                           "maxterms") (let [{issues :issues
                                              parse :parse} (update-issues! (state-atoms input-type))
                                             {u-issues :issues
                                              u-parse :parse} (update-issues! (u-state-atoms input-type))]
                                         ((if-not (and (empty? issues) (empty? u-issues))
                                            on-failure
                                            on-success) (update (merge-with vector parse u-parse)
                                                          :type first)))))
               _ (echol :resetting (reset-state!))]
    (let [input-type @!input-type]
      [:div {:class (classes :input-card-wrapper :vertical-grid)}
       [card {:class (classes :input-card)}
        [card-content {:class (classes :card-content :vertical-grid)}
         [typography {:variant "h5"}
          "Enter Function"]
         [form-control {:component "fieldset"}
          [form-label {:class "specification-label"
                       :component "legend"} "Specify by"]
          [radio-group {:row true
                        :value @!input-type
                        :on-change #(reset! !input-type (event-value %))}
           [form-control-label {:value "expression"
                                :label "Expression"
                                :control (r/as-element [radio])}]
           [form-control-label {:value "minterms"
                                :label "Minterms"
                                :control (r/as-element [radio])}]
           [form-control-label {:value "maxterms"
                                :label "Maxterms"
                                :control (r/as-element [radio])}]
           ]]
         [switch-transition
          (case input-type
            "minterms" [fade {:key "minterms"}
                        [:div.fade-wrapper
                         [minterms-input {:terms-default init-minterms
                                          :unspecified-default init-minterms-d}]]]
            "maxterms" [fade {:key "maxterms"}
                        [:div.fade-wrapper
                         [maxterms-input {:terms-default init-maxterms
                                          :unspecified-default init-maxterms-d}]]]
            "expression" [fade {:key "expression"}
                          [:div.fade-wrapper
                           [expression-input {:expression-default init-expr}]]])]
         [:div.buttons
          [button {:class "go-button"
                   :variant "outlined"
                   :disable-elevation true
                   :color "primary"
                   :on-click submit
                   :size "large"}
           "Go"]]]]
       [switch-transition
        (case input-type
          "expression" [fade {:key "expression"}
                        [:div.fade-wrapper
                         [expression-input-info]]]
          ("minterms" "maxterms") [fade {:key "terms"}
                                   [:div.fade-wrapper
                                    [term-input-info]]])]])))

