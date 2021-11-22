goog.provide('shadow.cljs.devtools.client.browser');
shadow.cljs.devtools.client.browser.devtools_msg = (function shadow$cljs$devtools$client$browser$devtools_msg(var_args){
var args__4742__auto__ = [];
var len__4736__auto___37651 = arguments.length;
var i__4737__auto___37652 = (0);
while(true){
if((i__4737__auto___37652 < len__4736__auto___37651)){
args__4742__auto__.push((arguments[i__4737__auto___37652]));

var G__37653 = (i__4737__auto___37652 + (1));
i__4737__auto___37652 = G__37653;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic = (function (msg,args){
if(shadow.cljs.devtools.client.env.log){
if(cljs.core.seq(shadow.cljs.devtools.client.env.log_style)){
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [["%cshadow-cljs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join(''),shadow.cljs.devtools.client.env.log_style], null),args)));
} else {
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [["shadow-cljs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join('')], null),args)));
}
} else {
return null;
}
}));

(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$applyTo = (function (seq37178){
var G__37179 = cljs.core.first(seq37178);
var seq37178__$1 = cljs.core.next(seq37178);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__37179,seq37178__$1);
}));

shadow.cljs.devtools.client.browser.script_eval = (function shadow$cljs$devtools$client$browser$script_eval(code){
return goog.globalEval(code);
});
shadow.cljs.devtools.client.browser.do_js_load = (function shadow$cljs$devtools$client$browser$do_js_load(sources){
var seq__37192 = cljs.core.seq(sources);
var chunk__37193 = null;
var count__37194 = (0);
var i__37195 = (0);
while(true){
if((i__37195 < count__37194)){
var map__37213 = chunk__37193.cljs$core$IIndexed$_nth$arity$2(null,i__37195);
var map__37213__$1 = (((((!((map__37213 == null))))?(((((map__37213.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37213.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37213):map__37213);
var src = map__37213__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37213__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37213__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37213__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37213__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e37215){var e_37657 = e37215;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_37657);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_37657.message)].join('')));
}

var G__37660 = seq__37192;
var G__37661 = chunk__37193;
var G__37662 = count__37194;
var G__37663 = (i__37195 + (1));
seq__37192 = G__37660;
chunk__37193 = G__37661;
count__37194 = G__37662;
i__37195 = G__37663;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__37192);
if(temp__5735__auto__){
var seq__37192__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__37192__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__37192__$1);
var G__37666 = cljs.core.chunk_rest(seq__37192__$1);
var G__37667 = c__4556__auto__;
var G__37668 = cljs.core.count(c__4556__auto__);
var G__37669 = (0);
seq__37192 = G__37666;
chunk__37193 = G__37667;
count__37194 = G__37668;
i__37195 = G__37669;
continue;
} else {
var map__37217 = cljs.core.first(seq__37192__$1);
var map__37217__$1 = (((((!((map__37217 == null))))?(((((map__37217.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37217.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37217):map__37217);
var src = map__37217__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37217__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37217__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37217__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37217__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e37224){var e_37671 = e37224;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_37671);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_37671.message)].join('')));
}

var G__37674 = cljs.core.next(seq__37192__$1);
var G__37675 = null;
var G__37676 = (0);
var G__37677 = (0);
seq__37192 = G__37674;
chunk__37193 = G__37675;
count__37194 = G__37676;
i__37195 = G__37677;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.do_js_reload = (function shadow$cljs$devtools$client$browser$do_js_reload(msg,sources,complete_fn,failure_fn){
return shadow.cljs.devtools.client.env.do_js_reload.cljs$core$IFn$_invoke$arity$4(cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(msg,new cljs.core.Keyword(null,"log-missing-fn","log-missing-fn",732676765),(function (fn_sym){
return null;
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"log-call-async","log-call-async",183826192),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call async ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
}),new cljs.core.Keyword(null,"log-call","log-call",412404391),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
})], 0)),(function (){
return shadow.cljs.devtools.client.browser.do_js_load(sources);
}),complete_fn,failure_fn);
});
/**
 * when (require '["some-str" :as x]) is done at the REPL we need to manually call the shadow.js.require for it
 * since the file only adds the shadow$provide. only need to do this for shadow-js.
 */
shadow.cljs.devtools.client.browser.do_js_requires = (function shadow$cljs$devtools$client$browser$do_js_requires(js_requires){
var seq__37230 = cljs.core.seq(js_requires);
var chunk__37231 = null;
var count__37232 = (0);
var i__37233 = (0);
while(true){
if((i__37233 < count__37232)){
var js_ns = chunk__37231.cljs$core$IIndexed$_nth$arity$2(null,i__37233);
var require_str_37682 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_37682);


var G__37689 = seq__37230;
var G__37690 = chunk__37231;
var G__37691 = count__37232;
var G__37692 = (i__37233 + (1));
seq__37230 = G__37689;
chunk__37231 = G__37690;
count__37232 = G__37691;
i__37233 = G__37692;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__37230);
if(temp__5735__auto__){
var seq__37230__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__37230__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__37230__$1);
var G__37693 = cljs.core.chunk_rest(seq__37230__$1);
var G__37694 = c__4556__auto__;
var G__37695 = cljs.core.count(c__4556__auto__);
var G__37696 = (0);
seq__37230 = G__37693;
chunk__37231 = G__37694;
count__37232 = G__37695;
i__37233 = G__37696;
continue;
} else {
var js_ns = cljs.core.first(seq__37230__$1);
var require_str_37697 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_37697);


var G__37699 = cljs.core.next(seq__37230__$1);
var G__37700 = null;
var G__37701 = (0);
var G__37702 = (0);
seq__37230 = G__37699;
chunk__37231 = G__37700;
count__37232 = G__37701;
i__37233 = G__37702;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.handle_build_complete = (function shadow$cljs$devtools$client$browser$handle_build_complete(runtime,p__37237){
var map__37238 = p__37237;
var map__37238__$1 = (((((!((map__37238 == null))))?(((((map__37238.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37238.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37238):map__37238);
var msg = map__37238__$1;
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37238__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37238__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var warnings = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.distinct.cljs$core$IFn$_invoke$arity$1((function (){var iter__4529__auto__ = (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__37243(s__37244){
return (new cljs.core.LazySeq(null,(function (){
var s__37244__$1 = s__37244;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__37244__$1);
if(temp__5735__auto__){
var xs__6292__auto__ = temp__5735__auto__;
var map__37249 = cljs.core.first(xs__6292__auto__);
var map__37249__$1 = (((((!((map__37249 == null))))?(((((map__37249.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37249.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37249):map__37249);
var src = map__37249__$1;
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37249__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var warnings = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37249__$1,new cljs.core.Keyword(null,"warnings","warnings",-735437651));
if(cljs.core.not(new cljs.core.Keyword(null,"from-jar","from-jar",1050932827).cljs$core$IFn$_invoke$arity$1(src))){
var iterys__4525__auto__ = ((function (s__37244__$1,map__37249,map__37249__$1,src,resource_name,warnings,xs__6292__auto__,temp__5735__auto__,map__37238,map__37238__$1,msg,info,reload_info){
return (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__37243_$_iter__37245(s__37246){
return (new cljs.core.LazySeq(null,((function (s__37244__$1,map__37249,map__37249__$1,src,resource_name,warnings,xs__6292__auto__,temp__5735__auto__,map__37238,map__37238__$1,msg,info,reload_info){
return (function (){
var s__37246__$1 = s__37246;
while(true){
var temp__5735__auto____$1 = cljs.core.seq(s__37246__$1);
if(temp__5735__auto____$1){
var s__37246__$2 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__37246__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__37246__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__37248 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__37247 = (0);
while(true){
if((i__37247 < size__4528__auto__)){
var warning = cljs.core._nth(c__4527__auto__,i__37247);
cljs.core.chunk_append(b__37248,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name));

var G__37709 = (i__37247 + (1));
i__37247 = G__37709;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__37248),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__37243_$_iter__37245(cljs.core.chunk_rest(s__37246__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__37248),null);
}
} else {
var warning = cljs.core.first(s__37246__$2);
return cljs.core.cons(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__37243_$_iter__37245(cljs.core.rest(s__37246__$2)));
}
} else {
return null;
}
break;
}
});})(s__37244__$1,map__37249,map__37249__$1,src,resource_name,warnings,xs__6292__auto__,temp__5735__auto__,map__37238,map__37238__$1,msg,info,reload_info))
,null,null));
});})(s__37244__$1,map__37249,map__37249__$1,src,resource_name,warnings,xs__6292__auto__,temp__5735__auto__,map__37238,map__37238__$1,msg,info,reload_info))
;
var fs__4526__auto__ = cljs.core.seq(iterys__4525__auto__(warnings));
if(fs__4526__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4526__auto__,shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__37243(cljs.core.rest(s__37244__$1)));
} else {
var G__37714 = cljs.core.rest(s__37244__$1);
s__37244__$1 = G__37714;
continue;
}
} else {
var G__37715 = cljs.core.rest(s__37244__$1);
s__37244__$1 = G__37715;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4529__auto__(new cljs.core.Keyword(null,"sources","sources",-321166424).cljs$core$IFn$_invoke$arity$1(info));
})()));
if(shadow.cljs.devtools.client.env.log){
var seq__37260_37716 = cljs.core.seq(warnings);
var chunk__37261_37717 = null;
var count__37262_37718 = (0);
var i__37263_37719 = (0);
while(true){
if((i__37263_37719 < count__37262_37718)){
var map__37270_37720 = chunk__37261_37717.cljs$core$IIndexed$_nth$arity$2(null,i__37263_37719);
var map__37270_37721__$1 = (((((!((map__37270_37720 == null))))?(((((map__37270_37720.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37270_37720.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37270_37720):map__37270_37720);
var w_37722 = map__37270_37721__$1;
var msg_37723__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37270_37721__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_37724 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37270_37721__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_37725 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37270_37721__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_37726 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37270_37721__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_37726)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_37724),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_37725),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_37723__$1)].join(''));


var G__37730 = seq__37260_37716;
var G__37731 = chunk__37261_37717;
var G__37732 = count__37262_37718;
var G__37733 = (i__37263_37719 + (1));
seq__37260_37716 = G__37730;
chunk__37261_37717 = G__37731;
count__37262_37718 = G__37732;
i__37263_37719 = G__37733;
continue;
} else {
var temp__5735__auto___37736 = cljs.core.seq(seq__37260_37716);
if(temp__5735__auto___37736){
var seq__37260_37737__$1 = temp__5735__auto___37736;
if(cljs.core.chunked_seq_QMARK_(seq__37260_37737__$1)){
var c__4556__auto___37739 = cljs.core.chunk_first(seq__37260_37737__$1);
var G__37740 = cljs.core.chunk_rest(seq__37260_37737__$1);
var G__37741 = c__4556__auto___37739;
var G__37742 = cljs.core.count(c__4556__auto___37739);
var G__37743 = (0);
seq__37260_37716 = G__37740;
chunk__37261_37717 = G__37741;
count__37262_37718 = G__37742;
i__37263_37719 = G__37743;
continue;
} else {
var map__37273_37744 = cljs.core.first(seq__37260_37737__$1);
var map__37273_37745__$1 = (((((!((map__37273_37744 == null))))?(((((map__37273_37744.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37273_37744.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37273_37744):map__37273_37744);
var w_37746 = map__37273_37745__$1;
var msg_37747__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37273_37745__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_37748 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37273_37745__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_37749 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37273_37745__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_37750 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37273_37745__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_37750)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_37748),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_37749),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_37747__$1)].join(''));


var G__37753 = cljs.core.next(seq__37260_37737__$1);
var G__37754 = null;
var G__37755 = (0);
var G__37756 = (0);
seq__37260_37716 = G__37753;
chunk__37261_37717 = G__37754;
count__37262_37718 = G__37755;
i__37263_37719 = G__37756;
continue;
}
} else {
}
}
break;
}
} else {
}

if((!(shadow.cljs.devtools.client.env.autoload))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(((cljs.core.empty_QMARK_(warnings)) || (shadow.cljs.devtools.client.env.ignore_warnings))){
var sources_to_get = shadow.cljs.devtools.client.env.filter_reload_sources(info,reload_info);
if(cljs.core.not(cljs.core.seq(sources_to_get))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"after-load","after-load",-1278503285)], null)))){
} else {
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("reloading code but no :after-load hooks are configured!",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["https://shadow-cljs.github.io/docs/UsersGuide.html#_lifecycle_hooks"], 0));
}

return shadow.cljs.devtools.client.shared.load_sources(runtime,sources_to_get,(function (p1__37235_SHARP_){
return shadow.cljs.devtools.client.browser.do_js_reload(msg,p1__37235_SHARP_,shadow.cljs.devtools.client.hud.load_end_success,shadow.cljs.devtools.client.hud.load_failure);
}));
}
} else {
return null;
}
}
});
shadow.cljs.devtools.client.browser.page_load_uri = (cljs.core.truth_(goog.global.document)?goog.Uri.parse(document.location.href):null);
shadow.cljs.devtools.client.browser.match_paths = (function shadow$cljs$devtools$client$browser$match_paths(old,new$){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("file",shadow.cljs.devtools.client.browser.page_load_uri.getScheme())){
var rel_new = cljs.core.subs.cljs$core$IFn$_invoke$arity$2(new$,(1));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(old,rel_new)) || (clojure.string.starts_with_QMARK_(old,[rel_new,"?"].join(''))))){
return rel_new;
} else {
return null;
}
} else {
var node_uri = goog.Uri.parse(old);
var node_uri_resolved = shadow.cljs.devtools.client.browser.page_load_uri.resolve(node_uri);
var node_abs = node_uri_resolved.getPath();
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$1(shadow.cljs.devtools.client.browser.page_load_uri.hasSameDomainAs(node_uri))) || (cljs.core.not(node_uri.hasDomain())))){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(node_abs,new$)){
return new$;
} else {
return false;
}
} else {
return false;
}
}
});
shadow.cljs.devtools.client.browser.handle_asset_update = (function shadow$cljs$devtools$client$browser$handle_asset_update(p__37302){
var map__37303 = p__37302;
var map__37303__$1 = (((((!((map__37303 == null))))?(((((map__37303.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37303.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37303):map__37303);
var msg = map__37303__$1;
var updates = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37303__$1,new cljs.core.Keyword(null,"updates","updates",2013983452));
var seq__37308 = cljs.core.seq(updates);
var chunk__37310 = null;
var count__37311 = (0);
var i__37312 = (0);
while(true){
if((i__37312 < count__37311)){
var path = chunk__37310.cljs$core$IIndexed$_nth$arity$2(null,i__37312);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__37385_37769 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__37392_37770 = null;
var count__37393_37771 = (0);
var i__37394_37772 = (0);
while(true){
if((i__37394_37772 < count__37393_37771)){
var node_37775 = chunk__37392_37770.cljs$core$IIndexed$_nth$arity$2(null,i__37394_37772);
if(cljs.core.not(node_37775.shadow$old)){
var path_match_37776 = shadow.cljs.devtools.client.browser.match_paths(node_37775.getAttribute("href"),path);
if(cljs.core.truth_(path_match_37776)){
var new_link_37777 = (function (){var G__37447 = node_37775.cloneNode(true);
G__37447.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_37776),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__37447;
})();
(node_37775.shadow$old = true);

(new_link_37777.onload = ((function (seq__37385_37769,chunk__37392_37770,count__37393_37771,i__37394_37772,seq__37308,chunk__37310,count__37311,i__37312,new_link_37777,path_match_37776,node_37775,path,map__37303,map__37303__$1,msg,updates){
return (function (e){
return goog.dom.removeNode(node_37775);
});})(seq__37385_37769,chunk__37392_37770,count__37393_37771,i__37394_37772,seq__37308,chunk__37310,count__37311,i__37312,new_link_37777,path_match_37776,node_37775,path,map__37303,map__37303__$1,msg,updates))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_37776], 0));

goog.dom.insertSiblingAfter(new_link_37777,node_37775);


var G__37781 = seq__37385_37769;
var G__37782 = chunk__37392_37770;
var G__37783 = count__37393_37771;
var G__37784 = (i__37394_37772 + (1));
seq__37385_37769 = G__37781;
chunk__37392_37770 = G__37782;
count__37393_37771 = G__37783;
i__37394_37772 = G__37784;
continue;
} else {
var G__37786 = seq__37385_37769;
var G__37787 = chunk__37392_37770;
var G__37788 = count__37393_37771;
var G__37789 = (i__37394_37772 + (1));
seq__37385_37769 = G__37786;
chunk__37392_37770 = G__37787;
count__37393_37771 = G__37788;
i__37394_37772 = G__37789;
continue;
}
} else {
var G__37790 = seq__37385_37769;
var G__37791 = chunk__37392_37770;
var G__37792 = count__37393_37771;
var G__37793 = (i__37394_37772 + (1));
seq__37385_37769 = G__37790;
chunk__37392_37770 = G__37791;
count__37393_37771 = G__37792;
i__37394_37772 = G__37793;
continue;
}
} else {
var temp__5735__auto___37794 = cljs.core.seq(seq__37385_37769);
if(temp__5735__auto___37794){
var seq__37385_37795__$1 = temp__5735__auto___37794;
if(cljs.core.chunked_seq_QMARK_(seq__37385_37795__$1)){
var c__4556__auto___37796 = cljs.core.chunk_first(seq__37385_37795__$1);
var G__37797 = cljs.core.chunk_rest(seq__37385_37795__$1);
var G__37798 = c__4556__auto___37796;
var G__37799 = cljs.core.count(c__4556__auto___37796);
var G__37800 = (0);
seq__37385_37769 = G__37797;
chunk__37392_37770 = G__37798;
count__37393_37771 = G__37799;
i__37394_37772 = G__37800;
continue;
} else {
var node_37801 = cljs.core.first(seq__37385_37795__$1);
if(cljs.core.not(node_37801.shadow$old)){
var path_match_37802 = shadow.cljs.devtools.client.browser.match_paths(node_37801.getAttribute("href"),path);
if(cljs.core.truth_(path_match_37802)){
var new_link_37803 = (function (){var G__37453 = node_37801.cloneNode(true);
G__37453.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_37802),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__37453;
})();
(node_37801.shadow$old = true);

(new_link_37803.onload = ((function (seq__37385_37769,chunk__37392_37770,count__37393_37771,i__37394_37772,seq__37308,chunk__37310,count__37311,i__37312,new_link_37803,path_match_37802,node_37801,seq__37385_37795__$1,temp__5735__auto___37794,path,map__37303,map__37303__$1,msg,updates){
return (function (e){
return goog.dom.removeNode(node_37801);
});})(seq__37385_37769,chunk__37392_37770,count__37393_37771,i__37394_37772,seq__37308,chunk__37310,count__37311,i__37312,new_link_37803,path_match_37802,node_37801,seq__37385_37795__$1,temp__5735__auto___37794,path,map__37303,map__37303__$1,msg,updates))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_37802], 0));

goog.dom.insertSiblingAfter(new_link_37803,node_37801);


var G__37804 = cljs.core.next(seq__37385_37795__$1);
var G__37805 = null;
var G__37806 = (0);
var G__37807 = (0);
seq__37385_37769 = G__37804;
chunk__37392_37770 = G__37805;
count__37393_37771 = G__37806;
i__37394_37772 = G__37807;
continue;
} else {
var G__37808 = cljs.core.next(seq__37385_37795__$1);
var G__37809 = null;
var G__37810 = (0);
var G__37811 = (0);
seq__37385_37769 = G__37808;
chunk__37392_37770 = G__37809;
count__37393_37771 = G__37810;
i__37394_37772 = G__37811;
continue;
}
} else {
var G__37812 = cljs.core.next(seq__37385_37795__$1);
var G__37813 = null;
var G__37814 = (0);
var G__37815 = (0);
seq__37385_37769 = G__37812;
chunk__37392_37770 = G__37813;
count__37393_37771 = G__37814;
i__37394_37772 = G__37815;
continue;
}
}
} else {
}
}
break;
}


var G__37817 = seq__37308;
var G__37818 = chunk__37310;
var G__37819 = count__37311;
var G__37820 = (i__37312 + (1));
seq__37308 = G__37817;
chunk__37310 = G__37818;
count__37311 = G__37819;
i__37312 = G__37820;
continue;
} else {
var G__37821 = seq__37308;
var G__37822 = chunk__37310;
var G__37823 = count__37311;
var G__37824 = (i__37312 + (1));
seq__37308 = G__37821;
chunk__37310 = G__37822;
count__37311 = G__37823;
i__37312 = G__37824;
continue;
}
} else {
var temp__5735__auto__ = cljs.core.seq(seq__37308);
if(temp__5735__auto__){
var seq__37308__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__37308__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__37308__$1);
var G__37825 = cljs.core.chunk_rest(seq__37308__$1);
var G__37826 = c__4556__auto__;
var G__37827 = cljs.core.count(c__4556__auto__);
var G__37828 = (0);
seq__37308 = G__37825;
chunk__37310 = G__37826;
count__37311 = G__37827;
i__37312 = G__37828;
continue;
} else {
var path = cljs.core.first(seq__37308__$1);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__37461_37830 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__37465_37831 = null;
var count__37466_37832 = (0);
var i__37467_37833 = (0);
while(true){
if((i__37467_37833 < count__37466_37832)){
var node_37836 = chunk__37465_37831.cljs$core$IIndexed$_nth$arity$2(null,i__37467_37833);
if(cljs.core.not(node_37836.shadow$old)){
var path_match_37837 = shadow.cljs.devtools.client.browser.match_paths(node_37836.getAttribute("href"),path);
if(cljs.core.truth_(path_match_37837)){
var new_link_37839 = (function (){var G__37488 = node_37836.cloneNode(true);
G__37488.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_37837),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__37488;
})();
(node_37836.shadow$old = true);

(new_link_37839.onload = ((function (seq__37461_37830,chunk__37465_37831,count__37466_37832,i__37467_37833,seq__37308,chunk__37310,count__37311,i__37312,new_link_37839,path_match_37837,node_37836,path,seq__37308__$1,temp__5735__auto__,map__37303,map__37303__$1,msg,updates){
return (function (e){
return goog.dom.removeNode(node_37836);
});})(seq__37461_37830,chunk__37465_37831,count__37466_37832,i__37467_37833,seq__37308,chunk__37310,count__37311,i__37312,new_link_37839,path_match_37837,node_37836,path,seq__37308__$1,temp__5735__auto__,map__37303,map__37303__$1,msg,updates))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_37837], 0));

goog.dom.insertSiblingAfter(new_link_37839,node_37836);


var G__37842 = seq__37461_37830;
var G__37843 = chunk__37465_37831;
var G__37844 = count__37466_37832;
var G__37845 = (i__37467_37833 + (1));
seq__37461_37830 = G__37842;
chunk__37465_37831 = G__37843;
count__37466_37832 = G__37844;
i__37467_37833 = G__37845;
continue;
} else {
var G__37846 = seq__37461_37830;
var G__37847 = chunk__37465_37831;
var G__37848 = count__37466_37832;
var G__37849 = (i__37467_37833 + (1));
seq__37461_37830 = G__37846;
chunk__37465_37831 = G__37847;
count__37466_37832 = G__37848;
i__37467_37833 = G__37849;
continue;
}
} else {
var G__37852 = seq__37461_37830;
var G__37853 = chunk__37465_37831;
var G__37854 = count__37466_37832;
var G__37855 = (i__37467_37833 + (1));
seq__37461_37830 = G__37852;
chunk__37465_37831 = G__37853;
count__37466_37832 = G__37854;
i__37467_37833 = G__37855;
continue;
}
} else {
var temp__5735__auto___37856__$1 = cljs.core.seq(seq__37461_37830);
if(temp__5735__auto___37856__$1){
var seq__37461_37857__$1 = temp__5735__auto___37856__$1;
if(cljs.core.chunked_seq_QMARK_(seq__37461_37857__$1)){
var c__4556__auto___37858 = cljs.core.chunk_first(seq__37461_37857__$1);
var G__37859 = cljs.core.chunk_rest(seq__37461_37857__$1);
var G__37860 = c__4556__auto___37858;
var G__37861 = cljs.core.count(c__4556__auto___37858);
var G__37862 = (0);
seq__37461_37830 = G__37859;
chunk__37465_37831 = G__37860;
count__37466_37832 = G__37861;
i__37467_37833 = G__37862;
continue;
} else {
var node_37863 = cljs.core.first(seq__37461_37857__$1);
if(cljs.core.not(node_37863.shadow$old)){
var path_match_37864 = shadow.cljs.devtools.client.browser.match_paths(node_37863.getAttribute("href"),path);
if(cljs.core.truth_(path_match_37864)){
var new_link_37865 = (function (){var G__37494 = node_37863.cloneNode(true);
G__37494.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_37864),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__37494;
})();
(node_37863.shadow$old = true);

(new_link_37865.onload = ((function (seq__37461_37830,chunk__37465_37831,count__37466_37832,i__37467_37833,seq__37308,chunk__37310,count__37311,i__37312,new_link_37865,path_match_37864,node_37863,seq__37461_37857__$1,temp__5735__auto___37856__$1,path,seq__37308__$1,temp__5735__auto__,map__37303,map__37303__$1,msg,updates){
return (function (e){
return goog.dom.removeNode(node_37863);
});})(seq__37461_37830,chunk__37465_37831,count__37466_37832,i__37467_37833,seq__37308,chunk__37310,count__37311,i__37312,new_link_37865,path_match_37864,node_37863,seq__37461_37857__$1,temp__5735__auto___37856__$1,path,seq__37308__$1,temp__5735__auto__,map__37303,map__37303__$1,msg,updates))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_37864], 0));

goog.dom.insertSiblingAfter(new_link_37865,node_37863);


var G__37870 = cljs.core.next(seq__37461_37857__$1);
var G__37871 = null;
var G__37872 = (0);
var G__37873 = (0);
seq__37461_37830 = G__37870;
chunk__37465_37831 = G__37871;
count__37466_37832 = G__37872;
i__37467_37833 = G__37873;
continue;
} else {
var G__37874 = cljs.core.next(seq__37461_37857__$1);
var G__37875 = null;
var G__37876 = (0);
var G__37877 = (0);
seq__37461_37830 = G__37874;
chunk__37465_37831 = G__37875;
count__37466_37832 = G__37876;
i__37467_37833 = G__37877;
continue;
}
} else {
var G__37879 = cljs.core.next(seq__37461_37857__$1);
var G__37880 = null;
var G__37881 = (0);
var G__37882 = (0);
seq__37461_37830 = G__37879;
chunk__37465_37831 = G__37880;
count__37466_37832 = G__37881;
i__37467_37833 = G__37882;
continue;
}
}
} else {
}
}
break;
}


