goog.provide('bfuncs.worker');
var module$bfuncs$jsUtils=shadow.js.require("module$bfuncs$jsUtils", {});
bfuncs.worker.tasks = new cljs.core.PersistentArrayMap(null, 7, ["function-bytes",(function (return$,e__30013__auto__){
var vec__68752 = (function (){var obj68762 = (function (){var obj68760 = e__30013__auto__;
var k68761 = "data";
if((function (){var obj68764 = obj68760;
return (((!((obj68764 == null)))) && (applied_science.js_interop.impl.in_QMARK__STAR_(k68761,obj68764)));
})()){
return (obj68760[k68761]);
} else {
return undefined;
}
})();
var k68763 = "args";
if((function (){var obj68765 = obj68762;
return (((!((obj68765 == null)))) && (applied_science.js_interop.impl.in_QMARK__STAR_(k68763,obj68765)));
})()){
return (obj68762[k68763]);
} else {
return undefined;
}
})();
var vec__68756 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__68752,(0),null);
var f_args = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__68756,(0),null);
var f_body = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__68756,(1),null);
var arity = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__68752,(1),null);
var bytes = module$bfuncs$jsUtils.functionBytes(Function(f_args,f_body),arity);
var G__68767 = bytes;
var G__68768 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var obj68769 = bytes;
var k68770 = "buffer";
if((function (){var obj68771 = obj68769;
return (((!((obj68771 == null)))) && (applied_science.js_interop.impl.in_QMARK__STAR_(k68770,obj68771)));
})()){
return (obj68769[k68770]);
} else {
return undefined;
}
})()], null);
return (return$.cljs$core$IFn$_invoke$arity$2 ? return$.cljs$core$IFn$_invoke$arity$2(G__68767,G__68768) : return$.call(null,G__68767,G__68768));
}),"minterms-bytes",(function (return$,e__30013__auto__){
var vec__68776 = (function (){var obj68787 = (function (){var obj68785 = e__30013__auto__;
var k68786 = "data";
if((function (){var obj68789 = obj68785;
return (((!((obj68789 == null)))) && (applied_science.js_interop.impl.in_QMARK__STAR_(k68786,obj68789)));
})()){
return (obj68785[k68786]);
} else {
return undefined;
}
})();
var k68788 = "args";
if((function (){var obj68790 = obj68787;
return (((!((obj68790 == null)))) && (applied_science.js_interop.impl.in_QMARK__STAR_(k68788,obj68790)));
})()){
return (obj68787[k68788]);
} else {
return undefined;
}
})();
var vec__68780 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__68776,(0),null);
var on_terms = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__68780,(0),null);
var unspecified = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__68780,(1),null);
var arity = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__68776,(1),null);
var bytes = module$bfuncs$jsUtils.functionBytes(({"on":on_terms,"unspecified":unspecified}),arity);
var G__68791 = bytes;
var G__68792 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var obj68793 = bytes;
var k68794 = "buffer";
if((function (){var obj68795 = obj68793;
return (((!((obj68795 == null)))) && (applied_science.js_interop.impl.in_QMARK__STAR_(k68794,obj68795)));
})()){
return (obj68793[k68794]);
} else {
return undefined;
}
})()], null);
return (return$.cljs$core$IFn$_invoke$arity$2 ? return$.cljs$core$IFn$_invoke$arity$2(G__68791,G__68792) : return$.call(null,G__68791,G__68792));
}),"test-task",(function (return$,e__30013__auto__){
var vec__68796 = (function (){var obj68802 = (function (){var obj68800 = e__30013__auto__;
var k68801 = "data";
if((function (){var obj68806 = obj68800;
return (((!((obj68806 == null)))) && (applied_science.js_interop.impl.in_QMARK__STAR_(k68801,obj68806)));
})()){
return (obj68800[k68801]);
} else {
return undefined;
}
})();
var k68803 = "args";
if((function (){var obj68808 = obj68802;
return (((!((obj68808 == null)))) && (applied_science.js_interop.impl.in_QMARK__STAR_(k68803,obj68808)));
})()){
return (obj68802[k68803]);
} else {
return undefined;
}
})();
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__68796,(0),null);
return (return$.cljs$core$IFn$_invoke$arity$1 ? return$.cljs$core$IFn$_invoke$arity$1(x) : return$.call(null,x));
}),"assign-id",(function (_,e__30013__auto__){
var vec__68811 = (function (){var obj68817 = (function (){var obj68815 = e__30013__auto__;
var k68816 = "data";
if((function (){var obj68819 = obj68815;
return (((!((obj68819 == null)))) && (applied_science.js_interop.impl.in_QMARK__STAR_(k68816,obj68819)));
})()){
return (obj68815[k68816]);
} else {
return undefined;
}
})();
var k68818 = "args";
if((function (){var obj68820 = obj68817;
return (((!((obj68820 == null)))) && (applied_science.js_interop.impl.in_QMARK__STAR_(k68818,obj68820)));
})()){
return (obj68817[k68818]);
} else {
return undefined;
}
})();
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__68811,(0),null);
bfuncs.worker.worker_id = id;

return (bfuncs.utils.dbg.cljs$core$IFn$_invoke$arity$2 ? bfuncs.utils.dbg.cljs$core$IFn$_invoke$arity$2("worker assigned id ",id) : bfuncs.utils.dbg.call(null,"worker assigned id ",id));
}),"min-sops",(function (return$,e__30013__auto__){
var vec__68821 = (function (){var obj68827 = (function (){var obj68825 = e__30013__auto__;
var k68826 = "data";
if((function (){var obj68829 = obj68825;
return (((!((obj68829 == null)))) && (applied_science.js_interop.impl.in_QMARK__STAR_(k68826,obj68829)));
})()){
return (obj68825[k68826]);
} else {
return undefined;
}
})();
var k68828 = "args";
if((function (){var obj68830 = obj68827;
return (((!((obj68830 == null)))) && (applied_science.js_interop.impl.in_QMARK__STAR_(k68828,obj68830)));
})()){
return (obj68827[k68828]);
} else {
return undefined;
}
})();
var vars = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__68821,(0),null);
var bytes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__68821,(1),null);
(bfuncs.utils.dbg.cljs$core$IFn$_invoke$arity$2 ? bfuncs.utils.dbg.cljs$core$IFn$_invoke$arity$2("minsops bitbytes: ",bytes) : bfuncs.utils.dbg.call(null,"minsops bitbytes: ",bytes));

