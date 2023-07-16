import{_ as h}from"./BButton-86b65c44.js";import{d as y,a as v,o as B,k as f,l as x,w as C,m as b,e as w,g as S,T as V,p as E}from"./vue.esm-bundler-46649701.js";import{_ as k}from"./_plugin-vue_export-helper-c27b6911.js";import"./Enums-473b4e69.js";const i=y({__name:"BCollapse",props:{modelValue:{type:Boolean}},emits:["update:modelValue"],setup(o,{emit:a}){const d=o,u=v({get(){return d.modelValue},set(e){a("update:modelValue",e)}}),c=e=>{const{width:t}=getComputedStyle(e);e.style.width=t,e.style.position="absolute",e.style.visibility="hidden",e.style.height="auto";const{height:_}=getComputedStyle(e);e.style.width="",e.style.position="",e.style.visibility="",e.style.height="0px",getComputedStyle(e).height,requestAnimationFrame(()=>{e.style.height=_})},m=e=>{e.style.height="auto"},g=e=>{const{height:t}=getComputedStyle(e);e.style.height=t,getComputedStyle(e).height,requestAnimationFrame(()=>{e.style.height="0px"})};return(e,t)=>(B(),f(V,{name:"expand",onEnter:c,onAfterEnter:m,onLeave:g},{default:x(()=>[C(w("div",null,[S(e.$slots,"default",{},void 0,!0)],512),[[b,u.value]])]),_:3}))}});const r=k(i,[["__scopeId","data-v-dcc7e3ef"]]);i.__docgenInfo={exportName:"default",displayName:"BCollapse",description:"",tags:{},props:[{name:"modelValue",required:!0,type:{name:"boolean"}}],events:[{name:"update:modelValue"}],slots:[{name:"default"}],sourceFiles:["/Users/thinhnguyen/Downloads/Projects/7PMLabs/7pmlabs-design-system/src/components/BCollapse.vue"]};const L={title:"7PMLabs/Collapse",component:r,tags:["autodocs"],args:{modelValue:!0}},s={render:o=>({components:{BButton:h,BCollapse:r},setup(){const a=E(!1);return{args:o,expansion:a}},template:`
      <BButton v-bind="args" @click="expansion = !expansion">{{ expansion ? 'Collapse' : 'Expand' }}</BButton>
      <BCollapse v-bind="args" v-model="expansion"><div>Content...</div></BCollapse>
    `}),args:{}};var n,l,p;s.parameters={...s.parameters,docs:{...(n=s.parameters)==null?void 0:n.docs,source:{originalSource:`{
  render: (args: any) => ({
    components: {
      BButton,
      BCollapse
    },
    setup() {
      const expansion = ref(false);
      return {
        args,
        expansion
      };
    },
    template: \`
      <BButton v-bind="args" @click="expansion = !expansion">{{ expansion ? 'Collapse' : 'Expand' }}</BButton>
      <BCollapse v-bind="args" v-model="expansion"><div>Content...</div></BCollapse>
    \`
  }),
  args: {}
}`,...(p=(l=s.parameters)==null?void 0:l.docs)==null?void 0:p.source}}};const N=["Default"];export{s as Default,N as __namedExportsOrder,L as default};
//# sourceMappingURL=BCollapse.stories-aa5e1f85.js.map
