import{j as I,e as o,k,B as N,C as T,D as F,o as d,b as c,F as x,E as V,n as C,d as m,m as a,t as $,w as R,G as S,x as A,l as j,T as q}from"./vue.esm-bundler-109c6e5d.js";import{v as G}from"./v4-4a60fe23.js";const P=["href","title"],U={"aria-hidden":"true",class:"ds-pl-2"},H=a("svg",{class:"ds-mb-0.5 ds-inline-block ds-h-4 ds-w-4",viewBox:"0 0 320 512",xmlns:"http://www.w3.org/2000/svg"},[a("path",{d:"M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z"})],-1),J=["id"],K=["href","title"],Q={key:0,"aria-hidden":"true",class:"ds-pl-2"},X=a("svg",{class:"ds-mb-0.5 ds-inline-block ds-h-4 ds-w-4",viewBox:"0 0 320 512",xmlns:"http://www.w3.org/2000/svg"},[a("path",{d:"M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z"})],-1),b=I({__name:"BBreadcrumb",props:{items:{default:()=>[]}},setup(f){const M=f,i=o(!1),u=o(null),v=o(null),h=o(null),y=o(null),r=o([]),w=new ResizeObserver(()=>{if(r.value.length<=1)return;const s=u.value.clientWidth,l=h.value[0].clientWidth;for(let e=1;e<r.value.length&&r.value.reduce((t,n)=>n.hidden?t:t+n.width,0)+l>s;e++)r.value[e].hidden=!0;for(let e=r.value.length-1;e>=1;e--)if(r.value[e].hidden)if(r.value.reduce((t,n)=>n.hidden?t:t+n.width,0)+r.value[e].width+l<=s)r.value[e].hidden=!1;else break}),g=k(()=>r.value.some(s=>s.hidden)),B=k(()=>`menu-id-${G()}`),O=()=>{i.value=!i.value},D=()=>{document.addEventListener("click",_)},W=()=>{document.removeEventListener("click",_)},_=s=>{[h.value[0],y.value[0]].some(t=>s.composedPath().includes(t))||(i.value=!1)};return N(()=>{D(),w.observe(u.value),r.value=M.items.map(s=>({...s,hidden:!1,width:0})),T(()=>{r.value.forEach((s,l)=>{s.width=v.value[l].clientWidth})})}),F(()=>{W(),w.unobserve(u.value)}),(s,l)=>(d(),c("ul",{ref_key:"ulRef",ref:u,class:C([{collapsed:g.value},"ds-relative ds-flex"])},[(d(!0),c(x,null,V(r.value,(e,t)=>{var n;return d(),c(x,{key:`item${e.text}`},[t===0?(d(),c("li",{key:0,ref_for:!0,ref_key:"liRefs",ref:v,class:"ds-whitespace-nowrap ds-text-black/[0.85]"},[m(s.$slots,`item-${t}`,{item:e},()=>[a("a",{href:e.href,title:e.href,class:"hover:ds-text-primary-t"},$(e.text),9,P)]),a("span",U,[m(s.$slots,`separator-${t}`,{item:e},()=>[H])]),R(a("button",{ref_for:!0,ref_key:"ellipsisRefs",ref:h,class:C([{"ds-bg-slate-50":i.value},"ds-ml-2 ds-rounded-lg ds-bg-slate-100 ds-px-2 ds-text-primary-t hover:ds-bg-slate-50"]),onClick:O}," ... ",2),[[S,g.value]]),R(a("ul",{id:B.value,ref_for:!0,ref_key:"menuRefs",ref:y,class:"ds-absolute ds-space-y-2 ds-rounded-lg ds-bg-white ds-p-4 ds-shadow"},null,8,J),[[S,g.value&&i.value]])],512)):(d(),A(q,{key:1,disabled:!e.hidden,to:`#${B.value}`},[a("li",{ref_for:!0,ref_key:"liRefs",ref:v,class:"ds-whitespace-nowrap ds-pl-2 ds-text-black/[0.85]"},[m(s.$slots,`item-${t}`,{item:e},()=>[a("a",{href:e.href,title:e.href,class:"hover:ds-text-primary-t"},$(e.text),9,K)]),t<((n=s.items)==null?void 0:n.length)-1?(d(),c("span",Q,[m(s.$slots,`separator-${t}`,{item:e},()=>[X])])):j("",!0)],512)],8,["disabled","to"]))],64)}),128))],2))}});b.__docgenInfo={exportName:"default",displayName:"BBreadcrumb",description:"",tags:{},props:[{name:"items",description:"Array of breadcrumb items.",required:!1,type:{name:"Array",elements:[{name:"BBreadcrumbItem"}]},defaultValue:{func:!1,value:"() => []"}}],slots:[{name:"`item-${index}`",scoped:!0,bindings:[{name:"item",title:"binding"},{name:"name",title:"binding"}]},{name:"`separator-${index}`",scoped:!0,bindings:[{name:"item",title:"binding"},{name:"name",title:"binding"}]}],sourceFiles:["/home/runner/work/design-system/design-system/src/components/BBreadcrumb.vue"]};const ee={title:"Components/Breadcrumb",parameters:{docs:{description:{component:"The <code>BBreadcrumb</code> component is used as a responsive navigational helper and hierarchy for pages."}}},component:b,tags:["autodocs"],args:{}},p={render:f=>({components:{BBreadcrumb:b},setup(){return{args:f}},template:`
      <div class="ds-shadow ds-rounded-lg ds-p-5">
          <BBreadcrumb v-bind="args">
          </BBreadcrumb>
      </div>
      <div style="font-size: 0.75rem; color: gray; margin-top: 1rem; margin-bottom: 60px">
        Breadcrumb items will be hidden selectively on smaller screen.
      </div>
    `}),args:{items:[{text:"My web app",href:"/"},{text:"Category",href:"#category"},{text:"Subcategory",href:"#category/subcategory"},{text:"Subcategory level 02",href:"#category/subcategory/subcategory-level-02"},{text:"Subcategory level 03",href:"#category/subcategory/subcategory-level-02/subcategory-level-03"}]}};var E,z,L;p.parameters={...p.parameters,docs:{...(E=p.parameters)==null?void 0:E.docs,source:{originalSource:`{
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
}`,...(L=(z=p.parameters)==null?void 0:z.docs)==null?void 0:L.source}}};const se=["Default"];export{p as Default,se as __namedExportsOrder,ee as default};
