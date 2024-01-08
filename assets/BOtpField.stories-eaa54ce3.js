import{j as ge,e as w,z as L,B as Ge,w as He,v as We,o as $,b as R,k as I,l as Ye,F as Xe,D as Ze,x as ee,u as Je,m as Qe,n as ke}from"./vue.esm-bundler-29df2e62.js";import{_ as et}from"./BErrorMessage-f3a23431.js";import{u as tt}from"./Validation-5669da51.js";import{u as nt}from"./vue-i18n.esm-bundler-152c8982.js";import{v as at}from"./v4-a960c1f4.js";import{h as U,j as ve,a as N,d as rt,b as ye,c as st,i as be,f as ot,e as _e,M as Oe,o as it,r as xe,S as te,k as Ie,g as K,n as P,l as we}from"./_getTag-a6d04ccb.js";import"./Common-43134899.js";var ne=Object.create,ut=function(){function e(){}return function(t){if(!U(t))return{};if(ne)return ne(t);e.prototype=t;var n=new e;return e.prototype=void 0,n}}();const lt=ut;function ct(e,t){var n=-1,a=e.length;for(t||(t=Array(a));++n<a;)t[n]=e[n];return t}var dt=function(){try{var e=ve(Object,"defineProperty");return e({},"",{}),e}catch{}}();const ae=dt;function pt(e,t){for(var n=-1,a=e==null?0:e.length;++n<a&&t(e[n],n,e)!==!1;);return e}var ft=9007199254740991,mt=/^(?:0|[1-9]\d*)$/;function ht(e,t){var n=typeof e;return t=t??ft,!!t&&(n=="number"||n!="symbol"&&mt.test(e))&&e>-1&&e%1==0&&e<t}function Ae(e,t,n){t=="__proto__"&&ae?ae(e,t,{configurable:!0,enumerable:!0,value:n,writable:!0}):e[t]=n}function Te(e,t){return e===t||e!==e&&t!==t}var gt=Object.prototype,vt=gt.hasOwnProperty;function Ce(e,t,n){var a=e[t];(!(vt.call(e,t)&&Te(a,n))||n===void 0&&!(t in e))&&Ae(e,t,n)}function S(e,t,n,a){var o=!n;n||(n={});for(var s=-1,i=t.length;++s<i;){var c=t[s],d=a?a(n[c],e[c],c,n,e):void 0;d===void 0&&(d=e[c]),o?Ae(n,c,d):Ce(n,c,d)}return n}function yt(e,t){for(var n=-1,a=Array(e);++n<e;)a[n]=t(n);return a}var bt=Object.prototype,_t=bt.hasOwnProperty;function $e(e,t){var n=N(e),a=!n&&rt(e),o=!n&&!a&&ye(e),s=!n&&!a&&!o&&st(e),i=n||a||o||s,c=i?yt(e.length,String):[],d=c.length;for(var f in e)(t||_t.call(e,f))&&!(i&&(f=="length"||o&&(f=="offset"||f=="parent")||s&&(f=="buffer"||f=="byteLength"||f=="byteOffset")||ht(f,d)))&&c.push(f);return c}function z(e){return be(e)?$e(e):ot(e)}function Ot(e){var t=[];if(e!=null)for(var n in Object(e))t.push(n);return t}var xt=Object.prototype,It=xt.hasOwnProperty;function wt(e){if(!U(e))return Ot(e);var t=_e(e),n=[];for(var a in e)a=="constructor"&&(t||!It.call(e,a))||n.push(a);return n}function G(e){return be(e)?$e(e,!0):wt(e)}var At=ve(Object,"create");const j=At;function Tt(){this.__data__=j?j(null):{},this.size=0}function Ct(e){var t=this.has(e)&&delete this.__data__[e];return this.size-=t?1:0,t}var $t="__lodash_hash_undefined__",jt=Object.prototype,Ft=jt.hasOwnProperty;function Bt(e){var t=this.__data__;if(j){var n=t[e];return n===$t?void 0:n}return Ft.call(t,e)?t[e]:void 0}var Dt=Object.prototype,Pt=Dt.hasOwnProperty;function St(e){var t=this.__data__;return j?t[e]!==void 0:Pt.call(t,e)}var Et="__lodash_hash_undefined__";function Vt(e,t){var n=this.__data__;return this.size+=this.has(e)?0:1,n[e]=j&&t===void 0?Et:t,this}function _(e){var t=-1,n=e==null?0:e.length;for(this.clear();++t<n;){var a=e[t];this.set(a[0],a[1])}}_.prototype.clear=Tt;_.prototype.delete=Ct;_.prototype.get=Bt;_.prototype.has=St;_.prototype.set=Vt;function Mt(){this.__data__=[],this.size=0}function E(e,t){for(var n=e.length;n--;)if(Te(e[n][0],t))return n;return-1}var qt=Array.prototype,Lt=qt.splice;function Rt(e){var t=this.__data__,n=E(t,e);if(n<0)return!1;var a=t.length-1;return n==a?t.pop():Lt.call(t,n,1),--this.size,!0}function Ut(e){var t=this.__data__,n=E(t,e);return n<0?void 0:t[n][1]}function Nt(e){return E(this.__data__,e)>-1}function Kt(e,t){var n=this.__data__,a=E(n,e);return a<0?(++this.size,n.push([e,t])):n[a][1]=t,this}function y(e){var t=-1,n=e==null?0:e.length;for(this.clear();++t<n;){var a=e[t];this.set(a[0],a[1])}}y.prototype.clear=Mt;y.prototype.delete=Rt;y.prototype.get=Ut;y.prototype.has=Nt;y.prototype.set=Kt;function zt(){this.size=0,this.__data__={hash:new _,map:new(Oe||y),string:new _}}function Gt(e){var t=typeof e;return t=="string"||t=="number"||t=="symbol"||t=="boolean"?e!=="__proto__":e===null}function V(e,t){var n=e.__data__;return Gt(t)?n[typeof t=="string"?"string":"hash"]:n.map}function Ht(e){var t=V(this,e).delete(e);return this.size-=t?1:0,t}function Wt(e){return V(this,e).get(e)}function Yt(e){return V(this,e).has(e)}function Xt(e,t){var n=V(this,e),a=n.size;return n.set(e,t),this.size+=n.size==a?0:1,this}function A(e){var t=-1,n=e==null?0:e.length;for(this.clear();++t<n;){var a=e[t];this.set(a[0],a[1])}}A.prototype.clear=zt;A.prototype.delete=Ht;A.prototype.get=Wt;A.prototype.has=Yt;A.prototype.set=Xt;function je(e,t){for(var n=-1,a=t.length,o=e.length;++n<a;)e[o+n]=t[n];return e}var Zt=it(Object.getPrototypeOf,Object);const Fe=Zt;function Jt(){this.__data__=new y,this.size=0}function Qt(e){var t=this.__data__,n=t.delete(e);return this.size=t.size,n}function kt(e){return this.__data__.get(e)}function en(e){return this.__data__.has(e)}var tn=200;function nn(e,t){var n=this.__data__;if(n instanceof y){var a=n.__data__;if(!Oe||a.length<tn-1)return a.push([e,t]),this.size=++n.size,this;n=this.__data__=new A(a)}return n.set(e,t),this.size=n.size,this}function T(e){var t=this.__data__=new y(e);this.size=t.size}T.prototype.clear=Jt;T.prototype.delete=Qt;T.prototype.get=kt;T.prototype.has=en;T.prototype.set=nn;function an(e,t){return e&&S(t,z(t),e)}function rn(e,t){return e&&S(t,G(t),e)}var Be=typeof exports=="object"&&exports&&!exports.nodeType&&exports,re=Be&&typeof module=="object"&&module&&!module.nodeType&&module,sn=re&&re.exports===Be,se=sn?xe.Buffer:void 0,oe=se?se.allocUnsafe:void 0;function on(e,t){if(t)return e.slice();var n=e.length,a=oe?oe(n):new e.constructor(n);return e.copy(a),a}function un(e,t){for(var n=-1,a=e==null?0:e.length,o=0,s=[];++n<a;){var i=e[n];t(i,n,e)&&(s[o++]=i)}return s}function De(){return[]}var ln=Object.prototype,cn=ln.propertyIsEnumerable,ie=Object.getOwnPropertySymbols,dn=ie?function(e){return e==null?[]:(e=Object(e),un(ie(e),function(t){return cn.call(e,t)}))}:De;const H=dn;function pn(e,t){return S(e,H(e),t)}var fn=Object.getOwnPropertySymbols,mn=fn?function(e){for(var t=[];e;)je(t,H(e)),e=Fe(e);return t}:De;const Pe=mn;function hn(e,t){return S(e,Pe(e),t)}function Se(e,t,n){var a=t(e);return N(e)?a:je(a,n(e))}function gn(e){return Se(e,z,H)}function vn(e){return Se(e,G,Pe)}var yn=Object.prototype,bn=yn.hasOwnProperty;function _n(e){var t=e.length,n=new e.constructor(t);return t&&typeof e[0]=="string"&&bn.call(e,"index")&&(n.index=e.index,n.input=e.input),n}var On=xe.Uint8Array;const ue=On;function W(e){var t=new e.constructor(e.byteLength);return new ue(t).set(new ue(e)),t}function xn(e,t){var n=t?W(e.buffer):e.buffer;return new e.constructor(n,e.byteOffset,e.byteLength)}var In=/\w*$/;function wn(e){var t=new e.constructor(e.source,In.exec(e));return t.lastIndex=e.lastIndex,t}var le=te?te.prototype:void 0,ce=le?le.valueOf:void 0;function An(e){return ce?Object(ce.call(e)):{}}function Tn(e,t){var n=t?W(e.buffer):e.buffer;return new e.constructor(n,e.byteOffset,e.length)}var Cn="[object Boolean]",$n="[object Date]",jn="[object Map]",Fn="[object Number]",Bn="[object RegExp]",Dn="[object Set]",Pn="[object String]",Sn="[object Symbol]",En="[object ArrayBuffer]",Vn="[object DataView]",Mn="[object Float32Array]",qn="[object Float64Array]",Ln="[object Int8Array]",Rn="[object Int16Array]",Un="[object Int32Array]",Nn="[object Uint8Array]",Kn="[object Uint8ClampedArray]",zn="[object Uint16Array]",Gn="[object Uint32Array]";function Hn(e,t,n){var a=e.constructor;switch(t){case En:return W(e);case Cn:case $n:return new a(+e);case Vn:return xn(e,n);case Mn:case qn:case Ln:case Rn:case Un:case Nn:case Kn:case zn:case Gn:return Tn(e,n);case jn:return new a;case Fn:case Pn:return new a(e);case Bn:return wn(e);case Dn:return new a;case Sn:return An(e)}}function Wn(e){return typeof e.constructor=="function"&&!_e(e)?lt(Fe(e)):{}}var Yn="[object Map]";function Xn(e){return Ie(e)&&K(e)==Yn}var de=P&&P.isMap,Zn=de?we(de):Xn;const Jn=Zn;var Qn="[object Set]";function kn(e){return Ie(e)&&K(e)==Qn}var pe=P&&P.isSet,ea=pe?we(pe):kn;const ta=ea;var na=1,aa=2,ra=4,Ee="[object Arguments]",sa="[object Array]",oa="[object Boolean]",ia="[object Date]",ua="[object Error]",Ve="[object Function]",la="[object GeneratorFunction]",ca="[object Map]",da="[object Number]",Me="[object Object]",pa="[object RegExp]",fa="[object Set]",ma="[object String]",ha="[object Symbol]",ga="[object WeakMap]",va="[object ArrayBuffer]",ya="[object DataView]",ba="[object Float32Array]",_a="[object Float64Array]",Oa="[object Int8Array]",xa="[object Int16Array]",Ia="[object Int32Array]",wa="[object Uint8Array]",Aa="[object Uint8ClampedArray]",Ta="[object Uint16Array]",Ca="[object Uint32Array]",l={};l[Ee]=l[sa]=l[va]=l[ya]=l[oa]=l[ia]=l[ba]=l[_a]=l[Oa]=l[xa]=l[Ia]=l[ca]=l[da]=l[Me]=l[pa]=l[fa]=l[ma]=l[ha]=l[wa]=l[Aa]=l[Ta]=l[Ca]=!0;l[ua]=l[Ve]=l[ga]=!1;function D(e,t,n,a,o,s){var i,c=t&na,d=t&aa,f=t&ra;if(n&&(i=o?n(e,a,o,s):n(e)),i!==void 0)return i;if(!U(e))return e;var O=N(e);if(O){if(i=_n(e),!c)return ct(e,i)}else{var g=K(e),p=g==Ve||g==la;if(ye(e))return on(e,c);if(g==Me||g==Ee||p&&!o){if(i=d||p?{}:Wn(e),!c)return d?hn(e,rn(i,e)):pn(e,an(i,e))}else{if(!l[g])return o?e:{};i=Hn(e,g,c)}}s||(s=new T);var x=s.get(e);if(x)return x;s.set(e,i),ta(e)?e.forEach(function(h){i.add(D(h,t,n,h,e,s))}):Jn(e)&&e.forEach(function(h,v){i.set(v,D(h,t,n,v,e,s))});var u=f?d?vn:gn:d?G:z,m=O?void 0:u(e);return pt(m||e,function(h,v){m&&(v=h,h=e[v]),Ce(i,v,D(h,t,n,v,e,s))}),i}var $a=1,ja=4;function Fa(e){return D(e,$a|ja)}const Ba=["disabled"],qe=ge({__name:"BOtpFieldBox",props:{value:{default:""},focus:{type:Boolean,default:!1},isDisabled:{type:Boolean,default:!1}},emits:["on-change","on-keydown","on-keyup","on-paste","on-focus","on-blur"],setup(e,{expose:t,emit:n}){const a=e,o=w(a.value||""),s=w(null),i=["0","1","2","3","4","5","6","7","8","9"],c=()=>{if(!i.includes(o.value)){o.value="";return}return o.value=o.value.toString(),o.value.length>1&&(o.value=o.value.slice(0,1)),n("on-change",o.value)},d=u=>{a.isDisabled&&u.preventDefault();const m=u;["Alt","Control","Meta","Backspace","ArrowLeft","ArrowRight","v",...i].includes(m.key)?n("on-keydown",u):m.preventDefault()},f=u=>{n("on-keyup",u)},O=u=>{n("on-paste",u)},g=()=>(s.value.select(),n("on-focus")),p=()=>n("on-blur"),x=()=>{s.value.focus(),s.value.select()};return L(()=>a.value,(u,m)=>{u!==m&&(o.value=u)}),L(()=>a.focus,(u,m)=>{m!==u&&s.value&&a.focus&&(s.value.focus(),s.value.select())}),Ge(()=>{s.value&&a.focus&&(s.value.focus(),s.value.select())}),t({focus:x}),(u,m)=>He(($(),R("input",{ref_key:"inputRef",ref:s,"onUpdate:modelValue":m[0]||(m[0]=h=>o.value=h),disabled:u.isDisabled,class:"ds-h-11 ds-w-11 ds-rounded-lg ds-border ds-text-center ds-drop-shadow-light ds-transition-all ds-duration-200",inputmode:"numeric",maxlength:"1",onBlur:p,onFocus:g,onInput:c,onKeydown:d,onKeyup:f,onPaste:O},null,40,Ba)),[[We,o.value]])}});qe.__docgenInfo={exportName:"default",displayName:"BOtpFieldBox",description:"",tags:{},expose:[{name:"focus"}],props:[{name:"value",required:!1,type:{name:"string"},defaultValue:{func:!1,value:"''"}},{name:"focus",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"isDisabled",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"false"}}],events:[{name:"on-change",type:{names:["string"]}},{name:"on-keydown",type:{names:["KeyboardEvent"]}},{name:"on-keyup",type:{names:["KeyboardEvent"]}},{name:"on-paste",type:{names:["ClipboardEvent"]}},{name:"on-focus"},{name:"on-blur"}],sourceFiles:["/home/runner/work/design-system/design-system/src/components/BOtpField/BOtpFieldBox.vue"]};const Da={class:"ds-flex ds-items-center ds-justify-center ds-space-x-2"},Y=ge({__name:"BOtpField",props:{inputId:{default:""},modelValue:{default:""},numInputs:{default:6},focusIndex:{default:void 0},disabled:{type:Boolean,default:!1},inputCssClass:{default:""},validationRules:{default:void 0},required:{type:Boolean,default:!1},requiredErrorMessage:{default:""},hideDetails:{type:Boolean,default:!1}},emits:["complete","change","update:focusIndex","update:modelValue"],setup(e,{expose:t,emit:n}){const a=e,{t:o}=nt(),s={validateRule:r=>!!r,errorMessage:()=>a.requiredErrorMessage||o("ds.global.field_required")},i=w(0),c=w([]),d=w(null),f=r=>{u.value=r},O=()=>{u.value=-1},g=I(()=>a.inputId||`id-${at()}`),p=I({get(){return a.modelValue.split("")},set(r){n("update:modelValue",r.join(""))}}),x=I(()=>a.modelValue),u=I({get(){return a.focusIndex!==void 0?a.focusIndex:i.value},set(r){a.focusIndex!==void 0?n("update:focusIndex",r):i.value=r}}),m=I(()=>{let r=[];return a.required&&r.push(s),a.validationRules&&(r=r.concat(a.validationRules)),r.length?r:void 0}),h=I(()=>[a.disabled?"ds-cursor-not-allowed ds-bg-[#f2f2f2] ds-text-black/[0.4]":"ds-text-black/[0.85]",X.value.valid?"ds-border-black/[0.1] focus:ds-border-focus focus:ds-ring-1 focus:ds-ring-focus":"ds-border-error focus:ds-ring-1 focus:ds-ring-error",a.inputCssClass]),{validate:v,validationResult:X}=tt(g.value,x,m.value),Le=()=>{d.value[u.value].focus()},Z=()=>p.value.join("").length===a.numInputs?n("complete",p.value.join("")):"Wait until the user enters the required number of characters",M=r=>{u.value=Math.max(Math.min(a.numInputs-1,r),0)},J=()=>{M(u.value+1)},Q=()=>{M(u.value-1)},q=r=>{c.value=[...p.value],p.value[u.value]=r,p.value=Fa(p.value);const C=c.value.join(""),F=p.value.join("");C!==F&&(n("change",F),Z())},Re=r=>{r.preventDefault();const C=r.clipboardData.getData("text/plain").slice(0,a.numInputs-u.value).split("");if(!C.join("").match(/^\d+$/))return"Invalid pasted data";const b=p.value.slice(0,u.value).concat(C);return b.slice(0,a.numInputs).forEach((k,ze)=>{p.value[ze]=k}),M(b.slice(0,a.numInputs).length),n("update:modelValue",p.value.join("")),Z()},Ue=r=>{q(r),J()},Ne=r=>{switch(r.key){case"Backspace":r.preventDefault(),q(""),Q();break;case"Delete":r.preventDefault(),q("");break;case"ArrowLeft":r.preventDefault(),Q();break;case"ArrowRight":r.preventDefault(),J();break}},Ke=()=>{v()};return t({validate:v,focus:Le}),(r,C)=>($(),R("div",null,[Ye("div",Da,[($(!0),R(Xe,null,Ze(r.numInputs,(F,b)=>($(),ee(qe,{key:b,ref_for:!0,ref_key:"boxRefs",ref:d,class:ke(h.value),focus:u.value===b,"is-disabled":r.disabled,value:p.value[b],onOnChange:Ue,onOnKeydown:Ne,onOnKeyup:Ke,onOnPaste:Re,onOnFocus:k=>f(b),onOnBlur:O},null,8,["class","focus","is-disabled","value","onOnFocus"]))),128))]),r.hideDetails?Qe("",!0):($(),ee(et,{key:0,"error-message":Je(X).errorMessage(),class:"ds-mt-1"},null,8,["error-message"]))]))}});Y.__docgenInfo={exportName:"default",displayName:"BOtpField",description:"",tags:{},expose:[{name:"validate"},{name:"focus"}],props:[{name:"inputId",required:!1,type:{name:"string"},defaultValue:{func:!1,value:"''"}},{name:"modelValue",required:!1,type:{name:"string"},defaultValue:{func:!1,value:"''"}},{name:"numInputs",description:"Number of input boxes.",required:!1,type:{name:"number"},defaultValue:{func:!1,value:"6"}},{name:"focusIndex",description:"Index of input box to be focused.",required:!1,type:{name:"number"},defaultValue:{func:!1,value:"undefined"}},{name:"disabled",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"inputCssClass",required:!1,type:{name:"union",elements:[{name:"string"},{name:"{}"}]},defaultValue:{func:!1,value:"''"}},{name:"validationRules",description:"Array of custom validation rules.",required:!1,type:{name:"Array",elements:[{name:"ValidationRule"}]},defaultValue:{func:!1,value:"undefined"}},{name:"required",description:"Validate if the field is left empty.",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"requiredErrorMessage",required:!1,type:{name:"string"},defaultValue:{func:!1,value:"''"}},{name:"hideDetails",description:"Hide the validation error message.",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"false"}}],events:[{name:"complete",type:{names:["string"]},description:"OTP is completed, param: <code>value: string</code>",properties:[{type:{names:["mixed"]},description:"e"},{type:{names:["mixed"]},name:"value"}],tags:[{title:"param",type:{name:"mixed"},description:"e"},{title:"param",type:{name:"mixed"},name:"value"}]},{name:"change",type:{names:["string"]},description:"OTP is changed, param: <code>value: string</code>",properties:[{type:{names:["mixed"]},description:"e"},{type:{names:["mixed"]},name:"value"}],tags:[{title:"param",type:{name:"mixed"},description:"e"},{title:"param",type:{name:"mixed"},name:"value"}]},{name:"update:focusIndex",type:{names:["number"]},description:"Update focus index, param: <code>index: number</code>",properties:[{type:{names:["mixed"]},description:"e"},{type:{names:["mixed"]},name:"index"}],tags:[{title:"param",type:{name:"mixed"},description:"e"},{title:"param",type:{name:"mixed"},name:"index"}]},{name:"update:modelValue",type:{names:["string"]},description:"Update value, param: <code>value: string</code>",properties:[{type:{names:["mixed"]},description:"e"},{type:{names:["mixed"]},name:"value"}],tags:[{title:"param",type:{name:"mixed"},description:"e"},{title:"param",type:{name:"mixed"},name:"value"}]}],sourceFiles:["/home/runner/work/design-system/design-system/src/components/BOtpField/BOtpField.vue"]};const Ra={title:"Components/OtpField",parameters:{docs:{description:{component:"The <code>BOtpField</code> is used for inputting OTP."}}},component:Y,tags:["autodocs"],args:{inputId:"",numInputs:6,focusIndex:void 0,disabled:!1,inputCssClass:"",validationRules:void 0,required:!1,requiredErrorMessage:"",hideDetails:!1}},B={render:e=>({components:{BOtpField:Y},setup(){const t=w("");return L(()=>e.numInputs,n=>{t.value=t.value.substring(0,n)}),{args:e,otp:t}},template:`
      <BOtpField v-bind="args"  v-model="otp" />
    `}),args:{modelValue:""}};var fe,me,he;B.parameters={...B.parameters,docs:{...(fe=B.parameters)==null?void 0:fe.docs,source:{originalSource:`{
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
}`,...(he=(me=B.parameters)==null?void 0:me.docs)==null?void 0:he.source}}};const Ua=["Default"];export{B as Default,Ua as __namedExportsOrder,Ra as default};
