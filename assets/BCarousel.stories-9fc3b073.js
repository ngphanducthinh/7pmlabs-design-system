import{j as E,e as v,k as y,z as b,B as O,g as P,o as n,b as r,l as i,d as N,F as V,m as f,D as R,n as U,L as W,M as G}from"./vue.esm-bundler-e1583b10.js";import{_ as S}from"./_plugin-vue_export-helper-c27b6911.js";const j=o=>(W("data-v-826818c4"),o=o(),G(),o),H={class:"carousel-content"},J=j(()=>i("div",{class:"ds-cursor-pointer ds-rounded-full ds-bg-primary-f/40 ds-p-2 hover:ds-bg-primary-f/70"},[i("svg",{class:"ds-h-5 ds-w-5 ds-fill-white",viewBox:"0 0 320 512",xmlns:"http://www.w3.org/2000/svg"},[i("path",{d:"M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l192 192c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256 246.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192z"})])],-1)),K=[J],Q=j(()=>i("div",{class:"ds-cursor-pointer ds-rounded-full ds-bg-primary-f/40 ds-p-2 hover:ds-bg-primary-f/70"},[i("svg",{class:"ds-h-5 ds-w-5 ds-fill-white",viewBox:"0 0 320 512",xmlns:"http://www.w3.org/2000/svg"},[i("path",{d:"M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z"})])],-1)),X=[Q],Y={key:1,class:"carousel-pagination"},Z=["onClick"],z=E({__name:"BCarousel",props:{modelValue:{default:void 0},autoplay:{type:Boolean,default:!1},duration:{default:5e3},navigation:{type:Boolean,default:!1},pagination:{type:Boolean,default:!1},continuous:{type:Boolean,default:!0}},emits:["update:modelValue"],setup(o,{emit:C}){const a=o;let p;const w=v(0),d=v(0),h=v(null),t=v(null),e=y({get(){return a.modelValue!==void 0?a.modelValue:w.value},set(s){a.modelValue!==void 0?C("update:modelValue",s):w.value=s}}),A=y(()=>a.continuous||e.value<d.value-1),M=y(()=>a.continuous||e.value>0);b(e,(s,l)=>{I(s,l)}),b(()=>a.autoplay,s=>{s&&a.duration>0?(c(),_()):c()}),b(()=>a.duration,s=>{a.autoplay&&(s>0?(c(),_()):c())});const T=s=>{e.value=s},B=()=>{e.value===d.value-1?a.continuous&&(e.value=0):e.value=e.value+1},D=()=>{e.value===0?a.continuous&&(e.value=d.value-1):e.value=e.value-1},_=()=>{p=setInterval(()=>{B()},a.duration)},c=()=>{p&&clearInterval(p)},I=(s,l)=>{if(t.value){e.value=s;const u=s<l,m=u?"slide-out-reverse":"slide-out",k=u?"slide-in-reverse":"slide-in";u?(t.value[l].classList.add("reverse"),t.value[e.value].classList.add("reverse")):(t.value[l].classList.remove("reverse"),t.value[e.value].classList.remove("reverse")),l!==s&&(t.value[l].classList.remove("slide-in","slide-in-reverse"),t.value[l].classList.add(m),setTimeout(()=>{t.value[l].classList.remove("active")},500)),t.value[e.value].classList.remove("slide-out","slide-out-reverse"),t.value[e.value].classList.add(k),t.value[e.value].classList.add("active")}};return(()=>{a.autoplay&&_()})(),O(()=>{if(h.value){const s=e.value,l=h.value.querySelectorAll(".carousel-item");l.length&&(d.value=l.length,t.value=[...l],t.value.forEach(u=>{u.classList.contains("active")&&(e.value=t.value.indexOf(u))}),I(e.value,s))}}),P(()=>{clearInterval(p)}),(s,l)=>(n(),r("div",{ref_key:"container",ref:h,class:"ds-relative ds-min-h-[6rem] ds-w-full ds-overflow-x-hidden ds-rounded-lg"},[i("div",H,[N(s.$slots,"default",{},void 0,!0)]),a.navigation?(n(),r(V,{key:0},[M.value?(n(),r("div",{key:0,class:"carousel-navigation--left",onClick:D},K)):f("",!0),A.value?(n(),r("div",{key:1,class:"carousel-navigation--right",onClick:B},X)):f("",!0)],64)):f("",!0),a.pagination?(n(),r("div",Y,[(n(!0),r(V,null,R(d.value,(u,m)=>(n(),r("span",{key:m,class:U({"ds-bg-gradient-to-r ds-from-primary-f ds-from-primary-f-stop ds-to-primary-t":m===e.value}),onClick:k=>T(m)},null,10,Z))),128))])):f("",!0)],512))}});const F=S(z,[["__scopeId","data-v-826818c4"]]);z.__docgenInfo={exportName:"default",displayName:"BCarousel",description:"",tags:{},props:[{name:"modelValue",description:"Index of slide.",required:!1,type:{name:"number"},defaultValue:{func:!1,value:"undefined"}},{name:"autoplay",description:"Automatically go to the next slide every 5s (default).",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"duration",description:"Waiting time before going to the next slide.",required:!1,type:{name:"number"},defaultValue:{func:!1,value:"5000"}},{name:"navigation",description:"Show navigation controls.",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"pagination",description:"Show bottom controls.",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"continuous",description:"Return to the first slide after reaching the end.",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"true"}}],events:[{name:"update:modelValue",type:{names:["number"]},description:"Update value, param: <code>value: number</code>",properties:[{type:{names:["mixed"]},description:"e"},{type:{names:["mixed"]},name:"value"}],tags:[{title:"param",type:{name:"mixed"},description:"e"},{title:"param",type:{name:"mixed"},name:"value"}]}],slots:[{name:"default"}],sourceFiles:["/home/runner/work/design-system/design-system/src/components/BCarousel/BCarousel.vue"]};const $={},ee={class:"carousel-item"};function se(o,C){return n(),r("div",ee,[N(o.$slots,"default",{},void 0,!0)])}const ae=S($,[["render",se],["__scopeId","data-v-a82242b4"]]);$.__docgenInfo={displayName:"BCarouselItem",description:"",tags:{},slots:[{name:"default"}],sourceFiles:["/home/runner/work/design-system/design-system/src/components/BCarousel/BCarouselItem.vue"]};const ne={title:"Components/Carousel",parameters:{docs:{description:{component:"The <code>BCarousel</code> component is used to display large numbers of visual content on a rotating timer."}}},component:F,tags:["autodocs"],argTypes:{modelValue:{control:"select",options:[0,1,2,3]}},args:{duration:5e3,continuous:!0,autoplay:!0,pagination:!0,navigation:!0}},g={render:o=>({components:{BCarousel:F,BCarouselItem:ae},setup(){return{args:o}},template:`
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
    `}),args:{}};var x,L,q;g.parameters={...g.parameters,docs:{...(x=g.parameters)==null?void 0:x.docs,source:{originalSource:`{
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
}`,...(q=(L=g.parameters)==null?void 0:L.docs)==null?void 0:q.source}}};const re=["Default"];export{g as Default,re as __namedExportsOrder,ne as default};
