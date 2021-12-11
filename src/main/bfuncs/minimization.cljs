(ns bfuncs.minimization
  (:refer-clojure :exclude [bytes])
  (:require
   [bfuncs.utils
    :as util
    :refer [echo map-reduce select count-when one? singleton? disjoint? reduce! map-vals
            minimal-by truth-vecs ->truth-vecs positions max-set-bit if-first fori
            let-case unless-zero assoc-some array-like? condf condo->>
            str-join big-int rrange byte-array? byte-array
            post-swap! get-meta mp echol applied]]
   [bfuncs.algebra :as alg
    :refer [|| && ! ||* &&* <+>
            bprod? bsum? bnot? bvar? sum-of-prods?
            prod-of-sums?
            ->SOP ->POS get-vars ->ANF]]
   [bfuncs.data :refer [operation replace-operands]]
   [bfuncs.parsing :refer [variables bexpr->bobj ->js-fn ->bytes]]
   [clojure.string :as str]
   ["/bfuncs/TruthTable" :default TruthTable]
   ["/bfuncs/jsUtils" :refer [functionBytes, bytesToBigInt]]
   [applied-science.js-interop :as j]
   [clojure.set :as set]))


(defn- var-vector [maps]
  (->> maps
       (mapcat keys)
       distinct
       sort
       vec))


