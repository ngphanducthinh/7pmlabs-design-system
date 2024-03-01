import{j as x,k as r,o,b as m,l as i,w as C,N,n as k,d as D,q as I,t as M,m as p,x as E,u as S,F as w,e as O}from"./vue.esm-bundler-e1583b10.js";import{_ as $}from"./BErrorMessage-d28ad561.js";import{u as F}from"./Validation-d1f2529d.js";import{u as A}from"./vue-i18n.esm-bundler-729c797a.js";import{v as T}from"./v4-a960c1f4.js";import{_ as U}from"./_plugin-vue_export-helper-c27b6911.js";import"./Common-c3b475f1.js";const j={class:"b-radio ds-flex ds-items-center"},z=["id","disabled","name","value"],H=["for"],G=["for"],b=x({__name:"BRadio",props:{inputId:{default:""},modelValue:{type:[String,Number,Boolean],default:""},inputName:{default:""},label:{default:""},labelOrphan:{type:Boolean,default:!1},disabled:{type:Boolean,default:!1},labelCssClass:{default:""},hideDetails:{type:Boolean,default:!1},validationRules:{default:void 0},required:{type:Boolean,default:!1},requiredErrorMessage:{default:""}},emits:["change","update:modelValue"],setup(t,{emit:l}){const a=t,{t:y}=A(),V={validateRule:e=>!!(e&&e.trim()),errorMessage:()=>a.requiredErrorMessage||y("ds.global.field_required")},s=r(()=>a.inputId||`id-${T()}`),d=r({get(){return a.modelValue},set(e){l("update:modelValue",e)}}),_=r(()=>{let e=[];return a.required&&e.push(V),a.validationRules&&(e=e.concat(a.validationRules)),e.length?e:void 0}),{validate:h,validationResult:R}=F(s.value,d,_.value),q=()=>{l("change"),h()};return(e,u)=>(o(),m(w,null,[i("div",j,[C(i("input",{id:s.value,"onUpdate:modelValue":u[0]||(u[0]=B=>d.value=B),disabled:e.disabled,name:e.inputName,value:e.$attrs.value,class:"b-radio__input",type:"radio",onChange:q},null,40,z),[[N,d.value]]),i("label",{for:s.value,class:"b-radio__input-label ds-border ds-border-black/[0.1] ds-drop-shadow-light"},null,8,H),a.label||e.$slots.default?(o(),m("label",{key:0,for:a.labelOrphan?void 0:s.value,class:k([e.labelCssClass,"ds-ml-2 ds-text-sm ds-font-medium ds-text-gray-900"])},[D(e.$slots,"default",{},()=>[I(M(a.label),1)],!0)],10,G)):p("",!0)]),e.hideDetails?p("",!0):(o(),E($,{key:0,"error-message":S(R).errorMessage(),class:"ds-mt-1"},null,8,["error-message"]))],64))}});const g=U(b,[["__scopeId","data-v-98637356"]]);b.__docgenInfo={exportName:"default",displayName:"BRadio",description:"",tags:{},props:[{name:"inputId",required:!1,type:{name:"string"},defaultValue:{func:!1,value:"''"}},{name:"modelValue",required:!0,type:{name:"union",elements:[{name:"string"},{name:"number"},{name:"boolean"}]},defaultValue:{func:!1,value:"''"}},{name:"inputName",required:!1,type:{name:"string"},defaultValue:{func:!1,value:"''"}},{name:"label",required:!1,type:{name:"string"},defaultValue:{func:!1,value:"''"}},{name:"labelOrphan",description:"Clicking on label will not select the radio.",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"disabled",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"labelCssClass",required:!1,type:{name:"string"},defaultValue:{func:!1,value:"''"}},{name:"hideDetails",description:"Hide the validation error message.",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"validationRules",description:"Array of custom validation rules.",required:!1,type:{name:"Array",elements:[{name:"ValidationRule"}]},defaultValue:{func:!1,value:"undefined"}},{name:"required",description:"Validate if the field is left empty.",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"requiredErrorMessage",required:!1,type:{name:"string"},defaultValue:{func:!1,value:"''"}}],events:[{name:"change"},{name:"update:modelValue",type:{names:["union"],elements:[{name:"string"},{name:"number"},{name:"boolean"}]},description:"Update value, param: <code>value: string | number | boolean</code>",properties:[{type:{names:["mixed"]},description:"e"},{type:{names:["mixed"]},name:"value"}],tags:[{title:"param",type:{name:"mixed"},description:"e"},{title:"param",type:{name:"mixed"},name:"value"}]}],slots:[{name:"default"}],sourceFiles:["/home/runner/work/design-system/design-system/src/components/BRadio.vue"]};const Y={title:"Components/Radio",parameters:{docs:{description:{component:"The <code>BRadio</code> component is a simple radio button."}}},component:g,tags:["autodocs"],args:{inputId:"",inputName:"",label:"",labelOrphan:!1,disabled:!1,labelCssClass:"",hideDetails:!1,validationRules:void 0,required:!1,requiredErrorMessage:""}},n={render:t=>({components:{BRadio:g},setup(){const l=O("");return{args:t,radio:l}},template:`
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
    `}),args:{modelValue:""}};var f,c,v;n.parameters={...n.parameters,docs:{...(f=n.parameters)==null?void 0:f.docs,source:{originalSource:`{
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
}`,...(v=(c=n.parameters)==null?void 0:c.docs)==null?void 0:v.source}}};const Z=["Default"];export{n as Default,Z as __namedExportsOrder,Y as default};
