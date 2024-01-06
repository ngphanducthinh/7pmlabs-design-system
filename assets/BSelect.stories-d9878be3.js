import{j as Y,e as r,k as h,z as _,B as Z,g as ee,o as l,b as d,l as o,s as se,x as P,y as ae,n as u,t as M,q as te,w as le,E as ne,F as de,D as oe,u as re,m as ie,C as T}from"./vue.esm-bundler-29df2e62.js";import{u as ue}from"./Validation-5669da51.js";import{u as F,l as ce,e as me,r as pe}from"./ComponentHelper-d29c08d8.js";import{u as fe}from"./vue-i18n.esm-bundler-152c8982.js";import{_ as ve}from"./BErrorMessage-f3a23431.js";import{_ as ge}from"./BLabel-57c6859e.js";import{B as ye}from"./BTextField-57a055f8.js";import{v as xe}from"./v4-a960c1f4.js";import"./Common-43134899.js";import"./_plugin-vue_export-helper-c27b6911.js";const he=o("path",{d:"M137.4 374.6c12.5 12.5 32.8 12.5 45.3 0l128-128c9.2-9.2 11.9-22.9 6.9-34.9s-16.6-19.8-29.6-19.8L32 192c-12.9 0-24.6 7.8-29.6 19.8s-2.2 25.7 6.9 34.9l128 128z"},null,-1),be=[he],Ve=["id","disabled"],we={key:0},ke={key:1,class:"ds-text-black/[0.4]"},Ce=o("path",{d:"M137.4 374.6c12.5 12.5 32.8 12.5 45.3 0l128-128c9.2-9.2 11.9-22.9 6.9-34.9s-16.6-19.8-29.6-19.8L32 192c-12.9 0-24.6 7.8-29.6 19.8s-2.2 25.7 6.9 34.9l128 128z"},null,-1),Ie=[Ce],qe=["id","data-cy","data-ut"],Be={class:"ds-max-h-72 ds-overflow-y-auto ds-rounded-lg ds-bg-white ds-shadow"},_e={class:"ds-py-1 ds-text-sm ds-text-black/[0.85]"},Me=["onClick"],E=Y({__name:"BSelect",props:{inputId:{default:""},modelValue:{},label:{default:""},items:{},disabled:{type:Boolean,default:!1},placeholder:{default:""},valueCssClass:{default:""},menuCssClass:{default:""},validationRules:{default:void 0},required:{type:Boolean,default:!1},requiredErrorMessage:{default:""},hideDetails:{type:Boolean,default:!1},allowInput:{type:Boolean,default:!1}},emits:["change","open","close","change:input","update:modelValue"],setup(V,{expose:w,emit:c}){const s=V,m=r(null),k=r(null),p=r(null),n=r(!1),{t:A}=fe(),U={validateRule:e=>!!e,errorMessage:()=>s.requiredErrorMessage||A("ds.global.field_required")},C=r(""),f=r(),v=h(()=>s.inputId||`id-${xe()}`),i=h({get(){return s.modelValue},set(e){c("update:modelValue",e)}}),j=h(()=>{let e="ds-border ds-drop-shadow-light ds-text-sm ds-h-[40px] ds-px-3 ds-rounded-lg ds-block ds-w-full ds-inline-flex ds-items-center ds-justify-between ";return e+=s.disabled?"ds-cursor-not-allowed ds-bg-[#f2f2f2] ds-text-black/[0.4] ":"ds-bg-white ds-text-black/[0.85] ",e+=$.value.valid?"ds-border-black/10 focus:ds-border-focus focus:ds-ring-1 focus:ds-ring-focus ":"ds-border-error focus:ds-ring-1 focus:ds-ring-error ",e}),W=h(()=>{let e=[];return s.required&&e.push(U),s.validationRules&&(e=e.concat(s.validationRules)),e.length?e:void 0}),{validate:S,validationResult:$}=ue(v.value,i,W.value);_(n,e=>{e?(ce(),Q(),c("open")):(F(),L(),c("close"))}),_(i,()=>{I(),g()}),_(()=>s.items,()=>{var e;i.value&&!((e=f.value)!=null&&e.value)&&(I(),g())},{deep:!0});const I=()=>{f.value=s.items.find(e=>e.value===i.value)},g=()=>{var e;s.allowInput&&(C.value=((e=f.value)==null?void 0:e.text)||"")},H=()=>{document.addEventListener("keydown",R)},R=e=>{e.key==="Escape"&&q()},G=()=>{document.addEventListener("click",D)},D=e=>{[m.value,p.value].some(y=>e.composedPath().includes(y))||q()},J=e=>{i.value=e.value,q(),c("change",e.value),T(()=>{S()})},K=(e,a)=>{a.style.width=`${e.offsetWidth}px`},Q=()=>{T(()=>{me(m.value,p.value),K(m.value,p.value)})},L=()=>{pe(m.value,p.value)},X=e=>{c("change:input",e)},q=()=>{var e;n.value=!1,(e=k.value)==null||e.blur(),g()};return(()=>{I(),g()})(),Z(()=>{H(),G()}),ee(()=>{document.removeEventListener("keydown",R),document.removeEventListener("click",D),F(),L()}),w({validate:S,selectMenu:n}),(e,a)=>{var B,y;return l(),d("div",null,[o("div",{ref_key:"selectEl",ref:m},[se(ge,{id:v.value,label:e.label,required:e.required},null,8,["id","label","required"]),s.allowInput?(l(),P(ye,{key:0,id:v.value,ref_key:"inputRef",ref:k,modelValue:C.value,"onUpdate:modelValue":[a[0]||(a[0]=t=>C.value=t),X],disabled:s.disabled,placeholder:s.placeholder,"hide-details":"",onFocus:a[1]||(a[1]=t=>n.value=!0),"onClick:append":a[2]||(a[2]=t=>{var x;return(x=k.value)==null?void 0:x.focus()})},{appendIcon:ae(()=>[(l(),d("svg",{class:u([[n.value?"ds-rotate-180":""],"ds-h-4 ds-w-4 ds-transition-transform"]),viewBox:"0 0 320 512",xmlns:"http://www.w3.org/2000/svg"},be,2))]),_:1},8,["id","modelValue","disabled","placeholder"])):(l(),d("button",{key:1,id:v.value,class:u(j.value),disabled:s.disabled,type:"button",onClick:a[3]||(a[3]=t=>n.value=!n.value)},[o("span",{class:u([e.valueCssClass,"ds-truncate"])},[(B=f.value)!=null&&B.text?(l(),d("span",we,M((y=f.value)==null?void 0:y.text),1)):(l(),d("span",ke,M(s.placeholder),1))],2),te("   "),(l(),d("svg",{class:u([[n.value?"ds-rotate-180":""],"ds-h-4 ds-w-4 ds-transition-transform"]),viewBox:"0 0 320 512",xmlns:"http://www.w3.org/2000/svg"},Ie,2))],10,Ve)),le(o("div",{id:`${v.value}Menu`,ref_key:"selectMenuEl",ref:p,class:u([e.menuCssClass,"ds-absolute ds-z-50 ds-min-w-[8rem] ds-py-1"]),"data-cy":e.$attrs["data-cy"]?`${e.$attrs["data-cy"]}Menu`:void 0,"data-ut":e.$attrs["data-ut"]?`${e.$attrs["data-ut"]}Menu`:void 0},[o("div",Be,[o("ul",_e,[(l(!0),d(de,null,oe(e.items,(t,x)=>(l(),d("li",{key:`item${x}`,class:"ds-cursor-pointer",onClick:Se=>J(t)},[o("a",{class:u([t.cssClass+`${t.value===i.value?" ds-bg-gray-150":""}`,"ds-block ds-px-4 ds-py-2 hover:ds-bg-gray-150"])},M(t==null?void 0:t.text),3)],8,Me))),128))])])],10,qe),[[ne,n.value]])],512),e.hideDetails?ie("",!0):(l(),P(ve,{key:0,"error-message":re($).errorMessage(),class:"ds-mt-1"},null,8,["error-message"]))])}}});E.__docgenInfo={exportName:"default",displayName:"BSelect",description:"",tags:{},expose:[{name:"validate"},{name:"selectMenu"}],props:[{name:"inputId",required:!1,type:{name:"string"},defaultValue:{func:!1,value:"''"}},{name:"modelValue",required:!0,type:{name:"union",elements:[{name:"string"},{name:"number"}]}},{name:"label",required:!1,type:{name:"string"},defaultValue:{func:!1,value:"''"}},{name:"items",required:!0,type:{name:"Array",elements:[{name:"DisplayItem"}]}},{name:"disabled",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"placeholder",required:!1,type:{name:"string"},defaultValue:{func:!1,value:"''"}},{name:"valueCssClass",required:!1,type:{name:"string"},defaultValue:{func:!1,value:"''"}},{name:"menuCssClass",required:!1,type:{name:"string"},defaultValue:{func:!1,value:"''"}},{name:"validationRules",description:"Array of custom validation rules.",required:!1,type:{name:"Array",elements:[{name:"ValidationRule"}]},defaultValue:{func:!1,value:"undefined"}},{name:"required",description:"Validate if the field is left empty.",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"requiredErrorMessage",required:!1,type:{name:"string"},defaultValue:{func:!1,value:"''"}},{name:"hideDetails",description:"Hide the validation error message.",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"allowInput",description:"Allow to type to search.",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"false"}}],events:[{name:"change",type:{names:["union"],elements:[{name:"string"},{name:"number"}]},description:"Value is changed",properties:[{type:{names:["mixed"]},description:"e"},{type:{names:["mixed"]},name:"value"}],tags:[{title:"param",type:{name:"mixed"},description:"e"},{title:"param",type:{name:"mixed"},name:"value"}]},{name:"open",description:"Menu is opened",properties:[{type:{names:["mixed"]},description:"e"}],tags:[{title:"param",type:{name:"mixed"},description:"e"}]},{name:"close",description:"Menu is closed",properties:[{type:{names:["mixed"]},description:"e"}],tags:[{title:"param",type:{name:"mixed"},description:"e"}]},{name:"change:input",type:{names:["string"]},description:"Input value for searching is changed",properties:[{type:{names:["mixed"]},description:"e"},{type:{names:["mixed"]},name:"inputValue"}],tags:[{title:"param",type:{name:"mixed"},description:"e"},{title:"param",type:{name:"mixed"},name:"inputValue"}]},{name:"update:modelValue",type:{names:["union"],elements:[{name:"string"},{name:"number"}]},description:"Update value",properties:[{type:{names:["mixed"]},description:"e"},{type:{names:["mixed"]},name:"value"}],tags:[{title:"param",type:{name:"mixed"},description:"e"},{title:"param",type:{name:"mixed"},name:"value"}]}],sourceFiles:["/home/runner/work/design-system/design-system/src/components/BSelect.vue"]};const Ae={title:"Components/Select",parameters:{docs:{description:{component:"The <code>BSelect</code> is used for collecting user provided information by picking single item from a list of options."}}},component:E,tags:["autodocs"],args:{inputId:"",label:"",disabled:!1,placeholder:"",valueCssClass:"",menuCssClass:"",validationRules:void 0,required:!1,requiredErrorMessage:"",hideDetails:!1,allowInput:!1}},b={render:V=>({components:{BSelect:E},setup(){const w=r(3);return{args:V,selectedValue:w}},template:`
      <BSelect v-bind="args" v-model="selectedValue" />
      <span class="ds-text-xs ds-text-gray-500">Selected value: <b>{{ selectedValue }}</b></span>
    `}),args:{modelValue:3,items:[{text:"Item 01",value:1},{text:"Item 02",value:2},{text:"Item 03",value:3},{text:"Item 04",value:4},{text:"Item 05",value:5},{text:"Item 06",value:6}]}};var N,z,O;b.parameters={...b.parameters,docs:{...(N=b.parameters)==null?void 0:N.docs,source:{originalSource:`{
  render: (args: any) => ({
    components: {
      BSelect
    },
    setup() {
      const selectedValue = ref(3);
      return {
        args,
        selectedValue
      };
    },
    template: \`
      <BSelect v-bind="args" v-model="selectedValue" />
      <span class="ds-text-xs ds-text-gray-500">Selected value: <b>{{ selectedValue }}</b></span>
    \`
  }),
  args: {
    modelValue: 3,
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
}`,...(O=(z=b.parameters)==null?void 0:z.docs)==null?void 0:O.source}}};const Ue=["Default"];export{b as Default,Ue as __namedExportsOrder,Ae as default};
