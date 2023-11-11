import{j as M,b as u,k as E,C as g,E as H,g as K,p as U,o as p,d as m,t as V,m as A,l as c,e as f,x as G,n as C,w as J,y as Q,H as R,f as W}from"./vue.esm-bundler-f0a4de28.js";import{e as X,r as Y}from"./ComponentHelper-d29c08d8.js";import{P as N}from"./Common-43134899.js";import{v as Z}from"./v4-a960c1f4.js";import{_ as ee}from"./_plugin-vue_export-helper-c27b6911.js";const se=["for"],oe=["id"],te={class:"ds-truncate"},ne=["id","data-cy","data-ut"],y=M({__name:"BDropdown",props:{inputId:{default:""},modelValue:{type:Boolean,default:void 0},label:{default:""},text:{default:""},toggleCssClass:{default:""},menuCssClass:{default:""},noCloseOnClickOutside:{type:Boolean,default:!1},noCloseOnEsc:{type:Boolean,default:!1},menuFixed:{type:Boolean,default:!1}},emits:["update:modelValue","hidden","shown"],setup(o,{emit:t}){const s=o,r=u(null),n=u(null),l=u(null),D=u(!1),v=E(()=>s.inputId||`id-${Z()}`),a=E({get(){return s.modelValue!==void 0?s.modelValue:D.value},set(e){s.modelValue!==void 0?t("update:modelValue",e):D.value=e}});g(a,e=>{var i;e?z():(h(),(i=r.value)==null||i.blur())}),g(()=>s.noCloseOnClickOutside,e=>{e?O():_()}),g(()=>s.noCloseOnEsc,e=>{e?b():B()});const B=()=>{document.addEventListener("keydown",k)},k=e=>{e.key==="Escape"&&w()},_=()=>{document.addEventListener("click",x)},x=e=>{[n.value,l.value].some(T=>e.composedPath().includes(T))||w()},q=()=>{a.value=!a.value},z=()=>{R(()=>{X(n.value,l.value,s.menuFixed),t("shown")})},h=()=>{Y(n.value,l.value),t("hidden")},w=()=>{a.value=!1},b=()=>{document.removeEventListener("keydown",k)},O=()=>{document.removeEventListener("click",x)};return H(()=>{s.noCloseOnEsc||B(),s.noCloseOnClickOutside||_()}),K(()=>{b(),O(),h()}),U(N.CloseDropdown,w),(e,i)=>(p(),m("div",{ref_key:"dropdown",ref:n},[s.label?(p(),m("label",{key:0,for:v.value,class:"ds-mb-2 ds-block ds-text-xs ds-font-bold ds-capitalize ds-text-gray-500"},V(s.label),9,se)):A("",!0),c("button",{id:v.value,ref_key:"toggle",ref:r,class:C([e.toggleCssClass,"ds-inline-flex ds-w-full ds-items-center ds-justify-between ds-rounded-lg ds-bg-gray-200 ds-px-5 ds-py-2.5 ds-text-gray-700 focus:ds-ring-1 focus:ds-ring-primary-t"]),type:"button",onClick:q},[f(e.$slots,"toggle",{},()=>[c("span",te,V(s.text),1),G("   "),c("span",{class:C([`${a.value?"ds-rotate-180":""}`,"fa-solid fa-caret-down ds-transition-transform"])},null,2)])],10,oe),J(c("div",{id:`${v.value}Menu`,ref_key:"dropdownMenu",ref:l,class:C([`${e.menuCssClass} ${s.menuFixed?"ds-fixed":"ds-absolute"}`,"ds-z-50 ds-py-1"]),"data-cy":e.$attrs["data-cy"]?`${e.$attrs["data-cy"]}Menu`:void 0,"data-ut":e.$attrs["data-ut"]?`${e.$attrs["data-ut"]}Menu`:void 0},[f(e.$slots,"default")],10,ne),[[Q,a.value]])],512))}});y.__docgenInfo={exportName:"default",displayName:"BDropdown",description:"",tags:{},props:[{name:"inputId",defaultValue:{func:!1,value:"''"}},{name:"modelValue",defaultValue:{func:!1,value:"undefined"}},{name:"label",defaultValue:{func:!1,value:"''"}},{name:"text",defaultValue:{func:!1,value:"''"}},{name:"toggleCssClass",defaultValue:{func:!1,value:"''"}},{name:"menuCssClass",defaultValue:{func:!1,value:"''"}},{name:"noCloseOnClickOutside",defaultValue:{func:!1,value:"false"}},{name:"noCloseOnEsc",defaultValue:{func:!1,value:"false"}},{name:"menuFixed",defaultValue:{func:!1,value:"false"}}],slots:[{name:"toggle"},{name:"default"}],sourceFiles:["/home/runner/work/design-system/design-system/src/components/BDropdown/BDropdown.vue"]};const S={},ae={class:"ds-rounded-lg ds-bg-white ds-p-2 ds-shadow"};function le(o,t){return p(),m("ul",ae,[f(o.$slots,"default")])}const de=ee(S,[["render",le]]);S.__docgenInfo={displayName:"BDropdownContent",description:"",tags:{},slots:[{name:"default"}],sourceFiles:["/home/runner/work/design-system/design-system/src/components/BDropdown/BDropdownContent.vue"]};const j=M({__name:"BDropdownItem",props:{closeOnClick:{type:Boolean,default:!1}},setup(o){const t=o,s=W(N.CloseDropdown),r=()=>{t.closeOnClick&&s&&s()};return(n,l)=>(p(),m("li",{class:"ds-cursor-pointer ds-px-3 ds-py-2 ds-text-sm ds-text-gray-700 hover:ds-bg-slate-100",onClick:r},[f(n.$slots,"default")]))}});j.__docgenInfo={exportName:"default",displayName:"BDropdownItem",description:"",tags:{},props:[{name:"closeOnClick",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"false"}}],slots:[{name:"default"}],sourceFiles:["/home/runner/work/design-system/design-system/src/components/BDropdown/BDropdownItem.vue"]};const fe={title:"Components/Dropdown",component:y,tags:["autodocs"],args:{inputId:"",label:"",text:"",toggleCssClass:"",menuCssClass:"",noCloseOnClickOutside:!1,noCloseOnEsc:!1,menuFixed:!1}},d={render:o=>({components:{BDropdown:y,BDropdownContent:de,BDropdownItem:j},setup(){return{args:o,items:[{text:"Edit",icon:"fa-solid fa-pen-to-square"},{text:"Delete",icon:"fa-solid fa-trash"}]}},template:`
      <BDropdown v-bind="args">
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
    `}),args:{}};var $,I,P,F,L;d.parameters={...d.parameters,docs:{...($=d.parameters)==null?void 0:$.docs,source:{originalSource:`{
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
      <BDropdown v-bind="args">
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
}`,...(P=(I=d.parameters)==null?void 0:I.docs)==null?void 0:P.source},description:{story:"Stories",...(L=(F=d.parameters)==null?void 0:F.docs)==null?void 0:L.description}}};const ve=["Default"];export{d as Default,ve as __namedExportsOrder,fe as default};
//# sourceMappingURL=BDropdown.stories-121cc2dc.js.map
