goog.provide('bfuncs.reduction_steps');
var module$node_modules$$material_ui$core$esm$ButtonBase$index=shadow.js.require("module$node_modules$$material_ui$core$esm$ButtonBase$index", {});
bfuncs.reduction_steps.label_displayed_steps = (function bfuncs$reduction_steps$label_displayed_steps(o){
var map__68297 = o;
var map__68297__$1 = (((((!((map__68297 == null))))?(((((map__68297.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__68297.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__68297):map__68297);
var from = (function (){var obj68301 = map__68297__$1;
var k68302 = "from";
if((function (){var obj68303 = obj68301;
return (((!((obj68303 == null)))) && (applied_science.js_interop.impl.in_QMARK__STAR_(k68302,obj68303)));
})()){
return (obj68301[k68302]);
} else {
return undefined;
}
})();
var to = (function (){var obj68304 = map__68297__$1;
var k68305 = "to";
if((function (){var obj68311 = obj68304;
return (((!((obj68311 == null)))) && (applied_science.js_interop.impl.in_QMARK__STAR_(k68305,obj68311)));
})()){
return (obj68304[k68305]);
} else {
return undefined;
}
})();
var count = (function (){var obj68313 = map__68297__$1;
var k68314 = "count";
if((function (){var obj68315 = obj68313;
return (((!((obj68315 == null)))) && (applied_science.js_interop.impl.in_QMARK__STAR_(k68314,obj68315)));
})()){
return (obj68313[k68314]);
} else {
return undefined;
}
})();
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(from,to)){
return ["Step ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(from)," of ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(count)].join('');
} else {
return ["Steps ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(from),"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(to)," of ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(count)].join('');
}
});
bfuncs.reduction_steps.label_displayed_steps_mini = (function bfuncs$reduction_steps$label_displayed_steps_mini(o){
return ["of ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var obj68329 = o;
var k68330 = "count";
if((function (){var obj68331 = obj68329;
return (((!((obj68331 == null)))) && (applied_science.js_interop.impl.in_QMARK__STAR_(k68330,obj68331)));
})()){
return (obj68329[k68330]);
} else {
return undefined;
}
})())].join('');
});
bfuncs.reduction_steps.div_button_base = (function bfuncs$reduction_steps$div_button_base(props){
return reagent.core.create_element.cljs$core$IFn$_invoke$arity$2(module$node_modules$$material_ui$core$esm$ButtonBase$index.default,Object.assign(({}),props,({"component": "tr", "disableRipple": true})));
});
bfuncs.reduction_steps.reduction_steps_body = (function bfuncs$reduction_steps$reduction_steps_body(p__68348){
var map__68349 = p__68348;
var map__68349__$1 = (((((!((map__68349 == null))))?(((((map__68349.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__68349.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__68349):map__68349);
var _BANG_sel = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68349__$1,new cljs.core.Keyword(null,"!sel","!sel",763711166));
var format_prime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68349__$1,new cljs.core.Keyword(null,"format-prime","format-prime",455151967));
var group_row_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68349__$1,new cljs.core.Keyword(null,"group-row-fn","group-row-fn",-1732843932));
var format_term = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68349__$1,new cljs.core.Keyword(null,"format-term","format-term",-706410519));
var steps = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68349__$1,new cljs.core.Keyword(null,"steps","steps",-128433302));
var head_row = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68349__$1,new cljs.core.Keyword(null,"head-row","head-row",-791709300));
var title_row_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68349__$1,new cljs.core.Keyword(null,"title-row-fn","title-row-fn",-176245520));
var term_length = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68349__$1,new cljs.core.Keyword(null,"term-length","term-length",552241655));
var paginated = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68349__$1,new cljs.core.Keyword(null,"paginated","paginated",-133793192));
var map__68358 = cljs.core.deref(_BANG_sel);
var map__68358__$1 = (((((!((map__68358 == null))))?(((((map__68358.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__68358.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__68358):map__68358);
var vec__68359 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68358__$1,new cljs.core.Keyword(null,"page-data","page-data",1443840710));
var page = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__68359,(0),null);
var steps_per_page = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__68359,(1),null);
var selection = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68358__$1,new cljs.core.Keyword(null,"selection","selection",975998651));
var fst = (cljs.core.truth_(paginated)?(page * steps_per_page):(0));
var lst = (cljs.core.truth_(paginated)?(fst + steps_per_page):Infinity);
var vec__68362 = bfuncs.minimization.decode_selection.cljs$core$IFn$_invoke$arity$2(selection,term_length);
var sel_i = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__68362,(0),null);
var sel_g = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__68362,(1),null);
var sel_imp = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__68362,(2),null);
var sel_terms = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__68362,(3),null);
var sel = vec__68362;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"<>","<>",1280186386),cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.seq((function (){var iter__27573__auto__ = (function bfuncs$reduction_steps$reduction_steps_body_$_iter__68370(s__68371,i__68372){
return (new cljs.core.LazySeq(null,(function (){
var s__68371__$1 = s__68371;
var i__68372__$1 = i__68372;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__68371__$1);
if(temp__5735__auto__){
var s__68371__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__68371__$2)){
var c__68375 = cljs.core.chunk_first(s__68371__$2);
var size__27572__auto__ = cljs.core.count(c__68375);
var b__68374 = cljs.core.chunk_buffer(size__27572__auto__);
if((function (){var j__68373 = (0);
while(true){
if((j__68373 < size__27572__auto__)){
var step = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(c__68375,j__68373);
var i = (j__68373 + i__68372__$1);
if((i < lst)){
if((fst <= i)){
cljs.core.chunk_append(b__68374,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent_material_ui.core.table_body.table_body,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),i,new cljs.core.Keyword(null,"class","class",-2030961996),"step-body"], null),(function (){var G__68387 = i;
var G__68388 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(i,fst);
return (title_row_fn.cljs$core$IFn$_invoke$arity$2 ? title_row_fn.cljs$core$IFn$_invoke$arity$2(G__68387,G__68388) : title_row_fn.call(null,G__68387,G__68388));
})(),head_row,cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.seq((function (){var iter__27573__auto__ = ((function (j__68373,s__68371__$1,i__68372__$1,step,i,c__68375,size__27572__auto__,b__68374,s__68371__$2,temp__5735__auto__,map__68358,map__68358__$1,vec__68359,page,steps_per_page,selection,fst,lst,vec__68362,sel_i,sel_g,sel_imp,sel_terms,sel,map__68349,map__68349__$1,_BANG_sel,format_prime,group_row_fn,format_term,steps,head_row,title_row_fn,term_length,paginated){
return (function bfuncs$reduction_steps$reduction_steps_body_$_iter__68370_$_iter__68389(s__68390,i__68391){
return (new cljs.core.LazySeq(null,((function (j__68373,s__68371__$1,i__68372__$1,step,i,c__68375,size__27572__auto__,b__68374,s__68371__$2,temp__5735__auto__,map__68358,map__68358__$1,vec__68359,page,steps_per_page,selection,fst,lst,vec__68362,sel_i,sel_g,sel_imp,sel_terms,sel,map__68349,map__68349__$1,_BANG_sel,format_prime,group_row_fn,format_term,steps,head_row,title_row_fn,term_length,paginated){
return (function (){
var s__68390__$1 = s__68390;
var i__68391__$1 = i__68391;
while(true){
var temp__5735__auto____$1 = cljs.core.seq(s__68390__$1);
if(temp__5735__auto____$1){
var s__68390__$2 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__68390__$2)){
var c__68394 = cljs.core.chunk_first(s__68390__$2);
var size__27572__auto____$1 = cljs.core.count(c__68394);
var b__68393 = cljs.core.chunk_buffer(size__27572__auto____$1);
if((function (){var j__68392 = (0);
while(true){
if((j__68392 < size__27572__auto____$1)){
var vec__68399 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(c__68394,j__68392);
var group = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__68399,(0),null);
var imps = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__68399,(1),null);
var j = (j__68392 + i__68391__$1);
cljs.core.chunk_append(b__68393,cljs.core.cons(cljs.core.with_meta((function (){var G__68405 = group;
var G__68406 = cljs.core.count(imps);
return (group_row_fn.cljs$core$IFn$_invoke$arity$2 ? group_row_fn.cljs$core$IFn$_invoke$arity$2(G__68405,G__68406) : group_row_fn.call(null,G__68405,G__68406));
})(),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(i),cljs.core.str.cljs$core$IFn$_invoke$arity$1(j)].join('')], null)),cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.seq((function (){var iter__27573__auto__ = ((function (j__68392,j__68373,s__68371__$1,i__68372__$1,vec__68399,group,imps,j,c__68394,size__27572__auto____$1,b__68393,s__68390__$2,temp__5735__auto____$1,step,i,c__68375,size__27572__auto__,b__68374,s__68371__$2,temp__5735__auto__,map__68358,map__68358__$1,vec__68359,page,steps_per_page,selection,fst,lst,vec__68362,sel_i,sel_g,sel_imp,sel_terms,sel,map__68349,map__68349__$1,_BANG_sel,format_prime,group_row_fn,format_term,steps,head_row,title_row_fn,term_length,paginated){
return (function bfuncs$reduction_steps$reduction_steps_body_$_iter__68370_$_iter__68389_$_iter__68407(s__68408,i__68409){
return (new cljs.core.LazySeq(null,((function (j__68392,j__68373,s__68371__$1,i__68372__$1,vec__68399,group,imps,j,c__68394,size__27572__auto____$1,b__68393,s__68390__$2,temp__5735__auto____$1,step,i,c__68375,size__27572__auto__,b__68374,s__68371__$2,temp__5735__auto__,map__68358,map__68358__$1,vec__68359,page,steps_per_page,selection,fst,lst,vec__68362,sel_i,sel_g,sel_imp,sel_terms,sel,map__68349,map__68349__$1,_BANG_sel,format_prime,group_row_fn,format_term,steps,head_row,title_row_fn,term_length,paginated){
return (function (){
var s__68408__$1 = s__68408;
var i__68409__$1 = i__68409;
while(true){
var temp__5735__auto____$2 = cljs.core.seq(s__68408__$1);
if(temp__5735__auto____$2){
var s__68408__$2 = temp__5735__auto____$2;
if(cljs.core.chunked_seq_QMARK_(s__68408__$2)){
var c__68412 = cljs.core.chunk_first(s__68408__$2);
var size__27572__auto____$2 = cljs.core.count(c__68412);
var b__68411 = cljs.core.chunk_buffer(size__27572__auto____$2);
if((function (){var j__68410 = (0);
while(true){
if((j__68410 < size__27572__auto____$2)){
var imp = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(c__68412,j__68410);
var k = (j__68410 + i__68409__$1);
var terms = bfuncs.minimization.covered_terms(imp);
var term = ((bfuncs.utils.singleton_QMARK_(terms))?cljs.core.first(terms):null);
var prime_index = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.meta(imp),new cljs.core.Keyword(null,"prime-index","prime-index",-1428577630));
var v = (cljs.core.truth_(prime_index)?imp:(cljs.core.truth_(term)?term:imp
));
var status = (cljs.core.truth_(sel)?(((((sel_i < i)) && (clojure.set.subset_QMARK_(sel_terms,terms))))?"covers-selected":(((((sel_i > i)) && (clojure.set.subset_QMARK_(terms,sel_terms))))?"covered-by-selected":(function (){var G__68421 = (group - sel_g);
switch (G__68421) {
case (0):
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(imp,sel_imp)){
return "selected";
} else {
return "nothing";
}

break;
case (-1):
case (1):
if(cljs.core.truth_(bfuncs.minimization.compatible_QMARK_(imp,sel_imp))){
return "compatible";
} else {
return "nothing";
}

break;
default:
return "nothing";

}
})()
)):null);
cljs.core.chunk_append(b__68411,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent_material_ui.core.table_row.table_row,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"key","key",-1516042587),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(i),cljs.core.str.cljs$core$IFn$_invoke$arity$1(j),cljs.core.str.cljs$core$IFn$_invoke$arity$1(k)].join(''),new cljs.core.Keyword(null,"component","component",1555936782),bfuncs.reduction_steps.div_button_base,new cljs.core.Keyword(null,"tab-index","tab-index",895755393),(0),new cljs.core.Keyword(null,"class","class",-2030961996),reagent.core.class_names.cljs$core$IFn$_invoke$arity$2(status,"data-row"),new cljs.core.Keyword(null,"title","title",636505583),(function (){var G__68424 = status;
switch (G__68424) {
case "covers-selected":
return "Covers selection";

break;
case "covered-by-selected":
return "Covered by selection";

break;
case "compatible":
return "Can merge with selection";

break;
default:
return null;

}
})(),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (j__68410,j__68392,j__68373,s__68371__$1,i__68372__$1,terms,term,prime_index,v,status,imp,k,c__68412,size__27572__auto____$2,b__68411,s__68408__$2,temp__5735__auto____$2,vec__68399,group,imps,j,c__68394,size__27572__auto____$1,b__68393,s__68390__$2,temp__5735__auto____$1,step,i,c__68375,size__27572__auto__,b__68374,s__68371__$2,temp__5735__auto__,map__68358,map__68358__$1,vec__68359,page,steps_per_page,selection,fst,lst,vec__68362,sel_i,sel_g,sel_imp,sel_terms,sel,map__68349,map__68349__$1,_BANG_sel,format_prime,group_row_fn,format_term,steps,head_row,title_row_fn,term_length,paginated){
return (function (p1__68345_SHARP_){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(_BANG_sel,bfuncs.utils.toggle_selection,p1__68345_SHARP_,v,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([null], 0));
});})(j__68410,j__68392,j__68373,s__68371__$1,i__68372__$1,terms,term,prime_index,v,status,imp,k,c__68412,size__27572__auto____$2,b__68411,s__68408__$2,temp__5735__auto____$2,vec__68399,group,imps,j,c__68394,size__27572__auto____$1,b__68393,s__68390__$2,temp__5735__auto____$1,step,i,c__68375,size__27572__auto__,b__68374,s__68371__$2,temp__5735__auto__,map__68358,map__68358__$1,vec__68359,page,steps_per_page,selection,fst,lst,vec__68362,sel_i,sel_g,sel_imp,sel_terms,sel,map__68349,map__68349__$1,_BANG_sel,format_prime,group_row_fn,format_term,steps,head_row,title_row_fn,term_length,paginated))
], null),(function (){var names = (function (){var G__68425 = cljs.core.PersistentVector.EMPTY;
var G__68425__$1 = ((bfuncs.utils.singleton_QMARK_(terms))?cljs.core.conj.cljs$core$IFn$_invoke$arity$2(G__68425,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [bfuncs.typesetting.$,(function (){var G__68426 = cljs.core.first(terms);
return (format_term.cljs$core$IFn$_invoke$arity$1 ? format_term.cljs$core$IFn$_invoke$arity$1(G__68426) : format_term.call(null,G__68426));
})()], null)):G__68425);
if(cljs.core.truth_(prime_index)){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(G__68425__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [bfuncs.typesetting.$,(format_prime.cljs$core$IFn$_invoke$arity$1 ? format_prime.cljs$core$IFn$_invoke$arity$1(prime_index) : format_prime.call(null,prime_index))], null));
} else {
return G__68425__$1;
}
})();
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent_material_ui.core.table_cell.table_cell,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),reagent.core.class_names.cljs$core$IFn$_invoke$arity$2("star-cell",((cljs.core.empty_QMARK_(names))?"empty":null))], null)], null),names);
})(),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent_material_ui.core.table_cell.table_cell,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"terms-cell"], null),clojure.string.join.cljs$core$IFn$_invoke$arity$2(", ",terms)], null),cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.seq((function (){var iter__27573__auto__ = ((function (j__68410,j__68392,j__68373,s__68371__$1,i__68372__$1,terms,term,prime_index,v,status,imp,k,c__68412,size__27572__auto____$2,b__68411,s__68408__$2,temp__5735__auto____$2,vec__68399,group,imps,j,c__68394,size__27572__auto____$1,b__68393,s__68390__$2,temp__5735__auto____$1,step,i,c__68375,size__27572__auto__,b__68374,s__68371__$2,temp__5735__auto__,map__68358,map__68358__$1,vec__68359,page,steps_per_page,selection,fst,lst,vec__68362,sel_i,sel_g,sel_imp,sel_terms,sel,map__68349,map__68349__$1,_BANG_sel,format_prime,group_row_fn,format_term,steps,head_row,title_row_fn,term_length,paginated){
return (function bfuncs$reduction_steps$reduction_steps_body_$_iter__68370_$_iter__68389_$_iter__68407_$_iter__68427(s__68428,i__68429){
return (new cljs.core.LazySeq(null,((function (j__68410,j__68392,j__68373,s__68371__$1,i__68372__$1,terms,term,prime_index,v,status,imp,k,c__68412,size__27572__auto____$2,b__68411,s__68408__$2,temp__5735__auto____$2,vec__68399,group,imps,j,c__68394,size__27572__auto____$1,b__68393,s__68390__$2,temp__5735__auto____$1,step,i,c__68375,size__27572__auto__,b__68374,s__68371__$2,temp__5735__auto__,map__68358,map__68358__$1,vec__68359,page,steps_per_page,selection,fst,lst,vec__68362,sel_i,sel_g,sel_imp,sel_terms,sel,map__68349,map__68349__$1,_BANG_sel,format_prime,group_row_fn,format_term,steps,head_row,title_row_fn,term_length,paginated){
return (function (){
var s__68428__$1 = s__68428;
var i__68429__$1 = i__68429;
while(true){
var temp__5735__auto____$3 = cljs.core.seq(s__68428__$1);
if(temp__5735__auto____$3){
var s__68428__$2 = temp__5735__auto____$3;
if(cljs.core.chunked_seq_QMARK_(s__68428__$2)){
var c__68432 = cljs.core.chunk_first(s__68428__$2);
var size__27572__auto____$3 = cljs.core.count(c__68432);
var b__68431 = cljs.core.chunk_buffer(size__27572__auto____$3);
if((function (){var j__68430 = (0);
while(true){
if((j__68430 < size__27572__auto____$3)){
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(c__68432,j__68430);
var m = (j__68430 + i__68429__$1);
cljs.core.chunk_append(b__68431,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent_material_ui.core.table_cell.table_cell,(function (){var G__68449 = x;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(true,G__68449)){
return "1";
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(false,G__68449)){
return "0";
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(null,G__68449)){
return "\u2013";
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__68449)].join('')));

}
}
}
})()], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),m], null)));

var G__68674 = (j__68430 + (1));
j__68430 = G__68674;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__68431),bfuncs$reduction_steps$reduction_steps_body_$_iter__68370_$_iter__68389_$_iter__68407_$_iter__68427(cljs.core.chunk_rest(s__68428__$2),(i__68429__$1 + size__27572__auto____$3)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__68431),null);
}
} else {
var x = cljs.core.first(s__68428__$2);
var m = i__68429__$1;
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent_material_ui.core.table_cell.table_cell,(function (){var G__68452 = x;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(true,G__68452)){
return "1";
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(false,G__68452)){
return "0";
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(null,G__68452)){
return "\u2013";
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__68452)].join('')));

}
}
}
})()], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),m], null)),bfuncs$reduction_steps$reduction_steps_body_$_iter__68370_$_iter__68389_$_iter__68407_$_iter__68427(cljs.core.rest(s__68428__$2),(i__68429__$1 + (1))));
}
} else {
return null;
}
break;
}
});})(j__68410,j__68392,j__68373,s__68371__$1,i__68372__$1,terms,term,prime_index,v,status,imp,k,c__68412,size__27572__auto____$2,b__68411,s__68408__$2,temp__5735__auto____$2,vec__68399,group,imps,j,c__68394,size__27572__auto____$1,b__68393,s__68390__$2,temp__5735__auto____$1,step,i,c__68375,size__27572__auto__,b__68374,s__68371__$2,temp__5735__auto__,map__68358,map__68358__$1,vec__68359,page,steps_per_page,selection,fst,lst,vec__68362,sel_i,sel_g,sel_imp,sel_terms,sel,map__68349,map__68349__$1,_BANG_sel,format_prime,group_row_fn,format_term,steps,head_row,title_row_fn,term_length,paginated))
,null,null));
});})(j__68410,j__68392,j__68373,s__68371__$1,i__68372__$1,terms,term,prime_index,v,status,imp,k,c__68412,size__27572__auto____$2,b__68411,s__68408__$2,temp__5735__auto____$2,vec__68399,group,imps,j,c__68394,size__27572__auto____$1,b__68393,s__68390__$2,temp__5735__auto____$1,step,i,c__68375,size__27572__auto__,b__68374,s__68371__$2,temp__5735__auto__,map__68358,map__68358__$1,vec__68359,page,steps_per_page,selection,fst,lst,vec__68362,sel_i,sel_g,sel_imp,sel_terms,sel,map__68349,map__68349__$1,_BANG_sel,format_prime,group_row_fn,format_term,steps,head_row,title_row_fn,term_length,paginated))
;
return iter__27573__auto__(imp,(0));
})()))], null));

var G__68675 = (j__68410 + (1));
j__68410 = G__68675;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__68411),bfuncs$reduction_steps$reduction_steps_body_$_iter__68370_$_iter__68389_$_iter__68407(cljs.core.chunk_rest(s__68408__$2),(i__68409__$1 + size__27572__auto____$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__68411),null);
}
} else {
var imp = cljs.core.first(s__68408__$2);
var k = i__68409__$1;
var terms = bfuncs.minimization.covered_terms(imp);
var term = ((bfuncs.utils.singleton_QMARK_(terms))?cljs.core.first(terms):null);
var prime_index = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.meta(imp),new cljs.core.Keyword(null,"prime-index","prime-index",-1428577630));
var v = (cljs.core.truth_(prime_index)?imp:(cljs.core.truth_(term)?term:imp
));
var status = (cljs.core.truth_(sel)?(((((sel_i < i)) && (clojure.set.subset_QMARK_(sel_terms,terms))))?"covers-selected":(((((sel_i > i)) && (clojure.set.subset_QMARK_(terms,sel_terms))))?"covered-by-selected":(function (){var G__68457 = (group - sel_g);
switch (G__68457) {
case (0):
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(imp,sel_imp)){
return "selected";
} else {
return "nothing";
}

break;
case (-1):
case (1):
if(cljs.core.truth_(bfuncs.minimization.compatible_QMARK_(imp,sel_imp))){
return "compatible";
} else {
return "nothing";
}

break;
default:
return "nothing";

}
})()
)):null);
return cljs.core.cons(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent_material_ui.core.table_row.table_row,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"key","key",-1516042587),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(i),cljs.core.str.cljs$core$IFn$_invoke$arity$1(j),cljs.core.str.cljs$core$IFn$_invoke$arity$1(k)].join(''),new cljs.core.Keyword(null,"component","component",1555936782),bfuncs.reduction_steps.div_button_base,new cljs.core.Keyword(null,"tab-index","tab-index",895755393),(0),new cljs.core.Keyword(null,"class","class",-2030961996),reagent.core.class_names.cljs$core$IFn$_invoke$arity$2(status,"data-row"),new cljs.core.Keyword(null,"title","title",636505583),(function (){var G__68460 = status;
switch (G__68460) {
case "covers-selected":
return "Covers selection";

break;
case "covered-by-selected":
return "Covered by selection";

break;
case "compatible":
return "Can merge with selection";

break;
default:
return null;

}
})(),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (j__68392,j__68373,s__68371__$1,i__68372__$1,terms,term,prime_index,v,status,imp,k,s__68408__$2,temp__5735__auto____$2,vec__68399,group,imps,j,c__68394,size__27572__auto____$1,b__68393,s__68390__$2,temp__5735__auto____$1,step,i,c__68375,size__27572__auto__,b__68374,s__68371__$2,temp__5735__auto__,map__68358,map__68358__$1,vec__68359,page,steps_per_page,selection,fst,lst,vec__68362,sel_i,sel_g,sel_imp,sel_terms,sel,map__68349,map__68349__$1,_BANG_sel,format_prime,group_row_fn,format_term,steps,head_row,title_row_fn,term_length,paginated){
return (function (p1__68345_SHARP_){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(_BANG_sel,bfuncs.utils.toggle_selection,p1__68345_SHARP_,v,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([null], 0));
});})(j__68392,j__68373,s__68371__$1,i__68372__$1,terms,term,prime_index,v,status,imp,k,s__68408__$2,temp__5735__auto____$2,vec__68399,group,imps,j,c__68394,size__27572__auto____$1,b__68393,s__68390__$2,temp__5735__auto____$1,step,i,c__68375,size__27572__auto__,b__68374,s__68371__$2,temp__5735__auto__,map__68358,map__68358__$1,vec__68359,page,steps_per_page,selection,fst,lst,vec__68362,sel_i,sel_g,sel_imp,sel_terms,sel,map__68349,map__68349__$1,_BANG_sel,format_prime,group_row_fn,format_term,steps,head_row,title_row_fn,term_length,paginated))
], null),(function (){var names = (function (){var G__68463 = cljs.core.PersistentVector.EMPTY;
var G__68463__$1 = ((bfuncs.utils.singleton_QMARK_(terms))?cljs.core.conj.cljs$core$IFn$_invoke$arity$2(G__68463,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [bfuncs.typesetting.$,(function (){var G__68469 = cljs.core.first(terms);
return (format_term.cljs$core$IFn$_invoke$arity$1 ? format_term.cljs$core$IFn$_invoke$arity$1(G__68469) : format_term.call(null,G__68469));
})()], null)):G__68463);
if(cljs.core.truth_(prime_index)){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(G__68463__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [bfuncs.typesetting.$,(format_prime.cljs$core$IFn$_invoke$arity$1 ? format_prime.cljs$core$IFn$_invoke$arity$1(prime_index) : format_prime.call(null,prime_index))], null));
} else {
return G__68463__$1;
}
})();
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent_material_ui.core.table_cell.table_cell,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),reagent.core.class_names.cljs$core$IFn$_invoke$arity$2("star-cell",((cljs.core.empty_QMARK_(names))?"empty":null))], null)], null),names);
})(),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent_material_ui.core.table_cell.table_cell,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"terms-cell"], null),clojure.string.join.cljs$core$IFn$_invoke$arity$2(", ",terms)], null),cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.seq((function (){var iter__27573__auto__ = ((function (j__68392,j__68373,s__68371__$1,i__68372__$1,terms,term,prime_index,v,status,imp,k,s__68408__$2,temp__5735__auto____$2,vec__68399,group,imps,j,c__68394,size__27572__auto____$1,b__68393,s__68390__$2,temp__5735__auto____$1,step,i,c__68375,size__27572__auto__,b__68374,s__68371__$2,temp__5735__auto__,map__68358,map__68358__$1,vec__68359,page,steps_per_page,selection,fst,lst,vec__68362,sel_i,sel_g,sel_imp,sel_terms,sel,map__68349,map__68349__$1,_BANG_sel,format_prime,group_row_fn,format_term,steps,head_row,title_row_fn,term_length,paginated){
return (function bfuncs$reduction_steps$reduction_steps_body_$_iter__68370_$_iter__68389_$_iter__68407_$_iter__68475(s__68476,i__68477){
return (new cljs.core.LazySeq(null,((function (j__68392,j__68373,s__68371__$1,i__68372__$1,terms,term,prime_index,v,status,imp,k,s__68408__$2,temp__5735__auto____$2,vec__68399,group,imps,j,c__68394,size__27572__auto____$1,b__68393,s__68390__$2,temp__5735__auto____$1,step,i,c__68375,size__27572__auto__,b__68374,s__68371__$2,temp__5735__auto__,map__68358,map__68358__$1,vec__68359,page,steps_per_page,selection,fst,lst,vec__68362,sel_i,sel_g,sel_imp,sel_terms,sel,map__68349,map__68349__$1,_BANG_sel,format_prime,group_row_fn,format_term,steps,head_row,title_row_fn,term_length,paginated){
return (function (){
var s__68476__$1 = s__68476;
var i__68477__$1 = i__68477;
while(true){
var temp__5735__auto____$3 = cljs.core.seq(s__68476__$1);
if(temp__5735__auto____$3){
var s__68476__$2 = temp__5735__auto____$3;
if(cljs.core.chunked_seq_QMARK_(s__68476__$2)){
var c__68480 = cljs.core.chunk_first(s__68476__$2);
var size__27572__auto____$2 = cljs.core.count(c__68480);
var b__68479 = cljs.core.chunk_buffer(size__27572__auto____$2);
if((function (){var j__68478 = (0);
while(true){
if((j__68478 < size__27572__auto____$2)){
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(c__68480,j__68478);
var m = (j__68478 + i__68477__$1);
cljs.core.chunk_append(b__68479,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent_material_ui.core.table_cell.table_cell,(function (){var G__68483 = x;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(true,G__68483)){
return "1";
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(false,G__68483)){
return "0";
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(null,G__68483)){
return "\u2013";
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__68483)].join('')));

}
}
}
})()], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),m], null)));

var G__68678 = (j__68478 + (1));
j__68478 = G__68678;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__68479),bfuncs$reduction_steps$reduction_steps_body_$_iter__68370_$_iter__68389_$_iter__68407_$_iter__68475(cljs.core.chunk_rest(s__68476__$2),(i__68477__$1 + size__27572__auto____$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__68479),null);
}
} else {
var x = cljs.core.first(s__68476__$2);
var m = i__68477__$1;
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent_material_ui.core.table_cell.table_cell,(function (){var G__68489 = x;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(true,G__68489)){
return "1";
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(false,G__68489)){
return "0";
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(null,G__68489)){
return "\u2013";
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__68489)].join('')));

}
}
}
})()], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),m], null)),bfuncs$reduction_steps$reduction_steps_body_$_iter__68370_$_iter__68389_$_iter__68407_$_iter__68475(cljs.core.rest(s__68476__$2),(i__68477__$1 + (1))));
}
} else {
return null;
}
break;
}
});})(j__68392,j__68373,s__68371__$1,i__68372__$1,terms,term,prime_index,v,status,imp,k,s__68408__$2,temp__5735__auto____$2,vec__68399,group,imps,j,c__68394,size__27572__auto____$1,b__68393,s__68390__$2,temp__5735__auto____$1,step,i,c__68375,size__27572__auto__,b__68374,s__68371__$2,temp__5735__auto__,map__68358,map__68358__$1,vec__68359,page,steps_per_page,selection,fst,lst,vec__68362,sel_i,sel_g,sel_imp,sel_terms,sel,map__68349,map__68349__$1,_BANG_sel,format_prime,group_row_fn,format_term,steps,head_row,title_row_fn,term_length,paginated))
,null,null));
});})(j__68392,j__68373,s__68371__$1,i__68372__$1,terms,term,prime_index,v,status,imp,k,s__68408__$2,temp__5735__auto____$2,vec__68399,group,imps,j,c__68394,size__27572__auto____$1,b__68393,s__68390__$2,temp__5735__auto____$1,step,i,c__68375,size__27572__auto__,b__68374,s__68371__$2,temp__5735__auto__,map__68358,map__68358__$1,vec__68359,page,steps_per_page,selection,fst,lst,vec__68362,sel_i,sel_g,sel_imp,sel_terms,sel,map__68349,map__68349__$1,_BANG_sel,format_prime,group_row_fn,format_term,steps,head_row,title_row_fn,term_length,paginated))
;
return iter__27573__auto__(imp,(0));
})()))], null),bfuncs$reduction_steps$reduction_steps_body_$_iter__68370_$_iter__68389_$_iter__68407(cljs.core.rest(s__68408__$2),(i__68409__$1 + (1))));
}
} else {
return null;
}
break;
}
});})(j__68392,j__68373,s__68371__$1,i__68372__$1,vec__68399,group,imps,j,c__68394,size__27572__auto____$1,b__68393,s__68390__$2,temp__5735__auto____$1,step,i,c__68375,size__27572__auto__,b__68374,s__68371__$2,temp__5735__auto__,map__68358,map__68358__$1,vec__68359,page,steps_per_page,selection,fst,lst,vec__68362,sel_i,sel_g,sel_imp,sel_terms,sel,map__68349,map__68349__$1,_BANG_sel,format_prime,group_row_fn,format_term,steps,head_row,title_row_fn,term_length,paginated))
,null,null));
});})(j__68392,j__68373,s__68371__$1,i__68372__$1,vec__68399,group,imps,j,c__68394,size__27572__auto____$1,b__68393,s__68390__$2,temp__5735__auto____$1,step,i,c__68375,size__27572__auto__,b__68374,s__68371__$2,temp__5735__auto__,map__68358,map__68358__$1,vec__68359,page,steps_per_page,selection,fst,lst,vec__68362,sel_i,sel_g,sel_imp,sel_terms,sel,map__68349,map__68349__$1,_BANG_sel,format_prime,group_row_fn,format_term,steps,head_row,title_row_fn,term_length,paginated))
;
return iter__27573__auto__(imps,(0));
})()))));

