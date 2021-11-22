goog.provide('bfuncs.globals');
bfuncs.globals.notification_queue = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentQueue.EMPTY,cljs.core.PersistentVector.EMPTY));
bfuncs.globals.immediate_next_notification = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
bfuncs.globals.current_notification = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
bfuncs.globals.notification_exiting = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
bfuncs.globals.notification_open = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(false);
bfuncs.globals.open_drawer_state = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(false);
bfuncs.globals.handle_notification_close = (function bfuncs$globals$handle_notification_close(_event,reason){
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(reason,"clickaway")){
return cljs.core.reset_BANG_(bfuncs.globals.notification_open,false);
} else {
return null;
}
});
bfuncs.globals.handle_notification_exited = (function bfuncs$globals$handle_notification_exited(){
cljs.core.reset_BANG_(bfuncs.globals.notification_exiting,false);

var temp__5737__auto__ = cljs.core.deref(bfuncs.globals.immediate_next_notification);
if((temp__5737__auto__ == null)){
var temp__5733__auto__ = cljs.core.peek(cljs.core.deref(bfuncs.globals.notification_queue));
if(cljs.core.truth_(temp__5733__auto__)){
var nn = temp__5733__auto__;
cljs.core.reset_BANG_(bfuncs.globals.current_notification,nn);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(bfuncs.globals.notification_queue,cljs.core.pop);

return cljs.core.reset_BANG_(bfuncs.globals.notification_open,true);
} else {
return cljs.core.reset_BANG_(bfuncs.globals.current_notification,null);
}
} else {
var nn = temp__5737__auto__;
cljs.core.reset_BANG_(bfuncs.globals.current_notification,nn);

cljs.core.reset_BANG_(bfuncs.globals.immediate_next_notification,null);

return cljs.core.reset_BANG_(bfuncs.globals.notification_open,true);
}
});
bfuncs.globals.notification_close_button = reagent.core.as_element.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent_material_ui.core.icon_button.icon_button,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"aria-label","aria-label",455891514),"close",new cljs.core.Keyword(null,"color","color",1011675173),"inherit",new cljs.core.Keyword(null,"class","class",-2030961996),"close",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return cljs.core.reset_BANG_(bfuncs.globals.notification_open,false);
})], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent_material_ui.icons.close_outlined.close_outlined], null)], null));
bfuncs.globals.build_snackbar = (function bfuncs$globals$build_snackbar(p__67067){
var map__67068 = p__67067;
var map__67068__$1 = (((((!((map__67068 == null))))?(((((map__67068.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__67068.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__67068):map__67068);
var props = map__67068__$1;
var message = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67068__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var auto_hide_duration = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__67068__$1,new cljs.core.Keyword(null,"auto-hide-duration","auto-hide-duration",1058363602),(2000));
var on_close = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67068__$1,new cljs.core.Keyword(null,"on-close","on-close",-761178394));
var closeable = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__67068__$1,new cljs.core.Keyword(null,"closeable","closeable",353484469),false);
var key = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__67068__$1,new cljs.core.Keyword(null,"key","key",-1516042587),null);
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67068__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var action = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67068__$1,new cljs.core.Keyword(null,"action","action",-811238024));
var children = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67068__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var handle_close = (cljs.core.truth_(on_close)?(function (event,reason){
return (on_close.cljs$core$IFn$_invoke$arity$3 ? on_close.cljs$core$IFn$_invoke$arity$3(event,reason,bfuncs.globals.notification_open) : on_close.call(null,event,reason,bfuncs.globals.notification_open));
}):bfuncs.globals.handle_notification_close);
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent_material_ui.core.snackbar.snackbar,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(props,new cljs.core.Keyword(null,"closeable","closeable",353484469),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"children","children",-940561982)], 0)),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"open","open",-1763596448),new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"on-close","on-close",-761178394),new cljs.core.Keyword(null,"on-exit","on-exit",1821961613),new cljs.core.Keyword(null,"auto-hide-duration","auto-hide-duration",1058363602),new cljs.core.Keyword(null,"on-exited","on-exited",-274458957),new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.Keyword(null,"action","action",-811238024),new cljs.core.Keyword(null,"message","message",-406056002)],[cljs.core.deref(bfuncs.globals.notification_open),key,handle_close,(function (){
return cljs.core.reset_BANG_(bfuncs.globals.notification_exiting,true);
}),auto_hide_duration,bfuncs.globals.handle_notification_exited,reagent.core.class_names.cljs$core$IFn$_invoke$arity$2("global-notification",class$),(cljs.core.truth_(closeable)?(cljs.core.truth_(action)?reagent.core.as_element.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"<>","<>",1280186386),action,bfuncs.globals.notification_close_button], null)):bfuncs.globals.notification_close_button):action),message])], 0))], null),children);
});
bfuncs.globals.notifier = (function bfuncs$globals$notifier(p__67075){
var map__67076 = p__67075;
var map__67076__$1 = (((((!((map__67076 == null))))?(((((map__67076.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__67076.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__67076):map__67076);
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67076__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var temp__5733__auto__ = cljs.core.deref(bfuncs.globals.current_notification);
if(cljs.core.truth_(temp__5733__auto__)){
var current_props = temp__5733__auto__;
return bfuncs.globals.build_snackbar((cljs.core.truth_(class$)?cljs.core.update.cljs$core$IFn$_invoke$arity$4(current_props,new cljs.core.Keyword(null,"class","class",-2030961996),cljs.core.vector,class$):current_props));
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent_material_ui.core.snackbar.snackbar,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"key","key",-1516042587),null,new cljs.core.Keyword(null,"open","open",-1763596448),cljs.core.deref(bfuncs.globals.notification_open),new cljs.core.Keyword(null,"class","class",-2030961996),class$], null)], null);
}
});
/**
 * Send a notification through the notifier component.
 *   The notification displays as [snackbar props children...].
 *   The following special props can be included:
 *   :immediate => if logical true, any open notifications are closed, and the given notification skips to
 *   the front of the queue.
 *   :closeable => whether the notification should include a close button
 *   :on-close => defines on-close handler for snackbar component taking parameters [event reason open-atom].
 *   The third argument is a reference to the atom controlling the open state of the notification.
 *   :auto-hide-duration => same as snackbar, but defaults to 2000. nil to disable auto-hide. 
 */
bfuncs.globals.notify_BANG_ = (function bfuncs$globals$notify_BANG_(var_args){
var args__4742__auto__ = [];
var len__4736__auto___67142 = arguments.length;
var i__4737__auto___67144 = (0);
while(true){
if((i__4737__auto___67144 < len__4736__auto___67142)){
args__4742__auto__.push((arguments[i__4737__auto___67144]));

var G__67145 = (i__4737__auto___67144 + (1));
i__4737__auto___67144 = G__67145;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return bfuncs.globals.notify_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(bfuncs.globals.notify_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (props,children){
var immediate = new cljs.core.Keyword(null,"immediate","immediate",-1684692069).cljs$core$IFn$_invoke$arity$2(props,false);
var props__$1 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(props,new cljs.core.Keyword(null,"immediate","immediate",-1684692069)),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),Date.now()], null),(cljs.core.truth_(children)?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"children","children",-940561982),children], null):null)], 0));
var open = cljs.core.deref(bfuncs.globals.notification_open);
var exiting = cljs.core.deref(bfuncs.globals.notification_exiting);
if(cljs.core.truth_((function (){var or__4126__auto__ = open;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return exiting;
}
})())){
if(cljs.core.truth_(immediate)){
cljs.core.reset_BANG_(bfuncs.globals.immediate_next_notification,props__$1);

if(cljs.core.truth_(open)){
return cljs.core.reset_BANG_(bfuncs.globals.notification_open,false);
} else {
return null;
}
} else {
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(bfuncs.globals.notification_queue,cljs.core.conj,props__$1);
}
} else {
cljs.core.reset_BANG_(bfuncs.globals.current_notification,props__$1);

return cljs.core.reset_BANG_(bfuncs.globals.notification_open,true);
}
}));

(bfuncs.globals.notify_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(bfuncs.globals.notify_BANG_.cljs$lang$applyTo = (function (seq67078){
var G__67079 = cljs.core.first(seq67078);
var seq67078__$1 = cljs.core.next(seq67078);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__67079,seq67078__$1);
}));


//# sourceMappingURL=bfuncs.globals.js.map
