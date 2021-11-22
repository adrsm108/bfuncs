goog.provide('reagent_material_ui.core.textarea_autosize');
var module$node_modules$react$index=shadow.js.require("module$node_modules$react$index", {});
reagent_material_ui.core.textarea_autosize.different_QMARK_ = (function reagent_material_ui$core$textarea_autosize$different_QMARK_(a,b){
return ((1) < Math.abs(((function (){var or__4126__auto__ = a;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return (0);
}
})() - (function (){var or__4126__auto__ = b;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return (0);
}
})())));
});
reagent_material_ui.core.textarea_autosize.get_style_value = (function reagent_material_ui$core$textarea_autosize$get_style_value(computed_style,property){
var or__4126__auto__ = parseInt(goog.object.get(computed_style,property),(10));
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return (0);
}
});
reagent_material_ui.core.textarea_autosize.react_textarea_autosize = module$node_modules$react$index.forwardRef((function reagent_material_ui$core$textarea_autosize$textarea_autosize(props,ref){
var props__$1 = reagent_material_ui.util.js__GT_clj_SINGLEQUOTE_(props);
var map__42770 = props__$1;
var map__42770__$1 = (((((!((map__42770 == null))))?(((((map__42770.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42770.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__42770):map__42770);
var on_change = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42770__$1,new cljs.core.Keyword(null,"on-change","on-change",-732046149));
var placeholder = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42770__$1,new cljs.core.Keyword(null,"placeholder","placeholder",-104873083));
var rows = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42770__$1,new cljs.core.Keyword(null,"rows","rows",850049680));
var rows_max = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42770__$1,new cljs.core.Keyword(null,"rows-max","rows-max",-1902625472));
var rows_min = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42770__$1,new cljs.core.Keyword(null,"rows-min","rows-min",-662130213));
var style = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42770__$1,new cljs.core.Keyword(null,"style","style",-496642736));
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42770__$1,new cljs.core.Keyword(null,"value","value",305978217));
var other_props = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(props__$1,new cljs.core.Keyword(null,"input-ref","input-ref",575432746),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"on-change","on-change",-732046149),new cljs.core.Keyword(null,"rows","rows",850049680),new cljs.core.Keyword(null,"rows-max","rows-max",-1902625472),new cljs.core.Keyword(null,"rows-min","rows-min",-662130213),new cljs.core.Keyword(null,"style","style",-496642736)], 0));
var rows_min__$1 = (function (){var or__4126__auto__ = rows;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
var or__4126__auto____$1 = rows_min;
if(cljs.core.truth_(or__4126__auto____$1)){
return or__4126__auto____$1;
} else {
return (1);
}
}
})();
var controlled_QMARK_ = (!((value == null)));
var input_ref = reagent_material_ui.util.use_ref(null);
var shadow_ref = reagent_material_ui.util.use_ref(null);
var renders = reagent_material_ui.util.use_ref((0));
var handle_ref = reagent_material_ui.util.use_fork_ref.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"input-ref","input-ref",575432746).cljs$core$IFn$_invoke$arity$1(props__$1),input_ref,ref], 0));
var vec__42771 = reagent_material_ui.util.use_state(cljs.core.PersistentArrayMap.EMPTY);
var state = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42771,(0),null);
var set_state = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42771,(1),null);
var sync_height = reagent_material_ui.util.use_callback((function (){
var input = input_ref.current;
var shadow__$1 = shadow_ref.current;
var computed_style = window.getComputedStyle(input);
var _ = (shadow__$1.style.width = goog.object.get(computed_style,"width"));
var ___$1 = (shadow__$1.value = (function (){var or__4126__auto__ = input.value;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
var or__4126__auto____$1 = placeholder;
if(cljs.core.truth_(or__4126__auto____$1)){
return or__4126__auto____$1;
} else {
return "x";
}
}
})());
var ___$2 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.last(shadow__$1.value),"\n"))?(shadow__$1.value = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(shadow__$1.value)," "].join('')):null);
var box_sizing = goog.object.get(computed_style,"box-sizing");
var padding = (reagent_material_ui.core.textarea_autosize.get_style_value(computed_style,"padding-bottom") + reagent_material_ui.core.textarea_autosize.get_style_value(computed_style,"padding-top"));
var border = (reagent_material_ui.core.textarea_autosize.get_style_value(computed_style,"border-bottom-width") + reagent_material_ui.core.textarea_autosize.get_style_value(computed_style,"border-top-width"));
var inner_height = (shadow__$1.scrollHeight - padding);
var ___$3 = (shadow__$1.value = "x");
var single_row_height = (shadow__$1.scrollHeight - padding);
var outer_height = (function (){var G__42775 = inner_height;
var G__42775__$1 = (cljs.core.truth_(rows_min__$1)?(function (){var x__4214__auto__ = G__42775;
var y__4215__auto__ = ((new Number(rows_min__$1)) * single_row_height);
return ((x__4214__auto__ > y__4215__auto__) ? x__4214__auto__ : y__4215__auto__);
})():G__42775);
var G__42775__$2 = (cljs.core.truth_(rows_max)?(function (){var x__4217__auto__ = G__42775__$1;
var y__4218__auto__ = ((new Number(rows_max)) * single_row_height);
return ((x__4217__auto__ < y__4218__auto__) ? x__4217__auto__ : y__4218__auto__);
})():G__42775__$1);
var x__4214__auto__ = G__42775__$2;
var y__4215__auto__ = single_row_height;
return ((x__4214__auto__ > y__4215__auto__) ? x__4214__auto__ : y__4215__auto__);

})();
var outer_height__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("border-box",box_sizing))?((outer_height + padding) + border):outer_height);
var overflow_QMARK_ = (!(reagent_material_ui.core.textarea_autosize.different_QMARK_(outer_height__$1,inner_height)));
var G__42776 = (function (prev_state){
if((((renders.current < (20))) && ((((((outer_height__$1 > (0))) && (reagent_material_ui.core.textarea_autosize.different_QMARK_(new cljs.core.Keyword(null,"height","height",1025178622).cljs$core$IFn$_invoke$arity$1(prev_state),outer_height__$1)))) || (cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(overflow_QMARK_,new cljs.core.Keyword(null,"overflow?","overflow?",124924720).cljs$core$IFn$_invoke$arity$1(prev_state))))))){
(renders.current = (renders.current + (1)));

return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"overflow?","overflow?",124924720),overflow_QMARK_,new cljs.core.Keyword(null,"height","height",1025178622),outer_height__$1], null);
} else {
if((((((!((typeof process !== 'undefined')))) || (cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2("production",process.env.NODE_ENV)))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(renders.current,(20))))){
console.error("Material-UI: too many re-renders. The layout is unstable.\nTextareaAutosize limits the number of renders to prevent an infinite loop");
} else {
}

return prev_state;
}
});
return (set_state.cljs$core$IFn$_invoke$arity$1 ? set_state.cljs$core$IFn$_invoke$arity$1(G__42776) : set_state.call(null,G__42776));
}),[rows_max,rows_min__$1,placeholder]);
var handle_change = (function (e){
(renders.current = (0));

if(controlled_QMARK_){
} else {
(sync_height.cljs$core$IFn$_invoke$arity$0 ? sync_height.cljs$core$IFn$_invoke$arity$0() : sync_height.call(null));
}

if(cljs.core.truth_(on_change)){
return (on_change.cljs$core$IFn$_invoke$arity$1 ? on_change.cljs$core$IFn$_invoke$arity$1(e) : on_change.call(null,e));
} else {
return null;
}
});
reagent_material_ui.util.use_effect((function (){
var handle_resize = reagent_material_ui.util.debounce((function (){
(renders.current = (0));

return (sync_height.cljs$core$IFn$_invoke$arity$0 ? sync_height.cljs$core$IFn$_invoke$arity$0() : sync_height.call(null));
}),(166));
window.addEventListener("resize",handle_resize);

return (function (){
handle_resize.clear();

return window.removeEventListener("resize",handle_resize);
});
}),[sync_height]);

