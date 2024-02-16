import{_ as C}from"./BButton-5b130f15.js";import{j as _,k as w,o as a,b as n,u as m,m as y,l as r,d as V,n as v,w as k,E as D,s as b,y as S,F as E,D as z,W as L,x as M,e as N}from"./vue.esm-bundler-e1583b10.js";import{h as e}from"./Enums-5b02df9b.js";const $={key:0,class:"ds-flex ds-flex-initial ds-items-center ds-pr-1"},q=r("svg",{class:"ds-h-5 ds-w-5 ds-fill-white",viewBox:"0 0 512 512",xmlns:"http://www.w3.org/2000/svg"},[r("path",{d:"M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209L241 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L335 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z"})],-1),A=[q],F={key:1,class:"ds-flex ds-flex-initial ds-items-center ds-pr-1"},H=r("svg",{class:"ds-h-5 ds-w-5 ds-fill-white",viewBox:"0 0 512 512",xmlns:"http://www.w3.org/2000/svg"},[r("path",{d:"M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zm0-384c13.3 0 24 10.7 24 24V264c0 13.3-10.7 24-24 24s-24-10.7-24-24V152c0-13.3 10.7-24 24-24zM224 352a32 32 0 1 1 64 0 32 32 0 1 1 -64 0z"})],-1),j=[H],G={class:"ds-flex-auto ds-text-sm ds-font-normal"},O=["innerHTML"],U=r("path",{d:"M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"},null,-1),W=[U],T=_({__name:"BToastItem",props:{text:{default:""},type:{default:e.Default},hideClose:{type:Boolean,default:!1}},emits:["close"],setup(d,{emit:l}){const s=d,i=w(()=>{let t="ds-flex ds-items-center ds-w-80 ds-px-4 ds-py-5 ds-rounded-lg ds-shadow-2xl ";switch(s.type){case e.Success:t+="ds-bg-[#00a86b] ds-text-white ";break;case e.Error:t+="ds-bg-red-600 ds-text-white ";break;case e.Default:default:t+="ds-bg-white ds-text-primary-t "}return t});return(t,o)=>(a(),n("div",{class:v(i.value)},[m(e).Success===s.type?(a(),n("div",$,A)):m(e).Error===s.type?(a(),n("div",F,j)):y("",!0),r("div",G,[V(t.$slots,"default",{},()=>[r("div",{innerHTML:t.text},null,8,O)])]),s.hideClose?y("",!0):(a(),n("div",{key:2,class:"ds-flex ds-flex-initial ds-cursor-pointer ds-items-center ds-pl-1",onClick:o[0]||(o[0]=I=>l("close"))},[(a(),n("svg",{class:v([[m(e).Default===s.type?"ds-fill-primary-t":"ds-fill-white"],"ds-h-5 ds-w-5"]),viewBox:"0 0 384 512",xmlns:"http://www.w3.org/2000/svg"},W,2))]))],2))}});T.__docgenInfo={exportName:"default",displayName:"BToastItem",description:"",tags:{},props:[{name:"text",required:!1,type:{name:"string"},defaultValue:{func:!1,value:"''"}},{name:"type",required:!1,type:{name:"TSLiteralType"},defaultValue:{func:!1,value:"BToastItemType.Default"}},{name:"hideClose",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"false"}}],events:[{name:"close",description:"Item is closed",properties:[{type:{names:["mixed"]},description:"e"}],tags:[{title:"param",type:{name:"mixed"},description:"e"}]}],slots:[{name:"default"}],sourceFiles:["/home/runner/work/design-system/design-system/src/components/BToast/BToastItem.vue"]};const J={class:"ds-fixed ds-right-4 ds-top-4 ds-z-[110]"},p=_({__name:"BToast",props:{modelValue:{}},emits:["update:modelValue"],setup(d,{emit:l}){const s=d,i=w({get(){return s.modelValue},set(o){l("update:modelValue",o)}}),t=o=>{i.value.splice(o,1)};return(o,I)=>k((a(),n("div",J,[b(L,{"enter-active-class":"ds-transition-all ds-duration-300 ds-ease-in-out","enter-from-class":"ds-opacity-0","enter-to-class":"ds-opacity-1","leave-active-class":"ds-transition-all ds-duration-300 ds-ease-in-out","leave-from-class":"ds-opacity-1","leave-to-class":"ds-opacity-0"},{default:S(()=>[(a(!0),n(E,null,z(i.value,(u,f)=>(a(),M(T,{key:`toastItem${f}`,icon:u.icon,text:u.text,type:u.type,class:"ds-my-2",onClose:K=>t(f)},null,8,["icon","text","type","onClose"]))),128))]),_:1})],512)),[[D,i.value.length>0]])}});p.__docgenInfo={exportName:"default",displayName:"BToast",description:"",tags:{},props:[{name:"modelValue",required:!0,type:{name:"Array",elements:[{name:"BToastItemModel"}]}}],events:[{name:"update:modelValue",type:{names:["Array"],elements:[{name:"BToastItemModel"}]},description:"Update value, param: <code>value: BToastItemModel[]</code>",properties:[{type:{names:["mixed"]},description:"e"},{type:{names:["mixed"]},name:"value"}],tags:[{title:"param",type:{name:"mixed"},description:"e"},{title:"param",type:{name:"mixed"},name:"value"}]}],sourceFiles:["/home/runner/work/design-system/design-system/src/components/BToast/BToast.vue"]};const X={title:"Components/Toast",parameters:{docs:{description:{component:"The <code>BToast</code> component is used for displaying a quick message to a user."}}},component:p,tags:["autodocs"],args:{modelValue:[]}},h=[{text:"Success",type:e.Success},{text:"Error",type:e.Error},{text:"Default",type:e.Default}],c={render:d=>({components:{BToast:p,BButton:C},setup(){const l=N(structuredClone([{text:"Success",type:e.Success},{text:"Error",type:e.Error},{text:"Default",type:e.Default}]));return{args:d,toastItems:l,refresh:()=>{l.value=structuredClone(h)}}},template:`
      <BToast v-bind="args" v-model="toastItems" style="position: relative; top: unset; right: unset;" />
      <div class="ds-w-full ds-text-right ds-my-4">
        <BButton :disabled="toastItems.length === 3" type="icon" size="sm" @click="refresh">
          <i class="fa-solid fa-arrows-rotate"></i>
        </BButton>
      </div>
    `}),args:{modelValue:structuredClone(h)}};var x,g,B;c.parameters={...c.parameters,docs:{...(x=c.parameters)==null?void 0:x.docs,source:{originalSource:`{
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
}`,...(B=(g=c.parameters)==null?void 0:g.docs)==null?void 0:B.source}}};const Y=["Default"];export{c as Default,Y as __namedExportsOrder,X as default};
