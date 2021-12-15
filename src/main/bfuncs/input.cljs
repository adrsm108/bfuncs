(ns bfuncs.input
  (:require
   [reagent.core :as r :refer-macros [with-let]]
   [bfuncs.style :refer [classes]]
   [applied-science.js-interop :as j]
   [bfuncs.utils :refer [echol echo mp toggle! event-value let-case reduce!]]
   [bfuncs.typesetting :refer [$ format-latex-var terms-expression expression]]
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
   [reagent-material-ui.icons.add-outlined :refer [add-outlined]]
   [reagent-material-ui.icons.help-outline-outlined :refer [help-outline-outlined]]
   [bfuncs.transitions :refer [switch-transition]]
   ["/bfuncs/EditorField" :refer [TermsField ExpressionField oneShotExpressionParse]]
   [clojure.set :as set]
   [clojure.string :as string]))


(defonce !input-type (r/atom "expression"))
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
  (when-some [parse (oneShotExpressionParse expr-str)]
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
   [expression {:class (classes :typeset-expression)
                :expandable true}
    expr]])

(defn expression-input [{:keys [class]}]
  (r/with-let [handle-parse (fn [js-result]
                              (swap! !expression-field-state assoc
                                     :parse (parse-result->clj
                                             js-result
                                             :expression)))
               handle-click-away #(reset! !marked-var [nil false])
               default-text (get-in @!expression-field-state [:parse :text])
               !last-valid-expr (atom nil)]
    (let [marked-var @(r/track! first @!marked-var)
          {issues :issues
           {:keys [vars tree errors?] :as porse} :parse} @!expression-field-state]
      [click-away-listener {:on-click-away handle-click-away}
       [:div {:class (classes :expression-input class)}
        [expression-field {:marked-var marked-var
                           :on-parse handle-parse
                           :issues issues
                           :initial-doc default-text}]
        [expression-section (if errors?
                              @!last-valid-expr
                              (reset! !last-valid-expr tree))]
        [variables-section vars marked-var]]])))

(defn- minterms-input [{:keys [class]}]
  (with-let [default-text (get-in @!minterms-field-state [:parse :text])
             handle-minterms-parse (handle-terms-fn :minterms
                                                    !minterms-field-state
                                                    !u-minterms-field-state
                                                    !duped-minterms)
             default-u-text (get-in @!u-minterms-field-state [:parse :text])
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

(defn- maxterms-input [{:keys [class]}]
  (with-let [default-text (get-in @!maxterms-field-state [:parse :text])
             handle-maxterms-parse (handle-terms-fn :maxterms
                                                    !maxterms-field-state
                                                    !u-maxterms-field-state
                                                    !duped-maxterms)
             default-u-text (get-in @!u-maxterms-field-state [:parse :text])
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
                     :initial-doc default-text}]
       [terms-field {:class "unspecified"
                     :placeholder "Unspecified terms..."
                     :duped-terms duped-maxterms
                     :issues u-issues
                     :on-parse handle-u-maxterms-parse
                     :initial-doc default-u-text
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

(defn input-card [{:keys [on-success on-failure on-submit on-back]}]
  (r/with-let [submit (fn []
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
                                                          :type first)))))]
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
       (case @!input-type
         "minterms" [fade {:key "minterms"}
                     [:div.fade-wrapper
                      [minterms-input]]]
         "maxterms" [fade {:key "maxterms"}
                     [:div.fade-wrapper
                      [maxterms-input]]]
         "expression" [fade {:key "expression"}
                       [:div.fade-wrapper
                        [expression-input]]])]
      [:div.buttons
       [button {:class "go-button"
                :variant "outlined"
                :disable-elevation true
                :color "primary"
                :on-click submit
                :size "large"}
        "Go"]]]]))
