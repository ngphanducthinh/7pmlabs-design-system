import{_ as n}from"./BTextarea-ac4823b9.js";import{B as i}from"./BTextField-8e51f06e.js";import{e as l}from"./vue.esm-bundler-0e9fd243.js";import{_ as s}from"./FormValidationExample-19ef9ce4.js";import"./Validation-b844a42e.js";import"./Common-c3b475f1.js";import"./vue-i18n-7b0268c7.js";import"./BErrorMessage-9f5a429c.js";import"./BLabel-41d4beb1.js";import"./v4-4a60fe23.js";import"./_plugin-vue_export-helper-c27b6911.js";import"./BButton-e1ecb006.js";import"./Enums-5b02df9b.js";const N={title:"FormValidation/Basic",component:s,tags:["autodocs"],args:{}},a={render:m=>({components:{FormValidationExample:s,BTextField:i,BTextarea:n},setup(){const o=l({firstName:"",lastName:"",message:""});return{args:m,formData:o}},template:`
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
