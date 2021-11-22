goog.provide('bfuncs.app');
var module$bfuncs$TruthTable=shadow.js.require("module$bfuncs$TruthTable", {});
var module$bfuncs$FunctionSummary=shadow.js.require("module$bfuncs$FunctionSummary", {});
var module$bfuncs$jsUtils=shadow.js.require("module$bfuncs$jsUtils", {});
bfuncs.app.num_workers = (1);
bfuncs.app.worker_channel = bfuncs.worker_fns.create_worker_channel(bfuncs.app.num_workers);
if((typeof bfuncs !== 'undefined') && (typeof bfuncs.app !== 'undefined') && (typeof bfuncs.app._BANG_typesetting_menu_open !== 'undefined')){
} else {
bfuncs.app._BANG_typesetting_menu_open = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(false);
}
if((typeof bfuncs !== 'undefined') && (typeof bfuncs.app !== 'undefined') && (typeof bfuncs.app._BANG_term_parse_opts !== 'undefined')){
} else {
bfuncs.app._BANG_term_parse_opts = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"binary","binary",-1802232288),false], null));
}
if((typeof bfuncs !== 'undefined') && (typeof bfuncs.app !== 'undefined') && (typeof bfuncs.app._BANG_parsed_expression !== 'undefined')){
} else {
bfuncs.app._BANG_parsed_expression = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
if((typeof bfuncs !== 'undefined') && (typeof bfuncs.app !== 'undefined') && (typeof bfuncs.app._BANG_parsed_variables !== 'undefined')){
} else {
bfuncs.app._BANG_parsed_variables = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
if((typeof bfuncs !== 'undefined') && (typeof bfuncs.app !== 'undefined') && (typeof bfuncs.app._BANG_minimal_expressions !== 'undefined')){
} else {
bfuncs.app._BANG_minimal_expressions = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
if((typeof bfuncs !== 'undefined') && (typeof bfuncs.app !== 'undefined') && (typeof bfuncs.app._BANG_results_ready !== 'undefined')){
} else {
bfuncs.app._BANG_results_ready = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(false);
}
if((typeof bfuncs !== 'undefined') && (typeof bfuncs.app !== 'undefined') && (typeof bfuncs.app._BANG_minimal_sops !== 'undefined')){
} else {
bfuncs.app._BANG_minimal_sops = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
if((typeof bfuncs !== 'undefined') && (typeof bfuncs.app !== 'undefined') && (typeof bfuncs.app._BANG_minimal_poss !== 'undefined')){
} else {
bfuncs.app._BANG_minimal_poss = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
if((typeof bfuncs !== 'undefined') && (typeof bfuncs.app !== 'undefined') && (typeof bfuncs.app._BANG_anf !== 'undefined')){
} else {
bfuncs.app._BANG_anf = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
bfuncs.app.reparse_minterms_BANG_ = (function bfuncs$app$reparse_minterms_BANG_(state){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state,cljs.core.assoc,new cljs.core.Keyword(null,"parse","parse",-1162164619),bfuncs.parsing.parse_minterms.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state)),cljs.core.deref(bfuncs.app._BANG_term_parse_opts)));
});
if((typeof bfuncs !== 'undefined') && (typeof bfuncs.app !== 'undefined') && (typeof bfuncs.app._BANG_function_values !== 'undefined')){
} else {
bfuncs.app._BANG_function_values = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
if((typeof bfuncs !== 'undefined') && (typeof bfuncs.app !== 'undefined') && (typeof bfuncs.app._BANG_function_properties !== 'undefined')){
} else {
bfuncs.app._BANG_function_properties = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
if((typeof bfuncs !== 'undefined') && (typeof bfuncs.app !== 'undefined') && (typeof bfuncs.app._BANG_target_form !== 'undefined')){
} else {
bfuncs.app._BANG_target_form = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"SOP","SOP",-299014148));
}
bfuncs.app.terms_field = (function bfuncs$app$terms_field(p__69036){
var map__69037 = p__69036;
var map__69037__$1 = (((((!((map__69037 == null))))?(((((map__69037.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__69037.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__69037):map__69037);
var state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69037__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var label = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69037__$1,new cljs.core.Keyword(null,"label","label",1718410804));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent_material_ui.core.text_field.text_field,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"rows-max","rows-max",-1902625472),new cljs.core.Keyword(null,"auto-complete","auto-complete",244958848),new cljs.core.Keyword(null,"variant","variant",-424354234),new cljs.core.Keyword(null,"InputProps","InputProps",-1485068760),new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"multiline","multiline",-1084693234),new cljs.core.Keyword(null,"rows","rows",850049680),new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.Keyword(null,"spell-check","spell-check",-2060352968),new cljs.core.Keyword(null,"on-change","on-change",-732046149),new cljs.core.Keyword(null,"auto-correct","auto-correct",555552927)],[(15),"off","outlined",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),reagent.core.class_names.cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(bfuncs.style._BANG_vclasses),new cljs.core.Keyword(null,"text-field-input","text-field-input",1205897458)))], null),new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state)),true,(1),label,reagent.core.class_names.cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(bfuncs.style._BANG_vclasses),new cljs.core.Keyword(null,"text-field","text-field",1955422445))),"false",(function (e){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state,cljs.core.assoc,new cljs.core.Keyword(null,"value","value",305978217),bfuncs.utils.event_value(e));

return bfuncs.app.reparse_minterms_BANG_(state);
}),"off"])], null);
});
if((typeof bfuncs !== 'undefined') && (typeof bfuncs.app !== 'undefined') && (typeof bfuncs.app._BANG_spoof_expressions !== 'undefined')){
} else {
bfuncs.app._BANG_spoof_expressions = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
bfuncs.app.results_card = (function bfuncs$app$results_card(p__69039){
var map__69040 = p__69039;
var map__69040__$1 = (((((!((map__69040 == null))))?(((((map__69040.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__69040.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__69040):map__69040);
var title = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69040__$1,new cljs.core.Keyword(null,"title","title",636505583));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent_material_ui.core.card.card,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),reagent.core.class_names.cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(bfuncs.style._BANG_vclasses),new cljs.core.Keyword(null,"card","card",-1430355152)))], null),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent_material_ui.core.card_content.card_content,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),(function (){var classes69042 = cljs.core.deref(bfuncs.style._BANG_vclasses);
return reagent.core.class_names.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(classes69042,new cljs.core.Keyword(null,"card-content","card-content",1213828862)),cljs.core.get.cljs$core$IFn$_invoke$arity$2(classes69042,new cljs.core.Keyword(null,"vertical-grid","vertical-grid",-438614033)));
})()], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent_material_ui.core.typography.typography,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"variant","variant",-424354234),"h5"], null),"Function"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [bfuncs.typesetting.expression,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),reagent.core.class_names.cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(bfuncs.style._BANG_vclasses),new cljs.core.Keyword(null,"typeset-expression","typeset-expression",807722591))),new cljs.core.Keyword(null,"expandable","expandable",-704609097),true], null),cljs.core.deref(bfuncs.app._BANG_parsed_expression)], null),(function (){var n = cljs.core.count(cljs.core.deref(bfuncs.app._BANG_parsed_variables));
var map__69043 = cljs.core.deref(bfuncs.app._BANG_function_properties);
var map__69043__$1 = (((((!((map__69043 == null))))?(((((map__69043.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__69043.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__69043):map__69043);
var index = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69043__$1,new cljs.core.Keyword(null,"index","index",-1531685915));
var term_counts = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69043__$1,new cljs.core.Keyword(null,"term-counts","term-counts",852339356));
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"<>","<>",1280186386),(cljs.core.truth_(index)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [bfuncs.typesetting.$$,(function (){var obj__27297__auto__ = index;
var f__27298__auto__ = (obj__27297__auto__["toLocaleString"]);
return f__27298__auto__.call(obj__27297__auto__);
})()], null):null),(cljs.core.truth_(term_counts)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),module$bfuncs$FunctionSummary.RadialChart,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),reagent.core.class_names.cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(bfuncs.style._BANG_vclasses),new cljs.core.Keyword(null,"radial-chart","radial-chart",-915883883))),new cljs.core.Keyword(null,"counts","counts",234305892),term_counts], null)], null):null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent_material_ui.core.typography.typography,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"variant","variant",-424354234),"h5"], null),"Truth Table"], null),(function (){var temp__5739__auto__ = cljs.core.deref(bfuncs.app._BANG_function_values);
if((temp__5739__auto__ == null)){
return null;
} else {
var function_values = temp__5739__auto__;
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),module$bfuncs$TruthTable.default,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"f","f",-1597136552),function_values,new cljs.core.Keyword(null,"arity","arity",-1808556135),n,new cljs.core.Keyword(null,"fullySpecified","fullySpecified",-365407373),true,new cljs.core.Keyword(null,"class","class",-2030961996),reagent.core.class_names.cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(bfuncs.style._BANG_vclasses),new cljs.core.Keyword(null,"truth-table","truth-table",-1934787398))),new cljs.core.Keyword(null,"size","size",1098693007),(((n <= (5)))?"large":(((n <= (6)))?"medium":"small"
))], null)], null);
}
})()], null);
})(),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent_material_ui.core.typography.typography,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"variant","variant",-424354234),"h5"], null),"Minimal Forms"], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [bfuncs.tables.expressions_table,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),cljs.core.deref(bfuncs.app._BANG_parsed_expression)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [bfuncs.tables.expressions_table_rows,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"label","label",1718410804),"Sum of Products",new cljs.core.Keyword(null,"data","data",-232669377),cljs.core.deref(bfuncs.app._BANG_minimal_sops)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [bfuncs.tables.expressions_table_rows,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"label","label",1718410804),"Product of Sums",new cljs.core.Keyword(null,"data","data",-232669377),cljs.core.deref(bfuncs.app._BANG_minimal_poss)], null)], null),(function (){var temp__5737__auto__ = cljs.core.deref(bfuncs.app._BANG_anf);
if((temp__5737__auto__ == null)){
return null;
} else {
var anf = temp__5737__auto__;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [bfuncs.tables.expressions_table_rows,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"label","label",1718410804),"Zhegalkin Polynomial",new cljs.core.Keyword(null,"data","data",-232669377),(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[anf],null))], null)], null);
}
})()], null)], null)], null);
});
bfuncs.app.minimize_and_stuff = (function bfuncs$app$minimize_and_stuff(fvals,vars){
if(cljs.core.truth_(fvals)){
var c__26934__auto___69459 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__26935__auto__ = (function (){var switch__26849__auto__ = (function (state_69071){
var state_val_69072 = (state_69071[(1)]);
if((state_val_69072 === (1))){
var inst_69047 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_69048 = cljs.core.random_uuid();
var state_69071__$1 = (function (){var statearr_69074 = state_69071;
(statearr_69074[(7)] = inst_69048);

(statearr_69074[(8)] = inst_69047);

return statearr_69074;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_69071__$1,(2),bfuncs.app.worker_channel);
} else {
if((state_val_69072 === (2))){
var inst_69048 = (state_69071[(7)]);
var inst_69047 = (state_69071[(8)]);
var inst_69050 = (state_69071[(9)]);
var inst_69050__$1 = (state_69071[(2)]);
var inst_69052 = (inst_69050__$1["addEventListener"]);
var inst_69053 = (function (){var out_port__30025__auto__ = inst_69047;
var task_id__30026__auto__ = inst_69048;
var _worker = inst_69050__$1;
var G__69051 = inst_69050__$1;
var obj__27297__auto__ = inst_69050__$1;
var f__27298__auto__ = inst_69052;
return (function bfuncs$app$minimize_and_stuff_$_handle_message__30027__auto__(event__30028__auto__){
var data__30029__auto__ = (function (){var obj69075 = event__30028__auto__;
var k69076 = "data";
if((function (){var obj69077 = obj69075;
return (((!((obj69077 == null)))) && (applied_science.js_interop.impl.in_QMARK__STAR_(k69076,obj69077)));
})()){
return (obj69075[k69076]);
} else {
return undefined;
}
})();
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(task_id__30026__auto__,cljs.core.uuid((function (){var obj69080 = data__30029__auto__;
var k69081 = "task-id";
if((function (){var obj69082 = obj69080;
return (((!((obj69082 == null)))) && (applied_science.js_interop.impl.in_QMARK__STAR_(k69081,obj69082)));
})()){
return (obj69080[k69081]);
} else {
return undefined;
}
})()))){
var obj__27297__auto___69460__$1 = _worker;
var f__27298__auto___69461__$1 = (obj__27297__auto___69460__$1["removeEventListener"]);
f__27298__auto___69461__$1.call(obj__27297__auto___69460__$1,"message",bfuncs$app$minimize_and_stuff_$_handle_message__30027__auto__);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((function (){var obj69083 = data__30029__auto__;
var k69084 = "type";
if((function (){var obj69085 = obj69083;
return (((!((obj69085 == null)))) && (applied_science.js_interop.impl.in_QMARK__STAR_(k69084,obj69085)));
})()){
return (obj69083[k69084]);
} else {
return undefined;
}
})(),"error")){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Worker error",data__30029__auto__);
} else {
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(out_port__30025__auto__,(function (){var obj69089 = data__30029__auto__;
var k69090 = "value";
if((function (){var obj69091 = obj69089;
return (((!((obj69091 == null)))) && (applied_science.js_interop.impl.in_QMARK__STAR_(k69090,obj69091)));
})()){
return (obj69089[k69090]);
} else {
return undefined;
}
})());
}
} else {
return null;
}
});
})();
var inst_69054 = inst_69052.call(inst_69050__$1,"message",inst_69053);
var inst_69055 = (inst_69050__$1["postMessage"]);
var inst_69057 = [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"task-id","task-id",-1045480126),new cljs.core.Keyword(null,"task","task",-1476607993)];
var inst_69058 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_69059 = [vars,fvals];
var inst_69060 = (new cljs.core.PersistentVector(null,2,(5),inst_69058,inst_69059,null));
var inst_69061 = cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_69048);
var inst_69062 = [inst_69060,inst_69061,"min-sops"];
var inst_69063 = cljs.core.PersistentHashMap.fromArrays(inst_69057,inst_69062);
var inst_69064 = cljs.core.clj__GT_js(inst_69063);
var inst_69065 = inst_69055.call(inst_69050__$1,inst_69064);
var state_69071__$1 = (function (){var statearr_69093 = state_69071;
(statearr_69093[(10)] = inst_69065);

(statearr_69093[(11)] = inst_69054);

(statearr_69093[(9)] = inst_69050__$1);

return statearr_69093;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_69071__$1,(3),inst_69047);
} else {
if((state_val_69072 === (3))){
var inst_69050 = (state_69071[(9)]);
var inst_69067 = (state_69071[(2)]);
var inst_69068 = cljs.core.reset_BANG_(bfuncs.app._BANG_minimal_sops,inst_69067);
var inst_69069 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(bfuncs.app.worker_channel,inst_69050);
var state_69071__$1 = (function (){var statearr_69094 = state_69071;
(statearr_69094[(12)] = inst_69069);

return statearr_69094;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_69071__$1,inst_69068);
} else {
return null;
}
}
}
});
return (function() {
var bfuncs$app$minimize_and_stuff_$_state_machine__26850__auto__ = null;
var bfuncs$app$minimize_and_stuff_$_state_machine__26850__auto____0 = (function (){
var statearr_69095 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_69095[(0)] = bfuncs$app$minimize_and_stuff_$_state_machine__26850__auto__);

(statearr_69095[(1)] = (1));

return statearr_69095;
});
var bfuncs$app$minimize_and_stuff_$_state_machine__26850__auto____1 = (function (state_69071){
while(true){
var ret_value__26851__auto__ = (function (){try{while(true){
var result__26852__auto__ = switch__26849__auto__(state_69071);
if(cljs.core.keyword_identical_QMARK_(result__26852__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26852__auto__;
}
break;
}
}catch (e69096){var ex__26853__auto__ = e69096;
var statearr_69097_69462 = state_69071;
(statearr_69097_69462[(2)] = ex__26853__auto__);


if(cljs.core.seq((state_69071[(4)]))){
var statearr_69098_69463 = state_69071;
(statearr_69098_69463[(1)] = cljs.core.first((state_69071[(4)])));

} else {
throw ex__26853__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__26851__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__69464 = state_69071;
state_69071 = G__69464;
continue;
} else {
return ret_value__26851__auto__;
}
break;
}
});
bfuncs$app$minimize_and_stuff_$_state_machine__26850__auto__ = function(state_69071){
switch(arguments.length){
case 0:
return bfuncs$app$minimize_and_stuff_$_state_machine__26850__auto____0.call(this);
case 1:
return bfuncs$app$minimize_and_stuff_$_state_machine__26850__auto____1.call(this,state_69071);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
bfuncs$app$minimize_and_stuff_$_state_machine__26850__auto__.cljs$core$IFn$_invoke$arity$0 = bfuncs$app$minimize_and_stuff_$_state_machine__26850__auto____0;
bfuncs$app$minimize_and_stuff_$_state_machine__26850__auto__.cljs$core$IFn$_invoke$arity$1 = bfuncs$app$minimize_and_stuff_$_state_machine__26850__auto____1;
return bfuncs$app$minimize_and_stuff_$_state_machine__26850__auto__;
})()
})();
var state__26936__auto__ = (function (){var statearr_69099 = f__26935__auto__();
(statearr_69099[(6)] = c__26934__auto___69459);

return statearr_69099;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__26936__auto__);
}));


var c__26934__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__26935__auto__ = (function (){var switch__26849__auto__ = (function (state_69123){
var state_val_69124 = (state_69123[(1)]);
if((state_val_69124 === (1))){
var inst_69100 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_69101 = cljs.core.random_uuid();
var state_69123__$1 = (function (){var statearr_69125 = state_69123;
(statearr_69125[(7)] = inst_69100);

(statearr_69125[(8)] = inst_69101);

return statearr_69125;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_69123__$1,(2),bfuncs.app.worker_channel);
} else {
if((state_val_69124 === (2))){
var inst_69100 = (state_69123[(7)]);
var inst_69101 = (state_69123[(8)]);
var inst_69103 = (state_69123[(9)]);
var inst_69103__$1 = (state_69123[(2)]);
var inst_69105 = (inst_69103__$1["addEventListener"]);
var inst_69106 = (function (){var out_port__30025__auto__ = inst_69100;
var task_id__30026__auto__ = inst_69101;
var _worker = inst_69103__$1;
var G__69104 = inst_69103__$1;
var obj__27297__auto__ = inst_69103__$1;
var f__27298__auto__ = inst_69105;
return (function bfuncs$app$minimize_and_stuff_$_handle_message__30027__auto__(event__30028__auto__){
var data__30029__auto__ = (function (){var obj69126 = event__30028__auto__;
var k69127 = "data";
if((function (){var obj69128 = obj69126;
return (((!((obj69128 == null)))) && (applied_science.js_interop.impl.in_QMARK__STAR_(k69127,obj69128)));
})()){
return (obj69126[k69127]);
} else {
return undefined;
}
})();
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(task_id__30026__auto__,cljs.core.uuid((function (){var obj69129 = data__30029__auto__;
var k69130 = "task-id";
if((function (){var obj69131 = obj69129;
return (((!((obj69131 == null)))) && (applied_science.js_interop.impl.in_QMARK__STAR_(k69130,obj69131)));
})()){
return (obj69129[k69130]);
} else {
return undefined;
}
})()))){
var obj__27297__auto___69465__$1 = _worker;
var f__27298__auto___69466__$1 = (obj__27297__auto___69465__$1["removeEventListener"]);
f__27298__auto___69466__$1.call(obj__27297__auto___69465__$1,"message",bfuncs$app$minimize_and_stuff_$_handle_message__30027__auto__);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((function (){var obj69132 = data__30029__auto__;
var k69133 = "type";
if((function (){var obj69134 = obj69132;
return (((!((obj69134 == null)))) && (applied_science.js_interop.impl.in_QMARK__STAR_(k69133,obj69134)));
})()){
return (obj69132[k69133]);
} else {
return undefined;
}
})(),"error")){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Worker error",data__30029__auto__);
} else {
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(out_port__30025__auto__,(function (){var obj69135 = data__30029__auto__;
var k69136 = "value";
if((function (){var obj69137 = obj69135;
return (((!((obj69137 == null)))) && (applied_science.js_interop.impl.in_QMARK__STAR_(k69136,obj69137)));
})()){
return (obj69135[k69136]);
} else {
return undefined;
}
})());
}
} else {
return null;
}
});
})();
var inst_69107 = inst_69105.call(inst_69103__$1,"message",inst_69106);
var inst_69108 = (inst_69103__$1["postMessage"]);
var inst_69109 = [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"task-id","task-id",-1045480126),new cljs.core.Keyword(null,"task","task",-1476607993)];
var inst_69110 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_69111 = [vars,fvals];
var inst_69112 = (new cljs.core.PersistentVector(null,2,(5),inst_69110,inst_69111,null));
var inst_69113 = cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_69101);
var inst_69114 = [inst_69112,inst_69113,"min-poss"];
var inst_69115 = cljs.core.PersistentHashMap.fromArrays(inst_69109,inst_69114);
var inst_69116 = cljs.core.clj__GT_js(inst_69115);
var inst_69117 = inst_69108.call(inst_69103__$1,inst_69116);
var state_69123__$1 = (function (){var statearr_69138 = state_69123;
(statearr_69138[(10)] = inst_69107);

(statearr_69138[(11)] = inst_69117);

(statearr_69138[(9)] = inst_69103__$1);

return statearr_69138;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_69123__$1,(3),inst_69100);
} else {
if((state_val_69124 === (3))){
var inst_69103 = (state_69123[(9)]);
var inst_69119 = (state_69123[(2)]);
var inst_69120 = cljs.core.reset_BANG_(bfuncs.app._BANG_minimal_poss,inst_69119);
var inst_69121 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(bfuncs.app.worker_channel,inst_69103);
var state_69123__$1 = (function (){var statearr_69139 = state_69123;
(statearr_69139[(12)] = inst_69121);

return statearr_69139;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_69123__$1,inst_69120);
} else {
return null;
}
}
}
});
return (function() {
var bfuncs$app$minimize_and_stuff_$_state_machine__26850__auto__ = null;
var bfuncs$app$minimize_and_stuff_$_state_machine__26850__auto____0 = (function (){
var statearr_69140 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_69140[(0)] = bfuncs$app$minimize_and_stuff_$_state_machine__26850__auto__);

(statearr_69140[(1)] = (1));

return statearr_69140;
});
var bfuncs$app$minimize_and_stuff_$_state_machine__26850__auto____1 = (function (state_69123){
while(true){
var ret_value__26851__auto__ = (function (){try{while(true){
var result__26852__auto__ = switch__26849__auto__(state_69123);
if(cljs.core.keyword_identical_QMARK_(result__26852__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26852__auto__;
}
break;
}
}catch (e69141){var ex__26853__auto__ = e69141;
var statearr_69142_69467 = state_69123;
(statearr_69142_69467[(2)] = ex__26853__auto__);


if(cljs.core.seq((state_69123[(4)]))){
var statearr_69143_69468 = state_69123;
(statearr_69143_69468[(1)] = cljs.core.first((state_69123[(4)])));

} else {
throw ex__26853__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__26851__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__69469 = state_69123;
state_69123 = G__69469;
continue;
} else {
return ret_value__26851__auto__;
}
break;
}
});
bfuncs$app$minimize_and_stuff_$_state_machine__26850__auto__ = function(state_69123){
switch(arguments.length){
case 0:
return bfuncs$app$minimize_and_stuff_$_state_machine__26850__auto____0.call(this);
case 1:
return bfuncs$app$minimize_and_stuff_$_state_machine__26850__auto____1.call(this,state_69123);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
bfuncs$app$minimize_and_stuff_$_state_machine__26850__auto__.cljs$core$IFn$_invoke$arity$0 = bfuncs$app$minimize_and_stuff_$_state_machine__26850__auto____0;
bfuncs$app$minimize_and_stuff_$_state_machine__26850__auto__.cljs$core$IFn$_invoke$arity$1 = bfuncs$app$minimize_and_stuff_$_state_machine__26850__auto____1;
return bfuncs$app$minimize_and_stuff_$_state_machine__26850__auto__;
})()
})();
var state__26936__auto__ = (function (){var statearr_69144 = f__26935__auto__();
(statearr_69144[(6)] = c__26934__auto__);

return statearr_69144;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__26936__auto__);
}));

return c__26934__auto__;
} else {
return null;
}
});
bfuncs.app.handle_success_BANG_ = (function bfuncs$app$handle_success_BANG_(p__69146){
var map__69147 = p__69146;
var map__69147__$1 = (((((!((map__69147 == null))))?(((((map__69147.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__69147.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__69147):map__69147);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69147__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var vars = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69147__$1,new cljs.core.Keyword(null,"vars","vars",-2046957217));
var tree = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69147__$1,new cljs.core.Keyword(null,"tree","tree",-196312028));
var terms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69147__$1,new cljs.core.Keyword(null,"terms","terms",-1556977978));
var G__69149 = type;
var G__69149__$1 = (((G__69149 instanceof cljs.core.Keyword))?G__69149.fqn:null);
switch (G__69149__$1) {
case "expression":
var nvars = cljs.core.count(vars);
cljs.core.reset_BANG_(bfuncs.app._BANG_parsed_variables,vars);

cljs.core.reset_BANG_(bfuncs.app._BANG_parsed_expression,tree);

var c__26934__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__26935__auto__ = (function (){var switch__26849__auto__ = (function (state_69241){
var state_val_69242 = (state_69241[(1)]);
if((state_val_69242 === (7))){
var inst_69182 = (state_69241[(7)]);
var inst_69187 = inst_69182.cljs$lang$protocol_mask$partition0$;
var inst_69188 = (inst_69187 & (64));
var inst_69189 = inst_69182.cljs$core$ISeq$;
var inst_69190 = (cljs.core.PROTOCOL_SENTINEL === inst_69189);
var inst_69191 = ((inst_69188) || (inst_69190));
var state_69241__$1 = state_69241;
if(cljs.core.truth_(inst_69191)){
var statearr_69243_69471 = state_69241__$1;
(statearr_69243_69471[(1)] = (10));

} else {
var statearr_69244_69472 = state_69241__$1;
(statearr_69244_69472[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69242 === (1))){
var inst_69150 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_69151 = cljs.core.random_uuid();
var state_69241__$1 = (function (){var statearr_69245 = state_69241;
(statearr_69245[(8)] = inst_69150);

(statearr_69245[(9)] = inst_69151);

return statearr_69245;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_69241__$1,(2),bfuncs.app.worker_channel);
} else {
if((state_val_69242 === (4))){
var inst_69170 = (state_69241[(10)]);
var inst_69174 = bfuncs.app.minimize_and_stuff(inst_69170,vars);
var state_69241__$1 = state_69241;
var statearr_69246_69473 = state_69241__$1;
(statearr_69246_69473[(2)] = inst_69174);

(statearr_69246_69473[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69242 === (15))){
var inst_69204 = (state_69241[(11)]);
var inst_69203 = (state_69241[(12)]);
var inst_69203__$1 = (state_69241[(2)]);
var inst_69204__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_69203__$1,new cljs.core.Keyword(null,"fully-specified","fully-specified",-1714668434));
var inst_69205 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_69203__$1,new cljs.core.Keyword(null,"digit-string","digit-string",1021424763));
var state_69241__$1 = (function (){var statearr_69247 = state_69241;
(statearr_69247[(13)] = inst_69205);

(statearr_69247[(11)] = inst_69204__$1);

(statearr_69247[(12)] = inst_69203__$1);

return statearr_69247;
})();
if(cljs.core.truth_(inst_69204__$1)){
var statearr_69248_69474 = state_69241__$1;
(statearr_69248_69474[(1)] = (16));

} else {
var statearr_69249_69475 = state_69241__$1;
(statearr_69249_69475[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69242 === (13))){
var inst_69182 = (state_69241[(7)]);
var inst_69200 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_69182);
var state_69241__$1 = state_69241;
var statearr_69250_69476 = state_69241__$1;
(statearr_69250_69476[(2)] = inst_69200);

(statearr_69250_69476[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69242 === (6))){
var inst_69170 = (state_69241[(10)]);
var inst_69182 = (state_69241[(7)]);
var inst_69177 = (state_69241[(2)]);
var inst_69179 = (nvars <= (5));
var inst_69180 = module$bfuncs$jsUtils.functionProperties(inst_69170,nvars,inst_69179);
var inst_69181 = cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$variadic(inst_69180,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true], 0));
var inst_69182__$1 = cljs.core.reset_BANG_(bfuncs.app._BANG_function_properties,inst_69181);
var inst_69184 = (inst_69182__$1 == null);
var inst_69185 = cljs.core.not(inst_69184);
var state_69241__$1 = (function (){var statearr_69251 = state_69241;
(statearr_69251[(7)] = inst_69182__$1);

(statearr_69251[(14)] = inst_69177);

return statearr_69251;
})();
if(inst_69185){
var statearr_69252_69477 = state_69241__$1;
(statearr_69252_69477[(1)] = (7));

} else {
var statearr_69253_69478 = state_69241__$1;
(statearr_69253_69478[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69242 === (17))){
var state_69241__$1 = state_69241;
var statearr_69254_69479 = state_69241__$1;
(statearr_69254_69479[(2)] = null);

(statearr_69254_69479[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69242 === (3))){
var inst_69170 = (state_69241[(10)]);
var inst_69170__$1 = (state_69241[(2)]);
var inst_69171 = cljs.core.reset_BANG_(bfuncs.app._BANG_results_ready,true);
var inst_69172 = cljs.core.reset_BANG_(bfuncs.app._BANG_function_values,inst_69170__$1);
var state_69241__$1 = (function (){var statearr_69255 = state_69241;
(statearr_69255[(10)] = inst_69170__$1);

(statearr_69255[(15)] = inst_69172);

(statearr_69255[(16)] = inst_69171);

return statearr_69255;
})();
if(cljs.core.truth_(inst_69170__$1)){
var statearr_69256_69480 = state_69241__$1;
(statearr_69256_69480[(1)] = (4));

} else {
var statearr_69257_69481 = state_69241__$1;
(statearr_69257_69481[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69242 === (12))){
var inst_69195 = (state_69241[(2)]);
var state_69241__$1 = state_69241;
var statearr_69258_69482 = state_69241__$1;
(statearr_69258_69482[(2)] = inst_69195);

(statearr_69258_69482[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69242 === (2))){
var inst_69153 = (state_69241[(17)]);
var inst_69150 = (state_69241[(8)]);
var inst_69151 = (state_69241[(9)]);
var inst_69153__$1 = (state_69241[(2)]);
var inst_69155 = (inst_69153__$1["addEventListener"]);
var inst_69156 = (function (){var out_port__30025__auto__ = inst_69150;
var task_id__30026__auto__ = inst_69151;
var _worker = inst_69153__$1;
var G__69154 = inst_69153__$1;
var obj__27297__auto__ = inst_69153__$1;
var f__27298__auto__ = inst_69155;
return (function bfuncs$app$handle_success_BANG__$_handle_message__30027__auto__(event__30028__auto__){
var data__30029__auto__ = (function (){var obj69259 = event__30028__auto__;
var k69260 = "data";
if((function (){var obj69261 = obj69259;
return (((!((obj69261 == null)))) && (applied_science.js_interop.impl.in_QMARK__STAR_(k69260,obj69261)));
})()){
return (obj69259[k69260]);
} else {
return undefined;
}
})();
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(task_id__30026__auto__,cljs.core.uuid((function (){var obj69262 = data__30029__auto__;
var k69263 = "task-id";
if((function (){var obj69264 = obj69262;
return (((!((obj69264 == null)))) && (applied_science.js_interop.impl.in_QMARK__STAR_(k69263,obj69264)));
})()){
return (obj69262[k69263]);
} else {
return undefined;
}
})()))){
var obj__27297__auto___69483__$1 = _worker;
var f__27298__auto___69484__$1 = (obj__27297__auto___69483__$1["removeEventListener"]);
f__27298__auto___69484__$1.call(obj__27297__auto___69483__$1,"message",bfuncs$app$handle_success_BANG__$_handle_message__30027__auto__);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((function (){var obj69265 = data__30029__auto__;
var k69266 = "type";
if((function (){var obj69267 = obj69265;
return (((!((obj69267 == null)))) && (applied_science.js_interop.impl.in_QMARK__STAR_(k69266,obj69267)));
})()){
return (obj69265[k69266]);
} else {
return undefined;
}
})(),"error")){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Worker error",data__30029__auto__);
} else {
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(out_port__30025__auto__,(function (){var obj69268 = data__30029__auto__;
var k69269 = "value";
if((function (){var obj69270 = obj69268;
return (((!((obj69270 == null)))) && (applied_science.js_interop.impl.in_QMARK__STAR_(k69269,obj69270)));
})()){
return (obj69268[k69269]);
} else {
return undefined;
}
})());
}
} else {
return null;
}
});
})();
var inst_69157 = inst_69155.call(inst_69153__$1,"message",inst_69156);
var inst_69158 = (inst_69153__$1["postMessage"]);
var inst_69159 = [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"task-id","task-id",-1045480126),new cljs.core.Keyword(null,"task","task",-1476607993)];
var inst_69160 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_69161 = bfuncs.parsing.__GT_js_fn_strs(vars,tree);
var inst_69162 = [inst_69161,nvars];
var inst_69163 = (new cljs.core.PersistentVector(null,2,(5),inst_69160,inst_69162,null));
var inst_69164 = cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_69151);
var inst_69165 = [inst_69163,inst_69164,"function-bytes"];
var inst_69166 = cljs.core.PersistentHashMap.fromArrays(inst_69159,inst_69165);
var inst_69167 = cljs.core.clj__GT_js(inst_69166);
var inst_69168 = inst_69158.call(inst_69153__$1,inst_69167);
var state_69241__$1 = (function (){var statearr_69271 = state_69241;
(statearr_69271[(17)] = inst_69153__$1);

(statearr_69271[(18)] = inst_69157);

(statearr_69271[(19)] = inst_69168);

return statearr_69271;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_69241__$1,(3),inst_69150);
} else {
if((state_val_69242 === (11))){
var state_69241__$1 = state_69241;
var statearr_69272_69485 = state_69241__$1;
(statearr_69272_69485[(2)] = false);

(statearr_69272_69485[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69242 === (9))){
var inst_69198 = (state_69241[(2)]);
var state_69241__$1 = state_69241;
if(cljs.core.truth_(inst_69198)){
var statearr_69273_69486 = state_69241__$1;
(statearr_69273_69486[(1)] = (13));

} else {
var statearr_69274_69487 = state_69241__$1;
(statearr_69274_69487[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69242 === (5))){
var state_69241__$1 = state_69241;
var statearr_69275_69488 = state_69241__$1;
(statearr_69275_69488[(2)] = null);

(statearr_69275_69488[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69242 === (14))){
var inst_69182 = (state_69241[(7)]);
var state_69241__$1 = state_69241;
var statearr_69276_69489 = state_69241__$1;
(statearr_69276_69489[(2)] = inst_69182);

(statearr_69276_69489[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69242 === (16))){
var inst_69170 = (state_69241[(10)]);
var inst_69205 = (state_69241[(13)]);
var inst_69204 = (state_69241[(11)]);
var inst_69153 = (state_69241[(17)]);
var inst_69203 = (state_69241[(12)]);
var inst_69150 = (state_69241[(8)]);
var inst_69151 = (state_69241[(9)]);
var inst_69233 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_69234 = (function (){var out_port__30025__auto__ = inst_69150;
var task_id__30026__auto__ = inst_69151;
var _worker = inst_69153;
var fvals = inst_69170;
var map__69178 = inst_69203;
var fully_specified = inst_69204;
var digit_string = inst_69205;
var c__26934__auto____$1 = inst_69233;
return (function (){
var f__26935__auto__ = (function (){var switch__26849__auto__ = (function (state_69231){
var state_val_69232 = (state_69231[(1)]);
if((state_val_69232 === (1))){
var inst_69207 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_69208 = cljs.core.random_uuid();
var state_69231__$1 = (function (){var statearr_69277 = state_69231;
(statearr_69277[(7)] = inst_69207);

(statearr_69277[(8)] = inst_69208);

return statearr_69277;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_69231__$1,(2),bfuncs.app.worker_channel);
} else {
if((state_val_69232 === (2))){
var inst_69207 = (state_69231[(7)]);
var inst_69210 = (state_69231[(9)]);
var inst_69208 = (state_69231[(8)]);
var inst_69210__$1 = (state_69231[(2)]);
var inst_69212 = (inst_69210__$1["addEventListener"]);
var inst_69213 = (function (){var out_port__30025__auto____$1 = inst_69207;
var task_id__30026__auto____$1 = inst_69208;
var _worker__$1 = inst_69210__$1;
var G__69211 = inst_69210__$1;
var obj__27297__auto__ = inst_69210__$1;
var f__27298__auto__ = inst_69212;
return (function bfuncs$app$handle_success_BANG__$_handle_message__30027__auto__(event__30028__auto__){
var data__30029__auto__ = (function (){var obj69278 = event__30028__auto__;
var k69279 = "data";
if((function (){var obj69280 = obj69278;
return (((!((obj69280 == null)))) && (applied_science.js_interop.impl.in_QMARK__STAR_(k69279,obj69280)));
})()){
return (obj69278[k69279]);
} else {
return undefined;
}
})();
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(task_id__30026__auto____$1,cljs.core.uuid((function (){var obj69281 = data__30029__auto__;
var k69282 = "task-id";
if((function (){var obj69283 = obj69281;
return (((!((obj69283 == null)))) && (applied_science.js_interop.impl.in_QMARK__STAR_(k69282,obj69283)));
})()){
return (obj69281[k69282]);
} else {
return undefined;
}
})()))){
var obj__27297__auto___69490__$1 = _worker__$1;
var f__27298__auto___69491__$1 = (obj__27297__auto___69490__$1["removeEventListener"]);
f__27298__auto___69491__$1.call(obj__27297__auto___69490__$1,"message",bfuncs$app$handle_success_BANG__$_handle_message__30027__auto__);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((function (){var obj69284 = data__30029__auto__;
var k69285 = "type";
if((function (){var obj69286 = obj69284;
return (((!((obj69286 == null)))) && (applied_science.js_interop.impl.in_QMARK__STAR_(k69285,obj69286)));
})()){
return (obj69284[k69285]);
} else {
return undefined;
}
})(),"error")){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Worker error",data__30029__auto__);
} else {
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(out_port__30025__auto____$1,(function (){var obj69287 = data__30029__auto__;
var k69288 = "value";
if((function (){var obj69289 = obj69287;
return (((!((obj69289 == null)))) && (applied_science.js_interop.impl.in_QMARK__STAR_(k69288,obj69289)));
})()){
return (obj69287[k69288]);
} else {
return undefined;
}
})());
}
} else {
return null;
}
});
})();
var inst_69214 = inst_69212.call(inst_69210__$1,"message",inst_69213);
var inst_69215 = (inst_69210__$1["postMessage"]);
var inst_69216 = [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"task-id","task-id",-1045480126),new cljs.core.Keyword(null,"task","task",-1476607993)];
var inst_69217 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_69218 = [vars,digit_string];
var inst_69219 = (new cljs.core.PersistentVector(null,2,(5),inst_69217,inst_69218,null));
var inst_69220 = cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_69208);
var inst_69221 = [inst_69219,inst_69220,"zhegalkin-polynomial"];
var inst_69222 = cljs.core.PersistentHashMap.fromArrays(inst_69216,inst_69221);
var inst_69223 = cljs.core.clj__GT_js(inst_69222);
var inst_69224 = inst_69215.call(inst_69210__$1,inst_69223);
var state_69231__$1 = (function (){var statearr_69290 = state_69231;
(statearr_69290[(9)] = inst_69210__$1);

(statearr_69290[(10)] = inst_69214);

(statearr_69290[(11)] = inst_69224);

return statearr_69290;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_69231__$1,(3),inst_69207);
} else {
if((state_val_69232 === (3))){
var inst_69210 = (state_69231[(9)]);
var inst_69226 = (state_69231[(2)]);
var inst_69227 = bfuncs.utils.echod.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"anf","anf",-1509782504),inst_69226);
var inst_69228 = cljs.core.reset_BANG_(bfuncs.app._BANG_anf,inst_69227);
var inst_69229 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(bfuncs.app.worker_channel,inst_69210);
var state_69231__$1 = (function (){var statearr_69291 = state_69231;
(statearr_69291[(12)] = inst_69229);

return statearr_69291;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_69231__$1,inst_69228);
} else {
return null;
}
}
}
});
return (function() {
var bfuncs$app$handle_success_BANG__$_state_machine__26850__auto__ = null;
var bfuncs$app$handle_success_BANG__$_state_machine__26850__auto____0 = (function (){
var statearr_69292 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_69292[(0)] = bfuncs$app$handle_success_BANG__$_state_machine__26850__auto__);

(statearr_69292[(1)] = (1));

return statearr_69292;
});
var bfuncs$app$handle_success_BANG__$_state_machine__26850__auto____1 = (function (state_69231){
while(true){
var ret_value__26851__auto__ = (function (){try{while(true){
var result__26852__auto__ = switch__26849__auto__(state_69231);
if(cljs.core.keyword_identical_QMARK_(result__26852__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26852__auto__;
}
break;
}
}catch (e69293){var ex__26853__auto__ = e69293;
var statearr_69294_69492 = state_69231;
(statearr_69294_69492[(2)] = ex__26853__auto__);


if(cljs.core.seq((state_69231[(4)]))){
var statearr_69295_69493 = state_69231;
(statearr_69295_69493[(1)] = cljs.core.first((state_69231[(4)])));

} else {
throw ex__26853__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__26851__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__69494 = state_69231;
state_69231 = G__69494;
continue;
} else {
return ret_value__26851__auto__;
}
break;
}
});
bfuncs$app$handle_success_BANG__$_state_machine__26850__auto__ = function(state_69231){
switch(arguments.length){
case 0:
return bfuncs$app$handle_success_BANG__$_state_machine__26850__auto____0.call(this);
case 1:
return bfuncs$app$handle_success_BANG__$_state_machine__26850__auto____1.call(this,state_69231);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
bfuncs$app$handle_success_BANG__$_state_machine__26850__auto__.cljs$core$IFn$_invoke$arity$0 = bfuncs$app$handle_success_BANG__$_state_machine__26850__auto____0;
bfuncs$app$handle_success_BANG__$_state_machine__26850__auto__.cljs$core$IFn$_invoke$arity$1 = bfuncs$app$handle_success_BANG__$_state_machine__26850__auto____1;
return bfuncs$app$handle_success_BANG__$_state_machine__26850__auto__;
})()
})();
var state__26936__auto__ = (function (){var statearr_69296 = f__26935__auto__();
(statearr_69296[(6)] = c__26934__auto____$1);

return statearr_69296;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__26936__auto__);
});
})();
var inst_69235 = cljs.core.async.impl.dispatch.run(inst_69234);
var state_69241__$1 = (function (){var statearr_69297 = state_69241;
(statearr_69297[(20)] = inst_69235);

return statearr_69297;
})();
var statearr_69298_69495 = state_69241__$1;
(statearr_69298_69495[(2)] = inst_69233);

(statearr_69298_69495[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69242 === (10))){
var state_69241__$1 = state_69241;
var statearr_69299_69496 = state_69241__$1;
(statearr_69299_69496[(2)] = true);

(statearr_69299_69496[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69242 === (18))){
var inst_69153 = (state_69241[(17)]);
var inst_69238 = (state_69241[(2)]);
var inst_69239 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(bfuncs.app.worker_channel,inst_69153);
var state_69241__$1 = (function (){var statearr_69300 = state_69241;
(statearr_69300[(21)] = inst_69239);

return statearr_69300;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_69241__$1,inst_69238);
} else {
if((state_val_69242 === (8))){
var state_69241__$1 = state_69241;
var statearr_69301_69497 = state_69241__$1;
(statearr_69301_69497[(2)] = false);

(statearr_69301_69497[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
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
}
}
}
}
});
return (function() {
var bfuncs$app$handle_success_BANG__$_state_machine__26850__auto__ = null;
var bfuncs$app$handle_success_BANG__$_state_machine__26850__auto____0 = (function (){
var statearr_69302 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_69302[(0)] = bfuncs$app$handle_success_BANG__$_state_machine__26850__auto__);

(statearr_69302[(1)] = (1));

return statearr_69302;
});
var bfuncs$app$handle_success_BANG__$_state_machine__26850__auto____1 = (function (state_69241){
while(true){
var ret_value__26851__auto__ = (function (){try{while(true){
var result__26852__auto__ = switch__26849__auto__(state_69241);
if(cljs.core.keyword_identical_QMARK_(result__26852__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26852__auto__;
}
break;
}
}catch (e69303){var ex__26853__auto__ = e69303;
var statearr_69304_69498 = state_69241;
(statearr_69304_69498[(2)] = ex__26853__auto__);


if(cljs.core.seq((state_69241[(4)]))){
var statearr_69305_69499 = state_69241;
(statearr_69305_69499[(1)] = cljs.core.first((state_69241[(4)])));

} else {
throw ex__26853__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__26851__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__69500 = state_69241;
state_69241 = G__69500;
continue;
} else {
return ret_value__26851__auto__;
}
break;
}
});
bfuncs$app$handle_success_BANG__$_state_machine__26850__auto__ = function(state_69241){
switch(arguments.length){
case 0:
return bfuncs$app$handle_success_BANG__$_state_machine__26850__auto____0.call(this);
case 1:
return bfuncs$app$handle_success_BANG__$_state_machine__26850__auto____1.call(this,state_69241);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
bfuncs$app$handle_success_BANG__$_state_machine__26850__auto__.cljs$core$IFn$_invoke$arity$0 = bfuncs$app$handle_success_BANG__$_state_machine__26850__auto____0;
bfuncs$app$handle_success_BANG__$_state_machine__26850__auto__.cljs$core$IFn$_invoke$arity$1 = bfuncs$app$handle_success_BANG__$_state_machine__26850__auto____1;
return bfuncs$app$handle_success_BANG__$_state_machine__26850__auto__;
})()
})();
var state__26936__auto__ = (function (){var statearr_69306 = f__26935__auto__();
(statearr_69306[(6)] = c__26934__auto__);

return statearr_69306;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__26936__auto__);
}));

return c__26934__auto__;

break;
case "minterms":
var arity = Math.ceil(Math.log2((cljs.core.transduce.cljs$core$IFn$_invoke$arity$3(cljs.core.cat,cljs.core.max,terms) + (1))));
var vars__$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__69145_SHARP_){
return ["x_",cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__69145_SHARP_)].join('');
}),cljs.core.range.cljs$core$IFn$_invoke$arity$1(arity));
var c__26934__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__26935__auto__ = (function (){var switch__26849__auto__ = (function (state_69394){
var state_val_69395 = (state_69394[(1)]);
if((state_val_69395 === (7))){
var state_69394__$1 = state_69394;
var statearr_69396_69501 = state_69394__$1;
(statearr_69396_69501[(2)] = true);

(statearr_69396_69501[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69395 === (1))){
var inst_69307 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_69308 = cljs.core.random_uuid();
var state_69394__$1 = (function (){var statearr_69397 = state_69394;
(statearr_69397[(7)] = inst_69307);

(statearr_69397[(8)] = inst_69308);

return statearr_69397;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_69394__$1,(2),bfuncs.app.worker_channel);
} else {
if((state_val_69395 === (4))){
var inst_69335 = (state_69394[(9)]);
var inst_69340 = inst_69335.cljs$lang$protocol_mask$partition0$;
var inst_69341 = (inst_69340 & (64));
var inst_69342 = inst_69335.cljs$core$ISeq$;
var inst_69343 = (cljs.core.PROTOCOL_SENTINEL === inst_69342);
var inst_69344 = ((inst_69341) || (inst_69343));
var state_69394__$1 = state_69394;
if(cljs.core.truth_(inst_69344)){
var statearr_69398_69502 = state_69394__$1;
(statearr_69398_69502[(1)] = (7));

} else {
var statearr_69399_69503 = state_69394__$1;
(statearr_69399_69503[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69395 === (15))){
var inst_69310 = (state_69394[(10)]);
var inst_69391 = (state_69394[(2)]);
var inst_69392 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(bfuncs.app.worker_channel,inst_69310);
var state_69394__$1 = (function (){var statearr_69400 = state_69394;
(statearr_69400[(11)] = inst_69392);

return statearr_69400;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_69394__$1,inst_69391);
} else {
if((state_val_69395 === (13))){
var inst_69357 = (state_69394[(12)]);
var inst_69356 = (state_69394[(13)]);
var inst_69310 = (state_69394[(10)]);
var inst_69307 = (state_69394[(7)]);
var inst_69308 = (state_69394[(8)]);
var inst_69326 = (state_69394[(14)]);
var inst_69358 = (state_69394[(15)]);
var inst_69386 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_69387 = (function (){var out_port__30025__auto__ = inst_69307;
var task_id__30026__auto__ = inst_69308;
var _worker = inst_69310;
var fvals = inst_69326;
var map__69331 = inst_69356;
var fully_specified = inst_69357;
var digit_string = inst_69358;
var c__26934__auto____$1 = inst_69386;
return (function (){
var f__26935__auto__ = (function (){var switch__26849__auto__ = (function (state_69384){
var state_val_69385 = (state_69384[(1)]);
if((state_val_69385 === (1))){
var inst_69360 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_69361 = cljs.core.random_uuid();
var state_69384__$1 = (function (){var statearr_69401 = state_69384;
(statearr_69401[(7)] = inst_69360);

(statearr_69401[(8)] = inst_69361);

return statearr_69401;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_69384__$1,(2),bfuncs.app.worker_channel);
} else {
if((state_val_69385 === (2))){
var inst_69360 = (state_69384[(7)]);
var inst_69361 = (state_69384[(8)]);
var inst_69363 = (state_69384[(9)]);
var inst_69363__$1 = (state_69384[(2)]);
var inst_69365 = (inst_69363__$1["addEventListener"]);
var inst_69366 = (function (){var out_port__30025__auto____$1 = inst_69360;
var task_id__30026__auto____$1 = inst_69361;
var _worker__$1 = inst_69363__$1;
var G__69364 = inst_69363__$1;
var obj__27297__auto__ = inst_69363__$1;
var f__27298__auto__ = inst_69365;
return (function bfuncs$app$handle_success_BANG__$_handle_message__30027__auto__(event__30028__auto__){
var data__30029__auto__ = (function (){var obj69402 = event__30028__auto__;
var k69403 = "data";
if((function (){var obj69404 = obj69402;
return (((!((obj69404 == null)))) && (applied_science.js_interop.impl.in_QMARK__STAR_(k69403,obj69404)));
})()){
return (obj69402[k69403]);
} else {
return undefined;
}
})();
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(task_id__30026__auto____$1,cljs.core.uuid((function (){var obj69405 = data__30029__auto__;
var k69406 = "task-id";
if((function (){var obj69407 = obj69405;
return (((!((obj69407 == null)))) && (applied_science.js_interop.impl.in_QMARK__STAR_(k69406,obj69407)));
})()){
return (obj69405[k69406]);
} else {
return undefined;
}
})()))){
var obj__27297__auto___69504__$1 = _worker__$1;
var f__27298__auto___69505__$1 = (obj__27297__auto___69504__$1["removeEventListener"]);
f__27298__auto___69505__$1.call(obj__27297__auto___69504__$1,"message",bfuncs$app$handle_success_BANG__$_handle_message__30027__auto__);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((function (){var obj69408 = data__30029__auto__;
var k69409 = "type";
if((function (){var obj69410 = obj69408;
return (((!((obj69410 == null)))) && (applied_science.js_interop.impl.in_QMARK__STAR_(k69409,obj69410)));
})()){
return (obj69408[k69409]);
} else {
return undefined;
}
})(),"error")){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Worker error",data__30029__auto__);
} else {
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(out_port__30025__auto____$1,(function (){var obj69411 = data__30029__auto__;
var k69412 = "value";
if((function (){var obj69413 = obj69411;
return (((!((obj69413 == null)))) && (applied_science.js_interop.impl.in_QMARK__STAR_(k69412,obj69413)));
})()){
return (obj69411[k69412]);
} else {
return undefined;
}
})());
}
} else {
return null;
}
});
})();
var inst_69367 = inst_69365.call(inst_69363__$1,"message",inst_69366);
var inst_69368 = (inst_69363__$1["postMessage"]);
var inst_69369 = [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"task-id","task-id",-1045480126),new cljs.core.Keyword(null,"task","task",-1476607993)];
var inst_69370 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_69371 = [vars__$1,digit_string];
var inst_69372 = (new cljs.core.PersistentVector(null,2,(5),inst_69370,inst_69371,null));
var inst_69373 = cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_69361);
var inst_69374 = [inst_69372,inst_69373,"zhegalkin-polynomial"];
var inst_69375 = cljs.core.PersistentHashMap.fromArrays(inst_69369,inst_69374);
var inst_69376 = cljs.core.clj__GT_js(inst_69375);
var inst_69377 = inst_69368.call(inst_69363__$1,inst_69376);
var state_69384__$1 = (function (){var statearr_69414 = state_69384;
(statearr_69414[(10)] = inst_69377);

(statearr_69414[(9)] = inst_69363__$1);

(statearr_69414[(11)] = inst_69367);

return statearr_69414;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_69384__$1,(3),inst_69360);
} else {
if((state_val_69385 === (3))){
var inst_69363 = (state_69384[(9)]);
var inst_69379 = (state_69384[(2)]);
var inst_69380 = bfuncs.utils.echod.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"anf","anf",-1509782504),inst_69379);
var inst_69381 = cljs.core.reset_BANG_(bfuncs.app._BANG_anf,inst_69380);
var inst_69382 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(bfuncs.app.worker_channel,inst_69363);
var state_69384__$1 = (function (){var statearr_69415 = state_69384;
(statearr_69415[(12)] = inst_69382);

return statearr_69415;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_69384__$1,inst_69381);
} else {
return null;
}
}
}
});
return (function() {
var bfuncs$app$handle_success_BANG__$_state_machine__26850__auto__ = null;
var bfuncs$app$handle_success_BANG__$_state_machine__26850__auto____0 = (function (){
var statearr_69416 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_69416[(0)] = bfuncs$app$handle_success_BANG__$_state_machine__26850__auto__);

(statearr_69416[(1)] = (1));

return statearr_69416;
});
var bfuncs$app$handle_success_BANG__$_state_machine__26850__auto____1 = (function (state_69384){
while(true){
var ret_value__26851__auto__ = (function (){try{while(true){
var result__26852__auto__ = switch__26849__auto__(state_69384);
if(cljs.core.keyword_identical_QMARK_(result__26852__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26852__auto__;
}
break;
}
}catch (e69417){var ex__26853__auto__ = e69417;
var statearr_69418_69506 = state_69384;
(statearr_69418_69506[(2)] = ex__26853__auto__);


if(cljs.core.seq((state_69384[(4)]))){
var statearr_69419_69507 = state_69384;
(statearr_69419_69507[(1)] = cljs.core.first((state_69384[(4)])));

} else {
throw ex__26853__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__26851__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__69508 = state_69384;
state_69384 = G__69508;
continue;
} else {
return ret_value__26851__auto__;
}
break;
}
});
bfuncs$app$handle_success_BANG__$_state_machine__26850__auto__ = function(state_69384){
switch(arguments.length){
case 0:
return bfuncs$app$handle_success_BANG__$_state_machine__26850__auto____0.call(this);
case 1:
return bfuncs$app$handle_success_BANG__$_state_machine__26850__auto____1.call(this,state_69384);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
bfuncs$app$handle_success_BANG__$_state_machine__26850__auto__.cljs$core$IFn$_invoke$arity$0 = bfuncs$app$handle_success_BANG__$_state_machine__26850__auto____0;
bfuncs$app$handle_success_BANG__$_state_machine__26850__auto__.cljs$core$IFn$_invoke$arity$1 = bfuncs$app$handle_success_BANG__$_state_machine__26850__auto____1;
return bfuncs$app$handle_success_BANG__$_state_machine__26850__auto__;
})()
})();
var state__26936__auto__ = (function (){var statearr_69420 = f__26935__auto__();
(statearr_69420[(6)] = c__26934__auto____$1);

return statearr_69420;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__26936__auto__);
});
})();
var inst_69388 = cljs.core.async.impl.dispatch.run(inst_69387);
var state_69394__$1 = (function (){var statearr_69421 = state_69394;
(statearr_69421[(16)] = inst_69388);

return statearr_69421;
})();
var statearr_69422_69509 = state_69394__$1;
(statearr_69422_69509[(2)] = inst_69386);

(statearr_69422_69509[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69395 === (6))){
var inst_69351 = (state_69394[(2)]);
var state_69394__$1 = state_69394;
if(cljs.core.truth_(inst_69351)){
var statearr_69423_69510 = state_69394__$1;
(statearr_69423_69510[(1)] = (10));

} else {
var statearr_69424_69511 = state_69394__$1;
(statearr_69424_69511[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69395 === (3))){
var inst_69326 = (state_69394[(14)]);
var inst_69335 = (state_69394[(9)]);
var inst_69326__$1 = (state_69394[(2)]);
var inst_69327 = cljs.core.reset_BANG_(bfuncs.app._BANG_results_ready,true);
var inst_69328 = cljs.core.reset_BANG_(bfuncs.app._BANG_function_values,inst_69326__$1);
var inst_69329 = cljs.core.reset_BANG_(bfuncs.app._BANG_parsed_variables,vars__$1);
var inst_69330 = bfuncs.app.minimize_and_stuff(inst_69326__$1,vars__$1);
var inst_69332 = (arity <= (5));
var inst_69333 = module$bfuncs$jsUtils.functionProperties(inst_69326__$1,arity,inst_69332);
var inst_69334 = cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$variadic(inst_69333,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true], 0));
var inst_69335__$1 = cljs.core.reset_BANG_(bfuncs.app._BANG_function_properties,inst_69334);
var inst_69337 = (inst_69335__$1 == null);
var inst_69338 = cljs.core.not(inst_69337);
var state_69394__$1 = (function (){var statearr_69425 = state_69394;
(statearr_69425[(17)] = inst_69327);

(statearr_69425[(18)] = inst_69329);

(statearr_69425[(19)] = inst_69330);

(statearr_69425[(14)] = inst_69326__$1);

(statearr_69425[(20)] = inst_69328);

(statearr_69425[(9)] = inst_69335__$1);

return statearr_69425;
})();
if(inst_69338){
var statearr_69426_69512 = state_69394__$1;
(statearr_69426_69512[(1)] = (4));

} else {
var statearr_69427_69513 = state_69394__$1;
(statearr_69427_69513[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69395 === (12))){
var inst_69357 = (state_69394[(12)]);
var inst_69356 = (state_69394[(13)]);
var inst_69356__$1 = (state_69394[(2)]);
var inst_69357__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_69356__$1,new cljs.core.Keyword(null,"fully-specified","fully-specified",-1714668434));
var inst_69358 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_69356__$1,new cljs.core.Keyword(null,"digit-string","digit-string",1021424763));
var state_69394__$1 = (function (){var statearr_69428 = state_69394;
(statearr_69428[(12)] = inst_69357__$1);

(statearr_69428[(13)] = inst_69356__$1);

(statearr_69428[(15)] = inst_69358);

return statearr_69428;
})();
if(cljs.core.truth_(inst_69357__$1)){
var statearr_69429_69514 = state_69394__$1;
(statearr_69429_69514[(1)] = (13));

} else {
var statearr_69430_69515 = state_69394__$1;
(statearr_69430_69515[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69395 === (2))){
var inst_69310 = (state_69394[(10)]);
var inst_69307 = (state_69394[(7)]);
var inst_69308 = (state_69394[(8)]);
var inst_69310__$1 = (state_69394[(2)]);
var inst_69312 = (inst_69310__$1["addEventListener"]);
var inst_69313 = (function (){var out_port__30025__auto__ = inst_69307;
var task_id__30026__auto__ = inst_69308;
var _worker = inst_69310__$1;
var G__69311 = inst_69310__$1;
var obj__27297__auto__ = inst_69310__$1;
var f__27298__auto__ = inst_69312;
return (function bfuncs$app$handle_success_BANG__$_handle_message__30027__auto__(event__30028__auto__){
var data__30029__auto__ = (function (){var obj69431 = event__30028__auto__;
var k69432 = "data";
if((function (){var obj69433 = obj69431;
return (((!((obj69433 == null)))) && (applied_science.js_interop.impl.in_QMARK__STAR_(k69432,obj69433)));
})()){
return (obj69431[k69432]);
} else {
return undefined;
}
})();
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(task_id__30026__auto__,cljs.core.uuid((function (){var obj69434 = data__30029__auto__;
var k69435 = "task-id";
if((function (){var obj69436 = obj69434;
return (((!((obj69436 == null)))) && (applied_science.js_interop.impl.in_QMARK__STAR_(k69435,obj69436)));
})()){
return (obj69434[k69435]);
} else {
return undefined;
}
})()))){
var obj__27297__auto___69516__$1 = _worker;
var f__27298__auto___69517__$1 = (obj__27297__auto___69516__$1["removeEventListener"]);
f__27298__auto___69517__$1.call(obj__27297__auto___69516__$1,"message",bfuncs$app$handle_success_BANG__$_handle_message__30027__auto__);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((function (){var obj69437 = data__30029__auto__;
var k69438 = "type";
if((function (){var obj69439 = obj69437;
return (((!((obj69439 == null)))) && (applied_science.js_interop.impl.in_QMARK__STAR_(k69438,obj69439)));
})()){
return (obj69437[k69438]);
} else {
return undefined;
}
})(),"error")){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Worker error",data__30029__auto__);
} else {
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(out_port__30025__auto__,(function (){var obj69440 = data__30029__auto__;
var k69441 = "value";
if((function (){var obj69442 = obj69440;
return (((!((obj69442 == null)))) && (applied_science.js_interop.impl.in_QMARK__STAR_(k69441,obj69442)));
})()){
return (obj69440[k69441]);
} else {
return undefined;
}
})());
}
} else {
return null;
}
});
})();
var inst_69314 = inst_69312.call(inst_69310__$1,"message",inst_69313);
var inst_69315 = (inst_69310__$1["postMessage"]);
var inst_69316 = [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"task-id","task-id",-1045480126),new cljs.core.Keyword(null,"task","task",-1476607993)];
var inst_69317 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_69318 = [terms,arity];
var inst_69319 = (new cljs.core.PersistentVector(null,2,(5),inst_69317,inst_69318,null));
var inst_69320 = cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_69308);
var inst_69321 = [inst_69319,inst_69320,"minterms-bytes"];
var inst_69322 = cljs.core.PersistentHashMap.fromArrays(inst_69316,inst_69321);
var inst_69323 = cljs.core.clj__GT_js(inst_69322);
var inst_69324 = inst_69315.call(inst_69310__$1,inst_69323);
var state_69394__$1 = (function (){var statearr_69443 = state_69394;
(statearr_69443[(10)] = inst_69310__$1);

(statearr_69443[(21)] = inst_69324);

(statearr_69443[(22)] = inst_69314);

return statearr_69443;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_69394__$1,(3),inst_69307);
} else {
if((state_val_69395 === (11))){
var inst_69335 = (state_69394[(9)]);
var state_69394__$1 = state_69394;
var statearr_69444_69518 = state_69394__$1;
(statearr_69444_69518[(2)] = inst_69335);

(statearr_69444_69518[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69395 === (9))){
var inst_69348 = (state_69394[(2)]);
var state_69394__$1 = state_69394;
var statearr_69445_69519 = state_69394__$1;
(statearr_69445_69519[(2)] = inst_69348);

(statearr_69445_69519[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69395 === (5))){
var state_69394__$1 = state_69394;
var statearr_69446_69520 = state_69394__$1;
(statearr_69446_69520[(2)] = false);

(statearr_69446_69520[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69395 === (14))){
var state_69394__$1 = state_69394;
var statearr_69447_69521 = state_69394__$1;
(statearr_69447_69521[(2)] = null);

(statearr_69447_69521[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69395 === (10))){
var inst_69335 = (state_69394[(9)]);
var inst_69353 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_69335);
var state_69394__$1 = state_69394;
var statearr_69448_69522 = state_69394__$1;
(statearr_69448_69522[(2)] = inst_69353);

(statearr_69448_69522[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69395 === (8))){
var state_69394__$1 = state_69394;
var statearr_69449_69523 = state_69394__$1;
(statearr_69449_69523[(2)] = false);

(statearr_69449_69523[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
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
}
});
return (function() {
var bfuncs$app$handle_success_BANG__$_state_machine__26850__auto__ = null;
var bfuncs$app$handle_success_BANG__$_state_machine__26850__auto____0 = (function (){
var statearr_69450 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_69450[(0)] = bfuncs$app$handle_success_BANG__$_state_machine__26850__auto__);

(statearr_69450[(1)] = (1));

return statearr_69450;
});
var bfuncs$app$handle_success_BANG__$_state_machine__26850__auto____1 = (function (state_69394){
while(true){
var ret_value__26851__auto__ = (function (){try{while(true){
var result__26852__auto__ = switch__26849__auto__(state_69394);
if(cljs.core.keyword_identical_QMARK_(result__26852__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26852__auto__;
}
break;
}
}catch (e69451){var ex__26853__auto__ = e69451;
var statearr_69452_69524 = state_69394;
(statearr_69452_69524[(2)] = ex__26853__auto__);


if(cljs.core.seq((state_69394[(4)]))){
var statearr_69453_69525 = state_69394;
(statearr_69453_69525[(1)] = cljs.core.first((state_69394[(4)])));

} else {
throw ex__26853__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__26851__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__69526 = state_69394;
state_69394 = G__69526;
continue;
} else {
return ret_value__26851__auto__;
}
break;
}
});
bfuncs$app$handle_success_BANG__$_state_machine__26850__auto__ = function(state_69394){
switch(arguments.length){
case 0:
return bfuncs$app$handle_success_BANG__$_state_machine__26850__auto____0.call(this);
case 1:
return bfuncs$app$handle_success_BANG__$_state_machine__26850__auto____1.call(this,state_69394);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
bfuncs$app$handle_success_BANG__$_state_machine__26850__auto__.cljs$core$IFn$_invoke$arity$0 = bfuncs$app$handle_success_BANG__$_state_machine__26850__auto____0;
bfuncs$app$handle_success_BANG__$_state_machine__26850__auto__.cljs$core$IFn$_invoke$arity$1 = bfuncs$app$handle_success_BANG__$_state_machine__26850__auto____1;
return bfuncs$app$handle_success_BANG__$_state_machine__26850__auto__;
})()
})();
var state__26936__auto__ = (function (){var statearr_69454 = f__26935__auto__();
(statearr_69454[(6)] = c__26934__auto__);

return statearr_69454;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__26936__auto__);
}));

return c__26934__auto__;

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__69149__$1)].join('')));

}
});
bfuncs.app.main = (function bfuncs$app$main(p__69456){
var map__69457 = p__69456;
var map__69457__$1 = (((((!((map__69457 == null))))?(((((map__69457.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__69457.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__69457):map__69457);
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),reagent.core.class_names.cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(bfuncs.style._BANG_vclasses),new cljs.core.Keyword(null,"root","root",-448657453)))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent_material_ui.core.app_bar.app_bar,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"color","color",1011675173),"default",new cljs.core.Keyword(null,"class","class",-2030961996),reagent.core.class_names.cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(bfuncs.style._BANG_vclasses),new cljs.core.Keyword(null,"app-bar","app-bar",-1275042908))),new cljs.core.Keyword(null,"position","position",-2011731912),"relative"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent_material_ui.core.toolbar.toolbar,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),reagent.core.class_names.cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(bfuncs.style._BANG_vclasses),new cljs.core.Keyword(null,"toolbar","toolbar",-1172789065)))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent_material_ui.core.typography.typography,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"variant","variant",-424354234),"h4",new cljs.core.Keyword(null,"no-wrap","no-wrap",1249460674),true,new cljs.core.Keyword(null,"class","class",-2030961996),reagent.core.class_names.cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(bfuncs.style._BANG_vclasses),new cljs.core.Keyword(null,"title","title",636505583)))], null),"Boolean Function Explorer"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent_material_ui.core.icon_button.icon_button,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"edge","edge",919909153),"end",new cljs.core.Keyword(null,"color","color",1011675173),"inherit",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return bfuncs.utils.toggle_BANG_.cljs$core$IFn$_invoke$arity$1(bfuncs.app._BANG_typesetting_menu_open);
}),new cljs.core.Keyword(null,"class","class",-2030961996),reagent.core.class_names.cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(bfuncs.style._BANG_vclasses),new cljs.core.Keyword(null,"typesetting-menu-button","typesetting-menu-button",-513715018)))], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent_material_ui.icons.tune_outlined.tune_outlined], null)], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [bfuncs.typesetting.typesetting_menu,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"open","open",-1763596448),cljs.core.deref(bfuncs.app._BANG_typesetting_menu_open),new cljs.core.Keyword(null,"on-close","on-close",-761178394),(function (){
return cljs.core.reset_BANG_(bfuncs.app._BANG_typesetting_menu_open,false);
})], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"main","main",-2117802661),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),reagent.core.class_names.cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(bfuncs.style._BANG_vclasses),new cljs.core.Keyword(null,"main","main",-2117802661)))], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent_material_ui.core.container.container,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"max-width","max-width",-1939924051),"md",new cljs.core.Keyword(null,"class","class",-2030961996),"main-container"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [bfuncs.input.input_card,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"on-success","on-success",1786904109),bfuncs.app.handle_success_BANG_,new cljs.core.Keyword(null,"on-submit","on-submit",1227871159),(function (){
return bfuncs.utils.reset_nil_BANG_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([bfuncs.app._BANG_parsed_expression,bfuncs.app._BANG_parsed_variables,bfuncs.app._BANG_function_properties,bfuncs.app._BANG_function_values,bfuncs.app._BANG_minimal_expressions,bfuncs.app._BANG_minimal_sops,bfuncs.app._BANG_minimal_poss,bfuncs.app._BANG_anf], 0));
}),new cljs.core.Keyword(null,"on-failure","on-failure",842888245),(function (){
return (bfuncs.utils.dbg.cljs$core$IFn$_invoke$arity$1 ? bfuncs.utils.dbg.cljs$core$IFn$_invoke$arity$1("on failure") : bfuncs.utils.dbg.call(null,"on failure"));
})], null)], null),(cljs.core.truth_(cljs.core.deref(bfuncs.app._BANG_results_ready))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [bfuncs.app.results_card,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"title","title",636505583),"Results"], null)], null):null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [bfuncs.globals.notifier,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),reagent.core.class_names.cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(bfuncs.style._BANG_vclasses),new cljs.core.Keyword(null,"notification","notification",-222338233)))], null)], null)], null);
});
bfuncs.app.app = (function bfuncs$app$app(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"<>","<>",1280186386),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent_material_ui.core.css_baseline.css_baseline], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent_material_ui.styles.theme_provider,bfuncs.style.theme,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [bfuncs.style.with_styles(bfuncs.style.app_style)(bfuncs.app.main)], null)], null)], null);
});

//# sourceMappingURL=bfuncs.app.js.map
