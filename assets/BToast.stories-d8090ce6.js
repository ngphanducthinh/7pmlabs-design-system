import{_ as C}from"./BButton-5b7f8653.js";import{j as B,k as w,o as a,b as n,u as m,m as y,l as r,d as V,n as h,w as k,v as D,s as b,B as S,G as z,H as E,X as L,z as M,e as N}from"./vue.esm-bundler-4cd6df52.js";import{h as e}from"./Enums-25996506.js";const $={key:0,class:"ds-flex ds-flex-initial ds-items-center ds-pr-1"},q=r("svg",{class:"ds-h-5 ds-w-5 ds-fill-white",viewBox:"0 0 512 512",xmlns:"http://www.w3.org/2000/svg"},[r("path",{d:"M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209L241 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L335 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z"})],-1),A=[q],F={key:1,class:"ds-flex ds-flex-initial ds-items-center ds-pr-1"},H=r("svg",{class:"ds-h-5 ds-w-5 ds-fill-white",viewBox:"0 0 512 512",xmlns:"http://www.w3.org/2000/svg"},[r("path",{d:"M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zm0-384c13.3 0 24 10.7 24 24V264c0 13.3-10.7 24-24 24s-24-10.7-24-24V152c0-13.3 10.7-24 24-24zM224 352a32 32 0 1 1 64 0 32 32 0 1 1 -64 0z"})],-1),G=[H],j={class:"ds-flex-auto ds-text-sm ds-font-normal"},O=["innerHTML"],X=r("path",{d:"M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"},null,-1),J=[X],T=B({__name:"BToastItem",props:{text:{default:""},type:{default:e.Default},hideClose:{type:Boolean,default:!1}},emits:["close"],setup(d,{emit:l}){const t=d,c=w(()=>{let s="ds-flex ds-items-center ds-w-80 ds-px-4 ds-py-5 ds-rounded-lg ds-shadow-2xl ";switch(t.type){case e.Success:s+="ds-bg-[#00a86b] ds-text-white ";break;case e.Error:s+="ds-bg-red-600 ds-text-white ";break;case e.Default:default:s+="ds-bg-white ds-text-primary-t "}return s});return(s,o)=>(a(),n("div",{class:h(c.value)},[m(e).Success===t.type?(a(),n("div",$,A)):m(e).Error===t.type?(a(),n("div",F,G)):y("",!0),r("div",j,[V(s.$slots,"default",{},()=>[r("div",{innerHTML:s.text},null,8,O)])]),t.hideClose?y("",!0):(a(),n("div",{key:2,class:"ds-flex ds-flex-initial ds-cursor-pointer ds-items-center ds-pl-1",onClick:o[0]||(o[0]=I=>l("close"))},[(a(),n("svg",{class:h([[m(e).Default===t.type?"ds-fill-primary-t":"ds-fill-white"],"ds-h-5 ds-w-5"]),viewBox:"0 0 384 512",xmlns:"http://www.w3.org/2000/svg"},J,2))]))],2))}});T.__docgenInfo={exportName:"default",displayName:"BToastItem",description:"",tags:{},props:[{name:"text",required:!1,type:{name:"string"},defaultValue:{func:!1,value:"''"}},{name:"type",required:!1,type:{name:"TSLiteralType"},defaultValue:{func:!1,value:"BToastItemType.Default"}},{name:"hideClose",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"false"}}],slots:[{name:"default"}],sourceFiles:["/home/runner/work/design-system/design-system/src/components/BToast/BToastItem.vue"]};const K={class:"ds-fixed ds-right-4 ds-top-4 ds-z-[110]"},p=B({__name:"BToast",props:{modelValue:{}},emits:["update:modelValue"],setup(d,{emit:l}){const t=d,c=w({get(){return t.modelValue},set(o){l("update:modelValue",o)}}),s=o=>{c.value.splice(o,1)};return(o,I)=>k((a(),n("div",K,[b(L,{"enter-active-class":"ds-transition-all ds-duration-300 ds-ease-in-out","enter-from-class":"ds-opacity-0","enter-to-class":"ds-opacity-1","leave-active-class":"ds-transition-all ds-duration-300 ds-ease-in-out","leave-from-class":"ds-opacity-1","leave-to-class":"ds-opacity-0"},{default:S(()=>[(a(!0),n(z,null,E(c.value,(u,f)=>(a(),M(T,{key:`toastItem${f}`,icon:u.icon,text:u.text,type:u.type,class:"ds-my-2",onClose:P=>s(f)},null,8,["icon","text","type","onClose"]))),128))]),_:1})],512)),[[D,c.value.length>0]])}});p.__docgenInfo={exportName:"default",displayName:"BToast",description:"",tags:{},props:[{name:"modelValue",required:!0,type:{name:"Array",elements:[{name:"BToastItemModel"}]}}],sourceFiles:["/home/runner/work/design-system/design-system/src/components/BToast/BToast.vue"]};const W={title:"Components/Toast",component:p,tags:["autodocs"],args:{modelValue:[]}},v=[{text:"Success",type:e.Success},{text:"Error",type:e.Error},{text:"Default",type:e.Default}],i={render:d=>({components:{BToast:p,BButton:C},setup(){const l=N(structuredClone([{text:"Success",type:e.Success},{text:"Error",type:e.Error},{text:"Default",type:e.Default}]));return{args:d,toastItems:l,refresh:()=>{l.value=structuredClone(v)}}},template:`
      <BToast v-bind="args" v-model="toastItems" style="position: relative; top: unset; right: unset;" />
      <div class="ds-w-full ds-text-right ds-my-4">
        <BButton :disabled="toastItems.length === 3" type="icon" size="sm" @click="refresh">
          <i class="fa-solid fa-arrows-rotate"></i>
        </BButton>
      </div>
    `}),args:{modelValue:structuredClone(v)}};var x,g,_;i.parameters={...i.parameters,docs:{...(x=i.parameters)==null?void 0:x.docs,source:{originalSource:`{
  render: (args: any) => ({
    components: {
      BToast,
      BButton
    },
    setup() {
      const toastItems = ref(structuredClone([{
        text: 'Success',
        type: BToastItemType.Success
      }, {
        text: 'Error',
        type: BToastItemType.Error
      }, {
        text: 'Default',
        type: BToastItemType.Default
      }]));
      const refresh = () => {
        toastItems.value = structuredClone(defaultToastItems);
      };
      return {
        args,
        toastItems,
        refresh
      };
    },
    template: \`
      <BToast v-bind="args" v-model="toastItems" style="position: relative; top: unset; right: unset;" />
      <div class="ds-w-full ds-text-right ds-my-4">
        <BButton :disabled="toastItems.length === 3" type="icon" size="sm" @click="refresh">
          <i class="fa-solid fa-arrows-rotate"></i>
        </BButton>
      </div>
    \`
  }),
  args: {
    modelValue: structuredClone(defaultToastItems)
  }
}`,...(_=(g=i.parameters)==null?void 0:g.docs)==null?void 0:_.source}}};const Y=["Default"];export{i as Default,Y as __namedExportsOrder,W as default};
