goog.provide('bfuncs.steps_card');
var module$bfuncs$CoverageTable=shadow.js.require("module$bfuncs$CoverageTable", {});
var module$bfuncs$VariablesDragDrop=shadow.js.require("module$bfuncs$VariablesDragDrop", {});
bfuncs.steps_card.get_outer = (function bfuncs$steps_card$get_outer(form_type){
var G__68686 = form_type;
var G__68686__$1 = (((G__68686 instanceof cljs.core.Keyword))?G__68686.fqn:null);
switch (G__68686__$1) {
case "POS":
case "max":
return bfuncs.algebra._AMPERSAND__AMPERSAND_;

break;
case "SOP":
case "min":
return bfuncs.algebra._BAR__BAR_;

break;
default:
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(["Unrecognized form type: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(form_type)].join(''),cljs.core.PersistentArrayMap.EMPTY);

}
});
bfuncs.steps_card.get_inner = (function bfuncs$steps_card$get_inner(form_type){
var G__68687 = form_type;
var G__68687__$1 = (((G__68687 instanceof cljs.core.Keyword))?G__68687.fqn:null);
switch (G__68687__$1) {
case "POS":
case "max":
return bfuncs.algebra._BAR__BAR_;

break;
case "SOP":
case "min":
return bfuncs.algebra._AMPERSAND__AMPERSAND_;

break;
default:
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(["Unrecognized form type: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(form_type)].join(''),cljs.core.PersistentArrayMap.EMPTY);

}
});
bfuncs.steps_card.selection_data = (function bfuncs$steps_card$selection_data(var_args){
var G__68690 = arguments.length;
switch (G__68690) {
case 1:
return bfuncs.steps_card.selection_data.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return bfuncs.steps_card.selection_data.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(bfuncs.steps_card.selection_data.cljs$core$IFn$_invoke$arity$1 = (function (imp){
return bfuncs.steps_card.selection_data.cljs$core$IFn$_invoke$arity$2(imp,cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.meta(imp),new cljs.core.Keyword(null,"step","step",1288888124)));
}));

(bfuncs.steps_card.selection_data.cljs$core$IFn$_invoke$arity$2 = (function (imp,step){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [step,bfuncs.utils.count_when(cljs.core.true_QMARK_,imp),imp], null);
}));

(bfuncs.steps_card.selection_data.cljs$lang$maxFixedArity = 2);

bfuncs.steps_card.section_title = (function bfuncs$steps_card$section_title(var_args){
var G__68698 = arguments.length;
switch (G__68698) {
case 1:
return bfuncs.steps_card.section_title.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return bfuncs.steps_card.section_title.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return bfuncs.steps_card.section_title.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(bfuncs.steps_card.section_title.cljs$core$IFn$_invoke$arity$1 = (function (title){
return bfuncs.steps_card.section_title.cljs$core$IFn$_invoke$arity$2(title,"h5");
}));

(bfuncs.steps_card.section_title.cljs$core$IFn$_invoke$arity$2 = (function (title,variant){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent_material_ui.core.grid.grid,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"item","item",249373802),true,new cljs.core.Keyword(null,"xs","xs",649443341),(12)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent_material_ui.core.typography.typography,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"variant","variant",-424354234),variant,new cljs.core.Keyword(null,"class","class",-2030961996),"section-title"], null),title], null)], null);
}));

(bfuncs.steps_card.section_title.cljs$core$IFn$_invoke$arity$3 = (function (title,variant,n){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent_material_ui.core.grid.grid,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"item","item",249373802),true,new cljs.core.Keyword(null,"xs","xs",649443341),(12),new cljs.core.Keyword(null,"container","container",-1736937707),true,new cljs.core.Keyword(null,"direction","direction",-633359395),"row",new cljs.core.Keyword(null,"spacing","spacing",204422175),(2),new cljs.core.Keyword(null,"align-items","align-items",-267946462),"center"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent_material_ui.core.grid.grid,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"item","item",249373802),true], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent_material_ui.core.typography.typography,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"variant","variant",-424354234),variant,new cljs.core.Keyword(null,"class","class",-2030961996),"section-title"], null),title], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent_material_ui.core.grid.grid,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"item","item",249373802),true], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent_material_ui.core.typography.typography,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"variant","variant",-424354234),"subtitle1",new cljs.core.Keyword(null,"color","color",1011675173),"textSecondary",new cljs.core.Keyword(null,"class","class",-2030961996),"section-count"], null),["(",cljs.core.str.cljs$core$IFn$_invoke$arity$1(n),")"].join('')], null)], null)], null);
}));

(bfuncs.steps_card.section_title.cljs$lang$maxFixedArity = 3);

