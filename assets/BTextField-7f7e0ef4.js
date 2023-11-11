import{j as w,b as P,k as n,o as u,d as p,q as K,l as o,w as c,y as b,n as m,m as v,z as M,A,s as D,u as E}from"./vue.esm-bundler-f0a4de28.js";import{u as N}from"./Validation-4b68e7d0.js";import{u as $}from"./vue-i18n.esm-bundler-45575b10.js";import{_ as z}from"./BErrorMessage-8f74158f.js";import{_ as T}from"./BLabel-29da189d.js";import{v as U}from"./v4-a960c1f4.js";const j={class:"ds-relative"},S={key:0,class:"ds-absolute ds-left-3 ds-top-0 ds-z-[1] ds-flex ds-h-full ds-cursor-pointer ds-items-center hover:ds-text-primary-t"},G=["id"],H=["id","autocomplete","disabled","inputmode","placeholder","readonly","type","onKeyup"],J={key:1,class:"ds-absolute ds-right-3 ds-top-0 ds-z-[1] ds-flex ds-h-full ds-cursor-pointer ds-items-center hover:ds-text-primary-t"},L=["id"],O=w({__name:"BTextField",props:{inputId:{default:""},inputCssClass:{default:""},validationRules:{default:void 0},modelValue:{},label:{default:""},prependIcon:{default:""},hidePrependIcon:{type:Boolean,default:!1},appendIcon:{default:""},hideAppendIcon:{type:Boolean,default:!1},placeholder:{default:""},autocomplete:{type:Boolean,default:!1},disabled:{type:Boolean,default:!1},readonly:{type:Boolean,default:!1},type:{default:"text"},required:{type:Boolean,default:!1},requiredErrorMessage:{default:""},hideDetails:{type:Boolean,default:!1},keyPressFn:{default:void 0},inputmode:{default:"text"}},emits:["click:prepend","click:append","press:enter","focus","blur","update:modelValue"],setup(h,{expose:V,emit:l}){const a=h,{t:k}=$(),t=P(null),I={validateRule:e=>typeof e=="number"?!!e:!!(e&&(e!=null&&e.trim())),errorMessage:()=>a.requiredErrorMessage||k("ds.global.field_required")},s=n(()=>a.inputId||`id-${U()}`),r=n({get(){return a.modelValue},set(e){l("update:modelValue",e)}}),g=n(()=>[{"ds-pl-9":a.prependIcon,"ds-pr-9":a.appendIcon,"ds-cursor-not-allowed ds-bg-[#f2f2f2] ds-text-black/[0.4]":a.disabled,"ds-text-black/[0.85]":!a.disabled,"ds-border-error focus:ds-ring-1 focus:ds-ring-error":!i.value.valid,"ds-border-black/[0.1] focus:ds-border-focus focus:ds-ring-1 focus:ds-ring-focus":i.value.valid},a.inputCssClass]),B=n(()=>{let e=[];return a.required&&e.push(I),a.validationRules&&(e=e.concat(a.validationRules)),e.length?e:void 0}),{validate:y,validationResult:i}=N(s.value,r,B.value),C=()=>{l("click:prepend")},_=()=>{l("click:append")},q=()=>{l("press:enter")},x=()=>{l("focus")},F=()=>{l("blur")},R=()=>{y()};return V({validate:y,focus:()=>{var e;(e=t.value)==null||e.focus()},blur:()=>{var e;(e=t.value)==null||e.blur()}}),(e,d)=>(u(),p("div",null,[K(T,{id:s.value,label:e.label,required:e.required},null,8,["id","label","required"]),o("div",j,[e.prependIcon?c((u(),p("div",S,[o("span",{id:`${s.value}prependIcon`,class:m(e.prependIcon),onClick:C},null,10,G)],512)),[[b,!e.hidePrependIcon]]):v("",!0),c(o("input",{id:s.value,ref_key:"inputRef",ref:t,"onUpdate:modelValue":d[0]||(d[0]=f=>r.value=f),autocomplete:a.autocomplete?"on":"off",class:m([g.value,"ds-block ds-h-[40px] ds-w-full ds-rounded-lg ds-border ds-px-3 ds-text-sm ds-drop-shadow-light"]),disabled:a.disabled,inputmode:a.inputmode,placeholder:a.placeholder,readonly:a.readonly,type:a.type,onBlur:F,onFocus:x,onKeypress:d[1]||(d[1]=(...f)=>e.keyPressFn&&e.keyPressFn(...f)),onKeyup:[R,A(q,["enter"])]},null,42,H),[[M,r.value]]),e.appendIcon?c((u(),p("div",J,[o("span",{id:`${s.value}appendIcon`,class:m(e.appendIcon),onClick:_},null,10,L)],512)),[[b,!e.hideAppendIcon]]):v("",!0)]),e.hideDetails?v("",!0):(u(),D(z,{key:0,"error-message":E(i).errorMessage(),class:"ds-mt-1"},null,8,["error-message"]))]))}});O.__docgenInfo={exportName:"default",displayName:"BTextField",description:"",tags:{},expose:[{name:"validate"},{name:"focus"},{name:"blur"}],props:[{name:"inputId",defaultValue:{func:!1,value:"''"}},{name:"inputCssClass",defaultValue:{func:!1,value:"''"}},{name:"validationRules",defaultValue:{func:!1,value:"undefined"}},{name:"label",defaultValue:{func:!1,value:"''"}},{name:"prependIcon",defaultValue:{func:!1,value:"''"}},{name:"hidePrependIcon",defaultValue:{func:!1,value:"false"}},{name:"appendIcon",defaultValue:{func:!1,value:"''"}},{name:"hideAppendIcon",defaultValue:{func:!1,value:"false"}},{name:"placeholder",defaultValue:{func:!1,value:"''"}},{name:"autocomplete",defaultValue:{func:!1,value:"false"}},{name:"disabled",defaultValue:{func:!1,value:"false"}},{name:"readonly",defaultValue:{func:!1,value:"false"}},{name:"type",defaultValue:{func:!1,value:"'text'"}},{name:"required",defaultValue:{func:!1,value:"false"}},{name:"requiredErrorMessage",defaultValue:{func:!1,value:"''"}},{name:"hideDetails",defaultValue:{func:!1,value:"false"}},{name:"keyPressFn",defaultValue:{func:!1,value:"undefined"}},{name:"inputmode",defaultValue:{func:!1,value:"'text'"}}],events:[{name:"click:prepend"},{name:"click:append"},{name:"press:enter"},{name:"focus"},{name:"blur"},{name:"update:modelValue"}],sourceFiles:["/home/runner/work/design-system/design-system/src/components/BTextField.vue"]};export{O as _};
//# sourceMappingURL=BTextField-7f7e0ef4.js.map
