goog.provide('bfuncs.data');
bfuncs.data.operations = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"NOT","NOT",-1689245341),new cljs.core.Keyword(null,"TRUE","TRUE",494241636),new cljs.core.Keyword(null,"FALSE","FALSE",1063613829),new cljs.core.Keyword(null,"NOR","NOR",1230816390),new cljs.core.Keyword(null,"AND","AND",1519433640),new cljs.core.Keyword(null,"XOR","XOR",-682432949),new cljs.core.Keyword(null,"CON","CON",138413899),new cljs.core.Keyword(null,"OR","OR",-1220615924),new cljs.core.Keyword(null,"NIMP","NIMP",-733613840),new cljs.core.Keyword(null,"IMP","IMP",-668216011),new cljs.core.Keyword(null,"NAND","NAND",-421918697),new cljs.core.Keyword(null,"NCON","NCON",625732185),new cljs.core.Keyword(null,"XNOR","XNOR",1530244797)],[new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"dual","dual",255446534),new cljs.core.Keyword(null,"NOT","NOT",-1689245341)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"dual","dual",255446534),new cljs.core.Keyword(null,"FALSE","FALSE",1063613829)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"dual","dual",255446534),new cljs.core.Keyword(null,"TRUE","TRUE",494241636)], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"assoc","assoc",430908853),false,new cljs.core.Keyword(null,"comm","comm",-1689770614),true,new cljs.core.Keyword(null,"dist","dist",-1401837144),cljs.core.PersistentHashSet.EMPTY,new cljs.core.Keyword(null,"dual","dual",255446534),new cljs.core.Keyword(null,"NAND","NAND",-421918697)], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"assoc","assoc",430908853),true,new cljs.core.Keyword(null,"comm","comm",-1689770614),true,new cljs.core.Keyword(null,"dist","dist",-1401837144),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"XOR","XOR",-682432949),null,new cljs.core.Keyword(null,"OR","OR",-1220615924),null,new cljs.core.Keyword(null,"NIMP","NIMP",-733613840),null,new cljs.core.Keyword(null,"NCON","NCON",625732185),null], null), null),new cljs.core.Keyword(null,"dual","dual",255446534),new cljs.core.Keyword(null,"OR","OR",-1220615924)], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"assoc","assoc",430908853),true,new cljs.core.Keyword(null,"comm","comm",-1689770614),true,new cljs.core.Keyword(null,"dist","dist",-1401837144),cljs.core.PersistentHashSet.EMPTY,new cljs.core.Keyword(null,"dual","dual",255446534),new cljs.core.Keyword(null,"XNOR","XNOR",1530244797)], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"assoc","assoc",430908853),false,new cljs.core.Keyword(null,"comm","comm",-1689770614),false,new cljs.core.Keyword(null,"dist","dist",-1401837144),cljs.core.PersistentHashSet.EMPTY,new cljs.core.Keyword(null,"dual","dual",255446534),new cljs.core.Keyword(null,"NIMP","NIMP",-733613840)], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"assoc","assoc",430908853),true,new cljs.core.Keyword(null,"comm","comm",-1689770614),true,new cljs.core.Keyword(null,"dist","dist",-1401837144),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"AND","AND",1519433640),null,new cljs.core.Keyword(null,"CON","CON",138413899),null,new cljs.core.Keyword(null,"IMP","IMP",-668216011),null,new cljs.core.Keyword(null,"XNOR","XNOR",1530244797),null], null), null),new cljs.core.Keyword(null,"dual","dual",255446534),new cljs.core.Keyword(null,"AND","AND",1519433640)], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"assoc","assoc",430908853),false,new cljs.core.Keyword(null,"comm","comm",-1689770614),false,new cljs.core.Keyword(null,"dist","dist",-1401837144),cljs.core.PersistentHashSet.EMPTY,new cljs.core.Keyword(null,"dual","dual",255446534),new cljs.core.Keyword(null,"CON","CON",138413899)], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"assoc","assoc",430908853),false,new cljs.core.Keyword(null,"comm","comm",-1689770614),false,new cljs.core.Keyword(null,"dist","dist",-1401837144),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"AND","AND",1519433640),null,new cljs.core.Keyword(null,"CON","CON",138413899),null,new cljs.core.Keyword(null,"OR","OR",-1220615924),null,new cljs.core.Keyword(null,"XNOR","XNOR",1530244797),null], null), null),new cljs.core.Keyword(null,"dual","dual",255446534),new cljs.core.Keyword(null,"NCON","NCON",625732185)], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"assoc","assoc",430908853),false,new cljs.core.Keyword(null,"comm","comm",-1689770614),true,new cljs.core.Keyword(null,"dist","dist",-1401837144),cljs.core.PersistentHashSet.EMPTY,new cljs.core.Keyword(null,"dual","dual",255446534),new cljs.core.Keyword(null,"NOR","NOR",1230816390)], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"assoc","assoc",430908853),false,new cljs.core.Keyword(null,"comm","comm",-1689770614),false,new cljs.core.Keyword(null,"dist","dist",-1401837144),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"AND","AND",1519433640),null,new cljs.core.Keyword(null,"XOR","XOR",-682432949),null,new cljs.core.Keyword(null,"OR","OR",-1220615924),null,new cljs.core.Keyword(null,"NIMP","NIMP",-733613840),null], null), null),new cljs.core.Keyword(null,"dual","dual",255446534),new cljs.core.Keyword(null,"IMP","IMP",-668216011)], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"assoc","assoc",430908853),true,new cljs.core.Keyword(null,"comm","comm",-1689770614),true,new cljs.core.Keyword(null,"dist","dist",-1401837144),cljs.core.PersistentHashSet.EMPTY,new cljs.core.Keyword(null,"dual","dual",255446534),new cljs.core.Keyword(null,"XOR","XOR",-682432949)], null)]);
bfuncs.data.infix_operator_strs = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"EQ","EQ",-205905246),new cljs.core.Keyword(null,"NOR","NOR",1230816390),new cljs.core.Keyword(null,"AND","AND",1519433640),new cljs.core.Keyword(null,"XOR","XOR",-682432949),new cljs.core.Keyword(null,"CON","CON",138413899),new cljs.core.Keyword(null,"OR","OR",-1220615924),new cljs.core.Keyword(null,"NIMP","NIMP",-733613840),new cljs.core.Keyword(null,"IMP","IMP",-668216011),new cljs.core.Keyword(null,"NAND","NAND",-421918697),new cljs.core.Keyword(null,"NCON","NCON",625732185),new cljs.core.Keyword(null,"XNOR","XNOR",1530244797)],[" <=> "," !|| "," && "," <+> "," <== "," || "," !==> "," ==> "," !&& "," !<== "," <*> "]);
bfuncs.data.prefix_operator_strs = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"EQ","EQ",-205905246),new cljs.core.Keyword(null,"NOT","NOT",-1689245341),new cljs.core.Keyword(null,"NOR","NOR",1230816390),new cljs.core.Keyword(null,"AND","AND",1519433640),new cljs.core.Keyword(null,"XOR","XOR",-682432949),new cljs.core.Keyword(null,"CON","CON",138413899),new cljs.core.Keyword(null,"OR","OR",-1220615924),new cljs.core.Keyword(null,"NIMP","NIMP",-733613840),new cljs.core.Keyword(null,"IMP","IMP",-668216011),new cljs.core.Keyword(null,"NAND","NAND",-421918697),new cljs.core.Keyword(null,"NCON","NCON",625732185),new cljs.core.Keyword(null,"XNOR","XNOR",1530244797)],["<=>","!","!||","&&","<+>","<==","||","!==>","==>","!&&","!<==","<*>"]);
bfuncs.data.mathematica_operator_strs = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"EQ","EQ",-205905246),new cljs.core.Keyword(null,"NOT","NOT",-1689245341),new cljs.core.Keyword(null,"NOR","NOR",1230816390),new cljs.core.Keyword(null,"AND","AND",1519433640),new cljs.core.Keyword(null,"XOR","XOR",-682432949),new cljs.core.Keyword(null,"CON","CON",138413899),new cljs.core.Keyword(null,"OR","OR",-1220615924),new cljs.core.Keyword(null,"NIMP","NIMP",-733613840),new cljs.core.Keyword(null,"IMP","IMP",-668216011),new cljs.core.Keyword(null,"NAND","NAND",-421918697),new cljs.core.Keyword(null,"NCON","NCON",625732185),new cljs.core.Keyword(null,"XNOR","XNOR",1530244797)],["Equivalent","Not","Nor","And","Xor","ReverseApplied[Implies]","Or","(Not@*Implies)","Implies","Nand","(Not@*ReverseApplied[Implies])","Xnor"]);
bfuncs.data.pr_writer_mma = (function bfuncs$data$pr_writer_mma(obj,writer,opts){
var G__67027 = obj;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(true,G__67027)){
return cljs.core._write(writer,"True");
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(false,G__67027)){
return cljs.core._write(writer,"False");
} else {
return cljs.core.pr_writer(obj,writer,opts);

}
}
});
bfuncs.data.bool_op_pr_writer = (function bfuncs$data$bool_op_pr_writer(operation,operands,writer,p__67028){
var map__67029 = p__67028;
var map__67029__$1 = (((((!((map__67029 == null))))?(((((map__67029.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__67029.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__67029):map__67029);
var opts = map__67029__$1;
var mathematica = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67029__$1,new cljs.core.Keyword(null,"mathematica","mathematica",-1921239971));
var readably = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67029__$1,new cljs.core.Keyword(null,"readably","readably",1129599760));
return cljs.core.pr_sequential_writer(writer,(cljs.core.truth_(mathematica)?bfuncs.data.pr_writer_mma:cljs.core.pr_writer),(cljs.core.truth_(mathematica)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var o__27513__auto__ = bfuncs.data.mathematica_operator_strs;
var k__27514__auto__ = operation;
if(cljs.core.contains_QMARK_(o__27513__auto__,k__27514__auto__)){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(o__27513__auto__,k__27514__auto__);
} else {
return cljs.core.name(operation);
}
})()),"["].join(''):(cljs.core.truth_(readably)?["(",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var o__27513__auto__ = bfuncs.data.prefix_operator_strs;
var k__27514__auto__ = operation;
if(cljs.core.contains_QMARK_(o__27513__auto__,k__27514__auto__)){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(o__27513__auto__,k__27514__auto__);
} else {
return cljs.core.name(operation);
}
})())," "].join(''):"("
)),(cljs.core.truth_(mathematica)?", ":(cljs.core.truth_(readably)?" ":(function (){var o__27513__auto__ = bfuncs.data.infix_operator_strs;
var k__27514__auto__ = operation;
if(cljs.core.contains_QMARK_(o__27513__auto__,k__27514__auto__)){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(o__27513__auto__,k__27514__auto__);
} else {
return [" ~",cljs.core.name(operation),"~ "].join('');
}
})()
)),(cljs.core.truth_(mathematica)?"]":")"
),opts,operands);
});

