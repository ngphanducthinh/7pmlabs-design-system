import{_ as o}from"./BTextField-330fcc50.js";import{b as d}from"./vue.esm-bundler-0b71992c.js";import"./Validation-bd4eb4eb.js";import"./vue-i18n.esm-bundler-ed524c22.js";import"./BErrorMessage-f720f12c.js";import"./BLabel-eed86ef0.js";import"./v4-a960c1f4.js";const f={title:"Components/TextField",component:o,tags:["autodocs"],args:{inputId:"",inputCssClass:"",validationRules:void 0,label:"",prependIcon:"",hidePrependIcon:!1,appendIcon:"",hideAppendIcon:!1,placeholder:"",autocomplete:!1,disabled:!1,readonly:!1,type:"text",required:!1,requiredErrorMessage:"",hideDetails:!1,keyPressFn:void 0,inputmode:"text"}},e={render:r=>({components:{BTextField:o},setup(){const n=d("");return{args:r,text:n}},template:`
      <BTextField v-bind="args"  v-model="text" />
      <span class="ds-text-xs ds-text-gray-500">Can use <a class="ds-text-cyan-500" target="_blank" href="https://fontawesome.com/search?o=r&s=solid">FontAwesome icons</a> (v6.1.0)</span>
    `}),args:{modelValue:""}};var t,s,a;e.parameters={...e.parameters,docs:{...(t=e.parameters)==null?void 0:t.docs,source:{originalSource:`{
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
      <span class="ds-text-xs ds-text-gray-500">Can use <a class="ds-text-cyan-500" target="_blank" href="https://fontawesome.com/search?o=r&s=solid">FontAwesome icons</a> (v6.1.0)</span>
    \`
  }),
  args: {
    modelValue: ''
  }
}`,...(a=(s=e.parameters)==null?void 0:s.docs)==null?void 0:a.source}}};const g=["Default"];export{e as Default,g as __namedExportsOrder,f as default};
//# sourceMappingURL=BTextField.stories-ad25fe6b.js.map
