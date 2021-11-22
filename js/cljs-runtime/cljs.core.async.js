goog.provide('cljs.core.async');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__30236 = arguments.length;
switch (G__30236) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(f,true);
}));

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async30238 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async30238 = (function (f,blockable,meta30239){
this.f = f;
this.blockable = blockable;
this.meta30239 = meta30239;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async30238.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_30240,meta30239__$1){
var self__ = this;
var _30240__$1 = this;
return (new cljs.core.async.t_cljs$core$async30238(self__.f,self__.blockable,meta30239__$1));
}));

(cljs.core.async.t_cljs$core$async30238.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_30240){
var self__ = this;
var _30240__$1 = this;
return self__.meta30239;
}));

(cljs.core.async.t_cljs$core$async30238.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async30238.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async30238.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
}));

(cljs.core.async.t_cljs$core$async30238.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
}));

(cljs.core.async.t_cljs$core$async30238.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta30239","meta30239",-1887196109,null)], null);
}));

(cljs.core.async.t_cljs$core$async30238.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async30238.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async30238");

(cljs.core.async.t_cljs$core$async30238.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async30238");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async30238.
 */
cljs.core.async.__GT_t_cljs$core$async30238 = (function cljs$core$async$__GT_t_cljs$core$async30238(f__$1,blockable__$1,meta30239){
return (new cljs.core.async.t_cljs$core$async30238(f__$1,blockable__$1,meta30239));
});

}

return (new cljs.core.async.t_cljs$core$async30238(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
}));

(cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2);

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer(n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if((!((buff == null)))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === buff.cljs$core$async$impl$protocols$UnblockingBuffer$)))){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var G__30250 = arguments.length;
switch (G__30250) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,null,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,xform,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error(["Assert failed: ","buffer must be supplied when transducer is","\n","buf-or-n"].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$3(((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer(buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
}));

(cljs.core.async.chan.cljs$lang$maxFixedArity = 3);

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var G__30252 = arguments.length;
switch (G__30252) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2(xform,null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(cljs.core.async.impl.buffers.promise_buffer(),xform,ex_handler);
}));

(cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout(msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var G__30257 = arguments.length;
switch (G__30257) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3(port,fn1,true);
}));

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(ret)){
var val_32910 = cljs.core.deref(ret);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_32910) : fn1.call(null,val_32910));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_32910) : fn1.call(null,val_32910));
}));
}
} else {
}

return null;
}));

(cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3);

cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn1 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn1 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var G__30269 = arguments.length;
switch (G__30269) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__5733__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__5733__auto__)){
var ret = temp__5733__auto__;
return cljs.core.deref(ret);
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4(port,val,fn1,true);
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__5733__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(temp__5733__auto__)){
var retb = temp__5733__auto__;
var ret = cljs.core.deref(retb);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
}));
}

return ret;
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4);

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_(port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__4613__auto___32925 = n;
var x_32926 = (0);
while(true){
if((x_32926 < n__4613__auto___32925)){
(a[x_32926] = x_32926);

var G__32927 = (x_32926 + (1));
x_32926 = G__32927;
continue;
} else {
}
break;
}

goog.array.shuffle(a);

return a;
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true);
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async30281 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async30281 = (function (flag,meta30282){
this.flag = flag;
this.meta30282 = meta30282;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async30281.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_30283,meta30282__$1){
var self__ = this;
var _30283__$1 = this;
return (new cljs.core.async.t_cljs$core$async30281(self__.flag,meta30282__$1));
}));

(cljs.core.async.t_cljs$core$async30281.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_30283){
var self__ = this;
var _30283__$1 = this;
return self__.meta30282;
}));

(cljs.core.async.t_cljs$core$async30281.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async30281.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.flag);
}));

(cljs.core.async.t_cljs$core$async30281.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async30281.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.flag,null);

return true;
}));

(cljs.core.async.t_cljs$core$async30281.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta30282","meta30282",-1976723537,null)], null);
}));

(cljs.core.async.t_cljs$core$async30281.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async30281.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async30281");

(cljs.core.async.t_cljs$core$async30281.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async30281");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async30281.
 */
cljs.core.async.__GT_t_cljs$core$async30281 = (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async30281(flag__$1,meta30282){
return (new cljs.core.async.t_cljs$core$async30281(flag__$1,meta30282));
});

}

return (new cljs.core.async.t_cljs$core$async30281(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async30299 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async30299 = (function (flag,cb,meta30300){
this.flag = flag;
this.cb = cb;
this.meta30300 = meta30300;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async30299.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_30301,meta30300__$1){
var self__ = this;
var _30301__$1 = this;
return (new cljs.core.async.t_cljs$core$async30299(self__.flag,self__.cb,meta30300__$1));
}));

(cljs.core.async.t_cljs$core$async30299.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_30301){
var self__ = this;
var _30301__$1 = this;
return self__.meta30300;
}));

(cljs.core.async.t_cljs$core$async30299.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async30299.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
}));

(cljs.core.async.t_cljs$core$async30299.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async30299.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
}));

(cljs.core.async.t_cljs$core$async30299.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta30300","meta30300",1990555963,null)], null);
}));

(cljs.core.async.t_cljs$core$async30299.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async30299.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async30299");

(cljs.core.async.t_cljs$core$async30299.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async30299");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async30299.
 */
cljs.core.async.__GT_t_cljs$core$async30299 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async30299(flag__$1,cb__$1,meta30300){
return (new cljs.core.async.t_cljs$core$async30299(flag__$1,cb__$1,meta30300));
});

}