var G__68679 = (j__68392 + (1));
j__68392 = G__68679;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__68393),bfuncs$reduction_steps$reduction_steps_body_$_iter__68370_$_iter__68389(cljs.core.chunk_rest(s__68390__$2),(i__68391__$1 + size__27572__auto____$1)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__68393),null);
}
} else {
var vec__68498 = cljs.core.first(s__68390__$2);
var group = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__68498,(0),null);
var imps = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__68498,(1),null);
var j = i__68391__$1;
return cljs.core.cons(cljs.core.cons(cljs.core.with_meta((function (){var G__68501 = group;
var G__68502 = cljs.core.count(imps);
return (group_row_fn.cljs$core$IFn$_invoke$arity$2 ? group_row_fn.cljs$core$IFn$_invoke$arity$2(G__68501,G__68502) : group_row_fn.call(null,G__68501,G__68502));
})(),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(i),cljs.core.str.cljs$core$IFn$_invoke$arity$1(j)].join('')], null)),cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.seq((function (){var iter__27573__auto__ = ((function (j__68373,s__68371__$1,i__68372__$1,vec__68498,group,imps,j,s__68390__$2,temp__5735__auto____$1,step,i,c__68375,size__27572__auto__,b__68374,s__68371__$2,temp__5735__auto__,map__68358,map__68358__$1,vec__68359,page,steps_per_page,selection,fst,lst,vec__68362,sel_i,sel_g,sel_imp,sel_terms,sel,map__68349,map__68349__$1,_BANG_sel,format_prime,group_row_fn,format_term,steps,head_row,title_row_fn,term_length,paginated){
return (function bfuncs$reduction_steps$reduction_steps_body_$_iter__68370_$_iter__68389_$_iter__68503(s__68504,i__68505){
return (new cljs.core.LazySeq(null,((function (j__68373,s__68371__$1,i__68372__$1,vec__68498,group,imps,j,s__68390__$2,temp__5735__auto____$1,step,i,c__68375,size__27572__auto__,b__68374,s__68371__$2,temp__5735__auto__,map__68358,map__68358__$1,vec__68359,page,steps_per_page,selection,fst,lst,vec__68362,sel_i,sel_g,sel_imp,sel_terms,sel,map__68349,map__68349__$1,_BANG_sel,format_prime,group_row_fn,format_term,steps,head_row,title_row_fn,term_length,paginated){
return (function (){
var s__68504__$1 = s__68504;
var i__68505__$1 = i__68505;
while(true){
var temp__5735__auto____$2 = cljs.core.seq(s__68504__$1);
if(temp__5735__auto____$2){
var s__68504__$2 = temp__5735__auto____$2;
if(cljs.core.chunked_seq_QMARK_(s__68504__$2)){
var c__68508 = cljs.core.chunk_first(s__68504__$2);
var size__27572__auto____$1 = cljs.core.count(c__68508);
var b__68507 = cljs.core.chunk_buffer(size__27572__auto____$1);
if((function (){var j__68506 = (0);
while(true){
if((j__68506 < size__27572__auto____$1)){
var imp = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(c__68508,j__68506);
var k = (j__68506 + i__68505__$1);
var terms = bfuncs.minimization.covered_terms(imp);
var term = ((bfuncs.utils.singleton_QMARK_(terms))?cljs.core.first(terms):null);
var prime_index = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.meta(imp),new cljs.core.Keyword(null,"prime-index","prime-index",-1428577630));
var v = (cljs.core.truth_(prime_index)?imp:(cljs.core.truth_(term)?term:imp
));
var status = (cljs.core.truth_(sel)?(((((sel_i < i)) && (clojure.set.subset_QMARK_(sel_terms,terms))))?"covers-selected":(((((sel_i > i)) && (clojure.set.subset_QMARK_(terms,sel_terms))))?"covered-by-selected":(function (){var G__68509 = (group - sel_g);
switch (G__68509) {
case (0):
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(imp,sel_imp)){
return "selected";
} else {
return "nothing";
}

break;
case (-1):
case (1):
if(cljs.core.truth_(bfuncs.minimization.compatible_QMARK_(imp,sel_imp))){
return "compatible";
} else {
return "nothing";
}

break;
default:
return "nothing";

}
})()
)):null);
cljs.core.chunk_append(b__68507,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent_material_ui.core.table_row.table_row,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"key","key",-1516042587),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(i),cljs.core.str.cljs$core$IFn$_invoke$arity$1(j),cljs.core.str.cljs$core$IFn$_invoke$arity$1(k)].join(''),new cljs.core.Keyword(null,"component","component",1555936782),bfuncs.reduction_steps.div_button_base,new cljs.core.Keyword(null,"tab-index","tab-index",895755393),(0),new cljs.core.Keyword(null,"class","class",-2030961996),reagent.core.class_names.cljs$core$IFn$_invoke$arity$2(status,"data-row"),new cljs.core.Keyword(null,"title","title",636505583),(function (){var G__68510 = status;
switch (G__68510) {
case "covers-selected":
return "Covers selection";

break;
case "covered-by-selected":
return "Covered by selection";

break;
case "compatible":
return "Can merge with selection";

break;
default:
return null;

}
})(),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (j__68506,j__68373,s__68371__$1,i__68372__$1,terms,term,prime_index,v,status,imp,k,c__68508,size__27572__auto____$1,b__68507,s__68504__$2,temp__5735__auto____$2,vec__68498,group,imps,j,s__68390__$2,temp__5735__auto____$1,step,i,c__68375,size__27572__auto__,b__68374,s__68371__$2,temp__5735__auto__,map__68358,map__68358__$1,vec__68359,page,steps_per_page,selection,fst,lst,vec__68362,sel_i,sel_g,sel_imp,sel_terms,sel,map__68349,map__68349__$1,_BANG_sel,format_prime,group_row_fn,format_term,steps,head_row,title_row_fn,term_length,paginated){
return (function (p1__68345_SHARP_){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(_BANG_sel,bfuncs.utils.toggle_selection,p1__68345_SHARP_,v,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([null], 0));
});})(j__68506,j__68373,s__68371__$1,i__68372__$1,terms,term,prime_index,v,status,imp,k,c__68508,size__27572__auto____$1,b__68507,s__68504__$2,temp__5735__auto____$2,vec__68498,group,imps,j,s__68390__$2,temp__5735__auto____$1,step,i,c__68375,size__27572__auto__,b__68374,s__68371__$2,temp__5735__auto__,map__68358,map__68358__$1,vec__68359,page,steps_per_page,selection,fst,lst,vec__68362,sel_i,sel_g,sel_imp,sel_terms,sel,map__68349,map__68349__$1,_BANG_sel,format_prime,group_row_fn,format_term,steps,head_row,title_row_fn,term_length,paginated))
], null),(function (){var names = (function (){var G__68512 = cljs.core.PersistentVector.EMPTY;
var G__68512__$1 = ((bfuncs.utils.singleton_QMARK_(terms))?cljs.core.conj.cljs$core$IFn$_invoke$arity$2(G__68512,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [bfuncs.typesetting.$,(function (){var G__68514 = cljs.core.first(terms);
return (format_term.cljs$core$IFn$_invoke$arity$1 ? format_term.cljs$core$IFn$_invoke$arity$1(G__68514) : format_term.call(null,G__68514));
})()], null)):G__68512);
if(cljs.core.truth_(prime_index)){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(G__68512__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [bfuncs.typesetting.$,(format_prime.cljs$core$IFn$_invoke$arity$1 ? format_prime.cljs$core$IFn$_invoke$arity$1(prime_index) : format_prime.call(null,prime_index))], null));
} else {
return G__68512__$1;
}
})();
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent_material_ui.core.table_cell.table_cell,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),reagent.core.class_names.cljs$core$IFn$_invoke$arity$2("star-cell",((cljs.core.empty_QMARK_(names))?"empty":null))], null)], null),names);
})(),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent_material_ui.core.table_cell.table_cell,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"terms-cell"], null),clojure.string.join.cljs$core$IFn$_invoke$arity$2(", ",terms)], null),cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.seq((function (){var iter__27573__auto__ = ((function (j__68506,j__68373,s__68371__$1,i__68372__$1,terms,term,prime_index,v,status,imp,k,c__68508,size__27572__auto____$1,b__68507,s__68504__$2,temp__5735__auto____$2,vec__68498,group,imps,j,s__68390__$2,temp__5735__auto____$1,step,i,c__68375,size__27572__auto__,b__68374,s__68371__$2,temp__5735__auto__,map__68358,map__68358__$1,vec__68359,page,steps_per_page,selection,fst,lst,vec__68362,sel_i,sel_g,sel_imp,sel_terms,sel,map__68349,map__68349__$1,_BANG_sel,format_prime,group_row_fn,format_term,steps,head_row,title_row_fn,term_length,paginated){
return (function bfuncs$reduction_steps$reduction_steps_body_$_iter__68370_$_iter__68389_$_iter__68503_$_iter__68515(s__68516,i__68517){
return (new cljs.core.LazySeq(null,((function (j__68506,j__68373,s__68371__$1,i__68372__$1,terms,term,prime_index,v,status,imp,k,c__68508,size__27572__auto____$1,b__68507,s__68504__$2,temp__5735__auto____$2,vec__68498,group,imps,j,s__68390__$2,temp__5735__auto____$1,step,i,c__68375,size__27572__auto__,b__68374,s__68371__$2,temp__5735__auto__,map__68358,map__68358__$1,vec__68359,page,steps_per_page,selection,fst,lst,vec__68362,sel_i,sel_g,sel_imp,sel_terms,sel,map__68349,map__68349__$1,_BANG_sel,format_prime,group_row_fn,format_term,steps,head_row,title_row_fn,term_length,paginated){
return (function (){
var s__68516__$1 = s__68516;
var i__68517__$1 = i__68517;
while(true){
var temp__5735__auto____$3 = cljs.core.seq(s__68516__$1);
if(temp__5735__auto____$3){
var s__68516__$2 = temp__5735__auto____$3;
if(cljs.core.chunked_seq_QMARK_(s__68516__$2)){
var c__68520 = cljs.core.chunk_first(s__68516__$2);
var size__27572__auto____$2 = cljs.core.count(c__68520);
var b__68519 = cljs.core.chunk_buffer(size__27572__auto____$2);
if((function (){var j__68518 = (0);
while(true){
if((j__68518 < size__27572__auto____$2)){
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(c__68520,j__68518);
var m = (j__68518 + i__68517__$1);
cljs.core.chunk_append(b__68519,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent_material_ui.core.table_cell.table_cell,(function (){var G__68527 = x;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(true,G__68527)){
return "1";
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(false,G__68527)){
return "0";
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(null,G__68527)){
return "\u2013";
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__68527)].join('')));

}
}
}
})()], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),m], null)));

var G__68682 = (j__68518 + (1));
j__68518 = G__68682;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__68519),bfuncs$reduction_steps$reduction_steps_body_$_iter__68370_$_iter__68389_$_iter__68503_$_iter__68515(cljs.core.chunk_rest(s__68516__$2),(i__68517__$1 + size__27572__auto____$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__68519),null);
}
} else {
var x = cljs.core.first(s__68516__$2);
var m = i__68517__$1;
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent_material_ui.core.table_cell.table_cell,(function (){var G__68546 = x;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(true,G__68546)){
return "1";
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(false,G__68546)){
return "0";
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(null,G__68546)){
return "\u2013";
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__68546)].join('')));

}
}
}
})()], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),m], null)),bfuncs$reduction_steps$reduction_steps_body_$_iter__68370_$_iter__68389_$_iter__68503_$_iter__68515(cljs.core.rest(s__68516__$2),(i__68517__$1 + (1))));
}
} else {
return null;
}
break;
}
});})(j__68506,j__68373,s__68371__$1,i__68372__$1,terms,term,prime_index,v,status,imp,k,c__68508,size__27572__auto____$1,b__68507,s__68504__$2,temp__5735__auto____$2,vec__68498,group,imps,j,s__68390__$2,temp__5735__auto____$1,step,i,c__68375,size__27572__auto__,b__68374,s__68371__$2,temp__5735__auto__,map__68358,map__68358__$1,vec__68359,page,steps_per_page,selection,fst,lst,vec__68362,sel_i,sel_g,sel_imp,sel_terms,sel,map__68349,map__68349__$1,_BANG_sel,format_prime,group_row_fn,format_term,steps,head_row,title_row_fn,term_length,paginated))
,null,null));
});})(j__68506,j__68373,s__68371__$1,i__68372__$1,terms,term,prime_index,v,status,imp,k,c__68508,size__27572__auto____$1,b__68507,s__68504__$2,temp__5735__auto____$2,vec__68498,group,imps,j,s__68390__$2,temp__5735__auto____$1,step,i,c__68375,size__27572__auto__,b__68374,s__68371__$2,temp__5735__auto__,map__68358,map__68358__$1,vec__68359,page,steps_per_page,selection,fst,lst,vec__68362,sel_i,sel_g,sel_imp,sel_terms,sel,map__68349,map__68349__$1,_BANG_sel,format_prime,group_row_fn,format_term,steps,head_row,title_row_fn,term_length,paginated))
;
return iter__27573__auto__(imp,(0));
})()))], null));

