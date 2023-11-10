import{j as y,k as s,d as o,w as h,K as k,l as r,n,e as C,m as _,o as i,x as V,t as g}from"./vue.esm-bundler-f0a4de28.js";import{B as d}from"./Enums-fb1fa8e1.js";import{v as x}from"./v4-a960c1f4.js";import{_ as B}from"./_plugin-vue_export-helper-c27b6911.js";const q=["id","value","disabled"],z=["for"],S=["for"],I=`
  peer-checked:ds-text-transparent peer-checked:ds-bg-gradient-to-r peer-checked:ds-from-primary-f-stop peer-checked:ds-from-primary-f peer-checked:ds-to-primary-t
  peer-checked:after:ds-opacity-100
`,m=y({__name:"BCheckbox",props:{inputId:{default:""},inputCssClass:{default:""},modelValue:{type:[Boolean,Array],default:!1},label:{default:""},labelOrphan:{type:Boolean,default:!1},disabled:{type:Boolean,default:!1},size:{default:d.Medium}},emits:["update:modelValue"],setup(c,{emit:p}){const a=c,l=s(()=>a.inputId||`id-${x()}`),t=s({get(){return a.modelValue},set(e){p("update:modelValue",e)}}),f=s(()=>{let e="";switch(a.size){case d.Small:e+="size-sm ";break;case d.Medium:default:e+=" ";break}return e}),b=s(()=>[a.inputCssClass,{"ds-cursor-not-allowed":a.disabled}]);return(e,u)=>(i(),o("div",{class:n(["b-checkbox ds-flex ds-items-center",f.value])},[h(r("input",{id:l.value,"onUpdate:modelValue":u[0]||(u[0]=v=>t.value=v),type:"checkbox",class:n(["ds-peer ds-invisible",b.value]),value:e.$attrs.value||t.value,disabled:e.disabled},null,10,q),[[k,t.value]]),r("label",{for:l.value,class:n(["input-label",I])},null,8,z),e.label||e.$slots.default?(i(),o("label",{key:0,for:e.labelOrphan?void 0:l.value,class:"ds-ml-2 ds-text-sm ds-font-medium ds-text-gray-900"},[C(e.$slots,"default",{},()=>[V(g(a.label),1)],!0)],8,S)):_("",!0)],2))}});const D=B(m,[["__scopeId","data-v-99a307cd"]]);m.__docgenInfo={exportName:"default",displayName:"BCheckbox",description:"",tags:{},props:[{name:"inputId",required:!1,type:{name:"string"},defaultValue:{func:!1,value:"''"}},{name:"inputCssClass",required:!1,type:{name:"string"},defaultValue:{func:!1,value:"''"}},{name:"modelValue",required:!1,type:{name:"union",elements:[{name:"boolean"},{name:"Array",elements:[{name:"union",elements:[{name:"string"},{name:"number"}]}]}]},defaultValue:{func:!1,value:"false"}},{name:"label",required:!1,type:{name:"string"},defaultValue:{func:!1,value:"''"}},{name:"labelOrphan",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"disabled",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"size",required:!1,type:{name:"TSLiteralType"},defaultValue:{func:!1,value:"BCheckboxSize.Medium"}}],events:[{name:"update:modelValue"}],slots:[{name:"default"}],sourceFiles:["/Users/thinhnguyen/Documents/Projects/7pmlabs/design-system/src/components/BCheckbox.vue"]};export{D as B};
//# sourceMappingURL=BCheckbox-e32b179c.js.map
