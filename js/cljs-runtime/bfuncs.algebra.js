goog.provide('bfuncs.algebra');
bfuncs.algebra.first_if_singleton = (function bfuncs$algebra$first_if_singleton(x){
if(bfuncs.utils.singleton_QMARK_(x)){
return cljs.core.first(x);
} else {
return x;
}
});

bfuncs.algebra.echo_mma = (function bfuncs$algebra$echo_mma(x){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.prn_str_with_opts(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [x], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mathematica","mathematica",-1921239971),true], null))], 0));

return x;
});
bfuncs.algebra.operator = (function bfuncs$algebra$operator(var_args){
var G__67243 = arguments.length;
switch (G__67243) {
case 1:
return bfuncs.algebra.operator.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return bfuncs.algebra.operator.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(bfuncs.algebra.operator.cljs$core$IFn$_invoke$arity$1 = (function (op){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(bfuncs.algebra.operators,op);
}));

(bfuncs.algebra.operator.cljs$core$IFn$_invoke$arity$2 = (function (op,simp){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2((cljs.core.truth_(simp)?bfuncs.algebra.simplifying_operators:bfuncs.algebra.operators),op);
}));

(bfuncs.algebra.operator.cljs$lang$maxFixedArity = 2);

bfuncs.algebra.get_operators = (function bfuncs$algebra$get_operators(var_args){
var args__4742__auto__ = [];
var len__4736__auto___67458 = arguments.length;
var i__4737__auto___67459 = (0);
while(true){
if((i__4737__auto___67459 < len__4736__auto___67458)){
args__4742__auto__.push((arguments[i__4737__auto___67459]));

var G__67460 = (i__4737__auto___67459 + (1));
i__4737__auto___67459 = G__67460;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return bfuncs.algebra.get_operators.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(bfuncs.algebra.get_operators.cljs$core$IFn$_invoke$arity$variadic = (function (simp,ops){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((cljs.core.truth_(simp)?bfuncs.algebra.simplifying_operators:bfuncs.algebra.operators),ops);
}));

(bfuncs.algebra.get_operators.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(bfuncs.algebra.get_operators.cljs$lang$applyTo = (function (seq67244){
var G__67245 = cljs.core.first(seq67244);
var seq67244__$1 = cljs.core.next(seq67244);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__67245,seq67244__$1);
}));

bfuncs.algebra.operation_QMARK_ = (function bfuncs$algebra$operation_QMARK_(op,x){
if(cljs.core.set_QMARK_(op)){
return cljs.core.contains_QMARK_(op,x);
} else {
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(op,bfuncs.data.operation(x));
}
});
/**
 * Returns true if (operation x) is :OR
 */
bfuncs.algebra.bsum_QMARK_ = (function bfuncs$algebra$bsum_QMARK_(x){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"OR","OR",-1220615924),bfuncs.data.operation(x));
});
/**
 * Returns true if (operation x) is :AND
 */
bfuncs.algebra.bprod_QMARK_ = (function bfuncs$algebra$bprod_QMARK_(x){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"AND","AND",1519433640),bfuncs.data.operation(x));
});
/**
 * Returns true if (operation x) is :XOR
 */
bfuncs.algebra.bxsum_QMARK_ = (function bfuncs$algebra$bxsum_QMARK_(x){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"XOR","XOR",-682432949),bfuncs.data.operation(x));
});
/**
 * Returns true if (operation x) is :XNOR
 */
bfuncs.algebra.bxprod_QMARK_ = (function bfuncs$algebra$bxprod_QMARK_(x){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"XNOR","XNOR",1530244797),bfuncs.data.operation(x));
});
/**
 * Returns true if (operation x) is :XOR or :XNOR
 */
bfuncs.algebra.bxop_QMARK_ = (function bfuncs$algebra$bxop_QMARK_(x){
return cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"XOR","XOR",-682432949),null,new cljs.core.Keyword(null,"XNOR","XNOR",1530244797),null], null), null),bfuncs.data.operation(x));
});
/**
 * Returns true if (operation x) is :NOT
 */
bfuncs.algebra.bnot_QMARK_ = (function bfuncs$algebra$bnot_QMARK_(x){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"NOT","NOT",-1689245341),bfuncs.data.operation(x));
});
/**
 * Returns true if (operation x) is nil
 */
bfuncs.algebra.bvar_QMARK_ = (function bfuncs$algebra$bvar_QMARK_(x){
return (bfuncs.data.operation(x) == null);
});
bfuncs.algebra._annihilator = (function bfuncs$algebra$_annihilator(op){
var G__67251 = op;
var G__67251__$1 = (((G__67251 instanceof cljs.core.Keyword))?G__67251.fqn:null);
switch (G__67251__$1) {
case "OR":
return true;

break;
case "AND":
return false;

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__67251__$1)].join('')));

}
});
bfuncs.algebra._identity = (function bfuncs$algebra$_identity(op){
var G__67252 = op;
var G__67252__$1 = (((G__67252 instanceof cljs.core.Keyword))?G__67252.fqn:null);
switch (G__67252__$1) {
case "OR":
return false;

break;
case "AND":
return true;

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__67252__$1)].join('')));

}
});
/**
 * Returns true if the given form is valid w.r.t. the specification spec.
 * 
 *   The form x is considered valid if either
 *   1. (operation x) is nil, or
 *   2. (spec (operation x)) is non-nil, and for all y in x,
 *   (spec (operation y)) > (spec (operation x)), and y is valid.
 * 
 *   When a comparison function cmp and initial value init are supplied, the second
 *   condition is generalized
 *   2. (spec (operation x)) is non-nil, and for all y in x, y is valid, and
 *   (cmp (spec (operation y)) (spec (operation x))) is logical true.
 *   With (cmp init (spec (operation form))) being the top-level comparison.
 * 
 *   Ex:
 *   (valid-form {:OR 1, :AND 2, :NOT 3} x)
 *   ;; => true if x is a sum of products
 *   (valid-form {:OR 2, :AND 1, :NOT 3} x)
 *   ;; => true if x is a product of sums
 *   (valid-form #{:OR :NOT} and true x)
 *   ;; => true if x is an expression of only :OR and :NOT.
 */
bfuncs.algebra.valid_form_QMARK_ = (function bfuncs$algebra$valid_form_QMARK_(var_args){
var G__67254 = arguments.length;
switch (G__67254) {
case 2:
return bfuncs.algebra.valid_form_QMARK_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return bfuncs.algebra.valid_form_QMARK_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(bfuncs.algebra.valid_form_QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (spec,form){
return bfuncs.algebra.valid_form_QMARK_.cljs$core$IFn$_invoke$arity$4(spec,cljs.core._GT_,-Infinity,form);
}));

(bfuncs.algebra.valid_form_QMARK_.cljs$core$IFn$_invoke$arity$4 = (function (spec,cmp,init,form){
return (function bfuncs$algebra$go(parent_spec,child){
var temp__5733__auto__ = bfuncs.data.operation(child);
if(cljs.core.truth_(temp__5733__auto__)){
var op = temp__5733__auto__;
var temp__5733__auto____$1 = (spec.cljs$core$IFn$_invoke$arity$1 ? spec.cljs$core$IFn$_invoke$arity$1(op) : spec.call(null,op));
if(cljs.core.truth_(temp__5733__auto____$1)){
var child_spec = temp__5733__auto____$1;
var and__4115__auto__ = (cmp.cljs$core$IFn$_invoke$arity$2 ? cmp.cljs$core$IFn$_invoke$arity$2(child_spec,parent_spec) : cmp.call(null,child_spec,parent_spec));
if(cljs.core.truth_(and__4115__auto__)){
return cljs.core.every_QMARK_(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(bfuncs$algebra$go,child_spec),child);
} else {
return and__4115__auto__;
}
} else {
return false;
}
} else {
return true;
}
})(init,form);
}));

(bfuncs.algebra.valid_form_QMARK_.cljs$lang$maxFixedArity = 4);

/**
 * Returns true if x is a bobj representing a sum of products.
 */
bfuncs.algebra.sum_of_prods_QMARK_ = (function bfuncs$algebra$sum_of_prods_QMARK_(x){
return bfuncs.algebra.valid_form_QMARK_.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"OR","OR",-1220615924),(1),new cljs.core.Keyword(null,"AND","AND",1519433640),(2),new cljs.core.Keyword(null,"NOT","NOT",-1689245341),(3)], null),x);
});
/**
 * Returns true if x is a bobj representing a product of sums.
 */
bfuncs.algebra.prod_of_sums_QMARK_ = (function bfuncs$algebra$prod_of_sums_QMARK_(x){
return bfuncs.algebra.valid_form_QMARK_.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"AND","AND",1519433640),(1),new cljs.core.Keyword(null,"OR","OR",-1220615924),(2),new cljs.core.Keyword(null,"NOT","NOT",-1689245341),(3)], null),x);
});
/**
 * Returns true if x is a bobj in algebraic normal form.
 */
bfuncs.algebra.anf_QMARK_ = (function bfuncs$algebra$anf_QMARK_(x){
return bfuncs.algebra.valid_form_QMARK_.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"XOR","XOR",-682432949),(1),new cljs.core.Keyword(null,"AND","AND",1519433640),(2)], null),x);
});
bfuncs.algebra.get_vars = (function bfuncs$algebra$get_vars(bobj){
if(bfuncs.algebra.bvar_QMARK_(bobj)){
return bobj;
} else {
return cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(bfuncs.algebra.get_vars,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([bobj], 0));
}
});
bfuncs.algebra.get_vars_tr = (function bfuncs$algebra$get_vars_tr(bobj){
if(bfuncs.algebra.bvar_QMARK_(bobj)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [bobj,true], null);
} else {
if(((bfuncs.algebra.bnot_QMARK_(bobj)) && (bfuncs.algebra.bvar_QMARK_(cljs.core.first(bobj))))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first(bobj),false], null);
} else {
return cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(bfuncs.algebra.get_vars_tr),bobj);

}
}
});
/**
 * Returns true if x is a factor of y with respect to the operation op
 *   (default :AND).
 */