var G__37883 = cljs.core.next(seq__37308__$1);
var G__37884 = null;
var G__37885 = (0);
var G__37886 = (0);
seq__37308 = G__37883;
chunk__37310 = G__37884;
count__37311 = G__37885;
i__37312 = G__37886;
continue;
} else {
var G__37887 = cljs.core.next(seq__37308__$1);
var G__37888 = null;
var G__37889 = (0);
var G__37890 = (0);
seq__37308 = G__37887;
chunk__37310 = G__37888;
count__37311 = G__37889;
i__37312 = G__37890;
continue;
}
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.global_eval = (function shadow$cljs$devtools$client$browser$global_eval(js){
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2("undefined",typeof(module))){
return eval(js);
} else {
return (0,eval)(js);;
}
});
shadow.cljs.devtools.client.browser.repl_init = (function shadow$cljs$devtools$client$browser$repl_init(runtime,p__37504){
var map__37505 = p__37504;
var map__37505__$1 = (((((!((map__37505 == null))))?(((((map__37505.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37505.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37505):map__37505);
var repl_state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37505__$1,new cljs.core.Keyword(null,"repl-state","repl-state",-1733780387));
return shadow.cljs.devtools.client.shared.load_sources(runtime,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.env.src_is_loaded_QMARK_,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535).cljs$core$IFn$_invoke$arity$1(repl_state))),(function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

return shadow.cljs.devtools.client.browser.devtools_msg("ready!");
}));
});
shadow.cljs.devtools.client.browser.runtime_info = (((typeof SHADOW_CONFIG !== 'undefined'))?shadow.json.to_clj.cljs$core$IFn$_invoke$arity$1(SHADOW_CONFIG):null);
shadow.cljs.devtools.client.browser.client_info = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([shadow.cljs.devtools.client.browser.runtime_info,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"host","host",-1558485167),(cljs.core.truth_(goog.global.document)?new cljs.core.Keyword(null,"browser","browser",828191719):new cljs.core.Keyword(null,"browser-worker","browser-worker",1638998282)),new cljs.core.Keyword(null,"user-agent","user-agent",1220426212),[(cljs.core.truth_(goog.userAgent.OPERA)?"Opera":(cljs.core.truth_(goog.userAgent.product.CHROME)?"Chrome":(cljs.core.truth_(goog.userAgent.IE)?"MSIE":(cljs.core.truth_(goog.userAgent.EDGE)?"Edge":(cljs.core.truth_(goog.userAgent.GECKO)?"Firefox":(cljs.core.truth_(goog.userAgent.SAFARI)?"Safari":(cljs.core.truth_(goog.userAgent.WEBKIT)?"Webkit":null)))))))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.userAgent.VERSION)," [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.userAgent.PLATFORM),"]"].join(''),new cljs.core.Keyword(null,"dom","dom",-1236537922),(!((goog.global.document == null)))], null)], 0));
if((typeof shadow !== 'undefined') && (typeof shadow.cljs !== 'undefined') && (typeof shadow.cljs.devtools !== 'undefined') && (typeof shadow.cljs.devtools.client !== 'undefined') && (typeof shadow.cljs.devtools.client.browser !== 'undefined') && (typeof shadow.cljs.devtools.client.browser.ws_was_welcome_ref !== 'undefined')){
} else {
shadow.cljs.devtools.client.browser.ws_was_welcome_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(false);
}
if(((shadow.cljs.devtools.client.env.enabled) && ((shadow.cljs.devtools.client.env.worker_client_id > (0))))){
(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$remote$runtime$api$IEvalJS$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$remote$runtime$api$IEvalJS$_js_eval$arity$2 = (function (this$,code){
var this$__$1 = this;
return shadow.cljs.devtools.client.browser.global_eval(code);
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_invoke$arity$2 = (function (this$,p__37555){
var map__37558 = p__37555;
var map__37558__$1 = (((((!((map__37558 == null))))?(((((map__37558.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37558.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37558):map__37558);
var _ = map__37558__$1;
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37558__$1,new cljs.core.Keyword(null,"js","js",1768080579));
var this$__$1 = this;
return shadow.cljs.devtools.client.browser.global_eval(js);
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_init$arity$4 = (function (runtime,p__37561,done,error){
var map__37562 = p__37561;
var map__37562__$1 = (((((!((map__37562 == null))))?(((((map__37562.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37562.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37562):map__37562);
var repl_sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37562__$1,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535));
var runtime__$1 = this;
return shadow.cljs.devtools.client.shared.load_sources(runtime__$1,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.env.src_is_loaded_QMARK_,repl_sources)),(function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

return (done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null));
}));
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_require$arity$4 = (function (runtime,p__37570,done,error){
var map__37572 = p__37570;
var map__37572__$1 = (((((!((map__37572 == null))))?(((((map__37572.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37572.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37572):map__37572);
var msg = map__37572__$1;
var sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37572__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
var reload_namespaces = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37572__$1,new cljs.core.Keyword(null,"reload-namespaces","reload-namespaces",250210134));
var js_requires = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37572__$1,new cljs.core.Keyword(null,"js-requires","js-requires",-1311472051));
var runtime__$1 = this;
var sources_to_load = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p__37578){
var map__37579 = p__37578;
var map__37579__$1 = (((((!((map__37579 == null))))?(((((map__37579.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37579.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37579):map__37579);
var src = map__37579__$1;
var provides = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37579__$1,new cljs.core.Keyword(null,"provides","provides",-1634397992));
var and__4115__auto__ = shadow.cljs.devtools.client.env.src_is_loaded_QMARK_(src);
if(cljs.core.truth_(and__4115__auto__)){
return cljs.core.not(cljs.core.some(reload_namespaces,provides));
} else {
return and__4115__auto__;
}
}),sources));
if(cljs.core.not(cljs.core.seq(sources_to_load))){
var G__37583 = cljs.core.PersistentVector.EMPTY;
return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(G__37583) : done.call(null,G__37583));
} else {
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3(runtime__$1,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"cljs-load-sources","cljs-load-sources",-1458295962),new cljs.core.Keyword(null,"to","to",192099007),shadow.cljs.devtools.client.env.worker_client_id,new cljs.core.Keyword(null,"sources","sources",-321166424),cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582)),sources_to_load)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cljs-sources","cljs-sources",31121610),(function (p__37586){
var map__37587 = p__37586;
var map__37587__$1 = (((((!((map__37587 == null))))?(((((map__37587.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37587.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37587):map__37587);
var msg__$1 = map__37587__$1;
var sources__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37587__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
try{shadow.cljs.devtools.client.browser.do_js_load(sources__$1);

if(cljs.core.seq(js_requires)){
shadow.cljs.devtools.client.browser.do_js_requires(js_requires);
} else {
}

return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(sources_to_load) : done.call(null,sources_to_load));
}catch (e37591){var ex = e37591;
return (error.cljs$core$IFn$_invoke$arity$1 ? error.cljs$core$IFn$_invoke$arity$1(ex) : error.call(null,ex));
}})], null));
}
}));

shadow.cljs.devtools.client.shared.add_plugin_BANG_(new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282),cljs.core.PersistentHashSet.EMPTY,(function (p__37592){
var map__37593 = p__37592;
var map__37593__$1 = (((((!((map__37593 == null))))?(((((map__37593.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37593.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37593):map__37593);
var env = map__37593__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37593__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var svc = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime], null);
shadow.remote.runtime.api.add_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"on-welcome","on-welcome",1895317125),(function (){
cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,true);

shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

shadow.cljs.devtools.client.env.patch_goog_BANG_();

return shadow.cljs.devtools.client.browser.devtools_msg(["#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"client-id","client-id",-464622140).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(new cljs.core.Keyword(null,"state-ref","state-ref",2127874952).cljs$core$IFn$_invoke$arity$1(runtime))))," ready!"].join(''));
}),new cljs.core.Keyword(null,"on-disconnect","on-disconnect",-809021814),(function (e){
if(cljs.core.truth_(cljs.core.deref(shadow.cljs.devtools.client.browser.ws_was_welcome_ref))){
shadow.cljs.devtools.client.hud.connection_error("The Websocket connection was closed!");

return cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,false);
} else {
return null;
}
}),new cljs.core.Keyword(null,"on-reconnect","on-reconnect",1239988702),(function (e){
return shadow.cljs.devtools.client.hud.connection_error("Reconnecting ...");
}),new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"access-denied","access-denied",959449406),(function (msg){
cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,false);

return shadow.cljs.devtools.client.hud.connection_error(["Stale Output! Your loaded JS was not produced by the running shadow-cljs instance."," Is the watch for this build running?"].join(''));
}),new cljs.core.Keyword(null,"cljs-runtime-init","cljs-runtime-init",1305890232),(function (msg){
return shadow.cljs.devtools.client.browser.repl_init(runtime,msg);
}),new cljs.core.Keyword(null,"cljs-asset-update","cljs-asset-update",1224093028),(function (p__37610){
var map__37611 = p__37610;
var map__37611__$1 = (((((!((map__37611 == null))))?(((((map__37611.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37611.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37611):map__37611);
var msg = map__37611__$1;
var updates = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37611__$1,new cljs.core.Keyword(null,"updates","updates",2013983452));
return shadow.cljs.devtools.client.browser.handle_asset_update(msg);
}),new cljs.core.Keyword(null,"cljs-build-configure","cljs-build-configure",-2089891268),(function (msg){
return null;
}),new cljs.core.Keyword(null,"cljs-build-start","cljs-build-start",-725781241),(function (msg){
shadow.cljs.devtools.client.hud.hud_hide();

shadow.cljs.devtools.client.hud.load_start();

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-start","build-start",-959649480)));
}),new cljs.core.Keyword(null,"cljs-build-complete","cljs-build-complete",273626153),(function (msg){
var msg__$1 = shadow.cljs.devtools.client.env.add_warnings_to_info(msg);
shadow.cljs.devtools.client.hud.hud_warnings(msg__$1);

shadow.cljs.devtools.client.browser.handle_build_complete(runtime,msg__$1);

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg__$1,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-complete","build-complete",-501868472)));
}),new cljs.core.Keyword(null,"cljs-build-failure","cljs-build-failure",1718154990),(function (msg){
shadow.cljs.devtools.client.hud.load_end();

shadow.cljs.devtools.client.hud.hud_error(msg);

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-failure","build-failure",-2107487466)));
}),new cljs.core.Keyword("shadow.cljs.devtools.client.env","worker-notify","shadow.cljs.devtools.client.env/worker-notify",-1456820670),(function (p__37635){
var map__37636 = p__37635;
var map__37636__$1 = (((((!((map__37636 == null))))?(((((map__37636.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37636.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37636):map__37636);
var event_op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37636__$1,new cljs.core.Keyword(null,"event-op","event-op",200358057));
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37636__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-disconnect","client-disconnect",640227957),event_op)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(client_id,shadow.cljs.devtools.client.env.worker_client_id)))){
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

return shadow.cljs.devtools.client.hud.connection_error("The watch for this build was stopped!");
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-connect","client-connect",-1113973888),event_op)){
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

return shadow.cljs.devtools.client.hud.connection_error("The watch for this build was restarted. Reload required!");
} else {
return null;
}
}
})], null)], null));

return svc;
}),(function (p__37639){
var map__37640 = p__37639;
var map__37640__$1 = (((((!((map__37640 == null))))?(((((map__37640.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37640.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37640):map__37640);
var svc = map__37640__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37640__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
return shadow.remote.runtime.api.del_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282));
}));

shadow.cljs.devtools.client.shared.init_runtime_BANG_(shadow.cljs.devtools.client.browser.client_info,shadow.cljs.devtools.client.websocket.start,shadow.cljs.devtools.client.websocket.send,shadow.cljs.devtools.client.websocket.stop);
} else {
}

//# sourceMappingURL=shadow.cljs.devtools.client.browser.js.map
