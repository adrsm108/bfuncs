goog.provide('bfuncs.tables');
var module$node_modules$$material_ui$core$esm$List$index=shadow.js.require("module$node_modules$$material_ui$core$esm$List$index", {});
var module$node_modules$$material_ui$core$styles$transitions=shadow.js.require("module$node_modules$$material_ui$core$styles$transitions", {});
var module$node_modules$react_transition_group$cjs$index=shadow.js.require("module$node_modules$react_transition_group$cjs$index", {});
bfuncs.tables.appearing_linear_progress = (function bfuncs$tables$appearing_linear_progress(p__68284){
var map__68285 = p__68284;
var map__68285__$1 = (((((!((map__68285 == null))))?(((((map__68285.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__68285.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__68285):map__68285);
var timeout = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__68285__$1,new cljs.core.Keyword(null,"timeout","timeout",-318625318),(1000));
var fade_props = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68285__$1,new cljs.core.Keyword(null,"fade-props","fade-props",-1281214610));
var progress_props = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68285__$1,new cljs.core.Keyword(null,"progress-props","progress-props",-455926890));
var with_let68292 = reagent.ratom.with_let_values(new cljs.core.Keyword(null,"with-let68292","with-let68292",662394587));
var temp__5739__auto___68462 = reagent.ratom._STAR_ratom_context_STAR_;
if((temp__5739__auto___68462 == null)){
} else {
var c__27840__auto___68464 = temp__5739__auto___68462;
if((with_let68292.generation === c__27840__auto___68464.ratomGeneration)){
if(reagent.debug.has_console){
((reagent.debug.tracking)?reagent.debug.track_console:console).error(["Warning: The same with-let is being used more ","than once in the same reactive context."].join(''));
} else {
}
} else {
}

(with_let68292.generation = c__27840__auto___68464.ratomGeneration);
}


var init68293 = (with_let68292.length === (0));
var visible = ((init68293)?(with_let68292[(0)] = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(false)):(with_let68292[(0)]));
var timeout_id = ((init68293)?(with_let68292[(1)] = setTimeout((function (){
return cljs.core.reset_BANG_(visible,true);
}),timeout)):(with_let68292[(1)]));
var res__27841__auto__ = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent_material_ui.core.fade.fade,reagent.core.merge_props.cljs$core$IFn$_invoke$arity$2(fade_props,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"in","in",-1531184865),cljs.core.deref(visible)], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent_material_ui.core.linear_progress.linear_progress,progress_props], null)], null);
var destroy__27839__auto___68481 = (function (){
return clearTimeout(timeout_id);
});
if(reagent.ratom.reactive_QMARK_()){
if((with_let68292.destroy == null)){
(with_let68292.destroy = destroy__27839__auto___68481);
} else {
}
} else {
destroy__27839__auto___68481();
}

