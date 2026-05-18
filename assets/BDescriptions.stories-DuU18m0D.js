import{n as e}from"./chunk-BneVvdWh.js";import{H as t,V as n,t as r}from"./components-_FfmWUAp.js";var i,a,o,s,c,l,u,d,f,p,m,h,g,_,v;e((()=>{r(),{expect:i,within:a}=__STORYBOOK_MODULE_TEST__,o={title:`Data Display/Descriptions`,component:t,tags:[`autodocs`],argTypes:{title:{control:`text`,description:`Title of the descriptions block.`,table:{category:`Props`}},extra:{control:`text`,description:`Extra content in the top-right corner.`,table:{category:`Props`}},bordered:{control:`boolean`,description:`Whether to show border around the table.`,table:{defaultValue:{summary:`false`},category:`Props`}},colon:{control:`boolean`,description:`Whether to show colon after the label.`,table:{defaultValue:{summary:`true`},category:`Props`}},column:{control:{type:`number`,min:1,max:6},description:`Number of columns per row.`,table:{defaultValue:{summary:`3`},category:`Props`}},layout:{control:`select`,options:[`horizontal`,`vertical`],description:`Layout direction of description items.`,table:{defaultValue:{summary:`horizontal`},category:`Props`}},size:{control:`select`,options:[`default`,`middle`,`small`],description:`Size of the component.`,table:{defaultValue:{summary:`default`},category:`Props`}}},parameters:{docs:{description:{component:`The <code>BDescriptions</code> component displays a list of label–value pairs in a structured layout.<br><br>Supports <strong>bordered</strong> and non-bordered modes, <strong>horizontal</strong> and <strong>vertical</strong> layouts, <strong>column</strong> control, <strong>span</strong> for items, and three <strong>size</strong> variants.<br>Items can be provided via the <code>items</code> prop or as <code>BDescriptionsItem</code> slot children.<br>Theming via <code>--b-descriptions-*</code> CSS custom properties. Respects <code>prefers-reduced-motion</code>.`}}}},s=[{label:`UserName`,children:`Zhou Maomao`},{label:`Telephone`,children:`1810000000`},{label:`Live`,children:`Hangzhou, Zhejiang`},{label:`Remark`,children:`Empty`},{label:`Address`,children:`No. 18, Wantang Road, Xihu District, Hangzhou, Zhejiang, China`}],c={args:{title:`User Info`,bordered:!1,colon:!0,column:3,layout:`horizontal`,size:`default`},render:e=>({components:{BDescriptions:t},setup(){return{args:e,sampleItems:s}},template:`
      <BDescriptions v-bind="args" :items="sampleItems">
        <template #extra><a href="#">Edit</a></template>
      </BDescriptions>
    `})},l={parameters:{controls:{disable:!0},docs:{source:{code:`
<BDescriptions title="User Info" :items="items" />
        `}}},render:()=>({components:{BDescriptions:t},setup(){return{sampleItems:s}},template:`
      <BDescriptions data-testid="basic" title="User Info" :items="sampleItems" />
    `}),play:async({canvasElement:e})=>{let t=a(e).getByTestId(`basic`);i(t.querySelector(`.b-descriptions__title`)?.textContent).toBe(`User Info`),i(t.querySelector(`.b-descriptions__item-label`)?.textContent).toContain(`UserName`),i(t.querySelector(`.b-descriptions__item-content`)?.textContent).toContain(`Zhou Maomao`),i(t.classList.contains(`b-descriptions--colon`)).toBe(!0)}},u={parameters:{controls:{disable:!0},docs:{source:{code:`
<BDescriptions title="User Info" bordered :items="items" />
        `}}},render:()=>({components:{BDescriptions:t},setup(){return{sampleItems:s}},template:`
      <BDescriptions data-testid="bordered" title="User Info" bordered :items="sampleItems" />
    `}),play:async({canvasElement:e})=>{let t=a(e).getByTestId(`bordered`);i(t.classList.contains(`b-descriptions--bordered`)).toBe(!0),i(t.querySelectorAll(`th.b-descriptions__item-label--bordered`).length).toBeGreaterThan(0),i(t.querySelectorAll(`td.b-descriptions__item-content--bordered`).length).toBeGreaterThan(0)}},d={parameters:{controls:{disable:!0},docs:{source:{code:`
<BDescriptions title="Default" size="default" bordered :items="items" />
<BDescriptions title="Middle" size="middle" bordered :items="items" />
<BDescriptions title="Small" size="small" bordered :items="items" />
        `}}},render:()=>({components:{BDescriptions:t},setup(){return{sampleItems:s}},template:`
      <div style="display:flex;flex-direction:column;gap:2rem;">
        <BDescriptions data-testid="size-default" title="Default" size="default" bordered :items="sampleItems" />
        <BDescriptions data-testid="size-middle" title="Middle" size="middle" bordered :items="sampleItems" />
        <BDescriptions data-testid="size-small" title="Small" size="small" bordered :items="sampleItems" />
      </div>
    `}),play:async({canvasElement:e})=>{let t=a(e);i(t.getByTestId(`size-middle`).classList.contains(`b-descriptions--middle`)).toBe(!0),i(t.getByTestId(`size-small`).classList.contains(`b-descriptions--small`)).toBe(!0)}},f={parameters:{controls:{disable:!0},docs:{source:{code:`
<BDescriptions title="Vertical" layout="vertical" :items="items" />
<BDescriptions title="Vertical Bordered" layout="vertical" bordered :items="items" />
        `}}},render:()=>({components:{BDescriptions:t},setup(){return{sampleItems:s}},template:`
      <div style="display:flex;flex-direction:column;gap:2rem;">
        <BDescriptions data-testid="vert" title="Vertical" layout="vertical" :items="sampleItems" />
        <BDescriptions data-testid="vert-bordered" title="Vertical Bordered" layout="vertical" bordered :items="sampleItems" />
      </div>
    `}),play:async({canvasElement:e})=>{let t=a(e);i(t.getByTestId(`vert`).classList.contains(`b-descriptions--vertical`)).toBe(!0);let n=t.getByTestId(`vert-bordered`);i(n.classList.contains(`b-descriptions--bordered`)).toBe(!0),i(n.classList.contains(`b-descriptions--vertical`)).toBe(!0)}},p={parameters:{controls:{disable:!0},docs:{source:{code:`
<BDescriptions title="User Info">
  <BDescriptionsItem label="UserName">Zhou Maomao</BDescriptionsItem>
  <BDescriptionsItem label="Telephone">1810000000</BDescriptionsItem>
  <BDescriptionsItem label="Live">Hangzhou, Zhejiang</BDescriptionsItem>
</BDescriptions>
        `}}},render:()=>({components:{BDescriptions:t,BDescriptionsItem:n},template:`
      <BDescriptions data-testid="slot-items" title="User Info">
        <BDescriptionsItem label="UserName">Zhou Maomao</BDescriptionsItem>
        <BDescriptionsItem label="Telephone">1810000000</BDescriptionsItem>
        <BDescriptionsItem label="Live">Hangzhou, Zhejiang</BDescriptionsItem>
        <BDescriptionsItem label="Remark">Empty</BDescriptionsItem>
        <BDescriptionsItem label="Address" :span="2">
          No. 18, Wantang Road, Xihu District, Hangzhou, Zhejiang, China
        </BDescriptionsItem>
      </BDescriptions>
    `}),play:async({canvasElement:e})=>{let t=a(e).getByTestId(`slot-items`).querySelectorAll(`.b-descriptions__item-label`);i(t.length).toBeGreaterThanOrEqual(5),i(t[0].textContent).toContain(`UserName`)}},m={parameters:{controls:{disable:!0},docs:{source:{code:`
<BDescriptions title="Custom Span" bordered :column="3" :items="items" />
        `}}},render:()=>({components:{BDescriptions:t},setup(){return{items:[{label:`Product`,children:`Cloud Database`},{label:`Billing Mode`,children:`Prepaid`},{label:`Automatic Renewal`,children:`YES`},{label:`Order time`,children:`2018-04-24 18:00:00`},{label:`Usage Time`,children:`2019-04-24 18:00:00`,span:2},{label:`Status`,children:`Running`,span:3},{label:`Negotiated Amount`,children:`$80.00`},{label:`Discount`,children:`$20.00`},{label:`Official Receipts`,children:`$60.00`},{label:`Config Info`,children:`Data disk type: MongoDB | Database version: 3.4 | Package: dds.mongo.mid`,span:3}]}},template:`
      <BDescriptions data-testid="custom-span" title="Custom Span" bordered :column="3" :items="items" />
    `}),play:async({canvasElement:e})=>{let t=a(e).getByTestId(`custom-span`);i(t.classList.contains(`b-descriptions--bordered`)).toBe(!0),i(t.querySelectorAll(`th.b-descriptions__item-label--bordered`).length).toBeGreaterThan(0)}},h={name:`Accessibility (roles & semantics)`,parameters:{controls:{disable:!0},docs:{description:{story:'The descriptions table uses `role="presentation"` since it is a layout table. In bordered mode, labels are `<th>` elements for semantic weight. All text content remains accessible to screen readers.'}}},render:()=>({components:{BDescriptions:t},setup(){return{sampleItems:s}},template:`
      <div style="display:flex;flex-direction:column;gap:2rem;">
        <BDescriptions data-testid="a11y-basic" title="Non-bordered" :items="sampleItems" />
        <BDescriptions data-testid="a11y-bordered" title="Bordered" bordered :items="sampleItems" />
      </div>
    `}),play:async({canvasElement:e})=>{let t=a(e);i(t.getByTestId(`a11y-basic`).querySelector(`.b-descriptions__table`)?.getAttribute(`role`)).toBe(`presentation`);let n=t.getByTestId(`a11y-bordered`);i(n.querySelector(`.b-descriptions__table`)?.getAttribute(`role`)).toBe(`presentation`),i(n.querySelectorAll(`th.b-descriptions__item-label--bordered`).length).toBe(5),i(n.querySelectorAll(`td.b-descriptions__item-content--bordered`).length).toBe(5)}},g={name:`Theming (CSS vars)`,parameters:{controls:{disable:!0},docs:{description:{story:"Override `--b-descriptions-*` CSS custom properties on the component root to customise appearance without touching the component source."},source:{code:`
<style>
.custom-descriptions {
  --b-descriptions-title-color: #1d39c4;
  --b-descriptions-label-color: #531dab;
  --b-descriptions-label-bg: #f9f0ff;
  --b-descriptions-border-color: #d3adf7;
}
</style>

<BDescriptions class="custom-descriptions" title="Custom Theme" bordered :items="items" />
        `}}},render:()=>({components:{BDescriptions:t},setup(){return{sampleItems:s}},template:`
      <div style="display:flex;flex-direction:column;gap:2rem;">
        <BDescriptions title="Default Theme" bordered :items="sampleItems" />
        <BDescriptions
          title="Purple Theme"
          bordered
          :items="sampleItems"
          style="--b-descriptions-title-color:#531dab;--b-descriptions-label-color:#531dab;--b-descriptions-label-bg:#f9f0ff;--b-descriptions-border-color:#d3adf7;"
        />
        <BDescriptions
          title="Blue Compact"
          bordered
          size="small"
          :items="sampleItems"
          style="--b-descriptions-title-color:#1d39c4;--b-descriptions-label-bg:#f0f5ff;--b-descriptions-border-color:#adc6ff;--b-descriptions-border-radius:16px;"
        />
      </div>
    `})},_={name:`Interaction – rendering & structure`,parameters:{controls:{disable:!0},docs:{description:{story:`Automated play function: verifies item rendering, bordered structure, vertical layout, and size modifiers.`}}},render:()=>({components:{BDescriptions:t},setup(){return{sampleItems:s}},template:`
      <div style="display:flex;flex-direction:column;gap:2rem;">
        <BDescriptions
          data-testid="int-basic"
          title="Basic"
          :items="sampleItems"
        />
        <BDescriptions
          data-testid="int-bordered"
          title="Bordered"
          bordered
          :items="sampleItems"
        />
        <BDescriptions
          data-testid="int-vertical"
          title="Vertical"
          layout="vertical"
          :items="sampleItems"
        />
        <BDescriptions
          data-testid="int-small"
          title="Small"
          size="small"
          bordered
          :items="sampleItems"
        />
      </div>
    `}),play:async({canvasElement:e})=>{let t=a(e),n=t.getByTestId(`int-basic`);i(n.querySelector(`.b-descriptions__title`)?.textContent).toBe(`Basic`),i(n.querySelectorAll(`.b-descriptions__item-label`).length).toBeGreaterThanOrEqual(5),i(n.querySelectorAll(`.b-descriptions__item-content`).length).toBeGreaterThanOrEqual(5),i(n.classList.contains(`b-descriptions--horizontal`)).toBe(!0),i(n.classList.contains(`b-descriptions--colon`)).toBe(!0);let r=t.getByTestId(`int-bordered`);i(r.classList.contains(`b-descriptions--bordered`)).toBe(!0),i(r.querySelectorAll(`th`).length).toBeGreaterThan(0),i(r.querySelectorAll(`td`).length).toBeGreaterThan(0),i(t.getByTestId(`int-vertical`).classList.contains(`b-descriptions--vertical`)).toBe(!0),i(t.getByTestId(`int-small`).classList.contains(`b-descriptions--small`)).toBe(!0)}},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    title: 'User Info',
    bordered: false,
    colon: true,
    column: 3,
    layout: 'horizontal',
    size: 'default'
  },
  render: args => ({
    components: {
      BDescriptions
    },
    setup() {
      return {
        args,
        sampleItems
      };
    },
    template: \`
      <BDescriptions v-bind="args" :items="sampleItems">
        <template #extra><a href="#">Edit</a></template>
      </BDescriptions>
    \`
  })
}`,...c.parameters?.docs?.source},description:{story:`Interactive playground - tweak all props via the Controls panel.`,...c.parameters?.docs?.description}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: true
    },
    docs: {
      source: {
        code: \`
<BDescriptions title="User Info" :items="items" />
        \`
      }
    }
  },
  render: () => ({
    components: {
      BDescriptions
    },
    setup() {
      return {
        sampleItems
      };
    },
    template: \`
      <BDescriptions data-testid="basic" title="User Info" :items="sampleItems" />
    \`
  }),
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const el = canvas.getByTestId('basic');
    expect(el.querySelector('.b-descriptions__title')?.textContent).toBe('User Info');
    expect(el.querySelector('.b-descriptions__item-label')?.textContent).toContain('UserName');
    expect(el.querySelector('.b-descriptions__item-content')?.textContent).toContain('Zhou Maomao');
    expect(el.classList.contains('b-descriptions--colon')).toBe(true);
  }
}`,...l.parameters?.docs?.source},description:{story:`Simple descriptions with title and items.`,...l.parameters?.docs?.description}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: true
    },
    docs: {
      source: {
        code: \`
<BDescriptions title="User Info" bordered :items="items" />
        \`
      }
    }
  },
  render: () => ({
    components: {
      BDescriptions
    },
    setup() {
      return {
        sampleItems
      };
    },
    template: \`
      <BDescriptions data-testid="bordered" title="User Info" bordered :items="sampleItems" />
    \`
  }),
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const el = canvas.getByTestId('bordered');
    expect(el.classList.contains('b-descriptions--bordered')).toBe(true);
    expect(el.querySelectorAll('th.b-descriptions__item-label--bordered').length).toBeGreaterThan(0);
    expect(el.querySelectorAll('td.b-descriptions__item-content--bordered').length).toBeGreaterThan(0);
  }
}`,...u.parameters?.docs?.source},description:{story:`Descriptions with borders around cells.`,...u.parameters?.docs?.description}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: true
    },
    docs: {
      source: {
        code: \`
<BDescriptions title="Default" size="default" bordered :items="items" />
<BDescriptions title="Middle" size="middle" bordered :items="items" />
<BDescriptions title="Small" size="small" bordered :items="items" />
        \`
      }
    }
  },
  render: () => ({
    components: {
      BDescriptions
    },
    setup() {
      return {
        sampleItems
      };
    },
    template: \`
      <div style="display:flex;flex-direction:column;gap:2rem;">
        <BDescriptions data-testid="size-default" title="Default" size="default" bordered :items="sampleItems" />
        <BDescriptions data-testid="size-middle" title="Middle" size="middle" bordered :items="sampleItems" />
        <BDescriptions data-testid="size-small" title="Small" size="small" bordered :items="sampleItems" />
      </div>
    \`
  }),
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const mid = canvas.getByTestId('size-middle');
    expect(mid.classList.contains('b-descriptions--middle')).toBe(true);
    const sm = canvas.getByTestId('size-small');
    expect(sm.classList.contains('b-descriptions--small')).toBe(true);
  }
}`,...d.parameters?.docs?.source},description:{story:`Size variants: default, middle, small.`,...d.parameters?.docs?.description}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: true
    },
    docs: {
      source: {
        code: \`
<BDescriptions title="Vertical" layout="vertical" :items="items" />
<BDescriptions title="Vertical Bordered" layout="vertical" bordered :items="items" />
        \`
      }
    }
  },
  render: () => ({
    components: {
      BDescriptions
    },
    setup() {
      return {
        sampleItems
      };
    },
    template: \`
      <div style="display:flex;flex-direction:column;gap:2rem;">
        <BDescriptions data-testid="vert" title="Vertical" layout="vertical" :items="sampleItems" />
        <BDescriptions data-testid="vert-bordered" title="Vertical Bordered" layout="vertical" bordered :items="sampleItems" />
      </div>
    \`
  }),
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const el = canvas.getByTestId('vert');
    expect(el.classList.contains('b-descriptions--vertical')).toBe(true);
    const bordered = canvas.getByTestId('vert-bordered');
    expect(bordered.classList.contains('b-descriptions--bordered')).toBe(true);
    expect(bordered.classList.contains('b-descriptions--vertical')).toBe(true);
  }
}`,...f.parameters?.docs?.source},description:{story:`Vertical layout places labels above content.`,...f.parameters?.docs?.description}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: true
    },
    docs: {
      source: {
        code: \`
<BDescriptions title="User Info">
  <BDescriptionsItem label="UserName">Zhou Maomao</BDescriptionsItem>
  <BDescriptionsItem label="Telephone">1810000000</BDescriptionsItem>
  <BDescriptionsItem label="Live">Hangzhou, Zhejiang</BDescriptionsItem>
</BDescriptions>
        \`
      }
    }
  },
  render: () => ({
    components: {
      BDescriptions,
      BDescriptionsItem
    },
    template: \`
      <BDescriptions data-testid="slot-items" title="User Info">
        <BDescriptionsItem label="UserName">Zhou Maomao</BDescriptionsItem>
        <BDescriptionsItem label="Telephone">1810000000</BDescriptionsItem>
        <BDescriptionsItem label="Live">Hangzhou, Zhejiang</BDescriptionsItem>
        <BDescriptionsItem label="Remark">Empty</BDescriptionsItem>
        <BDescriptionsItem label="Address" :span="2">
          No. 18, Wantang Road, Xihu District, Hangzhou, Zhejiang, China
        </BDescriptionsItem>
      </BDescriptions>
    \`
  }),
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const el = canvas.getByTestId('slot-items');
    const labels = el.querySelectorAll('.b-descriptions__item-label');
    expect(labels.length).toBeGreaterThanOrEqual(5);
    expect(labels[0].textContent).toContain('UserName');
  }
}`,...p.parameters?.docs?.source},description:{story:"Using BDescriptionsItem children instead of the `items` prop.",...p.parameters?.docs?.description}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: true
    },
    docs: {
      source: {
        code: \`
<BDescriptions title="Custom Span" bordered :column="3" :items="items" />
        \`
      }
    }
  },
  render: () => ({
    components: {
      BDescriptions
    },
    setup() {
      const items: BDescriptionsItemData[] = [{
        label: 'Product',
        children: 'Cloud Database'
      }, {
        label: 'Billing Mode',
        children: 'Prepaid'
      }, {
        label: 'Automatic Renewal',
        children: 'YES'
      }, {
        label: 'Order time',
        children: '2018-04-24 18:00:00'
      }, {
        label: 'Usage Time',
        children: '2019-04-24 18:00:00',
        span: 2
      }, {
        label: 'Status',
        children: 'Running',
        span: 3
      }, {
        label: 'Negotiated Amount',
        children: '$80.00'
      }, {
        label: 'Discount',
        children: '$20.00'
      }, {
        label: 'Official Receipts',
        children: '$60.00'
      }, {
        label: 'Config Info',
        children: 'Data disk type: MongoDB | Database version: 3.4 | Package: dds.mongo.mid',
        span: 3
      }];
      return {
        items
      };
    },
    template: \`
      <BDescriptions data-testid="custom-span" title="Custom Span" bordered :column="3" :items="items" />
    \`
  }),
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const el = canvas.getByTestId('custom-span');
    expect(el.classList.contains('b-descriptions--bordered')).toBe(true);
    const labels = el.querySelectorAll('th.b-descriptions__item-label--bordered');
    expect(labels.length).toBeGreaterThan(0);
  }
}`,...m.parameters?.docs?.source},description:{story:"Items can span multiple columns using the `span` property.",...m.parameters?.docs?.description}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  name: 'Accessibility (roles & semantics)',
  parameters: {
    controls: {
      disable: true
    },
    docs: {
      description: {
        story: 'The descriptions table uses \`role="presentation"\` since it is a layout table. ' + 'In bordered mode, labels are \`<th>\` elements for semantic weight. ' + 'All text content remains accessible to screen readers.'
      }
    }
  },
  render: () => ({
    components: {
      BDescriptions
    },
    setup() {
      return {
        sampleItems
      };
    },
    template: \`
      <div style="display:flex;flex-direction:column;gap:2rem;">
        <BDescriptions data-testid="a11y-basic" title="Non-bordered" :items="sampleItems" />
        <BDescriptions data-testid="a11y-bordered" title="Bordered" bordered :items="sampleItems" />
      </div>
    \`
  }),
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);

    // Non-bordered: table role=presentation
    const basic = canvas.getByTestId('a11y-basic');
    const table1 = basic.querySelector('.b-descriptions__table');
    expect(table1?.getAttribute('role')).toBe('presentation');

    // Bordered: th for labels, td for content
    const bordered = canvas.getByTestId('a11y-bordered');
    const table2 = bordered.querySelector('.b-descriptions__table');
    expect(table2?.getAttribute('role')).toBe('presentation');
    expect(bordered.querySelectorAll('th.b-descriptions__item-label--bordered').length).toBe(5);
    expect(bordered.querySelectorAll('td.b-descriptions__item-content--bordered').length).toBe(5);
  }
}`,...h.parameters?.docs?.source},description:{story:'Accessibility features:\n- Table has `role="presentation"` (layout table, not data)\n- Bordered mode uses `th` for labels (semantic emphasis)\n- `td` for content cells\n- Proper heading in title',...h.parameters?.docs?.description}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  name: 'Theming (CSS vars)',
  parameters: {
    controls: {
      disable: true
    },
    docs: {
      description: {
        story: 'Override \`--b-descriptions-*\` CSS custom properties on the component root to customise appearance ' + 'without touching the component source.'
      },
      source: {
        code: \`
<style>
.custom-descriptions {
  --b-descriptions-title-color: #1d39c4;
  --b-descriptions-label-color: #531dab;
  --b-descriptions-label-bg: #f9f0ff;
  --b-descriptions-border-color: #d3adf7;
}
</style>

<BDescriptions class="custom-descriptions" title="Custom Theme" bordered :items="items" />
        \`
      }
    }
  },
  render: () => ({
    components: {
      BDescriptions
    },
    setup() {
      return {
        sampleItems
      };
    },
    template: \`
      <div style="display:flex;flex-direction:column;gap:2rem;">
        <BDescriptions title="Default Theme" bordered :items="sampleItems" />
        <BDescriptions
          title="Purple Theme"
          bordered
          :items="sampleItems"
          style="--b-descriptions-title-color:#531dab;--b-descriptions-label-color:#531dab;--b-descriptions-label-bg:#f9f0ff;--b-descriptions-border-color:#d3adf7;"
        />
        <BDescriptions
          title="Blue Compact"
          bordered
          size="small"
          :items="sampleItems"
          style="--b-descriptions-title-color:#1d39c4;--b-descriptions-label-bg:#f0f5ff;--b-descriptions-border-color:#adc6ff;--b-descriptions-border-radius:16px;"
        />
      </div>
    \`
  })
}`,...g.parameters?.docs?.source},description:{story:"Override `--b-descriptions-*` CSS custom properties to customize appearance.",...g.parameters?.docs?.description}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  name: 'Interaction – rendering & structure',
  parameters: {
    controls: {
      disable: true
    },
    docs: {
      description: {
        story: 'Automated play function: verifies item rendering, bordered structure, vertical layout, and size modifiers.'
      }
    }
  },
  render: () => ({
    components: {
      BDescriptions
    },
    setup() {
      return {
        sampleItems
      };
    },
    template: \`
      <div style="display:flex;flex-direction:column;gap:2rem;">
        <BDescriptions
          data-testid="int-basic"
          title="Basic"
          :items="sampleItems"
        />
        <BDescriptions
          data-testid="int-bordered"
          title="Bordered"
          bordered
          :items="sampleItems"
        />
        <BDescriptions
          data-testid="int-vertical"
          title="Vertical"
          layout="vertical"
          :items="sampleItems"
        />
        <BDescriptions
          data-testid="int-small"
          title="Small"
          size="small"
          bordered
          :items="sampleItems"
        />
      </div>
    \`
  }),
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);

    // Basic rendering
    const basic = canvas.getByTestId('int-basic');
    expect(basic.querySelector('.b-descriptions__title')?.textContent).toBe('Basic');
    expect(basic.querySelectorAll('.b-descriptions__item-label').length).toBeGreaterThanOrEqual(5);
    expect(basic.querySelectorAll('.b-descriptions__item-content').length).toBeGreaterThanOrEqual(5);
    expect(basic.classList.contains('b-descriptions--horizontal')).toBe(true);
    expect(basic.classList.contains('b-descriptions--colon')).toBe(true);

    // Bordered structure
    const bordered = canvas.getByTestId('int-bordered');
    expect(bordered.classList.contains('b-descriptions--bordered')).toBe(true);
    expect(bordered.querySelectorAll('th').length).toBeGreaterThan(0);
    expect(bordered.querySelectorAll('td').length).toBeGreaterThan(0);

    // Vertical layout
    const vertical = canvas.getByTestId('int-vertical');
    expect(vertical.classList.contains('b-descriptions--vertical')).toBe(true);

    // Small size
    const small = canvas.getByTestId('int-small');
    expect(small.classList.contains('b-descriptions--small')).toBe(true);
  }
}`,..._.parameters?.docs?.source},description:{story:`Automated interaction tests: verify rendering, structure, and variants.`,..._.parameters?.docs?.description}}},v=[`Playground`,`Basic`,`Bordered`,`Sizes`,`VerticalLayout`,`SlotBasedItems`,`CustomSpan`,`Accessibility`,`Theming`,`InteractionTests`]}))();export{h as Accessibility,l as Basic,u as Bordered,m as CustomSpan,_ as InteractionTests,c as Playground,d as Sizes,p as SlotBasedItems,g as Theming,f as VerticalLayout,v as __namedExportsOrder,o as default};