import{_ as o}from"./BTextarea-7df9cea7.js";import{b as l}from"./vue.esm-bundler-25cc370e.js";import"./Validation-8b897068.js";import"./Common-c3b475f1.js";import"./vue-i18n.esm-bundler-46b98d98.js";import"./BErrorMessage-1944ec7b.js";import"./BLabel-92e0795f.js";import"./v4-a960c1f4.js";const g={title:"Components/Textarea",parameters:{docs:{description:{component:"The <code>BTextarea</code> component is used for collecting large amounts of textual data."}}},component:o,tags:["autodocs"],args:{inputId:"",inputCssClass:"",validationRules:void 0,label:"",placeholder:"",autocomplete:!1,disabled:!1,readonly:!1,rows:3,required:!1,requiredErrorMessage:"",hideDetails:!1}},e={render:s=>({components:{BTextarea:o},setup(){const n=l("");return{args:s,text:n}},template:`
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
