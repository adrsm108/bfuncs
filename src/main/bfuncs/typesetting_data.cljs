(ns bfuncs.typesetting-data
  (:require [clojure.string :as str]
            [reagent.core :as r]
            [applied-science.js-interop :as j])
  (:require-macros [bfuncs.typesetting-data]))


(def operations
  {:NOT {:operation "NOT"
         :formats [{:name "Prime"
                    :latex [:postfix "'" 0]
                    :text [:postfix "'"]}
                   {:name "Logical not"
                    :latex [:prefix "{\\lnot}" 0.72982]
                    :text [:prefix "¬"]}
                   {:name "Bang"
                    :latex [:prefix "{!}" 0.3099]
                    :text [:prefix "!"]}
                   {:name "Tilde"
                    :latex [:prefix "{\\sim}" 0.85026]
                    :text [:prefix "~"]}
                   {:name "Overline"
                    :latex [:matchfix ["\\overline{" "}"] [0 0]]
                    :text (fn [[s]] (str/replace s #"\w" "$&\u0305"))}
                   {:name "not"
                    :latex [:prefix "\\mathop{\\text{not}} " 1.7689]
                    :text [:prefix "not "]}]}
   :AND {:operation "AND"
         :formats [{:name "Juxtaposition"
                    :latex [:infix " " 0.17969 " \\allowbreak \\, "]
                    :text " "}
                   {:name "Logical and"
                    :latex [:infix " \\land " 1.209]
                    :text " ∧ "}
                   {:name "Double ampersand"
                    :latex [:infix " \\mathbin{\\&\\&} " 2.179]
                    :text " && "}
                   {:name "Dot"
                    :latex [:infix " \\mathbin{.} " 0.78906]
                    :text " . "}
                   {:name "and"
                    :latex [:infix " \\mathrel{\\text{and}} " 2.3685]
                    :text " and "}]}
   :OR {:operation "OR"
        :formats [{:name "Plus sign"
                   :latex [:infix " + " 1.3294]
                   :text " + "}
                  {:name "Logical or"
                   :latex [:infix " \\lor " 1.209]
                   :text " ∨ "}
                  {:name "Double bar"
                   :latex [:infix " \\mathbin{||} " 1.099]
                   :text " || "}
                  {:name "Bar"
                   :latex [:infix " \\mathbin{|} " 0.78906]
                   :text " | "}
                  {:name "or"
                   :latex [:infix " \\mathrel{\\text{or}} " 1.5814]
                   :text " or "}]}
   :XOR {:operation "XOR"
         :formats [{:name "Circle plus"
                    :latex [:infix " \\oplus " 1.3294]
                    :text " ⊕ "}
                   {:name "Logical or with underbar"
                    :latex [:infix " \\veebar " 1.1484 " \\mathbin{\\veebar} "]
                    :text " ⊻ "}
                   {:name "Caret"
                    :latex [:infix " \\mathbin{\\char`^} " 0.99544
                            " \\mathbin{\\htmlStyle{font-family:'KATEX_MATH'}{\\char`^}} "]
                    :text " ^ "}
                   {:name "Bang equals"
                    :latex [:infix " \\mathbin{{!}{=}} " 1.3294]
                    :text " != "}
                   {:name "xor"
                    :latex [:infix " \\mathrel{\\text{xor}} " 2.1608]
                    :text " xor "}]}

   :NOR {:operation "NOR"
         :formats [{:name "Logical or with overbar"
                    :latex [:infix " \\mathbin{\\bar{\\lor}} " 1.2292

                            ;" \\mathbin{\\overset{\\underline{\\hphantom{-}}}{\\lor}} "
                            ]
                    :text " ⊽ "}
                   {:name "Down arrow"
                    :latex [:infix " \\mathbin{\\downarrow} " 1.0286]
                    :text " ↓ "}
                   {:name "nor"
                    :latex [:infix " \\mathrel{\\text{nor}} " 2.1914]
                    :text " nor "}]}
   :NAND {:operation "NAND"
          :formats [{:name "Logical and with overbar"
                     :latex [:infix " \\barwedge " 1.1484]
                     :text " ⊼ "}
                    {:name "Up arrow"
                     :latex [:infix " \\mathbin{\\uparrow} " 1.0286]
                     :text " ↑ "}
                    {:name "nand"
                     :latex [:infix " \\mathrel{\\text{nand}} " 2.9785]
                     :text " nand "}]}
   :XNOR {:operation "XNOR"
          :formats [{:name "Circle dot"
                     :latex [:infix " \\odot " 1.3294]
                     :text " ⊙ "}
                    #_{:name "Logical and with underbar"
                       :latex [:infix " \\mathbin{\\underbar{\\land}} " 1.2292 " \\mathbin{\\htmlStyle{display: inline-block; transform: rotate(180deg);}{\\overset{\\underline{\\hphantom{-}}}{\\lor}}} "]
                       :text " ⩟ "}
                    {:name "Double equals sign"
                     :latex [:infix " \\mathbin{==} " 2.179]
                     :text " == "}
                    #_{:name "Equals sign"
                       :latex [:infix " \\mathbin{=} " 1.3294]
                       :text " = "}
                    {:name "xnor"
                     :latex [:infix " \\mathrel{\\text{xnor}} " 2.7708]
                     :text " xnor "}]}

   :IMP {:operation "Implication"
         :formats [{:latex [:infix " \\Rightarrow " 1.6888]
                    :text " ⇒ "
                    :name "Right double arrow"}
                   {:name "Right arrow"
                    :latex [:infix " \\rightarrow " 1.6888]
                    :text " → "}
                   {:name "Superset"
                    :latex [:infix " \\mathbin{\\supset} " 1.3294]
                    :text " ⊃ "}
                   ]}
   :CON {:operation "Converse Implication"
         :formats [{:name "Left double arrow"
                    :latex [:infix " \\Leftarrow " 1.6888]
                    :text " ⇐ "}
                   {:name "Left arrow"
                    :latex [:infix " \\leftarrow " 1.6888]
                    :text " ← "}
                   {:name "Subset"
                    :latex [:infix " \\mathbin{\\subset} " 1.3294]
                    :text " ⊂ "}]}
   :NIMP {:operation "Non-Implication"
          :formats [{:name "Right double arrow with slash"
                     :latex [:infix " \\nRightarrow " 1.6888]
                     :text " ⇏ "}
                    {:name "Right arrow with slash"
                     :latex [:infix " \\nrightarrow " 1.6888]
                     :text " ↛ "}
                    {:name "Superset with slash"
                     :latex [:infix " \\mathbin{\\not\\supset} " 1.3294]
                     :text " ⊅ "}]}
   :NCON {:operation "Converse Non-Implication"
          :formats [{:name "Left double arrow with slash"
                     :latex [:infix " \\nLeftarrow " 1.6888]
                     :text " ⇍ "}
                    {:name "Left arrow with slash"
                     :latex [:infix " \\nleftarrow " 1.6888]
                     :text " ↚ "}
                    {:name "Subset with slash"
                     :latex [:infix " \\mathbin{\\not\\subset} " 1.3294]
                     :text " ⊄ "}]}

   :EQ {:operation "Equivalence"
        :formats [{:name "Left right double arrow"
                   :latex [:infix " \\mathbin{\\Leftrightarrow} " 1.569]
                   :text " ⇔ "}
                  {:name "Left right arrow"
                   :latex [:infix " \\mathbin{\\leftrightarrow} " 1.569]
                   :text " ↔ "}
                  {:name "Equivalence sign"
                   :latex [:infix " \\mathbin{\\equiv} " 1.3294]
                   :text " ≡ "}
                  ]}
   :NEQ {:operation "Non-Equivalence"
    :formats [{:name "Left right double arrow with slash"
               :latex [:infix " \\mathbin{\\nLeftrightarrow} " 1.569]
               :text " ⇎ "}
              {:name "Left right arrow with slash"
               :latex [:infix " \\mathbin{\\nleftrightarrow} " 1.569]
               :text " ↮ "}
              {:name "Equivalence sign with slash"
               :latex [:infix " \\mathbin{\\not\\equiv} " 1.3294]
               :text " ≢ "}
              ]}
   :TRUE {:operation "True"
          :formats [{:name "Digit one"
                     :latex [:constant "{1}" 0.54948]
                     :text [:constant "1"]}
                    {:name "true"
                     :latex [:constant "\\text{true}" 1.9616]
                     :text [:constant "true"]}
                    {:name "Top"
                     :latex [:constant "{\\top}" 0.85026]
                     :text [:constant "⊤"]}]}
   :FALSE {:operation "False"
           :formats [{:name "Digit zero"
                      :latex [:constant "{0}" 0.54948]
                      :text [:constant "0"]}
                     {:name "false"
                      :latex [:constant "\\text{false}" 2.123]
                      :text [:constant "false"]}
                     {:name "Bottom"
                      :latex [:constant "{\\bot}" 0.85026]
                      :text [:constant "⊥"]}]}})

(def grouping
  [{:tip "Where strictly necessary"
    :spec {:precedence {:IMP 1
                        :NIMP 1
                        :CON 2
                        :NCON 2
                        :EQ 3
                        :NEQ 3
                        :OR 4
                        :NOR 4
                        :XOR 5
                        :XNOR 5
                        :AND 6
                        :NAND 6
                        :NOT 7}
           :group? >}
    :label [:span {:style {:position "absolute"}}
            "Minimum"]}
   {:tip "Operators of equal precedence"
    :spec {:precedence {:IMP 1
                        :NIMP 1
                        :CON 2
                        :NCON 2
                        :EQ 3
                        :NEQ 3
                        :OR 4
                        :NOR 4
                        :XOR 5
                        :XNOR 5
                        :AND 6
                        :NAND 6
                        :NOT 7}
           :group? >=}}
   {:tip "Mixed relational operators"
    :spec {:precedence {:IMP 1
                        :NIMP 1
                        :CON 1
                        :NCON 1
                        :EQ 1
                        :NEQ 1
                        :OR 4
                        :NOR 4
                        :XOR 5
                        :XNOR 5
                        :AND 6
                        :NAND 6
                        :NOT 7}
           :group? >=}}
   {:tip "OR/NOR mixed with XOR/XNOR"
    :spec {:precedence {:IMP 1
                        :NIMP 1
                        :CON 1
                        :NCON 1
                        :EQ 1
                        :NEQ 1
                        :OR 4
                        :NOR 4
                        :XOR 4
                        :XNOR 4
                        :AND 6
                        :NAND 6
                        :NOT 7}
           :group? >=}}
   {:tip "All nested operations up to AND/NAND"
    :spec {:precedence
           {:IMP 1
            :NIMP 1
            :CON 1
            :NCON 1
            :EQ 1
            :NEQ 1
            :OR 1
            :NOR 1
            :XOR 1
            :XNOR 1
            :AND 6
            :NAND 6
            :NOT 7}
           :group? >=}}
   {:tip "Nested AND/NAND"
    :label [:span {:style {:position "absolute"
                           :right 0
                           :text-align "end"}}
            "Maximum"]
    :spec {:precedence {:IMP 1
                        :NIMP 1
                        :CON 1
                        :NCON 1
                        :EQ 1
                        :NEQ 1
                        :OR 1
                        :NOR 1
                        :XOR 1
                        :XNOR 1
                        :AND 1
                        :NAND 1
                        :NOT 7}
           :group? >=}}])

(def demo-expression
  [:expr
   [:IMP
    [:EQ
     [:AND [:TRUE] [:var "a"]]
     [:OR [:FALSE] [:var "b"]]]
    [:IMP [:OR [:var "c"]
           [:XOR
            [:NOT [:var "d"]]
            [:var "e"]]
           [:var "f"]]
     [:NOT [:AND [:var "foo"]
            [:var "bar"]]]]]])

(def demo-expression-extra-operators
  [:expr
   [:EQ
    [:NAND [:AND [:var "a"] [:var "b"]] [:var "c"]]
    [:XOR [:XNOR [:var "x"] [:var "y"]] [:var "z"]]
    [:OR [:NOR [:var "p"] [:var "q"]] [:var "r"]]]])

(def demo-expression-extra-relations
  [:expr
   [:IMP
    [:var "a"]
    [:NIMP
     [:var "b"]
     [:NCON
      [:CON [:NEQ [:EQ [:var "c"] [:var "d"]] [:var "e"]] [:var "f"]]
      [:var "g"]]]]])

(def bases
  {:var ["x" "variable" 12.47]
   :pvar ["\\mathfrak{P}" "prime variable" 13.98]
   :cvar ["C" "coverage variable" 15.58]
   :pimplicant ["p" "prime implicant" 10.97]
   :pimplicate ["P" "prime implicate" 13.98]
   :minterm ["m" "minterm" 19.13]
   :maxterm ["M" "maxterm" 21.14]
   :P ["\\mathcal{P}" "p set" 20]})

(def default-macros
  (reduce #(j/assoc! %1
             (->> %2 first name (str "\\"))
             (-> %2 second first))
          (j/obj) bases))
