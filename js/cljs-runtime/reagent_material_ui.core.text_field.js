goog.provide('reagent_material_ui.core.text_field');
var module$node_modules$$material_ui$core$esm$TextField$index=shadow.js.require("module$node_modules$$material_ui$core$esm$TextField$index", {});
reagent_material_ui.core.text_field.input_props = (function reagent_material_ui$core$text_field$input_props(props){
return reagent_material_ui.util.remove_undefined_vals(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(props,new cljs.core.Keyword(null,"ref","ref",1289896967),new cljs.core.Keyword(null,"inputRef","inputRef",-414128011).cljs$core$IFn$_invoke$arity$1(props)),new cljs.core.Keyword(null,"inputRef","inputRef",-414128011)));
});
reagent_material_ui.core.text_field.input = reagent.core.reactify_component.cljs$core$IFn$_invoke$arity$1((function reagent_material_ui$core$text_field$input(props){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),reagent_material_ui.core.text_field.input_props(props)], null);
}));
reagent_material_ui.core.text_field.textarea = reagent.core.reactify_component.cljs$core$IFn$_invoke$arity$1((function reagent_material_ui$core$text_field$textarea(props){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea","textarea",-650375824),reagent_material_ui.core.text_field.input_props(props)], null);
}));
reagent_material_ui.core.text_field.mui_text_field = reagent_material_ui.util.adapt_react_class.cljs$core$IFn$_invoke$arity$2(module$node_modules$$material_ui$core$esm$TextField$index.default,"mui-text-field");
reagent_material_ui.core.text_field.text_field = (function reagent_material_ui$core$text_field$text_field(var_args){
var args__4742__auto__ = [];
var len__4736__auto___42781 = arguments.length;
var i__4737__auto___42782 = (0);
while(true){
if((i__4737__auto___42782 < len__4736__auto___42781)){
args__4742__auto__.push((arguments[i__4737__auto___42782]));

var G__42783 = (i__4737__auto___42782 + (1));
i__4737__auto___42782 = G__42783;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return reagent_material_ui.core.text_field.text_field.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(reagent_material_ui.core.text_field.text_field.cljs$core$IFn$_invoke$arity$variadic = (function (props,children){
var rows_max = reagent_material_ui.util.get_anycase.cljs$core$IFn$_invoke$arity$2(props,new cljs.core.Keyword(null,"rows-max","rows-max",-1902625472));
var autosize_QMARK_ = (function (){var and__4115__auto__ = new cljs.core.Keyword(null,"multiline","multiline",-1084693234).cljs$core$IFn$_invoke$arity$1(props);
if(cljs.core.truth_(and__4115__auto__)){
return rows_max;
} else {
return and__4115__auto__;
}
})();
var input_component = (function (){var or__4126__auto__ = reagent_material_ui.util.get_anycase.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"InputProps","InputProps",-1485068760).cljs$core$IFn$_invoke$arity$1(props),new cljs.core.Keyword(null,"input-component","input-component",-745892912));
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
if(cljs.core.truth_((function (){var and__4115__auto__ = new cljs.core.Keyword(null,"multiline","multiline",-1084693234).cljs$core$IFn$_invoke$arity$1(props);
if(cljs.core.truth_(and__4115__auto__)){
var and__4115__auto____$1 = new cljs.core.Keyword(null,"rows","rows",850049680).cljs$core$IFn$_invoke$arity$1(props);
if(cljs.core.truth_(and__4115__auto____$1)){
return cljs.core.not(rows_max);
} else {
return and__4115__auto____$1;
}
} else {
return and__4115__auto__;
}
})())){
return reagent_material_ui.core.text_field.textarea;
} else {
if(cljs.core.truth_(autosize_QMARK_)){
return reagent_material_ui.core.textarea_autosize.react_textarea_autosize;
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"select","select",1147833503).cljs$core$IFn$_invoke$arity$1(props))){
return null;
} else {
return reagent_material_ui.core.text_field.input;

}
}
}
}
})();
var props__$1 = (function (){var G__42780 = props;
var G__42780__$1 = (cljs.core.truth_(input_component)?cljs.core.update.cljs$core$IFn$_invoke$arity$3(G__42780,new cljs.core.Keyword(null,"InputProps","InputProps",-1485068760),(function (p1__42777_SHARP_){
return reagent_material_ui.util.assoc_anycase.cljs$core$IFn$_invoke$arity$3(p1__42777_SHARP_,new cljs.core.Keyword(null,"input-component","input-component",-745892912),input_component);
})):G__42780);
if(cljs.core.truth_(autosize_QMARK_)){
return cljs.core.assoc_in(G__42780__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input-props","input-props",-1504868202),new cljs.core.Keyword(null,"rows-max","rows-max",-1902625472)], null),rows_max);
} else {
return G__42780__$1;
}
})();
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent_material_ui.core.text_field.mui_text_field,props__$1], null),children);
}));

(reagent_material_ui.core.text_field.text_field.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(reagent_material_ui.core.text_field.text_field.cljs$lang$applyTo = (function (seq42778){
var G__42779 = cljs.core.first(seq42778);
var seq42778__$1 = cljs.core.next(seq42778);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__42779,seq42778__$1);
}));


//# sourceMappingURL=reagent_material_ui.core.text_field.js.map
