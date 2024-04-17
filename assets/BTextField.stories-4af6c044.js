import{B as a}from"./BTextField-1393164c.js";import{a as s}from"./vue.esm-bundler-91340787.js";import"./Validation-27d7dd5e.js";import"./Common-c3b475f1.js";import"./vue-i18n-16525cc0.js";import"./BErrorMessage-a6c8362f.js";import"./BLabel-c8f5ffc2.js";import"./v4-4a60fe23.js";import"./_plugin-vue_export-helper-c27b6911.js";const x={title:"Components/TextField",parameters:{docs:{description:{component:"The <code>BTextField</code> component is used for collecting user provided information."}}},component:a,tags:["autodocs"],argTypes:{prependIcon:{control:"text",description:"Prepend icon"},appendIcon:{control:"text",description:"Append icon"}},args:{inputId:"",inputCssClass:"",validationRules:void 0,label:"",placeholder:"",autocomplete:!1,disabled:!1,readonly:!1,type:"text",required:!1,requiredErrorMessage:"",hideDetails:!1,inputHandler:void 0,inputmode:"text"}},e={render:r=>({components:{BTextField:a},setup(){const p=s("");return{args:r,text:p}},template:`
      <BTextField v-bind="args" v-model="text">
        <template v-if="args.prependIcon" #prependIcon><span v-html="args.prependIcon" /></template>
        <template v-if="args.appendIcon" #appendIcon><span v-html="args.appendIcon" /></template>
      </BTextField>
      <div style="font-size: 0.75rem; color: gray; margin-top: 1rem">
        <b>FontAwesome v6.1.0 - Solid</b> has been imported already & can be used for demo.
      </div>
    `}),args:{modelValue:"",prependIcon:"",appendIcon:'<i class="fa-solid fa-magnifying-glass" />'}};var n,t,o;e.parameters={...e.parameters,docs:{...(n=e.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
}`,...(o=(t=e.parameters)==null?void 0:t.docs)==null?void 0:o.source}}};const I=["Default"];export{e as Default,I as __namedExportsOrder,x as default};