/**
 * @interface
 */
bfuncs.data.IBoolOp = function(){};

var bfuncs$data$IBoolOp$_operation$dyn_67238 = (function (this$){
var x__4428__auto__ = (((this$ == null))?null:this$);
var m__4429__auto__ = (bfuncs.data._operation[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4429__auto__.call(null,this$));
} else {
var m__4426__auto__ = (bfuncs.data._operation["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4426__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("IBoolOp.-operation",this$);
}
}
});
bfuncs.data._operation = (function bfuncs$data$_operation(this$){
if((((!((this$ == null)))) && ((!((this$.bfuncs$data$IBoolOp$_operation$arity$1 == null)))))){
return this$.bfuncs$data$IBoolOp$_operation$arity$1(this$);
} else {
return bfuncs$data$IBoolOp$_operation$dyn_67238(this$);
}
});

var bfuncs$data$IBoolOp$_operands$dyn_67239 = (function (this$){
var x__4428__auto__ = (((this$ == null))?null:this$);
var m__4429__auto__ = (bfuncs.data._operands[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4429__auto__.call(null,this$));
} else {
var m__4426__auto__ = (bfuncs.data._operands["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4426__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("IBoolOp.-operands",this$);
}
}
});
bfuncs.data._operands = (function bfuncs$data$_operands(this$){
if((((!((this$ == null)))) && ((!((this$.bfuncs$data$IBoolOp$_operands$arity$1 == null)))))){
return this$.bfuncs$data$IBoolOp$_operands$arity$1(this$);
} else {
return bfuncs$data$IBoolOp$_operands$dyn_67239(this$);
}
});

var bfuncs$data$IBoolOp$_replace_operands$dyn_67240 = (function (this$,smap){
var x__4428__auto__ = (((this$ == null))?null:this$);
var m__4429__auto__ = (bfuncs.data._replace_operands[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$2(this$,smap) : m__4429__auto__.call(null,this$,smap));
} else {
var m__4426__auto__ = (bfuncs.data._replace_operands["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$2(this$,smap) : m__4426__auto__.call(null,this$,smap));
} else {
throw cljs.core.missing_protocol("IBoolOp.-replace-operands",this$);
}
}
});
bfuncs.data._replace_operands = (function bfuncs$data$_replace_operands(this$,smap){
if((((!((this$ == null)))) && ((!((this$.bfuncs$data$IBoolOp$_replace_operands$arity$2 == null)))))){
return this$.bfuncs$data$IBoolOp$_replace_operands$arity$2(this$,smap);
} else {
return bfuncs$data$IBoolOp$_replace_operands$dyn_67240(this$,smap);
}
});

var bfuncs$data$IBoolOp$_with_operation$dyn_67241 = (function (this$,op){
var x__4428__auto__ = (((this$ == null))?null:this$);
var m__4429__auto__ = (bfuncs.data._with_operation[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$2(this$,op) : m__4429__auto__.call(null,this$,op));
} else {
var m__4426__auto__ = (bfuncs.data._with_operation["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$2(this$,op) : m__4426__auto__.call(null,this$,op));
} else {
throw cljs.core.missing_protocol("IBoolOp.-with-operation",this$);
}
}
});
bfuncs.data._with_operation = (function bfuncs$data$_with_operation(this$,op){
if((((!((this$ == null)))) && ((!((this$.bfuncs$data$IBoolOp$_with_operation$arity$2 == null)))))){
return this$.bfuncs$data$IBoolOp$_with_operation$arity$2(this$,op);
} else {
return bfuncs$data$IBoolOp$_with_operation$dyn_67241(this$,op);
}
});

bfuncs.data.hash_bool_unary = (function bfuncs$data$hash_bool_unary(bun){
return cljs.core.hash_combine(cljs.core.hash(bfuncs.data._operation(bun)),cljs.core.hash(cljs.core.first(bun)));
});
bfuncs.data.hash_bool_set = (function bfuncs$data$hash_bool_set(bset){
var temp__5733__auto__ = cljs.core.seq(bset);
if(temp__5733__auto__){
var s = temp__5733__auto__;
return cljs.core.hash_combine(cljs.core.hash(bfuncs.data._operation(bset)),cljs.core.hash_unordered_coll(s));
} else {
return (0);
}
});
bfuncs.data.hash_bool_vec = (function bfuncs$data$hash_bool_vec(bvec){
var temp__5733__auto__ = cljs.core.seq(bvec);
if(temp__5733__auto__){
var s = temp__5733__auto__;
return cljs.core.hash_combine(cljs.core.hash(bfuncs.data._operation(bvec)),cljs.core.hash_ordered_coll(s));
} else {
return (0);
}
});
bfuncs.data.replace_operands = (function bfuncs$data$replace_operands(smap,x){
if((((!((x == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === x.bfuncs$data$IBoolOp$))))?true:(((!x.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_(bfuncs.data.IBoolOp,x):false)):cljs.core.native_satisfies_QMARK_(bfuncs.data.IBoolOp,x))){
return bfuncs.data._replace_operands(x,smap);
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(smap,x,x);
}
});
/**
 * Returns (-op x) if x satisfies IBoolOp, nil otherwise.
 */
bfuncs.data.operation = (function bfuncs$data$operation(x){
if((((!((x == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === x.bfuncs$data$IBoolOp$))))?true:(((!x.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_(bfuncs.data.IBoolOp,x):false)):cljs.core.native_satisfies_QMARK_(bfuncs.data.IBoolOp,x))){
return bfuncs.data._operation(x);
} else {
return null;
}
});
bfuncs.data.operands = (function bfuncs$data$operands(x){
if((((!((x == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === x.bfuncs$data$IBoolOp$))))?true:(((!x.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_(bfuncs.data.IBoolOp,x):false)):cljs.core.native_satisfies_QMARK_(bfuncs.data.IBoolOp,x))){
return bfuncs.data._operands(x);
} else {
return null;
}
});
bfuncs.data.precedence = (function bfuncs$data$precedence(op){
var G__67064 = op;
var G__67064__$1 = (((G__67064 instanceof cljs.core.Keyword))?G__67064.fqn:null);
switch (G__67064__$1) {
case "IMP":
case "NIMP":
return (1);

break;
case "CON":
case "NCON":
return (2);

break;
case "EQ":
return (3);

break;
case "OR":
case "NOR":
return (4);

break;
case "XOR":
case "XNOR":
return (5);

break;
case "AND":
case "NAND":
return (6);

break;
case "NOT":
return (7);

break;
default:
return null;

}
});
bfuncs.data.scrape_top = (function bfuncs$data$scrape_top(cmp,coll){
if(cljs.core.empty_QMARK_(coll)){
return null;
} else {
var top = cljs.core.first(coll);
var coll__$1 = cljs.core.next(coll);
while(true){
var temp__5733__auto__ = cljs.core.seq(coll__$1);
if(temp__5733__auto__){
var xs__27556__auto__ = temp__5733__auto__;
var x = cljs.core.first(xs__27556__auto__);
var G__67247 = ((((cmp.cljs$core$IFn$_invoke$arity$2 ? cmp.cljs$core$IFn$_invoke$arity$2(top,x) : cmp.call(null,top,x)) > (0)))?x:top);
var G__67248 = cljs.core.next(coll__$1);
top = G__67247;
coll__$1 = G__67248;
continue;
} else {
return top;
}
break;
}
}
});
bfuncs.data.compare_bobj = (function bfuncs$data$compare_bobj(x,y){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(x,y)){
return (0);
} else {
var ox = bfuncs.data.operation(x);
var oy = bfuncs.data.operation(y);
var f67115 = (function (p1__67074_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"NOT","NOT",-1689245341),p1__67074_SHARP_);
});
if(f67115(ox)){
if(f67115(oy)){
var G__67116 = cljs.core.first(x);
var G__67117 = cljs.core.first(y);
return (bfuncs.data.compare_bobj.cljs$core$IFn$_invoke$arity$2 ? bfuncs.data.compare_bobj.cljs$core$IFn$_invoke$arity$2(G__67116,G__67117) : bfuncs.data.compare_bobj.call(null,G__67116,G__67117));
} else {
var v__27657__auto__ = (function (){var G__67119 = cljs.core.first(x);
var G__67120 = y;
return (bfuncs.data.compare_bobj.cljs$core$IFn$_invoke$arity$2 ? bfuncs.data.compare_bobj.cljs$core$IFn$_invoke$arity$2(G__67119,G__67120) : bfuncs.data.compare_bobj.call(null,G__67119,G__67120));
})();
if((v__27657__auto__ === (0))){
return (1);
} else {
return v__27657__auto__;
}
}
} else {
if(f67115(oy)){
var v__27657__auto__ = (function (){var G__67125 = x;
var G__67126 = cljs.core.first(y);
return (bfuncs.data.compare_bobj.cljs$core$IFn$_invoke$arity$2 ? bfuncs.data.compare_bobj.cljs$core$IFn$_invoke$arity$2(G__67125,G__67126) : bfuncs.data.compare_bobj.call(null,G__67125,G__67126));
})();
if((v__27657__auto__ === (0))){
return (-1);
} else {
return v__27657__auto__;
}
} else {
if((ox == null)){
if((oy == null)){
try{return cljs.core.compare(x,y);
}catch (e67146){if((e67146 instanceof Object)){
var e = e67146;
if(cljs.core.boolean_QMARK_(x)){
return (-1);
} else {
if(cljs.core.boolean_QMARK_(y)){
return (1);
} else {
if(typeof x === 'string'){
return (-1);
} else {
if(typeof y === 'string'){
return (1);
} else {
if(typeof x === 'number'){
return (-1);
} else {
if(typeof y === 'number'){
return (1);
} else {
if(cljs.core.array_QMARK_(x)){
return (-1);
} else {
if(cljs.core.array_QMARK_(y)){
return (1);
} else {
return (0);

}
}
}
}
}
}
}
}
} else {
throw e67146;

}
}} else {
return (-1);
}
} else {
if((oy == null)){
return (1);
} else {
var v__27657__auto__ = cljs.core.compare(bfuncs.data.precedence(ox),bfuncs.data.precedence(oy));
if((v__27657__auto__ === (0))){
var v__27657__auto____$1 = cljs.core.compare(cljs.core.count(x),cljs.core.count(y));
if((v__27657__auto____$1 === (0))){
var x__$1 = x;
var y__$1 = y;
while(true){
if(cljs.core.empty_QMARK_(x__$1)){
if(cljs.core.empty_QMARK_(y__$1)){
return (0);
} else {
return (-1);
}
} else {
if(cljs.core.empty_QMARK_(y__$1)){
return (1);
} else {
var tx = bfuncs.data.scrape_top(bfuncs.data.compare_bobj,x__$1);
var ty = bfuncs.data.scrape_top(bfuncs.data.compare_bobj,y__$1);
var v__27657__auto____$2 = (bfuncs.data.compare_bobj.cljs$core$IFn$_invoke$arity$2 ? bfuncs.data.compare_bobj.cljs$core$IFn$_invoke$arity$2(tx,ty) : bfuncs.data.compare_bobj.call(null,tx,ty));
if((v__27657__auto____$2 === (0))){
var G__67249 = cljs.core.disj.cljs$core$IFn$_invoke$arity$2(x__$1,tx);
var G__67250 = cljs.core.disj.cljs$core$IFn$_invoke$arity$2(y__$1,ty);
x__$1 = G__67249;
y__$1 = G__67250;
continue;
} else {
return v__27657__auto____$2;
}
}
}
break;
}
} else {
return v__27657__auto____$1;
}
} else {
return v__27657__auto__;
}
}
}
}
}
}
});
bfuncs.data.clj__GT_js_SINGLEQUOTE_ = (function bfuncs$data$clj__GT_js_SINGLEQUOTE_(x){
if((!((((!((x == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === x.bfuncs$data$IBoolOp$))))?true:(((!x.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_(bfuncs.data.IBoolOp,x):false)):cljs.core.native_satisfies_QMARK_(bfuncs.data.IBoolOp,x))))){
return ["var",cljs.core.clj__GT_js(x)];
} else {
return cljs.core.clj__GT_js(x);
}
});

/**
* @constructor
 * @implements {bfuncs.data.IBoolOp}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeq}
 * @implements {cljs.core.INext}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IEncodeJS}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IWithMeta}
*/
bfuncs.data.BoolUnary = (function (meta,operation,operand,__hash){
this.meta = meta;
this.operation = operation;
this.operand = operand;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2162557122;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(bfuncs.data.BoolUnary.prototype.toString = (function (){
var self__ = this;
var this$ = this;
return cljs.core.pr_str_STAR_(this$);
}));

(bfuncs.data.BoolUnary.prototype.equiv = (function (other){
var self__ = this;
var this$ = this;
return this$.cljs$core$IEquiv$_equiv$arity$2(null,other);
}));

(bfuncs.data.BoolUnary.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (_o,writer,opts){
var self__ = this;
var _o__$1 = this;
if(cljs.core.truth_(new cljs.core.Keyword(null,"readably","readably",1129599760).cljs$core$IFn$_invoke$arity$1(opts))){
cljs.core._write(writer,"(! ");

cljs.core.pr_writer(self__.operand,writer,opts);

return cljs.core._write(writer,")");
} else {
cljs.core._write(writer,"!");

return cljs.core.pr_writer(self__.operand,writer,opts);
}
}));

(bfuncs.data.BoolUnary.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.meta;
}));

(bfuncs.data.BoolUnary.prototype.cljs$core$INext$_next$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return null;
}));

(bfuncs.data.BoolUnary.prototype.cljs$core$ICounted$_count$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return (1);
}));

