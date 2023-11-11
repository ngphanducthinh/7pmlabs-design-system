import{o as u,d as b,e as i,j as L,b as n,k as g,C as h,E,l as y,F,G as N,H as D,n as z,t as O}from"./vue.esm-bundler-f0a4de28.js";import{_ as S}from"./_plugin-vue_export-helper-c27b6911.js";import{v as j}from"./v4-a960c1f4.js";const H={},q={class:"tab"};function A(o,l){return u(),b("div",q,[i(o.$slots,"default",{},void 0,!0)])}const G=S(H,[["render",A],["__scopeId","data-v-2e65187a"]]);H.__docgenInfo={displayName:"BTab",description:"",tags:{},slots:[{name:"default"}],sourceFiles:["/home/runner/work/design-system/design-system/src/components/BTabs/BTab.vue"]};const M={class:"ds-flex ds-flex-wrap ds-overflow-hidden ds-rounded-lg ds-border ds-border-gray-100 ds-bg-gray-100"},J=["onClick"],K=["id"],$=L({__name:"BTabs",props:{headers:{},modelValue:{default:void 0},headerCssClass:{default:""}},emits:["update:modelValue"],setup(o,{emit:l}){const r=o,m=n(null),t=n(null),a=n(null),s=n(0),v=n(0),T=g({get(){return r.modelValue!==void 0?r.modelValue:v.value},set(e){r.modelValue!==void 0?l("update:modelValue",e):v.value=e}}),p=g(()=>`id-${j()}`);h(T,e=>{f(e)}),h(()=>r.headers,()=>{D(()=>{B()})});const I=e=>{T.value=e},f=e=>{if(a.value&&t.value)if(s.value=e,[...a.value,...t.value].forEach(d=>{d.classList.remove("active")}),a.value[s.value]&&t.value[s.value])a.value[s.value].classList.add("active"),t.value[s.value].classList.add("active");else{const d=s.value-1;d>=0&&(a.value[d].classList.add("active"),t.value[d].classList.add("active"))}},B=()=>{m.value&&(a.value=[...m.value.querySelectorAll(`#${p.value} > .tab`)],a.value.forEach(e=>{e.classList.contains("active")&&(s.value=a.value.indexOf(e))}),f(s.value))};return E(()=>{B()}),(e,d)=>(u(),b("div",{ref_key:"tabContainer",ref:m},[i(e.$slots,"headers-prepend",{},void 0,!0),y("ul",M,[(u(!0),b(F,null,N(e.headers,(_,x)=>(u(),b("li",{key:x,ref_for:!0,ref_key:"tabHeaders",ref:t,class:z([[e.headerCssClass,_.disabled?"ds-pointer-events-none ds-text-black/40":""],"tab-header ds-min-w-[5rem] ds-flex-1 ds-cursor-pointer ds-rounded-lg ds-p-2 ds-text-center ds-text-sm ds-font-medium ds-capitalize hover:ds-bg-slate-50 hover:ds-text-primary-t"]),onClick:P=>I(x)},O(_.text),11,J))),128))]),i(e.$slots,"headers-append",{},void 0,!0),y("div",{id:p.value,class:"ds-w-full"},[i(e.$slots,"default",{},void 0,!0)],8,K)],512))}});const w=S($,[["__scopeId","data-v-79ab6bcb"]]);$.__docgenInfo={exportName:"default",displayName:"BTabs",description:"",tags:{},props:[{name:"modelValue",defaultValue:{func:!1,value:"undefined"}},{name:"headerCssClass",defaultValue:{func:!1,value:"''"}}],events:[{name:"update:modelValue"}],slots:[{name:"headers-prepend"},{name:"headers-append"},{name:"default"}],sourceFiles:["/home/runner/work/design-system/design-system/src/components/BTabs/BTabs.vue"]};const W={title:"Components/Tabs",component:w,tags:["autodocs"],args:{headers:[{text:"Tab 01"},{text:"Tab 02",disabled:!0},{text:"Tab 03"},{text:"Tab 04"}],modelValue:0,headerCssClass:""}},c={render:o=>({components:{BTabs:w,BTab:G},setup(){const l=n(0);return{args:o,tab:l,subTabHeaders:[{text:"Subtab 01"},{text:"Subtab 02"}]}},template:`
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
    `}),args:{}};var C,k,V;c.parameters={...c.parameters,docs:{...(C=c.parameters)==null?void 0:C.docs,source:{originalSource:`{
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
}`,...(V=(k=c.parameters)==null?void 0:k.docs)==null?void 0:V.source}}};const X=["Default"];export{c as Default,X as __namedExportsOrder,W as default};
//# sourceMappingURL=BTabs.stories-108a16ee.js.map
