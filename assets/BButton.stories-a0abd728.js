import{_ as e}from"./BButton-3c78e856.js";import{B as S,a as x}from"./Enums-25996506.js";import"./vue.esm-bundler-3f3ee96a.js";const _={title:"Components/Button",component:e,tags:["autodocs"],argTypes:{type:{control:"select",options:Object.values(S)},size:{control:"select",options:Object.values(x)},prependIcon:{control:"text",description:"Prepend icon",defaultValue:""},default:{control:"text",description:"Button's content",defaultValue:""},appendIcon:{control:"text",description:"Append icon",defaultValue:""}},args:{type:"primary"}},t={render:n=>({components:{BButton:e},setup(){return{args:n}},template:`
      <BButton v-bind="args">
        <template v-if="args.prependIcon" #prependIcon><span v-html="args.prependIcon" /></template>
        <span v-html="args.default" />
        <template v-if="args.appendIcon" #appendIcon><span v-html="args.appendIcon" /></template>
      </BButton>`}),args:{type:"primary",default:"Primary"}},a={render:n=>({components:{BButton:e},setup(){return{args:n}},template:`
      <BButton v-bind="args">
        <template v-if="args.prependIcon" #prependIcon><span v-html="args.prependIcon" /></template>
        <span v-html="args.default" />
        <template v-if="args.appendIcon" #appendIcon><span v-html="args.appendIcon" /></template>
      </BButton>`}),args:{type:"secondary",default:"Secondary"}},p={render:n=>({components:{BButton:e},setup(){return{args:n}},template:`
      <BButton v-bind="args">
        <template v-if="args.prependIcon" #prependIcon><span v-html="args.prependIcon" /></template>
        <span v-html="args.default" />
        <template v-if="args.appendIcon" #appendIcon><span v-html="args.appendIcon" /></template>
      </BButton>`}),args:{type:"additional",default:"Additional"}},r={render:n=>({components:{BButton:e},setup(){return{args:n}},template:`
      <BButton v-bind="args">
        <template v-if="args.prependIcon" #prependIcon><span v-html="args.prependIcon" /></template>
        <span v-html="args.default" />
        <template v-if="args.appendIcon" #appendIcon><span v-html="args.appendIcon" /></template>
      </BButton>`}),args:{type:"clear",default:"Clear"}},s={render:n=>({components:{BButton:e},setup(){return{args:n}},template:`
      <BButton v-bind="args">
        <template v-if="args.prependIcon" #prependIcon><span v-html="args.prependIcon" /></template>
        <span v-html="args.default" />
        <template v-if="args.appendIcon" #appendIcon><span v-html="args.appendIcon" /></template>
      </BButton>`}),args:{type:"icon",default:'<i class="fa-solid fa-circle-check" />'}};var o,d,c;t.parameters={...t.parameters,docs:{...(o=t.parameters)==null?void 0:o.docs,source:{originalSource:`{
  render: (args: any) => ({
    components: {
      BButton
    },
    setup() {
      return {
        args
      };
    },
    template: \`
      <BButton v-bind="args">
        <template v-if="args.prependIcon" #prependIcon><span v-html="args.prependIcon" /></template>
        <span v-html="args.default" />
        <template v-if="args.appendIcon" #appendIcon><span v-html="args.appendIcon" /></template>
      </BButton>\`
  }),
  args: {
    type: 'primary',
    default: 'Primary'
  }
}`,...(c=(d=t.parameters)==null?void 0:d.docs)==null?void 0:c.source}}};var l,m,u;a.parameters={...a.parameters,docs:{...(l=a.parameters)==null?void 0:l.docs,source:{originalSource:`{
  render: (args: any) => ({
    components: {
      BButton
    },
    setup() {
      return {
        args
      };
    },
    template: \`
      <BButton v-bind="args">
        <template v-if="args.prependIcon" #prependIcon><span v-html="args.prependIcon" /></template>
        <span v-html="args.default" />
        <template v-if="args.appendIcon" #appendIcon><span v-html="args.appendIcon" /></template>
      </BButton>\`
  }),
  args: {
    type: 'secondary',
    default: 'Secondary'
  }
}`,...(u=(m=a.parameters)==null?void 0:m.docs)==null?void 0:u.source}}};var g,i,B;p.parameters={...p.parameters,docs:{...(g=p.parameters)==null?void 0:g.docs,source:{originalSource:`{
  render: (args: any) => ({
    components: {
      BButton
    },
    setup() {
      return {
        args
      };
    },
    template: \`
      <BButton v-bind="args">
        <template v-if="args.prependIcon" #prependIcon><span v-html="args.prependIcon" /></template>
        <span v-html="args.default" />
        <template v-if="args.appendIcon" #appendIcon><span v-html="args.appendIcon" /></template>
      </BButton>\`
  }),
  args: {
    type: 'additional',
    default: 'Additional'
  }
}`,...(B=(i=p.parameters)==null?void 0:i.docs)==null?void 0:B.source}}};var I,v,f;r.parameters={...r.parameters,docs:{...(I=r.parameters)==null?void 0:I.docs,source:{originalSource:`{
  render: (args: any) => ({
    components: {
      BButton
    },
    setup() {
      return {
        args
      };
    },
    template: \`
      <BButton v-bind="args">
        <template v-if="args.prependIcon" #prependIcon><span v-html="args.prependIcon" /></template>
        <span v-html="args.default" />
        <template v-if="args.appendIcon" #appendIcon><span v-html="args.appendIcon" /></template>
      </BButton>\`
  }),
  args: {
    type: 'clear',
    default: 'Clear'
  }
}`,...(f=(v=r.parameters)==null?void 0:v.docs)==null?void 0:f.source}}};var h,y,b;s.parameters={...s.parameters,docs:{...(h=s.parameters)==null?void 0:h.docs,source:{originalSource:`{
  render: (args: any) => ({
    components: {
      BButton
    },
    setup() {
      return {
        args
      };
    },
    template: \`
      <BButton v-bind="args">
        <template v-if="args.prependIcon" #prependIcon><span v-html="args.prependIcon" /></template>
        <span v-html="args.default" />
        <template v-if="args.appendIcon" #appendIcon><span v-html="args.appendIcon" /></template>
      </BButton>\`
  }),
  args: {
    type: 'icon',
    default: '<i class="fa-solid fa-circle-check" />'
  }
}`,...(b=(y=s.parameters)==null?void 0:y.docs)==null?void 0:b.source}}};const O=["Primary","Secondary","Additional","Clear","Icon"];export{p as Additional,r as Clear,s as Icon,t as Primary,a as Secondary,O as __namedExportsOrder,_ as default};
