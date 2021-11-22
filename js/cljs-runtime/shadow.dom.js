goog.provide('shadow.dom');
shadow.dom.transition_supported_QMARK_ = (((typeof window !== 'undefined'))?goog.style.transition.isSupported():null);

/**
 * @interface
 */
shadow.dom.IElement = function(){};

var shadow$dom$IElement$_to_dom$dyn_34585 = (function (this$){
var x__4428__auto__ = (((this$ == null))?null:this$);
var m__4429__auto__ = (shadow.dom._to_dom[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4429__auto__.call(null,this$));
} else {
var m__4426__auto__ = (shadow.dom._to_dom["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4426__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("IElement.-to-dom",this$);
}
}
});
shadow.dom._to_dom = (function shadow$dom$_to_dom(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$IElement$_to_dom$arity$1 == null)))))){
return this$.shadow$dom$IElement$_to_dom$arity$1(this$);
} else {
return shadow$dom$IElement$_to_dom$dyn_34585(this$);
}
});


/**
 * @interface
 */
shadow.dom.SVGElement = function(){};

var shadow$dom$SVGElement$_to_svg$dyn_34586 = (function (this$){
var x__4428__auto__ = (((this$ == null))?null:this$);
var m__4429__auto__ = (shadow.dom._to_svg[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4429__auto__.call(null,this$));
} else {
var m__4426__auto__ = (shadow.dom._to_svg["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4426__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("SVGElement.-to-svg",this$);
}
}
});
shadow.dom._to_svg = (function shadow$dom$_to_svg(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$SVGElement$_to_svg$arity$1 == null)))))){
return this$.shadow$dom$SVGElement$_to_svg$arity$1(this$);
} else {
return shadow$dom$SVGElement$_to_svg$dyn_34586(this$);
}
});

shadow.dom.lazy_native_coll_seq = (function shadow$dom$lazy_native_coll_seq(coll,idx){
if((idx < coll.length)){
return (new cljs.core.LazySeq(null,(function (){
return cljs.core.cons((coll[idx]),(function (){var G__32988 = coll;
var G__32989 = (idx + (1));
return (shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2 ? shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2(G__32988,G__32989) : shadow.dom.lazy_native_coll_seq.call(null,G__32988,G__32989));
})());
}),null,null));
} else {
return null;
}
});

/**
* @constructor
 * @implements {cljs.core.IIndexed}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IDeref}
 * @implements {shadow.dom.IElement}
*/
shadow.dom.NativeColl = (function (coll){
this.coll = coll;
this.cljs$lang$protocol_mask$partition0$ = 8421394;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(shadow.dom.NativeColl.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
}));

(shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (this$,n){
var self__ = this;
var this$__$1 = this;
return (self__.coll[n]);
}));

(shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (this$,n,not_found){
var self__ = this;
var this$__$1 = this;
var or__4126__auto__ = (self__.coll[n]);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return not_found;
}
}));

(shadow.dom.NativeColl.prototype.cljs$core$ICounted$_count$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll.length;
}));

(shadow.dom.NativeColl.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return shadow.dom.lazy_native_coll_seq(self__.coll,(0));
}));

(shadow.dom.NativeColl.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.dom.NativeColl.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
}));

(shadow.dom.NativeColl.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"coll","coll",-1006698606,null)], null);
}));

(shadow.dom.NativeColl.cljs$lang$type = true);

(shadow.dom.NativeColl.cljs$lang$ctorStr = "shadow.dom/NativeColl");

(shadow.dom.NativeColl.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"shadow.dom/NativeColl");
}));

/**
 * Positional factory function for shadow.dom/NativeColl.
 */
shadow.dom.__GT_NativeColl = (function shadow$dom$__GT_NativeColl(coll){
return (new shadow.dom.NativeColl(coll));
});

shadow.dom.native_coll = (function shadow$dom$native_coll(coll){
return (new shadow.dom.NativeColl(coll));
});
shadow.dom.dom_node = (function shadow$dom$dom_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$IElement$))))?true:false):false)){
return el.shadow$dom$IElement$_to_dom$arity$1(null);
} else {
if(typeof el === 'string'){
return document.createTextNode(el);
} else {
if(typeof el === 'number'){
return document.createTextNode(cljs.core.str.cljs$core$IFn$_invoke$arity$1(el));
} else {
return el;

}
}
}
}
});
shadow.dom.query_one = (function shadow$dom$query_one(var_args){
var G__33036 = arguments.length;
switch (G__33036) {
case 1:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return document.querySelector(sel);
}));

(shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return shadow.dom.dom_node(root).querySelector(sel);
}));

(shadow.dom.query_one.cljs$lang$maxFixedArity = 2);

shadow.dom.query = (function shadow$dom$query(var_args){
var G__33044 = arguments.length;
switch (G__33044) {
case 1:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.query.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return (new shadow.dom.NativeColl(document.querySelectorAll(sel)));
}));

(shadow.dom.query.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(root).querySelectorAll(sel)));
}));

(shadow.dom.query.cljs$lang$maxFixedArity = 2);

