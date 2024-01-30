import{_ as j}from"./BButton-a3c587ee.js";import{j as b,b as C,k as u,B as q,o as V,e as d,x as m,y as p,l as h,n as f,g as r,z as L,s as T,X as I,T as P,m as W,f as B}from"./vue.esm-bundler-25cc370e.js";import{i as n}from"./Enums-5b02df9b.js";import{u as k,l as D}from"./ComponentHelper-d29c08d8.js";import{B as R}from"./BOverlay-e4c15742.js";import{_ as y}from"./_plugin-vue_export-helper-c27b6911.js";const $=b({__name:"BModalContainer",props:{size:{default:n.Medium},fullscreen:{type:Boolean,default:!1},persistent:{type:Boolean,default:!1}},emits:["close"],setup(s,{emit:t}){const a=s,l=C(null),o=u(()=>{let e="ds-relative ds-w-full ds-h-auto ds-m-auto ds-flex ds-items-center ";if(a.fullscreen)e+="ds-w-screen ds-h-screen ";else switch(e+="ds-p-4 ",a.size){case n.Small:e+="ds-max-w-md ";break;case n.Large:e+="ds-max-w-4xl ";break;case n.Medium:default:e+="ds-max-w-2xl ";break}return e}),i=u(()=>{let e="ds-relative ds-bg-white ds-rounded-lg ds-shadow ";return e+=a.fullscreen?"ds-w-screen ds-h-screen ds-rounded-none ":"",e}),M=()=>{document.addEventListener("keydown",_)},_=e=>{e.key==="Escape"&&t("close")},N=()=>{document.addEventListener("click",g)},g=e=>{[l.value].some(O=>e.composedPath().includes(O))||t("close")};return q(()=>{a.persistent||setTimeout(()=>{M(),N()},200)}),V(()=>{a.persistent||(document.removeEventListener("keydown",_),document.removeEventListener("click",g))}),(e,S)=>(d(),m(R,null,{default:p(()=>[h("div",{class:f([o.value,"modal-wrapper"])},[h("div",{ref_key:"modalWrapperContentRef",ref:l,class:f([i.value,"modal-wrapper-content ds-w-full"])},[r(e.$slots,"default")],2)],2)]),_:3}))}});$.__docgenInfo={exportName:"default",displayName:"BModalContainer",description:"",tags:{},props:[{name:"size",required:!1,type:{name:"BModalSize"},defaultValue:{func:!1,value:"BModalSize.Medium"}},{name:"fullscreen",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"persistent",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"false"}}],events:[{name:"close"}],slots:[{name:"default"}],sourceFiles:["/home/runner/work/design-system/design-system/src/components/BModal/BModalContainer.vue"]};const U={inheritAttrs:!1},v=b({...U,__name:"BModal",props:{modelValue:{type:Boolean},size:{default:n.Medium},fullscreen:{type:Boolean,default:!1},persistent:{type:Boolean,default:!1}},emits:["update:modelValue"],setup(s,{emit:t}){const a=s,l=u({get(){return a.modelValue},set(o){t("update:modelValue",o)}});return L(l,o=>{o?D():k()},{immediate:!0}),V(()=>{k()}),(o,i)=>(d(),m(P,{to:"body"},[T(I,{"enter-active-class":"ds-transition-all ds-ease-in-out","enter-from-class":"ds-opacity-0","enter-to-class":"ds-opacity-1","leave-active-class":"ds-transition-all ds-ease-in-out","leave-from-class":"ds-opacity-1","leave-to-class":"ds-opacity-0"},{default:p(()=>[l.value?(d(),m($,{key:0,class:f(o.$attrs.class),fullscreen:a.fullscreen,persistent:a.persistent,size:a.size,onClose:i[0]||(i[0]=M=>l.value=!1)},{default:p(()=>[r(o.$slots,"default")]),_:3},8,["class","fullscreen","persistent","size"])):W("",!0)]),_:3})]))}});v.__docgenInfo={exportName:"default",displayName:"BModal",description:"",tags:{},props:[{name:"modelValue",required:!0,type:{name:"boolean"}},{name:"size",description:"Modal size.",required:!1,type:{name:"BModalSize"},defaultValue:{func:!1,value:"BModalSize.Medium"}},{name:"fullscreen",description:"Fullscreen modal.",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"persistent",description:'Prevent modal from closing when clicking outside or pressing "Esc".',required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"false"}}],events:[{name:"update:modelValue",type:{names:["boolean"]},description:"Update value, param: <code>value: boolean</code>",properties:[{type:{names:["mixed"]},description:"e"},{type:{names:["mixed"]},name:"value"}],tags:[{title:"param",type:{name:"mixed"},description:"e"},{title:"param",type:{name:"mixed"},name:"value"}]}],slots:[{name:"default"}],sourceFiles:["/home/runner/work/design-system/design-system/src/components/BModal/BModal.vue"]};const F={},A={class:"ds-p-4"};function X(s,t){return d(),B("div",A,[r(s.$slots,"default")])}const G=y(F,[["render",X]]);F.__docgenInfo={displayName:"BModalBody",description:"",tags:{},slots:[{name:"default"}],sourceFiles:["/home/runner/work/design-system/design-system/src/components/BModal/BModalBody.vue"]};const E={},J={class:"ds-flex ds-items-center ds-justify-end ds-rounded-b-lg ds-p-4"};function K(s,t){return d(),B("div",J,[r(s.$slots,"default")])}const Q=y(E,[["render",K]]);E.__docgenInfo={displayName:"BModalFooter",description:"",tags:{},slots:[{name:"default"}],sourceFiles:["/home/runner/work/design-system/design-system/src/components/BModal/BModalFooter.vue"]};const H={},Y={class:"ds-flex ds-items-start ds-justify-between ds-rounded-t-lg ds-p-4"};function Z(s,t){return d(),B("div",Y,[r(s.$slots,"default")])}const ee=y(H,[["render",Z]]);H.__docgenInfo={displayName:"BModalHeader",description:"",tags:{},slots:[{name:"default"}],sourceFiles:["/home/runner/work/design-system/design-system/src/components/BModal/BModalHeader.vue"]};const re={title:"Components/Modal",parameters:{docs:{description:{component:"The <code>BModal</code> component inform users about a specific task and may contain critical information, require decisions, or involve multiple tasks."}}},component:v,tags:["autodocs"],argTypes:{size:{control:"select",options:Object.values(n)}},args:{modelValue:!1,size:n.Medium,fullscreen:!1,persistent:!1}},c={render:s=>({components:{BModal:v,BModalHeader:ee,BModalBody:G,BModalFooter:Q,BButton:j},setup(){const t=C({test:!1});return{args:s,modals:t}},template:`
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
    `}),args:{}};var w,x,z;c.parameters={...c.parameters,docs:{...(w=c.parameters)==null?void 0:w.docs,source:{originalSource:`{
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
}`,...(z=(x=c.parameters)==null?void 0:x.docs)==null?void 0:z.source}}};const ie=["Default"];export{c as Default,ie as __namedExportsOrder,re as default};
