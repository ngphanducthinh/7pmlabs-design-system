import{B as a}from"./BOverlay-0888f636.js";import"./vue.esm-bundler-29df2e62.js";import"./_plugin-vue_export-helper-c27b6911.js";const p={title:"Components/Overlay",parameters:{docs:{description:{component:"The <code>BOverlay</code> is used for displaying an overlay."}}},component:a,tags:["autodocs"],args:{}},e={render:r=>({components:{BOverlay:a},setup(){return{args:r}},template:`
      <div style="height: 400px">
        <div>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book</div>
        <BOverlay v-bind="args">
          <span class="ds-text-white">Overlay's content...</span>
        </BOverlay>
      </div>
    `}),args:{}};var t,n,s;e.parameters={...e.parameters,docs:{...(t=e.parameters)==null?void 0:t.docs,source:{originalSource:`{
  render: (args: any) => ({
    components: {
      BOverlay
    },
    setup() {
      return {
        args
      };
    },
    template: \`
      <div style="height: 400px">
        <div>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book</div>
        <BOverlay v-bind="args">
          <span class="ds-text-white">Overlay's content...</span>
        </BOverlay>
      </div>
    \`
  }),
  args: {}
}`,...(s=(n=e.parameters)==null?void 0:n.docs)==null?void 0:s.source}}};const m=["Default"];export{e as Default,m as __namedExportsOrder,p as default};