shadow.dom.by_id = (function shadow$dom$by_id(var_args){
var G__33047 = arguments.length;
switch (G__33047) {
case 2:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2 = (function (id,el){
return shadow.dom.dom_node(el).getElementById(id);
}));

(shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1 = (function (id){
return document.getElementById(id);
}));

(shadow.dom.by_id.cljs$lang$maxFixedArity = 2);

shadow.dom.build = shadow.dom.dom_node;
shadow.dom.ev_stop = (function shadow$dom$ev_stop(var_args){
var G__33050 = arguments.length;
switch (G__33050) {
case 1:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1 = (function (e){
if(cljs.core.truth_(e.stopPropagation)){
e.stopPropagation();

e.preventDefault();
} else {
(e.cancelBubble = true);

(e.returnValue = false);
}

return e;
}));

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2 = (function (e,el){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
}));

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4 = (function (e,el,scope,owner){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
}));

(shadow.dom.ev_stop.cljs$lang$maxFixedArity = 4);

/**
 * check wether a parent node (or the document) contains the child
 */
shadow.dom.contains_QMARK_ = (function shadow$dom$contains_QMARK_(var_args){
var G__33053 = arguments.length;
switch (G__33053) {
case 1:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1 = (function (el){
return goog.dom.contains(document,shadow.dom.dom_node(el));
}));

(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (parent,el){
return goog.dom.contains(shadow.dom.dom_node(parent),shadow.dom.dom_node(el));
}));

(shadow.dom.contains_QMARK_.cljs$lang$maxFixedArity = 2);

shadow.dom.add_class = (function shadow$dom$add_class(el,cls){
return goog.dom.classlist.add(shadow.dom.dom_node(el),cls);
});
shadow.dom.remove_class = (function shadow$dom$remove_class(el,cls){
return goog.dom.classlist.remove(shadow.dom.dom_node(el),cls);
});
shadow.dom.toggle_class = (function shadow$dom$toggle_class(var_args){
var G__33059 = arguments.length;
switch (G__33059) {
case 2:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2 = (function (el,cls){
return goog.dom.classlist.toggle(shadow.dom.dom_node(el),cls);
}));

(shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3 = (function (el,cls,v){
if(cljs.core.truth_(v)){
return shadow.dom.add_class(el,cls);
} else {
return shadow.dom.remove_class(el,cls);
}
}));

(shadow.dom.toggle_class.cljs$lang$maxFixedArity = 3);

shadow.dom.dom_listen = (cljs.core.truth_((function (){var or__4126__auto__ = (!((typeof document !== 'undefined')));
if(or__4126__auto__){
return or__4126__auto__;
} else {
return document.addEventListener;
}
})())?(function shadow$dom$dom_listen_good(el,ev,handler){
return el.addEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_ie(el,ev,handler){
try{return el.attachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),(function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
}));
}catch (e33065){if((e33065 instanceof Object)){
var e = e33065;
return console.log("didnt support attachEvent",el,e);
} else {
throw e33065;

}
}}));
shadow.dom.dom_listen_remove = (cljs.core.truth_((function (){var or__4126__auto__ = (!((typeof document !== 'undefined')));
if(or__4126__auto__){
return or__4126__auto__;
} else {
return document.removeEventListener;
}
})())?(function shadow$dom$dom_listen_remove_good(el,ev,handler){
return el.removeEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_remove_ie(el,ev,handler){
return el.detachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),handler);
}));
shadow.dom.on_query = (function shadow$dom$on_query(root_el,ev,selector,handler){
var seq__33072 = cljs.core.seq(shadow.dom.query.cljs$core$IFn$_invoke$arity$2(selector,root_el));
var chunk__33073 = null;
var count__33074 = (0);
var i__33075 = (0);
while(true){
if((i__33075 < count__33074)){
var el = chunk__33073.cljs$core$IIndexed$_nth$arity$2(null,i__33075);
var handler_34648__$1 = ((function (seq__33072,chunk__33073,count__33074,i__33075,el){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__33072,chunk__33073,count__33074,i__33075,el))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_34648__$1);


var G__34649 = seq__33072;
var G__34650 = chunk__33073;
var G__34651 = count__33074;
var G__34652 = (i__33075 + (1));
seq__33072 = G__34649;
chunk__33073 = G__34650;
count__33074 = G__34651;
i__33075 = G__34652;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__33072);
if(temp__5735__auto__){
var seq__33072__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__33072__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__33072__$1);
var G__34654 = cljs.core.chunk_rest(seq__33072__$1);
var G__34655 = c__4556__auto__;
var G__34656 = cljs.core.count(c__4556__auto__);
var G__34657 = (0);
seq__33072 = G__34654;
chunk__33073 = G__34655;
count__33074 = G__34656;
i__33075 = G__34657;
continue;
} else {
var el = cljs.core.first(seq__33072__$1);
var handler_34658__$1 = ((function (seq__33072,chunk__33073,count__33074,i__33075,el,seq__33072__$1,temp__5735__auto__){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__33072,chunk__33073,count__33074,i__33075,el,seq__33072__$1,temp__5735__auto__))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_34658__$1);


var G__34659 = cljs.core.next(seq__33072__$1);
var G__34660 = null;
var G__34661 = (0);
var G__34662 = (0);
seq__33072 = G__34659;
chunk__33073 = G__34660;
count__33074 = G__34661;
i__33075 = G__34662;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.on = (function shadow$dom$on(var_args){
var G__33156 = arguments.length;
switch (G__33156) {
case 3:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.on.cljs$core$IFn$_invoke$arity$3 = (function (el,ev,handler){
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4(el,ev,handler,false);
}));

(shadow.dom.on.cljs$core$IFn$_invoke$arity$4 = (function (el,ev,handler,capture){
if(cljs.core.vector_QMARK_(ev)){
return shadow.dom.on_query(el,cljs.core.first(ev),cljs.core.second(ev),handler);
} else {
var handler__$1 = (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});
return shadow.dom.dom_listen(shadow.dom.dom_node(el),cljs.core.name(ev),handler__$1);
}
}));

(shadow.dom.on.cljs$lang$maxFixedArity = 4);

shadow.dom.remove_event_handler = (function shadow$dom$remove_event_handler(el,ev,handler){
return shadow.dom.dom_listen_remove(shadow.dom.dom_node(el),cljs.core.name(ev),handler);
});
shadow.dom.add_event_listeners = (function shadow$dom$add_event_listeners(el,events){
var seq__33172 = cljs.core.seq(events);
var chunk__33173 = null;
var count__33174 = (0);
var i__33175 = (0);
while(true){
if((i__33175 < count__33174)){
var vec__33202 = chunk__33173.cljs$core$IIndexed$_nth$arity$2(null,i__33175);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33202,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33202,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__34668 = seq__33172;
var G__34669 = chunk__33173;
var G__34670 = count__33174;
var G__34671 = (i__33175 + (1));
seq__33172 = G__34668;
chunk__33173 = G__34669;
count__33174 = G__34670;
i__33175 = G__34671;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__33172);
if(temp__5735__auto__){
var seq__33172__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__33172__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__33172__$1);
var G__34672 = cljs.core.chunk_rest(seq__33172__$1);
var G__34673 = c__4556__auto__;
var G__34674 = cljs.core.count(c__4556__auto__);
var G__34675 = (0);
seq__33172 = G__34672;
chunk__33173 = G__34673;
count__33174 = G__34674;
i__33175 = G__34675;
continue;
} else {
var vec__33207 = cljs.core.first(seq__33172__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33207,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33207,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__34676 = cljs.core.next(seq__33172__$1);
var G__34677 = null;
var G__34678 = (0);
var G__34679 = (0);
seq__33172 = G__34676;
chunk__33173 = G__34677;
count__33174 = G__34678;
i__33175 = G__34679;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_style = (function shadow$dom$set_style(el,styles){
var dom = shadow.dom.dom_node(el);
var seq__33226 = cljs.core.seq(styles);
var chunk__33227 = null;
var count__33228 = (0);
var i__33229 = (0);
while(true){
if((i__33229 < count__33228)){
var vec__33259 = chunk__33227.cljs$core$IIndexed$_nth$arity$2(null,i__33229);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33259,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33259,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__34683 = seq__33226;
var G__34684 = chunk__33227;
var G__34685 = count__33228;
var G__34686 = (i__33229 + (1));
seq__33226 = G__34683;
chunk__33227 = G__34684;
count__33228 = G__34685;
i__33229 = G__34686;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__33226);
if(temp__5735__auto__){
var seq__33226__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__33226__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__33226__$1);
var G__34689 = cljs.core.chunk_rest(seq__33226__$1);
var G__34690 = c__4556__auto__;
var G__34691 = cljs.core.count(c__4556__auto__);
var G__34692 = (0);
seq__33226 = G__34689;
chunk__33227 = G__34690;
count__33228 = G__34691;
i__33229 = G__34692;
continue;
} else {
var vec__33265 = cljs.core.first(seq__33226__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33265,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33265,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__34697 = cljs.core.next(seq__33226__$1);
var G__34698 = null;
var G__34699 = (0);
var G__34700 = (0);
seq__33226 = G__34697;
chunk__33227 = G__34698;
count__33228 = G__34699;
i__33229 = G__34700;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_attr_STAR_ = (function shadow$dom$set_attr_STAR_(el,key,value){
var G__33284_34701 = key;
var G__33284_34702__$1 = (((G__33284_34701 instanceof cljs.core.Keyword))?G__33284_34701.fqn:null);
switch (G__33284_34702__$1) {
case "id":
(el.id = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));

break;
case "class":
(el.className = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));

break;
case "for":
(el.htmlFor = value);

break;
case "cellpadding":
el.setAttribute("cellPadding",value);

break;
case "cellspacing":
el.setAttribute("cellSpacing",value);

break;
case "colspan":
el.setAttribute("colSpan",value);

break;
case "frameborder":
el.setAttribute("frameBorder",value);

break;
case "height":
el.setAttribute("height",value);

break;
case "maxlength":
el.setAttribute("maxLength",value);

break;
case "role":
el.setAttribute("role",value);

break;
case "rowspan":
el.setAttribute("rowSpan",value);

break;
case "type":
el.setAttribute("type",value);

break;
case "usemap":
el.setAttribute("useMap",value);

break;
case "valign":
el.setAttribute("vAlign",value);

break;
case "width":
el.setAttribute("width",value);

break;
case "on":
shadow.dom.add_event_listeners(el,value);

break;
case "style":
if((value == null)){
} else {
if(typeof value === 'string'){
el.setAttribute("style",value);
} else {
if(cljs.core.map_QMARK_(value)){
shadow.dom.set_style(el,value);
} else {
goog.style.setStyle(el,value);

}
}
}

break;
default:
var ks_34706 = cljs.core.name(key);
if(cljs.core.truth_((function (){var or__4126__auto__ = goog.string.startsWith(ks_34706,"data-");
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return goog.string.startsWith(ks_34706,"aria-");
}
})())){
el.setAttribute(ks_34706,value);
} else {
(el[ks_34706] = value);
}

}

return el;
});
shadow.dom.set_attrs = (function shadow$dom$set_attrs(el,attrs){
return cljs.core.reduce_kv((function (el__$1,key,value){
shadow.dom.set_attr_STAR_(el__$1,key,value);

return el__$1;
}),shadow.dom.dom_node(el),attrs);
});
shadow.dom.set_attr = (function shadow$dom$set_attr(el,key,value){
return shadow.dom.set_attr_STAR_(shadow.dom.dom_node(el),key,value);
});
shadow.dom.has_class_QMARK_ = (function shadow$dom$has_class_QMARK_(el,cls){
return goog.dom.classlist.contains(shadow.dom.dom_node(el),cls);
});
shadow.dom.merge_class_string = (function shadow$dom$merge_class_string(current,extra_class){
if(cljs.core.seq(current)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(current)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(extra_class)].join('');
} else {
return extra_class;
}
});
shadow.dom.parse_tag = (function shadow$dom$parse_tag(spec){
var spec__$1 = cljs.core.name(spec);
var fdot = spec__$1.indexOf(".");
var fhash = spec__$1.indexOf("#");
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1,null,null], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fdot),null,clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1))),null], null);
} else {
if((fhash > fdot)){
throw ["cant have id after class?",spec__$1].join('');
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1)),fdot),clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);

}
}
}
}
});
shadow.dom.create_dom_node = (function shadow$dom$create_dom_node(tag_def,p__33445){
var map__33449 = p__33445;
var map__33449__$1 = (((((!((map__33449 == null))))?(((((map__33449.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33449.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__33449):map__33449);
var props = map__33449__$1;
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33449__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var tag_props = ({});
var vec__33456 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33456,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33456,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33456,(2),null);
if(cljs.core.truth_(tag_id)){
(tag_props["id"] = tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
(tag_props["class"] = shadow.dom.merge_class_string(class$,tag_classes));
} else {
}

var G__33462 = goog.dom.createDom(tag_name,tag_props);
shadow.dom.set_attrs(G__33462,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(props,new cljs.core.Keyword(null,"class","class",-2030961996)));

return G__33462;
});
shadow.dom.append = (function shadow$dom$append(var_args){
var G__33467 = arguments.length;
switch (G__33467) {
case 1:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.append.cljs$core$IFn$_invoke$arity$1 = (function (node){
if(cljs.core.truth_(node)){
var temp__5735__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5735__auto__)){
var n = temp__5735__auto__;
document.body.appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
}));

(shadow.dom.append.cljs$core$IFn$_invoke$arity$2 = (function (el,node){
if(cljs.core.truth_(node)){
var temp__5735__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5735__auto__)){
var n = temp__5735__auto__;
shadow.dom.dom_node(el).appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
}));

(shadow.dom.append.cljs$lang$maxFixedArity = 2);

shadow.dom.destructure_node = (function shadow$dom$destructure_node(create_fn,p__33481){
var vec__33482 = p__33481;
var seq__33483 = cljs.core.seq(vec__33482);
var first__33484 = cljs.core.first(seq__33483);
var seq__33483__$1 = cljs.core.next(seq__33483);
var nn = first__33484;
var first__33484__$1 = cljs.core.first(seq__33483__$1);
var seq__33483__$2 = cljs.core.next(seq__33483__$1);
var np = first__33484__$1;
var nc = seq__33483__$2;
var node = vec__33482;
if((nn instanceof cljs.core.Keyword)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("invalid dom node",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"node","node",581201198),node], null));
}

if((((np == null)) && ((nc == null)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__33493 = nn;
var G__33494 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__33493,G__33494) : create_fn.call(null,G__33493,G__33494));
})(),cljs.core.List.EMPTY], null);
} else {
if(cljs.core.map_QMARK_(np)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(nn,np) : create_fn.call(null,nn,np)),nc], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__33501 = nn;
var G__33502 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__33501,G__33502) : create_fn.call(null,G__33501,G__33502));
})(),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(nc,np)], null);

}
}
});
shadow.dom.make_dom_node = (function shadow$dom$make_dom_node(structure){
var vec__33510 = shadow.dom.destructure_node(shadow.dom.create_dom_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33510,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33510,(1),null);
var seq__33515_34716 = cljs.core.seq(node_children);
var chunk__33516_34717 = null;
var count__33517_34718 = (0);
var i__33518_34719 = (0);
while(true){
if((i__33518_34719 < count__33517_34718)){
var child_struct_34721 = chunk__33516_34717.cljs$core$IIndexed$_nth$arity$2(null,i__33518_34719);
var children_34722 = shadow.dom.dom_node(child_struct_34721);
if(cljs.core.seq_QMARK_(children_34722)){
var seq__33565_34723 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_34722));
var chunk__33568_34724 = null;
var count__33569_34725 = (0);
var i__33570_34726 = (0);
while(true){
if((i__33570_34726 < count__33569_34725)){
var child_34729 = chunk__33568_34724.cljs$core$IIndexed$_nth$arity$2(null,i__33570_34726);
if(cljs.core.truth_(child_34729)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_34729);


var G__34730 = seq__33565_34723;
var G__34731 = chunk__33568_34724;
var G__34732 = count__33569_34725;
var G__34733 = (i__33570_34726 + (1));
seq__33565_34723 = G__34730;
chunk__33568_34724 = G__34731;
count__33569_34725 = G__34732;
i__33570_34726 = G__34733;
continue;
} else {
var G__34734 = seq__33565_34723;
var G__34735 = chunk__33568_34724;
var G__34736 = count__33569_34725;
var G__34737 = (i__33570_34726 + (1));
seq__33565_34723 = G__34734;
chunk__33568_34724 = G__34735;
count__33569_34725 = G__34736;
i__33570_34726 = G__34737;
continue;
}
} else {
var temp__5735__auto___34738 = cljs.core.seq(seq__33565_34723);
if(temp__5735__auto___34738){
var seq__33565_34739__$1 = temp__5735__auto___34738;
if(cljs.core.chunked_seq_QMARK_(seq__33565_34739__$1)){
var c__4556__auto___34741 = cljs.core.chunk_first(seq__33565_34739__$1);
var G__34742 = cljs.core.chunk_rest(seq__33565_34739__$1);
var G__34743 = c__4556__auto___34741;
var G__34744 = cljs.core.count(c__4556__auto___34741);
var G__34745 = (0);
seq__33565_34723 = G__34742;
chunk__33568_34724 = G__34743;
count__33569_34725 = G__34744;
i__33570_34726 = G__34745;
continue;
} else {
var child_34746 = cljs.core.first(seq__33565_34739__$1);
if(cljs.core.truth_(child_34746)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_34746);


var G__34748 = cljs.core.next(seq__33565_34739__$1);
var G__34749 = null;
var G__34750 = (0);
var G__34751 = (0);
seq__33565_34723 = G__34748;
chunk__33568_34724 = G__34749;
count__33569_34725 = G__34750;
i__33570_34726 = G__34751;
continue;
} else {
var G__34752 = cljs.core.next(seq__33565_34739__$1);
var G__34753 = null;
var G__34754 = (0);
var G__34755 = (0);
seq__33565_34723 = G__34752;
chunk__33568_34724 = G__34753;
count__33569_34725 = G__34754;
i__33570_34726 = G__34755;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_34722);
}


var G__34756 = seq__33515_34716;
var G__34757 = chunk__33516_34717;
var G__34758 = count__33517_34718;
var G__34759 = (i__33518_34719 + (1));
seq__33515_34716 = G__34756;
chunk__33516_34717 = G__34757;
count__33517_34718 = G__34758;
i__33518_34719 = G__34759;
continue;
} else {
var temp__5735__auto___34761 = cljs.core.seq(seq__33515_34716);
if(temp__5735__auto___34761){
var seq__33515_34762__$1 = temp__5735__auto___34761;
if(cljs.core.chunked_seq_QMARK_(seq__33515_34762__$1)){
var c__4556__auto___34763 = cljs.core.chunk_first(seq__33515_34762__$1);
var G__34764 = cljs.core.chunk_rest(seq__33515_34762__$1);
var G__34765 = c__4556__auto___34763;
var G__34766 = cljs.core.count(c__4556__auto___34763);
var G__34767 = (0);
seq__33515_34716 = G__34764;
chunk__33516_34717 = G__34765;
count__33517_34718 = G__34766;
i__33518_34719 = G__34767;
continue;
} else {
var child_struct_34768 = cljs.core.first(seq__33515_34762__$1);
var children_34769 = shadow.dom.dom_node(child_struct_34768);
if(cljs.core.seq_QMARK_(children_34769)){
var seq__33682_34770 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_34769));
var chunk__33684_34771 = null;
var count__33685_34772 = (0);
var i__33686_34773 = (0);
while(true){
if((i__33686_34773 < count__33685_34772)){
var child_34774 = chunk__33684_34771.cljs$core$IIndexed$_nth$arity$2(null,i__33686_34773);
if(cljs.core.truth_(child_34774)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_34774);


var G__34775 = seq__33682_34770;
var G__34776 = chunk__33684_34771;
var G__34777 = count__33685_34772;
var G__34778 = (i__33686_34773 + (1));
seq__33682_34770 = G__34775;
chunk__33684_34771 = G__34776;
count__33685_34772 = G__34777;
i__33686_34773 = G__34778;
continue;
} else {
var G__34779 = seq__33682_34770;
var G__34780 = chunk__33684_34771;
var G__34781 = count__33685_34772;
var G__34782 = (i__33686_34773 + (1));
seq__33682_34770 = G__34779;
chunk__33684_34771 = G__34780;
count__33685_34772 = G__34781;
i__33686_34773 = G__34782;
continue;
}
} else {
var temp__5735__auto___34783__$1 = cljs.core.seq(seq__33682_34770);
if(temp__5735__auto___34783__$1){
var seq__33682_34784__$1 = temp__5735__auto___34783__$1;
if(cljs.core.chunked_seq_QMARK_(seq__33682_34784__$1)){
var c__4556__auto___34785 = cljs.core.chunk_first(seq__33682_34784__$1);
var G__34786 = cljs.core.chunk_rest(seq__33682_34784__$1);
var G__34787 = c__4556__auto___34785;
var G__34788 = cljs.core.count(c__4556__auto___34785);
var G__34789 = (0);
seq__33682_34770 = G__34786;
chunk__33684_34771 = G__34787;
count__33685_34772 = G__34788;
i__33686_34773 = G__34789;
continue;
} else {
var child_34790 = cljs.core.first(seq__33682_34784__$1);
if(cljs.core.truth_(child_34790)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_34790);


var G__34791 = cljs.core.next(seq__33682_34784__$1);
var G__34792 = null;
var G__34793 = (0);
var G__34794 = (0);
seq__33682_34770 = G__34791;
chunk__33684_34771 = G__34792;
count__33685_34772 = G__34793;
i__33686_34773 = G__34794;
continue;
} else {
var G__34795 = cljs.core.next(seq__33682_34784__$1);
var G__34796 = null;
var G__34797 = (0);
var G__34798 = (0);
seq__33682_34770 = G__34795;
chunk__33684_34771 = G__34796;
count__33685_34772 = G__34797;
i__33686_34773 = G__34798;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_34769);
}


var G__34799 = cljs.core.next(seq__33515_34762__$1);
var G__34800 = null;
var G__34801 = (0);
var G__34802 = (0);
seq__33515_34716 = G__34799;
chunk__33516_34717 = G__34800;
count__33517_34718 = G__34801;
i__33518_34719 = G__34802;
continue;
}
} else {
}
}
break;
}

return node;
});
(cljs.core.Keyword.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.Keyword.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$__$1], null));
}));

