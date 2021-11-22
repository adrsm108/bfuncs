goog.provide('bfuncs.minimization');
var module$bfuncs$TruthTable=shadow.js.require("module$bfuncs$TruthTable", {});
var module$bfuncs$jsUtils=shadow.js.require("module$bfuncs$jsUtils", {});
bfuncs.minimization.var_vector = (function bfuncs$minimization$var_vector(maps){
return cljs.core.vec(cljs.core.sort.cljs$core$IFn$_invoke$arity$1(cljs.core.distinct.cljs$core$IFn$_invoke$arity$1(cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.keys,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([maps], 0)))));
});
bfuncs.minimization.implicant_QMARK_ = (function bfuncs$minimization$implicant_QMARK_(x){
return ((bfuncs.utils.array_like_QMARK_(x)) && (cljs.core.every_QMARK_(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.contains_QMARK_,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [null,null,true,null,false,null], null), null)),x)));
});
/**
 * Converts a collection of maps to a sequence of implicants.
 * 
 *   When called with one argument, returns the pair [vars implicants], where
 *   vars is a sorted vector of distinct keys from elements of maps, and
 *   implicants is the corresponding sequence of implicants. When supplied a
 *   vector of keys as its first argument, returns the sequence of implicants
 *   constructed from maps using those keys.
 */
