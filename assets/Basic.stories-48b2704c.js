import{_ as n}from"./BTextarea-63bd5d65.js";import{B as i}from"./BTextField-bd3545e8.js";import{a as l}from"./vue.esm-bundler-d9761a11.js";import{_ as s}from"./FormValidationExample-529b182d.js";import"./Validation-7273bacc.js";import"./Common-74b424b5.js";import"./vue-i18n-adecd10a.js";import"./BErrorMessage-fca9dec1.js";import"./BLabel-e58d6a83.js";import"./v4-4a60fe23.js";import"./_plugin-vue_export-helper-c27b6911.js";import"./BButton-f4907497.js";import"./Enums-b5cac340.js";const N={title:"FormValidation/Basic",component:s,tags:["autodocs"],args:{}},a={render:m=>({components:{FormValidationExample:s,BTextField:i,BTextarea:n},setup(){const o=l({firstName:"",lastName:"",message:""});return{args:m,formData:o}},template:`
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
