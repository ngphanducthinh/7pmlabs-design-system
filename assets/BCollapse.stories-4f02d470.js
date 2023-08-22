import{_ as h}from"./BButton-4df78522.js";import{j as x,k as _,o as v,s as f,A as B,w as b,x as C,l as w,e as k,P as S,b as V}from"./vue.esm-bundler-c34c64cb.js";import{_ as E}from"./_plugin-vue_export-helper-c27b6911.js";import"./Enums-fb1fa8e1.js";const i=x({__name:"BCollapse",props:{modelValue:{type:Boolean}},emits:["update:modelValue"],setup(o,{emit:a}){const d=o,u=_({get(){return d.modelValue},set(e){a("update:modelValue",e)}}),m=e=>{const{width:t}=getComputedStyle(e);e.style.width=t,e.style.position="absolute",e.style.visibility="hidden",e.style.height="auto";const{height:g}=getComputedStyle(e);e.style.width="",e.style.position="",e.style.visibility="",e.style.height="0px",getComputedStyle(e).height,requestAnimationFrame(()=>{e.style.height=g})},c=e=>{e.style.height="auto"},y=e=>{const{height:t}=getComputedStyle(e);e.style.height=t,getComputedStyle(e).height,requestAnimationFrame(()=>{e.style.height="0px"})};return(e,t)=>(v(),f(S,{name:"expand",onEnter:m,onAfterEnter:c,onLeave:y},{default:B(()=>[b(w("div",null,[k(e.$slots,"default",{},void 0,!0)],512),[[C,u.value]])]),_:3}))}});const l=E(i,[["__scopeId","data-v-dcc7e3ef"]]);i.__docgenInfo={exportName:"default",displayName:"BCollapse",description:"",tags:{},props:[{name:"modelValue",required:!0,type:{name:"boolean"}}],events:[{name:"update:modelValue"}],slots:[{name:"default"}],sourceFiles:["/Users/thinhnguyen/Downloads/Projects/7PMLabs/7pmlabs-design-system/src/components/BCollapse.vue"]};const q={title:"Components/Collapse",component:l,tags:["autodocs"],args:{modelValue:!0}},s={render:o=>({components:{BButton:h,BCollapse:l},setup(){const a=V(!1);return{args:o,expansion:a}},template:`
      <BButton v-bind="args" @click="expansion = !expansion">{{ expansion ? 'Collapse' : 'Expand' }}</BButton>
      <BCollapse v-bind="args" v-model="expansion">
        <div style="
          margin-top: 1rem;
          padding: 1rem; 
          border-radius: 0.5rem; 
          box-shadow: 0 5px 10px rgba(0, 0, 0, 0.04), 0 1px 2px rgba(0, 0, 0, 0.06)"
        >
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book
        </div>
      </BCollapse>
    `}),args:{}};var n,r,p;s.parameters={...s.parameters,docs:{...(n=s.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
      <BCollapse v-bind="args" v-model="expansion">
        <div style="
          margin-top: 1rem;
          padding: 1rem; 
          border-radius: 0.5rem; 
          box-shadow: 0 5px 10px rgba(0, 0, 0, 0.04), 0 1px 2px rgba(0, 0, 0, 0.06)"
        >
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book
        </div>
      </BCollapse>
    \`
  }),
  args: {}
}`,...(p=(r=s.parameters)==null?void 0:r.docs)==null?void 0:p.source}}};const F=["Default"];export{s as Default,F as __namedExportsOrder,q as default};
//# sourceMappingURL=BCollapse.stories-4f02d470.js.map
