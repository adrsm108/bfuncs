(ns bfuncs.utils
  (:require
   [clojure.string :as str]
   [cljs.core.async :as async]
   [applied-science.js-interop :as j]))

(defmacro throw-ex-arg [& msgs]
  `(throw (IllegalArgumentException. (str ~@msgs))))

(defn- echo
  ([x] (prn x) x)
  ([lbl x] (println lbl) (print "  ") (prn x) x))

(defmacro fn->
  "Returns an anonymous function that threads its argument over forms using ->"
  [& forms]
  `(fn [x#] (-> x# ~@forms)))

(defmacro fn->>
  "Returns an anonymous function that threads its argument over forms using ->>"
  [& forms]
  `(fn [x#] (->> x# ~@forms)))

(defmacro applied
  "Creates a function that applies f to its argument."
  [f & args]
  `(partial apply ~f ~@args))

(defmacro conj-when
  "Evaluates test. If logical true, evaluates conj with coll and xs as arguments.
  Otherwise, simply evaluates coll."
  [test coll & xs]
  `(if ~test
     (conj ~coll ~@xs)
     ~coll))

(defmacro get'
  "Same as get, but only evaluates not-found if necessary"
  ([o k] `(get ~o ~k))
  ([o k not-found]
   `(let [o# ~o, k# ~k]
      (if (contains? o# k#)
        (get o# k#)
        ~not-found))))

(defmacro for'
  "Eager for. Returns nil if empty."
  [seq-exprs body-expr]
  `(doall (seq (for ~seq-exprs ~body-expr))))

(defmacro def-
  "non-public def"
  [name & decls]
  (list* `def (with-meta name (assoc (meta name) :private true)) decls))

(defmacro assert-args [& pairs]
  `(do (when-not ~(first pairs)
         (throw (IllegalArgumentException.
                 (str (first ~'&form) " requires " ~(second pairs) " in " ~'*ns* ":" (:line (meta ~'&form))))))
       ~(let [more (nnext pairs)]
          (when more
            (list* `assert-args more)))))

(defmacro exec
  "Yields a function that takes no arguments and executes exprs in order."
  [& exprs]
  (list* `fn [] exprs))

(defmacro let-case
  "binding => binding-form expr

  Dispatches case statement on the value of expr, with symbols in binding-form bound to it."
  [binding & clauses]
  (assert-args
   (vector? binding) "a vector for its binding"
   (= 2 (count binding)) "exactly 2 forms in binding vector")

  `(let [temp# ~(binding 1)
         ~(binding 0) temp#]
     (case temp# ~@clauses)))

(defmacro get-meta
  ([o key] `(get (meta ~o) ~key))
  ([o key not-found] `(get (meta ~o) ~key ~not-found)))

(defmacro get-in-meta
  ([o ks] `(get-in (meta ~o) ~ks))
  ([o ks not-found] `(get-in (meta ~o) ~ks ~not-found)))

(defmacro if-first
  "bindings => x xs

  Roughly the same as (if (seq xs) (let [x (first xs)] then) else) but xs is evaluated only once"
  [bindings then else]
  (assert-args
   (vector? bindings) "a vector for its binding"
   (= 2 (count bindings)) "exactly 2 forms in binding vector")
  (let [[x xs] bindings]
    `(if-let [xs# (seq ~xs)]
       (let [~x (first xs#)]
         ~then)
       ~else)))

(defmacro coercive-boolean [x]
  (with-meta (list 'js* "~{}" x)
             {:tag 'boolean}))

(defmacro fori [seq-exprs body-expr]
  "Indexed list comprehension. Takes a vector consisting of one binding-form /
  index-keyword pair, followed by one or more binding-form / collection-expr
  pairs with keyword modifiers, and yields a lazy sequence of evaluations of
  body-expr.

  Supported binding/index pairs are: sym :index, [sym1 sym2 ...] :indices. In
  the first, sym is bound to the index of the outermost sequence expression. In
  the second, syms bind the indices of successive sequence expressions from
  right to left.

  Subsequent binding pairs and modifiers share behavior and semantics with the
  classic for macro. Note that index bindings can be referenced in other
  expressions, on the condition that the sequence expression corresponding to
  the index binding in question comes beforehand."
  (assert-args
   (vector? seq-exprs) "a vector for its binding"
   (even? (count seq-exprs)) "an even number of forms in binding vector"
   (#{:index :indices} (second seq-exprs)) "its first collection expression to be :index or :indices"
   (or (not= :indices (second seq-exprs))
       (vector? (first seq-exprs))) "a vector for binding :indices")
  (let [
        err (fn [& msg] (throw (ex-info (apply str msg) {})))
        to-groups (fn [seq-exprs]
                    (let [[[k _] :as pairs] (partition 2 (nthrest seq-exprs 2))]
                      (if (keyword? k)
                        (err "Index expression does not support keyword modifiers.")
                        (loop [idxs (case (second seq-exprs)
                                      :index [(first seq-exprs)]
                                      :indices (first seq-exprs))
                               pairs pairs
                               groups []]
                          (if-let [[k v] (first pairs)]
                            (if (keyword? k)
                              (recur idxs
                                     (next pairs)
                                     (conj (pop groups) (conj (peek groups) [k v])))
                              (recur (next idxs)
                                     (next pairs)
                                     (conj groups [(first idxs) k v])))
                            groups)))))
        emit-bind (fn emit-bind
                    [[[ibind bind _ & mod-pairs] & [[_ _ next-expr] :as next-groups]]]
                    (let [giter (gensym "iter__")
                          gxs (gensym "s__")
                          gi (gensym "i__")
                          do-mod (fn do-mod [[[k v] & etc]]
                                   (cond
                                     (= k :let) `(let ~v ~(do-mod etc))
                                     (= k :while) `(when ~v ~(do-mod etc))
                                     (= k :when) `(if ~v
                                                    ~(do-mod etc)
                                                    (recur (rest ~gxs)
                                                           (unchecked-inc ~gi)))
                                     (keyword? k) (err "Invalid 'fori' keyword " k)
                                     next-groups `(let [iterys# ~(emit-bind next-groups)
                                                        fs# (seq (iterys# ~next-expr 0))]
                                                    (if fs#
                                                      (concat fs#
                                                              (~giter
                                                               (rest ~gxs)
                                                               (unchecked-inc ~gi)))
                                                      (recur (rest ~gxs)
                                                             (unchecked-inc ~gi))))
                                     :else `(cons ~body-expr
                                                  (~giter
                                                   (rest ~gxs)
                                                   (unchecked-inc ~gi)))))]
                      (if next-groups
                        #_"not the inner-most loop"
                        `(fn ~giter [~gxs ~gi]
                           (lazy-seq
                            (loop [~gxs ~gxs, ~gi ~gi]
                              (when-first [~bind ~gxs]
                                ~(if (nil? ibind)
                                   (do-mod mod-pairs)
                                   `(let [~ibind ~gi]
                                      ~(do-mod mod-pairs)))))))
                        #_"inner-most loop"
                        (let [gj (gensym "j__")
                              gb (gensym "b__")
                              gc (gensym "c__")
                              do-cmod (fn do-cmod [[[k v] & etc]]
                                        (cond
                                          (= k :let) `(let ~v ~(do-cmod etc))
                                          (= k :while) `(when ~v ~(do-cmod etc))
                                          (= k :when) `(if ~v
                                                         ~(do-cmod etc)
                                                         (recur (unchecked-inc ~gj)))
                                          (keyword? k) (err "Invalid 'for' keyword " k)
                                          :else `(do (chunk-append ~gb ~body-expr)
                                                     (recur (unchecked-inc ~gj)))))]
                          `(fn ~giter [~gxs ~gi]
                             (lazy-seq
                              (loop [~gxs ~gxs, ~gi ~gi]
                                (when-let [~gxs (seq ~gxs)]
                                  (if (chunked-seq? ~gxs)
                                    (let [~gc ^not-native (chunk-first ~gxs)
                                          size# (count ~gc)
                                          ~gb (chunk-buffer size#)]
                                      (if (coercive-boolean
                                           (loop [~gj 0]
                                             (if (< ~gj size#)
                                               ~(if (nil? ibind)
                                                  `(let [~bind (nth ~gc ~gj)]
                                                     ~(do-cmod mod-pairs))
                                                  `(let [~bind (nth ~gc ~gj)
                                                         ~ibind (unchecked-add ~gj ~gi)]
                                                     ~(do-cmod mod-pairs)))
                                               true)))
                                        (chunk-cons (chunk ~gb)
                                                    (~giter
                                                     (chunk-rest ~gxs)
                                                     (unchecked-add ~gi size#)))
                                        (chunk-cons (chunk ~gb) nil)))
                                    ~(if (nil? ibind)
                                       `(let [~bind (first ~gxs)]
                                          ~(do-mod mod-pairs))
                                       `(let [~bind (first ~gxs)
                                              ~ibind ~gi]
                                          ~(do-mod mod-pairs))))))))))))]
    `(let [iter# ~(emit-bind (to-groups seq-exprs))]
       (iter# ~(nth seq-exprs 3) 0))))

(defmacro fori'
  "Eager fori. Returns nil if empty."
  [seq-exprs body-expr]
  `(doall (seq (fori ~seq-exprs ~body-expr))))

(defmacro condf
  "condp with f"
  [expr & clauses]
  (let [gexpr (gensym "expr__")
        emit (fn emit [expr args]
               (let [[[a b c :as clause] more]
                     (split-at (if (= :>> (second args)) 3 2) args)
                     n (count clause)]
                 (cond
                   (= 0 n) `(throw (ex-info (str "No matching clause: " ~expr) {}))
                   (= 1 n) a
                   (= 2 n) `(if (~a ~expr)
                              ~b
                              ~(emit expr more))
                   :else `(if-let [p# (~a ~expr)]
                            (~c p#)
                            ~(emit expr more)))))]
    `(let [~gexpr ~expr]
       ~(emit gexpr clauses))))



;(def ^:private shorthand-props
;  #{:border-style :border-width :border-color :border-radius :border
;    :margin :padding}
;  )



(defmacro timed-fn
  [ms params & exprs]
  (assert-args
   (vector? params) "a vector for its params")
  `(fn ~params
     (js/setTimeout
      (fn [] ~@exprs)
      ~ms)))

(defmacro reduce!
  "Reduce and call persistent! on the result."
  ([f coll]
   `(persistent! (reduce ~f ~coll)))
  ([f val coll]
   `(persistent! (reduce ~f ~val ~coll))))


(defmacro unless-zero [test & exprs]
  `(let [v# ~test]
     (if (zero? v#)
       (do ~@exprs)
       v#)))

(defn- case-err [c & msgs]
  (throw
   (IllegalArgumentException.
    ^String (apply str "Invalid case test constant: " (pr-str c) ".\n" msgs))))

(defn- bool-vec? [x]
  (and (seqable? x) (every? boolean? x)))

(defn- bool-case-fn [xs clauses]
  (let [nxs (count xs)
        gx (gensym "x")]
    (eval
     `(fn [~gx]
        (case ~gx
          ~@(reduce
             (fn [cps [const then]]
               (cond
                 (bool-vec? const)
                 (if (not= (count const) nxs)
                   (case-err const "Length does not match that of " xs)
                   (list* const `'~then cps))

                 (and (seqable? const) (every? bool-vec? const))
                 (if-some [bad-const (some #(when-not (= (count %) nxs) %) const)]
                   (case-err bad-const "Length does not match that of " xs)
                   (list* const `'~then cps))

                 :else
                 (case-err const "Not a boolean sequence.")))
             () (partition 2 clauses))
          ~(if (odd? (count clauses))
             `'~(last clauses)
             ``(throw (ex-info ~(str "No matching clause: " ~gx) {}))))))))

(defmacro bool-casep [pred xs & clauses]
  (assert-args (vector? xs) "a vector of expressions")
  (let [case-fn (bool-case-fn xs clauses)
        gf (if (symbol? pred) pred (gensym "f"))
        emit (fn emit [xs bv]
               (if-first [x xs]
                 (let [next-xs (next xs)
                       bt (emit next-xs (conj bv true))
                       bf (emit next-xs (conj bv false))]
                   (if (= bt bf) bt `(if (~gf ~x) ~bt ~bf)))
                 (case-fn bv)))
        exprs (emit xs [])]
    (if (symbol? pred)
      exprs
      `(let [~gf ~pred] ~exprs))))

(defmacro bool-case [xs & clauses]
  (assert-args (vector? xs) "a vector of expressions")
  (let [case-fn (bool-case-fn xs clauses)
        emit (fn emit [xs bv]
               (if-first [x xs]
                 (let [next-xs (next xs)
                       bt (emit next-xs (conj bv true))
                       bf (emit next-xs (conj bv false))]
                   (if (= bt bf) bt `(if ~x ~bt ~bf)))
                 (case-fn bv)))]
    (emit xs [])))

;(defmacro cond-apply
;  [test f expr]
;
;
;  )

(defmacro toggle-class
  ([element class & rest]
   `(. ~element (classList.toggle ~class ~@rest))))

(defmacro sym-map
  [& syms]
  (let [[first-sym & rest-syms] syms]
    (assert-args
     (every? symbol? rest-syms) "symbol literals for all but its first argument")
    (if-some [init-map (cond
                         (map? first-sym) first-sym
                         (symbol? first-sym) {(keyword first-sym) first-sym}
                         :else nil)]
      (reduce (fn [m sym]
                (assoc m (keyword sym) sym))
              init-map
              rest-syms)
      `(assoc ~first-sym
         ~@(mapcat #(vector (keyword %) %) rest-syms)))))

(defmacro mp [& kvs]
  "Map macro supporting symbol literal shorthand.
  arg => key value | symbol
  Expands into a map literal with the given arguments.
  Arguments can be either key/value pairs, as in assoc, or symbol literals,
  which are interpreted as the pair (keyword symbol) symbol."
  (loop [kvs (seq kvs)
         m {}]
    (if-first [x kvs]
      (if (symbol? x)
        (let [k (keyword x)]
          (if (contains? m k)
            (throw (IllegalArgumentException. (str "Duplicate key: " (pr-str k))))
            (recur (next kvs) (assoc m k x))))
        (if-first [y (next kvs)]
          (if (contains? m x)
            (throw (IllegalArgumentException. (str "Duplicate key: " (pr-str x))))
            (recur (nnext kvs) (assoc m x y)))
          (throw (IllegalArgumentException. (str "No value given for key " (pr-str x))))))
      m)))

(def ^:private literal? (complement (some-fn symbol? list?)))

(defmacro condo->
  "Optimizing cond->.
  Equivalent to cond->, but branching for tests that are constant literals is precomputed during expansion."
  [expr & clauses]
  (assert (even? (count clauses)))
  (let [gs (gensym "s")]
    (loop [pairs (partition 2 clauses)
           current []
           binds []]
      (if-first [[test step] pairs]
        (if (literal? test)
          (recur (next pairs)
                 (if test (conj current step) current)
                 binds)
          (recur (next pairs)
                 []
                 (conj binds
                       gs `(if ~test
                             (-> ~gs ~@current ~step)
                             ~(if (seq current)
                                `(-> ~gs ~@current)
                                gs)))))
        (if (seq current)
          (if (seq binds)
            `(let [~gs ~expr, ~@binds]
               (-> ~gs ~@current))
            `(-> expr ~@current))
          (if (seq binds)
            (if (> (count binds) 2)
              `(let [~gs ~expr, ~@(drop-last 2 binds)]
                 ~(last binds))
              (let [[_if test [_-> _gs & then]] (last binds)]
                `(if ~test
                   (-> ~expr ~@then)
                   ~(if-some [bl (butlast then)]
                      `(-> ~expr ~@bl)
                      expr))))
            expr))))))

(defmacro condo->>
  "Optimizing cond->>.
  Equivalent to cond->>, but branching for tests that are constant literals is precomputed during expansion. "
  [expr & clauses]
  (assert (even? (count clauses)))
  (let [gs (gensym "s")]
    (loop [pairs (partition 2 clauses)
           current []
           binds []]
      (if-first [[test step] pairs]
        (if (literal? test)
          (recur (next pairs)
                 (if test (conj current step) current)
                 binds)
          (recur (next pairs)
                 []
                 (conj binds
                       gs `(if ~test
                             (->> ~gs ~@current ~step)
                             ~(if (seq current)
                                `(->> ~gs ~@current)
                                gs)))))
        (if (seq current)
          (if (seq binds)
            `(let [~gs ~expr, ~@binds]
               (->> ~gs ~@current))
            `(->> expr ~@current))
          (if (seq binds)
            (if (> (count binds) 2)
              `(let [~gs ~expr, ~@(drop-last 2 binds)]
                 ~(last binds))
              (let [[_if test [_->> _gs & then]] (last binds)]
                `(if ~test
                   (->> ~expr ~@then)
                   ~(if-some [bl (butlast then)]
                      `(->> ~expr ~@bl)
                      expr))))
            expr))))))


(defmacro no-resolve
  "Returns its argument identically. Intended as a utility for cursive IDE.
   Set macro to resolve as None, then wrap forms to suppress unresolved symbol
   warnings."
  [x] x)

(defmacro parser-spec [& lines]
  (str/join "\\n" lines))

(defmacro typo [props & children]
  (let [st (reduce (fn [v item]
                     (let [prev (nth v (dec (count v)))]
                       (if (string? item)
                         (if (string? prev)
                           (conj! (pop! v) (str prev (str/trim item) " "))
                           (conj! v (str " " (str/trim item) " ")))
                         (if (string? prev)
                           (conj! v item)
                           (conj! (conj! v " ") item)))))
                   (transient (if (string? props)
                                ['typography (str (str/trim props) " ")]
                                ['typography props]))
                   children)
        lst-idx (dec (count st))
        lst (nth st lst-idx)
        fst-idx (if (map? props) (min lst-idx 2) 1)
        fst (nth st fst-idx)]
    (persistent!
     (if (= fst-idx lst-idx)
       (if (string? fst) (assoc! st fst-idx (str/trim fst)) st)
       (cond-> st
         (and (string? fst)) (assoc! fst-idx (str/triml fst))
         (and (string? lst)) (assoc! lst-idx (str/trimr lst)))))))

(defmacro re-count [re s]
  `(count (re-seq ~re ~s)))

(defmacro go-reset! [atom port]
  `(async/go (reset! ~atom (async/<! ~port))))

(defn before-load [& args]
  (prn args))

(defmacro assoc-non-enumerable!
  ([obj k v]
   `(js/Object.defineProperty
      ~obj (j/lit ~k) (j/lit {:value ~v :enumerable false})))
  ([obj k v & kvs]
   (assert-args
    (even? (count kvs)) "an even number of key-value pairs")
   `(js/Object.defineProperties
      ~obj
      (j/lit ~(into {k {:value v :enumerable false}}
                    (comp (partition-all 2)
                          (map (fn [[k v]] [k {:value v :enumerable false}])))
                    kvs)))))
