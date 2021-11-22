goog.provide('bfuncs.parsing');
var module$bfuncs$jsUtils=shadow.js.require("module$bfuncs$jsUtils", {});
bfuncs.parsing.parse_token = (function bfuncs$parsing$parse_token(tok){
if(clojure.string.blank_QMARK_(tok)){
return null;
} else {
if(clojure.string.ends_with_QMARK_(tok,"'")){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [clojure.string.replace(tok,/'$/,""),false], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tok,true], null);
}
}
});
/**
 * Returns a sequence of maps, one for each line in input-str. Each map is
 *   keyed by the variable names that appear in that line, which have value false if
 *   that variable ends with ', and true if not.
 */
bfuncs.parsing.parse_input = (function bfuncs$parsing$parse_input(type,input_str){
var iter__4529__auto__ = (function bfuncs$parsing$parse_input_$_iter__67472(s__67473){
return (new cljs.core.LazySeq(null,(function (){
var s__67473__$1 = s__67473;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__67473__$1);
if(temp__5735__auto__){
var s__67473__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__67473__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__67473__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__67475 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__67474 = (0);
while(true){
if((i__67474 < size__4528__auto__)){
var line = cljs.core._nth(c__4527__auto__,i__67474);
if((!(clojure.string.blank_QMARK_(line)))){
cljs.core.chunk_append(b__67475,cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(bfuncs.parsing.parse_token),clojure.string.split.cljs$core$IFn$_invoke$arity$2(line,/\s+/)));

var G__67628 = (i__67474 + (1));
i__67474 = G__67628;
continue;
} else {
var G__67629 = (i__67474 + (1));
i__67474 = G__67629;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__67475),bfuncs$parsing$parse_input_$_iter__67472(cljs.core.chunk_rest(s__67473__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__67475),null);
}
} else {
var line = cljs.core.first(s__67473__$2);
if((!(clojure.string.blank_QMARK_(line)))){
return cljs.core.cons(cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(bfuncs.parsing.parse_token),clojure.string.split.cljs$core$IFn$_invoke$arity$2(line,/\s+/)),bfuncs$parsing$parse_input_$_iter__67472(cljs.core.rest(s__67473__$2)));
} else {
var G__67630 = cljs.core.rest(s__67473__$2);
s__67473__$1 = G__67630;
continue;
}
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4529__auto__(clojure.string.split.cljs$core$IFn$_invoke$arity$2(input_str,/\s*[+\n]\s*/));
});
bfuncs.parsing.walk_with = (function bfuncs$parsing$walk_with(var_args){
var G__67481 = arguments.length;
switch (G__67481) {
case 2:
return bfuncs.parsing.walk_with.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return bfuncs.parsing.walk_with.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(bfuncs.parsing.walk_with.cljs$core$IFn$_invoke$arity$2 = (function (f,expr){
var G__67482 = (cljs.core.truth_(bfuncs.utils.hiccup_tag.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),expr))?cljs.core.second(expr):expr);
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__67482) : f.call(null,G__67482));
}));

(bfuncs.parsing.walk_with.cljs$core$IFn$_invoke$arity$3 = (function (f,x,expr){
var G__67483 = x;
var G__67484 = (cljs.core.truth_(bfuncs.utils.hiccup_tag.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),expr))?cljs.core.second(expr):expr);
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__67483,G__67484) : f.call(null,G__67483,G__67484));
}));

(bfuncs.parsing.walk_with.cljs$lang$maxFixedArity = 3);

bfuncs.parsing.__GT_infix = (function bfuncs$parsing$__GT_infix(tree){
if((!(cljs.core.vector_QMARK_(tree)))){
return tree;
} else {
var G__67485 = cljs.core.count(tree);
switch (G__67485) {
case (0):
case (1):
return tree;

break;
case (2):
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first(tree),(function (){var G__67487 = cljs.core.second(tree);
return (bfuncs.parsing.__GT_infix.cljs$core$IFn$_invoke$arity$1 ? bfuncs.parsing.__GT_infix.cljs$core$IFn$_invoke$arity$1(G__67487) : bfuncs.parsing.__GT_infix.call(null,G__67487));
})()], null);

break;
default:
return cljs.core.vec(cljs.core.interpose.cljs$core$IFn$_invoke$arity$2(cljs.core.first(tree),cljs.core.map.cljs$core$IFn$_invoke$arity$2(bfuncs.parsing.__GT_infix,cljs.core.rest(tree))));

}
}
});
bfuncs.parsing.__GT_infix_string = (function bfuncs$parsing$__GT_infix_string(tree){
while(true){
if((!(cljs.core.vector_QMARK_(tree)))){
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(tree);
} else {
var G__67491 = cljs.core.count(tree);
switch (G__67491) {
case (0):
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(tree);

break;
case (1):
return cljs.core.name(cljs.core.first(tree));

break;
case (2):
var temp__27540__auto__ = cljs.core.first(tree);
var head = temp__27540__auto__;
var G__67492 = temp__27540__auto__;
var G__67492__$1 = (((G__67492 instanceof cljs.core.Keyword))?G__67492.fqn:null);
switch (G__67492__$1) {
case "var":
case "expr":
var G__67635 = cljs.core.second(tree);
tree = G__67635;
continue;

break;
case "NOT":
return ["!",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var G__67494 = cljs.core.second(tree);
return (bfuncs.parsing.__GT_infix_string.cljs$core$IFn$_invoke$arity$1 ? bfuncs.parsing.__GT_infix_string.cljs$core$IFn$_invoke$arity$1(G__67494) : bfuncs.parsing.__GT_infix_string.call(null,G__67494));
})())].join('');

break;
default:
return [cljs.core.name(head),"(",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var G__67497 = cljs.core.second(tree);
return (bfuncs.parsing.__GT_infix_string.cljs$core$IFn$_invoke$arity$1 ? bfuncs.parsing.__GT_infix_string.cljs$core$IFn$_invoke$arity$1(G__67497) : bfuncs.parsing.__GT_infix_string.call(null,G__67497));
})()),")"].join('');

}

