(ns bfuncs.data
  (:require
   [bfuncs.utils :refer [mapa map-into-array let-case if-first unless-zero bool-casep get' assoc-non-enumerable!]]
   [clojure.set :as set]
   [applied-science.js-interop :as j]))

(def operations
  {:TRUE {:dual :FALSE}
   :FALSE {:dual :TRUE}
   :NOT {:dual :NOT}
   :OR {:assoc true
        :comm true
        :dist #{:XNOR :AND :CON :IMP}
        :dual :AND},
   :NOR {:assoc false
         :comm true
         :dist #{}
         :dual :NAND},
   :AND {:assoc true
         :comm true
         :dist #{:XOR :OR :NIMP :NCON}
         :dual :OR},
   :NAND {:assoc false
          :comm true
          :dist #{}
          :dual :NOR}
   :XOR {:assoc true
         :comm true
         :dist #{}
         :dual :XNOR}
   :XNOR {:assoc true
          :comm true
          :dist #{}
          :dual :XOR}
   :IMP {:assoc false
         :comm false
         :dist #{:XNOR :AND :CON :OR}
         :dual :NCON}
   :NIMP {:assoc false
          :comm false
          :dist #{}
          :dual :CON}
   :CON {:assoc false
         :comm false
         :dist #{}
         :dual :NIMP}
   :NCON {:assoc false
          :comm false
          :dist #{:AND :XOR :OR :NIMP}
          :dual :IMP}})

(def infix-operator-strs
  {:OR " || ",
   :NOR " !|| ",
   :AND " && ",
   :NAND " !&& "
   :XOR " <+> "
   :XNOR " <*> "
   :EQ " <=> "
   :IMP " ==> "
   :NIMP " !==> "
   :CON " <== "
   :NCON " !<== "})

(def prefix-operator-strs
  {:NOT "!"
   :OR "||",
   :NOR "!||",
   :AND "&&",
   :NAND "!&&"
   :XOR "<+>"
   :XNOR "<*>"
   :EQ "<=>"
   :IMP "==>"
   :NIMP "!==>"
   :CON "<=="
   :NCON "!<=="})

(def mathematica-operator-strs
  {:NOT "Not"
   :OR "Or",
   :NOR "Nor",
   :AND "And",
   :NAND "Nand"
   :XOR "Xor"
   :XNOR "Xnor"
   :IMP "Implies"
   :EQ "Equivalent"
   :NIMP "(Not@*Implies)"
   :CON "ReverseApplied[Implies]"
   :NCON "(Not@*ReverseApplied[Implies])"})

(defn- pr-writer-mma [obj writer opts]
  (case obj
    true (-write writer "True")
    false (-write writer "False")
    (pr-writer obj writer opts)))

(defn- bool-op-pr-writer [operation operands writer {:keys [mathematica readably] :as opts}]
  (pr-sequential-writer writer
                        (if mathematica pr-writer-mma pr-writer)
                        (cond
                          mathematica (str (get' mathematica-operator-strs operation (name operation))
                                           "[")
                          readably (str "("
                                        (get' prefix-operator-strs operation (name operation))
                                        " ")
                          :else "(")
                        (cond
                          mathematica ", "
                          readably " "
                          :else (get' infix-operator-strs operation (str " ~" (name operation) "~ ")))
                        (cond
                          mathematica "]"
                          :else ")")
                        opts operands))

(defprotocol IBoolOp
  (-operation [this])
  (-operands [this])
  (-replace-operands [this smap])
  (-with-operation [this op]))

(defn- hash-bool-unary [bun]
  (hash-combine
   (hash (-operation bun))
   (hash (first bun))))

(defn- hash-bool-set [bset]
  (if-let [s (seq bset)]
    (hash-combine
     (hash (-operation bset))
     (hash-unordered-coll s))
    0))

(defn- hash-bool-vec [bvec]
  (if-let [s (seq bvec)]
    (hash-combine
     (hash (-operation bvec))
     (hash-ordered-coll s))
    0))

(defn- replace-operands [smap x]
  (if (satisfies? IBoolOp x)
    (-replace-operands x smap)
    (get smap x x)))

(defn operation
  "Returns (-op x) if x satisfies IBoolOp, nil otherwise."
  [x] (when (satisfies? IBoolOp x) (-operation x)))

(defn operands [x]
  (when (satisfies? IBoolOp x) (-operands x)))

(defn precedence [op]
  (case op
    (:IMP :NIMP) 1
    (:CON :NCON) 2
    :EQ 3
    (:OR :NOR) 4
    (:XOR :XNOR) 5
    (:AND :NAND) 6
    :NOT 7
    nil))

(defn- scrape-top [cmp coll]
  (if (empty? coll)
    nil
    (loop [top (first coll)
           coll (next coll)]
      (if-first [x coll]
        (recur (if (pos? (cmp top x)) x top)
               (next coll))
        top))))

(defn compare-bobj [x y]
  (if (= x y)
    0
    (let [ox (operation x), oy (operation y)]
      (bool-casep #(= :NOT %) [ox oy]
        [true true] (compare-bobj (first x) (first y))
        [true false] (unless-zero (compare-bobj (first x) y) 1)
        [false true] (unless-zero (compare-bobj x (first y)) -1)
        [false false]
        (bool-casep nil? [ox oy]
          [true true] (try (compare x y)
                           (catch js/Object e
                             (cond
                               (boolean? x) -1
                               (boolean? y) 1
                               (string? x) -1
                               (string? y) 1
                               (number? x) -1
                               (number? y) 1
                               (array? x) -1
                               (array? y) 1
                               :else 0)))
          [true false] -1
          [false true] 1
          [false false]
          (unless-zero (compare (precedence ox) (precedence oy))
            (unless-zero (compare (count x) (count y))
              (loop [x x, y y]
                (bool-casep empty? [x y]
                  [true true] 0
                  [true false] -1
                  [false true] 1
                  (let [tx (scrape-top compare-bobj x)
                        ty (scrape-top compare-bobj y)]
                    (unless-zero (compare-bobj tx ty)
                      (recur (disj x tx) (disj y ty)))))))))))))


(defn- clj->js' [x]
  (if (not (satisfies? IBoolOp x))
    #js["var" (clj->js x)]
    (clj->js x)))

(deftype ^js BoolUnary [meta operation operand ^:mutable __hash]
  Object
  (toString [this] (pr-str* this))
  (equiv [this other]
    (-equiv this other))

  IBoolOp
  (-operation [_] :NOT)
  (-operands [_] [operand])
  (-with-operation [this new-operation]
    (if (= operation new-operation)
      this
      (BoolUnary. meta new-operation operand nil)))
  (-replace-operands [this smap]
    (let [replaced (replace-operands smap operand)]
      (if (identical? operand replaced)
        this
        (BoolUnary. meta operation replaced nil))))

  IEquiv
  (-equiv [o other]
    (and (= (type o) (type other))
         (= operand (first other))))

  IHash
  (-hash [coll] (caching-hash coll hash-bool-unary __hash))

  ISeq
  (-first [_] operand)
  (-rest [_] ())

  ISeqable
  (-seq [_coll] [operand])

  INext
  (-next [_] nil)

  ICounted
  (-count [_] 1)

  IPrintWithWriter
  (-pr-writer [_o writer opts]
    (if (:readably opts)
      (do (-write writer "(! ")
          (pr-writer operand writer opts)
          (-write writer ")"))
      (do (-write writer "!")
          (pr-writer operand writer opts))))


  IWithMeta
  (-with-meta [o new-meta]
    (if (identical? meta new-meta)
      o
      (BoolUnary. new-meta operation operand __hash)))

  IMeta
  (-meta [_] meta)

  IEncodeJS
  (-clj->js [_]
    (-> #js[(clj->js operand)]
        (j/assoc! :operation (clj->js operation))
        (cond-> meta (j/assoc! :meta (clj->js meta))))

   #_(if (some? meta)
       (assoc-non-enumerable! #js[(clj->js operand)]
         :operation (name operation)
         :meta (clj->js meta))
       (assoc-non-enumerable! #js[(clj->js operand)]
         :operation (name operation))))
  #_(-clj->js [_] (clj->js' operand)
              #js[(name operation) (clj->js' operand)])
  (-key->js [x] (pr-str x))
  )

(deftype ^js BoolSet [operation operand-set ^:mutable __hash]

  Object
  (toString [this] (pr-str* this))
  (equiv [this other] (-equiv this other))

  IBoolOp
  (-operation [_] operation)
  (-operands [_] operand-set)
  (-with-operation [this new-operation]
    (if (= new-operation operation)
      this
      (BoolSet. new-operation operand-set nil)))
  (-replace-operands [_ smap]
    (BoolSet. operation
              (into (empty operand-set)
                    (map (partial replace-operands smap))
                    operand-set)
              nil))

  IEquiv
  (-equiv [o other]
    (and (= (type o) (type other))
         (= operation (-operation other))
         (= operand-set (-operands other))))

  IHash
  (-hash [coll] (caching-hash coll hash-bool-set __hash))

  ICollection
  (-conj [coll o]
    (let [conjd (-conj operand-set o)]
      (if (identical? operand-set conjd)
        coll
        (BoolSet. operation conjd nil))))

  ISequential
  ISeqable
  (-seq [_coll] (-seq operand-set))

  ICounted
  (-count [_coll] (-count operand-set))

  ISet
  (-disjoin [coll v]
    (let [disjd (-disjoin operand-set v)]
      (if (identical? disjd operand-set)
        coll
        (BoolSet. operation disjd nil))))

  ILookup
  (-lookup [coll v]
    (-lookup coll v nil))
  (-lookup [_coll v not-found]
    (-lookup operand-set v not-found))

  IWithMeta
  (-with-meta [coll new-meta]
    (let [terms-with-meta (-with-meta operand-set new-meta)]
      (if (identical? operand-set terms-with-meta)
        coll
        (BoolSet. operation terms-with-meta __hash))))

  IMeta
  (-meta [_] (-meta operand-set))

  IPrintWithWriter
  (-pr-writer [_o writer opts]
    (bool-op-pr-writer operation operand-set writer opts))

  IFn
  (-invoke [_coll k]
    (-lookup operand-set k))
  (-invoke [_coll k not-found]
    (-lookup operand-set k not-found))

  ICloneable
  (-clone [_] (BoolSet. operation operand-set __hash))

  IIterable
  (-iterator [_] (-iterator operand-set))

  IEncodeJS
  (-clj->js [_]
    (-> (mapa clj->js (sort compare-bobj operand-set))
        (j/assoc! :operation (clj->js operation))
        (cond-> (meta operand-set) (j/assoc! :meta (clj->js (meta operand-set))))))

  #_(-clj->js [_]
              (map-into-array clj->js'
                              #js[(name operation)]
                              (sort compare-bobj operand-set)))
  #_(-clj->js [_]
              (if-some [m (meta operand-set)]
                (assoc-non-enumerable! (mapa clj->js (sort compare-bobj operand-set))
                  :operation (name operation)
                  :meta (clj->js m))
                (assoc-non-enumerable! (mapa clj->js (sort compare-bobj operand-set))
                  :operation (name operation))))
  (-key->js [x] (pr-str x)))



(deftype ^js BoolVec [operation operand-vec ^:mutable __hash]

  Object
  (toString [coll]
    (pr-str* coll))
  (equiv [this other]
    (-equiv this other))
  (indexOf [_coll x]
    (-indexOf operand-vec x 0))
  (indexOf [_coll x start]
    (-indexOf operand-vec x start))
  (lastIndexOf [_coll x]
    (-lastIndexOf operand-vec x (count operand-vec)))
  (lastIndexOf [_coll x start]
    (-lastIndexOf operand-vec x start))

  IBoolOp
  (-operation [_] operation)
  (-operands [_] operand-vec)
  (-with-operation [this new-operation]
    (if (= new-operation operation)
      this
      (BoolVec. new-operation operand-vec nil)))
  (-replace-operands [_ smap]
    (BoolVec. operation
              (into (empty operand-vec)
                    (map (partial replace-operands smap))
                    operand-vec)
              nil))

  ICloneable
  (-clone [_] (BoolVec. operation operand-vec hash))

  IWithMeta
  (-with-meta [coll new-meta]
    (let [new-operands (-with-meta operand-vec new-meta)]
      (if (identical? operand-vec new-operands)
        coll
        (BoolVec. operation new-operands __hash))))

  IMeta
  (-meta [_coll] (-meta operand-vec))

  IStack
  (-peek [_coll] (peek operand-vec))
  (-pop [_coll] (BoolVec. operation (pop operand-vec) nil))

  ICollection
  (-conj [_coll o]
    (BoolVec. operation (-conj operand-vec o) nil))

  ISequential

  IEquiv
  (-equiv [coll other]
    (and (= (type coll) (type other))
         (= operation (-operation other))
         (= operand-vec (-operands other))))


  IHash
  (-hash [coll] (caching-hash coll hash-bool-vec __hash))

  ISeqable
  (-seq [_coll] (-seq operand-vec))

  ICounted
  (-count [_coll] (-count operand-vec))

  IIndexed
  (-nth [_coll n]
    (-nth operand-vec n))
  (-nth [_coll n not-found]
    (-nth operand-vec n not-found))

  ILookup
  (-lookup [_coll k] (-lookup operand-vec k nil))
  (-lookup [_coll k not-found] (-lookup operand-vec k not-found))

  IAssociative
  (-assoc [coll k v]
    (let [assoc'd (-assoc operand-vec k v)]
      (if (identical? assoc'd operand-vec)
        coll
        (BoolVec. operation assoc'd nil))))
  (-contains-key? [_coll k] (-contains-key? operand-vec k))

  IFind
  (-find [_coll n] (-find operand-vec n))

  IVector
  (-assoc-n [coll n val]
    (let [assoc'd (-assoc-n operand-vec n val)]
      (if (identical? assoc'd operand-vec)
        coll
        (BoolVec. operation assoc'd nil))))

  IFn
  (-invoke [_coll k]
    (-nth operand-vec k))
  (-invoke [_coll k not-found]
    (-nth operand-vec k not-found))

  IIterable
  (-iterator [_this] (-iterator operand-vec))

  IPrintWithWriter
  (-pr-writer [_o writer opts] (bool-op-pr-writer operation operand-vec writer opts))

  IEncodeJS
  #_(-clj->js [_] (map-into-array clj->js'
                                  #js[(name operation)]
                                  operand-vec))
  (-clj->js [_x]
    (-> (mapa clj->js operand-vec)
        (j/assoc! :operation (clj->js operation))
        (cond-> (meta operand-vec)
                (assoc! :meta (clj->js (meta operand-vec)))))
   )
  (-key->js [x] (pr-str x))
  #_(-clj->js [_x]
              (if-some [m (meta operand-vec)]
                (assoc-non-enumerable! (mapa clj->js operand-vec)
                  :operation (name operation)
                  :meta (clj->js m))
                (assoc-non-enumerable! (mapa clj->js operand-vec)
                  :operation (name operation)))))

(defn with-operation [op x]
  (if (satisfies? IBoolOp x)
    (-with-operation x op)
    (throw (ex-info "Cannot set operation on non IBoolOp" {:x x :op op}))))
(defn bool-set [op & keys] (BoolSet. op (set keys) nil))
(defn bool-vec [op & keys] (BoolVec. op (vec keys) nil))
(defn bool-not [x] (BoolUnary. nil :NOT x nil))