bfuncs.minimization.maps__GT_implicants = (function bfuncs$minimization$maps__GT_implicants(var_args){
var G__67660 = arguments.length;
switch (G__67660) {
case 1:
return bfuncs.minimization.maps__GT_implicants.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return bfuncs.minimization.maps__GT_implicants.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(bfuncs.minimization.maps__GT_implicants.cljs$core$IFn$_invoke$arity$1 = (function (maps){
var v = bfuncs.minimization.var_vector(maps);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [v,bfuncs.minimization.maps__GT_implicants.cljs$core$IFn$_invoke$arity$2(v,maps)], null);
}));

(bfuncs.minimization.maps__GT_implicants.cljs$core$IFn$_invoke$arity$2 = (function (vars,maps){
var iter__4529__auto__ = (function bfuncs$minimization$iter__67661(s__67662){
return (new cljs.core.LazySeq(null,(function (){
var s__67662__$1 = s__67662;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__67662__$1);
if(temp__5735__auto__){
var s__67662__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__67662__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__67662__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__67664 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__67663 = (0);
while(true){
if((i__67663 < size__4528__auto__)){
var m = cljs.core._nth(c__4527__auto__,i__67663);
cljs.core.chunk_append(b__67664,cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(m,vars));

var G__68115 = (i__67663 + (1));
i__67663 = G__68115;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__67664),bfuncs$minimization$iter__67661(cljs.core.chunk_rest(s__67662__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__67664),null);
}
} else {
var m = cljs.core.first(s__67662__$2);
return cljs.core.cons(cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(m,vars),bfuncs$minimization$iter__67661(cljs.core.rest(s__67662__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4529__auto__(maps);
}));

(bfuncs.minimization.maps__GT_implicants.cljs$lang$maxFixedArity = 2);

bfuncs.minimization.imp_lex = new cljs.core.PersistentArrayMap(null, 3, [false,(0),true,(1),null,(2)], null);
bfuncs.minimization.truth_table = (function bfuncs$minimization$truth_table(vars,expr){
if((((!((expr == null)))) && ((!((vars == null)))))){
var f = bfuncs.parsing.__GT_js_fn(vars,expr);
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__67666_SHARP_){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(p1__67666_SHARP_,(f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(p1__67666_SHARP_) : f.call(null,p1__67666_SHARP_)));
}),bfuncs.utils.truth_vecs.cljs$core$IFn$_invoke$arity$1(cljs.core.count(vars)));
} else {
return null;
}
});
bfuncs.minimization.function_vector = (function bfuncs$minimization$function_vector(vars,expr){
if((((!((expr == null)))) && ((!((vars == null)))))){
var f = bfuncs.parsing.__GT_js_fn(vars,expr);
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(f,bfuncs.utils.truth_vecs.cljs$core$IFn$_invoke$arity$1(cljs.core.count(vars)));
} else {
return null;
}
});
bfuncs.minimization.minterms = (function bfuncs$minimization$minterms(var_args){
var G__67668 = arguments.length;
switch (G__67668) {
case 2:
return bfuncs.minimization.minterms.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return bfuncs.minimization.minterms.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(bfuncs.minimization.minterms.cljs$core$IFn$_invoke$arity$2 = (function (vars,expr){
return bfuncs.minimization.minterms.cljs$core$IFn$_invoke$arity$3(vars,expr,false);
}));

(bfuncs.minimization.minterms.cljs$core$IFn$_invoke$arity$3 = (function (vars,expr,meta_QMARK_){
if((((!((expr == null)))) && ((!((vars == null)))))){
var f = bfuncs.parsing.__GT_js_fn(vars,expr);
return cljs.core.filter.cljs$core$IFn$_invoke$arity$2(f,bfuncs.utils.truth_vecs.cljs$core$IFn$_invoke$arity$2(cljs.core.count(vars),meta_QMARK_));
} else {
return null;
}
}));

(bfuncs.minimization.minterms.cljs$lang$maxFixedArity = 3);

bfuncs.minimization.maxterms = (function bfuncs$minimization$maxterms(var_args){
var G__67670 = arguments.length;
switch (G__67670) {
case 2:
return bfuncs.minimization.maxterms.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return bfuncs.minimization.maxterms.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(bfuncs.minimization.maxterms.cljs$core$IFn$_invoke$arity$2 = (function (vars,expr){
return bfuncs.minimization.maxterms.cljs$core$IFn$_invoke$arity$3(vars,expr,false);
}));

(bfuncs.minimization.maxterms.cljs$core$IFn$_invoke$arity$3 = (function (vars,expr,meta_QMARK_){
if((((!((expr == null)))) && ((!((vars == null)))))){
var f = bfuncs.parsing.__GT_js_fn(vars,expr);
return cljs.core.remove.cljs$core$IFn$_invoke$arity$2(f,bfuncs.utils.truth_vecs.cljs$core$IFn$_invoke$arity$2(cljs.core.count(vars),meta_QMARK_));
} else {
return null;
}
}));

(bfuncs.minimization.maxterms.cljs$lang$maxFixedArity = 3);

bfuncs.minimization.compare_implicants = (function bfuncs$minimization$compare_implicants(imp1,imp2){
var n = cljs.core.count(imp1);
var v__27657__auto__ = cljs.core.compare(n,cljs.core.count(imp2));
if((v__27657__auto__ === (0))){
var i = (0);
while(true){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(i,n)){
return (0);
} else {
var v__27657__auto____$1 = cljs.core.compare(cljs.core.get.cljs$core$IFn$_invoke$arity$2(bfuncs.minimization.imp_lex,cljs.core.get.cljs$core$IFn$_invoke$arity$2(imp1,i)),cljs.core.get.cljs$core$IFn$_invoke$arity$2(bfuncs.minimization.imp_lex,cljs.core.get.cljs$core$IFn$_invoke$arity$2(imp2,i)));
if((v__27657__auto____$1 === (0))){
var G__68119 = (i + (1));
i = G__68119;
continue;
} else {
return v__27657__auto____$1;
}
}
break;
}
} else {
return v__27657__auto__;
}
});
bfuncs.minimization.stringify_implicant = (function bfuncs$minimization$stringify_implicant(imp){
return clojure.string.join.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 3, [false,"0",true,"1",null,"-"], null),imp));
});
/**
 * Inverse of maps->implicants
 */
bfuncs.minimization.implicants__GT_maps = (function bfuncs$minimization$implicants__GT_maps(vars,implicants){
var iter__4529__auto__ = (function bfuncs$minimization$implicants__GT_maps_$_iter__67675(s__67676){
return (new cljs.core.LazySeq(null,(function (){
var s__67676__$1 = s__67676;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__67676__$1);
if(temp__5735__auto__){
var s__67676__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__67676__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__67676__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__67678 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__67677 = (0);
while(true){
if((i__67677 < size__4528__auto__)){
var imp = cljs.core._nth(c__4527__auto__,i__67677);
cljs.core.chunk_append(b__67678,cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$1(cljs.core.nil_QMARK_),cljs.core.map.cljs$core$IFn$_invoke$arity$3(((function (i__67677,imp,c__4527__auto__,size__4528__auto__,b__67678,s__67676__$2,temp__5735__auto__){
return (function (p1__67673_SHARP_,p2__67672_SHARP_){
if((!((p2__67672_SHARP_ == null)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__67673_SHARP_,p2__67672_SHARP_], null);
} else {
return null;
}
});})(i__67677,imp,c__4527__auto__,size__4528__auto__,b__67678,s__67676__$2,temp__5735__auto__))
,vars,imp)));

var G__68120 = (i__67677 + (1));
i__67677 = G__68120;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__67678),bfuncs$minimization$implicants__GT_maps_$_iter__67675(cljs.core.chunk_rest(s__67676__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__67678),null);
}
} else {
var imp = cljs.core.first(s__67676__$2);
return cljs.core.cons(cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$1(cljs.core.nil_QMARK_),cljs.core.map.cljs$core$IFn$_invoke$arity$3(((function (imp,s__67676__$2,temp__5735__auto__){
return (function (p1__67673_SHARP_,p2__67672_SHARP_){
if((!((p2__67672_SHARP_ == null)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__67673_SHARP_,p2__67672_SHARP_], null);
} else {
return null;
}
});})(imp,s__67676__$2,temp__5735__auto__))
,vars,imp)),bfuncs$minimization$implicants__GT_maps_$_iter__67675(cljs.core.rest(s__67676__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4529__auto__(implicants);
});
bfuncs.minimization.minterm__GT_int = (function bfuncs$minimization$minterm__GT_int(minterm){
var term = cljs.core.seq(minterm);
var i = (cljs.core.count(term) - (1));
var x = (0);
while(true){
if(term){
var G__68122 = cljs.core.next(term);
var G__68123 = (i - (1));
var G__68124 = (cljs.core.truth_(cljs.core.first(term))?(x | (1 << i)):x);
term = G__68122;
i = G__68123;
x = G__68124;
continue;
} else {
return x;
}
break;
}
});
bfuncs.minimization.maxterm__GT_int = (function bfuncs$minimization$maxterm__GT_int(maxterm){
var term = cljs.core.seq(maxterm);
var i = (cljs.core.count(term) - (1));
var x = (0);
while(true){
if(term){
var G__68125 = cljs.core.next(term);
var G__68126 = (i - (1));
var G__68127 = ((cljs.core.not(cljs.core.first(term)))?(x | (1 << i)):x);
term = G__68125;
i = G__68126;
x = G__68127;
continue;
} else {
return x;
}
break;
}
});
bfuncs.minimization.term__GT_int = (function bfuncs$minimization$term__GT_int(term){
var term__$1 = cljs.core.seq(term);
var i = (cljs.core.count(term__$1) - (1));
var x = (0);
while(true){
if(term__$1){
var G__68128 = cljs.core.next(term__$1);
var G__68129 = (i - (1));
var G__68130 = (cljs.core.truth_(cljs.core.first(term__$1))?(x | (1 << i)):x);
term__$1 = G__68128;
i = G__68129;
x = G__68130;
continue;
} else {
return x;
}
break;
}
});
bfuncs.minimization.strict_term__GT_int = (function bfuncs$minimization$strict_term__GT_int(term){
var term__$1 = cljs.core.seq(term);
var i = (cljs.core.count(term__$1) - (1));
var x = (function (){var and__4115__auto__ = term__$1;
if(and__4115__auto__){
return (0);
} else {
return and__4115__auto__;
}
})();
while(true){
if(cljs.core.truth_(x)){
if(term__$1){
var G__68131 = cljs.core.next(term__$1);
var G__68132 = (i - (1));
var G__68133 = (function (){var G__67686 = cljs.core.first(term__$1);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(true,G__67686)){
return (x | (1 << i));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(false,G__67686)){
return x;
} else {
return null;

}
}
})();
term__$1 = G__68131;
i = G__68132;
x = G__68133;
continue;
} else {
return x;
}
} else {
return null;
}
break;
}
});
bfuncs.minimization.full_terms = (function bfuncs$minimization$full_terms(vars,m){
var imp = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(m,vars);
var nil_indexes = bfuncs.utils.positions(cljs.core.nil_QMARK_,imp);
if(nil_indexes){
var iter__4529__auto__ = (function bfuncs$minimization$full_terms_$_iter__67688(s__67689){
return (new cljs.core.LazySeq(null,(function (){
var s__67689__$1 = s__67689;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__67689__$1);
if(temp__5735__auto__){
var s__67689__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__67689__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__67689__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__67691 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__67690 = (0);
while(true){
if((i__67690 < size__4528__auto__)){
var tv = cljs.core._nth(c__4527__auto__,i__67690);
cljs.core.chunk_append(b__67691,cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc,imp,cljs.core.interleave.cljs$core$IFn$_invoke$arity$2(nil_indexes,tv)));

var G__68134 = (i__67690 + (1));
i__67690 = G__68134;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__67691),bfuncs$minimization$full_terms_$_iter__67688(cljs.core.chunk_rest(s__67689__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__67691),null);
}
} else {
var tv = cljs.core.first(s__67689__$2);
return cljs.core.cons(cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc,imp,cljs.core.interleave.cljs$core$IFn$_invoke$arity$2(nil_indexes,tv)),bfuncs$minimization$full_terms_$_iter__67688(cljs.core.rest(s__67689__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4529__auto__(bfuncs.utils.truth_vecs.cljs$core$IFn$_invoke$arity$1(cljs.core.count(nil_indexes)));
} else {
return (new cljs.core.List(null,imp,null,(1),null));
}
});
bfuncs.minimization.full_terms_with_meta = (function bfuncs$minimization$full_terms_with_meta(vars,m){
var imp = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(m,vars);
var nil_indices = bfuncs.utils.positions(cljs.core.nil_QMARK_,imp);
if(nil_indices){
var iter__4529__auto__ = (function bfuncs$minimization$full_terms_with_meta_$_iter__67697(s__67698){
return (new cljs.core.LazySeq(null,(function (){
var s__67698__$1 = s__67698;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__67698__$1);
if(temp__5735__auto__){
var s__67698__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__67698__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__67698__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__67700 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__67699 = (0);
while(true){
if((i__67699 < size__4528__auto__)){
var tv = cljs.core._nth(c__4527__auto__,i__67699);
var term = cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc,imp,cljs.core.interleave.cljs$core$IFn$_invoke$arity$2(nil_indices,tv));
cljs.core.chunk_append(b__67700,cljs.core.with_meta(term,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"terms","terms",-1556977978),cljs.core.sorted_set.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([bfuncs.minimization.term__GT_int(term)], 0))], null)));

var G__68135 = (i__67699 + (1));
i__67699 = G__68135;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__67700),bfuncs$minimization$full_terms_with_meta_$_iter__67697(cljs.core.chunk_rest(s__67698__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__67700),null);
}
} else {
var tv = cljs.core.first(s__67698__$2);
var term = cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc,imp,cljs.core.interleave.cljs$core$IFn$_invoke$arity$2(nil_indices,tv));
return cljs.core.cons(cljs.core.with_meta(term,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"terms","terms",-1556977978),cljs.core.sorted_set.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([bfuncs.minimization.term__GT_int(term)], 0))], null)),bfuncs$minimization$full_terms_with_meta_$_iter__67697(cljs.core.rest(s__67698__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4529__auto__(bfuncs.utils.truth_vecs.cljs$core$IFn$_invoke$arity$1(cljs.core.count(nil_indices)));
} else {
return (new cljs.core.List(null,cljs.core.with_meta(imp,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"terms","terms",-1556977978),cljs.core.sorted_set.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([bfuncs.minimization.term__GT_int(imp)], 0))], null)),null,(1),null));
}
});
bfuncs.minimization.covered_terms = (function bfuncs$minimization$covered_terms(implicant){
if(cljs.core.truth_(implicant)){
var or__4126__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.meta(implicant),new cljs.core.Keyword(null,"terms","terms",-1556977978));
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
var temp__5737__auto__ = bfuncs.utils.positions(cljs.core.nil_QMARK_,implicant);
if((temp__5737__auto__ == null)){
return cljs.core.sorted_set.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([bfuncs.minimization.term__GT_int(implicant)], 0));
} else {
var nil_indices = temp__5737__auto__;
return cljs.core.set((function (){var iter__4529__auto__ = (function bfuncs$minimization$covered_terms_$_iter__67706(s__67707){
return (new cljs.core.LazySeq(null,(function (){
var s__67707__$1 = s__67707;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__67707__$1);
if(temp__5735__auto__){
var s__67707__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__67707__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__67707__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__67709 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__67708 = (0);
while(true){
if((i__67708 < size__4528__auto__)){
var tv = cljs.core._nth(c__4527__auto__,i__67708);
cljs.core.chunk_append(b__67709,bfuncs.minimization.term__GT_int(cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc,implicant,cljs.core.interleave.cljs$core$IFn$_invoke$arity$2(nil_indices,tv))));

var G__68137 = (i__67708 + (1));
i__67708 = G__68137;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__67709),bfuncs$minimization$covered_terms_$_iter__67706(cljs.core.chunk_rest(s__67707__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__67709),null);
}
} else {
var tv = cljs.core.first(s__67707__$2);
return cljs.core.cons(bfuncs.minimization.term__GT_int(cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc,implicant,cljs.core.interleave.cljs$core$IFn$_invoke$arity$2(nil_indices,tv))),bfuncs$minimization$covered_terms_$_iter__67706(cljs.core.rest(s__67707__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4529__auto__(bfuncs.utils.truth_vecs.cljs$core$IFn$_invoke$arity$1(cljs.core.count(nil_indices)));
})());
}
}
} else {
return null;
}
});
/**
 * Takes two implicant vectors, and returns true if the first covers the second.
 *   imp1 is said to cover imp2 when both vectors have the same length, and
 *   (imp2 i) equals (imp1 i) wherever (imp1 i) is non-nil.
 */
bfuncs.minimization.covers_QMARK_ = (function bfuncs$minimization$covers_QMARK_(imp1,imp2){
var n = cljs.core.count(imp1);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(n,cljs.core.count(imp2))){
var i = (0);
while(true){
var or__4126__auto__ = (i >= n);
if(or__4126__auto__){
return or__4126__auto__;
} else {
if((((cljs.core.get.cljs$core$IFn$_invoke$arity$2(imp1,i) == null)) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(imp1,i),cljs.core.get.cljs$core$IFn$_invoke$arity$2(imp2,i))))){
var G__68139 = (i + (1));
i = G__68139;
continue;
} else {
return false;
}
}
break;
}
} else {
return false;
}
});
bfuncs.minimization.compatible_QMARK_ = (function bfuncs$minimization$compatible_QMARK_(imp1,imp2){

var n = cljs.core.count(imp1);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(imp2),n)){
var i = (0);
var d = true;
while(true){
if((i >= n)){
return true;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(imp1,i),cljs.core.get.cljs$core$IFn$_invoke$arity$2(imp2,i))){
var G__68141 = (i + (1));
var G__68142 = d;
i = G__68141;
d = G__68142;
continue;
} else {
var and__4115__auto__ = d;
if(cljs.core.truth_(and__4115__auto__)){
var G__68143 = (i + (1));
var G__68144 = false;
i = G__68143;
d = G__68144;
continue;
} else {
return and__4115__auto__;
}

}
}
break;
}
} else {
return false;
}
});
/**
 * Returns true if imp1 and imp2 are the same length and consistent;
 *   that is, if there exists no index for which the values of imp1 and imp2 are non-nil and distinct. 
 */
bfuncs.minimization.consistent_QMARK_ = (function bfuncs$minimization$consistent_QMARK_(imp1,imp2){
var n = cljs.core.count(imp1);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(imp2),n)){
var i = (0);
while(true){
if((i >= n)){
return true;
} else {
if(cljs.core.not((function (){var temp__5739__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(imp1,i);
if((temp__5739__auto__ == null)){
return null;
} else {
var x1 = temp__5739__auto__;
var temp__5739__auto____$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(imp2,i);
if((temp__5739__auto____$1 == null)){
return null;
} else {
var x2 = temp__5739__auto____$1;
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(x1,x2);
}
}
})())){
var G__68145 = (i + (1));
i = G__68145;
continue;
} else {
return false;

}
}
break;
}
} else {
return false;
}
});
/**
 * Combines implicants when they differ in at most one position, returns nil otherwise.
 * 
 *   A returned vector v satisfies both (covers? v imp1) and (covers? v imp2),
 *   i.e. it has the same values as the inputs, except for nil where where they
 *   differ.
 */
bfuncs.minimization.combine_implicants = (function bfuncs$minimization$combine_implicants(var_args){
var G__67738 = arguments.length;
switch (G__67738) {
case 2:
return bfuncs.minimization.combine_implicants.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return bfuncs.minimization.combine_implicants.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(bfuncs.minimization.combine_implicants.cljs$core$IFn$_invoke$arity$2 = (function (imp1,imp2){
return bfuncs.minimization.combine_implicants.cljs$core$IFn$_invoke$arity$3(imp1,imp2,false);
}));

(bfuncs.minimization.combine_implicants.cljs$core$IFn$_invoke$arity$3 = (function (imp1,imp2,meta_QMARK_){
var n = cljs.core.count(imp1);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(imp2),n)){
var i = (0);
var di = null;
while(true){
if((i >= n)){
var i1 = ((cljs.core.vector_QMARK_(imp1))?imp1:cljs.core.vec(imp1));
var res = (cljs.core.truth_(di)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(i1,di,null):i1);
if(cljs.core.truth_(meta_QMARK_)){
return cljs.core.with_meta(res,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"terms","terms",-1556977978),cljs.core.into.cljs$core$IFn$_invoke$arity$2(bfuncs.minimization.covered_terms(imp1),bfuncs.minimization.covered_terms(imp2))], null));
} else {
return res;
}
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(imp1,i),cljs.core.get.cljs$core$IFn$_invoke$arity$2(imp2,i))){
var G__68147 = (i + (1));
var G__68148 = di;
i = G__68147;
di = G__68148;
continue;
} else {
if(cljs.core.truth_(di)){
return null;
} else {
var G__68149 = (i + (1));
var G__68150 = i;
i = G__68149;
di = G__68150;
continue;
}

}
}
break;
}
} else {
return null;
}
}));

(bfuncs.minimization.combine_implicants.cljs$lang$maxFixedArity = 3);

/**
 * Takes two collections of implicants (expected to be disjoint), and
 *   evaluates (combine-implicants i1 i2) for all i1 in group1 and i2 in group2.
 *   If the result is nil for all pairs of implicants, returns nil. Otherwise,
 *   returns [combined combinations], where combined is the set of inputs on which
 *   combine-implicants produced a non-nil result at least once, and combinations
 *   is the set of those results.
 */
bfuncs.minimization.combine_groups = (function bfuncs$minimization$combine_groups(var_args){
var G__67756 = arguments.length;
switch (G__67756) {
case 2:
return bfuncs.minimization.combine_groups.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return bfuncs.minimization.combine_groups.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(bfuncs.minimization.combine_groups.cljs$core$IFn$_invoke$arity$2 = (function (group1,group2){
return bfuncs.minimization.combine_groups.cljs$core$IFn$_invoke$arity$3(group1,group2,false);
}));

(bfuncs.minimization.combine_groups.cljs$core$IFn$_invoke$arity$3 = (function (group1,group2,meta_QMARK_){
var combined = cljs.core.transient$(cljs.core.PersistentVector.EMPTY);
var combs = cljs.core.transient$(cljs.core.PersistentHashSet.EMPTY);
var group1__$1 = group1;
while(true){
var temp__5733__auto__ = cljs.core.first(group1__$1);
if(cljs.core.truth_(temp__5733__auto__)){
var imp1 = temp__5733__auto__;
var vec__67772 = (function (){var combined__$1 = combined;
var combinations = combs;
var added_imp1 = false;
var group2__$1 = group2;
while(true){
var temp__5733__auto____$1 = cljs.core.first(group2__$1);
if(cljs.core.truth_(temp__5733__auto____$1)){
var imp2 = temp__5733__auto____$1;
var temp__5733__auto____$2 = bfuncs.minimization.combine_implicants.cljs$core$IFn$_invoke$arity$3(imp1,imp2,meta_QMARK_);
if(cljs.core.truth_(temp__5733__auto____$2)){
var comb = temp__5733__auto____$2;
var G__68157 = cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$2((cljs.core.truth_(added_imp1)?combined__$1:cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$2(combined__$1,imp1)),imp2);
var G__68158 = cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$2(combinations,comb);
var G__68159 = true;
var G__68160 = cljs.core.next(group2__$1);
combined__$1 = G__68157;
combinations = G__68158;
added_imp1 = G__68159;
group2__$1 = G__68160;
continue;
} else {
var G__68161 = combined__$1;
var G__68162 = combinations;
var G__68163 = added_imp1;
var G__68164 = cljs.core.next(group2__$1);
combined__$1 = G__68161;
combinations = G__68162;
added_imp1 = G__68163;
group2__$1 = G__68164;
continue;
}
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [combined__$1,combinations], null);
}
break;
}
})();
var cbnd = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67772,(0),null);
var cmbs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67772,(1),null);
var G__68166 = cbnd;
var G__68167 = cmbs;
var G__68168 = cljs.core.next(group1__$1);
combined = G__68166;
combs = G__68167;
group1__$1 = G__68168;
continue;
} else {
if((cljs.core.count(combs) > (0))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.persistent_BANG_(combined),cljs.core.persistent_BANG_(combs)], null);
} else {
return null;
}
}
break;
}
}));

(bfuncs.minimization.combine_groups.cljs$lang$maxFixedArity = 3);

/**
 * Returns the set of prime implicants from a collection of terms, specified as vectors.
 */
bfuncs.minimization.prime_implicants = (function bfuncs$minimization$prime_implicants(var_args){
var G__67792 = arguments.length;
switch (G__67792) {
case 1:
return bfuncs.minimization.prime_implicants.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return bfuncs.minimization.prime_implicants.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(bfuncs.minimization.prime_implicants.cljs$core$IFn$_invoke$arity$1 = (function (implicants){
return bfuncs.minimization.prime_implicants.cljs$core$IFn$_invoke$arity$2(implicants,false);
}));

(bfuncs.minimization.prime_implicants.cljs$core$IFn$_invoke$arity$2 = (function (implicants,meta_QMARK_){
var primes = cljs.core.PersistentHashSet.EMPTY;
var implicants__$1 = implicants;
while(true){
if(cljs.core.seq(implicants__$1)){
var groups = cljs.core.group_by(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(bfuncs.utils.count_when,cljs.core.true_QMARK_),implicants__$1);
var vec__67814 = (function (){var combined = cljs.core.PersistentHashSet.EMPTY;
var combs = cljs.core.PersistentHashSet.EMPTY;
var entries = groups;
while(true){
var temp__5733__auto__ = cljs.core.first(entries);
if(cljs.core.truth_(temp__5733__auto__)){
var vec__67823 = temp__5733__auto__;
var n = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67823,(0),null);
var group = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67823,(1),null);
var temp__5733__auto____$1 = bfuncs.minimization.combine_groups.cljs$core$IFn$_invoke$arity$3(group,cljs.core.get.cljs$core$IFn$_invoke$arity$2(groups,(n + (1))),meta_QMARK_);
if(cljs.core.truth_(temp__5733__auto____$1)){
var vec__67829 = temp__5733__auto____$1;
var cbnd = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67829,(0),null);
var cmbs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67829,(1),null);
var G__68170 = cljs.core.into.cljs$core$IFn$_invoke$arity$2(combined,cbnd);
var G__68171 = cljs.core.into.cljs$core$IFn$_invoke$arity$2(combs,cmbs);
var G__68172 = cljs.core.next(entries);
combined = G__68170;
combs = G__68171;
entries = G__68172;
continue;
} else {
var G__68173 = combined;
var G__68174 = combs;
var G__68175 = cljs.core.next(entries);
combined = G__68173;
combs = G__68174;
entries = G__68175;
continue;
}
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.remove.cljs$core$IFn$_invoke$arity$2(combined,implicants__$1),combs], null);
}
break;
}
})();
var new_primes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67814,(0),null);
var next_implicants = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67814,(1),null);
var G__68176 = cljs.core.into.cljs$core$IFn$_invoke$arity$2(primes,new_primes);
var G__68177 = next_implicants;
primes = G__68176;
implicants__$1 = G__68177;
continue;
} else {
return primes;
}
break;
}
}));

(bfuncs.minimization.prime_implicants.cljs$lang$maxFixedArity = 2);

/**
 * Returns the set of prime implicants from a collection of terms, specified as vectors.
 */
bfuncs.minimization.prime_implicant_steps = (function bfuncs$minimization$prime_implicant_steps(implicants){
var steps = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.transient$(cljs.core.PersistentVector.EMPTY));
var primes = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.transient$(cljs.core.PersistentVector.EMPTY));
var prime_i = cljs.core.atom.cljs$core$IFn$_invoke$arity$1((0));
var push_prime_BANG_ = (function (p){
var np = cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$6(p,cljs.core.assoc,new cljs.core.Keyword(null,"prime-index","prime-index",-1428577630),cljs.core.deref(prime_i),new cljs.core.Keyword(null,"step","step",1288888124),cljs.core.count(cljs.core.deref(steps)));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(prime_i,cljs.core.inc);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(primes,cljs.core.conj_BANG_,np);

return np;
});
var implicants__$1 = implicants;
while(true){
if(cljs.core.seq(implicants__$1)){
var groups = cljs.core.group_by(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(bfuncs.utils.count_when,cljs.core.true_QMARK_),implicants__$1);
var G__68178 = (function (){var combined = cljs.core.PersistentHashSet.EMPTY;
var combs = cljs.core.PersistentHashSet.EMPTY;
var entries = groups;
while(true){
var temp__5733__auto__ = cljs.core.first(entries);
if(cljs.core.truth_(temp__5733__auto__)){
var vec__67843 = temp__5733__auto__;
var n = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67843,(0),null);
var group = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67843,(1),null);
var temp__5733__auto____$1 = bfuncs.minimization.combine_groups.cljs$core$IFn$_invoke$arity$3(group,cljs.core.get.cljs$core$IFn$_invoke$arity$2(groups,(n + (1))),true);
if(cljs.core.truth_(temp__5733__auto____$1)){
var vec__67846 = temp__5733__auto____$1;
var cbnd = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67846,(0),null);
var cmbs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67846,(1),null);
var G__68179 = cljs.core.into.cljs$core$IFn$_invoke$arity$2(combined,cbnd);
var G__68180 = cljs.core.into.cljs$core$IFn$_invoke$arity$2(combs,cmbs);
var G__68181 = cljs.core.next(entries);
combined = G__68179;
combs = G__68180;
entries = G__68181;
continue;
} else {
var G__68182 = combined;
var G__68183 = combs;
var G__68184 = cljs.core.next(entries);
combined = G__68182;
combs = G__68183;
entries = G__68184;
continue;
}
} else {
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(steps,cljs.core.conj_BANG_,bfuncs.utils.map_vals(((function (combined,combs,entries,implicants__$1,temp__5733__auto__,groups,steps,primes,prime_i,push_prime_BANG_){
return (function (xs){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(((function (combined,combs,entries,implicants__$1,temp__5733__auto__,groups,steps,primes,prime_i,push_prime_BANG_){
return (function (p1__67832_SHARP_){
if(cljs.core.contains_QMARK_(combined,p1__67832_SHARP_)){
return p1__67832_SHARP_;
} else {
return push_prime_BANG_(p1__67832_SHARP_);
}
});})(combined,combs,entries,implicants__$1,temp__5733__auto__,groups,steps,primes,prime_i,push_prime_BANG_))
,cljs.core.sort.cljs$core$IFn$_invoke$arity$2(bfuncs.minimization.compare_implicants,xs));
});})(combined,combs,entries,implicants__$1,temp__5733__auto__,groups,steps,primes,prime_i,push_prime_BANG_))
,cljs.core.sort.cljs$core$IFn$_invoke$arity$1(groups)));

return combs;
}
break;
}
})();
implicants__$1 = G__68178;
continue;
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.persistent_BANG_(cljs.core.deref(steps)),cljs.core.persistent_BANG_(cljs.core.deref(primes))], null);
}
break;
}
});
/**
 * Given a coll of covering implicants and a coll of implicants to be covered,
 *   returns the pair [cvec csets], where where cvec is a vector of coverers
 *   suitable for indexing, and csets is a sequence of sets, the nth of which
 *   contains the indices of elements in cvec which cover the nth item in covered.
 * 
 *   (covering-sets #{[0 1 nil nil] [nil 1 nil 0]}
 *               [[0 1 1 1] [0 1 0 0] [1 1 0 0]])
 *   ; => [[[0 1 nil nil] [nil 1 nil 0]] (#{0} #{0 1} #{1})]  
 */