break;
default:
return bfuncs.utils.str_join.cljs$core$IFn$_invoke$arity$5("(",[" ",cljs.core.name(cljs.core.first(tree))," "].join(''),")",bfuncs.parsing.__GT_infix_string,cljs.core.rest(tree));

}
}
break;
}
});
bfuncs.parsing.echo_infix = (function bfuncs$parsing$echo_infix(tree){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([bfuncs.parsing.__GT_infix_string(tree)], 0));

return tree;
});
bfuncs.parsing.parse_or_test = "a+b|c||d\u22C1e\u2228f'or(g) OR h";
bfuncs.parsing.parse_and_test = "a b(c) d * e & f && g \u22C0(h)aNd(i)\u2227j and k";
bfuncs.parsing.parse_xor_test = "a xor b^(c)xor(d)\u2295e\u22BBf";
bfuncs.parsing.parse_xand_test = "a xand b EQ c=d xnoR e";
bfuncs.parsing.parse_true_test = "TRUE & true * 1 * \u22A4";
bfuncs.parsing.parse_false_test = "false & FALSE * 0 * \u22A5";
bfuncs.parsing.parse_not_test = "~a(b') NOT c & \u00AC!d";
bfuncs.parsing.invalid_char = (function bfuncs$parsing$invalid_char(x){
return cljs.core.re_find(/[^\w\s+|⋁∨^⊕⊻=⊙*&⋀∧()'!~¬⊤⊥]/,x);
});
bfuncs.parsing.digit_string_QMARK_ = (function bfuncs$parsing$digit_string_QMARK_(x){
return cljs.core.boolean$(cljs.core.re_matches(/\d+/,x));
});
bfuncs.parsing.invalid_variable_name = (function bfuncs$parsing$invalid_variable_name(x){
return cljs.core.re_find(/^\w+/,x);
});
bfuncs.parsing.parse_bool = (function bfuncs$parsing$parse_bool(x){
if(typeof x === 'string'){
var pred__67505 = cljs.core.re_matches;
var expr__67506 = x;
if(cljs.core.truth_((function (){var G__67508 = /false|0|⊥/i;
var G__67509 = expr__67506;
return (pred__67505.cljs$core$IFn$_invoke$arity$2 ? pred__67505.cljs$core$IFn$_invoke$arity$2(G__67508,G__67509) : pred__67505.call(null,G__67508,G__67509));
})())){
return false;
} else {
if(cljs.core.truth_((function (){var G__67510 = /true|1|⊤/i;
var G__67511 = expr__67506;
return (pred__67505.cljs$core$IFn$_invoke$arity$2 ? pred__67505.cljs$core$IFn$_invoke$arity$2(G__67510,G__67511) : pred__67505.call(null,G__67510,G__67511));
})())){
return true;
} else {
return x;
}
}
} else {
return x;
}
});
bfuncs.parsing.operation_operands = (function bfuncs$parsing$operation_operands(var_args){
var G__67517 = arguments.length;
switch (G__67517) {
case 1:
return bfuncs.parsing.operation_operands.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return bfuncs.parsing.operation_operands.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(bfuncs.parsing.operation_operands.cljs$core$IFn$_invoke$arity$1 = (function (x){
return bfuncs.parsing.operation_operands.cljs$core$IFn$_invoke$arity$2(x,false);
}));

(bfuncs.parsing.operation_operands.cljs$core$IFn$_invoke$arity$2 = (function (x,sort_QMARK_){
while(true){
var temp__5737__auto__ = bfuncs.data.operation(x);
if((temp__5737__auto__ == null)){
var temp__5737__auto____$1 = ((cljs.core.array_QMARK_(x))?cljs.core.keyword.cljs$core$IFn$_invoke$arity$1((function (){var obj67518 = x;
var k67519 = "operation";
if((function (){var obj67520 = obj67518;
return (((!((obj67520 == null)))) && (applied_science.js_interop.impl.in_QMARK__STAR_(k67519,obj67520)));
})()){
return (obj67518[k67519]);
} else {
return undefined;
}
})()):null);
if((temp__5737__auto____$1 == null)){
var temp__27540__auto__ = ((bfuncs.utils.array_like_QMARK_(x))?cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(cljs.core.first(x)):null);
var op = temp__27540__auto__;
var G__67521 = temp__27540__auto__;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),G__67521)){
var G__67637 = cljs.core.second(x);
var G__67638 = sort_QMARK_;
x = G__67637;
sort_QMARK_ = G__67638;
continue;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"var","var",-769682797),G__67521)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [op,cljs.core.rest(x)], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(null,G__67521)){
var G__67523 = bfuncs.parsing.parse_bool(x);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(true,G__67523)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"TRUE","TRUE",494241636),null], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(false,G__67523)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"FALSE","FALSE",1063613829),null], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"var","var",-769682797),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [x], null)], null);

}
}
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [op,cljs.core.next(x)], null);

}
}
}
} else {
var op = temp__5737__auto____$1;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(op,new cljs.core.Keyword(null,"expr","expr",745722291))){
var G__67639 = cljs.core.first(x);
var G__67640 = sort_QMARK_;
x = G__67639;
sort_QMARK_ = G__67640;
continue;
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [op,x], null);
}
}
} else {
var op = temp__5737__auto__;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [op,(function (){var G__67527 = bfuncs.data.operands(x);
if(cljs.core.truth_(sort_QMARK_)){
return cljs.core.sort.cljs$core$IFn$_invoke$arity$2(bfuncs.data.compare_bobj,G__67527);
} else {
return G__67527;
}
})()], null);
}
break;
}
}));

