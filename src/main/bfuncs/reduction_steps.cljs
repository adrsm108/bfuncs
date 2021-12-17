(ns bfuncs.reduction-steps
  (:require
   [bfuncs.minimization :as bmin :refer [decode-selection covered-terms]]
   [bfuncs.utils :refer
    [echo map-vals map-assoc
     map-reduce event-value event-checked
     pass for' fori fori' conj-when log
     fn-> let-case exec timed-fn get-meta
     if-first count-when positions toggle-class
     singleton? maximal-by applied mp add-keys condf rrange
     maximum int-digits
     toggle-selection-key-up-fn toggle-selection-key-down-fn toggle-selection
     ]]
   [bfuncs.typesetting-data :refer [default-macros]]
   [bfuncs.style :refer [classes]]
   [bfuncs.typesetting :refer [$ $$ format-var format-minterm format-maxterm]]
   [reagent-material-ui.core.table :refer [table]]
   ["@material-ui/core/ButtonBase" :default MuiButtonBase]
   [reagent-material-ui.core.table-body :refer [table-body]]
   [reagent-material-ui.core.table-cell :refer [table-cell]]
   [reagent-material-ui.core.table-row :refer [table-row]]
   [reagent-material-ui.core.table-container :refer [table-container]]
   [reagent-material-ui.core.table-footer :refer [table-footer]]
   [reagent-material-ui.core.table-pagination :refer [table-pagination]]
   [reagent.core :as r]
   [clojure.set :refer [subset?]]
   [clojure.string :as str]
   [reagent-material-ui.core.tooltip :refer [tooltip]]
   [reagent-material-ui.core.typography :refer [typography]]
   [reagent-material-ui.core.grid :refer [grid]]
   [applied-science.js-interop :as j]))

(defn- label-displayed-steps [o]
  (j/let [^:js {:keys [from to count]} o]
    (if (= from to)
      (str "Step " from " of " count)
      (str "Steps " from "-" to " of " count))))

(defn- label-displayed-steps-mini [o]
  (str "of " (j/get o :count)))

(defn- div-button-base
  [props]
  (r/create-element
   MuiButtonBase
   (js/Object.assign #js {}
                     props
                     #js {:component "tr"
                          :disableRipple true})))

(defn- reduction-steps-body
  [{:keys [steps title-row-fn group-row-fn head-row paginated !sel format-term format-prime term-length]}]
  (let [{[page steps-per-page] :page-data
         selection :selection} @!sel
        fst (if paginated (* page steps-per-page) 0)
        lst (if paginated (+ fst steps-per-page) ##Inf)
        [sel-i sel-g sel-imp sel-terms :as sel] (decode-selection selection term-length)]
    [:<>
     (fori' [i :index
             step steps
             :while (< i lst)
             :when (<= fst i)]
       [table-body {:key i, :class "step-body"}
        (title-row-fn i (= i fst))
        head-row
        (fori' [j :index
                [group imps] step]
          (cons
           (with-meta (group-row-fn group (count imps))
                      {:key (str i j)})
           (fori' [k :index
                   imp imps
                   :let [terms (covered-terms imp)
                         term (when (singleton? terms) (first terms))
                         prime-index (get-meta imp :prime-index)
                         v (cond
                             prime-index imp
                             term term
                             :else imp)
                         status (when sel
                                  (cond
                                    (and (< sel-i i) (subset? sel-terms terms)) "covers-selected"
                                    (and (> sel-i i) (subset? terms sel-terms)) "covered-by-selected"
                                    :else (case (- group sel-g)
                                            0 (if (= imp sel-imp) "selected" "nothing")
                                            (-1 1) (if (bmin/compatible? imp sel-imp)
                                                     "compatible"
                                                     "nothing")
                                            "nothing")))]]
             [table-row {:key (str i j k)
                         :component div-button-base
                         :tab-index 0
                         :class (r/class-names status "data-row")
                         :title (case status
                                  "covers-selected" "Covers selection"
                                  "covered-by-selected" "Covered by selection"
                                  "compatible" "Can merge with selection"
                                  nil)
                         :on-click #(swap! !sel toggle-selection % v nil)}
              (let [names (cond-> []
                            (singleton? terms) (conj [$ (format-term (first terms))])
                            prime-index (conj [$ (format-prime prime-index)]))]
                (into [table-cell {:class (classes "star-cell"
                                                   (when (empty? names)
                                                     "empty"))}]
                      names))
              [table-cell {:class "terms-cell"}
               (str/join ", " terms)]
              (fori' [m :index, x imp]
                ^{:key m} [table-cell (case x true "1" false "0" nil "‒")])])))])]))