var G__68831 = bfuncs.minimization.min_sops(vars,bytes);
return (return$.cljs$core$IFn$_invoke$arity$1 ? return$.cljs$core$IFn$_invoke$arity$1(G__68831) : return$.call(null,G__68831));
}),"min-poss",(function (return$,e__30013__auto__){
var vec__68835 = (function (){var obj68841 = (function (){var obj68839 = e__30013__auto__;
var k68840 = "data";
if((function (){var obj68843 = obj68839;
return (((!((obj68843 == null)))) && (applied_science.js_interop.impl.in_QMARK__STAR_(k68840,obj68843)));
})()){
return (obj68839[k68840]);
} else {
return undefined;
}
})();
var k68842 = "args";
if((function (){var obj68844 = obj68841;
return (((!((obj68844 == null)))) && (applied_science.js_interop.impl.in_QMARK__STAR_(k68842,obj68844)));
})()){
return (obj68841[k68842]);
} else {
return undefined;
}
})();
var vars = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__68835,(0),null);
var bytes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__68835,(1),null);
(bfuncs.utils.dbg.cljs$core$IFn$_invoke$arity$2 ? bfuncs.utils.dbg.cljs$core$IFn$_invoke$arity$2("minposs bitbytes: ",bytes) : bfuncs.utils.dbg.call(null,"minposs bitbytes: ",bytes));