return res__27841__auto__;
});
bfuncs.tables.row_group = (function bfuncs$tables$row_group(p__68316,buttons){
var map__68317 = p__68316;
var map__68317__$1 = (((((!((map__68317 == null))))?(((((map__68317.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__68317.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__68317):map__68317);
var group_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68317__$1,new cljs.core.Keyword(null,"group-name","group-name",-232140110));
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68317__$1,new cljs.core.Keyword(null,"data","data",-232669377));
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),reagent.core.class_names.cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(bfuncs.style._BANG_vclasses),new cljs.core.Keyword(null,"expressions-group","expressions-group",-37508768)))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent_material_ui.core.typography.typography,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"variant","variant",-424354234),"subtitle1",new cljs.core.Keyword(null,"class","class",-2030961996),"group-label"], null),group_name], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"content"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [bfuncs.transitions.switch_transition,((cljs.core.empty_QMARK_(data))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [bfuncs.transitions.css_transition,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"key","key",-1516042587),"progress",new cljs.core.Keyword(null,"timeout","timeout",-318625318),(300),new cljs.core.Keyword(null,"appear","appear",440543877),true], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent_material_ui.core.container.container,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"max-width","max-width",-1939924051),"sm",new cljs.core.Keyword(null,"class","class",-2030961996),"progress-container"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent_material_ui.core.linear_progress.linear_progress,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"progress-bar"], null)], null)], null)], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent_material_ui.core.collapse.collapse,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),"expressions",new cljs.core.Keyword(null,"class","class",-2030961996),reagent.core.class_names.cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(bfuncs.style._BANG_vclasses),new cljs.core.Keyword(null,"fade-collapse","fade-collapse",-1362536728)))], null),(function (){var G__68326 = cljs.core.into.cljs$core$IFn$_invoke$arity$3(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent_material_ui.core.list.list,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),reagent.core.class_names.cljs$core$IFn$_invoke$arity$2("expressions",(cljs.core.truth_(buttons)?"with-buttons":"without-buttons"))], null)], null),cljs.core.map.cljs$core$IFn$_invoke$arity$1((function (expr){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [bfuncs.typesetting.expression,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"expandable","expandable",-704609097),true,new cljs.core.Keyword(null,"wrapper-props","wrapper-props",394796391),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"component","component",1555936782),reagent_material_ui.core.list_item.list_item,new cljs.core.Keyword(null,"disable-gutters","disable-gutters",1438156978),true,new cljs.core.Keyword(null,"divider","divider",1265972657),true], null)], null),expr], null);
})),data);
if(cljs.core.truth_(buttons)){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(G__68326,buttons);
} else {
return G__68326;
}
})()], null))], null)], null)], null);
});
bfuncs.tables.expressions_table_rows = (function bfuncs$tables$expressions_table_rows(p__68335){
var map__68336 = p__68335;
var map__68336__$1 = (((((!((map__68336 == null))))?(((((map__68336.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__68336.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__68336):map__68336);
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68336__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var label = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68336__$1,new cljs.core.Keyword(null,"label","label",1718410804));
var chunk_size = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__68336__$1,new cljs.core.Keyword(null,"chunk-size","chunk-size",-205934374),(4));
var with_let68342 = reagent.ratom.with_let_values(new cljs.core.Keyword(null,"with-let68342","with-let68342",818992972));
var temp__5739__auto___68495 = reagent.ratom._STAR_ratom_context_STAR_;
if((temp__5739__auto___68495 == null)){
} else {
var c__27840__auto___68497 = temp__5739__auto___68495;
if((with_let68342.generation === c__27840__auto___68497.ratomGeneration)){
if(reagent.debug.has_console){
((reagent.debug.tracking)?reagent.debug.track_console:console).error(["Warning: The same with-let is being used more ","than once in the same reactive context."].join(''));
} else {
}
} else {
}

(with_let68342.generation = c__27840__auto___68497.ratomGeneration);
}


var init68343 = (with_let68342.length === (0));
var _BANG_rows_visible = ((init68343)?(with_let68342[(0)] = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(chunk_size)):(with_let68342[(0)]));
var res__27841__auto__ = (function (){var row_count = cljs.core.count(data);
var rows_visible = cljs.core.deref(_BANG_rows_visible);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [bfuncs.tables.row_group,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"group-name","group-name",-232140110),label,new cljs.core.Keyword(null,"data","data",-232669377),cljs.core.take.cljs$core$IFn$_invoke$arity$2(rows_visible,data)], null),(((row_count > chunk_size))?(function (){var change_rows_fn = (function (x){
var op_BANG_ = ((cljs.core.fn_QMARK_(x))?cljs.core.swap_BANG_:cljs.core.reset_BANG_);
return goog.functions.debounce((function (){
return (op_BANG_.cljs$core$IFn$_invoke$arity$2 ? op_BANG_.cljs$core$IFn$_invoke$arity$2(_BANG_rows_visible,x) : op_BANG_.call(null,_BANG_rows_visible,x));
}),(350));
});
var hidden_count = (row_count - rows_visible);
var extra_visible_QMARK_ = (rows_visible > chunk_size);
var all_visible_QMARK_ = (hidden_count <= (0));
var show_more_BANG_ = change_rows_fn((function (p1__68332_SHARP_){
var x__4217__auto__ = row_count;
var y__4218__auto__ = (p1__68332_SHARP_ + chunk_size);
return ((x__4217__auto__ < y__4218__auto__) ? x__4217__auto__ : y__4218__auto__);
}));
var show_fewer_BANG_ = change_rows_fn((function (p1__68333_SHARP_){
var x__4214__auto__ = chunk_size;
var y__4215__auto__ = (p1__68333_SHARP_ - chunk_size);
return ((x__4214__auto__ > y__4215__auto__) ? x__4214__auto__ : y__4215__auto__);
}));
var show_all_BANG_ = change_rows_fn(row_count);
var show_none_BANG_ = change_rows_fn(chunk_size);
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),reagent.core.class_names.cljs$core$IFn$_invoke$arity$variadic(cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(bfuncs.style._BANG_vclasses),new cljs.core.Keyword(null,"expressions-table-button-group","expressions-table-button-group",-851783165)),((all_visible_QMARK_)?"all-visible":null),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((extra_visible_QMARK_)?"extra-visible":null)], 0))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent_material_ui.core.icon_button.icon_button,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"class","class",-2030961996),"all",new cljs.core.Keyword(null,"size","size",1098693007),"small",new cljs.core.Keyword(null,"disabled","disabled",-1529784218),all_visible_QMARK_,new cljs.core.Keyword(null,"title","title",636505583),"Show all results",new cljs.core.Keyword(null,"on-click","on-click",1632826543),show_all_BANG_], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent_material_ui.icons.last_page_outlined.last_page_outlined,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"transform","transform",1381301764),"rotate(90deg)"], null)], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent_material_ui.core.icon_button.icon_button,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"class","class",-2030961996),"none",new cljs.core.Keyword(null,"size","size",1098693007),"small",new cljs.core.Keyword(null,"disabled","disabled",-1529784218),(!(extra_visible_QMARK_)),new cljs.core.Keyword(null,"title","title",636505583),"Hide most results",new cljs.core.Keyword(null,"on-click","on-click",1632826543),show_none_BANG_], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent_material_ui.icons.last_page_outlined.last_page_outlined,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"transform","transform",1381301764),"rotate(-90deg)"], null)], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent_material_ui.core.button_base.button_base,new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"component","component",1555936782),"div",new cljs.core.Keyword(null,"class","class",-2030961996),"spacer",new cljs.core.Keyword(null,"tab-index","tab-index",895755393),(-1),new cljs.core.Keyword(null,"role","role",-736691072),"none",new cljs.core.Keyword(null,"disabled","disabled",-1529784218),all_visible_QMARK_,new cljs.core.Keyword(null,"title","title",636505583),"Show more results",new cljs.core.Keyword(null,"aria-hidden","aria-hidden",399337029),true,new cljs.core.Keyword(null,"on-click","on-click",1632826543),show_more_BANG_], null),((all_visible_QMARK_)?null:new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent_material_ui.core.link.link,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"component","component",1555936782),"span",new cljs.core.Keyword(null,"class","class",-2030961996),"label",new cljs.core.Keyword(null,"color","color",1011675173),"textSecondary"], null),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(hidden_count)," more..."].join('')], null))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent_material_ui.core.icon_button.icon_button,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"class","class",-2030961996),"more",new cljs.core.Keyword(null,"size","size",1098693007),"small",new cljs.core.Keyword(null,"disabled","disabled",-1529784218),all_visible_QMARK_,new cljs.core.Keyword(null,"title","title",636505583),"Show more results",new cljs.core.Keyword(null,"on-click","on-click",1632826543),show_more_BANG_], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent_material_ui.icons.expand_more_outlined.expand_more_outlined], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent_material_ui.core.icon_button.icon_button,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"class","class",-2030961996),"less",new cljs.core.Keyword(null,"size","size",1098693007),"small",new cljs.core.Keyword(null,"disabled","disabled",-1529784218),(!(extra_visible_QMARK_)),new cljs.core.Keyword(null,"title","title",636505583),"Show fewer results",new cljs.core.Keyword(null,"on-click","on-click",1632826543),show_fewer_BANG_], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent_material_ui.icons.expand_less_outlined.expand_less_outlined], null)], null)], null);
})():null)], null);
})();

