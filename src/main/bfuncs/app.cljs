(ns bfuncs.app
  (:refer-clojure :exclude [bytes byte-array byte-array?])
  (:require
   [applied-science.js-interop :as j]
   [reagent.core :as r]
   [fipp.clojure :as fipp]
   [cljs.core.async :refer [>! <!] :refer-macros [go]]
   [bfuncs.algebra :refer [! || && <*> <+>]]
   [bfuncs.input :refer [expression-input input-card]]
   [bfuncs.globals :refer [notifier notify!]]
   [bfuncs.parsing :refer [parse-minterms variables bexpr->bobj ->js-fn ->js-fn-strs]]
   [bfuncs.steps-card :refer [steps-card]]
   [bfuncs.style :refer [app-style theme with-styles classes]]
   [bfuncs.tables :refer [expressions-table expressions-table-rows]]
   [bfuncs.typesetting :refer [typesetting-menu expression $ $$ operator-calibration format-latex-var]]
   [bfuncs.transitions :refer [switch-transition]]
   [bfuncs.utils :refer [event-value event-checked reset-nil! toggle! dbg echod
                         for' fori' echol go-reset! log maximum]]
   [bfuncs.worker-fns :refer [create-worker-channel] :refer-macros [go-task]]
   ;region [mui components]
   [reagent-material-ui.core.app-bar :refer [app-bar]]
   [reagent-material-ui.core.button :refer [button]]
   [reagent-material-ui.core.button-group :refer [button-group]]
   [reagent-material-ui.core.card :refer [card]]
   [reagent-material-ui.core.card-content :refer [card-content]]
   [reagent-material-ui.core.container :refer [container]]
   [reagent-material-ui.core.css-baseline :refer [css-baseline]]
   [reagent-material-ui.core.icon-button :refer [icon-button]]
   [reagent-material-ui.icons.help-outline-outlined :refer [help-outline-outlined]]
   [reagent-material-ui.core.switch-component :refer [switch]]
   [reagent-material-ui.core.text-field :refer [text-field]]
   [reagent-material-ui.core.toolbar :refer [toolbar]]
   [reagent-material-ui.core.typography :refer [typography]]
   [reagent-material-ui.icons.tune-outlined :refer [tune-outlined]]
   [reagent-material-ui.styles :refer [theme-provider]] ;endregion
   [reagent-material-ui.icons.git-hub :refer [git-hub]]
   ["/bfuncs/TruthTable" :default TruthTable]
   ["/bfuncs/FunctionSummary" :refer [RadialChart]]
   ["/bfuncs/jsUtils" :refer [functionBytes, bytesToBigInt, functionProperties]]))

(def ^:private num-workers 1)
(def ^:private worker-channel (create-worker-channel num-workers))
(defonce !typesetting-menu-open (r/atom false))
(defonce !term-parse-opts (r/atom {:binary false}))
(defonce !parsed-expression (r/atom nil))
(defonce !parsed-variables (r/atom nil))
(defonce !parsed-terms (r/atom nil))
(defonce !minimal-expressions (r/atom nil))
(defonce !results-type (r/atom false))
(defonce !steps-target (r/atom nil))
(defonce !minimal-sops (r/atom nil))
(defonce !minimal-poss (r/atom nil))
(defonce !anf (r/atom nil))
(defonce !function-values (r/atom nil))
(defonce !function-properties (r/atom nil))
(defonce !spoof-expressions (r/atom nil))


(defn reparse-minterms!
  [state]
  (swap! state
         assoc
         :parse (parse-minterms (:value @state) @!term-parse-opts)))


(defn- terms-field [{:keys [state label]}] #_terms-field
  [text-field {:class (classes :text-field)
               :InputProps {:class (classes :text-field-input)}
               :value (:value @state)
               :label label
               :variant "outlined"
               :multiline true
               :rows 1
               :rows-max 15
               :on-change (fn [e]
                            (swap! state assoc :value (event-value e))
                            (reparse-minterms! state))
               :auto-complete "off"
               :auto-correct "off"
               :spell-check "false"}])

