import{j as _,k as r,o,d as m,l as f,w as D,I as N,n as c,t as S,m as p,s as M,u as I,F as k,b as w}from"./vue.esm-bundler-c34c64cb.js";import{_ as x}from"./BErrorMessage-91c905cc.js";import{u as E}from"./Validation-0cf2dd16.js";import{u as F}from"./vue-i18n.esm-bundler-1f56b746.js";import{v as $}from"./v4-a960c1f4.js";const j={class:"ds-flex ds-items-center"},P=["id","disabled","name","value"],U=["for"],n=_({__name:"BRadio",props:{inputId:{default:""},modelValue:{type:[String,Number,Boolean],default:""},inputName:{default:""},label:{default:""},disabled:{type:Boolean,default:!1},labelCssClass:{default:""},hideDetails:{type:Boolean,default:!1},validationRules:{default:void 0},required:{type:Boolean,default:!1},requiredErrorMessage:{default:""}},emits:["update:modelValue","change"],setup(d,{emit:l}){const a=d,{t:V}=F(),R={validateRule:e=>!!(e&&e.trim()),errorMessage:()=>a.requiredErrorMessage||V("ds.global.field_required")},t=r(()=>a.inputId||`id-${$()}`),u=r({get(){return a.modelValue},set(e){l("update:modelValue",e)}}),y=r(()=>{let e=[];return a.required&&e.push(R),a.validationRules&&(e=e.concat(a.validationRules)),e.length?e:void 0}),{validate:h,validationResult:B}=E(t.value,u,y.value),C=()=>{l("change"),h()};return(e,i)=>(o(),m(k,null,[f("div",j,[D(f("input",{id:t.value,"onUpdate:modelValue":i[0]||(i[0]=q=>u.value=q),class:c([{"ds-cursor-not-allowed":e.disabled},"ds-h-6 ds-min-h-[1.5rem] ds-w-6 ds-min-w-[1.5rem] ds-border-gray-300 ds-bg-gray-100 ds-text-primary-t focus:ds-ring-primary-t"]),disabled:e.disabled,name:e.inputName,value:e.$attrs.value,type:"radio",onChange:C},null,42,P),[[N,u.value]]),e.label?(o(),m("label",{key:0,class:c([e.labelCssClass,"ds-ml-2 ds-text-sm ds-font-medium ds-text-gray-900"]),for:t.value},S(e.label),11,U)):p("",!0)]),e.hideDetails?p("",!0):(o(),M(x,{key:0,"error-message":I(B).errorMessage(),class:"ds-mt-1"},null,8,["error-message"]))],64))}});n.__docgenInfo={exportName:"default",displayName:"BRadio",description:"",tags:{},props:[{name:"inputId",defaultValue:{func:!1,value:"''"}},{name:"modelValue",defaultValue:{func:!1,value:"''"}},{name:"inputName",defaultValue:{func:!1,value:"''"}},{name:"label",defaultValue:{func:!1,value:"''"}},{name:"disabled",defaultValue:{func:!1,value:"false"}},{name:"labelCssClass",defaultValue:{func:!1,value:"''"}},{name:"hideDetails",defaultValue:{func:!1,value:"false"}},{name:"validationRules",defaultValue:{func:!1,value:"undefined"}},{name:"required",defaultValue:{func:!1,value:"false"}},{name:"requiredErrorMessage",defaultValue:{func:!1,value:"''"}}],events:[{name:"update:modelValue"},{name:"change"}],sourceFiles:["/Users/thinhnguyen/Downloads/Projects/7PMLabs/7pmlabs-design-system/src/components/BRadio.vue"]};const H={title:"Components/Radio",component:n,tags:["autodocs"],args:{inputId:"",inputName:"",label:"",disabled:!1,labelCssClass:"",hideDetails:!1,validationRules:void 0,required:!1,requiredErrorMessage:""}},s={render:d=>({components:{BRadio:n},setup(){const l=w("");return{args:d,radio:l}},template:`
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
}`,...(b=(g=s.parameters)==null?void 0:g.docs)==null?void 0:b.source}}};const J=["Default"];export{s as Default,J as __namedExportsOrder,H as default};
//# sourceMappingURL=BRadio.stories-24e85c6a.js.map
