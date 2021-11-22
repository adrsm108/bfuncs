goog.provide('bfuncs.input');
var module$bfuncs$EditorField=shadow.js.require("module$bfuncs$EditorField", {});
if((typeof bfuncs !== 'undefined') && (typeof bfuncs.input !== 'undefined') && (typeof bfuncs.input._BANG_input_type !== 'undefined')){
} else {
bfuncs.input._BANG_input_type = reagent.core.atom.cljs$core$IFn$_invoke$arity$1("expression");
}
if((typeof bfuncs !== 'undefined') && (typeof bfuncs.input !== 'undefined') && (typeof bfuncs.input._BANG_expression_field_state !== 'undefined')){
} else {
bfuncs.input._BANG_expression_field_state = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"issues","issues",1989874693),null,new cljs.core.Keyword(null,"parse","parse",-1162164619),null], null));
}
if((typeof bfuncs !== 'undefined') && (typeof bfuncs.input !== 'undefined') && (typeof bfuncs.input._BANG_marked_var !== 'undefined')){
} else {
bfuncs.input._BANG_marked_var = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
if((typeof bfuncs !== 'undefined') && (typeof bfuncs.input !== 'undefined') && (typeof bfuncs.input._BANG_minterms_field_state !== 'undefined')){
} else {
bfuncs.input._BANG_minterms_field_state = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"issues","issues",1989874693),null,new cljs.core.Keyword(null,"parse","parse",-1162164619),null], null));
}
if((typeof bfuncs !== 'undefined') && (typeof bfuncs.input !== 'undefined') && (typeof bfuncs.input._BANG_u_minterms_field_state !== 'undefined')){
} else {
bfuncs.input._BANG_u_minterms_field_state = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"issues","issues",1989874693),null,new cljs.core.Keyword(null,"parse","parse",-1162164619),null], null));
}
if((typeof bfuncs !== 'undefined') && (typeof bfuncs.input !== 'undefined') && (typeof bfuncs.input._BANG_duped_minterms !== 'undefined')){
} else {
bfuncs.input._BANG_duped_minterms = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentHashSet.EMPTY);
}
if((typeof bfuncs !== 'undefined') && (typeof bfuncs.input !== 'undefined') && (typeof bfuncs.input._BANG_maxterms_field_state !== 'undefined')){
} else {
bfuncs.input._BANG_maxterms_field_state = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"issues","issues",1989874693),null,new cljs.core.Keyword(null,"parse","parse",-1162164619),null], null));
}
if((typeof bfuncs !== 'undefined') && (typeof bfuncs.input !== 'undefined') && (typeof bfuncs.input._BANG_u_maxterms_field_state !== 'undefined')){
} else {
bfuncs.input._BANG_u_maxterms_field_state = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"issues","issues",1989874693),null,new cljs.core.Keyword(null,"parse","parse",-1162164619),null], null));
}
if((typeof bfuncs !== 'undefined') && (typeof bfuncs.input !== 'undefined') && (typeof bfuncs.input._BANG_duped_maxterms !== 'undefined')){
} else {
bfuncs.input._BANG_duped_maxterms = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentHashSet.EMPTY);
}
bfuncs.input.state_atoms = new cljs.core.PersistentArrayMap(null, 2, ["minterms",bfuncs.input._BANG_minterms_field_state,"maxterms",bfuncs.input._BANG_maxterms_field_state], null);
bfuncs.input.u_state_atoms = new cljs.core.PersistentArrayMap(null, 2, ["minterms",bfuncs.input._BANG_u_minterms_field_state,"maxterms",bfuncs.input._BANG_u_maxterms_field_state], null);
bfuncs.input.parse_result__GT_clj = (function bfuncs$input$parse_result__GT_clj(parse_result,type){
var G__68199 = type;
var G__68199__$1 = (((G__68199 instanceof cljs.core.Keyword))?G__68199.fqn:null);
switch (G__68199__$1) {
case "expression":
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"tree","tree",-196312028),(function (){var obj68200 = parse_result;
var k68201 = "parse";
if((function (){var obj68202 = obj68200;
return (((!((obj68202 == null)))) && (applied_science.js_interop.impl.in_QMARK__STAR_(k68201,obj68202)));
})()){
return (obj68200[k68201]);
} else {
return undefined;
}
})(),new cljs.core.Keyword(null,"vars","vars",-2046957217),(function (){var obj68203 = parse_result;
var k68204 = "vars";
if((function (){var obj68205 = obj68203;
return (((!((obj68205 == null)))) && (applied_science.js_interop.impl.in_QMARK__STAR_(k68204,obj68205)));
})()){
return (obj68203[k68204]);
} else {
return undefined;
}
})(),new cljs.core.Keyword(null,"errors?","errors?",-1324290149),(function (){var obj68207 = parse_result;
var k68208 = "errors";
if((function (){var obj68209 = obj68207;
return (((!((obj68209 == null)))) && (applied_science.js_interop.impl.in_QMARK__STAR_(k68208,obj68209)));
})()){
return (obj68207[k68208]);
} else {
return undefined;
}
})(),new cljs.core.Keyword(null,"text","text",-1790561697),(function (){var obj68212 = parse_result;
var k68213 = "text";
if((function (){var obj68215 = obj68212;
return (((!((obj68215 == null)))) && (applied_science.js_interop.impl.in_QMARK__STAR_(k68213,obj68215)));
})()){
return (obj68212[k68213]);
} else {
return undefined;
}
})(),new cljs.core.Keyword(null,"type","type",1174270348),type], null);

