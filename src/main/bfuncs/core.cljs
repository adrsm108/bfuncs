(ns bfuncs.core
  (:require
   [bfuncs.app :refer [app]]
   [goog.dom :as gdom]
   [reagent.dom :as rdom]))

(defn ^:dev/after-load start []
  (rdom/render [app] (gdom/getElement "app")))

(defn init []
  (start))
