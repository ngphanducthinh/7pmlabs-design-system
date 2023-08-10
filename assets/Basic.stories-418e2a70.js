import{_ as i}from"./BTextarea-824e890b.js";import{_ as l}from"./BTextField-1a0a19e8.js";import{b as d}from"./vue.esm-bundler-c34c64cb.js";import{_ as t}from"./FormValidationExample-c544a18d.js";import"./Validation-0cf2dd16.js";import"./vue-i18n.esm-bundler-1f56b746.js";import"./BErrorMessage-91c905cc.js";import"./BLabel-e31bd763.js";import"./v4-a960c1f4.js";import"./BButton-4df78522.js";import"./Enums-fb1fa8e1.js";const _={title:"FormValidation/Basic",component:t,tags:["autodocs"],args:{}},a={render:m=>({components:{FormValidationExample:t,BTextField:l,BTextarea:i},setup(){const o=d({firstName:"",lastName:"",message:""});return{args:m,formData:o}},template:`
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
    `}),args:{}};var e,r,s;a.parameters={...a.parameters,docs:{...(e=a.parameters)==null?void 0:e.docs,source:{originalSource:`{
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
}`,...(s=(r=a.parameters)==null?void 0:r.docs)==null?void 0:s.source}}};const T=["Default"];export{a as Default,T as __namedExportsOrder,_ as default};
//# sourceMappingURL=Basic.stories-418e2a70.js.map