(defn reduction-steps-pagination
  [{:keys [!sel page-count rows-per-page-options mini]}]
  (let [[page steps-per-page] @(r/cursor !sel [:page-data])]
    [table-pagination (merge {:count page-count
                              :page page
                              :rows-per-page steps-per-page
                              :on-change-page #(swap! !sel assoc-in [:page-data 0] %2)}
                             (if mini
                               {:class "pagination mini"
                                :label-displayed-rows label-displayed-steps-mini
                                :rows-per-page-options #js []
                                :component "div"}
                               {:class "pagination main"
                                :rows-per-page-options (clj->js rows-per-page-options)
                                :label-displayed-rows label-displayed-steps
                                :label-rows-per-page "Steps per page:"
                                :on-change-rows-per-page #(swap! !sel assoc :page-data [0 (event-value %)])}))]))

(defn reduction-steps-section
  [{:keys [data !vars !sel format-term format-prime pagination-threshold]
    :or {pagination-threshold 32}}]
  (swap! !sel assoc :page-data [0 1])
  (let [{:keys [steps term-length target-form]} data
        steps (vec steps)
        nsteps (count steps)
        nvars (count @!vars)
        nrows (map-reduce
               (partial map-reduce
                        (comp count val) +)
               + steps)
        paginated (> nrows pagination-threshold)]
    [grid {:item true, :xs 12}
     [table-container {:class (classes :reduction-steps-table "clicky")}
      [table {:size "small"}
       [:colgroup
        [:col.group]
        [:col.star]
        [:col.terms]
        [:col.vars]]
       [reduction-steps-body
        (mp :head-row [table-row {:class "head-row"}
                       [table-cell {:variant "head", :class "group-cell"}
                        [tooltip {:placement "top"
                                  :title "Group implicants by number of set bits"}
                         [:span "Group"]]]
                       [table-cell {:variant "head", :class "star-cell with-bord"}]
                       [table-cell {:variant "head", :class "terms-cell"}
                        (str (case target-form :SOP "Minterms" :POS "Maxterms") " Covered")]
                       (for' [i (range nvars)]
                         [table-cell {:key i
                                      :variant "head"
                                      :class "var-cell"}
                          [$ (format-var i nvars)]])]
            :title-row-fn (fn [i pagination?]
                            [table-row
                             [table-cell {:variant "head"
                                          :class "title-cell"
                                          :col-span (+ 3 nvars)}
                              [:div.title
                               [typography {:variant "h6"}
                                (str "Merging Step " (inc i))]
                               [typography {:variant "body1"
                                            :color "textSecondary"
                                            :class "count"}
                                (str "\u00a0of " nsteps)]
                               (when (and pagination? paginated)
                                 [reduction-steps-pagination (mp :page-count nsteps
                                                                 :mini true
                                                                 !sel)])]]])
            :group-row-fn (fn [group imp-count]
                            [table-row {:class "group-row"}
                             [table-cell {:row-span (inc imp-count)
                                          :class "group-cell"}
                              [:div.group-val group]]
                             [table-cell {:class "group-row-rest"
                                          :col-span (+ 2 nvars)}]])
            steps paginated term-length !sel format-term format-prime)]
       (when paginated
         [table-footer
          [table-row
           [reduction-steps-pagination (mp :page-count nsteps
                                           :rows-per-page-options [1 2 {:label "All" :value nsteps}]
                                           !sel)]]])]]]))