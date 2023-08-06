import{j as E,b as p,k as y,y as C,B as O,g as T,o as n,d as u,m as B,e as N,F as V,p as f,D as U,n as J,J as K,K as R}from"./vue.esm-bundler-54bcf90c.js";import{_ as P}from"./_plugin-vue_export-helper-c27b6911.js";const q=o=>(K("data-v-9932b96f"),o=o(),R(),o),G={class:"carousel-content"},H=q(()=>B("i",{class:"fa-solid fa-chevron-left ds-bg-primary-f/50"},null,-1)),Q=[H],W=q(()=>B("i",{class:"fa-solid fa-chevron-right ds-bg-primary-f/50"},null,-1)),X=[W],Y={key:1,class:"carousel-pagination"},Z=["onClick"],j=E({__name:"BCarousel",props:{modelValue:{default:void 0},autoplay:{type:Boolean,default:!1},duration:{default:5e3},navigation:{type:Boolean,default:!1},pagination:{type:Boolean,default:!1},continuous:{type:Boolean,default:!0}},emits:["update:modelValue"],setup(o,{emit:_}){const s=o;let v;const b=p(0),i=p(0),g=p(null),t=p(null),e=y({get(){return s.modelValue!==void 0?s.modelValue:b.value},set(a){s.modelValue!==void 0?_("update:modelValue",a):b.value=a}}),F=y(()=>s.continuous||e.value<i.value-1),$=y(()=>s.continuous||e.value>0);C(e,(a,l)=>{I(a,l)}),C(()=>s.autoplay,a=>{a&&s.duration>0?(c(),h()):c()}),C(()=>s.duration,a=>{s.autoplay&&(a>0?(c(),h()):c())});const M=a=>{e.value=a},w=()=>{e.value===i.value-1?s.continuous&&(e.value=0):e.value=e.value+1},A=()=>{e.value===0?s.continuous&&(e.value=i.value-1):e.value=e.value-1},h=()=>{v=setInterval(()=>{w()},s.duration)},c=()=>{v&&clearInterval(v)},I=(a,l)=>{if(t.value){e.value=a;const r=a<l,d=r?"slide-out-reverse":"slide-out",k=r?"slide-in-reverse":"slide-in";r?(t.value[l].classList.add("reverse"),t.value[e.value].classList.add("reverse")):(t.value[l].classList.remove("reverse"),t.value[e.value].classList.remove("reverse")),l!==a&&(t.value[l].classList.remove("slide-in","slide-in-reverse"),t.value[l].classList.add(d),setTimeout(()=>{t.value[l].classList.remove("active")},500)),t.value[e.value].classList.remove("slide-out","slide-out-reverse"),t.value[e.value].classList.add(k),t.value[e.value].classList.add("active")}};return(()=>{s.autoplay&&h()})(),O(()=>{if(g.value){const a=e.value,l=g.value.querySelectorAll(".carousel-item");l.length&&(i.value=l.length,t.value=[...l],t.value.forEach(r=>{r.classList.contains("active")&&(e.value=t.value.indexOf(r))}),I(e.value,a))}}),T(()=>{clearInterval(v)}),(a,l)=>(n(),u("div",{ref_key:"container",ref:g,class:"ds-relative ds-min-h-[6rem] ds-w-full ds-overflow-x-hidden ds-rounded-lg"},[B("div",G,[N(a.$slots,"default",{},void 0,!0)]),s.navigation?(n(),u(V,{key:0},[$.value?(n(),u("div",{key:0,class:"carousel-navigation--left",onClick:A},Q)):f("",!0),F.value?(n(),u("div",{key:1,class:"carousel-navigation--right",onClick:w},X)):f("",!0)],64)):f("",!0),s.pagination?(n(),u("div",Y,[(n(!0),u(V,null,U(i.value,(r,d)=>(n(),u("span",{key:d,class:J({"ds-bg-gradient-to-r ds-from-primary-f ds-from-primary-f-stop ds-to-primary-t":d===e.value}),onClick:k=>M(d)},null,10,Z))),128))])):f("",!0)],512))}});const z=P(j,[["__scopeId","data-v-9932b96f"]]);j.__docgenInfo={exportName:"default",displayName:"BCarousel",description:"",tags:{},props:[{name:"modelValue",defaultValue:{func:!1,value:"undefined"}},{name:"autoplay",defaultValue:{func:!1,value:"false"}},{name:"duration",defaultValue:{func:!1,value:"5000"}},{name:"navigation",defaultValue:{func:!1,value:"false"}},{name:"pagination",defaultValue:{func:!1,value:"false"}},{name:"continuous",defaultValue:{func:!1,value:"true"}}],events:[{name:"update:modelValue"}],slots:[{name:"default"}],sourceFiles:["/Users/thinhnguyen/Downloads/Projects/7PMLabs/7pmlabs-design-system/src/components/BCarousel/BCarousel.vue"]};const D={},ee={class:"carousel-item"};function ae(o,_){return n(),u("div",ee,[N(o.$slots,"default",{},void 0,!0)])}const se=P(D,[["render",ae],["__scopeId","data-v-36f0b6c6"]]);D.__docgenInfo={displayName:"BCarouselItem",description:"",tags:{},slots:[{name:"default"}],sourceFiles:["/Users/thinhnguyen/Downloads/Projects/7PMLabs/7pmlabs-design-system/src/components/BCarousel/BCarouselItem.vue"]};const ne={title:"7PMLabs/Carousel",component:z,tags:["autodocs"],argTypes:{modelValue:{control:"select",options:[0,1,2]}},args:{duration:5e3,continuous:!0,autoplay:!1,pagination:!1,navigation:!1}},m={render:o=>({components:{BCarousel:z,BCarouselItem:se},setup(){return{args:o,carouselSlides:["https://wallpapers.com/images/hd/river-and-trees-nature-227nqf2r0aa2xguq.webp","https://wallpapers.com/images/hd/lake-in-the-forest-nature-xavnq3nwry0es5if.webp","https://wallpapers.com/images/hd/attractive-lake-nature-pczghhhvhzi0yf7t.webp"]}},template:`
      <BCarousel v-bind="args" style="height: 400px">
        <BCarouselItem v-for="(slide, index) in carouselSlides" :key="index">
          <img :src="slide" class="rounded-lg object-cover" alt="" />
        </BCarouselItem>
      </BCarousel>
    `}),args:{}};var L,S,x;m.parameters={...m.parameters,docs:{...(L=m.parameters)==null?void 0:L.docs,source:{originalSource:`{
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
}`,...(x=(S=m.parameters)==null?void 0:S.docs)==null?void 0:x.source}}};const ue=["Default"];export{m as Default,ue as __namedExportsOrder,ne as default};
//# sourceMappingURL=BCarousel.stories-e327c903.js.map
