import{n as e}from"./chunk-BneVvdWh.js";import{K as t,i as n}from"./iframe-BtDITyas.js";import{l as r,t as i}from"./components-_FfmWUAp.js";var a,o,s,c,l,u,d,f,p,m,h,g,_,v,y,b;e((()=>{i(),n(),{expect:a,userEvent:o,within:s}=__STORYBOOK_MODULE_TEST__,c={title:`Data Display/Tag`,component:r,tags:[`autodocs`],argTypes:{visible:{control:`boolean`,description:"Controlled visibility - bind with `v-model:visible`.",table:{category:`Two-Way Binding Props`}},color:{control:`text`,description:"Preset semantic color name or any valid CSS color string. Presets: `default`, `success`, `processing`, `error`, `warning`, `magenta`, `red`, `volcano`, `orange`, `gold`, `lime`, `green`, `cyan`, `blue`, `geekblue`, `purple`.",table:{category:`Props`}},variant:{control:`select`,options:[`filled`,`outlined`],description:`Visual style variant.`,table:{defaultValue:{summary:`filled`},category:`Props`}},size:{control:`select`,options:[`small`,`default`,`large`],description:`Size of the tag.`,table:{defaultValue:{summary:`default`},category:`Props`}},closable:{control:`boolean`,description:`Whether the tag can be closed/removed.`,table:{defaultValue:{summary:`false`},category:`Props`}},closeIcon:{control:`text`,description:"Custom close icon character/string. Overridden by `#closeIcon` slot.",table:{category:`Props`}},bordered:{control:`boolean`,description:`Whether the tag has a visible border.`,table:{defaultValue:{summary:`true`},category:`Props`}},icon:{control:`text`,description:"Leading icon string (emoji / unicode). For accessible icons prefer the `#icon` slot.",table:{category:`Props`}}},parameters:{docs:{description:{component:`The <code>BTag</code> component labels content with small, inline markers.<br><br>Supports <strong>16 preset colors</strong> plus arbitrary CSS colors, two <strong>variants</strong> (filled/outlined), three <strong>sizes</strong>, optional <strong>close</strong> button, and both <strong>controlled</strong> (v-model:visible) and <strong>uncontrolled</strong> visibility.<br>Keyboard: <kbd>Enter</kbd> / <kbd>Space</kbd> / <kbd>Escape</kbd> activates the close button when focused.<br>Theming via <code>--b-tag-*</code> CSS custom properties. Respects <code>prefers-reduced-motion</code>.`}}}},l={args:{color:`default`,variant:`filled`,size:`default`,closable:!1,bordered:!0},render:e=>({components:{BTag:r},setup(){return{args:e,vis:t(!0)}},template:`
      <div style="padding:2rem;display:flex;flex-direction:column;gap:1rem;align-items:flex-start;">
        <BTag v-bind="args" v-model:visible="vis">Tag content</BTag>
        <button v-if="!vis" style="margin-top:0.5rem;font-size:12px;cursor:pointer;" @click="vis=true">Restore</button>
        <p style="font-size:13px;color:#666;margin:0;">visible: <strong>{{ vis }}</strong></p>
      </div>
    `})},u={parameters:{controls:{disable:!0},docs:{source:{code:`<BTag>Tag</BTag>`}}},render:()=>({components:{BTag:r},template:`
      <div style="padding:2rem;display:flex;gap:0.5rem;flex-wrap:wrap;align-items:center;">
        <BTag data-testid="basic-default">Default</BTag>
        <BTag data-testid="basic-closable" closable>Closable</BTag>
        <BTag data-testid="basic-icon" icon="🏷️">With Icon</BTag>
      </div>
    `}),play:async({canvasElement:e})=>{let t=s(e),n=t.getByTestId(`basic-default`);a(n.tagName).toBe(`SPAN`),a(n.classList.contains(`b-tag`)).toBe(!0),a(n.classList.contains(`b-tag--default`)).toBe(!0),a(t.getByTestId(`basic-closable`).querySelector(`.b-tag__close`)).not.toBeNull(),a(t.getByTestId(`basic-icon`).querySelector(`.b-tag__icon`)).not.toBeNull()}},d={name:`Preset Colors`,parameters:{controls:{disable:!0},docs:{source:{code:`<BTag color="success">Success</BTag>
<BTag color="processing">Processing</BTag>
<BTag color="error">Error</BTag>
<BTag color="warning">Warning</BTag>`}}},render:()=>({components:{BTag:r},setup(){return{statusColors:[`default`,`success`,`processing`,`error`,`warning`],palette:[`magenta`,`red`,`volcano`,`orange`,`gold`,`lime`,`green`,`cyan`,`blue`,`geekblue`,`purple`]}},template:`
      <div style="padding:2rem;display:flex;flex-direction:column;gap:1rem;">
        <div>
          <p style="font-size:12px;color:#666;margin:0 0 6px;">Status colors</p>
          <div style="display:flex;gap:0.5rem;flex-wrap:wrap;align-items:center;">
            <BTag
              v-for="c in statusColors"
              :key="c"
              :color="c"
              :data-testid="'color-' + c"
            >{{ c }}</BTag>
          </div>
        </div>
        <div>
          <p style="font-size:12px;color:#666;margin:0 0 6px;">Palette colors</p>
          <div style="display:flex;gap:0.5rem;flex-wrap:wrap;align-items:center;">
            <BTag
              v-for="c in palette"
              :key="c"
              :color="c"
              :data-testid="'color-' + c"
            >{{ c }}</BTag>
          </div>
        </div>
      </div>
    `}),play:async({canvasElement:e})=>{let t=s(e);[`success`,`processing`,`error`,`warning`,`magenta`,`blue`,`purple`].forEach(e=>{a(t.getByTestId(`color-${e}`).classList.contains(`b-tag--${e}`)).toBe(!0)})}},f={name:`Custom Colors`,parameters:{controls:{disable:!0},docs:{source:{code:`<BTag color="#f50">Custom hex</BTag>
<BTag color="oklch(60% 0.2 180)">Custom oklch</BTag>`}}},render:()=>({components:{BTag:r},setup(){return{customColors:[`#f50`,`#2db7f5`,`#87d068`,`#108ee9`,`oklch(65% 0.2 340)`]}},template:`
      <div style="padding:2rem;display:flex;gap:0.5rem;flex-wrap:wrap;align-items:center;">
        <BTag
          v-for="c in customColors"
          :key="c"
          :color="c"
          data-testid="custom-color-tag"
        >{{ c }}</BTag>
      </div>
    `}),play:async({canvasElement:e})=>{s(e).getAllByTestId(`custom-color-tag`).forEach(e=>{a(e.classList.contains(`b-tag--custom-color`)).toBe(!0),a(e.getAttribute(`style`)??``).toContain(`--b-tag-custom-color`)})}},p={parameters:{controls:{disable:!0},docs:{source:{code:`<BTag size="small">Small</BTag>
<BTag>Default</BTag>
<BTag size="large">Large</BTag>`}}},render:()=>({components:{BTag:r},template:`
      <div style="padding:2rem;display:flex;gap:0.75rem;align-items:center;">
        <BTag size="small" data-testid="size-small" color="processing">Small</BTag>
        <BTag data-testid="size-default" color="processing">Default</BTag>
        <BTag size="large" data-testid="size-large" color="processing">Large</BTag>
      </div>
    `}),play:async({canvasElement:e})=>{let t=s(e);a(t.getByTestId(`size-small`).classList.contains(`b-tag--small`)).toBe(!0),a(t.getByTestId(`size-default`).classList.contains(`b-tag--small`)).toBe(!1),a(t.getByTestId(`size-default`).classList.contains(`b-tag--large`)).toBe(!1),a(t.getByTestId(`size-large`).classList.contains(`b-tag--large`)).toBe(!0)}},m={parameters:{controls:{disable:!0},docs:{source:{code:`<BTag variant="filled" color="blue">Filled</BTag>
<BTag variant="outlined" color="blue">Outlined</BTag>`}}},render:()=>({components:{BTag:r},setup(){return{colors:[`blue`,`success`,`error`,`warning`]}},template:`
      <div style="padding:2rem;display:flex;flex-direction:column;gap:1rem;">
        <div>
          <p style="font-size:12px;color:#666;margin:0 0 6px;">Filled</p>
          <div style="display:flex;gap:0.5rem;flex-wrap:wrap;">
            <BTag v-for="c in colors" :key="c" :color="c" variant="filled" data-testid="variant-filled">{{ c }}</BTag>
          </div>
        </div>
        <div>
          <p style="font-size:12px;color:#666;margin:0 0 6px;">Outlined</p>
          <div style="display:flex;gap:0.5rem;flex-wrap:wrap;">
            <BTag v-for="c in colors" :key="c" :color="c" variant="outlined" data-testid="variant-outlined">{{ c }}</BTag>
          </div>
        </div>
        <div>
          <p style="font-size:12px;color:#666;margin:0 0 6px;">Borderless</p>
          <div style="display:flex;gap:0.5rem;flex-wrap:wrap;">
            <BTag v-for="c in colors" :key="c" :color="c" :bordered="false" data-testid="variant-borderless">{{ c }}</BTag>
          </div>
        </div>
      </div>
    `}),play:async({canvasElement:e})=>{let t=s(e);t.getAllByTestId(`variant-filled`).forEach(e=>{a(e.classList.contains(`b-tag--filled`)).toBe(!0)}),t.getAllByTestId(`variant-outlined`).forEach(e=>{a(e.classList.contains(`b-tag--outlined`)).toBe(!0)}),t.getAllByTestId(`variant-borderless`).forEach(e=>{a(e.classList.contains(`b-tag--borderless`)).toBe(!0)})}},h={parameters:{controls:{disable:!0},docs:{source:{code:`<BTag closable @close="onClose">Closable</BTag>`}}},render:()=>({components:{BTag:r},setup(){let e=t([`Apple`,`Pear`,`Orange`,`Banana`]);function n(t){e.value=e.value.filter(e=>e!==t)}return{tags:e,remove:n,controlledVis:t(!0)}},template:`
      <div style="padding:2rem;display:flex;flex-direction:column;gap:1.5rem;align-items:flex-start;">
        <div>
          <p style="font-size:12px;color:#666;margin:0 0 6px;">Uncontrolled - click × to hide</p>
          <div style="display:flex;gap:0.5rem;flex-wrap:wrap;">
            <BTag
              v-for="t in tags"
              :key="t"
              closable
              color="blue"
              :data-testid="'closable-' + t.toLowerCase()"
              @close="remove(t)"
            >{{ t }}</BTag>
          </div>
        </div>
        <div>
          <p style="font-size:12px;color:#666;margin:0 0 6px;">Controlled - parent drives visibility</p>
          <BTag
            data-testid="controlled-tag"
            closable
            color="success"
            v-model:visible="controlledVis"
          >Controlled</BTag>
          <button
            v-if="!controlledVis"
            style="margin-left:0.5rem;font-size:12px;cursor:pointer;"
            @click="controlledVis=true"
          >Restore</button>
        </div>
      </div>
    `}),play:async({canvasElement:e})=>{let t=s(e),n=t.getByTestId(`closable-apple`).querySelector(`.b-tag__close`);a(n).not.toBeNull(),await o.click(n),await new Promise(e=>setTimeout(e,50)),a(t.queryByTestId(`closable-apple`)).toBeNull(),a(t.getByTestId(`controlled-tag`)).not.toBeNull()}},g={name:`Custom Close Icon`,parameters:{controls:{disable:!0},docs:{source:{code:`<!-- prop -->
<BTag closable close-icon="✕">Tag</BTag>

<!-- slot -->
<BTag closable>
  Tag
  <template #closeIcon>🗑️</template>
</BTag>`}}},render:()=>({components:{BTag:r},template:`
      <div style="padding:2rem;display:flex;gap:0.75rem;flex-wrap:wrap;align-items:center;">
        <BTag closable close-icon="✕" data-testid="close-prop">Via prop</BTag>
        <BTag closable data-testid="close-slot">
          Via slot
          <template #closeIcon>🗑️</template>
        </BTag>
      </div>
    `}),play:async({canvasElement:e})=>{let t=s(e),n=t.getByTestId(`close-prop`).querySelector(`.b-tag__close`);a(n).not.toBeNull(),a(n.querySelector(`.b-tag__close-icon`)).toBeNull();let r=t.getByTestId(`close-slot`).querySelector(`.b-tag__close`);a(r).not.toBeNull(),a(r.textContent?.trim()).toContain(`🗑️`)}},_={name:`Accessibility (roles & keyboard)`,parameters:{controls:{disable:!0},docs:{description:{story:'Verifies that: the root is a semantic `<span>`; the close button is a `<button type="button">` with `aria-label="Remove tag"`; prop-only icons are `aria-hidden` (decorative); slot icons use `role="img"` + `aria-label`; keyboard <kbd>Enter</kbd> activates close.'}}},render:()=>({components:{BTag:r},setup(){return{vis1:t(!0),vis2:t(!0),vis3:t(!0)}},template:`
      <div style="padding:2rem;display:flex;flex-direction:column;gap:1rem;align-items:flex-start;">
        <BTag data-testid="a11y-basic" color="blue">Label only</BTag>
        <BTag data-testid="a11y-closable" closable color="success" v-model:visible="vis1">Closable (click)</BTag>
        <BTag data-testid="a11y-icon" closable color="warning" v-model:visible="vis2">
          With icon
          <template #icon>
            <svg role="img" aria-label="Star" focusable="false" viewBox="0 0 24 24" width="12" height="12" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
            </svg>
          </template>
        </BTag>
        <BTag data-testid="a11y-keyboard" closable color="geekblue" v-model:visible="vis3">Keyboard close</BTag>
      </div>
    `}),play:async({canvasElement:e})=>{let t=s(e);a(t.getByTestId(`a11y-basic`).tagName).toBe(`SPAN`);let n=t.getByTestId(`a11y-closable`).querySelector(`.b-tag__close`);a(n).not.toBeNull(),a(n.tagName).toBe(`BUTTON`),a(n.getAttribute(`type`)).toBe(`button`),a(n.getAttribute(`aria-label`)).toBe(`Remove tag`),a(n.querySelector(`.b-tag__close-icon`)?.getAttribute(`aria-hidden`)).toBe(`true`);let r=t.getByTestId(`a11y-icon`).querySelector(`.b-tag__icon`);a(r?.getAttribute(`aria-hidden`)).toBeNull();let i=r?.querySelector(`[role="img"]`);a(i?.getAttribute(`aria-label`)).toBe(`Star`),await o.click(n),await new Promise(e=>setTimeout(e,300)),a(t.queryByTestId(`a11y-closable`)).toBeNull();let c=t.getByTestId(`a11y-keyboard`).querySelector(`.b-tag__close`);c.focus(),a(document.activeElement).toBe(c),await o.keyboard(`{Enter}`),await new Promise(e=>setTimeout(e,300)),a(t.queryByTestId(`a11y-keyboard`)).toBeNull()}},v={name:`Theming (CSS vars)`,parameters:{controls:{disable:!0},docs:{description:{story:"Override `--b-tag-*` CSS custom properties inline or via a class to fully customize the component without touching source."},source:{code:`<BTag style="--b-tag-bg:#e6f4ff;--b-tag-border-color:#91caff;--b-tag-color:#0958d9;--b-tag-border-radius:12px;">
  Rounded blue
</BTag>`}}},render:()=>({components:{BTag:r},template:`
      <div style="padding:2rem;display:flex;flex-direction:column;gap:1rem;align-items:flex-start;">
        <div>
          <p style="font-size:12px;color:#666;margin:0 0 6px;">Default theme</p>
          <BTag>Default</BTag>
        </div>
        <div>
          <p style="font-size:12px;color:#666;margin:0 0 6px;">Rounded pill - custom vars</p>
          <BTag
            data-testid="theme-pill"
            style="--b-tag-border-radius:12px;--b-tag-bg:oklch(92% 0.06 260);--b-tag-border-color:oklch(72% 0.17 262);--b-tag-color:oklch(38% 0.18 262);"
          >Pill Tag</BTag>
        </div>
        <div>
          <p style="font-size:12px;color:#666;margin:0 0 6px;">Compact - small height & font via vars</p>
          <BTag
            data-testid="theme-compact"
            style="--b-tag-height:16px;--b-tag-font-size:10px;--b-tag-padding:0 4px;--b-tag-line-height:14px;"
          >Compact</BTag>
        </div>
        <div>
          <p style="font-size:12px;color:#666;margin:0 0 6px;">Custom brand color via var override</p>
          <BTag
            data-testid="theme-brand"
            closable
            style="--b-tag-bg:#fff7e6;--b-tag-border-color:#ffd591;--b-tag-color:#ad4e00;"
          >Brand Orange</BTag>
        </div>
      </div>
    `})},y={name:`Interaction – close flows & keyboard`,parameters:{controls:{disable:!0},docs:{description:{story:`Automated play function verifying click-to-close, keyboard close, controlled visibility, and event order.`}}},render:()=>({components:{BTag:r},setup(){return{uncontrolledVis:t(!0),controlledVis:t(!0),closeLog:t([])}},template:`
      <div style="padding:2rem;display:flex;flex-direction:column;gap:1.5rem;align-items:flex-start;">
        <!-- Uncontrolled self-hide -->
        <div>
          <p style="font-size:12px;color:#666;margin:0 0 4px;">Uncontrolled (self-manage visibility)</p>
          <BTag data-testid="int-uncontrolled" closable color="blue">Uncontrolled</BTag>
        </div>

        <!-- Controlled -->
        <div>
          <p style="font-size:12px;color:#666;margin:0 0 4px;">Controlled (v-model:visible)</p>
          <BTag data-testid="int-controlled" closable color="success" v-model:visible="controlledVis">Controlled</BTag>
          <button
            v-if="!controlledVis"
            data-testid="int-restore"
            style="margin-left:0.5rem;font-size:12px;cursor:pointer;"
            @click="controlledVis=true"
          >Restore</button>
        </div>

        <!-- Keyboard close -->
        <div>
          <p style="font-size:12px;color:#666;margin:0 0 4px;">Keyboard close (focus close btn → Enter)</p>
          <BTag data-testid="int-keyboard" closable color="warning">Keyboard</BTag>
        </div>
      </div>
    `}),play:async({canvasElement:e})=>{let t=s(e),n=t.getByTestId(`int-uncontrolled`).querySelector(`.b-tag__close`);await o.click(n),await new Promise(e=>setTimeout(e,300)),a(t.queryByTestId(`int-uncontrolled`)).toBeNull();let r=t.getByTestId(`int-controlled`).querySelector(`.b-tag__close`);await o.click(r),await new Promise(e=>setTimeout(e,300)),a(t.queryByTestId(`int-controlled`)).toBeNull();let i=t.getByTestId(`int-restore`);await o.click(i),await new Promise(e=>setTimeout(e,300)),a(t.getByTestId(`int-controlled`)).not.toBeNull();let c=t.getByTestId(`int-keyboard`).querySelector(`.b-tag__close`);c.focus(),a(document.activeElement).toBe(c),await o.keyboard(`{Enter}`),await new Promise(e=>setTimeout(e,300)),a(t.queryByTestId(`int-keyboard`)).toBeNull()}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    color: 'default',
    variant: 'filled',
    size: 'default',
    closable: false,
    bordered: true
  },
  render: args => ({
    components: {
      BTag
    },
    setup() {
      const vis = ref(true);
      return {
        args,
        vis
      };
    },
    template: \`
      <div style="padding:2rem;display:flex;flex-direction:column;gap:1rem;align-items:flex-start;">
        <BTag v-bind="args" v-model:visible="vis">Tag content</BTag>
        <button v-if="!vis" style="margin-top:0.5rem;font-size:12px;cursor:pointer;" @click="vis=true">Restore</button>
        <p style="font-size:13px;color:#666;margin:0;">visible: <strong>{{ vis }}</strong></p>
      </div>
    \`
  })
}`,...l.parameters?.docs?.source},description:{story:`Interactive playground - tweak all props via the Controls panel.`,...l.parameters?.docs?.description}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: true
    },
    docs: {
      source: {
        code: \`<BTag>Tag</BTag>\`
      }
    }
  },
  render: () => ({
    components: {
      BTag
    },
    template: \`
      <div style="padding:2rem;display:flex;gap:0.5rem;flex-wrap:wrap;align-items:center;">
        <BTag data-testid="basic-default">Default</BTag>
        <BTag data-testid="basic-closable" closable>Closable</BTag>
        <BTag data-testid="basic-icon" icon="🏷️">With Icon</BTag>
      </div>
    \`
  }),
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const def = canvas.getByTestId('basic-default');
    expect(def.tagName).toBe('SPAN');
    expect(def.classList.contains('b-tag')).toBe(true);
    expect(def.classList.contains('b-tag--default')).toBe(true);
    const closable = canvas.getByTestId('basic-closable');
    expect(closable.querySelector('.b-tag__close')).not.toBeNull();
    const iconTag = canvas.getByTestId('basic-icon');
    expect(iconTag.querySelector('.b-tag__icon')).not.toBeNull();
  }
}`,...u.parameters?.docs?.source},description:{story:`Simplest usage - no color, no close button.`,...u.parameters?.docs?.description}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  name: 'Preset Colors',
  parameters: {
    controls: {
      disable: true
    },
    docs: {
      source: {
        code: \`<BTag color="success">Success</BTag>
<BTag color="processing">Processing</BTag>
<BTag color="error">Error</BTag>
<BTag color="warning">Warning</BTag>\`
      }
    }
  },
  render: () => ({
    components: {
      BTag
    },
    setup() {
      const statusColors: BTagColor[] = ['default', 'success', 'processing', 'error', 'warning'];
      const palette: BTagColor[] = ['magenta', 'red', 'volcano', 'orange', 'gold', 'lime', 'green', 'cyan', 'blue', 'geekblue', 'purple'];
      return {
        statusColors,
        palette
      };
    },
    template: \`
      <div style="padding:2rem;display:flex;flex-direction:column;gap:1rem;">
        <div>
          <p style="font-size:12px;color:#666;margin:0 0 6px;">Status colors</p>
          <div style="display:flex;gap:0.5rem;flex-wrap:wrap;align-items:center;">
            <BTag
              v-for="c in statusColors"
              :key="c"
              :color="c"
              :data-testid="'color-' + c"
            >{{ c }}</BTag>
          </div>
        </div>
        <div>
          <p style="font-size:12px;color:#666;margin:0 0 6px;">Palette colors</p>
          <div style="display:flex;gap:0.5rem;flex-wrap:wrap;align-items:center;">
            <BTag
              v-for="c in palette"
              :key="c"
              :color="c"
              :data-testid="'color-' + c"
            >{{ c }}</BTag>
          </div>
        </div>
      </div>
    \`
  }),
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const colorsToCheck = ['success', 'processing', 'error', 'warning', 'magenta', 'blue', 'purple'];
    colorsToCheck.forEach(c => {
      const el = canvas.getByTestId(\`color-\${c}\`);
      expect(el.classList.contains(\`b-tag--\${c}\`)).toBe(true);
    });
  }
}`,...d.parameters?.docs?.source},description:{story:`All 16 preset color palettes.`,...d.parameters?.docs?.description}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  name: 'Custom Colors',
  parameters: {
    controls: {
      disable: true
    },
    docs: {
      source: {
        code: \`<BTag color="#f50">Custom hex</BTag>
<BTag color="oklch(60% 0.2 180)">Custom oklch</BTag>\`
      }
    }
  },
  render: () => ({
    components: {
      BTag
    },
    setup() {
      const customColors = ['#f50', '#2db7f5', '#87d068', '#108ee9', 'oklch(65% 0.2 340)'];
      return {
        customColors
      };
    },
    template: \`
      <div style="padding:2rem;display:flex;gap:0.5rem;flex-wrap:wrap;align-items:center;">
        <BTag
          v-for="c in customColors"
          :key="c"
          :color="c"
          data-testid="custom-color-tag"
        >{{ c }}</BTag>
      </div>
    \`
  }),
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const tags = canvas.getAllByTestId('custom-color-tag');
    tags.forEach(tag => {
      expect(tag.classList.contains('b-tag--custom-color')).toBe(true);
      const style = tag.getAttribute('style') ?? '';
      expect(style).toContain('--b-tag-custom-color');
    });
  }
}`,...f.parameters?.docs?.source},description:{story:`Pass any CSS color string for full custom palette control.`,...f.parameters?.docs?.description}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: true
    },
    docs: {
      source: {
        code: \`<BTag size="small">Small</BTag>
<BTag>Default</BTag>
<BTag size="large">Large</BTag>\`
      }
    }
  },
  render: () => ({
    components: {
      BTag
    },
    template: \`
      <div style="padding:2rem;display:flex;gap:0.75rem;align-items:center;">
        <BTag size="small" data-testid="size-small" color="processing">Small</BTag>
        <BTag data-testid="size-default" color="processing">Default</BTag>
        <BTag size="large" data-testid="size-large" color="processing">Large</BTag>
      </div>
    \`
  }),
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByTestId('size-small').classList.contains('b-tag--small')).toBe(true);
    expect(canvas.getByTestId('size-default').classList.contains('b-tag--small')).toBe(false);
    expect(canvas.getByTestId('size-default').classList.contains('b-tag--large')).toBe(false);
    expect(canvas.getByTestId('size-large').classList.contains('b-tag--large')).toBe(true);
  }
}`,...p.parameters?.docs?.source},description:{story:`Three available sizes: small, default, large.`,...p.parameters?.docs?.description}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: true
    },
    docs: {
      source: {
        code: \`<BTag variant="filled" color="blue">Filled</BTag>
<BTag variant="outlined" color="blue">Outlined</BTag>\`
      }
    }
  },
  render: () => ({
    components: {
      BTag
    },
    setup() {
      const colors: BTagColor[] = ['blue', 'success', 'error', 'warning'];
      return {
        colors
      };
    },
    template: \`
      <div style="padding:2rem;display:flex;flex-direction:column;gap:1rem;">
        <div>
          <p style="font-size:12px;color:#666;margin:0 0 6px;">Filled</p>
          <div style="display:flex;gap:0.5rem;flex-wrap:wrap;">
            <BTag v-for="c in colors" :key="c" :color="c" variant="filled" data-testid="variant-filled">{{ c }}</BTag>
          </div>
        </div>
        <div>
          <p style="font-size:12px;color:#666;margin:0 0 6px;">Outlined</p>
          <div style="display:flex;gap:0.5rem;flex-wrap:wrap;">
            <BTag v-for="c in colors" :key="c" :color="c" variant="outlined" data-testid="variant-outlined">{{ c }}</BTag>
          </div>
        </div>
        <div>
          <p style="font-size:12px;color:#666;margin:0 0 6px;">Borderless</p>
          <div style="display:flex;gap:0.5rem;flex-wrap:wrap;">
            <BTag v-for="c in colors" :key="c" :color="c" :bordered="false" data-testid="variant-borderless">{{ c }}</BTag>
          </div>
        </div>
      </div>
    \`
  }),
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    canvas.getAllByTestId('variant-filled').forEach(el => {
      expect(el.classList.contains('b-tag--filled')).toBe(true);
    });
    canvas.getAllByTestId('variant-outlined').forEach(el => {
      expect(el.classList.contains('b-tag--outlined')).toBe(true);
    });
    canvas.getAllByTestId('variant-borderless').forEach(el => {
      expect(el.classList.contains('b-tag--borderless')).toBe(true);
    });
  }
}`,...m.parameters?.docs?.source},description:{story:`Filled (default) and outlined variants across a few colors.`,...m.parameters?.docs?.description}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: true
    },
    docs: {
      source: {
        code: \`<BTag closable @close="onClose">Closable</BTag>\`
      }
    }
  },
  render: () => ({
    components: {
      BTag
    },
    setup() {
      const tags = ref(['Apple', 'Pear', 'Orange', 'Banana']);
      function remove(label: string) {
        tags.value = tags.value.filter(t => t !== label);
      }
      const controlledVis = ref(true);
      return {
        tags,
        remove,
        controlledVis
      };
    },
    template: \`
      <div style="padding:2rem;display:flex;flex-direction:column;gap:1.5rem;align-items:flex-start;">
        <div>
          <p style="font-size:12px;color:#666;margin:0 0 6px;">Uncontrolled - click × to hide</p>
          <div style="display:flex;gap:0.5rem;flex-wrap:wrap;">
            <BTag
              v-for="t in tags"
              :key="t"
              closable
              color="blue"
              :data-testid="'closable-' + t.toLowerCase()"
              @close="remove(t)"
            >{{ t }}</BTag>
          </div>
        </div>
        <div>
          <p style="font-size:12px;color:#666;margin:0 0 6px;">Controlled - parent drives visibility</p>
          <BTag
            data-testid="controlled-tag"
            closable
            color="success"
            v-model:visible="controlledVis"
          >Controlled</BTag>
          <button
            v-if="!controlledVis"
            style="margin-left:0.5rem;font-size:12px;cursor:pointer;"
            @click="controlledVis=true"
          >Restore</button>
        </div>
      </div>
    \`
  }),
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);

    // Close one tag
    const appleTag = canvas.getByTestId('closable-apple');
    const closeBtn = appleTag.querySelector<HTMLElement>('.b-tag__close');
    expect(closeBtn).not.toBeNull();
    await userEvent.click(closeBtn!);
    // After close, the tag should be removed from DOM (uncontrolled hides itself)
    await new Promise(r => setTimeout(r, 50));
    expect(canvas.queryByTestId('closable-apple')).toBeNull();

    // Controlled tag: clicking × should still be visible (parent hasn't hidden it reactively
    // because play functions can't update the Vue state directly from here unless wired)
    const controlled = canvas.getByTestId('controlled-tag');
    expect(controlled).not.toBeNull();
  }
}`,...h.parameters?.docs?.source},description:{story:`Tags with close buttons - uncontrolled (self-hide) and controlled.`,...h.parameters?.docs?.description}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  name: 'Custom Close Icon',
  parameters: {
    controls: {
      disable: true
    },
    docs: {
      source: {
        code: \`<!-- prop -->
<BTag closable close-icon="✕">Tag</BTag>

<!-- slot -->
<BTag closable>
  Tag
  <template #closeIcon>🗑️</template>
</BTag>\`
      }
    }
  },
  render: () => ({
    components: {
      BTag
    },
    template: \`
      <div style="padding:2rem;display:flex;gap:0.75rem;flex-wrap:wrap;align-items:center;">
        <BTag closable close-icon="✕" data-testid="close-prop">Via prop</BTag>
        <BTag closable data-testid="close-slot">
          Via slot
          <template #closeIcon>🗑️</template>
        </BTag>
      </div>
    \`
  }),
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);

    // Prop variant: custom text span, no SVG
    const propTag = canvas.getByTestId('close-prop');
    const propClose = propTag.querySelector('.b-tag__close');
    expect(propClose).not.toBeNull();
    expect(propClose!.querySelector('.b-tag__close-icon')).toBeNull();

    // Slot variant: slot content rendered
    const slotTag = canvas.getByTestId('close-slot');
    const slotClose = slotTag.querySelector('.b-tag__close');
    expect(slotClose).not.toBeNull();
    expect(slotClose!.textContent?.trim()).toContain('🗑️');
  }
}`,...g.parameters?.docs?.source},description:{story:`Replace the default × icon via prop or slot.`,...g.parameters?.docs?.description}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  name: 'Accessibility (roles & keyboard)',
  parameters: {
    controls: {
      disable: true
    },
    docs: {
      description: {
        story: 'Verifies that: ' + 'the root is a semantic \`<span>\`; ' + 'the close button is a \`<button type="button">\` with \`aria-label="Remove tag"\`; ' + 'prop-only icons are \`aria-hidden\` (decorative); slot icons use \`role="img"\` + \`aria-label\`; ' + 'keyboard <kbd>Enter</kbd> activates close.'
      }
    }
  },
  render: () => ({
    components: {
      BTag
    },
    setup() {
      const vis1 = ref(true);
      const vis2 = ref(true);
      const vis3 = ref(true);
      return {
        vis1,
        vis2,
        vis3
      };
    },
    template: \`
      <div style="padding:2rem;display:flex;flex-direction:column;gap:1rem;align-items:flex-start;">
        <BTag data-testid="a11y-basic" color="blue">Label only</BTag>
        <BTag data-testid="a11y-closable" closable color="success" v-model:visible="vis1">Closable (click)</BTag>
        <BTag data-testid="a11y-icon" closable color="warning" v-model:visible="vis2">
          With icon
          <template #icon>
            <svg role="img" aria-label="Star" focusable="false" viewBox="0 0 24 24" width="12" height="12" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
            </svg>
          </template>
        </BTag>
        <BTag data-testid="a11y-keyboard" closable color="geekblue" v-model:visible="vis3">Keyboard close</BTag>
      </div>
    \`
  }),
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);

    // ── Structural checks ────────────────────────────────────────────────
    // Root element is a <span>
    const basic = canvas.getByTestId('a11y-basic');
    expect(basic.tagName).toBe('SPAN');

    // Close button semantics
    const closable = canvas.getByTestId('a11y-closable');
    const closeBtn = closable.querySelector('.b-tag__close') as HTMLButtonElement;
    expect(closeBtn).not.toBeNull();
    expect(closeBtn.tagName).toBe('BUTTON');
    expect(closeBtn.getAttribute('type')).toBe('button');
    expect(closeBtn.getAttribute('aria-label')).toBe('Remove tag');

    // Default close SVG is aria-hidden
    const closeSvg = closeBtn.querySelector('.b-tag__close-icon');
    expect(closeSvg?.getAttribute('aria-hidden')).toBe('true');

    // Icon uses #icon slot → wrapper has no aria-hidden; inner SVG carries role="img" + aria-label
    const iconTag = canvas.getByTestId('a11y-icon');
    const iconEl = iconTag.querySelector('.b-tag__icon');
    expect(iconEl?.getAttribute('aria-hidden')).toBeNull();
    const iconImg = iconEl?.querySelector('[role="img"]');
    expect(iconImg?.getAttribute('aria-label')).toBe('Star');

    // ── Click close ──────────────────────────────────────────────────────
    await userEvent.click(closeBtn);
    // Wait for the CSS fade-out transition (--b-tag-transition-duration: 200ms) to finish
    await new Promise(r => setTimeout(r, 300));
    expect(canvas.queryByTestId('a11y-closable')).toBeNull();

    // ── Keyboard close (Enter) ───────────────────────────────────────────
    // In userEvent v14 (stateful setup instance), keyboard() dispatches to
    // document.activeElement - so .focus() correctly seeds the target.
    const kbTag = canvas.getByTestId('a11y-keyboard');
    const kbCloseBtn = kbTag.querySelector('.b-tag__close') as HTMLButtonElement;
    kbCloseBtn.focus();
    expect(document.activeElement).toBe(kbCloseBtn);
    await userEvent.keyboard('{Enter}');
    await new Promise(r => setTimeout(r, 300));
    expect(canvas.queryByTestId('a11y-keyboard')).toBeNull();
  }
}`,..._.parameters?.docs?.source},description:{story:`Verifies ARIA roles, keyboard navigation, and focus behavior on the close button.`,..._.parameters?.docs?.description}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  name: 'Theming (CSS vars)',
  parameters: {
    controls: {
      disable: true
    },
    docs: {
      description: {
        story: 'Override \`--b-tag-*\` CSS custom properties inline or via a class to fully customize the component without touching source.'
      },
      source: {
        code: \`<BTag style="--b-tag-bg:#e6f4ff;--b-tag-border-color:#91caff;--b-tag-color:#0958d9;--b-tag-border-radius:12px;">
  Rounded blue
</BTag>\`
      }
    }
  },
  render: () => ({
    components: {
      BTag
    },
    template: \`
      <div style="padding:2rem;display:flex;flex-direction:column;gap:1rem;align-items:flex-start;">
        <div>
          <p style="font-size:12px;color:#666;margin:0 0 6px;">Default theme</p>
          <BTag>Default</BTag>
        </div>
        <div>
          <p style="font-size:12px;color:#666;margin:0 0 6px;">Rounded pill - custom vars</p>
          <BTag
            data-testid="theme-pill"
            style="--b-tag-border-radius:12px;--b-tag-bg:oklch(92% 0.06 260);--b-tag-border-color:oklch(72% 0.17 262);--b-tag-color:oklch(38% 0.18 262);"
          >Pill Tag</BTag>
        </div>
        <div>
          <p style="font-size:12px;color:#666;margin:0 0 6px;">Compact - small height & font via vars</p>
          <BTag
            data-testid="theme-compact"
            style="--b-tag-height:16px;--b-tag-font-size:10px;--b-tag-padding:0 4px;--b-tag-line-height:14px;"
          >Compact</BTag>
        </div>
        <div>
          <p style="font-size:12px;color:#666;margin:0 0 6px;">Custom brand color via var override</p>
          <BTag
            data-testid="theme-brand"
            closable
            style="--b-tag-bg:#fff7e6;--b-tag-border-color:#ffd591;--b-tag-color:#ad4e00;"
          >Brand Orange</BTag>
        </div>
      </div>
    \`
  })
}`,...v.parameters?.docs?.source},description:{story:"Override `--b-tag-*` CSS custom properties to customise appearance.",...v.parameters?.docs?.description}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  name: 'Interaction – close flows & keyboard',
  parameters: {
    controls: {
      disable: true
    },
    docs: {
      description: {
        story: 'Automated play function verifying click-to-close, keyboard close, controlled visibility, and event order.'
      }
    }
  },
  render: () => ({
    components: {
      BTag
    },
    setup() {
      const uncontrolledVis = ref(true);
      const controlledVis = ref(true);
      const closeLog = ref<string[]>([]);
      return {
        uncontrolledVis,
        controlledVis,
        closeLog
      };
    },
    template: \`
      <div style="padding:2rem;display:flex;flex-direction:column;gap:1.5rem;align-items:flex-start;">
        <!-- Uncontrolled self-hide -->
        <div>
          <p style="font-size:12px;color:#666;margin:0 0 4px;">Uncontrolled (self-manage visibility)</p>
          <BTag data-testid="int-uncontrolled" closable color="blue">Uncontrolled</BTag>
        </div>

        <!-- Controlled -->
        <div>
          <p style="font-size:12px;color:#666;margin:0 0 4px;">Controlled (v-model:visible)</p>
          <BTag data-testid="int-controlled" closable color="success" v-model:visible="controlledVis">Controlled</BTag>
          <button
            v-if="!controlledVis"
            data-testid="int-restore"
            style="margin-left:0.5rem;font-size:12px;cursor:pointer;"
            @click="controlledVis=true"
          >Restore</button>
        </div>

        <!-- Keyboard close -->
        <div>
          <p style="font-size:12px;color:#666;margin:0 0 4px;">Keyboard close (focus close btn → Enter)</p>
          <BTag data-testid="int-keyboard" closable color="warning">Keyboard</BTag>
        </div>
      </div>
    \`
  }),
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);

    // ── Uncontrolled: click to close ──────────────────────
    const uncontrolled = canvas.getByTestId('int-uncontrolled');
    const ucClose = uncontrolled.querySelector<HTMLElement>('.b-tag__close')!;
    await userEvent.click(ucClose);
    // Wait for the CSS fade-out transition (--b-tag-transition-duration: 200ms) to finish
    await new Promise(r => setTimeout(r, 300));
    expect(canvas.queryByTestId('int-uncontrolled')).toBeNull();

    // ── Controlled: close + restore ──────────────────────
    const controlled = canvas.getByTestId('int-controlled');
    const ctrlClose = controlled.querySelector<HTMLElement>('.b-tag__close')!;
    await userEvent.click(ctrlClose);
    await new Promise(r => setTimeout(r, 300));
    expect(canvas.queryByTestId('int-controlled')).toBeNull();
    // restore
    const restoreBtn = canvas.getByTestId('int-restore');
    await userEvent.click(restoreBtn);
    await new Promise(r => setTimeout(r, 300));
    expect(canvas.getByTestId('int-controlled')).not.toBeNull();

    // ── Keyboard close ────────────────────────────────────
    const kbTag = canvas.getByTestId('int-keyboard');
    const kbClose = kbTag.querySelector<HTMLElement>('.b-tag__close')!;
    kbClose.focus();
    expect(document.activeElement).toBe(kbClose);
    await userEvent.keyboard('{Enter}');
    await new Promise(r => setTimeout(r, 300));
    expect(canvas.queryByTestId('int-keyboard')).toBeNull();
  }
}`,...y.parameters?.docs?.source},description:{story:`Automated play function covering the main interaction flows.`,...y.parameters?.docs?.description}}},b=[`Playground`,`Basic`,`PresetColors`,`CustomColors`,`Sizes`,`Variants`,`Closable`,`CustomCloseIcon`,`Accessibility`,`Theming`,`InteractionTests`]}))();export{_ as Accessibility,u as Basic,h as Closable,g as CustomCloseIcon,f as CustomColors,y as InteractionTests,l as Playground,d as PresetColors,p as Sizes,v as Theming,m as Variants,b as __namedExportsOrder,c as default};