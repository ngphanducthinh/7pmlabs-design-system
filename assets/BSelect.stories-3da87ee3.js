import{j as Y,b as d,k as x,C as $,E as Z,g as ee,o as n,d as r,l as u,q as se,s as L,n as p,t as M,B as ae,w as le,x as te,F as ne,G as ue,u as de,m as oe,H as N}from"./vue.esm-bundler-c34c64cb.js";import{u as re}from"./Validation-0cf2dd16.js";import{u as F,l as ie,e as ce,r as fe}from"./ComponentHelper-d29c08d8.js";import{u as ve}from"./vue-i18n.esm-bundler-1f56b746.js";import{_ as me}from"./BErrorMessage-91c905cc.js";import{_ as pe}from"./BLabel-e31bd763.js";import{_ as be}from"./BTextField-1a0a19e8.js";import{v as ge}from"./v4-a960c1f4.js";const he=["id","disabled"],xe={key:0},ye={key:1,class:"ds-text-black/[0.4]"},ke=["id","data-cy","data-ut"],Ve={class:"ds-max-h-72 ds-overflow-y-auto ds-rounded-lg ds-bg-white ds-shadow"},Ce={class:"ds-py-1 ds-text-sm ds-text-black/[0.85]"},Ie=["onClick"],_=Y({__name:"BSelect",props:{inputId:{default:""},modelValue:{},label:{default:""},items:{},disabled:{type:Boolean,default:!1},placeholder:{default:""},valueCssClass:{default:""},menuCssClass:{default:""},validationRules:{default:void 0},required:{type:Boolean,default:!1},requiredErrorMessage:{default:""},hideDetails:{type:Boolean,default:!1},allowInput:{type:Boolean,default:!1}},emits:["update:modelValue","change","open","close","change:input"],setup(k,{expose:V,emit:i}){const s=k,c=d(null),C=d(null),f=d(null),t=d(!1),{t:U}=ve(),z={validateRule:e=>!!e,errorMessage:()=>s.requiredErrorMessage||U("ds.global.field_required")},I=d(""),v=d(),m=x(()=>s.inputId||`id-${ge()}`),o=x({get(){return s.modelValue},set(e){i("update:modelValue",e)}}),W=x(()=>{let e="ds-border ds-drop-shadow-light ds-text-sm ds-h-[40px] ds-px-3 ds-rounded-lg ds-block ds-w-full ds-inline-flex ds-items-center ds-justify-between ";return e+=s.disabled?"ds-cursor-not-allowed ds-bg-[#f2f2f2] ds-text-black/[0.4] ":"ds-bg-white ds-text-black/[0.85] ",e+=q.value.valid?"ds-border-black/10 focus:ds-border-focus focus:ds-ring-1 focus:ds-ring-focus ":"ds-border-error focus:ds-ring-1 focus:ds-ring-error ",e}),G=x(()=>{let e=[];return s.required&&e.push(z),s.validationRules&&(e=e.concat(s.validationRules)),e.length?e:void 0}),{validate:S,validationResult:q}=re(m.value,o,G.value);$(t,e=>{e?(ie(),Q(),i("open")):(F(),P(),i("close"))}),$(o,()=>{w(),b()}),$(()=>s.items,()=>{var e;o.value&&!((e=v.value)!=null&&e.value)&&(w(),b())},{deep:!0});const w=()=>{v.value=s.items.find(e=>e.value===o.value)},b=()=>{var e;s.allowInput&&(I.value=((e=v.value)==null?void 0:e.text)||"")},H=()=>{document.addEventListener("keydown",R)},R=e=>{e.key==="Escape"&&B()},A=()=>{document.addEventListener("click",D)},D=e=>{[c.value,f.value].some(g=>e.composedPath().includes(g))||B()},J=e=>{o.value=e.value,B(),i("change",e.value),N(()=>{S()})},K=(e,a)=>{a.style.width=`${e.offsetWidth}px`},Q=()=>{N(()=>{ce(c.value,f.value),K(c.value,f.value)})},P=()=>{fe(c.value,f.value)},X=e=>{i("change:input",e)},B=()=>{var e;t.value=!1,(e=C.value)==null||e.blur(),b()};return(()=>{w(),b()})(),Z(()=>{H(),A()}),ee(()=>{document.removeEventListener("keydown",R),document.removeEventListener("click",D),F(),P()}),V({validate:S,selectMenu:t}),(e,a)=>{var E,g;return n(),r("div",null,[u("div",{ref_key:"selectEl",ref:c},[se(pe,{id:m.value,label:e.label,required:e.required},null,8,["id","label","required"]),s.allowInput?(n(),L(be,{key:0,id:m.value,ref_key:"inputRef",ref:C,modelValue:I.value,"onUpdate:modelValue":[a[0]||(a[0]=l=>I.value=l),X],"append-icon":`fa-solid fa-caret-down ds-transition-transform ${t.value?"ds-rotate-180":""}`,disabled:s.disabled,placeholder:s.placeholder,"hide-details":"",onFocus:a[1]||(a[1]=l=>t.value=!0),"onClick:append":a[2]||(a[2]=l=>{var h;return(h=C.value)==null?void 0:h.focus()})},null,8,["id","modelValue","append-icon","disabled","placeholder"])):(n(),r("button",{key:1,id:m.value,class:p(W.value),disabled:s.disabled,type:"button",onClick:a[3]||(a[3]=l=>t.value=!t.value)},[u("span",{class:p([e.valueCssClass,"ds-truncate"])},[(E=v.value)!=null&&E.text?(n(),r("span",xe,M((g=v.value)==null?void 0:g.text),1)):(n(),r("span",ye,M(s.placeholder),1))],2),ae("   "),u("span",{class:p([`${t.value?"ds-rotate-180":""}`,"fa-solid fa-caret-down ds-text-base ds-transition-transform"])},null,2)],10,he)),le(u("div",{id:`${m.value}Menu`,ref_key:"selectMenuEl",ref:f,class:p([e.menuCssClass,"ds-absolute ds-z-50 ds-min-w-[8rem] ds-py-1"]),"data-cy":e.$attrs["data-cy"]?`${e.$attrs["data-cy"]}Menu`:void 0,"data-ut":e.$attrs["data-ut"]?`${e.$attrs["data-ut"]}Menu`:void 0},[u("div",Ve,[u("ul",Ce,[(n(!0),r(ne,null,ue(e.items,(l,h)=>(n(),r("li",{key:`item${h}`,class:"ds-cursor-pointer",onClick:Be=>J(l)},[u("a",{class:p([l.cssClass+`${l.value===o.value?" ds-bg-gray-150":""}`,"ds-block ds-px-4 ds-py-2 hover:ds-bg-gray-150"])},M(l==null?void 0:l.text),3)],8,Ie))),128))])])],10,ke),[[te,t.value]])],512),e.hideDetails?oe("",!0):(n(),L(me,{key:0,"error-message":de(q).errorMessage(),class:"ds-mt-1","prepend-icon":"fa-solid fa-circle-exclamation"},null,8,["error-message"]))])}}});_.__docgenInfo={exportName:"default",displayName:"BSelect",description:"",tags:{},expose:[{name:"validate"},{name:"selectMenu"}],props:[{name:"inputId",defaultValue:{func:!1,value:"''"}},{name:"label",defaultValue:{func:!1,value:"''"}},{name:"disabled",defaultValue:{func:!1,value:"false"}},{name:"placeholder",defaultValue:{func:!1,value:"''"}},{name:"valueCssClass",defaultValue:{func:!1,value:"''"}},{name:"menuCssClass",defaultValue:{func:!1,value:"''"}},{name:"validationRules",defaultValue:{func:!1,value:"undefined"}},{name:"required",defaultValue:{func:!1,value:"false"}},{name:"requiredErrorMessage",defaultValue:{func:!1,value:"''"}},{name:"hideDetails",defaultValue:{func:!1,value:"false"}},{name:"allowInput",defaultValue:{func:!1,value:"false"}}],events:[{name:"update:modelValue"},{name:"change"},{name:"open"},{name:"close"},{name:"change:input"}],sourceFiles:["/Users/thinhnguyen/Downloads/Projects/7PMLabs/7pmlabs-design-system/src/components/BSelect.vue"]};const Pe={title:"Components/Select",component:_,tags:["autodocs"],args:{inputId:"",label:"",disabled:!1,placeholder:"",valueCssClass:"",menuCssClass:"",validationRules:void 0,required:!1,requiredErrorMessage:"",hideDetails:!1,allowInput:!1}},y={render:k=>({components:{BSelect:_},setup(){const V=d(3);return{args:k,selectedValue:V}},template:`
      <BSelect v-bind="args" v-model="selectedValue" />
      <span class="ds-text-xs ds-text-gray-500">Selected value: <b>{{ selectedValue }}</b></span>
    `}),args:{modelValue:3,items:[{text:"Item 01",value:1},{text:"Item 02",value:2},{text:"Item 03",value:3},{text:"Item 04",value:4},{text:"Item 05",value:5},{text:"Item 06",value:6}]}};var O,T,j;y.parameters={...y.parameters,docs:{...(O=y.parameters)==null?void 0:O.docs,source:{originalSource:`{
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
}`,...(j=(T=y.parameters)==null?void 0:T.docs)==null?void 0:j.source}}};const Le=["Default"];export{y as Default,Le as __namedExportsOrder,Pe as default};
//# sourceMappingURL=BSelect.stories-3da87ee3.js.map
