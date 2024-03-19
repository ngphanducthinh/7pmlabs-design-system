import{j as I,e as c,k as P,z as x,B as N,g as R,b as j,m as v,d as k,w as q,G as D,F as z,o as M,M as U,N as $}from"./vue.esm-bundler-109c6e5d.js";import{f as d,g as i}from"./Enums-5b02df9b.js";import{_ as G}from"./_plugin-vue_export-helper-c27b6911.js";const A=s=>(U("data-v-8e5f01f5"),s=s(),$(),s),J={class:"ds-relative"},K=A(()=>v("div",{class:"tooltip-arrow","data-popper-arrow":""},null,-1)),H=I({__name:"BTooltip",props:{modelValue:{type:Boolean,default:!1},position:{default:d.Top},openEvent:{default:i.Hover}},emits:["update:modelValue"],setup(s,{emit:m}){const a=s,O=m,t=c(null),o=c(null),f=c(!1),n=P({get(){return a.modelValue!==void 0?a.modelValue:f.value},set(e){a.modelValue!==void 0?O("update:modelValue",e):f.value=e}});x(()=>a.position,()=>{F(),h()}),x(()=>a.openEvent,()=>{B(),b()});const g=()=>{n.value=!n.value},y=()=>{n.value=!0},C=()=>{n.value=!1},_=()=>{n.value=!0},T=()=>{n.value=!1},F=()=>{o.value&&(o.value.style.top="",o.value.style.right="",o.value.style.bottom="",o.value.style.left="")},h=()=>{if(o.value)switch(a.position){case d.Bottom:o.value.style.top="4px";break;case d.Top:default:o.value.style.bottom="24px";break}},b=()=>{var e,l,r,p,E;switch(a.openEvent){case i.Click:(e=t.value)==null||e.addEventListener("click",g);break;case i.Focus:(l=t.value)==null||l.addEventListener("focus",y),(r=t.value)==null||r.addEventListener("focusout",C);break;case i.Hover:default:(p=t.value)==null||p.addEventListener("mouseover",_),(E=t.value)==null||E.addEventListener("mouseleave",T);break}},B=()=>{var e,l,r,p;(e=t.value)==null||e.removeEventListener("click",g),(l=t.value)==null||l.removeEventListener("focus",y),(r=t.value)==null||r.removeEventListener("mouseover",_),(p=t.value)==null||p.removeEventListener("mouseleave",T)};return N(()=>{b(),h()}),R(()=>{B()}),(e,l)=>(M(),j(z,null,[v("div",{ref_key:"toggleRef",ref:t,class:"ds-inline"},[k(e.$slots,"toggle",{},void 0,!0)],512),q(v("div",J,[v("div",{ref_key:"contentRef",ref:o,class:"ds-absolute ds-z-10 ds-inline-block ds-rounded-lg ds-bg-black/[0.65] ds-px-3 ds-py-2 ds-text-sm ds-font-medium ds-text-white ds-shadow-sm ds-transition-opacity ds-duration-300"},[k(e.$slots,"default",{},void 0,!0),K],512)],512),[[D,n.value]])],64))}});const S=G(H,[["__scopeId","data-v-8e5f01f5"]]);H.__docgenInfo={exportName:"default",displayName:"BTooltip",description:"",tags:{},props:[{name:"modelValue",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"position",description:"Position of opened tooltip compare to its toggle.",required:!1,type:{name:"TSLiteralType"},defaultValue:{func:!1,value:"BTooltipPosition.Top"}},{name:"openEvent",description:"Event to open tooltip.",required:!1,type:{name:"TSLiteralType"},defaultValue:{func:!1,value:"BTooltipOpenEvent.Hover"}}],events:[{name:"update:modelValue",type:{names:["boolean"]},description:"Update value, param: <code>value: boolean</code>",properties:[{type:{names:["mixed"]},description:"e"},{type:{names:["mixed"]},name:"value"}],tags:[{title:"param",type:{name:"mixed"},description:"e"},{title:"param",type:{name:"mixed"},name:"value"}]}],slots:[{name:"toggle"},{name:"default"}],sourceFiles:["/home/runner/work/design-system/design-system/src/components/BTooltip.vue"]};const Y={title:"Components/Tooltip",parameters:{docs:{description:{component:"The <code>BTooltip</code> component is used for conveying information when a user hovers over an element."}}},component:S,tags:["autodocs"],argTypes:{position:{control:"select",options:Object.values(d)},openEvent:{control:"select",options:Object.values(i)},toggle:{control:"text",description:"Toggle"},default:{control:"text",description:"Tooltip's content"}},args:{position:d.Top,openEvent:i.Hover}},u={render:s=>({components:{BTooltip:S},setup(){const m=c(!1);return{args:s,tooltip:m}},template:`
      <div style="height: 200px; padding-top: 16px">
        <BTooltip v-bind="args" v-model="tooltip">
          <template v-if="args.toggle" #toggle><span v-html="args.toggle" /></template>
          <template v-if="args.default" #default><span v-html="args.default" /></template>
        </BTooltip>
      </div>
    `}),args:{toggle:"<b>Hover me!</b>",default:"<div>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</div>"}};var L,w,V;u.parameters={...u.parameters,docs:{...(L=u.parameters)==null?void 0:L.docs,source:{originalSource:`{
  render: (args: any) => ({
    components: {
      BTooltip
    },
    setup() {
      const tooltip = ref(false);
      return {
        args,
        tooltip
      };
    },
    template: \`
      <div style="height: 200px; padding-top: 16px">
        <BTooltip v-bind="args" v-model="tooltip">
          <template v-if="args.toggle" #toggle><span v-html="args.toggle" /></template>
          <template v-if="args.default" #default><span v-html="args.default" /></template>
        </BTooltip>
      </div>
    \`
  }),
  args: {
    toggle: '<b>Hover me!</b>',
    default: '<div>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</div>'
  }
}`,...(V=(w=u.parameters)==null?void 0:w.docs)==null?void 0:V.source}}};const Z=["Default"];export{u as Default,Z as __namedExportsOrder,Y as default};
