import{_ as a}from"./BTextField-8a9e8160.js";import{e as d}from"./vue.esm-bundler-3f3ee96a.js";import"./Validation-8ed78fc9.js";import"./Common-43134899.js";import"./vue-i18n.esm-bundler-968cf724.js";import"./BErrorMessage-224a7330.js";import"./BLabel-e04a7706.js";import"./v4-a960c1f4.js";const g={title:"Components/TextField",component:a,tags:["autodocs"],argTypes:{},args:{inputId:"",inputCssClass:"",validationRules:void 0,label:"",prependIcon:"",hidePrependIcon:!1,appendIcon:"",hideAppendIcon:!1,placeholder:"",autocomplete:!1,disabled:!1,readonly:!1,type:"text",required:!1,requiredErrorMessage:"",hideDetails:!1,inputHandler:void 0,inputmode:"text"}},e={render:o=>({components:{BTextField:a},setup(){const s=d("");return{args:o,text:s}},template:`
      <BTextField v-bind="args"  v-model="text" />
    `}),args:{modelValue:""}};var t,n,r;e.parameters={...e.parameters,docs:{...(t=e.parameters)==null?void 0:t.docs,source:{originalSource:`{
  render: (args: any) => ({
    components: {
      BTextField
    },
    setup() {
      const text = ref('');
      return {
        args,
        text
      };
    },
    template: \`
      <BTextField v-bind="args"  v-model="text" />
    \`
  }),
  args: {
    modelValue: ''
  }
}`,...(r=(n=e.parameters)==null?void 0:n.docs)==null?void 0:r.source}}};const v=["Default"];export{e as Default,v as __namedExportsOrder,g as default};