(bfuncs.parsing.operation_operands.cljs$lang$maxFixedArity = 2);

bfuncs.parsing.get_operation = (function bfuncs$parsing$get_operation(expr){
var or__4126__auto__ = (function (){var t = bfuncs.utils.hiccup_tag.cljs$core$IFn$_invoke$arity$1(expr);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(t,new cljs.core.Keyword(null,"expr","expr",745722291))){
var G__67529 = cljs.core.second(expr);
return (bfuncs.parsing.get_operation.cljs$core$IFn$_invoke$arity$1 ? bfuncs.parsing.get_operation.cljs$core$IFn$_invoke$arity$1(G__67529) : bfuncs.parsing.get_operation.call(null,G__67529));
} else {
return t;
}
})();
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
var or__4126__auto____$1 = bfuncs.data.operation(expr);
if(cljs.core.truth_(or__4126__auto____$1)){
return or__4126__auto____$1;
} else {
var or__4126__auto____$2 = (function (){var G__67533 = bfuncs.parsing.parse_bool(expr);
var fexpr__67532 = new cljs.core.PersistentArrayMap(null, 2, [true,new cljs.core.Keyword(null,"TRUE","TRUE",494241636),false,new cljs.core.Keyword(null,"FALSE","FALSE",1063613829)], null);
return (fexpr__67532.cljs$core$IFn$_invoke$arity$1 ? fexpr__67532.cljs$core$IFn$_invoke$arity$1(G__67533) : fexpr__67532.call(null,G__67533));
})();
if(cljs.core.truth_(or__4126__auto____$2)){
return or__4126__auto____$2;
} else {
return new cljs.core.Keyword(null,"var","var",-769682797);
}
}
}
});
bfuncs.parsing.digits = "0123456789abcdefghijklmnopqrstuvwxyz";
bfuncs.parsing.parse_minterms = (function bfuncs$parsing$parse_minterms(var_args){
var G__67539 = arguments.length;
switch (G__67539) {
case 1:
return bfuncs.parsing.parse_minterms.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return bfuncs.parsing.parse_minterms.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(bfuncs.parsing.parse_minterms.cljs$core$IFn$_invoke$arity$1 = (function (string){
return bfuncs.parsing.parse_minterms.cljs$core$IFn$_invoke$arity$2(string,null);
}));

(bfuncs.parsing.parse_minterms.cljs$core$IFn$_invoke$arity$2 = (function (string,opts){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(parseInt,(cljs.core.truth_(new cljs.core.Keyword(null,"binary","binary",-1802232288).cljs$core$IFn$_invoke$arity$1(opts))?(2):(10))),clojure.string.split.cljs$core$IFn$_invoke$arity$2(string,/[,\s]+/));
}));

(bfuncs.parsing.parse_minterms.cljs$lang$maxFixedArity = 2);

bfuncs.parsing.bobj__GT_bexpr = (function bfuncs$parsing$bobj__GT_bexpr(var_args){
var G__67541 = arguments.length;
switch (G__67541) {
case 1:
return bfuncs.parsing.bobj__GT_bexpr.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return bfuncs.parsing.bobj__GT_bexpr.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(bfuncs.parsing.bobj__GT_bexpr.cljs$core$IFn$_invoke$arity$1 = (function (bobj){
return bfuncs.parsing.bobj__GT_bexpr.cljs$core$IFn$_invoke$arity$2(bobj,cljs.core.str);
}));

(bfuncs.parsing.bobj__GT_bexpr.cljs$core$IFn$_invoke$arity$2 = (function (bobj,vf){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"expr","expr",745722291),(function bfuncs$parsing$go(bobj__$1){
var temp__5733__auto__ = bfuncs.data.operation(bobj__$1);
if(cljs.core.truth_(temp__5733__auto__)){
var op = temp__5733__auto__;
return cljs.core.into.cljs$core$IFn$_invoke$arity$3(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [op], null),cljs.core.map.cljs$core$IFn$_invoke$arity$1(bfuncs$parsing$go),bobj__$1);
} else {
var r = (vf.cljs$core$IFn$_invoke$arity$1 ? vf.cljs$core$IFn$_invoke$arity$1(bobj__$1) : vf.call(null,bobj__$1));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [((cljs.core.boolean_QMARK_(r))?new cljs.core.Keyword(null,"bool","bool",1444635321):new cljs.core.Keyword(null,"var","var",-769682797)),r], null);
}
})(bobj)], null);
}));

