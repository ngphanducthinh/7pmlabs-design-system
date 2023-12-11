import{_ as m}from"./BTextarea-f2813e0a.js";import{_ as o}from"./BTextField-1dc8cc95.js";import{b as v}from"./vue.esm-bundler-d836205b.js";import{_ as r}from"./FormValidationExample-bc63dd2a.js";import"./Validation-68c07edf.js";import"./Common-43134899.js";import"./vue-i18n.esm-bundler-b6b8dfca.js";import"./BErrorMessage-3ca20143.js";import"./BLabel-04f8c997.js";import"./v4-a960c1f4.js";import"./BButton-6b09d985.js";import"./Enums-6a2836ab.js";const D={title:"FormValidation/Advanced",component:r,tags:["autodocs"],args:{}},a={render:s=>({components:{FormValidationExample:r,BTextField:o,BTextarea:m},setup(){const d=v({firstName:"",lastName:"",email:"",age:18,message:""});return{args:s,formData:d,validateEmailValid:{validateRule:e=>e?/^\w+([\\.-]?\w+)*@\w+([\\.-]?\w+)*(\.\w{2,3})+$/.test(e):!0,errorMessage:()=>"Email is invalid, please check again"},validateAgeMin:{validateRule:e=>e?e>=18:!0,errorMessage:()=>"Age must be greater than or equal to 18"},validateAgeMax:{validateRule:e=>e?e<=65:!0,errorMessage:()=>"Age must be less than or equal to 65"}}},template:`
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
//# sourceMappingURL=Advanced.stories-57f242fe.js.map