(bfuncs.data.BoolUnary.prototype.cljs$core$IEncodeJS$ = cljs.core.PROTOCOL_SENTINEL);

(bfuncs.data.BoolUnary.prototype.cljs$core$IEncodeJS$_clj__GT_js$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
var G__67179 = (function (){var obj67180 = [cljs.core.clj__GT_js(self__.operand)];
var obj67181 = (((!((obj67180 == null))))?obj67180:({}));
(obj67181["operation"] = cljs.core.clj__GT_js(self__.operation));

return obj67181;
})();
if(cljs.core.truth_(self__.meta)){
var obj67184 = G__67179;
var obj67185 = (((!((obj67184 == null))))?obj67184:({}));
(obj67185["meta"] = cljs.core.clj__GT_js(self__.meta));

return obj67185;
} else {
return G__67179;
}
}));

(bfuncs.data.BoolUnary.prototype.cljs$core$IEncodeJS$_key__GT_js$arity$1 = (function (x){
var self__ = this;
var x__$1 = this;
return cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([x__$1], 0));
}));

(bfuncs.data.BoolUnary.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
var h__4238__auto__ = self__.__hash;
if((!((h__4238__auto__ == null)))){
return h__4238__auto__;
} else {
var h__4238__auto____$1 = bfuncs.data.hash_bool_unary(coll__$1);
(self__.__hash = h__4238__auto____$1);

return h__4238__auto____$1;
}
}));

