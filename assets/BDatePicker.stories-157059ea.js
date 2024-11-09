import{f as x,e as J,o as h,c as k,h as $,F as z,x as Z,u as Y,t as j,n as A,r as Et,R as Tt,S as Ft,a as w,U as qt,s as st,M as Ot,w as O,d as jt,k as L,D as At,l as Ht,y as Ut,q as Ve,m as se,g as ce,j as Se,z as Ke}from"./vue.esm-bundler-ceeda665.js";import{_ as Qe}from"./BButton-e2b689c0.js";import{_ as Gt}from"./BLabel-93eef36b.js";import{u as Lt}from"./Validation-e4311cdc.js";import{_ as zt}from"./BErrorMessage-4dbabbe9.js";import{u as nt}from"./vue-i18n-5bf62172.js";import{u as Ze,r as Je,l as Wt,e as Kt}from"./ComponentHelper-8c2ae0a5.js";import{I as ne}from"./imask-7.1.3-dc9fb158.js";import{D as re}from"./Common-74b424b5.js";import{_ as pe}from"./_plugin-vue_export-helper-c27b6911.js";import{i as F}from"./Enums-b5cac340.js";import{v as Qt}from"./v4-eb618527.js";import{i as Q}from"./isEmpty-125c046a.js";import"./_getTag-a6d04ccb.js";function P(a){return a==null}const Xe=a=>/^(\d{4}|[+-]\d{6})-(\d{2})-(\d{2})(T(\d{2}):(\d{2}):(\d{2})(\.\d{1,3})?(Z|([+-])(\d{2}):(\d{2}))?)?$/.test(a),U=(a,r)=>{let t=a.toString();for(;t.length<r;)t="0"+t;return t};function fe(){const{t:a,locale:r}=nt(),t=x(()=>({"en-US":`MM${re}DD${re}YYYY`,"vi-VN":`DD${re}MM${re}YYYY`})[r.value]),D=x(()=>({0:a("ds.components.base.date_picker.days.sunday"),1:a("ds.components.base.date_picker.days.monday"),2:a("ds.components.base.date_picker.days.tuesday"),3:a("ds.components.base.date_picker.days.wednesday"),4:a("ds.components.base.date_picker.days.thursday"),5:a("ds.components.base.date_picker.days.friday"),6:a("ds.components.base.date_picker.days.saturday")})),l=x(()=>({0:a("ds.components.base.date_picker.months.january"),1:a("ds.components.base.date_picker.months.february"),2:a("ds.components.base.date_picker.months.march"),3:a("ds.components.base.date_picker.months.april"),4:a("ds.components.base.date_picker.months.may"),5:a("ds.components.base.date_picker.months.june"),6:a("ds.components.base.date_picker.months.july"),7:a("ds.components.base.date_picker.months.august"),8:a("ds.components.base.date_picker.months.september"),9:a("ds.components.base.date_picker.months.october"),10:a("ds.components.base.date_picker.months.november"),11:a("ds.components.base.date_picker.months.december")})),c=x(()=>({0:a("ds.components.base.date_picker.months_short.january"),1:a("ds.components.base.date_picker.months_short.february"),2:a("ds.components.base.date_picker.months_short.march"),3:a("ds.components.base.date_picker.months_short.april"),4:a("ds.components.base.date_picker.months_short.may"),5:a("ds.components.base.date_picker.months_short.june"),6:a("ds.components.base.date_picker.months_short.july"),7:a("ds.components.base.date_picker.months_short.august"),8:a("ds.components.base.date_picker.months_short.september"),9:a("ds.components.base.date_picker.months_short.october"),10:a("ds.components.base.date_picker.months_short.november"),11:a("ds.components.base.date_picker.months_short.december")})),y=x(()=>({0:a("ds.components.base.date_picker.days_short.sunday"),1:a("ds.components.base.date_picker.days_short.monday"),2:a("ds.components.base.date_picker.days_short.tuesday"),3:a("ds.components.base.date_picker.days_short.wednesday"),4:a("ds.components.base.date_picker.days_short.thursday"),5:a("ds.components.base.date_picker.days_short.friday"),6:a("ds.components.base.date_picker.days_short.saturday")})),f=m=>{const i=m.split(re);return{"en-US":new Date(+i[2],+i[0]-1,+i[1]),"vi-VN":new Date(+i[2],+i[1]-1,+i[0])}[r.value]},v=m=>{if(!B(m))return m;const i=D.value[m.getDay()],g=l.value[m.getMonth()],V=`${i}, ${g} ${m.getDate()}, ${m.getFullYear()}`,u=`${i}, ${m.getDate()}/${m.getMonth()+1}/${m.getFullYear()}`;return{"en-US":V,"vi-VN":u}[r.value]||V},o=m=>B(m)?{"vi-VN":`${U(m.getDate(),2)}/${U(m.getMonth()+1,2)}/${U(m.getFullYear(),4)}`,"en-US":`${U(m.getMonth()+1,2)}/${U(m.getDate(),2)}/${U(m.getFullYear(),4)}`}[r.value]:m,d=m=>{if(!B(m))return m;const i=new Date(m),g=i.getHours(),V=i.getMinutes(),u=`${U(g,2)}:${U(V,2)}`;return{"vi-VN":u,"en-US":u}[r.value]},n=(m,i="full")=>{if(!B(m))return m;const V={full:l.value,short:c.value,number:["01","02","03","04","05","06","07","08","09","10","11","12"]}[i][m.getMonth()],u=m.getFullYear();return`${i==="number"?`${V}/`:`${V} `}${u}`},B=m=>m?m.toString()!=="Invalid Date":!1;return{formatTime:d,formatDate:o,formatDateHuge:v,formatMonthYear:n,dayShortNames:y,monthShortNames:c,dateFormat:t,convertToDate:f}}const Zt={class:"b-date-picker__grid-date ds-space-y-3"},Jt={class:"ds-grid ds-w-full ds-grid-cols-7 ds-gap-1 ds-text-xs ds-text-gray-400"},Xt={class:"ds-grid ds-w-full ds-grid-cols-7 ds-gap-1"},ea=["disabled","onClick"],rt=J({__name:"BDatePickerGridDate",props:{date:{},dates:{}},emits:["select:date"],setup(a,{emit:r}){const t=a,D=r,{dayShortNames:l}=fe(),c=({year:f,month:v,date:o})=>P(t.date.year)||P(t.date.month)||P(t.date.date)?!1:f===t.date.year&&v===t.date.month&&o===t.date.date,y=({year:f,month:v,date:o})=>{D("select:date",{year:f,month:v,date:o})};return(f,v)=>(h(),k("div",Zt,[$("div",Jt,[(h(!0),k(z,null,Z(Object.keys(Y(l)).length,o=>(h(),k("div",{key:o,class:"ds-flex ds-justify-center"},j(o-1===6?Y(l)[0]:Y(l)[o]),1))),128))]),$("div",Xt,[(h(!0),k(z,null,Z(f.dates,o=>(h(),k("button",{key:`${o.date}${o.month}${o.year}`,class:A([{"enabled:hover:ds-bg-gray-150":!c(o),"enabled:ds-text-gray-400":o.secondary,"--selected ds-bg-primary-t ds-text-white":c(o)},"ds-flex ds-aspect-square ds-cursor-pointer ds-items-center ds-justify-center ds-rounded-lg ds-transition-all focus-visible:ds-bg-gray-150 disabled:ds-text-gray-200"]),disabled:o.disabled,onClick:d=>y(o)},j(o.date),11,ea))),128))])]))}});rt.__docgenInfo={exportName:"default",displayName:"BDatePickerGridDate",description:"",tags:{},props:[{name:"date",required:!0,type:{name:"BDatePickerDateItem"}},{name:"dates",required:!0,type:{name:"Array",elements:[{name:"BDatePickerDateItem"}]}}],events:[{name:"select:date",type:{names:["BDatePickerDateItem"]}}],sourceFiles:["/home/runner/work/design-system/design-system/src/components/BDatePicker/BDatePickerGridDate.vue"]};const ta={class:"b-date-picker__grid-month ds-grid ds-w-full ds-grid-cols-3 ds-grid-rows-4 ds-gap-x-1 ds-gap-y-3"},aa=["disabled","onClick"],ot=J({__name:"BDatePickerGridMonth",props:{month:{},months:{}},emits:["select:month"],setup(a,{emit:r}){const t=a,D=r,{monthShortNames:l}=fe(),c=({year:f,month:v})=>P(t.month.year)||P(t.month.month)?!1:f===t.month.year&&v===t.month.month,y=({year:f,month:v,date:o})=>{D("select:month",{year:f,month:v,date:o})};return(f,v)=>(h(),k("div",ta,[(h(!0),k(z,null,Z(f.months,o=>(h(),k("button",{key:o.month,class:A([{"enabled:hover:ds-bg-gray-150":!c(o),"ds-bg-primary-t ds-text-white":c(o)},"ds-flex ds-h-9 ds-cursor-pointer ds-items-center ds-justify-center ds-rounded-lg ds-transition-all focus-visible:ds-bg-gray-150 disabled:ds-text-gray-200"]),disabled:o.disabled,onClick:d=>y(o)},j(Y(l)[o.month]),11,aa))),128))]))}});ot.__docgenInfo={exportName:"default",displayName:"BDatePickerGridMonth",description:"",tags:{},props:[{name:"month",required:!0,type:{name:"BDatePickerDateItem"}},{name:"months",required:!0,type:{name:"Array",elements:[{name:"BDatePickerDateItem"}]}}],events:[{name:"select:month",type:{names:["BDatePickerDateItem"]}}],sourceFiles:["/home/runner/work/design-system/design-system/src/components/BDatePicker/BDatePickerGridMonth.vue"]};const lt={},sa={"aria-label":"Previous",class:"ds-flex ds-h-10 ds-w-10 ds-cursor-pointer ds-items-center ds-justify-center ds-rounded-lg ds-fill-primary-t ds-transition-all focus-visible:ds-bg-blue-light enabled:hover:ds-bg-blue-light disabled:ds-fill-black/40",type:"button"};function na(a,r){return h(),k("button",sa,r[0]||(r[0]=[$("svg",{class:"ds-h-4 ds-w-4",viewBox:"0 0 320 512",xmlns:"http://www.w3.org/2000/svg"},[$("path",{d:"M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l192 192c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256 246.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192z"})],-1)]))}const ra=pe(lt,[["render",na]]);lt.__docgenInfo={displayName:"BDatePickerButtonPrevious",description:"",tags:{},sourceFiles:["/home/runner/work/design-system/design-system/src/components/BDatePicker/BDatePickerButtonPrevious.vue"]};const dt={},oa={"aria-label":"Next",class:"ds-flex ds-h-10 ds-w-10 ds-cursor-pointer ds-items-center ds-justify-center ds-rounded-lg ds-fill-primary-t ds-transition-all focus-visible:ds-bg-blue-light enabled:hover:ds-bg-blue-light disabled:ds-fill-black/40",type:"button"};function la(a,r){return h(),k("button",oa,r[0]||(r[0]=[$("svg",{class:"ds-h-4 ds-w-4",viewBox:"0 0 320 512",xmlns:"http://www.w3.org/2000/svg"},[$("path",{d:"M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z"})],-1)]))}const da=pe(dt,[["render",la]]);dt.__docgenInfo={displayName:"BDatePickerButtonNext",description:"",tags:{},sourceFiles:["/home/runner/work/design-system/design-system/src/components/BDatePicker/BDatePickerButtonNext.vue"]};const it={},ia={"aria-label":"heading",class:"ds-flex ds-h-10 ds-items-center ds-justify-center ds-rounded-lg ds-fill-primary-t ds-px-3 ds-font-semibold ds-transition-all"};function ua(a,r){return h(),k("div",ia,[Et(a.$slots,"default")])}const ca=pe(it,[["render",ua]]);it.__docgenInfo={displayName:"BDatePickerHeading",description:"",tags:{},slots:[{name:"default"}],sourceFiles:["/home/runner/work/design-system/design-system/src/components/BDatePicker/BDatePickerHeading.vue"]};const ut=J({__name:"BDatePickerIcon",props:{disabled:{type:Boolean}},setup(a){const r=a;return(t,D)=>(h(),k("label",{class:A([[r.disabled?"ds-cursor-not-allowed ds-fill-black/40":"ds-cursor-pointer ds-fill-black/80"],"ds-absolute ds-right-3 ds-top-0 ds-z-[3] ds-flex ds-h-10 ds-items-center hover:ds-fill-primary-t/80 focus-visible:ds-fill-primary-t/80"]),"aria-label":"Icon",tabindex:"0"},D[0]||(D[0]=[$("svg",{class:"ds-h-4.5 ds-w-4.5",viewBox:"0 0 448 512",xmlns:"http://www.w3.org/2000/svg"},[$("path",{d:"M96 32V64H48C21.5 64 0 85.5 0 112v48H448V112c0-26.5-21.5-48-48-48H352V32c0-17.7-14.3-32-32-32s-32 14.3-32 32V64H160V32c0-17.7-14.3-32-32-32S96 14.3 96 32zM448 192H0V464c0 26.5 21.5 48 48 48H400c26.5 0 48-21.5 48-48V192zM96 296c0-13.3 10.7-24 24-24H328c13.3 0 24 10.7 24 24s-10.7 24-24 24H120c-13.3 0-24-10.7-24-24zm24 72H232c13.3 0 24 10.7 24 24s-10.7 24-24 24H120c-13.3 0-24-10.7-24-24s10.7-24 24-24z"})],-1)]),2))}});ut.__docgenInfo={exportName:"default",displayName:"BDatePickerIcon",description:"",tags:{},props:[{name:"disabled",required:!0,type:{name:"boolean"}}],sourceFiles:["/home/runner/work/design-system/design-system/src/components/BDatePicker/BDatePickerIcon.vue"]};const ma={class:"b-date-picker__grid-year ds-grid ds-w-full ds-grid-cols-3 ds-grid-rows-4 ds-gap-x-1 ds-gap-y-3"},pa=["disabled","onClick"],ct=J({__name:"BDatePickerGridYear",props:{year:{},years:{}},emits:["select:year"],setup(a,{emit:r}){const t=a,D=r,l=({year:y})=>P(t.year.year)?!1:y===t.year.year,c=({year:y,month:f,date:v})=>{D("select:year",{year:y,month:f,date:v})};return(y,f)=>(h(),k("div",ma,[(h(!0),k(z,null,Z(y.years,v=>(h(),k("button",{key:v.year,class:A([{"enabled:hover:ds-bg-gray-150":!l(v),"enabled:ds-text-gray-400":v.secondary,"ds-bg-primary-t ds-text-white":l(v)},"ds-flex ds-h-9 ds-cursor-pointer ds-items-center ds-justify-center ds-rounded-lg ds-transition-all focus-visible:ds-bg-gray-150 disabled:ds-text-gray-200"]),disabled:v.disabled,onClick:o=>c(v)},j(v.year),11,pa))),128))]))}});ct.__docgenInfo={exportName:"default",displayName:"BDatePickerGridYear",description:"",tags:{},props:[{name:"year",required:!0,type:{name:"BDatePickerDateItem"}},{name:"years",required:!0,type:{name:"Array",elements:[{name:"BDatePickerDateItem"}]}}],events:[{name:"select:year",type:{names:["BDatePickerDateItem"]}}],sourceFiles:["/home/runner/work/design-system/design-system/src/components/BDatePicker/BDatePickerGridYear.vue"]};const fa={class:"b-date-picker__grid-date-range ds-space-y-3"},va={class:"ds-grid ds-w-full ds-grid-cols-7 ds-gap-1 ds-text-xs ds-text-gray-400"},ga={class:"date-range -ds-mx-0.5 ds-grid ds-w-full ds-grid-cols-7"},ha=["disabled","onClick"],mt=J({__name:"BDatePickerGridDateRange",props:{dateRange:{},dates:{}},emits:["select:date"],setup(a,{emit:r}){const t=a,D=r,{dayShortNames:l}=fe(),c=({year:o,month:d,date:n})=>{if(t.dateRange.length<2)return!1;const B=new Date(t.dateRange[0].year,t.dateRange[0].month,t.dateRange[0].date),m=new Date(t.dateRange[1].year,t.dateRange[1].month,t.dateRange[1].date),i=new Date(o,d,n);return B<i&&i<m},y=({year:o,month:d,date:n})=>t.dateRange.length>0?o===t.dateRange[0].year&&d===t.dateRange[0].month&&n===t.dateRange[0].date:!1,f=({year:o,month:d,date:n})=>t.dateRange.length===2?o===t.dateRange[1].year&&d===t.dateRange[1].month&&n===t.dateRange[1].date:!1,v=({year:o,month:d,date:n})=>{D("select:date",{year:o,month:d,date:n})};return(o,d)=>(h(),k("div",fa,[$("div",va,[(h(!0),k(z,null,Z(Object.keys(Y(l)).length,n=>(h(),k("div",{key:n,class:"ds-flex ds-justify-center"},j(n-1===6?Y(l)[0]:Y(l)[n]),1))),128))]),$("div",ga,[(h(!0),k(z,null,Z(o.dates,n=>(h(),k("button",{key:`${n.date}${n.month}${n.year}`,class:A([{"*:enabled:hover:ds-bg-gray-150":!y(n)&&!f(n),"enabled:ds-text-gray-400":n.secondary,"--selected":y(n)||f(n),"--start":y(n),"--end":f(n)},"date-item group ds-cursor-pointer ds-p-0.5 ds-transition-all focus-visible:ds-bg-gray-150 disabled:ds-text-gray-200"]),disabled:n.disabled,onClick:B=>v(n)},[$("span",{class:A([{"ds-bg-primary-t ds-text-white":y(n)||f(n),"ds-bg-primary-t/10":c(n)},"date-item__inner ds-flex ds-aspect-square ds-items-center ds-justify-center ds-rounded-lg"])},j(n.date),3)],10,ha))),128))])]))}});const ya=pe(mt,[["__scopeId","data-v-9a965dba"]]);mt.__docgenInfo={exportName:"default",displayName:"BDatePickerGridDateRange",description:"",tags:{},props:[{name:"dateRange",required:!0,type:{name:"Array",elements:[{name:"BDatePickerDateItem"}]}},{name:"dates",required:!0,type:{name:"Array",elements:[{name:"BDatePickerDateItem"}]}}],events:[{name:"select:date",type:{names:["BDatePickerDateItem"]}}],sourceFiles:["/home/runner/work/design-system/design-system/src/components/BDatePicker/BDatePickerGridDateRange.vue"]};function Da(a){return Tt()?(Ft(a),!0):!1}function Ce(a){return typeof a=="function"?a():Y(a)}const ba=typeof window<"u"&&typeof document<"u";typeof WorkerGlobalScope<"u"&&globalThis instanceof WorkerGlobalScope;function ka(a,r){var t;if(typeof a=="number")return a+r;const D=((t=a.match(/^-?\d+\.?\d*/))==null?void 0:t[0])||"",l=a.slice(D.length),c=Number.parseFloat(D)+r;return Number.isNaN(c)?a:c+l}const pt=ba?window:void 0;function _a(){const a=w(!1),r=Ot();return r&&st(()=>{a.value=!0},r),a}function wa(a){const r=_a();return x(()=>(r.value,!!a()))}function oe(a,r={}){const{window:t=pt}=r,D=wa(()=>t&&"matchMedia"in t&&typeof t.matchMedia=="function");let l;const c=w(!1),y=o=>{c.value=o.matches},f=()=>{l&&("removeEventListener"in l?l.removeEventListener("change",y):l.removeListener(y))},v=qt(()=>{D.value&&(f(),l=t.matchMedia(Ce(a)),"addEventListener"in l?l.addEventListener("change",y):l.addListener(y),c.value=l.matches)});return Da(()=>{v(),f(),l=void 0}),c}const xa={sm:640,md:768,lg:1024,xl:1280,"2xl":1536};function Ma(a,r={}){function t(d,n){let B=Ce(a[Ce(d)]);return n!=null&&(B=ka(B,n)),typeof B=="number"&&(B=`${B}px`),B}const{window:D=pt,strategy:l="min-width"}=r;function c(d){return D?D.matchMedia(d).matches:!1}const y=d=>oe(()=>`(min-width: ${t(d)})`,r),f=d=>oe(()=>`(max-width: ${t(d)})`,r),v=Object.keys(a).reduce((d,n)=>(Object.defineProperty(d,n,{get:()=>l==="min-width"?y(n):f(n),enumerable:!0,configurable:!0}),d),{});function o(){const d=Object.keys(a).map(n=>[n,y(n)]);return x(()=>d.filter(([,n])=>n.value).map(([n])=>n))}return Object.assign(v,{greaterOrEqual:y,smallerOrEqual:f,greater(d){return oe(()=>`(min-width: ${t(d,.1)})`,r)},smaller(d){return oe(()=>`(max-width: ${t(d,-.1)})`,r)},between(d,n){return oe(()=>`(min-width: ${t(d)}) and (max-width: ${t(n,-.1)})`,r)},isGreater(d){return c(`(min-width: ${t(d,.1)})`)},isGreaterOrEqual(d){return c(`(min-width: ${t(d)})`)},isSmaller(d){return c(`(max-width: ${t(d,-.1)})`)},isSmallerOrEqual(d){return c(`(max-width: ${t(d)})`)},isInBetween(d,n){return c(`(min-width: ${t(d)}) and (max-width: ${t(n,-.1)})`)},current:o,active(){const d=o();return x(()=>d.value.length===0?"":d.value.at(-1))}})}const $a={class:"b-date-picker"},Ba={class:"ds-relative"},Pa=["id","disabled","placeholder","value"],Va=["id","disabled","placeholder"],Sa={class:"ds-mt-1 ds-grid ds-w-80 ds-gap-5 ds-rounded-lg ds-bg-white ds-p-3 ds-shadow-2xl"},Ca={class:"ds-flex ds-w-full ds-items-center ds-justify-between"},Ra={class:"ds-grid ds-w-full ds-grid-cols-2 ds-gap-2"},Re=J({__name:"BDatePicker",props:{inputId:{default:""},modelValue:{default:void 0},label:{default:""},validationRules:{default:void 0},placeholder:{default:""},required:{type:Boolean,default:!1},requiredErrorMessage:{default:""},disabled:{type:Boolean,default:!1},inputCssClass:{default:""},minDate:{default:void 0},maxDate:{default:void 0},range:{type:Boolean,default:!1},hideDetails:{type:Boolean,default:!1},view:{default:F.Dates}},emits:["update:modelValue"],setup(a,{emit:r}){const t=a,D=r;let l;const c=new Date(new Date().getFullYear(),new Date().getMonth(),new Date().getDate()),f=Ma(xa).greaterOrEqual("sm"),{t:v,locale:o}=nt(),{formatMonthYear:d,formatDate:n,dateFormat:B,convertToDate:m}=fe(),i=w({}),g=w([]),V=w({year:c.getFullYear(),month:c.getMonth()}),u=w({year:c.getFullYear(),month:c.getMonth()}),I=w(!1),E=w(t.view),X=w(null),W=w(null),Ne=w(null),ve=w(null),K=w([]),ge=w([]),ee=w([]),le=w(""),Ye=w(!1),Ie=w(!1),S=x(()=>M(t.minDate)),C=x(()=>M(t.maxDate)),ft={validateRule:e=>!!e,errorMessage:()=>t.requiredErrorMessage||v("ds.global.field_required")},de=x(()=>t.inputId||`id-${Qt()}`),_=x({get(){return t.modelValue},set(e){D("update:modelValue",e)}}),vt=x(()=>{var e;return(e=t.modelValue)==null?void 0:e.map(s=>n(typeof s=="string"?new Date(s):s)).join(" - ")}),gt=x(()=>{let e=[];return t.required&&e.push(ft),t.validationRules&&(e=e.concat(t.validationRules)),e.length?e:void 0}),{validate:ht,validationResult:he}=Lt(de.value,_,gt.value),Ee=x(()=>["ds-border ds-rounded-lg ds-block ds-w-full ds-text-sm ds-px-3 ds-h-[40px] ds-transition-all ds-ease-in-out",{"ds-cursor-not-allowed ds-bg-[#f2f2f2] ds-text-black/[0.4]":t.disabled,"ds-text-black/[0.85]":!t.disabled,"ds-border-error focus:ds-ring-1 focus:ds-ring-error":!he.value.valid,"ds-border-black/[0.1] focus:ds-border-focus focus:ds-ring-1 focus:ds-ring-focus":he.value.valid,"!ds-border-focus ds-ring-1 ds-ring-focus":I.value},t.inputCssClass]),Te=x(()=>{const e={mask:ne.MaskedDate,pattern:B.value,lazy:!0,format:s=>n(s),parse:s=>m(s),blocks:{YYYY:{mask:ne.MaskedRange,from:1,to:9999},MM:{mask:ne.MaskedRange,from:1,to:12},DD:{mask:ne.MaskedRange,from:1,to:31}}};return S.value&&(e.min=S.value),C.value&&(e.max=C.value),e}),ie=x(()=>({[F.Years]:{handleClickPreview:$t,handleClickNext:Bt},[F.Months]:{handleClickPreview:Pt,handleClickNext:Vt,handleClickHeading:Dt},[F.Dates]:{handleClickPreview:St,handleClickNext:Ct,handleClickHeading:yt}}));O(o,()=>{l&&(l.off("accept",Be),l.off("complete",Pe),l.updateOptions(Te.value),ye(),l.on("accept",Be),l.on("complete",Pe))}),O(()=>t.minDate,()=>{if(t.range){const e=_.value;e.length>0&&Fe(e[0])}else{const e=_.value;Fe(e)}q()}),O(()=>t.maxDate,()=>{if(t.range){const e=_.value;e.length>1&&De(e[1]),e.length>0&&De(e[0])}else{const e=_.value;De(e)}q()}),O(()=>t.range,e=>{e||Ke(()=>{ze()}),i.value={},g.value=[]}),O(()=>t.view,e=>{E.value=e}),O(f,()=>{I.value=!1}),O(I,e=>{e?(Wt(),t.range?g.value=_.value?qe(_.value):[]:i.value=_.value?T(_.value):{},u.value=G(V.value),Ke(()=>{f.value?Kt(X.value,W.value):document.body.append(W.value)})):(Ze(),Je(X.value,W.value))}),O(()=>t.modelValue,e=>{if(be(e))if(t.range){const s=e;g.value=e?qe(s):[],V.value=e?T(s[1],!0):{},u.value=e?T(s[1],!0):{}}else{const s=e;i.value=e?T(s):{},V.value=e?T(s,!0):{},u.value=e?T(s,!0):{}}!t.range&&be($e())&&ye()});const ye=()=>{const e=M(t.modelValue);l.value=e?n(e):""},te=e=>typeof t.modelValue=="string"?e.toISOString():e,Fe=e=>{const s=M(e);S.value&&s&&S.value>s&&(_.value=void 0)},De=e=>{const s=M(e);C.value&&s&&C.value<s&&(_.value=void 0)},M=e=>{switch(typeof e){case"object":return e;case"string":return Xe(e)?new Date(e):void 0}return e},yt=()=>{ae(),E.value=F.Months},Dt=()=>{ue(),E.value=F.Years},be=e=>{var p,R;return(t.range?[!Q(t.modelValue)&&Q(e),!Q(e)&&Q(t.modelValue),!Q(t.modelValue)&&!Q(e)&&t.modelValue.some((N,b)=>{var H,We;return((H=M(N))==null?void 0:H.getTime())!==((We=M(e[b]))==null?void 0:We.getTime())})]:[!t.modelValue&&e,!e&&t.modelValue,t.modelValue&&e&&((p=M(t.modelValue))==null?void 0:p.getTime())!==((R=M(e))==null?void 0:R.getTime())]).some(N=>N)},bt=()=>{I.value=!1},kt=()=>{I.value=!1,t.range?g.value.length===2?_.value=[te(new Date(g.value[0].year,g.value[0].month,g.value[0].date)),te(new Date(g.value[1].year,g.value[1].month,g.value[1].date))]:_.value=void 0:!P(i.value.year)&&!P(i.value.month)&&!P(i.value.date)?_.value=te(new Date(i.value.year,i.value.month,i.value.date)):_.value=void 0,V.value=G(u.value)},G=(e,s)=>({year:e.year,month:e.month,date:s?void 0:e.date}),T=(e,s)=>({year:M(e).getFullYear(),month:M(e).getMonth(),date:s?void 0:M(e).getDate()}),qe=(e,s)=>[{year:M(e[0]).getFullYear(),month:M(e[0]).getMonth(),date:s?void 0:M(e[0]).getDate()},{year:M(e[1]).getFullYear(),month:M(e[1]).getMonth(),date:s?void 0:M(e[1]).getDate()}],_t=e=>{u.value=G(e),ae(),E.value=F.Months},wt=e=>{u.value=G(e),q(),E.value=F.Dates},xt=e=>{e.year===i.value.year&&e.month===i.value.month&&e.date===i.value.date?i.value=G({}):(i.value=G(e),u.value=G(e,!0),q())},Mt=({year:e,month:s,date:p})=>{const R=g.value.length;if(R===0)g.value.push({year:e,month:s,date:p});else if(R===1){const N=g.value.findIndex(b=>b.year===e&&b.month===s&&b.date===p);N!==-1?g.value.splice(N,1):new Date(e,s,p)>new Date(g.value[0].year,g.value[0].month,g.value[0].date)?g.value.push({year:e,month:s,date:p}):g.value.unshift({year:e,month:s,date:p})}else if(R===2){const N=g.value.findIndex(b=>b.year===e&&b.month===s&&b.date===p);N!==-1?g.value.splice(N,1):(g.value=[],g.value.push({year:e,month:s,date:p}))}u.value={year:e,month:s},q()},$t=()=>{Oe(-1),ue()},Bt=()=>{Oe(1),ue()},Oe=e=>{P(u.value.year)||(u.value.year+=e*10)},Pt=()=>{je(-1),ae()},Vt=()=>{je(1),ae()},je=e=>{P(u.value.year)||(u.value.year+=e)},St=()=>{Ae(-1),q()},Ct=()=>{Ae(1),q()},Ae=e=>{P(u.value.month)||(u.value.month+=e)},Rt=()=>{I.value=!0},He=()=>{t.disabled||(I.value=!I.value)},ke=e=>(S.value?S.value.getFullYear()>e:!1)||(C.value?e>C.value.getFullYear():!1),Nt=(e,s)=>(S.value?S.value.getFullYear()===e&&S.value.getMonth()>s||S.value.getFullYear()>e:!1)||(C.value?C.value.getFullYear()===e&&C.value.getMonth()<s||C.value.getFullYear()<e:!1),_e=e=>(S.value?S.value>e:!1)||(C.value?e>C.value:!1),we=(e,s)=>new Date(e,s,1),xe=(e,s)=>new Date(e,s+1,0),ue=()=>{if(ee.value=[],P(u.value.year))return;const e=u.value.year.toString().slice(0,-1),s=+`${e}0`,p=+`${e}9`;ee.value.push({year:s-1,secondary:!0,disabled:ke(s-1)});for(let b=s;b<=p;b++)ee.value.push({year:b,disabled:ke(b)});ee.value.push({year:p+1,secondary:!0,disabled:ke(p+1)}),le.value=`${e}0 - ${e}9`;const R=we(s,0),N=xe(p,11);Me(R,N)},ae=()=>{if(ge.value=[],P(u.value.year))return;for(let p=0;p<12;p++)ge.value.push({year:u.value.year,month:p,disabled:Nt(u.value.year,p)});le.value=u.value.year.toString();const e=we(u.value.year,0),s=xe(u.value.year,11);Me(e,s)},q=()=>{if(K.value=[],P(u.value.year)||P(u.value.month))return;const e=we(u.value.year,u.value.month),s=xe(u.value.year,u.value.month),p=structuredClone(e);let R=p.getDay()===0?6:p.getDay()-1;for(;R>0;){const b=structuredClone(p);b.setDate(-(R-1)),K.value.push({date:b.getDate(),month:b.getMonth(),year:b.getFullYear(),secondary:!0,disabled:_e(b)}),R--}for(;p<=s;)K.value.push({date:p.getDate(),month:p.getMonth(),year:p.getFullYear(),disabled:_e(p)}),p.setDate(p.getDate()+1);const N=p.getDay()===0?1:7-p.getDay()+1;if(N<6){let b=1;const H=structuredClone(p);for(;b<=N;)H.setDate(b),K.value.push({date:H.getDate(),month:H.getMonth(),year:H.getFullYear(),secondary:!0,disabled:_e(H)}),b++}le.value=d(new Date(u.value.year,u.value.month,1)).toString(),Me(e,s)},Me=(e,s)=>{Ye.value=S.value?S.value>=e:!1,Ie.value=C.value?C.value<=s:!1},$e=()=>{const e=l.value.split("/"),s={"vi-VN":`${e[2]}-${e[1]}-${e[0]}`,"en-US":`${e[2]}-${e[0]}-${e[1]}`};return Xe(s[o.value])?new Date(s[o.value]):void 0},Be=()=>{l.unmaskedValue||(_.value=void 0,i.value={year:c.getFullYear(),month:c.getMonth()})},Pe=()=>{const e=$e();e?(_.value=te(e),i.value=T(e),V.value=T(e,!0),u.value=T(e,!0),q()):(_.value=void 0,i.value={year:c.getFullYear(),month:c.getMonth()})},Yt=()=>{const e=$e();ht(),be(e)&&(e?(_.value=te(e),V.value=T(e,!0),i.value=T(e),u.value=T(e,!0),q()):(_.value=void 0,i.value={year:c.getFullYear(),month:c.getMonth()}))},Ue=e=>{[X.value,W.value].some(R=>e.composedPath().includes(R))||Le()},Ge=e=>{e.key==="Escape"&&Le()},Le=()=>{var e,s;I.value=!1,(e=Ne.value)==null||e.blur(),(s=ve.value)==null||s.blur()},ze=()=>{l=ne(ve.value,Te.value),ye(),l.on("accept",Be),l.on("complete",Pe)},It=()=>{l&&l.destroy()};return(()=>{ue(),ae(),q()})(),st(()=>{t.range||ze(),document.addEventListener("click",Ue),document.addEventListener("keydown",Ge)}),jt(()=>{It(),Ze(),Je(X.value,W.value),document.removeEventListener("keydown",Ge),document.removeEventListener("click",Ue)}),(e,s)=>(h(),k("div",$a,[$("div",{ref_key:"datePickerRef",ref:X},[L(Gt,{id:de.value,label:e.label,required:e.required},null,8,["id","label","required"]),$("div",Ba,[t.range?(h(),k("input",{key:0,id:de.value,ref_key:"datePickerInputRef",ref:Ne,class:A([Ee.value,"ds-drop-shadow-light"]),disabled:e.disabled,placeholder:e.placeholder,value:vt.value,readonly:"",onFocus:Rt},null,42,Pa)):(h(),k("input",{key:1,id:de.value,ref_key:"datePickerInputMaskRef",ref:ve,class:A([Ee.value,"ds-drop-shadow-light"]),disabled:e.disabled,placeholder:e.placeholder,onBlur:Yt},null,42,Va)),L(ut,{disabled:t.disabled,onClick:He,onKeyup:At(He,["enter"])},null,8,["disabled"])]),Ht($("div",{ref_key:"datePickerMenuRef",ref:W,class:"b-date-picker__menu sm:ds-items-[unset] sm:ds-justify-[unset] ds-fixed ds-left-0 ds-top-0 ds-z-100 ds-flex ds-h-full ds-w-full ds-items-center ds-justify-center ds-bg-black/65 ds-backdrop-blur-sm sm:ds-absolute sm:ds-left-[unset] sm:ds-top-[unset] sm:ds-z-50 sm:ds-block sm:ds-h-auto sm:ds-w-auto sm:ds-bg-transparent sm:ds-backdrop-blur-none"},[$("div",Sa,[$("div",Ca,[L(ra,{disabled:Ye.value,onClick:s[0]||(s[0]=p=>ie.value[E.value].handleClickPreview())},null,8,["disabled"]),L(ca,{class:A({"ds-cursor-pointer hover:ds-bg-blue-light focus-visible:ds-bg-blue-light":ie.value[E.value].handleClickHeading}),onClick:ie.value[E.value].handleClickHeading},{default:Ve(()=>[Se(j(le.value),1)]),_:1},8,["class","onClick"]),L(da,{disabled:Ie.value,onClick:s[1]||(s[1]=p=>ie.value[E.value].handleClickNext())},null,8,["disabled"])]),E.value===Y(F).Years?(h(),se(ct,{key:0,year:i.value,years:ee.value,"onSelect:year":_t},null,8,["year","years"])):ce("",!0),E.value===Y(F).Months?(h(),se(ot,{key:1,month:i.value,months:ge.value,"onSelect:month":wt},null,8,["month","months"])):ce("",!0),E.value===Y(F).Dates?(h(),k(z,{key:2},[t.range?(h(),se(ya,{key:0,"date-range":g.value,dates:K.value,"onSelect:date":Mt},null,8,["date-range","dates"])):(h(),se(rt,{key:1,date:i.value,dates:K.value,"onSelect:date":xt},null,8,["date","dates"]))],64)):ce("",!0),$("div",Ra,[L(Qe,{onClick:bt},{default:Ve(()=>[Se(j(Y(v)("ds.components.base.date_picker.buttons.cancel")),1)]),_:1}),L(Qe,{type:"primary",onClick:kt},{default:Ve(()=>[Se(j(Y(v)("ds.components.base.date_picker.buttons.confirm")),1)]),_:1})])])],512),[[Ut,I.value]])],512),e.hideDetails?ce("",!0):(h(),se(zt,{key:0,"error-message":Y(he).errorMessage(),class:"ds-mt-1"},null,8,["error-message"]))]))}});Re.__docgenInfo={exportName:"default",displayName:"BDatePicker",description:"",tags:{},props:[{name:"inputId",description:"ID of input field.",required:!1,type:{name:"string"},defaultValue:{func:!1,value:"''"}},{name:"modelValue",description:"Value v-model: <code>Date | string</code> when range is false, v-model: <code>Array<Date | string></code> when range is true (date | string in ISO 8601 format).",required:!1,type:{name:"union",elements:[{name:"Date"},{name:"string"},{name:"Array",elements:[{name:"union",elements:[{name:"Date"},{name:"string"}]}]}]},defaultValue:{func:!1,value:"undefined"}},{name:"label",description:"Label of the field.",required:!1,type:{name:"string"},defaultValue:{func:!1,value:"''"}},{name:"validationRules",description:"Array of custom validation rules.",required:!1,type:{name:"Array",elements:[{name:"ValidationRule"}]},defaultValue:{func:!1,value:"undefined"}},{name:"placeholder",description:"Placeholder of input field.",required:!1,type:{name:"string"},defaultValue:{func:!1,value:"''"}},{name:"required",description:"Validate if the field is left empty.",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"requiredErrorMessage",description:"Error message when the field is empty.",required:!1,type:{name:"string"},defaultValue:{func:!1,value:"''"}},{name:"disabled",description:"Disabled state.",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"inputCssClass",description:"Custom CSS of input field.",required:!1,type:{name:"string"},defaultValue:{func:!1,value:"''"}},{name:"minDate",description:"Minimum selectable date <code>Date | string</code> (date | string in ISO 8601 format).",required:!1,type:{name:"union",elements:[{name:"Date"},{name:"string"}]},defaultValue:{func:!1,value:"undefined"}},{name:"maxDate",description:"Maximum selectable date <code>Date | string</code> (date | string in ISO 8601 format).",required:!1,type:{name:"union",elements:[{name:"Date"},{name:"string"}]},defaultValue:{func:!1,value:"undefined"}},{name:"range",description:"Allow to select a date range.",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"hideDetails",description:"Hide the validation error message.",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"view",description:"Default view mode when opening menu",required:!1,type:{name:"TSLiteralType"},defaultValue:{func:!1,value:"BDatePickerView.Dates"}}],events:[{name:"update:modelValue",type:{names:["union"],elements:[{name:"Date"},{name:"string"},{name:"Array",elements:[{name:"union",elements:[{name:"Date"},{name:"string"}]}]}]},description:"Update value, param <code>Date | string</code> when range is false, unless param <code>Array<Date | string></code>.",properties:[{type:{names:["mixed"]},description:"e"},{type:{names:["mixed"]},name:"value"}],tags:[{title:"param",type:{name:"mixed"},description:"e"},{title:"param",type:{name:"mixed"},name:"value"}]}],sourceFiles:["/home/runner/work/design-system/design-system/src/components/BDatePicker/BDatePicker.vue"]};const Wa={title:"Components/DatePicker",parameters:{docs:{description:{component:"The <code>BDatePicker</code> component is a fully featured date selection component that lets users select a date."}}},component:Re,tags:["autodocs"],argTypes:{view:{control:"select",options:Object.values(F)}},args:{inputId:"",label:"",validationRules:void 0,placeholder:"",required:!1,requiredErrorMessage:"",disabled:!1,inputCssClass:"",minDate:void 0,maxDate:void 0,range:!1,hideDetails:!1,view:"dates"}},me={render:a=>({components:{BDatePicker:Re},setup(){const r=new Date,t=w(new Date),D=new Date(r.getFullYear(),r.getMonth(),r.getDate()-4),l=new Date(r.getFullYear(),r.getMonth(),r.getDate()+2),c=x(()=>a.minDate?new Date(a.minDate):void 0),y=x(()=>a.maxDate?new Date(a.maxDate):void 0);return console.log("args.range",a.range),O(()=>a.range,f=>{t.value=f?[D,l]:new Date},{immediate:!0}),{args:a,date:t,minDateValue:c,maxDateValue:y}},template:`
      <BDatePicker v-bind="args" v-model="date" :min-date="minDateValue" :max-date="maxDateValue" />
    `}),args:{}};var et,tt,at;me.parameters={...me.parameters,docs:{...(et=me.parameters)==null?void 0:et.docs,source:{originalSource:`{
  render: (args: any) => ({
    components: {
      BDatePicker
    },
    setup() {
      const CURRENT_DATE = new Date();
      const date = ref<Date | Date[] | undefined>(new Date());
      const startDate = new Date(CURRENT_DATE.getFullYear(), CURRENT_DATE.getMonth(), CURRENT_DATE.getDate() - 4);
      const endDate = new Date(CURRENT_DATE.getFullYear(), CURRENT_DATE.getMonth(), CURRENT_DATE.getDate() + 2);
      const minDateValue = computed(() => args.minDate ? new Date(args.minDate) : undefined);
      const maxDateValue = computed(() => args.maxDate ? new Date(args.maxDate) : undefined);
      console.log('args.range', args.range);
      watch(() => args.range, val => {
        date.value = val ? [startDate, endDate] : new Date();
      }, {
        immediate: true
      });
      return {
        args,
        date,
        minDateValue,
        maxDateValue
      };
    },
    template: \`
      <BDatePicker v-bind="args" v-model="date" :min-date="minDateValue" :max-date="maxDateValue" />
    \`
  }),
  args: {}
}`,...(at=(tt=me.parameters)==null?void 0:tt.docs)==null?void 0:at.source}}};const Ka=["Default"];export{me as Default,Ka as __namedExportsOrder,Wa as default};
