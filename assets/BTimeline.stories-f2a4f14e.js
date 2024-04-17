import{o as r,c as l,r as m,g as s,a as y}from"./vue.esm-bundler-91340787.js";import{_ as d}from"./_plugin-vue_export-helper-c27b6911.js";const c={},f={class:"ds-relative ds-w-full ds-border-l-2 ds-border-primary-f/50"};function g(e,t){return r(),l("ol",f,[m(e.$slots,"default")])}const u=d(c,[["render",g]]);c.__docgenInfo={displayName:"BTimeline",description:"",tags:{},slots:[{name:"default"}],sourceFiles:["/home/runner/work/design-system/design-system/src/components/BTimeline/BTimeline.vue"]};const p={},h={class:"ds-ml-4 ds-flex ds-w-full ds-items-center"},v=s("div",null,[s("div",{class:"-ds-ml-[25px] ds-h-4 ds-w-4 ds-rounded-full ds-bg-primary-f"})],-1),_={class:"ds-flex-auto"};function B(e,t){return r(),l("li",h,[v,s("div",_,[m(e.$slots,"default")])])}const T=d(p,[["render",B]]);p.__docgenInfo={displayName:"BTimelineItem",description:"",tags:{},slots:[{name:"default"}],sourceFiles:["/home/runner/work/design-system/design-system/src/components/BTimeline/BTimelineItem.vue"]};const k={title:"Components/Timeline",parameters:{docs:{description:{component:"The <code>BTimeline</code> component is used for stylistically displaying chronological information."}}},component:u,tags:["autodocs"],args:{}},n={render:e=>({components:{BTimeline:u,BTimelineItem:T},setup(){const t=y([{title:"February 04",content:"Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."},{title:"May 12",content:"It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. "},{title:"June 01",content:"It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages."}]);return{args:e,items:t}},template:`
      <BTimeline v-bind="args">
        <BTimelineItem v-for="item in items" :key="item.title">
          <div class="ds-py-4">
            <div class="ds-text-gray-400">{{ item.title }}</div>
            <div>{{ item.content }}</div>
          </div>
        </BTimelineItem>
      </BTimeline>
    `}),args:{}};var i,o,a;n.parameters={...n.parameters,docs:{...(i=n.parameters)==null?void 0:i.docs,source:{originalSource:`{
  render: (args: any) => ({
    components: {
      BTimeline,
      BTimelineItem
    },
    setup() {
      const items = ref([{
        title: 'February 04',
        content: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
      }, {
        title: 'May 12',
        content: 'It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. '
      }, {
        title: 'June 01',
        content: 'It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages.'
      }]);
      // Return
      return {
        args,
        items
      };
    },
    template: \`
      <BTimeline v-bind="args">
        <BTimelineItem v-for="item in items" :key="item.title">
          <div class="ds-py-4">
            <div class="ds-text-gray-400">{{ item.title }}</div>
            <div>{{ item.content }}</div>
          </div>
        </BTimelineItem>
      </BTimeline>
    \`
  }),
  args: {}
}`,...(a=(o=n.parameters)==null?void 0:o.docs)==null?void 0:a.source}}};const w=["Default"];export{n as Default,w as __namedExportsOrder,k as default};
