import{o as u,d as b,e as i,j as w,b as d,k as x,C as g,E as D,l as y,F as E,G as F,H as N,n as j,t as z}from"./vue.esm-bundler-f0a4de28.js";import{_ as k}from"./_plugin-vue_export-helper-c27b6911.js";import{v as O}from"./v4-a960c1f4.js";const H={},P={class:"tab"};function U(o,l){return u(),b("div",P,[i(o.$slots,"default",{},void 0,!0)])}const q=k(H,[["render",U],["__scopeId","data-v-2e65187a"]]);H.__docgenInfo={displayName:"BTab",description:"",tags:{},slots:[{name:"default"}],sourceFiles:["/Users/thinhnguyen/Documents/Projects/7pmlabs/design-system/src/components/BTabs/BTab.vue"]};const A={class:"ds-flex ds-flex-wrap ds-overflow-hidden ds-rounded-lg ds-border ds-border-gray-100 ds-bg-gray-100"},G=["onClick"],M=["id"],$=w({__name:"BTabs",props:{headers:{},modelValue:{default:void 0},headerCssClass:{default:""}},emits:["update:modelValue"],setup(o,{emit:l}){const r=o,m=d(null),t=d(null),a=d(null),s=d(0),v=d(0),T=x({get(){return r.modelValue!==void 0?r.modelValue:v.value},set(e){r.modelValue!==void 0?l("update:modelValue",e):v.value=e}}),p=x(()=>`id-${O()}`);g(T,e=>{f(e)}),g(()=>r.headers,()=>{N(()=>{B()})});const L=e=>{T.value=e},f=e=>{if(a.value&&t.value)if(s.value=e,[...a.value,...t.value].forEach(n=>{n.classList.remove("active")}),a.value[s.value]&&t.value[s.value])a.value[s.value].classList.add("active"),t.value[s.value].classList.add("active");else{const n=s.value-1;n>=0&&(a.value[n].classList.add("active"),t.value[n].classList.add("active"))}},B=()=>{m.value&&(a.value=[...m.value.querySelectorAll(`#${p.value} > .tab`)],a.value.forEach(e=>{e.classList.contains("active")&&(s.value=a.value.indexOf(e))}),f(s.value))};return D(()=>{B()}),(e,n)=>(u(),b("div",{ref_key:"tabContainer",ref:m},[i(e.$slots,"headers-prepend",{},void 0,!0),y("ul",A,[(u(!0),b(E,null,F(e.headers,(_,h)=>(u(),b("li",{key:h,ref_for:!0,ref_key:"tabHeaders",ref:t,class:j([[e.headerCssClass,_.disabled?"ds-pointer-events-none ds-text-black/40":""],"tab-header ds-min-w-[5rem] ds-flex-1 ds-cursor-pointer ds-rounded-lg ds-p-2 ds-text-center ds-text-sm ds-font-medium ds-capitalize hover:ds-bg-slate-50 hover:ds-text-primary-t"]),onClick:J=>L(h)},z(_.text),11,G))),128))]),i(e.$slots,"headers-append",{},void 0,!0),y("div",{id:p.value,class:"ds-w-full"},[i(e.$slots,"default",{},void 0,!0)],8,M)],512))}});const I=k($,[["__scopeId","data-v-79ab6bcb"]]);$.__docgenInfo={exportName:"default",displayName:"BTabs",description:"",tags:{},props:[{name:"modelValue",defaultValue:{func:!1,value:"undefined"}},{name:"headerCssClass",defaultValue:{func:!1,value:"''"}}],events:[{name:"update:modelValue"}],slots:[{name:"headers-prepend"},{name:"headers-append"},{name:"default"}],sourceFiles:["/Users/thinhnguyen/Documents/Projects/7pmlabs/design-system/src/components/BTabs/BTabs.vue"]};const W={title:"Components/Tabs",component:I,tags:["autodocs"],args:{headers:[{text:"Tab 01"},{text:"Tab 02",disabled:!0},{text:"Tab 03"},{text:"Tab 04"}],modelValue:0,headerCssClass:""}},c={render:o=>({components:{BTabs:I,BTab:q},setup(){const l=d(0);return{args:o,tab:l,subTabHeaders:[{text:"Subtab 01"},{text:"Subtab 02"}]}},template:`
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
    `}),args:{}};var C,V,S;c.parameters={...c.parameters,docs:{...(C=c.parameters)==null?void 0:C.docs,source:{originalSource:`{
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
}`,...(S=(V=c.parameters)==null?void 0:V.docs)==null?void 0:S.source}}};const X=["Default"];export{c as Default,X as __namedExportsOrder,W as default};
//# sourceMappingURL=BTabs.stories-3f19b647.js.map
