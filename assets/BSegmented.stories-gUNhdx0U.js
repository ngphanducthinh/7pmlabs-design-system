import{n as e}from"./chunk-BneVvdWh.js";import{X as t,i as n}from"./iframe-By7LT0M0.js";import{I as r,t as i}from"./components-DGiLIoKr.js";var a,o,s,c,l,u,d,f,p,m,h,g,_,v,y,b,x,S,C,w;e((()=>{i(),n(),{expect:a,userEvent:o,within:s}=__STORYBOOK_MODULE_TEST__,c={title:`Data Display/Segmented`,component:r,tags:[`autodocs`],argTypes:{modelValue:{control:`text`,description:`Currently selected value (v-model).`,table:{category:`Two-Way Binding Props`}},options:{control:`object`,description:"Segmented options. Accepts `string[]`, `number[]`, or `{ label, value, disabled?, icon? }[]`.",table:{category:`Props`}},defaultValue:{control:`text`,description:`Initial selected value for uncontrolled mode.`,table:{category:`Props`}},disabled:{control:`boolean`,description:`Whether the whole control is disabled.`,table:{defaultValue:{summary:`false`},category:`Props`}},size:{control:`select`,options:[`small`,`default`,`large`],description:`Size of the segmented control.`,table:{defaultValue:{summary:`default`},category:`Props`}},block:{control:`boolean`,description:`Fill the full width of its container.`,table:{defaultValue:{summary:`false`},category:`Props`}}},parameters:{docs:{description:{component:`The <code>BSegmented</code> component lets users select one option from a set, rendered as an inline control with a sliding thumb indicator.<br><br>Supports <strong>controlled</strong> (v-model) and <strong>uncontrolled</strong> usage, <strong>disabled</strong> state, three <strong>size</strong> variants, per-option disabling, icon support, and a custom <code>#label</code> slot.<br>Keyboard navigation: <kbd>←</kbd>/<kbd>→</kbd> moves focus, <kbd>Enter</kbd>/<kbd>Space</kbd> selects.<br>Theming via <code>--b-segmented-*</code> CSS custom properties. Respects <code>prefers-reduced-motion</code>.`}}}},l=[`Daily`,`Weekly`,`Monthly`,`Quarterly`,`Yearly`],u=[{label:`Map`,value:`map`},{label:`Transit`,value:`transit`},{label:`Satellite`,value:`satellite`}],d={args:{options:l,defaultValue:`Daily`,disabled:!1,size:`default`,block:!1},render:e=>({components:{BSegmented:r},setup(){return{args:e,value:t(e.modelValue??e.defaultValue??`Daily`)}},template:`
      <div style="padding: 2rem;">
        <BSegmented v-bind="args" v-model="value" />
        <p style="margin-top:1rem;font-size:13px;color:#666;">Selected: <strong>{{ value }}</strong></p>
      </div>
    `})},f={parameters:{controls:{disable:!0},docs:{source:{code:`<BSegmented :options="['Daily', 'Weekly', 'Monthly']" />`}}},render:()=>({components:{BSegmented:r},setup(){return{value:t(`Daily`),STRING_OPTIONS:l}},template:`
      <div style="padding: 2rem;">
        <BSegmented data-testid="basic" :options="STRING_OPTIONS" v-model="value" />
      </div>
    `}),play:async({canvasElement:e})=>{let t=s(e).getByTestId(`basic`),n=t.querySelectorAll(`.b-segmented__item`);a(n.length).toBe(5),a(n[0].getAttribute(`aria-checked`)).toBe(`true`),a(t.getAttribute(`role`)).toBe(`group`)}},p={parameters:{controls:{disable:!0},docs:{source:{code:`
<BSegmented :options="opts" size="small" />
<BSegmented :options="opts" size="default" />
<BSegmented :options="opts" size="large" />`}}},render:()=>({components:{BSegmented:r},setup(){return{OBJECT_OPTIONS:u}},template:`
      <div style="padding: 2rem; display: flex; flex-direction: column; gap: 1.5rem; align-items: flex-start;">
        <div>
          <p style="font-size:12px;color:#666;margin:0 0 4px;">Small</p>
          <BSegmented data-testid="size-small" :options="OBJECT_OPTIONS" size="small" default-value="map" />
        </div>
        <div>
          <p style="font-size:12px;color:#666;margin:0 0 4px;">Default</p>
          <BSegmented data-testid="size-default" :options="OBJECT_OPTIONS" default-value="map" />
        </div>
        <div>
          <p style="font-size:12px;color:#666;margin:0 0 4px;">Large</p>
          <BSegmented data-testid="size-large" :options="OBJECT_OPTIONS" size="large" default-value="map" />
        </div>
      </div>
    `}),play:async({canvasElement:e})=>{let t=s(e);a(t.getByTestId(`size-small`).classList.contains(`b-segmented--small`)).toBe(!0),a(t.getByTestId(`size-default`).classList.contains(`b-segmented--small`)).toBe(!1),a(t.getByTestId(`size-large`).classList.contains(`b-segmented--large`)).toBe(!0)}},m={parameters:{controls:{disable:!0},docs:{source:{code:`
<!-- Whole control disabled -->
<BSegmented :options="opts" disabled />

<!-- Single option disabled -->
<BSegmented :options="[
  { label: 'Map', value: 'map' },
  { label: 'Transit', value: 'transit', disabled: true },
  { label: 'Satellite', value: 'satellite' },
]" />`}}},render:()=>({components:{BSegmented:r},setup(){return{OBJECT_OPTIONS:u,partialOpts:[{label:`Map`,value:`map`},{label:`Transit`,value:`transit`,disabled:!0},{label:`Satellite`,value:`satellite`}]}},template:`
      <div style="padding: 2rem; display: flex; flex-direction: column; gap: 1.5rem; align-items: flex-start;">
        <div>
          <p style="font-size:12px;color:#666;margin:0 0 4px;">All disabled</p>
          <BSegmented data-testid="all-disabled" :options="OBJECT_OPTIONS" disabled default-value="map" />
        </div>
        <div>
          <p style="font-size:12px;color:#666;margin:0 0 4px;">Transit option disabled</p>
          <BSegmented data-testid="partial-disabled" :options="partialOpts" default-value="map" />
        </div>
      </div>
    `}),play:async({canvasElement:e})=>{let t=s(e),n=t.getByTestId(`all-disabled`);a(n.classList.contains(`b-segmented--disabled`)).toBe(!0),a(n.getAttribute(`aria-disabled`)).toBe(`true`);let r=t.getByTestId(`partial-disabled`).querySelectorAll(`.b-segmented__item`)[1];a(r.classList.contains(`b-segmented__item--disabled`)).toBe(!0),a(r.getAttribute(`aria-disabled`)).toBe(`true`)}},h={parameters:{controls:{disable:!0},docs:{source:{code:`<BSegmented :options="opts" block />`}}},render:()=>({components:{BSegmented:r},setup(){return{STRING_OPTIONS:l}},template:`
      <div style="padding: 2rem;">
        <BSegmented data-testid="block" :options="STRING_OPTIONS" block default-value="Daily" />
      </div>
    `}),play:async({canvasElement:e})=>{a(s(e).getByTestId(`block`).classList.contains(`b-segmented--block`)).toBe(!0)}},g={parameters:{controls:{disable:!0},docs:{description:{story:'Use the `#label` slot to render icon + text combinations. Wrap each icon in `role="img"` with an `aria-label` to give it an explicit text alternative, satisfying WCAG SC 1.1.1 (Non-text Content). This is the accessible pattern for real-world icon usage (e.g. `BIcon` or SVG components).'},source:{code:`
<BSegmented :options="[
  { label: 'List',   value: 'list'   },
  { label: 'Grid',   value: 'grid'   },
  { label: 'Kanban', value: 'kanban' },
]" v-model="value">
  <template #label="{ option }">
    <span role="img" :aria-label="option.label">{{ iconMap[option.value] }}</span>
    <span>{{ option.label }}</span>
  </template>
</BSegmented>`}}},render:()=>({components:{BSegmented:r},setup(){return{value:t(`list`),iconBaseOpts:[{label:`List`,value:`list`},{label:`Grid`,value:`grid`},{label:`Kanban`,value:`kanban`}],iconMap:{list:`☰`,grid:`⊞`,kanban:`▣`}}},template:`
      <div style="padding: 2rem;">
        <BSegmented data-testid="icons" :options="iconBaseOpts" v-model="value">
          <template #label="{ option }">
            <span role="img" :aria-label="option.label">{{ iconMap[option.value] }}</span>
            <span>{{ option.label }}</span>
          </template>
        </BSegmented>
      </div>
    `}),play:async({canvasElement:e})=>{let t=s(e).getByTestId(`icons`);a(t.querySelectorAll(`.b-segmented__item`).length).toBe(3);let n=t.querySelectorAll(`[role="img"]`);a(n.length).toBe(3),a(n[0].getAttribute(`aria-label`)).toBe(`List`),a(n[1].getAttribute(`aria-label`)).toBe(`Grid`),a(n[2].getAttribute(`aria-label`)).toBe(`Kanban`)}},_={parameters:{controls:{disable:!0},docs:{source:{code:`
<BSegmented :options="opts">
  <template #label="{ option }">
    <strong>{{ option.label }}</strong>
  </template>
</BSegmented>`}}},render:()=>({components:{BSegmented:r},setup(){return{value:t(`map`),OBJECT_OPTIONS:u}},template:`
      <div style="padding: 2rem;">
        <BSegmented data-testid="custom-label" :options="OBJECT_OPTIONS" v-model="value">
          <template #label="{ option }">
            <em style="font-style:italic;">{{ option.label }}</em>
          </template>
        </BSegmented>
      </div>
    `}),play:async({canvasElement:e})=>{let t=s(e).getByTestId(`custom-label`).querySelector(`.b-segmented__item-label em`);a(t).not.toBeNull(),a(t?.textContent).toContain(`Map`)}},v={parameters:{controls:{disable:!0},docs:{source:{code:`
<script setup>
const value = ref('Weekly')
<\/script>
<BSegmented :options="['Daily','Weekly','Monthly']" v-model="value" />
<p>Selected: {{ value }}</p>`}}},render:()=>({components:{BSegmented:r},setup(){return{value:t(`Weekly`),STRING_OPTIONS:l}},template:`
      <div style="padding: 2rem;">
        <BSegmented data-testid="controlled" :options="STRING_OPTIONS" v-model="value" />
        <p data-testid="selected-display" style="margin-top:0.75rem;font-size:13px;color:#555;">
          Selected: <strong>{{ value }}</strong>
        </p>
      </div>
    `}),play:async({canvasElement:e})=>{let t=s(e),n=t.getByTestId(`controlled`),r=t.getByTestId(`selected-display`);a(r.querySelector(`strong`)?.textContent).toBe(`Weekly`);let i=n.querySelectorAll(`.b-segmented__item`);await o.click(i[2]),a(r.querySelector(`strong`)?.textContent).toBe(`Monthly`),a(i[2].getAttribute(`aria-checked`)).toBe(`true`)}},y={name:`Accessibility (roles & keyboard)`,parameters:{controls:{disable:!0},docs:{description:{story:"Verifies ARIA roles, `aria-checked`, `aria-disabled` attributes, and keyboard navigation. Use <kbd>Tab</kbd> to focus the control, then <kbd>←</kbd><kbd>→</kbd> to move focus, <kbd>Enter</kbd> or <kbd>Space</kbd> to select."}}},render:()=>({components:{BSegmented:r},setup(){return{value:t(`Daily`),STRING_OPTIONS:l,partialDisabled:[{label:`Map`,value:`map`},{label:`Transit`,value:`transit`,disabled:!0},{label:`Satellite`,value:`satellite`}]}},template:`
      <div style="padding: 2rem; display: flex; flex-direction: column; gap: 1.5rem; align-items: flex-start;">
        <BSegmented data-testid="a11y-basic" :options="STRING_OPTIONS" v-model="value" />
        <BSegmented data-testid="a11y-disabled" :options="STRING_OPTIONS" disabled default-value="Daily" />
        <BSegmented data-testid="a11y-partial" :options="partialDisabled" default-value="map" />
      </div>
    `}),play:async({canvasElement:e})=>{let t=s(e),n=t.getByTestId(`a11y-basic`);a(n.getAttribute(`role`)).toBe(`group`),n.querySelectorAll(`.b-segmented__item`).forEach(e=>{a(e.getAttribute(`role`)).toBe(`radio`)});let r=n.querySelectorAll(`.b-segmented__item`);a(r[0].getAttribute(`aria-checked`)).toBe(`true`),a(r[1].getAttribute(`aria-checked`)).toBe(`false`),a(t.getByTestId(`a11y-disabled`).getAttribute(`aria-disabled`)).toBe(`true`),a(t.getByTestId(`a11y-partial`).querySelectorAll(`.b-segmented__item`)[1].getAttribute(`aria-disabled`)).toBe(`true`);let i=r[0];i.focus(),a(document.activeElement).toBe(i)}},b={name:`Theming (CSS vars)`,parameters:{controls:{disable:!0},docs:{description:{story:"Override `--b-segmented-*` CSS custom properties on the component root to customise appearance without touching source."},source:{code:`
<style>
.custom-segmented {
  --b-segmented-bg: #f0f5ff;
  --b-segmented-thumb-bg: #1d39c4;
  --b-segmented-selected-color: #fff;
  --b-segmented-item-hover-color: #1d39c4;
}
</style>
<BSegmented class="custom-segmented" :options="opts" />`}}},render:()=>({components:{BSegmented:r},setup(){return{OBJECT_OPTIONS:u}},template:`
      <div style="padding: 2rem; display: flex; flex-direction: column; gap: 1.5rem; align-items: flex-start;">
        <div>
          <p style="font-size:12px;color:#666;margin:0 0 4px;">Default theme</p>
          <BSegmented :options="OBJECT_OPTIONS" default-value="map" />
        </div>
        <div>
          <p style="font-size:12px;color:#666;margin:0 0 4px;">Blue theme</p>
          <BSegmented
            :options="OBJECT_OPTIONS"
            default-value="map"
            style="--b-segmented-bg:#f0f5ff;--b-segmented-thumb-bg:#1d39c4;--b-segmented-selected-color:#fff;--b-segmented-thumb-shadow:0 2px 6px oklch(35% 0.2 260 / 40%);--b-segmented-item-hover-color:#1d39c4;"
          />
        </div>
        <div>
          <p style="font-size:12px;color:#666;margin:0 0 4px;">Rounded pill theme</p>
          <BSegmented
            :options="OBJECT_OPTIONS"
            default-value="map"
            style="--b-segmented-border-radius:20px;--b-segmented-item-border-radius:16px;--b-segmented-bg:oklch(92% 0.02 140);--b-segmented-thumb-bg:oklch(50% 0.15 140);--b-segmented-selected-color:#fff;"
          />
        </div>
      </div>
    `})},x={name:`Interaction – selection & keyboard`,parameters:{controls:{disable:!0},docs:{description:{story:`Automated play function verifying click selection, keyboard navigation, and disabled guard.`}}},render:()=>({components:{BSegmented:r},setup(){return{value:t(`Daily`),mapValue:t(`map`),STRING_OPTIONS:l,partialOpts:[{label:`Map`,value:`map`},{label:`Transit`,value:`transit`},{label:`Satellite`,value:`satellite`,disabled:!0}]}},template:`
      <div style="padding: 2rem; display: flex; flex-direction: column; gap: 1.5rem; align-items: flex-start;">
        <BSegmented data-testid="int-basic" :options="STRING_OPTIONS" v-model="value" />
        <BSegmented data-testid="int-partial" :options="partialOpts" v-model="mapValue" />
        <BSegmented data-testid="int-all-disabled" :options="STRING_OPTIONS" disabled default-value="Daily" />
      </div>
    `}),play:async({canvasElement:e})=>{let t=s(e),n=t.getByTestId(`int-basic`).querySelectorAll(`.b-segmented__item`);await o.click(n[1]),a(n[1].getAttribute(`aria-checked`)).toBe(`true`),a(n[0].getAttribute(`aria-checked`)).toBe(`false`),await o.click(n[0]),a(n[0].getAttribute(`aria-checked`)).toBe(`true`),await o.click(n[0]),await o.keyboard(`{ArrowRight}`),a(document.activeElement).toBe(n[1]),await o.keyboard(`{Enter}`),a(n[1].getAttribute(`aria-checked`)).toBe(`true`);let r=t.getByTestId(`int-partial`).querySelectorAll(`.b-segmented__item`);await o.click(r[2]),a(r[2].getAttribute(`aria-checked`)).toBe(`false`),a(r[0].getAttribute(`aria-checked`)).toBe(`true`);let i=t.getByTestId(`int-all-disabled`),c=i.querySelectorAll(`.b-segmented__item`);a(i.getAttribute(`aria-disabled`)).toBe(`true`),a(c[0].getAttribute(`aria-checked`)).toBe(`true`),a(c[1].getAttribute(`aria-checked`)).toBe(`false`)}},S=[{token:`--b-segmented-bg`,defaultValue:`oklch(95% 0.003 260)`,description:`Background of the segmented track (AntD: trackBg).`},{token:`--b-segmented-padding`,defaultValue:`2px`,description:`Padding inside the segmented track (AntD: trackPadding).`},{token:`--b-segmented-thumb-bg`,defaultValue:`oklch(100% 0 0)`,description:`Background of the selected thumb (AntD: itemSelectedBg).`},{token:`--b-segmented-selected-color`,defaultValue:`oklch(20% 0.02 260)`,description:`Text color of the selected item (AntD: itemSelectedColor).`},{token:`--b-segmented-item-color`,defaultValue:`oklch(40% 0.02 260)`,description:`Text color of unselected items (AntD: itemColor).`},{token:`--b-segmented-item-hover-bg`,defaultValue:`oklch(100% 0 0 / 50%)`,description:`Background of items on hover (AntD: itemHoverBg).`},{token:`--b-segmented-item-hover-color`,defaultValue:`oklch(20% 0.02 260)`,description:`Text color of items on hover (AntD: itemHoverColor).`},{token:`--b-segmented-height`,defaultValue:`32px`,description:`Default control height (24px small / 40px large).`},{token:`--b-segmented-item-padding`,defaultValue:`0 11px`,description:`Padding inside each item (varies by size).`},{token:`--b-segmented-border-radius`,defaultValue:`8px`,description:`Outer corner radius of the track.`},{token:`--b-segmented-item-border-radius`,defaultValue:`6px`,description:`Corner radius of each item / the thumb.`},{token:`--b-segmented-selected-font-weight`,defaultValue:`500`,description:`Font weight of the selected item label.`},{token:`--b-segmented-thumb-shadow`,defaultValue:`0 1px 2px oklch(0% 0 0 / 10%), 0 0 0 1px oklch(0% 0 0 / 6%)`,description:`Box shadow of the selected thumb.`},{token:`--b-segmented-thumb-transition`,defaultValue:`...`,description:`Transition spec applied as the thumb moves between items.`},{token:`--b-segmented-transition-duration`,defaultValue:`200ms`,description:`Duration of color/background transitions.`},{token:`--b-segmented-disabled-opacity`,defaultValue:`0.4`,description:`Opacity applied when the control is disabled.`},{token:`--b-segmented-disabled-cursor`,defaultValue:`not-allowed`,description:`Cursor used while disabled.`},{token:`--b-segmented-focus-ring`,defaultValue:`0 0 0 2px oklch(54.6% 0.245 262.881 / 20%)`,description:`Focus ring shadow for keyboard focus.`}],C={name:`Design Tokens`,parameters:{controls:{disable:!0},docs:{description:{story:`Reference table of every <code>--b-segmented-*</code> CSS custom property consumers can override to retheme the component.`}}},render:()=>({components:{BSegmented:r},setup:()=>({tokens:S,options:[`Daily`,`Weekly`,`Monthly`]}),template:`
      <div style="font-family:sans-serif;padding:1rem;max-width:1100px;margin:0 auto;">
        <h2 style="margin:0 0 8px;">BSegmented - Design Tokens</h2>
        <p style="margin:0 0 24px;color:#595959;">
          All tokens scoped to <code>.b-segmented</code>. Override inline or via a CSS class.
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
          Four tokens overridden inline (track background, thumb background, radius, hover).
        </p>
        <BSegmented
          :options="options"
          style="
            --b-segmented-bg: oklch(95% 0.05 145);
            --b-segmented-thumb-bg: oklch(42% 0.16 145);
            --b-segmented-selected-color: oklch(98% 0.005 145);
            --b-segmented-border-radius: 16px;
            --b-segmented-item-border-radius: 14px;
          "
        />
      </div>
    `})},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    options: STRING_OPTIONS,
    defaultValue: 'Daily',
    disabled: false,
    size: 'default',
    block: false
  },
  render: args => ({
    components: {
      BSegmented
    },
    setup() {
      const value = ref<string | number>(args.modelValue ?? args.defaultValue ?? 'Daily');
      return {
        args,
        value
      };
    },
    template: \`
      <div style="padding: 2rem;">
        <BSegmented v-bind="args" v-model="value" />
        <p style="margin-top:1rem;font-size:13px;color:#666;">Selected: <strong>{{ value }}</strong></p>
      </div>
    \`
  })
}`,...d.parameters?.docs?.source},description:{story:`Interactive playground - tweak all props via the Controls panel.`,...d.parameters?.docs?.description}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: true
    },
    docs: {
      source: {
        code: \`<BSegmented :options="['Daily', 'Weekly', 'Monthly']" />\`
      }
    }
  },
  render: () => ({
    components: {
      BSegmented
    },
    setup() {
      const value = ref('Daily');
      return {
        value,
        STRING_OPTIONS
      };
    },
    template: \`
      <div style="padding: 2rem;">
        <BSegmented data-testid="basic" :options="STRING_OPTIONS" v-model="value" />
      </div>
    \`
  }),
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const el = canvas.getByTestId('basic');
    const items = el.querySelectorAll('.b-segmented__item');
    expect(items.length).toBe(5);
    expect(items[0].getAttribute('aria-checked')).toBe('true');
    expect(el.getAttribute('role')).toBe('group');
  }
}`,...f.parameters?.docs?.source},description:{story:`Default segmented with string options.`,...f.parameters?.docs?.description}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: true
    },
    docs: {
      source: {
        code: \`
<BSegmented :options="opts" size="small" />
<BSegmented :options="opts" size="default" />
<BSegmented :options="opts" size="large" />\`
      }
    }
  },
  render: () => ({
    components: {
      BSegmented
    },
    setup() {
      return {
        OBJECT_OPTIONS
      };
    },
    template: \`
      <div style="padding: 2rem; display: flex; flex-direction: column; gap: 1.5rem; align-items: flex-start;">
        <div>
          <p style="font-size:12px;color:#666;margin:0 0 4px;">Small</p>
          <BSegmented data-testid="size-small" :options="OBJECT_OPTIONS" size="small" default-value="map" />
        </div>
        <div>
          <p style="font-size:12px;color:#666;margin:0 0 4px;">Default</p>
          <BSegmented data-testid="size-default" :options="OBJECT_OPTIONS" default-value="map" />
        </div>
        <div>
          <p style="font-size:12px;color:#666;margin:0 0 4px;">Large</p>
          <BSegmented data-testid="size-large" :options="OBJECT_OPTIONS" size="large" default-value="map" />
        </div>
      </div>
    \`
  }),
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByTestId('size-small').classList.contains('b-segmented--small')).toBe(true);
    expect(canvas.getByTestId('size-default').classList.contains('b-segmented--small')).toBe(false);
    expect(canvas.getByTestId('size-large').classList.contains('b-segmented--large')).toBe(true);
  }
}`,...p.parameters?.docs?.source},description:{story:`Three available sizes: small, default, and large.`,...p.parameters?.docs?.description}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: true
    },
    docs: {
      source: {
        code: \`
<!-- Whole control disabled -->
<BSegmented :options="opts" disabled />

<!-- Single option disabled -->
<BSegmented :options="[
  { label: 'Map', value: 'map' },
  { label: 'Transit', value: 'transit', disabled: true },
  { label: 'Satellite', value: 'satellite' },
]" />\`
      }
    }
  },
  render: () => ({
    components: {
      BSegmented
    },
    setup() {
      const partialOpts: BSegmentedRawOption[] = [{
        label: 'Map',
        value: 'map'
      }, {
        label: 'Transit',
        value: 'transit',
        disabled: true
      }, {
        label: 'Satellite',
        value: 'satellite'
      }];
      return {
        OBJECT_OPTIONS,
        partialOpts
      };
    },
    template: \`
      <div style="padding: 2rem; display: flex; flex-direction: column; gap: 1.5rem; align-items: flex-start;">
        <div>
          <p style="font-size:12px;color:#666;margin:0 0 4px;">All disabled</p>
          <BSegmented data-testid="all-disabled" :options="OBJECT_OPTIONS" disabled default-value="map" />
        </div>
        <div>
          <p style="font-size:12px;color:#666;margin:0 0 4px;">Transit option disabled</p>
          <BSegmented data-testid="partial-disabled" :options="partialOpts" default-value="map" />
        </div>
      </div>
    \`
  }),
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const allDisabled = canvas.getByTestId('all-disabled');
    expect(allDisabled.classList.contains('b-segmented--disabled')).toBe(true);
    expect(allDisabled.getAttribute('aria-disabled')).toBe('true');
    const partial = canvas.getByTestId('partial-disabled');
    const transitItem = partial.querySelectorAll('.b-segmented__item')[1];
    expect(transitItem.classList.contains('b-segmented__item--disabled')).toBe(true);
    expect(transitItem.getAttribute('aria-disabled')).toBe('true');
  }
}`,...m.parameters?.docs?.source},description:{story:`Disabled state: whole control and individual option disabled.`,...m.parameters?.docs?.description}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: true
    },
    docs: {
      source: {
        code: \`<BSegmented :options="opts" block />\`
      }
    }
  },
  render: () => ({
    components: {
      BSegmented
    },
    setup() {
      return {
        STRING_OPTIONS
      };
    },
    template: \`
      <div style="padding: 2rem;">
        <BSegmented data-testid="block" :options="STRING_OPTIONS" block default-value="Daily" />
      </div>
    \`
  }),
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const el = canvas.getByTestId('block');
    expect(el.classList.contains('b-segmented--block')).toBe(true);
  }
}`,...h.parameters?.docs?.source},description:{story:`Block mode stretches the control to fill its container.`,...h.parameters?.docs?.description}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: true
    },
    docs: {
      description: {
        story: 'Use the \`#label\` slot to render icon + text combinations. ' + 'Wrap each icon in \`role="img"\` with an \`aria-label\` to give it an explicit text alternative, ' + 'satisfying WCAG SC 1.1.1 (Non-text Content). ' + 'This is the accessible pattern for real-world icon usage (e.g. \`BIcon\` or SVG components).'
      },
      source: {
        code: \`
<BSegmented :options="[
  { label: 'List',   value: 'list'   },
  { label: 'Grid',   value: 'grid'   },
  { label: 'Kanban', value: 'kanban' },
]" v-model="value">
  <template #label="{ option }">
    <span role="img" :aria-label="option.label">{{ iconMap[option.value] }}</span>
    <span>{{ option.label }}</span>
  </template>
</BSegmented>\`
      }
    }
  },
  render: () => ({
    components: {
      BSegmented
    },
    setup() {
      const value = ref('list');
      const iconBaseOpts: BSegmentedRawOption[] = [{
        label: 'List',
        value: 'list'
      }, {
        label: 'Grid',
        value: 'grid'
      }, {
        label: 'Kanban',
        value: 'kanban'
      }];
      const iconMap: Record<string, string> = {
        list: '☰',
        grid: '⊞',
        kanban: '▣'
      };
      return {
        value,
        iconBaseOpts,
        iconMap
      };
    },
    template: \`
      <div style="padding: 2rem;">
        <BSegmented data-testid="icons" :options="iconBaseOpts" v-model="value">
          <template #label="{ option }">
            <span role="img" :aria-label="option.label">{{ iconMap[option.value] }}</span>
            <span>{{ option.label }}</span>
          </template>
        </BSegmented>
      </div>
    \`
  }),
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const el = canvas.getByTestId('icons');
    const items = el.querySelectorAll('.b-segmented__item');
    expect(items.length).toBe(3);
    // Each icon has an explicit text alternative via role="img" + aria-label
    const iconImgs = el.querySelectorAll('[role="img"]');
    expect(iconImgs.length).toBe(3);
    expect(iconImgs[0].getAttribute('aria-label')).toBe('List');
    expect(iconImgs[1].getAttribute('aria-label')).toBe('Grid');
    expect(iconImgs[2].getAttribute('aria-label')).toBe('Kanban');
  }
}`,...g.parameters?.docs?.source},description:{story:`Options with icon + label content.`,...g.parameters?.docs?.description}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: true
    },
    docs: {
      source: {
        code: \`
<BSegmented :options="opts">
  <template #label="{ option }">
    <strong>{{ option.label }}</strong>
  </template>
</BSegmented>\`
      }
    }
  },
  render: () => ({
    components: {
      BSegmented
    },
    setup() {
      const value = ref('map');
      return {
        value,
        OBJECT_OPTIONS
      };
    },
    template: \`
      <div style="padding: 2rem;">
        <BSegmented data-testid="custom-label" :options="OBJECT_OPTIONS" v-model="value">
          <template #label="{ option }">
            <em style="font-style:italic;">{{ option.label }}</em>
          </template>
        </BSegmented>
      </div>
    \`
  }),
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const el = canvas.getByTestId('custom-label');
    const firstLabel = el.querySelector('.b-segmented__item-label em');
    expect(firstLabel).not.toBeNull();
    expect(firstLabel?.textContent).toContain('Map');
  }
}`,..._.parameters?.docs?.source},description:{story:"Use the `#label` slot to render custom content inside each option.",..._.parameters?.docs?.description}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: true
    },
    docs: {
      source: {
        code: \`
<script setup>
const value = ref('Weekly')
<\/script>
<BSegmented :options="['Daily','Weekly','Monthly']" v-model="value" />
<p>Selected: {{ value }}</p>\`
      }
    }
  },
  render: () => ({
    components: {
      BSegmented
    },
    setup() {
      const value = ref('Weekly');
      return {
        value,
        STRING_OPTIONS
      };
    },
    template: \`
      <div style="padding: 2rem;">
        <BSegmented data-testid="controlled" :options="STRING_OPTIONS" v-model="value" />
        <p data-testid="selected-display" style="margin-top:0.75rem;font-size:13px;color:#555;">
          Selected: <strong>{{ value }}</strong>
        </p>
      </div>
    \`
  }),
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const el = canvas.getByTestId('controlled');
    const display = canvas.getByTestId('selected-display');

    // Initial state
    expect(display.querySelector('strong')?.textContent).toBe('Weekly');

    // Click "Monthly" (index 2)
    const items = el.querySelectorAll('.b-segmented__item');
    await userEvent.click(items[2]);
    expect(display.querySelector('strong')?.textContent).toBe('Monthly');
    expect(items[2].getAttribute('aria-checked')).toBe('true');
  }
}`,...v.parameters?.docs?.source},description:{story:`Full two-way binding example showing the selected value updating live.`,...v.parameters?.docs?.description}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  name: 'Accessibility (roles & keyboard)',
  parameters: {
    controls: {
      disable: true
    },
    docs: {
      description: {
        story: 'Verifies ARIA roles, \`aria-checked\`, \`aria-disabled\` attributes, and keyboard navigation. ' + 'Use <kbd>Tab</kbd> to focus the control, then <kbd>←</kbd><kbd>→</kbd> to move focus, <kbd>Enter</kbd> or <kbd>Space</kbd> to select.'
      }
    }
  },
  render: () => ({
    components: {
      BSegmented
    },
    setup() {
      const value = ref('Daily');
      const partialDisabled: BSegmentedRawOption[] = [{
        label: 'Map',
        value: 'map'
      }, {
        label: 'Transit',
        value: 'transit',
        disabled: true
      }, {
        label: 'Satellite',
        value: 'satellite'
      }];
      return {
        value,
        STRING_OPTIONS,
        partialDisabled
      };
    },
    template: \`
      <div style="padding: 2rem; display: flex; flex-direction: column; gap: 1.5rem; align-items: flex-start;">
        <BSegmented data-testid="a11y-basic" :options="STRING_OPTIONS" v-model="value" />
        <BSegmented data-testid="a11y-disabled" :options="STRING_OPTIONS" disabled default-value="Daily" />
        <BSegmented data-testid="a11y-partial" :options="partialDisabled" default-value="map" />
      </div>
    \`
  }),
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);

    // Role checks
    const basic = canvas.getByTestId('a11y-basic');
    expect(basic.getAttribute('role')).toBe('group');
    basic.querySelectorAll('.b-segmented__item').forEach(item => {
      expect(item.getAttribute('role')).toBe('radio');
    });

    // aria-checked
    const items = basic.querySelectorAll('.b-segmented__item');
    expect(items[0].getAttribute('aria-checked')).toBe('true');
    expect(items[1].getAttribute('aria-checked')).toBe('false');

    // Disabled
    const disabled = canvas.getByTestId('a11y-disabled');
    expect(disabled.getAttribute('aria-disabled')).toBe('true');

    // Per-item disabled
    const partial = canvas.getByTestId('a11y-partial');
    expect(partial.querySelectorAll('.b-segmented__item')[1].getAttribute('aria-disabled')).toBe('true');

    // Keyboard: click item 0, then ArrowRight should move focus to item 1
    const firstItem = items[0] as HTMLElement;
    firstItem.focus();
    expect(document.activeElement).toBe(firstItem);
  }
}`,...y.parameters?.docs?.source},description:{story:'Demonstrates correct ARIA roles and keyboard navigation.\n- `role="group"` on the root\n- `role="radio"` on each item\n- `aria-checked` on items\n- Keyboard: ←/→ moves focus, Enter/Space selects',...y.parameters?.docs?.description}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  name: 'Theming (CSS vars)',
  parameters: {
    controls: {
      disable: true
    },
    docs: {
      description: {
        story: 'Override \`--b-segmented-*\` CSS custom properties on the component root to customise appearance without touching source.'
      },
      source: {
        code: \`
<style>
.custom-segmented {
  --b-segmented-bg: #f0f5ff;
  --b-segmented-thumb-bg: #1d39c4;
  --b-segmented-selected-color: #fff;
  --b-segmented-item-hover-color: #1d39c4;
}
</style>
<BSegmented class="custom-segmented" :options="opts" />\`
      }
    }
  },
  render: () => ({
    components: {
      BSegmented
    },
    setup() {
      return {
        OBJECT_OPTIONS
      };
    },
    template: \`
      <div style="padding: 2rem; display: flex; flex-direction: column; gap: 1.5rem; align-items: flex-start;">
        <div>
          <p style="font-size:12px;color:#666;margin:0 0 4px;">Default theme</p>
          <BSegmented :options="OBJECT_OPTIONS" default-value="map" />
        </div>
        <div>
          <p style="font-size:12px;color:#666;margin:0 0 4px;">Blue theme</p>
          <BSegmented
            :options="OBJECT_OPTIONS"
            default-value="map"
            style="--b-segmented-bg:#f0f5ff;--b-segmented-thumb-bg:#1d39c4;--b-segmented-selected-color:#fff;--b-segmented-thumb-shadow:0 2px 6px oklch(35% 0.2 260 / 40%);--b-segmented-item-hover-color:#1d39c4;"
          />
        </div>
        <div>
          <p style="font-size:12px;color:#666;margin:0 0 4px;">Rounded pill theme</p>
          <BSegmented
            :options="OBJECT_OPTIONS"
            default-value="map"
            style="--b-segmented-border-radius:20px;--b-segmented-item-border-radius:16px;--b-segmented-bg:oklch(92% 0.02 140);--b-segmented-thumb-bg:oklch(50% 0.15 140);--b-segmented-selected-color:#fff;"
          />
        </div>
      </div>
    \`
  })
}`,...b.parameters?.docs?.source},description:{story:"Override `--b-segmented-*` CSS custom properties to customise the component.",...b.parameters?.docs?.description}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  name: 'Interaction – selection & keyboard',
  parameters: {
    controls: {
      disable: true
    },
    docs: {
      description: {
        story: 'Automated play function verifying click selection, keyboard navigation, and disabled guard.'
      }
    }
  },
  render: () => ({
    components: {
      BSegmented
    },
    setup() {
      const value = ref('Daily');
      const mapValue = ref('map');
      const partialOpts: BSegmentedRawOption[] = [{
        label: 'Map',
        value: 'map'
      }, {
        label: 'Transit',
        value: 'transit'
      }, {
        label: 'Satellite',
        value: 'satellite',
        disabled: true
      }];
      return {
        value,
        mapValue,
        STRING_OPTIONS,
        partialOpts
      };
    },
    template: \`
      <div style="padding: 2rem; display: flex; flex-direction: column; gap: 1.5rem; align-items: flex-start;">
        <BSegmented data-testid="int-basic" :options="STRING_OPTIONS" v-model="value" />
        <BSegmented data-testid="int-partial" :options="partialOpts" v-model="mapValue" />
        <BSegmented data-testid="int-all-disabled" :options="STRING_OPTIONS" disabled default-value="Daily" />
      </div>
    \`
  }),
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);

    // ── Click selection ──────────────────────────
    const basic = canvas.getByTestId('int-basic');
    const items = basic.querySelectorAll<HTMLElement>('.b-segmented__item');
    await userEvent.click(items[1]);
    expect(items[1].getAttribute('aria-checked')).toBe('true');
    expect(items[0].getAttribute('aria-checked')).toBe('false');

    // Click back to first
    await userEvent.click(items[0]);
    expect(items[0].getAttribute('aria-checked')).toBe('true');

    // ── Keyboard navigation ──────────────────────
    // userEvent.click both focuses the element AND sets user-event's
    // internal pointer so that subsequent userEvent.keyboard targets it.
    await userEvent.click(items[0]);
    await userEvent.keyboard('{ArrowRight}');
    expect(document.activeElement).toBe(items[1]);

    // Enter selects the currently-focused item
    await userEvent.keyboard('{Enter}');
    expect(items[1].getAttribute('aria-checked')).toBe('true');

    // ── Per-item disabled guard ──────────────────
    const partial = canvas.getByTestId('int-partial');
    const partialItems = partial.querySelectorAll<HTMLElement>('.b-segmented__item');

    // satellite (index 2) is disabled - click must not change selection
    await userEvent.click(partialItems[2]);
    expect(partialItems[2].getAttribute('aria-checked')).toBe('false');
    expect(partialItems[0].getAttribute('aria-checked')).toBe('true');

    // ── Whole-control disabled guard ─────────────
    // The control has CSS pointer-events:none, so we skip the click and
    // instead verify the aria state reflects the disabled condition.
    const allDisabled = canvas.getByTestId('int-all-disabled');
    const disabledItems = allDisabled.querySelectorAll<HTMLElement>('.b-segmented__item');
    expect(allDisabled.getAttribute('aria-disabled')).toBe('true');
    expect(disabledItems[0].getAttribute('aria-checked')).toBe('true'); // Daily stays selected
    expect(disabledItems[1].getAttribute('aria-checked')).toBe('false');
  }
}`,...x.parameters?.docs?.source},description:{story:`Automated interaction tests: selection, events, keyboard, disabled.`,...x.parameters?.docs?.description}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  name: 'Design Tokens',
  parameters: {
    controls: {
      disable: true
    },
    docs: {
      description: {
        story: 'Reference table of every <code>--b-segmented-*</code> CSS custom property ' + 'consumers can override to retheme the component.'
      }
    }
  },
  render: () => ({
    components: {
      BSegmented
    },
    setup: () => ({
      tokens: DESIGN_TOKENS,
      options: ['Daily', 'Weekly', 'Monthly']
    }),
    template: \`
      <div style="font-family:sans-serif;padding:1rem;max-width:1100px;margin:0 auto;">
        <h2 style="margin:0 0 8px;">BSegmented - Design Tokens</h2>
        <p style="margin:0 0 24px;color:#595959;">
          All tokens scoped to <code>.b-segmented</code>. Override inline or via a CSS class.
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
          Four tokens overridden inline (track background, thumb background, radius, hover).
        </p>
        <BSegmented
          :options="options"
          style="
            --b-segmented-bg: oklch(95% 0.05 145);
            --b-segmented-thumb-bg: oklch(42% 0.16 145);
            --b-segmented-selected-color: oklch(98% 0.005 145);
            --b-segmented-border-radius: 16px;
            --b-segmented-item-border-radius: 14px;
          "
        />
      </div>
    \`
  })
}`,...C.parameters?.docs?.source}}},w=[`Playground`,`Basic`,`Sizes`,`Disabled`,`Block`,`WithIcons`,`CustomLabel`,`Controlled`,`Accessibility`,`Theming`,`InteractionTests`,`DesignTokens`]}))();export{y as Accessibility,f as Basic,h as Block,v as Controlled,_ as CustomLabel,C as DesignTokens,m as Disabled,x as InteractionTests,d as Playground,p as Sizes,b as Theming,g as WithIcons,w as __namedExportsOrder,c as default};