(cljs.core.PersistentVector.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(this$__$1);
}));

(cljs.core.LazySeq.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_dom,this$__$1);
}));
if(cljs.core.truth_(((typeof HTMLElement) != 'undefined'))){
(HTMLElement.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(HTMLElement.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
}));
} else {
}
if(cljs.core.truth_(((typeof DocumentFragment) != 'undefined'))){
(DocumentFragment.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(DocumentFragment.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
}));
} else {
}
/**
 * clear node children
 */
shadow.dom.reset = (function shadow$dom$reset(node){
return goog.dom.removeChildren(shadow.dom.dom_node(node));
});
shadow.dom.remove = (function shadow$dom$remove(node){
if((((!((node == null))))?(((((node.cljs$lang$protocol_mask$partition0$ & (8388608))) || ((cljs.core.PROTOCOL_SENTINEL === node.cljs$core$ISeqable$))))?true:false):false)){
var seq__33712 = cljs.core.seq(node);
var chunk__33713 = null;
var count__33714 = (0);
var i__33715 = (0);
while(true){
if((i__33715 < count__33714)){
var n = chunk__33713.cljs$core$IIndexed$_nth$arity$2(null,i__33715);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__34807 = seq__33712;
var G__34808 = chunk__33713;
var G__34809 = count__33714;
var G__34810 = (i__33715 + (1));
seq__33712 = G__34807;
chunk__33713 = G__34808;
count__33714 = G__34809;
i__33715 = G__34810;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__33712);
if(temp__5735__auto__){
var seq__33712__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__33712__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__33712__$1);
var G__34811 = cljs.core.chunk_rest(seq__33712__$1);
var G__34812 = c__4556__auto__;
var G__34813 = cljs.core.count(c__4556__auto__);
var G__34814 = (0);
seq__33712 = G__34811;
chunk__33713 = G__34812;
count__33714 = G__34813;
i__33715 = G__34814;
continue;
} else {
var n = cljs.core.first(seq__33712__$1);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__34816 = cljs.core.next(seq__33712__$1);
var G__34817 = null;
var G__34818 = (0);
var G__34819 = (0);
seq__33712 = G__34816;
chunk__33713 = G__34817;
count__33714 = G__34818;
i__33715 = G__34819;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return goog.dom.removeNode(node);
}
});
shadow.dom.replace_node = (function shadow$dom$replace_node(old,new$){
return goog.dom.replaceNode(shadow.dom.dom_node(new$),shadow.dom.dom_node(old));
});
shadow.dom.text = (function shadow$dom$text(var_args){
var G__33729 = arguments.length;
switch (G__33729) {
case 2:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.text.cljs$core$IFn$_invoke$arity$2 = (function (el,new_text){
return (shadow.dom.dom_node(el).innerText = new_text);
}));

(shadow.dom.text.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.dom_node(el).innerText;
}));

(shadow.dom.text.cljs$lang$maxFixedArity = 2);

shadow.dom.check = (function shadow$dom$check(var_args){
var G__33736 = arguments.length;
switch (G__33736) {
case 1:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.check.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2(el,true);
}));

(shadow.dom.check.cljs$core$IFn$_invoke$arity$2 = (function (el,checked){
return (shadow.dom.dom_node(el).checked = checked);
}));

(shadow.dom.check.cljs$lang$maxFixedArity = 2);

shadow.dom.checked_QMARK_ = (function shadow$dom$checked_QMARK_(el){
return shadow.dom.dom_node(el).checked;
});
shadow.dom.form_elements = (function shadow$dom$form_elements(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).elements));
});
shadow.dom.children = (function shadow$dom$children(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).children));
});
shadow.dom.child_nodes = (function shadow$dom$child_nodes(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).childNodes));
});
shadow.dom.attr = (function shadow$dom$attr(var_args){
var G__33813 = arguments.length;
switch (G__33813) {
case 2:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.attr.cljs$core$IFn$_invoke$arity$2 = (function (el,key){
return shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
}));

(shadow.dom.attr.cljs$core$IFn$_invoke$arity$3 = (function (el,key,default$){
var or__4126__auto__ = shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return default$;
}
}));

(shadow.dom.attr.cljs$lang$maxFixedArity = 3);

shadow.dom.del_attr = (function shadow$dom$del_attr(el,key){
return shadow.dom.dom_node(el).removeAttribute(cljs.core.name(key));
});
shadow.dom.data = (function shadow$dom$data(el,key){
return shadow.dom.dom_node(el).getAttribute(["data-",cljs.core.name(key)].join(''));
});
shadow.dom.set_data = (function shadow$dom$set_data(el,key,value){
return shadow.dom.dom_node(el).setAttribute(["data-",cljs.core.name(key)].join(''),cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));
});
shadow.dom.set_html = (function shadow$dom$set_html(node,text){
return (shadow.dom.dom_node(node).innerHTML = text);
});
shadow.dom.get_html = (function shadow$dom$get_html(node){
return shadow.dom.dom_node(node).innerHTML;
});
shadow.dom.fragment = (function shadow$dom$fragment(var_args){
var args__4742__auto__ = [];
var len__4736__auto___34842 = arguments.length;
var i__4737__auto___34843 = (0);
while(true){
if((i__4737__auto___34843 < len__4736__auto___34842)){
args__4742__auto__.push((arguments[i__4737__auto___34843]));

var G__34847 = (i__4737__auto___34843 + (1));
i__4737__auto___34843 = G__34847;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic = (function (nodes){
var fragment = document.createDocumentFragment();
var seq__33842_34848 = cljs.core.seq(nodes);
var chunk__33843_34849 = null;
var count__33844_34850 = (0);
var i__33845_34851 = (0);
while(true){
if((i__33845_34851 < count__33844_34850)){
var node_34852 = chunk__33843_34849.cljs$core$IIndexed$_nth$arity$2(null,i__33845_34851);
fragment.appendChild(shadow.dom._to_dom(node_34852));


var G__34853 = seq__33842_34848;
var G__34854 = chunk__33843_34849;
var G__34855 = count__33844_34850;
var G__34856 = (i__33845_34851 + (1));
seq__33842_34848 = G__34853;
chunk__33843_34849 = G__34854;
count__33844_34850 = G__34855;
i__33845_34851 = G__34856;
continue;
} else {
var temp__5735__auto___34857 = cljs.core.seq(seq__33842_34848);
if(temp__5735__auto___34857){
var seq__33842_34861__$1 = temp__5735__auto___34857;
if(cljs.core.chunked_seq_QMARK_(seq__33842_34861__$1)){
var c__4556__auto___34862 = cljs.core.chunk_first(seq__33842_34861__$1);
var G__34863 = cljs.core.chunk_rest(seq__33842_34861__$1);
var G__34864 = c__4556__auto___34862;
var G__34865 = cljs.core.count(c__4556__auto___34862);
var G__34866 = (0);
seq__33842_34848 = G__34863;
chunk__33843_34849 = G__34864;
count__33844_34850 = G__34865;
i__33845_34851 = G__34866;
continue;
} else {
var node_34867 = cljs.core.first(seq__33842_34861__$1);
fragment.appendChild(shadow.dom._to_dom(node_34867));


var G__34868 = cljs.core.next(seq__33842_34861__$1);
var G__34869 = null;
var G__34870 = (0);
var G__34871 = (0);
seq__33842_34848 = G__34868;
chunk__33843_34849 = G__34869;
count__33844_34850 = G__34870;
i__33845_34851 = G__34871;
continue;
}
} else {
}
}
break;
}

return (new shadow.dom.NativeColl(fragment));
}));

(shadow.dom.fragment.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(shadow.dom.fragment.cljs$lang$applyTo = (function (seq33837){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq33837));
}));

/**
 * given a html string, eval all <script> tags and return the html without the scripts
 * don't do this for everything, only content you trust.
 */
shadow.dom.eval_scripts = (function shadow$dom$eval_scripts(s){
var scripts = cljs.core.re_seq(/<script[^>]*?>(.+?)<\/script>/,s);
var seq__33851_34873 = cljs.core.seq(scripts);
var chunk__33852_34874 = null;
var count__33853_34875 = (0);
var i__33854_34876 = (0);
while(true){
if((i__33854_34876 < count__33853_34875)){
var vec__33871_34881 = chunk__33852_34874.cljs$core$IIndexed$_nth$arity$2(null,i__33854_34876);
var script_tag_34882 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33871_34881,(0),null);
var script_body_34883 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33871_34881,(1),null);
eval(script_body_34883);


var G__34916 = seq__33851_34873;
var G__34917 = chunk__33852_34874;
var G__34918 = count__33853_34875;
var G__34919 = (i__33854_34876 + (1));
seq__33851_34873 = G__34916;
chunk__33852_34874 = G__34917;
count__33853_34875 = G__34918;
i__33854_34876 = G__34919;
continue;
} else {
var temp__5735__auto___34920 = cljs.core.seq(seq__33851_34873);
if(temp__5735__auto___34920){
var seq__33851_34921__$1 = temp__5735__auto___34920;
if(cljs.core.chunked_seq_QMARK_(seq__33851_34921__$1)){
var c__4556__auto___34922 = cljs.core.chunk_first(seq__33851_34921__$1);
var G__34923 = cljs.core.chunk_rest(seq__33851_34921__$1);
var G__34924 = c__4556__auto___34922;
var G__34925 = cljs.core.count(c__4556__auto___34922);
var G__34926 = (0);
seq__33851_34873 = G__34923;
chunk__33852_34874 = G__34924;
count__33853_34875 = G__34925;
i__33854_34876 = G__34926;
continue;
} else {
var vec__33878_34930 = cljs.core.first(seq__33851_34921__$1);
var script_tag_34931 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33878_34930,(0),null);
var script_body_34932 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33878_34930,(1),null);
eval(script_body_34932);


var G__34933 = cljs.core.next(seq__33851_34921__$1);
var G__34934 = null;
var G__34935 = (0);
var G__34936 = (0);
seq__33851_34873 = G__34933;
chunk__33852_34874 = G__34934;
count__33853_34875 = G__34935;
i__33854_34876 = G__34936;
continue;
}
} else {
}
}
break;
}

