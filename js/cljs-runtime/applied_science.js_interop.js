goog.provide('applied_science.js_interop');
applied_science.js_interop.unchecked_set = (function applied_science$js_interop$unchecked_set(var_args){
var args__4742__auto__ = [];
var len__4736__auto___37331 = arguments.length;
var i__4737__auto___37332 = (0);
while(true){
if((i__4737__auto___37332 < len__4736__auto___37331)){
args__4742__auto__.push((arguments[i__4737__auto___37332]));

var G__37333 = (i__4737__auto___37332 + (1));
i__4737__auto___37332 = G__37333;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return applied_science.js_interop.unchecked_set.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(applied_science.js_interop.unchecked_set.cljs$core$IFn$_invoke$arity$variadic = (function (obj,keyvals){
var G__37127_37334 = keyvals;
var vec__37128_37335 = G__37127_37334;
var seq__37129_37336 = cljs.core.seq(vec__37128_37335);
var first__37130_37337 = cljs.core.first(seq__37129_37336);
var seq__37129_37338__$1 = cljs.core.next(seq__37129_37336);
var k_37339 = first__37130_37337;
var first__37130_37340__$1 = cljs.core.first(seq__37129_37338__$1);
var seq__37129_37341__$2 = cljs.core.next(seq__37129_37338__$1);
var v_37342 = first__37130_37340__$1;
var keyvals_37343__$1 = seq__37129_37341__$2;
var G__37127_37344__$1 = G__37127_37334;
while(true){
var vec__37139_37345 = G__37127_37344__$1;
var seq__37140_37346 = cljs.core.seq(vec__37139_37345);
var first__37141_37347 = cljs.core.first(seq__37140_37346);
var seq__37140_37348__$1 = cljs.core.next(seq__37140_37346);
var k_37349__$1 = first__37141_37347;
var first__37141_37350__$1 = cljs.core.first(seq__37140_37348__$1);
var seq__37140_37351__$2 = cljs.core.next(seq__37140_37348__$1);
var v_37352__$1 = first__37141_37350__$1;
var keyvals_37353__$2 = seq__37140_37351__$2;
(obj[applied_science.js_interop.impl.wrap_key(k_37349__$1)] = v_37352__$1);

if(keyvals_37353__$2){
var G__37355 = keyvals_37353__$2;
G__37127_37344__$1 = G__37355;
continue;
} else {
}
break;
}

return obj;
}));

(applied_science.js_interop.unchecked_set.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(applied_science.js_interop.unchecked_set.cljs$lang$applyTo = (function (seq37122){
var G__37123 = cljs.core.first(seq37122);
var seq37122__$1 = cljs.core.next(seq37122);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__37123,seq37122__$1);
}));

applied_science.js_interop.unchecked_get = (function applied_science$js_interop$unchecked_get(obj,k){
return (obj[applied_science.js_interop.impl.wrap_key(k)]);
});
/**
 * Returns the value mapped to key, not-found or nil if key not present.
 * 
 *   ```
 *   (j/get o :k)
 *   (j/get o .-k)
 *   ```
 */
applied_science.js_interop.get = (function applied_science$js_interop$get(var_args){
var G__37147 = arguments.length;
switch (G__37147) {
case 2:
return applied_science.js_interop.get.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return applied_science.js_interop.get.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(applied_science.js_interop.get.cljs$core$IFn$_invoke$arity$2 = (function (obj,k){
var obj37150 = obj;
var k37151 = applied_science.js_interop.impl.wrap_key(k);
if((function (){var obj37152 = obj37150;
return (((!((obj37152 == null)))) && (applied_science.js_interop.impl.in_QMARK__STAR_(k37151,obj37152)));
})()){
return (obj37150[k37151]);
} else {
return undefined;
}
}));

(applied_science.js_interop.get.cljs$core$IFn$_invoke$arity$3 = (function (obj,k,not_found){
var obj37159 = obj;
var k37160 = applied_science.js_interop.impl.wrap_key(k);
if((function (){var obj37162 = obj37159;
return (((!((obj37162 == null)))) && (applied_science.js_interop.impl.in_QMARK__STAR_(k37160,obj37162)));
})()){
return (obj37159[k37160]);
} else {
return not_found;
}
}));

(applied_science.js_interop.get.cljs$lang$maxFixedArity = 3);

/**
 * Returns the value in a nested object structure, where ks is
 * a sequence of keys. Returns nil if the key is not present,
 * or the not-found value if supplied.
 * 
 * ```
 * (j/get-in o [:x :y] :fallback-value)
 * (j/get-in o [.-x .-y] :fallback-value)
 * ```
 */
applied_science.js_interop.get_in = (function applied_science$js_interop$get_in(var_args){
var G__37165 = arguments.length;
switch (G__37165) {
case 2:
return applied_science.js_interop.get_in.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return applied_science.js_interop.get_in.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(applied_science.js_interop.get_in.cljs$core$IFn$_invoke$arity$2 = (function (obj,ks){
return applied_science.js_interop.impl.get_in_STAR_.cljs$core$IFn$_invoke$arity$2(obj,cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(applied_science.js_interop.impl.wrap_key,ks));
}));

(applied_science.js_interop.get_in.cljs$core$IFn$_invoke$arity$3 = (function (obj,ks,not_found){
return applied_science.js_interop.impl.get_in_STAR_.cljs$core$IFn$_invoke$arity$3(obj,cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(applied_science.js_interop.impl.wrap_key,ks),not_found);
}));

(applied_science.js_interop.get_in.cljs$lang$maxFixedArity = 3);

/**
 * Returns true if `obj` contains `k`.
 * 
 *   ```
 *   (j/contains? o :k)
 *   (j/contains? o .-k)
 *   ```
 */
applied_science.js_interop.contains_QMARK_ = (function applied_science$js_interop$contains_QMARK_(obj,k){
return applied_science.js_interop.impl.contains_QMARK__STAR_(obj,applied_science.js_interop.impl.wrap_key(k));
});
/**
 * Returns an object containing only those entries in `o` whose key is in `ks`.
 * 
 *   ```
 *   (j/select-keys o [:a :b :c])
 *   (j/select-keys o [.-a .-b .-c])
 *   ```
 */
applied_science.js_interop.select_keys = (function applied_science$js_interop$select_keys(obj,ks){
return applied_science.js_interop.impl.select_keys_STAR_(obj,cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(applied_science.js_interop.impl.wrap_key,ks));
});

/**
* @constructor
 * @implements {cljs.core.IDeref}
 * @implements {cljs.core.ILookup}
*/
applied_science.js_interop.JSLookup = (function (obj){
this.obj = obj;
this.cljs$lang$protocol_mask$partition0$ = 33024;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(applied_science.js_interop.JSLookup.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (_,k){
var self__ = this;
var ___$1 = this;
var obj37169 = self__.obj;
var k37170 = applied_science.js_interop.impl.wrap_key(k);
if((function (){var obj37171 = obj37169;
return (((!((obj37171 == null)))) && (applied_science.js_interop.impl.in_QMARK__STAR_(k37170,obj37171)));
})()){
return (obj37169[k37170]);
} else {
return undefined;
}
}));

(applied_science.js_interop.JSLookup.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (_,k,not_found){
var self__ = this;
var ___$1 = this;
var obj37172 = self__.obj;
var k37173 = applied_science.js_interop.impl.wrap_key(k);
if((function (){var obj37174 = obj37172;
return (((!((obj37174 == null)))) && (applied_science.js_interop.impl.in_QMARK__STAR_(k37173,obj37174)));
})()){
return (obj37172[k37173]);
} else {
return not_found;
}
}));

(applied_science.js_interop.JSLookup.prototype.cljs$core$IDeref$_deref$arity$1 = (function (o){
var self__ = this;
var o__$1 = this;
return self__.obj;
}));

(applied_science.js_interop.JSLookup.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"obj","obj",-1672671807,null)], null);
}));

(applied_science.js_interop.JSLookup.cljs$lang$type = true);

(applied_science.js_interop.JSLookup.cljs$lang$ctorStr = "applied-science.js-interop/JSLookup");

(applied_science.js_interop.JSLookup.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"applied-science.js-interop/JSLookup");
}));

/**
 * Positional factory function for applied-science.js-interop/JSLookup.
 */
applied_science.js_interop.__GT_JSLookup = (function applied_science$js_interop$__GT_JSLookup(obj){
return (new applied_science.js_interop.JSLookup(obj));
});

/**
 * Wraps `obj` with an ILookup implementation, to support reading/destructuring. Does not support renamable keys.
 * 
 *   ```
 *   (let [{:keys [a b c]} (j/lookup o)]
 * ...)
 *   ```
 */
applied_science.js_interop.lookup = (function applied_science$js_interop$lookup(obj){
if(cljs.core.truth_(obj)){
return (new applied_science.js_interop.JSLookup(obj));
} else {
return null;
}
});
/**
 * Sets key-value pairs on `obj`, returns `obj`.
 * 
 *   ```
 *   (j/assoc! o :x 10)
 *   (j/assoc! o .-x 10)
 *   ```
 */
applied_science.js_interop.assoc_BANG_ = (function applied_science$js_interop$assoc_BANG_(var_args){
var args__4742__auto__ = [];
var len__4736__auto___37371 = arguments.length;
var i__4737__auto___37372 = (0);
while(true){
if((i__4737__auto___37372 < len__4736__auto___37371)){
args__4742__auto__.push((arguments[i__4737__auto___37372]));

var G__37374 = (i__4737__auto___37372 + (1));
i__4737__auto___37372 = G__37374;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return applied_science.js_interop.assoc_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(applied_science.js_interop.assoc_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (obj,keyvals){
var obj__$1 = (((!((obj == null))))?obj:({}));
var G__37185 = keyvals;
var vec__37186 = G__37185;
var seq__37187 = cljs.core.seq(vec__37186);
var first__37188 = cljs.core.first(seq__37187);
var seq__37187__$1 = cljs.core.next(seq__37187);
var k = first__37188;
var first__37188__$1 = cljs.core.first(seq__37187__$1);
var seq__37187__$2 = cljs.core.next(seq__37187__$1);
var v = first__37188__$1;
var kvs = seq__37187__$2;
var G__37185__$1 = G__37185;
while(true){
var vec__37189 = G__37185__$1;
var seq__37190 = cljs.core.seq(vec__37189);
var first__37191 = cljs.core.first(seq__37190);
var seq__37190__$1 = cljs.core.next(seq__37190);
var k__$1 = first__37191;
var first__37191__$1 = cljs.core.first(seq__37190__$1);
var seq__37190__$2 = cljs.core.next(seq__37190__$1);
var v__$1 = first__37191__$1;
var kvs__$1 = seq__37190__$2;
applied_science.js_interop.unchecked_set.cljs$core$IFn$_invoke$arity$variadic(obj__$1,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([k__$1,v__$1], 0));

if(kvs__$1){
var G__37381 = kvs__$1;
G__37185__$1 = G__37381;
continue;
} else {
return obj__$1;
}
break;
}
}));

(applied_science.js_interop.assoc_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(applied_science.js_interop.assoc_BANG_.cljs$lang$applyTo = (function (seq37175){
var G__37176 = cljs.core.first(seq37175);
var seq37175__$1 = cljs.core.next(seq37175);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__37176,seq37175__$1);
}));

/**
 * Mutates the value in a nested object structure, where ks is a
 *   sequence of keys and v is the new value. If any levels do not
 *   exist, objects will be created.
 * 
 *   ```
 *   (j/assoc-in! o [:x :y] 10)
 *   (j/assoc-in! o [.-x .-y] 10)
 *   ```
 */
applied_science.js_interop.assoc_in_BANG_ = (function applied_science$js_interop$assoc_in_BANG_(obj,ks,v){
return applied_science.js_interop.impl.assoc_in_STAR_(obj,cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(applied_science.js_interop.impl.wrap_key,ks),v);
});
/**
 * 'Updates' a value in a JavaScript object, where k is a key and
 *   f is a function that will take the old value and any supplied
 *   args and return the new value, which replaces the old value.
 *   If the key does not exist, nil is passed as the old value.
 * 
 *   ```
 *   (j/update! o :a + 10)
 *   (j/update! o .-a + 10)
 *   ```
 */
applied_science.js_interop.update_BANG_ = (function applied_science$js_interop$update_BANG_(var_args){
var args__4742__auto__ = [];
var len__4736__auto___37382 = arguments.length;
var i__4737__auto___37384 = (0);
while(true){
if((i__4737__auto___37384 < len__4736__auto___37382)){
args__4742__auto__.push((arguments[i__4737__auto___37384]));

var G__37386 = (i__4737__auto___37384 + (1));
i__4737__auto___37384 = G__37386;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((3) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((3)),(0),null)):null);
return applied_science.js_interop.update_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4743__auto__);
});

(applied_science.js_interop.update_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (obj,k,f,args){
var obj__$1 = (((!((obj == null))))?obj:({}));
var k_STAR_ = applied_science.js_interop.impl.wrap_key(k);
var v = cljs.core.apply.cljs$core$IFn$_invoke$arity$3(f,(obj__$1[k_STAR_]),args);
(obj__$1[k_STAR_] = v);

return obj__$1;
}));

(applied_science.js_interop.update_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(applied_science.js_interop.update_BANG_.cljs$lang$applyTo = (function (seq37196){
var G__37197 = cljs.core.first(seq37196);
var seq37196__$1 = cljs.core.next(seq37196);
var G__37198 = cljs.core.first(seq37196__$1);
var seq37196__$2 = cljs.core.next(seq37196__$1);
var G__37199 = cljs.core.first(seq37196__$2);
var seq37196__$3 = cljs.core.next(seq37196__$2);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__37197,G__37198,G__37199,seq37196__$3);
}));

/**
 * 'Updates' a value in a nested object structure, where ks is a
 *   sequence of keys and f is a function that will take the old value
 *   and any supplied args and return the new value, mutating the
 *   nested structure.  If any levels do not exist, objects will be
 *   created.
 * 
 *   ```
 *   (j/update-in! o [:x :y] + 10)
 *   (j/update-in! o [.-x .-y] + 10)
 *   ```
 */
applied_science.js_interop.update_in_BANG_ = (function applied_science$js_interop$update_in_BANG_(var_args){
var args__4742__auto__ = [];
var len__4736__auto___37400 = arguments.length;
var i__4737__auto___37401 = (0);
while(true){
if((i__4737__auto___37401 < len__4736__auto___37400)){
args__4742__auto__.push((arguments[i__4737__auto___37401]));

var G__37402 = (i__4737__auto___37401 + (1));
i__4737__auto___37401 = G__37402;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((3) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((3)),(0),null)):null);
return applied_science.js_interop.update_in_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4743__auto__);
});

(applied_science.js_interop.update_in_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (obj,ks,f,args){
return applied_science.js_interop.impl.update_in_STAR_(obj,cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(applied_science.js_interop.impl.wrap_key,ks),f,args);
}));

(applied_science.js_interop.update_in_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(applied_science.js_interop.update_in_BANG_.cljs$lang$applyTo = (function (seq37205){
var G__37206 = cljs.core.first(seq37205);
var seq37205__$1 = cljs.core.next(seq37205);
var G__37207 = cljs.core.first(seq37205__$1);
var seq37205__$2 = cljs.core.next(seq37205__$1);
var G__37208 = cljs.core.first(seq37205__$2);
var seq37205__$3 = cljs.core.next(seq37205__$2);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__37206,G__37207,G__37208,seq37205__$3);
}));

/**
 * Extends `obj` with the properties of one or more objects, overwriting
 * existing properties, moving left to right. Returns `obj`.
 * An empty starting object is provided if `obj` is nil.
 *   ```
 *   (j/extend o other)
 *   (j/extend o other #js{:x 1})
 *   ```
 *   Not IE6-friendly
 */
applied_science.js_interop.extend_BANG_ = (function applied_science$js_interop$extend_BANG_(var_args){
var G__37223 = arguments.length;
switch (G__37223) {
case 1:
return applied_science.js_interop.extend_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return applied_science.js_interop.extend_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__4757__auto__ = [];
var len__4736__auto___37411 = arguments.length;
var i__4737__auto___37412 = (0);
while(true){
if((i__4737__auto___37412 < len__4736__auto___37411)){
args_arr__4757__auto__.push((arguments[i__4737__auto___37412]));

var G__37413 = (i__4737__auto___37412 + (1));
i__4737__auto___37412 = G__37413;
continue;
} else {
}
break;
}

var argseq__4758__auto__ = (new cljs.core.IndexedSeq(args_arr__4757__auto__.slice((2)),(0),null));
return applied_science.js_interop.extend_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4758__auto__);

}
});