(bfuncs.parsing.bobj__GT_bexpr.cljs$lang$maxFixedArity = 2);

bfuncs.parsing.bexpr__GT_bobj = (function bfuncs$parsing$bexpr__GT_bobj(var_args){
var G__67544 = arguments.length;
switch (G__67544) {
case 1:
return bfuncs.parsing.bexpr__GT_bobj.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return bfuncs.parsing.bexpr__GT_bobj.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(bfuncs.parsing.bexpr__GT_bobj.cljs$core$IFn$_invoke$arity$1 = (function (bexpr){
return bfuncs.parsing.bexpr__GT_bobj.cljs$core$IFn$_invoke$arity$2(bexpr,cljs.core.identity);
}));

(bfuncs.parsing.bexpr__GT_bobj.cljs$core$IFn$_invoke$arity$2 = (function (bexpr,vf){
return (function bfuncs$parsing$go(bexpr__$1){
var temp__27540__auto__ = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(cljs.core.first(bexpr__$1));
var op = temp__27540__auto__;
var G__67548 = temp__27540__auto__;
var G__67548__$1 = (((G__67548 instanceof cljs.core.Keyword))?G__67548.fqn:null);
switch (G__67548__$1) {
case "expr":
return bfuncs$parsing$go(cljs.core.second(bexpr__$1));

break;
case "var":
var G__67549 = cljs.core.second(bexpr__$1);
return (vf.cljs$core$IFn$_invoke$arity$1 ? vf.cljs$core$IFn$_invoke$arity$1(G__67549) : vf.call(null,G__67549));

break;
default:
var temp__5733__auto__ = bfuncs.algebra.operator.cljs$core$IFn$_invoke$arity$1(op);
if(cljs.core.truth_(temp__5733__auto__)){
var f = temp__5733__auto__;
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,cljs.core.map.cljs$core$IFn$_invoke$arity$2(bfuncs$parsing$go,cljs.core.rest(bexpr__$1)));
} else {
var G__67554 = cljs.core.second(bexpr__$1);
return (vf.cljs$core$IFn$_invoke$arity$1 ? vf.cljs$core$IFn$_invoke$arity$1(G__67554) : vf.call(null,G__67554));
}

}
})(bexpr);
}));

(bfuncs.parsing.bexpr__GT_bobj.cljs$lang$maxFixedArity = 2);

bfuncs.parsing.xor = (function bfuncs$parsing$xor(var_args){
var G__67560 = arguments.length;
switch (G__67560) {
case 1:
return bfuncs.parsing.xor.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
var args_arr__4757__auto__ = [];
var len__4736__auto___67646 = arguments.length;
var i__4737__auto___67647 = (0);
while(true){
if((i__4737__auto___67647 < len__4736__auto___67646)){
args_arr__4757__auto__.push((arguments[i__4737__auto___67647]));

var G__67648 = (i__4737__auto___67647 + (1));
i__4737__auto___67647 = G__67648;
continue;
} else {
}
break;
}

var argseq__4758__auto__ = (new cljs.core.IndexedSeq(args_arr__4757__auto__.slice((1)),(0),null));
return bfuncs.parsing.xor.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4758__auto__);

}
});

(bfuncs.parsing.xor.cljs$core$IFn$_invoke$arity$1 = (function (x){
return x;
}));

(bfuncs.parsing.xor.cljs$core$IFn$_invoke$arity$variadic = (function (x,more){
return cljs.core.odd_QMARK_(cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p1__67556_SHARP_,p2__67555_SHARP_){
if(cljs.core.truth_(p2__67555_SHARP_)){
return (p1__67556_SHARP_ + (1));
} else {
return p1__67556_SHARP_;
}
}),(cljs.core.truth_(x)?(1):(0)),more));
}));

