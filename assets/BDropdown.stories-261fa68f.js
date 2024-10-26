import{e as q,a as c,f as O,w,s as z,d as U,p as j,o as p,c as m,t as K,g as A,h as E,r as f,n as V,l as G,y as H,z as J,b as Q}from"./vue.esm-bundler-ceeda665.js";import{e as R,r as W}from"./ComponentHelper-8c2ae0a5.js";import{P as M}from"./Common-74b424b5.js";import{v as X}from"./v4-eb618527.js";import{_ as Y}from"./_plugin-vue_export-helper-c27b6911.js";const Z=["for"],ee=["id"],se=["id","data-cy","data-ut"],y=q({__name:"BDropdown",props:{inputId:{default:""},modelValue:{type:Boolean,default:void 0},label:{default:""},toggleCssClass:{default:""},menuCssClass:{default:""},noCloseOnClickOutside:{type:Boolean,default:!1},noCloseOnEsc:{type:Boolean,default:!1},menuFixed:{type:Boolean,default:!1}},emits:["hidden","shown","update:modelValue"],setup(o,{emit:t}){const s=o,n=t,d=c(null),a=c(null),i=c(null),C=c(!1),g=O(()=>s.inputId||`id-${X()}`),l=O({get(){return s.modelValue!==void 0?s.modelValue:C.value},set(e){s.modelValue!==void 0?n("update:modelValue",e):C.value=e}});w(l,e=>{var r;e?N():(x(),(r=d.value)==null||r.blur())}),w(()=>s.noCloseOnClickOutside,e=>{e?_():h()}),w(()=>s.noCloseOnEsc,e=>{e?b():B()});const B=()=>{document.addEventListener("keydown",D)},D=e=>{e.key==="Escape"&&v()},h=()=>{document.addEventListener("click",k)},k=e=>{[a.value,i.value].some(T=>e.composedPath().includes(T))||v()},S=()=>{l.value=!l.value},N=()=>{J(()=>{R(a.value,i.value,s.menuFixed),n("shown")})},x=()=>{W(a.value,i.value),n("hidden")},v=()=>{l.value=!1},b=()=>{document.removeEventListener("keydown",D)},_=()=>{document.removeEventListener("click",k)};return z(()=>{s.noCloseOnEsc||B(),s.noCloseOnClickOutside||h()}),U(()=>{b(),_(),x()}),j(M.CloseDropdown,v),(e,r)=>(p(),m("div",{ref_key:"dropdown",ref:a},[s.label?(p(),m("label",{key:0,for:g.value,class:"ds-mb-2 ds-block ds-text-xs ds-font-bold ds-capitalize ds-text-gray-500"},K(s.label),9,Z)):A("",!0),E("button",{id:g.value,ref_key:"toggle",ref:d,class:V([e.toggleCssClass,"focus:ds-ring-1 focus:ds-ring-primary-t"]),type:"button",onClick:S},[f(e.$slots,"toggle")],10,ee),G(E("div",{id:`${g.value}Menu`,ref_key:"dropdownMenu",ref:i,class:V([`${e.menuCssClass} ${s.menuFixed?"ds-fixed":"ds-absolute"}`,"ds-z-50 ds-py-1"]),"data-cy":e.$attrs["data-cy"]?`${e.$attrs["data-cy"]}Menu`:void 0,"data-ut":e.$attrs["data-ut"]?`${e.$attrs["data-ut"]}Menu`:void 0},[f(e.$slots,"default")],10,se),[[H,l.value]])],512))}});y.__docgenInfo={exportName:"default",displayName:"BDropdown",description:"",tags:{},props:[{name:"inputId",required:!1,type:{name:"string"},defaultValue:{func:!1,value:"''"}},{name:"modelValue",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"undefined"}},{name:"label",required:!1,type:{name:"string"},defaultValue:{func:!1,value:"''"}},{name:"toggleCssClass",description:"CSS of toggle",required:!1,type:{name:"string"},defaultValue:{func:!1,value:"''"}},{name:"menuCssClass",description:"CSS of menu",required:!1,type:{name:"string"},defaultValue:{func:!1,value:"''"}},{name:"noCloseOnClickOutside",description:"Prevent menu from closing when clicking outside",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"noCloseOnEsc",description:'Prevent menu from closing when "Esc" pressed',required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"menuFixed",description:'Enable "fix" position for menu',required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"false"}}],events:[{name:"hidden",description:"Menu is hidden",properties:[{type:{names:["mixed"]},description:"e"}],tags:[{title:"param",type:{name:"mixed"},description:"e"}]},{name:"shown",description:"Menu is shown",properties:[{type:{names:["mixed"]},description:"e"}],tags:[{title:"param",type:{name:"mixed"},description:"e"}]},{name:"update:modelValue",type:{names:["boolean"]},description:"Update value, param: <code>value: boolean</code>",properties:[{type:{names:["mixed"]},description:"e"},{type:{names:["mixed"]},name:"value"}],tags:[{title:"param",type:{name:"mixed"},description:"e"},{title:"param",type:{name:"mixed"},name:"value"}]}],slots:[{name:"toggle"},{name:"default"}],sourceFiles:["/home/runner/work/design-system/design-system/src/components/BDropdown/BDropdown.vue"]};const F={},oe={class:"ds-rounded-lg ds-bg-white ds-p-2 ds-shadow"};function te(o,t){return p(),m("ul",oe,[f(o.$slots,"default")])}const ne=Y(F,[["render",te]]);F.__docgenInfo={displayName:"BDropdownContent",description:"",tags:{},slots:[{name:"default"}],sourceFiles:["/home/runner/work/design-system/design-system/src/components/BDropdown/BDropdownContent.vue"]};const L=q({__name:"BDropdownItem",props:{closeOnClick:{type:Boolean,default:!1}},setup(o){const t=o,s=Q(M.CloseDropdown),n=()=>{t.closeOnClick&&s&&s()};return(d,a)=>(p(),m("li",{class:"ds-cursor-pointer ds-px-3 ds-py-2 ds-text-sm ds-text-gray-700 hover:ds-bg-slate-100",onClick:n},[f(d.$slots,"default")]))}});L.__docgenInfo={exportName:"default",displayName:"BDropdownItem",description:"",tags:{},props:[{name:"closeOnClick",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"false"}}],slots:[{name:"default"}],sourceFiles:["/home/runner/work/design-system/design-system/src/components/BDropdown/BDropdownItem.vue"]};const ue={title:"Components/Dropdown",parameters:{docs:{description:{component:"The <code>BDropdown</code> component is used for opening a custom menu by user's click."}}},component:y,tags:["autodocs"],argTypes:{toggle:{control:"text",description:"Toggle"},default:{control:"text",description:"Content"}},args:{inputId:"",label:"",toggleCssClass:"",menuCssClass:"",noCloseOnClickOutside:!1,noCloseOnEsc:!1,menuFixed:!1}},u={render:o=>({components:{BDropdown:y,BDropdownContent:ne,BDropdownItem:L},setup(){return{args:o,items:[{text:"Edit",icon:"fa-solid fa-pen-to-square"},{text:"Delete",icon:"fa-solid fa-trash"}]}},template:`
      <BDropdown v-bind="args" toggle-css-class="ds-rounded-xl ds-bg-gray-200 ds-px-4 ds-py-2 ">
        <template v-if="args.toggle" #toggle><span v-html="args.toggle" /></template>

        <template #default>
          <BDropdownContent>
            <BDropdownItem v-for="(item, i) in items" :key="'item' + i" close-on-click class="ds-space-x-2">
              <i :class="item.icon" class="w-6"></i>
              <span class="font-bold"> {{ item.text }} </span>
            </BDropdownItem>
          </BDropdownContent>
        </template>
      </BDropdown>
    `}),args:{toggle:'<i class="fa-solid fa-chevron-down" />'}};var I,$,P;u.parameters={...u.parameters,docs:{...(I=u.parameters)==null?void 0:I.docs,source:{originalSource:`{
  render: (args: any) => ({
    components: {
      BDropdown,
      BDropdownContent,
      BDropdownItem
    },
    setup() {
      const items = [{
        text: 'Edit',
        icon: 'fa-solid fa-pen-to-square'
      }, {
        text: 'Delete',
        icon: 'fa-solid fa-trash'
      }];
      return {
        args,
        items
      };
    },
    template: \`
      <BDropdown v-bind="args" toggle-css-class="ds-rounded-xl ds-bg-gray-200 ds-px-4 ds-py-2 ">
        <template v-if="args.toggle" #toggle><span v-html="args.toggle" /></template>

        <template #default>
          <BDropdownContent>
            <BDropdownItem v-for="(item, i) in items" :key="'item' + i" close-on-click class="ds-space-x-2">
              <i :class="item.icon" class="w-6"></i>
              <span class="font-bold"> {{ item.text }} </span>
            </BDropdownItem>
          </BDropdownContent>
        </template>
      </BDropdown>
    \`
  }),
  args: {
    toggle: '<i class="fa-solid fa-chevron-down" />'
  }
}`,...(P=($=u.parameters)==null?void 0:$.docs)==null?void 0:P.source}}};const pe=["Default"];export{u as Default,pe as __namedExportsOrder,ue as default};
