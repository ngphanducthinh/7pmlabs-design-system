import{_ as r}from"./BLabel-29da189d.js";import"./vue.esm-bundler-f0a4de28.js";import"./Common-43134899.js";const d={title:"Components/Label",component:r,tags:["autodocs"],args:{id:"",label:"",required:!1}},e={render:n=>({components:{BLabel:r},setup(){return{args:n}},template:`
      <BLabel v-bind="args" ></BLabel>
    `}),args:{label:"Label"}},a={render:n=>({components:{BLabel:r},setup(){return{args:n}},template:`
      <BLabel v-bind="args"> Label from default slot </BLabel>
    `}),args:{}};var t,s,o;e.parameters={...e.parameters,docs:{...(t=e.parameters)==null?void 0:t.docs,source:{originalSource:`{
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
}`,...(o=(s=e.parameters)==null?void 0:s.docs)==null?void 0:o.source}}};var l,m,p;a.parameters={...a.parameters,docs:{...(l=a.parameters)==null?void 0:l.docs,source:{originalSource:`{
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
}`,...(p=(m=a.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};const L=["Default","DefaultSlot"];export{e as Default,a as DefaultSlot,L as __namedExportsOrder,d as default};
//# sourceMappingURL=BLabel.stories-9006a2a8.js.map
