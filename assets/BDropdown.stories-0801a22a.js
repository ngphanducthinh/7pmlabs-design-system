import{j as P,e as r,k as _,z as v,B as T,g as z,p as j,o as u,b as p,t as U,m as K,l as E,d as m,n as O,w as A,E as G,C as H,f as J}from"./vue.esm-bundler-29df2e62.js";import{e as Q,r as R}from"./ComponentHelper-d29c08d8.js";import{P as q}from"./Common-c3b475f1.js";import{v as W}from"./v4-a960c1f4.js";import{_ as X}from"./_plugin-vue_export-helper-c27b6911.js";const Y=["for"],Z=["id"],ee=["id","data-cy","data-ut"],w=P({__name:"BDropdown",props:{inputId:{default:""},modelValue:{type:Boolean,default:void 0},label:{default:""},toggleCssClass:{default:""},menuCssClass:{default:""},noCloseOnClickOutside:{type:Boolean,default:!1},noCloseOnEsc:{type:Boolean,default:!1},menuFixed:{type:Boolean,default:!1}},emits:["hidden","shown","update:modelValue"],setup(n,{emit:o}){const s=n,d=r(null),t=r(null),a=r(null),y=r(!1),f=_(()=>s.inputId||`id-${W()}`),l=_({get(){return s.modelValue!==void 0?s.modelValue:y.value},set(e){s.modelValue!==void 0?o("update:modelValue",e):y.value=e}});v(l,e=>{var i;e?S():(h(),(i=d.value)==null||i.blur())}),v(()=>s.noCloseOnClickOutside,e=>{e?b():D()}),v(()=>s.noCloseOnEsc,e=>{e?x():C()});const C=()=>{document.addEventListener("keydown",B)},B=e=>{e.key==="Escape"&&g()},D=()=>{document.addEventListener("click",k)},k=e=>{[t.value,a.value].some(N=>e.composedPath().includes(N))||g()},L=()=>{l.value=!l.value},S=()=>{H(()=>{Q(t.value,a.value,s.menuFixed),o("shown")})},h=()=>{R(t.value,a.value),o("hidden")},g=()=>{l.value=!1},x=()=>{document.removeEventListener("keydown",B)},b=()=>{document.removeEventListener("click",k)};return T(()=>{s.noCloseOnEsc||C(),s.noCloseOnClickOutside||D()}),z(()=>{x(),b(),h()}),j(q.CloseDropdown,g),(e,i)=>(u(),p("div",{ref_key:"dropdown",ref:t},[s.label?(u(),p("label",{key:0,for:f.value,class:"ds-mb-2 ds-block ds-text-xs ds-font-bold ds-capitalize ds-text-gray-500"},U(s.label),9,Y)):K("",!0),E("button",{id:f.value,ref_key:"toggle",ref:d,class:O([e.toggleCssClass,"focus:ds-ring-1 focus:ds-ring-primary-t"]),type:"button",onClick:L},[m(e.$slots,"toggle")],10,Z),A(E("div",{id:`${f.value}Menu`,ref_key:"dropdownMenu",ref:a,class:O([`${e.menuCssClass} ${s.menuFixed?"ds-fixed":"ds-absolute"}`,"ds-z-50 ds-py-1"]),"data-cy":e.$attrs["data-cy"]?`${e.$attrs["data-cy"]}Menu`:void 0,"data-ut":e.$attrs["data-ut"]?`${e.$attrs["data-ut"]}Menu`:void 0},[m(e.$slots,"default")],10,ee),[[G,l.value]])],512))}});w.__docgenInfo={exportName:"default",displayName:"BDropdown",description:"",tags:{},props:[{name:"inputId",required:!1,type:{name:"string"},defaultValue:{func:!1,value:"''"}},{name:"modelValue",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"undefined"}},{name:"label",required:!1,type:{name:"string"},defaultValue:{func:!1,value:"''"}},{name:"toggleCssClass",description:"CSS of toggle",required:!1,type:{name:"string"},defaultValue:{func:!1,value:"''"}},{name:"menuCssClass",description:"CSS of menu",required:!1,type:{name:"string"},defaultValue:{func:!1,value:"''"}},{name:"noCloseOnClickOutside",description:"Prevent menu from closing when clicking outside",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"noCloseOnEsc",description:'Prevent menu from closing when "Esc" pressed',required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"menuFixed",description:'Enable "fix" position for menu',required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"false"}}],events:[{name:"hidden",description:"Menu is hidden",properties:[{type:{names:["mixed"]},description:"e"}],tags:[{title:"param",type:{name:"mixed"},description:"e"}]},{name:"shown",description:"Menu is shown",properties:[{type:{names:["mixed"]},description:"e"}],tags:[{title:"param",type:{name:"mixed"},description:"e"}]},{name:"update:modelValue",type:{names:["boolean"]},description:"Update value, param: <code>value: boolean</code>",properties:[{type:{names:["mixed"]},description:"e"},{type:{names:["mixed"]},name:"value"}],tags:[{title:"param",type:{name:"mixed"},description:"e"},{title:"param",type:{name:"mixed"},name:"value"}]}],slots:[{name:"toggle"},{name:"default"}],sourceFiles:["/home/runner/work/design-system/design-system/src/components/BDropdown/BDropdown.vue"]};const M={},se={class:"ds-rounded-lg ds-bg-white ds-p-2 ds-shadow"};function ne(n,o){return u(),p("ul",se,[m(n.$slots,"default")])}const oe=X(M,[["render",ne]]);M.__docgenInfo={displayName:"BDropdownContent",description:"",tags:{},slots:[{name:"default"}],sourceFiles:["/home/runner/work/design-system/design-system/src/components/BDropdown/BDropdownContent.vue"]};const F=P({__name:"BDropdownItem",props:{closeOnClick:{type:Boolean,default:!1}},setup(n){const o=n,s=J(q.CloseDropdown),d=()=>{o.closeOnClick&&s&&s()};return(t,a)=>(u(),p("li",{class:"ds-cursor-pointer ds-px-3 ds-py-2 ds-text-sm ds-text-gray-700 hover:ds-bg-slate-100",onClick:d},[m(t.$slots,"default")]))}});F.__docgenInfo={exportName:"default",displayName:"BDropdownItem",description:"",tags:{},props:[{name:"closeOnClick",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"false"}}],slots:[{name:"default"}],sourceFiles:["/home/runner/work/design-system/design-system/src/components/BDropdown/BDropdownItem.vue"]};const ce={title:"Components/Dropdown",parameters:{docs:{description:{component:"The <code>BDropdown</code> component is used for opening a custom menu by user's click."}}},component:w,tags:["autodocs"],argTypes:{toggle:{control:"text",description:"Toggle"},default:{control:"text",description:"Content"}},args:{inputId:"",label:"",toggleCssClass:"",menuCssClass:"",noCloseOnClickOutside:!1,noCloseOnEsc:!1,menuFixed:!1}},c={render:n=>({components:{BDropdown:w,BDropdownContent:oe,BDropdownItem:F},setup(){return{args:n,items:[{text:"Edit",icon:"fa-solid fa-pen-to-square"},{text:"Delete",icon:"fa-solid fa-trash"}]}},template:`
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
    `}),args:{toggle:'<i class="fa-solid fa-chevron-down" />'}};var V,I,$;c.parameters={...c.parameters,docs:{...(V=c.parameters)==null?void 0:V.docs,source:{originalSource:`{
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
}`,...($=(I=c.parameters)==null?void 0:I.docs)==null?void 0:$.source}}};const ue=["Default"];export{c as Default,ue as __namedExportsOrder,ce as default};