bfuncs.algebra.bfactor_QMARK_ = (function bfuncs$algebra$bfactor_QMARK_(var_args){
var G__67258 = arguments.length;
switch (G__67258) {
case 2:
return bfuncs.algebra.bfactor_QMARK_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return bfuncs.algebra.bfactor_QMARK_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(bfuncs.algebra.bfactor_QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (x,y){
return bfuncs.algebra.bfactor_QMARK_.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword(null,"AND","AND",1519433640),x,y);
}));

(bfuncs.algebra.bfactor_QMARK_.cljs$core$IFn$_invoke$arity$3 = (function (op,x,y){
var f67266 = (function (p1__67255_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(op,bfuncs.data.operation(p1__67255_SHARP_));
});
if(f67266(x)){
if(f67266(y)){
return clojure.set.subset_QMARK_(x,y);
} else {
return false;
}
} else {
if(f67266(y)){
return cljs.core.contains_QMARK_(y,x);
} else {
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(x,y);
}
}
}));

(bfuncs.algebra.bfactor_QMARK_.cljs$lang$maxFixedArity = 3);

bfuncs.algebra._BANG_ = (function bfuncs$algebra$_BANG_(x){

if(cljs.core.boolean_QMARK_(x)){
return (!(x));
} else {
if(bfuncs.algebra.bnot_QMARK_(x)){
return cljs.core.first(x);
} else {
return bfuncs.data.bool_not(x);

}
}
});
bfuncs.algebra.dual = (function bfuncs$algebra$dual(op){
var G__67268 = op;
var G__67268__$1 = (((G__67268 instanceof cljs.core.Keyword))?G__67268.fqn:null);
switch (G__67268__$1) {
case "TRUE":
return new cljs.core.Keyword(null,"FALSE","FALSE",1063613829);

break;
case "FALSE":
return new cljs.core.Keyword(null,"TRUE","TRUE",494241636);

break;
case "NOT":
return new cljs.core.Keyword(null,"NOT","NOT",-1689245341);

break;
case "ID":
return new cljs.core.Keyword(null,"ID","ID",989302048);

break;
case "OR":
return new cljs.core.Keyword(null,"AND","AND",1519433640);

break;
case "NOR":
return new cljs.core.Keyword(null,"NAND","NAND",-421918697);

break;
case "AND":
return new cljs.core.Keyword(null,"OR","OR",-1220615924);

break;
case "NAND":
return new cljs.core.Keyword(null,"NOR","NOR",1230816390);

break;
case "XOR":
return new cljs.core.Keyword(null,"XNOR","XNOR",1530244797);

break;
case "XNOR":
return new cljs.core.Keyword(null,"XOR","XOR",-682432949);

break;
case "IMP":
return new cljs.core.Keyword(null,"NCON","NCON",625732185);

break;
case "NIMP":
return new cljs.core.Keyword(null,"CON","CON",138413899);

break;
case "CON":
return new cljs.core.Keyword(null,"NIMP","NIMP",-733613840);

break;
case "NCON":
return new cljs.core.Keyword(null,"IMP","IMP",-668216011);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__67268__$1)].join('')));

}
});
bfuncs.algebra.negation = (function bfuncs$algebra$negation(op){
var G__67269 = op;
var G__67269__$1 = (((G__67269 instanceof cljs.core.Keyword))?G__67269.fqn:null);
switch (G__67269__$1) {
case "TRUE":
return new cljs.core.Keyword(null,"FALSE","FALSE",1063613829);

break;
case "FALSE":
return new cljs.core.Keyword(null,"TRUE","TRUE",494241636);

break;
case "NOT":
return new cljs.core.Keyword(null,"ID","ID",989302048);

break;
case "ID":
return new cljs.core.Keyword(null,"NOT","NOT",-1689245341);

break;
case "OR":
return new cljs.core.Keyword(null,"NOR","NOR",1230816390);

break;
case "NOR":
return new cljs.core.Keyword(null,"OR","OR",-1220615924);

break;
case "AND":
return new cljs.core.Keyword(null,"NAND","NAND",-421918697);

break;
case "NAND":
return new cljs.core.Keyword(null,"AND","AND",1519433640);

break;
case "XOR":
return new cljs.core.Keyword(null,"XNOR","XNOR",1530244797);

break;
case "XNOR":
return new cljs.core.Keyword(null,"XOR","XOR",-682432949);

break;
case "IMP":
return new cljs.core.Keyword(null,"NIMP","NIMP",-733613840);

break;
case "NIMP":
return new cljs.core.Keyword(null,"IMP","IMP",-668216011);

break;
case "CON":
return new cljs.core.Keyword(null,"NCON","NCON",625732185);

break;
case "NCON":
return new cljs.core.Keyword(null,"CON","CON",138413899);

break;
case "EQ":
return new cljs.core.Keyword(null,"NEQ","NEQ",-944829411);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__67269__$1)].join('')));

}
});
bfuncs.algebra.cancellation_fn = (function bfuncs$algebra$cancellation_fn(cancel_QMARK_){
return (function (x,y){
var or__4126__auto__ = (cancel_QMARK_.cljs$core$IFn$_invoke$arity$2 ? cancel_QMARK_.cljs$core$IFn$_invoke$arity$2(x,y) : cancel_QMARK_.call(null,x,y));
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(x,bfuncs.algebra._BANG_(y));
}
});
});
bfuncs.algebra.xconj = (function bfuncs$algebra$xconj(xcoll,y,id){
if(cljs.core.contains_QMARK_(xcoll,y)){
var nxc = cljs.core.disj.cljs$core$IFn$_invoke$arity$2(xcoll,y);
var G__67270 = cljs.core.count(nxc);
switch (G__67270) {
case (0):
return id;

break;
case (1):
if(cljs.core.truth_(id)){
return bfuncs.algebra._BANG_(cljs.core.first(nxc));
} else {
return cljs.core.first(nxc);
}

break;
default:
return nxc;

}
} else {
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(xcoll,y);
}
});
bfuncs.algebra.apply_reduction = (function bfuncs$algebra$apply_reduction(rf,x,y,more){
var result = bfuncs.utils.reduce_from(rf,(rf.cljs$core$IFn$_invoke$arity$2 ? rf.cljs$core$IFn$_invoke$arity$2(x,y) : rf.call(null,x,y)),more);
var temp__5737__auto__ = (function (){var G__67272 = result;
var G__67272__$1 = (((G__67272 == null))?null:bfuncs.data.operation(G__67272));
var G__67272__$2 = (((G__67272__$1 == null))?null:cljs.core.name(G__67272__$1));
if((G__67272__$2 == null)){
return null;
} else {
return cljs.core.re_matches(/(.*)'/,G__67272__$2);
}
})();
if((temp__5737__auto__ == null)){
return result;
} else {
var vec__67273 = temp__5737__auto__;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67273,(0),null);
var op = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67273,(1),null);
return bfuncs.data.with_operation(cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(op),result);
}
});
bfuncs.algebra._BAR__BAR_ = (function bfuncs$algebra$_BAR__BAR_(var_args){
var G__67281 = arguments.length;
switch (G__67281) {
case 0:
return bfuncs.algebra._BAR__BAR_.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return bfuncs.algebra._BAR__BAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return bfuncs.algebra._BAR__BAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__4757__auto__ = [];
var len__4736__auto___67469 = arguments.length;
var i__4737__auto___67470 = (0);
while(true){
if((i__4737__auto___67470 < len__4736__auto___67469)){
args_arr__4757__auto__.push((arguments[i__4737__auto___67470]));

var G__67471 = (i__4737__auto___67470 + (1));
i__4737__auto___67470 = G__67471;
continue;
} else {
}
break;
}

var argseq__4758__auto__ = (new cljs.core.IndexedSeq(args_arr__4757__auto__.slice((2)),(0),null));
return bfuncs.algebra._BAR__BAR_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4758__auto__);

}
});

(bfuncs.algebra._BAR__BAR_.cljs$core$IFn$_invoke$arity$0 = (function (){
return false;
}));

(bfuncs.algebra._BAR__BAR_.cljs$core$IFn$_invoke$arity$1 = (function (x){
return x;
}));

(bfuncs.algebra._BAR__BAR_.cljs$core$IFn$_invoke$arity$2 = (function (x,y){
if(((x === true) || (y === true))){
return true;
} else {
if(x === false){
return y;
} else {
if(y === false){
return x;
} else {
var f67294 = (function (p1__67276_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"OR","OR",-1220615924),bfuncs.data.operation(p1__67276_SHARP_));
});
if(f67294(x)){
if(f67294(y)){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(bfuncs.algebra._BAR__BAR_,x,y);
} else {
if(cljs.core.contains_QMARK_(x,y)){
return x;
} else {
if(cljs.core.contains_QMARK_(x,bfuncs.algebra._BANG_(y))){
return true;
} else {
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(x,y);

}
}
}
} else {
if(f67294(y)){
if(cljs.core.contains_QMARK_(y,x)){
return y;
} else {
if(cljs.core.contains_QMARK_(y,bfuncs.algebra._BANG_(x))){
return true;
} else {
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(y,x);

}
}
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(x,y)){
return x;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(x,bfuncs.algebra._BANG_(y))){
return true;
} else {
return bfuncs.data.bool_set.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"OR","OR",-1220615924),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([x,y], 0));

}
}
}
}

}
}
}
}));

(bfuncs.algebra._BAR__BAR_.cljs$core$IFn$_invoke$arity$variadic = (function (x,y,more){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(bfuncs.algebra._BAR__BAR_,bfuncs.algebra._BAR__BAR_.cljs$core$IFn$_invoke$arity$2(x,y),more);
}));

/** @this {Function} */
(bfuncs.algebra._BAR__BAR_.cljs$lang$applyTo = (function (seq67278){
var G__67279 = cljs.core.first(seq67278);
var seq67278__$1 = cljs.core.next(seq67278);
var G__67280 = cljs.core.first(seq67278__$1);
var seq67278__$2 = cljs.core.next(seq67278__$1);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__67279,G__67280,seq67278__$2);
}));

(bfuncs.algebra._BAR__BAR_.cljs$lang$maxFixedArity = (2));

bfuncs.algebra._AMPERSAND__AMPERSAND_ = (function bfuncs$algebra$_AMPERSAND__AMPERSAND_(var_args){
var G__67299 = arguments.length;
switch (G__67299) {
case 0:
return bfuncs.algebra._AMPERSAND__AMPERSAND_.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return bfuncs.algebra._AMPERSAND__AMPERSAND_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return bfuncs.algebra._AMPERSAND__AMPERSAND_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__4757__auto__ = [];
var len__4736__auto___67477 = arguments.length;
var i__4737__auto___67478 = (0);
while(true){
if((i__4737__auto___67478 < len__4736__auto___67477)){
args_arr__4757__auto__.push((arguments[i__4737__auto___67478]));

var G__67479 = (i__4737__auto___67478 + (1));
i__4737__auto___67478 = G__67479;
continue;
} else {
}
break;
}

var argseq__4758__auto__ = (new cljs.core.IndexedSeq(args_arr__4757__auto__.slice((2)),(0),null));
return bfuncs.algebra._AMPERSAND__AMPERSAND_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4758__auto__);

}
});

(bfuncs.algebra._AMPERSAND__AMPERSAND_.cljs$core$IFn$_invoke$arity$0 = (function (){
return true;
}));

(bfuncs.algebra._AMPERSAND__AMPERSAND_.cljs$core$IFn$_invoke$arity$1 = (function (x){
return x;
}));

(bfuncs.algebra._AMPERSAND__AMPERSAND_.cljs$core$IFn$_invoke$arity$2 = (function (x,y){
if(((x === false) || (y === false))){
return false;
} else {
if(x === true){
return y;
} else {
if(y === true){
return x;
} else {
var f67306 = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(bfuncs.algebra.operation_QMARK_,new cljs.core.Keyword(null,"AND","AND",1519433640));
if(cljs.core.truth_(f67306(x))){
if(cljs.core.truth_(f67306(y))){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(bfuncs.algebra._AMPERSAND__AMPERSAND_,x,y);
} else {
if(cljs.core.contains_QMARK_(x,y)){
return x;
} else {
if(cljs.core.contains_QMARK_(x,bfuncs.algebra._BANG_(y))){
return false;
} else {
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(x,y);

}
}
}
} else {
if(cljs.core.truth_(f67306(y))){
if(cljs.core.contains_QMARK_(y,x)){
return y;
} else {
if(cljs.core.contains_QMARK_(y,bfuncs.algebra._BANG_(x))){
return false;
} else {
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(y,x);

}
}
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(x,y)){
return x;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(x,bfuncs.algebra._BANG_(y))){
return false;
} else {
return bfuncs.data.bool_set.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"AND","AND",1519433640),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([x,y], 0));

}
}
}
}

}
}
}
}));

(bfuncs.algebra._AMPERSAND__AMPERSAND_.cljs$core$IFn$_invoke$arity$variadic = (function (x,y,more){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(bfuncs.algebra._AMPERSAND__AMPERSAND_,bfuncs.algebra._AMPERSAND__AMPERSAND_.cljs$core$IFn$_invoke$arity$2(x,y),more);
}));

