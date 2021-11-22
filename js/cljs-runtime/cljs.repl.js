goog.provide('cljs.repl');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__35952){
var map__35953 = p__35952;
var map__35953__$1 = (((((!((map__35953 == null))))?(((((map__35953.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35953.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35953):map__35953);
var m = map__35953__$1;
var n = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35953__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35953__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["-------------------------"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var or__4126__auto__ = new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return [(function (){var temp__5735__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__5735__auto__)){
var ns = temp__5735__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"/"].join('');
} else {
return null;
}
})(),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('');
}
})()], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Protocol"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__35959_36207 = cljs.core.seq(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__35960_36208 = null;
var count__35961_36209 = (0);
var i__35962_36210 = (0);
while(true){
if((i__35962_36210 < count__35961_36209)){
var f_36212 = chunk__35960_36208.cljs$core$IIndexed$_nth$arity$2(null,i__35962_36210);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_36212], 0));


var G__36213 = seq__35959_36207;
var G__36214 = chunk__35960_36208;
var G__36215 = count__35961_36209;
var G__36216 = (i__35962_36210 + (1));
seq__35959_36207 = G__36213;
chunk__35960_36208 = G__36214;
count__35961_36209 = G__36215;
i__35962_36210 = G__36216;
continue;
} else {
var temp__5735__auto___36219 = cljs.core.seq(seq__35959_36207);
if(temp__5735__auto___36219){
var seq__35959_36222__$1 = temp__5735__auto___36219;
if(cljs.core.chunked_seq_QMARK_(seq__35959_36222__$1)){
var c__4556__auto___36223 = cljs.core.chunk_first(seq__35959_36222__$1);
var G__36224 = cljs.core.chunk_rest(seq__35959_36222__$1);
var G__36225 = c__4556__auto___36223;
var G__36226 = cljs.core.count(c__4556__auto___36223);
var G__36227 = (0);
seq__35959_36207 = G__36224;
chunk__35960_36208 = G__36225;
count__35961_36209 = G__36226;
i__35962_36210 = G__36227;
continue;
} else {
var f_36229 = cljs.core.first(seq__35959_36222__$1);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_36229], 0));


var G__36230 = cljs.core.next(seq__35959_36222__$1);
var G__36231 = null;
var G__36232 = (0);
var G__36233 = (0);
seq__35959_36207 = G__36230;
chunk__35960_36208 = G__36231;
count__35961_36209 = G__36232;
i__35962_36210 = G__36233;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_36234 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__4126__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([arglists_36234], 0));
} else {
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first(arglists_36234)))?cljs.core.second(arglists_36234):arglists_36234)], 0));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Special Form"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.contains_QMARK_(m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
} else {
return null;
}
} else {
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/special_forms#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Macro"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["REPL Special Function"], 0));
} else {
}

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__35977_36247 = cljs.core.seq(new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__35978_36248 = null;
var count__35979_36249 = (0);
var i__35980_36250 = (0);
while(true){
if((i__35980_36250 < count__35979_36249)){
var vec__35999_36251 = chunk__35978_36248.cljs$core$IIndexed$_nth$arity$2(null,i__35980_36250);
var name_36252 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35999_36251,(0),null);
var map__36002_36253 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35999_36251,(1),null);
var map__36002_36254__$1 = (((((!((map__36002_36253 == null))))?(((((map__36002_36253.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36002_36253.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__36002_36253):map__36002_36253);
var doc_36255 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36002_36254__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_36256 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36002_36254__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_36252], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_36256], 0));

if(cljs.core.truth_(doc_36255)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_36255], 0));
} else {
}


