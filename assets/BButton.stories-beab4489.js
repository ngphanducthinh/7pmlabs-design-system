import{_ as t}from"./BButton-6b09d985.js";import{a as S,b as x}from"./Enums-6a2836ab.js";import"./vue.esm-bundler-d836205b.js";const _={title:"Components/Button",component:t,tags:["autodocs"],argTypes:{type:{control:"select",options:Object.values(S)},size:{control:"select",options:Object.values(x)},prependIcon:{control:"text",description:"Prepend icon",defaultValue:""},default:{control:"text",description:"Button's content",defaultValue:""},appendIcon:{control:"text",description:"Append icon",defaultValue:""}},args:{type:"primary"}},a={render:e=>({components:{BButton:t},setup(){return{args:e}},template:`
      <BButton v-bind="args">
        <template v-if="args.prependIcon" #prependIcon><span v-html="args.prependIcon" /></template>
        <span v-html="args.default" />
        <template v-if="args.appendIcon" #appendIcon><span v-html="args.appendIcon" /></template>
      </BButton>`}),args:{type:"primary",default:"Primary"}},n={render:e=>({components:{BButton:t},setup(){return{args:e}},template:`
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
      </BButton>`}),args:{type:"clear",default:"Clear"}},s={render:e=>({components:{BButton:t},setup(){return{args:e}},template:`
      <BButton v-bind="args">
        <template v-if="args.prependIcon" #prependIcon><span v-html="args.prependIcon" /></template>
        <span v-html="args.default" />
        <template v-if="args.appendIcon" #appendIcon><span v-html="args.appendIcon" /></template>
      </BButton>`}),args:{type:"icon",default:'<i class="fa-solid fa-circle-check" />'}};var o,d,c;a.parameters={...a.parameters,docs:{...(o=a.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
}`,...(c=(d=a.parameters)==null?void 0:d.docs)==null?void 0:c.source}}};var l,m,u;n.parameters={...n.parameters,docs:{...(l=n.parameters)==null?void 0:l.docs,source:{originalSource:`{
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
}`,...(u=(m=n.parameters)==null?void 0:m.docs)==null?void 0:u.source}}};var g,i,B;p.parameters={...p.parameters,docs:{...(g=p.parameters)==null?void 0:g.docs,source:{originalSource:`{
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
}`,...(b=(y=s.parameters)==null?void 0:y.docs)==null?void 0:b.source}}};const O=["Primary","Secondary","Additional","Clear","Icon"];export{p as Additional,r as Clear,s as Icon,a as Primary,n as Secondary,O as __namedExportsOrder,_ as default};
//# sourceMappingURL=BButton.stories-beab4489.js.map