(bfuncs.data.BoolUnary.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (o,other){
var self__ = this;
var o__$1 = this;
return ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.type(o__$1),cljs.core.type(other))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(self__.operand,cljs.core.first(other))));
}));

(bfuncs.data.BoolUnary.prototype.cljs$core$ISeq$_first$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.operand;
}));

(bfuncs.data.BoolUnary.prototype.cljs$core$ISeq$_rest$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.List.EMPTY;
}));

(bfuncs.data.BoolUnary.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (_coll){
var self__ = this;
var _coll__$1 = this;
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [self__.operand], null);
}));

(bfuncs.data.BoolUnary.prototype.bfuncs$data$IBoolOp$ = cljs.core.PROTOCOL_SENTINEL);

(bfuncs.data.BoolUnary.prototype.bfuncs$data$IBoolOp$_operation$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return new cljs.core.Keyword(null,"NOT","NOT",-1689245341);
}));

(bfuncs.data.BoolUnary.prototype.bfuncs$data$IBoolOp$_operands$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [self__.operand], null);
}));

(bfuncs.data.BoolUnary.prototype.bfuncs$data$IBoolOp$_with_operation$arity$2 = (function (this$,new_operation){
var self__ = this;
var this$__$1 = this;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(self__.operation,new_operation)){
return this$__$1;
} else {
return (new bfuncs.data.BoolUnary(self__.meta,new_operation,self__.operand,null));
}
}));

