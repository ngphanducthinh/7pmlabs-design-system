import{_ as r}from"./BLabel-57c6859e.js";import"./vue.esm-bundler-29df2e62.js";import"./Common-43134899.js";const u={title:"Components/Label",parameters:{docs:{description:{component:"The <code>BLabel</code> component is used for displaying label of field."}}},component:r,tags:["autodocs"],args:{id:"",label:"",required:!1}},e={render:n=>({components:{BLabel:r},setup(){return{args:n}},template:`
      <BLabel v-bind="args" ></BLabel>
    `}),args:{label:"Label"}},a={render:n=>({components:{BLabel:r},setup(){return{args:n}},template:`
      <BLabel v-bind="args"> Label from default slot </BLabel>
    `}),args:{}};var s,t,o;e.parameters={...e.parameters,docs:{...(s=e.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
}`,...(o=(t=e.parameters)==null?void 0:t.docs)==null?void 0:o.source}}};var l,p,m;a.parameters={...a.parameters,docs:{...(l=a.parameters)==null?void 0:l.docs,source:{originalSource:`{
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
}`,...(m=(p=a.parameters)==null?void 0:p.docs)==null?void 0:m.source}}};const i=["Default","DefaultSlot"];export{e as Default,a as DefaultSlot,i as __namedExportsOrder,u as default};