var G__68683 = (j__68506 + (1));
j__68506 = G__68683;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__68507),bfuncs$reduction_steps$reduction_steps_body_$_iter__68370_$_iter__68389_$_iter__68503(cljs.core.chunk_rest(s__68504__$2),(i__68505__$1 + size__27572__auto____$1)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__68507),null);
}
} else {
var imp = cljs.core.first(s__68504__$2);
var k = i__68505__$1;
var terms = bfuncs.minimization.covered_terms(imp);
var term = ((bfuncs.utils.singleton_QMARK_(terms))?cljs.core.first(terms):null);
var prime_index = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.meta(imp),new cljs.core.Keyword(null,"prime-index","prime-index",-1428577630));
var v = (cljs.core.truth_(prime_index)?imp:(cljs.core.truth_(term)?term:imp
));
var status = (cljs.core.truth_(sel)?(((((sel_i < i)) && (clojure.set.subset_QMARK_(sel_terms,terms))))?"covers-selected":(((((sel_i > i)) && (clojure.set.subset_QMARK_(terms,sel_terms))))?"covered-by-selected":(function (){var G__68552 = (group - sel_g);
switch (G__68552) {
case (0):
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(imp,sel_imp)){
return "selected";
} else {
return "nothing";
}

break;
case (-1):
case (1):
if(cljs.core.truth_(bfuncs.minimization.compatible_QMARK_(imp,sel_imp))){
return "compatible";
} else {
return "nothing";
}

break;
default:
return "nothing";

}
})()
)):null);
return cljs.core.cons(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent_material_ui.core.table_row.table_row,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"key","key",-1516042587),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(i),cljs.core.str.cljs$core$IFn$_invoke$arity$1(j),cljs.core.str.cljs$core$IFn$_invoke$arity$1(k)].join(''),new cljs.core.Keyword(null,"component","component",1555936782),bfuncs.reduction_steps.div_button_base,new cljs.core.Keyword(null,"tab-index","tab-index",895755393),(0),new cljs.core.Keyword(null,"class","class",-2030961996),reagent.core.class_names.cljs$core$IFn$_invoke$arity$2(status,"data-row"),new cljs.core.Keyword(null,"title","title",636505583),(function (){var G__68553 = status;
switch (G__68553) {
case "covers-selected":
return "Covers selection";

break;
case "covered-by-selected":
return "Covered by selection";

break;
case "compatible":
return "Can merge with selection";

break;
default:
return null;

}
})(),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (j__68373,s__68371__$1,i__68372__$1,terms,term,prime_index,v,status,imp,k,s__68504__$2,temp__5735__auto____$2,vec__68498,group,imps,j,s__68390__$2,temp__5735__auto____$1,step,i,c__68375,size__27572__auto__,b__68374,s__68371__$2,temp__5735__auto__,map__68358,map__68358__$1,vec__68359,page,steps_per_page,selection,fst,lst,vec__68362,sel_i,sel_g,sel_imp,sel_terms,sel,map__68349,map__68349__$1,_BANG_sel,format_prime,group_row_fn,format_term,steps,head_row,title_row_fn,term_length,paginated){
return (function (p1__68345_SHARP_){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(_BANG_sel,bfuncs.utils.toggle_selection,p1__68345_SHARP_,v,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([null], 0));
});})(j__68373,s__68371__$1,i__68372__$1,terms,term,prime_index,v,status,imp,k,s__68504__$2,temp__5735__auto____$2,vec__68498,group,imps,j,s__68390__$2,temp__5735__auto____$1,step,i,c__68375,size__27572__auto__,b__68374,s__68371__$2,temp__5735__auto__,map__68358,map__68358__$1,vec__68359,page,steps_per_page,selection,fst,lst,vec__68362,sel_i,sel_g,sel_imp,sel_terms,sel,map__68349,map__68349__$1,_BANG_sel,format_prime,group_row_fn,format_term,steps,head_row,title_row_fn,term_length,paginated))
], null),(function (){var names = (function (){var G__68554 = cljs.core.PersistentVector.EMPTY;
var G__68554__$1 = ((bfuncs.utils.singleton_QMARK_(terms))?cljs.core.conj.cljs$core$IFn$_invoke$arity$2(G__68554,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [bfuncs.typesetting.$,(function (){var G__68555 = cljs.core.first(terms);
return (format_term.cljs$core$IFn$_invoke$arity$1 ? format_term.cljs$core$IFn$_invoke$arity$1(G__68555) : format_term.call(null,G__68555));
})()], null)):G__68554);
if(cljs.core.truth_(prime_index)){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(G__68554__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [bfuncs.typesetting.$,(format_prime.cljs$core$IFn$_invoke$arity$1 ? format_prime.cljs$core$IFn$_invoke$arity$1(prime_index) : format_prime.call(null,prime_index))], null));
} else {
return G__68554__$1;
}
})();
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent_material_ui.core.table_cell.table_cell,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),reagent.core.class_names.cljs$core$IFn$_invoke$arity$2("star-cell",((cljs.core.empty_QMARK_(names))?"empty":null))], null)], null),names);
})(),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent_material_ui.core.table_cell.table_cell,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"terms-cell"], null),clojure.string.join.cljs$core$IFn$_invoke$arity$2(", ",terms)], null),cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.seq((function (){var iter__27573__auto__ = ((function (j__68373,s__68371__$1,i__68372__$1,terms,term,prime_index,v,status,imp,k,s__68504__$2,temp__5735__auto____$2,vec__68498,group,imps,j,s__68390__$2,temp__5735__auto____$1,step,i,c__68375,size__27572__auto__,b__68374,s__68371__$2,temp__5735__auto__,map__68358,map__68358__$1,vec__68359,page,steps_per_page,selection,fst,lst,vec__68362,sel_i,sel_g,sel_imp,sel_terms,sel,map__68349,map__68349__$1,_BANG_sel,format_prime,group_row_fn,format_term,steps,head_row,title_row_fn,term_length,paginated){
return (function bfuncs$reduction_steps$reduction_steps_body_$_iter__68370_$_iter__68389_$_iter__68503_$_iter__68556(s__68557,i__68558){
return (new cljs.core.LazySeq(null,((function (j__68373,s__68371__$1,i__68372__$1,terms,term,prime_index,v,status,imp,k,s__68504__$2,temp__5735__auto____$2,vec__68498,group,imps,j,s__68390__$2,temp__5735__auto____$1,step,i,c__68375,size__27572__auto__,b__68374,s__68371__$2,temp__5735__auto__,map__68358,map__68358__$1,vec__68359,page,steps_per_page,selection,fst,lst,vec__68362,sel_i,sel_g,sel_imp,sel_terms,sel,map__68349,map__68349__$1,_BANG_sel,format_prime,group_row_fn,format_term,steps,head_row,title_row_fn,term_length,paginated){
return (function (){
var s__68557__$1 = s__68557;
var i__68558__$1 = i__68558;
while(true){
var temp__5735__auto____$3 = cljs.core.seq(s__68557__$1);
if(temp__5735__auto____$3){
var s__68557__$2 = temp__5735__auto____$3;
if(cljs.core.chunked_seq_QMARK_(s__68557__$2)){
var c__68561 = cljs.core.chunk_first(s__68557__$2);
var size__27572__auto____$1 = cljs.core.count(c__68561);
var b__68560 = cljs.core.chunk_buffer(size__27572__auto____$1);
if((function (){var j__68559 = (0);
while(true){
if((j__68559 < size__27572__auto____$1)){
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(c__68561,j__68559);
var m = (j__68559 + i__68558__$1);
cljs.core.chunk_append(b__68560,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent_material_ui.core.table_cell.table_cell,(function (){var G__68562 = x;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(true,G__68562)){
return "1";
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(false,G__68562)){
return "0";
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(null,G__68562)){
return "\u2013";
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__68562)].join('')));

}
}
}
})()], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),m], null)));

var G__68688 = (j__68559 + (1));
j__68559 = G__68688;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__68560),bfuncs$reduction_steps$reduction_steps_body_$_iter__68370_$_iter__68389_$_iter__68503_$_iter__68556(cljs.core.chunk_rest(s__68557__$2),(i__68558__$1 + size__27572__auto____$1)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__68560),null);
}
} else {
var x = cljs.core.first(s__68557__$2);
var m = i__68558__$1;
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent_material_ui.core.table_cell.table_cell,(function (){var G__68563 = x;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(true,G__68563)){
return "1";
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(false,G__68563)){
return "0";
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(null,G__68563)){
return "\u2013";
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__68563)].join('')));

}
}
}
})()], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),m], null)),bfuncs$reduction_steps$reduction_steps_body_$_iter__68370_$_iter__68389_$_iter__68503_$_iter__68556(cljs.core.rest(s__68557__$2),(i__68558__$1 + (1))));
}
} else {
return null;
}
break;
}
});})(j__68373,s__68371__$1,i__68372__$1,terms,term,prime_index,v,status,imp,k,s__68504__$2,temp__5735__auto____$2,vec__68498,group,imps,j,s__68390__$2,temp__5735__auto____$1,step,i,c__68375,size__27572__auto__,b__68374,s__68371__$2,temp__5735__auto__,map__68358,map__68358__$1,vec__68359,page,steps_per_page,selection,fst,lst,vec__68362,sel_i,sel_g,sel_imp,sel_terms,sel,map__68349,map__68349__$1,_BANG_sel,format_prime,group_row_fn,format_term,steps,head_row,title_row_fn,term_length,paginated))
,null,null));
});})(j__68373,s__68371__$1,i__68372__$1,terms,term,prime_index,v,status,imp,k,s__68504__$2,temp__5735__auto____$2,vec__68498,group,imps,j,s__68390__$2,temp__5735__auto____$1,step,i,c__68375,size__27572__auto__,b__68374,s__68371__$2,temp__5735__auto__,map__68358,map__68358__$1,vec__68359,page,steps_per_page,selection,fst,lst,vec__68362,sel_i,sel_g,sel_imp,sel_terms,sel,map__68349,map__68349__$1,_BANG_sel,format_prime,group_row_fn,format_term,steps,head_row,title_row_fn,term_length,paginated))
;
return iter__27573__auto__(imp,(0));
})()))], null),bfuncs$reduction_steps$reduction_steps_body_$_iter__68370_$_iter__68389_$_iter__68503(cljs.core.rest(s__68504__$2),(i__68505__$1 + (1))));
}
} else {
return null;
}
break;
}
});})(j__68373,s__68371__$1,i__68372__$1,vec__68498,group,imps,j,s__68390__$2,temp__5735__auto____$1,step,i,c__68375,size__27572__auto__,b__68374,s__68371__$2,temp__5735__auto__,map__68358,map__68358__$1,vec__68359,page,steps_per_page,selection,fst,lst,vec__68362,sel_i,sel_g,sel_imp,sel_terms,sel,map__68349,map__68349__$1,_BANG_sel,format_prime,group_row_fn,format_term,steps,head_row,title_row_fn,term_length,paginated))
,null,null));
});})(j__68373,s__68371__$1,i__68372__$1,vec__68498,group,imps,j,s__68390__$2,temp__5735__auto____$1,step,i,c__68375,size__27572__auto__,b__68374,s__68371__$2,temp__5735__auto__,map__68358,map__68358__$1,vec__68359,page,steps_per_page,selection,fst,lst,vec__68362,sel_i,sel_g,sel_imp,sel_terms,sel,map__68349,map__68349__$1,_BANG_sel,format_prime,group_row_fn,format_term,steps,head_row,title_row_fn,term_length,paginated))
;
return iter__27573__auto__(imps,(0));
})()))),bfuncs$reduction_steps$reduction_steps_body_$_iter__68370_$_iter__68389(cljs.core.rest(s__68390__$2),(i__68391__$1 + (1))));
}
} else {
return null;
}
break;
}
});})(j__68373,s__68371__$1,i__68372__$1,step,i,c__68375,size__27572__auto__,b__68374,s__68371__$2,temp__5735__auto__,map__68358,map__68358__$1,vec__68359,page,steps_per_page,selection,fst,lst,vec__68362,sel_i,sel_g,sel_imp,sel_terms,sel,map__68349,map__68349__$1,_BANG_sel,format_prime,group_row_fn,format_term,steps,head_row,title_row_fn,term_length,paginated))
,null,null));
});})(j__68373,s__68371__$1,i__68372__$1,step,i,c__68375,size__27572__auto__,b__68374,s__68371__$2,temp__5735__auto__,map__68358,map__68358__$1,vec__68359,page,steps_per_page,selection,fst,lst,vec__68362,sel_i,sel_g,sel_imp,sel_terms,sel,map__68349,map__68349__$1,_BANG_sel,format_prime,group_row_fn,format_term,steps,head_row,title_row_fn,term_length,paginated))
;
return iter__27573__auto__(step,(0));
})()))], null));

