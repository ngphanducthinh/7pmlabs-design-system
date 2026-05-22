import{n as e}from"./chunk-BneVvdWh.js";import{X as t,i as n}from"./iframe-CUduMsgl.js";import{A as r,u as i}from"./types-CV_3xB-y.js";import{n as a,r as o,t as s}from"./types-DMAbnpXw.js";import{n as c,t as l}from"./BInputNumber-BcoaH1rE.js";var u,d,f,p,m,h,g,_,v,y,b,x,S,C,w,T,E,D;e((()=>{o(),l(),r(),n(),{expect:u,userEvent:d,waitFor:f,within:p}=__STORYBOOK_MODULE_TEST__,m={title:`Data Entry/InputNumber`,component:c,tags:[`autodocs`],argTypes:{modelValue:{control:`number`,description:`Current numeric value (v-model).`,table:{category:`Two-Way Binding Props`}},size:{control:`select`,options:Object.values(i),description:`Size of the input number.`,table:{defaultValue:{summary:i.Medium}}},variant:{control:`select`,options:Object.values(a),description:`Visual variant.`,table:{defaultValue:{summary:a.Outlined}}},status:{control:`select`,options:[void 0,...Object.values(s)],description:`Validation status.`},min:{control:`number`,description:`Minimum value.`,table:{defaultValue:{summary:`Number.MIN_SAFE_INTEGER`}}},max:{control:`number`,description:`Maximum value.`,table:{defaultValue:{summary:`Number.MAX_SAFE_INTEGER`}}},step:{control:`number`,description:`Increment/decrement step.`,table:{defaultValue:{summary:`1`}}},precision:{control:`number`,description:`Decimal precision for display.`},disabled:{control:`boolean`,description:`Whether the input number is disabled.`,table:{defaultValue:{summary:`false`}}},readOnly:{control:`boolean`,description:`Whether the input number is read-only.`,table:{defaultValue:{summary:`false`}}},controls:{control:`boolean`,description:`Whether to show +/- step controls.`,table:{defaultValue:{summary:`true`}}},keyboard:{control:`boolean`,description:`Whether keyboard arrows change value.`,table:{defaultValue:{summary:`true`}}},changeOnBlur:{control:`boolean`,description:`Whether to commit value on blur.`,table:{defaultValue:{summary:`true`}}},changeOnWheel:{control:`boolean`,description:`Whether mouse wheel changes value.`,table:{defaultValue:{summary:`false`}}},placeholder:{control:`text`,description:`Placeholder text.`}},parameters:{docs:{description:{component:`<code>BInputNumber</code> is a numeric input field supporting step controls, min/max constraints, precision, formatting, keyboard navigation, and validation states.`}}}},h={args:{placeholder:`Number`,size:`md`,variant:`outlined`,disabled:!1,controls:!0,step:1,min:0,max:100},render:e=>({components:{BInputNumber:c},setup:()=>({args:e,value:t(null)}),template:`
      <div style="padding: 40px; max-width: 200px;">
        <BInputNumber v-bind="args" v-model="value" />
        <p style="margin-top: 12px; font-size: 12px; color: #666;">Value: {{ value }}</p>
      </div>
    `})},g={render:()=>({components:{BInputNumber:c},setup:()=>({sm:t(1),md:t(2),lg:t(3)}),template:`
      <div style="padding: 40px; display: flex; flex-direction: column; gap: 16px; max-width: 200px;">
        <div>
          <label for="size-sm" style="display: block; margin-bottom: 4px; font-size: 12px; color: #666;">Small</label>
          <BInputNumber v-model="sm" size="sm" id="size-sm" />
        </div>
        <div>
          <label for="size-md" style="display: block; margin-bottom: 4px; font-size: 12px; color: #666;">Medium (default)</label>
          <BInputNumber v-model="md" size="md" id="size-md" />
        </div>
        <div>
          <label for="size-lg" style="display: block; margin-bottom: 4px; font-size: 12px; color: #666;">Large</label>
          <BInputNumber v-model="lg" size="lg" id="size-lg" />
        </div>
      </div>
    `})},_={render:()=>({components:{BInputNumber:c},setup:()=>({outlined:t(10),filled:t(20),borderless:t(30),underlined:t(40)}),template:`
      <div style="padding: 40px; display: flex; flex-direction: column; gap: 16px; max-width: 200px;">
        <div>
          <label for="variant-outlined" style="display: block; margin-bottom: 4px; font-size: 12px; color: #666;">Outlined (default)</label>
          <BInputNumber v-model="outlined" variant="outlined" id="variant-outlined" />
        </div>
        <div>
          <label for="variant-filled" style="display: block; margin-bottom: 4px; font-size: 12px; color: #666;">Filled</label>
          <BInputNumber v-model="filled" variant="filled" id="variant-filled" />
        </div>
        <div>
          <label for="variant-borderless" style="display: block; margin-bottom: 4px; font-size: 12px; color: #666;">Borderless</label>
          <BInputNumber v-model="borderless" variant="borderless" id="variant-borderless" />
        </div>
        <div>
          <label for="variant-underlined" style="display: block; margin-bottom: 4px; font-size: 12px; color: #666;">Underlined</label>
          <BInputNumber v-model="underlined" variant="underlined" id="variant-underlined" />
        </div>
      </div>
    `})},v={render:()=>({components:{BInputNumber:c},setup:()=>({v1:t(5),v2:t(0),v3:t(1)}),template:`
      <div style="padding: 40px; display: flex; flex-direction: column; gap: 16px; max-width: 200px;">
        <div>
          <label for="minmax-1" style="display: block; margin-bottom: 4px; font-size: 12px; color: #666;">Min: 1, Max: 10, Step: 1</label>
          <BInputNumber v-model="v1" :min="1" :max="10" :step="1" id="minmax-1" />
        </div>
        <div>
          <label for="minmax-2" style="display: block; margin-bottom: 4px; font-size: 12px; color: #666;">Min: 0, Max: 1, Step: 0.1</label>
          <BInputNumber v-model="v2" :min="0" :max="1" :step="0.1" :precision="1" id="minmax-2" />
        </div>
        <div>
          <label for="minmax-3" style="display: block; margin-bottom: 4px; font-size: 12px; color: #666;">Step: 5</label>
          <BInputNumber v-model="v3" :step="5" id="minmax-3" />
        </div>
      </div>
    `})},y={render:()=>({components:{BInputNumber:c},setup:()=>({currency:t(1e3),percent:t(50),formatter1:e=>`$ ${e}`.replace(/\B(?=(\d{3})+(?!\d))/g,`,`),parser1:e=>e.replace(/\$\s?|(,*)/g,``),formatter2:e=>`${e}%`,parser2:e=>e.replace(`%`,``)}),template:`
      <div style="padding: 40px; display: flex; flex-direction: column; gap: 16px; max-width: 200px;">
        <div>
          <label for="fmt-currency" style="display: block; margin-bottom: 4px; font-size: 12px; color: #666;">Currency formatter</label>
          <BInputNumber v-model="currency" :formatter="formatter1" :parser="parser1" id="fmt-currency" />
        </div>
        <div>
          <label for="fmt-percent" style="display: block; margin-bottom: 4px; font-size: 12px; color: #666;">Percentage formatter</label>
          <BInputNumber v-model="percent" :min="0" :max="100" :formatter="formatter2" :parser="parser2" id="fmt-percent" />
        </div>
      </div>
    `})},b={render:()=>({components:{BInputNumber:c},setup:()=>({v1:t(100),v2:t(25)}),template:`
      <div style="padding: 40px; display: flex; flex-direction: column; gap: 16px; max-width: 200px;">
        <div>
          <label for="prefix-input" style="display: block; margin-bottom: 4px; font-size: 12px; color: #666;">With prefix</label>
          <BInputNumber v-model="v1" :controls="false" id="prefix-input">
            <template #prefix>$</template>
          </BInputNumber>
        </div>
        <div>
          <label for="suffix-input" style="display: block; margin-bottom: 4px; font-size: 12px; color: #666;">With suffix</label>
          <BInputNumber v-model="v2" :controls="false" :min="0" :max="100" id="suffix-input">
            <template #suffix>%</template>
          </BInputNumber>
        </div>
      </div>
    `})},x={render:()=>({components:{BInputNumber:c},setup:()=>({err:t(null),warn:t(null)}),template:`
      <div style="padding: 40px; display: flex; flex-direction: column; gap: 16px; max-width: 200px;">
        <div>
          <p style="margin-bottom: 4px; font-size: 12px; color: #666;">Error</p>
          <BInputNumber v-model="err" status="error" placeholder="Error state" />
        </div>
        <div>
          <p style="margin-bottom: 4px; font-size: 12px; color: #666;">Warning</p>
          <BInputNumber v-model="warn" status="warning" placeholder="Warning state" />
        </div>
      </div>
    `})},S={render:()=>({components:{BInputNumber:c},template:`
      <div style="padding: 40px; display: flex; flex-direction: column; gap: 16px; max-width: 200px;">
        <div>
          <label for="disabled-input" style="display: block; margin-bottom: 4px; font-size: 12px; color: #666;">Disabled</label>
          <BInputNumber :model-value="42" disabled id="disabled-input" />
        </div>
        <div>
          <label for="readonly-input" style="display: block; margin-bottom: 4px; font-size: 12px; color: #666;">Read-only</label>
          <BInputNumber :model-value="99" read-only id="readonly-input" />
        </div>
      </div>
    `})},C={render:()=>({components:{BInputNumber:c},setup:()=>({value:t(5)}),template:`
      <div style="padding: 40px; max-width: 200px;">
        <label for="a11y-input-number" style="display: block; margin-bottom: 4px; font-size: 14px;">Quantity</label>
        <BInputNumber v-model="value" id="a11y-input-number" :min="0" :max="20" />
      </div>
    `}),play:async({canvasElement:e})=>{let t=p(e).getByRole(`spinbutton`);u(t.id).toBe(`a11y-input-number`),u(t.getAttribute(`role`)).toBe(`spinbutton`),u(t.getAttribute(`aria-valuenow`)).toBe(`5`),u(t.getAttribute(`aria-valuemin`)).toBe(`0`),u(t.getAttribute(`aria-valuemax`)).toBe(`20`),await d.clear(t),await d.type(t,`10`),await d.tab(),await f(()=>{u(t.getAttribute(`aria-valuenow`)).toBe(`10`)}),await d.click(t),await d.keyboard(`{ArrowUp}`),await f(()=>{u(t.getAttribute(`aria-valuenow`)).toBe(`11`)}),await d.keyboard(`{ArrowDown}`),await f(()=>{u(t.getAttribute(`aria-valuenow`)).toBe(`10`)}),u(e.querySelector(`.b-input-number__handler-wrap`)?.getAttribute(`aria-hidden`)).toBe(`true`);let n=e.querySelector(`.b-input-number__handler--up`);u(n?.getAttribute(`aria-label`)).toBe(`Increase value`),u(n?.getAttribute(`tabindex`)).toBe(`-1`)}},w={render:()=>({components:{BInputNumber:c},setup:()=>({v1:t(10),v2:t(20),v3:t(30)}),template:`
      <div style="padding: 40px; display: flex; gap: 40px; flex-wrap: wrap;">
        <div>
          <label for="theme-default" style="display: block; margin-bottom: 8px; font-size: 12px; color: #666;">Default</label>
          <BInputNumber v-model="v1" id="theme-default" />
        </div>

        <div class="custom-input-number-purple">
          <label for="theme-purple" style="display: block; margin-bottom: 8px; font-size: 12px; color: #666;">Purple accent</label>
          <BInputNumber v-model="v2" id="theme-purple" />
        </div>

        <div class="custom-input-number-green">
          <label for="theme-green" style="display: block; margin-bottom: 8px; font-size: 12px; color: #666;">Green accent + wide</label>
          <BInputNumber v-model="v3" id="theme-green" />
        </div>
      </div>

      <style>
        .custom-input-number-purple .b-input-number {
          --b-input-number-active-border-color: #7c3aed;
          --b-input-number-hover-border-color: #a78bfa;
          --b-input-number-active-shadow: 0 0 0 2px rgba(124, 58, 237, 0.12);
          --b-input-number-handle-hover-color: #7c3aed;
        }
        .custom-input-number-green .b-input-number {
          --b-input-number-active-border-color: #16a34a;
          --b-input-number-hover-border-color: #4ade80;
          --b-input-number-active-shadow: 0 0 0 2px rgba(22, 163, 74, 0.12);
          --b-input-number-control-width: 140px;
        }
      </style>
    `})},T={args:{placeholder:`Number`,min:0,max:10,step:1},render:e=>({components:{BInputNumber:c},setup:()=>({args:e,value:t(null)}),template:`
      <div style="padding: 40px; max-width: 200px;">
        <label for="interaction-num" style="display: block; margin-bottom: 4px; font-size: 14px;">Test</label>
        <BInputNumber v-bind="args" v-model="value" id="interaction-num" />
        <p data-testid="current-value" style="margin-top: 12px; font-size: 12px; color: #666;">Value: {{ value }}</p>
      </div>
    `}),play:async({canvasElement:e})=>{let t=p(e),n=t.getByRole(`spinbutton`);await d.click(n),await d.type(n,`5`),await d.tab(),await f(()=>{u(t.getByTestId(`current-value`).textContent).toContain(`5`)}),await d.click(n),await d.keyboard(`{ArrowUp}`),await f(()=>{u(t.getByTestId(`current-value`).textContent).toContain(`6`)}),await d.keyboard(`{ArrowDown}`),await d.keyboard(`{ArrowDown}`),await f(()=>{u(t.getByTestId(`current-value`).textContent).toContain(`4`)});let r=e.querySelector(`.b-input-number__handler--up`);await d.click(r),await f(()=>{u(t.getByTestId(`current-value`).textContent).toContain(`5`)}),await d.clear(n),await d.type(n,`15`),await d.tab(),await f(()=>{u(t.getByTestId(`current-value`).textContent).toContain(`10`)})}},E={render:()=>({template:`
      <div style="padding: 40px; font-family: monospace; font-size: 13px; max-width: 900px;">
        <h3 style="margin-bottom: 16px; font-size: 16px; font-family: sans-serif;">BInputNumber Design Tokens</h3>
        <p style="margin-bottom: 16px; font-size: 13px; font-family: sans-serif; color: #666;">
          Override these CSS variables on <code>.b-input-number</code> or an ancestor to customize the component appearance.
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
            <tr style="border-bottom: 1px solid #f3f4f6;"><td style="padding: 8px 12px;">--b-input-number-active-bg</td><td style="padding: 8px 12px;">#ffffff</td><td style="padding: 8px 12px;">Background when focused</td></tr>
            <tr style="border-bottom: 1px solid #f3f4f6;"><td style="padding: 8px 12px;">--b-input-number-active-border-color</td><td style="padding: 8px 12px;">#1677ff</td><td style="padding: 8px 12px;">Border color when focused</td></tr>
            <tr style="border-bottom: 1px solid #f3f4f6;"><td style="padding: 8px 12px;">--b-input-number-active-shadow</td><td style="padding: 8px 12px;">0 0 0 2px rgba(5,145,255,0.1)</td><td style="padding: 8px 12px;">Box-shadow when focused</td></tr>
            <tr style="border-bottom: 1px solid #f3f4f6;"><td style="padding: 8px 12px;">--b-input-number-addon-bg</td><td style="padding: 8px 12px;">rgba(0,0,0,0.02)</td><td style="padding: 8px 12px;">Background of addon elements</td></tr>
            <tr style="border-bottom: 1px solid #f3f4f6;"><td style="padding: 8px 12px;">--b-input-number-control-width</td><td style="padding: 8px 12px;">90px</td><td style="padding: 8px 12px;">Default width of the component</td></tr>
            <tr style="border-bottom: 1px solid #f3f4f6;"><td style="padding: 8px 12px;">--b-input-number-error-active-shadow</td><td style="padding: 8px 12px;">0 0 0 2px rgba(255,38,5,0.06)</td><td style="padding: 8px 12px;">Shadow during error state focus</td></tr>
            <tr style="border-bottom: 1px solid #f3f4f6;"><td style="padding: 8px 12px;">--b-input-number-filled-handle-bg</td><td style="padding: 8px 12px;">#f0f0f0</td><td style="padding: 8px 12px;">Handle background in filled variant</td></tr>
            <tr style="border-bottom: 1px solid #f3f4f6;"><td style="padding: 8px 12px;">--b-input-number-handle-active-bg</td><td style="padding: 8px 12px;">rgba(0,0,0,0.02)</td><td style="padding: 8px 12px;">Handle background on click</td></tr>
            <tr style="border-bottom: 1px solid #f3f4f6;"><td style="padding: 8px 12px;">--b-input-number-handle-bg</td><td style="padding: 8px 12px;">#ffffff</td><td style="padding: 8px 12px;">Handle default background</td></tr>
            <tr style="border-bottom: 1px solid #f3f4f6;"><td style="padding: 8px 12px;">--b-input-number-handle-border-color</td><td style="padding: 8px 12px;">#d9d9d9</td><td style="padding: 8px 12px;">Handle border color</td></tr>
            <tr style="border-bottom: 1px solid #f3f4f6;"><td style="padding: 8px 12px;">--b-input-number-handle-font-size</td><td style="padding: 8px 12px;">7px</td><td style="padding: 8px 12px;">Handle icon size</td></tr>
            <tr style="border-bottom: 1px solid #f3f4f6;"><td style="padding: 8px 12px;">--b-input-number-handle-hover-color</td><td style="padding: 8px 12px;">#1677ff</td><td style="padding: 8px 12px;">Handle icon color on hover</td></tr>
            <tr style="border-bottom: 1px solid #f3f4f6;"><td style="padding: 8px 12px;">--b-input-number-handle-width</td><td style="padding: 8px 12px;">22px</td><td style="padding: 8px 12px;">Width of step handler column</td></tr>
            <tr style="border-bottom: 1px solid #f3f4f6;"><td style="padding: 8px 12px;">--b-input-number-hover-bg</td><td style="padding: 8px 12px;">#ffffff</td><td style="padding: 8px 12px;">Background on hover</td></tr>
            <tr style="border-bottom: 1px solid #f3f4f6;"><td style="padding: 8px 12px;">--b-input-number-hover-border-color</td><td style="padding: 8px 12px;">#4096ff</td><td style="padding: 8px 12px;">Border color on hover</td></tr>
            <tr style="border-bottom: 1px solid #f3f4f6;"><td style="padding: 8px 12px;">--b-input-number-font-size</td><td style="padding: 8px 12px;">14px</td><td style="padding: 8px 12px;">Standard font size</td></tr>
            <tr style="border-bottom: 1px solid #f3f4f6;"><td style="padding: 8px 12px;">--b-input-number-font-size-lg</td><td style="padding: 8px 12px;">16px</td><td style="padding: 8px 12px;">Large variant font size</td></tr>
            <tr style="border-bottom: 1px solid #f3f4f6;"><td style="padding: 8px 12px;">--b-input-number-font-size-sm</td><td style="padding: 8px 12px;">14px</td><td style="padding: 8px 12px;">Small variant font size</td></tr>
            <tr style="border-bottom: 1px solid #f3f4f6;"><td style="padding: 8px 12px;">--b-input-number-padding-block</td><td style="padding: 8px 12px;">4px</td><td style="padding: 8px 12px;">Vertical padding (medium)</td></tr>
            <tr style="border-bottom: 1px solid #f3f4f6;"><td style="padding: 8px 12px;">--b-input-number-padding-block-lg</td><td style="padding: 8px 12px;">7px</td><td style="padding: 8px 12px;">Vertical padding (large)</td></tr>
            <tr style="border-bottom: 1px solid #f3f4f6;"><td style="padding: 8px 12px;">--b-input-number-padding-block-sm</td><td style="padding: 8px 12px;">0px</td><td style="padding: 8px 12px;">Vertical padding (small)</td></tr>
            <tr style="border-bottom: 1px solid #f3f4f6;"><td style="padding: 8px 12px;">--b-input-number-padding-inline</td><td style="padding: 8px 12px;">11px</td><td style="padding: 8px 12px;">Horizontal padding (medium)</td></tr>
            <tr style="border-bottom: 1px solid #f3f4f6;"><td style="padding: 8px 12px;">--b-input-number-padding-inline-lg</td><td style="padding: 8px 12px;">11px</td><td style="padding: 8px 12px;">Horizontal padding (large)</td></tr>
            <tr style="border-bottom: 1px solid #f3f4f6;"><td style="padding: 8px 12px;">--b-input-number-padding-inline-sm</td><td style="padding: 8px 12px;">7px</td><td style="padding: 8px 12px;">Horizontal padding (small)</td></tr>
            <tr style="border-bottom: 1px solid #f3f4f6;"><td style="padding: 8px 12px;">--b-input-number-warning-active-shadow</td><td style="padding: 8px 12px;">0 0 0 2px rgba(255,215,5,0.1)</td><td style="padding: 8px 12px;">Shadow during warning state focus</td></tr>
            <tr style="border-bottom: 1px solid #f3f4f6;"><td style="padding: 8px 12px;">--b-input-number-border-color</td><td style="padding: 8px 12px;">#d9d9d9</td><td style="padding: 8px 12px;">Default border color</td></tr>
            <tr style="border-bottom: 1px solid #f3f4f6;"><td style="padding: 8px 12px;">--b-input-number-bg</td><td style="padding: 8px 12px;">#ffffff</td><td style="padding: 8px 12px;">Default background</td></tr>
            <tr style="border-bottom: 1px solid #f3f4f6;"><td style="padding: 8px 12px;">--b-input-number-color</td><td style="padding: 8px 12px;">rgba(0,0,0,0.88)</td><td style="padding: 8px 12px;">Text color</td></tr>
            <tr style="border-bottom: 1px solid #f3f4f6;"><td style="padding: 8px 12px;">--b-input-number-placeholder-color</td><td style="padding: 8px 12px;">rgba(0,0,0,0.25)</td><td style="padding: 8px 12px;">Placeholder color</td></tr>
            <tr style="border-bottom: 1px solid #f3f4f6;"><td style="padding: 8px 12px;">--b-input-number-border-radius</td><td style="padding: 8px 12px;">6px</td><td style="padding: 8px 12px;">Border radius</td></tr>
            <tr style="border-bottom: 1px solid #f3f4f6;"><td style="padding: 8px 12px;">--b-input-number-disabled-bg</td><td style="padding: 8px 12px;">rgba(0,0,0,0.04)</td><td style="padding: 8px 12px;">Background when disabled</td></tr>
            <tr style="border-bottom: 1px solid #f3f4f6;"><td style="padding: 8px 12px;">--b-input-number-disabled-color</td><td style="padding: 8px 12px;">rgba(0,0,0,0.25)</td><td style="padding: 8px 12px;">Text color when disabled</td></tr>
            <tr style="border-bottom: 1px solid #f3f4f6;"><td style="padding: 8px 12px;">--b-input-number-error-border-color</td><td style="padding: 8px 12px;">#ff4d4f</td><td style="padding: 8px 12px;">Border for error status</td></tr>
            <tr style="border-bottom: 1px solid #f3f4f6;"><td style="padding: 8px 12px;">--b-input-number-error-hover-border-color</td><td style="padding: 8px 12px;">#ff7875</td><td style="padding: 8px 12px;">Hover border for error</td></tr>
            <tr style="border-bottom: 1px solid #f3f4f6;"><td style="padding: 8px 12px;">--b-input-number-warning-border-color</td><td style="padding: 8px 12px;">#faad14</td><td style="padding: 8px 12px;">Border for warning status</td></tr>
            <tr style="border-bottom: 1px solid #f3f4f6;"><td style="padding: 8px 12px;">--b-input-number-warning-hover-border-color</td><td style="padding: 8px 12px;">#ffc53d</td><td style="padding: 8px 12px;">Hover border for warning</td></tr>
            <tr style="border-bottom: 1px solid #f3f4f6;"><td style="padding: 8px 12px;">--b-input-number-filled-bg</td><td style="padding: 8px 12px;">rgba(0,0,0,0.04)</td><td style="padding: 8px 12px;">Background for filled variant</td></tr>
            <tr><td style="padding: 8px 12px;">--b-input-number-filled-hover-bg</td><td style="padding: 8px 12px;">rgba(0,0,0,0.04)</td><td style="padding: 8px 12px;">Hover background for filled variant</td></tr>
          </tbody>
        </table>
      </div>
    `})},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    placeholder: 'Number',
    size: 'md',
    variant: 'outlined',
    disabled: false,
    controls: true,
    step: 1,
    min: 0,
    max: 100
  },
  render: args => ({
    components: {
      BInputNumber
    },
    setup: () => {
      const value = ref<number | null>(null);
      return {
        args,
        value
      };
    },
    template: \`
      <div style="padding: 40px; max-width: 200px;">
        <BInputNumber v-bind="args" v-model="value" />
        <p style="margin-top: 12px; font-size: 12px; color: #666;">Value: {{ value }}</p>
      </div>
    \`
  })
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      BInputNumber
    },
    setup: () => {
      const sm = ref<number | null>(1);
      const md = ref<number | null>(2);
      const lg = ref<number | null>(3);
      return {
        sm,
        md,
        lg
      };
    },
    template: \`
      <div style="padding: 40px; display: flex; flex-direction: column; gap: 16px; max-width: 200px;">
        <div>
          <label for="size-sm" style="display: block; margin-bottom: 4px; font-size: 12px; color: #666;">Small</label>
          <BInputNumber v-model="sm" size="sm" id="size-sm" />
        </div>
        <div>
          <label for="size-md" style="display: block; margin-bottom: 4px; font-size: 12px; color: #666;">Medium (default)</label>
          <BInputNumber v-model="md" size="md" id="size-md" />
        </div>
        <div>
          <label for="size-lg" style="display: block; margin-bottom: 4px; font-size: 12px; color: #666;">Large</label>
          <BInputNumber v-model="lg" size="lg" id="size-lg" />
        </div>
      </div>
    \`
  })
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      BInputNumber
    },
    setup: () => {
      const outlined = ref<number | null>(10);
      const filled = ref<number | null>(20);
      const borderless = ref<number | null>(30);
      const underlined = ref<number | null>(40);
      return {
        outlined,
        filled,
        borderless,
        underlined
      };
    },
    template: \`
      <div style="padding: 40px; display: flex; flex-direction: column; gap: 16px; max-width: 200px;">
        <div>
          <label for="variant-outlined" style="display: block; margin-bottom: 4px; font-size: 12px; color: #666;">Outlined (default)</label>
          <BInputNumber v-model="outlined" variant="outlined" id="variant-outlined" />
        </div>
        <div>
          <label for="variant-filled" style="display: block; margin-bottom: 4px; font-size: 12px; color: #666;">Filled</label>
          <BInputNumber v-model="filled" variant="filled" id="variant-filled" />
        </div>
        <div>
          <label for="variant-borderless" style="display: block; margin-bottom: 4px; font-size: 12px; color: #666;">Borderless</label>
          <BInputNumber v-model="borderless" variant="borderless" id="variant-borderless" />
        </div>
        <div>
          <label for="variant-underlined" style="display: block; margin-bottom: 4px; font-size: 12px; color: #666;">Underlined</label>
          <BInputNumber v-model="underlined" variant="underlined" id="variant-underlined" />
        </div>
      </div>
    \`
  })
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      BInputNumber
    },
    setup: () => {
      const v1 = ref<number | null>(5);
      const v2 = ref<number | null>(0);
      const v3 = ref<number | null>(1.0);
      return {
        v1,
        v2,
        v3
      };
    },
    template: \`
      <div style="padding: 40px; display: flex; flex-direction: column; gap: 16px; max-width: 200px;">
        <div>
          <label for="minmax-1" style="display: block; margin-bottom: 4px; font-size: 12px; color: #666;">Min: 1, Max: 10, Step: 1</label>
          <BInputNumber v-model="v1" :min="1" :max="10" :step="1" id="minmax-1" />
        </div>
        <div>
          <label for="minmax-2" style="display: block; margin-bottom: 4px; font-size: 12px; color: #666;">Min: 0, Max: 1, Step: 0.1</label>
          <BInputNumber v-model="v2" :min="0" :max="1" :step="0.1" :precision="1" id="minmax-2" />
        </div>
        <div>
          <label for="minmax-3" style="display: block; margin-bottom: 4px; font-size: 12px; color: #666;">Step: 5</label>
          <BInputNumber v-model="v3" :step="5" id="minmax-3" />
        </div>
      </div>
    \`
  })
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      BInputNumber
    },
    setup: () => {
      const currency = ref<number | null>(1000);
      const percent = ref<number | null>(50);
      const formatter1 = (val: string | number) => \`$ \${val}\`.replace(/\\B(?=(\\d{3})+(?!\\d))/g, ',');
      const parser1 = (val: string) => val.replace(/\\$\\s?|(,*)/g, '');
      const formatter2 = (val: string | number) => \`\${val}%\`;
      const parser2 = (val: string) => val.replace('%', '');
      return {
        currency,
        percent,
        formatter1,
        parser1,
        formatter2,
        parser2
      };
    },
    template: \`
      <div style="padding: 40px; display: flex; flex-direction: column; gap: 16px; max-width: 200px;">
        <div>
          <label for="fmt-currency" style="display: block; margin-bottom: 4px; font-size: 12px; color: #666;">Currency formatter</label>
          <BInputNumber v-model="currency" :formatter="formatter1" :parser="parser1" id="fmt-currency" />
        </div>
        <div>
          <label for="fmt-percent" style="display: block; margin-bottom: 4px; font-size: 12px; color: #666;">Percentage formatter</label>
          <BInputNumber v-model="percent" :min="0" :max="100" :formatter="formatter2" :parser="parser2" id="fmt-percent" />
        </div>
      </div>
    \`
  })
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      BInputNumber
    },
    setup: () => {
      const v1 = ref<number | null>(100);
      const v2 = ref<number | null>(25);
      return {
        v1,
        v2
      };
    },
    template: \`
      <div style="padding: 40px; display: flex; flex-direction: column; gap: 16px; max-width: 200px;">
        <div>
          <label for="prefix-input" style="display: block; margin-bottom: 4px; font-size: 12px; color: #666;">With prefix</label>
          <BInputNumber v-model="v1" :controls="false" id="prefix-input">
            <template #prefix>$</template>
          </BInputNumber>
        </div>
        <div>
          <label for="suffix-input" style="display: block; margin-bottom: 4px; font-size: 12px; color: #666;">With suffix</label>
          <BInputNumber v-model="v2" :controls="false" :min="0" :max="100" id="suffix-input">
            <template #suffix>%</template>
          </BInputNumber>
        </div>
      </div>
    \`
  })
}`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      BInputNumber
    },
    setup: () => {
      const err = ref<number | null>(null);
      const warn = ref<number | null>(null);
      return {
        err,
        warn
      };
    },
    template: \`
      <div style="padding: 40px; display: flex; flex-direction: column; gap: 16px; max-width: 200px;">
        <div>
          <p style="margin-bottom: 4px; font-size: 12px; color: #666;">Error</p>
          <BInputNumber v-model="err" status="error" placeholder="Error state" />
        </div>
        <div>
          <p style="margin-bottom: 4px; font-size: 12px; color: #666;">Warning</p>
          <BInputNumber v-model="warn" status="warning" placeholder="Warning state" />
        </div>
      </div>
    \`
  })
}`,...x.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      BInputNumber
    },
    template: \`
      <div style="padding: 40px; display: flex; flex-direction: column; gap: 16px; max-width: 200px;">
        <div>
          <label for="disabled-input" style="display: block; margin-bottom: 4px; font-size: 12px; color: #666;">Disabled</label>
          <BInputNumber :model-value="42" disabled id="disabled-input" />
        </div>
        <div>
          <label for="readonly-input" style="display: block; margin-bottom: 4px; font-size: 12px; color: #666;">Read-only</label>
          <BInputNumber :model-value="99" read-only id="readonly-input" />
        </div>
      </div>
    \`
  })
}`,...S.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      BInputNumber
    },
    setup: () => {
      const value = ref<number | null>(5);
      return {
        value
      };
    },
    template: \`
      <div style="padding: 40px; max-width: 200px;">
        <label for="a11y-input-number" style="display: block; margin-bottom: 4px; font-size: 14px;">Quantity</label>
        <BInputNumber v-model="value" id="a11y-input-number" :min="0" :max="20" />
      </div>
    \`
  }),
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const input = canvas.getByRole('spinbutton') as HTMLInputElement;
    expect(input.id).toBe('a11y-input-number');
    expect(input.getAttribute('role')).toBe('spinbutton');
    expect(input.getAttribute('aria-valuenow')).toBe('5');
    expect(input.getAttribute('aria-valuemin')).toBe('0');
    expect(input.getAttribute('aria-valuemax')).toBe('20');
    await userEvent.clear(input);
    await userEvent.type(input, '10');
    await userEvent.tab();
    await waitFor(() => {
      expect(input.getAttribute('aria-valuenow')).toBe('10');
    });
    await userEvent.click(input);
    await userEvent.keyboard('{ArrowUp}');
    await waitFor(() => {
      expect(input.getAttribute('aria-valuenow')).toBe('11');
    });
    await userEvent.keyboard('{ArrowDown}');
    await waitFor(() => {
      expect(input.getAttribute('aria-valuenow')).toBe('10');
    });
    const handlerWrap = canvasElement.querySelector('.b-input-number__handler-wrap');
    expect(handlerWrap?.getAttribute('aria-hidden')).toBe('true');
    const upHandler = canvasElement.querySelector('.b-input-number__handler--up');
    expect(upHandler?.getAttribute('aria-label')).toBe('Increase value');
    expect(upHandler?.getAttribute('tabindex')).toBe('-1');
  }
}`,...C.parameters?.docs?.source}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      BInputNumber
    },
    setup: () => {
      const v1 = ref<number | null>(10);
      const v2 = ref<number | null>(20);
      const v3 = ref<number | null>(30);
      return {
        v1,
        v2,
        v3
      };
    },
    template: \`
      <div style="padding: 40px; display: flex; gap: 40px; flex-wrap: wrap;">
        <div>
          <label for="theme-default" style="display: block; margin-bottom: 8px; font-size: 12px; color: #666;">Default</label>
          <BInputNumber v-model="v1" id="theme-default" />
        </div>

        <div class="custom-input-number-purple">
          <label for="theme-purple" style="display: block; margin-bottom: 8px; font-size: 12px; color: #666;">Purple accent</label>
          <BInputNumber v-model="v2" id="theme-purple" />
        </div>

        <div class="custom-input-number-green">
          <label for="theme-green" style="display: block; margin-bottom: 8px; font-size: 12px; color: #666;">Green accent + wide</label>
          <BInputNumber v-model="v3" id="theme-green" />
        </div>
      </div>

      <style>
        .custom-input-number-purple .b-input-number {
          --b-input-number-active-border-color: #7c3aed;
          --b-input-number-hover-border-color: #a78bfa;
          --b-input-number-active-shadow: 0 0 0 2px rgba(124, 58, 237, 0.12);
          --b-input-number-handle-hover-color: #7c3aed;
        }
        .custom-input-number-green .b-input-number {
          --b-input-number-active-border-color: #16a34a;
          --b-input-number-hover-border-color: #4ade80;
          --b-input-number-active-shadow: 0 0 0 2px rgba(22, 163, 74, 0.12);
          --b-input-number-control-width: 140px;
        }
      </style>
    \`
  })
}`,...w.parameters?.docs?.source}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  args: {
    placeholder: 'Number',
    min: 0,
    max: 10,
    step: 1
  },
  render: args => ({
    components: {
      BInputNumber
    },
    setup: () => {
      const value = ref<number | null>(null);
      return {
        args,
        value
      };
    },
    template: \`
      <div style="padding: 40px; max-width: 200px;">
        <label for="interaction-num" style="display: block; margin-bottom: 4px; font-size: 14px;">Test</label>
        <BInputNumber v-bind="args" v-model="value" id="interaction-num" />
        <p data-testid="current-value" style="margin-top: 12px; font-size: 12px; color: #666;">Value: {{ value }}</p>
      </div>
    \`
  }),
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const input = canvas.getByRole('spinbutton') as HTMLInputElement;
    await userEvent.click(input);
    await userEvent.type(input, '5');
    await userEvent.tab();
    await waitFor(() => {
      expect(canvas.getByTestId('current-value').textContent).toContain('5');
    });
    await userEvent.click(input);
    await userEvent.keyboard('{ArrowUp}');
    await waitFor(() => {
      expect(canvas.getByTestId('current-value').textContent).toContain('6');
    });
    await userEvent.keyboard('{ArrowDown}');
    await userEvent.keyboard('{ArrowDown}');
    await waitFor(() => {
      expect(canvas.getByTestId('current-value').textContent).toContain('4');
    });
    const upBtn = canvasElement.querySelector('.b-input-number__handler--up')!;
    await userEvent.click(upBtn);
    await waitFor(() => {
      expect(canvas.getByTestId('current-value').textContent).toContain('5');
    });
    await userEvent.clear(input);
    await userEvent.type(input, '15');
    await userEvent.tab();
    await waitFor(() => {
      expect(canvas.getByTestId('current-value').textContent).toContain('10');
    });
  }
}`,...T.parameters?.docs?.source}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  render: () => ({
    template: \`
      <div style="padding: 40px; font-family: monospace; font-size: 13px; max-width: 900px;">
        <h3 style="margin-bottom: 16px; font-size: 16px; font-family: sans-serif;">BInputNumber Design Tokens</h3>
        <p style="margin-bottom: 16px; font-size: 13px; font-family: sans-serif; color: #666;">
          Override these CSS variables on <code>.b-input-number</code> or an ancestor to customize the component appearance.
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
            <tr style="border-bottom: 1px solid #f3f4f6;"><td style="padding: 8px 12px;">--b-input-number-active-bg</td><td style="padding: 8px 12px;">#ffffff</td><td style="padding: 8px 12px;">Background when focused</td></tr>
            <tr style="border-bottom: 1px solid #f3f4f6;"><td style="padding: 8px 12px;">--b-input-number-active-border-color</td><td style="padding: 8px 12px;">#1677ff</td><td style="padding: 8px 12px;">Border color when focused</td></tr>
            <tr style="border-bottom: 1px solid #f3f4f6;"><td style="padding: 8px 12px;">--b-input-number-active-shadow</td><td style="padding: 8px 12px;">0 0 0 2px rgba(5,145,255,0.1)</td><td style="padding: 8px 12px;">Box-shadow when focused</td></tr>
            <tr style="border-bottom: 1px solid #f3f4f6;"><td style="padding: 8px 12px;">--b-input-number-addon-bg</td><td style="padding: 8px 12px;">rgba(0,0,0,0.02)</td><td style="padding: 8px 12px;">Background of addon elements</td></tr>
            <tr style="border-bottom: 1px solid #f3f4f6;"><td style="padding: 8px 12px;">--b-input-number-control-width</td><td style="padding: 8px 12px;">90px</td><td style="padding: 8px 12px;">Default width of the component</td></tr>
            <tr style="border-bottom: 1px solid #f3f4f6;"><td style="padding: 8px 12px;">--b-input-number-error-active-shadow</td><td style="padding: 8px 12px;">0 0 0 2px rgba(255,38,5,0.06)</td><td style="padding: 8px 12px;">Shadow during error state focus</td></tr>
            <tr style="border-bottom: 1px solid #f3f4f6;"><td style="padding: 8px 12px;">--b-input-number-filled-handle-bg</td><td style="padding: 8px 12px;">#f0f0f0</td><td style="padding: 8px 12px;">Handle background in filled variant</td></tr>
            <tr style="border-bottom: 1px solid #f3f4f6;"><td style="padding: 8px 12px;">--b-input-number-handle-active-bg</td><td style="padding: 8px 12px;">rgba(0,0,0,0.02)</td><td style="padding: 8px 12px;">Handle background on click</td></tr>
            <tr style="border-bottom: 1px solid #f3f4f6;"><td style="padding: 8px 12px;">--b-input-number-handle-bg</td><td style="padding: 8px 12px;">#ffffff</td><td style="padding: 8px 12px;">Handle default background</td></tr>
            <tr style="border-bottom: 1px solid #f3f4f6;"><td style="padding: 8px 12px;">--b-input-number-handle-border-color</td><td style="padding: 8px 12px;">#d9d9d9</td><td style="padding: 8px 12px;">Handle border color</td></tr>
            <tr style="border-bottom: 1px solid #f3f4f6;"><td style="padding: 8px 12px;">--b-input-number-handle-font-size</td><td style="padding: 8px 12px;">7px</td><td style="padding: 8px 12px;">Handle icon size</td></tr>
            <tr style="border-bottom: 1px solid #f3f4f6;"><td style="padding: 8px 12px;">--b-input-number-handle-hover-color</td><td style="padding: 8px 12px;">#1677ff</td><td style="padding: 8px 12px;">Handle icon color on hover</td></tr>
            <tr style="border-bottom: 1px solid #f3f4f6;"><td style="padding: 8px 12px;">--b-input-number-handle-width</td><td style="padding: 8px 12px;">22px</td><td style="padding: 8px 12px;">Width of step handler column</td></tr>
            <tr style="border-bottom: 1px solid #f3f4f6;"><td style="padding: 8px 12px;">--b-input-number-hover-bg</td><td style="padding: 8px 12px;">#ffffff</td><td style="padding: 8px 12px;">Background on hover</td></tr>
            <tr style="border-bottom: 1px solid #f3f4f6;"><td style="padding: 8px 12px;">--b-input-number-hover-border-color</td><td style="padding: 8px 12px;">#4096ff</td><td style="padding: 8px 12px;">Border color on hover</td></tr>
            <tr style="border-bottom: 1px solid #f3f4f6;"><td style="padding: 8px 12px;">--b-input-number-font-size</td><td style="padding: 8px 12px;">14px</td><td style="padding: 8px 12px;">Standard font size</td></tr>
            <tr style="border-bottom: 1px solid #f3f4f6;"><td style="padding: 8px 12px;">--b-input-number-font-size-lg</td><td style="padding: 8px 12px;">16px</td><td style="padding: 8px 12px;">Large variant font size</td></tr>
            <tr style="border-bottom: 1px solid #f3f4f6;"><td style="padding: 8px 12px;">--b-input-number-font-size-sm</td><td style="padding: 8px 12px;">14px</td><td style="padding: 8px 12px;">Small variant font size</td></tr>
            <tr style="border-bottom: 1px solid #f3f4f6;"><td style="padding: 8px 12px;">--b-input-number-padding-block</td><td style="padding: 8px 12px;">4px</td><td style="padding: 8px 12px;">Vertical padding (medium)</td></tr>
            <tr style="border-bottom: 1px solid #f3f4f6;"><td style="padding: 8px 12px;">--b-input-number-padding-block-lg</td><td style="padding: 8px 12px;">7px</td><td style="padding: 8px 12px;">Vertical padding (large)</td></tr>
            <tr style="border-bottom: 1px solid #f3f4f6;"><td style="padding: 8px 12px;">--b-input-number-padding-block-sm</td><td style="padding: 8px 12px;">0px</td><td style="padding: 8px 12px;">Vertical padding (small)</td></tr>
            <tr style="border-bottom: 1px solid #f3f4f6;"><td style="padding: 8px 12px;">--b-input-number-padding-inline</td><td style="padding: 8px 12px;">11px</td><td style="padding: 8px 12px;">Horizontal padding (medium)</td></tr>
            <tr style="border-bottom: 1px solid #f3f4f6;"><td style="padding: 8px 12px;">--b-input-number-padding-inline-lg</td><td style="padding: 8px 12px;">11px</td><td style="padding: 8px 12px;">Horizontal padding (large)</td></tr>
            <tr style="border-bottom: 1px solid #f3f4f6;"><td style="padding: 8px 12px;">--b-input-number-padding-inline-sm</td><td style="padding: 8px 12px;">7px</td><td style="padding: 8px 12px;">Horizontal padding (small)</td></tr>
            <tr style="border-bottom: 1px solid #f3f4f6;"><td style="padding: 8px 12px;">--b-input-number-warning-active-shadow</td><td style="padding: 8px 12px;">0 0 0 2px rgba(255,215,5,0.1)</td><td style="padding: 8px 12px;">Shadow during warning state focus</td></tr>
            <tr style="border-bottom: 1px solid #f3f4f6;"><td style="padding: 8px 12px;">--b-input-number-border-color</td><td style="padding: 8px 12px;">#d9d9d9</td><td style="padding: 8px 12px;">Default border color</td></tr>
            <tr style="border-bottom: 1px solid #f3f4f6;"><td style="padding: 8px 12px;">--b-input-number-bg</td><td style="padding: 8px 12px;">#ffffff</td><td style="padding: 8px 12px;">Default background</td></tr>
            <tr style="border-bottom: 1px solid #f3f4f6;"><td style="padding: 8px 12px;">--b-input-number-color</td><td style="padding: 8px 12px;">rgba(0,0,0,0.88)</td><td style="padding: 8px 12px;">Text color</td></tr>
            <tr style="border-bottom: 1px solid #f3f4f6;"><td style="padding: 8px 12px;">--b-input-number-placeholder-color</td><td style="padding: 8px 12px;">rgba(0,0,0,0.25)</td><td style="padding: 8px 12px;">Placeholder color</td></tr>
            <tr style="border-bottom: 1px solid #f3f4f6;"><td style="padding: 8px 12px;">--b-input-number-border-radius</td><td style="padding: 8px 12px;">6px</td><td style="padding: 8px 12px;">Border radius</td></tr>
            <tr style="border-bottom: 1px solid #f3f4f6;"><td style="padding: 8px 12px;">--b-input-number-disabled-bg</td><td style="padding: 8px 12px;">rgba(0,0,0,0.04)</td><td style="padding: 8px 12px;">Background when disabled</td></tr>
            <tr style="border-bottom: 1px solid #f3f4f6;"><td style="padding: 8px 12px;">--b-input-number-disabled-color</td><td style="padding: 8px 12px;">rgba(0,0,0,0.25)</td><td style="padding: 8px 12px;">Text color when disabled</td></tr>
            <tr style="border-bottom: 1px solid #f3f4f6;"><td style="padding: 8px 12px;">--b-input-number-error-border-color</td><td style="padding: 8px 12px;">#ff4d4f</td><td style="padding: 8px 12px;">Border for error status</td></tr>
            <tr style="border-bottom: 1px solid #f3f4f6;"><td style="padding: 8px 12px;">--b-input-number-error-hover-border-color</td><td style="padding: 8px 12px;">#ff7875</td><td style="padding: 8px 12px;">Hover border for error</td></tr>
            <tr style="border-bottom: 1px solid #f3f4f6;"><td style="padding: 8px 12px;">--b-input-number-warning-border-color</td><td style="padding: 8px 12px;">#faad14</td><td style="padding: 8px 12px;">Border for warning status</td></tr>
            <tr style="border-bottom: 1px solid #f3f4f6;"><td style="padding: 8px 12px;">--b-input-number-warning-hover-border-color</td><td style="padding: 8px 12px;">#ffc53d</td><td style="padding: 8px 12px;">Hover border for warning</td></tr>
            <tr style="border-bottom: 1px solid #f3f4f6;"><td style="padding: 8px 12px;">--b-input-number-filled-bg</td><td style="padding: 8px 12px;">rgba(0,0,0,0.04)</td><td style="padding: 8px 12px;">Background for filled variant</td></tr>
            <tr><td style="padding: 8px 12px;">--b-input-number-filled-hover-bg</td><td style="padding: 8px 12px;">rgba(0,0,0,0.04)</td><td style="padding: 8px 12px;">Hover background for filled variant</td></tr>
          </tbody>
        </table>
      </div>
    \`
  })
}`,...E.parameters?.docs?.source}}},D=[`Playground`,`Sizes`,`Variants`,`MinMaxStep`,`FormatterParser`,`PrefixSuffix`,`Status`,`DisabledReadOnly`,`Accessibility`,`Theming`,`InteractionTest`,`DesignTokens`]}))();export{C as Accessibility,E as DesignTokens,S as DisabledReadOnly,y as FormatterParser,T as InteractionTest,v as MinMaxStep,h as Playground,b as PrefixSuffix,g as Sizes,x as Status,w as Theming,_ as Variants,D as __namedExportsOrder,m as default};