goog.provide('bfuncs.typesetting');
var module$node_modules$katex$dist$katex=shadow.js.require("module$node_modules$katex$dist$katex", {});
if((typeof bfuncs !== 'undefined') && (typeof bfuncs.typesetting !== 'undefined') && (typeof bfuncs.typesetting._BANG_g_formatters !== 'undefined')){
} else {
bfuncs.typesetting._BANG_g_formatters = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
}
bfuncs.typesetting.tex_var_escape = (function bfuncs$typesetting$tex_var_escape(string,_alt_QMARK_){
return clojure.string.replace(string,/[%${}_#&~^-]/,(function (p1__67671_SHARP_){
var G__67674 = p1__67671_SHARP_;
switch (G__67674) {
case "~":
return "{\\sim}";

break;
case "^":
return "{\\char94}";

break;
case "-":
return "\\text{--}";

break;
default:
return ["\\",cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__67671_SHARP_)].join('');

}
}));
});
bfuncs.typesetting.format_multi_char = (function bfuncs$typesetting$format_multi_char(string,alt_QMARK_){
if(clojure.string.blank_QMARK_(string)){
return "{}";
} else {
var vec__67679 = clojure.string.split.cljs$core$IFn$_invoke$arity$3(string,/_/,(2));
var split = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67679,(0),null);
var tail = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67679,(1),null);
var fmt_split = (function (){var G__67682 = bfuncs.typesetting.tex_var_escape(split,alt_QMARK_);
if(cljs.core.not((function (){var or__4126__auto__ = cljs.core.char_QMARK_(split);
if(or__4126__auto__){
return or__4126__auto__;
} else {
return cljs.core.re_matches(/\d*/,split);
}
})())){
return bfuncs.utils.str_surround("\\mathit{",(cljs.core.truth_((function (){var and__4115__auto__ = alt_QMARK_;
if(cljs.core.truth_(and__4115__auto__)){
return cljs.core.not(tail);
} else {
return and__4115__auto__;
}
})())?"\\,}":"}"),G__67682);
} else {
return G__67682;
}
})();
if(cljs.core.truth_(tail)){
return ["{",fmt_split,"_{",cljs.core.str.cljs$core$IFn$_invoke$arity$1((bfuncs.typesetting.format_multi_char.cljs$core$IFn$_invoke$arity$2 ? bfuncs.typesetting.format_multi_char.cljs$core$IFn$_invoke$arity$2(tail,alt_QMARK_) : bfuncs.typesetting.format_multi_char.call(null,tail,alt_QMARK_))),"}}"].join('');
} else {
return fmt_split;
}
}
});
bfuncs.typesetting.estimate_var_cost = (function bfuncs$typesetting$estimate_var_cost(var_args){
var G__67684 = arguments.length;
switch (G__67684) {
case 1:
return bfuncs.typesetting.estimate_var_cost.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return bfuncs.typesetting.estimate_var_cost.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(bfuncs.typesetting.estimate_var_cost.cljs$core$IFn$_invoke$arity$1 = (function (x){
var s = cljs.core.str.cljs$core$IFn$_invoke$arity$1(x);
var temp__27540__auto__ = ((s).length);
var len = temp__27540__auto__;
var G__67685 = temp__27540__auto__;
switch (G__67685) {
case (0):
return (0);

break;
case (1):
if(cljs.core.truth_(cljs.core.re_matches(/[A-Z]/,s))){
return 0.8779;
} else {
return 0.5681;
}

break;
default:
var uppers = cljs.core.count(cljs.core.re_seq(/[A-Z]/,s));
var lowers = cljs.core.count(cljs.core.re_seq(/[a-z]/,s));
return (((0.7788 * uppers) + (0.5105 * lowers)) + (0.5618 * ((len - uppers) - lowers)));

}
}));

(bfuncs.typesetting.estimate_var_cost.cljs$core$IFn$_invoke$arity$2 = (function (x,var_fn){
var temp__5737__auto__ = ((cljs.core.ifn_QMARK_(var_fn))?(var_fn.cljs$core$IFn$_invoke$arity$1 ? var_fn.cljs$core$IFn$_invoke$arity$1(x) : var_fn.call(null,x)):null);
if((temp__5737__auto__ == null)){
return bfuncs.typesetting.estimate_var_cost.cljs$core$IFn$_invoke$arity$1(x);
} else {
var v = temp__5737__auto__;
var temp__5737__auto____$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.meta(var_fn),new cljs.core.Keyword(null,"cost-fn","cost-fn",1972507749));
if((temp__5737__auto____$1 == null)){
return bfuncs.typesetting.estimate_var_cost.cljs$core$IFn$_invoke$arity$1(v);
} else {
var cf = temp__5737__auto____$1;
return (cf.cljs$core$IFn$_invoke$arity$1 ? cf.cljs$core$IFn$_invoke$arity$1(x) : cf.call(null,x));
}
}
}));

(bfuncs.typesetting.estimate_var_cost.cljs$lang$maxFixedArity = 2);

bfuncs.typesetting.format_latex_var = cljs.core.memoize((function (x,alt_QMARK_){
var s = cljs.core.str.cljs$core$IFn$_invoke$arity$1(x);
if(cljs.core.char_QMARK_(s)){
return bfuncs.typesetting.tex_var_escape(s,alt_QMARK_);
} else {
return bfuncs.typesetting.format_multi_char(s,alt_QMARK_);
}
}));
bfuncs.typesetting.estimate_subscript_cost = (function bfuncs$typesetting$estimate_subscript_cost(x){
if(cljs.core.int_QMARK_(x)){
var G__67687 = (bfuncs.utils.int_digits.cljs$core$IFn$_invoke$arity$1(x) * 0.3874);
if((x < (0))){
return (G__67687 + 0.5977);
} else {
return G__67687;
}
} else {
var s = cljs.core.str.cljs$core$IFn$_invoke$arity$1(x);
return ((((cljs.core.count(cljs.core.re_seq(/[A-Z]/,s)) * 0.6173) + (cljs.core.count(cljs.core.re_seq(/[a-z]/,s)) * 0.4005)) + (cljs.core.count(cljs.core.re_seq(/[-+]/,s)) * 0.5977)) + (cljs.core.count(cljs.core.re_seq(/\d/,s)) * 0.3874));
}
});
bfuncs.typesetting.name_or = (function bfuncs$typesetting$name_or(f){
return (function (p1__67692_SHARP_){
if((p1__67692_SHARP_ instanceof cljs.core.Keyword)){
return cljs.core.name(p1__67692_SHARP_);
} else {
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(p1__67692_SHARP_) : f.call(null,p1__67692_SHARP_));
}
});
});
bfuncs.typesetting.name_or_identity = (function bfuncs$typesetting$name_or_identity(x){
if((x instanceof cljs.core.Keyword)){
return cljs.core.name(x);
} else {
return x;
}
});
bfuncs.typesetting.int_or_keyword_QMARK_ = cljs.core.some_fn.cljs$core$IFn$_invoke$arity$2(cljs.core.int_QMARK_,cljs.core.keyword_QMARK_);
bfuncs.typesetting.subscript_formatter = (function bfuncs$typesetting$subscript_formatter(var_args){
var G__67701 = arguments.length;
switch (G__67701) {
case 1:
return bfuncs.typesetting.subscript_formatter.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return bfuncs.typesetting.subscript_formatter.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return bfuncs.typesetting.subscript_formatter.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(bfuncs.typesetting.subscript_formatter.cljs$core$IFn$_invoke$arity$1 = (function (spec){
return bfuncs.typesetting.subscript_formatter.cljs$core$IFn$_invoke$arity$3(spec,bfuncs.typesetting.int_or_keyword_QMARK_,bfuncs.typesetting.name_or_identity);
}));

(bfuncs.typesetting.subscript_formatter.cljs$core$IFn$_invoke$arity$2 = (function (spec,tf){
return bfuncs.typesetting.subscript_formatter.cljs$core$IFn$_invoke$arity$3(spec,bfuncs.typesetting.int_or_keyword_QMARK_,tf);
}));

(bfuncs.typesetting.subscript_formatter.cljs$core$IFn$_invoke$arity$3 = (function (p__67702,pred,tf){
var vec__67703 = p__67702;
var base = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67703,(0),null);
var desc = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67703,(1),null);
var base_cost = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67703,(2),null);
return cljs.core.with_meta((function() {
var G__68114 = null;
var G__68114__0 = (function (){
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(base);
});
var G__68114__1 = (function (x){
if(cljs.core.truth_((pred.cljs$core$IFn$_invoke$arity$1 ? pred.cljs$core$IFn$_invoke$arity$1(x) : pred.call(null,x)))){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(base),"_{",cljs.core.str.cljs$core$IFn$_invoke$arity$1((tf.cljs$core$IFn$_invoke$arity$1 ? tf.cljs$core$IFn$_invoke$arity$1(x) : tf.call(null,x))),"}"].join('');
} else {
return null;
}
});
G__68114 = function(x){
switch(arguments.length){
case 0:
return G__68114__0.call(this);
case 1:
return G__68114__1.call(this,x);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__68114.cljs$core$IFn$_invoke$arity$0 = G__68114__0;
G__68114.cljs$core$IFn$_invoke$arity$1 = G__68114__1;
return G__68114;
})()
,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"cost-fn","cost-fn",1972507749),(function (p1__67693_SHARP_){
return (base_cost + bfuncs.typesetting.estimate_subscript_cost((tf.cljs$core$IFn$_invoke$arity$1 ? tf.cljs$core$IFn$_invoke$arity$1(p1__67693_SHARP_) : tf.call(null,p1__67693_SHARP_))));
}),new cljs.core.Keyword(null,"text-fn","text-fn",1202470087),(function (p1__67694_SHARP_){
if(cljs.core.truth_((pred.cljs$core$IFn$_invoke$arity$1 ? pred.cljs$core$IFn$_invoke$arity$1(p1__67694_SHARP_) : pred.call(null,p1__67694_SHARP_)))){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(base),cljs.core.str.cljs$core$IFn$_invoke$arity$1((tf.cljs$core$IFn$_invoke$arity$1 ? tf.cljs$core$IFn$_invoke$arity$1(p1__67694_SHARP_) : tf.call(null,p1__67694_SHARP_)))].join('');
} else {
return null;
}
}),new cljs.core.Keyword(null,"desc-fn","desc-fn",1393799433),(function (p1__67695_SHARP_){
if(cljs.core.truth_((pred.cljs$core$IFn$_invoke$arity$1 ? pred.cljs$core$IFn$_invoke$arity$1(p1__67695_SHARP_) : pred.call(null,p1__67695_SHARP_)))){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(desc)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((tf.cljs$core$IFn$_invoke$arity$1 ? tf.cljs$core$IFn$_invoke$arity$1(p1__67695_SHARP_) : tf.call(null,p1__67695_SHARP_)))].join('');
} else {
return null;
}
})], null));
}));

(bfuncs.typesetting.subscript_formatter.cljs$lang$maxFixedArity = 3);

bfuncs.typesetting.format_prime_implicant = bfuncs.typesetting.subscript_formatter.cljs$core$IFn$_invoke$arity$2((bfuncs.typesetting_data.bases.cljs$core$IFn$_invoke$arity$1 ? bfuncs.typesetting_data.bases.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"pimplicant","pimplicant",1355016663)) : bfuncs.typesetting_data.bases.call(null,new cljs.core.Keyword(null,"pimplicant","pimplicant",1355016663))),bfuncs.typesetting.name_or(cljs.core.inc));
bfuncs.typesetting.format_prime_implicate = bfuncs.typesetting.subscript_formatter.cljs$core$IFn$_invoke$arity$2((bfuncs.typesetting_data.bases.cljs$core$IFn$_invoke$arity$1 ? bfuncs.typesetting_data.bases.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"pimplicate","pimplicate",318435593)) : bfuncs.typesetting_data.bases.call(null,new cljs.core.Keyword(null,"pimplicate","pimplicate",318435593))),bfuncs.typesetting.name_or(cljs.core.inc));
bfuncs.typesetting.format_minterm = bfuncs.typesetting.subscript_formatter.cljs$core$IFn$_invoke$arity$1((bfuncs.typesetting_data.bases.cljs$core$IFn$_invoke$arity$1 ? bfuncs.typesetting_data.bases.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"minterm","minterm",999017267)) : bfuncs.typesetting_data.bases.call(null,new cljs.core.Keyword(null,"minterm","minterm",999017267))));
bfuncs.typesetting.format_maxterm = bfuncs.typesetting.subscript_formatter.cljs$core$IFn$_invoke$arity$1((bfuncs.typesetting_data.bases.cljs$core$IFn$_invoke$arity$1 ? bfuncs.typesetting_data.bases.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"maxterm","maxterm",-1289287645)) : bfuncs.typesetting_data.bases.call(null,new cljs.core.Keyword(null,"maxterm","maxterm",-1289287645))));
bfuncs.typesetting.format_var = (function bfuncs$typesetting$format_var(var_args){
var G__67711 = arguments.length;
switch (G__67711) {
case 1:
return bfuncs.typesetting.format_var.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return bfuncs.typesetting.format_var.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(bfuncs.typesetting.format_var.cljs$core$IFn$_invoke$arity$1 = (function (nvars){
return bfuncs.typesetting.subscript_formatter.cljs$core$IFn$_invoke$arity$2((bfuncs.typesetting_data.bases.cljs$core$IFn$_invoke$arity$1 ? bfuncs.typesetting_data.bases.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"var","var",-769682797)) : bfuncs.typesetting_data.bases.call(null,new cljs.core.Keyword(null,"var","var",-769682797))),bfuncs.typesetting.name_or(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core._,(nvars - (1)))));
}));

