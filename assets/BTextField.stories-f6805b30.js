import{_ as o}from"./BTextField-e68e2f20.js";import{b as n}from"./vue.esm-bundler-d836205b.js";import"./Validation-68c07edf.js";import"./Common-43134899.js";import"./vue-i18n.esm-bundler-b6b8dfca.js";import"./BErrorMessage-3ca20143.js";import"./BLabel-04f8c997.js";import"./v4-a960c1f4.js";const g={title:"Components/TextField",component:o,tags:["autodocs"],argTypes:{},args:{inputId:"",inputCssClass:"",validationRules:void 0,label:"",prependIcon:"",hidePrependIcon:!1,appendIcon:"",hideAppendIcon:!1,placeholder:"",autocomplete:!1,disabled:!1,readonly:!1,type:"text",required:!1,requiredErrorMessage:"",hideDetails:!1,inputHandler:void 0,inputmode:"text"}},e={render:s=>({components:{BTextField:o},setup(){const d=n("");return{args:s,text:d}},template:`
      <BTextField v-bind="args"  v-model="text" />
    `}),args:{modelValue:""}};var t,r,a;e.parameters={...e.parameters,docs:{...(t=e.parameters)==null?void 0:t.docs,source:{originalSource:`{
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
}`,...(a=(r=e.parameters)==null?void 0:r.docs)==null?void 0:a.source}}};const v=["Default"];export{e as Default,v as __namedExportsOrder,g as default};
//# sourceMappingURL=BTextField.stories-f6805b30.js.map
