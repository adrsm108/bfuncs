(ns bfuncs.parsing
  (:require [bfuncs.utils :as util
             :refer [singleton? echo hiccup-tag let-case array-like? parser-spec map-reduce rrange str-join echol]]
            [clojure.string :as str]
            [applied-science.js-interop :as j]
            [bfuncs.algebra :refer [operator || && ! !|| !&& <+> <*> <=> ==> !==> <== !<==]]
            [bfuncs.data :refer [operation operands compare-bobj]]
            ["/bfuncs/jsUtils" :refer [functionBytes]])
  (:import [goog.string StringBuffer]))

(defn parse-token
  [tok]
  (when-not (str/blank? tok)
    (if (str/ends-with? tok "'")
      [(str/replace tok #"'$" "") false]
      [tok true])))

(defn parse-input
  "Returns a sequence of maps, one for each line in input-str. Each map is
  keyed by the variable names that appear in that line, which have value false if
  that variable ends with ', and true if not."
  [type input-str]
  (for [line (str/split input-str #"\s*[+\n]\s*")
        :when (not (str/blank? line))]
    (into {}
          (map parse-token)
          (str/split line #"\s+"))))

(defn- walk-with
  ([f expr]
   (f (if (hiccup-tag :expr expr)
        (second expr)
        expr)))
  ([f x expr]
   (f x (if (hiccup-tag :expr expr)
          (second expr)
          expr))))

(defn ->infix [tree]
  (if-not (vector? tree)
    tree
    (case (count tree)
      (0 1) tree
      2 [(first tree) (->infix (second tree))]
      (vec (interpose (first tree)
                      (map ->infix (rest tree)))))))
(defn ->infix-string [tree]
  (if-not (vector? tree)
    (str tree)
    (case (count tree)
      0 (str tree)
      1 (name (first tree))
      2 (let-case [head (first tree)]
          (:var :expr) (recur (second tree))
          :NOT (str "!" (->infix-string (second tree)))
          (str (name head) "(" (->infix-string (second tree)) ")"))
      (str-join "(" (str " " (name (first tree)) " ") ")"
                ->infix-string (rest tree)))))

(defn echo-infix [tree]
  (println (->infix-string tree))
  tree)

(def parse-or-test "a+b|c||d⋁e∨f'or(g) OR h")
(def parse-and-test "a b(c) d * e & f && g ⋀(h)aNd(i)∧j and k")
(def parse-xor-test "a xor b^(c)xor(d)⊕e⊻f")
(def parse-xand-test "a xand b EQ c=d xnoR e")
(def parse-true-test "TRUE & true * 1 * ⊤")
(def parse-false-test "false & FALSE * 0 * ⊥")
(def parse-not-test "~a(b') NOT c & ¬!d")

(defn- invalid-char
  [x] (re-find #"[^\w\s+|⋁∨^⊕⊻=⊙*&⋀∧()'!~¬⊤⊥]" x))

(defn- digit-string?
  [x] (boolean (re-matches #"\d+" x)))

(defn- invalid-variable-name
  [x] (re-find #"^\w+" x))

(defn- parse-bool [x]
  (if (string? x)
    (condp re-matches x
      #"(?i)false|0|⊥" false
      #"(?i)true|1|⊤" true
      x)
    x))

(defn operation-operands
  ([x] (operation-operands x false))
  ([x sort?]
   (if-some [op (operation x)]
     [op (cond->> (operands x)
           sort? (sort compare-bobj))]
     (if-some [op (when (array? x) (keyword (j/get x :operation)))]
       (if (= op :expr)
         (recur (first x) sort?)
         [op x])
       (let-case [op (when (array-like? x)
                       (keyword (first x)))]
         :expr (recur (second x) sort?)
         :var [op (rest x)]
         nil (case (parse-bool x)
               true [:TRUE nil]
               false [:FALSE nil]
               [:var [x]])
         [op (next x)])))))

(defn get-operation [expr]
  (or (let [t (hiccup-tag expr)]
        (if (= t :expr)
          (get-operation (second expr))
          t))
      (operation expr)
      ({true :TRUE false :FALSE} (parse-bool expr))
      :var))

(def ^string digits "0123456789abcdefghijklmnopqrstuvwxyz")

(defn parse-minterms
  ([string]
   (parse-minterms string nil))
  ([string opts]
   (map (partial js/parseInt (if (:binary opts) 2 10))
        (str/split string #"[,\s]+"))))

(defn bobj->bexpr
  ([bobj] (bobj->bexpr bobj str))
  ([bobj vf]
   [:expr
    ((fn go [bobj]
       (if-let [op (operation bobj)]
         (into [op] (map go) bobj)
         (let [r (vf bobj)]
           [(if (boolean? r) :bool :var) r])))
     bobj)]))

(defn bexpr->bobj
  ([bexpr] (bexpr->bobj bexpr identity))
  ([bexpr vf]
   ((fn go [bexpr]
      (let-case [op (-> bexpr first keyword)]
        :expr (go (second bexpr))
        :var (vf (second bexpr))
        (if-let [f (operator op)]
          (apply f (map go (rest bexpr)))
    (vf (second bexpr)))))
    bexpr)))

(defn- xor
  ([x] x)
  ([x & more]
   (odd?
    (reduce #(if %2 (inc %1) %1)
            (if x 1 0)
            more))))

(defn- xand
  ([x] (not x))
  ([x & more]
   (even?
    (reduce #(if %2 (inc %1) %1)
            (if x 1 0)
            more))))

(defn ->bfn
  [bobj]
  (let [boperators {:AND 'and
                    :OR 'or
                    :NOT 'not
                    :XNOR 'xand
                    :XOR 'xor}
        vars (atom (sorted-set))
        go (fn go [x]
             (let [[op operands] (operation-operands x)]
               (case op
                 :TRUE true
                 :FALSE false
                 :var (let [v (symbol (first operands))]
                        (swap! vars conj v)
                        v)
                 (:AND :OR :XOR :XNOR :NOT) (list* (boperators op) (doall (map go operands))))))
        precpt (go (if (hiccup-tag :expr bobj)
                     (second bobj)
                     bobj))
        vv (vec @vars)
        ef (list 'fn vv precpt)]
    [vv ef #_(cjj/eval (empty-state)
                       ef
                       {:eval js-eval
                        :context :expr}
                       :value)]))

(defn- ->fn [expr vars]
  (let [var-map (zipmap vars (map #(str "x" %) (range)))
        body (walk-with (fn go [x]
                          (let [[op operands] (operation-operands x)]
                            (case op
                              :TRUE "true"
                              :FALSE "false"
                              :var (var-map (first operands))
                              :NOT (str "!(" (go (first operands)) ")")
                              (:AND :OR) (str-join "(" ({:AND " && ", :OR " || "} op) ")"
                                                   go operands)
                              (:XOR :XNOR) (str-join ({:XOR "(xor(", :XNOR "(!xor("} op) "," "))"
                                                     go operands))))
                        expr)]
    (js/Function
     (str-join "[" "," "]" val var-map)
     (str "const xor=(...xs)=>xs.reduce((a,b)=>(b===false||b===null)?a:!a,false);
           return "
          body
          ";"))))

(defn- pr-body [var-map expr]
  (let [sb (StringBuffer.)
        writer (new StringBufferWriter sb)
        eq? (atom false)]
    (letfn [(pr-binop [writer start x1 mid x2 end]
              (do (-write writer start)
                  (go x1 writer)
                  (-write writer mid)
                  (go x2 writer)
                  (-write writer end)))
            (go [x writer]
              (let [[op operands] (operation-operands x)]
                (case op
                  :TRUE (-write writer "true")
                  :FALSE (-write writer "false")
                  :var (-write writer (var-map (first operands)))
                  :NOT (do (-write writer "!(")
                           (go (first operands) writer)
                           (-write writer ")"))
                  (:AND :NAND
                   :OR :NOR
                   :XOR :XNOR) (pr-sequential-writer writer go
                                                     (case op (:NOR :NAND) "!(" "(")
                                                     (case op
                                                       (:AND :NAND) " && "
                                                       (:OR :NOR) " || "
                                                       :XOR " != "
                                                       :XNOR " == ")
                                                     ")" nil operands)
                  (:EQ :NEQ) (do (reset! eq? true)
                                 (pr-sequential-writer writer go
                                                       (case op :EQ "eq(" :NEQ "!eq(")
                                                       "," ")" nil operands))
                  :IMP (pr-binop writer "(!(" (first operands) ") || " (second operands) ")")
                  :NIMP (pr-binop writer "(" (first operands) " && !(" (second operands) "))")
                  :CON (pr-binop writer "(" (first operands) " || !(" (second operands) "))")
                  :NCON (pr-binop writer "(!(" (first operands) ") && " (second operands) ")"))))]
      (-write writer "return ")
      (go expr writer)
      (-write writer ";")
      (-flush writer)
      (str (when @eq?
             "const eq = (x1, ...xs) => { for (const x of xs) if (x != x1) return false; return true; }; ")
           sb))))

(defn ->js-fn
  ([vars expr]
   (let [var-map (zipmap vars (map #(str "x" %) (range)))]
     (js/Function
      (str-join "[" "," "]" val var-map)
      (pr-body var-map expr)))))

(defn ->bytes
  ([vars expr]
   (functionBytes (->js-fn vars expr) (count vars))))

(defn ->js-fn-strs
  ([vars expr]
   (let [var-map (zipmap vars (map #(str "x" %) (range)))]
     [(str-join "[" "," "]" val var-map)
      (pr-body var-map expr)]))
  )

(defn variables [expr]
  (let [vars (atom (transient #{}))]
    ((fn go [x]
       (let [[op operands] (operation-operands x)]
         (case op
           :var (when-not
                 (hiccup-tag :instaparse/failure
                             (first operands))
                  (swap! vars conj! (first operands)))
           (:TRUE :FALSE :instaparse/failure) nil
           (run! go operands))))
     expr)
    (vec (sort (persistent! @vars)))))

(defn js->bobj [expr]
  ((fn go [x]
     (if (array? x)
       (let-case [op (first x)]
         "expr" (go (second x))
         "var" (js->clj (second x))
         ("TRUE" true) true
         ("FALSE" false) false
         (apply (operator (keyword op))
                (map go (rest x))))
       (js->clj x)))
   expr))

(defn js->bobj-and-vars [expr]
  (let [vars (atom (transient #{}))
        as-var (fn [x]
                 (let [v (js->clj x)]
                   (when-not (boolean? v)
                     (swap! vars conj! v))
                   v))]
    [((fn go [x]
        (if (array? x)
          (let-case [op (first x)]
            "expr" (go (second x))
            "var" (as-var (second x))
            ("TRUE" true) true
            ("FALSE" false) false
            (apply (operator (keyword op))
                   (map go (rest x))))
          (as-var x)))
      expr)
     (-> @vars persistent! sort vec)]))
