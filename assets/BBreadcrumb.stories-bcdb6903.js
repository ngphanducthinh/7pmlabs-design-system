import{j as W,e as o,k,B as I,C as N,D as T,o as d,b as i,F as x,E as F,n as V,d as m,m as a,t as C,w as $,G as R,x as A,l as j,T as q}from"./vue.esm-bundler-109c6e5d.js";import{v as G}from"./v4-4a60fe23.js";const P=["href","title"],U={"aria-hidden":"true",class:"ds-pl-2"},H=a("svg",{class:"ds-mb-0.5 ds-inline-block ds-h-4 ds-w-4",viewBox:"0 0 320 512",xmlns:"http://www.w3.org/2000/svg"},[a("path",{d:"M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z"})],-1),J=["id"],K=["href","title"],Q={key:0,"aria-hidden":"true",class:"ds-pl-2"},X=a("svg",{class:"ds-mb-0.5 ds-inline-block ds-h-4 ds-w-4",viewBox:"0 0 320 512",xmlns:"http://www.w3.org/2000/svg"},[a("path",{d:"M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z"})],-1),v=W({__name:"BBreadcrumb",props:{items:{default:()=>[]}},setup(f){const L=f,c=o(!1),u=o(null),h=o(null),g=o(null),y=o(null),r=o([]),w=new ResizeObserver(()=>{if(r.value.length<=1)return;const s=u.value.clientWidth,l=g.value[0].clientWidth;for(let e=1;e<r.value.length&&r.value.reduce((t,n)=>n.hidden?t:t+n.width,0)+l>s;e++)r.value[e].hidden=!0;for(let e=r.value.length-1;e>=1;e--)if(r.value[e].hidden)if(r.value.reduce((t,n)=>n.hidden?t:t+n.width,0)+r.value[e].width+l<=s)r.value[e].hidden=!1;else break}),b=k(()=>r.value.some(s=>s.hidden)),B=k(()=>`menu-id-${G()}`),M=()=>{console.log("..."),c.value=!c.value},O=()=>{document.addEventListener("click",_)},D=()=>{document.removeEventListener("click",_)},_=s=>{[g.value[0],y.value[0]].some(t=>s.composedPath().includes(t))||(c.value=!1)};return I(()=>{O(),w.observe(u.value),r.value=L.items.map(s=>({...s,hidden:!1,width:0})),N(()=>{r.value.forEach((s,l)=>{s.width=h.value[l].clientWidth})})}),T(()=>{D(),w.unobserve(u.value)}),(s,l)=>(d(),i("ul",{ref_key:"ulRef",ref:u,class:V([{collapsed:b.value},"ds-relative ds-flex"])},[(d(!0),i(x,null,F(r.value,(e,t)=>{var n;return d(),i(x,{key:`item${e.text}`},[t===0?(d(),i("li",{key:0,ref_for:!0,ref_key:"liRefs",ref:h,class:"ds-whitespace-nowrap ds-text-black/[0.85]"},[m(s.$slots,`item-${t}`,{item:e},()=>[a("a",{href:e.href,title:e.href},C(e.text),9,P)]),a("span",U,[m(s.$slots,`separator-${t}`,{item:e},()=>[H])]),$(a("button",{ref_for:!0,ref_key:"ellipsisRefs",ref:g,class:"ds-ml-2 ds-rounded-lg ds-bg-slate-100 ds-px-2 ds-text-primary-t",onClick:M}," ... ",512),[[R,b.value]]),$(a("ul",{id:B.value,ref_for:!0,ref_key:"menuRefs",ref:y,class:"ds-absolute ds-space-y-2 ds-rounded-lg ds-bg-white ds-p-4 ds-shadow"},null,8,J),[[R,b.value&&c.value]])],512)):(d(),A(q,{key:1,disabled:!e.hidden,to:`#${B.value}`},[a("li",{ref_for:!0,ref_key:"liRefs",ref:h,class:"ds-whitespace-nowrap ds-pl-2 ds-text-black/[0.85]"},[m(s.$slots,`item-${t}`,{item:e},()=>[a("a",{href:e.href,title:e.href},C(e.text),9,K)]),t<((n=s.items)==null?void 0:n.length)-1?(d(),i("span",Q,[m(s.$slots,`separator-${t}`,{item:e},()=>[X])])):j("",!0)],512)],8,["disabled","to"]))],64)}),128))],2))}});v.__docgenInfo={exportName:"default",displayName:"BBreadcrumb",description:"",tags:{},props:[{name:"items",description:"Array of breadcrumb items.",required:!1,type:{name:"Array",elements:[{name:"BBreadcrumbItem"}]},defaultValue:{func:!1,value:"() => []"}}],slots:[{name:"`item-${index}`",scoped:!0,bindings:[{name:"item",title:"binding"},{name:"name",title:"binding"}]},{name:"`separator-${index}`",scoped:!0,bindings:[{name:"item",title:"binding"},{name:"name",title:"binding"}]}],sourceFiles:["/home/runner/work/design-system/design-system/src/components/BBreadcrumb.vue"]};const ee={title:"Components/Breadcrumb",parameters:{docs:{description:{component:"The <code>BBreadcrumb</code> component is used as a responsive navigational helper and hierarchy for pages."}}},component:v,tags:["autodocs"],args:{}},p={render:f=>({components:{BBreadcrumb:v},setup(){return{args:f}},template:`
      <BBreadcrumb v-bind="args">
      </BBreadcrumb>
      <div style="font-size: 0.75rem; color: gray; margin-top: 1rem; margin-bottom: 60px">
        Breadcrumb items will be hidden selectively & a dropdown menu will be shown on smaller screen.
      </div>
    `}),args:{items:[{text:"My web app",href:"/"},{text:"Category",href:"#category"},{text:"Subcategory",href:"#category/subcategory"},{text:"Subcategory level 02",href:"#category/subcategory/subcategory-level-02"},{text:"Subcategory level 03",href:"#category/subcategory/subcategory-level-02/subcategory-level-03"}]}};var S,E,z;p.parameters={...p.parameters,docs:{...(S=p.parameters)==null?void 0:S.docs,source:{originalSource:`{
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
      <BBreadcrumb v-bind="args">
      </BBreadcrumb>
      <div style="font-size: 0.75rem; color: gray; margin-top: 1rem; margin-bottom: 60px">
        Breadcrumb items will be hidden selectively & a dropdown menu will be shown on smaller screen.
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
}`,...(z=(E=p.parameters)==null?void 0:E.docs)==null?void 0:z.source}}};const se=["Default"];export{p as Default,se as __namedExportsOrder,ee as default};
