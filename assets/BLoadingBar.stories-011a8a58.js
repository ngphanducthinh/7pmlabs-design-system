import{d as l,e as u,o as p,c as g,E as m,G as f,H as _,g as B}from"./vue.esm-bundler-d9761a11.js";import{_ as b}from"./_plugin-vue_export-helper-c27b6911.js";const h=e=>(f("data-v-31348ccc"),e=e(),_(),e),y=h(()=>B("div",{class:"b-loading-bar-indeterminate"},null,-1)),v=[y],d=l({__name:"BLoadingBar",props:{loading:{type:Boolean},height:{default:""},borderRadius:{default:""},absolute:{type:Boolean,default:!1}},setup(e){const a=e,c=u(()=>{const o={opacity:+a.loading,height:"",borderRadius:"",position:"relative"};return a.height&&(o.height=a.height),a.borderRadius&&(o.borderRadius=a.borderRadius),a.absolute&&(o.position="absolute"),o});return(o,L)=>(p(),g("div",{style:m(c.value),class:"b-loading-bar"},v,4))}});const i=b(d,[["__scopeId","data-v-31348ccc"]]);d.__docgenInfo={exportName:"default",displayName:"BLoadingBar",description:"",tags:{},props:[{name:"loading",required:!0,type:{name:"boolean"}},{name:"height",required:!1,type:{name:"string"},defaultValue:{func:!1,value:"''"}},{name:"borderRadius",required:!1,type:{name:"string"},defaultValue:{func:!1,value:"''"}},{name:"absolute",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"false"}}],sourceFiles:["/home/runner/work/design-system/design-system/src/components/BLoadingBar.vue"]};const S={title:"Components/LoadingBar",parameters:{docs:{description:{component:"The <code>BLoadingBar</code> component is used for displaying a loading bar."}}},component:i,tags:["autodocs"],args:{height:"",borderRadius:"",absolute:!1}},n={render:e=>({components:{BLoadingBar:i},setup(){return{args:e}},template:`
      <BLoadingBar v-bind="args" />
    `}),args:{loading:!0}};var s,t,r;n.parameters={...n.parameters,docs:{...(s=n.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
}`,...(r=(t=n.parameters)==null?void 0:t.docs)==null?void 0:r.source}}};const I=["Default"];export{n as Default,I as __namedExportsOrder,S as default};
