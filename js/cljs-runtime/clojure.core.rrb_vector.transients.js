goog.provide('clojure.core.rrb_vector.transients');
clojure.core.rrb_vector.transients.ensure_editable = (function clojure$core$rrb_vector$transients$ensure_editable(edit,node){
if((node.edit === edit)){
return node;
} else {
var new_arr = cljs.core.aclone(node.arr);
if(((33) === new_arr.length)){
(new_arr[(32)] = cljs.core.aclone((new_arr[(32)])));
} else {
}

return (new cljs.core.VectorNode(edit,new_arr));
}
});
clojure.core.rrb_vector.transients.editable_root = (function clojure$core$rrb_vector$transients$editable_root(root){
var new_arr = cljs.core.aclone(root.arr);
if(((33) === new_arr.length)){
(new_arr[(32)] = cljs.core.aclone((new_arr[(32)])));
} else {
}

return (new cljs.core.VectorNode(({}),new_arr));
});
clojure.core.rrb_vector.transients.editable_tail = (function clojure$core$rrb_vector$transients$editable_tail(tail){
var ret = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
cljs.core.array_copy(tail,(0),ret,(0),tail.length);

return ret;
});
clojure.core.rrb_vector.transients.push_tail_BANG_ = (function clojure$core$rrb_vector$transients$push_tail_BANG_(shift,cnt,root_edit,current_node,tail_node){
var ret = clojure.core.rrb_vector.transients.ensure_editable(root_edit,current_node);
if(clojure.core.rrb_vector.nodes.regular_QMARK_(ret)){
var n_39452 = ret;
var shift_39453__$1 = shift;
while(true){
var arr_39454 = n_39452.arr;
var subidx_39455 = (((cnt - (1)) >> shift_39453__$1) & (31));
if((shift_39453__$1 === (5))){
(arr_39454[subidx_39455] = tail_node);
} else {
var child_39456 = (arr_39454[subidx_39455]);
if((child_39456 == null)){
(arr_39454[subidx_39455] = clojure.core.rrb_vector.trees.new_path(tail_node.arr,root_edit,(shift_39453__$1 - (5)),tail_node));
} else {
var editable_child_39461 = clojure.core.rrb_vector.transients.ensure_editable(root_edit,child_39456);
(arr_39454[subidx_39455] = editable_child_39461);

var G__39462 = editable_child_39461;
var G__39463 = (shift_39453__$1 - (5));
n_39452 = G__39462;
shift_39453__$1 = G__39463;
continue;
}
}
break;
}

return ret;
} else {
var arr = ret.arr;
var rngs = clojure.core.rrb_vector.nodes.node_ranges(ret);
var li = ((rngs[(32)]) - (1));
var cret = (((shift === (5)))?null:(function (){var child = clojure.core.rrb_vector.transients.ensure_editable(root_edit,(arr[li]));
var ccnt = ((((li > (0)))?((rngs[li]) - (rngs[(li - (1))])):(rngs[(0)])) + (32));
if((!(clojure.core.rrb_vector.nodes.overflow_QMARK_(child,(shift - (5)),ccnt)))){
var G__39425 = (shift - (5));
var G__39426 = ccnt;
var G__39427 = root_edit;
var G__39428 = child;
var G__39429 = tail_node;
return (clojure.core.rrb_vector.transients.push_tail_BANG_.cljs$core$IFn$_invoke$arity$5 ? clojure.core.rrb_vector.transients.push_tail_BANG_.cljs$core$IFn$_invoke$arity$5(G__39425,G__39426,G__39427,G__39428,G__39429) : clojure.core.rrb_vector.transients.push_tail_BANG_.call(null,G__39425,G__39426,G__39427,G__39428,G__39429));
} else {
return null;
}
})());
if(cljs.core.truth_(cret)){
(arr[li] = cret);

(rngs[li] = ((rngs[li]) + (32)));

return ret;
} else {
if((li >= (31))){
var msg_39464 = ["Assigning index ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((li + (1)))," of vector"," object array to become a node, when that"," index should only be used for storing"," range arrays."].join('');
var data_39465 = new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"shift","shift",997140064),shift,new cljs.core.Keyword(null,"cnd","cnd",-521882032),cnt,new cljs.core.Keyword(null,"current-node","current-node",-814308842),current_node,new cljs.core.Keyword(null,"tail-node","tail-node",-1373693221),tail_node,new cljs.core.Keyword(null,"rngs","rngs",-8039697),rngs,new cljs.core.Keyword(null,"li","li",723558921),li,new cljs.core.Keyword(null,"cret","cret",2090504467),cret], null);
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(msg_39464,data_39465);
} else {
}

(arr[(li + (1))] = clojure.core.rrb_vector.trees.new_path(tail_node.arr,root_edit,(shift - (5)),tail_node));

(rngs[(li + (1))] = ((rngs[li]) + (32)));

(rngs[(32)] = ((rngs[(32)]) + (1)));

return ret;
}
}
});
clojure.core.rrb_vector.transients.pop_tail_BANG_ = (function clojure$core$rrb_vector$transients$pop_tail_BANG_(shift,cnt,root_edit,current_node){
var ret = clojure.core.rrb_vector.transients.ensure_editable(root_edit,current_node);
if(clojure.core.rrb_vector.nodes.regular_QMARK_(ret)){
var subidx = (((cnt - (2)) >> shift) & (31));
if((shift > (5))){
var child = (function (){var G__39438 = (shift - (5));
var G__39439 = cnt;
var G__39440 = root_edit;
var G__39441 = (ret.arr[subidx]);
return (clojure.core.rrb_vector.transients.pop_tail_BANG_.cljs$core$IFn$_invoke$arity$4 ? clojure.core.rrb_vector.transients.pop_tail_BANG_.cljs$core$IFn$_invoke$arity$4(G__39438,G__39439,G__39440,G__39441) : clojure.core.rrb_vector.transients.pop_tail_BANG_.call(null,G__39438,G__39439,G__39440,G__39441));
})();
if((((child == null)) && ((subidx === (0))))){
return null;
} else {
var arr = ret.arr;
(arr[subidx] = child);

return ret;
}
} else {
if((subidx === (0))){
return null;
} else {
var arr = ret.arr;
(arr[subidx] = null);

return ret;

}
}
} else {
var rngs = clojure.core.rrb_vector.nodes.node_ranges(ret);
var subidx = ((rngs[(32)]) - (1));
if((shift > (5))){
var child = (ret.arr[subidx]);
var child_cnt = (((subidx === (0)))?(rngs[(0)]):((rngs[subidx]) - (rngs[(subidx - (1))])));
var new_child = (function (){var G__39443 = (shift - (5));
var G__39444 = child_cnt;
var G__39445 = root_edit;
var G__39446 = child;
return (clojure.core.rrb_vector.transients.pop_tail_BANG_.cljs$core$IFn$_invoke$arity$4 ? clojure.core.rrb_vector.transients.pop_tail_BANG_.cljs$core$IFn$_invoke$arity$4(G__39443,G__39444,G__39445,G__39446) : clojure.core.rrb_vector.transients.pop_tail_BANG_.call(null,G__39443,G__39444,G__39445,G__39446));
})();
if((((new_child == null)) && ((subidx === (0))))){
return null;
} else {
if(clojure.core.rrb_vector.nodes.regular_QMARK_(child)){
var arr = ret.arr;
(rngs[subidx] = ((rngs[subidx]) - (32)));

(arr[subidx] = new_child);

if((new_child == null)){
(rngs[(32)] = ((rngs[(32)]) - (1)));
} else {
}

return ret;
} else {
var rng = clojure.core.rrb_vector.nodes.last_range(child);
var diff = (rng - (cljs.core.truth_(new_child)?clojure.core.rrb_vector.nodes.last_range(new_child):(0)));
var arr = ret.arr;
(rngs[subidx] = ((rngs[subidx]) - diff));

(arr[subidx] = new_child);

if((new_child == null)){
(rngs[(32)] = ((rngs[(32)]) - (1)));
} else {
}

return ret;

}
}
} else {
if((subidx === (0))){
return null;
} else {
var arr = ret.arr;
var child = (arr[subidx]);
(arr[subidx] = null);

(rngs[subidx] = (0));

(rngs[(32)] = ((rngs[(32)]) - (1)));

return ret;

}
}
}
});
clojure.core.rrb_vector.transients.do_assoc_BANG_ = (function clojure$core$rrb_vector$transients$do_assoc_BANG_(shift,root_edit,current_node,i,val){
var ret = clojure.core.rrb_vector.transients.ensure_editable(root_edit,current_node);
if(clojure.core.rrb_vector.nodes.regular_QMARK_(ret)){
var shift_39486__$1 = shift;
var node_39487 = ret;
while(true){
if((shift_39486__$1 === (0))){
var arr_39488 = node_39487.arr;
(arr_39488[(i & (31))] = val);
} else {
var arr_39489 = node_39487.arr;
var subidx_39490 = ((i >> shift_39486__$1) & (31));
var child_39491 = clojure.core.rrb_vector.transients.ensure_editable(root_edit,(arr_39489[subidx_39490]));
(arr_39489[subidx_39490] = child_39491);

var G__39493 = (shift_39486__$1 - (5));
var G__39494 = child_39491;
shift_39486__$1 = G__39493;
node_39487 = G__39494;
continue;
}
break;
}
} else {
var arr_39497 = ret.arr;
var rngs_39498 = clojure.core.rrb_vector.nodes.node_ranges(ret);
var subidx_39499 = ((i >> shift) & (31));
var subidx_39500__$1 = (function (){var subidx_39500__$1 = subidx_39499;
while(true){
if((i < ((rngs_39498[subidx_39500__$1]) | (0)))){
return subidx_39500__$1;
} else {
var G__39504 = (subidx_39500__$1 + (1));
subidx_39500__$1 = G__39504;
continue;
}
break;
}
})();
var i_39501__$1 = (((subidx_39500__$1 === (0)))?i:(i - (rngs_39498[(subidx_39500__$1 - (1))])));
(arr_39497[subidx_39500__$1] = (function (){var G__39447 = (shift - (5));
var G__39448 = root_edit;
var G__39449 = (arr_39497[subidx_39500__$1]);
var G__39450 = i_39501__$1;
var G__39451 = val;
return (clojure.core.rrb_vector.transients.do_assoc_BANG_.cljs$core$IFn$_invoke$arity$5 ? clojure.core.rrb_vector.transients.do_assoc_BANG_.cljs$core$IFn$_invoke$arity$5(G__39447,G__39448,G__39449,G__39450,G__39451) : clojure.core.rrb_vector.transients.do_assoc_BANG_.call(null,G__39447,G__39448,G__39449,G__39450,G__39451));
})());
}

return ret;
});

//# sourceMappingURL=clojure.core.rrb_vector.transients.js.map