(bfuncs.typesetting.format_var.cljs$core$IFn$_invoke$arity$2 = (function (i,nvars){
if(cljs.core.truth_(bfuncs.typesetting.int_or_keyword_QMARK_(i))){
return ["\\var_{",cljs.core.str.cljs$core$IFn$_invoke$arity$1((((i instanceof cljs.core.Keyword))?cljs.core.name(i):((nvars - i) - (1)))),"}"].join('');
} else {
return null;
}
}));

(bfuncs.typesetting.format_var.cljs$lang$maxFixedArity = 2);

bfuncs.typesetting.format_covered_var = bfuncs.typesetting.subscript_formatter.cljs$core$IFn$_invoke$arity$1((bfuncs.typesetting_data.bases.cljs$core$IFn$_invoke$arity$1 ? bfuncs.typesetting_data.bases.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"cvar","cvar",317853256)) : bfuncs.typesetting_data.bases.call(null,new cljs.core.Keyword(null,"cvar","cvar",317853256))));
bfuncs.typesetting.format_prime_var = bfuncs.typesetting.subscript_formatter.cljs$core$IFn$_invoke$arity$2((bfuncs.typesetting_data.bases.cljs$core$IFn$_invoke$arity$1 ? bfuncs.typesetting_data.bases.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"pvar","pvar",-1834441831)) : bfuncs.typesetting_data.bases.call(null,new cljs.core.Keyword(null,"pvar","pvar",-1834441831))),bfuncs.typesetting.name_or(cljs.core.inc));
bfuncs.typesetting.format_failure = cljs.core.with_meta((function (failure){
return ["{\\color{red} ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.second(failure)),"}"].join('');
}),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cost","cost",-1094861735),cljs.core.constantly((100))], null));
bfuncs.typesetting.breaking_infix = (function bfuncs$typesetting$breaking_infix(op){
return [" \\allowbreak ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(op)," \\nobreak "].join('');
});
bfuncs.typesetting.__GT_op_formatter = (function bfuncs$typesetting$__GT_op_formatter(f,fixity,cost){
return cljs.core.with_meta(f,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"fixity","fixity",464441263),fixity,new cljs.core.Keyword(null,"cost","cost",-1094861735),cost], null));
});
bfuncs.typesetting.op_formatter = (function bfuncs$typesetting$op_formatter(spec){
if(cljs.core.vector_QMARK_(spec)){
var vec__67718 = spec;
var fixity = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67718,(0),null);
var op = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67718,(1),null);
var price = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67718,(2),null);
var alt = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67718,(3),null);
var G__67721 = fixity;
var G__67721__$1 = (((G__67721 instanceof cljs.core.Keyword))?G__67721.fqn:null);
switch (G__67721__$1) {
case "constant":
return bfuncs.typesetting.__GT_op_formatter(cljs.core.constantly(op),fixity,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [price,(0)], null));

break;
case "infix":
var alt_op = (function (){var or__4126__auto__ = alt;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return bfuncs.typesetting.breaking_infix(op);
}
})();
return bfuncs.typesetting.__GT_op_formatter((function (p1__67713_SHARP_,p2__67712_SHARP_){
return clojure.string.join.cljs$core$IFn$_invoke$arity$2((cljs.core.truth_(p2__67712_SHARP_)?alt_op:op),p1__67713_SHARP_);
}),fixity,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),price], null));

break;
case "prefix":
return bfuncs.typesetting.__GT_op_formatter((function (p1__67714_SHARP_){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(op),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.first(p1__67714_SHARP_))].join('');
}),fixity,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [price,(0)], null));

break;
case "postfix":
return bfuncs.typesetting.__GT_op_formatter((function (p1__67715_SHARP_){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.first(p1__67715_SHARP_)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(op)].join('');
}),fixity,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [price,(0)], null));

