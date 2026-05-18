import{n as e}from"./chunk-BneVvdWh.js";import{A as t,p as n}from"./types-CV_3xB-y.js";import{P as r,t as i}from"./components-_FfmWUAp.js";var a,o,s,c,l,u,d,f,p,m,h,g;e((()=>{i(),t(),{expect:a,within:o}=__STORYBOOK_MODULE_TEST__,s={title:`Data Display/Empty`,component:r,tags:[`autodocs`],argTypes:{description:{control:`text`,description:"Customize description text. Pass `false` to hide completely.",table:{defaultValue:{summary:`"No data"`},category:`Props`}},image:{control:`select`,options:[n.Default,n.Simple],description:"Image type: `default` (detailed illustration) or `simple` (minimal). Also accepts a URL string.",table:{defaultValue:{summary:n.Default},category:`Props`}},hideDescription:{control:`boolean`,description:`Set to true to hide the description area completely.`,table:{defaultValue:{summary:`false`},category:`Props`}},imageStyle:{control:`object`,description:`Inline styles applied to the image container element.`,table:{category:`Props`}}},parameters:{docs:{description:{component:`The <code>BEmpty</code> component displays a placeholder when content is absent - e.g. empty tables, search results, or fresh-start states.<br><br>Supports <strong>two built-in illustrations</strong> (default &amp; simple), <strong>custom images</strong> via URL or slot, and an <strong>action footer</strong> slot.<br>Theming via <code>--b-empty-*</code> CSS custom properties. Respects <code>prefers-reduced-motion</code>.`}}}},c={args:{description:`No data`,image:n.Default},render:e=>({components:{BEmpty:r},setup(){return{args:e}},template:`<BEmpty v-bind="args" />`})},l={parameters:{controls:{disable:!0},docs:{source:{code:`
<BEmpty />
<BEmpty image="simple" />
        `}}},render:()=>({components:{BEmpty:r},template:`
      <div style="display:flex;gap:3rem;align-items:flex-start;">
        <div style="text-align:center;">
          <BEmpty data-testid="default-image" />
          <p style="margin-top:0.5rem;font-size:0.75rem;color:#525252;">Default</p>
        </div>
        <div style="text-align:center;">
          <BEmpty data-testid="simple-image" image="simple" />
          <p style="margin-top:0.5rem;font-size:0.75rem;color:#525252;">Simple</p>
        </div>
      </div>
    `}),play:async({canvasElement:e})=>{let t=o(e);a(t.getByTestId(`default-image`).querySelector(`.b-empty__svg--default`)).toBeTruthy();let n=t.getByTestId(`simple-image`);a(n.querySelector(`.b-empty__svg--simple`)).toBeTruthy(),a(n.classList.contains(`b-empty--simple`)).toBe(!0)}},u={parameters:{controls:{disable:!0},docs:{source:{code:`
<BEmpty description="No results found" />
<BEmpty hideDescription />
        `}}},render:()=>({components:{BEmpty:r},template:`
      <div style="display:flex;gap:3rem;align-items:flex-start;">
        <div style="text-align:center;">
          <BEmpty data-testid="custom-desc" description="No results found" />
          <p style="margin-top:0.5rem;font-size:0.75rem;color:#525252;">Custom text</p>
        </div>
        <div style="text-align:center;">
          <BEmpty data-testid="no-desc" hideDescription />
          <p style="margin-top:0.5rem;font-size:0.75rem;color:#525252;">Hidden description</p>
        </div>
      </div>
    `}),play:async({canvasElement:e})=>{let t=o(e);a(t.getByTestId(`custom-desc`).querySelector(`.b-empty__description`)?.textContent?.trim()).toBe(`No results found`),a(t.getByTestId(`no-desc`).querySelector(`.b-empty__description`)).toBeNull()}},d={parameters:{controls:{disable:!0},docs:{source:{code:`
<BEmpty description="No items yet">
  <button>Create Now</button>
</BEmpty>
        `}}},render:()=>({components:{BEmpty:r},template:`
      <BEmpty data-testid="with-action" description="No items yet">
        <button style="padding:6px 16px;border:1px solid oklch(54.6% 0.245 262.881);background:oklch(54.6% 0.245 262.881);color:white;border-radius:6px;cursor:pointer;font-size:14px;">
          Create Now
        </button>
      </BEmpty>
    `}),play:async({canvasElement:e})=>{let t=o(e).getByTestId(`with-action`);a(t.querySelector(`.b-empty__footer`)).toBeTruthy(),a(t.querySelector(`.b-empty__footer button`)).toBeTruthy()}},f={parameters:{controls:{disable:!0},docs:{source:{code:`
<BEmpty description="Custom illustration">
  <template #image>
    <img src="..." alt="" style="height:100px;" />
  </template>
</BEmpty>
        `}}},render:()=>({components:{BEmpty:r},template:`
      <BEmpty data-testid="custom-image-slot" description="Custom illustration">
        <template #image>
          <div style="font-size:64px;line-height:1;" aria-hidden="true">📦</div>
        </template>
      </BEmpty>
    `}),play:async({canvasElement:e})=>{let t=o(e).getByTestId(`custom-image-slot`);a(t.querySelector(`.b-empty__svg`)).toBeNull(),a(t.querySelector(`.b-empty__image`)).toBeTruthy()}},p={name:`Accessibility (roles & ARIA)`,parameters:{controls:{disable:!0},docs:{description:{story:'The empty component uses `role="status"` with `aria-label` from the description. Built-in SVG illustrations are `aria-hidden="true"` and `focusable="false"`. Animations respect `prefers-reduced-motion`.'}}},render:()=>({components:{BEmpty:r},template:`
      <div style="display:flex;flex-direction:column;gap:2rem;">
        <div>
          <h4 style="margin:0 0 0.5rem;">Default (role="status", aria-label="No data")</h4>
          <BEmpty data-testid="a11y-default" />
        </div>
        <div>
          <h4 style="margin:0 0 0.5rem;">Custom description (aria-label="Nothing here")</h4>
          <BEmpty data-testid="a11y-custom" description="Nothing here" />
        </div>
        <div>
          <h4 style="margin:0 0 0.5rem;">Simple variant (aria-hidden SVG)</h4>
          <BEmpty data-testid="a11y-simple" image="simple" />
        </div>
      </div>
    `}),play:async({canvasElement:e})=>{let t=o(e),n=t.getByTestId(`a11y-default`);a(n.getAttribute(`role`)).toBe(`status`),a(n.getAttribute(`aria-label`)).toBe(`No data`);let r=n.querySelector(`.b-empty__svg--default`);a(r?.getAttribute(`aria-hidden`)).toBe(`true`),a(r?.getAttribute(`focusable`)).toBe(`false`),a(t.getByTestId(`a11y-custom`).getAttribute(`aria-label`)).toBe(`Nothing here`);let i=t.getByTestId(`a11y-simple`).querySelector(`.b-empty__svg--simple`);a(i?.getAttribute(`aria-hidden`)).toBe(`true`),a(i?.getAttribute(`focusable`)).toBe(`false`)}},m={name:`Theming (CSS vars)`,parameters:{controls:{disable:!0},docs:{description:{story:"Override `--b-empty-*` CSS custom properties to customise the empty state appearance without touching the component source."},source:{code:`
<style>
.custom-empty {
  --b-empty-description-color: #722ed1;
  --b-empty-description-font-size: 18px;
  --b-empty-image-opacity: 0.5;
}
</style>

<BEmpty class="custom-empty" description="Styled empty" />
        `}}},render:()=>({components:{BEmpty:r},template:`
      <div style="display:flex;gap:3rem;align-items:flex-start;">
        <div style="text-align:center;">
          <BEmpty description="Default" />
          <p style="margin-top:0.5rem;font-size:0.75rem;color:#525252;">Default</p>
        </div>
        <div style="text-align:center;">
          <BEmpty
            description="Purple text"
            style="--b-empty-description-color:#722ed1;--b-empty-description-font-size:18px;"
          />
          <p style="margin-top:0.5rem;font-size:0.75rem;color:#525252;">Custom text</p>
        </div>
        <div style="text-align:center;">
          <BEmpty
            description="Faded image"
            style="--b-empty-image-opacity:0.35;"
          />
          <p style="margin-top:0.5rem;font-size:0.75rem;color:#525252;">Faded</p>
        </div>
        <div style="text-align:center;">
          <BEmpty
            description="Compact"
            style="--b-empty-padding:12px 0;--b-empty-image-height:80px;--b-empty-image-margin-bottom:4px;"
          />
          <p style="margin-top:0.5rem;font-size:0.75rem;color:#525252;">Compact</p>
        </div>
      </div>
    `})},h={name:`Interaction – rendering & slots`,parameters:{controls:{disable:!0},docs:{description:{story:`Automated play function: verifies image rendering, description text, footer slot, and class hooks.`}}},render:()=>({components:{BEmpty:r},template:`
      <div style="display:flex;gap:2rem;align-items:flex-start;">
        <BEmpty data-testid="int-default" />
        <BEmpty data-testid="int-simple" image="simple" description="Simple variant" />
        <BEmpty data-testid="int-action" description="With action">
          <button data-testid="int-action-btn">Create</button>
        </BEmpty>
        <BEmpty data-testid="int-no-desc" hideDescription />
      </div>
    `}),play:async({canvasElement:e})=>{let t=o(e),n=t.getByTestId(`int-default`);a(n.querySelector(`.b-empty__svg--default`)).toBeTruthy(),a(n.querySelector(`.b-empty__description`)?.textContent?.trim()).toBe(`No data`),a(n.querySelector(`.b-empty__footer`)).toBeNull();let r=t.getByTestId(`int-simple`);a(r.classList.contains(`b-empty--simple`)).toBe(!0),a(r.querySelector(`.b-empty__svg--simple`)).toBeTruthy(),a(r.querySelector(`.b-empty__description`)?.textContent?.trim()).toBe(`Simple variant`);let i=t.getByTestId(`int-action`);a(i.querySelector(`.b-empty__footer`)).toBeTruthy(),a(i.querySelector(`[data-testid="int-action-btn"]`)).toBeTruthy(),a(t.getByTestId(`int-no-desc`).querySelector(`.b-empty__description`)).toBeNull()}},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    description: 'No data',
    image: BEmptyImage.Default
  },
  render: args => ({
    components: {
      BEmpty
    },
    setup() {
      return {
        args
      };
    },
    template: \`<BEmpty v-bind="args" />\`
  })
}`,...c.parameters?.docs?.source},description:{story:`Interactive playground - tweak all props via the Controls panel.`,...c.parameters?.docs?.description}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: true
    },
    docs: {
      source: {
        code: \`
<BEmpty />
<BEmpty image="simple" />
        \`
      }
    }
  },
  render: () => ({
    components: {
      BEmpty
    },
    template: \`
      <div style="display:flex;gap:3rem;align-items:flex-start;">
        <div style="text-align:center;">
          <BEmpty data-testid="default-image" />
          <p style="margin-top:0.5rem;font-size:0.75rem;color:#525252;">Default</p>
        </div>
        <div style="text-align:center;">
          <BEmpty data-testid="simple-image" image="simple" />
          <p style="margin-top:0.5rem;font-size:0.75rem;color:#525252;">Simple</p>
        </div>
      </div>
    \`
  }),
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const defaultEl = canvas.getByTestId('default-image');
    expect(defaultEl.querySelector('.b-empty__svg--default')).toBeTruthy();
    const simpleEl = canvas.getByTestId('simple-image');
    expect(simpleEl.querySelector('.b-empty__svg--simple')).toBeTruthy();
    expect(simpleEl.classList.contains('b-empty--simple')).toBe(true);
  }
}`,...l.parameters?.docs?.source},description:{story:`Default (detailed) and Simple (minimal) built-in illustrations.`,...l.parameters?.docs?.description}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: true
    },
    docs: {
      source: {
        code: \`
<BEmpty description="No results found" />
<BEmpty hideDescription />
        \`
      }
    }
  },
  render: () => ({
    components: {
      BEmpty
    },
    template: \`
      <div style="display:flex;gap:3rem;align-items:flex-start;">
        <div style="text-align:center;">
          <BEmpty data-testid="custom-desc" description="No results found" />
          <p style="margin-top:0.5rem;font-size:0.75rem;color:#525252;">Custom text</p>
        </div>
        <div style="text-align:center;">
          <BEmpty data-testid="no-desc" hideDescription />
          <p style="margin-top:0.5rem;font-size:0.75rem;color:#525252;">Hidden description</p>
        </div>
      </div>
    \`
  }),
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const customDesc = canvas.getByTestId('custom-desc');
    expect(customDesc.querySelector('.b-empty__description')?.textContent?.trim()).toBe('No results found');
    const noDesc = canvas.getByTestId('no-desc');
    expect(noDesc.querySelector('.b-empty__description')).toBeNull();
  }
}`,...u.parameters?.docs?.source},description:{story:`Custom description text and hidden description.`,...u.parameters?.docs?.description}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: true
    },
    docs: {
      source: {
        code: \`
<BEmpty description="No items yet">
  <button>Create Now</button>
</BEmpty>
        \`
      }
    }
  },
  render: () => ({
    components: {
      BEmpty
    },
    template: \`
      <BEmpty data-testid="with-action" description="No items yet">
        <button style="padding:6px 16px;border:1px solid oklch(54.6% 0.245 262.881);background:oklch(54.6% 0.245 262.881);color:white;border-radius:6px;cursor:pointer;font-size:14px;">
          Create Now
        </button>
      </BEmpty>
    \`
  }),
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const el = canvas.getByTestId('with-action');
    expect(el.querySelector('.b-empty__footer')).toBeTruthy();
    expect(el.querySelector('.b-empty__footer button')).toBeTruthy();
  }
}`,...d.parameters?.docs?.source},description:{story:`Action content (e.g. a button) rendered below the description.`,...d.parameters?.docs?.description}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: true
    },
    docs: {
      source: {
        code: \`
<BEmpty description="Custom illustration">
  <template #image>
    <img src="..." alt="" style="height:100px;" />
  </template>
</BEmpty>
        \`
      }
    }
  },
  render: () => ({
    components: {
      BEmpty
    },
    template: \`
      <BEmpty data-testid="custom-image-slot" description="Custom illustration">
        <template #image>
          <div style="font-size:64px;line-height:1;" aria-hidden="true">📦</div>
        </template>
      </BEmpty>
    \`
  }),
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const el = canvas.getByTestId('custom-image-slot');
    // No built-in SVG should render
    expect(el.querySelector('.b-empty__svg')).toBeNull();
    expect(el.querySelector('.b-empty__image')).toBeTruthy();
  }
}`,...f.parameters?.docs?.source},description:{story:"Completely replace the built-in illustration using the `image` slot.",...f.parameters?.docs?.description}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  name: 'Accessibility (roles & ARIA)',
  parameters: {
    controls: {
      disable: true
    },
    docs: {
      description: {
        story: 'The empty component uses \`role="status"\` with \`aria-label\` from the description. ' + 'Built-in SVG illustrations are \`aria-hidden="true"\` and \`focusable="false"\`. ' + 'Animations respect \`prefers-reduced-motion\`.'
      }
    }
  },
  render: () => ({
    components: {
      BEmpty
    },
    template: \`
      <div style="display:flex;flex-direction:column;gap:2rem;">
        <div>
          <h4 style="margin:0 0 0.5rem;">Default (role="status", aria-label="No data")</h4>
          <BEmpty data-testid="a11y-default" />
        </div>
        <div>
          <h4 style="margin:0 0 0.5rem;">Custom description (aria-label="Nothing here")</h4>
          <BEmpty data-testid="a11y-custom" description="Nothing here" />
        </div>
        <div>
          <h4 style="margin:0 0 0.5rem;">Simple variant (aria-hidden SVG)</h4>
          <BEmpty data-testid="a11y-simple" image="simple" />
        </div>
      </div>
    \`
  }),
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);

    // Default: role="status", aria-label="No data"
    const defaultEl = canvas.getByTestId('a11y-default');
    expect(defaultEl.getAttribute('role')).toBe('status');
    expect(defaultEl.getAttribute('aria-label')).toBe('No data');
    const defaultSvg = defaultEl.querySelector('.b-empty__svg--default');
    expect(defaultSvg?.getAttribute('aria-hidden')).toBe('true');
    expect(defaultSvg?.getAttribute('focusable')).toBe('false');

    // Custom description
    const customEl = canvas.getByTestId('a11y-custom');
    expect(customEl.getAttribute('aria-label')).toBe('Nothing here');

    // Simple variant
    const simpleEl = canvas.getByTestId('a11y-simple');
    const simpleSvg = simpleEl.querySelector('.b-empty__svg--simple');
    expect(simpleSvg?.getAttribute('aria-hidden')).toBe('true');
    expect(simpleSvg?.getAttribute('focusable')).toBe('false');
  }
}`,...p.parameters?.docs?.source},description:{story:'Demonstrates accessibility features:\n- `role="status"` on root element\n- `aria-label` from description text\n- `aria-hidden="true"` on decorative SVGs\n- `focusable="false"` on SVGs to prevent IE/Edge focus',...p.parameters?.docs?.description}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  name: 'Theming (CSS vars)',
  parameters: {
    controls: {
      disable: true
    },
    docs: {
      description: {
        story: 'Override \`--b-empty-*\` CSS custom properties to customise the empty state appearance ' + 'without touching the component source.'
      },
      source: {
        code: \`
<style>
.custom-empty {
  --b-empty-description-color: #722ed1;
  --b-empty-description-font-size: 18px;
  --b-empty-image-opacity: 0.5;
}
</style>

<BEmpty class="custom-empty" description="Styled empty" />
        \`
      }
    }
  },
  render: () => ({
    components: {
      BEmpty
    },
    template: \`
      <div style="display:flex;gap:3rem;align-items:flex-start;">
        <div style="text-align:center;">
          <BEmpty description="Default" />
          <p style="margin-top:0.5rem;font-size:0.75rem;color:#525252;">Default</p>
        </div>
        <div style="text-align:center;">
          <BEmpty
            description="Purple text"
            style="--b-empty-description-color:#722ed1;--b-empty-description-font-size:18px;"
          />
          <p style="margin-top:0.5rem;font-size:0.75rem;color:#525252;">Custom text</p>
        </div>
        <div style="text-align:center;">
          <BEmpty
            description="Faded image"
            style="--b-empty-image-opacity:0.35;"
          />
          <p style="margin-top:0.5rem;font-size:0.75rem;color:#525252;">Faded</p>
        </div>
        <div style="text-align:center;">
          <BEmpty
            description="Compact"
            style="--b-empty-padding:12px 0;--b-empty-image-height:80px;--b-empty-image-margin-bottom:4px;"
          />
          <p style="margin-top:0.5rem;font-size:0.75rem;color:#525252;">Compact</p>
        </div>
      </div>
    \`
  })
}`,...m.parameters?.docs?.source},description:{story:"Override `--b-empty-*` CSS custom properties to customise appearance.",...m.parameters?.docs?.description}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  name: 'Interaction – rendering & slots',
  parameters: {
    controls: {
      disable: true
    },
    docs: {
      description: {
        story: 'Automated play function: verifies image rendering, description text, footer slot, and class hooks.'
      }
    }
  },
  render: () => ({
    components: {
      BEmpty
    },
    template: \`
      <div style="display:flex;gap:2rem;align-items:flex-start;">
        <BEmpty data-testid="int-default" />
        <BEmpty data-testid="int-simple" image="simple" description="Simple variant" />
        <BEmpty data-testid="int-action" description="With action">
          <button data-testid="int-action-btn">Create</button>
        </BEmpty>
        <BEmpty data-testid="int-no-desc" hideDescription />
      </div>
    \`
  }),
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);

    // Default rendering
    const defaultEl = canvas.getByTestId('int-default');
    expect(defaultEl.querySelector('.b-empty__svg--default')).toBeTruthy();
    expect(defaultEl.querySelector('.b-empty__description')?.textContent?.trim()).toBe('No data');
    expect(defaultEl.querySelector('.b-empty__footer')).toBeNull();

    // Simple variant
    const simpleEl = canvas.getByTestId('int-simple');
    expect(simpleEl.classList.contains('b-empty--simple')).toBe(true);
    expect(simpleEl.querySelector('.b-empty__svg--simple')).toBeTruthy();
    expect(simpleEl.querySelector('.b-empty__description')?.textContent?.trim()).toBe('Simple variant');

    // With action footer
    const actionEl = canvas.getByTestId('int-action');
    expect(actionEl.querySelector('.b-empty__footer')).toBeTruthy();
    expect(actionEl.querySelector('[data-testid="int-action-btn"]')).toBeTruthy();

    // No description
    const noDescEl = canvas.getByTestId('int-no-desc');
    expect(noDescEl.querySelector('.b-empty__description')).toBeNull();
  }
}`,...h.parameters?.docs?.source},description:{story:`Automated interaction tests: verify rendering, slots, and DOM structure.`,...h.parameters?.docs?.description}}},g=[`Playground`,`ImageVariants`,`CustomDescription`,`WithAction`,`CustomImageSlot`,`Accessibility`,`Theming`,`InteractionTests`]}))();export{p as Accessibility,u as CustomDescription,f as CustomImageSlot,l as ImageVariants,h as InteractionTests,c as Playground,m as Theming,d as WithAction,g as __namedExportsOrder,s as default};