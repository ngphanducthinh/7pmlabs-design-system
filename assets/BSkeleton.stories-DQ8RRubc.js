import{n as e}from"./chunk-BneVvdWh.js";import{X as t,i as n}from"./iframe-CuxZAc4v.js";import{A as r,F as i,M as a,N as o,P as s,j as c,t as l}from"./components-De-VN3a5.js";var u,d,f,p,m,h,g,_,v,y,b,x,S,C,w;e((()=>{l(),n(),{expect:u,userEvent:d,waitFor:f,within:p}=__STORYBOOK_MODULE_TEST__,m={title:`Feedback/Skeleton`,component:s,tags:[`autodocs`],argTypes:{active:{control:`boolean`,description:`Show animated shimmer effect.`,table:{defaultValue:{summary:`false`}}},avatar:{control:`boolean`,description:`Show avatar placeholder. Pass an object to configure shape/size/active.`,table:{defaultValue:{summary:`false`}}},title:{control:`boolean`,description:`Show title placeholder. Pass an object to configure width.`,table:{defaultValue:{summary:`true`}}},paragraph:{control:`boolean`,description:`Show paragraph placeholder. Pass an object to configure rows / width.`,table:{defaultValue:{summary:`true`}}},round:{control:`boolean`,description:`Round corners on title and paragraph rows.`,table:{defaultValue:{summary:`false`}}},loading:{control:`boolean`,description:`When false, renders the default slot (real content) instead of placeholders.`,table:{category:`Two-Way Binding Props`,defaultValue:{summary:`true`}}}},parameters:{docs:{description:{component:`The <code>BSkeleton</code> component shows a placeholder while content is loading.<br><br>It supports an optional <strong>avatar</strong>, <strong>title</strong>, and <strong>paragraph</strong> (each individually configurable), an <strong>active</strong> shimmer effect, and <strong>round</strong> corners.<br>Sub-components are exported for placeholder primitives: <code>BSkeletonAvatar</code>, <code>BSkeletonButton</code>, <code>BSkeletonInput</code>, <code>BSkeletonImage</code>, and <code>BSkeletonNode</code>.<br>The component exposes <code>role="status"</code> and respects <code>prefers-reduced-motion</code>.`}}}},h={args:{active:!1,avatar:!1,title:!0,paragraph:!0,round:!1,loading:!0},render:e=>({components:{BSkeleton:s},setup(){return{args:e}},template:`
      <BSkeleton v-bind="args">
        <p>Real content shown when loading is false.</p>
      </BSkeleton>
    `})},g={parameters:{controls:{disable:!0}},render:()=>({components:{BSkeleton:s},template:`
      <div style="display:flex;flex-direction:column;gap:2rem;">
        <div>
          <h4 style="margin:0 0 0.5rem;">Static (no animation)</h4>
          <BSkeleton />
        </div>
        <div>
          <h4 style="margin:0 0 0.5rem;">Active (shimmer)</h4>
          <BSkeleton active />
        </div>
      </div>
    `})},_={parameters:{controls:{disable:!0}},render:()=>({components:{BSkeleton:s},template:`
      <div style="display:flex;flex-direction:column;gap:2rem;">
        <BSkeleton active avatar />
        <BSkeleton active :avatar="{ shape: 'square', size: 'large' }" />
      </div>
    `})},v={name:`Configurable title / paragraph`,parameters:{controls:{disable:!0}},render:()=>({components:{BSkeleton:s},template:`
      <div style="display:flex;flex-direction:column;gap:2rem;">
        <BSkeleton active :title="{ width: '40%' }" :paragraph="{ rows: 5 }" />
        <BSkeleton active :paragraph="{ rows: 3, width: [200, 300, '50%'] }" />
        <BSkeleton round active />
      </div>
    `})},y={name:`Loading toggle`,parameters:{controls:{disable:!0}},render:()=>({components:{BSkeleton:s},setup(){return{loading:t(!0)}},template:`
      <div style="display:flex;flex-direction:column;gap:1rem;">
        <button
          data-testid="toggle-loading"
          style="align-self:flex-start;padding:0.25rem 0.75rem;border:1px solid #ccc;border-radius:0.375rem;cursor:pointer;"
          @click="loading = !loading"
        >
          {{ loading ? 'Stop' : 'Start' }} loading
        </button>
        <BSkeleton :loading="loading" active avatar>
          <article data-testid="real-content" style="display:flex;gap:1rem;">
            <div style="width:32px;height:32px;border-radius:50%;background:#1677ff;flex-shrink:0;"/>
            <div>
              <h4 style="margin:0;">Real article title</h4>
              <p style="margin:0.25rem 0 0;color:#666;">Body content rendered when loading is false.</p>
            </div>
          </article>
        </BSkeleton>
      </div>
    `}),play:async({canvasElement:e})=>{let t=p(e);u(e.querySelector(`.b-skeleton`)).toBeTruthy(),u(t.queryByTestId(`real-content`)).toBeNull(),await d.click(t.getByTestId(`toggle-loading`)),await f(()=>{u(e.querySelector(`.b-skeleton`)).toBeNull(),u(t.getByTestId(`real-content`)).toBeTruthy()}),await d.click(t.getByTestId(`toggle-loading`)),await f(()=>{u(e.querySelector(`.b-skeleton`)).toBeTruthy()})}},b={name:`Skeleton primitives`,parameters:{controls:{disable:!0}},render:()=>({components:{BSkeletonAvatar:i,BSkeletonButton:o,BSkeletonImage:a,BSkeletonInput:c,BSkeletonNode:r},template:`
      <div style="display:flex;flex-direction:column;gap:1.5rem;">
        <div style="display:flex;align-items:center;gap:1rem;">
          <BSkeletonAvatar active />
          <BSkeletonAvatar active shape="square" size="large" />
          <BSkeletonAvatar active :size="64" />
        </div>
        <div style="display:flex;align-items:center;gap:1rem;flex-wrap:wrap;">
          <BSkeletonButton active size="small" />
          <BSkeletonButton active />
          <BSkeletonButton active size="large" />
          <BSkeletonButton active shape="round" />
          <BSkeletonButton active shape="circle" />
        </div>
        <div style="display:flex;align-items:center;gap:1rem;flex-wrap:wrap;">
          <BSkeletonInput active size="small" />
          <BSkeletonInput active />
          <BSkeletonInput active size="large" />
        </div>
        <div style="display:flex;align-items:center;gap:1rem;">
          <BSkeletonImage active />
          <BSkeletonNode active>📦</BSkeletonNode>
        </div>
      </div>
    `})},x={name:`Accessibility (roles & ARIA)`,parameters:{controls:{disable:!0},docs:{description:{story:'The skeleton root has `role="status"` with `aria-live="polite"` and `aria-label="Loading"`. Decorative shapes (title, paragraph rows, avatar, button, input, image, node) are `aria-hidden`. When `loading` flips to false, the skeleton is replaced with real content (announced naturally by the live region change).'}}},render:()=>({components:{BSkeleton:s},template:`
      <BSkeleton data-testid="sk" active avatar :paragraph="{ rows: 3 }" />
    `}),play:async({canvasElement:e})=>{let t=e.querySelector(`.b-skeleton`);u(t.getAttribute(`role`)).toBe(`status`),u(t.getAttribute(`aria-live`)).toBe(`polite`),u(t.getAttribute(`aria-label`)).toBe(`Loading`),u(e.querySelector(`.b-skeleton__title`)?.getAttribute(`aria-hidden`)).toBe(`true`),u(e.querySelector(`.b-skeleton__paragraph`)?.getAttribute(`aria-hidden`)).toBe(`true`),u(e.querySelector(`.b-skeleton-avatar`)?.getAttribute(`aria-hidden`)).toBe(`true`)}},S={name:`Theming (CSS vars)`,parameters:{controls:{disable:!0},docs:{description:{story:"Override `--b-skeleton-*` CSS custom properties scoped to the component root to recolor / resize the skeleton without touching its source."}}},render:()=>({components:{BSkeleton:s},template:`
      <div style="display:flex;flex-direction:column;gap:2rem;">
        <div>
          <h4 style="margin:0 0 0.5rem;">Default tokens</h4>
          <BSkeleton active avatar />
        </div>
        <div>
          <h4 style="margin:0 0 0.5rem;">Custom: blue gradient + larger title</h4>
          <BSkeleton
            active
            avatar
            style="--b-skeleton-gradient-from-color:#dbeafe;--b-skeleton-gradient-to-color:#93c5fd;--b-skeleton-title-height:24px;"
          />
        </div>
        <div>
          <h4 style="margin:0 0 0.5rem;">Custom: rose gradient + tighter rows</h4>
          <BSkeleton
            active
            avatar
            style="--b-skeleton-gradient-from-color:#ffe4e6;--b-skeleton-gradient-to-color:#fda4af;--b-skeleton-paragraph-row-gap:8px;--b-skeleton-paragraph-margin-top:16px;"
          />
        </div>
      </div>
    `})},C={name:`Design Tokens`,parameters:{controls:{disable:!0},docs:{description:{story:"Visual reference for every CSS custom property exposed by `BSkeleton`. All tokens are scoped to `.b-skeleton` (or `.b-skeleton-element` for sub-components) and can be overridden by consumers."}}},render:()=>({template:`
      <table style="width:100%;border-collapse:collapse;font-family:ui-monospace,monospace;font-size:0.85rem;">
        <thead>
          <tr style="background:#fafafa;border-bottom:1px solid #e5e7eb;text-align:left;">
            <th style="padding:0.5rem 0.75rem;">CSS Variable</th>
            <th style="padding:0.5rem 0.75rem;">Default</th>
            <th style="padding:0.5rem 0.75rem;">Description</th>
          </tr>
        </thead>
        <tbody>
          <tr><td style="padding:0.5rem 0.75rem;border-bottom:1px solid #f0f0f0;">--b-skeleton-gradient-from-color</td><td style="padding:0.5rem 0.75rem;border-bottom:1px solid #f0f0f0;">oklch(93% 0 0)</td><td style="padding:0.5rem 0.75rem;border-bottom:1px solid #f0f0f0;">Base placeholder color (AntD <code>gradientFromColor</code>).</td></tr>
          <tr><td style="padding:0.5rem 0.75rem;border-bottom:1px solid #f0f0f0;">--b-skeleton-gradient-to-color</td><td style="padding:0.5rem 0.75rem;border-bottom:1px solid #f0f0f0;">oklch(85% 0 0)</td><td style="padding:0.5rem 0.75rem;border-bottom:1px solid #f0f0f0;">Shimmer highlight color (AntD <code>gradientToColor</code>).</td></tr>
          <tr><td style="padding:0.5rem 0.75rem;border-bottom:1px solid #f0f0f0;">--b-skeleton-title-height</td><td style="padding:0.5rem 0.75rem;border-bottom:1px solid #f0f0f0;">16px</td><td style="padding:0.5rem 0.75rem;border-bottom:1px solid #f0f0f0;">Height of the title bar (AntD <code>titleHeight</code>).</td></tr>
          <tr><td style="padding:0.5rem 0.75rem;border-bottom:1px solid #f0f0f0;">--b-skeleton-paragraph-li-height</td><td style="padding:0.5rem 0.75rem;border-bottom:1px solid #f0f0f0;">16px</td><td style="padding:0.5rem 0.75rem;border-bottom:1px solid #f0f0f0;">Height of each paragraph row (AntD <code>paragraphLiHeight</code>).</td></tr>
          <tr><td style="padding:0.5rem 0.75rem;border-bottom:1px solid #f0f0f0;">--b-skeleton-paragraph-margin-top</td><td style="padding:0.5rem 0.75rem;border-bottom:1px solid #f0f0f0;">28px</td><td style="padding:0.5rem 0.75rem;border-bottom:1px solid #f0f0f0;">Spacing between title and paragraph (AntD <code>paragraphMarginTop</code>).</td></tr>
          <tr><td style="padding:0.5rem 0.75rem;border-bottom:1px solid #f0f0f0;">--b-skeleton-paragraph-row-gap</td><td style="padding:0.5rem 0.75rem;border-bottom:1px solid #f0f0f0;">16px</td><td style="padding:0.5rem 0.75rem;border-bottom:1px solid #f0f0f0;">Vertical gap between paragraph rows.</td></tr>
          <tr><td style="padding:0.5rem 0.75rem;border-bottom:1px solid #f0f0f0;">--b-skeleton-block-radius</td><td style="padding:0.5rem 0.75rem;border-bottom:1px solid #f0f0f0;">4px</td><td style="padding:0.5rem 0.75rem;border-bottom:1px solid #f0f0f0;">Corner radius for title/paragraph blocks (AntD <code>blockRadius</code>).</td></tr>
          <tr><td style="padding:0.5rem 0.75rem;border-bottom:1px solid #f0f0f0;">--b-skeleton-border-radius</td><td style="padding:0.5rem 0.75rem;border-bottom:1px solid #f0f0f0;">6px</td><td style="padding:0.5rem 0.75rem;border-bottom:1px solid #f0f0f0;">Default radius for buttons / inputs / images (AntD <code>borderRadius</code>).</td></tr>
          <tr><td style="padding:0.5rem 0.75rem;border-bottom:1px solid #f0f0f0;">--b-skeleton-border-radius-sm</td><td style="padding:0.5rem 0.75rem;border-bottom:1px solid #f0f0f0;">4px</td><td style="padding:0.5rem 0.75rem;border-bottom:1px solid #f0f0f0;">Smaller radius for small/square variants (AntD <code>borderRadiusSM</code>).</td></tr>
          <tr><td style="padding:0.5rem 0.75rem;border-bottom:1px solid #f0f0f0;">--b-skeleton-control-height</td><td style="padding:0.5rem 0.75rem;border-bottom:1px solid #f0f0f0;">32px</td><td style="padding:0.5rem 0.75rem;border-bottom:1px solid #f0f0f0;">Default control height for Button / Input (AntD <code>controlHeight</code>).</td></tr>
          <tr><td style="padding:0.5rem 0.75rem;border-bottom:1px solid #f0f0f0;">--b-skeleton-control-height-lg</td><td style="padding:0.5rem 0.75rem;border-bottom:1px solid #f0f0f0;">40px</td><td style="padding:0.5rem 0.75rem;border-bottom:1px solid #f0f0f0;">Large control height (AntD <code>controlHeightLG</code>).</td></tr>
          <tr><td style="padding:0.5rem 0.75rem;border-bottom:1px solid #f0f0f0;">--b-skeleton-control-height-sm</td><td style="padding:0.5rem 0.75rem;border-bottom:1px solid #f0f0f0;">24px</td><td style="padding:0.5rem 0.75rem;border-bottom:1px solid #f0f0f0;">Small control height (AntD <code>controlHeightSM</code>).</td></tr>
          <tr><td style="padding:0.5rem 0.75rem;border-bottom:1px solid #f0f0f0;">--b-skeleton-avatar-size-default</td><td style="padding:0.5rem 0.75rem;border-bottom:1px solid #f0f0f0;">32px</td><td style="padding:0.5rem 0.75rem;border-bottom:1px solid #f0f0f0;">Avatar size (default preset).</td></tr>
          <tr><td style="padding:0.5rem 0.75rem;border-bottom:1px solid #f0f0f0;">--b-skeleton-avatar-size-small</td><td style="padding:0.5rem 0.75rem;border-bottom:1px solid #f0f0f0;">24px</td><td style="padding:0.5rem 0.75rem;border-bottom:1px solid #f0f0f0;">Avatar size (small preset).</td></tr>
          <tr><td style="padding:0.5rem 0.75rem;border-bottom:1px solid #f0f0f0;">--b-skeleton-avatar-size-large</td><td style="padding:0.5rem 0.75rem;border-bottom:1px solid #f0f0f0;">40px</td><td style="padding:0.5rem 0.75rem;border-bottom:1px solid #f0f0f0;">Avatar size (large preset).</td></tr>
          <tr><td style="padding:0.5rem 0.75rem;border-bottom:1px solid #f0f0f0;">--b-skeleton-image-size</td><td style="padding:0.5rem 0.75rem;border-bottom:1px solid #f0f0f0;">96px</td><td style="padding:0.5rem 0.75rem;border-bottom:1px solid #f0f0f0;">Image / Node placeholder dimensions.</td></tr>
          <tr><td style="padding:0.5rem 0.75rem;border-bottom:1px solid #f0f0f0;">--b-skeleton-button-min-width</td><td style="padding:0.5rem 0.75rem;border-bottom:1px solid #f0f0f0;">64px</td><td style="padding:0.5rem 0.75rem;border-bottom:1px solid #f0f0f0;">Minimum button placeholder width.</td></tr>
          <tr><td style="padding:0.5rem 0.75rem;border-bottom:1px solid #f0f0f0;">--b-skeleton-input-min-width</td><td style="padding:0.5rem 0.75rem;border-bottom:1px solid #f0f0f0;">160px</td><td style="padding:0.5rem 0.75rem;border-bottom:1px solid #f0f0f0;">Minimum input placeholder width.</td></tr>
          <tr><td style="padding:0.5rem 0.75rem;border-bottom:1px solid #f0f0f0;">--b-skeleton-animation-duration</td><td style="padding:0.5rem 0.75rem;border-bottom:1px solid #f0f0f0;">1.4s</td><td style="padding:0.5rem 0.75rem;border-bottom:1px solid #f0f0f0;">Shimmer animation duration.</td></tr>
          <tr><td style="padding:0.5rem 0.75rem;">--b-skeleton-content-gap</td><td style="padding:0.5rem 0.75rem;">16px</td><td style="padding:0.5rem 0.75rem;">Gap between avatar column and content column.</td></tr>
        </tbody>
      </table>
    `})},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    active: false,
    avatar: false,
    title: true,
    paragraph: true,
    round: false,
    loading: true
  },
  render: args => ({
    components: {
      BSkeleton
    },
    setup() {
      return {
        args
      };
    },
    template: \`
      <BSkeleton v-bind="args">
        <p>Real content shown when loading is false.</p>
      </BSkeleton>
    \`
  })
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => ({
    components: {
      BSkeleton
    },
    template: \`
      <div style="display:flex;flex-direction:column;gap:2rem;">
        <div>
          <h4 style="margin:0 0 0.5rem;">Static (no animation)</h4>
          <BSkeleton />
        </div>
        <div>
          <h4 style="margin:0 0 0.5rem;">Active (shimmer)</h4>
          <BSkeleton active />
        </div>
      </div>
    \`
  })
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => ({
    components: {
      BSkeleton
    },
    template: \`
      <div style="display:flex;flex-direction:column;gap:2rem;">
        <BSkeleton active avatar />
        <BSkeleton active :avatar="{ shape: 'square', size: 'large' }" />
      </div>
    \`
  })
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  name: 'Configurable title / paragraph',
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => ({
    components: {
      BSkeleton
    },
    template: \`
      <div style="display:flex;flex-direction:column;gap:2rem;">
        <BSkeleton active :title="{ width: '40%' }" :paragraph="{ rows: 5 }" />
        <BSkeleton active :paragraph="{ rows: 3, width: [200, 300, '50%'] }" />
        <BSkeleton round active />
      </div>
    \`
  })
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  name: 'Loading toggle',
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => ({
    components: {
      BSkeleton
    },
    setup() {
      const loading = ref(true);
      return {
        loading
      };
    },
    template: \`
      <div style="display:flex;flex-direction:column;gap:1rem;">
        <button
          data-testid="toggle-loading"
          style="align-self:flex-start;padding:0.25rem 0.75rem;border:1px solid #ccc;border-radius:0.375rem;cursor:pointer;"
          @click="loading = !loading"
        >
          {{ loading ? 'Stop' : 'Start' }} loading
        </button>
        <BSkeleton :loading="loading" active avatar>
          <article data-testid="real-content" style="display:flex;gap:1rem;">
            <div style="width:32px;height:32px;border-radius:50%;background:#1677ff;flex-shrink:0;"/>
            <div>
              <h4 style="margin:0;">Real article title</h4>
              <p style="margin:0.25rem 0 0;color:#666;">Body content rendered when loading is false.</p>
            </div>
          </article>
        </BSkeleton>
      </div>
    \`
  }),
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);

    // Initially loading: skeleton visible, real content hidden
    expect(canvasElement.querySelector('.b-skeleton')).toBeTruthy();
    expect(canvas.queryByTestId('real-content')).toBeNull();

    // Toggle off
    await userEvent.click(canvas.getByTestId('toggle-loading'));
    await waitFor(() => {
      expect(canvasElement.querySelector('.b-skeleton')).toBeNull();
      expect(canvas.getByTestId('real-content')).toBeTruthy();
    });

    // Toggle back on
    await userEvent.click(canvas.getByTestId('toggle-loading'));
    await waitFor(() => {
      expect(canvasElement.querySelector('.b-skeleton')).toBeTruthy();
    });
  }
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  name: 'Skeleton primitives',
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => ({
    components: {
      BSkeletonAvatar,
      BSkeletonButton,
      BSkeletonImage,
      BSkeletonInput,
      BSkeletonNode
    },
    template: \`
      <div style="display:flex;flex-direction:column;gap:1.5rem;">
        <div style="display:flex;align-items:center;gap:1rem;">
          <BSkeletonAvatar active />
          <BSkeletonAvatar active shape="square" size="large" />
          <BSkeletonAvatar active :size="64" />
        </div>
        <div style="display:flex;align-items:center;gap:1rem;flex-wrap:wrap;">
          <BSkeletonButton active size="small" />
          <BSkeletonButton active />
          <BSkeletonButton active size="large" />
          <BSkeletonButton active shape="round" />
          <BSkeletonButton active shape="circle" />
        </div>
        <div style="display:flex;align-items:center;gap:1rem;flex-wrap:wrap;">
          <BSkeletonInput active size="small" />
          <BSkeletonInput active />
          <BSkeletonInput active size="large" />
        </div>
        <div style="display:flex;align-items:center;gap:1rem;">
          <BSkeletonImage active />
          <BSkeletonNode active>📦</BSkeletonNode>
        </div>
      </div>
    \`
  })
}`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  name: 'Accessibility (roles & ARIA)',
  parameters: {
    controls: {
      disable: true
    },
    docs: {
      description: {
        story: 'The skeleton root has \`role="status"\` with \`aria-live="polite"\` and \`aria-label="Loading"\`. ' + 'Decorative shapes (title, paragraph rows, avatar, button, input, image, node) are \`aria-hidden\`. ' + 'When \`loading\` flips to false, the skeleton is replaced with real content (announced naturally by the live region change).'
      }
    }
  },
  render: () => ({
    components: {
      BSkeleton
    },
    template: \`
      <BSkeleton data-testid="sk" active avatar :paragraph="{ rows: 3 }" />
    \`
  }),
  play: async ({
    canvasElement
  }) => {
    const root = canvasElement.querySelector('.b-skeleton')!;
    expect(root.getAttribute('role')).toBe('status');
    expect(root.getAttribute('aria-live')).toBe('polite');
    expect(root.getAttribute('aria-label')).toBe('Loading');

    // Decorative bits should be aria-hidden
    expect(canvasElement.querySelector('.b-skeleton__title')?.getAttribute('aria-hidden')).toBe('true');
    expect(canvasElement.querySelector('.b-skeleton__paragraph')?.getAttribute('aria-hidden')).toBe('true');
    expect(canvasElement.querySelector('.b-skeleton-avatar')?.getAttribute('aria-hidden')).toBe('true');
  }
}`,...x.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  name: 'Theming (CSS vars)',
  parameters: {
    controls: {
      disable: true
    },
    docs: {
      description: {
        story: 'Override \`--b-skeleton-*\` CSS custom properties scoped to the component root to recolor / resize ' + 'the skeleton without touching its source.'
      }
    }
  },
  render: () => ({
    components: {
      BSkeleton
    },
    template: \`
      <div style="display:flex;flex-direction:column;gap:2rem;">
        <div>
          <h4 style="margin:0 0 0.5rem;">Default tokens</h4>
          <BSkeleton active avatar />
        </div>
        <div>
          <h4 style="margin:0 0 0.5rem;">Custom: blue gradient + larger title</h4>
          <BSkeleton
            active
            avatar
            style="--b-skeleton-gradient-from-color:#dbeafe;--b-skeleton-gradient-to-color:#93c5fd;--b-skeleton-title-height:24px;"
          />
        </div>
        <div>
          <h4 style="margin:0 0 0.5rem;">Custom: rose gradient + tighter rows</h4>
          <BSkeleton
            active
            avatar
            style="--b-skeleton-gradient-from-color:#ffe4e6;--b-skeleton-gradient-to-color:#fda4af;--b-skeleton-paragraph-row-gap:8px;--b-skeleton-paragraph-margin-top:16px;"
          />
        </div>
      </div>
    \`
  })
}`,...S.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  name: 'Design Tokens',
  parameters: {
    controls: {
      disable: true
    },
    docs: {
      description: {
        story: 'Visual reference for every CSS custom property exposed by \`BSkeleton\`. ' + 'All tokens are scoped to \`.b-skeleton\` (or \`.b-skeleton-element\` for sub-components) and can be overridden by consumers.'
      }
    }
  },
  render: () => ({
    template: \`
      <table style="width:100%;border-collapse:collapse;font-family:ui-monospace,monospace;font-size:0.85rem;">
        <thead>
          <tr style="background:#fafafa;border-bottom:1px solid #e5e7eb;text-align:left;">
            <th style="padding:0.5rem 0.75rem;">CSS Variable</th>
            <th style="padding:0.5rem 0.75rem;">Default</th>
            <th style="padding:0.5rem 0.75rem;">Description</th>
          </tr>
        </thead>
        <tbody>
          <tr><td style="padding:0.5rem 0.75rem;border-bottom:1px solid #f0f0f0;">--b-skeleton-gradient-from-color</td><td style="padding:0.5rem 0.75rem;border-bottom:1px solid #f0f0f0;">oklch(93% 0 0)</td><td style="padding:0.5rem 0.75rem;border-bottom:1px solid #f0f0f0;">Base placeholder color (AntD <code>gradientFromColor</code>).</td></tr>
          <tr><td style="padding:0.5rem 0.75rem;border-bottom:1px solid #f0f0f0;">--b-skeleton-gradient-to-color</td><td style="padding:0.5rem 0.75rem;border-bottom:1px solid #f0f0f0;">oklch(85% 0 0)</td><td style="padding:0.5rem 0.75rem;border-bottom:1px solid #f0f0f0;">Shimmer highlight color (AntD <code>gradientToColor</code>).</td></tr>
          <tr><td style="padding:0.5rem 0.75rem;border-bottom:1px solid #f0f0f0;">--b-skeleton-title-height</td><td style="padding:0.5rem 0.75rem;border-bottom:1px solid #f0f0f0;">16px</td><td style="padding:0.5rem 0.75rem;border-bottom:1px solid #f0f0f0;">Height of the title bar (AntD <code>titleHeight</code>).</td></tr>
          <tr><td style="padding:0.5rem 0.75rem;border-bottom:1px solid #f0f0f0;">--b-skeleton-paragraph-li-height</td><td style="padding:0.5rem 0.75rem;border-bottom:1px solid #f0f0f0;">16px</td><td style="padding:0.5rem 0.75rem;border-bottom:1px solid #f0f0f0;">Height of each paragraph row (AntD <code>paragraphLiHeight</code>).</td></tr>
          <tr><td style="padding:0.5rem 0.75rem;border-bottom:1px solid #f0f0f0;">--b-skeleton-paragraph-margin-top</td><td style="padding:0.5rem 0.75rem;border-bottom:1px solid #f0f0f0;">28px</td><td style="padding:0.5rem 0.75rem;border-bottom:1px solid #f0f0f0;">Spacing between title and paragraph (AntD <code>paragraphMarginTop</code>).</td></tr>
          <tr><td style="padding:0.5rem 0.75rem;border-bottom:1px solid #f0f0f0;">--b-skeleton-paragraph-row-gap</td><td style="padding:0.5rem 0.75rem;border-bottom:1px solid #f0f0f0;">16px</td><td style="padding:0.5rem 0.75rem;border-bottom:1px solid #f0f0f0;">Vertical gap between paragraph rows.</td></tr>
          <tr><td style="padding:0.5rem 0.75rem;border-bottom:1px solid #f0f0f0;">--b-skeleton-block-radius</td><td style="padding:0.5rem 0.75rem;border-bottom:1px solid #f0f0f0;">4px</td><td style="padding:0.5rem 0.75rem;border-bottom:1px solid #f0f0f0;">Corner radius for title/paragraph blocks (AntD <code>blockRadius</code>).</td></tr>
          <tr><td style="padding:0.5rem 0.75rem;border-bottom:1px solid #f0f0f0;">--b-skeleton-border-radius</td><td style="padding:0.5rem 0.75rem;border-bottom:1px solid #f0f0f0;">6px</td><td style="padding:0.5rem 0.75rem;border-bottom:1px solid #f0f0f0;">Default radius for buttons / inputs / images (AntD <code>borderRadius</code>).</td></tr>
          <tr><td style="padding:0.5rem 0.75rem;border-bottom:1px solid #f0f0f0;">--b-skeleton-border-radius-sm</td><td style="padding:0.5rem 0.75rem;border-bottom:1px solid #f0f0f0;">4px</td><td style="padding:0.5rem 0.75rem;border-bottom:1px solid #f0f0f0;">Smaller radius for small/square variants (AntD <code>borderRadiusSM</code>).</td></tr>
          <tr><td style="padding:0.5rem 0.75rem;border-bottom:1px solid #f0f0f0;">--b-skeleton-control-height</td><td style="padding:0.5rem 0.75rem;border-bottom:1px solid #f0f0f0;">32px</td><td style="padding:0.5rem 0.75rem;border-bottom:1px solid #f0f0f0;">Default control height for Button / Input (AntD <code>controlHeight</code>).</td></tr>
          <tr><td style="padding:0.5rem 0.75rem;border-bottom:1px solid #f0f0f0;">--b-skeleton-control-height-lg</td><td style="padding:0.5rem 0.75rem;border-bottom:1px solid #f0f0f0;">40px</td><td style="padding:0.5rem 0.75rem;border-bottom:1px solid #f0f0f0;">Large control height (AntD <code>controlHeightLG</code>).</td></tr>
          <tr><td style="padding:0.5rem 0.75rem;border-bottom:1px solid #f0f0f0;">--b-skeleton-control-height-sm</td><td style="padding:0.5rem 0.75rem;border-bottom:1px solid #f0f0f0;">24px</td><td style="padding:0.5rem 0.75rem;border-bottom:1px solid #f0f0f0;">Small control height (AntD <code>controlHeightSM</code>).</td></tr>
          <tr><td style="padding:0.5rem 0.75rem;border-bottom:1px solid #f0f0f0;">--b-skeleton-avatar-size-default</td><td style="padding:0.5rem 0.75rem;border-bottom:1px solid #f0f0f0;">32px</td><td style="padding:0.5rem 0.75rem;border-bottom:1px solid #f0f0f0;">Avatar size (default preset).</td></tr>
          <tr><td style="padding:0.5rem 0.75rem;border-bottom:1px solid #f0f0f0;">--b-skeleton-avatar-size-small</td><td style="padding:0.5rem 0.75rem;border-bottom:1px solid #f0f0f0;">24px</td><td style="padding:0.5rem 0.75rem;border-bottom:1px solid #f0f0f0;">Avatar size (small preset).</td></tr>
          <tr><td style="padding:0.5rem 0.75rem;border-bottom:1px solid #f0f0f0;">--b-skeleton-avatar-size-large</td><td style="padding:0.5rem 0.75rem;border-bottom:1px solid #f0f0f0;">40px</td><td style="padding:0.5rem 0.75rem;border-bottom:1px solid #f0f0f0;">Avatar size (large preset).</td></tr>
          <tr><td style="padding:0.5rem 0.75rem;border-bottom:1px solid #f0f0f0;">--b-skeleton-image-size</td><td style="padding:0.5rem 0.75rem;border-bottom:1px solid #f0f0f0;">96px</td><td style="padding:0.5rem 0.75rem;border-bottom:1px solid #f0f0f0;">Image / Node placeholder dimensions.</td></tr>
          <tr><td style="padding:0.5rem 0.75rem;border-bottom:1px solid #f0f0f0;">--b-skeleton-button-min-width</td><td style="padding:0.5rem 0.75rem;border-bottom:1px solid #f0f0f0;">64px</td><td style="padding:0.5rem 0.75rem;border-bottom:1px solid #f0f0f0;">Minimum button placeholder width.</td></tr>
          <tr><td style="padding:0.5rem 0.75rem;border-bottom:1px solid #f0f0f0;">--b-skeleton-input-min-width</td><td style="padding:0.5rem 0.75rem;border-bottom:1px solid #f0f0f0;">160px</td><td style="padding:0.5rem 0.75rem;border-bottom:1px solid #f0f0f0;">Minimum input placeholder width.</td></tr>
          <tr><td style="padding:0.5rem 0.75rem;border-bottom:1px solid #f0f0f0;">--b-skeleton-animation-duration</td><td style="padding:0.5rem 0.75rem;border-bottom:1px solid #f0f0f0;">1.4s</td><td style="padding:0.5rem 0.75rem;border-bottom:1px solid #f0f0f0;">Shimmer animation duration.</td></tr>
          <tr><td style="padding:0.5rem 0.75rem;">--b-skeleton-content-gap</td><td style="padding:0.5rem 0.75rem;">16px</td><td style="padding:0.5rem 0.75rem;">Gap between avatar column and content column.</td></tr>
        </tbody>
      </table>
    \`
  })
}`,...C.parameters?.docs?.source}}},w=[`Playground`,`ActiveVsStatic`,`WithAvatar`,`Configurable`,`LoadingToggle`,`SubComponents`,`Accessibility`,`Theming`,`DesignTokens`]}))();export{x as Accessibility,g as ActiveVsStatic,v as Configurable,C as DesignTokens,y as LoadingToggle,h as Playground,b as SubComponents,S as Theming,_ as WithAvatar,w as __namedExportsOrder,m as default};