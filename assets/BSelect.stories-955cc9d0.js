import{j as Y,b as d,k as h,C as E,E as Z,g as ee,o as n,d as r,l as u,q as se,s as P,n as v,t as $,x as ae,w as te,y as le,F as ne,G as ue,u as de,m as oe,H as N}from"./vue.esm-bundler-d836205b.js";import{u as re}from"./Validation-68c07edf.js";import{u as F,l as ie,e as ce,r as fe}from"./ComponentHelper-d29c08d8.js";import{u as me}from"./vue-i18n.esm-bundler-b6b8dfca.js";import{_ as pe}from"./BErrorMessage-3ca20143.js";import{_ as ve}from"./BLabel-04f8c997.js";import{_ as ye}from"./BTextField-13084bf4.js";import{v as ge}from"./v4-a960c1f4.js";import"./Common-43134899.js";const be=["id","disabled"],he={key:0},xe={key:1,class:"ds-text-black/[0.4]"},ke=["id","data-cy","data-ut"],Ve={class:"ds-max-h-72 ds-overflow-y-auto ds-rounded-lg ds-bg-white ds-shadow"},Ce={class:"ds-py-1 ds-text-sm ds-text-black/[0.85]"},Ie=["onClick"],_=Y({__name:"BSelect",props:{inputId:{default:""},modelValue:{},label:{default:""},items:{},disabled:{type:Boolean,default:!1},placeholder:{default:""},valueCssClass:{default:""},menuCssClass:{default:""},validationRules:{default:void 0},required:{type:Boolean,default:!1},requiredErrorMessage:{default:""},hideDetails:{type:Boolean,default:!1},allowInput:{type:Boolean,default:!1}},emits:["change","open","close","change:input","update:modelValue"],setup(k,{expose:V,emit:i}){const s=k,c=d(null),C=d(null),f=d(null),l=d(!1),{t:j}=me(),z={validateRule:e=>!!e,errorMessage:()=>s.requiredErrorMessage||j("ds.global.field_required")},I=d(""),m=d(),p=h(()=>s.inputId||`id-${ge()}`),o=h({get(){return s.modelValue},set(e){i("update:modelValue",e)}}),H=h(()=>{let e="ds-border ds-drop-shadow-light ds-text-sm ds-h-[40px] ds-px-3 ds-rounded-lg ds-block ds-w-full ds-inline-flex ds-items-center ds-justify-between ";return e+=s.disabled?"ds-cursor-not-allowed ds-bg-[#f2f2f2] ds-text-black/[0.4] ":"ds-bg-white ds-text-black/[0.85] ",e+=S.value.valid?"ds-border-black/10 focus:ds-border-focus focus:ds-ring-1 focus:ds-ring-focus ":"ds-border-error focus:ds-ring-1 focus:ds-ring-error ",e}),U=h(()=>{let e=[];return s.required&&e.push(z),s.validationRules&&(e=e.concat(s.validationRules)),e.length?e:void 0}),{validate:M,validationResult:S}=re(p.value,o,U.value);E(l,e=>{e?(ie(),Q(),i("open")):(F(),L(),i("close"))}),E(o,()=>{q(),y()}),E(()=>s.items,()=>{var e;o.value&&!((e=m.value)!=null&&e.value)&&(q(),y())},{deep:!0});const q=()=>{m.value=s.items.find(e=>e.value===o.value)},y=()=>{var e;s.allowInput&&(I.value=((e=m.value)==null?void 0:e.text)||"")},W=()=>{document.addEventListener("keydown",R)},R=e=>{e.key==="Escape"&&w()},G=()=>{document.addEventListener("click",D)},D=e=>{[c.value,f.value].some(g=>e.composedPath().includes(g))||w()},J=e=>{o.value=e.value,w(),i("change",e.value),N(()=>{M()})},K=(e,a)=>{a.style.width=`${e.offsetWidth}px`},Q=()=>{N(()=>{ce(c.value,f.value),K(c.value,f.value)})},L=()=>{fe(c.value,f.value)},X=e=>{i("change:input",e)},w=()=>{var e;l.value=!1,(e=C.value)==null||e.blur(),y()};return(()=>{q(),y()})(),Z(()=>{W(),G()}),ee(()=>{document.removeEventListener("keydown",R),document.removeEventListener("click",D),F(),L()}),V({validate:M,selectMenu:l}),(e,a)=>{var B,g;return n(),r("div",null,[u("div",{ref_key:"selectEl",ref:c},[se(ve,{id:p.value,label:e.label,required:e.required},null,8,["id","label","required"]),s.allowInput?(n(),P(ye,{key:0,id:p.value,ref_key:"inputRef",ref:C,modelValue:I.value,"onUpdate:modelValue":[a[0]||(a[0]=t=>I.value=t),X],"append-icon":`fa-solid fa-caret-down ds-transition-transform ${l.value?"ds-rotate-180":""}`,disabled:s.disabled,placeholder:s.placeholder,"hide-details":"",onFocus:a[1]||(a[1]=t=>l.value=!0),"onClick:append":a[2]||(a[2]=t=>{var b;return(b=C.value)==null?void 0:b.focus()})},null,8,["id","modelValue","append-icon","disabled","placeholder"])):(n(),r("button",{key:1,id:p.value,class:v(H.value),disabled:s.disabled,type:"button",onClick:a[3]||(a[3]=t=>l.value=!l.value)},[u("span",{class:v([e.valueCssClass,"ds-truncate"])},[(B=m.value)!=null&&B.text?(n(),r("span",he,$((g=m.value)==null?void 0:g.text),1)):(n(),r("span",xe,$(s.placeholder),1))],2),ae("   "),u("span",{class:v([`${l.value?"ds-rotate-180":""}`,"fa-solid fa-caret-down ds-text-base ds-transition-transform"])},null,2)],10,be)),te(u("div",{id:`${p.value}Menu`,ref_key:"selectMenuEl",ref:f,class:v([e.menuCssClass,"ds-absolute ds-z-50 ds-min-w-[8rem] ds-py-1"]),"data-cy":e.$attrs["data-cy"]?`${e.$attrs["data-cy"]}Menu`:void 0,"data-ut":e.$attrs["data-ut"]?`${e.$attrs["data-ut"]}Menu`:void 0},[u("div",Ve,[u("ul",Ce,[(n(!0),r(ne,null,ue(e.items,(t,b)=>(n(),r("li",{key:`item${b}`,class:"ds-cursor-pointer",onClick:we=>J(t)},[u("a",{class:v([t.cssClass+`${t.value===o.value?" ds-bg-gray-150":""}`,"ds-block ds-px-4 ds-py-2 hover:ds-bg-gray-150"])},$(t==null?void 0:t.text),3)],8,Ie))),128))])])],10,ke),[[le,l.value]])],512),e.hideDetails?oe("",!0):(n(),P(pe,{key:0,"error-message":de(S).errorMessage(),class:"ds-mt-1","prepend-icon":"fa-solid fa-circle-exclamation"},null,8,["error-message"]))])}}});_.__docgenInfo={exportName:"default",displayName:"BSelect",description:"",tags:{},expose:[{name:"validate"},{name:"selectMenu"}],props:[{name:"inputId",required:!1,type:{name:"string"},defaultValue:{func:!1,value:"''"}},{name:"modelValue",required:!0,type:{name:"union",elements:[{name:"string"},{name:"number"}]}},{name:"label",required:!1,type:{name:"string"},defaultValue:{func:!1,value:"''"}},{name:"items",required:!0,type:{name:"Array",elements:[{name:"DisplayItem"}]}},{name:"disabled",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"placeholder",required:!1,type:{name:"string"},defaultValue:{func:!1,value:"''"}},{name:"valueCssClass",required:!1,type:{name:"string"},defaultValue:{func:!1,value:"''"}},{name:"menuCssClass",required:!1,type:{name:"string"},defaultValue:{func:!1,value:"''"}},{name:"validationRules",description:"Array of custom validation rules.",required:!1,type:{name:"Array",elements:[{name:"ValidationRule"}]},defaultValue:{func:!1,value:"undefined"}},{name:"required",description:"Validate if the field is left empty.",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"requiredErrorMessage",required:!1,type:{name:"string"},defaultValue:{func:!1,value:"''"}},{name:"hideDetails",description:"Hide the validation error message.",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"allowInput",description:"Allow to type to search.",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"false"}}],sourceFiles:["/home/runner/work/design-system/design-system/src/components/BSelect.vue"]};const Pe={title:"Components/Select",component:_,tags:["autodocs"],args:{inputId:"",label:"",disabled:!1,placeholder:"",valueCssClass:"",menuCssClass:"",validationRules:void 0,required:!1,requiredErrorMessage:"",hideDetails:!1,allowInput:!1}},x={render:k=>({components:{BSelect:_},setup(){const V=d(3);return{args:k,selectedValue:V}},template:`
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
//# sourceMappingURL=BSelect.stories-955cc9d0.js.map
