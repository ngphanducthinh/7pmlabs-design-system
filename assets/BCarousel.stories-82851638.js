import{e as q,a as w,f as g,w as h,s as j,d as z,p as R,o as r,c as u,h as i,r as F,F as x,g as b,x as U,z as K,n as W,b as G}from"./vue.esm-bundler-ceeda665.js";import{P}from"./Common-74b424b5.js";import{_ as T}from"./_plugin-vue_export-helper-c27b6911.js";const H={class:"ds-relative ds-min-h-[6rem] ds-w-full ds-overflow-x-hidden ds-rounded-lg"},J={class:"carousel-content"},Q={key:1,class:"carousel-pagination"},X=["onClick"],S=q({__name:"BCarousel",props:{modelValue:{default:void 0},autoplay:{type:Boolean,default:!1},duration:{default:5e3},navigation:{type:Boolean,default:!1},pagination:{type:Boolean,default:!1},continuous:{type:Boolean,default:!0}},emits:["update:modelValue"],setup(v,{emit:n}){const s=v,d=n;let c;const B=w(0),l=w([]),o=g(()=>l.value.length),e=g({get(){return s.modelValue!==void 0?s.modelValue:B.value},set(a){s.modelValue!==void 0?d("update:modelValue",a):B.value=a}}),M=g(()=>s.continuous||e.value<o.value-1),O=g(()=>s.continuous||e.value>0);h(e,(a,t)=>{C(a,t)}),h(o,()=>{const a=o.value-1;e.value>a&&C(a,a)}),h(()=>s.autoplay,a=>{a&&s.duration>0?(m(),_()):m()}),h(()=>s.duration,a=>{s.autoplay&&(a>0?(m(),_()):m())});const D=a=>{e.value=a},I=()=>{e.value===o.value-1?s.continuous&&(e.value=0):e.value=e.value+1},E=()=>{e.value===0?s.continuous&&(e.value=o.value-1):e.value=e.value-1},_=()=>{c=setInterval(()=>{I()},s.duration)},m=()=>{c&&clearInterval(c)},C=async(a,t)=>{if(o.value>0&&o.value>a&&o.value>t){e.value=a,await K();const f=a<t,p=f?"slide-out-reverse":"slide-out",k=f?"slide-in-reverse":"slide-in";f?(l.value[t].classList.add("reverse"),l.value[e.value].classList.add("reverse")):(l.value[t].classList.remove("reverse"),l.value[e.value].classList.remove("reverse")),t!==a&&(l.value[t].classList.remove("slide-in","slide-in-reverse"),l.value[t].classList.add(p),setTimeout(()=>{l.value[t].classList.remove("active")},500)),l.value[e.value].classList.remove("slide-out","slide-out-reverse"),l.value[e.value].classList.add(k),l.value[e.value].classList.add("active")}};return(()=>{s.autoplay&&_()})(),j(()=>{C(e.value,e.value)}),z(()=>{clearInterval(c)}),R(P.Carousel,l),(a,t)=>(r(),u("div",H,[i("div",J,[F(a.$slots,"default",{},void 0,!0)]),s.navigation?(r(),u(x,{key:0},[O.value?(r(),u("div",{key:0,class:"carousel-navigation--left",onClick:E},t[0]||(t[0]=[i("div",{class:"ds-cursor-pointer ds-rounded-full ds-bg-primary-f/40 ds-p-2 hover:ds-bg-primary-f/70"},[i("svg",{class:"ds-h-5 ds-w-5 ds-fill-white",viewBox:"0 0 320 512",xmlns:"http://www.w3.org/2000/svg"},[i("path",{d:"M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l192 192c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256 246.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192z"})])],-1)]))):b("",!0),M.value?(r(),u("div",{key:1,class:"carousel-navigation--right",onClick:I},t[1]||(t[1]=[i("div",{class:"ds-cursor-pointer ds-rounded-full ds-bg-primary-f/40 ds-p-2 hover:ds-bg-primary-f/70"},[i("svg",{class:"ds-h-5 ds-w-5 ds-fill-white",viewBox:"0 0 320 512",xmlns:"http://www.w3.org/2000/svg"},[i("path",{d:"M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z"})])],-1)]))):b("",!0)],64)):b("",!0),s.pagination?(r(),u("div",Q,[(r(!0),u(x,null,U(o.value,(f,p)=>(r(),u("span",{key:p,class:W({"ds-bg-gradient-to-r ds-from-primary-f ds-from-primary-f-stop ds-to-primary-t":p===e.value}),onClick:k=>D(p)},null,10,X))),128))])):b("",!0)]))}});const $=T(S,[["__scopeId","data-v-b5c5062f"]]);S.__docgenInfo={exportName:"default",displayName:"BCarousel",description:"",tags:{},props:[{name:"modelValue",description:"Index of slide.",required:!1,type:{name:"number"},defaultValue:{func:!1,value:"undefined"}},{name:"autoplay",description:"Automatically go to the next slide every 5s (default).",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"duration",description:"Waiting time before going to the next slide.",required:!1,type:{name:"number"},defaultValue:{func:!1,value:"5000"}},{name:"navigation",description:"Show navigation controls.",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"pagination",description:"Show bottom controls.",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"continuous",description:"Return to the first slide after reaching the end.",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"true"}}],events:[{name:"update:modelValue",type:{names:["number"]},description:"Update value, param: <code>value: number</code>",properties:[{type:{names:["mixed"]},description:"e"},{type:{names:["mixed"]},name:"value"}],tags:[{title:"param",type:{name:"mixed"},description:"e"},{title:"param",type:{name:"mixed"},name:"value"}]}],slots:[{name:"default"}],sourceFiles:["/home/runner/work/design-system/design-system/src/components/BCarousel/BCarousel.vue"]};const A=q({__name:"BCarouselItem",setup(v){const n=w(null),s=G(P.Carousel);return j(()=>{s&&n.value&&s.value.push(n.value)}),z(()=>{if(s&&n.value){const d=s.value.indexOf(n.value);s.value.splice(d,1)}}),(d,c)=>(r(),u("div",{ref_key:"carouselItem",ref:n,class:"carousel-item"},[F(d.$slots,"default",{},void 0,!0)],512))}});const Y=T(A,[["__scopeId","data-v-6f2b0dc4"]]);A.__docgenInfo={exportName:"default",displayName:"BCarouselItem",description:"",tags:{},slots:[{name:"default"}],sourceFiles:["/home/runner/work/design-system/design-system/src/components/BCarousel/BCarouselItem.vue"]};const te={title:"Components/Carousel",parameters:{docs:{description:{component:"The <code>BCarousel</code> component is used to display large numbers of visual content on a rotating timer."}}},component:$,tags:["autodocs"],argTypes:{modelValue:{control:"select",options:[0,1,2,3]}},args:{duration:5e3,continuous:!0,autoplay:!0,pagination:!0,navigation:!0}},y={render:v=>({components:{BCarousel:$,BCarouselItem:Y},setup(){return{args:v}},template:`
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
    `}),args:{}};var V,L,N;y.parameters={...y.parameters,docs:{...(V=y.parameters)==null?void 0:V.docs,source:{originalSource:`{
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
}`,...(N=(L=y.parameters)==null?void 0:L.docs)==null?void 0:N.source}}};const le=["Default"];export{y as Default,le as __namedExportsOrder,te as default};
