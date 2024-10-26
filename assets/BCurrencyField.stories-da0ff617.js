import{e as $,a as k,f as n,w as b,s as E,c as p,k as U,h as g,r as h,g as c,n as z,D as A,m as L,u as K,o as l}from"./vue.esm-bundler-ceeda665.js";import{_ as T}from"./BLabel-93eef36b.js";import{u as O}from"./Validation-e4311cdc.js";import{_ as j}from"./BErrorMessage-4dbabbe9.js";import{u as H}from"./vue-i18n-5bf62172.js";import{I as P}from"./imask-7.1.3-dc9fb158.js";import{S as m}from"./Enums-b5cac340.js";import{v as G}from"./v4-eb618527.js";import{_ as J}from"./_plugin-vue_export-helper-c27b6911.js";import"./Common-74b424b5.js";const Q={class:"b-currency-field"},W={class:"ds-relative"},X={key:0,class:"b-currency-field__prepend-icon ds-absolute ds-left-3 ds-top-0 ds-z-[1] ds-flex ds-h-full ds-cursor-pointer ds-items-center hover:ds-text-primary-t"},Y=["id","autocomplete","disabled","placeholder","readonly"],Z={key:1,class:"b-currency-field__append-icon ds-absolute ds-right-3 ds-top-0 ds-z-[1] ds-flex ds-h-full ds-cursor-pointer ds-items-center hover:ds-text-primary-t"},q=$({__name:"BCurrencyField",props:{inputId:{default:""},inputCssClass:{default:""},modelValue:{},label:{default:""},validationRules:{default:void 0},placeholder:{default:""},autocomplete:{type:Boolean,default:!1},required:{type:Boolean,default:!1},requiredErrorMessage:{default:""},disabled:{type:Boolean,default:!1},readonly:{type:Boolean,default:!1},hideDetails:{type:Boolean,default:!1},locale:{default:m["vi-VN"]}},emits:["press:enter","update:modelValue"],setup(o,{emit:d}){const a=o,f=d;let s;const{t:B}=H(),y=k(null),x={validateRule:e=>!!(e&&(e!=null&&e.trim())),errorMessage:()=>a.requiredErrorMessage||B("ds.global.field_required")},u=n(()=>a.inputId||`id-${G()}`),r=n({get(){return a.modelValue},set(e){f("update:modelValue",e)}}),F=n(()=>[{"ds-cursor-not-allowed ds-bg-[#f2f2f2] ds-text-black/[0.4]":a.disabled,"ds-text-black/[0.85]":!a.disabled,"ds-border-error focus:ds-ring-1 focus:ds-ring-error":!i.value.valid,"ds-border-black/[0.1] focus:ds-border-focus focus:ds-ring-1 focus:ds-ring-focus":i.value.valid},a.inputCssClass]),S=n(()=>{let e=[];return a.required&&e.push(x),a.validationRules&&(e=e.concat(a.validationRules)),e.length?e:void 0}),R=n(()=>a.locale==="en-US"?{mask:"$num",blocks:{num:{mask:Number,thousandsSeparator:" "}}}:[{mask:""},{mask:"num VND",lazy:!1,blocks:{num:{mask:Number,thousandsSeparator:" "}}}]),{validate:N,validationResult:i}=O(u.value,r,S.value);b(()=>a.locale,()=>{v()}),b(()=>a.modelValue,e=>{e!=s.unmaskedValue&&(s.unmaskedValue=e.toString())});const w=()=>{N()},M=()=>{f("press:enter")},D=()=>{r.value=typeof r.value=="number"?+s.unmaskedValue:s.unmaskedValue},v=()=>{s&&s.destroy(),s=P(y.value,R.value),s.on("accept",D)};return E(()=>{v(),s.unmaskedValue=r.value.toString()}),(e,ee)=>(l(),p("div",Q,[U(T,{id:u.value,label:e.label,required:e.required},null,8,["id","label","required"]),g("div",W,[e.$slots.prependIcon?(l(),p("div",X,[h(e.$slots,"prependIcon",{},void 0,!0)])):c("",!0),g("input",{id:u.value,ref_key:"inputRef",ref:y,autocomplete:a.autocomplete?"on":"off",class:z([F.value,"ds-block ds-h-[40px] ds-w-full ds-rounded-lg ds-border ds-px-3 ds-text-sm ds-drop-shadow-light"]),disabled:a.disabled,placeholder:a.placeholder,readonly:a.readonly,onKeyup:[w,A(M,["enter"])]},null,42,Y),e.$slots.appendIcon?(l(),p("div",Z,[h(e.$slots,"appendIcon",{},void 0,!0)])):c("",!0)]),e.hideDetails?c("",!0):(l(),L(j,{key:0,"error-message":K(i).errorMessage(),class:"ds-mt-1"},null,8,["error-message"]))]))}});const C=J(q,[["__scopeId","data-v-5cbc4bba"]]);q.__docgenInfo={exportName:"default",displayName:"BCurrencyField",description:"",tags:{},props:[{name:"inputId",required:!1,type:{name:"string"},defaultValue:{func:!1,value:"''"}},{name:"inputCssClass",required:!1,type:{name:"string"},defaultValue:{func:!1,value:"''"}},{name:"modelValue",description:"Value can be number or string",required:!0,type:{name:"union",elements:[{name:"number"},{name:"string"}]}},{name:"label",required:!1,type:{name:"string"},defaultValue:{func:!1,value:"''"}},{name:"validationRules",required:!1,type:{name:"Array",elements:[{name:"ValidationRule"}]},defaultValue:{func:!1,value:"undefined"}},{name:"placeholder",required:!1,type:{name:"string"},defaultValue:{func:!1,value:"''"}},{name:"autocomplete",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"required",description:"Validate if the field is left empty.",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"requiredErrorMessage",required:!1,type:{name:"string"},defaultValue:{func:!1,value:"''"}},{name:"disabled",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"readonly",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"hideDetails",description:"Hide the validation error message.",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"locale",description:"Locale of the currency",required:!1,type:{name:"TSLiteralType"},defaultValue:{func:!1,value:"SupportedLocale['vi-VN']"}}],events:[{name:"press:enter",description:'User presses "enter" key',properties:[{type:{names:["mixed"]},description:"e"}],tags:[{title:"param",type:{name:"mixed"},description:"e"}]},{name:"update:modelValue",type:{names:["union"],elements:[{name:"number"},{name:"string"}]},description:"Update value, param <code>value: number | string</code>",properties:[{type:{names:["mixed"]},description:"e"},{type:{names:["mixed"]},name:"value"}],tags:[{title:"param",type:{name:"mixed"},description:"e"},{title:"param",type:{name:"mixed"},name:"value"}]}],slots:[{name:"prependIcon"},{name:"appendIcon"}],sourceFiles:["/home/runner/work/design-system/design-system/src/components/BCurrencyField.vue"]};const pe={title:"Components/CurrencyField",parameters:{docs:{description:{component:"The <code>BCurrencyField</code> component is used for inputting money."}}},component:C,tags:["autodocs"],argTypes:{locale:{control:"select",options:Object.values(m)},prependIcon:{control:"text",description:"Prepend icon"},appendIcon:{control:"text",description:"Append icon"}},args:{inputId:"",inputCssClass:"",validationRules:void 0,label:"",placeholder:"",autocomplete:!1,disabled:!1,readonly:!1,required:!1,requiredErrorMessage:"",hideDetails:!1}},t={render:o=>({components:{BCurrencyField:C},setup(){const d=k(1e6);return{args:o,amount:d}},template:`
      <BCurrencyField v-bind="args" v-model="amount">
        <template v-if="args.prependIcon" #prependIcon><span v-html="args.prependIcon" /></template>
        <template v-if="args.appendIcon" #appendIcon><span v-html="args.appendIcon" /></template>
      </BCurrencyField>
      <div style="font-size: 0.75rem; color: gray; margin-top: 1rem">
        <b>FontAwesome v6.1.0 - Solid</b> has been imported already & can be used for demo.
      </div>
    `}),args:{prependIcon:'<i class="fa-solid fa-money-bills" />',appendIcon:"",locale:m["en-US"]}};var _,V,I;t.parameters={...t.parameters,docs:{...(_=t.parameters)==null?void 0:_.docs,source:{originalSource:`{
  render: (args: any) => ({
    components: {
      BCurrencyField
    },
    setup() {
      const amount = ref(1000000);
      return {
        args,
        amount
      };
    },
    template: \`
      <BCurrencyField v-bind="args" v-model="amount">
        <template v-if="args.prependIcon" #prependIcon><span v-html="args.prependIcon" /></template>
        <template v-if="args.appendIcon" #appendIcon><span v-html="args.appendIcon" /></template>
      </BCurrencyField>
      <div style="font-size: 0.75rem; color: gray; margin-top: 1rem">
        <b>FontAwesome v6.1.0 - Solid</b> has been imported already & can be used for demo.
      </div>
    \`
  }),
  args: {
    prependIcon: '<i class="fa-solid fa-money-bills" />',
    appendIcon: '',
    locale: SupportedLocale['en-US']
  }
}`,...(I=(V=t.parameters)==null?void 0:V.docs)==null?void 0:I.source}}};const ce=["Default"];export{t as Default,ce as __namedExportsOrder,pe as default};