/** @this {Function} */
(bfuncs.algebra._AMPERSAND__AMPERSAND_.cljs$lang$applyTo = (function (seq67296){
var G__67297 = cljs.core.first(seq67296);
var seq67296__$1 = cljs.core.next(seq67296);
var G__67298 = cljs.core.first(seq67296__$1);
var seq67296__$2 = cljs.core.next(seq67296__$1);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__67297,G__67298,seq67296__$2);
}));

(bfuncs.algebra._AMPERSAND__AMPERSAND_.cljs$lang$maxFixedArity = (2));

bfuncs.algebra._LT__PLUS__GT_ = (function bfuncs$algebra$_LT__PLUS__GT_(var_args){
var G__67311 = arguments.length;
switch (G__67311) {
case 0:
return bfuncs.algebra._LT__PLUS__GT_.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return bfuncs.algebra._LT__PLUS__GT_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return bfuncs.algebra._LT__PLUS__GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__4757__auto__ = [];
var len__4736__auto___67488 = arguments.length;
var i__4737__auto___67489 = (0);
while(true){
if((i__4737__auto___67489 < len__4736__auto___67488)){
args_arr__4757__auto__.push((arguments[i__4737__auto___67489]));

var G__67490 = (i__4737__auto___67489 + (1));
i__4737__auto___67489 = G__67490;
continue;
} else {
}
break;
}

var argseq__4758__auto__ = (new cljs.core.IndexedSeq(args_arr__4757__auto__.slice((2)),(0),null));
return bfuncs.algebra._LT__PLUS__GT_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4758__auto__);

}
});

(bfuncs.algebra._LT__PLUS__GT_.cljs$core$IFn$_invoke$arity$0 = (function (){
return false;
}));

(bfuncs.algebra._LT__PLUS__GT_.cljs$core$IFn$_invoke$arity$1 = (function (x){
return x;
}));

(bfuncs.algebra._LT__PLUS__GT_.cljs$core$IFn$_invoke$arity$2 = (function (x,y){
if(x === false){
return y;
} else {
if(y === false){
return x;
} else {
if(bfuncs.algebra.bxsum_QMARK_(x)){
if(bfuncs.algebra.bxsum_QMARK_(y)){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(bfuncs.algebra._LT__PLUS__GT_,x,y);
} else {
return bfuncs.algebra.xconj(x,y,false);
}
} else {
if(bfuncs.algebra.bxsum_QMARK_(y)){
return bfuncs.algebra.xconj(y,x,false);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(x,y)){
return false;
} else {
return bfuncs.data.bool_set.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"XOR","XOR",-682432949),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([x,y], 0));
}
}
}

}
}
}));

(bfuncs.algebra._LT__PLUS__GT_.cljs$core$IFn$_invoke$arity$variadic = (function (x,y,more){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(bfuncs.algebra._LT__PLUS__GT_,bfuncs.algebra._LT__PLUS__GT_.cljs$core$IFn$_invoke$arity$2(x,y),more);
}));

/** @this {Function} */
(bfuncs.algebra._LT__PLUS__GT_.cljs$lang$applyTo = (function (seq67308){
var G__67309 = cljs.core.first(seq67308);
var seq67308__$1 = cljs.core.next(seq67308);
var G__67310 = cljs.core.first(seq67308__$1);
var seq67308__$2 = cljs.core.next(seq67308__$1);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__67309,G__67310,seq67308__$2);
}));

(bfuncs.algebra._LT__PLUS__GT_.cljs$lang$maxFixedArity = (2));

bfuncs.algebra.reducing__BANG__BAR__BAR_ = (function bfuncs$algebra$reducing__BANG__BAR__BAR_(x,y){
if(((x === true) || (y === true))){
return cljs.core.reduced(false);
} else {
if(x === false){
return bfuncs.algebra._BANG_(y);
} else {
if(y === false){
return bfuncs.algebra._BANG_(x);
} else {
if(bfuncs.algebra.operation_QMARK_(new cljs.core.Keyword(null,"NOR'","NOR'",733305567),x)){
if(cljs.core.contains_QMARK_(x,y)){
return x;
} else {
if(cljs.core.contains_QMARK_(x,bfuncs.algebra._BANG_(y))){
return cljs.core.reduced(false);
} else {
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(x,y);

}
}
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(x,y)){
return bfuncs.algebra._BANG_(x);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(x,bfuncs.algebra._BANG_(y))){
return cljs.core.reduced(false);
} else {
return bfuncs.data.bool_set.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"NOR'","NOR'",733305567),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([x,y], 0));

}
}
}

}
}
}
});
bfuncs.algebra._BANG__BAR__BAR_ = (function bfuncs$algebra$_BANG__BAR__BAR_(var_args){
var G__67322 = arguments.length;
switch (G__67322) {
case 0:
return bfuncs.algebra._BANG__BAR__BAR_.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return bfuncs.algebra._BANG__BAR__BAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return bfuncs.algebra._BANG__BAR__BAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__4757__auto__ = [];
var len__4736__auto___67498 = arguments.length;
var i__4737__auto___67499 = (0);
while(true){
if((i__4737__auto___67499 < len__4736__auto___67498)){
args_arr__4757__auto__.push((arguments[i__4737__auto___67499]));

var G__67500 = (i__4737__auto___67499 + (1));
i__4737__auto___67499 = G__67500;
continue;
} else {
}
break;
}

var argseq__4758__auto__ = (new cljs.core.IndexedSeq(args_arr__4757__auto__.slice((2)),(0),null));
return bfuncs.algebra._BANG__BAR__BAR_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4758__auto__);

}
});

(bfuncs.algebra._BANG__BAR__BAR_.cljs$core$IFn$_invoke$arity$0 = (function (){
return true;
}));

(bfuncs.algebra._BANG__BAR__BAR_.cljs$core$IFn$_invoke$arity$1 = (function (x){
return bfuncs.algebra._BANG_(x);
}));

(bfuncs.algebra._BANG__BAR__BAR_.cljs$core$IFn$_invoke$arity$2 = (function (x,y){
if(((x === true) || (y === true))){
return false;
} else {
if(x === false){
return bfuncs.algebra._BANG_(y);
} else {
if(y === false){
return bfuncs.algebra._BANG_(x);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(x,y)){
return bfuncs.algebra._BANG_(x);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(x,bfuncs.algebra._BANG_(y))){
return false;
} else {
return bfuncs.data.bool_set.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"NOR","NOR",1230816390),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([x,y], 0));

}
}
}
}
}
}));

(bfuncs.algebra._BANG__BAR__BAR_.cljs$core$IFn$_invoke$arity$variadic = (function (x,y,more){
return bfuncs.algebra.apply_reduction(bfuncs.algebra.reducing__BANG__BAR__BAR_,x,y,more);
}));

/** @this {Function} */
(bfuncs.algebra._BANG__BAR__BAR_.cljs$lang$applyTo = (function (seq67319){
var G__67320 = cljs.core.first(seq67319);
var seq67319__$1 = cljs.core.next(seq67319);
var G__67321 = cljs.core.first(seq67319__$1);
var seq67319__$2 = cljs.core.next(seq67319__$1);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__67320,G__67321,seq67319__$2);
}));

(bfuncs.algebra._BANG__BAR__BAR_.cljs$lang$maxFixedArity = (2));

bfuncs.algebra.reducing__BANG__AMPERSAND__AMPERSAND_ = (function bfuncs$algebra$reducing__BANG__AMPERSAND__AMPERSAND_(x,y){
if(((x === false) || (y === false))){
return cljs.core.reduced(true);
} else {
if(x === true){
return bfuncs.algebra._BANG_(y);
} else {
if(y === true){
return bfuncs.algebra._BANG_(x);
} else {
if(bfuncs.algebra.operation_QMARK_(new cljs.core.Keyword(null,"NAND'","NAND'",-238533908),x)){
if(cljs.core.contains_QMARK_(x,y)){
return x;
} else {
if(cljs.core.contains_QMARK_(x,bfuncs.algebra._BANG_(y))){
return cljs.core.reduced(true);
} else {
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(x,y);

}
}
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(x,y)){
return bfuncs.algebra._BANG_(x);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(x,bfuncs.algebra._BANG_(y))){
return cljs.core.reduced(true);
} else {
return bfuncs.data.bool_set.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"NAND'","NAND'",-238533908),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([x,y], 0));

}
}
}

}
}
}
});
bfuncs.algebra._BANG__AMPERSAND__AMPERSAND_ = (function bfuncs$algebra$_BANG__AMPERSAND__AMPERSAND_(var_args){
var G__67327 = arguments.length;
switch (G__67327) {
case 0:
return bfuncs.algebra._BANG__AMPERSAND__AMPERSAND_.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return bfuncs.algebra._BANG__AMPERSAND__AMPERSAND_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return bfuncs.algebra._BANG__AMPERSAND__AMPERSAND_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__4757__auto__ = [];
var len__4736__auto___67502 = arguments.length;
var i__4737__auto___67503 = (0);
while(true){
if((i__4737__auto___67503 < len__4736__auto___67502)){
args_arr__4757__auto__.push((arguments[i__4737__auto___67503]));

var G__67504 = (i__4737__auto___67503 + (1));
i__4737__auto___67503 = G__67504;
continue;
} else {
}
break;
}

var argseq__4758__auto__ = (new cljs.core.IndexedSeq(args_arr__4757__auto__.slice((2)),(0),null));
return bfuncs.algebra._BANG__AMPERSAND__AMPERSAND_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4758__auto__);

}
});

(bfuncs.algebra._BANG__AMPERSAND__AMPERSAND_.cljs$core$IFn$_invoke$arity$0 = (function (){
return false;
}));

(bfuncs.algebra._BANG__AMPERSAND__AMPERSAND_.cljs$core$IFn$_invoke$arity$1 = (function (x){
return bfuncs.algebra._BANG_(x);
}));

(bfuncs.algebra._BANG__AMPERSAND__AMPERSAND_.cljs$core$IFn$_invoke$arity$2 = (function (x,y){
if(((x === false) || (y === false))){
return true;
} else {
if(x === true){
return bfuncs.algebra._BANG_(y);
} else {
if(y === true){
return bfuncs.algebra._BANG_(x);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(x,y)){
return bfuncs.algebra._BANG_(x);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(x,bfuncs.algebra._BANG_(y))){
return true;
} else {
return bfuncs.data.bool_set.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"NAND","NAND",-421918697),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([x,y], 0));

}
}
}
}
}
}));

(bfuncs.algebra._BANG__AMPERSAND__AMPERSAND_.cljs$core$IFn$_invoke$arity$variadic = (function (x,y,more){
return bfuncs.algebra.apply_reduction(bfuncs.algebra.reducing__BANG__AMPERSAND__AMPERSAND_,x,y,more);
}));

/** @this {Function} */
(bfuncs.algebra._BANG__AMPERSAND__AMPERSAND_.cljs$lang$applyTo = (function (seq67324){
var G__67325 = cljs.core.first(seq67324);
var seq67324__$1 = cljs.core.next(seq67324);
var G__67326 = cljs.core.first(seq67324__$1);
var seq67324__$2 = cljs.core.next(seq67324__$1);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__67325,G__67326,seq67324__$2);
}));

(bfuncs.algebra._BANG__AMPERSAND__AMPERSAND_.cljs$lang$maxFixedArity = (2));

