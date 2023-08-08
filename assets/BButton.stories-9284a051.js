import{_ as e}from"./BButton-de0e07d3.js";import{a as _,b as A}from"./Enums-c45a7702.js";import"./vue.esm-bundler-0b71992c.js";const j={title:"Components/Button",component:e,tags:["autodocs"],argTypes:{type:{control:"select",options:Object.values(_)},size:{control:"select",options:Object.values(A)}},args:{type:"primary"}},r={render:t=>({components:{BButton:e},setup(){return{args:t}},template:'<BButton v-bind="args">Primary</BButton>'}),args:{type:"primary"}},a={render:t=>({components:{BButton:e},setup(){return{args:t}},template:'<BButton v-bind="args">Secondary</BButton>'}),args:{type:"secondary"}},o={render:t=>({components:{BButton:e},setup(){return{args:t}},template:'<BButton v-bind="args">Additional</BButton>'}),args:{type:"additional"}},s={render:t=>({components:{BButton:e},setup(){return{args:t}},template:'<BButton v-bind="args">Clear</BButton>'}),args:{type:"clear"}},n={render:t=>({components:{BButton:e},setup(){return{args:t}},template:'<BButton v-bind="args"><i class="fa-solid fa-circle-check" /></BButton>'}),args:{type:"icon"}};var c,p,u;r.parameters={...r.parameters,docs:{...(c=r.parameters)==null?void 0:c.docs,source:{originalSource:`{
  render: (args: any) => ({
    components: {
      BButton
    },
    setup() {
      return {
        args
      };
    },
    template: '<BButton v-bind="args">Primary</BButton>'
  }),
  args: {
    type: 'primary'
  }
}`,...(u=(p=r.parameters)==null?void 0:p.docs)==null?void 0:u.source}}};var B,d,m;a.parameters={...a.parameters,docs:{...(B=a.parameters)==null?void 0:B.docs,source:{originalSource:`{
  render: (args: any) => ({
    components: {
      BButton
    },
    setup() {
      return {
        args
      };
    },
    template: '<BButton v-bind="args">Secondary</BButton>'
  }),
  args: {
    type: 'secondary'
  }
}`,...(m=(d=a.parameters)==null?void 0:d.docs)==null?void 0:m.source}}};var i,l,g;o.parameters={...o.parameters,docs:{...(i=o.parameters)==null?void 0:i.docs,source:{originalSource:`{
  render: (args: any) => ({
    components: {
      BButton
    },
    setup() {
      return {
        args
      };
    },
    template: '<BButton v-bind="args">Additional</BButton>'
  }),
  args: {
    type: 'additional'
  }
}`,...(g=(l=o.parameters)==null?void 0:l.docs)==null?void 0:g.source}}};var y,b,v;s.parameters={...s.parameters,docs:{...(y=s.parameters)==null?void 0:y.docs,source:{originalSource:`{
  render: (args: any) => ({
    components: {
      BButton
    },
    setup() {
      return {
        args
      };
    },
    template: '<BButton v-bind="args">Clear</BButton>'
  }),
  args: {
    type: 'clear'
  }
}`,...(v=(b=s.parameters)==null?void 0:b.docs)==null?void 0:v.source}}};var S,f,C;n.parameters={...n.parameters,docs:{...(S=n.parameters)==null?void 0:S.docs,source:{originalSource:`{
  render: (args: any) => ({
    components: {
      BButton
    },
    setup() {
      return {
        args
      };
    },
    template: '<BButton v-bind="args"><i class="fa-solid fa-circle-check" /></BButton>'
  }),
  args: {
    type: 'icon'
  }
}`,...(C=(f=n.parameters)==null?void 0:f.docs)==null?void 0:C.source}}};const k=["Primary","Secondary","Additional","Clear","Icon"];export{o as Additional,s as Clear,n as Icon,r as Primary,a as Secondary,k as __namedExportsOrder,j as default};
//# sourceMappingURL=BButton.stories-9284a051.js.map