bfuncs.steps_card.data__GT_js = (function bfuncs$steps_card$data__GT_js(data,_BANG_sel){
var map__68708 = data;
var map__68708__$1 = (((((!((map__68708 == null))))?(((((map__68708.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__68708.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__68708):map__68708);
var primes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68708__$1,new cljs.core.Keyword(null,"primes","primes",434410681));
var terms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68708__$1,new cljs.core.Keyword(null,"terms","terms",-1556977978));
var covers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68708__$1,new cljs.core.Keyword(null,"covers","covers",-1440957386));
var essentials = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68708__$1,new cljs.core.Keyword(null,"essentials","essentials",-670250967));
var remaining = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68708__$1,new cljs.core.Keyword(null,"remaining","remaining",-138926777));
var covers__$1 = cljs.core.vec(covers);
var all_terms_covered_QMARK_ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true);
var terms_covered = cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.seq((function (){var iter__27573__auto__ = (function bfuncs$steps_card$data__GT_js_$_iter__68710(s__68711,i__68712){
return (new cljs.core.LazySeq(null,(function (){
var s__68711__$1 = s__68711;
var i__68712__$1 = i__68712;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__68711__$1);
if(temp__5735__auto__){
var s__68711__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__68711__$2)){
var c__68715 = cljs.core.chunk_first(s__68711__$2);
var size__27572__auto__ = cljs.core.count(c__68715);
var b__68714 = cljs.core.chunk_buffer(size__27572__auto__);
if((function (){var j__68713 = (0);
while(true){
if((j__68713 < size__27572__auto__)){
var term = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(c__68715,j__68713);
var i = (j__68713 + i__68712__$1);
cljs.core.chunk_append(b__68714,new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"term","term",-1817390416),term,new cljs.core.Keyword(null,"index","index",-1531685915),i,new cljs.core.Keyword(null,"covered","covered",-409185091),((cljs.core.contains_QMARK_(remaining,i))?cljs.core.reset_BANG_(all_terms_covered_QMARK_,false):true),new cljs.core.Keyword(null,"coveredBy","coveredBy",-858179867),cljs.core.get.cljs$core$IFn$_invoke$arity$2(covers__$1,i),new cljs.core.Keyword(null,"onClick","onClick",-1991238530),((function (j__68713,term,i,c__68715,size__27572__auto__,b__68714,s__68711__$2,temp__5735__auto__,map__68708,map__68708__$1,primes,terms,covers,essentials,remaining,covers__$1,all_terms_covered_QMARK_){
return (function (p1__68705_SHARP_){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(_BANG_sel,bfuncs.utils.toggle_selection,p1__68705_SHARP_,term,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(0)], 0));
});})(j__68713,term,i,c__68715,size__27572__auto__,b__68714,s__68711__$2,temp__5735__auto__,map__68708,map__68708__$1,primes,terms,covers,essentials,remaining,covers__$1,all_terms_covered_QMARK_))
,new cljs.core.Keyword(null,"onKeyDown","onKeyDown",648902330),bfuncs.utils.toggle_selection_key_down_fn(_BANG_sel,term,(0)),new cljs.core.Keyword(null,"onKeyUp","onKeyUp",1550785041),bfuncs.utils.toggle_selection_key_up_fn(_BANG_sel,term,(0))], null));

var G__69016 = (j__68713 + (1));
j__68713 = G__69016;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__68714),bfuncs$steps_card$data__GT_js_$_iter__68710(cljs.core.chunk_rest(s__68711__$2),(i__68712__$1 + size__27572__auto__)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__68714),null);
}
} else {
var term = cljs.core.first(s__68711__$2);
var i = i__68712__$1;
return cljs.core.cons(new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"term","term",-1817390416),term,new cljs.core.Keyword(null,"index","index",-1531685915),i,new cljs.core.Keyword(null,"covered","covered",-409185091),((cljs.core.contains_QMARK_(remaining,i))?cljs.core.reset_BANG_(all_terms_covered_QMARK_,false):true),new cljs.core.Keyword(null,"coveredBy","coveredBy",-858179867),cljs.core.get.cljs$core$IFn$_invoke$arity$2(covers__$1,i),new cljs.core.Keyword(null,"onClick","onClick",-1991238530),((function (term,i,s__68711__$2,temp__5735__auto__,map__68708,map__68708__$1,primes,terms,covers,essentials,remaining,covers__$1,all_terms_covered_QMARK_){
return (function (p1__68705_SHARP_){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(_BANG_sel,bfuncs.utils.toggle_selection,p1__68705_SHARP_,term,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(0)], 0));
});})(term,i,s__68711__$2,temp__5735__auto__,map__68708,map__68708__$1,primes,terms,covers,essentials,remaining,covers__$1,all_terms_covered_QMARK_))
,new cljs.core.Keyword(null,"onKeyDown","onKeyDown",648902330),bfuncs.utils.toggle_selection_key_down_fn(_BANG_sel,term,(0)),new cljs.core.Keyword(null,"onKeyUp","onKeyUp",1550785041),bfuncs.utils.toggle_selection_key_up_fn(_BANG_sel,term,(0))], null),bfuncs$steps_card$data__GT_js_$_iter__68710(cljs.core.rest(s__68711__$2),(i__68712__$1 + (1))));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__27573__auto__(terms,(0));
})()));
return cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"terms","terms",-1556977978),terms_covered,new cljs.core.Keyword(null,"rows","rows",850049680),cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.seq((function (){var iter__4529__auto__ = (function bfuncs$steps_card$data__GT_js_$_iter__68719(s__68720){
return (new cljs.core.LazySeq(null,(function (){
var s__68720__$1 = s__68720;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__68720__$1);
if(temp__5735__auto__){
var s__68720__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__68720__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__68720__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__68722 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__68721 = (0);
while(true){
if((i__68721 < size__4528__auto__)){
var prime = cljs.core._nth(c__4527__auto__,i__68721);
var map__68723 = cljs.core.meta(prime);
var map__68723__$1 = (((((!((map__68723 == null))))?(((((map__68723.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__68723.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__68723):map__68723);
var i = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68723__$1,new cljs.core.Keyword(null,"prime-index","prime-index",-1428577630));
var step = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68723__$1,new cljs.core.Keyword(null,"step","step",1288888124));
var essential_QMARK_ = cljs.core.contains_QMARK_(essentials,i);
var all_covered_QMARK_ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true);
cljs.core.chunk_append(b__68722,new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"index","index",-1531685915),i,new cljs.core.Keyword(null,"prime","prime",120267916),prime,new cljs.core.Keyword(null,"essential","essential",1969545466),essential_QMARK_,new cljs.core.Keyword(null,"onClick","onClick",-1991238530),((function (i__68721,map__68723,map__68723__$1,i,step,essential_QMARK_,all_covered_QMARK_,prime,c__4527__auto__,size__4528__auto__,b__68722,s__68720__$2,temp__5735__auto__,map__68708,map__68708__$1,primes,terms,covers,essentials,remaining,covers__$1,all_terms_covered_QMARK_,terms_covered){
return (function (p1__68706_SHARP_){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(_BANG_sel,bfuncs.utils.toggle_selection,p1__68706_SHARP_,prime,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([step], 0));
});})(i__68721,map__68723,map__68723__$1,i,step,essential_QMARK_,all_covered_QMARK_,prime,c__4527__auto__,size__4528__auto__,b__68722,s__68720__$2,temp__5735__auto__,map__68708,map__68708__$1,primes,terms,covers,essentials,remaining,covers__$1,all_terms_covered_QMARK_,terms_covered))
,new cljs.core.Keyword(null,"onKeyDown","onKeyDown",648902330),bfuncs.utils.toggle_selection_key_down_fn(_BANG_sel,prime,step),new cljs.core.Keyword(null,"onKeyUp","onKeyUp",1550785041),bfuncs.utils.toggle_selection_key_up_fn(_BANG_sel,prime,step),new cljs.core.Keyword(null,"cols","cols",-1914801295),cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$3(((function (i__68721,map__68723,map__68723__$1,i,step,essential_QMARK_,all_covered_QMARK_,prime,c__4527__auto__,size__4528__auto__,b__68722,s__68720__$2,temp__5735__auto__,map__68708,map__68708__$1,primes,terms,covers,essentials,remaining,covers__$1,all_terms_covered_QMARK_,terms_covered){
return (function (cov_set,p__68725){
var map__68727 = p__68725;
var map__68727__$1 = (((((!((map__68727 == null))))?(((((map__68727.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__68727.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__68727):map__68727);
var term = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68727__$1,new cljs.core.Keyword(null,"term","term",-1817390416));
var covered = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68727__$1,new cljs.core.Keyword(null,"covered","covered",-409185091));
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"term","term",-1817390416),term,new cljs.core.Keyword(null,"dot","dot",1442709401),((cljs.core.contains_QMARK_(cov_set,i))?(function (){var or__4126__auto__ = covered;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.not(cljs.core.reset_BANG_(all_covered_QMARK_,false));
}
})():false),new cljs.core.Keyword(null,"covered","covered",-409185091),covered], null);
});})(i__68721,map__68723,map__68723__$1,i,step,essential_QMARK_,all_covered_QMARK_,prime,c__4527__auto__,size__4528__auto__,b__68722,s__68720__$2,temp__5735__auto__,map__68708,map__68708__$1,primes,terms,covers,essentials,remaining,covers__$1,all_terms_covered_QMARK_,terms_covered))
,covers__$1,terms_covered)),new cljs.core.Keyword(null,"allCovered","allCovered",-135375538),(((!(essential_QMARK_)))?cljs.core.deref(all_covered_QMARK_):false)], null));

var G__69017 = (i__68721 + (1));
i__68721 = G__69017;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__68722),bfuncs$steps_card$data__GT_js_$_iter__68719(cljs.core.chunk_rest(s__68720__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__68722),null);
}
} else {
var prime = cljs.core.first(s__68720__$2);
var map__68731 = cljs.core.meta(prime);
var map__68731__$1 = (((((!((map__68731 == null))))?(((((map__68731.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__68731.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__68731):map__68731);
var i = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68731__$1,new cljs.core.Keyword(null,"prime-index","prime-index",-1428577630));
var step = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68731__$1,new cljs.core.Keyword(null,"step","step",1288888124));
var essential_QMARK_ = cljs.core.contains_QMARK_(essentials,i);
var all_covered_QMARK_ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true);
return cljs.core.cons(new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"index","index",-1531685915),i,new cljs.core.Keyword(null,"prime","prime",120267916),prime,new cljs.core.Keyword(null,"essential","essential",1969545466),essential_QMARK_,new cljs.core.Keyword(null,"onClick","onClick",-1991238530),((function (map__68731,map__68731__$1,i,step,essential_QMARK_,all_covered_QMARK_,prime,s__68720__$2,temp__5735__auto__,map__68708,map__68708__$1,primes,terms,covers,essentials,remaining,covers__$1,all_terms_covered_QMARK_,terms_covered){
return (function (p1__68706_SHARP_){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(_BANG_sel,bfuncs.utils.toggle_selection,p1__68706_SHARP_,prime,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([step], 0));
});})(map__68731,map__68731__$1,i,step,essential_QMARK_,all_covered_QMARK_,prime,s__68720__$2,temp__5735__auto__,map__68708,map__68708__$1,primes,terms,covers,essentials,remaining,covers__$1,all_terms_covered_QMARK_,terms_covered))
,new cljs.core.Keyword(null,"onKeyDown","onKeyDown",648902330),bfuncs.utils.toggle_selection_key_down_fn(_BANG_sel,prime,step),new cljs.core.Keyword(null,"onKeyUp","onKeyUp",1550785041),bfuncs.utils.toggle_selection_key_up_fn(_BANG_sel,prime,step),new cljs.core.Keyword(null,"cols","cols",-1914801295),cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$3(((function (map__68731,map__68731__$1,i,step,essential_QMARK_,all_covered_QMARK_,prime,s__68720__$2,temp__5735__auto__,map__68708,map__68708__$1,primes,terms,covers,essentials,remaining,covers__$1,all_terms_covered_QMARK_,terms_covered){
return (function (cov_set,p__68733){
var map__68734 = p__68733;
var map__68734__$1 = (((((!((map__68734 == null))))?(((((map__68734.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__68734.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__68734):map__68734);
var term = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68734__$1,new cljs.core.Keyword(null,"term","term",-1817390416));
var covered = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68734__$1,new cljs.core.Keyword(null,"covered","covered",-409185091));
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"term","term",-1817390416),term,new cljs.core.Keyword(null,"dot","dot",1442709401),((cljs.core.contains_QMARK_(cov_set,i))?(function (){var or__4126__auto__ = covered;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.not(cljs.core.reset_BANG_(all_covered_QMARK_,false));
}
})():false),new cljs.core.Keyword(null,"covered","covered",-409185091),covered], null);
});})(map__68731,map__68731__$1,i,step,essential_QMARK_,all_covered_QMARK_,prime,s__68720__$2,temp__5735__auto__,map__68708,map__68708__$1,primes,terms,covers,essentials,remaining,covers__$1,all_terms_covered_QMARK_,terms_covered))
,covers__$1,terms_covered)),new cljs.core.Keyword(null,"allCovered","allCovered",-135375538),(((!(essential_QMARK_)))?cljs.core.deref(all_covered_QMARK_):false)], null),bfuncs$steps_card$data__GT_js_$_iter__68719(cljs.core.rest(s__68720__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4529__auto__(primes);
})())),new cljs.core.Keyword(null,"allPrimesEssential","allPrimesEssential",-1239638036),cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(primes),cljs.core.count(essentials)),new cljs.core.Keyword(null,"noPrimesEssential","noPrimesEssential",1333030623),cljs.core.empty_QMARK_(essentials),new cljs.core.Keyword(null,"allTermsCovered","allTermsCovered",-1698097731),cljs.core.deref(all_terms_covered_QMARK_)], null));
});
bfuncs.steps_card.vars__GT_js = (function bfuncs$steps_card$vars__GT_js(vars){
return cljs.core.clj__GT_js(cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.seq((function (){var iter__27573__auto__ = (function bfuncs$steps_card$vars__GT_js_$_iter__68736(s__68737,i__68738){
return (new cljs.core.LazySeq(null,(function (){
var s__68737__$1 = s__68737;
var i__68738__$1 = i__68738;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__68737__$1);
if(temp__5735__auto__){
var s__68737__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__68737__$2)){
var c__68741 = cljs.core.chunk_first(s__68737__$2);
var size__27572__auto__ = cljs.core.count(c__68741);
var b__68740 = cljs.core.chunk_buffer(size__27572__auto__);
if((function (){var j__68739 = (0);
while(true){
if((j__68739 < size__27572__auto__)){
var var$ = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(c__68741,j__68739);
var i = (j__68739 + i__68738__$1);
cljs.core.chunk_append(b__68740,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),var$,new cljs.core.Keyword(null,"element","element",1974019749),reagent.core.as_element.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [bfuncs.typesetting.$,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),"var",new cljs.core.Keyword(null,"aria-label","aria-label",455891514),var$], null),bfuncs.typesetting.__GT_latex.cljs$core$IFn$_invoke$arity$1(var$)], null)),new cljs.core.Keyword(null,"index","index",-1531685915),i], null));

var G__69018 = (j__68739 + (1));
j__68739 = G__69018;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__68740),bfuncs$steps_card$vars__GT_js_$_iter__68736(cljs.core.chunk_rest(s__68737__$2),(i__68738__$1 + size__27572__auto__)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__68740),null);
}
} else {
var var$ = cljs.core.first(s__68737__$2);
var i = i__68738__$1;
return cljs.core.cons(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),var$,new cljs.core.Keyword(null,"element","element",1974019749),reagent.core.as_element.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [bfuncs.typesetting.$,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),"var",new cljs.core.Keyword(null,"aria-label","aria-label",455891514),var$], null),bfuncs.typesetting.__GT_latex.cljs$core$IFn$_invoke$arity$1(var$)], null)),new cljs.core.Keyword(null,"index","index",-1531685915),i], null),bfuncs$steps_card$vars__GT_js_$_iter__68736(cljs.core.rest(s__68737__$2),(i__68738__$1 + (1))));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__27573__auto__(vars,(0));
})())));
});
bfuncs.steps_card.reset_vars_BANG_ = (function bfuncs$steps_card$reset_vars_BANG_(_BANG_vars,new_vars){
return cljs.core.reset_BANG_(_BANG_vars,cljs.core.vec(new_vars));
});
bfuncs.steps_card.variables_dnd = (function bfuncs$steps_card$variables_dnd(p__68743){
var map__68745 = p__68743;
var map__68745__$1 = (((((!((map__68745 == null))))?(((((map__68745.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__68745.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__68745):map__68745);
var _BANG_vars = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68745__$1,new cljs.core.Keyword(null,"!vars","!vars",494676873));
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68745__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var vars = cljs.core.deref(_BANG_vars);
var nvars = cljs.core.count(vars);
var equals_sign = reagent.core.as_element.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [bfuncs.typesetting.$,"\\colonequals"], null));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),module$bfuncs$VariablesDragDrop.default,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"key","key",-1516042587),vars,new cljs.core.Keyword(null,"class","class",-2030961996),reagent.core.class_names.cljs$core$IFn$_invoke$arity$1(class$),new cljs.core.Keyword(null,"variables","variables",1563680814),bfuncs.steps_card.vars__GT_js(vars),new cljs.core.Keyword(null,"rowHeaders","rowHeaders",1560051454),cljs.core.clj__GT_js(cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.seq((function (){var iter__4529__auto__ = (function bfuncs$steps_card$variables_dnd_$_iter__68747(s__68748){
return (new cljs.core.LazySeq(null,(function (){
var s__68748__$1 = s__68748;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__68748__$1);
if(temp__5735__auto__){
var s__68748__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__68748__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__68748__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__68750 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__68749 = (0);
while(true){
if((i__68749 < size__4528__auto__)){
var i = cljs.core._nth(c__4527__auto__,i__68749);
cljs.core.chunk_append(b__68750,reagent.core.as_element.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [bfuncs.typesetting.$,bfuncs.typesetting.format_var.cljs$core$IFn$_invoke$arity$2(i,nvars)], null)));

var G__69019 = (i__68749 + (1));
i__68749 = G__69019;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__68750),bfuncs$steps_card$variables_dnd_$_iter__68747(cljs.core.chunk_rest(s__68748__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__68750),null);
}
} else {
var i = cljs.core.first(s__68748__$2);
return cljs.core.cons(reagent.core.as_element.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [bfuncs.typesetting.$,bfuncs.typesetting.format_var.cljs$core$IFn$_invoke$arity$2(i,nvars)], null)),bfuncs$steps_card$variables_dnd_$_iter__68747(cljs.core.rest(s__68748__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4529__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$1(nvars));
})()))),new cljs.core.Keyword(null,"equalsSign","equalsSign",-1899689722),equals_sign,new cljs.core.Keyword(null,"onChangeCommitted","onChangeCommitted",-1269844824),reagent.core.partial.cljs$core$IFn$_invoke$arity$variadic(bfuncs.steps_card.reset_vars_BANG_,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([_BANG_vars], 0))], null)], null);
});
/**
 * type should be one of #{"minterm" "maxterm"}
 */
