importScripts("shared.js");
(function(){
var vF=function(a){return null!=a},GF=function(a,b){return $APP.vd(function(c,d){var e=$APP.fl<<BigInt(d);a:{d=a-d-1;for(var f=e<<$APP.fl,g=($APP.fl<<e)-$APP.fl<<e;;)if(0<d){var l=f<<$APP.fl;g|=g<<f;--d;f=l}else break a}return c^(c&g)>>e},b,$APP.bj(a))},JF=function(a){for(var b=$APP.Kb($APP.rg);;){var c=$APP.z(a);if(c)c=$APP.C(c),b=$APP.Jh(c)?$APP.ze.B(b,$APP.C(c)):b,a=$APP.D(a);else return $APP.Nb(b)}},KF=function(a,b){return $APP.Be($APP.p(!1)?function(c){return $APP.Wc(0!=(a&1<<c),$APP.sg([a]))}:
$APP.Mi.B($APP.yF,a),$APP.Dg(b-1,-1,-1))},LF=function(a,b){var c=null!=b&&"length"in b?b.length:void 0;var d=31-Math.clz32(c);a:switch(a=a instanceof $APP.U?a.sa:null,a){case "min":a=1;break a;case "max":a=0;break a;default:throw Error(["No matching clause: ",$APP.q.j(a)].join(""));}a:switch(a){case 1:var e=0;break a;case 0:e=1;break a;default:throw Error(["No matching clause: ",$APP.q.j(a)].join(""));}for(var f=0,g=$APP.Kb($APP.Ae),l=$APP.Kb($APP.Ae);;)if(f<c){var m=$APP.O,n=b[f];$APP.p(m.B?m.B(a,
n):m.call(null,a,n))?(m=f+1,g=$APP.ze.B(g,KF(f,d)),f=m):$APP.p(m.B?m.B(e,n):m.call(null,e,n))?f+=1:(m=f+1,l=$APP.ze.B(l,KF(f,d)),f=m)}else return new $APP.X(null,2,5,$APP.Z,[$APP.Nb(g),$APP.Nb(l)],null)},NF=function(a,b){var c=$APP.z(b);return c?(c=$APP.C(c),$APP.vd(function(d,e){var f=$APP.R(d,0,null),g=$APP.R(d,1,null),l=a.j?a.j(e):a.call(null,e);return l<g?new $APP.X(null,2,5,$APP.Z,[new $APP.X(null,1,5,$APP.Z,[e],null),l],null):$APP.O.B(l,g)?new $APP.X(null,2,5,$APP.Z,[$APP.$f.B(f,e),g],null):
d},new $APP.X(null,2,5,$APP.Z,[new $APP.X(null,1,5,$APP.Z,[c],null),a.j?a.j(c):a.call(null,c)],null),$APP.sc(b))):null},PF=function(a,b){return null==b?a:$APP.O.B($APP.mi,$APP.Wh(b))?$APP.Ni.B(a,b):$APP.$f.B(a,b)},QF=function(a){var b=JF(a);return new $APP.X(null,2,5,$APP.Z,[b,$APP.Ni.C($APP.rg,$APP.xe(function(c){return $APP.z(c)&&$APP.BF(b,c)}),a)],null)},TF=function(a,b){for(var c=a,d=b,e=!0;;){if($APP.Zc(c)||$APP.Zc(d))return e;a=$APP.D(c);b=$APP.D(d);e=null==$APP.C(d)?e:$APP.Pk.B(e,function(){var f=
$APP.C(c);return $APP.Ra($APP.C(d))?$APP.ii(f):f}());c=a;d=b}},UF=function(a,b){for(var c=a,d=b,e=!1;;){if($APP.Zc(c)||$APP.Zc(d))return e;a=$APP.D(c);b=$APP.D(d);e=null==$APP.C(d)?e:$APP.Ok.B(e,function(){var f=$APP.C(c);return $APP.p($APP.C(d))?$APP.ii(f):f}());c=a;d=b}},VF=function(a,b){var c=$APP.F(a);return $APP.pe.B($APP.Qk,function(){return function g(e,f){return new $APP.Pd(null,function(){for(var l=e,m=f;;){var n=$APP.z(l);if(n){var r=n;if($APP.gd(r)){var u=$APP.Tb(r),w=$APP.F(u),y=$APP.Sd(w);
return function(){for(var Q=0;;)if(Q<w){var V=$APP.Kc(u,Q),Y=Q+m;$APP.O.B(V,"1")&&$APP.Wd(y,$APP.vd(function(ia,wa,ca,x,H,K,J,N,B,I,M){return function(E,P){return 0!=(H&1<<P)?$APP.Pk.B(E,$APP.Kc(a,M-P-1)):E}}(Q,l,m,V,Y,u,w,y,r,n,c),!0,$APP.Dg(c-1,-1,-1)));Q+=1}else return!0}()?$APP.Vd($APP.zh(y),g($APP.Ub(r),m+w)):$APP.Vd($APP.zh(y),null)}var A=$APP.C(r),G=m;if($APP.O.B(A,"1"))return $APP.Ld($APP.vd(function(Q,V,Y,ia,wa,ca,x){return function(H,K){return 0!=(ia&1<<K)?$APP.Pk.B(H,$APP.Kc(a,x-K-1)):
H}}(l,m,A,G,r,n,c),!0,$APP.Dg(c-1,-1,-1)),g($APP.sc(r),m+1));A=$APP.sc(r);G=m+1;l=A;m=G}else return null}},null)}(function(){var e=b.toString.call(b,2);return e.padStart.call(e,1<<c,"0")}(),0)}())},hG=function(a,b){a=$APP.MF(a,b);var c=$APP.R(a,0,null);a=$APP.R(a,1,null);a=QF(a);var d=$APP.R(a,0,null),e=$APP.R(a,1,null);return function l(g){return new $APP.Pd(null,function(){for(;;){var m=$APP.z(g);if(m){if($APP.gd(m)){var n=$APP.Tb(m),r=$APP.F(n),u=$APP.Sd(r);a:for(var w=0;;)if(w<r){var y=$APP.Tc(n,
w);y=$APP.Og.B(c,y);u.add(y);w+=1}else{n=!0;break a}return n?$APP.Vd($APP.zh(u),l($APP.Ub(m))):$APP.Vd($APP.zh(u),null)}u=$APP.C(m);return $APP.Ld($APP.Og.B(c,u),l($APP.sc(m)))}return null}},null)}($APP.z(e)?function(){var g=$APP.fG($APP.pe.B($APP.Xk,$APP.Og.B($APP.Mi.B($APP.pe,$APP.Wk),e)));if($APP.O.B($APP.oi,$APP.Wh(g))){var l=$APP.Be($APP.Mi.B($APP.CF,vF),c);return function r(n){return new $APP.Pd(null,function(){for(;;){var u=$APP.z(n);if(u){if($APP.gd(u)){var w=$APP.Tb(u),y=$APP.F(w),A=$APP.Sd(y);
a:for(var G=0;;)if(G<y){var Q=$APP.Tc(w,G);Q=PF(d,Q);A.add(Q);G+=1}else{w=!0;break a}return w?$APP.Vd($APP.zh(A),r($APP.Ub(u))):$APP.Vd($APP.zh(A),null)}A=$APP.C(u);return $APP.Ld(PF(d,A),r($APP.sc(u)))}return null}},null)}($APP.C(NF(function(n){return $APP.O.B($APP.mi,$APP.Wh(n))?$APP.ZF.C(l,$APP.gG,n):l.j?l.j(n):l.call(null,n)},g)))}return new $APP.X(null,1,5,$APP.Z,[PF(d,g)],null)}():new $APP.X(null,1,5,$APP.Z,[d],null))},iG=function(a){return function(){function b(e,f){return postMessage($APP.Fj(new $APP.k(null,
2,[$APP.fk,a,$APP.xk,e],null)),$APP.Fj(f))}function c(e){return postMessage($APP.Fj(new $APP.k(null,2,[$APP.fk,a,$APP.xk,e],null)))}var d=null;d=function(e,f){switch(arguments.length){case 1:return c.call(this,e);case 2:return b.call(this,e,f)}throw Error("Invalid arity: "+arguments.length);};d.j=c;d.B=b;return d}()},lG=function(a){$APP.Mk.B?$APP.Mk.B("worker dispatch event received by worker",jG):$APP.Mk.call(null,"worker dispatch event received by worker",jG);$APP.Mk.j?$APP.Mk.j(a):$APP.Mk.call(null,
a);var b=function(){var g=null!=a&&"data"in a?a.data:void 0;if(null!=g&&"task"in g)return g.task}(),c=function(){var g=null!=a&&"data"in a?a.data:void 0;if(null!=g&&"task-id"in g)return g["task-id"]}();try{var d=$APP.T.B(kG,b);if(null==d)throw Error(["Execution error: no such task as ",$APP.q.j(b)].join(""));var e=iG(c);return d.B?d.B(e,a):d.call(null,e,a)}catch(g){if(g instanceof Object){d=g;$APP.Mk.B?$APP.Mk.B("Error in worker",jG):$APP.Mk.call(null,"Error in worker",jG);e=null!=d&&"name"in d?d.name:
void 0;var f=null!=d&&"message"in d?d.message:void 0;return postMessage({type:"error",name:e,message:f,error:d.toString.call(d),task:b,"task-id":c,"worker-id":jG})}throw g;}},mG=function mG(a){switch(arguments.length){case 1:return mG.j(arguments[0]);case 2:return mG.B(arguments[0],arguments[1]);default:throw Error(["Invalid arity: ",$APP.q.j(arguments.length)].join(""));}};mG.j=function(a){return mG.B(a,null)};
mG.B=function(a,b){a:{var c=$APP.oj.B(a,b);for(b=$APP.rg;;)if($APP.z(c)){var d=$APP.OF($APP.Mi.B($APP.CF,$APP.xF),c);b:for(var e=$APP.rg,f=$APP.rg,g=d;;){var l=$APP.C(g);if($APP.p(l)){var m=l;l=$APP.R(m,0,null);m=$APP.R(m,1,null);l=$APP.OI(m,$APP.T.B(d,l+1),!1);$APP.p(l)?(m=l,l=$APP.R(m,0,null),m=$APP.R(m,1,null),e=$APP.Ni.B(e,l),f=$APP.Ni.B(f,m),g=$APP.D(g)):g=$APP.D(g)}else{d=new $APP.X(null,2,5,$APP.Z,[$APP.th(e,c),f],null);break b}}c=$APP.R(d,0,null);d=$APP.R(d,1,null);b=$APP.Ni.B(b,c);c=d}else break a}return hG(b,
a)};mG.T=2;var jG,kG=new $APP.k(null,8,["function-bytes",function(a,b){b=null!=b&&"data"in b?b.data:void 0;var c=null!=b&&"args"in b?b.args:void 0;var d=$APP.R(c,0,null);b=$APP.R(d,0,null);d=$APP.R(d,1,null);c=$APP.R(c,1,null);b=$APP.$k.functionBytes(Function(b,d),c);c=null!=b&&"buffer"in b?b.buffer:void 0;c=new $APP.X(null,1,5,$APP.Z,[c],null);return a.B?a.B(b,c):a.call(null,b,c)},"minterms-bytes",function(a,b){b=null!=b&&"data"in b?b.data:void 0;var c=null!=b&&"args"in b?b.args:void 0;var d=$APP.R(c,0,null);
b=$APP.R(d,0,null);d=$APP.R(d,1,null);c=$APP.R(c,1,null);b=$APP.$k.functionBytes({on:b,unspecified:d},c);c=null!=b&&"buffer"in b?b.buffer:void 0;c=new $APP.X(null,1,5,$APP.Z,[c],null);return a.B?a.B(b,c):a.call(null,b,c)},"maxterms-bytes",function(a,b){b=null!=b&&"data"in b?b.data:void 0;var c=null!=b&&"args"in b?b.args:void 0;var d=$APP.R(c,0,null);b=$APP.R(d,0,null);d=$APP.R(d,1,null);c=$APP.R(c,1,null);b=$APP.$k.functionBytes({off:b,unspecified:d},c);c=null!=b&&"buffer"in b?b.buffer:void 0;c=new $APP.X(null,
1,5,$APP.Z,[c],null);return a.B?a.B(b,c):a.call(null,b,c)},"test-task",function(a,b){b=null!=b&&"data"in b?b.data:void 0;b=null!=b&&"args"in b?b.args:void 0;b=$APP.R(b,0,null);return a.j?a.j(b):a.call(null,b)},"assign-id",function(a,b){a=null!=b&&"data"in b?b.data:void 0;a=null!=a&&"args"in a?a.args:void 0;jG=a=$APP.R(a,0,null);return $APP.Mk.B?$APP.Mk.B("worker assigned id ",a):$APP.Mk.call(null,"worker assigned id ",a)},"min-sops",function(a,b){b=null!=b&&"data"in b?b.data:void 0;var c=null!=b&&
"args"in b?b.args:void 0;b=$APP.R(c,0,null);c=$APP.R(c,1,null);$APP.Mk.B?$APP.Mk.B("minsops bitbytes: ",c):$APP.Mk.call(null,"minsops bitbytes: ",c);b=$APP.Og.B($APP.Mi.C($APP.ZF,$APP.Mi.B(TF,b),$APP.Ok),$APP.pe.B(mG,LF($APP.Hk,c)));return a.j?a.j(b):a.call(null,b)},"min-poss",function(a,b){b=null!=b&&"data"in b?b.data:void 0;var c=null!=b&&"args"in b?b.args:void 0;b=$APP.R(c,0,null);c=$APP.R(c,1,null);$APP.Mk.B?$APP.Mk.B("minposs bitbytes: ",c):$APP.Mk.call(null,"minposs bitbytes: ",c);b=$APP.Og.B($APP.Mi.C($APP.ZF,
$APP.Mi.B(UF,b),$APP.Pk),$APP.pe.B(mG,LF($APP.Dk,c)));return a.j?a.j(b):a.call(null,b)},"zhegalkin-polynomial",function(a,b){b=null!=b&&"data"in b?b.data:void 0;var c=null!=b&&"args"in b?b.args:void 0;b=$APP.R(c,0,null);c=$APP.R(c,1,null);c=null==c?null:["0b",$APP.q.j(c)].join("");c=null==c?null:BigInt(c);c=null==c?null:GF($APP.F(b),c);b=null==c?null:VF(b,c);return a.j?a.j(b):a.call(null,b)}],null);try{$APP.Mk.j?$APP.Mk.j("worker created"):$APP.Mk.call(null,"worker created");var rR=self;rR.addEventListener.call(rR,"message",lG);$APP.Mk.j?$APP.Mk.j(self):$APP.Mk.call(null,self)}catch(a){throw console.error("An error occurred when calling (bfuncs.worker/init)"),a;};
}).call(this);