bfuncs.algebra._LT__STAR__GT_ = (function bfuncs$algebra$_LT__STAR__GT_(var_args){
var G__67332 = arguments.length;
switch (G__67332) {
case 0:
return bfuncs.algebra._LT__STAR__GT_.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return bfuncs.algebra._LT__STAR__GT_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return bfuncs.algebra._LT__STAR__GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__4757__auto__ = [];
var len__4736__auto___67513 = arguments.length;
var i__4737__auto___67514 = (0);
while(true){
if((i__4737__auto___67514 < len__4736__auto___67513)){
args_arr__4757__auto__.push((arguments[i__4737__auto___67514]));

var G__67516 = (i__4737__auto___67514 + (1));
i__4737__auto___67514 = G__67516;
continue;
} else {
}
break;
}

var argseq__4758__auto__ = (new cljs.core.IndexedSeq(args_arr__4757__auto__.slice((2)),(0),null));
return bfuncs.algebra._LT__STAR__GT_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4758__auto__);

}
});

(bfuncs.algebra._LT__STAR__GT_.cljs$core$IFn$_invoke$arity$0 = (function (){
return true;
}));

(bfuncs.algebra._LT__STAR__GT_.cljs$core$IFn$_invoke$arity$1 = (function (x){
return bfuncs.algebra._BANG_(x);
}));

(bfuncs.algebra._LT__STAR__GT_.cljs$core$IFn$_invoke$arity$2 = (function (x,y){
if(x === false){
return bfuncs.algebra._BANG_(y);
} else {
if(y === false){
return bfuncs.algebra._BANG_(x);
} else {
if(bfuncs.algebra.bxprod_QMARK_(x)){
if(bfuncs.algebra.bxprod_QMARK_(y)){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(bfuncs.algebra._LT__STAR__GT_,x,y);
} else {
return bfuncs.algebra.xconj(x,y,true);
}
} else {
if(bfuncs.algebra.bxprod_QMARK_(y)){
return bfuncs.algebra.xconj(y,x,true);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(x,y)){
return true;
} else {
return bfuncs.data.bool_set.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"XNOR","XNOR",1530244797),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([x,y], 0));
}
}
}

}
}
}));

(bfuncs.algebra._LT__STAR__GT_.cljs$core$IFn$_invoke$arity$variadic = (function (x,y,more){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(bfuncs.algebra._LT__STAR__GT_,bfuncs.algebra._LT__STAR__GT_.cljs$core$IFn$_invoke$arity$2(x,y),more);
}));

/** @this {Function} */
(bfuncs.algebra._LT__STAR__GT_.cljs$lang$applyTo = (function (seq67329){
var G__67330 = cljs.core.first(seq67329);
var seq67329__$1 = cljs.core.next(seq67329);
var G__67331 = cljs.core.first(seq67329__$1);
var seq67329__$2 = cljs.core.next(seq67329__$1);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__67330,G__67331,seq67329__$2);
}));

(bfuncs.algebra._LT__STAR__GT_.cljs$lang$maxFixedArity = (2));

bfuncs.algebra.reducing__LT__EQ__GT_ = (function bfuncs$algebra$reducing__LT__EQ__GT_(x,y){
if(x === true){
return y;
} else {
if(y === true){
return x;
} else {
if(x === false){
return bfuncs.algebra._BANG_(y);
} else {
if(y === false){
return bfuncs.algebra._BANG_(x);
} else {
if(bfuncs.algebra.operation_QMARK_(new cljs.core.Keyword(null,"EQ'","EQ'",1969693218),x)){
if(cljs.core.contains_QMARK_(x,y)){
return x;
} else {
if(cljs.core.contains_QMARK_(x,bfuncs.algebra._BANG_(y))){
return cljs.core.reduced(false);
} else {
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(x,y);

}
}
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(x,y)){
return cljs.core.reduced(true);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(x,bfuncs.algebra._BANG_(y))){
return cljs.core.reduced(false);
} else {
return bfuncs.data.bool_set.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"EQ'","EQ'",1969693218),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([x,y], 0));

}
}
}

}
}
}
}
});
bfuncs.algebra._LT__EQ__GT_ = (function bfuncs$algebra$_LT__EQ__GT_(var_args){
var G__67343 = arguments.length;
switch (G__67343) {
case 0:
return bfuncs.algebra._LT__EQ__GT_.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return bfuncs.algebra._LT__EQ__GT_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return bfuncs.algebra._LT__EQ__GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__4757__auto__ = [];
var len__4736__auto___67524 = arguments.length;
var i__4737__auto___67525 = (0);
while(true){
if((i__4737__auto___67525 < len__4736__auto___67524)){
args_arr__4757__auto__.push((arguments[i__4737__auto___67525]));

var G__67526 = (i__4737__auto___67525 + (1));
i__4737__auto___67525 = G__67526;
continue;
} else {
}
break;
}

var argseq__4758__auto__ = (new cljs.core.IndexedSeq(args_arr__4757__auto__.slice((2)),(0),null));
return bfuncs.algebra._LT__EQ__GT_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4758__auto__);

}
});

(bfuncs.algebra._LT__EQ__GT_.cljs$core$IFn$_invoke$arity$0 = (function (){
return true;
}));

(bfuncs.algebra._LT__EQ__GT_.cljs$core$IFn$_invoke$arity$1 = (function (x){
return true;
}));

(bfuncs.algebra._LT__EQ__GT_.cljs$core$IFn$_invoke$arity$2 = (function (x,y){
if(x === true){
return y;
} else {
if(y === true){
return x;
} else {
if(x === false){
return bfuncs.algebra._BANG_(y);
} else {
if(y === false){
return bfuncs.algebra._BANG_(x);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(x,y)){
return true;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(x,bfuncs.algebra._BANG_(y))){
return false;
} else {
return bfuncs.data.bool_set.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"EQ","EQ",-205905246),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([x,y], 0));

}
}
}
}
}
}
}));

(bfuncs.algebra._LT__EQ__GT_.cljs$core$IFn$_invoke$arity$variadic = (function (x,y,more){
return bfuncs.algebra.apply_reduction(bfuncs.algebra.reducing__LT__EQ__GT_,x,y,more);
}));

/** @this {Function} */
(bfuncs.algebra._LT__EQ__GT_.cljs$lang$applyTo = (function (seq67340){
var G__67341 = cljs.core.first(seq67340);
var seq67340__$1 = cljs.core.next(seq67340);
var G__67342 = cljs.core.first(seq67340__$1);
var seq67340__$2 = cljs.core.next(seq67340__$1);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__67341,G__67342,seq67340__$2);
}));

(bfuncs.algebra._LT__EQ__GT_.cljs$lang$maxFixedArity = (2));

bfuncs.algebra.reducing__BANG__LT__EQ__GT_ = (function bfuncs$algebra$reducing__BANG__LT__EQ__GT_(x,y){
if(x === true){
return bfuncs.algebra._BANG_(y);
} else {
if(y === true){
return bfuncs.algebra._BANG_(x);
} else {
if(x === false){
return y;
} else {
if(y === false){
return x;
} else {
if(bfuncs.algebra.operation_QMARK_(new cljs.core.Keyword(null,"NEQ'","NEQ'",-1541879264),x)){
if(cljs.core.contains_QMARK_(x,y)){
return x;
} else {
if(cljs.core.contains_QMARK_(x,bfuncs.algebra._BANG_(y))){
return cljs.core.reduced(true);
} else {
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(x,y);

}
}
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(x,y)){
return cljs.core.reduced(false);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(x,bfuncs.algebra._BANG_(y))){
return cljs.core.reduced(true);
} else {
return bfuncs.data.bool_set.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"NEQ'","NEQ'",-1541879264),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([x,y], 0));

}
}
}

}
}
}
}
});
bfuncs.algebra._BANG__LT__EQ__GT_ = (function bfuncs$algebra$_BANG__LT__EQ__GT_(var_args){
var G__67348 = arguments.length;
switch (G__67348) {
case 0:
return bfuncs.algebra._BANG__LT__EQ__GT_.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return bfuncs.algebra._BANG__LT__EQ__GT_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return bfuncs.algebra._BANG__LT__EQ__GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__4757__auto__ = [];
var len__4736__auto___67535 = arguments.length;
var i__4737__auto___67536 = (0);
while(true){
if((i__4737__auto___67536 < len__4736__auto___67535)){
args_arr__4757__auto__.push((arguments[i__4737__auto___67536]));

var G__67537 = (i__4737__auto___67536 + (1));
i__4737__auto___67536 = G__67537;
continue;
} else {
}
break;
}

var argseq__4758__auto__ = (new cljs.core.IndexedSeq(args_arr__4757__auto__.slice((2)),(0),null));
return bfuncs.algebra._BANG__LT__EQ__GT_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4758__auto__);

}
});

(bfuncs.algebra._BANG__LT__EQ__GT_.cljs$core$IFn$_invoke$arity$0 = (function (){
return false;
}));

(bfuncs.algebra._BANG__LT__EQ__GT_.cljs$core$IFn$_invoke$arity$1 = (function (x){
return false;
}));

(bfuncs.algebra._BANG__LT__EQ__GT_.cljs$core$IFn$_invoke$arity$2 = (function (x,y){
if(x === true){
return bfuncs.algebra._BANG_(y);
} else {
if(y === true){
return bfuncs.algebra._BANG_(x);
} else {
if(x === false){
return y;
} else {
if(y === false){
return x;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(x,y)){
return false;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(x,bfuncs.algebra._BANG_(y))){
return true;
} else {
return bfuncs.data.bool_set.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"NEQ","NEQ",-944829411),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([x,y], 0));

}
}
}
}
}
}
}));

(bfuncs.algebra._BANG__LT__EQ__GT_.cljs$core$IFn$_invoke$arity$variadic = (function (x,y,more){
return bfuncs.algebra.apply_reduction(bfuncs.algebra.reducing__BANG__LT__EQ__GT_,x,y,more);
}));

/** @this {Function} */
(bfuncs.algebra._BANG__LT__EQ__GT_.cljs$lang$applyTo = (function (seq67345){
var G__67346 = cljs.core.first(seq67345);
var seq67345__$1 = cljs.core.next(seq67345);
var G__67347 = cljs.core.first(seq67345__$1);
var seq67345__$2 = cljs.core.next(seq67345__$1);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__67346,G__67347,seq67345__$2);
}));

(bfuncs.algebra._BANG__LT__EQ__GT_.cljs$lang$maxFixedArity = (2));

