import{n as e}from"./chunk-BneVvdWh.js";import{X as t,i as n}from"./iframe-By7LT0M0.js";import{t as r,xt as i}from"./components-DGiLIoKr.js";var a,o,s,c,l,u,d,f,p,m,h,g,_,v,y,b,x,S,C,w,T,E,D,O;e((()=>{n(),r(),{expect:a,fn:o,userEvent:s,waitFor:c,within:l}=__STORYBOOK_MODULE_TEST__,u={title:`Data Display/Calendar`,component:i,tags:[`autodocs`],argTypes:{modelValue:{control:`date`,description:"Currently selected date (controlled). Pair with `v-model`.",table:{category:`Two-Way Binding Props`}},mode:{control:`select`,options:[`month`,`year`],description:"Controlled panel mode. Pair with `v-model:mode`.",table:{category:`Two-Way Binding Props`}},defaultValue:{control:`date`,description:`Initial selected date for uncontrolled usage.`,table:{category:`Props`}},defaultMode:{control:`select`,options:[`month`,`year`],description:`Initial panel mode for uncontrolled usage.`,table:{defaultValue:{summary:`'month'`},category:`Props`}},fullscreen:{control:`boolean`,description:`Full-screen layout when true; mini layout when false.`,table:{defaultValue:{summary:`true`},category:`Props`}},showWeek:{control:`boolean`,description:`Show a week-number column in month mode.`,table:{defaultValue:{summary:`false`},category:`Props`}},locale:{control:`text`,description:`BCP 47 locale tag (e.g. "en-US", "vi-VN", "de-DE").`,table:{category:`Props`}},ariaLabel:{control:`text`,description:`Accessible label for the calendar root region.`,table:{defaultValue:{summary:`'Calendar'`},category:`Props`}},validRange:{table:{category:`Props`}},disabledDate:{table:{category:`Props`}}},parameters:{docs:{description:{component:`The <code>BCalendar</code> displays date or month panels for displaying and selecting dates. Mirrors the AntD Calendar API: <code>mode</code>, <code>fullscreen</code>, <code>showWeek</code>, <code>validRange</code>, <code>disabledDate</code>, plus header / cell slots matching <code>headerRender</code>, <code>cellRender</code>, and <code>fullCellRender</code>. Dark mode and reduced-motion friendly.`}}}},d={args:{fullscreen:!0,showWeek:!1,defaultMode:`month`},render:e=>({components:{BCalendar:i},setup:()=>({args:e}),template:`
      <div style="max-width: 840px; margin: 1rem auto;">
        <BCalendar v-bind="args" />
      </div>
    `})},f={parameters:{controls:{disable:!0},docs:{source:{code:`<BCalendar />`}}},render:()=>({components:{BCalendar:i},template:`
      <div style="max-width: 840px; margin: 1rem auto;">
        <BCalendar data-testid="basic" />
      </div>
    `}),play:async({canvasElement:e})=>{let t=l(e).getByTestId(`basic`);a(t.classList.contains(`b-calendar--fullscreen`)).toBe(!0),a(t.querySelectorAll(`.b-calendar__cell`).length).toBe(42)}},p={parameters:{controls:{disable:!0},docs:{source:{code:`<BCalendar :fullscreen="false" />`}}},render:()=>({components:{BCalendar:i},template:`
      <div style="max-width: 320px; margin: 1rem auto;">
        <BCalendar data-testid="mini" :fullscreen="false" />
      </div>
    `}),play:async({canvasElement:e})=>{a(l(e).getByTestId(`mini`).classList.contains(`b-calendar--mini`)).toBe(!0)}},m={name:`Show Week Numbers`,parameters:{controls:{disable:!0},docs:{source:{code:`<BCalendar show-week />`}}},render:()=>({components:{BCalendar:i},template:`
      <div style="max-width: 840px; margin: 1rem auto;">
        <BCalendar data-testid="show-week" show-week />
      </div>
    `}),play:async({canvasElement:e})=>{let t=l(e).getByTestId(`show-week`);a(t.querySelector(`.b-calendar__weekday--week`)).toBeTruthy(),a(t.querySelectorAll(`.b-calendar__week-number`).length).toBeGreaterThan(0)}},h={name:`Year Mode`,parameters:{controls:{disable:!0},docs:{source:{code:`<BCalendar default-mode="year" />`}}},render:()=>({components:{BCalendar:i},template:`
      <div style="max-width: 840px; margin: 1rem auto;">
        <BCalendar data-testid="year-mode" default-mode="year" />
      </div>
    `}),play:async({canvasElement:e})=>{let t=l(e).getByTestId(`year-mode`);a(t.classList.contains(`b-calendar--mode-year`)).toBe(!0),a(t.querySelectorAll(`.b-calendar__cell--month`).length).toBe(12)}},g={name:`Disabled Dates`,parameters:{controls:{disable:!0},docs:{source:{code:`<BCalendar :disabled-date="d => d.getDay() === 0 || d.getDay() === 6" />`}}},render:()=>({components:{BCalendar:i},setup(){return{disabledDate:e=>e.getDay()===0||e.getDay()===6}},template:`
      <div style="max-width: 840px; margin: 1rem auto;">
        <BCalendar data-testid="disabled" :disabled-date="disabledDate" />
      </div>
    `}),play:async({canvasElement:e})=>{a(l(e).getByTestId(`disabled`).querySelectorAll(`.b-calendar__cell--disabled`).length).toBeGreaterThan(0)}},_={name:`Valid Range`,parameters:{controls:{disable:!0},docs:{source:{code:`<BCalendar :valid-range="[new Date(2026, 4, 10), new Date(2026, 4, 25)]" />`}}},render:()=>({components:{BCalendar:i},setup(){return{validRange:[new Date(2026,4,10),new Date(2026,4,25)],defaultValue:new Date(2026,4,15)}},template:`
      <div style="max-width: 840px; margin: 1rem auto;">
        <BCalendar
          data-testid="valid-range"
          :valid-range="validRange"
          :default-value="defaultValue"
        />
      </div>
    `})},v={name:`Custom Cell Content`,parameters:{controls:{disable:!0},docs:{source:{code:`<BCalendar>
  <template #dateCell="{ date }">
    <div v-if="date.getDate() === 8">Event</div>
  </template>
</BCalendar>`}}},render:()=>({components:{BCalendar:i},template:`
      <div style="max-width: 840px; margin: 1rem auto;">
        <BCalendar data-testid="custom-cell">
          <template #dateCell="{ date }">
            <ul v-if="date.getDate() === 8" style="list-style:none;margin:0;padding:0;font-size:11px;">
              <li style="background:oklch(95% 0.04 250);color:oklch(40% 0.18 260);padding:2px 6px;border-radius:4px;">
                Standup
              </li>
            </ul>
          </template>
        </BCalendar>
      </div>
    `}),play:async({canvasElement:e})=>{let t=l(e).getByTestId(`custom-cell`).querySelector(`ul`);a(t).toBeTruthy(),a(t?.textContent).toContain(`Standup`)}},y={name:`With Events`,parameters:{controls:{disable:!0},docs:{description:{story:"Pass an `events` function returning items per date - the calendar auto-renders colored markers in each day cell and pops a built-in details modal on click. No slot or external modal wiring needed."},source:{code:`<BCalendar :events="getEvents" />`}}},render:()=>({components:{BCalendar:i},setup(){let e={8:[{type:`warning`,title:`This is warning event`},{type:`success`,title:`This is usual event`}],10:[{type:`warning`,title:`This is warning event`},{type:`success`,title:`This is usual event`},{type:`error`,title:`This is error event`}],15:[{type:`warning`,title:`This is warning event`},{type:`success`,title:`This is very long usual event......`,description:`A long-running task tracked from Q2.`},{type:`error`,title:`This is error event 1`},{type:`error`,title:`This is error event 2`},{type:`error`,title:`This is error event 3`},{type:`error`,title:`This is error event 4`}]};return{getEvents:t=>e[t.getDate()]??[]}},template:`
      <div data-testid="events-wrapper" style="max-width: 1100px; margin: 1rem auto;">
        <BCalendar data-testid="events-calendar" :events="getEvents" />
      </div>
    `}),play:async({canvasElement:e})=>{let t=l(e).getByTestId(`events-calendar`),n=t.querySelector(`[data-b-calendar-date="2026-05-08"] .b-calendar__events`),r=t.querySelector(`[data-b-calendar-date="2026-05-10"] .b-calendar__events`),i=t.querySelector(`[data-b-calendar-date="2026-05-15"] .b-calendar__events`);a(n).toBeTruthy(),a(r).toBeTruthy(),a(i).toBeTruthy(),a(n?.querySelectorAll(`.b-calendar__event`)).toHaveLength(2),a(r?.querySelectorAll(`.b-calendar__event`)).toHaveLength(3),a(i?.querySelectorAll(`.b-calendar__event`).length).toBeGreaterThanOrEqual(3),a(t.querySelector(`[data-b-calendar-date="2026-05-11"] .b-calendar__events`)).toBeNull();let o=t.querySelector(`[data-b-calendar-date="2026-05-15"]`);a(o).toBeTruthy(),await s.click(o);let u=await c(()=>{let e=document.body.querySelector(`.b-calendar__modal-body`);if(!e)throw Error(`modal not rendered yet`);return e},{timeout:2e3});a(u).toBeTruthy(),a(u.querySelectorAll(`.b-calendar__modal-event`)).toHaveLength(6),a(u.textContent).toContain(`This is very long usual event......`);let d=u.querySelector(`.b-calendar__modal-close`);a(d).toBeTruthy(),await s.click(d)}},b={name:`Custom Header`,parameters:{controls:{disable:!0},docs:{source:{code:`<BCalendar>
  <template #header="{ value, mode, onTypeChange, onChange }">
    <!-- custom UI -->
  </template>
</BCalendar>`}}},render:()=>({components:{BCalendar:i},template:`
      <div style="max-width: 840px; margin: 1rem auto;">
        <BCalendar data-testid="custom-header">
          <template #header="{ value, mode }">
            <div data-testid="custom-header-content"
                 style="flex:1;display:flex;align-items:center;justify-content:space-between;
                        gap:16px;padding:8px 0 16px;font:600 18px sans-serif;">
              <span>{{ value.toLocaleDateString('en-US', { month: 'long', year: 'numeric' }) }}</span>
              <span style="color:oklch(54.6% 0.245 262.881);font-size:14px;font-weight:500;">Mode: {{ mode }}</span>
            </div>
          </template>
        </BCalendar>
      </div>
    `}),play:async({canvasElement:e})=>{a(l(e).getByTestId(`custom-header-content`)).toBeTruthy()}},x={name:`Controlled (v-model)`,parameters:{controls:{disable:!0},docs:{source:{code:`<BCalendar v-model="value" v-model:mode="mode" />`}}},render:()=>({components:{BCalendar:i},setup(){return{value:t(new Date(2026,4,15)),mode:t(`month`),fmt:e=>e?`${e.getFullYear()}-${String(e.getMonth()+1).padStart(2,`0`)}-${String(e.getDate()).padStart(2,`0`)}`:``}},template:`
      <div style="max-width: 840px; margin: 1rem auto;">
        <p data-testid="ctrl-info" style="font:13px sans-serif;color:#595959;margin:0 0 8px;">
          Selected: <code data-testid="ctrl-selected">{{ fmt(value) }}</code>
          / mode: <code>{{ mode }}</code>
        </p>
        <BCalendar data-testid="controlled" v-model="value" v-model:mode="mode" />
      </div>
    `}),play:async({canvasElement:e})=>{let t=l(e),n=t.getByTestId(`controlled`).querySelector(`[data-b-calendar-date="2026-05-20"]`);await s.click(n),a(t.getByTestId(`ctrl-selected`).textContent).toBe(`2026-05-20`)}},S={name:`Localized (vi-VN)`,parameters:{controls:{disable:!0},docs:{source:{code:`<BCalendar locale="vi-VN" />`}}},render:()=>({components:{BCalendar:i},template:`
      <div style="max-width: 840px; margin: 1rem auto;">
        <BCalendar data-testid="locale" locale="vi-VN" />
      </div>
    `})},C={name:`Accessibility (roles, ARIA, keyboard)`,parameters:{controls:{disable:!0},docs:{description:{story:`Verifies <code>role="region"</code>, <code>role="grid"</code>, <code>role="gridcell"</code>, <code>aria-current="date"</code> on today, roving tabindex, polite live region, and arrow-key navigation.`}}},render:()=>({components:{BCalendar:i},setup(){return{value:t(new Date(2026,4,15))}},template:`
      <div style="max-width: 840px; margin: 1rem auto;">
        <BCalendar data-testid="a11y" v-model="value" />
      </div>
    `}),play:async({canvasElement:e})=>{let t=l(e).getByTestId(`a11y`);a(t.getAttribute(`role`)).toBe(`region`),a(t.getAttribute(`aria-label`)).toBe(`Calendar`),a(t.querySelector(`.b-calendar__table`).getAttribute(`role`)).toBe(`grid`);let n=t.querySelectorAll(`.b-calendar__cell`);a(n.length).toBe(42),n.forEach(e=>a(e.getAttribute(`role`)).toBe(`gridcell`));let r=Array.from(n).filter(e=>e.getAttribute(`tabindex`)===`0`);a(r.length).toBe(1),a(r[0].getAttribute(`data-b-calendar-date`)).toBe(`2026-05-15`),a(t.querySelector(`.b-calendar__cell--selected`).getAttribute(`aria-selected`)).toBe(`true`),r[0].focus(),await s.keyboard(`{ArrowRight}`),a(t.querySelector(`[data-b-calendar-date="2026-05-16"]`).getAttribute(`tabindex`)).toBe(`0`),a(t.querySelector(`.b-calendar__sr-only[aria-live="polite"]`)).toBeTruthy(),a(t.querySelector(`.b-calendar__mode-switch`).getAttribute(`role`)).toBe(`radiogroup`)}},w={name:`Interaction - full flow`,parameters:{controls:{disable:!0},docs:{description:{story:`Drives date click, mode switch, header navigation, and asserts change / select / panelChange callbacks.`}}},args:{"onUpdate:modelValue":o(),onChange:o(),onSelect:o(),onPanelChange:o()},render:e=>({components:{BCalendar:i},setup:()=>({args:e}),template:`
      <div style="max-width: 840px; margin: 1rem auto;">
        <BCalendar data-testid="ix" v-bind="args" />
      </div>
    `}),play:async({canvasElement:e,args:t})=>{let n=l(e).getByTestId(`ix`),r=n.querySelector(`[data-b-calendar-date="2026-05-15"]`);await s.click(r),a(t[`onUpdate:modelValue`]).toHaveBeenCalled(),a(t.onChange).toHaveBeenCalled(),a(t.onSelect).toHaveBeenCalled();let i=n.querySelectorAll(`.b-calendar__mode-option input`)[1];await s.click(i),a(t.onPanelChange).toHaveBeenCalled()}},T={name:`Theming (CSS variables)`,parameters:{controls:{disable:!0},docs:{description:{story:`Override <code>--b-calendar-*</code> tokens to retheme. The example below overrides four tokens: primary color, item active bg, panel bg, and border radius.`}}},render:()=>({components:{BCalendar:i},template:`
      <div style="max-width: 840px; margin: 1rem auto;">
        <BCalendar
          data-testid="themed"
          style="
            --b-calendar-primary-color: oklch(42% 0.16 145);
            --b-calendar-item-active-bg: oklch(95% 0.05 145);
            --b-calendar-full-bg: oklch(98% 0.005 145);
            --b-calendar-border-radius: 16px;
            --b-calendar-cell-radius: 8px;
          "
        />
      </div>
    `}),play:async({canvasElement:e})=>{let t=l(e).getByTestId(`themed`);a(t.style.getPropertyValue(`--b-calendar-primary-color`)).toBeTruthy(),a(t.style.getPropertyValue(`--b-calendar-item-active-bg`)).toBeTruthy(),a(t.style.getPropertyValue(`--b-calendar-full-bg`)).toBeTruthy()}},E=[{token:`--b-calendar-full-bg`,defaultValue:`oklch(100% 0 0)`,description:`Background of the full calendar (AntD: fullBg).`},{token:`--b-calendar-full-panel-bg`,defaultValue:`oklch(100% 0 0)`,description:`Background of the full calendar panel (AntD: fullPanelBg).`},{token:`--b-calendar-item-active-bg`,defaultValue:`oklch(95% 0.04 250)`,description:`Background of the selected date cell (AntD: itemActiveBg).`},{token:`--b-calendar-mini-content-height`,defaultValue:`256px`,description:`Minimum content height of the mini calendar (AntD: miniContentHeight).`},{token:`--b-calendar-month-control-width`,defaultValue:`70px`,description:`Min-width of the month picker (AntD: monthControlWidth).`},{token:`--b-calendar-year-control-width`,defaultValue:`80px`,description:`Min-width of the year picker (AntD: yearControlWidth).`},{token:`--b-calendar-text-color`,defaultValue:`oklch(20% 0.005 260 / 88%)`,description:`Primary text color.`},{token:`--b-calendar-text-color-secondary`,defaultValue:`oklch(45% 0.005 260)`,description:`Secondary text color (weekday labels, etc.).`},{token:`--b-calendar-text-color-disabled`,defaultValue:`oklch(50% 0.005 260)`,description:`Color of disabled / outside-month cells.`},{token:`--b-calendar-border-color`,defaultValue:`oklch(85% 0.005 260)`,description:`Color of borders (selects, header divider, mini outline).`},{token:`--b-calendar-border-radius`,defaultValue:`8px`,description:`Outer corner radius.`},{token:`--b-calendar-cell-radius`,defaultValue:`4px`,description:`Corner radius of cells, selects, and buttons.`},{token:`--b-calendar-primary-color`,defaultValue:`oklch(54.6% 0.245 262.881)`,description:`Brand color for selected & today markers.`},{token:`--b-calendar-primary-color-text`,defaultValue:`oklch(100% 0 0)`,description:`Text on primary color background.`},{token:`--b-calendar-cell-hover-bg`,defaultValue:`oklch(95% 0.005 260)`,description:`Hover background for interactive cells.`},{token:`--b-calendar-cell-disabled-bg`,defaultValue:`oklch(96% 0.002 260)`,description:`Background of disabled cells.`},{token:`--b-calendar-padding`,defaultValue:`16px`,description:`Padding around the fullscreen calendar.`},{token:`--b-calendar-font-size`,defaultValue:`14px`,description:`Base font size.`},{token:`--b-calendar-motion-duration`,defaultValue:`200ms`,description:`Transition duration for hover and focus.`},{token:`--b-calendar-focus-ring`,defaultValue:`0 0 0 2px oklch(54.6% 0.245 262.881 / 35%)`,description:`Focus ring used on cells, selects, and the today button.`}],D={name:`Design Tokens`,parameters:{controls:{disable:!0},docs:{description:{story:`Reference table of every <code>--b-calendar-*</code> CSS custom property consumers can override to retheme the component.`}}},render:()=>({components:{BCalendar:i},setup:()=>({tokens:E}),template:`
      <div style="font-family:sans-serif;padding:1rem;max-width:1100px;margin:0 auto;">
        <h2 style="margin:0 0 8px;">BCalendar - Design Tokens</h2>
        <p style="margin:0 0 24px;color:#595959;">
          All tokens scoped to <code>.b-calendar</code>. Override inline or via a CSS class.
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
          Three+ tokens overridden inline (primary color, item active bg, full bg, border radius).
        </p>
        <BCalendar
          style="
            --b-calendar-primary-color: oklch(42% 0.16 145);
            --b-calendar-item-active-bg: oklch(95% 0.05 145);
            --b-calendar-full-bg: oklch(98% 0.005 145);
            --b-calendar-border-radius: 16px;
          "
        />
      </div>
    `})},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    fullscreen: true,
    showWeek: false,
    defaultMode: 'month'
  },
  render: args => ({
    components: {
      BCalendar
    },
    setup: () => ({
      args
    }),
    template: \`
      <div style="max-width: 840px; margin: 1rem auto;">
        <BCalendar v-bind="args" />
      </div>
    \`
  })
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: true
    },
    docs: {
      source: {
        code: \`<BCalendar />\`
      }
    }
  },
  render: () => ({
    components: {
      BCalendar
    },
    template: \`
      <div style="max-width: 840px; margin: 1rem auto;">
        <BCalendar data-testid="basic" />
      </div>
    \`
  }),
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const root = canvas.getByTestId('basic');
    expect(root.classList.contains('b-calendar--fullscreen')).toBe(true);
    expect(root.querySelectorAll('.b-calendar__cell').length).toBe(42);
  }
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: true
    },
    docs: {
      source: {
        code: \`<BCalendar :fullscreen="false" />\`
      }
    }
  },
  render: () => ({
    components: {
      BCalendar
    },
    template: \`
      <div style="max-width: 320px; margin: 1rem auto;">
        <BCalendar data-testid="mini" :fullscreen="false" />
      </div>
    \`
  }),
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const root = canvas.getByTestId('mini');
    expect(root.classList.contains('b-calendar--mini')).toBe(true);
  }
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  name: 'Show Week Numbers',
  parameters: {
    controls: {
      disable: true
    },
    docs: {
      source: {
        code: \`<BCalendar show-week />\`
      }
    }
  },
  render: () => ({
    components: {
      BCalendar
    },
    template: \`
      <div style="max-width: 840px; margin: 1rem auto;">
        <BCalendar data-testid="show-week" show-week />
      </div>
    \`
  }),
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const root = canvas.getByTestId('show-week');
    expect(root.querySelector('.b-calendar__weekday--week')).toBeTruthy();
    expect(root.querySelectorAll('.b-calendar__week-number').length).toBeGreaterThan(0);
  }
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  name: 'Year Mode',
  parameters: {
    controls: {
      disable: true
    },
    docs: {
      source: {
        code: \`<BCalendar default-mode="year" />\`
      }
    }
  },
  render: () => ({
    components: {
      BCalendar
    },
    template: \`
      <div style="max-width: 840px; margin: 1rem auto;">
        <BCalendar data-testid="year-mode" default-mode="year" />
      </div>
    \`
  }),
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const root = canvas.getByTestId('year-mode');
    expect(root.classList.contains('b-calendar--mode-year')).toBe(true);
    expect(root.querySelectorAll('.b-calendar__cell--month').length).toBe(12);
  }
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  name: 'Disabled Dates',
  parameters: {
    controls: {
      disable: true
    },
    docs: {
      source: {
        code: \`<BCalendar :disabled-date="d => d.getDay() === 0 || d.getDay() === 6" />\`
      }
    }
  },
  render: () => ({
    components: {
      BCalendar
    },
    setup() {
      const disabledDate = (d: Date) => d.getDay() === 0 || d.getDay() === 6;
      return {
        disabledDate
      };
    },
    template: \`
      <div style="max-width: 840px; margin: 1rem auto;">
        <BCalendar data-testid="disabled" :disabled-date="disabledDate" />
      </div>
    \`
  }),
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const root = canvas.getByTestId('disabled');
    expect(root.querySelectorAll('.b-calendar__cell--disabled').length).toBeGreaterThan(0);
  }
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  name: 'Valid Range',
  parameters: {
    controls: {
      disable: true
    },
    docs: {
      source: {
        code: \`<BCalendar :valid-range="[new Date(2026, 4, 10), new Date(2026, 4, 25)]" />\`
      }
    }
  },
  render: () => ({
    components: {
      BCalendar
    },
    setup() {
      const validRange: [Date, Date] = [new Date(2026, 4, 10), new Date(2026, 4, 25)];
      const defaultValue = new Date(2026, 4, 15);
      return {
        validRange,
        defaultValue
      };
    },
    template: \`
      <div style="max-width: 840px; margin: 1rem auto;">
        <BCalendar
          data-testid="valid-range"
          :valid-range="validRange"
          :default-value="defaultValue"
        />
      </div>
    \`
  })
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  name: 'Custom Cell Content',
  parameters: {
    controls: {
      disable: true
    },
    docs: {
      source: {
        code: \`<BCalendar>
  <template #dateCell="{ date }">
    <div v-if="date.getDate() === 8">Event</div>
  </template>
</BCalendar>\`
      }
    }
  },
  render: () => ({
    components: {
      BCalendar
    },
    template: \`
      <div style="max-width: 840px; margin: 1rem auto;">
        <BCalendar data-testid="custom-cell">
          <template #dateCell="{ date }">
            <ul v-if="date.getDate() === 8" style="list-style:none;margin:0;padding:0;font-size:11px;">
              <li style="background:oklch(95% 0.04 250);color:oklch(40% 0.18 260);padding:2px 6px;border-radius:4px;">
                Standup
              </li>
            </ul>
          </template>
        </BCalendar>
      </div>
    \`
  }),
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const root = canvas.getByTestId('custom-cell');
    const ul = root.querySelector('ul');
    expect(ul).toBeTruthy();
    expect(ul?.textContent).toContain('Standup');
  }
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  name: 'With Events',
  parameters: {
    controls: {
      disable: true
    },
    docs: {
      description: {
        story: 'Pass an \`events\` function returning items per date - the calendar auto-renders ' + 'colored markers in each day cell and pops a built-in details modal on click. ' + 'No slot or external modal wiring needed.'
      },
      source: {
        code: \`<BCalendar :events="getEvents" />\`
      }
    }
  },
  render: () => ({
    components: {
      BCalendar
    },
    setup() {
      const eventsByDay: Record<number, BCalendarEvent[]> = {
        8: [{
          type: 'warning',
          title: 'This is warning event'
        }, {
          type: 'success',
          title: 'This is usual event'
        }],
        10: [{
          type: 'warning',
          title: 'This is warning event'
        }, {
          type: 'success',
          title: 'This is usual event'
        }, {
          type: 'error',
          title: 'This is error event'
        }],
        15: [{
          type: 'warning',
          title: 'This is warning event'
        }, {
          type: 'success',
          title: 'This is very long usual event......',
          description: 'A long-running task tracked from Q2.'
        }, {
          type: 'error',
          title: 'This is error event 1'
        }, {
          type: 'error',
          title: 'This is error event 2'
        }, {
          type: 'error',
          title: 'This is error event 3'
        }, {
          type: 'error',
          title: 'This is error event 4'
        }]
      };
      const getEvents = (date: Date): BCalendarEvent[] => eventsByDay[date.getDate()] ?? [];
      return {
        getEvents
      };
    },
    template: \`
      <div data-testid="events-wrapper" style="max-width: 1100px; margin: 1rem auto;">
        <BCalendar data-testid="events-calendar" :events="getEvents" />
      </div>
    \`
  }),
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const root = canvas.getByTestId('events-calendar');

    // In-cell event lists rendered automatically by the component.
    const day8 = root.querySelector('[data-b-calendar-date="2026-05-08"] .b-calendar__events');
    const day10 = root.querySelector('[data-b-calendar-date="2026-05-10"] .b-calendar__events');
    const day15 = root.querySelector('[data-b-calendar-date="2026-05-15"] .b-calendar__events');
    expect(day8).toBeTruthy();
    expect(day10).toBeTruthy();
    expect(day15).toBeTruthy();
    expect(day8?.querySelectorAll('.b-calendar__event')).toHaveLength(2);
    expect(day10?.querySelectorAll('.b-calendar__event')).toHaveLength(3);
    expect(day15?.querySelectorAll('.b-calendar__event').length).toBeGreaterThanOrEqual(3);
    const day11 = root.querySelector('[data-b-calendar-date="2026-05-11"] .b-calendar__events');
    expect(day11).toBeNull();

    // Click May 15 → built-in modal opens with all 6 events.
    const cell15 = root.querySelector('[data-b-calendar-date="2026-05-15"]') as HTMLElement;
    expect(cell15).toBeTruthy();
    await userEvent.click(cell15);

    // <dialog> renders into the top-layer; query from document.
    const modalBody = await waitFor(() => {
      const el = document.body.querySelector('.b-calendar__modal-body');
      if (!el) throw new Error('modal not rendered yet');
      return el as HTMLElement;
    }, {
      timeout: 2000
    });
    expect(modalBody).toBeTruthy();
    const items = modalBody.querySelectorAll('.b-calendar__modal-event');
    expect(items).toHaveLength(6);
    expect(modalBody.textContent).toContain('This is very long usual event......');

    // Close modal via built-in close button.
    const closeBtn = modalBody.querySelector('.b-calendar__modal-close') as HTMLButtonElement;
    expect(closeBtn).toBeTruthy();
    await userEvent.click(closeBtn);
  }
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  name: 'Custom Header',
  parameters: {
    controls: {
      disable: true
    },
    docs: {
      source: {
        code: \`<BCalendar>
  <template #header="{ value, mode, onTypeChange, onChange }">
    <!-- custom UI -->
  </template>
</BCalendar>\`
      }
    }
  },
  render: () => ({
    components: {
      BCalendar
    },
    template: \`
      <div style="max-width: 840px; margin: 1rem auto;">
        <BCalendar data-testid="custom-header">
          <template #header="{ value, mode }">
            <div data-testid="custom-header-content"
                 style="flex:1;display:flex;align-items:center;justify-content:space-between;
                        gap:16px;padding:8px 0 16px;font:600 18px sans-serif;">
              <span>{{ value.toLocaleDateString('en-US', { month: 'long', year: 'numeric' }) }}</span>
              <span style="color:oklch(54.6% 0.245 262.881);font-size:14px;font-weight:500;">Mode: {{ mode }}</span>
            </div>
          </template>
        </BCalendar>
      </div>
    \`
  }),
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByTestId('custom-header-content')).toBeTruthy();
  }
}`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  name: 'Controlled (v-model)',
  parameters: {
    controls: {
      disable: true
    },
    docs: {
      source: {
        code: \`<BCalendar v-model="value" v-model:mode="mode" />\`
      }
    }
  },
  render: () => ({
    components: {
      BCalendar
    },
    setup() {
      const value = ref<Date | null>(new Date(2026, 4, 15));
      const mode = ref<BCalendarMode>('month');
      const fmt = (d: Date | null) => d ? \`\${d.getFullYear()}-\${String(d.getMonth() + 1).padStart(2, '0')}-\${String(d.getDate()).padStart(2, '0')}\` : '';
      return {
        value,
        mode,
        fmt
      };
    },
    template: \`
      <div style="max-width: 840px; margin: 1rem auto;">
        <p data-testid="ctrl-info" style="font:13px sans-serif;color:#595959;margin:0 0 8px;">
          Selected: <code data-testid="ctrl-selected">{{ fmt(value) }}</code>
          / mode: <code>{{ mode }}</code>
        </p>
        <BCalendar data-testid="controlled" v-model="value" v-model:mode="mode" />
      </div>
    \`
  }),
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const root = canvas.getByTestId('controlled');
    const cell = root.querySelector('[data-b-calendar-date="2026-05-20"]') as HTMLElement;
    await userEvent.click(cell);
    expect(canvas.getByTestId('ctrl-selected').textContent).toBe('2026-05-20');
  }
}`,...x.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  name: 'Localized (vi-VN)',
  parameters: {
    controls: {
      disable: true
    },
    docs: {
      source: {
        code: \`<BCalendar locale="vi-VN" />\`
      }
    }
  },
  render: () => ({
    components: {
      BCalendar
    },
    template: \`
      <div style="max-width: 840px; margin: 1rem auto;">
        <BCalendar data-testid="locale" locale="vi-VN" />
      </div>
    \`
  })
}`,...S.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  name: 'Accessibility (roles, ARIA, keyboard)',
  parameters: {
    controls: {
      disable: true
    },
    docs: {
      description: {
        story: 'Verifies <code>role="region"</code>, <code>role="grid"</code>, ' + '<code>role="gridcell"</code>, <code>aria-current="date"</code> on today, ' + 'roving tabindex, polite live region, and arrow-key navigation.'
      }
    }
  },
  render: () => ({
    components: {
      BCalendar
    },
    setup() {
      const value = ref<Date | null>(new Date(2026, 4, 15));
      return {
        value
      };
    },
    template: \`
      <div style="max-width: 840px; margin: 1rem auto;">
        <BCalendar data-testid="a11y" v-model="value" />
      </div>
    \`
  }),
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const root = canvas.getByTestId('a11y');

    // Region semantics.
    expect(root.getAttribute('role')).toBe('region');
    expect(root.getAttribute('aria-label')).toBe('Calendar');
    const grid = root.querySelector('.b-calendar__table') as HTMLElement;
    expect(grid.getAttribute('role')).toBe('grid');

    // Gridcells.
    const cells = root.querySelectorAll('.b-calendar__cell');
    expect(cells.length).toBe(42);
    cells.forEach(c => expect(c.getAttribute('role')).toBe('gridcell'));

    // Roving tabindex.
    const focusables = Array.from(cells).filter(c => c.getAttribute('tabindex') === '0');
    expect(focusables.length).toBe(1);
    expect(focusables[0].getAttribute('data-b-calendar-date')).toBe('2026-05-15');

    // Selected aria.
    const selected = root.querySelector('.b-calendar__cell--selected') as HTMLElement;
    expect(selected.getAttribute('aria-selected')).toBe('true');

    // Arrow-key navigation.
    (focusables[0] as HTMLElement).focus();
    await userEvent.keyboard('{ArrowRight}');
    const next = root.querySelector('[data-b-calendar-date="2026-05-16"]') as HTMLElement;
    expect(next.getAttribute('tabindex')).toBe('0');

    // Live region.
    const live = root.querySelector('.b-calendar__sr-only[aria-live="polite"]');
    expect(live).toBeTruthy();

    // Mode switch is a radiogroup.
    const modeSwitch = root.querySelector('.b-calendar__mode-switch') as HTMLElement;
    expect(modeSwitch.getAttribute('role')).toBe('radiogroup');
  }
}`,...C.parameters?.docs?.source}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  name: 'Interaction - full flow',
  parameters: {
    controls: {
      disable: true
    },
    docs: {
      description: {
        story: 'Drives date click, mode switch, header navigation, and asserts ' + 'change / select / panelChange callbacks.'
      }
    }
  },
  args: {
    'onUpdate:modelValue': fn(),
    onChange: fn(),
    onSelect: fn(),
    onPanelChange: fn()
  } as unknown as Story['args'],
  render: args => ({
    components: {
      BCalendar
    },
    setup: () => ({
      args
    }),
    template: \`
      <div style="max-width: 840px; margin: 1rem auto;">
        <BCalendar data-testid="ix" v-bind="args" />
      </div>
    \`
  }),
  play: async ({
    canvasElement,
    args
  }) => {
    const canvas = within(canvasElement);
    const root = canvas.getByTestId('ix');

    // Click a date.
    const cell = root.querySelector('[data-b-calendar-date="2026-05-15"]') as HTMLElement;
    await userEvent.click(cell);
    expect(args['onUpdate:modelValue']).toHaveBeenCalled();
    expect(args.onChange).toHaveBeenCalled();
    expect(args.onSelect).toHaveBeenCalled();

    // Switch to year mode via mode switch.
    const yearRadio = root.querySelectorAll('.b-calendar__mode-option input')[1] as HTMLElement;
    await userEvent.click(yearRadio);
    expect(args.onPanelChange).toHaveBeenCalled();
  }
}`,...w.parameters?.docs?.source}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  name: 'Theming (CSS variables)',
  parameters: {
    controls: {
      disable: true
    },
    docs: {
      description: {
        story: 'Override <code>--b-calendar-*</code> tokens to retheme. The example below ' + 'overrides four tokens: primary color, item active bg, panel bg, and border radius.'
      }
    }
  },
  render: () => ({
    components: {
      BCalendar
    },
    template: \`
      <div style="max-width: 840px; margin: 1rem auto;">
        <BCalendar
          data-testid="themed"
          style="
            --b-calendar-primary-color: oklch(42% 0.16 145);
            --b-calendar-item-active-bg: oklch(95% 0.05 145);
            --b-calendar-full-bg: oklch(98% 0.005 145);
            --b-calendar-border-radius: 16px;
            --b-calendar-cell-radius: 8px;
          "
        />
      </div>
    \`
  }),
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const root = canvas.getByTestId('themed') as HTMLElement;
    expect(root.style.getPropertyValue('--b-calendar-primary-color')).toBeTruthy();
    expect(root.style.getPropertyValue('--b-calendar-item-active-bg')).toBeTruthy();
    expect(root.style.getPropertyValue('--b-calendar-full-bg')).toBeTruthy();
  }
}`,...T.parameters?.docs?.source}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  name: 'Design Tokens',
  parameters: {
    controls: {
      disable: true
    },
    docs: {
      description: {
        story: 'Reference table of every <code>--b-calendar-*</code> CSS custom property ' + 'consumers can override to retheme the component.'
      }
    }
  },
  render: () => ({
    components: {
      BCalendar
    },
    setup: () => ({
      tokens: DESIGN_TOKENS
    }),
    template: \`
      <div style="font-family:sans-serif;padding:1rem;max-width:1100px;margin:0 auto;">
        <h2 style="margin:0 0 8px;">BCalendar - Design Tokens</h2>
        <p style="margin:0 0 24px;color:#595959;">
          All tokens scoped to <code>.b-calendar</code>. Override inline or via a CSS class.
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
          Three+ tokens overridden inline (primary color, item active bg, full bg, border radius).
        </p>
        <BCalendar
          style="
            --b-calendar-primary-color: oklch(42% 0.16 145);
            --b-calendar-item-active-bg: oklch(95% 0.05 145);
            --b-calendar-full-bg: oklch(98% 0.005 145);
            --b-calendar-border-radius: 16px;
          "
        />
      </div>
    \`
  })
}`,...D.parameters?.docs?.source}}},O=[`Playground`,`Basic`,`Mini`,`ShowWeek`,`YearMode`,`DisabledDates`,`ValidRange`,`CustomCellContent`,`WithEvents`,`CustomHeader`,`Controlled`,`Localized`,`Accessibility`,`InteractionTests`,`Theming`,`DesignTokens`]}))();export{C as Accessibility,f as Basic,x as Controlled,v as CustomCellContent,b as CustomHeader,D as DesignTokens,g as DisabledDates,w as InteractionTests,S as Localized,p as Mini,d as Playground,m as ShowWeek,T as Theming,_ as ValidRange,y as WithEvents,h as YearMode,O as __namedExportsOrder,u as default};