import{_ as s}from"./BTextarea-97b43357.js";import{e as l}from"./vue.esm-bundler-3f3ee96a.js";import"./Validation-8ed78fc9.js";import"./Common-43134899.js";import"./vue-i18n.esm-bundler-968cf724.js";import"./BErrorMessage-224a7330.js";import"./BLabel-e04a7706.js";import"./v4-a960c1f4.js";const g={title:"Components/Textarea",component:s,tags:["autodocs"],args:{inputId:"",inputCssClass:"",validationRules:void 0,label:"",placeholder:"",autocomplete:!1,disabled:!1,readonly:!1,rows:3,required:!1,requiredErrorMessage:"",hideDetails:!1}},e={render:n=>({components:{BTextarea:s},setup(){const o=l("");return{args:n,text:o}},template:`
      <BTextarea v-bind="args"  v-model="text" />
    `}),args:{modelValue:""}};var t,r,a;e.parameters={...e.parameters,docs:{...(t=e.parameters)==null?void 0:t.docs,source:{originalSource:`{
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
}`,...(a=(r=e.parameters)==null?void 0:r.docs)==null?void 0:a.source}}};const v=["Default"];export{e as Default,v as __namedExportsOrder,g as default};
