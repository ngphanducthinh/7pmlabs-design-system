import{B as o}from"./BCheckbox-ddbc3cd8.js";import{b as r}from"./Enums-b5cac340.js";import"./vue.esm-bundler-ceeda665.js";import"./vue-i18n-5bf62172.js";import"./Validation-e4311cdc.js";import"./Common-74b424b5.js";import"./BErrorMessage-4dbabbe9.js";import"./v4-eb618527.js";import"./_plugin-vue_export-helper-c27b6911.js";const B={title:"Components/Checkbox",parameters:{docs:{description:{component:"The <code>BCheckbox</code> component provides users the ability to choose between two distinct values. These are very similar to a switch and can be used in complex forms and checklists."}}},component:o,tags:["autodocs"],argTypes:{size:{control:"select",options:Object.values(r)}},args:{inputId:"",modelValue:!1,label:"",labelOrphan:!1,disabled:!1,size:r.Medium}},e={render:s=>({components:{BCheckbox:o},setup(){return{args:s}},template:`
      <BCheckbox v-bind="args">
        {{ args.label || 'Medium' }}
      </BCheckbox>`}),args:{size:r.Medium}},n={render:s=>({components:{BCheckbox:o},setup(){return{args:s}},template:`
      <BCheckbox v-bind="args">
        {{ args.label || 'Small' }}
      </BCheckbox>`}),args:{size:r.Small}};var a,t,c;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
  render: (args: any) => ({
    components: {
      BCheckbox
    },
    setup() {
      return {
        args
      };
    },
    template: \`
      <BCheckbox v-bind="args">
        {{ args.label || 'Medium' }}
      </BCheckbox>\`
  }),
  args: {
    size: BCheckboxSize.Medium
  }
}`,...(c=(t=e.parameters)==null?void 0:t.docs)==null?void 0:c.source}}};var m,i,l;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
  render: (args: any) => ({
    components: {
      BCheckbox
    },
    setup() {
      return {
        args
      };
    },
    template: \`
      <BCheckbox v-bind="args">
        {{ args.label || 'Small' }}
      </BCheckbox>\`
  }),
  args: {
    size: BCheckboxSize.Small
  }
}`,...(l=(i=n.parameters)==null?void 0:i.docs)==null?void 0:l.source}}};const S=["Medium","Small"];export{e as Medium,n as Small,S as __namedExportsOrder,B as default};
