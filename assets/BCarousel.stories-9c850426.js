import{j as P,e as m,k as w,C,E as T,g as D,o as n,b as r,l as i,d as q,G as x,m as f,H as R,n as G,M as H,N as U}from"./vue.esm-bundler-4cd6df52.js";import{_ as N}from"./_plugin-vue_export-helper-c27b6911.js";const z=o=>(H("data-v-6a2d59df"),o=o(),U(),o),W={class:"carousel-content"},J=z(()=>i("div",{class:"ds-cursor-pointer ds-rounded-full ds-bg-primary-f/40 ds-p-2 hover:ds-bg-primary-f/70"},[i("svg",{class:"ds-h-5 ds-w-5 ds-fill-white",viewBox:"0 0 320 512",xmlns:"http://www.w3.org/2000/svg"},[i("path",{d:"M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l192 192c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256 246.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192z"})])],-1)),K=[J],Q=z(()=>i("div",{class:"ds-cursor-pointer ds-rounded-full ds-bg-primary-f/40 ds-p-2 hover:ds-bg-primary-f/70"},[i("svg",{class:"ds-h-5 ds-w-5 ds-fill-white",viewBox:"0 0 320 512",xmlns:"http://www.w3.org/2000/svg"},[i("path",{d:"M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z"})])],-1)),X=[Q],Y={key:1,class:"carousel-pagination"},Z=["onClick"],$=P({__name:"BCarousel",props:{modelValue:{default:void 0},autoplay:{type:Boolean,default:!1},duration:{default:5e3},navigation:{type:Boolean,default:!1},pagination:{type:Boolean,default:!1},continuous:{type:Boolean,default:!0}},emits:["update:modelValue"],setup(o,{emit:h}){const a=o;let p;const B=m(0),d=m(0),_=m(null),t=m(null),e=w({get(){return a.modelValue!==void 0?a.modelValue:B.value},set(s){a.modelValue!==void 0?h("update:modelValue",s):B.value=s}}),F=w(()=>a.continuous||e.value<d.value-1),M=w(()=>a.continuous||e.value>0);C(e,(s,l)=>{k(s,l)}),C(()=>a.autoplay,s=>{s&&a.duration>0?(c(),y()):c()}),C(()=>a.duration,s=>{a.autoplay&&(s>0?(c(),y()):c())});const j=s=>{e.value=s},b=()=>{e.value===d.value-1?a.continuous&&(e.value=0):e.value=e.value+1},O=()=>{e.value===0?a.continuous&&(e.value=d.value-1):e.value=e.value-1},y=()=>{p=setInterval(()=>{b()},a.duration)},c=()=>{p&&clearInterval(p)},k=(s,l)=>{if(t.value){e.value=s;const u=s<l,v=u?"slide-out-reverse":"slide-out",I=u?"slide-in-reverse":"slide-in";u?(t.value[l].classList.add("reverse"),t.value[e.value].classList.add("reverse")):(t.value[l].classList.remove("reverse"),t.value[e.value].classList.remove("reverse")),l!==s&&(t.value[l].classList.remove("slide-in","slide-in-reverse"),t.value[l].classList.add(v),setTimeout(()=>{t.value[l].classList.remove("active")},500)),t.value[e.value].classList.remove("slide-out","slide-out-reverse"),t.value[e.value].classList.add(I),t.value[e.value].classList.add("active")}};return(()=>{a.autoplay&&y()})(),T(()=>{if(_.value){const s=e.value,l=_.value.querySelectorAll(".carousel-item");l.length&&(d.value=l.length,t.value=[...l],t.value.forEach(u=>{u.classList.contains("active")&&(e.value=t.value.indexOf(u))}),k(e.value,s))}}),D(()=>{clearInterval(p)}),(s,l)=>(n(),r("div",{ref_key:"container",ref:_,class:"ds-relative ds-min-h-[6rem] ds-w-full ds-overflow-x-hidden ds-rounded-lg"},[i("div",W,[q(s.$slots,"default",{},void 0,!0)]),a.navigation?(n(),r(x,{key:0},[M.value?(n(),r("div",{key:0,class:"carousel-navigation--left",onClick:O},K)):f("",!0),F.value?(n(),r("div",{key:1,class:"carousel-navigation--right",onClick:b},X)):f("",!0)],64)):f("",!0),a.pagination?(n(),r("div",Y,[(n(!0),r(x,null,R(d.value,(u,v)=>(n(),r("span",{key:v,class:G({"ds-bg-gradient-to-r ds-from-primary-f ds-from-primary-f-stop ds-to-primary-t":v===e.value}),onClick:I=>j(v)},null,10,Z))),128))])):f("",!0)],512))}});const A=N($,[["__scopeId","data-v-6a2d59df"]]);$.__docgenInfo={exportName:"default",displayName:"BCarousel",description:"",tags:{},props:[{name:"modelValue",description:"Index of slide.",required:!1,type:{name:"number"},defaultValue:{func:!1,value:"undefined"}},{name:"autoplay",description:"Automatically go to the next slide every 5s (default).",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"duration",description:"Waiting time before going to the next slide.",required:!1,type:{name:"number"},defaultValue:{func:!1,value:"5000"}},{name:"navigation",description:"Show navigation controls.",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"pagination",description:"Show bottom controls.",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"continuous",description:"Return to the first slide after reaching the end.",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"true"}}],slots:[{name:"default"}],sourceFiles:["/home/runner/work/design-system/design-system/src/components/BCarousel/BCarousel.vue"]};const E={},ee={class:"carousel-item"};function se(o,h){return n(),r("div",ee,[q(o.$slots,"default",{},void 0,!0)])}const ae=N(E,[["render",se],["__scopeId","data-v-36f0b6c6"]]);E.__docgenInfo={displayName:"BCarouselItem",description:"",tags:{},slots:[{name:"default"}],sourceFiles:["/home/runner/work/design-system/design-system/src/components/BCarousel/BCarouselItem.vue"]};const ne={title:"Components/Carousel",component:A,tags:["autodocs"],argTypes:{modelValue:{control:"select",options:[0,1,2]}},args:{duration:5e3,continuous:!0,autoplay:!0,pagination:!0,navigation:!0}},g={render:o=>({components:{BCarousel:A,BCarouselItem:ae},setup(){return{args:o,carouselSlides:["https://wallpapers.com/images/hd/river-and-trees-nature-227nqf2r0aa2xguq.webp","https://wallpapers.com/images/hd/lake-in-the-forest-nature-xavnq3nwry0es5if.webp","https://wallpapers.com/images/hd/attractive-lake-nature-pczghhhvhzi0yf7t.webp"]}},template:`
      <BCarousel v-bind="args" style="height: 400px">
        <BCarouselItem v-for="(slide, index) in carouselSlides" :key="index">
          <img :src="slide" class="rounded-lg object-cover" alt="" />
        </BCarouselItem>
      </BCarousel>
    `}),args:{}};var V,L,S;g.parameters={...g.parameters,docs:{...(V=g.parameters)==null?void 0:V.docs,source:{originalSource:`{
  render: (args: any) => ({
    components: {
      BCarousel,
      BCarouselItem
    },
    setup() {
      const carouselSlides = ['https://wallpapers.com/images/hd/river-and-trees-nature-227nqf2r0aa2xguq.webp', 'https://wallpapers.com/images/hd/lake-in-the-forest-nature-xavnq3nwry0es5if.webp', 'https://wallpapers.com/images/hd/attractive-lake-nature-pczghhhvhzi0yf7t.webp'];
      return {
        args,
        carouselSlides
      };
    },
    template: \`
      <BCarousel v-bind="args" style="height: 400px">
        <BCarouselItem v-for="(slide, index) in carouselSlides" :key="index">
          <img :src="slide" class="rounded-lg object-cover" alt="" />
        </BCarouselItem>
      </BCarousel>
    \`
  }),
  args: {}
}`,...(S=(L=g.parameters)==null?void 0:L.docs)==null?void 0:S.source}}};const re=["Default"];export{g as Default,re as __namedExportsOrder,ne as default};