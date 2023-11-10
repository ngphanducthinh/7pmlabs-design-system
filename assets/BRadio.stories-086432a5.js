import{j as _,k as r,o,d as m,l as f,w as D,I as N,n as c,t as S,m as p,s as I,u as M,F as k,b as x}from"./vue.esm-bundler-f0a4de28.js";import{_ as E}from"./BErrorMessage-94bbd499.js";import{u as w}from"./Validation-4b68e7d0.js";import{u as F}from"./vue-i18n.esm-bundler-45575b10.js";import{v as $}from"./v4-a960c1f4.js";import"./Common-43134899.js";const j={class:"ds-flex ds-items-center"},U=["id","disabled","name","value"],z=["for"],n=_({__name:"BRadio",props:{inputId:{default:""},modelValue:{type:[String,Number,Boolean],default:""},inputName:{default:""},label:{default:""},disabled:{type:Boolean,default:!1},labelCssClass:{default:""},hideDetails:{type:Boolean,default:!1},validationRules:{default:void 0},required:{type:Boolean,default:!1},requiredErrorMessage:{default:""}},emits:["update:modelValue","change"],setup(t,{emit:l}){const a=t,{t:V}=F(),R={validateRule:e=>!!(e&&e.trim()),errorMessage:()=>a.requiredErrorMessage||V("ds.global.field_required")},d=r(()=>a.inputId||`id-${$()}`),u=r({get(){return a.modelValue},set(e){l("update:modelValue",e)}}),y=r(()=>{let e=[];return a.required&&e.push(R),a.validationRules&&(e=e.concat(a.validationRules)),e.length?e:void 0}),{validate:h,validationResult:B}=w(d.value,u,y.value),C=()=>{l("change"),h()};return(e,i)=>(o(),m(k,null,[f("div",j,[D(f("input",{id:d.value,"onUpdate:modelValue":i[0]||(i[0]=q=>u.value=q),class:c([{"ds-cursor-not-allowed":e.disabled},"ds-h-6 ds-min-h-[1.5rem] ds-w-6 ds-min-w-[1.5rem] ds-border-gray-300 ds-bg-gray-100 ds-text-primary-t focus:ds-ring-primary-t"]),disabled:e.disabled,name:e.inputName,value:e.$attrs.value,type:"radio",onChange:C},null,42,U),[[N,u.value]]),e.label?(o(),m("label",{key:0,class:c([e.labelCssClass,"ds-ml-2 ds-text-sm ds-font-medium ds-text-gray-900"]),for:d.value},S(e.label),11,z)):p("",!0)]),e.hideDetails?p("",!0):(o(),I(E,{key:0,"error-message":M(B).errorMessage(),class:"ds-mt-1"},null,8,["error-message"]))],64))}});n.__docgenInfo={exportName:"default",displayName:"BRadio",description:"",tags:{},props:[{name:"inputId",defaultValue:{func:!1,value:"''"}},{name:"modelValue",defaultValue:{func:!1,value:"''"}},{name:"inputName",defaultValue:{func:!1,value:"''"}},{name:"label",defaultValue:{func:!1,value:"''"}},{name:"disabled",defaultValue:{func:!1,value:"false"}},{name:"labelCssClass",defaultValue:{func:!1,value:"''"}},{name:"hideDetails",defaultValue:{func:!1,value:"false"}},{name:"validationRules",defaultValue:{func:!1,value:"undefined"}},{name:"required",defaultValue:{func:!1,value:"false"}},{name:"requiredErrorMessage",defaultValue:{func:!1,value:"''"}}],events:[{name:"update:modelValue"},{name:"change"}],sourceFiles:["/Users/thinhnguyen/Documents/Projects/7pmlabs/design-system/src/components/BRadio.vue"]};const K={title:"Components/Radio",component:n,tags:["autodocs"],args:{inputId:"",inputName:"",label:"",disabled:!1,labelCssClass:"",hideDetails:!1,validationRules:void 0,required:!1,requiredErrorMessage:""}},s={render:t=>({components:{BRadio:n},setup(){const l=x("");return{args:t,radio:l}},template:`
      <BRadio
        v-bind="args"
        v-model="radio"
        value="Value 01"
        label="Select 'Value 01'"
      />
      <BRadio
        v-bind="args"
        v-model="radio"
        value="Value 02"
        label="Select 'Value 02'"
      />
      
      <p class="ds-text-xs ds-text-gray-500">
        Selected value: {{ radio }}
      </p>
    `}),args:{modelValue:""}};var v,g,b;s.parameters={...s.parameters,docs:{...(v=s.parameters)==null?void 0:v.docs,source:{originalSource:`{
  render: (args: any) => ({
    components: {
      BRadio
    },
    setup() {
      const radio = ref('');
      return {
        args,
        radio
      };
    },
    template: \`
      <BRadio
        v-bind="args"
        v-model="radio"
        value="Value 01"
        label="Select 'Value 01'"
      />
      <BRadio
        v-bind="args"
        v-model="radio"
        value="Value 02"
        label="Select 'Value 02'"
      />
      
      <p class="ds-text-xs ds-text-gray-500">
        Selected value: {{ radio }}
      </p>
    \`
  }),
  args: {
    modelValue: ''
  }
}`,...(b=(g=s.parameters)==null?void 0:g.docs)==null?void 0:b.source}}};const L=["Default"];export{s as Default,L as __namedExportsOrder,K as default};
//# sourceMappingURL=BRadio.stories-086432a5.js.map
