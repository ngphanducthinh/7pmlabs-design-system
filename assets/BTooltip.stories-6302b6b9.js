import{j as x,b as p,k as b,B as H,g as O,d as C,m as d,e as B,w as S,v as I,n as P,o as j,J as D,K as F}from"./vue.esm-bundler-54bcf90c.js";import{d as a,e as n}from"./Enums-c45a7702.js";import{_ as M}from"./_plugin-vue_export-helper-c27b6911.js";const N=t=>(D("data-v-522fcb10"),t=t(),F(),t),R={class:"ds-inline"},g={class:"ds-relative"},z=N(()=>d("div",{class:"tooltip-arrow","data-popper-arrow":""},null,-1)),w=x({__name:"BTooltip",props:{modelValue:{type:Boolean,default:!1},position:{default:a.Top},openEvent:{default:n.Hover}},emits:["update:modelValue"],setup(t,{emit:i}){const l=t,u=p(null);let e;const c=p(!1),s=b({get(){return l.modelValue!==void 0?l.modelValue:c.value},set(o){l.modelValue!==void 0?i("update:modelValue",o):c.value=o}}),V=b(()=>{let o="ds-inline-block ds-absolute ds-z-10 ds-py-2 ds-px-3 ds-text-sm ds-font-medium ds-text-white ds-bg-black/[0.65] ds-rounded-lg ds-shadow-sm ds-transition-opacity ds-duration-300 ";switch(l.position){case a.Right:o+=" ";break;case a.Bottom:o+=" ";break;case a.Left:o+=" ";break;case a.Top:default:o+="ds-bottom-6 ";break}return o}),v=()=>{s.value=!s.value},m=()=>{s.value=!0},L=()=>{s.value=!1},f=()=>{s.value=!0},_=()=>{s.value=!1};return H(()=>{switch(e=u.value,l.openEvent){case n.Click:e==null||e.addEventListener("click",v);break;case n.Focus:e==null||e.addEventListener("focus",m),e==null||e.addEventListener("focusout",L);break;case n.Hover:default:e==null||e.addEventListener("mouseover",f),e==null||e.addEventListener("mouseleave",_);break}}),O(()=>{e==null||e.removeEventListener("click",v),e==null||e.removeEventListener("focus",m),e==null||e.removeEventListener("mouseover",f),e==null||e.removeEventListener("mouseleave",_)}),(o,U)=>(j(),C("div",{ref_key:"toggleRef",ref:u},[d("div",R,[B(o.$slots,"toggle",{},void 0,!0)]),S(d("div",g,[d("div",{class:P(V.value)},[B(o.$slots,"default",{},void 0,!0),z],2)],512),[[I,s.value]])],512))}});const y=M(w,[["__scopeId","data-v-522fcb10"]]);w.__docgenInfo={exportName:"default",displayName:"BTooltip",description:"",tags:{},props:[{name:"modelValue",defaultValue:{func:!1,value:"false"}},{name:"position",defaultValue:{func:!1,value:"BTooltipPosition.Top"}},{name:"openEvent",defaultValue:{func:!1,value:"BTooltipOpenEvent.Hover"}}],events:[{name:"update:modelValue"}],slots:[{name:"toggle"},{name:"default"}],sourceFiles:["/Users/thinhnguyen/Downloads/Projects/7PMLabs/7pmlabs-design-system/src/components/BTooltip.vue"]};const K={title:"7PMLabs/Tooltip",component:y,tags:["autodocs"],argTypes:{position:{control:"select",options:Object.values(a)},openEvent:{control:"select",options:Object.values(n)}},args:{position:a.Top,openEvent:n.Hover}},r={render:t=>({components:{BTooltip:y},setup(){const i=p(!1);return{args:t,tooltip:i}},template:`
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
    `}),args:{}};var T,h,k;r.parameters={...r.parameters,docs:{...(T=r.parameters)==null?void 0:T.docs,source:{originalSource:`{
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
}`,...(k=(h=r.parameters)==null?void 0:h.docs)==null?void 0:k.source}}};const q=["Default"];export{r as Default,q as __namedExportsOrder,K as default};
//# sourceMappingURL=BTooltip.stories-6302b6b9.js.map
