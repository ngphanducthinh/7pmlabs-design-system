import{j as C,e as R,k as l,o as n,b as p,s as F,l as c,d as y,m,w,J as T,n as $,K as D,x as K,u as M}from"./vue.esm-bundler-29df2e62.js";import{u as E}from"./Validation-5669da51.js";import{u as H}from"./vue-i18n.esm-bundler-152c8982.js";import{_ as N}from"./BErrorMessage-f3a23431.js";import{_ as U}from"./BLabel-57c6859e.js";import{v as z}from"./v4-a960c1f4.js";import{_ as A}from"./_plugin-vue_export-helper-c27b6911.js";const j={class:"b-text-field"},J={class:"ds-relative"},S={key:0,class:"b-text-field__prepend-icon ds-absolute ds-left-3 ds-top-0 ds-z-[1] ds-flex ds-h-full ds-cursor-pointer ds-items-center hover:ds-text-primary-t"},G=["id","autocomplete","disabled","inputmode","placeholder","readonly","type","onKeyup"],L={key:1,class:"b-text-field__append-icon ds-absolute ds-right-3 ds-top-0 ds-z-[1] ds-flex ds-h-full ds-cursor-pointer ds-items-center hover:ds-text-primary-t"},v=C({__name:"BTextField",props:{inputId:{default:""},inputCssClass:{default:""},validationRules:{default:void 0},modelValue:{},label:{default:""},placeholder:{default:""},autocomplete:{type:Boolean,default:!1},disabled:{type:Boolean,default:!1},readonly:{type:Boolean,default:!1},type:{default:"text"},required:{type:Boolean,default:!1},requiredErrorMessage:{default:""},hideDetails:{type:Boolean,default:!1},inputHandler:{default:void 0},inputmode:{default:"text"}},emits:["focus","blur","press:enter","update:modelValue"],setup(b,{expose:g,emit:s}){const a=b,{t:x}=H(),d=R(null),_={validateRule:e=>typeof e=="number"?!!e:!!(e&&(e!=null&&e.trim())),errorMessage:()=>a.requiredErrorMessage||x("ds.global.field_required")},r=l(()=>a.inputId||`id-${z()}`),o=l({get(){return a.modelValue},set(e){s("update:modelValue",e)}}),V=l(()=>[{"ds-cursor-not-allowed ds-bg-[#f2f2f2] ds-text-black/[0.4]":a.disabled,"ds-text-black/[0.85]":!a.disabled,"ds-border-error focus:ds-ring-1 focus:ds-ring-error":!u.value.valid,"ds-border-black/[0.1] focus:ds-border-focus focus:ds-ring-1 focus:ds-ring-focus":u.value.valid},a.inputCssClass]),h=l(()=>{let e=[];return a.required&&e.push(_),a.validationRules&&(e=e.concat(a.validationRules)),e.length?e:void 0}),{validate:f,validationResult:u}=E(r.value,o,h.value),q=()=>{s("press:enter")},B=()=>{s("focus")},k=()=>{s("blur")},I=()=>{f()};return g({validate:f,focus:()=>{var e;(e=d.value)==null||e.focus()},blur:()=>{var e;(e=d.value)==null||e.blur()}}),(e,t)=>(n(),p("div",j,[F(U,{id:r.value,label:e.label,required:e.required},null,8,["id","label","required"]),c("div",J,[e.$slots.prependIcon?(n(),p("div",S,[y(e.$slots,"prependIcon",{},void 0,!0)])):m("",!0),w(c("input",{id:r.value,ref_key:"inputRef",ref:d,"onUpdate:modelValue":t[0]||(t[0]=i=>o.value=i),autocomplete:a.autocomplete?"on":"off",disabled:a.disabled,inputmode:a.inputmode,placeholder:a.placeholder,readonly:a.readonly,type:a.type,class:$([[V.value],"ds-block ds-h-[40px] ds-w-full ds-rounded-lg ds-border ds-px-3 ds-text-sm ds-drop-shadow-light"]),onBlur:k,onFocus:B,onInput:t[1]||(t[1]=(...i)=>e.inputHandler&&e.inputHandler(...i)),onKeyup:[I,D(q,["enter"])]},null,42,G),[[T,o.value]]),e.$slots.appendIcon?(n(),p("div",L,[y(e.$slots,"appendIcon",{},void 0,!0)])):m("",!0)]),e.hideDetails?m("",!0):(n(),K(N,{key:0,"error-message":M(u).errorMessage(),class:"ds-mt-1"},null,8,["error-message"]))]))}});const se=A(v,[["__scopeId","data-v-9c6e89e6"]]);v.__docgenInfo={exportName:"default",displayName:"BTextField",description:"",tags:{},expose:[{name:"validate"},{name:"focus"},{name:"blur"}],props:[{name:"inputId",description:"ID of input element",required:!1,type:{name:"string"},defaultValue:{func:!1,value:"''"}},{name:"inputCssClass",required:!1,type:{name:"string"},defaultValue:{func:!1,value:"''"}},{name:"validationRules",description:"Array of custom validation rules.",required:!1,type:{name:"Array",elements:[{name:"ValidationRule"}]},defaultValue:{func:!1,value:"undefined"}},{name:"modelValue",required:!0,type:{name:"union",elements:[{name:"string"},{name:"number"}]}},{name:"label",required:!1,type:{name:"string"},defaultValue:{func:!1,value:"''"}},{name:"placeholder",required:!1,type:{name:"string"},defaultValue:{func:!1,value:"''"}},{name:"autocomplete",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"disabled",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"readonly",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"type",required:!1,type:{name:"string"},defaultValue:{func:!1,value:"'text'"}},{name:"required",description:"Validate if the field is left empty.",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"requiredErrorMessage",required:!1,type:{name:"string"},defaultValue:{func:!1,value:"''"}},{name:"hideDetails",description:"Hide the validation error message.",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"inputHandler",description:"Function is executed on input event.",required:!1,type:{name:"any"},defaultValue:{func:!1,value:"undefined"}},{name:"inputmode",description:"Value of input element's inputmode",required:!1,type:{name:"union",elements:[{name:'"none"'},{name:'"text"'},{name:'"tel"'},{name:'"url"'},{name:'"email"'},{name:'"numeric"'},{name:'"decimal"'},{name:'"search"'}]},defaultValue:{func:!1,value:"'text'"}}],events:[{name:"focus",description:"Text field is focused",properties:[{type:{names:["mixed"]},description:"e"}],tags:[{title:"param",type:{name:"mixed"},description:"e"}]},{name:"blur",description:"Text field lost focus",properties:[{type:{names:["mixed"]},description:"e"}],tags:[{title:"param",type:{name:"mixed"},description:"e"}]},{name:"press:enter",description:'User presses "enter" key',properties:[{type:{names:["mixed"]},description:"e"}],tags:[{title:"param",type:{name:"mixed"},description:"e"}]},{name:"update:modelValue",type:{names:["union"],elements:[{name:"string"},{name:"number"}]},description:"Update value",properties:[{type:{names:["mixed"]},description:"e"},{type:{names:["mixed"]},name:"value"}],tags:[{title:"param",type:{name:"mixed"},description:"e"},{title:"param",type:{name:"mixed"},name:"value"}]}],slots:[{name:"prependIcon"},{name:"appendIcon"}],sourceFiles:["/home/runner/work/design-system/design-system/src/components/BTextField.vue"]};export{se as B};