return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (s__$1,p__33891){
var vec__33892 = p__33891;
var script_tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33892,(0),null);
var script_body = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33892,(1),null);
return clojure.string.replace(s__$1,script_tag,"");
}),s,scripts);
});
shadow.dom.str__GT_fragment = (function shadow$dom$str__GT_fragment(s){
var el = document.createElement("div");
(el.innerHTML = s);

return (new shadow.dom.NativeColl(goog.dom.childrenToNode_(document,el)));
});
shadow.dom.node_name = (function shadow$dom$node_name(el){
return shadow.dom.dom_node(el).nodeName;
});
shadow.dom.ancestor_by_class = (function shadow$dom$ancestor_by_class(el,cls){
return goog.dom.getAncestorByClass(shadow.dom.dom_node(el),cls);
});
shadow.dom.ancestor_by_tag = (function shadow$dom$ancestor_by_tag(var_args){
var G__33958 = arguments.length;
switch (G__33958) {
case 2:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2 = (function (el,tag){
return goog.dom.getAncestorByTagNameAndClass(shadow.dom.dom_node(el),cljs.core.name(tag));
}));

(shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3 = (function (el,tag,cls){
return goog.dom.getAncestorByTagNameAndClass(shadow.dom.dom_node(el),cljs.core.name(tag),cljs.core.name(cls));
}));

(shadow.dom.ancestor_by_tag.cljs$lang$maxFixedArity = 3);

shadow.dom.get_value = (function shadow$dom$get_value(dom){
return goog.dom.forms.getValue(shadow.dom.dom_node(dom));
});
shadow.dom.set_value = (function shadow$dom$set_value(dom,value){
return goog.dom.forms.setValue(shadow.dom.dom_node(dom),value);
});
shadow.dom.px = (function shadow$dom$px(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1((value | (0))),"px"].join('');
});
shadow.dom.pct = (function shadow$dom$pct(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(value),"%"].join('');
});
shadow.dom.remove_style_STAR_ = (function shadow$dom$remove_style_STAR_(el,style){
return el.style.removeProperty(cljs.core.name(style));
});
shadow.dom.remove_style = (function shadow$dom$remove_style(el,style){
var el__$1 = shadow.dom.dom_node(el);
return shadow.dom.remove_style_STAR_(el__$1,style);
});
shadow.dom.remove_styles = (function shadow$dom$remove_styles(el,style_keys){
var el__$1 = shadow.dom.dom_node(el);
var seq__33970 = cljs.core.seq(style_keys);
var chunk__33971 = null;
var count__33972 = (0);
var i__33973 = (0);
while(true){
if((i__33973 < count__33972)){
var it = chunk__33971.cljs$core$IIndexed$_nth$arity$2(null,i__33973);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__34938 = seq__33970;
var G__34939 = chunk__33971;
var G__34940 = count__33972;
var G__34941 = (i__33973 + (1));
seq__33970 = G__34938;
chunk__33971 = G__34939;
count__33972 = G__34940;
i__33973 = G__34941;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__33970);
if(temp__5735__auto__){
var seq__33970__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__33970__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__33970__$1);
var G__34942 = cljs.core.chunk_rest(seq__33970__$1);
var G__34943 = c__4556__auto__;
var G__34944 = cljs.core.count(c__4556__auto__);
var G__34945 = (0);
seq__33970 = G__34942;
chunk__33971 = G__34943;
count__33972 = G__34944;
i__33973 = G__34945;
continue;
} else {
var it = cljs.core.first(seq__33970__$1);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__34946 = cljs.core.next(seq__33970__$1);
var G__34947 = null;
var G__34948 = (0);
var G__34949 = (0);
seq__33970 = G__34946;
chunk__33971 = G__34947;
count__33972 = G__34948;
i__33973 = G__34949;
continue;
}
} else {
return null;
}
}
break;
}
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Coordinate = (function (x,y,__meta,__extmap,__hash){
this.x = x;
this.y = y;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4380__auto__,k__4381__auto__){
var self__ = this;
var this__4380__auto____$1 = this;
return this__4380__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4381__auto__,null);
}));

