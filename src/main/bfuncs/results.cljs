(ns bfuncs.results
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
   [bfuncs.typesetting :refer [typesetting-menu expression $ $$ operator-calibration format-latex-var terms-expression]]
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
   [reagent-material-ui.icons.settings-outlined :refer [settings-outlined]]
   [reagent-material-ui.styles :refer [theme-provider]]
   [reagent-material-ui.icons.git-hub :refer [git-hub]] ;endregion
   ["/bfuncs/TruthTable" :default TruthTable]
   ["/bfuncs/FunctionSummary" :refer [RadialChart]]
   ["/bfuncs/jsUtils" :refer [functionBytes, bytesToBigInt, functionProperties]])
  )


(defn results-card [{:keys [title expr vars terms function-properties function-values
                            results-type minimal-sops minimal-poss anf show-steps]}]
  [card {:class (classes :results-card)}
   [card-content {:class (classes :card-content :vertical-grid)}
    #_[typography {:variant "h2"}
       title]
    [typography {:variant "h5"} "Function"]
    (if (= results-type :expression)
      [expression {:class (classes :main-function
                                   "expression")
                   :expandable true}
       expr]
      (let [{:keys [terms type unspecified]} terms]
        [terms-expression {:class (classes :main-function "terms")
                           results-type terms
                           :unspecified unspecified}]))
    (let [n (count vars)
          {:keys [index term-counts]} function-properties]
      [:<>
       #_(when index
           [$$ (j/call index :toLocaleString)])
       (when term-counts
         [:<>
          [typography {:variant "h5"} "Terms"]
          [:> RadialChart {:class (classes :radial-chart)
                           :counts term-counts}]])

       [typography {:variant "h5"} "Truth Table"]
       (when (some? function-values)
         [:> TruthTable {:f function-values
                         :arity n
                         :fullySpecified true
                         :class (classes :truth-table)
                         :size (cond
                                 (<= n 5) "large"
                                 (<= n 6) "medium"
                                 :else "small")}])])
    [typography {:variant "h5"} "Alternate Forms"]
    [expressions-table {:key expression}
     #_[expressions-table-rows {:label "Bum of Pawducts"
                                :data @!spoof-expressions}]
     [expressions-table-rows {:label "Minimal Sum of Products"
                              :steps? true
                              :on-click-steps #(show-steps :SOP)
                              #_(fn []
                                  (log "doing it")
                                  (toggle! !steps-target :SOP))
                              :data minimal-sops}]
     [expressions-table-rows {:label "Minimal Product of Sums"
                              :steps? true
                              :on-click-steps #(show-steps :POS)
                              ;:on-click-steps #(toggle! !steps-target :POS)
                              :data minimal-poss}]
     (when (some? anf)
       [expressions-table-rows {:label "Zhegalkin Polynomial"
                                :data (vector anf)}])]]])