var G__36257 = seq__35977_36247;
var G__36258 = chunk__35978_36248;
var G__36259 = count__35979_36249;
var G__36260 = (i__35980_36250 + (1));
seq__35977_36247 = G__36257;
chunk__35978_36248 = G__36258;
count__35979_36249 = G__36259;
i__35980_36250 = G__36260;
continue;
} else {
var temp__5735__auto___36261 = cljs.core.seq(seq__35977_36247);
if(temp__5735__auto___36261){
var seq__35977_36262__$1 = temp__5735__auto___36261;
if(cljs.core.chunked_seq_QMARK_(seq__35977_36262__$1)){
var c__4556__auto___36263 = cljs.core.chunk_first(seq__35977_36262__$1);
var G__36264 = cljs.core.chunk_rest(seq__35977_36262__$1);
var G__36265 = c__4556__auto___36263;
var G__36266 = cljs.core.count(c__4556__auto___36263);
var G__36267 = (0);
seq__35977_36247 = G__36264;
chunk__35978_36248 = G__36265;
count__35979_36249 = G__36266;
i__35980_36250 = G__36267;
continue;
} else {
var vec__36006_36268 = cljs.core.first(seq__35977_36262__$1);
var name_36269 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36006_36268,(0),null);
var map__36009_36270 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36006_36268,(1),null);
var map__36009_36271__$1 = (((((!((map__36009_36270 == null))))?(((((map__36009_36270.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36009_36270.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__36009_36270):map__36009_36270);
var doc_36272 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36009_36271__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_36273 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36009_36271__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_36269], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_36273], 0));

if(cljs.core.truth_(doc_36272)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_36272], 0));
} else {
}


var G__36274 = cljs.core.next(seq__35977_36262__$1);
var G__36275 = null;
var G__36276 = (0);
var G__36277 = (0);
seq__35977_36247 = G__36274;
chunk__35978_36248 = G__36275;
count__35979_36249 = G__36276;
i__35980_36250 = G__36277;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__5735__auto__ = cljs.spec.alpha.get_spec(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name(n)),cljs.core.name(nm)));
if(cljs.core.truth_(temp__5735__auto__)){
var fnspec = temp__5735__auto__;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));

var seq__36012 = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__36013 = null;
var count__36014 = (0);
var i__36015 = (0);
while(true){
if((i__36015 < count__36014)){
var role = chunk__36013.cljs$core$IIndexed$_nth$arity$2(null,i__36015);
var temp__5735__auto___36278__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5735__auto___36278__$1)){
var spec_36282 = temp__5735__auto___36278__$1;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_36282)], 0));
} else {
}


var G__36283 = seq__36012;
var G__36284 = chunk__36013;
var G__36285 = count__36014;
var G__36286 = (i__36015 + (1));
seq__36012 = G__36283;
chunk__36013 = G__36284;
count__36014 = G__36285;
i__36015 = G__36286;
continue;
} else {
var temp__5735__auto____$1 = cljs.core.seq(seq__36012);
if(temp__5735__auto____$1){
var seq__36012__$1 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(seq__36012__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__36012__$1);
var G__36287 = cljs.core.chunk_rest(seq__36012__$1);
var G__36288 = c__4556__auto__;
var G__36289 = cljs.core.count(c__4556__auto__);
var G__36290 = (0);
seq__36012 = G__36287;
chunk__36013 = G__36288;
count__36014 = G__36289;
i__36015 = G__36290;
continue;
} else {
var role = cljs.core.first(seq__36012__$1);
var temp__5735__auto___36291__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5735__auto___36291__$2)){
var spec_36292 = temp__5735__auto___36291__$2;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_36292)], 0));
} else {
}


var G__36293 = cljs.core.next(seq__36012__$1);
var G__36294 = null;
var G__36295 = (0);
var G__36296 = (0);
seq__36012 = G__36293;
chunk__36013 = G__36294;
count__36014 = G__36295;
i__36015 = G__36296;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Constructs a data representation for a Error with keys:
 *  :cause - root cause message
 *  :phase - error phase
 *  :via - cause chain, with cause keys:
 *           :type - exception class symbol
 *           :message - exception message
 *           :data - ex-data
 *           :at - top stack element
 *  :trace - root cause stack elements
 */