(bfuncs.data.BoolUnary.prototype.bfuncs$data$IBoolOp$_replace_operands$arity$2 = (function (this$,smap){
var self__ = this;
var this$__$1 = this;
var replaced = bfuncs.data.replace_operands(smap,self__.operand);
if((self__.operand === replaced)){
return this$__$1;
} else {
return (new bfuncs.data.BoolUnary(self__.meta,self__.operation,replaced,null));
}
}));

(bfuncs.data.BoolUnary.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (o,new_meta){
var self__ = this;
var o__$1 = this;
if((self__.meta === new_meta)){
return o__$1;
} else {
return (new bfuncs.data.BoolUnary(new_meta,self__.operation,self__.operand,self__.__hash));
}
}));

(bfuncs.data.BoolUnary.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta","meta",-1154898805,null),new cljs.core.Symbol(null,"operation","operation",372867217,null),new cljs.core.Symbol(null,"operand","operand",-1587283210,null),cljs.core.with_meta(new cljs.core.Symbol(null,"__hash","__hash",-1328796629,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null))], null);
}));

(bfuncs.data.BoolUnary.cljs$lang$type = true);

(bfuncs.data.BoolUnary.cljs$lang$ctorStr = "bfuncs.data/BoolUnary");

(bfuncs.data.BoolUnary.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"bfuncs.data/BoolUnary");
}));

/**
 * Positional factory function for bfuncs.data/BoolUnary.
 */
bfuncs.data.__GT_BoolUnary = (function bfuncs$data$__GT_BoolUnary(meta,operation,operand,__hash){
return (new bfuncs.data.BoolUnary(meta,operation,operand,__hash));
});


/**
* @constructor
 * @implements {bfuncs.data.IBoolOp}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.IFn}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ISet}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IEncodeJS}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.ISequential}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.ILookup}
*/
bfuncs.data.BoolSet = (function (operation,operand_set,__hash){
this.operation = operation;
this.operand_set = operand_set;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2179338507;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(bfuncs.data.BoolSet.prototype.toString = (function (){
var self__ = this;
var this$ = this;
return cljs.core.pr_str_STAR_(this$);
}));

(bfuncs.data.BoolSet.prototype.equiv = (function (other){
var self__ = this;
var this$ = this;
return this$.cljs$core$IEquiv$_equiv$arity$2(null,other);
}));

(bfuncs.data.BoolSet.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (coll,v){
var self__ = this;
var coll__$1 = this;
return coll__$1.cljs$core$ILookup$_lookup$arity$3(null,v,null);
}));

(bfuncs.data.BoolSet.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (_coll,v,not_found){
var self__ = this;
var _coll__$1 = this;
return cljs.core._lookup(self__.operand_set,v,not_found);
}));

(bfuncs.data.BoolSet.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (_o,writer,opts){
var self__ = this;
var _o__$1 = this;
return bfuncs.data.bool_op_pr_writer(self__.operation,self__.operand_set,writer,opts);
}));

(bfuncs.data.BoolSet.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core._iterator(self__.operand_set);
}));

(bfuncs.data.BoolSet.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core._meta(self__.operand_set);
}));

(bfuncs.data.BoolSet.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return (new bfuncs.data.BoolSet(self__.operation,self__.operand_set,self__.__hash));
}));

(bfuncs.data.BoolSet.prototype.cljs$core$ICounted$_count$arity$1 = (function (_coll){
var self__ = this;
var _coll__$1 = this;
return cljs.core._count(self__.operand_set);
}));

(bfuncs.data.BoolSet.prototype.cljs$core$IEncodeJS$ = cljs.core.PROTOCOL_SENTINEL);

(bfuncs.data.BoolSet.prototype.cljs$core$IEncodeJS$_clj__GT_js$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
var G__67215 = (function (){var obj67216 = bfuncs.utils.mapa(cljs.core.clj__GT_js,cljs.core.sort.cljs$core$IFn$_invoke$arity$2(bfuncs.data.compare_bobj,self__.operand_set));
var obj67217 = (((!((obj67216 == null))))?obj67216:({}));
(obj67217["operation"] = cljs.core.clj__GT_js(self__.operation));

return obj67217;
})();
if(cljs.core.truth_(cljs.core.meta(self__.operand_set))){
var obj67220 = G__67215;
var obj67221 = (((!((obj67220 == null))))?obj67220:({}));
(obj67221["meta"] = cljs.core.clj__GT_js(cljs.core.meta(self__.operand_set)));

return obj67221;
} else {
return G__67215;
}
}));

(bfuncs.data.BoolSet.prototype.cljs$core$IEncodeJS$_key__GT_js$arity$1 = (function (x){
var self__ = this;
var x__$1 = this;
return cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([x__$1], 0));
}));

(bfuncs.data.BoolSet.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
var h__4238__auto__ = self__.__hash;
if((!((h__4238__auto__ == null)))){
return h__4238__auto__;
} else {
var h__4238__auto____$1 = bfuncs.data.hash_bool_set(coll__$1);
(self__.__hash = h__4238__auto____$1);

return h__4238__auto____$1;
}
}));

(bfuncs.data.BoolSet.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (o,other){
var self__ = this;
var o__$1 = this;
return ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.type(o__$1),cljs.core.type(other))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(self__.operation,bfuncs.data._operation(other))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(self__.operand_set,bfuncs.data._operands(other))));
}));

