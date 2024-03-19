import{_ as q}from"./BButton-cba7b1f6.js";import{j as C,e as V,k as m,B as L,g as $,o as d,x as p,y as f,m as k,n as B,d as r,z as T,s as I,X as P,T as W,l as D,b as y}from"./vue.esm-bundler-109c6e5d.js";import{i as n}from"./Enums-5b02df9b.js";import{u as w,l as R}from"./ComponentHelper-d29c08d8.js";import{B as U}from"./BOverlay-cd69014a.js";import{_ as v}from"./_plugin-vue_export-helper-c27b6911.js";const F=C({__name:"BModalContainer",props:{size:{default:n.Medium},fullscreen:{type:Boolean,default:!1},persistent:{type:Boolean,default:!1}},emits:["close"],setup(s,{emit:t}){const a=s,i=t,l=V(null),o=m(()=>{let e="ds-relative ds-w-full ds-h-auto ds-m-auto ds-flex ds-items-center ";if(a.fullscreen)e+="ds-w-screen ds-h-screen ";else switch(e+="ds-p-4 ",a.size){case n.Small:e+="ds-max-w-md ";break;case n.Large:e+="ds-max-w-4xl ";break;case n.Medium:default:e+="ds-max-w-2xl ";break}return e}),c=m(()=>{let e="ds-relative ds-bg-white ds-rounded-lg ds-shadow ";return e+=a.fullscreen?"ds-w-screen ds-h-screen ds-rounded-none ":"",e}),_=()=>{document.addEventListener("keydown",g)},g=e=>{e.key==="Escape"&&i("close")},S=()=>{document.addEventListener("click",h)},h=e=>{[l.value].some(j=>e.composedPath().includes(j))||i("close")};return L(()=>{a.persistent||setTimeout(()=>{_(),S()},200)}),$(()=>{a.persistent||(document.removeEventListener("keydown",g),document.removeEventListener("click",h))}),(e,O)=>(d(),p(U,null,{default:f(()=>[k("div",{class:B([o.value,"modal-wrapper"])},[k("div",{ref_key:"modalWrapperContentRef",ref:l,class:B([c.value,"modal-wrapper-content ds-w-full"])},[r(e.$slots,"default")],2)],2)]),_:3}))}});F.__docgenInfo={exportName:"default",displayName:"BModalContainer",description:"",tags:{},props:[{name:"size",required:!1,type:{name:"BModalSize"},defaultValue:{func:!1,value:"BModalSize.Medium"}},{name:"fullscreen",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"persistent",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"false"}}],events:[{name:"close"}],slots:[{name:"default"}],sourceFiles:["/home/runner/work/design-system/design-system/src/components/BModal/BModalContainer.vue"]};const A={inheritAttrs:!1},M=C({...A,__name:"BModal",props:{modelValue:{type:Boolean},size:{default:n.Medium},fullscreen:{type:Boolean,default:!1},persistent:{type:Boolean,default:!1}},emits:["update:modelValue"],setup(s,{emit:t}){const a=s,i=t,l=m({get(){return a.modelValue},set(o){i("update:modelValue",o)}});return T(l,o=>{o?R():w()},{immediate:!0}),$(()=>{w()}),(o,c)=>(d(),p(W,{to:"body"},[I(P,{"enter-active-class":"ds-transition-all ds-ease-in-out","enter-from-class":"ds-opacity-0","enter-to-class":"ds-opacity-1","leave-active-class":"ds-transition-all ds-ease-in-out","leave-from-class":"ds-opacity-1","leave-to-class":"ds-opacity-0"},{default:f(()=>[l.value?(d(),p(F,{key:0,class:B(o.$attrs.class),fullscreen:a.fullscreen,persistent:a.persistent,size:a.size,onClose:c[0]||(c[0]=_=>l.value=!1)},{default:f(()=>[r(o.$slots,"default")]),_:3},8,["class","fullscreen","persistent","size"])):D("",!0)]),_:3})]))}});M.__docgenInfo={exportName:"default",displayName:"BModal",description:"",tags:{},props:[{name:"modelValue",required:!0,type:{name:"boolean"}},{name:"size",description:"Modal size.",required:!1,type:{name:"BModalSize"},defaultValue:{func:!1,value:"BModalSize.Medium"}},{name:"fullscreen",description:"Fullscreen modal.",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"persistent",description:'Prevent modal from closing when clicking outside or pressing "Esc".',required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"false"}}],events:[{name:"update:modelValue",type:{names:["boolean"]},description:"Update value, param: <code>value: boolean</code>",properties:[{type:{names:["mixed"]},description:"e"},{type:{names:["mixed"]},name:"value"}],tags:[{title:"param",type:{name:"mixed"},description:"e"},{title:"param",type:{name:"mixed"},name:"value"}]}],slots:[{name:"default"}],sourceFiles:["/home/runner/work/design-system/design-system/src/components/BModal/BModal.vue"]};const E={},X={class:"ds-p-4"};function G(s,t){return d(),y("div",X,[r(s.$slots,"default")])}const J=v(E,[["render",G]]);E.__docgenInfo={displayName:"BModalBody",description:"",tags:{},slots:[{name:"default"}],sourceFiles:["/home/runner/work/design-system/design-system/src/components/BModal/BModalBody.vue"]};const H={},K={class:"ds-flex ds-items-center ds-justify-end ds-rounded-b-lg ds-p-4"};function Q(s,t){return d(),y("div",K,[r(s.$slots,"default")])}const Y=v(H,[["render",Q]]);H.__docgenInfo={displayName:"BModalFooter",description:"",tags:{},slots:[{name:"default"}],sourceFiles:["/home/runner/work/design-system/design-system/src/components/BModal/BModalFooter.vue"]};const N={},Z={class:"ds-flex ds-items-start ds-justify-between ds-rounded-t-lg ds-p-4"};function ee(s,t){return d(),y("div",Z,[r(s.$slots,"default")])}const se=v(N,[["render",ee]]);N.__docgenInfo={displayName:"BModalHeader",description:"",tags:{},slots:[{name:"default"}],sourceFiles:["/home/runner/work/design-system/design-system/src/components/BModal/BModalHeader.vue"]};const ie={title:"Components/Modal",parameters:{docs:{description:{component:"The <code>BModal</code> component inform users about a specific task and may contain critical information, require decisions, or involve multiple tasks."}}},component:M,tags:["autodocs"],argTypes:{size:{control:"select",options:Object.values(n)}},args:{modelValue:!1,size:n.Medium,fullscreen:!1,persistent:!1}},u={render:s=>({components:{BModal:M,BModalHeader:se,BModalBody:J,BModalFooter:Y,BButton:q},setup(){const t=V({test:!1});return{args:s,modals:t}},template:`
      <BButton @click="modals.test = true">{{ 'Open Modal' }}</BButton>
      <BModal v-bind="args" v-model="modals.test">
        <BModalHeader>
          <span style="font-size: 20px; font-weight: 600">{{ 'Modal Header' }}</span>
        </BModalHeader>
        <BModalBody>
          <div class="ds-flex ds-justify-center">
            <img src="https://wallpapers.com/images/hd/attractive-lake-nature-pczghhhvhzi0yf7t.webp" class="rounded-lg object-cover" style="max-height: 400px" alt="" />
          </div>
        </BModalBody>
        <BModalFooter>
          <BButton @click="modals.test = false">{{ 'Close' }}</BButton>
        </BModalFooter>
      </BModal>
    `}),args:{}};var x,z,b;u.parameters={...u.parameters,docs:{...(x=u.parameters)==null?void 0:x.docs,source:{originalSource:`{
  render: (args: any) => ({
    components: {
      BModal,
      BModalHeader,
      BModalBody,
      BModalFooter,
      BButton
    },
    setup() {
      const modals = ref({
        test: false
      });
      return {
        args,
        modals
      };
    },
    template: \`
      <BButton @click="modals.test = true">{{ 'Open Modal' }}</BButton>
      <BModal v-bind="args" v-model="modals.test">
        <BModalHeader>
          <span style="font-size: 20px; font-weight: 600">{{ 'Modal Header' }}</span>
        </BModalHeader>
        <BModalBody>
          <div class="ds-flex ds-justify-center">
            <img src="https://wallpapers.com/images/hd/attractive-lake-nature-pczghhhvhzi0yf7t.webp" class="rounded-lg object-cover" style="max-height: 400px" alt="" />
          </div>
        </BModalBody>
        <BModalFooter>
          <BButton @click="modals.test = false">{{ 'Close' }}</BButton>
        </BModalFooter>
      </BModal>
    \`
  }),
  args: {}
}`,...(b=(z=u.parameters)==null?void 0:z.docs)==null?void 0:b.source}}};const ce=["Default"];export{u as Default,ce as __namedExportsOrder,ie as default};
