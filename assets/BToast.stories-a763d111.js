import{_ as V}from"./BButton-e2b689c0.js";import{e as w,f as I,o,c as l,u as p,h as r,g as v,r as k,n as x,l as D,y as S,k as b,q as z,F as E,x as L,P as M,m as N,a as $}from"./vue.esm-bundler-ceeda665.js";import{g as t}from"./Enums-b5cac340.js";const q={key:0,class:"ds-flex ds-flex-initial ds-items-center ds-pr-1"},A={key:1,class:"ds-flex ds-flex-initial ds-items-center ds-pr-1"},F={class:"ds-flex-auto ds-text-sm ds-font-normal"},H=["innerHTML"],_=w({__name:"BToastItem",props:{text:{default:""},type:{default:t.Default},hideClose:{type:Boolean,default:!1}},emits:["close"],setup(d,{emit:n}){const a=d,i=n,u=I(()=>{let s="ds-flex ds-items-center ds-w-80 ds-px-4 ds-py-5 ds-rounded-lg ds-shadow-2xl ";switch(a.type){case t.Success:s+="ds-bg-[#00a86b] ds-text-white ";break;case t.Error:s+="ds-bg-red-600 ds-text-white ";break;case t.Default:default:s+="ds-bg-white ds-text-primary-t "}return s});return(s,e)=>(o(),l("div",{class:x(u.value)},[p(t).Success===a.type?(o(),l("div",q,e[1]||(e[1]=[r("svg",{class:"ds-h-5 ds-w-5 ds-fill-white",viewBox:"0 0 512 512",xmlns:"http://www.w3.org/2000/svg"},[r("path",{d:"M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209L241 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L335 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z"})],-1)]))):p(t).Error===a.type?(o(),l("div",A,e[2]||(e[2]=[r("svg",{class:"ds-h-5 ds-w-5 ds-fill-white",viewBox:"0 0 512 512",xmlns:"http://www.w3.org/2000/svg"},[r("path",{d:"M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zm0-384c13.3 0 24 10.7 24 24V264c0 13.3-10.7 24-24 24s-24-10.7-24-24V152c0-13.3 10.7-24 24-24zM224 352a32 32 0 1 1 64 0 32 32 0 1 1 -64 0z"})],-1)]))):v("",!0),r("div",F,[k(s.$slots,"default",{},()=>[r("div",{innerHTML:s.text},null,8,H)])]),a.hideClose?v("",!0):(o(),l("div",{key:2,class:"ds-flex ds-flex-initial ds-cursor-pointer ds-items-center ds-pl-1",onClick:e[0]||(e[0]=C=>i("close"))},[(o(),l("svg",{class:x([[p(t).Default===a.type?"ds-fill-primary-t":"ds-fill-white"],"ds-h-5 ds-w-5"]),viewBox:"0 0 384 512",xmlns:"http://www.w3.org/2000/svg"},e[3]||(e[3]=[r("path",{d:"M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"},null,-1)]),2))]))],2))}});_.__docgenInfo={exportName:"default",displayName:"BToastItem",description:"",tags:{},props:[{name:"text",required:!1,type:{name:"string"},defaultValue:{func:!1,value:"''"}},{name:"type",required:!1,type:{name:"TSLiteralType"},defaultValue:{func:!1,value:"BToastItemType.Default"}},{name:"hideClose",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"false"}}],events:[{name:"close",description:"Item is closed",properties:[{type:{names:["mixed"]},description:"e"}],tags:[{title:"param",type:{name:"mixed"},description:"e"}]}],slots:[{name:"default"}],sourceFiles:["/home/runner/work/design-system/design-system/src/components/BToast/BToastItem.vue"]};const G={class:"ds-fixed ds-right-4 ds-top-4 ds-z-[110]"},f=w({__name:"BToast",props:{modelValue:{}},emits:["update:modelValue"],setup(d,{emit:n}){const a=d,i=I({get(){return a.modelValue},set(e){u("update:modelValue",e)}}),u=n,s=e=>{i.value.splice(e,1)};return(e,C)=>D((o(),l("div",G,[b(M,{"enter-active-class":"ds-transition-all ds-duration-300 ds-ease-in-out","enter-from-class":"ds-opacity-0","enter-to-class":"ds-opacity-1","leave-active-class":"ds-transition-all ds-duration-300 ds-ease-in-out","leave-from-class":"ds-opacity-1","leave-to-class":"ds-opacity-0"},{default:z(()=>[(o(!0),l(E,null,L(i.value,(m,y)=>(o(),N(_,{key:`toastItem${y}`,icon:m.icon,text:m.text,type:m.type,class:"ds-my-2",onClose:O=>s(y)},null,8,["icon","text","type","onClose"]))),128))]),_:1})],512)),[[S,i.value.length>0]])}});f.__docgenInfo={exportName:"default",displayName:"BToast",description:"",tags:{},props:[{name:"modelValue",required:!0,type:{name:"Array",elements:[{name:"BToastItemModel"}]}}],events:[{name:"update:modelValue",type:{names:["Array"],elements:[{name:"BToastItemModel"}]},description:"Update value, param: <code>value: BToastItemModel[]</code>",properties:[{type:{names:["mixed"]},description:"e"},{type:{names:["mixed"]},name:"value"}],tags:[{title:"param",type:{name:"mixed"},description:"e"},{title:"param",type:{name:"mixed"},name:"value"}]}],sourceFiles:["/home/runner/work/design-system/design-system/src/components/BToast/BToast.vue"]};const J={title:"Components/Toast",parameters:{docs:{description:{component:"The <code>BToast</code> component is used for displaying a quick message to a user."}}},component:f,tags:["autodocs"],args:{modelValue:[]}},g=[{text:"Success",type:t.Success},{text:"Error",type:t.Error},{text:"Default",type:t.Default}],c={render:d=>({components:{BToast:f,BButton:V},setup(){const n=$(structuredClone([{text:"Success",type:t.Success},{text:"Error",type:t.Error},{text:"Default",type:t.Default}]));return{args:d,toastItems:n,refresh:()=>{n.value=structuredClone(g)}}},template:`
      <BToast v-bind="args" v-model="toastItems" style="position: relative; top: unset; right: unset;" />
      <div class="ds-w-full ds-text-right ds-my-4">
        <BButton :disabled="toastItems.length === 3" type="icon" size="sm" @click="refresh">
          <i class="fa-solid fa-arrows-rotate"></i>
        </BButton>
      </div>
    `}),args:{modelValue:structuredClone(g)}};var B,h,T;c.parameters={...c.parameters,docs:{...(B=c.parameters)==null?void 0:B.docs,source:{originalSource:`{
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
}`,...(T=(h=c.parameters)==null?void 0:h.docs)==null?void 0:T.source}}};const K=["Default"];export{c as Default,K as __namedExportsOrder,J as default};