(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4382__auto__,k33985,else__4383__auto__){
var self__ = this;
var this__4382__auto____$1 = this;
var G__33996 = k33985;
var G__33996__$1 = (((G__33996 instanceof cljs.core.Keyword))?G__33996.fqn:null);
switch (G__33996__$1) {
case "x":
return self__.x;

break;
case "y":
return self__.y;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k33985,else__4383__auto__);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4399__auto__,f__4400__auto__,init__4401__auto__){
var self__ = this;
var this__4399__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4402__auto__,p__34003){
var vec__34006 = p__34003;
var k__4403__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34006,(0),null);
var v__4404__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34006,(1),null);
return (f__4400__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4400__auto__.cljs$core$IFn$_invoke$arity$3(ret__4402__auto__,k__4403__auto__,v__4404__auto__) : f__4400__auto__.call(null,ret__4402__auto__,k__4403__auto__,v__4404__auto__));
}),init__4401__auto__,this__4399__auto____$1);
}));

(shadow.dom.Coordinate.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4394__auto__,writer__4395__auto__,opts__4396__auto__){
var self__ = this;
var this__4394__auto____$1 = this;
var pr_pair__4397__auto__ = (function (keyval__4398__auto__){
return cljs.core.pr_sequential_writer(writer__4395__auto__,cljs.core.pr_writer,""," ","",opts__4396__auto__,keyval__4398__auto__);
});
return cljs.core.pr_sequential_writer(writer__4395__auto__,pr_pair__4397__auto__,"#shadow.dom.Coordinate{",", ","}",opts__4396__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"x","x",2099068185),self__.x],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"y","y",-1757859776),self__.y],null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__33984){
var self__ = this;
var G__33984__$1 = this;
return (new cljs.core.RecordIter((0),G__33984__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4378__auto__){
var self__ = this;
var this__4378__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4375__auto__){
var self__ = this;
var this__4375__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4384__auto__){
var self__ = this;
var this__4384__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4376__auto__){
var self__ = this;
var this__4376__auto____$1 = this;
var h__4238__auto__ = self__.__hash;
if((!((h__4238__auto__ == null)))){
return h__4238__auto__;
} else {
var h__4238__auto____$1 = (function (coll__4377__auto__){
return (145542109 ^ cljs.core.hash_unordered_coll(coll__4377__auto__));
})(this__4376__auto____$1);
(self__.__hash = h__4238__auto____$1);

return h__4238__auto____$1;
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this33986,other33987){
var self__ = this;
var this33986__$1 = this;
return (((!((other33987 == null)))) && ((this33986__$1.constructor === other33987.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this33986__$1.x,other33987.x)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this33986__$1.y,other33987.y)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this33986__$1.__extmap,other33987.__extmap)));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4389__auto__,k__4390__auto__){
var self__ = this;
var this__4389__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"y","y",-1757859776),null,new cljs.core.Keyword(null,"x","x",2099068185),null], null), null),k__4390__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4389__auto____$1),self__.__meta),k__4390__auto__);
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4390__auto__)),null));
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4387__auto__,k__4388__auto__,G__33984){
var self__ = this;
var this__4387__auto____$1 = this;
var pred__34165 = cljs.core.keyword_identical_QMARK_;
var expr__34166 = k__4388__auto__;
if(cljs.core.truth_((pred__34165.cljs$core$IFn$_invoke$arity$2 ? pred__34165.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"x","x",2099068185),expr__34166) : pred__34165.call(null,new cljs.core.Keyword(null,"x","x",2099068185),expr__34166)))){
return (new shadow.dom.Coordinate(G__33984,self__.y,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__34165.cljs$core$IFn$_invoke$arity$2 ? pred__34165.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"y","y",-1757859776),expr__34166) : pred__34165.call(null,new cljs.core.Keyword(null,"y","y",-1757859776),expr__34166)))){
return (new shadow.dom.Coordinate(self__.x,G__33984,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4388__auto__,G__33984),null));
}
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4392__auto__){
var self__ = this;
var this__4392__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"x","x",2099068185),self__.x,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"y","y",-1757859776),self__.y,null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4379__auto__,G__33984){
var self__ = this;
var this__4379__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,G__33984,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4385__auto__,entry__4386__auto__){
var self__ = this;
var this__4385__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4386__auto__)){
return this__4385__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__4386__auto__,(0)),cljs.core._nth(entry__4386__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4385__auto____$1,entry__4386__auto__);
}
}));

(shadow.dom.Coordinate.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.Symbol(null,"y","y",-117328249,null)], null);
}));

(shadow.dom.Coordinate.cljs$lang$type = true);

(shadow.dom.Coordinate.cljs$lang$ctorPrSeq = (function (this__4423__auto__){
return (new cljs.core.List(null,"shadow.dom/Coordinate",null,(1),null));
}));

(shadow.dom.Coordinate.cljs$lang$ctorPrWriter = (function (this__4423__auto__,writer__4424__auto__){
return cljs.core._write(writer__4424__auto__,"shadow.dom/Coordinate");
}));

/**
 * Positional factory function for shadow.dom/Coordinate.
 */
shadow.dom.__GT_Coordinate = (function shadow$dom$__GT_Coordinate(x,y){
return (new shadow.dom.Coordinate(x,y,null,null,null));
});

