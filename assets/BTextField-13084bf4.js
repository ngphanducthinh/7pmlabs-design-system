import{j as A,b as F,k as d,o as t,d as f,q as H,l as u,w as c,y as b,n as m,m as v,z as M,A as D,s as E,u as K}from"./vue.esm-bundler-d836205b.js";import{u as N}from"./Validation-68c07edf.js";import{u as $}from"./vue-i18n.esm-bundler-b6b8dfca.js";import{_ as z}from"./BErrorMessage-3ca20143.js";import{_ as P}from"./BLabel-04f8c997.js";import{v as S}from"./v4-a960c1f4.js";const T={class:"ds-relative"},U={key:0,class:"ds-absolute ds-left-3 ds-top-0 ds-z-[1] ds-flex ds-h-full ds-cursor-pointer ds-items-center hover:ds-text-primary-t"},j=["id"],G=["id","autocomplete","disabled","inputmode","placeholder","readonly","type","onKeyup"],J={key:1,class:"ds-absolute ds-right-3 ds-top-0 ds-z-[1] ds-flex ds-h-full ds-cursor-pointer ds-items-center hover:ds-text-primary-t"},L=["id"],O=A({__name:"BTextField",props:{inputId:{default:""},inputCssClass:{default:""},validationRules:{default:void 0},modelValue:{},label:{default:""},prependIcon:{default:""},hidePrependIcon:{type:Boolean,default:!1},appendIcon:{default:""},hideAppendIcon:{type:Boolean,default:!1},placeholder:{default:""},autocomplete:{type:Boolean,default:!1},disabled:{type:Boolean,default:!1},readonly:{type:Boolean,default:!1},type:{default:"text"},required:{type:Boolean,default:!1},requiredErrorMessage:{default:""},hideDetails:{type:Boolean,default:!1},inputHandler:{default:void 0},inputmode:{default:"text"}},emits:["focus","blur","click:prepend","click:append","press:enter","update:modelValue"],setup(h,{expose:g,emit:l}){const a=h,{t:q}=$(),o=F(null),V={validateRule:e=>typeof e=="number"?!!e:!!(e&&(e!=null&&e.trim())),errorMessage:()=>a.requiredErrorMessage||q("ds.global.field_required")},n=d(()=>a.inputId||`id-${S()}`),r=d({get(){return a.modelValue},set(e){l("update:modelValue",e)}}),I=d(()=>[{"ds-pl-9":a.prependIcon,"ds-pr-9":a.appendIcon,"ds-cursor-not-allowed ds-bg-[#f2f2f2] ds-text-black/[0.4]":a.disabled,"ds-text-black/[0.85]":!a.disabled,"ds-border-error focus:ds-ring-1 focus:ds-ring-error":!i.value.valid,"ds-border-black/[0.1] focus:ds-border-focus focus:ds-ring-1 focus:ds-ring-focus":i.value.valid},a.inputCssClass]),k=d(()=>{let e=[];return a.required&&e.push(V),a.validationRules&&(e=e.concat(a.validationRules)),e.length?e:void 0}),{validate:y,validationResult:i}=N(n.value,r,k.value),B=()=>{l("click:prepend")},C=()=>{l("click:append")},_=()=>{l("press:enter")},x=()=>{l("focus")},R=()=>{l("blur")},w=()=>{y()};return g({validate:y,focus:()=>{var e;(e=o.value)==null||e.focus()},blur:()=>{var e;(e=o.value)==null||e.blur()}}),(e,s)=>(t(),f("div",null,[H(P,{id:n.value,label:e.label,required:e.required},null,8,["id","label","required"]),u("div",T,[e.prependIcon?c((t(),f("div",U,[u("span",{id:`${n.value}prependIcon`,class:m(e.prependIcon),onClick:B},null,10,j)],512)),[[b,!e.hidePrependIcon]]):v("",!0),c(u("input",{id:n.value,ref_key:"inputRef",ref:o,"onUpdate:modelValue":s[0]||(s[0]=p=>r.value=p),autocomplete:a.autocomplete?"on":"off",class:m([I.value,"ds-block ds-h-[40px] ds-w-full ds-rounded-lg ds-border ds-px-3 ds-text-sm ds-drop-shadow-light"]),disabled:a.disabled,inputmode:a.inputmode,placeholder:a.placeholder,readonly:a.readonly,type:a.type,onBlur:R,onFocus:x,onInput:s[1]||(s[1]=(...p)=>e.inputHandler&&e.inputHandler(...p)),onKeyup:[w,D(_,["enter"])]},null,42,G),[[M,r.value]]),e.appendIcon?c((t(),f("div",J,[u("span",{id:`${n.value}appendIcon`,class:m(e.appendIcon),onClick:C},null,10,L)],512)),[[b,!e.hideAppendIcon]]):v("",!0)]),e.hideDetails?v("",!0):(t(),E(z,{key:0,"error-message":K(i).errorMessage(),class:"ds-mt-1"},null,8,["error-message"]))]))}});O.__docgenInfo={exportName:"default",displayName:"BTextField",description:"",tags:{},expose:[{name:"validate"},{name:"focus"},{name:"blur"}],props:[{name:"inputId",required:!1,type:{name:"string"},defaultValue:{func:!1,value:"''"}},{name:"inputCssClass",required:!1,type:{name:"string"},defaultValue:{func:!1,value:"''"}},{name:"validationRules",description:"Array of custom validation rules.",required:!1,type:{name:"Array",elements:[{name:"ValidationRule"}]},defaultValue:{func:!1,value:"undefined"}},{name:"modelValue",required:!0,type:{name:"union",elements:[{name:"string"},{name:"number"}]}},{name:"label",required:!1,type:{name:"string"},defaultValue:{func:!1,value:"''"}},{name:"prependIcon",description:"FontAwesome v6.1.0 - Solid.",required:!1,type:{name:"string"},defaultValue:{func:!1,value:"''"}},{name:"hidePrependIcon",description:"Hide prepended icon.",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"appendIcon",description:"FontAwesome v6.1.0 - Solid.",required:!1,type:{name:"string"},defaultValue:{func:!1,value:"''"}},{name:"hideAppendIcon",description:"Hide appended icon.",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"placeholder",required:!1,type:{name:"string"},defaultValue:{func:!1,value:"''"}},{name:"autocomplete",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"disabled",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"readonly",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"type",required:!1,type:{name:"string"},defaultValue:{func:!1,value:"'text'"}},{name:"required",description:"Validate if the field is left empty.",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"requiredErrorMessage",required:!1,type:{name:"string"},defaultValue:{func:!1,value:"''"}},{name:"hideDetails",description:"Hide the validation error message.",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"inputHandler",description:"Function is executed on input event.",required:!1,type:{name:"any"},defaultValue:{func:!1,value:"undefined"}},{name:"inputmode",required:!1,type:{name:"union",elements:[{name:'"none"'},{name:'"text"'},{name:'"tel"'},{name:'"url"'},{name:'"email"'},{name:'"numeric"'},{name:'"decimal"'},{name:'"search"'}]},defaultValue:{func:!1,value:"'text'"}}],sourceFiles:["/home/runner/work/design-system/design-system/src/components/BTextField.vue"]};export{O as _};
//# sourceMappingURL=BTextField-13084bf4.js.map