/** @this {Function} */
(bfuncs.parsing.xor.cljs$lang$applyTo = (function (seq67558){
var G__67559 = cljs.core.first(seq67558);
var seq67558__$1 = cljs.core.next(seq67558);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__67559,seq67558__$1);
}));

(bfuncs.parsing.xor.cljs$lang$maxFixedArity = (1));

bfuncs.parsing.xand = (function bfuncs$parsing$xand(var_args){
var G__67567 = arguments.length;
switch (G__67567) {
case 1:
return bfuncs.parsing.xand.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
var args_arr__4757__auto__ = [];
var len__4736__auto___67650 = arguments.length;
var i__4737__auto___67651 = (0);
while(true){
if((i__4737__auto___67651 < len__4736__auto___67650)){
args_arr__4757__auto__.push((arguments[i__4737__auto___67651]));

var G__67652 = (i__4737__auto___67651 + (1));
i__4737__auto___67651 = G__67652;
continue;
} else {
}
break;
}

var argseq__4758__auto__ = (new cljs.core.IndexedSeq(args_arr__4757__auto__.slice((1)),(0),null));
return bfuncs.parsing.xand.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4758__auto__);

}
});

(bfuncs.parsing.xand.cljs$core$IFn$_invoke$arity$1 = (function (x){
return cljs.core.not(x);
}));

(bfuncs.parsing.xand.cljs$core$IFn$_invoke$arity$variadic = (function (x,more){
return cljs.core.even_QMARK_(cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p1__67563_SHARP_,p2__67562_SHARP_){
if(cljs.core.truth_(p2__67562_SHARP_)){
return (p1__67563_SHARP_ + (1));
} else {
return p1__67563_SHARP_;
}
}),(cljs.core.truth_(x)?(1):(0)),more));
}));

/** @this {Function} */
(bfuncs.parsing.xand.cljs$lang$applyTo = (function (seq67565){
var G__67566 = cljs.core.first(seq67565);
var seq67565__$1 = cljs.core.next(seq67565);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__67566,seq67565__$1);
}));

(bfuncs.parsing.xand.cljs$lang$maxFixedArity = (1));

