import{n as e}from"./chunk-BneVvdWh.js";import{X as t,i as n}from"./iframe-inu_PjYR.js";import{n as r,t as i}from"./BRate-BpTcPeAM.js";var a,o,s,c,l,u,d,f,p,m,h,g,_,v,y;e((()=>{i(),n(),{expect:a,userEvent:o,waitFor:s,within:c}=__STORYBOOK_MODULE_TEST__,l={title:`Data Entry/Rate`,component:r,tags:[`autodocs`],argTypes:{modelValue:{control:{type:`number`,min:0,max:5,step:.5},description:`The current rating value.`,table:{category:`Two-Way Binding Props`}},count:{control:{type:`number`,min:1,max:10},description:`Total number of stars.`,table:{defaultValue:{summary:`5`}}},allowHalf:{control:`boolean`,description:`Whether to allow half-star selection.`,table:{defaultValue:{summary:`false`}}},allowClear:{control:`boolean`,description:`Whether to allow clearing the value by clicking the same star again.`,table:{defaultValue:{summary:`true`}}},disabled:{control:`boolean`,description:`If true, the component is read-only.`,table:{defaultValue:{summary:`false`}}},keyboard:{control:`boolean`,description:`Whether keyboard navigation is enabled.`,table:{defaultValue:{summary:`true`}}},size:{control:`select`,options:[`small`,`default`,`large`],description:`Size of the stars.`,table:{defaultValue:{summary:`'default'`}}},tooltips:{control:`object`,description:`Tooltip text for each star.`},character:{control:`text`,description:`Custom character to use instead of stars.`}},parameters:{docs:{description:{component:`<code>BRate</code> is used for rating content. It supports full and half star selections, custom characters, keyboard navigation, and controlled/uncontrolled usage via <code>v-model</code>.<br><br>Fully accessible with keyboard navigation (Arrow keys, Tab) and ARIA attributes.`}}}},u={args:{modelValue:3,count:5,allowHalf:!1,allowClear:!0,disabled:!1,keyboard:!0,size:`default`},render:e=>({components:{BRate:r},setup:()=>({args:e,value:t(e.modelValue)}),template:`
      <div style="padding: 40px;">
        <BRate v-bind="args" v-model="value" />
        <p style="margin-top: 12px; font-size: 12px; color: #666;">Value: {{ value }}</p>
      </div>
    `}),play:async({canvasElement:e})=>{let t=c(e).getByRole(`slider`);await a(t).toBeInTheDocument(),await a(t).toHaveAttribute(`aria-valuenow`,`3`)}},d={args:{modelValue:2.5,allowHalf:!0},render:e=>({components:{BRate:r},setup:()=>({args:e,value:t(e.modelValue)}),template:`
      <div style="padding: 40px;">
        <BRate v-bind="args" v-model="value" />
        <p style="margin-top: 12px; font-size: 12px; color: #666;">Value: {{ value }}</p>
      </div>
    `})},f={render:()=>({components:{BRate:r},setup:()=>({small:t(3),medium:t(3),large:t(3)}),template:`
      <div style="padding: 40px; display: flex; flex-direction: column; gap: 16px;">
        <div>
          <span style="display: inline-block; width: 80px; font-size: 12px; color: #666;">Small:</span>
          <BRate v-model="small" size="small" />
        </div>
        <div>
          <span style="display: inline-block; width: 80px; font-size: 12px; color: #666;">Default:</span>
          <BRate v-model="medium" size="default" />
        </div>
        <div>
          <span style="display: inline-block; width: 80px; font-size: 12px; color: #666;">Large:</span>
          <BRate v-model="large" size="large" />
        </div>
      </div>
    `})},p={args:{modelValue:3,disabled:!0},render:e=>({components:{BRate:r},setup:()=>({args:e,value:t(e.modelValue)}),template:`
      <div style="padding: 40px;">
        <BRate v-bind="args" v-model="value" />
      </div>
    `})},m={render:()=>({components:{BRate:r},setup:()=>({heart:t(3),letter:t(4)}),template:`
      <div style="padding: 40px; display: flex; flex-direction: column; gap: 16px;">
        <div>
          <span style="display: inline-block; width: 100px; font-size: 12px; color: #666;">Heart:</span>
          <BRate v-model="heart" character="♥" />
        </div>
        <div>
          <span style="display: inline-block; width: 100px; font-size: 12px; color: #666;">Letter A:</span>
          <BRate v-model="letter" character="A" />
        </div>
      </div>
    `})},h={render:()=>({components:{BRate:r},setup:()=>({value:t(3),tooltips:[`Terrible`,`Bad`,`Normal`,`Good`,`Wonderful`]}),template:`
      <div style="padding: 40px;">
        <BRate v-model="value" :tooltips="tooltips" />
        <p style="margin-top: 12px; font-size: 12px; color: #666;">
          {{ tooltips[value - 1] || 'No rating' }}
        </p>
      </div>
    `})},g={render:()=>({components:{BRate:r},setup:()=>({value:t(2)}),template:`
      <div style="padding: 40px;">
        <h3 style="margin-bottom: 16px; font-size: 14px;">Keyboard Navigation Demo</h3>
        <p style="margin-bottom: 12px; font-size: 12px; color: #666;">
          Tab to focus, then use Arrow keys to change value. Enter/Space to clear.
        </p>
        <BRate v-model="value" aria-label="Product rating" />
        <p style="margin-top: 12px; font-size: 12px; color: #666;">Value: {{ value }}</p>
      </div>
    `}),play:async({canvasElement:e})=>{let t=c(e).getByRole(`slider`);await a(t).toHaveAttribute(`aria-label`,`Product rating`),await a(t).toHaveAttribute(`aria-valuenow`,`2`),await a(t).toHaveAttribute(`aria-valuemin`,`0`),await a(t).toHaveAttribute(`aria-valuemax`,`5`),await a(t).toHaveAttribute(`tabindex`,`0`),await o.tab(),await s(()=>{a(t).toHaveFocus()}),await o.keyboard(`{ArrowRight}`),await s(()=>{a(t).toHaveAttribute(`aria-valuenow`,`3`)}),await o.keyboard(`{ArrowLeft}`),await s(()=>{a(t).toHaveAttribute(`aria-valuenow`,`2`)})}},_={render:()=>({components:{BRate:r},setup:()=>({v1:t(4),v2:t(3),v3:t(5)}),template:`
      <div style="padding: 40px; display: flex; flex-direction: column; gap: 24px;">
        <div>
          <p style="margin-bottom: 8px; font-size: 12px; color: #666;">Custom color (red)</p>
          <BRate
            v-model="v1"
            style="--b-rate-star-color: #ff4d4f; --b-rate-star-bg: rgba(255, 77, 79, 0.15);"
          />
        </div>
        <div>
          <p style="margin-bottom: 8px; font-size: 12px; color: #666;">Custom size (32px) & color (blue)</p>
          <BRate
            v-model="v2"
            style="--b-rate-star-color: #1677ff; --b-rate-star-size: 32px; --b-rate-star-bg: rgba(22, 119, 255, 0.1);"
          />
        </div>
        <div>
          <p style="margin-bottom: 8px; font-size: 12px; color: #666;">No hover scale</p>
          <BRate
            v-model="v3"
            style="--b-rate-star-hover-scale: scale(1); --b-rate-star-color: #52c41a;"
          />
        </div>
      </div>
    `})},v={render:()=>({components:{BRate:r},setup:()=>({tokens:[{variable:`--b-rate-star-bg`,default:`rgba(0, 0, 0, 0.06)`,description:`Background color of unselected stars`},{variable:`--b-rate-star-color`,default:`#fadb14`,description:`Color of selected/active stars`},{variable:`--b-rate-star-hover-scale`,default:`scale(1.1)`,description:`Transform applied on star hover`},{variable:`--b-rate-star-size`,default:`20px`,description:`Size of each star (width & height)`}],value:t(3)}),template:`
      <div style="padding: 40px;">
        <h3 style="margin-bottom: 16px; font-size: 16px; font-weight: 600;">BRate Design Tokens</h3>
        <p style="margin-bottom: 16px; font-size: 12px; color: #666;">
          Override these CSS custom properties on <code>.b-rate</code> or via inline styles to theme the component.
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
              <td style="padding: 8px 12px; font-family: monospace; color: #d4380d;">{{ token.variable }}</td>
              <td style="padding: 8px 12px; font-family: monospace;">{{ token.default }}</td>
              <td style="padding: 8px 12px;">{{ token.description }}</td>
            </tr>
          </tbody>
        </table>
        <div style="margin-top: 24px; padding: 16px; background: #fafafa; border-radius: 8px;">
          <p style="margin-bottom: 8px; font-size: 12px; color: #666;">Live preview (default tokens):</p>
          <BRate v-model="value" />
        </div>
      </div>
    `})},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    modelValue: 3,
    count: 5,
    allowHalf: false,
    allowClear: true,
    disabled: false,
    keyboard: true,
    size: 'default'
  },
  render: args => ({
    components: {
      BRate
    },
    setup: () => {
      const value = ref(args.modelValue);
      return {
        args,
        value
      };
    },
    template: \`
      <div style="padding: 40px;">
        <BRate v-bind="args" v-model="value" />
        <p style="margin-top: 12px; font-size: 12px; color: #666;">Value: {{ value }}</p>
      </div>
    \`
  }),
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const rate = canvas.getByRole('slider');
    await expect(rate).toBeInTheDocument();
    await expect(rate).toHaveAttribute('aria-valuenow', '3');
  }
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    modelValue: 2.5,
    allowHalf: true
  },
  render: args => ({
    components: {
      BRate
    },
    setup: () => {
      const value = ref(args.modelValue);
      return {
        args,
        value
      };
    },
    template: \`
      <div style="padding: 40px;">
        <BRate v-bind="args" v-model="value" />
        <p style="margin-top: 12px; font-size: 12px; color: #666;">Value: {{ value }}</p>
      </div>
    \`
  })
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      BRate
    },
    setup: () => {
      const small = ref(3);
      const medium = ref(3);
      const large = ref(3);
      return {
        small,
        medium,
        large
      };
    },
    template: \`
      <div style="padding: 40px; display: flex; flex-direction: column; gap: 16px;">
        <div>
          <span style="display: inline-block; width: 80px; font-size: 12px; color: #666;">Small:</span>
          <BRate v-model="small" size="small" />
        </div>
        <div>
          <span style="display: inline-block; width: 80px; font-size: 12px; color: #666;">Default:</span>
          <BRate v-model="medium" size="default" />
        </div>
        <div>
          <span style="display: inline-block; width: 80px; font-size: 12px; color: #666;">Large:</span>
          <BRate v-model="large" size="large" />
        </div>
      </div>
    \`
  })
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    modelValue: 3,
    disabled: true
  },
  render: args => ({
    components: {
      BRate
    },
    setup: () => {
      const value = ref(args.modelValue);
      return {
        args,
        value
      };
    },
    template: \`
      <div style="padding: 40px;">
        <BRate v-bind="args" v-model="value" />
      </div>
    \`
  })
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      BRate
    },
    setup: () => {
      const heart = ref(3);
      const letter = ref(4);
      return {
        heart,
        letter
      };
    },
    template: \`
      <div style="padding: 40px; display: flex; flex-direction: column; gap: 16px;">
        <div>
          <span style="display: inline-block; width: 100px; font-size: 12px; color: #666;">Heart:</span>
          <BRate v-model="heart" character="♥" />
        </div>
        <div>
          <span style="display: inline-block; width: 100px; font-size: 12px; color: #666;">Letter A:</span>
          <BRate v-model="letter" character="A" />
        </div>
      </div>
    \`
  })
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      BRate
    },
    setup: () => {
      const value = ref(3);
      const tooltips = ['Terrible', 'Bad', 'Normal', 'Good', 'Wonderful'];
      return {
        value,
        tooltips
      };
    },
    template: \`
      <div style="padding: 40px;">
        <BRate v-model="value" :tooltips="tooltips" />
        <p style="margin-top: 12px; font-size: 12px; color: #666;">
          {{ tooltips[value - 1] || 'No rating' }}
        </p>
      </div>
    \`
  })
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      BRate
    },
    setup: () => {
      const value = ref(2);
      return {
        value
      };
    },
    template: \`
      <div style="padding: 40px;">
        <h3 style="margin-bottom: 16px; font-size: 14px;">Keyboard Navigation Demo</h3>
        <p style="margin-bottom: 12px; font-size: 12px; color: #666;">
          Tab to focus, then use Arrow keys to change value. Enter/Space to clear.
        </p>
        <BRate v-model="value" aria-label="Product rating" />
        <p style="margin-top: 12px; font-size: 12px; color: #666;">Value: {{ value }}</p>
      </div>
    \`
  }),
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const rate = canvas.getByRole('slider');
    await expect(rate).toHaveAttribute('aria-label', 'Product rating');
    await expect(rate).toHaveAttribute('aria-valuenow', '2');
    await expect(rate).toHaveAttribute('aria-valuemin', '0');
    await expect(rate).toHaveAttribute('aria-valuemax', '5');
    await expect(rate).toHaveAttribute('tabindex', '0');
    await userEvent.tab();
    await waitFor(() => {
      expect(rate).toHaveFocus();
    });
    await userEvent.keyboard('{ArrowRight}');
    await waitFor(() => {
      expect(rate).toHaveAttribute('aria-valuenow', '3');
    });
    await userEvent.keyboard('{ArrowLeft}');
    await waitFor(() => {
      expect(rate).toHaveAttribute('aria-valuenow', '2');
    });
  }
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      BRate
    },
    setup: () => {
      const v1 = ref(4);
      const v2 = ref(3);
      const v3 = ref(5);
      return {
        v1,
        v2,
        v3
      };
    },
    template: \`
      <div style="padding: 40px; display: flex; flex-direction: column; gap: 24px;">
        <div>
          <p style="margin-bottom: 8px; font-size: 12px; color: #666;">Custom color (red)</p>
          <BRate
            v-model="v1"
            style="--b-rate-star-color: #ff4d4f; --b-rate-star-bg: rgba(255, 77, 79, 0.15);"
          />
        </div>
        <div>
          <p style="margin-bottom: 8px; font-size: 12px; color: #666;">Custom size (32px) & color (blue)</p>
          <BRate
            v-model="v2"
            style="--b-rate-star-color: #1677ff; --b-rate-star-size: 32px; --b-rate-star-bg: rgba(22, 119, 255, 0.1);"
          />
        </div>
        <div>
          <p style="margin-bottom: 8px; font-size: 12px; color: #666;">No hover scale</p>
          <BRate
            v-model="v3"
            style="--b-rate-star-hover-scale: scale(1); --b-rate-star-color: #52c41a;"
          />
        </div>
      </div>
    \`
  })
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      BRate
    },
    setup: () => {
      const tokens = [{
        variable: '--b-rate-star-bg',
        default: 'rgba(0, 0, 0, 0.06)',
        description: 'Background color of unselected stars'
      }, {
        variable: '--b-rate-star-color',
        default: '#fadb14',
        description: 'Color of selected/active stars'
      }, {
        variable: '--b-rate-star-hover-scale',
        default: 'scale(1.1)',
        description: 'Transform applied on star hover'
      }, {
        variable: '--b-rate-star-size',
        default: '20px',
        description: 'Size of each star (width & height)'
      }];
      const value = ref(3);
      return {
        tokens,
        value
      };
    },
    template: \`
      <div style="padding: 40px;">
        <h3 style="margin-bottom: 16px; font-size: 16px; font-weight: 600;">BRate Design Tokens</h3>
        <p style="margin-bottom: 16px; font-size: 12px; color: #666;">
          Override these CSS custom properties on <code>.b-rate</code> or via inline styles to theme the component.
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
              <td style="padding: 8px 12px; font-family: monospace; color: #d4380d;">{{ token.variable }}</td>
              <td style="padding: 8px 12px; font-family: monospace;">{{ token.default }}</td>
              <td style="padding: 8px 12px;">{{ token.description }}</td>
            </tr>
          </tbody>
        </table>
        <div style="margin-top: 24px; padding: 16px; background: #fafafa; border-radius: 8px;">
          <p style="margin-bottom: 8px; font-size: 12px; color: #666;">Live preview (default tokens):</p>
          <BRate v-model="value" />
        </div>
      </div>
    \`
  })
}`,...v.parameters?.docs?.source}}},y=[`Playground`,`HalfStars`,`Sizes`,`Disabled`,`CustomCharacter`,`Tooltips`,`Accessibility`,`Theming`,`DesignTokens`]}))();export{g as Accessibility,m as CustomCharacter,v as DesignTokens,p as Disabled,d as HalfStars,u as Playground,f as Sizes,_ as Theming,h as Tooltips,y as __namedExportsOrder,l as default};