var G__68691 = (j__68373 + (1));
j__68373 = G__68691;
continue;
} else {
var G__68692 = (j__68373 + (1));
j__68373 = G__68692;
continue;
}
} else {
return null;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__68374),bfuncs$reduction_steps$reduction_steps_body_$_iter__68370(cljs.core.chunk_rest(s__68371__$2),(i__68372__$1 + size__27572__auto__)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__68374),null);
}
} else {
var step = cljs.core.first(s__68371__$2);
var i = i__68372__$1;
if((i < lst)){
if((fst <= i)){
return cljs.core.cons(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent_material_ui.core.table_body.table_body,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),i,new cljs.core.Keyword(null,"class","class",-2030961996),"step-body"], null),(function (){var G__68564 = i;
var G__68565 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(i,fst);
return (title_row_fn.cljs$core$IFn$_invoke$arity$2 ? title_row_fn.cljs$core$IFn$_invoke$arity$2(G__68564,G__68565) : title_row_fn.call(null,G__68564,G__68565));
})(),head_row,cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.seq((function (){var iter__27573__auto__ = ((function (s__68371__$1,i__68372__$1,step,i,s__68371__$2,temp__5735__auto__,map__68358,map__68358__$1,vec__68359,page,steps_per_page,selection,fst,lst,vec__68362,sel_i,sel_g,sel_imp,sel_terms,sel,map__68349,map__68349__$1,_BANG_sel,format_prime,group_row_fn,format_term,steps,head_row,title_row_fn,term_length,paginated){
return (function bfuncs$reduction_steps$reduction_steps_body_$_iter__68370_$_iter__68566(s__68567,i__68568){
return (new cljs.core.LazySeq(null,((function (s__68371__$1,i__68372__$1,step,i,s__68371__$2,temp__5735__auto__,map__68358,map__68358__$1,vec__68359,page,steps_per_page,selection,fst,lst,vec__68362,sel_i,sel_g,sel_imp,sel_terms,sel,map__68349,map__68349__$1,_BANG_sel,format_prime,group_row_fn,format_term,steps,head_row,title_row_fn,term_length,paginated){
return (function (){
var s__68567__$1 = s__68567;
var i__68568__$1 = i__68568;
while(true){
var temp__5735__auto____$1 = cljs.core.seq(s__68567__$1);
if(temp__5735__auto____$1){
var s__68567__$2 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__68567__$2)){
var c__68571 = cljs.core.chunk_first(s__68567__$2);
var size__27572__auto__ = cljs.core.count(c__68571);
var b__68570 = cljs.core.chunk_buffer(size__27572__auto__);
if((function (){var j__68569 = (0);
while(true){
if((j__68569 < size__27572__auto__)){
var vec__68572 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(c__68571,j__68569);
var group = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__68572,(0),null);
var imps = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__68572,(1),null);
var j = (j__68569 + i__68568__$1);
cljs.core.chunk_append(b__68570,cljs.core.cons(cljs.core.with_meta((function (){var G__68575 = group;
var G__68576 = cljs.core.count(imps);
return (group_row_fn.cljs$core$IFn$_invoke$arity$2 ? group_row_fn.cljs$core$IFn$_invoke$arity$2(G__68575,G__68576) : group_row_fn.call(null,G__68575,G__68576));
})(),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(i),cljs.core.str.cljs$core$IFn$_invoke$arity$1(j)].join('')], null)),cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.seq((function (){var iter__27573__auto__ = ((function (j__68569,s__68371__$1,i__68372__$1,vec__68572,group,imps,j,c__68571,size__27572__auto__,b__68570,s__68567__$2,temp__5735__auto____$1,step,i,s__68371__$2,temp__5735__auto__,map__68358,map__68358__$1,vec__68359,page,steps_per_page,selection,fst,lst,vec__68362,sel_i,sel_g,sel_imp,sel_terms,sel,map__68349,map__68349__$1,_BANG_sel,format_prime,group_row_fn,format_term,steps,head_row,title_row_fn,term_length,paginated){
return (function bfuncs$reduction_steps$reduction_steps_body_$_iter__68370_$_iter__68566_$_iter__68577(s__68578,i__68579){
return (new cljs.core.LazySeq(null,((function (j__68569,s__68371__$1,i__68372__$1,vec__68572,group,imps,j,c__68571,size__27572__auto__,b__68570,s__68567__$2,temp__5735__auto____$1,step,i,s__68371__$2,temp__5735__auto__,map__68358,map__68358__$1,vec__68359,page,steps_per_page,selection,fst,lst,vec__68362,sel_i,sel_g,sel_imp,sel_terms,sel,map__68349,map__68349__$1,_BANG_sel,format_prime,group_row_fn,format_term,steps,head_row,title_row_fn,term_length,paginated){
return (function (){
var s__68578__$1 = s__68578;
var i__68579__$1 = i__68579;
while(true){
var temp__5735__auto____$2 = cljs.core.seq(s__68578__$1);
if(temp__5735__auto____$2){
var s__68578__$2 = temp__5735__auto____$2;
if(cljs.core.chunked_seq_QMARK_(s__68578__$2)){
var c__68582 = cljs.core.chunk_first(s__68578__$2);
var size__27572__auto____$1 = cljs.core.count(c__68582);
var b__68581 = cljs.core.chunk_buffer(size__27572__auto____$1);
if((function (){var j__68580 = (0);
while(true){
if((j__68580 < size__27572__auto____$1)){
var imp = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(c__68582,j__68580);
var k = (j__68580 + i__68579__$1);
var terms = bfuncs.minimization.covered_terms(imp);
var term = ((bfuncs.utils.singleton_QMARK_(terms))?cljs.core.first(terms):null);
var prime_index = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.meta(imp),new cljs.core.Keyword(null,"prime-index","prime-index",-1428577630));
var v = (cljs.core.truth_(prime_index)?imp:(cljs.core.truth_(term)?term:imp
));
var status = (cljs.core.truth_(sel)?(((((sel_i < i)) && (clojure.set.subset_QMARK_(sel_terms,terms))))?"covers-selected":(((((sel_i > i)) && (clojure.set.subset_QMARK_(terms,sel_terms))))?"covered-by-selected":(function (){var G__68583 = (group - sel_g);
switch (G__68583) {
case (0):
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(imp,sel_imp)){
return "selected";
} else {
return "nothing";
}

break;
case (-1):
case (1):
if(cljs.core.truth_(bfuncs.minimization.compatible_QMARK_(imp,sel_imp))){
return "compatible";
} else {
return "nothing";
}

break;
default:
return "nothing";

}
})()
)):null);
cljs.core.chunk_append(b__68581,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent_material_ui.core.table_row.table_row,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"key","key",-1516042587),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(i),cljs.core.str.cljs$core$IFn$_invoke$arity$1(j),cljs.core.str.cljs$core$IFn$_invoke$arity$1(k)].join(''),new cljs.core.Keyword(null,"component","component",1555936782),bfuncs.reduction_steps.div_button_base,new cljs.core.Keyword(null,"tab-index","tab-index",895755393),(0),new cljs.core.Keyword(null,"class","class",-2030961996),reagent.core.class_names.cljs$core$IFn$_invoke$arity$2(status,"data-row"),new cljs.core.Keyword(null,"title","title",636505583),(function (){var G__68586 = status;
switch (G__68586) {
case "covers-selected":
return "Covers selection";

break;
case "covered-by-selected":
return "Covered by selection";

break;
case "compatible":
return "Can merge with selection";

break;
default:
return null;

}
})(),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (j__68580,j__68569,s__68371__$1,i__68372__$1,terms,term,prime_index,v,status,imp,k,c__68582,size__27572__auto____$1,b__68581,s__68578__$2,temp__5735__auto____$2,vec__68572,group,imps,j,c__68571,size__27572__auto__,b__68570,s__68567__$2,temp__5735__auto____$1,step,i,s__68371__$2,temp__5735__auto__,map__68358,map__68358__$1,vec__68359,page,steps_per_page,selection,fst,lst,vec__68362,sel_i,sel_g,sel_imp,sel_terms,sel,map__68349,map__68349__$1,_BANG_sel,format_prime,group_row_fn,format_term,steps,head_row,title_row_fn,term_length,paginated){
return (function (p1__68345_SHARP_){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(_BANG_sel,bfuncs.utils.toggle_selection,p1__68345_SHARP_,v,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([null], 0));
});})(j__68580,j__68569,s__68371__$1,i__68372__$1,terms,term,prime_index,v,status,imp,k,c__68582,size__27572__auto____$1,b__68581,s__68578__$2,temp__5735__auto____$2,vec__68572,group,imps,j,c__68571,size__27572__auto__,b__68570,s__68567__$2,temp__5735__auto____$1,step,i,s__68371__$2,temp__5735__auto__,map__68358,map__68358__$1,vec__68359,page,steps_per_page,selection,fst,lst,vec__68362,sel_i,sel_g,sel_imp,sel_terms,sel,map__68349,map__68349__$1,_BANG_sel,format_prime,group_row_fn,format_term,steps,head_row,title_row_fn,term_length,paginated))
], null),(function (){var names = (function (){var G__68587 = cljs.core.PersistentVector.EMPTY;
var G__68587__$1 = ((bfuncs.utils.singleton_QMARK_(terms))?cljs.core.conj.cljs$core$IFn$_invoke$arity$2(G__68587,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [bfuncs.typesetting.$,(function (){var G__68588 = cljs.core.first(terms);
return (format_term.cljs$core$IFn$_invoke$arity$1 ? format_term.cljs$core$IFn$_invoke$arity$1(G__68588) : format_term.call(null,G__68588));
})()], null)):G__68587);
if(cljs.core.truth_(prime_index)){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(G__68587__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [bfuncs.typesetting.$,(format_prime.cljs$core$IFn$_invoke$arity$1 ? format_prime.cljs$core$IFn$_invoke$arity$1(prime_index) : format_prime.call(null,prime_index))], null));
} else {
return G__68587__$1;
}
})();
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent_material_ui.core.table_cell.table_cell,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),reagent.core.class_names.cljs$core$IFn$_invoke$arity$2("star-cell",((cljs.core.empty_QMARK_(names))?"empty":null))], null)], null),names);
})(),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent_material_ui.core.table_cell.table_cell,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"terms-cell"], null),clojure.string.join.cljs$core$IFn$_invoke$arity$2(", ",terms)], null),cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.seq((function (){var iter__27573__auto__ = ((function (j__68580,j__68569,s__68371__$1,i__68372__$1,terms,term,prime_index,v,status,imp,k,c__68582,size__27572__auto____$1,b__68581,s__68578__$2,temp__5735__auto____$2,vec__68572,group,imps,j,c__68571,size__27572__auto__,b__68570,s__68567__$2,temp__5735__auto____$1,step,i,s__68371__$2,temp__5735__auto__,map__68358,map__68358__$1,vec__68359,page,steps_per_page,selection,fst,lst,vec__68362,sel_i,sel_g,sel_imp,sel_terms,sel,map__68349,map__68349__$1,_BANG_sel,format_prime,group_row_fn,format_term,steps,head_row,title_row_fn,term_length,paginated){
return (function bfuncs$reduction_steps$reduction_steps_body_$_iter__68370_$_iter__68566_$_iter__68577_$_iter__68589(s__68590,i__68591){
return (new cljs.core.LazySeq(null,((function (j__68580,j__68569,s__68371__$1,i__68372__$1,terms,term,prime_index,v,status,imp,k,c__68582,size__27572__auto____$1,b__68581,s__68578__$2,temp__5735__auto____$2,vec__68572,group,imps,j,c__68571,size__27572__auto__,b__68570,s__68567__$2,temp__5735__auto____$1,step,i,s__68371__$2,temp__5735__auto__,map__68358,map__68358__$1,vec__68359,page,steps_per_page,selection,fst,lst,vec__68362,sel_i,sel_g,sel_imp,sel_terms,sel,map__68349,map__68349__$1,_BANG_sel,format_prime,group_row_fn,format_term,steps,head_row,title_row_fn,term_length,paginated){
return (function (){
var s__68590__$1 = s__68590;
var i__68591__$1 = i__68591;
while(true){
var temp__5735__auto____$3 = cljs.core.seq(s__68590__$1);
if(temp__5735__auto____$3){
var s__68590__$2 = temp__5735__auto____$3;
if(cljs.core.chunked_seq_QMARK_(s__68590__$2)){
var c__68594 = cljs.core.chunk_first(s__68590__$2);
var size__27572__auto____$2 = cljs.core.count(c__68594);
var b__68593 = cljs.core.chunk_buffer(size__27572__auto____$2);
if((function (){var j__68592 = (0);
while(true){
if((j__68592 < size__27572__auto____$2)){
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(c__68594,j__68592);
var m = (j__68592 + i__68591__$1);
cljs.core.chunk_append(b__68593,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent_material_ui.core.table_cell.table_cell,(function (){var G__68595 = x;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(true,G__68595)){
return "1";
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(false,G__68595)){
return "0";
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(null,G__68595)){
return "\u2013";
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__68595)].join('')));

}
}
}
})()], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),m], null)));

var G__68695 = (j__68592 + (1));
j__68592 = G__68695;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__68593),bfuncs$reduction_steps$reduction_steps_body_$_iter__68370_$_iter__68566_$_iter__68577_$_iter__68589(cljs.core.chunk_rest(s__68590__$2),(i__68591__$1 + size__27572__auto____$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__68593),null);
}
} else {
var x = cljs.core.first(s__68590__$2);
var m = i__68591__$1;
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent_material_ui.core.table_cell.table_cell,(function (){var G__68596 = x;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(true,G__68596)){
return "1";
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(false,G__68596)){
return "0";
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(null,G__68596)){
return "\u2013";
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__68596)].join('')));

}
}
}
})()], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),m], null)),bfuncs$reduction_steps$reduction_steps_body_$_iter__68370_$_iter__68566_$_iter__68577_$_iter__68589(cljs.core.rest(s__68590__$2),(i__68591__$1 + (1))));
}
} else {
return null;
}
break;
}
});})(j__68580,j__68569,s__68371__$1,i__68372__$1,terms,term,prime_index,v,status,imp,k,c__68582,size__27572__auto____$1,b__68581,s__68578__$2,temp__5735__auto____$2,vec__68572,group,imps,j,c__68571,size__27572__auto__,b__68570,s__68567__$2,temp__5735__auto____$1,step,i,s__68371__$2,temp__5735__auto__,map__68358,map__68358__$1,vec__68359,page,steps_per_page,selection,fst,lst,vec__68362,sel_i,sel_g,sel_imp,sel_terms,sel,map__68349,map__68349__$1,_BANG_sel,format_prime,group_row_fn,format_term,steps,head_row,title_row_fn,term_length,paginated))
,null,null));
});})(j__68580,j__68569,s__68371__$1,i__68372__$1,terms,term,prime_index,v,status,imp,k,c__68582,size__27572__auto____$1,b__68581,s__68578__$2,temp__5735__auto____$2,vec__68572,group,imps,j,c__68571,size__27572__auto__,b__68570,s__68567__$2,temp__5735__auto____$1,step,i,s__68371__$2,temp__5735__auto__,map__68358,map__68358__$1,vec__68359,page,steps_per_page,selection,fst,lst,vec__68362,sel_i,sel_g,sel_imp,sel_terms,sel,map__68349,map__68349__$1,_BANG_sel,format_prime,group_row_fn,format_term,steps,head_row,title_row_fn,term_length,paginated))
;
return iter__27573__auto__(imp,(0));
})()))], null));

