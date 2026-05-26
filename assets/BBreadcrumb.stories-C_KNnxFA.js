import{n as e}from"./chunk-BneVvdWh.js";import{t,wt as n}from"./components-B32Ts1jj.js";var r,i,a,o,s,c,l,u,d,f,p,m;e((()=>{t(),{expect:r,within:i}=__STORYBOOK_MODULE_TEST__,a=[{text:`Home`,href:`/`},{text:`Application Center`,href:`/app`},{text:`Application List`,href:`/app/list`},{text:`An Application`}],o={title:`Navigation/Breadcrumb`,component:n,tags:[`autodocs`],argTypes:{separator:{control:`text`,description:`Custom separator string`},items:{control:`object`,description:`Array of breadcrumb items`}},parameters:{docs:{description:{component:`The <code>BBreadcrumb</code> component shows the current page location within a navigational hierarchy. Supports responsive collapsing, custom separators, icons, and custom item/separator slots.`}}}},s={args:{items:a,separator:`/`},render:e=>({components:{BBreadcrumb:n},setup(){return{args:e}},template:`<BBreadcrumb v-bind="args" />`})},c={args:{items:a,separator:`>`},render:e=>({components:{BBreadcrumb:n},setup(){return{args:e}},template:`<BBreadcrumb v-bind="args" />`})},l={args:{items:[{text:`Home`,href:`/`,icon:`house`},{text:`Products`,href:`/products`,icon:`box`},{text:`Detail`}],separator:`/`},render:e=>({components:{BBreadcrumb:n},setup(){return{args:e}},template:`<BBreadcrumb v-bind="args" />`})},u={args:{items:a,separator:`/`},render:e=>({components:{BBreadcrumb:n},setup(){return{args:e}},template:`
      <div style="width: 240px; border: 1px dashed #ccc; padding: 8px;">
        <BBreadcrumb v-bind="args" />
      </div>
    `}),parameters:{docs:{description:{story:`In a narrow container, middle items collapse into a "•••" menu. Click to reveal them.`}}}},d={args:{items:a},render:e=>({components:{BBreadcrumb:n},setup(){return{args:e}},template:`
      <BBreadcrumb v-bind="args">
        <template #item-0="{ item }">
          <span style="font-weight:700; color: var(--b-breadcrumb-link-hover-color)">🏠 {{ item.text }}</span>
        </template>
      </BBreadcrumb>
    `})},f={args:{items:a,separator:`/`},render:e=>({components:{BBreadcrumb:n},setup(){return{args:e}},template:`<BBreadcrumb v-bind="args" />`}),parameters:{docs:{description:{story:`Verifies semantic roles, aria attributes, and keyboard navigation. The last item carries <code>aria-current="page"</code>; separators are <code>aria-hidden</code>.`}}},play:async({canvasElement:e})=>{i(e);let t=e.querySelectorAll(`a.b-breadcrumb__link`),n=t[t.length-1];r(n.getAttribute(`aria-current`)).toBe(`page`),r(e.querySelector(`nav.b-breadcrumb`)?.getAttribute(`aria-label`)).toBe(`Breadcrumb`),e.querySelectorAll(`.b-breadcrumb__separator`).forEach(e=>{r(e.closest(`[aria-hidden="true"]`)||e.getAttribute(`aria-hidden`)).toBeTruthy()}),t[0].focus(),r(document.activeElement).toBe(t[0])}},p={args:{items:a,separator:`/`},render:e=>({components:{BBreadcrumb:n},setup(){return{args:e}},template:`
      <div style="padding: 12px; border-radius: 8px; background: #f5f3ff;">
        <BBreadcrumb
          v-bind="args"
          :style="{
            '--b-breadcrumb-link-color':       '#5b21b6',
            '--b-breadcrumb-link-hover-color': '#3b0764',
            '--b-breadcrumb-separator-color':  '#6d28d9',
            '--b-breadcrumb-last-item-color':  '#1e1b4b',
            '--b-breadcrumb-ellipsis-bg':      '#ede9fe',
          }"
        />
      </div>
    `}),parameters:{docs:{description:{story:`Override CSS variables via <code>:style</code> on the component (not a wrapper element) so inline styles beat the component's own stylesheet declarations. All colours pass WCAG AA contrast against the <code>#f5f3ff</code> background.`}}}},s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    items: SAMPLE_ITEMS,
    separator: '/'
  },
  render: args => ({
    components: {
      BBreadcrumb
    },
    setup() {
      return {
        args
      };
    },
    template: \`<BBreadcrumb v-bind="args" />\`
  })
}`,...s.parameters?.docs?.source}}},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    items: SAMPLE_ITEMS,
    separator: '>'
  },
  render: args => ({
    components: {
      BBreadcrumb
    },
    setup() {
      return {
        args
      };
    },
    template: \`<BBreadcrumb v-bind="args" />\`
  })
}`,...c.parameters?.docs?.source}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    items: [{
      text: 'Home',
      href: '/',
      icon: 'house'
    }, {
      text: 'Products',
      href: '/products',
      icon: 'box'
    }, {
      text: 'Detail'
    }],
    separator: '/'
  },
  render: args => ({
    components: {
      BBreadcrumb
    },
    setup() {
      return {
        args
      };
    },
    template: \`<BBreadcrumb v-bind="args" />\`
  })
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    items: SAMPLE_ITEMS,
    separator: '/'
  },
  render: args => ({
    components: {
      BBreadcrumb
    },
    setup() {
      return {
        args
      };
    },
    template: \`
      <div style="width: 240px; border: 1px dashed #ccc; padding: 8px;">
        <BBreadcrumb v-bind="args" />
      </div>
    \`
  }),
  parameters: {
    docs: {
      description: {
        story: 'In a narrow container, middle items collapse into a "•••" menu. Click to reveal them.'
      }
    }
  }
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    items: SAMPLE_ITEMS
  },
  render: args => ({
    components: {
      BBreadcrumb
    },
    setup() {
      return {
        args
      };
    },
    template: \`
      <BBreadcrumb v-bind="args">
        <template #item-0="{ item }">
          <span style="font-weight:700; color: var(--b-breadcrumb-link-hover-color)">🏠 {{ item.text }}</span>
        </template>
      </BBreadcrumb>
    \`
  })
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    items: SAMPLE_ITEMS,
    separator: '/'
  },
  render: args => ({
    components: {
      BBreadcrumb
    },
    setup() {
      return {
        args
      };
    },
    template: \`<BBreadcrumb v-bind="args" />\`
  }),
  parameters: {
    docs: {
      description: {
        story: 'Verifies semantic roles, aria attributes, and keyboard navigation. The last item carries <code>aria-current="page"</code>; separators are <code>aria-hidden</code>.'
      }
    }
  },
  play: async ({
    canvasElement
  }) => {
    within(canvasElement);

    // Last item should be aria-current=page
    const links = canvasElement.querySelectorAll('a.b-breadcrumb__link');
    const lastLink = links[links.length - 1] as HTMLElement;
    expect(lastLink.getAttribute('aria-current')).toBe('page');

    // nav has aria-label
    const nav = canvasElement.querySelector('nav.b-breadcrumb');
    expect(nav?.getAttribute('aria-label')).toBe('Breadcrumb');

    // Separators are aria-hidden
    const seps = canvasElement.querySelectorAll('.b-breadcrumb__separator');
    seps.forEach(sep => {
      expect(sep.closest('[aria-hidden="true"]') || sep.getAttribute('aria-hidden')).toBeTruthy();
    });

    // First link is focusable
    (links[0] as HTMLElement).focus();
    expect(document.activeElement).toBe(links[0]);
  }
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    items: SAMPLE_ITEMS,
    separator: '/'
  },
  render: args => ({
    components: {
      BBreadcrumb
    },
    setup() {
      return {
        args
      };
    },
    // CSS variables must be bound via :style on the component itself so they
    // land as inline styles on the <nav class="b-breadcrumb"> root element.
    // Binding them on a wrapper <div> doesn't work because the component's own
    // stylesheet declarations on .b-breadcrumb win the cascade over inherited
    // custom properties from an ancestor element.
    template: \`
      <div style="padding: 12px; border-radius: 8px; background: #f5f3ff;">
        <BBreadcrumb
          v-bind="args"
          :style="{
            '--b-breadcrumb-link-color':       '#5b21b6',
            '--b-breadcrumb-link-hover-color': '#3b0764',
            '--b-breadcrumb-separator-color':  '#6d28d9',
            '--b-breadcrumb-last-item-color':  '#1e1b4b',
            '--b-breadcrumb-ellipsis-bg':      '#ede9fe',
          }"
        />
      </div>
    \`
  }),
  parameters: {
    docs: {
      description: {
        story: "Override CSS variables via <code>:style</code> on the component (not a wrapper element) so inline styles beat the component's own stylesheet declarations. All colours pass WCAG AA contrast against the <code>#f5f3ff</code> background."
      }
    }
  }
}`,...p.parameters?.docs?.source}}},m=[`Playground`,`CustomSeparator`,`WithIcons`,`ResponsiveCollapse`,`CustomItemSlot`,`Accessibility`,`Theming`]}))();export{f as Accessibility,d as CustomItemSlot,c as CustomSeparator,s as Playground,u as ResponsiveCollapse,p as Theming,l as WithIcons,m as __namedExportsOrder,o as default};