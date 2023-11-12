import{o as c,d as b,e as i,j as L,b as n,k as h,C as x,E,l as y,F as q,G as F,H as N,n as D,t as z}from"./vue.esm-bundler-f0a4de28.js";import{_ as S}from"./_plugin-vue_export-helper-c27b6911.js";import{v as A}from"./v4-a960c1f4.js";const H={},O={class:"tab"};function j(r,l){return c(),b("div",O,[i(r.$slots,"default",{},void 0,!0)])}const G=S(H,[["render",j],["__scopeId","data-v-2e65187a"]]);H.__docgenInfo={displayName:"BTab",description:"",tags:{},slots:[{name:"default"}],sourceFiles:["/home/runner/work/design-system/design-system/src/components/BTabs/BTab.vue"]};const M={class:"ds-flex ds-flex-wrap ds-overflow-hidden ds-rounded-lg ds-border ds-border-gray-100 ds-bg-gray-100"},J=["onClick"],K=["id"],$=L({__name:"BTabs",props:{headers:{},modelValue:{default:void 0},headerCssClass:{default:""}},emits:["update:modelValue"],setup(r,{emit:l}){const o=r,m=n(null),t=n(null),a=n(null),s=n(0),T=n(0),v=h({get(){return o.modelValue!==void 0?o.modelValue:T.value},set(e){o.modelValue!==void 0?l("update:modelValue",e):T.value=e}}),p=h(()=>`id-${A()}`);x(v,e=>{f(e)}),x(()=>o.headers,()=>{N(()=>{B()})});const I=e=>{v.value=e},f=e=>{if(a.value&&t.value)if(s.value=e,[...a.value,...t.value].forEach(d=>{d.classList.remove("active")}),a.value[s.value]&&t.value[s.value])a.value[s.value].classList.add("active"),t.value[s.value].classList.add("active");else{const d=s.value-1;d>=0&&(a.value[d].classList.add("active"),t.value[d].classList.add("active"))}},B=()=>{m.value&&(a.value=[...m.value.querySelectorAll(`#${p.value} > .tab`)],a.value.forEach(e=>{e.classList.contains("active")&&(s.value=a.value.indexOf(e))}),f(s.value))};return E(()=>{B()}),(e,d)=>(c(),b("div",{ref_key:"tabContainer",ref:m},[i(e.$slots,"headers-prepend",{},void 0,!0),y("ul",M,[(c(!0),b(q,null,F(e.headers,(_,g)=>(c(),b("li",{key:g,ref_for:!0,ref_key:"tabHeaders",ref:t,class:D([[e.headerCssClass,_.disabled?"ds-pointer-events-none ds-text-black/40":""],"tab-header ds-min-w-[5rem] ds-flex-1 ds-cursor-pointer ds-rounded-lg ds-p-2 ds-text-center ds-text-sm ds-font-medium ds-capitalize hover:ds-bg-slate-50 hover:ds-text-primary-t"]),onClick:P=>I(g)},z(_.text),11,J))),128))]),i(e.$slots,"headers-append",{},void 0,!0),y("div",{id:p.value,class:"ds-w-full"},[i(e.$slots,"default",{},void 0,!0)],8,K)],512))}});const w=S($,[["__scopeId","data-v-edb8e785"]]);$.__docgenInfo={exportName:"default",displayName:"BTabs",description:"",tags:{},props:[{name:"headers",required:!0,type:{name:"Array",elements:[{name:"BTabsHeader"}]}},{name:"modelValue",required:!1,type:{name:"number"},defaultValue:{func:!1,value:"undefined"}},{name:"headerCssClass",required:!1,type:{name:"string"},defaultValue:{func:!1,value:"''"}}],events:[{name:"update:modelValue"}],slots:[{name:"headers-prepend"},{name:"headers-append"},{name:"default"}],sourceFiles:["/home/runner/work/design-system/design-system/src/components/BTabs/BTabs.vue"]};const W={title:"Components/Tabs",component:w,tags:["autodocs"],args:{headers:[{text:"Tab 01"},{text:"Tab 02",disabled:!0},{text:"Tab 03"},{text:"Tab 04"}],modelValue:0,headerCssClass:""}},u={render:r=>({components:{BTabs:w,BTab:G},setup(){const l=n(0);return{args:r,tab:l,subTabHeaders:[{text:"Subtab 01"},{text:"Subtab 02"}]}},template:`
      <BTabs
        v-bind="args"
        v-model="tab"
      >
        <BTab class="ds-text-center ds-mt-4">Tab content 1</BTab>
        <BTab>Tab content 2</BTab>
        <BTab class="ds-text-center ds-mt-4">Tab content 3</BTab>
        <BTab>
          <BTabs :headers="subTabHeaders">
            <BTab class="ds-text-center ds-mt-4">{{ 'Subtab content 1' }}</BTab>
            <BTab class="ds-text-center ds-mt-4">{{ 'Subtab content 2' }}</BTab>
          </BTabs>
        </BTab>
      </BTabs>
    `}),args:{}};var C,k,V;u.parameters={...u.parameters,docs:{...(C=u.parameters)==null?void 0:C.docs,source:{originalSource:`{
  render: (args: any) => ({
    components: {
      BTabs,
      BTab
    },
    setup() {
      const tab = ref(0);
      const subTabHeaders = [{
        text: 'Subtab 01'
      }, {
        text: 'Subtab 02'
      }];
      return {
        args,
        tab,
        subTabHeaders
      };
    },
    template: \`
      <BTabs
        v-bind="args"
        v-model="tab"
      >
        <BTab class="ds-text-center ds-mt-4">Tab content 1</BTab>
        <BTab>Tab content 2</BTab>
        <BTab class="ds-text-center ds-mt-4">Tab content 3</BTab>
        <BTab>
          <BTabs :headers="subTabHeaders">
            <BTab class="ds-text-center ds-mt-4">{{ 'Subtab content 1' }}</BTab>
            <BTab class="ds-text-center ds-mt-4">{{ 'Subtab content 2' }}</BTab>
          </BTabs>
        </BTab>
      </BTabs>
    \`
  }),
  args: {}
}`,...(V=(k=u.parameters)==null?void 0:k.docs)==null?void 0:V.source}}};const X=["Default"];export{u as Default,X as __namedExportsOrder,W as default};
//# sourceMappingURL=BTabs.stories-bb96dfce.js.map
