import{j as F,b as c,k as I,C as k,E as P,g as R,d as j,l as v,e as w,w as q,y as D,F as N,o as M,L as $,M as z}from"./vue.esm-bundler-f0a4de28.js";import{d as p,e as r}from"./Enums-693cd203.js";import{_ as U}from"./_plugin-vue_export-helper-c27b6911.js";const A=s=>($("data-v-faa2c9b5"),s=s(),z(),s),G={class:"ds-relative"},J=A(()=>v("div",{class:"tooltip-arrow","data-popper-arrow":""},null,-1)),H=F({__name:"BTooltip",props:{modelValue:{type:Boolean,default:!1},position:{default:p.Top},openEvent:{default:r.Hover}},emits:["update:modelValue"],setup(s,{emit:m}){const a=s,t=c(null),o=c(null),f=c(!1),n=I({get(){return a.modelValue!==void 0?a.modelValue:f.value},set(e){a.modelValue!==void 0?m("update:modelValue",e):f.value=e}});k(()=>a.position,()=>{O(),E()}),k(()=>a.openEvent,()=>{B(),b()});const g=()=>{n.value=!n.value},_=()=>{n.value=!0},C=()=>{n.value=!1},y=()=>{n.value=!0},T=()=>{n.value=!1},O=()=>{o.value&&(o.value.style.top="",o.value.style.right="",o.value.style.bottom="",o.value.style.left="")},E=()=>{if(o.value)switch(a.position){case p.Bottom:o.value.style.top="4px";break;case p.Top:default:o.value.style.bottom="24px";break}},b=()=>{var e,l,i,u,h;switch(a.openEvent){case r.Click:(e=t.value)==null||e.addEventListener("click",g);break;case r.Focus:(l=t.value)==null||l.addEventListener("focus",_),(i=t.value)==null||i.addEventListener("focusout",C);break;case r.Hover:default:(u=t.value)==null||u.addEventListener("mouseover",y),(h=t.value)==null||h.addEventListener("mouseleave",T);break}},B=()=>{var e,l,i,u;(e=t.value)==null||e.removeEventListener("click",g),(l=t.value)==null||l.removeEventListener("focus",_),(i=t.value)==null||i.removeEventListener("mouseover",y),(u=t.value)==null||u.removeEventListener("mouseleave",T)};return P(()=>{b(),E()}),R(()=>{B()}),(e,l)=>(M(),j(N,null,[v("div",{ref_key:"toggleRef",ref:t,class:"ds-inline"},[w(e.$slots,"toggle",{},void 0,!0)],512),q(v("div",G,[v("div",{ref_key:"contentRef",ref:o,class:"ds-absolute ds-z-10 ds-inline-block ds-rounded-lg ds-bg-black/[0.65] ds-px-3 ds-py-2 ds-text-sm ds-font-medium ds-text-white ds-shadow-sm ds-transition-opacity ds-duration-300"},[w(e.$slots,"default",{},void 0,!0),J],512)],512),[[D,n.value]])],64))}});const S=U(H,[["__scopeId","data-v-faa2c9b5"]]);H.__docgenInfo={exportName:"default",displayName:"BTooltip",description:"",tags:{},props:[{name:"modelValue",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"position",required:!1,type:{name:"TSLiteralType"},defaultValue:{func:!1,value:"BTooltipPosition.Top"}},{name:"openEvent",required:!1,type:{name:"TSLiteralType"},defaultValue:{func:!1,value:"BTooltipOpenEvent.Hover"}}],events:[{name:"update:modelValue"}],slots:[{name:"toggle"},{name:"default"}],sourceFiles:["/home/runner/work/design-system/design-system/src/components/BTooltip.vue"]};const X={title:"Components/Tooltip",component:S,tags:["autodocs"],argTypes:{position:{control:"select",options:Object.values(p)},openEvent:{control:"select",options:Object.values(r)}},args:{position:p.Top,openEvent:r.Hover}},d={render:s=>({components:{BTooltip:S},setup(){const m=c(!1);return{args:s,tooltip:m}},template:`
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
    `}),args:{}};var L,x,V;d.parameters={...d.parameters,docs:{...(L=d.parameters)==null?void 0:L.docs,source:{originalSource:`{
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
}`,...(V=(x=d.parameters)==null?void 0:x.docs)==null?void 0:V.source}}};const Y=["Default"];export{d as Default,Y as __namedExportsOrder,X as default};
//# sourceMappingURL=BTooltip.stories-a8410f9a.js.map
