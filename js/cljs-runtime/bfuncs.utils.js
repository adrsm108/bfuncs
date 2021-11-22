goog.provide('bfuncs.utils');
bfuncs.utils.event_value = (function bfuncs$utils$event_value(e){
var obj66836 = (function (){var obj66834 = e;
var k66835 = "target";
if((function (){var obj66838 = obj66834;
return (((!((obj66838 == null)))) && (applied_science.js_interop.impl.in_QMARK__STAR_(k66835,obj66838)));
})()){
return (obj66834[k66835]);
} else {
return undefined;
}
})();
var k66837 = "value";
if((function (){var obj66839 = obj66836;
return (((!((obj66839 == null)))) && (applied_science.js_interop.impl.in_QMARK__STAR_(k66837,obj66839)));
})()){
return (obj66836[k66837]);
} else {
return undefined;
}
});
bfuncs.utils.event_checked = (function bfuncs$utils$event_checked(e){
var obj66842 = (function (){var obj66840 = e;
var k66841 = "target";
if((function (){var obj66844 = obj66840;
return (((!((obj66844 == null)))) && (applied_science.js_interop.impl.in_QMARK__STAR_(k66841,obj66844)));
})()){
return (obj66840[k66841]);
} else {
return undefined;
}
})();
var k66843 = "checked";
if((function (){var obj66845 = obj66842;
return (((!((obj66845 == null)))) && (applied_science.js_interop.impl.in_QMARK__STAR_(k66843,obj66845)));
})()){
return (obj66842[k66843]);
} else {
return undefined;
}
});
/**
 * Attempts to write text to system clipboard.
 *   Returns a boolean indicating whether write was successful.
 */
