import{o as n,b as c,m as o,j as T,e as d,k as x,B as V,C as A,K as j,F as $,D as q,n as C,d as p,t as S,s as R,w as E,E as O,x as K,l as P,T as U}from"./vue.esm-bundler-0e9fd243.js";import{_ as G}from"./_plugin-vue_export-helper-c27b6911.js";import{v as H}from"./v4-4a60fe23.js";const D={},J={class:"ds-mb-0.5 ds-inline-block ds-h-3.5 ds-w-3.5",viewBox:"0 0 320 512",xmlns:"http://www.w3.org/2000/svg"},Q=o("path",{d:"M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z"},null,-1),X=[Q];function Y(u,y){return n(),c("svg",J,X)}const z=G(D,[["render",Y]]);D.__docgenInfo={displayName:"BBreadcrumbSeparator",description:"",tags:{},sourceFiles:["/home/runner/work/design-system/design-system/src/components/BBreadcrumb/BBreadcrumbSeparator.vue"]};const Z=["href","title"],ee={"aria-hidden":"true",class:"ds-pl-2"},se=["id"],re=["href","title"],te={key:0,"aria-hidden":"true",class:"ds-pl-2"},b=T({__name:"BBreadcrumb",props:{items:{default:()=>[]}},setup(u){const y=u,i=d(!1),m=d(null),g=d(null),h=d(null),B=d(null),t=d([]),_=new ResizeObserver(()=>{if(t.value.length<=1)return;const s=m.value.clientWidth,l=h.value[0].clientWidth;for(let e=1;e<t.value.length&&t.value.reduce((r,a)=>a.hidden?r:r+a.width,0)+l>s;e++)t.value[e].hidden=!0;for(let e=t.value.length-1;e>=1;e--)if(t.value[e].hidden)if(t.value.reduce((r,a)=>a.hidden?r:r+a.width,0)+t.value[e].width+l<=s)t.value[e].hidden=!1;else break}),v=x(()=>t.value.some(s=>s.hidden)),w=x(()=>`menu-id-${H()}`),I=()=>{i.value=!i.value},W=()=>{document.addEventListener("click",k)},F=()=>{document.removeEventListener("click",k)},k=s=>{[h.value[0],B.value[0]].some(r=>s.composedPath().includes(r))||(i.value=!1)};return V(()=>{W(),_.observe(m.value),t.value=y.items.map(s=>({...s,hidden:!1,width:0})),A(()=>{t.value.forEach((s,l)=>{s.width=g.value[l].clientWidth})})}),j(()=>{F(),_.unobserve(m.value)}),(s,l)=>(n(),c("ul",{ref_key:"ulRef",ref:m,class:C([{collapsed:v.value},"ds-relative ds-flex"])},[(n(!0),c($,null,q(t.value,(e,r)=>{var a;return n(),c($,{key:`item${e.text}`},[r===0?(n(),c("li",{key:0,ref_for:!0,ref_key:"liRefs",ref:g,class:"ds-whitespace-nowrap ds-text-black/[0.85]"},[p(s.$slots,`item-${r}`,{item:e},()=>[o("a",{href:e.href,title:e.href,class:"hover:ds-text-primary-t"},S(e.text),9,Z)]),o("span",ee,[p(s.$slots,`separator-${r}`,{item:e},()=>[R(z)])]),E(o("button",{ref_for:!0,ref_key:"ellipsisRefs",ref:h,class:C([{"ds-bg-slate-50":i.value},"ds-ml-2 ds-rounded-lg ds-bg-slate-100 ds-px-2 ds-text-primary-t hover:ds-bg-slate-50"]),onClick:I}," ... ",2),[[O,v.value]]),E(o("ul",{id:w.value,ref_for:!0,ref_key:"menuRefs",ref:B,class:"ds-absolute ds-space-y-2 ds-rounded-lg ds-bg-white ds-p-4 ds-shadow"},null,8,se),[[O,v.value&&i.value]])],512)):(n(),K(U,{key:1,disabled:!e.hidden,to:`#${w.value}`},[o("li",{ref_for:!0,ref_key:"liRefs",ref:g,class:"ds-whitespace-nowrap ds-pl-2 ds-text-black/[0.85]"},[p(s.$slots,`item-${r}`,{item:e},()=>[o("a",{href:e.href,title:e.href,class:"hover:ds-text-primary-t"},S(e.text),9,re)]),r<((a=s.items)==null?void 0:a.length)-1?(n(),c("span",te,[p(s.$slots,`separator-${r}`,{item:e},()=>[R(z)])])):P("",!0)],512)],8,["disabled","to"]))],64)}),128))],2))}});b.__docgenInfo={exportName:"default",displayName:"BBreadcrumb",description:"",tags:{},props:[{name:"items",description:"Array of breadcrumb items.",required:!1,type:{name:"Array",elements:[{name:"BBreadcrumbItem"}]},defaultValue:{func:!1,value:"() => []"}}],slots:[{name:"`item-${index}`",scoped:!0,bindings:[{name:"item",title:"binding"},{name:"name",title:"binding"}]},{name:"`separator-${index}`",scoped:!0,bindings:[{name:"item",title:"binding"},{name:"name",title:"binding"}]}],sourceFiles:["/home/runner/work/design-system/design-system/src/components/BBreadcrumb/BBreadcrumb.vue"]};const le={title:"Components/Breadcrumb",parameters:{docs:{description:{component:"The <code>BBreadcrumb</code> component is used as a responsive navigational helper and hierarchy for pages."}}},component:b,tags:["autodocs"],args:{}},f={render:u=>({components:{BBreadcrumb:b},setup(){return{args:u}},template:`
      <div class="ds-shadow ds-rounded-lg ds-p-5">
          <BBreadcrumb v-bind="args">
          </BBreadcrumb>
      </div>
      <div style="font-size: 0.75rem; color: gray; margin-top: 1rem; margin-bottom: 60px">
        Breadcrumb items will be hidden selectively on smaller screen.
      </div>
    `}),args:{items:[{text:"My web app",href:"/"},{text:"Category",href:"#category"},{text:"Subcategory",href:"#category/subcategory"},{text:"Subcategory level 02",href:"#category/subcategory/subcategory-level-02"},{text:"Subcategory level 03",href:"#category/subcategory/subcategory-level-02/subcategory-level-03"}]}};var L,M,N;f.parameters={...f.parameters,docs:{...(L=f.parameters)==null?void 0:L.docs,source:{originalSource:`{
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
      text: 'My web app',
      href: '/'
    }, {
      text: 'Category',
      href: '#category'
    }, {
      text: 'Subcategory',
      href: '#category/subcategory'
    }, {
      text: 'Subcategory level 02',
      href: '#category/subcategory/subcategory-level-02'
    }, {
      text: 'Subcategory level 03',
      href: '#category/subcategory/subcategory-level-02/subcategory-level-03'
    }]
  }
}`,...(N=(M=f.parameters)==null?void 0:M.docs)==null?void 0:N.source}}};const de=["Default"];export{f as Default,de as __namedExportsOrder,le as default};
