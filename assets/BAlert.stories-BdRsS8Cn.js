import{n as e}from"./chunk-BneVvdWh.js";import{K as t,i as n}from"./iframe-BMgVmRCG.js";import{A as r,t as i}from"./types-CV_3xB-y.js";import{dt as a,t as o}from"./components-DBCIcu8v.js";var s,c,l,u,d,f,p,m,h,g,_,v,y,b,x;e((()=>{o(),r(),n(),{expect:s,userEvent:c,waitFor:l,within:u}=__STORYBOOK_MODULE_TEST__,d={title:`Feedback/Alert`,component:a,tags:[`autodocs`],argTypes:{type:{control:`select`,options:Object.values(i),description:`Alert severity type.`,table:{defaultValue:{summary:i.Info}}},message:{control:`text`,description:`Primary message text.`},description:{control:`text`,description:`Optional supporting description.`},showIcon:{control:`boolean`,description:`Show the built-in status icon.`,table:{defaultValue:{summary:`false`}}},closable:{control:`boolean`,description:`Show close button.`,table:{defaultValue:{summary:`false`}}},banner:{control:`boolean`,description:`Render as a top-of-page banner (no border-radius).`,table:{defaultValue:{summary:`false`}}},action:{control:`text`,description:`Action area text (right side of the alert).`},modelValue:{control:`boolean`,description:`Controlled visibility (bind with v-model).`,table:{category:`Two-Way Binding Props`}}},parameters:{docs:{description:{component:`The <code>BAlert</code> component is used to display important messages inline within the page content.<br><br>It supports four severity levels - <strong>success</strong>, <strong>info</strong>, <strong>warning</strong>, and <strong>error</strong> - with optional icons, descriptions, actions and a dismiss button.<br>It operates in both <em>uncontrolled</em> (self-managing visibility) and <em>controlled</em> (<code>v-model</code>) modes.`}}}},f={args:{type:i.Info,message:`This is an informational alert.`,description:``,showIcon:!0,closable:!0,banner:!1,action:``},render:e=>({components:{BAlert:a},setup(){return{args:e}},template:`<BAlert v-bind="args" />`})},p={parameters:{controls:{disable:!0},docs:{source:{code:`
<BAlert type="success" message="Success" description="Operation completed successfully." show-icon />
<BAlert type="info"    message="Info"    description="Here is some useful information."  show-icon />
<BAlert type="warning" message="Warning" description="Please review the input values."   show-icon />
<BAlert type="error"   message="Error"   description="Something went wrong."             show-icon />
        `}}},render:()=>({components:{BAlert:a},template:`
      <div style="display:flex;flex-direction:column;gap:1rem;">
        <BAlert type="success" message="Success" description="Operation completed successfully." :show-icon="true" />
        <BAlert type="info"    message="Info"    description="Here is some useful information."  :show-icon="true" />
        <BAlert type="warning" message="Warning" description="Please review the input values."   :show-icon="true" />
        <BAlert type="error"   message="Error"   description="Something went wrong."             :show-icon="true" />
      </div>
    `})},m={parameters:{controls:{disable:!0},docs:{source:{code:`<BAlert type="warning" message="You can close this alert." :closable="true" :show-icon="true" />`}}},render:()=>({components:{BAlert:a},setup(){function e(){console.log(`close fired`)}function t(){console.log(`afterClose fired`)}return{onClose:e,onAfterClose:t}},template:`
      <BAlert
        type="warning"
        message="You can close this alert."
        :closable="true"
        :show-icon="true"
        @close="onClose"
        @after-close="onAfterClose"
      />
    `})},h={parameters:{layout:`fullscreen`,controls:{disable:!0},docs:{source:{code:`<BAlert type="info" message="Scheduled maintenance on Saturday 01:00–03:00 UTC." :banner="true" :show-icon="true" />`}}},render:()=>({components:{BAlert:a},template:`
      <BAlert
        type="info"
        message="Scheduled maintenance on Saturday 01:00–03:00 UTC."
        :banner="true"
        :show-icon="true"
      />
    `})},g={parameters:{controls:{disable:!0},docs:{source:{code:`<BAlert type="error" message="Failed to save changes." action="Retry" :show-icon="true" />`}}},render:()=>({components:{BAlert:a},template:`
      <BAlert
        type="error"
        message="Failed to save changes."
        action="Retry"
        :show-icon="true"
      />
    `})},_={parameters:{controls:{disable:!0},docs:{source:{code:`
<script setup>
const visible = ref(true);
<\/script>

<template>
  <button @click="visible = !visible">Toggle</button>
  <BAlert v-model="visible" type="success" message="Controlled alert." :closable="true" :show-icon="true" />
</template>
        `}}},render:()=>({components:{BAlert:a},setup(){return{visible:t(!0)}},template:`
      <div style="display:flex;flex-direction:column;gap:1rem;">
        <div style="display:flex;gap:0.5rem;">
          <button
            style="padding:0.25rem 0.75rem;border:1px solid #ccc;border-radius:0.375rem;cursor:pointer;"
            @click="visible = !visible"
          >
            {{ visible ? 'Hide' : 'Show' }} alert
          </button>
        </div>
        <BAlert
          v-model="visible"
          type="success"
          message="This alert is controlled via v-model."
          :closable="true"
          :show-icon="true"
        />
      </div>
    `})},v={name:`Accessibility (roles & keyboard)`,parameters:{controls:{disable:!0},docs:{description:{story:'Each alert type uses the correct ARIA live-region role. The close button is fully keyboard accessible (Tab → Enter / Space / Escape). Status icons carry `aria-hidden="true"` as they are decorative.'}}},render:()=>({components:{BAlert:a},template:`
      <div style="display:flex;flex-direction:column;gap:1rem;">
        <BAlert type="error"   message="Error (role=alert, assertive)"   :show-icon="true" :closable="true" />
        <BAlert type="warning" message="Warning (role=alert, assertive)" :show-icon="true" :closable="true" />
        <BAlert type="info"    message="Info (role=status, polite)"      :show-icon="true" :closable="true" />
        <BAlert type="success" message="Success (role=status, polite)"   :show-icon="true" :closable="true" />
      </div>
    `}),play:async({canvasElement:e})=>{let t=u(e),n=e.querySelectorAll(`.b-alert`);s(n[0].getAttribute(`role`)).toBe(`alert`),s(n[1].getAttribute(`role`)).toBe(`alert`),s(n[2].getAttribute(`role`)).toBe(`status`),s(n[3].getAttribute(`role`)).toBe(`status`);let r=t.getAllByRole(`button`,{name:/close alert/i})[0];r.focus(),s(document.activeElement).toBe(r),await c.keyboard(`{Enter}`),await l(()=>{s(n[0].isConnected).toBe(!1)})}},y={name:`Theming (CSS vars)`,parameters:{controls:{disable:!0},docs:{description:{story:"Override `--b-alert-*` CSS custom properties on the `.b-alert` element (or any ancestor) to customise colours without touching the component source."},source:{code:`
<style>
.my-custom-alert {
  --b-alert-bg: #1a1a2e;
  --b-alert-border-color: #e94560;
  --b-alert-color: #eaeaea;
  --b-alert-icon-color: #e94560;
  --b-alert-close-color: #aaa;
  --b-alert-close-hover-color: #eaeaea;
}
</style>

<BAlert
  class="my-custom-alert"
  type="error"
  message="Custom themed alert"
  description="All colours are driven by CSS custom properties."
  :show-icon="true"
  :closable="true"
/>
        `}}},render:()=>({components:{BAlert:a},template:`
      <div style="display:flex;flex-direction:column;gap:1rem;">
        <!-- Default -->
        <BAlert
          type="info"
          message="Default theme"
          description="Standard look using design-system tokens."
          :show-icon="true"
        />

        <!-- Custom theme via inline CSS vars -->
        <BAlert
          type="error"
          message="Custom themed alert"
          description="All colours are driven by CSS custom properties."
          :show-icon="true"
          :closable="true"
          style="
            --b-alert-bg: #1a1a2e;
            --b-alert-border-color: #e94560;
            --b-alert-color: #eaeaea;
            --b-alert-icon-color: #e94560;
            --b-alert-close-color: #aaa;
            --b-alert-close-hover-color: #eaeaea;
          "
        />
      </div>
    `})},b={name:`Interaction – close flow`,parameters:{controls:{disable:!0},docs:{description:{story:`Automated play function: clicks the close button and asserts the alert is removed.`}}},render:()=>({components:{BAlert:a},template:`
      <BAlert
        data-testid="alert"
        type="warning"
        message="This alert will be closed by the interaction test."
        :closable="true"
        :show-icon="true"
      />
    `}),play:async({canvasElement:e})=>{let t=u(e);s(e.querySelector(`.b-alert`)).toBeTruthy();let n=t.getByRole(`button`,{name:/close alert/i});s(n).toBeTruthy(),await c.click(n),await l(()=>{s(e.querySelector(`.b-alert`)).toBeNull()})}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    type: BAlertType.Info,
    message: 'This is an informational alert.',
    description: '',
    showIcon: true,
    closable: true,
    banner: false,
    action: ''
  },
  render: args => ({
    components: {
      BAlert
    },
    setup() {
      return {
        args
      };
    },
    template: \`<BAlert v-bind="args" />\`
  })
}`,...f.parameters?.docs?.source},description:{story:`Interactive playground - tweak all props via the Controls panel.`,...f.parameters?.docs?.description}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: true
    },
    docs: {
      source: {
        code: \`
<BAlert type="success" message="Success" description="Operation completed successfully." show-icon />
<BAlert type="info"    message="Info"    description="Here is some useful information."  show-icon />
<BAlert type="warning" message="Warning" description="Please review the input values."   show-icon />
<BAlert type="error"   message="Error"   description="Something went wrong."             show-icon />
        \`
      }
    }
  },
  render: () => ({
    components: {
      BAlert
    },
    template: \`
      <div style="display:flex;flex-direction:column;gap:1rem;">
        <BAlert type="success" message="Success" description="Operation completed successfully." :show-icon="true" />
        <BAlert type="info"    message="Info"    description="Here is some useful information."  :show-icon="true" />
        <BAlert type="warning" message="Warning" description="Please review the input values."   :show-icon="true" />
        <BAlert type="error"   message="Error"   description="Something went wrong."             :show-icon="true" />
      </div>
    \`
  })
}`,...p.parameters?.docs?.source},description:{story:`Demonstrates all four alert types side-by-side with icon and description.`,...p.parameters?.docs?.description}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: true
    },
    docs: {
      source: {
        code: \`<BAlert type="warning" message="You can close this alert." :closable="true" :show-icon="true" />\`
      }
    }
  },
  render: () => ({
    components: {
      BAlert
    },
    setup() {
      function onClose() {
        console.log('close fired');
      }
      function onAfterClose() {
        console.log('afterClose fired');
      }
      return {
        onClose,
        onAfterClose
      };
    },
    template: \`
      <BAlert
        type="warning"
        message="You can close this alert."
        :closable="true"
        :show-icon="true"
        @close="onClose"
        @after-close="onAfterClose"
      />
    \`
  })
}`,...m.parameters?.docs?.source},description:{story:"The alert manages its own visibility. Clicking the × button triggers\nthe `close` event and hides the alert; after the leave-transition\n`afterClose` fires.",...m.parameters?.docs?.description}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  parameters: {
    layout: 'fullscreen',
    controls: {
      disable: true
    },
    docs: {
      source: {
        code: \`<BAlert type="info" message="Scheduled maintenance on Saturday 01:00–03:00 UTC." :banner="true" :show-icon="true" />\`
      }
    }
  },
  render: () => ({
    components: {
      BAlert
    },
    template: \`
      <BAlert
        type="info"
        message="Scheduled maintenance on Saturday 01:00–03:00 UTC."
        :banner="true"
        :show-icon="true"
      />
    \`
  })
}`,...h.parameters?.docs?.source},description:{story:`Banner variant stretches full-width with no border-radius, suitable for
top-of-page announcements.`,...h.parameters?.docs?.description}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: true
    },
    docs: {
      source: {
        code: \`<BAlert type="error" message="Failed to save changes." action="Retry" :show-icon="true" />\`
      }
    }
  },
  render: () => ({
    components: {
      BAlert
    },
    template: \`
      <BAlert
        type="error"
        message="Failed to save changes."
        action="Retry"
        :show-icon="true"
      />
    \`
  })
}`,...g.parameters?.docs?.source},description:{story:`An action element displayed on the right side of the alert.`,...g.parameters?.docs?.description}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: true
    },
    docs: {
      source: {
        code: \`
<script setup>
const visible = ref(true);
<\/script>

<template>
  <button @click="visible = !visible">Toggle</button>
  <BAlert v-model="visible" type="success" message="Controlled alert." :closable="true" :show-icon="true" />
</template>
        \`
      }
    }
  },
  render: () => ({
    components: {
      BAlert
    },
    setup() {
      const visible = ref(true);
      return {
        visible
      };
    },
    template: \`
      <div style="display:flex;flex-direction:column;gap:1rem;">
        <div style="display:flex;gap:0.5rem;">
          <button
            style="padding:0.25rem 0.75rem;border:1px solid #ccc;border-radius:0.375rem;cursor:pointer;"
            @click="visible = !visible"
          >
            {{ visible ? 'Hide' : 'Show' }} alert
          </button>
        </div>
        <BAlert
          v-model="visible"
          type="success"
          message="This alert is controlled via v-model."
          :closable="true"
          :show-icon="true"
        />
      </div>
    \`
  })
}`,..._.parameters?.docs?.source},description:{story:"Controlled visibility via `v-model`. The parent owns the visible state.",..._.parameters?.docs?.description}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  name: 'Accessibility (roles & keyboard)',
  parameters: {
    controls: {
      disable: true
    },
    docs: {
      description: {
        story: 'Each alert type uses the correct ARIA live-region role. ' + 'The close button is fully keyboard accessible (Tab → Enter / Space / Escape). ' + 'Status icons carry \`aria-hidden="true"\` as they are decorative.'
      }
    }
  },
  render: () => ({
    components: {
      BAlert
    },
    template: \`
      <div style="display:flex;flex-direction:column;gap:1rem;">
        <BAlert type="error"   message="Error (role=alert, assertive)"   :show-icon="true" :closable="true" />
        <BAlert type="warning" message="Warning (role=alert, assertive)" :show-icon="true" :closable="true" />
        <BAlert type="info"    message="Info (role=status, polite)"      :show-icon="true" :closable="true" />
        <BAlert type="success" message="Success (role=status, polite)"   :show-icon="true" :closable="true" />
      </div>
    \`
  }),
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);

    // Verify ARIA roles
    const alerts = canvasElement.querySelectorAll('.b-alert');
    expect(alerts[0].getAttribute('role')).toBe('alert');
    expect(alerts[1].getAttribute('role')).toBe('alert');
    expect(alerts[2].getAttribute('role')).toBe('status');
    expect(alerts[3].getAttribute('role')).toBe('status');

    // Keyboard: focus the first (error) close button and activate with Enter
    const firstClose = canvas.getAllByRole('button', {
      name: /close alert/i
    })[0];
    firstClose.focus();
    expect(document.activeElement).toBe(firstClose);
    await userEvent.keyboard('{Enter}');
    // The Vue <Transition> leave animation keeps the element in the DOM briefly.
    // waitFor polls until v-if fully unmounts it after @after-leave fires.
    await waitFor(() => {
      expect(alerts[0].isConnected).toBe(false);
    });
  }
}`,...v.parameters?.docs?.source},description:{story:'Demonstrates ARIA roles and keyboard interaction.\n- `error` and `warning` → `role="alert"` (assertive live region)\n- `info` and `success`  → `role="status"` (polite live region)\n- Close button is reachable via Tab and activatable via Enter / Space / Escape.',...v.parameters?.docs?.description}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  name: 'Theming (CSS vars)',
  parameters: {
    controls: {
      disable: true
    },
    docs: {
      description: {
        story: 'Override \`--b-alert-*\` CSS custom properties on the \`.b-alert\` element ' + '(or any ancestor) to customise colours without touching the component source.'
      },
      source: {
        code: \`
<style>
.my-custom-alert {
  --b-alert-bg: #1a1a2e;
  --b-alert-border-color: #e94560;
  --b-alert-color: #eaeaea;
  --b-alert-icon-color: #e94560;
  --b-alert-close-color: #aaa;
  --b-alert-close-hover-color: #eaeaea;
}
</style>

<BAlert
  class="my-custom-alert"
  type="error"
  message="Custom themed alert"
  description="All colours are driven by CSS custom properties."
  :show-icon="true"
  :closable="true"
/>
        \`
      }
    }
  },
  render: () => ({
    components: {
      BAlert
    },
    template: \`
      <div style="display:flex;flex-direction:column;gap:1rem;">
        <!-- Default -->
        <BAlert
          type="info"
          message="Default theme"
          description="Standard look using design-system tokens."
          :show-icon="true"
        />

        <!-- Custom theme via inline CSS vars -->
        <BAlert
          type="error"
          message="Custom themed alert"
          description="All colours are driven by CSS custom properties."
          :show-icon="true"
          :closable="true"
          style="
            --b-alert-bg: #1a1a2e;
            --b-alert-border-color: #e94560;
            --b-alert-color: #eaeaea;
            --b-alert-icon-color: #e94560;
            --b-alert-close-color: #aaa;
            --b-alert-close-hover-color: #eaeaea;
          "
        />
      </div>
    \`
  })
}`,...y.parameters?.docs?.source},description:{story:"Override the CSS custom properties to customise the appearance.\nEvery token is prefixed `--b-alert-*`.",...y.parameters?.docs?.description}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  name: 'Interaction – close flow',
  parameters: {
    controls: {
      disable: true
    },
    docs: {
      description: {
        story: 'Automated play function: clicks the close button and asserts the alert is removed.'
      }
    }
  },
  render: () => ({
    components: {
      BAlert
    },
    template: \`
      <BAlert
        data-testid="alert"
        type="warning"
        message="This alert will be closed by the interaction test."
        :closable="true"
        :show-icon="true"
      />
    \`
  }),
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);

    // Alert is visible
    expect(canvasElement.querySelector('.b-alert')).toBeTruthy();

    // Close button is accessible by label
    const closeBtn = canvas.getByRole('button', {
      name: /close alert/i
    });
    expect(closeBtn).toBeTruthy();

    // Click the close button
    await userEvent.click(closeBtn);

    // The Vue <Transition> leave animation keeps the element in the DOM briefly.
    // waitFor polls until the element is fully removed (v-if unmounts after @after-leave).
    await waitFor(() => {
      expect(canvasElement.querySelector('.b-alert')).toBeNull();
    });
  }
}`,...b.parameters?.docs?.source},description:{story:`Automated interaction test: verifies the full close flow (click → dismiss).`,...b.parameters?.docs?.description}}},x=[`Playground`,`AllTypes`,`Closable`,`Banner`,`WithAction`,`Controlled`,`Accessibility`,`Theming`,`InteractionClose`]}))();export{v as Accessibility,p as AllTypes,h as Banner,m as Closable,_ as Controlled,b as InteractionClose,f as Playground,y as Theming,g as WithAction,x as __namedExportsOrder,d as default};