/**
 * Factory function for shadow.dom/Coordinate, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Coordinate = (function shadow$dom$map__GT_Coordinate(G__33990){
var extmap__4419__auto__ = (function (){var G__34186 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__33990,new cljs.core.Keyword(null,"x","x",2099068185),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"y","y",-1757859776)], 0));
if(cljs.core.record_QMARK_(G__33990)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__34186);
} else {
return G__34186;
}
})();
return (new shadow.dom.Coordinate(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(G__33990),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(G__33990),null,cljs.core.not_empty(extmap__4419__auto__),null));
});

shadow.dom.get_position = (function shadow$dom$get_position(el){
var pos = goog.style.getPosition(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_client_position = (function shadow$dom$get_client_position(el){
var pos = goog.style.getClientPosition(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_page_offset = (function shadow$dom$get_page_offset(el){
var pos = goog.style.getPageOffset(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Size = (function (w,h,__meta,__extmap,__hash){
this.w = w;
this.h = h;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4380__auto__,k__4381__auto__){
var self__ = this;
var this__4380__auto____$1 = this;
return this__4380__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4381__auto__,null);
}));

(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4382__auto__,k34214,else__4383__auto__){
var self__ = this;
var this__4382__auto____$1 = this;
var G__34241 = k34214;
var G__34241__$1 = (((G__34241 instanceof cljs.core.Keyword))?G__34241.fqn:null);
switch (G__34241__$1) {
case "w":
return self__.w;

break;
case "h":
return self__.h;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k34214,else__4383__auto__);

}
}));

(shadow.dom.Size.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4399__auto__,f__4400__auto__,init__4401__auto__){
var self__ = this;
var this__4399__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4402__auto__,p__34250){
var vec__34251 = p__34250;
var k__4403__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34251,(0),null);
var v__4404__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34251,(1),null);
return (f__4400__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4400__auto__.cljs$core$IFn$_invoke$arity$3(ret__4402__auto__,k__4403__auto__,v__4404__auto__) : f__4400__auto__.call(null,ret__4402__auto__,k__4403__auto__,v__4404__auto__));
}),init__4401__auto__,this__4399__auto____$1);
}));

(shadow.dom.Size.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4394__auto__,writer__4395__auto__,opts__4396__auto__){
var self__ = this;
var this__4394__auto____$1 = this;
var pr_pair__4397__auto__ = (function (keyval__4398__auto__){
return cljs.core.pr_sequential_writer(writer__4395__auto__,cljs.core.pr_writer,""," ","",opts__4396__auto__,keyval__4398__auto__);
});
return cljs.core.pr_sequential_writer(writer__4395__auto__,pr_pair__4397__auto__,"#shadow.dom.Size{",", ","}",opts__4396__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"w","w",354169001),self__.w],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"h","h",1109658740),self__.h],null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__34213){
var self__ = this;
var G__34213__$1 = this;
return (new cljs.core.RecordIter((0),G__34213__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"w","w",354169001),new cljs.core.Keyword(null,"h","h",1109658740)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Size.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4378__auto__){
var self__ = this;
var this__4378__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Size.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4375__auto__){
var self__ = this;
var this__4375__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4384__auto__){
var self__ = this;
var this__4384__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4376__auto__){
var self__ = this;
var this__4376__auto____$1 = this;
var h__4238__auto__ = self__.__hash;
if((!((h__4238__auto__ == null)))){
return h__4238__auto__;
} else {
var h__4238__auto____$1 = (function (coll__4377__auto__){
return (-1228019642 ^ cljs.core.hash_unordered_coll(coll__4377__auto__));
})(this__4376__auto____$1);
(self__.__hash = h__4238__auto____$1);

return h__4238__auto____$1;
}
}));

(shadow.dom.Size.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this34215,other34216){
var self__ = this;
var this34215__$1 = this;
return (((!((other34216 == null)))) && ((this34215__$1.constructor === other34216.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this34215__$1.w,other34216.w)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this34215__$1.h,other34216.h)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this34215__$1.__extmap,other34216.__extmap)));
}));

(shadow.dom.Size.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4389__auto__,k__4390__auto__){
var self__ = this;
var this__4389__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"w","w",354169001),null,new cljs.core.Keyword(null,"h","h",1109658740),null], null), null),k__4390__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4389__auto____$1),self__.__meta),k__4390__auto__);
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4390__auto__)),null));
}
}));

(shadow.dom.Size.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4387__auto__,k__4388__auto__,G__34213){
var self__ = this;
var this__4387__auto____$1 = this;
var pred__34312 = cljs.core.keyword_identical_QMARK_;
var expr__34313 = k__4388__auto__;
if(cljs.core.truth_((pred__34312.cljs$core$IFn$_invoke$arity$2 ? pred__34312.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"w","w",354169001),expr__34313) : pred__34312.call(null,new cljs.core.Keyword(null,"w","w",354169001),expr__34313)))){
return (new shadow.dom.Size(G__34213,self__.h,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__34312.cljs$core$IFn$_invoke$arity$2 ? pred__34312.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"h","h",1109658740),expr__34313) : pred__34312.call(null,new cljs.core.Keyword(null,"h","h",1109658740),expr__34313)))){
return (new shadow.dom.Size(self__.w,G__34213,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4388__auto__,G__34213),null));
}
}
}));

(shadow.dom.Size.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4392__auto__){
var self__ = this;
var this__4392__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"w","w",354169001),self__.w,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"h","h",1109658740),self__.h,null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4379__auto__,G__34213){
var self__ = this;
var this__4379__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,G__34213,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4385__auto__,entry__4386__auto__){
var self__ = this;
var this__4385__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4386__auto__)){
return this__4385__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__4386__auto__,(0)),cljs.core._nth(entry__4386__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4385__auto____$1,entry__4386__auto__);
}
}));

(shadow.dom.Size.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"w","w",1994700528,null),new cljs.core.Symbol(null,"h","h",-1544777029,null)], null);
}));

(shadow.dom.Size.cljs$lang$type = true);

(shadow.dom.Size.cljs$lang$ctorPrSeq = (function (this__4423__auto__){
return (new cljs.core.List(null,"shadow.dom/Size",null,(1),null));
}));

(shadow.dom.Size.cljs$lang$ctorPrWriter = (function (this__4423__auto__,writer__4424__auto__){
return cljs.core._write(writer__4424__auto__,"shadow.dom/Size");
}));

/**
 * Positional factory function for shadow.dom/Size.
 */
shadow.dom.__GT_Size = (function shadow$dom$__GT_Size(w,h){
return (new shadow.dom.Size(w,h,null,null,null));
});

