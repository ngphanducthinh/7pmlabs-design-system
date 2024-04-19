import{d as N,a as w,e as g,m as h,q as j,b as S,p as U,o as r,c as u,g as d,r as z,F as x,f as _,x as G,s as H,n as K,G as W,H as J,i as Q}from"./vue.esm-bundler-91340787.js";import{P as F}from"./Common-74b424b5.js";import{_ as P}from"./_plugin-vue_export-helper-c27b6911.js";const T=n=>(W("data-v-b5c5062f"),n=n(),J(),n),X={class:"ds-relative ds-min-h-[6rem] ds-w-full ds-overflow-x-hidden ds-rounded-lg"},Y={class:"carousel-content"},Z=T(()=>d("div",{class:"ds-cursor-pointer ds-rounded-full ds-bg-primary-f/40 ds-p-2 hover:ds-bg-primary-f/70"},[d("svg",{class:"ds-h-5 ds-w-5 ds-fill-white",viewBox:"0 0 320 512",xmlns:"http://www.w3.org/2000/svg"},[d("path",{d:"M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l192 192c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256 246.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192z"})])],-1)),ee=[Z],se=T(()=>d("div",{class:"ds-cursor-pointer ds-rounded-full ds-bg-primary-f/40 ds-p-2 hover:ds-bg-primary-f/70"},[d("svg",{class:"ds-h-5 ds-w-5 ds-fill-white",viewBox:"0 0 320 512",xmlns:"http://www.w3.org/2000/svg"},[d("path",{d:"M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z"})])],-1)),ae=[se],te={key:1,class:"carousel-pagination"},le=["onClick"],$=N({__name:"BCarousel",props:{modelValue:{default:void 0},autoplay:{type:Boolean,default:!1},duration:{default:5e3},navigation:{type:Boolean,default:!1},pagination:{type:Boolean,default:!1},continuous:{type:Boolean,default:!0}},emits:["update:modelValue"],setup(n,{emit:i}){const s=n,c=i;let m;const B=w(0),t=w([]),o=g(()=>t.value.length),e=g({get(){return s.modelValue!==void 0?s.modelValue:B.value},set(a){s.modelValue!==void 0?c("update:modelValue",a):B.value=a}}),O=g(()=>s.continuous||e.value<o.value-1),D=g(()=>s.continuous||e.value>0);h(e,(a,l)=>{C(a,l)}),h(o,()=>{const a=o.value-1;e.value>a&&C(a,a)}),h(()=>s.autoplay,a=>{a&&s.duration>0?(p(),y()):p()}),h(()=>s.duration,a=>{s.autoplay&&(a>0?(p(),y()):p())});const E=a=>{e.value=a},I=()=>{e.value===o.value-1?s.continuous&&(e.value=0):e.value=e.value+1},R=()=>{e.value===0?s.continuous&&(e.value=o.value-1):e.value=e.value-1},y=()=>{m=setInterval(()=>{I()},s.duration)},p=()=>{m&&clearInterval(m)},C=async(a,l)=>{if(o.value>0&&o.value>a&&o.value>l){e.value=a,await H();const f=a<l,v=f?"slide-out-reverse":"slide-out",k=f?"slide-in-reverse":"slide-in";f?(t.value[l].classList.add("reverse"),t.value[e.value].classList.add("reverse")):(t.value[l].classList.remove("reverse"),t.value[e.value].classList.remove("reverse")),l!==a&&(t.value[l].classList.remove("slide-in","slide-in-reverse"),t.value[l].classList.add(v),setTimeout(()=>{t.value[l].classList.remove("active")},500)),t.value[e.value].classList.remove("slide-out","slide-out-reverse"),t.value[e.value].classList.add(k),t.value[e.value].classList.add("active")}};return(()=>{s.autoplay&&y()})(),j(()=>{C(e.value,e.value)}),S(()=>{clearInterval(m)}),U(F.Carousel,t),(a,l)=>(r(),u("div",X,[d("div",Y,[z(a.$slots,"default",{},void 0,!0)]),s.navigation?(r(),u(x,{key:0},[D.value?(r(),u("div",{key:0,class:"carousel-navigation--left",onClick:R},ee)):_("",!0),O.value?(r(),u("div",{key:1,class:"carousel-navigation--right",onClick:I},ae)):_("",!0)],64)):_("",!0),s.pagination?(r(),u("div",te,[(r(!0),u(x,null,G(o.value,(f,v)=>(r(),u("span",{key:v,class:K({"ds-bg-gradient-to-r ds-from-primary-f ds-from-primary-f-stop ds-to-primary-t":v===e.value}),onClick:k=>E(v)},null,10,le))),128))])):_("",!0)]))}});const A=P($,[["__scopeId","data-v-b5c5062f"]]);$.__docgenInfo={exportName:"default",displayName:"BCarousel",description:"",tags:{},props:[{name:"modelValue",description:"Index of slide.",required:!1,type:{name:"number"},defaultValue:{func:!1,value:"undefined"}},{name:"autoplay",description:"Automatically go to the next slide every 5s (default).",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"duration",description:"Waiting time before going to the next slide.",required:!1,type:{name:"number"},defaultValue:{func:!1,value:"5000"}},{name:"navigation",description:"Show navigation controls.",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"pagination",description:"Show bottom controls.",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"continuous",description:"Return to the first slide after reaching the end.",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"true"}}],events:[{name:"update:modelValue",type:{names:["number"]},description:"Update value, param: <code>value: number</code>",properties:[{type:{names:["mixed"]},description:"e"},{type:{names:["mixed"]},name:"value"}],tags:[{title:"param",type:{name:"mixed"},description:"e"},{title:"param",type:{name:"mixed"},name:"value"}]}],slots:[{name:"default"}],sourceFiles:["/home/runner/work/design-system/design-system/src/components/BCarousel/BCarousel.vue"]};const M=N({__name:"BCarouselItem",setup(n){const i=w(null),s=Q(F.Carousel);return j(()=>{s&&i.value&&s.value.push(i.value)}),S(()=>{if(s&&i.value){const c=s.value.indexOf(i.value);s.value.splice(c,1)}}),(c,m)=>(r(),u("div",{ref_key:"carouselItem",ref:i,class:"carousel-item"},[z(c.$slots,"default",{},void 0,!0)],512))}});const oe=P(M,[["__scopeId","data-v-6f2b0dc4"]]);M.__docgenInfo={exportName:"default",displayName:"BCarouselItem",description:"",tags:{},slots:[{name:"default"}],sourceFiles:["/home/runner/work/design-system/design-system/src/components/BCarousel/BCarouselItem.vue"]};const de={title:"Components/Carousel",parameters:{docs:{description:{component:"The <code>BCarousel</code> component is used to display large numbers of visual content on a rotating timer."}}},component:A,tags:["autodocs"],argTypes:{modelValue:{control:"select",options:[0,1,2,3]}},args:{duration:5e3,continuous:!0,autoplay:!0,pagination:!0,navigation:!0}},b={render:n=>({components:{BCarousel:A,BCarouselItem:oe},setup(){return{args:n}},template:`
      <BCarousel v-bind="args" style="height: 400px">
        <BCarouselItem>
          <div
            class="ds-h-full ds-bg-no-repeat ds-bg-cover ds-bg-[url('https://wallpapers.com/images/hd/elegant-feline-in-soft-natural-light-00nbm86akvtczty6.webp')]" />
        </BCarouselItem>
        <BCarouselItem>
          <div
            class="ds-h-full ds-bg-no-repeat ds-bg-cover ds-bg-[url('https://wallpapers.com/images/hd/colorful-love-birds-0ctuhn6r2rubq7v3.webp')]" />
        </BCarouselItem>
        <BCarouselItem>
          <div
            class="ds-h-full ds-bg-no-repeat ds-bg-cover ds-bg-[url('https://wallpapers.com/images/high/dog-underwater-swimming-2siawk4nemp214kj.webp')]" />
        </BCarouselItem>
        <BCarouselItem>
          <div
            class="ds-h-full ds-bg-no-repeat ds-bg-cover ds-bg-[url('https://wallpapers.com/images/high/three-teen-lions-9xiimjysh7htjow3.webp')]" />
        </BCarouselItem>
      </BCarousel>
    `}),args:{}};var V,L,q;b.parameters={...b.parameters,docs:{...(V=b.parameters)==null?void 0:V.docs,source:{originalSource:`{
  render: (args: any) => ({
    components: {
      BCarousel,
      BCarouselItem
    },
    setup() {
      return {
        args
      };
    },
    template: \`
      <BCarousel v-bind="args" style="height: 400px">
        <BCarouselItem>
          <div
            class="ds-h-full ds-bg-no-repeat ds-bg-cover ds-bg-[url('https://wallpapers.com/images/hd/elegant-feline-in-soft-natural-light-00nbm86akvtczty6.webp')]" />
        </BCarouselItem>
        <BCarouselItem>
          <div
            class="ds-h-full ds-bg-no-repeat ds-bg-cover ds-bg-[url('https://wallpapers.com/images/hd/colorful-love-birds-0ctuhn6r2rubq7v3.webp')]" />
        </BCarouselItem>
        <BCarouselItem>
          <div
            class="ds-h-full ds-bg-no-repeat ds-bg-cover ds-bg-[url('https://wallpapers.com/images/high/dog-underwater-swimming-2siawk4nemp214kj.webp')]" />
        </BCarouselItem>
        <BCarouselItem>
          <div
            class="ds-h-full ds-bg-no-repeat ds-bg-cover ds-bg-[url('https://wallpapers.com/images/high/three-teen-lions-9xiimjysh7htjow3.webp')]" />
        </BCarouselItem>
      </BCarousel>
    \`
  }),
  args: {}
}`,...(q=(L=b.parameters)==null?void 0:L.docs)==null?void 0:q.source}}};const ce=["Default"];export{b as Default,ce as __namedExportsOrder,de as default};