(applied_science.js_interop.extend_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (obj){
return obj;
}));

(applied_science.js_interop.extend_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (obj,x){
var obj__$1 = (((!((obj == null))))?obj:({}));
if((!((x == null)))){
var seq__37226_37415 = cljs.core.seq(cljs.core.js_keys(x));
var chunk__37227_37416 = null;
var count__37228_37417 = (0);
var i__37229_37418 = (0);
while(true){
if((i__37229_37418 < count__37228_37417)){
var k_37420 = chunk__37227_37416.cljs$core$IIndexed$_nth$arity$2(null,i__37229_37418);
applied_science.js_interop.unchecked_set.cljs$core$IFn$_invoke$arity$variadic(obj__$1,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([k_37420,applied_science.js_interop.unchecked_get(x,k_37420)], 0));


var G__37421 = seq__37226_37415;
var G__37422 = chunk__37227_37416;
var G__37423 = count__37228_37417;
var G__37424 = (i__37229_37418 + (1));
seq__37226_37415 = G__37421;
chunk__37227_37416 = G__37422;
count__37228_37417 = G__37423;
i__37229_37418 = G__37424;
continue;
} else {
var temp__5735__auto___37425 = cljs.core.seq(seq__37226_37415);
if(temp__5735__auto___37425){
var seq__37226_37427__$1 = temp__5735__auto___37425;
if(cljs.core.chunked_seq_QMARK_(seq__37226_37427__$1)){
var c__4556__auto___37429 = cljs.core.chunk_first(seq__37226_37427__$1);
var G__37430 = cljs.core.chunk_rest(seq__37226_37427__$1);
var G__37431 = c__4556__auto___37429;
var G__37432 = cljs.core.count(c__4556__auto___37429);
var G__37433 = (0);
seq__37226_37415 = G__37430;
chunk__37227_37416 = G__37431;
count__37228_37417 = G__37432;
i__37229_37418 = G__37433;
continue;
} else {
var k_37436 = cljs.core.first(seq__37226_37427__$1);
applied_science.js_interop.unchecked_set.cljs$core$IFn$_invoke$arity$variadic(obj__$1,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([k_37436,applied_science.js_interop.unchecked_get(x,k_37436)], 0));


var G__37437 = cljs.core.next(seq__37226_37427__$1);
var G__37438 = null;
var G__37439 = (0);
var G__37440 = (0);
seq__37226_37415 = G__37437;
chunk__37227_37416 = G__37438;
count__37228_37417 = G__37439;
i__37229_37418 = G__37440;
continue;
}
} else {
}
}
break;
}
} else {
}

return obj__$1;
}));

