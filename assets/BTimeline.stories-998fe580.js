import{o as a,c as l,r as m,h as n,a as y}from"./vue.esm-bundler-ceeda665.js";import{_ as d}from"./_plugin-vue_export-helper-c27b6911.js";const c={},f={class:"ds-relative ds-w-full ds-border-l-2 ds-border-primary-f/50"};function g(e,t){return a(),l("ol",f,[m(e.$slots,"default")])}const u=d(c,[["render",g]]);c.__docgenInfo={displayName:"BTimeline",description:"",tags:{},slots:[{name:"default"}],sourceFiles:["/home/runner/work/design-system/design-system/src/components/BTimeline/BTimeline.vue"]};const p={},h={class:"ds-ml-4 ds-flex ds-w-full ds-items-center"},v={class:"ds-flex-auto"};function _(e,t){return a(),l("li",h,[t[0]||(t[0]=n("div",null,[n("div",{class:"-ds-ml-[25px] ds-h-4 ds-w-4 ds-rounded-full ds-bg-primary-f"})],-1)),n("div",v,[m(e.$slots,"default")])])}const B=d(p,[["render",_]]);p.__docgenInfo={displayName:"BTimelineItem",description:"",tags:{},slots:[{name:"default"}],sourceFiles:["/home/runner/work/design-system/design-system/src/components/BTimeline/BTimelineItem.vue"]};const b={title:"Components/Timeline",parameters:{docs:{description:{component:"The <code>BTimeline</code> component is used for stylistically displaying chronological information."}}},component:u,tags:["autodocs"],args:{}},s={render:e=>({components:{BTimeline:u,BTimelineItem:B},setup(){const t=y([{title:"February 04",content:"Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."},{title:"May 12",content:"It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. "},{title:"June 01",content:"It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages."}]);return{args:e,items:t}},template:`
      <BTimeline v-bind="args">
        <BTimelineItem v-for="item in items" :key="item.title">
          <div class="ds-py-4">
            <div class="ds-text-gray-400">{{ item.title }}</div>
            <div>{{ item.content }}</div>
          </div>
        </BTimelineItem>
      </BTimeline>
    `}),args:{}};var i,o,r;s.parameters={...s.parameters,docs:{...(i=s.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
}`,...(r=(o=s.parameters)==null?void 0:o.docs)==null?void 0:r.source}}};const k=["Default"];export{s as Default,k as __namedExportsOrder,b as default};
