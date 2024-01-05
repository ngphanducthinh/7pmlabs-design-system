import{B as a}from"./BTextField-f3c25091.js";import{e as s}from"./vue.esm-bundler-29df2e62.js";import"./Validation-5669da51.js";import"./Common-43134899.js";import"./vue-i18n.esm-bundler-152c8982.js";import"./BErrorMessage-4d077c5c.js";import"./BLabel-57c6859e.js";import"./v4-a960c1f4.js";import"./_plugin-vue_export-helper-c27b6911.js";const x={title:"Components/TextField",parameters:{docs:{description:{component:"Text field components are used for collecting user provided information."}}},component:a,tags:["autodocs"],argTypes:{prependIcon:{control:"text",description:"Prepend icon"},appendIcon:{control:"text",description:"Append icon"}},args:{inputId:"",inputCssClass:"",validationRules:void 0,label:"",placeholder:"",autocomplete:!1,disabled:!1,readonly:!1,type:"text",required:!1,requiredErrorMessage:"",hideDetails:!1,inputHandler:void 0,inputmode:"text"}},e={render:r=>({components:{BTextField:a},setup(){const p=s("");return{args:r,text:p}},template:`
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
