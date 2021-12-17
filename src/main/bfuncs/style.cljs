(ns bfuncs.style
  (:require
   ["@material-ui/core/styles" :as mui-styles]
   ["color" :as color]
   [applied-science.js-interop :as j]
   [bfuncs.utils :refer [echol log] :refer-macros [no-resolve]]
   [clojure.string :as str]
   [reagent-material-ui.colors :as colors]
   [reagent-material-ui.styles :as reagent-mui-styles]
   [reagent-material-ui.util :as mutil]
   [reagent.core :as r])
  (:require-macros [bfuncs.style :refer [style defstyles calc]]))

(defn style-combine [m1 m2]
  (if (and (map? m1) (map? m2))
    (merge-with style-combine m1 m2)
    m2))

(def theme
  (reagent-mui-styles/responsive-font-sizes
   (reagent-mui-styles/create-mui-theme
    {:palette {:primary colors/indigo
               :secondary colors/light-blue
               ;:tertiary colors/pink
               :tertiary colors/brown
               :action {:active-opacity 0.54
                        :active-light "rgba(0, 0, 0, 0.15)"
                        :active-light-opacity 0.15}}
     :typography {:subtitle-1 {:font-size "1.1rem"
                               :line-height 1.5}
                  :h-4 {:font-weight 500}
                  :monospace-1 {:font-family ["Consolas" "Monaco" "monospace"]
                                ;:font-weight 400
                                :font-size "1.2rem"
                                :line-height "normal"}
                  :monospace-2 {:font-family ["monospace" "Source Code Pro"]
                                ;:font-weight 400
                                :font-size "1rem" ;"0.875rem"
                                :line-height "normal"}
                  }})
   {:variants ["h1" "h2" "h3" "h4" "h5" "h6"]}))

(def !vclasses (volatile! nil))

(defn- with-styles [styles]
  (fn [component]
    ((reagent-mui-styles/with-styles styles)
     (fn [{:keys [classes] :as props}]
       (vreset! !vclasses classes)
       (component props)))))

