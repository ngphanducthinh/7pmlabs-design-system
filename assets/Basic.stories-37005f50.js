import{_ as o}from"./BTextarea-6ba4225f.js";import{_ as i}from"./BTextField-ffe4bb48.js";import{e as l}from"./vue.esm-bundler-4cd6df52.js";import{_ as s}from"./FormValidationExample-512883df.js";import"./Validation-31c7d14d.js";import"./Common-43134899.js";import"./vue-i18n.esm-bundler-fc12af0c.js";import"./BErrorMessage-c4627125.js";import"./BLabel-9f341f76.js";import"./v4-a960c1f4.js";import"./BButton-5b7f8653.js";import"./Enums-25996506.js";const T={title:"FormValidation/Basic",component:s,tags:["autodocs"],args:{}},a={render:m=>({components:{FormValidationExample:s,BTextField:i,BTextarea:o},setup(){const n=l({firstName:"",lastName:"",message:""});return{args:m,formData:n}},template:`
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
