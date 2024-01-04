import{o as u,b as c,d as m,j as E,e as o,k as B,C as _,E as $,l as k,G as F,H as M,F as q,n as N,t as A}from"./vue.esm-bundler-3f3ee96a.js";import{_ as I}from"./_plugin-vue_export-helper-c27b6911.js";import{v as D}from"./v4-a960c1f4.js";const w={},G={class:"tab"};function j(r,i){return u(),c("div",G,[m(r.$slots,"default",{},void 0,!0)])}const z=I(w,[["render",j],["__scopeId","data-v-c57e2dad"]]);w.__docgenInfo={displayName:"BTab",description:"",tags:{},slots:[{name:"default"}],sourceFiles:["/home/runner/work/design-system/design-system/src/components/BTabs/BTab.vue"]};const O={class:"ds-flex ds-flex-wrap ds-overflow-hidden ds-rounded-lg ds-border ds-border-gray-100 ds-bg-gray-100"},R=["onClick"],J=["id"],V=E({__name:"BTabs",props:{headers:{},modelValue:{default:void 0},headerCssClass:{default:""}},emits:["update:modelValue"],setup(r,{emit:i}){const d=r,b=o(null),t=o(null),a=o(null),s=o(0),p=o(0),f=B({get(){return d.modelValue!==void 0?d.modelValue:p.value},set(e){d.modelValue!==void 0?i("update:modelValue",e):p.value=e}}),v=B(()=>`id-${D()}`);_(f,e=>{h(e)}),_(()=>d.headers,()=>{q(()=>{T()})});const S=e=>{f.value=e},h=e=>{if(a.value&&t.value)if(s.value=e,[...a.value,...t.value].forEach(n=>{n.classList.remove("active")}),a.value[s.value]&&t.value[s.value])a.value[s.value].classList.add("active"),t.value[s.value].classList.add("active");else{const n=s.value-1;n>=0&&(a.value[n].classList.add("active"),t.value[n].classList.add("active"))}},T=()=>{b.value&&(a.value=[...b.value.querySelectorAll(`#${v.value} > .tab`)],a.value.forEach(e=>{e.classList.contains("active")&&(s.value=a.value.indexOf(e))}),h(s.value))};return $(()=>{T()}),(e,n)=>(u(),c("div",{ref_key:"tabContainer",ref:b},[m(e.$slots,"headers-prepend",{},void 0,!0),k("ul",O,[(u(!0),c(F,null,M(e.headers,(g,y)=>(u(),c("li",{key:y,ref_for:!0,ref_key:"tabHeaders",ref:t,class:N([[e.headerCssClass,g.disabled?"ds-pointer-events-none ds-text-black/40":""],"tab-header ds-min-w-[5rem] ds-flex-1 ds-cursor-pointer ds-rounded-lg ds-p-2 ds-text-center ds-text-sm ds-font-medium ds-capitalize hover:ds-bg-slate-50 hover:ds-text-primary-t"]),onClick:K=>S(y)},A(g.text),11,R))),128))]),m(e.$slots,"headers-append",{},void 0,!0),k("div",{id:v.value,class:"ds-w-full"},[m(e.$slots,"default",{},void 0,!0)],8,J)],512))}});const H=I(V,[["__scopeId","data-v-0e61b97f"]]);V.__docgenInfo={exportName:"default",displayName:"BTabs",description:"",tags:{},props:[{name:"headers",description:"Array of header objects.",required:!0,type:{name:"Array",elements:[{name:"BTabsHeader"}]}},{name:"modelValue",description:"Index of tab.",required:!1,type:{name:"number"},defaultValue:{func:!1,value:"undefined"}},{name:"headerCssClass",description:"CSS of header.",required:!1,type:{name:"string"},defaultValue:{func:!1,value:"''"}}],slots:[{name:"headers-prepend"},{name:"headers-append"},{name:"default"}],sourceFiles:["/home/runner/work/design-system/design-system/src/components/BTabs/BTabs.vue"]};const W={title:"Components/Tabs",component:H,tags:["autodocs"],args:{headers:[{text:"Tab 01"},{text:"Tab 02",disabled:!0},{text:"Tab 03"},{text:"Tab 04"}],modelValue:0,headerCssClass:""}},l={render:r=>({components:{BTabs:H,BTab:z},setup(){const i=o(0);return{args:r,tab:i,subTabHeaders:[{text:"Subtab 01"},{text:"Subtab 02"}]}},template:`
      <BTabs
        v-bind="args"
        v-model="tab"
      >
        <BTab class="ds-mt-4">
          <div>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.</div>
        </BTab>
        <BTab>
          <div>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</div>
        </BTab>
        <BTab class="ds-mt-4">
          <div>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.</div>
        </BTab>
        <BTab>
          <BTabs :headers="subTabHeaders">
            <BTab class="ds-mt-4">
              Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source.
            </BTab>
            <BTab class="ds-mt-4">
              Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC.
            </BTab>
          </BTabs>
        </BTab>
      </BTabs>
    `}),args:{}};var C,x,L;l.parameters={...l.parameters,docs:{...(C=l.parameters)==null?void 0:C.docs,source:{originalSource:`{
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
        <BTab class="ds-mt-4">
          <div>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.</div>
        </BTab>
        <BTab>
          <div>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</div>
        </BTab>
        <BTab class="ds-mt-4">
          <div>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.</div>
        </BTab>
        <BTab>
          <BTabs :headers="subTabHeaders">
            <BTab class="ds-mt-4">
              Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source.
            </BTab>
            <BTab class="ds-mt-4">
              Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC.
            </BTab>
          </BTabs>
        </BTab>
      </BTabs>
    \`
  }),
  args: {}
}`,...(L=(x=l.parameters)==null?void 0:x.docs)==null?void 0:L.source}}};const X=["Default"];export{l as Default,X as __namedExportsOrder,W as default};
