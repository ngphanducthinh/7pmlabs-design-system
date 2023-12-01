import{j as P,b as i,k as E,C as v,E as j,g as z,p as H,o as p,d as m,t as V,m as K,l as u,e as f,x as U,n as C,w as A,y as G,H as J,f as Q}from"./vue.esm-bundler-d836205b.js";import{e as R,r as W}from"./ComponentHelper-d29c08d8.js";import{P as F}from"./Common-43134899.js";import{v as X}from"./v4-a960c1f4.js";import{_ as Y}from"./_plugin-vue_export-helper-c27b6911.js";const Z=["for"],ee=["id"],se={class:"ds-truncate"},te=["id","data-cy","data-ut"],y=P({__name:"BDropdown",props:{inputId:{default:""},modelValue:{type:Boolean,default:void 0},label:{default:""},text:{default:""},toggleCssClass:{default:""},menuCssClass:{default:""},noCloseOnClickOutside:{type:Boolean,default:!1},noCloseOnEsc:{type:Boolean,default:!1},menuFixed:{type:Boolean,default:!1}},emits:["update:modelValue","hidden","shown"],setup(t,{emit:o}){const s=t,d=i(null),n=i(null),l=i(null),D=i(!1),g=E(()=>s.inputId||`id-${X()}`),a=E({get(){return s.modelValue!==void 0?s.modelValue:D.value},set(e){s.modelValue!==void 0?o("update:modelValue",e):D.value=e}});v(a,e=>{var r;e?S():(b(),(r=d.value)==null||r.blur())}),v(()=>s.noCloseOnClickOutside,e=>{e?O():_()}),v(()=>s.noCloseOnEsc,e=>{e?h():B()});const B=()=>{document.addEventListener("keydown",k)},k=e=>{e.key==="Escape"&&w()},_=()=>{document.addEventListener("click",x)},x=e=>{[n.value,l.value].some(T=>e.composedPath().includes(T))||w()},N=()=>{a.value=!a.value},S=()=>{J(()=>{R(n.value,l.value,s.menuFixed),o("shown")})},b=()=>{W(n.value,l.value),o("hidden")},w=()=>{a.value=!1},h=()=>{document.removeEventListener("keydown",k)},O=()=>{document.removeEventListener("click",x)};return j(()=>{s.noCloseOnEsc||B(),s.noCloseOnClickOutside||_()}),z(()=>{h(),O(),b()}),H(F.CloseDropdown,w),(e,r)=>(p(),m("div",{ref_key:"dropdown",ref:n},[s.label?(p(),m("label",{key:0,for:g.value,class:"ds-mb-2 ds-block ds-text-xs ds-font-bold ds-capitalize ds-text-gray-500"},V(s.label),9,Z)):K("",!0),u("button",{id:g.value,ref_key:"toggle",ref:d,class:C([e.toggleCssClass,"ds-inline-flex ds-w-full ds-items-center ds-justify-between ds-rounded-lg ds-bg-gray-200 ds-px-5 ds-py-2.5 ds-text-gray-700 focus:ds-ring-1 focus:ds-ring-primary-t"]),type:"button",onClick:N},[f(e.$slots,"toggle",{},()=>[u("span",se,V(s.text),1),U("   "),u("span",{class:C([`${a.value?"ds-rotate-180":""}`,"fa-solid fa-caret-down ds-transition-transform"])},null,2)])],10,ee),A(u("div",{id:`${g.value}Menu`,ref_key:"dropdownMenu",ref:l,class:C([`${e.menuCssClass} ${s.menuFixed?"ds-fixed":"ds-absolute"}`,"ds-z-50 ds-py-1"]),"data-cy":e.$attrs["data-cy"]?`${e.$attrs["data-cy"]}Menu`:void 0,"data-ut":e.$attrs["data-ut"]?`${e.$attrs["data-ut"]}Menu`:void 0},[f(e.$slots,"default")],10,te),[[G,a.value]])],512))}});y.__docgenInfo={exportName:"default",displayName:"BDropdown",description:"",tags:{},props:[{name:"inputId",required:!1,type:{name:"string"},defaultValue:{func:!1,value:"''"}},{name:"modelValue",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"undefined"}},{name:"label",required:!1,type:{name:"string"},defaultValue:{func:!1,value:"''"}},{name:"text",description:"Toggle's content text",required:!1,type:{name:"string"},defaultValue:{func:!1,value:"''"}},{name:"toggleCssClass",description:"CSS of toggle",required:!1,type:{name:"string"},defaultValue:{func:!1,value:"''"}},{name:"menuCssClass",description:"CSS of menu",required:!1,type:{name:"string"},defaultValue:{func:!1,value:"''"}},{name:"noCloseOnClickOutside",description:"Prevent menu from closing when clicking outside",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"noCloseOnEsc",description:'Prevent menu from closing when "Esc" pressed',required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"menuFixed",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"false"}}],slots:[{name:"toggle"},{name:"default"}],sourceFiles:["/home/runner/work/design-system/design-system/src/components/BDropdown/BDropdown.vue"]};const L={},oe={class:"ds-rounded-lg ds-bg-white ds-p-2 ds-shadow"};function ne(t,o){return p(),m("ul",oe,[f(t.$slots,"default")])}const ae=Y(L,[["render",ne]]);L.__docgenInfo={displayName:"BDropdownContent",description:"",tags:{},slots:[{name:"default"}],sourceFiles:["/home/runner/work/design-system/design-system/src/components/BDropdown/BDropdownContent.vue"]};const M=P({__name:"BDropdownItem",props:{closeOnClick:{type:Boolean,default:!1}},setup(t){const o=t,s=Q(F.CloseDropdown),d=()=>{o.closeOnClick&&s&&s()};return(n,l)=>(p(),m("li",{class:"ds-cursor-pointer ds-px-3 ds-py-2 ds-text-sm ds-text-gray-700 hover:ds-bg-slate-100",onClick:d},[f(n.$slots,"default")]))}});M.__docgenInfo={exportName:"default",displayName:"BDropdownItem",description:"",tags:{},props:[{name:"closeOnClick",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"false"}}],slots:[{name:"default"}],sourceFiles:["/home/runner/work/design-system/design-system/src/components/BDropdown/BDropdownItem.vue"]};const pe={title:"Components/Dropdown",component:y,tags:["autodocs"],args:{inputId:"",label:"",text:"",toggleCssClass:"",menuCssClass:"",noCloseOnClickOutside:!1,noCloseOnEsc:!1,menuFixed:!1}},c={render:t=>({components:{BDropdown:y,BDropdownContent:ae,BDropdownItem:M},setup(){return{args:t,items:[{text:"Edit",icon:"fa-solid fa-pen-to-square"},{text:"Delete",icon:"fa-solid fa-trash"}]}},template:`
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
    `}),args:{}};var $,I,q;c.parameters={...c.parameters,docs:{...($=c.parameters)==null?void 0:$.docs,source:{originalSource:`{
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
}`,...(q=(I=c.parameters)==null?void 0:I.docs)==null?void 0:q.source}}};const me=["Default"];export{c as Default,me as __namedExportsOrder,pe as default};
//# sourceMappingURL=BDropdown.stories-7bc4d807.js.map
