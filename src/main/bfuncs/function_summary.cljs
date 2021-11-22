(ns bfuncs.function-summary
  (:require
   [bfuncs.style :refer [classes]]
   ["/bfuncs/FunctionSummary" :refer [RadialChart]]))

(defn radial-chart [{:keys [class counts]}]
  [:> RadialChart {:class (classes :radial-chart class)
                   :counts counts}])