bfuncs.steps_card.term_chip = (function bfuncs$steps_card$term_chip(term,format_term,_BANG_sel){
var selection = cljs.core.deref(reagent.core.cursor(_BANG_sel,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"selection","selection",975998651)], null)));
var class$ = ((((cljs.core.int_QMARK_(selection)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(selection,term))))?"selected":((((bfuncs.minimization.implicant_QMARK_(selection)) && (cljs.core.contains_QMARK_(bfuncs.minimization.covered_terms(selection),term))))?"covered":null
));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent_material_ui.core.button_base.button_base,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"disable-ripple","disable-ripple",-477253887),true,new cljs.core.Keyword(null,"aria-label","aria-label",455891514),(function (){var desc_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.meta(format_term),new cljs.core.Keyword(null,"desc-fn","desc-fn",1393799433));
if(cljs.core.truth_(desc_fn)){
return (desc_fn.cljs$core$IFn$_invoke$arity$1 ? desc_fn.cljs$core$IFn$_invoke$arity$1(term) : desc_fn.call(null,term));
} else {
return null;
}
})(),new cljs.core.Keyword(null,"class","class",-2030961996),reagent.core.class_names.cljs$core$IFn$_invoke$arity$variadic(cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(bfuncs.style._BANG_vclasses),new cljs.core.Keyword(null,"math-chip","math-chip",-1619012561)),"term-chip clicky",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([class$], 0)),new cljs.core.Keyword(null,"title","title",636505583),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(class$,"covered"))?"Covered by selection":null),new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (p1__68751_SHARP_){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(_BANG_sel,bfuncs.utils.toggle_selection,p1__68751_SHARP_,term,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(0)], 0));
})], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [bfuncs.typesetting.$,(format_term.cljs$core$IFn$_invoke$arity$1 ? format_term.cljs$core$IFn$_invoke$arity$1(term) : format_term.call(null,term))], null)], null);
});
bfuncs.steps_card.prime_chip = (function bfuncs$steps_card$prime_chip(prime,format_prime,_BANG_sel){
var map__68772 = cljs.core.meta(prime);
var map__68772__$1 = (((((!((map__68772 == null))))?(((((map__68772.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__68772.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__68772):map__68772);
var prime_index = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68772__$1,new cljs.core.Keyword(null,"prime-index","prime-index",-1428577630));
var step = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68772__$1,new cljs.core.Keyword(null,"step","step",1288888124));
var prime_terms = bfuncs.minimization.covered_terms(prime);
var selection = cljs.core.deref(reagent.core.cursor(_BANG_sel,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"selection","selection",975998651)], null)));
var vec__68773 = bfuncs.minimization.decode_selection.cljs$core$IFn$_invoke$arity$1(selection);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__68773,(0),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__68773,(1),null);
var sel_imp = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__68773,(2),null);
var sel_terms = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__68773,(3),null);
var sel = vec__68773;
var sel_prime_index = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.meta(sel_imp),new cljs.core.Keyword(null,"prime-index","prime-index",-1428577630));
var cov_status = (cljs.core.truth_(sel)?((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(prime_index,sel_prime_index))?"selected":((clojure.set.subset_QMARK_(sel_terms,prime_terms))?"covered":null)):null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent_material_ui.core.button_base.button_base,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"class","class",-2030961996),reagent.core.class_names.cljs$core$IFn$_invoke$arity$variadic(cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(bfuncs.style._BANG_vclasses),new cljs.core.Keyword(null,"math-chip","math-chip",-1619012561)),"clicky",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cov_status], 0)),new cljs.core.Keyword(null,"disable-ripple","disable-ripple",-477253887),true,new cljs.core.Keyword(null,"aria-label","aria-label",455891514),(function (){var desc_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.meta(format_prime),new cljs.core.Keyword(null,"desc-fn","desc-fn",1393799433));
if(cljs.core.truth_(desc_fn)){
return (desc_fn.cljs$core$IFn$_invoke$arity$1 ? desc_fn.cljs$core$IFn$_invoke$arity$1(prime_index) : desc_fn.call(null,prime_index));
} else {
return null;
}
})(),new cljs.core.Keyword(null,"title","title",636505583),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cov_status,"covered"))?"Covers selection":null),new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (p1__68766_SHARP_){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(_BANG_sel,bfuncs.utils.toggle_selection,p1__68766_SHARP_,prime,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([step], 0));
}),new cljs.core.Keyword(null,"tab-index","tab-index",895755393),(0)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [bfuncs.typesetting.$,(format_prime.cljs$core$IFn$_invoke$arity$1 ? format_prime.cljs$core$IFn$_invoke$arity$1(prime_index) : format_prime.call(null,prime_index))], null)], null);
});
bfuncs.steps_card.coverage_table = (function bfuncs$steps_card$coverage_table(p__68804){
var map__68805 = p__68804;
var map__68805__$1 = (((((!((map__68805 == null))))?(((((map__68805.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__68805.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__68805):map__68805);
var katex_options = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__68805__$1,new cljs.core.Keyword(null,"katex-options","katex-options",-325548873),bfuncs.typesetting.katex_options.cljs$core$IFn$_invoke$arity$0());
var table_props = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68805__$1,new cljs.core.Keyword(null,"table-props","table-props",1453199839));
var legend_labels = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68805__$1,new cljs.core.Keyword(null,"legend-labels","legend-labels",-742555783));
var data_map = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68805__$1,new cljs.core.Keyword(null,"data-map","data-map",1612860968));
var map__68809 = data_map;
var map__68809__$1 = (((((!((map__68809 == null))))?(((((map__68809.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__68809.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__68809):map__68809);
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68809__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var _BANG_sel = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68809__$1,new cljs.core.Keyword(null,"!sel","!sel",763711166));
var format_term = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68809__$1,new cljs.core.Keyword(null,"format-term","format-term",-706410519));
var format_prime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68809__$1,new cljs.core.Keyword(null,"format-prime","format-prime",455151967));
var sel = cljs.core.deref(reagent.core.cursor(_BANG_sel,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"selection","selection",975998651)], null)));
var sel_prime_index = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.meta(sel),new cljs.core.Keyword(null,"prime-index","prime-index",-1428577630));
var sel_term = ((cljs.core.int_QMARK_(sel))?sel:null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),module$bfuncs$CoverageTable.default,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"formatRowHeader","formatRowHeader",1662309249),new cljs.core.Keyword(null,"selectedPrime","selectedPrime",477753443),new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"katexOptions","katexOptions",-1348106904),new cljs.core.Keyword(null,"primeType","primeType",-271188280),new cljs.core.Keyword(null,"selectedTerm","selectedTerm",1479408978),new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.Keyword(null,"formatColumnHeader","formatColumnHeader",1807640444),new cljs.core.Keyword(null,"termType","termType",-1984921154),new cljs.core.Keyword(null,"data","data",-232669377)],[format_prime,(function (){var or__4126__auto__ = sel_prime_index;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return null;
}
})(),cljs.core.deref(reagent.core.track.cljs$core$IFn$_invoke$arity$variadic(cljs.core.hash,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([data], 0))),katex_options,cljs.core.get.cljs$core$IFn$_invoke$arity$2(data,new cljs.core.Keyword(null,"prime-type","prime-type",1343559236)),(cljs.core.truth_(sel_prime_index)?null:sel_term),reagent.core.class_names.cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(bfuncs.style._BANG_vclasses),new cljs.core.Keyword(null,"coverage-table","coverage-table",138581772))),format_term,cljs.core.get.cljs$core$IFn$_invoke$arity$2(data,new cljs.core.Keyword(null,"term-type","term-type",775586708)),cljs.core.deref(reagent.core.track.cljs$core$IFn$_invoke$arity$variadic(bfuncs.steps_card.data__GT_js,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([data,_BANG_sel], 0)))]),table_props], 0))], null);
});
bfuncs.steps_card.prime_implicants_grid = (function bfuncs$steps_card$prime_implicants_grid(p__68832){
var map__68833 = p__68832;
var map__68833__$1 = (((((!((map__68833 == null))))?(((((map__68833.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__68833.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__68833):map__68833);
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68833__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var format_prime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68833__$1,new cljs.core.Keyword(null,"format-prime","format-prime",455151967));
var _BANG_sel = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68833__$1,new cljs.core.Keyword(null,"!sel","!sel",763711166));
var map__68845 = data;
var map__68845__$1 = (((((!((map__68845 == null))))?(((((map__68845.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__68845.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__68845):map__68845);
var primes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68845__$1,new cljs.core.Keyword(null,"primes","primes",434410681));
var target_form = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68845__$1,new cljs.core.Keyword(null,"target-form","target-form",1593121146));
var term_length = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68845__$1,new cljs.core.Keyword(null,"term-length","term-length",552241655));
var format_vars = bfuncs.typesetting.format_var.cljs$core$IFn$_invoke$arity$1(term_length);
var last_QMARK_ = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,(cljs.core.count(primes) - (1)));
var colon_equals = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [bfuncs.typesetting.$,"\\colonequals"], null);
var __GT_bobj = bfuncs.minimization.imp__GT_bobj_fn(target_form,cljs.core.vec(cljs.core.range.cljs$core$IFn$_invoke$arity$1(term_length)));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),reagent.core.class_names.cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(bfuncs.style._BANG_vclasses),new cljs.core.Keyword(null,"aligned-environment","aligned-environment",-333967208)))], null),cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.seq((function (){var iter__27573__auto__ = (function bfuncs$steps_card$prime_implicants_grid_$_iter__68852(s__68853,i__68854){
return (new cljs.core.LazySeq(null,(function (){
var s__68853__$1 = s__68853;
var i__68854__$1 = i__68854;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__68853__$1);
if(temp__5735__auto__){
var s__68853__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__68853__$2)){
var c__68857 = cljs.core.chunk_first(s__68853__$2);
var size__27572__auto__ = cljs.core.count(c__68857);
var b__68856 = cljs.core.chunk_buffer(size__27572__auto__);
if((function (){var j__68855 = (0);
while(true){
if((j__68855 < size__27572__auto__)){
var prime = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(c__68857,j__68855);
var i = (j__68855 + i__68854__$1);
cljs.core.chunk_append(b__68856,new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"<>","<>",1280186386),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),i], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [bfuncs.steps_card.prime_chip,prime,format_prime,_BANG_sel], null),colon_equals,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [bfuncs.typesetting.$,bfuncs.typesetting.__GT_latex.cljs$core$IFn$_invoke$arity$2(__GT_bobj(prime),format_vars),(cljs.core.truth_(last_QMARK_(i))?".":",")], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632)], null)], null));

var G__69020 = (j__68855 + (1));
j__68855 = G__69020;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__68856),bfuncs$steps_card$prime_implicants_grid_$_iter__68852(cljs.core.chunk_rest(s__68853__$2),(i__68854__$1 + size__27572__auto__)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__68856),null);
}
} else {
var prime = cljs.core.first(s__68853__$2);
var i = i__68854__$1;
return cljs.core.cons(new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"<>","<>",1280186386),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),i], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [bfuncs.steps_card.prime_chip,prime,format_prime,_BANG_sel], null),colon_equals,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [bfuncs.typesetting.$,bfuncs.typesetting.__GT_latex.cljs$core$IFn$_invoke$arity$2(__GT_bobj(prime),format_vars),(cljs.core.truth_(last_QMARK_(i))?".":",")], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632)], null)], null),bfuncs$steps_card$prime_implicants_grid_$_iter__68852(cljs.core.rest(s__68853__$2),(i__68854__$1 + (1))));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__27573__auto__(primes,(0));
})()))], null);
});
bfuncs.steps_card.essentials_table = (function bfuncs$steps_card$essentials_table(p__68865){
var map__68866 = p__68865;
var map__68866__$1 = (((((!((map__68866 == null))))?(((((map__68866.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__68866.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__68866):map__68866);
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68866__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var _BANG_sel = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68866__$1,new cljs.core.Keyword(null,"!sel","!sel",763711166));
var format_term = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68866__$1,new cljs.core.Keyword(null,"format-term","format-term",-706410519));
var format_prime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68866__$1,new cljs.core.Keyword(null,"format-prime","format-prime",455151967));
var map__68868 = data;
var map__68868__$1 = (((((!((map__68868 == null))))?(((((map__68868.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__68868.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__68868):map__68868);
var essentials = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68868__$1,new cljs.core.Keyword(null,"essentials","essentials",-670250967));
var primes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68868__$1,new cljs.core.Keyword(null,"primes","primes",434410681));
var terms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68868__$1,new cljs.core.Keyword(null,"terms","terms",-1556977978));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),reagent.core.class_names.cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(bfuncs.style._BANG_vclasses),new cljs.core.Keyword(null,"essentials-table","essentials-table",1864157664)))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"table>tbody","table>tbody",-1603093044),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.head","td.head",-1561028473),"Prime"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.head","td.head",-1561028473),"Uniquely Covers"], null)], null),cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.seq((function (){var iter__4529__auto__ = (function bfuncs$steps_card$essentials_table_$_iter__68875(s__68876){
return (new cljs.core.LazySeq(null,(function (){
var s__68876__$1 = s__68876;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__68876__$1);
if(temp__5735__auto__){
var s__68876__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__68876__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__68876__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__68878 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__68877 = (0);
while(true){
if((i__68877 < size__4528__auto__)){
var vec__68885 = cljs.core._nth(c__4527__auto__,i__68877);
var ess = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__68885,(0),null);
var eidxs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__68885,(1),null);
cljs.core.chunk_append(b__68878,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),ess], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [bfuncs.steps_card.prime_chip,cljs.core.get.cljs$core$IFn$_invoke$arity$2(primes,ess),format_prime,_BANG_sel], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td>div.terms-container","td>div.terms-container",-10165906),cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.seq((function (){var iter__4529__auto__ = ((function (i__68877,vec__68885,ess,eidxs,c__4527__auto__,size__4528__auto__,b__68878,s__68876__$2,temp__5735__auto__,map__68868,map__68868__$1,essentials,primes,terms,map__68866,map__68866__$1,data,_BANG_sel,format_term,format_prime){
return (function bfuncs$steps_card$essentials_table_$_iter__68875_$_iter__68889(s__68890){
return (new cljs.core.LazySeq(null,((function (i__68877,vec__68885,ess,eidxs,c__4527__auto__,size__4528__auto__,b__68878,s__68876__$2,temp__5735__auto__,map__68868,map__68868__$1,essentials,primes,terms,map__68866,map__68866__$1,data,_BANG_sel,format_term,format_prime){
return (function (){
var s__68890__$1 = s__68890;
while(true){
var temp__5735__auto____$1 = cljs.core.seq(s__68890__$1);
if(temp__5735__auto____$1){
var s__68890__$2 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__68890__$2)){
var c__4527__auto____$1 = cljs.core.chunk_first(s__68890__$2);
var size__4528__auto____$1 = cljs.core.count(c__4527__auto____$1);
var b__68892 = cljs.core.chunk_buffer(size__4528__auto____$1);
if((function (){var i__68891 = (0);
while(true){
if((i__68891 < size__4528__auto____$1)){
var ix = cljs.core._nth(c__4527__auto____$1,i__68891);
cljs.core.chunk_append(b__68892,cljs.core.with_meta(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [bfuncs.steps_card.term_chip,cljs.core.get.cljs$core$IFn$_invoke$arity$2(terms,ix),format_term,_BANG_sel], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),ix], null)));

var G__69021 = (i__68891 + (1));
i__68891 = G__69021;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__68892),bfuncs$steps_card$essentials_table_$_iter__68875_$_iter__68889(cljs.core.chunk_rest(s__68890__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__68892),null);
}
} else {
var ix = cljs.core.first(s__68890__$2);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [bfuncs.steps_card.term_chip,cljs.core.get.cljs$core$IFn$_invoke$arity$2(terms,ix),format_term,_BANG_sel], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),ix], null)),bfuncs$steps_card$essentials_table_$_iter__68875_$_iter__68889(cljs.core.rest(s__68890__$2)));
}
} else {
return null;
}
break;
}
});})(i__68877,vec__68885,ess,eidxs,c__4527__auto__,size__4528__auto__,b__68878,s__68876__$2,temp__5735__auto__,map__68868,map__68868__$1,essentials,primes,terms,map__68866,map__68866__$1,data,_BANG_sel,format_term,format_prime))
,null,null));
});})(i__68877,vec__68885,ess,eidxs,c__4527__auto__,size__4528__auto__,b__68878,s__68876__$2,temp__5735__auto__,map__68868,map__68868__$1,essentials,primes,terms,map__68866,map__68866__$1,data,_BANG_sel,format_term,format_prime))
;
return iter__4529__auto__(eidxs);
})()))], null)], null));