(applied_science.js_interop.extend_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (obj,x,more){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(applied_science.js_interop.extend_BANG_,applied_science.js_interop.extend_BANG_.cljs$core$IFn$_invoke$arity$2(obj,x),more);
}));

/** @this {Function} */
(applied_science.js_interop.extend_BANG_.cljs$lang$applyTo = (function (seq37220){
var G__37221 = cljs.core.first(seq37220);
var seq37220__$1 = cljs.core.next(seq37220);
var G__37222 = cljs.core.first(seq37220__$1);
var seq37220__$2 = cljs.core.next(seq37220__$1);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__37221,G__37222,seq37220__$2);
}));

(applied_science.js_interop.extend_BANG_.cljs$lang$maxFixedArity = (2));

/**
 * Appends `v` to `array` and returns the mutated array.
 * 
 *   ```
 *   (j/push! arr 10)
 *   ```
 */
applied_science.js_interop.push_BANG_ = (function applied_science$js_interop$push_BANG_(array,x){
var G__37234 = array;
G__37234.push(x);

return G__37234;
});
/**
 * Prepends `v` to `a` and returns the mutated array.
 * 
 *   ```
 *   (j/unshift! arr 10)
 *   ```
 */
applied_science.js_interop.unshift_BANG_ = (function applied_science$js_interop$unshift_BANG_(array,x){
var G__37236 = array;
G__37236.unshift(x);

return G__37236;
});
/**
 * Call function `k` of `obj`, binding `this` to `obj`.
 * 
 *   ```
 *   (j/call o :someFunction arg1 arg2)
 *   (j/call o .-someFunction arg1 arg2)
 *   ```
 */