break;
case "unspecified":
case "minterms":
case "maxterms":
return new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"terms","terms",-1556977978),cljs.core.vec((function (){var obj68216 = parse_result;
var k68217 = "terms";
if((function (){var obj68222 = obj68216;
return (((!((obj68222 == null)))) && (applied_science.js_interop.impl.in_QMARK__STAR_(k68217,obj68222)));
})()){
return (obj68216[k68217]);
} else {
return undefined;
}
})()),new cljs.core.Keyword(null,"extra","extra",1612569067),(function (){var obj68224 = parse_result;
var k68225 = "extra";
if((function (){var obj68226 = obj68224;
return (((!((obj68226 == null)))) && (applied_science.js_interop.impl.in_QMARK__STAR_(k68225,obj68226)));
})()){
return (obj68224[k68225]);
} else {
return undefined;
}
})(),new cljs.core.Keyword(null,"errors?","errors?",-1324290149),(function (){var obj68228 = parse_result;
var k68229 = "errors";
if((function (){var obj68230 = obj68228;
return (((!((obj68230 == null)))) && (applied_science.js_interop.impl.in_QMARK__STAR_(k68229,obj68230)));
})()){
return (obj68228[k68229]);
} else {
return undefined;
}
})(),new cljs.core.Keyword(null,"duplicates?","duplicates?",1982507429),(function (){var obj68233 = parse_result;
var k68234 = "duplicates";
if((function (){var obj68235 = obj68233;
return (((!((obj68235 == null)))) && (applied_science.js_interop.impl.in_QMARK__STAR_(k68234,obj68235)));
})()){
return (obj68233[k68234]);
} else {
return undefined;
}
})(),new cljs.core.Keyword(null,"text","text",-1790561697),(function (){var obj68237 = parse_result;
var k68238 = "text";
if((function (){var obj68239 = obj68237;
return (((!((obj68239 == null)))) && (applied_science.js_interop.impl.in_QMARK__STAR_(k68238,obj68239)));
})()){
return (obj68237[k68238]);
} else {
return undefined;
}
})(),new cljs.core.Keyword(null,"type","type",1174270348),type], null);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__68199__$1)].join('')));

}
});
bfuncs.input.term_intersection = (function bfuncs$input$term_intersection(p__68243,p__68244){
var map__68245 = p__68243;
var map__68245__$1 = (((((!((map__68245 == null))))?(((((map__68245.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__68245.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__68245):map__68245);
var t1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68245__$1,new cljs.core.Keyword(null,"terms","terms",-1556977978));
var x1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68245__$1,new cljs.core.Keyword(null,"extra","extra",1612569067));
var map__68246 = p__68244;
var map__68246__$1 = (((((!((map__68246 == null))))?(((((map__68246.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__68246.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__68246):map__68246);
var t2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68246__$1,new cljs.core.Keyword(null,"terms","terms",-1556977978));
var x2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68246__$1,new cljs.core.Keyword(null,"extra","extra",1612569067));
if(((cljs.core.empty_QMARK_(t1)) || (cljs.core.empty_QMARK_(t2)))){
return cljs.core.PersistentHashSet.EMPTY;
} else {
return cljs.core.disj.cljs$core$IFn$_invoke$arity$variadic((function (){var vec__68253 = cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(cljs.core.count,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [t1,t2], null));
var t1__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__68253,(0),null);
var t2__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__68253,(1),null);
return cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentHashSet.EMPTY,cljs.core.filter.cljs$core$IFn$_invoke$arity$1(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.contains_QMARK_,cljs.core.set(t2__$1))),t1__$1);
})(),x1,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([x2], 0));
}
});
bfuncs.input.handle_terms_fn = (function bfuncs$input$handle_terms_fn(type,_BANG_this_state,_BANG_other_state,_BANG_duped_terms){
return (function (js_result){
var new_parse = bfuncs.input.parse_result__GT_clj(js_result,type);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(_BANG_this_state,cljs.core.assoc,new cljs.core.Keyword(null,"parse","parse",-1162164619),new_parse);

return cljs.core.reset_BANG_(_BANG_duped_terms,bfuncs.input.term_intersection(new_parse,new cljs.core.Keyword(null,"parse","parse",-1162164619).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(_BANG_other_state))));
});
});
bfuncs.input.expression_field = (function bfuncs$input$expression_field(p__68264){
var map__68265 = p__68264;
var map__68265__$1 = (((((!((map__68265 == null))))?(((((map__68265.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__68265.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__68265):map__68265);
var marked_var = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68265__$1,new cljs.core.Keyword(null,"marked-var","marked-var",-656101723));
var on_parse = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68265__$1,new cljs.core.Keyword(null,"on-parse","on-parse",38753265));
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68265__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var initial_doc = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68265__$1,new cljs.core.Keyword(null,"initial-doc","initial-doc",-1120524023));
var placeholder = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68265__$1,new cljs.core.Keyword(null,"placeholder","placeholder",-104873083));
var issues = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68265__$1,new cljs.core.Keyword(null,"issues","issues",1989874693));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),module$bfuncs$EditorField.ExpressionField,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"class","class",-2030961996),(function (){var classes68272 = cljs.core.deref(bfuncs.style._BANG_vclasses);
return reagent.core.class_names.cljs$core$IFn$_invoke$arity$variadic(cljs.core.get.cljs$core$IFn$_invoke$arity$2(classes68272,new cljs.core.Keyword(null,"editor-field","editor-field",2137258757)),cljs.core.get.cljs$core$IFn$_invoke$arity$2(classes68272,new cljs.core.Keyword(null,"expression-field","expression-field",1281481871)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([class$], 0));
})(),new cljs.core.Keyword(null,"onParse","onParse",913311908),on_parse,new cljs.core.Keyword(null,"showErrors","showErrors",-565233444),cljs.core.contains_QMARK_(issues,new cljs.core.Keyword(null,"errors","errors",-908790718)),new cljs.core.Keyword(null,"markedVariable","markedVariable",120734709),marked_var,new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),placeholder,new cljs.core.Keyword(null,"initialDoc","initialDoc",582500383),initial_doc], null)], null);
});
bfuncs.input.terms_field = (function bfuncs$input$terms_field(p__68276){
var map__68277 = p__68276;
var map__68277__$1 = (((((!((map__68277 == null))))?(((((map__68277.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__68277.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__68277):map__68277);
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68277__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var on_parse = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68277__$1,new cljs.core.Keyword(null,"on-parse","on-parse",38753265));
var issues = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68277__$1,new cljs.core.Keyword(null,"issues","issues",1989874693));
var duped_terms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68277__$1,new cljs.core.Keyword(null,"duped-terms","duped-terms",401766145));
var allow_empty = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__68277__$1,new cljs.core.Keyword(null,"allow-empty","allow-empty",-1358259444),false);
var initial_doc = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68277__$1,new cljs.core.Keyword(null,"initial-doc","initial-doc",-1120524023));
var placeholder = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68277__$1,new cljs.core.Keyword(null,"placeholder","placeholder",-104873083));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),module$bfuncs$EditorField.TermsField,new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"class","class",-2030961996),(function (){var classes68280 = cljs.core.deref(bfuncs.style._BANG_vclasses);
return reagent.core.class_names.cljs$core$IFn$_invoke$arity$variadic(cljs.core.get.cljs$core$IFn$_invoke$arity$2(classes68280,new cljs.core.Keyword(null,"editor-field","editor-field",2137258757)),cljs.core.get.cljs$core$IFn$_invoke$arity$2(classes68280,new cljs.core.Keyword(null,"terms-field","terms-field",-1646313210)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([class$], 0));
})(),new cljs.core.Keyword(null,"onParse","onParse",913311908),on_parse,new cljs.core.Keyword(null,"showErrors","showErrors",-565233444),cljs.core.contains_QMARK_(issues,new cljs.core.Keyword(null,"errors","errors",-908790718)),new cljs.core.Keyword(null,"duplicatedTerms","duplicatedTerms",1313400311),bfuncs.utils.echol.cljs$core$IFn$_invoke$arity$2([cljs.core.str.cljs$core$IFn$_invoke$arity$1(placeholder)," dups: "].join(''),duped_terms),new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),placeholder,new cljs.core.Keyword(null,"initialDoc","initialDoc",582500383),initial_doc,new cljs.core.Keyword(null,"allowEmpty","allowEmpty",1664815768),allow_empty], null)], null);
});
bfuncs.input.variable = (function bfuncs$input$variable(var$,marked_QMARK_){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent_material_ui.core.button_base.button_base,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"class","class",-2030961996),(function (){var classes68290 = cljs.core.deref(bfuncs.style._BANG_vclasses);
return reagent.core.class_names.cljs$core$IFn$_invoke$arity$variadic(cljs.core.get.cljs$core$IFn$_invoke$arity$2(classes68290,new cljs.core.Keyword(null,"input-variable","input-variable",715763684)),cljs.core.get.cljs$core$IFn$_invoke$arity$2(classes68290,new cljs.core.Keyword(null,"chip-like","chip-like",-1868486401)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(cljs.core.truth_(marked_QMARK_)?"selected":null)], 0));
})(),new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return bfuncs.utils.toggle_BANG_.cljs$core$IFn$_invoke$arity$2(bfuncs.input._BANG_marked_var,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [var$,true], null));
}),new cljs.core.Keyword(null,"on-mouse-enter","on-mouse-enter",-1664921661),(function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(bfuncs.input._BANG_marked_var,(function (p1__68282_SHARP_){
if(cljs.core.truth_(cljs.core.second(p1__68282_SHARP_))){
return p1__68282_SHARP_;
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [var$,false], null);
}
}));
}),new cljs.core.Keyword(null,"on-mouse-leave","on-mouse-leave",-1864319528),(function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(bfuncs.input._BANG_marked_var,(function (p1__68283_SHARP_){
if(cljs.core.truth_(cljs.core.second(p1__68283_SHARP_))){
return p1__68283_SHARP_;
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,false], null);
}
}));
})], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [bfuncs.typesetting.$,bfuncs.typesetting.format_latex_var(var$)], null)], null);
});
bfuncs.input.term = (function bfuncs$input$term(t){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.term","div.term",1807718519),(function (){var obj__27297__auto__ = t;
var f__27298__auto__ = (obj__27297__auto__["toString"]);
return f__27298__auto__.call(obj__27297__auto__);
})()], null);
});
bfuncs.input.variables_section = (function bfuncs$input$variables_section(vars,mvar){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.variables-section","div.variables-section",-910998651),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent_material_ui.core.typography.typography,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"variant","variant",-424354234),"body1",new cljs.core.Keyword(null,"class","class",-2030961996),"title"], null),["Variables (",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count(vars)),")"].join('')], null),cljs.core.into.cljs$core$IFn$_invoke$arity$3(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.variables-container","div.variables-container",1518524913)], null),cljs.core.map.cljs$core$IFn$_invoke$arity$1((function (v){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [bfuncs.input.variable,v,cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(v,mvar)], null);
})),vars)], null);
});
bfuncs.input.terms_section = (function bfuncs$input$terms_section(title,terms){
if(cljs.core.seq(terms)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.terms-section","div.terms-section",-1072650829),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent_material_ui.core.typography.typography,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"variant","variant",-424354234),"body1",new cljs.core.Keyword(null,"class","class",-2030961996),"title"], null),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(title)," (",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count(terms)),")"].join('')], null),cljs.core.into.cljs$core$IFn$_invoke$arity$3(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.terms-container","div.terms-container",693584711)], null),cljs.core.map.cljs$core$IFn$_invoke$arity$1((function (t){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.term","div.term",1807718519),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),t], null),t], null);
})),terms)], null);
} else {
return null;
}
});
bfuncs.input.expression_section = (function bfuncs$input$expression_section(expr){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.expression-section","div.expression-section",-1055960548),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent_material_ui.core.typography.typography,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"variant","variant",-424354234),"body1",new cljs.core.Keyword(null,"class","class",-2030961996),"title"], null),"Parsed Expression"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [bfuncs.typesetting.expression,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),reagent.core.class_names.cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(bfuncs.style._BANG_vclasses),new cljs.core.Keyword(null,"typeset-expression","typeset-expression",807722591))),new cljs.core.Keyword(null,"expandable","expandable",-704609097),true], null),bfuncs.utils.echol.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),expr)], null)], null);
});
bfuncs.input.expression_input = (function bfuncs$input$expression_input(p__68320){
var map__68321 = p__68320;
var map__68321__$1 = (((((!((map__68321 == null))))?(((((map__68321.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__68321.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__68321):map__68321);
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68321__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var with_let68327 = reagent.ratom.with_let_values(new cljs.core.Keyword(null,"with-let68327","with-let68327",-574144650));
var temp__5739__auto___68584 = reagent.ratom._STAR_ratom_context_STAR_;
if((temp__5739__auto___68584 == null)){
} else {
var c__27840__auto___68585 = temp__5739__auto___68584;
if((with_let68327.generation === c__27840__auto___68585.ratomGeneration)){
if(reagent.debug.has_console){
((reagent.debug.tracking)?reagent.debug.track_console:console).error(["Warning: The same with-let is being used more ","than once in the same reactive context."].join(''));
} else {
}
} else {
}

(with_let68327.generation = c__27840__auto___68585.ratomGeneration);
}


var init68328 = (with_let68327.length === (0));
var handle_parse = ((init68328)?(with_let68327[(0)] = (function (js_result){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(bfuncs.input._BANG_expression_field_state,cljs.core.assoc,new cljs.core.Keyword(null,"parse","parse",-1162164619),bfuncs.input.parse_result__GT_clj(bfuncs.utils.echol.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"js-result","js-result",-4200076),js_result),new cljs.core.Keyword(null,"expression","expression",202311876)));
})):(with_let68327[(0)]));
var handle_click_away = ((init68328)?(with_let68327[(1)] = (function (){
return cljs.core.reset_BANG_(bfuncs.input._BANG_marked_var,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,false], null));
})):(with_let68327[(1)]));
var default_text = ((init68328)?(with_let68327[(2)] = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(bfuncs.input._BANG_expression_field_state),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"parse","parse",-1162164619),new cljs.core.Keyword(null,"text","text",-1790561697)], null))):(with_let68327[(2)]));
var _BANG_last_valid_expr = ((init68328)?(with_let68327[(3)] = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null)):(with_let68327[(3)]));
var res__27841__auto__ = (function (){var marked_var = cljs.core.deref(reagent.core.track_BANG_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.first,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.deref(bfuncs.input._BANG_marked_var)], 0)));
var map__68339 = cljs.core.deref(bfuncs.input._BANG_expression_field_state);
var map__68339__$1 = (((((!((map__68339 == null))))?(((((map__68339.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__68339.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__68339):map__68339);
var issues = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68339__$1,new cljs.core.Keyword(null,"issues","issues",1989874693));
var map__68340 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68339__$1,new cljs.core.Keyword(null,"parse","parse",-1162164619));
var map__68340__$1 = (((((!((map__68340 == null))))?(((((map__68340.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__68340.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__68340):map__68340);
var porse = map__68340__$1;
var vars = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68340__$1,new cljs.core.Keyword(null,"vars","vars",-2046957217));
var tree = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68340__$1,new cljs.core.Keyword(null,"tree","tree",-196312028));
var errors_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68340__$1,new cljs.core.Keyword(null,"errors?","errors?",-1324290149));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent_material_ui.core.click_away_listener.click_away_listener,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click-away","on-click-away",-945525351),handle_click_away], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),reagent.core.class_names.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(bfuncs.style._BANG_vclasses),new cljs.core.Keyword(null,"expression-input","expression-input",766349310)),class$)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [bfuncs.input.expression_field,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"marked-var","marked-var",-656101723),marked_var,new cljs.core.Keyword(null,"on-parse","on-parse",38753265),handle_parse,new cljs.core.Keyword(null,"issues","issues",1989874693),issues,new cljs.core.Keyword(null,"initial-doc","initial-doc",-1120524023),bfuncs.utils.echol.cljs$core$IFn$_invoke$arity$2("default-text",default_text)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [bfuncs.input.expression_section,(function (){
bfuncs.utils.echol.cljs$core$IFn$_invoke$arity$1(porse);

if(cljs.core.truth_(errors_QMARK_)){
return cljs.core.deref(_BANG_last_valid_expr);
} else {
return cljs.core.reset_BANG_(_BANG_last_valid_expr,tree);
}
})()
], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [bfuncs.input.variables_section,vars,marked_var], null)], null)], null);
})();

