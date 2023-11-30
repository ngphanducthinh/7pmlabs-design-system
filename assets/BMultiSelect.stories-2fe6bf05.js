import{j as ne,b as m,k as g,C as S,E as de,g as ue,o as u,d as r,l as o,q as A,n as i,u as k,F,G as O,s as z,m as T,t as C,x as oe,w as re,y as ie,H as E,J as ce}from"./vue.esm-bundler-f0a4de28.js";import{u as me}from"./Validation-4b68e7d0.js";import{u as j,l as fe,e as ve,r as pe}from"./ComponentHelper-d29c08d8.js";import{u as ge}from"./vue-i18n.esm-bundler-45575b10.js";import{B as be}from"./BCheckbox-14ee273c.js";import{_ as ye}from"./BErrorMessage-4230966b.js";import{_ as he}from"./BLabel-0c4df10b.js";import{_ as xe}from"./BTextField-d989bbc2.js";import{v as ke}from"./v4-a960c1f4.js";import"./Common-43134899.js";import"./Enums-693cd203.js";import"./_plugin-vue_export-helper-c27b6911.js";const Ce={class:"ds-absolute ds-right-3 ds-z-[1]"},Ve=["onClick"],we=["id","disabled"],Ie=["id","data-cy","data-ut"],qe={class:"ds-max-h-72 ds-overflow-y-auto ds-rounded-lg ds-bg-white ds-shadow"},Me={class:"ds-py-1 ds-text-sm ds-text-black/[0.85]"},$e=["onClick"],_=ne({__name:"BMultiSelect",props:{inputId:{default:""},modelValue:{},label:{default:""},items:{},disabled:{type:Boolean,default:!1},placeholder:{default:""},valueCssClass:{default:""},menuCssClass:{default:""},validationRules:{default:void 0},required:{type:Boolean,default:!1},requiredErrorMessage:{default:""},hideDetails:{type:Boolean,default:!1},showSelectedItemCount:{type:Boolean,default:!1},allowInput:{type:Boolean,default:!1}},emits:["update:modelValue","change","open","close","change:input"],setup(w,{expose:I,emit:f}){const l=w,b=m(null),q=m(null),y=m(null),n=m(!1),{t:R}=ge(),G={validateRule:e=>!!e&&e.length>0,errorMessage:()=>l.requiredErrorMessage||R("ds.global.field_required")},M=m(""),c=m([]),h=g(()=>l.inputId||`id-${ke()}`),t=g({get(){return l.modelValue},set(e){f("update:modelValue",e)}}),J=g(()=>{let e="ds-border ds-drop-shadow-light ds-text-sm ds-h-[40px] ds-px-3 ds-rounded-lg ds-block ds-w-full ds-inline-flex ds-items-center ds-justify-between ";return e+=l.disabled?"ds-cursor-not-allowed ds-bg-[#f2f2f2] ds-text-black/[0.4] ":"ds-bg-white ds-text-black/[0.85] ",e+=v.value.valid?"ds-border-black/10 focus:ds-border-focus focus:ds-ring-1 focus:ds-ring-focus ":"ds-border-error focus:ds-ring-1 focus:ds-ring-error ",e}),K=g(()=>{let e=[];return l.required&&e.push(G),l.validationRules&&(e=e.concat(l.validationRules)),e.length?e:void 0}),Q=g(()=>{var e,s;return((e=t.value)==null?void 0:e.length)>1?` (${R("ds.components.base.multi_select.selected_item_count",{count:(s=t.value)==null?void 0:s.length})})`:""}),X=g(()=>l.showSelectedItemCount?`${l.label}${Q.value}`:l.label),{validate:$,validationResult:v}=me(h.value,t,K.value);S(n,e=>{e?(fe(),ae(),f("open")):(j(),P(),f("close"))}),S(t,()=>{B()},{deep:!0}),S(()=>l.items,()=>{t.value.length!==0&&c.value.length===0&&B()},{deep:!0});const B=()=>{c.value=t.value.map(e=>{let s=c.value.find(d=>d.value===e);return s||(s=l.items.find(d=>d.value===e)),{text:s==null?void 0:s.text,value:e,cssClass:s==null?void 0:s.cssClass}})},Y=()=>{document.addEventListener("keydown",D)},D=e=>{e.key==="Escape"&&N()},Z=()=>{document.addEventListener("click",L)},L=e=>{[b.value,y.value].some(a=>e.composedPath().includes(a))||N()},ee=e=>{const s=t.value.findIndex(d=>d===e.value);s!==-1?t.value.splice(s,1):t.value.push(e.value),f("change",e.value),E(()=>{$()})},se=(e,s)=>{s.style.width=`${e.offsetWidth}px`},ae=()=>{E(()=>{ve(b.value,y.value),se(b.value,y.value)})},P=()=>{pe(b.value,y.value)},le=e=>{f("change:input",e)},N=()=>{var e;n.value=!1,(e=q.value)==null||e.blur(),M.value=""},te=e=>{const s=t.value.findIndex(d=>d===e.value);s!==-1&&(t.value.splice(s,1),f("change",e.value),E(()=>{$()}))};return(()=>{l.items.length>0&&B()})(),de(()=>{Y(),Z()}),ue(()=>{document.removeEventListener("keydown",D),document.removeEventListener("click",L),j(),P()}),I({validate:$,selectMenu:n}),(e,s)=>{var d;return u(),r("div",null,[o("div",{ref_key:"selectEl",ref:b},[A(he,{id:h.value,label:X.value,required:e.required},null,8,["id","label","required"]),l.allowInput?(u(),r("div",{key:0,class:i([{"ds-border-focus ds-ring-1 ds-ring-focus":n.value&&k(v).valid,"ds-ring-1 ds-ring-error":n.value&&!k(v).valid,"ds-border-black/10":k(v).valid,"ds-border-error":!k(v).valid},"ds-relative ds-flex ds-flex-wrap ds-items-center ds-gap-x-1 ds-rounded-lg ds-border ds-bg-white ds-px-3 ds-py-1 ds-drop-shadow-light"])},[o("div",Ce,[o("i",{class:i(`fa-solid fa-caret-down ds-transition-transform ${n.value?"ds-rotate-180":""}`),onClick:s[0]||(s[0]=a=>{var p;return(p=q.value)==null?void 0:p.focus()})},null,2)]),(u(!0),r(F,null,O(c.value,(a,p)=>(u(),r("div",{key:`item${p}`,class:"ds-my-0.5 ds-flex-initial ds-space-x-1 ds-rounded-lg ds-bg-black/10 ds-px-2"},[o("span",null,C(a.text),1),o("i",{class:"fa-solid fa-circle-xmark ds-cursor-pointer ds-text-black/60 hover:ds-text-black/40",onClick:x=>te(a)},null,8,Ve)]))),128)),l.allowInput?(u(),z(xe,{key:0,id:h.value,ref_key:"inputRef",ref:q,modelValue:M.value,"onUpdate:modelValue":[s[1]||(s[1]=a=>M.value=a),le],disabled:l.disabled,class:"ds-flex-auto","hide-details":"","input-css-class":"ds-drop-shadow-none ds-border-none !ds-ring-0 ds-px-0 !ds-h-[30px] ds-pl-0",onFocus:s[2]||(s[2]=a=>n.value=!0)},null,8,["id","modelValue","disabled"])):T("",!0)],2)):(u(),r("button",{key:1,id:h.value,class:i(J.value),disabled:e.disabled,type:"button",onClick:s[3]||(s[3]=a=>n.value=!n.value)},[c.value.length>0?(u(),r("span",{key:0,class:i([e.valueCssClass,"ds-truncate ds-text-sm"])},C((d=c.value)==null?void 0:d.map(a=>a.text).join(", ")),3)):(u(),r("span",{key:1,class:i([e.valueCssClass,"ds-truncate ds-text-sm ds-text-black/[0.4]"])},C(l.placeholder),3)),oe("   "),o("span",{class:i([`${n.value?"ds-rotate-180":""}`,"fa-solid fa-caret-down ds-text-base ds-transition-transform"])},null,2)],10,we)),re(o("div",{id:`${h.value}Menu`,ref_key:"selectMenuEl",ref:y,class:i([e.menuCssClass,"ds-absolute ds-z-50 ds-min-w-[8rem] ds-py-1"]),"data-cy":e.$attrs["data-cy"]?`${e.$attrs["data-cy"]}Menu`:void 0,"data-ut":e.$attrs["data-ut"]?`${e.$attrs["data-ut"]}Menu`:void 0},[o("div",qe,[o("ul",Me,[(u(!0),r(F,null,O(e.items,(a,p)=>(u(),r("li",{key:`item${p}`,class:"ds-cursor-pointer",onClick:ce(x=>ee(a),["prevent"])},[o("a",{class:i([a.cssClass+`${c.value.some(x=>x.value===a.value)?" ds-bg-slate-100":""}`,"ds-flex ds-items-center ds-space-x-2 ds-px-4 ds-py-2 hover:ds-bg-slate-100"])},[A(be,{modelValue:t.value,"onUpdate:modelValue":s[4]||(s[4]=x=>t.value=x),value:a.value,size:"sm"},null,8,["modelValue","value"]),o("span",null,C(a==null?void 0:a.text),1)],2)],8,$e))),128))])])],10,Ie),[[ie,n.value]])],512),e.hideDetails?T("",!0):(u(),z(ye,{key:0,"error-message":k(v).errorMessage(),class:"ds-mt-1","prepend-icon":"fa-solid fa-circle-exclamation"},null,8,["error-message"]))])}}});_.__docgenInfo={exportName:"default",displayName:"BMultiSelect",description:"",tags:{},expose:[{name:"validate"},{name:"selectMenu"}],props:[{name:"inputId",required:!1,type:{name:"string"},defaultValue:{func:!1,value:"''"}},{name:"modelValue",required:!0,type:{name:"Array",elements:[{name:"union",elements:[{name:"string"},{name:"number"}]}]}},{name:"label",required:!1,type:{name:"string"},defaultValue:{func:!1,value:"''"}},{name:"items",required:!0,type:{name:"Array",elements:[{name:"DisplayItem"}]}},{name:"disabled",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"placeholder",required:!1,type:{name:"string"},defaultValue:{func:!1,value:"''"}},{name:"valueCssClass",required:!1,type:{name:"string"},defaultValue:{func:!1,value:"''"}},{name:"menuCssClass",required:!1,type:{name:"string"},defaultValue:{func:!1,value:"''"}},{name:"validationRules",description:"Array of custom validation rules.",required:!1,type:{name:"Array",elements:[{name:"ValidationRule"}]},defaultValue:{func:!1,value:"undefined"}},{name:"required",description:"Validate if the field is left empty.",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"requiredErrorMessage",required:!1,type:{name:"string"},defaultValue:{func:!1,value:"''"}},{name:"hideDetails",description:"Hide the validation error message.",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"showSelectedItemCount",description:"Show number of selected items.",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"allowInput",description:"Allow to type to search.",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"false"}}],events:[{name:"update:modelValue"},{name:"change"},{name:"open"},{name:"close"},{name:"change:input"}],sourceFiles:["/home/runner/work/design-system/design-system/src/components/BMultiSelect.vue"]};const Te={title:"Components/MultiSelect",component:_,tags:["autodocs"],args:{inputId:"",label:"",disabled:!1,placeholder:"",valueCssClass:"",menuCssClass:"",validationRules:void 0,required:!1,requiredErrorMessage:"",hideDetails:!1,showSelectedItemCount:!1,allowInput:!1}},V={render:w=>({components:{BMultiSelect:_},setup(){const I=m([2,3,6]);return{args:w,selectedValues:I}},template:`
      <BMultiSelect
        v-bind="args"
        v-model="selectedValues"
      />
      <span class="ds-text-xs ds-text-gray-500">Selected values: <b>{{ selectedValues }}</b></span>
    `}),args:{modelValue:[2,5],items:[{text:"Item 01",value:1},{text:"Item 02",value:2},{text:"Item 03",value:3},{text:"Item 04",value:4},{text:"Item 05",value:5},{text:"Item 06",value:6}]}};var U,H,W;V.parameters={...V.parameters,docs:{...(U=V.parameters)==null?void 0:U.docs,source:{originalSource:`{
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
}`,...(W=(H=V.parameters)==null?void 0:H.docs)==null?void 0:W.source}}};const je=["Default"];export{V as Default,je as __namedExportsOrder,Te as default};
//# sourceMappingURL=BMultiSelect.stories-2fe6bf05.js.map
