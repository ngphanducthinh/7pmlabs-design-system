import{_ as m}from"./BButton-e1ecb006.js";import{j as u,k as c,o as g,b as B,m as f,d as v,n as x,e as C}from"./vue.esm-bundler-0e9fd243.js";import"./Enums-5b02df9b.js";const y={class:"ds-overflow-hidden"},s=u({__name:"BCollapse",props:{modelValue:{type:Boolean}},emits:["update:modelValue"],setup(n,{emit:o}){const l=n,d=o,p=c({get(){return l.modelValue},set(a){d("update:modelValue",a)}});return(a,b)=>(g(),B("div",{class:x([{"ds-grid-rows-[1fr]":p.value},"ds-grid ds-grid-rows-[0fr] ds-transition-[grid-template-rows] ds-duration-300"])},[f("div",y,[v(a.$slots,"default")])],2))}});s.__docgenInfo={exportName:"default",displayName:"BCollapse",description:"",tags:{},props:[{name:"modelValue",required:!0,type:{name:"boolean"}}],events:[{name:"update:modelValue",type:{names:["boolean"]},description:"Update value, param <code>value: boolean</code>",properties:[{type:{names:["mixed"]},description:"e"},{type:{names:["mixed"]},name:"value"}],tags:[{title:"param",type:{name:"mixed"},description:"e"},{title:"param",type:{name:"mixed"},name:"value"}]}],slots:[{name:"default"}],sourceFiles:["/home/runner/work/design-system/design-system/src/components/BCollapse.vue"]};const q={title:"Components/Collapse",parameters:{docs:{description:{component:"The <code>BCollapse</code> component is useful for reducing vertical space with large amounts of information."}}},component:s,tags:["autodocs"],args:{modelValue:!0}},e={render:n=>({components:{BButton:m,BCollapse:s},setup(){const o=C(!1);return{args:n,expansion:o}},template:`
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
}`,...(i=(r=e.parameters)==null?void 0:r.docs)==null?void 0:i.source}}};const k=["Default"];export{e as Default,k as __namedExportsOrder,q as default};
