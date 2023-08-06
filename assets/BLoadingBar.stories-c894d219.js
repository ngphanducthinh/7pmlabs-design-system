import{j as u,k as c,o as p,d as g,M as f,J as m,K as _,m as B}from"./vue.esm-bundler-54bcf90c.js";import{_ as b}from"./_plugin-vue_export-helper-c27b6911.js";const h=e=>(m("data-v-119e439f"),e=e(),_(),e),v=h(()=>B("div",{class:"b-loading-bar-indeterminate"},null,-1)),y=[v],d=u({__name:"BLoadingBar",props:{loading:{type:Boolean},height:{default:""},borderRadius:{default:""},absolute:{type:Boolean,default:!1}},setup(e){const a=e,l=c(()=>{const s={opacity:+a.loading,height:"",borderRadius:"",position:"relative"};return a.height&&(s.height=a.height),a.borderRadius&&(s.borderRadius=a.borderRadius),a.absolute&&(s.position="absolute"),s});return(s,L)=>(p(),g("div",{style:f(l.value),class:"b-loading-bar"},y,4))}});const i=b(d,[["__scopeId","data-v-119e439f"]]);d.__docgenInfo={exportName:"default",displayName:"BLoadingBar",description:"",tags:{},props:[{name:"height",defaultValue:{func:!1,value:"''"}},{name:"borderRadius",defaultValue:{func:!1,value:"''"}},{name:"absolute",defaultValue:{func:!1,value:"false"}}],sourceFiles:["/Users/thinhnguyen/Downloads/Projects/7PMLabs/7pmlabs-design-system/src/components/BLoadingBar.vue"]};const S={title:"7PMLabs/LoadingBar",component:i,tags:["autodocs"],args:{height:"",borderRadius:"",absolute:!1}},o={render:e=>({components:{BLoadingBar:i},setup(){return{args:e}},template:`
      <BLoadingBar v-bind="args" />
    `}),args:{loading:!0}};var t,n,r;o.parameters={...o.parameters,docs:{...(t=o.parameters)==null?void 0:t.docs,source:{originalSource:`{
  render: (args: any) => ({
    components: {
      BLoadingBar
    },
    setup() {
      return {
        args
      };
    },
    template: \`
      <BLoadingBar v-bind="args" />
    \`
  }),
  args: {
    loading: true
  }
}`,...(r=(n=o.parameters)==null?void 0:n.docs)==null?void 0:r.source}}};const I=["Default"];export{o as Default,I as __namedExportsOrder,S as default};
//# sourceMappingURL=BLoadingBar.stories-c894d219.js.map