var G__69022 = (i__68877 + (1));
i__68877 = G__69022;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__68878),bfuncs$steps_card$essentials_table_$_iter__68875(cljs.core.chunk_rest(s__68876__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__68878),null);
}
} else {
var vec__68900 = cljs.core.first(s__68876__$2);
var ess = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__68900,(0),null);
var eidxs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__68900,(1),null);
return cljs.core.cons(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),ess], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [bfuncs.steps_card.prime_chip,cljs.core.get.cljs$core$IFn$_invoke$arity$2(primes,ess),format_prime,_BANG_sel], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td>div.terms-container","td>div.terms-container",-10165906),cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.seq((function (){var iter__4529__auto__ = ((function (vec__68900,ess,eidxs,s__68876__$2,temp__5735__auto__,map__68868,map__68868__$1,essentials,primes,terms,map__68866,map__68866__$1,data,_BANG_sel,format_term,format_prime){
return (function bfuncs$steps_card$essentials_table_$_iter__68875_$_iter__68905(s__68906){
return (new cljs.core.LazySeq(null,(function (){
var s__68906__$1 = s__68906;
while(true){
var temp__5735__auto____$1 = cljs.core.seq(s__68906__$1);
if(temp__5735__auto____$1){
var s__68906__$2 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__68906__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__68906__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__68908 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__68907 = (0);
while(true){
if((i__68907 < size__4528__auto__)){
var ix = cljs.core._nth(c__4527__auto__,i__68907);
cljs.core.chunk_append(b__68908,cljs.core.with_meta(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [bfuncs.steps_card.term_chip,cljs.core.get.cljs$core$IFn$_invoke$arity$2(terms,ix),format_term,_BANG_sel], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),ix], null)));

var G__69023 = (i__68907 + (1));
i__68907 = G__69023;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__68908),bfuncs$steps_card$essentials_table_$_iter__68875_$_iter__68905(cljs.core.chunk_rest(s__68906__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__68908),null);
}
} else {
var ix = cljs.core.first(s__68906__$2);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [bfuncs.steps_card.term_chip,cljs.core.get.cljs$core$IFn$_invoke$arity$2(terms,ix),format_term,_BANG_sel], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),ix], null)),bfuncs$steps_card$essentials_table_$_iter__68875_$_iter__68905(cljs.core.rest(s__68906__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});})(vec__68900,ess,eidxs,s__68876__$2,temp__5735__auto__,map__68868,map__68868__$1,essentials,primes,terms,map__68866,map__68866__$1,data,_BANG_sel,format_term,format_prime))
;
return iter__4529__auto__(eidxs);
})()))], null)], null),bfuncs$steps_card$essentials_table_$_iter__68875(cljs.core.rest(s__68876__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4529__auto__(essentials);
})()))], null)], null);
});
bfuncs.steps_card.verbalize_coll = (function bfuncs$steps_card$verbalize_coll(var_args){
var G__68910 = arguments.length;
switch (G__68910) {
case 1:
return bfuncs.steps_card.verbalize_coll.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return bfuncs.steps_card.verbalize_coll.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(bfuncs.steps_card.verbalize_coll.cljs$core$IFn$_invoke$arity$1 = (function (coll){
var G__68911 = cljs.core.count(coll);
switch (G__68911) {
case (1):
return cljs.core.first(coll);

break;
case (2):
return clojure.string.join.cljs$core$IFn$_invoke$arity$2(" and ",coll);

break;
default:
return [clojure.string.join.cljs$core$IFn$_invoke$arity$2(", ",cljs.core.butlast(coll)),", and ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.last(coll))].join('');

}
}));

(bfuncs.steps_card.verbalize_coll.cljs$core$IFn$_invoke$arity$2 = (function (tag,coll){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(coll),(1)))?((cljs.core.vector_QMARK_(tag))?cljs.core.first(tag):tag):((cljs.core.vector_QMARK_(tag))?cljs.core.second(tag):[cljs.core.str.cljs$core$IFn$_invoke$arity$1(tag),"s"].join(''))))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(bfuncs.steps_card.verbalize_coll.cljs$core$IFn$_invoke$arity$1(coll))].join('');
}));

(bfuncs.steps_card.verbalize_coll.cljs$lang$maxFixedArity = 2);

bfuncs.steps_card.step_summary = (function bfuncs$steps_card$step_summary(var_args){
var args__4742__auto__ = [];
var len__4736__auto___69026 = arguments.length;
var i__4737__auto___69027 = (0);
while(true){
if((i__4737__auto___69027 < len__4736__auto___69026)){
args__4742__auto__.push((arguments[i__4737__auto___69027]));

var G__69028 = (i__4737__auto___69027 + (1));
i__4737__auto___69027 = G__69028;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return bfuncs.steps_card.step_summary.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(bfuncs.steps_card.step_summary.cljs$core$IFn$_invoke$arity$variadic = (function (children){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent_material_ui.core.typography.typography,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"variant","variant",-424354234),"subtitle1",new cljs.core.Keyword(null,"color","color",1011675173),"textSecondary"], null)], null),children);
}));

(bfuncs.steps_card.step_summary.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(bfuncs.steps_card.step_summary.cljs$lang$applyTo = (function (seq68912){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq68912));
}));

bfuncs.steps_card.step_icon = (function bfuncs$steps_card$step_icon(number){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),reagent.core.class_names.cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(bfuncs.style._BANG_vclasses),new cljs.core.Keyword(null,"step-icon","step-icon",251551152))),new cljs.core.Keyword(null,"aria-label","aria-label",455891514),["step ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(number)].join('')], null),number], null);
});
bfuncs.steps_card.step = (function bfuncs$steps_card$step(p__68913,label,content){
var map__68914 = p__68913;
var map__68914__$1 = (((((!((map__68914 == null))))?(((((map__68914.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__68914.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__68914):map__68914);
var number = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68914__$1,new cljs.core.Keyword(null,"number","number",1570378438));
var result = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68914__$1,new cljs.core.Keyword(null,"result","result",1415092211));
var default_open = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__68914__$1,new cljs.core.Keyword(null,"default-open","default-open",936459665),true);
var last = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68914__$1,new cljs.core.Keyword(null,"last","last",1105735132));
var with_let68916 = reagent.ratom.with_let_values(new cljs.core.Keyword(null,"with-let68916","with-let68916",514462262));
var temp__5739__auto___69029 = reagent.ratom._STAR_ratom_context_STAR_;
if((temp__5739__auto___69029 == null)){
} else {
var c__27840__auto___69030 = temp__5739__auto___69029;
if((with_let68916.generation === c__27840__auto___69030.ratomGeneration)){
if(reagent.debug.has_console){
((reagent.debug.tracking)?reagent.debug.track_console:console).error(["Warning: The same with-let is being used more ","than once in the same reactive context."].join(''));
} else {
}
} else {
}

(with_let68916.generation = c__27840__auto___69030.ratomGeneration);
}


var init68917 = (with_let68916.length === (0));
var _BANG_open = ((init68917)?(with_let68916[(0)] = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(true)):(with_let68916[(0)]));
var toggle = ((init68917)?(with_let68916[(1)] = (function (e){
var obj__27297__auto___69031 = e;
var f__27298__auto___69032 = (obj__27297__auto___69031["stopPropagation"]);
f__27298__auto___69032.call(obj__27297__auto___69031);

return bfuncs.utils.toggle_BANG_.cljs$core$IFn$_invoke$arity$1(_BANG_open);
})):(with_let68916[(1)]));
var res__27841__auto__ = (function (){var open = cljs.core.deref(_BANG_open);
var content_QMARK_ = (!((content == null)));
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),reagent.core.class_names.cljs$core$IFn$_invoke$arity$variadic(cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(bfuncs.style._BANG_vclasses),new cljs.core.Keyword(null,"step","step",1288888124)),(cljs.core.truth_(last)?"last":null),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(cljs.core.truth_(result)?"result":null),((content_QMARK_)?reagent.core.class_names.cljs$core$IFn$_invoke$arity$2("collapsable",(cljs.core.truth_(open)?"open":"closed")):"non-collapsable")], 0))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.icon-and-line","div.icon-and-line",-1363360003),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [bfuncs.steps_card.step_icon,(cljs.core.truth_(result)?"Result":number)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.liney-box","div.liney-box",-137788268),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg.liney","svg.liney",1265769900),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"x1","x1",-1863922247),"50%",new cljs.core.Keyword(null,"y1","y1",589123466),(0),new cljs.core.Keyword(null,"x2","x2",-1362513475),"50%",new cljs.core.Keyword(null,"y2","y2",-718691301),"100%"], null)], null)], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.step-summary","div.step-summary",-1812865800),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((content_QMARK_)?toggle:bfuncs.utils.pass)], null),label], null),((content_QMARK_)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent_material_ui.core.icon_button.icon_button,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"class","class",-2030961996),"step-opener",new cljs.core.Keyword(null,"size","size",1098693007),"small",new cljs.core.Keyword(null,"edge","edge",919909153),"end",new cljs.core.Keyword(null,"aria-label","aria-label",455891514),["expand step ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(number)].join(''),new cljs.core.Keyword(null,"on-click","on-click",1632826543),toggle], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent_material_ui.icons.expand_more_outlined.expand_more_outlined], null)], null):null),((content_QMARK_)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent_material_ui.core.collapse.collapse,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"in","in",-1531184865),open,new cljs.core.Keyword(null,"class","class",-2030961996),"step-content"], null),content], null):null)], null);
})();