break;
case "matchfix":
var vec__67722 = op;
var l = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67722,(0),null);
var r = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67722,(1),null);
var sep = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67722,(2),null);
var vec__67725 = price;
var pl = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67725,(0),null);
var pr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67725,(1),null);
var ps = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67725,(2),null);
return bfuncs.typesetting.__GT_op_formatter((cljs.core.truth_(sep)?cljs.core.partial.cljs$core$IFn$_invoke$arity$4(bfuncs.utils.str_join,l,r,sep):(function (p1__67716_SHARP_){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(l),clojure.string.join.cljs$core$IFn$_invoke$arity$1(p1__67716_SHARP_),cljs.core.str.cljs$core$IFn$_invoke$arity$1(r)].join('');
})),fixity,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(pl + pr),(function (){var or__4126__auto__ = ps;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return (0);
}
})()], null));

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__67721__$1)].join('')));

}
} else {
if(typeof spec === 'string'){
return bfuncs.typesetting.__GT_op_formatter((function (p1__67717_SHARP_){
return clojure.string.join.cljs$core$IFn$_invoke$arity$2(spec,p1__67717_SHARP_);
}),new cljs.core.Keyword(null,"infix","infix",1991018113),null);
} else {
if(cljs.core.ifn_QMARK_(spec)){
return spec;
} else {
throw (new Error([cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([spec], 0))," is not a function, string, or vector of the form [fixity ops price macros]."].join('')));

}
}
}
});
bfuncs.typesetting.default_latex_formatters = cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(bfuncs.utils.map_vals((function (p1__67728_SHARP_){
return bfuncs.typesetting.op_formatter(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(p1__67728_SHARP_,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"formats","formats",-1397890976),(0),new cljs.core.Keyword(null,"latex","latex",-1820161144)], null)));
}),bfuncs.typesetting_data.operations),new cljs.core.Keyword("instaparse","failure","instaparse/failure",1422918607),bfuncs.typesetting.format_failure,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"var","var",-769682797),bfuncs.typesetting.format_latex_var], 0));
bfuncs.typesetting.default_text_formatters = cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(bfuncs.utils.map_vals((function (p1__67729_SHARP_){
return bfuncs.typesetting.op_formatter(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(p1__67729_SHARP_,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"formats","formats",-1397890976),(0),new cljs.core.Keyword(null,"text","text",-1790561697)], null)));
}),bfuncs.typesetting_data.operations),new cljs.core.Keyword("instaparse","failure","instaparse/failure",1422918607),bfuncs.typesetting.format_failure,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"var","var",-769682797),(function (p1__67730_SHARP_){
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__67730_SHARP_);
})], 0));
bfuncs.typesetting.default_grouping_value = (2);
bfuncs.typesetting.default_grouping = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(bfuncs.typesetting_data.grouping,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [bfuncs.typesetting.default_grouping_value,new cljs.core.Keyword(null,"spec","spec",347520401)], null));
bfuncs.typesetting.if_paren = (function bfuncs$typesetting$if_paren(test,x){
if(cljs.core.truth_(test)){
return ["(",cljs.core.str.cljs$core$IFn$_invoke$arity$1(x),")"].join('');
} else {
return x;
}
});
bfuncs.typesetting.paren_str = (function bfuncs$typesetting$paren_str(x){
return ["(",cljs.core.str.cljs$core$IFn$_invoke$arity$1(x),")"].join('');
});
bfuncs.typesetting.with_var_fn = (function bfuncs$typesetting$with_var_fn(formatters,var_fn){
if((!((var_fn == null)))){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(formatters,new cljs.core.Keyword(null,"var","var",-769682797),cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.some_fn,var_fn));
} else {
return formatters;
}
});
bfuncs.typesetting.prepare_formatters = (function bfuncs$typesetting$prepare_formatters(formatters,defaults,var_fn){
var G__67731 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([defaults,formatters], 0));
if(cljs.core.truth_(var_fn)){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(G__67731,new cljs.core.Keyword(null,"var","var",-769682797),cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.some_fn,var_fn));
} else {
return G__67731;
}
});
bfuncs.typesetting.prepare_grouping = (function bfuncs$typesetting$prepare_grouping(grouping,formatters){

return cljs.core.update.cljs$core$IFn$_invoke$arity$3(grouping,new cljs.core.Keyword(null,"precedence","precedence",-425651461),(function (prec){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p1__67733_SHARP_,p2__67732_SHARP_){
if(cljs.core.truth_((function (){var G__67734 = p2__67732_SHARP_;
var G__67734__$1 = (((G__67734 == null))?null:(formatters.cljs$core$IFn$_invoke$arity$1 ? formatters.cljs$core$IFn$_invoke$arity$1(G__67734) : formatters.call(null,G__67734)));
var G__67734__$2 = (((G__67734__$1 == null))?null:cljs.core.meta(G__67734__$1));
var G__67734__$3 = (((G__67734__$2 == null))?null:new cljs.core.Keyword(null,"fixity","fixity",464441263).cljs$core$IFn$_invoke$arity$1(G__67734__$2));
if((G__67734__$3 == null)){
return null;
} else {
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(G__67734__$3,new cljs.core.Keyword(null,"matchfix","matchfix",992788436));
}
})())){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__67733_SHARP_,p2__67732_SHARP_,NaN);
} else {
return p1__67733_SHARP_;
}
}),prec,cljs.core.keys(prec));
}));
});
bfuncs.typesetting.expression_formatter = (function bfuncs$typesetting$expression_formatter(formatters,grouping,alt){
var map__67735 = bfuncs.typesetting.prepare_grouping(grouping,formatters);
var map__67735__$1 = (((((!((map__67735 == null))))?(((((map__67735.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__67735.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__67735):map__67735);
var precedence = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67735__$1,new cljs.core.Keyword(null,"precedence","precedence",-425651461));
var group_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67735__$1,new cljs.core.Keyword(null,"group?","group?",-1871629417));
return (function bfuncs$typesetting$expression_formatter_$_go(parent_prec,child){
var vec__67739 = bfuncs.parsing.operation_operands.cljs$core$IFn$_invoke$arity$2(child,true);
var op = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67739,(0),null);
var operands = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67739,(1),null);
var G__67742 = op;
var G__67742__$1 = (((G__67742 instanceof cljs.core.Keyword))?G__67742.fqn:null);
switch (G__67742__$1) {
case "var":
case "TRUE":
case "FALSE":
var G__67744 = cljs.core.first(operands);
var G__67745 = alt;
var fexpr__67743 = (formatters.cljs$core$IFn$_invoke$arity$1 ? formatters.cljs$core$IFn$_invoke$arity$1(op) : formatters.call(null,op));
return (fexpr__67743.cljs$core$IFn$_invoke$arity$2 ? fexpr__67743.cljs$core$IFn$_invoke$arity$2(G__67744,G__67745) : fexpr__67743.call(null,G__67744,G__67745));

break;
default:
var child_prec = (precedence.cljs$core$IFn$_invoke$arity$1 ? precedence.cljs$core$IFn$_invoke$arity$1(op) : precedence.call(null,op));
if(cljs.core.truth_((group_QMARK_.cljs$core$IFn$_invoke$arity$2 ? group_QMARK_.cljs$core$IFn$_invoke$arity$2(parent_prec,child_prec) : group_QMARK_.call(null,parent_prec,child_prec)))){
return bfuncs.typesetting.paren_str((function (){var G__67748 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(bfuncs$typesetting$expression_formatter_$_go,child_prec),operands);
var G__67749 = alt;
var fexpr__67747 = (formatters.cljs$core$IFn$_invoke$arity$1 ? formatters.cljs$core$IFn$_invoke$arity$1(op) : formatters.call(null,op));
return (fexpr__67747.cljs$core$IFn$_invoke$arity$2 ? fexpr__67747.cljs$core$IFn$_invoke$arity$2(G__67748,G__67749) : fexpr__67747.call(null,G__67748,G__67749));
})());
} else {
var G__67751 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(bfuncs$typesetting$expression_formatter_$_go,child_prec),operands);
var G__67752 = alt;
var fexpr__67750 = (formatters.cljs$core$IFn$_invoke$arity$1 ? formatters.cljs$core$IFn$_invoke$arity$1(op) : formatters.call(null,op));
return (fexpr__67750.cljs$core$IFn$_invoke$arity$2 ? fexpr__67750.cljs$core$IFn$_invoke$arity$2(G__67751,G__67752) : fexpr__67750.call(null,G__67751,G__67752));
}

}
});
});
bfuncs.typesetting.__GT_plaintext = (function bfuncs$typesetting$__GT_plaintext(var_args){
var G__67754 = arguments.length;
switch (G__67754) {
case 1:
return bfuncs.typesetting.__GT_plaintext.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 4:
return bfuncs.typesetting.__GT_plaintext.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(bfuncs.typesetting.__GT_plaintext.cljs$core$IFn$_invoke$arity$1 = (function (x){
return bfuncs.typesetting.__GT_plaintext.cljs$core$IFn$_invoke$arity$4(x,null,null,null);
}));

(bfuncs.typesetting.__GT_plaintext.cljs$core$IFn$_invoke$arity$4 = (function (x,text_formatters,grouping,var_fn){
if((!((x == null)))){
return bfuncs.typesetting.expression_formatter(bfuncs.typesetting.prepare_formatters(text_formatters,bfuncs.typesetting.default_text_formatters,cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.meta(var_fn),new cljs.core.Keyword(null,"text-fn","text-fn",1202470087))),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([bfuncs.typesetting.default_grouping,grouping], 0)),false)(-Infinity,x);
} else {
return "";
}
}));

(bfuncs.typesetting.__GT_plaintext.cljs$lang$maxFixedArity = 4);

bfuncs.typesetting.grouped_latex = (function bfuncs$typesetting$grouped_latex(var_args){
var G__67760 = arguments.length;
switch (G__67760) {
case 4:
return bfuncs.typesetting.grouped_latex.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return bfuncs.typesetting.grouped_latex.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(bfuncs.typesetting.grouped_latex.cljs$core$IFn$_invoke$arity$4 = (function (x,latex_formatters,grouping,var_fn){
return bfuncs.typesetting.grouped_latex.cljs$core$IFn$_invoke$arity$5(x,latex_formatters,grouping,var_fn,(16));
}));

(bfuncs.typesetting.grouped_latex.cljs$core$IFn$_invoke$arity$5 = (function (x,latex_formatters,grouping,var_fn,max_cost){
if((!((!((x == null)))))){
return "";
} else {
var formatters = bfuncs.typesetting.prepare_formatters(latex_formatters,bfuncs.typesetting.default_latex_formatters,var_fn);
var map__67764 = bfuncs.typesetting.prepare_grouping(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([bfuncs.typesetting.default_grouping,grouping], 0)),formatters);
var map__67764__$1 = (((((!((map__67764 == null))))?(((((map__67764.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__67764.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__67764):map__67764);
var precedence = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67764__$1,new cljs.core.Keyword(null,"precedence","precedence",-425651461));
var group_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67764__$1,new cljs.core.Keyword(null,"group?","group?",-1871629417));
var p = (function bfuncs$typesetting$p(parent_prec,child){
if((!((child == null)))){
var vec__67769 = bfuncs.parsing.operation_operands.cljs$core$IFn$_invoke$arity$2(child,true);
var op = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67769,(0),null);
var operands = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67769,(1),null);
var fmt = (formatters.cljs$core$IFn$_invoke$arity$1 ? formatters.cljs$core$IFn$_invoke$arity$1(op) : formatters.call(null,op));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(op,new cljs.core.Keyword(null,"var","var",-769682797))){
var o = cljs.core.first(operands);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(fmt.cljs$core$IFn$_invoke$arity$2 ? fmt.cljs$core$IFn$_invoke$arity$2(o,true) : fmt.call(null,o,true)),bfuncs.typesetting.estimate_var_cost.cljs$core$IFn$_invoke$arity$2(o,var_fn),false], null);
} else {
var child_prec = (precedence.cljs$core$IFn$_invoke$arity$1 ? precedence.cljs$core$IFn$_invoke$arity$1(op) : precedence.call(null,op));
var map__67775 = cljs.core.meta(fmt);
var map__67775__$1 = (((((!((map__67775 == null))))?(((((map__67775.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__67775.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__67775):map__67775);
var fixity = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67775__$1,new cljs.core.Keyword(null,"fixity","fixity",464441263));
var vec__67776 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67775__$1,new cljs.core.Keyword(null,"cost","cost",-1094861735));
var init = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67776,(0),null);
var marginal = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67776,(1),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(fixity,new cljs.core.Keyword(null,"constant","constant",-379609303))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(fmt.cljs$core$IFn$_invoke$arity$0 ? fmt.cljs$core$IFn$_invoke$arity$0() : fmt.call(null)),init,false], null);
} else {
var vec__67780 = (function (){var i = (0);
var items = operands;
var gitems = cljs.core.transient$(cljs.core.PersistentVector.EMPTY);
var gidxs = cljs.core.transient$(cljs.core.PersistentVector.EMPTY);
var cost = init;
while(true){
var temp__5733__auto__ = bfuncs$typesetting$p(child_prec,cljs.core.first(items));
if(cljs.core.truth_(temp__5733__auto__)){
var vec__67789 = temp__5733__auto__;
var r = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67789,(0),null);
var c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67789,(1),null);
var g = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67789,(2),null);
var G__68151 = (i + (1));
var G__68152 = cljs.core.next(items);
var G__68153 = cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$2(gitems,r);
var G__68154 = (cljs.core.truth_((function (){var and__4115__auto__ = g;
if(cljs.core.truth_(and__4115__auto__)){
return (c <= max_cost);
} else {
return and__4115__auto__;
}
})())?cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$2(gidxs,i):gidxs);
var G__68155 = ((cost + c) + marginal);
i = G__68151;
items = G__68152;
gitems = G__68153;
gidxs = G__68154;
cost = G__68155;
continue;
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__67793 = cljs.core.persistent_BANG_((((cost <= max_cost))?gitems:cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (i,items,gitems,gidxs,cost,temp__5733__auto__,child_prec,map__67775,map__67775__$1,fixity,vec__67776,init,marginal,vec__67769,op,operands,fmt,formatters,map__67764,map__67764__$1,precedence,group_QMARK_){
return (function (p1__67757_SHARP_,p2__67758_SHARP_){
return cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(p1__67757_SHARP_,p2__67758_SHARP_,["{",cljs.core.str.cljs$core$IFn$_invoke$arity$1((gitems.cljs$core$IFn$_invoke$arity$1 ? gitems.cljs$core$IFn$_invoke$arity$1(p2__67758_SHARP_) : gitems.call(null,p2__67758_SHARP_))),"}"].join(''));
});})(i,items,gitems,gidxs,cost,temp__5733__auto__,child_prec,map__67775,map__67775__$1,fixity,vec__67776,init,marginal,vec__67769,op,operands,fmt,formatters,map__67764,map__67764__$1,precedence,group_QMARK_))
,gitems,cljs.core.persistent_BANG_(gidxs))));
var G__67794 = true;
return (fmt.cljs$core$IFn$_invoke$arity$2 ? fmt.cljs$core$IFn$_invoke$arity$2(G__67793,G__67794) : fmt.call(null,G__67793,G__67794));
})(),cost], null);
}
break;
}
})();
var r = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67780,(0),null);
var c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67780,(1),null);
if(cljs.core.truth_((group_QMARK_.cljs$core$IFn$_invoke$arity$2 ? group_QMARK_.cljs$core$IFn$_invoke$arity$2(parent_prec,child_prec) : group_QMARK_.call(null,parent_prec,child_prec)))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [bfuncs.typesetting.paren_str(r),(c + 0.4297),true], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [r,c,true], null);
}
}
}
} else {
return null;
}
});
var vec__67765 = p(-Infinity,x);
var result = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67765,(0),null);
var cost = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67765,(1),null);
var groupable = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67765,(2),null);
if(cljs.core.truth_((function (){var and__4115__auto__ = groupable;
if(cljs.core.truth_(and__4115__auto__)){
return (cost <= max_cost);
} else {
return and__4115__auto__;
}
})())){
return ["{",cljs.core.str.cljs$core$IFn$_invoke$arity$1(result),"}"].join('');
} else {
return result;
}
}
}));

(bfuncs.typesetting.grouped_latex.cljs$lang$maxFixedArity = 5);