bfuncs.minimization.covering_sets = (function bfuncs$minimization$covering_sets(coverers,covered){
var prime_vec = cljs.core.vec(coverers);
var idx_set = cljs.core.set(cljs.core.range.cljs$core$IFn$_invoke$arity$1(cljs.core.count(prime_vec)));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [prime_vec,(function (){var iter__4529__auto__ = (function bfuncs$minimization$covering_sets_$_iter__67850(s__67851){
return (new cljs.core.LazySeq(null,(function (){
var s__67851__$1 = s__67851;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__67851__$1);
if(temp__5735__auto__){
var s__67851__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__67851__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__67851__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__67853 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__67852 = (0);
while(true){
if((i__67852 < size__4528__auto__)){
var t = cljs.core._nth(c__4527__auto__,i__67852);
cljs.core.chunk_append(b__67853,bfuncs.utils.select(((function (i__67852,t,c__4527__auto__,size__4528__auto__,b__67853,s__67851__$2,temp__5735__auto__,prime_vec,idx_set){
return (function (p1__67849_SHARP_){
return bfuncs.minimization.covers_QMARK_(cljs.core.get.cljs$core$IFn$_invoke$arity$2(prime_vec,p1__67849_SHARP_),t);
});})(i__67852,t,c__4527__auto__,size__4528__auto__,b__67853,s__67851__$2,temp__5735__auto__,prime_vec,idx_set))
,idx_set));

var G__68189 = (i__67852 + (1));
i__67852 = G__68189;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__67853),bfuncs$minimization$covering_sets_$_iter__67850(cljs.core.chunk_rest(s__67851__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__67853),null);
}
} else {
var t = cljs.core.first(s__67851__$2);
return cljs.core.cons(bfuncs.utils.select(((function (t,s__67851__$2,temp__5735__auto__,prime_vec,idx_set){
return (function (p1__67849_SHARP_){
return bfuncs.minimization.covers_QMARK_(cljs.core.get.cljs$core$IFn$_invoke$arity$2(prime_vec,p1__67849_SHARP_),t);
});})(t,s__67851__$2,temp__5735__auto__,prime_vec,idx_set))
,idx_set),bfuncs$minimization$covering_sets_$_iter__67850(cljs.core.rest(s__67851__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4529__auto__(covered);
})()], null);
});
/**
 * Takes a collection of collections, and returns the set of items that appear
 *   inside singletons.
 */
bfuncs.minimization.essential_elements = (function bfuncs$minimization$essential_elements(colls){
var es = cljs.core.transient$(cljs.core.PersistentHashSet.EMPTY);
var colls__$1 = colls;
while(true){
var temp__5733__auto__ = cljs.core.seq(colls__$1);
if(temp__5733__auto__){
var xs__27556__auto__ = temp__5733__auto__;
var coll = cljs.core.first(xs__27556__auto__);
var G__68194 = ((bfuncs.utils.singleton_QMARK_(coll))?cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$2(es,cljs.core.first(coll)):es);
var G__68195 = cljs.core.next(colls__$1);
es = G__68194;
colls__$1 = G__68195;
continue;
} else {
return cljs.core.persistent_BANG_(es);
}
break;
}
});
/**
 * Takes a collection of collections, and returns a map of items that appear within singletons
 *   to the indices at which they appear.
 */
bfuncs.minimization.essential_elements_indexed = (function bfuncs$minimization$essential_elements_indexed(colls){
var i = (0);
var es = cljs.core.transient$(cljs.core.PersistentArrayMap.EMPTY);
var colls__$1 = colls;
while(true){
var temp__5733__auto__ = cljs.core.seq(colls__$1);
if(temp__5733__auto__){
var xs__27556__auto__ = temp__5733__auto__;
var coll = cljs.core.first(xs__27556__auto__);
var G__68196 = (i + (1));
var G__68197 = ((bfuncs.utils.singleton_QMARK_(coll))?(function (){var e = cljs.core.first(coll);
return cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(es,e,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$3(es,e,cljs.core.PersistentVector.EMPTY),i));
})():es);
var G__68198 = cljs.core.next(colls__$1);
i = G__68196;
es = G__68197;
colls__$1 = G__68198;
continue;
} else {
return cljs.core.persistent_BANG_(es);
}
break;
}
});
/**
 * Given a collection of collections, returns a vector [ess rem], where ess is
 *   the set of essential elements of colls, and rem is the set of non-empty
 *   collections in colls disjoint from ess.
 */
bfuncs.minimization.separate_essentials = (function bfuncs$minimization$separate_essentials(colls){
var essentials = bfuncs.minimization.essential_elements(colls);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [essentials,cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentHashSet.EMPTY,cljs.core.filter.cljs$core$IFn$_invoke$arity$1((function (p1__67866_SHARP_){
return ((cljs.core.seq(p1__67866_SHARP_)) && (bfuncs.utils.disjoint_QMARK_(essentials,p1__67866_SHARP_)));
})),colls)], null);
});
/**
 * Given a collection of collections, returns a vector [ess rem], where ess is
 *   the set of essential elements of colls, and rem is the set of non-empty
 *   collections in colls disjoint from ess.
 */
bfuncs.minimization.separate_essentials_indexed = (function bfuncs$minimization$separate_essentials_indexed(colls){
var essentials = bfuncs.minimization.essential_elements_indexed(colls);
var ess_keys = cljs.core.set(cljs.core.keys(essentials));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [essentials,cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$1((function (p1__67871_SHARP_,p2__67870_SHARP_){
if(((cljs.core.seq(p2__67870_SHARP_)) && (bfuncs.utils.disjoint_QMARK_(ess_keys,p2__67870_SHARP_)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__67871_SHARP_,p2__67870_SHARP_], null);
} else {
return null;
}
})),colls)], null);
});
bfuncs.minimization.join_bprod = (function bfuncs$minimization$join_bprod(coll,bexpr){
if((bexpr == null)){
return coll;
} else {
if(bfuncs.algebra.bprod_QMARK_(bexpr)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(coll,bexpr);
} else {
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(coll,bexpr);

}
}
});
bfuncs.minimization.minimal_covers = (function bfuncs$minimization$minimal_covers(primes,implicants){
var vec__67890 = bfuncs.minimization.covering_sets(primes,implicants);
var primes_vec = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67890,(0),null);
var covers = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67890,(1),null);
var vec__67893 = bfuncs.minimization.separate_essentials(covers);
var ess = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67893,(0),null);
var rem = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67893,(1),null);
var iter__4529__auto__ = (function bfuncs$minimization$minimal_covers_$_iter__67896(s__67897){
return (new cljs.core.LazySeq(null,(function (){
var s__67897__$1 = s__67897;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__67897__$1);
if(temp__5735__auto__){
var s__67897__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__67897__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__67897__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__67899 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__67898 = (0);
while(true){
if((i__67898 < size__4528__auto__)){
var cover = cljs.core._nth(c__4527__auto__,i__67898);
cljs.core.chunk_append(b__67899,cljs.core.map.cljs$core$IFn$_invoke$arity$2(primes_vec,cover));

var G__68240 = (i__67898 + (1));
i__67898 = G__68240;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__67899),bfuncs$minimization$minimal_covers_$_iter__67896(cljs.core.chunk_rest(s__67897__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__67899),null);
}
} else {
var cover = cljs.core.first(s__67897__$2);
return cljs.core.cons(cljs.core.map.cljs$core$IFn$_invoke$arity$2(primes_vec,cover),bfuncs$minimization$minimal_covers_$_iter__67896(cljs.core.rest(s__67897__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4529__auto__(((cljs.core.seq(rem))?(function (){var dnf = bfuncs.algebra.__GT_SOP(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(bfuncs.algebra._AMPERSAND__AMPERSAND__STAR_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.apply,bfuncs.algebra._BAR__BAR__STAR_),rem)));
if(bfuncs.algebra.bsum_QMARK_(dnf)){
var counts = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(bfuncs.utils.count_when,cljs.core.some_QMARK_),primes_vec);
var score = (function (p1__67887_SHARP_){
if(bfuncs.algebra.bprod_QMARK_(p1__67887_SHARP_)){
return bfuncs.utils.map_reduce.cljs$core$IFn$_invoke$arity$3(counts,cljs.core._PLUS_,p1__67887_SHARP_);
} else {
return (counts.cljs$core$IFn$_invoke$arity$1 ? counts.cljs$core$IFn$_invoke$arity$1(p1__67887_SHARP_) : counts.call(null,p1__67887_SHARP_));
}
});
var iter__4529__auto____$1 = (function bfuncs$minimization$minimal_covers_$_iter__67900(s__67901){
return (new cljs.core.LazySeq(null,(function (){
var s__67901__$1 = s__67901;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__67901__$1);
if(temp__5735__auto__){
var s__67901__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__67901__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__67901__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__67903 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__67902 = (0);
while(true){
if((i__67902 < size__4528__auto__)){
var term = cljs.core._nth(c__4527__auto__,i__67902);
cljs.core.chunk_append(b__67903,bfuncs.minimization.join_bprod(ess,term));

var G__68251 = (i__67902 + (1));
i__67902 = G__68251;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__67903),bfuncs$minimization$minimal_covers_$_iter__67900(cljs.core.chunk_rest(s__67901__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__67903),null);
}
} else {
var term = cljs.core.first(s__67901__$2);
return cljs.core.cons(bfuncs.minimization.join_bprod(ess,term),bfuncs$minimization$minimal_covers_$_iter__67900(cljs.core.rest(s__67901__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4529__auto____$1(cljs.core.first(bfuncs.utils.minimal_by(score,dnf)));
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [bfuncs.minimization.join_bprod(ess,dnf)], null);
}
})():new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ess], null)));
});
bfuncs.minimization.bobj__GT_implicants = (function bfuncs$minimization$bobj__GT_implicants(bobj){
var s67907 = bobj;
var s67907__$1 = ((cljs.core.not(bfuncs.algebra.sum_of_prods_QMARK_(bobj)))?bfuncs.algebra.__GT_SOP(s67907):s67907);
return bfuncs.minimization.maps__GT_implicants.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function bfuncs$minimization$bobj__GT_implicants_$_go(x){
if(bfuncs.algebra.bvar_QMARK_(x)){
return cljs.core.PersistentArrayMap.createAsIfByAssoc([x,true]);
} else {
if(((bfuncs.algebra.bnot_QMARK_(x)) && (bfuncs.algebra.bvar_QMARK_(cljs.core.first(x))))){
return cljs.core.PersistentArrayMap.createAsIfByAssoc([cljs.core.first(x),false]);
} else {
return cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(bfuncs$minimization$bobj__GT_implicants_$_go),x);

}
}
}),s67907__$1));
});
bfuncs.minimization.imp__GT__AMPERSAND__AMPERSAND_ = (function bfuncs$minimization$imp__GT__AMPERSAND__AMPERSAND_(vars,imp){
var vars__$1 = vars;
var imp__$1 = imp;
var res = true;
while(true){
if(((cljs.core.empty_QMARK_(vars__$1)) || (cljs.core.empty_QMARK_(imp__$1)))){
return res;
} else {
var G__68256 = cljs.core.next(vars__$1);
var G__68257 = cljs.core.next(imp__$1);
var G__68258 = (((cljs.core.first(imp__$1) == null))?res:bfuncs.algebra._AMPERSAND__AMPERSAND_.cljs$core$IFn$_invoke$arity$2(res,(function (){var G__67909 = cljs.core.first(vars__$1);
if(cljs.core.not(cljs.core.first(imp__$1))){
return bfuncs.algebra._BANG_(G__67909);
} else {
return G__67909;
}
})()));
vars__$1 = G__68256;
imp__$1 = G__68257;
res = G__68258;
continue;
}
break;
}
});
bfuncs.minimization.imp__GT__BAR__BAR_ = (function bfuncs$minimization$imp__GT__BAR__BAR_(vars,imp){
var vars__$1 = vars;
var imp__$1 = imp;
var res = false;
while(true){
if(((cljs.core.empty_QMARK_(vars__$1)) || (cljs.core.empty_QMARK_(imp__$1)))){
return res;
} else {
var G__68261 = cljs.core.next(vars__$1);
var G__68262 = cljs.core.next(imp__$1);
var G__68263 = (((cljs.core.first(imp__$1) == null))?res:bfuncs.algebra._BAR__BAR_.cljs$core$IFn$_invoke$arity$2(res,(function (){var G__67913 = cljs.core.first(vars__$1);
if(cljs.core.truth_(cljs.core.first(imp__$1))){
return bfuncs.algebra._BANG_(G__67913);
} else {
return G__67913;
}
})()));
vars__$1 = G__68261;
imp__$1 = G__68262;
res = G__68263;
continue;
}
break;
}
});
bfuncs.minimization.imp__GT_bobj_fn = (function bfuncs$minimization$imp__GT_bobj_fn(target_form,vars){
var inner = (function (){var G__67921 = target_form;
var G__67921__$1 = (((G__67921 instanceof cljs.core.Keyword))?G__67921.fqn:null);
switch (G__67921__$1) {
case "SOP":
return bfuncs.algebra._AMPERSAND__AMPERSAND_;

break;
case "POS":
return bfuncs.algebra._BAR__BAR_;

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__67921__$1)].join('')));

}
})();
var conv = (function (){var G__67922 = target_form;
var G__67922__$1 = (((G__67922 instanceof cljs.core.Keyword))?G__67922.fqn:null);
switch (G__67922__$1) {
case "SOP":
return (function (p1__67917_SHARP_,p2__67918_SHARP_){
if(cljs.core.truth_(p1__67917_SHARP_)){
return p2__67918_SHARP_;
} else {
return bfuncs.algebra._BANG_(p2__67918_SHARP_);
}
});

break;
case "POS":
return (function (p1__67919_SHARP_,p2__67920_SHARP_){
if(cljs.core.truth_(p1__67919_SHARP_)){
return bfuncs.algebra._BANG_(p2__67920_SHARP_);
} else {
return p2__67920_SHARP_;
}
});

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__67922__$1)].join('')));

}
})();
return (function (imp){
var vars__$1 = vars;
var imp__$1 = imp;
var res = (inner.cljs$core$IFn$_invoke$arity$0 ? inner.cljs$core$IFn$_invoke$arity$0() : inner.call(null));
while(true){
if(((cljs.core.empty_QMARK_(vars__$1)) || (cljs.core.empty_QMARK_(imp__$1)))){
return res;
} else {
var G__68273 = cljs.core.next(vars__$1);
var G__68274 = cljs.core.next(imp__$1);
var G__68275 = (((cljs.core.first(imp__$1) == null))?res:(function (){var G__67926 = res;
var G__67927 = (function (){var G__67928 = cljs.core.first(imp__$1);
var G__67929 = cljs.core.first(vars__$1);
return (conv.cljs$core$IFn$_invoke$arity$2 ? conv.cljs$core$IFn$_invoke$arity$2(G__67928,G__67929) : conv.call(null,G__67928,G__67929));
})();
return (inner.cljs$core$IFn$_invoke$arity$2 ? inner.cljs$core$IFn$_invoke$arity$2(G__67926,G__67927) : inner.call(null,G__67926,G__67927));
})());
vars__$1 = G__68273;
imp__$1 = G__68274;
res = G__68275;
continue;
}
break;
}
});
});
bfuncs.minimization.imp__GT_bobj = (function bfuncs$minimization$imp__GT_bobj(target_form,vars,imp){
var inner = (function (){var G__67934 = target_form;
var G__67934__$1 = (((G__67934 instanceof cljs.core.Keyword))?G__67934.fqn:null);
switch (G__67934__$1) {
case "SOP":
return bfuncs.algebra._AMPERSAND__AMPERSAND_;

break;
case "POS":
return bfuncs.algebra._BAR__BAR_;

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__67934__$1)].join('')));

}
})();
var conv = (function (){var G__67935 = target_form;
var G__67935__$1 = (((G__67935 instanceof cljs.core.Keyword))?G__67935.fqn:null);
switch (G__67935__$1) {
case "SOP":
return (function (p1__67930_SHARP_,p2__67931_SHARP_){
if(cljs.core.truth_(p1__67930_SHARP_)){
return p2__67931_SHARP_;
} else {
return bfuncs.algebra._BANG_(p2__67931_SHARP_);
}
});

break;
case "POS":
return (function (p1__67932_SHARP_,p2__67933_SHARP_){
if(cljs.core.truth_(p1__67932_SHARP_)){
return bfuncs.algebra._BANG_(p2__67933_SHARP_);
} else {
return p2__67933_SHARP_;
}
});

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__67935__$1)].join('')));

}
})();
var vars__$1 = vars;
var imp__$1 = imp;
var res = (inner.cljs$core$IFn$_invoke$arity$0 ? inner.cljs$core$IFn$_invoke$arity$0() : inner.call(null));
while(true){
if(((cljs.core.empty_QMARK_(vars__$1)) || (cljs.core.empty_QMARK_(imp__$1)))){
return res;
} else {
var G__68286 = cljs.core.next(vars__$1);
var G__68287 = cljs.core.next(imp__$1);
var G__68288 = (((cljs.core.first(imp__$1) == null))?res:(function (){var G__67939 = res;
var G__67940 = (function (){var G__67941 = cljs.core.first(imp__$1);
var G__67942 = cljs.core.first(vars__$1);
return (conv.cljs$core$IFn$_invoke$arity$2 ? conv.cljs$core$IFn$_invoke$arity$2(G__67941,G__67942) : conv.call(null,G__67941,G__67942));
})();
return (inner.cljs$core$IFn$_invoke$arity$2 ? inner.cljs$core$IFn$_invoke$arity$2(G__67939,G__67940) : inner.call(null,G__67939,G__67940));
})());
vars__$1 = G__68286;
imp__$1 = G__68287;
res = G__68288;
continue;
}
break;
}
});
bfuncs.minimization.imps__GT_bobj_fn = (function bfuncs$minimization$imps__GT_bobj_fn(target_form,vars){
var f = bfuncs.minimization.imp__GT_bobj_fn(target_form,vars);
var outer = (function (){var G__67943 = target_form;
var G__67943__$1 = (((G__67943 instanceof cljs.core.Keyword))?G__67943.fqn:null);
switch (G__67943__$1) {
case "SOP":
return bfuncs.algebra._BAR__BAR_;

break;
case "POS":
return bfuncs.algebra._AMPERSAND__AMPERSAND_;

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__67943__$1)].join('')));

}
})();
return cljs.core.partial.cljs$core$IFn$_invoke$arity$3(bfuncs.utils.map_reduce,f,outer);
});
bfuncs.minimization.imps__GT_bobj = (function bfuncs$minimization$imps__GT_bobj(target_form,vars,imps){
return bfuncs.utils.map_reduce.cljs$core$IFn$_invoke$arity$3(bfuncs.minimization.imp__GT_bobj_fn(target_form,vars),(function (){var G__67944 = target_form;
var G__67944__$1 = (((G__67944 instanceof cljs.core.Keyword))?G__67944.fqn:null);
switch (G__67944__$1) {
case "SOP":
return bfuncs.algebra._BAR__BAR_;

break;
case "POS":
return bfuncs.algebra._AMPERSAND__AMPERSAND_;

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__67944__$1)].join('')));

}
})(),imps);
});
bfuncs.minimization.imps__GT_bobjs = (function bfuncs$minimization$imps__GT_bobjs(target_form,vars,imps){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(bfuncs.minimization.imp__GT_bobj_fn(target_form,vars),imps);
});
bfuncs.minimization.int__GT_bobj = (function bfuncs$minimization$int__GT_bobj(vars,g,int$){
var vars__$1 = cljs.core.seq(vars);
var i = (cljs.core.count(vars__$1) - (1));
var x = (g.cljs$core$IFn$_invoke$arity$0 ? g.cljs$core$IFn$_invoke$arity$0() : g.call(null));
while(true){
if(vars__$1){
var G__68307 = cljs.core.next(vars__$1);
var G__68308 = (i - (1));
var G__68309 = (function (){var G__67947 = x;
var G__67948 = ((((int$ & (1 << i)) != 0))?cljs.core.first(vars__$1):bfuncs.algebra._BANG_(cljs.core.first(vars__$1)));
return (g.cljs$core$IFn$_invoke$arity$2 ? g.cljs$core$IFn$_invoke$arity$2(G__67947,G__67948) : g.call(null,G__67947,G__67948));
})();
vars__$1 = G__68307;
i = G__68308;
x = G__68309;
continue;
} else {
return x;
}
break;
}
});
bfuncs.minimization.ints__GT_bobj = (function bfuncs$minimization$ints__GT_bobj(vars,outer,inner,ints){
return bfuncs.utils.map_reduce.cljs$core$IFn$_invoke$arity$3(cljs.core.partial.cljs$core$IFn$_invoke$arity$3(bfuncs.minimization.int__GT_bobj,vars,inner),outer,ints);
});
bfuncs.minimization.int__GT_imp = (function bfuncs$minimization$int__GT_imp(var_args){
var G__67958 = arguments.length;
switch (G__67958) {
case 1:
return bfuncs.minimization.int__GT_imp.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return bfuncs.minimization.int__GT_imp.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(bfuncs.minimization.int__GT_imp.cljs$core$IFn$_invoke$arity$1 = (function (x){
return bfuncs.minimization.int__GT_imp.cljs$core$IFn$_invoke$arity$2(x,null);
}));

(bfuncs.minimization.int__GT_imp.cljs$core$IFn$_invoke$arity$2 = (function (x,n){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.bit_test,x),cljs.core.range.cljs$core$IFn$_invoke$arity$3(((function (){var or__4126__auto__ = n;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return bfuncs.utils.max_set_bit(x);
}
})() - (1)),(-1),(-1)));
}));

