import{d as j,a as g,b as m,e as o,n,f,g as N,o as b}from"./vue.esm-bundler-ec71a2b3.js";var a=(s=>(s.Primary="primary",s.Secondary="secondary",s.Additional="additional",s.Clear="clear",s.Icon="icon",s))(a||{}),r=(s=>(s.Small="sm",s.Medium="md",s))(r||{});const L=["disabled"],O={class:"ds-flex ds-items-center ds-justify-center"},D={class:"ds-flex ds-items-center"},d=j({__name:"BButton",props:{type:{default:a.Secondary},prependIcon:{default:""},appendIcon:{default:""},size:{default:r.Medium},disabled:{type:Boolean,default:!1}},setup(s){const t=s,q=g(()=>{let e="ds-font-semibold ds-text-center ";switch(e+="disabled:ds-cursor-not-allowed ",t.type){case a.Primary:default:e+="ds-bg-gradient-to-r ds-from-primary-f-stop enabled:hover:ds-from-primary-f/90 enabled:hover:ds-to-primary-t/90 disabled:ds-text-black/40 ds-rounded-lg ds-text-white ",e+=t.disabled?"ds-bg-gray-150 ":"ds-from-primary-f ds-to-primary-t ";break;case a.Secondary:e+="ds-rounded-lg ds-bg-transparent ds-text-primary-t enabled:hover:ds-bg-[#e6f0fe] disabled:ds-text-black/[0.4] ",e+=t.disabled?"ds-border-inner-secondary--disabled ":"ds-border-inner-secondary ";break;case a.Additional:e+="ds-rounded-lg ds-bg-transparent ds-text-black/[0.85] enabled:hover:ds-bg-gray-150 disabled:ds-text-black/[0.4] ",e+=t.disabled?"ds-border-inner-additional--disabled ":"ds-border-inner-additional ";break;case a.Clear:e+="ds-rounded-lg ds-bg-transparent ds-text-primary-t enabled:hover:ds-bg-[#e6f0fe] disabled:ds-text-black/[0.4] ";break;case a.Icon:e+="ds-bg-gradient-to-r ds-from-primary-f-stop enabled:hover:ds-from-primary-f/90 enabled:hover:ds-to-primary-t/90 disabled:ds-text-black/40 ds-rounded-full ds-rounded-full ds-text-white ",e+=t.disabled?"disabled:ds-bg-gray-150 ":"ds-from-primary-f ds-to-primary-t ";break}switch(t.size){case r.Small:e+=t.type!==a.Icon?"ds-text-sm ds-leading-4 ds-py-2 ds-px-3 ":"ds-text-base ds-leading-4 ds-h-8 ds-w-8 ";break;case r.Medium:default:e+=t.type!==a.Icon?"ds-text-sm ds-leading-4 ds-py-3.5 lg:ds-py-3 ds-px-4 ":"ds-text-2xl ds-leading-4 ds-h-11 ds-w-11 lg:ds-h-10 lg:ds-w-10 ";break}return e}),y=g(()=>{let e="";switch(t.size){case r.Small:e+="ds-h-[8px] ds-w-[16px] ";break;case r.Medium:default:e+="ds-h-[8px] ds-w-[16px] ";break}return e});return(e,E)=>(b(),m("button",{type:"button",class:n(q.value),disabled:e.disabled},[o("div",O,[e.prependIcon?(b(),m("div",{key:0,class:n(["ds-relative ds-mr-2",y.value])},[o("span",{class:n(["ds-absolute -ds-bottom-[3px] ds-left-0 ds-text-[16px]",e.prependIcon])},null,2)],2)):f("",!0),o("div",D,[N(e.$slots,"default")]),e.appendIcon?(b(),m("div",{key:1,class:n(["ds-relative ds-ml-2",y.value])},[o("span",{class:n(["ds-absolute -ds-bottom-[3px] ds-left-0 ds-text-[16px]",e.appendIcon])},null,2)],2)):f("",!0)])],10,L))}});d.__docgenInfo={exportName:"default",displayName:"BButton",description:"",tags:{},props:[{name:"type",required:!1,type:{name:"TSLiteralType"},defaultValue:{func:!1,value:"BButtonType.Secondary"}},{name:"prependIcon",required:!1,type:{name:"string"},defaultValue:{func:!1,value:"''"}},{name:"appendIcon",required:!1,type:{name:"string"},defaultValue:{func:!1,value:"''"}},{name:"size",required:!1,type:{name:"TSLiteralType"},defaultValue:{func:!1,value:"BButtonSize.Medium"}},{name:"disabled",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"false"}}],slots:[{name:"default"}],sourceFiles:["/Users/thinhnguyen/Downloads/Projects/7PMLabs/7pmlabs-design-system/src/components/BButton.vue"]};const F={title:"Diag/Button",component:d,tags:["autodocs"],argTypes:{type:{control:"select",options:Object.values(a)},size:{control:"select",options:Object.values(r)}},args:{type:"primary"}},l={render:s=>({components:{BButton:d},setup(){return{args:s}},template:'<BButton v-bind="args">Primary</BButton>'}),args:{type:"primary"}},i={render:s=>({components:{BButton:d},setup(){return{args:s}},template:'<BButton v-bind="args">Secondary</BButton>'}),args:{type:"secondary"}},c={render:s=>({components:{BButton:d},setup(){return{args:s}},template:'<BButton v-bind="args">Additional</BButton>'}),args:{type:"additional"}},p={render:s=>({components:{BButton:d},setup(){return{args:s}},template:'<BButton v-bind="args">Clear</BButton>'}),args:{type:"clear"}},u={render:s=>({components:{BButton:d},setup(){return{args:s}},template:'<BButton v-bind="args"><i class="fa-solid fa-circle-check" /></BButton>'}),args:{type:"icon"}};var B,v,x;l.parameters={...l.parameters,docs:{...(B=l.parameters)==null?void 0:B.docs,source:{originalSource:`{
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
}`,...(x=(v=l.parameters)==null?void 0:v.docs)==null?void 0:x.source}}};var h,k,S;i.parameters={...i.parameters,docs:{...(h=i.parameters)==null?void 0:h.docs,source:{originalSource:`{
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
}`,...(S=(k=i.parameters)==null?void 0:k.docs)==null?void 0:S.source}}};var I,C,w;c.parameters={...c.parameters,docs:{...(I=c.parameters)==null?void 0:I.docs,source:{originalSource:`{
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
}`,...(w=(C=c.parameters)==null?void 0:C.docs)==null?void 0:w.source}}};var _,P,V;p.parameters={...p.parameters,docs:{...(_=p.parameters)==null?void 0:_.docs,source:{originalSource:`{
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
}`,...(V=(P=p.parameters)==null?void 0:P.docs)==null?void 0:V.source}}};var z,A,M;u.parameters={...u.parameters,docs:{...(z=u.parameters)==null?void 0:z.docs,source:{originalSource:`{
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
}`,...(M=(A=u.parameters)==null?void 0:A.docs)==null?void 0:M.source}}};const U=["Primary","Secondary","Additional","Clear","Icon"];export{c as Additional,p as Clear,u as Icon,l as Primary,i as Secondary,U as __namedExportsOrder,F as default};
//# sourceMappingURL=Button.stories-cc8d9a7d.js.map
