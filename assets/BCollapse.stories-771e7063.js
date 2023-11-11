import{_ as x}from"./BButton-ef6f7a45.js";import{j as _,k as v,o as B,s as f,B as b,w as C,y as k,l as w,e as S,P as V,b as E}from"./vue.esm-bundler-f0a4de28.js";import{_ as I}from"./_plugin-vue_export-helper-c27b6911.js";import"./Enums-693cd203.js";const i=_({__name:"BCollapse",props:{modelValue:{type:Boolean}},emits:["update:modelValue"],setup(o,{emit:n}){const m=o,u=v({get(){return m.modelValue},set(t){n("update:modelValue",t)}}),c=t=>{const e=t,{width:a}=getComputedStyle(e);e.style.width=a,e.style.position="absolute",e.style.visibility="hidden",e.style.height="auto";const{height:h}=getComputedStyle(e);e.style.width="",e.style.position="",e.style.visibility="",e.style.height="0px",getComputedStyle(e).height,requestAnimationFrame(()=>{e.style.height=h})},y=t=>{const e=t;e.style.height="auto"},g=t=>{const e=t,{height:a}=getComputedStyle(e);e.style.height=a,getComputedStyle(e).height,requestAnimationFrame(()=>{e.style.height="0px"})};return(t,e)=>(B(),f(V,{name:"expand",onEnter:c,onLeave:g,onAfterEnter:y},{default:b(()=>[C(w("div",null,[S(t.$slots,"default",{},void 0,!0)],512),[[k,u.value]])]),_:3}))}});const d=I(i,[["__scopeId","data-v-7eb7984f"]]);i.__docgenInfo={exportName:"default",displayName:"BCollapse",description:"",tags:{},props:[{name:"modelValue",required:!0,type:{name:"boolean"}}],events:[{name:"update:modelValue"}],slots:[{name:"default"}],sourceFiles:["/home/runner/work/design-system/design-system/src/components/BCollapse.vue"]};const F={title:"Components/Collapse",component:d,tags:["autodocs"],args:{modelValue:!0}},s={render:o=>({components:{BButton:x,BCollapse:d},setup(){const n=E(!1);return{args:o,expansion:n}},template:`
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
    `}),args:{}};var r,l,p;s.parameters={...s.parameters,docs:{...(r=s.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
}`,...(p=(l=s.parameters)==null?void 0:l.docs)==null?void 0:p.source}}};const N=["Default"];export{s as Default,N as __namedExportsOrder,F as default};
//# sourceMappingURL=BCollapse.stories-771e7063.js.map