applied_science.js_interop.call = (function applied_science$js_interop$call(var_args){
var args__4742__auto__ = [];
var len__4736__auto___37496 = arguments.length;
var i__4737__auto___37497 = (0);
while(true){
if((i__4737__auto___37497 < len__4736__auto___37496)){
args__4742__auto__.push((arguments[i__4737__auto___37497]));

var G__37498 = (i__4737__auto___37497 + (1));
i__4737__auto___37497 = G__37498;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((2) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((2)),(0),null)):null);
return applied_science.js_interop.call.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4743__auto__);
});

(applied_science.js_interop.call.cljs$core$IFn$_invoke$arity$variadic = (function (obj,k,args){
return (function (){var obj37250 = obj;
var k37251 = applied_science.js_interop.impl.wrap_key(k);
if((function (){var obj37253 = obj37250;
return (((!((obj37253 == null)))) && (applied_science.js_interop.impl.in_QMARK__STAR_(k37251,obj37253)));
})()){
return (obj37250[k37251]);
} else {
return undefined;
}
})().apply(obj,cljs.core.to_array(args));
}));

(applied_science.js_interop.call.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(applied_science.js_interop.call.cljs$lang$applyTo = (function (seq37240){
var G__37241 = cljs.core.first(seq37240);
var seq37240__$1 = cljs.core.next(seq37240);
var G__37242 = cljs.core.first(seq37240__$1);
var seq37240__$2 = cljs.core.next(seq37240__$1);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__37241,G__37242,seq37240__$2);
}));