(defn app-style [theme]
  (let [{:keys [spacing breakpoints transitions mixins palette shape typography shadows z-index]} theme
        {break-up :up
         break-down :down
         break-only :only
         break-between :between} breakpoints
        {:keys [primary secondary tertiary grey text action background common divider error warning success]} palette
        {radius :border-radius} shape
        table-border-color (grey 300)
        table-border (str "1px solid " table-border-color)
        {:keys [easing duration]} transitions
        {:keys [complex standard short shorter shortest]} duration
        create-transition #(apply (get transitions :create)
                                  (map clj->js %&))
        essential (let [main (color (tertiary :A200))]
                    {:main (-> main (j/call :alpha 0.4) str)
                     :hover (-> main (j/call :alpha 0.5) str)
                     :active (-> main (j/call :alpha 0.7) str)
                     :text "black"})
        covered (let [main (color (action :hover))]
                  {:main (j/call main :string)
                   :hover (-> main (j/call :opaquer 0.5) str)
                   :active (action :active-light)})
        selected (let [main (primary :A400)]
                   {:main main
                    :hover (-> main color (j/call :darken 0.1) str)
                    :active (-> main color (j/call :darken 0.3) str)
                    :text (primary :contrast-text)})
        compatible (let [main (color (secondary :A100))]
                     {:main (j/call main :string)
                      :hover (-> main (j/call :darken 0.1) str)
                      :active (-> main (j/call :darken 0.3) str)})]
    ;(echol :theme theme)
    (no-resolve ; keeps cursive IDE from trying to resolve new symbols in what follows
     (defstyles
       :chip-container {:display "flex"
                        :flex-flow "row wrap"
                        :justify-content "center"
                        :gap (spacing 1)
                        ;[[0 (spacing 0.5) (spacing 1)]]
                        }
       :unsetti {:appearance "unset" :color "unset" :word-spacing "unset" :text-rendering "unset"
                 :text-transform "unset" :text-indent "unset" :text-shadow "unset" :display "unset"
                 :text-align "unset" :cursor "unset" :align-items "unset" :background-color "unset"
                 :box-sizing "unset" :margin "unset" :font "unset" :padding "unset" :border-width "unset"
                 :border-style "unset" :border-color "unset" :border-image "unset"}
       :selectable {:transition (create-transition ["background-color" "box-shadow" "color" "border-color"]
                                                   {:duration shortest})
                    :cursor "pointer"
                    &:active {:background-color (action :active-light)
                              :box-shadow (shadows 2)}
                    &.covered {:background-color (covered :main)
                               [&:hover &.Mui-focusVisible] {:background-color (covered :hover)}}
                    &.selected {:background-color (selected :main)
                                :color (selected :text)
                                :box-shadow (shadows 1)
                                &:active {:background-color (selected :active)}
                                [&:hover &.Mui-focusVisible] {:background-color (selected :hover)}}
                    [&:hover &.Mui-focusVisible] {:background-color (action :hover)}}
       ;:root {:display "flex"}
       :app-bar {:z-index (z-index :app-bar)
                 :background (background :paper)
                 :color (primary :main)}
       :back-button {:display "inline-block"
                     :transition (create-transition "max-width" {:duration shorter})
                     &.hidden {:max-width 0
                               :overflow "hidden"
                               :visibility "hidden"
                               button {:tab-index -1}
                               }}
       :main {:flex-grow 1
              ;:min-height "100vh"
              :width "100%"
              :display "flex"
              >.main-container {:padding-y (spacing 4)
                                (break-down "xs") {:padding-y (spacing 2)}
                                :display "grid"
                                :row-gap (spacing 4)
                                :align-content "flex-start"
                                >.MuiCard-root {:overflow "unset"}

                                }
              }
       :process-progress {:margin-top (spacing 5)
                          :display "flex"
                          :justify-content "center"}
       :main-grid-item {(break-only "xs") {&.MuiGrid-item {:padding-x (spacing 1)}}}
       :essentials-table {:width "100%"
                          >table {:align-items "start"
                                  :display "grid"
                                  :font-size "1rem"
                                  :justify-content "center"
                                  :grid-template-columns "auto 1fr"
                                  tr {:display "contents"}
                                  td.head.prime {:justify-content "center"}
                                  tr:first-child>td {:mixin (typography :body-2)
                                                     :border-bottom table-border
                                                     :padding-y (spacing 1)
                                                     :text-align "center"
                                                     :align-items "center"
                                                     :line-height 1.5
                                                     :font-weight 500
                                                     :align-self "stretch"}
                                  '(tr (:nth-child 2) >td) {:padding-top (spacing 1)}
                                  tbody {:display "contents"}
                                  td {:display "flex"
                                      :padding [[(spacing 0.5) (spacing 1)]]
                                      &:first-child {}
                                      &:last-child {:border-left table-border
                                                    :width "100%"}}
                                  .terms-container {:display "flex"
                                                    :flex-flow "row wrap"
                                                    :width "100%"
                                                    :gap [[(spacing 0.5)
                                                           (spacing 1)]]}
                                  .implicant-container {:display "flex"
                                                        :justify-content "flex-end"}}}
       :expression {.button-base {:display "flex"
                                  :padding [[0 (spacing 2)]]
                                  :font-size "unset"
                                  :width "100%"}}
       :math-toggle {:text-transform "unset"
                     :letter-spacing "unset"
                     :font-weight "unset"
                     :color "#444"
                     :white-space "nowrap"
                     :width "100%"
                     :min-width (spacing 8)
                     :min-height (spacing 5) ;(spacing 4.5)
                     :padding [[0 (spacing 1.5)]]
                     &.Mui-selected {:color (text :primary)
                                     ;:background-color '(rgba 63 81 181 0.2)
                                     }
                     ;.MuiToggleButton-label {:color (text :primary)}
                     }
       :notification {.close {:padding (spacing 0.5)}}
       :expression-drawer {>.MuiDrawer-paper {:padding [[(+ (spacing 4) 30) (spacing 2) (spacing 2)]]
                                              :border-top-radius (* 2 radius)
                                              >.close-button {:position "absolute"
                                                              :top (spacing 2)
                                                              :right (spacing 2)}

                                              .notification-space {:padding-y 14
                                                                   :visibility "hidden"}}
                           }
       :steps {:display "grid"}
       :paper {:padding (spacing 2)
               :display "flex"
               :overflow "auto"
               :flex-direction "column"}
       :typesetting-menu
       {.title-and-close {:display "flex"
                          ;:color (primary :main)
                          :align-items "center"
                          :justify-content "space-between"}

        .drawer-content
        {:padding 0
         :display "grid"
         :width 450
         :row-gap (spacing 1)
         :overflow-y "scroll"
         :overflow-x "hidden"
         :grid-template-columns "100%"
         :align-content "start"
         :position "relative"
         (break-down "xs") {:width (calc (- "100vw" [(spacing 4) :px]))}
         >* {:padding-x (spacing 2.5)
             &:first-child {:padding-top (spacing 2)}
             &:last-child {:padding-bottom (spacing 2)}}
         >.preview-box {:padding (spacing 2.5)
                        :position "sticky"
                        :top -1
                        :border-bottom-radius (* 2 radius)
                        :background (background :paper)
                        :z-index 1
                        :transition (create-transition "box-shadow" {:duration shorter})
                        &.stuck {:box-shadow (shadows 3)}
                        >.expression-container {:display "flex"
                                                :flex-direction "column"
                                                :align-items "center"
                                                :justify-content "center"
                                                :min-height (calc (+ (* 3 1.05 "1rem") [(spacing 4) :px]))
                                                :border table-border
                                                :border-radius radius
                                                :padding-y "0.5em"
                                                $expression {:align-self "center"
                                                             ;:min-height (calc (+ (* 3 1.05 "1rem")
                                                             ;                     "1em"))
                                                             :display "flex"
                                                             :align-items "center"
                                                             :padding-x (spacing 2)
                                                             }}
                        ;>.demo-expression
                        }
         >.section {:display "grid"
                    :row-gap (spacing 1)
                    >.section-title {:grid-column "1 / -1"
                                     :padding-bottom (spacing 0.5)}
                    >.slider-container {:display "grid"
                                        :margin-bottom (spacing 1)
                                        :row-gap (spacing 1)
                                        :padding-x (spacing 0.5)
                                        [.tip-title .tip>li] {:transition (create-transition ["opacity" "visibility" "color"]
                                                                                             {:duration shortest})}
                                        &.tip-visible {[.tip-title .tip>li.active] {:color (primary :dark)}
                                                       .tip>li.inactive {:opacity 1 :visibility "visible"}}
                                        .tip-title {:padding-top (spacing 1)}
                                        .tip {:padding-left (spacing 3)
                                              >li {:padding-bottom (spacing 0.5)
                                                   :color (text :primary)
                                                   &.inactive {:color (text :disabled)
                                                               :opacity 0
                                                               :visibility "hidden"}}
                                              :pointer-events "none"}
                                        '(.MuiSlider-mark
                                          [style *= "left: 100%;"]) {:transform '(translateX "-2px")}}}}
        .label {:color (text :secondary)
                :display "inline-flex"
                :align-items "flex-end"}
        .toggle-buttons.constants {(break-down "xs") {:grid-column "1 / -1"}}
        .actions {:display "flex"
                  :flex-flow "row wrap"
                  :justify-content "flex-end"
                  :padding-bottom (spacing 2)
                  .right-actions {:display "flex"
                                  :flex-flow "row wrap"}
                  button.ok {:margin-left (spacing 1)
                             :padding-x (spacing 1.5)
                             :min-width (spacing 8)}
                  button.cancel {:padding-x (spacing 1)
                                 :min-width (spacing 8)}
                  button.reset {:justify-self "flex-start"
                                :white-space "nowrap"
                                :margin-left 0
                                :margin-right "auto"
                                :transition (create-transition "color" {:duration short})
                                :min-width (spacing 8)
                                :padding-x (spacing 1)}}

        .toggle-set-wrapper
        {:display "grid"
         .toggle-set {:padding 0
                      :display "grid"
                      :grid-template-columns "1fr"
                      :gap (spacing 1)
                      ;&.non-expanding {:padding-bottom (spacing 2)}
                      ;&.not-expanded>.more-button {:margin-top (- (spacing 1))}
                      :margin-bottom (spacing 1)
                      }
         &.static {:margin-bottom (spacing 1)}
         &.operators {(break-down "xs")
                      {.toggle-set
                       {:grid-template-columns '(repeat "auto-fit"
                                                        '(minmax [(spacing 10) :px] "1fr"))
                        :column-gap (spacing 2)}
                       .MuiToggleButtonGroup-root
                       {:flex-direction "column"
                        .MuiToggleButtonGroup-groupedHorizontal$math-toggle
                        {:border-radius radius
                         '(& (:not :last-child)) {:border-bottom-radius 0}
                         '(& (:not :first-child)) {:border-top "1px solid transparent"
                                                   :margin-top -1
                                                   :margin-left 0
                                                   :border-top-radius 0
                                                   :border-left-color divider}}}}

                      }
         >.more-button {:display "flex"
                        :justify-content "flex-end"
                        :transition (create-transition "margin-top")
                        (break-down "xs") {:grid-column "1 / -1"}
                        }

         }
        .toggle-button-container {:display "flex"
                                  :flex-direction "column"}}
       :coverage-table {:font-size "1rem"
                        :overflow "auto"
                        .layout-container {:display "flex"
                                           :flex-flow "row wrap"
                                           :gap (spacing 1)
                                           :align-content "flex-start"}
                        .legend {:place-items "center"
                                 :padding-x (spacing 1)
                                 :flex [[1 1 0]]
                                 :max-width "max-content"
                                 :column-gap (spacing 0.5)
                                 :display "grid"
                                 :grid-template-columns [[(spacing 3) "auto"]]
                                 :place-content [["start" "center"]]
                                 :row-gap (spacing 1)
                                 .rect {:width (spacing 2)
                                        :height (spacing 2)
                                        &.essential {:background (essential :main)
                                                     :opacity (essential :main-opacity)}
                                        &.covered {:background (covered :main)}}
                                 .hide-essentials-switch {:margin-right 0
                                                          :white-space "nowrap"
                                                          :grid-column "1 / -1"
                                                          :place-self [["center" "start"]]}
                                 .legend-label {:mixin [(typography :body-2)]
                                                :line-height 1
                                                :justify-self "start"}
                                 .dot {:width (spacing 2)
                                       :height (spacing 2)
                                       :border-radius "100%"
                                       :background (secondary :A400)
                                       :box-shadow (shadows 1)}}
                        mask#selected-col-mask>g.cutout-group
                        {:transition (create-transition "opacity" {:duration shortest})
                         :opacity 0
                         &.active {:opacity 1}
                         rect.cutout {:animation (create-transition "$mosey-on-in" {:duration shortest})
                                      :animation-name "$mosey-on-in"}}
                        .row-label>* {:position "absolute"
                                      :top "50%"
                                      :left "50%"
                                      :transform '(translate "-50%" "-50%")}
                        .message {:display "flex"
                                  :justify-content "center"
                                  :text-align "center"
                                  :font-style "italic"
                                  :align-items "center"
                                  :color (text :disabled)
                                  :top 0
                                  :left 0
                                  :right 0
                                  :opacity 0
                                  :fill (text :disabled)
                                  :position "absolute"
                                  :pointer-events "none"
                                  :user-select "none"
                                  :transition (create-transition "opacity")
                                  &.all-essential {:bottom 0}
                                  &.visible {:opacity 1}}
                        svg.root-svg {:overflow "visible"
                                      circle.dot {:fill (secondary :A400)
                                                  :filter '(drop-shadow [0 "1px" "1px" '(rgba 0 0 0 0.2)])}
                                      [[.covered .col-rect]] {:fill (action :hover)
                                                              [&:hover &:focus] {:fill (covered :hover)}
                                                              [&:active &.active] {:fill (covered :active)}}
                                      [.row-rect .col-rect] {:rx 0
                                                             :vector-effect "non-scaling-stroke"
                                                             :stroke "transparent"
                                                             :fill "transparent"
                                                             :cursor "pointer"
                                                             :stroke-width 1
                                                             &:focus {:filter '(url "#shadow-1")
                                                                      :rx radius}
                                                             [&:hover &:focus] {:fill (action :hover)
                                                                                :filter "none"}
                                                             [&:active &.active &:active:hover
                                                              &.active:hover] {:fill (action :active-light)
                                                                               :stroke (action :active-light)
                                                                               :rx radius}}
                                      [[g.axis .domain]] {:stroke table-border-color}
                                      [div.row-label .row-label-container circle.dot
                                       .cell-rect] {:pointer-events "none"}
                                      .column-label-container {:pointer-events "none"}
                                      .essential>.row-rect {:fill (essential :main)
                                                            [&:hover &:focus] {:fill (essential :hover)}
                                                            [&:active &.active &:active:hover
                                                             &.active:hover] {:fill (essential :active)
                                                                              :stroke (essential :main)}}
                                      [g.column
                                       g.row] {[rect div text] {:outline "none"
                                                                :transition (create-transition
                                                                             ["fill" "fill-opacity" "stroke" "color"
                                                                              "border-radius" "filter" "rx"]
                                                                             {:duration shortest})}}
                                      g.selected {[rect.col-rect
                                                   rect.row-rect] {:fill (selected :main)
                                                                   :stroke (selected :main)
                                                                   :filter '(url "#shadow-1")
                                                                   :rx radius
                                                                   [&:hover &:focus] {:fill (selected :hover)}
                                                                   [&:active &.active &:active:hover
                                                                    &.active:hover] {:fill (selected :active)
                                                                                     :filter '(url "#shadow-2")}}
                                                  div {:color (selected :text)}
                                                  text {:fill (selected :text)}}}
                        .coverage-table-div {:overflow-x "auto"
                                             :overflow-y "visible"
                                             :flex 1
                                             :border-radius radius
                                             :position "relative"
                                             :align-self "center"}
                        [[svg.all-hidden rect]] {:pointer-events "none"}}
       :chip-like {:display "inline-flex"
                   :width "fit-content"
                   :padding-x (spacing 1.5)
                   :min-height (spacing 4)
                   :min-width (spacing 6)
                   :box-sizing "border-box"
                   :justify-content "center"
                   :align-items "center"
                   :border [[1 "solid" '(rgba 0 0 0 0.2)]]
                   :border-radius 9999
                   :text-align "center"
                   :white-space "nowrap"}
       :math-chip {:extends [:chip-like :selectable]
                   :position "relative"
                   &:hover {:border-color '(rgba 0 0 0 0.4)}
                   &.selected {&:active {:border-color "transparent"
                                         :box-shadow (shadows 2)}}
                   &:focus {:box-shadow (shadows 1)}
                   &:active {:border-color (-> table-border-color
                                               color
                                               (j/call :darken 0.2)
                                               (j/call :string))}
                   &.covered {:border-color table-border-color}
                   * {:pointer-events "none"}}

       :title {:flex-grow 1
               :line-height 1.5
               >a {:color "inherit"
                   :text-decoration "inherit"}
               }

       :main-function {:font-size "1.1rem"
                       (break-up "sm") {:font-size "1.15rem"}
                       (break-up "lg") {:font-size "1.2rem"}
                       $math {:font-size "1.1rem"
                              (break-up "sm") {:font-size "1.15rem"}
                              (break-up "lg") {:font-size "1.2rem"}
                              }
                       }

       :terms-table {:extends :chip-container
                     ;:display "flex"
                     ;:flex-flow "row wrap"
                     ;:justify-content "center"
                     ;$math-chip {:margin [[0 (spacing 0.5) (spacing 1)]]}
                     }
       :step-icon {;:mixin (typography :caption)
                   :display "inline-grid"
                   :justify-content "center"
                   :align-content "center"
                   :height (spacing 3)
                   :line-height "normal"
                   :min-width (spacing 3)
                   :padding-x (spacing 1)
                   :text-transform "uppercase"
                   :color (primary :contrast-text)
                   :background (primary :main)
                   :border-radius 500
                   :user-select "none"}



       :vars-label {:padding-left (spacing 1)}
       :implications-grid {:padding-y (spacing 1)}
       :steps-card {:position "relative"
                    :overflow "visible"
                    .MuiCardContent-root {:display "grid"
                                          :row-gap (spacing 1)
                                          :grid-template-columns "100%"}
                    .example-term {.term-chip {:margin 0}
                                   :align-items "baseline"
                                   :align-content "center"
                                   .typeset-math:first-child {:text-align "center"}
                                   :margin-y "1em"
                                   :justify-content "center"
                                   .break-group {:display "flex"
                                                 :align-items "baseline"
                                                 .rel-op {:padding-x (spacing 1)
                                                          &.eq {:padding-right 0}}}
                                   :display "flex"
                                   :row-gap (spacing 1)
                                   :flex-flow "row wrap"}
                    .example-imps {:display "grid"
                                   :align-content "center"
                                   :justify-content "center"
                                   :align-items "center"
                                   :justfy-items "center"
                                   :grid-template-columns "1fr auto auto auto 1fr"
                                   :margin-y (spacing 0.5)
                                   .base-2 {:grid-column-start 2}
                                   .intertext {:grid-column "1 / -1"
                                               :margin-y (spacing 0.5)}
                                   .rel-op {:padding-x (spacing 1)
                                            :grid-column-start 3}
                                   .ex-imp {:grid-column-start 4}
                                   }
                    .dnd-container {:display "flex"
                                    :justify-content "center"}
                    .thus {:display "grid"
                           :grid-template-columns "auto 1fr"
                           .original {:grid-column "1 / -1"}
                           :align-items "baseline"}
                    .dynamic-grid {:display "grid"
                                   :justify-items "center"
                                   :width "100%"
                                   :gap (spacing 1)
                                   &.padded {:padding (spacing 1)}}}
       :gloss {>.gloss-word {:vertical-align "baseline"
                             :position "static"
                             :cursor "help"
                             :text-decoration "underline dotted"}}
       :definition-transition {:transform-origin "0 0 0"}
       :definition-popper
       {:z-index (z-index :tooltip)
        [['(& [x-placement *= "bottom"]) .arrow]] {:top 0
                                                   :left 0
                                                   :margin-top "-0.71em"
                                                   :margin-left 4
                                                   :margin-right 4
                                                   &:before {:transform-origin "0 100%"}}
        [['(& [x-placement *= "top"]) .arrow]] {:bottom 0
                                                :left 0
                                                :margin-bottom "-0.71em"
                                                :margin-left 4
                                                :margin-right 4
                                                &:before {:transform-origin "100% 0"}}
        [['(& [x-placement *= "right"]) .arrow]] {:left 0
                                                  :margin-left "-0.71em"
                                                  :height "1em"
                                                  :width "0.71em"
                                                  :margin-top 4
                                                  :margin-bottom 4
                                                  &:before {:transform-origin "100% 100%"}}
        [['(& [x-placement *= "left"]) .arrow]] {:right 0
                                                 :margin-right "-0.71em"
                                                 :height "1em"
                                                 :width "0.71em"
                                                 :margin-top 4
                                                 :margin-bottom 4
                                                 &:before {:transform-origin "0 0"}}
        .MuiPaper-root {:padding (spacing 2)
                        :margin-x (spacing 2)
                        :max-width 500
                        }
        .arrow {:position "absolute"
                :width "1em"
                :height "0.71em"
                :clip-path '(inset [0 "-20px"])
                :box-sizing "border-box"
                :color (background :paper)
                &:before {:content "''"
                          :margin "auto"
                          :display "block"
                          :width "100%"
                          :height "100%"
                          :box-shadow (shadows 2)
                          :background-color "currentColor"
                          :transform '(rotate "45deg")}}}
       :definition {>.def-body {>em {:font-weight 500
                                     :font-style "normal"
                                     }}}
       :fade-collapse {&.MuiCollapse-container
                       {>.MuiCollapse-wrapper>.MuiCollapse-wrapperInner
                        {:transition (create-transition ["opacity" "transform" "visibility"])
                         :position "relative"
                         :opacity 1}
                        ['(& [style *= " height: 0"])
                         &.MuiCollapse-hidden] {>.MuiCollapse-wrapper>.MuiCollapse-wrapperInner
                                                {:transition-delay 0
                                                 :opacity 0
                                                 :transform '(translateY "-5px")}}}}
       :expandable-expression {:display "grid"
                               &.closed {:row-gap 0
                                         ;>.details>.MuiCollapse-wrapper>.MuiCollapse-wrapperInner
                                         ;{:transition-delay 0
                                         ; :opacity 0
                                         ; :transform '(translateY "-5px")}
                                         }

                               >.summary {:padding [[0 (spacing 2)]]
                                          :justify-self "center"
                                          :font-size "unset"
                                          :transition (create-transition "background-color")
                                          :border-radius radius
                                          &:hover {:background (action :hover)}}
                               ;>.details>.MuiCollapse-wrapper>.MuiCollapse-wrapperInner
                               #_{:transition (create-transition ["opacity" "transform"] {:delay 75})
                                  :position "relative"}}
       :toolbar {:padding-right 24}
       :variables-dnd {:display "inline-grid"
                       :grid-template-columns "1fr"
                       :width "fit-content"
                       >.columns-container
                       {:display "grid"
                        :grid-template-columns '(repeat 3 "auto")
                        :justify-content "center"
                        :column-gap (spacing 0.5)
                        >.column {:align-items "center"
                                  :align-content "center"
                                  :display "flex"
                                  :flex-direction "column"
                                  &.vars {:align-items "start"}
                                  &.equals {:align-items "center"}
                                  &.headers {:align-items "end"}
                                  >* {:height (spacing 4)
                                      :margin-bottom (spacing 1)}
                                  >.draggable-var
                                  {:display "inline-grid"
                                   :position "relative"
                                   &.dragging>.content {:box-shadow (shadows 3)}
                                   &.drop-animating>.content {:box-shadow "none"}
                                   [&:hover &:focus
                                    &.Mui-focusVisible] {:outline "none"
                                                         &.dragging>.content {:box-shadow (shadows 3)}
                                                         [&.drop-animating>.content
                                                          >.content] {:box-shadow (shadows 1)}}
                                   >.content {:justify-self "flex-start"
                                              :display "inline-grid"
                                              :grid-template-columns "1fr auto"
                                              :box-sizing "border-box"
                                              :align-items "center"
                                              :padding-x [(spacing 1.5) (spacing 1)]
                                              :background (background :paper)
                                              :column-gap (spacing 1)
                                              :border [[1 "solid" '(rgba 0 0 0 0.2)]]
                                              ;:border-width 1
                                              ;:border-color '(rgba 0 0 0 0.2)
                                              ;:border-style "solid"
                                              :border-radius 9999
                                              :white-space "nowrap"
                                              :transition (create-transition "box-shadow")
                                              >svg {:width 18
                                                    :height 18
                                                    :fill (text :disabled)}
                                              >.var {:min-width (spacing 1.5)
                                                     :text-align "center"}}}
                                  [>.header >.equals-sign] {:display "flex"
                                                            :align-items "center"}}}
                       >.buttons-container {:display "grid"
                                            :grid-template-columns "auto auto"
                                            :justify-content "flex-end"
                                            :column-gap (spacing 1)
                                            ;:padding-x (spacing 1)
                                            '((:nth-child 2) >button) {:transition-delay 50}
                                            button {:transition (create-transition ["visibility" "opacity"])
                                                    &.hidden {:opacity 0
                                                              :visibility "hidden"
                                                              :pointer-events "none"}}
                                            >.MuiButton-root {:transition (create-transition ["background-color" "color"
                                                                                              "border-color"]
                                                                                             {:duration short})}}}
       :input-card {.specification-label.Mui-focused {:color (text :secondary)}
                    >.MuiCardContent-root {:extends :card-content
                                           ;:row-gap (spacing 2)
                                           ;:padding (spacing 3)
                                           }
                    .buttons {:display "flex"
                              :padding-top (spacing 1)
                              ;:margin-top (spacing -1)
                              :justify-content "flex-end"
                              >.go-button {}}}
       :card-header {:padding (spacing 2)}
       :align-eq {:display "grid"
                  :align-items "baseline"
                  :gap [[(spacing 1) (spacing 0.5)]]
                  :grid-template-columns "auto auto"
                  :justify-content "center"
                  >*:first-child {:grid-column "1 / -1"}
                  :margin-y (spacing 0.5)
                  }
       :aligned-environment {:display "grid"
                             :align-items "baseline"
                             :gap [[(spacing 1) (spacing 0.5)]]
                             :grid-template-columns '(repeat 1 "1fr auto auto auto 1fr")
                             (break-up "sm")
                             {:grid-template-columns '(repeat 2 "1fr auto auto auto 1fr")
                              (break-up "md")
                              {:grid-template-columns '(repeat 3 "1fr auto auto auto 1fr")}}
                             '(>* (:nth-child "5n+2")) {:justify-self "end"}
                             '(>* (:nth-child "5n+3")) {:justify-self "center"}
                             '(>* (:nth-child "5n+4")) {:justify-self "start"}}
       :expressions-table
       {:box-sizing "border-box"
        :padding 10
        (break-only "xs") {:padding-x 4}
        >.MuiTable-root
        {td {:border-bottom-color table-border-color
             :vertical-align "baseline"
             :padding 0
             &.progress-cell {:padding-x (spacing 2)}
             .mock-table-cell {:padding [["1em" (spacing 1)]]}
             .row-label {:white-space "nowrap"
                         :line-height "1.43"}
             .typeset-expression {.button-base {:cursor "default"}}}
         col.label {:width "25%"}
         tbody.expandable {.more-less-button-group
                           {:display "flex"
                            :width "100%"
                            '(& (:not .extra-visible)) {.spacer {:padding-left 30}}
                            '(& (:not .all-visible)
                                :hover) {[>.spacer >.less-wrapper
                                          >.all-wrapper] {:background-color (action :hover)}}
                            .less-wrapper {:border-radius [[radius 0 0 radius]]}
                            .all-wrapper {:border-radius [[0 radius radius 0]]}
                            .spacer {:flex 1
                                     :cursor "default"
                                     :display "inline-flex"
                                     :justify-content "center"
                                     :flex-direction "row"
                                     .more {:cursor "pointer"
                                            :font-style "italic"}}
                            [.less-wrapper .all-wrapper
                             .spacer] {:transition (create-transition "background-color")}}}}}

       :expressions-group
       {>.group-label {:display "flex"
                       ;:justify-content "space-between"
                       >.steps-button {:margin-left (spacing 2)}
                       }
        >.content {:min-height (calc (+ (* 1.08 1.21 1.2 "1rem")
                                        [(spacing 4) :px]
                                        "1em"))
                   :display "grid"
                   .progress-container {:align-self "center"
                                        >.progress-bar {:height 0
                                                        :transition (create-transition "height")
                                                        :border-radius 9999
                                                        >.MuiLinearProgress-bar {:border-radius 9999}}
                                        [&.entering &.enter-done] {>.progress-bar {:height 6}}}
                   .MuiList-root.expressions {:box-sizing "border-box"
                                              >.MuiListItem-root$expandable-expression
                                              {:justify-content "stretch"
                                               ;&:hover {:background (action :hover)}
                                               ;:transition (create-transition "background-color")
                                               ;>.summary {&:hover {:background "none"}}
                                               :padding-y 0
                                               >.MuiButtonBase-root
                                               {
                                                :box-sizing "border-box"
                                                ;:padding-y (spacing 1)
                                                :border-radius 0
                                                :padding-y (spacing 1)
                                                :width "100%"
                                                }
                                               &:first-child>.MuiButtonBase-root {:border-top-radius radius}
                                               &:last-child {:border-bottom "none"
                                                             >.MuiButtonBase-root {:border-bottom-radius radius}}
                                               $copy-panel {:padding-bottom 0
                                                            >.row {:margin-bottom (spacing 2)}}}
                                              }}
        }

       :bool-valued {'(& [data-boolval = "true"]) {:fill (primary :main)
                                                   :background-color (primary :main)
                                                   :color (primary :contrast-text)
                                                   }
                     '(& [data-boolval = "false"]) {:fill (action :hover)
                                                    :background-color (action :hover)
                                                    :color (text :primary)
                                                    }
                     '(& [data-boolval = "undefined"]) {:fill (tertiary :A400)
                                                        :background-color (tertiary :A400)
                                                        :color (common :white)
                                                        }
                     }

       :expressions-table-button-group
       {:position "relative"
        :display "grid"
        :width "100%"
        :align-items "center"
        :grid-template-columns "auto auto 1fr auto auto"
        &:last-child {:border-bottom-radius radius}
        '(& (:not .all-visible) :hover) {:background (action :hover)
                                         :cursor "pointer"}

        :column-gap (spacing 1)
        :padding-x (spacing 1)
        >.spacer {:height (spacing 4)
                  :position "initial"
                  >.label {
                           :text-align "center"
                           :font-style "italic"}}
        :transition (create-transition "background-color")
        }

       :truth-table
       {&.small {rect.datum {:rx 2}}
        rect.datum {:rx radius
                    :transition (create-transition "fill"
                                                   {:duration shorter})
                    :extends :bool-valued
                    '(&.output [data-boolval = "true"]) {:fill (secondary :A400)}}
        >.chunks {:display "flex"
                  :justify-content "space-evenly"
                  >svg.chunk {:overflow "auto"}
                  .tick {>text {:mixin (typography :caption)}}
                  }

        ;&.medium {>svg.inserted-svg {.tick {>text {:mixin (typography caption)}} }}
        }
       :step {:display "grid"
              :grid-template-rows "auto auto"
              :grid-template-columns "auto 1fr 24px"
              :row-gap (- (spacing 1) 3)
              :column-gap (spacing 1)
              :transition (create-transition "row-gap")
              &.open {.step-opener>* {:transform '(rotate "-180deg")}}
              &.non-collapsable {:row-gap 0}
              &.collapsable {>.step-summary {:cursor "pointer"
                                             :color (text :secondary)}}
              &.closed {:row-gap 0
                        .step-content>.MuiCollapse-wrapper {:opacity 0}}
              &.last {.liney {:visibility "hidden"}}
              [&.result &.loop] {$step-icon {:padding-x 0}}
              &.result {>.step-summary>h6 {:font-weight "500"
                                           >.normal {:font-weight "normal"}}
                        >.step-content {:grid-column "1 / -1"
                                        .MuiCollapse-wrapperInner {:padding-bottom (spacing 2)}}}
              >.icon-and-line {:display "flex"
                               :flex-direction "column"
                               :padding-top 3
                               :grid-row "1 / 3"
                               >.liney-box {:flex [[1 1 0]]
                                            :overflow "hidden"
                                            :padding-bottom (- (spacing 1) 3)
                                            >.liney {:width 24
                                                     :height "100%"
                                                     :padding-top (spacing 1)
                                                     >line {:stroke (text :secondary)}
                                                     (break-down "xs") {:visibility "hidden"}}}
                               (break-down "xs") {:grid-row "1 / 2"}}
              >.step-summary {:padding-top 3
                              :display "grid"}
              >.step-opener {:align-self "start"
                             :justify-self "flex-end"
                             >* {:transition (create-transition "transform")}}
              >.step-content {:grid-column "2 / -2"
                              >.MuiCollapse-wrapper {:transition (create-transition "opacity")
                                                     :padding-bottom (- (spacing 1) 3)}
                              (break-down "xs") {:grid-column "1 / -1"
                                                 :padding-x (spacing 1)}}
              (break-down "xs") {:padding-x 0}}
       :math {:position "relative"
              :font-size "1rem"
              &.display {:display "block"
                         :width "100%"
                         :text-align "center"}}

       :copy-panel {:align-items "baseline"
                    :padding [[(spacing 1) (spacing 3)]]
                    >.row {:display "flex"
                           '(& (:not :last-child)) {:margin-bottom (spacing 1)}
                           >.copy-field {:padding 0
                                         :flex 1
                                         :margin-right (spacing 1)
                                         :align-self "baseline"
                                         :background (background :paper)
                                         >.copy-field-input {:padding (spacing 0.5)
                                                             >textarea {:mixin (typography :monospace-2)}}}
                           >.label {:text-align "right"
                                    :margin-right (spacing 1)
                                    :grid-column-start 1
                                    ;:width (spacing 6)
                                    :align-self "baseline"
                                    :position "relative"
                                    &:before {:content "'LaTeX'"
                                              :visibility "hidden"}
                                    >span {:position "absolute"
                                           :right 0}}
                           >.copy-button {:grid-column-start 3
                                          :width (spacing 3)
                                          :margin-top -3
                                          :align-self "flex-start"}}
                    (break-down "xs") {:padding (spacing 1)
                                       :grid-template-columns "auto 1fr"
                                       :grid-auto-flow "row dense"
                                       :align-items "center"
                                       >.copy-field {:margin-bottom (spacing 1)}
                                       >.label {:grid-column-start 1
                                                :text-align "left"}
                                       >.copy-button {:grid-column-start 2
                                                      :justify-self "flex-end"}
                                       '(>.row (:not :last-child)) {:margin-bottom (spacing 2)}}}
       :card-content {:padding (spacing 2)
                      :row-gap (spacing 1)
                      (break-up "xs") {:padding (spacing 3)
                                       :row-gap (spacing 2)}
                      (break-up "md") {:padding (spacing 4)
                                       :row-gap (spacing 2)}
                      }
       :prime-implicant-table-container {:position "relative"}
       :radial-chart
       {:margin 0
        :display "flex"
        :flex-flow "row wrap"
        :justify-content "center"
        :place-items "center"
        >.chart-container
        {:position "relative"
         :width "fit-content"
         svg.chart {.sector-arc {:extends :bool-valued}}
         .center-label {:mixin (typography :h-3)
                        :text-align "center"
                        :text-anchor "middle"
                        :alignment-baseline "middle"
                        :position "absolute"
                        :top "50%"
                        :left "50%"
                        :transform "translate(-50%, -50%)"
                        :display "grid"
                        >.value.exact {}
                        >.value.approx {:font-size "1.70rem"
                                        ;:display "flex"
                                        :position "relative"
                                        :align-items "baseline"
                                        :white-space "nowrap"
                                        .mult-sign {:margin-x "0.1em"}

                                        .tilde {:color (text :secondary)}
                                        }
                        .unit {:mixin (typography :body-1)
                               :color (text :secondary)}
                        }
         }
        >.legend {:display "grid"
                  :row-gap (spacing 1)
                  :margin-left (spacing 2)
                  :grid-template-columns "repeat(4, auto)"
                  :align-items "center"
                  :column-gap (spacing 1)
                  :mixin (typography :body-1)
                  .value {:white-space "nowrap"
                          :display "inline-block"
                          :justify-self "flex-end"}
                  .icon {:extends :bool-valued
                         :width (spacing 3)
                         :mixin (typography :body-1)
                         :height (spacing 3)
                         :border-radius radius
                         ;:display "grid"
                         ;:place-items "center"
                         }

                  }}
       :reduction-steps-table
       {:padding 1
        .pagination.main {:overflow "visible"}
        >.MuiTable-root
        {:border-collapse "separate"
         >.MuiTableBody-root
         {:position "relative"
          &:first-of-type {.title-cell {:padding-top 0}}
          >.head-row {:vertical-align "bottom"
                      >* {:line-height "normal"}
                      >.group-cell {:padding-x 0
                                    :white-space "nowrap"
                                    :text-align "center"
                                    :line-height "normal"}
                      >.var-cell {:overflow-x "hidden"}}
          >.group-row {>.group-row-rest {:height 0
                                         :padding 0
                                         :border-bottom "none"
                                         :visibility "hidden"}
                       >.group-cell {:z-index 1
                                     :position "relative"
                                     :padding 0
                                     >.group-val {:width 40
                                                  :overflow-x "hidden"
                                                  :text-align "center"}}}
          >.data-row {:transform '(translate 0)
                      :cursor "pointer"
                      :z-index 0
                      :position "relative"
                      :height "100%"
                      &:after {:content "''"
                               :position "absolute"
                               :left 40
                               :right 0
                               :top 0
                               :bottom 0
                               :border-x "1px solid transparent"
                               :transition (create-transition ["background-color" "box-shadow" "z-index"
                                                               "border-color" "border-radius"]
                                                              {:duration shortest})}
                      &.selected {:z-index 1
                                  &>td {:color (selected :text)
                                        :border-color "transparent"}
                                  &:after {:background (selected :main)
                                           :box-shadow (shadows 1)
                                           :border-color "transparent"
                                           :border-radius radius}
                                  [&:hover &:focus] {&:after {:background (selected :hover)
                                                              :border-color "transparent"}}
                                  [&.active &:active] {[&:hover &:focus &] {&:after {:background (selected :active)
                                                                                     :box-shadow (shadows 2)}}}}
                      &.compatible {&:after {:background (essential :main)
                                             :border-x-color table-border-color}
                                    [&:hover &:focus] {&:after {:background (essential :hover)
                                                                :border-radius radius}}
                                    [&.active &:active] {[&:hover &:focus &] {&:after {:background (essential :active)
                                                                                       :box-shadow (shadows 2)
                                                                                       :border-radius radius}}}}
                      [&:hover &:focus] {&:after {:background (action :hover)
                                                  :border-x-color table-border-color
                                                  :border-radius radius}}
                      &:focus {:z-index 3
                               &:after {:box-shadow (shadows 1)}
                               >td {:border-color "transparent"}}
                      [&.covered-by-selected
                       &.covers-selected] {&:after {:background (covered :main)
                                                    :border-color table-border-color}
                                           [&:hover &:focus] {&:after {:background (covered :hover)
                                                                       :border-radius radius}
                                                              &:active:after {:background (covered :active)}}
                                           [&.active:after &:active:after] {:background (covered :active)}}
                      [&:active &.active] {[&:hover &:focus &] {:z-index 1
                                                                &:after {:background (action :active-light)
                                                                         :box-shadow (shadows 2)
                                                                         :border-color "transparent"
                                                                         :border-radius radius}
                                                                >td {:border-color "transparent"}}}
                      &.nothing>td {:color (text :secondary)}
                      >td {:position "relative"
                           :transition (create-transition ["color" "border-color" "z-index" "opacity" "font-weight"]
                                                          {:duration shortest})
                           :z-index 3
                           :pointer-events "none"
                           '(& (:nth-child "n+3")) {:text-align "center"}}
                      span.dash {:font-weight 500}}}
         .title-cell {:border "none"
                      :padding-top (spacing 2)
                      :padding-x 0}
         .group {:width 64}
         .terms {:width "100%"
                 :border-right "1px solid"
                 :border-right-color (grey 300)}
         .title {:border "none"
                 :display "flex"
                 :align-items "baseline"
                 :align-content "center"}
         .MuiTableFooter-root {td {:border-bottom "none"}}
         .pagination {.MuiTablePagination-toolbar {:padding-left 2
                                                   :flex-wrap "wrap"
                                                   :justify-content "flex-end"}
                      &.mini {:flex-grow 1
                              :justify-self "flex-end"
                              [.MuiTablePagination-spacer
                               .MuiTablePagination-caption] {:display "none"}}}
         .star-cell {:width 10
                     :padding-x [(spacing 1) 0]}
         .vars {:width "fit-content"}
         .star {:width 10
                :min-width "unset"}
         (break-down "xs") {td {:padding-x (spacing 1)
                                '(& (:not .pagination)
                                    (:not .title-cell)
                                    :last-child) {:padding-right (spacing 1)}}}}}
       :vertical-grid {:display "grid"
                       :row-gap (spacing 1)
                       :grid-template-columns "1fr"}
       :vertical-grid-2 {:display "grid"
                       :row-gap (spacing 2)
                       :grid-template-columns "1fr"}
       :top-margin {:margin-top (spacing 2)}
       :input-section {:display "grid"
                       :row-gap (spacing 2)
                       >.terms-section
                       {>.title {:color (text :secondary)
                                 :margin-bottom (spacing 1)}
                        >.terms-container {:display "flex"
                                           :flex-flow "row wrap"
                                           :justify-content "flex-start"
                                           .term {:mixin (typography :body-2)
                                                  '(& (:not :last-child) :after)
                                                  {:content "','"
                                                   :display "inline-block"
                                                   :margin-right "0.3em"}}}}
                       }
       :expression-input {:extends :input-section
                          [>.variables-section >.expression-section]
                          {>.title {:color (text :secondary)
                                    :margin-bottom (spacing 1)}
                           >.variables-container {:display "flex"
                                                  :flex-flow "row wrap"
                                                  :justify-content "center"
                                                  $chip-like
                                                  {:margin [[0 (spacing 1) (spacing 1) 0]]}}}
                          }
       :minterms-input {:extends :input-section

                        ; INVALID {$ [a-zA-Z0-9_] +}
                        }
       :maxterms-input {:extends :input-section}

       :cm-tokens
       {.cmt-operator {:color (primary :A700)
                       :font-weight "bold"}
        .cmt-operator-keyword {:font-style "italic"}
        .cmt-rel-op {:color (secondary :A400)}
        .cmt-bool {:color (text :primary)
                   :font-weight "bold"}
        .cmt-negated {:color (tertiary :A400)}
        .cmt-variableName {:color (text :primary)}
        .cmt-number {:color (primary :A700)}}

       :input-info
       {:margin-top (spacing 1)
        :padding-x (spacing 1)
        :display "grid"
        :row-gap (spacing 1)
        :justify-content "center"
        '(tr :first-child >td) {:padding-top (spacing 1)}
        '(tr :last-child >td) {:padding-bottom (spacing 1)
                               :border-bottom table-border}
        '(td (:nth-child 3)) {:text-align "center"}
        '(td (:nth-child 2)) {:white-space "nowrap"}
        td {:vertical-align "top"}
        [td th] {:padding (spacing 0.5)}
        th {:text-align "left"
            :border-bottom table-border
            :vertical-align "bottom"}
        span.syntax {:display "inline"}
        .syntax
        {:display "flex"
         :flex-flow "row wrap"
         :gap (spacing 0.5)
         >.x
         {:display "inline-block"
          :extends :cm-tokens
          :mixin (typography :monospace-2)
          :white-space "pre-wrap"
          :background (background :paper)
          :border-radius radius
          :border-width 1
          :border-style "solid"
          :border-color '(rgba 0 0 0 0.23)
          :position "relative"
          :padding (spacing 0.5)
          ;'(.cmt-operator (:not :first-child) (:not .nospace-before) :before) {:content "' '"}
          ;'(.cmt-operator (:not :last-child) (:not .nospace-after) :after) {:content "' '"}
          }
         }
        }

       :editor-field
       {:extends :cm-tokens
        :position "relative"
        :box-sizing "border-box"
        &:hover>.cm-editor {:border-color '(rgba 0 0 0 0.87)}
        &.has-errors.show-errors {&:hover>.cm-editor {:border-color (error :main)}
                                  >.cm-editor {:border-color (error :main)}}
        >.cm-editor
        {:border-radius radius
         :border-width 1
         :border-style "solid"
         :border-color '(rgba 0 0 0 0.23)
         :position "relative"
         :padding (spacing 0.5)
         :color (text :secondary)
         :transition (create-transition "border-color" {:duration shorter})
         &.cm-wrap {:height "100%"}
         &.cm-focused {:border-color (primary :main)
                       :padding (dec (spacing 0.5))
                       :outline "none"
                       :border-width 2}
         >.cm-scroller {:overflow "auto"
                        >.cm-content {:mixin (typography :monospace-2)}}}

        #_#_*::selection {;:color [["white" ] :!important]
                          :background-color '(rgba 215 212 240 0.55)}
        #_#_.cm-selectionM {:background-color [[;'(rgba 215 212 240 0.55)
                                                "blue"
                                                ] "!important"]
                            :color [["white"] "!important"]}
        .cm-matchingBracket {:background-color (tertiary 50)
                             :color "inherit"}
        .cm-nonmatchingBracket {:color (error :main)}
        .cm-markedVar {:background-color (secondary 100)
                       :border-radius radius}
        .cm-parseError {:color (error :contrast-text)
                        :background-color (error :main)}
        .cm-duplicateTerm {:border-radius radius
                           :background-color (warning :light)
                           &.index-0 {;:color (warning :contrast-text)
                                      :background-color (warning :light)}
                           &.index-1 {;:color (success :contrast-text)
                                      :background-color (success :light)
                                      }
                           &.index-2 {;:color (success :contrast-text)
                                      :background-color (error :light)
                                      }
                           }
        .cm-zeroWidthErrorLeft {:position "relative"
                                &:before {:content "''"
                                          :position "absolute"
                                          :width 2
                                          :left -1
                                          :background (error :main)
                                          :height "100%"
                                          :pointer-events "none"
                                          :z-index -1}}
        .cm-zeroWidthErrorRight {:position "relative"
                                 &:after {:content "''"
                                          :position "absolute"
                                          :width 2
                                          :right -1
                                          :background (error :main)
                                          :height "100%"
                                          :pointer-events "none"
                                          :z-index -1}}}

       :terms-field {>.cm-editor.cm-wrap {:max-height (spacing 32)}
                     }

       :expression-field {>.cm-editor.cm-wrap {:min-height (spacing 24)
                                               :max-height (spacing 32)}}

       :input-variable {:transition (create-transition ["background-color" "box-shadow" "border-color"]
                                                       {:duration short})
                        &:active {:box-shadow (shadows 1)}
                        [&:hover &.Mui-focusVisible] {:background (action :hover)
                                                      :border-color '(rgba 0 0 0 0.3)}
                        &.selected {:background (action :selected)
                                    :border-color '(rgba 0 0 0 0.3)}}

       :calibration {:padding (spacing 2)
                     :font-size "1rem"
                     :margin-bottom (spacing 1)
                     span.label {:margin-right (spacing 1)
                                 :font-weight 500
                                 :user-select "none"}}
       :conditions {:padding-y (spacing 0.75)
                    >li {:padding-y (spacing 0.25)}}
       "@keyframes flood-fade" {:from {:flood-opacity 0}
                                :to {:flood-opacity 1}}
       "@keyframes mosey-on-in" {:from {:opacity 0}
                                 :to {:opacity 1}}
       "@global"
       {body {:overflow-y "scroll"
              .dragging>* {:pointer-events "none"}}
        button {:all "unset"}
        .katex {:font-size "1.08em"}
        .katex-display {:margin "0.5em 0"
                        >.katex {:white-space "normal"}
                        >.base {:margin "2.5em 0"}}
        .MuiTypography-root {>$math>.katex {.punct {:mixin (typography :body-1)}}
                             [>span >em >i] {'(& (:nth-last-child "n+1") :after) {:content "' '"}
                                             '(& (:nth-child "n+1") :before) {:content "' '"}}
                             $math {:font-size "unset"}}
        [.MuiRadio-root
         .MuiFormLabel-root] {:transition (create-transition ["color" "background-color"]
                                                             {:duration shortest})}}))))
