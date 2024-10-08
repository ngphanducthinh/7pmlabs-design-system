import{d as C,e as r,o,c as p,g as i,w as N,P as k,n as D,r as I,h as M,t as E,f,k as S,u as w,F as O,a as $}from"./vue.esm-bundler-91340787.js";import{_ as F}from"./BErrorMessage-a6c8362f.js";import{u as A}from"./Validation-1a1f7718.js";import{u as T}from"./vue-i18n-16525cc0.js";import{v as U}from"./v4-4a60fe23.js";import{_ as z}from"./_plugin-vue_export-helper-c27b6911.js";import"./Common-74b424b5.js";const H={class:"b-radio ds-flex ds-items-center"},P=["id","disabled","name","value"],j=["for"],G=["for"],g=C({__name:"BRadio",props:{inputId:{default:""},modelValue:{type:[String,Number,Boolean],default:""},inputName:{default:""},label:{default:""},labelOrphan:{type:Boolean,default:!1},disabled:{type:Boolean,default:!1},labelCssClass:{default:""},hideDetails:{type:Boolean,default:!1},validationRules:{default:void 0},required:{type:Boolean,default:!1},requiredErrorMessage:{default:""}},emits:["change","update:modelValue"],setup(n,{emit:t}){const a=n,u=t,{t:V}=T(),_={validateRule:e=>!!(e&&e.trim()),errorMessage:()=>a.requiredErrorMessage||V("ds.global.field_required")},l=r(()=>a.inputId||`id-${U()}`),d=r({get(){return a.modelValue},set(e){u("update:modelValue",e)}}),h=r(()=>{let e=[];return a.required&&e.push(_),a.validationRules&&(e=e.concat(a.validationRules)),e.length?e:void 0}),{validate:R,validationResult:B}=A(l.value,d,h.value),q=()=>{u("change"),R()};return(e,m)=>(o(),p(O,null,[i("div",H,[N(i("input",{id:l.value,"onUpdate:modelValue":m[0]||(m[0]=x=>d.value=x),disabled:e.disabled,name:e.inputName,value:e.$attrs.value,class:"b-radio__input",type:"radio",onChange:q},null,40,P),[[k,d.value]]),i("label",{for:l.value,class:"b-radio__input-label ds-border ds-border-black/[0.1] ds-drop-shadow-light"},null,8,j),a.label||e.$slots.default?(o(),p("label",{key:0,for:a.labelOrphan?void 0:l.value,class:D([e.labelCssClass,"ds-ml-2 ds-text-sm ds-font-medium ds-text-gray-900"])},[I(e.$slots,"default",{},()=>[M(E(a.label),1)],!0)],10,G)):f("",!0)]),e.hideDetails?f("",!0):(o(),S(F,{key:0,"error-message":w(B).errorMessage(),class:"ds-mt-1"},null,8,["error-message"]))],64))}});const y=z(g,[["__scopeId","data-v-98637356"]]);g.__docgenInfo={exportName:"default",displayName:"BRadio",description:"",tags:{},props:[{name:"inputId",required:!1,type:{name:"string"},defaultValue:{func:!1,value:"''"}},{name:"modelValue",required:!0,type:{name:"union",elements:[{name:"string"},{name:"number"},{name:"boolean"}]},defaultValue:{func:!1,value:"''"}},{name:"inputName",required:!1,type:{name:"string"},defaultValue:{func:!1,value:"''"}},{name:"label",required:!1,type:{name:"string"},defaultValue:{func:!1,value:"''"}},{name:"labelOrphan",description:"Clicking on label will not select the radio.",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"disabled",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"labelCssClass",required:!1,type:{name:"string"},defaultValue:{func:!1,value:"''"}},{name:"hideDetails",description:"Hide the validation error message.",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"validationRules",description:"Array of custom validation rules.",required:!1,type:{name:"Array",elements:[{name:"ValidationRule"}]},defaultValue:{func:!1,value:"undefined"}},{name:"required",description:"Validate if the field is left empty.",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"requiredErrorMessage",required:!1,type:{name:"string"},defaultValue:{func:!1,value:"''"}}],events:[{name:"change"},{name:"update:modelValue",type:{names:["union"],elements:[{name:"string"},{name:"number"},{name:"boolean"}]},description:"Update value, param: <code>value: string | number | boolean</code>",properties:[{type:{names:["mixed"]},description:"e"},{type:{names:["mixed"]},name:"value"}],tags:[{title:"param",type:{name:"mixed"},description:"e"},{title:"param",type:{name:"mixed"},name:"value"}]}],slots:[{name:"default"}],sourceFiles:["/home/runner/work/design-system/design-system/src/components/BRadio.vue"]};const Z={title:"Components/Radio",parameters:{docs:{description:{component:"The <code>BRadio</code> component is a simple radio button."}}},component:y,tags:["autodocs"],args:{inputId:"",inputName:"",label:"",labelOrphan:!1,disabled:!1,labelCssClass:"",hideDetails:!1,validationRules:void 0,required:!1,requiredErrorMessage:""}},s={render:n=>({components:{BRadio:y},setup(){const t=$("");return{args:n,radio:t}},template:`
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
