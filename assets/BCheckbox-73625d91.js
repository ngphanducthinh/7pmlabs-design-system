import{j as b,k as s,b as d,w as v,H as y,l as u,d as h,m as _,n as k,o as r,q as x,t as V}from"./vue.esm-bundler-e1583b10.js";import{b as t}from"./Enums-5b02df9b.js";import{v as g}from"./v4-a960c1f4.js";import{_ as B}from"./_plugin-vue_export-helper-c27b6911.js";const C=["id","disabled","value"],q=["for"],z=["for"],m=b({__name:"BCheckbox",props:{inputId:{default:""},modelValue:{type:[Boolean,Array],default:!1},label:{default:""},labelOrphan:{type:Boolean,default:!1},disabled:{type:Boolean,default:!1},size:{default:t.Medium}},emits:["update:modelValue"],setup(i,{emit:c}){const a=i,l=s(()=>a.inputId||`id-${g()}`),n=s({get(){return a.modelValue},set(e){c("update:modelValue",e)}}),p=s(()=>{let e="";switch(a.size){case t.Small:e+="size-sm ";break;case t.Medium:default:e+=" ";break}return e});return(e,o)=>(r(),d("div",{class:k([p.value,"b-checkbox ds-flex ds-items-center"])},[v(u("input",{id:l.value,"onUpdate:modelValue":o[0]||(o[0]=f=>n.value=f),disabled:e.disabled,value:e.$attrs.value,type:"checkbox",class:"b-checkbox__input"},null,8,C),[[y,n.value]]),u("label",{for:l.value,class:"b-checkbox__input-label ds-border ds-border-black/[0.1] ds-drop-shadow-light"},null,8,q),e.label||e.$slots.default?(r(),d("label",{key:0,for:e.labelOrphan?void 0:l.value,class:"ds-ml-2 ds-text-sm ds-font-medium ds-text-gray-900"},[h(e.$slots,"default",{},()=>[x(V(a.label),1)],!0)],8,z)):_("",!0)],2))}});const A=B(m,[["__scopeId","data-v-2082b68c"]]);m.__docgenInfo={exportName:"default",displayName:"BCheckbox",description:"",tags:{},props:[{name:"inputId",required:!1,type:{name:"string"},defaultValue:{func:!1,value:"''"}},{name:"modelValue",required:!0,type:{name:"union",elements:[{name:"boolean"},{name:"Array",elements:[{name:"union",elements:[{name:"string"},{name:"number"}]}]}]},defaultValue:{func:!1,value:"false"}},{name:"label",required:!1,type:{name:"string"},defaultValue:{func:!1,value:"''"}},{name:"labelOrphan",description:"Clicking on label will not check on checkbox.",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"disabled",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"size",required:!1,type:{name:"TSLiteralType"},defaultValue:{func:!1,value:"BCheckboxSize.Medium"}}],events:[{name:"update:modelValue",type:{names:["union"],elements:[{name:"boolean"},{name:"Array",elements:[{name:"union",elements:[{name:"string"},{name:"number"}]}]}]},description:"Update value, param: <code>value: boolean | Array<string | number></code>",properties:[{type:{names:["mixed"]},description:"e"},{type:{names:["mixed"]},name:"value"}],tags:[{title:"param",type:{name:"mixed"},description:"e"},{title:"param",type:{name:"mixed"},name:"value"}]}],slots:[{name:"default"}],sourceFiles:["/home/runner/work/design-system/design-system/src/components/BCheckbox.vue"]};export{A as B};