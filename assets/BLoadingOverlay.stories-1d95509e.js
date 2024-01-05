import{j as O,k as d,x as i,w as p,E as u,s as x,y as c,n as o,T as L,o as m,l as g,z as S}from"./vue.esm-bundler-29df2e62.js";import{e as a}from"./Enums-25996506.js";import{B as f}from"./BOverlay-0888f636.js";import{_ as h}from"./_plugin-vue_export-helper-c27b6911.js";const B=O({__name:"BLoadingOverlay",props:{loading:{type:Boolean},absolute:{type:Boolean,default:!1},spinnerSize:{default:a.Medium}},setup(s){const n=s,r=d(()=>n.absolute?"ds-absolute ":"ds-fixed "),l=d(()=>{let e="spinner ";switch(n.spinnerSize){case a.Small:e+="ds-w-4 ds-h-4 ";break;case a.Large:e+="ds-w-12 ds-h-12 ";break;case a.Medium:default:e+="ds-w-8 ds-h-8 "}return e});return(e,w)=>n.absolute?p((m(),i(f,{key:1,class:o(r.value)},{default:c(()=>[g("div",{class:o(l.value)},null,2)]),_:1},8,["class"])),[[u,e.loading]]):(m(),i(L,{key:0,to:"body"},[p(x(f,{class:o(r.value)},{default:c(()=>[g("div",{class:o(l.value)},null,2)]),_:1},8,["class"]),[[u,e.loading]])]))}});const b=h(B,[["__scopeId","data-v-c49c635e"]]);B.__docgenInfo={exportName:"default",displayName:"BLoadingOverlay",description:"",tags:{},props:[{name:"loading",required:!0,type:{name:"boolean"}},{name:"absolute",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"spinnerSize",required:!1,type:{name:"TSLiteralType"},defaultValue:{func:!1,value:"BLoadingOverlaySpinnerSize.Medium"}}],sourceFiles:["/home/runner/work/design-system/design-system/src/components/BLoadingOverlay.vue"]};const I={title:"Components/LoadingOverlay",component:b,tags:["autodocs"],argTypes:{spinnerSize:{control:"select",options:Object.values(a)}},args:{absolute:!1,spinnerSize:a.Medium}},t={render:s=>({components:{BLoadingOverlay:b},setup(){return S(()=>s.loading,n=>{n&&setTimeout(()=>{s.loading=!1},2e3)},{immediate:!0}),{args:s}},template:`
      <BLoadingOverlay v-bind="args" />
      <span class="ds-text-xs ds-text-gray-500">Overlay displays about 2 seconds for demonstration purpose; In fact, it depends on 'loading' props in production mode.</span>
    `}),args:{loading:!1}};var y,v,_;t.parameters={...t.parameters,docs:{...(y=t.parameters)==null?void 0:y.docs,source:{originalSource:`{
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
}`,...(_=(v=t.parameters)==null?void 0:v.docs)==null?void 0:_.source}}};const M=["Default"];export{t as Default,M as __namedExportsOrder,I as default};
