import{n as e}from"./chunk-BneVvdWh.js";import{X as t,i as n}from"./iframe-By7LT0M0.js";import{dt as r,ft as i,gt as a,ht as o,mt as s,pt as c,t as l}from"./components-DGiLIoKr.js";var u,d,f,p,m,h,g,_,v,y,b,x,S,C,w,T,E,D,O,k,A,j,M;e((()=>{l(),a(),n(),{expect:u,userEvent:d,waitFor:f,within:p}=__STORYBOOK_MODULE_TEST__,m={title:`Data Entry/Cascader`,component:r,tags:[`autodocs`],argTypes:{modelValue:{control:`object`,description:`The selected value as an array path (e.g. ["zhejiang", "hangzhou", "xihu"]).`,table:{category:`Two-Way Binding Props`}},options:{control:`object`,description:`Hierarchical options data.`},placeholder:{control:`text`,description:`Input placeholder text.`,table:{defaultValue:{summary:`Please select`}}},disabled:{control:`boolean`,description:`Whether the cascader is disabled.`,table:{defaultValue:{summary:`false`}}},allowClear:{control:`boolean`,description:`Whether to show a clear button.`,table:{defaultValue:{summary:`true`}}},expandTrigger:{control:`select`,options:Object.values(i),description:`Expand child options on click or hover.`,table:{defaultValue:{summary:i.Click}}},placement:{control:`select`,options:Object.values(c),description:`Popup placement.`,table:{defaultValue:{summary:c.BottomLeft}}},size:{control:`select`,options:Object.values(s),description:`Size of the input.`,table:{defaultValue:{summary:s.Medium}}},changeOnSelect:{control:`boolean`,description:`Emit change on each level selection, not just leaf.`,table:{defaultValue:{summary:`false`}}},showSearch:{control:`boolean`,description:`Enable search filtering.`,table:{defaultValue:{summary:`false`}}},multiple:{control:`boolean`,description:`Enable multiple selection mode.`,table:{defaultValue:{summary:`false`}}},maxTagCount:{control:`number`,description:`Maximum tags to display in multiple mode.`},status:{control:`select`,options:[void 0,...Object.values(o)],description:`Validation status.`},notFoundContent:{control:`text`,description:`Content when no search match found.`,table:{defaultValue:{summary:`No data`}}}},parameters:{docs:{description:{component:`The <code>BCascader</code> component displays a cascade selection menu for selecting from a hierarchical data structure (e.g. province/city/district).<br><br>Supports search, multiple selection, keyboard navigation, hover expand, and custom field names. Uses the native HTML <code>popover</code> attribute and CSS Anchor Positioning.`}}}},h=[{value:`zhejiang`,label:`Zhejiang`,children:[{value:`hangzhou`,label:`Hangzhou`,children:[{value:`xihu`,label:`West Lake`},{value:`xiasha`,label:`Xiasha`}]},{value:`ningbo`,label:`Ningbo`,children:[{value:`dongqianlake`,label:`Dongqian Lake`}]}]},{value:`jiangsu`,label:`Jiangsu`,children:[{value:`nanjing`,label:`Nanjing`,children:[{value:`zhonghuamen`,label:`Zhong Hua Men`},{value:`xuanwuhu`,label:`Xuanwu Lake`}]},{value:`suzhou`,label:`Suzhou`,children:[{value:`zhuozhengyuan`,label:`Humble Administrator's Garden`},{value:`huqiushan`,label:`Tiger Hill`}]}]},{value:`guangdong`,label:`Guangdong`,children:[{value:`shenzhen`,label:`Shenzhen`,children:[{value:`nanshan`,label:`Nanshan`},{value:`futian`,label:`Futian`}]}]}],g=[{value:`zhejiang`,label:`Zhejiang`,children:[{value:`hangzhou`,label:`Hangzhou`,disabled:!0,children:[{value:`xihu`,label:`West Lake`}]},{value:`ningbo`,label:`Ningbo`,children:[{value:`dongqianlake`,label:`Dongqian Lake`}]}]},{value:`jiangsu`,label:`Jiangsu`,disabled:!0}],_={render:e=>({components:{BCascader:r},setup(){return{args:e,value:t([])}},template:`
      <div style="padding: 40px;">
        <BCascader v-bind="args" v-model="value" />
        <p style="margin-top: 16px; font-size: 13px; color: #666;">
          Selected: {{ value }}
        </p>
      </div>
    `}),args:{options:h,placeholder:`Please select`,allowClear:!0,size:s.Medium,expandTrigger:i.Click}},v={render:()=>({components:{BCascader:r},setup(){return{value:t([]),sampleOptions:h}},template:`
      <div style="padding: 40px; display: flex; flex-direction: column; gap: 16px;">
        <BCascader :options="sampleOptions" v-model="value" size="sm" placeholder="Small" />
        <BCascader :options="sampleOptions" v-model="value" size="md" placeholder="Medium (default)" />
        <BCascader :options="sampleOptions" v-model="value" size="lg" placeholder="Large" />
      </div>
    `})},y={render:()=>({components:{BCascader:r},setup(){return{value:t([]),sampleOptions:h}},template:`
      <div style="padding: 40px;">
        <BCascader
          :options="sampleOptions"
          v-model="value"
          expand-trigger="hover"
          placeholder="Hover to expand"
        />
      </div>
    `})},b={render:()=>({components:{BCascader:r},setup(){return{value:t([]),sampleOptions:h}},template:`
      <div style="padding: 40px;">
        <BCascader
          :options="sampleOptions"
          v-model="value"
          :change-on-select="true"
          placeholder="Select any level"
        />
        <p style="margin-top: 16px; font-size: 13px; color: #666;">
          Selected: {{ value }}
        </p>
      </div>
    `})},x={render:()=>({components:{BCascader:r},setup(){return{value:t([]),sampleOptions:h}},template:`
      <div style="padding: 40px;">
        <BCascader
          :options="sampleOptions"
          v-model="value"
          :show-search="true"
          placeholder="Search locations..."
        />
      </div>
    `})},S={render:()=>({components:{BCascader:r},setup(){return{value:t([]),sampleOptions:h}},template:`
      <div style="padding: 40px;">
        <BCascader
          :options="sampleOptions"
          v-model="value"
          :multiple="true"
          placeholder="Select multiple"
        />
        <p style="margin-top: 16px; font-size: 13px; color: #666;">
          Selected: {{ value }}
        </p>
      </div>
    `})},C={render:()=>({components:{BCascader:r},setup(){return{value:t([[`zhejiang`,`hangzhou`,`xihu`],[`jiangsu`,`nanjing`,`zhonghuamen`],[`guangdong`,`shenzhen`,`nanshan`]]),sampleOptions:h}},template:`
      <div style="padding: 40px;">
        <BCascader
          :options="sampleOptions"
          v-model="value"
          :multiple="true"
          :max-tag-count="2"
          placeholder="Max 2 tags shown"
        />
      </div>
    `})},w={render:()=>({components:{BCascader:r},setup(){return{value:t([]),disabledOptions:g}},template:`
      <div style="padding: 40px;">
        <BCascader
          :options="disabledOptions"
          v-model="value"
          placeholder="Some options disabled"
        />
      </div>
    `})},T={render:()=>({components:{BCascader:r},setup(){return{value:t([`zhejiang`,`hangzhou`,`xihu`]),sampleOptions:h}},template:`
      <div style="padding: 40px;">
        <BCascader
          :options="sampleOptions"
          v-model="value"
          :disabled="true"
          placeholder="Disabled"
        />
      </div>
    `})},E={render:()=>({components:{BCascader:r},setup(){return{value:t([]),sampleOptions:h}},template:`
      <div style="padding: 40px; display: flex; flex-direction: column; gap: 16px;">
        <BCascader :options="sampleOptions" v-model="value" status="error" placeholder="Error status" />
        <BCascader :options="sampleOptions" v-model="value" status="warning" placeholder="Warning status" />
      </div>
    `})},D={render:()=>({components:{BCascader:r},setup(){return{value:t([]),customOptions:[{code:`us`,name:`United States`,items:[{code:`ca`,name:`California`,items:[{code:`sf`,name:`San Francisco`}]},{code:`ny`,name:`New York`,items:[{code:`nyc`,name:`New York City`}]}]},{code:`uk`,name:`United Kingdom`,items:[{code:`london`,name:`London`,items:[{code:`camden`,name:`Camden`}]}]}]}},template:`
      <div style="padding: 40px;">
        <BCascader
          :options="customOptions"
          v-model="value"
          :field-names="{ label: 'name', value: 'code', children: 'items' }"
          placeholder="Custom field names"
        />
        <p style="margin-top: 16px; font-size: 13px; color: #666;">
          Selected: {{ value }}
        </p>
      </div>
    `})},O={render:()=>({components:{BCascader:r},setup(){return{value:t([]),sampleOptions:h}},template:`
      <div style="padding: 40px;">
        <label id="cascader-label" style="display: block; margin-bottom: 8px; font-weight: 500;">
          Select location:
        </label>
        <BCascader
          :options="sampleOptions"
          v-model="value"
          placeholder="Navigate with keyboard"
          data-testid="a11y-cascader"
        />
        <p style="margin-top: 12px; font-size: 12px; color: #595959;">
          Use Tab to focus, Enter/Space to open, Arrow keys to navigate, Escape to close.
        </p>
      </div>
    `}),play:async({canvasElement:e})=>{let t=p(e).getByRole(`combobox`);u(t).toBeTruthy(),u(t.getAttribute(`aria-haspopup`)).toBe(`listbox`),u(t.getAttribute(`aria-expanded`)).toBe(`false`),await d.click(e.querySelector(`.b-cascader`)),await f(()=>{u(e.querySelectorAll(`[role="listbox"]`).length).toBeGreaterThan(0)});let n=e.querySelectorAll(`[role="option"]`);u(n.length).toBeGreaterThan(0);for(let e of n)u(e.getAttribute(`tabindex`)).not.toBeNull()}},k={render:()=>({components:{BCascader:r},setup(){return{value:t([`zhejiang`,`hangzhou`,`xihu`]),sampleOptions:h}},template:`
      <div style="padding: 40px; display: flex; flex-direction: column; gap: 24px;">
        <div>
          <p style="margin-bottom: 8px; font-weight: 500;">Default theme:</p>
          <BCascader :options="sampleOptions" v-model="value" />
        </div>
        <div
          style="
            --b-cascader-border-color: #722ed1;
            --b-cascader-focus-border-color: #9254de;
            --b-cascader-focus-shadow: 0 0 0 2px rgba(114, 46, 209, 0.1);
            --b-cascader-option-selected-bg: #f9f0ff;
            --b-cascader-option-selected-color: #722ed1;
            --b-cascader-hover-border-color: #9254de;
          "
        >
          <p style="margin-bottom: 8px; font-weight: 500;">Purple theme (overriding CSS vars):</p>
          <BCascader :options="sampleOptions" v-model="value" />
        </div>
        <div
          style="
            --b-cascader-border-radius: 20px;
            --b-cascader-popup-border-radius: 16px;
            --b-cascader-option-border-radius: 8px;
            --b-cascader-border-color: #52c41a;
            --b-cascader-focus-border-color: #73d13d;
            --b-cascader-option-selected-bg: #f6ffed;
            --b-cascader-option-selected-color: #389e0d;
          "
        >
          <p style="margin-bottom: 8px; font-weight: 500;">Green rounded theme:</p>
          <BCascader :options="sampleOptions" v-model="value" />
        </div>
      </div>
    `})},A={render:()=>({components:{BCascader:r},setup(){return{value:t([]),sampleOptions:h}},template:`
      <div style="padding: 40px;">
        <BCascader
          :options="sampleOptions"
          v-model="value"
          placeholder="Click to select"
          data-testid="interaction-cascader"
        />
        <p data-testid="selected-value" style="margin-top: 16px; font-size: 13px;">
          {{ value.length ? value.join(' / ') : 'Nothing selected' }}
        </p>
      </div>
    `}),play:async({canvasElement:e})=>{let t=p(e);u(t.getByText(`Nothing selected`)).toBeTruthy(),await d.click(e.querySelector(`.b-cascader`)),await f(()=>{u(e.querySelectorAll(`.b-cascader__option`).length).toBeGreaterThan(0)});let n=e.querySelectorAll(`.b-cascader__menu:first-child .b-cascader__option`);await d.click(n[0]),await f(()=>{u(e.querySelectorAll(`.b-cascader__menu`).length).toBe(2)});let r=e.querySelectorAll(`.b-cascader__menu:nth-child(2) .b-cascader__option`);await d.click(r[0]),await f(()=>{u(e.querySelectorAll(`.b-cascader__menu`).length).toBe(3)});let i=e.querySelectorAll(`.b-cascader__menu:nth-child(3) .b-cascader__option`);await d.click(i[0]),await f(()=>{u(t.getByText(`zhejiang / hangzhou / xihu`)).toBeTruthy()})}},j={render:()=>({setup(){return{tokens:[{variable:`--b-cascader-control-width`,default:`184px`,description:`Width of the cascader control`},{variable:`--b-cascader-control-item-width`,default:`111px`,description:`Width of each menu column`},{variable:`--b-cascader-dropdown-height`,default:`180px`,description:`Max height of dropdown menu`},{variable:`--b-cascader-menu-padding`,default:`4px`,description:`Padding inside each menu column`},{variable:`--b-cascader-option-padding`,default:`5px 12px`,description:`Padding of each option item`},{variable:`--b-cascader-option-selected-bg`,default:`#e6f4ff`,description:`Background color of selected option`},{variable:`--b-cascader-option-selected-color`,default:`rgba(0, 0, 0, 0.88)`,description:`Text color of selected option`},{variable:`--b-cascader-option-selected-font-weight`,default:`600`,description:`Font weight of selected option`},{variable:`--b-cascader-bg`,default:`#fff`,description:`Background of the input control`},{variable:`--b-cascader-color`,default:`rgba(0, 0, 0, 0.88)`,description:`Text color of the input`},{variable:`--b-cascader-border-color`,default:`#d9d9d9`,description:`Border color of the input`},{variable:`--b-cascader-border-radius`,default:`6px`,description:`Border radius of the input`},{variable:`--b-cascader-font-size`,default:`14px`,description:`Font size of the input`},{variable:`--b-cascader-height`,default:`32px`,description:`Height of the input control`},{variable:`--b-cascader-padding-x`,default:`11px`,description:`Horizontal padding inside the input`},{variable:`--b-cascader-placeholder-color`,default:`rgba(0, 0, 0, 0.25)`,description:`Placeholder text color`},{variable:`--b-cascader-hover-border-color`,default:`#4096ff`,description:`Border color on hover`},{variable:`--b-cascader-focus-border-color`,default:`#1677ff`,description:`Border color on focus`},{variable:`--b-cascader-focus-shadow`,default:`0 0 0 2px rgba(5, 145, 255, 0.1)`,description:`Box shadow on focus`},{variable:`--b-cascader-disabled-bg`,default:`rgba(0, 0, 0, 0.04)`,description:`Background when disabled`},{variable:`--b-cascader-disabled-color`,default:`rgba(0, 0, 0, 0.25)`,description:`Text color when disabled`},{variable:`--b-cascader-popup-bg`,default:`#fff`,description:`Background of the dropdown popup`},{variable:`--b-cascader-popup-shadow`,default:`0 6px 16px ...`,description:`Box shadow of the popup`},{variable:`--b-cascader-popup-border-radius`,default:`8px`,description:`Border radius of the popup`},{variable:`--b-cascader-popup-z-index`,default:`1050`,description:`Z-index of the popup`},{variable:`--b-cascader-option-hover-bg`,default:`rgba(0, 0, 0, 0.04)`,description:`Background of option on hover`},{variable:`--b-cascader-option-border-radius`,default:`4px`,description:`Border radius of options`},{variable:`--b-cascader-option-disabled-color`,default:`rgba(0, 0, 0, 0.25)`,description:`Color of disabled options`},{variable:`--b-cascader-tag-bg`,default:`rgba(0, 0, 0, 0.06)`,description:`Background of tags (multiple mode)`},{variable:`--b-cascader-tag-color`,default:`rgba(0, 0, 0, 0.88)`,description:`Color of tags (multiple mode)`},{variable:`--b-cascader-tag-border-radius`,default:`4px`,description:`Border radius of tags`},{variable:`--b-cascader-transition-duration`,default:`200ms`,description:`Duration of transitions`},{variable:`--b-cascader-menu-border-color`,default:`rgba(5, 5, 5, 0.06)`,description:`Border between menu columns`},{variable:`--b-cascader-checkbox-size`,default:`16px`,description:`Size of checkboxes (multiple mode)`}]}},template:`
      <div style="padding: 24px;">
        <h3 style="margin-bottom: 16px; font-size: 18px; font-weight: 600;">BCascader Design Tokens</h3>
        <p style="margin-bottom: 16px; font-size: 13px; color: #666;">
          Override these CSS variables on any ancestor or directly on the component to customize the look.
        </p>
        <table style="width: 100%; border-collapse: collapse; font-size: 13px;">
          <thead>
            <tr style="border-bottom: 2px solid #f0f0f0;">
              <th style="text-align: left; padding: 8px 12px; font-weight: 600;">Variable</th>
              <th style="text-align: left; padding: 8px 12px; font-weight: 600;">Default</th>
              <th style="text-align: left; padding: 8px 12px; font-weight: 600;">Description</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="token in tokens" :key="token.variable" style="border-bottom: 1px solid #f0f0f0;">
              <td style="padding: 8px 12px; font-family: monospace; color: #0958d9; white-space: nowrap;">
                {{ token.variable }}
              </td>
              <td style="padding: 8px 12px; font-family: monospace; color: #666;">
                {{ token.default }}
              </td>
              <td style="padding: 8px 12px; color: #333;">
                {{ token.description }}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    `})},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  render: args => ({
    components: {
      BCascader
    },
    setup() {
      const value = ref<(string | number)[]>([]);
      return {
        args,
        value
      };
    },
    template: \`
      <div style="padding: 40px;">
        <BCascader v-bind="args" v-model="value" />
        <p style="margin-top: 16px; font-size: 13px; color: #666;">
          Selected: {{ value }}
        </p>
      </div>
    \`
  }),
  args: {
    options: sampleOptions,
    placeholder: 'Please select',
    allowClear: true,
    size: BCascaderSize.Medium,
    expandTrigger: BCascaderExpandTrigger.Click
  }
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      BCascader
    },
    setup() {
      const value = ref<(string | number)[]>([]);
      return {
        value,
        sampleOptions
      };
    },
    template: \`
      <div style="padding: 40px; display: flex; flex-direction: column; gap: 16px;">
        <BCascader :options="sampleOptions" v-model="value" size="sm" placeholder="Small" />
        <BCascader :options="sampleOptions" v-model="value" size="md" placeholder="Medium (default)" />
        <BCascader :options="sampleOptions" v-model="value" size="lg" placeholder="Large" />
      </div>
    \`
  })
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      BCascader
    },
    setup() {
      const value = ref<(string | number)[]>([]);
      return {
        value,
        sampleOptions
      };
    },
    template: \`
      <div style="padding: 40px;">
        <BCascader
          :options="sampleOptions"
          v-model="value"
          expand-trigger="hover"
          placeholder="Hover to expand"
        />
      </div>
    \`
  })
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      BCascader
    },
    setup() {
      const value = ref<(string | number)[]>([]);
      return {
        value,
        sampleOptions
      };
    },
    template: \`
      <div style="padding: 40px;">
        <BCascader
          :options="sampleOptions"
          v-model="value"
          :change-on-select="true"
          placeholder="Select any level"
        />
        <p style="margin-top: 16px; font-size: 13px; color: #666;">
          Selected: {{ value }}
        </p>
      </div>
    \`
  })
}`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      BCascader
    },
    setup() {
      const value = ref<(string | number)[]>([]);
      return {
        value,
        sampleOptions
      };
    },
    template: \`
      <div style="padding: 40px;">
        <BCascader
          :options="sampleOptions"
          v-model="value"
          :show-search="true"
          placeholder="Search locations..."
        />
      </div>
    \`
  })
}`,...x.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      BCascader
    },
    setup() {
      const value = ref<(string | number)[][]>([]);
      return {
        value,
        sampleOptions
      };
    },
    template: \`
      <div style="padding: 40px;">
        <BCascader
          :options="sampleOptions"
          v-model="value"
          :multiple="true"
          placeholder="Select multiple"
        />
        <p style="margin-top: 16px; font-size: 13px; color: #666;">
          Selected: {{ value }}
        </p>
      </div>
    \`
  })
}`,...S.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      BCascader
    },
    setup() {
      const value = ref<(string | number)[][]>([['zhejiang', 'hangzhou', 'xihu'], ['jiangsu', 'nanjing', 'zhonghuamen'], ['guangdong', 'shenzhen', 'nanshan']]);
      return {
        value,
        sampleOptions
      };
    },
    template: \`
      <div style="padding: 40px;">
        <BCascader
          :options="sampleOptions"
          v-model="value"
          :multiple="true"
          :max-tag-count="2"
          placeholder="Max 2 tags shown"
        />
      </div>
    \`
  })
}`,...C.parameters?.docs?.source}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      BCascader
    },
    setup() {
      const value = ref<(string | number)[]>([]);
      return {
        value,
        disabledOptions
      };
    },
    template: \`
      <div style="padding: 40px;">
        <BCascader
          :options="disabledOptions"
          v-model="value"
          placeholder="Some options disabled"
        />
      </div>
    \`
  })
}`,...w.parameters?.docs?.source}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      BCascader
    },
    setup() {
      const value = ref(['zhejiang', 'hangzhou', 'xihu']);
      return {
        value,
        sampleOptions
      };
    },
    template: \`
      <div style="padding: 40px;">
        <BCascader
          :options="sampleOptions"
          v-model="value"
          :disabled="true"
          placeholder="Disabled"
        />
      </div>
    \`
  })
}`,...T.parameters?.docs?.source}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      BCascader
    },
    setup() {
      const value = ref<(string | number)[]>([]);
      return {
        value,
        sampleOptions
      };
    },
    template: \`
      <div style="padding: 40px; display: flex; flex-direction: column; gap: 16px;">
        <BCascader :options="sampleOptions" v-model="value" status="error" placeholder="Error status" />
        <BCascader :options="sampleOptions" v-model="value" status="warning" placeholder="Warning status" />
      </div>
    \`
  })
}`,...E.parameters?.docs?.source}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      BCascader
    },
    setup() {
      const value = ref<(string | number)[]>([]);
      const customOptions = [{
        code: 'us',
        name: 'United States',
        items: [{
          code: 'ca',
          name: 'California',
          items: [{
            code: 'sf',
            name: 'San Francisco'
          }]
        }, {
          code: 'ny',
          name: 'New York',
          items: [{
            code: 'nyc',
            name: 'New York City'
          }]
        }]
      }, {
        code: 'uk',
        name: 'United Kingdom',
        items: [{
          code: 'london',
          name: 'London',
          items: [{
            code: 'camden',
            name: 'Camden'
          }]
        }]
      }];
      return {
        value,
        customOptions
      };
    },
    template: \`
      <div style="padding: 40px;">
        <BCascader
          :options="customOptions"
          v-model="value"
          :field-names="{ label: 'name', value: 'code', children: 'items' }"
          placeholder="Custom field names"
        />
        <p style="margin-top: 16px; font-size: 13px; color: #666;">
          Selected: {{ value }}
        </p>
      </div>
    \`
  })
}`,...D.parameters?.docs?.source}}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      BCascader
    },
    setup() {
      const value = ref<(string | number)[]>([]);
      return {
        value,
        sampleOptions
      };
    },
    template: \`
      <div style="padding: 40px;">
        <label id="cascader-label" style="display: block; margin-bottom: 8px; font-weight: 500;">
          Select location:
        </label>
        <BCascader
          :options="sampleOptions"
          v-model="value"
          placeholder="Navigate with keyboard"
          data-testid="a11y-cascader"
        />
        <p style="margin-top: 12px; font-size: 12px; color: #595959;">
          Use Tab to focus, Enter/Space to open, Arrow keys to navigate, Escape to close.
        </p>
      </div>
    \`
  }),
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const trigger = canvas.getByRole('combobox');
    expect(trigger).toBeTruthy();
    expect(trigger.getAttribute('aria-haspopup')).toBe('listbox');
    expect(trigger.getAttribute('aria-expanded')).toBe('false');

    // Open with click
    await userEvent.click(canvasElement.querySelector('.b-cascader')!);
    await waitFor(() => {
      const listboxes = canvasElement.querySelectorAll('[role="listbox"]');
      expect(listboxes.length).toBeGreaterThan(0);
    });
    const options = canvasElement.querySelectorAll('[role="option"]');
    expect(options.length).toBeGreaterThan(0);

    // Check each option has tabindex
    for (const option of options) {
      expect(option.getAttribute('tabindex')).not.toBeNull();
    }
  }
}`,...O.parameters?.docs?.source}}},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      BCascader
    },
    setup() {
      const value = ref(['zhejiang', 'hangzhou', 'xihu']);
      return {
        value,
        sampleOptions
      };
    },
    template: \`
      <div style="padding: 40px; display: flex; flex-direction: column; gap: 24px;">
        <div>
          <p style="margin-bottom: 8px; font-weight: 500;">Default theme:</p>
          <BCascader :options="sampleOptions" v-model="value" />
        </div>
        <div
          style="
            --b-cascader-border-color: #722ed1;
            --b-cascader-focus-border-color: #9254de;
            --b-cascader-focus-shadow: 0 0 0 2px rgba(114, 46, 209, 0.1);
            --b-cascader-option-selected-bg: #f9f0ff;
            --b-cascader-option-selected-color: #722ed1;
            --b-cascader-hover-border-color: #9254de;
          "
        >
          <p style="margin-bottom: 8px; font-weight: 500;">Purple theme (overriding CSS vars):</p>
          <BCascader :options="sampleOptions" v-model="value" />
        </div>
        <div
          style="
            --b-cascader-border-radius: 20px;
            --b-cascader-popup-border-radius: 16px;
            --b-cascader-option-border-radius: 8px;
            --b-cascader-border-color: #52c41a;
            --b-cascader-focus-border-color: #73d13d;
            --b-cascader-option-selected-bg: #f6ffed;
            --b-cascader-option-selected-color: #389e0d;
          "
        >
          <p style="margin-bottom: 8px; font-weight: 500;">Green rounded theme:</p>
          <BCascader :options="sampleOptions" v-model="value" />
        </div>
      </div>
    \`
  })
}`,...k.parameters?.docs?.source}}},A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      BCascader
    },
    setup() {
      const value = ref<(string | number)[]>([]);
      return {
        value,
        sampleOptions
      };
    },
    template: \`
      <div style="padding: 40px;">
        <BCascader
          :options="sampleOptions"
          v-model="value"
          placeholder="Click to select"
          data-testid="interaction-cascader"
        />
        <p data-testid="selected-value" style="margin-top: 16px; font-size: 13px;">
          {{ value.length ? value.join(' / ') : 'Nothing selected' }}
        </p>
      </div>
    \`
  }),
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);

    // Initial state
    expect(canvas.getByText('Nothing selected')).toBeTruthy();

    // Open cascader
    await userEvent.click(canvasElement.querySelector('.b-cascader')!);
    await waitFor(() => {
      const options = canvasElement.querySelectorAll('.b-cascader__option');
      expect(options.length).toBeGreaterThan(0);
    });

    // Select first level
    const firstOptions = canvasElement.querySelectorAll('.b-cascader__menu:first-child .b-cascader__option');
    await userEvent.click(firstOptions[0]);

    // Wait for second level
    await waitFor(() => {
      const menus = canvasElement.querySelectorAll('.b-cascader__menu');
      expect(menus.length).toBe(2);
    });

    // Select second level
    const secondOptions = canvasElement.querySelectorAll('.b-cascader__menu:nth-child(2) .b-cascader__option');
    await userEvent.click(secondOptions[0]);

    // Wait for third level
    await waitFor(() => {
      const menus = canvasElement.querySelectorAll('.b-cascader__menu');
      expect(menus.length).toBe(3);
    });

    // Select leaf
    const thirdOptions = canvasElement.querySelectorAll('.b-cascader__menu:nth-child(3) .b-cascader__option');
    await userEvent.click(thirdOptions[0]);

    // Verify selection
    await waitFor(() => {
      expect(canvas.getByText('zhejiang / hangzhou / xihu')).toBeTruthy();
    });
  }
}`,...A.parameters?.docs?.source}}},j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  render: () => ({
    setup() {
      const tokens = [{
        variable: '--b-cascader-control-width',
        default: '184px',
        description: 'Width of the cascader control'
      }, {
        variable: '--b-cascader-control-item-width',
        default: '111px',
        description: 'Width of each menu column'
      }, {
        variable: '--b-cascader-dropdown-height',
        default: '180px',
        description: 'Max height of dropdown menu'
      }, {
        variable: '--b-cascader-menu-padding',
        default: '4px',
        description: 'Padding inside each menu column'
      }, {
        variable: '--b-cascader-option-padding',
        default: '5px 12px',
        description: 'Padding of each option item'
      }, {
        variable: '--b-cascader-option-selected-bg',
        default: '#e6f4ff',
        description: 'Background color of selected option'
      }, {
        variable: '--b-cascader-option-selected-color',
        default: 'rgba(0, 0, 0, 0.88)',
        description: 'Text color of selected option'
      }, {
        variable: '--b-cascader-option-selected-font-weight',
        default: '600',
        description: 'Font weight of selected option'
      }, {
        variable: '--b-cascader-bg',
        default: '#fff',
        description: 'Background of the input control'
      }, {
        variable: '--b-cascader-color',
        default: 'rgba(0, 0, 0, 0.88)',
        description: 'Text color of the input'
      }, {
        variable: '--b-cascader-border-color',
        default: '#d9d9d9',
        description: 'Border color of the input'
      }, {
        variable: '--b-cascader-border-radius',
        default: '6px',
        description: 'Border radius of the input'
      }, {
        variable: '--b-cascader-font-size',
        default: '14px',
        description: 'Font size of the input'
      }, {
        variable: '--b-cascader-height',
        default: '32px',
        description: 'Height of the input control'
      }, {
        variable: '--b-cascader-padding-x',
        default: '11px',
        description: 'Horizontal padding inside the input'
      }, {
        variable: '--b-cascader-placeholder-color',
        default: 'rgba(0, 0, 0, 0.25)',
        description: 'Placeholder text color'
      }, {
        variable: '--b-cascader-hover-border-color',
        default: '#4096ff',
        description: 'Border color on hover'
      }, {
        variable: '--b-cascader-focus-border-color',
        default: '#1677ff',
        description: 'Border color on focus'
      }, {
        variable: '--b-cascader-focus-shadow',
        default: '0 0 0 2px rgba(5, 145, 255, 0.1)',
        description: 'Box shadow on focus'
      }, {
        variable: '--b-cascader-disabled-bg',
        default: 'rgba(0, 0, 0, 0.04)',
        description: 'Background when disabled'
      }, {
        variable: '--b-cascader-disabled-color',
        default: 'rgba(0, 0, 0, 0.25)',
        description: 'Text color when disabled'
      }, {
        variable: '--b-cascader-popup-bg',
        default: '#fff',
        description: 'Background of the dropdown popup'
      }, {
        variable: '--b-cascader-popup-shadow',
        default: '0 6px 16px ...',
        description: 'Box shadow of the popup'
      }, {
        variable: '--b-cascader-popup-border-radius',
        default: '8px',
        description: 'Border radius of the popup'
      }, {
        variable: '--b-cascader-popup-z-index',
        default: '1050',
        description: 'Z-index of the popup'
      }, {
        variable: '--b-cascader-option-hover-bg',
        default: 'rgba(0, 0, 0, 0.04)',
        description: 'Background of option on hover'
      }, {
        variable: '--b-cascader-option-border-radius',
        default: '4px',
        description: 'Border radius of options'
      }, {
        variable: '--b-cascader-option-disabled-color',
        default: 'rgba(0, 0, 0, 0.25)',
        description: 'Color of disabled options'
      }, {
        variable: '--b-cascader-tag-bg',
        default: 'rgba(0, 0, 0, 0.06)',
        description: 'Background of tags (multiple mode)'
      }, {
        variable: '--b-cascader-tag-color',
        default: 'rgba(0, 0, 0, 0.88)',
        description: 'Color of tags (multiple mode)'
      }, {
        variable: '--b-cascader-tag-border-radius',
        default: '4px',
        description: 'Border radius of tags'
      }, {
        variable: '--b-cascader-transition-duration',
        default: '200ms',
        description: 'Duration of transitions'
      }, {
        variable: '--b-cascader-menu-border-color',
        default: 'rgba(5, 5, 5, 0.06)',
        description: 'Border between menu columns'
      }, {
        variable: '--b-cascader-checkbox-size',
        default: '16px',
        description: 'Size of checkboxes (multiple mode)'
      }];
      return {
        tokens
      };
    },
    template: \`
      <div style="padding: 24px;">
        <h3 style="margin-bottom: 16px; font-size: 18px; font-weight: 600;">BCascader Design Tokens</h3>
        <p style="margin-bottom: 16px; font-size: 13px; color: #666;">
          Override these CSS variables on any ancestor or directly on the component to customize the look.
        </p>
        <table style="width: 100%; border-collapse: collapse; font-size: 13px;">
          <thead>
            <tr style="border-bottom: 2px solid #f0f0f0;">
              <th style="text-align: left; padding: 8px 12px; font-weight: 600;">Variable</th>
              <th style="text-align: left; padding: 8px 12px; font-weight: 600;">Default</th>
              <th style="text-align: left; padding: 8px 12px; font-weight: 600;">Description</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="token in tokens" :key="token.variable" style="border-bottom: 1px solid #f0f0f0;">
              <td style="padding: 8px 12px; font-family: monospace; color: #0958d9; white-space: nowrap;">
                {{ token.variable }}
              </td>
              <td style="padding: 8px 12px; font-family: monospace; color: #666;">
                {{ token.default }}
              </td>
              <td style="padding: 8px 12px; color: #333;">
                {{ token.description }}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    \`
  })
}`,...j.parameters?.docs?.source}}},M=[`Playground`,`Sizes`,`ExpandOnHover`,`ChangeOnSelect`,`WithSearch`,`MultipleSelection`,`MultipleWithMaxTags`,`DisabledOptions`,`DisabledCascader`,`ValidationStatus`,`CustomFieldNames`,`Accessibility`,`Theming`,`InteractionTest`,`DesignTokens`]}))();export{O as Accessibility,b as ChangeOnSelect,D as CustomFieldNames,j as DesignTokens,T as DisabledCascader,w as DisabledOptions,y as ExpandOnHover,A as InteractionTest,S as MultipleSelection,C as MultipleWithMaxTags,_ as Playground,v as Sizes,k as Theming,E as ValidationStatus,x as WithSearch,M as __namedExportsOrder,m as default};