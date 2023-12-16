import{j as P,b as i,k as O,C as v,E as z,g as j,p as T,o as c,d as p,t as H,m as K,l as x,e as m,n as E,w as U,y as A,H as G,f as J}from"./vue.esm-bundler-d836205b.js";import{e as Q,r as R}from"./ComponentHelper-d29c08d8.js";import{P as q}from"./Common-43134899.js";import{v as W}from"./v4-a960c1f4.js";import{_ as X}from"./_plugin-vue_export-helper-c27b6911.js";const Y=["for"],Z=["id"],ee=["id","data-cy","data-ut"],w=P({__name:"BDropdown",props:{inputId:{default:""},modelValue:{type:Boolean,default:void 0},label:{default:""},toggleCssClass:{default:""},menuCssClass:{default:""},noCloseOnClickOutside:{type:Boolean,default:!1},noCloseOnEsc:{type:Boolean,default:!1},menuFixed:{type:Boolean,default:!1}},emits:["update:modelValue","hidden","shown"],setup(o,{emit:n}){const s=o,d=i(null),t=i(null),a=i(null),C=i(!1),f=O(()=>s.inputId||`id-${W()}`),l=O({get(){return s.modelValue!==void 0?s.modelValue:C.value},set(e){s.modelValue!==void 0?n("update:modelValue",e):C.value=e}});v(l,e=>{var r;e?S():(b(),(r=d.value)==null||r.blur())}),v(()=>s.noCloseOnClickOutside,e=>{e?h():D()}),v(()=>s.noCloseOnEsc,e=>{e?_():y()});const y=()=>{document.addEventListener("keydown",B)},B=e=>{e.key==="Escape"&&g()},D=()=>{document.addEventListener("click",k)},k=e=>{[t.value,a.value].some(N=>e.composedPath().includes(N))||g()},M=()=>{l.value=!l.value},S=()=>{G(()=>{Q(t.value,a.value,s.menuFixed),n("shown")})},b=()=>{R(t.value,a.value),n("hidden")},g=()=>{l.value=!1},_=()=>{document.removeEventListener("keydown",B)},h=()=>{document.removeEventListener("click",k)};return z(()=>{s.noCloseOnEsc||y(),s.noCloseOnClickOutside||D()}),j(()=>{_(),h(),b()}),T(q.CloseDropdown,g),(e,r)=>(c(),p("div",{ref_key:"dropdown",ref:t},[s.label?(c(),p("label",{key:0,for:f.value,class:"ds-mb-2 ds-block ds-text-xs ds-font-bold ds-capitalize ds-text-gray-500"},H(s.label),9,Y)):K("",!0),x("button",{id:f.value,ref_key:"toggle",ref:d,class:E([e.toggleCssClass,"focus:ds-ring-1 focus:ds-ring-primary-t"]),type:"button",onClick:M},[m(e.$slots,"toggle")],10,Z),U(x("div",{id:`${f.value}Menu`,ref_key:"dropdownMenu",ref:a,class:E([`${e.menuCssClass} ${s.menuFixed?"ds-fixed":"ds-absolute"}`,"ds-z-50 ds-py-1"]),"data-cy":e.$attrs["data-cy"]?`${e.$attrs["data-cy"]}Menu`:void 0,"data-ut":e.$attrs["data-ut"]?`${e.$attrs["data-ut"]}Menu`:void 0},[m(e.$slots,"default")],10,ee),[[A,l.value]])],512))}});w.__docgenInfo={exportName:"default",displayName:"BDropdown",description:"",tags:{},props:[{name:"inputId",required:!1,type:{name:"string"},defaultValue:{func:!1,value:"''"}},{name:"modelValue",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"undefined"}},{name:"label",required:!1,type:{name:"string"},defaultValue:{func:!1,value:"''"}},{name:"toggleCssClass",description:"CSS of toggle",required:!1,type:{name:"string"},defaultValue:{func:!1,value:"''"}},{name:"menuCssClass",description:"CSS of menu",required:!1,type:{name:"string"},defaultValue:{func:!1,value:"''"}},{name:"noCloseOnClickOutside",description:"Prevent menu from closing when clicking outside",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"noCloseOnEsc",description:'Prevent menu from closing when "Esc" pressed',required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"menuFixed",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"false"}}],slots:[{name:"toggle"},{name:"default"}],sourceFiles:["/home/runner/work/design-system/design-system/src/components/BDropdown/BDropdown.vue"]};const F={},se={class:"ds-rounded-lg ds-bg-white ds-p-2 ds-shadow"};function oe(o,n){return c(),p("ul",se,[m(o.$slots,"default")])}const ne=X(F,[["render",oe]]);F.__docgenInfo={displayName:"BDropdownContent",description:"",tags:{},slots:[{name:"default"}],sourceFiles:["/home/runner/work/design-system/design-system/src/components/BDropdown/BDropdownContent.vue"]};const L=P({__name:"BDropdownItem",props:{closeOnClick:{type:Boolean,default:!1}},setup(o){const n=o,s=J(q.CloseDropdown),d=()=>{n.closeOnClick&&s&&s()};return(t,a)=>(c(),p("li",{class:"ds-cursor-pointer ds-px-3 ds-py-2 ds-text-sm ds-text-gray-700 hover:ds-bg-slate-100",onClick:d},[m(t.$slots,"default")]))}});L.__docgenInfo={exportName:"default",displayName:"BDropdownItem",description:"",tags:{},props:[{name:"closeOnClick",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"false"}}],slots:[{name:"default"}],sourceFiles:["/home/runner/work/design-system/design-system/src/components/BDropdown/BDropdownItem.vue"]};const ue={title:"Components/Dropdown",component:w,tags:["autodocs"],args:{inputId:"",label:"",toggleCssClass:"",menuCssClass:"",noCloseOnClickOutside:!1,noCloseOnEsc:!1,menuFixed:!1}},u={render:o=>({components:{BDropdown:w,BDropdownContent:ne,BDropdownItem:L},setup(){return{args:o,items:[{text:"Edit",icon:"fa-solid fa-pen-to-square"},{text:"Delete",icon:"fa-solid fa-trash"}]}},template:`
      <BDropdown v-bind="args" toggle-css-class="ds-rounded-xl ds-bg-gray-200 ds-px-4 ds-py-2 ">
        <template #toggle>
          <i class="fa fa-chevron-double-down" />
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
    `}),args:{}};var V,I,$;u.parameters={...u.parameters,docs:{...(V=u.parameters)==null?void 0:V.docs,source:{originalSource:`{
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
        <template #toggle>
          <i class="fa fa-chevron-double-down" />
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
}`,...($=(I=u.parameters)==null?void 0:I.docs)==null?void 0:$.source}}};const ce=["Default"];export{u as Default,ce as __namedExportsOrder,ue as default};
//# sourceMappingURL=BDropdown.stories-f59583ca.js.map
