import{j as F,b as c,k as I,C as k,E as P,g as R,d as j,l as v,e as w,w as q,y as D,F as N,o as M,L as $,M as z}from"./vue.esm-bundler-d836205b.js";import{e as u,f as r}from"./Enums-6a2836ab.js";import{_ as U}from"./_plugin-vue_export-helper-c27b6911.js";const A=s=>($("data-v-65d47649"),s=s(),z(),s),G={class:"ds-relative"},J=A(()=>v("div",{class:"tooltip-arrow","data-popper-arrow":""},null,-1)),H=F({__name:"BTooltip",props:{modelValue:{type:Boolean,default:!1},position:{default:u.Top},openEvent:{default:r.Hover}},emits:["update:modelValue"],setup(s,{emit:m}){const n=s,t=c(null),o=c(null),f=c(!1),a=I({get(){return n.modelValue!==void 0?n.modelValue:f.value},set(e){n.modelValue!==void 0?m("update:modelValue",e):f.value=e}});k(()=>n.position,()=>{O(),E()}),k(()=>n.openEvent,()=>{h(),B()});const g=()=>{a.value=!a.value},_=()=>{a.value=!0},C=()=>{a.value=!1},y=()=>{a.value=!0},T=()=>{a.value=!1},O=()=>{o.value&&(o.value.style.top="",o.value.style.right="",o.value.style.bottom="",o.value.style.left="")},E=()=>{if(o.value)switch(n.position){case u.Bottom:o.value.style.top="4px";break;case u.Top:default:o.value.style.bottom="24px";break}},B=()=>{var e,l,i,p,b;switch(n.openEvent){case r.Click:(e=t.value)==null||e.addEventListener("click",g);break;case r.Focus:(l=t.value)==null||l.addEventListener("focus",_),(i=t.value)==null||i.addEventListener("focusout",C);break;case r.Hover:default:(p=t.value)==null||p.addEventListener("mouseover",y),(b=t.value)==null||b.addEventListener("mouseleave",T);break}},h=()=>{var e,l,i,p;(e=t.value)==null||e.removeEventListener("click",g),(l=t.value)==null||l.removeEventListener("focus",_),(i=t.value)==null||i.removeEventListener("mouseover",y),(p=t.value)==null||p.removeEventListener("mouseleave",T)};return P(()=>{B(),E()}),R(()=>{h()}),(e,l)=>(M(),j(N,null,[v("div",{ref_key:"toggleRef",ref:t,class:"ds-inline"},[w(e.$slots,"toggle",{},void 0,!0)],512),q(v("div",G,[v("div",{ref_key:"contentRef",ref:o,class:"ds-absolute ds-z-10 ds-inline-block ds-rounded-lg ds-bg-black/[0.65] ds-px-3 ds-py-2 ds-text-sm ds-font-medium ds-text-white ds-shadow-sm ds-transition-opacity ds-duration-300"},[w(e.$slots,"default",{},void 0,!0),J],512)],512),[[D,a.value]])],64))}});const S=U(H,[["__scopeId","data-v-65d47649"]]);H.__docgenInfo={exportName:"default",displayName:"BTooltip",description:"",tags:{},props:[{name:"modelValue",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"position",description:"Position of opened tooltip compare to its toggle.",required:!1,type:{name:"TSLiteralType"},defaultValue:{func:!1,value:"BTooltipPosition.Top"}},{name:"openEvent",description:"Event to open tooltip.",required:!1,type:{name:"TSLiteralType"},defaultValue:{func:!1,value:"BTooltipOpenEvent.Hover"}}],events:[{name:"update:modelValue"}],slots:[{name:"toggle"},{name:"default"}],sourceFiles:["/home/runner/work/design-system/design-system/src/components/BTooltip.vue"]};const X={title:"Components/Tooltip",component:S,tags:["autodocs"],argTypes:{position:{control:"select",options:Object.values(u)},openEvent:{control:"select",options:Object.values(r)}},args:{position:u.Top,openEvent:r.Hover}},d={render:s=>({components:{BTooltip:S},setup(){const m=c(!1);return{args:s,tooltip:m}},template:`
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
//# sourceMappingURL=BTooltip.stories-0e486663.js.map
