import{_ as D}from"./BButton-86b65c44.js";import{o as n,b as u,g as r,d as C,p as P,a as m,y as T,z as L,k as p,l as B,e as h,n as M,x as U,q as I,T as q,G as W,f as R}from"./vue.esm-bundler-46649701.js";import{d as l}from"./Enums-473b4e69.js";import{u as b,l as A}from"./ComponentHelper-d29c08d8.js";import{_ as f}from"./_plugin-vue_export-helper-c27b6911.js";const V={},G={class:"ds-fixed ds-left-0 ds-right-0 ds-top-0 ds-z-[100] ds-flex ds-h-full ds-w-full ds-items-center ds-justify-center ds-overflow-y-auto ds-overflow-x-hidden ds-bg-black/[0.65] ds-backdrop-blur-sm"};function J(s,a){return n(),u("div",G,[r(s.$slots,"default")])}const K=f(V,[["render",J]]);V.__docgenInfo={displayName:"BOverlay",description:"",tags:{},slots:[{name:"default"}],sourceFiles:["/Users/thinhnguyen/Downloads/Projects/7PMLabs/7pmlabs-design-system/src/components/BOverlay.vue"]};const F=C({__name:"BModalContainer",props:{size:{default:l.Medium},fullscreen:{type:Boolean,default:!1},persistent:{type:Boolean,default:!1}},emits:["close"],setup(s,{emit:a}){const t=s,d=P(null),o=m(()=>{let e="ds-relative ds-w-full ds-h-auto ds-m-auto ds-flex ds-items-center ";if(t.fullscreen)e+="ds-w-screen ds-h-screen ";else switch(e+="ds-p-4 ",t.size){case l.Small:e+="ds-max-w-md ";break;case l.Large:e+="ds-max-w-4xl ";break;case l.Medium:default:e+="ds-max-w-2xl ";break}return e}),i=m(()=>{let e="ds-relative ds-bg-white ds-rounded-lg ds-shadow ";return e+=t.fullscreen?"ds-w-screen ds-h-screen ds-rounded-none ":"",e}),v=()=>{document.addEventListener("keydown",y)},y=e=>{e.key==="Escape"&&a("close")},O=()=>{document.addEventListener("click",g)},g=e=>{[d.value].some(S=>e.composedPath().includes(S))||a("close")};return T(()=>{t.persistent||setTimeout(()=>{v(),O()},200)}),L(()=>{t.persistent||(document.removeEventListener("keydown",y),document.removeEventListener("click",g))}),(e,H)=>(n(),p(K,null,{default:B(()=>[h("div",{class:M(["modal-wrapper",o.value])},[h("div",{ref_key:"modalWrapperContentRef",ref:d,class:M(["modal-wrapper-content ds-w-full",i.value])},[r(e.$slots,"default")],2)],2)]),_:3}))}});F.__docgenInfo={exportName:"default",displayName:"BModalContainer",description:"",tags:{},props:[{name:"size",required:!1,type:{name:"TSLiteralType"},defaultValue:{func:!1,value:"BModalSize.Medium"}},{name:"fullscreen",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"persistent",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"false"}}],events:[{name:"close"}],slots:[{name:"default"}],sourceFiles:["/Users/thinhnguyen/Downloads/Projects/7PMLabs/7pmlabs-design-system/src/components/BModal/BModalContainer.vue"]};const Q={inheritAttrs:!1},_=C({...Q,__name:"BModal",props:{modelValue:{type:Boolean},size:{default:l.Medium},fullscreen:{type:Boolean,default:!1},persistent:{type:Boolean,default:!1}},emits:["update:modelValue"],setup(s,{emit:a}){const t=s,d=m({get(){return t.modelValue},set(o){a("update:modelValue",o)}});return U(d,o=>{o?A():b()},{immediate:!0}),L(()=>{b()}),(o,i)=>(n(),p(W,{to:"body"},[I(q,{"enter-active-class":"ds-transition-all ds-ease-in-out","enter-from-class":"ds-opacity-0","enter-to-class":"ds-opacity-1","leave-active-class":"ds-transition-all ds-ease-in-out","leave-from-class":"ds-opacity-1","leave-to-class":"ds-opacity-0"},{default:B(()=>[d.value?(n(),p(F,{key:0,class:M(o.$attrs.class),fullscreen:t.fullscreen,persistent:t.persistent,size:t.size,onClose:i[0]||(i[0]=v=>d.value=!1)},{default:B(()=>[r(o.$slots,"default")]),_:3},8,["class","fullscreen","persistent","size"])):R("",!0)]),_:3})]))}});_.__docgenInfo={exportName:"default",displayName:"BModal",description:"",tags:{},props:[{name:"size",defaultValue:{func:!1,value:"BModalSize.Medium"}},{name:"fullscreen",defaultValue:{func:!1,value:"false"}},{name:"persistent",defaultValue:{func:!1,value:"false"}}],events:[{name:"update:modelValue"}],slots:[{name:"default"}],sourceFiles:["/Users/thinhnguyen/Downloads/Projects/7PMLabs/7pmlabs-design-system/src/components/BModal/BModal.vue"]};const j={},X={class:"ds-p-4"};function Y(s,a){return n(),u("div",X,[r(s.$slots,"default")])}const Z=f(j,[["render",Y]]);j.__docgenInfo={displayName:"BModalBody",description:"",tags:{},slots:[{name:"default"}],sourceFiles:["/Users/thinhnguyen/Downloads/Projects/7PMLabs/7pmlabs-design-system/src/components/BModal/BModalBody.vue"]};const E={},ee={class:"ds-flex ds-items-center ds-justify-end ds-rounded-b-lg ds-p-4"};function se(s,a){return n(),u("div",ee,[r(s.$slots,"default")])}const ae=f(E,[["render",se]]);E.__docgenInfo={displayName:"BModalFooter",description:"",tags:{},slots:[{name:"default"}],sourceFiles:["/Users/thinhnguyen/Downloads/Projects/7PMLabs/7pmlabs-design-system/src/components/BModal/BModalFooter.vue"]};const N={},te={class:"ds-flex ds-items-start ds-justify-between ds-rounded-t-lg ds-p-4"};function oe(s,a){return n(),u("div",te,[r(s.$slots,"default")])}const le=f(N,[["render",oe]]);N.__docgenInfo={displayName:"BModalHeader",description:"",tags:{},slots:[{name:"default"}],sourceFiles:["/Users/thinhnguyen/Downloads/Projects/7PMLabs/7pmlabs-design-system/src/components/BModal/BModalHeader.vue"]};const fe={title:"7PMLabs/Modal",component:_,tags:["autodocs"],argTypes:{size:{control:"select",options:Object.values(l)}},args:{modelValue:!1,size:l.Medium,fullscreen:!1,persistent:!1}},c={render:s=>({components:{BModal:_,BModalHeader:le,BModalBody:Z,BModalFooter:ae,BButton:D},setup(){const a=P({test:!1});return{args:s,modals:a}},template:`
      <BButton @click="modals.test = true">{{ 'Open Modal' }}</BButton>
      <BModal v-bind="args" v-model="modals.test">
        <BModalHeader>
          <span style="font-size: 20px; font-weight: 600">{{ 'Modal Header' }}</span>
        </BModalHeader>
        <BModalBody>
          <div>
            <img src="https://wallpapers.com/images/hd/attractive-lake-nature-pczghhhvhzi0yf7t.webp" class="rounded-lg object-cover" alt="" />
          </div>
        </BModalBody>
        <BModalFooter>
          <BButton @click="modals.test = false">{{ 'Close' }}</BButton>
        </BModalFooter>
      </BModal>
    `}),args:{}};var w,k,z,$,x;c.parameters={...c.parameters,docs:{...(w=c.parameters)==null?void 0:w.docs,source:{originalSource:`{
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
          <div>
            <img src="https://wallpapers.com/images/hd/attractive-lake-nature-pczghhhvhzi0yf7t.webp" class="rounded-lg object-cover" alt="" />
          </div>
        </BModalBody>
        <BModalFooter>
          <BButton @click="modals.test = false">{{ 'Close' }}</BButton>
        </BModalFooter>
      </BModal>
    \`
  }),
  args: {}
}`,...(z=(k=c.parameters)==null?void 0:k.docs)==null?void 0:z.source},description:{story:"Stories",...(x=($=c.parameters)==null?void 0:$.docs)==null?void 0:x.description}}};const me=["Default"];export{c as Default,me as __namedExportsOrder,fe as default};
//# sourceMappingURL=BModal.stories-432eba75.js.map
