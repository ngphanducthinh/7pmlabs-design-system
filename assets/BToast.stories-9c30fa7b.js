import{_ as V}from"./BButton-55babced.js";import{d as w,e as T,o as a,c as n,u as p,f as v,g as r,r as k,n as h,w as D,y as S,j as b,l as z,F as E,x as L,Q as M,k as N,a as $}from"./vue.esm-bundler-91340787.js";import{h as e}from"./Enums-5b02df9b.js";const q={key:0,class:"ds-flex ds-flex-initial ds-items-center ds-pr-1"},A=r("svg",{class:"ds-h-5 ds-w-5 ds-fill-white",viewBox:"0 0 512 512",xmlns:"http://www.w3.org/2000/svg"},[r("path",{d:"M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209L241 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L335 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z"})],-1),F=[A],H={key:1,class:"ds-flex ds-flex-initial ds-items-center ds-pr-1"},j=r("svg",{class:"ds-h-5 ds-w-5 ds-fill-white",viewBox:"0 0 512 512",xmlns:"http://www.w3.org/2000/svg"},[r("path",{d:"M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zm0-384c13.3 0 24 10.7 24 24V264c0 13.3-10.7 24-24 24s-24-10.7-24-24V152c0-13.3 10.7-24 24-24zM224 352a32 32 0 1 1 64 0 32 32 0 1 1 -64 0z"})],-1),G=[j],O={class:"ds-flex-auto ds-text-sm ds-font-normal"},Q=["innerHTML"],U=r("path",{d:"M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"},null,-1),J=[U],I=w({__name:"BToastItem",props:{text:{default:""},type:{default:e.Default},hideClose:{type:Boolean,default:!1}},emits:["close"],setup(d,{emit:l}){const s=d,i=l,u=T(()=>{let t="ds-flex ds-items-center ds-w-80 ds-px-4 ds-py-5 ds-rounded-lg ds-shadow-2xl ";switch(s.type){case e.Success:t+="ds-bg-[#00a86b] ds-text-white ";break;case e.Error:t+="ds-bg-red-600 ds-text-white ";break;case e.Default:default:t+="ds-bg-white ds-text-primary-t "}return t});return(t,o)=>(a(),n("div",{class:h(u.value)},[p(e).Success===s.type?(a(),n("div",q,F)):p(e).Error===s.type?(a(),n("div",H,G)):v("",!0),r("div",O,[k(t.$slots,"default",{},()=>[r("div",{innerHTML:t.text},null,8,Q)])]),s.hideClose?v("",!0):(a(),n("div",{key:2,class:"ds-flex ds-flex-initial ds-cursor-pointer ds-items-center ds-pl-1",onClick:o[0]||(o[0]=C=>i("close"))},[(a(),n("svg",{class:h([[p(e).Default===s.type?"ds-fill-primary-t":"ds-fill-white"],"ds-h-5 ds-w-5"]),viewBox:"0 0 384 512",xmlns:"http://www.w3.org/2000/svg"},J,2))]))],2))}});I.__docgenInfo={exportName:"default",displayName:"BToastItem",description:"",tags:{},props:[{name:"text",required:!1,type:{name:"string"},defaultValue:{func:!1,value:"''"}},{name:"type",required:!1,type:{name:"TSLiteralType"},defaultValue:{func:!1,value:"BToastItemType.Default"}},{name:"hideClose",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"false"}}],events:[{name:"close",description:"Item is closed",properties:[{type:{names:["mixed"]},description:"e"}],tags:[{title:"param",type:{name:"mixed"},description:"e"}]}],slots:[{name:"default"}],sourceFiles:["/home/runner/work/design-system/design-system/src/components/BToast/BToastItem.vue"]};const K={class:"ds-fixed ds-right-4 ds-top-4 ds-z-[110]"},f=w({__name:"BToast",props:{modelValue:{}},emits:["update:modelValue"],setup(d,{emit:l}){const s=d,i=T({get(){return s.modelValue},set(o){u("update:modelValue",o)}}),u=l,t=o=>{i.value.splice(o,1)};return(o,C)=>D((a(),n("div",K,[b(M,{"enter-active-class":"ds-transition-all ds-duration-300 ds-ease-in-out","enter-from-class":"ds-opacity-0","enter-to-class":"ds-opacity-1","leave-active-class":"ds-transition-all ds-duration-300 ds-ease-in-out","leave-from-class":"ds-opacity-1","leave-to-class":"ds-opacity-0"},{default:z(()=>[(a(!0),n(E,null,L(i.value,(m,y)=>(a(),N(I,{key:`toastItem${y}`,icon:m.icon,text:m.text,type:m.type,class:"ds-my-2",onClose:P=>t(y)},null,8,["icon","text","type","onClose"]))),128))]),_:1})],512)),[[S,i.value.length>0]])}});f.__docgenInfo={exportName:"default",displayName:"BToast",description:"",tags:{},props:[{name:"modelValue",required:!0,type:{name:"Array",elements:[{name:"BToastItemModel"}]}}],events:[{name:"update:modelValue",type:{names:["Array"],elements:[{name:"BToastItemModel"}]},description:"Update value, param: <code>value: BToastItemModel[]</code>",properties:[{type:{names:["mixed"]},description:"e"},{type:{names:["mixed"]},name:"value"}],tags:[{title:"param",type:{name:"mixed"},description:"e"},{title:"param",type:{name:"mixed"},name:"value"}]}],sourceFiles:["/home/runner/work/design-system/design-system/src/components/BToast/BToast.vue"]};const Y={title:"Components/Toast",parameters:{docs:{description:{component:"The <code>BToast</code> component is used for displaying a quick message to a user."}}},component:f,tags:["autodocs"],args:{modelValue:[]}},x=[{text:"Success",type:e.Success},{text:"Error",type:e.Error},{text:"Default",type:e.Default}],c={render:d=>({components:{BToast:f,BButton:V},setup(){const l=$(structuredClone([{text:"Success",type:e.Success},{text:"Error",type:e.Error},{text:"Default",type:e.Default}]));return{args:d,toastItems:l,refresh:()=>{l.value=structuredClone(x)}}},template:`
      <BToast v-bind="args" v-model="toastItems" style="position: relative; top: unset; right: unset;" />
      <div class="ds-w-full ds-text-right ds-my-4">
        <BButton :disabled="toastItems.length === 3" type="icon" size="sm" @click="refresh">
          <i class="fa-solid fa-arrows-rotate"></i>
        </BButton>
      </div>
    `}),args:{modelValue:structuredClone(x)}};var g,B,_;c.parameters={...c.parameters,docs:{...(g=c.parameters)==null?void 0:g.docs,source:{originalSource:`{
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
}`,...(_=(B=c.parameters)==null?void 0:B.docs)==null?void 0:_.source}}};const Z=["Default"];export{c as Default,Z as __namedExportsOrder,Y as default};
