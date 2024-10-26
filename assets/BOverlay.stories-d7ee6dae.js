import{B as r}from"./BOverlay-6e4173f0.js";import"./vue.esm-bundler-ceeda665.js";import"./_plugin-vue_export-helper-c27b6911.js";const m={title:"Components/Overlay",parameters:{docs:{description:{component:"The <code>BOverlay</code> is used for displaying an overlay."}}},component:r,tags:["autodocs"],args:{}},e={render:a=>({components:{BOverlay:r},setup(){return{args:a}},template:`
      <div style="height: 400px">
        <div>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book</div>
        <BOverlay v-bind="args">
          <i class="fa-solid fa-wrench ds-text-4xl ds-text-white" />
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
          <i class="fa-solid fa-wrench ds-text-4xl ds-text-white" />
        </BOverlay>
      </div>
    \`
  }),
  args: {}
}`,...(s=(n=e.parameters)==null?void 0:n.docs)==null?void 0:s.source}}};const p=["Default"];export{e as Default,p as __namedExportsOrder,m as default};
