import{_ as V}from"./BButton-d8984b10.js";import{j as T,k as _,b as I,o,d as n,l as m,n as y,m as v,w as b,y as k,q as w,B as D,F as S,G as E,O as N,s as q}from"./vue.esm-bundler-f0a4de28.js";import{g as t}from"./Enums-fb1fa8e1.js";const $={key:0,class:"ds-flex ds-flex-initial ds-items-center ds-pr-1"},z=["innerHTML"],F=m("i",{class:"fa-solid fa-xmark ds-text-lg"},null,-1),L=[F],C=T({__name:"BToastItem",props:{text:{default:""},icon:{default:""},type:{default:t.Default},hideClose:{type:Boolean,default:!1}},emits:["close"],setup(r,{emit:a}){const s=r,l=_(()=>{let e="ds-flex ds-items-center ds-w-80 ds-px-4 ds-py-5 ds-rounded-lg ds-shadow-2xl ";switch(s.type){case t.Success:e+="ds-bg-[#00a86b] ds-text-white ";break;case t.Error:e+="ds-bg-red-600 ds-text-white ";break;case t.Default:default:e+="ds-bg-white ds-text-primary-t "}return e}),d=I({success:"fa-solid fa-circle-check",error:"fa-solid fa-circle-exclamation",default:""});return(e,i)=>(o(),n("div",{class:y(l.value)},[s.icon||d.value[s.type]?(o(),n("div",$,[m("i",{class:y([s.icon||d.value[s.type],"ds-text-lg"])},null,2)])):v("",!0),m("div",{class:"ds-flex-auto ds-text-sm ds-font-normal",innerHTML:e.text},null,8,z),s.hideClose?v("",!0):(o(),n("div",{key:1,class:"ds-flex ds-flex-initial ds-cursor-pointer ds-items-center ds-pl-1",onClick:i[0]||(i[0]=c=>a("close"))},L))],2))}});C.__docgenInfo={exportName:"default",displayName:"BToastItem",description:"",tags:{},props:[{name:"text",required:!1,type:{name:"string"},defaultValue:{func:!1,value:"''"}},{name:"icon",required:!1,type:{name:"string"},defaultValue:{func:!1,value:"''"}},{name:"type",required:!1,type:{name:"TSLiteralType"},defaultValue:{func:!1,value:"BToastItemType.Default"}},{name:"hideClose",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"false"}}],events:[{name:"close"}],sourceFiles:["/Users/thinhnguyen/Documents/Projects/7pmlabs/design-system/src/components/BToast/BToastItem.vue"]};const j={class:"ds-fixed ds-right-4 ds-top-4 ds-z-[110]"},p=T({__name:"BToast",props:{modelValue:{}},emits:["update:modelValue"],setup(r,{emit:a}){const s=r,l=_({get(){return s.modelValue},set(e){a("update:modelValue",e)}}),d=e=>{l.value.splice(e,1)};return(e,i)=>b((o(),n("div",j,[w(N,{"enter-active-class":"ds-transition-all ds-duration-300 ds-ease-in-out","enter-from-class":"ds-opacity-0","enter-to-class":"ds-opacity-1","leave-active-class":"ds-transition-all ds-duration-300 ds-ease-in-out","leave-from-class":"ds-opacity-1","leave-to-class":"ds-opacity-0"},{default:D(()=>[(o(!0),n(S,null,E(l.value,(c,f)=>(o(),q(C,{key:`toastItem${f}`,text:c.text,icon:c.icon,type:c.type,class:"ds-my-2",onClose:M=>d(f)},null,8,["text","icon","type","onClose"]))),128))]),_:1})],512)),[[k,l.value.length>0]])}});p.__docgenInfo={exportName:"default",displayName:"BToast",description:"",tags:{},props:[{name:"modelValue",required:!0,type:{name:"Array",elements:[{name:"BToastItemModel"}]}}],events:[{name:"update:modelValue"}],sourceFiles:["/Users/thinhnguyen/Documents/Projects/7pmlabs/design-system/src/components/BToast/BToast.vue"]};const P={title:"Components/Toast",component:p,tags:["autodocs"],args:{modelValue:[]}},x=[{text:"Success",type:t.Success},{text:"Error",type:t.Error},{text:"Default",type:t.Default}],u={render:r=>({components:{BToast:p,BButton:V},setup(){const a=I(structuredClone([{text:"Success",type:t.Success},{text:"Error",type:t.Error},{text:"Default",type:t.Default}]));return{args:r,toastItems:a,refresh:()=>{a.value=structuredClone(x)}}},template:`
      <BToast v-bind="args" v-model="toastItems" style="position: relative; top: unset; right: unset;" />
      <div class="ds-w-full ds-text-right ds-my-4">
        <BButton :disabled="toastItems.length === 3" type="icon" size="sm" @click="refresh">
          <i class="fa-solid fa-arrows-rotate"></i>
        </BButton>
      </div>
    `}),args:{modelValue:structuredClone(x)}};var g,B,h;u.parameters={...u.parameters,docs:{...(g=u.parameters)==null?void 0:g.docs,source:{originalSource:`{
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
}`,...(h=(B=u.parameters)==null?void 0:B.docs)==null?void 0:h.source}}};const U=["Default"];export{u as Default,U as __namedExportsOrder,P as default};
//# sourceMappingURL=BToast.stories-3d66a0a0.js.map