bfuncs.typesetting.__GT_latex = (function bfuncs$typesetting$__GT_latex(var_args){
var G__67805 = arguments.length;
switch (G__67805) {
case 1:
return bfuncs.typesetting.__GT_latex.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return bfuncs.typesetting.__GT_latex.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return bfuncs.typesetting.__GT_latex.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return bfuncs.typesetting.__GT_latex.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return bfuncs.typesetting.__GT_latex.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(bfuncs.typesetting.__GT_latex.cljs$core$IFn$_invoke$arity$1 = (function (x){
return bfuncs.typesetting.__GT_latex.cljs$core$IFn$_invoke$arity$5(x,null,null,null,true);
}));

(bfuncs.typesetting.__GT_latex.cljs$core$IFn$_invoke$arity$2 = (function (x,var_fn){
return bfuncs.typesetting.__GT_latex.cljs$core$IFn$_invoke$arity$4(x,bfuncs.typesetting._BANG_g_formatters,var_fn,(16));
}));

(bfuncs.typesetting.__GT_latex.cljs$core$IFn$_invoke$arity$3 = (function (x,_BANG_formatters,var_fn){
return bfuncs.typesetting.__GT_latex.cljs$core$IFn$_invoke$arity$4(x,_BANG_formatters,var_fn,(16));
}));

(bfuncs.typesetting.__GT_latex.cljs$core$IFn$_invoke$arity$4 = (function (x,_BANG_formatters,var_fn,max_cost){
var map__67812 = cljs.core.deref(_BANG_formatters);
var map__67812__$1 = (((((!((map__67812 == null))))?(((((map__67812.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__67812.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__67812):map__67812);
var latex = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67812__$1,new cljs.core.Keyword(null,"latex","latex",-1820161144));
var grouping = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67812__$1,new cljs.core.Keyword(null,"grouping","grouping",-1219230389));
return bfuncs.typesetting.__GT_latex.cljs$core$IFn$_invoke$arity$5(x,latex,grouping,var_fn,max_cost);
}));

(bfuncs.typesetting.__GT_latex.cljs$core$IFn$_invoke$arity$5 = (function (x,latex_formatters,grouping,var_fn,max_cost){
if((!((!((x == null)))))){
return "";
} else {
if(cljs.core.truth_(max_cost)){
return bfuncs.typesetting.grouped_latex.cljs$core$IFn$_invoke$arity$5(x,latex_formatters,grouping,var_fn,max_cost);
} else {
return bfuncs.typesetting.expression_formatter(bfuncs.typesetting.prepare_formatters(latex_formatters,bfuncs.typesetting.default_latex_formatters,var_fn),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([bfuncs.typesetting.default_grouping,grouping], 0)),false)(-Infinity,x);
}
}
}));

(bfuncs.typesetting.__GT_latex.cljs$lang$maxFixedArity = 5);

bfuncs.typesetting.copy_button = (function bfuncs$typesetting$copy_button(value){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent_material_ui.core.tooltip.tooltip,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"title","title",636505583),"Copy",new cljs.core.Keyword(null,"placement","placement",768366651),"left"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent_material_ui.core.icon_button.icon_button,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"class","class",-2030961996),"copy-button",new cljs.core.Keyword(null,"edge","edge",919909153),"end",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return bfuncs.globals.notify_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"message","message",-406056002),(cljs.core.truth_(bfuncs.utils.clipboard_write_BANG_(value))?"Copied!":"Clipboard unavailable."),new cljs.core.Keyword(null,"auto-hide-duration","auto-hide-duration",1058363602),(1000),new cljs.core.Keyword(null,"immediate","immediate",-1684692069),true], null));
}),new cljs.core.Keyword(null,"size","size",1098693007),"small"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent_material_ui.icons.file_copy_outlined.file_copy_outlined], null)], null)], null);
});
bfuncs.typesetting.close_button = (function bfuncs$typesetting$close_button(props){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent_material_ui.core.icon_button.icon_button,props,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent_material_ui.icons.close_outlined.close_outlined], null)], null);
});
bfuncs.typesetting.katex_trust_handler = (function bfuncs$typesetting$katex_trust_handler(x){
return cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["\\htmlClass",null,"\\htmlStyle",null], null), null),(function (){var obj67826 = x;
var k67827 = "command";
if((function (){var obj67828 = obj67826;
return (((!((obj67828 == null)))) && (applied_science.js_interop.impl.in_QMARK__STAR_(k67827,obj67828)));
})()){
return (obj67826[k67827]);
} else {
return undefined;
}
})());
});
bfuncs.typesetting.katex_strict_handler = (function bfuncs$typesetting$katex_strict_handler(error_code,_error_msg,_token){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(error_code,"htmlExtension")){
return "ignore";
} else {
return "warn";
}
});
bfuncs.typesetting.katex_macros = (function bfuncs$typesetting$katex_macros(var_args){
var G__67834 = arguments.length;
switch (G__67834) {
case 0:
return bfuncs.typesetting.katex_macros.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return bfuncs.typesetting.katex_macros.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(bfuncs.typesetting.katex_macros.cljs$core$IFn$_invoke$arity$0 = (function (){
return bfuncs.typesetting_data.default_macros;
}));

(bfuncs.typesetting.katex_macros.cljs$core$IFn$_invoke$arity$1 = (function (macros){
if(cljs.core.truth_(macros)){
var obj__27297__auto__ = Object;
var f__27298__auto__ = (obj__27297__auto__["assign"]);
return f__27298__auto__.call(obj__27297__auto__,cljs.core.clj__GT_js(macros),bfuncs.typesetting_data.default_macros);
} else {
return bfuncs.typesetting_data.default_macros;
}
}));

(bfuncs.typesetting.katex_macros.cljs$lang$maxFixedArity = 1);

bfuncs.typesetting.katex_options = (function bfuncs$typesetting$katex_options(var_args){
var G__67842 = arguments.length;
switch (G__67842) {
case 0:
return bfuncs.typesetting.katex_options.cljs$core$IFn$_invoke$arity$0();

break;
case 3:
return bfuncs.typesetting.katex_options.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(bfuncs.typesetting.katex_options.cljs$core$IFn$_invoke$arity$0 = (function (){
return ({"displayMode": false, "throwOnError": false, "macros": bfuncs.typesetting.katex_macros.cljs$core$IFn$_invoke$arity$0(), "trust": bfuncs.typesetting.katex_trust_handler, "strict": bfuncs.typesetting.katex_strict_handler, "maxExpand": Infinity});
}));

(bfuncs.typesetting.katex_options.cljs$core$IFn$_invoke$arity$3 = (function (display,macros,options){
var obj__27297__auto__ = Object;
var f__27298__auto__ = (obj__27297__auto__["assign"]);
return f__27298__auto__.call(obj__27297__auto__,({"displayMode": display, "throwOnError": false, "macros": bfuncs.typesetting.katex_macros.cljs$core$IFn$_invoke$arity$1(macros), "trust": bfuncs.typesetting.katex_trust_handler, "strict": bfuncs.typesetting.katex_strict_handler, "maxExpand": Infinity}),options);
}));

(bfuncs.typesetting.katex_options.cljs$lang$maxFixedArity = 3);

bfuncs.typesetting.katex_render = (function bfuncs$typesetting$katex_render(latex,punct,display,macros,options){
var string_to_render = (cljs.core.truth_(punct)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(latex)," \\htmlClass{punct}{",cljs.core.str.cljs$core$IFn$_invoke$arity$1(punct),"}"].join(''):cljs.core.str.cljs$core$IFn$_invoke$arity$1(latex));
return (function (element){
if(cljs.core.truth_(element)){
var obj__27297__auto__ = module$node_modules$katex$dist$katex;
var f__27298__auto__ = (obj__27297__auto__["render"]);
return f__27298__auto__.call(obj__27297__auto__,string_to_render,element,bfuncs.typesetting.katex_options.cljs$core$IFn$_invoke$arity$3(display,macros,options));
} else {
return null;
}
});
});
bfuncs.typesetting.hanging_indent = (function bfuncs$typesetting$hanging_indent(indent){
if(cljs.core.truth_(indent)){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"padding-left","padding-left",-1180879053),indent,new cljs.core.Keyword(null,"text-indent","text-indent",-1987214414),((typeof indent === 'number')?(- indent):["-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(indent)].join(''))], null);
} else {
return null;
}
});
bfuncs.typesetting.$ = (function bfuncs$typesetting$$(var_args){
var G__67855 = arguments.length;
switch (G__67855) {
case 1:
return bfuncs.typesetting.$.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return bfuncs.typesetting.$.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return bfuncs.typesetting.$.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(bfuncs.typesetting.$.cljs$core$IFn$_invoke$arity$1 = (function (latex){
return bfuncs.typesetting.$.cljs$core$IFn$_invoke$arity$3(null,latex,null);
}));

(bfuncs.typesetting.$.cljs$core$IFn$_invoke$arity$2 = (function (a,b){
if(typeof a === 'string'){
return bfuncs.typesetting.$.cljs$core$IFn$_invoke$arity$3(null,a,b);
} else {
return bfuncs.typesetting.$.cljs$core$IFn$_invoke$arity$3(a,b,null);
}
}));

(bfuncs.typesetting.$.cljs$core$IFn$_invoke$arity$3 = (function (p__67856,latex,punct){
var map__67857 = p__67856;
var map__67857__$1 = (((((!((map__67857 == null))))?(((((map__67857.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__67857.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__67857):map__67857);
var opts = map__67857__$1;
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67857__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var macros = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67857__$1,new cljs.core.Keyword(null,"macros","macros",811339431));
var options = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67857__$1,new cljs.core.Keyword(null,"options","options",99638489));
var indent = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67857__$1,new cljs.core.Keyword(null,"indent","indent",-148200125));
var component = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67857__$1,new cljs.core.Keyword(null,"component","component",1555936782));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var or__4126__auto__ = component;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
var or__4126__auto____$1 = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__4126__auto____$1)){
return or__4126__auto____$1;
} else {
return new cljs.core.Keyword(null,"span","span",1394872991);
}
}
})(),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"class","class",-2030961996),reagent.core.class_names.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(bfuncs.style._BANG_vclasses),new cljs.core.Keyword(null,"math","math",-2026912803)),class$),new cljs.core.Keyword(null,"ref","ref",1289896967),bfuncs.typesetting.katex_render(latex,punct,false,macros,options),new cljs.core.Keyword(null,"style","style",-496642736),bfuncs.typesetting.hanging_indent(indent)], null)], null);
}));

(bfuncs.typesetting.$.cljs$lang$maxFixedArity = 3);

bfuncs.typesetting.$$ = (function bfuncs$typesetting$$$(var_args){
var G__67861 = arguments.length;
switch (G__67861) {
case 1:
return bfuncs.typesetting.$$.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return bfuncs.typesetting.$$.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return bfuncs.typesetting.$$.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(bfuncs.typesetting.$$.cljs$core$IFn$_invoke$arity$1 = (function (latex){
return bfuncs.typesetting.$$.cljs$core$IFn$_invoke$arity$3(null,latex,null);
}));

(bfuncs.typesetting.$$.cljs$core$IFn$_invoke$arity$2 = (function (arg1,arg2){
if(typeof arg1 === 'string'){
return bfuncs.typesetting.$$.cljs$core$IFn$_invoke$arity$3(null,arg1,arg2);
} else {
return bfuncs.typesetting.$$.cljs$core$IFn$_invoke$arity$3(arg1,arg2,null);
}
}));

(bfuncs.typesetting.$$.cljs$core$IFn$_invoke$arity$3 = (function (p__67867,latex,punct){
var map__67868 = p__67867;
var map__67868__$1 = (((((!((map__67868 == null))))?(((((map__67868.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__67868.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__67868):map__67868);
var props = map__67868__$1;
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67868__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var macros = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67868__$1,new cljs.core.Keyword(null,"macros","macros",811339431));
var options = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67868__$1,new cljs.core.Keyword(null,"options","options",99638489));
var indent = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67868__$1,new cljs.core.Keyword(null,"indent","indent",-148200125));
var component = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67868__$1,new cljs.core.Keyword(null,"component","component",1555936782));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var or__4126__auto__ = component;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
var or__4126__auto____$1 = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(props);
if(cljs.core.truth_(or__4126__auto____$1)){
return or__4126__auto____$1;
} else {
return new cljs.core.Keyword(null,"div","div",1057191632);
}
}
})(),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"class","class",-2030961996),reagent.core.class_names.cljs$core$IFn$_invoke$arity$variadic(cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(bfuncs.style._BANG_vclasses),new cljs.core.Keyword(null,"math","math",-2026912803)),"display",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([class$], 0)),new cljs.core.Keyword(null,"ref","ref",1289896967),bfuncs.typesetting.katex_render(latex,punct,true,macros,options),new cljs.core.Keyword(null,"style","style",-496642736),bfuncs.typesetting.hanging_indent(indent)], null)], null);
}));

(bfuncs.typesetting.$$.cljs$lang$maxFixedArity = 3);

