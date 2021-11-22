goog.provide('reagent_material_ui.util');
var module$node_modules$react$index=shadow.js.require("module$node_modules$react$index", {});
reagent_material_ui.util.adapt_react_class = (function reagent_material_ui$util$adapt_react_class(var_args){
var G__40706 = arguments.length;
switch (G__40706) {
case 1:
return reagent_material_ui.util.adapt_react_class.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return reagent_material_ui.util.adapt_react_class.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(reagent_material_ui.util.adapt_react_class.cljs$core$IFn$_invoke$arity$1 = (function (c){
return reagent_material_ui.util.adapt_react_class.cljs$core$IFn$_invoke$arity$2(c,reagent.impl.util.fun_name(c));
}));

(reagent_material_ui.util.adapt_react_class.cljs$core$IFn$_invoke$arity$2 = (function (c,display_name){
var adapted = reagent.core.adapt_react_class(c);
(adapted.displayName = display_name);

return adapted;
}));

(reagent_material_ui.util.adapt_react_class.cljs$lang$maxFixedArity = 2);

reagent_material_ui.util.color_key_QMARK_ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 8, ["A700",null,"A200",null,new cljs.core.Keyword(null,"A200","A200",-116883354),null,new cljs.core.Keyword(null,"A400","A400",1881009576),null,new cljs.core.Keyword(null,"A700","A700",-181053111),null,"A400",null,new cljs.core.Keyword(null,"A100","A100",-1657389641),null,"A100",null], null), null);
reagent_material_ui.util.numeric_string_QMARK_ = (function reagent_material_ui$util$numeric_string_QMARK_(s){
return ((typeof s === 'string') && ((!((cljs.core.re_matches(/[0-9]+/,s) == null)))));
});
reagent_material_ui.util.pascal_case_QMARK_ = (function reagent_material_ui$util$pascal_case_QMARK_(s){
return ((typeof s === 'string') && (cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 26, ["A",null,"B",null,"C",null,"D",null,"E",null,"F",null,"G",null,"H",null,"I",null,"J",null,"K",null,"L",null,"M",null,"N",null,"O",null,"P",null,"Q",null,"R",null,"S",null,"T",null,"U",null,"V",null,"W",null,"X",null,"Y",null,"Z",null], null), null),cljs.core.first(s))));
});
reagent_material_ui.util.keyword_safe_QMARK_ = (function reagent_material_ui$util$keyword_safe_QMARK_(s){
return (!((cljs.core.re_matches(/[-*+!?<>='&$%#|\w]+/,s) == null)));
});
reagent_material_ui.util.key__GT_str = (function reagent_material_ui$util$key__GT_str(k){
var n = cljs.core.name(k);
if(cljs.core.truth_((reagent_material_ui.util.color_key_QMARK_.cljs$core$IFn$_invoke$arity$1 ? reagent_material_ui.util.color_key_QMARK_.cljs$core$IFn$_invoke$arity$1(k) : reagent_material_ui.util.color_key_QMARK_.call(null,k)))){
return n;
} else {
if(clojure.string.starts_with_QMARK_(n,"data-")){
return n;
} else {
if(clojure.string.starts_with_QMARK_(n,"aria-")){
return n;
} else {
if(reagent_material_ui.util.pascal_case_QMARK_(n)){
return n;
} else {
return camel_snake_kebab.core.__GT_camelCaseString(k);

}
}
}
}
});
reagent_material_ui.util.convert_map_keys = (function reagent_material_ui$util$convert_map_keys(m,f){
return clojure.walk.postwalk((function (x){
if(cljs.core.map_entry_QMARK_(x)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__40723 = cljs.core.key(x);
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__40723) : f.call(null,G__40723));
})(),cljs.core.val(x)], null);
} else {
return x;
}
}),m);
});
reagent_material_ui.util.clj__GT_js_SINGLEQUOTE_ = (function reagent_material_ui$util$clj__GT_js_SINGLEQUOTE_(obj){
return cljs.core.clj__GT_js(reagent_material_ui.util.convert_map_keys(obj,(function (k){
if((k instanceof cljs.core.Keyword)){
return reagent_material_ui.util.key__GT_str(k);
} else {
return k;
}
})));
});
reagent_material_ui.util.js_key__GT_clj = (function reagent_material_ui$util$js_key__GT_clj(k){
if((k instanceof cljs.core.Keyword)){
return k;
} else {
if(cljs.core.truth_((reagent_material_ui.util.color_key_QMARK_.cljs$core$IFn$_invoke$arity$1 ? reagent_material_ui.util.color_key_QMARK_.cljs$core$IFn$_invoke$arity$1(k) : reagent_material_ui.util.color_key_QMARK_.call(null,k)))){
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(k);
} else {
if(reagent_material_ui.util.numeric_string_QMARK_(k)){
return parseInt(k);
} else {
if(reagent_material_ui.util.keyword_safe_QMARK_(k)){
if(reagent_material_ui.util.pascal_case_QMARK_(k)){
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(k);
} else {
return camel_snake_kebab.core.__GT_kebab_case_keyword(k);
}
} else {
return k;

}
}
}
}
});
reagent_material_ui.util.js__GT_clj_SINGLEQUOTE_ = (function reagent_material_ui$util$js__GT_clj_SINGLEQUOTE_(obj){
var convert = (function reagent_material_ui$util$js__GT_clj_SINGLEQUOTE__$_convert(x){
if(cljs.core.seq_QMARK_(x)){
return cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2(reagent_material_ui$util$js__GT_clj_SINGLEQUOTE__$_convert,x));
} else {
if(cljs.core.map_entry_QMARK_(x)){
return (new cljs.core.MapEntry(reagent_material_ui$util$js__GT_clj_SINGLEQUOTE__$_convert(cljs.core.key(x)),reagent_material_ui$util$js__GT_clj_SINGLEQUOTE__$_convert(cljs.core.val(x)),null));
} else {
if(cljs.core.coll_QMARK_(x)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.empty(x),cljs.core.map.cljs$core$IFn$_invoke$arity$1(reagent_material_ui$util$js__GT_clj_SINGLEQUOTE__$_convert),x);
} else {
if(cljs.core.array_QMARK_(x)){
return cljs.core.persistent_BANG_(cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p1__40730_SHARP_,p2__40731_SHARP_){
return cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$2(p1__40730_SHARP_,reagent_material_ui$util$js__GT_clj_SINGLEQUOTE__$_convert(p2__40731_SHARP_));
}),cljs.core.transient$(cljs.core.PersistentVector.EMPTY),x));
} else {
if(cljs.core.truth_(module$node_modules$react$index.isValidElement(x))){
return x;
} else {
if((cljs.core.type(x) === Object)){
return cljs.core.persistent_BANG_(cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (r,k){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("ref",k)){
return cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(r,new cljs.core.Keyword(null,"ref","ref",1289896967),goog.object.get(x,k));
} else {
return cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(r,reagent_material_ui.util.js_key__GT_clj(k),reagent_material_ui$util$js__GT_clj_SINGLEQUOTE__$_convert(goog.object.get(x,k)));
}
}),cljs.core.transient$(cljs.core.PersistentArrayMap.EMPTY),cljs.core.js_keys(x)));
} else {
return x;

}
}
}
}
}
}
});
return convert(obj);
});
reagent_material_ui.util.wrap_clj_function = (function reagent_material_ui$util$wrap_clj_function(f){
return (function() { 
var G__40801__delegate = function (args){
return reagent_material_ui.util.clj__GT_js_SINGLEQUOTE_(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,cljs.core.map.cljs$core$IFn$_invoke$arity$2(reagent_material_ui.util.js__GT_clj_SINGLEQUOTE_,args)));
};
var G__40801 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__40802__i = 0, G__40802__a = new Array(arguments.length -  0);
while (G__40802__i < G__40802__a.length) {G__40802__a[G__40802__i] = arguments[G__40802__i + 0]; ++G__40802__i;}
  args = new cljs.core.IndexedSeq(G__40802__a,0,null);
} 
return G__40801__delegate.call(this,args);};
G__40801.cljs$lang$maxFixedArity = 0;
G__40801.cljs$lang$applyTo = (function (arglist__40803){
var args = cljs.core.seq(arglist__40803);
return G__40801__delegate(args);
});
G__40801.cljs$core$IFn$_invoke$arity$variadic = G__40801__delegate;
return G__40801;
})()
;
});
reagent_material_ui.util.wrap_js_function = (function reagent_material_ui$util$wrap_js_function(f){
return (function() { 
var G__40806__delegate = function (args){
return reagent_material_ui.util.js__GT_clj_SINGLEQUOTE_(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,cljs.core.map.cljs$core$IFn$_invoke$arity$2(reagent_material_ui.util.clj__GT_js_SINGLEQUOTE_,args)));
};
var G__40806 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__40807__i = 0, G__40807__a = new Array(arguments.length -  0);
while (G__40807__i < G__40807__a.length) {G__40807__a[G__40807__i] = arguments[G__40807__i + 0]; ++G__40807__i;}
  args = new cljs.core.IndexedSeq(G__40807__a,0,null);
} 
return G__40806__delegate.call(this,args);};
G__40806.cljs$lang$maxFixedArity = 0;
G__40806.cljs$lang$applyTo = (function (arglist__40808){
var args = cljs.core.seq(arglist__40808);
return G__40806__delegate(args);
});
G__40806.cljs$core$IFn$_invoke$arity$variadic = G__40806__delegate;
return G__40806;
})()
;
});
reagent_material_ui.util.wrap_all_clj_functions = (function reagent_material_ui$util$wrap_all_clj_functions(m){
return clojure.walk.postwalk((function (x){
if(cljs.core.fn_QMARK_(x)){
return reagent_material_ui.util.wrap_clj_function(x);
} else {
return x;
}
}),m);
});
reagent_material_ui.util.reactify_component = (function reagent_material_ui$util$reactify_component(component){
var reactified = module$node_modules$react$index.forwardRef((function (props,ref){
var clj_props = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(reagent_material_ui.util.js__GT_clj_SINGLEQUOTE_(props),new cljs.core.Keyword(null,"ref","ref",1289896967),ref);
return reagent.core.as_element.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [component,clj_props], null));
}));
(reactified.displayName = reagent.impl.util.fun_name(component));

