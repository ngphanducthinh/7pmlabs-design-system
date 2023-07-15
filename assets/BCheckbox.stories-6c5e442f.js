import{d as S,a as t,b as m,w as z,v as M,e as p,n as u,g as q,f as w,o as f,i as I,j as N}from"./vue.esm-bundler-6fb7cc6f.js";import{b as a}from"./Enums-fae195b3.js";import{v as O}from"./v4-a960c1f4.js";import{_ as T}from"./_plugin-vue_export-helper-c27b6911.js";const $=["id","value","disabled"],j=["for"],D=["for"],L=`
  peer-checked:ds-text-transparent peer-checked:ds-bg-gradient-to-r peer-checked:ds-from-primary-f-stop peer-checked:ds-from-primary-f peer-checked:ds-to-primary-t
  peer-checked:after:ds-opacity-100
`,y=S({__name:"BCheckbox",props:{inputId:{default:""},inputCssClass:{default:""},modelValue:{type:[Boolean,Array],default:!1},label:{default:""},labelOrphan:{type:Boolean,default:!1},disabled:{type:Boolean,default:!1},size:{default:a.Medium}},emits:["update:modelValue"],setup(l,{emit:x}){const s=l,n=t(()=>s.inputId||`id-${O()}`),d=t({get(){return s.modelValue},set(e){x("update:modelValue",e)}}),B=t(()=>{let e="";switch(s.size){case a.Small:e+="size-sm ";break;case a.Medium:default:e+=" ";break}return e}),_=t(()=>[s.inputCssClass,{"ds-cursor-not-allowed":s.disabled}]);return(e,c)=>(f(),m("div",{class:u(["b-checkbox ds-flex ds-items-center",B.value])},[z(p("input",{id:n.value,"onUpdate:modelValue":c[0]||(c[0]=V=>d.value=V),type:"checkbox",class:u(["ds-peer ds-invisible",_.value]),value:e.$attrs.value||d.value,disabled:e.disabled},null,10,$),[[M,d.value]]),p("label",{for:n.value,class:u(["input-label",L])},null,8,j),e.label||e.$slots.default?(f(),m("label",{key:0,for:e.labelOrphan?void 0:n.value,class:"ds-ml-2 ds-text-sm ds-font-medium ds-text-gray-900"},[q(e.$slots,"default",{},()=>[I(N(s.label),1)],!0)],8,D)):w("",!0)],2))}});const i=T(y,[["__scopeId","data-v-99a307cd"]]);y.__docgenInfo={exportName:"default",displayName:"BCheckbox",description:"",tags:{},props:[{name:"inputId",required:!1,type:{name:"string"},defaultValue:{func:!1,value:"''"}},{name:"inputCssClass",required:!1,type:{name:"string"},defaultValue:{func:!1,value:"''"}},{name:"modelValue",required:!1,type:{name:"union",elements:[{name:"boolean"},{name:"Array",elements:[{name:"union",elements:[{name:"string"},{name:"number"}]}]}]},defaultValue:{func:!1,value:"false"}},{name:"label",required:!1,type:{name:"string"},defaultValue:{func:!1,value:"''"}},{name:"labelOrphan",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"disabled",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"size",required:!1,type:{name:"TSLiteralType"},defaultValue:{func:!1,value:"BCheckboxSize.Medium"}}],events:[{name:"update:modelValue"}],slots:[{name:"default"}],sourceFiles:["/Users/thinhnguyen/Downloads/Projects/7PMLabs/7pmlabs-design-system/src/components/BCheckbox.vue"]};const F={title:"7PMLabs/Checkbox",component:i,tags:["autodocs"],argTypes:{size:{control:"select",options:Object.values(a)}},args:{size:a.Medium}},r={render:l=>({components:{BCheckbox:i},setup(){return{args:l}},template:'<BCheckbox v-bind="args">Medium</BCheckbox>'}),args:{size:a.Medium}},o={render:l=>({components:{BCheckbox:i},setup(){return{args:l}},template:'<BCheckbox v-bind="args">Small</BCheckbox>'}),args:{size:a.Small}};var b,h,v;r.parameters={...r.parameters,docs:{...(b=r.parameters)==null?void 0:b.docs,source:{originalSource:`{
  render: (args: any) => ({
    components: {
      BCheckbox
    },
    setup() {
      return {
        args
      };
    },
    template: '<BCheckbox v-bind="args">Medium</BCheckbox>'
  }),
  args: {
    size: BCheckboxSize.Medium
  }
}`,...(v=(h=r.parameters)==null?void 0:h.docs)==null?void 0:v.source}}};var C,k,g;o.parameters={...o.parameters,docs:{...(C=o.parameters)==null?void 0:C.docs,source:{originalSource:`{
  render: (args: any) => ({
    components: {
      BCheckbox
    },
    setup() {
      return {
        args
      };
    },
    template: '<BCheckbox v-bind="args">Small</BCheckbox>'
  }),
  args: {
    size: BCheckboxSize.Small
  }
}`,...(g=(k=o.parameters)==null?void 0:k.docs)==null?void 0:g.source}}};const G=["Medium","Small"];export{r as Medium,o as Small,G as __namedExportsOrder,F as default};
//# sourceMappingURL=BCheckbox.stories-6c5e442f.js.map
