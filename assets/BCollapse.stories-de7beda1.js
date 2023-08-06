import{_ as h}from"./BButton-a228ab24.js";import{j as y,k as v,o as B,t as f,L as x,w as C,v as b,m as w,e as S,W as V,b as E}from"./vue.esm-bundler-54bcf90c.js";import{_ as k}from"./_plugin-vue_export-helper-c27b6911.js";import"./Enums-c45a7702.js";const p=y({__name:"BCollapse",props:{modelValue:{type:Boolean}},emits:["update:modelValue"],setup(o,{emit:a}){const d=o,u=v({get(){return d.modelValue},set(e){a("update:modelValue",e)}}),c=e=>{const{width:t}=getComputedStyle(e);e.style.width=t,e.style.position="absolute",e.style.visibility="hidden",e.style.height="auto";const{height:g}=getComputedStyle(e);e.style.width="",e.style.position="",e.style.visibility="",e.style.height="0px",getComputedStyle(e).height,requestAnimationFrame(()=>{e.style.height=g})},m=e=>{e.style.height="auto"},_=e=>{const{height:t}=getComputedStyle(e);e.style.height=t,getComputedStyle(e).height,requestAnimationFrame(()=>{e.style.height="0px"})};return(e,t)=>(B(),f(V,{name:"expand",onEnter:c,onAfterEnter:m,onLeave:_},{default:x(()=>[C(w("div",null,[S(e.$slots,"default",{},void 0,!0)],512),[[b,u.value]])]),_:3}))}});const r=k(p,[["__scopeId","data-v-dcc7e3ef"]]);p.__docgenInfo={exportName:"default",displayName:"BCollapse",description:"",tags:{},props:[{name:"modelValue",required:!0,type:{name:"boolean"}}],events:[{name:"update:modelValue"}],slots:[{name:"default"}],sourceFiles:["/Users/thinhnguyen/Downloads/Projects/7PMLabs/7pmlabs-design-system/src/components/BCollapse.vue"]};const F={title:"7PMLabs/Collapse",component:r,tags:["autodocs"],args:{modelValue:!0}},s={render:o=>({components:{BButton:h,BCollapse:r},setup(){const a=E(!1);return{args:o,expansion:a}},template:`
      <BButton v-bind="args" @click="expansion = !expansion">{{ expansion ? 'Collapse' : 'Expand' }}</BButton>
      <BCollapse v-bind="args" v-model="expansion"><div>Content...</div></BCollapse>
    `}),args:{}};var n,l,i;s.parameters={...s.parameters,docs:{...(n=s.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
}`,...(i=(l=s.parameters)==null?void 0:l.docs)==null?void 0:i.source}}};const N=["Default"];export{s as Default,N as __namedExportsOrder,F as default};
//# sourceMappingURL=BCollapse.stories-de7beda1.js.map
