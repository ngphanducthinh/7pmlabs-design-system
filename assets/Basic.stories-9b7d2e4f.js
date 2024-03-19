import{_ as n}from"./BTextarea-04fb101d.js";import{B as i}from"./BTextField-afd02035.js";import{e as l}from"./vue.esm-bundler-109c6e5d.js";import{_ as s}from"./FormValidationExample-3d35be67.js";import"./Validation-fee331a1.js";import"./Common-c3b475f1.js";import"./vue-i18n-cb82ae8c.js";import"./BErrorMessage-d03d9705.js";import"./BLabel-601fac8d.js";import"./v4-4a60fe23.js";import"./_plugin-vue_export-helper-c27b6911.js";import"./BButton-cba7b1f6.js";import"./Enums-5b02df9b.js";const N={title:"FormValidation/Basic",component:s,tags:["autodocs"],args:{}},a={render:m=>({components:{FormValidationExample:s,BTextField:i,BTextarea:n},setup(){const o=l({firstName:"",lastName:"",message:""});return{args:m,formData:o}},template:`
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
