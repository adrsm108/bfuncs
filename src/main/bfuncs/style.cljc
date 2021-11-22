(ns bfuncs.style
  (:require
   [bfuncs.utils :refer [condf assert-args condo->> if-first reduce! for' throw-ex-arg]]
   [clojure.string :as str]
   [fipp.clojure :as fipp]
   [clojure.set :as set]))

(declare style-combine !vclasses)

(def ^:private shorthand-props
  #{:margin-x :margin-y :padding-x :padding-y
    :border-x :border-y :border-x-color :border-y-color
    :border-x-width :border-y-width :border-x-style :border-y-style
    :border-top-radius :border-bottom-radius :border-left-radius :border-right-radius})

(def ^:private special-props

  #{:mixin :extends})

(defn- topo-sort [deps]
  (let [g (reduce! (fn [g [[fst] exts]]
                     (assoc! g fst (into (or (get g fst) #{}) exts)))
                   (transient {}) deps)
        marked (atom (transient #{}))
        visited (atom (transient #{}))
        result (reduce (fn vis [l n]
                         (cond
                           (or (contains? @marked n) (string? l)) l
                           (contains? @visited n) (str n)
                           :else (do
                                   (swap! visited conj! n)
                                   (loop [adjs (g n), l l]
                                     (if (string? l)
                                       (str n " -> " l)
                                       (if-first [m adjs]
                                         (recur (next adjs) (vis l m))
                                         (do
                                           (swap! marked conj! n)
                                           (conj! l n))))))))
                       (transient []) (keys g))]
    (if (string? result)
      (throw-ex-arg "Dependency cycle: " result)
      (sort-by (comp (into {}
                           (map-indexed (fn [i x] [x i]))
                           (persistent! result))
                     ffirst)
               deps)
      )))

(defn- expand-shorthand [k v]
  (let [[_ fst axis rst] (re-find #"^([^-]+)-(x|y|top|bottom|left|right)-?(.+)?$" (name k))]
    (map (fn [dir val]
           [(keyword (str fst "-" dir (when rst "-") rst))
            val])
         (case axis
           "x" ["left" "right"]
           "y" ["top" "bottom"]
           ("top" "bottom") (mapv #(str axis "-" %) ["left" "right"])
           ("left" "right") (mapv #(str % "-" axis) ["top" "bottom"]))
         (if (vector? v) v (repeat v)))))

(defn- tidy-selector [sel prepend-&]
  (let [sel-name (str/trim (name sel))]
    (if (and prepend-&
             (not (str/starts-with? sel-name "&")))
      (str "& " sel-name)
      sel-name)))

(defn quoted? [x]
  (and (seq? x)
       (= (first x) `quote)))

(defn- convert-attribute-selector
  [[attr operator value flag]]
  (str "["
       attr
       operator
       (when value (pr-str value))
       (when flag " ") flag
       "]"))

(defn- convert-selector
  ([sel prepend-&] (convert-selector sel prepend-& 0))
  ([sel prepend-& lvl]
   (condf sel
     (some-fn symbol? string?) (tidy-selector sel prepend-&)
     set? (str/join ", " (map #(convert-selector % prepend-&) sel))
     vector? (let [[sep prep] (case lvl
                                0 [", " (repeat prepend-&)]
                                1 [" " (cons prepend-& (repeat false))]
                                (throw-ex-arg "Invalid selector nesting level " lvl " for " (pr-str sel)))]
               (str/join sep (map convert-selector sel prep (repeat (inc lvl)))))
     quoted? (let [s (second sel)]
               (tidy-selector
                (condf s
                  vector? (convert-attribute-selector s)
                  seq? (str/join
                        (map (fn [x]
                               (condf x
                                 vector? (convert-attribute-selector x)
                                 seq? (str (first x) "("
                                           (str/join " " (map convert-selector (rest x) (repeat false))) ")")
                                 keyword? (str x)
                                 (convert-selector x false)))
                             s))
                  (throw-ex-arg "Invalid quoting for selector " (pr-str sel)))
                prepend-&))
     sel)))

(def ^:private literal? (complement (some-fn symbol? list?)))

(defn- ekko
  ([thing]
   (fipp/pprint thing)
   thing)
  ([label thing]
   (println label " " (with-out-str (fipp/pprint thing)))
   thing))

(defn- ekko!
  ([transient-thing]
   (let [persistent-thing (persistent! transient-thing)]
     (println (str "<" (with-out-str (fipp/pprint persistent-thing)) ">"))
     (transient persistent-thing)))
  ([label transient-thing]
   (let [persistent-thing (persistent! transient-thing)]
     (println label (str "<" (str/trim (with-out-str (fipp/pprint persistent-thing))) ">"))
     (transient persistent-thing))))

(defn- unit? [x]
  (and (vector? x)
       (= (count x) 2)
       (keyword? (second x))))

(defn- safe-pop [x]
  (if (empty? x) x (pop x)))

(defn- joinp [sep x]
  (when (seq x)
    (if sep
      (str (str/join sep x) sep)
      (str/join x))))

(def ^:private literal-value? (some-fn string? number? keyword?))
(def ^:dynamic *register-extensions* nil)
(def ^:dynamic *register-mixins* nil)

(defn- not-at-rule? [x]
  (not (and (string? x) (str/starts-with? x "@"))))

(defn- ensure-vector [x]
  (if (vector? x) x [x]))

(defn- style-merge
  ([] nil)
  ([s] s)
  ([s1 s2]
   (if (and (map? s1) (map? s2))
     (cond-> (merge-with style-merge s1 s2)
       (and (contains? s1 :mixin)
            (contains? s2 :mixin)) (assoc
                                     :mixin (into (ensure-vector (get s2 :mixin))
                                                  (ensure-vector (get s1 :mixin)))))
     s2))
  ([s1 s2 & more] (reduce style-merge (style-merge s1 s2) more)))

(declare convert-value)

(defn- convert-map [x enquoted path]
  (->> x
       (*register-extensions* path)
       (*register-mixins* path)
       (reduce-kv
        (fn [tm k v]
          (if (shorthand-props k)
            (reduce conj! tm (expand-shorthand k v))
            (let [sel (convert-selector k (-> path peek not-at-rule?))]
              (assoc! tm
                sel (convert-value v enquoted (conj path sel))))))
        (transient {}))
       persistent!))

(defn- convert-quoted-or-unit [x path]
  (if-let [item (condf x
                  quoted? (second x)
                  unit? [(first x) (name (second x))]
                  vector? x
                  false)]
    (if (seqable? item)
      (let [sep (when-not (unit? x)
                  (str (when (seq? item) ",") " "))]
        (loop [res []
               pre (when (seq? item)
                     (str (first item) "("))
               orgs (if (seq? item)
                      (rest item)
                      item)]
          (if-some [[lits [nlit & more]] (when orgs (split-with literal-value? orgs))]
            (recur (if nlit
                     (let [conv (do (assert (not (map? nlit)))
                                    (convert-value nlit true path))]
                       (cond
                         (string? conv) (conj (safe-pop res)
                                              (str (peek res) pre (joinp sep lits) conv))

                         (and (seq? conv) (= (first conv) `str))
                         (let [args (rest conv)]
                           (into (conj (safe-pop res)
                                       (str (peek res) pre (joinp sep lits) (first args)))
                                 (rest args)))

                         :else (conj res (str pre (joinp sep lits)) conv)))
                     (conj res (str pre (str/join sep lits))))
                   sep more)
            (let [r (reduce (fn [acc xs]
                              (if (string? (first xs))
                                (let [s (str/join xs)]
                                  (conj acc s))
                                (into acc xs)))
                            [] (partition-by string?
                                             (if (seq? item)
                                               (conj res ")")
                                               res)))]
              (if (= (count r) 1)
                (first r)
                (cons `str r))))))
      item)
    x)
  )

(defn- convert-value [x enquoted path]
  (cond
    (map? x) (convert-map x enquoted path)

    (or enquoted (quoted? x) (unit? x)) (convert-quoted-or-unit x path)
    (vector? x) (mapv convert-value x (repeat false) (repeat path))
    :else x))

(defn- convert-calc [expr]
  (if-let [op (and (seq? expr)
                   (#{'+ '- '* '/} (first expr)))]
    (let [res (into ["("]
                    (comp (interpose (str " " (name op) " "))
                          (map convert-calc))
                    (rest expr))]
      (if (= (count res) 1)
        (subvec res 1)
        (conj res ")")))
    expr))

(defmacro calc [expr]
  (convert-value (list 'quote (list 'calc (convert-calc expr)))
                 false nil))

(def testdeps {["ass" "& good-boy" :little] ["fart-2" "another"]
               ["ass" "& good-boy"] ["fart"]
               ["fart" :gas :auto "& .doof"] ["this" "another"]
               ["fart-2" :aut] ["fart"]
               ["this" :slut "wie"] ["piss" "ass"]})

(defn- update-set! [tm k f x]
  (assoc! tm
    k (f (get tm k #{}) x)))


(defmacro defstyles [& forms]
  (assert-args
   (even? (count forms)) "an even number of forms"
   (every? (some-fn string? keyword?) (take-nth 2 forms)) "keywords or strings for style names")
  (let [!extensions (atom (transient {}))
        !extension-deps (atom (transient {}))
        !mixins (atom (transient {}))
        styles (binding [*register-extensions* (fn [[fst :as path] style]
                                                 (if-some [extensions (get style :extends)]
                                                   (let [extensions (if (vector? extensions)
                                                                      (mapv name extensions)
                                                                      [(name extensions)])]
                                                     (swap! !extensions assoc! path extensions)
                                                     (swap! !extension-deps update-set!
                                                            fst into extensions)
                                                     (dissoc style :extends))
                                                   style))
                         *register-mixins* (fn [[fst :as path] style]
                                             (if (contains? style :mixin)
                                               (do
                                                 (swap! !mixins update-set!
                                                        fst conj path)
                                                 style)
                                               style))]
                 (reduce! (fn [m [k v]]
                            (let [style-name (name k)]
                              (if-not (contains? m style-name)
                                (assoc! m
                                  style-name
                                  (convert-value v false [style-name]))
                                (throw-ex-arg "Duplicate style name: " style-name))))
                          (transient {})
                          (partition 2 forms)))
        extensions (persistent! @!extensions)
        x-styles (if-let [sorted-extensions (when (seq extensions) (topo-sort extensions))]
                   (do
                     (doall (for [[[a :as path-a] deps] sorted-extensions
                                  dep deps]
                              ; a extends dep
                              (swap! !mixins
                                     (fn [mixins]
                                       (if-some [mixed-paths (get mixins dep)] ; [[dep 1 2 ...], ...]
                                         (assoc! mixins
                                           a (into
                                              (get mixins a #{}) ; [[a 3 4...], ...]
                                              (map #(into path-a (rest %)))
                                              mixed-paths))
                                         mixins)))))
                     (reduce (fn [m [path exts]]
                               (update-in m
                                 path
                                 (fn [base-style]
                                   (apply style-merge base-style
                                          (map #(let [sty (get styles (name %))]
                                                  (cond
                                                    (nil? sty)
                                                    (throw-ex-arg "Extension failed. style not found: " %)

                                                    (not (map? sty))
                                                    (throw-ex-arg "Extension failed. Extended style "
                                                                  % " must be a map literal.")

                                                    :else sty))
                                               exts)))))
                             styles sorted-extensions))
                   styles)]
    (if-let [mixins (persistent! @!mixins)]
      (if (seq mixins)
        (reduce (fn [m paths]
                  (reduce (fn [m path]
                            (update-in m
                              path (fn [{:keys [mixin] :as style}]
                                     `(merge-with style-combine
                                                  ~@(ensure-vector mixin)
                                                  ~(dissoc style :mixin))
                                     )))
                          m (sort #(compare %2 %1) paths)))
                x-styles (vals mixins))
        x-styles))))

(defmacro style [& style-forms]
  (if (and (= (count style-forms) 1)
           (map? (first style-forms)))
    (convert-value (first style-forms) true [])))

(defmacro classes [& forms]
  (let [{keywords true
         non-keywords false} (group-by keyword? forms)]
    (case (count keywords)
      0 (cons `r/class-names forms)
      1 `(r/class-names (get @!vclasses ~(first keywords)) ~@non-keywords)
      (let [gc (gensym "classes")]
        `(let [~gc @!vclasses]
           (r/class-names
            ~@(map (fn [x] `(get ~gc ~x)) keywords)
            ~@non-keywords))))))
