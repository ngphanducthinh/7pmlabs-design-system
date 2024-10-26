import{_ as j}from"./BButton-972c772c.js";import{e as C,a as V,f as m,s as L,d as $,o as d,m as p,q as f,h as w,n as B,r,w as T,k as I,Q as P,T as W,g as D,c as y}from"./vue.esm-bundler-ceeda665.js";import{h as l}from"./Enums-b5cac340.js";import{u as k,l as R}from"./ComponentHelper-8c2ae0a5.js";import{B as U}from"./BOverlay-6e4173f0.js";import{_ as v}from"./_plugin-vue_export-helper-c27b6911.js";const F=C({__name:"BModalContainer",props:{size:{default:l.Medium},fullscreen:{type:Boolean,default:!1},persistent:{type:Boolean,default:!1}},emits:["close"],setup(s,{emit:t}){const a=s,i=t,n=V(null),o=m(()=>{let e="ds-relative ds-w-full ds-h-auto ds-m-auto ds-flex ds-items-center ";if(a.fullscreen)e+="ds-w-screen ds-h-screen ";else switch(e+="ds-p-4 ",a.size){case l.Small:e+="ds-max-w-md ";break;case l.Large:e+="ds-max-w-4xl ";break;case l.Medium:default:e+="ds-max-w-2xl ";break}return e}),c=m(()=>{let e="ds-relative ds-rounded-lg ds-shadow ";return e+=a.fullscreen?"ds-w-screen ds-h-screen ds-rounded-none ":"",e}),g=()=>{document.addEventListener("keydown",_)},_=e=>{e.key==="Escape"&&i("close")},S=()=>{document.addEventListener("click",h)},h=e=>{[n.value].some(O=>e.composedPath().includes(O))||i("close")};return L(()=>{a.persistent||setTimeout(()=>{g(),S()},200)}),$(()=>{a.persistent||(document.removeEventListener("keydown",_),document.removeEventListener("click",h))}),(e,q)=>(d(),p(U,null,{default:f(()=>[w("div",{class:B([o.value,"modal-wrapper"])},[w("div",{ref_key:"modalWrapperContentRef",ref:n,class:B([c.value,"modal-wrapper-content ds-w-full"])},[r(e.$slots,"default")],2)],2)]),_:3}))}});F.__docgenInfo={exportName:"default",displayName:"BModalContainer",description:"",tags:{},props:[{name:"size",required:!1,type:{name:"BModalSize"},defaultValue:{func:!1,value:"BModalSize.Medium"}},{name:"fullscreen",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"persistent",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"false"}}],events:[{name:"close"}],slots:[{name:"default"}],sourceFiles:["/home/runner/work/design-system/design-system/src/components/BModal/BModalContainer.vue"]};const A={inheritAttrs:!1},M=C({...A,__name:"BModal",props:{modelValue:{type:Boolean},size:{default:l.Medium},fullscreen:{type:Boolean,default:!1},persistent:{type:Boolean,default:!1}},emits:["update:modelValue"],setup(s,{emit:t}){const a=s,i=t,n=m({get(){return a.modelValue},set(o){i("update:modelValue",o)}});return T(n,o=>{o?R():k()},{immediate:!0}),$(()=>{k()}),(o,c)=>(d(),p(W,{to:"body"},[I(P,{"enter-active-class":"ds-transition-all ds-ease-in-out","enter-from-class":"ds-opacity-0","enter-to-class":"ds-opacity-1","leave-active-class":"ds-transition-all ds-ease-in-out","leave-from-class":"ds-opacity-1","leave-to-class":"ds-opacity-0"},{default:f(()=>[n.value?(d(),p(F,{key:0,class:B(o.$attrs.class),fullscreen:a.fullscreen,persistent:a.persistent,size:a.size,onClose:c[0]||(c[0]=g=>n.value=!1)},{default:f(()=>[r(o.$slots,"default")]),_:3},8,["class","fullscreen","persistent","size"])):D("",!0)]),_:3})]))}});M.__docgenInfo={exportName:"default",displayName:"BModal",description:"",tags:{},props:[{name:"modelValue",required:!0,type:{name:"boolean"}},{name:"size",description:"Modal size.",required:!1,type:{name:"BModalSize"},defaultValue:{func:!1,value:"BModalSize.Medium"}},{name:"fullscreen",description:"Fullscreen modal.",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"persistent",description:'Prevent modal from closing when clicking outside or pressing "Esc".',required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"false"}}],events:[{name:"update:modelValue",type:{names:["boolean"]},description:"Update value, param: <code>value: boolean</code>",properties:[{type:{names:["mixed"]},description:"e"},{type:{names:["mixed"]},name:"value"}],tags:[{title:"param",type:{name:"mixed"},description:"e"},{title:"param",type:{name:"mixed"},name:"value"}]}],slots:[{name:"default"}],sourceFiles:["/home/runner/work/design-system/design-system/src/components/BModal/BModal.vue"]};const E={},Q={class:"ds-bg-white ds-p-4"};function G(s,t){return d(),y("div",Q,[r(s.$slots,"default")])}const J=v(E,[["render",G]]);E.__docgenInfo={displayName:"BModalBody",description:"",tags:{},slots:[{name:"default"}],sourceFiles:["/home/runner/work/design-system/design-system/src/components/BModal/BModalBody.vue"]};const H={},K={class:"ds-flex ds-items-center ds-justify-end ds-rounded-b-lg ds-bg-white ds-p-4"};function X(s,t){return d(),y("div",K,[r(s.$slots,"default")])}const Y=v(H,[["render",X]]);H.__docgenInfo={displayName:"BModalFooter",description:"",tags:{},slots:[{name:"default"}],sourceFiles:["/home/runner/work/design-system/design-system/src/components/BModal/BModalFooter.vue"]};const N={},Z={class:"ds-flex ds-items-start ds-justify-between ds-rounded-t-lg ds-bg-white ds-p-4"};function ee(s,t){return d(),y("div",Z,[r(s.$slots,"default")])}const se=v(N,[["render",ee]]);N.__docgenInfo={displayName:"BModalHeader",description:"",tags:{},slots:[{name:"default"}],sourceFiles:["/home/runner/work/design-system/design-system/src/components/BModal/BModalHeader.vue"]};const ie={title:"Components/Modal",parameters:{docs:{description:{component:"The <code>BModal</code> component inform users about a specific task and may contain critical information, require decisions, or involve multiple tasks."}}},component:M,tags:["autodocs"],argTypes:{size:{control:"select",options:Object.values(l)}},args:{modelValue:!1,size:l.Medium,fullscreen:!1,persistent:!1}},u={render:s=>({components:{BModal:M,BModalHeader:se,BModalBody:J,BModalFooter:Y,BButton:j},setup(){const t=V({test:!1});return{args:s,modals:t}},template:`
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
    `}),args:{}};var x,b,z;u.parameters={...u.parameters,docs:{...(x=u.parameters)==null?void 0:x.docs,source:{originalSource:`{
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
}`,...(z=(b=u.parameters)==null?void 0:b.docs)==null?void 0:z.source}}};const ce=["Default"];export{u as Default,ce as __namedExportsOrder,ie as default};