(bfuncs.minimization.int__GT_imp.cljs$lang$maxFixedArity = 2);

/**
 * With one argument, returns [vars terms], where vars is a vector of all
 *   distinct keys of items in maps, and minterms is a sequence of full terms with
 *   respect to those keys. If a collection of keys is is provided, returns the
 *   sequence of terms with respect to those keys.
 */
bfuncs.minimization.maps__GT_full_terms = (function bfuncs$minimization$maps__GT_full_terms(var_args){
var G__67962 = arguments.length;
switch (G__67962) {
case 2:
return bfuncs.minimization.maps__GT_full_terms.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return bfuncs.minimization.maps__GT_full_terms.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(bfuncs.minimization.maps__GT_full_terms.cljs$core$IFn$_invoke$arity$2 = (function (vars,maps){
return cljs.core.distinct.cljs$core$IFn$_invoke$arity$1(cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(bfuncs.minimization.full_terms,vars),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([maps], 0)));
}));

(bfuncs.minimization.maps__GT_full_terms.cljs$core$IFn$_invoke$arity$3 = (function (vars,maps,meta_QMARK_){
return cljs.core.distinct.cljs$core$IFn$_invoke$arity$1(cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.partial.cljs$core$IFn$_invoke$arity$2((cljs.core.truth_(meta_QMARK_)?bfuncs.minimization.full_terms_with_meta:bfuncs.minimization.full_terms),vars),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([maps], 0)));
}));

(bfuncs.minimization.maps__GT_full_terms.cljs$lang$maxFixedArity = 3);

/**
 * Converts a bobj in dnf to a sequence of maps, each map representing a
 *   product. Assumes without checking that input is symbolic (i.e. not boolean
 *   primitive) bobj in dnf.
 */
bfuncs.minimization.dnf__GT_maps = (function bfuncs$minimization$dnf__GT_maps(bobj){
var go = (function bfuncs$minimization$dnf__GT_maps_$_go(x){
var G__67972 = bfuncs.data.operation(x);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(null,G__67972)){
return cljs.core.PersistentArrayMap.createAsIfByAssoc([x,true]);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"NOT","NOT",-1689245341),G__67972)){
return cljs.core.PersistentArrayMap.createAsIfByAssoc([cljs.core.first(x),false]);
} else {
return cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(bfuncs$minimization$dnf__GT_maps_$_go),x);

}
}
});
if(bfuncs.algebra.bsum_QMARK_(bobj)){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(go,bobj);
} else {
return (new cljs.core.List(null,go(bobj),null,(1),null));
}
});
bfuncs.minimization.cnf__GT_maps = (function bfuncs$minimization$cnf__GT_maps(bobj){
var go = (function bfuncs$minimization$cnf__GT_maps_$_go(x){
var G__67978 = bfuncs.data.operation(x);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(null,G__67978)){
return cljs.core.PersistentArrayMap.createAsIfByAssoc([x,true]);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"NOT","NOT",-1689245341),G__67978)){
return cljs.core.PersistentArrayMap.createAsIfByAssoc([cljs.core.first(x),false]);
} else {
return cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(bfuncs$minimization$cnf__GT_maps_$_go),x);

}
}
});
if(bfuncs.algebra.bsum_QMARK_(bobj)){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(go,bobj);
} else {
return (new cljs.core.List(null,go(bobj),null,(1),null));
}
});
bfuncs.minimization.normal_maps = (function bfuncs$minimization$normal_maps(op,bobj){
var go = (function (){var G__67982 = op;
var G__67982__$1 = (((G__67982 instanceof cljs.core.Keyword))?G__67982.fqn:null);
switch (G__67982__$1) {
case "OR":
return (function bfuncs$minimization$normal_maps_$_go(x){
var G__67983 = bfuncs.data.operation(x);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(null,G__67983)){
return cljs.core.PersistentArrayMap.createAsIfByAssoc([x,true]);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"NOT","NOT",-1689245341),G__67983)){
return cljs.core.PersistentArrayMap.createAsIfByAssoc([cljs.core.first(x),false]);
} else {
return cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(bfuncs$minimization$normal_maps_$_go),x);

}
}
});

