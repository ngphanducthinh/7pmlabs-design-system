import{_ as i}from"./BTextarea-f2813e0a.js";import{_ as l}from"./BTextField-13084bf4.js";import{b as d}from"./vue.esm-bundler-d836205b.js";import{_ as s}from"./FormValidationExample-b551d8c6.js";import"./Validation-68c07edf.js";import"./Common-43134899.js";import"./vue-i18n.esm-bundler-b6b8dfca.js";import"./BErrorMessage-3ca20143.js";import"./BLabel-04f8c997.js";import"./v4-a960c1f4.js";import"./BButton-200c88a1.js";import"./Enums-6a2836ab.js";const T={title:"FormValidation/Basic",component:s,tags:["autodocs"],args:{}},a={render:m=>({components:{FormValidationExample:s,BTextField:l,BTextarea:i},setup(){const o=d({firstName:"",lastName:"",message:""});return{args:m,formData:o}},template:`
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
//# sourceMappingURL=Basic.stories-61746e9c.js.map