(defn implicant? [x]
  (and (array-like? x)
       (every? (partial contains? #{nil true false}) x)))

(defn maps->implicants
  "Converts a collection of maps to a sequence of implicants.

  When called with one argument, returns the pair [vars implicants], where
  vars is a sorted vector of distinct keys from elements of maps, and
  implicants is the corresponding sequence of implicants. When supplied a
  vector of keys as its first argument, returns the sequence of implicants
  constructed from maps using those keys."
  ([maps]
   (let [v (var-vector maps)]
     [v (maps->implicants v maps)]))
  ([vars maps]
   (for [m maps] (mapv m vars))))

(def ^:private imp-lex
  {false 0
   true 1
   nil 2})

(defn truth-table [vars expr]
  (when (and (some? expr) (some? vars))
    (let [f (->js-fn vars expr)]
      (map #(conj % (f %))
           (truth-vecs (count vars))))))

(defn function-vector [vars expr]
  (when (and (some? expr) (some? vars))
    (let [f (->js-fn vars expr)]
      (mapv f (truth-vecs (count vars))))))

(defn minterms
  ([vars expr] (minterms vars expr false))
  ([vars expr meta?]
   (when (and (some? expr) (some? vars))
     (let [f (->js-fn vars expr)]
       (filter f (truth-vecs (count vars) meta?))))))

(defn maxterms
  ([vars expr] (maxterms vars expr false))
  ([vars expr meta?]
   (when (and (some? expr) (some? vars))
     (let [f (->js-fn vars expr)]
       (remove f (truth-vecs (count vars) meta?))))))

(defn compare-implicants [imp1 imp2]
  (let [n (count imp1)]
    (unless-zero (compare n (count imp2))
      (loop [i 0]
        (if (= i n)
          0
          (unless-zero (compare (get imp-lex (get imp1 i))
                                (get imp-lex (get imp2 i)))
            (recur (inc i))))))))

(defn- stringify-implicant [imp]
  (str/join (map {false "0" true "1" nil "-"} imp)))

(defn implicants->maps
  "Inverse of maps->implicants"
  [vars implicants]
  (for [imp implicants]
    (into {}
          (remove nil?)
          (map #(when (some? %2) [%1 %2])
               vars
               imp))))

(defn- minterm->int [minterm]
  (loop [term (seq minterm)
         i (dec (count term))
         x 0]
    (if term
      (recur (next term)
             (dec i)
             (if (first term)
               (bit-set x i)
               x))
      x)))

(defn- int->minterm
  [int arity]
  (mapv #(bit-test int %) (rrange arity)))

(defn- int->maxterm [int arity]
  (mapv #(not (bit-test int %)) (rrange arity)))

(defn- maxterm->int [maxterm]
  (loop [term (seq maxterm)
         i (dec (count term))
         x 0]
    (if term
      (recur (next term)
             (dec i)
             (if-not (first term)
               (bit-set x i)
               x))
      x)))


(defn- term->int [term]
  (loop [term (seq term)
         i (dec (count term))
         x 0]
    (if term
      (recur (next term)
             (dec i)
             (if (first term)
               (bit-set x i)
               x))
      x)))

;(defn- term->int
;  ([target-form]
;   (case target-form
;                   :SOP minterm->int
;                   :POS maxterm->int))
;  ([target-form term]
;   (case target-form
;     :SOP (minterm->int term)
;     :POS (maxterm->int term))))


(defn strict-term->int [term]
  (loop [term (seq term)
         i (dec (count term))
         x (and term 0)]
    (when x
      (if term
        (recur (next term)
               (dec i)
               (case (first term)
                 true (bit-set x i)
                 false x
                 nil))
        x))))

(defn full-terms
  [vars m]
  (let [imp (mapv m vars)
        nil-indexes (positions nil? imp)]
    (if nil-indexes
      (for [tv (truth-vecs (count nil-indexes))]
        (apply assoc imp (interleave nil-indexes tv)))
      (list imp))))

(defn full-terms-with-meta
  [vars m]
  (let [imp (mapv m vars)
        nil-indices (positions nil? imp)]
    (if nil-indices
      (for [tv (truth-vecs (count nil-indices))
            :let [term (apply assoc imp (interleave nil-indices tv))]]
        (with-meta
         term
         {:terms (-> term term->int sorted-set)}))
      (list (with-meta
             imp
             {:terms (-> imp term->int sorted-set)})))))

(defn covered-terms [implicant]
  (when implicant
    (or (get-meta implicant :terms)
        (if-some [nil-indices (positions nil? implicant)]
          (set (for [tv (truth-vecs (count nil-indices))]
                 (term->int
                  (apply assoc implicant (interleave nil-indices tv)))))
          (-> implicant term->int sorted-set)))))

(defn covers?
  "Takes two implicant vectors, and returns true if the first covers the second.
  imp1 is said to cover imp2 when both vectors have the same length, and
  (imp2 i) equals (imp1 i) wherever (imp1 i) is non-nil."
  [imp1 imp2]
  (let [n (count imp1)]
    (and (= n (count imp2))
         (loop [i 0]
           (or (>= i n)
               (and (or (nil? (get imp1 i))
                        (= (get imp1 i) (get imp2 i)))
                    (recur (inc i))))))))

(defn compatible?
  [imp1 imp2]
  "Returns true if imp1 and imp2 are compatible for merging;
  i.e. if imp1 and imp2 are the same length and differ in at most one position"
  (let [n (count imp1)]
    (and (= (count imp2) n)
         (loop [i 0, d true]
           (cond
             (>= i n) true
             (= (get imp1 i)
                (get imp2 i)) (recur (inc i) d)
             :else (and d (recur (inc i) false)))))))

(defn consistent?
  "Returns true if imp1 and imp2 are the same length and consistent;
  that is, if there exists no index for which the values of imp1 and imp2 are non-nil and distinct. "
  [imp1 imp2]
  (let [n (count imp1)]
    (and (= (count imp2) n)
         (loop [i 0]
           (cond
             (>= i n) true
             (not (when-some [x1 (get imp1 i)]
                    (when-some [x2 (get imp2 i)]
                      (not= x1 x2)))) (recur (inc i))
             :else false)))))

(defn combine-implicants
  "Combines implicants when they differ in at most one position, returns nil otherwise.

  A returned vector v satisfies both (covers? v imp1) and (covers? v imp2),
  i.e. it has the same values as the inputs, except for nil where where they
  differ."
  ([imp1 imp2] (combine-implicants imp1 imp2 false))
  ([imp1 imp2 meta?]
   (let [n (count imp1)]
     (when (= (count imp2) n)
       (loop [i 0, di nil]
         (cond
           (>= i n) (let [i1 (if (vector? imp1) imp1 (vec imp1))
                          res (if di (assoc i1 di nil) i1)]
                      (if meta?
                        (with-meta
                         res
                         {:terms (into
                                  (covered-terms imp1)
                                  (covered-terms imp2))})
                        res))
           (= (get imp1 i) (get imp2 i)) (recur (inc i) di)
           :else (when-not di (recur (inc i) i))))))))

#_(defn combine-implicants
    "Combines implicants when they differ in at most one position, returns nil otherwise.

    A returned vector v satisfies both (covers? v imp1) and (covers? v imp2),
    i.e. it has the same values as the inputs, except for nil where where they
    differ."
    ([imp1 imp2] (combine-implicants imp1 imp2 false))
    ([imp1 imp2 meta?]
     (let [n (count imp1)]
       (when (= (count imp2) n)
         (loop [i 0]
           (if (< i n)
             (if (= (get imp1 i) (get imp2 i))
               (recur (inc i))
               (when (= (subvec imp1 (inc i))
                        (subvec imp2 (inc i)))
                 (if meta?
                   (with-meta
                    (assoc imp1 i nil)
                    {:terms (into (:terms (meta imp1))
                                  (:terms (meta imp2)))})
                   (assoc imp1 i nil))))
             imp1))))))

(defn- combine-groups
  "Takes two collections of implicants (expected to be disjoint), and
  evaluates (combine-implicants i1 i2) for all i1 in group1 and i2 in group2.
  If the result is nil for all pairs of implicants, returns nil. Otherwise,
  returns [combined combinations], where combined is the set of inputs on which
  combine-implicants produced a non-nil result at least once, and combinations
  is the set of those results."
  ([group1 group2] (combine-groups group1 group2 false))
  ([group1 group2 meta?]
   (loop [combined (transient [])
          combs (transient #{})
          group1 group1]
     (if-let [imp1 (first group1)]
       (let [[cbnd cmbs]
             (loop [combined combined
                    combinations combs
                    added-imp1 false
                    group2 group2]
               (if-let [imp2 (first group2)]
                 (if-let [comb (combine-implicants imp1 imp2 meta?)]
                   (recur (conj! (if added-imp1
                                   combined
                                   (conj! combined imp1))
                                 imp2)
                          (conj! combinations comb)
                          true
                          (next group2))
                   (recur combined
                          combinations
                          added-imp1
                          (next group2)))
                 [combined combinations]))]
         (recur cbnd cmbs (next group1)))
       (when (pos? (count combs))
         [(persistent! combined) (persistent! combs)])))))

(defn- prime-implicants
  "Returns the set of prime implicants from a collection of terms, specified as vectors."
  ([implicants] (prime-implicants implicants false))
  ([implicants meta?]
   (loop [primes #{}
          implicants implicants]
     (if (seq implicants)
       (let [groups (group-by (partial count-when true?) implicants)
             [new-primes next-implicants]
             (loop [combined #{}
                    combs #{}
                    entries groups]
               (if-let [[n group] (first entries)]
                 (if-let [[cbnd cmbs] (combine-groups group (get groups (inc n)) meta?)]
                   (recur (into combined cbnd)
                          (into combs cmbs)
                          (next entries))
                   (recur combined
                          combs
                          (next entries)))
                 [(remove combined implicants) combs]))]
         (recur (into primes new-primes) next-implicants))
       primes))))

(defn- prime-implicant-steps
  "Returns the set of prime implicants from a collection of terms, specified as vectors."
  [implicants]
  (let [steps (atom (transient []))
        primes (atom (transient []))
        prime-i (atom 0)
        push-prime! (fn [p]
                      (let [np (vary-meta p assoc
                                 :prime-index @prime-i
                                 :step (count @steps))]
                        (swap! prime-i inc)
                        (swap! primes conj! np)
                        np))]
    (loop [implicants implicants]
      (if (seq implicants)
        (let [groups (group-by (partial count-when true?) implicants)]
          (recur
           (loop [combined #{}
                  combs #{}
                  entries groups]
             (if-let [[n group] (first entries)]
               (if-let [[cbnd cmbs] (combine-groups group (get groups (inc n)) true)]
                 (recur (into combined cbnd)
                        (into combs cmbs)
                        (next entries))
                 (recur combined
                        combs
                        (next entries)))
               (do (swap! steps
                          conj!
                          (map-vals
                           (fn [xs]
                             (mapv #(if (contains? combined %)
                                      %
                                      (push-prime! %))
                                   (sort compare-implicants xs)))
                           (sort groups)))
                   combs)))))
        [(persistent! @steps) (persistent! @primes)]))))

(defn covering-sets
  "Given a coll of covering implicants and a coll of implicants to be covered,
  returns the pair [cvec csets], where where cvec is a vector of coverers
  suitable for indexing, and csets is a sequence of sets, the nth of which
  contains the indices of elements in cvec which cover the nth item in covered.

  (covering-sets #{[0 1 nil nil] [nil 1 nil 0]}
                 [[0 1 1 1] [0 1 0 0] [1 1 0 0]])
  ; => [[[0 1 nil nil] [nil 1 nil 0]] (#{0} #{0 1} #{1})]  "
  [coverers covered]
  (let [prime-vec (vec coverers)
        idx-set (set (range (count prime-vec)))]
    [prime-vec
     (for [t covered]
       (select #(covers? (get prime-vec %) t) idx-set))]))

(defn- essential-elements
  "Takes a collection of collections, and returns the set of items that appear
  inside singletons."
  [colls]
  (loop [es (transient #{})
         colls colls]
    (if-first [coll colls]
      (recur (if (singleton? coll)
               (conj! es (first coll))
               es)
             (next colls))
      (persistent! es))))

(defn- essential-elements-indexed
  "Takes a collection of collections, and returns a map of items that appear within singletons
  to the indices at which they appear."
  [colls]
  (loop [i 0
         es (transient {})
         colls colls]
    (if-first [coll colls]
      (recur (inc i)
             (if (singleton? coll)
               (let [e (first coll)]
                 (assoc! es
                   e (conj (get es e []) i)))
               es)
             (next colls))
      (persistent! es))))

(defn separate-essentials
  "Given a collection of collections, returns a vector [ess rem], where ess is
  the set of essential elements of colls, and rem is the set of non-empty
  collections in colls disjoint from ess."
  ([colls]
   (let [essentials (essential-elements colls)]
     [essentials
      (into #{}
            (filter #(and (seq %) (disjoint? essentials %)))
            colls)])))

(defn separate-essentials-indexed
  "Given a collection of collections, returns a vector [ess rem], where ess is
  the set of essential elements of colls, and rem is the set of non-empty
  collections in colls disjoint from ess."
  ([colls]
   (let [essentials (essential-elements-indexed colls)
         ess-keys (set (keys essentials))]
     [essentials
      (into {}
            (map-indexed
             #(when (and (seq %2) (disjoint? ess-keys %2))
                [%1 %2]))
            colls)])))

(defn- join-bprod
  [coll bexpr]
  (cond
    (nil? bexpr) coll
    (bprod? bexpr) (into coll bexpr)
    :else (conj coll bexpr)))

(defn minimal-covers
  [primes implicants]
  (let [[primes-vec covers] (covering-sets primes implicants)
        [ess rem] (separate-essentials covers)]
    (for [cover (if (seq rem)
                  (let [dnf (->SOP (apply &&* (map (applied ||*) rem)))]
                    (if (bsum? dnf)
                      (let [counts (mapv (partial count-when some?) primes-vec)
                            score #(if (bprod? %) (map-reduce counts + %) (counts %))]
                        (for [term (first (minimal-by score dnf))]
                          (join-bprod ess term)))
                      [(join-bprod ess dnf)]))
                  [ess])]
      (map primes-vec cover))))

(defn bobj->implicants
  [bobj]
  (condo->> bobj
    (not (sum-of-prods? bobj)) ->SOP
    true (map (fn go [x]
                (cond
                  (bvar? x) {x true}
                  (and (bnot? x)
                       (bvar? (first x))) {(first x) false}
                  :else (into {} (map go) x))))
    true maps->implicants))

(defn imp->&& [vars imp]
  (loop [vars vars, imp imp, res true]
    (if (or (empty? vars)
            (empty? imp))
      res
      (recur (next vars)
             (next imp)
             (if (nil? (first imp))
               res
               (&& res
                   (cond-> (first vars)
                     (not (first imp)) !)))))))

(defn imp->|| [vars imp]
  (loop [vars vars, imp imp, res false]
    (if (or (empty? vars)
            (empty? imp))
      res
      (recur (next vars)
             (next imp)
             (if (nil? (first imp))
               res
               (|| res
                   (cond-> (first vars)
                     (first imp) !)))))))

(defn imp->bobj-fn [target-form vars]
  (let [inner (case target-form
                :SOP &&
                :POS ||)
        conv (case target-form
               :SOP #(if %1 %2 (! %2))
               :POS #(if %1 (! %2) %2))]
    (fn [imp]
      (loop [vars vars, imp imp, res (inner)]
        (if (or (empty? vars)
                (empty? imp))
          res
          (recur (next vars)
                 (next imp)
                 (if (nil? (first imp))
                   res
                   (inner res (conv (first imp) (first vars))))))))))

(defn imp->bobj [target-form vars imp]
  (let [inner (case target-form
                :SOP &&
                :POS ||)
        conv (case target-form
               :SOP #(if %1 %2 (! %2))
               :POS #(if %1 (! %2) %2))]
    (loop [vars vars, imp imp, res (inner)]
      (if (or (empty? vars)
              (empty? imp))
        res
        (recur (next vars)
               (next imp)
               (if (nil? (first imp))
                 res
                 (inner res (conv (first imp) (first vars)))))))))

(defn imps->bobj-fn [target-form vars]
  (let [f (imp->bobj-fn target-form vars)
        outer (case target-form :SOP || :POS &&)]
    (partial map-reduce f outer)))

(defn imps->bobj [target-form vars imps]
  (map-reduce (imp->bobj-fn target-form vars)
              (case target-form :SOP || :POS &&)
              imps))

(defn imps->bobjs [target-form vars imps]
  (mapv (imp->bobj-fn target-form vars) imps))

(defn int->bobj
  [vars g int]
  (loop [vars (seq vars)
         i (dec (count vars))
         x (g)]
    (if vars
      (recur (next vars)
             (dec i)
             (g x
                (if (bit-test int i)
                  (first vars)
                  (! (first vars)))))
      x)))

(defn ints->bobj
  [vars outer inner ints]
  (map-reduce (partial int->bobj vars inner) outer ints))


;(defn term->int
;  [minterm]
;  (reduce bit-set
;          0
;          (positions true? (rseq minterm))))

(defn int->imp
  ([x]
   (int->imp x nil))
  ([x n]
   (mapv (partial bit-test x) (range (dec (or n (max-set-bit x))) -1 -1))))

(defn maps->full-terms
  "With one argument, returns [vars terms], where vars is a vector of all
  distinct keys of items in maps, and minterms is a sequence of full terms with
  respect to those keys. If a collection of keys is is provided, returns the
  sequence of terms with respect to those keys."
  ([vars maps]
   (distinct (mapcat (partial full-terms vars) maps)))
  ([vars maps meta?]
   (distinct
    (mapcat (partial (if meta?
                       full-terms-with-meta
                       full-terms)
                     vars)
            maps))))

(defn- dnf->maps
  "Converts a bobj in dnf to a sequence of maps, each map representing a
  product. Assumes without checking that input is symbolic (i.e. not boolean
  primitive) bobj in dnf."
  [bobj]
  (letfn [(go [x]
            (case (operation x)
              nil {x true}
              :NOT {(first x) false}
              (into {} (map go) x)))]
    (if (bsum? bobj)
      (map go bobj)
      (list (go bobj)))))

(defn- cnf->maps
  [bobj]
  (letfn [(go [x]
            (case (operation x)
              nil {x true}
              :NOT {(first x) false}
              (into {} (map go) x)))]
    (if (bsum? bobj)
      (map go bobj)
      (list (go bobj)))))

(defn- normal-maps
  [op bobj]
  (let [go (case op
             :OR (fn go [x]
                   (case (operation x)
                     nil {x true}
                     :NOT {(first x) false}
                     (into {} (map go) x)))
             :AND (fn go [x]
                    (case (operation x)
                      nil {x false}
                      :NOT {(first x) true}
                      (into {} (map go) x))))]
    (if (= op (operation bobj))
      (map go bobj)
      (list (go bobj)))))

#_(defn minterms
    ([vars bobj] (minterms vars bobj false))
    ([vars bobj meta?]
     (let [bobj (->SOP bobj)]
       (if (boolean? bobj)
         bobj
         (maps->full-terms vars (normal-maps :OR bobj) meta?)))))

#_(defn maxterms
    ([vars bobj] (maxterms vars bobj false))
    ([vars bobj meta?]
     (let [bobj (->POS bobj)]
       (if (boolean? bobj)
         bobj
         (maps->full-terms vars (normal-maps :AND bobj) meta?)))))

(defn quine-mccluskey
  ([terms] (quine-mccluskey terms nil))
  ([terms unspecified-terms]
   (minimal-covers
    (prime-implicants
     (concat terms
             unspecified-terms))
    terms)))

(defn minimal-dnf
  ([bobj] (minimal-dnf (variables bobj) bobj))
  ([vars bobj]
   (if (empty? vars)
     bobj
     (->> bobj
          (minterms vars)
          quine-mccluskey
          first
          (imps->bobj :SOP vars)
          ;(implicants->bobj vars | &)
          ))))

(defn minimal-cnf
  ([bobj] (minimal-cnf (variables bobj) bobj))
  ([vars bobj]
   (if (empty? vars)
     bobj
     (->> bobj
          (maxterms vars)
          quine-mccluskey
          first
          (imps->bobj :POS vars)))))

(defn- minimal-things
  [target-form vars bobj]
  (if (empty? vars)
    (list bobj)
    (let [terms ((case target-form
                   :POS maxterms
                   :SOP minterms)
                 vars bobj)]
      (if (seqable? terms)
        (map (imps->bobj-fn target-form vars)
             (quine-mccluskey terms))
        (list terms)))))

(defn minimal-POSs
  ([bobj] (minimal-things :POS (variables bobj) bobj))
  ([vars bobj] (minimal-things :POS vars bobj)))

(defn minimal-SOPs
  ([bobj] (minimal-things :SOP (variables bobj) bobj))
  ([vars bobj] (minimal-things :SOP vars bobj)))

(defn minimal-forms
  [vars bobj]
  {"Sum of Products" (minimal-SOPs vars bobj)
   "Product of Sums" (minimal-POSs vars bobj)
   "Algebraic Normal Form" [(->ANF bobj)]})

(defn index-bobj [vars bobj]
  (replace-operands (into {}
                          (map-indexed (fn [k v] [v k]))
                          vars)
                    bobj))

(defn quine-mccluskey-meta
  ([terms] (quine-mccluskey-meta terms nil))
  ([terms unspecified-terms]
   (when (and (seqable? terms)
              (seqable? unspecified-terms))
     (let [[steps primes] (prime-implicant-steps (concat terms unspecified-terms))
           terms (sort compare-implicants terms)
           [primes covers] (covering-sets primes terms)
           [essentials remaining] (separate-essentials-indexed covers)]
       (mp steps primes essentials remaining covers)))))

(defn minimization-steps-from-expr [target-form vars expr]
  (let [[term-type term-word prime-word] (case target-form
                                           :SOP [:minterms "minterm" "implicant"]
                                           :POS [:maxterms "maxterm" "implicate"])
        bobj (bexpr->bobj expr)
        truth-vecs ((if (= term-type :minterms) minterms maxterms) vars bobj true)]
    (assoc (quine-mccluskey-meta truth-vecs)
      :target-form target-form
      :term-word term-word
      :prime-word prime-word
      :expr expr
      :indexed-expr (index-bobj vars bobj)
      :vars vars
      :input-type :expression
      :term-type term-type
      :terms (mapv term->int truth-vecs)
      :term-length (count (first truth-vecs))
      )
    )
  )

(defn minimization-steps-from-terms
  [target-form vars {input-terms :terms
                     :keys [unspecified type term-length]}]
  (let [[term-type term-word prime-word] (case target-form
                                           :SOP [:minterms "minterm" "implicant"]
                                           :POS [:maxterms "maxterm" "implicate"])
        terms (if (= term-type type)
                input-terms
                (let [term-set (into (set (set input-terms)) unspecified)]
                  (into [] (remove term-set) (range (bit-set 0 term-length)))))]
    (assoc (quine-mccluskey-meta (->truth-vecs terms term-length true)
                                 (->truth-vecs unspecified term-length true))
      :target-form target-form
      :term-word term-word
      :prime-word prime-word
      :vars vars
      :unspecified unspecified
      :terms terms
      :input-terms input-terms
      :input-type type
      :term-type term-type
      :term-length term-length
      )
    )
  )

(defn minimization-steps
  ([target-form vars expr-or-terms]
   ((if (map? expr-or-terms) minimization-steps-from-terms minimization-steps-from-expr)
    target-form
    vars
    expr-or-terms)))

(defn- decode-selection
  ([selection] (decode-selection selection nil))
  ([selection term-length]
   (condf selection
     nil? nil
     int? [0
           (bit-count selection)
           (int->imp selection term-length)
           (sorted-set selection)]
     implicant? [(or (get-meta selection :step)
                     (count-when nil? selection))
                 (count-when true? selection)
                 selection
                 (covered-terms selection)]
     (throw (ex-info (str "Bad selection: " selection)
                     {:selection selection
                      :term-length term-length})))))

(defn- echo-bin
  ([n]
   (-> n (j/call :toString 2) (println))
   n)
  ([label n]
   (println (str/join (take 10 (concat (str label) (repeat " ")))) " " (j/call n :toString 2))
   n)
  ([label l n]
   (println (str/join (take 10 (concat (str label) (repeat " ")))) " " (j/call (j/call n :toString 2) :padStart l "0"))
   n))

(def _1n (big-int 1))

(defn- _2n** [n]
  (bit-shift-left _1n n))

(defn- _2n* [n]
  (bit-shift-left n _1n))

(defn- z-coeffs [nvars big-z]
  (reduce (fn [x step]
            (let [bl (_2n** (big-int step))] ; block length
              (bit-xor x
                       (bit-shift-right
                        (bit-and x
                                 ; bit mask of length 2^nvars w/ alternating blocks of length b
                                 (loop [i (- nvars step 1)
                                        shift (_2n* bl)
                                        ; b 1s followed by b 0s
                                        x (bit-shift-left (- (_2n** bl) _1n) bl)]
                                   (if (pos? i)
                                     (recur (dec i)
                                            (_2n* shift)
                                            (bit-or x (bit-shift-left x shift)))
                                     x)))
                        bl))))
          big-z
          (range nvars)))

(defn- z-poly [vars coeffs]
  (let [nvars (count vars)]
    (apply <+>
           (fori [i :index
                  coeff (-> coeffs
                            (j/call :toString 2)
                            (j/call :padStart (bit-shift-left 1 nvars) "0"))
                  :when (= coeff "1")]
             (reduce (fn [prod j]
                       (if (bit-test i j)
                         (&& prod (nth vars (- nvars j 1)))
                         prod))
                     true (rrange nvars))))))

(defn zhegalkin-polynomial [vars digit-string]
  (some->> digit-string
           (str "0b")
           (big-int)
           (z-coeffs (count vars))
           (z-poly vars)))

(defn int->truth-vec [x n meta?]
  (mapv (if meta?
          #(with-meta (bit-test x %) #{x})
          (partial bit-test x))
        (range (dec n) -1 -1)))

(defn floor-log2 [n] (- 31 (js/Math.clz32 n)))

(def tbytes (->bytes [:a :b :c :d] (&& (|| (! :a) :b :c)
                                       (|| :a :b :c :d)
                                       (|| (! :b) (! :d)))))

(defn bytes->terms
  "Returns the pair [terms unspecified], where terms and unspecified are both collections of truth vecs"
  ([type bytes] (bytes->terms type bytes false))
  ([type bytes meta?]
   {:pre [(#{:min :max} type)
          (util/byte-array? bytes)]}
   (let [nvals (j/get bytes :length)
         arity (floor-log2 nvals)
         target (case type :min 1 :max 0)
         target' (case target 1 0 0 1)]
     (loop [i 0
            terms (transient [])
            unspecs (transient [])]
       (if (< i nvals)
         (condp = (aget bytes i)
           target (recur (inc i)
                         (conj! terms
                                (int->truth-vec i arity meta?))
                         unspecs)
           target' (recur (inc i) terms unspecs)
           (recur (inc i) terms
                  (conj! unspecs
                         (int->truth-vec i arity meta?))))
         [(persistent! terms) (persistent! unspecs)])))))

(defn min-sops [vars bytes]
  (->> bytes
       (bytes->terms :min)
       (apply quine-mccluskey)
       (map (partial map-reduce (partial imp->&& vars) ||))))

(defn min-poss [vars bytes]
  (->> bytes
       (bytes->terms :max)
       (apply quine-mccluskey)
       (map (partial map-reduce (partial imp->|| vars) &&))))