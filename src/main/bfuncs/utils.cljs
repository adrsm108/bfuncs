(ns bfuncs.utils
  (:require [goog.functions :as gfunc]
            [applied-science.js-interop :as j]
            [clojure.string :as str]
            [cljs.core :as core])
  (:require-macros [bfuncs.utils :refer [reduce!]])
  (:import [goog.string StringBuffer]))

(defn event-value
  [^js/Event e]
  (j/get-in e [:target :value]))

(defn event-checked
  [^js/Event e]
  (j/get-in e [:target :checked]))

(defn clipboard-write!
  "Attempts to write text to system clipboard.
  Returns a boolean indicating whether write was successful."
  [text]
  (-> js/navigator
      (j/get "permissions")
      (.query #js {:name "clipboard-write"})
      (.then (fn [result]
               (if (#{"granted" "prompt"} (j/get result "state"))
                 (-> js/navigator
                     (j/get "clipboard")
                     (.writeText (str text))
                     (.then (constantly true)
                            (constantly false)))
                 false)))
      (.catch (constantly false))))

(def log js/console.log)
(def dbg js/console.debug)
(defn echo
  ([x] (when goog/DEBUG (println x)) x)
  ([label x]
   (when goog/DEBUG (println label x))
   x))

(defn echol
  ([x] (when goog/DEBUG (log x)) x)
  ([label x] (when goog/DEBUG (log label x)) x))

(defn echod
  ([x] (when goog/DEBUG (dbg x)) x)
  ([label x] (when goog/DEBUG (dbg label x)) x))

(defn rrange
  "Gives a sequence that is the reverse of the one produced by range with the same arguments.
  Arguments are expected to be numerical. Not defined for zero arguments."
  ([] (throw (ex-info "rrange is not defined on zero arguments" {})))
  ([end]
   {:pre [(number? end)]}
   (range (dec end) -1 -1))
  ([start end]
   {:pre [(number? start) (number? end)]}
   (range (dec end) (inc start) -1))
  ([start end step]
   {:pre [(number? start) (number? end) (number? step)]}
   (let [l (- end start)
         r (rem l step)]
     (range (+ start
               (* step (- (quot l step)
                          (if (zero? r) 1 0))))
            (- start step)
            (- step)))))

(defn named?
  "Returns true if x is suitable input for the name function."
  [x]
  (or (string? x)
      (keyword? x)
      (symbol? x)))


(defn name-or-str
  "Returns (name x) if x is a keyword or symbol, (str x) otherwise."
  [x] ((if (named? x) name str) x))

(defn distinct-keys
  "Returns a sequence of distinct keys from its arguments."
  [& maps]
  (->> maps
       (mapcat keys)
       distinct))

(defn map-reduce
  "Equivalent to (reduce rf init? (map f coll))"
  ([f rf coll]
   (if (seq coll)
     (map-reduce f
                 rf
                 (f (first coll))
                 (rest coll))
     (reduce rf coll)))
  ([f rf init coll]
   (reduce #(rf %1 (f %2))
           init
           coll)))

(defn select
  "Returns the set of elements from xset for which pred is logical true.
  Just like clojure.set/select, but utilizes transient collections."
  [pred xset]
  (reduce! (fn [s k] (if (pred k) s (disj! s k)))
           (transient xset)
           xset))

(defn map-vals [f m]
  (if (empty? m)
    m
    (if-let [tm (if (map? m)
                  (when (satisfies? IEditableCollection m)
                    (transient m))
                  (transient {}))]
      (reduce! (fn [tm [k v]]
                 (assoc! tm k (f v)))
               tm m)
      (reduce (fn [m [k v]]
                (assoc m k (f v)))
              (empty m) m))))

(defn map-kv [f m]
  (if (empty? m)
    m
    (if-let [tm (if (map? m)
                  (when (satisfies? IEditableCollection m)
                    (transient m))
                  (transient {}))]
      (reduce! (fn [tm [k v]]
                 (assoc! tm k (f k v)))
               tm m)
      (reduce (fn [m [k v]]
                (assoc m k (f k v)))
              (empty m) m))))

(defn minimal-by
  [f coll]
  (when-first [a coll]
    (reduce (fn [[mins minv :as m] x]
              (let [v (f x)]
                (cond
                  (< v minv) [[x] v]
                  (= v minv) [(conj mins x) minv]
                  :else m)))
            [[a] (f a)]
            (rest coll))))

(defn maximal-by
  "Returns the vector [maximal-items max-val],
  where maximal-items is the collection of x in coll for which (f x) is greatest,
  and max-val is the greatest value of f"
  [f coll]
  (when-first [a coll]
    (reduce (fn [[maxs maxv :as m] x]
              (let [v (f x)]
                (cond
                  (> v maxv) [[x] v]
                  (= v maxv) [(conj maxs x) maxv]
                  :else m)))
            [[a] (f a)]
            (rest coll))))

(defn maximum
  "Returns the max value of (f x) over all x in coll, where f defaults to identity."
  ([coll]
   (reduce max coll))
  ([f coll]
   (when-first [a coll]
     (reduce (fn [mv x]
               (max mv (f x)))
             (f a)
             (rest coll)))))

(defn minimum
  "Returns the min value of (f x) over all x in coll, where f defaults to identity."
  ([coll]
   (reduce min coll))
  ([f coll]
   (when-first [a coll]
     (reduce (fn [mv x]
               (min mv (f x)))
             (f a)
             (rest coll)))))

(defn count-when
  [pred coll]
  (reduce #(if (pred %2) (inc %1) %1) 0 coll))

(defn count-distinct
  [coll]
  (loop [total 0
         marked (transient #{})
         xs coll]
    (if-let [[x & xs'] (seq xs)]
      (if (contains? marked x)
        (recur total marked xs')
        (recur (inc total) (conj! marked x) xs'))
      total)))

(defn one? [x] (= x 1))

(defn singleton?
  "Returns true if x is a collection with exactly one item."
  [x]
  (and (coll? x)
       (one? (bounded-count 2 x))))

(defn disjoint?
  "Given two collections, returns true if they contain no common elements."
  [c1 c2]
  (or (empty? c1)
      (empty? c2)
      (not-any? #(contains? c2 %) c1)))

(defn products
  "Returns a vector of vectors representing the cartesian product of elements in the given sequences."
  [& seqs]
  (let [vecs (mapv vec seqs)
        n-1 (dec (count vecs))
        pare-down (fn [vs]
                    (loop [i n-1
                           vs vs]
                      (when (>= i 0)
                        (if-let [rst (next (vs i))]
                          (assoc vs i rst)
                          (recur (dec i) (assoc vs i (vecs i)))))))]
    (when (not-any? empty? vecs)
      (loop [result []
             vs vecs]
        (if (empty? vs)
          result
          (recur (conj result (mapv first vs))
                 (pare-down vs)))))))

(defn conj-kept
  "Returns new collection with non-nil xs conjoined."
  ([] (conj))
  ([coll] (conj coll))
  ([coll x] (if (nil? x) coll (conj coll x)))
  ([coll x & xs] (reduce! #(if (nil? %2) %1 (conj! %1 %2))
                          (if (nil? x)
                            (transient coll)
                            (conj! (transient coll) x))
                          xs)))

(defn positions
  [pred coll]
  (seq (keep-indexed #(when (pred %2) %1) coll)))

(defn pick
  "Takes two sequences, and returns a vector consisting of items from the
  first where the element at the corresponding position of the second is
  logical true.

  (pick [:a :b :c :d] [true false true false])
  ;; => [:a :b]"
  [coll sel]
  (loop [coll (seq coll)
         sel (seq sel)
         ret []]
    (if (and coll sel)
      (recur (next coll)
             (next sel)
             (if (first sel)
               (conj ret (first coll))
               ret))
      ret)))

(defn hiccup-tag
  "With one argument x, returns (first x) if x is a vector whose first item is
  a keyword, nil otherwise.

  With an additional first argument test, returns (first x) when x is a vector,
  and test is either equal to (first x), or is a set which contains (first x)."
  ([x]
   (when (vector? x)
     (let [t (first x)]
       (when (keyword? t) t))))
  ([test x]
   (when (vector? x)
     (let [t (first x)]
       (cond
         (set? test) (test t)
         (= test t) t)))))

(defn count-truthy
  [coll]
  (reduce #(if %2 (inc %1) %1)
          0
          coll))

(defn truth-vecs
  ([n] (truth-vecs n false))
  ([n meta?]
   (let [idxs (rrange n)]
     (map (if meta? #(with-meta (mapv (partial bit-test %) idxs)
                                {:terms (sorted-set %)})
                    #(mapv (partial bit-test %) idxs))
          (range (bit-set 0 n))))))

(defn ->truth-vecs
  ([ints arity] (->truth-vecs ints arity false))
  ([ints arity meta?]
   (let [idxs (rrange arity)]
     (map (if meta? #(with-meta (mapv (partial bit-test %) idxs)
                                {:terms (sorted-set %)})
                    #(mapv (partial bit-test %) idxs))
          ints))) )

(defn max-set-bit
  "Gets maximum set bit of n. Expects n to be a nonnegative integer."
  [n]
  {:pre [(nat-int? n)]}
  (loop [x n, i 0]
    (if (pos? x)
      (recur (bit-shift-right x 1) (inc i))
      i)))

(defn map-assoc
  [f keys]
  (reduce! #(assoc! %1 %2 (f %2))
           (transient {})
           keys))

(def pass gfunc/NULL)

(defn essence [x]
  (if (satisfies? IDeref x) @x x))

(defn construct
  ([f] (f))
  ([f x] (f x))
  ([f x y] (f x y))
  ([f x y z] (f x y z))
  ([f a b c d] (f a b c d))
  ([f a b c d & more] (apply f a b c d more)))

(defn mapa
  [f coll]
  (let [arr (array)]
    (loop [coll (seq coll)]
      (when coll
        (.push arr (f (first coll)))
        (recur (next coll))))
    arr))

(defn map-into-array
  [f arr coll]
  {:pre [(array? arr)]}
  (loop [coll (seq coll)]
    (when coll
      (.push arr (f (first coll)))
      (recur (next coll))))
  arr)

(defn reset-nil! [& atoms]
  (doseq [a atoms] (reset! a nil)))

(defn postinc! [a]
  (let [v @a]
    (swap! a inc)
    v))

(defn post-swap! [a f & args]
  (let [v @a]
    (apply swap! f args)
    v))

(defn add-keys [seq]
  (map-indexed #(vary-meta %2 assoc :key %1) seq))

(defn assoc-some
  ([coll k v]
   (if (some? k)
     (assoc coll k v)
     coll))
  ([coll k v & kvs]
   (let [ret (assoc-some coll k v)]
     (if kvs
       (recur ret (first kvs) (second kvs) (nnext kvs))
       ret))))

(defn array-like? [x]
  (or (array? x)
      (vector? x)))

(defn int-digits
  ([x] {:pre [(int? x)]}
   (if (zero? x)
     1
     (-> x Math/abs Math/log10 Math/floor inc)))
  ([x base] {:pre [(int? x) (int? base)]}
   (if (zero? x)
     1
     (-> x
         Math/abs
         Math/log
         (/ (case base
              2 Math/LN2
              10 Math/LN10
              (Math/log base)))
         Math/floor
         inc)))
  )

(defn stopping-propagation [f]
  (fn [event & args]
    (apply f event args)
    (j/call event :stopPropagation)))

(defn toggle-selection
  "Updates :selection in sel, to new-selection if it is different from current value, nil otherwise.
  In the latter case, event.target.blur() is also called.
  When event.shiftKey is true, :selection becomes new-selection, and :page-data is updated to show new-step."
  [{selection :selection
    [_ per-page] :page-data
    :as sel} event new-selection new-step]
  (if (j/get event :ctrlKey)
    (if new-step
      {:selection new-selection
       :page-data [(quot new-step per-page) per-page]}
      (assoc sel :selection new-selection))
    (assoc sel
      :selection (if (= new-selection selection)
                   ;; blur target and return nil
                   (j/call-in event [:target :blur])
                   new-selection))))

(defn toggle-selection-key-down-fn [!sel new-selection new-step]
  (fn [e]
    (case (j/get e :key)
      "Enter" (do
                (swap! !sel toggle-selection e new-selection new-step)
                (j/call e :preventDefault)
                (j/call e :stopPropagation))
      " " (do
            (j/call e :preventDefault)
            (j/call e :stopPropagation)
            (when-not (j/get e :repeat)
              (j/call-in e [:target :classList :toggle] "active" true)))
      nil)))

(defn toggle-selection-key-up-fn [!sel new-selection new-step]
  (fn [e]
    (case (j/get e :key)
      " " (do
            (swap! !sel toggle-selection e new-selection new-step)
            (j/call-in e [:target :classList :toggle] "active" false)
            (j/call e :preventDefault)
            (j/call e :stopPropagation))
      nil)))

(defn assoc-in'
  "assoc-in that allows for multiple key-seq/value pairs."
  ([m ks v]
   (assoc-in m ks v))
  ([m ks v & kvs]
   (let [ret (assoc-in m ks v)]
     (if kvs
       (recur ret (first kvs) (second kvs) (nnext kvs))
       ret))))

(defn reduce-from [f init coll]
  (if (reduced? init)
    @init
    (reduce f init coll)))

(defn toggle!
  ([atom] (swap! atom not))
  ([atom val] (swap! atom #(when-not (= % val) val))))

(defn str-join
  ([coll] (str/join coll))
  ([sep coll] (str/join sep coll))
  #_([start end coll]
     (loop [sb (StringBuffer. (str start))
            coll (seq coll)]
       (if-not (nil? coll)
         (recur (j/call sb :append (str (first coll))) (next coll))
         ^string (do (j/call sb :append (str end))
                     (j/call sb :toString)))))
  ([sep f coll]
   (loop [sb (StringBuffer.)
          coll (seq coll)]
     (if-not (nil? coll)
       (do (j/call sb :append (str (f (first coll))))
           (let [coll (next coll)]
             (when-not (nil? coll)
               (j/call sb :append sep))
             (recur sb coll)))
       ^string (j/call sb :toString))))
  ([start sep end coll]
   (loop [sb (StringBuffer. (str start))
          coll (seq coll)]
     (if-not (nil? coll)
       (do (j/call sb :append (str (first coll)))
           (let [coll (next coll)]
             (when-not (nil? coll)
               (j/call sb :append sep))
             (recur sb coll)))
       ^string (do (j/call sb :append (str end))
                   (j/call sb :toString)))))

  ([start sep end f coll]
   (loop [sb (StringBuffer. (str start))
          coll (seq coll)]
     (if-not (nil? coll)
       (do (j/call sb :append (str (f (first coll))))
           (let [coll (next coll)]
             (when-not (nil? coll)
               (j/call sb :append sep))
             (recur sb coll)))
       ^string (do (j/call sb :append (str end))
                   (j/call sb :toString))))))

(defn big-int [n]
  (js/BigInt n))

(defn str-surround [start end s]
  (str start s end))

(defn byte-array
  ([size-or-seq] (if (seqable? size-or-seq)
                   (js/Int8Array.from size-or-seq)
                   (js/Int8Array. size-or-seq)))
  ([size init-val-or-seq] (if (seqable? init-val-or-seq)
                            (js/Int8Array.from (j/assoc! (clj->js init-val-or-seq)
                                                 :length size))
                            (j/call (js/Int8Array. size) :fill init-val-or-seq))))

(defn byte-array? [x] (= (type x) js/Int8Array))

(defn floor-log2 [n] (- 31 (js/Math.clz32 n)))

(defn non-empties [& args]
  (remove empty? args))
