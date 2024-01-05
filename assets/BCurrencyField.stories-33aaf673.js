import{j as $,e as I,k as n,z,B as D,o as l,b as u,s as E,l as v,d as b,m as p,n as S,K,x as A,u as U}from"./vue.esm-bundler-29df2e62.js";import{_ as O}from"./BLabel-57c6859e.js";import{u as j}from"./Validation-5669da51.js";import{_ as H}from"./BErrorMessage-4d077c5c.js";import{u as P}from"./vue-i18n.esm-bundler-152c8982.js";import{I as T}from"./imask-7.1.3-80c1e5b4.js";import{v as G}from"./v4-a960c1f4.js";import{_ as J}from"./_plugin-vue_export-helper-c27b6911.js";import"./Common-43134899.js";const L={class:"b-currency-field"},Q={class:"ds-relative"},W={key:0,class:"b-currency-field__prepend-icon ds-absolute ds-left-3 ds-top-0 ds-z-[1] ds-flex ds-h-full ds-cursor-pointer ds-items-center hover:ds-text-primary-t"},X=["id","autocomplete","disabled","placeholder","readonly","onKeyup"],Y={key:1,class:"b-currency-field__append-icon ds-absolute ds-right-3 ds-top-0 ds-z-[1] ds-flex ds-h-full ds-cursor-pointer ds-items-center hover:ds-text-primary-t"},V=$({__name:"BCurrencyField",props:{inputId:{default:""},inputCssClass:{default:""},modelValue:{},label:{default:""},validationRules:{default:void 0},placeholder:{default:""},autocomplete:{type:Boolean,default:!1},required:{type:Boolean,default:!1},requiredErrorMessage:{default:""},disabled:{type:Boolean,default:!1},hideDetails:{type:Boolean,default:!1}},emits:["press:enter","update:modelValue"],setup(o,{emit:r}){const a=o;let s;const{t:C,locale:c}=P(),m=I(null),q={validateRule:e=>!!(e&&(e!=null&&e.trim())),errorMessage:()=>a.requiredErrorMessage||C("ds.global.field_required")},d=n(()=>a.inputId||`id-${G()}`),f=n({get(){return a.modelValue},set(e){r("update:modelValue",e)}}),B=n(()=>[{"ds-cursor-not-allowed ds-bg-[#f2f2f2] ds-text-black/[0.4]":a.disabled,"ds-text-black/[0.85]":!a.disabled,"ds-border-error focus:ds-ring-1 focus:ds-ring-error":!i.value.valid,"ds-border-black/[0.1] focus:ds-border-focus focus:ds-ring-1 focus:ds-ring-focus":i.value.valid},a.inputCssClass]),x=n(()=>{let e=[];return a.required&&e.push(q),a.validationRules&&(e=e.concat(a.validationRules)),e.length?e:void 0}),F=n(()=>c.value==="en-US"?{mask:"$num",blocks:{num:{mask:Number,thousandsSeparator:" "}}}:[{mask:""},{mask:"num VND",lazy:!1,blocks:{num:{mask:Number,thousandsSeparator:" "}}}]),{validate:R,validationResult:i}=j(d.value,f,x.value);z(c,()=>{y()});const M=()=>{R()},w=()=>{r("press:enter")},N=()=>{f.value=+s.unmaskedValue},y=()=>{s&&s.destroy(),s=T(m.value,F.value),s.on("accept",N)};return D(()=>{y()}),(e,Z)=>(l(),u("div",L,[E(O,{id:d.value,label:e.label,required:e.required},null,8,["id","label","required"]),v("div",Q,[e.$slots.prependIcon?(l(),u("div",W,[b(e.$slots,"prependIcon",{},void 0,!0)])):p("",!0),v("input",{id:d.value,ref_key:"inputRef",ref:m,autocomplete:a.autocomplete?"on":"off",class:S([B.value,"ds-block ds-h-[40px] ds-w-full ds-rounded-lg ds-border ds-px-3 ds-text-sm ds-drop-shadow-light"]),disabled:a.disabled,placeholder:a.placeholder,readonly:a.readonly,onKeyup:[M,K(w,["enter"])]},null,42,X),e.$slots.appendIcon?(l(),u("div",Y,[b(e.$slots,"appendIcon",{},void 0,!0)])):p("",!0)]),e.hideDetails?p("",!0):(l(),A(H,{key:0,"error-message":U(i).errorMessage(),class:"ds-mt-1"},null,8,["error-message"]))]))}});const k=J(V,[["__scopeId","data-v-764d3bd1"]]);V.__docgenInfo={exportName:"default",displayName:"BCurrencyField",description:"",tags:{},props:[{name:"inputId",required:!1,type:{name:"string"},defaultValue:{func:!1,value:"''"}},{name:"inputCssClass",required:!1,type:{name:"string"},defaultValue:{func:!1,value:"''"}},{name:"modelValue",required:!0,type:{name:"number"}},{name:"label",required:!1,type:{name:"string"},defaultValue:{func:!1,value:"''"}},{name:"validationRules",required:!1,type:{name:"Array",elements:[{name:"ValidationRule"}]},defaultValue:{func:!1,value:"undefined"}},{name:"placeholder",required:!1,type:{name:"string"},defaultValue:{func:!1,value:"''"}},{name:"autocomplete",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"required",description:"Validate if the field is left empty.",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"requiredErrorMessage",required:!1,type:{name:"string"},defaultValue:{func:!1,value:"''"}},{name:"disabled",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"hideDetails",description:"Hide the validation error message.",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"readonly",defaultValue:{func:!1,value:"false"}}],events:[{name:"press:enter",description:'User presses "enter" key',properties:[{type:{names:["mixed"]},description:"e"}],tags:[{title:"param",type:{name:"mixed"},description:"e"}]},{name:"update:modelValue",type:{names:["number"]},description:"Update value",properties:[{type:{names:["mixed"]},description:"e"},{type:{names:["mixed"]},name:"value"}],tags:[{title:"param",type:{name:"mixed"},description:"e"},{title:"param",type:{name:"mixed"},name:"value"}]}],slots:[{name:"prependIcon"},{name:"appendIcon"}],sourceFiles:["/home/runner/work/design-system/design-system/src/components/BCurrencyField.vue"]};const ie={title:"Components/CurrencyField",component:k,tags:["autodocs"],argTypes:{prependIcon:{control:"text",description:"Prepend icon"},appendIcon:{control:"text",description:"Append icon"}},args:{inputId:"",inputCssClass:"",validationRules:void 0,label:"",placeholder:"",autocomplete:!1,disabled:!1,readonly:!1,required:!1,requiredErrorMessage:"",hideDetails:!1}},t={render:o=>({components:{BCurrencyField:k},setup(){const r=I(0);return{args:o,amount:r}},template:`
      <BCurrencyField v-bind="args" v-model="amount">
        <template v-if="args.prependIcon" #prependIcon><span v-html="args.prependIcon" /></template>
        <template v-if="args.appendIcon" #appendIcon><span v-html="args.appendIcon" /></template>
      </BCurrencyField>
      <div style="font-size: 0.75rem; color: gray; margin-top: 1rem">
        <b>FontAwesome v6.1.0 - Solid</b> has been imported already & can be used for demo.
      </div>
    `}),args:{modelValue:"",prependIcon:'<i class="fa-solid fa-money-bills" />',appendIcon:""}};var g,h,_;t.parameters={...t.parameters,docs:{...(g=t.parameters)==null?void 0:g.docs,source:{originalSource:`{
  render: (args: any) => ({
    components: {
      BCurrencyField
    },
    setup() {
      const amount = ref(0);
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
    modelValue: '',
    prependIcon: '<i class="fa-solid fa-money-bills" />',
    appendIcon: ''
  }
}`,...(_=(h=t.parameters)==null?void 0:h.docs)==null?void 0:_.source}}};const ue=["Default"];export{t as Default,ue as __namedExportsOrder,ie as default};
