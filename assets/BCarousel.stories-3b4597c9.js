import{d as E,p as m,a as y,x as C,y as O,z as T,o as n,b as u,e as B,g as S,F as k,f as p,u as U,n as R,A as G,B as H}from"./vue.esm-bundler-6fb7cc6f.js";import{_ as N}from"./_plugin-vue_export-helper-c27b6911.js";const P=o=>(G("data-v-ba86a12e"),o=o(),H(),o),J={class:"carousel-content"},K=P(()=>B("i",{class:"fa-solid fa-chevron-left ds-bg-primary-f/50"},null,-1)),Q=[K],W=P(()=>B("i",{class:"fa-solid fa-chevron-right ds-bg-primary-f/50"},null,-1)),X=[W],Y={key:1,class:"carousel-pagination"},Z=["onClick"],z=E({__name:"BCarousel",props:{modelValue:{default:void 0},autoplay:{type:Boolean,default:!1},duration:{default:5e3},navigation:{type:Boolean,default:!1},pagination:{type:Boolean,default:!1},continuous:{type:Boolean,default:!0}},emits:["update:modelValue"],setup(o,{emit:_}){const s=o;let v;const b=m(0),i=m(0),g=m(null),t=m(null),e=y({get(){return s.modelValue!==void 0?s.modelValue:b.value},set(a){s.modelValue!==void 0?_("update:modelValue",a):b.value=a}}),j=y(()=>s.continuous||e.value<i.value-1),A=y(()=>s.continuous||e.value>0);C(e,(a,l)=>{I(a,l)}),C(()=>s.autoplay,a=>{a&&s.duration>0?(c(),h()):c()}),C(()=>s.duration,a=>{s.autoplay&&(a>0?(c(),h()):c())});const D=a=>{e.value=a},w=()=>{e.value===i.value-1?s.continuous&&(e.value=0):e.value=e.value+1},M=()=>{e.value===0?s.continuous&&(e.value=i.value-1):e.value=e.value-1},h=()=>{v=setInterval(()=>{w()},s.duration)},c=()=>{v&&clearInterval(v)},I=(a,l)=>{if(t.value){e.value=a;const r=a<l,d=r?"slide-out-reverse":"slide-out",V=r?"slide-in-reverse":"slide-in";r?(t.value[l].classList.add("reverse"),t.value[e.value].classList.add("reverse")):(t.value[l].classList.remove("reverse"),t.value[e.value].classList.remove("reverse")),l!==a&&(t.value[l].classList.remove("slide-in","slide-in-reverse"),t.value[l].classList.add(d),setTimeout(()=>{t.value[l].classList.remove("active")},500)),t.value[e.value].classList.remove("slide-out","slide-out-reverse"),t.value[e.value].classList.add(V),t.value[e.value].classList.add("active")}};return(()=>{s.autoplay&&h()})(),O(()=>{if(g.value){const a=e.value,l=g.value.querySelectorAll(".carousel-item");l.length&&(i.value=l.length,t.value=[...l],t.value.forEach(r=>{r.classList.contains("active")&&(e.value=t.value.indexOf(r))}),I(e.value,a))}}),T(()=>{clearInterval(v)}),(a,l)=>(n(),u("div",{ref_key:"container",ref:g,class:"ds-relative ds-min-h-[6rem] ds-w-full ds-overflow-x-hidden ds-rounded-lg"},[B("div",J,[S(a.$slots,"default",{},void 0,!0)]),s.navigation?(n(),u(k,{key:0},[A.value?(n(),u("div",{key:0,class:"carousel-navigation--left",onClick:M},Q)):p("",!0),j.value?(n(),u("div",{key:1,class:"carousel-navigation--right",onClick:w},X)):p("",!0)],64)):p("",!0),s.pagination?(n(),u("div",Y,[(n(!0),u(k,null,U(i.value,(r,d)=>(n(),u("span",{key:d,class:R({"ds-bg-gradient-to-r ds-from-primary-f ds-from-primary-f-stop ds-to-primary-t":d===e.value}),onClick:V=>D(d)},null,10,Z))),128))])):p("",!0)],512))}});const F=N(z,[["__scopeId","data-v-ba86a12e"]]);z.__docgenInfo={exportName:"default",displayName:"BCarousel",description:"",tags:{},props:[{name:"modelValue",required:!1,type:{name:"number"},defaultValue:{func:!1,value:"undefined"}},{name:"autoplay",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"duration",required:!1,type:{name:"number"},defaultValue:{func:!1,value:"5000"}},{name:"navigation",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"pagination",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"continuous",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"true"}}],events:[{name:"update:modelValue"}],slots:[{name:"default"}],sourceFiles:["/Users/thinhnguyen/Downloads/Projects/7PMLabs/7pmlabs-design-system/src/components/BCarousel/BCarousel.vue"]};const $={},ee={class:"carousel-item"};function ae(o,_){return n(),u("div",ee,[S(o.$slots,"default",{},void 0,!0)])}const se=N($,[["render",ae],["__scopeId","data-v-36f0b6c6"]]);$.__docgenInfo={displayName:"BCarouselItem",description:"",tags:{},slots:[{name:"default"}],sourceFiles:["/Users/thinhnguyen/Downloads/Projects/7PMLabs/7pmlabs-design-system/src/components/BCarousel/BCarouselItem.vue"]};const ne={title:"7PMLabs/Carousel",component:F,tags:["autodocs"],argTypes:{modelValue:{control:"select",options:[0,1,2]}},args:{duration:5e3,continuous:!0}},f={render:o=>({components:{BCarousel:F,BCarouselItem:se},setup(){return{args:o,carouselSlides:["https://wallpapers.com/images/hd/river-and-trees-nature-227nqf2r0aa2xguq.webp","https://wallpapers.com/images/hd/lake-in-the-forest-nature-xavnq3nwry0es5if.webp","https://wallpapers.com/images/hd/attractive-lake-nature-pczghhhvhzi0yf7t.webp"]}},template:`
      <BCarousel v-bind="args" style="height: 400px">
        <BCarouselItem v-for="(slide, index) in carouselSlides" :key="index">
          <img :src="slide" class="rounded-lg object-cover" alt="" />
        </BCarouselItem>
      </BCarousel>
    `}),args:{}};var L,q,x;f.parameters={...f.parameters,docs:{...(L=f.parameters)==null?void 0:L.docs,source:{originalSource:`{
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
}`,...(x=(q=f.parameters)==null?void 0:q.docs)==null?void 0:x.source}}};const ue=["Default"];export{f as Default,ue as __namedExportsOrder,ne as default};
//# sourceMappingURL=BCarousel.stories-3b4597c9.js.map
