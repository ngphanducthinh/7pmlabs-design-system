import{n as e}from"./chunk-BneVvdWh.js";import{X as t,i as n}from"./iframe-By7LT0M0.js";import{A as r,u as i}from"./types-CV_3xB-y.js";import{a,i as o,n as s,o as c,r as l,t as u}from"./BSelect-DGHd9913.js";var d,f,p,m,h,g,_,v,y,b,x,S,C,w,T,E,D,O,k,A,j,M,N;e((()=>{u(),c(),r(),n(),{expect:d,userEvent:f,waitFor:p,within:m}=__STORYBOOK_MODULE_TEST__,h={title:`Data Entry/Select`,component:s,tags:[`autodocs`],argTypes:{modelValue:{control:`text`,description:`Current selected value (v-model).`,table:{category:`Two-Way Binding Props`}},options:{control:`object`,description:`Data source for select options.`},size:{control:`select`,options:Object.values(i),description:`Size of the selector.`,table:{defaultValue:{summary:i.Medium}}},variant:{control:`select`,options:Object.values(a),description:`Visual variant of the selector.`,table:{defaultValue:{summary:a.Outlined}}},mode:{control:`select`,options:[void 0,...Object.values(l)],description:`Selection mode (multiple or tags).`},status:{control:`select`,options:[void 0,...Object.values(o)],description:`Validation status.`},disabled:{control:`boolean`,description:`Whether the component is disabled.`,table:{defaultValue:{summary:`false`}}},placeholder:{control:`text`,description:`Placeholder text.`},allowClear:{control:`boolean`,description:`Show clear button.`,table:{defaultValue:{summary:`false`}}},showSearch:{control:`boolean`,description:`Enable search/filter in single mode.`,table:{defaultValue:{summary:`false`}}},loading:{control:`boolean`,description:`Show loading spinner.`,table:{defaultValue:{summary:`false`}}},listHeight:{control:`number`,description:`Max height of dropdown in px.`,table:{defaultValue:{summary:`256`}}},maxTagCount:{control:`number`,description:`Max visible tags (multiple/tags mode).`},popupMatchSelectWidth:{control:`boolean`,description:`Match dropdown width to selector.`,table:{defaultValue:{summary:`true`}}},defaultActiveFirstOption:{control:`boolean`,description:`Auto-activate the first option.`,table:{defaultValue:{summary:`true`}}}},parameters:{docs:{description:{component:`<code>BSelect</code> provides a dropdown selection component supporting single and multiple selection, search/filter, tags mode, keyboard navigation, and full accessibility.<br><br>Uses the native HTML <code>popover</code> attribute and CSS Anchor Positioning.`}}}},g=[{label:`Apple`,value:`apple`},{label:`Banana`,value:`banana`},{label:`Blueberry`,value:`blueberry`},{label:`Cherry`,value:`cherry`},{label:`Dragon Fruit`,value:`dragon-fruit`},{label:`Elderberry`,value:`elderberry`},{label:`Fig`,value:`fig`},{label:`Grape`,value:`grape`}],_=[{label:`United States`,value:`us`},{label:`United Kingdom`,value:`uk`},{label:`Germany`,value:`de`},{label:`France`,value:`fr`},{label:`Japan`,value:`jp`},{label:`Australia`,value:`au`},{label:`Canada`,value:`ca`},{label:`Brazil`,value:`br`}],v=[{label:`Apple`,value:`apple`},{label:`Banana`,value:`banana`,disabled:!0},{label:`Cherry`,value:`cherry`},{label:`Dragon Fruit`,value:`dragon-fruit`,disabled:!0},{label:`Elderberry`,value:`elderberry`}],y={args:{options:g,placeholder:`Select a fruit...`,size:`md`,variant:`outlined`,disabled:!1,allowClear:!0,showSearch:!1,loading:!1,defaultActiveFirstOption:!0,popupMatchSelectWidth:!0,listHeight:256},render:e=>({components:{BSelect:s},setup:()=>({args:e,value:t(void 0)}),template:`
      <div style="padding: 40px; max-width: 320px;">
        <BSelect v-bind="args" v-model="value" />
        <p style="margin-top: 12px; font-size: 12px; color: #666;">Value: {{ JSON.stringify(value) }}</p>
      </div>
    `})},b={render:()=>({components:{BSelect:s},setup:()=>({sm:t(void 0),md:t(void 0),lg:t(void 0),fruitOptions:g}),template:`
      <div style="padding: 40px; display: flex; flex-direction: column; gap: 16px; max-width: 320px;">
        <div>
          <p style="margin-bottom: 4px; font-size: 12px; color: #666;">Small</p>
          <BSelect v-model="sm" :options="fruitOptions" size="sm" placeholder="Small" />
        </div>
        <div>
          <p style="margin-bottom: 4px; font-size: 12px; color: #666;">Medium (default)</p>
          <BSelect v-model="md" :options="fruitOptions" size="md" placeholder="Medium" />
        </div>
        <div>
          <p style="margin-bottom: 4px; font-size: 12px; color: #666;">Large</p>
          <BSelect v-model="lg" :options="fruitOptions" size="lg" placeholder="Large" />
        </div>
      </div>
    `})},x={render:()=>({components:{BSelect:s},setup:()=>({outlined:t(void 0),filled:t(void 0),borderless:t(void 0),fruitOptions:g}),template:`
      <div style="padding: 40px; display: flex; flex-direction: column; gap: 16px; max-width: 320px;">
        <div>
          <p style="margin-bottom: 4px; font-size: 12px; color: #666;">Outlined (default)</p>
          <BSelect v-model="outlined" :options="fruitOptions" variant="outlined" placeholder="Outlined" />
        </div>
        <div>
          <p style="margin-bottom: 4px; font-size: 12px; color: #666;">Filled</p>
          <BSelect v-model="filled" :options="fruitOptions" variant="filled" placeholder="Filled" />
        </div>
        <div>
          <p style="margin-bottom: 4px; font-size: 12px; color: #666;">Borderless</p>
          <BSelect v-model="borderless" :options="fruitOptions" variant="borderless" placeholder="Borderless" />
        </div>
      </div>
    `})},S={render:()=>({components:{BSelect:s},setup:()=>({value:t([`apple`,`cherry`]),fruitOptions:g}),template:`
      <div style="padding: 40px; max-width: 400px;">
        <p style="margin-bottom: 8px; font-size: 12px; color: #666;">Select multiple items</p>
        <BSelect v-model="value" :options="fruitOptions" mode="multiple" placeholder="Select fruits..." allow-clear />
        <p style="margin-top: 12px; font-size: 12px; color: #666;">Value: {{ JSON.stringify(value) }}</p>
      </div>
    `})},C={render:()=>({components:{BSelect:s},setup:()=>({value:t([]),fruitOptions:g}),template:`
      <div style="padding: 40px; max-width: 400px;">
        <p style="margin-bottom: 8px; font-size: 12px; color: #666;">Tags mode - type to create custom tags</p>
        <BSelect v-model="value" :options="fruitOptions" mode="tags" placeholder="Type or select..." allow-clear />
        <p style="margin-top: 12px; font-size: 12px; color: #666;">Value: {{ JSON.stringify(value) }}</p>
      </div>
    `})},w={render:()=>({components:{BSelect:s},setup:()=>({value:t(void 0),countryOptions:_}),template:`
      <div style="padding: 40px; max-width: 320px;">
        <p style="margin-bottom: 8px; font-size: 12px; color: #666;">Type to filter options</p>
        <BSelect v-model="value" :options="countryOptions" show-search placeholder="Search countries..." allow-clear />
        <p style="margin-top: 12px; font-size: 12px; color: #666;">Value: {{ JSON.stringify(value) }}</p>
      </div>
    `})},T={render:()=>({components:{BSelect:s},setup:()=>({err:t(void 0),warn:t(void 0),fruitOptions:g}),template:`
      <div style="padding: 40px; display: flex; flex-direction: column; gap: 16px; max-width: 320px;">
        <div>
          <p style="margin-bottom: 4px; font-size: 12px; color: #666;">Error</p>
          <BSelect v-model="err" :options="fruitOptions" status="error" placeholder="Error state" />
        </div>
        <div>
          <p style="margin-bottom: 4px; font-size: 12px; color: #666;">Warning</p>
          <BSelect v-model="warn" :options="fruitOptions" status="warning" placeholder="Warning state" />
        </div>
      </div>
    `})},E={render:()=>({components:{BSelect:s},setup:()=>({value:t(void 0),optionsWithDisabled:v}),template:`
      <div style="padding: 40px; max-width: 320px;">
        <p style="margin-bottom: 8px; font-size: 12px; color: #666;">Banana and Dragon Fruit are disabled</p>
        <BSelect v-model="value" :options="optionsWithDisabled" placeholder="Select..." />
      </div>
    `})},D={render:()=>({components:{BSelect:s},setup:()=>({value:t([`apple`,`banana`,`cherry`,`elderberry`]),fruitOptions:g}),template:`
      <div style="padding: 40px; max-width: 400px;">
        <p style="margin-bottom: 8px; font-size: 12px; color: #666;">maxTagCount=2 - remaining shown as +N</p>
        <BSelect v-model="value" :options="fruitOptions" mode="multiple" :max-tag-count="2" placeholder="Select..." />
      </div>
    `})},O={args:{options:g,placeholder:`Accessible select`},render:e=>({components:{BSelect:s},setup:()=>({args:e,value:t(void 0)}),template:`
      <div style="padding: 40px; max-width: 320px;">
        <label id="select-label" style="display: block; margin-bottom: 4px; font-size: 14px;">Choose a fruit</label>
        <BSelect v-bind="args" v-model="value" aria-labelledby="select-label" />
      </div>
    `}),play:async({canvasElement:e})=>{let t=m(e).getByRole(`combobox`);d(t.getAttribute(`role`)).toBe(`combobox`),d(t.getAttribute(`aria-haspopup`)).toBe(`listbox`),d(t.getAttribute(`aria-expanded`)).toBe(`false`),await f.click(t),await p(()=>{d(t.getAttribute(`aria-expanded`)).toBe(`true`)}),await p(()=>{d(document.querySelector(`[role="listbox"]`)).toBeTruthy()}),await p(()=>{d(document.querySelectorAll(`[role="option"]`).length).toBeGreaterThan(0)}),await f.keyboard(`{ArrowDown}`),await p(()=>{d(t.getAttribute(`aria-activedescendant`)).toBeTruthy()}),await f.keyboard(`{Escape}`),await p(()=>{d(t.getAttribute(`aria-expanded`)).toBe(`false`)})}},k={render:()=>({components:{BSelect:s},setup:()=>({v1:t(void 0),v2:t(void 0),v3:t(void 0),fruitOptions:g}),template:`
      <div style="padding: 40px; display: flex; gap: 40px; flex-wrap: wrap;">
        <div>
          <p style="margin-bottom: 8px; font-size: 12px; color: #666;">Default</p>
          <BSelect v-model="v1" :options="fruitOptions" placeholder="Default theme" />
        </div>

        <div class="custom-select-theme-purple">
          <p style="margin-bottom: 8px; font-size: 12px; color: #666;">Purple accent</p>
          <BSelect v-model="v2" :options="fruitOptions" placeholder="Purple theme" />
        </div>

        <div class="custom-select-theme-compact">
          <p style="margin-bottom: 8px; font-size: 12px; color: #666;">Compact options</p>
          <BSelect v-model="v3" :options="fruitOptions" placeholder="Compact theme" />
        </div>
      </div>

      <style>
        .custom-select-theme-purple .b-select {
          --b-select-active-border-color: #7c3aed;
          --b-select-hover-border-color: #a78bfa;
          --b-select-active-outline-color: rgba(124, 58, 237, 0.12);
          --b-select-option-selected-bg: #f3e8ff;
          --b-select-option-active-bg: #faf5ff;
        }
        .custom-select-theme-compact .b-select {
          --b-select-option-padding-x: 8px;
          --b-select-option-padding-y: 2px;
          --b-select-option-font-size: 12px;
        }
      </style>
    `})},A={args:{options:g,placeholder:`Select a fruit...`,allowClear:!0},render:e=>({components:{BSelect:s},setup:()=>({args:e,value:t(void 0)}),template:`
      <div style="padding: 40px; max-width: 320px;">
        <BSelect v-bind="args" v-model="value" />
        <p data-testid="selected-value" style="margin-top: 12px; font-size: 12px; color: #666;">Selected: {{ value ?? 'none' }}</p>
      </div>
    `}),play:async({canvasElement:e})=>{let t=m(e),n=t.getByRole(`combobox`);await f.click(n),await p(()=>{d(document.querySelectorAll(`[role="option"]`).length).toBe(8)}),await f.keyboard(`{ArrowDown}`),await f.keyboard(`{Enter}`),await p(()=>{d(t.getByTestId(`selected-value`).textContent).toContain(`banana`)});let r=e.querySelector(`.b-select__clear`);r&&(await f.click(r),await p(()=>{d(t.getByTestId(`selected-value`).textContent).toContain(`none`)})),await f.click(n),await p(()=>{d(document.querySelectorAll(`[role="option"]`).length).toBe(8)}),await f.keyboard(`{Escape}`),await p(()=>{d(n.getAttribute(`aria-expanded`)).toBe(`false`)})}},j={args:{options:g,disabled:!0,placeholder:`Disabled select`,modelValue:`apple`},render:e=>({components:{BSelect:s},setup:()=>({args:e}),template:`
      <div style="padding: 40px; max-width: 320px;">
        <BSelect v-bind="args" />
      </div>
    `})},M={render:()=>({template:`
      <div style="padding: 40px; font-family: monospace; font-size: 13px; max-width: 900px;">
        <h3 style="margin-bottom: 16px; font-size: 16px; font-family: sans-serif;">BSelect Design Tokens</h3>
        <p style="margin-bottom: 16px; font-size: 13px; font-family: sans-serif; color: #666;">
          Override these CSS variables on <code>.b-select</code> or an ancestor to customize the component appearance.
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
              <td style="padding: 8px 12px;">--b-select-active-border-color</td>
              <td style="padding: 8px 12px;">#1677ff</td>
              <td style="padding: 8px 12px;">Border color when focused/active</td>
            </tr>
            <tr style="border-bottom: 1px solid #f3f4f6;">
              <td style="padding: 8px 12px;">--b-select-active-outline-color</td>
              <td style="padding: 8px 12px;">rgba(5,145,255,0.1)</td>
              <td style="padding: 8px 12px;">Outline/glow on focus</td>
            </tr>
            <tr style="border-bottom: 1px solid #f3f4f6;">
              <td style="padding: 8px 12px;">--b-select-hover-border-color</td>
              <td style="padding: 8px 12px;">#4096ff</td>
              <td style="padding: 8px 12px;">Border color on hover</td>
            </tr>
            <tr style="border-bottom: 1px solid #f3f4f6;">
              <td style="padding: 8px 12px;">--b-select-border-color</td>
              <td style="padding: 8px 12px;">#d9d9d9</td>
              <td style="padding: 8px 12px;">Default border color</td>
            </tr>
            <tr style="border-bottom: 1px solid #f3f4f6;">
              <td style="padding: 8px 12px;">--b-select-color</td>
              <td style="padding: 8px 12px;">rgba(0,0,0,0.88)</td>
              <td style="padding: 8px 12px;">Text color of selected value</td>
            </tr>
            <tr style="border-bottom: 1px solid #f3f4f6;">
              <td style="padding: 8px 12px;">--b-select-clear-bg</td>
              <td style="padding: 8px 12px;">#ffffff</td>
              <td style="padding: 8px 12px;">Background of clear button</td>
            </tr>
            <tr style="border-bottom: 1px solid #f3f4f6;">
              <td style="padding: 8px 12px;">--b-select-selector-bg</td>
              <td style="padding: 8px 12px;">#ffffff</td>
              <td style="padding: 8px 12px;">Background of the selector</td>
            </tr>
            <tr style="border-bottom: 1px solid #f3f4f6;">
              <td style="padding: 8px 12px;">--b-select-filled-bg</td>
              <td style="padding: 8px 12px;">rgba(0,0,0,0.04)</td>
              <td style="padding: 8px 12px;">Background in filled variant</td>
            </tr>
            <tr style="border-bottom: 1px solid #f3f4f6;">
              <td style="padding: 8px 12px;">--b-select-multiple-item-bg</td>
              <td style="padding: 8px 12px;">rgba(0,0,0,0.06)</td>
              <td style="padding: 8px 12px;">Background of tag items</td>
            </tr>
            <tr style="border-bottom: 1px solid #f3f4f6;">
              <td style="padding: 8px 12px;">--b-select-multiple-item-border-color</td>
              <td style="padding: 8px 12px;">transparent</td>
              <td style="padding: 8px 12px;">Border color of tag items</td>
            </tr>
            <tr style="border-bottom: 1px solid #f3f4f6;">
              <td style="padding: 8px 12px;">--b-select-option-active-bg</td>
              <td style="padding: 8px 12px;">rgba(0,0,0,0.04)</td>
              <td style="padding: 8px 12px;">Background of highlighted option</td>
            </tr>
            <tr style="border-bottom: 1px solid #f3f4f6;">
              <td style="padding: 8px 12px;">--b-select-option-font-size</td>
              <td style="padding: 8px 12px;">14px</td>
              <td style="padding: 8px 12px;">Font size of options</td>
            </tr>
            <tr style="border-bottom: 1px solid #f3f4f6;">
              <td style="padding: 8px 12px;">--b-select-option-height</td>
              <td style="padding: 8px 12px;">32px</td>
              <td style="padding: 8px 12px;">Height of each option item</td>
            </tr>
            <tr style="border-bottom: 1px solid #f3f4f6;">
              <td style="padding: 8px 12px;">--b-select-option-line-height</td>
              <td style="padding: 8px 12px;">1.5714</td>
              <td style="padding: 8px 12px;">Line height of option text</td>
            </tr>
            <tr style="border-bottom: 1px solid #f3f4f6;">
              <td style="padding: 8px 12px;">--b-select-option-padding-x</td>
              <td style="padding: 8px 12px;">12px</td>
              <td style="padding: 8px 12px;">Horizontal padding of options</td>
            </tr>
            <tr style="border-bottom: 1px solid #f3f4f6;">
              <td style="padding: 8px 12px;">--b-select-option-padding-y</td>
              <td style="padding: 8px 12px;">5px</td>
              <td style="padding: 8px 12px;">Vertical padding of options</td>
            </tr>
            <tr style="border-bottom: 1px solid #f3f4f6;">
              <td style="padding: 8px 12px;">--b-select-option-selected-bg</td>
              <td style="padding: 8px 12px;">#e6f4ff</td>
              <td style="padding: 8px 12px;">Background of selected option</td>
            </tr>
            <tr style="border-bottom: 1px solid #f3f4f6;">
              <td style="padding: 8px 12px;">--b-select-option-selected-color</td>
              <td style="padding: 8px 12px;">rgba(0,0,0,0.88)</td>
              <td style="padding: 8px 12px;">Text color of selected option</td>
            </tr>
            <tr style="border-bottom: 1px solid #f3f4f6;">
              <td style="padding: 8px 12px;">--b-select-option-selected-font-weight</td>
              <td style="padding: 8px 12px;">600</td>
              <td style="padding: 8px 12px;">Font weight of selected option</td>
            </tr>
            <tr>
              <td style="padding: 8px 12px;">--b-select-z-index-popup</td>
              <td style="padding: 8px 12px;">1050</td>
              <td style="padding: 8px 12px;">z-index of dropdown popup</td>
            </tr>
          </tbody>
        </table>
      </div>
    `})},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  args: {
    options: fruitOptions,
    placeholder: 'Select a fruit...',
    size: 'md',
    variant: 'outlined',
    disabled: false,
    allowClear: true,
    showSearch: false,
    loading: false,
    defaultActiveFirstOption: true,
    popupMatchSelectWidth: true,
    listHeight: 256
  },
  render: args => ({
    components: {
      BSelect
    },
    setup: () => {
      const value = ref<string | undefined>(undefined);
      return {
        args,
        value
      };
    },
    template: \`
      <div style="padding: 40px; max-width: 320px;">
        <BSelect v-bind="args" v-model="value" />
        <p style="margin-top: 12px; font-size: 12px; color: #666;">Value: {{ JSON.stringify(value) }}</p>
      </div>
    \`
  })
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      BSelect
    },
    setup: () => {
      const sm = ref<string | undefined>(undefined);
      const md = ref<string | undefined>(undefined);
      const lg = ref<string | undefined>(undefined);
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
          <BSelect v-model="sm" :options="fruitOptions" size="sm" placeholder="Small" />
        </div>
        <div>
          <p style="margin-bottom: 4px; font-size: 12px; color: #666;">Medium (default)</p>
          <BSelect v-model="md" :options="fruitOptions" size="md" placeholder="Medium" />
        </div>
        <div>
          <p style="margin-bottom: 4px; font-size: 12px; color: #666;">Large</p>
          <BSelect v-model="lg" :options="fruitOptions" size="lg" placeholder="Large" />
        </div>
      </div>
    \`
  })
}`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      BSelect
    },
    setup: () => {
      const outlined = ref<string | undefined>(undefined);
      const filled = ref<string | undefined>(undefined);
      const borderless = ref<string | undefined>(undefined);
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
          <BSelect v-model="outlined" :options="fruitOptions" variant="outlined" placeholder="Outlined" />
        </div>
        <div>
          <p style="margin-bottom: 4px; font-size: 12px; color: #666;">Filled</p>
          <BSelect v-model="filled" :options="fruitOptions" variant="filled" placeholder="Filled" />
        </div>
        <div>
          <p style="margin-bottom: 4px; font-size: 12px; color: #666;">Borderless</p>
          <BSelect v-model="borderless" :options="fruitOptions" variant="borderless" placeholder="Borderless" />
        </div>
      </div>
    \`
  })
}`,...x.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      BSelect
    },
    setup: () => {
      const value = ref<string[]>(['apple', 'cherry']);
      return {
        value,
        fruitOptions
      };
    },
    template: \`
      <div style="padding: 40px; max-width: 400px;">
        <p style="margin-bottom: 8px; font-size: 12px; color: #666;">Select multiple items</p>
        <BSelect v-model="value" :options="fruitOptions" mode="multiple" placeholder="Select fruits..." allow-clear />
        <p style="margin-top: 12px; font-size: 12px; color: #666;">Value: {{ JSON.stringify(value) }}</p>
      </div>
    \`
  })
}`,...S.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      BSelect
    },
    setup: () => {
      const value = ref<string[]>([]);
      return {
        value,
        fruitOptions
      };
    },
    template: \`
      <div style="padding: 40px; max-width: 400px;">
        <p style="margin-bottom: 8px; font-size: 12px; color: #666;">Tags mode - type to create custom tags</p>
        <BSelect v-model="value" :options="fruitOptions" mode="tags" placeholder="Type or select..." allow-clear />
        <p style="margin-top: 12px; font-size: 12px; color: #666;">Value: {{ JSON.stringify(value) }}</p>
      </div>
    \`
  })
}`,...C.parameters?.docs?.source}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      BSelect
    },
    setup: () => {
      const value = ref<string | undefined>(undefined);
      return {
        value,
        countryOptions
      };
    },
    template: \`
      <div style="padding: 40px; max-width: 320px;">
        <p style="margin-bottom: 8px; font-size: 12px; color: #666;">Type to filter options</p>
        <BSelect v-model="value" :options="countryOptions" show-search placeholder="Search countries..." allow-clear />
        <p style="margin-top: 12px; font-size: 12px; color: #666;">Value: {{ JSON.stringify(value) }}</p>
      </div>
    \`
  })
}`,...w.parameters?.docs?.source}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      BSelect
    },
    setup: () => {
      const err = ref<string | undefined>(undefined);
      const warn = ref<string | undefined>(undefined);
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
          <BSelect v-model="err" :options="fruitOptions" status="error" placeholder="Error state" />
        </div>
        <div>
          <p style="margin-bottom: 4px; font-size: 12px; color: #666;">Warning</p>
          <BSelect v-model="warn" :options="fruitOptions" status="warning" placeholder="Warning state" />
        </div>
      </div>
    \`
  })
}`,...T.parameters?.docs?.source}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      BSelect
    },
    setup: () => {
      const value = ref<string | undefined>(undefined);
      return {
        value,
        optionsWithDisabled
      };
    },
    template: \`
      <div style="padding: 40px; max-width: 320px;">
        <p style="margin-bottom: 8px; font-size: 12px; color: #666;">Banana and Dragon Fruit are disabled</p>
        <BSelect v-model="value" :options="optionsWithDisabled" placeholder="Select..." />
      </div>
    \`
  })
}`,...E.parameters?.docs?.source}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      BSelect
    },
    setup: () => {
      const value = ref<string[]>(['apple', 'banana', 'cherry', 'elderberry']);
      return {
        value,
        fruitOptions
      };
    },
    template: \`
      <div style="padding: 40px; max-width: 400px;">
        <p style="margin-bottom: 8px; font-size: 12px; color: #666;">maxTagCount=2 - remaining shown as +N</p>
        <BSelect v-model="value" :options="fruitOptions" mode="multiple" :max-tag-count="2" placeholder="Select..." />
      </div>
    \`
  })
}`,...D.parameters?.docs?.source}}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
  args: {
    options: fruitOptions,
    placeholder: 'Accessible select'
  },
  render: args => ({
    components: {
      BSelect
    },
    setup: () => {
      const value = ref<string | undefined>(undefined);
      return {
        args,
        value
      };
    },
    template: \`
      <div style="padding: 40px; max-width: 320px;">
        <label id="select-label" style="display: block; margin-bottom: 4px; font-size: 14px;">Choose a fruit</label>
        <BSelect v-bind="args" v-model="value" aria-labelledby="select-label" />
      </div>
    \`
  }),
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const selector = canvas.getByRole('combobox');
    expect(selector.getAttribute('role')).toBe('combobox');
    expect(selector.getAttribute('aria-haspopup')).toBe('listbox');
    expect(selector.getAttribute('aria-expanded')).toBe('false');
    await userEvent.click(selector);
    await waitFor(() => {
      expect(selector.getAttribute('aria-expanded')).toBe('true');
    });
    await waitFor(() => {
      const listbox = document.querySelector('[role="listbox"]');
      expect(listbox).toBeTruthy();
    });
    await waitFor(() => {
      const options = document.querySelectorAll('[role="option"]');
      expect(options.length).toBeGreaterThan(0);
    });
    await userEvent.keyboard('{ArrowDown}');
    await waitFor(() => {
      expect(selector.getAttribute('aria-activedescendant')).toBeTruthy();
    });
    await userEvent.keyboard('{Escape}');
    await waitFor(() => {
      expect(selector.getAttribute('aria-expanded')).toBe('false');
    });
  }
}`,...O.parameters?.docs?.source}}},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      BSelect
    },
    setup: () => {
      const v1 = ref<string | undefined>(undefined);
      const v2 = ref<string | undefined>(undefined);
      const v3 = ref<string | undefined>(undefined);
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
          <BSelect v-model="v1" :options="fruitOptions" placeholder="Default theme" />
        </div>

        <div class="custom-select-theme-purple">
          <p style="margin-bottom: 8px; font-size: 12px; color: #666;">Purple accent</p>
          <BSelect v-model="v2" :options="fruitOptions" placeholder="Purple theme" />
        </div>

        <div class="custom-select-theme-compact">
          <p style="margin-bottom: 8px; font-size: 12px; color: #666;">Compact options</p>
          <BSelect v-model="v3" :options="fruitOptions" placeholder="Compact theme" />
        </div>
      </div>

      <style>
        .custom-select-theme-purple .b-select {
          --b-select-active-border-color: #7c3aed;
          --b-select-hover-border-color: #a78bfa;
          --b-select-active-outline-color: rgba(124, 58, 237, 0.12);
          --b-select-option-selected-bg: #f3e8ff;
          --b-select-option-active-bg: #faf5ff;
        }
        .custom-select-theme-compact .b-select {
          --b-select-option-padding-x: 8px;
          --b-select-option-padding-y: 2px;
          --b-select-option-font-size: 12px;
        }
      </style>
    \`
  })
}`,...k.parameters?.docs?.source}}},A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  args: {
    options: fruitOptions,
    placeholder: 'Select a fruit...',
    allowClear: true
  },
  render: args => ({
    components: {
      BSelect
    },
    setup: () => {
      const value = ref<string | undefined>(undefined);
      return {
        args,
        value
      };
    },
    template: \`
      <div style="padding: 40px; max-width: 320px;">
        <BSelect v-bind="args" v-model="value" />
        <p data-testid="selected-value" style="margin-top: 12px; font-size: 12px; color: #666;">Selected: {{ value ?? 'none' }}</p>
      </div>
    \`
  }),
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const selector = canvas.getByRole('combobox');

    // Open dropdown
    await userEvent.click(selector);

    // Verify options appear
    await waitFor(() => {
      const options = document.querySelectorAll('[role="option"]');
      expect(options.length).toBe(8);
    });

    // Navigate and select with keyboard
    await userEvent.keyboard('{ArrowDown}');
    await userEvent.keyboard('{Enter}');

    // Verify selection
    await waitFor(() => {
      expect(canvas.getByTestId('selected-value').textContent).toContain('banana');
    });

    // Clear selection
    const clearBtn = canvasElement.querySelector('.b-select__clear');
    if (clearBtn) {
      await userEvent.click(clearBtn);
      await waitFor(() => {
        expect(canvas.getByTestId('selected-value').textContent).toContain('none');
      });
    }

    // Reopen to verify options still render
    await userEvent.click(selector);
    await waitFor(() => {
      const options = document.querySelectorAll('[role="option"]');
      expect(options.length).toBe(8);
    });

    // Close dropdown so axe scans a clean state
    await userEvent.keyboard('{Escape}');
    await waitFor(() => {
      expect(selector.getAttribute('aria-expanded')).toBe('false');
    });
  }
}`,...A.parameters?.docs?.source}}},j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  args: {
    options: fruitOptions,
    disabled: true,
    placeholder: 'Disabled select',
    modelValue: 'apple'
  },
  render: args => ({
    components: {
      BSelect
    },
    setup: () => ({
      args
    }),
    template: \`
      <div style="padding: 40px; max-width: 320px;">
        <BSelect v-bind="args" />
      </div>
    \`
  })
}`,...j.parameters?.docs?.source}}},M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
  render: () => ({
    template: \`
      <div style="padding: 40px; font-family: monospace; font-size: 13px; max-width: 900px;">
        <h3 style="margin-bottom: 16px; font-size: 16px; font-family: sans-serif;">BSelect Design Tokens</h3>
        <p style="margin-bottom: 16px; font-size: 13px; font-family: sans-serif; color: #666;">
          Override these CSS variables on <code>.b-select</code> or an ancestor to customize the component appearance.
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
              <td style="padding: 8px 12px;">--b-select-active-border-color</td>
              <td style="padding: 8px 12px;">#1677ff</td>
              <td style="padding: 8px 12px;">Border color when focused/active</td>
            </tr>
            <tr style="border-bottom: 1px solid #f3f4f6;">
              <td style="padding: 8px 12px;">--b-select-active-outline-color</td>
              <td style="padding: 8px 12px;">rgba(5,145,255,0.1)</td>
              <td style="padding: 8px 12px;">Outline/glow on focus</td>
            </tr>
            <tr style="border-bottom: 1px solid #f3f4f6;">
              <td style="padding: 8px 12px;">--b-select-hover-border-color</td>
              <td style="padding: 8px 12px;">#4096ff</td>
              <td style="padding: 8px 12px;">Border color on hover</td>
            </tr>
            <tr style="border-bottom: 1px solid #f3f4f6;">
              <td style="padding: 8px 12px;">--b-select-border-color</td>
              <td style="padding: 8px 12px;">#d9d9d9</td>
              <td style="padding: 8px 12px;">Default border color</td>
            </tr>
            <tr style="border-bottom: 1px solid #f3f4f6;">
              <td style="padding: 8px 12px;">--b-select-color</td>
              <td style="padding: 8px 12px;">rgba(0,0,0,0.88)</td>
              <td style="padding: 8px 12px;">Text color of selected value</td>
            </tr>
            <tr style="border-bottom: 1px solid #f3f4f6;">
              <td style="padding: 8px 12px;">--b-select-clear-bg</td>
              <td style="padding: 8px 12px;">#ffffff</td>
              <td style="padding: 8px 12px;">Background of clear button</td>
            </tr>
            <tr style="border-bottom: 1px solid #f3f4f6;">
              <td style="padding: 8px 12px;">--b-select-selector-bg</td>
              <td style="padding: 8px 12px;">#ffffff</td>
              <td style="padding: 8px 12px;">Background of the selector</td>
            </tr>
            <tr style="border-bottom: 1px solid #f3f4f6;">
              <td style="padding: 8px 12px;">--b-select-filled-bg</td>
              <td style="padding: 8px 12px;">rgba(0,0,0,0.04)</td>
              <td style="padding: 8px 12px;">Background in filled variant</td>
            </tr>
            <tr style="border-bottom: 1px solid #f3f4f6;">
              <td style="padding: 8px 12px;">--b-select-multiple-item-bg</td>
              <td style="padding: 8px 12px;">rgba(0,0,0,0.06)</td>
              <td style="padding: 8px 12px;">Background of tag items</td>
            </tr>
            <tr style="border-bottom: 1px solid #f3f4f6;">
              <td style="padding: 8px 12px;">--b-select-multiple-item-border-color</td>
              <td style="padding: 8px 12px;">transparent</td>
              <td style="padding: 8px 12px;">Border color of tag items</td>
            </tr>
            <tr style="border-bottom: 1px solid #f3f4f6;">
              <td style="padding: 8px 12px;">--b-select-option-active-bg</td>
              <td style="padding: 8px 12px;">rgba(0,0,0,0.04)</td>
              <td style="padding: 8px 12px;">Background of highlighted option</td>
            </tr>
            <tr style="border-bottom: 1px solid #f3f4f6;">
              <td style="padding: 8px 12px;">--b-select-option-font-size</td>
              <td style="padding: 8px 12px;">14px</td>
              <td style="padding: 8px 12px;">Font size of options</td>
            </tr>
            <tr style="border-bottom: 1px solid #f3f4f6;">
              <td style="padding: 8px 12px;">--b-select-option-height</td>
              <td style="padding: 8px 12px;">32px</td>
              <td style="padding: 8px 12px;">Height of each option item</td>
            </tr>
            <tr style="border-bottom: 1px solid #f3f4f6;">
              <td style="padding: 8px 12px;">--b-select-option-line-height</td>
              <td style="padding: 8px 12px;">1.5714</td>
              <td style="padding: 8px 12px;">Line height of option text</td>
            </tr>
            <tr style="border-bottom: 1px solid #f3f4f6;">
              <td style="padding: 8px 12px;">--b-select-option-padding-x</td>
              <td style="padding: 8px 12px;">12px</td>
              <td style="padding: 8px 12px;">Horizontal padding of options</td>
            </tr>
            <tr style="border-bottom: 1px solid #f3f4f6;">
              <td style="padding: 8px 12px;">--b-select-option-padding-y</td>
              <td style="padding: 8px 12px;">5px</td>
              <td style="padding: 8px 12px;">Vertical padding of options</td>
            </tr>
            <tr style="border-bottom: 1px solid #f3f4f6;">
              <td style="padding: 8px 12px;">--b-select-option-selected-bg</td>
              <td style="padding: 8px 12px;">#e6f4ff</td>
              <td style="padding: 8px 12px;">Background of selected option</td>
            </tr>
            <tr style="border-bottom: 1px solid #f3f4f6;">
              <td style="padding: 8px 12px;">--b-select-option-selected-color</td>
              <td style="padding: 8px 12px;">rgba(0,0,0,0.88)</td>
              <td style="padding: 8px 12px;">Text color of selected option</td>
            </tr>
            <tr style="border-bottom: 1px solid #f3f4f6;">
              <td style="padding: 8px 12px;">--b-select-option-selected-font-weight</td>
              <td style="padding: 8px 12px;">600</td>
              <td style="padding: 8px 12px;">Font weight of selected option</td>
            </tr>
            <tr>
              <td style="padding: 8px 12px;">--b-select-z-index-popup</td>
              <td style="padding: 8px 12px;">1050</td>
              <td style="padding: 8px 12px;">z-index of dropdown popup</td>
            </tr>
          </tbody>
        </table>
      </div>
    \`
  })
}`,...M.parameters?.docs?.source}}},N=[`Playground`,`Sizes`,`Variants`,`MultipleMode`,`TagsMode`,`Searchable`,`Status`,`DisabledOptions`,`MaxTagCount`,`Accessibility`,`Theming`,`InteractionTest`,`Disabled`,`DesignTokens`]}))();export{O as Accessibility,M as DesignTokens,j as Disabled,E as DisabledOptions,A as InteractionTest,D as MaxTagCount,S as MultipleMode,y as Playground,w as Searchable,b as Sizes,T as Status,C as TagsMode,k as Theming,x as Variants,N as __namedExportsOrder,h as default};