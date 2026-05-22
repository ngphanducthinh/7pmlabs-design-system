import{n as e}from"./chunk-BneVvdWh.js";import{A as t,a as n,i as r}from"./types-CV_3xB-y.js";import{Tt as i,t as a}from"./components-CTy29wV5.js";var o,s,c,l,u,d,f,p,m,h,g,_,v,y,b,x,S;e((()=>{a(),t(),{expect:o,within:s}=__STORYBOOK_MODULE_TEST__,c=[`pink`,`red`,`yellow`,`orange`,`cyan`,`green`,`blue`,`purple`,`geekblue`,`magenta`,`volcano`,`gold`,`lime`],l={title:`Data Display/Badge`,component:i,tags:[`autodocs`],argTypes:{count:{control:`number`,description:`Number to show in badge.`,table:{category:`Props`}},dot:{control:`boolean`,description:`Whether to display a red dot instead of count.`,table:{defaultValue:{summary:`false`},category:`Props`}},overflowCount:{control:`number`,description:`Max count to show.`,table:{defaultValue:{summary:`99`},category:`Props`}},showZero:{control:`boolean`,description:`Whether to show badge when count is zero.`,table:{defaultValue:{summary:`false`},category:`Props`}},size:{control:`select`,options:Object.values(r),description:`Size preset for the count badge.`,table:{defaultValue:{summary:r.Default},category:`Props`}},status:{control:`select`,options:Object.values(n),description:`Set Badge as a status dot.`,table:{category:`Props`}},color:{control:`text`,description:`Custom badge color. Preset names or any CSS color.`,table:{category:`Props`}},text:{control:`text`,description:`Text next to a status dot.`,table:{category:`Props`}},title:{control:`text`,description:`Custom hover title.`,table:{category:`Props`}},offset:{control:`object`,description:`Offset [right, top] for the badge position.`,table:{category:`Props`}}},parameters:{docs:{description:{component:`The <code>BBadge</code> component generates a small badge to the top-right of its child element, or renders standalone status dots.<br><br>Supports <strong>count</strong> badges with overflow, <strong>dot</strong> indicators, <strong>status</strong> dots, <strong>preset/custom colors</strong>, and <strong>size</strong> variants.<br>Theming via <code>--b-badge-*</code> CSS custom properties. Respects <code>prefers-reduced-motion</code>.`}}}},u=`display:inline-flex;align-items:center;justify-content:center;width:40px;height:40px;background:oklch(90% 0 0);border-radius:6px;font-size:12px;color:#525252;`,d={args:{count:5,dot:!1,overflowCount:99,showZero:!1,size:r.Default},render:e=>({components:{BBadge:i},setup(){return{args:e,boxStyle:u}},template:`
      <BBadge v-bind="args">
        <span :style="boxStyle">Item</span>
      </BBadge>
    `})},f={parameters:{controls:{disable:!0},docs:{source:{code:`
<BBadge :count="5"><span>Item</span></BBadge>
<BBadge :count="25"><span>Item</span></BBadge>
<BBadge :count="100" :overflowCount="99"><span>Item</span></BBadge>
<BBadge :count="1000" :overflowCount="999"><span>Item</span></BBadge>
<BBadge :count="0" showZero><span>Item</span></BBadge>
        `}}},render:()=>({components:{BBadge:i},setup(){return{boxStyle:u}},template:`
      <div style="display:flex;align-items:flex-start;gap:2rem;">
        <div style="text-align:center;">
          <BBadge :count="5"><span :style="boxStyle">Item</span></BBadge>
          <p style="margin-top:1rem;font-size:0.75rem;color:#525252;">count=5</p>
        </div>
        <div style="text-align:center;">
          <BBadge :count="25"><span :style="boxStyle">Item</span></BBadge>
          <p style="margin-top:1rem;font-size:0.75rem;color:#525252;">count=25</p>
        </div>
        <div style="text-align:center;">
          <BBadge :count="100" :overflowCount="99"><span :style="boxStyle">Item</span></BBadge>
          <p style="margin-top:1rem;font-size:0.75rem;color:#525252;">99+</p>
        </div>
        <div style="text-align:center;">
          <BBadge :count="1000" :overflowCount="999"><span :style="boxStyle">Item</span></BBadge>
          <p style="margin-top:1rem;font-size:0.75rem;color:#525252;">999+</p>
        </div>
        <div style="text-align:center;">
          <BBadge :count="0" showZero><span :style="boxStyle">Item</span></BBadge>
          <p style="margin-top:1rem;font-size:0.75rem;color:#525252;">0 (showZero)</p>
        </div>
      </div>
    `})},p={parameters:{controls:{disable:!0},docs:{source:{code:`
<BBadge dot><span>Item</span></BBadge>
<BBadge dot :count="5"><span>Item</span></BBadge>
        `}}},render:()=>({components:{BBadge:i},setup(){return{boxStyle:u}},template:`
      <div style="display:flex;align-items:flex-start;gap:2rem;">
        <div style="text-align:center;">
          <BBadge dot><span :style="boxStyle">Item</span></BBadge>
          <p style="margin-top:1rem;font-size:0.75rem;color:#525252;">dot (no count)</p>
        </div>
        <div style="text-align:center;">
          <BBadge dot :count="5"><span :style="boxStyle">Item</span></BBadge>
          <p style="margin-top:1rem;font-size:0.75rem;color:#525252;">dot (count=5)</p>
        </div>
        <div style="text-align:center;">
          <BBadge dot :count="0"><span :style="boxStyle">Item</span></BBadge>
          <p style="margin-top:1rem;font-size:0.75rem;color:#525252;">dot (count=0, hidden)</p>
        </div>
      </div>
    `})},m={parameters:{controls:{disable:!0},docs:{source:{code:`
<BBadge status="success" text="Success" />
<BBadge status="processing" text="Processing" />
<BBadge status="default" text="Default" />
<BBadge status="error" text="Error" />
<BBadge status="warning" text="Warning" />
        `}}},render:()=>({components:{BBadge:i},template:`
      <div style="display:flex;flex-direction:column;gap:0.75rem;">
        <BBadge data-testid="status-success" status="success" text="Success" />
        <BBadge data-testid="status-processing" status="processing" text="Processing" />
        <BBadge data-testid="status-default" status="default" text="Default" />
        <BBadge data-testid="status-error" status="error" text="Error" />
        <BBadge data-testid="status-warning" status="warning" text="Warning" />
      </div>
    `}),play:async({canvasElement:e})=>{let t=s(e).getByTestId(`status-success`).querySelector(`.b-badge__status-dot`);o(t).toBeTruthy(),o(t?.classList.contains(`b-badge__status-dot--success`)).toBe(!0)}},h={parameters:{controls:{disable:!0},docs:{source:{code:`
<BBadge color="blue" text="blue" />
<BBadge :count="5" color="blue"><span>Item</span></BBadge>
        `}}},render:()=>({components:{BBadge:i},setup(){return{colors:c,presetBoxStyle:`display:inline-flex;align-items:end;justify-content:center;width:56px;height:56px;padding-bottom:8px;background:oklch(90% 0 0);border-radius:6px;font-size:12px;color:#525252;`}},template:`
      <div>
        <h4 style="margin:0 0 0.75rem;font-size:14px;font-weight:500;">Status dots</h4>
        <div style="display:flex;flex-wrap:wrap;gap:0.5rem 1.5rem;">
          <BBadge v-for="c in colors" :key="c" :color="c" :text="c" />
        </div>
        <h4 style="margin:1.5rem 0 0.75rem;font-size:14px;font-weight:500;">Count badges</h4>
        <div style="display:flex;flex-wrap:wrap;gap:1.5rem;">
          <BBadge v-for="c in colors" :key="c" :count="10" :color="c">
            <span :style="presetBoxStyle">{{ c }}</span>
          </BBadge>
        </div>
      </div>
    `})},g={parameters:{controls:{disable:!0},docs:{source:{code:`
<BBadge :count="5"><span>Default</span></BBadge>
<BBadge :count="5" size="small"><span>Small</span></BBadge>
        `}}},render:()=>({components:{BBadge:i},setup(){return{boxStyle:u}},template:`
      <div style="display:flex;align-items:flex-start;gap:2rem;">
        <div style="text-align:center;">
          <BBadge :count="5"><span :style="boxStyle">Item</span></BBadge>
          <p style="margin-top:1rem;font-size:0.75rem;color:#525252;">Default</p>
        </div>
        <div style="text-align:center;">
          <BBadge :count="5" size="small"><span :style="boxStyle">Item</span></BBadge>
          <p style="margin-top:1rem;font-size:0.75rem;color:#525252;">Small</p>
        </div>
        <div style="text-align:center;">
          <BBadge :count="100" :overflowCount="99"><span :style="boxStyle">Item</span></BBadge>
          <p style="margin-top:1rem;font-size:0.75rem;color:#525252;">Default (99+)</p>
        </div>
        <div style="text-align:center;">
          <BBadge :count="100" :overflowCount="99" size="small"><span :style="boxStyle">Item</span></BBadge>
          <p style="margin-top:1rem;font-size:0.75rem;color:#525252;">Small (99+)</p>
        </div>
      </div>
    `})},_={name:`Accessibility (roles & ARIA)`,parameters:{controls:{disable:!0},docs:{description:{story:'Count badges and dots use `role="status"` and `aria-label` with the count value. Status dots use `role="img"` and `aria-label` from the `text` prop or the status name. Badge content is rendered in a `<sup>` element. Animations respect `prefers-reduced-motion`.'}}},render:()=>({components:{BBadge:i},setup(){return{boxStyle:u}},template:`
      <div style="display:flex;flex-direction:column;gap:1.5rem;">
        <div>
          <h4 style="margin:0 0 0.5rem;">Count badge (role="status", aria-label="5")</h4>
          <BBadge data-testid="count-badge" :count="5">
            <span :style="boxStyle">Item</span>
          </BBadge>
        </div>
        <div>
          <h4 style="margin:0 0 0.5rem;">Dot (role="status")</h4>
          <BBadge data-testid="dot-badge" dot :count="3">
            <span :style="boxStyle">Item</span>
          </BBadge>
        </div>
        <div>
          <h4 style="margin:0 0 0.5rem;">Status dot (role="img", aria-label from text)</h4>
          <BBadge data-testid="status-badge" status="success" text="Deployment complete" />
        </div>
      </div>
    `}),play:async({canvasElement:e})=>{let t=s(e),n=t.getByTestId(`count-badge`).querySelector(`.b-badge__count`);o(n).toBeTruthy(),o(n?.getAttribute(`role`)).toBe(`status`),o(n?.getAttribute(`aria-label`)).toContain(`5`),o(n?.tagName).toBe(`SUP`);let r=t.getByTestId(`dot-badge`).querySelector(`.b-badge__dot`);o(r).toBeTruthy(),o(r?.getAttribute(`role`)).toBe(`status`);let i=t.getByTestId(`status-badge`).querySelector(`.b-badge__status-dot`);o(i).toBeTruthy(),o(i?.getAttribute(`role`)).toBe(`img`),o(i?.getAttribute(`aria-label`)).toBe(`Deployment complete`)}},v={name:`Theming (CSS vars)`,parameters:{controls:{disable:!0},docs:{description:{story:"Override `--b-badge-*` CSS custom properties to customise the badge appearance without touching the component source."},source:{code:`
<style>
.custom-badge {
  --b-badge-bg: #722ed1;
  --b-badge-height: 24px;
  --b-badge-font-size: 14px;
}
</style>

<BBadge class="custom-badge" :count="7">
  <span>Item</span>
</BBadge>
        `}}},render:()=>({components:{BBadge:i},setup(){return{themeBoxStyle:`display:inline-flex;align-items:end;justify-content:center;width:56px;height:56px;padding-bottom:8px;background:oklch(90% 0 0);border-radius:6px;font-size:12px;color:#525252;`}},template:`
      <div style="display:flex;align-items:flex-start;gap:2rem;">
        <div style="text-align:center;">
          <BBadge :count="12"><span :style="themeBoxStyle">Default</span></BBadge>
          <p style="margin-top:1rem;font-size:0.75rem;color:#525252;">Default</p>
        </div>
        <div style="text-align:center;">
          <BBadge :count="12" style="--b-badge-bg:#722ed1;--b-badge-height:24px;--b-badge-font-size:14px;">
            <span :style="themeBoxStyle">Purple</span>
          </BBadge>
          <p style="margin-top:1rem;font-size:0.75rem;color:#525252;">Purple + larger</p>
        </div>
        <div style="text-align:center;">
          <BBadge :count="12" style="--b-badge-bg:#287f0d;--b-badge-shadow:none;">
            <span :style="themeBoxStyle">Green</span>
          </BBadge>
          <p style="margin-top:1rem;font-size:0.75rem;color:#525252;">Green + no shadow</p>
        </div>
        <div style="text-align:center;">
          <BBadge :count="12" style="--b-badge-bg:#ad5a00;--b-badge-border-radius:4px;">
            <span :style="themeBoxStyle">Orange</span>
          </BBadge>
          <p style="margin-top:1rem;font-size:0.75rem;color:#525252;">Rectangular</p>
        </div>
        <div style="text-align:center;">
          <BBadge dot style="--b-badge-dot-bg:#722ed1;--b-badge-dot-size:12px;">
            <span :style="themeBoxStyle">Custom</span>
          </BBadge>
          <p style="margin-top:1rem;font-size:0.75rem;color:#525252;">Custom dot</p>
        </div>
      </div>
    `})},y={name:`Interaction – count & overflow`,parameters:{controls:{disable:!0},docs:{description:{story:`Automated play function: verifies count rendering, overflow text, dot visibility, and zero handling.`}}},render:()=>({components:{BBadge:i},setup(){return{boxStyle:u}},template:`
      <div style="display:flex;align-items:flex-start;gap:2rem;">
        <BBadge data-testid="count-5" :count="5">
          <span :style="boxStyle">A</span>
        </BBadge>
        <BBadge data-testid="overflow" :count="200" :overflowCount="99">
          <span :style="boxStyle">B</span>
        </BBadge>
        <BBadge data-testid="zero-hidden" :count="0">
          <span :style="boxStyle">C</span>
        </BBadge>
        <BBadge data-testid="zero-visible" :count="0" showZero>
          <span :style="boxStyle">D</span>
        </BBadge>
        <BBadge data-testid="dot-only" dot>
          <span :style="boxStyle">E</span>
        </BBadge>
        <BBadge data-testid="small-badge" :count="5" size="small">
          <span :style="boxStyle">F</span>
        </BBadge>
      </div>
    `}),play:async({canvasElement:e})=>{let t=s(e),n=t.getByTestId(`count-5`).querySelector(`.b-badge__count`);o(n).toBeTruthy(),o(n?.textContent?.trim()).toBe(`5`),o(t.getByTestId(`overflow`).querySelector(`.b-badge__count`)?.textContent?.trim()).toBe(`99+`),o(t.getByTestId(`zero-hidden`).querySelector(`.b-badge__count`)).toBeNull();let r=t.getByTestId(`zero-visible`).querySelector(`.b-badge__count`);o(r).toBeTruthy(),o(r?.textContent?.trim()).toBe(`0`);let i=t.getByTestId(`dot-only`);o(i.querySelector(`.b-badge__dot`)).toBeTruthy(),o(i.querySelector(`.b-badge__count`)).toBeNull(),o(t.getByTestId(`small-badge`).querySelector(`.b-badge__count`)?.classList.contains(`b-badge__count--small`)).toBe(!0)}},b=[{token:`--b-badge-dot-size`,defaultValue:`8px`,description:`Diameter of the dot badge (AntD: dotSize).`},{token:`--b-badge-status-dot-size`,defaultValue:`8px`,description:`Diameter of the status dot (AntD: statusSize).`},{token:`--b-badge-height`,defaultValue:`20px`,description:`Height of the badge indicator (AntD: indicatorHeight).`},{token:`--b-badge-height-small`,defaultValue:`14px`,description:`Height of the small badge indicator (AntD: indicatorHeightSM).`},{token:`--b-badge-z-index`,defaultValue:`auto`,description:`z-index of the badge (AntD: indicatorZIndex).`},{token:`--b-badge-padding-inline`,defaultValue:`6px`,description:`Inline padding of the badge text (AntD: paddingInline).`},{token:`--b-badge-padding-inline-small`,defaultValue:`4px`,description:`Inline padding of the small badge text.`},{token:`--b-badge-font-size`,defaultValue:`12px`,description:`Font size of badge text (AntD: textFontSize).`},{token:`--b-badge-font-size-small`,defaultValue:`10px`,description:`Font size of small badge text (AntD: textFontSizeSM).`},{token:`--b-badge-font-weight`,defaultValue:`500`,description:`Font weight of badge text (AntD: textFontWeight).`},{token:`--b-badge-bg`,defaultValue:`oklch(57.7% 0.245 27.325)`,description:`Background color of the count badge.`},{token:`--b-badge-color`,defaultValue:`oklch(100% 0 0)`,description:`Text color of the count badge.`},{token:`--b-badge-dot-bg`,defaultValue:`oklch(57.7% 0.245 27.325)`,description:`Background color of the dot badge.`},{token:`--b-badge-shadow`,defaultValue:`0 0 0 1px oklch(100% 0 0)`,description:`Outer ring shadow around the badge.`},{token:`--b-badge-min-width`,defaultValue:`20px`,description:`Minimum width of the count badge.`},{token:`--b-badge-min-width-small`,defaultValue:`14px`,description:`Minimum width of the small count badge.`},{token:`--b-badge-border-radius`,defaultValue:`10px`,description:`Corner radius of the count badge.`},{token:`--b-badge-status-success`,defaultValue:`oklch(62.7% 0.194 149.214)`,description:`Color for status="success".`},{token:`--b-badge-status-processing`,defaultValue:`oklch(54.6% 0.245 262.881)`,description:`Color for status="processing".`},{token:`--b-badge-status-error`,defaultValue:`oklch(57.7% 0.245 27.325)`,description:`Color for status="error".`},{token:`--b-badge-status-warning`,defaultValue:`oklch(72.6% 0.191 68.916)`,description:`Color for status="warning".`},{token:`--b-badge-status-default`,defaultValue:`oklch(70% 0.01 260)`,description:`Color for status="default".`},{token:`--b-badge-status-text-color`,defaultValue:`oklch(27% 0.01 260)`,description:`Color of the text next to a status dot.`},{token:`--b-badge-status-text-font-size`,defaultValue:`14px`,description:`Font size of status text.`},{token:`--b-badge-animation-duration`,defaultValue:`300ms`,description:`Duration of badge enter/leave animations.`}],x={name:`Design Tokens`,parameters:{controls:{disable:!0},docs:{description:{story:`Reference table of every <code>--b-badge-*</code> CSS custom property consumers can override to retheme the component.`}}},render:()=>({components:{BBadge:i},setup:()=>({tokens:b}),template:`
      <div style="font-family:sans-serif;padding:1rem;max-width:1100px;margin:0 auto;">
        <h2 style="margin:0 0 8px;">BBadge - Design Tokens</h2>
        <p style="margin:0 0 24px;color:#595959;">
          All tokens scoped to <code>.b-badge</code>. Override inline or via a CSS class.
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
          Three+ tokens overridden inline (background, dot size, padding, font weight).
        </p>
        <BBadge
          :count="42"
          style="
            --b-badge-bg: oklch(42% 0.16 145);
            --b-badge-padding-inline: 10px;
            --b-badge-font-weight: 700;
            --b-badge-height: 24px;
          "
        >
          <span style="display:inline-block;width:48px;height:48px;background:oklch(92% 0.005 260);border-radius:8px;"></span>
        </BBadge>
      </div>
    `})},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    count: 5,
    dot: false,
    overflowCount: 99,
    showZero: false,
    size: BBadgeSize.Default
  },
  render: args => ({
    components: {
      BBadge
    },
    setup() {
      return {
        args,
        boxStyle
      };
    },
    template: \`
      <BBadge v-bind="args">
        <span :style="boxStyle">Item</span>
      </BBadge>
    \`
  })
}`,...d.parameters?.docs?.source},description:{story:`Interactive playground - tweak all props via the Controls panel.`,...d.parameters?.docs?.description}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: true
    },
    docs: {
      source: {
        code: \`
<BBadge :count="5"><span>Item</span></BBadge>
<BBadge :count="25"><span>Item</span></BBadge>
<BBadge :count="100" :overflowCount="99"><span>Item</span></BBadge>
<BBadge :count="1000" :overflowCount="999"><span>Item</span></BBadge>
<BBadge :count="0" showZero><span>Item</span></BBadge>
        \`
      }
    }
  },
  render: () => ({
    components: {
      BBadge
    },
    setup() {
      return {
        boxStyle
      };
    },
    template: \`
      <div style="display:flex;align-items:flex-start;gap:2rem;">
        <div style="text-align:center;">
          <BBadge :count="5"><span :style="boxStyle">Item</span></BBadge>
          <p style="margin-top:1rem;font-size:0.75rem;color:#525252;">count=5</p>
        </div>
        <div style="text-align:center;">
          <BBadge :count="25"><span :style="boxStyle">Item</span></BBadge>
          <p style="margin-top:1rem;font-size:0.75rem;color:#525252;">count=25</p>
        </div>
        <div style="text-align:center;">
          <BBadge :count="100" :overflowCount="99"><span :style="boxStyle">Item</span></BBadge>
          <p style="margin-top:1rem;font-size:0.75rem;color:#525252;">99+</p>
        </div>
        <div style="text-align:center;">
          <BBadge :count="1000" :overflowCount="999"><span :style="boxStyle">Item</span></BBadge>
          <p style="margin-top:1rem;font-size:0.75rem;color:#525252;">999+</p>
        </div>
        <div style="text-align:center;">
          <BBadge :count="0" showZero><span :style="boxStyle">Item</span></BBadge>
          <p style="margin-top:1rem;font-size:0.75rem;color:#525252;">0 (showZero)</p>
        </div>
      </div>
    \`
  })
}`,...f.parameters?.docs?.source},description:{story:`Demonstrates count badge with various numbers and overflow.`,...f.parameters?.docs?.description}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: true
    },
    docs: {
      source: {
        code: \`
<BBadge dot><span>Item</span></BBadge>
<BBadge dot :count="5"><span>Item</span></BBadge>
        \`
      }
    }
  },
  render: () => ({
    components: {
      BBadge
    },
    setup() {
      return {
        boxStyle
      };
    },
    template: \`
      <div style="display:flex;align-items:flex-start;gap:2rem;">
        <div style="text-align:center;">
          <BBadge dot><span :style="boxStyle">Item</span></BBadge>
          <p style="margin-top:1rem;font-size:0.75rem;color:#525252;">dot (no count)</p>
        </div>
        <div style="text-align:center;">
          <BBadge dot :count="5"><span :style="boxStyle">Item</span></BBadge>
          <p style="margin-top:1rem;font-size:0.75rem;color:#525252;">dot (count=5)</p>
        </div>
        <div style="text-align:center;">
          <BBadge dot :count="0"><span :style="boxStyle">Item</span></BBadge>
          <p style="margin-top:1rem;font-size:0.75rem;color:#525252;">dot (count=0, hidden)</p>
        </div>
      </div>
    \`
  })
}`,...p.parameters?.docs?.source},description:{story:`Dot indicator instead of a count badge.`,...p.parameters?.docs?.description}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: true
    },
    docs: {
      source: {
        code: \`
<BBadge status="success" text="Success" />
<BBadge status="processing" text="Processing" />
<BBadge status="default" text="Default" />
<BBadge status="error" text="Error" />
<BBadge status="warning" text="Warning" />
        \`
      }
    }
  },
  render: () => ({
    components: {
      BBadge
    },
    template: \`
      <div style="display:flex;flex-direction:column;gap:0.75rem;">
        <BBadge data-testid="status-success" status="success" text="Success" />
        <BBadge data-testid="status-processing" status="processing" text="Processing" />
        <BBadge data-testid="status-default" status="default" text="Default" />
        <BBadge data-testid="status-error" status="error" text="Error" />
        <BBadge data-testid="status-warning" status="warning" text="Warning" />
      </div>
    \`
  }),
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const successBadge = canvas.getByTestId('status-success');
    const dot = successBadge.querySelector('.b-badge__status-dot');
    expect(dot).toBeTruthy();
    expect(dot?.classList.contains('b-badge__status-dot--success')).toBe(true);
  }
}`,...m.parameters?.docs?.source},description:{story:`Standalone status dots with text labels.`,...m.parameters?.docs?.description}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: true
    },
    docs: {
      source: {
        code: \`
<BBadge color="blue" text="blue" />
<BBadge :count="5" color="blue"><span>Item</span></BBadge>
        \`
      }
    }
  },
  render: () => ({
    components: {
      BBadge
    },
    setup() {
      const presetBoxStyle = 'display:inline-flex;align-items:end;justify-content:center;width:56px;height:56px;padding-bottom:8px;background:oklch(90% 0 0);border-radius:6px;font-size:12px;color:#525252;';
      return {
        colors: PRESET_COLORS,
        presetBoxStyle
      };
    },
    template: \`
      <div>
        <h4 style="margin:0 0 0.75rem;font-size:14px;font-weight:500;">Status dots</h4>
        <div style="display:flex;flex-wrap:wrap;gap:0.5rem 1.5rem;">
          <BBadge v-for="c in colors" :key="c" :color="c" :text="c" />
        </div>
        <h4 style="margin:1.5rem 0 0.75rem;font-size:14px;font-weight:500;">Count badges</h4>
        <div style="display:flex;flex-wrap:wrap;gap:1.5rem;">
          <BBadge v-for="c in colors" :key="c" :count="10" :color="c">
            <span :style="presetBoxStyle">{{ c }}</span>
          </BBadge>
        </div>
      </div>
    \`
  })
}`,...h.parameters?.docs?.source},description:{story:`All 13 preset colors shown as standalone dots and count badges.`,...h.parameters?.docs?.description}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: true
    },
    docs: {
      source: {
        code: \`
<BBadge :count="5"><span>Default</span></BBadge>
<BBadge :count="5" size="small"><span>Small</span></BBadge>
        \`
      }
    }
  },
  render: () => ({
    components: {
      BBadge
    },
    setup() {
      return {
        boxStyle
      };
    },
    template: \`
      <div style="display:flex;align-items:flex-start;gap:2rem;">
        <div style="text-align:center;">
          <BBadge :count="5"><span :style="boxStyle">Item</span></BBadge>
          <p style="margin-top:1rem;font-size:0.75rem;color:#525252;">Default</p>
        </div>
        <div style="text-align:center;">
          <BBadge :count="5" size="small"><span :style="boxStyle">Item</span></BBadge>
          <p style="margin-top:1rem;font-size:0.75rem;color:#525252;">Small</p>
        </div>
        <div style="text-align:center;">
          <BBadge :count="100" :overflowCount="99"><span :style="boxStyle">Item</span></BBadge>
          <p style="margin-top:1rem;font-size:0.75rem;color:#525252;">Default (99+)</p>
        </div>
        <div style="text-align:center;">
          <BBadge :count="100" :overflowCount="99" size="small"><span :style="boxStyle">Item</span></BBadge>
          <p style="margin-top:1rem;font-size:0.75rem;color:#525252;">Small (99+)</p>
        </div>
      </div>
    \`
  })
}`,...g.parameters?.docs?.source},description:{story:`Default and small size variants.`,...g.parameters?.docs?.description}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  name: 'Accessibility (roles & ARIA)',
  parameters: {
    controls: {
      disable: true
    },
    docs: {
      description: {
        story: 'Count badges and dots use \`role="status"\` and \`aria-label\` with the count value. ' + 'Status dots use \`role="img"\` and \`aria-label\` from the \`text\` prop or the status name. ' + 'Badge content is rendered in a \`<sup>\` element. Animations respect \`prefers-reduced-motion\`.'
      }
    }
  },
  render: () => ({
    components: {
      BBadge
    },
    setup() {
      return {
        boxStyle
      };
    },
    template: \`
      <div style="display:flex;flex-direction:column;gap:1.5rem;">
        <div>
          <h4 style="margin:0 0 0.5rem;">Count badge (role="status", aria-label="5")</h4>
          <BBadge data-testid="count-badge" :count="5">
            <span :style="boxStyle">Item</span>
          </BBadge>
        </div>
        <div>
          <h4 style="margin:0 0 0.5rem;">Dot (role="status")</h4>
          <BBadge data-testid="dot-badge" dot :count="3">
            <span :style="boxStyle">Item</span>
          </BBadge>
        </div>
        <div>
          <h4 style="margin:0 0 0.5rem;">Status dot (role="img", aria-label from text)</h4>
          <BBadge data-testid="status-badge" status="success" text="Deployment complete" />
        </div>
      </div>
    \`
  }),
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);

    // Count badge: role="status"
    const countBadge = canvas.getByTestId('count-badge');
    const countSup = countBadge.querySelector('.b-badge__count');
    expect(countSup).toBeTruthy();
    expect(countSup?.getAttribute('role')).toBe('status');
    expect(countSup?.getAttribute('aria-label')).toContain('5');
    expect(countSup?.tagName).toBe('SUP');

    // Dot badge: role="status"
    const dotBadge = canvas.getByTestId('dot-badge');
    const dotSup = dotBadge.querySelector('.b-badge__dot');
    expect(dotSup).toBeTruthy();
    expect(dotSup?.getAttribute('role')).toBe('status');

    // Status badge: role="img" on dot
    const statusBadge = canvas.getByTestId('status-badge');
    const statusDot = statusBadge.querySelector('.b-badge__status-dot');
    expect(statusDot).toBeTruthy();
    expect(statusDot?.getAttribute('role')).toBe('img');
    expect(statusDot?.getAttribute('aria-label')).toBe('Deployment complete');
  }
}`,..._.parameters?.docs?.source},description:{story:'Demonstrates accessibility features:\n- `role="status"` on count badges and dots\n- `role="img"` on status dots\n- `aria-label` with count value or status description\n- Count displayed in `<sup>` element\n- Animations respect `prefers-reduced-motion`',..._.parameters?.docs?.description}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  name: 'Theming (CSS vars)',
  parameters: {
    controls: {
      disable: true
    },
    docs: {
      description: {
        story: 'Override \`--b-badge-*\` CSS custom properties to customise the badge appearance ' + 'without touching the component source.'
      },
      source: {
        code: \`
<style>
.custom-badge {
  --b-badge-bg: #722ed1;
  --b-badge-height: 24px;
  --b-badge-font-size: 14px;
}
</style>

<BBadge class="custom-badge" :count="7">
  <span>Item</span>
</BBadge>
        \`
      }
    }
  },
  render: () => ({
    components: {
      BBadge
    },
    setup() {
      const themeBoxStyle = 'display:inline-flex;align-items:end;justify-content:center;width:56px;height:56px;padding-bottom:8px;background:oklch(90% 0 0);border-radius:6px;font-size:12px;color:#525252;';
      return {
        themeBoxStyle
      };
    },
    template: \`
      <div style="display:flex;align-items:flex-start;gap:2rem;">
        <div style="text-align:center;">
          <BBadge :count="12"><span :style="themeBoxStyle">Default</span></BBadge>
          <p style="margin-top:1rem;font-size:0.75rem;color:#525252;">Default</p>
        </div>
        <div style="text-align:center;">
          <BBadge :count="12" style="--b-badge-bg:#722ed1;--b-badge-height:24px;--b-badge-font-size:14px;">
            <span :style="themeBoxStyle">Purple</span>
          </BBadge>
          <p style="margin-top:1rem;font-size:0.75rem;color:#525252;">Purple + larger</p>
        </div>
        <div style="text-align:center;">
          <BBadge :count="12" style="--b-badge-bg:#287f0d;--b-badge-shadow:none;">
            <span :style="themeBoxStyle">Green</span>
          </BBadge>
          <p style="margin-top:1rem;font-size:0.75rem;color:#525252;">Green + no shadow</p>
        </div>
        <div style="text-align:center;">
          <BBadge :count="12" style="--b-badge-bg:#ad5a00;--b-badge-border-radius:4px;">
            <span :style="themeBoxStyle">Orange</span>
          </BBadge>
          <p style="margin-top:1rem;font-size:0.75rem;color:#525252;">Rectangular</p>
        </div>
        <div style="text-align:center;">
          <BBadge dot style="--b-badge-dot-bg:#722ed1;--b-badge-dot-size:12px;">
            <span :style="themeBoxStyle">Custom</span>
          </BBadge>
          <p style="margin-top:1rem;font-size:0.75rem;color:#525252;">Custom dot</p>
        </div>
      </div>
    \`
  })
}`,...v.parameters?.docs?.source},description:{story:"Override `--b-badge-*` CSS custom properties to customise appearance.",...v.parameters?.docs?.description}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  name: 'Interaction – count & overflow',
  parameters: {
    controls: {
      disable: true
    },
    docs: {
      description: {
        story: 'Automated play function: verifies count rendering, overflow text, dot visibility, and zero handling.'
      }
    }
  },
  render: () => ({
    components: {
      BBadge
    },
    setup() {
      return {
        boxStyle
      };
    },
    template: \`
      <div style="display:flex;align-items:flex-start;gap:2rem;">
        <BBadge data-testid="count-5" :count="5">
          <span :style="boxStyle">A</span>
        </BBadge>
        <BBadge data-testid="overflow" :count="200" :overflowCount="99">
          <span :style="boxStyle">B</span>
        </BBadge>
        <BBadge data-testid="zero-hidden" :count="0">
          <span :style="boxStyle">C</span>
        </BBadge>
        <BBadge data-testid="zero-visible" :count="0" showZero>
          <span :style="boxStyle">D</span>
        </BBadge>
        <BBadge data-testid="dot-only" dot>
          <span :style="boxStyle">E</span>
        </BBadge>
        <BBadge data-testid="small-badge" :count="5" size="small">
          <span :style="boxStyle">F</span>
        </BBadge>
      </div>
    \`
  }),
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);

    // Count = 5
    const count5 = canvas.getByTestId('count-5');
    const countEl = count5.querySelector('.b-badge__count');
    expect(countEl).toBeTruthy();
    expect(countEl?.textContent?.trim()).toBe('5');

    // Overflow: 200 > 99 → "99+"
    const overflow = canvas.getByTestId('overflow');
    const overflowEl = overflow.querySelector('.b-badge__count');
    expect(overflowEl?.textContent?.trim()).toBe('99+');

    // Zero hidden
    const zeroHidden = canvas.getByTestId('zero-hidden');
    expect(zeroHidden.querySelector('.b-badge__count')).toBeNull();

    // Zero visible with showZero
    const zeroVisible = canvas.getByTestId('zero-visible');
    const zeroEl = zeroVisible.querySelector('.b-badge__count');
    expect(zeroEl).toBeTruthy();
    expect(zeroEl?.textContent?.trim()).toBe('0');

    // Dot
    const dotOnly = canvas.getByTestId('dot-only');
    expect(dotOnly.querySelector('.b-badge__dot')).toBeTruthy();
    expect(dotOnly.querySelector('.b-badge__count')).toBeNull();

    // Small size
    const smallBadge = canvas.getByTestId('small-badge');
    const smallEl = smallBadge.querySelector('.b-badge__count');
    expect(smallEl?.classList.contains('b-badge__count--small')).toBe(true);
  }
}`,...y.parameters?.docs?.source},description:{story:`Automated interaction tests: verify count rendering, overflow, and dot visibility.`,...y.parameters?.docs?.description}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  name: 'Design Tokens',
  parameters: {
    controls: {
      disable: true
    },
    docs: {
      description: {
        story: 'Reference table of every <code>--b-badge-*</code> CSS custom property ' + 'consumers can override to retheme the component.'
      }
    }
  },
  render: () => ({
    components: {
      BBadge
    },
    setup: () => ({
      tokens: DESIGN_TOKENS
    }),
    template: \`
      <div style="font-family:sans-serif;padding:1rem;max-width:1100px;margin:0 auto;">
        <h2 style="margin:0 0 8px;">BBadge - Design Tokens</h2>
        <p style="margin:0 0 24px;color:#595959;">
          All tokens scoped to <code>.b-badge</code>. Override inline or via a CSS class.
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
          Three+ tokens overridden inline (background, dot size, padding, font weight).
        </p>
        <BBadge
          :count="42"
          style="
            --b-badge-bg: oklch(42% 0.16 145);
            --b-badge-padding-inline: 10px;
            --b-badge-font-weight: 700;
            --b-badge-height: 24px;
          "
        >
          <span style="display:inline-block;width:48px;height:48px;background:oklch(92% 0.005 260);border-radius:8px;"></span>
        </BBadge>
      </div>
    \`
  })
}`,...x.parameters?.docs?.source}}},S=[`Playground`,`CountVariants`,`DotMode`,`StatusDots`,`PresetColors`,`Sizes`,`Accessibility`,`Theming`,`InteractionTests`,`DesignTokens`]}))();export{_ as Accessibility,f as CountVariants,x as DesignTokens,p as DotMode,y as InteractionTests,d as Playground,h as PresetColors,g as Sizes,m as StatusDots,v as Theming,S as __namedExportsOrder,l as default};