/**
 * Apply function `k` of `obj`, binding `this` to `obj`.
 * 
 *   ```
 *   (j/apply o :someFunction #js [arg1 arg2])
 *   (j/apply o .-someFunction #js [arg1 arg2])
 *   ```
 */
applied_science.js_interop.apply = (function applied_science$js_interop$apply(obj,k,arg_array){
return (function (){var obj37254 = obj;
var k37255 = applied_science.js_interop.impl.wrap_key(k);
if((function (){var obj37256 = obj37254;
return (((!((obj37256 == null)))) && (applied_science.js_interop.impl.in_QMARK__STAR_(k37255,obj37256)));
})()){
return (obj37254[k37255]);
} else {
return undefined;
}
})().apply(obj,arg_array);
});
/**
 * Call function nested at `path` with `args`, binding `this` to its parent object.
 * 
 *   ```
 *   (j/call-in o [:x :someFunction] arg1 arg2)
 *   ```
 */
applied_science.js_interop.call_in = (function applied_science$js_interop$call_in(var_args){
var args__4742__auto__ = [];
var len__4736__auto___37508 = arguments.length;
var i__4737__auto___37509 = (0);
while(true){
if((i__4737__auto___37509 < len__4736__auto___37508)){
args__4742__auto__.push((arguments[i__4737__auto___37509]));

var G__37510 = (i__4737__auto___37509 + (1));
i__4737__auto___37509 = G__37510;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((2) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((2)),(0),null)):null);
return applied_science.js_interop.call_in.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4743__auto__);
});