var G__68696 = (j__68580 + (1));
j__68580 = G__68696;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__68581),bfuncs$reduction_steps$reduction_steps_body_$_iter__68370_$_iter__68566_$_iter__68577(cljs.core.chunk_rest(s__68578__$2),(i__68579__$1 + size__27572__auto____$1)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__68581),null);
}
} else {
var imp = cljs.core.first(s__68578__$2);
var k = i__68579__$1;
var terms = bfuncs.minimization.covered_terms(imp);
var term = ((bfuncs.utils.singleton_QMARK_(terms))?cljs.core.first(terms):null);
var prime_index = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.meta(imp),new cljs.core.Keyword(null,"prime-index","prime-index",-1428577630));
var v = (cljs.core.truth_(prime_index)?imp:(cljs.core.truth_(term)?term:imp
));
var status = (cljs.core.truth_(sel)?(((((sel_i < i)) && (clojure.set.subset_QMARK_(sel_terms,terms))))?"covers-selected":(((((sel_i > i)) && (clojure.set.subset_QMARK_(terms,sel_terms))))?"covered-by-selected":(function (){var G__68599 = (group - sel_g);
switch (G__68599) {
case (0):
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(imp,sel_imp)){
return "selected";
} else {
return "nothing";
}

break;
case (-1):
case (1):
if(cljs.core.truth_(bfuncs.minimization.compatible_QMARK_(imp,sel_imp))){
return "compatible";
} else {
return "nothing";
}

break;
default:
return "nothing";

}
})()
)):null);
return cljs.core.cons(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent_material_ui.core.table_row.table_row,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"key","key",-1516042587),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(i),cljs.core.str.cljs$core$IFn$_invoke$arity$1(j),cljs.core.str.cljs$core$IFn$_invoke$arity$1(k)].join(''),new cljs.core.Keyword(null,"component","component",1555936782),bfuncs.reduction_steps.div_button_base,new cljs.core.Keyword(null,"tab-index","tab-index",895755393),(0),new cljs.core.Keyword(null,"class","class",-2030961996),reagent.core.class_names.cljs$core$IFn$_invoke$arity$2(status,"data-row"),new cljs.core.Keyword(null,"title","title",636505583),(function (){var G__68600 = status;
switch (G__68600) {
case "covers-selected":
return "Covers selection";

break;
case "covered-by-selected":
return "Covered by selection";

break;
case "compatible":
return "Can merge with selection";

break;
default:
return null;

}
})(),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (j__68569,s__68371__$1,i__68372__$1,terms,term,prime_index,v,status,imp,k,s__68578__$2,temp__5735__auto____$2,vec__68572,group,imps,j,c__68571,size__27572__auto__,b__68570,s__68567__$2,temp__5735__auto____$1,step,i,s__68371__$2,temp__5735__auto__,map__68358,map__68358__$1,vec__68359,page,steps_per_page,selection,fst,lst,vec__68362,sel_i,sel_g,sel_imp,sel_terms,sel,map__68349,map__68349__$1,_BANG_sel,format_prime,group_row_fn,format_term,steps,head_row,title_row_fn,term_length,paginated){
return (function (p1__68345_SHARP_){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(_BANG_sel,bfuncs.utils.toggle_selection,p1__68345_SHARP_,v,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([null], 0));
});})(j__68569,s__68371__$1,i__68372__$1,terms,term,prime_index,v,status,imp,k,s__68578__$2,temp__5735__auto____$2,vec__68572,group,imps,j,c__68571,size__27572__auto__,b__68570,s__68567__$2,temp__5735__auto____$1,step,i,s__68371__$2,temp__5735__auto__,map__68358,map__68358__$1,vec__68359,page,steps_per_page,selection,fst,lst,vec__68362,sel_i,sel_g,sel_imp,sel_terms,sel,map__68349,map__68349__$1,_BANG_sel,format_prime,group_row_fn,format_term,steps,head_row,title_row_fn,term_length,paginated))
], null),(function (){var names = (function (){var G__68601 = cljs.core.PersistentVector.EMPTY;
var G__68601__$1 = ((bfuncs.utils.singleton_QMARK_(terms))?cljs.core.conj.cljs$core$IFn$_invoke$arity$2(G__68601,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [bfuncs.typesetting.$,(function (){var G__68602 = cljs.core.first(terms);
return (format_term.cljs$core$IFn$_invoke$arity$1 ? format_term.cljs$core$IFn$_invoke$arity$1(G__68602) : format_term.call(null,G__68602));
})()], null)):G__68601);
if(cljs.core.truth_(prime_index)){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(G__68601__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [bfuncs.typesetting.$,(format_prime.cljs$core$IFn$_invoke$arity$1 ? format_prime.cljs$core$IFn$_invoke$arity$1(prime_index) : format_prime.call(null,prime_index))], null));
} else {
return G__68601__$1;
}
})();
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent_material_ui.core.table_cell.table_cell,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),reagent.core.class_names.cljs$core$IFn$_invoke$arity$2("star-cell",((cljs.core.empty_QMARK_(names))?"empty":null))], null)], null),names);
})(),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent_material_ui.core.table_cell.table_cell,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"terms-cell"], null),clojure.string.join.cljs$core$IFn$_invoke$arity$2(", ",terms)], null),cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.seq((function (){var iter__27573__auto__ = ((function (j__68569,s__68371__$1,i__68372__$1,terms,term,prime_index,v,status,imp,k,s__68578__$2,temp__5735__auto____$2,vec__68572,group,imps,j,c__68571,size__27572__auto__,b__68570,s__68567__$2,temp__5735__auto____$1,step,i,s__68371__$2,temp__5735__auto__,map__68358,map__68358__$1,vec__68359,page,steps_per_page,selection,fst,lst,vec__68362,sel_i,sel_g,sel_imp,sel_terms,sel,map__68349,map__68349__$1,_BANG_sel,format_prime,group_row_fn,format_term,steps,head_row,title_row_fn,term_length,paginated){
return (function bfuncs$reduction_steps$reduction_steps_body_$_iter__68370_$_iter__68566_$_iter__68577_$_iter__68603(s__68604,i__68605){
return (new cljs.core.LazySeq(null,((function (j__68569,s__68371__$1,i__68372__$1,terms,term,prime_index,v,status,imp,k,s__68578__$2,temp__5735__auto____$2,vec__68572,group,imps,j,c__68571,size__27572__auto__,b__68570,s__68567__$2,temp__5735__auto____$1,step,i,s__68371__$2,temp__5735__auto__,map__68358,map__68358__$1,vec__68359,page,steps_per_page,selection,fst,lst,vec__68362,sel_i,sel_g,sel_imp,sel_terms,sel,map__68349,map__68349__$1,_BANG_sel,format_prime,group_row_fn,format_term,steps,head_row,title_row_fn,term_length,paginated){
return (function (){
var s__68604__$1 = s__68604;
var i__68605__$1 = i__68605;
while(true){
var temp__5735__auto____$3 = cljs.core.seq(s__68604__$1);
if(temp__5735__auto____$3){
var s__68604__$2 = temp__5735__auto____$3;
if(cljs.core.chunked_seq_QMARK_(s__68604__$2)){
var c__68608 = cljs.core.chunk_first(s__68604__$2);
var size__27572__auto____$1 = cljs.core.count(c__68608);
var b__68607 = cljs.core.chunk_buffer(size__27572__auto____$1);
if((function (){var j__68606 = (0);
while(true){
if((j__68606 < size__27572__auto____$1)){
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(c__68608,j__68606);
var m = (j__68606 + i__68605__$1);
cljs.core.chunk_append(b__68607,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent_material_ui.core.table_cell.table_cell,(function (){var G__68609 = x;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(true,G__68609)){
return "1";
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(false,G__68609)){
return "0";
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(null,G__68609)){
return "\u2013";
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__68609)].join('')));

}
}
}
})()], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),m], null)));

var G__68701 = (j__68606 + (1));
j__68606 = G__68701;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__68607),bfuncs$reduction_steps$reduction_steps_body_$_iter__68370_$_iter__68566_$_iter__68577_$_iter__68603(cljs.core.chunk_rest(s__68604__$2),(i__68605__$1 + size__27572__auto____$1)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__68607),null);
}
} else {
var x = cljs.core.first(s__68604__$2);
var m = i__68605__$1;
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent_material_ui.core.table_cell.table_cell,(function (){var G__68610 = x;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(true,G__68610)){
return "1";
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(false,G__68610)){
return "0";
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(null,G__68610)){
return "\u2013";
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__68610)].join('')));

}
}
}
})()], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),m], null)),bfuncs$reduction_steps$reduction_steps_body_$_iter__68370_$_iter__68566_$_iter__68577_$_iter__68603(cljs.core.rest(s__68604__$2),(i__68605__$1 + (1))));
}
} else {
return null;
}
break;
}
});})(j__68569,s__68371__$1,i__68372__$1,terms,term,prime_index,v,status,imp,k,s__68578__$2,temp__5735__auto____$2,vec__68572,group,imps,j,c__68571,size__27572__auto__,b__68570,s__68567__$2,temp__5735__auto____$1,step,i,s__68371__$2,temp__5735__auto__,map__68358,map__68358__$1,vec__68359,page,steps_per_page,selection,fst,lst,vec__68362,sel_i,sel_g,sel_imp,sel_terms,sel,map__68349,map__68349__$1,_BANG_sel,format_prime,group_row_fn,format_term,steps,head_row,title_row_fn,term_length,paginated))
,null,null));
});})(j__68569,s__68371__$1,i__68372__$1,terms,term,prime_index,v,status,imp,k,s__68578__$2,temp__5735__auto____$2,vec__68572,group,imps,j,c__68571,size__27572__auto__,b__68570,s__68567__$2,temp__5735__auto____$1,step,i,s__68371__$2,temp__5735__auto__,map__68358,map__68358__$1,vec__68359,page,steps_per_page,selection,fst,lst,vec__68362,sel_i,sel_g,sel_imp,sel_terms,sel,map__68349,map__68349__$1,_BANG_sel,format_prime,group_row_fn,format_term,steps,head_row,title_row_fn,term_length,paginated))
;
return iter__27573__auto__(imp,(0));
})()))], null),bfuncs$reduction_steps$reduction_steps_body_$_iter__68370_$_iter__68566_$_iter__68577(cljs.core.rest(s__68578__$2),(i__68579__$1 + (1))));
}
} else {
return null;
}
break;
}
});})(j__68569,s__68371__$1,i__68372__$1,vec__68572,group,imps,j,c__68571,size__27572__auto__,b__68570,s__68567__$2,temp__5735__auto____$1,step,i,s__68371__$2,temp__5735__auto__,map__68358,map__68358__$1,vec__68359,page,steps_per_page,selection,fst,lst,vec__68362,sel_i,sel_g,sel_imp,sel_terms,sel,map__68349,map__68349__$1,_BANG_sel,format_prime,group_row_fn,format_term,steps,head_row,title_row_fn,term_length,paginated))
,null,null));
});})(j__68569,s__68371__$1,i__68372__$1,vec__68572,group,imps,j,c__68571,size__27572__auto__,b__68570,s__68567__$2,temp__5735__auto____$1,step,i,s__68371__$2,temp__5735__auto__,map__68358,map__68358__$1,vec__68359,page,steps_per_page,selection,fst,lst,vec__68362,sel_i,sel_g,sel_imp,sel_terms,sel,map__68349,map__68349__$1,_BANG_sel,format_prime,group_row_fn,format_term,steps,head_row,title_row_fn,term_length,paginated))
;
return iter__27573__auto__(imps,(0));
})()))));

