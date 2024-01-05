import{B as s}from"./BCheckbox-d7b0c655.js";import{b as n}from"./Enums-25996506.js";import"./vue.esm-bundler-29df2e62.js";import"./v4-a960c1f4.js";import"./_plugin-vue_export-helper-c27b6911.js";const x={title:"Components/Checkbox",component:s,tags:["autodocs"],argTypes:{size:{control:"select",options:Object.values(n)}},args:{size:n.Medium}},e={render:o=>({components:{BCheckbox:s},setup(){return{args:o}},template:'<BCheckbox v-bind="args">Medium</BCheckbox>'}),args:{size:n.Medium}},r={render:o=>({components:{BCheckbox:s},setup(){return{args:o}},template:'<BCheckbox v-bind="args">Small</BCheckbox>'}),args:{size:n.Small}};var a,t,c;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
}`,...(c=(t=e.parameters)==null?void 0:t.docs)==null?void 0:c.source}}};var m,i,p;r.parameters={...r.parameters,docs:{...(m=r.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
}`,...(p=(i=r.parameters)==null?void 0:i.docs)==null?void 0:p.source}}};const C=["Medium","Small"];export{e as Medium,r as Small,C as __namedExportsOrder,x as default};