bfuncs.typesetting.copy_panel = (function bfuncs$typesetting$copy_panel(p__67882,expr){
var map__67883 = p__67882;
var map__67883__$1 = (((((!((map__67883 == null))))?(((((map__67883.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__67883.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__67883):map__67883);
var _BANG_formatters = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__67883__$1,new cljs.core.Keyword(null,"!formatters","!formatters",49002841),bfuncs.typesetting._BANG_g_formatters);
var var_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67883__$1,new cljs.core.Keyword(null,"var-fn","var-fn",-1379096379));
var map__67888 = cljs.core.deref(_BANG_formatters);
var map__67888__$1 = (((((!((map__67888 == null))))?(((((map__67888.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__67888.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__67888):map__67888);
var latex = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67888__$1,new cljs.core.Keyword(null,"latex","latex",-1820161144));
var text = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67888__$1,new cljs.core.Keyword(null,"text","text",-1790561697));
var grouping = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67888__$1,new cljs.core.Keyword(null,"grouping","grouping",-1219230389));
var latex_str = bfuncs.typesetting.__GT_latex.cljs$core$IFn$_invoke$arity$5(expr,latex,grouping,var_fn,false);
var text_str = bfuncs.typesetting.__GT_plaintext.cljs$core$IFn$_invoke$arity$4(expr,text,grouping,var_fn);
var label_props = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"class","class",-2030961996),"label",new cljs.core.Keyword(null,"component","component",1555936782),"span",new cljs.core.Keyword(null,"variant","variant",-424354234),"subtitle2"], null);
var text_field_props = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"class","class",-2030961996),"copy-field",new cljs.core.Keyword(null,"full-width","full-width",1911330562),true,new cljs.core.Keyword(null,"multiline","multiline",-1084693234),true,new cljs.core.Keyword(null,"rows-max","rows-max",-1902625472),(3),new cljs.core.Keyword(null,"variant","variant",-424354234),"outlined",new cljs.core.Keyword(null,"InputProps","InputProps",-1485068760),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"read-only","read-only",-191706886),true,new cljs.core.Keyword(null,"on-focus","on-focus",-13737624),(function (p1__67878_SHARP_){
var parent__27304__auto__ = (p1__67878_SHARP_["target"]);
var f__27305__auto__ = (parent__27304__auto__["select"]);
return f__27305__auto__.call(parent__27304__auto__);
}),new cljs.core.Keyword(null,"class","class",-2030961996),"copy-field-input",new cljs.core.Keyword(null,"spell-check","spell-check",-2060352968),false], null)], null);
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),reagent.core.class_names.cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(bfuncs.style._BANG_vclasses),new cljs.core.Keyword(null,"copy-panel","copy-panel",1329699902)))], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.row","div.row",133678515),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent_material_ui.core.typography.typography,label_props,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"Text"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent_material_ui.core.text_field.text_field,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(text_field_props,new cljs.core.Keyword(null,"value","value",305978217),text_str)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [bfuncs.typesetting.copy_button,text_str], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.row","div.row",133678515),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent_material_ui.core.typography.typography,label_props,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"LaTeX"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent_material_ui.core.text_field.text_field,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(text_field_props,new cljs.core.Keyword(null,"value","value",305978217),latex_str)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [bfuncs.typesetting.copy_button,latex_str], null)], null)], null);
});
bfuncs.typesetting._BANG_open_expr_id = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(null);
bfuncs.typesetting.handle_expression_click_fn = (function bfuncs$typesetting$handle_expression_click_fn(id){
return (function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(bfuncs.typesetting._BANG_open_expr_id,(function (open_id){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(id,open_id)){
return null;
} else {
return id;
}
}));
});
});
bfuncs.typesetting.expression_wrapper_STAR_ = (function bfuncs$typesetting$expression_wrapper_STAR_(p__67904,id,open,summary,details){
var map__67905 = p__67904;
var map__67905__$1 = (((((!((map__67905 == null))))?(((((map__67905.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__67905.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__67905):map__67905);
var props = map__67905__$1;
var component = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__67905__$1,new cljs.core.Keyword(null,"component","component",1555936782),new cljs.core.Keyword(null,"div","div",1057191632));
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [component,reagent.core.merge_props.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),reagent.core.class_names.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(bfuncs.style._BANG_vclasses),new cljs.core.Keyword(null,"expandable-expression","expandable-expression",-1672118121)),(cljs.core.truth_(open)?"open":"closed"))], null),cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(props,new cljs.core.Keyword(null,"component","component",1555936782))),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent_material_ui.core.button_base.button_base,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),bfuncs.typesetting.handle_expression_click_fn(id),new cljs.core.Keyword(null,"focus-ripple","focus-ripple",91115737),true,new cljs.core.Keyword(null,"class","class",-2030961996),"summary"], null),summary], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent_material_ui.core.hidden.hidden,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"xs-down","xs-down",975006280),true], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent_material_ui.core.collapse.collapse,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"in","in",-1531184865),open,new cljs.core.Keyword(null,"mountOnEnter","mountOnEnter",-1497369225),true,new cljs.core.Keyword(null,"class","class",-2030961996),reagent.core.class_names.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(bfuncs.style._BANG_vclasses),new cljs.core.Keyword(null,"fade-collapse","fade-collapse",-1362536728)),"details")], null),details], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent_material_ui.core.hidden.hidden,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"sm-up","sm-up",-1370760696),true], null),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent_material_ui.core.swipeable_drawer.swipeable_drawer,new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"open","open",-1763596448),open,new cljs.core.Keyword(null,"class","class",-2030961996),reagent.core.class_names.cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(bfuncs.style._BANG_vclasses),new cljs.core.Keyword(null,"expression-drawer","expression-drawer",1918951048))),new cljs.core.Keyword(null,"anchor","anchor",1549638489),"bottom",new cljs.core.Keyword(null,"disable-discovery","disable-discovery",-1054719204),true,new cljs.core.Keyword(null,"disable-swipe-to-open","disable-swipe-to-open",-505681142),true,new cljs.core.Keyword(null,"on-open","on-open",-1391088163),bfuncs.utils.pass,new cljs.core.Keyword(null,"on-close","on-close",-761178394),(function (){
return cljs.core.reset_BANG_(bfuncs.typesetting._BANG_open_expr_id,null);
})], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [bfuncs.typesetting.close_button,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return cljs.core.reset_BANG_(bfuncs.typesetting._BANG_open_expr_id,null);
}),new cljs.core.Keyword(null,"edge","edge",919909153),"end",new cljs.core.Keyword(null,"class","class",-2030961996),"close-button"], null)], null),summary,details,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent_material_ui.core.typography.typography,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),"notification-space",new cljs.core.Keyword(null,"variant","variant",-424354234),"body2"], null),"."], null)], null)], null)], null);
});
bfuncs.typesetting.expression_wrapper = (function bfuncs$typesetting$expression_wrapper(props,summary,details){
var with_let67910 = reagent.ratom.with_let_values(new cljs.core.Keyword(null,"with-let67910","with-let67910",-20126620));
var temp__5739__auto___68259 = reagent.ratom._STAR_ratom_context_STAR_;
if((temp__5739__auto___68259 == null)){
} else {
var c__27840__auto___68260 = temp__5739__auto___68259;
if((with_let67910.generation === c__27840__auto___68260.ratomGeneration)){
if(reagent.debug.has_console){
((reagent.debug.tracking)?reagent.debug.track_console:console).error(["Warning: The same with-let is being used more ","than once in the same reactive context."].join(''));
} else {
}
} else {
}

(with_let67910.generation = c__27840__auto___68260.ratomGeneration);
}


var init67911 = (with_let67910.length === (0));
var id = ((init67911)?(with_let67910[(0)] = cljs.core.random_uuid()):(with_let67910[(0)]));
var res__27841__auto__ = new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [bfuncs.typesetting.expression_wrapper_STAR_,props,id,cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(id,cljs.core.deref(bfuncs.typesetting._BANG_open_expr_id)),summary,details], null);

return res__27841__auto__;
});
bfuncs.typesetting.minterms_expression = (function bfuncs$typesetting$minterms_expression(p__67914){
var map__67915 = p__67914;
var map__67915__$1 = (((((!((map__67915 == null))))?(((((map__67915.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__67915.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__67915):map__67915);
var minterms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67915__$1,new cljs.core.Keyword(null,"minterms","minterms",-1267652170));
var unspecified = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67915__$1,new cljs.core.Keyword(null,"unspecified","unspecified",-1672973565));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [bfuncs.typesetting.$$,((((cljs.core.empty_QMARK_(minterms)) && (cljs.core.empty_QMARK_(unspecified))))?bfuncs.typesetting.__GT_latex.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"FALSE","FALSE",1063613829)], null)):bfuncs.utils.str_join.cljs$core$IFn$_invoke$arity$4("\\sum{"," + ","}",bfuncs.utils.non_empties.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((cljs.core.empty_QMARK_(minterms))?null:bfuncs.utils.str_join.cljs$core$IFn$_invoke$arity$4("m(",",",")",cljs.core.sort.cljs$core$IFn$_invoke$arity$1(minterms))),((cljs.core.empty_QMARK_(unspecified))?null:bfuncs.utils.str_join.cljs$core$IFn$_invoke$arity$4("d(",",",")",cljs.core.sort.cljs$core$IFn$_invoke$arity$1(unspecified)))], 0))))], null);
});
bfuncs.typesetting.maxterms_expression = (function bfuncs$typesetting$maxterms_expression(p__67923){
var map__67924 = p__67923;
var map__67924__$1 = (((((!((map__67924 == null))))?(((((map__67924.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__67924.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__67924):map__67924);
var maxterms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67924__$1,new cljs.core.Keyword(null,"maxterms","maxterms",951779603));
var unspecified = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67924__$1,new cljs.core.Keyword(null,"unspecified","unspecified",-1672973565));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [bfuncs.typesetting.$$,((((cljs.core.empty_QMARK_(maxterms)) && (cljs.core.empty_QMARK_(unspecified))))?bfuncs.typesetting.__GT_latex.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"TRUE","TRUE",494241636)], null)):bfuncs.utils.str_join.cljs$core$IFn$_invoke$arity$4("\\prod{"," \\cdot ","}",bfuncs.utils.non_empties.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((cljs.core.empty_QMARK_(maxterms))?null:bfuncs.utils.str_join.cljs$core$IFn$_invoke$arity$4("M(",",",")",cljs.core.sort.cljs$core$IFn$_invoke$arity$1(maxterms))),((cljs.core.empty_QMARK_(unspecified))?null:bfuncs.utils.str_join.cljs$core$IFn$_invoke$arity$4("D(",",",")",cljs.core.sort.cljs$core$IFn$_invoke$arity$1(unspecified)))], 0))))], null);
});
bfuncs.typesetting.expression = (function bfuncs$typesetting$expression(p__67936,expr){
var map__67937 = p__67936;
var map__67937__$1 = (((((!((map__67937 == null))))?(((((map__67937.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__67937.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__67937):map__67937);
var _BANG_formatters = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__67937__$1,new cljs.core.Keyword(null,"!formatters","!formatters",49002841),bfuncs.typesetting._BANG_g_formatters);
var wrap = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__67937__$1,new cljs.core.Keyword(null,"wrap","wrap",851669987),true);
var pre = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67937__$1,new cljs.core.Keyword(null,"pre","pre",2118456869));
var var_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67937__$1,new cljs.core.Keyword(null,"var-fn","var-fn",-1379096379));
var wrapper_props = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67937__$1,new cljs.core.Keyword(null,"wrapper-props","wrapper-props",394796391));
var max_cost = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__67937__$1,new cljs.core.Keyword(null,"max-cost","max-cost",-2074270100),(16));
var math_props = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67937__$1,new cljs.core.Keyword(null,"math-props","math-props",2106386669));
var punct = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67937__$1,new cljs.core.Keyword(null,"punct","punct",1807261997));
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67937__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var post = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67937__$1,new cljs.core.Keyword(null,"post","post",269697687));
var expandable = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67937__$1,new cljs.core.Keyword(null,"expandable","expandable",-704609097));
var display = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67937__$1,new cljs.core.Keyword(null,"display","display",242065432));
if((!((expr == null)))){
var formatters = cljs.core.deref(_BANG_formatters);
var latex = bfuncs.typesetting.grouped_latex.cljs$core$IFn$_invoke$arity$5(expr,cljs.core.get.cljs$core$IFn$_invoke$arity$2(formatters,new cljs.core.Keyword(null,"latex","latex",-1820161144)),cljs.core.get.cljs$core$IFn$_invoke$arity$2(formatters,new cljs.core.Keyword(null,"grouping","grouping",-1219230389)),var_fn,max_cost);
var math_content = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.truth_((function (){var or__4126__auto__ = expandable;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return display;
}
})())?bfuncs.typesetting.$$:bfuncs.typesetting.$),math_props,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(pre),cljs.core.str.cljs$core$IFn$_invoke$arity$1(latex),cljs.core.str.cljs$core$IFn$_invoke$arity$1(post)].join(''),punct], null);
if(cljs.core.not(expandable)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.truth_(display)?new cljs.core.Keyword(null,"div","div",1057191632):new cljs.core.Keyword(null,"span","span",1394872991)),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),reagent.core.class_names.cljs$core$IFn$_invoke$arity$variadic(cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(bfuncs.style._BANG_vclasses),new cljs.core.Keyword(null,"expression","expression",202311876)),class$,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["non-expandable"], 0))], null),math_content], null);
} else {
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [bfuncs.typesetting.expression_wrapper,wrapper_props,math_content,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [bfuncs.typesetting.copy_panel,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"!formatters","!formatters",49002841),_BANG_formatters,new cljs.core.Keyword(null,"var-fn","var-fn",-1379096379),var_fn], null),expr], null)], null);
}
} else {
return null;
}
});
bfuncs.typesetting.__GT_label = (function bfuncs$typesetting$__GT_label(var_args){
var G__67946 = arguments.length;
switch (G__67946) {
case 1:
return bfuncs.typesetting.__GT_label.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return bfuncs.typesetting.__GT_label.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return bfuncs.typesetting.__GT_label.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(bfuncs.typesetting.__GT_label.cljs$core$IFn$_invoke$arity$1 = (function (spec){
return bfuncs.typesetting.__GT_label.cljs$core$IFn$_invoke$arity$3(spec,"a","b");
}));

(bfuncs.typesetting.__GT_label.cljs$core$IFn$_invoke$arity$2 = (function (spec,a){
return bfuncs.typesetting.__GT_label.cljs$core$IFn$_invoke$arity$3(spec,a,"b");
}));

(bfuncs.typesetting.__GT_label.cljs$core$IFn$_invoke$arity$3 = (function (p__67949,a,b){
var vec__67950 = p__67949;
var fixity = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67950,(0),null);
var o = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67950,(1),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67950,(2),null);
var alt_o = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67950,(3),null);
var op = (function (){var or__4126__auto__ = alt_o;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return o;
}
})();
var G__67953 = fixity;
var G__67953__$1 = (((G__67953 instanceof cljs.core.Keyword))?G__67953.fqn:null);
switch (G__67953__$1) {
case "constant":
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(op);

break;
case "infix":
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(a),cljs.core.str.cljs$core$IFn$_invoke$arity$1(op),cljs.core.str.cljs$core$IFn$_invoke$arity$1(b)].join('');

break;
case "prefix":
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(op),cljs.core.str.cljs$core$IFn$_invoke$arity$1(a)].join('');

break;
case "postfix":
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(a),cljs.core.str.cljs$core$IFn$_invoke$arity$1(op)].join('');

break;
case "matchfix":
var vec__67955 = op;
var l = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67955,(0),null);
var r = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67955,(1),null);
var s = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67955,(2),null);
if(cljs.core.truth_(s)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(l),cljs.core.str.cljs$core$IFn$_invoke$arity$1(a),cljs.core.str.cljs$core$IFn$_invoke$arity$1(s),cljs.core.str.cljs$core$IFn$_invoke$arity$1(b),cljs.core.str.cljs$core$IFn$_invoke$arity$1(r)].join('');
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(l),cljs.core.str.cljs$core$IFn$_invoke$arity$1(a),cljs.core.str.cljs$core$IFn$_invoke$arity$1(r)].join('');
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__67953__$1)].join('')));

}
}));

(bfuncs.typesetting.__GT_label.cljs$lang$maxFixedArity = 3);