var G__68847 = bfuncs.minimization.min_poss(vars,bytes);
return (return$.cljs$core$IFn$_invoke$arity$1 ? return$.cljs$core$IFn$_invoke$arity$1(G__68847) : return$.call(null,G__68847));
}),"zhegalkin-polynomial",(function (return$,e__30013__auto__){
var vec__68848 = (function (){var obj68860 = (function (){var obj68858 = e__30013__auto__;
var k68859 = "data";
if((function (){var obj68862 = obj68858;
return (((!((obj68862 == null)))) && (applied_science.js_interop.impl.in_QMARK__STAR_(k68859,obj68862)));
})()){
return (obj68858[k68859]);
} else {
return undefined;
}
})();
var k68861 = "args";
if((function (){var obj68863 = obj68860;
return (((!((obj68863 == null)))) && (applied_science.js_interop.impl.in_QMARK__STAR_(k68861,obj68863)));
})()){
return (obj68860[k68861]);
} else {
return undefined;
}
})();
var vars = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__68848,(0),null);
var digit_string = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__68848,(1),null);
var G__68864 = bfuncs.minimization.zhegalkin_polynomial(vars,digit_string);
return (return$.cljs$core$IFn$_invoke$arity$1 ? return$.cljs$core$IFn$_invoke$arity$1(G__68864) : return$.call(null,G__68864));
})], null);
bfuncs.worker.return_fn = (function bfuncs$worker$return_fn(task_id){
return (function() {
var G__68918 = null;
var G__68918__1 = (function (message){
return postMessage(cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"task-id","task-id",-1045480126),task_id,new cljs.core.Keyword(null,"value","value",305978217),message], null)));
});
var G__68918__2 = (function (message,transferrables){
return postMessage(cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"task-id","task-id",-1045480126),task_id,new cljs.core.Keyword(null,"value","value",305978217),message], null)),cljs.core.clj__GT_js(transferrables));
});
G__68918 = function(message,transferrables){
switch(arguments.length){
case 1:
return G__68918__1.call(this,message);
case 2:
return G__68918__2.call(this,message,transferrables);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__68918.cljs$core$IFn$_invoke$arity$1 = G__68918__1;
G__68918.cljs$core$IFn$_invoke$arity$2 = G__68918__2;
return G__68918;
})()
});
bfuncs.worker.dispatch = (function bfuncs$worker$dispatch(event){
(bfuncs.utils.dbg.cljs$core$IFn$_invoke$arity$2 ? bfuncs.utils.dbg.cljs$core$IFn$_invoke$arity$2("worker dispatch event received by worker",bfuncs.worker.worker_id) : bfuncs.utils.dbg.call(null,"worker dispatch event received by worker",bfuncs.worker.worker_id));

(bfuncs.utils.dbg.cljs$core$IFn$_invoke$arity$1 ? bfuncs.utils.dbg.cljs$core$IFn$_invoke$arity$1(event) : bfuncs.utils.dbg.call(null,event));

var task_name = (function (){var obj68872 = (function (){var obj68869 = event;
var k68870 = "data";
if((function (){var obj68874 = obj68869;
return (((!((obj68874 == null)))) && (applied_science.js_interop.impl.in_QMARK__STAR_(k68870,obj68874)));
})()){
return (obj68869[k68870]);
} else {
return undefined;
}
})();
var k68873 = "task";
if((function (){var obj68879 = obj68872;
return (((!((obj68879 == null)))) && (applied_science.js_interop.impl.in_QMARK__STAR_(k68873,obj68879)));
})()){
return (obj68872[k68873]);
} else {
return undefined;
}
})();
var task_id = (function (){var obj68882 = (function (){var obj68880 = event;
var k68881 = "data";
if((function (){var obj68884 = obj68880;
return (((!((obj68884 == null)))) && (applied_science.js_interop.impl.in_QMARK__STAR_(k68881,obj68884)));
})()){
return (obj68880[k68881]);
} else {
return undefined;
}
})();
var k68883 = "task-id";
if((function (){var obj68888 = obj68882;
return (((!((obj68888 == null)))) && (applied_science.js_interop.impl.in_QMARK__STAR_(k68883,obj68888)));
})()){
return (obj68882[k68883]);
} else {
return undefined;
}
})();
try{var temp__5737__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(bfuncs.worker.tasks,task_name);
if((temp__5737__auto__ == null)){
throw (new Error(["Execution error: no such task as ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(task_name)].join('')));
} else {
var t = temp__5737__auto__;
var G__68903 = bfuncs.worker.return_fn(task_id);
var G__68904 = event;
return (t.cljs$core$IFn$_invoke$arity$2 ? t.cljs$core$IFn$_invoke$arity$2(G__68903,G__68904) : t.call(null,G__68903,G__68904));
}
}catch (e68893){if((e68893 instanceof Object)){
var e = e68893;
(bfuncs.utils.dbg.cljs$core$IFn$_invoke$arity$2 ? bfuncs.utils.dbg.cljs$core$IFn$_invoke$arity$2("Error in worker",bfuncs.worker.worker_id) : bfuncs.utils.dbg.call(null,"Error in worker",bfuncs.worker.worker_id));

return postMessage(({"type": "error", "name": (function (){var obj68894 = e;
var k68895 = "name";
if((function (){var obj68896 = obj68894;
return (((!((obj68896 == null)))) && (applied_science.js_interop.impl.in_QMARK__STAR_(k68895,obj68896)));
})()){
return (obj68894[k68895]);
} else {
return undefined;
}
})(), "message": (function (){var obj68897 = e;
var k68898 = "message";
if((function (){var obj68899 = obj68897;
return (((!((obj68899 == null)))) && (applied_science.js_interop.impl.in_QMARK__STAR_(k68898,obj68899)));
})()){
return (obj68897[k68898]);
} else {
return undefined;
}
})(), "error": (function (){var obj__27297__auto__ = e;
var f__27298__auto__ = (obj__27297__auto__["toString"]);
return f__27298__auto__.call(obj__27297__auto__);
})(), "task": task_name, "task-id": task_id, "worker-id": bfuncs.worker.worker_id}));
} else {
throw e68893;

}
}});
bfuncs.worker.init = (function bfuncs$worker$init(){
(bfuncs.utils.dbg.cljs$core$IFn$_invoke$arity$1 ? bfuncs.utils.dbg.cljs$core$IFn$_invoke$arity$1("worker created") : bfuncs.utils.dbg.call(null,"worker created"));

var obj__27297__auto___68922 = self;
var f__27298__auto___68923 = (obj__27297__auto___68922["addEventListener"]);
f__27298__auto___68923.call(obj__27297__auto___68922,"message",bfuncs.worker.dispatch);

return (bfuncs.utils.dbg.cljs$core$IFn$_invoke$arity$1 ? bfuncs.utils.dbg.cljs$core$IFn$_invoke$arity$1(self) : bfuncs.utils.dbg.call(null,self));
});

//# sourceMappingURL=bfuncs.worker.js.map
