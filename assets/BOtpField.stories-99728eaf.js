import{j as ve,b as x,C as L,E as Ke,w as He,v as We,o as $,d as R,k as w,l as Ye,F as Xe,G as Ze,s as ee,u as Je,m as Qe,n as ke}from"./vue.esm-bundler-d836205b.js";import{_ as et}from"./BErrorMessage-3ca20143.js";import{u as tt}from"./Validation-68c07edf.js";import{u as nt}from"./vue-i18n.esm-bundler-b6b8dfca.js";import{v as at}from"./v4-a960c1f4.js";import{h as N,j as me,a as U,d as rt,b as be,c as st,i as _e,f as ot,e as ye,M as Oe,o as ut,r as Ie,S as te,k as we,g as z,n as D,l as xe}from"./_getTag-a6d04ccb.js";import"./Common-43134899.js";var ne=Object.create,it=function(){function e(){}return function(t){if(!N(t))return{};if(ne)return ne(t);e.prototype=t;var n=new e;return e.prototype=void 0,n}}();const lt=it;function ct(e,t){var n=-1,a=e.length;for(t||(t=Array(a));++n<a;)t[n]=e[n];return t}var dt=function(){try{var e=me(Object,"defineProperty");return e({},"",{}),e}catch{}}();const ae=dt;function ft(e,t){for(var n=-1,a=e==null?0:e.length;++n<a&&t(e[n],n,e)!==!1;);return e}var pt=9007199254740991,ht=/^(?:0|[1-9]\d*)$/;function gt(e,t){var n=typeof e;return t=t??pt,!!t&&(n=="number"||n!="symbol"&&ht.test(e))&&e>-1&&e%1==0&&e<t}function Ae(e,t,n){t=="__proto__"&&ae?ae(e,t,{configurable:!0,enumerable:!0,value:n,writable:!0}):e[t]=n}function Te(e,t){return e===t||e!==e&&t!==t}var vt=Object.prototype,mt=vt.hasOwnProperty;function Ce(e,t,n){var a=e[t];(!(mt.call(e,t)&&Te(a,n))||n===void 0&&!(t in e))&&Ae(e,t,n)}function P(e,t,n,a){var o=!n;n||(n={});for(var s=-1,u=t.length;++s<u;){var c=t[s],d=a?a(n[c],e[c],c,n,e):void 0;d===void 0&&(d=e[c]),o?Ae(n,c,d):Ce(n,c,d)}return n}function bt(e,t){for(var n=-1,a=Array(e);++n<e;)a[n]=t(n);return a}var _t=Object.prototype,yt=_t.hasOwnProperty;function $e(e,t){var n=U(e),a=!n&&rt(e),o=!n&&!a&&be(e),s=!n&&!a&&!o&&st(e),u=n||a||o||s,c=u?bt(e.length,String):[],d=c.length;for(var p in e)(t||yt.call(e,p))&&!(u&&(p=="length"||o&&(p=="offset"||p=="parent")||s&&(p=="buffer"||p=="byteLength"||p=="byteOffset")||gt(p,d)))&&c.push(p);return c}function G(e){return _e(e)?$e(e):ot(e)}function Ot(e){var t=[];if(e!=null)for(var n in Object(e))t.push(n);return t}var It=Object.prototype,wt=It.hasOwnProperty;function xt(e){if(!N(e))return Ot(e);var t=ye(e),n=[];for(var a in e)a=="constructor"&&(t||!wt.call(e,a))||n.push(a);return n}function K(e){return _e(e)?$e(e,!0):xt(e)}var At=me(Object,"create");const j=At;function Tt(){this.__data__=j?j(null):{},this.size=0}function Ct(e){var t=this.has(e)&&delete this.__data__[e];return this.size-=t?1:0,t}var $t="__lodash_hash_undefined__",jt=Object.prototype,Ft=jt.hasOwnProperty;function Bt(e){var t=this.__data__;if(j){var n=t[e];return n===$t?void 0:n}return Ft.call(t,e)?t[e]:void 0}var St=Object.prototype,Dt=St.hasOwnProperty;function Pt(e){var t=this.__data__;return j?t[e]!==void 0:Dt.call(t,e)}var Et="__lodash_hash_undefined__";function Vt(e,t){var n=this.__data__;return this.size+=this.has(e)?0:1,n[e]=j&&t===void 0?Et:t,this}function y(e){var t=-1,n=e==null?0:e.length;for(this.clear();++t<n;){var a=e[t];this.set(a[0],a[1])}}y.prototype.clear=Tt;y.prototype.delete=Ct;y.prototype.get=Bt;y.prototype.has=Pt;y.prototype.set=Vt;function Mt(){this.__data__=[],this.size=0}function E(e,t){for(var n=e.length;n--;)if(Te(e[n][0],t))return n;return-1}var qt=Array.prototype,Lt=qt.splice;function Rt(e){var t=this.__data__,n=E(t,e);if(n<0)return!1;var a=t.length-1;return n==a?t.pop():Lt.call(t,n,1),--this.size,!0}function Nt(e){var t=this.__data__,n=E(t,e);return n<0?void 0:t[n][1]}function Ut(e){return E(this.__data__,e)>-1}function zt(e,t){var n=this.__data__,a=E(n,e);return a<0?(++this.size,n.push([e,t])):n[a][1]=t,this}function b(e){var t=-1,n=e==null?0:e.length;for(this.clear();++t<n;){var a=e[t];this.set(a[0],a[1])}}b.prototype.clear=Mt;b.prototype.delete=Rt;b.prototype.get=Nt;b.prototype.has=Ut;b.prototype.set=zt;function Gt(){this.size=0,this.__data__={hash:new y,map:new(Oe||b),string:new y}}function Kt(e){var t=typeof e;return t=="string"||t=="number"||t=="symbol"||t=="boolean"?e!=="__proto__":e===null}function V(e,t){var n=e.__data__;return Kt(t)?n[typeof t=="string"?"string":"hash"]:n.map}function Ht(e){var t=V(this,e).delete(e);return this.size-=t?1:0,t}function Wt(e){return V(this,e).get(e)}function Yt(e){return V(this,e).has(e)}function Xt(e,t){var n=V(this,e),a=n.size;return n.set(e,t),this.size+=n.size==a?0:1,this}function A(e){var t=-1,n=e==null?0:e.length;for(this.clear();++t<n;){var a=e[t];this.set(a[0],a[1])}}A.prototype.clear=Gt;A.prototype.delete=Ht;A.prototype.get=Wt;A.prototype.has=Yt;A.prototype.set=Xt;function je(e,t){for(var n=-1,a=t.length,o=e.length;++n<a;)e[o+n]=t[n];return e}var Zt=ut(Object.getPrototypeOf,Object);const Fe=Zt;function Jt(){this.__data__=new b,this.size=0}function Qt(e){var t=this.__data__,n=t.delete(e);return this.size=t.size,n}function kt(e){return this.__data__.get(e)}function en(e){return this.__data__.has(e)}var tn=200;function nn(e,t){var n=this.__data__;if(n instanceof b){var a=n.__data__;if(!Oe||a.length<tn-1)return a.push([e,t]),this.size=++n.size,this;n=this.__data__=new A(a)}return n.set(e,t),this.size=n.size,this}function T(e){var t=this.__data__=new b(e);this.size=t.size}T.prototype.clear=Jt;T.prototype.delete=Qt;T.prototype.get=kt;T.prototype.has=en;T.prototype.set=nn;function an(e,t){return e&&P(t,G(t),e)}function rn(e,t){return e&&P(t,K(t),e)}var Be=typeof exports=="object"&&exports&&!exports.nodeType&&exports,re=Be&&typeof module=="object"&&module&&!module.nodeType&&module,sn=re&&re.exports===Be,se=sn?Ie.Buffer:void 0,oe=se?se.allocUnsafe:void 0;function on(e,t){if(t)return e.slice();var n=e.length,a=oe?oe(n):new e.constructor(n);return e.copy(a),a}function un(e,t){for(var n=-1,a=e==null?0:e.length,o=0,s=[];++n<a;){var u=e[n];t(u,n,e)&&(s[o++]=u)}return s}function Se(){return[]}var ln=Object.prototype,cn=ln.propertyIsEnumerable,ue=Object.getOwnPropertySymbols,dn=ue?function(e){return e==null?[]:(e=Object(e),un(ue(e),function(t){return cn.call(e,t)}))}:Se;const H=dn;function fn(e,t){return P(e,H(e),t)}var pn=Object.getOwnPropertySymbols,hn=pn?function(e){for(var t=[];e;)je(t,H(e)),e=Fe(e);return t}:Se;const De=hn;function gn(e,t){return P(e,De(e),t)}function Pe(e,t,n){var a=t(e);return U(e)?a:je(a,n(e))}function vn(e){return Pe(e,G,H)}function mn(e){return Pe(e,K,De)}var bn=Object.prototype,_n=bn.hasOwnProperty;function yn(e){var t=e.length,n=new e.constructor(t);return t&&typeof e[0]=="string"&&_n.call(e,"index")&&(n.index=e.index,n.input=e.input),n}var On=Ie.Uint8Array;const ie=On;function W(e){var t=new e.constructor(e.byteLength);return new ie(t).set(new ie(e)),t}function In(e,t){var n=t?W(e.buffer):e.buffer;return new e.constructor(n,e.byteOffset,e.byteLength)}var wn=/\w*$/;function xn(e){var t=new e.constructor(e.source,wn.exec(e));return t.lastIndex=e.lastIndex,t}var le=te?te.prototype:void 0,ce=le?le.valueOf:void 0;function An(e){return ce?Object(ce.call(e)):{}}function Tn(e,t){var n=t?W(e.buffer):e.buffer;return new e.constructor(n,e.byteOffset,e.length)}var Cn="[object Boolean]",$n="[object Date]",jn="[object Map]",Fn="[object Number]",Bn="[object RegExp]",Sn="[object Set]",Dn="[object String]",Pn="[object Symbol]",En="[object ArrayBuffer]",Vn="[object DataView]",Mn="[object Float32Array]",qn="[object Float64Array]",Ln="[object Int8Array]",Rn="[object Int16Array]",Nn="[object Int32Array]",Un="[object Uint8Array]",zn="[object Uint8ClampedArray]",Gn="[object Uint16Array]",Kn="[object Uint32Array]";function Hn(e,t,n){var a=e.constructor;switch(t){case En:return W(e);case Cn:case $n:return new a(+e);case Vn:return In(e,n);case Mn:case qn:case Ln:case Rn:case Nn:case Un:case zn:case Gn:case Kn:return Tn(e,n);case jn:return new a;case Fn:case Dn:return new a(e);case Bn:return xn(e);case Sn:return new a;case Pn:return An(e)}}function Wn(e){return typeof e.constructor=="function"&&!ye(e)?lt(Fe(e)):{}}var Yn="[object Map]";function Xn(e){return we(e)&&z(e)==Yn}var de=D&&D.isMap,Zn=de?xe(de):Xn;const Jn=Zn;var Qn="[object Set]";function kn(e){return we(e)&&z(e)==Qn}var fe=D&&D.isSet,ea=fe?xe(fe):kn;const ta=ea;var na=1,aa=2,ra=4,Ee="[object Arguments]",sa="[object Array]",oa="[object Boolean]",ua="[object Date]",ia="[object Error]",Ve="[object Function]",la="[object GeneratorFunction]",ca="[object Map]",da="[object Number]",Me="[object Object]",fa="[object RegExp]",pa="[object Set]",ha="[object String]",ga="[object Symbol]",va="[object WeakMap]",ma="[object ArrayBuffer]",ba="[object DataView]",_a="[object Float32Array]",ya="[object Float64Array]",Oa="[object Int8Array]",Ia="[object Int16Array]",wa="[object Int32Array]",xa="[object Uint8Array]",Aa="[object Uint8ClampedArray]",Ta="[object Uint16Array]",Ca="[object Uint32Array]",l={};l[Ee]=l[sa]=l[ma]=l[ba]=l[oa]=l[ua]=l[_a]=l[ya]=l[Oa]=l[Ia]=l[wa]=l[ca]=l[da]=l[Me]=l[fa]=l[pa]=l[ha]=l[ga]=l[xa]=l[Aa]=l[Ta]=l[Ca]=!0;l[ia]=l[Ve]=l[va]=!1;function S(e,t,n,a,o,s){var u,c=t&na,d=t&aa,p=t&ra;if(n&&(u=o?n(e,a,o,s):n(e)),u!==void 0)return u;if(!N(e))return e;var O=U(e);if(O){if(u=yn(e),!c)return ct(e,u)}else{var v=z(e),f=v==Ve||v==la;if(be(e))return on(e,c);if(v==Me||v==Ee||f&&!o){if(u=d||f?{}:Wn(e),!c)return d?gn(e,rn(u,e)):fn(e,an(u,e))}else{if(!l[v])return o?e:{};u=Hn(e,v,c)}}s||(s=new T);var I=s.get(e);if(I)return I;s.set(e,u),ta(e)?e.forEach(function(g){u.add(S(g,t,n,g,e,s))}):Jn(e)&&e.forEach(function(g,m){u.set(m,S(g,t,n,m,e,s))});var i=p?d?mn:vn:d?K:G,h=O?void 0:i(e);return ft(h||e,function(g,m){h&&(m=g,g=e[m]),Ce(u,m,S(g,t,n,m,e,s))}),u}var $a=1,ja=4;function Fa(e){return S(e,$a|ja)}const Ba=["disabled"],qe=ve({__name:"BOtpFieldBox",props:{value:{default:""},focus:{type:Boolean,default:!1},isDisabled:{type:Boolean,default:!1}},emits:["on-change","on-keydown","on-keyup","on-paste","on-focus","on-blur"],setup(e,{expose:t,emit:n}){const a=e,o=x(a.value||""),s=x(null),u=["0","1","2","3","4","5","6","7","8","9"],c=()=>{if(!u.includes(o.value)){o.value="";return}return o.value=o.value.toString(),o.value.length>1&&(o.value=o.value.slice(0,1)),n("on-change",o.value)},d=i=>{a.isDisabled&&i.preventDefault();const h=i;["Alt","Control","Meta","Backspace","ArrowLeft","ArrowRight","v",...u].includes(h.key)?n("on-keydown",i):h.preventDefault()},p=i=>{n("on-keyup",i)},O=i=>{n("on-paste",i)},v=()=>(s.value.select(),n("on-focus")),f=()=>n("on-blur"),I=()=>{s.value.focus(),s.value.select()};return L(()=>a.value,(i,h)=>{i!==h&&(o.value=i)}),L(()=>a.focus,(i,h)=>{h!==i&&s.value&&a.focus&&(s.value.focus(),s.value.select())}),Ke(()=>{s.value&&a.focus&&(s.value.focus(),s.value.select())}),t({focus:I}),(i,h)=>He(($(),R("input",{ref_key:"inputRef",ref:s,"onUpdate:modelValue":h[0]||(h[0]=g=>o.value=g),inputmode:"numeric",disabled:i.isDisabled,maxlength:"1",class:"ds-h-11 ds-w-11 ds-rounded-lg ds-border ds-text-center ds-drop-shadow-light ds-transition-all ds-duration-200",onInput:c,onKeydown:d,onKeyup:p,onPaste:O,onFocus:v,onBlur:f},null,40,Ba)),[[We,o.value]])}});qe.__docgenInfo={exportName:"default",displayName:"BOtpFieldBox",description:"",tags:{},expose:[{name:"focus"}],props:[{name:"value",required:!1,type:{name:"string"},defaultValue:{func:!1,value:"''"}},{name:"focus",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"isDisabled",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"false"}}],events:[{name:"on-change"},{name:"on-keydown"},{name:"on-keyup"},{name:"on-paste"},{name:"on-focus"},{name:"on-blur"}],sourceFiles:["/home/runner/work/design-system/design-system/src/components/BOtpField/BOtpFieldBox.vue"]};const Sa={class:"ds-flex ds-items-center ds-justify-center ds-space-x-2"},Y=ve({__name:"BOtpField",props:{inputId:{default:""},modelValue:{default:""},numInputs:{default:6},focusIndex:{default:void 0},disabled:{type:Boolean,default:!1},inputCssClass:{default:""},validationRules:{default:void 0},required:{type:Boolean,default:!1},requiredErrorMessage:{default:""},hideDetails:{type:Boolean,default:!1}},emits:["complete","change","update:modelValue","update:focusIndex"],setup(e,{expose:t,emit:n}){const a=e,{t:o}=nt(),s={validateRule:r=>!!r,errorMessage:()=>a.requiredErrorMessage||o("ds.global.field_required")},u=x(0),c=x([]),d=x(null),p=r=>{i.value=r},O=()=>{i.value=-1},v=w(()=>a.inputId||`id-${at()}`),f=w({get(){return a.modelValue.split("")},set(r){n("update:modelValue",r.join(""))}}),I=w(()=>a.modelValue),i=w({get(){return a.focusIndex!==void 0?a.focusIndex:u.value},set(r){a.focusIndex!==void 0?n("update:focusIndex",r):u.value=r}}),h=w(()=>{let r=[];return a.required&&r.push(s),a.validationRules&&(r=r.concat(a.validationRules)),r.length?r:void 0}),g=w(()=>[a.disabled?"ds-cursor-not-allowed ds-bg-[#f2f2f2] ds-text-black/[0.4]":"ds-text-black/[0.85]",X.value.valid?"ds-border-black/[0.1] focus:ds-border-focus focus:ds-ring-1 focus:ds-ring-focus":"ds-border-error focus:ds-ring-1 focus:ds-ring-error",a.inputCssClass]),{validate:m,validationResult:X}=tt(v.value,I,h.value),Le=()=>{d.value[i.value].focus()},Z=()=>f.value.join("").length===a.numInputs?n("complete",f.value.join("")):"Wait until the user enters the required number of characters",M=r=>{i.value=Math.max(Math.min(a.numInputs-1,r),0)},J=()=>{M(i.value+1)},Q=()=>{M(i.value-1)},q=r=>{c.value=[...f.value],f.value[i.value]=r,f.value=Fa(f.value);const C=c.value.join(""),F=f.value.join("");C!==F&&(n("change",F),Z())},Re=r=>{r.preventDefault();const C=r.clipboardData.getData("text/plain").slice(0,a.numInputs-i.value).split("");if(!C.join("").match(/^\d+$/))return"Invalid pasted data";const _=f.value.slice(0,i.value).concat(C);return _.slice(0,a.numInputs).forEach((k,Ge)=>{f.value[Ge]=k}),M(_.slice(0,a.numInputs).length),n("update:modelValue",f.value.join("")),Z()},Ne=r=>{q(r),J()},Ue=r=>{switch(r.key){case"Backspace":r.preventDefault(),q(""),Q();break;case"Delete":r.preventDefault(),q("");break;case"ArrowLeft":r.preventDefault(),Q();break;case"ArrowRight":r.preventDefault(),J();break}},ze=()=>{m()};return t({validate:m,focus:Le}),(r,C)=>($(),R("div",null,[Ye("div",Sa,[($(!0),R(Xe,null,Ze(r.numInputs,(F,_)=>($(),ee(qe,{key:_,ref_for:!0,ref_key:"boxRefs",ref:d,class:ke(g.value),focus:i.value===_,"is-disabled":r.disabled,value:f.value[_],onOnChange:Ne,onOnKeydown:Ue,onOnKeyup:ze,onOnPaste:Re,onOnFocus:k=>p(_),onOnBlur:O},null,8,["class","focus","is-disabled","value","onOnFocus"]))),128))]),r.hideDetails?Qe("",!0):($(),ee(et,{key:0,"error-message":Je(X).errorMessage(),class:"ds-mt-1"},null,8,["error-message"]))]))}});Y.__docgenInfo={exportName:"default",displayName:"BOtpField",description:"",tags:{},expose:[{name:"validate"},{name:"focus"}],props:[{name:"inputId",required:!1,type:{name:"string"},defaultValue:{func:!1,value:"''"}},{name:"modelValue",required:!1,type:{name:"string"},defaultValue:{func:!1,value:"''"}},{name:"numInputs",description:"Number of input boxes.",required:!1,type:{name:"number"},defaultValue:{func:!1,value:"6"}},{name:"focusIndex",description:"Index of input box to be focused.",required:!1,type:{name:"number"},defaultValue:{func:!1,value:"undefined"}},{name:"disabled",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"inputCssClass",required:!1,type:{name:"union",elements:[{name:"string"},{name:"{}"}]},defaultValue:{func:!1,value:"''"}},{name:"validationRules",description:"Array of custom validation rules.",required:!1,type:{name:"Array",elements:[{name:"ValidationRule"}]},defaultValue:{func:!1,value:"undefined"}},{name:"required",description:"Validate if the field is left empty.",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"requiredErrorMessage",required:!1,type:{name:"string"},defaultValue:{func:!1,value:"''"}},{name:"hideDetails",description:"Hide the validation error message.",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"false"}}],events:[{name:"complete"},{name:"change"},{name:"update:modelValue"},{name:"update:focusIndex"}],sourceFiles:["/home/runner/work/design-system/design-system/src/components/BOtpField/BOtpField.vue"]};const Ra={title:"Components/OtpField",component:Y,tags:["autodocs"],args:{inputId:"",numInputs:6,focusIndex:void 0,disabled:!1,inputCssClass:"",validationRules:void 0,required:!1,requiredErrorMessage:"",hideDetails:!1}},B={render:e=>({components:{BOtpField:Y},setup(){const t=x("");return L(()=>e.numInputs,n=>{t.value=t.value.substring(0,n)}),{args:e,otp:t}},template:`
      <BOtpField v-bind="args"  v-model="otp" />
    `}),args:{modelValue:""}};var pe,he,ge;B.parameters={...B.parameters,docs:{...(pe=B.parameters)==null?void 0:pe.docs,source:{originalSource:`{
  render: (args: any) => ({
    components: {
      BOtpField
    },
    setup() {
      const otp = ref('');
      /**
       * Watch
       */
      watch(() => args.numInputs, val => {
        otp.value = otp.value.substring(0, val);
      });
      return {
        args,
        otp
      };
    },
    template: \`
      <BOtpField v-bind="args"  v-model="otp" />
    \`
  }),
  args: {
    modelValue: ''
  }
}`,...(ge=(he=B.parameters)==null?void 0:he.docs)==null?void 0:ge.source}}};const Na=["Default"];export{B as Default,Na as __namedExportsOrder,Ra as default};
//# sourceMappingURL=BOtpField.stories-99728eaf.js.map
