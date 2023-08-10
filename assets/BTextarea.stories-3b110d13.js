import{_ as s}from"./BTextarea-824e890b.js";import{b as m}from"./vue.esm-bundler-c34c64cb.js";import"./Validation-0cf2dd16.js";import"./vue-i18n.esm-bundler-1f56b746.js";import"./BErrorMessage-91c905cc.js";import"./BLabel-e31bd763.js";import"./v4-a960c1f4.js";const x={title:"Components/Textarea",component:s,tags:["autodocs"],args:{inputId:"",inputCssClass:"",validationRules:void 0,label:"",placeholder:"",autocomplete:!1,disabled:!1,readonly:!1,rows:3,required:!1,requiredErrorMessage:"",hideDetails:!1}},e={render:o=>({components:{BTextarea:s},setup(){const l=m("");return{args:o,text:l}},template:`
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
}`,...(r=(a=e.parameters)==null?void 0:a.docs)==null?void 0:r.source}}};const g=["Default"];export{e as Default,g as __namedExportsOrder,x as default};
//# sourceMappingURL=BTextarea.stories-3b110d13.js.map
