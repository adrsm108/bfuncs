goog.provide('camel_snake_kebab.internals.misc');
camel_snake_kebab.internals.misc.convert_case = (function camel_snake_kebab$internals$misc$convert_case(var_args){
var args__4742__auto__ = [];
var len__4736__auto___40092 = arguments.length;
var i__4737__auto___40093 = (0);
while(true){
if((i__4737__auto___40093 < len__4736__auto___40092)){
args__4742__auto__.push((arguments[i__4737__auto___40093]));

var G__40097 = (i__4737__auto___40093 + (1));
i__4737__auto___40093 = G__40097;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((4) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((4)),(0),null)):null);
return camel_snake_kebab.internals.misc.convert_case.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__4743__auto__);
});

(camel_snake_kebab.internals.misc.convert_case.cljs$core$IFn$_invoke$arity$variadic = (function (first_fn,rest_fn,sep,s,p__40061){
var map__40063 = p__40061;
var map__40063__$1 = (((((!((map__40063 == null))))?(((((map__40063.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40063.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__40063):map__40063);
var separator = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__40063__$1,new cljs.core.Keyword(null,"separator","separator",-1628749125),camel_snake_kebab.internals.string_separator.generic_separator);
var temp__5733__auto__ = cljs.core.seq(camel_snake_kebab.internals.string_separator.split(separator,s));
if(temp__5733__auto__){
var vec__40070 = temp__5733__auto__;
var seq__40071 = cljs.core.seq(vec__40070);
var first__40072 = cljs.core.first(seq__40071);
var seq__40071__$1 = cljs.core.next(seq__40071);
var first = first__40072;
var rest = seq__40071__$1;
return clojure.string.join.cljs$core$IFn$_invoke$arity$2(sep,cljs.core.cons((first_fn.cljs$core$IFn$_invoke$arity$1 ? first_fn.cljs$core$IFn$_invoke$arity$1(first) : first_fn.call(null,first)),cljs.core.map.cljs$core$IFn$_invoke$arity$2(rest_fn,rest)));
} else {
return "";
}
}));

(camel_snake_kebab.internals.misc.convert_case.cljs$lang$maxFixedArity = (4));

/** @this {Function} */
(camel_snake_kebab.internals.misc.convert_case.cljs$lang$applyTo = (function (seq40050){
var G__40051 = cljs.core.first(seq40050);
var seq40050__$1 = cljs.core.next(seq40050);
var G__40052 = cljs.core.first(seq40050__$1);
var seq40050__$2 = cljs.core.next(seq40050__$1);
var G__40056 = cljs.core.first(seq40050__$2);
var seq40050__$3 = cljs.core.next(seq40050__$2);
var G__40057 = cljs.core.first(seq40050__$3);
var seq40050__$4 = cljs.core.next(seq40050__$3);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__40051,G__40052,G__40056,G__40057,seq40050__$4);
}));

camel_snake_kebab.internals.misc.upper_case_http_headers = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 13, ["WWW",null,"TE",null,"CSP",null,"CPU",null,"IP",null,"WAP",null,"HTTP",null,"DNT",null,"UA",null,"ATT",null,"SSL",null,"MD5",null,"XSS",null], null), null);
camel_snake_kebab.internals.misc.capitalize_http_header = (function camel_snake_kebab$internals$misc$capitalize_http_header(s){
var or__4126__auto__ = (function (){var G__40086 = clojure.string.upper_case(s);
return (camel_snake_kebab.internals.misc.upper_case_http_headers.cljs$core$IFn$_invoke$arity$1 ? camel_snake_kebab.internals.misc.upper_case_http_headers.cljs$core$IFn$_invoke$arity$1(G__40086) : camel_snake_kebab.internals.misc.upper_case_http_headers.call(null,G__40086));
})();
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return clojure.string.capitalize(s);
}
});

//# sourceMappingURL=camel_snake_kebab.internals.misc.js.map
