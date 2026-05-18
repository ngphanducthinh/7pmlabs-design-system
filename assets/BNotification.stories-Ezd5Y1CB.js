import{n as e}from"./chunk-BneVvdWh.js";import{K as t,i as n}from"./iframe-BtDITyas.js";import{A as r,_ as i,v as a}from"./types-CV_3xB-y.js";import{T as o,t as s}from"./components-_FfmWUAp.js";var c,l,u,d,f,p,m,h,g,_,v,y,b,x,S,C,w,T,E;e((()=>{s(),r(),n(),{expect:c,userEvent:l,waitFor:u,within:d}=__STORYBOOK_MODULE_TEST__,f={title:`Feedback/Notification`,component:o,tags:[`autodocs`],argTypes:{type:{control:`select`,options:Object.values(a),description:`Notification severity / status type.`,table:{defaultValue:{summary:a.Info}}},message:{control:`text`,description:`Short title / heading of the notification.`},description:{control:`text`,description:`Optional detailed description below the title.`},placement:{control:`select`,options:Object.values(i),description:`Placement of the notification on the viewport.`,table:{defaultValue:{summary:i.TopRight}}},duration:{control:`number`,description:"Time (seconds) before auto-close. Set to `0` to disable auto-close.",table:{defaultValue:{summary:`4.5`}}},closable:{control:`boolean`,description:`Show the close button.`,table:{defaultValue:{summary:`true`}}},showIcon:{control:`boolean`,description:"Show the built-in status icon when `type` is set.",table:{defaultValue:{summary:`true`}}},modelValue:{control:`boolean`,description:`Controlled visibility (bind with v-model). Notifications are closed by default and must be opened explicitly.`,table:{category:`Two-Way Binding Props`,defaultValue:{summary:`false`}}},icon:{control:!1},closeIcon:{control:!1},btn:{control:!1}},parameters:{docs:{description:{component:`The <code>BNotification</code> component displays a floating notification card in a corner of the viewport.<br><br>It supports four types - <strong>success</strong>, <strong>info</strong>, <strong>warning</strong>, and <strong>error</strong> - defaulting to <strong>info</strong>.<br>Notifications are <strong>closed by default</strong> and must be opened explicitly via <code>v-model</code> or the exposed <code>open()</code> method.<br>They auto-close after a configurable duration (default 4.5 s), pause on mouse hover, and can be dismissed with the close button or the <kbd>Escape</kbd> key.<br>The component teleports to <code>&lt;body&gt;</code> for correct stacking.`}}}},p=`padding:0.375rem 0.875rem;border:1px solid #d0d0d0;border-radius:0.375rem;cursor:pointer;background:#fff;font-size:0.875rem;`,m={args:{type:a.Info,message:`Notification Title`,description:`This is the notification description with additional detail.`,placement:i.TopRight,duration:4.5,closable:!0,showIcon:!0},render:e=>({components:{BNotification:o},setup(){return{args:e,visible:t(!1),btnStyle:p}},template:`
      <div>
        <button :style="btnStyle" @click="visible = true">Show Notification</button>
        <BNotification v-model="visible" v-bind="args" />
      </div>
    `})},h={parameters:{controls:{disable:!0},docs:{source:{code:`
<BNotification v-model="visible" type="success" message="Success" description="Operation completed." />
<BNotification v-model="visible" type="info"    message="Info"    description="Here is some information." />
<BNotification v-model="visible" type="warning" message="Warning" description="Please review the input." />
<BNotification v-model="visible" type="error"   message="Error"   description="Something went wrong." />
        `}}},render:()=>({components:{BNotification:o},setup(){let e=Object.values(a),n={success:`Operation completed successfully.`,info:`Here is some useful information.`,warning:`Please review the input values.`,error:`Something went wrong. Please try again.`},r=Object.fromEntries(e.map(e=>[e,t(!1)]));function i(e){r[e].value=!0}return{types:e,descriptions:n,visibleMap:r,show:i,btnStyle:p}},template:`
      <div style="display:flex;flex-direction:column;gap:0.75rem;align-items:flex-start;">
        <div v-for="t in types" :key="t" style="display:flex;align-items:center;gap:0.5rem;">
          <button :style="btnStyle" @click="show(t)">
            {{ t.charAt(0).toUpperCase() + t.slice(1) }}
          </button>
          <BNotification
            v-model="visibleMap[t].value"
            :type="t"
            :message="t.charAt(0).toUpperCase() + t.slice(1)"
            :description="descriptions[t]"
            :duration="0"
            style="position:relative;top:auto;right:auto;bottom:auto;left:auto;"
          />
        </div>
      </div>
    `})},g={parameters:{controls:{disable:!0},docs:{source:{code:`
<BNotification
  v-model="visible"
  placement="top-right"
  message="Top Right"
  description="Notification in the top-right corner."
/>
        `}}},render:()=>({components:{BNotification:o},setup(){let e=Object.values(i),n=Object.fromEntries(e.map(e=>[e,t(!1)]));function r(e){n[e].value=!0}return{placements:e,visibleMap:n,show:r,btnStyle:p}},template:`
      <div style="display:flex;flex-wrap:wrap;gap:0.75rem;">
        <div v-for="p in placements" :key="p">
          <button :style="btnStyle" @click="show(p)">{{ p }}</button>
          <BNotification
            v-model="visibleMap[p].value"
            :placement="p"
            type="info"
            :message="p"
            description="Click the × or wait for auto-close."
            :duration="4.5"
          />
        </div>
      </div>
    `})},_={parameters:{controls:{disable:!0},docs:{source:{code:`
<script setup>
const visible = ref(false);
<\/script>
<template>
  <button @click="visible = !visible">Toggle</button>
  <BNotification
    v-model="visible"
    type="info"
    message="Controlled"
    description="Controlled via v-model."
    :duration="0"
  />
</template>
        `}}},render:()=>({components:{BNotification:o},setup(){return{visible:t(!1),btnStyle:p}},template:`
      <div>
        <button :style="btnStyle" data-testid="toggle-btn" @click="visible = !visible">
          {{ visible ? 'Hide' : 'Show' }} notification
        </button>
        <BNotification
          v-model="visible"
          type="info"
          message="Controlled Notification"
          description="This notification is controlled via v-model (duration=0)."
          :duration="0"
          style="position:relative;top:auto;right:auto;bottom:auto;left:auto;"
        />
      </div>
    `})},v={parameters:{controls:{disable:!0},docs:{source:{code:`
<BNotification v-model="visible" type="success" message="Success" description="File uploaded.">
  <template #btn>
    <button @click="visible = false">Dismiss</button>
    <button @click="doSomething">View File</button>
  </template>
</BNotification>
        `}}},render:()=>({components:{BNotification:o},setup(){return{visible:t(!1),btnStyle:p}},template:`
      <div>
        <button :style="btnStyle" @click="visible = true">Show with Action</button>
        <BNotification
          v-model="visible"
          type="success"
          message="File Uploaded"
          description="Your file has been uploaded successfully."
          :duration="0"
          style="position:relative;top:auto;right:auto;bottom:auto;left:auto;"
        >
          <template #btn>
            <div style="display:flex;gap:0.5rem;margin-top:0.25rem;">
              <button :style="btnStyle" @click="visible = false">Dismiss</button>
              <button :style="btnStyle" style="color:oklch(62.3% 0.214 259.815);">View File</button>
            </div>
          </template>
        </BNotification>
      </div>
    `})},y={parameters:{controls:{disable:!0},docs:{source:{code:`
<BNotification v-model="visible" message="Custom Icon">
  <template #icon>
    <span style="font-size:1.5rem;">🎉</span>
  </template>
</BNotification>
        `}}},render:()=>({components:{BNotification:o},setup(){return{visible:t(!1),btnStyle:p}},template:`
      <div>
        <button :style="btnStyle" @click="visible = true">Show Custom Icon</button>
        <BNotification
          v-model="visible"
          message="Custom Icon Notification"
          description="The icon has been overridden via the icon slot."
          :duration="0"
          style="position:relative;top:auto;right:auto;bottom:auto;left:auto;"
        >
          <template #icon>
            <span style="font-size:1.5rem;line-height:1;" aria-hidden="true">🎉</span>
          </template>
        </BNotification>
      </div>
    `})},b={parameters:{controls:{disable:!0},docs:{source:{code:`<BNotification v-model="visible" type="info" message="No Icon" :show-icon="false" />`}}},render:()=>({components:{BNotification:o},setup(){return{visible:t(!1),btnStyle:p}},template:`
      <div>
        <button :style="btnStyle" @click="visible = true">Show (no icon)</button>
        <BNotification
          v-model="visible"
          type="info"
          message="Notification without icon"
          description="showIcon=false suppresses the built-in icon."
          :show-icon="false"
          :duration="0"
          style="position:relative;top:auto;right:auto;bottom:auto;left:auto;"
        />
      </div>
    `})},x={name:`Accessibility (roles, keyboard & focus)`,parameters:{controls:{disable:!0},docs:{description:{story:'Click **"Show All"** to trigger every type. Error and warning use `role="alert"` with `aria-live="assertive"`, while info and success use `role="status"` with `aria-live="polite"`. The close button is labelled `aria-label="Close notification"` and receives focus when the notification opens. Press <kbd>Escape</kbd> to dismiss.'}}},render:()=>({components:{BNotification:o},setup(){let e=t(!1),n=t(!1),r=t(!1),i=t(!1);function a(){e.value=!0,n.value=!0,r.value=!0,i.value=!0}return{visError:e,visWarning:n,visInfo:r,visSuccess:i,showAll:a,btnStyle:p}},template:`
      <div style="display:flex;flex-direction:column;gap:1rem;align-items:flex-start;">
        <button :style="btnStyle" data-testid="show-all-btn" @click="showAll">Show All</button>
        <BNotification v-model="visError"   type="error"   message="Error"   description="Error (role=alert, assertive)"   :duration="0" style="position:relative;top:auto;right:auto;bottom:auto;left:auto;" />
        <BNotification v-model="visWarning" type="warning" message="Warning" description="Warning (role=alert, assertive)" :duration="0" style="position:relative;top:auto;right:auto;bottom:auto;left:auto;" />
        <BNotification v-model="visInfo"    type="info"    message="Info"    description="Info (role=status, polite)"       :duration="0" style="position:relative;top:auto;right:auto;bottom:auto;left:auto;" />
        <BNotification v-model="visSuccess" type="success" message="Success" description="Success (role=status, polite)"    :duration="0" style="position:relative;top:auto;right:auto;bottom:auto;left:auto;" />
      </div>
    `}),play:async({canvasElement:e})=>{let t=d(e);c(document.querySelectorAll(`.b-notification`).length).toBe(0);let n=t.getByTestId(`show-all-btn`);await l.click(n),await u(()=>{c(document.querySelectorAll(`.b-notification`).length).toBe(4)});let r=document.querySelectorAll(`.b-notification`);c(r[0].getAttribute(`role`)).toBe(`alert`),c(r[1].getAttribute(`role`)).toBe(`alert`),c(r[2].getAttribute(`role`)).toBe(`status`),c(r[3].getAttribute(`role`)).toBe(`status`),c(r[0].getAttribute(`aria-live`)).toBe(`assertive`),c(r[1].getAttribute(`aria-live`)).toBe(`assertive`),c(r[2].getAttribute(`aria-live`)).toBe(`polite`),c(r[3].getAttribute(`aria-live`)).toBe(`polite`);for(let e of r)c(e.getAttribute(`aria-atomic`)).toBe(`true`);let i=document.querySelectorAll(`.b-notification__icon`);for(let e of i)c(e.getAttribute(`aria-hidden`)).toBe(`true`);let a=document.querySelectorAll(`.b-notification__icon-svg`);for(let e of a)c(e.getAttribute(`focusable`)).toBe(`false`);let o=document.querySelectorAll(`.b-notification__close`);for(let e of o)c(e.getAttribute(`aria-label`)).toBe(`Close notification`),c(e.getAttribute(`type`)).toBe(`button`);for(let e of r){let t=e.getAttribute(`aria-labelledby`);c(t).toBeTruthy(),c(e.querySelector(`.b-notification__message`)?.id).toBe(t)}for(let e of r){let t=e.getAttribute(`aria-describedby`);c(t).toBeTruthy(),c(e.querySelector(`.b-notification__description`)?.id).toBe(t)}r[0].focus(),await l.keyboard(`{Escape}`),await u(()=>{c(document.querySelectorAll(`.b-notification`).length).toBe(3)})}},S={name:`Theming (CSS vars)`,parameters:{controls:{disable:!0},docs:{description:{story:"Override `--b-notification-*` CSS custom properties on the `.b-notification` element (or any ancestor) to customise colours without touching component source."},source:{code:`
<style>
.my-custom-notification {
  --b-notification-bg: #1a1a2e;
  --b-notification-title-color: #eaeaea;
  --b-notification-desc-color: #a0a0c0;
  --b-notification-icon-color: #e94560;
  --b-notification-shadow: 0 4px 16px rgba(233, 69, 96, 0.3);
}
</style>

<BNotification
  v-model="visible"
  class="my-custom-notification"
  type="error"
  message="Custom Theme"
  description="Override CSS vars to brand this component."
  :duration="0"
/>
        `}}},render:()=>({components:{BNotification:o},setup(){let e=t(!1),n=t(!1);function r(){e.value=!0,n.value=!0}return{visDefault:e,visCustom:n,showBoth:r,btnStyle:p}},template:`
      <div style="display:flex;flex-direction:column;gap:1rem;align-items:flex-start;">
        <button :style="btnStyle" @click="showBoth">Show Themed Notifications</button>

        <!-- Default theme -->
        <BNotification
          v-model="visDefault"
          type="info"
          message="Default Theme"
          description="This uses the built-in CSS variable defaults."
          :duration="0"
          style="position:relative;top:auto;right:auto;bottom:auto;left:auto;"
        />

        <!-- Custom theme via inline CSS vars -->
        <BNotification
          v-model="visCustom"
          type="error"
          message="Custom Theme"
          description="Override --b-notification-* CSS vars for full control."
          :duration="0"
          style="
            position:relative;top:auto;right:auto;bottom:auto;left:auto;
            --b-notification-bg: #1a1a2e;
            --b-notification-title-color: #eaeaea;
            --b-notification-desc-color: #a0a0c0;
            --b-notification-icon-color: #e94560;
            --b-notification-shadow: 0 4px 16px rgba(233,69,96,0.3);
          "
        />
      </div>
    `})},C={name:`Interaction – toggle flow`,parameters:{controls:{disable:!0},docs:{description:{story:`Automated play function: clicks the toggle button to show a controlled notification, verifies it appears with correct ARIA attributes, then hides it.`}}},render:()=>({components:{BNotification:o},setup(){return{visible:t(!1),btnStyle:p}},template:`
      <div>
        <button :style="btnStyle" data-testid="toggle-btn" @click="visible = !visible">
          {{ visible ? 'Hide' : 'Show' }}
        </button>
        <BNotification
          v-model="visible"
          type="success"
          message="Toggled"
          description="Notification controlled via v-model."
          :duration="0"
        />
      </div>
    `}),play:async({canvasElement:e})=>{let t=d(e);c(document.querySelector(`.b-notification`)).toBeNull();let n=t.getByTestId(`toggle-btn`);await l.click(n),await u(()=>{c(document.querySelector(`.b-notification`)).toBeTruthy()});let r=document.querySelector(`.b-notification`);c(r.getAttribute(`role`)).toBe(`status`),c(r.getAttribute(`aria-live`)).toBe(`polite`),c(r.getAttribute(`aria-atomic`)).toBe(`true`),c(r.getAttribute(`aria-labelledby`)).toBeTruthy(),await l.click(n),await u(()=>{c(document.querySelector(`.b-notification`)).toBeNull()})}},w={name:`Interaction – close button`,parameters:{controls:{disable:!0},docs:{description:{story:`Automated play function: opens a notification and dismisses it using the close button.`}}},render:()=>({components:{BNotification:o},setup(){return{visible:t(!1),btnStyle:p}},template:`
      <div>
        <button :style="btnStyle" data-testid="open-btn" @click="visible = true">
          Open
        </button>
        <BNotification
          v-model="visible"
          type="warning"
          message="Close Me"
          description="Use the × button to dismiss."
          :duration="0"
        />
      </div>
    `}),play:async({canvasElement:e})=>{let t=d(e).getByTestId(`open-btn`);await l.click(t),await u(()=>{c(document.querySelector(`.b-notification`)).toBeTruthy()});let n=document.querySelector(`.b-notification`);c(n.getAttribute(`role`)).toBe(`alert`),c(n.getAttribute(`aria-live`)).toBe(`assertive`);let r=n.querySelector(`.b-notification__close`);c(r).toBeTruthy(),c(r.getAttribute(`aria-label`)).toBe(`Close notification`),await l.click(r),await u(()=>{c(document.querySelector(`.b-notification`)).toBeNull()})}},T={name:`Interaction – hover pause`,parameters:{controls:{disable:!0},docs:{description:{story:`Click the button to show a notification that auto-closes in 30 s. Hovering over it pauses the timer; leaving resumes it.`}}},render:()=>({components:{BNotification:o},setup(){return{visible:t(!1),btnStyle:p}},template:`
      <div>
        <button :style="btnStyle" data-testid="show-btn" @click="visible = true">
          Show (hover to pause)
        </button>
        <BNotification
          v-model="visible"
          type="info"
          message="Hover to Pause"
          description="Hovering pauses the 30-second auto-close timer."
          :duration="30"
        />
      </div>
    `}),play:async({canvasElement:e})=>{let t=d(e);c(document.querySelector(`.b-notification`)).toBeNull();let n=t.getByTestId(`show-btn`);await l.click(n),await u(()=>{c(document.querySelector(`.b-notification`)).toBeTruthy()});let r=document.querySelector(`.b-notification`);c(r.classList.contains(`b-notification--info`)).toBe(!0),c(r.getAttribute(`role`)).toBe(`status`),await l.hover(r),c(document.querySelector(`.b-notification`)).toBeTruthy(),await l.unhover(r),c(document.querySelector(`.b-notification`)).toBeTruthy()}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    type: BNotificationType.Info,
    message: 'Notification Title',
    description: 'This is the notification description with additional detail.',
    placement: BNotificationPlacement.TopRight,
    duration: 4.5,
    closable: true,
    showIcon: true
  },
  render: args => ({
    components: {
      BNotification
    },
    setup() {
      const visible = ref(false);
      return {
        args,
        visible,
        btnStyle
      };
    },
    template: \`
      <div>
        <button :style="btnStyle" @click="visible = true">Show Notification</button>
        <BNotification v-model="visible" v-bind="args" />
      </div>
    \`
  })
}`,...m.parameters?.docs?.source},description:{story:`Interactive playground - tweak all props via the Controls panel.
Click **"Show Notification"** to open it. It starts closed by default.`,...m.parameters?.docs?.description}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: true
    },
    docs: {
      source: {
        code: \`
<BNotification v-model="visible" type="success" message="Success" description="Operation completed." />
<BNotification v-model="visible" type="info"    message="Info"    description="Here is some information." />
<BNotification v-model="visible" type="warning" message="Warning" description="Please review the input." />
<BNotification v-model="visible" type="error"   message="Error"   description="Something went wrong." />
        \`
      }
    }
  },
  render: () => ({
    components: {
      BNotification
    },
    setup() {
      const types = Object.values(BNotificationType) as string[];
      const descriptions: Record<string, string> = {
        success: 'Operation completed successfully.',
        info: 'Here is some useful information.',
        warning: 'Please review the input values.',
        error: 'Something went wrong. Please try again.'
      };
      const visibleMap = Object.fromEntries(types.map(t => [t, ref(false)]));
      function show(type: string) {
        visibleMap[type].value = true;
      }
      return {
        types,
        descriptions,
        visibleMap,
        show,
        btnStyle
      };
    },
    template: \`
      <div style="display:flex;flex-direction:column;gap:0.75rem;align-items:flex-start;">
        <div v-for="t in types" :key="t" style="display:flex;align-items:center;gap:0.5rem;">
          <button :style="btnStyle" @click="show(t)">
            {{ t.charAt(0).toUpperCase() + t.slice(1) }}
          </button>
          <BNotification
            v-model="visibleMap[t].value"
            :type="t"
            :message="t.charAt(0).toUpperCase() + t.slice(1)"
            :description="descriptions[t]"
            :duration="0"
            style="position:relative;top:auto;right:auto;bottom:auto;left:auto;"
          />
        </div>
      </div>
    \`
  })
}`,...h.parameters?.docs?.source},description:{story:`Click each button to trigger the corresponding notification type.`,...h.parameters?.docs?.description}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: true
    },
    docs: {
      source: {
        code: \`
<BNotification
  v-model="visible"
  placement="top-right"
  message="Top Right"
  description="Notification in the top-right corner."
/>
        \`
      }
    }
  },
  render: () => ({
    components: {
      BNotification
    },
    setup() {
      const placements = Object.values(BNotificationPlacement);
      const visibleMap = Object.fromEntries(placements.map(p => [p, ref(false)]));
      function show(placement: string) {
        visibleMap[placement].value = true;
      }
      return {
        placements,
        visibleMap,
        show,
        btnStyle
      };
    },
    template: \`
      <div style="display:flex;flex-wrap:wrap;gap:0.75rem;">
        <div v-for="p in placements" :key="p">
          <button :style="btnStyle" @click="show(p)">{{ p }}</button>
          <BNotification
            v-model="visibleMap[p].value"
            :placement="p"
            type="info"
            :message="p"
            description="Click the × or wait for auto-close."
            :duration="4.5"
          />
        </div>
      </div>
    \`
  })
}`,...g.parameters?.docs?.source},description:{story:`Four placement options - click each button to see the notification appear
in the corresponding corner of the viewport.`,...g.parameters?.docs?.description}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: true
    },
    docs: {
      source: {
        code: \`
<script setup>
const visible = ref(false);
<\/script>
<template>
  <button @click="visible = !visible">Toggle</button>
  <BNotification
    v-model="visible"
    type="info"
    message="Controlled"
    description="Controlled via v-model."
    :duration="0"
  />
</template>
        \`
      }
    }
  },
  render: () => ({
    components: {
      BNotification
    },
    setup() {
      const visible = ref(false);
      return {
        visible,
        btnStyle
      };
    },
    template: \`
      <div>
        <button :style="btnStyle" data-testid="toggle-btn" @click="visible = !visible">
          {{ visible ? 'Hide' : 'Show' }} notification
        </button>
        <BNotification
          v-model="visible"
          type="info"
          message="Controlled Notification"
          description="This notification is controlled via v-model (duration=0)."
          :duration="0"
          style="position:relative;top:auto;right:auto;bottom:auto;left:auto;"
        />
      </div>
    \`
  })
}`,..._.parameters?.docs?.source},description:{story:"Controlled visibility via `v-model`. The parent owns the visible state.",..._.parameters?.docs?.description}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: true
    },
    docs: {
      source: {
        code: \`
<BNotification v-model="visible" type="success" message="Success" description="File uploaded.">
  <template #btn>
    <button @click="visible = false">Dismiss</button>
    <button @click="doSomething">View File</button>
  </template>
</BNotification>
        \`
      }
    }
  },
  render: () => ({
    components: {
      BNotification
    },
    setup() {
      const visible = ref(false);
      return {
        visible,
        btnStyle
      };
    },
    template: \`
      <div>
        <button :style="btnStyle" @click="visible = true">Show with Action</button>
        <BNotification
          v-model="visible"
          type="success"
          message="File Uploaded"
          description="Your file has been uploaded successfully."
          :duration="0"
          style="position:relative;top:auto;right:auto;bottom:auto;left:auto;"
        >
          <template #btn>
            <div style="display:flex;gap:0.5rem;margin-top:0.25rem;">
              <button :style="btnStyle" @click="visible = false">Dismiss</button>
              <button :style="btnStyle" style="color:oklch(62.3% 0.214 259.815);">View File</button>
            </div>
          </template>
        </BNotification>
      </div>
    \`
  })
}`,...v.parameters?.docs?.source},description:{story:"Custom action buttons can be placed below the description using the `btn` slot.",...v.parameters?.docs?.description}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: true
    },
    docs: {
      source: {
        code: \`
<BNotification v-model="visible" message="Custom Icon">
  <template #icon>
    <span style="font-size:1.5rem;">🎉</span>
  </template>
</BNotification>
        \`
      }
    }
  },
  render: () => ({
    components: {
      BNotification
    },
    setup() {
      const visible = ref(false);
      return {
        visible,
        btnStyle
      };
    },
    template: \`
      <div>
        <button :style="btnStyle" @click="visible = true">Show Custom Icon</button>
        <BNotification
          v-model="visible"
          message="Custom Icon Notification"
          description="The icon has been overridden via the icon slot."
          :duration="0"
          style="position:relative;top:auto;right:auto;bottom:auto;left:auto;"
        >
          <template #icon>
            <span style="font-size:1.5rem;line-height:1;" aria-hidden="true">🎉</span>
          </template>
        </BNotification>
      </div>
    \`
  })
}`,...y.parameters?.docs?.source},description:{story:"Override the built-in type icon with a custom one via the `icon` slot.",...y.parameters?.docs?.description}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: true
    },
    docs: {
      source: {
        code: \`<BNotification v-model="visible" type="info" message="No Icon" :show-icon="false" />\`
      }
    }
  },
  render: () => ({
    components: {
      BNotification
    },
    setup() {
      const visible = ref(false);
      return {
        visible,
        btnStyle
      };
    },
    template: \`
      <div>
        <button :style="btnStyle" @click="visible = true">Show (no icon)</button>
        <BNotification
          v-model="visible"
          type="info"
          message="Notification without icon"
          description="showIcon=false suppresses the built-in icon."
          :show-icon="false"
          :duration="0"
          style="position:relative;top:auto;right:auto;bottom:auto;left:auto;"
        />
      </div>
    \`
  })
}`,...b.parameters?.docs?.source},description:{story:"Set `showIcon=false` to suppress the built-in status icon even when `type` is set.",...b.parameters?.docs?.description}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  name: 'Accessibility (roles, keyboard & focus)',
  parameters: {
    controls: {
      disable: true
    },
    docs: {
      description: {
        story: 'Click **"Show All"** to trigger every type. ' + 'Error and warning use \`role="alert"\` with \`aria-live="assertive"\`, ' + 'while info and success use \`role="status"\` with \`aria-live="polite"\`. ' + 'The close button is labelled \`aria-label="Close notification"\` and receives focus when the notification opens. ' + 'Press <kbd>Escape</kbd> to dismiss.'
      }
    }
  },
  render: () => ({
    components: {
      BNotification
    },
    setup() {
      const visError = ref(false);
      const visWarning = ref(false);
      const visInfo = ref(false);
      const visSuccess = ref(false);
      function showAll() {
        visError.value = true;
        visWarning.value = true;
        visInfo.value = true;
        visSuccess.value = true;
      }
      return {
        visError,
        visWarning,
        visInfo,
        visSuccess,
        showAll,
        btnStyle
      };
    },
    template: \`
      <div style="display:flex;flex-direction:column;gap:1rem;align-items:flex-start;">
        <button :style="btnStyle" data-testid="show-all-btn" @click="showAll">Show All</button>
        <BNotification v-model="visError"   type="error"   message="Error"   description="Error (role=alert, assertive)"   :duration="0" style="position:relative;top:auto;right:auto;bottom:auto;left:auto;" />
        <BNotification v-model="visWarning" type="warning" message="Warning" description="Warning (role=alert, assertive)" :duration="0" style="position:relative;top:auto;right:auto;bottom:auto;left:auto;" />
        <BNotification v-model="visInfo"    type="info"    message="Info"    description="Info (role=status, polite)"       :duration="0" style="position:relative;top:auto;right:auto;bottom:auto;left:auto;" />
        <BNotification v-model="visSuccess" type="success" message="Success" description="Success (role=status, polite)"    :duration="0" style="position:relative;top:auto;right:auto;bottom:auto;left:auto;" />
      </div>
    \`
  }),
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);

    // Initially no notifications are visible
    expect(document.querySelectorAll('.b-notification').length).toBe(0);

    // Click "Show All"
    const showAllBtn = canvas.getByTestId('show-all-btn');
    await userEvent.click(showAllBtn);
    await waitFor(() => {
      expect(document.querySelectorAll('.b-notification').length).toBe(4);
    });
    const notifications = document.querySelectorAll('.b-notification');

    // Verify ARIA roles
    expect(notifications[0].getAttribute('role')).toBe('alert'); // error
    expect(notifications[1].getAttribute('role')).toBe('alert'); // warning
    expect(notifications[2].getAttribute('role')).toBe('status'); // info
    expect(notifications[3].getAttribute('role')).toBe('status'); // success

    // Verify aria-live
    expect(notifications[0].getAttribute('aria-live')).toBe('assertive');
    expect(notifications[1].getAttribute('aria-live')).toBe('assertive');
    expect(notifications[2].getAttribute('aria-live')).toBe('polite');
    expect(notifications[3].getAttribute('aria-live')).toBe('polite');

    // Verify aria-atomic
    for (const n of notifications) {
      expect(n.getAttribute('aria-atomic')).toBe('true');
    }

    // Verify icons are aria-hidden (decorative)
    const icons = document.querySelectorAll('.b-notification__icon');
    for (const icon of icons) {
      expect(icon.getAttribute('aria-hidden')).toBe('true');
    }

    // Verify icon SVGs have focusable=false
    const svgs = document.querySelectorAll('.b-notification__icon-svg');
    for (const svg of svgs) {
      expect(svg.getAttribute('focusable')).toBe('false');
    }

    // Verify close buttons are labelled
    const closeBtns = document.querySelectorAll('.b-notification__close');
    for (const btn of closeBtns) {
      expect(btn.getAttribute('aria-label')).toBe('Close notification');
      expect(btn.getAttribute('type')).toBe('button');
    }

    // Verify aria-labelledby links to message element
    for (const n of notifications) {
      const labelledby = n.getAttribute('aria-labelledby');
      expect(labelledby).toBeTruthy();
      const titleEl = n.querySelector('.b-notification__message');
      expect(titleEl?.id).toBe(labelledby);
    }

    // Verify aria-describedby links to description element
    for (const n of notifications) {
      const describedby = n.getAttribute('aria-describedby');
      expect(describedby).toBeTruthy();
      const descEl = n.querySelector('.b-notification__description');
      expect(descEl?.id).toBe(describedby);
    }

    // Keyboard: press Escape on first notification to close it
    const firstNotif = notifications[0] as HTMLElement;
    firstNotif.focus();
    await userEvent.keyboard('{Escape}');
    await waitFor(() => {
      expect(document.querySelectorAll('.b-notification').length).toBe(3);
    });
  }
}`,...x.parameters?.docs?.source},description:{story:'Demonstrates ARIA roles, live regions, focus management, and keyboard navigation.\n- `error` and `warning` → `role="alert"` (assertive live region)\n- `info` and `success` → `role="status"` (polite live region)\n- Close button: `aria-label="Close notification"`, focusable\n- Press **Escape** to dismiss a focused notification',...x.parameters?.docs?.description}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  name: 'Theming (CSS vars)',
  parameters: {
    controls: {
      disable: true
    },
    docs: {
      description: {
        story: 'Override \`--b-notification-*\` CSS custom properties on the \`.b-notification\` element ' + '(or any ancestor) to customise colours without touching component source.'
      },
      source: {
        code: \`
<style>
.my-custom-notification {
  --b-notification-bg: #1a1a2e;
  --b-notification-title-color: #eaeaea;
  --b-notification-desc-color: #a0a0c0;
  --b-notification-icon-color: #e94560;
  --b-notification-shadow: 0 4px 16px rgba(233, 69, 96, 0.3);
}
</style>

<BNotification
  v-model="visible"
  class="my-custom-notification"
  type="error"
  message="Custom Theme"
  description="Override CSS vars to brand this component."
  :duration="0"
/>
        \`
      }
    }
  },
  render: () => ({
    components: {
      BNotification
    },
    setup() {
      const visDefault = ref(false);
      const visCustom = ref(false);
      function showBoth() {
        visDefault.value = true;
        visCustom.value = true;
      }
      return {
        visDefault,
        visCustom,
        showBoth,
        btnStyle
      };
    },
    template: \`
      <div style="display:flex;flex-direction:column;gap:1rem;align-items:flex-start;">
        <button :style="btnStyle" @click="showBoth">Show Themed Notifications</button>

        <!-- Default theme -->
        <BNotification
          v-model="visDefault"
          type="info"
          message="Default Theme"
          description="This uses the built-in CSS variable defaults."
          :duration="0"
          style="position:relative;top:auto;right:auto;bottom:auto;left:auto;"
        />

        <!-- Custom theme via inline CSS vars -->
        <BNotification
          v-model="visCustom"
          type="error"
          message="Custom Theme"
          description="Override --b-notification-* CSS vars for full control."
          :duration="0"
          style="
            position:relative;top:auto;right:auto;bottom:auto;left:auto;
            --b-notification-bg: #1a1a2e;
            --b-notification-title-color: #eaeaea;
            --b-notification-desc-color: #a0a0c0;
            --b-notification-icon-color: #e94560;
            --b-notification-shadow: 0 4px 16px rgba(233,69,96,0.3);
          "
        />
      </div>
    \`
  })
}`,...S.parameters?.docs?.source},description:{story:"Override `--b-notification-*` CSS custom properties to customise\nthe appearance without touching component source.",...S.parameters?.docs?.description}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  name: 'Interaction – toggle flow',
  parameters: {
    controls: {
      disable: true
    },
    docs: {
      description: {
        story: 'Automated play function: clicks the toggle button to show a controlled notification, ' + 'verifies it appears with correct ARIA attributes, then hides it.'
      }
    }
  },
  render: () => ({
    components: {
      BNotification
    },
    setup() {
      const visible = ref(false);
      return {
        visible,
        btnStyle
      };
    },
    template: \`
      <div>
        <button :style="btnStyle" data-testid="toggle-btn" @click="visible = !visible">
          {{ visible ? 'Hide' : 'Show' }}
        </button>
        <BNotification
          v-model="visible"
          type="success"
          message="Toggled"
          description="Notification controlled via v-model."
          :duration="0"
        />
      </div>
    \`
  }),
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);

    // Initially closed
    expect(document.querySelector('.b-notification')).toBeNull();

    // Click to show
    const toggleBtn = canvas.getByTestId('toggle-btn');
    await userEvent.click(toggleBtn);
    await waitFor(() => {
      expect(document.querySelector('.b-notification')).toBeTruthy();
    });

    // Verify ARIA attributes
    const notif = document.querySelector('.b-notification')!;
    expect(notif.getAttribute('role')).toBe('status');
    expect(notif.getAttribute('aria-live')).toBe('polite');
    expect(notif.getAttribute('aria-atomic')).toBe('true');
    expect(notif.getAttribute('aria-labelledby')).toBeTruthy();

    // Click to hide
    await userEvent.click(toggleBtn);
    await waitFor(() => {
      expect(document.querySelector('.b-notification')).toBeNull();
    });
  }
}`,...C.parameters?.docs?.source},description:{story:`Automated interaction test: toggles the notification via button click.`,...C.parameters?.docs?.description}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  name: 'Interaction – close button',
  parameters: {
    controls: {
      disable: true
    },
    docs: {
      description: {
        story: 'Automated play function: opens a notification and dismisses it using the close button.'
      }
    }
  },
  render: () => ({
    components: {
      BNotification
    },
    setup() {
      const visible = ref(false);
      return {
        visible,
        btnStyle
      };
    },
    template: \`
      <div>
        <button :style="btnStyle" data-testid="open-btn" @click="visible = true">
          Open
        </button>
        <BNotification
          v-model="visible"
          type="warning"
          message="Close Me"
          description="Use the × button to dismiss."
          :duration="0"
        />
      </div>
    \`
  }),
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);

    // Open notification
    const openBtn = canvas.getByTestId('open-btn');
    await userEvent.click(openBtn);
    await waitFor(() => {
      expect(document.querySelector('.b-notification')).toBeTruthy();
    });
    const notif = document.querySelector('.b-notification')!;
    expect(notif.getAttribute('role')).toBe('alert');
    expect(notif.getAttribute('aria-live')).toBe('assertive');

    // Find and click close button
    const closeBtn = notif.querySelector('.b-notification__close') as HTMLElement;
    expect(closeBtn).toBeTruthy();
    expect(closeBtn.getAttribute('aria-label')).toBe('Close notification');
    await userEvent.click(closeBtn);
    await waitFor(() => {
      expect(document.querySelector('.b-notification')).toBeNull();
    });
  }
}`,...w.parameters?.docs?.source},description:{story:`Automated interaction test: opens a notification, then closes it via the ✕ button.`,...w.parameters?.docs?.description}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  name: 'Interaction – hover pause',
  parameters: {
    controls: {
      disable: true
    },
    docs: {
      description: {
        story: 'Click the button to show a notification that auto-closes in 30 s. ' + 'Hovering over it pauses the timer; leaving resumes it.'
      }
    }
  },
  render: () => ({
    components: {
      BNotification
    },
    setup() {
      const visible = ref(false);
      return {
        visible,
        btnStyle
      };
    },
    template: \`
      <div>
        <button :style="btnStyle" data-testid="show-btn" @click="visible = true">
          Show (hover to pause)
        </button>
        <BNotification
          v-model="visible"
          type="info"
          message="Hover to Pause"
          description="Hovering pauses the 30-second auto-close timer."
          :duration="30"
        />
      </div>
    \`
  }),
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    expect(document.querySelector('.b-notification')).toBeNull();
    const showBtn = canvas.getByTestId('show-btn');
    await userEvent.click(showBtn);
    await waitFor(() => {
      expect(document.querySelector('.b-notification')).toBeTruthy();
    });
    const notif = document.querySelector('.b-notification')!;
    expect(notif.classList.contains('b-notification--info')).toBe(true);
    expect(notif.getAttribute('role')).toBe('status');

    // Hover over the notification (timer should pause)
    await userEvent.hover(notif as HTMLElement);
    expect(document.querySelector('.b-notification')).toBeTruthy();

    // Unhover
    await userEvent.unhover(notif as HTMLElement);
    expect(document.querySelector('.b-notification')).toBeTruthy();
  }
}`,...T.parameters?.docs?.source},description:{story:`Opens a notification and verifies it appears with correct attributes.
(Timer pause is verified in unit tests with fake timers.)`,...T.parameters?.docs?.description}}},E=[`Playground`,`AllTypes`,`AllPlacements`,`Controlled`,`WithAction`,`CustomIcon`,`WithoutIcon`,`Accessibility`,`Theming`,`InteractionToggle`,`InteractionClose`,`InteractionHoverPause`]}))();export{x as Accessibility,g as AllPlacements,h as AllTypes,_ as Controlled,y as CustomIcon,w as InteractionClose,T as InteractionHoverPause,C as InteractionToggle,m as Playground,S as Theming,v as WithAction,b as WithoutIcon,E as __namedExportsOrder,f as default};