import{j as O,k as d,t as i,w as p,v as u,l as L,L as c,n as o,T as h,o as m,m as f,y as x}from"./vue.esm-bundler-54bcf90c.js";import{f as a}from"./Enums-c45a7702.js";import{B as g}from"./BOverlay-c84f9fdd.js";import{_ as S}from"./_plugin-vue_export-helper-c27b6911.js";const b=O({__name:"BLoadingOverlay",props:{loading:{type:Boolean},absolute:{type:Boolean,default:!1},spinnerSize:{default:a.Medium}},setup(s){const n=s,r=d(()=>n.absolute?"ds-absolute ":"ds-fixed "),l=d(()=>{let e="spinner ";switch(n.spinnerSize){case a.Small:e+="ds-w-4 ds-h-4 ";break;case a.Large:e+="ds-w-12 ds-h-12 ";break;case a.Medium:default:e+="ds-w-8 ds-h-8 "}return e});return(e,w)=>n.absolute?p((m(),i(g,{key:1,class:o(r.value)},{default:c(()=>[f("div",{class:o(l.value)},null,2)]),_:1},8,["class"])),[[u,e.loading]]):(m(),i(h,{key:0,to:"body"},[p(L(g,{class:o(r.value)},{default:c(()=>[f("div",{class:o(l.value)},null,2)]),_:1},8,["class"]),[[u,e.loading]])]))}});const B=S(b,[["__scopeId","data-v-2ddefae6"]]);b.__docgenInfo={exportName:"default",displayName:"BLoadingOverlay",description:"",tags:{},props:[{name:"absolute",defaultValue:{func:!1,value:"false"}},{name:"spinnerSize",defaultValue:{func:!1,value:"BLoadingOverlaySpinnerSize.Medium"}}],sourceFiles:["/Users/thinhnguyen/Downloads/Projects/7PMLabs/7pmlabs-design-system/src/components/BLoadingOverlay.vue"]};const T={title:"7PMLabs/LoadingOverlay",component:B,tags:["autodocs"],argTypes:{spinnerSize:{control:"select",options:Object.values(a)}},args:{absolute:!1,spinnerSize:a.Medium}},t={render:s=>({components:{BLoadingOverlay:B},setup(){return x(()=>s.loading,n=>{n&&setTimeout(()=>{s.loading=!1},2e3)},{immediate:!0}),{args:s}},template:`
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
}`,...(_=(y=t.parameters)==null?void 0:y.docs)==null?void 0:_.source}}};const D=["Default"];export{t as Default,D as __namedExportsOrder,T as default};
//# sourceMappingURL=BLoadingOverlay.stories-4e39d65d.js.map
