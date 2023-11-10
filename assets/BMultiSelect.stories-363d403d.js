import{j as de,b as f,k as g,C as E,E as ue,g as ne,o as n,d as r,l as o,q as F,n as i,u as C,F as O,G as j,s as z,m as T,t as y,x as oe,w as re,y as ie,H as _,J as ce}from"./vue.esm-bundler-f0a4de28.js";import{u as fe}from"./Validation-4b68e7d0.js";import{u as U,l as ve,e as me,r as pe}from"./ComponentHelper-d29c08d8.js";import{u as ge}from"./vue-i18n.esm-bundler-45575b10.js";import{B as be}from"./BCheckbox-e32b179c.js";import{_ as xe}from"./BErrorMessage-94bbd499.js";import{_ as he}from"./BLabel-60c969e3.js";import{_ as ke}from"./BTextField-479914c9.js";import{v as Ce}from"./v4-a960c1f4.js";import"./Common-43134899.js";import"./Enums-fb1fa8e1.js";import"./_plugin-vue_export-helper-c27b6911.js";const ye={class:"ds-absolute ds-right-3 ds-z-[1]"},Ve=["onClick"],Ie=["id","disabled"],we=["id","data-cy","data-ut"],Me={class:"ds-max-h-72 ds-overflow-y-auto ds-rounded-lg ds-bg-white ds-shadow"},$e={class:"ds-py-1 ds-text-sm ds-text-black/[0.85]"},Be=["onClick"],q=de({__name:"BMultiSelect",props:{inputId:{default:""},modelValue:{},label:{default:""},items:{},disabled:{type:Boolean,default:!1},placeholder:{default:""},valueCssClass:{default:""},menuCssClass:{default:""},validationRules:{default:void 0},required:{type:Boolean,default:!1},requiredErrorMessage:{default:""},hideDetails:{type:Boolean,default:!1},showSelectedItemCount:{type:Boolean,default:!1},allowInput:{type:Boolean,default:!1}},emits:["update:modelValue","change","open","close","change:input"],setup(I,{expose:w,emit:v}){const a=I,b=f(null),M=f(null),x=f(null),d=f(!1),{t:R}=ge(),J={validateRule:e=>!!e&&e.length>0,errorMessage:()=>a.requiredErrorMessage||R("ds.global.field_required")},$=f(""),c=f([]),h=g(()=>a.inputId||`id-${Ce()}`),t=g({get(){return a.modelValue},set(e){v("update:modelValue",e)}}),A=g(()=>{let e="ds-border ds-drop-shadow-light ds-text-sm ds-h-[40px] ds-px-3 ds-rounded-lg ds-block ds-w-full ds-inline-flex ds-items-center ds-justify-between ";return e+=a.disabled?"ds-cursor-not-allowed ds-bg-[#f2f2f2] ds-text-black/[0.4] ":"ds-bg-white ds-text-black/[0.85] ",e+=m.value.valid?"ds-border-black/10 focus:ds-border-focus focus:ds-ring-1 focus:ds-ring-focus ":"ds-border-error focus:ds-ring-1 focus:ds-ring-error ",e}),K=g(()=>{let e=[];return a.required&&e.push(J),a.validationRules&&(e=e.concat(a.validationRules)),e.length?e:void 0}),Q=g(()=>{var e,s;return((e=t.value)==null?void 0:e.length)>1?` (${R("ds.components.base.multi_select.selected_item_count",{count:(s=t.value)==null?void 0:s.length})})`:""}),X=g(()=>a.showSelectedItemCount?`${a.label}${Q.value}`:a.label),{validate:B,validationResult:m}=fe(h.value,t,K.value);E(d,e=>{e?(ve(),le(),v("open")):(U(),L(),v("close"))}),E(t,()=>{S()},{deep:!0}),E(()=>a.items,()=>{t.value.length!==0&&c.value.length===0&&S()},{deep:!0});const S=()=>{c.value=t.value.map(e=>{let s=c.value.find(u=>u.value===e);return s||(s=a.items.find(u=>u.value===e)),{text:s==null?void 0:s.text,value:e,cssClass:s==null?void 0:s.cssClass}})},Y=()=>{document.addEventListener("keydown",D)},D=e=>{e.key==="Escape"&&N()},Z=()=>{document.addEventListener("click",P)},P=e=>{[b.value,x.value].some(l=>e.composedPath().includes(l))||N()},ee=e=>{const s=t.value.findIndex(u=>u===e.value);s!==-1?t.value.splice(s,1):t.value.push(e.value),v("change",e.value),_(()=>{B()})},se=(e,s)=>{s.style.width=`${e.offsetWidth}px`},le=()=>{_(()=>{me(b.value,x.value),se(b.value,x.value)})},L=()=>{pe(b.value,x.value)},ae=e=>{v("change:input",e)},N=()=>{var e;d.value=!1,(e=M.value)==null||e.blur(),$.value=""},te=e=>{const s=t.value.findIndex(u=>u===e.value);s!==-1&&(t.value.splice(s,1),v("change",e.value),_(()=>{B()}))};return(()=>{a.items.length>0&&S()})(),ue(()=>{Y(),Z()}),ne(()=>{document.removeEventListener("keydown",D),document.removeEventListener("click",P),U(),L()}),w({validate:B,selectMenu:d}),(e,s)=>{var u;return n(),r("div",null,[o("div",{ref_key:"selectEl",ref:b},[F(he,{id:h.value,label:X.value,required:e.required},null,8,["id","label","required"]),a.allowInput?(n(),r("div",{key:0,class:i([{"ds-border-focus ds-ring-1 ds-ring-focus":d.value&&C(m).valid,"ds-ring-1 ds-ring-error":d.value&&!C(m).valid,"ds-border-black/10":C(m).valid,"ds-border-error":!C(m).valid},"ds-relative ds-flex ds-flex-wrap ds-items-center ds-gap-x-1 ds-rounded-lg ds-border ds-bg-white ds-px-3 ds-py-1 ds-drop-shadow-light"])},[o("div",ye,[o("i",{class:i(`fa-solid fa-caret-down ds-transition-transform ${d.value?"ds-rotate-180":""}`),onClick:s[0]||(s[0]=l=>{var p;return(p=M.value)==null?void 0:p.focus()})},null,2)]),(n(!0),r(O,null,j(c.value,(l,p)=>(n(),r("div",{key:`item${p}`,class:"ds-my-0.5 ds-flex-initial ds-space-x-1 ds-rounded-lg ds-bg-black/10 ds-px-2"},[o("span",null,y(l.text),1),o("i",{class:"fa-solid fa-circle-xmark ds-cursor-pointer ds-text-black/60 hover:ds-text-black/40",onClick:k=>te(l)},null,8,Ve)]))),128)),a.allowInput?(n(),z(ke,{key:0,id:h.value,ref_key:"inputRef",ref:M,modelValue:$.value,"onUpdate:modelValue":[s[1]||(s[1]=l=>$.value=l),ae],disabled:a.disabled,class:"ds-flex-auto","hide-details":"","input-css-class":"ds-drop-shadow-none ds-border-none !ds-ring-0 ds-px-0 !ds-h-[30px] ds-pl-0",onFocus:s[2]||(s[2]=l=>d.value=!0)},null,8,["id","modelValue","disabled"])):T("",!0)],2)):(n(),r("button",{key:1,id:h.value,class:i(A.value),disabled:e.disabled,type:"button",onClick:s[3]||(s[3]=l=>d.value=!d.value)},[c.value.length>0?(n(),r("span",{key:0,class:i([e.valueCssClass,"ds-truncate ds-text-sm"])},y((u=c.value)==null?void 0:u.map(l=>l.text).join(", ")),3)):(n(),r("span",{key:1,class:i([e.valueCssClass,"ds-truncate ds-text-sm ds-text-black/[0.4]"])},y(a.placeholder),3)),oe("   "),o("span",{class:i([`${d.value?"ds-rotate-180":""}`,"fa-solid fa-caret-down ds-text-base ds-transition-transform"])},null,2)],10,Ie)),re(o("div",{id:`${h.value}Menu`,ref_key:"selectMenuEl",ref:x,class:i([e.menuCssClass,"ds-absolute ds-z-50 ds-min-w-[8rem] ds-py-1"]),"data-cy":e.$attrs["data-cy"]?`${e.$attrs["data-cy"]}Menu`:void 0,"data-ut":e.$attrs["data-ut"]?`${e.$attrs["data-ut"]}Menu`:void 0},[o("div",Me,[o("ul",$e,[(n(!0),r(O,null,j(e.items,(l,p)=>(n(),r("li",{key:`item${p}`,class:"ds-cursor-pointer",onClick:ce(k=>ee(l),["prevent"])},[o("a",{class:i([l.cssClass+`${c.value.some(k=>k.value===l.value)?" ds-bg-slate-100":""}`,"ds-flex ds-items-center ds-space-x-2 ds-px-4 ds-py-2 hover:ds-bg-slate-100"])},[F(be,{modelValue:t.value,"onUpdate:modelValue":s[4]||(s[4]=k=>t.value=k),value:l.value,size:"sm"},null,8,["modelValue","value"]),o("span",null,y(l==null?void 0:l.text),1)],2)],8,Be))),128))])])],10,we),[[ie,d.value]])],512),e.hideDetails?T("",!0):(n(),z(xe,{key:0,"error-message":C(m).errorMessage(),class:"ds-mt-1","prepend-icon":"fa-solid fa-circle-exclamation"},null,8,["error-message"]))])}}});q.__docgenInfo={exportName:"default",displayName:"BMultiSelect",description:"",tags:{},expose:[{name:"validate"},{name:"selectMenu"}],props:[{name:"inputId",defaultValue:{func:!1,value:"''"}},{name:"label",defaultValue:{func:!1,value:"''"}},{name:"disabled",defaultValue:{func:!1,value:"false"}},{name:"placeholder",defaultValue:{func:!1,value:"''"}},{name:"valueCssClass",defaultValue:{func:!1,value:"''"}},{name:"menuCssClass",defaultValue:{func:!1,value:"''"}},{name:"validationRules",defaultValue:{func:!1,value:"undefined"}},{name:"required",defaultValue:{func:!1,value:"false"}},{name:"requiredErrorMessage",defaultValue:{func:!1,value:"''"}},{name:"hideDetails",defaultValue:{func:!1,value:"false"}},{name:"showSelectedItemCount",defaultValue:{func:!1,value:"false"}},{name:"allowInput",defaultValue:{func:!1,value:"false"}}],events:[{name:"update:modelValue"},{name:"change"},{name:"open"},{name:"close"},{name:"change:input"}],sourceFiles:["/Users/thinhnguyen/Documents/Projects/7pmlabs/design-system/src/components/BMultiSelect.vue"]};const Te={title:"Components/MultiSelect",component:q,tags:["autodocs"],args:{inputId:"",label:"",disabled:!1,placeholder:"",valueCssClass:"",menuCssClass:"",validationRules:void 0,required:!1,requiredErrorMessage:"",hideDetails:!1,showSelectedItemCount:!1,allowInput:!1}},V={render:I=>({components:{BMultiSelect:q},setup(){const w=f([2,3,6]);return{args:I,selectedValues:w}},template:`
      <BMultiSelect
        v-bind="args"
        v-model="selectedValues"
      />
      <span class="ds-text-xs ds-text-gray-500">Selected values: <b>{{ selectedValues }}</b></span>
    `}),args:{modelValue:[2,5],items:[{text:"Item 01",value:1},{text:"Item 02",value:2},{text:"Item 03",value:3},{text:"Item 04",value:4},{text:"Item 05",value:5},{text:"Item 06",value:6}]}};var W,G,H;V.parameters={...V.parameters,docs:{...(W=V.parameters)==null?void 0:W.docs,source:{originalSource:`{
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
}`,...(H=(G=V.parameters)==null?void 0:G.docs)==null?void 0:H.source}}};const Ue=["Default"];export{V as Default,Ue as __namedExportsOrder,Te as default};
//# sourceMappingURL=BMultiSelect.stories-363d403d.js.map
