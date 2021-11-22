(ns bfuncs.transitions
  (:require [reagent-material-ui.util :refer [adapt-react-class]]
            ["react-transition-group" :refer [TransitionGroup SwitchTransition CSSTransition]]
            [reagent-material-ui.core.collapse :refer [collapse]]
            ["@material-ui/core/Collapse" :default MuiCollapse]
            [reagent.core :as r]))

(def transition-group (adapt-react-class TransitionGroup "transition-group"))

(def switch-transition (adapt-react-class SwitchTransition "switch-transition"))

(def css-transition (adapt-react-class CSSTransition "css-transition"))

#_(defn fade-collapse [props & children]
  (into [:> MuiCollapse (r/merge-props {:TransitionComponent CSSTransition
                                   :class "fade-collapse"} props)]
        children)
  )
