import{n as e}from"./chunk-BneVvdWh.js";import{B as t,t as n}from"./components-_FfmWUAp.js";var r,i,a,o,s,c,l,u,d,f,p,m,h;e((()=>{n(),{expect:r,within:i}=__STORYBOOK_MODULE_TEST__,a={title:`Layout/Divider`,component:t,tags:[`autodocs`],argTypes:{orientation:{control:`select`,options:[`horizontal`,`vertical`],description:`Line direction.`,table:{defaultValue:{summary:`horizontal`}}},variant:{control:`select`,options:[`solid`,`dashed`,`dotted`],description:`Line style.`,table:{defaultValue:{summary:`solid`}}},dashed:{control:`boolean`,description:'Legacy shorthand for `variant="dashed"`. Prefer `variant` prop.',table:{defaultValue:{summary:`false`}}},plain:{control:`boolean`,description:`Render embedded text in plain (normal weight) style.`,table:{defaultValue:{summary:`true`}}},size:{control:`select`,options:[`small`,`medium`,`large`],description:`Vertical spacing around horizontal dividers.`,table:{defaultValue:{summary:`large`}}},titlePlacement:{control:`select`,options:[`start`,`center`,`end`],description:`Horizontal position of the title text.`,table:{defaultValue:{summary:`center`}}}},parameters:{docs:{description:{component:`The <code>BDivider</code> component separates content into clear groups.<br><br>It supports <strong>horizontal</strong> (block-level rule) and <strong>vertical</strong> (inline separator) orientations, three line styles (<em>solid</em>, <em>dashed</em>, <em>dotted</em>), optional embedded text, and size variants for vertical spacing.`}}}},o={args:{orientation:`horizontal`,variant:`solid`,dashed:!1,plain:!0,size:`large`,titlePlacement:`center`},render:e=>({components:{BDivider:t},setup(){return{args:e}},template:`
      <div>
        <p style="margin:0 0 0.5rem;">Content above</p>
        <BDivider v-bind="args">With Text</BDivider>
        <p style="margin:0.5rem 0 0;">Content below</p>
      </div>
    `})},s={name:`Horizontal – line variants`,parameters:{controls:{disable:!0},docs:{source:{code:`
<BDivider />
<BDivider variant="dashed" />
<BDivider variant="dotted" />
        `}}},render:()=>({components:{BDivider:t},template:`
      <div style="display:flex;flex-direction:column;gap:0.25rem;">
        <p style="margin:0;font-size:0.75rem;color:#595959;">solid (default)</p>
        <BDivider />
        <p style="margin:0;font-size:0.75rem;color:#595959;">dashed</p>
        <BDivider variant="dashed" />
        <p style="margin:0;font-size:0.75rem;color:#595959;">dotted</p>
        <BDivider variant="dotted" />
      </div>
    `})},c={name:`With Text – placement`,parameters:{controls:{disable:!0},docs:{source:{code:`
<BDivider title-placement="start">Start</BDivider>
<BDivider title-placement="center">Center</BDivider>
<BDivider title-placement="end">End</BDivider>
        `}}},render:()=>({components:{BDivider:t},template:`
      <div style="display:flex;flex-direction:column;gap:0.5rem;">
        <BDivider title-placement="start">Start</BDivider>
        <BDivider title-placement="center">Center (default)</BDivider>
        <BDivider title-placement="end">End</BDivider>
      </div>
    `})},l={name:`Plain vs Heading Text`,parameters:{controls:{disable:!0},docs:{source:{code:`
<BDivider :plain="true">Plain text (default)</BDivider>
<BDivider :plain="false">Heading weight</BDivider>
        `}}},render:()=>({components:{BDivider:t},template:`
      <div style="display:flex;flex-direction:column;gap:0.5rem;">
        <BDivider :plain="true">Plain text (default)</BDivider>
        <BDivider :plain="false">Heading weight</BDivider>
      </div>
    `})},u={name:`Horizontal – size variants`,parameters:{controls:{disable:!0},docs:{source:{code:`
<BDivider size="small" />
<BDivider size="medium" />
<BDivider size="large" />
        `}}},render:()=>({components:{BDivider:t},template:`
      <div style="background:oklch(96% 0.01 264);padding:1rem;">
        <p style="margin:0;font-size:0.75rem;color:#595959;">size="small"</p>
        <BDivider size="small" />
        <p style="margin:0;font-size:0.75rem;color:#595959;">size="medium"</p>
        <BDivider size="medium" />
        <p style="margin:0;font-size:0.75rem;color:#595959;">size="large" (default)</p>
        <BDivider size="large" />
      </div>
    `})},d={name:`Vertical – inline separator`,parameters:{controls:{disable:!0},docs:{source:{code:`
<a href="#">Link 1</a>
<BDivider orientation="vertical" />
<a href="#">Link 2</a>
<BDivider orientation="vertical" variant="dashed" />
<a href="#">Link 3</a>
        `}}},render:()=>({components:{BDivider:t},template:`
      <div style="font-size:1rem;line-height:2;">
        <span>Home</span>
        <BDivider orientation="vertical" />
        <span>About</span>
        <BDivider orientation="vertical" variant="dashed" />
        <span>Contact</span>
        <BDivider orientation="vertical" variant="dotted" />
        <span>Blog</span>
      </div>
    `})},f={name:`Accessibility (roles & aria)`,parameters:{controls:{disable:!0},docs:{description:{story:`All divider variants expose <code>role="separator"</code> and the correct <code>aria-orientation</code>. Dividers carry no <code>tabindex</code> as they are purely presentational.`}}},render:()=>({components:{BDivider:t},template:`
      <div style="display:flex;flex-direction:column;gap:1rem;">
        <!-- 1. Horizontal (no text) -->
        <div>
          <p style="margin:0 0 0.25rem;font-size:0.75rem;color:#595959;">Horizontal (no text) — &lt;div role=separator aria-orientation=horizontal&gt;</p>
          <BDivider />
        </div>
        <!-- 2. div with text -->
        <div>
          <p style="margin:0 0 0.25rem;font-size:0.75rem;color:#595959;">Horizontal (with text) — &lt;div role=separator&gt;</p>
          <BDivider>Section Title</BDivider>
        </div>
        <!-- 3. Vertical -->
        <div>
          <p style="margin:0 0 0.25rem;font-size:0.75rem;color:#595959;">Vertical — &lt;span role=separator aria-orientation=vertical&gt;</p>
          <span>Item A</span>
          <BDivider orientation="vertical" />
          <span>Item B</span>
        </div>
      </div>
    `}),play:async({canvasElement:e})=>{let t=i(e),n=e.querySelector(`div.b-divider:not(.b-divider--with-text)`);r(n).not.toBeNull(),r(n.getAttribute(`role`)).toBe(`separator`),r(n.getAttribute(`aria-orientation`)).toBe(`horizontal`);let a=e.querySelector(`div.b-divider--with-text`);r(a).not.toBeNull(),r(a.getAttribute(`role`)).toBe(`separator`),r(a.getAttribute(`aria-orientation`)).toBe(`horizontal`);let o=e.querySelector(`span.b-divider--vertical`);r(o).not.toBeNull(),r(o.getAttribute(`role`)).toBe(`separator`),r(o.getAttribute(`aria-orientation`)).toBe(`vertical`),e.querySelectorAll(`.b-divider`).forEach(e=>{r(e.getAttribute(`tabindex`)).toBeNull()}),r(t).toBeTruthy()}},p={name:`Theming (CSS vars)`,parameters:{controls:{disable:!0},docs:{description:{story:`Override <code>--b-divider-*</code> CSS custom properties on the element (or an ancestor) to customise appearance without touching component source.`},source:{code:`
<style>
.my-divider {
  --b-divider-color: #e94560;
  --b-divider-text-color: #b91535;
  --b-divider-text-padding-inline: 2rem;
}
</style>

<BDivider class="my-divider">Custom Theme</BDivider>
        `}}},render:()=>({components:{BDivider:t},template:`
      <div style="display:flex;flex-direction:column;gap:1.5rem;">

        <!-- Default -->
        <div>
          <p style="margin:0 0 0.25rem;font-size:0.75rem;color:#595959;">Default theme</p>
          <BDivider>Default</BDivider>
        </div>

        <!-- Custom: wine-red line + wider text padding -->
        <div>
          <p style="margin:0 0 0.25rem;font-size:0.75rem;color:#595959;">
            --b-divider-color + --b-divider-text-color + --b-divider-text-padding-inline
          </p>
          <BDivider style="
            --b-divider-color: #e94560;
            --b-divider-text-color: #b91535;
            --b-divider-text-padding-inline: 2rem;
          ">Custom Colour</BDivider>
        </div>

        <!-- Custom: thick dotted green -->
        <div>
          <p style="margin:0 0 0.25rem;font-size:0.75rem;color:#595959;">
            --b-divider-color + --b-divider-line-width + dotted variant
          </p>
          <BDivider
            variant="dotted"
            style="
              --b-divider-color: oklch(55% 0.18 145);
              --b-divider-line-width: 2px;
            "
          />
        </div>

        <!-- Custom: vertical with wider margin -->
        <div>
          <p style="margin:0 0 0.25rem;font-size:0.75rem;color:#595959;">
            Vertical — --b-divider-vertical-margin-inline
          </p>
          <span>Left</span>
          <BDivider
            orientation="vertical"
            style="--b-divider-vertical-margin-inline: 24px; --b-divider-color: oklch(55% 0.18 260);"
          />
          <span>Right</span>
        </div>

      </div>
    `})},m={name:`Interaction – DOM structure`,parameters:{controls:{disable:!0},docs:{description:{story:`Automated play function: asserts correct element tags, class hooks, ARIA roles, and the presence of the content wrapper.`}}},render:()=>({components:{BDivider:t},template:`
      <div>
        <BDivider data-testid="plain-hr" />
        <BDivider data-testid="with-text" title-placement="start">Label</BDivider>
        <span>A</span>
        <BDivider data-testid="vertical" orientation="vertical" />
        <span>B</span>
      </div>
    `}),play:async({canvasElement:e})=>{let t=e.querySelector(`[data-testid="plain-hr"]`);r(t).not.toBeNull(),r(t.tagName).toBe(`DIV`),r(t.getAttribute(`role`)).toBe(`separator`),r(t.classList.contains(`b-divider--solid`)).toBe(!0),r(t.classList.contains(`b-divider--size-large`)).toBe(!0);let n=e.querySelector(`[data-testid="with-text"]`);r(n).not.toBeNull(),r(n.tagName).toBe(`DIV`),r(n.classList.contains(`b-divider--with-text`)).toBe(!0),r(n.classList.contains(`b-divider--text-start`)).toBe(!0);let i=n.querySelector(`.b-divider__content`);r(i).not.toBeNull(),r(i.textContent).toBe(`Label`);let a=e.querySelector(`[data-testid="vertical"]`);r(a).not.toBeNull(),r(a.tagName).toBe(`SPAN`),r(a.classList.contains(`b-divider--vertical`)).toBe(!0),r(a.getAttribute(`aria-orientation`)).toBe(`vertical`)}},o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    orientation: 'horizontal',
    variant: 'solid',
    dashed: false,
    plain: true,
    size: 'large',
    titlePlacement: 'center'
  },
  render: args => ({
    components: {
      BDivider
    },
    setup() {
      return {
        args
      };
    },
    template: \`
      <div>
        <p style="margin:0 0 0.5rem;">Content above</p>
        <BDivider v-bind="args">With Text</BDivider>
        <p style="margin:0.5rem 0 0;">Content below</p>
      </div>
    \`
  })
}`,...o.parameters?.docs?.source},description:{story:`Interactive playground – tweak all props and slot content via the Controls panel.`,...o.parameters?.docs?.description}}},s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  name: 'Horizontal – line variants',
  parameters: {
    controls: {
      disable: true
    },
    docs: {
      source: {
        code: \`
<BDivider />
<BDivider variant="dashed" />
<BDivider variant="dotted" />
        \`
      }
    }
  },
  render: () => ({
    components: {
      BDivider
    },
    template: \`
      <div style="display:flex;flex-direction:column;gap:0.25rem;">
        <p style="margin:0;font-size:0.75rem;color:#595959;">solid (default)</p>
        <BDivider />
        <p style="margin:0;font-size:0.75rem;color:#595959;">dashed</p>
        <BDivider variant="dashed" />
        <p style="margin:0;font-size:0.75rem;color:#595959;">dotted</p>
        <BDivider variant="dotted" />
      </div>
    \`
  })
}`,...s.parameters?.docs?.source},description:{story:`Solid, dashed, and dotted line styles for horizontal dividers.`,...s.parameters?.docs?.description}}},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  name: 'With Text – placement',
  parameters: {
    controls: {
      disable: true
    },
    docs: {
      source: {
        code: \`
<BDivider title-placement="start">Start</BDivider>
<BDivider title-placement="center">Center</BDivider>
<BDivider title-placement="end">End</BDivider>
        \`
      }
    }
  },
  render: () => ({
    components: {
      BDivider
    },
    template: \`
      <div style="display:flex;flex-direction:column;gap:0.5rem;">
        <BDivider title-placement="start">Start</BDivider>
        <BDivider title-placement="center">Center (default)</BDivider>
        <BDivider title-placement="end">End</BDivider>
      </div>
    \`
  })
}`,...c.parameters?.docs?.source},description:{story:`Horizontal dividers with embedded text in all three placement positions.`,...c.parameters?.docs?.description}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  name: 'Plain vs Heading Text',
  parameters: {
    controls: {
      disable: true
    },
    docs: {
      source: {
        code: \`
<BDivider :plain="true">Plain text (default)</BDivider>
<BDivider :plain="false">Heading weight</BDivider>
        \`
      }
    }
  },
  render: () => ({
    components: {
      BDivider
    },
    template: \`
      <div style="display:flex;flex-direction:column;gap:0.5rem;">
        <BDivider :plain="true">Plain text (default)</BDivider>
        <BDivider :plain="false">Heading weight</BDivider>
      </div>
    \`
  })
}`,...l.parameters?.docs?.source},description:{story:"Compare bold heading style (`plain=false`) vs the default plain style.",...l.parameters?.docs?.description}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  name: 'Horizontal – size variants',
  parameters: {
    controls: {
      disable: true
    },
    docs: {
      source: {
        code: \`
<BDivider size="small" />
<BDivider size="medium" />
<BDivider size="large" />
        \`
      }
    }
  },
  render: () => ({
    components: {
      BDivider
    },
    template: \`
      <div style="background:oklch(96% 0.01 264);padding:1rem;">
        <p style="margin:0;font-size:0.75rem;color:#595959;">size="small"</p>
        <BDivider size="small" />
        <p style="margin:0;font-size:0.75rem;color:#595959;">size="medium"</p>
        <BDivider size="medium" />
        <p style="margin:0;font-size:0.75rem;color:#595959;">size="large" (default)</p>
        <BDivider size="large" />
      </div>
    \`
  })
}`,...u.parameters?.docs?.source},description:{story:"The `size` prop controls vertical spacing (margin-block) around horizontal dividers.",...u.parameters?.docs?.description}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  name: 'Vertical – inline separator',
  parameters: {
    controls: {
      disable: true
    },
    docs: {
      source: {
        code: \`
<a href="#">Link 1</a>
<BDivider orientation="vertical" />
<a href="#">Link 2</a>
<BDivider orientation="vertical" variant="dashed" />
<a href="#">Link 3</a>
        \`
      }
    }
  },
  render: () => ({
    components: {
      BDivider
    },
    template: \`
      <div style="font-size:1rem;line-height:2;">
        <span>Home</span>
        <BDivider orientation="vertical" />
        <span>About</span>
        <BDivider orientation="vertical" variant="dashed" />
        <span>Contact</span>
        <BDivider orientation="vertical" variant="dotted" />
        <span>Blog</span>
      </div>
    \`
  })
}`,...d.parameters?.docs?.source},description:{story:`Vertical dividers inline between text and links.`,...d.parameters?.docs?.description}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  name: 'Accessibility (roles & aria)',
  parameters: {
    controls: {
      disable: true
    },
    docs: {
      description: {
        story: 'All divider variants expose <code>role="separator"</code> and the correct ' + '<code>aria-orientation</code>. Dividers carry no <code>tabindex</code> as they are ' + 'purely presentational.'
      }
    }
  },
  render: () => ({
    components: {
      BDivider
    },
    template: \`
      <div style="display:flex;flex-direction:column;gap:1rem;">
        <!-- 1. Horizontal (no text) -->
        <div>
          <p style="margin:0 0 0.25rem;font-size:0.75rem;color:#595959;">Horizontal (no text) — &lt;div role=separator aria-orientation=horizontal&gt;</p>
          <BDivider />
        </div>
        <!-- 2. div with text -->
        <div>
          <p style="margin:0 0 0.25rem;font-size:0.75rem;color:#595959;">Horizontal (with text) — &lt;div role=separator&gt;</p>
          <BDivider>Section Title</BDivider>
        </div>
        <!-- 3. Vertical -->
        <div>
          <p style="margin:0 0 0.25rem;font-size:0.75rem;color:#595959;">Vertical — &lt;span role=separator aria-orientation=vertical&gt;</p>
          <span>Item A</span>
          <BDivider orientation="vertical" />
          <span>Item B</span>
        </div>
      </div>
    \`
  }),
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);

    // 1. Horizontal div (no text)
    const divNoText = canvasElement.querySelector('div.b-divider:not(.b-divider--with-text)');
    expect(divNoText).not.toBeNull();
    expect(divNoText!.getAttribute('role')).toBe('separator');
    expect(divNoText!.getAttribute('aria-orientation')).toBe('horizontal');

    // 2. Div with text
    const divSep = canvasElement.querySelector('div.b-divider--with-text');
    expect(divSep).not.toBeNull();
    expect(divSep!.getAttribute('role')).toBe('separator');
    expect(divSep!.getAttribute('aria-orientation')).toBe('horizontal');

    // 3. Vertical span
    const spanSep = canvasElement.querySelector('span.b-divider--vertical');
    expect(spanSep).not.toBeNull();
    expect(spanSep!.getAttribute('role')).toBe('separator');
    expect(spanSep!.getAttribute('aria-orientation')).toBe('vertical');

    // None of the dividers should be focusable
    const allDividers = canvasElement.querySelectorAll('.b-divider');
    allDividers.forEach(el => {
      expect(el.getAttribute('tabindex')).toBeNull();
    });

    // canvas query just to silence unused-import warnings
    expect(canvas).toBeTruthy();
  }
}`,...f.parameters?.docs?.source},description:{story:'Demonstrates correct ARIA roles and keyboard (non-)interaction.\n\n- Horizontal (no text): `<div role="separator" aria-orientation="horizontal">`\n- Horizontal (with text): `<div role="separator">` wrapping the content span\n- Vertical: `<span role="separator" aria-orientation="vertical">`\n- No `tabindex` — dividers are purely presentational',...f.parameters?.docs?.description}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  name: 'Theming (CSS vars)',
  parameters: {
    controls: {
      disable: true
    },
    docs: {
      description: {
        story: 'Override <code>--b-divider-*</code> CSS custom properties on the element (or an ancestor) ' + 'to customise appearance without touching component source.'
      },
      source: {
        code: \`
<style>
.my-divider {
  --b-divider-color: #e94560;
  --b-divider-text-color: #b91535;
  --b-divider-text-padding-inline: 2rem;
}
</style>

<BDivider class="my-divider">Custom Theme</BDivider>
        \`
      }
    }
  },
  render: () => ({
    components: {
      BDivider
    },
    template: \`
      <div style="display:flex;flex-direction:column;gap:1.5rem;">

        <!-- Default -->
        <div>
          <p style="margin:0 0 0.25rem;font-size:0.75rem;color:#595959;">Default theme</p>
          <BDivider>Default</BDivider>
        </div>

        <!-- Custom: wine-red line + wider text padding -->
        <div>
          <p style="margin:0 0 0.25rem;font-size:0.75rem;color:#595959;">
            --b-divider-color + --b-divider-text-color + --b-divider-text-padding-inline
          </p>
          <BDivider style="
            --b-divider-color: #e94560;
            --b-divider-text-color: #b91535;
            --b-divider-text-padding-inline: 2rem;
          ">Custom Colour</BDivider>
        </div>

        <!-- Custom: thick dotted green -->
        <div>
          <p style="margin:0 0 0.25rem;font-size:0.75rem;color:#595959;">
            --b-divider-color + --b-divider-line-width + dotted variant
          </p>
          <BDivider
            variant="dotted"
            style="
              --b-divider-color: oklch(55% 0.18 145);
              --b-divider-line-width: 2px;
            "
          />
        </div>

        <!-- Custom: vertical with wider margin -->
        <div>
          <p style="margin:0 0 0.25rem;font-size:0.75rem;color:#595959;">
            Vertical — --b-divider-vertical-margin-inline
          </p>
          <span>Left</span>
          <BDivider
            orientation="vertical"
            style="--b-divider-vertical-margin-inline: 24px; --b-divider-color: oklch(55% 0.18 260);"
          />
          <span>Right</span>
        </div>

      </div>
    \`
  })
}`,...p.parameters?.docs?.source},description:{story:"Override CSS custom properties to customise the divider without touching source.\n\nDemonstrated tokens:\n- `--b-divider-color` — line colour\n- `--b-divider-text-color` — embedded text colour\n- `--b-divider-text-padding-inline` — padding around the text",...p.parameters?.docs?.description}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  name: 'Interaction – DOM structure',
  parameters: {
    controls: {
      disable: true
    },
    docs: {
      description: {
        story: 'Automated play function: asserts correct element tags, class hooks, ' + 'ARIA roles, and the presence of the content wrapper.'
      }
    }
  },
  render: () => ({
    components: {
      BDivider
    },
    template: \`
      <div>
        <BDivider data-testid="plain-hr" />
        <BDivider data-testid="with-text" title-placement="start">Label</BDivider>
        <span>A</span>
        <BDivider data-testid="vertical" orientation="vertical" />
        <span>B</span>
      </div>
    \`
  }),
  play: async ({
    canvasElement
  }) => {
    // 1. Plain horizontal — now a <div role=separator>, not <hr>
    const plainSep = canvasElement.querySelector('[data-testid="plain-hr"]');
    expect(plainSep).not.toBeNull();
    expect(plainSep!.tagName).toBe('DIV');
    expect(plainSep!.getAttribute('role')).toBe('separator');
    expect(plainSep!.classList.contains('b-divider--solid')).toBe(true);
    expect(plainSep!.classList.contains('b-divider--size-large')).toBe(true);

    // 2. Horizontal with text
    const withText = canvasElement.querySelector('[data-testid="with-text"]');
    expect(withText).not.toBeNull();
    expect(withText!.tagName).toBe('DIV');
    expect(withText!.classList.contains('b-divider--with-text')).toBe(true);
    expect(withText!.classList.contains('b-divider--text-start')).toBe(true);
    const content = withText!.querySelector('.b-divider__content');
    expect(content).not.toBeNull();
    expect(content!.textContent).toBe('Label');

    // 3. Vertical
    const vert = canvasElement.querySelector('[data-testid="vertical"]');
    expect(vert).not.toBeNull();
    expect(vert!.tagName).toBe('SPAN');
    expect(vert!.classList.contains('b-divider--vertical')).toBe(true);
    expect(vert!.getAttribute('aria-orientation')).toBe('vertical');
  }
}`,...m.parameters?.docs?.source},description:{story:`Automated interaction test: verifies class presence and DOM structure
for horizontal, horizontal-with-text, and vertical dividers.`,...m.parameters?.docs?.description}}},h=[`Playground`,`HorizontalVariants`,`WithText`,`PlainVsHeading`,`Sizes`,`Vertical`,`Accessibility`,`Theming`,`InteractionStructure`]}))();export{f as Accessibility,s as HorizontalVariants,m as InteractionStructure,l as PlainVsHeading,o as Playground,u as Sizes,p as Theming,d as Vertical,c as WithText,h as __namedExportsOrder,a as default};