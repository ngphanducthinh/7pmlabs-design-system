import{n as e}from"./chunk-BneVvdWh.js";import{H as t,K as n,i as r,q as i}from"./iframe-BMgVmRCG.js";import{A as a,S as o,x as s}from"./types-CV_3xB-y.js";import{S as c,ot as l,t as u}from"./components-DBCIcu8v.js";var d,f,p,m,h,g,_,v,y,b,x,S,C,w,T,E,D,O;e((()=>{u(),a(),r(),{expect:d,userEvent:f,waitFor:p,within:m}=__STORYBOOK_MODULE_TEST__,h={title:`Data Display/Popover`,component:c,tags:[`autodocs`],argTypes:{title:{control:`text`,description:`The title shown at the top of the popover.`},content:{control:`text`,description:`The main content of the popover.`},trigger:{control:`select`,options:Object.values(o),description:`The event that triggers the popover.`,table:{defaultValue:{summary:o.Hover}}},placement:{control:`select`,options:Object.values(s),description:`Placement of the popover relative to the target.`,table:{defaultValue:{summary:s.TopCenter}}},arrow:{control:`boolean`,description:`Whether the popover has an arrow.`,table:{defaultValue:{summary:`true`}}},mouseEnterDelay:{control:`number`,description:`Delay in ms before showing on mouseenter.`,table:{defaultValue:{summary:`100`}}},mouseLeaveDelay:{control:`number`,description:`Delay in ms before hiding on mouseleave.`,table:{defaultValue:{summary:`100`}}},destroyTooltipOnHide:{control:`boolean`,description:`Destroy popover DOM when hidden.`,table:{defaultValue:{summary:`false`}}},fresh:{control:`boolean`,description:`Force re-render when popover is shown.`,table:{defaultValue:{summary:`false`}}},zIndex:{control:`number`,description:`z-index of the popover.`,table:{defaultValue:{summary:`1030`}}},modelValue:{control:`boolean`,description:`Controlled visibility (bind with v-model).`,table:{category:`Two-Way Binding Props`}}},parameters:{docs:{description:{component:`The <code>BPopover</code> component displays rich content in a floating card triggered by user interaction.<br><br>It uses the native HTML <code>popover</code> attribute and CSS Anchor Positioning for overlay management.<br>Supports 12 placements, three trigger modes (hover, click, focus), optional title, and full accessibility.`}}}},g={args:{title:`Popover Title`,content:`This is the popover content area. You can place any information here.`,trigger:`hover`,placement:`top-center`,arrow:!0,destroyTooltipOnHide:!1,fresh:!1,zIndex:1030},render:e=>({components:{BButton:l,BPopover:c},setup(){let r=n(e.modelValue??void 0);return t(i(()=>e.modelValue),e=>{r.value=e}),{args:e,open:r}},template:`
      <div style="padding: 6rem; display: flex; justify-content: center;">
        <BPopover v-bind="args" v-model="open">
          <BButton>Hover me</BButton>
        </BPopover>
      </div>
    `}),parameters:{a11y:{test:`off`}}},_={name:`Basic Popover`,parameters:{controls:{disable:!0},a11y:{test:`off`}},render:()=>({components:{BButton:l,BPopover:c},template:`
      <div style="padding: 6rem; display: flex; gap: 2rem; justify-content: center;">
        <BPopover title="Title" content="Content of the popover.">
          <BButton>With Title</BButton>
        </BPopover>
        <BPopover content="Popover without a title.">
          <BButton>No Title</BButton>
        </BPopover>
      </div>
    `}),play:async({canvasElement:e})=>{let t=m(e).getAllByRole(`button`);await f.hover(t[0]),await p(()=>{d(document.querySelector(`.b-popover__content`)).toBeTruthy(),d(document.querySelector(`.b-popover__title`)?.textContent).toBe(`Title`),d(document.querySelector(`.b-popover__body`)?.textContent).toBe(`Content of the popover.`)}),await f.unhover(t[0])}},v={name:`Trigger Modes`,parameters:{controls:{disable:!0},a11y:{test:`off`}},render:()=>({components:{BButton:l,BPopover:c},template:`
      <div style="padding: 6rem; display: flex; gap: 2rem; justify-content: center;">
        <BPopover title="Hover" content="Triggered on hover." trigger="hover">
          <BButton>Hover</BButton>
        </BPopover>
        <BPopover title="Click" content="Triggered on click." trigger="click">
          <BButton>Click</BButton>
        </BPopover>
        <BPopover title="Focus" content="Triggered on focus." trigger="focus">
          <BButton>Focus</BButton>
        </BPopover>
      </div>
    `})},y={name:`All Placements`,parameters:{controls:{disable:!0},a11y:{test:`off`},docs:{source:{code:`
<BPopover title="Popover" content="Content" placement="top-left"><BButton>TL</BButton></BPopover>
<BPopover title="Popover" content="Content" placement="top-center"><BButton>TC</BButton></BPopover>
<!-- … 12 placements total -->
        `}}},render:()=>({components:{BButton:l,BPopover:c},template:`
      <div style="padding: 8rem 4rem; display: grid; grid-template-columns: repeat(4, 1fr); gap: 2rem; justify-items: center;">
        <BPopover title="Top Left" content="Content" placement="top-left"><BButton>Top Left</BButton></BPopover>
        <BPopover title="Top Center" content="Content" placement="top-center"><BButton>Top Center</BButton></BPopover>
        <BPopover title="Top Right" content="Content" placement="top-right"><BButton>Top Right</BButton></BPopover>
        <div></div>

        <BPopover title="Left Top" content="Content" placement="left-top"><BButton>Left Top</BButton></BPopover>
        <div></div>
        <div></div>
        <BPopover title="Right Top" content="Content" placement="right-top"><BButton>Right Top</BButton></BPopover>

        <BPopover title="Left Center" content="Content" placement="left-center"><BButton>Left Center</BButton></BPopover>
        <div></div>
        <div></div>
        <BPopover title="Right Center" content="Content" placement="right-center"><BButton>Right Center</BButton></BPopover>

        <BPopover title="Left Bottom" content="Content" placement="left-bottom"><BButton>Left Bottom</BButton></BPopover>
        <div></div>
        <div></div>
        <BPopover title="Right Bottom" content="Content" placement="right-bottom"><BButton>Right Bottom</BButton></BPopover>

        <div></div>
        <BPopover title="Bottom Left" content="Content" placement="bottom-left"><BButton>Bottom Left</BButton></BPopover>
        <BPopover title="Bottom Center" content="Content" placement="bottom-center"><BButton>Bottom Center</BButton></BPopover>
        <BPopover title="Bottom Right" content="Content" placement="bottom-right"><BButton>Bottom Right</BButton></BPopover>
      </div>
    `})},b={name:`Rich Content (slots)`,parameters:{controls:{disable:!0},a11y:{test:`off`}},render:()=>({components:{BButton:l,BPopover:c},template:`
      <div style="padding: 6rem; display: flex; gap: 2rem; justify-content: center;">
        <BPopover trigger="click">
          <template #title>
            <span style="color: oklch(55% 0.2 260);">Custom Title</span>
          </template>
          <template #content>
            <div>
              <p style="margin: 0 0 0.5rem;">Rich HTML content with links and formatting.</p>
              <a href="#" style="color: oklch(55% 0.2 260);">Learn more</a>
            </div>
          </template>
          <BButton>Rich Content</BButton>
        </BPopover>
      </div>
    `})},x={name:`Accessibility (roles & keyboard)`,parameters:{controls:{disable:!0},a11y:{test:`error`,context:{include:[`.b-popover__toggle`,`.b-popover__content`]}},docs:{description:{story:'The popover uses `role="tooltip"` with `aria-labelledby` pointing to the title. The arrow is `aria-hidden="true"`. Escape key dismisses the popover and returns focus. Focus trapping is active when the popover contains focusable elements.\n\n**Testing:** axe-core runs after the play function. Manual ARIA assertions provide defense-in-depth.'}}},render:()=>({components:{BButton:l,BPopover:c},template:`
      <div style="padding: 6rem; display: flex; justify-content: center;">
        <BPopover
          title="Accessible Popover"
          content="This popover demonstrates proper accessibility."
          trigger="click"
          data-testid="a11y-popover"
        >
          <BButton data-testid="a11y-trigger">Show Popover</BButton>
        </BPopover>
      </div>
    `}),play:async({canvasElement:e})=>{let t=m(e).getByTestId(`a11y-trigger`);await f.click(t),await p(()=>{d(document.querySelector(`.b-popover__content[role="tooltip"]`)).toBeTruthy()});let n=document.querySelector(`.b-popover__content[role="tooltip"]`);d(n.getAttribute(`role`)).toBe(`tooltip`);let r=n.getAttribute(`aria-labelledby`);d(r).toBeTruthy();let i=document.getElementById(r);d(i).toBeTruthy(),d(i.textContent).toBe(`Accessible Popover`);let a=n.querySelector(`.b-popover__arrow`);a&&d(a.getAttribute(`aria-hidden`)).toBe(`true`),d(n.getAttribute(`tabindex`)).toBe(`-1`),await f.keyboard(`{Escape}`),await p(()=>{d(document.querySelector(`.b-popover__content:popover-open`)).toBeNull()}),await f.click(t),await p(()=>{d(document.querySelector(`.b-popover__content[role="tooltip"]`)).toBeTruthy()})}},S={name:`Interaction – click open/close`,parameters:{controls:{disable:!0},a11y:{test:`off`},docs:{description:{story:`Opens popover via click, verifies content is visible, clicks again to close.`}}},render:()=>({components:{BButton:l,BPopover:c},template:`
      <div style="padding: 6rem; display: flex; justify-content: center;">
        <BPopover title="Click Popover" content="Visible content here." trigger="click">
          <BButton data-testid="click-trigger">Toggle Popover</BButton>
        </BPopover>
      </div>
    `}),play:async({canvasElement:e})=>{let t=m(e).getByTestId(`click-trigger`);await f.click(t),await p(()=>{d(document.querySelector(`.b-popover__content[role="tooltip"]`)).toBeTruthy(),d(document.querySelector(`.b-popover__title`)?.textContent).toBe(`Click Popover`),d(document.querySelector(`.b-popover__body`)?.textContent).toBe(`Visible content here.`)}),await f.click(t),await p(()=>{d(document.querySelector(`.b-popover__content:popover-open`)).toBeNull()})}},C={name:`Interaction – keyboard Escape`,parameters:{controls:{disable:!0},a11y:{test:`off`},docs:{description:{story:`Opens popover via click, then presses Escape to close it.`}}},render:()=>({components:{BButton:l,BPopover:c},template:`
      <div style="padding: 6rem; display: flex; justify-content: center;">
        <BPopover title="Escape me" content="Press Escape to close." trigger="click">
          <BButton data-testid="esc-trigger">Open Popover</BButton>
        </BPopover>
      </div>
    `}),play:async({canvasElement:e})=>{let t=m(e).getByTestId(`esc-trigger`);await f.click(t),await p(()=>{d(document.querySelector(`.b-popover__content[role="tooltip"]`)).toBeTruthy()}),await f.keyboard(`{Escape}`),await p(()=>{d(document.querySelector(`.b-popover__content:popover-open`)).toBeNull()})}},w={name:`Theming (CSS vars)`,parameters:{controls:{disable:!0},a11y:{test:`off`},docs:{description:{story:"Override `--b-popover-*` CSS custom properties to customize the popover appearance. All tokens are scoped to `.b-popover__content` and can be overridden per element."},source:{code:`
<style>
.my-custom-popover {
  --b-popover-bg: #1a1a2e;
  --b-popover-color: #eaeaea;
  --b-popover-border-radius: 1rem;
  --b-popover-title-color: #faad14;
}
</style>
        `}}},render:()=>({components:{BButton:l,BPopover:c},template:`
      <div style="padding: 6rem; display: flex; gap: 2rem; justify-content: center;">
        <BPopover title="Default theme" content="Standard popover appearance.">
          <BButton>Default</BButton>
        </BPopover>
        <div style="--b-popover-bg: #1a1a2e; --b-popover-color: #eaeaea; --b-popover-arrow-color: #1a1a2e; --b-popover-border-radius: 1rem; --b-popover-title-color: #faad14; --b-popover-body-color: #ccc; --b-popover-title-border-bottom: 1px solid #333;">
          <BPopover title="Custom theme" content="Dark custom popover.">
            <BButton>Custom</BButton>
          </BPopover>
        </div>
        <div style="--b-popover-border-radius: 999px; --b-popover-padding-x: 1.5rem; --b-popover-padding-y: 1rem;">
          <BPopover content="A pill-shaped popover without a title.">
            <BButton>Pill</BButton>
          </BPopover>
        </div>
      </div>
    `})},T={name:`Edge case – controlled v-model`,parameters:{controls:{disable:!0},a11y:{test:`off`},docs:{description:{story:`Popover visibility is controlled externally via v-model.`}}},render:()=>({components:{BButton:l,BPopover:c},setup(){return{open:n(!1)}},template:`
      <div style="padding: 6rem; display: flex; gap: 2rem; justify-content: center; align-items: center;">
        <BButton @click="open = !open" data-testid="external-toggle">
          {{ open ? 'Hide' : 'Show' }} Popover
        </BButton>
        <BPopover v-model="open" title="Controlled" content="This popover is controlled externally." trigger="click">
          <span style="padding: 0.5rem; border: 1px dashed #ccc; border-radius: 0.25rem;">Target</span>
        </BPopover>
        <span>Open: {{ open }}</span>
      </div>
    `}),play:async({canvasElement:e})=>{let t=m(e).getByTestId(`external-toggle`);await f.click(t),await p(()=>{d(document.querySelector(`.b-popover__content[role="tooltip"]`)).toBeTruthy()}),await f.click(t),await p(()=>{d(document.querySelector(`.b-popover__content:popover-open`)).toBeNull()})}},E={name:`Edge case – long content`,parameters:{controls:{disable:!0},a11y:{test:`off`}},render:()=>({components:{BButton:l,BPopover:c},template:`
      <div style="padding: 6rem; display: flex; justify-content: center;">
        <BPopover
          title="Very Long Title That Extends Beyond Normal Width to Test Wrapping Behavior"
          content="This is an extremely long content string meant to test how the popover handles overflow and wrapping of text content. It should wrap properly within the max-width constraint without breaking the layout or overflowing the container. Lorem ipsum dolor sit amet, consectetur adipiscing elit."
        >
          <BButton>Long Content</BButton>
        </BPopover>
      </div>
    `})},D={name:`Snapshot – minimal`,parameters:{controls:{disable:!0},a11y:{test:`error`,context:{include:[`.b-popover__toggle`,`.b-popover__content`]}}},render:()=>({components:{BButton:l,BPopover:c},template:`
      <div style="padding: 6rem; display: flex; justify-content: center;">
        <BPopover title="Snapshot" content="Minimal snapshot popover." trigger="click">
          <BButton data-testid="open-snap">Open</BButton>
        </BPopover>
      </div>
    `}),play:async({canvasElement:e})=>{let t=m(e);await f.click(t.getByTestId(`open-snap`)),await p(()=>{let e=document.querySelector(`.b-popover__content`);d(e).toBeTruthy(),d(e.querySelector(`.b-popover__inner`)).toBeTruthy(),d(e.querySelector(`.b-popover__arrow`)).toBeTruthy(),d(e.querySelector(`.b-popover__title`)).toBeTruthy(),d(e.querySelector(`.b-popover__body`)).toBeTruthy(),d(e.getAttribute(`role`)).toBe(`tooltip`)})}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    title: 'Popover Title',
    content: 'This is the popover content area. You can place any information here.',
    trigger: 'hover' as const,
    placement: 'top-center' as const,
    arrow: true,
    destroyTooltipOnHide: false,
    fresh: false,
    zIndex: 1030
  },
  render: (args: any) => ({
    components: {
      BButton,
      BPopover
    },
    setup() {
      const open = ref(args.modelValue ?? undefined);
      const argsRef = toRef(() => args.modelValue);
      watch(argsRef, v => {
        open.value = v;
      });
      return {
        args,
        open
      };
    },
    template: \`
      <div style="padding: 6rem; display: flex; justify-content: center;">
        <BPopover v-bind="args" v-model="open">
          <BButton>Hover me</BButton>
        </BPopover>
      </div>
    \`
  }),
  parameters: {
    a11y: {
      test: 'off'
    }
  }
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  name: 'Basic Popover',
  parameters: {
    controls: {
      disable: true
    },
    a11y: {
      test: 'off'
    }
  },
  render: () => ({
    components: {
      BButton,
      BPopover
    },
    template: \`
      <div style="padding: 6rem; display: flex; gap: 2rem; justify-content: center;">
        <BPopover title="Title" content="Content of the popover.">
          <BButton>With Title</BButton>
        </BPopover>
        <BPopover content="Popover without a title.">
          <BButton>No Title</BButton>
        </BPopover>
      </div>
    \`
  }),
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const buttons = canvas.getAllByRole('button');

    // Hover first button
    await userEvent.hover(buttons[0]);
    await waitFor(() => {
      const popover = document.querySelector('.b-popover__content');
      expect(popover).toBeTruthy();
      expect(document.querySelector('.b-popover__title')?.textContent).toBe('Title');
      expect(document.querySelector('.b-popover__body')?.textContent).toBe('Content of the popover.');
    });
    await userEvent.unhover(buttons[0]);
  }
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  name: 'Trigger Modes',
  parameters: {
    controls: {
      disable: true
    },
    a11y: {
      test: 'off'
    }
  },
  render: () => ({
    components: {
      BButton,
      BPopover
    },
    template: \`
      <div style="padding: 6rem; display: flex; gap: 2rem; justify-content: center;">
        <BPopover title="Hover" content="Triggered on hover." trigger="hover">
          <BButton>Hover</BButton>
        </BPopover>
        <BPopover title="Click" content="Triggered on click." trigger="click">
          <BButton>Click</BButton>
        </BPopover>
        <BPopover title="Focus" content="Triggered on focus." trigger="focus">
          <BButton>Focus</BButton>
        </BPopover>
      </div>
    \`
  })
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  name: 'All Placements',
  parameters: {
    controls: {
      disable: true
    },
    a11y: {
      test: 'off'
    },
    docs: {
      source: {
        code: \`
<BPopover title="Popover" content="Content" placement="top-left"><BButton>TL</BButton></BPopover>
<BPopover title="Popover" content="Content" placement="top-center"><BButton>TC</BButton></BPopover>
<!-- … 12 placements total -->
        \`
      }
    }
  },
  render: () => ({
    components: {
      BButton,
      BPopover
    },
    template: \`
      <div style="padding: 8rem 4rem; display: grid; grid-template-columns: repeat(4, 1fr); gap: 2rem; justify-items: center;">
        <BPopover title="Top Left" content="Content" placement="top-left"><BButton>Top Left</BButton></BPopover>
        <BPopover title="Top Center" content="Content" placement="top-center"><BButton>Top Center</BButton></BPopover>
        <BPopover title="Top Right" content="Content" placement="top-right"><BButton>Top Right</BButton></BPopover>
        <div></div>

        <BPopover title="Left Top" content="Content" placement="left-top"><BButton>Left Top</BButton></BPopover>
        <div></div>
        <div></div>
        <BPopover title="Right Top" content="Content" placement="right-top"><BButton>Right Top</BButton></BPopover>

        <BPopover title="Left Center" content="Content" placement="left-center"><BButton>Left Center</BButton></BPopover>
        <div></div>
        <div></div>
        <BPopover title="Right Center" content="Content" placement="right-center"><BButton>Right Center</BButton></BPopover>

        <BPopover title="Left Bottom" content="Content" placement="left-bottom"><BButton>Left Bottom</BButton></BPopover>
        <div></div>
        <div></div>
        <BPopover title="Right Bottom" content="Content" placement="right-bottom"><BButton>Right Bottom</BButton></BPopover>

        <div></div>
        <BPopover title="Bottom Left" content="Content" placement="bottom-left"><BButton>Bottom Left</BButton></BPopover>
        <BPopover title="Bottom Center" content="Content" placement="bottom-center"><BButton>Bottom Center</BButton></BPopover>
        <BPopover title="Bottom Right" content="Content" placement="bottom-right"><BButton>Bottom Right</BButton></BPopover>
      </div>
    \`
  })
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  name: 'Rich Content (slots)',
  parameters: {
    controls: {
      disable: true
    },
    a11y: {
      test: 'off'
    }
  },
  render: () => ({
    components: {
      BButton,
      BPopover
    },
    template: \`
      <div style="padding: 6rem; display: flex; gap: 2rem; justify-content: center;">
        <BPopover trigger="click">
          <template #title>
            <span style="color: oklch(55% 0.2 260);">Custom Title</span>
          </template>
          <template #content>
            <div>
              <p style="margin: 0 0 0.5rem;">Rich HTML content with links and formatting.</p>
              <a href="#" style="color: oklch(55% 0.2 260);">Learn more</a>
            </div>
          </template>
          <BButton>Rich Content</BButton>
        </BPopover>
      </div>
    \`
  })
}`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  name: 'Accessibility (roles & keyboard)',
  parameters: {
    controls: {
      disable: true
    },
    a11y: {
      test: 'error',
      context: {
        include: ['.b-popover__toggle', '.b-popover__content']
      }
    },
    docs: {
      description: {
        story: 'The popover uses \`role="tooltip"\` with \`aria-labelledby\` pointing to the title. ' + 'The arrow is \`aria-hidden="true"\`. ' + 'Escape key dismisses the popover and returns focus. ' + 'Focus trapping is active when the popover contains focusable elements.\\n\\n' + '**Testing:** axe-core runs after the play function. Manual ARIA assertions provide defense-in-depth.'
      }
    }
  },
  render: () => ({
    components: {
      BButton,
      BPopover
    },
    template: \`
      <div style="padding: 6rem; display: flex; justify-content: center;">
        <BPopover
          title="Accessible Popover"
          content="This popover demonstrates proper accessibility."
          trigger="click"
          data-testid="a11y-popover"
        >
          <BButton data-testid="a11y-trigger">Show Popover</BButton>
        </BPopover>
      </div>
    \`
  }),
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);

    // Open popover via click
    const trigger = canvas.getByTestId('a11y-trigger');
    await userEvent.click(trigger);
    await waitFor(() => {
      const tooltip = document.querySelector('.b-popover__content[role="tooltip"]');
      expect(tooltip).toBeTruthy();
    });
    const tooltipEl = document.querySelector('.b-popover__content[role="tooltip"]')!;

    // role="tooltip"
    expect(tooltipEl.getAttribute('role')).toBe('tooltip');

    // aria-labelledby points to title
    const labelledBy = tooltipEl.getAttribute('aria-labelledby');
    expect(labelledBy).toBeTruthy();
    const titleEl = document.getElementById(labelledBy!);
    expect(titleEl).toBeTruthy();
    expect(titleEl!.textContent).toBe('Accessible Popover');

    // Arrow is aria-hidden
    const arrow = tooltipEl.querySelector('.b-popover__arrow');
    if (arrow) {
      expect(arrow.getAttribute('aria-hidden')).toBe('true');
    }

    // tabindex="-1" for focus management
    expect(tooltipEl.getAttribute('tabindex')).toBe('-1');

    // Keyboard: Escape closes
    await userEvent.keyboard('{Escape}');
    await waitFor(() => {
      expect(document.querySelector('.b-popover__content:popover-open')).toBeNull();
    });

    // Re-open for axe-core scan
    await userEvent.click(trigger);
    await waitFor(() => {
      expect(document.querySelector('.b-popover__content[role="tooltip"]')).toBeTruthy();
    });
  }
}`,...x.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  name: 'Interaction – click open/close',
  parameters: {
    controls: {
      disable: true
    },
    a11y: {
      test: 'off'
    },
    docs: {
      description: {
        story: 'Opens popover via click, verifies content is visible, clicks again to close.'
      }
    }
  },
  render: () => ({
    components: {
      BButton,
      BPopover
    },
    template: \`
      <div style="padding: 6rem; display: flex; justify-content: center;">
        <BPopover title="Click Popover" content="Visible content here." trigger="click">
          <BButton data-testid="click-trigger">Toggle Popover</BButton>
        </BPopover>
      </div>
    \`
  }),
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const trigger = canvas.getByTestId('click-trigger');

    // Open
    await userEvent.click(trigger);
    await waitFor(() => {
      expect(document.querySelector('.b-popover__content[role="tooltip"]')).toBeTruthy();
      expect(document.querySelector('.b-popover__title')?.textContent).toBe('Click Popover');
      expect(document.querySelector('.b-popover__body')?.textContent).toBe('Visible content here.');
    });

    // Close
    await userEvent.click(trigger);
    await waitFor(() => {
      expect(document.querySelector('.b-popover__content:popover-open')).toBeNull();
    });
  }
}`,...S.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  name: 'Interaction – keyboard Escape',
  parameters: {
    controls: {
      disable: true
    },
    a11y: {
      test: 'off'
    },
    docs: {
      description: {
        story: 'Opens popover via click, then presses Escape to close it.'
      }
    }
  },
  render: () => ({
    components: {
      BButton,
      BPopover
    },
    template: \`
      <div style="padding: 6rem; display: flex; justify-content: center;">
        <BPopover title="Escape me" content="Press Escape to close." trigger="click">
          <BButton data-testid="esc-trigger">Open Popover</BButton>
        </BPopover>
      </div>
    \`
  }),
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const trigger = canvas.getByTestId('esc-trigger');
    await userEvent.click(trigger);
    await waitFor(() => {
      expect(document.querySelector('.b-popover__content[role="tooltip"]')).toBeTruthy();
    });
    await userEvent.keyboard('{Escape}');
    await waitFor(() => {
      expect(document.querySelector('.b-popover__content:popover-open')).toBeNull();
    });
  }
}`,...C.parameters?.docs?.source}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  name: 'Theming (CSS vars)',
  parameters: {
    controls: {
      disable: true
    },
    a11y: {
      test: 'off'
    },
    docs: {
      description: {
        story: 'Override \`--b-popover-*\` CSS custom properties to customize the popover appearance. ' + 'All tokens are scoped to \`.b-popover__content\` and can be overridden per element.'
      },
      source: {
        code: \`
<style>
.my-custom-popover {
  --b-popover-bg: #1a1a2e;
  --b-popover-color: #eaeaea;
  --b-popover-border-radius: 1rem;
  --b-popover-title-color: #faad14;
}
</style>
        \`
      }
    }
  },
  render: () => ({
    components: {
      BButton,
      BPopover
    },
    template: \`
      <div style="padding: 6rem; display: flex; gap: 2rem; justify-content: center;">
        <BPopover title="Default theme" content="Standard popover appearance.">
          <BButton>Default</BButton>
        </BPopover>
        <div style="--b-popover-bg: #1a1a2e; --b-popover-color: #eaeaea; --b-popover-arrow-color: #1a1a2e; --b-popover-border-radius: 1rem; --b-popover-title-color: #faad14; --b-popover-body-color: #ccc; --b-popover-title-border-bottom: 1px solid #333;">
          <BPopover title="Custom theme" content="Dark custom popover.">
            <BButton>Custom</BButton>
          </BPopover>
        </div>
        <div style="--b-popover-border-radius: 999px; --b-popover-padding-x: 1.5rem; --b-popover-padding-y: 1rem;">
          <BPopover content="A pill-shaped popover without a title.">
            <BButton>Pill</BButton>
          </BPopover>
        </div>
      </div>
    \`
  })
}`,...w.parameters?.docs?.source}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  name: 'Edge case – controlled v-model',
  parameters: {
    controls: {
      disable: true
    },
    a11y: {
      test: 'off'
    },
    docs: {
      description: {
        story: 'Popover visibility is controlled externally via v-model.'
      }
    }
  },
  render: () => ({
    components: {
      BButton,
      BPopover
    },
    setup() {
      const open = ref(false);
      return {
        open
      };
    },
    template: \`
      <div style="padding: 6rem; display: flex; gap: 2rem; justify-content: center; align-items: center;">
        <BButton @click="open = !open" data-testid="external-toggle">
          {{ open ? 'Hide' : 'Show' }} Popover
        </BButton>
        <BPopover v-model="open" title="Controlled" content="This popover is controlled externally." trigger="click">
          <span style="padding: 0.5rem; border: 1px dashed #ccc; border-radius: 0.25rem;">Target</span>
        </BPopover>
        <span>Open: {{ open }}</span>
      </div>
    \`
  }),
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const externalToggle = canvas.getByTestId('external-toggle');

    // Open via external button
    await userEvent.click(externalToggle);
    await waitFor(() => {
      expect(document.querySelector('.b-popover__content[role="tooltip"]')).toBeTruthy();
    });

    // Close via external button
    await userEvent.click(externalToggle);
    await waitFor(() => {
      expect(document.querySelector('.b-popover__content:popover-open')).toBeNull();
    });
  }
}`,...T.parameters?.docs?.source}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  name: 'Edge case – long content',
  parameters: {
    controls: {
      disable: true
    },
    a11y: {
      test: 'off'
    }
  },
  render: () => ({
    components: {
      BButton,
      BPopover
    },
    template: \`
      <div style="padding: 6rem; display: flex; justify-content: center;">
        <BPopover
          title="Very Long Title That Extends Beyond Normal Width to Test Wrapping Behavior"
          content="This is an extremely long content string meant to test how the popover handles overflow and wrapping of text content. It should wrap properly within the max-width constraint without breaking the layout or overflowing the container. Lorem ipsum dolor sit amet, consectetur adipiscing elit."
        >
          <BButton>Long Content</BButton>
        </BPopover>
      </div>
    \`
  })
}`,...E.parameters?.docs?.source}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  name: 'Snapshot – minimal',
  parameters: {
    controls: {
      disable: true
    },
    a11y: {
      test: 'error',
      context: {
        include: ['.b-popover__toggle', '.b-popover__content']
      }
    }
  },
  render: () => ({
    components: {
      BButton,
      BPopover
    },
    template: \`
      <div style="padding: 6rem; display: flex; justify-content: center;">
        <BPopover title="Snapshot" content="Minimal snapshot popover." trigger="click">
          <BButton data-testid="open-snap">Open</BButton>
        </BPopover>
      </div>
    \`
  }),
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    await userEvent.click(canvas.getByTestId('open-snap'));
    await waitFor(() => {
      const tooltip = document.querySelector('.b-popover__content');
      expect(tooltip).toBeTruthy();
      expect(tooltip!.querySelector('.b-popover__inner')).toBeTruthy();
      expect(tooltip!.querySelector('.b-popover__arrow')).toBeTruthy();
      expect(tooltip!.querySelector('.b-popover__title')).toBeTruthy();
      expect(tooltip!.querySelector('.b-popover__body')).toBeTruthy();
      expect(tooltip!.getAttribute('role')).toBe('tooltip');
    });
  }
}`,...D.parameters?.docs?.source}}},O=[`Playground`,`BasicPopover`,`TriggerModes`,`AllPlacements`,`RichContent`,`Accessibility`,`InteractionClickFlow`,`InteractionKeyboardEscape`,`Theming`,`EdgeCaseControlled`,`EdgeCaseLongContent`,`SnapshotMinimal`]}))();export{x as Accessibility,y as AllPlacements,_ as BasicPopover,T as EdgeCaseControlled,E as EdgeCaseLongContent,S as InteractionClickFlow,C as InteractionKeyboardEscape,g as Playground,b as RichContent,D as SnapshotMinimal,w as Theming,v as TriggerModes,O as __namedExportsOrder,h as default};