break;
case "AND":
return (function bfuncs$minimization$normal_maps_$_go(x){
var G__67988 = bfuncs.data.operation(x);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(null,G__67988)){
return cljs.core.PersistentArrayMap.createAsIfByAssoc([x,false]);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"NOT","NOT",-1689245341),G__67988)){
return cljs.core.PersistentArrayMap.createAsIfByAssoc([cljs.core.first(x),true]);
} else {
return cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(bfuncs$minimization$normal_maps_$_go),x);

}
}
});

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__67982__$1)].join('')));

}
})();
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(op,bfuncs.data.operation(bobj))){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(go,bobj);
} else {
return (new cljs.core.List(null,(go.cljs$core$IFn$_invoke$arity$1 ? go.cljs$core$IFn$_invoke$arity$1(bobj) : go.call(null,bobj)),null,(1),null));
}
});
bfuncs.minimization.quine_mccluskey = (function bfuncs$minimization$quine_mccluskey(var_args){
var G__67994 = arguments.length;
switch (G__67994) {
case 1:
return bfuncs.minimization.quine_mccluskey.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return bfuncs.minimization.quine_mccluskey.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(bfuncs.minimization.quine_mccluskey.cljs$core$IFn$_invoke$arity$1 = (function (terms){
return bfuncs.minimization.quine_mccluskey.cljs$core$IFn$_invoke$arity$2(terms,null);
}));

(bfuncs.minimization.quine_mccluskey.cljs$core$IFn$_invoke$arity$2 = (function (terms,unspecified_terms){
return bfuncs.minimization.minimal_covers(bfuncs.minimization.prime_implicants.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(terms,unspecified_terms)),terms);
}));

(bfuncs.minimization.quine_mccluskey.cljs$lang$maxFixedArity = 2);

bfuncs.minimization.minimal_dnf = (function bfuncs$minimization$minimal_dnf(var_args){
var G__67996 = arguments.length;
switch (G__67996) {
case 1:
return bfuncs.minimization.minimal_dnf.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return bfuncs.minimization.minimal_dnf.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(bfuncs.minimization.minimal_dnf.cljs$core$IFn$_invoke$arity$1 = (function (bobj){
return bfuncs.minimization.minimal_dnf.cljs$core$IFn$_invoke$arity$2(bfuncs.parsing.variables(bobj),bobj);
}));

(bfuncs.minimization.minimal_dnf.cljs$core$IFn$_invoke$arity$2 = (function (vars,bobj){
if(cljs.core.empty_QMARK_(vars)){
return bobj;
} else {
return bfuncs.minimization.imps__GT_bobj(new cljs.core.Keyword(null,"SOP","SOP",-299014148),vars,cljs.core.first(bfuncs.minimization.quine_mccluskey.cljs$core$IFn$_invoke$arity$1(bfuncs.minimization.minterms.cljs$core$IFn$_invoke$arity$2(vars,bobj))));
}
}));

(bfuncs.minimization.minimal_dnf.cljs$lang$maxFixedArity = 2);

bfuncs.minimization.minimal_cnf = (function bfuncs$minimization$minimal_cnf(var_args){
var G__68004 = arguments.length;
switch (G__68004) {
case 1:
return bfuncs.minimization.minimal_cnf.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return bfuncs.minimization.minimal_cnf.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(bfuncs.minimization.minimal_cnf.cljs$core$IFn$_invoke$arity$1 = (function (bobj){
return bfuncs.minimization.minimal_cnf.cljs$core$IFn$_invoke$arity$2(bfuncs.parsing.variables(bobj),bobj);
}));

(bfuncs.minimization.minimal_cnf.cljs$core$IFn$_invoke$arity$2 = (function (vars,bobj){
if(cljs.core.empty_QMARK_(vars)){
return bobj;
} else {
return bfuncs.minimization.imps__GT_bobj(new cljs.core.Keyword(null,"POS","POS",-185748124),vars,cljs.core.first(bfuncs.minimization.quine_mccluskey.cljs$core$IFn$_invoke$arity$1(bfuncs.minimization.maxterms.cljs$core$IFn$_invoke$arity$2(vars,bobj))));
}
}));

(bfuncs.minimization.minimal_cnf.cljs$lang$maxFixedArity = 2);

bfuncs.minimization.minimal_things = (function bfuncs$minimization$minimal_things(target_form,vars,bobj){
if(cljs.core.empty_QMARK_(vars)){
return (new cljs.core.List(null,bobj,null,(1),null));
} else {
var terms = (function (){var fexpr__68009 = (function (){var G__68010 = target_form;
var G__68010__$1 = (((G__68010 instanceof cljs.core.Keyword))?G__68010.fqn:null);
switch (G__68010__$1) {
case "POS":
return bfuncs.minimization.maxterms;

break;
case "SOP":
return bfuncs.minimization.minterms;

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__68010__$1)].join('')));

}
})();
return (fexpr__68009.cljs$core$IFn$_invoke$arity$2 ? fexpr__68009.cljs$core$IFn$_invoke$arity$2(vars,bobj) : fexpr__68009.call(null,vars,bobj));
})();
if(cljs.core.seqable_QMARK_(terms)){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(bfuncs.minimization.imps__GT_bobj_fn(target_form,vars),bfuncs.minimization.quine_mccluskey.cljs$core$IFn$_invoke$arity$1(terms));
} else {
return (new cljs.core.List(null,terms,null,(1),null));
}
}
});
bfuncs.minimization.minimal_POSs = (function bfuncs$minimization$minimal_POSs(var_args){
var G__68012 = arguments.length;
switch (G__68012) {
case 1:
return bfuncs.minimization.minimal_POSs.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return bfuncs.minimization.minimal_POSs.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(bfuncs.minimization.minimal_POSs.cljs$core$IFn$_invoke$arity$1 = (function (bobj){
return bfuncs.minimization.minimal_things(new cljs.core.Keyword(null,"POS","POS",-185748124),bfuncs.parsing.variables(bobj),bobj);
}));

(bfuncs.minimization.minimal_POSs.cljs$core$IFn$_invoke$arity$2 = (function (vars,bobj){
return bfuncs.minimization.minimal_things(new cljs.core.Keyword(null,"POS","POS",-185748124),vars,bobj);
}));

(bfuncs.minimization.minimal_POSs.cljs$lang$maxFixedArity = 2);

bfuncs.minimization.minimal_SOPs = (function bfuncs$minimization$minimal_SOPs(var_args){
var G__68015 = arguments.length;
switch (G__68015) {
case 1:
return bfuncs.minimization.minimal_SOPs.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return bfuncs.minimization.minimal_SOPs.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(bfuncs.minimization.minimal_SOPs.cljs$core$IFn$_invoke$arity$1 = (function (bobj){
return bfuncs.minimization.minimal_things(new cljs.core.Keyword(null,"SOP","SOP",-299014148),bfuncs.parsing.variables(bobj),bobj);
}));

(bfuncs.minimization.minimal_SOPs.cljs$core$IFn$_invoke$arity$2 = (function (vars,bobj){
return bfuncs.minimization.minimal_things(new cljs.core.Keyword(null,"SOP","SOP",-299014148),vars,bobj);
}));

(bfuncs.minimization.minimal_SOPs.cljs$lang$maxFixedArity = 2);

bfuncs.minimization.minimal_forms = (function bfuncs$minimization$minimal_forms(vars,bobj){
return new cljs.core.PersistentArrayMap(null, 3, ["Sum of Products",bfuncs.minimization.minimal_SOPs.cljs$core$IFn$_invoke$arity$2(vars,bobj),"Product of Sums",bfuncs.minimization.minimal_POSs.cljs$core$IFn$_invoke$arity$2(vars,bobj),"Algebraic Normal Form",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [bfuncs.algebra.__GT_ANF(bobj)], null)], null);
});
bfuncs.minimization.index_bobj = (function bfuncs$minimization$index_bobj(vars,bobj){
return bfuncs.data.replace_operands(cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$1((function (k,v){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [v,k], null);
})),vars),bobj);
});
bfuncs.minimization.quine_mccluskey_meta = (function bfuncs$minimization$quine_mccluskey_meta(var_args){
var G__68022 = arguments.length;
switch (G__68022) {
case 1:
return bfuncs.minimization.quine_mccluskey_meta.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return bfuncs.minimization.quine_mccluskey_meta.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(bfuncs.minimization.quine_mccluskey_meta.cljs$core$IFn$_invoke$arity$1 = (function (terms){
return bfuncs.minimization.quine_mccluskey_meta.cljs$core$IFn$_invoke$arity$2(terms,null);
}));

(bfuncs.minimization.quine_mccluskey_meta.cljs$core$IFn$_invoke$arity$2 = (function (terms,unspecified_terms){
if(((cljs.core.seqable_QMARK_(terms)) && (cljs.core.seqable_QMARK_(unspecified_terms)))){
var vec__68027 = bfuncs.minimization.prime_implicant_steps(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(terms,unspecified_terms));
var steps = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__68027,(0),null);
var primes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__68027,(1),null);
var terms__$1 = cljs.core.sort.cljs$core$IFn$_invoke$arity$2(bfuncs.minimization.compare_implicants,terms);
var vec__68030 = bfuncs.minimization.covering_sets(primes,terms__$1);
var primes__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__68030,(0),null);
var covers = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__68030,(1),null);
var vec__68033 = bfuncs.minimization.separate_essentials_indexed(covers);
var essentials = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__68033,(0),null);
var remaining = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__68033,(1),null);
return new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"terms","terms",-1556977978),cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(bfuncs.minimization.term__GT_int,terms__$1),new cljs.core.Keyword(null,"term-length","term-length",552241655),cljs.core.count(cljs.core.first(terms__$1)),new cljs.core.Keyword(null,"steps","steps",-128433302),steps,new cljs.core.Keyword(null,"primes","primes",434410681),primes__$1,new cljs.core.Keyword(null,"essentials","essentials",-670250967),essentials,new cljs.core.Keyword(null,"remaining","remaining",-138926777),remaining,new cljs.core.Keyword(null,"covers","covers",-1440957386),covers], null);
} else {
return null;
}
}));

(bfuncs.minimization.quine_mccluskey_meta.cljs$lang$maxFixedArity = 2);

bfuncs.minimization.minimization_steps = (function bfuncs$minimization$minimization_steps(target_form,vars,expr){
var bobj = bfuncs.parsing.bexpr__GT_bobj.cljs$core$IFn$_invoke$arity$1(expr);
var vec__68041 = (function (){var G__68044 = target_form;
var G__68044__$1 = (((G__68044 instanceof cljs.core.Keyword))?G__68044.fqn:null);
switch (G__68044__$1) {
case "SOP":
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [bfuncs.minimization.minterms,"minterm","implicant"], null);

break;
case "POS":
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [bfuncs.minimization.maxterms,"maxterm","implicate"], null);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__68044__$1)].join('')));

}
})();
var get_terms = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__68041,(0),null);
var term_type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__68041,(1),null);
var prime_type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__68041,(2),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(bfuncs.minimization.quine_mccluskey_meta.cljs$core$IFn$_invoke$arity$1((get_terms.cljs$core$IFn$_invoke$arity$3 ? get_terms.cljs$core$IFn$_invoke$arity$3(vars,bobj,true) : get_terms.call(null,vars,bobj,true))),new cljs.core.Keyword(null,"target-form","target-form",1593121146),target_form,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"term-type","term-type",775586708),term_type,new cljs.core.Keyword(null,"prime-type","prime-type",1343559236),prime_type,new cljs.core.Keyword(null,"expr","expr",745722291),expr,new cljs.core.Keyword(null,"indexed-expr","indexed-expr",-141913944),bfuncs.minimization.index_bobj(vars,bobj),new cljs.core.Keyword(null,"vars","vars",-2046957217),vars], 0));
});
bfuncs.minimization.decode_selection = (function bfuncs$minimization$decode_selection(var_args){
var G__68054 = arguments.length;
switch (G__68054) {
case 1:
return bfuncs.minimization.decode_selection.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return bfuncs.minimization.decode_selection.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(bfuncs.minimization.decode_selection.cljs$core$IFn$_invoke$arity$1 = (function (selection){
return bfuncs.minimization.decode_selection.cljs$core$IFn$_invoke$arity$2(selection,null);
}));

(bfuncs.minimization.decode_selection.cljs$core$IFn$_invoke$arity$2 = (function (selection,term_length){
var expr__68058 = selection;
if((expr__68058 == null)){
return null;
} else {
if(cljs.core.int_QMARK_(expr__68058)){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),cljs.core.bit_count(selection),bfuncs.minimization.int__GT_imp.cljs$core$IFn$_invoke$arity$2(selection,term_length),cljs.core.sorted_set.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([selection], 0))], null);
} else {
if(bfuncs.minimization.implicant_QMARK_(expr__68058)){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var or__4126__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.meta(selection),new cljs.core.Keyword(null,"step","step",1288888124));
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return bfuncs.utils.count_when(cljs.core.nil_QMARK_,selection);
}
})(),bfuncs.utils.count_when(cljs.core.true_QMARK_,selection),selection,bfuncs.minimization.covered_terms(selection)], null);
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(["Bad selection: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(selection)].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"selection","selection",975998651),selection,new cljs.core.Keyword(null,"term-length","term-length",552241655),term_length], null));
}
}
}
}));