reagent_material_ui.util.use_layout_effect(sync_height);

reagent_material_ui.util.use_effect((function (){
(renders.current = (0));

return undefined;
}),[value]);

return reagent.core.as_element.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"<>","<>",1280186386),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea","textarea",-650375824),reagent_material_ui.util.remove_undefined_vals(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"on-change","on-change",-732046149),handle_change,new cljs.core.Keyword(null,"ref","ref",1289896967),handle_ref,new cljs.core.Keyword(null,"rows","rows",850049680),rows_min__$1,new cljs.core.Keyword(null,"style","style",-496642736),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"height","height",1025178622),new cljs.core.Keyword(null,"height","height",1025178622).cljs$core$IFn$_invoke$arity$1(state),new cljs.core.Keyword(null,"overflow","overflow",2058931880),(cljs.core.truth_(new cljs.core.Keyword(null,"overflow?","overflow?",124924720).cljs$core$IFn$_invoke$arity$1(state))?new cljs.core.Keyword(null,"hidden","hidden",-312506092):null)], null),style], 0))], null),other_props], 0)))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea","textarea",-650375824),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"aria-hidden","aria-hidden",399337029),true,new cljs.core.Keyword(null,"class-name","class-name",945142584),new cljs.core.Keyword(null,"class-name","class-name",945142584).cljs$core$IFn$_invoke$arity$1(props__$1),new cljs.core.Keyword(null,"read-only","read-only",-191706886),true,new cljs.core.Keyword(null,"ref","ref",1289896967),shadow_ref,new cljs.core.Keyword(null,"tab-index","tab-index",895755393),(-1),new cljs.core.Keyword(null,"style","style",-496642736),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"visibility","visibility",1338380893),new cljs.core.Keyword(null,"hidden","hidden",-312506092),new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.Keyword(null,"absolute","absolute",1655386478),new cljs.core.Keyword(null,"overflow","overflow",2058931880),new cljs.core.Keyword(null,"hidden","hidden",-312506092),new cljs.core.Keyword(null,"height","height",1025178622),(0),new cljs.core.Keyword(null,"top","top",-1856271961),(0),new cljs.core.Keyword(null,"left","left",-399115937),(0),new cljs.core.Keyword(null,"transform","transform",1381301764),"translateZ(0)"], null),style], 0))], null)], null)], null));
}));
reagent_material_ui.core.textarea_autosize.textarea_autosize = reagent_material_ui.util.adapt_react_class.cljs$core$IFn$_invoke$arity$1(reagent_material_ui.core.textarea_autosize.react_textarea_autosize);

//# sourceMappingURL=reagent_material_ui.core.textarea_autosize.js.map
