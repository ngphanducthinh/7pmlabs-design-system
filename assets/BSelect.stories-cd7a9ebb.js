import{j as Y,b as d,k as h,C as E,E as Z,g as ee,o as n,d as r,l as u,q as ae,s as P,n as v,t as $,x as se,w as te,y as le,F as ne,G as ue,u as de,m as oe,H as N}from"./vue.esm-bundler-f0a4de28.js";import{u as re}from"./Validation-4b68e7d0.js";import{u as F,l as ie,e as ce,r as me}from"./ComponentHelper-d29c08d8.js";import{u as fe}from"./vue-i18n.esm-bundler-45575b10.js";import{_ as pe}from"./BErrorMessage-4230966b.js";import{_ as ve}from"./BLabel-0c4df10b.js";import{_ as ge}from"./BTextField-d989bbc2.js";import{v as ye}from"./v4-a960c1f4.js";import"./Common-43134899.js";const be=["id","disabled"],he={key:0},xe={key:1,class:"ds-text-black/[0.4]"},Ve=["id","data-cy","data-ut"],ke={class:"ds-max-h-72 ds-overflow-y-auto ds-rounded-lg ds-bg-white ds-shadow"},Ce={class:"ds-py-1 ds-text-sm ds-text-black/[0.85]"},Ie=["onClick"],_=Y({__name:"BSelect",props:{inputId:{default:""},modelValue:{},label:{default:""},items:{},disabled:{type:Boolean,default:!1},placeholder:{default:""},valueCssClass:{default:""},menuCssClass:{default:""},validationRules:{default:void 0},required:{type:Boolean,default:!1},requiredErrorMessage:{default:""},hideDetails:{type:Boolean,default:!1},allowInput:{type:Boolean,default:!1}},emits:["update:modelValue","change","open","close","change:input"],setup(V,{expose:k,emit:i}){const a=V,c=d(null),C=d(null),m=d(null),l=d(!1),{t:j}=fe(),z={validateRule:e=>!!e,errorMessage:()=>a.requiredErrorMessage||j("ds.global.field_required")},I=d(""),f=d(),p=h(()=>a.inputId||`id-${ye()}`),o=h({get(){return a.modelValue},set(e){i("update:modelValue",e)}}),H=h(()=>{let e="ds-border ds-drop-shadow-light ds-text-sm ds-h-[40px] ds-px-3 ds-rounded-lg ds-block ds-w-full ds-inline-flex ds-items-center ds-justify-between ";return e+=a.disabled?"ds-cursor-not-allowed ds-bg-[#f2f2f2] ds-text-black/[0.4] ":"ds-bg-white ds-text-black/[0.85] ",e+=S.value.valid?"ds-border-black/10 focus:ds-border-focus focus:ds-ring-1 focus:ds-ring-focus ":"ds-border-error focus:ds-ring-1 focus:ds-ring-error ",e}),U=h(()=>{let e=[];return a.required&&e.push(z),a.validationRules&&(e=e.concat(a.validationRules)),e.length?e:void 0}),{validate:M,validationResult:S}=re(p.value,o,U.value);E(l,e=>{e?(ie(),Q(),i("open")):(F(),L(),i("close"))}),E(o,()=>{q(),g()}),E(()=>a.items,()=>{var e;o.value&&!((e=f.value)!=null&&e.value)&&(q(),g())},{deep:!0});const q=()=>{f.value=a.items.find(e=>e.value===o.value)},g=()=>{var e;a.allowInput&&(I.value=((e=f.value)==null?void 0:e.text)||"")},W=()=>{document.addEventListener("keydown",R)},R=e=>{e.key==="Escape"&&w()},G=()=>{document.addEventListener("click",D)},D=e=>{[c.value,m.value].some(y=>e.composedPath().includes(y))||w()},J=e=>{o.value=e.value,w(),i("change",e.value),N(()=>{M()})},K=(e,s)=>{s.style.width=`${e.offsetWidth}px`},Q=()=>{N(()=>{ce(c.value,m.value),K(c.value,m.value)})},L=()=>{me(c.value,m.value)},X=e=>{i("change:input",e)},w=()=>{var e;l.value=!1,(e=C.value)==null||e.blur(),g()};return(()=>{q(),g()})(),Z(()=>{W(),G()}),ee(()=>{document.removeEventListener("keydown",R),document.removeEventListener("click",D),F(),L()}),k({validate:M,selectMenu:l}),(e,s)=>{var B,y;return n(),r("div",null,[u("div",{ref_key:"selectEl",ref:c},[ae(ve,{id:p.value,label:e.label,required:e.required},null,8,["id","label","required"]),a.allowInput?(n(),P(ge,{key:0,id:p.value,ref_key:"inputRef",ref:C,modelValue:I.value,"onUpdate:modelValue":[s[0]||(s[0]=t=>I.value=t),X],"append-icon":`fa-solid fa-caret-down ds-transition-transform ${l.value?"ds-rotate-180":""}`,disabled:a.disabled,placeholder:a.placeholder,"hide-details":"",onFocus:s[1]||(s[1]=t=>l.value=!0),"onClick:append":s[2]||(s[2]=t=>{var b;return(b=C.value)==null?void 0:b.focus()})},null,8,["id","modelValue","append-icon","disabled","placeholder"])):(n(),r("button",{key:1,id:p.value,class:v(H.value),disabled:a.disabled,type:"button",onClick:s[3]||(s[3]=t=>l.value=!l.value)},[u("span",{class:v([e.valueCssClass,"ds-truncate"])},[(B=f.value)!=null&&B.text?(n(),r("span",he,$((y=f.value)==null?void 0:y.text),1)):(n(),r("span",xe,$(a.placeholder),1))],2),se("   "),u("span",{class:v([`${l.value?"ds-rotate-180":""}`,"fa-solid fa-caret-down ds-text-base ds-transition-transform"])},null,2)],10,be)),te(u("div",{id:`${p.value}Menu`,ref_key:"selectMenuEl",ref:m,class:v([e.menuCssClass,"ds-absolute ds-z-50 ds-min-w-[8rem] ds-py-1"]),"data-cy":e.$attrs["data-cy"]?`${e.$attrs["data-cy"]}Menu`:void 0,"data-ut":e.$attrs["data-ut"]?`${e.$attrs["data-ut"]}Menu`:void 0},[u("div",ke,[u("ul",Ce,[(n(!0),r(ne,null,ue(e.items,(t,b)=>(n(),r("li",{key:`item${b}`,class:"ds-cursor-pointer",onClick:we=>J(t)},[u("a",{class:v([t.cssClass+`${t.value===o.value?" ds-bg-gray-150":""}`,"ds-block ds-px-4 ds-py-2 hover:ds-bg-gray-150"])},$(t==null?void 0:t.text),3)],8,Ie))),128))])])],10,Ve),[[le,l.value]])],512),e.hideDetails?oe("",!0):(n(),P(pe,{key:0,"error-message":de(S).errorMessage(),class:"ds-mt-1","prepend-icon":"fa-solid fa-circle-exclamation"},null,8,["error-message"]))])}}});_.__docgenInfo={exportName:"default",displayName:"BSelect",description:"",tags:{},expose:[{name:"validate"},{name:"selectMenu"}],props:[{name:"inputId",required:!1,type:{name:"string"},defaultValue:{func:!1,value:"''"}},{name:"modelValue",required:!0,type:{name:"union",elements:[{name:"string"},{name:"number"}]}},{name:"label",required:!1,type:{name:"string"},defaultValue:{func:!1,value:"''"}},{name:"items",required:!0,type:{name:"Array",elements:[{name:"DisplayItem"}]}},{name:"disabled",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"placeholder",required:!1,type:{name:"string"},defaultValue:{func:!1,value:"''"}},{name:"valueCssClass",required:!1,type:{name:"string"},defaultValue:{func:!1,value:"''"}},{name:"menuCssClass",required:!1,type:{name:"string"},defaultValue:{func:!1,value:"''"}},{name:"validationRules",description:"Array of custom validation rules.",required:!1,type:{name:"Array",elements:[{name:"ValidationRule"}]},defaultValue:{func:!1,value:"undefined"}},{name:"required",description:"Validate if the field is left empty.",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"requiredErrorMessage",required:!1,type:{name:"string"},defaultValue:{func:!1,value:"''"}},{name:"hideDetails",description:"Hide the validation error message.",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"allowInput",description:"Allow to type to search.",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"false"}}],events:[{name:"update:modelValue"},{name:"change"},{name:"open"},{name:"close"},{name:"change:input"}],sourceFiles:["/home/runner/work/design-system/design-system/src/components/BSelect.vue"]};const Pe={title:"Components/Select",component:_,tags:["autodocs"],args:{inputId:"",label:"",disabled:!1,placeholder:"",valueCssClass:"",menuCssClass:"",validationRules:void 0,required:!1,requiredErrorMessage:"",hideDetails:!1,allowInput:!1}},x={render:V=>({components:{BSelect:_},setup(){const k=d(3);return{args:V,selectedValue:k}},template:`
      <BSelect v-bind="args" v-model="selectedValue" />
      <span class="ds-text-xs ds-text-gray-500">Selected value: <b>{{ selectedValue }}</b></span>
    `}),args:{modelValue:3,items:[{text:"Item 01",value:1},{text:"Item 02",value:2},{text:"Item 03",value:3},{text:"Item 04",value:4},{text:"Item 05",value:5},{text:"Item 06",value:6}]}};var O,T,A;x.parameters={...x.parameters,docs:{...(O=x.parameters)==null?void 0:O.docs,source:{originalSource:`{
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
}`,...(A=(T=x.parameters)==null?void 0:T.docs)==null?void 0:A.source}}};const Ne=["Default"];export{x as Default,Ne as __namedExportsOrder,Pe as default};
//# sourceMappingURL=BSelect.stories-cd7a9ebb.js.map
