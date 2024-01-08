import{_ as p}from"./BButton-3c0b0fdc.js";import{j as m,k as u,o as c,b as g,l as B,d as f,n as v,e as x}from"./vue.esm-bundler-29df2e62.js";import"./Enums-25996506.js";const C={class:"ds-overflow-hidden"},s=m({__name:"BCollapse",props:{modelValue:{type:Boolean}},emits:["update:modelValue"],setup(n,{emit:o}){const l=n,d=u({get(){return l.modelValue},set(a){o("update:modelValue",a)}});return(a,y)=>(c(),g("div",{class:v([{"ds-grid-rows-[1fr]":d.value},"ds-grid ds-grid-rows-[0fr] ds-transition-[grid-template-rows] ds-duration-300"])},[B("div",C,[f(a.$slots,"default")])],2))}});s.__docgenInfo={exportName:"default",displayName:"BCollapse",description:"",tags:{},props:[{name:"modelValue",required:!0,type:{name:"boolean"}}],events:[{name:"update:modelValue",type:{names:["boolean"]},description:"Update value, param <code>value: boolean</code>",properties:[{type:{names:["mixed"]},description:"e"},{type:{names:["mixed"]},name:"value"}],tags:[{title:"param",type:{name:"mixed"},description:"e"},{title:"param",type:{name:"mixed"},name:"value"}]}],slots:[{name:"default"}],sourceFiles:["/home/runner/work/design-system/design-system/src/components/BCollapse.vue"]};const V={title:"Components/Collapse",parameters:{docs:{description:{component:"The <code>BCollapse</code> component is useful for reducing vertical space with large amounts of information."}}},component:s,tags:["autodocs"],args:{modelValue:!0}},e={render:n=>({components:{BButton:p,BCollapse:s},setup(){const o=x(!1);return{args:n,expansion:o}},template:`
      <BButton v-bind="args" @click="expansion = !expansion">{{ expansion ? 'Collapse' : 'Expand' }}</BButton>
      <BCollapse v-bind="args" v-model="expansion">
        <div style="
          margin-top: 1rem;
          padding: 1rem;
          border: 1px solid gray;
          border-radius: 1rem;
        "
        >
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis dolores exercitationem in ipsum mollitia
          officiis quos unde. Beatae earum, iure libero non nulla omnis quasi quia, ratione reprehenderit totam vel?
        </div>
      </BCollapse>
    `}),args:{}};var t,r,i;e.parameters={...e.parameters,docs:{...(t=e.parameters)==null?void 0:t.docs,source:{originalSource:`{
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
          border: 1px solid gray;
          border-radius: 1rem;
        "
        >
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis dolores exercitationem in ipsum mollitia
          officiis quos unde. Beatae earum, iure libero non nulla omnis quasi quia, ratione reprehenderit totam vel?
        </div>
      </BCollapse>
    \`
  }),
  args: {}
}`,...(i=(r=e.parameters)==null?void 0:r.docs)==null?void 0:i.source}}};const q=["Default"];export{e as Default,q as __namedExportsOrder,V as default};