bfuncs.algebra._EQ__EQ__GT_ = (function bfuncs$algebra$_EQ__EQ__GT_(x,y){
if(x === true){
return y;
} else {
if(x === false){
return true;
} else {
if(y === true){
return true;
} else {
if(y === false){
return bfuncs.algebra._BANG_(x);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(x,y)){
return true;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(x,bfuncs.algebra._BANG_(y))){
return y;
} else {
return bfuncs.data.bool_vec.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"IMP","IMP",-668216011),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([x,y], 0));

}
}
}
}
}
}
});
bfuncs.algebra._BANG__EQ__EQ__GT_ = (function bfuncs$algebra$_BANG__EQ__EQ__GT_(x,y){
if(x === true){
return bfuncs.algebra._BANG_(y);
} else {
if(x === false){
return false;
} else {
if(y === true){
return false;
} else {
if(y === false){
return x;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(x,y)){
return false;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(x,bfuncs.algebra._BANG_(y))){
return x;
} else {
return bfuncs.data.bool_vec.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"NIMP","NIMP",-733613840),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([x,y], 0));

}
}
}
}
}
}
});
bfuncs.algebra._LT__EQ__EQ_ = (function bfuncs$algebra$_LT__EQ__EQ_(x,y){
if(x === true){
return true;
} else {
if(x === false){
return bfuncs.algebra._BANG_(y);
} else {
if(y === true){
return x;
} else {
if(y === false){
return true;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(x,y)){
return true;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(x,bfuncs.algebra._BANG_(y))){
return x;
} else {
return bfuncs.data.bool_vec.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"CON","CON",138413899),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([x,y], 0));

}
}
}
}
}
}
});
bfuncs.algebra._BANG__LT__EQ__EQ_ = (function bfuncs$algebra$_BANG__LT__EQ__EQ_(x,y){
if(x === true){
return false;
} else {
if(x === false){
return y;
} else {
if(y === true){
return bfuncs.algebra._BANG_(x);
} else {
if(y === false){
return false;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(x,y)){
return false;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(x,bfuncs.algebra._BANG_(y))){
return y;
} else {
return bfuncs.data.bool_vec.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"NCON","NCON",625732185),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([x,y], 0));

}
}
}
}
}
}
});
bfuncs.algebra._STAR_cancellation_rules_STAR_ = cljs.core.PersistentArrayMap.EMPTY;
bfuncs.algebra._sbconj = (function bfuncs$algebra$_sbconj(xcoll,y){
var op = bfuncs.data.operation(xcoll);
var op_SINGLEQUOTE_ = bfuncs.algebra.dual(op);
if(cljs.core.truth_((function (){var temp__5737__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(bfuncs.algebra._STAR_cancellation_rules_STAR_,op);
if((temp__5737__auto__ == null)){
return cljs.core.contains_QMARK_(xcoll,bfuncs.algebra._BANG_(y));
} else {
var cancel_QMARK_ = temp__5737__auto__;
return cljs.core.some(cljs.core.some_fn.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cancel_QMARK_,y),cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,bfuncs.algebra._BANG_(y))),xcoll);
}
})())){
return bfuncs.algebra._annihilator(op);
} else {
if(cljs.core.truth_(cljs.core.some((function (p1__67349_SHARP_){
return bfuncs.algebra.bfactor_QMARK_.cljs$core$IFn$_invoke$arity$3(op_SINGLEQUOTE_,p1__67349_SHARP_,y);
}),xcoll))){
return xcoll;
} else {
if(cljs.core.truth_(cljs.core.some((function (p1__67350_SHARP_){
return bfuncs.algebra.bfactor_QMARK_.cljs$core$IFn$_invoke$arity$3(op_SINGLEQUOTE_,y,p1__67350_SHARP_);
}),xcoll))){
return bfuncs.algebra.first_if_singleton(cljs.core.into.cljs$core$IFn$_invoke$arity$3(bfuncs.data.bool_set.cljs$core$IFn$_invoke$arity$variadic(op,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([y], 0)),cljs.core.remove.cljs$core$IFn$_invoke$arity$1((function (p1__67351_SHARP_){
return bfuncs.algebra.bfactor_QMARK_.cljs$core$IFn$_invoke$arity$3(op_SINGLEQUOTE_,y,p1__67351_SHARP_);
})),xcoll));
} else {
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(xcoll,y);

}
}
}
});
bfuncs.algebra._sbnew = (function bfuncs$algebra$_sbnew(op,x,y){
var op_SINGLEQUOTE_ = bfuncs.algebra.dual(op);
if(cljs.core.truth_((function (){var or__4126__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(x,bfuncs.algebra._BANG_(y));
if(or__4126__auto__){
return or__4126__auto__;
} else {
var temp__5739__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(bfuncs.algebra._STAR_cancellation_rules_STAR_,op);
if((temp__5739__auto__ == null)){
return null;
} else {
var cancel_QMARK_ = temp__5739__auto__;
return (cancel_QMARK_.cljs$core$IFn$_invoke$arity$2 ? cancel_QMARK_.cljs$core$IFn$_invoke$arity$2(x,y) : cancel_QMARK_.call(null,x,y));
}
}
})())){
return bfuncs.algebra._annihilator(op);
} else {
if(bfuncs.algebra.bfactor_QMARK_.cljs$core$IFn$_invoke$arity$3(op_SINGLEQUOTE_,x,y)){
return x;
} else {
if(bfuncs.algebra.bfactor_QMARK_.cljs$core$IFn$_invoke$arity$3(op_SINGLEQUOTE_,y,x)){
return y;
} else {
return bfuncs.data.bool_set.cljs$core$IFn$_invoke$arity$variadic(op,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([x,y], 0));

}
}
}
});
bfuncs.algebra._soperate = (function bfuncs$algebra$_soperate(op,x,y){
var f67358 = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(bfuncs.algebra.operation_QMARK_,op);
if(cljs.core.truth_(f67358(x))){
if(cljs.core.truth_(f67358(y))){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((bfuncs.algebra.simplifying_operators.cljs$core$IFn$_invoke$arity$1 ? bfuncs.algebra.simplifying_operators.cljs$core$IFn$_invoke$arity$1(op) : bfuncs.algebra.simplifying_operators.call(null,op)),x,y);
} else {
return bfuncs.algebra._sbconj(x,y);
}
} else {
if(cljs.core.truth_(f67358(y))){
return bfuncs.algebra._sbconj(y,x);
} else {
return bfuncs.algebra._sbnew(op,x,y);
}
}
});
/**
 * Simplifying boolean sum.
 * 
 *   Gives a structure logically equivalent to the disjunction of the input.
 *   Nested sums, duplicate terms, and boolean primitives are handled as with |.
 *   In addition, the following transformations are made to boolean structures:
 *  A + A' -> true,
 *  A + AB -> A
 *   Returns false when called with no arguments. 
 */
bfuncs.algebra._BAR__BAR__STAR_ = (function bfuncs$algebra$_BAR__BAR__STAR_(var_args){
var G__67363 = arguments.length;
switch (G__67363) {
case 0:
return bfuncs.algebra._BAR__BAR__STAR_.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return bfuncs.algebra._BAR__BAR__STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return bfuncs.algebra._BAR__BAR__STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__4757__auto__ = [];
var len__4736__auto___67545 = arguments.length;
var i__4737__auto___67546 = (0);
while(true){
if((i__4737__auto___67546 < len__4736__auto___67545)){
args_arr__4757__auto__.push((arguments[i__4737__auto___67546]));

var G__67547 = (i__4737__auto___67546 + (1));
i__4737__auto___67546 = G__67547;
continue;
} else {
}
break;
}

var argseq__4758__auto__ = (new cljs.core.IndexedSeq(args_arr__4757__auto__.slice((2)),(0),null));
return bfuncs.algebra._BAR__BAR__STAR_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4758__auto__);

}
});

(bfuncs.algebra._BAR__BAR__STAR_.cljs$core$IFn$_invoke$arity$0 = (function (){
return false;
}));

(bfuncs.algebra._BAR__BAR__STAR_.cljs$core$IFn$_invoke$arity$1 = (function (x){
return x;
}));

(bfuncs.algebra._BAR__BAR__STAR_.cljs$core$IFn$_invoke$arity$2 = (function (x,y){
if(((x === true) || (y === true))){
return true;
} else {
if(x === false){
return y;
} else {
if(y === false){
return x;
} else {
return bfuncs.algebra._soperate(new cljs.core.Keyword(null,"OR","OR",-1220615924),x,y);

}
}
}
}));

(bfuncs.algebra._BAR__BAR__STAR_.cljs$core$IFn$_invoke$arity$variadic = (function (x,y,more){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(bfuncs.algebra._BAR__BAR__STAR_,bfuncs.algebra._BAR__BAR__STAR_.cljs$core$IFn$_invoke$arity$2(x,y),more);
}));

/** @this {Function} */
(bfuncs.algebra._BAR__BAR__STAR_.cljs$lang$applyTo = (function (seq67360){
var G__67361 = cljs.core.first(seq67360);
var seq67360__$1 = cljs.core.next(seq67360);
var G__67362 = cljs.core.first(seq67360__$1);
var seq67360__$2 = cljs.core.next(seq67360__$1);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__67361,G__67362,seq67360__$2);
}));

(bfuncs.algebra._BAR__BAR__STAR_.cljs$lang$maxFixedArity = (2));

/**
 * Simplifying boolean product.
 * 
 *   Gives a structure logically equivalent to the conjunction of the input terms.
 *   Nested sums, duplicate terms, and boolean primitives are handled as with &.
 *   In addition, the following transformations are made to boolean structures:
 *  A A' -> false,
 *  A (A + B) -> A
 *   With no arguments, returns true.
 */
bfuncs.algebra._AMPERSAND__AMPERSAND__STAR_ = (function bfuncs$algebra$_AMPERSAND__AMPERSAND__STAR_(var_args){
var G__67368 = arguments.length;
switch (G__67368) {
case 0:
return bfuncs.algebra._AMPERSAND__AMPERSAND__STAR_.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return bfuncs.algebra._AMPERSAND__AMPERSAND__STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return bfuncs.algebra._AMPERSAND__AMPERSAND__STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__4757__auto__ = [];
var len__4736__auto___67551 = arguments.length;
var i__4737__auto___67552 = (0);
while(true){
if((i__4737__auto___67552 < len__4736__auto___67551)){
args_arr__4757__auto__.push((arguments[i__4737__auto___67552]));

var G__67553 = (i__4737__auto___67552 + (1));
i__4737__auto___67552 = G__67553;
continue;
} else {
}
break;
}

var argseq__4758__auto__ = (new cljs.core.IndexedSeq(args_arr__4757__auto__.slice((2)),(0),null));
return bfuncs.algebra._AMPERSAND__AMPERSAND__STAR_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4758__auto__);

}
});

(bfuncs.algebra._AMPERSAND__AMPERSAND__STAR_.cljs$core$IFn$_invoke$arity$0 = (function (){
return true;
}));

(bfuncs.algebra._AMPERSAND__AMPERSAND__STAR_.cljs$core$IFn$_invoke$arity$1 = (function (x){
return x;
}));

(bfuncs.algebra._AMPERSAND__AMPERSAND__STAR_.cljs$core$IFn$_invoke$arity$2 = (function (x,y){
if(((x === false) || (y === false))){
return false;
} else {
if(x === true){
return y;
} else {
if(y === true){
return x;
} else {
return bfuncs.algebra._soperate(new cljs.core.Keyword(null,"AND","AND",1519433640),x,y);

}
}
}
}));

(bfuncs.algebra._AMPERSAND__AMPERSAND__STAR_.cljs$core$IFn$_invoke$arity$variadic = (function (x,y,more){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(bfuncs.algebra._AMPERSAND__AMPERSAND__STAR_,bfuncs.algebra._AMPERSAND__AMPERSAND__STAR_.cljs$core$IFn$_invoke$arity$2(x,y),more);
}));

/** @this {Function} */
(bfuncs.algebra._AMPERSAND__AMPERSAND__STAR_.cljs$lang$applyTo = (function (seq67365){
var G__67366 = cljs.core.first(seq67365);
var seq67365__$1 = cljs.core.next(seq67365);
var G__67367 = cljs.core.first(seq67365__$1);
var seq67365__$2 = cljs.core.next(seq67365__$1);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__67366,G__67367,seq67365__$2);
}));

(bfuncs.algebra._AMPERSAND__AMPERSAND__STAR_.cljs$lang$maxFixedArity = (2));

/**
 * Simplifies terms in the first level of the input.
 */
