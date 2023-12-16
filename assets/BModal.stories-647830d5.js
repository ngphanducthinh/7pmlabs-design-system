import{_ as j}from"./BButton-5b7f8653.js";import{j as C,e as b,k as u,E as q,g as $,o as d,z as m,B as f,l as h,n as p,d as r,C as L,s as I,O as T,T as P,m as W,b as B}from"./vue.esm-bundler-4cd6df52.js";import{i as n}from"./Enums-25996506.js";import{u as w,l as D}from"./ComponentHelper-d29c08d8.js";import{B as R}from"./BOverlay-eeff4649.js";import{_ as y}from"./_plugin-vue_export-helper-c27b6911.js";const V=C({__name:"BModalContainer",props:{size:{default:n.Medium},fullscreen:{type:Boolean,default:!1},persistent:{type:Boolean,default:!1}},emits:["close"],setup(s,{emit:t}){const a=s,l=b(null),o=u(()=>{let e="ds-relative ds-w-full ds-h-auto ds-m-auto ds-flex ds-items-center ";if(a.fullscreen)e+="ds-w-screen ds-h-screen ";else switch(e+="ds-p-4 ",a.size){case n.Small:e+="ds-max-w-md ";break;case n.Large:e+="ds-max-w-4xl ";break;case n.Medium:default:e+="ds-max-w-2xl ";break}return e}),c=u(()=>{let e="ds-relative ds-bg-white ds-rounded-lg ds-shadow ";return e+=a.fullscreen?"ds-w-screen ds-h-screen ds-rounded-none ":"",e}),v=()=>{document.addEventListener("keydown",_)},_=e=>{e.key==="Escape"&&t("close")},N=()=>{document.addEventListener("click",g)},g=e=>{[l.value].some(S=>e.composedPath().includes(S))||t("close")};return q(()=>{a.persistent||setTimeout(()=>{v(),N()},200)}),$(()=>{a.persistent||(document.removeEventListener("keydown",_),document.removeEventListener("click",g))}),(e,O)=>(d(),m(R,null,{default:f(()=>[h("div",{class:p([o.value,"modal-wrapper"])},[h("div",{ref_key:"modalWrapperContentRef",ref:l,class:p([c.value,"modal-wrapper-content ds-w-full"])},[r(e.$slots,"default")],2)],2)]),_:3}))}});V.__docgenInfo={exportName:"default",displayName:"BModalContainer",description:"",tags:{},props:[{name:"size",required:!1,type:{name:"BModalSize"},defaultValue:{func:!1,value:"BModalSize.Medium"}},{name:"fullscreen",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"persistent",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"false"}}],slots:[{name:"default"}],sourceFiles:["/home/runner/work/design-system/design-system/src/components/BModal/BModalContainer.vue"]};const A={inheritAttrs:!1},M=C({...A,__name:"BModal",props:{modelValue:{type:Boolean},size:{default:n.Medium},fullscreen:{type:Boolean,default:!1},persistent:{type:Boolean,default:!1}},emits:["update:modelValue"],setup(s,{emit:t}){const a=s,l=u({get(){return a.modelValue},set(o){t("update:modelValue",o)}});return L(l,o=>{o?D():w()},{immediate:!0}),$(()=>{w()}),(o,c)=>(d(),m(P,{to:"body"},[I(T,{"enter-active-class":"ds-transition-all ds-ease-in-out","enter-from-class":"ds-opacity-0","enter-to-class":"ds-opacity-1","leave-active-class":"ds-transition-all ds-ease-in-out","leave-from-class":"ds-opacity-1","leave-to-class":"ds-opacity-0"},{default:f(()=>[l.value?(d(),m(V,{key:0,class:p(o.$attrs.class),fullscreen:a.fullscreen,persistent:a.persistent,size:a.size,onClose:c[0]||(c[0]=v=>l.value=!1)},{default:f(()=>[r(o.$slots,"default")]),_:3},8,["class","fullscreen","persistent","size"])):W("",!0)]),_:3})]))}});M.__docgenInfo={exportName:"default",displayName:"BModal",description:"",tags:{},props:[{name:"modelValue",required:!0,type:{name:"boolean"}},{name:"size",required:!1,type:{name:"BModalSize"},defaultValue:{func:!1,value:"BModalSize.Medium"}},{name:"fullscreen",description:"Fullscreen modal.",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"persistent",description:'Prevent modal from closing when clicking outside or pressing "Esc".',required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"false"}}],slots:[{name:"default"}],sourceFiles:["/home/runner/work/design-system/design-system/src/components/BModal/BModal.vue"]};const F={},U={class:"ds-p-4"};function G(s,t){return d(),B("div",U,[r(s.$slots,"default")])}const J=y(F,[["render",G]]);F.__docgenInfo={displayName:"BModalBody",description:"",tags:{},slots:[{name:"default"}],sourceFiles:["/home/runner/work/design-system/design-system/src/components/BModal/BModalBody.vue"]};const E={},K={class:"ds-flex ds-items-center ds-justify-end ds-rounded-b-lg ds-p-4"};function Q(s,t){return d(),B("div",K,[r(s.$slots,"default")])}const X=y(E,[["render",Q]]);E.__docgenInfo={displayName:"BModalFooter",description:"",tags:{},slots:[{name:"default"}],sourceFiles:["/home/runner/work/design-system/design-system/src/components/BModal/BModalFooter.vue"]};const H={},Y={class:"ds-flex ds-items-start ds-justify-between ds-rounded-t-lg ds-p-4"};function Z(s,t){return d(),B("div",Y,[r(s.$slots,"default")])}const ee=y(H,[["render",Z]]);H.__docgenInfo={displayName:"BModalHeader",description:"",tags:{},slots:[{name:"default"}],sourceFiles:["/home/runner/work/design-system/design-system/src/components/BModal/BModalHeader.vue"]};const re={title:"Components/Modal",component:M,tags:["autodocs"],argTypes:{size:{control:"select",options:Object.values(n)}},args:{modelValue:!1,size:n.Medium,fullscreen:!1,persistent:!1}},i={render:s=>({components:{BModal:M,BModalHeader:ee,BModalBody:J,BModalFooter:X,BButton:j},setup(){const t=b({test:!1});return{args:s,modals:t}},template:`
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
    `}),args:{}};var k,z,x;i.parameters={...i.parameters,docs:{...(k=i.parameters)==null?void 0:k.docs,source:{originalSource:`{
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
}`,...(x=(z=i.parameters)==null?void 0:z.docs)==null?void 0:x.source}}};const ce=["Default"];export{i as Default,ce as __namedExportsOrder,re as default};
