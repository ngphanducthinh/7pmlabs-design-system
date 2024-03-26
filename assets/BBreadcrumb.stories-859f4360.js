import{o,b as d,m as a,j as F,e as i,k as x,B as T,C as V,K as U,F as $,D as H,n as R,d as p,t as C,s as S,w as E,E as L,x as j,l as q,T as K}from"./vue.esm-bundler-0e9fd243.js";import{_ as P}from"./_plugin-vue_export-helper-c27b6911.js";import{v as G}from"./v4-4a60fe23.js";const A={},J={class:"ds-mb-0.5 ds-inline-block ds-h-3.5 ds-w-3.5 ds-fill-gray-500",viewBox:"0 0 320 512",xmlns:"http://www.w3.org/2000/svg"},Q=a("path",{d:"M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z"},null,-1),X=[Q];function Y(u,B){return o(),d("svg",J,X)}const N=P(A,[["render",Y]]);A.__docgenInfo={displayName:"BBreadcrumbSeparator",description:"",tags:{},sourceFiles:["/home/runner/work/design-system/design-system/src/components/BBreadcrumb/BBreadcrumbSeparator.vue"]};const Z=["href","title"],ee={"aria-hidden":"true",class:"ds-pl-2"},se=["id"],te=["href","title"],re={key:0,"aria-hidden":"true",class:"ds-pl-2"},g=F({__name:"BBreadcrumb",props:{items:{default:()=>[]}},setup(u){const B=u,c=i(!1),m=i(null),h=i(null),v=i(null),_=i(null),r=i([]),y=new ResizeObserver(()=>{if(r.value.length<=1)return;const s=m.value.clientWidth,l=v.value[0].clientWidth;for(let e=1;e<r.value.length&&r.value.reduce((t,n)=>n.hidden?t:t+n.width,0)+l>s;e++)r.value[e].hidden=!0;for(let e=r.value.length-1;e>=1;e--)if(r.value[e].hidden)if(r.value.reduce((t,n)=>n.hidden?t:t+n.width,0)+r.value[e].width+l<=s)r.value[e].hidden=!1;else break}),b=x(()=>r.value.some(s=>s.hidden)),w=x(()=>`menu-id-${G()}`),D=()=>{c.value=!c.value},I=()=>{document.addEventListener("click",k)},W=()=>{document.removeEventListener("click",k)},k=s=>{[v.value[0],_.value[0]].some(t=>s.composedPath().includes(t))||(c.value=!1)};return T(()=>{I(),y.observe(m.value),r.value=B.items.map(s=>({...s,hidden:!1,width:0})),V(()=>{r.value.forEach((s,l)=>{s.width=h.value[l].clientWidth})})}),U(()=>{W(),y.unobserve(m.value)}),(s,l)=>(o(),d("ul",{ref_key:"ulRef",ref:m,class:R([{collapsed:b.value},"ds-relative ds-flex"])},[(o(!0),d($,null,H(r.value,(e,t)=>{var n;return o(),d($,{key:`item${e.text}`},[t===0?(o(),d("li",{key:0,ref_for:!0,ref_key:"liRefs",ref:h,class:"ds-whitespace-nowrap ds-text-black/[0.85]"},[p(s.$slots,`item-${t}`,{item:e},()=>[a("a",{href:e.href,title:e.href,class:"ds-transition-colors hover:ds-text-primary-t"},C(e.text),9,Z)]),a("span",ee,[p(s.$slots,`separator-${t}`,{item:e},()=>[S(N)])]),a("div",{ref_for:!0,ref_key:"ellipsisRefs",ref:v,class:"ds-inline-block"},[E(a("button",{class:R([{"ds-bg-slate-50":c.value},"ds-ml-2 ds-rounded-lg ds-bg-slate-100 ds-px-2 ds-text-primary-t ds-transition-colors hover:ds-bg-slate-50"]),onClick:D}," ... ",2),[[L,b.value]]),E(a("ul",{id:w.value,ref_for:!0,ref_key:"ellipsisMenuRefs",ref:_,class:"ds-absolute ds-mt-1 ds-space-y-2 ds-rounded-lg ds-bg-white ds-p-4 ds-shadow"},null,8,se),[[L,b.value&&c.value]])],512)],512)):(o(),j(K,{key:1,disabled:!e.hidden,to:`#${w.value}`},[a("li",{ref_for:!0,ref_key:"liRefs",ref:h,class:"ds-whitespace-nowrap ds-pl-2 ds-text-black/[0.85]"},[p(s.$slots,`item-${t}`,{item:e},()=>[a("a",{href:e.href,title:e.href,class:"ds-transition-colors hover:ds-text-primary-t"},C(e.text),9,te)]),t<((n=s.items)==null?void 0:n.length)-1?(o(),d("span",re,[p(s.$slots,`separator-${t}`,{item:e},()=>[S(N)])])):q("",!0)],512)],8,["disabled","to"]))],64)}),128))],2))}});g.__docgenInfo={exportName:"default",displayName:"BBreadcrumb",description:"",tags:{},props:[{name:"items",description:"Array of breadcrumb items.",required:!1,type:{name:"Array",elements:[{name:"BBreadcrumbItem"}]},defaultValue:{func:!1,value:"() => []"}}],slots:[{name:"`item-${index}`",scoped:!0,bindings:[{name:"item",title:"binding"},{name:"name",title:"binding"}]},{name:"`separator-${index}`",scoped:!0,bindings:[{name:"item",title:"binding"},{name:"name",title:"binding"}]}],sourceFiles:["/home/runner/work/design-system/design-system/src/components/BBreadcrumb/BBreadcrumb.vue"]};const le={title:"Components/Breadcrumb",parameters:{docs:{description:{component:"The <code>BBreadcrumb</code> component is used as a responsive navigational helper and hierarchy for pages."}}},component:g,tags:["autodocs"],args:{}},f={render:u=>({components:{BBreadcrumb:g},setup(){return{args:u}},template:`
      <div class="ds-shadow ds-rounded-lg ds-p-5">
          <BBreadcrumb v-bind="args">
          </BBreadcrumb>
      </div>
      <div style="font-size: 0.75rem; color: gray; margin-top: 1rem; margin-bottom: 60px">
        Breadcrumb items will be hidden selectively on smaller screen.
      </div>
    `}),args:{items:[{text:"Home",href:"/"},{text:"Location",href:"#location"},{text:"North America",href:"#location/north-america"},{text:"United States of America",href:"#location/north-america/usa"}]}};var M,O,z;f.parameters={...f.parameters,docs:{...(M=f.parameters)==null?void 0:M.docs,source:{originalSource:`{
  render: (args: any) => ({
    components: {
      BBreadcrumb
    },
    setup() {
      return {
        args
      };
    },
    template: \`
      <div class="ds-shadow ds-rounded-lg ds-p-5">
          <BBreadcrumb v-bind="args">
          </BBreadcrumb>
      </div>
      <div style="font-size: 0.75rem; color: gray; margin-top: 1rem; margin-bottom: 60px">
        Breadcrumb items will be hidden selectively on smaller screen.
      </div>
    \`
  }),
  args: {
    items: [{
      text: 'Home',
      href: '/'
    }, {
      text: 'Location',
      href: '#location'
    }, {
      text: 'North America',
      href: '#location/north-america'
    }, {
      text: 'United States of America',
      href: '#location/north-america/usa'
    }]
  }
}`,...(z=(O=f.parameters)==null?void 0:O.docs)==null?void 0:z.source}}};const ie=["Default"];export{f as Default,ie as __namedExportsOrder,le as default};