bfuncs.algebra.simplify = (function bfuncs$algebra$simplify(bobj){
var temp__27540__auto__ = bfuncs.data.operation(bobj);
var op = temp__27540__auto__;
var G__67369 = temp__27540__auto__;
var G__67369__$1 = (((G__67369 instanceof cljs.core.Keyword))?G__67369.fqn:null);
switch (G__67369__$1) {
case "OR":
case "AND":
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2((bfuncs.algebra.simplifying_operators.cljs$core$IFn$_invoke$arity$1 ? bfuncs.algebra.simplifying_operators.cljs$core$IFn$_invoke$arity$1(op) : bfuncs.algebra.simplifying_operators.call(null,op)),bobj);

break;
default:
return bobj;

}
});
bfuncs.algebra.convert_xop = (function bfuncs$algebra$convert_xop(target_op,simp,xop){
if(bfuncs.algebra.bxop_QMARK_(xop)){
} else {
throw (new Error("Assert failed: (bxop? xop)"));
}

if((cljs.core.count(xop) > (1))){
} else {
throw (new Error("Assert failed: (> (count xop) 1)"));
}

if(cljs.core.truth_((function (){var fexpr__67372 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"AND","AND",1519433640),null,new cljs.core.Keyword(null,"OR","OR",-1220615924),null], null), null);
return (fexpr__67372.cljs$core$IFn$_invoke$arity$1 ? fexpr__67372.cljs$core$IFn$_invoke$arity$1(target_op) : fexpr__67372.call(null,target_op));
})())){
} else {
throw (new Error("Assert failed: (#{:AND :OR} target-op)"));
}

var vec__67373 = bfuncs.algebra.get_operators.cljs$core$IFn$_invoke$arity$variadic(simp,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([target_op,bfuncs.algebra.dual(target_op)], 0));
var f = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67373,(0),null);
var g = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67373,(1),null);
var negate_QMARK_ = (function (){var G__67376 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [bfuncs.data.operation(xop),target_op], null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"XOR","XOR",-682432949),new cljs.core.Keyword(null,"OR","OR",-1220615924)], null),G__67376)){
if(cljs.core.even_QMARK_(cljs.core.count(xop))){
return cljs.core.even_QMARK_;
} else {
return cljs.core.odd_QMARK_;
}
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"XNOR","XNOR",1530244797),new cljs.core.Keyword(null,"AND","AND",1519433640)], null),G__67376)){
if(cljs.core.even_QMARK_(cljs.core.count(xop))){
return cljs.core.even_QMARK_;
} else {
return cljs.core.odd_QMARK_;
}
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"XOR","XOR",-682432949),new cljs.core.Keyword(null,"AND","AND",1519433640)], null),G__67376)){
return cljs.core.odd_QMARK_;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"XNOR","XNOR",1530244797),new cljs.core.Keyword(null,"OR","OR",-1220615924)], null),G__67376)){
return cljs.core.even_QMARK_;
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__67376)].join('')));

}
}
}
}
})();
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,(function (){var xs = cljs.core.rest(xop);
var v = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first(xop),bfuncs.algebra._BANG_(cljs.core.first(xop))], null);
while(true){
var x = cljs.core.first(xs);
var x_SINGLEQUOTE_ = bfuncs.algebra._BANG_(x);
if(bfuncs.utils.singleton_QMARK_(xs)){
return cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2(((function (xs,v,x,x_SINGLEQUOTE_,vec__67373,f,g,negate_QMARK_){
return (function (i,col){
var G__67379 = col;
var G__67380 = (cljs.core.truth_((negate_QMARK_.cljs$core$IFn$_invoke$arity$1 ? negate_QMARK_.cljs$core$IFn$_invoke$arity$1(i) : negate_QMARK_.call(null,i)))?x_SINGLEQUOTE_:x);
return (g.cljs$core$IFn$_invoke$arity$2 ? g.cljs$core$IFn$_invoke$arity$2(G__67379,G__67380) : g.call(null,G__67379,G__67380));
});})(xs,v,x,x_SINGLEQUOTE_,vec__67373,f,g,negate_QMARK_))
,v);
} else {
var G__67568 = cljs.core.next(xs);
var G__67569 = cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(((function (xs,v,x,x_SINGLEQUOTE_,vec__67373,f,g,negate_QMARK_){
return (function (p1__67370_SHARP_){
return (g.cljs$core$IFn$_invoke$arity$2 ? g.cljs$core$IFn$_invoke$arity$2(p1__67370_SHARP_,x) : g.call(null,p1__67370_SHARP_,x));
});})(xs,v,x,x_SINGLEQUOTE_,vec__67373,f,g,negate_QMARK_))
,v),cljs.core.map.cljs$core$IFn$_invoke$arity$1(((function (xs,v,x,x_SINGLEQUOTE_,vec__67373,f,g,negate_QMARK_){
return (function (p1__67371_SHARP_){
return (g.cljs$core$IFn$_invoke$arity$2 ? g.cljs$core$IFn$_invoke$arity$2(p1__67371_SHARP_,x_SINGLEQUOTE_) : g.call(null,p1__67371_SHARP_,x_SINGLEQUOTE_));
});})(xs,v,x,x_SINGLEQUOTE_,vec__67373,f,g,negate_QMARK_))
),cljs.core.rseq(v));
xs = G__67568;
v = G__67569;
continue;
}
break;
}
})());
});
bfuncs.algebra.expand_eq = (function bfuncs$algebra$expand_eq(input_op,target_op,simp,bobj){
var _BAR__BAR_ = bfuncs.algebra.operator.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"OR","OR",-1220615924),simp);
var _AMPERSAND__AMPERSAND_ = bfuncs.algebra.operator.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"AND","AND",1519433640),simp);
var G__67381 = input_op;
var G__67381__$1 = (((G__67381 instanceof cljs.core.Keyword))?G__67381.fqn:null);
switch (G__67381__$1) {
case "EQ":
var G__67382 = target_op;
var G__67382__$1 = (((G__67382 instanceof cljs.core.Keyword))?G__67382.fqn:null);
switch (G__67382__$1) {
case "OR":
var G__67383 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(_AMPERSAND__AMPERSAND_,bobj);
var G__67384 = bfuncs.utils.map_reduce.cljs$core$IFn$_invoke$arity$3(bfuncs.algebra._BANG_,_AMPERSAND__AMPERSAND_,bobj);
return (_BAR__BAR_.cljs$core$IFn$_invoke$arity$2 ? _BAR__BAR_.cljs$core$IFn$_invoke$arity$2(G__67383,G__67384) : _BAR__BAR_.call(null,G__67383,G__67384));

break;
case "AND":
var x = cljs.core.first(bobj);
var tail = cljs.core.next(bobj);
var result = true;
while(true){
var temp__5733__auto__ = cljs.core.seq(tail);
if(temp__5733__auto__){
var xs__27556__auto__ = temp__5733__auto__;
var y = cljs.core.first(xs__27556__auto__);
var G__67572 = y;
var G__67573 = cljs.core.next(tail);
var G__67574 = (function (){var G__67392 = result;
var G__67393 = (function (){var G__67395 = x;
var G__67396 = bfuncs.algebra._BANG_(y);
return (_BAR__BAR_.cljs$core$IFn$_invoke$arity$2 ? _BAR__BAR_.cljs$core$IFn$_invoke$arity$2(G__67395,G__67396) : _BAR__BAR_.call(null,G__67395,G__67396));
})();
var G__67394 = (function (){var G__67397 = bfuncs.algebra._BANG_(x);
var G__67398 = y;
return (_BAR__BAR_.cljs$core$IFn$_invoke$arity$2 ? _BAR__BAR_.cljs$core$IFn$_invoke$arity$2(G__67397,G__67398) : _BAR__BAR_.call(null,G__67397,G__67398));
})();
return (_AMPERSAND__AMPERSAND_.cljs$core$IFn$_invoke$arity$3 ? _AMPERSAND__AMPERSAND_.cljs$core$IFn$_invoke$arity$3(G__67392,G__67393,G__67394) : _AMPERSAND__AMPERSAND_.call(null,G__67392,G__67393,G__67394));
})();
x = G__67572;
tail = G__67573;
result = G__67574;
continue;
} else {
return result;
}
break;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__67382__$1)].join('')));

}