var G__68702 = (j__68569 + (1));
j__68569 = G__68702;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__68570),bfuncs$reduction_steps$reduction_steps_body_$_iter__68370_$_iter__68566(cljs.core.chunk_rest(s__68567__$2),(i__68568__$1 + size__27572__auto__)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__68570),null);
}
} else {
var vec__68613 = cljs.core.first(s__68567__$2);
var group = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__68613,(0),null);
var imps = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__68613,(1),null);
var j = i__68568__$1;
return cljs.core.cons(cljs.core.cons(cljs.core.with_meta((function (){var G__68616 = group;
var G__68617 = cljs.core.count(imps);
return (group_row_fn.cljs$core$IFn$_invoke$arity$2 ? group_row_fn.cljs$core$IFn$_invoke$arity$2(G__68616,G__68617) : group_row_fn.call(null,G__68616,G__68617));
})(),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(i),cljs.core.str.cljs$core$IFn$_invoke$arity$1(j)].join('')], null)),cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.seq((function (){var iter__27573__auto__ = ((function (s__68371__$1,i__68372__$1,vec__68613,group,imps,j,s__68567__$2,temp__5735__auto____$1,step,i,s__68371__$2,temp__5735__auto__,map__68358,map__68358__$1,vec__68359,page,steps_per_page,selection,fst,lst,vec__68362,sel_i,sel_g,sel_imp,sel_terms,sel,map__68349,map__68349__$1,_BANG_sel,format_prime,group_row_fn,format_term,steps,head_row,title_row_fn,term_length,paginated){
return (function bfuncs$reduction_steps$reduction_steps_body_$_iter__68370_$_iter__68566_$_iter__68618(s__68619,i__68620){
return (new cljs.core.LazySeq(null,((function (s__68371__$1,i__68372__$1,vec__68613,group,imps,j,s__68567__$2,temp__5735__auto____$1,step,i,s__68371__$2,temp__5735__auto__,map__68358,map__68358__$1,vec__68359,page,steps_per_page,selection,fst,lst,vec__68362,sel_i,sel_g,sel_imp,sel_terms,sel,map__68349,map__68349__$1,_BANG_sel,format_prime,group_row_fn,format_term,steps,head_row,title_row_fn,term_length,paginated){
return (function (){
var s__68619__$1 = s__68619;
var i__68620__$1 = i__68620;
while(true){
var temp__5735__auto____$2 = cljs.core.seq(s__68619__$1);
if(temp__5735__auto____$2){
var s__68619__$2 = temp__5735__auto____$2;
if(cljs.core.chunked_seq_QMARK_(s__68619__$2)){
var c__68623 = cljs.core.chunk_first(s__68619__$2);
var size__27572__auto__ = cljs.core.count(c__68623);
var b__68622 = cljs.core.chunk_buffer(size__27572__auto__);
if((function (){var j__68621 = (0);
while(true){
if((j__68621 < size__27572__auto__)){
var imp = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(c__68623,j__68621);
var k = (j__68621 + i__68620__$1);
var terms = bfuncs.minimization.covered_terms(imp);
var term = ((bfuncs.utils.singleton_QMARK_(terms))?cljs.core.first(terms):null);
var prime_index = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.meta(imp),new cljs.core.Keyword(null,"prime-index","prime-index",-1428577630));
var v = (cljs.core.truth_(prime_index)?imp:(cljs.core.truth_(term)?term:imp
));
var status = (cljs.core.truth_(sel)?(((((sel_i < i)) && (clojure.set.subset_QMARK_(sel_terms,terms))))?"covers-selected":(((((sel_i > i)) && (clojure.set.subset_QMARK_(terms,sel_terms))))?"covered-by-selected":(function (){var G__68624 = (group - sel_g);
switch (G__68624) {
case (0):
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(imp,sel_imp)){
return "selected";
} else {
return "nothing";
}

break;
case (-1):
case (1):
if(cljs.core.truth_(bfuncs.minimization.compatible_QMARK_(imp,sel_imp))){
return "compatible";
} else {
return "nothing";
}

break;
default:
return "nothing";

}
})()
)):null);
cljs.core.chunk_append(b__68622,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent_material_ui.core.table_row.table_row,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"key","key",-1516042587),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(i),cljs.core.str.cljs$core$IFn$_invoke$arity$1(j),cljs.core.str.cljs$core$IFn$_invoke$arity$1(k)].join(''),new cljs.core.Keyword(null,"component","component",1555936782),bfuncs.reduction_steps.div_button_base,new cljs.core.Keyword(null,"tab-index","tab-index",895755393),(0),new cljs.core.Keyword(null,"class","class",-2030961996),reagent.core.class_names.cljs$core$IFn$_invoke$arity$2(status,"data-row"),new cljs.core.Keyword(null,"title","title",636505583),(function (){var G__68625 = status;
switch (G__68625) {
case "covers-selected":
return "Covers selection";

break;
case "covered-by-selected":
return "Covered by selection";

break;
case "compatible":
return "Can merge with selection";

break;
default:
return null;

}
})(),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (j__68621,s__68371__$1,i__68372__$1,terms,term,prime_index,v,status,imp,k,c__68623,size__27572__auto__,b__68622,s__68619__$2,temp__5735__auto____$2,vec__68613,group,imps,j,s__68567__$2,temp__5735__auto____$1,step,i,s__68371__$2,temp__5735__auto__,map__68358,map__68358__$1,vec__68359,page,steps_per_page,selection,fst,lst,vec__68362,sel_i,sel_g,sel_imp,sel_terms,sel,map__68349,map__68349__$1,_BANG_sel,format_prime,group_row_fn,format_term,steps,head_row,title_row_fn,term_length,paginated){
return (function (p1__68345_SHARP_){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(_BANG_sel,bfuncs.utils.toggle_selection,p1__68345_SHARP_,v,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([null], 0));
});})(j__68621,s__68371__$1,i__68372__$1,terms,term,prime_index,v,status,imp,k,c__68623,size__27572__auto__,b__68622,s__68619__$2,temp__5735__auto____$2,vec__68613,group,imps,j,s__68567__$2,temp__5735__auto____$1,step,i,s__68371__$2,temp__5735__auto__,map__68358,map__68358__$1,vec__68359,page,steps_per_page,selection,fst,lst,vec__68362,sel_i,sel_g,sel_imp,sel_terms,sel,map__68349,map__68349__$1,_BANG_sel,format_prime,group_row_fn,format_term,steps,head_row,title_row_fn,term_length,paginated))
], null),(function (){var names = (function (){var G__68626 = cljs.core.PersistentVector.EMPTY;
var G__68626__$1 = ((bfuncs.utils.singleton_QMARK_(terms))?cljs.core.conj.cljs$core$IFn$_invoke$arity$2(G__68626,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [bfuncs.typesetting.$,(function (){var G__68627 = cljs.core.first(terms);
return (format_term.cljs$core$IFn$_invoke$arity$1 ? format_term.cljs$core$IFn$_invoke$arity$1(G__68627) : format_term.call(null,G__68627));
})()], null)):G__68626);
if(cljs.core.truth_(prime_index)){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(G__68626__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [bfuncs.typesetting.$,(format_prime.cljs$core$IFn$_invoke$arity$1 ? format_prime.cljs$core$IFn$_invoke$arity$1(prime_index) : format_prime.call(null,prime_index))], null));
} else {
return G__68626__$1;
}
})();
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent_material_ui.core.table_cell.table_cell,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),reagent.core.class_names.cljs$core$IFn$_invoke$arity$2("star-cell",((cljs.core.empty_QMARK_(names))?"empty":null))], null)], null),names);
})(),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent_material_ui.core.table_cell.table_cell,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"terms-cell"], null),clojure.string.join.cljs$core$IFn$_invoke$arity$2(", ",terms)], null),cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.seq((function (){var iter__27573__auto__ = ((function (j__68621,s__68371__$1,i__68372__$1,terms,term,prime_index,v,status,imp,k,c__68623,size__27572__auto__,b__68622,s__68619__$2,temp__5735__auto____$2,vec__68613,group,imps,j,s__68567__$2,temp__5735__auto____$1,step,i,s__68371__$2,temp__5735__auto__,map__68358,map__68358__$1,vec__68359,page,steps_per_page,selection,fst,lst,vec__68362,sel_i,sel_g,sel_imp,sel_terms,sel,map__68349,map__68349__$1,_BANG_sel,format_prime,group_row_fn,format_term,steps,head_row,title_row_fn,term_length,paginated){
return (function bfuncs$reduction_steps$reduction_steps_body_$_iter__68370_$_iter__68566_$_iter__68618_$_iter__68628(s__68629,i__68630){
return (new cljs.core.LazySeq(null,((function (j__68621,s__68371__$1,i__68372__$1,terms,term,prime_index,v,status,imp,k,c__68623,size__27572__auto__,b__68622,s__68619__$2,temp__5735__auto____$2,vec__68613,group,imps,j,s__68567__$2,temp__5735__auto____$1,step,i,s__68371__$2,temp__5735__auto__,map__68358,map__68358__$1,vec__68359,page,steps_per_page,selection,fst,lst,vec__68362,sel_i,sel_g,sel_imp,sel_terms,sel,map__68349,map__68349__$1,_BANG_sel,format_prime,group_row_fn,format_term,steps,head_row,title_row_fn,term_length,paginated){
return (function (){
var s__68629__$1 = s__68629;
var i__68630__$1 = i__68630;
while(true){
var temp__5735__auto____$3 = cljs.core.seq(s__68629__$1);
if(temp__5735__auto____$3){
var s__68629__$2 = temp__5735__auto____$3;
if(cljs.core.chunked_seq_QMARK_(s__68629__$2)){
var c__68633 = cljs.core.chunk_first(s__68629__$2);
var size__27572__auto____$1 = cljs.core.count(c__68633);
var b__68632 = cljs.core.chunk_buffer(size__27572__auto____$1);
if((function (){var j__68631 = (0);
while(true){
if((j__68631 < size__27572__auto____$1)){
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(c__68633,j__68631);
var m = (j__68631 + i__68630__$1);
cljs.core.chunk_append(b__68632,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent_material_ui.core.table_cell.table_cell,(function (){var G__68634 = x;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(true,G__68634)){
return "1";
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(false,G__68634)){
return "0";
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(null,G__68634)){
return "\u2013";
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__68634)].join('')));

}
}
}
})()], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),m], null)));

var G__68707 = (j__68631 + (1));
j__68631 = G__68707;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__68632),bfuncs$reduction_steps$reduction_steps_body_$_iter__68370_$_iter__68566_$_iter__68618_$_iter__68628(cljs.core.chunk_rest(s__68629__$2),(i__68630__$1 + size__27572__auto____$1)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__68632),null);
}
} else {
var x = cljs.core.first(s__68629__$2);
var m = i__68630__$1;
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent_material_ui.core.table_cell.table_cell,(function (){var G__68637 = x;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(true,G__68637)){
return "1";
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(false,G__68637)){
return "0";
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(null,G__68637)){
return "\u2013";
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__68637)].join('')));

}
}
}
})()], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),m], null)),bfuncs$reduction_steps$reduction_steps_body_$_iter__68370_$_iter__68566_$_iter__68618_$_iter__68628(cljs.core.rest(s__68629__$2),(i__68630__$1 + (1))));
}
} else {
return null;
}
break;
}
});})(j__68621,s__68371__$1,i__68372__$1,terms,term,prime_index,v,status,imp,k,c__68623,size__27572__auto__,b__68622,s__68619__$2,temp__5735__auto____$2,vec__68613,group,imps,j,s__68567__$2,temp__5735__auto____$1,step,i,s__68371__$2,temp__5735__auto__,map__68358,map__68358__$1,vec__68359,page,steps_per_page,selection,fst,lst,vec__68362,sel_i,sel_g,sel_imp,sel_terms,sel,map__68349,map__68349__$1,_BANG_sel,format_prime,group_row_fn,format_term,steps,head_row,title_row_fn,term_length,paginated))
,null,null));
});})(j__68621,s__68371__$1,i__68372__$1,terms,term,prime_index,v,status,imp,k,c__68623,size__27572__auto__,b__68622,s__68619__$2,temp__5735__auto____$2,vec__68613,group,imps,j,s__68567__$2,temp__5735__auto____$1,step,i,s__68371__$2,temp__5735__auto__,map__68358,map__68358__$1,vec__68359,page,steps_per_page,selection,fst,lst,vec__68362,sel_i,sel_g,sel_imp,sel_terms,sel,map__68349,map__68349__$1,_BANG_sel,format_prime,group_row_fn,format_term,steps,head_row,title_row_fn,term_length,paginated))
;
return iter__27573__auto__(imp,(0));
})()))], null));

