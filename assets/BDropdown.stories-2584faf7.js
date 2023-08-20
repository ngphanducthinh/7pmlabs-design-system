import{j as F,b as u,k as E,C as g,E as z,g as T,p as H,o as p,d as f,t as V,m as A,l as c,e as m,B as G,n as C,w as J,x as K,H as Q,f as R}from"./vue.esm-bundler-c34c64cb.js";import{e as W,r as X}from"./ComponentHelper-d29c08d8.js";import{v as Y}from"./v4-a960c1f4.js";import{_ as Z}from"./_plugin-vue_export-helper-c27b6911.js";const ee=["for"],se=["id"],oe={class:"ds-truncate"},te=["id","data-cy","data-ut"],D=F({__name:"BDropdown",props:{inputId:{default:""},modelValue:{type:Boolean,default:void 0},label:{default:""},text:{default:""},toggleCssClass:{default:""},menuCssClass:{default:""},noCloseOnClickOutside:{type:Boolean,default:!1},noCloseOnEsc:{type:Boolean,default:!1},menuFixed:{type:Boolean,default:!1}},emits:["update:modelValue","hidden","shown"],setup(o,{emit:t}){const s=o,r=u(null),n=u(null),l=u(null),y=u(!1),v=E(()=>s.inputId||`id-${Y()}`),a=E({get(){return s.modelValue!==void 0?s.modelValue:y.value},set(e){s.modelValue!==void 0?t("update:modelValue",e):y.value=e}});g(a,e=>{var i;e?U():(h(),(i=r.value)==null||i.blur())}),g(()=>s.noCloseOnClickOutside,e=>{e?O():_()}),g(()=>s.noCloseOnEsc,e=>{e?x():B()});const B=()=>{document.addEventListener("keydown",k)},k=e=>{e.key==="Escape"&&w()},_=()=>{document.addEventListener("click",b)},b=e=>{[n.value,l.value].some(q=>e.composedPath().includes(q))||w()},S=()=>{a.value=!a.value},U=()=>{Q(()=>{W(n.value,l.value,s.menuFixed),t("shown")})},h=()=>{X(n.value,l.value),t("hidden")},w=()=>{a.value=!1},x=()=>{document.removeEventListener("keydown",k)},O=()=>{document.removeEventListener("click",b)};return z(()=>{s.noCloseOnEsc||B(),s.noCloseOnClickOutside||_()}),T(()=>{x(),O(),h()}),H("closeDropdown",w),(e,i)=>(p(),f("div",{ref_key:"dropdown",ref:n},[s.label?(p(),f("label",{key:0,for:v.value,class:"ds-mb-2 ds-block ds-text-xs ds-font-bold ds-capitalize ds-text-gray-500"},V(s.label),9,ee)):A("",!0),c("button",{id:v.value,ref_key:"toggle",ref:r,class:C([e.toggleCssClass,"ds-inline-flex ds-w-full ds-items-center ds-justify-between ds-rounded-lg ds-bg-gray-200 ds-px-5 ds-py-2.5 ds-text-gray-700 focus:ds-ring-1 focus:ds-ring-primary-t"]),type:"button",onClick:S},[m(e.$slots,"toggle",{},()=>[c("span",oe,V(s.text),1),G("   "),c("span",{class:C([`${a.value?"ds-rotate-180":""}`,"fa-solid fa-caret-down ds-transition-transform"])},null,2)])],10,se),J(c("div",{id:`${v.value}Menu`,ref_key:"dropdownMenu",ref:l,class:C([`${e.menuCssClass} ${s.menuFixed?"ds-fixed":"ds-absolute"}`,"ds-z-50 ds-py-1"]),"data-cy":e.$attrs["data-cy"]?`${e.$attrs["data-cy"]}Menu`:void 0,"data-ut":e.$attrs["data-ut"]?`${e.$attrs["data-ut"]}Menu`:void 0},[m(e.$slots,"default")],10,te),[[K,a.value]])],512))}});D.__docgenInfo={exportName:"default",displayName:"BDropdown",description:"",tags:{},props:[{name:"inputId",defaultValue:{func:!1,value:"''"}},{name:"modelValue",defaultValue:{func:!1,value:"undefined"}},{name:"label",defaultValue:{func:!1,value:"''"}},{name:"text",defaultValue:{func:!1,value:"''"}},{name:"toggleCssClass",defaultValue:{func:!1,value:"''"}},{name:"menuCssClass",defaultValue:{func:!1,value:"''"}},{name:"noCloseOnClickOutside",defaultValue:{func:!1,value:"false"}},{name:"noCloseOnEsc",defaultValue:{func:!1,value:"false"}},{name:"menuFixed",defaultValue:{func:!1,value:"false"}}],slots:[{name:"toggle"},{name:"default"}],sourceFiles:["/Users/thinhnguyen/Downloads/Projects/7PMLabs/7pmlabs-design-system/src/components/BDropdown/BDropdown.vue"]};const N={},ne={class:"ds-rounded-lg ds-bg-white ds-p-2 ds-shadow"};function ae(o,t){return p(),f("ul",ne,[m(o.$slots,"default")])}const le=Z(N,[["render",ae]]);N.__docgenInfo={displayName:"BDropdownContent",description:"",tags:{},slots:[{name:"default"}],sourceFiles:["/Users/thinhnguyen/Downloads/Projects/7PMLabs/7pmlabs-design-system/src/components/BDropdown/BDropdownContent.vue"]};const j=F({__name:"BDropdownItem",props:{closeOnClick:{type:Boolean,default:!1}},setup(o){const t=o,s=R("closeDropdown"),r=()=>{t.closeOnClick&&s&&s()};return(n,l)=>(p(),f("li",{class:"ds-cursor-pointer ds-px-3 ds-py-2 ds-text-sm ds-text-gray-700 hover:ds-bg-slate-100",onClick:r},[m(n.$slots,"default")]))}});j.__docgenInfo={exportName:"default",displayName:"BDropdownItem",description:"",tags:{},props:[{name:"closeOnClick",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"false"}}],slots:[{name:"default"}],sourceFiles:["/Users/thinhnguyen/Downloads/Projects/7PMLabs/7pmlabs-design-system/src/components/BDropdown/BDropdownItem.vue"]};const pe={title:"Components/Dropdown",component:D,tags:["autodocs"],args:{inputId:"",label:"",text:"",toggleCssClass:"",menuCssClass:"",noCloseOnClickOutside:!1,noCloseOnEsc:!1,menuFixed:!1}},d={render:o=>({components:{BDropdown:D,BDropdownContent:le,BDropdownItem:j},setup(){return{args:o,items:[{text:"Edit",icon:"fa-solid fa-pen-to-square"},{text:"Delete",icon:"fa-solid fa-trash"}]}},template:`
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
    `}),args:{}};var $,I,P,L,M;d.parameters={...d.parameters,docs:{...($=d.parameters)==null?void 0:$.docs,source:{originalSource:`{
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
}`,...(P=(I=d.parameters)==null?void 0:I.docs)==null?void 0:P.source},description:{story:"Stories",...(M=(L=d.parameters)==null?void 0:L.docs)==null?void 0:M.description}}};const fe=["Default"];export{d as Default,fe as __namedExportsOrder,pe as default};
//# sourceMappingURL=BDropdown.stories-2584faf7.js.map