bfuncs.utils.clipboard_write_BANG_ = (function bfuncs$utils$clipboard_write_BANG_(text){
return (function (){var obj66846 = navigator;
var k66847 = "permissions";
if((function (){var obj66848 = obj66846;
return (((!((obj66848 == null)))) && (applied_science.js_interop.impl.in_QMARK__STAR_(k66847,obj66848)));
})()){
return (obj66846[k66847]);
} else {
return undefined;
}
})().query(({"name": "clipboard-write"})).then((function (result){
if(cljs.core.truth_((function (){var G__66850 = (function (){var obj66851 = result;
var k66852 = "state";
if((function (){var obj66853 = obj66851;
return (((!((obj66853 == null)))) && (applied_science.js_interop.impl.in_QMARK__STAR_(k66852,obj66853)));
})()){
return (obj66851[k66852]);
} else {
return undefined;
}
})();
var fexpr__66849 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["granted",null,"prompt",null], null), null);
return (fexpr__66849.cljs$core$IFn$_invoke$arity$1 ? fexpr__66849.cljs$core$IFn$_invoke$arity$1(G__66850) : fexpr__66849.call(null,G__66850));
})())){
return (function (){var obj66854 = navigator;
var k66855 = "clipboard";
if((function (){var obj66856 = obj66854;
return (((!((obj66856 == null)))) && (applied_science.js_interop.impl.in_QMARK__STAR_(k66855,obj66856)));
})()){
return (obj66854[k66855]);
} else {
return undefined;
}
})().writeText(cljs.core.str.cljs$core$IFn$_invoke$arity$1(text)).then(cljs.core.constantly(true),cljs.core.constantly(false));
} else {
return false;
}
})).catch(cljs.core.constantly(false));
});
bfuncs.utils.log = console.log;
bfuncs.utils.dbg = console.debug;
bfuncs.utils.echo = (function bfuncs$utils$echo(var_args){
var G__66858 = arguments.length;
switch (G__66858) {
case 1:
return bfuncs.utils.echo.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return bfuncs.utils.echo.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(bfuncs.utils.echo.cljs$core$IFn$_invoke$arity$1 = (function (x){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([x], 0));

return x;
}));

(bfuncs.utils.echo.cljs$core$IFn$_invoke$arity$2 = (function (label,x){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([label,x], 0));

return x;
}));

(bfuncs.utils.echo.cljs$lang$maxFixedArity = 2);

bfuncs.utils.echol = (function bfuncs$utils$echol(var_args){
var G__66860 = arguments.length;
switch (G__66860) {
case 1:
return bfuncs.utils.echol.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return bfuncs.utils.echol.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(bfuncs.utils.echol.cljs$core$IFn$_invoke$arity$1 = (function (x){
(bfuncs.utils.log.cljs$core$IFn$_invoke$arity$1 ? bfuncs.utils.log.cljs$core$IFn$_invoke$arity$1(x) : bfuncs.utils.log.call(null,x));

return x;
}));

(bfuncs.utils.echol.cljs$core$IFn$_invoke$arity$2 = (function (label,x){
(bfuncs.utils.log.cljs$core$IFn$_invoke$arity$2 ? bfuncs.utils.log.cljs$core$IFn$_invoke$arity$2(label,x) : bfuncs.utils.log.call(null,label,x));

return x;
}));

(bfuncs.utils.echol.cljs$lang$maxFixedArity = 2);

bfuncs.utils.echod = (function bfuncs$utils$echod(var_args){
var G__66862 = arguments.length;
switch (G__66862) {
case 1:
return bfuncs.utils.echod.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return bfuncs.utils.echod.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(bfuncs.utils.echod.cljs$core$IFn$_invoke$arity$1 = (function (x){
(bfuncs.utils.dbg.cljs$core$IFn$_invoke$arity$1 ? bfuncs.utils.dbg.cljs$core$IFn$_invoke$arity$1(x) : bfuncs.utils.dbg.call(null,x));

return x;
}));

(bfuncs.utils.echod.cljs$core$IFn$_invoke$arity$2 = (function (label,x){
(bfuncs.utils.dbg.cljs$core$IFn$_invoke$arity$2 ? bfuncs.utils.dbg.cljs$core$IFn$_invoke$arity$2(label,x) : bfuncs.utils.dbg.call(null,label,x));

return x;
}));

(bfuncs.utils.echod.cljs$lang$maxFixedArity = 2);

/**
 * Gives a sequence that is the reverse of the one produced by range with the same arguments.
 *   Arguments are expected to be numerical. Not defined for zero arguments.
 */
bfuncs.utils.rrange = (function bfuncs$utils$rrange(var_args){
var G__66864 = arguments.length;
switch (G__66864) {
case 0:
return bfuncs.utils.rrange.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return bfuncs.utils.rrange.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return bfuncs.utils.rrange.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return bfuncs.utils.rrange.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(bfuncs.utils.rrange.cljs$core$IFn$_invoke$arity$0 = (function (){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("rrange is not defined on zero arguments",cljs.core.PersistentArrayMap.EMPTY);
}));

(bfuncs.utils.rrange.cljs$core$IFn$_invoke$arity$1 = (function (end){
if(typeof end === 'number'){
} else {
throw (new Error("Assert failed: (number? end)"));
}

return cljs.core.range.cljs$core$IFn$_invoke$arity$3((end - (1)),(-1),(-1));
}));

(bfuncs.utils.rrange.cljs$core$IFn$_invoke$arity$2 = (function (start,end){
if(typeof start === 'number'){
} else {
throw (new Error("Assert failed: (number? start)"));
}

if(typeof end === 'number'){
} else {
throw (new Error("Assert failed: (number? end)"));
}

return cljs.core.range.cljs$core$IFn$_invoke$arity$3((end - (1)),(start + (1)),(-1));
}));

(bfuncs.utils.rrange.cljs$core$IFn$_invoke$arity$3 = (function (start,end,step){
if(typeof start === 'number'){
} else {
throw (new Error("Assert failed: (number? start)"));
}

if(typeof end === 'number'){
} else {
throw (new Error("Assert failed: (number? end)"));
}

if(typeof step === 'number'){
} else {
throw (new Error("Assert failed: (number? step)"));
}

var l = (end - start);
var r = cljs.core.rem(l,step);
return cljs.core.range.cljs$core$IFn$_invoke$arity$3((start + (step * (cljs.core.quot(l,step) - (((r === (0)))?(1):(0))))),(start - step),(- step));
}));

(bfuncs.utils.rrange.cljs$lang$maxFixedArity = 3);

/**
 * Returns true if x is suitable input for the name function.
 */
bfuncs.utils.named_QMARK_ = (function bfuncs$utils$named_QMARK_(x){
return ((typeof x === 'string') || ((x instanceof cljs.core.Keyword)) || ((x instanceof cljs.core.Symbol)));
});
/**
 * Returns (name x) if x is a keyword or symbol, (str x) otherwise.
 */
bfuncs.utils.name_or_str = (function bfuncs$utils$name_or_str(x){
var fexpr__66865 = ((bfuncs.utils.named_QMARK_(x))?cljs.core.name:cljs.core.str);
return (fexpr__66865.cljs$core$IFn$_invoke$arity$1 ? fexpr__66865.cljs$core$IFn$_invoke$arity$1(x) : fexpr__66865.call(null,x));
});
/**
 * Returns a sequence of distinct keys from its arguments.
 */
bfuncs.utils.distinct_keys = (function bfuncs$utils$distinct_keys(var_args){
var args__4742__auto__ = [];
var len__4736__auto___67023 = arguments.length;
var i__4737__auto___67024 = (0);
while(true){
if((i__4737__auto___67024 < len__4736__auto___67023)){
args__4742__auto__.push((arguments[i__4737__auto___67024]));

var G__67025 = (i__4737__auto___67024 + (1));
i__4737__auto___67024 = G__67025;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return bfuncs.utils.distinct_keys.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(bfuncs.utils.distinct_keys.cljs$core$IFn$_invoke$arity$variadic = (function (maps){
return cljs.core.distinct.cljs$core$IFn$_invoke$arity$1(cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.keys,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([maps], 0)));
}));

(bfuncs.utils.distinct_keys.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(bfuncs.utils.distinct_keys.cljs$lang$applyTo = (function (seq66866){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq66866));
}));

/**
 * Equivalent to (reduce rf init? (map f coll))
 */
bfuncs.utils.map_reduce = (function bfuncs$utils$map_reduce(var_args){
var G__66870 = arguments.length;
switch (G__66870) {
case 3:
return bfuncs.utils.map_reduce.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return bfuncs.utils.map_reduce.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(bfuncs.utils.map_reduce.cljs$core$IFn$_invoke$arity$3 = (function (f,rf,coll){
if(cljs.core.seq(coll)){
return bfuncs.utils.map_reduce.cljs$core$IFn$_invoke$arity$4(f,rf,(function (){var G__66871 = cljs.core.first(coll);
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__66871) : f.call(null,G__66871));
})(),cljs.core.rest(coll));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(rf,coll);
}
}));

(bfuncs.utils.map_reduce.cljs$core$IFn$_invoke$arity$4 = (function (f,rf,init,coll){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p1__66867_SHARP_,p2__66868_SHARP_){
var G__66872 = p1__66867_SHARP_;
var G__66873 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(p2__66868_SHARP_) : f.call(null,p2__66868_SHARP_));
return (rf.cljs$core$IFn$_invoke$arity$2 ? rf.cljs$core$IFn$_invoke$arity$2(G__66872,G__66873) : rf.call(null,G__66872,G__66873));
}),init,coll);
}));

(bfuncs.utils.map_reduce.cljs$lang$maxFixedArity = 4);

/**
 * Returns the set of elements from xset for which pred is logical true.
 *   Just like clojure.set/select, but utilizes transient collections.
 */
bfuncs.utils.select = (function bfuncs$utils$select(pred,xset){
return cljs.core.persistent_BANG_(cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (s,k){
if(cljs.core.truth_((pred.cljs$core$IFn$_invoke$arity$1 ? pred.cljs$core$IFn$_invoke$arity$1(k) : pred.call(null,k)))){
return s;
} else {
return cljs.core.disj_BANG_.cljs$core$IFn$_invoke$arity$2(s,k);
}
}),cljs.core.transient$(xset),xset));
});
bfuncs.utils.map_vals = (function bfuncs$utils$map_vals(f,m){
if(cljs.core.empty_QMARK_(m)){
return m;
} else {
var temp__5733__auto__ = ((cljs.core.map_QMARK_(m))?(((((!((m == null))))?(((((m.cljs$lang$protocol_mask$partition1$ & (4))) || ((cljs.core.PROTOCOL_SENTINEL === m.cljs$core$IEditableCollection$))))?true:(((!m.cljs$lang$protocol_mask$partition1$))?cljs.core.native_satisfies_QMARK_(cljs.core.IEditableCollection,m):false)):cljs.core.native_satisfies_QMARK_(cljs.core.IEditableCollection,m)))?cljs.core.transient$(m):null):cljs.core.transient$(cljs.core.PersistentArrayMap.EMPTY));
if(cljs.core.truth_(temp__5733__auto__)){
var tm = temp__5733__auto__;
return cljs.core.persistent_BANG_(cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (tm__$1,p__66875){
var vec__66876 = p__66875;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__66876,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__66876,(1),null);
return cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(tm__$1,k,(f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(v) : f.call(null,v)));
}),tm,m));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (m__$1,p__66879){
var vec__66880 = p__66879;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__66880,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__66880,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m__$1,k,(f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(v) : f.call(null,v)));
}),cljs.core.empty(m),m);
}
}
});
bfuncs.utils.map_kv = (function bfuncs$utils$map_kv(f,m){
if(cljs.core.empty_QMARK_(m)){
return m;
} else {
var temp__5733__auto__ = ((cljs.core.map_QMARK_(m))?(((((!((m == null))))?(((((m.cljs$lang$protocol_mask$partition1$ & (4))) || ((cljs.core.PROTOCOL_SENTINEL === m.cljs$core$IEditableCollection$))))?true:(((!m.cljs$lang$protocol_mask$partition1$))?cljs.core.native_satisfies_QMARK_(cljs.core.IEditableCollection,m):false)):cljs.core.native_satisfies_QMARK_(cljs.core.IEditableCollection,m)))?cljs.core.transient$(m):null):cljs.core.transient$(cljs.core.PersistentArrayMap.EMPTY));
if(cljs.core.truth_(temp__5733__auto__)){
var tm = temp__5733__auto__;
return cljs.core.persistent_BANG_(cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (tm__$1,p__66884){
var vec__66885 = p__66884;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__66885,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__66885,(1),null);
return cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(tm__$1,k,(f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(k,v) : f.call(null,k,v)));
}),tm,m));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (m__$1,p__66888){
var vec__66889 = p__66888;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__66889,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__66889,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m__$1,k,(f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(k,v) : f.call(null,k,v)));
}),cljs.core.empty(m),m);
}
}
});
bfuncs.utils.minimal_by = (function bfuncs$utils$minimal_by(f,coll){
var temp__5735__auto__ = cljs.core.seq(coll);
if(temp__5735__auto__){
var xs__6292__auto__ = temp__5735__auto__;
var a = cljs.core.first(xs__6292__auto__);
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p__66892,x){
var vec__66893 = p__66892;
var mins = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__66893,(0),null);
var minv = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__66893,(1),null);
var m = vec__66893;
var v = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(x) : f.call(null,x));
if((v < minv)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [x], null),v], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(v,minv)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.conj.cljs$core$IFn$_invoke$arity$2(mins,x),minv], null);
} else {
return m;

}
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [a], null),(f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(a) : f.call(null,a))], null),cljs.core.rest(coll));
} else {
return null;
}
});
/**
 * Returns the vector [maximal-items max-val],
 *   where maximal-items is the collection of x in coll for which (f x) is greatest,
 *   and max-val is the greatest value of f
 */
