(ns bfuncs.core
  (:require
   [bfuncs.app :refer [app]]
   [goog.dom :as gdom]
   [reagent.dom :as rdom]
   ["react-router-dom" :refer [HashRouter]]
   ))

(defn ^:dev/after-load start []
  (rdom/render [:> HashRouter [:f> app]] (gdom/getElement "app")))

(defn init []
  (start))
