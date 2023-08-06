import{_ as r}from"./BLabel-39893328.js";import"./vue.esm-bundler-54bcf90c.js";const u={title:"7PMLabs/Label",component:r,tags:["autodocs"],args:{id:"",label:"",required:!1}},e={render:n=>({components:{BLabel:r},setup(){return{args:n}},template:`
      <BLabel v-bind="args" ></BLabel>
    `}),args:{label:"Label"}},a={render:n=>({components:{BLabel:r},setup(){return{args:n}},template:`
      <BLabel v-bind="args"> Label from default slot </BLabel>
    `}),args:{}};var s,t,l;e.parameters={...e.parameters,docs:{...(s=e.parameters)==null?void 0:s.docs,source:{originalSource:`{
  render: (args: any) => ({
    components: {
      BLabel
    },
    setup() {
      return {
        args
      };
    },
    template: \`
      <BLabel v-bind="args" ></BLabel>
    \`
  }),
  args: {
    label: 'Label'
  }
}`,...(l=(t=e.parameters)==null?void 0:t.docs)==null?void 0:l.source}}};var o,b,m;a.parameters={...a.parameters,docs:{...(o=a.parameters)==null?void 0:o.docs,source:{originalSource:`{
  render: (args: any) => ({
    components: {
      BLabel
    },
    setup() {
      return {
        args
      };
    },
    template: \`
      <BLabel v-bind="args"> Label from default slot </BLabel>
    \`
  }),
  args: {}
}`,...(m=(b=a.parameters)==null?void 0:b.docs)==null?void 0:m.source}}};const d=["Default","DefaultSlot"];export{e as Default,a as DefaultSlot,d as __namedExportsOrder,u as default};
//# sourceMappingURL=BLabel.stories-a2c717f5.js.map