bfuncs.utils.maximal_by = (function bfuncs$utils$maximal_by(f,coll){
var temp__5735__auto__ = cljs.core.seq(coll);
if(temp__5735__auto__){
var xs__6292__auto__ = temp__5735__auto__;
var a = cljs.core.first(xs__6292__auto__);
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p__66896,x){
var vec__66897 = p__66896;
var maxs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__66897,(0),null);
var maxv = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__66897,(1),null);
var m = vec__66897;
var v = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(x) : f.call(null,x));
if((v > maxv)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [x], null),v], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(v,maxv)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.conj.cljs$core$IFn$_invoke$arity$2(maxs,x),maxv], null);
} else {
return m;

}
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [a], null),(f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(a) : f.call(null,a))], null),cljs.core.rest(coll));
} else {
return null;
}
});
/**
 * Returns the max value of (f x) over all x in coll, where f defaults to identity.
 */
bfuncs.utils.maximum = (function bfuncs$utils$maximum(var_args){
var G__66901 = arguments.length;
switch (G__66901) {
case 1:
return bfuncs.utils.maximum.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return bfuncs.utils.maximum.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(bfuncs.utils.maximum.cljs$core$IFn$_invoke$arity$1 = (function (coll){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core.max,coll);
}));

(bfuncs.utils.maximum.cljs$core$IFn$_invoke$arity$2 = (function (f,coll){
var temp__5735__auto__ = cljs.core.seq(coll);
if(temp__5735__auto__){
var xs__6292__auto__ = temp__5735__auto__;
var a = cljs.core.first(xs__6292__auto__);
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (mv,x){
var x__4214__auto__ = mv;
var y__4215__auto__ = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(x) : f.call(null,x));
return ((x__4214__auto__ > y__4215__auto__) ? x__4214__auto__ : y__4215__auto__);
}),(f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(a) : f.call(null,a)),cljs.core.rest(coll));
} else {
return null;
}
}));

(bfuncs.utils.maximum.cljs$lang$maxFixedArity = 2);

/**
 * Returns the min value of (f x) over all x in coll, where f defaults to identity.
 */
bfuncs.utils.minimum = (function bfuncs$utils$minimum(var_args){
var G__66903 = arguments.length;
switch (G__66903) {
case 1:
return bfuncs.utils.minimum.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return bfuncs.utils.minimum.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(bfuncs.utils.minimum.cljs$core$IFn$_invoke$arity$1 = (function (coll){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core.min,coll);
}));

(bfuncs.utils.minimum.cljs$core$IFn$_invoke$arity$2 = (function (f,coll){
var temp__5735__auto__ = cljs.core.seq(coll);
if(temp__5735__auto__){
var xs__6292__auto__ = temp__5735__auto__;
var a = cljs.core.first(xs__6292__auto__);
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (mv,x){
var x__4217__auto__ = mv;
var y__4218__auto__ = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(x) : f.call(null,x));
return ((x__4217__auto__ < y__4218__auto__) ? x__4217__auto__ : y__4218__auto__);
}),(f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(a) : f.call(null,a)),cljs.core.rest(coll));
} else {
return null;
}
}));

(bfuncs.utils.minimum.cljs$lang$maxFixedArity = 2);

bfuncs.utils.count_when = (function bfuncs$utils$count_when(pred,coll){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p1__66905_SHARP_,p2__66904_SHARP_){
if(cljs.core.truth_((pred.cljs$core$IFn$_invoke$arity$1 ? pred.cljs$core$IFn$_invoke$arity$1(p2__66904_SHARP_) : pred.call(null,p2__66904_SHARP_)))){
return (p1__66905_SHARP_ + (1));
} else {
return p1__66905_SHARP_;
}
}),(0),coll);
});
bfuncs.utils.count_distinct = (function bfuncs$utils$count_distinct(coll){
var total = (0);
var marked = cljs.core.transient$(cljs.core.PersistentHashSet.EMPTY);
var xs = coll;
while(true){
var temp__5733__auto__ = cljs.core.seq(xs);
if(temp__5733__auto__){
var vec__66909 = temp__5733__auto__;
var seq__66910 = cljs.core.seq(vec__66909);
var first__66911 = cljs.core.first(seq__66910);
var seq__66910__$1 = cljs.core.next(seq__66910);
var x = first__66911;
var xs_SINGLEQUOTE_ = seq__66910__$1;
if(cljs.core.contains_QMARK_(marked,x)){
var G__67033 = total;
var G__67034 = marked;
var G__67035 = xs_SINGLEQUOTE_;
total = G__67033;
marked = G__67034;
xs = G__67035;
continue;
} else {
var G__67036 = (total + (1));
var G__67037 = cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$2(marked,x);
var G__67038 = xs_SINGLEQUOTE_;
total = G__67036;
marked = G__67037;
xs = G__67038;
continue;
}
} else {
return total;
}
break;
}
});
bfuncs.utils.one_QMARK_ = (function bfuncs$utils$one_QMARK_(x){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(x,(1));
});
/**
 * Returns true if x is a collection with exactly one item.
 */
bfuncs.utils.singleton_QMARK_ = (function bfuncs$utils$singleton_QMARK_(x){
return ((cljs.core.coll_QMARK_(x)) && (bfuncs.utils.one_QMARK_(cljs.core.bounded_count((2),x))));
});
/**
 * Given two collections, returns true if they contain no common elements.
 */
bfuncs.utils.disjoint_QMARK_ = (function bfuncs$utils$disjoint_QMARK_(c1,c2){
return ((cljs.core.empty_QMARK_(c1)) || (cljs.core.empty_QMARK_(c2)) || (cljs.core.not_any_QMARK_((function (p1__66912_SHARP_){
return cljs.core.contains_QMARK_(c2,p1__66912_SHARP_);
}),c1)));
});
/**
 * Returns a vector of vectors representing the cartesian product of elements in the given sequences.
 */
bfuncs.utils.products = (function bfuncs$utils$products(var_args){
var args__4742__auto__ = [];
var len__4736__auto___67039 = arguments.length;
var i__4737__auto___67040 = (0);
while(true){
if((i__4737__auto___67040 < len__4736__auto___67039)){
args__4742__auto__.push((arguments[i__4737__auto___67040]));

var G__67041 = (i__4737__auto___67040 + (1));
i__4737__auto___67040 = G__67041;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return bfuncs.utils.products.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(bfuncs.utils.products.cljs$core$IFn$_invoke$arity$variadic = (function (seqs){
var vecs = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.vec,seqs);
var n_1 = (cljs.core.count(vecs) - (1));
var pare_down = (function (vs){
var i = n_1;
var vs__$1 = vs;
while(true){
if((i >= (0))){
var temp__5733__auto__ = cljs.core.next((vs__$1.cljs$core$IFn$_invoke$arity$1 ? vs__$1.cljs$core$IFn$_invoke$arity$1(i) : vs__$1.call(null,i)));
if(temp__5733__auto__){
var rst = temp__5733__auto__;
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(vs__$1,i,rst);
} else {
var G__67042 = (i - (1));
var G__67043 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(vs__$1,i,(vecs.cljs$core$IFn$_invoke$arity$1 ? vecs.cljs$core$IFn$_invoke$arity$1(i) : vecs.call(null,i)));
i = G__67042;
vs__$1 = G__67043;
continue;
}
} else {
return null;
}
break;
}
});
if(cljs.core.not_any_QMARK_(cljs.core.empty_QMARK_,vecs)){
var result = cljs.core.PersistentVector.EMPTY;
var vs = vecs;
while(true){
if(cljs.core.empty_QMARK_(vs)){
return result;
} else {
var G__67044 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(result,cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.first,vs));
var G__67045 = pare_down(vs);
result = G__67044;
vs = G__67045;
continue;
}
break;
}
} else {
return null;
}
}));

(bfuncs.utils.products.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(bfuncs.utils.products.cljs$lang$applyTo = (function (seq66913){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq66913));
}));

/**
 * Returns new collection with non-nil xs conjoined.
 */
bfuncs.utils.conj_kept = (function bfuncs$utils$conj_kept(var_args){
var G__66920 = arguments.length;
switch (G__66920) {
case 0:
return bfuncs.utils.conj_kept.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return bfuncs.utils.conj_kept.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return bfuncs.utils.conj_kept.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__4757__auto__ = [];
var len__4736__auto___67047 = arguments.length;
var i__4737__auto___67048 = (0);
while(true){
if((i__4737__auto___67048 < len__4736__auto___67047)){
args_arr__4757__auto__.push((arguments[i__4737__auto___67048]));

var G__67049 = (i__4737__auto___67048 + (1));
i__4737__auto___67048 = G__67049;
continue;
} else {
}
break;
}

var argseq__4758__auto__ = (new cljs.core.IndexedSeq(args_arr__4757__auto__.slice((2)),(0),null));
return bfuncs.utils.conj_kept.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4758__auto__);

}
});