bfuncs.typesetting.options_group = (function bfuncs$typesetting$options_group(operation,group_key,formats,_BANG_formatters){
var with_let67959 = reagent.ratom.with_let_values(new cljs.core.Keyword(null,"with-let67959","with-let67959",254865221));
var temp__5739__auto___68306 = reagent.ratom._STAR_ratom_context_STAR_;
if((temp__5739__auto___68306 == null)){
} else {
var c__27840__auto___68310 = temp__5739__auto___68306;
if((with_let67959.generation === c__27840__auto___68310.ratomGeneration)){
if(reagent.debug.has_console){
((reagent.debug.tracking)?reagent.debug.track_console:console).error(["Warning: The same with-let is being used more ","than once in the same reactive context."].join(''));
} else {
}
} else {
}

(with_let67959.generation = c__27840__auto___68310.ratomGeneration);
}


var init67960 = (with_let67959.length === (0));
var change = ((init67960)?(with_let67959[(0)] = (function (_,i){
if((!((i == null)))){
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(formats,i);
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(_BANG_formatters,bfuncs.utils.assoc_in_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"latex","latex",-1820161144),group_key], null),bfuncs.typesetting.op_formatter(cljs.core.get.cljs$core$IFn$_invoke$arity$2(v,new cljs.core.Keyword(null,"latex","latex",-1820161144))),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"text","text",-1790561697),group_key], null),bfuncs.typesetting.op_formatter(cljs.core.get.cljs$core$IFn$_invoke$arity$2(v,new cljs.core.Keyword(null,"text","text",-1790561697))),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"choices","choices",1385611597),group_key], null),i], 0));
} else {
return null;
}
})):(with_let67959[(0)]));
var res__27841__auto__ = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.toggle-button-container","div.toggle-button-container",-1707886129),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent_material_ui.core.typography.typography,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),"label",new cljs.core.Keyword(null,"variant","variant",-424354234),"caption"], null),operation], null),cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent_material_ui.lab.toggle_button_group.toggle_button_group,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"size","size",1098693007),"small",new cljs.core.Keyword(null,"exclusive","exclusive",-1507998718),true,new cljs.core.Keyword(null,"aria-label","aria-label",455891514),operation,new cljs.core.Keyword(null,"value","value",305978217),(function (){var or__4126__auto__ = cljs.core.deref(reagent.core.cursor(_BANG_formatters,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"choices","choices",1385611597),group_key], null)));
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return (0);
}
})(),new cljs.core.Keyword(null,"on-change","on-change",-732046149),change], null)], null),cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.seq((function (){var iter__27573__auto__ = (function bfuncs$typesetting$options_group_$_iter__67963(s__67964,i__67965){
return (new cljs.core.LazySeq(null,(function (){
var s__67964__$1 = s__67964;
var i__67965__$1 = i__67965;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__67964__$1);
if(temp__5735__auto__){
var s__67964__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__67964__$2)){
var c__67968 = cljs.core.chunk_first(s__67964__$2);
var size__27572__auto__ = cljs.core.count(c__67968);
var b__67967 = cljs.core.chunk_buffer(size__27572__auto__);
if((function (){var j__67966 = (0);
while(true){
if((j__67966 < size__27572__auto__)){
var map__67969 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(c__67968,j__67966);
var map__67969__$1 = (((((!((map__67969 == null))))?(((((map__67969.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__67969.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__67969):map__67969);
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67969__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var latex = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67969__$1,new cljs.core.Keyword(null,"latex","latex",-1820161144));
var i = (j__67966 + i__67965__$1);
cljs.core.chunk_append(b__67967,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent_material_ui.lab.toggle_button.toggle_button,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"key","key",-1516042587),name,new cljs.core.Keyword(null,"value","value",305978217),i,new cljs.core.Keyword(null,"title","title",636505583),name,new cljs.core.Keyword(null,"aria-label","aria-label",455891514),name,new cljs.core.Keyword(null,"class","class",-2030961996),reagent.core.class_names.cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(bfuncs.style._BANG_vclasses),new cljs.core.Keyword(null,"math-toggle","math-toggle",75723684)))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [bfuncs.typesetting.$,bfuncs.typesetting.__GT_label.cljs$core$IFn$_invoke$arity$1(latex)], null)], null));

var G__68334 = (j__67966 + (1));
j__67966 = G__68334;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__67967),bfuncs$typesetting$options_group_$_iter__67963(cljs.core.chunk_rest(s__67964__$2),(i__67965__$1 + size__27572__auto__)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__67967),null);
}
} else {
var map__67973 = cljs.core.first(s__67964__$2);
var map__67973__$1 = (((((!((map__67973 == null))))?(((((map__67973.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__67973.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__67973):map__67973);
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67973__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var latex = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67973__$1,new cljs.core.Keyword(null,"latex","latex",-1820161144));
var i = i__67965__$1;
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent_material_ui.lab.toggle_button.toggle_button,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"key","key",-1516042587),name,new cljs.core.Keyword(null,"value","value",305978217),i,new cljs.core.Keyword(null,"title","title",636505583),name,new cljs.core.Keyword(null,"aria-label","aria-label",455891514),name,new cljs.core.Keyword(null,"class","class",-2030961996),reagent.core.class_names.cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(bfuncs.style._BANG_vclasses),new cljs.core.Keyword(null,"math-toggle","math-toggle",75723684)))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [bfuncs.typesetting.$,bfuncs.typesetting.__GT_label.cljs$core$IFn$_invoke$arity$1(latex)], null)], null),bfuncs$typesetting$options_group_$_iter__67963(cljs.core.rest(s__67964__$2),(i__67965__$1 + (1))));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__27573__auto__(formats,(0));
})())))], null);

return res__27841__auto__;
});
bfuncs.typesetting.toggle_set = (function bfuncs$typesetting$toggle_set(var_args){
var G__67977 = arguments.length;
switch (G__67977) {
case 2:
return bfuncs.typesetting.toggle_set.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return bfuncs.typesetting.toggle_set.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(bfuncs.typesetting.toggle_set.cljs$core$IFn$_invoke$arity$2 = (function (props,_BANG_formatters){
return bfuncs.typesetting.toggle_set.cljs$core$IFn$_invoke$arity$3(props,_BANG_formatters,null);
}));

(bfuncs.typesetting.toggle_set.cljs$core$IFn$_invoke$arity$3 = (function (p__67979,_BANG_formatters,_BANG_open){
var map__67980 = p__67979;
var map__67980__$1 = (((((!((map__67980 == null))))?(((((map__67980.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__67980.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__67980):map__67980);
var ops = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67980__$1,new cljs.core.Keyword(null,"ops","ops",1237330063));
var more = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67980__$1,new cljs.core.Keyword(null,"more","more",-2058821800));
var title = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67980__$1,new cljs.core.Keyword(null,"title","title",636505583));
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67980__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var static_QMARK_ = ((cljs.core.empty_QMARK_(more)) || ((_BANG_open == null)));
var tset = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),reagent.core.class_names.cljs$core$IFn$_invoke$arity$variadic("toggle-set-wrapper",class$,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((static_QMARK_)?"static":"expanding")], 0))], null),cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.toggle-set.primary","div.toggle-set.primary",-1346980125)], null),cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.seq((function (){var iter__4529__auto__ = (function bfuncs$typesetting$iter__67984(s__67985){
return (new cljs.core.LazySeq(null,(function (){
var s__67985__$1 = s__67985;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__67985__$1);
if(temp__5735__auto__){
var s__67985__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__67985__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__67985__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__67987 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__67986 = (0);
while(true){
if((i__67986 < size__4528__auto__)){
var key = cljs.core._nth(c__4527__auto__,i__67986);
var map__67989 = cljs.core.get.cljs$core$IFn$_invoke$arity$3(bfuncs.typesetting_data.operations,key,cljs.core.PersistentArrayMap.EMPTY);
var map__67989__$1 = (((((!((map__67989 == null))))?(((((map__67989.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__67989.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__67989):map__67989);
var operation = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67989__$1,new cljs.core.Keyword(null,"operation","operation",-1267664310));
var formats = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67989__$1,new cljs.core.Keyword(null,"formats","formats",-1397890976));
cljs.core.chunk_append(b__67987,(cljs.core.truth_(formats)?new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [bfuncs.typesetting.options_group,operation,key,formats,_BANG_formatters], null):null));

var G__68369 = (i__67986 + (1));
i__67986 = G__68369;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__67987),bfuncs$typesetting$iter__67984(cljs.core.chunk_rest(s__67985__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__67987),null);
}
} else {
var key = cljs.core.first(s__67985__$2);
var map__67991 = cljs.core.get.cljs$core$IFn$_invoke$arity$3(bfuncs.typesetting_data.operations,key,cljs.core.PersistentArrayMap.EMPTY);
var map__67991__$1 = (((((!((map__67991 == null))))?(((((map__67991.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__67991.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__67991):map__67991);
var operation = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67991__$1,new cljs.core.Keyword(null,"operation","operation",-1267664310));
var formats = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67991__$1,new cljs.core.Keyword(null,"formats","formats",-1397890976));
return cljs.core.cons((cljs.core.truth_(formats)?new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [bfuncs.typesetting.options_group,operation,key,formats,_BANG_formatters], null):null),bfuncs$typesetting$iter__67984(cljs.core.rest(s__67985__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4529__auto__(ops);
})())))], null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.section","div.section",-982365435),(cljs.core.truth_(title)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent_material_ui.core.typography.typography,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),"section-title",new cljs.core.Keyword(null,"variant","variant",-424354234),"subtitle1"], null),title], null):null),((static_QMARK_)?tset:(function (){var open = cljs.core.deref(_BANG_open);
return cljs.core.conj.cljs$core$IFn$_invoke$arity$variadic(tset,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent_material_ui.core.collapse.collapse,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),reagent.core.class_names.cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(bfuncs.style._BANG_vclasses),new cljs.core.Keyword(null,"fade-collapse","fade-collapse",-1362536728))),new cljs.core.Keyword(null,"in","in",-1531184865),open], null),cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.toggle-set.secondary","div.toggle-set.secondary",1625882578)], null),cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.seq((function (){var iter__4529__auto__ = (function bfuncs$typesetting$iter__67997(s__67998){
return (new cljs.core.LazySeq(null,(function (){
var s__67998__$1 = s__67998;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__67998__$1);
if(temp__5735__auto__){
var s__67998__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__67998__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__67998__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__68000 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__67999 = (0);
while(true){
if((i__67999 < size__4528__auto__)){
var key = cljs.core._nth(c__4527__auto__,i__67999);
var map__68001 = cljs.core.get.cljs$core$IFn$_invoke$arity$3(bfuncs.typesetting_data.operations,key,cljs.core.PersistentArrayMap.EMPTY);
var map__68001__$1 = (((((!((map__68001 == null))))?(((((map__68001.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__68001.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__68001):map__68001);
var operation = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68001__$1,new cljs.core.Keyword(null,"operation","operation",-1267664310));
var formats = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68001__$1,new cljs.core.Keyword(null,"formats","formats",-1397890976));
cljs.core.chunk_append(b__68000,(cljs.core.truth_(formats)?new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [bfuncs.typesetting.options_group,operation,key,formats,_BANG_formatters], null):null));

var G__68402 = (i__67999 + (1));
i__67999 = G__68402;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__68000),bfuncs$typesetting$iter__67997(cljs.core.chunk_rest(s__67998__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__68000),null);
}
} else {
var key = cljs.core.first(s__67998__$2);
var map__68005 = cljs.core.get.cljs$core$IFn$_invoke$arity$3(bfuncs.typesetting_data.operations,key,cljs.core.PersistentArrayMap.EMPTY);
var map__68005__$1 = (((((!((map__68005 == null))))?(((((map__68005.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__68005.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__68005):map__68005);
var operation = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68005__$1,new cljs.core.Keyword(null,"operation","operation",-1267664310));
var formats = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68005__$1,new cljs.core.Keyword(null,"formats","formats",-1397890976));
return cljs.core.cons((cljs.core.truth_(formats)?new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [bfuncs.typesetting.options_group,operation,key,formats,_BANG_formatters], null):null),bfuncs$typesetting$iter__67997(cljs.core.rest(s__67998__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4529__auto__(more);
})())))], null),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.more-button","div.more-button",364945936),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent_material_ui.core.button.button,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return bfuncs.utils.toggle_BANG_.cljs$core$IFn$_invoke$arity$1(_BANG_open);
}),new cljs.core.Keyword(null,"size","size",1098693007),"small"], null),(cljs.core.truth_(open)?"Less":"More")], null)], null)], 0));
})())], null);
}));

(bfuncs.typesetting.toggle_set.cljs$lang$maxFixedArity = 3);

