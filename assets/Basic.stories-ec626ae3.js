import{_ as i}from"./BTextarea-9131751c.js";import{_ as l}from"./BTextField-479914c9.js";import{b as d}from"./vue.esm-bundler-f0a4de28.js";import{_ as s}from"./FormValidationExample-2787aca3.js";import"./Validation-4b68e7d0.js";import"./Common-43134899.js";import"./vue-i18n.esm-bundler-45575b10.js";import"./BErrorMessage-94bbd499.js";import"./BLabel-60c969e3.js";import"./v4-a960c1f4.js";import"./BButton-d8984b10.js";import"./Enums-fb1fa8e1.js";const T={title:"FormValidation/Basic",component:s,tags:["autodocs"],args:{}},a={render:m=>({components:{FormValidationExample:s,BTextField:l,BTextarea:i},setup(){const o=d({firstName:"",lastName:"",message:""});return{args:m,formData:o}},template:`
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
//# sourceMappingURL=Basic.stories-ec626ae3.js.map
