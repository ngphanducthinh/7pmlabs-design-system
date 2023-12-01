import{_ as s}from"./BTextarea-beebe846.js";import{b as m}from"./vue.esm-bundler-d836205b.js";import"./Validation-68c07edf.js";import"./Common-43134899.js";import"./vue-i18n.esm-bundler-b6b8dfca.js";import"./BErrorMessage-3ca20143.js";import"./BLabel-04f8c997.js";import"./v4-a960c1f4.js";const g={title:"Components/Textarea",component:s,tags:["autodocs"],args:{inputId:"",inputCssClass:"",validationRules:void 0,label:"",placeholder:"",autocomplete:!1,disabled:!1,readonly:!1,rows:3,required:!1,requiredErrorMessage:"",hideDetails:!1}},e={render:o=>({components:{BTextarea:s},setup(){const l=m("");return{args:o,text:l}},template:`
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
//# sourceMappingURL=BTextarea.stories-3df9caed.js.map