bfuncs.parsing.__GT_bfn = (function bfuncs$parsing$__GT_bfn(bobj){
var boperators = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"AND","AND",1519433640),new cljs.core.Symbol(null,"and","and",668631710,null),new cljs.core.Keyword(null,"OR","OR",-1220615924),new cljs.core.Symbol(null,"or","or",1876275696,null),new cljs.core.Keyword(null,"NOT","NOT",-1689245341),new cljs.core.Symbol(null,"not","not",1044554643,null),new cljs.core.Keyword(null,"XNOR","XNOR",1530244797),new cljs.core.Symbol(null,"xand","xand",-917538783,null),new cljs.core.Keyword(null,"XOR","XOR",-682432949),new cljs.core.Symbol(null,"xor","xor",520589273,null)], null);
var vars = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.sorted_set());
var go = (function bfuncs$parsing$__GT_bfn_$_go(x){
var vec__67576 = bfuncs.parsing.operation_operands.cljs$core$IFn$_invoke$arity$1(x);
var op = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67576,(0),null);
var operands = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67576,(1),null);
var G__67579 = op;
var G__67579__$1 = (((G__67579 instanceof cljs.core.Keyword))?G__67579.fqn:null);
switch (G__67579__$1) {
case "TRUE":
return true;

break;
case "FALSE":
return false;

break;
case "var":
var v = cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(cljs.core.first(operands));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(vars,cljs.core.conj,v);

return v;

break;
case "AND":
case "OR":
case "XOR":
case "XNOR":
case "NOT":
return cljs.core.list_STAR_.cljs$core$IFn$_invoke$arity$2((boperators.cljs$core$IFn$_invoke$arity$1 ? boperators.cljs$core$IFn$_invoke$arity$1(op) : boperators.call(null,op)),cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2(bfuncs$parsing$__GT_bfn_$_go,operands)));

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__67579__$1)].join('')));

}
});
var precpt = go((cljs.core.truth_(bfuncs.utils.hiccup_tag.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),bobj))?cljs.core.second(bobj):bobj));
var vv = cljs.core.vec(cljs.core.deref(vars));
var ef = (new cljs.core.List(null,new cljs.core.Symbol(null,"fn","fn",465265323,null),(new cljs.core.List(null,vv,(new cljs.core.List(null,precpt,null,(1),null)),(2),null)),(3),null));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [vv,ef], null);
});
bfuncs.parsing.__GT_fn = (function bfuncs$parsing$__GT_fn(expr,vars){
var var_map = cljs.core.zipmap(vars,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__67583_SHARP_){
return ["x",cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__67583_SHARP_)].join('');
}),cljs.core.range.cljs$core$IFn$_invoke$arity$0()));
var body = bfuncs.parsing.walk_with.cljs$core$IFn$_invoke$arity$2((function bfuncs$parsing$__GT_fn_$_go(x){
var vec__67587 = bfuncs.parsing.operation_operands.cljs$core$IFn$_invoke$arity$1(x);
var op = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67587,(0),null);
var operands = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67587,(1),null);
var G__67590 = op;
var G__67590__$1 = (((G__67590 instanceof cljs.core.Keyword))?G__67590.fqn:null);
switch (G__67590__$1) {
case "TRUE":
return "true";

break;
case "FALSE":
return "false";

break;
case "var":
var G__67591 = cljs.core.first(operands);
return (var_map.cljs$core$IFn$_invoke$arity$1 ? var_map.cljs$core$IFn$_invoke$arity$1(G__67591) : var_map.call(null,G__67591));

break;
case "NOT":
return ["!(",cljs.core.str.cljs$core$IFn$_invoke$arity$1(bfuncs$parsing$__GT_fn_$_go(cljs.core.first(operands))),")"].join('');

break;
case "AND":
case "OR":
return bfuncs.utils.str_join.cljs$core$IFn$_invoke$arity$5("(",(function (){var fexpr__67592 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"AND","AND",1519433640)," && ",new cljs.core.Keyword(null,"OR","OR",-1220615924)," || "], null);
return (fexpr__67592.cljs$core$IFn$_invoke$arity$1 ? fexpr__67592.cljs$core$IFn$_invoke$arity$1(op) : fexpr__67592.call(null,op));
})(),")",bfuncs$parsing$__GT_fn_$_go,operands);

