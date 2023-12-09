import{j as u,k as c,o as p,d as g,N as m,L as f,M as _,l as B}from"./vue.esm-bundler-d836205b.js";import{_ as b}from"./_plugin-vue_export-helper-c27b6911.js";const h=e=>(f("data-v-a22c2003"),e=e(),_(),e),y=h(()=>B("div",{class:"b-loading-bar-indeterminate"},null,-1)),v=[y],d=u({__name:"BLoadingBar",props:{loading:{type:Boolean},height:{default:""},borderRadius:{default:""},absolute:{type:Boolean,default:!1}},setup(e){const a=e,l=c(()=>{const o={opacity:+a.loading,height:"",borderRadius:"",position:"relative"};return a.height&&(o.height=a.height),a.borderRadius&&(o.borderRadius=a.borderRadius),a.absolute&&(o.position="absolute"),o});return(o,L)=>(p(),g("div",{style:m(l.value),class:"b-loading-bar"},v,4))}});const i=b(d,[["__scopeId","data-v-a22c2003"]]);d.__docgenInfo={exportName:"default",displayName:"BLoadingBar",description:"",tags:{},props:[{name:"loading",required:!0,type:{name:"boolean"}},{name:"height",required:!1,type:{name:"string"},defaultValue:{func:!1,value:"''"}},{name:"borderRadius",required:!1,type:{name:"string"},defaultValue:{func:!1,value:"''"}},{name:"absolute",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"false"}}],sourceFiles:["/home/runner/work/design-system/design-system/src/components/BLoadingBar.vue"]};const S={title:"Components/LoadingBar",component:i,tags:["autodocs"],args:{height:"",borderRadius:"",absolute:!1}},s={render:e=>({components:{BLoadingBar:i},setup(){return{args:e}},template:`
      <BLoadingBar v-bind="args" />
    `}),args:{loading:!0}};var n,t,r;s.parameters={...s.parameters,docs:{...(n=s.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
}`,...(r=(t=s.parameters)==null?void 0:t.docs)==null?void 0:r.source}}};const I=["Default"];export{s as Default,I as __namedExportsOrder,S as default};
//# sourceMappingURL=BLoadingBar.stories-9f8886b8.js.map