bfuncs.typesetting.grouping_marks = cljs.core.vec(cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2((function (i,x){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),i,new cljs.core.Keyword(null,"label","label",1718410804),(function (){var G__68008 = x;
var G__68008__$1 = (((G__68008 == null))?null:cljs.core.get.cljs$core$IFn$_invoke$arity$2(G__68008,new cljs.core.Keyword(null,"label","label",1718410804)));
if((G__68008__$1 == null)){
return null;
} else {
return reagent.core.as_element.cljs$core$IFn$_invoke$arity$1(G__68008__$1);
}
})()], null);
}),bfuncs.typesetting_data.grouping));
bfuncs.typesetting.preview_box = (function bfuncs$typesetting$preview_box(props,_BANG_formatters,_BANG_operators_open,_BANG_relations_open){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.preview-box","div.preview-box",605432441),props,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent_material_ui.core.typography.typography,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"variant","variant",-424354234),"caption",new cljs.core.Keyword(null,"class","class",-2030961996),"label"], null),"Preview"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.expression-container","div.expression-container",1881474250),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [bfuncs.typesetting.expression,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"display","display",242065432),true,new cljs.core.Keyword(null,"class","class",-2030961996),"demo-expression",new cljs.core.Keyword(null,"!formatters","!formatters",49002841),_BANG_formatters,new cljs.core.Keyword(null,"wrap","wrap",851669987),true,new cljs.core.Keyword(null,"max-cost","max-cost",-2074270100),(15)], null),bfuncs.typesetting_data.demo_expression], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent_material_ui.core.collapse.collapse,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),reagent.core.class_names.cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(bfuncs.style._BANG_vclasses),new cljs.core.Keyword(null,"fade-collapse","fade-collapse",-1362536728))),new cljs.core.Keyword(null,"in","in",-1531184865),cljs.core.deref(_BANG_operators_open)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [bfuncs.typesetting.expression,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"display","display",242065432),true,new cljs.core.Keyword(null,"class","class",-2030961996),"demo-expression-extra-operators",new cljs.core.Keyword(null,"!formatters","!formatters",49002841),_BANG_formatters,new cljs.core.Keyword(null,"wrap","wrap",851669987),true,new cljs.core.Keyword(null,"max-cost","max-cost",-2074270100),(15)], null),bfuncs.typesetting_data.demo_expression_extra_operators], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent_material_ui.core.collapse.collapse,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),reagent.core.class_names.cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(bfuncs.style._BANG_vclasses),new cljs.core.Keyword(null,"fade-collapse","fade-collapse",-1362536728))),new cljs.core.Keyword(null,"in","in",-1531184865),cljs.core.deref(_BANG_relations_open)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [bfuncs.typesetting.expression,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"display","display",242065432),true,new cljs.core.Keyword(null,"class","class",-2030961996),"demo-expression-extra-relations",new cljs.core.Keyword(null,"!formatters","!formatters",49002841),_BANG_formatters,new cljs.core.Keyword(null,"wrap","wrap",851669987),true,new cljs.core.Keyword(null,"max-cost","max-cost",-2074270100),(15)], null),bfuncs.typesetting_data.demo_expression_extra_relations], null)], null)], null)], null);
});
bfuncs.typesetting.typesetting_menu = (function bfuncs$typesetting$typesetting_menu(p__68016){
var map__68017 = p__68016;
var map__68017__$1 = (((((!((map__68017 == null))))?(((((map__68017.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__68017.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__68017):map__68017);
var anchor = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__68017__$1,new cljs.core.Keyword(null,"anchor","anchor",1549638489),"right");
var on_open = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68017__$1,new cljs.core.Keyword(null,"on-open","on-open",-1391088163));
var on_close = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68017__$1,new cljs.core.Keyword(null,"on-close","on-close",-761178394));
var open = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68017__$1,new cljs.core.Keyword(null,"open","open",-1763596448));
var with_let68019 = reagent.ratom.with_let_values(new cljs.core.Keyword(null,"with-let68019","with-let68019",1536049809));
var temp__5739__auto___68445 = reagent.ratom._STAR_ratom_context_STAR_;
if((temp__5739__auto___68445 == null)){
} else {
var c__27840__auto___68446 = temp__5739__auto___68445;
if((with_let68019.generation === c__27840__auto___68446.ratomGeneration)){
if(reagent.debug.has_console){
((reagent.debug.tracking)?reagent.debug.track_console:console).error(["Warning: The same with-let is being used more ","than once in the same reactive context."].join(''));
} else {
}
} else {
}

(with_let68019.generation = c__27840__auto___68446.ratomGeneration);
}


var init68020 = (with_let68019.length === (0));
var _BANG_demo_formatters = ((init68020)?(with_let68019[(0)] = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(bfuncs.typesetting._BANG_g_formatters))):(with_let68019[(0)]));
var _BANG_tip_visible = ((init68020)?(with_let68019[(1)] = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(false)):(with_let68019[(1)]));
var _BANG_observer = ((init68020)?(with_let68019[(2)] = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null)):(with_let68019[(2)]));
var _BANG_operators_open = ((init68020)?(with_let68019[(3)] = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(false)):(with_let68019[(3)]));
var _BANG_relations_open = ((init68020)?(with_let68019[(4)] = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(false)):(with_let68019[(4)]));
var update_and_close = ((init68020)?(with_let68019[(5)] = (function (e){
cljs.core.reset_BANG_(bfuncs.typesetting._BANG_g_formatters,cljs.core.deref(_BANG_demo_formatters));

return (on_close.cljs$core$IFn$_invoke$arity$1 ? on_close.cljs$core$IFn$_invoke$arity$1(e) : on_close.call(null,e));
})):(with_let68019[(5)]));
var cancel_and_close = ((init68020)?(with_let68019[(6)] = (function (e){
cljs.core.reset_BANG_(_BANG_demo_formatters,cljs.core.deref(bfuncs.typesetting._BANG_g_formatters));

return (on_close.cljs$core$IFn$_invoke$arity$1 ? on_close.cljs$core$IFn$_invoke$arity$1(e) : on_close.call(null,e));
})):(with_let68019[(6)]));
var observer_chan = ((init68020)?(with_let68019[(7)] = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1))):(with_let68019[(7)]));
var root_ref = ((init68020)?(with_let68019[(8)] = (function (element){
if(cljs.core.truth_((function (){var and__4115__auto__ = element;
if(cljs.core.truth_(and__4115__auto__)){
return cljs.core.not(cljs.core.deref(_BANG_observer));
} else {
return and__4115__auto__;
}
})())){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(observer_chan,(new IntersectionObserver((function (p__68023){
var vec__68024 = p__68023;
var entry = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__68024,(0),null);
var parent__27304__auto__ = ((entry["target"])["classList"]);
var f__27305__auto__ = (parent__27304__auto__["toggle"]);
return f__27305__auto__.call(parent__27304__auto__,"stuck",cljs.core.not((function (){var obj68036 = entry;
var k68037 = "isIntersecting";
if((function (){var obj68038 = obj68036;
return (((!((obj68038 == null)))) && (applied_science.js_interop.impl.in_QMARK__STAR_(k68037,obj68038)));
})()){
return (obj68036[k68037]);
} else {
return undefined;
}
})()));
}),({"threshold":1.0,"root":element}))));
} else {
return null;
}
})):(with_let68019[(8)]));
var target_ref = ((init68020)?(with_let68019[(9)] = (function (target){
if(cljs.core.truth_((function (){var and__4115__auto__ = target;
if(cljs.core.truth_(and__4115__auto__)){
return cljs.core.not(cljs.core.deref(_BANG_observer));
} else {
return and__4115__auto__;
}
})())){
var c__26934__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__26935__auto__ = (function (){var switch__26849__auto__ = (function (state_68049){
var state_val_68050 = (state_68049[(1)]);
if((state_val_68050 === (1))){
var state_68049__$1 = state_68049;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_68049__$1,(2),observer_chan);
} else {
if((state_val_68050 === (2))){
var inst_68040 = (state_68049[(2)]);
var inst_68045 = (inst_68040["observe"]);
var inst_68046 = inst_68045.call(inst_68040,target);
var inst_68047 = cljs.core.reset_BANG_(_BANG_observer,inst_68040);
var state_68049__$1 = (function (){var statearr_68051 = state_68049;
(statearr_68051[(7)] = inst_68046);

return statearr_68051;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_68049__$1,inst_68047);
} else {
return null;
}
}
});
return (function() {
var bfuncs$typesetting$typesetting_menu_$_state_machine__26850__auto__ = null;
var bfuncs$typesetting$typesetting_menu_$_state_machine__26850__auto____0 = (function (){
var statearr_68053 = [null,null,null,null,null,null,null,null];
(statearr_68053[(0)] = bfuncs$typesetting$typesetting_menu_$_state_machine__26850__auto__);

(statearr_68053[(1)] = (1));

return statearr_68053;
});
var bfuncs$typesetting$typesetting_menu_$_state_machine__26850__auto____1 = (function (state_68049){
while(true){
var ret_value__26851__auto__ = (function (){try{while(true){
var result__26852__auto__ = switch__26849__auto__(state_68049);
if(cljs.core.keyword_identical_QMARK_(result__26852__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26852__auto__;
}
break;
}
}catch (e68055){var ex__26853__auto__ = e68055;
var statearr_68056_68459 = state_68049;
(statearr_68056_68459[(2)] = ex__26853__auto__);


if(cljs.core.seq((state_68049[(4)]))){
var statearr_68057_68461 = state_68049;
(statearr_68057_68461[(1)] = cljs.core.first((state_68049[(4)])));

} else {
throw ex__26853__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__26851__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__68465 = state_68049;
state_68049 = G__68465;
continue;
} else {
return ret_value__26851__auto__;
}
break;
}
});
bfuncs$typesetting$typesetting_menu_$_state_machine__26850__auto__ = function(state_68049){
switch(arguments.length){
case 0:
return bfuncs$typesetting$typesetting_menu_$_state_machine__26850__auto____0.call(this);
case 1:
return bfuncs$typesetting$typesetting_menu_$_state_machine__26850__auto____1.call(this,state_68049);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
bfuncs$typesetting$typesetting_menu_$_state_machine__26850__auto__.cljs$core$IFn$_invoke$arity$0 = bfuncs$typesetting$typesetting_menu_$_state_machine__26850__auto____0;
bfuncs$typesetting$typesetting_menu_$_state_machine__26850__auto__.cljs$core$IFn$_invoke$arity$1 = bfuncs$typesetting$typesetting_menu_$_state_machine__26850__auto____1;
return bfuncs$typesetting$typesetting_menu_$_state_machine__26850__auto__;
})()
})();
var state__26936__auto__ = (function (){var statearr_68059 = f__26935__auto__();
(statearr_68059[(6)] = c__26934__auto__);

return statearr_68059;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__26936__auto__);
}));

return c__26934__auto__;
} else {
return null;
}
})):(with_let68019[(9)]));
var res__27841__auto__ = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent_material_ui.core.swipeable_drawer.swipeable_drawer,new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"anchor","anchor",1549638489),anchor,new cljs.core.Keyword(null,"open","open",-1763596448),open,new cljs.core.Keyword(null,"disable-discovery","disable-discovery",-1054719204),true,new cljs.core.Keyword(null,"disable-swipe-to-open","disable-swipe-to-open",-505681142),true,new cljs.core.Keyword(null,"class","class",-2030961996),reagent.core.class_names.cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(bfuncs.style._BANG_vclasses),new cljs.core.Keyword(null,"typesetting-menu","typesetting-menu",-1375899765))),new cljs.core.Keyword(null,"ModalProps","ModalProps",-1158081905),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keepMounted","keepMounted",1421676682),true], null),new cljs.core.Keyword(null,"on-open","on-open",-1391088163),(function (e){
cljs.core.reset_BANG_(_BANG_demo_formatters,cljs.core.deref(bfuncs.typesetting._BANG_g_formatters));

return (on_open.cljs$core$IFn$_invoke$arity$1 ? on_open.cljs$core$IFn$_invoke$arity$1(e) : on_open.call(null,e));
}),new cljs.core.Keyword(null,"on-close","on-close",-761178394),update_and_close], null),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.drawer-content","div.drawer-content",-1859089696),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ref","ref",1289896967),root_ref], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.title-and-close","div.title-and-close",-1916252333),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent_material_ui.core.typography.typography,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"variant","variant",-424354234),"h4"], null),"Typesetting"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [bfuncs.typesetting.close_button,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),update_and_close,new cljs.core.Keyword(null,"color","color",1011675173),"inherit",new cljs.core.Keyword(null,"edge","edge",919909153),"end"], null)], null)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [bfuncs.typesetting.preview_box,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ref","ref",1289896967),target_ref], null),_BANG_demo_formatters,_BANG_operators_open,_BANG_relations_open], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [bfuncs.typesetting.toggle_set,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"title","title",636505583),"Logical Operators",new cljs.core.Keyword(null,"class","class",-2030961996),"operators",new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"NOT","NOT",-1689245341),new cljs.core.Keyword(null,"AND","AND",1519433640),new cljs.core.Keyword(null,"OR","OR",-1220615924),new cljs.core.Keyword(null,"XOR","XOR",-682432949)], null),new cljs.core.Keyword(null,"more","more",-2058821800),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"NAND","NAND",-421918697),new cljs.core.Keyword(null,"NOR","NOR",1230816390),new cljs.core.Keyword(null,"XNOR","XNOR",1530244797)], null)], null),_BANG_demo_formatters,_BANG_operators_open], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [bfuncs.typesetting.toggle_set,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"title","title",636505583),"Relational Operators",new cljs.core.Keyword(null,"class","class",-2030961996),"relations",new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"EQ","EQ",-205905246),new cljs.core.Keyword(null,"IMP","IMP",-668216011)], null),new cljs.core.Keyword(null,"more","more",-2058821800),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"CON","CON",138413899),new cljs.core.Keyword(null,"NEQ","NEQ",-944829411),new cljs.core.Keyword(null,"NIMP","NIMP",-733613840),new cljs.core.Keyword(null,"NCON","NCON",625732185)], null)], null),_BANG_demo_formatters,_BANG_relations_open], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [bfuncs.typesetting.toggle_set,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"title","title",636505583),"Constants",new cljs.core.Keyword(null,"class","class",-2030961996),"constants",new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"TRUE","TRUE",494241636),new cljs.core.Keyword(null,"FALSE","FALSE",1063613829)], null)], null),_BANG_demo_formatters], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.section","div.section",-982365435),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent_material_ui.core.typography.typography,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),"section-title",new cljs.core.Keyword(null,"variant","variant",-424354234),"subtitle1"], null),"Grouping"], null),(function (){var slider_value = (function (){var or__4126__auto__ = cljs.core.deref(reagent.core.cursor(_BANG_demo_formatters,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"choices","choices",1385611597),new cljs.core.Keyword(null,"grouping","grouping",-1219230389)], null)));
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return bfuncs.typesetting.default_grouping_value;
}
})();
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),reagent.core.class_names.cljs$core$IFn$_invoke$arity$2("slider-container",(cljs.core.truth_(cljs.core.deref(_BANG_tip_visible))?"tip-visible":null))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent_material_ui.core.slider.slider,new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"marks","marks",-1844991497),bfuncs.typesetting.grouping_marks,new cljs.core.Keyword(null,"min","min",444991522),(0),new cljs.core.Keyword(null,"max","max",61366548),(cljs.core.count(bfuncs.typesetting_data.grouping) - (1)),new cljs.core.Keyword(null,"step","step",1288888124),null,new cljs.core.Keyword(null,"value","value",305978217),slider_value,new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (_,i){
cljs.core.reset_BANG_(_BANG_tip_visible,true);

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(_BANG_demo_formatters,bfuncs.utils.assoc_in_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"grouping","grouping",-1219230389)], null),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(bfuncs.typesetting_data.grouping,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [i,new cljs.core.Keyword(null,"spec","spec",347520401)], null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"choices","choices",1385611597),new cljs.core.Keyword(null,"grouping","grouping",-1219230389)], null),i], 0));
}),new cljs.core.Keyword(null,"on-change-committed","on-change-committed",-1777928723),(function (){
return cljs.core.reset_BANG_(_BANG_tip_visible,false);
})], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent_material_ui.core.typography.typography,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"variant","variant",-424354234),"body1",new cljs.core.Keyword(null,"class","class",-2030961996),"tip-title"], null),"Group with Parentheses:"], null),cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent_material_ui.core.typography.typography,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"variant","variant",-424354234),"body2",new cljs.core.Keyword(null,"component","component",1555936782),"ul",new cljs.core.Keyword(null,"class","class",-2030961996),"tip"], null)], null),cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.seq((function (){var iter__27573__auto__ = (function bfuncs$typesetting$typesetting_menu_$_iter__68062(s__68063,i__68064){
return (new cljs.core.LazySeq(null,(function (){
var s__68063__$1 = s__68063;
var i__68064__$1 = i__68064;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__68063__$1);
if(temp__5735__auto__){
var s__68063__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__68063__$2)){
var c__68067 = cljs.core.chunk_first(s__68063__$2);
var size__27572__auto__ = cljs.core.count(c__68067);
var b__68066 = cljs.core.chunk_buffer(size__27572__auto__);
if((function (){var j__68065 = (0);
while(true){
if((j__68065 < size__27572__auto__)){
var map__68068 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(c__68067,j__68065);
var map__68068__$1 = (((((!((map__68068 == null))))?(((((map__68068.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__68068.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__68068):map__68068);
var tip = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68068__$1,new cljs.core.Keyword(null,"tip","tip",1221810860));
var i = (j__68065 + i__68064__$1);
cljs.core.chunk_append(b__68066,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),(((i <= slider_value))?"active":"inactive")], null),tip], null));

var G__68513 = (j__68065 + (1));
j__68065 = G__68513;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__68066),bfuncs$typesetting$typesetting_menu_$_iter__68062(cljs.core.chunk_rest(s__68063__$2),(i__68064__$1 + size__27572__auto__)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__68066),null);
}
} else {
var map__68070 = cljs.core.first(s__68063__$2);
var map__68070__$1 = (((((!((map__68070 == null))))?(((((map__68070.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__68070.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__68070):map__68070);
var tip = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68070__$1,new cljs.core.Keyword(null,"tip","tip",1221810860));
var i = i__68064__$1;
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),(((i <= slider_value))?"active":"inactive")], null),tip], null),bfuncs$typesetting$typesetting_menu_$_iter__68062(cljs.core.rest(s__68063__$2),(i__68064__$1 + (1))));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__27573__auto__(bfuncs.typesetting_data.grouping,(0));
})())))], null);
})()], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.actions","div.actions",1521484722),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent_material_ui.core.button.button,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"class","class",-2030961996),"reset",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return cljs.core.reset_BANG_(_BANG_demo_formatters,cljs.core.PersistentArrayMap.EMPTY);
}),new cljs.core.Keyword(null,"disabled","disabled",-1529784218),cljs.core.every_QMARK_((function (p1__68014_SHARP_){
var G__68072 = cljs.core.key(p1__68014_SHARP_);
var G__68072__$1 = (((G__68072 instanceof cljs.core.Keyword))?G__68072.fqn:null);
switch (G__68072__$1) {
case "grouping":
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.val(p1__68014_SHARP_),bfuncs.typesetting.default_grouping_value);

break;
default:
return (cljs.core.val(p1__68014_SHARP_) === (0));

}
}),cljs.core.deref(reagent.core.cursor(_BANG_demo_formatters,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"choices","choices",1385611597)], null))))], null),"Reset"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.right-actions","div.right-actions",-17741803),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent_material_ui.core.button.button,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),"cancel",new cljs.core.Keyword(null,"on-click","on-click",1632826543),cancel_and_close], null),"Cancel"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent_material_ui.core.button.button,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"class","class",-2030961996),"ok",new cljs.core.Keyword(null,"color","color",1011675173),"primary",new cljs.core.Keyword(null,"variant","variant",-424354234),"outlined",new cljs.core.Keyword(null,"on-click","on-click",1632826543),update_and_close], null),"Ok"], null)], null)], null)], null)], null);

