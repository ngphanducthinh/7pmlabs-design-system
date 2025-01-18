import{o as u,c,r as m,e as F,a as r,f as B,w as _,s as M,h as x,F as q,x as N,z as k,n as z,t as A}from"./vue.esm-bundler-ceeda665.js";import{_ as w}from"./_plugin-vue_export-helper-c27b6911.js";import{v as D}from"./v4-eb618527.js";const V={},G={class:"tab"};function O(n,i){return u(),c("div",G,[m(n.$slots,"default",{},void 0,!0)])}const R=w(V,[["render",O],["__scopeId","data-v-797a82dc"]]);V.__docgenInfo={displayName:"BTab",description:"",tags:{},slots:[{name:"default"}],sourceFiles:["/home/runner/work/design-system/design-system/src/components/BTabs/BTab.vue"]};const j={class:"ds-flex ds-flex-wrap ds-overflow-hidden ds-rounded-lg ds-border ds-border-gray-100 ds-bg-gray-100"},U=["onClick"],J=["id"],H=F({__name:"BTabs",props:{headers:{},modelValue:{default:void 0},headerCssClass:{default:""}},emits:["update:modelValue"],setup(n,{emit:i}){const d=n,E=i,b=r(null),t=r(null),a=r(null),s=r(0),p=r(0),f=B({get(){return d.modelValue!==void 0?d.modelValue:p.value},set(e){d.modelValue!==void 0?E("update:modelValue",e):p.value=e}}),v=B(()=>`id-${D()}`);_(f,e=>{k(()=>{h(e)})},{immediate:!0}),_(()=>d.headers,()=>{k(()=>{T()})});const $=e=>{f.value=e},h=e=>{if(a.value&&t.value)if(s.value=e,[...a.value,...t.value].forEach(o=>{o.classList.remove("active")}),a.value[s.value]&&t.value[s.value])a.value[s.value].classList.add("active"),t.value[s.value].classList.add("active");else{const o=s.value-1;o>=0&&(a.value[o].classList.add("active"),t.value[o].classList.add("active"))}},T=()=>{b.value&&(a.value=[...b.value.querySelectorAll(`#${v.value} > .tab`)],a.value.forEach(e=>{e.classList.contains("active")&&(s.value=a.value.indexOf(e))}),h(s.value))};return M(()=>{T()}),(e,o)=>(u(),c("div",{ref_key:"tabContainer",ref:b},[m(e.$slots,"headers-prepend",{},void 0,!0),x("ul",j,[(u(!0),c(q,null,N(e.headers,(g,y)=>(u(),c("li",{key:y,ref_for:!0,ref_key:"tabHeaders",ref:t,class:z([[e.headerCssClass,g.disabled?"ds-pointer-events-none ds-text-black/40":""],"tab-header ds-min-w-[5rem] ds-flex-1 ds-cursor-pointer ds-rounded-lg ds-p-2 ds-text-center ds-text-sm ds-font-medium ds-capitalize hover:ds-bg-slate-50 hover:ds-text-primary-t"]),onClick:K=>$(y)},A(g.text),11,U))),128))]),m(e.$slots,"headers-append",{},void 0,!0),x("div",{id:v.value,class:"ds-w-full"},[m(e.$slots,"default",{},void 0,!0)],8,J)],512))}});const S=w(H,[["__scopeId","data-v-6bb68883"]]);H.__docgenInfo={exportName:"default",displayName:"BTabs",description:"",tags:{},props:[{name:"headers",description:"Array of header objects.",required:!0,type:{name:"Array",elements:[{name:"BTabsHeader"}]}},{name:"modelValue",description:"Index of tab.",required:!1,type:{name:"number"},defaultValue:{func:!1,value:"undefined"}},{name:"headerCssClass",description:"CSS of header.",required:!1,type:{name:"string"},defaultValue:{func:!1,value:"''"}}],events:[{name:"update:modelValue",type:{names:["number"]},description:"Update value, param: <code>value: number</code>",properties:[{type:{names:["mixed"]},description:"e"},{type:{names:["mixed"]},name:"value"}],tags:[{title:"param",type:{name:"mixed"},description:"e"},{title:"param",type:{name:"mixed"},name:"value"}]}],slots:[{name:"headers-prepend"},{name:"headers-append"},{name:"default"}],sourceFiles:["/home/runner/work/design-system/design-system/src/components/BTabs/BTabs.vue"]};const X={title:"Components/Tabs",parameters:{docs:{description:{component:"The <code>BTabs</code> component is used for hiding content behind a selectable item."}}},component:S,tags:["autodocs"],args:{headers:[{text:"Tab 01"},{text:"Tab 02",disabled:!0},{text:"Tab 03"},{text:"Tab 04"}],modelValue:0,headerCssClass:""}},l={render:n=>({components:{BTabs:S,BTab:R},setup(){const i=r(0);return{args:n,tab:i,subTabHeaders:[{text:"Subtab 01"},{text:"Subtab 02"}]}},template:`
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
    `}),args:{}};var C,L,I;l.parameters={...l.parameters,docs:{...(C=l.parameters)==null?void 0:C.docs,source:{originalSource:`{
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
}`,...(I=(L=l.parameters)==null?void 0:L.docs)==null?void 0:I.source}}};const Y=["Default"];export{l as Default,Y as __namedExportsOrder,X as default};
