import{B as r}from"./BCheckbox-d7b0c655.js";import{b as n}from"./Enums-25996506.js";import"./vue.esm-bundler-29df2e62.js";import"./v4-a960c1f4.js";import"./_plugin-vue_export-helper-c27b6911.js";const x={title:"Components/Checkbox",parameters:{docs:{description:{component:"The <code>BCheckbox</code> component provides users the ability to choose between two distinct values. These are very similar to a switch and can be used in complex forms and checklists."}}},component:r,tags:["autodocs"],argTypes:{size:{control:"select",options:Object.values(n)}},args:{size:n.Medium}},e={render:s=>({components:{BCheckbox:r},setup(){return{args:s}},template:'<BCheckbox v-bind="args">Medium</BCheckbox>'}),args:{size:n.Medium}},o={render:s=>({components:{BCheckbox:r},setup(){return{args:s}},template:'<BCheckbox v-bind="args">Small</BCheckbox>'}),args:{size:n.Small}};var t,a,c;e.parameters={...e.parameters,docs:{...(t=e.parameters)==null?void 0:t.docs,source:{originalSource:`{
  render: (args: any) => ({
    components: {
      BCheckbox
    },
    setup() {
      return {
        args
      };
    },
    template: '<BCheckbox v-bind="args">Medium</BCheckbox>'
  }),
  args: {
    size: BCheckboxSize.Medium
  }
}`,...(c=(a=e.parameters)==null?void 0:a.docs)==null?void 0:c.source}}};var m,i,p;o.parameters={...o.parameters,docs:{...(m=o.parameters)==null?void 0:m.docs,source:{originalSource:`{
  render: (args: any) => ({
    components: {
      BCheckbox
    },
    setup() {
      return {
        args
      };
    },
    template: '<BCheckbox v-bind="args">Small</BCheckbox>'
  }),
  args: {
    size: BCheckboxSize.Small
  }
}`,...(p=(i=o.parameters)==null?void 0:i.docs)==null?void 0:p.source}}};const g=["Medium","Small"];export{e as Medium,o as Small,g as __namedExportsOrder,x as default};
