import{n as e}from"./chunk-BneVvdWh.js";import{X as t,i as n}from"./iframe-CT7ZgrLF.js";import{A as r,u as i}from"./types-CV_3xB-y.js";import{a,i as o,n as s,r as c,t as l}from"./BAutoComplete-CnhTXhxl.js";var u,d,f,p,m,h,g,_,v,y,b,x,S,C,w,T,E,D,O;e((()=>{l(),a(),r(),n(),{expect:u,userEvent:d,waitFor:f,within:p}=__STORYBOOK_MODULE_TEST__,m={title:`Data Entry/AutoComplete`,component:s,tags:[`autodocs`],argTypes:{modelValue:{control:`text`,description:`Current input value (v-model).`,table:{category:`Two-Way Binding Props`}},options:{control:`object`,description:`Data source for autocomplete suggestions.`},size:{control:`select`,options:Object.values(i),description:`Size of the input.`,table:{defaultValue:{summary:i.Medium}}},variant:{control:`select`,options:Object.values(o),description:`Visual variant of the input.`,table:{defaultValue:{summary:o.Outlined}}},status:{control:`select`,options:[void 0,...Object.values(c)],description:`Validation status.`},disabled:{control:`boolean`,description:`Whether the component is disabled.`,table:{defaultValue:{summary:`false`}}},placeholder:{control:`text`,description:`Placeholder text for the input.`},allowClear:{control:`boolean`,description:`Show clear button.`,table:{defaultValue:{summary:`false`}}},backfill:{control:`boolean`,description:`Populate input with highlighted option value on keyboard navigation.`,table:{defaultValue:{summary:`false`}}},defaultActiveFirstOption:{control:`boolean`,description:`Auto-activate the first option.`,table:{defaultValue:{summary:`true`}}},popupMatchSelectWidth:{control:`boolean`,description:`Match dropdown width to input.`,table:{defaultValue:{summary:`true`}}}},parameters:{docs:{description:{component:`<code>BAutoComplete</code> provides autocomplete functionality for text input. It filters suggestions as the user types and supports keyboard navigation, custom filtering, and controlled/uncontrolled usage.<br><br>Uses the native HTML <code>popover</code> attribute and CSS Anchor Positioning.`}}}},h=[{label:`Apple`,value:`apple`},{label:`Apricot`,value:`apricot`},{label:`Banana`,value:`banana`},{label:`Blueberry`,value:`blueberry`},{label:`Cherry`,value:`cherry`},{label:`Cranberry`,value:`cranberry`},{label:`Dragon Fruit`,value:`dragon-fruit`},{label:`Elderberry`,value:`elderberry`}],g=[`@gmail.com`,`@outlook.com`,`@yahoo.com`,`@icloud.com`],_={args:{options:h,placeholder:`Type a fruit name...`,size:`md`,variant:`outlined`,disabled:!1,allowClear:!0,backfill:!1,defaultActiveFirstOption:!0,popupMatchSelectWidth:!0},render:e=>({components:{BAutoComplete:s},setup:()=>({args:e,value:t(``)}),template:`
      <div style="padding: 40px; max-width: 320px;">
        <BAutoComplete v-bind="args" v-model="value" />
        <p style="margin-top: 12px; font-size: 12px; color: #666;">Value: "{{ value }}"</p>
      </div>
    `})},v={render:()=>({components:{BAutoComplete:s},setup:()=>({sm:t(``),md:t(``),lg:t(``),fruitOptions:h}),template:`
      <div style="padding: 40px; display: flex; flex-direction: column; gap: 16px; max-width: 320px;">
        <div>
          <p style="margin-bottom: 4px; font-size: 12px; color: #666;">Small</p>
          <BAutoComplete v-model="sm" :options="fruitOptions" size="sm" placeholder="Small" />
        </div>
        <div>
          <p style="margin-bottom: 4px; font-size: 12px; color: #666;">Medium (default)</p>
          <BAutoComplete v-model="md" :options="fruitOptions" size="md" placeholder="Medium" />
        </div>
        <div>
          <p style="margin-bottom: 4px; font-size: 12px; color: #666;">Large</p>
          <BAutoComplete v-model="lg" :options="fruitOptions" size="lg" placeholder="Large" />
        </div>
      </div>
    `})},y={render:()=>({components:{BAutoComplete:s},setup:()=>({outlined:t(``),filled:t(``),borderless:t(``),fruitOptions:h}),template:`
      <div style="padding: 40px; display: flex; flex-direction: column; gap: 16px; max-width: 320px;">
        <div>
          <p style="margin-bottom: 4px; font-size: 12px; color: #666;">Outlined (default)</p>
          <BAutoComplete v-model="outlined" :options="fruitOptions" variant="outlined" placeholder="Outlined" />
        </div>
        <div>
          <p style="margin-bottom: 4px; font-size: 12px; color: #666;">Filled</p>
          <BAutoComplete v-model="filled" :options="fruitOptions" variant="filled" placeholder="Filled" />
        </div>
        <div>
          <p style="margin-bottom: 4px; font-size: 12px; color: #666;">Borderless</p>
          <BAutoComplete v-model="borderless" :options="fruitOptions" variant="borderless" placeholder="Borderless" />
        </div>
      </div>
    `})},b={render:()=>({components:{BAutoComplete:s},setup:()=>{let e=t(``),n=t([]);return{value:e,options:n,handleSearch:e=>{!e||e.includes(`@`)?n.value=[]:n.value=g.map(t=>({label:`${e}${t}`,value:`${e}${t}`}))}}},template:`
      <div style="padding: 40px; max-width: 320px;">
        <p style="margin-bottom: 8px; font-size: 12px; color: #666;">Type a username to get email suggestions</p>
        <BAutoComplete
          v-model="value"
          :options="options"
          :filter-option="false"
          placeholder="Enter email"
          allow-clear
          @search="handleSearch"
        />
        <p style="margin-top: 12px; font-size: 12px; color: #666;">Value: "{{ value }}"</p>
      </div>
    `})},x={args:{options:h,backfill:!0,placeholder:`Use arrow keys to backfill...`},render:e=>({components:{BAutoComplete:s},setup:()=>({args:e,value:t(``)}),template:`
      <div style="padding: 40px; max-width: 320px;">
        <p style="margin-bottom: 8px; font-size: 12px; color: #666;">Arrow keys populate the input with the highlighted option</p>
        <BAutoComplete v-bind="args" v-model="value" />
      </div>
    `})},S={render:()=>({components:{BAutoComplete:s},setup:()=>({err:t(``),warn:t(``),fruitOptions:h}),template:`
      <div style="padding: 40px; display: flex; flex-direction: column; gap: 16px; max-width: 320px;">
        <div>
          <p style="margin-bottom: 4px; font-size: 12px; color: #666;">Error</p>
          <BAutoComplete v-model="err" :options="fruitOptions" status="error" placeholder="Error state" />
        </div>
        <div>
          <p style="margin-bottom: 4px; font-size: 12px; color: #666;">Warning</p>
          <BAutoComplete v-model="warn" :options="fruitOptions" status="warning" placeholder="Warning state" />
        </div>
      </div>
    `})},C={args:{options:h,placeholder:`Accessible autocomplete`},render:e=>({components:{BAutoComplete:s},setup:()=>({args:e,value:t(``)}),template:`
      <div style="padding: 40px; max-width: 320px;">
        <label id="ac-label" style="display: block; margin-bottom: 4px; font-size: 14px;">Fruit search</label>
        <BAutoComplete v-bind="args" v-model="value" aria-labelledby="ac-label" />
      </div>
    `}),play:async({canvasElement:e})=>{let t=p(e).getByRole(`combobox`);u(t.getAttribute(`role`)).toBe(`combobox`),u(t.getAttribute(`aria-haspopup`)).toBe(`listbox`),u(t.getAttribute(`aria-expanded`)).toBe(`false`),u(t.getAttribute(`aria-autocomplete`)).toBe(`list`),await d.click(t),await d.type(t,`a`),await f(()=>{u(t.getAttribute(`aria-expanded`)).toBe(`true`)}),await f(()=>{u(document.querySelector(`[role="listbox"]`)).toBeTruthy()}),await f(()=>{u(document.querySelectorAll(`[role="option"]`).length).toBeGreaterThan(0)}),await d.keyboard(`{ArrowDown}`),await f(()=>{u(t.getAttribute(`aria-activedescendant`)).toBeTruthy()}),await d.keyboard(`{Escape}`),await f(()=>{u(t.getAttribute(`aria-expanded`)).toBe(`false`)})}},w={render:()=>({components:{BAutoComplete:s},setup:()=>({v1:t(``),v2:t(``),v3:t(``),fruitOptions:h}),template:`
      <div style="padding: 40px; display: flex; gap: 40px; flex-wrap: wrap;">
        <div>
          <p style="margin-bottom: 8px; font-size: 12px; color: #666;">Default</p>
          <BAutoComplete v-model="v1" :options="fruitOptions" placeholder="Default theme" />
        </div>

        <div class="custom-ac-theme-purple">
          <p style="margin-bottom: 8px; font-size: 12px; color: #666;">Purple accent</p>
          <BAutoComplete v-model="v2" :options="fruitOptions" placeholder="Purple theme" />
        </div>

        <div class="custom-ac-theme-compact">
          <p style="margin-bottom: 8px; font-size: 12px; color: #666;">Compact options</p>
          <BAutoComplete v-model="v3" :options="fruitOptions" placeholder="Compact theme" />
        </div>
      </div>

      <style>
        .custom-ac-theme-purple .b-auto-complete {
          --b-auto-complete-active-border-color: #7c3aed;
          --b-auto-complete-hover-border-color: #a78bfa;
          --b-auto-complete-active-outline-color: rgba(124, 58, 237, 0.12);
          --b-auto-complete-option-selected-bg: #f3e8ff;
          --b-auto-complete-option-active-bg: #faf5ff;
        }
        .custom-ac-theme-compact .b-auto-complete {
          --b-auto-complete-option-padding-x: 8px;
          --b-auto-complete-option-padding-y: 2px;
          --b-auto-complete-option-font-size: 12px;
        }
      </style>
    `})},T={args:{options:h,placeholder:`Type to search...`,allowClear:!0},render:e=>({components:{BAutoComplete:s},setup:()=>{let n=t(``),r=t(`none`);return{args:e,value:n,selected:r,onSelect:e=>{r.value=e}}},template:`
      <div style="padding: 40px; max-width: 320px;">
        <BAutoComplete v-bind="args" v-model="value" @select="onSelect" />
        <p data-testid="selected-value" style="margin-top: 12px; font-size: 12px; color: #666;">Selected: {{ selected }}</p>
        <p data-testid="current-value" style="font-size: 12px; color: #666;">Value: "{{ value }}"</p>
      </div>
    `}),play:async({canvasElement:e})=>{let t=p(e),n=t.getByRole(`combobox`);await d.type(n,`ban`),await f(()=>{let e=document.querySelectorAll(`[role="option"]`);u(e.length).toBe(1),u(e[0].textContent).toContain(`Banana`)}),await d.keyboard(`{ArrowDown}`),await d.keyboard(`{Enter}`),await f(()=>{u(t.getByTestId(`selected-value`).textContent).toContain(`banana`),u(n.value).toBe(`banana`)});let r=e.querySelector(`.b-auto-complete__clear`);r&&(await d.click(r),await f(()=>{u(n.value).toBe(``)}))}},E={args:{options:h,disabled:!0,placeholder:`Disabled autocomplete`,modelValue:`Apple`},render:e=>({components:{BAutoComplete:s},setup:()=>({args:e}),template:`
      <div style="padding: 40px; max-width: 320px;">
        <BAutoComplete v-bind="args" />
      </div>
    `})},D={render:()=>({template:`
      <div style="padding: 40px; font-family: monospace; font-size: 13px; max-width: 800px;">
        <h3 style="margin-bottom: 16px; font-size: 16px; font-family: sans-serif;">BAutoComplete Design Tokens</h3>
        <p style="margin-bottom: 16px; font-size: 13px; font-family: sans-serif; color: #666;">
          Override these CSS variables on <code>.b-auto-complete</code> or an ancestor to customize the component appearance.
        </p>
        <table style="width: 100%; border-collapse: collapse; background: #ffffff;">
          <thead>
            <tr style="border-bottom: 2px solid #e5e7eb;">
              <th style="text-align: left; padding: 8px 12px;">Variable</th>
              <th style="text-align: left; padding: 8px 12px;">Default</th>
              <th style="text-align: left; padding: 8px 12px;">Description</th>
            </tr>
          </thead>
          <tbody>
            <tr style="border-bottom: 1px solid #f3f4f6;">
              <td style="padding: 8px 12px;">--b-auto-complete-active-border-color</td>
              <td style="padding: 8px 12px;">#1677ff</td>
              <td style="padding: 8px 12px;">Border color when input is focused</td>
            </tr>
            <tr style="border-bottom: 1px solid #f3f4f6;">
              <td style="padding: 8px 12px;">--b-auto-complete-active-outline-color</td>
              <td style="padding: 8px 12px;">rgba(5,145,255,0.1)</td>
              <td style="padding: 8px 12px;">Outline/glow color on focus</td>
            </tr>
            <tr style="border-bottom: 1px solid #f3f4f6;">
              <td style="padding: 8px 12px;">--b-auto-complete-hover-border-color</td>
              <td style="padding: 8px 12px;">#4096ff</td>
              <td style="padding: 8px 12px;">Border color on hover</td>
            </tr>
            <tr style="border-bottom: 1px solid #f3f4f6;">
              <td style="padding: 8px 12px;">--b-auto-complete-border-color</td>
              <td style="padding: 8px 12px;">#d9d9d9</td>
              <td style="padding: 8px 12px;">Default border color</td>
            </tr>
            <tr style="border-bottom: 1px solid #f3f4f6;">
              <td style="padding: 8px 12px;">--b-auto-complete-clear-bg</td>
              <td style="padding: 8px 12px;">#ffffff</td>
              <td style="padding: 8px 12px;">Background of the clear button</td>
            </tr>
            <tr style="border-bottom: 1px solid #f3f4f6;">
              <td style="padding: 8px 12px;">--b-auto-complete-selector-bg</td>
              <td style="padding: 8px 12px;">rgba(0,0,0,0.04)</td>
              <td style="padding: 8px 12px;">Background of input in filled variant</td>
            </tr>
            <tr style="border-bottom: 1px solid #f3f4f6;">
              <td style="padding: 8px 12px;">--b-auto-complete-option-active-bg</td>
              <td style="padding: 8px 12px;">rgba(0,0,0,0.04)</td>
              <td style="padding: 8px 12px;">Background of highlighted/hovered option</td>
            </tr>
            <tr style="border-bottom: 1px solid #f3f4f6;">
              <td style="padding: 8px 12px;">--b-auto-complete-option-font-size</td>
              <td style="padding: 8px 12px;">14px</td>
              <td style="padding: 8px 12px;">Font size of option text</td>
            </tr>
            <tr style="border-bottom: 1px solid #f3f4f6;">
              <td style="padding: 8px 12px;">--b-auto-complete-option-height</td>
              <td style="padding: 8px 12px;">32px</td>
              <td style="padding: 8px 12px;">Height of each option item</td>
            </tr>
            <tr style="border-bottom: 1px solid #f3f4f6;">
              <td style="padding: 8px 12px;">--b-auto-complete-option-line-height</td>
              <td style="padding: 8px 12px;">1.5714</td>
              <td style="padding: 8px 12px;">Line height of option text</td>
            </tr>
            <tr style="border-bottom: 1px solid #f3f4f6;">
              <td style="padding: 8px 12px;">--b-auto-complete-option-padding-x</td>
              <td style="padding: 8px 12px;">12px</td>
              <td style="padding: 8px 12px;">Horizontal padding of options</td>
            </tr>
            <tr style="border-bottom: 1px solid #f3f4f6;">
              <td style="padding: 8px 12px;">--b-auto-complete-option-padding-y</td>
              <td style="padding: 8px 12px;">5px</td>
              <td style="padding: 8px 12px;">Vertical padding of options</td>
            </tr>
            <tr style="border-bottom: 1px solid #f3f4f6;">
              <td style="padding: 8px 12px;">--b-auto-complete-option-selected-bg</td>
              <td style="padding: 8px 12px;">#e6f4ff</td>
              <td style="padding: 8px 12px;">Background of the selected option</td>
            </tr>
            <tr style="border-bottom: 1px solid #f3f4f6;">
              <td style="padding: 8px 12px;">--b-auto-complete-option-selected-color</td>
              <td style="padding: 8px 12px;">rgba(0,0,0,0.88)</td>
              <td style="padding: 8px 12px;">Text color of the selected option</td>
            </tr>
            <tr style="border-bottom: 1px solid #f3f4f6;">
              <td style="padding: 8px 12px;">--b-auto-complete-option-selected-font-weight</td>
              <td style="padding: 8px 12px;">600</td>
              <td style="padding: 8px 12px;">Font weight of the selected option</td>
            </tr>
            <tr>
              <td style="padding: 8px 12px;">--b-auto-complete-z-index-popup</td>
              <td style="padding: 8px 12px;">1050</td>
              <td style="padding: 8px 12px;">z-index of the dropdown popup</td>
            </tr>
          </tbody>
        </table>
      </div>
    `})},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  args: {
    options: fruitOptions,
    placeholder: 'Type a fruit name...',
    size: 'md',
    variant: 'outlined',
    disabled: false,
    allowClear: true,
    backfill: false,
    defaultActiveFirstOption: true,
    popupMatchSelectWidth: true
  },
  render: args => ({
    components: {
      BAutoComplete
    },
    setup: () => {
      const value = ref('');
      return {
        args,
        value
      };
    },
    template: \`
      <div style="padding: 40px; max-width: 320px;">
        <BAutoComplete v-bind="args" v-model="value" />
        <p style="margin-top: 12px; font-size: 12px; color: #666;">Value: "{{ value }}"</p>
      </div>
    \`
  })
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      BAutoComplete
    },
    setup: () => {
      const sm = ref('');
      const md = ref('');
      const lg = ref('');
      return {
        sm,
        md,
        lg,
        fruitOptions
      };
    },
    template: \`
      <div style="padding: 40px; display: flex; flex-direction: column; gap: 16px; max-width: 320px;">
        <div>
          <p style="margin-bottom: 4px; font-size: 12px; color: #666;">Small</p>
          <BAutoComplete v-model="sm" :options="fruitOptions" size="sm" placeholder="Small" />
        </div>
        <div>
          <p style="margin-bottom: 4px; font-size: 12px; color: #666;">Medium (default)</p>
          <BAutoComplete v-model="md" :options="fruitOptions" size="md" placeholder="Medium" />
        </div>
        <div>
          <p style="margin-bottom: 4px; font-size: 12px; color: #666;">Large</p>
          <BAutoComplete v-model="lg" :options="fruitOptions" size="lg" placeholder="Large" />
        </div>
      </div>
    \`
  })
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      BAutoComplete
    },
    setup: () => {
      const outlined = ref('');
      const filled = ref('');
      const borderless = ref('');
      return {
        outlined,
        filled,
        borderless,
        fruitOptions
      };
    },
    template: \`
      <div style="padding: 40px; display: flex; flex-direction: column; gap: 16px; max-width: 320px;">
        <div>
          <p style="margin-bottom: 4px; font-size: 12px; color: #666;">Outlined (default)</p>
          <BAutoComplete v-model="outlined" :options="fruitOptions" variant="outlined" placeholder="Outlined" />
        </div>
        <div>
          <p style="margin-bottom: 4px; font-size: 12px; color: #666;">Filled</p>
          <BAutoComplete v-model="filled" :options="fruitOptions" variant="filled" placeholder="Filled" />
        </div>
        <div>
          <p style="margin-bottom: 4px; font-size: 12px; color: #666;">Borderless</p>
          <BAutoComplete v-model="borderless" :options="fruitOptions" variant="borderless" placeholder="Borderless" />
        </div>
      </div>
    \`
  })
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      BAutoComplete
    },
    setup: () => {
      const value = ref('');
      const options = ref<BAutoCompleteOption[]>([]);
      const handleSearch = (val: string) => {
        if (!val || val.includes('@')) {
          options.value = [];
        } else {
          options.value = emailSuffixes.map(suffix => ({
            label: \`\${val}\${suffix}\`,
            value: \`\${val}\${suffix}\`
          }));
        }
      };
      return {
        value,
        options,
        handleSearch
      };
    },
    template: \`
      <div style="padding: 40px; max-width: 320px;">
        <p style="margin-bottom: 8px; font-size: 12px; color: #666;">Type a username to get email suggestions</p>
        <BAutoComplete
          v-model="value"
          :options="options"
          :filter-option="false"
          placeholder="Enter email"
          allow-clear
          @search="handleSearch"
        />
        <p style="margin-top: 12px; font-size: 12px; color: #666;">Value: "{{ value }}"</p>
      </div>
    \`
  })
}`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  args: {
    options: fruitOptions,
    backfill: true,
    placeholder: 'Use arrow keys to backfill...'
  },
  render: args => ({
    components: {
      BAutoComplete
    },
    setup: () => {
      const value = ref('');
      return {
        args,
        value
      };
    },
    template: \`
      <div style="padding: 40px; max-width: 320px;">
        <p style="margin-bottom: 8px; font-size: 12px; color: #666;">Arrow keys populate the input with the highlighted option</p>
        <BAutoComplete v-bind="args" v-model="value" />
      </div>
    \`
  })
}`,...x.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      BAutoComplete
    },
    setup: () => {
      const err = ref('');
      const warn = ref('');
      return {
        err,
        warn,
        fruitOptions
      };
    },
    template: \`
      <div style="padding: 40px; display: flex; flex-direction: column; gap: 16px; max-width: 320px;">
        <div>
          <p style="margin-bottom: 4px; font-size: 12px; color: #666;">Error</p>
          <BAutoComplete v-model="err" :options="fruitOptions" status="error" placeholder="Error state" />
        </div>
        <div>
          <p style="margin-bottom: 4px; font-size: 12px; color: #666;">Warning</p>
          <BAutoComplete v-model="warn" :options="fruitOptions" status="warning" placeholder="Warning state" />
        </div>
      </div>
    \`
  })
}`,...S.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  args: {
    options: fruitOptions,
    placeholder: 'Accessible autocomplete'
  },
  render: args => ({
    components: {
      BAutoComplete
    },
    setup: () => {
      const value = ref('');
      return {
        args,
        value
      };
    },
    template: \`
      <div style="padding: 40px; max-width: 320px;">
        <label id="ac-label" style="display: block; margin-bottom: 4px; font-size: 14px;">Fruit search</label>
        <BAutoComplete v-bind="args" v-model="value" aria-labelledby="ac-label" />
      </div>
    \`
  }),
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const input = canvas.getByRole('combobox');

    // Verify ARIA attributes before opening
    expect(input.getAttribute('role')).toBe('combobox');
    expect(input.getAttribute('aria-haspopup')).toBe('listbox');
    expect(input.getAttribute('aria-expanded')).toBe('false');
    expect(input.getAttribute('aria-autocomplete')).toBe('list');

    // Focus to open
    await userEvent.click(input);
    await userEvent.type(input, 'a');
    await waitFor(() => {
      expect(input.getAttribute('aria-expanded')).toBe('true');
    });

    // Verify listbox exists
    await waitFor(() => {
      const listbox = document.querySelector('[role="listbox"]');
      expect(listbox).toBeTruthy();
    });

    // Verify options have correct role
    await waitFor(() => {
      const options = document.querySelectorAll('[role="option"]');
      expect(options.length).toBeGreaterThan(0);
    });

    // Navigate with keyboard to verify aria-activedescendant
    await userEvent.keyboard('{ArrowDown}');
    await waitFor(() => {
      expect(input.getAttribute('aria-activedescendant')).toBeTruthy();
    });

    // Escape closes
    await userEvent.keyboard('{Escape}');
    await waitFor(() => {
      expect(input.getAttribute('aria-expanded')).toBe('false');
    });
  }
}`,...C.parameters?.docs?.source}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      BAutoComplete
    },
    setup: () => {
      const v1 = ref('');
      const v2 = ref('');
      const v3 = ref('');
      return {
        v1,
        v2,
        v3,
        fruitOptions
      };
    },
    template: \`
      <div style="padding: 40px; display: flex; gap: 40px; flex-wrap: wrap;">
        <div>
          <p style="margin-bottom: 8px; font-size: 12px; color: #666;">Default</p>
          <BAutoComplete v-model="v1" :options="fruitOptions" placeholder="Default theme" />
        </div>

        <div class="custom-ac-theme-purple">
          <p style="margin-bottom: 8px; font-size: 12px; color: #666;">Purple accent</p>
          <BAutoComplete v-model="v2" :options="fruitOptions" placeholder="Purple theme" />
        </div>

        <div class="custom-ac-theme-compact">
          <p style="margin-bottom: 8px; font-size: 12px; color: #666;">Compact options</p>
          <BAutoComplete v-model="v3" :options="fruitOptions" placeholder="Compact theme" />
        </div>
      </div>

      <style>
        .custom-ac-theme-purple .b-auto-complete {
          --b-auto-complete-active-border-color: #7c3aed;
          --b-auto-complete-hover-border-color: #a78bfa;
          --b-auto-complete-active-outline-color: rgba(124, 58, 237, 0.12);
          --b-auto-complete-option-selected-bg: #f3e8ff;
          --b-auto-complete-option-active-bg: #faf5ff;
        }
        .custom-ac-theme-compact .b-auto-complete {
          --b-auto-complete-option-padding-x: 8px;
          --b-auto-complete-option-padding-y: 2px;
          --b-auto-complete-option-font-size: 12px;
        }
      </style>
    \`
  })
}`,...w.parameters?.docs?.source}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  args: {
    options: fruitOptions,
    placeholder: 'Type to search...',
    allowClear: true
  },
  render: args => ({
    components: {
      BAutoComplete
    },
    setup: () => {
      const value = ref('');
      const selected = ref('none');
      const onSelect = (val: string) => {
        selected.value = val;
      };
      return {
        args,
        value,
        selected,
        onSelect
      };
    },
    template: \`
      <div style="padding: 40px; max-width: 320px;">
        <BAutoComplete v-bind="args" v-model="value" @select="onSelect" />
        <p data-testid="selected-value" style="margin-top: 12px; font-size: 12px; color: #666;">Selected: {{ selected }}</p>
        <p data-testid="current-value" style="font-size: 12px; color: #666;">Value: "{{ value }}"</p>
      </div>
    \`
  }),
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const input = canvas.getByRole('combobox');

    // Type to filter
    await userEvent.type(input, 'ban');

    // Verify filtered options appear
    await waitFor(() => {
      const options = document.querySelectorAll('[role="option"]');
      expect(options.length).toBe(1);
      expect(options[0].textContent).toContain('Banana');
    });

    // Select with Enter
    await userEvent.keyboard('{ArrowDown}');
    await userEvent.keyboard('{Enter}');

    // Verify selection
    await waitFor(() => {
      expect(canvas.getByTestId('selected-value').textContent).toContain('banana');
      expect((input as HTMLInputElement).value).toBe('banana');
    });

    // Clear
    const clearBtn = canvasElement.querySelector('.b-auto-complete__clear');
    if (clearBtn) {
      await userEvent.click(clearBtn);
      await waitFor(() => {
        expect((input as HTMLInputElement).value).toBe('');
      });
    }
  }
}`,...T.parameters?.docs?.source}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  args: {
    options: fruitOptions,
    disabled: true,
    placeholder: 'Disabled autocomplete',
    modelValue: 'Apple'
  },
  render: args => ({
    components: {
      BAutoComplete
    },
    setup: () => ({
      args
    }),
    template: \`
      <div style="padding: 40px; max-width: 320px;">
        <BAutoComplete v-bind="args" />
      </div>
    \`
  })
}`,...E.parameters?.docs?.source}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  render: () => ({
    template: \`
      <div style="padding: 40px; font-family: monospace; font-size: 13px; max-width: 800px;">
        <h3 style="margin-bottom: 16px; font-size: 16px; font-family: sans-serif;">BAutoComplete Design Tokens</h3>
        <p style="margin-bottom: 16px; font-size: 13px; font-family: sans-serif; color: #666;">
          Override these CSS variables on <code>.b-auto-complete</code> or an ancestor to customize the component appearance.
        </p>
        <table style="width: 100%; border-collapse: collapse; background: #ffffff;">
          <thead>
            <tr style="border-bottom: 2px solid #e5e7eb;">
              <th style="text-align: left; padding: 8px 12px;">Variable</th>
              <th style="text-align: left; padding: 8px 12px;">Default</th>
              <th style="text-align: left; padding: 8px 12px;">Description</th>
            </tr>
          </thead>
          <tbody>
            <tr style="border-bottom: 1px solid #f3f4f6;">
              <td style="padding: 8px 12px;">--b-auto-complete-active-border-color</td>
              <td style="padding: 8px 12px;">#1677ff</td>
              <td style="padding: 8px 12px;">Border color when input is focused</td>
            </tr>
            <tr style="border-bottom: 1px solid #f3f4f6;">
              <td style="padding: 8px 12px;">--b-auto-complete-active-outline-color</td>
              <td style="padding: 8px 12px;">rgba(5,145,255,0.1)</td>
              <td style="padding: 8px 12px;">Outline/glow color on focus</td>
            </tr>
            <tr style="border-bottom: 1px solid #f3f4f6;">
              <td style="padding: 8px 12px;">--b-auto-complete-hover-border-color</td>
              <td style="padding: 8px 12px;">#4096ff</td>
              <td style="padding: 8px 12px;">Border color on hover</td>
            </tr>
            <tr style="border-bottom: 1px solid #f3f4f6;">
              <td style="padding: 8px 12px;">--b-auto-complete-border-color</td>
              <td style="padding: 8px 12px;">#d9d9d9</td>
              <td style="padding: 8px 12px;">Default border color</td>
            </tr>
            <tr style="border-bottom: 1px solid #f3f4f6;">
              <td style="padding: 8px 12px;">--b-auto-complete-clear-bg</td>
              <td style="padding: 8px 12px;">#ffffff</td>
              <td style="padding: 8px 12px;">Background of the clear button</td>
            </tr>
            <tr style="border-bottom: 1px solid #f3f4f6;">
              <td style="padding: 8px 12px;">--b-auto-complete-selector-bg</td>
              <td style="padding: 8px 12px;">rgba(0,0,0,0.04)</td>
              <td style="padding: 8px 12px;">Background of input in filled variant</td>
            </tr>
            <tr style="border-bottom: 1px solid #f3f4f6;">
              <td style="padding: 8px 12px;">--b-auto-complete-option-active-bg</td>
              <td style="padding: 8px 12px;">rgba(0,0,0,0.04)</td>
              <td style="padding: 8px 12px;">Background of highlighted/hovered option</td>
            </tr>
            <tr style="border-bottom: 1px solid #f3f4f6;">
              <td style="padding: 8px 12px;">--b-auto-complete-option-font-size</td>
              <td style="padding: 8px 12px;">14px</td>
              <td style="padding: 8px 12px;">Font size of option text</td>
            </tr>
            <tr style="border-bottom: 1px solid #f3f4f6;">
              <td style="padding: 8px 12px;">--b-auto-complete-option-height</td>
              <td style="padding: 8px 12px;">32px</td>
              <td style="padding: 8px 12px;">Height of each option item</td>
            </tr>
            <tr style="border-bottom: 1px solid #f3f4f6;">
              <td style="padding: 8px 12px;">--b-auto-complete-option-line-height</td>
              <td style="padding: 8px 12px;">1.5714</td>
              <td style="padding: 8px 12px;">Line height of option text</td>
            </tr>
            <tr style="border-bottom: 1px solid #f3f4f6;">
              <td style="padding: 8px 12px;">--b-auto-complete-option-padding-x</td>
              <td style="padding: 8px 12px;">12px</td>
              <td style="padding: 8px 12px;">Horizontal padding of options</td>
            </tr>
            <tr style="border-bottom: 1px solid #f3f4f6;">
              <td style="padding: 8px 12px;">--b-auto-complete-option-padding-y</td>
              <td style="padding: 8px 12px;">5px</td>
              <td style="padding: 8px 12px;">Vertical padding of options</td>
            </tr>
            <tr style="border-bottom: 1px solid #f3f4f6;">
              <td style="padding: 8px 12px;">--b-auto-complete-option-selected-bg</td>
              <td style="padding: 8px 12px;">#e6f4ff</td>
              <td style="padding: 8px 12px;">Background of the selected option</td>
            </tr>
            <tr style="border-bottom: 1px solid #f3f4f6;">
              <td style="padding: 8px 12px;">--b-auto-complete-option-selected-color</td>
              <td style="padding: 8px 12px;">rgba(0,0,0,0.88)</td>
              <td style="padding: 8px 12px;">Text color of the selected option</td>
            </tr>
            <tr style="border-bottom: 1px solid #f3f4f6;">
              <td style="padding: 8px 12px;">--b-auto-complete-option-selected-font-weight</td>
              <td style="padding: 8px 12px;">600</td>
              <td style="padding: 8px 12px;">Font weight of the selected option</td>
            </tr>
            <tr>
              <td style="padding: 8px 12px;">--b-auto-complete-z-index-popup</td>
              <td style="padding: 8px 12px;">1050</td>
              <td style="padding: 8px 12px;">z-index of the dropdown popup</td>
            </tr>
          </tbody>
        </table>
      </div>
    \`
  })
}`,...D.parameters?.docs?.source}}},O=[`Playground`,`Sizes`,`Variants`,`DynamicOptions`,`Backfill`,`Status`,`Accessibility`,`Theming`,`InteractionTest`,`Disabled`,`DesignTokens`]}))();export{C as Accessibility,x as Backfill,D as DesignTokens,E as Disabled,b as DynamicOptions,T as InteractionTest,_ as Playground,v as Sizes,S as Status,w as Theming,y as Variants,O as __namedExportsOrder,m as default};