return (new cljs.core.async.t_cljs$core$async30299(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
if((cljs.core.count(ports) > (0))){
} else {
throw (new Error(["Assert failed: ","alts must have at least one channel operation","\n","(pos? (count ports))"].join('')));
}

var flag = cljs.core.async.alt_flag();
var n = cljs.core.count(ports);
var idxs = cljs.core.async.random_array(n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ports,idx);
var wport = ((cljs.core.vector_QMARK_(port))?(port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((0)) : port.call(null,(0))):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = (port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((1)) : port.call(null,(1)));
return cljs.core.async.impl.protocols.put_BANG_(wport,val,cljs.core.async.alt_handler(flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__30316_SHARP_){
var G__30324 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__30316_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__30324) : fret.call(null,G__30324));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__30318_SHARP_){
var G__30325 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__30318_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__30325) : fret.call(null,G__30325));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref(vbox),(function (){var or__4126__auto__ = wport;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return port;
}
})()], null));
} else {
var G__32943 = (i + (1));
i = G__32943;
continue;
}
} else {
return null;
}
break;
}
})();
var or__4126__auto__ = ret;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
if(cljs.core.contains_QMARK_(opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__5735__auto__ = (function (){var and__4115__auto__ = flag.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1(null);
if(cljs.core.truth_(and__4115__auto__)){
return flag.cljs$core$async$impl$protocols$Handler$commit$arity$1(null);
} else {
return and__4115__auto__;
}
})();
if(cljs.core.truth_(temp__5735__auto__)){
var got = temp__5735__auto__;
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__4742__auto__ = [];
var len__4736__auto___32947 = arguments.length;
var i__4737__auto___32948 = (0);
while(true){
if((i__4737__auto___32948 < len__4736__auto___32947)){
args__4742__auto__.push((arguments[i__4737__auto___32948]));

var G__32949 = (i__4737__auto___32948 + (1));
i__4737__auto___32948 = G__32949;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__30350){
var map__30352 = p__30350;
var map__30352__$1 = (((((!((map__30352 == null))))?(((((map__30352.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30352.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__30352):map__30352);
var opts = map__30352__$1;
throw (new Error("alts! used not in (go ...) block"));
}));

(cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq30338){
var G__30339 = cljs.core.first(seq30338);
var seq30338__$1 = cljs.core.next(seq30338);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__30339,seq30338__$1);
}));

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var G__30367 = arguments.length;
switch (G__30367) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3(from,to,true);
}));

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__30119__auto___32962 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30120__auto__ = (function (){var switch__29693__auto__ = (function (state_30417){
var state_val_30418 = (state_30417[(1)]);
if((state_val_30418 === (7))){
var inst_30410 = (state_30417[(2)]);
var state_30417__$1 = state_30417;
var statearr_30432_32965 = state_30417__$1;
(statearr_30432_32965[(2)] = inst_30410);

(statearr_30432_32965[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30418 === (1))){
var state_30417__$1 = state_30417;
var statearr_30438_32967 = state_30417__$1;
(statearr_30438_32967[(2)] = null);

(statearr_30438_32967[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30418 === (4))){
var inst_30389 = (state_30417[(7)]);
var inst_30389__$1 = (state_30417[(2)]);
var inst_30391 = (inst_30389__$1 == null);
var state_30417__$1 = (function (){var statearr_30441 = state_30417;
(statearr_30441[(7)] = inst_30389__$1);

return statearr_30441;
})();
if(cljs.core.truth_(inst_30391)){
var statearr_30442_32968 = state_30417__$1;
(statearr_30442_32968[(1)] = (5));

} else {
var statearr_30443_32969 = state_30417__$1;
(statearr_30443_32969[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30418 === (13))){
var state_30417__$1 = state_30417;
var statearr_30445_32970 = state_30417__$1;
(statearr_30445_32970[(2)] = null);

(statearr_30445_32970[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30418 === (6))){
var inst_30389 = (state_30417[(7)]);
var state_30417__$1 = state_30417;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_30417__$1,(11),to,inst_30389);
} else {
if((state_val_30418 === (3))){
var inst_30414 = (state_30417[(2)]);
var state_30417__$1 = state_30417;
return cljs.core.async.impl.ioc_helpers.return_chan(state_30417__$1,inst_30414);
} else {
if((state_val_30418 === (12))){
var state_30417__$1 = state_30417;
var statearr_30450_32974 = state_30417__$1;
(statearr_30450_32974[(2)] = null);

(statearr_30450_32974[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30418 === (2))){
var state_30417__$1 = state_30417;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_30417__$1,(4),from);
} else {
if((state_val_30418 === (11))){
var inst_30401 = (state_30417[(2)]);
var state_30417__$1 = state_30417;
if(cljs.core.truth_(inst_30401)){
var statearr_30454_32976 = state_30417__$1;
(statearr_30454_32976[(1)] = (12));

} else {
var statearr_30455_32977 = state_30417__$1;
(statearr_30455_32977[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30418 === (9))){
var state_30417__$1 = state_30417;
var statearr_30456_32978 = state_30417__$1;
(statearr_30456_32978[(2)] = null);

(statearr_30456_32978[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30418 === (5))){
var state_30417__$1 = state_30417;
if(cljs.core.truth_(close_QMARK_)){
var statearr_30458_32979 = state_30417__$1;
(statearr_30458_32979[(1)] = (8));

} else {
var statearr_30459_32980 = state_30417__$1;
(statearr_30459_32980[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30418 === (14))){
var inst_30408 = (state_30417[(2)]);
var state_30417__$1 = state_30417;
var statearr_30462_32981 = state_30417__$1;
(statearr_30462_32981[(2)] = inst_30408);

(statearr_30462_32981[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30418 === (10))){
var inst_30397 = (state_30417[(2)]);
var state_30417__$1 = state_30417;
var statearr_30464_32983 = state_30417__$1;
(statearr_30464_32983[(2)] = inst_30397);

(statearr_30464_32983[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30418 === (8))){
var inst_30394 = cljs.core.async.close_BANG_(to);
var state_30417__$1 = state_30417;
var statearr_30467_32984 = state_30417__$1;
(statearr_30467_32984[(2)] = inst_30394);

(statearr_30467_32984[(1)] = (10));


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
});
return (function() {
var cljs$core$async$state_machine__29694__auto__ = null;
var cljs$core$async$state_machine__29694__auto____0 = (function (){
var statearr_30469 = [null,null,null,null,null,null,null,null];
(statearr_30469[(0)] = cljs$core$async$state_machine__29694__auto__);

(statearr_30469[(1)] = (1));

return statearr_30469;
});
var cljs$core$async$state_machine__29694__auto____1 = (function (state_30417){
while(true){
var ret_value__29695__auto__ = (function (){try{while(true){
var result__29696__auto__ = switch__29693__auto__(state_30417);
if(cljs.core.keyword_identical_QMARK_(result__29696__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29696__auto__;
}
break;
}
}catch (e30470){var ex__29697__auto__ = e30470;
var statearr_30471_32985 = state_30417;
(statearr_30471_32985[(2)] = ex__29697__auto__);


if(cljs.core.seq((state_30417[(4)]))){
var statearr_30472_32986 = state_30417;
(statearr_30472_32986[(1)] = cljs.core.first((state_30417[(4)])));

} else {
throw ex__29697__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29695__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32987 = state_30417;
state_30417 = G__32987;
continue;
} else {
return ret_value__29695__auto__;
}
break;
}
});
cljs$core$async$state_machine__29694__auto__ = function(state_30417){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29694__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29694__auto____1.call(this,state_30417);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29694__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29694__auto____0;
cljs$core$async$state_machine__29694__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29694__auto____1;
return cljs$core$async$state_machine__29694__auto__;
})()
})();
var state__30121__auto__ = (function (){var statearr_30483 = f__30120__auto__();
(statearr_30483[(6)] = c__30119__auto___32962);

return statearr_30483;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30121__auto__);
}));


return to;
}));

(cljs.core.async.pipe.cljs$lang$maxFixedArity = 3);

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var results = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var process = (function (p__30491){
var vec__30492 = p__30491;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30492,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30492,(1),null);
var job = vec__30492;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__30119__auto___32991 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30120__auto__ = (function (){var switch__29693__auto__ = (function (state_30503){
var state_val_30504 = (state_30503[(1)]);
if((state_val_30504 === (1))){
var state_30503__$1 = state_30503;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_30503__$1,(2),res,v);
} else {
if((state_val_30504 === (2))){
var inst_30500 = (state_30503[(2)]);
var inst_30501 = cljs.core.async.close_BANG_(res);
var state_30503__$1 = (function (){var statearr_30515 = state_30503;
(statearr_30515[(7)] = inst_30500);

return statearr_30515;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_30503__$1,inst_30501);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__29694__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__29694__auto____0 = (function (){
var statearr_30516 = [null,null,null,null,null,null,null,null];
(statearr_30516[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__29694__auto__);

(statearr_30516[(1)] = (1));

return statearr_30516;
});
var cljs$core$async$pipeline_STAR__$_state_machine__29694__auto____1 = (function (state_30503){
while(true){
var ret_value__29695__auto__ = (function (){try{while(true){
var result__29696__auto__ = switch__29693__auto__(state_30503);
if(cljs.core.keyword_identical_QMARK_(result__29696__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29696__auto__;
}
break;
}
}catch (e30519){var ex__29697__auto__ = e30519;
var statearr_30520_32992 = state_30503;
(statearr_30520_32992[(2)] = ex__29697__auto__);


if(cljs.core.seq((state_30503[(4)]))){
var statearr_30521_32993 = state_30503;
(statearr_30521_32993[(1)] = cljs.core.first((state_30503[(4)])));

} else {
throw ex__29697__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29695__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32994 = state_30503;
state_30503 = G__32994;
continue;
} else {
return ret_value__29695__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__29694__auto__ = function(state_30503){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__29694__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__29694__auto____1.call(this,state_30503);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__29694__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__29694__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__29694__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__29694__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__29694__auto__;
})()
})();
var state__30121__auto__ = (function (){var statearr_30523 = f__30120__auto__();
(statearr_30523[(6)] = c__30119__auto___32991);

return statearr_30523;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30121__auto__);
}));


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var async = (function (p__30525){
var vec__30526 = p__30525;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30526,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30526,(1),null);
var job = vec__30526;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
(xf.cljs$core$IFn$_invoke$arity$2 ? xf.cljs$core$IFn$_invoke$arity$2(v,res) : xf.call(null,v,res));

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var n__4613__auto___32996 = n;
var __32997 = (0);
while(true){
if((__32997 < n__4613__auto___32996)){
var G__30531_32998 = type;
var G__30531_32999__$1 = (((G__30531_32998 instanceof cljs.core.Keyword))?G__30531_32998.fqn:null);
switch (G__30531_32999__$1) {
case "compute":
var c__30119__auto___33001 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__32997,c__30119__auto___33001,G__30531_32998,G__30531_32999__$1,n__4613__auto___32996,jobs,results,process,async){
return (function (){
var f__30120__auto__ = (function (){var switch__29693__auto__ = ((function (__32997,c__30119__auto___33001,G__30531_32998,G__30531_32999__$1,n__4613__auto___32996,jobs,results,process,async){
return (function (state_30554){
var state_val_30555 = (state_30554[(1)]);
if((state_val_30555 === (1))){
var state_30554__$1 = state_30554;
var statearr_30562_33002 = state_30554__$1;
(statearr_30562_33002[(2)] = null);

(statearr_30562_33002[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30555 === (2))){
var state_30554__$1 = state_30554;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_30554__$1,(4),jobs);
} else {
if((state_val_30555 === (3))){
var inst_30552 = (state_30554[(2)]);
var state_30554__$1 = state_30554;
return cljs.core.async.impl.ioc_helpers.return_chan(state_30554__$1,inst_30552);
} else {
if((state_val_30555 === (4))){
var inst_30544 = (state_30554[(2)]);
var inst_30545 = process(inst_30544);
var state_30554__$1 = state_30554;
if(cljs.core.truth_(inst_30545)){
var statearr_30563_33004 = state_30554__$1;
(statearr_30563_33004[(1)] = (5));

} else {
var statearr_30564_33005 = state_30554__$1;
(statearr_30564_33005[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30555 === (5))){
var state_30554__$1 = state_30554;
var statearr_30567_33006 = state_30554__$1;
(statearr_30567_33006[(2)] = null);

(statearr_30567_33006[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30555 === (6))){
var state_30554__$1 = state_30554;
var statearr_30569_33007 = state_30554__$1;
(statearr_30569_33007[(2)] = null);

(statearr_30569_33007[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30555 === (7))){
var inst_30550 = (state_30554[(2)]);
var state_30554__$1 = state_30554;
var statearr_30571_33008 = state_30554__$1;
(statearr_30571_33008[(2)] = inst_30550);

(statearr_30571_33008[(1)] = (3));


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
});})(__32997,c__30119__auto___33001,G__30531_32998,G__30531_32999__$1,n__4613__auto___32996,jobs,results,process,async))
;
return ((function (__32997,switch__29693__auto__,c__30119__auto___33001,G__30531_32998,G__30531_32999__$1,n__4613__auto___32996,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__29694__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__29694__auto____0 = (function (){
var statearr_30572 = [null,null,null,null,null,null,null];
(statearr_30572[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__29694__auto__);

(statearr_30572[(1)] = (1));

return statearr_30572;
});
var cljs$core$async$pipeline_STAR__$_state_machine__29694__auto____1 = (function (state_30554){
while(true){
var ret_value__29695__auto__ = (function (){try{while(true){
var result__29696__auto__ = switch__29693__auto__(state_30554);
if(cljs.core.keyword_identical_QMARK_(result__29696__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29696__auto__;
}
break;
}
}catch (e30573){var ex__29697__auto__ = e30573;
var statearr_30574_33011 = state_30554;
(statearr_30574_33011[(2)] = ex__29697__auto__);


if(cljs.core.seq((state_30554[(4)]))){
var statearr_30575_33012 = state_30554;
(statearr_30575_33012[(1)] = cljs.core.first((state_30554[(4)])));

} else {
throw ex__29697__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29695__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33013 = state_30554;
state_30554 = G__33013;
continue;
} else {
return ret_value__29695__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__29694__auto__ = function(state_30554){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__29694__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__29694__auto____1.call(this,state_30554);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__29694__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__29694__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__29694__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__29694__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__29694__auto__;
})()
;})(__32997,switch__29693__auto__,c__30119__auto___33001,G__30531_32998,G__30531_32999__$1,n__4613__auto___32996,jobs,results,process,async))
})();
var state__30121__auto__ = (function (){var statearr_30576 = f__30120__auto__();
(statearr_30576[(6)] = c__30119__auto___33001);

return statearr_30576;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30121__auto__);
});})(__32997,c__30119__auto___33001,G__30531_32998,G__30531_32999__$1,n__4613__auto___32996,jobs,results,process,async))
);


break;
case "async":
var c__30119__auto___33015 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__32997,c__30119__auto___33015,G__30531_32998,G__30531_32999__$1,n__4613__auto___32996,jobs,results,process,async){
return (function (){
var f__30120__auto__ = (function (){var switch__29693__auto__ = ((function (__32997,c__30119__auto___33015,G__30531_32998,G__30531_32999__$1,n__4613__auto___32996,jobs,results,process,async){
return (function (state_30599){
var state_val_30600 = (state_30599[(1)]);
if((state_val_30600 === (1))){
var state_30599__$1 = state_30599;
var statearr_30605_33017 = state_30599__$1;
(statearr_30605_33017[(2)] = null);

(statearr_30605_33017[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30600 === (2))){
var state_30599__$1 = state_30599;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_30599__$1,(4),jobs);
} else {
if((state_val_30600 === (3))){
var inst_30597 = (state_30599[(2)]);
var state_30599__$1 = state_30599;
return cljs.core.async.impl.ioc_helpers.return_chan(state_30599__$1,inst_30597);
} else {
if((state_val_30600 === (4))){
var inst_30585 = (state_30599[(2)]);
var inst_30586 = async(inst_30585);
var state_30599__$1 = state_30599;
if(cljs.core.truth_(inst_30586)){
var statearr_30606_33021 = state_30599__$1;
(statearr_30606_33021[(1)] = (5));

} else {
var statearr_30608_33022 = state_30599__$1;
(statearr_30608_33022[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30600 === (5))){
var state_30599__$1 = state_30599;
var statearr_30612_33023 = state_30599__$1;
(statearr_30612_33023[(2)] = null);

(statearr_30612_33023[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30600 === (6))){
var state_30599__$1 = state_30599;
var statearr_30615_33024 = state_30599__$1;
(statearr_30615_33024[(2)] = null);

(statearr_30615_33024[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30600 === (7))){
var inst_30595 = (state_30599[(2)]);
var state_30599__$1 = state_30599;
var statearr_30620_33025 = state_30599__$1;
(statearr_30620_33025[(2)] = inst_30595);

(statearr_30620_33025[(1)] = (3));


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
});})(__32997,c__30119__auto___33015,G__30531_32998,G__30531_32999__$1,n__4613__auto___32996,jobs,results,process,async))
;
return ((function (__32997,switch__29693__auto__,c__30119__auto___33015,G__30531_32998,G__30531_32999__$1,n__4613__auto___32996,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__29694__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__29694__auto____0 = (function (){
var statearr_30627 = [null,null,null,null,null,null,null];
(statearr_30627[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__29694__auto__);

(statearr_30627[(1)] = (1));

return statearr_30627;
});
var cljs$core$async$pipeline_STAR__$_state_machine__29694__auto____1 = (function (state_30599){
while(true){
var ret_value__29695__auto__ = (function (){try{while(true){
var result__29696__auto__ = switch__29693__auto__(state_30599);
if(cljs.core.keyword_identical_QMARK_(result__29696__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29696__auto__;
}
break;
}
}catch (e30634){var ex__29697__auto__ = e30634;
var statearr_30635_33028 = state_30599;
(statearr_30635_33028[(2)] = ex__29697__auto__);


if(cljs.core.seq((state_30599[(4)]))){
var statearr_30636_33029 = state_30599;
(statearr_30636_33029[(1)] = cljs.core.first((state_30599[(4)])));

} else {
throw ex__29697__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29695__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33031 = state_30599;
state_30599 = G__33031;
continue;
} else {
return ret_value__29695__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__29694__auto__ = function(state_30599){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__29694__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__29694__auto____1.call(this,state_30599);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__29694__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__29694__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__29694__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__29694__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__29694__auto__;
})()
;})(__32997,switch__29693__auto__,c__30119__auto___33015,G__30531_32998,G__30531_32999__$1,n__4613__auto___32996,jobs,results,process,async))
})();
var state__30121__auto__ = (function (){var statearr_30641 = f__30120__auto__();
(statearr_30641[(6)] = c__30119__auto___33015);

return statearr_30641;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30121__auto__);
});})(__32997,c__30119__auto___33015,G__30531_32998,G__30531_32999__$1,n__4613__auto___32996,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__30531_32999__$1)].join('')));

}

var G__33032 = (__32997 + (1));
__32997 = G__33032;
continue;
} else {
}
break;
}

var c__30119__auto___33033 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30120__auto__ = (function (){var switch__29693__auto__ = (function (state_30676){
var state_val_30677 = (state_30676[(1)]);
if((state_val_30677 === (7))){
var inst_30669 = (state_30676[(2)]);
var state_30676__$1 = state_30676;
var statearr_30682_33035 = state_30676__$1;
(statearr_30682_33035[(2)] = inst_30669);

(statearr_30682_33035[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30677 === (1))){
var state_30676__$1 = state_30676;
var statearr_30683_33037 = state_30676__$1;
(statearr_30683_33037[(2)] = null);

(statearr_30683_33037[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30677 === (4))){
var inst_30650 = (state_30676[(7)]);
var inst_30650__$1 = (state_30676[(2)]);
var inst_30654 = (inst_30650__$1 == null);
var state_30676__$1 = (function (){var statearr_30689 = state_30676;
(statearr_30689[(7)] = inst_30650__$1);

return statearr_30689;
})();
if(cljs.core.truth_(inst_30654)){
var statearr_30691_33039 = state_30676__$1;
(statearr_30691_33039[(1)] = (5));

} else {
var statearr_30692_33040 = state_30676__$1;
(statearr_30692_33040[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30677 === (6))){
var inst_30659 = (state_30676[(8)]);
var inst_30650 = (state_30676[(7)]);
var inst_30659__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_30660 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_30661 = [inst_30650,inst_30659__$1];
var inst_30662 = (new cljs.core.PersistentVector(null,2,(5),inst_30660,inst_30661,null));
var state_30676__$1 = (function (){var statearr_30697 = state_30676;
(statearr_30697[(8)] = inst_30659__$1);

return statearr_30697;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_30676__$1,(8),jobs,inst_30662);
} else {
if((state_val_30677 === (3))){
var inst_30671 = (state_30676[(2)]);
var state_30676__$1 = state_30676;
return cljs.core.async.impl.ioc_helpers.return_chan(state_30676__$1,inst_30671);
} else {
if((state_val_30677 === (2))){
var state_30676__$1 = state_30676;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_30676__$1,(4),from);
} else {
if((state_val_30677 === (9))){
var inst_30666 = (state_30676[(2)]);
var state_30676__$1 = (function (){var statearr_30699 = state_30676;
(statearr_30699[(9)] = inst_30666);

return statearr_30699;
})();
var statearr_30700_33041 = state_30676__$1;
(statearr_30700_33041[(2)] = null);

(statearr_30700_33041[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30677 === (5))){
var inst_30657 = cljs.core.async.close_BANG_(jobs);
var state_30676__$1 = state_30676;
var statearr_30701_33042 = state_30676__$1;
(statearr_30701_33042[(2)] = inst_30657);

(statearr_30701_33042[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30677 === (8))){
var inst_30659 = (state_30676[(8)]);
var inst_30664 = (state_30676[(2)]);
var state_30676__$1 = (function (){var statearr_30707 = state_30676;
(statearr_30707[(10)] = inst_30664);

return statearr_30707;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_30676__$1,(9),results,inst_30659);
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
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__29694__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__29694__auto____0 = (function (){
var statearr_30710 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_30710[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__29694__auto__);

(statearr_30710[(1)] = (1));

return statearr_30710;
});
var cljs$core$async$pipeline_STAR__$_state_machine__29694__auto____1 = (function (state_30676){
while(true){
var ret_value__29695__auto__ = (function (){try{while(true){
var result__29696__auto__ = switch__29693__auto__(state_30676);
if(cljs.core.keyword_identical_QMARK_(result__29696__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29696__auto__;
}
break;
}
}catch (e30711){var ex__29697__auto__ = e30711;
var statearr_30712_33069 = state_30676;
(statearr_30712_33069[(2)] = ex__29697__auto__);


if(cljs.core.seq((state_30676[(4)]))){
var statearr_30713_33070 = state_30676;
(statearr_30713_33070[(1)] = cljs.core.first((state_30676[(4)])));

} else {
throw ex__29697__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29695__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33071 = state_30676;
state_30676 = G__33071;
continue;
} else {
return ret_value__29695__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__29694__auto__ = function(state_30676){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__29694__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__29694__auto____1.call(this,state_30676);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__29694__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__29694__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__29694__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__29694__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__29694__auto__;
})()
})();
var state__30121__auto__ = (function (){var statearr_30714 = f__30120__auto__();
(statearr_30714[(6)] = c__30119__auto___33033);

return statearr_30714;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30121__auto__);
}));


var c__30119__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30120__auto__ = (function (){var switch__29693__auto__ = (function (state_30756){
var state_val_30757 = (state_30756[(1)]);
if((state_val_30757 === (7))){
var inst_30748 = (state_30756[(2)]);
var state_30756__$1 = state_30756;
var statearr_30765_33076 = state_30756__$1;
(statearr_30765_33076[(2)] = inst_30748);

(statearr_30765_33076[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30757 === (20))){
var state_30756__$1 = state_30756;
var statearr_30766_33077 = state_30756__$1;
(statearr_30766_33077[(2)] = null);

(statearr_30766_33077[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30757 === (1))){
var state_30756__$1 = state_30756;
var statearr_30767_33078 = state_30756__$1;
(statearr_30767_33078[(2)] = null);

(statearr_30767_33078[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30757 === (4))){
var inst_30717 = (state_30756[(7)]);
var inst_30717__$1 = (state_30756[(2)]);
var inst_30718 = (inst_30717__$1 == null);
var state_30756__$1 = (function (){var statearr_30768 = state_30756;
(statearr_30768[(7)] = inst_30717__$1);

return statearr_30768;
})();
if(cljs.core.truth_(inst_30718)){
var statearr_30769_33079 = state_30756__$1;
(statearr_30769_33079[(1)] = (5));

} else {
var statearr_30772_33080 = state_30756__$1;
(statearr_30772_33080[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30757 === (15))){
var inst_30730 = (state_30756[(8)]);
var state_30756__$1 = state_30756;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_30756__$1,(18),to,inst_30730);
} else {
if((state_val_30757 === (21))){
var inst_30743 = (state_30756[(2)]);
var state_30756__$1 = state_30756;
var statearr_30775_33081 = state_30756__$1;
(statearr_30775_33081[(2)] = inst_30743);

(statearr_30775_33081[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30757 === (13))){
var inst_30745 = (state_30756[(2)]);
var state_30756__$1 = (function (){var statearr_30776 = state_30756;
(statearr_30776[(9)] = inst_30745);

return statearr_30776;
})();
var statearr_30777_33082 = state_30756__$1;
(statearr_30777_33082[(2)] = null);

(statearr_30777_33082[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30757 === (6))){
var inst_30717 = (state_30756[(7)]);
var state_30756__$1 = state_30756;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_30756__$1,(11),inst_30717);
} else {
if((state_val_30757 === (17))){
var inst_30738 = (state_30756[(2)]);
var state_30756__$1 = state_30756;
if(cljs.core.truth_(inst_30738)){
var statearr_30783_33083 = state_30756__$1;
(statearr_30783_33083[(1)] = (19));

} else {
var statearr_30784_33084 = state_30756__$1;
(statearr_30784_33084[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30757 === (3))){
var inst_30750 = (state_30756[(2)]);
var state_30756__$1 = state_30756;
return cljs.core.async.impl.ioc_helpers.return_chan(state_30756__$1,inst_30750);
} else {
if((state_val_30757 === (12))){
var inst_30727 = (state_30756[(10)]);
var state_30756__$1 = state_30756;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_30756__$1,(14),inst_30727);
} else {
if((state_val_30757 === (2))){
var state_30756__$1 = state_30756;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_30756__$1,(4),results);
} else {
if((state_val_30757 === (19))){
var state_30756__$1 = state_30756;
var statearr_30793_33086 = state_30756__$1;
(statearr_30793_33086[(2)] = null);

(statearr_30793_33086[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30757 === (11))){
var inst_30727 = (state_30756[(2)]);
var state_30756__$1 = (function (){var statearr_30794 = state_30756;
(statearr_30794[(10)] = inst_30727);

return statearr_30794;
})();
var statearr_30795_33088 = state_30756__$1;
(statearr_30795_33088[(2)] = null);

(statearr_30795_33088[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30757 === (9))){
var state_30756__$1 = state_30756;
var statearr_30796_33089 = state_30756__$1;
(statearr_30796_33089[(2)] = null);

(statearr_30796_33089[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30757 === (5))){
var state_30756__$1 = state_30756;
if(cljs.core.truth_(close_QMARK_)){
var statearr_30804_33090 = state_30756__$1;
(statearr_30804_33090[(1)] = (8));

} else {
var statearr_30805_33091 = state_30756__$1;
(statearr_30805_33091[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30757 === (14))){
var inst_30730 = (state_30756[(8)]);
var inst_30730__$1 = (state_30756[(2)]);
var inst_30731 = (inst_30730__$1 == null);
var inst_30732 = cljs.core.not(inst_30731);
var state_30756__$1 = (function (){var statearr_30808 = state_30756;
(statearr_30808[(8)] = inst_30730__$1);

return statearr_30808;
})();
if(inst_30732){
var statearr_30809_33096 = state_30756__$1;
(statearr_30809_33096[(1)] = (15));

} else {
var statearr_30810_33097 = state_30756__$1;
(statearr_30810_33097[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30757 === (16))){
var state_30756__$1 = state_30756;
var statearr_30811_33098 = state_30756__$1;
(statearr_30811_33098[(2)] = false);

(statearr_30811_33098[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30757 === (10))){
var inst_30724 = (state_30756[(2)]);
var state_30756__$1 = state_30756;
var statearr_30814_33099 = state_30756__$1;
(statearr_30814_33099[(2)] = inst_30724);

(statearr_30814_33099[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30757 === (18))){
var inst_30735 = (state_30756[(2)]);
var state_30756__$1 = state_30756;
var statearr_30819_33101 = state_30756__$1;
(statearr_30819_33101[(2)] = inst_30735);

(statearr_30819_33101[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30757 === (8))){
var inst_30721 = cljs.core.async.close_BANG_(to);
var state_30756__$1 = state_30756;
var statearr_30822_33106 = state_30756__$1;
(statearr_30822_33106[(2)] = inst_30721);

(statearr_30822_33106[(1)] = (10));


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
}
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__29694__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__29694__auto____0 = (function (){
var statearr_30826 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_30826[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__29694__auto__);

(statearr_30826[(1)] = (1));

return statearr_30826;
});
var cljs$core$async$pipeline_STAR__$_state_machine__29694__auto____1 = (function (state_30756){
while(true){
var ret_value__29695__auto__ = (function (){try{while(true){
var result__29696__auto__ = switch__29693__auto__(state_30756);
if(cljs.core.keyword_identical_QMARK_(result__29696__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29696__auto__;
}
break;
}
}catch (e30827){var ex__29697__auto__ = e30827;
var statearr_30828_33109 = state_30756;
(statearr_30828_33109[(2)] = ex__29697__auto__);


if(cljs.core.seq((state_30756[(4)]))){
var statearr_30829_33111 = state_30756;
(statearr_30829_33111[(1)] = cljs.core.first((state_30756[(4)])));

} else {
throw ex__29697__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29695__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33112 = state_30756;
state_30756 = G__33112;
continue;
} else {
return ret_value__29695__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__29694__auto__ = function(state_30756){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__29694__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__29694__auto____1.call(this,state_30756);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__29694__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__29694__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__29694__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__29694__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__29694__auto__;
})()
})();
var state__30121__auto__ = (function (){var statearr_30834 = f__30120__auto__();
(statearr_30834[(6)] = c__30119__auto__);

return statearr_30834;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30121__auto__);
}));

return c__30119__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). af must close!
 *   the channel before returning.  The presumption is that af will
 *   return immediately, having launched some asynchronous operation
 *   whose completion/callback will manipulate the result channel. Outputs
 *   will be returned in order relative to  the inputs. By default, the to
 *   channel will be closed when the from channel closes, but can be
 *   determined by the close?  parameter. Will stop consuming the from
 *   channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var G__30836 = arguments.length;
switch (G__30836) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5(n,to,af,from,true);
}));

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_(n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
}));

(cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5);

/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var G__30866 = arguments.length;
switch (G__30866) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5(n,to,xf,from,true);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6(n,to,xf,from,close_QMARK_,null);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
}));

(cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6);

/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var G__30878 = arguments.length;
switch (G__30878) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4(p,ch,null,null);
}));

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(t_buf_or_n);
var fc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(f_buf_or_n);
var c__30119__auto___33118 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30120__auto__ = (function (){var switch__29693__auto__ = (function (state_30914){
var state_val_30915 = (state_30914[(1)]);
if((state_val_30915 === (7))){
var inst_30910 = (state_30914[(2)]);
var state_30914__$1 = state_30914;
var statearr_30918_33119 = state_30914__$1;
(statearr_30918_33119[(2)] = inst_30910);

(statearr_30918_33119[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30915 === (1))){
var state_30914__$1 = state_30914;
var statearr_30920_33120 = state_30914__$1;
(statearr_30920_33120[(2)] = null);

(statearr_30920_33120[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30915 === (4))){
var inst_30886 = (state_30914[(7)]);
var inst_30886__$1 = (state_30914[(2)]);
var inst_30888 = (inst_30886__$1 == null);
var state_30914__$1 = (function (){var statearr_30923 = state_30914;
(statearr_30923[(7)] = inst_30886__$1);

return statearr_30923;
})();
if(cljs.core.truth_(inst_30888)){
var statearr_30925_33122 = state_30914__$1;
(statearr_30925_33122[(1)] = (5));

} else {
var statearr_30926_33123 = state_30914__$1;
(statearr_30926_33123[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30915 === (13))){
var state_30914__$1 = state_30914;
var statearr_30928_33124 = state_30914__$1;
(statearr_30928_33124[(2)] = null);

(statearr_30928_33124[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30915 === (6))){
var inst_30886 = (state_30914[(7)]);
var inst_30895 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_30886) : p.call(null,inst_30886));
var state_30914__$1 = state_30914;
if(cljs.core.truth_(inst_30895)){
var statearr_30929_33125 = state_30914__$1;
(statearr_30929_33125[(1)] = (9));

} else {
var statearr_30931_33126 = state_30914__$1;
(statearr_30931_33126[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30915 === (3))){
var inst_30912 = (state_30914[(2)]);
var state_30914__$1 = state_30914;
return cljs.core.async.impl.ioc_helpers.return_chan(state_30914__$1,inst_30912);
} else {
if((state_val_30915 === (12))){
var state_30914__$1 = state_30914;
var statearr_30941_33127 = state_30914__$1;
(statearr_30941_33127[(2)] = null);

(statearr_30941_33127[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30915 === (2))){
var state_30914__$1 = state_30914;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_30914__$1,(4),ch);
} else {
if((state_val_30915 === (11))){
var inst_30886 = (state_30914[(7)]);
var inst_30900 = (state_30914[(2)]);
var state_30914__$1 = state_30914;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_30914__$1,(8),inst_30900,inst_30886);
} else {
if((state_val_30915 === (9))){
var state_30914__$1 = state_30914;
var statearr_30962_33128 = state_30914__$1;
(statearr_30962_33128[(2)] = tc);

(statearr_30962_33128[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30915 === (5))){
var inst_30890 = cljs.core.async.close_BANG_(tc);
var inst_30893 = cljs.core.async.close_BANG_(fc);
var state_30914__$1 = (function (){var statearr_30963 = state_30914;
(statearr_30963[(8)] = inst_30890);

return statearr_30963;
})();
var statearr_30964_33130 = state_30914__$1;
(statearr_30964_33130[(2)] = inst_30893);

(statearr_30964_33130[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30915 === (14))){
var inst_30907 = (state_30914[(2)]);
var state_30914__$1 = state_30914;
var statearr_30968_33131 = state_30914__$1;
(statearr_30968_33131[(2)] = inst_30907);

(statearr_30968_33131[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30915 === (10))){
var state_30914__$1 = state_30914;
var statearr_30969_33132 = state_30914__$1;
(statearr_30969_33132[(2)] = fc);

(statearr_30969_33132[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30915 === (8))){
var inst_30902 = (state_30914[(2)]);
var state_30914__$1 = state_30914;
if(cljs.core.truth_(inst_30902)){
var statearr_30973_33134 = state_30914__$1;
(statearr_30973_33134[(1)] = (12));

} else {
var statearr_30974_33135 = state_30914__$1;
(statearr_30974_33135[(1)] = (13));

}

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
});
return (function() {
var cljs$core$async$state_machine__29694__auto__ = null;
var cljs$core$async$state_machine__29694__auto____0 = (function (){
var statearr_30984 = [null,null,null,null,null,null,null,null,null];
(statearr_30984[(0)] = cljs$core$async$state_machine__29694__auto__);

(statearr_30984[(1)] = (1));

return statearr_30984;
});
var cljs$core$async$state_machine__29694__auto____1 = (function (state_30914){
while(true){
var ret_value__29695__auto__ = (function (){try{while(true){
var result__29696__auto__ = switch__29693__auto__(state_30914);
if(cljs.core.keyword_identical_QMARK_(result__29696__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29696__auto__;
}
break;
}
}catch (e30990){var ex__29697__auto__ = e30990;
var statearr_30992_33136 = state_30914;
(statearr_30992_33136[(2)] = ex__29697__auto__);


if(cljs.core.seq((state_30914[(4)]))){
var statearr_30998_33138 = state_30914;
(statearr_30998_33138[(1)] = cljs.core.first((state_30914[(4)])));

} else {
throw ex__29697__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29695__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33139 = state_30914;
state_30914 = G__33139;
continue;
} else {
return ret_value__29695__auto__;
}
break;
}
});
cljs$core$async$state_machine__29694__auto__ = function(state_30914){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29694__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29694__auto____1.call(this,state_30914);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29694__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29694__auto____0;
cljs$core$async$state_machine__29694__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29694__auto____1;
return cljs$core$async$state_machine__29694__auto__;
})()
})();
var state__30121__auto__ = (function (){var statearr_31008 = f__30120__auto__();
(statearr_31008[(6)] = c__30119__auto___33118);

return statearr_31008;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30121__auto__);
}));


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
}));

(cljs.core.async.split.cljs$lang$maxFixedArity = 4);

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__30119__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30120__auto__ = (function (){var switch__29693__auto__ = (function (state_31062){
var state_val_31063 = (state_31062[(1)]);
if((state_val_31063 === (7))){
var inst_31054 = (state_31062[(2)]);
var state_31062__$1 = state_31062;
var statearr_31064_33141 = state_31062__$1;
(statearr_31064_33141[(2)] = inst_31054);

(statearr_31064_33141[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31063 === (1))){
var inst_31021 = init;
var inst_31022 = inst_31021;
var state_31062__$1 = (function (){var statearr_31066 = state_31062;
(statearr_31066[(7)] = inst_31022);

return statearr_31066;
})();
var statearr_31067_33142 = state_31062__$1;
(statearr_31067_33142[(2)] = null);

(statearr_31067_33142[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31063 === (4))){
var inst_31029 = (state_31062[(8)]);
var inst_31029__$1 = (state_31062[(2)]);
var inst_31035 = (inst_31029__$1 == null);
var state_31062__$1 = (function (){var statearr_31069 = state_31062;
(statearr_31069[(8)] = inst_31029__$1);

return statearr_31069;
})();
if(cljs.core.truth_(inst_31035)){
var statearr_31071_33143 = state_31062__$1;
(statearr_31071_33143[(1)] = (5));

} else {
var statearr_31072_33144 = state_31062__$1;
(statearr_31072_33144[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31063 === (6))){
var inst_31022 = (state_31062[(7)]);
var inst_31040 = (state_31062[(9)]);
var inst_31029 = (state_31062[(8)]);
var inst_31040__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_31022,inst_31029) : f.call(null,inst_31022,inst_31029));
var inst_31041 = cljs.core.reduced_QMARK_(inst_31040__$1);
var state_31062__$1 = (function (){var statearr_31075 = state_31062;
(statearr_31075[(9)] = inst_31040__$1);

return statearr_31075;
})();
if(inst_31041){
var statearr_31076_33145 = state_31062__$1;
(statearr_31076_33145[(1)] = (8));

} else {
var statearr_31077_33146 = state_31062__$1;
(statearr_31077_33146[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31063 === (3))){
var inst_31056 = (state_31062[(2)]);
var state_31062__$1 = state_31062;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31062__$1,inst_31056);
} else {
if((state_val_31063 === (2))){
var state_31062__$1 = state_31062;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31062__$1,(4),ch);
} else {
if((state_val_31063 === (9))){
var inst_31040 = (state_31062[(9)]);
var inst_31022 = inst_31040;
var state_31062__$1 = (function (){var statearr_31079 = state_31062;
(statearr_31079[(7)] = inst_31022);

return statearr_31079;
})();
var statearr_31080_33148 = state_31062__$1;
(statearr_31080_33148[(2)] = null);

(statearr_31080_33148[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31063 === (5))){
var inst_31022 = (state_31062[(7)]);
var state_31062__$1 = state_31062;
var statearr_31081_33149 = state_31062__$1;
(statearr_31081_33149[(2)] = inst_31022);

(statearr_31081_33149[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31063 === (10))){
var inst_31051 = (state_31062[(2)]);
var state_31062__$1 = state_31062;
var statearr_31082_33155 = state_31062__$1;
(statearr_31082_33155[(2)] = inst_31051);

(statearr_31082_33155[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31063 === (8))){
var inst_31040 = (state_31062[(9)]);
var inst_31047 = cljs.core.deref(inst_31040);
var state_31062__$1 = state_31062;
var statearr_31083_33157 = state_31062__$1;
(statearr_31083_33157[(2)] = inst_31047);

(statearr_31083_33157[(1)] = (10));


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
});
return (function() {
var cljs$core$async$reduce_$_state_machine__29694__auto__ = null;
var cljs$core$async$reduce_$_state_machine__29694__auto____0 = (function (){
var statearr_31084 = [null,null,null,null,null,null,null,null,null,null];
(statearr_31084[(0)] = cljs$core$async$reduce_$_state_machine__29694__auto__);

(statearr_31084[(1)] = (1));

return statearr_31084;
});
var cljs$core$async$reduce_$_state_machine__29694__auto____1 = (function (state_31062){
while(true){
var ret_value__29695__auto__ = (function (){try{while(true){
var result__29696__auto__ = switch__29693__auto__(state_31062);
if(cljs.core.keyword_identical_QMARK_(result__29696__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29696__auto__;
}
break;
}
}catch (e31086){var ex__29697__auto__ = e31086;
var statearr_31087_33165 = state_31062;
(statearr_31087_33165[(2)] = ex__29697__auto__);


if(cljs.core.seq((state_31062[(4)]))){
var statearr_31088_33166 = state_31062;
(statearr_31088_33166[(1)] = cljs.core.first((state_31062[(4)])));

} else {
throw ex__29697__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29695__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33167 = state_31062;
state_31062 = G__33167;
continue;
} else {
return ret_value__29695__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__29694__auto__ = function(state_31062){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__29694__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__29694__auto____1.call(this,state_31062);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__29694__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__29694__auto____0;
cljs$core$async$reduce_$_state_machine__29694__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__29694__auto____1;
return cljs$core$async$reduce_$_state_machine__29694__auto__;
})()
})();
var state__30121__auto__ = (function (){var statearr_31092 = f__30120__auto__();
(statearr_31092[(6)] = c__30119__auto__);

return statearr_31092;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30121__auto__);
}));

return c__30119__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(f) : xform.call(null,f));
var c__30119__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30120__auto__ = (function (){var switch__29693__auto__ = (function (state_31116){
var state_val_31117 = (state_31116[(1)]);
if((state_val_31117 === (1))){
var inst_31105 = cljs.core.async.reduce(f__$1,init,ch);
var state_31116__$1 = state_31116;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31116__$1,(2),inst_31105);
} else {
if((state_val_31117 === (2))){
var inst_31107 = (state_31116[(2)]);
var inst_31112 = (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(inst_31107) : f__$1.call(null,inst_31107));
var state_31116__$1 = state_31116;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31116__$1,inst_31112);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$transduce_$_state_machine__29694__auto__ = null;
var cljs$core$async$transduce_$_state_machine__29694__auto____0 = (function (){
var statearr_31124 = [null,null,null,null,null,null,null];
(statearr_31124[(0)] = cljs$core$async$transduce_$_state_machine__29694__auto__);

(statearr_31124[(1)] = (1));

return statearr_31124;
});
var cljs$core$async$transduce_$_state_machine__29694__auto____1 = (function (state_31116){
while(true){
var ret_value__29695__auto__ = (function (){try{while(true){
var result__29696__auto__ = switch__29693__auto__(state_31116);
if(cljs.core.keyword_identical_QMARK_(result__29696__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29696__auto__;
}
break;
}
}catch (e31126){var ex__29697__auto__ = e31126;
var statearr_31127_33176 = state_31116;
(statearr_31127_33176[(2)] = ex__29697__auto__);


if(cljs.core.seq((state_31116[(4)]))){
var statearr_31128_33177 = state_31116;
(statearr_31128_33177[(1)] = cljs.core.first((state_31116[(4)])));

} else {
throw ex__29697__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29695__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33178 = state_31116;
state_31116 = G__33178;
continue;
} else {
return ret_value__29695__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__29694__auto__ = function(state_31116){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__29694__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__29694__auto____1.call(this,state_31116);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__29694__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__29694__auto____0;
cljs$core$async$transduce_$_state_machine__29694__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__29694__auto____1;
return cljs$core$async$transduce_$_state_machine__29694__auto__;
})()
})();
var state__30121__auto__ = (function (){var statearr_31132 = f__30120__auto__();
(statearr_31132[(6)] = c__30119__auto__);

return statearr_31132;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30121__auto__);
}));

return c__30119__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan_BANG_ = (function cljs$core$async$onto_chan_BANG_(var_args){
var G__31134 = arguments.length;
switch (G__31134) {
case 2:
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
}));

(cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__30119__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30120__auto__ = (function (){var switch__29693__auto__ = (function (state_31164){
var state_val_31165 = (state_31164[(1)]);
if((state_val_31165 === (7))){
var inst_31146 = (state_31164[(2)]);
var state_31164__$1 = state_31164;
var statearr_31169_33185 = state_31164__$1;
(statearr_31169_33185[(2)] = inst_31146);

(statearr_31169_33185[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31165 === (1))){
var inst_31138 = cljs.core.seq(coll);
var inst_31139 = inst_31138;
var state_31164__$1 = (function (){var statearr_31171 = state_31164;
(statearr_31171[(7)] = inst_31139);

return statearr_31171;
})();
var statearr_31172_33186 = state_31164__$1;
(statearr_31172_33186[(2)] = null);

(statearr_31172_33186[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31165 === (4))){
var inst_31139 = (state_31164[(7)]);
var inst_31144 = cljs.core.first(inst_31139);
var state_31164__$1 = state_31164;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31164__$1,(7),ch,inst_31144);
} else {
if((state_val_31165 === (13))){
var inst_31158 = (state_31164[(2)]);
var state_31164__$1 = state_31164;
var statearr_31177_33187 = state_31164__$1;
(statearr_31177_33187[(2)] = inst_31158);

(statearr_31177_33187[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31165 === (6))){
var inst_31149 = (state_31164[(2)]);
var state_31164__$1 = state_31164;
if(cljs.core.truth_(inst_31149)){
var statearr_31180_33188 = state_31164__$1;
(statearr_31180_33188[(1)] = (8));

} else {
var statearr_31181_33189 = state_31164__$1;
(statearr_31181_33189[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31165 === (3))){
var inst_31162 = (state_31164[(2)]);
var state_31164__$1 = state_31164;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31164__$1,inst_31162);
} else {
if((state_val_31165 === (12))){
var state_31164__$1 = state_31164;
var statearr_31186_33190 = state_31164__$1;
(statearr_31186_33190[(2)] = null);

(statearr_31186_33190[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31165 === (2))){
var inst_31139 = (state_31164[(7)]);
var state_31164__$1 = state_31164;
if(cljs.core.truth_(inst_31139)){
var statearr_31187_33191 = state_31164__$1;
(statearr_31187_33191[(1)] = (4));

} else {
var statearr_31188_33192 = state_31164__$1;
(statearr_31188_33192[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31165 === (11))){
var inst_31155 = cljs.core.async.close_BANG_(ch);
var state_31164__$1 = state_31164;
var statearr_31190_33193 = state_31164__$1;
(statearr_31190_33193[(2)] = inst_31155);

(statearr_31190_33193[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31165 === (9))){
var state_31164__$1 = state_31164;
if(cljs.core.truth_(close_QMARK_)){
var statearr_31192_33194 = state_31164__$1;
(statearr_31192_33194[(1)] = (11));

} else {
var statearr_31193_33195 = state_31164__$1;
(statearr_31193_33195[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31165 === (5))){
var inst_31139 = (state_31164[(7)]);
var state_31164__$1 = state_31164;
var statearr_31194_33196 = state_31164__$1;
(statearr_31194_33196[(2)] = inst_31139);

(statearr_31194_33196[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31165 === (10))){
var inst_31160 = (state_31164[(2)]);
var state_31164__$1 = state_31164;
var statearr_31197_33197 = state_31164__$1;
(statearr_31197_33197[(2)] = inst_31160);

(statearr_31197_33197[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31165 === (8))){
var inst_31139 = (state_31164[(7)]);
var inst_31151 = cljs.core.next(inst_31139);
var inst_31139__$1 = inst_31151;
var state_31164__$1 = (function (){var statearr_31199 = state_31164;
(statearr_31199[(7)] = inst_31139__$1);

return statearr_31199;
})();
var statearr_31200_33201 = state_31164__$1;
(statearr_31200_33201[(2)] = null);

(statearr_31200_33201[(1)] = (2));


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
});
return (function() {
var cljs$core$async$state_machine__29694__auto__ = null;
var cljs$core$async$state_machine__29694__auto____0 = (function (){
var statearr_31203 = [null,null,null,null,null,null,null,null];
(statearr_31203[(0)] = cljs$core$async$state_machine__29694__auto__);

(statearr_31203[(1)] = (1));

return statearr_31203;
});
var cljs$core$async$state_machine__29694__auto____1 = (function (state_31164){
while(true){
var ret_value__29695__auto__ = (function (){try{while(true){
var result__29696__auto__ = switch__29693__auto__(state_31164);
if(cljs.core.keyword_identical_QMARK_(result__29696__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29696__auto__;
}
break;
}
}catch (e31204){var ex__29697__auto__ = e31204;
var statearr_31205_33214 = state_31164;
(statearr_31205_33214[(2)] = ex__29697__auto__);


if(cljs.core.seq((state_31164[(4)]))){
var statearr_31206_33219 = state_31164;
(statearr_31206_33219[(1)] = cljs.core.first((state_31164[(4)])));

} else {
throw ex__29697__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29695__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33220 = state_31164;
state_31164 = G__33220;
continue;
} else {
return ret_value__29695__auto__;
}
break;
}
});
cljs$core$async$state_machine__29694__auto__ = function(state_31164){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29694__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29694__auto____1.call(this,state_31164);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29694__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29694__auto____0;
cljs$core$async$state_machine__29694__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29694__auto____1;
return cljs$core$async$state_machine__29694__auto__;
})()
})();
var state__30121__auto__ = (function (){var statearr_31209 = f__30120__auto__();
(statearr_31209[(6)] = c__30119__auto__);

return statearr_31209;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30121__auto__);
}));

return c__30119__auto__;
}));

(cljs.core.async.onto_chan_BANG_.cljs$lang$maxFixedArity = 3);

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan_BANG_ = (function cljs$core$async$to_chan_BANG_(coll){
var ch = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.bounded_count((100),coll));
cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2(ch,coll);

return ch;
});
/**
 * Deprecated - use onto-chan!
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var G__31213 = arguments.length;
switch (G__31213) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
}));

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,close_QMARK_);
}));

(cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - use to-chan!
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
return cljs.core.async.to_chan_BANG_(coll);
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

var cljs$core$async$Mux$muxch_STAR_$dyn_33235 = (function (_){
var x__4428__auto__ = (((_ == null))?null:_);
var m__4429__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4429__auto__.call(null,_));
} else {
var m__4426__auto__ = (cljs.core.async.muxch_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4426__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("Mux.muxch*",_);
}
}
});
cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((((!((_ == null)))) && ((!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
return cljs$core$async$Mux$muxch_STAR_$dyn_33235(_);
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

var cljs$core$async$Mult$tap_STAR_$dyn_33239 = (function (m,ch,close_QMARK_){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__4429__auto__.call(null,m,ch,close_QMARK_));
} else {
var m__4426__auto__ = (cljs.core.async.tap_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__4426__auto__.call(null,m,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Mult.tap*",m);
}
}
});
cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
return cljs$core$async$Mult$tap_STAR_$dyn_33239(m,ch,close_QMARK_);
}
});

var cljs$core$async$Mult$untap_STAR_$dyn_33243 = (function (m,ch){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4429__auto__.call(null,m,ch));
} else {
var m__4426__auto__ = (cljs.core.async.untap_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4426__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mult.untap*",m);
}
}
});
cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mult$untap_STAR_$dyn_33243(m,ch);
}
});

var cljs$core$async$Mult$untap_all_STAR_$dyn_33247 = (function (m){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4429__auto__.call(null,m));
} else {
var m__4426__auto__ = (cljs.core.async.untap_all_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4426__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mult.untap-all*",m);
}
}
});
cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mult$untap_all_STAR_$dyn_33247(m);
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async31226 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async31226 = (function (ch,cs,meta31227){
this.ch = ch;
this.cs = cs;
this.meta31227 = meta31227;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async31226.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31228,meta31227__$1){
var self__ = this;
var _31228__$1 = this;
return (new cljs.core.async.t_cljs$core$async31226(self__.ch,self__.cs,meta31227__$1));
}));

(cljs.core.async.t_cljs$core$async31226.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31228){
var self__ = this;
var _31228__$1 = this;
return self__.meta31227;
}));

(cljs.core.async.t_cljs$core$async31226.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async31226.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async31226.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async31226.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
}));

(cljs.core.async.t_cljs$core$async31226.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
}));

(cljs.core.async.t_cljs$core$async31226.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
}));

(cljs.core.async.t_cljs$core$async31226.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta31227","meta31227",2034213969,null)], null);
}));

(cljs.core.async.t_cljs$core$async31226.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async31226.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async31226");

(cljs.core.async.t_cljs$core$async31226.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async31226");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async31226.
 */
cljs.core.async.__GT_t_cljs$core$async31226 = (function cljs$core$async$mult_$___GT_t_cljs$core$async31226(ch__$1,cs__$1,meta31227){
return (new cljs.core.async.t_cljs$core$async31226(ch__$1,cs__$1,meta31227));
});

}

return (new cljs.core.async.t_cljs$core$async31226(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = (function (_){
if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,true);
} else {
return null;
}
});
var c__30119__auto___33268 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30120__auto__ = (function (){var switch__29693__auto__ = (function (state_31384){
var state_val_31385 = (state_31384[(1)]);
if((state_val_31385 === (7))){
var inst_31380 = (state_31384[(2)]);
var state_31384__$1 = state_31384;
var statearr_31386_33270 = state_31384__$1;
(statearr_31386_33270[(2)] = inst_31380);

(statearr_31386_33270[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31385 === (20))){
var inst_31280 = (state_31384[(7)]);
var inst_31293 = cljs.core.first(inst_31280);
var inst_31294 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_31293,(0),null);
var inst_31295 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_31293,(1),null);
var state_31384__$1 = (function (){var statearr_31387 = state_31384;
(statearr_31387[(8)] = inst_31294);

return statearr_31387;
})();
if(cljs.core.truth_(inst_31295)){
var statearr_31389_33282 = state_31384__$1;
(statearr_31389_33282[(1)] = (22));

} else {
var statearr_31391_33283 = state_31384__$1;
(statearr_31391_33283[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31385 === (27))){
var inst_31246 = (state_31384[(9)]);
var inst_31323 = (state_31384[(10)]);
var inst_31325 = (state_31384[(11)]);
var inst_31331 = (state_31384[(12)]);
var inst_31331__$1 = cljs.core._nth(inst_31323,inst_31325);
var inst_31332 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_31331__$1,inst_31246,done);
var state_31384__$1 = (function (){var statearr_31392 = state_31384;
(statearr_31392[(12)] = inst_31331__$1);

return statearr_31392;
})();
if(cljs.core.truth_(inst_31332)){
var statearr_31393_33286 = state_31384__$1;
(statearr_31393_33286[(1)] = (30));

} else {
var statearr_31394_33287 = state_31384__$1;
(statearr_31394_33287[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31385 === (1))){
var state_31384__$1 = state_31384;
var statearr_31395_33288 = state_31384__$1;
(statearr_31395_33288[(2)] = null);

(statearr_31395_33288[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31385 === (24))){
var inst_31280 = (state_31384[(7)]);
var inst_31300 = (state_31384[(2)]);
var inst_31301 = cljs.core.next(inst_31280);
var inst_31255 = inst_31301;
var inst_31256 = null;
var inst_31257 = (0);
var inst_31258 = (0);
var state_31384__$1 = (function (){var statearr_31396 = state_31384;
(statearr_31396[(13)] = inst_31255);

(statearr_31396[(14)] = inst_31258);

(statearr_31396[(15)] = inst_31256);

(statearr_31396[(16)] = inst_31257);

(statearr_31396[(17)] = inst_31300);

return statearr_31396;
})();
var statearr_31397_33292 = state_31384__$1;
(statearr_31397_33292[(2)] = null);

(statearr_31397_33292[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31385 === (39))){
var state_31384__$1 = state_31384;
var statearr_31403_33296 = state_31384__$1;
(statearr_31403_33296[(2)] = null);

(statearr_31403_33296[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31385 === (4))){
var inst_31246 = (state_31384[(9)]);
var inst_31246__$1 = (state_31384[(2)]);
var inst_31247 = (inst_31246__$1 == null);
var state_31384__$1 = (function (){var statearr_31405 = state_31384;
(statearr_31405[(9)] = inst_31246__$1);

return statearr_31405;
})();
if(cljs.core.truth_(inst_31247)){
var statearr_31406_33299 = state_31384__$1;
(statearr_31406_33299[(1)] = (5));

} else {
var statearr_31407_33301 = state_31384__$1;
(statearr_31407_33301[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31385 === (15))){
var inst_31255 = (state_31384[(13)]);
var inst_31258 = (state_31384[(14)]);
var inst_31256 = (state_31384[(15)]);
var inst_31257 = (state_31384[(16)]);
var inst_31276 = (state_31384[(2)]);
var inst_31277 = (inst_31258 + (1));
var tmp31398 = inst_31255;
var tmp31399 = inst_31256;
var tmp31400 = inst_31257;
var inst_31255__$1 = tmp31398;
var inst_31256__$1 = tmp31399;
var inst_31257__$1 = tmp31400;
var inst_31258__$1 = inst_31277;
var state_31384__$1 = (function (){var statearr_31408 = state_31384;
(statearr_31408[(13)] = inst_31255__$1);

(statearr_31408[(14)] = inst_31258__$1);

(statearr_31408[(15)] = inst_31256__$1);

(statearr_31408[(18)] = inst_31276);

(statearr_31408[(16)] = inst_31257__$1);

return statearr_31408;
})();
var statearr_31409_33309 = state_31384__$1;
(statearr_31409_33309[(2)] = null);

(statearr_31409_33309[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31385 === (21))){
var inst_31304 = (state_31384[(2)]);
var state_31384__$1 = state_31384;
var statearr_31413_33311 = state_31384__$1;
(statearr_31413_33311[(2)] = inst_31304);

(statearr_31413_33311[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31385 === (31))){
var inst_31331 = (state_31384[(12)]);
var inst_31335 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_31331);
var state_31384__$1 = state_31384;
var statearr_31415_33314 = state_31384__$1;
(statearr_31415_33314[(2)] = inst_31335);

(statearr_31415_33314[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31385 === (32))){
var inst_31322 = (state_31384[(19)]);
var inst_31323 = (state_31384[(10)]);
var inst_31325 = (state_31384[(11)]);
var inst_31324 = (state_31384[(20)]);
var inst_31337 = (state_31384[(2)]);
var inst_31338 = (inst_31325 + (1));
var tmp31410 = inst_31322;
var tmp31411 = inst_31323;
var tmp31412 = inst_31324;
var inst_31322__$1 = tmp31410;
var inst_31323__$1 = tmp31411;
var inst_31324__$1 = tmp31412;
var inst_31325__$1 = inst_31338;
var state_31384__$1 = (function (){var statearr_31417 = state_31384;
(statearr_31417[(19)] = inst_31322__$1);

(statearr_31417[(10)] = inst_31323__$1);

(statearr_31417[(21)] = inst_31337);

(statearr_31417[(11)] = inst_31325__$1);

(statearr_31417[(20)] = inst_31324__$1);

return statearr_31417;
})();
var statearr_31419_33320 = state_31384__$1;
(statearr_31419_33320[(2)] = null);

(statearr_31419_33320[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31385 === (40))){
var inst_31351 = (state_31384[(22)]);
var inst_31356 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_31351);
var state_31384__$1 = state_31384;
var statearr_31420_33324 = state_31384__$1;
(statearr_31420_33324[(2)] = inst_31356);

(statearr_31420_33324[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31385 === (33))){
var inst_31342 = (state_31384[(23)]);
var inst_31344 = cljs.core.chunked_seq_QMARK_(inst_31342);
var state_31384__$1 = state_31384;
if(inst_31344){
var statearr_31421_33326 = state_31384__$1;
(statearr_31421_33326[(1)] = (36));

} else {
var statearr_31422_33329 = state_31384__$1;
(statearr_31422_33329[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31385 === (13))){
var inst_31270 = (state_31384[(24)]);
var inst_31273 = cljs.core.async.close_BANG_(inst_31270);
var state_31384__$1 = state_31384;
var statearr_31423_33331 = state_31384__$1;
(statearr_31423_33331[(2)] = inst_31273);

(statearr_31423_33331[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31385 === (22))){
var inst_31294 = (state_31384[(8)]);
var inst_31297 = cljs.core.async.close_BANG_(inst_31294);
var state_31384__$1 = state_31384;
var statearr_31427_33336 = state_31384__$1;
(statearr_31427_33336[(2)] = inst_31297);

(statearr_31427_33336[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31385 === (36))){
var inst_31342 = (state_31384[(23)]);
var inst_31346 = cljs.core.chunk_first(inst_31342);
var inst_31347 = cljs.core.chunk_rest(inst_31342);
var inst_31348 = cljs.core.count(inst_31346);
var inst_31322 = inst_31347;
var inst_31323 = inst_31346;
var inst_31324 = inst_31348;
var inst_31325 = (0);
var state_31384__$1 = (function (){var statearr_31429 = state_31384;
(statearr_31429[(19)] = inst_31322);

(statearr_31429[(10)] = inst_31323);

(statearr_31429[(11)] = inst_31325);

(statearr_31429[(20)] = inst_31324);

return statearr_31429;
})();
var statearr_31430_33342 = state_31384__$1;
(statearr_31430_33342[(2)] = null);

(statearr_31430_33342[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31385 === (41))){
var inst_31342 = (state_31384[(23)]);
var inst_31359 = (state_31384[(2)]);
var inst_31360 = cljs.core.next(inst_31342);
var inst_31322 = inst_31360;
var inst_31323 = null;
var inst_31324 = (0);
var inst_31325 = (0);
var state_31384__$1 = (function (){var statearr_31432 = state_31384;
(statearr_31432[(19)] = inst_31322);

(statearr_31432[(10)] = inst_31323);

(statearr_31432[(11)] = inst_31325);

(statearr_31432[(20)] = inst_31324);

(statearr_31432[(25)] = inst_31359);

return statearr_31432;
})();
var statearr_31433_33348 = state_31384__$1;
(statearr_31433_33348[(2)] = null);

(statearr_31433_33348[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31385 === (43))){
var state_31384__$1 = state_31384;
var statearr_31435_33349 = state_31384__$1;
(statearr_31435_33349[(2)] = null);

(statearr_31435_33349[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31385 === (29))){
var inst_31368 = (state_31384[(2)]);
var state_31384__$1 = state_31384;
var statearr_31436_33351 = state_31384__$1;
(statearr_31436_33351[(2)] = inst_31368);

(statearr_31436_33351[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31385 === (44))){
var inst_31377 = (state_31384[(2)]);
var state_31384__$1 = (function (){var statearr_31437 = state_31384;
(statearr_31437[(26)] = inst_31377);

return statearr_31437;
})();
var statearr_31438_33352 = state_31384__$1;
(statearr_31438_33352[(2)] = null);

(statearr_31438_33352[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31385 === (6))){
var inst_31314 = (state_31384[(27)]);
var inst_31313 = cljs.core.deref(cs);
var inst_31314__$1 = cljs.core.keys(inst_31313);
var inst_31315 = cljs.core.count(inst_31314__$1);
var inst_31316 = cljs.core.reset_BANG_(dctr,inst_31315);
var inst_31321 = cljs.core.seq(inst_31314__$1);
var inst_31322 = inst_31321;
var inst_31323 = null;
var inst_31324 = (0);
var inst_31325 = (0);
var state_31384__$1 = (function (){var statearr_31442 = state_31384;
(statearr_31442[(19)] = inst_31322);

(statearr_31442[(10)] = inst_31323);

(statearr_31442[(28)] = inst_31316);

(statearr_31442[(11)] = inst_31325);

(statearr_31442[(20)] = inst_31324);

(statearr_31442[(27)] = inst_31314__$1);

return statearr_31442;
})();
var statearr_31443_33358 = state_31384__$1;
(statearr_31443_33358[(2)] = null);

(statearr_31443_33358[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31385 === (28))){
var inst_31322 = (state_31384[(19)]);
var inst_31342 = (state_31384[(23)]);
var inst_31342__$1 = cljs.core.seq(inst_31322);
var state_31384__$1 = (function (){var statearr_31444 = state_31384;
(statearr_31444[(23)] = inst_31342__$1);

return statearr_31444;
})();
if(inst_31342__$1){
var statearr_31446_33363 = state_31384__$1;
(statearr_31446_33363[(1)] = (33));

} else {
var statearr_31447_33364 = state_31384__$1;
(statearr_31447_33364[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31385 === (25))){
var inst_31325 = (state_31384[(11)]);
var inst_31324 = (state_31384[(20)]);
var inst_31328 = (inst_31325 < inst_31324);
var inst_31329 = inst_31328;
var state_31384__$1 = state_31384;
if(cljs.core.truth_(inst_31329)){
var statearr_31453_33368 = state_31384__$1;
(statearr_31453_33368[(1)] = (27));

} else {
var statearr_31454_33369 = state_31384__$1;
(statearr_31454_33369[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31385 === (34))){
var state_31384__$1 = state_31384;
var statearr_31458_33372 = state_31384__$1;
(statearr_31458_33372[(2)] = null);

(statearr_31458_33372[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31385 === (17))){
var state_31384__$1 = state_31384;
var statearr_31459_33376 = state_31384__$1;
(statearr_31459_33376[(2)] = null);

(statearr_31459_33376[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31385 === (3))){
var inst_31382 = (state_31384[(2)]);
var state_31384__$1 = state_31384;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31384__$1,inst_31382);
} else {
if((state_val_31385 === (12))){
var inst_31309 = (state_31384[(2)]);
var state_31384__$1 = state_31384;
var statearr_31463_33379 = state_31384__$1;
(statearr_31463_33379[(2)] = inst_31309);

(statearr_31463_33379[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31385 === (2))){
var state_31384__$1 = state_31384;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31384__$1,(4),ch);
} else {
if((state_val_31385 === (23))){
var state_31384__$1 = state_31384;
var statearr_31469_33384 = state_31384__$1;
(statearr_31469_33384[(2)] = null);

(statearr_31469_33384[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31385 === (35))){
var inst_31366 = (state_31384[(2)]);
var state_31384__$1 = state_31384;
var statearr_31474_33385 = state_31384__$1;
(statearr_31474_33385[(2)] = inst_31366);

(statearr_31474_33385[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31385 === (19))){
var inst_31280 = (state_31384[(7)]);
var inst_31284 = cljs.core.chunk_first(inst_31280);
var inst_31285 = cljs.core.chunk_rest(inst_31280);
var inst_31287 = cljs.core.count(inst_31284);
var inst_31255 = inst_31285;
var inst_31256 = inst_31284;
var inst_31257 = inst_31287;
var inst_31258 = (0);
var state_31384__$1 = (function (){var statearr_31478 = state_31384;
(statearr_31478[(13)] = inst_31255);

(statearr_31478[(14)] = inst_31258);

(statearr_31478[(15)] = inst_31256);

(statearr_31478[(16)] = inst_31257);

return statearr_31478;
})();
var statearr_31479_33389 = state_31384__$1;
(statearr_31479_33389[(2)] = null);

(statearr_31479_33389[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31385 === (11))){
var inst_31255 = (state_31384[(13)]);
var inst_31280 = (state_31384[(7)]);
var inst_31280__$1 = cljs.core.seq(inst_31255);
var state_31384__$1 = (function (){var statearr_31483 = state_31384;
(statearr_31483[(7)] = inst_31280__$1);

return statearr_31483;
})();
if(inst_31280__$1){
var statearr_31484_33391 = state_31384__$1;
(statearr_31484_33391[(1)] = (16));

} else {
var statearr_31485_33392 = state_31384__$1;
(statearr_31485_33392[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31385 === (9))){
var inst_31311 = (state_31384[(2)]);
var state_31384__$1 = state_31384;
var statearr_31487_33394 = state_31384__$1;
(statearr_31487_33394[(2)] = inst_31311);

(statearr_31487_33394[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31385 === (5))){
var inst_31253 = cljs.core.deref(cs);
var inst_31254 = cljs.core.seq(inst_31253);
var inst_31255 = inst_31254;
var inst_31256 = null;
var inst_31257 = (0);
var inst_31258 = (0);
var state_31384__$1 = (function (){var statearr_31488 = state_31384;
(statearr_31488[(13)] = inst_31255);

(statearr_31488[(14)] = inst_31258);

(statearr_31488[(15)] = inst_31256);

(statearr_31488[(16)] = inst_31257);

return statearr_31488;
})();
var statearr_31490_33398 = state_31384__$1;
(statearr_31490_33398[(2)] = null);

(statearr_31490_33398[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31385 === (14))){
var state_31384__$1 = state_31384;
var statearr_31495_33399 = state_31384__$1;
(statearr_31495_33399[(2)] = null);

(statearr_31495_33399[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31385 === (45))){
var inst_31374 = (state_31384[(2)]);
var state_31384__$1 = state_31384;
var statearr_31496_33402 = state_31384__$1;
(statearr_31496_33402[(2)] = inst_31374);

(statearr_31496_33402[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31385 === (26))){
var inst_31314 = (state_31384[(27)]);
var inst_31370 = (state_31384[(2)]);
var inst_31371 = cljs.core.seq(inst_31314);
var state_31384__$1 = (function (){var statearr_31498 = state_31384;
(statearr_31498[(29)] = inst_31370);

return statearr_31498;
})();
if(inst_31371){
var statearr_31499_33405 = state_31384__$1;
(statearr_31499_33405[(1)] = (42));

} else {
var statearr_31500_33408 = state_31384__$1;
(statearr_31500_33408[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31385 === (16))){
var inst_31280 = (state_31384[(7)]);
var inst_31282 = cljs.core.chunked_seq_QMARK_(inst_31280);
var state_31384__$1 = state_31384;
if(inst_31282){
var statearr_31501_33409 = state_31384__$1;
(statearr_31501_33409[(1)] = (19));

} else {
var statearr_31502_33410 = state_31384__$1;
(statearr_31502_33410[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31385 === (38))){
var inst_31363 = (state_31384[(2)]);
var state_31384__$1 = state_31384;
var statearr_31505_33412 = state_31384__$1;
(statearr_31505_33412[(2)] = inst_31363);

(statearr_31505_33412[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31385 === (30))){
var state_31384__$1 = state_31384;
var statearr_31509_33413 = state_31384__$1;
(statearr_31509_33413[(2)] = null);

(statearr_31509_33413[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31385 === (10))){
var inst_31258 = (state_31384[(14)]);
var inst_31256 = (state_31384[(15)]);
var inst_31266 = cljs.core._nth(inst_31256,inst_31258);
var inst_31270 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_31266,(0),null);
var inst_31271 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_31266,(1),null);
var state_31384__$1 = (function (){var statearr_31514 = state_31384;
(statearr_31514[(24)] = inst_31270);

return statearr_31514;
})();
if(cljs.core.truth_(inst_31271)){
var statearr_31519_33433 = state_31384__$1;
(statearr_31519_33433[(1)] = (13));

} else {
var statearr_31520_33434 = state_31384__$1;
(statearr_31520_33434[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31385 === (18))){
var inst_31307 = (state_31384[(2)]);
var state_31384__$1 = state_31384;
var statearr_31521_33435 = state_31384__$1;
(statearr_31521_33435[(2)] = inst_31307);

(statearr_31521_33435[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31385 === (42))){
var state_31384__$1 = state_31384;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31384__$1,(45),dchan);
} else {
if((state_val_31385 === (37))){
var inst_31246 = (state_31384[(9)]);
var inst_31342 = (state_31384[(23)]);
var inst_31351 = (state_31384[(22)]);
var inst_31351__$1 = cljs.core.first(inst_31342);
var inst_31353 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_31351__$1,inst_31246,done);
var state_31384__$1 = (function (){var statearr_31523 = state_31384;
(statearr_31523[(22)] = inst_31351__$1);

return statearr_31523;
})();
if(cljs.core.truth_(inst_31353)){
var statearr_31524_33439 = state_31384__$1;
(statearr_31524_33439[(1)] = (39));

} else {
var statearr_31525_33440 = state_31384__$1;
(statearr_31525_33440[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31385 === (8))){
var inst_31258 = (state_31384[(14)]);
var inst_31257 = (state_31384[(16)]);
var inst_31260 = (inst_31258 < inst_31257);
var inst_31261 = inst_31260;
var state_31384__$1 = state_31384;
if(cljs.core.truth_(inst_31261)){
var statearr_31528_33442 = state_31384__$1;
(statearr_31528_33442[(1)] = (10));

} else {
var statearr_31530_33443 = state_31384__$1;
(statearr_31530_33443[(1)] = (11));

}

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
var cljs$core$async$mult_$_state_machine__29694__auto__ = null;
var cljs$core$async$mult_$_state_machine__29694__auto____0 = (function (){
var statearr_31532 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31532[(0)] = cljs$core$async$mult_$_state_machine__29694__auto__);

(statearr_31532[(1)] = (1));

return statearr_31532;
});
var cljs$core$async$mult_$_state_machine__29694__auto____1 = (function (state_31384){
while(true){
var ret_value__29695__auto__ = (function (){try{while(true){
var result__29696__auto__ = switch__29693__auto__(state_31384);
if(cljs.core.keyword_identical_QMARK_(result__29696__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29696__auto__;
}
break;
}
}catch (e31535){var ex__29697__auto__ = e31535;
var statearr_31536_33453 = state_31384;
(statearr_31536_33453[(2)] = ex__29697__auto__);


if(cljs.core.seq((state_31384[(4)]))){
var statearr_31537_33455 = state_31384;
(statearr_31537_33455[(1)] = cljs.core.first((state_31384[(4)])));

} else {
throw ex__29697__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29695__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33459 = state_31384;
state_31384 = G__33459;
continue;
} else {
return ret_value__29695__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__29694__auto__ = function(state_31384){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__29694__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__29694__auto____1.call(this,state_31384);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__29694__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__29694__auto____0;
cljs$core$async$mult_$_state_machine__29694__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__29694__auto____1;
return cljs$core$async$mult_$_state_machine__29694__auto__;
})()
})();
var state__30121__auto__ = (function (){var statearr_31538 = f__30120__auto__();
(statearr_31538[(6)] = c__30119__auto___33268);

return statearr_31538;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30121__auto__);
}));


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var G__31543 = arguments.length;
switch (G__31543) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(mult,ch,true);
}));

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_(mult,ch,close_QMARK_);

return ch;
}));

(cljs.core.async.tap.cljs$lang$maxFixedArity = 3);

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_(mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_(mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

var cljs$core$async$Mix$admix_STAR_$dyn_33470 = (function (m,ch){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4429__auto__.call(null,m,ch));
} else {
var m__4426__auto__ = (cljs.core.async.admix_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4426__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.admix*",m);
}
}
});
cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$admix_STAR_$dyn_33470(m,ch);
}
});

var cljs$core$async$Mix$unmix_STAR_$dyn_33475 = (function (m,ch){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4429__auto__.call(null,m,ch));
} else {
var m__4426__auto__ = (cljs.core.async.unmix_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4426__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.unmix*",m);
}
}
});
cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$unmix_STAR_$dyn_33475(m,ch);
}
});

var cljs$core$async$Mix$unmix_all_STAR_$dyn_33479 = (function (m){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4429__auto__.call(null,m));
} else {
var m__4426__auto__ = (cljs.core.async.unmix_all_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4426__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mix.unmix-all*",m);
}
}
});
cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mix$unmix_all_STAR_$dyn_33479(m);
}
});

var cljs$core$async$Mix$toggle_STAR_$dyn_33485 = (function (m,state_map){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__4429__auto__.call(null,m,state_map));
} else {
var m__4426__auto__ = (cljs.core.async.toggle_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__4426__auto__.call(null,m,state_map));
} else {
throw cljs.core.missing_protocol("Mix.toggle*",m);
}
}
});
cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
return cljs$core$async$Mix$toggle_STAR_$dyn_33485(m,state_map);
}
});

var cljs$core$async$Mix$solo_mode_STAR_$dyn_33500 = (function (m,mode){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__4429__auto__.call(null,m,mode));
} else {
var m__4426__auto__ = (cljs.core.async.solo_mode_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__4426__auto__.call(null,m,mode));
} else {
throw cljs.core.missing_protocol("Mix.solo-mode*",m);
}
}
});
cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
return cljs$core$async$Mix$solo_mode_STAR_$dyn_33500(m,mode);
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__4742__auto__ = [];
var len__4736__auto___33513 = arguments.length;
var i__4737__auto___33514 = (0);
while(true){
if((i__4737__auto___33514 < len__4736__auto___33513)){
args__4742__auto__.push((arguments[i__4737__auto___33514]));

var G__33520 = (i__4737__auto___33514 + (1));
i__4737__auto___33514 = G__33520;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((3) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4743__auto__);
});

(cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__31568){
var map__31569 = p__31568;
var map__31569__$1 = (((((!((map__31569 == null))))?(((((map__31569.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31569.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__31569):map__31569);
var opts = map__31569__$1;
var statearr_31571_33530 = state;
(statearr_31571_33530[(1)] = cont_block);


var temp__5735__auto__ = cljs.core.async.do_alts((function (val){
var statearr_31572_33531 = state;
(statearr_31572_33531[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
}),ports,opts);
if(cljs.core.truth_(temp__5735__auto__)){
var cb = temp__5735__auto__;
var statearr_31573_33533 = state;
(statearr_31573_33533[(2)] = cljs.core.deref(cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}));

(cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq31564){
var G__31565 = cljs.core.first(seq31564);
var seq31564__$1 = cljs.core.next(seq31564);
var G__31566 = cljs.core.first(seq31564__$1);
var seq31564__$2 = cljs.core.next(seq31564__$1);
var G__31567 = cljs.core.first(seq31564__$2);
var seq31564__$3 = cljs.core.next(seq31564__$2);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__31565,G__31566,G__31567,seq31564__$3);
}));

/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.async.sliding_buffer((1)));
var changed = (function (){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(change,true);
});
var pick = (function (attr,chs){
return cljs.core.reduce_kv((function (ret,c,v){
if(cljs.core.truth_((attr.cljs$core$IFn$_invoke$arity$1 ? attr.cljs$core$IFn$_invoke$arity$1(v) : attr.call(null,v)))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,c);
} else {
return ret;
}
}),cljs.core.PersistentHashSet.EMPTY,chs);
});
var calc_state = (function (){
var chs = cljs.core.deref(cs);
var mode = cljs.core.deref(solo_mode);
var solos = pick(new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick(new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick(new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && ((!(cljs.core.empty_QMARK_(solos))))))?cljs.core.vec(solos):cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(pauses,cljs.core.keys(chs)))),change)], null);
});
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async31578 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async31578 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta31579){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta31579 = meta31579;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async31578.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31580,meta31579__$1){
var self__ = this;
var _31580__$1 = this;
return (new cljs.core.async.t_cljs$core$async31578(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta31579__$1));
}));

(cljs.core.async.t_cljs$core$async31578.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31580){
var self__ = this;
var _31580__$1 = this;
return self__.meta31579;
}));

(cljs.core.async.t_cljs$core$async31578.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async31578.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
}));

(cljs.core.async.t_cljs$core$async31578.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async31578.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async31578.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async31578.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async31578.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async31578.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode)))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_(self__.solo_mode,mode);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async31578.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta31579","meta31579",1370404953,null)], null);
}));

(cljs.core.async.t_cljs$core$async31578.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async31578.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async31578");

(cljs.core.async.t_cljs$core$async31578.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async31578");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async31578.
 */
cljs.core.async.__GT_t_cljs$core$async31578 = (function cljs$core$async$mix_$___GT_t_cljs$core$async31578(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta31579){
return (new cljs.core.async.t_cljs$core$async31578(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta31579));
});

}

return (new cljs.core.async.t_cljs$core$async31578(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__30119__auto___33577 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30120__auto__ = (function (){var switch__29693__auto__ = (function (state_31707){
var state_val_31708 = (state_31707[(1)]);
if((state_val_31708 === (7))){
var inst_31610 = (state_31707[(2)]);
var state_31707__$1 = state_31707;
var statearr_31709_33580 = state_31707__$1;
(statearr_31709_33580[(2)] = inst_31610);

(statearr_31709_33580[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31708 === (20))){
var inst_31626 = (state_31707[(7)]);
var state_31707__$1 = state_31707;
var statearr_31710_33583 = state_31707__$1;
(statearr_31710_33583[(2)] = inst_31626);

(statearr_31710_33583[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31708 === (27))){
var state_31707__$1 = state_31707;
var statearr_31711_33584 = state_31707__$1;
(statearr_31711_33584[(2)] = null);

(statearr_31711_33584[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31708 === (1))){
var inst_31594 = (state_31707[(8)]);
var inst_31594__$1 = calc_state();
var inst_31597 = (inst_31594__$1 == null);
var inst_31598 = cljs.core.not(inst_31597);
var state_31707__$1 = (function (){var statearr_31712 = state_31707;
(statearr_31712[(8)] = inst_31594__$1);

return statearr_31712;
})();
if(inst_31598){
var statearr_31713_33593 = state_31707__$1;
(statearr_31713_33593[(1)] = (2));

} else {
var statearr_31714_33594 = state_31707__$1;
(statearr_31714_33594[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31708 === (24))){
var inst_31667 = (state_31707[(9)]);
var inst_31656 = (state_31707[(10)]);
var inst_31681 = (state_31707[(11)]);
var inst_31681__$1 = (inst_31656.cljs$core$IFn$_invoke$arity$1 ? inst_31656.cljs$core$IFn$_invoke$arity$1(inst_31667) : inst_31656.call(null,inst_31667));
var state_31707__$1 = (function (){var statearr_31719 = state_31707;
(statearr_31719[(11)] = inst_31681__$1);

return statearr_31719;
})();
if(cljs.core.truth_(inst_31681__$1)){
var statearr_31721_33595 = state_31707__$1;
(statearr_31721_33595[(1)] = (29));

} else {
var statearr_31722_33597 = state_31707__$1;
(statearr_31722_33597[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31708 === (4))){
var inst_31613 = (state_31707[(2)]);
var state_31707__$1 = state_31707;
if(cljs.core.truth_(inst_31613)){
var statearr_31723_33598 = state_31707__$1;
(statearr_31723_33598[(1)] = (8));

} else {
var statearr_31724_33600 = state_31707__$1;
(statearr_31724_33600[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31708 === (15))){
var inst_31650 = (state_31707[(2)]);
var state_31707__$1 = state_31707;
if(cljs.core.truth_(inst_31650)){
var statearr_31727_33603 = state_31707__$1;
(statearr_31727_33603[(1)] = (19));

} else {
var statearr_31730_33604 = state_31707__$1;
(statearr_31730_33604[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31708 === (21))){
var inst_31655 = (state_31707[(12)]);
var inst_31655__$1 = (state_31707[(2)]);
var inst_31656 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_31655__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_31658 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_31655__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_31659 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_31655__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_31707__$1 = (function (){var statearr_31731 = state_31707;
(statearr_31731[(10)] = inst_31656);

(statearr_31731[(13)] = inst_31658);

(statearr_31731[(12)] = inst_31655__$1);

return statearr_31731;
})();
return cljs.core.async.ioc_alts_BANG_(state_31707__$1,(22),inst_31659);
} else {
if((state_val_31708 === (31))){
var inst_31689 = (state_31707[(2)]);
var state_31707__$1 = state_31707;
if(cljs.core.truth_(inst_31689)){
var statearr_31732_33607 = state_31707__$1;
(statearr_31732_33607[(1)] = (32));

} else {
var statearr_31733_33608 = state_31707__$1;
(statearr_31733_33608[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31708 === (32))){
var inst_31666 = (state_31707[(14)]);
var state_31707__$1 = state_31707;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31707__$1,(35),out,inst_31666);
} else {
if((state_val_31708 === (33))){
var inst_31655 = (state_31707[(12)]);
var inst_31626 = inst_31655;
var state_31707__$1 = (function (){var statearr_31736 = state_31707;
(statearr_31736[(7)] = inst_31626);

return statearr_31736;
})();
var statearr_31738_33612 = state_31707__$1;
(statearr_31738_33612[(2)] = null);

(statearr_31738_33612[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31708 === (13))){
var inst_31626 = (state_31707[(7)]);
var inst_31636 = inst_31626.cljs$lang$protocol_mask$partition0$;
var inst_31637 = (inst_31636 & (64));
var inst_31641 = inst_31626.cljs$core$ISeq$;
var inst_31642 = (cljs.core.PROTOCOL_SENTINEL === inst_31641);
var inst_31643 = ((inst_31637) || (inst_31642));
var state_31707__$1 = state_31707;
if(cljs.core.truth_(inst_31643)){
var statearr_31739_33614 = state_31707__$1;
(statearr_31739_33614[(1)] = (16));

} else {
var statearr_31740_33615 = state_31707__$1;
(statearr_31740_33615[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31708 === (22))){
var inst_31667 = (state_31707[(9)]);
var inst_31666 = (state_31707[(14)]);
var inst_31665 = (state_31707[(2)]);
var inst_31666__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_31665,(0),null);
var inst_31667__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_31665,(1),null);
var inst_31668 = (inst_31666__$1 == null);
var inst_31669 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_31667__$1,change);
var inst_31670 = ((inst_31668) || (inst_31669));
var state_31707__$1 = (function (){var statearr_31743 = state_31707;
(statearr_31743[(9)] = inst_31667__$1);

(statearr_31743[(14)] = inst_31666__$1);

return statearr_31743;
})();
if(cljs.core.truth_(inst_31670)){
var statearr_31744_33619 = state_31707__$1;
(statearr_31744_33619[(1)] = (23));

} else {
var statearr_31745_33620 = state_31707__$1;
(statearr_31745_33620[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31708 === (36))){
var inst_31655 = (state_31707[(12)]);
var inst_31626 = inst_31655;
var state_31707__$1 = (function (){var statearr_31746 = state_31707;
(statearr_31746[(7)] = inst_31626);

return statearr_31746;
})();
var statearr_31747_33621 = state_31707__$1;
(statearr_31747_33621[(2)] = null);

(statearr_31747_33621[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31708 === (29))){
var inst_31681 = (state_31707[(11)]);
var state_31707__$1 = state_31707;
var statearr_31748_33623 = state_31707__$1;
(statearr_31748_33623[(2)] = inst_31681);

(statearr_31748_33623[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31708 === (6))){
var state_31707__$1 = state_31707;
var statearr_31749_33625 = state_31707__$1;
(statearr_31749_33625[(2)] = false);

(statearr_31749_33625[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31708 === (28))){
var inst_31677 = (state_31707[(2)]);
var inst_31678 = calc_state();
var inst_31626 = inst_31678;
var state_31707__$1 = (function (){var statearr_31750 = state_31707;
(statearr_31750[(7)] = inst_31626);

(statearr_31750[(15)] = inst_31677);

return statearr_31750;
})();
var statearr_31751_33628 = state_31707__$1;
(statearr_31751_33628[(2)] = null);

(statearr_31751_33628[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31708 === (25))){
var inst_31703 = (state_31707[(2)]);
var state_31707__$1 = state_31707;
var statearr_31752_33630 = state_31707__$1;
(statearr_31752_33630[(2)] = inst_31703);

(statearr_31752_33630[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31708 === (34))){
var inst_31701 = (state_31707[(2)]);
var state_31707__$1 = state_31707;
var statearr_31753_33631 = state_31707__$1;
(statearr_31753_33631[(2)] = inst_31701);

(statearr_31753_33631[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31708 === (17))){
var state_31707__$1 = state_31707;
var statearr_31756_33635 = state_31707__$1;
(statearr_31756_33635[(2)] = false);

(statearr_31756_33635[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31708 === (3))){
var state_31707__$1 = state_31707;
var statearr_31757_33640 = state_31707__$1;
(statearr_31757_33640[(2)] = false);

(statearr_31757_33640[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31708 === (12))){
var inst_31705 = (state_31707[(2)]);
var state_31707__$1 = state_31707;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31707__$1,inst_31705);
} else {
if((state_val_31708 === (2))){
var inst_31594 = (state_31707[(8)]);
var inst_31602 = inst_31594.cljs$lang$protocol_mask$partition0$;
var inst_31603 = (inst_31602 & (64));
var inst_31604 = inst_31594.cljs$core$ISeq$;
var inst_31605 = (cljs.core.PROTOCOL_SENTINEL === inst_31604);
var inst_31606 = ((inst_31603) || (inst_31605));
var state_31707__$1 = state_31707;
if(cljs.core.truth_(inst_31606)){
var statearr_31760_33652 = state_31707__$1;
(statearr_31760_33652[(1)] = (5));

} else {
var statearr_31761_33654 = state_31707__$1;
(statearr_31761_33654[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31708 === (23))){
var inst_31666 = (state_31707[(14)]);
var inst_31672 = (inst_31666 == null);
var state_31707__$1 = state_31707;
if(cljs.core.truth_(inst_31672)){
var statearr_31763_33655 = state_31707__$1;
(statearr_31763_33655[(1)] = (26));

} else {
var statearr_31764_33656 = state_31707__$1;
(statearr_31764_33656[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31708 === (35))){
var inst_31692 = (state_31707[(2)]);
var state_31707__$1 = state_31707;
if(cljs.core.truth_(inst_31692)){
var statearr_31765_33659 = state_31707__$1;
(statearr_31765_33659[(1)] = (36));

} else {
var statearr_31766_33661 = state_31707__$1;
(statearr_31766_33661[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31708 === (19))){
var inst_31626 = (state_31707[(7)]);
var inst_31652 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_31626);
var state_31707__$1 = state_31707;
var statearr_31767_33662 = state_31707__$1;
(statearr_31767_33662[(2)] = inst_31652);

(statearr_31767_33662[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31708 === (11))){
var inst_31626 = (state_31707[(7)]);
var inst_31633 = (inst_31626 == null);
var inst_31634 = cljs.core.not(inst_31633);
var state_31707__$1 = state_31707;
if(inst_31634){
var statearr_31769_33663 = state_31707__$1;
(statearr_31769_33663[(1)] = (13));

} else {
var statearr_31770_33664 = state_31707__$1;
(statearr_31770_33664[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31708 === (9))){
var inst_31594 = (state_31707[(8)]);
var state_31707__$1 = state_31707;
var statearr_31772_33665 = state_31707__$1;
(statearr_31772_33665[(2)] = inst_31594);

(statearr_31772_33665[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31708 === (5))){
var state_31707__$1 = state_31707;
var statearr_31773_33666 = state_31707__$1;
(statearr_31773_33666[(2)] = true);

(statearr_31773_33666[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31708 === (14))){
var state_31707__$1 = state_31707;
var statearr_31774_33667 = state_31707__$1;
(statearr_31774_33667[(2)] = false);

(statearr_31774_33667[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31708 === (26))){
var inst_31667 = (state_31707[(9)]);
var inst_31674 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_31667);
var state_31707__$1 = state_31707;
var statearr_31775_33668 = state_31707__$1;
(statearr_31775_33668[(2)] = inst_31674);

(statearr_31775_33668[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31708 === (16))){
var state_31707__$1 = state_31707;
var statearr_31776_33669 = state_31707__$1;
(statearr_31776_33669[(2)] = true);

(statearr_31776_33669[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31708 === (38))){
var inst_31697 = (state_31707[(2)]);
var state_31707__$1 = state_31707;
var statearr_31777_33670 = state_31707__$1;
(statearr_31777_33670[(2)] = inst_31697);

(statearr_31777_33670[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31708 === (30))){
var inst_31667 = (state_31707[(9)]);
var inst_31656 = (state_31707[(10)]);
var inst_31658 = (state_31707[(13)]);
var inst_31684 = cljs.core.empty_QMARK_(inst_31656);
var inst_31685 = (inst_31658.cljs$core$IFn$_invoke$arity$1 ? inst_31658.cljs$core$IFn$_invoke$arity$1(inst_31667) : inst_31658.call(null,inst_31667));
var inst_31686 = cljs.core.not(inst_31685);
var inst_31687 = ((inst_31684) && (inst_31686));
var state_31707__$1 = state_31707;
var statearr_31778_33672 = state_31707__$1;
(statearr_31778_33672[(2)] = inst_31687);

(statearr_31778_33672[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31708 === (10))){
var inst_31594 = (state_31707[(8)]);
var inst_31618 = (state_31707[(2)]);
var inst_31619 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_31618,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_31620 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_31618,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_31621 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_31618,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_31626 = inst_31594;
var state_31707__$1 = (function (){var statearr_31779 = state_31707;
(statearr_31779[(16)] = inst_31621);

(statearr_31779[(17)] = inst_31619);

(statearr_31779[(7)] = inst_31626);

(statearr_31779[(18)] = inst_31620);

return statearr_31779;
})();
var statearr_31780_33673 = state_31707__$1;
(statearr_31780_33673[(2)] = null);

(statearr_31780_33673[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31708 === (18))){
var inst_31647 = (state_31707[(2)]);
var state_31707__$1 = state_31707;
var statearr_31781_33674 = state_31707__$1;
(statearr_31781_33674[(2)] = inst_31647);

(statearr_31781_33674[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31708 === (37))){
var state_31707__$1 = state_31707;
var statearr_31782_33675 = state_31707__$1;
(statearr_31782_33675[(2)] = null);

(statearr_31782_33675[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31708 === (8))){
var inst_31594 = (state_31707[(8)]);
var inst_31615 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_31594);
var state_31707__$1 = state_31707;
var statearr_31783_33676 = state_31707__$1;
(statearr_31783_33676[(2)] = inst_31615);

(statearr_31783_33676[(1)] = (10));


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
}
}
});
return (function() {
var cljs$core$async$mix_$_state_machine__29694__auto__ = null;
var cljs$core$async$mix_$_state_machine__29694__auto____0 = (function (){
var statearr_31784 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31784[(0)] = cljs$core$async$mix_$_state_machine__29694__auto__);

(statearr_31784[(1)] = (1));

return statearr_31784;
});
var cljs$core$async$mix_$_state_machine__29694__auto____1 = (function (state_31707){
while(true){
var ret_value__29695__auto__ = (function (){try{while(true){
var result__29696__auto__ = switch__29693__auto__(state_31707);
if(cljs.core.keyword_identical_QMARK_(result__29696__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29696__auto__;
}
break;
}
}catch (e31785){var ex__29697__auto__ = e31785;
var statearr_31786_33677 = state_31707;
(statearr_31786_33677[(2)] = ex__29697__auto__);


if(cljs.core.seq((state_31707[(4)]))){
var statearr_31787_33680 = state_31707;
(statearr_31787_33680[(1)] = cljs.core.first((state_31707[(4)])));

} else {
throw ex__29697__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29695__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33681 = state_31707;
state_31707 = G__33681;
continue;
} else {
return ret_value__29695__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__29694__auto__ = function(state_31707){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__29694__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__29694__auto____1.call(this,state_31707);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__29694__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__29694__auto____0;
cljs$core$async$mix_$_state_machine__29694__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__29694__auto____1;
return cljs$core$async$mix_$_state_machine__29694__auto__;
})()
})();
var state__30121__auto__ = (function (){var statearr_31790 = f__30120__auto__();
(statearr_31790[(6)] = c__30119__auto___33577);

return statearr_31790;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30121__auto__);
}));


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_(mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_(mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_(mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_(mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_(mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

var cljs$core$async$Pub$sub_STAR_$dyn_33693 = (function (p,v,ch,close_QMARK_){
var x__4428__auto__ = (((p == null))?null:p);
var m__4429__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$4 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__4429__auto__.call(null,p,v,ch,close_QMARK_));
} else {
var m__4426__auto__ = (cljs.core.async.sub_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$4 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__4426__auto__.call(null,p,v,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Pub.sub*",p);
}
}
});
cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
return cljs$core$async$Pub$sub_STAR_$dyn_33693(p,v,ch,close_QMARK_);
}
});

var cljs$core$async$Pub$unsub_STAR_$dyn_33698 = (function (p,v,ch){
var x__4428__auto__ = (((p == null))?null:p);
var m__4429__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__4429__auto__.call(null,p,v,ch));
} else {
var m__4426__auto__ = (cljs.core.async.unsub_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__4426__auto__.call(null,p,v,ch));
} else {
throw cljs.core.missing_protocol("Pub.unsub*",p);
}
}
});
cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
return cljs$core$async$Pub$unsub_STAR_$dyn_33698(p,v,ch);
}
});

var cljs$core$async$Pub$unsub_all_STAR_$dyn_33702 = (function() {
var G__33703 = null;
var G__33703__1 = (function (p){
var x__4428__auto__ = (((p == null))?null:p);
var m__4429__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__4429__auto__.call(null,p));
} else {
var m__4426__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__4426__auto__.call(null,p));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
var G__33703__2 = (function (p,v){
var x__4428__auto__ = (((p == null))?null:p);
var m__4429__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__4429__auto__.call(null,p,v));
} else {
var m__4426__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__4426__auto__.call(null,p,v));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
G__33703 = function(p,v){
switch(arguments.length){
case 1:
return G__33703__1.call(this,p);
case 2:
return G__33703__2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__33703.cljs$core$IFn$_invoke$arity$1 = G__33703__1;
G__33703.cljs$core$IFn$_invoke$arity$2 = G__33703__2;
return G__33703;
})()
;
cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__31798 = arguments.length;
switch (G__31798) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_33702(p);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_33702(p,v);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2);


/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var G__31803 = arguments.length;
switch (G__31803) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3(ch,topic_fn,cljs.core.constantly(null));
}));

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = (function (topic){
var or__4126__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(mults),topic);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,(function (p1__31800_SHARP_){
if(cljs.core.truth_((p1__31800_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__31800_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__31800_SHARP_.call(null,topic)))){
return p1__31800_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__31800_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
})),topic);
}
});
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async31805 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async31805 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta31806){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta31806 = meta31806;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async31805.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31807,meta31806__$1){
var self__ = this;
var _31807__$1 = this;
return (new cljs.core.async.t_cljs$core$async31805(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta31806__$1));
}));

(cljs.core.async.t_cljs$core$async31805.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31807){
var self__ = this;
var _31807__$1 = this;
return self__.meta31806;
}));

(cljs.core.async.t_cljs$core$async31805.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async31805.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async31805.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async31805.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
}));

(cljs.core.async.t_cljs$core$async31805.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__5735__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(self__.mults),topic);
if(cljs.core.truth_(temp__5735__auto__)){
var m = temp__5735__auto__;
return cljs.core.async.untap(m,ch__$1);
} else {
return null;
}
}));

(cljs.core.async.t_cljs$core$async31805.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.core.async.t_cljs$core$async31805.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
}));

(cljs.core.async.t_cljs$core$async31805.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta31806","meta31806",-191648267,null)], null);
}));

(cljs.core.async.t_cljs$core$async31805.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async31805.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async31805");

(cljs.core.async.t_cljs$core$async31805.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async31805");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async31805.
 */
cljs.core.async.__GT_t_cljs$core$async31805 = (function cljs$core$async$__GT_t_cljs$core$async31805(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta31806){
return (new cljs.core.async.t_cljs$core$async31805(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta31806));
});

}

return (new cljs.core.async.t_cljs$core$async31805(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__30119__auto___33716 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30120__auto__ = (function (){var switch__29693__auto__ = (function (state_31895){
var state_val_31896 = (state_31895[(1)]);
if((state_val_31896 === (7))){
var inst_31887 = (state_31895[(2)]);
var state_31895__$1 = state_31895;
var statearr_31901_33717 = state_31895__$1;
(statearr_31901_33717[(2)] = inst_31887);

(statearr_31901_33717[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31896 === (20))){
var state_31895__$1 = state_31895;
var statearr_31904_33718 = state_31895__$1;
(statearr_31904_33718[(2)] = null);

(statearr_31904_33718[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31896 === (1))){
var state_31895__$1 = state_31895;
var statearr_31905_33720 = state_31895__$1;
(statearr_31905_33720[(2)] = null);

(statearr_31905_33720[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31896 === (24))){
var inst_31866 = (state_31895[(7)]);
var inst_31879 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_31866);
var state_31895__$1 = state_31895;
var statearr_31906_33721 = state_31895__$1;
(statearr_31906_33721[(2)] = inst_31879);

(statearr_31906_33721[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31896 === (4))){
var inst_31818 = (state_31895[(8)]);
var inst_31818__$1 = (state_31895[(2)]);
var inst_31819 = (inst_31818__$1 == null);
var state_31895__$1 = (function (){var statearr_31907 = state_31895;
(statearr_31907[(8)] = inst_31818__$1);

return statearr_31907;
})();
if(cljs.core.truth_(inst_31819)){
var statearr_31908_33722 = state_31895__$1;
(statearr_31908_33722[(1)] = (5));

} else {
var statearr_31909_33723 = state_31895__$1;
(statearr_31909_33723[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31896 === (15))){
var inst_31860 = (state_31895[(2)]);
var state_31895__$1 = state_31895;
var statearr_31910_33724 = state_31895__$1;
(statearr_31910_33724[(2)] = inst_31860);

(statearr_31910_33724[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31896 === (21))){
var inst_31884 = (state_31895[(2)]);
var state_31895__$1 = (function (){var statearr_31911 = state_31895;
(statearr_31911[(9)] = inst_31884);

return statearr_31911;
})();
var statearr_31912_33725 = state_31895__$1;
(statearr_31912_33725[(2)] = null);

(statearr_31912_33725[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31896 === (13))){
var inst_31842 = (state_31895[(10)]);
var inst_31844 = cljs.core.chunked_seq_QMARK_(inst_31842);
var state_31895__$1 = state_31895;
if(inst_31844){
var statearr_31913_33726 = state_31895__$1;
(statearr_31913_33726[(1)] = (16));

} else {
var statearr_31914_33728 = state_31895__$1;
(statearr_31914_33728[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31896 === (22))){
var inst_31876 = (state_31895[(2)]);
var state_31895__$1 = state_31895;
if(cljs.core.truth_(inst_31876)){
var statearr_31915_33730 = state_31895__$1;
(statearr_31915_33730[(1)] = (23));

} else {
var statearr_31916_33731 = state_31895__$1;
(statearr_31916_33731[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31896 === (6))){
var inst_31866 = (state_31895[(7)]);
var inst_31818 = (state_31895[(8)]);
var inst_31868 = (state_31895[(11)]);
var inst_31866__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_31818) : topic_fn.call(null,inst_31818));
var inst_31867 = cljs.core.deref(mults);
var inst_31868__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_31867,inst_31866__$1);
var state_31895__$1 = (function (){var statearr_31917 = state_31895;
(statearr_31917[(7)] = inst_31866__$1);

(statearr_31917[(11)] = inst_31868__$1);

return statearr_31917;
})();
if(cljs.core.truth_(inst_31868__$1)){
var statearr_31918_33732 = state_31895__$1;
(statearr_31918_33732[(1)] = (19));

} else {
var statearr_31919_33733 = state_31895__$1;
(statearr_31919_33733[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31896 === (25))){
var inst_31881 = (state_31895[(2)]);
var state_31895__$1 = state_31895;
var statearr_31921_33734 = state_31895__$1;
(statearr_31921_33734[(2)] = inst_31881);

(statearr_31921_33734[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31896 === (17))){
var inst_31842 = (state_31895[(10)]);
var inst_31851 = cljs.core.first(inst_31842);
var inst_31852 = cljs.core.async.muxch_STAR_(inst_31851);
var inst_31853 = cljs.core.async.close_BANG_(inst_31852);
var inst_31854 = cljs.core.next(inst_31842);
var inst_31828 = inst_31854;
var inst_31829 = null;
var inst_31830 = (0);
var inst_31831 = (0);
var state_31895__$1 = (function (){var statearr_31922 = state_31895;
(statearr_31922[(12)] = inst_31828);

(statearr_31922[(13)] = inst_31829);

(statearr_31922[(14)] = inst_31831);

(statearr_31922[(15)] = inst_31853);

(statearr_31922[(16)] = inst_31830);

return statearr_31922;
})();
var statearr_31923_33737 = state_31895__$1;
(statearr_31923_33737[(2)] = null);

(statearr_31923_33737[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31896 === (3))){
var inst_31889 = (state_31895[(2)]);
var state_31895__$1 = state_31895;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31895__$1,inst_31889);
} else {
if((state_val_31896 === (12))){
var inst_31862 = (state_31895[(2)]);
var state_31895__$1 = state_31895;
var statearr_31924_33740 = state_31895__$1;
(statearr_31924_33740[(2)] = inst_31862);

(statearr_31924_33740[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31896 === (2))){
var state_31895__$1 = state_31895;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31895__$1,(4),ch);
} else {
if((state_val_31896 === (23))){
var state_31895__$1 = state_31895;
var statearr_31928_33741 = state_31895__$1;
(statearr_31928_33741[(2)] = null);

(statearr_31928_33741[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31896 === (19))){
var inst_31818 = (state_31895[(8)]);
var inst_31868 = (state_31895[(11)]);
var inst_31874 = cljs.core.async.muxch_STAR_(inst_31868);
var state_31895__$1 = state_31895;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31895__$1,(22),inst_31874,inst_31818);
} else {
if((state_val_31896 === (11))){
var inst_31828 = (state_31895[(12)]);
var inst_31842 = (state_31895[(10)]);
var inst_31842__$1 = cljs.core.seq(inst_31828);
var state_31895__$1 = (function (){var statearr_31930 = state_31895;
(statearr_31930[(10)] = inst_31842__$1);

return statearr_31930;
})();
if(inst_31842__$1){
var statearr_31931_33742 = state_31895__$1;
(statearr_31931_33742[(1)] = (13));

} else {
var statearr_31932_33743 = state_31895__$1;
(statearr_31932_33743[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31896 === (9))){
var inst_31864 = (state_31895[(2)]);
var state_31895__$1 = state_31895;
var statearr_31934_33744 = state_31895__$1;
(statearr_31934_33744[(2)] = inst_31864);

(statearr_31934_33744[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31896 === (5))){
var inst_31825 = cljs.core.deref(mults);
var inst_31826 = cljs.core.vals(inst_31825);
var inst_31827 = cljs.core.seq(inst_31826);
var inst_31828 = inst_31827;
var inst_31829 = null;
var inst_31830 = (0);
var inst_31831 = (0);
var state_31895__$1 = (function (){var statearr_31937 = state_31895;
(statearr_31937[(12)] = inst_31828);

(statearr_31937[(13)] = inst_31829);

(statearr_31937[(14)] = inst_31831);

(statearr_31937[(16)] = inst_31830);

return statearr_31937;
})();
var statearr_31938_33745 = state_31895__$1;
(statearr_31938_33745[(2)] = null);

(statearr_31938_33745[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31896 === (14))){
var state_31895__$1 = state_31895;
var statearr_31942_33746 = state_31895__$1;
(statearr_31942_33746[(2)] = null);

(statearr_31942_33746[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31896 === (16))){
var inst_31842 = (state_31895[(10)]);
var inst_31846 = cljs.core.chunk_first(inst_31842);
var inst_31847 = cljs.core.chunk_rest(inst_31842);
var inst_31848 = cljs.core.count(inst_31846);
var inst_31828 = inst_31847;
var inst_31829 = inst_31846;
var inst_31830 = inst_31848;
var inst_31831 = (0);
var state_31895__$1 = (function (){var statearr_31952 = state_31895;
(statearr_31952[(12)] = inst_31828);

(statearr_31952[(13)] = inst_31829);

(statearr_31952[(14)] = inst_31831);

(statearr_31952[(16)] = inst_31830);

return statearr_31952;
})();
var statearr_31953_33747 = state_31895__$1;
(statearr_31953_33747[(2)] = null);

(statearr_31953_33747[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31896 === (10))){
var inst_31828 = (state_31895[(12)]);
var inst_31829 = (state_31895[(13)]);
var inst_31831 = (state_31895[(14)]);
var inst_31830 = (state_31895[(16)]);
var inst_31836 = cljs.core._nth(inst_31829,inst_31831);
var inst_31837 = cljs.core.async.muxch_STAR_(inst_31836);
var inst_31838 = cljs.core.async.close_BANG_(inst_31837);
var inst_31839 = (inst_31831 + (1));
var tmp31939 = inst_31828;
var tmp31940 = inst_31829;
var tmp31941 = inst_31830;
var inst_31828__$1 = tmp31939;
var inst_31829__$1 = tmp31940;
var inst_31830__$1 = tmp31941;
var inst_31831__$1 = inst_31839;
var state_31895__$1 = (function (){var statearr_31954 = state_31895;
(statearr_31954[(12)] = inst_31828__$1);

(statearr_31954[(13)] = inst_31829__$1);

(statearr_31954[(17)] = inst_31838);

(statearr_31954[(14)] = inst_31831__$1);

(statearr_31954[(16)] = inst_31830__$1);

return statearr_31954;
})();
var statearr_31955_33748 = state_31895__$1;
(statearr_31955_33748[(2)] = null);

(statearr_31955_33748[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31896 === (18))){
var inst_31857 = (state_31895[(2)]);
var state_31895__$1 = state_31895;
var statearr_31959_33749 = state_31895__$1;
(statearr_31959_33749[(2)] = inst_31857);

(statearr_31959_33749[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31896 === (8))){
var inst_31831 = (state_31895[(14)]);
var inst_31830 = (state_31895[(16)]);
var inst_31833 = (inst_31831 < inst_31830);
var inst_31834 = inst_31833;
var state_31895__$1 = state_31895;
if(cljs.core.truth_(inst_31834)){
var statearr_31960_33750 = state_31895__$1;
(statearr_31960_33750[(1)] = (10));

} else {
var statearr_31961_33751 = state_31895__$1;
(statearr_31961_33751[(1)] = (11));

}

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
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__29694__auto__ = null;
var cljs$core$async$state_machine__29694__auto____0 = (function (){
var statearr_31965 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31965[(0)] = cljs$core$async$state_machine__29694__auto__);

(statearr_31965[(1)] = (1));

return statearr_31965;
});
var cljs$core$async$state_machine__29694__auto____1 = (function (state_31895){
while(true){
var ret_value__29695__auto__ = (function (){try{while(true){
var result__29696__auto__ = switch__29693__auto__(state_31895);
if(cljs.core.keyword_identical_QMARK_(result__29696__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29696__auto__;
}
break;
}
}catch (e31967){var ex__29697__auto__ = e31967;
var statearr_31969_33753 = state_31895;
(statearr_31969_33753[(2)] = ex__29697__auto__);


if(cljs.core.seq((state_31895[(4)]))){
var statearr_31970_33754 = state_31895;
(statearr_31970_33754[(1)] = cljs.core.first((state_31895[(4)])));

} else {
throw ex__29697__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29695__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33755 = state_31895;
state_31895 = G__33755;
continue;
} else {
return ret_value__29695__auto__;
}
break;
}
});
cljs$core$async$state_machine__29694__auto__ = function(state_31895){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29694__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29694__auto____1.call(this,state_31895);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29694__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29694__auto____0;
cljs$core$async$state_machine__29694__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29694__auto____1;
return cljs$core$async$state_machine__29694__auto__;
})()
})();
var state__30121__auto__ = (function (){var statearr_31979 = f__30120__auto__();
(statearr_31979[(6)] = c__30119__auto___33716);

return statearr_31979;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30121__auto__);
}));


return p;
}));

(cljs.core.async.pub.cljs$lang$maxFixedArity = 3);

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var G__31981 = arguments.length;
switch (G__31981) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4(p,topic,ch,true);
}));

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_(p,topic,ch,close_QMARK_);
}));

(cljs.core.async.sub.cljs$lang$maxFixedArity = 4);

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_(p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var G__31983 = arguments.length;
switch (G__31983) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_(p);
}));

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_(p,topic);
}));

(cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2);

/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var G__31993 = arguments.length;
switch (G__31993) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3(f,chs,null);
}));

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec(chs);
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var cnt = cljs.core.count(chs__$1);
var rets = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(cnt);
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (i){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,rets.slice((0)));
} else {
return null;
}
});
}),cljs.core.range.cljs$core$IFn$_invoke$arity$1(cnt));
var c__30119__auto___33762 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30120__auto__ = (function (){var switch__29693__auto__ = (function (state_32042){
var state_val_32043 = (state_32042[(1)]);
if((state_val_32043 === (7))){
var state_32042__$1 = state_32042;
var statearr_32047_33763 = state_32042__$1;
(statearr_32047_33763[(2)] = null);

(statearr_32047_33763[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32043 === (1))){
var state_32042__$1 = state_32042;
var statearr_32048_33764 = state_32042__$1;
(statearr_32048_33764[(2)] = null);

(statearr_32048_33764[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32043 === (4))){
var inst_32003 = (state_32042[(7)]);
var inst_32002 = (state_32042[(8)]);
var inst_32005 = (inst_32003 < inst_32002);
var state_32042__$1 = state_32042;
if(cljs.core.truth_(inst_32005)){
var statearr_32049_33769 = state_32042__$1;
(statearr_32049_33769[(1)] = (6));

} else {
var statearr_32050_33770 = state_32042__$1;
(statearr_32050_33770[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32043 === (15))){
var inst_32028 = (state_32042[(9)]);
var inst_32033 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_32028);
var state_32042__$1 = state_32042;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32042__$1,(17),out,inst_32033);
} else {
if((state_val_32043 === (13))){
var inst_32028 = (state_32042[(9)]);
var inst_32028__$1 = (state_32042[(2)]);
var inst_32029 = cljs.core.some(cljs.core.nil_QMARK_,inst_32028__$1);
var state_32042__$1 = (function (){var statearr_32052 = state_32042;
(statearr_32052[(9)] = inst_32028__$1);

return statearr_32052;
})();
if(cljs.core.truth_(inst_32029)){
var statearr_32053_33775 = state_32042__$1;
(statearr_32053_33775[(1)] = (14));

} else {
var statearr_32054_33776 = state_32042__$1;
(statearr_32054_33776[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32043 === (6))){
var state_32042__$1 = state_32042;
var statearr_32057_33780 = state_32042__$1;
(statearr_32057_33780[(2)] = null);

(statearr_32057_33780[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32043 === (17))){
var inst_32035 = (state_32042[(2)]);
var state_32042__$1 = (function (){var statearr_32068 = state_32042;
(statearr_32068[(10)] = inst_32035);

return statearr_32068;
})();
var statearr_32069_33781 = state_32042__$1;
(statearr_32069_33781[(2)] = null);

(statearr_32069_33781[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32043 === (3))){
var inst_32040 = (state_32042[(2)]);
var state_32042__$1 = state_32042;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32042__$1,inst_32040);
} else {
if((state_val_32043 === (12))){
var _ = (function (){var statearr_32071 = state_32042;
(statearr_32071[(4)] = cljs.core.rest((state_32042[(4)])));

return statearr_32071;
})();
var state_32042__$1 = state_32042;
var ex32067 = (state_32042__$1[(2)]);
var statearr_32074_33788 = state_32042__$1;
(statearr_32074_33788[(5)] = ex32067);


if((ex32067 instanceof Object)){
var statearr_32075_33789 = state_32042__$1;
(statearr_32075_33789[(1)] = (11));

(statearr_32075_33789[(5)] = null);

} else {
throw ex32067;

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32043 === (2))){
var inst_32001 = cljs.core.reset_BANG_(dctr,cnt);
var inst_32002 = cnt;
var inst_32003 = (0);
var state_32042__$1 = (function (){var statearr_32083 = state_32042;
(statearr_32083[(7)] = inst_32003);

(statearr_32083[(11)] = inst_32001);

(statearr_32083[(8)] = inst_32002);

return statearr_32083;
})();
var statearr_32084_33795 = state_32042__$1;
(statearr_32084_33795[(2)] = null);

(statearr_32084_33795[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32043 === (11))){
var inst_32007 = (state_32042[(2)]);
var inst_32008 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_32042__$1 = (function (){var statearr_32085 = state_32042;
(statearr_32085[(12)] = inst_32007);

return statearr_32085;
})();
var statearr_32086_33801 = state_32042__$1;
(statearr_32086_33801[(2)] = inst_32008);

(statearr_32086_33801[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32043 === (9))){
var inst_32003 = (state_32042[(7)]);
var _ = (function (){var statearr_32087 = state_32042;
(statearr_32087[(4)] = cljs.core.cons((12),(state_32042[(4)])));

return statearr_32087;
})();
var inst_32014 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_32003) : chs__$1.call(null,inst_32003));
var inst_32015 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_32003) : done.call(null,inst_32003));
var inst_32016 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_32014,inst_32015);
var ___$1 = (function (){var statearr_32089 = state_32042;
(statearr_32089[(4)] = cljs.core.rest((state_32042[(4)])));

return statearr_32089;
})();
var state_32042__$1 = state_32042;
var statearr_32092_33806 = state_32042__$1;
(statearr_32092_33806[(2)] = inst_32016);

(statearr_32092_33806[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32043 === (5))){
var inst_32026 = (state_32042[(2)]);
var state_32042__$1 = (function (){var statearr_32093 = state_32042;
(statearr_32093[(13)] = inst_32026);

return statearr_32093;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32042__$1,(13),dchan);
} else {
if((state_val_32043 === (14))){
var inst_32031 = cljs.core.async.close_BANG_(out);
var state_32042__$1 = state_32042;
var statearr_32094_33808 = state_32042__$1;
(statearr_32094_33808[(2)] = inst_32031);

(statearr_32094_33808[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32043 === (16))){
var inst_32038 = (state_32042[(2)]);
var state_32042__$1 = state_32042;
var statearr_32095_33812 = state_32042__$1;
(statearr_32095_33812[(2)] = inst_32038);

(statearr_32095_33812[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32043 === (10))){
var inst_32003 = (state_32042[(7)]);
var inst_32019 = (state_32042[(2)]);
var inst_32020 = (inst_32003 + (1));
var inst_32003__$1 = inst_32020;
var state_32042__$1 = (function (){var statearr_32097 = state_32042;
(statearr_32097[(7)] = inst_32003__$1);

(statearr_32097[(14)] = inst_32019);

return statearr_32097;
})();
var statearr_32099_33814 = state_32042__$1;
(statearr_32099_33814[(2)] = null);

(statearr_32099_33814[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32043 === (8))){
var inst_32024 = (state_32042[(2)]);
var state_32042__$1 = state_32042;
var statearr_32101_33815 = state_32042__$1;
(statearr_32101_33815[(2)] = inst_32024);

(statearr_32101_33815[(1)] = (5));


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
});
return (function() {
var cljs$core$async$state_machine__29694__auto__ = null;
var cljs$core$async$state_machine__29694__auto____0 = (function (){
var statearr_32102 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32102[(0)] = cljs$core$async$state_machine__29694__auto__);

(statearr_32102[(1)] = (1));

return statearr_32102;
});
var cljs$core$async$state_machine__29694__auto____1 = (function (state_32042){
while(true){
var ret_value__29695__auto__ = (function (){try{while(true){
var result__29696__auto__ = switch__29693__auto__(state_32042);
if(cljs.core.keyword_identical_QMARK_(result__29696__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29696__auto__;
}
break;
}
}catch (e32104){var ex__29697__auto__ = e32104;
var statearr_32105_33824 = state_32042;
(statearr_32105_33824[(2)] = ex__29697__auto__);


if(cljs.core.seq((state_32042[(4)]))){
var statearr_32106_33825 = state_32042;
(statearr_32106_33825[(1)] = cljs.core.first((state_32042[(4)])));

} else {
throw ex__29697__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29695__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33858 = state_32042;
state_32042 = G__33858;
continue;
} else {
return ret_value__29695__auto__;
}
break;
}
});
cljs$core$async$state_machine__29694__auto__ = function(state_32042){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29694__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29694__auto____1.call(this,state_32042);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29694__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29694__auto____0;
cljs$core$async$state_machine__29694__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29694__auto____1;
return cljs$core$async$state_machine__29694__auto__;
})()
})();
var state__30121__auto__ = (function (){var statearr_32107 = f__30120__auto__();
(statearr_32107[(6)] = c__30119__auto___33762);

return statearr_32107;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30121__auto__);
}));


return out;
}));

(cljs.core.async.map.cljs$lang$maxFixedArity = 3);

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var G__32116 = arguments.length;
switch (G__32116) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2(chs,null);
}));

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__30119__auto___33874 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30120__auto__ = (function (){var switch__29693__auto__ = (function (state_32156){
var state_val_32157 = (state_32156[(1)]);
if((state_val_32157 === (7))){
var inst_32127 = (state_32156[(7)]);
var inst_32128 = (state_32156[(8)]);
var inst_32127__$1 = (state_32156[(2)]);
var inst_32128__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_32127__$1,(0),null);
var inst_32129 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_32127__$1,(1),null);
var inst_32136 = (inst_32128__$1 == null);
var state_32156__$1 = (function (){var statearr_32162 = state_32156;
(statearr_32162[(7)] = inst_32127__$1);

(statearr_32162[(9)] = inst_32129);

(statearr_32162[(8)] = inst_32128__$1);

return statearr_32162;
})();
if(cljs.core.truth_(inst_32136)){
var statearr_32163_33885 = state_32156__$1;
(statearr_32163_33885[(1)] = (8));

} else {
var statearr_32164_33886 = state_32156__$1;
(statearr_32164_33886[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32157 === (1))){
var inst_32117 = cljs.core.vec(chs);
var inst_32118 = inst_32117;
var state_32156__$1 = (function (){var statearr_32165 = state_32156;
(statearr_32165[(10)] = inst_32118);

return statearr_32165;
})();
var statearr_32166_33895 = state_32156__$1;
(statearr_32166_33895[(2)] = null);

(statearr_32166_33895[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32157 === (4))){
var inst_32118 = (state_32156[(10)]);
var state_32156__$1 = state_32156;
return cljs.core.async.ioc_alts_BANG_(state_32156__$1,(7),inst_32118);
} else {
if((state_val_32157 === (6))){
var inst_32152 = (state_32156[(2)]);
var state_32156__$1 = state_32156;
var statearr_32169_33900 = state_32156__$1;
(statearr_32169_33900[(2)] = inst_32152);

(statearr_32169_33900[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32157 === (3))){
var inst_32154 = (state_32156[(2)]);
var state_32156__$1 = state_32156;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32156__$1,inst_32154);
} else {
if((state_val_32157 === (2))){
var inst_32118 = (state_32156[(10)]);
var inst_32120 = cljs.core.count(inst_32118);
var inst_32121 = (inst_32120 > (0));
var state_32156__$1 = state_32156;
if(cljs.core.truth_(inst_32121)){
var statearr_32174_33902 = state_32156__$1;
(statearr_32174_33902[(1)] = (4));

} else {
var statearr_32175_33904 = state_32156__$1;
(statearr_32175_33904[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32157 === (11))){
var inst_32118 = (state_32156[(10)]);
var inst_32144 = (state_32156[(2)]);
var tmp32170 = inst_32118;
var inst_32118__$1 = tmp32170;
var state_32156__$1 = (function (){var statearr_32179 = state_32156;
(statearr_32179[(11)] = inst_32144);

(statearr_32179[(10)] = inst_32118__$1);

return statearr_32179;
})();
var statearr_32182_33906 = state_32156__$1;
(statearr_32182_33906[(2)] = null);

(statearr_32182_33906[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32157 === (9))){
var inst_32128 = (state_32156[(8)]);
var state_32156__$1 = state_32156;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32156__$1,(11),out,inst_32128);
} else {
if((state_val_32157 === (5))){
var inst_32150 = cljs.core.async.close_BANG_(out);
var state_32156__$1 = state_32156;
var statearr_32186_33908 = state_32156__$1;
(statearr_32186_33908[(2)] = inst_32150);

(statearr_32186_33908[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32157 === (10))){
var inst_32148 = (state_32156[(2)]);
var state_32156__$1 = state_32156;
var statearr_32187_33912 = state_32156__$1;
(statearr_32187_33912[(2)] = inst_32148);

(statearr_32187_33912[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32157 === (8))){
var inst_32127 = (state_32156[(7)]);
var inst_32129 = (state_32156[(9)]);
var inst_32128 = (state_32156[(8)]);
var inst_32118 = (state_32156[(10)]);
var inst_32138 = (function (){var cs = inst_32118;
var vec__32123 = inst_32127;
var v = inst_32128;
var c = inst_32129;
return (function (p1__32113_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__32113_SHARP_);
});
})();
var inst_32140 = cljs.core.filterv(inst_32138,inst_32118);
var inst_32118__$1 = inst_32140;
var state_32156__$1 = (function (){var statearr_32192 = state_32156;
(statearr_32192[(10)] = inst_32118__$1);

return statearr_32192;
})();
var statearr_32193_33916 = state_32156__$1;
(statearr_32193_33916[(2)] = null);

(statearr_32193_33916[(1)] = (2));


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
});
return (function() {
var cljs$core$async$state_machine__29694__auto__ = null;
var cljs$core$async$state_machine__29694__auto____0 = (function (){
var statearr_32197 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32197[(0)] = cljs$core$async$state_machine__29694__auto__);

(statearr_32197[(1)] = (1));

return statearr_32197;
});
var cljs$core$async$state_machine__29694__auto____1 = (function (state_32156){
while(true){
var ret_value__29695__auto__ = (function (){try{while(true){
var result__29696__auto__ = switch__29693__auto__(state_32156);
if(cljs.core.keyword_identical_QMARK_(result__29696__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29696__auto__;
}
break;
}
}catch (e32209){var ex__29697__auto__ = e32209;
var statearr_32211_33920 = state_32156;
(statearr_32211_33920[(2)] = ex__29697__auto__);


if(cljs.core.seq((state_32156[(4)]))){
var statearr_32213_33922 = state_32156;
(statearr_32213_33922[(1)] = cljs.core.first((state_32156[(4)])));

} else {
throw ex__29697__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29695__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33924 = state_32156;
state_32156 = G__33924;
continue;
} else {
return ret_value__29695__auto__;
}
break;
}
});
cljs$core$async$state_machine__29694__auto__ = function(state_32156){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29694__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29694__auto____1.call(this,state_32156);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29694__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29694__auto____0;
cljs$core$async$state_machine__29694__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29694__auto____1;
return cljs$core$async$state_machine__29694__auto__;
})()
})();
var state__30121__auto__ = (function (){var statearr_32215 = f__30120__auto__();
(statearr_32215[(6)] = c__30119__auto___33874);

return statearr_32215;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30121__auto__);
}));


return out;
}));

(cljs.core.async.merge.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce(cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var G__32221 = arguments.length;
switch (G__32221) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__30119__auto___33930 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30120__auto__ = (function (){var switch__29693__auto__ = (function (state_32246){
var state_val_32247 = (state_32246[(1)]);
if((state_val_32247 === (7))){
var inst_32228 = (state_32246[(7)]);
var inst_32228__$1 = (state_32246[(2)]);
var inst_32229 = (inst_32228__$1 == null);
var inst_32230 = cljs.core.not(inst_32229);
var state_32246__$1 = (function (){var statearr_32248 = state_32246;
(statearr_32248[(7)] = inst_32228__$1);

return statearr_32248;
})();
if(inst_32230){
var statearr_32249_33931 = state_32246__$1;
(statearr_32249_33931[(1)] = (8));

} else {
var statearr_32250_33932 = state_32246__$1;
(statearr_32250_33932[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32247 === (1))){
var inst_32222 = (0);
var state_32246__$1 = (function (){var statearr_32252 = state_32246;
(statearr_32252[(8)] = inst_32222);

return statearr_32252;
})();
var statearr_32253_33937 = state_32246__$1;
(statearr_32253_33937[(2)] = null);

(statearr_32253_33937[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32247 === (4))){
var state_32246__$1 = state_32246;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32246__$1,(7),ch);
} else {
if((state_val_32247 === (6))){
var inst_32241 = (state_32246[(2)]);
var state_32246__$1 = state_32246;
var statearr_32256_33939 = state_32246__$1;
(statearr_32256_33939[(2)] = inst_32241);

(statearr_32256_33939[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32247 === (3))){
var inst_32243 = (state_32246[(2)]);
var inst_32244 = cljs.core.async.close_BANG_(out);
var state_32246__$1 = (function (){var statearr_32258 = state_32246;
(statearr_32258[(9)] = inst_32243);

return statearr_32258;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_32246__$1,inst_32244);
} else {
if((state_val_32247 === (2))){
var inst_32222 = (state_32246[(8)]);
var inst_32224 = (inst_32222 < n);
var state_32246__$1 = state_32246;
if(cljs.core.truth_(inst_32224)){
var statearr_32259_33943 = state_32246__$1;
(statearr_32259_33943[(1)] = (4));

} else {
var statearr_32260_33944 = state_32246__$1;
(statearr_32260_33944[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32247 === (11))){
var inst_32222 = (state_32246[(8)]);
var inst_32233 = (state_32246[(2)]);
var inst_32234 = (inst_32222 + (1));
var inst_32222__$1 = inst_32234;
var state_32246__$1 = (function (){var statearr_32261 = state_32246;
(statearr_32261[(10)] = inst_32233);

(statearr_32261[(8)] = inst_32222__$1);

return statearr_32261;
})();
var statearr_32262_33947 = state_32246__$1;
(statearr_32262_33947[(2)] = null);

(statearr_32262_33947[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32247 === (9))){
var state_32246__$1 = state_32246;
var statearr_32263_33948 = state_32246__$1;
(statearr_32263_33948[(2)] = null);

(statearr_32263_33948[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32247 === (5))){
var state_32246__$1 = state_32246;
var statearr_32264_33949 = state_32246__$1;
(statearr_32264_33949[(2)] = null);

(statearr_32264_33949[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32247 === (10))){
var inst_32238 = (state_32246[(2)]);
var state_32246__$1 = state_32246;
var statearr_32265_33950 = state_32246__$1;
(statearr_32265_33950[(2)] = inst_32238);

(statearr_32265_33950[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32247 === (8))){
var inst_32228 = (state_32246[(7)]);
var state_32246__$1 = state_32246;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32246__$1,(11),out,inst_32228);
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
});
return (function() {
var cljs$core$async$state_machine__29694__auto__ = null;
var cljs$core$async$state_machine__29694__auto____0 = (function (){
var statearr_32267 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_32267[(0)] = cljs$core$async$state_machine__29694__auto__);

(statearr_32267[(1)] = (1));

return statearr_32267;
});
var cljs$core$async$state_machine__29694__auto____1 = (function (state_32246){
while(true){
var ret_value__29695__auto__ = (function (){try{while(true){
var result__29696__auto__ = switch__29693__auto__(state_32246);
if(cljs.core.keyword_identical_QMARK_(result__29696__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29696__auto__;
}
break;
}
}catch (e32268){var ex__29697__auto__ = e32268;
var statearr_32269_33954 = state_32246;
(statearr_32269_33954[(2)] = ex__29697__auto__);


if(cljs.core.seq((state_32246[(4)]))){
var statearr_32270_33955 = state_32246;
(statearr_32270_33955[(1)] = cljs.core.first((state_32246[(4)])));

} else {
throw ex__29697__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29695__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33957 = state_32246;
state_32246 = G__33957;
continue;
} else {
return ret_value__29695__auto__;
}
break;
}
});
cljs$core$async$state_machine__29694__auto__ = function(state_32246){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29694__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29694__auto____1.call(this,state_32246);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29694__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29694__auto____0;
cljs$core$async$state_machine__29694__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29694__auto____1;
return cljs$core$async$state_machine__29694__auto__;
})()
})();
var state__30121__auto__ = (function (){var statearr_32272 = f__30120__auto__();
(statearr_32272[(6)] = c__30119__auto___33930);

return statearr_32272;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30121__auto__);
}));


return out;
}));

(cljs.core.async.take.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async32277 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32277 = (function (f,ch,meta32278){
this.f = f;
this.ch = ch;
this.meta32278 = meta32278;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async32277.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32279,meta32278__$1){
var self__ = this;
var _32279__$1 = this;
return (new cljs.core.async.t_cljs$core$async32277(self__.f,self__.ch,meta32278__$1));
}));

(cljs.core.async.t_cljs$core$async32277.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32279){
var self__ = this;
var _32279__$1 = this;
return self__.meta32278;
}));

(cljs.core.async.t_cljs$core$async32277.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32277.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async32277.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async32277.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32277.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async32288 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32288 = (function (f,ch,meta32278,_,fn1,meta32289){
this.f = f;
this.ch = ch;
this.meta32278 = meta32278;
this._ = _;
this.fn1 = fn1;
this.meta32289 = meta32289;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async32288.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32290,meta32289__$1){
var self__ = this;
var _32290__$1 = this;
return (new cljs.core.async.t_cljs$core$async32288(self__.f,self__.ch,self__.meta32278,self__._,self__.fn1,meta32289__$1));
}));

(cljs.core.async.t_cljs$core$async32288.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32290){
var self__ = this;
var _32290__$1 = this;
return self__.meta32289;
}));

(cljs.core.async.t_cljs$core$async32288.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32288.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
}));

(cljs.core.async.t_cljs$core$async32288.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async32288.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return (function (p1__32274_SHARP_){
var G__32327 = (((p1__32274_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__32274_SHARP_) : self__.f.call(null,p1__32274_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__32327) : f1.call(null,G__32327));
});
}));

(cljs.core.async.t_cljs$core$async32288.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta32278","meta32278",1540271848,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async32277","cljs.core.async/t_cljs$core$async32277",-1939937669,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta32289","meta32289",-1489667965,null)], null);
}));

(cljs.core.async.t_cljs$core$async32288.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async32288.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32288");

(cljs.core.async.t_cljs$core$async32288.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async32288");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async32288.
 */
cljs.core.async.__GT_t_cljs$core$async32288 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async32288(f__$1,ch__$1,meta32278__$1,___$2,fn1__$1,meta32289){
return (new cljs.core.async.t_cljs$core$async32288(f__$1,ch__$1,meta32278__$1,___$2,fn1__$1,meta32289));
});

}

return (new cljs.core.async.t_cljs$core$async32288(self__.f,self__.ch,self__.meta32278,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__4115__auto__ = ret;
if(cljs.core.truth_(and__4115__auto__)){
return (!((cljs.core.deref(ret) == null)));
} else {
return and__4115__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__32328 = cljs.core.deref(ret);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__32328) : self__.f.call(null,G__32328));
})());
} else {
return ret;
}
}));

(cljs.core.async.t_cljs$core$async32277.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32277.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
}));

(cljs.core.async.t_cljs$core$async32277.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta32278","meta32278",1540271848,null)], null);
}));

(cljs.core.async.t_cljs$core$async32277.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async32277.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32277");

(cljs.core.async.t_cljs$core$async32277.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async32277");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async32277.
 */
cljs.core.async.__GT_t_cljs$core$async32277 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async32277(f__$1,ch__$1,meta32278){
return (new cljs.core.async.t_cljs$core$async32277(f__$1,ch__$1,meta32278));
});

}

return (new cljs.core.async.t_cljs$core$async32277(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async32337 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32337 = (function (f,ch,meta32338){
this.f = f;
this.ch = ch;
this.meta32338 = meta32338;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async32337.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32339,meta32338__$1){
var self__ = this;
var _32339__$1 = this;
return (new cljs.core.async.t_cljs$core$async32337(self__.f,self__.ch,meta32338__$1));
}));

(cljs.core.async.t_cljs$core$async32337.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32339){
var self__ = this;
var _32339__$1 = this;
return self__.meta32338;
}));

(cljs.core.async.t_cljs$core$async32337.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32337.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async32337.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32337.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async32337.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32337.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
}));

(cljs.core.async.t_cljs$core$async32337.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta32338","meta32338",375234632,null)], null);
}));

(cljs.core.async.t_cljs$core$async32337.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async32337.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32337");

(cljs.core.async.t_cljs$core$async32337.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async32337");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async32337.
 */
cljs.core.async.__GT_t_cljs$core$async32337 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async32337(f__$1,ch__$1,meta32338){
return (new cljs.core.async.t_cljs$core$async32337(f__$1,ch__$1,meta32338));
});

}

return (new cljs.core.async.t_cljs$core$async32337(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async32349 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32349 = (function (p,ch,meta32350){
this.p = p;
this.ch = ch;
this.meta32350 = meta32350;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async32349.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32351,meta32350__$1){
var self__ = this;
var _32351__$1 = this;
return (new cljs.core.async.t_cljs$core$async32349(self__.p,self__.ch,meta32350__$1));
}));

(cljs.core.async.t_cljs$core$async32349.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32351){
var self__ = this;
var _32351__$1 = this;
return self__.meta32350;
}));

(cljs.core.async.t_cljs$core$async32349.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32349.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async32349.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async32349.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32349.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async32349.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32349.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
}));

(cljs.core.async.t_cljs$core$async32349.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta32350","meta32350",2098952999,null)], null);
}));

(cljs.core.async.t_cljs$core$async32349.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async32349.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32349");

(cljs.core.async.t_cljs$core$async32349.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async32349");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async32349.
 */
cljs.core.async.__GT_t_cljs$core$async32349 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async32349(p__$1,ch__$1,meta32350){
return (new cljs.core.async.t_cljs$core$async32349(p__$1,ch__$1,meta32350));
});

}

return (new cljs.core.async.t_cljs$core$async32349(p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_(cljs.core.complement(p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var G__32391 = arguments.length;
switch (G__32391) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__30119__auto___34012 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30120__auto__ = (function (){var switch__29693__auto__ = (function (state_32432){
var state_val_32433 = (state_32432[(1)]);
if((state_val_32433 === (7))){
var inst_32422 = (state_32432[(2)]);
var state_32432__$1 = state_32432;
var statearr_32440_34015 = state_32432__$1;
(statearr_32440_34015[(2)] = inst_32422);

(statearr_32440_34015[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32433 === (1))){
var state_32432__$1 = state_32432;
var statearr_32442_34016 = state_32432__$1;
(statearr_32442_34016[(2)] = null);

(statearr_32442_34016[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32433 === (4))){
var inst_32406 = (state_32432[(7)]);
var inst_32406__$1 = (state_32432[(2)]);
var inst_32407 = (inst_32406__$1 == null);
var state_32432__$1 = (function (){var statearr_32444 = state_32432;
(statearr_32444[(7)] = inst_32406__$1);

return statearr_32444;
})();
if(cljs.core.truth_(inst_32407)){
var statearr_32445_34021 = state_32432__$1;
(statearr_32445_34021[(1)] = (5));

} else {
var statearr_32446_34023 = state_32432__$1;
(statearr_32446_34023[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32433 === (6))){
var inst_32406 = (state_32432[(7)]);
var inst_32411 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_32406) : p.call(null,inst_32406));
var state_32432__$1 = state_32432;
if(cljs.core.truth_(inst_32411)){
var statearr_32447_34030 = state_32432__$1;
(statearr_32447_34030[(1)] = (8));

} else {
var statearr_32448_34031 = state_32432__$1;
(statearr_32448_34031[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32433 === (3))){
var inst_32424 = (state_32432[(2)]);
var state_32432__$1 = state_32432;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32432__$1,inst_32424);
} else {
if((state_val_32433 === (2))){
var state_32432__$1 = state_32432;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32432__$1,(4),ch);
} else {
if((state_val_32433 === (11))){
var inst_32415 = (state_32432[(2)]);
var state_32432__$1 = state_32432;
var statearr_32455_34033 = state_32432__$1;
(statearr_32455_34033[(2)] = inst_32415);

(statearr_32455_34033[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32433 === (9))){
var state_32432__$1 = state_32432;
var statearr_32458_34036 = state_32432__$1;
(statearr_32458_34036[(2)] = null);

(statearr_32458_34036[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32433 === (5))){
var inst_32409 = cljs.core.async.close_BANG_(out);
var state_32432__$1 = state_32432;
var statearr_32460_34037 = state_32432__$1;
(statearr_32460_34037[(2)] = inst_32409);

(statearr_32460_34037[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32433 === (10))){
var inst_32418 = (state_32432[(2)]);
var state_32432__$1 = (function (){var statearr_32461 = state_32432;
(statearr_32461[(8)] = inst_32418);

return statearr_32461;
})();
var statearr_32462_34042 = state_32432__$1;
(statearr_32462_34042[(2)] = null);

(statearr_32462_34042[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32433 === (8))){
var inst_32406 = (state_32432[(7)]);
var state_32432__$1 = state_32432;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32432__$1,(11),out,inst_32406);
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
});
return (function() {
var cljs$core$async$state_machine__29694__auto__ = null;
var cljs$core$async$state_machine__29694__auto____0 = (function (){
var statearr_32466 = [null,null,null,null,null,null,null,null,null];
(statearr_32466[(0)] = cljs$core$async$state_machine__29694__auto__);

(statearr_32466[(1)] = (1));

return statearr_32466;
});
var cljs$core$async$state_machine__29694__auto____1 = (function (state_32432){
while(true){
var ret_value__29695__auto__ = (function (){try{while(true){
var result__29696__auto__ = switch__29693__auto__(state_32432);
if(cljs.core.keyword_identical_QMARK_(result__29696__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29696__auto__;
}
break;
}
}catch (e32468){var ex__29697__auto__ = e32468;
var statearr_32469_34046 = state_32432;
(statearr_32469_34046[(2)] = ex__29697__auto__);


if(cljs.core.seq((state_32432[(4)]))){
var statearr_32470_34048 = state_32432;
(statearr_32470_34048[(1)] = cljs.core.first((state_32432[(4)])));

} else {
throw ex__29697__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29695__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34051 = state_32432;
state_32432 = G__34051;
continue;
} else {
return ret_value__29695__auto__;
}
break;
}
});
cljs$core$async$state_machine__29694__auto__ = function(state_32432){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29694__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29694__auto____1.call(this,state_32432);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29694__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29694__auto____0;
cljs$core$async$state_machine__29694__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29694__auto____1;
return cljs$core$async$state_machine__29694__auto__;
})()
})();
var state__30121__auto__ = (function (){var statearr_32471 = f__30120__auto__();
(statearr_32471[(6)] = c__30119__auto___34012);

return statearr_32471;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30121__auto__);
}));


return out;
}));

(cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__32478 = arguments.length;
switch (G__32478) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(cljs.core.complement(p),ch,buf_or_n);
}));

(cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3);

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__30119__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30120__auto__ = (function (){var switch__29693__auto__ = (function (state_32543){
var state_val_32544 = (state_32543[(1)]);
if((state_val_32544 === (7))){
var inst_32539 = (state_32543[(2)]);
var state_32543__$1 = state_32543;
var statearr_32547_34063 = state_32543__$1;
(statearr_32547_34063[(2)] = inst_32539);

(statearr_32547_34063[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32544 === (20))){
var inst_32508 = (state_32543[(7)]);
var inst_32520 = (state_32543[(2)]);
var inst_32521 = cljs.core.next(inst_32508);
var inst_32494 = inst_32521;
var inst_32495 = null;
var inst_32496 = (0);
var inst_32497 = (0);
var state_32543__$1 = (function (){var statearr_32548 = state_32543;
(statearr_32548[(8)] = inst_32494);

(statearr_32548[(9)] = inst_32496);

(statearr_32548[(10)] = inst_32495);

(statearr_32548[(11)] = inst_32497);

(statearr_32548[(12)] = inst_32520);

return statearr_32548;
})();
var statearr_32549_34068 = state_32543__$1;
(statearr_32549_34068[(2)] = null);

(statearr_32549_34068[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32544 === (1))){
var state_32543__$1 = state_32543;
var statearr_32550_34072 = state_32543__$1;
(statearr_32550_34072[(2)] = null);

(statearr_32550_34072[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32544 === (4))){
var inst_32483 = (state_32543[(13)]);
var inst_32483__$1 = (state_32543[(2)]);
var inst_32484 = (inst_32483__$1 == null);
var state_32543__$1 = (function (){var statearr_32551 = state_32543;
(statearr_32551[(13)] = inst_32483__$1);

return statearr_32551;
})();
if(cljs.core.truth_(inst_32484)){
var statearr_32552_34075 = state_32543__$1;
(statearr_32552_34075[(1)] = (5));

} else {
var statearr_32553_34081 = state_32543__$1;
(statearr_32553_34081[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32544 === (15))){
var state_32543__$1 = state_32543;
var statearr_32557_34082 = state_32543__$1;
(statearr_32557_34082[(2)] = null);

(statearr_32557_34082[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32544 === (21))){
var state_32543__$1 = state_32543;
var statearr_32558_34084 = state_32543__$1;
(statearr_32558_34084[(2)] = null);

(statearr_32558_34084[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32544 === (13))){
var inst_32494 = (state_32543[(8)]);
var inst_32496 = (state_32543[(9)]);
var inst_32495 = (state_32543[(10)]);
var inst_32497 = (state_32543[(11)]);
var inst_32504 = (state_32543[(2)]);
var inst_32505 = (inst_32497 + (1));
var tmp32554 = inst_32494;
var tmp32555 = inst_32496;
var tmp32556 = inst_32495;
var inst_32494__$1 = tmp32554;
var inst_32495__$1 = tmp32556;
var inst_32496__$1 = tmp32555;
var inst_32497__$1 = inst_32505;
var state_32543__$1 = (function (){var statearr_32559 = state_32543;
(statearr_32559[(14)] = inst_32504);

(statearr_32559[(8)] = inst_32494__$1);

(statearr_32559[(9)] = inst_32496__$1);

(statearr_32559[(10)] = inst_32495__$1);

(statearr_32559[(11)] = inst_32497__$1);

return statearr_32559;
})();
var statearr_32560_34097 = state_32543__$1;
(statearr_32560_34097[(2)] = null);

(statearr_32560_34097[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32544 === (22))){
var state_32543__$1 = state_32543;
var statearr_32561_34099 = state_32543__$1;
(statearr_32561_34099[(2)] = null);

(statearr_32561_34099[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32544 === (6))){
var inst_32483 = (state_32543[(13)]);
var inst_32492 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_32483) : f.call(null,inst_32483));
var inst_32493 = cljs.core.seq(inst_32492);
var inst_32494 = inst_32493;
var inst_32495 = null;
var inst_32496 = (0);
var inst_32497 = (0);
var state_32543__$1 = (function (){var statearr_32562 = state_32543;
(statearr_32562[(8)] = inst_32494);

(statearr_32562[(9)] = inst_32496);

(statearr_32562[(10)] = inst_32495);

(statearr_32562[(11)] = inst_32497);

return statearr_32562;
})();
var statearr_32563_34109 = state_32543__$1;
(statearr_32563_34109[(2)] = null);

(statearr_32563_34109[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32544 === (17))){
var inst_32508 = (state_32543[(7)]);
var inst_32512 = cljs.core.chunk_first(inst_32508);
var inst_32513 = cljs.core.chunk_rest(inst_32508);
var inst_32515 = cljs.core.count(inst_32512);
var inst_32494 = inst_32513;
var inst_32495 = inst_32512;
var inst_32496 = inst_32515;
var inst_32497 = (0);
var state_32543__$1 = (function (){var statearr_32564 = state_32543;
(statearr_32564[(8)] = inst_32494);

(statearr_32564[(9)] = inst_32496);

(statearr_32564[(10)] = inst_32495);

(statearr_32564[(11)] = inst_32497);

return statearr_32564;
})();
var statearr_32565_34117 = state_32543__$1;
(statearr_32565_34117[(2)] = null);

(statearr_32565_34117[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32544 === (3))){
var inst_32541 = (state_32543[(2)]);
var state_32543__$1 = state_32543;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32543__$1,inst_32541);
} else {
if((state_val_32544 === (12))){
var inst_32529 = (state_32543[(2)]);
var state_32543__$1 = state_32543;
var statearr_32567_34119 = state_32543__$1;
(statearr_32567_34119[(2)] = inst_32529);

(statearr_32567_34119[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32544 === (2))){
var state_32543__$1 = state_32543;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32543__$1,(4),in$);
} else {
if((state_val_32544 === (23))){
var inst_32537 = (state_32543[(2)]);
var state_32543__$1 = state_32543;
var statearr_32568_34122 = state_32543__$1;
(statearr_32568_34122[(2)] = inst_32537);

(statearr_32568_34122[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32544 === (19))){
var inst_32524 = (state_32543[(2)]);
var state_32543__$1 = state_32543;
var statearr_32569_34128 = state_32543__$1;
(statearr_32569_34128[(2)] = inst_32524);

(statearr_32569_34128[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32544 === (11))){
var inst_32494 = (state_32543[(8)]);
var inst_32508 = (state_32543[(7)]);
var inst_32508__$1 = cljs.core.seq(inst_32494);
var state_32543__$1 = (function (){var statearr_32570 = state_32543;
(statearr_32570[(7)] = inst_32508__$1);

return statearr_32570;
})();
if(inst_32508__$1){
var statearr_32571_34136 = state_32543__$1;
(statearr_32571_34136[(1)] = (14));

} else {
var statearr_32572_34142 = state_32543__$1;
(statearr_32572_34142[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32544 === (9))){
var inst_32531 = (state_32543[(2)]);
var inst_32532 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_32543__$1 = (function (){var statearr_32573 = state_32543;
(statearr_32573[(15)] = inst_32531);

return statearr_32573;
})();
if(cljs.core.truth_(inst_32532)){
var statearr_32574_34145 = state_32543__$1;
(statearr_32574_34145[(1)] = (21));

} else {
var statearr_32575_34148 = state_32543__$1;
(statearr_32575_34148[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32544 === (5))){
var inst_32486 = cljs.core.async.close_BANG_(out);
var state_32543__$1 = state_32543;
var statearr_32576_34149 = state_32543__$1;
(statearr_32576_34149[(2)] = inst_32486);

(statearr_32576_34149[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32544 === (14))){
var inst_32508 = (state_32543[(7)]);
var inst_32510 = cljs.core.chunked_seq_QMARK_(inst_32508);
var state_32543__$1 = state_32543;
if(inst_32510){
var statearr_32579_34154 = state_32543__$1;
(statearr_32579_34154[(1)] = (17));

} else {
var statearr_32582_34155 = state_32543__$1;
(statearr_32582_34155[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32544 === (16))){
var inst_32527 = (state_32543[(2)]);
var state_32543__$1 = state_32543;
var statearr_32584_34158 = state_32543__$1;
(statearr_32584_34158[(2)] = inst_32527);

(statearr_32584_34158[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32544 === (10))){
var inst_32495 = (state_32543[(10)]);
var inst_32497 = (state_32543[(11)]);
var inst_32502 = cljs.core._nth(inst_32495,inst_32497);
var state_32543__$1 = state_32543;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32543__$1,(13),out,inst_32502);
} else {
if((state_val_32544 === (18))){
var inst_32508 = (state_32543[(7)]);
var inst_32518 = cljs.core.first(inst_32508);
var state_32543__$1 = state_32543;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32543__$1,(20),out,inst_32518);
} else {
if((state_val_32544 === (8))){
var inst_32496 = (state_32543[(9)]);
var inst_32497 = (state_32543[(11)]);
var inst_32499 = (inst_32497 < inst_32496);
var inst_32500 = inst_32499;
var state_32543__$1 = state_32543;
if(cljs.core.truth_(inst_32500)){
var statearr_32587_34163 = state_32543__$1;
(statearr_32587_34163[(1)] = (10));

} else {
var statearr_32588_34164 = state_32543__$1;
(statearr_32588_34164[(1)] = (11));

}

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
}
}
}
}
}
});
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__29694__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__29694__auto____0 = (function (){
var statearr_32589 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32589[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__29694__auto__);

(statearr_32589[(1)] = (1));

return statearr_32589;
});
var cljs$core$async$mapcat_STAR__$_state_machine__29694__auto____1 = (function (state_32543){
while(true){
var ret_value__29695__auto__ = (function (){try{while(true){
var result__29696__auto__ = switch__29693__auto__(state_32543);
if(cljs.core.keyword_identical_QMARK_(result__29696__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29696__auto__;
}
break;
}
}catch (e32590){var ex__29697__auto__ = e32590;
var statearr_32591_34174 = state_32543;
(statearr_32591_34174[(2)] = ex__29697__auto__);


if(cljs.core.seq((state_32543[(4)]))){
var statearr_32592_34176 = state_32543;
(statearr_32592_34176[(1)] = cljs.core.first((state_32543[(4)])));

} else {
throw ex__29697__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29695__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34177 = state_32543;
state_32543 = G__34177;
continue;
} else {
return ret_value__29695__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__29694__auto__ = function(state_32543){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__29694__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__29694__auto____1.call(this,state_32543);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__29694__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__29694__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__29694__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__29694__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__29694__auto__;
})()
})();
var state__30121__auto__ = (function (){var statearr_32594 = f__30120__auto__();
(statearr_32594[(6)] = c__30119__auto__);

return statearr_32594;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30121__auto__);
}));

return c__30119__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__32598 = arguments.length;
switch (G__32598) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3(f,in$,null);
}));

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return out;
}));

(cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var G__32604 = arguments.length;
switch (G__32604) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3(f,out,null);
}));

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return in$;
}));

(cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var G__32609 = arguments.length;
switch (G__32609) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2(ch,null);
}));

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__30119__auto___34201 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30120__auto__ = (function (){var switch__29693__auto__ = (function (state_32635){
var state_val_32636 = (state_32635[(1)]);
if((state_val_32636 === (7))){
var inst_32629 = (state_32635[(2)]);
var state_32635__$1 = state_32635;
var statearr_32637_34202 = state_32635__$1;
(statearr_32637_34202[(2)] = inst_32629);

(statearr_32637_34202[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32636 === (1))){
var inst_32611 = null;
var state_32635__$1 = (function (){var statearr_32638 = state_32635;
(statearr_32638[(7)] = inst_32611);

return statearr_32638;
})();
var statearr_32648_34204 = state_32635__$1;
(statearr_32648_34204[(2)] = null);

(statearr_32648_34204[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32636 === (4))){
var inst_32614 = (state_32635[(8)]);
var inst_32614__$1 = (state_32635[(2)]);
var inst_32615 = (inst_32614__$1 == null);
var inst_32616 = cljs.core.not(inst_32615);
var state_32635__$1 = (function (){var statearr_32652 = state_32635;
(statearr_32652[(8)] = inst_32614__$1);

return statearr_32652;
})();
if(inst_32616){
var statearr_32653_34211 = state_32635__$1;
(statearr_32653_34211[(1)] = (5));

} else {
var statearr_32654_34217 = state_32635__$1;
(statearr_32654_34217[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32636 === (6))){
var state_32635__$1 = state_32635;
var statearr_32655_34220 = state_32635__$1;
(statearr_32655_34220[(2)] = null);

(statearr_32655_34220[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32636 === (3))){
var inst_32631 = (state_32635[(2)]);
var inst_32633 = cljs.core.async.close_BANG_(out);
var state_32635__$1 = (function (){var statearr_32657 = state_32635;
(statearr_32657[(9)] = inst_32631);

return statearr_32657;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_32635__$1,inst_32633);
} else {
if((state_val_32636 === (2))){
var state_32635__$1 = state_32635;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32635__$1,(4),ch);
} else {
if((state_val_32636 === (11))){
var inst_32614 = (state_32635[(8)]);
var inst_32623 = (state_32635[(2)]);
var inst_32611 = inst_32614;
var state_32635__$1 = (function (){var statearr_32658 = state_32635;
(statearr_32658[(10)] = inst_32623);

(statearr_32658[(7)] = inst_32611);

return statearr_32658;
})();
var statearr_32659_34226 = state_32635__$1;
(statearr_32659_34226[(2)] = null);

(statearr_32659_34226[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32636 === (9))){
var inst_32614 = (state_32635[(8)]);
var state_32635__$1 = state_32635;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32635__$1,(11),out,inst_32614);
} else {
if((state_val_32636 === (5))){
var inst_32614 = (state_32635[(8)]);
var inst_32611 = (state_32635[(7)]);
var inst_32618 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_32614,inst_32611);
var state_32635__$1 = state_32635;
if(inst_32618){
var statearr_32661_34235 = state_32635__$1;
(statearr_32661_34235[(1)] = (8));

} else {
var statearr_32662_34240 = state_32635__$1;
(statearr_32662_34240[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32636 === (10))){
var inst_32626 = (state_32635[(2)]);
var state_32635__$1 = state_32635;
var statearr_32663_34242 = state_32635__$1;
(statearr_32663_34242[(2)] = inst_32626);

(statearr_32663_34242[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32636 === (8))){
var inst_32611 = (state_32635[(7)]);
var tmp32660 = inst_32611;
var inst_32611__$1 = tmp32660;
var state_32635__$1 = (function (){var statearr_32665 = state_32635;
(statearr_32665[(7)] = inst_32611__$1);

return statearr_32665;
})();
var statearr_32666_34249 = state_32635__$1;
(statearr_32666_34249[(2)] = null);

(statearr_32666_34249[(1)] = (2));


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
});
return (function() {
var cljs$core$async$state_machine__29694__auto__ = null;
var cljs$core$async$state_machine__29694__auto____0 = (function (){
var statearr_32667 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_32667[(0)] = cljs$core$async$state_machine__29694__auto__);

(statearr_32667[(1)] = (1));

return statearr_32667;
});
var cljs$core$async$state_machine__29694__auto____1 = (function (state_32635){
while(true){
var ret_value__29695__auto__ = (function (){try{while(true){
var result__29696__auto__ = switch__29693__auto__(state_32635);
if(cljs.core.keyword_identical_QMARK_(result__29696__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29696__auto__;
}
break;
}
}catch (e32668){var ex__29697__auto__ = e32668;
var statearr_32671_34254 = state_32635;
(statearr_32671_34254[(2)] = ex__29697__auto__);


if(cljs.core.seq((state_32635[(4)]))){
var statearr_32674_34255 = state_32635;
(statearr_32674_34255[(1)] = cljs.core.first((state_32635[(4)])));

} else {
throw ex__29697__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29695__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34256 = state_32635;
state_32635 = G__34256;
continue;
} else {
return ret_value__29695__auto__;
}
break;
}
});
cljs$core$async$state_machine__29694__auto__ = function(state_32635){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29694__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29694__auto____1.call(this,state_32635);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29694__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29694__auto____0;
cljs$core$async$state_machine__29694__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29694__auto____1;
return cljs$core$async$state_machine__29694__auto__;
})()
})();
var state__30121__auto__ = (function (){var statearr_32679 = f__30120__auto__();
(statearr_32679[(6)] = c__30119__auto___34201);

return statearr_32679;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30121__auto__);
}));


return out;
}));

(cljs.core.async.unique.cljs$lang$maxFixedArity = 2);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__32686 = arguments.length;
switch (G__32686) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__30119__auto___34271 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30120__auto__ = (function (){var switch__29693__auto__ = (function (state_32725){
var state_val_32726 = (state_32725[(1)]);
if((state_val_32726 === (7))){
var inst_32721 = (state_32725[(2)]);
var state_32725__$1 = state_32725;
var statearr_32729_34280 = state_32725__$1;
(statearr_32729_34280[(2)] = inst_32721);

(statearr_32729_34280[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32726 === (1))){
var inst_32687 = (new Array(n));
var inst_32688 = inst_32687;
var inst_32689 = (0);
var state_32725__$1 = (function (){var statearr_32734 = state_32725;
(statearr_32734[(7)] = inst_32688);

(statearr_32734[(8)] = inst_32689);

return statearr_32734;
})();
var statearr_32735_34282 = state_32725__$1;
(statearr_32735_34282[(2)] = null);

(statearr_32735_34282[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32726 === (4))){
var inst_32692 = (state_32725[(9)]);
var inst_32692__$1 = (state_32725[(2)]);
var inst_32693 = (inst_32692__$1 == null);
var inst_32694 = cljs.core.not(inst_32693);
var state_32725__$1 = (function (){var statearr_32737 = state_32725;
(statearr_32737[(9)] = inst_32692__$1);

return statearr_32737;
})();
if(inst_32694){
var statearr_32738_34290 = state_32725__$1;
(statearr_32738_34290[(1)] = (5));

} else {
var statearr_32739_34291 = state_32725__$1;
(statearr_32739_34291[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32726 === (15))){
var inst_32715 = (state_32725[(2)]);
var state_32725__$1 = state_32725;
var statearr_32743_34292 = state_32725__$1;
(statearr_32743_34292[(2)] = inst_32715);

(statearr_32743_34292[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32726 === (13))){
var state_32725__$1 = state_32725;
var statearr_32744_34297 = state_32725__$1;
(statearr_32744_34297[(2)] = null);

(statearr_32744_34297[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32726 === (6))){
var inst_32689 = (state_32725[(8)]);
var inst_32711 = (inst_32689 > (0));
var state_32725__$1 = state_32725;
if(cljs.core.truth_(inst_32711)){
var statearr_32745_34305 = state_32725__$1;
(statearr_32745_34305[(1)] = (12));

} else {
var statearr_32746_34310 = state_32725__$1;
(statearr_32746_34310[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32726 === (3))){
var inst_32723 = (state_32725[(2)]);
var state_32725__$1 = state_32725;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32725__$1,inst_32723);
} else {
if((state_val_32726 === (12))){
var inst_32688 = (state_32725[(7)]);
var inst_32713 = cljs.core.vec(inst_32688);
var state_32725__$1 = state_32725;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32725__$1,(15),out,inst_32713);
} else {
if((state_val_32726 === (2))){
var state_32725__$1 = state_32725;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32725__$1,(4),ch);
} else {
if((state_val_32726 === (11))){
var inst_32705 = (state_32725[(2)]);
var inst_32706 = (new Array(n));
var inst_32688 = inst_32706;
var inst_32689 = (0);
var state_32725__$1 = (function (){var statearr_32756 = state_32725;
(statearr_32756[(10)] = inst_32705);

(statearr_32756[(7)] = inst_32688);

(statearr_32756[(8)] = inst_32689);

return statearr_32756;
})();
var statearr_32757_34317 = state_32725__$1;
(statearr_32757_34317[(2)] = null);

(statearr_32757_34317[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32726 === (9))){
var inst_32688 = (state_32725[(7)]);
var inst_32703 = cljs.core.vec(inst_32688);
var state_32725__$1 = state_32725;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32725__$1,(11),out,inst_32703);
} else {
if((state_val_32726 === (5))){
var inst_32692 = (state_32725[(9)]);
var inst_32688 = (state_32725[(7)]);
var inst_32689 = (state_32725[(8)]);
var inst_32698 = (state_32725[(11)]);
var inst_32697 = (inst_32688[inst_32689] = inst_32692);
var inst_32698__$1 = (inst_32689 + (1));
var inst_32699 = (inst_32698__$1 < n);
var state_32725__$1 = (function (){var statearr_32758 = state_32725;
(statearr_32758[(12)] = inst_32697);

(statearr_32758[(11)] = inst_32698__$1);

return statearr_32758;
})();
if(cljs.core.truth_(inst_32699)){
var statearr_32760_34321 = state_32725__$1;
(statearr_32760_34321[(1)] = (8));

} else {
var statearr_32761_34322 = state_32725__$1;
(statearr_32761_34322[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32726 === (14))){
var inst_32718 = (state_32725[(2)]);
var inst_32719 = cljs.core.async.close_BANG_(out);
var state_32725__$1 = (function (){var statearr_32763 = state_32725;
(statearr_32763[(13)] = inst_32718);

return statearr_32763;
})();
var statearr_32764_34327 = state_32725__$1;
(statearr_32764_34327[(2)] = inst_32719);

(statearr_32764_34327[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32726 === (10))){
var inst_32709 = (state_32725[(2)]);
var state_32725__$1 = state_32725;
var statearr_32765_34332 = state_32725__$1;
(statearr_32765_34332[(2)] = inst_32709);

(statearr_32765_34332[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32726 === (8))){
var inst_32688 = (state_32725[(7)]);
var inst_32698 = (state_32725[(11)]);
var tmp32762 = inst_32688;
var inst_32688__$1 = tmp32762;
var inst_32689 = inst_32698;
var state_32725__$1 = (function (){var statearr_32766 = state_32725;
(statearr_32766[(7)] = inst_32688__$1);

(statearr_32766[(8)] = inst_32689);

return statearr_32766;
})();
var statearr_32769_34333 = state_32725__$1;
(statearr_32769_34333[(2)] = null);

(statearr_32769_34333[(1)] = (2));


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
var cljs$core$async$state_machine__29694__auto__ = null;
var cljs$core$async$state_machine__29694__auto____0 = (function (){
var statearr_32770 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32770[(0)] = cljs$core$async$state_machine__29694__auto__);

(statearr_32770[(1)] = (1));

return statearr_32770;
});
var cljs$core$async$state_machine__29694__auto____1 = (function (state_32725){
while(true){
var ret_value__29695__auto__ = (function (){try{while(true){
var result__29696__auto__ = switch__29693__auto__(state_32725);
if(cljs.core.keyword_identical_QMARK_(result__29696__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29696__auto__;
}
break;
}
}catch (e32771){var ex__29697__auto__ = e32771;
var statearr_32772_34339 = state_32725;
(statearr_32772_34339[(2)] = ex__29697__auto__);


if(cljs.core.seq((state_32725[(4)]))){
var statearr_32774_34343 = state_32725;
(statearr_32774_34343[(1)] = cljs.core.first((state_32725[(4)])));

} else {
throw ex__29697__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29695__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34346 = state_32725;
state_32725 = G__34346;
continue;
} else {
return ret_value__29695__auto__;
}
break;
}
});
cljs$core$async$state_machine__29694__auto__ = function(state_32725){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29694__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29694__auto____1.call(this,state_32725);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29694__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29694__auto____0;
cljs$core$async$state_machine__29694__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29694__auto____1;
return cljs$core$async$state_machine__29694__auto__;
})()
})();
var state__30121__auto__ = (function (){var statearr_32775 = f__30120__auto__();
(statearr_32775[(6)] = c__30119__auto___34271);

return statearr_32775;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30121__auto__);
}));


return out;
}));

(cljs.core.async.partition.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__32778 = arguments.length;
switch (G__32778) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3(f,ch,null);
}));

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__30119__auto___34352 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30120__auto__ = (function (){var switch__29693__auto__ = (function (state_32825){
var state_val_32826 = (state_32825[(1)]);
if((state_val_32826 === (7))){
var inst_32819 = (state_32825[(2)]);
var state_32825__$1 = state_32825;
var statearr_32827_34353 = state_32825__$1;
(statearr_32827_34353[(2)] = inst_32819);

(statearr_32827_34353[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32826 === (1))){
var inst_32780 = [];
var inst_32781 = inst_32780;
var inst_32782 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_32825__$1 = (function (){var statearr_32828 = state_32825;
(statearr_32828[(7)] = inst_32782);

(statearr_32828[(8)] = inst_32781);

return statearr_32828;
})();
var statearr_32829_34354 = state_32825__$1;
(statearr_32829_34354[(2)] = null);

(statearr_32829_34354[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32826 === (4))){
var inst_32785 = (state_32825[(9)]);
var inst_32785__$1 = (state_32825[(2)]);
var inst_32786 = (inst_32785__$1 == null);
var inst_32787 = cljs.core.not(inst_32786);
var state_32825__$1 = (function (){var statearr_32830 = state_32825;
(statearr_32830[(9)] = inst_32785__$1);

return statearr_32830;
})();
if(inst_32787){
var statearr_32831_34355 = state_32825__$1;
(statearr_32831_34355[(1)] = (5));

} else {
var statearr_32832_34356 = state_32825__$1;
(statearr_32832_34356[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32826 === (15))){
var inst_32813 = (state_32825[(2)]);
var state_32825__$1 = state_32825;
var statearr_32834_34361 = state_32825__$1;
(statearr_32834_34361[(2)] = inst_32813);

(statearr_32834_34361[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32826 === (13))){
var state_32825__$1 = state_32825;
var statearr_32835_34362 = state_32825__$1;
(statearr_32835_34362[(2)] = null);

(statearr_32835_34362[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32826 === (6))){
var inst_32781 = (state_32825[(8)]);
var inst_32808 = inst_32781.length;
var inst_32809 = (inst_32808 > (0));
var state_32825__$1 = state_32825;
if(cljs.core.truth_(inst_32809)){
var statearr_32836_34371 = state_32825__$1;
(statearr_32836_34371[(1)] = (12));

} else {
var statearr_32837_34376 = state_32825__$1;
(statearr_32837_34376[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32826 === (3))){
var inst_32821 = (state_32825[(2)]);
var state_32825__$1 = state_32825;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32825__$1,inst_32821);
} else {
if((state_val_32826 === (12))){
var inst_32781 = (state_32825[(8)]);
var inst_32811 = cljs.core.vec(inst_32781);
var state_32825__$1 = state_32825;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32825__$1,(15),out,inst_32811);
} else {
if((state_val_32826 === (2))){
var state_32825__$1 = state_32825;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32825__$1,(4),ch);
} else {
if((state_val_32826 === (11))){
var inst_32785 = (state_32825[(9)]);
var inst_32789 = (state_32825[(10)]);
var inst_32801 = (state_32825[(2)]);
var inst_32802 = [];
var inst_32803 = inst_32802.push(inst_32785);
var inst_32781 = inst_32802;
var inst_32782 = inst_32789;
var state_32825__$1 = (function (){var statearr_32838 = state_32825;
(statearr_32838[(7)] = inst_32782);

(statearr_32838[(11)] = inst_32803);

(statearr_32838[(8)] = inst_32781);

(statearr_32838[(12)] = inst_32801);

return statearr_32838;
})();
var statearr_32840_34382 = state_32825__$1;
(statearr_32840_34382[(2)] = null);

(statearr_32840_34382[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32826 === (9))){
var inst_32781 = (state_32825[(8)]);
var inst_32799 = cljs.core.vec(inst_32781);
var state_32825__$1 = state_32825;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32825__$1,(11),out,inst_32799);
} else {
if((state_val_32826 === (5))){
var inst_32782 = (state_32825[(7)]);
var inst_32785 = (state_32825[(9)]);
var inst_32789 = (state_32825[(10)]);
var inst_32789__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_32785) : f.call(null,inst_32785));
var inst_32791 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_32789__$1,inst_32782);
var inst_32792 = cljs.core.keyword_identical_QMARK_(inst_32782,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_32793 = ((inst_32791) || (inst_32792));
var state_32825__$1 = (function (){var statearr_32841 = state_32825;
(statearr_32841[(10)] = inst_32789__$1);

return statearr_32841;
})();
if(cljs.core.truth_(inst_32793)){
var statearr_32842_34391 = state_32825__$1;
(statearr_32842_34391[(1)] = (8));

} else {
var statearr_32843_34393 = state_32825__$1;
(statearr_32843_34393[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32826 === (14))){
var inst_32816 = (state_32825[(2)]);
var inst_32817 = cljs.core.async.close_BANG_(out);
var state_32825__$1 = (function (){var statearr_32846 = state_32825;
(statearr_32846[(13)] = inst_32816);

return statearr_32846;
})();
var statearr_32847_34395 = state_32825__$1;
(statearr_32847_34395[(2)] = inst_32817);

(statearr_32847_34395[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32826 === (10))){
var inst_32806 = (state_32825[(2)]);
var state_32825__$1 = state_32825;
var statearr_32853_34396 = state_32825__$1;
(statearr_32853_34396[(2)] = inst_32806);

(statearr_32853_34396[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32826 === (8))){
var inst_32785 = (state_32825[(9)]);
var inst_32781 = (state_32825[(8)]);
var inst_32789 = (state_32825[(10)]);
var inst_32796 = inst_32781.push(inst_32785);
var tmp32845 = inst_32781;
var inst_32781__$1 = tmp32845;
var inst_32782 = inst_32789;
var state_32825__$1 = (function (){var statearr_32855 = state_32825;
(statearr_32855[(7)] = inst_32782);

(statearr_32855[(8)] = inst_32781__$1);

(statearr_32855[(14)] = inst_32796);

return statearr_32855;
})();
var statearr_32857_34400 = state_32825__$1;
(statearr_32857_34400[(2)] = null);

(statearr_32857_34400[(1)] = (2));


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
var cljs$core$async$state_machine__29694__auto__ = null;
var cljs$core$async$state_machine__29694__auto____0 = (function (){
var statearr_32859 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32859[(0)] = cljs$core$async$state_machine__29694__auto__);

(statearr_32859[(1)] = (1));

return statearr_32859;
});
var cljs$core$async$state_machine__29694__auto____1 = (function (state_32825){
while(true){
var ret_value__29695__auto__ = (function (){try{while(true){
var result__29696__auto__ = switch__29693__auto__(state_32825);
if(cljs.core.keyword_identical_QMARK_(result__29696__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29696__auto__;
}
break;
}
}catch (e32864){var ex__29697__auto__ = e32864;
var statearr_32866_34406 = state_32825;
(statearr_32866_34406[(2)] = ex__29697__auto__);


if(cljs.core.seq((state_32825[(4)]))){
var statearr_32868_34407 = state_32825;
(statearr_32868_34407[(1)] = cljs.core.first((state_32825[(4)])));

} else {
throw ex__29697__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29695__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34408 = state_32825;
state_32825 = G__34408;
continue;
} else {
return ret_value__29695__auto__;
}
break;
}
});
cljs$core$async$state_machine__29694__auto__ = function(state_32825){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29694__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29694__auto____1.call(this,state_32825);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29694__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29694__auto____0;
cljs$core$async$state_machine__29694__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29694__auto____1;
return cljs$core$async$state_machine__29694__auto__;
})()
})();
var state__30121__auto__ = (function (){var statearr_32893 = f__30120__auto__();
(statearr_32893[(6)] = c__30119__auto___34352);

return statearr_32893;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30121__auto__);
}));


return out;
}));

(cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=cljs.core.async.js.map