break;
case "NEQ":
var G__67399 = target_op;
var G__67399__$1 = (((G__67399 instanceof cljs.core.Keyword))?G__67399.fqn:null);
switch (G__67399__$1) {
case "AND":
var G__67400 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(_BAR__BAR_,bobj);
var G__67401 = bfuncs.utils.map_reduce.cljs$core$IFn$_invoke$arity$3(bfuncs.algebra._BANG_,_BAR__BAR_,bobj);
return (_AMPERSAND__AMPERSAND_.cljs$core$IFn$_invoke$arity$2 ? _AMPERSAND__AMPERSAND_.cljs$core$IFn$_invoke$arity$2(G__67400,G__67401) : _AMPERSAND__AMPERSAND_.call(null,G__67400,G__67401));

break;
case "OR":
var x = cljs.core.first(bobj);
var tail = cljs.core.next(bobj);
var result = false;
while(true){
var temp__5733__auto__ = cljs.core.seq(tail);
if(temp__5733__auto__){
var xs__27556__auto__ = temp__5733__auto__;
var y = cljs.core.first(xs__27556__auto__);
var G__67580 = y;
var G__67581 = cljs.core.next(tail);
var G__67582 = (function (){var G__67409 = result;
var G__67410 = (function (){var G__67412 = x;
var G__67413 = bfuncs.algebra._BANG_(y);
return (_AMPERSAND__AMPERSAND_.cljs$core$IFn$_invoke$arity$2 ? _AMPERSAND__AMPERSAND_.cljs$core$IFn$_invoke$arity$2(G__67412,G__67413) : _AMPERSAND__AMPERSAND_.call(null,G__67412,G__67413));
})();
var G__67411 = (function (){var G__67414 = bfuncs.algebra._BANG_(x);
var G__67415 = y;
return (_AMPERSAND__AMPERSAND_.cljs$core$IFn$_invoke$arity$2 ? _AMPERSAND__AMPERSAND_.cljs$core$IFn$_invoke$arity$2(G__67414,G__67415) : _AMPERSAND__AMPERSAND_.call(null,G__67414,G__67415));
})();
return (_BAR__BAR_.cljs$core$IFn$_invoke$arity$3 ? _BAR__BAR_.cljs$core$IFn$_invoke$arity$3(G__67409,G__67410,G__67411) : _BAR__BAR_.call(null,G__67409,G__67410,G__67411));
})();
x = G__67580;
tail = G__67581;
result = G__67582;
continue;
} else {
return result;
}
break;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__67399__$1)].join('')));

}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__67381__$1)].join('')));

}
});
bfuncs.algebra.expand_not = (function bfuncs$algebra$expand_not(target_op,simp,bobj){
if(bfuncs.algebra.bnot_QMARK_(bobj)){
var x = cljs.core.first(bobj);
var temp__27540__auto__ = bfuncs.data.operation(x);
var op = temp__27540__auto__;
var G__67416 = temp__27540__auto__;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"NOT","NOT",-1689245341),G__67416)){
return cljs.core.first(x);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"AND","AND",1519433640),G__67416)){
return bfuncs.utils.map_reduce.cljs$core$IFn$_invoke$arity$3(bfuncs.algebra._BANG_,bfuncs.algebra.operator.cljs$core$IFn$_invoke$arity$2(bfuncs.algebra.dual(op),simp),x);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"OR","OR",-1220615924),G__67416)){
return bfuncs.utils.map_reduce.cljs$core$IFn$_invoke$arity$3(bfuncs.algebra._BANG_,bfuncs.algebra.operator.cljs$core$IFn$_invoke$arity$2(bfuncs.algebra.dual(op),simp),x);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"NAND","NAND",-421918697),G__67416)){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(bfuncs.algebra.operator.cljs$core$IFn$_invoke$arity$2(bfuncs.algebra.negation(op),simp),x);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"NOR","NOR",1230816390),G__67416)){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(bfuncs.algebra.operator.cljs$core$IFn$_invoke$arity$2(bfuncs.algebra.negation(op),simp),x);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"EQ","EQ",-205905246),G__67416)){
return bfuncs.algebra.expand_eq(bfuncs.algebra.negation(op),target_op,simp,x);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"NEQ","NEQ",-944829411),G__67416)){
return bfuncs.algebra.expand_eq(bfuncs.algebra.negation(op),target_op,simp,x);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(null,G__67416)){
return bobj;
} else {
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(bfuncs.algebra.operator.cljs$core$IFn$_invoke$arity$2(bfuncs.algebra.negation(op),simp),x);

}
}
}
}
}
}
}
}
} else {
return bobj;
}
});
bfuncs.algebra.normalize = (function bfuncs$algebra$normalize(target_op,simp,bobj){
while(true){
var temp__27540__auto__ = bfuncs.data.operation(bobj);
var op = temp__27540__auto__;
var G__67417 = temp__27540__auto__;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(null,G__67417)){
return bobj;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"EQ","EQ",-205905246),G__67417)){
return bfuncs.algebra.expand_eq(op,target_op,simp,bobj);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"NOT","NOT",-1689245341),G__67417)){
var expanded = bfuncs.algebra.expand_not(target_op,simp,bobj);
if(bfuncs.algebra.operation_QMARK_(new cljs.core.Keyword(null,"NOT","NOT",-1689245341),expanded)){
return expanded;
} else {
var G__67584 = target_op;
var G__67585 = simp;
var G__67586 = bfuncs.algebra.expand_not(target_op,simp,bobj);
target_op = G__67584;
simp = G__67585;
bobj = G__67586;
continue;
}
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"NOR","NOR",1230816390),G__67417)){
return bfuncs.utils.map_reduce.cljs$core$IFn$_invoke$arity$3(bfuncs.algebra._BANG_,bfuncs.algebra.operator.cljs$core$IFn$_invoke$arity$2(bfuncs.algebra.dual(bfuncs.algebra.negation(op)),simp),bobj);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"AND","AND",1519433640),G__67417)){
return bobj;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"XOR","XOR",-682432949),G__67417)){
return bfuncs.algebra.convert_xop(target_op,simp,bobj);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"CON","CON",138413899),G__67417)){
return bfuncs.algebra._BAR__BAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.first(bobj),bfuncs.algebra._BANG_(cljs.core.second(bobj)));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"OR","OR",-1220615924),G__67417)){
return bobj;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"NIMP","NIMP",-733613840),G__67417)){
return bfuncs.algebra._AMPERSAND__AMPERSAND_.cljs$core$IFn$_invoke$arity$2(cljs.core.first(bobj),bfuncs.algebra._BANG_(cljs.core.second(bobj)));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"IMP","IMP",-668216011),G__67417)){
return bfuncs.algebra._BAR__BAR_.cljs$core$IFn$_invoke$arity$2(bfuncs.algebra._BANG_(cljs.core.first(bobj)),cljs.core.second(bobj));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"NAND","NAND",-421918697),G__67417)){
return bfuncs.utils.map_reduce.cljs$core$IFn$_invoke$arity$3(bfuncs.algebra._BANG_,bfuncs.algebra.operator.cljs$core$IFn$_invoke$arity$2(bfuncs.algebra.dual(bfuncs.algebra.negation(op)),simp),bobj);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"NCON","NCON",625732185),G__67417)){
return bfuncs.algebra._AMPERSAND__AMPERSAND_.cljs$core$IFn$_invoke$arity$2(bfuncs.algebra._BANG_(cljs.core.first(bobj)),cljs.core.second(bobj));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"NEQ","NEQ",-944829411),G__67417)){
return bfuncs.algebra.expand_eq(op,target_op,simp,bobj);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"XNOR","XNOR",1530244797),G__67417)){
return bfuncs.algebra.convert_xop(target_op,simp,bobj);
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__67417)].join('')));

}
}
}
}
}
}
}
}
}
}
}
}
}
}
break;
}
});
bfuncs.algebra.two_level_normalize = (function bfuncs$algebra$two_level_normalize(target_op,simp,bobj){
var n1 = bfuncs.algebra.normalize(target_op,simp,bobj);
var temp__5733__auto__ = bfuncs.data.operation(n1);
if(cljs.core.truth_(temp__5733__auto__)){
var op = temp__5733__auto__;
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(bfuncs.algebra.operator.cljs$core$IFn$_invoke$arity$2(op,simp),cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$3(bfuncs.algebra.normalize,target_op,simp),n1));
} else {
return n1;
}
});
/**
 * Distributes the operation o1 over o2 in the first two levels of bobj.
 */
bfuncs.algebra.distribute = (function bfuncs$algebra$distribute(o1,o2,simp,bobj){
var f = bfuncs.algebra.operator.cljs$core$IFn$_invoke$arity$2(o1,simp);
var g = bfuncs.algebra.operator.cljs$core$IFn$_invoke$arity$2(o2,simp);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(o1,bfuncs.data.operation(bobj))){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2((function bfuncs$algebra$distribute_$_go(x,y){
var f67428 = (function (p1__67418_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(o2,bfuncs.data.operation(p1__67418_SHARP_));
});
if(f67428(x)){
if(f67428(y)){
return bfuncs.utils.map_reduce.cljs$core$IFn$_invoke$arity$3((function (p1__67419_SHARP_){
return bfuncs$algebra$distribute_$_go(x,p1__67419_SHARP_);
}),g,y);
} else {
return bfuncs.utils.map_reduce.cljs$core$IFn$_invoke$arity$3((function (p1__67420_SHARP_){
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(p1__67420_SHARP_,y) : f.call(null,p1__67420_SHARP_,y));
}),g,x);
}
} else {
if(f67428(y)){
return bfuncs.utils.map_reduce.cljs$core$IFn$_invoke$arity$3((function (p1__67421_SHARP_){
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(x,p1__67421_SHARP_) : f.call(null,x,p1__67421_SHARP_));
}),g,y);
} else {
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(x,y) : f.call(null,x,y));
}
}
}),bobj);
} else {
return bobj;
}
});
/**
 * Expands bobj to a form in terms of the given operation op;
 *   SoP when op is :OR
 *   PoS when op is :AND
 */
bfuncs.algebra.expand_to = (function bfuncs$algebra$expand_to(op,simp,bobj){
if(cljs.core.truth_((function (){var fexpr__67429 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"AND","AND",1519433640),null,new cljs.core.Keyword(null,"OR","OR",-1220615924),null], null), null);
return (fexpr__67429.cljs$core$IFn$_invoke$arity$1 ? fexpr__67429.cljs$core$IFn$_invoke$arity$1(op) : fexpr__67429.call(null,op));
})())){
} else {
throw (new Error("Assert failed: (#{:AND :OR} op)"));
}

