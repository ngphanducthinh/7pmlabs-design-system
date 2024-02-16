import{j as v,k as r,o as d,b as i,w as y,H as _,l as u,d as w,q as B,t as S,m as V}from"./vue.esm-bundler-e1583b10.js";import{v as x}from"./v4-a960c1f4.js";import{_ as k}from"./_plugin-vue_export-helper-c27b6911.js";const q={class:"b-switch ds-flex ds-items-center"},I=["id","disabled","value"],T=["for"],C=["for"],f=v({__name:"BSwitch",props:{inputId:{default:""},modelValue:{type:[Boolean,Array],default:!1},label:{default:""},labelOrphan:{type:Boolean,default:!1},disabled:{type:Boolean,default:!1}},emits:["update:modelValue"],setup(s,{emit:h}){const e=s,n=r(()=>e.inputId||`id-${x()}`),l=r({get(){return e.modelValue},set(a){h("update:modelValue",a)}});return(a,o)=>(d(),i("div",q,[y(u("input",{"onUpdate:modelValue":o[0]||(o[0]=g=>l.value=g),id:n.value,disabled:e.disabled,value:a.$attrs.value,type:"checkbox",class:"b-switch__input"},null,8,I),[[_,l.value]]),u("label",{for:n.value,class:"b-switch__input-label"},null,8,T),e.label||a.$slots.default?(d(),i("label",{key:0,for:e.labelOrphan?void 0:n.value,class:"ds-ml-2 ds-text-sm ds-font-medium ds-text-gray-900"},[w(a.$slots,"default",{},()=>[B(S(e.label),1)],!0)],8,C)):V("",!0)]))}});const b=k(f,[["__scopeId","data-v-2162502a"]]);f.__docgenInfo={exportName:"default",displayName:"BSwitch",description:"",tags:{},props:[{name:"inputId",required:!1,type:{name:"string"},defaultValue:{func:!1,value:"''"}},{name:"modelValue",required:!0,type:{name:"union",elements:[{name:"boolean"},{name:"Array",elements:[{name:"union",elements:[{name:"string"},{name:"number"}]}]}]},defaultValue:{func:!1,value:"false"}},{name:"label",required:!1,type:{name:"string"},defaultValue:{func:!1,value:"''"}},{name:"labelOrphan",description:"Clicking on label will not turn on/off the switch.",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"disabled",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"false"}}],events:[{name:"update:modelValue",type:{names:["union"],elements:[{name:"boolean"},{name:"Array",elements:[{name:"union",elements:[{name:"string"},{name:"number"}]}]}]},description:"Update value, param: <code>value: boolean | Array<string | number></code>",properties:[{type:{names:["mixed"]},description:"e"},{type:{names:["mixed"]},name:"value"}],tags:[{title:"param",type:{name:"mixed"},description:"e"},{title:"param",type:{name:"mixed"},name:"value"}]}],slots:[{name:"default"}],sourceFiles:["/home/runner/work/design-system/design-system/src/components/BSwitch.vue"]};const $={title:"Components/Switch",parameters:{docs:{description:{component:"The <code>BSwitch</code> component provides users the ability to choose between two distinct values. These are very similar to a toggle, or on/off switch, though aesthetically different from a checkbox."}}},component:b,tags:["autodocs"],argTypes:{},args:{inputId:"",modelValue:!1,label:"",labelOrphan:!1,disabled:!1}},t={render:s=>({components:{BSwitch:b},setup(){return{args:s}},template:`
      <BSwitch v-bind="args">
        {{ args.label || 'Switch/Toggle' }}
      </BSwitch>`}),args:{}};var m,c,p;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`{
  render: (args: any) => ({
    components: {
      BSwitch
    },
    setup() {
      return {
        args
      };
    },
    template: \`
      <BSwitch v-bind="args">
        {{ args.label || 'Switch/Toggle' }}
      </BSwitch>\`
  }),
  args: {}
}`,...(p=(c=t.parameters)==null?void 0:c.docs)==null?void 0:p.source}}};const M=["Medium"];export{t as Medium,M as __namedExportsOrder,$ as default};