(applied_science.js_interop.call_in.cljs$core$IFn$_invoke$arity$variadic = (function (obj,ks,args){
return applied_science.js_interop.impl.apply_in_STAR_(obj,cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(applied_science.js_interop.impl.wrap_key,ks),cljs.core.to_array(args));
}));

(applied_science.js_interop.call_in.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(applied_science.js_interop.call_in.cljs$lang$applyTo = (function (seq37257){
var G__37258 = cljs.core.first(seq37257);
var seq37257__$1 = cljs.core.next(seq37257);
var G__37259 = cljs.core.first(seq37257__$1);
var seq37257__$2 = cljs.core.next(seq37257__$1);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__37258,G__37259,seq37257__$2);
}));

/**
 * Apply function nested at `path` with `arg-array`, binding `this` to its parent object.
 * 
 *   ```
 *   (j/apply-in o [:x :someFunction] arg1 arg2)
 *   ```
 */
applied_science.js_interop.apply_in = (function applied_science$js_interop$apply_in(obj,ks,arg_array){
return applied_science.js_interop.impl.apply_in_STAR_(obj,cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(applied_science.js_interop.impl.wrap_key,ks),arg_array);
});
/**
 * Create JavaScript object from an even number arguments representing
 * interleaved keys and values.
 * 
 * ```
 * (obj :a 1 :b 2 .-c 3 .-d 4)
 * ```
 */