return reactified;
});
reagent_material_ui.util.wrap_jss_styles = (function reagent_material_ui$util$wrap_jss_styles(styles){
if(cljs.core.fn_QMARK_(styles)){
return (function (theme){
return reagent_material_ui.util.clj__GT_js_SINGLEQUOTE_(reagent_material_ui.util.wrap_all_clj_functions((function (){var G__40747 = reagent_material_ui.util.js__GT_clj_SINGLEQUOTE_(theme);
return (styles.cljs$core$IFn$_invoke$arity$1 ? styles.cljs$core$IFn$_invoke$arity$1(G__40747) : styles.call(null,G__40747));
})()));
});
} else {
return cljs.core.clj__GT_js(reagent_material_ui.util.wrap_all_clj_functions(styles));
}
});
reagent_material_ui.util.apply_hoc = (function reagent_material_ui$util$apply_hoc(hoc,component){
return reagent_material_ui.util.adapt_react_class.cljs$core$IFn$_invoke$arity$1((function (){var G__40750 = reagent_material_ui.util.reactify_component(component);
return (hoc.cljs$core$IFn$_invoke$arity$1 ? hoc.cljs$core$IFn$_invoke$arity$1(G__40750) : hoc.call(null,G__40750));
})());
});
reagent_material_ui.util.get_anycase = (function reagent_material_ui$util$get_anycase(var_args){
var G__40753 = arguments.length;
switch (G__40753) {
case 2:
return reagent_material_ui.util.get_anycase.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return reagent_material_ui.util.get_anycase.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(reagent_material_ui.util.get_anycase.cljs$core$IFn$_invoke$arity$2 = (function (m,k){
return reagent_material_ui.util.get_anycase.cljs$core$IFn$_invoke$arity$3(m,k,null);
}));

(reagent_material_ui.util.get_anycase.cljs$core$IFn$_invoke$arity$3 = (function (m,k,default$){
var temp__5733__auto__ = (function (){var or__4126__auto__ = cljs.core.find(m,camel_snake_kebab.core.__GT_kebab_case_keyword(k));
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.find(m,camel_snake_kebab.core.__GT_camelCaseKeyword(k));
}
})();
if(cljs.core.truth_(temp__5733__auto__)){
var entry = temp__5733__auto__;
return cljs.core.val(entry);
} else {
return default$;
}
}));

(reagent_material_ui.util.get_anycase.cljs$lang$maxFixedArity = 3);

reagent_material_ui.util.assoc_anycase = (function reagent_material_ui$util$assoc_anycase(var_args){
var G__40767 = arguments.length;
switch (G__40767) {
case 3:
return reagent_material_ui.util.assoc_anycase.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
var args_arr__4757__auto__ = [];
var len__4736__auto___40815 = arguments.length;
var i__4737__auto___40816 = (0);
while(true){
if((i__4737__auto___40816 < len__4736__auto___40815)){
args_arr__4757__auto__.push((arguments[i__4737__auto___40816]));

var G__40817 = (i__4737__auto___40816 + (1));
i__4737__auto___40816 = G__40817;
continue;
} else {
}
break;
}

var argseq__4758__auto__ = (new cljs.core.IndexedSeq(args_arr__4757__auto__.slice((3)),(0),null));
return reagent_material_ui.util.assoc_anycase.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4758__auto__);

}
});

(reagent_material_ui.util.assoc_anycase.cljs$core$IFn$_invoke$arity$3 = (function (m,k,v){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(m,camel_snake_kebab.core.__GT_camelCaseKeyword(k)),camel_snake_kebab.core.__GT_kebab_case_keyword(k),v);
}));

