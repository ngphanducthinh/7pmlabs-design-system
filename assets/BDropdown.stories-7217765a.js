import{j as P,b as c,k as E,C as v,E as T,g as j,p as H,o as d,d as r,t as V,m as K,l as m,e as f,x as U,n as C,w as A,y as G,H as J,f as Q}from"./vue.esm-bundler-d836205b.js";import{e as R,r as W}from"./ComponentHelper-d29c08d8.js";import{P as L}from"./Common-43134899.js";import{v as X}from"./v4-a960c1f4.js";import{_ as Y}from"./_plugin-vue_export-helper-c27b6911.js";const Z=["for"],ee=["id"],se={class:"ds-truncate"},te=m("path",{d:"M137.4 374.6c12.5 12.5 32.8 12.5 45.3 0l128-128c9.2-9.2 11.9-22.9 6.9-34.9s-16.6-19.8-29.6-19.8L32 192c-12.9 0-24.6 7.8-29.6 19.8s-2.2 25.7 6.9 34.9l128 128z"},null,-1),oe=[te],ne=["id","data-cy","data-ut"],y=P({__name:"BDropdown",props:{inputId:{default:""},modelValue:{type:Boolean,default:void 0},label:{default:""},text:{default:""},toggleCssClass:{default:""},menuCssClass:{default:""},noCloseOnClickOutside:{type:Boolean,default:!1},noCloseOnEsc:{type:Boolean,default:!1},menuFixed:{type:Boolean,default:!1}},emits:["update:modelValue","hidden","shown"],setup(t,{emit:o}){const s=t,i=c(null),n=c(null),l=c(null),B=c(!1),g=E(()=>s.inputId||`id-${X()}`),a=E({get(){return s.modelValue!==void 0?s.modelValue:B.value},set(e){s.modelValue!==void 0?o("update:modelValue",e):B.value=e}});v(a,e=>{var u;e?S():(x(),(u=i.value)==null||u.blur())}),v(()=>s.noCloseOnClickOutside,e=>{e?O():_()}),v(()=>s.noCloseOnEsc,e=>{e?b():D()});const D=()=>{document.addEventListener("keydown",k)},k=e=>{e.key==="Escape"&&w()},_=()=>{document.addEventListener("click",h)},h=e=>{[n.value,l.value].some(z=>e.composedPath().includes(z))||w()},N=()=>{a.value=!a.value},S=()=>{J(()=>{R(n.value,l.value,s.menuFixed),o("shown")})},x=()=>{W(n.value,l.value),o("hidden")},w=()=>{a.value=!1},b=()=>{document.removeEventListener("keydown",k)},O=()=>{document.removeEventListener("click",h)};return T(()=>{s.noCloseOnEsc||D(),s.noCloseOnClickOutside||_()}),j(()=>{b(),O(),x()}),H(L.CloseDropdown,w),(e,u)=>(d(),r("div",{ref_key:"dropdown",ref:n},[s.label?(d(),r("label",{key:0,for:g.value,class:"ds-mb-2 ds-block ds-text-xs ds-font-bold ds-capitalize ds-text-gray-500"},V(s.label),9,Z)):K("",!0),m("button",{id:g.value,ref_key:"toggle",ref:i,class:C([e.toggleCssClass,"ds-inline-flex ds-w-full ds-items-center ds-justify-between ds-rounded-lg ds-bg-gray-200 ds-px-3 ds-py-2 ds-text-gray-700 focus:ds-ring-1 focus:ds-ring-primary-t"]),type:"button",onClick:N},[f(e.$slots,"toggle",{},()=>[m("span",se,V(s.text),1),U("   "),(d(),r("svg",{class:C([`${a.value?"ds-rotate-180":""}`,"ds-h-4 ds-w-4 ds-transition-transform"]),viewBox:"0 0 320 512",xmlns:"http://www.w3.org/2000/svg"},oe,2))])],10,ee),A(m("div",{id:`${g.value}Menu`,ref_key:"dropdownMenu",ref:l,class:C([`${e.menuCssClass} ${s.menuFixed?"ds-fixed":"ds-absolute"}`,"ds-z-50 ds-py-1"]),"data-cy":e.$attrs["data-cy"]?`${e.$attrs["data-cy"]}Menu`:void 0,"data-ut":e.$attrs["data-ut"]?`${e.$attrs["data-ut"]}Menu`:void 0},[f(e.$slots,"default")],10,ne),[[G,a.value]])],512))}});y.__docgenInfo={exportName:"default",displayName:"BDropdown",description:"",tags:{},props:[{name:"inputId",required:!1,type:{name:"string"},defaultValue:{func:!1,value:"''"}},{name:"modelValue",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"undefined"}},{name:"label",required:!1,type:{name:"string"},defaultValue:{func:!1,value:"''"}},{name:"text",description:"Toggle's content text",required:!1,type:{name:"string"},defaultValue:{func:!1,value:"''"}},{name:"toggleCssClass",description:"CSS of toggle",required:!1,type:{name:"string"},defaultValue:{func:!1,value:"''"}},{name:"menuCssClass",description:"CSS of menu",required:!1,type:{name:"string"},defaultValue:{func:!1,value:"''"}},{name:"noCloseOnClickOutside",description:"Prevent menu from closing when clicking outside",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"noCloseOnEsc",description:'Prevent menu from closing when "Esc" pressed',required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"menuFixed",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"false"}}],slots:[{name:"toggle"},{name:"default"}],sourceFiles:["/home/runner/work/design-system/design-system/src/components/BDropdown/BDropdown.vue"]};const M={},ae={class:"ds-rounded-lg ds-bg-white ds-p-2 ds-shadow"};function le(t,o){return d(),r("ul",ae,[f(t.$slots,"default")])}const de=Y(M,[["render",le]]);M.__docgenInfo={displayName:"BDropdownContent",description:"",tags:{},slots:[{name:"default"}],sourceFiles:["/home/runner/work/design-system/design-system/src/components/BDropdown/BDropdownContent.vue"]};const F=P({__name:"BDropdownItem",props:{closeOnClick:{type:Boolean,default:!1}},setup(t){const o=t,s=Q(L.CloseDropdown),i=()=>{o.closeOnClick&&s&&s()};return(n,l)=>(d(),r("li",{class:"ds-cursor-pointer ds-px-3 ds-py-2 ds-text-sm ds-text-gray-700 hover:ds-bg-slate-100",onClick:i},[f(n.$slots,"default")]))}});F.__docgenInfo={exportName:"default",displayName:"BDropdownItem",description:"",tags:{},props:[{name:"closeOnClick",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"false"}}],slots:[{name:"default"}],sourceFiles:["/home/runner/work/design-system/design-system/src/components/BDropdown/BDropdownItem.vue"]};const fe={title:"Components/Dropdown",component:y,tags:["autodocs"],args:{inputId:"",label:"",text:"",toggleCssClass:"",menuCssClass:"",noCloseOnClickOutside:!1,noCloseOnEsc:!1,menuFixed:!1}},p={render:t=>({components:{BDropdown:y,BDropdownContent:de,BDropdownItem:F},setup(){return{args:t,items:[{text:"Edit",icon:"fa-solid fa-pen-to-square"},{text:"Delete",icon:"fa-solid fa-trash"}]}},template:`
      <BDropdown v-bind="args" class="ds-w-fit">
        <template #toggle>
          Dropdown
        </template>
        
        <template #default>
          <BDropdownContent>
            <BDropdownItem v-for="(item, i) in items" :key="'item' + i"  close-on-click class="ds-space-x-2">
              <i :class="item.icon" class="w-6"></i>
              <span class="font-bold"> {{ item.text }} </span>
            </BDropdownItem>
          </BDropdownContent>
        </template>
      </BDropdown>
    `}),args:{}};var $,I,q;p.parameters={...p.parameters,docs:{...($=p.parameters)==null?void 0:$.docs,source:{originalSource:`{
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
      <BDropdown v-bind="args" class="ds-w-fit">
        <template #toggle>
          Dropdown
        </template>
        
        <template #default>
          <BDropdownContent>
            <BDropdownItem v-for="(item, i) in items" :key="'item' + i"  close-on-click class="ds-space-x-2">
              <i :class="item.icon" class="w-6"></i>
              <span class="font-bold"> {{ item.text }} </span>
            </BDropdownItem>
          </BDropdownContent>
        </template>
      </BDropdown>
    \`
  }),
  args: {}
}`,...(q=(I=p.parameters)==null?void 0:I.docs)==null?void 0:q.source}}};const ge=["Default"];export{p as Default,ge as __namedExportsOrder,fe as default};
//# sourceMappingURL=BDropdown.stories-7217765a.js.map