cljs.repl.Error__GT_map = (function cljs$repl$Error__GT_map(o){
var base = (function (t){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),(((t instanceof cljs.core.ExceptionInfo))?new cljs.core.Symbol(null,"ExceptionInfo","ExceptionInfo",294935087,null):(((t instanceof Error))?cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("js",t.name):null
))], null),(function (){var temp__5735__auto__ = cljs.core.ex_message(t);
if(cljs.core.truth_(temp__5735__auto__)){
var msg = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"message","message",-406056002),msg], null);
} else {
return null;
}
})(),(function (){var temp__5735__auto__ = cljs.core.ex_data(t);
if(cljs.core.truth_(temp__5735__auto__)){
var ed = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),ed], null);
} else {
return null;
}
})()], 0));
});
var via = (function (){var via = cljs.core.PersistentVector.EMPTY;
var t = o;
while(true){
if(cljs.core.truth_(t)){
var G__36298 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(via,t);
var G__36299 = cljs.core.ex_cause(t);
via = G__36298;
t = G__36299;
continue;
} else {
return via;
}
break;
}
})();
var root = cljs.core.peek(via);
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"via","via",-1904457336),cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2(base,via)),new cljs.core.Keyword(null,"trace","trace",-1082747415),null], null),(function (){var temp__5735__auto__ = cljs.core.ex_message(root);
if(cljs.core.truth_(temp__5735__auto__)){
var root_msg = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cause","cause",231901252),root_msg], null);
} else {
return null;
}
})(),(function (){var temp__5735__auto__ = cljs.core.ex_data(root);
if(cljs.core.truth_(temp__5735__auto__)){
var data = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),data], null);
} else {
return null;
}
})(),(function (){var temp__5735__auto__ = new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358).cljs$core$IFn$_invoke$arity$1(cljs.core.ex_data(o));
if(cljs.core.truth_(temp__5735__auto__)){
var phase = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"phase","phase",575722892),phase], null);
} else {
return null;
}
})()], 0));
});
/**
 * Returns an analysis of the phase, error, cause, and location of an error that occurred
 *   based on Throwable data, as returned by Throwable->map. All attributes other than phase
 *   are optional:
 *  :clojure.error/phase - keyword phase indicator, one of:
 *    :read-source :compile-syntax-check :compilation :macro-syntax-check :macroexpansion
 *    :execution :read-eval-result :print-eval-result
 *  :clojure.error/source - file name (no path)
 *  :clojure.error/line - integer line number
 *  :clojure.error/column - integer column number
 *  :clojure.error/symbol - symbol being expanded/compiled/invoked
 *  :clojure.error/class - cause exception class symbol
 *  :clojure.error/cause - cause exception message
 *  :clojure.error/spec - explain-data for spec error
 */
