import{e as y,f as r,o as d,c as i,l as _,B as w,h as u,r as B,j as S,t as V,g as x}from"./vue.esm-bundler-ceeda665.js";import{v as k}from"./v4-eb618527.js";import{_ as I}from"./_plugin-vue_export-helper-c27b6911.js";const T={class:"b-switch ds-flex ds-items-center"},q=["id","disabled","value"],C=["for"],N=["for"],f=y({__name:"BSwitch",props:{inputId:{default:""},modelValue:{type:[Boolean,Array],default:!1},label:{default:""},labelOrphan:{type:Boolean,default:!1},disabled:{type:Boolean,default:!1}},emits:["update:modelValue"],setup(s,{emit:h}){const e=s,g=h,n=r(()=>e.inputId||`id-${k()}`),l=r({get(){return e.modelValue},set(a){g("update:modelValue",a)}});return(a,o)=>(d(),i("div",T,[_(u("input",{"onUpdate:modelValue":o[0]||(o[0]=v=>l.value=v),id:n.value,disabled:e.disabled,value:a.$attrs.value,type:"checkbox",class:"b-switch__input"},null,8,q),[[w,l.value]]),u("label",{for:n.value,class:"b-switch__input-label ds-border ds-border-black/[0.1] ds-drop-shadow-light"},null,8,C),e.label||a.$slots.default?(d(),i("label",{key:0,for:e.labelOrphan?void 0:n.value,class:"ds-ml-2 ds-text-sm ds-font-medium ds-text-gray-900"},[B(a.$slots,"default",{},()=>[S(V(e.label),1)],!0)],8,N)):x("",!0)]))}});const b=I(f,[["__scopeId","data-v-94d47575"]]);f.__docgenInfo={exportName:"default",displayName:"BSwitch",description:"",tags:{},props:[{name:"inputId",required:!1,type:{name:"string"},defaultValue:{func:!1,value:"''"}},{name:"modelValue",required:!0,type:{name:"union",elements:[{name:"boolean"},{name:"Array",elements:[{name:"union",elements:[{name:"string"},{name:"number"}]}]}]},defaultValue:{func:!1,value:"false"}},{name:"label",required:!1,type:{name:"string"},defaultValue:{func:!1,value:"''"}},{name:"labelOrphan",description:"Clicking on label will not turn on/off the switch.",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"disabled",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"false"}}],events:[{name:"update:modelValue",type:{names:["union"],elements:[{name:"boolean"},{name:"Array",elements:[{name:"union",elements:[{name:"string"},{name:"number"}]}]}]},description:"Update value, param: <code>value: boolean | Array<string | number></code>",properties:[{type:{names:["mixed"]},description:"e"},{type:{names:["mixed"]},name:"value"}],tags:[{title:"param",type:{name:"mixed"},description:"e"},{title:"param",type:{name:"mixed"},name:"value"}]}],slots:[{name:"default"}],sourceFiles:["/home/runner/work/design-system/design-system/src/components/BSwitch.vue"]};const M={title:"Components/Switch",parameters:{docs:{description:{component:"The <code>BSwitch</code> component provides users the ability to choose between two distinct values. These are very similar to a toggle, or on/off switch, though aesthetically different from a checkbox."}}},component:b,tags:["autodocs"],argTypes:{},args:{inputId:"",modelValue:!1,label:"",labelOrphan:!1,disabled:!1}},t={render:s=>({components:{BSwitch:b},setup(){return{args:s}},template:`
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
}`,...(p=(c=t.parameters)==null?void 0:c.docs)==null?void 0:p.source}}};const D=["Medium"];export{t as Medium,D as __namedExportsOrder,M as default};
