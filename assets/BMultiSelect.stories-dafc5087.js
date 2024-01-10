import{j as ne,e as m,k as g,z as S,B as de,g as oe,o as l,b as d,l as i,s as P,n as r,u as w,F,D as N,x as T,m as O,t as k,q as ue,w as ie,E as re,C as $,G as ce}from"./vue.esm-bundler-29df2e62.js";import{u as me}from"./Validation-5669da51.js";import{u as U,l as pe,e as ve,r as fe}from"./ComponentHelper-d29c08d8.js";import{u as ge}from"./vue-i18n.esm-bundler-152c8982.js";import{B as ye}from"./BCheckbox-9ce28f9f.js";import{_ as he}from"./BErrorMessage-f3a23431.js";import{_ as xe}from"./BLabel-57c6859e.js";import{B as be}from"./BTextField-4bf88596.js";import{v as we}from"./v4-a960c1f4.js";import"./Common-43134899.js";import"./Enums-5b02df9b.js";import"./_plugin-vue_export-helper-c27b6911.js";const ke={class:"ds-absolute ds-right-3 ds-z-[1]"},Ve=i("path",{d:"M137.4 374.6c12.5 12.5 32.8 12.5 45.3 0l128-128c9.2-9.2 11.9-22.9 6.9-34.9s-16.6-19.8-29.6-19.8L32 192c-12.9 0-24.6 7.8-29.6 19.8s-2.2 25.7 6.9 34.9l128 128z"},null,-1),Ce=[Ve],Ie=["onClick"],Me=i("path",{d:"M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM175 175c9.4-9.4 24.6-9.4 33.9 0l47 47 47-47c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9l-47 47 47 47c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0l-47-47-47 47c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l47-47-47-47c-9.4-9.4-9.4-24.6 0-33.9z"},null,-1),Be=[Me],qe=["id","disabled"],_e=i("path",{d:"M137.4 374.6c12.5 12.5 32.8 12.5 45.3 0l128-128c9.2-9.2 11.9-22.9 6.9-34.9s-16.6-19.8-29.6-19.8L32 192c-12.9 0-24.6 7.8-29.6 19.8s-2.2 25.7 6.9 34.9l128 128z"},null,-1),Se=[_e],$e=["id","data-cy","data-ut"],Ee={class:"ds-max-h-72 ds-overflow-y-auto ds-rounded-lg ds-bg-white ds-shadow"},Re={class:"ds-py-1 ds-text-sm ds-text-black/[0.85]"},De=["onClick"],E=ne({__name:"BMultiSelect",props:{inputId:{default:""},modelValue:{},label:{default:""},items:{},disabled:{type:Boolean,default:!1},placeholder:{default:""},valueCssClass:{default:""},menuCssClass:{default:""},validationRules:{default:void 0},required:{type:Boolean,default:!1},requiredErrorMessage:{default:""},hideDetails:{type:Boolean,default:!1},showSelectedItemCount:{type:Boolean,default:!1},allowInput:{type:Boolean,default:!1}},emits:["change","open","close","change:input","update:modelValue"],setup(C,{expose:I,emit:p}){const t=C,y=m(null),M=m(null),h=m(null),o=m(!1),{t:R}=ge(),H={validateRule:e=>!!e&&e.length>0,errorMessage:()=>t.requiredErrorMessage||R("ds.global.field_required")},B=m(""),c=m([]),x=g(()=>t.inputId||`id-${we()}`),n=g({get(){return t.modelValue},set(e){p("update:modelValue",e)}}),J=g(()=>{let e="ds-border ds-drop-shadow-light ds-text-sm ds-h-[40px] ds-px-3 ds-rounded-lg ds-block ds-w-full ds-inline-flex ds-items-center ds-justify-between ";return e+=t.disabled?"ds-cursor-not-allowed ds-bg-[#f2f2f2] ds-text-black/[0.4] ":"ds-bg-white ds-text-black/[0.85] ",e+=v.value.valid?"ds-border-black/10 focus:ds-border-focus focus:ds-ring-1 focus:ds-ring-focus ":"ds-border-error focus:ds-ring-1 focus:ds-ring-error ",e}),K=g(()=>{let e=[];return t.required&&e.push(H),t.validationRules&&(e=e.concat(t.validationRules)),e.length?e:void 0}),Q=g(()=>{var e,s;return((e=n.value)==null?void 0:e.length)>1?` (${R("ds.components.base.multi_select.selected_item_count",{count:(s=n.value)==null?void 0:s.length})})`:""}),X=g(()=>t.showSelectedItemCount?`${t.label}${Q.value}`:t.label),{validate:q,validationResult:v}=me(x.value,n,K.value);S(o,e=>{e?(pe(),ae(),p("open")):(U(),L(),p("close"))}),S(n,()=>{_()},{deep:!0}),S(()=>t.items,()=>{n.value.length!==0&&c.value.length===0&&_()},{deep:!0});const _=()=>{c.value=n.value.map(e=>{let s=c.value.find(u=>u.value===e);return s||(s=t.items.find(u=>u.value===e)),{text:s==null?void 0:s.text,value:e,cssClass:s==null?void 0:s.cssClass}})},Y=()=>{document.addEventListener("keydown",D)},D=e=>{e.key==="Escape"&&A()},Z=()=>{document.addEventListener("click",z)},z=e=>{[y.value,h.value].some(a=>e.composedPath().includes(a))||A()},ee=e=>{const s=n.value.findIndex(u=>u===e.value);s!==-1?n.value.splice(s,1):n.value.push(e.value),p("change",e.value),$(()=>{q()})},se=(e,s)=>{s.style.width=`${e.offsetWidth}px`},ae=()=>{$(()=>{ve(y.value,h.value),se(y.value,h.value)})},L=()=>{fe(y.value,h.value)},te=e=>{p("change:input",e)},A=()=>{var e;o.value=!1,(e=M.value)==null||e.blur(),B.value=""},le=e=>{const s=n.value.findIndex(u=>u===e.value);s!==-1&&(n.value.splice(s,1),p("change",e.value),$(()=>{q()}))};return(()=>{t.items.length>0&&_()})(),de(()=>{Y(),Z()}),oe(()=>{document.removeEventListener("keydown",D),document.removeEventListener("click",z),U(),L()}),I({validate:q,selectMenu:o}),(e,s)=>{var u;return l(),d("div",null,[i("div",{ref_key:"selectEl",ref:y},[P(xe,{id:x.value,label:X.value,required:e.required},null,8,["id","label","required"]),t.allowInput?(l(),d("div",{key:0,class:r([{"ds-border-focus ds-ring-1 ds-ring-focus":o.value&&w(v).valid,"ds-ring-1 ds-ring-error":o.value&&!w(v).valid,"ds-border-black/10":w(v).valid,"ds-border-error":!w(v).valid},"ds-relative ds-flex ds-flex-wrap ds-items-center ds-gap-x-1 ds-rounded-lg ds-border ds-bg-white ds-px-3 ds-py-1 ds-drop-shadow-light"])},[i("div",ke,[(l(),d("svg",{class:r([[o.value?"ds-rotate-180":""],"ds-h-4 ds-w-4 ds-transition-transform"]),viewBox:"0 0 320 512",xmlns:"http://www.w3.org/2000/svg",onClick:s[0]||(s[0]=a=>{var f;return(f=M.value)==null?void 0:f.focus()})},Ce,2))]),(l(!0),d(F,null,N(c.value,(a,f)=>(l(),d("div",{key:`item${f}`,class:"ds-my-0.5 ds-flex-initial ds-space-x-1 ds-rounded-lg ds-bg-black/10 ds-px-2"},[i("span",null,k(a.text),1),(l(),d("svg",{class:"ds-mb-1 ds-inline ds-h-4 ds-w-4 ds-cursor-pointer ds-fill-black/60 hover:ds-fill-black/40",viewBox:"0 0 512 512",xmlns:"http://www.w3.org/2000/svg",onClick:b=>le(a)},Be,8,Ie))]))),128)),t.allowInput?(l(),T(be,{key:0,id:x.value,ref_key:"inputRef",ref:M,modelValue:B.value,"onUpdate:modelValue":[s[1]||(s[1]=a=>B.value=a),te],disabled:t.disabled,class:"ds-flex-auto","hide-details":"","input-css-class":"ds-drop-shadow-none ds-border-none !ds-ring-0 ds-px-0 !ds-h-[30px] ds-pl-0",onFocus:s[2]||(s[2]=a=>o.value=!0)},null,8,["id","modelValue","disabled"])):O("",!0)],2)):(l(),d("button",{key:1,id:x.value,class:r(J.value),disabled:e.disabled,type:"button",onClick:s[3]||(s[3]=a=>o.value=!o.value)},[c.value.length>0?(l(),d("span",{key:0,class:r([e.valueCssClass,"ds-truncate ds-text-sm"])},k((u=c.value)==null?void 0:u.map(a=>a.text).join(", ")),3)):(l(),d("span",{key:1,class:r([e.valueCssClass,"ds-truncate ds-text-sm ds-text-black/[0.4]"])},k(t.placeholder),3)),ue("   "),(l(),d("svg",{class:r([[o.value?"ds-rotate-180":""],"ds-h-4 ds-w-4 ds-transition-transform"]),viewBox:"0 0 320 512",xmlns:"http://www.w3.org/2000/svg"},Se,2))],10,qe)),ie(i("div",{id:`${x.value}Menu`,ref_key:"selectMenuEl",ref:h,class:r([e.menuCssClass,"ds-absolute ds-z-50 ds-min-w-[8rem] ds-py-1"]),"data-cy":e.$attrs["data-cy"]?`${e.$attrs["data-cy"]}Menu`:void 0,"data-ut":e.$attrs["data-ut"]?`${e.$attrs["data-ut"]}Menu`:void 0},[i("div",Ee,[i("ul",Re,[(l(!0),d(F,null,N(e.items,(a,f)=>(l(),d("li",{key:`item${f}`,class:"ds-cursor-pointer",onClick:ce(b=>ee(a),["prevent"])},[i("a",{class:r([a.cssClass+`${c.value.some(b=>b.value===a.value)?" ds-bg-slate-100":""}`,"ds-flex ds-items-center ds-space-x-2 ds-px-4 ds-py-2 hover:ds-bg-slate-100"])},[P(ye,{modelValue:n.value,"onUpdate:modelValue":s[4]||(s[4]=b=>n.value=b),value:a.value,size:"sm"},null,8,["modelValue","value"]),i("span",null,k(a==null?void 0:a.text),1)],2)],8,De))),128))])])],10,$e),[[re,o.value]])],512),e.hideDetails?O("",!0):(l(),T(he,{key:0,"error-message":w(v).errorMessage(),class:"ds-mt-1"},null,8,["error-message"]))])}}});E.__docgenInfo={exportName:"default",displayName:"BMultiSelect",description:"",tags:{},expose:[{name:"validate"},{name:"selectMenu"}],props:[{name:"inputId",required:!1,type:{name:"string"},defaultValue:{func:!1,value:"''"}},{name:"modelValue",required:!0,type:{name:"Array",elements:[{name:"union",elements:[{name:"string"},{name:"number"}]}]}},{name:"label",required:!1,type:{name:"string"},defaultValue:{func:!1,value:"''"}},{name:"items",required:!0,type:{name:"Array",elements:[{name:"DisplayItem"}]}},{name:"disabled",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"placeholder",required:!1,type:{name:"string"},defaultValue:{func:!1,value:"''"}},{name:"valueCssClass",required:!1,type:{name:"string"},defaultValue:{func:!1,value:"''"}},{name:"menuCssClass",required:!1,type:{name:"string"},defaultValue:{func:!1,value:"''"}},{name:"validationRules",description:"Array of custom validation rules.",required:!1,type:{name:"Array",elements:[{name:"ValidationRule"}]},defaultValue:{func:!1,value:"undefined"}},{name:"required",description:"Validate if the field is left empty.",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"requiredErrorMessage",required:!1,type:{name:"string"},defaultValue:{func:!1,value:"''"}},{name:"hideDetails",description:"Hide the validation error message.",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"showSelectedItemCount",description:"Show number of selected items.",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"allowInput",description:"Allow to type to search.",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"false"}}],events:[{name:"change",type:{names:["union"],elements:[{name:"string"},{name:"number"}]},description:"Value is changed",properties:[{type:{names:["mixed"]},description:"e"},{type:{names:["mixed"]},name:"value"}],tags:[{title:"param",type:{name:"mixed"},description:"e"},{title:"param",type:{name:"mixed"},name:"value"}]},{name:"open",description:"Menu is opened",properties:[{type:{names:["mixed"]},description:"e"}],tags:[{title:"param",type:{name:"mixed"},description:"e"}]},{name:"close",description:"Menu is closed",properties:[{type:{names:["mixed"]},description:"e"}],tags:[{title:"param",type:{name:"mixed"},description:"e"}]},{name:"change:input",type:{names:["string"]},description:"Input value for searching is changed, param: <code>inputValue: string</code>",properties:[{type:{names:["mixed"]},description:"e"},{type:{names:["mixed"]},name:"inputValue"}],tags:[{title:"param",type:{name:"mixed"},description:"e"},{title:"param",type:{name:"mixed"},name:"inputValue"}]},{name:"update:modelValue",type:{names:["Array"],elements:[{name:"union",elements:[{name:"string"},{name:"number"}]}]},description:"Update value, param: <code>value: Array<string | number></code>",properties:[{type:{names:["mixed"]},description:"e"},{type:{names:["mixed"]},name:"value"}],tags:[{title:"param",type:{name:"mixed"},description:"e"},{title:"param",type:{name:"mixed"},name:"value"}]}],sourceFiles:["/home/runner/work/design-system/design-system/src/components/BMultiSelect.vue"]};const Je={title:"Components/MultiSelect",parameters:{docs:{description:{component:"The <code>BMultiSelect</code> is used for collecting user provided information by picking multiple items from a list of options."}}},component:E,tags:["autodocs"],args:{inputId:"",label:"",disabled:!1,placeholder:"",valueCssClass:"",menuCssClass:"",validationRules:void 0,required:!1,requiredErrorMessage:"",hideDetails:!1,showSelectedItemCount:!1,allowInput:!1}},V={render:C=>({components:{BMultiSelect:E},setup(){const I=m([2,3,6]);return{args:C,selectedValues:I}},template:`
      <BMultiSelect
        v-bind="args"
        v-model="selectedValues"
      />
      <span class="ds-text-xs ds-text-gray-500">Selected values: <b>{{ selectedValues }}</b></span>
    `}),args:{modelValue:[2,5],items:[{text:"Item 01",value:1},{text:"Item 02",value:2},{text:"Item 03",value:3},{text:"Item 04",value:4},{text:"Item 05",value:5},{text:"Item 06",value:6}]}};var j,W,G;V.parameters={...V.parameters,docs:{...(j=V.parameters)==null?void 0:j.docs,source:{originalSource:`{
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
}`,...(G=(W=V.parameters)==null?void 0:W.docs)==null?void 0:G.source}}};const Ke=["Default"];export{V as Default,Ke as __namedExportsOrder,Je as default};
