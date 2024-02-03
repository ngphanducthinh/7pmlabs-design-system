import{_ as o}from"./BTextarea-ca572510.js";import{e as l}from"./vue.esm-bundler-29df2e62.js";import"./Validation-8439caab.js";import"./Common-c3b475f1.js";import"./vue-i18n.esm-bundler-152c8982.js";import"./BErrorMessage-f3a23431.js";import"./BLabel-61033a65.js";import"./v4-a960c1f4.js";const g={title:"Components/Textarea",parameters:{docs:{description:{component:"The <code>BTextarea</code> component is used for collecting large amounts of textual data."}}},component:o,tags:["autodocs"],args:{inputId:"",inputCssClass:"",validationRules:void 0,label:"",placeholder:"",autocomplete:!1,disabled:!1,readonly:!1,rows:3,required:!1,requiredErrorMessage:"",hideDetails:!1}},e={render:s=>({components:{BTextarea:o},setup(){const n=l("");return{args:s,text:n}},template:`
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