return res__27841__auto__;
});
bfuncs.steps_card.target_form_link = (function bfuncs$steps_card$target_form_link(target_form){
var G__68921 = target_form;
var G__68921__$1 = (((G__68921 instanceof cljs.core.Keyword))?G__68921.fqn:null);
switch (G__68921__$1) {
case "SOP":
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent_material_ui.core.link.link,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"target","target",253001721),"_blank",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (p1__68919_SHARP_){
var obj__27297__auto__ = p1__68919_SHARP_;
var f__27298__auto__ = (obj__27297__auto__["stopPropagation"]);
return f__27298__auto__.call(obj__27297__auto__);
}),new cljs.core.Keyword(null,"rel","rel",1378823488),"noreferrer",new cljs.core.Keyword(null,"href","href",-793805698),"https://en.wikipedia.org/wiki/Disjunctive_normal_form"], null),"disjunctive normal form"], null);

break;
case "POS":
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent_material_ui.core.link.link,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"target","target",253001721),"_blank",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (p1__68920_SHARP_){
var obj__27297__auto__ = p1__68920_SHARP_;
var f__27298__auto__ = (obj__27297__auto__["stopPropagation"]);
return f__27298__auto__.call(obj__27297__auto__);
}),new cljs.core.Keyword(null,"rel","rel",1378823488),"noreferrer",new cljs.core.Keyword(null,"href","href",-793805698),"https://en.wikipedia.org/wiki/Conjunctive_normal_form"], null),"conjunctive normal form"], null);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__68921__$1)].join('')));

}
});
bfuncs.steps_card.choose_ex_term = (function bfuncs$steps_card$choose_ex_term(terms,nvars){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),cljs.core.count(terms))){
return cljs.core.first(terms);
} else {
var i = cljs.core.rand_int(cljs.core.count(terms));
var t = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(terms,i);
if((t === (0))){
return cljs.core.nth.cljs$core$IFn$_invoke$arity$3(terms,(i + (1)),t);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.bit_count(t),nvars)){
return cljs.core.nth.cljs$core$IFn$_invoke$arity$3(terms,(i - (1)),t);
} else {
return t;

}
}
}
});
bfuncs.steps_card.implications_grid = (function bfuncs$steps_card$implications_grid(p__68924){
var map__68925 = p__68924;
var map__68925__$1 = (((((!((map__68925 == null))))?(((((map__68925.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__68925.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__68925):map__68925);
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68925__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__68927 = data;
var map__68927__$1 = (((((!((map__68927 == null))))?(((((map__68927.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__68927.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__68927):map__68927);
var remaining = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68927__$1,new cljs.core.Keyword(null,"remaining","remaining",-138926777));
var terms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68927__$1,new cljs.core.Keyword(null,"terms","terms",-1556977978));
var dec_nrem = (cljs.core.count(remaining) - (1));
var iff = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [bfuncs.typesetting.$,"\\iff"], null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),(function (){var classes68929 = cljs.core.deref(bfuncs.style._BANG_vclasses);
return reagent.core.class_names.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(classes68929,new cljs.core.Keyword(null,"implications-grid","implications-grid",-473909389)),cljs.core.get.cljs$core$IFn$_invoke$arity$2(classes68929,new cljs.core.Keyword(null,"aligned-environment","aligned-environment",-333967208)));
})()], null),cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.seq((function (){var iter__27573__auto__ = (function bfuncs$steps_card$implications_grid_$_iter__68930(s__68931,i__68932){
return (new cljs.core.LazySeq(null,(function (){
var s__68931__$1 = s__68931;
var i__68932__$1 = i__68932;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__68931__$1);
if(temp__5735__auto__){
var s__68931__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__68931__$2)){
var c__68935 = cljs.core.chunk_first(s__68931__$2);
var size__27572__auto__ = cljs.core.count(c__68935);
var b__68934 = cljs.core.chunk_buffer(size__27572__auto__);
if((function (){var j__68933 = (0);
while(true){
if((j__68933 < size__27572__auto__)){
var vec__68936 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(c__68935,j__68933);
var i = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__68936,(0),null);
var cov = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__68936,(1),null);
var j = (j__68933 + i__68932__$1);
var term = (terms.cljs$core$IFn$_invoke$arity$1 ? terms.cljs$core$IFn$_invoke$arity$1(i) : terms.call(null,i));
cljs.core.chunk_append(b__68934,new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"<>","<>",1280186386),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),i], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [bfuncs.typesetting.$,(bfuncs.typesetting.format_covered_var.cljs$core$IFn$_invoke$arity$1 ? bfuncs.typesetting.format_covered_var.cljs$core$IFn$_invoke$arity$1(i) : bfuncs.typesetting.format_covered_var.call(null,i))], null),iff,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [bfuncs.typesetting.expression,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"var-fn","var-fn",-1379096379),bfuncs.typesetting.format_prime_var,new cljs.core.Keyword(null,"punct","punct",1807261997),(((j < dec_nrem))?",":".")], null),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(bfuncs.algebra._BAR__BAR_,cov)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632)], null)], null));

var G__69034 = (j__68933 + (1));
j__68933 = G__69034;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__68934),bfuncs$steps_card$implications_grid_$_iter__68930(cljs.core.chunk_rest(s__68931__$2),(i__68932__$1 + size__27572__auto__)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__68934),null);
}
} else {
var vec__68939 = cljs.core.first(s__68931__$2);
var i = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__68939,(0),null);
var cov = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__68939,(1),null);
var j = i__68932__$1;
var term = (terms.cljs$core$IFn$_invoke$arity$1 ? terms.cljs$core$IFn$_invoke$arity$1(i) : terms.call(null,i));
return cljs.core.cons(new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"<>","<>",1280186386),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),i], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [bfuncs.typesetting.$,(bfuncs.typesetting.format_covered_var.cljs$core$IFn$_invoke$arity$1 ? bfuncs.typesetting.format_covered_var.cljs$core$IFn$_invoke$arity$1(i) : bfuncs.typesetting.format_covered_var.call(null,i))], null),iff,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [bfuncs.typesetting.expression,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"var-fn","var-fn",-1379096379),bfuncs.typesetting.format_prime_var,new cljs.core.Keyword(null,"punct","punct",1807261997),(((j < dec_nrem))?",":".")], null),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(bfuncs.algebra._BAR__BAR_,cov)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632)], null)], null),bfuncs$steps_card$implications_grid_$_iter__68930(cljs.core.rest(s__68931__$2),(i__68932__$1 + (1))));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__27573__auto__(remaining,(0));
})()))], null);
});
bfuncs.steps_card.terms_section = (function bfuncs$steps_card$terms_section(p__68942){
var map__68943 = p__68942;
var map__68943__$1 = (((((!((map__68943 == null))))?(((((map__68943.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__68943.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__68943):map__68943);
var _BANG_vars = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68943__$1,new cljs.core.Keyword(null,"!vars","!vars",494676873));
var _BANG_sel = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68943__$1,new cljs.core.Keyword(null,"!sel","!sel",763711166));
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68943__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var format_term = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68943__$1,new cljs.core.Keyword(null,"format-term","format-term",-706410519));
var alt = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68943__$1,new cljs.core.Keyword(null,"alt","alt",-3214426));
var alt_text = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68943__$1,new cljs.core.Keyword(null,"alt-text","alt-text",-1540833707));
var map__68945 = data;
var map__68945__$1 = (((((!((map__68945 == null))))?(((((map__68945.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__68945.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__68945):map__68945);
var terms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68945__$1,new cljs.core.Keyword(null,"terms","terms",-1556977978));
var vars = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68945__$1,new cljs.core.Keyword(null,"vars","vars",-2046957217));
var expr = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68945__$1,new cljs.core.Keyword(null,"expr","expr",745722291));
var indexed_expr = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68945__$1,new cljs.core.Keyword(null,"indexed-expr","indexed-expr",-141913944));
var target_form = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68945__$1,new cljs.core.Keyword(null,"target-form","target-form",1593121146));
var nvars = cljs.core.count(vars);
var nterms = cljs.core.count(terms);
var num_vars = cljs.core.range.cljs$core$IFn$_invoke$arity$1(nvars);
var format_num_var = bfuncs.typesetting.format_var.cljs$core$IFn$_invoke$arity$1(nvars);
var outer = bfuncs.steps_card.get_outer(target_form);
var inner = bfuncs.steps_card.get_inner(target_form);
var normal_expr = (function (){var G__68948 = bfuncs.utils.echo.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"indexed","indexed",390758624),indexed_expr);
var G__68949 = new cljs.core.Keyword(null,"simplify","simplify",-599213465);
var G__68950 = true;
var fexpr__68947 = (alt.cljs$core$IFn$_invoke$arity$2 ? alt.cljs$core$IFn$_invoke$arity$2(bfuncs.algebra.__GT_SOP,bfuncs.algebra.__GT_POS) : alt.call(null,bfuncs.algebra.__GT_SOP,bfuncs.algebra.__GT_POS));
return (fexpr__68947.cljs$core$IFn$_invoke$arity$3 ? fexpr__68947.cljs$core$IFn$_invoke$arity$3(G__68948,G__68949,G__68950) : fexpr__68947.call(null,G__68948,G__68949,G__68950));
})();
var full_normal_expr = bfuncs.minimization.ints__GT_bobj(num_vars,outer,inner,terms);
var ex_term = bfuncs.steps_card.choose_ex_term(terms,nvars);
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"<>","<>",1280186386),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent_material_ui.core.typography.typography,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"component","component",1555936782),"div"], null),"Let ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [bfuncs.typesetting.$,bfuncs.utils.str_join.cljs$core$IFn$_invoke$arity$5("F(",",",")=",bfuncs.typesetting.format_latex_var,vars)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [bfuncs.typesetting.expression,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"display","display",242065432),true], null),expr], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent_material_ui.core.typography.typography,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"variant","variant",-424354234),"h5"], null),["Find ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((alt.cljs$core$IFn$_invoke$arity$2 ? alt.cljs$core$IFn$_invoke$arity$2("Minterms","Maxterms") : alt.call(null,"Minterms","Maxterms")))].join('')], null),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),reagent.core.class_names.cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(bfuncs.style._BANG_vclasses),new cljs.core.Keyword(null,"steps","steps",-128433302)))], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [bfuncs.steps_card.step,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"number","number",1570378438),(1)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [bfuncs.steps_card.step_summary,"Index each variable."], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent_material_ui.core.typography.typography,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"component","component",1555936782),"div",new cljs.core.Keyword(null,"class","class",-2030961996),"index-step-content"], null),"Let ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [bfuncs.steps_card.variables_dnd,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),reagent.core.class_names.cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(bfuncs.style._BANG_vclasses),new cljs.core.Keyword(null,"variables-dnd","variables-dnd",113911063))),new cljs.core.Keyword(null,"!vars","!vars",494676873),_BANG_vars], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [bfuncs.typesetting.expression,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"display","display",242065432),true,new cljs.core.Keyword(null,"pre","pre",2118456869),bfuncs.utils.str_join.cljs$core$IFn$_invoke$arity$5("F(",",",") = ",format_num_var,cljs.core.range.cljs$core$IFn$_invoke$arity$1(nvars)),new cljs.core.Keyword(null,"math-props","math-props",2106386669),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"indent","indent",-148200125),"1em"], null),new cljs.core.Keyword(null,"var-fn","var-fn",-1379096379),format_num_var], null),indexed_expr], null)], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [bfuncs.steps_card.step,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"number","number",1570378438),1.5], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [bfuncs.steps_card.step_summary,"Expand to ",bfuncs.steps_card.target_form_link(target_form),"."], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [bfuncs.typesetting.expression,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"var-fn","var-fn",-1379096379),format_num_var,new cljs.core.Keyword(null,"display","display",242065432),true,new cljs.core.Keyword(null,"expandable","expandable",-704609097),true,new cljs.core.Keyword(null,"pre","pre",2118456869),bfuncs.utils.str_join.cljs$core$IFn$_invoke$arity$5("{F(",",",")} =",format_num_var,cljs.core.range.cljs$core$IFn$_invoke$arity$1(nvars))], null),normal_expr], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [bfuncs.steps_card.step,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"number","number",1570378438),(2)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [bfuncs.steps_card.step_summary,"Expand to full ",bfuncs.steps_card.target_form_link(target_form),"."], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [bfuncs.typesetting.expression,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"var-fn","var-fn",-1379096379),format_num_var,new cljs.core.Keyword(null,"display","display",242065432),true,new cljs.core.Keyword(null,"expandable","expandable",-704609097),true,new cljs.core.Keyword(null,"pre","pre",2118456869),bfuncs.utils.str_join.cljs$core$IFn$_invoke$arity$5("{F(",",",")} =",format_num_var,cljs.core.range.cljs$core$IFn$_invoke$arity$1(nvars))], null),full_normal_expr], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [bfuncs.steps_card.step,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"number","number",1570378438),(3)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [bfuncs.steps_card.step_summary,"Map each clause to its unique integer representation."], null),new cljs.core.PersistentVector(null, 16, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent_material_ui.core.typography.typography,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"component","component",1555936782),"div"], null),"This is the binary integer with digits",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [bfuncs.typesetting.$,"b_{n-1}, \\dots, b_1, b_0",","], null),"where",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [bfuncs.typesetting.$,"b_i"], null),"is",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [bfuncs.typesetting.$,(alt.cljs$core$IFn$_invoke$arity$2 ? alt.cljs$core$IFn$_invoke$arity$2("1","0") : alt.call(null,"1","0"))], null),"if the clause contains",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [bfuncs.typesetting.$,(format_num_var.cljs$core$IFn$_invoke$arity$1 ? format_num_var.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"i","i",-1386841315)) : format_num_var.call(null,new cljs.core.Keyword(null,"i","i",-1386841315))),","], null),"and",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [bfuncs.typesetting.$,(alt.cljs$core$IFn$_invoke$arity$2 ? alt.cljs$core$IFn$_invoke$arity$2("0","1") : alt.call(null,"0","1"))], null),"if it contains",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [bfuncs.typesetting.$,bfuncs.typesetting.__GT_latex.cljs$core$IFn$_invoke$arity$2(bfuncs.algebra._BANG_(new cljs.core.Keyword(null,"i","i",-1386841315)),format_num_var),"."], null),"For instance,",new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.example-term","div.example-term",-189685541),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [bfuncs.typesetting.$,bfuncs.typesetting.__GT_latex.cljs$core$IFn$_invoke$arity$2(bfuncs.minimization.int__GT_bobj(num_vars,inner,ex_term),format_num_var)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.break-group","div.break-group",1027600299),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [bfuncs.typesetting.$,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"rel-op"], null),"\\mapsto"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),(function (){var obj__27297__auto__ = (function (){var obj__27297__auto__ = ex_term;
var f__27298__auto__ = (obj__27297__auto__["toString"]);
return f__27298__auto__.call(obj__27297__auto__,(2));
})();
var f__27298__auto__ = (obj__27297__auto__["padStart"]);
return f__27298__auto__.call(obj__27297__auto__,nvars,"0");
})(),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sub","sub",-2093760025),"2"], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.break-group","div.break-group",1027600299),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [bfuncs.typesetting.$,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"rel-op"], null),"="], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [bfuncs.typesetting.$,(format_term.cljs$core$IFn$_invoke$arity$1 ? format_term.cljs$core$IFn$_invoke$arity$1(ex_term) : format_term.call(null,ex_term))], null)], null)], null)], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [bfuncs.steps_card.step,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"number","number",1570378438),(4),new cljs.core.Keyword(null,"result","result",1415092211),true,new cljs.core.Keyword(null,"last","last",1105735132),true], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [bfuncs.steps_card.step_summary,(alt_text.cljs$core$IFn$_invoke$arity$2 ? alt_text.cljs$core$IFn$_invoke$arity$2("Minterms","Maxterms") : alt_text.call(null,"Minterms","Maxterms"))," (",nterms,")"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),reagent.core.class_names.cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(bfuncs.style._BANG_vclasses),new cljs.core.Keyword(null,"terms-table","terms-table",720255951)))], null),cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.seq((function (){var iter__4529__auto__ = (function bfuncs$steps_card$terms_section_$_iter__68951(s__68952){
return (new cljs.core.LazySeq(null,(function (){
var s__68952__$1 = s__68952;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__68952__$1);
if(temp__5735__auto__){
var s__68952__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__68952__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__68952__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__68954 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__68953 = (0);
while(true){
if((i__68953 < size__4528__auto__)){
var term = cljs.core._nth(c__4527__auto__,i__68953);
cljs.core.chunk_append(b__68954,cljs.core.with_meta(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [bfuncs.steps_card.term_chip,term,format_term,_BANG_sel], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),term], null)));

var G__69035 = (i__68953 + (1));
i__68953 = G__69035;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__68954),bfuncs$steps_card$terms_section_$_iter__68951(cljs.core.chunk_rest(s__68952__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__68954),null);
}
} else {
var term = cljs.core.first(s__68952__$2);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [bfuncs.steps_card.term_chip,term,format_term,_BANG_sel], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),term], null)),bfuncs$steps_card$terms_section_$_iter__68951(cljs.core.rest(s__68952__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4529__auto__(terms);
})()))], null)], null)], null)], null);
});
bfuncs.steps_card.prime_implicants_section = (function bfuncs$steps_card$prime_implicants_section(p__68955){
var map__68956 = p__68955;
var map__68956__$1 = (((((!((map__68956 == null))))?(((((map__68956.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__68956.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__68956):map__68956);
var data_map = map__68956__$1;
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68956__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var alt = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68956__$1,new cljs.core.Keyword(null,"alt","alt",-3214426));
var alt_text = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68956__$1,new cljs.core.Keyword(null,"alt-text","alt-text",-1540833707));
var map__68958 = data;
var map__68958__$1 = (((((!((map__68958 == null))))?(((((map__68958.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__68958.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__68958):map__68958);
var primes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68958__$1,new cljs.core.Keyword(null,"primes","primes",434410681));
var target_form = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68958__$1,new cljs.core.Keyword(null,"target-form","target-form",1593121146));
var nprimes = cljs.core.count(primes);
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"<>","<>",1280186386),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent_material_ui.core.typography.typography,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"variant","variant",-424354234),"h5"], null),"Find Prime ",(alt.cljs$core$IFn$_invoke$arity$2 ? alt.cljs$core$IFn$_invoke$arity$2("Implicants","Implicates") : alt.call(null,"Implicants","Implicates"))], null),new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent_material_ui.core.typography.typography,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"component","component",1555936782),"div"], null),"an",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [bfuncs.glossary.gloss,new cljs.core.Keyword(null,"implicant","implicant",-1797355558),"implicant"], null)," implicant is",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [bfuncs.glossary.gloss,new cljs.core.Keyword(null,"implicate","implicate",-1393748933),"implicate"], null),"coverage ",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [bfuncs.glossary.gloss,new cljs.core.Keyword(null,"cover-sop","cover-sop",-602065416),"covers"], null),"or can have also",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [bfuncs.glossary.gloss,new cljs.core.Keyword(null,"cover-pos","cover-pos",-80108566),"covers"], null),"implicants."], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [bfuncs.reduction_steps.reduction_steps_section,data_map], null),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent_material_ui.core.typography.typography,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"component","component",1555936782),"div"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [bfuncs.typesetting.$,"F"], null),"has",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),nprimes], null),"prime",((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(nprimes,(1)))?(alt_text.cljs$core$IFn$_invoke$arity$2 ? alt_text.cljs$core$IFn$_invoke$arity$2("implicant:","implicate:") : alt_text.call(null,"implicant:","implicate:")):(alt_text.cljs$core$IFn$_invoke$arity$2 ? alt_text.cljs$core$IFn$_invoke$arity$2("implicants:","implicates:") : alt_text.call(null,"implicants:","implicates:")))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [bfuncs.steps_card.prime_implicants_grid,data_map], null)], null);
});
bfuncs.steps_card.coverage_table_section = (function bfuncs$steps_card$coverage_table_section(p__68960){
var map__68961 = p__68960;
var map__68961__$1 = (((((!((map__68961 == null))))?(((((map__68961.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__68961.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__68961):map__68961);
var data_map = map__68961__$1;
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68961__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var format_prime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68961__$1,new cljs.core.Keyword(null,"format-prime","format-prime",455151967));
var format_term = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68961__$1,new cljs.core.Keyword(null,"format-term","format-term",-706410519));
var alt = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68961__$1,new cljs.core.Keyword(null,"alt","alt",-3214426));
var alt_text = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68961__$1,new cljs.core.Keyword(null,"alt-text","alt-text",-1540833707));
var map__68963 = data;
var map__68963__$1 = (((((!((map__68963 == null))))?(((((map__68963.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__68963.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__68963):map__68963);
var terms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68963__$1,new cljs.core.Keyword(null,"terms","terms",-1556977978));
var target_form = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68963__$1,new cljs.core.Keyword(null,"target-form","target-form",1593121146));
var term_type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68963__$1,new cljs.core.Keyword(null,"term-type","term-type",775586708));
var prime_type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68963__$1,new cljs.core.Keyword(null,"prime-type","prime-type",1343559236));
var essentials = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68963__$1,new cljs.core.Keyword(null,"essentials","essentials",-670250967));
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"<>","<>",1280186386),new cljs.core.PersistentVector(null, 15, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent_material_ui.core.typography.typography,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"component","component",1555936782),"div"], null),"We know that any minimal solution",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [bfuncs.typesetting.$,"F^*"], null),"must be a",(alt_text.cljs$core$IFn$_invoke$arity$2 ? alt_text.cljs$core$IFn$_invoke$arity$2("disjunction","conjunction") : alt_text.call(null,"disjunction","conjunction")),"of prime",(alt_text.cljs$core$IFn$_invoke$arity$2 ? alt_text.cljs$core$IFn$_invoke$arity$2("implicants.","implicates.") : alt_text.call(null,"implicants.","implicates.")),"That is, for some subset of prime",(alt_text.cljs$core$IFn$_invoke$arity$2 ? alt_text.cljs$core$IFn$_invoke$arity$2("implicants","implicates") : alt_text.call(null,"implicants","implicates")),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [bfuncs.typesetting.$,["\\P \\subseteq \\{",cljs.core.str.cljs$core$IFn$_invoke$arity$1((format_prime.cljs$core$IFn$_invoke$arity$1 ? format_prime.cljs$core$IFn$_invoke$arity$1((1)) : format_prime.call(null,(1)))),", ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((format_prime.cljs$core$IFn$_invoke$arity$1 ? format_prime.cljs$core$IFn$_invoke$arity$1((2)) : format_prime.call(null,(2)))),", \\dots \\}"].join(''),","], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [bfuncs.typesetting.$$,["F^* = ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((alt.cljs$core$IFn$_invoke$arity$2 ? alt.cljs$core$IFn$_invoke$arity$2("\\bigvee","\\bigwedge") : alt.call(null,"\\bigvee","\\bigwedge"))),"_{",cljs.core.str.cljs$core$IFn$_invoke$arity$1((format_prime.cljs$core$IFn$_invoke$arity$0 ? format_prime.cljs$core$IFn$_invoke$arity$0() : format_prime.call(null))),"\\in \\P}",cljs.core.str.cljs$core$IFn$_invoke$arity$1((format_prime.cljs$core$IFn$_invoke$arity$0 ? format_prime.cljs$core$IFn$_invoke$arity$0() : format_prime.call(null)))].join(''),"."], null),"From this perspective, minimization involves determining",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [bfuncs.typesetting.$,"\\P"], null),"such that"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent_material_ui.core.typography.typography,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"variant","variant",-424354234),"h5"], null),"Create Coverage Table"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [bfuncs.steps_card.coverage_table,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"table-props","table-props",1453199839),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"formatColumnHeader","formatColumnHeader",1807640444),format_term,new cljs.core.Keyword(null,"minColumnWidth","minColumnWidth",283428292),((32) + (bfuncs.utils.maximum.cljs$core$IFn$_invoke$arity$2(bfuncs.utils.int_digits,terms) * (7)))], null),new cljs.core.Keyword(null,"data-map","data-map",1612860968),data_map], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent_material_ui.core.typography.typography,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"component","component",1555936782),"div"], null),"TABLE EXPLANATION GOES HERE MAYBE?"], null),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent_material_ui.core.typography.typography,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"component","component",1555936782),"div"], null),"A prime implicant is considered",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [bfuncs.glossary.gloss,new cljs.core.Keyword(null,"essential","essential",1969545466),"essential"], null),"if it covers a",(alt_text.cljs$core$IFn$_invoke$arity$2 ? alt_text.cljs$core$IFn$_invoke$arity$2("minterm","maxterm") : alt_text.call(null,"minterm","maxterm")),"that no others do.",((cljs.core.empty_QMARK_(essentials))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"<>","<>",1280186386)," In this case, no prime implicants are essential."], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"<>","<>",1280186386),"The following prime implicants are essential: ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [bfuncs.steps_card.essentials_table,data_map], null)], null)),((cljs.core.empty_QMARK_(essentials))?"Since there are no essential prime implicants in this case, ":"We remove all rows corresponding to essential primes,\n        columns corresponding to any terms those essential primes cover.")], null)], null);
});
bfuncs.steps_card.petricks_method_section = (function bfuncs$steps_card$petricks_method_section(p__68965){
var map__68966 = p__68965;
var map__68966__$1 = (((((!((map__68966 == null))))?(((((map__68966.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__68966.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__68966):map__68966);
var data_map = map__68966__$1;
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68966__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var format_term = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68966__$1,new cljs.core.Keyword(null,"format-term","format-term",-706410519));
var format_prime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68966__$1,new cljs.core.Keyword(null,"format-prime","format-prime",455151967));
var alt_text = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68966__$1,new cljs.core.Keyword(null,"alt-text","alt-text",-1540833707));
var map__68968 = data;
var map__68968__$1 = (((((!((map__68968 == null))))?(((((map__68968.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__68968.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__68968):map__68968);
var terms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68968__$1,new cljs.core.Keyword(null,"terms","terms",-1556977978));
var term_type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68968__$1,new cljs.core.Keyword(null,"term-type","term-type",775586708));
var target_form = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68968__$1,new cljs.core.Keyword(null,"target-form","target-form",1593121146));
var remaining = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68968__$1,new cljs.core.Keyword(null,"remaining","remaining",-138926777));
var essentials = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68968__$1,new cljs.core.Keyword(null,"essentials","essentials",-670250967));
var varp = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(bfuncs.algebra._AMPERSAND__AMPERSAND_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.apply,bfuncs.algebra._BAR__BAR_),cljs.core.vals(remaining)));
var espanded = bfuncs.algebra.__GT_SOP(varp);
var remaining_terms = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.get,terms),cljs.core.keys(remaining));
var vec__68969 = cljs.core.first(remaining);
var rem_idx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__68969,(0),null);
var rem_cov = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__68969,(1),null);
var rem_cov__$1 = cljs.core.sort.cljs$core$IFn$_invoke$arity$1(rem_cov);
var nrem_cov = cljs.core.count(rem_cov__$1);
var rem_term = cljs.core.get.cljs$core$IFn$_invoke$arity$2(terms,rem_idx);
var rem_term_formatted = (format_term.cljs$core$IFn$_invoke$arity$1 ? format_term.cljs$core$IFn$_invoke$arity$1(rem_term) : format_term.call(null,rem_term));
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"<>","<>",1280186386),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent_material_ui.core.typography.typography,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"variant","variant",-424354234),"h5"], null),"Petrick's Method"], null),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.steps","div.steps",-1177755215),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [bfuncs.steps_card.step,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"number","number",1570378438),(1)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [bfuncs.steps_card.step_summary,"Remove essential prime implicants from the coverage table."], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent_material_ui.core.typography.typography,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"component","component",1555936782),"div"], null),((cljs.core.empty_QMARK_(essentials))?"Since there are no essential prime implicants in this case, ":"We remove all rows corresponding to essential primes,\n          columns corresponding to any terms those essential primes cover.")], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [bfuncs.steps_card.step,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"number","number",1570378438),(2)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [bfuncs.steps_card.step_summary,"Derive new boolean variables from the remaining rows\n          and columns in the reduced coverage table."], null),new cljs.core.PersistentVector(null, 16, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent_material_ui.core.typography.typography,"For each remaining prime implicant",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [bfuncs.typesetting.$,(format_prime.cljs$core$IFn$_invoke$arity$1 ? format_prime.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"i","i",-1386841315)) : format_prime.call(null,new cljs.core.Keyword(null,"i","i",-1386841315))),","], null),"let",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [bfuncs.typesetting.$,"\\pvar_{i}"], null),"be a boolean variable which is true when",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [bfuncs.typesetting.$,[cljs.core.str.cljs$core$IFn$_invoke$arity$1((format_prime.cljs$core$IFn$_invoke$arity$1 ? format_prime.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"i","i",-1386841315)) : format_prime.call(null,new cljs.core.Keyword(null,"i","i",-1386841315))))," \\in \\P"].join(''),"."], null),"For each uncovered ",term_type,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [bfuncs.typesetting.$,(format_term.cljs$core$IFn$_invoke$arity$1 ? format_term.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"i","i",-1386841315)) : format_term.call(null,new cljs.core.Keyword(null,"i","i",-1386841315))),","], null),"let",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [bfuncs.typesetting.$,"\\cvar_{i}"], null),"be a boolean variable which is true when",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [bfuncs.typesetting.$,(format_term.cljs$core$IFn$_invoke$arity$1 ? format_term.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"i","i",-1386841315)) : format_term.call(null,new cljs.core.Keyword(null,"i","i",-1386841315)))], null),"is covered by some element of",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [bfuncs.typesetting.$,"\\P","."], null)], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [bfuncs.steps_card.step,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"number","number",1570378438),(3)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [bfuncs.steps_card.step_summary,"Define a function in terms of the variables ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [bfuncs.typesetting.$,"\\pvar_1, \\pvar_2, \\dots"], null)," that is true when all remaining terms are covered."], null),new cljs.core.PersistentVector(null, 26, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent_material_ui.core.typography.typography,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"component","component",1555936782),"div"], null),"It's clear that",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [bfuncs.typesetting.expression,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"class","class",-2030961996),"original",new cljs.core.Keyword(null,"pre","pre",2118456869),"\\tag{1}",new cljs.core.Keyword(null,"var-fn","var-fn",-1379096379),bfuncs.typesetting.format_covered_var,new cljs.core.Keyword(null,"display","display",242065432),true,new cljs.core.Keyword(null,"math-props","math-props",2106386669),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"displayMode","displayMode",-393584542),true], null)], null)], null),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(bfuncs.algebra._AMPERSAND__AMPERSAND_,remaining_terms)], null),"is satisfied when ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [bfuncs.typesetting.$,"F^*"], null),"covers all remaining terms. Now, we can use the reduced coverage table to put this in terms of our",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [bfuncs.typesetting.$,"\\pvar_i","."], null),"With essential rows hidden, it's easy to see that",(function (){var G__68973 = nrem_cov;
switch (G__68973) {
case (2):
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"<>","<>",1280186386),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [bfuncs.typesetting.$,(function (){var G__68974 = cljs.core.first(rem_cov__$1);
return (format_prime.cljs$core$IFn$_invoke$arity$1 ? format_prime.cljs$core$IFn$_invoke$arity$1(G__68974) : format_prime.call(null,G__68974));
})()], null),"and",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [bfuncs.typesetting.$,(function (){var G__68975 = cljs.core.second(rem_cov__$1);
return (format_prime.cljs$core$IFn$_invoke$arity$1 ? format_prime.cljs$core$IFn$_invoke$arity$1(G__68975) : format_prime.call(null,G__68975));
})()], null)], null);

