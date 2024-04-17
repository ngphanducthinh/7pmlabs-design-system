import{d as b,e as l,o as u,c as V,j as q,w as h,v as x,g as _,n as w,k as B,u as C,f as k}from"./vue.esm-bundler-91340787.js";import{u as R}from"./Validation-27d7dd5e.js";import{u as M}from"./vue-i18n-16525cc0.js";import{_ as N}from"./BErrorMessage-a6c8362f.js";import{_ as I}from"./BLabel-c8f5ffc2.js";import{v as D}from"./v4-4a60fe23.js";const E=["id","autocomplete","disabled","placeholder","readonly","rows"],T=b({__name:"BTextarea",props:{inputId:{default:""},inputCssClass:{default:""},modelValue:{},validationRules:{default:void 0},label:{default:""},placeholder:{default:""},autocomplete:{type:Boolean,default:!1},disabled:{type:Boolean,default:!1},readonly:{type:Boolean,default:!1},rows:{default:3},required:{type:Boolean,default:!1},requiredErrorMessage:{default:""},hideDetails:{type:Boolean,default:!1}},emits:["update:modelValue"],setup(o,{expose:n,emit:i}){const a=o,f=i,{t:m}=M(),p={validateRule:e=>typeof e=="number"?!!e:!!(e&&(e!=null&&e.trim())),errorMessage:()=>a.requiredErrorMessage||m("ds.global.field_required")},s=l(()=>a.inputId||`id-${D()}`),r=l({get(){return a.modelValue},set(e){f("update:modelValue",e)}}),c=l(()=>[{"ds-cursor-not-allowed ds-bg-[#f2f2f2] ds-text-black/40":a.disabled,"ds-text-black/[0.85]":!a.disabled,"ds-border-error focus:ds-ring-1 focus:ds-ring-error":!t.value.valid,"ds-border-black/[0.1] focus:ds-border-focus focus:ds-ring-1 focus:ds-ring-focus":t.value.valid},a.inputCssClass]),v=l(()=>{let e=[];return a.required&&e.push(p),a.validationRules&&(e=e.concat(a.validationRules)),e.length?e:void 0}),{validate:y,validationResult:t}=R(s.value,r,v.value);return n({validate:y}),(e,d)=>(u(),V("div",null,[q(I,{id:s.value,label:e.label,required:e.required},null,8,["id","label","required"]),h(_("textarea",{id:s.value,"onUpdate:modelValue":d[0]||(d[0]=g=>r.value=g),autocomplete:a.autocomplete?"on":"off",class:w([c.value,"ds-block ds-w-full ds-rounded-lg ds-border ds-px-3 ds-py-1 ds-text-sm ds-drop-shadow-light"]),disabled:a.disabled,placeholder:a.placeholder,readonly:a.readonly,rows:a.rows},null,10,E),[[x,r.value]]),e.hideDetails?k("",!0):(u(),B(N,{key:0,"error-message":C(t).errorMessage(),class:"ds-mt-1"},null,8,["error-message"]))]))}});T.__docgenInfo={exportName:"default",displayName:"BTextarea",description:"",tags:{},expose:[{name:"validate"}],props:[{name:"inputId",required:!1,type:{name:"string"},defaultValue:{func:!1,value:"''"}},{name:"inputCssClass",required:!1,type:{name:"string"},defaultValue:{func:!1,value:"''"}},{name:"modelValue",required:!0,type:{name:"string"}},{name:"validationRules",description:"Array of custom validation rules.",required:!1,type:{name:"Array",elements:[{name:"ValidationRule"}]},defaultValue:{func:!1,value:"undefined"}},{name:"label",required:!1,type:{name:"string"},defaultValue:{func:!1,value:"''"}},{name:"placeholder",required:!1,type:{name:"string"},defaultValue:{func:!1,value:"''"}},{name:"autocomplete",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"disabled",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"readonly",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"rows",description:"Number of rows.",required:!1,type:{name:"number"},defaultValue:{func:!1,value:"3"}},{name:"required",description:"Validate if the field is left empty.",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"requiredErrorMessage",required:!1,type:{name:"string"},defaultValue:{func:!1,value:"''"}},{name:"hideDetails",description:"Hide the validation error message.",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"false"}}],events:[{name:"update:modelValue",type:{names:["string"]},description:"Update value, param: <code>value: string</code>",properties:[{type:{names:["mixed"]},description:"e"},{type:{names:["mixed"]},name:"value"}],tags:[{title:"param",type:{name:"mixed"},description:"e"},{title:"param",type:{name:"mixed"},name:"value"}]}],sourceFiles:["/home/runner/work/design-system/design-system/src/components/BTextarea.vue"]};export{T as _};
