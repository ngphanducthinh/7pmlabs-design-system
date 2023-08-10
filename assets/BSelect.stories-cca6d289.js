import{j as Y,b as n,k as h,C as M,E as Z,g as ee,o as u,d as i,l as d,q as te,s as L,n as p,t as _,B as se,w as ae,x as le,F as ue,G as ne,u as oe,m as de,H as N}from"./vue.esm-bundler-c34c64cb.js";import{u as re}from"./Validation-0cf2dd16.js";import{u as F,l as ie,e as ce,r as ve}from"./ComponentHelper-d29c08d8.js";import{u as fe}from"./vue-i18n.esm-bundler-1f56b746.js";import{_ as me}from"./BErrorMessage-91c905cc.js";import{_ as pe}from"./BLabel-e31bd763.js";import{_ as xe}from"./BTextField-1a0a19e8.js";import{v as ge}from"./v4-a960c1f4.js";const be=["id","disabled"],he={key:0},ye={key:1,class:"ds-text-black/[0.4]"},ke=["id","data-cy","data-ut"],Ce={class:"ds-max-h-72 ds-overflow-y-auto ds-rounded-lg ds-bg-white ds-shadow"},Ve={class:"ds-py-1 ds-text-sm ds-text-black/[0.85]"},we=["onClick"],I=Y({__name:"BSelect",props:{inputId:{default:""},modelValue:{},label:{default:""},items:{},disabled:{type:Boolean,default:!1},placeholder:{default:""},valueCssClass:{default:""},menuCssClass:{default:""},validationRules:{default:void 0},required:{type:Boolean,default:!1},requiredErrorMessage:{default:""},hideDetails:{type:Boolean,default:!1},allowInput:{type:Boolean,default:!1}},emits:["update:modelValue","change","open","close","change:input"],setup(k,{expose:C,emit:o}){const t=k,c=n(null),V=n(null),v=n(null),l=n(!1),{t:U}=fe(),z={validateRule:e=>!!e,errorMessage:()=>t.requiredErrorMessage||U("ds.global.field_required")},w=n(""),f=n(),m=h(()=>t.inputId||`id-${ge()}`),r=h({get(){return t.modelValue},set(e){o("update:modelValue",e)}}),W=h(()=>{let e="ds-border ds-drop-shadow-light ds-text-sm ds-h-[40px] ds-px-3 ds-rounded-lg ds-block ds-w-full ds-inline-flex ds-items-center ds-justify-between ";return e+=t.disabled?"ds-cursor-not-allowed ds-bg-[#f2f2f2] ds-text-black/[0.4] ":"ds-bg-white ds-text-black/[0.85] ",e+=q.value.valid?"ds-border-black/10 focus:ds-border-focus focus:ds-ring-1 focus:ds-ring-focus ":"ds-border-error focus:ds-ring-1 focus:ds-ring-error ",e}),G=h(()=>{let e=[];return t.required&&e.push(z),t.validationRules&&(e=e.concat(t.validationRules)),e.length?e:void 0}),{validate:S,validationResult:q}=re(m.value,r,G.value);M(l,e=>{e?(ie(),Q(),o("open")):(F(),P(),o("close"))}),M(r,()=>{B(),x()}),M(()=>t.items,()=>{var e;r.value&&!((e=f.value)!=null&&e.value)&&(B(),x())},{deep:!0});const B=()=>{f.value=t.items.find(e=>e.value===r.value)},x=()=>{var e;t.allowInput&&(w.value=((e=f.value)==null?void 0:e.text)||"")},H=()=>{document.addEventListener("keydown",R)},R=e=>{e.key==="Escape"&&E()},A=()=>{document.addEventListener("click",D)},D=e=>{[c.value,v.value].some(g=>e.composedPath().includes(g))||E()},J=e=>{r.value=e.value,E(),o("change",e.value),N(()=>{S()})},K=(e,s)=>{s.style.width=`${e.offsetWidth}px`},Q=()=>{N(()=>{ce(c.value,v.value),K(c.value,v.value)})},P=()=>{ve(c.value,v.value)},X=e=>{o("change:input",e)},E=()=>{var e;l.value=!1,(e=V.value)==null||e.blur(),x()};return(()=>{B(),x()})(),Z(()=>{H(),A()}),ee(()=>{document.removeEventListener("keydown",R),document.removeEventListener("click",D),F(),P()}),C({validate:S,selectMenu:l}),(e,s)=>{var $,g;return u(),i("div",null,[d("div",{ref_key:"selectEl",ref:c},[te(pe,{id:m.value,label:e.label,required:e.required},null,8,["id","label","required"]),t.allowInput?(u(),L(xe,{key:0,id:m.value,ref_key:"inputRef",ref:V,modelValue:w.value,"onUpdate:modelValue":[s[0]||(s[0]=a=>w.value=a),X],"append-icon":`fa-solid fa-caret-down ds-transition-transform ${l.value?"ds-rotate-180":""}`,disabled:t.disabled,placeholder:t.placeholder,"hide-details":"",onFocus:s[1]||(s[1]=a=>l.value=!0),"onClick:append":s[2]||(s[2]=a=>{var b;return(b=V.value)==null?void 0:b.focus()})},null,8,["id","modelValue","append-icon","disabled","placeholder"])):(u(),i("button",{key:1,id:m.value,class:p(W.value),disabled:t.disabled,type:"button",onClick:s[3]||(s[3]=a=>l.value=!l.value)},[d("span",{class:p([e.valueCssClass,"ds-truncate"])},[($=f.value)!=null&&$.text?(u(),i("span",he,_((g=f.value)==null?void 0:g.text),1)):(u(),i("span",ye,_(t.placeholder),1))],2),se("   "),d("span",{class:p([`${l.value?"ds-rotate-180":""}`,"fa-solid fa-caret-down ds-text-base ds-transition-transform"])},null,2)],10,be)),ae(d("div",{id:`${m.value}Menu`,ref_key:"selectMenuEl",ref:v,class:p([e.menuCssClass,"ds-absolute ds-z-50 ds-min-w-[8rem] ds-py-1"]),"data-cy":e.$attrs["data-cy"]?`${e.$attrs["data-cy"]}Menu`:void 0,"data-ut":e.$attrs["data-ut"]?`${e.$attrs["data-ut"]}Menu`:void 0},[d("div",Ce,[d("ul",Ve,[(u(!0),i(ue,null,ne(e.items,(a,b)=>(u(),i("li",{key:`item${b}`,class:"ds-cursor-pointer",onClick:Ee=>J(a)},[d("a",{class:p([a.cssClass+`${a.value===r.value?" ds-bg-gray-150":""}`,"ds-block ds-px-4 ds-py-2 hover:ds-bg-gray-150"])},_(a==null?void 0:a.text),3)],8,we))),128))])])],10,ke),[[le,l.value]])],512),e.hideDetails?de("",!0):(u(),L(me,{key:0,"error-message":oe(q).errorMessage(),class:"ds-mt-1","prepend-icon":"fa-solid fa-circle-exclamation"},null,8,["error-message"]))])}}});I.__docgenInfo={exportName:"default",displayName:"BSelect",description:"",tags:{},expose:[{name:"validate"},{name:"selectMenu"}],props:[{name:"inputId",defaultValue:{func:!1,value:"''"}},{name:"label",defaultValue:{func:!1,value:"''"}},{name:"disabled",defaultValue:{func:!1,value:"false"}},{name:"placeholder",defaultValue:{func:!1,value:"''"}},{name:"valueCssClass",defaultValue:{func:!1,value:"''"}},{name:"menuCssClass",defaultValue:{func:!1,value:"''"}},{name:"validationRules",defaultValue:{func:!1,value:"undefined"}},{name:"required",defaultValue:{func:!1,value:"false"}},{name:"requiredErrorMessage",defaultValue:{func:!1,value:"''"}},{name:"hideDetails",defaultValue:{func:!1,value:"false"}},{name:"allowInput",defaultValue:{func:!1,value:"false"}}],events:[{name:"update:modelValue"},{name:"change"},{name:"open"},{name:"close"},{name:"change:input"}],sourceFiles:["/Users/thinhnguyen/Downloads/Projects/7PMLabs/7pmlabs-design-system/src/components/BSelect.vue"]};const Pe={title:"Components/Select",component:I,tags:["autodocs"],args:{inputId:"",label:"",disabled:!1,placeholder:"",valueCssClass:"",menuCssClass:"",validationRules:void 0,required:!1,requiredErrorMessage:"",hideDetails:!1,allowInput:!1}},y={render:k=>({components:{BSelect:I},setup(){const C=n(3),o=n([{text:"text 01",value:1},{text:"text 02",value:2},{text:"text 03",value:3},{text:"text 04",value:4},{text:"text 05",value:5},{text:"text 06",value:6}]);return{args:k,items:o,selectedValue:C}},template:`
      <BSelect v-bind="args" v-model="selectedValue" :items="items" />
    `}),args:{modelValue:3,items:[{text:"text 01",value:1},{text:"text 02",value:2},{text:"text 03",value:3},{text:"text 04",value:4},{text:"text 05",value:5},{text:"text 06",value:6}]}};var O,T,j;y.parameters={...y.parameters,docs:{...(O=y.parameters)==null?void 0:O.docs,source:{originalSource:`{
  render: (args: any) => ({
    components: {
      BSelect
    },
    setup() {
      const selectedValue = ref(3);
      const items = ref([{
        text: 'text 01',
        value: 1
      }, {
        text: 'text 02',
        value: 2
      }, {
        text: 'text 03',
        value: 3
      }, {
        text: 'text 04',
        value: 4
      }, {
        text: 'text 05',
        value: 5
      }, {
        text: 'text 06',
        value: 6
      }]);
      return {
        args,
        items,
        selectedValue
      };
    },
    template: \`
      <BSelect v-bind="args" v-model="selectedValue" :items="items" />
    \`
  }),
  args: {
    modelValue: 3,
    items: [{
      text: 'text 01',
      value: 1
    }, {
      text: 'text 02',
      value: 2
    }, {
      text: 'text 03',
      value: 3
    }, {
      text: 'text 04',
      value: 4
    }, {
      text: 'text 05',
      value: 5
    }, {
      text: 'text 06',
      value: 6
    }]
  }
}`,...(j=(T=y.parameters)==null?void 0:T.docs)==null?void 0:j.source}}};const Le=["Default"];export{y as Default,Le as __namedExportsOrder,Pe as default};
//# sourceMappingURL=BSelect.stories-cca6d289.js.map
