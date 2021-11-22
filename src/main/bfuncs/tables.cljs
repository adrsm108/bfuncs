(ns bfuncs.tables
  (:require
   [bfuncs.typesetting :refer [expression $]]
   [bfuncs.style :refer [classes]]
   [bfuncs.transitions :refer [switch-transition transition-group css-transition]]
   [bfuncs.utils :refer
    [echo map-vals map-reduce event-value
     event-checked for' fori fori' mp
     conj-when log fn-> let-case exec timed-fn get-meta]]
   [bfuncs.minimization :as bmin]
   [cljs.core.async :refer [<!] :refer-macros [go]]
   [clojure.set :refer [subset?]]
   [goog.functions :as gfunc]
   [reagent-material-ui.core.button :refer [button]]
   [reagent-material-ui.core.button-base :refer [button-base]]
   [reagent-material-ui.core.container :refer [container]]
   [reagent-material-ui.core.fade :refer [fade]]
   [reagent-material-ui.core.hidden :refer [hidden]]
   [reagent-material-ui.core.icon-button :refer [icon-button]]
   [reagent-material-ui.core.linear-progress :refer [linear-progress]]
   [reagent-material-ui.core.link :refer [link]]
   [reagent-material-ui.core.table :refer [table]]
   [reagent-material-ui.core.table-body :refer [table-body]]
   [reagent-material-ui.core.table-cell :refer [table-cell]]
   [reagent-material-ui.core.table-container :refer [table-container]]
   [reagent-material-ui.core.table-footer :refer [table-footer]]
   [reagent-material-ui.core.table-head :refer [table-head]]
   [reagent-material-ui.core.table-pagination :refer [table-pagination]]
   [reagent-material-ui.core.table-row :refer [table-row]]
   [reagent-material-ui.core.typography :refer [typography]]
   [reagent-material-ui.icons.expand-less-outlined :refer [expand-less-outlined]]
   [reagent-material-ui.icons.expand-more-outlined :refer [expand-more-outlined]]
   [reagent-material-ui.icons.last-page-outlined :refer [last-page-outlined]]
   [reagent-material-ui.core.collapse :refer [collapse]]
   [reagent-material-ui.core.list :refer [list]]
   ["@material-ui/core/List" :default MuiList]
   ["@material-ui/core/styles/transitions" :refer [duration]]
   ["react-transition-group" :refer [CSSTransition]]
   [reagent-material-ui.core.list-item :refer [list-item]]
   [reagent.core :as r :refer-macros [with-let]]
   [applied-science.js-interop :as j]))


(defn- appearing-linear-progress
  [{:keys [timeout fade-props progress-props] :or {timeout 1000}}]
  (with-let [visible (r/atom false)
             timeout-id (js/setTimeout
                         #(reset! visible true)
                         timeout)]
    [fade (r/merge-props fade-props {:in @visible})
     [linear-progress progress-props]]
    (finally (js/clearTimeout timeout-id))))

(defn- row-group [{:keys [group-name data]} buttons]
  [:div {:class (classes :expressions-group)}
   [typography {:variant "subtitle1"
                :class "group-label"}
    group-name]
   [:div {:class "content"}
    [switch-transition
     (if (empty? data)
       [css-transition {:key "progress"
                        :timeout 300
                        :appear true}
        [container {:max-width "sm"
                    :class "progress-container"}
         [linear-progress {:class "progress-bar"}]]]
       [collapse {:key "expressions"
                  :class (classes :fade-collapse)}
        (cond-> (into [list {:class (classes "expressions"
                                             (if buttons "with-buttons" "without-buttons"))}]
                      (map (fn [expr]
                             [expression {:expandable true
                                          :wrapper-props {:component list-item
                                                          :disable-gutters true
                                                          :divider true}}
                              expr]))
                      data)
          buttons (conj buttons))])]]])


(defn expressions-table-rows [{:keys [data label chunk-size]
                               :or {chunk-size 4}}]
  (with-let [!rows-visible (r/atom chunk-size)]
    (let [row-count (count data)
          rows-visible @!rows-visible]
      [row-group {:group-name label
                  :data (take rows-visible data)}
       (when (> row-count chunk-size)
         (let [change-rows-fn (fn [x]
                                (let [op! (if (fn? x) swap! reset!)]
                                  (gfunc/debounce
                                   #(op! !rows-visible x)
                                   350)))
               hidden-count (- row-count rows-visible)
               extra-visible? (> rows-visible chunk-size)
               all-visible? (<= hidden-count 0)
               show-more! (change-rows-fn #(min row-count (+ % chunk-size)))
               show-fewer! (change-rows-fn #(max chunk-size (- % chunk-size)))
               show-all! (change-rows-fn row-count)
               show-none! (change-rows-fn chunk-size)]
           [:li {:class (classes :expressions-table-button-group
                                 (when all-visible? "all-visible")
                                 (when extra-visible? "extra-visible"))}
            [icon-button {:class "all"
                          :size "small"
                          :disabled all-visible?
                          :title "Show all results"
                          :on-click show-all!}
             [last-page-outlined {:style {:transform "rotate(90deg)"}}]]
            [icon-button {:class "none"
                          :size "small"
                          :disabled (not extra-visible?)
                          :title "Hide most results"
                          :on-click show-none!}
             [last-page-outlined {:style {:transform "rotate(-90deg)"}}]]
            [button-base {:component "div"
                          :class "spacer"
                          :tab-index -1
                          :role "none"
                          :disabled all-visible?
                          :title "Show more results"
                          :aria-hidden true
                          :on-click show-more!}
             (when-not all-visible?
               [link {:component "span"
                      :class "label"
                      :color "textSecondary"}
                (str hidden-count " more...")])]
            [icon-button {:class "more"
                          :size "small"
                          :disabled all-visible?
                          :title "Show more results"
                          :on-click show-more!}
             [expand-more-outlined]]
            [icon-button {:class "less"
                          :size "small"
                          :disabled (not extra-visible?)
                          :title "Show fewer results"
                          :on-click show-fewer!}
             [expand-less-outlined]]]))])))

#_[button-base {:class "spacer"
                :title "Show more results"
                :on-click (gfunc/debounce
                           (fn []
                             (swap! rows-visible
                                    #(min row-count (+ % chunk-size))))
                           200)}
   [link {:class "more"
          :component "span"
          :color "textSecondary"}
    (str diff " more...")]]

(defn expressions-table [{:keys []} & children]
  [table-container {:class (classes :expressions-table)}
   (into [:div.table]
         children)])

(defn truth-table
  [{:keys [expr vars]}]
  (when (and (some? expr)
             (some? vars))
    (if (> (count vars) 6)
      [typography
       "Truth table with more than 64 rows suppressed."]
      (let [tt (bmin/truth-table expr vars)]
        [table-container {:class (classes :truth-table)}
         [table {:size "small"
                 :sticky-header true}
          [table-head
           [table-row
            (for' [v vars]
              [table-cell {:key v}
               [expression {:class (classes :typeset-expression)}
                v]])
            [table-cell
             [expression {:class (classes :typeset-expression)}
              expr]]]]
          [table-body
           (fori' [i :index
                   row tt]
             [table-row {:key i,
                         :class (if (peek row) "true" "false")}
              (map-indexed
               (fn [j x]
                 [table-cell {:key j} (if x "1" "0")])
               row)])]]]))))


