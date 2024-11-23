import{e as S,a as c,f as R,w as x,s as q,d as D,c as N,h as d,r as k,l as j,y as I,F as U,o as $}from"./vue.esm-bundler-ceeda665.js";import{e as p,f as n}from"./Enums-b5cac340.js";import{_ as z}from"./_plugin-vue_export-helper-c27b6911.js";const M={class:"ds-relative"},H=S({__name:"BTooltip",props:{modelValue:{type:Boolean,default:void 0},position:{default:p.Top},openEvent:{default:n.Hover}},emits:["update:modelValue"],setup(v,{emit:m}){const s=v,C=m,t=c(null),o=c(null),f=c(!1),l=R({get(){return s.modelValue!==void 0?s.modelValue:f.value},set(e){s.modelValue!==void 0?C("update:modelValue",e):f.value=e}});x(()=>s.position,()=>{P(),b()}),x(()=>s.openEvent,()=>{h(),E()});const g=()=>{l.value=!l.value},y=()=>{l.value=!0},F=()=>{l.value=!1},T=()=>{l.value=!0},_=()=>{l.value=!1},P=()=>{o.value&&(o.value.style.top="",o.value.style.right="",o.value.style.bottom="",o.value.style.left="")},b=()=>{if(o.value)switch(s.position){case p.Bottom:o.value.style.top="4px";break;case p.Top:default:o.value.style.bottom="24px";break}},E=()=>{var e,a,i,r,B;switch(s.openEvent){case n.Click:(e=t.value)==null||e.addEventListener("click",g);break;case n.Focus:(a=t.value)==null||a.addEventListener("focus",y),(i=t.value)==null||i.addEventListener("focusout",F);break;case n.Hover:default:(r=t.value)==null||r.addEventListener("mouseover",T),(B=t.value)==null||B.addEventListener("mouseleave",_);break}},h=()=>{var e,a,i,r;(e=t.value)==null||e.removeEventListener("click",g),(a=t.value)==null||a.removeEventListener("focus",y),(i=t.value)==null||i.removeEventListener("mouseover",T),(r=t.value)==null||r.removeEventListener("mouseleave",_)};return q(()=>{E(),b()}),D(()=>{h()}),(e,a)=>($(),N(U,null,[d("div",{ref_key:"toggleRef",ref:t,class:"ds-inline"},[k(e.$slots,"toggle",{},void 0,!0)],512),j(d("div",M,[d("div",{ref_key:"contentRef",ref:o,class:"ds-absolute ds-z-10 ds-inline-block ds-rounded-lg ds-bg-black/65 ds-px-3 ds-py-2 ds-text-sm ds-font-medium ds-text-white ds-shadow-sm ds-transition-opacity ds-duration-300"},[k(e.$slots,"default",{},void 0,!0),a[0]||(a[0]=d("div",{class:"tooltip-arrow","data-popper-arrow":""},null,-1))],512)],512),[[I,l.value]])],64))}});const O=z(H,[["__scopeId","data-v-419a3aa7"]]);H.__docgenInfo={exportName:"default",displayName:"BTooltip",description:"",tags:{},props:[{name:"modelValue",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"undefined"}},{name:"position",description:"Position of opened tooltip compare to its toggle.",required:!1,type:{name:"TSLiteralType"},defaultValue:{func:!1,value:"BTooltipPosition.Top"}},{name:"openEvent",description:"Event to open tooltip.",required:!1,type:{name:"TSLiteralType"},defaultValue:{func:!1,value:"BTooltipOpenEvent.Hover"}}],events:[{name:"update:modelValue",type:{names:["boolean"]},description:"Update value, param: <code>value: boolean</code>",properties:[{type:{names:["mixed"]},description:"e"},{type:{names:["mixed"]},name:"value"}],tags:[{title:"param",type:{name:"mixed"},description:"e"},{title:"param",type:{name:"mixed"},name:"value"}]}],slots:[{name:"toggle"},{name:"default"}],sourceFiles:["/home/runner/work/design-system/design-system/src/components/BTooltip.vue"]};const K={title:"Components/Tooltip",parameters:{docs:{description:{component:"The <code>BTooltip</code> component is used for conveying information when a user hovers over an element."}}},component:O,tags:["autodocs"],argTypes:{position:{control:"select",options:Object.values(p)},openEvent:{control:"select",options:Object.values(n)},toggle:{control:"text",description:"Toggle"},default:{control:"text",description:"Tooltip's content"}},args:{position:p.Top,openEvent:n.Hover}},u={render:v=>({components:{BTooltip:O},setup(){const m=c(!1);return{args:v,tooltip:m}},template:`
      <div style="height: 200px; padding-top: 16px">
        <BTooltip v-bind="args" v-model="tooltip">
          <template v-if="args.toggle" #toggle><span v-html="args.toggle" /></template>
          <template v-if="args.default" #default><span v-html="args.default" /></template>
        </BTooltip>
      </div>
    `}),args:{toggle:"<b>Hover me!</b>",default:"<div>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</div>"}};var L,V,w;u.parameters={...u.parameters,docs:{...(L=u.parameters)==null?void 0:L.docs,source:{originalSource:`{
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
}`,...(w=(V=u.parameters)==null?void 0:V.docs)==null?void 0:w.source}}};const Q=["Default"];export{u as Default,Q as __namedExportsOrder,K as default};