cljs.repl.ex_triage = (function cljs$repl$ex_triage(datafied_throwable){
var map__36120 = datafied_throwable;
var map__36120__$1 = (((((!((map__36120 == null))))?(((((map__36120.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36120.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__36120):map__36120);
var via = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36120__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var trace = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36120__$1,new cljs.core.Keyword(null,"trace","trace",-1082747415));
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__36120__$1,new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"execution","execution",253283524));
var map__36121 = cljs.core.last(via);
var map__36121__$1 = (((((!((map__36121 == null))))?(((((map__36121.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36121.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__36121):map__36121);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36121__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36121__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36121__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__36122 = data;
var map__36122__$1 = (((((!((map__36122 == null))))?(((((map__36122.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36122.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__36122):map__36122);
var problems = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36122__$1,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814));
var fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36122__$1,new cljs.core.Keyword("cljs.spec.alpha","fn","cljs.spec.alpha/fn",408600443));
var caller = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36122__$1,new cljs.core.Keyword("cljs.spec.test.alpha","caller","cljs.spec.test.alpha/caller",-398302390));
var map__36123 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.first(via));
var map__36123__$1 = (((((!((map__36123 == null))))?(((((map__36123.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36123.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__36123):map__36123);
var top_data = map__36123__$1;
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36123__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var G__36129 = phase;
var G__36129__$1 = (((G__36129 instanceof cljs.core.Keyword))?G__36129.fqn:null);
switch (G__36129__$1) {
case "read-source":
var map__36130 = data;
var map__36130__$1 = (((((!((map__36130 == null))))?(((((map__36130.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36130.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__36130):map__36130);
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36130__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36130__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var G__36132 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.second(via)),top_data], 0));
var G__36132__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__36132,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__36132);
var G__36132__$2 = (cljs.core.truth_((function (){var fexpr__36133 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__36133.cljs$core$IFn$_invoke$arity$1 ? fexpr__36133.cljs$core$IFn$_invoke$arity$1(source) : fexpr__36133.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__36132__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__36132__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__36132__$2,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__36132__$2;
}

break;
case "compile-syntax-check":
case "compilation":
case "macro-syntax-check":
case "macroexpansion":
var G__36134 = top_data;
var G__36134__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__36134,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__36134);
var G__36134__$2 = (cljs.core.truth_((function (){var fexpr__36137 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__36137.cljs$core$IFn$_invoke$arity$1 ? fexpr__36137.cljs$core$IFn$_invoke$arity$1(source) : fexpr__36137.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__36134__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__36134__$1);
var G__36134__$3 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__36134__$2,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__36134__$2);
var G__36134__$4 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__36134__$3,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__36134__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__36134__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__36134__$4;
}

break;
case "read-eval-result":
case "print-eval-result":
var vec__36138 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36138,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36138,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36138,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36138,(3),null);
var G__36141 = top_data;
var G__36141__$1 = (cljs.core.truth_(line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__36141,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),line):G__36141);
var G__36141__$2 = (cljs.core.truth_(file)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__36141__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file):G__36141__$1);
var G__36141__$3 = (cljs.core.truth_((function (){var and__4115__auto__ = source__$1;
if(cljs.core.truth_(and__4115__auto__)){
return method;
} else {
return and__4115__auto__;
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__36141__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__36141__$2);
var G__36141__$4 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__36141__$3,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__36141__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__36141__$4,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__36141__$4;
}

break;
case "execution":
var vec__36142 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36142,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36142,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36142,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36142,(3),null);
var file__$1 = cljs.core.first(cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__36115_SHARP_){
var or__4126__auto__ = (p1__36115_SHARP_ == null);
if(or__4126__auto__){
return or__4126__auto__;
} else {
var fexpr__36147 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__36147.cljs$core$IFn$_invoke$arity$1 ? fexpr__36147.cljs$core$IFn$_invoke$arity$1(p1__36115_SHARP_) : fexpr__36147.call(null,p1__36115_SHARP_));
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(caller),file], null)));
var err_line = (function (){var or__4126__auto__ = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(caller);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return line;
}
})();
var G__36148 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type], null);
var G__36148__$1 = (cljs.core.truth_(err_line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__36148,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),err_line):G__36148);
var G__36148__$2 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__36148__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__36148__$1);
var G__36148__$3 = (cljs.core.truth_((function (){var or__4126__auto__ = fn;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
var and__4115__auto__ = source__$1;
if(cljs.core.truth_(and__4115__auto__)){
return method;
} else {
return and__4115__auto__;
}
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__36148__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(function (){var or__4126__auto__ = fn;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null));
}
})()):G__36148__$2);
var G__36148__$4 = (cljs.core.truth_(file__$1)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__36148__$3,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file__$1):G__36148__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__36148__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__36148__$4;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__36129__$1)].join('')));

}
})(),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),phase);
});
/**
 * Returns a string from exception data, as produced by ex-triage.
 *   The first line summarizes the exception phase and location.
 *   The subsequent lines describe the cause.
 */
cljs.repl.ex_str = (function cljs$repl$ex_str(p__36156){
var map__36157 = p__36156;
var map__36157__$1 = (((((!((map__36157 == null))))?(((((map__36157.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36157.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__36157):map__36157);
var triage_data = map__36157__$1;
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36157__$1,new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358));
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36157__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36157__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36157__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var symbol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36157__$1,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994));
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36157__$1,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890));
var cause = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36157__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742));
var spec = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36157__$1,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595));
var loc = [cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4126__auto__ = source;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return "<cljs repl>";
}
})()),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4126__auto__ = line;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return (1);
}
})()),(cljs.core.truth_(column)?[":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join(''):"")].join('');
var class_name = cljs.core.name((function (){var or__4126__auto__ = class$;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return "";
}
})());
var simple_class = class_name;
var cause_type = ((cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["RuntimeException",null,"Exception",null], null), null),simple_class))?"":[" (",simple_class,")"].join(''));
var format = goog.string.format;
var G__36160 = phase;
var G__36160__$1 = (((G__36160 instanceof cljs.core.Keyword))?G__36160.fqn:null);
switch (G__36160__$1) {
case "read-source":
return (format.cljs$core$IFn$_invoke$arity$3 ? format.cljs$core$IFn$_invoke$arity$3("Syntax error reading source at (%s).\n%s\n",loc,cause) : format.call(null,"Syntax error reading source at (%s).\n%s\n",loc,cause));

break;
case "macro-syntax-check":
var G__36161 = "Syntax error macroexpanding %sat (%s).\n%s";
var G__36162 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__36163 = loc;
var G__36164 = (cljs.core.truth_(spec)?(function (){var sb__4667__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__36165_36333 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__36166_36334 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__36167_36335 = true;
var _STAR_print_fn_STAR__temp_val__36168_36336 = (function (x__4668__auto__){
return sb__4667__auto__.append(x__4668__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__36167_36335);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__36168_36336);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__36154_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__36154_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__36166_36334);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__36165_36333);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4667__auto__);
})():(format.cljs$core$IFn$_invoke$arity$2 ? format.cljs$core$IFn$_invoke$arity$2("%s\n",cause) : format.call(null,"%s\n",cause)));
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__36161,G__36162,G__36163,G__36164) : format.call(null,G__36161,G__36162,G__36163,G__36164));

