import{B as a}from"./BCheckbox-3d206554.js";import{B as o}from"./Enums-c45a7702.js";import"./vue.esm-bundler-0b71992c.js";import"./v4-a960c1f4.js";import"./_plugin-vue_export-helper-c27b6911.js";const x={title:"Components/Checkbox",component:a,tags:["autodocs"],argTypes:{size:{control:"select",options:Object.values(o)}},args:{size:o.Medium}},e={render:s=>({components:{BCheckbox:a},setup(){return{args:s}},template:'<BCheckbox v-bind="args">Medium</BCheckbox>'}),args:{size:o.Medium}},r={render:s=>({components:{BCheckbox:a},setup(){return{args:s}},template:'<BCheckbox v-bind="args">Small</BCheckbox>'}),args:{size:o.Small}};var t,c,m;e.parameters={...e.parameters,docs:{...(t=e.parameters)==null?void 0:t.docs,source:{originalSource:`{
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
}`,...(m=(c=e.parameters)==null?void 0:c.docs)==null?void 0:m.source}}};var n,i,p;r.parameters={...r.parameters,docs:{...(n=r.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
}`,...(p=(i=r.parameters)==null?void 0:i.docs)==null?void 0:p.source}}};const B=["Medium","Small"];export{e as Medium,r as Small,B as __namedExportsOrder,x as default};
//# sourceMappingURL=BCheckbox.stories-550917b4.js.map