(bfuncs.minimization.decode_selection.cljs$lang$maxFixedArity = 2);

bfuncs.minimization.echo_bin = (function bfuncs$minimization$echo_bin(var_args){
var G__68061 = arguments.length;
switch (G__68061) {
case 1:
return bfuncs.minimization.echo_bin.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return bfuncs.minimization.echo_bin.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return bfuncs.minimization.echo_bin.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(bfuncs.minimization.echo_bin.cljs$core$IFn$_invoke$arity$1 = (function (n){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var obj__27297__auto__ = n;
var f__27298__auto__ = (obj__27297__auto__["toString"]);
return f__27298__auto__.call(obj__27297__auto__,(2));
})()], 0));

return n;
}));

(bfuncs.minimization.echo_bin.cljs$core$IFn$_invoke$arity$2 = (function (label,n){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([clojure.string.join.cljs$core$IFn$_invoke$arity$1(cljs.core.take.cljs$core$IFn$_invoke$arity$2((10),cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(label),cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(" "))))," ",(function (){var obj__27297__auto__ = n;
var f__27298__auto__ = (obj__27297__auto__["toString"]);
return f__27298__auto__.call(obj__27297__auto__,(2));
})()], 0));

return n;
}));

(bfuncs.minimization.echo_bin.cljs$core$IFn$_invoke$arity$3 = (function (label,l,n){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([clojure.string.join.cljs$core$IFn$_invoke$arity$1(cljs.core.take.cljs$core$IFn$_invoke$arity$2((10),cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(label),cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(" "))))," ",(function (){var obj__27297__auto__ = (function (){var obj__27297__auto__ = n;
var f__27298__auto__ = (obj__27297__auto__["toString"]);
return f__27298__auto__.call(obj__27297__auto__,(2));
})();
var f__27298__auto__ = (obj__27297__auto__["padStart"]);
return f__27298__auto__.call(obj__27297__auto__,l,"0");
})()], 0));

return n;
}));