(bfuncs.utils.conj_kept.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$0();
}));

(bfuncs.utils.conj_kept.cljs$core$IFn$_invoke$arity$1 = (function (coll){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$1(coll);
}));

(bfuncs.utils.conj_kept.cljs$core$IFn$_invoke$arity$2 = (function (coll,x){
if((x == null)){
return coll;
} else {
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(coll,x);
}
}));

(bfuncs.utils.conj_kept.cljs$core$IFn$_invoke$arity$variadic = (function (coll,x,xs){
return cljs.core.persistent_BANG_(cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p1__66915_SHARP_,p2__66914_SHARP_){
if((p2__66914_SHARP_ == null)){
return p1__66915_SHARP_;
} else {
return cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$2(p1__66915_SHARP_,p2__66914_SHARP_);
}
}),(((x == null))?cljs.core.transient$(coll):cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$2(cljs.core.transient$(coll),x)),xs));
}));

/** @this {Function} */
(bfuncs.utils.conj_kept.cljs$lang$applyTo = (function (seq66917){
var G__66918 = cljs.core.first(seq66917);
var seq66917__$1 = cljs.core.next(seq66917);
var G__66919 = cljs.core.first(seq66917__$1);
var seq66917__$2 = cljs.core.next(seq66917__$1);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__66918,G__66919,seq66917__$2);
}));

(bfuncs.utils.conj_kept.cljs$lang$maxFixedArity = (2));

bfuncs.utils.positions = (function bfuncs$utils$positions(pred,coll){
return cljs.core.seq(cljs.core.keep_indexed.cljs$core$IFn$_invoke$arity$2((function (p1__66922_SHARP_,p2__66921_SHARP_){
if(cljs.core.truth_((pred.cljs$core$IFn$_invoke$arity$1 ? pred.cljs$core$IFn$_invoke$arity$1(p2__66921_SHARP_) : pred.call(null,p2__66921_SHARP_)))){
return p1__66922_SHARP_;
} else {
return null;
}
}),coll));
});
/**
 * Takes two sequences, and returns a vector consisting of items from the
 *   first where the element at the corresponding position of the second is
 *   logical true.
 * 
 *   (pick [:a :b :c :d] [true false true false])
 *   ;; => [:a :b]
 */
bfuncs.utils.pick = (function bfuncs$utils$pick(coll,sel){
var coll__$1 = cljs.core.seq(coll);
var sel__$1 = cljs.core.seq(sel);
var ret = cljs.core.PersistentVector.EMPTY;
while(true){
if(((coll__$1) && (sel__$1))){
var G__67057 = cljs.core.next(coll__$1);
var G__67058 = cljs.core.next(sel__$1);
var G__67059 = (cljs.core.truth_(cljs.core.first(sel__$1))?cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,cljs.core.first(coll__$1)):ret);
coll__$1 = G__67057;
sel__$1 = G__67058;
ret = G__67059;
continue;
} else {
return ret;
}
break;
}
});
/**
 * With one argument x, returns (first x) if x is a vector whose first item is
 *   a keyword, nil otherwise.
 * 
 *   With an additional first argument test, returns (first x) when x is a vector,
 *   and test is either equal to (first x), or is a set which contains (first x).
 */
bfuncs.utils.hiccup_tag = (function bfuncs$utils$hiccup_tag(var_args){
var G__66924 = arguments.length;
switch (G__66924) {
case 1:
return bfuncs.utils.hiccup_tag.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return bfuncs.utils.hiccup_tag.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(bfuncs.utils.hiccup_tag.cljs$core$IFn$_invoke$arity$1 = (function (x){
if(cljs.core.vector_QMARK_(x)){
var t = cljs.core.first(x);
if((t instanceof cljs.core.Keyword)){
return t;
} else {
return null;
}
} else {
return null;
}
}));

(bfuncs.utils.hiccup_tag.cljs$core$IFn$_invoke$arity$2 = (function (test,x){
if(cljs.core.vector_QMARK_(x)){
var t = cljs.core.first(x);
if(cljs.core.set_QMARK_(test)){
return (test.cljs$core$IFn$_invoke$arity$1 ? test.cljs$core$IFn$_invoke$arity$1(t) : test.call(null,t));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(test,t)){
return t;
} else {
return null;
}
}
} else {
return null;
}
}));

(bfuncs.utils.hiccup_tag.cljs$lang$maxFixedArity = 2);

bfuncs.utils.count_truthy = (function bfuncs$utils$count_truthy(coll){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p1__66926_SHARP_,p2__66925_SHARP_){
if(cljs.core.truth_(p2__66925_SHARP_)){
return (p1__66926_SHARP_ + (1));
} else {
return p1__66926_SHARP_;
}
}),(0),coll);
});
bfuncs.utils.truth_vecs = (function bfuncs$utils$truth_vecs(var_args){
var G__66930 = arguments.length;
switch (G__66930) {
case 1:
return bfuncs.utils.truth_vecs.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return bfuncs.utils.truth_vecs.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(bfuncs.utils.truth_vecs.cljs$core$IFn$_invoke$arity$1 = (function (n){
return bfuncs.utils.truth_vecs.cljs$core$IFn$_invoke$arity$2(n,false);
}));

(bfuncs.utils.truth_vecs.cljs$core$IFn$_invoke$arity$2 = (function (n,meta_QMARK_){
var idxs = bfuncs.utils.rrange.cljs$core$IFn$_invoke$arity$1(n);
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((cljs.core.truth_(meta_QMARK_)?(function (p1__66927_SHARP_){
return cljs.core.with_meta(cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.bit_test,p1__66927_SHARP_),idxs),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"terms","terms",-1556977978),cljs.core.sorted_set.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([p1__66927_SHARP_], 0))], null));
}):(function (p1__66928_SHARP_){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.bit_test,p1__66928_SHARP_),idxs);
})),cljs.core.range.cljs$core$IFn$_invoke$arity$1(((0) | (1 << n))));
}));

(bfuncs.utils.truth_vecs.cljs$lang$maxFixedArity = 2);

/**
 * Gets maximum set bit of n. Expects n to be a nonnegative integer.
 */
