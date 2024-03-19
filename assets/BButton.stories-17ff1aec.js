import{_ as e}from"./BButton-cba7b1f6.js";import{B as s,a as A}from"./Enums-5b02df9b.js";import"./vue.esm-bundler-109c6e5d.js";const _={title:"Components/Button",parameters:{docs:{description:{component:"The <code>BButton</code> component with multitude of options replaces the standard html button."}}},component:e,tags:["autodocs"],argTypes:{type:{control:"select",options:Object.values(s)},size:{control:"select",options:Object.values(A)},prependIcon:{control:"text",description:"Prepend icon"},default:{control:"text",description:"Button's content"},appendIcon:{control:"text",description:"Append icon"}},args:{type:s.Primary}},t={render:n=>({components:{BButton:e},setup(){return{args:n}},template:`
      <BButton v-bind="args">
        <template v-if="args.prependIcon" #prependIcon><span v-html="args.prependIcon" /></template>
        <span v-html="args.default" />
        <template v-if="args.appendIcon" #appendIcon><span v-html="args.appendIcon" /></template>
      </BButton>
      <div style="font-size: 0.75rem; color: gray; margin-top: 1rem">
        <b>FontAwesome v6.1.0 - Solid</b> has been imported already & can be used for demo.
      </div>
    `}),args:{type:"primary",default:"Primary",prependIcon:"",appendIcon:'<i class="fa-solid fa-floppy-disk" />'}},a={render:n=>({components:{BButton:e},setup(){return{args:n}},template:`
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
      </BButton>`}),args:{type:"clear",default:"Clear"}},o={render:n=>({components:{BButton:e},setup(){return{args:n}},template:`
      <BButton v-bind="args">
        <template v-if="args.prependIcon" #prependIcon><span v-html="args.prependIcon" /></template>
        <span v-html="args.default" />
        <template v-if="args.appendIcon" #appendIcon><span v-html="args.appendIcon" /></template>
      </BButton>`}),args:{type:"icon",default:'<i class="fa-solid fa-circle-check" />'}};var d,c,l;t.parameters={...t.parameters,docs:{...(d=t.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
}`,...(l=(c=t.parameters)==null?void 0:c.docs)==null?void 0:l.source}}};var m,i,u;a.parameters={...a.parameters,docs:{...(m=a.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
}`,...(u=(i=a.parameters)==null?void 0:i.docs)==null?void 0:u.source}}};var g,B,v;p.parameters={...p.parameters,docs:{...(g=p.parameters)==null?void 0:g.docs,source:{originalSource:`{
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
}`,...(S=(b=o.parameters)==null?void 0:b.docs)==null?void 0:S.source}}};const k=["Primary","Secondary","Additional","Clear","Icon"];export{p as Additional,r as Clear,o as Icon,t as Primary,a as Secondary,k as __namedExportsOrder,_ as default};
