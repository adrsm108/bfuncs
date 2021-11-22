goog.provide('fipp.clojure');
fipp.clojure.block = (function fipp$clojure$block(nodes){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"nest","nest",-314993663),(2),cljs.core.interpose.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"line","line",212345235),nodes)], null);
});
fipp.clojure.list_group = (function fipp$clojure$list_group(var_args){
var args__4742__auto__ = [];
var len__4736__auto___40711 = arguments.length;
var i__4737__auto___40712 = (0);
while(true){
if((i__4737__auto___40712 < len__4736__auto___40711)){
args__4742__auto__.push((arguments[i__4737__auto___40712]));

var G__40713 = (i__4737__auto___40712 + (1));
i__4737__auto___40712 = G__40713;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return fipp.clojure.list_group.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(fipp.clojure.list_group.cljs$core$IFn$_invoke$arity$variadic = (function (nodes){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"group","group",582596132),"(",nodes,")"], null);
}));

(fipp.clojure.list_group.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(fipp.clojure.list_group.cljs$lang$applyTo = (function (seq40493){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq40493));
}));

fipp.clojure.maybe_a = (function fipp$clojure$maybe_a(pred,xs){
var x = cljs.core.first(xs);
if(cljs.core.truth_((pred.cljs$core$IFn$_invoke$arity$1 ? pred.cljs$core$IFn$_invoke$arity$1(x) : pred.call(null,x)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,cljs.core.rest(xs)], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,xs], null);
}
});
fipp.clojure.pretty_cond_clause = (function fipp$clojure$pretty_cond_clause(p,p__40496){
var vec__40497 = p__40496;
var test = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40497,(0),null);
var result = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40497,(1),null);
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"group","group",582596132),fipp.visit.visit(p,test),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"nest","nest",-314993663),(2),fipp.visit.visit(p,result)], null)], null);
});
fipp.clojure.pretty_case = (function fipp$clojure$pretty_case(p,p__40503){
var vec__40504 = p__40503;
var seq__40505 = cljs.core.seq(vec__40504);
var first__40506 = cljs.core.first(seq__40505);
var seq__40505__$1 = cljs.core.next(seq__40505);
var head = first__40506;
var first__40506__$1 = cljs.core.first(seq__40505__$1);
var seq__40505__$2 = cljs.core.next(seq__40505__$1);
var expr = first__40506__$1;
var more = seq__40505__$2;
var clauses = cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),more);
var default$ = ((cljs.core.odd_QMARK_(cljs.core.count(more)))?cljs.core.last(more):null);
return fipp.clojure.list_group.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([fipp.visit.visit(p,head)," ",fipp.visit.visit(p,expr),new cljs.core.Keyword(null,"line","line",212345235),fipp.clojure.block(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__40502_SHARP_){
return fipp.clojure.pretty_cond_clause(p,p1__40502_SHARP_);
}),clauses),(cljs.core.truth_(default$)?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [fipp.visit.visit(p,default$)], null):null)))], 0));
});
fipp.clojure.pretty_cond = (function fipp$clojure$pretty_cond(p,p__40508){
var vec__40511 = p__40508;
var seq__40512 = cljs.core.seq(vec__40511);
var first__40513 = cljs.core.first(seq__40512);
var seq__40512__$1 = cljs.core.next(seq__40512);
var head = first__40513;
var more = seq__40512__$1;
var clauses = cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),more);
return fipp.clojure.list_group.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([fipp.visit.visit(p,head),new cljs.core.Keyword(null,"line","line",212345235),fipp.clojure.block(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__40507_SHARP_){
return fipp.clojure.pretty_cond_clause(p,p1__40507_SHARP_);
}),clauses))], 0));
});
fipp.clojure.pretty_condp = (function fipp$clojure$pretty_condp(p,p__40515){
var vec__40516 = p__40515;
var seq__40517 = cljs.core.seq(vec__40516);
var first__40518 = cljs.core.first(seq__40517);
var seq__40517__$1 = cljs.core.next(seq__40517);
var head = first__40518;
var first__40518__$1 = cljs.core.first(seq__40517__$1);
var seq__40517__$2 = cljs.core.next(seq__40517__$1);
var pred = first__40518__$1;
var first__40518__$2 = cljs.core.first(seq__40517__$2);
var seq__40517__$3 = cljs.core.next(seq__40517__$2);
var expr = first__40518__$2;
var more = seq__40517__$3;
var clauses = cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),more);
var default$ = ((cljs.core.odd_QMARK_(cljs.core.count(more)))?cljs.core.last(more):null);
return fipp.clojure.list_group.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([fipp.visit.visit(p,head)," ",fipp.visit.visit(p,pred)," ",fipp.visit.visit(p,expr),new cljs.core.Keyword(null,"line","line",212345235),fipp.clojure.block(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__40514_SHARP_){
return fipp.clojure.pretty_cond_clause(p,p1__40514_SHARP_);
}),clauses),(cljs.core.truth_(default$)?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [fipp.visit.visit(p,default$)], null):null)))], 0));
});
fipp.clojure.pretty_arrow = (function fipp$clojure$pretty_arrow(p,p__40522){
var vec__40523 = p__40522;
var seq__40524 = cljs.core.seq(vec__40523);
var first__40525 = cljs.core.first(seq__40524);
var seq__40524__$1 = cljs.core.next(seq__40524);
var head = first__40525;
var stmts = seq__40524__$1;
return fipp.clojure.list_group.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([fipp.visit.visit(p,head)," ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"align","align",1964212802),cljs.core.interpose.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"line","line",212345235),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__40521_SHARP_){
return fipp.visit.visit(p,p1__40521_SHARP_);
}),stmts))], null)], 0));
});
fipp.clojure.pretty_if = (function fipp$clojure$pretty_if(p,p__40529){
var vec__40530 = p__40529;
var seq__40531 = cljs.core.seq(vec__40530);
var first__40532 = cljs.core.first(seq__40531);
var seq__40531__$1 = cljs.core.next(seq__40531);
var head = first__40532;
var first__40532__$1 = cljs.core.first(seq__40531__$1);
var seq__40531__$2 = cljs.core.next(seq__40531__$1);
var test = first__40532__$1;
var more = seq__40531__$2;
return fipp.clojure.list_group.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([fipp.visit.visit(p,head)," ",fipp.visit.visit(p,test),new cljs.core.Keyword(null,"line","line",212345235),fipp.clojure.block(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__40526_SHARP_){
return fipp.visit.visit(p,p1__40526_SHARP_);
}),more))], 0));
});
fipp.clojure.pretty_method = (function fipp$clojure$pretty_method(p,p__40534){
var vec__40535 = p__40534;
var seq__40536 = cljs.core.seq(vec__40535);
var first__40537 = cljs.core.first(seq__40536);
var seq__40536__$1 = cljs.core.next(seq__40536);
var params = first__40537;
var body = seq__40536__$1;
return fipp.clojure.list_group.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([fipp.visit.visit(p,params),new cljs.core.Keyword(null,"line","line",212345235),fipp.clojure.block(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__40533_SHARP_){
return fipp.visit.visit(p,p1__40533_SHARP_);
}),body))], 0));
});
fipp.clojure.pretty_defn = (function fipp$clojure$pretty_defn(p,p__40542){
var vec__40543 = p__40542;
var seq__40544 = cljs.core.seq(vec__40543);
var first__40545 = cljs.core.first(seq__40544);
var seq__40544__$1 = cljs.core.next(seq__40544);
var head = first__40545;
var first__40545__$1 = cljs.core.first(seq__40544__$1);
var seq__40544__$2 = cljs.core.next(seq__40544__$1);
var fn_name = first__40545__$1;
var more = seq__40544__$2;
var vec__40546 = fipp.clojure.maybe_a(cljs.core.string_QMARK_,more);
var docstring = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40546,(0),null);
var more__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40546,(1),null);
var vec__40549 = fipp.clojure.maybe_a(cljs.core.map_QMARK_,more__$1);
var attr_map = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40549,(0),null);
var more__$2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40549,(1),null);
var vec__40552 = fipp.clojure.maybe_a(cljs.core.vector_QMARK_,more__$2);
var params = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40552,(0),null);
var body = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40552,(1),null);
var params_on_first_line_QMARK_ = (function (){var and__4115__auto__ = params;
if(cljs.core.truth_(and__4115__auto__)){
return (((docstring == null)) && ((attr_map == null)));
} else {
return and__4115__auto__;
}
})();
var params_after_attr_map_QMARK_ = (function (){var and__4115__auto__ = params;
if(cljs.core.truth_(and__4115__auto__)){
return cljs.core.not(params_on_first_line_QMARK_);
} else {
return and__4115__auto__;
}
})();
return fipp.clojure.list_group.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [fipp.visit.visit(p,head)," ",fipp.visit.visit(p,fn_name)], null),(cljs.core.truth_(params_on_first_line_QMARK_)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [" ",fipp.visit.visit(p,params)], null):null)),new cljs.core.Keyword(null,"line","line",212345235),fipp.clojure.block(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((cljs.core.truth_(docstring)?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [fipp.visit.visit(p,docstring)], null):null),(cljs.core.truth_(attr_map)?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [fipp.visit.visit(p,attr_map)], null):null),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(cljs.core.truth_(params_after_attr_map_QMARK_)?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [fipp.visit.visit(p,params)], null):null),(cljs.core.truth_(body)?cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__40540_SHARP_){
return fipp.visit.visit(p,p1__40540_SHARP_);
}),body):cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__40541_SHARP_){
return fipp.clojure.pretty_method(p,p1__40541_SHARP_);
}),more__$2))], 0)))], 0));
});
fipp.clojure.pretty_fn = (function fipp$clojure$pretty_fn(p,p__40561){
var vec__40563 = p__40561;
var seq__40564 = cljs.core.seq(vec__40563);
var first__40565 = cljs.core.first(seq__40564);
var seq__40564__$1 = cljs.core.next(seq__40564);
var head = first__40565;
var more = seq__40564__$1;
var vec__40567 = fipp.clojure.maybe_a(cljs.core.symbol_QMARK_,more);
var fn_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40567,(0),null);
var more__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40567,(1),null);
var vec__40570 = fipp.clojure.maybe_a(cljs.core.vector_QMARK_,more__$1);
var params = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40570,(0),null);
var body = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40570,(1),null);
return fipp.clojure.list_group.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [fipp.visit.visit(p,head)], null),(cljs.core.truth_(fn_name)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [" ",fipp.visit.visit(p,fn_name)], null):null),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(cljs.core.truth_(params)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [" ",fipp.visit.visit(p,params)], null):null)], 0)),new cljs.core.Keyword(null,"line","line",212345235),fipp.clojure.block((cljs.core.truth_(body)?cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__40558_SHARP_){
return fipp.visit.visit(p,p1__40558_SHARP_);
}),body):cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__40559_SHARP_){
return fipp.clojure.pretty_method(p,p1__40559_SHARP_);
}),more__$1)))], 0));
});
fipp.clojure.pretty_fn_STAR_ = (function fipp$clojure$pretty_fn_STAR_(p,p__40578){
var vec__40579 = p__40578;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40579,(0),null);
var params = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40579,(1),null);
var body = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40579,(2),null);
var form = vec__40579;
if(((cljs.core.vector_QMARK_(params)) && (cljs.core.seq_QMARK_(body)))){
var vec__40582 = cljs.core.split_with((function (p1__40573_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(p1__40573_SHARP_,new cljs.core.Symbol(null,"&","&",-2144855648,null));
}),params);
var inits = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40582,(0),null);
var rests = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40582,(1),null);
var params_STAR_ = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(inits),(1)))?cljs.core.PersistentArrayMap.createAsIfByAssoc([cljs.core.first(inits),new cljs.core.Symbol(null,"%","%",-950237169,null)]):cljs.core.zipmap(inits,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__40574_SHARP_){
return cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(["%",cljs.core.str.cljs$core$IFn$_invoke$arity$1((p1__40574_SHARP_ + (1)))].join(''));
}),cljs.core.range.cljs$core$IFn$_invoke$arity$0()))),((cljs.core.seq(rests))?cljs.core.PersistentArrayMap.createAsIfByAssoc([cljs.core.second(rests),new cljs.core.Symbol(null,"%&","%&",-728707069,null)]):null)], 0));
var body_STAR_ = clojure.walk.prewalk_replace(params_STAR_,body);
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"group","group",582596132),"#(",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"align","align",1964212802),(2),cljs.core.interpose.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"line","line",212345235),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__40575_SHARP_){
return fipp.visit.visit(p,p1__40575_SHARP_);
}),body_STAR_))], null),")"], null);
} else {
return fipp.clojure.pretty_fn(p,form);
}
});
fipp.clojure.pretty_libspec = (function fipp$clojure$pretty_libspec(p,p__40588){
var vec__40589 = p__40588;
var seq__40590 = cljs.core.seq(vec__40589);
var first__40591 = cljs.core.first(seq__40590);
var seq__40590__$1 = cljs.core.next(seq__40590);
var head = first__40591;
var clauses = seq__40590__$1;
return fipp.clojure.list_group.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([fipp.visit.visit(p,head)," ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"align","align",1964212802),cljs.core.interpose.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"line","line",212345235),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__40587_SHARP_){
return fipp.visit.visit(p,p1__40587_SHARP_);
}),clauses))], null)], 0));
});
fipp.clojure.pretty_ns = (function fipp$clojure$pretty_ns(p,p__40593){
var vec__40594 = p__40593;
var seq__40595 = cljs.core.seq(vec__40594);
var first__40596 = cljs.core.first(seq__40595);
var seq__40595__$1 = cljs.core.next(seq__40595);
var head = first__40596;
var first__40596__$1 = cljs.core.first(seq__40595__$1);
var seq__40595__$2 = cljs.core.next(seq__40595__$1);
var ns_sym = first__40596__$1;
var more = seq__40595__$2;
var vec__40597 = fipp.clojure.maybe_a(cljs.core.string_QMARK_,more);
var docstring = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40597,(0),null);
var more__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40597,(1),null);
var vec__40600 = fipp.clojure.maybe_a(cljs.core.map_QMARK_,more__$1);
var attr_map = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40600,(0),null);
var specs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40600,(1),null);
return fipp.clojure.list_group.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([fipp.visit.visit(p,head)," ",fipp.visit.visit(p,ns_sym),new cljs.core.Keyword(null,"line","line",212345235),fipp.clojure.block(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((cljs.core.truth_(docstring)?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [fipp.visit.visit(p,docstring)], null):null),(cljs.core.truth_(attr_map)?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [fipp.visit.visit(p,attr_map)], null):null),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__40592_SHARP_){
return fipp.clojure.pretty_libspec(p,p1__40592_SHARP_);
}),specs)], 0)))], 0));
});
fipp.clojure.pretty_quote = (function fipp$clojure$pretty_quote(p,p__40603){
var vec__40604 = p__40603;
var macro = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40604,(0),null);
var arg = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40604,(1),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),(function (){var G__40609 = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(cljs.core.name(macro));
var G__40609__$1 = (((G__40609 instanceof cljs.core.Keyword))?G__40609.fqn:null);
switch (G__40609__$1) {
case "deref":
return "@";

break;
case "quote":
return "'";

break;
case "unquote":
return "~";

break;
case "var":
return "#'";

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__40609__$1)].join('')));

}
})(),fipp.visit.visit(p,arg)], null);
});
fipp.clojure.pretty_bindings = (function fipp$clojure$pretty_bindings(p,bvec){
var kvps = (function (){var iter__4529__auto__ = (function fipp$clojure$pretty_bindings_$_iter__40611(s__40612){
return (new cljs.core.LazySeq(null,(function (){
var s__40612__$1 = s__40612;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__40612__$1);
if(temp__5735__auto__){
var s__40612__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__40612__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__40612__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__40614 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__40613 = (0);
while(true){
if((i__40613 < size__4528__auto__)){
var vec__40618 = cljs.core._nth(c__4527__auto__,i__40613);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40618,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40618,(1),null);
cljs.core.chunk_append(b__40614,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),fipp.visit.visit(p,k)," ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"align","align",1964212802),fipp.visit.visit(p,v)], null)], null));

var G__40769 = (i__40613 + (1));
i__40613 = G__40769;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__40614),fipp$clojure$pretty_bindings_$_iter__40611(cljs.core.chunk_rest(s__40612__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__40614),null);
}
} else {
var vec__40621 = cljs.core.first(s__40612__$2);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40621,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40621,(1),null);
return cljs.core.cons(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),fipp.visit.visit(p,k)," ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"align","align",1964212802),fipp.visit.visit(p,v)], null)], null),fipp$clojure$pretty_bindings_$_iter__40611(cljs.core.rest(s__40612__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4529__auto__(cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),bvec));
})();
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"group","group",582596132),"[",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"align","align",1964212802),cljs.core.interpose.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"line","line",212345235),", "], null),kvps)], null),"]"], null);
});
fipp.clojure.pretty_let = (function fipp$clojure$pretty_let(p,p__40628){
var vec__40631 = p__40628;
var seq__40632 = cljs.core.seq(vec__40631);
var first__40633 = cljs.core.first(seq__40632);
var seq__40632__$1 = cljs.core.next(seq__40632);
var head = first__40633;
var first__40633__$1 = cljs.core.first(seq__40632__$1);
var seq__40632__$2 = cljs.core.next(seq__40632__$1);
var bvec = first__40633__$1;
var body = seq__40632__$2;
return fipp.clojure.list_group.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([fipp.visit.visit(p,head)," ",fipp.clojure.pretty_bindings(p,bvec),new cljs.core.Keyword(null,"line","line",212345235),fipp.clojure.block(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__40627_SHARP_){
return fipp.visit.visit(p,p1__40627_SHARP_);
}),body))], 0));
});
fipp.clojure.pretty_impls = (function fipp$clojure$pretty_impls(p,opts_PLUS_specs){
return fipp.clojure.block(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__40640_SHARP_){
return fipp.visit.visit(p,p1__40640_SHARP_);
}),opts_PLUS_specs));
});
fipp.clojure.pretty_type = (function fipp$clojure$pretty_type(p,p__40645){
var vec__40649 = p__40645;
var seq__40650 = cljs.core.seq(vec__40649);
var first__40651 = cljs.core.first(seq__40650);
var seq__40650__$1 = cljs.core.next(seq__40650);
var head = first__40651;
var first__40651__$1 = cljs.core.first(seq__40650__$1);
var seq__40650__$2 = cljs.core.next(seq__40650__$1);
var fields = first__40651__$1;
var opts_PLUS_specs = seq__40650__$2;
return fipp.clojure.list_group.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([fipp.visit.visit(p,head)," ",fipp.visit.visit(p,fields),new cljs.core.Keyword(null,"line","line",212345235),fipp.clojure.pretty_impls(p,opts_PLUS_specs)], 0));
});
fipp.clojure.pretty_reify = (function fipp$clojure$pretty_reify(p,p__40653){
var vec__40654 = p__40653;
var seq__40655 = cljs.core.seq(vec__40654);
var first__40657 = cljs.core.first(seq__40655);
var seq__40655__$1 = cljs.core.next(seq__40655);
var head = first__40657;
var opts_PLUS_specs = seq__40655__$1;
return fipp.clojure.list_group.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([fipp.visit.visit(p,head),new cljs.core.Keyword(null,"line","line",212345235),fipp.clojure.pretty_impls(p,opts_PLUS_specs)], 0));
});
fipp.clojure.build_symbol_map = (function fipp$clojure$build_symbol_map(dispatch){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__4529__auto__ = (function fipp$clojure$build_symbol_map_$_iter__40662(s__40663){
return (new cljs.core.LazySeq(null,(function (){
var s__40663__$1 = s__40663;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__40663__$1);
if(temp__5735__auto__){
var xs__6292__auto__ = temp__5735__auto__;
var vec__40676 = cljs.core.first(xs__6292__auto__);
var pretty_fn = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40676,(0),null);
var syms = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40676,(1),null);
var iterys__4525__auto__ = ((function (s__40663__$1,vec__40676,pretty_fn,syms,xs__6292__auto__,temp__5735__auto__){
return (function fipp$clojure$build_symbol_map_$_iter__40662_$_iter__40664(s__40665){
return (new cljs.core.LazySeq(null,((function (s__40663__$1,vec__40676,pretty_fn,syms,xs__6292__auto__,temp__5735__auto__){
return (function (){
var s__40665__$1 = s__40665;
while(true){
var temp__5735__auto____$1 = cljs.core.seq(s__40665__$1);
if(temp__5735__auto____$1){
var xs__6292__auto____$1 = temp__5735__auto____$1;
var sym = cljs.core.first(xs__6292__auto____$1);
var iterys__4525__auto__ = ((function (s__40665__$1,s__40663__$1,sym,xs__6292__auto____$1,temp__5735__auto____$1,vec__40676,pretty_fn,syms,xs__6292__auto__,temp__5735__auto__){
return (function fipp$clojure$build_symbol_map_$_iter__40662_$_iter__40664_$_iter__40666(s__40667){
return (new cljs.core.LazySeq(null,((function (s__40665__$1,s__40663__$1,sym,xs__6292__auto____$1,temp__5735__auto____$1,vec__40676,pretty_fn,syms,xs__6292__auto__,temp__5735__auto__){
return (function (){
var s__40667__$1 = s__40667;
while(true){
var temp__5735__auto____$2 = cljs.core.seq(s__40667__$1);
if(temp__5735__auto____$2){
var s__40667__$2 = temp__5735__auto____$2;
if(cljs.core.chunked_seq_QMARK_(s__40667__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__40667__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__40669 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__40668 = (0);
while(true){
if((i__40668 < size__4528__auto__)){
var sym__$1 = cljs.core._nth(c__4527__auto__,i__40668);
cljs.core.chunk_append(b__40669,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sym__$1,pretty_fn], null));

var G__40783 = (i__40668 + (1));
i__40668 = G__40783;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__40669),fipp$clojure$build_symbol_map_$_iter__40662_$_iter__40664_$_iter__40666(cljs.core.chunk_rest(s__40667__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__40669),null);
}
} else {
var sym__$1 = cljs.core.first(s__40667__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sym__$1,pretty_fn], null),fipp$clojure$build_symbol_map_$_iter__40662_$_iter__40664_$_iter__40666(cljs.core.rest(s__40667__$2)));
}
} else {
return null;
}
break;
}
});})(s__40665__$1,s__40663__$1,sym,xs__6292__auto____$1,temp__5735__auto____$1,vec__40676,pretty_fn,syms,xs__6292__auto__,temp__5735__auto__))
,null,null));
});})(s__40665__$1,s__40663__$1,sym,xs__6292__auto____$1,temp__5735__auto____$1,vec__40676,pretty_fn,syms,xs__6292__auto__,temp__5735__auto__))
;
var fs__4526__auto__ = cljs.core.seq(iterys__4525__auto__(cljs.core.cons(sym,((cljs.core.special_symbol_QMARK_(sym))?null:new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("clojure.core",cljs.core.name(sym)),cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("cljs.core",cljs.core.name(sym))], null)))));
if(fs__4526__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4526__auto__,fipp$clojure$build_symbol_map_$_iter__40662_$_iter__40664(cljs.core.rest(s__40665__$1)));
} else {
var G__40785 = cljs.core.rest(s__40665__$1);
s__40665__$1 = G__40785;
continue;
}
} else {
return null;
}
break;
}
});})(s__40663__$1,vec__40676,pretty_fn,syms,xs__6292__auto__,temp__5735__auto__))
,null,null));
});})(s__40663__$1,vec__40676,pretty_fn,syms,xs__6292__auto__,temp__5735__auto__))
;
var fs__4526__auto__ = cljs.core.seq(iterys__4525__auto__(syms));
if(fs__4526__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4526__auto__,fipp$clojure$build_symbol_map_$_iter__40662(cljs.core.rest(s__40663__$1)));
} else {
var G__40786 = cljs.core.rest(s__40663__$1);
s__40663__$1 = G__40786;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4529__auto__(dispatch);
})());
});
fipp.clojure.default_symbols = fipp.clojure.build_symbol_map(cljs.core.PersistentHashMap.fromArrays([fipp.clojure.pretty_fn_STAR_,fipp.clojure.pretty_condp,fipp.clojure.pretty_quote,fipp.clojure.pretty_cond,fipp.clojure.pretty_fn,fipp.clojure.pretty_arrow,fipp.clojure.pretty_reify,fipp.clojure.pretty_let,fipp.clojure.pretty_type,fipp.clojure.pretty_if,fipp.clojure.pretty_defn,fipp.clojure.pretty_ns,fipp.clojure.pretty_case],[new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"fn*","fn*",-752876845,null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"condp","condp",1054325175,null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"deref","deref",1494944732,null),new cljs.core.Symbol(null,"quote","quote",1377916282,null),new cljs.core.Symbol(null,"unquote","unquote",-1004694737,null),new cljs.core.Symbol(null,"var","var",870848730,null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"cond","cond",1606708055,null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"fn","fn",465265323,null)], null),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,".",".",1975675962,null),new cljs.core.Symbol(null,"..","..",-300507420,null),new cljs.core.Symbol(null,"->","->",-2139605430,null),new cljs.core.Symbol(null,"->>","->>",-1874332161,null),new cljs.core.Symbol(null,"and","and",668631710,null),new cljs.core.Symbol(null,"doto","doto",1252536074,null),new cljs.core.Symbol(null,"or","or",1876275696,null),new cljs.core.Symbol(null,"some->","some->",-1011172200,null),new cljs.core.Symbol(null,"some->>","some->>",-1499987794,null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"reify","reify",1885539699,null)], null),new cljs.core.PersistentVector(null, 16, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"binding","binding",-2114503176,null),new cljs.core.Symbol(null,"doseq","doseq",221164135,null),new cljs.core.Symbol(null,"dotimes","dotimes",-818708397,null),new cljs.core.Symbol(null,"for","for",316745208,null),new cljs.core.Symbol(null,"if-let","if-let",1803593690,null),new cljs.core.Symbol(null,"if-some","if-some",1960677609,null),new cljs.core.Symbol(null,"let","let",358118826,null),new cljs.core.Symbol(null,"let*","let*",1920721458,null),new cljs.core.Symbol(null,"loop","loop",1244978678,null),new cljs.core.Symbol(null,"loop*","loop*",615029416,null),new cljs.core.Symbol(null,"when-first","when-first",821699168,null),new cljs.core.Symbol(null,"when-let","when-let",-1383043480,null),new cljs.core.Symbol(null,"when-some","when-some",1700415903,null),new cljs.core.Symbol(null,"with-local-vars","with-local-vars",837642072,null),new cljs.core.Symbol(null,"with-open","with-open",172119667,null),new cljs.core.Symbol(null,"with-redefs","with-redefs",-1143728263,null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"deftype","deftype",1980826088,null),new cljs.core.Symbol(null,"defrecord","defrecord",273038109,null)], null),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"def","def",597100991,null),new cljs.core.Symbol(null,"defonce","defonce",-1681484013,null),new cljs.core.Symbol(null,"if","if",1181717262,null),new cljs.core.Symbol(null,"if-not","if-not",-265415609,null),new cljs.core.Symbol(null,"when","when",1064114221,null),new cljs.core.Symbol(null,"when-not","when-not",-1223136340,null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"defmacro","defmacro",2054157304,null),new cljs.core.Symbol(null,"defmulti","defmulti",1936112154,null),new cljs.core.Symbol(null,"defn","defn",-126010802,null),new cljs.core.Symbol(null,"defn-","defn-",1097765044,null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ns","ns",2082130287,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"case","case",-1510733573,null),new cljs.core.Symbol(null,"cond->","cond->",561741875,null),new cljs.core.Symbol(null,"cond->>","cond->>",348844960,null)], null)]));
fipp.clojure.pprint = (function fipp$clojure$pprint(var_args){
var G__40702 = arguments.length;
switch (G__40702) {
case 1:
return fipp.clojure.pprint.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return fipp.clojure.pprint.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(fipp.clojure.pprint.cljs$core$IFn$_invoke$arity$1 = (function (x){
return fipp.clojure.pprint.cljs$core$IFn$_invoke$arity$2(x,cljs.core.PersistentArrayMap.EMPTY);
}));

(fipp.clojure.pprint.cljs$core$IFn$_invoke$arity$2 = (function (x,options){
return fipp.edn.pprint.cljs$core$IFn$_invoke$arity$2(x,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"symbols","symbols",1211743),fipp.clojure.default_symbols], null),options], 0)));
}));

(fipp.clojure.pprint.cljs$lang$maxFixedArity = 2);


//# sourceMappingURL=fipp.clojure.js.map
