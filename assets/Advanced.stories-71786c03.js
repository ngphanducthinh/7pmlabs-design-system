import{_ as n}from"./BTextarea-6ba4225f.js";import{_ as m}from"./BTextField-839a1204.js";import{e as o}from"./vue.esm-bundler-4cd6df52.js";import{_ as r}from"./FormValidationExample-512883df.js";import"./Validation-31c7d14d.js";import"./Common-43134899.js";import"./vue-i18n.esm-bundler-fc12af0c.js";import"./BErrorMessage-c4627125.js";import"./BLabel-9f341f76.js";import"./v4-a960c1f4.js";import"./BButton-5b7f8653.js";import"./Enums-25996506.js";const D={title:"FormValidation/Advanced",component:r,tags:["autodocs"],args:{}},a={render:s=>({components:{FormValidationExample:r,BTextField:m,BTextarea:n},setup(){const d=o({firstName:"",lastName:"",email:"",age:18,message:""});return{args:s,formData:d,validateEmailValid:{validateRule:e=>e?/^\w+([\\.-]?\w+)*@\w+([\\.-]?\w+)*(\.\w{2,3})+$/.test(e):!0,errorMessage:()=>"Email is invalid, please check again"},validateAgeMin:{validateRule:e=>e?e>=18:!0,errorMessage:()=>"Age must be greater than or equal to 18"},validateAgeMax:{validateRule:e=>e?e<=65:!0,errorMessage:()=>"Age must be less than or equal to 65"}}},template:`
      <FormValidationExample v-bind="args">
        <div class="ds-flex-1">
          <BTextField v-model="formData.firstName" label="First name" required />
        </div>
        <div class="ds-flex-1">
          <BTextField v-model="formData.lastName" label="Last name" required />
        </div>
        <div class="ds-w-full">
          <BTextField v-model="formData.email" label="Email" required :validation-rules="[validateEmailValid]" />
        </div>
        <div class="ds-w-full">
          <BTextField v-model="formData.age" label="Age" type="number" :validation-rules="[validateAgeMin, validateAgeMax]" />
        </div>
        <div class="ds-w-full">
          <BTextarea v-model="formData.message" label="Message" required required-error-message="Message is required, please fill out this field!" />
        </div>
      </FormValidationExample>
    `}),args:{}};var l,i,t;a.parameters={...a.parameters,docs:{...(l=a.parameters)==null?void 0:l.docs,source:{originalSource:`{
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
        email: '',
        age: 18,
        message: ''
      });
      const validateEmailValid: ValidationRule = {
        validateRule: (val: string) => val ? /^\\w+([\\\\.-]?\\w+)*@\\w+([\\\\.-]?\\w+)*(\\.\\w{2,3})+$/.test(val) : true,
        errorMessage: () => 'Email is invalid, please check again'
      };
      const validateAgeMin: ValidationRule = {
        validateRule: (val: number) => val ? val >= 18 : true,
        errorMessage: () => 'Age must be greater than or equal to 18'
      };
      const validateAgeMax: ValidationRule = {
        validateRule: (val: number) => val ? val <= 65 : true,
        errorMessage: () => 'Age must be less than or equal to 65'
      };
      return {
        args,
        formData,
        validateEmailValid,
        validateAgeMin,
        validateAgeMax
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
          <BTextField v-model="formData.email" label="Email" required :validation-rules="[validateEmailValid]" />
        </div>
        <div class="ds-w-full">
          <BTextField v-model="formData.age" label="Age" type="number" :validation-rules="[validateAgeMin, validateAgeMax]" />
        </div>
        <div class="ds-w-full">
          <BTextarea v-model="formData.message" label="Message" required required-error-message="Message is required, please fill out this field!" />
        </div>
      </FormValidationExample>
    \`
  }),
  args: {}
}`,...(t=(i=a.parameters)==null?void 0:i.docs)==null?void 0:t.source}}};const B=["Default"];export{a as Default,B as __namedExportsOrder,D as default};
