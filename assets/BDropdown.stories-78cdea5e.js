import{d as E,p as u,a as b,x as S,y as z,z as U,A as q,o as p,b as f,j as h,f as T,e as c,g as m,i as A,n as v,w as G,m as H,B as J,C as K}from"./vue.esm-bundler-46649701.js";import{e as Q,r as R}from"./ComponentHelper-d29c08d8.js";import{v as W}from"./v4-a960c1f4.js";import{_ as X}from"./_plugin-vue_export-helper-c27b6911.js";const Y=["for"],Z=["id"],ee={class:"ds-truncate"},se=["id","data-cy","data-ut"],C=E({__name:"BDropdown",props:{inputId:{default:""},modelValue:{type:Boolean,default:void 0},label:{default:""},text:{default:""},toggleCssClass:{default:""},menuCssClass:{default:""},noCloseOnClickOutside:{type:Boolean,default:!1},noCloseOnEsc:{type:Boolean,default:!1},menuFixed:{type:Boolean,default:!1}},emits:["update:modelValue","hidden","shown"],setup(o,{emit:t}){const s=o,r=u(null),n=u(null),l=u(null),D=u(!1),w=b(()=>s.inputId||`id-${W()}`),a=b({get(){return s.modelValue!==void 0?s.modelValue:D.value},set(e){s.modelValue!==void 0?t("update:modelValue",e):D.value=e}});S(a,e=>{var i;e?N():(_(),(i=r.value)==null||i.blur())});const M=()=>{document.addEventListener("keydown",y)},y=e=>{e.key==="Escape"&&g()},L=()=>{document.addEventListener("click",B)},B=e=>{[n.value,l.value].some(j=>e.composedPath().includes(j))||g()},F=()=>{a.value=!a.value},N=()=>{J(()=>{Q(n.value,l.value,s.menuFixed),t("shown")})},_=()=>{R(n.value,l.value),t("hidden")},g=()=>{a.value=!1};return z(()=>{s.noCloseOnEsc||M(),s.noCloseOnClickOutside||L()}),U(()=>{document.removeEventListener("keydown",y),document.removeEventListener("click",B),_()}),q("closeDropdown",g),(e,i)=>(p(),f("div",{ref_key:"dropdown",ref:n},[s.label?(p(),f("label",{key:0,for:w.value,class:"ds-mb-2 ds-block ds-text-xs ds-font-bold ds-capitalize ds-text-gray-500"},h(s.label),9,Y)):T("",!0),c("button",{id:w.value,ref_key:"toggle",ref:r,class:v([e.toggleCssClass,"ds-inline-flex ds-w-full ds-items-center ds-justify-between ds-rounded-lg ds-bg-gray-200 ds-px-5 ds-py-2.5 ds-text-gray-700 focus:ds-ring-1 focus:ds-ring-primary-t"]),type:"button",onClick:F},[m(e.$slots,"toggle",{},()=>[c("span",ee,h(s.text),1),A("   "),c("span",{class:v([`${a.value?"ds-rotate-180":""}`,"fa-solid fa-caret-down ds-transition-transform"])},null,2)])],10,Z),G(c("div",{id:`${w.value}Menu`,ref_key:"dropdownMenu",ref:l,class:v([`${e.menuCssClass} ${s.menuFixed?"ds-fixed":"ds-absolute"}`,"ds-z-50 ds-py-1"]),"data-cy":e.$attrs["data-cy"]?`${e.$attrs["data-cy"]}Menu`:void 0,"data-ut":e.$attrs["data-ut"]?`${e.$attrs["data-ut"]}Menu`:void 0},[m(e.$slots,"default")],10,se),[[H,a.value]])],512))}});C.__docgenInfo={exportName:"default",displayName:"BDropdown",description:"",tags:{},props:[{name:"inputId",defaultValue:{func:!1,value:"''"}},{name:"modelValue",defaultValue:{func:!1,value:"undefined"}},{name:"label",defaultValue:{func:!1,value:"''"}},{name:"text",defaultValue:{func:!1,value:"''"}},{name:"toggleCssClass",defaultValue:{func:!1,value:"''"}},{name:"menuCssClass",defaultValue:{func:!1,value:"''"}},{name:"noCloseOnClickOutside",defaultValue:{func:!1,value:"false"}},{name:"noCloseOnEsc",defaultValue:{func:!1,value:"false"}},{name:"menuFixed",defaultValue:{func:!1,value:"false"}}],slots:[{name:"toggle"},{name:"default"}],sourceFiles:["/Users/thinhnguyen/Downloads/Projects/7PMLabs/7pmlabs-design-system/src/components/BDropdown/BDropdown.vue"]};const I={},oe={class:"ds-rounded-lg ds-bg-white ds-p-2 ds-shadow"};function te(o,t){return p(),f("ul",oe,[m(o.$slots,"default")])}const ne=X(I,[["render",te]]);I.__docgenInfo={displayName:"BDropdownContent",description:"",tags:{},slots:[{name:"default"}],sourceFiles:["/Users/thinhnguyen/Downloads/Projects/7PMLabs/7pmlabs-design-system/src/components/BDropdown/BDropdownContent.vue"]};const P=E({__name:"BDropdownItem",props:{closeOnClick:{type:Boolean,default:!1}},setup(o){const t=o,s=K("closeDropdown"),r=()=>{t.closeOnClick&&s&&s()};return(n,l)=>(p(),f("li",{class:"ds-cursor-pointer ds-px-3 ds-py-2 ds-text-sm ds-text-gray-700 hover:ds-bg-slate-100",onClick:r},[m(n.$slots,"default")]))}});P.__docgenInfo={exportName:"default",displayName:"BDropdownItem",description:"",tags:{},props:[{name:"closeOnClick",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"false"}}],slots:[{name:"default"}],sourceFiles:["/Users/thinhnguyen/Downloads/Projects/7PMLabs/7pmlabs-design-system/src/components/BDropdown/BDropdownItem.vue"]};const ue={title:"7PMLabs/Dropdown",component:C,tags:["autodocs"],args:{inputId:"",label:"",text:"",toggleCssClass:"",menuCssClass:"",noCloseOnClickOutside:!1,noCloseOnEsc:!1,menuFixed:!1}},d={render:o=>({components:{BDropdown:C,BDropdownContent:ne,BDropdownItem:P},setup(){return{args:o,items:[{text:"Edit",icon:"fa-solid fa-pen-to-square"},{text:"Delete",icon:"fa-solid fa-trash"}]}},template:`
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
    `}),args:{}};var k,x,V,O,$;d.parameters={...d.parameters,docs:{...(k=d.parameters)==null?void 0:k.docs,source:{originalSource:`{
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
}`,...(V=(x=d.parameters)==null?void 0:x.docs)==null?void 0:V.source},description:{story:"Stories",...($=(O=d.parameters)==null?void 0:O.docs)==null?void 0:$.description}}};const ce=["Default"];export{d as Default,ce as __namedExportsOrder,ue as default};
//# sourceMappingURL=BDropdown.stories-78cdea5e.js.map
