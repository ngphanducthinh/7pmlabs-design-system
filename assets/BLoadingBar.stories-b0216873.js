import{j as u,k as c,o as p,d as g,N as m,L as f,M as _,l as B}from"./vue.esm-bundler-f0a4de28.js";import{_ as h}from"./_plugin-vue_export-helper-c27b6911.js";const b=e=>(f("data-v-119e439f"),e=e(),_(),e),v=b(()=>B("div",{class:"b-loading-bar-indeterminate"},null,-1)),y=[v],d=u({__name:"BLoadingBar",props:{loading:{type:Boolean},height:{default:""},borderRadius:{default:""},absolute:{type:Boolean,default:!1}},setup(e){const a=e,l=c(()=>{const o={opacity:+a.loading,height:"",borderRadius:"",position:"relative"};return a.height&&(o.height=a.height),a.borderRadius&&(o.borderRadius=a.borderRadius),a.absolute&&(o.position="absolute"),o});return(o,L)=>(p(),g("div",{style:m(l.value),class:"b-loading-bar"},y,4))}});const i=h(d,[["__scopeId","data-v-119e439f"]]);d.__docgenInfo={exportName:"default",displayName:"BLoadingBar",description:"",tags:{},props:[{name:"height",defaultValue:{func:!1,value:"''"}},{name:"borderRadius",defaultValue:{func:!1,value:"''"}},{name:"absolute",defaultValue:{func:!1,value:"false"}}],sourceFiles:["/home/runner/work/design-system/design-system/src/components/BLoadingBar.vue"]};const S={title:"Components/LoadingBar",component:i,tags:["autodocs"],args:{height:"",borderRadius:"",absolute:!1}},s={render:e=>({components:{BLoadingBar:i},setup(){return{args:e}},template:`
      <BLoadingBar v-bind="args" />
    `}),args:{loading:!0}};var t,n,r;s.parameters={...s.parameters,docs:{...(t=s.parameters)==null?void 0:t.docs,source:{originalSource:`{
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
}`,...(r=(n=s.parameters)==null?void 0:n.docs)==null?void 0:r.source}}};const I=["Default"];export{s as Default,I as __namedExportsOrder,S as default};
//# sourceMappingURL=BLoadingBar.stories-b0216873.js.map
