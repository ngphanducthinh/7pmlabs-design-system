import{j as x,k as d,o,b as m,l as p,w as _,I as N,n as f,t as S,m as c,x as D,u as k,F as I,e as M}from"./vue.esm-bundler-29df2e62.js";import{_ as w}from"./BErrorMessage-f3a23431.js";import{u as E}from"./Validation-5669da51.js";import{u as F}from"./vue-i18n.esm-bundler-152c8982.js";import{v as $}from"./v4-a960c1f4.js";import"./Common-43134899.js";const A={class:"ds-flex ds-items-center"},U=["id","disabled","name","value"],j=["for"],i=x({__name:"BRadio",props:{inputId:{default:""},modelValue:{type:[String,Number,Boolean],default:""},inputName:{default:""},label:{default:""},disabled:{type:Boolean,default:!1},labelCssClass:{default:""},hideDetails:{type:Boolean,default:!1},validationRules:{default:void 0},required:{type:Boolean,default:!1},requiredErrorMessage:{default:""}},emits:["change","update:modelValue"],setup(n,{emit:l}){const a=n,{t:y}=F(),V={validateRule:e=>!!(e&&e.trim()),errorMessage:()=>a.requiredErrorMessage||y("ds.global.field_required")},t=d(()=>a.inputId||`id-${$()}`),r=d({get(){return a.modelValue},set(e){l("update:modelValue",e)}}),R=d(()=>{let e=[];return a.required&&e.push(V),a.validationRules&&(e=e.concat(a.validationRules)),e.length?e:void 0}),{validate:q,validationResult:h}=E(t.value,r,R.value),B=()=>{l("change"),q()};return(e,u)=>(o(),m(I,null,[p("div",A,[_(p("input",{id:t.value,"onUpdate:modelValue":u[0]||(u[0]=C=>r.value=C),class:f([{"ds-cursor-not-allowed":e.disabled},"ds-h-6 ds-min-h-[1.5rem] ds-w-6 ds-min-w-[1.5rem] ds-border-gray-300 ds-bg-gray-100 ds-text-primary-t focus:ds-ring-primary-t"]),disabled:e.disabled,name:e.inputName,value:e.$attrs.value,type:"radio",onChange:B},null,42,U),[[N,r.value]]),e.label?(o(),m("label",{key:0,class:f([e.labelCssClass,"ds-ml-2 ds-text-sm ds-font-medium ds-text-gray-900"]),for:t.value},S(e.label),11,j)):c("",!0)]),e.hideDetails?c("",!0):(o(),D(w,{key:0,"error-message":k(h).errorMessage(),class:"ds-mt-1"},null,8,["error-message"]))],64))}});i.__docgenInfo={exportName:"default",displayName:"BRadio",description:"",tags:{},props:[{name:"inputId",required:!1,type:{name:"string"},defaultValue:{func:!1,value:"''"}},{name:"modelValue",required:!1,type:{name:"union",elements:[{name:"string"},{name:"number"},{name:"boolean"}]},defaultValue:{func:!1,value:"''"}},{name:"inputName",required:!1,type:{name:"string"},defaultValue:{func:!1,value:"''"}},{name:"label",required:!1,type:{name:"string"},defaultValue:{func:!1,value:"''"}},{name:"disabled",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"labelCssClass",required:!1,type:{name:"string"},defaultValue:{func:!1,value:"''"}},{name:"hideDetails",description:"Hide the validation error message.",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"validationRules",description:"Array of custom validation rules.",required:!1,type:{name:"Array",elements:[{name:"ValidationRule"}]},defaultValue:{func:!1,value:"undefined"}},{name:"required",description:"Validate if the field is left empty.",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"requiredErrorMessage",required:!1,type:{name:"string"},defaultValue:{func:!1,value:"''"}}],events:[{name:"change"},{name:"update:modelValue",type:{names:["union"],elements:[{name:"string"},{name:"number"},{name:"boolean"}]},description:"Update value",properties:[{type:{names:["mixed"]},description:"e"},{type:{names:["mixed"]},name:"value"}],tags:[{title:"param",type:{name:"mixed"},description:"e"},{title:"param",type:{name:"mixed"},name:"value"}]}],sourceFiles:["/home/runner/work/design-system/design-system/src/components/BRadio.vue"]};const K={title:"Components/Radio",parameters:{docs:{description:{component:"The <code>BRadio</code> component is a simple radio button."}}},component:i,tags:["autodocs"],args:{inputId:"",inputName:"",label:"",disabled:!1,labelCssClass:"",hideDetails:!1,validationRules:void 0,required:!1,requiredErrorMessage:""}},s={render:n=>({components:{BRadio:i},setup(){const l=M("");return{args:n,radio:l}},template:`
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
