var G=typeof global=="object"&&global&&global.Object===Object&&global;const C=G;var W=typeof self=="object"&&self&&self.Object===Object&&self,K=C||W||Function("return this")();const a=K;var L=a.Symbol;const p=L;var F=Object.prototype,q=F.hasOwnProperty,J=F.toString,s=p?p.toStringTag:void 0;function H(r){var t=q.call(r,s),o=r[s];try{r[s]=void 0;var g=!0}catch{}var R=J.call(r);return g&&(t?r[s]=o:delete r[s]),R}var X=Object.prototype,z=X.toString;function Q(r){return z.call(r)}var Y="[object Null]",Z="[object Undefined]",m=p?p.toStringTag:void 0;function u(r){return r==null?r===void 0?Z:Y:m&&m in Object(r)?H(r):Q(r)}function $(r){return r!=null&&typeof r=="object"}var rr=Array.isArray;const mt=rr;function B(r){var t=typeof r;return r!=null&&(t=="object"||t=="function")}var tr="[object AsyncFunction]",er="[object Function]",or="[object GeneratorFunction]",ar="[object Proxy]";function V(r){if(!B(r))return!1;var t=u(r);return t==er||t==or||t==tr||t==ar}var nr=a["__core-js_shared__"];const b=nr;var S=function(){var r=/[^.]+$/.exec(b&&b.keys&&b.keys.IE_PROTO||"");return r?"Symbol(src)_1."+r:""}();function cr(r){return!!S&&S in r}var sr=Function.prototype,ir=sr.toString;function c(r){if(r!=null){try{return ir.call(r)}catch{}try{return r+""}catch{}}return""}var ur=/[\\^$.*+?()[\]{}|]/g,fr=/^\[object .+?Constructor\]$/,gr=Function.prototype,pr=Object.prototype,br=gr.toString,yr=pr.hasOwnProperty,jr=RegExp("^"+br.call(yr).replace(ur,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");function lr(r){if(!B(r)||cr(r))return!1;var t=V(r)?jr:fr;return t.test(c(r))}function Tr(r,t){return r==null?void 0:r[t]}function f(r,t){var o=Tr(r,t);return lr(o)?o:void 0}var dr=f(a,"WeakMap");const j=dr;var vr=9007199254740991;function _(r){return typeof r=="number"&&r>-1&&r%1==0&&r<=vr}function St(r){return r!=null&&_(r.length)&&!V(r)}var $r=Object.prototype;function mr(r){var t=r&&r.constructor,o=typeof t=="function"&&t.prototype||$r;return r===o}var Sr="[object Arguments]";function A(r){return $(r)&&u(r)==Sr}var D=Object.prototype,Ar=D.hasOwnProperty,Or=D.propertyIsEnumerable,wr=A(function(){return arguments}())?A:function(r){return $(r)&&Ar.call(r,"callee")&&!Or.call(r,"callee")};const At=wr;function Pr(){return!1}var U=typeof exports=="object"&&exports&&!exports.nodeType&&exports,O=U&&typeof module=="object"&&module&&!module.nodeType&&module,hr=O&&O.exports===U,w=hr?a.Buffer:void 0,xr=w?w.isBuffer:void 0,Mr=xr||Pr;const Ot=Mr;var kr="[object Arguments]",Er="[object Array]",Ir="[object Boolean]",Cr="[object Date]",Fr="[object Error]",Br="[object Function]",Vr="[object Map]",_r="[object Number]",Dr="[object Object]",Ur="[object RegExp]",Nr="[object Set]",Rr="[object String]",Gr="[object WeakMap]",Wr="[object ArrayBuffer]",Kr="[object DataView]",Lr="[object Float32Array]",qr="[object Float64Array]",Jr="[object Int8Array]",Hr="[object Int16Array]",Xr="[object Int32Array]",zr="[object Uint8Array]",Qr="[object Uint8ClampedArray]",Yr="[object Uint16Array]",Zr="[object Uint32Array]",e={};e[Lr]=e[qr]=e[Jr]=e[Hr]=e[Xr]=e[zr]=e[Qr]=e[Yr]=e[Zr]=!0;e[kr]=e[Er]=e[Wr]=e[Ir]=e[Kr]=e[Cr]=e[Fr]=e[Br]=e[Vr]=e[_r]=e[Dr]=e[Ur]=e[Nr]=e[Rr]=e[Gr]=!1;function rt(r){return $(r)&&_(r.length)&&!!e[u(r)]}function tt(r){return function(t){return r(t)}}var N=typeof exports=="object"&&exports&&!exports.nodeType&&exports,i=N&&typeof module=="object"&&module&&!module.nodeType&&module,et=i&&i.exports===N,y=et&&C.process,ot=function(){try{var r=i&&i.require&&i.require("util").types;return r||y&&y.binding&&y.binding("util")}catch{}}();const P=ot;var h=P&&P.isTypedArray,at=h?tt(h):rt;const wt=at;function nt(r,t){return function(o){return r(t(o))}}var ct=nt(Object.keys,Object);const st=ct;var it=Object.prototype,ut=it.hasOwnProperty;function Pt(r){if(!mr(r))return st(r);var t=[];for(var o in Object(r))ut.call(r,o)&&o!="constructor"&&t.push(o);return t}var ft=f(a,"Map");const l=ft;var gt=f(a,"DataView");const T=gt;var pt=f(a,"Promise");const d=pt;var bt=f(a,"Set");const v=bt;var x="[object Map]",yt="[object Object]",M="[object Promise]",k="[object Set]",E="[object WeakMap]",I="[object DataView]",jt=c(T),lt=c(l),Tt=c(d),dt=c(v),vt=c(j),n=u;(T&&n(new T(new ArrayBuffer(1)))!=I||l&&n(new l)!=x||d&&n(d.resolve())!=M||v&&n(new v)!=k||j&&n(new j)!=E)&&(n=function(r){var t=u(r),o=t==yt?r.constructor:void 0,g=o?c(o):"";if(g)switch(g){case jt:return I;case lt:return x;case Tt:return M;case dt:return k;case vt:return E}return t});const ht=n;export{l as M,p as S,mt as a,Ot as b,wt as c,At as d,mr as e,Pt as f,ht as g,B as h,St as i,f as j,$ as k,tt as l,P as n,nt as o,a as r};
//# sourceMappingURL=_getTag-a6d04ccb.js.map