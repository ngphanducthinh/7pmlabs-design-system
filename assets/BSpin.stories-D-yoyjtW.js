import{n as e}from"./chunk-BneVvdWh.js";import{X as t,i as n}from"./iframe-CuxZAc4v.js";import{A as r,C as i}from"./types-CV_3xB-y.js";import{k as a,t as o}from"./components-De-VN3a5.js";var s,c,l,u,d,f,p,m,h,g,_,v,y,b,x,S,C;e((()=>{o(),r(),n(),{expect:s,userEvent:c,waitFor:l,within:u}=__STORYBOOK_MODULE_TEST__,d={title:`Feedback/Spin`,component:a,tags:[`autodocs`],argTypes:{spinning:{control:`boolean`,description:`Whether the spinner is active.`,table:{defaultValue:{summary:`true`}}},size:{control:`select`,options:Object.values(i),description:`Size of the spinner indicator.`,table:{defaultValue:{summary:i.Default}}},tip:{control:`text`,description:`Descriptive text below the spinner.`},delay:{control:`number`,description:`Delay in ms before spinner shows (prevents flicker).`,table:{defaultValue:{summary:`0`}}},fullscreen:{control:`boolean`,description:`Display as a fullscreen overlay.`,table:{defaultValue:{summary:`false`}}}},parameters:{docs:{description:{component:`The <code>BSpin</code> component displays a loading indicator.<br><br>It supports three <strong>sizes</strong> (small, default, large), an optional <strong>tip</strong> text, a <strong>delay</strong> to prevent flicker, <strong>fullscreen</strong> overlay mode, and a <strong>nested</strong> mode that wraps content with a dimmed overlay while loading.<br>The spinner is accessible with <code>role="status"</code> and respects <code>prefers-reduced-motion</code>.`}}}},f={args:{spinning:!0,size:i.Default,tip:``,delay:0,fullscreen:!1},render:e=>({components:{BSpin:a},setup(){return{args:e}},template:`<BSpin v-bind="args" />`})},p={parameters:{controls:{disable:!0},docs:{source:{code:`
<BSpin size="small" />
<BSpin />
<BSpin size="large" />
        `}}},render:()=>({components:{BSpin:a},template:`
      <div style="display:flex;align-items:center;gap:2rem;">
        <div style="text-align:center;">
          <BSpin size="small" />
          <p style="margin-top:0.5rem;font-size:0.75rem;color:#666;">Small</p>
        </div>
        <div style="text-align:center;">
          <BSpin />
          <p style="margin-top:0.5rem;font-size:0.75rem;color:#666;">Default</p>
        </div>
        <div style="text-align:center;">
          <BSpin size="large" />
          <p style="margin-top:0.5rem;font-size:0.75rem;color:#666;">Large</p>
        </div>
      </div>
    `})},m={parameters:{controls:{disable:!0},docs:{source:{code:`<BSpin tip="Loading data..." />`}}},render:()=>({components:{BSpin:a},template:`
      <div style="display:flex;align-items:flex-start;gap:2rem;">
        <BSpin size="small" tip="Loading..." />
        <BSpin tip="Loading data..." />
        <BSpin size="large" tip="Please wait..." />
      </div>
    `})},h={parameters:{controls:{disable:!0},docs:{source:{code:`
<script setup>
const loading = ref(true);
<\/script>

<template>
  <button @click="loading = !loading">Toggle</button>
  <BSpin :spinning="loading" tip="Loading...">
    <div>Your content here</div>
  </BSpin>
</template>
        `}}},render:()=>({components:{BSpin:a},setup(){return{loading:t(!0)}},template:`
      <div style="display:flex;flex-direction:column;gap:1rem;">
        <div>
          <button
            data-testid="toggle-btn"
            style="padding:0.25rem 0.75rem;border:1px solid #ccc;border-radius:0.375rem;cursor:pointer;"
            @click="loading = !loading"
          >
            {{ loading ? 'Stop' : 'Start' }} loading
          </button>
        </div>
        <BSpin :spinning="loading" tip="Loading...">
          <div style="padding:2rem;border:1px solid #e8e8e8;border-radius:0.5rem;background:#fafafa;">
            <p style="margin:0 0 0.5rem"><strong>Card Title</strong></p>
            <p style="margin:0;color:#666;">Content is blurred and dimmed while loading. Click the button above to toggle.</p>
          </div>
        </BSpin>
      </div>
    `})},g={parameters:{controls:{disable:!0},docs:{source:{code:`<BSpin :spinning="loading" :delay="500" tip="Loading...">content</BSpin>`}}},render:()=>({components:{BSpin:a},setup(){let e=t(!1);function n(){e.value=!e.value}return{loading:e,toggle:n}},template:`
      <div style="display:flex;flex-direction:column;gap:1rem;">
        <div>
          <button
            style="padding:0.25rem 0.75rem;border:1px solid #ccc;border-radius:0.375rem;cursor:pointer;"
            @click="toggle"
          >
            {{ loading ? 'Stop' : 'Start' }} loading (500ms delay)
          </button>
        </div>
        <BSpin :spinning="loading" :delay="500" tip="Loading...">
          <div style="padding:2rem;border:1px solid #e8e8e8;border-radius:0.5rem;background:#fafafa;">
            <p style="margin:0;">This spinner has a 500ms delay before appearing.</p>
          </div>
        </BSpin>
      </div>
    `})},_={parameters:{controls:{disable:!0},docs:{source:{code:`
<BSpin tip="Custom spinner...">
  <template #indicator>
    <svg>...</svg>
  </template>
</BSpin>
        `}}},render:()=>({components:{BSpin:a},template:`
      <div style="display:flex;align-items:flex-start;gap:2rem;">
        <BSpin tip="Custom indicator">
          <template #indicator>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style="animation:custom-spin 1s linear infinite;">
              <path d="M12 2v4m0 12v4m10-10h-4M6 12H2m15.07-5.07-2.83 2.83M9.76 14.24l-2.83 2.83m11.14 0-2.83-2.83M9.76 9.76 6.93 6.93" stroke="oklch(55% 0.169 237.323)" stroke-width="2" stroke-linecap="round"/>
            </svg>
          </template>
        </BSpin>
        <style>
          @keyframes custom-spin { to { transform: rotate(360deg) } }
        </style>
      </div>
    `})},v={name:`Accessibility (roles & ARIA)`,parameters:{controls:{disable:!0},docs:{description:{story:'The spinner uses `role="status"` to announce loading to screen readers. When a tip is provided, `aria-describedby` links to it. In nested mode, `aria-busy` is set on the content container. The dot indicator carries `aria-hidden="true"` as it is decorative. Animations respect `prefers-reduced-motion`.'}}},render:()=>({components:{BSpin:a},template:`
      <div style="display:flex;flex-direction:column;gap:2rem;">
        <div>
          <h4 style="margin:0 0 0.5rem;">Standalone (aria-label)</h4>
          <BSpin data-testid="standalone" />
        </div>
        <div>
          <h4 style="margin:0 0 0.5rem;">With tip (aria-describedby)</h4>
          <BSpin data-testid="with-tip" tip="Loading resources..." />
        </div>
        <div>
          <h4 style="margin:0 0 0.5rem;">Nested (aria-busy on content)</h4>
          <BSpin data-testid="nested" :spinning="true" tip="Refreshing...">
            <div style="padding:1rem;border:1px solid #e8e8e8;border-radius:0.5rem;">
              Nested content with aria-busy
            </div>
          </BSpin>
        </div>
      </div>
    `}),play:async({canvasElement:e})=>{let t=e.querySelectorAll(`[role="status"]`);s(t.length).toBeGreaterThanOrEqual(3);let n=t[0];s(n.getAttribute(`aria-label`)).toBe(`Loading`);let r=t[1].getAttribute(`aria-describedby`);s(r).toBeTruthy(),s(e.querySelector(`#${r}`)?.textContent).toContain(`Loading resources...`),s(e.querySelector(`.b-spin__content`)?.getAttribute(`aria-busy`)).toBe(`true`),e.querySelectorAll(`.b-spin__indicator`).forEach(e=>{s(e.getAttribute(`aria-hidden`)).toBe(`true`)})}},y={name:`Theming (CSS vars)`,parameters:{controls:{disable:!0},docs:{description:{story:"Override `--b-spin-*` CSS custom properties to customise the spinner appearance without touching the component source."},source:{code:`
<style>
.my-custom-spin {
  --b-spin-dot-color: #e94560;
  --b-spin-tip-color: #e94560;
}
</style>

<BSpin class="my-custom-spin" tip="Custom themed..." />
        `}}},render:()=>({components:{BSpin:a},template:`
      <div style="display:flex;align-items:flex-start;gap:3rem;">
        <!-- Default -->
        <div style="text-align:center;">
          <BSpin tip="Default theme" />
          <p style="margin-top:0.5rem;font-size:0.75rem;color:#666;">Default</p>
        </div>

        <!-- Custom red -->
        <div style="text-align:center;">
          <BSpin
            tip="Red theme"
            style="--b-spin-dot-color:#e94560;--b-spin-tip-color:#e94560;"
          />
          <p style="margin-top:0.5rem;font-size:0.75rem;color:#666;">Custom</p>
        </div>

        <!-- Custom green -->
        <div style="text-align:center;">
          <BSpin
            tip="Green theme"
            style="--b-spin-dot-color:#52c41a;--b-spin-tip-color:#52c41a;"
          />
          <p style="margin-top:0.5rem;font-size:0.75rem;color:#666;">Custom</p>
        </div>
      </div>
    `})},b={name:`Interaction – nested toggle`,parameters:{controls:{disable:!0},docs:{description:{story:`Automated play function: toggles the nested spinner and asserts overlay and blur state.`}}},render:()=>({components:{BSpin:a},setup(){return{loading:t(!0)}},template:`
      <div>
        <button data-testid="toggle" @click="loading = !loading" style="margin-bottom:1rem;padding:0.25rem 0.75rem;border:1px solid #ccc;border-radius:0.375rem;cursor:pointer;">
          Toggle
        </button>
        <BSpin :spinning="loading" tip="Loading...">
          <div data-testid="content" style="padding:2rem;border:1px solid #e8e8e8;border-radius:0.5rem;">
            Card content
          </div>
        </BSpin>
      </div>
    `}),play:async({canvasElement:e})=>{let t=u(e);s(e.querySelector(`.b-spin__overlay-container`)).toBeTruthy(),s(e.querySelector(`.b-spin__content--blurred`)).toBeTruthy(),s(e.querySelector(`.b-spin__content`)?.getAttribute(`aria-busy`)).toBe(`true`);let n=t.getByTestId(`toggle`);await c.click(n),await l(()=>{s(e.querySelector(`.b-spin__overlay-container`)).toBeNull(),s(e.querySelector(`.b-spin__content--blurred`)).toBeNull()}),await c.click(n),await l(()=>{s(e.querySelector(`.b-spin__overlay-container`)).toBeTruthy(),s(e.querySelector(`.b-spin__content--blurred`)).toBeTruthy()})}},x=[{token:`--b-spin-dot-size-default`,defaultValue:`1.25rem`,description:`Default spinner dot size (AntD: dotSize).`},{token:`--b-spin-dot-size-large`,defaultValue:`2rem`,description:`Large spinner dot size (AntD: dotSizeLG).`},{token:`--b-spin-dot-size-small`,defaultValue:`0.875rem`,description:`Small spinner dot size (AntD: dotSizeSM).`},{token:`--b-spin-dot-color`,defaultValue:`oklch(62.3% 0.214 259.815)`,description:`Color of the spinner dots.`},{token:`--b-spin-tip-color`,defaultValue:`oklch(62.3% 0.214 259.815)`,description:`Color of the loading tip text.`},{token:`--b-spin-tip-font-size`,defaultValue:`0.875rem`,description:`Font size of the loading tip text.`},{token:`--b-spin-overlay-bg`,defaultValue:`oklch(100% 0 0 / 50%)`,description:`Background of the overlay shown over wrapped content while loading.`},{token:`--b-spin-fullscreen-bg`,defaultValue:`oklch(0% 0 0 / 45%)`,description:`Background of the fullscreen mask.`},{token:`--b-spin-content-blur`,defaultValue:`0.5px`,description:`Blur applied to wrapped content while loading.`},{token:`--b-spin-animation-duration`,defaultValue:`1.2s`,description:`Duration of the dot rotation animation.`},{token:`--b-spin-transition-duration`,defaultValue:`300ms`,description:`Fade-in/out duration of the spinner overlay.`}],S={name:`Design Tokens`,parameters:{controls:{disable:!0},docs:{description:{story:`Reference table of every <code>--b-spin-*</code> CSS custom property consumers can override to retheme the component.`}}},render:()=>({components:{BSpin:a},setup:()=>({tokens:x}),template:`
      <div style="font-family:sans-serif;padding:1rem;max-width:1100px;margin:0 auto;">
        <h2 style="margin:0 0 8px;">BSpin - Design Tokens</h2>
        <p style="margin:0 0 24px;color:#595959;">
          All tokens scoped to <code>.b-spin</code>. Override inline or via a CSS class.
        </p>
        <table style="width:100%;border-collapse:collapse;font-size:13px;">
          <thead>
            <tr style="background:oklch(96% 0.002 260);">
              <th style="text-align:left;padding:10px 12px;border-bottom:1px solid oklch(85% 0.005 260);">CSS Variable</th>
              <th style="text-align:left;padding:10px 12px;border-bottom:1px solid oklch(85% 0.005 260);">Default</th>
              <th style="text-align:left;padding:10px 12px;border-bottom:1px solid oklch(85% 0.005 260);">Description</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="t in tokens" :key="t.token" style="border-bottom:1px solid oklch(94% 0.003 260);">
              <td style="padding:8px 12px;font-family:monospace;color:oklch(40% 0.18 280);"><code>{{ t.token }}</code></td>
              <td style="padding:8px 12px;font-family:monospace;color:#595959;">{{ t.defaultValue }}</td>
              <td style="padding:8px 12px;">{{ t.description }}</td>
            </tr>
          </tbody>
        </table>

        <h3 style="margin:32px 0 12px;">Override example</h3>
        <p style="margin:0 0 12px;color:#595959;font-size:13px;">
          Three tokens overridden inline (dot color, tip color, animation duration).
        </p>
        <BSpin
          tip="Themed loading…"
          :spinning="true"
          style="
            --b-spin-dot-color: oklch(50% 0.18 290);
            --b-spin-tip-color: oklch(50% 0.18 290);
            --b-spin-animation-duration: 0.8s;
          "
        >
          <div style="padding:2rem;border:1px dashed oklch(85% 0.005 260);border-radius:8px;">
            Wrapped content
          </div>
        </BSpin>
      </div>
    `})},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    spinning: true,
    size: BSpinSize.Default,
    tip: '',
    delay: 0,
    fullscreen: false
  },
  render: args => ({
    components: {
      BSpin
    },
    setup() {
      return {
        args
      };
    },
    template: \`<BSpin v-bind="args" />\`
  })
}`,...f.parameters?.docs?.source},description:{story:`Interactive playground - tweak all props via the Controls panel.`,...f.parameters?.docs?.description}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: true
    },
    docs: {
      source: {
        code: \`
<BSpin size="small" />
<BSpin />
<BSpin size="large" />
        \`
      }
    }
  },
  render: () => ({
    components: {
      BSpin
    },
    template: \`
      <div style="display:flex;align-items:center;gap:2rem;">
        <div style="text-align:center;">
          <BSpin size="small" />
          <p style="margin-top:0.5rem;font-size:0.75rem;color:#666;">Small</p>
        </div>
        <div style="text-align:center;">
          <BSpin />
          <p style="margin-top:0.5rem;font-size:0.75rem;color:#666;">Default</p>
        </div>
        <div style="text-align:center;">
          <BSpin size="large" />
          <p style="margin-top:0.5rem;font-size:0.75rem;color:#666;">Large</p>
        </div>
      </div>
    \`
  })
}`,...p.parameters?.docs?.source},description:{story:`Demonstrates all three size variants.`,...p.parameters?.docs?.description}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: true
    },
    docs: {
      source: {
        code: \`<BSpin tip="Loading data..." />\`
      }
    }
  },
  render: () => ({
    components: {
      BSpin
    },
    template: \`
      <div style="display:flex;align-items:flex-start;gap:2rem;">
        <BSpin size="small" tip="Loading..." />
        <BSpin tip="Loading data..." />
        <BSpin size="large" tip="Please wait..." />
      </div>
    \`
  })
}`,...m.parameters?.docs?.source},description:{story:`Spinner with a descriptive tip below.`,...m.parameters?.docs?.description}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: true
    },
    docs: {
      source: {
        code: \`
<script setup>
const loading = ref(true);
<\/script>

<template>
  <button @click="loading = !loading">Toggle</button>
  <BSpin :spinning="loading" tip="Loading...">
    <div>Your content here</div>
  </BSpin>
</template>
        \`
      }
    }
  },
  render: () => ({
    components: {
      BSpin
    },
    setup() {
      const loading = ref(true);
      return {
        loading
      };
    },
    template: \`
      <div style="display:flex;flex-direction:column;gap:1rem;">
        <div>
          <button
            data-testid="toggle-btn"
            style="padding:0.25rem 0.75rem;border:1px solid #ccc;border-radius:0.375rem;cursor:pointer;"
            @click="loading = !loading"
          >
            {{ loading ? 'Stop' : 'Start' }} loading
          </button>
        </div>
        <BSpin :spinning="loading" tip="Loading...">
          <div style="padding:2rem;border:1px solid #e8e8e8;border-radius:0.5rem;background:#fafafa;">
            <p style="margin:0 0 0.5rem"><strong>Card Title</strong></p>
            <p style="margin:0;color:#666;">Content is blurred and dimmed while loading. Click the button above to toggle.</p>
          </div>
        </BSpin>
      </div>
    \`
  })
}`,...h.parameters?.docs?.source},description:{story:`Wraps child content with a translucent overlay and blur effect.
Toggle the spinner to see the content underneath.`,...h.parameters?.docs?.description}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: true
    },
    docs: {
      source: {
        code: \`<BSpin :spinning="loading" :delay="500" tip="Loading...">content</BSpin>\`
      }
    }
  },
  render: () => ({
    components: {
      BSpin
    },
    setup() {
      const loading = ref(false);
      function toggle() {
        loading.value = !loading.value;
      }
      return {
        loading,
        toggle
      };
    },
    template: \`
      <div style="display:flex;flex-direction:column;gap:1rem;">
        <div>
          <button
            style="padding:0.25rem 0.75rem;border:1px solid #ccc;border-radius:0.375rem;cursor:pointer;"
            @click="toggle"
          >
            {{ loading ? 'Stop' : 'Start' }} loading (500ms delay)
          </button>
        </div>
        <BSpin :spinning="loading" :delay="500" tip="Loading...">
          <div style="padding:2rem;border:1px solid #e8e8e8;border-radius:0.5rem;background:#fafafa;">
            <p style="margin:0;">This spinner has a 500ms delay before appearing.</p>
          </div>
        </BSpin>
      </div>
    \`
  })
}`,...g.parameters?.docs?.source},description:{story:`The spinner only appears after a 500ms delay to avoid flicker for fast operations.`,...g.parameters?.docs?.description}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: true
    },
    docs: {
      source: {
        code: \`
<BSpin tip="Custom spinner...">
  <template #indicator>
    <svg>...</svg>
  </template>
</BSpin>
        \`
      }
    }
  },
  render: () => ({
    components: {
      BSpin
    },
    template: \`
      <div style="display:flex;align-items:flex-start;gap:2rem;">
        <BSpin tip="Custom indicator">
          <template #indicator>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style="animation:custom-spin 1s linear infinite;">
              <path d="M12 2v4m0 12v4m10-10h-4M6 12H2m15.07-5.07-2.83 2.83M9.76 14.24l-2.83 2.83m11.14 0-2.83-2.83M9.76 9.76 6.93 6.93" stroke="oklch(55% 0.169 237.323)" stroke-width="2" stroke-linecap="round"/>
            </svg>
          </template>
        </BSpin>
        <style>
          @keyframes custom-spin { to { transform: rotate(360deg) } }
        </style>
      </div>
    \`
  })
}`,..._.parameters?.docs?.source},description:{story:"Replace the default dot indicator with a custom one using the `indicator` slot.",..._.parameters?.docs?.description}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  name: 'Accessibility (roles & ARIA)',
  parameters: {
    controls: {
      disable: true
    },
    docs: {
      description: {
        story: 'The spinner uses \`role="status"\` to announce loading to screen readers. ' + 'When a tip is provided, \`aria-describedby\` links to it. ' + 'In nested mode, \`aria-busy\` is set on the content container. ' + 'The dot indicator carries \`aria-hidden="true"\` as it is decorative. ' + 'Animations respect \`prefers-reduced-motion\`.'
      }
    }
  },
  render: () => ({
    components: {
      BSpin
    },
    template: \`
      <div style="display:flex;flex-direction:column;gap:2rem;">
        <div>
          <h4 style="margin:0 0 0.5rem;">Standalone (aria-label)</h4>
          <BSpin data-testid="standalone" />
        </div>
        <div>
          <h4 style="margin:0 0 0.5rem;">With tip (aria-describedby)</h4>
          <BSpin data-testid="with-tip" tip="Loading resources..." />
        </div>
        <div>
          <h4 style="margin:0 0 0.5rem;">Nested (aria-busy on content)</h4>
          <BSpin data-testid="nested" :spinning="true" tip="Refreshing...">
            <div style="padding:1rem;border:1px solid #e8e8e8;border-radius:0.5rem;">
              Nested content with aria-busy
            </div>
          </BSpin>
        </div>
      </div>
    \`
  }),
  play: async ({
    canvasElement
  }) => {
    // Verify role="status" on all spinners
    const statusEls = canvasElement.querySelectorAll('[role="status"]');
    expect(statusEls.length).toBeGreaterThanOrEqual(3);

    // Standalone: has aria-label
    const standalone = statusEls[0];
    expect(standalone.getAttribute('aria-label')).toBe('Loading');

    // With tip: has aria-describedby
    const withTip = statusEls[1];
    const tipId = withTip.getAttribute('aria-describedby');
    expect(tipId).toBeTruthy();
    const tipEl = canvasElement.querySelector(\`#\${tipId}\`);
    expect(tipEl?.textContent).toContain('Loading resources...');

    // Nested: content has aria-busy
    const nestedContent = canvasElement.querySelector('.b-spin__content');
    expect(nestedContent?.getAttribute('aria-busy')).toBe('true');

    // Indicators are aria-hidden
    const indicators = canvasElement.querySelectorAll('.b-spin__indicator');
    indicators.forEach(indicator => {
      expect(indicator.getAttribute('aria-hidden')).toBe('true');
    });
  }
}`,...v.parameters?.docs?.source},description:{story:'Demonstrates accessibility features:\n- `role="status"` for the spinner region\n- `aria-label="Loading"` when no tip\n- `aria-describedby` referencing the tip element when tip is present\n- `aria-busy` on nested content\n- Indicator is `aria-hidden="true"` (decorative)\n- Respects `prefers-reduced-motion`',...v.parameters?.docs?.description}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  name: 'Theming (CSS vars)',
  parameters: {
    controls: {
      disable: true
    },
    docs: {
      description: {
        story: 'Override \`--b-spin-*\` CSS custom properties to customise the spinner appearance ' + 'without touching the component source.'
      },
      source: {
        code: \`
<style>
.my-custom-spin {
  --b-spin-dot-color: #e94560;
  --b-spin-tip-color: #e94560;
}
</style>

<BSpin class="my-custom-spin" tip="Custom themed..." />
        \`
      }
    }
  },
  render: () => ({
    components: {
      BSpin
    },
    template: \`
      <div style="display:flex;align-items:flex-start;gap:3rem;">
        <!-- Default -->
        <div style="text-align:center;">
          <BSpin tip="Default theme" />
          <p style="margin-top:0.5rem;font-size:0.75rem;color:#666;">Default</p>
        </div>

        <!-- Custom red -->
        <div style="text-align:center;">
          <BSpin
            tip="Red theme"
            style="--b-spin-dot-color:#e94560;--b-spin-tip-color:#e94560;"
          />
          <p style="margin-top:0.5rem;font-size:0.75rem;color:#666;">Custom</p>
        </div>

        <!-- Custom green -->
        <div style="text-align:center;">
          <BSpin
            tip="Green theme"
            style="--b-spin-dot-color:#52c41a;--b-spin-tip-color:#52c41a;"
          />
          <p style="margin-top:0.5rem;font-size:0.75rem;color:#666;">Custom</p>
        </div>
      </div>
    \`
  })
}`,...y.parameters?.docs?.source},description:{story:"Override the CSS custom properties to customise the appearance.\nEvery token is prefixed `--b-spin-*`.",...y.parameters?.docs?.description}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  name: 'Interaction – nested toggle',
  parameters: {
    controls: {
      disable: true
    },
    docs: {
      description: {
        story: 'Automated play function: toggles the nested spinner and asserts overlay and blur state.'
      }
    }
  },
  render: () => ({
    components: {
      BSpin
    },
    setup() {
      const loading = ref(true);
      return {
        loading
      };
    },
    template: \`
      <div>
        <button data-testid="toggle" @click="loading = !loading" style="margin-bottom:1rem;padding:0.25rem 0.75rem;border:1px solid #ccc;border-radius:0.375rem;cursor:pointer;">
          Toggle
        </button>
        <BSpin :spinning="loading" tip="Loading...">
          <div data-testid="content" style="padding:2rem;border:1px solid #e8e8e8;border-radius:0.5rem;">
            Card content
          </div>
        </BSpin>
      </div>
    \`
  }),
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);

    // Initially spinning: overlay visible, content blurred
    expect(canvasElement.querySelector('.b-spin__overlay-container')).toBeTruthy();
    expect(canvasElement.querySelector('.b-spin__content--blurred')).toBeTruthy();
    expect(canvasElement.querySelector('.b-spin__content')?.getAttribute('aria-busy')).toBe('true');

    // Click toggle to stop
    const toggleBtn = canvas.getByTestId('toggle');
    await userEvent.click(toggleBtn);
    await waitFor(() => {
      expect(canvasElement.querySelector('.b-spin__overlay-container')).toBeNull();
      expect(canvasElement.querySelector('.b-spin__content--blurred')).toBeNull();
    });

    // Click toggle to start again
    await userEvent.click(toggleBtn);
    await waitFor(() => {
      expect(canvasElement.querySelector('.b-spin__overlay-container')).toBeTruthy();
      expect(canvasElement.querySelector('.b-spin__content--blurred')).toBeTruthy();
    });
  }
}`,...b.parameters?.docs?.source},description:{story:`Automated interaction test: toggles the spinner and asserts overlay visibility.`,...b.parameters?.docs?.description}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  name: 'Design Tokens',
  parameters: {
    controls: {
      disable: true
    },
    docs: {
      description: {
        story: 'Reference table of every <code>--b-spin-*</code> CSS custom property ' + 'consumers can override to retheme the component.'
      }
    }
  },
  render: () => ({
    components: {
      BSpin
    },
    setup: () => ({
      tokens: DESIGN_TOKENS
    }),
    template: \`
      <div style="font-family:sans-serif;padding:1rem;max-width:1100px;margin:0 auto;">
        <h2 style="margin:0 0 8px;">BSpin - Design Tokens</h2>
        <p style="margin:0 0 24px;color:#595959;">
          All tokens scoped to <code>.b-spin</code>. Override inline or via a CSS class.
        </p>
        <table style="width:100%;border-collapse:collapse;font-size:13px;">
          <thead>
            <tr style="background:oklch(96% 0.002 260);">
              <th style="text-align:left;padding:10px 12px;border-bottom:1px solid oklch(85% 0.005 260);">CSS Variable</th>
              <th style="text-align:left;padding:10px 12px;border-bottom:1px solid oklch(85% 0.005 260);">Default</th>
              <th style="text-align:left;padding:10px 12px;border-bottom:1px solid oklch(85% 0.005 260);">Description</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="t in tokens" :key="t.token" style="border-bottom:1px solid oklch(94% 0.003 260);">
              <td style="padding:8px 12px;font-family:monospace;color:oklch(40% 0.18 280);"><code>{{ t.token }}</code></td>
              <td style="padding:8px 12px;font-family:monospace;color:#595959;">{{ t.defaultValue }}</td>
              <td style="padding:8px 12px;">{{ t.description }}</td>
            </tr>
          </tbody>
        </table>

        <h3 style="margin:32px 0 12px;">Override example</h3>
        <p style="margin:0 0 12px;color:#595959;font-size:13px;">
          Three tokens overridden inline (dot color, tip color, animation duration).
        </p>
        <BSpin
          tip="Themed loading…"
          :spinning="true"
          style="
            --b-spin-dot-color: oklch(50% 0.18 290);
            --b-spin-tip-color: oklch(50% 0.18 290);
            --b-spin-animation-duration: 0.8s;
          "
        >
          <div style="padding:2rem;border:1px dashed oklch(85% 0.005 260);border-radius:8px;">
            Wrapped content
          </div>
        </BSpin>
      </div>
    \`
  })
}`,...S.parameters?.docs?.source}}},C=[`Playground`,`AllSizes`,`WithTip`,`Nested`,`Delay`,`CustomIndicator`,`Accessibility`,`Theming`,`InteractionToggle`,`DesignTokens`]}))();export{v as Accessibility,p as AllSizes,_ as CustomIndicator,g as Delay,S as DesignTokens,b as InteractionToggle,h as Nested,f as Playground,y as Theming,m as WithTip,C as __namedExportsOrder,d as default};