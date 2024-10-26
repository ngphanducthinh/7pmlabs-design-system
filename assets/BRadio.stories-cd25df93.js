import{e as C,f as o,o as n,c as p,h as i,l as N,H as k,n as D,r as I,j as M,t as E,g as f,m as S,u as O,F as $,a as w}from"./vue.esm-bundler-ceeda665.js";import{_ as F}from"./BErrorMessage-4dbabbe9.js";import{u as A}from"./Validation-e4311cdc.js";import{u as H}from"./vue-i18n-5bf62172.js";import{v as T}from"./v4-eb618527.js";import{_ as U}from"./_plugin-vue_export-helper-c27b6911.js";import"./Common-74b424b5.js";const j={class:"b-radio ds-flex ds-items-center"},z=["id","disabled","name","value"],G=["for"],J=["for"],g=C({__name:"BRadio",props:{inputId:{default:""},modelValue:{type:[String,Number,Boolean],default:""},inputName:{default:""},label:{default:""},labelOrphan:{type:Boolean,default:!1},disabled:{type:Boolean,default:!1},labelCssClass:{default:""},hideDetails:{type:Boolean,default:!1},validationRules:{default:void 0},required:{type:Boolean,default:!1},requiredErrorMessage:{default:""}},emits:["change","update:modelValue"],setup(t,{emit:d}){const a=t,u=d,{t:V}=H(),_={validateRule:e=>!!(e&&e.trim()),errorMessage:()=>a.requiredErrorMessage||V("ds.global.field_required")},l=o(()=>a.inputId||`id-${T()}`),r=o({get(){return a.modelValue},set(e){u("update:modelValue",e)}}),h=o(()=>{let e=[];return a.required&&e.push(_),a.validationRules&&(e=e.concat(a.validationRules)),e.length?e:void 0}),{validate:R,validationResult:B}=A(l.value,r,h.value),q=()=>{u("change"),R()};return(e,m)=>(n(),p($,null,[i("div",j,[N(i("input",{id:l.value,"onUpdate:modelValue":m[0]||(m[0]=x=>r.value=x),disabled:e.disabled,name:e.inputName,value:e.$attrs.value,class:"b-radio__input",type:"radio",onChange:q},null,40,z),[[k,r.value]]),i("label",{for:l.value,class:"b-radio__input-label ds-border ds-border-black/[0.1] ds-drop-shadow-light"},null,8,G),a.label||e.$slots.default?(n(),p("label",{key:0,for:a.labelOrphan?void 0:l.value,class:D([e.labelCssClass,"ds-ml-2 ds-text-sm ds-font-medium ds-text-gray-900"])},[I(e.$slots,"default",{},()=>[M(E(a.label),1)],!0)],10,J)):f("",!0)]),e.hideDetails?f("",!0):(n(),S(F,{key:0,"error-message":O(B).errorMessage(),class:"ds-mt-1"},null,8,["error-message"]))],64))}});const y=U(g,[["__scopeId","data-v-98637356"]]);g.__docgenInfo={exportName:"default",displayName:"BRadio",description:"",tags:{},props:[{name:"inputId",required:!1,type:{name:"string"},defaultValue:{func:!1,value:"''"}},{name:"modelValue",required:!0,type:{name:"union",elements:[{name:"string"},{name:"number"},{name:"boolean"}]},defaultValue:{func:!1,value:"''"}},{name:"inputName",required:!1,type:{name:"string"},defaultValue:{func:!1,value:"''"}},{name:"label",required:!1,type:{name:"string"},defaultValue:{func:!1,value:"''"}},{name:"labelOrphan",description:"Clicking on label will not select the radio.",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"disabled",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"labelCssClass",required:!1,type:{name:"string"},defaultValue:{func:!1,value:"''"}},{name:"hideDetails",description:"Hide the validation error message.",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"validationRules",description:"Array of custom validation rules.",required:!1,type:{name:"Array",elements:[{name:"ValidationRule"}]},defaultValue:{func:!1,value:"undefined"}},{name:"required",description:"Validate if the field is left empty.",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"requiredErrorMessage",required:!1,type:{name:"string"},defaultValue:{func:!1,value:"''"}}],events:[{name:"change"},{name:"update:modelValue",type:{names:["union"],elements:[{name:"string"},{name:"number"},{name:"boolean"}]},description:"Update value, param: <code>value: string | number | boolean</code>",properties:[{type:{names:["mixed"]},description:"e"},{type:{names:["mixed"]},name:"value"}],tags:[{title:"param",type:{name:"mixed"},description:"e"},{title:"param",type:{name:"mixed"},name:"value"}]}],slots:[{name:"default"}],sourceFiles:["/home/runner/work/design-system/design-system/src/components/BRadio.vue"]};const Z={title:"Components/Radio",parameters:{docs:{description:{component:"The <code>BRadio</code> component is a simple radio button."}}},component:y,tags:["autodocs"],args:{inputId:"",inputName:"",label:"",labelOrphan:!1,disabled:!1,labelCssClass:"",hideDetails:!1,validationRules:void 0,required:!1,requiredErrorMessage:""}},s={render:t=>({components:{BRadio:y},setup(){const d=w("");return{args:t,radio:d}},template:`
      <div class="ds-flex ds-gap-4 ds-mb-4">
        <BRadio
          v-bind="args"
          v-model="radio"
          value="01"
          :label="args.label || 'Value 01'"
        />
        <BRadio
          v-bind="args"
          v-model="radio"
          value="02"
          :label="args.label || 'Value 02'"
        />
        <BRadio
          v-bind="args"
          v-model="radio"
          value="03"
          :label="args.label || 'Value 03'"
        />
      </div>

      <p class="ds-text-xs ds-text-gray-500">
        Selected value: {{ radio }}
      </p>
    `}),args:{modelValue:""}};var c,v,b;s.parameters={...s.parameters,docs:{...(c=s.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
      <div class="ds-flex ds-gap-4 ds-mb-4">
        <BRadio
          v-bind="args"
          v-model="radio"
          value="01"
          :label="args.label || 'Value 01'"
        />
        <BRadio
          v-bind="args"
          v-model="radio"
          value="02"
          :label="args.label || 'Value 02'"
        />
        <BRadio
          v-bind="args"
          v-model="radio"
          value="03"
          :label="args.label || 'Value 03'"
        />
      </div>

      <p class="ds-text-xs ds-text-gray-500">
        Selected value: {{ radio }}
      </p>
    \`
  }),
  args: {
    modelValue: ''
  }
}`,...(b=(v=s.parameters)==null?void 0:v.docs)==null?void 0:b.source}}};const ee=["Default"];export{s as Default,ee as __namedExportsOrder,Z as default};
