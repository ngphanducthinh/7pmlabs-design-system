import{j as ee,e as y,k as n,C as R,E as se,g as ae,b as M,s as te,l as u,n as x,t as oe,m as $,z as de,u as ne,o as f,F as z}from"./vue.esm-bundler-4cd6df52.js";import{I as i}from"./imask-7.1.3-80c1e5b4.js";import{A as re,c as le,m as c}from"./DateHelper-87bc46a3.js";import{u as ie}from"./vue-i18n.esm-bundler-fc12af0c.js";import{u as ce}from"./Validation-31c7d14d.js";import{D as I}from"./Common-43134899.js";import{c as N}from"./Enums-25996506.js";import{u as T,l as ue}from"./ComponentHelper-d29c08d8.js";import{_ as me}from"./BErrorMessage-c4627125.js";import{_ as pe}from"./BLabel-9f341f76.js";import{v as fe}from"./v4-a960c1f4.js";import"./_commonjsHelpers-725317a4.js";import"./_commonjs-dynamic-modules-302442b1.js";const be={class:"ds-relative"},ye=["id","disabled","placeholder"],ke=["id","disabled"],he=["for"],ve=["for"],_e=u("path",{d:"M96 32V64H48C21.5 64 0 85.5 0 112v48H448V112c0-26.5-21.5-48-48-48H352V32c0-17.7-14.3-32-32-32s-32 14.3-32 32V64H160V32c0-17.7-14.3-32-32-32S96 14.3 96 32zM448 192H0V464c0 26.5 21.5 48 48 48H400c26.5 0 48-21.5 48-48V192zM96 296c0-13.3 10.7-24 24-24H328c13.3 0 24 10.7 24 24s-10.7 24-24 24H120c-13.3 0-24-10.7-24-24zm24 72H232c13.3 0 24 10.7 24 24s-10.7 24-24 24H120c-13.3 0-24-10.7-24-24s10.7-24 24-24z"},null,-1),ge=[_e],q=ee({__name:"BDatePicker",props:{inputId:{default:""},modelValue:{},label:{default:""},validationRules:{default:void 0},placeholder:{default:""},required:{type:Boolean,default:!1},requiredErrorMessage:{default:""},disabled:{type:Boolean,default:!1},inputCssClass:{default:""},minDate:{default:""},maxDate:{default:""},showHintToday:{type:Boolean,default:!1},view:{default:N.Days},hideDetails:{type:Boolean,default:!1},position:{default:"bottom left"}},emits:["update:modelValue"],setup(k,{emit:r}){const a=k,{t:s,locale:A}=ie(),m=`DD${I}MM${I}YYYY`,h=new Date;let o,l;const B=y(null),O={validateRule:e=>!!e,errorMessage:()=>a.requiredErrorMessage||s("ds.global.field_required")},v=y(),d=n(()=>a.inputId||`id-${fe()}`),P=n({get(){return a.modelValue},set(e){r("update:modelValue",e)}}),E=n(()=>[{content:s("ds.components.base.date_picker.buttons.cancel"),className:"ds-bg-transparent focus:ds-ring-1 focus:ds-ring-gray-300 ds-border-inner-primary-f !ds-text-primary-t hover:ds-bg-[#e6f0fe] ds-text-sm ds-leading-4 ds-px-4 ds-mx-1",onClick:e=>{e.clear(),z(()=>{g()}),e.hide()}},{content:s("ds.components.base.date_picker.buttons.confirm"),className:`${d.value}-btn-confirm focus:ds-ring-1 focus:ds-ring-1 focus:ds-ring-blue-300 ds-bg-gradient-to-r ds-from-primary-f-stop ds-from-primary-f ds-to-primary-t !ds-text-white enabled:hover:ds-bg-[#0e4bbd] ds-text-sm ds-leading-4 ds-px-4 disabled:ds-from-[#e2e4e8] disabled:ds-to-[#e2e4e8] disabled:ds-text-black/[0.4] ds-mx-1`,onClick:e=>{P.value=v.value!==void 0?v.value:"",z(()=>{g()}),e.hide()},attrs:a.required?{disabled:""}:void 0}]),H=n(()=>{const e={days:[s("ds.components.base.date_picker.days.sunday"),s("ds.components.base.date_picker.days.monday"),s("ds.components.base.date_picker.days.tuesday"),s("ds.components.base.date_picker.days.wednesday"),s("ds.components.base.date_picker.days.thursday"),s("ds.components.base.date_picker.days.friday"),s("ds.components.base.date_picker.days.saturday")],daysShort:[s("ds.components.base.date_picker.days_short.sunday"),s("ds.components.base.date_picker.days_short.monday"),s("ds.components.base.date_picker.days_short.tuesday"),s("ds.components.base.date_picker.days_short.wednesday"),s("ds.components.base.date_picker.days_short.thursday"),s("ds.components.base.date_picker.days_short.friday"),s("ds.components.base.date_picker.days_short.saturday")],daysMin:[s("ds.components.base.date_picker.days_min.sunday"),s("ds.components.base.date_picker.days_min.monday"),s("ds.components.base.date_picker.days_min.tuesday"),s("ds.components.base.date_picker.days_min.wednesday"),s("ds.components.base.date_picker.days_min.thursday"),s("ds.components.base.date_picker.days_min.friday"),s("ds.components.base.date_picker.days_min.saturday")],months:[s("ds.components.base.date_picker.months.january"),s("ds.components.base.date_picker.months.february"),s("ds.components.base.date_picker.months.march"),s("ds.components.base.date_picker.months.april"),s("ds.components.base.date_picker.months.may"),s("ds.components.base.date_picker.months.june"),s("ds.components.base.date_picker.months.july"),s("ds.components.base.date_picker.months.august"),s("ds.components.base.date_picker.months.september"),s("ds.components.base.date_picker.months.october"),s("ds.components.base.date_picker.months.november"),s("ds.components.base.date_picker.months.december")],monthsShort:[s("ds.components.base.date_picker.months_short.january"),s("ds.components.base.date_picker.months_short.february"),s("ds.components.base.date_picker.months_short.march"),s("ds.components.base.date_picker.months_short.april"),s("ds.components.base.date_picker.months_short.may"),s("ds.components.base.date_picker.months_short.june"),s("ds.components.base.date_picker.months_short.july"),s("ds.components.base.date_picker.months_short.august"),s("ds.components.base.date_picker.months_short.september"),s("ds.components.base.date_picker.months_short.october"),s("ds.components.base.date_picker.months_short.november"),s("ds.components.base.date_picker.months_short.december")],today:s("ds.components.base.date_picker.buttons.today"),clear:s("ds.components.base.date_picker.buttons.clear"),dateFormat:"dd/MM/yyyy",timeFormat:"HH:mm",firstDay:1},t=({date:p})=>{v.value=p,a.required&&Z(!!p)};return{locale:e,selectedDates:[a.modelValue],onSelect:t,buttons:[...E.value],showOtherMonths:!1,timepicker:!1,onlyTimepicker:!1,minDate:a.minDate,maxDate:a.maxDate,view:a.view,onHide:J,onShow:K,navTitles:{days:"MMMM yyyy"},position:a.position,prevHtml:`<svg xmlns="http://www.w3.org/2000/svg"
                   viewBox="0 0 320 512">
                  <path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l192 192c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256 246.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192z"/>
              </svg>`,nextHtml:`<svg xmlns="http://www.w3.org/2000/svg"
                   viewBox="0 0 320 512">
                  <path d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z"/>
              </svg>`}}),L=n(()=>{let e=[];return a.required&&e.push(O),a.validationRules&&(e=e.concat(a.validationRules)),e.length?e:void 0}),C=n(()=>["ds-border ds-rounded-lg ds-block ds-w-full ds-text-sm ds-px-3 ds-h-[40px]",{"ds-cursor-not-allowed ds-bg-[#f2f2f2] ds-text-black/[0.4]":a.disabled,"ds-text-black/[0.85]":!a.disabled,"ds-border-error focus:ds-ring-1 focus:ds-ring-error":!D.value.valid,"ds-border-black/[0.1] focus:ds-border-focus focus:ds-ring-1 focus:ds-ring-focus":D.value.valid,"!ds-border-focus ds-ring-1 ds-ring-focus":_.value},a.inputCssClass]),U=n(()=>a.modelValue?h.getDate()===a.modelValue.getDate()&&h.getMonth()===a.modelValue.getMonth()&&h.getFullYear()===a.modelValue.getFullYear():!1),G=n(()=>{const e={mask:i.MaskedDate,pattern:m,lazy:!0,format:t=>c(t).format(m),parse:t=>c(t,m),blocks:{YYYY:{mask:i.MaskedRange,from:1,to:9999},MM:{mask:i.MaskedRange,from:1,to:12},DD:{mask:i.MaskedRange,from:1,to:31}}};return a.minDate&&(e.min=a.minDate),a.maxDate&&(e.max=a.maxDate),e}),_=y(!1),{validate:g,validationResult:D}=ce(d.value,P,L.value);R(()=>a.modelValue,()=>{V(o.selectedDates[0])&&(a.modelValue?(o.selectDate(a.modelValue),o.setViewDate(a.modelValue)):o.clear()),V(w())&&(l.value=S(a.modelValue))},{deep:!0}),R([A,()=>a.position,()=>a.minDate,()=>a.maxDate,()=>a.view],()=>{o.update(H.value)});const S=e=>le(e)?c(e).format(m):e,J=()=>{_.value=!1,T()},K=()=>{_.value=!0,a.modelValue?(o.selectDate(a.modelValue),o.setViewDate(a.modelValue)):o.clear(),ue()},Q=()=>{l.unmaskedValue||r("update:modelValue","")},W=()=>{const e=w();return e?r("update:modelValue",e):r("update:modelValue","")},X=()=>{const e=w();g(),V(e)&&r("update:modelValue",e===void 0?"":e)},V=e=>[!a.modelValue&&e,!e&&a.modelValue,a.modelValue&&e&&a.modelValue.getTime()!==e.getTime()].some(p=>p),w=()=>{const e=l.value.split("/"),t=`${e[2]}-${e[1]}-${e[0]}`;if(c(t,c.ISO_8601,!0).isValid())return new Date(t)},Z=e=>{const t=document.querySelector(`.${d.value}-btn-confirm`);e?t==null||t.removeAttribute("disabled"):t==null||t.setAttribute("disabled","")};return se(()=>{o=new re(`#${d.value}Picker`,H.value),l=i(B.value,G.value),l.value=S(a.modelValue),l.on("accept",Q),l.on("complete",W)}),ae(()=>{T()}),(e,t)=>(f(),M("div",null,[te(pe,{id:d.value,label:e.label,required:e.required},null,8,["id","label","required"]),u("div",be,[u("input",{id:d.value,ref_key:"inputMaskRef",ref:B,class:x([C.value,"ds-relative ds-z-[2] ds-drop-shadow-light"]),disabled:e.disabled,placeholder:e.placeholder,onBlur:X},null,42,ye),u("input",{id:`${d.value}Picker`,class:x([C.value,"ds-absolute ds-top-0 ds-z-[1]"]),disabled:e.disabled,readonly:""},null,10,ke),e.showHintToday&&U.value?(f(),M("label",{key:0,for:d.value,class:"ds-absolute ds-left-[98px] ds-top-2.5 ds-z-[3] ds-text-sm"},oe(`(${e.$t("ds.components.base.date_picker.today")})`),9,he)):$("",!0),u("label",{for:`${d.value}Picker`,class:"ds-absolute ds-right-3 ds-top-3 ds-z-[3]"},[(f(),M("svg",{class:x([[a.disabled?"ds-fill-black/40":"ds-text-black/[0.85]"],"ds-h-4 ds-w-4"]),viewBox:"0 0 448 512",xmlns:"http://www.w3.org/2000/svg"},ge,2))],8,ve)]),e.hideDetails?$("",!0):(f(),de(me,{key:0,"error-message":ne(D).errorMessage(),class:"ds-mt-1"},null,8,["error-message"]))]))}});q.__docgenInfo={exportName:"default",displayName:"BDatePicker",description:"",tags:{},props:[{name:"inputId",required:!1,type:{name:"string"},defaultValue:{func:!1,value:"''"}},{name:"modelValue",required:!0,type:{name:"any"}},{name:"label",required:!1,type:{name:"string"},defaultValue:{func:!1,value:"''"}},{name:"validationRules",description:"Array of custom validation rules.",required:!1,type:{name:"Array",elements:[{name:"ValidationRule"}]},defaultValue:{func:!1,value:"undefined"}},{name:"placeholder",required:!1,type:{name:"string"},defaultValue:{func:!1,value:"''"}},{name:"required",description:"Validate if the field is left empty.",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"requiredErrorMessage",required:!1,type:{name:"string"},defaultValue:{func:!1,value:"''"}},{name:"disabled",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"inputCssClass",required:!1,type:{name:"string"},defaultValue:{func:!1,value:"''"}},{name:"minDate",description:"Minimum selectable date",required:!1,type:{name:"any"},defaultValue:{func:!1,value:"''"}},{name:"maxDate",description:"Maximum selectable date",required:!1,type:{name:"any"},defaultValue:{func:!1,value:"''"}},{name:"showHintToday",description:'Show "Today" text if selected date is the current date',required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"view",description:"Default view mode when open picker dropdown",required:!1,type:{name:"BDatePickerView"},defaultValue:{func:!1,value:"BDatePickerView.Days"}},{name:"hideDetails",description:"Hide the validation error message.",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"position",description:"Position of picker dropdown when it's showed up",required:!1,type:{name:"string"},defaultValue:{func:!1,value:"'bottom left'"}}],sourceFiles:["/home/runner/work/design-system/design-system/src/components/BDatePicker.vue"]};const ze={title:"Components/DatePicker",component:q,tags:["autodocs"],argTypes:{view:{control:"select",options:Object.values(N)}},args:{inputId:"",label:"",validationRules:void 0,placeholder:"",required:!1,requiredErrorMessage:"",disabled:!1,inputCssClass:"",minDate:"",maxDate:"",showHintToday:!1,view:"days",hideDetails:!1,position:"bottom left"}},b={render:k=>({components:{BDatePicker:q},setup(){const r=y(new Date);return{args:k,date:r}},template:`
      <BDatePicker v-bind="args" v-model="date" />
    `}),args:{}};var Y,F,j;b.parameters={...b.parameters,docs:{...(Y=b.parameters)==null?void 0:Y.docs,source:{originalSource:`{
  render: (args: any) => ({
    components: {
      BDatePicker
    },
    setup() {
      const date = ref(new Date());
      return {
        args,
        date
      };
    },
    template: \`
      <BDatePicker v-bind="args" v-model="date" />
    \`
  }),
  args: {}
}`,...(j=(F=b.parameters)==null?void 0:F.docs)==null?void 0:j.source}}};const Ie=["Default"];export{b as Default,Ie as __namedExportsOrder,ze as default};
