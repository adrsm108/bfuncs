(ns bfuncs.app
  (:refer-clojure :exclude [bytes byte-array byte-array?])
  (:require
   [applied-science.js-interop :as j]
   [reagent.core :as r]
   [cljs.core.async :refer [>! <!] :refer-macros [go]]
   [bfuncs.algebra :refer [! || && <*> <+>]]
   [bfuncs.input :refer [expression-input input-card query-expression-parse query-terms-parse]]
   [bfuncs.globals :refer [notifier notify!]]
   [bfuncs.parsing :refer [parse-minterms variables bexpr->bobj ->js-fn ->js-fn-strs]]
   [bfuncs.steps :refer [steps-card]]
   [bfuncs.style :refer [app-style theme with-styles classes]]
   [bfuncs.tables :refer [expressions-table expressions-table-rows]]
   [bfuncs.typesetting :refer [typesetting-menu expression $ $$ operator-calibration format-latex-var
                               format-search-expr format-search-terms]]
   [bfuncs.transitions :refer [switch-transition]]
   [bfuncs.utils :refer [event-value event-checked reset-nil! toggle! dbg echod let-case
                         for' fori' echol go-reset! log maximum pass str-join]]
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
   [reagent-material-ui.core.switch-component :refer [switch]]
   [reagent-material-ui.core.text-field :refer [text-field]]
   [reagent-material-ui.core.toolbar :refer [toolbar]]
   [reagent-material-ui.core.typography :refer [typography]]
   [reagent-material-ui.core.fade :refer [fade]]
   [reagent-material-ui.core.circular-progress :refer [circular-progress]]
   [reagent-material-ui.styles :refer [theme-provider]]
   [reagent-material-ui.icons.arrow-back :refer [arrow-back]]
   [reagent-material-ui.icons.help-outline :refer [help-outline]]
   [reagent-material-ui.icons.settings :refer [settings]]
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
(defonce !processed (r/atom false))
(defonce !input-key (r/atom 0))
(defonce !_search-string (atom nil))

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
  ([results]
   (handle-success! results
                    (fn []
                      (reset! !redirect
                              {:to {:pathname "/results"
                                    :search @!_search-string}
                               :push true})
                      (swap! !input-key inc))))
  ([{:keys [type vars tree terms text]} callback]
   (js/console.log "handling success")
   (case type
     :expression
     (let [nvars (count vars)]
       (reset! !parsed-variables vars)
       (reset! !parsed-expression tree)
       (go-task [_worker worker-channel
                 fvals (:function-bytes (->js-fn-strs vars tree) nvars)]
         (reset! !_search-string (str "?t=expression&e=" (js/encodeURIComponent text)))
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
         (callback fvals)))

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
         (reset! !_search-string (str "?t=minterms" (format-search-terms terms)))
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
         (callback fvals)))

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
         (reset! !_search-string (str "?t=maxterms" (format-search-terms terms)))
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

(defn- process-steps-target! [target]
  (when target
    (reset! !steps-target (keyword target))))

(defn- process-from-location! [location]
  (let [search-params (js/URLSearchParams. (j/get location :search))]
    (js/console.log "processing from location")
    (reset-state!)
    (if-some [res (let-case [t (j/call search-params :get "t")]
                    "expression" (do
                                   (process-steps-target! (j/call search-params :get "targ"))
                                   (query-expression-parse
                                    (echol :expr (j/call search-params :get "e"))))
                    ("minterms"
                     "maxterms") (do
                                   (process-steps-target! (j/call search-params :get "targ"))
                                   (query-terms-parse
                                    (j/call search-params :get "m")
                                    (j/call search-params :get "d")
                                    (keyword t)))
                    nil)]
      (handle-success! res (fn []
                             (reset! !processed true)
                             (reset! !redirect {:to location})))
      (do (reset! !redirect {:to "/"})
          (reset! !processed true)))))

(defn main-f [{}]
  (let [location (useLocation)
        history (useHistory)]
    (swap! !_search-string
           #(if (nil? %) (j/get location :search) %))
    [:div {:class (classes :root)}
     [app-bar {:color "default"
               :class (classes :app-bar)
               :position "relative"}
      [toolbar {:class (classes :toolbar)}
       [:div {:class (classes :back-button (when (= "/" (j/get location :pathname))
                                             "hidden"))}
        [icon-button {:color "inherit"
                      :edge "start"
                      :on-click #(j/call history :goBack)}
         [arrow-back]]]
       [typography {:variant "h4"
                    :no-wrap true
                    :class (classes :title)}
        [:a {:href "/"
             #_#_:on-click (fn []
                             (reset-state!)
                             (if (= "/" (j/get location :pathname))
                               (reset! !input-key "")
                               (do
                                 (reset! !input-key (j/get location :search))
                                 (.push history "/"))))}
         "Boolean Functions"]]
       [icon-button {:color "inherit"
                     :href "https://github.com/adrsm108/bfuncs"
                     :target "_blank"
                     :rel "noreferrer noopener"}
        [git-hub]]
       [icon-button {:edge "end"
                     :color "inherit"
                     :on-click #(toggle! !typesetting-menu-open)
                     :class (classes :typesetting-menu-button)}
        [settings]]]]

     [typesetting-menu {:open @!typesetting-menu-open
                        :on-close #(reset! !typesetting-menu-open false)}]
     [:main {:class (classes :main)}
      [container {:max-width "md",
                  :class "main-container"}
       [:> Switch
        [:> Route {:path "/" :exact true}
         [fade {:in true}
          [input-card {:key @!input-key
                       :search-params (js/URLSearchParams. @!_search-string)
                       :on-success handle-success!
                       :on-submit (fn []
                                    (reset! !processed true)
                                    (reset-state!))
                       :on-failure #(dbg "on failure")}]]]

        [:> Route {:path "/results"}
         [switch-transition
          (if @!processed
            [fade {:key "/results"}
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
                                                                  :search (str @!_search-string
                                                                               "&targ=" (name target-form))}
                                                             :push true}))
                            :results-type @!results-type
                            :search-string @!_search-string}]]
            (do
              (process-from-location! location)
              [fade {:style {:transition-delay "500ms"}
                     :key "result-progress"}
               [:div {:class (classes :process-progress)}
                [circular-progress {:size "10vw"}]]
               ]))]]

        [:> Route {:path "/steps"}
         (if @!processed
           [steps-card {:title "Minimization Steps"
                        :results-type @!results-type
                        :expr @!parsed-expression
                        :!vars !parsed-variables
                        :target-form @!steps-target
                        :terms @!parsed-terms
                        :search-string @!_search-string}]
           (do
             (process-from-location! location)
             [fade {:style {:transition-delay "500ms"}
                    :key "steps-progress"}
              [:div {:class (classes :process-progress)}
               [circular-progress {:size "10vw"}]]]))]]]

      (when-some [redirect @!redirect]
        (echol :redirecting redirect)
        (reset-nil! !redirect)
        [:> Redirect redirect])
      ]
     [notifier {:class (classes :notification)}]])
  )


(defn main [{}]
  [:f> main-f])

(defn app []
  [:<>
   [css-baseline]
   [theme-provider theme
    [((with-styles app-style) main)]]])