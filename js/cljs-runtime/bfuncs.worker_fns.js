goog.provide('bfuncs.worker_fns');
bfuncs.worker_fns.worker_array = [];
bfuncs.worker_fns.create_worker = (function bfuncs$worker_fns$create_worker(){
var id = cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.random_uuid());
var worker = (function (){var G__67860 = (new Worker("/js/worker.js"));
var obj__27297__auto___67872 = G__67860;
var f__27298__auto___67873 = (obj__27297__auto___67872["postMessage"]);
f__27298__auto___67873.call(obj__27297__auto___67872,({"task":"assign-id","task-id":(0),"args":[id]}));

var obj67862_67874 = G__67860;
var obj67863_67875 = (((!((obj67862_67874 == null))))?obj67862_67874:({}));
(obj67863_67875["worker-id"] = id);


return G__67860;
})();
var obj__27297__auto___67876 = bfuncs.worker_fns.worker_array;
var f__27298__auto___67877 = (obj__27297__auto___67876["push"]);
f__27298__auto___67877.call(obj__27297__auto___67876,worker);

return worker;
});
bfuncs.worker_fns.create_worker_channel = (function bfuncs$worker_fns$create_worker_channel(n){
var worker_channel = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var n__4613__auto___67879 = n;
var __67880 = (0);
while(true){
if((__67880 < n__4613__auto___67879)){
cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(worker_channel,bfuncs.worker_fns.create_worker());

var G__67881 = (__67880 + (1));
__67880 = G__67881;
continue;
} else {
}
break;
}

return worker_channel;
});
bfuncs.worker_fns.destroy_workers_BANG_ = (function bfuncs$worker_fns$destroy_workers_BANG_(){
while(true){
var temp__5739__auto__ = (function (){var obj__27297__auto__ = bfuncs.worker_fns.worker_array;
var f__27298__auto__ = (obj__27297__auto__["pop"]);
return f__27298__auto__.call(obj__27297__auto__);
})();
if((temp__5739__auto__ == null)){
return null;
} else {
var worker = temp__5739__auto__;
var obj__27297__auto___67884 = worker;
var f__27298__auto___67885 = (obj__27297__auto___67884["terminate"]);
f__27298__auto___67885.call(obj__27297__auto___67884);

continue;
}
break;
}
});

//# sourceMappingURL=bfuncs.worker_fns.js.map