return res__27841__auto__;
});
bfuncs.input.minterms_input = (function bfuncs$input$minterms_input(p__68351){
var map__68352 = p__68351;
var map__68352__$1 = (((((!((map__68352 == null))))?(((((map__68352.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__68352.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__68352):map__68352);
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68352__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var with_let68355 = reagent.ratom.with_let_values(new cljs.core.Keyword(null,"with-let68355","with-let68355",1013319887));
var temp__5739__auto___68597 = reagent.ratom._STAR_ratom_context_STAR_;
if((temp__5739__auto___68597 == null)){
} else {
var c__27840__auto___68598 = temp__5739__auto___68597;
if((with_let68355.generation === c__27840__auto___68598.ratomGeneration)){
if(reagent.debug.has_console){
((reagent.debug.tracking)?reagent.debug.track_console:console).error(["Warning: The same with-let is being used more ","than once in the same reactive context."].join(''));
} else {
}
} else {
}

(with_let68355.generation = c__27840__auto___68598.ratomGeneration);
}


var init68356 = (with_let68355.length === (0));
var default_text = ((init68356)?(with_let68355[(0)] = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(bfuncs.input._BANG_minterms_field_state),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"parse","parse",-1162164619),new cljs.core.Keyword(null,"text","text",-1790561697)], null))):(with_let68355[(0)]));
var handle_minterms_parse = ((init68356)?(with_let68355[(1)] = bfuncs.input.handle_terms_fn(new cljs.core.Keyword(null,"minterms","minterms",-1267652170),bfuncs.input._BANG_minterms_field_state,bfuncs.input._BANG_u_minterms_field_state,bfuncs.input._BANG_duped_minterms)):(with_let68355[(1)]));
var default_u_text = ((init68356)?(with_let68355[(2)] = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(bfuncs.input._BANG_u_minterms_field_state),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"parse","parse",-1162164619),new cljs.core.Keyword(null,"text","text",-1790561697)], null))):(with_let68355[(2)]));
var handle_u_minterms_parse = ((init68356)?(with_let68355[(3)] = bfuncs.input.handle_terms_fn(new cljs.core.Keyword(null,"unspecified","unspecified",-1672973565),bfuncs.input._BANG_u_minterms_field_state,bfuncs.input._BANG_minterms_field_state,bfuncs.input._BANG_duped_minterms)):(with_let68355[(3)]));
var res__27841__auto__ = (function (){var duped_minterms = cljs.core.deref(reagent.core.track.cljs$core$IFn$_invoke$arity$variadic(cljs.core.clj__GT_js,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.deref(bfuncs.input._BANG_duped_minterms)], 0)));
var map__68378 = cljs.core.deref(bfuncs.input._BANG_minterms_field_state);
var map__68378__$1 = (((((!((map__68378 == null))))?(((((map__68378.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__68378.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__68378):map__68378);
var issues = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68378__$1,new cljs.core.Keyword(null,"issues","issues",1989874693));
var map__68380 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68378__$1,new cljs.core.Keyword(null,"parse","parse",-1162164619));
var map__68380__$1 = (((((!((map__68380 == null))))?(((((map__68380.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__68380.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__68380):map__68380);
var terms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68380__$1,new cljs.core.Keyword(null,"terms","terms",-1556977978));
var map__68382 = cljs.core.deref(bfuncs.input._BANG_u_minterms_field_state);
var map__68382__$1 = (((((!((map__68382 == null))))?(((((map__68382.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__68382.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__68382):map__68382);
var u_issues = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68382__$1,new cljs.core.Keyword(null,"issues","issues",1989874693));
var map__68383 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68382__$1,new cljs.core.Keyword(null,"parse","parse",-1162164619));
var map__68383__$1 = (((((!((map__68383 == null))))?(((((map__68383.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__68383.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__68383):map__68383);
var u_terms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68383__$1,new cljs.core.Keyword(null,"terms","terms",-1556977978));
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),reagent.core.class_names.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(bfuncs.style._BANG_vclasses),new cljs.core.Keyword(null,"minterms-input","minterms-input",2110478626)),class$)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [bfuncs.input.terms_field,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"class","class",-2030961996),"required",new cljs.core.Keyword(null,"duped-terms","duped-terms",401766145),duped_minterms,new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),"Minterms...",new cljs.core.Keyword(null,"on-parse","on-parse",38753265),handle_minterms_parse,new cljs.core.Keyword(null,"issues","issues",1989874693),issues,new cljs.core.Keyword(null,"initial-doc","initial-doc",-1120524023),default_text], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [bfuncs.input.terms_field,new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"class","class",-2030961996),"unspecified",new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),"Unspecified terms...",new cljs.core.Keyword(null,"duped-terms","duped-terms",401766145),duped_minterms,new cljs.core.Keyword(null,"issues","issues",1989874693),u_issues,new cljs.core.Keyword(null,"on-parse","on-parse",38753265),handle_u_minterms_parse,new cljs.core.Keyword(null,"initial-doc","initial-doc",-1120524023),default_u_text,new cljs.core.Keyword(null,"allow-empty","allow-empty",-1358259444),true], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [bfuncs.input.terms_section,"Minterms",terms], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [bfuncs.input.terms_section,"Unspecified",u_terms], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [bfuncs.typesetting.minterms_expression,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"minterms","minterms",-1267652170),terms,new cljs.core.Keyword(null,"unspecified","unspecified",-1672973565),u_terms], null)], null)], null);
})();

return res__27841__auto__;
});
bfuncs.input.maxterms_input = (function bfuncs$input$maxterms_input(p__68418){
var map__68419 = p__68418;
var map__68419__$1 = (((((!((map__68419 == null))))?(((((map__68419.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__68419.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__68419):map__68419);
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68419__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var with_let68422 = reagent.ratom.with_let_values(new cljs.core.Keyword(null,"with-let68422","with-let68422",1927850047));
var temp__5739__auto___68611 = reagent.ratom._STAR_ratom_context_STAR_;
if((temp__5739__auto___68611 == null)){
} else {
var c__27840__auto___68612 = temp__5739__auto___68611;
if((with_let68422.generation === c__27840__auto___68612.ratomGeneration)){
if(reagent.debug.has_console){
((reagent.debug.tracking)?reagent.debug.track_console:console).error(["Warning: The same with-let is being used more ","than once in the same reactive context."].join(''));
} else {
}
} else {
}

(with_let68422.generation = c__27840__auto___68612.ratomGeneration);
}


var init68423 = (with_let68422.length === (0));
var default_text = ((init68423)?(with_let68422[(0)] = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(bfuncs.input._BANG_maxterms_field_state),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"parse","parse",-1162164619),new cljs.core.Keyword(null,"text","text",-1790561697)], null))):(with_let68422[(0)]));
var handle_maxterms_parse = ((init68423)?(with_let68422[(1)] = bfuncs.input.handle_terms_fn(new cljs.core.Keyword(null,"maxterms","maxterms",951779603),bfuncs.input._BANG_maxterms_field_state,bfuncs.input._BANG_u_maxterms_field_state,bfuncs.input._BANG_duped_maxterms)):(with_let68422[(1)]));
var default_u_text = ((init68423)?(with_let68422[(2)] = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(bfuncs.input._BANG_u_maxterms_field_state),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"parse","parse",-1162164619),new cljs.core.Keyword(null,"text","text",-1790561697)], null))):(with_let68422[(2)]));
var handle_u_maxterms_parse = ((init68423)?(with_let68422[(3)] = bfuncs.input.handle_terms_fn(new cljs.core.Keyword(null,"unspecified","unspecified",-1672973565),bfuncs.input._BANG_u_maxterms_field_state,bfuncs.input._BANG_maxterms_field_state,bfuncs.input._BANG_duped_maxterms)):(with_let68422[(3)]));
var res__27841__auto__ = (function (){var duped_maxterms = cljs.core.deref(reagent.core.track.cljs$core$IFn$_invoke$arity$variadic(cljs.core.clj__GT_js,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.deref(bfuncs.input._BANG_duped_maxterms)], 0)));
var map__68439 = cljs.core.deref(bfuncs.input._BANG_maxterms_field_state);
var map__68439__$1 = (((((!((map__68439 == null))))?(((((map__68439.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__68439.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__68439):map__68439);
var issues = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68439__$1,new cljs.core.Keyword(null,"issues","issues",1989874693));
var map__68440 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68439__$1,new cljs.core.Keyword(null,"parse","parse",-1162164619));
var map__68440__$1 = (((((!((map__68440 == null))))?(((((map__68440.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__68440.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__68440):map__68440);
var terms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68440__$1,new cljs.core.Keyword(null,"terms","terms",-1556977978));
var map__68441 = cljs.core.deref(bfuncs.input._BANG_u_maxterms_field_state);
var map__68441__$1 = (((((!((map__68441 == null))))?(((((map__68441.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__68441.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__68441):map__68441);
var u_issues = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68441__$1,new cljs.core.Keyword(null,"issues","issues",1989874693));
var map__68442 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68441__$1,new cljs.core.Keyword(null,"parse","parse",-1162164619));
var map__68442__$1 = (((((!((map__68442 == null))))?(((((map__68442.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__68442.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__68442):map__68442);
var u_terms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68442__$1,new cljs.core.Keyword(null,"terms","terms",-1556977978));
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),reagent.core.class_names.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(bfuncs.style._BANG_vclasses),new cljs.core.Keyword(null,"maxterms-input","maxterms-input",-1068047720)),class$)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [bfuncs.input.terms_field,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"class","class",-2030961996),"required",new cljs.core.Keyword(null,"duped-terms","duped-terms",401766145),duped_maxterms,new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),"Maxterms...",new cljs.core.Keyword(null,"on-parse","on-parse",38753265),handle_maxterms_parse,new cljs.core.Keyword(null,"issues","issues",1989874693),issues,new cljs.core.Keyword(null,"initial-doc","initial-doc",-1120524023),default_text], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [bfuncs.input.terms_field,new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"class","class",-2030961996),"unspecified",new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),"Unspecified terms...",new cljs.core.Keyword(null,"duped-terms","duped-terms",401766145),duped_maxterms,new cljs.core.Keyword(null,"issues","issues",1989874693),u_issues,new cljs.core.Keyword(null,"on-parse","on-parse",38753265),handle_u_maxterms_parse,new cljs.core.Keyword(null,"initial-doc","initial-doc",-1120524023),default_u_text,new cljs.core.Keyword(null,"allow-empty","allow-empty",-1358259444),true], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [bfuncs.input.terms_section,"Minterms",terms], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [bfuncs.input.terms_section,"Unspecified",u_terms], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [bfuncs.typesetting.maxterms_expression,bfuncs.utils.echo.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"ppop","ppop",-811647688),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"maxterms","maxterms",951779603),terms,new cljs.core.Keyword(null,"unspecified","unspecified",-1672973565),u_terms], null))], null)], null);
})();

return res__27841__auto__;
});
bfuncs.input.update_issues_BANG_ = (function bfuncs$input$update_issues_BANG_(_BANG_state){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(_BANG_state,(function (p1__68453_SHARP_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__68453_SHARP_,new cljs.core.Keyword(null,"issues","issues",1989874693),(function (){var map__68455 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(p1__68453_SHARP_,new cljs.core.Keyword(null,"parse","parse",-1162164619));
var map__68455__$1 = (((((!((map__68455 == null))))?(((((map__68455.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__68455.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__68455):map__68455);
var errors_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68455__$1,new cljs.core.Keyword(null,"errors?","errors?",-1324290149));
var duplicates_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68455__$1,new cljs.core.Keyword(null,"duplicates?","duplicates?",1982507429));
return cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentHashSet.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$1(cljs.core.nil_QMARK_),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.truth_(errors_QMARK_)?new cljs.core.Keyword(null,"errors","errors",-908790718):null),(cljs.core.truth_(duplicates_QMARK_)?new cljs.core.Keyword(null,"duplicates","duplicates",1265485699):null)], null));
})());
}));
});
bfuncs.input.input_card = (function bfuncs$input$input_card(p__68466){
var map__68467 = p__68466;
var map__68467__$1 = (((((!((map__68467 == null))))?(((((map__68467.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__68467.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__68467):map__68467);
var on_success = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68467__$1,new cljs.core.Keyword(null,"on-success","on-success",1786904109));
var on_failure = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68467__$1,new cljs.core.Keyword(null,"on-failure","on-failure",842888245));
var on_submit = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68467__$1,new cljs.core.Keyword(null,"on-submit","on-submit",1227871159));

var with_let68473 = reagent.ratom.with_let_values(new cljs.core.Keyword(null,"with-let68473","with-let68473",1288863907));
var temp__5739__auto___68635 = reagent.ratom._STAR_ratom_context_STAR_;
if((temp__5739__auto___68635 == null)){
} else {
var c__27840__auto___68636 = temp__5739__auto___68635;
if((with_let68473.generation === c__27840__auto___68636.ratomGeneration)){
if(reagent.debug.has_console){
((reagent.debug.tracking)?reagent.debug.track_console:console).error(["Warning: The same with-let is being used more ","than once in the same reactive context."].join(''));
} else {
}
} else {
}

(with_let68473.generation = c__27840__auto___68636.ratomGeneration);
}


var init68474 = (with_let68473.length === (0));
var submit = ((init68474)?(with_let68473[(0)] = (function (){
(on_submit.cljs$core$IFn$_invoke$arity$0 ? on_submit.cljs$core$IFn$_invoke$arity$0() : on_submit.call(null));

var temp__27540__auto__ = cljs.core.deref(bfuncs.input._BANG_input_type);
var input_type = temp__27540__auto__;
var G__68482 = temp__27540__auto__;
switch (G__68482) {
case "expression":
var map__68484 = bfuncs.input.update_issues_BANG_(bfuncs.input._BANG_expression_field_state);
var map__68484__$1 = (((((!((map__68484 == null))))?(((((map__68484.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__68484.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__68484):map__68484);
var issues = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68484__$1,new cljs.core.Keyword(null,"issues","issues",1989874693));
var parse = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68484__$1,new cljs.core.Keyword(null,"parse","parse",-1162164619));
bfuncs.utils.echol.cljs$core$IFn$_invoke$arity$1(parse);

var fexpr__68488 = (((!(cljs.core.empty_QMARK_(issues))))?on_failure:on_success);
return (fexpr__68488.cljs$core$IFn$_invoke$arity$1 ? fexpr__68488.cljs$core$IFn$_invoke$arity$1(parse) : fexpr__68488.call(null,parse));

break;
case "minterms":
case "maxterms":
var map__68490 = bfuncs.input.update_issues_BANG_((bfuncs.input.state_atoms.cljs$core$IFn$_invoke$arity$1 ? bfuncs.input.state_atoms.cljs$core$IFn$_invoke$arity$1(input_type) : bfuncs.input.state_atoms.call(null,input_type)));
var map__68490__$1 = (((((!((map__68490 == null))))?(((((map__68490.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__68490.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__68490):map__68490);
var issues = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68490__$1,new cljs.core.Keyword(null,"issues","issues",1989874693));
var parse = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68490__$1,new cljs.core.Keyword(null,"parse","parse",-1162164619));
var map__68491 = bfuncs.input.update_issues_BANG_((bfuncs.input.u_state_atoms.cljs$core$IFn$_invoke$arity$1 ? bfuncs.input.u_state_atoms.cljs$core$IFn$_invoke$arity$1(input_type) : bfuncs.input.u_state_atoms.call(null,input_type)));
var map__68491__$1 = (((((!((map__68491 == null))))?(((((map__68491.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__68491.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__68491):map__68491);
var u_issues = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68491__$1,new cljs.core.Keyword(null,"issues","issues",1989874693));
var u_parse = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68491__$1,new cljs.core.Keyword(null,"parse","parse",-1162164619));
var G__68540 = cljs.core.update.cljs$core$IFn$_invoke$arity$3(cljs.core.merge_with.cljs$core$IFn$_invoke$arity$variadic(cljs.core.vector,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([parse,u_parse], 0)),new cljs.core.Keyword(null,"type","type",1174270348),cljs.core.first);
var fexpr__68539 = (((!(((cljs.core.empty_QMARK_(issues)) && (cljs.core.empty_QMARK_(u_issues))))))?on_failure:on_success);
return (fexpr__68539.cljs$core$IFn$_invoke$arity$1 ? fexpr__68539.cljs$core$IFn$_invoke$arity$1(G__68540) : fexpr__68539.call(null,G__68540));

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__68482)].join('')));

}
})):(with_let68473[(0)]));
var res__27841__auto__ = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent_material_ui.core.card.card,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),reagent.core.class_names.cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(bfuncs.style._BANG_vclasses),new cljs.core.Keyword(null,"input-card","input-card",-1891279832)))], null),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent_material_ui.core.card_content.card_content,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),(function (){var classes68541 = cljs.core.deref(bfuncs.style._BANG_vclasses);
return reagent.core.class_names.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(classes68541,new cljs.core.Keyword(null,"card-content","card-content",1213828862)),cljs.core.get.cljs$core$IFn$_invoke$arity$2(classes68541,new cljs.core.Keyword(null,"vertical-grid","vertical-grid",-438614033)));
})()], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent_material_ui.core.typography.typography,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"variant","variant",-424354234),"h5"], null),"Enter Function"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent_material_ui.core.form_control.form_control,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"component","component",1555936782),"fieldset"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent_material_ui.core.form_label.form_label,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),"specification-label",new cljs.core.Keyword(null,"component","component",1555936782),"legend"], null),"Specify by"], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent_material_ui.core.radio_group.radio_group,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"row","row",-570139521),true,new cljs.core.Keyword(null,"value","value",305978217),cljs.core.deref(bfuncs.input._BANG_input_type),new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__68458_SHARP_){
return cljs.core.reset_BANG_(bfuncs.input._BANG_input_type,bfuncs.utils.event_value(p1__68458_SHARP_));
})], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent_material_ui.core.form_control_label.form_control_label,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"value","value",305978217),"expression",new cljs.core.Keyword(null,"label","label",1718410804),"Expression",new cljs.core.Keyword(null,"control","control",1892578036),reagent.core.as_element.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent_material_ui.core.radio.radio], null))], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent_material_ui.core.form_control_label.form_control_label,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"value","value",305978217),"minterms",new cljs.core.Keyword(null,"label","label",1718410804),"Minterms",new cljs.core.Keyword(null,"control","control",1892578036),reagent.core.as_element.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent_material_ui.core.radio.radio], null))], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent_material_ui.core.form_control_label.form_control_label,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"value","value",305978217),"maxterms",new cljs.core.Keyword(null,"label","label",1718410804),"Maxterms",new cljs.core.Keyword(null,"control","control",1892578036),reagent.core.as_element.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent_material_ui.core.radio.radio], null))], null)], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [bfuncs.transitions.switch_transition,(function (){var G__68543 = cljs.core.deref(bfuncs.input._BANG_input_type);
switch (G__68543) {
case "minterms":
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent_material_ui.core.fade.fade,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),"minterms"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.fade-wrapper","div.fade-wrapper",-239430890),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [bfuncs.input.minterms_input], null)], null)], null);

break;
case "maxterms":
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent_material_ui.core.fade.fade,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),"maxterms"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.fade-wrapper","div.fade-wrapper",-239430890),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [bfuncs.input.maxterms_input], null)], null)], null);

break;
case "expression":
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent_material_ui.core.fade.fade,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),"expression"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.fade-wrapper","div.fade-wrapper",-239430890),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [bfuncs.input.expression_input], null)], null)], null);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__68543)].join('')));

}
})()], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.buttons","div.buttons",-536342249),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent_material_ui.core.button.button,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"class","class",-2030961996),"go-button",new cljs.core.Keyword(null,"variant","variant",-424354234),"outlined",new cljs.core.Keyword(null,"disable-elevation","disable-elevation",-597366875),true,new cljs.core.Keyword(null,"color","color",1011675173),"primary",new cljs.core.Keyword(null,"on-click","on-click",1632826543),submit,new cljs.core.Keyword(null,"size","size",1098693007),"large"], null),"Convert"], null)], null)], null)], null);

return res__27841__auto__;
});

//# sourceMappingURL=bfuncs.input.js.map
