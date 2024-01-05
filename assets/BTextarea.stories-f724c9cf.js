import{_ as s}from"./BTextarea-b415844a.js";import{e as l}from"./vue.esm-bundler-29df2e62.js";import"./Validation-5669da51.js";import"./Common-43134899.js";import"./vue-i18n.esm-bundler-152c8982.js";import"./BErrorMessage-4d077c5c.js";import"./BLabel-57c6859e.js";import"./v4-a960c1f4.js";const g={title:"Components/Textarea",component:s,tags:["autodocs"],args:{inputId:"",inputCssClass:"",validationRules:void 0,label:"",placeholder:"",autocomplete:!1,disabled:!1,readonly:!1,rows:3,required:!1,requiredErrorMessage:"",hideDetails:!1}},e={render:n=>({components:{BTextarea:s},setup(){const o=l("");return{args:n,text:o}},template:`
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
