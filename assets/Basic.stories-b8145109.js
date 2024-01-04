import{_ as o}from"./BTextarea-97b43357.js";import{_ as i}from"./BTextField-8a9e8160.js";import{e as l}from"./vue.esm-bundler-3f3ee96a.js";import{_ as s}from"./FormValidationExample-e3697aff.js";import"./Validation-8ed78fc9.js";import"./Common-43134899.js";import"./vue-i18n.esm-bundler-968cf724.js";import"./BErrorMessage-224a7330.js";import"./BLabel-e04a7706.js";import"./v4-a960c1f4.js";import"./BButton-3c78e856.js";import"./Enums-25996506.js";const T={title:"FormValidation/Basic",component:s,tags:["autodocs"],args:{}},a={render:m=>({components:{FormValidationExample:s,BTextField:i,BTextarea:o},setup(){const n=l({firstName:"",lastName:"",message:""});return{args:m,formData:n}},template:`
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
}`,...(t=(r=a.parameters)==null?void 0:r.docs)==null?void 0:t.source}}};const b=["Default"];export{a as Default,b as __namedExportsOrder,T as default};
