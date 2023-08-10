import{j as P,b as c,k as S,C as k,E as I,g as j,d as D,l as v,e as w,w as R,x as M,F as N,o as U,L as $,M as z}from"./vue.esm-bundler-c34c64cb.js";import{d as p,e as r}from"./Enums-fb1fa8e1.js";import{_ as q}from"./_plugin-vue_export-helper-c27b6911.js";const A=s=>($("data-v-46c55aba"),s=s(),z(),s),G={class:"ds-relative"},J=A(()=>v("div",{class:"tooltip-arrow","data-popper-arrow":""},null,-1)),H=P({__name:"BTooltip",props:{modelValue:{type:Boolean,default:!1},position:{default:p.Top},openEvent:{default:r.Hover}},emits:["update:modelValue"],setup(s,{emit:m}){const a=s,t=c(null),o=c(null),f=c(!1),n=S({get(){return a.modelValue!==void 0?a.modelValue:f.value},set(e){a.modelValue!==void 0?m("update:modelValue",e):f.value=e}});k(()=>a.position,()=>{F(),y()}),k(()=>a.openEvent,()=>{T(),B()});const g=()=>{n.value=!n.value},_=()=>{n.value=!0},O=()=>{n.value=!1},E=()=>{n.value=!0},b=()=>{n.value=!1},F=()=>{o.value&&(o.value.style.top="",o.value.style.right="",o.value.style.bottom="",o.value.style.left="")},y=()=>{if(o.value)switch(a.position){case p.Bottom:o.value.style.top="4px";break;case p.Top:default:o.value.style.bottom="24px";break}},B=()=>{var e,l,u,i,h;switch(a.openEvent){case r.Click:(e=t.value)==null||e.addEventListener("click",g);break;case r.Focus:(l=t.value)==null||l.addEventListener("focus",_),(u=t.value)==null||u.addEventListener("focusout",O);break;case r.Hover:default:(i=t.value)==null||i.addEventListener("mouseover",E),(h=t.value)==null||h.addEventListener("mouseleave",b);break}},T=()=>{var e,l,u,i;(e=t.value)==null||e.removeEventListener("click",g),(l=t.value)==null||l.removeEventListener("focus",_),(u=t.value)==null||u.removeEventListener("mouseover",E),(i=t.value)==null||i.removeEventListener("mouseleave",b)};return I(()=>{B(),y()}),j(()=>{T()}),(e,l)=>(U(),D(N,null,[v("div",{ref_key:"toggleRef",ref:t,class:"ds-inline"},[w(e.$slots,"toggle",{},void 0,!0)],512),R(v("div",G,[v("div",{ref_key:"contentRef",ref:o,class:"ds-inline-block ds-absolute ds-z-10 ds-py-2 ds-px-3 ds-text-sm ds-font-medium ds-text-white ds-bg-black/[0.65] ds-rounded-lg ds-shadow-sm ds-transition-opacity ds-duration-300"},[w(e.$slots,"default",{},void 0,!0),J],512)],512),[[M,n.value]])],64))}});const C=q(H,[["__scopeId","data-v-46c55aba"]]);H.__docgenInfo={exportName:"default",displayName:"BTooltip",description:"",tags:{},props:[{name:"modelValue",defaultValue:{func:!1,value:"false"}},{name:"position",defaultValue:{func:!1,value:"BTooltipPosition.Top"}},{name:"openEvent",defaultValue:{func:!1,value:"BTooltipOpenEvent.Hover"}}],events:[{name:"update:modelValue"}],slots:[{name:"toggle"},{name:"default"}],sourceFiles:["/Users/thinhnguyen/Downloads/Projects/7PMLabs/7pmlabs-design-system/src/components/BTooltip.vue"]};const X={title:"Components/Tooltip",component:C,tags:["autodocs"],argTypes:{position:{control:"select",options:Object.values(p)},openEvent:{control:"select",options:Object.values(r)}},args:{position:p.Top,openEvent:r.Hover}},d={render:s=>({components:{BTooltip:C},setup(){const m=c(!1);return{args:s,tooltip:m}},template:`
      <div style="height: 200px; padding-top: 16px">
        <BTooltip v-bind="args" v-model="tooltip">
          <template #toggle>
            Hover me
          </template>
          <template #default>
            Hello world!
          </template>
        </BTooltip>
      </div>
    `}),args:{}};var x,L,V;d.parameters={...d.parameters,docs:{...(x=d.parameters)==null?void 0:x.docs,source:{originalSource:`{
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
          <template #toggle>
            Hover me
          </template>
          <template #default>
            Hello world!
          </template>
        </BTooltip>
      </div>
    \`
  }),
  args: {}
}`,...(V=(L=d.parameters)==null?void 0:L.docs)==null?void 0:V.source}}};const Y=["Default"];export{d as Default,Y as __namedExportsOrder,X as default};
//# sourceMappingURL=BTooltip.stories-388c0dbe.js.map