return res__27841__auto__;
});
bfuncs.tables.expressions_table = (function bfuncs$tables$expressions_table(var_args){
var args__4742__auto__ = [];
var len__4736__auto___68528 = arguments.length;
var i__4737__auto___68529 = (0);
while(true){
if((i__4737__auto___68529 < len__4736__auto___68528)){
args__4742__auto__.push((arguments[i__4737__auto___68529]));

var G__68533 = (i__4737__auto___68529 + (1));
i__4737__auto___68529 = G__68533;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return bfuncs.tables.expressions_table.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(bfuncs.tables.expressions_table.cljs$core$IFn$_invoke$arity$variadic = (function (p__68376,children){
var map__68377 = p__68376;
var map__68377__$1 = (((((!((map__68377 == null))))?(((((map__68377.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__68377.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__68377):map__68377);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent_material_ui.core.table_container.table_container,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),reagent.core.class_names.cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(bfuncs.style._BANG_vclasses),new cljs.core.Keyword(null,"expressions-table","expressions-table",937657528)))], null),cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.table","div.table",-33744051)], null),children)], null);
}));

(bfuncs.tables.expressions_table.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(bfuncs.tables.expressions_table.cljs$lang$applyTo = (function (seq68367){
var G__68368 = cljs.core.first(seq68367);
var seq68367__$1 = cljs.core.next(seq68367);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__68368,seq68367__$1);
}));

bfuncs.tables.truth_table = (function bfuncs$tables$truth_table(p__68398){
var map__68403 = p__68398;
var map__68403__$1 = (((((!((map__68403 == null))))?(((((map__68403.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__68403.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__68403):map__68403);
var expr = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68403__$1,new cljs.core.Keyword(null,"expr","expr",745722291));
var vars = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68403__$1,new cljs.core.Keyword(null,"vars","vars",-2046957217));
if((((!((expr == null)))) && ((!((vars == null)))))){
if((cljs.core.count(vars) > (6))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent_material_ui.core.typography.typography,"Truth table with more than 64 rows suppressed."], null);
} else {
var tt = bfuncs.minimization.truth_table(expr,vars);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent_material_ui.core.table_container.table_container,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),reagent.core.class_names.cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(bfuncs.style._BANG_vclasses),new cljs.core.Keyword(null,"truth-table","truth-table",-1934787398)))], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent_material_ui.core.table.table,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"size","size",1098693007),"small",new cljs.core.Keyword(null,"sticky-header","sticky-header",-523328532),true], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent_material_ui.core.table_head.table_head,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent_material_ui.core.table_row.table_row,cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.seq((function (){var iter__4529__auto__ = (function bfuncs$tables$truth_table_$_iter__68414(s__68415){
return (new cljs.core.LazySeq(null,(function (){
var s__68415__$1 = s__68415;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__68415__$1);
if(temp__5735__auto__){
var s__68415__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__68415__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__68415__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__68417 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__68416 = (0);
while(true){
if((i__68416 < size__4528__auto__)){
var v = cljs.core._nth(c__4527__auto__,i__68416);
cljs.core.chunk_append(b__68417,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent_material_ui.core.table_cell.table_cell,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),v], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [bfuncs.typesetting.expression,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),reagent.core.class_names.cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(bfuncs.style._BANG_vclasses),new cljs.core.Keyword(null,"typeset-expression","typeset-expression",807722591)))], null),v], null)], null));

var G__68549 = (i__68416 + (1));
i__68416 = G__68549;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__68417),bfuncs$tables$truth_table_$_iter__68414(cljs.core.chunk_rest(s__68415__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__68417),null);
}
} else {
var v = cljs.core.first(s__68415__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent_material_ui.core.table_cell.table_cell,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),v], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [bfuncs.typesetting.expression,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),reagent.core.class_names.cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(bfuncs.style._BANG_vclasses),new cljs.core.Keyword(null,"typeset-expression","typeset-expression",807722591)))], null),v], null)], null),bfuncs$tables$truth_table_$_iter__68414(cljs.core.rest(s__68415__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4529__auto__(vars);
})())),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent_material_ui.core.table_cell.table_cell,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [bfuncs.typesetting.expression,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),reagent.core.class_names.cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(bfuncs.style._BANG_vclasses),new cljs.core.Keyword(null,"typeset-expression","typeset-expression",807722591)))], null),expr], null)], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent_material_ui.core.table_body.table_body,cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.seq((function (){var iter__27573__auto__ = (function bfuncs$tables$truth_table_$_iter__68433(s__68434,i__68435){
return (new cljs.core.LazySeq(null,(function (){
var s__68434__$1 = s__68434;
var i__68435__$1 = i__68435;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__68434__$1);
if(temp__5735__auto__){
var s__68434__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__68434__$2)){
var c__68438 = cljs.core.chunk_first(s__68434__$2);
var size__27572__auto__ = cljs.core.count(c__68438);
var b__68437 = cljs.core.chunk_buffer(size__27572__auto__);
if((function (){var j__68436 = (0);
while(true){
if((j__68436 < size__27572__auto__)){
var row = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(c__68438,j__68436);
var i = (j__68436 + i__68435__$1);
cljs.core.chunk_append(b__68437,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent_material_ui.core.table_row.table_row,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),i,new cljs.core.Keyword(null,"class","class",-2030961996),(cljs.core.truth_(cljs.core.peek(row))?"true":"false")], null),cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2(((function (j__68436,row,i,c__68438,size__27572__auto__,b__68437,s__68434__$2,temp__5735__auto__,tt,map__68403,map__68403__$1,expr,vars){
return (function (j,x){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent_material_ui.core.table_cell.table_cell,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),j], null),(cljs.core.truth_(x)?"1":"0")], null);
});})(j__68436,row,i,c__68438,size__27572__auto__,b__68437,s__68434__$2,temp__5735__auto__,tt,map__68403,map__68403__$1,expr,vars))
,row)], null));

var G__68551 = (j__68436 + (1));
j__68436 = G__68551;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__68437),bfuncs$tables$truth_table_$_iter__68433(cljs.core.chunk_rest(s__68434__$2),(i__68435__$1 + size__27572__auto__)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__68437),null);
}
} else {
var row = cljs.core.first(s__68434__$2);
var i = i__68435__$1;
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent_material_ui.core.table_row.table_row,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),i,new cljs.core.Keyword(null,"class","class",-2030961996),(cljs.core.truth_(cljs.core.peek(row))?"true":"false")], null),cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2(((function (row,i,s__68434__$2,temp__5735__auto__,tt,map__68403,map__68403__$1,expr,vars){
return (function (j,x){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent_material_ui.core.table_cell.table_cell,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),j], null),(cljs.core.truth_(x)?"1":"0")], null);
});})(row,i,s__68434__$2,temp__5735__auto__,tt,map__68403,map__68403__$1,expr,vars))
,row)], null),bfuncs$tables$truth_table_$_iter__68433(cljs.core.rest(s__68434__$2),(i__68435__$1 + (1))));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__27573__auto__(tt,(0));
})()))], null)], null)], null);
}
} else {
return null;
}
});

//# sourceMappingURL=bfuncs.tables.js.map
