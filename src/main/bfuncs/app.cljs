(ns bfuncs.app
  (:refer-clojure :exclude [bytes byte-array byte-array?])
  (:require
   [applied-science.js-interop :as j]
   [reagent.core :as r]
   [fipp.clojure :as fipp]
   [cljs.core.async :refer [>! <!] :refer-macros [go]]
   [bfuncs.algebra :refer [! || && <*> <+>]]
   [bfuncs.input :refer [expression-input input-card query-expression-parse query-terms-parse]]
   [bfuncs.globals :refer [notifier notify!]]
   [bfuncs.parsing :refer [parse-minterms variables bexpr->bobj ->js-fn ->js-fn-strs]]
   [bfuncs.steps-card :refer [steps-card]]
   [bfuncs.style :refer [app-style theme with-styles classes]]
   [bfuncs.tables :refer [expressions-table expressions-table-rows]]
   [bfuncs.typesetting :refer [typesetting-menu expression $ $$ operator-calibration format-latex-var]]
   [bfuncs.transitions :refer [switch-transition]]
   [bfuncs.utils :refer [event-value event-checked reset-nil! toggle! dbg echod let-case
                         for' fori' echol go-reset! log maximum pass]]
   [bfuncs.results :refer [results-card]]
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
   [reagent-material-ui.icons.settings-outlined :refer [settings-outlined]]
   [reagent-material-ui.styles :refer [theme-provider]]
   [reagent-material-ui.core.circular-progress :refer [circular-progress]]
   [reagent-material-ui.core.fade :refer [fade]]
   [reagent-material-ui.icons.git-hub :refer [git-hub]] ;endregion
   ["react-router-dom" :refer [BrowserRouter Switch Route Link Redirect useHistory useLocation withRouter]]
   ["/bfuncs/jsUtils" :refer [functionBytes bytesToBigInt functionProperties]]))

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
(defonce !app-stage (r/atom :input)) ; :input, :results, or :steps
(defonce !redirect (r/atom nil))
(defonce !processed (atom false))

(defn reset-state! []
  (reset-nil! !parsed-expression
              !parsed-variables
              !parsed-terms
              !function-properties
              !function-values
              !minimal-expressions
              !minimal-sops
              !minimal-poss
              !anf
              !results-type
              !steps-target))

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

(defn- minimize-and-stuff [fvals vars]
  (when fvals
    (go-task [_worker worker-channel
              min-sops (:min-sops vars fvals)]
      (reset! !minimal-sops min-sops))
    (go-task [_worker worker-channel
              min-poss (:min-poss vars fvals)]
      (reset! !minimal-poss min-poss))))

(defn handle-success!
  ([results] (handle-success! (echol :reszz results) pass))
  ([{:keys [type vars tree terms text]} callback]
   (case type

     :expression
     (let [nvars (count vars)]
       (reset! !parsed-variables vars)
       (reset! !parsed-expression tree)
       (go-task [_worker worker-channel
                 fvals (:function-bytes (->js-fn-strs vars tree) nvars)]
         (reset! !redirect {:to {:pathname "/result"
                                 :search (str "?t=expression&e=" (js/encodeURIComponent text))}})
         (reset! !results-type type)
         (reset! !function-values fvals)
         (when fvals (minimize-and-stuff fvals vars))
         (let [{:keys [fully-specified digit-string]}
               (reset! !function-properties
                       (-> fvals
                           (functionProperties nvars (<= nvars 5))
                           (js->clj :keywordize-keys true)))]
           (when fully-specified
             (go-task [_worker worker-channel
                       zp (:zhegalkin-polynomial vars digit-string)]
               (reset! !anf (echod :anf zp)))))
         (callback fvals)
         ))

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
         (reset! !redirect
                 (let [js-terms (clj->js terms)]
                   {:to {:pathname "/result"
                         :search (str "?t=minterms"
                                      "&m="
                                      (->> js-terms
                                           (first)
                                           (js/encodeURIComponent))
                                      "&d="
                                      (->> js-terms
                                           (second)
                                           (js/encodeURIComponent)))}}))
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
               (reset! !anf (echod :anf zp)))))
         (callback fvals)
         ))

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
         (reset! !redirect
                 (let [js-terms (clj->js terms)]
                   {:to {:pathname "/result"
                         :search (str "?t=maxterms"
                                      "&m="
                                      (->> js-terms
                                           (first)
                                           (js/encodeURIComponent))
                                      "&d="
                                      (->> js-terms
                                           (second)
                                           (js/encodeURIComponent)))}}))
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
               (reset! !anf (echod :anf zp)))))
         (callback fvals))))))

