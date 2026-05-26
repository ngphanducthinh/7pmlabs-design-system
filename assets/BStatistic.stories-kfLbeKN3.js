import{n as e}from"./chunk-BneVvdWh.js";import{X as t,i as n}from"./iframe-DtrVnC0E.js";import{E as r,T as i,t as a}from"./components-B32Ts1jj.js";var o,s,c,l,u,d,f,p,m,h,g,_,v,y,b,x,S;e((()=>{a(),n(),{expect:o,within:s}=__STORYBOOK_MODULE_TEST__,c={title:`Data Display/Statistic`,component:r,tags:[`autodocs`],argTypes:{title:{control:`text`,description:`Display title shown above the value.`,table:{category:`Props`}},value:{control:`number`,description:"Display value. Accepts `number` or `string`; numbers are formatted, strings render as-is.",table:{type:{summary:`number | string`},category:`Props`}},prefix:{control:`text`,description:`Prefix text rendered before the value.`,table:{category:`Props`}},suffix:{control:`text`,description:`Suffix text rendered after the value.`,table:{category:`Props`}},precision:{control:`number`,description:`Digits after the decimal point. Numeric values only.`,table:{category:`Props`}},decimalSeparator:{control:`text`,description:`Decimal separator character.`,table:{defaultValue:{summary:`.`},category:`Props`}},groupSeparator:{control:`text`,description:`Thousands group separator character.`,table:{defaultValue:{summary:`,`},category:`Props`}},loading:{control:`boolean`,description:`Show a skeleton placeholder instead of the value.`,table:{defaultValue:{summary:`false`},category:`Props`}},valueStyle:{control:`object`,description:`Inline style applied to the value element.`,table:{category:`Props`}},formatter:{description:`Function returning a custom display string.`,table:{category:`Props`}}},parameters:{docs:{description:{component:`The <code>BStatistic</code> component displays a single highlighted statistic - a labelled numeric/textual value with optional prefix, suffix, and precision formatting. Supports <strong>loading</strong> skeletons, custom <strong>formatter</strong> functions/slots, rich title/prefix/suffix slots, and theming via <code>--b-statistic-*</code> CSS variables.<br><br>A companion <code>&lt;BStatisticTimer&gt;</code> sub-component provides countdown/countup timers with custom format strings and <code>change</code>/<code>finish</code> events.`}}}},l={args:{title:`Active Users`,value:112893,precision:2,decimalSeparator:`.`,groupSeparator:`,`,prefix:``,suffix:``,loading:!1},render:e=>({components:{BStatistic:r},setup(){return{args:e}},template:`<div style="padding:2rem;"><BStatistic v-bind="args" /></div>`})},u={parameters:{controls:{disable:!0},docs:{source:{code:`<BStatistic title="Active Users" :value="112893" />`}}},render:()=>({components:{BStatistic:r},template:`
      <div style="padding:2rem;display:flex;gap:3rem;flex-wrap:wrap;">
        <BStatistic data-testid="basic" title="Active Users" :value="112893" />
        <BStatistic title="Account Balance (CNY)" :value="112893" :precision="2" />
      </div>
    `}),play:async({canvasElement:e})=>{let t=s(e).getByTestId(`basic`);o(t.querySelector(`.b-statistic__title`)?.textContent).toBe(`Active Users`),o(t.querySelector(`.b-statistic__value`)?.textContent).toBe(`112,893`)}},d={name:`With Prefix / Suffix`,parameters:{controls:{disable:!0},docs:{source:{code:`<BStatistic title="Feedback" :value="93" suffix="/ 100" />
<BStatistic title="Idle Rate" :value="42" suffix="%" :value-style="{ color: 'oklch(54% 0.16 145)' }" />
<BStatistic title="Cost" :value="1234.56" :precision="2" prefix="$" />`}}},render:()=>({components:{BStatistic:r},template:`
      <div style="padding:2rem;display:flex;gap:3rem;flex-wrap:wrap;">
        <BStatistic data-testid="px-suffix" title="Feedback" :value="93" suffix="/ 100" />
        <BStatistic
          title="Idle Rate"
          :value="42"
          suffix="%"
          :value-style="{ color: 'oklch(54% 0.16 145)' }"
        />
        <BStatistic title="Cost" :value="1234.56" :precision="2" prefix="$" />
      </div>
    `}),play:async({canvasElement:e})=>{o(s(e).getByTestId(`px-suffix`).querySelector(`.b-statistic__suffix`)?.textContent?.trim()).toBe(`/ 100`)}},f={name:`Custom Formatter`,parameters:{controls:{disable:!0},docs:{source:{code:`<BStatistic
  title="Account Balance"
  :value="1234567.89"
  :formatter="(v) => '¥' + Number(v).toLocaleString()"
/>`}}},render:()=>({components:{BStatistic:r},setup(){return{fmt:e=>`¥${Number(e).toLocaleString()}`}},template:`
      <div style="padding:2rem;display:flex;gap:3rem;">
        <BStatistic data-testid="fmt" title="Account Balance" :value="1234567.89" :formatter="fmt" />
        <BStatistic title="Custom slot" :value="0.875">
          <template #formatter="{ value }">
            <span style="color:oklch(54% 0.16 145);font-weight:600;">
              {{ (Number(value) * 100).toFixed(1) }}%
            </span>
          </template>
        </BStatistic>
      </div>
    `}),play:async({canvasElement:e})=>{o(s(e).getByTestId(`fmt`).querySelector(`.b-statistic__value`)?.textContent?.trim()).toMatch(/^¥/)}},p={parameters:{controls:{disable:!0},docs:{source:{code:`<BStatistic title="Active Users" :value="0" loading />`}}},render:()=>({components:{BStatistic:r},setup(){return{loading:t(!0)}},template:`
      <div style="padding:2rem;display:flex;flex-direction:column;gap:1rem;align-items:flex-start;">
        <button data-testid="toggle-loading" @click="loading = !loading">
          Toggle loading ({{ loading ? 'on' : 'off' }})
        </button>
        <BStatistic data-testid="loading" title="Active Users" :value="112893" :loading="loading" />
      </div>
    `}),play:async({canvasElement:e})=>{let t=s(e).getByTestId(`loading`);o(t.querySelector(`.b-statistic__skeleton`)).not.toBeNull();let n=t.querySelector(`.b-statistic__skeleton`);o(n.getAttribute(`aria-busy`)).toBe(`true`),o(n.getAttribute(`aria-label`)).toBe(`Loading`)}},m={name:`Custom Separators (i18n)`,parameters:{controls:{disable:!0},docs:{source:{code:`<BStatistic title="EU number" :value="1234567.89" :precision="2"
  groupSeparator="." decimalSeparator="," />`}}},render:()=>({components:{BStatistic:r},template:`
      <div style="padding:2rem;display:flex;gap:3rem;flex-wrap:wrap;">
        <BStatistic title="US default" :value="1234567.89" :precision="2" />
        <BStatistic
          data-testid="eu"
          title="DE / FR style"
          :value="1234567.89"
          :precision="2"
          group-separator="."
          decimal-separator=","
        />
        <BStatistic title="Spaced" :value="1234567" group-separator=" " />
      </div>
    `}),play:async({canvasElement:e})=>{o(s(e).getByTestId(`eu`).querySelector(`.b-statistic__value`)?.textContent?.trim()).toBe(`1.234.567,89`)}},h={name:`Negative & Zero`,parameters:{controls:{disable:!0}},render:()=>({components:{BStatistic:r},template:`
      <div style="padding:2rem;display:flex;gap:3rem;flex-wrap:wrap;">
        <BStatistic title="Loss" :value="-1234.56" :precision="2" prefix="$"
                    :value-style="{ color: 'oklch(50% 0.2 20)' }" />
        <BStatistic title="Zero" :value="0" />
      </div>
    `})},g={name:`Timer: Countdown`,parameters:{controls:{disable:!0},docs:{source:{code:`<BStatisticTimer title="Promotion ends in"
  :value="Date.now() + 1000 * 60 * 60 * 24 * 2"
  format="D HH:mm:ss" />`}}},render:()=>({components:{BStatisticTimer:i},setup(){return{target:Date.now()+1e3*60*60*24*2+12345}},template:`
      <div style="padding:2rem;display:flex;gap:3rem;flex-wrap:wrap;">
        <BStatisticTimer
          data-testid="cd1"
          title="Promotion ends in"
          :value="target"
          format="D [days] HH:mm:ss"
        />
        <BStatisticTimer title="Next launch" :value="target" format="HH:mm:ss" />
        <BStatisticTimer title="Sub-second" :value="target" format="HH:mm:ss.SSS" />
      </div>
    `}),play:async({canvasElement:e})=>{let t=s(e).getByTestId(`cd1`);o(t.querySelector(`.b-statistic__title`)?.textContent).toBe(`Promotion ends in`),o(t.querySelector(`.b-statistic__value`)?.textContent??``).toMatch(/days/)}},_={name:`Timer: Countup`,parameters:{controls:{disable:!0},docs:{source:{code:`<BStatisticTimer type="countup" :value="Date.now()" />`}}},render:()=>({components:{BStatisticTimer:i},setup(){return{start:Date.now()}},template:`
      <div style="padding:2rem;">
        <BStatisticTimer data-testid="cu" type="countup" title="Session length" :value="start" />
      </div>
    `}),play:async({canvasElement:e})=>{o(s(e).getByTestId(`cu`).querySelector(`.b-statistic__value`)?.textContent??``).toMatch(/^\d{2}:\d{2}:\d{2}$/)}},v={name:`Accessibility (roles & live region)`,parameters:{controls:{disable:!0},docs:{description:{story:`Verifies that the value region is a polite ARIA live region, decorative prefix/suffix elements are <code>aria-hidden</code>, and the loading skeleton announces its busy state via <code>role="status"</code> and <code>aria-busy="true"</code>.`}}},render:()=>({components:{BStatistic:r},setup(){let e=t(100),n=t(!1);function r(){e.value+=100}return{value:e,loading:n,bump:r}},template:`
      <div style="padding:2rem;display:flex;flex-direction:column;gap:1rem;align-items:flex-start;">
        <div style="display:flex;gap:0.5rem;">
          <button data-testid="bump" @click="bump">Bump value</button>
          <button data-testid="toggle-loading" @click="loading = !loading">Toggle loading</button>
        </div>
        <BStatistic
          data-testid="a11y"
          title="Live updating count"
          :value="value"
          prefix="$"
          suffix="USD"
          :loading="loading"
        />
      </div>
    `}),play:async({canvasElement:e})=>{let t=s(e),n=t.getByTestId(`a11y`);o(n.querySelector(`.b-statistic__content`)?.getAttribute(`aria-live`)).toBe(`polite`),o(n.querySelector(`.b-statistic__title`)?.textContent).toBe(`Live updating count`),o(n.querySelector(`.b-statistic__prefix`)?.getAttribute(`aria-hidden`)).toBe(`true`),o(n.querySelector(`.b-statistic__suffix`)?.getAttribute(`aria-hidden`)).toBe(`true`);let r=t.getByTestId(`bump`);r.focus(),o(document.activeElement).toBe(r),r.click(),await new Promise(e=>setTimeout(e,30)),o(n.querySelector(`.b-statistic__value`)?.textContent?.trim()).toBe(`200`),t.getByTestId(`toggle-loading`).click(),await new Promise(e=>setTimeout(e,30));let i=n.querySelector(`.b-statistic__skeleton`);o(i).not.toBeNull(),o(i.getAttribute(`role`)).toBe(`status`),o(i.getAttribute(`aria-busy`)).toBe(`true`)}},y={name:`Theming (override CSS vars)`,parameters:{controls:{disable:!0},docs:{description:{story:`Override <code>--b-statistic-*</code> CSS variables to retheme the component. This story overrides title color, content size, content color, and skeleton colors.`}}},render:()=>({components:{BStatistic:r},template:`
      <div style="padding:2rem;display:flex;flex-direction:column;gap:1.5rem;align-items:flex-start;">
        <p style="font-size:12px;color:#595959;margin:0;">Default</p>
        <BStatistic title="Active Users" :value="112893" />
        <p style="font-size:12px;color:#595959;margin:0;">Themed (3+ overrides)</p>
        <BStatistic
          title="Active Users"
          :value="112893"
          style="
            --b-statistic-title-color: oklch(54.6% 0.245 262.881);
            --b-statistic-title-font-size: 12px;
            --b-statistic-content-color: oklch(40% 0.18 295);
            --b-statistic-content-font-size: 36px;
            --b-statistic-content-font-weight: 700;
          "
        />
      </div>
    `})},b={name:`Interaction – full flow`,parameters:{controls:{disable:!0}},render:()=>({components:{BStatistic:r},setup(){let e=t(!1),n=t(1234.5),r=t(2);function i(){e.value=!e.value}function a(){n.value=Number(n.value)+1}function o(){n.value=`N/A`,r.value=void 0}return{loading:e,value:n,precision:r,toggleLoading:i,bump:a,setString:o}},template:`
      <div style="padding:2rem;display:flex;flex-direction:column;gap:0.75rem;align-items:flex-start;">
        <div style="display:flex;gap:0.5rem;">
          <button data-testid="bump" @click="bump">+1</button>
          <button data-testid="loading" @click="toggleLoading">Toggle loading</button>
          <button data-testid="string" @click="setString">Set N/A (string)</button>
        </div>
        <BStatistic
          data-testid="int"
          title="Live"
          :value="value"
          :precision="precision"
          :loading="loading"
          prefix="$"
        />
      </div>
    `}),play:async({canvasElement:e})=>{let t=s(e),n=t.getByTestId(`int`);o(n.querySelector(`.b-statistic__value`)?.textContent?.trim()).toBe(`1,234.50`),t.getByTestId(`bump`).click(),await new Promise(e=>setTimeout(e,30)),o(n.querySelector(`.b-statistic__value`)?.textContent?.trim()).toBe(`1,235.50`),t.getByTestId(`loading`).click(),await new Promise(e=>setTimeout(e,30)),o(n.querySelector(`.b-statistic__skeleton`)).not.toBeNull(),t.getByTestId(`loading`).click(),await new Promise(e=>setTimeout(e,30)),t.getByTestId(`string`).click(),await new Promise(e=>setTimeout(e,30)),o(n.querySelector(`.b-statistic__value`)?.textContent?.trim()).toBe(`N/A`)}},x={name:`Design Tokens`,parameters:{controls:{disable:!0},docs:{description:{story:`Reference table of every <code>--b-statistic-*</code> CSS custom property. Override these on the component root selector (or via a wrapping class) to retheme. Use this story as living documentation of the available tokens.`}}},render:()=>({components:{BStatistic:r},setup(){return{tokens:[{name:`--b-statistic-title-color`,fallback:`oklch(45% 0.02 260)`,desc:`Title text color.`,antd:`colorTextDescription`},{name:`--b-statistic-title-font-size`,fallback:`14px`,desc:`Title font size.`,antd:`titleFontSize`},{name:`--b-statistic-title-line-height`,fallback:`1.5715`,desc:`Title line height.`,antd:`lineHeight`},{name:`--b-statistic-title-margin-bottom`,fallback:`4px`,desc:`Spacing between title and value.`,antd:`marginXXS`},{name:`--b-statistic-content-color`,fallback:`oklch(20% 0.02 260)`,desc:`Value text color.`,antd:`colorTextHeading`},{name:`--b-statistic-content-font-size`,fallback:`24px`,desc:`Value font size.`,antd:`contentFontSize`},{name:`--b-statistic-content-line-height`,fallback:`1.5`,desc:`Value line height.`,antd:`lineHeight`},{name:`--b-statistic-content-font-family`,fallback:`inherit`,desc:`Value font family.`,antd:`fontFamily`},{name:`--b-statistic-content-font-weight`,fallback:`400`,desc:`Value font weight.`,antd:`-`},{name:`--b-statistic-prefix-color`,fallback:`inherit`,desc:`Prefix color.`,antd:`colorText`},{name:`--b-statistic-prefix-font-size`,fallback:`inherit`,desc:`Prefix font size.`,antd:`-`},{name:`--b-statistic-prefix-margin-end`,fallback:`4px`,desc:`Gap between prefix and value (LTR right-edge).`,antd:`marginXXS`},{name:`--b-statistic-suffix-color`,fallback:`inherit`,desc:`Suffix color.`,antd:`colorText`},{name:`--b-statistic-suffix-font-size`,fallback:`inherit`,desc:`Suffix font size.`,antd:`-`},{name:`--b-statistic-suffix-margin-start`,fallback:`4px`,desc:`Gap between value and suffix.`,antd:`marginXXS`},{name:`--b-statistic-skeleton-color`,fallback:`oklch(92% 0.005 260)`,desc:`Skeleton base color (loading state).`,antd:`-`},{name:`--b-statistic-skeleton-highlight`,fallback:`oklch(96% 0.003 260)`,desc:`Skeleton shimmer highlight color.`,antd:`-`},{name:`--b-statistic-skeleton-width`,fallback:`96px`,desc:`Skeleton placeholder width.`,antd:`-`},{name:`--b-statistic-skeleton-height`,fallback:`1em`,desc:`Skeleton placeholder height.`,antd:`-`},{name:`--b-statistic-skeleton-radius`,fallback:`4px`,desc:`Skeleton corner radius.`,antd:`-`},{name:`--b-statistic-skeleton-duration`,fallback:`1.4s`,desc:`Skeleton shimmer animation duration.`,antd:`-`}]}},template:`
<div style="font-family:sans-serif;padding:2rem;max-width:980px;">
  <h2 style="margin:0 0 8px;font-size:18px;">BStatistic - Design Tokens</h2>
  <p style="margin:0 0 24px;font-size:13px;color:#595959;">
    Every CSS variable exposed by <code>BStatistic</code>, with default values and AntD source token.
    Override any of them on the component root selector or via inline <code>style</code>.
  </p>

  <h3 style="margin:0 0 8px;font-size:14px;">Live preview - default vs override</h3>
  <div style="display:flex;gap:3rem;align-items:flex-start;margin-bottom:32px;">
    <div style="flex:1;">
      <p style="margin:0 0 6px;font-size:12px;color:#595959;text-transform:uppercase;letter-spacing:.05em;">Default</p>
      <BStatistic title="Active users" :value="112893" suffix="USD" prefix="$" />
    </div>
    <div style="flex:1;">
      <p style="margin:0 0 6px;font-size:12px;color:#595959;text-transform:uppercase;letter-spacing:.05em;">Token overrides</p>
      <BStatistic
        title="Active users"
        :value="112893"
        suffix="USD"
        prefix="$"
        style="
          --b-statistic-title-color: oklch(54.6% 0.245 262.881);
          --b-statistic-content-color: oklch(40% 0.18 295);
          --b-statistic-content-font-size: 32px;
          --b-statistic-content-font-weight: 700;
          --b-statistic-prefix-color: oklch(54.6% 0.245 262.881);
          --b-statistic-suffix-color: oklch(60% 0.01 260);
        "
      />
    </div>
  </div>

  <h3 style="margin:0 0 8px;font-size:14px;">Token reference</h3>
  <table style="width:100%;border-collapse:collapse;font-size:13px;">
    <thead>
      <tr style="text-align:left;border-bottom:1px solid oklch(85% 0.005 260);">
        <th style="padding:8px;">CSS Variable</th>
        <th style="padding:8px;">Default</th>
        <th style="padding:8px;">AntD Token</th>
        <th style="padding:8px;">Description</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="t in tokens" :key="t.name" style="border-bottom:1px solid oklch(92% 0.005 260);">
        <td style="padding:8px;font-family:ui-monospace,monospace;color:oklch(40% 0.18 295);">{{ t.name }}</td>
        <td style="padding:8px;font-family:ui-monospace,monospace;">{{ t.fallback }}</td>
        <td style="padding:8px;font-family:ui-monospace,monospace;color:oklch(50% 0.01 260);">{{ t.antd }}</td>
        <td style="padding:8px;color:oklch(35% 0.01 260);">{{ t.desc }}</td>
      </tr>
    </tbody>
  </table>
</div>
    `})},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    title: 'Active Users',
    value: 112_893,
    precision: 2,
    decimalSeparator: '.',
    groupSeparator: ',',
    prefix: '',
    suffix: '',
    loading: false
  },
  render: args => ({
    components: {
      BStatistic
    },
    setup() {
      return {
        args
      };
    },
    template: \`<div style="padding:2rem;"><BStatistic v-bind="args" /></div>\`
  })
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: true
    },
    docs: {
      source: {
        code: \`<BStatistic title="Active Users" :value="112893" />\`
      }
    }
  },
  render: () => ({
    components: {
      BStatistic
    },
    template: \`
      <div style="padding:2rem;display:flex;gap:3rem;flex-wrap:wrap;">
        <BStatistic data-testid="basic" title="Active Users" :value="112893" />
        <BStatistic title="Account Balance (CNY)" :value="112893" :precision="2" />
      </div>
    \`
  }),
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const el = canvas.getByTestId('basic');
    expect(el.querySelector('.b-statistic__title')?.textContent).toBe('Active Users');
    expect(el.querySelector('.b-statistic__value')?.textContent).toBe('112,893');
  }
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  name: 'With Prefix / Suffix',
  parameters: {
    controls: {
      disable: true
    },
    docs: {
      source: {
        code: \`<BStatistic title="Feedback" :value="93" suffix="/ 100" />
<BStatistic title="Idle Rate" :value="42" suffix="%" :value-style="{ color: 'oklch(54% 0.16 145)' }" />
<BStatistic title="Cost" :value="1234.56" :precision="2" prefix="$" />\`
      }
    }
  },
  render: () => ({
    components: {
      BStatistic
    },
    template: \`
      <div style="padding:2rem;display:flex;gap:3rem;flex-wrap:wrap;">
        <BStatistic data-testid="px-suffix" title="Feedback" :value="93" suffix="/ 100" />
        <BStatistic
          title="Idle Rate"
          :value="42"
          suffix="%"
          :value-style="{ color: 'oklch(54% 0.16 145)' }"
        />
        <BStatistic title="Cost" :value="1234.56" :precision="2" prefix="$" />
      </div>
    \`
  }),
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const el = canvas.getByTestId('px-suffix');
    expect(el.querySelector('.b-statistic__suffix')?.textContent?.trim()).toBe('/ 100');
  }
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  name: 'Custom Formatter',
  parameters: {
    controls: {
      disable: true
    },
    docs: {
      source: {
        code: \`<BStatistic
  title="Account Balance"
  :value="1234567.89"
  :formatter="(v) => '¥' + Number(v).toLocaleString()"
/>\`
      }
    }
  },
  render: () => ({
    components: {
      BStatistic
    },
    setup() {
      const fmt = (v: number | string) => \`¥\${Number(v).toLocaleString()}\`;
      return {
        fmt
      };
    },
    template: \`
      <div style="padding:2rem;display:flex;gap:3rem;">
        <BStatistic data-testid="fmt" title="Account Balance" :value="1234567.89" :formatter="fmt" />
        <BStatistic title="Custom slot" :value="0.875">
          <template #formatter="{ value }">
            <span style="color:oklch(54% 0.16 145);font-weight:600;">
              {{ (Number(value) * 100).toFixed(1) }}%
            </span>
          </template>
        </BStatistic>
      </div>
    \`
  }),
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const el = canvas.getByTestId('fmt');
    expect(el.querySelector('.b-statistic__value')?.textContent?.trim()).toMatch(/^¥/);
  }
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: true
    },
    docs: {
      source: {
        code: \`<BStatistic title="Active Users" :value="0" loading />\`
      }
    }
  },
  render: () => ({
    components: {
      BStatistic
    },
    setup() {
      const loading = ref(true);
      return {
        loading
      };
    },
    template: \`
      <div style="padding:2rem;display:flex;flex-direction:column;gap:1rem;align-items:flex-start;">
        <button data-testid="toggle-loading" @click="loading = !loading">
          Toggle loading ({{ loading ? 'on' : 'off' }})
        </button>
        <BStatistic data-testid="loading" title="Active Users" :value="112893" :loading="loading" />
      </div>
    \`
  }),
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const el = canvas.getByTestId('loading');
    expect(el.querySelector('.b-statistic__skeleton')).not.toBeNull();
    const sk = el.querySelector('.b-statistic__skeleton') as HTMLElement;
    expect(sk.getAttribute('aria-busy')).toBe('true');
    expect(sk.getAttribute('aria-label')).toBe('Loading');
  }
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  name: 'Custom Separators (i18n)',
  parameters: {
    controls: {
      disable: true
    },
    docs: {
      source: {
        code: \`<BStatistic title="EU number" :value="1234567.89" :precision="2"
  groupSeparator="." decimalSeparator="," />\`
      }
    }
  },
  render: () => ({
    components: {
      BStatistic
    },
    template: \`
      <div style="padding:2rem;display:flex;gap:3rem;flex-wrap:wrap;">
        <BStatistic title="US default" :value="1234567.89" :precision="2" />
        <BStatistic
          data-testid="eu"
          title="DE / FR style"
          :value="1234567.89"
          :precision="2"
          group-separator="."
          decimal-separator=","
        />
        <BStatistic title="Spaced" :value="1234567" group-separator=" " />
      </div>
    \`
  }),
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const el = canvas.getByTestId('eu');
    expect(el.querySelector('.b-statistic__value')?.textContent?.trim()).toBe('1.234.567,89');
  }
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  name: 'Negative & Zero',
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => ({
    components: {
      BStatistic
    },
    template: \`
      <div style="padding:2rem;display:flex;gap:3rem;flex-wrap:wrap;">
        <BStatistic title="Loss" :value="-1234.56" :precision="2" prefix="$"
                    :value-style="{ color: 'oklch(50% 0.2 20)' }" />
        <BStatistic title="Zero" :value="0" />
      </div>
    \`
  })
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  name: 'Timer: Countdown',
  parameters: {
    controls: {
      disable: true
    },
    docs: {
      source: {
        code: \`<BStatisticTimer title="Promotion ends in"
  :value="Date.now() + 1000 * 60 * 60 * 24 * 2"
  format="D HH:mm:ss" />\`
      }
    }
  },
  render: () => ({
    components: {
      BStatisticTimer
    },
    setup() {
      const target = Date.now() + 1000 * 60 * 60 * 24 * 2 + 12_345;
      return {
        target
      };
    },
    template: \`
      <div style="padding:2rem;display:flex;gap:3rem;flex-wrap:wrap;">
        <BStatisticTimer
          data-testid="cd1"
          title="Promotion ends in"
          :value="target"
          format="D [days] HH:mm:ss"
        />
        <BStatisticTimer title="Next launch" :value="target" format="HH:mm:ss" />
        <BStatisticTimer title="Sub-second" :value="target" format="HH:mm:ss.SSS" />
      </div>
    \`
  }),
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const el = canvas.getByTestId('cd1');
    expect(el.querySelector('.b-statistic__title')?.textContent).toBe('Promotion ends in');
    const v = el.querySelector('.b-statistic__value')?.textContent ?? '';
    expect(v).toMatch(/days/);
  }
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  name: 'Timer: Countup',
  parameters: {
    controls: {
      disable: true
    },
    docs: {
      source: {
        code: \`<BStatisticTimer type="countup" :value="Date.now()" />\`
      }
    }
  },
  render: () => ({
    components: {
      BStatisticTimer
    },
    setup() {
      const start = Date.now();
      return {
        start
      };
    },
    template: \`
      <div style="padding:2rem;">
        <BStatisticTimer data-testid="cu" type="countup" title="Session length" :value="start" />
      </div>
    \`
  }),
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const el = canvas.getByTestId('cu');
    const v = el.querySelector('.b-statistic__value')?.textContent ?? '';
    expect(v).toMatch(/^\\d{2}:\\d{2}:\\d{2}$/);
  }
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  name: 'Accessibility (roles & live region)',
  parameters: {
    controls: {
      disable: true
    },
    docs: {
      description: {
        story: 'Verifies that the value region is a polite ARIA live region, ' + 'decorative prefix/suffix elements are <code>aria-hidden</code>, ' + 'and the loading skeleton announces its busy state via <code>role="status"</code> ' + 'and <code>aria-busy="true"</code>.'
      }
    }
  },
  render: () => ({
    components: {
      BStatistic
    },
    setup() {
      const value = ref(100);
      const loading = ref(false);
      function bump() {
        value.value += 100;
      }
      return {
        value,
        loading,
        bump
      };
    },
    template: \`
      <div style="padding:2rem;display:flex;flex-direction:column;gap:1rem;align-items:flex-start;">
        <div style="display:flex;gap:0.5rem;">
          <button data-testid="bump" @click="bump">Bump value</button>
          <button data-testid="toggle-loading" @click="loading = !loading">Toggle loading</button>
        </div>
        <BStatistic
          data-testid="a11y"
          title="Live updating count"
          :value="value"
          prefix="$"
          suffix="USD"
          :loading="loading"
        />
      </div>
    \`
  }),
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const el = canvas.getByTestId('a11y');

    // Live region present
    const content = el.querySelector('.b-statistic__content');
    expect(content?.getAttribute('aria-live')).toBe('polite');

    // Title rendered
    expect(el.querySelector('.b-statistic__title')?.textContent).toBe('Live updating count');

    // Decorative prefix/suffix are aria-hidden
    expect(el.querySelector('.b-statistic__prefix')?.getAttribute('aria-hidden')).toBe('true');
    expect(el.querySelector('.b-statistic__suffix')?.getAttribute('aria-hidden')).toBe('true');

    // Trigger an update - keyboard activation of the bump button
    const bump = canvas.getByTestId('bump');
    bump.focus();
    expect(document.activeElement).toBe(bump);
    bump.click();
    await new Promise(r => setTimeout(r, 30));
    expect(el.querySelector('.b-statistic__value')?.textContent?.trim()).toBe('200');

    // Loading switches to skeleton
    const toggle = canvas.getByTestId('toggle-loading');
    toggle.click();
    await new Promise(r => setTimeout(r, 30));
    const sk = el.querySelector('.b-statistic__skeleton') as HTMLElement | null;
    expect(sk).not.toBeNull();
    expect(sk!.getAttribute('role')).toBe('status');
    expect(sk!.getAttribute('aria-busy')).toBe('true');
  }
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  name: 'Theming (override CSS vars)',
  parameters: {
    controls: {
      disable: true
    },
    docs: {
      description: {
        story: 'Override <code>--b-statistic-*</code> CSS variables to retheme the component. ' + 'This story overrides title color, content size, content color, and skeleton colors.'
      }
    }
  },
  render: () => ({
    components: {
      BStatistic
    },
    template: \`
      <div style="padding:2rem;display:flex;flex-direction:column;gap:1.5rem;align-items:flex-start;">
        <p style="font-size:12px;color:#595959;margin:0;">Default</p>
        <BStatistic title="Active Users" :value="112893" />
        <p style="font-size:12px;color:#595959;margin:0;">Themed (3+ overrides)</p>
        <BStatistic
          title="Active Users"
          :value="112893"
          style="
            --b-statistic-title-color: oklch(54.6% 0.245 262.881);
            --b-statistic-title-font-size: 12px;
            --b-statistic-content-color: oklch(40% 0.18 295);
            --b-statistic-content-font-size: 36px;
            --b-statistic-content-font-weight: 700;
          "
        />
      </div>
    \`
  })
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  name: 'Interaction – full flow',
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => ({
    components: {
      BStatistic
    },
    setup() {
      const loading = ref(false);
      const value = ref<number | string>(1234.5);
      const precision = ref<number | undefined>(2);
      function toggleLoading() {
        loading.value = !loading.value;
      }
      function bump() {
        value.value = Number(value.value) + 1;
      }
      function setString() {
        value.value = 'N/A';
        precision.value = undefined;
      }
      return {
        loading,
        value,
        precision,
        toggleLoading,
        bump,
        setString
      };
    },
    template: \`
      <div style="padding:2rem;display:flex;flex-direction:column;gap:0.75rem;align-items:flex-start;">
        <div style="display:flex;gap:0.5rem;">
          <button data-testid="bump" @click="bump">+1</button>
          <button data-testid="loading" @click="toggleLoading">Toggle loading</button>
          <button data-testid="string" @click="setString">Set N/A (string)</button>
        </div>
        <BStatistic
          data-testid="int"
          title="Live"
          :value="value"
          :precision="precision"
          :loading="loading"
          prefix="$"
        />
      </div>
    \`
  }),
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const el = canvas.getByTestId('int');

    // Initial render
    expect(el.querySelector('.b-statistic__value')?.textContent?.trim()).toBe('1,234.50');

    // Bump
    canvas.getByTestId('bump').click();
    await new Promise(r => setTimeout(r, 30));
    expect(el.querySelector('.b-statistic__value')?.textContent?.trim()).toBe('1,235.50');

    // Loading
    canvas.getByTestId('loading').click();
    await new Promise(r => setTimeout(r, 30));
    expect(el.querySelector('.b-statistic__skeleton')).not.toBeNull();
    canvas.getByTestId('loading').click();
    await new Promise(r => setTimeout(r, 30));

    // String value
    canvas.getByTestId('string').click();
    await new Promise(r => setTimeout(r, 30));
    expect(el.querySelector('.b-statistic__value')?.textContent?.trim()).toBe('N/A');
  }
}`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  name: 'Design Tokens',
  parameters: {
    controls: {
      disable: true
    },
    docs: {
      description: {
        story: 'Reference table of every <code>--b-statistic-*</code> CSS custom property. ' + 'Override these on the component root selector (or via a wrapping class) to retheme. ' + 'Use this story as living documentation of the available tokens.'
      }
    }
  },
  render: () => ({
    components: {
      BStatistic
    },
    setup() {
      const tokens = [
      // ── Title ──
      {
        name: '--b-statistic-title-color',
        fallback: 'oklch(45% 0.02 260)',
        desc: 'Title text color.',
        antd: 'colorTextDescription'
      }, {
        name: '--b-statistic-title-font-size',
        fallback: '14px',
        desc: 'Title font size.',
        antd: 'titleFontSize'
      }, {
        name: '--b-statistic-title-line-height',
        fallback: '1.5715',
        desc: 'Title line height.',
        antd: 'lineHeight'
      }, {
        name: '--b-statistic-title-margin-bottom',
        fallback: '4px',
        desc: 'Spacing between title and value.',
        antd: 'marginXXS'
      },
      // ── Content ──
      {
        name: '--b-statistic-content-color',
        fallback: 'oklch(20% 0.02 260)',
        desc: 'Value text color.',
        antd: 'colorTextHeading'
      }, {
        name: '--b-statistic-content-font-size',
        fallback: '24px',
        desc: 'Value font size.',
        antd: 'contentFontSize'
      }, {
        name: '--b-statistic-content-line-height',
        fallback: '1.5',
        desc: 'Value line height.',
        antd: 'lineHeight'
      }, {
        name: '--b-statistic-content-font-family',
        fallback: 'inherit',
        desc: 'Value font family.',
        antd: 'fontFamily'
      }, {
        name: '--b-statistic-content-font-weight',
        fallback: '400',
        desc: 'Value font weight.',
        antd: '-'
      },
      // ── Prefix / Suffix ──
      {
        name: '--b-statistic-prefix-color',
        fallback: 'inherit',
        desc: 'Prefix color.',
        antd: 'colorText'
      }, {
        name: '--b-statistic-prefix-font-size',
        fallback: 'inherit',
        desc: 'Prefix font size.',
        antd: '-'
      }, {
        name: '--b-statistic-prefix-margin-end',
        fallback: '4px',
        desc: 'Gap between prefix and value (LTR right-edge).',
        antd: 'marginXXS'
      }, {
        name: '--b-statistic-suffix-color',
        fallback: 'inherit',
        desc: 'Suffix color.',
        antd: 'colorText'
      }, {
        name: '--b-statistic-suffix-font-size',
        fallback: 'inherit',
        desc: 'Suffix font size.',
        antd: '-'
      }, {
        name: '--b-statistic-suffix-margin-start',
        fallback: '4px',
        desc: 'Gap between value and suffix.',
        antd: 'marginXXS'
      },
      // ── Skeleton ──
      {
        name: '--b-statistic-skeleton-color',
        fallback: 'oklch(92% 0.005 260)',
        desc: 'Skeleton base color (loading state).',
        antd: '-'
      }, {
        name: '--b-statistic-skeleton-highlight',
        fallback: 'oklch(96% 0.003 260)',
        desc: 'Skeleton shimmer highlight color.',
        antd: '-'
      }, {
        name: '--b-statistic-skeleton-width',
        fallback: '96px',
        desc: 'Skeleton placeholder width.',
        antd: '-'
      }, {
        name: '--b-statistic-skeleton-height',
        fallback: '1em',
        desc: 'Skeleton placeholder height.',
        antd: '-'
      }, {
        name: '--b-statistic-skeleton-radius',
        fallback: '4px',
        desc: 'Skeleton corner radius.',
        antd: '-'
      }, {
        name: '--b-statistic-skeleton-duration',
        fallback: '1.4s',
        desc: 'Skeleton shimmer animation duration.',
        antd: '-'
      }];
      return {
        tokens
      };
    },
    template: \`
<div style="font-family:sans-serif;padding:2rem;max-width:980px;">
  <h2 style="margin:0 0 8px;font-size:18px;">BStatistic - Design Tokens</h2>
  <p style="margin:0 0 24px;font-size:13px;color:#595959;">
    Every CSS variable exposed by <code>BStatistic</code>, with default values and AntD source token.
    Override any of them on the component root selector or via inline <code>style</code>.
  </p>

  <h3 style="margin:0 0 8px;font-size:14px;">Live preview - default vs override</h3>
  <div style="display:flex;gap:3rem;align-items:flex-start;margin-bottom:32px;">
    <div style="flex:1;">
      <p style="margin:0 0 6px;font-size:12px;color:#595959;text-transform:uppercase;letter-spacing:.05em;">Default</p>
      <BStatistic title="Active users" :value="112893" suffix="USD" prefix="$" />
    </div>
    <div style="flex:1;">
      <p style="margin:0 0 6px;font-size:12px;color:#595959;text-transform:uppercase;letter-spacing:.05em;">Token overrides</p>
      <BStatistic
        title="Active users"
        :value="112893"
        suffix="USD"
        prefix="$"
        style="
          --b-statistic-title-color: oklch(54.6% 0.245 262.881);
          --b-statistic-content-color: oklch(40% 0.18 295);
          --b-statistic-content-font-size: 32px;
          --b-statistic-content-font-weight: 700;
          --b-statistic-prefix-color: oklch(54.6% 0.245 262.881);
          --b-statistic-suffix-color: oklch(60% 0.01 260);
        "
      />
    </div>
  </div>

  <h3 style="margin:0 0 8px;font-size:14px;">Token reference</h3>
  <table style="width:100%;border-collapse:collapse;font-size:13px;">
    <thead>
      <tr style="text-align:left;border-bottom:1px solid oklch(85% 0.005 260);">
        <th style="padding:8px;">CSS Variable</th>
        <th style="padding:8px;">Default</th>
        <th style="padding:8px;">AntD Token</th>
        <th style="padding:8px;">Description</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="t in tokens" :key="t.name" style="border-bottom:1px solid oklch(92% 0.005 260);">
        <td style="padding:8px;font-family:ui-monospace,monospace;color:oklch(40% 0.18 295);">{{ t.name }}</td>
        <td style="padding:8px;font-family:ui-monospace,monospace;">{{ t.fallback }}</td>
        <td style="padding:8px;font-family:ui-monospace,monospace;color:oklch(50% 0.01 260);">{{ t.antd }}</td>
        <td style="padding:8px;color:oklch(35% 0.01 260);">{{ t.desc }}</td>
      </tr>
    </tbody>
  </table>
</div>
    \`
  })
}`,...x.parameters?.docs?.source}}},S=[`Playground`,`Basic`,`WithPrefixSuffix`,`CustomFormatter`,`Loading`,`Separators`,`NegativeAndZero`,`Countdown`,`Countup`,`Accessibility`,`Theming`,`InteractionTests`,`DesignTokens`]}))();export{v as Accessibility,u as Basic,g as Countdown,_ as Countup,f as CustomFormatter,x as DesignTokens,b as InteractionTests,p as Loading,h as NegativeAndZero,l as Playground,m as Separators,y as Theming,d as WithPrefixSuffix,S as __namedExportsOrder,c as default};