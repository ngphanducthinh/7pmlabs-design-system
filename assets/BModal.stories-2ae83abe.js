import{_ as O}from"./BButton-68442593.js";import{j as $,b as V,k as u,E as D,g as P,o as d,q as m,A as f,m as h,n as p,e as c,C as T,l as U,P as I,T as q,s as W,d as B}from"./vue.esm-bundler-0b71992c.js";import{h as l}from"./Enums-9e395f7e.js";import{u as w,l as A}from"./ComponentHelper-d29c08d8.js";import{B as R}from"./BOverlay-5593c26b.js";import{_ as M}from"./_plugin-vue_export-helper-c27b6911.js";const j=$({__name:"BModalContainer",props:{size:{default:l.Medium},fullscreen:{type:Boolean,default:!1},persistent:{type:Boolean,default:!1}},emits:["close"],setup(s,{emit:t}){const a=s,n=V(null),o=u(()=>{let e="ds-relative ds-w-full ds-h-auto ds-m-auto ds-flex ds-items-center ";if(a.fullscreen)e+="ds-w-screen ds-h-screen ";else switch(e+="ds-p-4 ",a.size){case l.Small:e+="ds-max-w-md ";break;case l.Large:e+="ds-max-w-4xl ";break;case l.Medium:default:e+="ds-max-w-2xl ";break}return e}),i=u(()=>{let e="ds-relative ds-bg-white ds-rounded-lg ds-shadow ";return e+=a.fullscreen?"ds-w-screen ds-h-screen ds-rounded-none ":"",e}),v=()=>{document.addEventListener("keydown",_)},_=e=>{e.key==="Escape"&&t("close")},H=()=>{document.addEventListener("click",g)},g=e=>{[n.value].some(S=>e.composedPath().includes(S))||t("close")};return D(()=>{a.persistent||setTimeout(()=>{v(),H()},200)}),P(()=>{a.persistent||(document.removeEventListener("keydown",_),document.removeEventListener("click",g))}),(e,N)=>(d(),m(R,null,{default:f(()=>[h("div",{class:p(["modal-wrapper",o.value])},[h("div",{ref_key:"modalWrapperContentRef",ref:n,class:p(["modal-wrapper-content ds-w-full",i.value])},[c(e.$slots,"default")],2)],2)]),_:3}))}});j.__docgenInfo={exportName:"default",displayName:"BModalContainer",description:"",tags:{},props:[{name:"size",required:!1,type:{name:"TSLiteralType"},defaultValue:{func:!1,value:"BModalSize.Medium"}},{name:"fullscreen",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"persistent",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"false"}}],events:[{name:"close"}],slots:[{name:"default"}],sourceFiles:["/Users/thinhnguyen/Downloads/Projects/7PMLabs/7pmlabs-design-system/src/components/BModal/BModalContainer.vue"]};const G={inheritAttrs:!1},y=$({...G,__name:"BModal",props:{modelValue:{type:Boolean},size:{default:l.Medium},fullscreen:{type:Boolean,default:!1},persistent:{type:Boolean,default:!1}},emits:["update:modelValue"],setup(s,{emit:t}){const a=s,n=u({get(){return a.modelValue},set(o){t("update:modelValue",o)}});return T(n,o=>{o?A():w()},{immediate:!0}),P(()=>{w()}),(o,i)=>(d(),m(q,{to:"body"},[U(I,{"enter-active-class":"ds-transition-all ds-ease-in-out","enter-from-class":"ds-opacity-0","enter-to-class":"ds-opacity-1","leave-active-class":"ds-transition-all ds-ease-in-out","leave-from-class":"ds-opacity-1","leave-to-class":"ds-opacity-0"},{default:f(()=>[n.value?(d(),m(j,{key:0,class:p(o.$attrs.class),fullscreen:a.fullscreen,persistent:a.persistent,size:a.size,onClose:i[0]||(i[0]=v=>n.value=!1)},{default:f(()=>[c(o.$slots,"default")]),_:3},8,["class","fullscreen","persistent","size"])):W("",!0)]),_:3})]))}});y.__docgenInfo={exportName:"default",displayName:"BModal",description:"",tags:{},props:[{name:"size",defaultValue:{func:!1,value:"BModalSize.Medium"}},{name:"fullscreen",defaultValue:{func:!1,value:"false"}},{name:"persistent",defaultValue:{func:!1,value:"false"}}],events:[{name:"update:modelValue"}],slots:[{name:"default"}],sourceFiles:["/Users/thinhnguyen/Downloads/Projects/7PMLabs/7pmlabs-design-system/src/components/BModal/BModal.vue"]};const F={},J={class:"ds-p-4"};function K(s,t){return d(),B("div",J,[c(s.$slots,"default")])}const Q=M(F,[["render",K]]);F.__docgenInfo={displayName:"BModalBody",description:"",tags:{},slots:[{name:"default"}],sourceFiles:["/Users/thinhnguyen/Downloads/Projects/7PMLabs/7pmlabs-design-system/src/components/BModal/BModalBody.vue"]};const L={},X={class:"ds-flex ds-items-center ds-justify-end ds-rounded-b-lg ds-p-4"};function Y(s,t){return d(),B("div",X,[c(s.$slots,"default")])}const Z=M(L,[["render",Y]]);L.__docgenInfo={displayName:"BModalFooter",description:"",tags:{},slots:[{name:"default"}],sourceFiles:["/Users/thinhnguyen/Downloads/Projects/7PMLabs/7pmlabs-design-system/src/components/BModal/BModalFooter.vue"]};const E={},ee={class:"ds-flex ds-items-start ds-justify-between ds-rounded-t-lg ds-p-4"};function se(s,t){return d(),B("div",ee,[c(s.$slots,"default")])}const ae=M(E,[["render",se]]);E.__docgenInfo={displayName:"BModalHeader",description:"",tags:{},slots:[{name:"default"}],sourceFiles:["/Users/thinhnguyen/Downloads/Projects/7PMLabs/7pmlabs-design-system/src/components/BModal/BModalHeader.vue"]};const ie={title:"Components/Modal",component:y,tags:["autodocs"],argTypes:{size:{control:"select",options:Object.values(l)}},args:{modelValue:!1,size:l.Medium,fullscreen:!1,persistent:!1}},r={render:s=>({components:{BModal:y,BModalHeader:ae,BModalBody:Q,BModalFooter:Z,BButton:O},setup(){const t=V({test:!1});return{args:s,modals:t}},template:`
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
    `}),args:{}};var b,k,x,C,z;r.parameters={...r.parameters,docs:{...(b=r.parameters)==null?void 0:b.docs,source:{originalSource:`{
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
}`,...(x=(k=r.parameters)==null?void 0:k.docs)==null?void 0:x.source},description:{story:"Stories",...(z=(C=r.parameters)==null?void 0:C.docs)==null?void 0:z.description}}};const ue=["Default"];export{r as Default,ue as __namedExportsOrder,ie as default};
//# sourceMappingURL=BModal.stories-2ae83abe.js.map