break;
case "XOR":
case "XNOR":
return bfuncs.utils.str_join.cljs$core$IFn$_invoke$arity$5((function (){var fexpr__67593 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"XOR","XOR",-682432949),"(xor(",new cljs.core.Keyword(null,"XNOR","XNOR",1530244797),"(!xor("], null);
return (fexpr__67593.cljs$core$IFn$_invoke$arity$1 ? fexpr__67593.cljs$core$IFn$_invoke$arity$1(op) : fexpr__67593.call(null,op));
})(),",","))",bfuncs$parsing$__GT_fn_$_go,operands);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__67590__$1)].join('')));

}
}),expr);
return Function(bfuncs.utils.str_join.cljs$core$IFn$_invoke$arity$5("[",",","]",cljs.core.val,var_map),["const xor=(...xs)=>xs.reduce((a,b)=>(b===false||b===null)?a:!a,false);\n           return ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(body),";"].join(''));
});
bfuncs.parsing.pr_body = (function bfuncs$parsing$pr_body(var_map,expr){
var sb = (new goog.string.StringBuffer());
var writer = (new cljs.core.StringBufferWriter(sb));
var eq_QMARK_ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(false);
var pr_binop = (function bfuncs$parsing$pr_body_$_pr_binop(writer__$1,start,x1,mid,x2,end){
cljs.core._write(writer__$1,start);

go(x1,writer__$1);

cljs.core._write(writer__$1,mid);

go(x2,writer__$1);

return cljs.core._write(writer__$1,end);
});
var go = (function bfuncs$parsing$pr_body_$_go(x,writer__$1){
var vec__67611 = bfuncs.parsing.operation_operands.cljs$core$IFn$_invoke$arity$1(x);
var op = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67611,(0),null);
var operands = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67611,(1),null);
var G__67614 = op;
var G__67614__$1 = (((G__67614 instanceof cljs.core.Keyword))?G__67614.fqn:null);
switch (G__67614__$1) {
case "TRUE":
return cljs.core._write(writer__$1,"true");

break;
case "FALSE":
return cljs.core._write(writer__$1,"false");

break;
case "var":
return cljs.core._write(writer__$1,(function (){var G__67616 = cljs.core.first(operands);
return (var_map.cljs$core$IFn$_invoke$arity$1 ? var_map.cljs$core$IFn$_invoke$arity$1(G__67616) : var_map.call(null,G__67616));
})());

break;
case "NOT":
cljs.core._write(writer__$1,"!(");

bfuncs$parsing$pr_body_$_go(cljs.core.first(operands),writer__$1);

return cljs.core._write(writer__$1,")");

break;
case "AND":
case "NAND":
case "OR":
case "NOR":
case "XOR":
case "XNOR":
return cljs.core.pr_sequential_writer(writer__$1,bfuncs$parsing$pr_body_$_go,(function (){var G__67617 = op;
var G__67617__$1 = (((G__67617 instanceof cljs.core.Keyword))?G__67617.fqn:null);
switch (G__67617__$1) {
case "NOR":
case "NAND":
return "!(";

break;
default:
return "(";

}
})(),(function (){var G__67618 = op;
var G__67618__$1 = (((G__67618 instanceof cljs.core.Keyword))?G__67618.fqn:null);
switch (G__67618__$1) {
case "AND":
case "NAND":
return " && ";

break;
case "OR":
case "NOR":
return " || ";

break;
case "XOR":
return " != ";

break;
case "XNOR":
return " == ";

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__67618__$1)].join('')));

}
})(),")",null,operands);

break;
case "EQ":
case "NEQ":
cljs.core.reset_BANG_(eq_QMARK_,true);

return cljs.core.pr_sequential_writer(writer__$1,bfuncs$parsing$pr_body_$_go,(function (){var G__67619 = op;
var G__67619__$1 = (((G__67619 instanceof cljs.core.Keyword))?G__67619.fqn:null);
switch (G__67619__$1) {
case "EQ":
return "eq(";

break;
case "NEQ":
return "!eq(";

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__67619__$1)].join('')));

}
})(),",",")",null,operands);

break;
case "IMP":
return pr_binop(writer__$1,"(!(",cljs.core.first(operands),") || ",cljs.core.second(operands),")");

break;
case "NIMP":
return pr_binop(writer__$1,"(",cljs.core.first(operands)," && !(",cljs.core.second(operands),"))");

break;
case "CON":
return pr_binop(writer__$1,"(",cljs.core.first(operands)," || !(",cljs.core.second(operands),"))");

break;
case "NCON":
return pr_binop(writer__$1,"(!(",cljs.core.first(operands),") && ",cljs.core.second(operands),")");

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__67614__$1)].join('')));

}
});
writer.cljs$core$IWriter$_write$arity$2(null,"return ");

go(expr,writer);

writer.cljs$core$IWriter$_write$arity$2(null,";");

writer.cljs$core$IWriter$_flush$arity$1(null);

