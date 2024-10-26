import{B as r}from"./BTextField-87578f2d.js";import{a as s}from"./vue.esm-bundler-ceeda665.js";import"./Validation-e4311cdc.js";import"./Common-74b424b5.js";import"./vue-i18n-5bf62172.js";import"./BErrorMessage-4dbabbe9.js";import"./BLabel-93eef36b.js";import"./v4-eb618527.js";import"./_plugin-vue_export-helper-c27b6911.js";const x={title:"Components/TextField",parameters:{docs:{description:{component:"The <code>BTextField</code> component is used for collecting user provided information."}}},component:r,tags:["autodocs"],argTypes:{prependIcon:{control:"text",description:"Prepend icon"},appendIcon:{control:"text",description:"Append icon"}},args:{inputId:"",inputCssClass:"",validationRules:void 0,label:"",placeholder:"",autocomplete:!1,disabled:!1,readonly:!1,type:"text",required:!1,requiredErrorMessage:"",hideDetails:!1,inputHandler:void 0,inputmode:"text"}},e={render:n=>({components:{BTextField:r},setup(){const p=s("");return{args:n,text:p}},template:`
      <BTextField v-bind="args" v-model="text">
        <template v-if="args.prependIcon" #prependIcon><span v-html="args.prependIcon" /></template>
        <template v-if="args.appendIcon" #appendIcon><span v-html="args.appendIcon" /></template>
      </BTextField>
      <div style="font-size: 0.75rem; color: gray; margin-top: 1rem">
        <b>FontAwesome v6.1.0 - Solid</b> has been imported already & can be used for demo.
      </div>
    `}),args:{modelValue:"",prependIcon:"",appendIcon:'<i class="fa-solid fa-magnifying-glass" />'}};var t,o,a;e.parameters={...e.parameters,docs:{...(t=e.parameters)==null?void 0:t.docs,source:{originalSource:`{
  render: (args: any) => ({
    components: {
      BTextField
    },
    setup() {
      const text = ref('');
      return {
        args,
        text
      };
    },
    template: \`
      <BTextField v-bind="args" v-model="text">
        <template v-if="args.prependIcon" #prependIcon><span v-html="args.prependIcon" /></template>
        <template v-if="args.appendIcon" #appendIcon><span v-html="args.appendIcon" /></template>
      </BTextField>
      <div style="font-size: 0.75rem; color: gray; margin-top: 1rem">
        <b>FontAwesome v6.1.0 - Solid</b> has been imported already & can be used for demo.
      </div>
    \`
  }),
  args: {
    modelValue: '',
    prependIcon: '',
    appendIcon: '<i class="fa-solid fa-magnifying-glass" />'
  }
}`,...(a=(o=e.parameters)==null?void 0:o.docs)==null?void 0:a.source}}};const I=["Default"];export{e as Default,I as __namedExportsOrder,x as default};