break;
default:
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"<>","<>",1280186386),cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.seq((function (){var iter__4529__auto__ = (function bfuncs$steps_card$petricks_method_section_$_iter__68976(s__68977){
return (new cljs.core.LazySeq(null,(function (){
var s__68977__$1 = s__68977;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__68977__$1);
if(temp__5735__auto__){
var s__68977__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__68977__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__68977__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__68979 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__68978 = (0);
while(true){
if((i__68978 < size__4528__auto__)){
var c = cljs.core._nth(c__4527__auto__,i__68978);
cljs.core.chunk_append(b__68979,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [bfuncs.typesetting.$,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),c], null),(format_prime.cljs$core$IFn$_invoke$arity$1 ? format_prime.cljs$core$IFn$_invoke$arity$1(c) : format_prime.call(null,c)),","], null));

var G__69046 = (i__68978 + (1));
i__68978 = G__69046;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__68979),bfuncs$steps_card$petricks_method_section_$_iter__68976(cljs.core.chunk_rest(s__68977__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__68979),null);
}
} else {
var c = cljs.core.first(s__68977__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [bfuncs.typesetting.$,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),c], null),(format_prime.cljs$core$IFn$_invoke$arity$1 ? format_prime.cljs$core$IFn$_invoke$arity$1(c) : format_prime.call(null,c)),","], null),bfuncs$steps_card$petricks_method_section_$_iter__68976(cljs.core.rest(s__68977__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4529__auto__(cljs.core.butlast(rem_cov__$1));
})())),"and",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [bfuncs.typesetting.$,(function (){var G__68980 = cljs.core.last(rem_cov__$1);
return (format_prime.cljs$core$IFn$_invoke$arity$1 ? format_prime.cljs$core$IFn$_invoke$arity$1(G__68980) : format_prime.call(null,G__68980));
})()], null)], null);

}
})(),"are the only prime implicants that cover",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [bfuncs.typesetting.$,rem_term_formatted,"."], null),"Thus,",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [bfuncs.typesetting.expression,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"pre","pre",2118456869),["\\cvar_{",cljs.core.str.cljs$core$IFn$_invoke$arity$1(rem_term),"} \\iff "].join(''),new cljs.core.Keyword(null,"var-fn","var-fn",-1379096379),bfuncs.typesetting.format_prime_var,new cljs.core.Keyword(null,"display","display",242065432),false,new cljs.core.Keyword(null,"punct","punct",1807261997),","], null),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(bfuncs.algebra._BAR__BAR_,rem_cov__$1)], null),"since",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [bfuncs.typesetting.$,"F^*"], null),"covers",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [bfuncs.typesetting.$,rem_term_formatted], null),"if and only if",(function (){var G__68981 = nrem_cov;
switch (G__68981) {
case (1):
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [bfuncs.typesetting.$,[cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var G__68983 = cljs.core.first(rem_cov__$1);
return (format_prime.cljs$core$IFn$_invoke$arity$1 ? format_prime.cljs$core$IFn$_invoke$arity$1(G__68983) : format_prime.call(null,G__68983));
})()),"\\in \\P"].join(''),"."], null);

