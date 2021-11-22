(ns bfuncs.algebra
  (:require [bfuncs.utils
             :refer [map-reduce singleton? echo let-case bool-casep log reduce-from if-first echol]]
            [clojure.set :as set]
            [bfuncs.data :refer [bool-not bool-set bool-vec with-operation IBoolOp
                                 operation replace-operands]]
            [clojure.string :as str]))

(defn- first-if-singleton [x] (if (singleton? x) (first x) x))
;(declare | & b' b<+> b<*> sb* sb+)
(declare operators simplifying-operators)

(defn echo-mma [x]
  (println (prn-str-with-opts [x] {:mathematica true}))
  x)

(defn operator
  ([op] (get operators op))
  ([op simp] (get (if simp simplifying-operators operators) op)))

(defn- get-operators
  [simp & ops]
  (mapv (if simp simplifying-operators operators) ops))

(defn operation? [op x]
  (if (set? op)
    (contains? op x)
    (= op (operation x))))

(defn bsum? "Returns true if (operation x) is :OR" [x] (= :OR (operation x)))

(defn bprod? "Returns true if (operation x) is :AND" [x] (= :AND (operation x)))

(defn bxsum? "Returns true if (operation x) is :XOR" [x] (= :XOR (operation x)))

(defn bxprod? "Returns true if (operation x) is :XNOR" [x] (= :XNOR (operation x)))

(defn bxop? "Returns true if (operation x) is :XOR or :XNOR" [x] (contains? #{:XOR :XNOR} (operation x)))

(defn bnot? "Returns true if (operation x) is :NOT" [x] (= :NOT (operation x)))

(defn bvar? "Returns true if (operation x) is nil" [x] (nil? (operation x)))

(defn- _annihilator
  [op]
  (case op
    :OR true
    :AND false))

(defn- _identity
  [op]
  (case op
    :OR false
    :AND true))

(defn- valid-form?
  "Returns true if the given form is valid w.r.t. the specification spec.

  The form x is considered valid if either
  1. (operation x) is nil, or
  2. (spec (operation x)) is non-nil, and for all y in x,
     (spec (operation y)) > (spec (operation x)), and y is valid.

  When a comparison function cmp and initial value init are supplied, the second
  condition is generalized
  2. (spec (operation x)) is non-nil, and for all y in x, y is valid, and
     (cmp (spec (operation y)) (spec (operation x))) is logical true.
  With (cmp init (spec (operation form))) being the top-level comparison.

  Ex:
  (valid-form {:OR 1, :AND 2, :NOT 3} x)
  ;; => true if x is a sum of products
  (valid-form {:OR 2, :AND 1, :NOT 3} x)
  ;; => true if x is a product of sums
  (valid-form #{:OR :NOT} and true x)
  ;; => true if x is an expression of only :OR and :NOT."
  ([spec form] (valid-form? spec > ##-Inf form))
  ([spec cmp init form]
   ((fn go [parent-spec child]
      (if-let [op (operation child)]
        (if-let [child-spec (spec op)]
          (and (cmp child-spec parent-spec)
               (every? (partial go child-spec) child))
          false)
        true))
    init form)))

(defn sum-of-prods?
  "Returns true if x is a bobj representing a sum of products."
  [x]
  (valid-form? {:OR 1, :AND 2, :NOT 3} x))

(defn prod-of-sums?
  "Returns true if x is a bobj representing a product of sums."
  [x]
  (valid-form? {:AND 1, :OR 2, :NOT 3} x))

(defn anf?
  "Returns true if x is a bobj in algebraic normal form."
  [x]
  (valid-form? {:XOR 1, :AND 2} x))

(defn get-vars
  [bobj]
  (if (bvar? bobj)
    bobj
    (mapcat get-vars bobj)))

(defn get-vars-tr
  [bobj]
  (cond
    (bvar? bobj) [bobj true]
    (and (bnot? bobj)
         (bvar? (first bobj))) [(first bobj) false]
    :else (into {} (map get-vars-tr) bobj)))

(defn bfactor?
  "Returns true if x is a factor of y with respect to the operation op
  (default :AND)."
  ([x y] (bfactor? :AND x y))
  ([op x y]
   (bool-casep #(= op (operation %)) [x y]
     [true true] (set/subset? x y)
     [true false] false
     [false true] (contains? y x)
     [false false] (= x y))))

(defn ! [x]
  "Gives a data structure representing the boolean negation of the input.
  Automatically reduces according to the identities
    true' = false,
    false' = true,
    A'' = A."
  (cond
    (boolean? x) (not x)
    (bnot? x) (first x)
    :else (bool-not x)))

(defn- dual
  [op]
  (case op
    :TRUE :FALSE
    :FALSE :TRUE
    :NOT :NOT
    :ID :ID
    :OR :AND,
    :NOR :NAND,
    :AND :OR,
    :NAND :NOR
    :XOR :XNOR
    :XNOR :XOR
    :IMP :NCON
    :NIMP :CON
    :CON :NIMP
    :NCON :IMP))

(defn- negation
  [op]
  (case op
    :TRUE :FALSE
    :FALSE :TRUE
    :NOT :ID
    :ID :NOT
    :OR :NOR
    :NOR :OR
    :AND :NAND
    :NAND :AND
    :XOR :XNOR
    :XNOR :XOR
    :IMP :NIMP
    :NIMP :IMP
    :CON :NCON
    :NCON :CON
    :EQ :NEQ
    ))

(defn- cancellation-fn
  [cancel?]
  (fn [x y]
    (or (cancel? x y)
        (= x (! y)))))

(defn- xconj [xcoll y id]
  (if (contains? xcoll y)
    (let [nxc (disj xcoll y)]
      (case (count nxc)
        0 id
        1 (if id
            (! (first nxc))
            (first nxc))
        nxc))
    (conj xcoll y)))

(defn- apply-reduction [rf x y more]
  (let [result (reduce-from rf (rf x y) more)]
    (if-some [[_ op] (some->> result operation name (re-matches #"(.*)'"))]
      (with-operation (keyword op) result)
      result)))

;; OR
(defn ||
  ([] false)
  ([x] x)
  ([x y] (cond
           (or (true? x) (true? y)) true
           (false? x) y
           (false? y) x
           :else (bool-casep #(= :OR (operation %)) [x y]
                   [true true] (reduce || x y)
                   [true false] (cond
                                  (contains? x y) x
                                  (contains? x (! y)) true
                                  :else (conj x y))
                   [false true] (cond
                                  (contains? y x) y
                                  (contains? y (! x)) true
                                  :else (conj y x))
                   [false false] (cond
                                   (= x y) x
                                   (= x (! y)) true
                                   :else (bool-set :OR x y)))))
  ([x y & more] (reduce || (|| x y) more)))

;; AND
(defn &&
  ([] true)
  ([x] x)
  ([x y]
   (cond
     (or (false? x) (false? y)) false
     (true? x) y
     (true? y) x
     :else (bool-casep (partial operation? :AND) [x y]
             [true true] (reduce && x y)
             [true false] (cond
                            (contains? x y) x
                            (contains? x (! y)) false
                            :else (conj x y))
             [false true] (cond
                            (contains? y x) y
                            (contains? y (! x)) false
                            :else (conj y x))
             [false false] (cond
                             (= x y) x
                             (= x (! y)) false
                             :else (bool-set :AND x y)))))
  ([x y & more] (reduce && (&& x y) more)))

;; XOR
(defn <+>
  ([] false)
  ([x] x)
  ([x y] (cond
           (false? x) y
           (false? y) x
           :else (bool-casep bxsum? [x y]
                   [true true] (reduce <+> x y)
                   [true false] (xconj x y false)
                   [false true] (xconj y x false)
                   [false false] (if (= x y) false (bool-set :XOR x y)))))
  ([x y & more] (reduce <+> (<+> x y) more)))

;; NOR
(defn- reducing-!|| [x y]
  (cond
    (or (true? x) (true? y)) (reduced false)
    (false? x) (! y)
    (false? y) (! x)
    :else (if (operation? :NOR' x)
            (cond
              (contains? x y) x
              (contains? x (! y)) (reduced false)
              :else (conj x y))
            (cond
              (= x y) (! x)
              (= x (! y)) (reduced false)
              :else (bool-set :NOR' x y)))))
(defn !||
  ([] true)
  ([x] (! x))
  ([x y] (cond
           (or (true? x) (true? y)) false
           (false? x) (! y)
           (false? y) (! x)
           (= x y) (! x)
           (= x (! y)) false
           :else (bool-set :NOR x y)))
  ([x y & more] (apply-reduction reducing-!|| x y more)))


;; NAND
(defn- reducing-!&& [x y]
  (cond
    (or (false? x) (false? y)) (reduced true)
    (true? x) (! y)
    (true? y) (! x)
    :else (if (operation? :NAND' x)
            (cond
              (contains? x y) x
              (contains? x (! y)) (reduced true)
              :else (conj x y))
            (cond
              (= x y) (! x)
              (= x (! y)) (reduced true)
              :else (bool-set :NAND' x y)))))
(defn !&&
  ([] false)
  ([x] (! x))
  ([x y] (cond
           (or (false? x) (false? y)) true
           (true? x) (! y)
           (true? y) (! x)
           (= x y) (! x)
           (= x (! y)) true
           :else (bool-set :NAND x y)))
  ([x y & more] (apply-reduction reducing-!&& x y more)))


;; XNOR
(defn <*>
  ([] true)
  ([x] (! x))
  ([x y] (cond
           (false? x) (! y)
           (false? y) (! x)
           :else (bool-casep bxprod? [x y]
                   [true true] (reduce <*> x y)
                   [true false] (xconj x y true)
                   [false true] (xconj y x true)
                   [false false] (if (= x y) true (bool-set :XNOR x y)))))
  ([x y & more] (reduce <*> (<*> x y) more)))

;;; Relational operators

;; EQ
(defn- reducing-<=> [x y]
  (cond
    (true? x) y
    (true? y) x
    (false? x) (! y)
    (false? y) (! x)
    :else (if (operation? :EQ' x)
            (cond
              (contains? x y) x
              (contains? x (! y)) (reduced false)
              :else (conj x y))
            (cond
              (= x y) (reduced true)
              (= x (! y)) (reduced false)
              :else (bool-set :EQ' x y)))))

(defn <=>
  ([] true)
  ([x] true)
  ([x y] (cond
           (true? x) y
           (true? y) x
           (false? x) (! y)
           (false? y) (! x)
           (= x y) true
           (= x (! y)) false
           :else (bool-set :EQ x y)))
  ([x y & more] (apply-reduction reducing-<=> x y more)))

;; NEQ
(defn- reducing-!<=> [x y]
  (cond
    (true? x) (! y)
    (true? y) (! x)
    (false? x) y
    (false? y) x
    :else (if (operation? :NEQ' x)
            (cond
              (contains? x y) x
              (contains? x (! y)) (reduced true)
              :else (conj x y))
            (cond
              (= x y) (reduced false)
              (= x (! y)) (reduced true)
              :else (bool-set :NEQ' x y)))))

(defn !<=>
  ([] false)
  ([x] false)
  ([x y] (cond
           (true? x) (! y)
           (true? y) (! x)
           (false? x) y
           (false? y) x
           (= x y) false
           (= x (! y)) true
           :else (bool-set :NEQ x y)))
  ([x y & more] (apply-reduction reducing-!<=> x y more)))

;; IMP
(defn ==> [x y]
  (cond
    (true? x) y
    (false? x) true
    (true? y) true
    (false? y) (! x)
    (= x y) true
    (= x (! y)) y
    :else (bool-vec :IMP x y)))

;; NIMP
(defn !==> [x y]
  (cond
    (true? x) (! y)
    (false? x) false
    (true? y) false
    (false? y) x
    (= x y) false
    (= x (! y)) x
    :else (bool-vec :NIMP x y)))

;; CON
(defn <== [x y]
  (cond
    (true? x) true
    (false? x) (! y)
    (true? y) x
    (false? y) true
    (= x y) true
    (= x (! y)) x
    :else (bool-vec :CON x y)))

;; NCON
(defn !<== [x y]
  (cond
    (true? x) false
    (false? x) y
    (true? y) (! x)
    (false? y) false
    (= x y) false
    (= x (! y)) y
    :else (bool-vec :NCON x y)))


;;; Simplifying operations

(def ^:dynamic *cancellation-rules* {})

(defn- _sbconj
  ([xcoll y]
   (let [op (operation xcoll)
         op' (dual op)]
     (cond
       (if-some [cancel? (get *cancellation-rules* op)]
         (some (some-fn (partial cancel? y)
                        (partial = (! y)))
               xcoll)
         (contains? xcoll (! y))) (_annihilator op)
       (some #(bfactor? op' % y) xcoll) xcoll
       (some #(bfactor? op' y %) xcoll) (first-if-singleton
                                         (into (bool-set op y)
                                               (remove #(bfactor? op' y %))
                                               xcoll))
       :else (conj xcoll y)))))

(defn- _sbnew
  ([op x y]
   (let [op' (dual op)]
     (cond
       (or (= x (! y))
           (when-some [cancel? (get *cancellation-rules* op)]
             (cancel? x y))) (_annihilator op)
       (bfactor? op' x y) x
       (bfactor? op' y x) y
       :else (bool-set op x y)))))

(defn- _soperate
  ([op x y]
   (bool-casep (partial operation? op) [x y]
     [true true] (reduce (simplifying-operators op) x y)
     [true false] (_sbconj x y)
     [false true] (_sbconj y x)
     [false false] (_sbnew op x y))))

(defn ||*
  "Simplifying boolean sum.

  Gives a structure logically equivalent to the disjunction of the input.
  Nested sums, duplicate terms, and boolean primitives are handled as with |.
  In addition, the following transformations are made to boolean structures:
    A + A' -> true,
    A + AB -> A
  Returns false when called with no arguments. "
  ([] false)
  ([x] x)
  ([x y]
   (cond
     (or (true? x) (true? y)) true
     (false? x) y
     (false? y) x
     :else (_soperate :OR x y)))
  ([x y & more]
   (reduce ||* (||* x y) more)))

(defn &&*
  "Simplifying boolean product.

  Gives a structure logically equivalent to the conjunction of the input terms.
  Nested sums, duplicate terms, and boolean primitives are handled as with &.
  In addition, the following transformations are made to boolean structures:
    A A' -> false,
    A (A + B) -> A
  With no arguments, returns true."
  ([] true)
  ([x] x)
  ([x y]
   (cond
     (or (false? x) (false? y)) false
     (true? x) y
     (true? y) x
     :else (_soperate :AND x y)))
  ([x y & more]
   (reduce &&* (&&* x y) more)))

(defn simplify
  "Simplifies terms in the first level of the input."
  [bobj]
  (let-case [op (operation bobj)]
    (:OR :AND) (apply (simplifying-operators op) bobj)
    bobj))

(defn- convert-xop
  [target-op simp xop]
  {:pre [(bxop? xop)
         (> (count xop) 1)
         (#{:AND :OR} target-op)]}
  (let [[f g] (get-operators simp target-op (dual target-op))
        ; XOR -> SoP => terms are products w/ odd # true (non-negated) exprs
        ;   even n, odd # true => odd # false => negate even i
        ;   odd n, odd # true => even # false => negate odd i
        ; XOR -> PoS => terms are sums w/ even # false (negated) exprs
        ;   even # false => negate odd i
        ; XNOR -> SoP => terms are products w/ odd # false exprs
        ;   odd # false => negate even i
        ; XNOR -> PoS => terms are sums w/ odd # true exprs
        ;   even n, odd # true => odd # false => negate even i
        ;   odd n, odd # true => even # false => negate odd i
        negate? (case [(operation xop) target-op]
                  ([:XOR :OR] [:XNOR :AND]) (if (even? (count xop)) even? odd?)
                  [:XOR :AND] odd?
                  [:XNOR :OR] even?)]
    (apply f
           (loop [xs (rest xop)
                  v [(first xop) (! (first xop))]]
             (let [x (first xs), x' (! x)]
               (if (singleton? xs)
                 ; The # of negated terms in an item of v has the same parity as that item's index in v.
                 ; When adding the last element, negating at even indices gives all items an
                 ; odd # negated terms, and vice versa.
                 (map-indexed (fn [i col]
                                (g col (if (negate? i) x' x)))
                              v)
                 (recur (next xs)
                        (into (mapv #(g % x) v)
                              (map #(g % x'))
                              (rseq v)))))))))

(defn- expand-eq [input-op target-op simp bobj]
  (let [|| (operator :OR simp)
        && (operator :AND simp)]
    (case input-op
      :EQ (case target-op
            :OR (|| (reduce && bobj) (map-reduce ! && bobj))
            :AND (loop [x (first bobj)
                        tail (next bobj)
                        result true]
                   (if-first [y tail]
                     (recur y (next tail)
                            (&& result
                                (|| x (! y))
                                (|| (! x) y)))
                     result)))
      :NEQ (case target-op
             :AND (&& (reduce || bobj) (map-reduce ! || bobj))
             :OR (loop [x (first bobj)
                        tail (next bobj)
                        result false]
                   (if-first [y tail]
                     (recur y (next tail)
                            (|| result
                                (&& x (! y))
                                (&& (! x) y)))
                     result))))))

(defn- expand-not
  [target-op simp bobj]
  (if (bnot? bobj)
    (let [x (first bobj)]
      (let-case [op (operation x)]
        :NOT (first x)
        (:AND :OR) (map-reduce ! (operator (dual op) simp) x)
        (:NAND :NOR) (apply (operator (negation op) simp) x)
        (:EQ :NEQ) (expand-eq (negation op) target-op simp x)
        nil bobj
        (apply (operator (negation op) simp) x)))
    bobj))

(defn- normalize [target-op simp bobj]
  (let-case [op (operation bobj)]
    :NOT (let [expanded (expand-not target-op simp bobj)]
           (if (operation? :NOT expanded)
             expanded
             (recur target-op simp (expand-not target-op simp bobj))))
    (:OR :AND nil) bobj
    (:XOR :XNOR) (convert-xop target-op simp bobj)
    (:NOR :NAND) (map-reduce ! (operator (dual (negation op)) simp) bobj)
    (:EQ :NEQ) (expand-eq op target-op simp bobj)
    :IMP (|| (! (first bobj)) (second bobj))
    :NIMP (&& (first bobj) (! (second bobj)))
    :CON (|| (first bobj) (! (second bobj)))
    :NCON (&& (! (first bobj)) (second bobj))))

(defn two-level-normalize [target-op simp bobj]
  (let [n1 (normalize target-op simp bobj)]
    (if-let [op (operation n1)]
      (apply (operator op simp) (map (partial normalize target-op simp) n1))
      n1)))

(defn- distribute
  "Distributes the operation o1 over o2 in the first two levels of bobj."
  [o1 o2 simp bobj]
  (let [f (operator o1 simp),
        g (operator o2 simp)]
    (if (= o1 (operation bobj))
      (reduce (fn go [x y]
                (bool-casep #(= o2 (operation %)) [x y]
                  [true true] (map-reduce #(go x %) g y)
                  [true false] (map-reduce #(f % y) g x)
                  [false true] (map-reduce #(f x %) g y)
                  [false false] (f x y)))
              bobj)
      bobj)))

(defn- expand-to
  "Expands bobj to a form in terms of the given operation op;
  SoP when op is :OR
  PoS when op is :AND"
  [op simp bobj]
  {:pre [(#{:AND :OR} op)]}
  (let [op' (dual op)
        done? (partial valid-form? {op 1, op' 2, :NOT 3})]
    ((fn go [x]
       (let [x (two-level-normalize op simp x)]
         (if (done? x)
           (if simp (simplify x) x)
           (condp = (operation x)
             op (map-reduce go (operator op simp) x)
             op' (recur (distribute op' op simp x))
             (recur x)))))
     bobj)))

(defn ->SOP
  [bobj & {simp :simplify, :or {simp true}}]
  (expand-to :OR simp bobj))

(defn ->POS
  [bobj & {simp :simplify, :or {simp true}}]
  (expand-to :AND simp bobj))

(defn- xor-with-true?
  [x]
  (and (bxsum? x)
       (contains? x true)))

(defn ->ANF [bobj]
  (if (anf? bobj)
    bobj
    (let-case [op (operation bobj)]
      :NOT (<+> true (->ANF (first bobj)))
      :AND (let [bobj (map-reduce ->ANF &&* bobj)]
             (if (operation? :AND bobj)
               (distribute :AND :XOR true bobj)
               bobj))
      :NAND (<+> true (->ANF (apply &&* bobj)))
      :OR (let [bobj (map-reduce ->ANF ||* bobj)]
            (if (operation? :OR bobj)
              (reduce (fn [x y]
                        (if (and (operation? :XOR x) (operation? :XOR y)
                                 (contains? x true) (contains? y true))
                          (<+> true (->ANF (&&* (apply <+> (disj x true))
                                                (apply <+> (disj y true)))))
                          (<+> x y (->ANF (&&* x y)))))
                      bobj)
              bobj))
      :NOR (<+> true (->ANF (apply ||* bobj)))
      :XOR (map-reduce ->ANF <+> bobj)
      :XNOR (<+> true (map-reduce ->ANF <+> bobj))
      (:EQ :NEQ) (recur (expand-eq op :OR true bobj))
      :IMP (<+> true (->ANF (first bobj))
                (->ANF (apply &&* bobj)))
      :NIMP (<+> (->ANF (first bobj))
                 (->ANF (apply &&* bobj)))
      :CON (<+> true (->ANF (second bobj))
                (->ANF (apply &&* bobj)))
      :NCON (<+> (->ANF (second bobj))
                 (->ANF (apply &&* bobj)))
      bobj)))

(def operators {:TRUE (constantly true)
                :FALSE (constantly false)
                :NOT !
                :ID identity
                :AND &&
                :NAND !&&
                :OR ||
                :NOR !||
                :XOR <+>
                :XNOR <*>
                :EQ <=>
                :NEQ !<=>
                :IMP ==>
                :NIMP !==>
                :CON <==
                :NCON !<==})

(def simplifying-operators (merge operators {:AND &&*, :OR ||*}))
