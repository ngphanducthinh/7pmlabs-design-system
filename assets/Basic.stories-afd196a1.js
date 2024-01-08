import{_ as n}from"./BTextarea-a5695a53.js";import{B as i}from"./BTextField-4bf88596.js";import{e as l}from"./vue.esm-bundler-29df2e62.js";import{_ as s}from"./FormValidationExample-379433fc.js";import"./Validation-5669da51.js";import"./Common-43134899.js";import"./vue-i18n.esm-bundler-152c8982.js";import"./BErrorMessage-f3a23431.js";import"./BLabel-57c6859e.js";import"./v4-a960c1f4.js";import"./_plugin-vue_export-helper-c27b6911.js";import"./BButton-3c0b0fdc.js";import"./Enums-25996506.js";const N={title:"FormValidation/Basic",component:s,tags:["autodocs"],args:{}},a={render:m=>({components:{FormValidationExample:s,BTextField:i,BTextarea:n},setup(){const o=l({firstName:"",lastName:"",message:""});return{args:m,formData:o}},template:`
      <FormValidationExample v-bind="args">
        <div class="ds-flex-1">
          <BTextField v-model="formData.firstName" label="First name" required />
        </div>
        <div class="ds-flex-1">
          <BTextField v-model="formData.lastName" label="Last name" required />
        </div>
        <div class="ds-w-full">
          <BTextarea v-model="formData.message" label="Message" required />
        </div>
      </FormValidationExample>
    `}),args:{}};var e,r,t;a.parameters={...a.parameters,docs:{...(e=a.parameters)==null?void 0:e.docs,source:{originalSource:`{
  render: (args: any) => ({
    components: {
      FormValidationExample,
      BTextField,
      BTextarea
    },
    setup() {
      const formData = ref({
        firstName: '',
        lastName: '',
        message: ''
      });
      return {
        args,
        formData
      };
    },
    template: \`
      <FormValidationExample v-bind="args">
        <div class="ds-flex-1">
          <BTextField v-model="formData.firstName" label="First name" required />
        </div>
        <div class="ds-flex-1">
          <BTextField v-model="formData.lastName" label="Last name" required />
        </div>
        <div class="ds-w-full">
          <BTextarea v-model="formData.message" label="Message" required />
        </div>
      </FormValidationExample>
    \`
  }),
  args: {}
}`,...(t=(r=a.parameters)==null?void 0:r.docs)==null?void 0:t.source}}};const _=["Default"];export{a as Default,_ as __namedExportsOrder,N as default};