(reagent_material_ui.util.assoc_anycase.cljs$core$IFn$_invoke$arity$variadic = (function (m,k,v,kvs){
while(true){
var ret = reagent_material_ui.util.assoc_anycase.cljs$core$IFn$_invoke$arity$3(m,k,v);
if(cljs.core.truth_(kvs)){
var G__40818 = ret;
var G__40819 = cljs.core.first(kvs);
var G__40820 = cljs.core.second(kvs);
var G__40821 = cljs.core.nnext(kvs);
m = G__40818;
k = G__40819;
v = G__40820;
kvs = G__40821;
continue;
} else {
return ret;
}
break;
}
}));

/** @this {Function} */
(reagent_material_ui.util.assoc_anycase.cljs$lang$applyTo = (function (seq40762){
var G__40763 = cljs.core.first(seq40762);
var seq40762__$1 = cljs.core.next(seq40762);
var G__40764 = cljs.core.first(seq40762__$1);
var seq40762__$2 = cljs.core.next(seq40762__$1);
var G__40765 = cljs.core.first(seq40762__$2);
var seq40762__$3 = cljs.core.next(seq40762__$2);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__40763,G__40764,G__40765,seq40762__$3);
}));

(reagent_material_ui.util.assoc_anycase.cljs$lang$maxFixedArity = (3));

