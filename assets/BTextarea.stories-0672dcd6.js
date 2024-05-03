import{_ as o}from"./BTextarea-63bd5d65.js";import{a as l}from"./vue.esm-bundler-d9761a11.js";import"./Validation-7273bacc.js";import"./Common-74b424b5.js";import"./vue-i18n-adecd10a.js";import"./BErrorMessage-fca9dec1.js";import"./BLabel-e58d6a83.js";import"./v4-4a60fe23.js";const g={title:"Components/Textarea",parameters:{docs:{description:{component:"The <code>BTextarea</code> component is used for collecting large amounts of textual data."}}},component:o,tags:["autodocs"],args:{inputId:"",inputCssClass:"",validationRules:void 0,label:"",placeholder:"",autocomplete:!1,disabled:!1,readonly:!1,rows:3,required:!1,requiredErrorMessage:"",hideDetails:!1}},e={render:s=>({components:{BTextarea:o},setup(){const n=l("");return{args:s,text:n}},template:`
      <BTextarea v-bind="args"  v-model="text" />
    `}),args:{modelValue:""}};var t,a,r;e.parameters={...e.parameters,docs:{...(t=e.parameters)==null?void 0:t.docs,source:{originalSource:`{
  render: (args: any) => ({
    components: {
      BTextarea
    },
    setup() {
      const text = ref('');
      return {
        args,
        text
      };
    },
    template: \`
      <BTextarea v-bind="args"  v-model="text" />
    \`
  }),
  args: {
    modelValue: ''
  }
}`,...(r=(a=e.parameters)==null?void 0:a.docs)==null?void 0:r.source}}};const T=["Default"];export{e as Default,T as __namedExportsOrder,g as default};