bfuncs.utils.max_set_bit = (function bfuncs$utils$max_set_bit(n){
if(cljs.core.nat_int_QMARK_(n)){
} else {
throw (new Error("Assert failed: (nat-int? n)"));
}

var x = n;
var i = (0);
while(true){
if((x > (0))){
var G__67065 = (x >> (1));
var G__67066 = (i + (1));
x = G__67065;
i = G__67066;
continue;
} else {
return i;
}
break;
}
});
bfuncs.utils.map_assoc = (function bfuncs$utils$map_assoc(f,keys){
return cljs.core.persistent_BANG_(cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p1__66931_SHARP_,p2__66932_SHARP_){
return cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(p1__66931_SHARP_,p2__66932_SHARP_,(f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(p2__66932_SHARP_) : f.call(null,p2__66932_SHARP_)));
}),cljs.core.transient$(cljs.core.PersistentArrayMap.EMPTY),keys));
});
bfuncs.utils.pass = goog.functions.NULL;
bfuncs.utils.essence = (function bfuncs$utils$essence(x){
if((((!((x == null))))?(((((x.cljs$lang$protocol_mask$partition0$ & (32768))) || ((cljs.core.PROTOCOL_SENTINEL === x.cljs$core$IDeref$))))?true:(((!x.cljs$lang$protocol_mask$partition0$))?cljs.core.native_satisfies_QMARK_(cljs.core.IDeref,x):false)):cljs.core.native_satisfies_QMARK_(cljs.core.IDeref,x))){
return cljs.core.deref(x);
} else {
return x;
}
});
bfuncs.utils.construct = (function bfuncs$utils$construct(var_args){
var G__66941 = arguments.length;
switch (G__66941) {
case 1:
return bfuncs.utils.construct.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return bfuncs.utils.construct.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return bfuncs.utils.construct.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return bfuncs.utils.construct.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return bfuncs.utils.construct.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
var args_arr__4757__auto__ = [];
var len__4736__auto___67071 = arguments.length;
var i__4737__auto___67072 = (0);
while(true){
if((i__4737__auto___67072 < len__4736__auto___67071)){
args_arr__4757__auto__.push((arguments[i__4737__auto___67072]));

var G__67073 = (i__4737__auto___67072 + (1));
i__4737__auto___67072 = G__67073;
continue;
} else {
}
break;
}

var argseq__4758__auto__ = (new cljs.core.IndexedSeq(args_arr__4757__auto__.slice((5)),(0),null));
return bfuncs.utils.construct.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),argseq__4758__auto__);

}
});

(bfuncs.utils.construct.cljs$core$IFn$_invoke$arity$1 = (function (f){
return (f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));
}));

(bfuncs.utils.construct.cljs$core$IFn$_invoke$arity$2 = (function (f,x){
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(x) : f.call(null,x));
}));

(bfuncs.utils.construct.cljs$core$IFn$_invoke$arity$3 = (function (f,x,y){
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(x,y) : f.call(null,x,y));
}));

(bfuncs.utils.construct.cljs$core$IFn$_invoke$arity$4 = (function (f,x,y,z){
return (f.cljs$core$IFn$_invoke$arity$3 ? f.cljs$core$IFn$_invoke$arity$3(x,y,z) : f.call(null,x,y,z));
}));

(bfuncs.utils.construct.cljs$core$IFn$_invoke$arity$5 = (function (f,a,b,c,d){
return (f.cljs$core$IFn$_invoke$arity$4 ? f.cljs$core$IFn$_invoke$arity$4(a,b,c,d) : f.call(null,a,b,c,d));
}));

(bfuncs.utils.construct.cljs$core$IFn$_invoke$arity$variadic = (function (f,a,b,c,d,more){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(f,a,b,c,d,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([more], 0));
}));

/** @this {Function} */
(bfuncs.utils.construct.cljs$lang$applyTo = (function (seq66935){
var G__66936 = cljs.core.first(seq66935);
var seq66935__$1 = cljs.core.next(seq66935);
var G__66937 = cljs.core.first(seq66935__$1);
var seq66935__$2 = cljs.core.next(seq66935__$1);
var G__66938 = cljs.core.first(seq66935__$2);
var seq66935__$3 = cljs.core.next(seq66935__$2);
var G__66939 = cljs.core.first(seq66935__$3);
var seq66935__$4 = cljs.core.next(seq66935__$3);
var G__66940 = cljs.core.first(seq66935__$4);
var seq66935__$5 = cljs.core.next(seq66935__$4);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__66936,G__66937,G__66938,G__66939,G__66940,seq66935__$5);
}));

(bfuncs.utils.construct.cljs$lang$maxFixedArity = (5));

bfuncs.utils.mapa = (function bfuncs$utils$mapa(f,coll){
var arr = [];
var coll_67081__$1 = cljs.core.seq(coll);
while(true){
if(coll_67081__$1){
arr.push((function (){var G__66942 = cljs.core.first(coll_67081__$1);
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__66942) : f.call(null,G__66942));
})());

var G__67085 = cljs.core.next(coll_67081__$1);
coll_67081__$1 = G__67085;
continue;
} else {
}
break;
}

return arr;
});
bfuncs.utils.map_into_array = (function bfuncs$utils$map_into_array(f,arr,coll){
if(cljs.core.array_QMARK_(arr)){
} else {
throw (new Error("Assert failed: (array? arr)"));
}

var coll_67087__$1 = cljs.core.seq(coll);
while(true){
if(coll_67087__$1){
arr.push((function (){var G__66943 = cljs.core.first(coll_67087__$1);
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__66943) : f.call(null,G__66943));
})());

var G__67088 = cljs.core.next(coll_67087__$1);
coll_67087__$1 = G__67088;
continue;
} else {
}
break;
}

return arr;
});
bfuncs.utils.reset_nil_BANG_ = (function bfuncs$utils$reset_nil_BANG_(var_args){
var args__4742__auto__ = [];
var len__4736__auto___67089 = arguments.length;
var i__4737__auto___67090 = (0);
while(true){
if((i__4737__auto___67090 < len__4736__auto___67089)){
args__4742__auto__.push((arguments[i__4737__auto___67090]));

var G__67091 = (i__4737__auto___67090 + (1));
i__4737__auto___67090 = G__67091;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return bfuncs.utils.reset_nil_BANG_.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(bfuncs.utils.reset_nil_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (atoms){
var seq__66945 = cljs.core.seq(atoms);
var chunk__66946 = null;
var count__66947 = (0);
var i__66948 = (0);
while(true){
if((i__66948 < count__66947)){
var a = chunk__66946.cljs$core$IIndexed$_nth$arity$2(null,i__66948);
cljs.core.reset_BANG_(a,null);


var G__67092 = seq__66945;
var G__67093 = chunk__66946;
var G__67094 = count__66947;
var G__67095 = (i__66948 + (1));
seq__66945 = G__67092;
chunk__66946 = G__67093;
count__66947 = G__67094;
i__66948 = G__67095;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__66945);
if(temp__5735__auto__){
var seq__66945__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__66945__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__66945__$1);
var G__67096 = cljs.core.chunk_rest(seq__66945__$1);
var G__67097 = c__4556__auto__;
var G__67098 = cljs.core.count(c__4556__auto__);
var G__67099 = (0);
seq__66945 = G__67096;
chunk__66946 = G__67097;
count__66947 = G__67098;
i__66948 = G__67099;
continue;
} else {
var a = cljs.core.first(seq__66945__$1);
cljs.core.reset_BANG_(a,null);


var G__67100 = cljs.core.next(seq__66945__$1);
var G__67101 = null;
var G__67102 = (0);
var G__67103 = (0);
seq__66945 = G__67100;
chunk__66946 = G__67101;
count__66947 = G__67102;
i__66948 = G__67103;
continue;
}
} else {
return null;
}
}
break;
}
}));

(bfuncs.utils.reset_nil_BANG_.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(bfuncs.utils.reset_nil_BANG_.cljs$lang$applyTo = (function (seq66944){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq66944));
}));

