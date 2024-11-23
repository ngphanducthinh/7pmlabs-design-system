import{_ as M}from"./BButton-e2b689c0.js";import{e as C,f as V,c as o,u as B,h as a,g as c,r as T,n as N,o as n,l as D,y as L,k as z,q as E,F as $,x as q,P as A,m as F,a as H}from"./vue.esm-bundler-ceeda665.js";import{g as t}from"./Enums-b5cac340.js";const G={key:0,class:"ds-flex ds-flex-initial ds-items-center ds-pr-2"},O={key:1,class:"ds-flex ds-flex-initial ds-items-center ds-pr-2"},P={class:"ds-flex ds-flex-auto ds-flex-wrap ds-text-sm"},U={key:0,class:"ds-w-full"},j=["innerHTML"],J={key:1,class:"ds-w-full"},K=["innerHTML"],f=C({__name:"BToastItem",props:{text:{default:""},message:{default:""},type:{default:t.Default},hideClose:{type:Boolean,default:!1}},emits:["close"],setup(l,{emit:d}){const r=l,m=d,g=V(()=>{let e="ds-flex ds-items-center ds-w-80 ds-px-4 ds-py-5 ds-rounded-lg ds-shadow-2xl ds-bg-white ";switch(r.type){case t.Success:e+="";break;case t.Error:e+="";break;case t.Default:default:e+=""}return e});return(e,s)=>(n(),o("div",{class:N(g.value)},[B(t).Success===r.type?(n(),o("div",G,s[1]||(s[1]=[a("svg",{class:"ds-h-5 ds-w-5 ds-fill-[#00a86b]",viewBox:"0 0 512 512",xmlns:"http://www.w3.org/2000/svg"},[a("path",{d:"M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209L241 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L335 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z"})],-1)]))):B(t).Error===r.type?(n(),o("div",O,s[2]||(s[2]=[a("svg",{class:"ds-h-5 ds-w-5 ds-fill-red-600",viewBox:"0 0 512 512",xmlns:"http://www.w3.org/2000/svg"},[a("path",{d:"M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zm0-384c13.3 0 24 10.7 24 24V264c0 13.3-10.7 24-24 24s-24-10.7-24-24V152c0-13.3 10.7-24 24-24zM224 352a32 32 0 1 1 64 0 32 32 0 1 1 -64 0z"})],-1)]))):c("",!0),a("div",P,[e.text||e.$slots.text?(n(),o("div",U,[T(e.$slots,"text",{},()=>[a("div",{class:"ds-font-semibold ds-text-black/80",innerHTML:e.text},null,8,j)])])):c("",!0),e.message||e.$slots.message?(n(),o("div",J,[T(e.$slots,"message",{},()=>[a("div",{class:"ds-text-gray-500",innerHTML:e.message},null,8,K)])])):c("",!0)]),r.hideClose?c("",!0):(n(),o("div",{key:2,class:"ds-flex ds-flex-initial ds-cursor-pointer ds-items-center ds-pl-1",onClick:s[0]||(s[0]=S=>m("close"))},s[3]||(s[3]=[a("svg",{class:"ds-h-5 ds-w-5 ds-fill-gray-600",viewBox:"0 0 384 512",xmlns:"http://www.w3.org/2000/svg"},[a("path",{d:"M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"})],-1)])))],2))}});f.__docgenInfo={exportName:"default",displayName:"BToastItem",description:"",tags:{},props:[{name:"text",required:!1,type:{name:"string"},defaultValue:{func:!1,value:"''"}},{name:"message",required:!1,type:{name:"string"},defaultValue:{func:!1,value:"''"}},{name:"type",required:!1,type:{name:"TSLiteralType"},defaultValue:{func:!1,value:"BToastItemType.Default"}},{name:"hideClose",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"false"}}],events:[{name:"close",description:"Item is closed",properties:[{type:{names:["mixed"]},description:"e"}],tags:[{title:"param",type:{name:"mixed"},description:"e"}]}],slots:[{name:"text"},{name:"message"}],sourceFiles:["/home/runner/work/design-system/design-system/src/components/BToast/BToastItem.vue"]};const Q={class:"ds-fixed ds-right-4 ds-top-4 ds-z-[110]"},x=C({__name:"BToast",props:{modelValue:{}},emits:["update:modelValue"],setup(l,{emit:d}){const r=l,m=V({get(){return r.modelValue},set(s){g("update:modelValue",s)}}),g=d,e=s=>{m.value.splice(s,1)};return(s,S)=>D((n(),o("div",Q,[z(A,{"enter-active-class":"ds-transition-all ds-duration-300 ds-ease-in-out","enter-from-class":"ds-opacity-0","enter-to-class":"ds-opacity-1","leave-active-class":"ds-transition-all ds-duration-300 ds-ease-in-out","leave-from-class":"ds-opacity-1","leave-to-class":"ds-opacity-0"},{default:E(()=>[(n(!0),o($,null,q(m.value,(i,v)=>(n(),F(f,{key:`toastItem${v}`,icon:i.icon,message:i.message,text:i.text,type:i.type,class:"ds-my-2",onClose:R=>e(v)},null,8,["icon","message","text","type","onClose"]))),128))]),_:1})],512)),[[L,m.value.length>0]])}});x.__docgenInfo={exportName:"default",displayName:"BToast",description:"",tags:{},props:[{name:"modelValue",required:!0,type:{name:"Array",elements:[{name:"BToastItemModel"}]}}],events:[{name:"update:modelValue",type:{names:["Array"],elements:[{name:"BToastItemModel"}]},description:"Update value, param: <code>value: BToastItemModel[]</code>",properties:[{type:{names:["mixed"]},description:"e"},{type:{names:["mixed"]},name:"value"}],tags:[{title:"param",type:{name:"mixed"},description:"e"},{title:"param",type:{name:"mixed"},name:"value"}]}],sourceFiles:["/home/runner/work/design-system/design-system/src/components/BToast/BToast.vue"]};const Z={title:"Components/Toast",parameters:{docs:{description:{component:"The <code>BToast</code> component is used for displaying a quick message to a user."}}},component:x,tags:["autodocs"],args:{modelValue:[]}},y=[{text:"Success",type:t.Success},{text:"Success",message:"This is a success message",type:t.Success},{text:"Error",type:t.Error},{text:"Error",message:"This is a error message",type:t.Error},{text:"Default",type:t.Default},{text:"Default",message:"This is a default message",type:t.Default}],p={render:l=>({components:{BToast:x,BToastItem:f,BButton:M},setup(){const d=H(structuredClone(y));return{args:l,toastItems:d,refresh:()=>{d.value=structuredClone(y)}}},template:`
      <BToast v-bind="args" v-model="toastItems" style="position: relative; top: unset; right: unset;" />
      
      <div class="ds-w-full ds-text-right ds-my-24">
        <BButton :disabled="toastItems.length === 3" type="icon" size="sm" @click="refresh">
          <i class="fa-solid fa-arrows-rotate"></i>
        </BButton>
      </div>
    `}),args:{modelValue:structuredClone(y)}},u={render:l=>({components:{BToastItem:f},setup(){return{args:l}},template:`
      <BToastItem type="success">
        <template #text>
          <span class="ds-font-semibold ds-text-black/80">
            Success
          </span>
        </template>
        <template #message>
          <span class="ds-text-gray-500">
            Nice to meet you!
          </span>
        </template>
      </BToastItem>

      <BToastItem type="error">
        <template #text>
          <span class="ds-font-semibold ds-text-black/80">
            Error
          </span>
        </template>
        <template #message>
          <span class="ds-text-gray-500">
            Nice to meet you!
          </span>
        </template>
      </BToastItem>
      
      <BToastItem>
        <template #text>
          <span class="ds-font-semibold ds-text-black/80">
            Default
          </span>
        </template>
        <template #message>
          <span class="ds-text-gray-500">
            Nice to meet you!
          </span>
        </template>
      </BToastItem>
    `})};var h,I,w;p.parameters={...p.parameters,docs:{...(h=p.parameters)==null?void 0:h.docs,source:{originalSource:`{
  render: (args: any) => ({
    components: {
      BToast,
      BToastItem,
      BButton
    },
    setup() {
      const toastItems = ref<BToastItemModel[]>(structuredClone(defaultToastItems));
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
      
      <div class="ds-w-full ds-text-right ds-my-24">
        <BButton :disabled="toastItems.length === 3" type="icon" size="sm" @click="refresh">
          <i class="fa-solid fa-arrows-rotate"></i>
        </BButton>
      </div>
    \`
  }),
  args: {
    modelValue: structuredClone(defaultToastItems)
  }
}`,...(w=(I=p.parameters)==null?void 0:I.docs)==null?void 0:w.source}}};var k,b,_;u.parameters={...u.parameters,docs:{...(k=u.parameters)==null?void 0:k.docs,source:{originalSource:`{
  render: (args: any) => ({
    components: {
      BToastItem
    },
    setup() {
      return {
        args
      };
    },
    template: \`
      <BToastItem type="success">
        <template #text>
          <span class="ds-font-semibold ds-text-black/80">
            Success
          </span>
        </template>
        <template #message>
          <span class="ds-text-gray-500">
            Nice to meet you!
          </span>
        </template>
      </BToastItem>

      <BToastItem type="error">
        <template #text>
          <span class="ds-font-semibold ds-text-black/80">
            Error
          </span>
        </template>
        <template #message>
          <span class="ds-text-gray-500">
            Nice to meet you!
          </span>
        </template>
      </BToastItem>
      
      <BToastItem>
        <template #text>
          <span class="ds-font-semibold ds-text-black/80">
            Default
          </span>
        </template>
        <template #message>
          <span class="ds-text-gray-500">
            Nice to meet you!
          </span>
        </template>
      </BToastItem>
    \`
  })
}`,...(_=(b=u.parameters)==null?void 0:b.docs)==null?void 0:_.source}}};const ee=["Default","CustomSlots"];export{u as CustomSlots,p as Default,ee as __namedExportsOrder,Z as default};
