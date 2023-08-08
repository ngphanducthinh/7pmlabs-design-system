import{_ as i}from"./BTextarea-a37dc055.js";import{_ as l}from"./BTextField-330fcc50.js";import{b as d}from"./vue.esm-bundler-0b71992c.js";import{_ as t}from"./FormValidationExample-2a2a58bd.js";import"./Validation-bd4eb4eb.js";import"./vue-i18n.esm-bundler-ed524c22.js";import"./BErrorMessage-f720f12c.js";import"./BLabel-eed86ef0.js";import"./v4-a960c1f4.js";import"./BButton-de0e07d3.js";import"./Enums-c45a7702.js";const _={title:"FormValidation/Basic",component:t,tags:["autodocs"],args:{}},a={render:m=>({components:{FormValidationExample:t,BTextField:l,BTextarea:i},setup(){const o=d({firstName:"",lastName:"",message:""});return{args:m,formData:o}},template:`
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
//# sourceMappingURL=Basic.stories-68ed9633.js.map
