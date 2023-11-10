import{j as O,b as m,k as y,C,E as T,g as U,o as u,d as n,l as B,e as N,F as b,m as p,G as M,n as G,L as R,M as H}from"./vue.esm-bundler-f0a4de28.js";import{_ as q}from"./_plugin-vue_export-helper-c27b6911.js";const j=o=>(R("data-v-dd213d56"),o=o(),H(),o),J={class:"carousel-content"},K=j(()=>B("i",{class:"fa-solid fa-chevron-left ds-bg-primary-f/50"},null,-1)),Q=[K],W=j(()=>B("i",{class:"fa-solid fa-chevron-right ds-bg-primary-f/50"},null,-1)),X=[W],Y={key:1,class:"carousel-pagination"},Z=["onClick"],z=O({__name:"BCarousel",props:{modelValue:{default:void 0},autoplay:{type:Boolean,default:!1},duration:{default:5e3},navigation:{type:Boolean,default:!1},pagination:{type:Boolean,default:!1},continuous:{type:Boolean,default:!0}},emits:["update:modelValue"],setup(o,{emit:_}){const s=o;let v;const w=m(0),i=m(0),g=m(null),t=m(null),e=y({get(){return s.modelValue!==void 0?s.modelValue:w.value},set(a){s.modelValue!==void 0?_("update:modelValue",a):w.value=a}}),$=y(()=>s.continuous||e.value<i.value-1),D=y(()=>s.continuous||e.value>0);C(e,(a,l)=>{k(a,l)}),C(()=>s.autoplay,a=>{a&&s.duration>0?(c(),h()):c()}),C(()=>s.duration,a=>{s.autoplay&&(a>0?(c(),h()):c())});const E=a=>{e.value=a},I=()=>{e.value===i.value-1?s.continuous&&(e.value=0):e.value=e.value+1},A=()=>{e.value===0?s.continuous&&(e.value=i.value-1):e.value=e.value-1},h=()=>{v=setInterval(()=>{I()},s.duration)},c=()=>{v&&clearInterval(v)},k=(a,l)=>{if(t.value){e.value=a;const r=a<l,d=r?"slide-out-reverse":"slide-out",V=r?"slide-in-reverse":"slide-in";r?(t.value[l].classList.add("reverse"),t.value[e.value].classList.add("reverse")):(t.value[l].classList.remove("reverse"),t.value[e.value].classList.remove("reverse")),l!==a&&(t.value[l].classList.remove("slide-in","slide-in-reverse"),t.value[l].classList.add(d),setTimeout(()=>{t.value[l].classList.remove("active")},500)),t.value[e.value].classList.remove("slide-out","slide-out-reverse"),t.value[e.value].classList.add(V),t.value[e.value].classList.add("active")}};return(()=>{s.autoplay&&h()})(),T(()=>{if(g.value){const a=e.value,l=g.value.querySelectorAll(".carousel-item");l.length&&(i.value=l.length,t.value=[...l],t.value.forEach(r=>{r.classList.contains("active")&&(e.value=t.value.indexOf(r))}),k(e.value,a))}}),U(()=>{clearInterval(v)}),(a,l)=>(u(),n("div",{ref_key:"container",ref:g,class:"ds-relative ds-min-h-[6rem] ds-w-full ds-overflow-x-hidden ds-rounded-lg"},[B("div",J,[N(a.$slots,"default",{},void 0,!0)]),s.navigation?(u(),n(b,{key:0},[D.value?(u(),n("div",{key:0,class:"carousel-navigation--left",onClick:A},Q)):p("",!0),$.value?(u(),n("div",{key:1,class:"carousel-navigation--right",onClick:I},X)):p("",!0)],64)):p("",!0),s.pagination?(u(),n("div",Y,[(u(!0),n(b,null,M(i.value,(r,d)=>(u(),n("span",{key:d,class:G({"ds-bg-gradient-to-r ds-from-primary-f ds-from-primary-f-stop ds-to-primary-t":d===e.value}),onClick:V=>E(d)},null,10,Z))),128))])):p("",!0)],512))}});const F=q(z,[["__scopeId","data-v-dd213d56"]]);z.__docgenInfo={exportName:"default",displayName:"BCarousel",description:"",tags:{},props:[{name:"modelValue",defaultValue:{func:!1,value:"undefined"}},{name:"autoplay",defaultValue:{func:!1,value:"false"}},{name:"duration",defaultValue:{func:!1,value:"5000"}},{name:"navigation",defaultValue:{func:!1,value:"false"}},{name:"pagination",defaultValue:{func:!1,value:"false"}},{name:"continuous",defaultValue:{func:!1,value:"true"}}],events:[{name:"update:modelValue"}],slots:[{name:"default"}],sourceFiles:["/Users/thinhnguyen/Documents/Projects/7pmlabs/design-system/src/components/BCarousel/BCarousel.vue"]};const P={},ee={class:"carousel-item"};function ae(o,_){return u(),n("div",ee,[N(o.$slots,"default",{},void 0,!0)])}const se=q(P,[["render",ae],["__scopeId","data-v-36f0b6c6"]]);P.__docgenInfo={displayName:"BCarouselItem",description:"",tags:{},slots:[{name:"default"}],sourceFiles:["/Users/thinhnguyen/Documents/Projects/7pmlabs/design-system/src/components/BCarousel/BCarouselItem.vue"]};const ue={title:"Components/Carousel",component:F,tags:["autodocs"],argTypes:{modelValue:{control:"select",options:[0,1,2]}},args:{duration:5e3,continuous:!0,autoplay:!0,pagination:!0,navigation:!0}},f={render:o=>({components:{BCarousel:F,BCarouselItem:se},setup(){return{args:o,carouselSlides:["https://wallpapers.com/images/hd/river-and-trees-nature-227nqf2r0aa2xguq.webp","https://wallpapers.com/images/hd/lake-in-the-forest-nature-xavnq3nwry0es5if.webp","https://wallpapers.com/images/hd/attractive-lake-nature-pczghhhvhzi0yf7t.webp"]}},template:`
      <BCarousel v-bind="args" style="height: 400px">
        <BCarouselItem v-for="(slide, index) in carouselSlides" :key="index">
          <img :src="slide" class="rounded-lg object-cover" alt="" />
        </BCarouselItem>
      </BCarousel>
    `}),args:{}};var L,S,x;f.parameters={...f.parameters,docs:{...(L=f.parameters)==null?void 0:L.docs,source:{originalSource:`{
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
}`,...(x=(S=f.parameters)==null?void 0:S.docs)==null?void 0:x.source}}};const ne=["Default"];export{f as Default,ne as __namedExportsOrder,ue as default};
//# sourceMappingURL=BCarousel.stories-71ea3634.js.map