(bfuncs.data.BoolSet.prototype.cljs$core$ISet$_disjoin$arity$2 = (function (coll,v){
var self__ = this;
var coll__$1 = this;
var disjd = cljs.core._disjoin(self__.operand_set,v);
if((disjd === self__.operand_set)){
return coll__$1;
} else {
return (new bfuncs.data.BoolSet(self__.operation,disjd,null));
}
}));

(bfuncs.data.BoolSet.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (_coll){
var self__ = this;
var _coll__$1 = this;
return cljs.core._seq(self__.operand_set);
}));

(bfuncs.data.BoolSet.prototype.bfuncs$data$IBoolOp$ = cljs.core.PROTOCOL_SENTINEL);

(bfuncs.data.BoolSet.prototype.bfuncs$data$IBoolOp$_operation$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.operation;
}));

(bfuncs.data.BoolSet.prototype.bfuncs$data$IBoolOp$_operands$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.operand_set;
}));

(bfuncs.data.BoolSet.prototype.bfuncs$data$IBoolOp$_with_operation$arity$2 = (function (this$,new_operation){
var self__ = this;
var this$__$1 = this;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new_operation,self__.operation)){
return this$__$1;
} else {
return (new bfuncs.data.BoolSet(new_operation,self__.operand_set,null));
}
}));

(bfuncs.data.BoolSet.prototype.bfuncs$data$IBoolOp$_replace_operands$arity$2 = (function (_,smap){
var self__ = this;
var ___$1 = this;
return (new bfuncs.data.BoolSet(self__.operation,cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.empty(self__.operand_set),cljs.core.map.cljs$core$IFn$_invoke$arity$1(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(bfuncs.data.replace_operands,smap)),self__.operand_set),null));
}));

(bfuncs.data.BoolSet.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,new_meta){
var self__ = this;
var coll__$1 = this;
var terms_with_meta = cljs.core._with_meta(self__.operand_set,new_meta);
if((self__.operand_set === terms_with_meta)){
return coll__$1;
} else {
return (new bfuncs.data.BoolSet(self__.operation,terms_with_meta,self__.__hash));
}
}));

(bfuncs.data.BoolSet.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var self__ = this;
var coll__$1 = this;
var conjd = cljs.core._conj(self__.operand_set,o);
if((self__.operand_set === conjd)){
return coll__$1;
} else {
return (new bfuncs.data.BoolSet(self__.operation,conjd,null));
}
}));

(bfuncs.data.BoolSet.prototype.call = (function() {
var G__67257 = null;
var G__67257__2 = (function (self__,k){
var self__ = this;
var self____$1 = this;
var _coll = self____$1;
return cljs.core._lookup(self__.operand_set,k);
});
var G__67257__3 = (function (self__,k,not_found){
var self__ = this;
var self____$1 = this;
var _coll = self____$1;
return cljs.core._lookup(self__.operand_set,k,not_found);
});
G__67257 = function(self__,k,not_found){
switch(arguments.length){
case 2:
return G__67257__2.call(this,self__,k);
case 3:
return G__67257__3.call(this,self__,k,not_found);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
G__67257.cljs$core$IFn$_invoke$arity$2 = G__67257__2;
G__67257.cljs$core$IFn$_invoke$arity$3 = G__67257__3;
return G__67257;
})()
);

(bfuncs.data.BoolSet.prototype.apply = (function (self__,args67214){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone(args67214)));
}));

(bfuncs.data.BoolSet.prototype.cljs$core$IFn$_invoke$arity$1 = (function (k){
var self__ = this;
var _coll = this;
return cljs.core._lookup(self__.operand_set,k);
}));

(bfuncs.data.BoolSet.prototype.cljs$core$IFn$_invoke$arity$2 = (function (k,not_found){
var self__ = this;
var _coll = this;
return cljs.core._lookup(self__.operand_set,k,not_found);
}));

(bfuncs.data.BoolSet.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"operation","operation",372867217,null),new cljs.core.Symbol(null,"operand-set","operand-set",1291236048,null),cljs.core.with_meta(new cljs.core.Symbol(null,"__hash","__hash",-1328796629,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null))], null);
}));

(bfuncs.data.BoolSet.cljs$lang$type = true);

(bfuncs.data.BoolSet.cljs$lang$ctorStr = "bfuncs.data/BoolSet");

(bfuncs.data.BoolSet.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"bfuncs.data/BoolSet");
}));

/**
 * Positional factory function for bfuncs.data/BoolSet.
 */
bfuncs.data.__GT_BoolSet = (function bfuncs$data$__GT_BoolSet(operation,operand_set,__hash){
return (new bfuncs.data.BoolSet(operation,operand_set,__hash));
});


