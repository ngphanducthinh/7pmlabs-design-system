import{j as _,k as d,o,b as m,l as f,w as N,K as S,n as p,t as D,m as c,z as k,u as M,G as w,e as x}from"./vue.esm-bundler-3f3ee96a.js";import{_ as E}from"./BErrorMessage-224a7330.js";import{u as I}from"./Validation-8ed78fc9.js";import{u as F}from"./vue-i18n.esm-bundler-968cf724.js";import{v as $}from"./v4-a960c1f4.js";import"./Common-43134899.js";const z={class:"ds-flex ds-items-center"},A=["id","disabled","name","value"],j=["for"],u=_({__name:"BRadio",props:{inputId:{default:""},modelValue:{type:[String,Number,Boolean],default:""},inputName:{default:""},label:{default:""},disabled:{type:Boolean,default:!1},labelCssClass:{default:""},hideDetails:{type:Boolean,default:!1},validationRules:{default:void 0},required:{type:Boolean,default:!1},requiredErrorMessage:{default:""}},emits:["change","update:modelValue"],setup(n,{emit:l}){const a=n,{t:y}=F(),V={validateRule:e=>!!(e&&e.trim()),errorMessage:()=>a.requiredErrorMessage||y("ds.global.field_required")},t=d(()=>a.inputId||`id-${$()}`),r=d({get(){return a.modelValue},set(e){l("update:modelValue",e)}}),R=d(()=>{let e=[];return a.required&&e.push(V),a.validationRules&&(e=e.concat(a.validationRules)),e.length?e:void 0}),{validate:q,validationResult:h}=I(t.value,r,R.value),B=()=>{l("change"),q()};return(e,i)=>(o(),m(w,null,[f("div",z,[N(f("input",{id:t.value,"onUpdate:modelValue":i[0]||(i[0]=C=>r.value=C),class:p([{"ds-cursor-not-allowed":e.disabled},"ds-h-6 ds-min-h-[1.5rem] ds-w-6 ds-min-w-[1.5rem] ds-border-gray-300 ds-bg-gray-100 ds-text-primary-t focus:ds-ring-primary-t"]),disabled:e.disabled,name:e.inputName,value:e.$attrs.value,type:"radio",onChange:B},null,42,A),[[S,r.value]]),e.label?(o(),m("label",{key:0,class:p([e.labelCssClass,"ds-ml-2 ds-text-sm ds-font-medium ds-text-gray-900"]),for:t.value},D(e.label),11,j)):c("",!0)]),e.hideDetails?c("",!0):(o(),k(E,{key:0,"error-message":M(h).errorMessage(),class:"ds-mt-1"},null,8,["error-message"]))],64))}});u.__docgenInfo={exportName:"default",displayName:"BRadio",description:"",tags:{},props:[{name:"inputId",required:!1,type:{name:"string"},defaultValue:{func:!1,value:"''"}},{name:"modelValue",required:!1,type:{name:"union",elements:[{name:"string"},{name:"number"},{name:"boolean"}]},defaultValue:{func:!1,value:"''"}},{name:"inputName",required:!1,type:{name:"string"},defaultValue:{func:!1,value:"''"}},{name:"label",required:!1,type:{name:"string"},defaultValue:{func:!1,value:"''"}},{name:"disabled",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"labelCssClass",required:!1,type:{name:"string"},defaultValue:{func:!1,value:"''"}},{name:"hideDetails",description:"Hide the validation error message.",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"validationRules",description:"Array of custom validation rules.",required:!1,type:{name:"Array",elements:[{name:"ValidationRule"}]},defaultValue:{func:!1,value:"undefined"}},{name:"required",description:"Validate if the field is left empty.",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"requiredErrorMessage",required:!1,type:{name:"string"},defaultValue:{func:!1,value:"''"}}],sourceFiles:["/home/runner/work/design-system/design-system/src/components/BRadio.vue"]};const L={title:"Components/Radio",component:u,tags:["autodocs"],args:{inputId:"",inputName:"",label:"",disabled:!1,labelCssClass:"",hideDetails:!1,validationRules:void 0,required:!1,requiredErrorMessage:""}},s={render:n=>({components:{BRadio:u},setup(){const l=x("");return{args:n,radio:l}},template:`
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
}`,...(b=(g=s.parameters)==null?void 0:g.docs)==null?void 0:b.source}}};const P=["Default"];export{s as Default,P as __namedExportsOrder,L as default};
