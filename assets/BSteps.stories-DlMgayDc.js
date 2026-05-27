import{n as e}from"./chunk-BneVvdWh.js";import{A as t,D as n,E as r,T as i,u as a,w as o}from"./types-CV_3xB-y.js";import{t as s,w as c}from"./components-DGiLIoKr.js";var l,u,d,f,p,m,h,g,_,v,y,b,x,S,C;e((()=>{s(),t(),{expect:l,userEvent:u,within:d}=__STORYBOOK_MODULE_TEST__,f={title:`Navigation/Steps`,component:c,tags:[`autodocs`],argTypes:{modelValue:{control:`number`},direction:{control:`select`,options:Object.values(o)},labelPlacement:{control:`select`,options:Object.values(i)},size:{control:`select`,options:Object.values(a)},status:{control:`select`,options:Object.values(r)},type:{control:`select`,options:Object.values(n)}},parameters:{docs:{description:{component:`The <code>BSteps</code> component is used to display progress through a sequence of steps.`}}}},p={args:{modelValue:1,direction:o.Horizontal,labelPlacement:i.Horizontal,size:a.Medium,status:r.Process,type:n.Default,items:[{title:`Verify email`,description:`Confirm your email address to proceed.`},{title:`Profile setup`,description:`Fill in the essential profile details.`},{title:`Finish`,description:`Review and submit.`}]},argTypes:{modelValue:{table:{category:`Two-Way Binding Props`}}},render:e=>({components:{BSteps:c},setup(){return{args:e}},template:`
      <BSteps v-bind="args" />
    `})},m={args:{modelValue:0,direction:o.Horizontal,labelPlacement:i.Horizontal,size:a.Medium,status:r.Process,type:n.Navigation,items:[{title:`Verify email`},{title:`Profile setup`},{title:`Finish`}]},render:e=>({components:{BSteps:c},setup(){return{args:e}},template:`
      <BSteps v-bind="args" />
    `}),play:async({canvasElement:e})=>{let t=await d(e).findByText(`Profile setup`);await u.click(t),l(e.querySelector(`[aria-current="step"]`)).toBeTruthy()}},h={args:{modelValue:1,direction:o.Vertical,labelPlacement:i.Horizontal,size:a.Medium,status:r.Process,type:n.Default,items:[{title:`Choose plan`,description:`Select the plan that fits your team.`},{title:`Billing info`,description:`Add your payment details.`},{title:`Launch`,description:`Invite teammates and go live.`}]},render:e=>({components:{BSteps:c},setup(){return{args:e}},template:`
      <div class="b:max-w-md">
        <BSteps v-bind="args" />
      </div>
    `})},g={args:{modelValue:0,direction:o.Horizontal,labelPlacement:i.Vertical,size:a.Medium,status:r.Process,type:n.Default,items:[{title:`Draft`,description:`Write the first version.`},{title:`Review`,description:`Collect feedback.`},{title:`Publish`,description:`Share with the team.`}]},render:e=>({components:{BSteps:c},setup(){return{args:e}},template:`
      <BSteps v-bind="args" />
    `})},_={args:{modelValue:0,direction:o.Horizontal,labelPlacement:i.Horizontal,size:a.Medium,status:r.Process,type:n.Navigation,items:[{title:`Shipping`,description:`Address and delivery.`},{title:`Payment`,description:`Select a method.`},{title:`Confirm`,description:`Review order details.`}]},render:e=>({components:{BSteps:c},setup(){return{args:e}},template:`
      <BSteps v-bind="args" />
    `})},v={args:{modelValue:2,direction:o.Horizontal,labelPlacement:i.Horizontal,size:a.Small,status:r.Process,type:n.Inline,items:[{title:`Plan`},{title:`Build`},{title:`Ship`}]},render:e=>({components:{BSteps:c},setup(){return{args:e}},template:`
      <BSteps v-bind="args" />
    `})},y={args:{modelValue:1,direction:o.Horizontal,labelPlacement:i.Horizontal,size:a.Medium,status:r.Error,type:n.Default,items:[{title:`Details`,description:`Provide project info.`},{title:`Review`,description:`Resolve validation errors.`},{title:`Submit`,description:`Finish and send.`}]},render:e=>({components:{BSteps:c},setup(){return{args:e}},template:`
      <BSteps v-bind="args" />
    `})},b={args:{modelValue:0,direction:o.Horizontal,labelPlacement:i.Horizontal,size:a.Medium,status:r.Process,type:n.Navigation,items:[{title:`Plan`},{title:`Build`},{title:`Ship`}]},render:e=>({components:{BSteps:c},setup(){return{args:e}},template:`
      <BSteps v-bind="args" />
    `})},x=[{token:`--b-steps-icon-size`,defaultValue:`2rem`,description:`Size of the step icon container (AntD: iconSize).`},{token:`--b-steps-gap`,defaultValue:`0.5rem`,description:`Gap between icon, title, and description.`},{token:`--b-steps-tail-color`,defaultValue:`oklch(0% 0 0 / 6%)`,description:`Color of the connecting tail between steps.`}],S={name:`Design Tokens`,parameters:{controls:{disable:!0},docs:{description:{story:`Reference table of every <code>--b-steps-*</code> CSS custom property consumers can override to retheme the component.`}},a11y:{config:{rules:[{id:`color-contrast`,selector:`.b-steps__icon, .b-steps__icon *`,enabled:!1}]}}},render:()=>({components:{BSteps:c},setup(){return{tokens:x,items:[{title:`Login`},{title:`Verify`},{title:`Pay`},{title:`Done`}]}},template:`
      <div style="font-family:sans-serif;padding:1rem;max-width:1100px;margin:0 auto;">
        <h2 style="margin:0 0 8px;">BSteps - Design Tokens</h2>
        <p style="margin:0 0 24px;color:#595959;">
          All tokens scoped to <code>.b-steps</code>. Override inline or via a CSS class.
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
          Three tokens overridden inline (icon size, gap, tail color).
        </p>
        <BSteps
          :current="1"
          :items="items"
          style="
            --b-steps-icon-size: 2.5rem;
            --b-steps-gap: 0.75rem;
            --b-steps-tail-color: oklch(80% 0.14 290);
          "
        />
      </div>
    `})},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    modelValue: 1,
    direction: BStepsDirection.Horizontal,
    labelPlacement: BStepsLabelPlacement.Horizontal,
    size: BCommonSize.Medium,
    status: BStepsStatus.Process,
    type: BStepsType.Default,
    items: [{
      title: 'Verify email',
      description: 'Confirm your email address to proceed.'
    }, {
      title: 'Profile setup',
      description: 'Fill in the essential profile details.'
    }, {
      title: 'Finish',
      description: 'Review and submit.'
    }]
  },
  argTypes: {
    modelValue: {
      table: {
        category: 'Two-Way Binding Props'
      }
    }
  },
  render: (args: any) => ({
    components: {
      BSteps
    },
    setup() {
      return {
        args
      };
    },
    template: \`
      <BSteps v-bind="args" />
    \`
  })
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    modelValue: 0,
    direction: BStepsDirection.Horizontal,
    labelPlacement: BStepsLabelPlacement.Horizontal,
    size: BCommonSize.Medium,
    status: BStepsStatus.Process,
    type: BStepsType.Navigation,
    items: [{
      title: 'Verify email'
    }, {
      title: 'Profile setup'
    }, {
      title: 'Finish'
    }]
  },
  render: (args: any) => ({
    components: {
      BSteps
    },
    setup() {
      return {
        args
      };
    },
    template: \`
      <BSteps v-bind="args" />
    \`
  }),
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const profileStep = await canvas.findByText('Profile setup');
    await userEvent.click(profileStep);
    const activeStep = canvasElement.querySelector('[aria-current="step"]');
    expect(activeStep).toBeTruthy();
  }
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    modelValue: 1,
    direction: BStepsDirection.Vertical,
    labelPlacement: BStepsLabelPlacement.Horizontal,
    size: BCommonSize.Medium,
    status: BStepsStatus.Process,
    type: BStepsType.Default,
    items: [{
      title: 'Choose plan',
      description: 'Select the plan that fits your team.'
    }, {
      title: 'Billing info',
      description: 'Add your payment details.'
    }, {
      title: 'Launch',
      description: 'Invite teammates and go live.'
    }]
  },
  render: (args: any) => ({
    components: {
      BSteps
    },
    setup() {
      return {
        args
      };
    },
    template: \`
      <div class="b:max-w-md">
        <BSteps v-bind="args" />
      </div>
    \`
  })
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    modelValue: 0,
    direction: BStepsDirection.Horizontal,
    labelPlacement: BStepsLabelPlacement.Vertical,
    size: BCommonSize.Medium,
    status: BStepsStatus.Process,
    type: BStepsType.Default,
    items: [{
      title: 'Draft',
      description: 'Write the first version.'
    }, {
      title: 'Review',
      description: 'Collect feedback.'
    }, {
      title: 'Publish',
      description: 'Share with the team.'
    }]
  },
  render: (args: any) => ({
    components: {
      BSteps
    },
    setup() {
      return {
        args
      };
    },
    template: \`
      <BSteps v-bind="args" />
    \`
  })
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  args: {
    modelValue: 0,
    direction: BStepsDirection.Horizontal,
    labelPlacement: BStepsLabelPlacement.Horizontal,
    size: BCommonSize.Medium,
    status: BStepsStatus.Process,
    type: BStepsType.Navigation,
    items: [{
      title: 'Shipping',
      description: 'Address and delivery.'
    }, {
      title: 'Payment',
      description: 'Select a method.'
    }, {
      title: 'Confirm',
      description: 'Review order details.'
    }]
  },
  render: (args: any) => ({
    components: {
      BSteps
    },
    setup() {
      return {
        args
      };
    },
    template: \`
      <BSteps v-bind="args" />
    \`
  })
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  args: {
    modelValue: 2,
    direction: BStepsDirection.Horizontal,
    labelPlacement: BStepsLabelPlacement.Horizontal,
    size: BCommonSize.Small,
    status: BStepsStatus.Process,
    type: BStepsType.Inline,
    items: [{
      title: 'Plan'
    }, {
      title: 'Build'
    }, {
      title: 'Ship'
    }]
  },
  render: (args: any) => ({
    components: {
      BSteps
    },
    setup() {
      return {
        args
      };
    },
    template: \`
      <BSteps v-bind="args" />
    \`
  })
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  args: {
    modelValue: 1,
    direction: BStepsDirection.Horizontal,
    labelPlacement: BStepsLabelPlacement.Horizontal,
    size: BCommonSize.Medium,
    status: BStepsStatus.Error,
    type: BStepsType.Default,
    items: [{
      title: 'Details',
      description: 'Provide project info.'
    }, {
      title: 'Review',
      description: 'Resolve validation errors.'
    }, {
      title: 'Submit',
      description: 'Finish and send.'
    }]
  },
  render: (args: any) => ({
    components: {
      BSteps
    },
    setup() {
      return {
        args
      };
    },
    template: \`
      <BSteps v-bind="args" />
    \`
  })
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  args: {
    modelValue: 0,
    direction: BStepsDirection.Horizontal,
    labelPlacement: BStepsLabelPlacement.Horizontal,
    size: BCommonSize.Medium,
    status: BStepsStatus.Process,
    type: BStepsType.Navigation,
    items: [{
      title: 'Plan'
    }, {
      title: 'Build'
    }, {
      title: 'Ship'
    }]
  },
  render: (args: any) => ({
    components: {
      BSteps
    },
    setup() {
      return {
        args
      };
    },
    template: \`
      <BSteps v-bind="args" />
    \`
  })
}`,...b.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  name: 'Design Tokens',
  parameters: {
    controls: {
      disable: true
    },
    docs: {
      description: {
        story: 'Reference table of every <code>--b-steps-*</code> CSS custom property ' + 'consumers can override to retheme the component.'
      }
    },
    // Step icons render single-digit numbers ("1", "2", ...). axe-core's
    // color-contrast checker reports "Element content is too short to determine
    // if it is actual text content" on these. The component meets WCAG AA
    // contrast in its Default story; this override silences the incomplete
    // result on the step indicators only.
    a11y: {
      config: {
        rules: [{
          id: 'color-contrast',
          selector: '.b-steps__icon, .b-steps__icon *',
          enabled: false
        }]
      }
    }
  },
  render: () => ({
    components: {
      BSteps
    },
    setup() {
      const items = [{
        title: 'Login'
      }, {
        title: 'Verify'
      }, {
        title: 'Pay'
      }, {
        title: 'Done'
      }];
      return {
        tokens: DESIGN_TOKENS,
        items
      };
    },
    template: \`
      <div style="font-family:sans-serif;padding:1rem;max-width:1100px;margin:0 auto;">
        <h2 style="margin:0 0 8px;">BSteps - Design Tokens</h2>
        <p style="margin:0 0 24px;color:#595959;">
          All tokens scoped to <code>.b-steps</code>. Override inline or via a CSS class.
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
          Three tokens overridden inline (icon size, gap, tail color).
        </p>
        <BSteps
          :current="1"
          :items="items"
          style="
            --b-steps-icon-size: 2.5rem;
            --b-steps-gap: 0.75rem;
            --b-steps-tail-color: oklch(80% 0.14 290);
          "
        />
      </div>
    \`
  })
}`,...S.parameters?.docs?.source}}},C=[`Default`,`Interactive`,`Vertical`,`LabelVertical`,`Navigation`,`Inline`,`ErrorState`,`Controlled`,`DesignTokens`]}))();export{b as Controlled,p as Default,S as DesignTokens,y as ErrorState,v as Inline,m as Interactive,g as LabelVertical,_ as Navigation,h as Vertical,C as __namedExportsOrder,f as default};