/**
 * Factory function for shadow.dom/Size, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Size = (function shadow$dom$map__GT_Size(G__34221){
var extmap__4419__auto__ = (function (){var G__34337 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__34221,new cljs.core.Keyword(null,"w","w",354169001),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"h","h",1109658740)], 0));
if(cljs.core.record_QMARK_(G__34221)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__34337);
} else {
return G__34337;
}
})();
return (new shadow.dom.Size(new cljs.core.Keyword(null,"w","w",354169001).cljs$core$IFn$_invoke$arity$1(G__34221),new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(G__34221),null,cljs.core.not_empty(extmap__4419__auto__),null));
});

shadow.dom.size__GT_clj = (function shadow$dom$size__GT_clj(size){
return (new shadow.dom.Size(size.width,size.height,null,null,null));
});
shadow.dom.get_size = (function shadow$dom$get_size(el){
return shadow.dom.size__GT_clj(goog.style.getSize(shadow.dom.dom_node(el)));
});
shadow.dom.get_height = (function shadow$dom$get_height(el){
return shadow.dom.get_size(el).h;
});
shadow.dom.get_viewport_size = (function shadow$dom$get_viewport_size(){
return shadow.dom.size__GT_clj(goog.dom.getViewportSize());
});
shadow.dom.first_child = (function shadow$dom$first_child(el){
return (shadow.dom.dom_node(el).children[(0)]);
});
shadow.dom.select_option_values = (function shadow$dom$select_option_values(el){
var native$ = shadow.dom.dom_node(el);
var opts = (native$["options"]);
var a__4610__auto__ = opts;
var l__4611__auto__ = a__4610__auto__.length;
var i = (0);
var ret = cljs.core.PersistentVector.EMPTY;
while(true){
if((i < l__4611__auto__)){
var G__35020 = (i + (1));
var G__35021 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,(opts[i]["value"]));
i = G__35020;
ret = G__35021;
continue;
} else {
return ret;
}
break;
}
});
shadow.dom.build_url = (function shadow$dom$build_url(path,query_params){
if(cljs.core.empty_QMARK_(query_params)){
return path;
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),"?",clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__34384){
var vec__34385 = p__34384;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34385,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34385,(1),null);
return [cljs.core.name(k),"=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(encodeURIComponent(cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)))].join('');
}),query_params))].join('');
}
});
shadow.dom.redirect = (function shadow$dom$redirect(var_args){
var G__34394 = arguments.length;
switch (G__34394) {
case 1:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1 = (function (path){
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2(path,cljs.core.PersistentArrayMap.EMPTY);
}));

(shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2 = (function (path,query_params){
return (document["location"]["href"] = shadow.dom.build_url(path,query_params));
}));

(shadow.dom.redirect.cljs$lang$maxFixedArity = 2);

shadow.dom.reload_BANG_ = (function shadow$dom$reload_BANG_(){
return (document.location.href = document.location.href);
});
shadow.dom.tag_name = (function shadow$dom$tag_name(el){
var dom = shadow.dom.dom_node(el);
return dom.tagName;
});
shadow.dom.insert_after = (function shadow$dom$insert_after(ref,new$){
var new_node = shadow.dom.dom_node(new$);
goog.dom.insertSiblingAfter(new_node,shadow.dom.dom_node(ref));

return new_node;
});
shadow.dom.insert_before = (function shadow$dom$insert_before(ref,new$){
var new_node = shadow.dom.dom_node(new$);
goog.dom.insertSiblingBefore(new_node,shadow.dom.dom_node(ref));

return new_node;
});
shadow.dom.insert_first = (function shadow$dom$insert_first(ref,new$){
var temp__5733__auto__ = shadow.dom.dom_node(ref).firstChild;
if(cljs.core.truth_(temp__5733__auto__)){
var child = temp__5733__auto__;
return shadow.dom.insert_before(child,new$);
} else {
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2(ref,new$);
}
});
shadow.dom.index_of = (function shadow$dom$index_of(el){
var el__$1 = shadow.dom.dom_node(el);
var i = (0);
while(true){
var ps = el__$1.previousSibling;
if((ps == null)){
return i;
} else {
var G__35033 = ps;
var G__35034 = (i + (1));
el__$1 = G__35033;
i = G__35034;
continue;
}
break;
}
});
shadow.dom.get_parent = (function shadow$dom$get_parent(el){
return goog.dom.getParentElement(shadow.dom.dom_node(el));
});
shadow.dom.parents = (function shadow$dom$parents(el){
var parent = shadow.dom.get_parent(el);
if(cljs.core.truth_(parent)){
return cljs.core.cons(parent,(new cljs.core.LazySeq(null,(function (){
return (shadow.dom.parents.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.parents.cljs$core$IFn$_invoke$arity$1(parent) : shadow.dom.parents.call(null,parent));
}),null,null)));
} else {
return null;
}
});
shadow.dom.matches = (function shadow$dom$matches(el,sel){
return shadow.dom.dom_node(el).matches(sel);
});
shadow.dom.get_next_sibling = (function shadow$dom$get_next_sibling(el){
return goog.dom.getNextElementSibling(shadow.dom.dom_node(el));
});
shadow.dom.get_previous_sibling = (function shadow$dom$get_previous_sibling(el){
return goog.dom.getPreviousElementSibling(shadow.dom.dom_node(el));
});
shadow.dom.xmlns = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, ["svg","http://www.w3.org/2000/svg","xlink","http://www.w3.org/1999/xlink"], null));
shadow.dom.create_svg_node = (function shadow$dom$create_svg_node(tag_def,props){
var vec__34423 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34423,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34423,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34423,(2),null);
var el = document.createElementNS("http://www.w3.org/2000/svg",tag_name);
if(cljs.core.truth_(tag_id)){
el.setAttribute("id",tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
el.setAttribute("class",shadow.dom.merge_class_string(new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(props),tag_classes));
} else {
}

var seq__34426_35040 = cljs.core.seq(props);
var chunk__34427_35041 = null;
var count__34428_35042 = (0);
var i__34429_35043 = (0);
while(true){
if((i__34429_35043 < count__34428_35042)){
var vec__34451_35044 = chunk__34427_35041.cljs$core$IIndexed$_nth$arity$2(null,i__34429_35043);
var k_35045 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34451_35044,(0),null);
var v_35046 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34451_35044,(1),null);
el.setAttributeNS((function (){var temp__5735__auto__ = cljs.core.namespace(k_35045);
if(cljs.core.truth_(temp__5735__auto__)){
var ns = temp__5735__auto__;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_35045),v_35046);


var G__35047 = seq__34426_35040;
var G__35048 = chunk__34427_35041;
var G__35049 = count__34428_35042;
var G__35050 = (i__34429_35043 + (1));
seq__34426_35040 = G__35047;
chunk__34427_35041 = G__35048;
count__34428_35042 = G__35049;
i__34429_35043 = G__35050;
continue;
} else {
var temp__5735__auto___35051 = cljs.core.seq(seq__34426_35040);
if(temp__5735__auto___35051){
var seq__34426_35052__$1 = temp__5735__auto___35051;
if(cljs.core.chunked_seq_QMARK_(seq__34426_35052__$1)){
var c__4556__auto___35053 = cljs.core.chunk_first(seq__34426_35052__$1);
var G__35054 = cljs.core.chunk_rest(seq__34426_35052__$1);
var G__35055 = c__4556__auto___35053;
var G__35056 = cljs.core.count(c__4556__auto___35053);
var G__35057 = (0);
seq__34426_35040 = G__35054;
chunk__34427_35041 = G__35055;
count__34428_35042 = G__35056;
i__34429_35043 = G__35057;
continue;
} else {
var vec__34454_35058 = cljs.core.first(seq__34426_35052__$1);
var k_35059 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34454_35058,(0),null);
var v_35060 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34454_35058,(1),null);
el.setAttributeNS((function (){var temp__5735__auto____$1 = cljs.core.namespace(k_35059);
if(cljs.core.truth_(temp__5735__auto____$1)){
var ns = temp__5735__auto____$1;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_35059),v_35060);


var G__35061 = cljs.core.next(seq__34426_35052__$1);
var G__35062 = null;
var G__35063 = (0);
var G__35064 = (0);
seq__34426_35040 = G__35061;
chunk__34427_35041 = G__35062;
count__34428_35042 = G__35063;
i__34429_35043 = G__35064;
continue;
}
} else {
}
}
break;
}

return el;
});
shadow.dom.svg_node = (function shadow$dom$svg_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$SVGElement$))))?true:false):false)){
return el.shadow$dom$SVGElement$_to_svg$arity$1(null);
} else {
return el;

}
}
});
shadow.dom.make_svg_node = (function shadow$dom$make_svg_node(structure){
var vec__34458 = shadow.dom.destructure_node(shadow.dom.create_svg_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34458,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34458,(1),null);
var seq__34461_35065 = cljs.core.seq(node_children);
var chunk__34463_35066 = null;
var count__34464_35067 = (0);
var i__34465_35068 = (0);
while(true){
if((i__34465_35068 < count__34464_35067)){
var child_struct_35069 = chunk__34463_35066.cljs$core$IIndexed$_nth$arity$2(null,i__34465_35068);
if((!((child_struct_35069 == null)))){
if(typeof child_struct_35069 === 'string'){
var text_35070 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_35070),child_struct_35069].join(''));
} else {
var children_35071 = shadow.dom.svg_node(child_struct_35069);
if(cljs.core.seq_QMARK_(children_35071)){
var seq__34494_35072 = cljs.core.seq(children_35071);
var chunk__34496_35073 = null;
var count__34497_35074 = (0);
var i__34498_35075 = (0);
while(true){
if((i__34498_35075 < count__34497_35074)){
var child_35076 = chunk__34496_35073.cljs$core$IIndexed$_nth$arity$2(null,i__34498_35075);
if(cljs.core.truth_(child_35076)){
node.appendChild(child_35076);


var G__35077 = seq__34494_35072;
var G__35078 = chunk__34496_35073;
var G__35079 = count__34497_35074;
var G__35080 = (i__34498_35075 + (1));
seq__34494_35072 = G__35077;
chunk__34496_35073 = G__35078;
count__34497_35074 = G__35079;
i__34498_35075 = G__35080;
continue;
} else {
var G__35082 = seq__34494_35072;
var G__35083 = chunk__34496_35073;
var G__35084 = count__34497_35074;
var G__35085 = (i__34498_35075 + (1));
seq__34494_35072 = G__35082;
chunk__34496_35073 = G__35083;
count__34497_35074 = G__35084;
i__34498_35075 = G__35085;
continue;
}
} else {
var temp__5735__auto___35086 = cljs.core.seq(seq__34494_35072);
if(temp__5735__auto___35086){
var seq__34494_35087__$1 = temp__5735__auto___35086;
if(cljs.core.chunked_seq_QMARK_(seq__34494_35087__$1)){
var c__4556__auto___35088 = cljs.core.chunk_first(seq__34494_35087__$1);
var G__35089 = cljs.core.chunk_rest(seq__34494_35087__$1);
var G__35090 = c__4556__auto___35088;
var G__35091 = cljs.core.count(c__4556__auto___35088);
var G__35092 = (0);
seq__34494_35072 = G__35089;
chunk__34496_35073 = G__35090;
count__34497_35074 = G__35091;
i__34498_35075 = G__35092;
continue;
} else {
var child_35093 = cljs.core.first(seq__34494_35087__$1);
if(cljs.core.truth_(child_35093)){
node.appendChild(child_35093);


var G__35094 = cljs.core.next(seq__34494_35087__$1);
var G__35095 = null;
var G__35096 = (0);
var G__35097 = (0);
seq__34494_35072 = G__35094;
chunk__34496_35073 = G__35095;
count__34497_35074 = G__35096;
i__34498_35075 = G__35097;
continue;
} else {
var G__35098 = cljs.core.next(seq__34494_35087__$1);
var G__35099 = null;
var G__35100 = (0);
var G__35101 = (0);
seq__34494_35072 = G__35098;
chunk__34496_35073 = G__35099;
count__34497_35074 = G__35100;
i__34498_35075 = G__35101;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_35071);
}
}


var G__35106 = seq__34461_35065;
var G__35107 = chunk__34463_35066;
var G__35108 = count__34464_35067;
var G__35109 = (i__34465_35068 + (1));
seq__34461_35065 = G__35106;
chunk__34463_35066 = G__35107;
count__34464_35067 = G__35108;
i__34465_35068 = G__35109;
continue;
} else {
var G__35110 = seq__34461_35065;
var G__35111 = chunk__34463_35066;
var G__35112 = count__34464_35067;
var G__35113 = (i__34465_35068 + (1));
seq__34461_35065 = G__35110;
chunk__34463_35066 = G__35111;
count__34464_35067 = G__35112;
i__34465_35068 = G__35113;
continue;
}
} else {
var temp__5735__auto___35115 = cljs.core.seq(seq__34461_35065);
if(temp__5735__auto___35115){
var seq__34461_35116__$1 = temp__5735__auto___35115;
if(cljs.core.chunked_seq_QMARK_(seq__34461_35116__$1)){
var c__4556__auto___35117 = cljs.core.chunk_first(seq__34461_35116__$1);
var G__35118 = cljs.core.chunk_rest(seq__34461_35116__$1);
var G__35119 = c__4556__auto___35117;
var G__35120 = cljs.core.count(c__4556__auto___35117);
var G__35121 = (0);
seq__34461_35065 = G__35118;
chunk__34463_35066 = G__35119;
count__34464_35067 = G__35120;
i__34465_35068 = G__35121;
continue;
} else {
var child_struct_35122 = cljs.core.first(seq__34461_35116__$1);
if((!((child_struct_35122 == null)))){
if(typeof child_struct_35122 === 'string'){
var text_35123 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_35123),child_struct_35122].join(''));
} else {
var children_35124 = shadow.dom.svg_node(child_struct_35122);
if(cljs.core.seq_QMARK_(children_35124)){
var seq__34519_35125 = cljs.core.seq(children_35124);
var chunk__34521_35126 = null;
var count__34522_35127 = (0);
var i__34523_35128 = (0);
while(true){
if((i__34523_35128 < count__34522_35127)){
var child_35129 = chunk__34521_35126.cljs$core$IIndexed$_nth$arity$2(null,i__34523_35128);
if(cljs.core.truth_(child_35129)){
node.appendChild(child_35129);


var G__35130 = seq__34519_35125;
var G__35131 = chunk__34521_35126;
var G__35132 = count__34522_35127;
var G__35133 = (i__34523_35128 + (1));
seq__34519_35125 = G__35130;
chunk__34521_35126 = G__35131;
count__34522_35127 = G__35132;
i__34523_35128 = G__35133;
continue;
} else {
var G__35134 = seq__34519_35125;
var G__35135 = chunk__34521_35126;
var G__35136 = count__34522_35127;
var G__35137 = (i__34523_35128 + (1));
seq__34519_35125 = G__35134;
chunk__34521_35126 = G__35135;
count__34522_35127 = G__35136;
i__34523_35128 = G__35137;
continue;
}
} else {
var temp__5735__auto___35139__$1 = cljs.core.seq(seq__34519_35125);
if(temp__5735__auto___35139__$1){
var seq__34519_35140__$1 = temp__5735__auto___35139__$1;
if(cljs.core.chunked_seq_QMARK_(seq__34519_35140__$1)){
var c__4556__auto___35141 = cljs.core.chunk_first(seq__34519_35140__$1);
var G__35142 = cljs.core.chunk_rest(seq__34519_35140__$1);
var G__35143 = c__4556__auto___35141;
var G__35144 = cljs.core.count(c__4556__auto___35141);
var G__35145 = (0);
seq__34519_35125 = G__35142;
chunk__34521_35126 = G__35143;
count__34522_35127 = G__35144;
i__34523_35128 = G__35145;
continue;
} else {
var child_35146 = cljs.core.first(seq__34519_35140__$1);
if(cljs.core.truth_(child_35146)){
node.appendChild(child_35146);


var G__35147 = cljs.core.next(seq__34519_35140__$1);
var G__35148 = null;
var G__35149 = (0);
var G__35150 = (0);
seq__34519_35125 = G__35147;
chunk__34521_35126 = G__35148;
count__34522_35127 = G__35149;
i__34523_35128 = G__35150;
continue;
} else {
var G__35151 = cljs.core.next(seq__34519_35140__$1);
var G__35152 = null;
var G__35153 = (0);
var G__35154 = (0);
seq__34519_35125 = G__35151;
chunk__34521_35126 = G__35152;
count__34522_35127 = G__35153;
i__34523_35128 = G__35154;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_35124);
}
}


var G__35155 = cljs.core.next(seq__34461_35116__$1);
var G__35156 = null;
var G__35157 = (0);
var G__35158 = (0);
seq__34461_35065 = G__35155;
chunk__34463_35066 = G__35156;
count__34464_35067 = G__35157;
i__34465_35068 = G__35158;
continue;
} else {
var G__35160 = cljs.core.next(seq__34461_35116__$1);
var G__35161 = null;
var G__35162 = (0);
var G__35163 = (0);
seq__34461_35065 = G__35160;
chunk__34463_35066 = G__35161;
count__34464_35067 = G__35162;
i__34465_35068 = G__35163;
continue;
}
}
} else {
}
}
break;
}

return node;
});
goog.object.set(shadow.dom.SVGElement,"string",true);

goog.object.set(shadow.dom._to_svg,"string",(function (this$){
if((this$ instanceof cljs.core.Keyword)){
return shadow.dom.make_svg_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null));
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("strings cannot be in svgs",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"this","this",-611633625),this$], null));
}
}));

(cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_svg_node(this$__$1);
}));

(cljs.core.LazySeq.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_svg,this$__$1);
}));

goog.object.set(shadow.dom.SVGElement,"null",true);

goog.object.set(shadow.dom._to_svg,"null",(function (_){
return null;
}));
shadow.dom.svg = (function shadow$dom$svg(var_args){
var args__4742__auto__ = [];
var len__4736__auto___35167 = arguments.length;
var i__4737__auto___35168 = (0);
while(true){
if((i__4737__auto___35168 < len__4736__auto___35167)){
args__4742__auto__.push((arguments[i__4737__auto___35168]));

var G__35169 = (i__4737__auto___35168 + (1));
i__4737__auto___35168 = G__35169;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic = (function (attrs,children){
return shadow.dom._to_svg(cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg","svg",856789142),attrs], null),children)));
}));

(shadow.dom.svg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.dom.svg.cljs$lang$applyTo = (function (seq34546){
var G__34547 = cljs.core.first(seq34546);
var seq34546__$1 = cljs.core.next(seq34546);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__34547,seq34546__$1);
}));

/**
 * returns a channel for events on el
 * transform-fn should be a (fn [e el] some-val) where some-val will be put on the chan
 * once-or-cleanup handles the removal of the event handler
 * - true: remove after one event
 * - false: never removed
 * - chan: remove on msg/close
 */
