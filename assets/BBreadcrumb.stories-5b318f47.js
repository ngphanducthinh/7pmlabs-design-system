import{o as n,c as d,h as a,e as F,a as i,f as x,s as T,z as V,E as U,F as $,x as H,n as R,r as p,t as C,k as S,l as E,y as L,m as q,g as P,T as j}from"./vue.esm-bundler-ceeda665.js";import{_ as G}from"./_plugin-vue_export-helper-c27b6911.js";import{v as J}from"./v4-eb618527.js";const A={},K={class:"ds-mb-0.5 ds-inline-block ds-h-3.5 ds-w-3.5 ds-fill-gray-500",viewBox:"0 0 320 512",xmlns:"http://www.w3.org/2000/svg"};function Q(u,m){return n(),d("svg",K,m[0]||(m[0]=[a("path",{d:"M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z"},null,-1)]))}const N=G(A,[["render",Q]]);A.__docgenInfo={displayName:"BBreadcrumbSeparator",description:"",tags:{},sourceFiles:["/home/runner/work/design-system/design-system/src/components/BBreadcrumb/BBreadcrumbSeparator.vue"]};const X=["href","title"],Y={"aria-hidden":"true",class:"ds-pl-2"},Z=["id"],ee=["href","title"],se={key:0,"aria-hidden":"true",class:"ds-pl-2"},B=F({__name:"BBreadcrumb",props:{items:{default:()=>[]}},setup(u){const m=u,c=i(!1),f=i(null),v=i(null),b=i(null),_=i(null),t=i([]),y=new ResizeObserver(()=>{if(t.value.length<=1)return;const s=f.value.clientWidth,l=b.value[0].clientWidth;for(let e=1;e<t.value.length&&t.value.reduce((r,o)=>o.hidden?r:r+o.width,0)+l>s;e++)t.value[e].hidden=!0;for(let e=t.value.length-1;e>=1;e--)if(t.value[e].hidden)if(t.value.reduce((r,o)=>o.hidden?r:r+o.width,0)+t.value[e].width+l<=s)t.value[e].hidden=!1;else break}),g=x(()=>t.value.some(s=>s.hidden)),k=x(()=>`menu-id-${J()}`),I=()=>{c.value=!c.value},W=()=>{document.addEventListener("click",w)},D=()=>{document.removeEventListener("click",w)},w=s=>{[b.value[0],_.value[0]].some(r=>s.composedPath().includes(r))||(c.value=!1)};return T(()=>{W(),y.observe(f.value),t.value=m.items.map(s=>({...s,hidden:!1,width:0})),V(()=>{t.value.forEach((s,l)=>{s.width=v.value[l].clientWidth})})}),U(()=>{D(),y.unobserve(f.value)}),(s,l)=>(n(),d("nav",null,[a("ol",{ref_key:"ulRef",ref:f,class:R([{collapsed:g.value},"ds-relative ds-flex"])},[(n(!0),d($,null,H(t.value,(e,r)=>{var o;return n(),d($,{key:`item${e.text}`},[r===0?(n(),d("li",{key:0,ref_for:!0,ref_key:"liRefs",ref:v,class:"ds-whitespace-nowrap ds-text-black/[0.85]"},[p(s.$slots,`item-${r}`,{item:e},()=>[a("a",{href:e.href,title:e.href,class:"ds-transition-colors hover:ds-text-primary-t"},C(e.text),9,X)]),a("span",Y,[p(s.$slots,`separator-${r}`,{item:e},()=>[S(N)])]),a("div",{ref_for:!0,ref_key:"ellipsisRefs",ref:b,class:"ds-inline-block"},[E(a("button",{class:R([{"ds-bg-slate-50":c.value},"ds-ml-2 ds-rounded-lg ds-bg-slate-100 ds-px-2 ds-text-primary-t ds-transition-colors hover:ds-bg-slate-50"]),onClick:I}," ... ",2),[[L,g.value]]),E(a("ol",{id:k.value,ref_for:!0,ref_key:"ellipsisMenuRefs",ref:_,class:"ds-absolute ds-mt-1 ds-space-y-2 ds-rounded-lg ds-bg-white ds-p-4 ds-shadow"},null,8,Z),[[L,g.value&&c.value]])],512)],512)):(n(),q(j,{key:1,disabled:!e.hidden,to:`#${k.value}`},[a("li",{ref_for:!0,ref_key:"liRefs",ref:v,class:"ds-whitespace-nowrap ds-pl-2 ds-text-black/[0.85]"},[p(s.$slots,`item-${r}`,{item:e},()=>[a("a",{href:e.href,title:e.href,class:"ds-transition-colors hover:ds-text-primary-t"},C(e.text),9,ee)]),r<((o=s.items)==null?void 0:o.length)-1?(n(),d("span",se,[p(s.$slots,`separator-${r}`,{item:e},()=>[S(N)])])):P("",!0)],512)],8,["disabled","to"]))],64)}),128))],2)]))}});B.__docgenInfo={exportName:"default",displayName:"BBreadcrumb",description:"",tags:{},props:[{name:"items",description:"Array of breadcrumb items.",required:!1,type:{name:"Array",elements:[{name:"BBreadcrumbItem"}]},defaultValue:{func:!1,value:"() => []"}}],slots:[{name:"`item-${index}`",scoped:!0,bindings:[{name:"item",title:"binding"},{name:"name",title:"binding"}]},{name:"`separator-${index}`",scoped:!0,bindings:[{name:"item",title:"binding"},{name:"name",title:"binding"}]}],sourceFiles:["/home/runner/work/design-system/design-system/src/components/BBreadcrumb/BBreadcrumb.vue"]};const oe={title:"Components/Breadcrumb",parameters:{docs:{description:{component:"The <code>BBreadcrumb</code> component is used as a responsive navigational helper and hierarchy for pages."}}},component:B,tags:["autodocs"],args:{}},h={render:u=>({components:{BBreadcrumb:B},setup(){return{args:u}},template:`
      <div class="ds-shadow ds-rounded-lg ds-p-5">
          <BBreadcrumb v-bind="args">
          </BBreadcrumb>
      </div>
      <div style="font-size: 0.75rem; color: gray; margin-top: 1rem; margin-bottom: 60px">
        Breadcrumb items will be hidden selectively on smaller screen.
      </div>
    `}),args:{items:[{text:"Home",href:"/"},{text:"Location",href:"#location"},{text:"North America",href:"#location/north-america"},{text:"United States of America",href:"#location/north-america/usa"}]}};var z,M,O;h.parameters={...h.parameters,docs:{...(z=h.parameters)==null?void 0:z.docs,source:{originalSource:`{
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
}`,...(O=(M=h.parameters)==null?void 0:M.docs)==null?void 0:O.source}}};const ne=["Default"];export{h as Default,ne as __namedExportsOrder,oe as default};
