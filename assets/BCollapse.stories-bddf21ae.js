import{_ as i}from"./BButton-3c78e856.js";import{j as m,k as u,o as c,b as g,l as x,d as y,n as B,e as f}from"./vue.esm-bundler-3f3ee96a.js";import"./Enums-25996506.js";const b={class:"ds-overflow-hidden"},o=m({__name:"BCollapse",props:{modelValue:{type:Boolean}},emits:["update:modelValue"],setup(n,{emit:s}){const d=n,l=u({get(){return d.modelValue},set(a){s("update:modelValue",a)}});return(a,v)=>(c(),g("div",{class:B([{"ds-grid-rows-[1fr]":l.value},"ds-grid ds-grid-rows-[0fr] ds-transition-[grid-template-rows] ds-duration-300"])},[x("div",b,[y(a.$slots,"default")])],2))}});o.__docgenInfo={exportName:"default",displayName:"BCollapse",description:"",tags:{},props:[{name:"modelValue",required:!0,type:{name:"boolean"}}],slots:[{name:"default"}],sourceFiles:["/home/runner/work/design-system/design-system/src/components/BCollapse.vue"]};const _={title:"Components/Collapse",component:o,tags:["autodocs"],args:{modelValue:!0}},e={render:n=>({components:{BButton:i,BCollapse:o},setup(){const s=f(!1);return{args:n,expansion:s}},template:`
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
    `}),args:{}};var t,r,p;e.parameters={...e.parameters,docs:{...(t=e.parameters)==null?void 0:t.docs,source:{originalSource:`{
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
}`,...(p=(r=e.parameters)==null?void 0:r.docs)==null?void 0:p.source}}};const w=["Default"];export{e as Default,w as __namedExportsOrder,_ as default};