bfuncs.utils.postinc_BANG_ = (function bfuncs$utils$postinc_BANG_(a){
var v = cljs.core.deref(a);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(a,cljs.core.inc);

return v;
});
bfuncs.utils.post_swap_BANG_ = (function bfuncs$utils$post_swap_BANG_(var_args){
var args__4742__auto__ = [];
var len__4736__auto___67105 = arguments.length;
var i__4737__auto___67106 = (0);
while(true){
if((i__4737__auto___67106 < len__4736__auto___67105)){
args__4742__auto__.push((arguments[i__4737__auto___67106]));

var G__67108 = (i__4737__auto___67106 + (1));
i__4737__auto___67106 = G__67108;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((2) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((2)),(0),null)):null);
return bfuncs.utils.post_swap_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4743__auto__);
});

(bfuncs.utils.post_swap_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (a,f,args){
var v = cljs.core.deref(a);
cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.swap_BANG_,f,args);

return v;
}));

(bfuncs.utils.post_swap_BANG_.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(bfuncs.utils.post_swap_BANG_.cljs$lang$applyTo = (function (seq66949){
var G__66950 = cljs.core.first(seq66949);
var seq66949__$1 = cljs.core.next(seq66949);
var G__66951 = cljs.core.first(seq66949__$1);
var seq66949__$2 = cljs.core.next(seq66949__$1);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__66950,G__66951,seq66949__$2);
}));

bfuncs.utils.add_keys = (function bfuncs$utils$add_keys(seq){
return cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2((function (p1__66953_SHARP_,p2__66952_SHARP_){
return cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$4(p2__66952_SHARP_,cljs.core.assoc,new cljs.core.Keyword(null,"key","key",-1516042587),p1__66953_SHARP_);
}),seq);
});
bfuncs.utils.assoc_some = (function bfuncs$utils$assoc_some(var_args){
var G__66959 = arguments.length;
switch (G__66959) {
case 3:
return bfuncs.utils.assoc_some.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
var args_arr__4757__auto__ = [];
var len__4736__auto___67122 = arguments.length;
var i__4737__auto___67124 = (0);
while(true){
if((i__4737__auto___67124 < len__4736__auto___67122)){
args_arr__4757__auto__.push((arguments[i__4737__auto___67124]));

var G__67127 = (i__4737__auto___67124 + (1));
i__4737__auto___67124 = G__67127;
continue;
} else {
}
break;
}

var argseq__4758__auto__ = (new cljs.core.IndexedSeq(args_arr__4757__auto__.slice((3)),(0),null));
return bfuncs.utils.assoc_some.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4758__auto__);

}
});

(bfuncs.utils.assoc_some.cljs$core$IFn$_invoke$arity$3 = (function (coll,k,v){
if((!((k == null)))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(coll,k,v);
} else {
return coll;
}
}));

(bfuncs.utils.assoc_some.cljs$core$IFn$_invoke$arity$variadic = (function (coll,k,v,kvs){
while(true){
var ret = bfuncs.utils.assoc_some.cljs$core$IFn$_invoke$arity$3(coll,k,v);
if(cljs.core.truth_(kvs)){
var G__67133 = ret;
var G__67134 = cljs.core.first(kvs);
var G__67135 = cljs.core.second(kvs);
var G__67136 = cljs.core.nnext(kvs);
coll = G__67133;
k = G__67134;
v = G__67135;
kvs = G__67136;
continue;
} else {
return ret;
}
break;
}
}));

/** @this {Function} */
(bfuncs.utils.assoc_some.cljs$lang$applyTo = (function (seq66955){
var G__66956 = cljs.core.first(seq66955);
var seq66955__$1 = cljs.core.next(seq66955);
var G__66957 = cljs.core.first(seq66955__$1);
var seq66955__$2 = cljs.core.next(seq66955__$1);
var G__66958 = cljs.core.first(seq66955__$2);
var seq66955__$3 = cljs.core.next(seq66955__$2);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__66956,G__66957,G__66958,seq66955__$3);
}));

(bfuncs.utils.assoc_some.cljs$lang$maxFixedArity = (3));