/**
* @constructor
 * @implements {bfuncs.data.IBoolOp}
 * @implements {cljs.core.IIndexed}
 * @implements {cljs.core.IVector}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.IFn}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.IFind}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IStack}
 * @implements {cljs.core.IEncodeJS}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.ISequential}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.ILookup}
*/
bfuncs.data.BoolVec = (function (operation,operand_vec,__hash){
this.operation = operation;
this.operand_vec = operand_vec;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2179359515;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(bfuncs.data.BoolVec.prototype.cljs$core$IFind$ = cljs.core.PROTOCOL_SENTINEL);

(bfuncs.data.BoolVec.prototype.cljs$core$IFind$_find$arity$2 = (function (_coll,n){
var self__ = this;
var _coll__$1 = this;
return cljs.core._find(self__.operand_vec,n);
}));

(bfuncs.data.BoolVec.prototype.toString = (function (){
var self__ = this;
var coll = this;
return cljs.core.pr_str_STAR_(coll);
}));

(bfuncs.data.BoolVec.prototype.equiv = (function (other){
var self__ = this;
var this$ = this;
return this$.cljs$core$IEquiv$_equiv$arity$2(null,other);
}));

(bfuncs.data.BoolVec.prototype.indexOf = (function() {
var G__67265 = null;
var G__67265__1 = (function (x){
var self__ = this;
var _coll = this;
return cljs.core._indexOf.cljs$core$IFn$_invoke$arity$3(self__.operand_vec,x,(0));
});
var G__67265__2 = (function (x,start){
var self__ = this;
var _coll = this;
return cljs.core._indexOf.cljs$core$IFn$_invoke$arity$3(self__.operand_vec,x,start);
});
G__67265 = function(x,start){
switch(arguments.length){
case 1:
return G__67265__1.call(this,x);
case 2:
return G__67265__2.call(this,x,start);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__67265.cljs$core$IFn$_invoke$arity$1 = G__67265__1;
G__67265.cljs$core$IFn$_invoke$arity$2 = G__67265__2;
return G__67265;
})()
);

(bfuncs.data.BoolVec.prototype.lastIndexOf = (function() {
var G__67267 = null;
var G__67267__1 = (function (x){
var self__ = this;
var _coll = this;
return cljs.core._lastIndexOf.cljs$core$IFn$_invoke$arity$3(self__.operand_vec,x,cljs.core.count(self__.operand_vec));
});
var G__67267__2 = (function (x,start){
var self__ = this;
var _coll = this;
return cljs.core._lastIndexOf.cljs$core$IFn$_invoke$arity$3(self__.operand_vec,x,start);
});
G__67267 = function(x,start){
switch(arguments.length){
case 1:
return G__67267__1.call(this,x);
case 2:
return G__67267__2.call(this,x,start);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__67267.cljs$core$IFn$_invoke$arity$1 = G__67267__1;
G__67267.cljs$core$IFn$_invoke$arity$2 = G__67267__2;
return G__67267;
})()
);

(bfuncs.data.BoolVec.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (_coll,k){
var self__ = this;
var _coll__$1 = this;
return cljs.core._lookup(self__.operand_vec,k,null);
}));

(bfuncs.data.BoolVec.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (_coll,k,not_found){
var self__ = this;
var _coll__$1 = this;
return cljs.core._lookup(self__.operand_vec,k,not_found);
}));

(bfuncs.data.BoolVec.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (_coll,n){
var self__ = this;
var _coll__$1 = this;
return cljs.core._nth(self__.operand_vec,n);
}));

(bfuncs.data.BoolVec.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (_coll,n,not_found){
var self__ = this;
var _coll__$1 = this;
return cljs.core._nth(self__.operand_vec,n,not_found);
}));

(bfuncs.data.BoolVec.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (_o,writer,opts){
var self__ = this;
var _o__$1 = this;
return bfuncs.data.bool_op_pr_writer(self__.operation,self__.operand_vec,writer,opts);
}));

(bfuncs.data.BoolVec.prototype.cljs$core$IVector$_assoc_n$arity$3 = (function (coll,n,val){
var self__ = this;
var coll__$1 = this;
var assoc_SINGLEQUOTE_d = cljs.core._assoc_n(self__.operand_vec,n,val);
if((assoc_SINGLEQUOTE_d === self__.operand_vec)){
return coll__$1;
} else {
return (new bfuncs.data.BoolVec(self__.operation,assoc_SINGLEQUOTE_d,null));
}
}));

(bfuncs.data.BoolVec.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (_this){
var self__ = this;
var _this__$1 = this;
return cljs.core._iterator(self__.operand_vec);
}));

(bfuncs.data.BoolVec.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_coll){
var self__ = this;
var _coll__$1 = this;
return cljs.core._meta(self__.operand_vec);
}));

(bfuncs.data.BoolVec.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return (new bfuncs.data.BoolVec(self__.operation,self__.operand_vec,cljs.core.hash));
}));

(bfuncs.data.BoolVec.prototype.cljs$core$ICounted$_count$arity$1 = (function (_coll){
var self__ = this;
var _coll__$1 = this;
return cljs.core._count(self__.operand_vec);
}));

(bfuncs.data.BoolVec.prototype.cljs$core$IStack$_peek$arity$1 = (function (_coll){
var self__ = this;
var _coll__$1 = this;
return cljs.core.peek(self__.operand_vec);
}));

(bfuncs.data.BoolVec.prototype.cljs$core$IStack$_pop$arity$1 = (function (_coll){
var self__ = this;
var _coll__$1 = this;
return (new bfuncs.data.BoolVec(self__.operation,cljs.core.pop(self__.operand_vec),null));
}));

(bfuncs.data.BoolVec.prototype.cljs$core$IEncodeJS$ = cljs.core.PROTOCOL_SENTINEL);

(bfuncs.data.BoolVec.prototype.cljs$core$IEncodeJS$_clj__GT_js$arity$1 = (function (_x){
var self__ = this;
var _x__$1 = this;
var G__67228 = (function (){var obj67229 = bfuncs.utils.mapa(cljs.core.clj__GT_js,self__.operand_vec);
var obj67230 = (((!((obj67229 == null))))?obj67229:({}));
(obj67230["operation"] = cljs.core.clj__GT_js(self__.operation));

return obj67230;
})();
if(cljs.core.truth_(cljs.core.meta(self__.operand_vec))){
return cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(G__67228,new cljs.core.Keyword(null,"meta","meta",1499536964),cljs.core.clj__GT_js(cljs.core.meta(self__.operand_vec)));
} else {
return G__67228;
}
}));

(bfuncs.data.BoolVec.prototype.cljs$core$IEncodeJS$_key__GT_js$arity$1 = (function (x){
var self__ = this;
var x__$1 = this;
return cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([x__$1], 0));
}));

(bfuncs.data.BoolVec.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
var h__4238__auto__ = self__.__hash;
if((!((h__4238__auto__ == null)))){
return h__4238__auto__;
} else {
var h__4238__auto____$1 = bfuncs.data.hash_bool_vec(coll__$1);
(self__.__hash = h__4238__auto____$1);

return h__4238__auto____$1;
}
}));

(bfuncs.data.BoolVec.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var self__ = this;
var coll__$1 = this;
return ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.type(coll__$1),cljs.core.type(other))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(self__.operation,bfuncs.data._operation(other))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(self__.operand_vec,bfuncs.data._operands(other))));
}));

(bfuncs.data.BoolVec.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (coll,k,v){
var self__ = this;
var coll__$1 = this;
var assoc_SINGLEQUOTE_d = cljs.core._assoc(self__.operand_vec,k,v);
if((assoc_SINGLEQUOTE_d === self__.operand_vec)){
return coll__$1;
} else {
return (new bfuncs.data.BoolVec(self__.operation,assoc_SINGLEQUOTE_d,null));
}
}));

(bfuncs.data.BoolVec.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (_coll,k){
var self__ = this;
var _coll__$1 = this;
return cljs.core._contains_key_QMARK_(self__.operand_vec,k);
}));

(bfuncs.data.BoolVec.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (_coll){
var self__ = this;
var _coll__$1 = this;
return cljs.core._seq(self__.operand_vec);
}));

(bfuncs.data.BoolVec.prototype.bfuncs$data$IBoolOp$ = cljs.core.PROTOCOL_SENTINEL);

(bfuncs.data.BoolVec.prototype.bfuncs$data$IBoolOp$_operation$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.operation;
}));