break;
case "macroexpansion":
var G__36169 = "Unexpected error%s macroexpanding %sat (%s).\n%s\n";
var G__36170 = cause_type;
var G__36171 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__36172 = loc;
var G__36173 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__36169,G__36170,G__36171,G__36172,G__36173) : format.call(null,G__36169,G__36170,G__36171,G__36172,G__36173));

break;
case "compile-syntax-check":
var G__36174 = "Syntax error%s compiling %sat (%s).\n%s\n";
var G__36175 = cause_type;
var G__36176 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__36177 = loc;
var G__36178 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__36174,G__36175,G__36176,G__36177,G__36178) : format.call(null,G__36174,G__36175,G__36176,G__36177,G__36178));

break;
case "compilation":
var G__36185 = "Unexpected error%s compiling %sat (%s).\n%s\n";
var G__36186 = cause_type;
var G__36187 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__36188 = loc;
var G__36189 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__36185,G__36186,G__36187,G__36188,G__36189) : format.call(null,G__36185,G__36186,G__36187,G__36188,G__36189));

break;
case "read-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "print-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "execution":
if(cljs.core.truth_(spec)){
var G__36190 = "Execution error - invalid arguments to %s at (%s).\n%s";
var G__36191 = symbol;
var G__36192 = loc;
var G__36193 = (function (){var sb__4667__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__36194_36343 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__36195_36344 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__36196_36345 = true;
var _STAR_print_fn_STAR__temp_val__36197_36346 = (function (x__4668__auto__){
return sb__4667__auto__.append(x__4668__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__36196_36345);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__36197_36346);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__36155_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__36155_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__36195_36344);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__36194_36343);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4667__auto__);
})();
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__36190,G__36191,G__36192,G__36193) : format.call(null,G__36190,G__36191,G__36192,G__36193));
} else {
var G__36198 = "Execution error%s at %s(%s).\n%s\n";
var G__36199 = cause_type;
var G__36200 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__36201 = loc;
var G__36202 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__36198,G__36199,G__36200,G__36201,G__36202) : format.call(null,G__36198,G__36199,G__36200,G__36201,G__36202));
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__36160__$1)].join('')));

}
});
cljs.repl.error__GT_str = (function cljs$repl$error__GT_str(error){
return cljs.repl.ex_str(cljs.repl.ex_triage(cljs.repl.Error__GT_map(error)));
});

//# sourceMappingURL=cljs.repl.js.map