return res__27841__auto__;
});
bfuncs.typesetting.measure = (function bfuncs$typesetting$measure(element,norm,latex){
var obj__27297__auto___68537 = module$node_modules$katex$dist$katex;
var f__27298__auto___68538 = (obj__27297__auto___68537["render"]);
f__27298__auto___68538.call(obj__27297__auto___68537,["\\htmlClass{measure}{",cljs.core.str.cljs$core$IFn$_invoke$arity$1(latex),"}"].join(''),element,bfuncs.typesetting.katex_options.cljs$core$IFn$_invoke$arity$3(true,null,null));

var px = (function (){var obj68079 = cljs.core.first((function (){var obj__27297__auto__ = (function (){var obj__27297__auto__ = element;
var f__27298__auto__ = (obj__27297__auto__["querySelector"]);
return f__27298__auto__.call(obj__27297__auto__,".measure");
})();
var f__27298__auto__ = (obj__27297__auto__["getClientRects"]);
return f__27298__auto__.call(obj__27297__auto__);
})());
var k68080 = "width";
if((function (){var obj68081 = obj68079;
return (((!((obj68081 == null)))) && (applied_science.js_interop.impl.in_QMARK__STAR_(k68080,obj68081)));
})()){
return (obj68079[k68080]);
} else {
return undefined;
}
})();
var rem = (px / norm);
goog.dom.removeChildren(element);

return parseFloat((function (){var obj__27297__auto__ = rem;
var f__27298__auto__ = (obj__27297__auto__["toPrecision"]);
return f__27298__auto__.call(obj__27297__auto__,(5));
})());
});
bfuncs.typesetting.compute_cost = (function bfuncs$typesetting$compute_cost(element,norm,p__68082){
var vec__68083 = p__68082;
var fixity = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__68083,(0),null);
var o = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__68083,(1),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__68083,(2),null);
var alt_o = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__68083,(3),null);
var spec = vec__68083;
var a = "{}";
var op = (function (){var or__4126__auto__ = alt_o;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return o;
}
})();
var latex = (function (){var G__68086 = fixity;
var G__68086__$1 = (((G__68086 instanceof cljs.core.Keyword))?G__68086.fqn:null);
switch (G__68086__$1) {
case "constant":
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(op);

break;
case "infix":
return [a,cljs.core.str.cljs$core$IFn$_invoke$arity$1(op),a].join('');

break;
case "prefix":
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(op),a].join('');

break;
case "postfix":
return [a,cljs.core.str.cljs$core$IFn$_invoke$arity$1(op)].join('');

break;
case "matchfix":
var vec__68088 = op;
var l = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__68088,(0),null);
var r = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__68088,(1),null);
var s = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__68088,(2),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str.cljs$core$IFn$_invoke$arity$1(l),a,cljs.core.str.cljs$core$IFn$_invoke$arity$1(r)].join(''),[a,cljs.core.str.cljs$core$IFn$_invoke$arity$1(s),a].join('')], null);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__68086__$1)].join('')));

}
})();
return bfuncs.utils.echo.cljs$core$IFn$_invoke$arity$2(spec,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(spec,(2),((typeof latex === 'string')?bfuncs.typesetting.measure(element,norm,latex):cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$3(bfuncs.typesetting.measure,element,norm),latex))));
});
bfuncs.typesetting.operator_calibration = (function bfuncs$typesetting$operator_calibration(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),reagent.core.class_names.cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(bfuncs.style._BANG_vclasses),new cljs.core.Keyword(null,"calibration","calibration",1895019353))),new cljs.core.Keyword(null,"ref","ref",1289896967),(function (element){
if(cljs.core.truth_(element)){
var sq = goog.dom.createElement("div");
var norm = (function (){
var obj__27297__auto___68544 = element;
var f__27298__auto___68545 = (obj__27297__auto___68544["append"]);
f__27298__auto___68545.call(obj__27297__auto___68544,sq);

var parent__27304__auto___68547 = (sq["style"]);
var f__27305__auto___68548 = (parent__27304__auto___68547["setProperty"]);
f__27305__auto___68548.call(parent__27304__auto___68547,"width","1rem");

var obj68092 = cljs.core.first((function (){var obj__27297__auto__ = sq;
var f__27298__auto__ = (obj__27297__auto__["getClientRects"]);
return f__27298__auto__.call(obj__27297__auto__);
})());
var k68093 = "width";
if((function (){var obj68094 = obj68092;
return (((!((obj68094 == null)))) && (applied_science.js_interop.impl.in_QMARK__STAR_(k68093,obj68094)));
})()){
return (obj68092[k68093]);
} else {
return undefined;
}
})()
;
goog.dom.removeChildren(element);

return cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (m,op_key){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(m,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [op_key,new cljs.core.Keyword(null,"formats","formats",-1397890976)], null),(function (formats){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (format){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(format,new cljs.core.Keyword(null,"latex","latex",-1820161144),cljs.core.partial.cljs$core$IFn$_invoke$arity$3(bfuncs.typesetting.compute_cost,element,norm));
}),formats);
}));
}),bfuncs.typesetting_data.operations,cljs.core.keys(bfuncs.typesetting_data.operations))], 0));
} else {
return null;
}
})], null)], null);
});

//# sourceMappingURL=bfuncs.typesetting.js.map
