import{_ as a}from"./BTextField-d989bbc2.js";import{b as n}from"./vue.esm-bundler-f0a4de28.js";import"./Validation-4b68e7d0.js";import"./Common-43134899.js";import"./vue-i18n.esm-bundler-45575b10.js";import"./BErrorMessage-4230966b.js";import"./BLabel-0c4df10b.js";import"./v4-a960c1f4.js";const g={title:"Components/TextField",component:a,tags:["autodocs"],argTypes:{},args:{inputId:"",inputCssClass:"",validationRules:void 0,label:"",prependIcon:"",hidePrependIcon:!1,appendIcon:"",hideAppendIcon:!1,placeholder:"",autocomplete:!1,disabled:!1,readonly:!1,type:"text",required:!1,requiredErrorMessage:"",hideDetails:!1,keyPressFn:void 0,inputmode:"text"}},e={render:o=>({components:{BTextField:a},setup(){const d=n("");return{args:o,text:d}},template:`
      <BTextField v-bind="args"  v-model="text" />
    `}),args:{modelValue:""}};var t,r,s;e.parameters={...e.parameters,docs:{...(t=e.parameters)==null?void 0:t.docs,source:{originalSource:`{
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
}`,...(s=(r=e.parameters)==null?void 0:r.docs)==null?void 0:s.source}}};const v=["Default"];export{e as Default,v as __namedExportsOrder,g as default};
//# sourceMappingURL=BTextField.stories-da18e8ad.js.map
