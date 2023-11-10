import{o as r,d as l,e as m,l as n,b as f}from"./vue.esm-bundler-f0a4de28.js";import{_ as d}from"./_plugin-vue_export-helper-c27b6911.js";const c={},y={class:"ds-relative ds-w-full ds-border-l-2 ds-border-primary-f/50"};function h(e,s){return r(),l("ol",y,[m(e.$slots,"default")])}const u=d(c,[["render",h]]);c.__docgenInfo={displayName:"BTimeline",description:"",tags:{},slots:[{name:"default"}],sourceFiles:["/Users/thinhnguyen/Documents/Projects/7pmlabs/design-system/src/components/BTimeline/BTimeline.vue"]};const p={},g={class:"ds-ml-4 ds-flex ds-w-full ds-items-center"},v=n("div",null,[n("div",{class:"-ds-ml-[25px] ds-h-4 ds-w-4 ds-rounded-full ds-bg-primary-f"})],-1),_={class:"ds-flex-auto"};function B(e,s){return r(),l("li",g,[v,n("div",_,[m(e.$slots,"default")])])}const T=d(p,[["render",B]]);p.__docgenInfo={displayName:"BTimelineItem",description:"",tags:{},slots:[{name:"default"}],sourceFiles:["/Users/thinhnguyen/Documents/Projects/7pmlabs/design-system/src/components/BTimeline/BTimelineItem.vue"]};const k={title:"Components/Timeline",component:u,tags:["autodocs"],args:{}},t={render:e=>({components:{BTimeline:u,BTimelineItem:T},setup(){const s=f([{title:"February 04",content:"Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."},{title:"May 12",content:"It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. "},{title:"June 01",content:"It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages."}]);return{args:e,items:s}},template:`
      <BTimeline v-bind="args">
        <BTimelineItem v-for="item in items" :key="item.title">
          <div class="ds-py-4">
            <div class="ds-text-gray-400">{{ item.title }}</div>
            <div>{{ item.content }}</div>
          </div>
        </BTimelineItem>
      </BTimeline>
    `}),args:{}};var i,a,o;t.parameters={...t.parameters,docs:{...(i=t.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
}`,...(o=(a=t.parameters)==null?void 0:a.docs)==null?void 0:o.source}}};const w=["Default"];export{t as Default,w as __namedExportsOrder,k as default};
//# sourceMappingURL=BTimeline.stories-fd78549a.js.map