(defn- process-from-url! []
  (let [search-params (echol :query (j/get (js/URL. js/document.location) :searchParams))]
    (if-some [res (let-case [t (j/call search-params :get "t")]
                    "expression" (query-expression-parse
                                  (j/call search-params :get "e"))
                    ("minterms"
                     "maxterms") (query-terms-parse
                                  (j/call search-params :get "m")
                                  (j/call search-params :get "d")
                                  (keyword t))
                    nil)]
      (handle-success! res #(reset! !processed true))
      (reset! !redirect {:to "/"}))))

(defn main [{}]
  [:div {:class (classes :root)}
   [app-bar {:color "default"
             :class (classes :app-bar)
             :position "relative"}
    [toolbar {:class (classes :toolbar)}
     [typography {:variant "h4"
                  :no-wrap true
                  :class (classes :title)
                  }
      [:a {:href "/"}
       "Boolean Function Explorer"]]
     [icon-button {:color "inherit"}
      [help-outline-outlined
       {:font-size "inherit"}]]
     [icon-button {:color "inherit"
                   :href "https://github.com/adrsm108/bfuncs"
                   :target "_blank"
                   :rel "noreferrer noopener"}
      [git-hub]]
     [icon-button {:edge "end"
                   :color "inherit"
                   :on-click #(toggle! !typesetting-menu-open)
                   :class (classes :typesetting-menu-button)}
      [settings-outlined]]]]

   [typesetting-menu {:open @!typesetting-menu-open
                      :on-close #(reset! !typesetting-menu-open false)}]
   [:main {:class (classes :main)}
    [container {:max-width "md",
                :class "main-container"}
     [:> Switch
      [:> Route {:path "/" :exact true}
       [fade {:in true}
        [input-card {:on-success handle-success!
                     :on-submit (fn []
                                  (reset! !processed true)
                                  (reset-state!)
                                  )
                     :on-failure #(dbg "on failure")}]]]
      [:> Route {:path "/result"}
       [switch-transition
        (if @!processed
          [fade {:key "/result"}
           [results-card {:title "Results"
                          :expr @!parsed-expression
                          :vars @!parsed-variables
                          :terms @!parsed-terms
                          :function-properties @!function-properties
                          :function-values @!function-values
                          :minimal-sops @!minimal-sops
                          :minimal-poss @!minimal-poss
                          :anf @!anf
                          :show-steps (fn [target-form]
                                        (reset! !steps-target target-form)
                                        (reset! !redirect {:to {:pathname "/steps"
                                                                :search (j/get (js/URL. js/document.location) :search)}
                                                           :push true}))
                          :results-type @!results-type}]]
          (do
            (process-from-url!)
            [fade {:style {:transition-delay "800ms"}
                   :key "result-progress"}
             [:div {:class (classes :process-progress)}
              [circular-progress {:size "10vw"}]]
             ])
          )
        ]

       ]
      [:> Route {:path "/steps"}
       [switch-transition
        (if @!processed
          [fade {:key "/steps"}
           [steps-card {:title "Steps"
                        :results-type @!results-type
                        :expr @!parsed-expression
                        :!vars !parsed-variables
                        :target-form @!steps-target
                        :terms @!parsed-terms}]]
          (do
            (process-from-url!)
            [fade {:style {:transition-delay "800ms"}
                   :key "steps-progress"}
             [:div {:class (classes :process-progress)}
              [circular-progress {:size "10vw"}]]]))
        ]

       ]
      ]




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
     ]
    (when-some [redirect @!redirect]
      (reset-nil! !redirect)
      [:> Redirect redirect])
    ]
   [notifier {:class (classes :notification)}]]
  )




(defn app []
  [:<>
   [css-baseline]
   [theme-provider theme
    [((with-styles app-style) main)]]])