(defn- results-card [{:keys [title]}]
  [card {:class (classes :results-card)}
   [card-content {:class (classes :card-content :vertical-grid)}
    #_[typography {:variant "h2"}
       title]
    [typography {:variant "h5"} "Function"]
    [expression {:class (classes :typeset-expression)
                 :expandable true}
     @!parsed-expression]
    (let [n (count @!parsed-variables)
          {:keys [index term-counts]} @!function-properties]
      [:<>
       (when index
         [$$ (j/call index :toLocaleString)])
       (when term-counts
         [:> RadialChart {:class (classes :radial-chart)
                          :counts term-counts}])

       [typography {:variant "h5"} "Truth Table"]
       (when-some [function-values @!function-values]
         [:> TruthTable {:f function-values
                         :arity n
                         :fullySpecified true
                         :class (classes :truth-table)
                         :size (cond
                                 (<= n 5) "large"
                                 (<= n 6) "medium"
                                 :else "small")}])])
    [typography {:variant "h5"} "Alternate Forms"]
    [expressions-table {:key @!parsed-expression}
     #_[expressions-table-rows {:label "Bum of Pawducts"
                                :data @!spoof-expressions}]
     [expressions-table-rows {:label "Minimal Sum of Products"
                              :steps? true
                              :on-click-steps (fn []
                                                (log "doing it")
                                                (toggle! !steps-target :SOP))
                              :data @!minimal-sops}]
     [expressions-table-rows {:label "Minimal Product of Sums"
                              :steps? true
                              :on-click-steps #(toggle! !steps-target :POS)
                              :data @!minimal-poss}]
     (if-some [anf @!anf]
       [expressions-table-rows {:label "Zhegalkin Polynomial"
                                :data (vector anf)}])]]])

(defn- minimize-and-stuff [fvals vars]
  (when fvals
    (go-task [_worker worker-channel
              min-sops (:min-sops vars fvals)]
      (reset! !minimal-sops min-sops))
    (go-task [_worker worker-channel
              min-poss (:min-poss vars fvals)]
      (reset! !minimal-poss min-poss))))