(bfuncs.minimization.echo_bin.cljs$lang$maxFixedArity = 3);

bfuncs.minimization._1n = bfuncs.utils.big_int((1));
bfuncs.minimization._2n_STAR__STAR_ = (function bfuncs$minimization$_2n_STAR__STAR_(n){
return (bfuncs.minimization._1n << n);
});
bfuncs.minimization._2n_STAR_ = (function bfuncs$minimization$_2n_STAR_(n){
return (n << bfuncs.minimization._1n);
});
bfuncs.minimization.z_coeffs = (function bfuncs$minimization$z_coeffs(nvars,big_z){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (x,step){
var bl = bfuncs.minimization._2n_STAR__STAR_(bfuncs.utils.big_int(step));
return (x ^ ((x & (function (){var i = ((nvars - step) - (1));
var shift = bfuncs.minimization._2n_STAR_(bl);
var x__$1 = ((bfuncs.minimization._2n_STAR__STAR_(bl) - bfuncs.minimization._1n) << bl);
while(true){
if((i > (0))){
var G__68470 = (i - (1));
var G__68471 = bfuncs.minimization._2n_STAR_(shift);
var G__68472 = (x__$1 | (x__$1 << shift));
i = G__68470;
shift = G__68471;
x__$1 = G__68472;
continue;
} else {
return x__$1;
}
break;
}
})()) >> bl));
}),big_z,cljs.core.range.cljs$core$IFn$_invoke$arity$1(nvars));
});
bfuncs.minimization.z_poly = (function bfuncs$minimization$z_poly(vars,coeffs){
var nvars = cljs.core.count(vars);
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(bfuncs.algebra._LT__PLUS__GT_,(function (){var iter__27573__auto__ = (function bfuncs$minimization$z_poly_$_iter__68073(s__68074,i__68075){
return (new cljs.core.LazySeq(null,(function (){
var s__68074__$1 = s__68074;
var i__68075__$1 = i__68075;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__68074__$1);
if(temp__5735__auto__){
var s__68074__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__68074__$2)){
var c__68078 = cljs.core.chunk_first(s__68074__$2);
var size__27572__auto__ = cljs.core.count(c__68078);
var b__68077 = cljs.core.chunk_buffer(size__27572__auto__);
if((function (){var j__68076 = (0);
while(true){
if((j__68076 < size__27572__auto__)){
var coeff = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(c__68078,j__68076);
var i = (j__68076 + i__68075__$1);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(coeff,"1")){
cljs.core.chunk_append(b__68077,cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (j__68076,s__68074__$1,i__68075__$1,coeff,i,c__68078,size__27572__auto__,b__68077,s__68074__$2,temp__5735__auto__,nvars){
return (function (prod,j){
if(((i & (1 << j)) != 0)){
return bfuncs.algebra._AMPERSAND__AMPERSAND_.cljs$core$IFn$_invoke$arity$2(prod,cljs.core.nth.cljs$core$IFn$_invoke$arity$2(vars,((nvars - j) - (1))));
} else {
return prod;
}
});})(j__68076,s__68074__$1,i__68075__$1,coeff,i,c__68078,size__27572__auto__,b__68077,s__68074__$2,temp__5735__auto__,nvars))
,true,bfuncs.utils.rrange.cljs$core$IFn$_invoke$arity$1(nvars)));

var G__68486 = (j__68076 + (1));
j__68076 = G__68486;
continue;
} else {
var G__68487 = (j__68076 + (1));
j__68076 = G__68487;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__68077),bfuncs$minimization$z_poly_$_iter__68073(cljs.core.chunk_rest(s__68074__$2),(i__68075__$1 + size__27572__auto__)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__68077),null);
}
} else {
var coeff = cljs.core.first(s__68074__$2);
var i = i__68075__$1;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(coeff,"1")){
return cljs.core.cons(cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (s__68074__$1,i__68075__$1,coeff,i,s__68074__$2,temp__5735__auto__,nvars){
return (function (prod,j){
if(((i & (1 << j)) != 0)){
return bfuncs.algebra._AMPERSAND__AMPERSAND_.cljs$core$IFn$_invoke$arity$2(prod,cljs.core.nth.cljs$core$IFn$_invoke$arity$2(vars,((nvars - j) - (1))));
} else {
return prod;
}
});})(s__68074__$1,i__68075__$1,coeff,i,s__68074__$2,temp__5735__auto__,nvars))
,true,bfuncs.utils.rrange.cljs$core$IFn$_invoke$arity$1(nvars)),bfuncs$minimization$z_poly_$_iter__68073(cljs.core.rest(s__68074__$2),(i__68075__$1 + (1))));
} else {
var G__68493 = cljs.core.rest(s__68074__$2);
var G__68494 = (i__68075__$1 + (1));
s__68074__$1 = G__68493;
i__68075__$1 = G__68494;
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
return iter__27573__auto__((function (){var obj__27297__auto__ = (function (){var obj__27297__auto__ = coeffs;
var f__27298__auto__ = (obj__27297__auto__["toString"]);
return f__27298__auto__.call(obj__27297__auto__,(2));
})();
var f__27298__auto__ = (obj__27297__auto__["padStart"]);
return f__27298__auto__.call(obj__27297__auto__,((1) << nvars),"0");
})(),(0));
})());
});
bfuncs.minimization.zhegalkin_polynomial = (function bfuncs$minimization$zhegalkin_polynomial(vars,digit_string){
var G__68087 = digit_string;
var G__68087__$1 = (((G__68087 == null))?null:["0b",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__68087)].join(''));
var G__68087__$2 = (((G__68087__$1 == null))?null:bfuncs.utils.big_int(G__68087__$1));
var G__68087__$3 = (((G__68087__$2 == null))?null:bfuncs.minimization.z_coeffs(cljs.core.count(vars),G__68087__$2));
if((G__68087__$3 == null)){
return null;
} else {
return bfuncs.minimization.z_poly(vars,G__68087__$3);
}
});
bfuncs.minimization.int__GT_truth_vec = (function bfuncs$minimization$int__GT_truth_vec(x,n,meta_QMARK_){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((cljs.core.truth_(meta_QMARK_)?(function (p1__68091_SHARP_){
return cljs.core.with_meta(((x & (1 << p1__68091_SHARP_)) != 0),cljs.core.PersistentHashSet.createAsIfByAssoc([x]));
}):cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.bit_test,x)),cljs.core.range.cljs$core$IFn$_invoke$arity$3((n - (1)),(-1),(-1)));
});
bfuncs.minimization.floor_log2 = (function bfuncs$minimization$floor_log2(n){
return ((31) - Math.clz32(n));
});
bfuncs.minimization.tbytes = bfuncs.parsing.__GT_bytes(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.Keyword(null,"b","b",1482224470),new cljs.core.Keyword(null,"c","c",-1763192079),new cljs.core.Keyword(null,"d","d",1972142424)], null),bfuncs.algebra._AMPERSAND__AMPERSAND_.cljs$core$IFn$_invoke$arity$variadic(bfuncs.algebra._BAR__BAR_.cljs$core$IFn$_invoke$arity$variadic(bfuncs.algebra._BANG_(new cljs.core.Keyword(null,"a","a",-2123407586)),new cljs.core.Keyword(null,"b","b",1482224470),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"c","c",-1763192079)], 0)),bfuncs.algebra._BAR__BAR_.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.Keyword(null,"b","b",1482224470),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"c","c",-1763192079),new cljs.core.Keyword(null,"d","d",1972142424)], 0)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([bfuncs.algebra._BAR__BAR_.cljs$core$IFn$_invoke$arity$2(bfuncs.algebra._BANG_(new cljs.core.Keyword(null,"b","b",1482224470)),bfuncs.algebra._BANG_(new cljs.core.Keyword(null,"d","d",1972142424)))], 0)));
/**
 * Returns the pair [terms unspecified], where terms and unspecified are both collections of truth vecs
 */
