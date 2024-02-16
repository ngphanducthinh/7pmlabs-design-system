import{_ as n}from"./BErrorMessage-d28ad561.js";import"./vue.esm-bundler-e1583b10.js";const d={title:"Components/ErrorMessage",parameters:{docs:{description:{component:"The <code>BErrorMessage</code> component is used for displaying error message."}}},component:n,tags:["autodocs"],argTypes:{default:{control:"text",description:"Error message"}},args:{errorMessage:"This is an error message."}},r={render:o=>({components:{BErrorMessage:n},setup(){return{args:o}},template:`
      <BErrorMessage v-if="args.default" v-bind="args">
        <span v-html="args.default" />
      </BErrorMessage>
      <BErrorMessage v-else v-bind="args" />
    `}),args:{}};var e,s,a;r.parameters={...r.parameters,docs:{...(e=r.parameters)==null?void 0:e.docs,source:{originalSource:`{
  render: (args: any) => ({
    components: {
      BErrorMessage
    },
    setup() {
      return {
        args
      };
    },
    template: \`
      <BErrorMessage v-if="args.default" v-bind="args">
        <span v-html="args.default" />
      </BErrorMessage>
      <BErrorMessage v-else v-bind="args" />
    \`
  }),
  args: {}
}`,...(a=(s=r.parameters)==null?void 0:s.docs)==null?void 0:a.source}}};const p=["Default"];export{r as Default,p as __namedExportsOrder,d as default};
