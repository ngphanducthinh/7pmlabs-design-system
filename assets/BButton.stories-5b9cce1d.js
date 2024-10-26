import{_ as t}from"./BButton-972c772c.js";import{B as s,a as A}from"./Enums-b5cac340.js";import"./vue.esm-bundler-ceeda665.js";const _={title:"Components/Button",parameters:{docs:{description:{component:"The <code>BButton</code> component with multitude of options replaces the standard html button."}}},component:t,tags:["autodocs"],argTypes:{type:{control:"select",options:Object.values(s)},size:{control:"select",options:Object.values(A)},prependIcon:{control:"text",description:"Prepend icon"},default:{control:"text",description:"Button's content"},appendIcon:{control:"text",description:"Append icon"}},args:{type:s.Primary}},a={render:e=>({components:{BButton:t},setup(){return{args:e}},template:`
      <BButton v-bind="args">
        <template v-if="args.prependIcon" #prependIcon><span v-html="args.prependIcon" /></template>
        <span v-html="args.default" />
        <template v-if="args.appendIcon" #appendIcon><span v-html="args.appendIcon" /></template>
      </BButton>
      <div style="font-size: 0.75rem; color: gray; margin-top: 1rem">
        <b>FontAwesome v6.1.0 - Solid</b> has been imported already & can be used for demo.
      </div>
    `}),args:{type:"primary",default:"Primary",prependIcon:"",appendIcon:'<i class="fa-solid fa-floppy-disk" />'}},n={render:e=>({components:{BButton:t},setup(){return{args:e}},template:`
      <BButton v-bind="args">
        <template v-if="args.prependIcon" #prependIcon><span v-html="args.prependIcon" /></template>
        <span v-html="args.default" />
        <template v-if="args.appendIcon" #appendIcon><span v-html="args.appendIcon" /></template>
      </BButton>`}),args:{type:"secondary",default:"Secondary"}},p={render:e=>({components:{BButton:t},setup(){return{args:e}},template:`
      <BButton v-bind="args">
        <template v-if="args.prependIcon" #prependIcon><span v-html="args.prependIcon" /></template>
        <span v-html="args.default" />
        <template v-if="args.appendIcon" #appendIcon><span v-html="args.appendIcon" /></template>
      </BButton>`}),args:{type:"additional",default:"Additional"}},r={render:e=>({components:{BButton:t},setup(){return{args:e}},template:`
      <BButton v-bind="args">
        <template v-if="args.prependIcon" #prependIcon><span v-html="args.prependIcon" /></template>
        <span v-html="args.default" />
        <template v-if="args.appendIcon" #appendIcon><span v-html="args.appendIcon" /></template>
      </BButton>`}),args:{type:"clear",default:"Clear"}},o={render:e=>({components:{BButton:t},setup(){return{args:e}},template:`
      <BButton v-bind="args">
        <template v-if="args.prependIcon" #prependIcon><span v-html="args.prependIcon" /></template>
        <span v-html="args.default" />
        <template v-if="args.appendIcon" #appendIcon><span v-html="args.appendIcon" /></template>
      </BButton>`}),args:{type:"icon",default:'<i class="fa-solid fa-circle-check" />'}};var d,c,l;a.parameters={...a.parameters,docs:{...(d=a.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
      </BButton>
      <div style="font-size: 0.75rem; color: gray; margin-top: 1rem">
        <b>FontAwesome v6.1.0 - Solid</b> has been imported already & can be used for demo.
      </div>
    \`
  }),
  args: {
    type: 'primary',
    default: 'Primary',
    prependIcon: '',
    appendIcon: '<i class="fa-solid fa-floppy-disk" />'
  }
}`,...(l=(c=a.parameters)==null?void 0:c.docs)==null?void 0:l.source}}};var m,i,u;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
}`,...(u=(i=n.parameters)==null?void 0:i.docs)==null?void 0:u.source}}};var g,B,v;p.parameters={...p.parameters,docs:{...(g=p.parameters)==null?void 0:g.docs,source:{originalSource:`{
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
}`,...(v=(B=p.parameters)==null?void 0:B.docs)==null?void 0:v.source}}};var I,f,y;r.parameters={...r.parameters,docs:{...(I=r.parameters)==null?void 0:I.docs,source:{originalSource:`{
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
}`,...(y=(f=r.parameters)==null?void 0:f.docs)==null?void 0:y.source}}};var h,b,S;o.parameters={...o.parameters,docs:{...(h=o.parameters)==null?void 0:h.docs,source:{originalSource:`{
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
}`,...(S=(b=o.parameters)==null?void 0:b.docs)==null?void 0:S.source}}};const k=["Primary","Secondary","Additional","Clear","Icon"];export{p as Additional,r as Clear,o as Icon,a as Primary,n as Secondary,k as __namedExportsOrder,_ as default};
