(ns bfuncs.core
  (:require
   [bfuncs.app :refer [app]]
   [goog.dom :as gdom]
   [reagent.dom :as rdom]
   ["react-router-dom" :refer [BrowserRouter]]
   ))

(defn ^:dev/after-load start []
  (rdom/render [:> BrowserRouter [:f> app]] (gdom/getElement "app")))

(defn init []
  (start))
