import{n as e}from"./chunk-BneVvdWh.js";import{X as t,i as n}from"./iframe-CUduMsgl.js";import{at as r,ct as i,it as a,ot as o,rt as s,st as c,t as l}from"./components-BVFKI9Ow.js";var u,d,f,p,m,h,g,_,v,y,b,x,S,C,w,T,E,D;e((()=>{l(),i(),n(),{expect:u,userEvent:d,waitFor:f,within:p}=__STORYBOOK_MODULE_TEST__,m={title:`Data Entry/ColorPicker`,component:s,tags:[`autodocs`],argTypes:{modelValue:{control:`color`,description:`Current color value (v-model).`,table:{category:`Two-Way Binding Props`}},open:{control:`boolean`,description:`Controlled open state (v-model:open).`,table:{category:`Two-Way Binding Props`}},defaultValue:{control:`color`,description:`Default color when uncontrolled.`,table:{defaultValue:{summary:`#1677ff`}}},disabled:{control:`boolean`,description:`Whether the picker is disabled.`,table:{defaultValue:{summary:`false`}}},size:{control:`select`,options:Object.values(o),description:`Size of the trigger.`,table:{defaultValue:{summary:o.Medium}}},trigger:{control:`select`,options:Object.values(c),description:`How the popup is triggered.`,table:{defaultValue:{summary:c.Click}}},placement:{control:`select`,options:Object.values(r),description:`Popup placement.`,table:{defaultValue:{summary:r.BottomLeft}}},format:{control:`select`,options:Object.values(a),description:`Controlled color format.`},defaultFormat:{control:`select`,options:Object.values(a),description:`Default color format.`,table:{defaultValue:{summary:a.Hex}}},disabledAlpha:{control:`boolean`,description:`Disable the alpha channel slider.`,table:{defaultValue:{summary:`false`}}},disabledFormat:{control:`boolean`,description:`Disable format switching.`,table:{defaultValue:{summary:`false`}}},showText:{control:`boolean`,description:`Show color value text next to swatch.`,table:{defaultValue:{summary:`false`}}},allowClear:{control:`boolean`,description:`Allow clearing the selected color.`,table:{defaultValue:{summary:`false`}}},arrow:{control:`boolean`,description:`Whether the popup has an arrow.`,table:{defaultValue:{summary:`true`}}},destroyOnHidden:{control:`boolean`,description:`Destroy popup DOM when closed.`,table:{defaultValue:{summary:`false`}}}},parameters:{docs:{description:{component:`The <code>BColorPicker</code> component provides a rich color selection interface with saturation panel, hue/alpha sliders, format switching, and preset colors.<br><br>Supports hex, RGB, HSL, and HSB formats. Full keyboard and screen-reader accessible.`}}}},h={args:{defaultValue:`#1677ff`,disabled:!1,size:`md`,trigger:`click`,placement:`bottom-left`,defaultFormat:`hex`,disabledAlpha:!1,disabledFormat:!1,showText:!1,allowClear:!1,arrow:!0,destroyOnHidden:!1},render:e=>({components:{BColorPicker:s},setup(){return{args:e,color:t(e.defaultValue)}},template:`
      <div style="padding: 40px 40px 300px;">
        <BColorPicker v-bind="args" v-model="color" />
        <p style="margin-top: 16px; font-size: 14px; color: #666;">Selected: {{ color }}</p>
      </div>
    `})},g={render:()=>({components:{BColorPicker:s},template:`
      <div style="display: flex; gap: 16px; align-items: center; padding: 40px 40px 300px;">
        <BColorPicker size="sm" default-value="#1677ff" />
        <BColorPicker size="md" default-value="#52c41a" />
        <BColorPicker size="lg" default-value="#faad14" />
      </div>
    `})},_={render:()=>({components:{BColorPicker:s},template:`
      <div style="padding: 40px 40px 300px;">
        <BColorPicker default-value="#1677ff" :show-text="true" />
      </div>
    `})},v={render:()=>({components:{BColorPicker:s},setup(){return{presets:[{label:`Recommended`,colors:[`#F5222D`,`#FA8C16`,`#FADB14`,`#8BBB11`,`#52C41A`,`#13A8A8`,`#1677FF`,`#2F54EB`,`#722ED1`,`#EB2F96`]},{label:`Recent`,colors:[`#F5222D`,`#1677FF`,`#52C41A`]}]}},template:`
      <div style="padding: 40px 40px 300px;">
        <BColorPicker default-value="#1677ff" :presets="presets" />
      </div>
    `})},y={render:()=>({components:{BColorPicker:s},template:`
      <div style="padding: 40px 40px 300px;">
        <BColorPicker default-value="#1677ff" disabled />
      </div>
    `})},b={render:()=>({components:{BColorPicker:s},setup(){return{hexColor:t(`#1677ff`),rgbColor:t(`#52c41a`),hslColor:t(`#faad14`)}},template:`
      <div style="display: flex; flex-direction: column; gap: 16px; padding: 40px 40px 300px;">
        <div>
          <span style="display: inline-block; width: 60px; font-size: 14px;">HEX:</span>
          <BColorPicker v-model="hexColor" default-format="hex" :show-text="true" />
        </div>
        <div>
          <span style="display: inline-block; width: 60px; font-size: 14px;">RGB:</span>
          <BColorPicker v-model="rgbColor" default-format="rgb" :show-text="true" />
        </div>
        <div>
          <span style="display: inline-block; width: 60px; font-size: 14px;">HSL:</span>
          <BColorPicker v-model="hslColor" default-format="hsl" :show-text="true" />
        </div>
      </div>
    `})},x={render:()=>({components:{BColorPicker:s},template:`
      <div style="padding: 40px 40px 300px;">
        <BColorPicker default-value="#1677ff" allow-clear :show-text="true" />
      </div>
    `})},S={render:()=>({components:{BColorPicker:s},setup(){let e=t(`#1677ff`),n=[];return{color:e,events:n,onChange:e=>{n.push(`change: ${e}`)},onComplete:e=>{n.push(`complete: ${e}`)}}},template:`
      <div style="padding: 40px 40px 300px;">
        <BColorPicker
          v-model="color"
          :show-text="true"
          @change="onChange"
          @change-complete="onComplete"
        />
        <div style="margin-top: 16px;">
          <input type="color" v-model="color" aria-label="Native color input" style="margin-right: 8px;" />
          <code>{{ color }}</code>
        </div>
      </div>
    `})},C={render:()=>({components:{BColorPicker:s},template:`
      <div style="padding: 40px 120px 300px;">
        <BColorPicker
          default-value="#1677ff"
          :show-text="true"
          :presets="[{ label: 'Brand', colors: ['#1677ff', '#52c41a', '#faad14'] }]"
          data-testid="a11y-picker"
        />
      </div>
    `}),play:async({canvasElement:e})=>{let t=p(e).getByRole(`button`);u(t).toHaveAttribute(`aria-expanded`,`false`),u(t).toHaveAttribute(`aria-haspopup`,`dialog`),u(t).toHaveAttribute(`tabindex`,`0`),u(t.getAttribute(`aria-label`)).toMatch(/^Color picker:/),t.focus(),await d.keyboard(`{Enter}`),await f(()=>{u(t).toHaveAttribute(`aria-expanded`,`true`)});let n=e.querySelector(`[role="dialog"]`);u(n).toBeTruthy(),u(n).toHaveAttribute(`aria-label`,`Color picker`),u(e.querySelectorAll(`[role="slider"]`).length).toBeGreaterThanOrEqual(2),await d.keyboard(`{Escape}`),await f(()=>{u(t).toHaveAttribute(`aria-expanded`,`false`)})}},w={render:()=>({components:{BColorPicker:s},setup(){return{color:t(`#1677ff`)}},template:`
      <div style="padding: 40px 120px 300px;">
        <BColorPicker v-model="color" :show-text="true" allow-clear />
        <p data-testid="color-display" style="margin-top: 8px;">{{ color }}</p>
      </div>
    `}),play:async({canvasElement:e})=>{let t=p(e).getByRole(`button`);await d.click(t),await f(()=>{u(t).toHaveAttribute(`aria-expanded`,`true`)}),u(e.querySelector(`.b-color-picker__panel--open`)).toBeTruthy();let n=e.querySelector(`.b-color-picker__format-btn`);u(n).toBeTruthy(),n&&await d.click(n),e.querySelector(`.b-color-picker__panel`)?.focus(),await d.keyboard(`{Escape}`),await f(()=>{u(t).toHaveAttribute(`aria-expanded`,`false`)})}},T={render:()=>({components:{BColorPicker:s},template:`
      <div style="padding: 40px 40px 300px;">
        <h4 style="margin-bottom: 16px; font-size: 14px; color: #666;">Default</h4>
        <BColorPicker default-value="#1677ff" />

        <h4 style="margin: 24px 0 16px; font-size: 14px; color: #666;">Custom Tokens</h4>
        <div
          class="b-color-picker"
          style="
            --b-color-picker-border-radius: 12px;
            --b-color-picker-trigger-height: 48px;
            --b-color-picker-swatch-size: 28px;
            --b-color-picker-bg: #fafafa;
            --b-color-picker-border-color: #91caff;
            --b-color-picker-shadow: 0 4px 12px rgba(22, 119, 255, 0.15);
          "
        >
          <BColorPicker default-value="#722ed1" />
        </div>

        <h4 style="margin: 24px 0 16px; font-size: 14px; color: #666;">Dark-style Override</h4>
        <div
          class="b-color-picker"
          style="
            --b-color-picker-bg: #1f1f1f;
            --b-color-picker-border-color: #424242;
            --b-color-picker-text-color: rgba(255, 255, 255, 0.88);
            --b-color-picker-input-bg: #141414;
            --b-color-picker-input-border: #424242;
          "
        >
          <BColorPicker default-value="#52c41a" :show-text="true" />
        </div>
      </div>
    `})},E={render:()=>({setup(){return{tokens:[{variable:`--b-color-picker-width`,default:`234px`,description:`Width of the color picker panel`},{variable:`--b-color-picker-handler-size`,default:`16px`,description:`Size of the saturation/slider handles`},{variable:`--b-color-picker-handler-size-sm`,default:`12px`,description:`Small handle size`},{variable:`--b-color-picker-slider-height`,default:`8px`,description:`Height of hue/alpha sliders`},{variable:`--b-color-picker-preview-size`,default:`28px`,description:`Size of the color preview circle`},{variable:`--b-color-picker-alpha-input-width`,default:`44px`,description:`Width of the alpha percentage input`},{variable:`--b-color-picker-border-width`,default:`1px`,description:`Border width for trigger and inputs`},{variable:`--b-color-picker-border-radius`,default:`6px`,description:`Border radius for trigger and panel`},{variable:`--b-color-picker-border-radius-sm`,default:`4px`,description:`Small border radius for inner elements`},{variable:`--b-color-picker-font-size`,default:`14px`,description:`Base font size`},{variable:`--b-color-picker-line-height`,default:`1.5714`,description:`Base line height`},{variable:`--b-color-picker-bg`,default:`#ffffff`,description:`Panel and trigger background`},{variable:`--b-color-picker-border-color`,default:`#d9d9d9`,description:`Border color for trigger and dividers`},{variable:`--b-color-picker-shadow`,default:`0 6px 16px 0 rgba(0,0,0,0.08), …`,description:`Panel box shadow`},{variable:`--b-color-picker-trigger-height`,default:`32px`,description:`Default trigger height`},{variable:`--b-color-picker-trigger-height-sm`,default:`24px`,description:`Small trigger height`},{variable:`--b-color-picker-trigger-height-lg`,default:`40px`,description:`Large trigger height`},{variable:`--b-color-picker-swatch-size`,default:`16px`,description:`Color swatch size in trigger`},{variable:`--b-color-picker-swatch-size-sm`,default:`12px`,description:`Small swatch size`},{variable:`--b-color-picker-swatch-size-lg`,default:`20px`,description:`Large swatch size`},{variable:`--b-color-picker-panel-padding`,default:`12px`,description:`Panel internal padding`},{variable:`--b-color-picker-saturation-height`,default:`160px`,description:`Height of the saturation picker area`},{variable:`--b-color-picker-color-block-border-radius`,default:`4px`,description:`Border radius for preset color blocks`},{variable:`--b-color-picker-input-bg`,default:`#ffffff`,description:`Input field background`},{variable:`--b-color-picker-input-border`,default:`#d9d9d9`,description:`Input field border color`},{variable:`--b-color-picker-text-color`,default:`rgba(0,0,0,0.88)`,description:`Primary text color`},{variable:`--b-color-picker-text-color-secondary`,default:`rgba(0,0,0,0.65)`,description:`Secondary text color`},{variable:`--b-color-picker-gap`,default:`8px`,description:`Spacing between panel sections`},{variable:`--b-color-picker-transition-duration`,default:`200ms`,description:`Transition duration for animations`}]}},template:`
      <div style="padding: 24px; font-family: -apple-system, sans-serif;">
        <h3 style="margin-bottom: 16px; font-size: 18px;">BColorPicker Design Tokens</h3>
        <p style="margin-bottom: 16px; font-size: 14px; color: #666;">
          All CSS custom properties are scoped to <code>.b-color-picker</code>. Override them on an ancestor to customize.
        </p>
        <table style="width: 100%; border-collapse: collapse; font-size: 13px;">
          <thead>
            <tr style="border-bottom: 2px solid #eee; text-align: left;">
              <th style="padding: 8px 12px;">Variable</th>
              <th style="padding: 8px 12px;">Default</th>
              <th style="padding: 8px 12px;">Description</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="token in tokens" :key="token.variable" style="border-bottom: 1px solid #f0f0f0;">
              <td style="padding: 8px 12px; font-family: monospace; color: #c41d7f;">{{ token.variable }}</td>
              <td style="padding: 8px 12px; font-family: monospace;">{{ token.default }}</td>
              <td style="padding: 8px 12px;">{{ token.description }}</td>
            </tr>
          </tbody>
        </table>
      </div>
    `})},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    defaultValue: '#1677ff',
    disabled: false,
    size: 'md' as const,
    trigger: 'click' as const,
    placement: 'bottom-left' as const,
    defaultFormat: 'hex' as const,
    disabledAlpha: false,
    disabledFormat: false,
    showText: false,
    allowClear: false,
    arrow: true,
    destroyOnHidden: false
  },
  render: args => ({
    components: {
      BColorPicker
    },
    setup() {
      const color = ref(args.defaultValue);
      return {
        args,
        color
      };
    },
    template: \`
      <div style="padding: 40px 40px 300px;">
        <BColorPicker v-bind="args" v-model="color" />
        <p style="margin-top: 16px; font-size: 14px; color: #666;">Selected: {{ color }}</p>
      </div>
    \`
  })
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      BColorPicker
    },
    template: \`
      <div style="display: flex; gap: 16px; align-items: center; padding: 40px 40px 300px;">
        <BColorPicker size="sm" default-value="#1677ff" />
        <BColorPicker size="md" default-value="#52c41a" />
        <BColorPicker size="lg" default-value="#faad14" />
      </div>
    \`
  })
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      BColorPicker
    },
    template: \`
      <div style="padding: 40px 40px 300px;">
        <BColorPicker default-value="#1677ff" :show-text="true" />
      </div>
    \`
  })
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      BColorPicker
    },
    setup() {
      const presets = [{
        label: 'Recommended',
        colors: ['#F5222D', '#FA8C16', '#FADB14', '#8BBB11', '#52C41A', '#13A8A8', '#1677FF', '#2F54EB', '#722ED1', '#EB2F96']
      }, {
        label: 'Recent',
        colors: ['#F5222D', '#1677FF', '#52C41A']
      }];
      return {
        presets
      };
    },
    template: \`
      <div style="padding: 40px 40px 300px;">
        <BColorPicker default-value="#1677ff" :presets="presets" />
      </div>
    \`
  })
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      BColorPicker
    },
    template: \`
      <div style="padding: 40px 40px 300px;">
        <BColorPicker default-value="#1677ff" disabled />
      </div>
    \`
  })
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      BColorPicker
    },
    setup() {
      const hexColor = ref('#1677ff');
      const rgbColor = ref('#52c41a');
      const hslColor = ref('#faad14');
      return {
        hexColor,
        rgbColor,
        hslColor
      };
    },
    template: \`
      <div style="display: flex; flex-direction: column; gap: 16px; padding: 40px 40px 300px;">
        <div>
          <span style="display: inline-block; width: 60px; font-size: 14px;">HEX:</span>
          <BColorPicker v-model="hexColor" default-format="hex" :show-text="true" />
        </div>
        <div>
          <span style="display: inline-block; width: 60px; font-size: 14px;">RGB:</span>
          <BColorPicker v-model="rgbColor" default-format="rgb" :show-text="true" />
        </div>
        <div>
          <span style="display: inline-block; width: 60px; font-size: 14px;">HSL:</span>
          <BColorPicker v-model="hslColor" default-format="hsl" :show-text="true" />
        </div>
      </div>
    \`
  })
}`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      BColorPicker
    },
    template: \`
      <div style="padding: 40px 40px 300px;">
        <BColorPicker default-value="#1677ff" allow-clear :show-text="true" />
      </div>
    \`
  })
}`,...x.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      BColorPicker
    },
    setup() {
      const color = ref('#1677ff');
      const events: string[] = [];
      const onChange = (val: string) => {
        events.push(\`change: \${val}\`);
      };
      const onComplete = (val: string) => {
        events.push(\`complete: \${val}\`);
      };
      return {
        color,
        events,
        onChange,
        onComplete
      };
    },
    template: \`
      <div style="padding: 40px 40px 300px;">
        <BColorPicker
          v-model="color"
          :show-text="true"
          @change="onChange"
          @change-complete="onComplete"
        />
        <div style="margin-top: 16px;">
          <input type="color" v-model="color" aria-label="Native color input" style="margin-right: 8px;" />
          <code>{{ color }}</code>
        </div>
      </div>
    \`
  })
}`,...S.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      BColorPicker
    },
    template: \`
      <div style="padding: 40px 120px 300px;">
        <BColorPicker
          default-value="#1677ff"
          :show-text="true"
          :presets="[{ label: 'Brand', colors: ['#1677ff', '#52c41a', '#faad14'] }]"
          data-testid="a11y-picker"
        />
      </div>
    \`
  }),
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const trigger = canvas.getByRole('button');

    // Verify trigger accessibility
    expect(trigger).toHaveAttribute('aria-expanded', 'false');
    expect(trigger).toHaveAttribute('aria-haspopup', 'dialog');
    expect(trigger).toHaveAttribute('tabindex', '0');
    expect(trigger.getAttribute('aria-label')).toMatch(/^Color picker:/);

    // Focus the trigger, then open via keyboard
    trigger.focus();
    await userEvent.keyboard('{Enter}');
    await waitFor(() => {
      expect(trigger).toHaveAttribute('aria-expanded', 'true');
    });

    // Panel has dialog role
    const panel = canvasElement.querySelector('[role="dialog"]');
    expect(panel).toBeTruthy();
    expect(panel).toHaveAttribute('aria-label', 'Color picker');

    // Sliders have proper roles
    const sliders = canvasElement.querySelectorAll('[role="slider"]');
    expect(sliders.length).toBeGreaterThanOrEqual(2);

    // Close via Escape
    await userEvent.keyboard('{Escape}');
    await waitFor(() => {
      expect(trigger).toHaveAttribute('aria-expanded', 'false');
    });
  }
}`,...C.parameters?.docs?.source}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      BColorPicker
    },
    setup() {
      const color = ref('#1677ff');
      return {
        color
      };
    },
    template: \`
      <div style="padding: 40px 120px 300px;">
        <BColorPicker v-model="color" :show-text="true" allow-clear />
        <p data-testid="color-display" style="margin-top: 8px;">{{ color }}</p>
      </div>
    \`
  }),
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const trigger = canvas.getByRole('button');

    // Click to open
    await userEvent.click(trigger);
    await waitFor(() => {
      expect(trigger).toHaveAttribute('aria-expanded', 'true');
    });

    // Panel is visible
    const panel = canvasElement.querySelector('.b-color-picker__panel--open');
    expect(panel).toBeTruthy();

    // Format button exists and is clickable
    const formatBtn = canvasElement.querySelector('.b-color-picker__format-btn');
    expect(formatBtn).toBeTruthy();
    if (formatBtn) {
      await userEvent.click(formatBtn);
    }

    // Close via Escape (focus panel first so keydown is dispatched correctly)
    const panelEl = canvasElement.querySelector('.b-color-picker__panel') as HTMLElement;
    panelEl?.focus();
    await userEvent.keyboard('{Escape}');
    await waitFor(() => {
      expect(trigger).toHaveAttribute('aria-expanded', 'false');
    });
  }
}`,...w.parameters?.docs?.source}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      BColorPicker
    },
    template: \`
      <div style="padding: 40px 40px 300px;">
        <h4 style="margin-bottom: 16px; font-size: 14px; color: #666;">Default</h4>
        <BColorPicker default-value="#1677ff" />

        <h4 style="margin: 24px 0 16px; font-size: 14px; color: #666;">Custom Tokens</h4>
        <div
          class="b-color-picker"
          style="
            --b-color-picker-border-radius: 12px;
            --b-color-picker-trigger-height: 48px;
            --b-color-picker-swatch-size: 28px;
            --b-color-picker-bg: #fafafa;
            --b-color-picker-border-color: #91caff;
            --b-color-picker-shadow: 0 4px 12px rgba(22, 119, 255, 0.15);
          "
        >
          <BColorPicker default-value="#722ed1" />
        </div>

        <h4 style="margin: 24px 0 16px; font-size: 14px; color: #666;">Dark-style Override</h4>
        <div
          class="b-color-picker"
          style="
            --b-color-picker-bg: #1f1f1f;
            --b-color-picker-border-color: #424242;
            --b-color-picker-text-color: rgba(255, 255, 255, 0.88);
            --b-color-picker-input-bg: #141414;
            --b-color-picker-input-border: #424242;
          "
        >
          <BColorPicker default-value="#52c41a" :show-text="true" />
        </div>
      </div>
    \`
  })
}`,...T.parameters?.docs?.source}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  render: () => ({
    setup() {
      const tokens = [{
        variable: '--b-color-picker-width',
        default: '234px',
        description: 'Width of the color picker panel'
      }, {
        variable: '--b-color-picker-handler-size',
        default: '16px',
        description: 'Size of the saturation/slider handles'
      }, {
        variable: '--b-color-picker-handler-size-sm',
        default: '12px',
        description: 'Small handle size'
      }, {
        variable: '--b-color-picker-slider-height',
        default: '8px',
        description: 'Height of hue/alpha sliders'
      }, {
        variable: '--b-color-picker-preview-size',
        default: '28px',
        description: 'Size of the color preview circle'
      }, {
        variable: '--b-color-picker-alpha-input-width',
        default: '44px',
        description: 'Width of the alpha percentage input'
      }, {
        variable: '--b-color-picker-border-width',
        default: '1px',
        description: 'Border width for trigger and inputs'
      }, {
        variable: '--b-color-picker-border-radius',
        default: '6px',
        description: 'Border radius for trigger and panel'
      }, {
        variable: '--b-color-picker-border-radius-sm',
        default: '4px',
        description: 'Small border radius for inner elements'
      }, {
        variable: '--b-color-picker-font-size',
        default: '14px',
        description: 'Base font size'
      }, {
        variable: '--b-color-picker-line-height',
        default: '1.5714',
        description: 'Base line height'
      }, {
        variable: '--b-color-picker-bg',
        default: '#ffffff',
        description: 'Panel and trigger background'
      }, {
        variable: '--b-color-picker-border-color',
        default: '#d9d9d9',
        description: 'Border color for trigger and dividers'
      }, {
        variable: '--b-color-picker-shadow',
        default: '0 6px 16px 0 rgba(0,0,0,0.08), …',
        description: 'Panel box shadow'
      }, {
        variable: '--b-color-picker-trigger-height',
        default: '32px',
        description: 'Default trigger height'
      }, {
        variable: '--b-color-picker-trigger-height-sm',
        default: '24px',
        description: 'Small trigger height'
      }, {
        variable: '--b-color-picker-trigger-height-lg',
        default: '40px',
        description: 'Large trigger height'
      }, {
        variable: '--b-color-picker-swatch-size',
        default: '16px',
        description: 'Color swatch size in trigger'
      }, {
        variable: '--b-color-picker-swatch-size-sm',
        default: '12px',
        description: 'Small swatch size'
      }, {
        variable: '--b-color-picker-swatch-size-lg',
        default: '20px',
        description: 'Large swatch size'
      }, {
        variable: '--b-color-picker-panel-padding',
        default: '12px',
        description: 'Panel internal padding'
      }, {
        variable: '--b-color-picker-saturation-height',
        default: '160px',
        description: 'Height of the saturation picker area'
      }, {
        variable: '--b-color-picker-color-block-border-radius',
        default: '4px',
        description: 'Border radius for preset color blocks'
      }, {
        variable: '--b-color-picker-input-bg',
        default: '#ffffff',
        description: 'Input field background'
      }, {
        variable: '--b-color-picker-input-border',
        default: '#d9d9d9',
        description: 'Input field border color'
      }, {
        variable: '--b-color-picker-text-color',
        default: 'rgba(0,0,0,0.88)',
        description: 'Primary text color'
      }, {
        variable: '--b-color-picker-text-color-secondary',
        default: 'rgba(0,0,0,0.65)',
        description: 'Secondary text color'
      }, {
        variable: '--b-color-picker-gap',
        default: '8px',
        description: 'Spacing between panel sections'
      }, {
        variable: '--b-color-picker-transition-duration',
        default: '200ms',
        description: 'Transition duration for animations'
      }];
      return {
        tokens
      };
    },
    template: \`
      <div style="padding: 24px; font-family: -apple-system, sans-serif;">
        <h3 style="margin-bottom: 16px; font-size: 18px;">BColorPicker Design Tokens</h3>
        <p style="margin-bottom: 16px; font-size: 14px; color: #666;">
          All CSS custom properties are scoped to <code>.b-color-picker</code>. Override them on an ancestor to customize.
        </p>
        <table style="width: 100%; border-collapse: collapse; font-size: 13px;">
          <thead>
            <tr style="border-bottom: 2px solid #eee; text-align: left;">
              <th style="padding: 8px 12px;">Variable</th>
              <th style="padding: 8px 12px;">Default</th>
              <th style="padding: 8px 12px;">Description</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="token in tokens" :key="token.variable" style="border-bottom: 1px solid #f0f0f0;">
              <td style="padding: 8px 12px; font-family: monospace; color: #c41d7f;">{{ token.variable }}</td>
              <td style="padding: 8px 12px; font-family: monospace;">{{ token.default }}</td>
              <td style="padding: 8px 12px;">{{ token.description }}</td>
            </tr>
          </tbody>
        </table>
      </div>
    \`
  })
}`,...E.parameters?.docs?.source}}},D=[`Playground`,`Sizes`,`WithText`,`Presets`,`Disabled`,`Formats`,`AllowClear`,`Controlled`,`Accessibility`,`Interactions`,`Theming`,`DesignTokens`]}))();export{C as Accessibility,x as AllowClear,S as Controlled,E as DesignTokens,y as Disabled,b as Formats,w as Interactions,h as Playground,v as Presets,g as Sizes,T as Theming,_ as WithText,D as __namedExportsOrder,m as default};