break;
case (2):
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"<>","<>",1280186386),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [bfuncs.typesetting.$,[cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var G__68985 = cljs.core.first(rem_cov__$1);
return (format_prime.cljs$core$IFn$_invoke$arity$1 ? format_prime.cljs$core$IFn$_invoke$arity$1(G__68985) : format_prime.call(null,G__68985));
})()),"\\in \\P"].join('')], null),"or",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [bfuncs.typesetting.$,[cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var G__68987 = cljs.core.second(rem_cov__$1);
return (format_prime.cljs$core$IFn$_invoke$arity$1 ? format_prime.cljs$core$IFn$_invoke$arity$1(G__68987) : format_prime.call(null,G__68987));
})()),"\\in \\P"].join(''),"."], null)], null);

break;
default:
return cljs.core.interpose.cljs$core$IFn$_invoke$arity$2("or",cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.seq((function (){var iter__27573__auto__ = (function bfuncs$steps_card$petricks_method_section_$_iter__68988(s__68989,i__68990){
return (new cljs.core.LazySeq(null,(function (){
var s__68989__$1 = s__68989;
var i__68990__$1 = i__68990;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__68989__$1);
if(temp__5735__auto__){
var s__68989__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__68989__$2)){
var c__68993 = cljs.core.chunk_first(s__68989__$2);
var size__27572__auto__ = cljs.core.count(c__68993);
var b__68992 = cljs.core.chunk_buffer(size__27572__auto__);
if((function (){var j__68991 = (0);
while(true){
if((j__68991 < size__27572__auto__)){
var c = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(c__68993,j__68991);
var i = (j__68991 + i__68990__$1);
cljs.core.chunk_append(b__68992,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [bfuncs.typesetting.$,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),c], null),[cljs.core.str.cljs$core$IFn$_invoke$arity$1((format_prime.cljs$core$IFn$_invoke$arity$1 ? format_prime.cljs$core$IFn$_invoke$arity$1(c) : format_prime.call(null,c))),"\\in \\P"].join(''),(((i < (nrem_cov - (1))))?",":".")], null));

var G__69073 = (j__68991 + (1));
j__68991 = G__69073;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__68992),bfuncs$steps_card$petricks_method_section_$_iter__68988(cljs.core.chunk_rest(s__68989__$2),(i__68990__$1 + size__27572__auto__)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__68992),null);
}
} else {
var c = cljs.core.first(s__68989__$2);
var i = i__68990__$1;
return cljs.core.cons(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [bfuncs.typesetting.$,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),c], null),[cljs.core.str.cljs$core$IFn$_invoke$arity$1((format_prime.cljs$core$IFn$_invoke$arity$1 ? format_prime.cljs$core$IFn$_invoke$arity$1(c) : format_prime.call(null,c))),"\\in \\P"].join(''),(((i < (nrem_cov - (1))))?",":".")], null),bfuncs$steps_card$petricks_method_section_$_iter__68988(cljs.core.rest(s__68989__$2),(i__68990__$1 + (1))));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__27573__auto__(rem_cov__$1,(0));
})())));

}
})(),"Applying the same reasoning to each uncovered term gives the following set of relations:",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [bfuncs.steps_card.implications_grid,data_map], null),"Substituting, we find",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [bfuncs.typesetting.$,"(1)"], null),"is equivalent to",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [bfuncs.typesetting.expression,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"var-fn","var-fn",-1379096379),bfuncs.typesetting.format_prime_var,new cljs.core.Keyword(null,"display","display",242065432),true,new cljs.core.Keyword(null,"punct","punct",1807261997),"."], null),varp], null)], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [bfuncs.steps_card.step,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"number","number",1570378438),(4)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [bfuncs.steps_card.step_summary,"Expand to a sum of products and simplify."], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent_material_ui.core.typography.typography,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"component","component",1555936782),"div"], null),"Expanding to a sum of products,",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [bfuncs.typesetting.expression,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"var-fn","var-fn",-1379096379),bfuncs.typesetting.format_prime_var,new cljs.core.Keyword(null,"display","display",242065432),true], null),espanded], null)], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [bfuncs.steps_card.step,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"number","number",1570378438),(5),new cljs.core.Keyword(null,"last","last",1105735132),true], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [bfuncs.steps_card.step_summary,"Choose minimal terms"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent_material_ui.core.typography.typography,"go"], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent_material_ui.core.typography.typography,((cljs.core.seq(essentials))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"<>","<>",1280186386),"After removing essential implicants and the columns they cover from the table, we are left with ",bfuncs.steps_card.verbalize_coll.cljs$core$IFn$_invoke$arity$2("column",remaining_terms),". "], null):null)], null)], null);
});
bfuncs.steps_card.steps_card = (function bfuncs$steps_card$steps_card(p__68994){
var map__68995 = p__68994;
var map__68995__$1 = (((((!((map__68995 == null))))?(((((map__68995.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__68995.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__68995):map__68995);
var title = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__68995__$1,new cljs.core.Keyword(null,"title","title",636505583),"Steps");
var expr = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68995__$1,new cljs.core.Keyword(null,"expr","expr",745722291));
var _BANG_vars = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68995__$1,new cljs.core.Keyword(null,"!vars","!vars",494676873));
var target_form = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__68995__$1,new cljs.core.Keyword(null,"target-form","target-form",1593121146),new cljs.core.Keyword(null,"SOP","SOP",-299014148));
var with_let68997 = reagent.ratom.with_let_values(new cljs.core.Keyword(null,"with-let68997","with-let68997",1297595536));
var temp__5739__auto___69078 = reagent.ratom._STAR_ratom_context_STAR_;
if((temp__5739__auto___69078 == null)){
} else {
var c__27840__auto___69079 = temp__5739__auto___69078;
if((with_let68997.generation === c__27840__auto___69079.ratomGeneration)){
if(reagent.debug.has_console){
((reagent.debug.tracking)?reagent.debug.track_console:console).error(["Warning: The same with-let is being used more ","than once in the same reactive context."].join(''));
} else {
}
} else {
}

(with_let68997.generation = c__27840__auto___69079.ratomGeneration);
}


var init68998 = (with_let68997.length === (0));
var _BANG_data = ((init68998)?(with_let68997[(0)] = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(null)):(with_let68997[(0)]));
var res__27841__auto__ = (function (){var map__68999 = cljs.core.reset_BANG_(_BANG_data,bfuncs.minimization.minimization_steps(target_form,cljs.core.deref(_BANG_vars),expr));
var map__68999__$1 = (((((!((map__68999 == null))))?(((((map__68999.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__68999.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__68999):map__68999);
var data = map__68999__$1;
var target_form__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68999__$1,new cljs.core.Keyword(null,"target-form","target-form",1593121146));
var _BANG_sel = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"selection","selection",975998651),null,new cljs.core.Keyword(null,"page","page",849072397),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(1)], null)], null));
var format_term = (function (){var G__69001 = target_form__$1;
var G__69001__$1 = (((G__69001 instanceof cljs.core.Keyword))?G__69001.fqn:null);
switch (G__69001__$1) {
case "SOP":
return bfuncs.typesetting.format_minterm;

break;
case "POS":
return bfuncs.typesetting.format_maxterm;

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__69001__$1)].join('')));

}
})();
var format_prime = (function (){var G__69002 = target_form__$1;
var G__69002__$1 = (((G__69002 instanceof cljs.core.Keyword))?G__69002.fqn:null);
switch (G__69002__$1) {
case "SOP":
return bfuncs.typesetting.format_prime_implicant;

break;
case "POS":
return bfuncs.typesetting.format_prime_implicate;

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__69002__$1)].join('')));

}
})();
var alt = (function (){var G__69003 = target_form__$1;
var G__69003__$1 = (((G__69003 instanceof cljs.core.Keyword))?G__69003.fqn:null);
switch (G__69003__$1) {
case "SOP":
return (function (a,_){
return a;
});

break;
case "POS":
return (function (_,b){
return b;
});

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__69003__$1)].join('')));

}
})();
var alt_text = (function (){var G__69004 = target_form__$1;
var G__69004__$1 = (((G__69004 instanceof cljs.core.Keyword))?G__69004.fqn:null);
switch (G__69004__$1) {
case "SOP":
return (function (a,_){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),a], null);
});