var op_SINGLEQUOTE_ = bfuncs.algebra.dual(op);
var done_QMARK_ = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(bfuncs.algebra.valid_form_QMARK_,cljs.core.PersistentArrayMap.createAsIfByAssoc([op,(1),op_SINGLEQUOTE_,(2),new cljs.core.Keyword(null,"NOT","NOT",-1689245341),(3)]));
return (function bfuncs$algebra$expand_to_$_go(x){
while(true){
var x__$1 = bfuncs.algebra.two_level_normalize(op,simp,x);
if(cljs.core.truth_(done_QMARK_(x__$1))){
if(cljs.core.truth_(simp)){
return bfuncs.algebra.simplify(x__$1);
} else {
return x__$1;
}
} else {
var pred__67430 = cljs.core._EQ_;
var expr__67431 = bfuncs.data.operation(x__$1);
if(cljs.core.truth_((pred__67430.cljs$core$IFn$_invoke$arity$2 ? pred__67430.cljs$core$IFn$_invoke$arity$2(op,expr__67431) : pred__67430.call(null,op,expr__67431)))){
return bfuncs.utils.map_reduce.cljs$core$IFn$_invoke$arity$3(bfuncs$algebra$expand_to_$_go,bfuncs.algebra.operator.cljs$core$IFn$_invoke$arity$2(op,simp),x__$1);
} else {
if(cljs.core.truth_((pred__67430.cljs$core$IFn$_invoke$arity$2 ? pred__67430.cljs$core$IFn$_invoke$arity$2(op_SINGLEQUOTE_,expr__67431) : pred__67430.call(null,op_SINGLEQUOTE_,expr__67431)))){
var G__67594 = bfuncs.algebra.distribute(op_SINGLEQUOTE_,op,simp,x__$1);
x = G__67594;
continue;
} else {
var G__67595 = x__$1;
x = G__67595;
continue;
}
}
}
break;
}
})(bobj);
});
bfuncs.algebra.__GT_SOP = (function bfuncs$algebra$__GT_SOP(var_args){
var args__4742__auto__ = [];
var len__4736__auto___67596 = arguments.length;
var i__4737__auto___67597 = (0);
while(true){
if((i__4737__auto___67597 < len__4736__auto___67596)){
args__4742__auto__.push((arguments[i__4737__auto___67597]));

var G__67598 = (i__4737__auto___67597 + (1));
i__4737__auto___67597 = G__67598;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return bfuncs.algebra.__GT_SOP.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(bfuncs.algebra.__GT_SOP.cljs$core$IFn$_invoke$arity$variadic = (function (bobj,p__67435){
var map__67436 = p__67435;
var map__67436__$1 = (((((!((map__67436 == null))))?(((((map__67436.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__67436.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__67436):map__67436);
var simp = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__67436__$1,new cljs.core.Keyword(null,"simplify","simplify",-599213465),true);
return bfuncs.algebra.expand_to(new cljs.core.Keyword(null,"OR","OR",-1220615924),simp,bobj);
}));

(bfuncs.algebra.__GT_SOP.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(bfuncs.algebra.__GT_SOP.cljs$lang$applyTo = (function (seq67433){
var G__67434 = cljs.core.first(seq67433);
var seq67433__$1 = cljs.core.next(seq67433);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__67434,seq67433__$1);
}));

bfuncs.algebra.__GT_POS = (function bfuncs$algebra$__GT_POS(var_args){
var args__4742__auto__ = [];
var len__4736__auto___67603 = arguments.length;
var i__4737__auto___67604 = (0);
while(true){
if((i__4737__auto___67604 < len__4736__auto___67603)){
args__4742__auto__.push((arguments[i__4737__auto___67604]));

var G__67605 = (i__4737__auto___67604 + (1));
i__4737__auto___67604 = G__67605;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return bfuncs.algebra.__GT_POS.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(bfuncs.algebra.__GT_POS.cljs$core$IFn$_invoke$arity$variadic = (function (bobj,p__67440){
var map__67441 = p__67440;
var map__67441__$1 = (((((!((map__67441 == null))))?(((((map__67441.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__67441.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__67441):map__67441);
var simp = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__67441__$1,new cljs.core.Keyword(null,"simplify","simplify",-599213465),true);
return bfuncs.algebra.expand_to(new cljs.core.Keyword(null,"AND","AND",1519433640),simp,bobj);
}));

(bfuncs.algebra.__GT_POS.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(bfuncs.algebra.__GT_POS.cljs$lang$applyTo = (function (seq67438){
var G__67439 = cljs.core.first(seq67438);
var seq67438__$1 = cljs.core.next(seq67438);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__67439,seq67438__$1);
}));

bfuncs.algebra.xor_with_true_QMARK_ = (function bfuncs$algebra$xor_with_true_QMARK_(x){
return ((bfuncs.algebra.bxsum_QMARK_(x)) && (cljs.core.contains_QMARK_(x,true)));
});
bfuncs.algebra.__GT_ANF = (function bfuncs$algebra$__GT_ANF(bobj){
while(true){
if(cljs.core.truth_(bfuncs.algebra.anf_QMARK_(bobj))){
return bobj;
} else {
var temp__27540__auto__ = bfuncs.data.operation(bobj);
var op = temp__27540__auto__;
var G__67443 = temp__27540__auto__;
var G__67443__$1 = (((G__67443 instanceof cljs.core.Keyword))?G__67443.fqn:null);
switch (G__67443__$1) {
case "NOT":
return bfuncs.algebra._LT__PLUS__GT_.cljs$core$IFn$_invoke$arity$2(true,(function (){var G__67444 = cljs.core.first(bobj);
return (bfuncs.algebra.__GT_ANF.cljs$core$IFn$_invoke$arity$1 ? bfuncs.algebra.__GT_ANF.cljs$core$IFn$_invoke$arity$1(G__67444) : bfuncs.algebra.__GT_ANF.call(null,G__67444));
})());

break;
case "AND":
var bobj__$1 = bfuncs.utils.map_reduce.cljs$core$IFn$_invoke$arity$3(bfuncs.algebra.__GT_ANF,bfuncs.algebra._AMPERSAND__AMPERSAND__STAR_,bobj);
if(bfuncs.algebra.operation_QMARK_(new cljs.core.Keyword(null,"AND","AND",1519433640),bobj__$1)){
return bfuncs.algebra.distribute(new cljs.core.Keyword(null,"AND","AND",1519433640),new cljs.core.Keyword(null,"XOR","XOR",-682432949),true,bobj__$1);
} else {
return bobj__$1;
}

break;
case "NAND":
return bfuncs.algebra._LT__PLUS__GT_.cljs$core$IFn$_invoke$arity$2(true,(function (){var G__67445 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(bfuncs.algebra._AMPERSAND__AMPERSAND__STAR_,bobj);
return (bfuncs.algebra.__GT_ANF.cljs$core$IFn$_invoke$arity$1 ? bfuncs.algebra.__GT_ANF.cljs$core$IFn$_invoke$arity$1(G__67445) : bfuncs.algebra.__GT_ANF.call(null,G__67445));
})());

break;
case "OR":
var bobj__$1 = bfuncs.utils.map_reduce.cljs$core$IFn$_invoke$arity$3(bfuncs.algebra.__GT_ANF,bfuncs.algebra._BAR__BAR__STAR_,bobj);
if(bfuncs.algebra.operation_QMARK_(new cljs.core.Keyword(null,"OR","OR",-1220615924),bobj__$1)){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(((function (bobj,bobj__$1,G__67443,G__67443__$1,temp__27540__auto__,op){
return (function (x,y){
if(((bfuncs.algebra.operation_QMARK_(new cljs.core.Keyword(null,"XOR","XOR",-682432949),x)) && (bfuncs.algebra.operation_QMARK_(new cljs.core.Keyword(null,"XOR","XOR",-682432949),y)) && (cljs.core.contains_QMARK_(x,true)) && (cljs.core.contains_QMARK_(y,true)))){
return bfuncs.algebra._LT__PLUS__GT_.cljs$core$IFn$_invoke$arity$2(true,(function (){var G__67446 = bfuncs.algebra._AMPERSAND__AMPERSAND__STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(bfuncs.algebra._LT__PLUS__GT_,cljs.core.disj.cljs$core$IFn$_invoke$arity$2(x,true)),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(bfuncs.algebra._LT__PLUS__GT_,cljs.core.disj.cljs$core$IFn$_invoke$arity$2(y,true)));
return (bfuncs.algebra.__GT_ANF.cljs$core$IFn$_invoke$arity$1 ? bfuncs.algebra.__GT_ANF.cljs$core$IFn$_invoke$arity$1(G__67446) : bfuncs.algebra.__GT_ANF.call(null,G__67446));
})());
} else {
return bfuncs.algebra._LT__PLUS__GT_.cljs$core$IFn$_invoke$arity$variadic(x,y,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var G__67447 = bfuncs.algebra._AMPERSAND__AMPERSAND__STAR_.cljs$core$IFn$_invoke$arity$2(x,y);
return (bfuncs.algebra.__GT_ANF.cljs$core$IFn$_invoke$arity$1 ? bfuncs.algebra.__GT_ANF.cljs$core$IFn$_invoke$arity$1(G__67447) : bfuncs.algebra.__GT_ANF.call(null,G__67447));
})()], 0));
}
});})(bobj,bobj__$1,G__67443,G__67443__$1,temp__27540__auto__,op))
,bobj__$1);
} else {
return bobj__$1;
}

break;
case "NOR":
return bfuncs.algebra._LT__PLUS__GT_.cljs$core$IFn$_invoke$arity$2(true,(function (){var G__67448 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(bfuncs.algebra._BAR__BAR__STAR_,bobj);
return (bfuncs.algebra.__GT_ANF.cljs$core$IFn$_invoke$arity$1 ? bfuncs.algebra.__GT_ANF.cljs$core$IFn$_invoke$arity$1(G__67448) : bfuncs.algebra.__GT_ANF.call(null,G__67448));
})());

break;
case "XOR":
return bfuncs.utils.map_reduce.cljs$core$IFn$_invoke$arity$3(bfuncs.algebra.__GT_ANF,bfuncs.algebra._LT__PLUS__GT_,bobj);

break;
case "XNOR":
return bfuncs.algebra._LT__PLUS__GT_.cljs$core$IFn$_invoke$arity$2(true,bfuncs.utils.map_reduce.cljs$core$IFn$_invoke$arity$3(bfuncs.algebra.__GT_ANF,bfuncs.algebra._LT__PLUS__GT_,bobj));

break;
case "EQ":
case "NEQ":
var G__67615 = bfuncs.algebra.expand_eq(op,new cljs.core.Keyword(null,"OR","OR",-1220615924),true,bobj);
bobj = G__67615;
continue;

break;
case "IMP":
return bfuncs.algebra._LT__PLUS__GT_.cljs$core$IFn$_invoke$arity$variadic(true,(function (){var G__67449 = cljs.core.first(bobj);
return (bfuncs.algebra.__GT_ANF.cljs$core$IFn$_invoke$arity$1 ? bfuncs.algebra.__GT_ANF.cljs$core$IFn$_invoke$arity$1(G__67449) : bfuncs.algebra.__GT_ANF.call(null,G__67449));
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var G__67450 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(bfuncs.algebra._AMPERSAND__AMPERSAND__STAR_,bobj);
return (bfuncs.algebra.__GT_ANF.cljs$core$IFn$_invoke$arity$1 ? bfuncs.algebra.__GT_ANF.cljs$core$IFn$_invoke$arity$1(G__67450) : bfuncs.algebra.__GT_ANF.call(null,G__67450));
})()], 0));

break;
case "NIMP":
return bfuncs.algebra._LT__PLUS__GT_.cljs$core$IFn$_invoke$arity$2((function (){var G__67451 = cljs.core.first(bobj);
return (bfuncs.algebra.__GT_ANF.cljs$core$IFn$_invoke$arity$1 ? bfuncs.algebra.__GT_ANF.cljs$core$IFn$_invoke$arity$1(G__67451) : bfuncs.algebra.__GT_ANF.call(null,G__67451));
})(),(function (){var G__67452 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(bfuncs.algebra._AMPERSAND__AMPERSAND__STAR_,bobj);
return (bfuncs.algebra.__GT_ANF.cljs$core$IFn$_invoke$arity$1 ? bfuncs.algebra.__GT_ANF.cljs$core$IFn$_invoke$arity$1(G__67452) : bfuncs.algebra.__GT_ANF.call(null,G__67452));
})());

break;
case "CON":
return bfuncs.algebra._LT__PLUS__GT_.cljs$core$IFn$_invoke$arity$variadic(true,(function (){var G__67453 = cljs.core.second(bobj);
return (bfuncs.algebra.__GT_ANF.cljs$core$IFn$_invoke$arity$1 ? bfuncs.algebra.__GT_ANF.cljs$core$IFn$_invoke$arity$1(G__67453) : bfuncs.algebra.__GT_ANF.call(null,G__67453));
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var G__67454 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(bfuncs.algebra._AMPERSAND__AMPERSAND__STAR_,bobj);
return (bfuncs.algebra.__GT_ANF.cljs$core$IFn$_invoke$arity$1 ? bfuncs.algebra.__GT_ANF.cljs$core$IFn$_invoke$arity$1(G__67454) : bfuncs.algebra.__GT_ANF.call(null,G__67454));
})()], 0));

break;
case "NCON":
return bfuncs.algebra._LT__PLUS__GT_.cljs$core$IFn$_invoke$arity$2((function (){var G__67455 = cljs.core.second(bobj);
return (bfuncs.algebra.__GT_ANF.cljs$core$IFn$_invoke$arity$1 ? bfuncs.algebra.__GT_ANF.cljs$core$IFn$_invoke$arity$1(G__67455) : bfuncs.algebra.__GT_ANF.call(null,G__67455));
})(),(function (){var G__67456 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(bfuncs.algebra._AMPERSAND__AMPERSAND__STAR_,bobj);
return (bfuncs.algebra.__GT_ANF.cljs$core$IFn$_invoke$arity$1 ? bfuncs.algebra.__GT_ANF.cljs$core$IFn$_invoke$arity$1(G__67456) : bfuncs.algebra.__GT_ANF.call(null,G__67456));
})());

break;
default:
return bobj;

}
}
break;
}
});
bfuncs.algebra.operators = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ID","ID",989302048),new cljs.core.Keyword(null,"EQ","EQ",-205905246),new cljs.core.Keyword(null,"NOT","NOT",-1689245341),new cljs.core.Keyword(null,"TRUE","TRUE",494241636),new cljs.core.Keyword(null,"FALSE","FALSE",1063613829),new cljs.core.Keyword(null,"NOR","NOR",1230816390),new cljs.core.Keyword(null,"AND","AND",1519433640),new cljs.core.Keyword(null,"XOR","XOR",-682432949),new cljs.core.Keyword(null,"CON","CON",138413899),new cljs.core.Keyword(null,"OR","OR",-1220615924),new cljs.core.Keyword(null,"NIMP","NIMP",-733613840),new cljs.core.Keyword(null,"IMP","IMP",-668216011),new cljs.core.Keyword(null,"NAND","NAND",-421918697),new cljs.core.Keyword(null,"NCON","NCON",625732185),new cljs.core.Keyword(null,"NEQ","NEQ",-944829411),new cljs.core.Keyword(null,"XNOR","XNOR",1530244797)],[cljs.core.identity,bfuncs.algebra._LT__EQ__GT_,bfuncs.algebra._BANG_,cljs.core.constantly(true),cljs.core.constantly(false),bfuncs.algebra._BANG__BAR__BAR_,bfuncs.algebra._AMPERSAND__AMPERSAND_,bfuncs.algebra._LT__PLUS__GT_,bfuncs.algebra._LT__EQ__EQ_,bfuncs.algebra._BAR__BAR_,bfuncs.algebra._BANG__EQ__EQ__GT_,bfuncs.algebra._EQ__EQ__GT_,bfuncs.algebra._BANG__AMPERSAND__AMPERSAND_,bfuncs.algebra._BANG__LT__EQ__EQ_,bfuncs.algebra._BANG__LT__EQ__GT_,bfuncs.algebra._LT__STAR__GT_]);
bfuncs.algebra.simplifying_operators = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([bfuncs.algebra.operators,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"AND","AND",1519433640),bfuncs.algebra._AMPERSAND__AMPERSAND__STAR_,new cljs.core.Keyword(null,"OR","OR",-1220615924),bfuncs.algebra._BAR__BAR__STAR_], null)], 0));

//# sourceMappingURL=bfuncs.algebra.js.map