(defn handle-success! [{:keys [type vars tree terms]}]
  (case type

    :expression
    (let [nvars (count vars)]
      (reset! !parsed-variables vars)
      (reset! !parsed-expression tree)
      (go-task [_worker worker-channel
                fvals (:function-bytes (->js-fn-strs vars tree) nvars)]
        (reset! !results-type type)
        (reset! !function-values fvals)
        (when fvals
          (minimize-and-stuff fvals vars))
        (let [{:keys [fully-specified digit-string]}
              (reset! !function-properties
                      (-> fvals
                          (functionProperties nvars (<= nvars 5))
                          (js->clj :keywordize-keys true)))]
          (when fully-specified
            (go-task [_worker worker-channel
                      zp (:zhegalkin-polynomial vars digit-string)]
              (reset! !anf (echod :anf zp)))))))

    :minterms
    (let [arity (->> terms
                     (transduce cat max)
                     (inc)
                     (Math/log2)
                     (Math/ceil))
          vars (mapv #(str "x_" %) (range arity))]
      (reset! !parsed-variables vars)
      (reset! !parsed-terms {:type :minterms
                             :terms (first terms)
                             :unspecified (second terms)
                             :term-length arity})
      (go-task [_worker worker-channel
                fvals (:minterms-bytes terms arity)]
        (reset! !results-type type)
        (reset! !function-values fvals)
        (minimize-and-stuff fvals vars)
        (let [{:keys [fully-specified digit-string]}
              (reset! !function-properties
                      (-> fvals
                          (functionProperties arity (<= arity 5))
                          (js->clj :keywordize-keys true)))]
          (when fully-specified
            (go-task [_worker worker-channel
                      zp (:zhegalkin-polynomial vars digit-string)]
              (reset! !anf (echod :anf zp)))))))

    :maxterms
    (let [arity (->> terms
                     (transduce cat max)
                     (inc)
                     (Math/log2)
                     (Math/ceil))
          vars (mapv #(str "x_" %) (range arity))]
      (reset! !parsed-variables vars)
      (reset! !parsed-terms {:type :maxterms
                             :terms (first terms)
                             :unspecified (second terms)
                             :term-length arity})
      (go-task [_worker worker-channel
                fvals (:maxterms-bytes terms arity)]
        (reset! !results-type type)
        (reset! !function-values fvals)
        (minimize-and-stuff fvals vars)
        (let [{:keys [fully-specified digit-string]}
              (reset! !function-properties
                      (-> fvals
                          (functionProperties arity (<= arity 5))
                          (js->clj :keywordize-keys true)))]
          (when fully-specified
            (go-task [_worker worker-channel
                      zp (:zhegalkin-polynomial vars digit-string)]
              (reset! !anf (echod :anf zp))))))) ))

(defn- main [{}]
  [:div {:class (classes :root)}
   [app-bar {:color "default"
             :class (classes :app-bar)
             :position "relative"}
    [toolbar {:class (classes :toolbar)}
     [typography {:variant "h4"
                  :no-wrap true
                  :class (classes :title)}
      "Boolean Function Explorer"]
     [icon-button {:color "inherit"}
      [help-outline-outlined
       {:font-size "inherit"}]]
     [icon-button {:color "inherit"}
      [git-hub]]
     [icon-button {:edge "end"
                   :color "inherit"
                   :on-click #(toggle! !typesetting-menu-open)
                   :class (classes :typesetting-menu-button)}
      [tune-outlined]]]]

   [typesetting-menu {:open @!typesetting-menu-open
                      :on-close #(reset! !typesetting-menu-open false)}]
   [:main {:class (classes :main)}
    [container {:max-width "md",
                :class "main-container"}
     [input-card {:on-success handle-success!
                  :on-submit #(reset-nil! !parsed-expression
                                          !parsed-variables
                                          !parsed-terms
                                          !function-properties
                                          !function-values
                                          !minimal-expressions
                                          !minimal-sops
                                          !minimal-poss
                                          !anf
                                          !results-type
                                          !steps-target)
                  :on-failure #(dbg "on failure")}]

     #_(when @!results-type
         [button-group
          [button {:on-click #(reset! !spoof-expressions nil)}
           "none"]
          [button {:on-click #(reset! !spoof-expressions [(|| (&& "a" "b" "c") (&& "d" "e" "f"))])}
           "one"]
          [button {:on-click #(reset! !spoof-expressions [(|| (&& "a" "b" "c") (&& "d" "e" "f"))
                                                          (|| (&& "a" "b" "c") (&& "d" "e" "f"))
                                                          (|| (&& "a" "b" "c") (&& "d" "e" "f"))])}
           "three"]
          [button {:on-click #(reset! !spoof-expressions (repeat 11 (|| (&& "a" "b" "c") (&& "d" "e" "f"))))}
           "many"]]
         )

     (when-let [results-type @!results-type]
       [:div
        [results-card {:title "Results"
                       ;:key (str (random-uuid))
                       }]
        (when-let [steps-target @!steps-target]
          [steps-card {:title "Steps"
                       :results-type results-type
                       :expr @!parsed-expression
                       :!vars !parsed-variables
                       :target-form steps-target
                       :terms @!parsed-terms}])
        ])

     #_[:textarea {:style {:width "100%"
                           :height 400}
                   :read-only true
                   :value (with-out-str (fipp/pprint (echol :parsedexpr @!parsed-expression)))}
        ]

     #_(when @!results-type
         [:<>
          [:div
           ()
           [typography @!target-form]
           [switch {:checked (= @!target-form :POS)
                    :on-change #(reset! !target-form (if (event-checked %) :POS :SOP))}]]
          [steps-card {:title "Steppies"
                       :expr @!parsed-expression
                       :!vars !parsed-variables
                       :target-form @!target-form}]])


     ;      [operator-calibration]

     #_(for' [base (keys ts-data/bases)]
         [calibrate {:key base
                     :data (str "\\" (name base))}])
     ]]
   [notifier {:class (classes :notification)}]])

(defn app []
  [:<>
   [css-baseline]
   [theme-provider theme
    [((with-styles app-style) main)]]])