bfuncs.utils.array_like_QMARK_ = (function bfuncs$utils$array_like_QMARK_(x){
return ((cljs.core.array_QMARK_(x)) || (cljs.core.vector_QMARK_(x)));
});
bfuncs.utils.int_digits = (function bfuncs$utils$int_digits(var_args){
var G__66961 = arguments.length;
switch (G__66961) {
case 1:
return bfuncs.utils.int_digits.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return bfuncs.utils.int_digits.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(bfuncs.utils.int_digits.cljs$core$IFn$_invoke$arity$1 = (function (x){
if(cljs.core.int_QMARK_(x)){
} else {
throw (new Error("Assert failed: (int? x)"));
}

if((x === (0))){
return (1);
} else {
return (Math.floor(Math.log10(Math.abs(x))) + (1));
}
}));

(bfuncs.utils.int_digits.cljs$core$IFn$_invoke$arity$2 = (function (x,base){
if(cljs.core.int_QMARK_(x)){
} else {
throw (new Error("Assert failed: (int? x)"));
}

if(cljs.core.int_QMARK_(base)){
} else {
throw (new Error("Assert failed: (int? base)"));
}

if((x === (0))){
return (1);
} else {
return (Math.floor((Math.log(Math.abs(x)) / (function (){var G__66962 = base;
switch (G__66962) {
case (2):
return Math.LN2;

break;
case (10):
return Math.LN10;

break;
default:
return Math.log(base);

}
})())) + (1));
}
}));

(bfuncs.utils.int_digits.cljs$lang$maxFixedArity = 2);

bfuncs.utils.stopping_propagation = (function bfuncs$utils$stopping_propagation(f){
return (function() { 
var G__67147__delegate = function (event,args){
cljs.core.apply.cljs$core$IFn$_invoke$arity$3(f,event,args);

var obj__27297__auto__ = event;
var f__27298__auto__ = (obj__27297__auto__["stopPropagation"]);
return f__27298__auto__.call(obj__27297__auto__);
};
var G__67147 = function (event,var_args){
var args = null;
if (arguments.length > 1) {
var G__67148__i = 0, G__67148__a = new Array(arguments.length -  1);
while (G__67148__i < G__67148__a.length) {G__67148__a[G__67148__i] = arguments[G__67148__i + 1]; ++G__67148__i;}
  args = new cljs.core.IndexedSeq(G__67148__a,0,null);
} 
return G__67147__delegate.call(this,event,args);};
G__67147.cljs$lang$maxFixedArity = 1;
G__67147.cljs$lang$applyTo = (function (arglist__67149){
var event = cljs.core.first(arglist__67149);
var args = cljs.core.rest(arglist__67149);
return G__67147__delegate(event,args);
});
G__67147.cljs$core$IFn$_invoke$arity$variadic = G__67147__delegate;
return G__67147;
})()
;
});
/**
 * Updates :selection in sel, to new-selection if it is different from current value, nil otherwise.
 *   In the latter case, event.target.blur() is also called.
 *   When event.shiftKey is true, :selection becomes new-selection, and :page-data is updated to show new-step.
 */
bfuncs.utils.toggle_selection = (function bfuncs$utils$toggle_selection(p__66963,event,new_selection,new_step){
var map__66964 = p__66963;
var map__66964__$1 = (((((!((map__66964 == null))))?(((((map__66964.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__66964.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__66964):map__66964);
var sel = map__66964__$1;
var selection = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66964__$1,new cljs.core.Keyword(null,"selection","selection",975998651));
var vec__66965 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66964__$1,new cljs.core.Keyword(null,"page-data","page-data",1443840710));
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__66965,(0),null);
var per_page = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__66965,(1),null);
if(cljs.core.truth_((function (){var obj66969 = event;
var k66970 = "ctrlKey";
if((function (){var obj66971 = obj66969;
return (((!((obj66971 == null)))) && (applied_science.js_interop.impl.in_QMARK__STAR_(k66970,obj66971)));
})()){
return (obj66969[k66970]);
} else {
return undefined;
}
})())){
if(cljs.core.truth_(new_step)){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"selection","selection",975998651),new_selection,new cljs.core.Keyword(null,"page-data","page-data",1443840710),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.quot(new_step,per_page),per_page], null)], null);
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(sel,new cljs.core.Keyword(null,"selection","selection",975998651),new_selection);
}
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(sel,new cljs.core.Keyword(null,"selection","selection",975998651),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new_selection,selection))?(function (){var parent__27304__auto__ = (event["target"]);
var f__27305__auto__ = (parent__27304__auto__["blur"]);
return f__27305__auto__.call(parent__27304__auto__);
})():new_selection));
}
});
bfuncs.utils.toggle_selection_key_down_fn = (function bfuncs$utils$toggle_selection_key_down_fn(_BANG_sel,new_selection,new_step){
return (function (e){
var G__66972 = (function (){var obj66973 = e;
var k66974 = "key";
if((function (){var obj66975 = obj66973;
return (((!((obj66975 == null)))) && (applied_science.js_interop.impl.in_QMARK__STAR_(k66974,obj66975)));
})()){
return (obj66973[k66974]);
} else {
return undefined;
}
})();
switch (G__66972) {
case "Enter":
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(_BANG_sel,bfuncs.utils.toggle_selection,e,new_selection,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new_step], 0));

var obj__27297__auto___67157 = e;
var f__27298__auto___67158 = (obj__27297__auto___67157["preventDefault"]);
f__27298__auto___67158.call(obj__27297__auto___67157);

var obj__27297__auto__ = e;
var f__27298__auto__ = (obj__27297__auto__["stopPropagation"]);
return f__27298__auto__.call(obj__27297__auto__);

break;
case " ":
var obj__27297__auto___67159 = e;
var f__27298__auto___67160 = (obj__27297__auto___67159["preventDefault"]);
f__27298__auto___67160.call(obj__27297__auto___67159);

var obj__27297__auto___67161 = e;
var f__27298__auto___67162 = (obj__27297__auto___67161["stopPropagation"]);
f__27298__auto___67162.call(obj__27297__auto___67161);

if(cljs.core.truth_((function (){var obj66976 = e;
var k66977 = "repeat";
if((function (){var obj66978 = obj66976;
return (((!((obj66978 == null)))) && (applied_science.js_interop.impl.in_QMARK__STAR_(k66977,obj66978)));
})()){
return (obj66976[k66977]);
} else {
return undefined;
}
})())){
return null;
} else {
var parent__27304__auto__ = ((e["target"])["classList"]);
var f__27305__auto__ = (parent__27304__auto__["toggle"]);
return f__27305__auto__.call(parent__27304__auto__,"active",true);
}

break;
default:
return null;

}
});
});
bfuncs.utils.toggle_selection_key_up_fn = (function bfuncs$utils$toggle_selection_key_up_fn(_BANG_sel,new_selection,new_step){
return (function (e){
var G__66979 = (function (){var obj66980 = e;
var k66981 = "key";
if((function (){var obj66982 = obj66980;
return (((!((obj66982 == null)))) && (applied_science.js_interop.impl.in_QMARK__STAR_(k66981,obj66982)));
})()){
return (obj66980[k66981]);
} else {
return undefined;
}
})();
switch (G__66979) {
case " ":
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(_BANG_sel,bfuncs.utils.toggle_selection,e,new_selection,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new_step], 0));

var parent__27304__auto___67165 = ((e["target"])["classList"]);
var f__27305__auto___67166 = (parent__27304__auto___67165["toggle"]);
f__27305__auto___67166.call(parent__27304__auto___67165,"active",false);

var obj__27297__auto___67167 = e;
var f__27298__auto___67168 = (obj__27297__auto___67167["preventDefault"]);
f__27298__auto___67168.call(obj__27297__auto___67167);

var obj__27297__auto__ = e;
var f__27298__auto__ = (obj__27297__auto__["stopPropagation"]);
return f__27298__auto__.call(obj__27297__auto__);

break;
default:
return null;

}
});
});
/**
 * assoc-in that allows for multiple key-seq/value pairs.
 */
bfuncs.utils.assoc_in_SINGLEQUOTE_ = (function bfuncs$utils$assoc_in_SINGLEQUOTE_(var_args){
var G__66988 = arguments.length;
switch (G__66988) {
case 3:
return bfuncs.utils.assoc_in_SINGLEQUOTE_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
var args_arr__4757__auto__ = [];
var len__4736__auto___67170 = arguments.length;
var i__4737__auto___67171 = (0);
while(true){
if((i__4737__auto___67171 < len__4736__auto___67170)){
args_arr__4757__auto__.push((arguments[i__4737__auto___67171]));

var G__67172 = (i__4737__auto___67171 + (1));
i__4737__auto___67171 = G__67172;
continue;
} else {
}
break;
}

var argseq__4758__auto__ = (new cljs.core.IndexedSeq(args_arr__4757__auto__.slice((3)),(0),null));
return bfuncs.utils.assoc_in_SINGLEQUOTE_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4758__auto__);

}
});

(bfuncs.utils.assoc_in_SINGLEQUOTE_.cljs$core$IFn$_invoke$arity$3 = (function (m,ks,v){
return cljs.core.assoc_in(m,ks,v);
}));

(bfuncs.utils.assoc_in_SINGLEQUOTE_.cljs$core$IFn$_invoke$arity$variadic = (function (m,ks,v,kvs){
while(true){
var ret = cljs.core.assoc_in(m,ks,v);
if(cljs.core.truth_(kvs)){
var G__67173 = ret;
var G__67174 = cljs.core.first(kvs);
var G__67175 = cljs.core.second(kvs);
var G__67176 = cljs.core.nnext(kvs);
m = G__67173;
ks = G__67174;
v = G__67175;
kvs = G__67176;
continue;
} else {
return ret;
}
break;
}
}));

/** @this {Function} */
(bfuncs.utils.assoc_in_SINGLEQUOTE_.cljs$lang$applyTo = (function (seq66984){
var G__66985 = cljs.core.first(seq66984);
var seq66984__$1 = cljs.core.next(seq66984);
var G__66986 = cljs.core.first(seq66984__$1);
var seq66984__$2 = cljs.core.next(seq66984__$1);
var G__66987 = cljs.core.first(seq66984__$2);
var seq66984__$3 = cljs.core.next(seq66984__$2);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__66985,G__66986,G__66987,seq66984__$3);
}));

(bfuncs.utils.assoc_in_SINGLEQUOTE_.cljs$lang$maxFixedArity = (3));

bfuncs.utils.reduce_from = (function bfuncs$utils$reduce_from(f,init,coll){
if(cljs.core.reduced_QMARK_(init)){
return cljs.core.deref(init);
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(f,init,coll);
}
});
bfuncs.utils.toggle_BANG_ = (function bfuncs$utils$toggle_BANG_(var_args){
var G__66991 = arguments.length;
switch (G__66991) {
case 1:
return bfuncs.utils.toggle_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return bfuncs.utils.toggle_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(bfuncs.utils.toggle_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (atom){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(atom,cljs.core.not);
}));

(bfuncs.utils.toggle_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (atom,val){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(atom,(function (p1__66989_SHARP_){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(p1__66989_SHARP_,val)){
return null;
} else {
return val;
}
}));
}));

(bfuncs.utils.toggle_BANG_.cljs$lang$maxFixedArity = 2);