(bfuncs.data.BoolVec.prototype.bfuncs$data$IBoolOp$_operands$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.operand_vec;
}));

(bfuncs.data.BoolVec.prototype.bfuncs$data$IBoolOp$_with_operation$arity$2 = (function (this$,new_operation){
var self__ = this;
var this$__$1 = this;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new_operation,self__.operation)){
return this$__$1;
} else {
return (new bfuncs.data.BoolVec(new_operation,self__.operand_vec,null));
}
}));

(bfuncs.data.BoolVec.prototype.bfuncs$data$IBoolOp$_replace_operands$arity$2 = (function (_,smap){
var self__ = this;
var ___$1 = this;
return (new bfuncs.data.BoolVec(self__.operation,cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.empty(self__.operand_vec),cljs.core.map.cljs$core$IFn$_invoke$arity$1(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(bfuncs.data.replace_operands,smap)),self__.operand_vec),null));
}));

(bfuncs.data.BoolVec.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,new_meta){
var self__ = this;
var coll__$1 = this;
var new_operands = cljs.core._with_meta(self__.operand_vec,new_meta);
if((self__.operand_vec === new_operands)){
return coll__$1;
} else {
return (new bfuncs.data.BoolVec(self__.operation,new_operands,self__.__hash));
}
}));

(bfuncs.data.BoolVec.prototype.cljs$core$ICollection$_conj$arity$2 = (function (_coll,o){
var self__ = this;
var _coll__$1 = this;
return (new bfuncs.data.BoolVec(self__.operation,cljs.core._conj(self__.operand_vec,o),null));
}));

(bfuncs.data.BoolVec.prototype.call = (function() {
var G__67271 = null;
var G__67271__2 = (function (self__,k){
var self__ = this;
var self____$1 = this;
var _coll = self____$1;
return cljs.core._nth(self__.operand_vec,k);
});
var G__67271__3 = (function (self__,k,not_found){
var self__ = this;
var self____$1 = this;
var _coll = self____$1;
return cljs.core._nth(self__.operand_vec,k,not_found);
});
G__67271 = function(self__,k,not_found){
switch(arguments.length){
case 2:
return G__67271__2.call(this,self__,k);
case 3:
return G__67271__3.call(this,self__,k,not_found);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
G__67271.cljs$core$IFn$_invoke$arity$2 = G__67271__2;
G__67271.cljs$core$IFn$_invoke$arity$3 = G__67271__3;
return G__67271;
})()
);

(bfuncs.data.BoolVec.prototype.apply = (function (self__,args67227){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone(args67227)));
}));

(bfuncs.data.BoolVec.prototype.cljs$core$IFn$_invoke$arity$1 = (function (k){
var self__ = this;
var _coll = this;
return cljs.core._nth(self__.operand_vec,k);
}));

(bfuncs.data.BoolVec.prototype.cljs$core$IFn$_invoke$arity$2 = (function (k,not_found){
var self__ = this;
var _coll = this;
return cljs.core._nth(self__.operand_vec,k,not_found);
}));

(bfuncs.data.BoolVec.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"operation","operation",372867217,null),new cljs.core.Symbol(null,"operand-vec","operand-vec",1773772604,null),cljs.core.with_meta(new cljs.core.Symbol(null,"__hash","__hash",-1328796629,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null))], null);
}));

(bfuncs.data.BoolVec.cljs$lang$type = true);

(bfuncs.data.BoolVec.cljs$lang$ctorStr = "bfuncs.data/BoolVec");

(bfuncs.data.BoolVec.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"bfuncs.data/BoolVec");
}));

/**
 * Positional factory function for bfuncs.data/BoolVec.
 */
bfuncs.data.__GT_BoolVec = (function bfuncs$data$__GT_BoolVec(operation,operand_vec,__hash){
return (new bfuncs.data.BoolVec(operation,operand_vec,__hash));
});

bfuncs.data.with_operation = (function bfuncs$data$with_operation(op,x){
if((((!((x == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === x.bfuncs$data$IBoolOp$))))?true:(((!x.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_(bfuncs.data.IBoolOp,x):false)):cljs.core.native_satisfies_QMARK_(bfuncs.data.IBoolOp,x))){
return bfuncs.data._with_operation(x,op);
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Cannot set operation on non IBoolOp",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),x,new cljs.core.Keyword(null,"op","op",-1882987955),op], null));
}
});
bfuncs.data.bool_set = (function bfuncs$data$bool_set(var_args){
var args__4742__auto__ = [];
var len__4736__auto___67282 = arguments.length;
var i__4737__auto___67283 = (0);
while(true){
if((i__4737__auto___67283 < len__4736__auto___67282)){
args__4742__auto__.push((arguments[i__4737__auto___67283]));

var G__67284 = (i__4737__auto___67283 + (1));
i__4737__auto___67283 = G__67284;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return bfuncs.data.bool_set.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(bfuncs.data.bool_set.cljs$core$IFn$_invoke$arity$variadic = (function (op,keys){
return (new bfuncs.data.BoolSet(op,cljs.core.set(keys),null));
}));

(bfuncs.data.bool_set.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(bfuncs.data.bool_set.cljs$lang$applyTo = (function (seq67234){
var G__67235 = cljs.core.first(seq67234);
var seq67234__$1 = cljs.core.next(seq67234);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__67235,seq67234__$1);
}));

bfuncs.data.bool_vec = (function bfuncs$data$bool_vec(var_args){
var args__4742__auto__ = [];
var len__4736__auto___67285 = arguments.length;
var i__4737__auto___67286 = (0);
while(true){
if((i__4737__auto___67286 < len__4736__auto___67285)){
args__4742__auto__.push((arguments[i__4737__auto___67286]));

var G__67288 = (i__4737__auto___67286 + (1));
i__4737__auto___67286 = G__67288;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return bfuncs.data.bool_vec.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(bfuncs.data.bool_vec.cljs$core$IFn$_invoke$arity$variadic = (function (op,keys){
return (new bfuncs.data.BoolVec(op,cljs.core.vec(keys),null));
}));

(bfuncs.data.bool_vec.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(bfuncs.data.bool_vec.cljs$lang$applyTo = (function (seq67236){
var G__67237 = cljs.core.first(seq67236);
var seq67236__$1 = cljs.core.next(seq67236);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__67237,seq67236__$1);
}));

bfuncs.data.bool_not = (function bfuncs$data$bool_not(x){
return (new bfuncs.data.BoolUnary(null,new cljs.core.Keyword(null,"NOT","NOT",-1689245341),x,null));
});

//# sourceMappingURL=bfuncs.data.js.map
