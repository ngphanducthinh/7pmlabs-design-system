import{_ as r}from"./BLabel-57c6859e.js";import"./vue.esm-bundler-29df2e62.js";import"./Common-43134899.js";const u={title:"Components/Label",parameters:{docs:{description:{component:"The <code>BLabel</code> component is used for displaying label of field."}}},component:r,tags:["autodocs"],argTypes:{default:{control:"text",description:"Label"}},args:{id:"",label:"",required:!1}},e={render:n=>({components:{BLabel:r},setup(){return{args:n}},template:`
      <BLabel v-if="args.default" v-bind="args">
        <span v-html="args.default" />
      </BLabel>
      <BLabel v-else v-bind="args" />
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
      <BLabel v-if="args.default" v-bind="args">
        <span v-html="args.default" />
      </BLabel>
      <BLabel v-else v-bind="args" />
    \`
  }),
  args: {
    label: 'Label'
  }
}`,...(l=(t=e.parameters)==null?void 0:t.docs)==null?void 0:l.source}}};var o,d,p;a.parameters={...a.parameters,docs:{...(o=a.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
}`,...(p=(d=a.parameters)==null?void 0:d.docs)==null?void 0:p.source}}};const i=["Default","DefaultSlot"];export{e as Default,a as DefaultSlot,i as __namedExportsOrder,u as default};
