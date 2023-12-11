import{j as Y,b as o,k as h,C as B,E as Z,g as ee,o as l,d,l as u,q as se,s as P,B as ae,n as i,t as E,x as te,w as le,y as ne,F as de,G as ue,u as oe,m as re,H as N}from"./vue.esm-bundler-d836205b.js";import{u as ie}from"./Validation-68c07edf.js";import{u as F,l as ce,e as me,r as fe}from"./ComponentHelper-d29c08d8.js";import{u as ve}from"./vue-i18n.esm-bundler-b6b8dfca.js";import{_ as pe}from"./BErrorMessage-3ca20143.js";import{_ as ge}from"./BLabel-04f8c997.js";import{_ as ye}from"./BTextField-1dc8cc95.js";import{v as be}from"./v4-a960c1f4.js";import"./Common-43134899.js";const he=u("path",{d:"M137.4 374.6c12.5 12.5 32.8 12.5 45.3 0l128-128c9.2-9.2 11.9-22.9 6.9-34.9s-16.6-19.8-29.6-19.8L32 192c-12.9 0-24.6 7.8-29.6 19.8s-2.2 25.7 6.9 34.9l128 128z"},null,-1),xe=[he],we=["id","disabled"],ke={key:0},Ve={key:1,class:"ds-text-black/[0.4]"},Ce=u("path",{d:"M137.4 374.6c12.5 12.5 32.8 12.5 45.3 0l128-128c9.2-9.2 11.9-22.9 6.9-34.9s-16.6-19.8-29.6-19.8L32 192c-12.9 0-24.6 7.8-29.6 19.8s-2.2 25.7 6.9 34.9l128 128z"},null,-1),Ie=[Ce],_e=["id","data-cy","data-ut"],qe={class:"ds-max-h-72 ds-overflow-y-auto ds-rounded-lg ds-bg-white ds-shadow"},Be={class:"ds-py-1 ds-text-sm ds-text-black/[0.85]"},Ee=["onClick"],M=Y({__name:"BSelect",props:{inputId:{default:""},modelValue:{},label:{default:""},items:{},disabled:{type:Boolean,default:!1},placeholder:{default:""},valueCssClass:{default:""},menuCssClass:{default:""},validationRules:{default:void 0},required:{type:Boolean,default:!1},requiredErrorMessage:{default:""},hideDetails:{type:Boolean,default:!1},allowInput:{type:Boolean,default:!1}},emits:["change","open","close","change:input","update:modelValue"],setup(w,{expose:k,emit:c}){const s=w,m=o(null),V=o(null),f=o(null),n=o(!1),{t:A}=ve(),j={validateRule:e=>!!e,errorMessage:()=>s.requiredErrorMessage||A("ds.global.field_required")},C=o(""),v=o(),p=h(()=>s.inputId||`id-${be()}`),r=h({get(){return s.modelValue},set(e){c("update:modelValue",e)}}),H=h(()=>{let e="ds-border ds-drop-shadow-light ds-text-sm ds-h-[40px] ds-px-3 ds-rounded-lg ds-block ds-w-full ds-inline-flex ds-items-center ds-justify-between ";return e+=s.disabled?"ds-cursor-not-allowed ds-bg-[#f2f2f2] ds-text-black/[0.4] ":"ds-bg-white ds-text-black/[0.85] ",e+=S.value.valid?"ds-border-black/10 focus:ds-border-focus focus:ds-ring-1 focus:ds-ring-focus ":"ds-border-error focus:ds-ring-1 focus:ds-ring-error ",e}),U=h(()=>{let e=[];return s.required&&e.push(j),s.validationRules&&(e=e.concat(s.validationRules)),e.length?e:void 0}),{validate:$,validationResult:S}=ie(p.value,r,U.value);B(n,e=>{e?(ce(),Q(),c("open")):(F(),L(),c("close"))}),B(r,()=>{I(),g()}),B(()=>s.items,()=>{var e;r.value&&!((e=v.value)!=null&&e.value)&&(I(),g())},{deep:!0});const I=()=>{v.value=s.items.find(e=>e.value===r.value)},g=()=>{var e;s.allowInput&&(C.value=((e=v.value)==null?void 0:e.text)||"")},W=()=>{document.addEventListener("keydown",R)},R=e=>{e.key==="Escape"&&_()},G=()=>{document.addEventListener("click",D)},D=e=>{[m.value,f.value].some(y=>e.composedPath().includes(y))||_()},J=e=>{r.value=e.value,_(),c("change",e.value),N(()=>{$()})},K=(e,a)=>{a.style.width=`${e.offsetWidth}px`},Q=()=>{N(()=>{me(m.value,f.value),K(m.value,f.value)})},L=()=>{fe(m.value,f.value)},X=e=>{c("change:input",e)},_=()=>{var e;n.value=!1,(e=V.value)==null||e.blur(),g()};return(()=>{I(),g()})(),Z(()=>{W(),G()}),ee(()=>{document.removeEventListener("keydown",R),document.removeEventListener("click",D),F(),L()}),k({validate:$,selectMenu:n}),(e,a)=>{var q,y;return l(),d("div",null,[u("div",{ref_key:"selectEl",ref:m},[se(ge,{id:p.value,label:e.label,required:e.required},null,8,["id","label","required"]),s.allowInput?(l(),P(ye,{key:0,id:p.value,ref_key:"inputRef",ref:V,modelValue:C.value,"onUpdate:modelValue":[a[0]||(a[0]=t=>C.value=t),X],disabled:s.disabled,placeholder:s.placeholder,"hide-details":"",onFocus:a[1]||(a[1]=t=>n.value=!0),"onClick:append":a[2]||(a[2]=t=>{var b;return(b=V.value)==null?void 0:b.focus()})},{appendIcon:ae(()=>[(l(),d("svg",{class:i([[n.value?"ds-rotate-180":""],"ds-h-4 ds-w-4 ds-transition-transform"]),viewBox:"0 0 320 512",xmlns:"http://www.w3.org/2000/svg"},xe,2))]),_:1},8,["id","modelValue","disabled","placeholder"])):(l(),d("button",{key:1,id:p.value,class:i(H.value),disabled:s.disabled,type:"button",onClick:a[3]||(a[3]=t=>n.value=!n.value)},[u("span",{class:i([e.valueCssClass,"ds-truncate"])},[(q=v.value)!=null&&q.text?(l(),d("span",ke,E((y=v.value)==null?void 0:y.text),1)):(l(),d("span",Ve,E(s.placeholder),1))],2),te("   "),(l(),d("svg",{class:i([[n.value?"ds-rotate-180":""],"ds-h-4 ds-w-4 ds-transition-transform"]),viewBox:"0 0 320 512",xmlns:"http://www.w3.org/2000/svg"},Ie,2))],10,we)),le(u("div",{id:`${p.value}Menu`,ref_key:"selectMenuEl",ref:f,class:i([e.menuCssClass,"ds-absolute ds-z-50 ds-min-w-[8rem] ds-py-1"]),"data-cy":e.$attrs["data-cy"]?`${e.$attrs["data-cy"]}Menu`:void 0,"data-ut":e.$attrs["data-ut"]?`${e.$attrs["data-ut"]}Menu`:void 0},[u("div",qe,[u("ul",Be,[(l(!0),d(de,null,ue(e.items,(t,b)=>(l(),d("li",{key:`item${b}`,class:"ds-cursor-pointer",onClick:$e=>J(t)},[u("a",{class:i([t.cssClass+`${t.value===r.value?" ds-bg-gray-150":""}`,"ds-block ds-px-4 ds-py-2 hover:ds-bg-gray-150"])},E(t==null?void 0:t.text),3)],8,Ee))),128))])])],10,_e),[[ne,n.value]])],512),e.hideDetails?re("",!0):(l(),P(pe,{key:0,"error-message":oe(S).errorMessage(),class:"ds-mt-1"},null,8,["error-message"]))])}}});M.__docgenInfo={exportName:"default",displayName:"BSelect",description:"",tags:{},expose:[{name:"validate"},{name:"selectMenu"}],props:[{name:"inputId",required:!1,type:{name:"string"},defaultValue:{func:!1,value:"''"}},{name:"modelValue",required:!0,type:{name:"union",elements:[{name:"string"},{name:"number"}]}},{name:"label",required:!1,type:{name:"string"},defaultValue:{func:!1,value:"''"}},{name:"items",required:!0,type:{name:"Array",elements:[{name:"DisplayItem"}]}},{name:"disabled",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"placeholder",required:!1,type:{name:"string"},defaultValue:{func:!1,value:"''"}},{name:"valueCssClass",required:!1,type:{name:"string"},defaultValue:{func:!1,value:"''"}},{name:"menuCssClass",required:!1,type:{name:"string"},defaultValue:{func:!1,value:"''"}},{name:"validationRules",description:"Array of custom validation rules.",required:!1,type:{name:"Array",elements:[{name:"ValidationRule"}]},defaultValue:{func:!1,value:"undefined"}},{name:"required",description:"Validate if the field is left empty.",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"requiredErrorMessage",required:!1,type:{name:"string"},defaultValue:{func:!1,value:"''"}},{name:"hideDetails",description:"Hide the validation error message.",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"allowInput",description:"Allow to type to search.",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"false"}}],sourceFiles:["/home/runner/work/design-system/design-system/src/components/BSelect.vue"]};const ze={title:"Components/Select",component:M,tags:["autodocs"],args:{inputId:"",label:"",disabled:!1,placeholder:"",valueCssClass:"",menuCssClass:"",validationRules:void 0,required:!1,requiredErrorMessage:"",hideDetails:!1,allowInput:!1}},x={render:w=>({components:{BSelect:M},setup(){const k=o(3);return{args:w,selectedValue:k}},template:`
      <BSelect v-bind="args" v-model="selectedValue" />
      <span class="ds-text-xs ds-text-gray-500">Selected value: <b>{{ selectedValue }}</b></span>
    `}),args:{modelValue:3,items:[{text:"Item 01",value:1},{text:"Item 02",value:2},{text:"Item 03",value:3},{text:"Item 04",value:4},{text:"Item 05",value:5},{text:"Item 06",value:6}]}};var O,T,z;x.parameters={...x.parameters,docs:{...(O=x.parameters)==null?void 0:O.docs,source:{originalSource:`{
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
}`,...(z=(T=x.parameters)==null?void 0:T.docs)==null?void 0:z.source}}};const Ae=["Default"];export{x as Default,Ae as __namedExportsOrder,ze as default};
//# sourceMappingURL=BSelect.stories-dcd79431.js.map
