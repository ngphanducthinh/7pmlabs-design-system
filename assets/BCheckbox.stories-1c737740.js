import{B as a}from"./BCheckbox-79d2e2fd.js";import{b as s}from"./Enums-5b02df9b.js";import"./vue.esm-bundler-29df2e62.js";import"./v4-a960c1f4.js";import"./_plugin-vue_export-helper-c27b6911.js";const g={title:"Components/Checkbox",parameters:{docs:{description:{component:"The <code>BCheckbox</code> component provides users the ability to choose between two distinct values. These are very similar to a switch and can be used in complex forms and checklists."}}},component:a,tags:["autodocs"],argTypes:{size:{control:"select",options:Object.values(s)}},args:{inputId:"",modelValue:!1,label:"",labelOrphan:!1,disabled:!1,size:s.Medium}},e={render:r=>({components:{BCheckbox:a},setup(){return{args:r}},template:`
      <BCheckbox v-bind="args">
        {{ args.label || 'Medium' }}
      </BCheckbox>`}),args:{size:s.Medium}},n={render:r=>({components:{BCheckbox:a},setup(){return{args:r}},template:`
      <BCheckbox v-bind="args">
        {{ args.label || 'Small' }}
      </BCheckbox>`}),args:{size:s.Small}};var o,t,c;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
}`,...(c=(t=e.parameters)==null?void 0:t.docs)==null?void 0:c.source}}};var m,l,i;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
}`,...(i=(l=n.parameters)==null?void 0:l.docs)==null?void 0:i.source}}};const x=["Medium","Small"];export{e as Medium,n as Small,x as __namedExportsOrder,g as default};
