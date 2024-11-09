import{_ as i}from"./BTextarea-35d43a39.js";import{B as l}from"./BTextField-87578f2d.js";import{a as d}from"./vue.esm-bundler-ceeda665.js";import{_ as s}from"./FormValidationExample-6c9d9e11.js";import"./Validation-e4311cdc.js";import"./Common-74b424b5.js";import"./vue-i18n-5bf62172.js";import"./BErrorMessage-4dbabbe9.js";import"./BLabel-93eef36b.js";import"./v4-eb618527.js";import"./_plugin-vue_export-helper-c27b6911.js";import"./BButton-e2b689c0.js";import"./Enums-b5cac340.js";const N={title:"FormValidation/Basic",component:s,tags:["autodocs"],args:{}},a={render:m=>({components:{FormValidationExample:s,BTextField:l,BTextarea:i},setup(){const o=d({firstName:"",lastName:"",message:""});return{args:m,formData:o}},template:`
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
