import{_ as m}from"./BButton-972c772c.js";import{e as u,f as c,o as g,c as B,h as f,r as v,n as x,a as C}from"./vue.esm-bundler-ceeda665.js";import"./Enums-b5cac340.js";const y={class:"ds-overflow-hidden"},t=u({__name:"BCollapse",props:{modelValue:{type:Boolean}},emits:["update:modelValue"],setup(o,{emit:a}){const l=o,d=a,p=c({get(){return l.modelValue},set(s){d("update:modelValue",s)}});return(s,_)=>(g(),B("div",{class:x([{"ds-grid-rows-[1fr]":p.value},"ds-grid ds-grid-rows-[0fr] ds-transition-[grid-template-rows] ds-duration-300"])},[f("div",y,[v(s.$slots,"default")])],2))}});t.__docgenInfo={exportName:"default",displayName:"BCollapse",description:"",tags:{},props:[{name:"modelValue",required:!0,type:{name:"boolean"}}],events:[{name:"update:modelValue",type:{names:["boolean"]},description:"Update value, param <code>value: boolean</code>",properties:[{type:{names:["mixed"]},description:"e"},{type:{names:["mixed"]},name:"value"}],tags:[{title:"param",type:{name:"mixed"},description:"e"},{title:"param",type:{name:"mixed"},name:"value"}]}],slots:[{name:"default"}],sourceFiles:["/home/runner/work/design-system/design-system/src/components/BCollapse.vue"]};const q={title:"Components/Collapse",parameters:{docs:{description:{component:"The <code>BCollapse</code> component is useful for reducing vertical space with large amounts of information."}}},component:t,tags:["autodocs"],args:{modelValue:!0}},e={render:o=>({components:{BButton:m,BCollapse:t},setup(){const a=C(!1);return{args:o,expansion:a}},template:`
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
    `}),args:{}};var n,r,i;e.parameters={...e.parameters,docs:{...(n=e.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
}`,...(i=(r=e.parameters)==null?void 0:r.docs)==null?void 0:i.source}}};const w=["Default"];export{e as Default,w as __namedExportsOrder,q as default};
