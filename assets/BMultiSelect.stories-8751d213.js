import{e as ve,a as m,f as b,w as L,s as fe,d as ge,o as l,c as u,h as i,k as U,n as p,u as k,F as j,x as K,m as W,g as H,t as S,j as xe,l as ye,y as be,z as M,A as he}from"./vue.esm-bundler-ceeda665.js";import{u as we}from"./Validation-e4311cdc.js";import{u as Y,l as Ve,e as Ce,r as Ie,a as ke}from"./ComponentHelper-8c2ae0a5.js";import{u as Me}from"./vue-i18n-5bf62172.js";import{B as Be}from"./BCheckbox-ddbc3cd8.js";import{_ as Se}from"./BErrorMessage-4dbabbe9.js";import{_ as qe}from"./BLabel-93eef36b.js";import{B as $e}from"./BTextField-87578f2d.js";import{v as Ee}from"./v4-eb618527.js";import"./Common-74b424b5.js";import"./Enums-b5cac340.js";import"./_plugin-vue_export-helper-c27b6911.js";const De={class:"ds-absolute ds-right-3 ds-z-[1]"},Re=["onClick"],Ae=["id","disabled"],_e=["id","data-cy","data-ut"],ze={class:"ds-max-h-72 ds-overflow-y-auto ds-rounded-lg ds-bg-white ds-shadow"},Le={class:"ds-py-1 ds-text-sm ds-text-black/[0.85]"},Fe=["onClick"],E=ve({__name:"BMultiSelect",props:{inputId:{default:""},modelValue:{},label:{default:""},items:{},disabled:{type:Boolean,default:!1},placeholder:{default:""},valueCssClass:{default:""},menuCssClass:{default:""},validationRules:{default:void 0},required:{type:Boolean,default:!1},requiredErrorMessage:{default:""},hideDetails:{type:Boolean,default:!1},showSelectedItemCount:{type:Boolean,default:!1},allowInput:{type:Boolean,default:!1}},emits:["change","open","close","change:input","update:modelValue"],setup(h,{expose:w,emit:se}){const t=h,f=se,g=m(null),D=m(null),x=m(null),r=m(!1),{t:F}=Me(),te={validateRule:e=>!!e&&e.length>0,errorMessage:()=>t.requiredErrorMessage||F("ds.global.field_required")},R=m(""),v=m([]),V=b(()=>t.inputId||`id-${Ee()}`),n=b({get(){return t.modelValue},set(e){f("update:modelValue",e)}}),ae=b(()=>{let e="ds-border ds-drop-shadow-light ds-text-sm ds-h-[40px] ds-px-3 ds-rounded-lg ds-block ds-w-full ds-inline-flex ds-items-center ds-justify-between ";return e+=t.disabled?"ds-cursor-not-allowed ds-bg-[#f2f2f2] ds-text-black/[0.4] ":"ds-bg-white ds-text-black/[0.85] ",e+=y.value.valid?"ds-border-black/10 focus:ds-border-focus focus:ds-ring-1 focus:ds-ring-focus ":"ds-border-error focus:ds-ring-1 focus:ds-ring-error ",e}),le=b(()=>{let e=[];return t.required&&e.push(te),t.validationRules&&(e=e.concat(t.validationRules)),e.length?e:void 0}),ne=b(()=>{var e,s;return((e=n.value)==null?void 0:e.length)>1?` (${F("ds.components.base.multi_select.selected_item_count",{count:(s=n.value)==null?void 0:s.length})})`:""}),de=b(()=>t.showSelectedItemCount?`${t.label}${ne.value}`:t.label),{validate:A,validationResult:y}=we(V.value,n,le.value);L(r,e=>{e?(Ve(),ie(),f("open")):(Y(),O(),f("close"))}),L(n,()=>{_()},{deep:!0}),L(()=>t.items,()=>{n.value.length!==0&&v.value.length===0&&_()},{deep:!0});const _=()=>{v.value=n.value.map(e=>{let s=v.value.find(o=>o.value===e);return s||(s=t.items.find(o=>o.value===e)),{text:s==null?void 0:s.text,value:e,cssClass:s==null?void 0:s.cssClass}})},ue=()=>{document.addEventListener("keydown",P)},P=e=>{e.key==="Escape"&&(z(),B())},re=()=>{document.addEventListener("click",T)},T=e=>{[g.value,x.value].some(a=>e.composedPath().includes(a))||(z(),B())},N=e=>{const s=n.value.findIndex(o=>o===e.value);s!==-1?n.value.splice(s,1):n.value.push(e.value),f("change",e.value),M(()=>{A()}),ke(g.value,x.value)},oe=(e,s)=>{s.style.width=`${e.offsetWidth}px`},ie=()=>{M(()=>{Ce(g.value,x.value),oe(g.value,x.value)})},O=()=>{Ie(g.value,x.value)},me=e=>{f("change:input",e),B()},z=()=>{var e;r.value=!1,(e=D.value)==null||e.blur(),R.value=""},ce=e=>{const s=n.value.findIndex(o=>o===e.value);s!==-1&&(n.value.splice(s,1),f("change",e.value),M(()=>{A()}))};(()=>{var e;((e=t.items)==null?void 0:e.length)>0&&_()})(),fe(()=>{ue(),re()}),ge(()=>{document.removeEventListener("keydown",P),document.removeEventListener("click",T),Y(),O()}),w({validate:A,selectMenu:r});const C=m(null),d=m(-1),B=()=>{d.value=-1},pe=e=>{e.key==="ArrowDown"?(e.preventDefault(),d.value<t.items.length-1&&(d.value++,M(()=>{var s;C.value&&((s=C.value[d.value])==null||s.scrollIntoView({block:"nearest"}))}))):e.key==="ArrowUp"?(e.preventDefault(),d.value>0?(d.value--,M(()=>{var s;C.value&&((s=C.value[d.value])==null||s.scrollIntoView({block:"nearest"}))})):d.value=-1):e.key==="Enter"&&d.value>=0?(e.preventDefault(),N(t.items[d.value])):e.key==="Tab"&&z()};return(e,s)=>{var o;return l(),u("div",null,[i("div",{ref_key:"selectEl",ref:g},[U(qe,{id:V.value,label:de.value,required:e.required},null,8,["id","label","required"]),t.allowInput?(l(),u("div",{key:0,class:p([{"ds-border-focus ds-ring-1 ds-ring-focus":r.value&&k(y).valid,"ds-ring-1 ds-ring-error":r.value&&!k(y).valid,"ds-border-black/10":k(y).valid,"ds-border-error":!k(y).valid},"ds-relative ds-flex ds-flex-wrap ds-items-center ds-gap-x-1 ds-rounded-lg ds-border ds-bg-white ds-px-3 ds-py-1 ds-drop-shadow-light"])},[i("div",De,[(l(),u("svg",{class:p([[r.value?"ds-rotate-180":""],"ds-h-4 ds-min-h-4 ds-w-4 ds-min-w-4 ds-transition-transform"]),viewBox:"0 0 320 512",xmlns:"http://www.w3.org/2000/svg",onClick:s[0]||(s[0]=a=>{var c;return(c=D.value)==null?void 0:c.focus()})},s[5]||(s[5]=[i("path",{d:"M137.4 374.6c12.5 12.5 32.8 12.5 45.3 0l128-128c9.2-9.2 11.9-22.9 6.9-34.9s-16.6-19.8-29.6-19.8L32 192c-12.9 0-24.6 7.8-29.6 19.8s-2.2 25.7 6.9 34.9l128 128z"},null,-1)]),2))]),(l(!0),u(j,null,K(v.value,(a,c)=>(l(),u("div",{key:`item${c}`,class:"ds-my-0.5 ds-flex-initial ds-space-x-1 ds-rounded-lg ds-bg-black/10 ds-px-2"},[i("span",null,S(a.text),1),(l(),u("svg",{class:"ds-mb-1 ds-inline ds-h-4 ds-w-4 ds-cursor-pointer ds-fill-black/60 hover:ds-fill-black/40",viewBox:"0 0 512 512",xmlns:"http://www.w3.org/2000/svg",onClick:I=>ce(a)},s[6]||(s[6]=[i("path",{d:"M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM175 175c9.4-9.4 24.6-9.4 33.9 0l47 47 47-47c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9l-47 47 47 47c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0l-47-47-47 47c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l47-47-47-47c-9.4-9.4-9.4-24.6 0-33.9z"},null,-1)]),8,Re))]))),128)),t.allowInput?(l(),W($e,{key:0,id:V.value,ref_key:"inputRef",ref:D,modelValue:R.value,"onUpdate:modelValue":[s[1]||(s[1]=a=>R.value=a),me],disabled:t.disabled,class:"ds-flex-auto","hide-details":"","input-css-class":"ds-drop-shadow-none ds-border-none !ds-ring-0 ds-px-0 !ds-h-[30px] ds-pl-0",onChange:B,onFocus:s[2]||(s[2]=a=>r.value=!0),onKeydown:pe},null,8,["id","modelValue","disabled"])):H("",!0)],2)):(l(),u("button",{key:1,id:V.value,class:p(ae.value),disabled:e.disabled,type:"button",onClick:s[3]||(s[3]=a=>r.value=!r.value)},[v.value.length>0?(l(),u("span",{key:0,class:p([e.valueCssClass,"ds-truncate ds-text-sm"])},S((o=v.value)==null?void 0:o.map(a=>a.text).join(", ")),3)):(l(),u("span",{key:1,class:p([e.valueCssClass,"ds-truncate ds-text-sm ds-text-black/[0.4]"])},S(t.placeholder),3)),s[8]||(s[8]=xe("   ")),(l(),u("svg",{class:p([[r.value?"ds-rotate-180":""],"ds-h-4 ds-min-h-4 ds-w-4 ds-min-w-4 ds-transition-transform"]),viewBox:"0 0 320 512",xmlns:"http://www.w3.org/2000/svg"},s[7]||(s[7]=[i("path",{d:"M137.4 374.6c12.5 12.5 32.8 12.5 45.3 0l128-128c9.2-9.2 11.9-22.9 6.9-34.9s-16.6-19.8-29.6-19.8L32 192c-12.9 0-24.6 7.8-29.6 19.8s-2.2 25.7 6.9 34.9l128 128z"},null,-1)]),2))],10,Ae)),ye(i("div",{id:`${V.value}Menu`,ref_key:"selectMenuEl",ref:x,class:p([e.menuCssClass,"ds-absolute ds-z-50 ds-min-w-[8rem] ds-py-1"]),"data-cy":e.$attrs["data-cy"]?`${e.$attrs["data-cy"]}Menu`:void 0,"data-ut":e.$attrs["data-ut"]?`${e.$attrs["data-ut"]}Menu`:void 0},[i("div",ze,[i("ul",Le,[(l(!0),u(j,null,K(e.items,(a,c)=>(l(),u("li",{key:`item${c}`,ref_for:!0,ref_key:"itemRefs",ref:C,class:"ds-cursor-pointer",onClick:he(I=>N(a),["prevent"])},[i("a",{class:p([[a.cssClass,{"ds-bg-slate-100":d.value!==c&&v.value.some(I=>I.value===a.value),"ds-bg-slate-300":d.value===c}],"ds-flex ds-items-center ds-space-x-2 ds-px-4 ds-py-2 hover:ds-bg-slate-300"])},[U(Be,{modelValue:n.value,"onUpdate:modelValue":s[4]||(s[4]=I=>n.value=I),value:a.value,"hide-details":"",size:"sm"},null,8,["modelValue","value"]),i("span",null,S(a==null?void 0:a.text),1)],2)],8,Fe))),128))])])],10,_e),[[be,r.value]])],512),e.hideDetails?H("",!0):(l(),W(Se,{key:0,"error-message":k(y).errorMessage(),class:"ds-mt-1"},null,8,["error-message"]))])}}});E.__docgenInfo={exportName:"default",displayName:"BMultiSelect",description:"",tags:{},expose:[{name:"validate"},{name:"selectMenu"}],props:[{name:"inputId",required:!1,type:{name:"string"},defaultValue:{func:!1,value:"''"}},{name:"modelValue",required:!0,type:{name:"Array",elements:[{name:"union",elements:[{name:"string"},{name:"number"}]}]}},{name:"label",required:!1,type:{name:"string"},defaultValue:{func:!1,value:"''"}},{name:"items",required:!0,type:{name:"Array",elements:[{name:"DisplayItem"}]}},{name:"disabled",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"placeholder",required:!1,type:{name:"string"},defaultValue:{func:!1,value:"''"}},{name:"valueCssClass",required:!1,type:{name:"string"},defaultValue:{func:!1,value:"''"}},{name:"menuCssClass",required:!1,type:{name:"string"},defaultValue:{func:!1,value:"''"}},{name:"validationRules",description:"Array of custom validation rules.",required:!1,type:{name:"Array",elements:[{name:"ValidationRule"}]},defaultValue:{func:!1,value:"undefined"}},{name:"required",description:"Validate if the field is left empty.",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"requiredErrorMessage",required:!1,type:{name:"string"},defaultValue:{func:!1,value:"''"}},{name:"hideDetails",description:"Hide the validation error message.",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"showSelectedItemCount",description:"Show number of selected items.",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"allowInput",description:"Allow to type to search.",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"false"}}],events:[{name:"change",type:{names:["union"],elements:[{name:"string"},{name:"number"}]},description:"Value is changed",properties:[{type:{names:["mixed"]},description:"e"},{type:{names:["mixed"]},name:"value"}],tags:[{title:"param",type:{name:"mixed"},description:"e"},{title:"param",type:{name:"mixed"},name:"value"}]},{name:"open",description:"Menu is opened",properties:[{type:{names:["mixed"]},description:"e"}],tags:[{title:"param",type:{name:"mixed"},description:"e"}]},{name:"close",description:"Menu is closed",properties:[{type:{names:["mixed"]},description:"e"}],tags:[{title:"param",type:{name:"mixed"},description:"e"}]},{name:"change:input",type:{names:["string"]},description:"Input value for searching is changed, param: <code>inputValue: string</code>",properties:[{type:{names:["mixed"]},description:"e"},{type:{names:["mixed"]},name:"inputValue"}],tags:[{title:"param",type:{name:"mixed"},description:"e"},{title:"param",type:{name:"mixed"},name:"inputValue"}]},{name:"update:modelValue",type:{names:["Array"],elements:[{name:"union",elements:[{name:"string"},{name:"number"}]}]},description:"Update value, param: <code>value: Array<string | number></code>",properties:[{type:{names:["mixed"]},description:"e"},{type:{names:["mixed"]},name:"value"}],tags:[{title:"param",type:{name:"mixed"},description:"e"},{title:"param",type:{name:"mixed"},name:"value"}]}],sourceFiles:["/home/runner/work/design-system/design-system/src/components/BMultiSelect.vue"]};const Xe={title:"Components/MultiSelect",parameters:{docs:{description:{component:"The <code>BMultiSelect</code> is used for collecting user provided information by picking multiple items from a list of options."}}},component:E,tags:["autodocs"],args:{inputId:"",label:"",disabled:!1,placeholder:"",valueCssClass:"",menuCssClass:"",validationRules:void 0,required:!1,requiredErrorMessage:"",hideDetails:!1,showSelectedItemCount:!1,allowInput:!1}},q={render:h=>({components:{BMultiSelect:E},setup(){const w=m([2,3,6]);return{args:h,selectedValues:w}},template:`
      <BMultiSelect
        v-bind="args"
        v-model="selectedValues"
      />
      <span class="ds-text-xs ds-text-gray-500">Selected values: <b>{{ selectedValues }}</b></span>
    `}),args:{modelValue:[2,5],items:[{text:"Item 01",value:1},{text:"Item 02",value:2},{text:"Item 03",value:3},{text:"Item 04",value:4},{text:"Item 05",value:5},{text:"Item 06",value:6}]}},$={render:h=>({components:{BMultiSelect:E},setup(){const w=m([2,3,6]);return{args:h,selectedValues:w}},template:`
      <BMultiSelect
        v-bind="args"
        v-model="selectedValues"
      />
      <span class="ds-text-xs ds-text-gray-500">Selected values: <b>{{ selectedValues }}</b></span>
    `}),args:{modelValue:[2,5],items:[{text:"Item 01",value:1},{text:"Item 02",value:2},{text:"Item 03",value:3},{text:"Item 04",value:4},{text:"Item 05",value:5},{text:"Item 06",value:6}],menuCssClass:"*:ds-max-h-36"}};var G,J,Q;q.parameters={...q.parameters,docs:{...(G=q.parameters)==null?void 0:G.docs,source:{originalSource:`{
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
}`,...(Q=(J=q.parameters)==null?void 0:J.docs)==null?void 0:Q.source}}};var X,Z,ee;$.parameters={...$.parameters,docs:{...(X=$.parameters)==null?void 0:X.docs,source:{originalSource:`{
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
    }],
    menuCssClass: '*:ds-max-h-36'
  }
}`,...(ee=(Z=$.parameters)==null?void 0:Z.docs)==null?void 0:ee.source}}};const Ze=["Default","CustomMenuCssClass"];export{$ as CustomMenuCssClass,q as Default,Ze as __namedExportsOrder,Xe as default};