bfuncs.utils.str_join = (function bfuncs$utils$str_join(var_args){
var G__66993 = arguments.length;
switch (G__66993) {
case 1:
return bfuncs.utils.str_join.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return bfuncs.utils.str_join.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return bfuncs.utils.str_join.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return bfuncs.utils.str_join.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return bfuncs.utils.str_join.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(bfuncs.utils.str_join.cljs$core$IFn$_invoke$arity$1 = (function (coll){
return clojure.string.join.cljs$core$IFn$_invoke$arity$1(coll);
}));

(bfuncs.utils.str_join.cljs$core$IFn$_invoke$arity$2 = (function (sep,coll){
return clojure.string.join.cljs$core$IFn$_invoke$arity$2(sep,coll);
}));

(bfuncs.utils.str_join.cljs$core$IFn$_invoke$arity$3 = (function (sep,f,coll){
var sb = (new goog.string.StringBuffer());
var coll__$1 = cljs.core.seq(coll);
while(true){
if((!((coll__$1 == null)))){
var obj__27297__auto___67186 = sb;
var f__27298__auto___67187 = (obj__27297__auto___67186["append"]);
f__27298__auto___67187.call(obj__27297__auto___67186,cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var G__66997 = cljs.core.first(coll__$1);
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__66997) : f.call(null,G__66997));
})()));

var coll__$2 = cljs.core.next(coll__$1);
if((coll__$2 == null)){
} else {
var obj__27297__auto___67190 = sb;
var f__27298__auto___67191 = (obj__27297__auto___67190["append"]);
f__27298__auto___67191.call(obj__27297__auto___67190,sep);
}

var G__67192 = sb;
var G__67193 = coll__$2;
sb = G__67192;
coll__$1 = G__67193;
continue;
} else {
var obj__27297__auto__ = sb;
var f__27298__auto__ = (obj__27297__auto__["toString"]);
return f__27298__auto__.call(obj__27297__auto__);
}
break;
}
}));

(bfuncs.utils.str_join.cljs$core$IFn$_invoke$arity$4 = (function (start,sep,end,coll){
var sb = (new goog.string.StringBuffer(cljs.core.str.cljs$core$IFn$_invoke$arity$1(start)));
var coll__$1 = cljs.core.seq(coll);
while(true){
if((!((coll__$1 == null)))){
var obj__27297__auto___67194 = sb;
var f__27298__auto___67195 = (obj__27297__auto___67194["append"]);
f__27298__auto___67195.call(obj__27297__auto___67194,cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.first(coll__$1)));

var coll__$2 = cljs.core.next(coll__$1);
if((coll__$2 == null)){
} else {
var obj__27297__auto___67196 = sb;
var f__27298__auto___67197 = (obj__27297__auto___67196["append"]);
f__27298__auto___67197.call(obj__27297__auto___67196,sep);
}

var G__67198 = sb;
var G__67199 = coll__$2;
sb = G__67198;
coll__$1 = G__67199;
continue;
} else {
var obj__27297__auto___67200 = sb;
var f__27298__auto___67201 = (obj__27297__auto___67200["append"]);
f__27298__auto___67201.call(obj__27297__auto___67200,cljs.core.str.cljs$core$IFn$_invoke$arity$1(end));

var obj__27297__auto__ = sb;
var f__27298__auto__ = (obj__27297__auto__["toString"]);
return f__27298__auto__.call(obj__27297__auto__);
}
break;
}
}));

(bfuncs.utils.str_join.cljs$core$IFn$_invoke$arity$5 = (function (start,sep,end,f,coll){
var sb = (new goog.string.StringBuffer(cljs.core.str.cljs$core$IFn$_invoke$arity$1(start)));
var coll__$1 = cljs.core.seq(coll);
while(true){
if((!((coll__$1 == null)))){
var obj__27297__auto___67202 = sb;
var f__27298__auto___67203 = (obj__27297__auto___67202["append"]);
f__27298__auto___67203.call(obj__27297__auto___67202,cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var G__67005 = cljs.core.first(coll__$1);
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__67005) : f.call(null,G__67005));
})()));

var coll__$2 = cljs.core.next(coll__$1);
if((coll__$2 == null)){
} else {
var obj__27297__auto___67204 = sb;
var f__27298__auto___67205 = (obj__27297__auto___67204["append"]);
f__27298__auto___67205.call(obj__27297__auto___67204,sep);
}

var G__67206 = sb;
var G__67207 = coll__$2;
sb = G__67206;
coll__$1 = G__67207;
continue;
} else {
var obj__27297__auto___67208 = sb;
var f__27298__auto___67209 = (obj__27297__auto___67208["append"]);
f__27298__auto___67209.call(obj__27297__auto___67208,cljs.core.str.cljs$core$IFn$_invoke$arity$1(end));

var obj__27297__auto__ = sb;
var f__27298__auto__ = (obj__27297__auto__["toString"]);
return f__27298__auto__.call(obj__27297__auto__);
}
break;
}
}));

(bfuncs.utils.str_join.cljs$lang$maxFixedArity = 5);

bfuncs.utils.big_int = (function bfuncs$utils$big_int(n){
return BigInt(n);
});
bfuncs.utils.str_surround = (function bfuncs$utils$str_surround(start,end,s){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(start),cljs.core.str.cljs$core$IFn$_invoke$arity$1(s),cljs.core.str.cljs$core$IFn$_invoke$arity$1(end)].join('');
});
bfuncs.utils.byte_array = (function bfuncs$utils$byte_array(var_args){
var G__67013 = arguments.length;
switch (G__67013) {
case 1:
return bfuncs.utils.byte_array.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return bfuncs.utils.byte_array.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(bfuncs.utils.byte_array.cljs$core$IFn$_invoke$arity$1 = (function (size_or_seq){
if(cljs.core.seqable_QMARK_(size_or_seq)){
return Int8Array.from(size_or_seq);
} else {
return (new Int8Array(size_or_seq));
}
}));

(bfuncs.utils.byte_array.cljs$core$IFn$_invoke$arity$2 = (function (size,init_val_or_seq){
if(cljs.core.seqable_QMARK_(init_val_or_seq)){
return Int8Array.from((function (){var obj67014 = cljs.core.clj__GT_js(init_val_or_seq);
var obj67015 = (((!((obj67014 == null))))?obj67014:({}));
(obj67015["length"] = size);

return obj67015;
})());
} else {
var obj__27297__auto__ = (new Int8Array(size));
var f__27298__auto__ = (obj__27297__auto__["fill"]);
return f__27298__auto__.call(obj__27297__auto__,init_val_or_seq);
}
}));

(bfuncs.utils.byte_array.cljs$lang$maxFixedArity = 2);

bfuncs.utils.byte_array_QMARK_ = (function bfuncs$utils$byte_array_QMARK_(x){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.type(x),Int8Array);
});
bfuncs.utils.floor_log2 = (function bfuncs$utils$floor_log2(n){
return ((31) - Math.clz32(n));
});
bfuncs.utils.non_empties = (function bfuncs$utils$non_empties(var_args){
var args__4742__auto__ = [];
var len__4736__auto___67211 = arguments.length;
var i__4737__auto___67212 = (0);
while(true){
if((i__4737__auto___67212 < len__4736__auto___67211)){
args__4742__auto__.push((arguments[i__4737__auto___67212]));

var G__67213 = (i__4737__auto___67212 + (1));
i__4737__auto___67212 = G__67213;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return bfuncs.utils.non_empties.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(bfuncs.utils.non_empties.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.empty_QMARK_,args);
}));

(bfuncs.utils.non_empties.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(bfuncs.utils.non_empties.cljs$lang$applyTo = (function (seq67018){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq67018));
}));


//# sourceMappingURL=bfuncs.utils.js.map
