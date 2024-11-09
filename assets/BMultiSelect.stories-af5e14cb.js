import{d as re,a as c,e as b,m as A,q as ce,b as me,o as l,c as o,g as r,j as O,n as p,u as V,F as U,s as j,k as K,f as W,t as M,h as pe,w as fe,x as ve,y as C,z as ge}from"./vue.esm-bundler-d9761a11.js";import{u as ye}from"./Validation-7273bacc.js";import{u as H,l as he,e as be,r as xe,a as we}from"./ComponentHelper-8c2ae0a5.js";import{u as ke}from"./vue-i18n-adecd10a.js";import{B as Ve}from"./BCheckbox-890ec913.js";import{_ as Ce}from"./BErrorMessage-fca9dec1.js";import{_ as Ie}from"./BLabel-e58d6a83.js";import{B as Me}from"./BTextField-bd3545e8.js";import{v as _e}from"./v4-4a60fe23.js";import"./Common-74b424b5.js";import"./Enums-b5cac340.js";import"./_plugin-vue_export-helper-c27b6911.js";const Be={class:"ds-absolute ds-right-3 ds-z-[1]"},qe=r("path",{d:"M137.4 374.6c12.5 12.5 32.8 12.5 45.3 0l128-128c9.2-9.2 11.9-22.9 6.9-34.9s-16.6-19.8-29.6-19.8L32 192c-12.9 0-24.6 7.8-29.6 19.8s-2.2 25.7 6.9 34.9l128 128z"},null,-1),Se=[qe],$e=["onClick"],Ee=r("path",{d:"M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM175 175c9.4-9.4 24.6-9.4 33.9 0l47 47 47-47c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9l-47 47 47 47c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0l-47-47-47 47c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l47-47-47-47c-9.4-9.4-9.4-24.6 0-33.9z"},null,-1),De=[Ee],Re=["id","disabled"],Ae=r("path",{d:"M137.4 374.6c12.5 12.5 32.8 12.5 45.3 0l128-128c9.2-9.2 11.9-22.9 6.9-34.9s-16.6-19.8-29.6-19.8L32 192c-12.9 0-24.6 7.8-29.6 19.8s-2.2 25.7 6.9 34.9l128 128z"},null,-1),ze=[Ae],Le=["id","data-cy","data-ut"],Fe={class:"ds-max-h-72 ds-overflow-y-auto ds-rounded-lg ds-bg-white ds-shadow"},Pe={class:"ds-py-1 ds-text-sm ds-text-black/[0.85]"},Te=["onClick"],z=re({__name:"BMultiSelect",props:{inputId:{default:""},modelValue:{},label:{default:""},items:{},disabled:{type:Boolean,default:!1},placeholder:{default:""},valueCssClass:{default:""},menuCssClass:{default:""},validationRules:{default:void 0},required:{type:Boolean,default:!1},requiredErrorMessage:{default:""},hideDetails:{type:Boolean,default:!1},showSelectedItemCount:{type:Boolean,default:!1},allowInput:{type:Boolean,default:!1}},emits:["change","open","close","change:input","update:modelValue"],setup(B,{expose:q,emit:Q}){const a=B,v=Q,g=c(null),S=c(null),y=c(null),u=c(!1),{t:L}=ke(),X={validateRule:e=>!!e&&e.length>0,errorMessage:()=>a.requiredErrorMessage||L("ds.global.field_required")},$=c(""),f=c([]),x=b(()=>a.inputId||`id-${_e()}`),n=b({get(){return a.modelValue},set(e){v("update:modelValue",e)}}),Z=b(()=>{let e="ds-border ds-drop-shadow-light ds-text-sm ds-h-[40px] ds-px-3 ds-rounded-lg ds-block ds-w-full ds-inline-flex ds-items-center ds-justify-between ";return e+=a.disabled?"ds-cursor-not-allowed ds-bg-[#f2f2f2] ds-text-black/[0.4] ":"ds-bg-white ds-text-black/[0.85] ",e+=h.value.valid?"ds-border-black/10 focus:ds-border-focus focus:ds-ring-1 focus:ds-ring-focus ":"ds-border-error focus:ds-ring-1 focus:ds-ring-error ",e}),ee=b(()=>{let e=[];return a.required&&e.push(X),a.validationRules&&(e=e.concat(a.validationRules)),e.length?e:void 0}),se=b(()=>{var e,s;return((e=n.value)==null?void 0:e.length)>1?` (${L("ds.components.base.multi_select.selected_item_count",{count:(s=n.value)==null?void 0:s.length})})`:""}),ae=b(()=>a.showSelectedItemCount?`${a.label}${se.value}`:a.label),{validate:E,validationResult:h}=ye(x.value,n,ee.value);A(u,e=>{e?(he(),de(),v("open")):(H(),N(),v("close"))}),A(n,()=>{D()},{deep:!0}),A(()=>a.items,()=>{n.value.length!==0&&f.value.length===0&&D()},{deep:!0});const D=()=>{f.value=n.value.map(e=>{let s=f.value.find(i=>i.value===e);return s||(s=a.items.find(i=>i.value===e)),{text:s==null?void 0:s.text,value:e,cssClass:s==null?void 0:s.cssClass}})},te=()=>{document.addEventListener("keydown",F)},F=e=>{e.key==="Escape"&&(R(),I())},le=()=>{document.addEventListener("click",P)},P=e=>{[g.value,y.value].some(t=>e.composedPath().includes(t))||(R(),I())},T=e=>{const s=n.value.findIndex(i=>i===e.value);s!==-1?n.value.splice(s,1):n.value.push(e.value),v("change",e.value),C(()=>{E()}),we(g.value,y.value)},ne=(e,s)=>{s.style.width=`${e.offsetWidth}px`},de=()=>{C(()=>{be(g.value,y.value),ne(g.value,y.value)})},N=()=>{xe(g.value,y.value)},oe=e=>{v("change:input",e),I()},R=()=>{var e;u.value=!1,(e=S.value)==null||e.blur(),$.value=""},ue=e=>{const s=n.value.findIndex(i=>i===e.value);s!==-1&&(n.value.splice(s,1),v("change",e.value),C(()=>{E()}))};(()=>{var e;((e=a.items)==null?void 0:e.length)>0&&D()})(),ce(()=>{te(),le()}),me(()=>{document.removeEventListener("keydown",F),document.removeEventListener("click",P),H(),N()}),q({validate:E,selectMenu:u});const w=c(null),d=c(-1),I=()=>{d.value=-1},ie=e=>{e.key==="ArrowDown"?(e.preventDefault(),d.value<a.items.length-1&&(d.value++,C(()=>{var s;w.value&&((s=w.value[d.value])==null||s.scrollIntoView({block:"nearest"}))}))):e.key==="ArrowUp"?(e.preventDefault(),d.value>0?(d.value--,C(()=>{var s;w.value&&((s=w.value[d.value])==null||s.scrollIntoView({block:"nearest"}))})):d.value=-1):e.key==="Enter"&&d.value>=0?(e.preventDefault(),T(a.items[d.value])):e.key==="Tab"&&R()};return(e,s)=>{var i;return l(),o("div",null,[r("div",{ref_key:"selectEl",ref:g},[O(Ie,{id:x.value,label:ae.value,required:e.required},null,8,["id","label","required"]),a.allowInput?(l(),o("div",{key:0,class:p([{"ds-border-focus ds-ring-1 ds-ring-focus":u.value&&V(h).valid,"ds-ring-1 ds-ring-error":u.value&&!V(h).valid,"ds-border-black/10":V(h).valid,"ds-border-error":!V(h).valid},"ds-relative ds-flex ds-flex-wrap ds-items-center ds-gap-x-1 ds-rounded-lg ds-border ds-bg-white ds-px-3 ds-py-1 ds-drop-shadow-light"])},[r("div",Be,[(l(),o("svg",{class:p([[u.value?"ds-rotate-180":""],"ds-h-4 ds-min-h-4 ds-w-4 ds-min-w-4 ds-transition-transform"]),viewBox:"0 0 320 512",xmlns:"http://www.w3.org/2000/svg",onClick:s[0]||(s[0]=t=>{var m;return(m=S.value)==null?void 0:m.focus()})},Se,2))]),(l(!0),o(U,null,j(f.value,(t,m)=>(l(),o("div",{key:`item${m}`,class:"ds-my-0.5 ds-flex-initial ds-space-x-1 ds-rounded-lg ds-bg-black/10 ds-px-2"},[r("span",null,M(t.text),1),(l(),o("svg",{class:"ds-mb-1 ds-inline ds-h-4 ds-w-4 ds-cursor-pointer ds-fill-black/60 hover:ds-fill-black/40",viewBox:"0 0 512 512",xmlns:"http://www.w3.org/2000/svg",onClick:k=>ue(t)},De,8,$e))]))),128)),a.allowInput?(l(),K(Me,{key:0,id:x.value,ref_key:"inputRef",ref:S,modelValue:$.value,"onUpdate:modelValue":[s[1]||(s[1]=t=>$.value=t),oe],disabled:a.disabled,class:"ds-flex-auto","hide-details":"","input-css-class":"ds-drop-shadow-none ds-border-none !ds-ring-0 ds-px-0 !ds-h-[30px] ds-pl-0",onChange:I,onFocus:s[2]||(s[2]=t=>u.value=!0),onKeydown:ie},null,8,["id","modelValue","disabled"])):W("",!0)],2)):(l(),o("button",{key:1,id:x.value,class:p(Z.value),disabled:e.disabled,type:"button",onClick:s[3]||(s[3]=t=>u.value=!u.value)},[f.value.length>0?(l(),o("span",{key:0,class:p([e.valueCssClass,"ds-truncate ds-text-sm"])},M((i=f.value)==null?void 0:i.map(t=>t.text).join(", ")),3)):(l(),o("span",{key:1,class:p([e.valueCssClass,"ds-truncate ds-text-sm ds-text-black/[0.4]"])},M(a.placeholder),3)),pe("   "),(l(),o("svg",{class:p([[u.value?"ds-rotate-180":""],"ds-h-4 ds-min-h-4 ds-w-4 ds-min-w-4 ds-transition-transform"]),viewBox:"0 0 320 512",xmlns:"http://www.w3.org/2000/svg"},ze,2))],10,Re)),fe(r("div",{id:`${x.value}Menu`,ref_key:"selectMenuEl",ref:y,class:p([e.menuCssClass,"ds-absolute ds-z-50 ds-min-w-[8rem] ds-py-1"]),"data-cy":e.$attrs["data-cy"]?`${e.$attrs["data-cy"]}Menu`:void 0,"data-ut":e.$attrs["data-ut"]?`${e.$attrs["data-ut"]}Menu`:void 0},[r("div",Fe,[r("ul",Pe,[(l(!0),o(U,null,j(e.items,(t,m)=>(l(),o("li",{key:`item${m}`,ref_for:!0,ref_key:"itemRefs",ref:w,class:"ds-cursor-pointer",onClick:ge(k=>T(t),["prevent"])},[r("a",{class:p([[t.cssClass,{"ds-bg-slate-100":d.value!==m&&f.value.some(k=>k.value===t.value),"ds-bg-slate-300":d.value===m}],"ds-flex ds-items-center ds-space-x-2 ds-px-4 ds-py-2 hover:ds-bg-slate-300"])},[O(Ve,{modelValue:n.value,"onUpdate:modelValue":s[4]||(s[4]=k=>n.value=k),value:t.value,size:"sm"},null,8,["modelValue","value"]),r("span",null,M(t==null?void 0:t.text),1)],2)],8,Te))),128))])])],10,Le),[[ve,u.value]])],512),e.hideDetails?W("",!0):(l(),K(Ce,{key:0,"error-message":V(h).errorMessage(),class:"ds-mt-1"},null,8,["error-message"]))])}}});z.__docgenInfo={exportName:"default",displayName:"BMultiSelect",description:"",tags:{},expose:[{name:"validate"},{name:"selectMenu"}],props:[{name:"inputId",required:!1,type:{name:"string"},defaultValue:{func:!1,value:"''"}},{name:"modelValue",required:!0,type:{name:"Array",elements:[{name:"union",elements:[{name:"string"},{name:"number"}]}]}},{name:"label",required:!1,type:{name:"string"},defaultValue:{func:!1,value:"''"}},{name:"items",required:!0,type:{name:"Array",elements:[{name:"DisplayItem"}]}},{name:"disabled",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"placeholder",required:!1,type:{name:"string"},defaultValue:{func:!1,value:"''"}},{name:"valueCssClass",required:!1,type:{name:"string"},defaultValue:{func:!1,value:"''"}},{name:"menuCssClass",required:!1,type:{name:"string"},defaultValue:{func:!1,value:"''"}},{name:"validationRules",description:"Array of custom validation rules.",required:!1,type:{name:"Array",elements:[{name:"ValidationRule"}]},defaultValue:{func:!1,value:"undefined"}},{name:"required",description:"Validate if the field is left empty.",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"requiredErrorMessage",required:!1,type:{name:"string"},defaultValue:{func:!1,value:"''"}},{name:"hideDetails",description:"Hide the validation error message.",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"showSelectedItemCount",description:"Show number of selected items.",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"allowInput",description:"Allow to type to search.",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"false"}}],events:[{name:"change",type:{names:["union"],elements:[{name:"string"},{name:"number"}]},description:"Value is changed",properties:[{type:{names:["mixed"]},description:"e"},{type:{names:["mixed"]},name:"value"}],tags:[{title:"param",type:{name:"mixed"},description:"e"},{title:"param",type:{name:"mixed"},name:"value"}]},{name:"open",description:"Menu is opened",properties:[{type:{names:["mixed"]},description:"e"}],tags:[{title:"param",type:{name:"mixed"},description:"e"}]},{name:"close",description:"Menu is closed",properties:[{type:{names:["mixed"]},description:"e"}],tags:[{title:"param",type:{name:"mixed"},description:"e"}]},{name:"change:input",type:{names:["string"]},description:"Input value for searching is changed, param: <code>inputValue: string</code>",properties:[{type:{names:["mixed"]},description:"e"},{type:{names:["mixed"]},name:"inputValue"}],tags:[{title:"param",type:{name:"mixed"},description:"e"},{title:"param",type:{name:"mixed"},name:"inputValue"}]},{name:"update:modelValue",type:{names:["Array"],elements:[{name:"union",elements:[{name:"string"},{name:"number"}]}]},description:"Update value, param: <code>value: Array<string | number></code>",properties:[{type:{names:["mixed"]},description:"e"},{type:{names:["mixed"]},name:"value"}],tags:[{title:"param",type:{name:"mixed"},description:"e"},{title:"param",type:{name:"mixed"},name:"value"}]}],sourceFiles:["/home/runner/work/design-system/design-system/src/components/BMultiSelect.vue"]};const es={title:"Components/MultiSelect",parameters:{docs:{description:{component:"The <code>BMultiSelect</code> is used for collecting user provided information by picking multiple items from a list of options."}}},component:z,tags:["autodocs"],args:{inputId:"",label:"",disabled:!1,placeholder:"",valueCssClass:"",menuCssClass:"",validationRules:void 0,required:!1,requiredErrorMessage:"",hideDetails:!1,showSelectedItemCount:!1,allowInput:!1}},_={render:B=>({components:{BMultiSelect:z},setup(){const q=c([2,3,6]);return{args:B,selectedValues:q}},template:`
      <BMultiSelect
        v-bind="args"
        v-model="selectedValues"
      />
      <span class="ds-text-xs ds-text-gray-500">Selected values: <b>{{ selectedValues }}</b></span>
    `}),args:{modelValue:[2,5],items:[{text:"Item 01",value:1},{text:"Item 02",value:2},{text:"Item 03",value:3},{text:"Item 04",value:4},{text:"Item 05",value:5},{text:"Item 06",value:6}]}};var Y,G,J;_.parameters={..._.parameters,docs:{...(Y=_.parameters)==null?void 0:Y.docs,source:{originalSource:`{
  render: (args: any) => ({
    components: {
      BMultiSelect
    },
    setup() {
      const selectedValues = ref([2, 3, 6]);
      return {
        args,
        selectedValues
      };
    },
    template: \`
      <BMultiSelect
        v-bind="args"
        v-model="selectedValues"
      />
      <span class="ds-text-xs ds-text-gray-500">Selected values: <b>{{ selectedValues }}</b></span>
    \`
  }),
  args: {
    modelValue: [2, 5],
    items: [{
      text: 'Item 01',
      value: 1
    }, {
      text: 'Item 02',
      value: 2
    }, {
      text: 'Item 03',
      value: 3
    }, {
      text: 'Item 04',
      value: 4
    }, {
      text: 'Item 05',
      value: 5
    }, {
      text: 'Item 06',
      value: 6
    }]
  }
}`,...(J=(G=_.parameters)==null?void 0:G.docs)==null?void 0:J.source}}};const ss=["Default"];export{_ as Default,ss as __namedExportsOrder,es as default};