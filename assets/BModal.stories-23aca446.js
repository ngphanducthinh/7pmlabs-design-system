import{_ as I}from"./BButton-28e7d01e.js";import{j as $,b as V,k as u,E as T,g as F,o as d,s as m,B as f,l as h,n as p,e as c,C as q,q as P,P as W,T as D,m as R,d as B}from"./vue.esm-bundler-f0a4de28.js";import{h as l}from"./Enums-fb1fa8e1.js";import{u as w,l as A}from"./ComponentHelper-d29c08d8.js";import{B as U}from"./BOverlay-7bec6676.js";import{_ as y}from"./_plugin-vue_export-helper-c27b6911.js";const E=$({__name:"BModalContainer",props:{size:{default:l.Medium},fullscreen:{type:Boolean,default:!1},persistent:{type:Boolean,default:!1}},emits:["close"],setup(s,{emit:a}){const t=s,n=V(null),o=u(()=>{let e="ds-relative ds-w-full ds-h-auto ds-m-auto ds-flex ds-items-center ";if(t.fullscreen)e+="ds-w-screen ds-h-screen ";else switch(e+="ds-p-4 ",t.size){case l.Small:e+="ds-max-w-md ";break;case l.Large:e+="ds-max-w-4xl ";break;case l.Medium:default:e+="ds-max-w-2xl ";break}return e}),i=u(()=>{let e="ds-relative ds-bg-white ds-rounded-lg ds-shadow ";return e+=t.fullscreen?"ds-w-screen ds-h-screen ds-rounded-none ":"",e}),v=()=>{document.addEventListener("keydown",_)},_=e=>{e.key==="Escape"&&a("close")},O=()=>{document.addEventListener("click",g)},g=e=>{[n.value].some(L=>e.composedPath().includes(L))||a("close")};return T(()=>{t.persistent||setTimeout(()=>{v(),O()},200)}),F(()=>{t.persistent||(document.removeEventListener("keydown",_),document.removeEventListener("click",g))}),(e,j)=>(d(),m(U,null,{default:f(()=>[h("div",{class:p(["modal-wrapper",o.value])},[h("div",{ref_key:"modalWrapperContentRef",ref:n,class:p(["modal-wrapper-content ds-w-full",i.value])},[c(e.$slots,"default")],2)],2)]),_:3}))}});E.__docgenInfo={exportName:"default",displayName:"BModalContainer",description:"",tags:{},props:[{name:"size",required:!1,type:{name:"BModalSize"},defaultValue:{func:!1,value:"BModalSize.Medium"}},{name:"fullscreen",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"persistent",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"false"}}],events:[{name:"close"}],slots:[{name:"default"}],sourceFiles:["/home/runner/work/design-system/design-system/src/components/BModal/BModalContainer.vue"]};const G={inheritAttrs:!1},M=$({...G,__name:"BModal",props:{modelValue:{type:Boolean},size:{default:l.Medium},fullscreen:{type:Boolean,default:!1},persistent:{type:Boolean,default:!1}},emits:["update:modelValue"],setup(s,{emit:a}){const t=s,n=u({get(){return t.modelValue},set(o){a("update:modelValue",o)}});return q(n,o=>{o?A():w()},{immediate:!0}),F(()=>{w()}),(o,i)=>(d(),m(D,{to:"body"},[P(W,{"enter-active-class":"ds-transition-all ds-ease-in-out","enter-from-class":"ds-opacity-0","enter-to-class":"ds-opacity-1","leave-active-class":"ds-transition-all ds-ease-in-out","leave-from-class":"ds-opacity-1","leave-to-class":"ds-opacity-0"},{default:f(()=>[n.value?(d(),m(E,{key:0,class:p(o.$attrs.class),fullscreen:t.fullscreen,persistent:t.persistent,size:t.size,onClose:i[0]||(i[0]=v=>n.value=!1)},{default:f(()=>[c(o.$slots,"default")]),_:3},8,["class","fullscreen","persistent","size"])):R("",!0)]),_:3})]))}});M.__docgenInfo={exportName:"default",displayName:"BModal",description:"",tags:{},props:[{name:"size",defaultValue:{func:!1,value:"BModalSize.Medium"}},{name:"fullscreen",defaultValue:{func:!1,value:"false"}},{name:"persistent",defaultValue:{func:!1,value:"false"}}],events:[{name:"update:modelValue"}],slots:[{name:"default"}],sourceFiles:["/home/runner/work/design-system/design-system/src/components/BModal/BModal.vue"]};const H={},J={class:"ds-p-4"};function K(s,a){return d(),B("div",J,[c(s.$slots,"default")])}const Q=y(H,[["render",K]]);H.__docgenInfo={displayName:"BModalBody",description:"",tags:{},slots:[{name:"default"}],sourceFiles:["/home/runner/work/design-system/design-system/src/components/BModal/BModalBody.vue"]};const N={},X={class:"ds-flex ds-items-center ds-justify-end ds-rounded-b-lg ds-p-4"};function Y(s,a){return d(),B("div",X,[c(s.$slots,"default")])}const Z=y(N,[["render",Y]]);N.__docgenInfo={displayName:"BModalFooter",description:"",tags:{},slots:[{name:"default"}],sourceFiles:["/home/runner/work/design-system/design-system/src/components/BModal/BModalFooter.vue"]};const S={},ee={class:"ds-flex ds-items-start ds-justify-between ds-rounded-t-lg ds-p-4"};function se(s,a){return d(),B("div",ee,[c(s.$slots,"default")])}const te=y(S,[["render",se]]);S.__docgenInfo={displayName:"BModalHeader",description:"",tags:{},slots:[{name:"default"}],sourceFiles:["/home/runner/work/design-system/design-system/src/components/BModal/BModalHeader.vue"]};const ie={title:"Components/Modal",component:M,tags:["autodocs"],argTypes:{size:{control:"select",options:Object.values(l)}},args:{modelValue:!1,size:l.Medium,fullscreen:!1,persistent:!1}},r={render:s=>({components:{BModal:M,BModalHeader:te,BModalBody:Q,BModalFooter:Z,BButton:I},setup(){const a=V({test:!1});return{args:s,modals:a}},template:`
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
    `}),args:{}};var k,x,z,C,b;r.parameters={...r.parameters,docs:{...(k=r.parameters)==null?void 0:k.docs,source:{originalSource:`{
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
}`,...(z=(x=r.parameters)==null?void 0:x.docs)==null?void 0:z.source},description:{story:"Stories",...(b=(C=r.parameters)==null?void 0:C.docs)==null?void 0:b.description}}};const ue=["Default"];export{r as Default,ue as __namedExportsOrder,ie as default};
//# sourceMappingURL=BModal.stories-23aca446.js.map