bfuncs.minimization.bytes__GT_terms = (function bfuncs$minimization$bytes__GT_terms(var_args){
var G__68096 = arguments.length;
switch (G__68096) {
case 2:
return bfuncs.minimization.bytes__GT_terms.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return bfuncs.minimization.bytes__GT_terms.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(bfuncs.minimization.bytes__GT_terms.cljs$core$IFn$_invoke$arity$2 = (function (type,bytes){
return bfuncs.minimization.bytes__GT_terms.cljs$core$IFn$_invoke$arity$3(type,bytes,false);
}));

(bfuncs.minimization.bytes__GT_terms.cljs$core$IFn$_invoke$arity$3 = (function (type,bytes,meta_QMARK_){
if(cljs.core.truth_((function (){var fexpr__68097 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"min","min",444991522),null,new cljs.core.Keyword(null,"max","max",61366548),null], null), null);
return (fexpr__68097.cljs$core$IFn$_invoke$arity$1 ? fexpr__68097.cljs$core$IFn$_invoke$arity$1(type) : fexpr__68097.call(null,type));
})())){
} else {
throw (new Error("Assert failed: (#{:min :max} type)"));
}

if(bfuncs.utils.byte_array_QMARK_(bytes)){
} else {
throw (new Error("Assert failed: (util/byte-array? bytes)"));
}

var nvals = (function (){var obj68098 = bytes;
var k68099 = "length";
if((function (){var obj68100 = obj68098;
return (((!((obj68100 == null)))) && (applied_science.js_interop.impl.in_QMARK__STAR_(k68099,obj68100)));
})()){
return (obj68098[k68099]);
} else {
return undefined;
}
})();
var arity = bfuncs.minimization.floor_log2(nvals);
var target = (function (){var G__68101 = type;
var G__68101__$1 = (((G__68101 instanceof cljs.core.Keyword))?G__68101.fqn:null);
switch (G__68101__$1) {
case "min":
return (1);

break;
case "max":
return (0);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__68101__$1)].join('')));

}
})();
var target_SINGLEQUOTE_ = (function (){var G__68102 = target;
switch (G__68102) {
case (1):
return (0);

break;
case (0):
return (1);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__68102)].join('')));

}
})();
var i = (0);
var terms = cljs.core.transient$(cljs.core.PersistentVector.EMPTY);
var unspecs = cljs.core.transient$(cljs.core.PersistentVector.EMPTY);
while(true){
if((i < nvals)){
var pred__68106 = cljs.core._EQ_;
var expr__68107 = (bytes[i]);
if(cljs.core.truth_((pred__68106.cljs$core$IFn$_invoke$arity$2 ? pred__68106.cljs$core$IFn$_invoke$arity$2(target,expr__68107) : pred__68106.call(null,target,expr__68107)))){
var G__68524 = (i + (1));
var G__68525 = cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$2(terms,bfuncs.minimization.int__GT_truth_vec(i,arity,meta_QMARK_));
var G__68526 = unspecs;
i = G__68524;
terms = G__68525;
unspecs = G__68526;
continue;
} else {
if(cljs.core.truth_((pred__68106.cljs$core$IFn$_invoke$arity$2 ? pred__68106.cljs$core$IFn$_invoke$arity$2(target_SINGLEQUOTE_,expr__68107) : pred__68106.call(null,target_SINGLEQUOTE_,expr__68107)))){
var G__68530 = (i + (1));
var G__68531 = terms;
var G__68532 = unspecs;
i = G__68530;
terms = G__68531;
unspecs = G__68532;
continue;
} else {
var G__68534 = (i + (1));
var G__68535 = terms;
var G__68536 = cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$2(unspecs,bfuncs.minimization.int__GT_truth_vec(i,arity,meta_QMARK_));
i = G__68534;
terms = G__68535;
unspecs = G__68536;
continue;
}
}
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.persistent_BANG_(terms),cljs.core.persistent_BANG_(unspecs)], null);
}
break;
}
}));

(bfuncs.minimization.bytes__GT_terms.cljs$lang$maxFixedArity = 3);

bfuncs.minimization.min_sops = (function bfuncs$minimization$min_sops(vars,bytes){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$3(bfuncs.utils.map_reduce,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(bfuncs.minimization.imp__GT__AMPERSAND__AMPERSAND_,vars),bfuncs.algebra._BAR__BAR_),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(bfuncs.minimization.quine_mccluskey,bfuncs.minimization.bytes__GT_terms.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"min","min",444991522),bytes)));
});
bfuncs.minimization.min_poss = (function bfuncs$minimization$min_poss(vars,bytes){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$3(bfuncs.utils.map_reduce,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(bfuncs.minimization.imp__GT__BAR__BAR_,vars),bfuncs.algebra._AMPERSAND__AMPERSAND_),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(bfuncs.minimization.quine_mccluskey,bfuncs.minimization.bytes__GT_terms.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"max","max",61366548),bytes)));
});

//# sourceMappingURL=bfuncs.minimization.js.map
