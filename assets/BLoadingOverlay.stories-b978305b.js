import{j as b,k as d,s as i,w as p,y as u,q as x,B as c,n as o,T as L,o as m,l as f,C as S}from"./vue.esm-bundler-f0a4de28.js";import{f as a}from"./Enums-693cd203.js";import{B as g}from"./BOverlay-7bec6676.js";import{_ as h}from"./_plugin-vue_export-helper-c27b6911.js";const B=b({__name:"BLoadingOverlay",props:{loading:{type:Boolean},absolute:{type:Boolean,default:!1},spinnerSize:{default:a.Medium}},setup(s){const n=s,r=d(()=>n.absolute?"ds-absolute ":"ds-fixed "),l=d(()=>{let e="spinner ";switch(n.spinnerSize){case a.Small:e+="ds-w-4 ds-h-4 ";break;case a.Large:e+="ds-w-12 ds-h-12 ";break;case a.Medium:default:e+="ds-w-8 ds-h-8 "}return e});return(e,w)=>n.absolute?p((m(),i(g,{key:1,class:o(r.value)},{default:c(()=>[f("div",{class:o(l.value)},null,2)]),_:1},8,["class"])),[[u,e.loading]]):(m(),i(L,{key:0,to:"body"},[p(x(g,{class:o(r.value)},{default:c(()=>[f("div",{class:o(l.value)},null,2)]),_:1},8,["class"]),[[u,e.loading]])]))}});const O=h(B,[["__scopeId","data-v-2ddefae6"]]);B.__docgenInfo={exportName:"default",displayName:"BLoadingOverlay",description:"",tags:{},props:[{name:"absolute",defaultValue:{func:!1,value:"false"}},{name:"spinnerSize",defaultValue:{func:!1,value:"BLoadingOverlaySpinnerSize.Medium"}}],sourceFiles:["/home/runner/work/design-system/design-system/src/components/BLoadingOverlay.vue"]};const I={title:"Components/LoadingOverlay",component:O,tags:["autodocs"],argTypes:{spinnerSize:{control:"select",options:Object.values(a)}},args:{absolute:!1,spinnerSize:a.Medium}},t={render:s=>({components:{BLoadingOverlay:O},setup(){return S(()=>s.loading,n=>{n&&setTimeout(()=>{s.loading=!1},2e3)},{immediate:!0}),{args:s}},template:`
      <BLoadingOverlay v-bind="args" />
      <span class="ds-text-xs ds-text-gray-500">Overlay displays about 2 seconds for demonstration purpose; In fact, it depends on 'loading' props in production mode.</span>
    `}),args:{loading:!1}};var v,y,_;t.parameters={...t.parameters,docs:{...(v=t.parameters)==null?void 0:v.docs,source:{originalSource:`{
  render: (args: any) => ({
    components: {
      BLoadingOverlay
    },
    setup() {
      watch(() => args.loading, val => {
        if (val) {
          setTimeout(() => {
            args.loading = false;
          }, 2000);
        }
      }, {
        immediate: true
      });
      return {
        args
      };
    },
    template: \`
      <BLoadingOverlay v-bind="args" />
      <span class="ds-text-xs ds-text-gray-500">Overlay displays about 2 seconds for demonstration purpose; In fact, it depends on 'loading' props in production mode.</span>
    \`
  }),
  args: {
    loading: false
  }
}`,...(_=(y=t.parameters)==null?void 0:y.docs)==null?void 0:_.source}}};const M=["Default"];export{t as Default,M as __namedExportsOrder,I as default};
//# sourceMappingURL=BLoadingOverlay.stories-b978305b.js.map