shadow.dom.event_chan = (function shadow$dom$event_chan(var_args){
var G__34553 = arguments.length;
switch (G__34553) {
case 2:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$2 = (function (el,event){
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4(el,event,null,false);
}));

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$3 = (function (el,event,xf){
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4(el,event,xf,false);
}));

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4 = (function (el,event,xf,once_or_cleanup){
var buf = cljs.core.async.sliding_buffer((1));
var chan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2(buf,xf);
var event_fn = (function shadow$dom$event_fn(e){
cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(chan,e);

if(once_or_cleanup === true){
shadow.dom.remove_event_handler(el,event,shadow$dom$event_fn);

return cljs.core.async.close_BANG_(chan);
} else {
return null;
}
});
shadow.dom.dom_listen(shadow.dom.dom_node(el),cljs.core.name(event),event_fn);

if(cljs.core.truth_((function (){var and__4115__auto__ = once_or_cleanup;
if(cljs.core.truth_(and__4115__auto__)){
return (!(once_or_cleanup === true));
} else {
return and__4115__auto__;
}
})())){
var c__30119__auto___35182 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30120__auto__ = (function (){var switch__29693__auto__ = (function (state_34564){
var state_val_34565 = (state_34564[(1)]);
if((state_val_34565 === (1))){
var state_34564__$1 = state_34564;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34564__$1,(2),once_or_cleanup);
} else {
if((state_val_34565 === (2))){
var inst_34561 = (state_34564[(2)]);
var inst_34562 = shadow.dom.remove_event_handler(el,event,event_fn);
var state_34564__$1 = (function (){var statearr_34567 = state_34564;
(statearr_34567[(7)] = inst_34561);

return statearr_34567;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_34564__$1,inst_34562);
} else {
return null;
}
}
});
return (function() {
var shadow$dom$state_machine__29694__auto__ = null;
var shadow$dom$state_machine__29694__auto____0 = (function (){
var statearr_34568 = [null,null,null,null,null,null,null,null];
(statearr_34568[(0)] = shadow$dom$state_machine__29694__auto__);

(statearr_34568[(1)] = (1));

return statearr_34568;
});
var shadow$dom$state_machine__29694__auto____1 = (function (state_34564){
while(true){
var ret_value__29695__auto__ = (function (){try{while(true){
var result__29696__auto__ = switch__29693__auto__(state_34564);
if(cljs.core.keyword_identical_QMARK_(result__29696__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29696__auto__;
}
break;
}
}catch (e34569){var ex__29697__auto__ = e34569;
var statearr_34570_35186 = state_34564;
(statearr_34570_35186[(2)] = ex__29697__auto__);


if(cljs.core.seq((state_34564[(4)]))){
var statearr_34572_35187 = state_34564;
(statearr_34572_35187[(1)] = cljs.core.first((state_34564[(4)])));

} else {
throw ex__29697__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29695__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35188 = state_34564;
state_34564 = G__35188;
continue;
} else {
return ret_value__29695__auto__;
}
break;
}
});
shadow$dom$state_machine__29694__auto__ = function(state_34564){
switch(arguments.length){
case 0:
return shadow$dom$state_machine__29694__auto____0.call(this);
case 1:
return shadow$dom$state_machine__29694__auto____1.call(this,state_34564);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
shadow$dom$state_machine__29694__auto__.cljs$core$IFn$_invoke$arity$0 = shadow$dom$state_machine__29694__auto____0;
shadow$dom$state_machine__29694__auto__.cljs$core$IFn$_invoke$arity$1 = shadow$dom$state_machine__29694__auto____1;
return shadow$dom$state_machine__29694__auto__;
})()
})();
var state__30121__auto__ = (function (){var statearr_34576 = f__30120__auto__();
(statearr_34576[(6)] = c__30119__auto___35182);

return statearr_34576;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30121__auto__);
}));

} else {
}

return chan;
}));

(shadow.dom.event_chan.cljs$lang$maxFixedArity = 4);


//# sourceMappingURL=shadow.dom.js.map