var G__68716 = (j__68621 + (1));
j__68621 = G__68716;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__68622),bfuncs$reduction_steps$reduction_steps_body_$_iter__68370_$_iter__68566_$_iter__68618(cljs.core.chunk_rest(s__68619__$2),(i__68620__$1 + size__27572__auto__)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__68622),null);
}
} else {
var imp = cljs.core.first(s__68619__$2);
var k = i__68620__$1;
var terms = bfuncs.minimization.covered_terms(imp);
var term = ((bfuncs.utils.singleton_QMARK_(terms))?cljs.core.first(terms):null);
var prime_index = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.meta(imp),new cljs.core.Keyword(null,"prime-index","prime-index",-1428577630));
var v = (cljs.core.truth_(prime_index)?imp:(cljs.core.truth_(term)?term:imp
));
var status = (cljs.core.truth_(sel)?(((((sel_i < i)) && (clojure.set.subset_QMARK_(sel_terms,terms))))?"covers-selected":(((((sel_i > i)) && (clojure.set.subset_QMARK_(terms,sel_terms))))?"covered-by-selected":(function (){var G__68639 = (group - sel_g);
switch (G__68639) {
case (0):
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(imp,sel_imp)){
return "selected";
} else {
return "nothing";
}

break;
case (-1):
case (1):
if(cljs.core.truth_(bfuncs.minimization.compatible_QMARK_(imp,sel_imp))){
return "compatible";
} else {
return "nothing";
}

break;
default:
return "nothing";

}
})()
)):null);
return cljs.core.cons(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent_material_ui.core.table_row.table_row,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"key","key",-1516042587),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(i),cljs.core.str.cljs$core$IFn$_invoke$arity$1(j),cljs.core.str.cljs$core$IFn$_invoke$arity$1(k)].join(''),new cljs.core.Keyword(null,"component","component",1555936782),bfuncs.reduction_steps.div_button_base,new cljs.core.Keyword(null,"tab-index","tab-index",895755393),(0),new cljs.core.Keyword(null,"class","class",-2030961996),reagent.core.class_names.cljs$core$IFn$_invoke$arity$2(status,"data-row"),new cljs.core.Keyword(null,"title","title",636505583),(function (){var G__68640 = status;
switch (G__68640) {
case "covers-selected":
return "Covers selection";

break;
case "covered-by-selected":
return "Covered by selection";

break;
case "compatible":
return "Can merge with selection";

break;
default:
return null;

}
})(),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (s__68371__$1,i__68372__$1,terms,term,prime_index,v,status,imp,k,s__68619__$2,temp__5735__auto____$2,vec__68613,group,imps,j,s__68567__$2,temp__5735__auto____$1,step,i,s__68371__$2,temp__5735__auto__,map__68358,map__68358__$1,vec__68359,page,steps_per_page,selection,fst,lst,vec__68362,sel_i,sel_g,sel_imp,sel_terms,sel,map__68349,map__68349__$1,_BANG_sel,format_prime,group_row_fn,format_term,steps,head_row,title_row_fn,term_length,paginated){
return (function (p1__68345_SHARP_){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(_BANG_sel,bfuncs.utils.toggle_selection,p1__68345_SHARP_,v,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([null], 0));
});})(s__68371__$1,i__68372__$1,terms,term,prime_index,v,status,imp,k,s__68619__$2,temp__5735__auto____$2,vec__68613,group,imps,j,s__68567__$2,temp__5735__auto____$1,step,i,s__68371__$2,temp__5735__auto__,map__68358,map__68358__$1,vec__68359,page,steps_per_page,selection,fst,lst,vec__68362,sel_i,sel_g,sel_imp,sel_terms,sel,map__68349,map__68349__$1,_BANG_sel,format_prime,group_row_fn,format_term,steps,head_row,title_row_fn,term_length,paginated))
], null),(function (){var names = (function (){var G__68641 = cljs.core.PersistentVector.EMPTY;
var G__68641__$1 = ((bfuncs.utils.singleton_QMARK_(terms))?cljs.core.conj.cljs$core$IFn$_invoke$arity$2(G__68641,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [bfuncs.typesetting.$,(function (){var G__68642 = cljs.core.first(terms);
return (format_term.cljs$core$IFn$_invoke$arity$1 ? format_term.cljs$core$IFn$_invoke$arity$1(G__68642) : format_term.call(null,G__68642));
})()], null)):G__68641);
if(cljs.core.truth_(prime_index)){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(G__68641__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [bfuncs.typesetting.$,(format_prime.cljs$core$IFn$_invoke$arity$1 ? format_prime.cljs$core$IFn$_invoke$arity$1(prime_index) : format_prime.call(null,prime_index))], null));
} else {
return G__68641__$1;
}
})();
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent_material_ui.core.table_cell.table_cell,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),reagent.core.class_names.cljs$core$IFn$_invoke$arity$2("star-cell",((cljs.core.empty_QMARK_(names))?"empty":null))], null)], null),names);
})(),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent_material_ui.core.table_cell.table_cell,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"terms-cell"], null),clojure.string.join.cljs$core$IFn$_invoke$arity$2(", ",terms)], null),cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.seq((function (){var iter__27573__auto__ = ((function (s__68371__$1,i__68372__$1,terms,term,prime_index,v,status,imp,k,s__68619__$2,temp__5735__auto____$2,vec__68613,group,imps,j,s__68567__$2,temp__5735__auto____$1,step,i,s__68371__$2,temp__5735__auto__,map__68358,map__68358__$1,vec__68359,page,steps_per_page,selection,fst,lst,vec__68362,sel_i,sel_g,sel_imp,sel_terms,sel,map__68349,map__68349__$1,_BANG_sel,format_prime,group_row_fn,format_term,steps,head_row,title_row_fn,term_length,paginated){
return (function bfuncs$reduction_steps$reduction_steps_body_$_iter__68370_$_iter__68566_$_iter__68618_$_iter__68643(s__68644,i__68645){
return (new cljs.core.LazySeq(null,((function (s__68371__$1,i__68372__$1,terms,term,prime_index,v,status,imp,k,s__68619__$2,temp__5735__auto____$2,vec__68613,group,imps,j,s__68567__$2,temp__5735__auto____$1,step,i,s__68371__$2,temp__5735__auto__,map__68358,map__68358__$1,vec__68359,page,steps_per_page,selection,fst,lst,vec__68362,sel_i,sel_g,sel_imp,sel_terms,sel,map__68349,map__68349__$1,_BANG_sel,format_prime,group_row_fn,format_term,steps,head_row,title_row_fn,term_length,paginated){
return (function (){
var s__68644__$1 = s__68644;
var i__68645__$1 = i__68645;
while(true){
var temp__5735__auto____$3 = cljs.core.seq(s__68644__$1);
if(temp__5735__auto____$3){
var s__68644__$2 = temp__5735__auto____$3;
if(cljs.core.chunked_seq_QMARK_(s__68644__$2)){
var c__68648 = cljs.core.chunk_first(s__68644__$2);
var size__27572__auto__ = cljs.core.count(c__68648);
var b__68647 = cljs.core.chunk_buffer(size__27572__auto__);
if((function (){var j__68646 = (0);
while(true){
if((j__68646 < size__27572__auto__)){
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(c__68648,j__68646);
var m = (j__68646 + i__68645__$1);
cljs.core.chunk_append(b__68647,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent_material_ui.core.table_cell.table_cell,(function (){var G__68650 = x;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(true,G__68650)){
return "1";
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(false,G__68650)){
return "0";
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(null,G__68650)){
return "\u2013";
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__68650)].join('')));

}
}
}
})()], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),m], null)));

var G__68726 = (j__68646 + (1));
j__68646 = G__68726;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__68647),bfuncs$reduction_steps$reduction_steps_body_$_iter__68370_$_iter__68566_$_iter__68618_$_iter__68643(cljs.core.chunk_rest(s__68644__$2),(i__68645__$1 + size__27572__auto__)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__68647),null);
}
} else {
var x = cljs.core.first(s__68644__$2);
var m = i__68645__$1;
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent_material_ui.core.table_cell.table_cell,(function (){var G__68651 = x;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(true,G__68651)){
return "1";
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(false,G__68651)){
return "0";
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(null,G__68651)){
return "\u2013";
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__68651)].join('')));

}
}
}
})()], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),m], null)),bfuncs$reduction_steps$reduction_steps_body_$_iter__68370_$_iter__68566_$_iter__68618_$_iter__68643(cljs.core.rest(s__68644__$2),(i__68645__$1 + (1))));
}
} else {
return null;
}
break;
}
});})(s__68371__$1,i__68372__$1,terms,term,prime_index,v,status,imp,k,s__68619__$2,temp__5735__auto____$2,vec__68613,group,imps,j,s__68567__$2,temp__5735__auto____$1,step,i,s__68371__$2,temp__5735__auto__,map__68358,map__68358__$1,vec__68359,page,steps_per_page,selection,fst,lst,vec__68362,sel_i,sel_g,sel_imp,sel_terms,sel,map__68349,map__68349__$1,_BANG_sel,format_prime,group_row_fn,format_term,steps,head_row,title_row_fn,term_length,paginated))
,null,null));
});})(s__68371__$1,i__68372__$1,terms,term,prime_index,v,status,imp,k,s__68619__$2,temp__5735__auto____$2,vec__68613,group,imps,j,s__68567__$2,temp__5735__auto____$1,step,i,s__68371__$2,temp__5735__auto__,map__68358,map__68358__$1,vec__68359,page,steps_per_page,selection,fst,lst,vec__68362,sel_i,sel_g,sel_imp,sel_terms,sel,map__68349,map__68349__$1,_BANG_sel,format_prime,group_row_fn,format_term,steps,head_row,title_row_fn,term_length,paginated))
;
return iter__27573__auto__(imp,(0));
})()))], null),bfuncs$reduction_steps$reduction_steps_body_$_iter__68370_$_iter__68566_$_iter__68618(cljs.core.rest(s__68619__$2),(i__68620__$1 + (1))));
}
} else {
return null;
}
break;
}
});})(s__68371__$1,i__68372__$1,vec__68613,group,imps,j,s__68567__$2,temp__5735__auto____$1,step,i,s__68371__$2,temp__5735__auto__,map__68358,map__68358__$1,vec__68359,page,steps_per_page,selection,fst,lst,vec__68362,sel_i,sel_g,sel_imp,sel_terms,sel,map__68349,map__68349__$1,_BANG_sel,format_prime,group_row_fn,format_term,steps,head_row,title_row_fn,term_length,paginated))
,null,null));
});})(s__68371__$1,i__68372__$1,vec__68613,group,imps,j,s__68567__$2,temp__5735__auto____$1,step,i,s__68371__$2,temp__5735__auto__,map__68358,map__68358__$1,vec__68359,page,steps_per_page,selection,fst,lst,vec__68362,sel_i,sel_g,sel_imp,sel_terms,sel,map__68349,map__68349__$1,_BANG_sel,format_prime,group_row_fn,format_term,steps,head_row,title_row_fn,term_length,paginated))
;
return iter__27573__auto__(imps,(0));
})()))),bfuncs$reduction_steps$reduction_steps_body_$_iter__68370_$_iter__68566(cljs.core.rest(s__68567__$2),(i__68568__$1 + (1))));
}
} else {
return null;
}
break;
}
});})(s__68371__$1,i__68372__$1,step,i,s__68371__$2,temp__5735__auto__,map__68358,map__68358__$1,vec__68359,page,steps_per_page,selection,fst,lst,vec__68362,sel_i,sel_g,sel_imp,sel_terms,sel,map__68349,map__68349__$1,_BANG_sel,format_prime,group_row_fn,format_term,steps,head_row,title_row_fn,term_length,paginated))
,null,null));
});})(s__68371__$1,i__68372__$1,step,i,s__68371__$2,temp__5735__auto__,map__68358,map__68358__$1,vec__68359,page,steps_per_page,selection,fst,lst,vec__68362,sel_i,sel_g,sel_imp,sel_terms,sel,map__68349,map__68349__$1,_BANG_sel,format_prime,group_row_fn,format_term,steps,head_row,title_row_fn,term_length,paginated))
;
return iter__27573__auto__(step,(0));
})()))], null),bfuncs$reduction_steps$reduction_steps_body_$_iter__68370(cljs.core.rest(s__68371__$2),(i__68372__$1 + (1))));
} else {
var G__68729 = cljs.core.rest(s__68371__$2);
var G__68730 = (i__68372__$1 + (1));
s__68371__$1 = G__68729;
i__68372__$1 = G__68730;
continue;
}
} else {
return null;
}
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__27573__auto__(steps,(0));
})()))], null);
});
bfuncs.reduction_steps.reduction_steps_pagination = (function bfuncs$reduction_steps$reduction_steps_pagination(p__68655){
var map__68656 = p__68655;
var map__68656__$1 = (((((!((map__68656 == null))))?(((((map__68656.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__68656.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__68656):map__68656);
var _BANG_sel = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68656__$1,new cljs.core.Keyword(null,"!sel","!sel",763711166));
var page_count = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68656__$1,new cljs.core.Keyword(null,"page-count","page-count",2081744960));
var rows_per_page_options = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68656__$1,new cljs.core.Keyword(null,"rows-per-page-options","rows-per-page-options",-1981048019));
var mini = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68656__$1,new cljs.core.Keyword(null,"mini","mini",1024876972));
var vec__68658 = cljs.core.deref(reagent.core.cursor(_BANG_sel,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"page-data","page-data",1443840710)], null)));
var page = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__68658,(0),null);
var steps_per_page = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__68658,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent_material_ui.core.table_pagination.table_pagination,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"count","count",2139924085),page_count,new cljs.core.Keyword(null,"page","page",849072397),page,new cljs.core.Keyword(null,"rows-per-page","rows-per-page",249655959),steps_per_page,new cljs.core.Keyword(null,"on-change-page","on-change-page",1552351005),(function (p1__68653_SHARP_,p2__68652_SHARP_){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(_BANG_sel,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"page-data","page-data",1443840710),(0)], null),p2__68652_SHARP_);
})], null),(cljs.core.truth_(mini)?new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"class","class",-2030961996),"pagination mini",new cljs.core.Keyword(null,"label-displayed-rows","label-displayed-rows",25822912),bfuncs.reduction_steps.label_displayed_steps_mini,new cljs.core.Keyword(null,"rows-per-page-options","rows-per-page-options",-1981048019),[],new cljs.core.Keyword(null,"component","component",1555936782),"div"], null):new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"class","class",-2030961996),"pagination main",new cljs.core.Keyword(null,"rows-per-page-options","rows-per-page-options",-1981048019),cljs.core.clj__GT_js(rows_per_page_options),new cljs.core.Keyword(null,"label-displayed-rows","label-displayed-rows",25822912),bfuncs.reduction_steps.label_displayed_steps,new cljs.core.Keyword(null,"label-rows-per-page","label-rows-per-page",1972381813),"Steps per page:",new cljs.core.Keyword(null,"on-change-rows-per-page","on-change-rows-per-page",661310696),(function (p1__68654_SHARP_){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(_BANG_sel,cljs.core.assoc,new cljs.core.Keyword(null,"page-data","page-data",1443840710),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),bfuncs.utils.event_value(p1__68654_SHARP_)], null));
})], null))], 0))], null);
});
bfuncs.reduction_steps.reduction_steps_section = (function bfuncs$reduction_steps$reduction_steps_section(p__68661){
var map__68662 = p__68661;
var map__68662__$1 = (((((!((map__68662 == null))))?(((((map__68662.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__68662.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__68662):map__68662);
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68662__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var _BANG_vars = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68662__$1,new cljs.core.Keyword(null,"!vars","!vars",494676873));
var _BANG_sel = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68662__$1,new cljs.core.Keyword(null,"!sel","!sel",763711166));
var format_term = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68662__$1,new cljs.core.Keyword(null,"format-term","format-term",-706410519));
var format_prime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68662__$1,new cljs.core.Keyword(null,"format-prime","format-prime",455151967));
var pagination_threshold = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__68662__$1,new cljs.core.Keyword(null,"pagination-threshold","pagination-threshold",431515628),(32));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(_BANG_sel,cljs.core.assoc,new cljs.core.Keyword(null,"page-data","page-data",1443840710),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(1)], null));

var map__68664 = data;
var map__68664__$1 = (((((!((map__68664 == null))))?(((((map__68664.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__68664.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__68664):map__68664);
var steps = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68664__$1,new cljs.core.Keyword(null,"steps","steps",-128433302));
var term_length = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68664__$1,new cljs.core.Keyword(null,"term-length","term-length",552241655));
var target_form = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68664__$1,new cljs.core.Keyword(null,"target-form","target-form",1593121146));
var steps__$1 = cljs.core.vec(steps);
var nsteps = cljs.core.count(steps__$1);
var nvars = cljs.core.count(cljs.core.deref(_BANG_vars));
var nrows = bfuncs.utils.map_reduce.cljs$core$IFn$_invoke$arity$3(cljs.core.partial.cljs$core$IFn$_invoke$arity$3(bfuncs.utils.map_reduce,cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.count,cljs.core.val),cljs.core._PLUS_),cljs.core._PLUS_,steps__$1);
var paginated = (nrows > pagination_threshold);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent_material_ui.core.grid.grid,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"item","item",249373802),true,new cljs.core.Keyword(null,"xs","xs",649443341),(12)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent_material_ui.core.table_container.table_container,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),reagent.core.class_names.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(bfuncs.style._BANG_vclasses),new cljs.core.Keyword(null,"reduction-steps-table","reduction-steps-table",-382293377)),"clicky")], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent_material_ui.core.table.table,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"size","size",1098693007),"small"], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"colgroup","colgroup",651118645),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"col.group","col.group",981830141)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"col.star","col.star",40518635)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"col.terms","col.terms",74703153)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"col.vars","col.vars",-927259934)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [bfuncs.reduction_steps.reduction_steps_body,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"group-row-fn","group-row-fn",-1732843932),new cljs.core.Keyword(null,"format-term","format-term",-706410519),new cljs.core.Keyword(null,"steps","steps",-128433302),new cljs.core.Keyword(null,"head-row","head-row",-791709300),new cljs.core.Keyword(null,"title-row-fn","title-row-fn",-176245520),new cljs.core.Keyword(null,"term-length","term-length",552241655),new cljs.core.Keyword(null,"paginated","paginated",-133793192),new cljs.core.Keyword(null,"!sel","!sel",763711166),new cljs.core.Keyword(null,"format-prime","format-prime",455151967)],[(function (group,imp_count){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent_material_ui.core.table_row.table_row,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"group-row"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent_material_ui.core.table_cell.table_cell,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"row-span","row-span",-365554241),(imp_count + (1)),new cljs.core.Keyword(null,"class","class",-2030961996),"group-cell"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.group-val","div.group-val",1594248538),group], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent_material_ui.core.table_cell.table_cell,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),"group-row-rest",new cljs.core.Keyword(null,"col-span","col-span",-232603210),((2) + nvars)], null)], null)], null);
}),format_term,steps__$1,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent_material_ui.core.table_row.table_row,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"head-row"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent_material_ui.core.table_cell.table_cell,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"variant","variant",-424354234),"head",new cljs.core.Keyword(null,"class","class",-2030961996),"group-cell"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent_material_ui.core.tooltip.tooltip,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"placement","placement",768366651),"top",new cljs.core.Keyword(null,"title","title",636505583),"Group implicants by number of set bits"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"Group"], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent_material_ui.core.table_cell.table_cell,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"variant","variant",-424354234),"head",new cljs.core.Keyword(null,"class","class",-2030961996),"star-cell with-bord"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent_material_ui.core.table_cell.table_cell,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"variant","variant",-424354234),"head",new cljs.core.Keyword(null,"class","class",-2030961996),"terms-cell"], null),[cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var G__68667 = target_form;
var G__68667__$1 = (((G__68667 instanceof cljs.core.Keyword))?G__68667.fqn:null);
switch (G__68667__$1) {
case "SOP":
return "Minterms";

break;
case "POS":
return "Maxterms";

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__68667__$1)].join('')));

}
})())," Covered"].join('')], null),cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.seq((function (){var iter__4529__auto__ = (function bfuncs$reduction_steps$reduction_steps_section_$_iter__68668(s__68669){
return (new cljs.core.LazySeq(null,(function (){
var s__68669__$1 = s__68669;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__68669__$1);
if(temp__5735__auto__){
var s__68669__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__68669__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__68669__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__68671 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__68670 = (0);
while(true){
if((i__68670 < size__4528__auto__)){
var i = cljs.core._nth(c__4527__auto__,i__68670);
cljs.core.chunk_append(b__68671,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent_material_ui.core.table_cell.table_cell,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"key","key",-1516042587),i,new cljs.core.Keyword(null,"variant","variant",-424354234),"head",new cljs.core.Keyword(null,"class","class",-2030961996),"var-cell"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [bfuncs.typesetting.$,bfuncs.typesetting.format_var.cljs$core$IFn$_invoke$arity$2(i,nvars)], null)], null));

var G__68744 = (i__68670 + (1));
i__68670 = G__68744;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__68671),bfuncs$reduction_steps$reduction_steps_section_$_iter__68668(cljs.core.chunk_rest(s__68669__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__68671),null);
}
} else {
var i = cljs.core.first(s__68669__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent_material_ui.core.table_cell.table_cell,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"key","key",-1516042587),i,new cljs.core.Keyword(null,"variant","variant",-424354234),"head",new cljs.core.Keyword(null,"class","class",-2030961996),"var-cell"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [bfuncs.typesetting.$,bfuncs.typesetting.format_var.cljs$core$IFn$_invoke$arity$2(i,nvars)], null)], null),bfuncs$reduction_steps$reduction_steps_section_$_iter__68668(cljs.core.rest(s__68669__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4529__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$1(nvars));
})()))], null),(function (i,pagination_QMARK_){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent_material_ui.core.table_row.table_row,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent_material_ui.core.table_cell.table_cell,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"variant","variant",-424354234),"head",new cljs.core.Keyword(null,"class","class",-2030961996),"title-cell",new cljs.core.Keyword(null,"col-span","col-span",-232603210),((3) + nvars)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.title","div.title",-1929547732),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent_material_ui.core.typography.typography,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"variant","variant",-424354234),"h6"], null),["Step ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((i + (1)))].join('')], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent_material_ui.core.typography.typography,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"variant","variant",-424354234),"body1",new cljs.core.Keyword(null,"color","color",1011675173),"textSecondary",new cljs.core.Keyword(null,"class","class",-2030961996),"count"], null),["\u00A0of ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(nsteps)].join('')], null),(cljs.core.truth_((function (){var and__4115__auto__ = pagination_QMARK_;
if(cljs.core.truth_(and__4115__auto__)){
return paginated;
} else {
return and__4115__auto__;
}
})())?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [bfuncs.reduction_steps.reduction_steps_pagination,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"page-count","page-count",2081744960),nsteps,new cljs.core.Keyword(null,"mini","mini",1024876972),true,new cljs.core.Keyword(null,"!sel","!sel",763711166),_BANG_sel], null)], null):null)], null)], null)], null);
}),term_length,paginated,_BANG_sel,format_prime])], null),((paginated)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent_material_ui.core.table_footer.table_footer,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent_material_ui.core.table_row.table_row,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [bfuncs.reduction_steps.reduction_steps_pagination,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"page-count","page-count",2081744960),nsteps,new cljs.core.Keyword(null,"rows-per-page-options","rows-per-page-options",-1981048019),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"label","label",1718410804),"All",new cljs.core.Keyword(null,"value","value",305978217),nsteps], null)], null),new cljs.core.Keyword(null,"!sel","!sel",763711166),_BANG_sel], null)], null)], null)], null):null)], null)], null)], null);
});

//# sourceMappingURL=bfuncs.reduction_steps.js.map