return [(cljs.core.truth_(cljs.core.deref(eq_QMARK_))?"const eq = (x1, ...xs) => { for (const x of xs) if (x != x1) return false; return true; }; ":null),cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb)].join('');
});
bfuncs.parsing.__GT_js_fn = (function bfuncs$parsing$__GT_js_fn(vars,expr){
var var_map = cljs.core.zipmap(vars,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__67620_SHARP_){
return ["x",cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__67620_SHARP_)].join('');
}),cljs.core.range.cljs$core$IFn$_invoke$arity$0()));
return Function(bfuncs.utils.str_join.cljs$core$IFn$_invoke$arity$5("[",",","]",cljs.core.val,var_map),bfuncs.parsing.pr_body(var_map,expr));
});
bfuncs.parsing.__GT_bytes = (function bfuncs$parsing$__GT_bytes(vars,expr){
return module$bfuncs$jsUtils.functionBytes(bfuncs.parsing.__GT_js_fn(vars,expr),cljs.core.count(vars));
});
bfuncs.parsing.__GT_js_fn_strs = (function bfuncs$parsing$__GT_js_fn_strs(vars,expr){
var var_map = cljs.core.zipmap(vars,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__67621_SHARP_){
return ["x",cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__67621_SHARP_)].join('');
}),cljs.core.range.cljs$core$IFn$_invoke$arity$0()));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [bfuncs.utils.str_join.cljs$core$IFn$_invoke$arity$5("[",",","]",cljs.core.val,var_map),bfuncs.parsing.pr_body(var_map,expr)], null);
});
bfuncs.parsing.variables = (function bfuncs$parsing$variables(expr){
var vars = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.transient$(cljs.core.PersistentHashSet.EMPTY));
(function bfuncs$parsing$variables_$_go(x){
var vec__67622 = bfuncs.parsing.operation_operands.cljs$core$IFn$_invoke$arity$1(x);
var op = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67622,(0),null);
var operands = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67622,(1),null);
var G__67625 = op;
var G__67625__$1 = (((G__67625 instanceof cljs.core.Keyword))?G__67625.fqn:null);
switch (G__67625__$1) {
case "var":
if(cljs.core.truth_(bfuncs.utils.hiccup_tag.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("instaparse","failure","instaparse/failure",1422918607),cljs.core.first(operands)))){
return null;
} else {
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(vars,cljs.core.conj_BANG_,cljs.core.first(operands));
}

break;
case "TRUE":
case "FALSE":
case "instaparse/failure":
return null;

break;
default:
return cljs.core.run_BANG_(bfuncs$parsing$variables_$_go,operands);

}
})(expr);

return cljs.core.vec(cljs.core.sort.cljs$core$IFn$_invoke$arity$1(cljs.core.persistent_BANG_(cljs.core.deref(vars))));
});
bfuncs.parsing.js__GT_bobj = (function bfuncs$parsing$js__GT_bobj(expr){
return (function bfuncs$parsing$js__GT_bobj_$_go(x){
if(cljs.core.array_QMARK_(x)){
var temp__27540__auto__ = cljs.core.first(x);
var op = temp__27540__auto__;
var G__67626 = temp__27540__auto__;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("expr",G__67626)){
return bfuncs$parsing$js__GT_bobj_$_go(cljs.core.second(x));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("var",G__67626)){
return cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$1(cljs.core.second(x));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("TRUE",G__67626)){
return true;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(true,G__67626)){
return true;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("FALSE",G__67626)){
return false;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(false,G__67626)){
return false;
} else {
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(bfuncs.algebra.operator.cljs$core$IFn$_invoke$arity$1(cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(op)),cljs.core.map.cljs$core$IFn$_invoke$arity$2(bfuncs$parsing$js__GT_bobj_$_go,cljs.core.rest(x)));

}
}
}
}
}
}
} else {
return cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$1(x);
}
})(expr);
});
bfuncs.parsing.js__GT_bobj_and_vars = (function bfuncs$parsing$js__GT_bobj_and_vars(expr){
var vars = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.transient$(cljs.core.PersistentHashSet.EMPTY));
var as_var = (function (x){
var v = cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$1(x);
if(cljs.core.boolean_QMARK_(v)){
} else {
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(vars,cljs.core.conj_BANG_,v);
}

return v;
});
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function bfuncs$parsing$js__GT_bobj_and_vars_$_go(x){
if(cljs.core.array_QMARK_(x)){
var temp__27540__auto__ = cljs.core.first(x);
var op = temp__27540__auto__;
var G__67627 = temp__27540__auto__;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("expr",G__67627)){
return bfuncs$parsing$js__GT_bobj_and_vars_$_go(cljs.core.second(x));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("var",G__67627)){
return as_var(cljs.core.second(x));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("TRUE",G__67627)){
return true;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(true,G__67627)){
return true;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("FALSE",G__67627)){
return false;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(false,G__67627)){
return false;
} else {
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(bfuncs.algebra.operator.cljs$core$IFn$_invoke$arity$1(cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(op)),cljs.core.map.cljs$core$IFn$_invoke$arity$2(bfuncs$parsing$js__GT_bobj_and_vars_$_go,cljs.core.rest(x)));

}
}
}
}
}
}
} else {
return as_var(x);
}
})(expr),cljs.core.vec(cljs.core.sort.cljs$core$IFn$_invoke$arity$1(cljs.core.persistent_BANG_(cljs.core.deref(vars))))], null);
});

//# sourceMappingURL=bfuncs.parsing.js.map
