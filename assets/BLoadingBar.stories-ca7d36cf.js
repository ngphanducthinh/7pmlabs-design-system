import{e as c,f as p,o as g,c as m,h as f,G as B}from"./vue.esm-bundler-ceeda665.js";import{_}from"./_plugin-vue_export-helper-c27b6911.js";const i=c({__name:"BLoadingBar",props:{loading:{type:Boolean},height:{default:""},borderRadius:{default:""},absolute:{type:Boolean,default:!1}},setup(o){const e=o,u=p(()=>{const a={opacity:+e.loading,height:"",borderRadius:"",position:"relative"};return e.height&&(a.height=e.height),e.borderRadius&&(a.borderRadius=e.borderRadius),e.absolute&&(a.position="absolute"),a});return(a,s)=>(g(),m("div",{style:B(u.value),class:"b-loading-bar"},s[0]||(s[0]=[f("div",{class:"b-loading-bar-indeterminate"},null,-1)]),4))}});const l=_(i,[["__scopeId","data-v-31348ccc"]]);i.__docgenInfo={exportName:"default",displayName:"BLoadingBar",description:"",tags:{},props:[{name:"loading",required:!0,type:{name:"boolean"}},{name:"height",required:!1,type:{name:"string"},defaultValue:{func:!1,value:"''"}},{name:"borderRadius",required:!1,type:{name:"string"},defaultValue:{func:!1,value:"''"}},{name:"absolute",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"false"}}],sourceFiles:["/home/runner/work/design-system/design-system/src/components/BLoadingBar.vue"]};const h={title:"Components/LoadingBar",parameters:{docs:{description:{component:"The <code>BLoadingBar</code> component is used for displaying a loading bar."}}},component:l,tags:["autodocs"],args:{height:"",borderRadius:"",absolute:!1}},n={render:o=>({components:{BLoadingBar:l},setup(){return{args:o}},template:`
      <BLoadingBar v-bind="args" />
    `}),args:{loading:!0}};var r,t,d;n.parameters={...n.parameters,docs:{...(r=n.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
}`,...(d=(t=n.parameters)==null?void 0:t.docs)==null?void 0:d.source}}};const v=["Default"];export{n as Default,v as __namedExportsOrder,h as default};
