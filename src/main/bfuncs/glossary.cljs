(ns bfuncs.glossary
  (:require
   [applied-science.js-interop :as j]
   [bfuncs.style :refer [classes]]
   [clojure.string :as str]
   [goog.string :as gstr]
   [bfuncs.utils :refer [echo ;definition
                         ]]
   [bfuncs.typesetting :refer [$ $$ ->latex expression]]
   [bfuncs.algebra :refer [&& || !]]
   [reagent-material-ui.core.popper :refer [popper]]
   [reagent-material-ui.core.link :refer [link]]
   [reagent-material-ui.core.typography :refer [typography]]
   [reagent-material-ui.core.button :refer [button]]
   [reagent-material-ui.core.grow :refer [grow]]
   [reagent-material-ui.core.paper :refer [paper]]
   [reagent-material-ui.core.click-away-listener :refer [click-away-listener]]
   [reagent-material-ui.core.tooltip :refer [tooltip]]
   [goog.dom :as gdom]
   [reagent-material-ui.core.box :refer [box]]
   ["@material-ui/core/Grow" :default MuiGrow]
   ["@material-ui/core/Fade" :default MuiFade]
   ["@material-ui/core/Popper" :default MuiPopper]
   [reagent.core :as r :refer-macros [with-let]]
   [react :as react]))

(declare definitions)

(defn- definition [{:keys [title examples]} & body]
  [:div.shit
   [:span.arrow]
   [paper {:elevation 3
           :class (classes :definition)}
    (when title
      [typography {:variant "h5"
                   :class "def-title"
                   :gutter-bottom true}
       title])
    (into [typography {:variant "body1"
                       :component "div"
                       :class "def-body"}]
          body)]])

(defn- definition-fn [key]
  (fn [props]
    (r/create-element MuiGrow
                      (js/Object.assign
                       #js {:style #js {:transformOrigin "50% 0 0"}}
                       (j/get props :TransitionProps)
                       (when (j/get-in props [:TransitionProps :in])
                         #js {:timeout 100}
                         #js {})
                       )
                      (r/as-element (definitions key [:div "No definition found"])))))

(defn gloss
  ([key text]
   (r/with-let [!anchor (r/atom nil)]
     [:span {:class (classes :gloss)}
      [link {:class "gloss-word clicky"
             :variant "inherit"
             :component "button"
             :color "secondary"
             :on-click (fn [e]
                         (swap! !anchor #(when-not % (j/get e :currentTarget))))}
       text]
      [click-away-listener {:on-click-away #(reset! !anchor nil)}
       (let [anchor @!anchor]
         [popper {:open (some? anchor)
                  :anchor-el anchor
                  :transition true
                  :disable-portal true
                  :class (classes :definition-popper)
                  :modifiers {:prevent-overflow {:enabled true
                                                 :boundaries-element (gdom/getElement "steps-card")
                                                 :padding 0}
                              :flip {:enabled false}
                              :arrow {:enabled true
                                      :element ".arrow"}
                              :offset {:enabled true
                                       :offset "0, 4"}}}
          @(r/track definition-fn key)])]])))

(def definitions
  {:literal
   [definition {:title "Literal"}
    "A variable" [$ "x" ","] "or its complement" [$ (->latex (! "x")) "."]]
   :implicant
   [definition {:title "Implicant"}
    "An" [:em "implicant"] [$ "X"] "of a boolean function" [$ "F"] "is a conjunction (product) of"
    [gloss :literal "literals"] "where"
    [$ "{X \\implies F}" "."]]
   :implicate
   [definition {:title "Implicate"}
    "An" [:em "implicate"] [$ "Y"] "of a boolean function" [$ "F"] "is a disjunction (sum) of"
    [gloss :literal "literals"] "where"
    [$ "{F \\implies Y}" "."]
    #_[$ (str "{" (->latex (! "Y")) " \\implies " (->latex (! "F")) "}") "."]]
   :cover-sop
   [definition {:title "Coverage (Implicant)"}
    "Implicant" [$ "X_1"] "is said to" [:em "cover"] "implicant" [$ "X_2"]
    "if" [$ "{X_2 \\implies X_1}" "."]]
   :cover-pos
   [definition {:title "Coverage (Implicate)"}
    "Implicate" [$ "Y_1"] "is said to" [:em "cover"] "implicate" [$ "Y_2"]
    "if"
    [$ "{Y_1 \\implies Y_2}" "."]]
   })