applied_science.js_interop.obj = (function applied_science$js_interop$obj(var_args){
var args__4742__auto__ = [];
var len__4736__auto___37515 = arguments.length;
var i__4737__auto___37516 = (0);
while(true){
if((i__4737__auto___37516 < len__4736__auto___37515)){
args__4742__auto__.push((arguments[i__4737__auto___37516]));

var G__37517 = (i__4737__auto___37516 + (1));
i__4737__auto___37516 = G__37517;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return applied_science.js_interop.obj.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(applied_science.js_interop.obj.cljs$core$IFn$_invoke$arity$variadic = (function (keyvals){
var obj = ({});
var seq__37277_37519 = cljs.core.seq(cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),keyvals));
var chunk__37278_37520 = null;
var count__37279_37521 = (0);
var i__37280_37522 = (0);
while(true){
if((i__37280_37522 < count__37279_37521)){
var vec__37295_37523 = chunk__37278_37520.cljs$core$IIndexed$_nth$arity$2(null,i__37280_37522);
var k_37524 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37295_37523,(0),null);
var v_37525 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37295_37523,(1),null);
var obj37298_37527 = obj;
var obj37299_37529 = (((!((obj37298_37527 == null))))?obj37298_37527:({}));
(obj37299_37529[applied_science.js_interop.impl.wrap_key(k_37524)] = v_37525);



var G__37530 = seq__37277_37519;
var G__37531 = chunk__37278_37520;
var G__37532 = count__37279_37521;
var G__37533 = (i__37280_37522 + (1));
seq__37277_37519 = G__37530;
chunk__37278_37520 = G__37531;
count__37279_37521 = G__37532;
i__37280_37522 = G__37533;
continue;
} else {
var temp__5735__auto___37536 = cljs.core.seq(seq__37277_37519);
if(temp__5735__auto___37536){
var seq__37277_37537__$1 = temp__5735__auto___37536;
if(cljs.core.chunked_seq_QMARK_(seq__37277_37537__$1)){
var c__4556__auto___37538 = cljs.core.chunk_first(seq__37277_37537__$1);
var G__37539 = cljs.core.chunk_rest(seq__37277_37537__$1);
var G__37540 = c__4556__auto___37538;
var G__37541 = cljs.core.count(c__4556__auto___37538);
var G__37542 = (0);
seq__37277_37519 = G__37539;
chunk__37278_37520 = G__37540;
count__37279_37521 = G__37541;
i__37280_37522 = G__37542;
continue;
} else {
var vec__37305_37543 = cljs.core.first(seq__37277_37537__$1);
var k_37544 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37305_37543,(0),null);
var v_37545 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37305_37543,(1),null);
var obj37314_37546 = obj;
var obj37315_37547 = (((!((obj37314_37546 == null))))?obj37314_37546:({}));
(obj37315_37547[applied_science.js_interop.impl.wrap_key(k_37544)] = v_37545);



var G__37548 = cljs.core.next(seq__37277_37537__$1);
var G__37549 = null;
var G__37550 = (0);
var G__37551 = (0);
seq__37277_37519 = G__37548;
chunk__37278_37520 = G__37549;
count__37279_37521 = G__37550;
i__37280_37522 = G__37551;
continue;
}
} else {
}
}
break;
}

return obj;
}));

(applied_science.js_interop.obj.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(applied_science.js_interop.obj.cljs$lang$applyTo = (function (seq37272){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq37272));
}));


//# sourceMappingURL=applied_science.js_interop.js.map