reagent_material_ui.util.debounce = (function reagent_material_ui$util$debounce(f,ms){
var timeout = cljs.core.volatile_BANG_(null);
var ret = (function() { 
var G__40824__delegate = function (args){
clearTimeout(cljs.core.deref(timeout));

return cljs.core.vreset_BANG_(timeout,setTimeout((function (){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,args);
}),ms));
};
var G__40824 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__40825__i = 0, G__40825__a = new Array(arguments.length -  0);
while (G__40825__i < G__40825__a.length) {G__40825__a[G__40825__i] = arguments[G__40825__i + 0]; ++G__40825__i;}
  args = new cljs.core.IndexedSeq(G__40825__a,0,null);
} 
return G__40824__delegate.call(this,args);};
G__40824.cljs$lang$maxFixedArity = 0;
G__40824.cljs$lang$applyTo = (function (arglist__40826){
var args = cljs.core.seq(arglist__40826);
return G__40824__delegate(args);
});
G__40824.cljs$core$IFn$_invoke$arity$variadic = G__40824__delegate;
return G__40824;
})()
;
(ret.clear = (function (){
return clearTimeout(cljs.core.deref(timeout));
}));

return ret;
});
reagent_material_ui.util.remove_undefined_vals = (function reagent_material_ui$util$remove_undefined_vals(m){
return cljs.core.persistent_BANG_(cljs.core.reduce_kv((function (acc,k,v){
if((void 0 === v)){
return cljs.core.dissoc_BANG_.cljs$core$IFn$_invoke$arity$2(acc,k);
} else {
return acc;
}
}),cljs.core.transient$(m),m));
});
reagent_material_ui.util.set_ref = (function reagent_material_ui$util$set_ref(ref,value){
if(cljs.core.fn_QMARK_(ref)){
return (ref.cljs$core$IFn$_invoke$arity$1 ? ref.cljs$core$IFn$_invoke$arity$1(value) : ref.call(null,value));
} else {
if(cljs.core.truth_(ref)){
return (ref.current = value);
} else {
return null;
}
}
});
reagent_material_ui.util.use_fork_ref = (function reagent_material_ui$util$use_fork_ref(var_args){
var args__4742__auto__ = [];
var len__4736__auto___40832 = arguments.length;
var i__4737__auto___40833 = (0);
while(true){
if((i__4737__auto___40833 < len__4736__auto___40832)){
args__4742__auto__.push((arguments[i__4737__auto___40833]));

var G__40834 = (i__4737__auto___40833 + (1));
i__4737__auto___40833 = G__40834;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return reagent_material_ui.util.use_fork_ref.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(reagent_material_ui.util.use_fork_ref.cljs$core$IFn$_invoke$arity$variadic = (function (refs){
return module$node_modules$react$index.useMemo((function (){
if(cljs.core.not_every_QMARK_(cljs.core.nil_QMARK_,refs)){
return (function (value){
var seq__40787 = cljs.core.seq(refs);
var chunk__40788 = null;
var count__40789 = (0);
var i__40790 = (0);
while(true){
if((i__40790 < count__40789)){
var ref = chunk__40788.cljs$core$IIndexed$_nth$arity$2(null,i__40790);
reagent_material_ui.util.set_ref(ref,value);


var G__40835 = seq__40787;
var G__40836 = chunk__40788;
var G__40837 = count__40789;
var G__40838 = (i__40790 + (1));
seq__40787 = G__40835;
chunk__40788 = G__40836;
count__40789 = G__40837;
i__40790 = G__40838;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__40787);
if(temp__5735__auto__){
var seq__40787__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__40787__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__40787__$1);
var G__40839 = cljs.core.chunk_rest(seq__40787__$1);
var G__40840 = c__4556__auto__;
var G__40841 = cljs.core.count(c__4556__auto__);
var G__40842 = (0);
seq__40787 = G__40839;
chunk__40788 = G__40840;
count__40789 = G__40841;
i__40790 = G__40842;
continue;
} else {
var ref = cljs.core.first(seq__40787__$1);
reagent_material_ui.util.set_ref(ref,value);


var G__40843 = cljs.core.next(seq__40787__$1);
var G__40844 = null;
var G__40845 = (0);
var G__40846 = (0);
seq__40787 = G__40843;
chunk__40788 = G__40844;
count__40789 = G__40845;
i__40790 = G__40846;
continue;
}
} else {
return null;
}
}
break;
}
});
} else {
return null;
}
}),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.array,refs));
}));

(reagent_material_ui.util.use_fork_ref.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(reagent_material_ui.util.use_fork_ref.cljs$lang$applyTo = (function (seq40784){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq40784));
}));

reagent_material_ui.util.use_callback = (function reagent_material_ui$util$use_callback(callback,props){
return module$node_modules$react$index.useCallback(callback,props);
});
reagent_material_ui.util.use_effect = (function reagent_material_ui$util$use_effect(effect,props){
return module$node_modules$react$index.useEffect(effect,props);
});
reagent_material_ui.util.use_layout_effect = (function reagent_material_ui$util$use_layout_effect(effect){
return module$node_modules$react$index.useLayoutEffect(effect);
});
reagent_material_ui.util.use_ref = (function reagent_material_ui$util$use_ref(value){
return module$node_modules$react$index.useRef(value);
});
reagent_material_ui.util.use_state = (function reagent_material_ui$util$use_state(initial_state){
return module$node_modules$react$index.useState(initial_state);
});

//# sourceMappingURL=reagent_material_ui.util.js.map