break;
case "POS":
return (function (_,b){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),b], null);
});

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__69004__$1)].join('')));

}
})();
var data_map = new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"data","data",-232669377),data,new cljs.core.Keyword(null,"!vars","!vars",494676873),_BANG_vars,new cljs.core.Keyword(null,"!sel","!sel",763711166),_BANG_sel,new cljs.core.Keyword(null,"format-term","format-term",-706410519),format_term,new cljs.core.Keyword(null,"format-prime","format-prime",455151967),format_prime,new cljs.core.Keyword(null,"alt","alt",-3214426),alt,new cljs.core.Keyword(null,"alt-text","alt-text",-1540833707),alt_text], null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent_material_ui.core.card.card,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"class","class",-2030961996),(function (){var classes69005 = cljs.core.deref(bfuncs.style._BANG_vclasses);
return reagent.core.class_names.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(classes69005,new cljs.core.Keyword(null,"steps-card","steps-card",-458329547)),cljs.core.get.cljs$core$IFn$_invoke$arity$2(classes69005,new cljs.core.Keyword(null,"vertical-grid","vertical-grid",-438614033)));
})(),new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (e){
if(cljs.core.truth_((function (){var obj69008 = (function (){var obj69006 = e;
var k69007 = "target";
if((function (){var obj69010 = obj69006;
return (((!((obj69010 == null)))) && (applied_science.js_interop.impl.in_QMARK__STAR_(k69007,obj69010)));
})()){
return (obj69006[k69007]);
} else {
return undefined;
}
})();
var k69009 = "closest";
if((function (){var obj69011 = obj69008;
return (((!((obj69011 == null)))) && (applied_science.js_interop.impl.in_QMARK__STAR_(k69009,obj69011)));
})()){
return (obj69008[k69009]);
} else {
return undefined;
}
})())){
if(cljs.core.truth_((function (){var parent__27304__auto__ = (e["target"]);
var f__27305__auto__ = (parent__27304__auto__["closest"]);
return f__27305__auto__.call(parent__27304__auto__,".clicky");
})())){
return null;
} else {
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(_BANG_sel,cljs.core.assoc,new cljs.core.Keyword(null,"selection","selection",975998651),null);
}
} else {
return null;
}
}),new cljs.core.Keyword(null,"data-ustr","data-ustr",1831495075),goog.string.createUniqueString(),new cljs.core.Keyword(null,"id","id",-1388402092),"steps-card"], null),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent_material_ui.core.card_content.card_content,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),reagent.core.class_names.cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(bfuncs.style._BANG_vclasses),new cljs.core.Keyword(null,"card-content","card-content",1213828862)))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent_material_ui.core.typography.typography,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"variant","variant",-424354234),"h2"], null),title], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [bfuncs.steps_card.terms_section,data_map], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [bfuncs.steps_card.prime_implicants_section,data_map], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [bfuncs.steps_card.coverage_table_section,data_map], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [bfuncs.steps_card.petricks_method_section,data_map], null)], null)], null);
})();

return res__27841__auto__;
});

//# sourceMappingURL=bfuncs.steps_card.js.map
