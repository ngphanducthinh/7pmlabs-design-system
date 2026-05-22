import{n as e}from"./chunk-BneVvdWh.js";import{K as t,X as n,Z as r,i}from"./iframe-inu_PjYR.js";import{A as a,b as o,y as s}from"./types-CV_3xB-y.js";import{Ct as c,R as l,t as u}from"./components-Da5-2MKL.js";var d,f,p,m,h,g,_,v,y,b,x,S,C,w,T,E,D,O,k,A,j,M;e((()=>{u(),a(),i(),{expect:d,userEvent:f,waitFor:p,within:m}=__STORYBOOK_MODULE_TEST__,h={title:`Feedback/Popconfirm`,component:l,tags:[`autodocs`],argTypes:{title:{control:`text`,description:`The confirmation question or text shown in the popconfirm.`},description:{control:`text`,description:`Additional description below the title.`},okText:{control:`text`,description:`Text of the confirm button.`,table:{defaultValue:{summary:`Yes`}}},cancelText:{control:`text`,description:`Text of the cancel button.`,table:{defaultValue:{summary:`No`}}},okType:{control:`select`,options:[`primary`,`default`,`dashed`,`text`,`link`],description:`Button type of the confirm button.`,table:{defaultValue:{summary:`primary`}}},disabled:{control:`boolean`,description:`Whether the popconfirm is disabled.`,table:{defaultValue:{summary:`false`}}},showCancel:{control:`boolean`,description:`Whether to show the cancel button.`,table:{defaultValue:{summary:`true`}}},trigger:{control:`select`,options:Object.values(o),description:`The event that triggers the popconfirm.`,table:{defaultValue:{summary:o.Click}}},placement:{control:`select`,options:Object.values(s),description:`Placement of the popconfirm relative to the target.`,table:{defaultValue:{summary:s.TopCenter}}},arrow:{control:`boolean`,description:`Whether the popconfirm has an arrow.`,table:{defaultValue:{summary:`true`}}},mouseEnterDelay:{control:`number`,description:`Delay in ms before showing on mouseenter.`,table:{defaultValue:{summary:`100`}}},mouseLeaveDelay:{control:`number`,description:`Delay in ms before hiding on mouseleave.`,table:{defaultValue:{summary:`100`}}},destroyTooltipOnHide:{control:`boolean`,description:`Destroy popconfirm DOM when hidden.`,table:{defaultValue:{summary:`false`}}},zIndex:{control:`number`,description:`z-index of the popconfirm.`,table:{defaultValue:{summary:`1060`}}},modelValue:{control:`boolean`,description:`Controlled visibility (bind with v-model).`,table:{category:`Two-Way Binding Props`}}},parameters:{docs:{description:{component:`The <code>BPopconfirm</code> component displays a confirmation popup before executing an action.<br><br>It uses the native HTML <code>popover</code> attribute and CSS Anchor Positioning for overlay management.<br>Supports 12 placements, three trigger modes, customizable buttons, focus trapping, and full accessibility.`}}}},g={args:{title:`Are you sure you want to delete this?`,description:`This action cannot be undone.`,okText:`Yes`,cancelText:`No`,okType:`primary`,trigger:`click`,placement:`top-center`,arrow:!0,disabled:!1,showCancel:!0,destroyTooltipOnHide:!1,zIndex:1060},render:e=>({components:{BButton:c,BPopconfirm:l},setup(){let i=n(e.modelValue??void 0);t(r(()=>e.modelValue),e=>{i.value=e});function a(){console.log(`Confirmed!`)}function o(){console.log(`Cancelled!`)}return{args:e,open:i,onConfirm:a,onCancel:o}},template:`
      <div style="padding: 6rem; display: flex; justify-content: center;">
        <BPopconfirm v-bind="args" v-model="open" @confirm="onConfirm" @cancel="onCancel">
          <BButton>Delete</BButton>
        </BPopconfirm>
      </div>
    `}),parameters:{a11y:{test:`off`}}},_={name:`All Placements`,parameters:{controls:{disable:!0},a11y:{test:`off`},docs:{source:{code:`
<BPopconfirm title="Confirm?" placement="top-left"><BButton>TL</BButton></BPopconfirm>
<BPopconfirm title="Confirm?" placement="top-center"><BButton>TC</BButton></BPopconfirm>
<!-- … 12 placements total -->
        `}}},render:()=>({components:{BButton:c,BPopconfirm:l},template:`
      <div style="padding: 8rem 4rem; display: grid; grid-template-columns: repeat(4, 1fr); gap: 2rem; justify-items: center;">
        <BPopconfirm title="Top Left?" placement="top-left"><BButton>Top Left</BButton></BPopconfirm>
        <BPopconfirm title="Top Center?" placement="top-center"><BButton>Top Center</BButton></BPopconfirm>
        <BPopconfirm title="Top Right?" placement="top-right"><BButton>Top Right</BButton></BPopconfirm>
        <div></div>

        <BPopconfirm title="Left Top?" placement="left-top"><BButton>Left Top</BButton></BPopconfirm>
        <div></div>
        <div></div>
        <BPopconfirm title="Right Top?" placement="right-top"><BButton>Right Top</BButton></BPopconfirm>

        <BPopconfirm title="Left Center?" placement="left-center"><BButton>Left Center</BButton></BPopconfirm>
        <div></div>
        <div></div>
        <BPopconfirm title="Right Center?" placement="right-center"><BButton>Right Center</BButton></BPopconfirm>

        <BPopconfirm title="Left Bottom?" placement="left-bottom"><BButton>Left Bottom</BButton></BPopconfirm>
        <div></div>
        <div></div>
        <BPopconfirm title="Right Bottom?" placement="right-bottom"><BButton>Right Bottom</BButton></BPopconfirm>

        <div></div>
        <BPopconfirm title="Bottom Left?" placement="bottom-left"><BButton>Bottom Left</BButton></BPopconfirm>
        <BPopconfirm title="Bottom Center?" placement="bottom-center"><BButton>Bottom Center</BButton></BPopconfirm>
        <BPopconfirm title="Bottom Right?" placement="bottom-right"><BButton>Bottom Right</BButton></BPopconfirm>
      </div>
    `})},v={name:`Button Variants`,parameters:{controls:{disable:!0},a11y:{test:`off`}},render:()=>({components:{BButton:c,BPopconfirm:l},template:`
      <div style="padding: 6rem; display: flex; gap: 2rem; justify-content: center;">
        <BPopconfirm title="Delete?" ok-type="primary"><BButton>Primary</BButton></BPopconfirm>
        <BPopconfirm title="Delete?" ok-type="default"><BButton>Default</BButton></BPopconfirm>
        <BPopconfirm title="Delete?" ok-type="dashed"><BButton>Dashed</BButton></BPopconfirm>
        <BPopconfirm title="Delete?" ok-type="text"><BButton>Text</BButton></BPopconfirm>
        <BPopconfirm title="Delete?" ok-type="link"><BButton>Link</BButton></BPopconfirm>
      </div>
    `})},y={name:`With Description`,parameters:{controls:{disable:!0},a11y:{test:`off`}},render:()=>({components:{BButton:c,BPopconfirm:l},template:`
      <div style="padding: 6rem; display: flex; gap: 2rem; justify-content: center;">
        <BPopconfirm title="Delete this file?" description="This action cannot be undone. The file will be permanently removed.">
          <BButton>Delete File</BButton>
        </BPopconfirm>
      </div>
    `})},b={name:`Custom Button Text`,parameters:{controls:{disable:!0},a11y:{test:`off`}},render:()=>({components:{BButton:c,BPopconfirm:l},template:`
      <div style="padding: 6rem; display: flex; gap: 2rem; justify-content: center;">
        <BPopconfirm title="Discard changes?" ok-text="Discard" cancel-text="Keep Editing">
          <BButton>Close Editor</BButton>
        </BPopconfirm>
        <BPopconfirm title="Submit form?" ok-text="Submit" :show-cancel="false">
          <BButton>Quick Submit</BButton>
        </BPopconfirm>
      </div>
    `})},x={name:`Disabled`,parameters:{controls:{disable:!0},a11y:{test:`off`}},render:()=>({components:{BButton:c,BPopconfirm:l},template:`
      <div style="padding: 6rem; display: flex; gap: 2rem; justify-content: center;">
        <BPopconfirm title="Delete?" :disabled="true">
          <BButton>Disabled Popconfirm</BButton>
        </BPopconfirm>
        <BPopconfirm title="Delete?" :disabled="false">
          <BButton>Enabled Popconfirm</BButton>
        </BPopconfirm>
      </div>
    `})},S={name:`Accessibility (roles & keyboard)`,parameters:{controls:{disable:!0},a11y:{test:`error`,context:{include:[`.b-popconfirm__toggle`,`.b-popconfirm__content`]}},docs:{description:{story:'The popconfirm uses `role="dialog"` with `aria-labelledby` pointing to the title and `aria-describedby` to the description. Focus is trapped within the popconfirm buttons. The icon and arrow are `aria-hidden="true"`. Escape key dismisses the popconfirm and returns focus.\n\n**Testing:** axe-core runs after the play function. Manual ARIA assertions provide defense-in-depth.'}}},render:()=>({components:{BButton:c,BPopconfirm:l},template:`
      <div style="padding: 6rem; display: flex; justify-content: center;">
        <BPopconfirm
          title="Delete this item?"
          description="This action is irreversible."
          data-testid="a11y-popconfirm"
        >
          <BButton data-testid="a11y-trigger">Delete</BButton>
        </BPopconfirm>
      </div>
    `}),play:async({canvasElement:e})=>{let t=m(e).getByTestId(`a11y-trigger`);await f.click(t),await p(()=>{d(document.querySelector(`.b-popconfirm__content[role="dialog"]`)).toBeTruthy()});let n=document.querySelector(`.b-popconfirm__content[role="dialog"]`);d(n.getAttribute(`role`)).toBe(`dialog`),d(n.getAttribute(`aria-modal`)).toBe(`false`);let r=n.getAttribute(`aria-labelledby`);d(r).toBeTruthy();let i=document.getElementById(r);d(i).toBeTruthy(),d(i.textContent).toBe(`Delete this item?`);let a=n.getAttribute(`aria-describedby`);d(a).toBeTruthy();let o=document.getElementById(a);d(o).toBeTruthy(),d(o.textContent).toBe(`This action is irreversible.`);let s=n.querySelector(`.b-popconfirm__icon`);d(s).toBeTruthy(),d(s.getAttribute(`aria-hidden`)).toBe(`true`);let c=n.querySelector(`.b-popconfirm__arrow`);c&&d(c.getAttribute(`aria-hidden`)).toBe(`true`),d(n.querySelectorAll(`.b-popconfirm__btn`).length).toBe(2),await f.keyboard(`{Escape}`),await p(()=>{d(document.querySelector(`.b-popconfirm__content:popover-open`)).toBeNull()}),await f.click(t),await p(()=>{d(document.querySelector(`.b-popconfirm__content[role="dialog"]`)).toBeTruthy()})}},C={name:`Interaction – confirm flow`,parameters:{controls:{disable:!0},a11y:{test:`off`},docs:{description:{story:`Opens popconfirm, clicks confirm button, verifies it closes.`}}},render:()=>({components:{BButton:c,BPopconfirm:l},setup(){let e=n(`idle`);function t(){e.value=`confirmed`}function r(){e.value=`cancelled`}return{status:e,onConfirm:t,onCancel:r}},template:`
      <div style="padding: 6rem; display: flex; gap: 2rem; justify-content: center; align-items: center;">
        <BPopconfirm title="Proceed?" @confirm="onConfirm" @cancel="onCancel">
          <BButton data-testid="confirm-trigger">Action</BButton>
        </BPopconfirm>
        <span data-testid="status">{{ status }}</span>
      </div>
    `}),play:async({canvasElement:e})=>{let t=m(e),n=t.getByTestId(`confirm-trigger`);await f.click(n),await p(()=>{d(document.querySelector(`.b-popconfirm__content[role="dialog"]`)).toBeTruthy()});let r=document.querySelectorAll(`.b-popconfirm__btn`);await f.click(r[1]),await p(()=>{d(t.getByTestId(`status`).textContent).toBe(`confirmed`)})}},w={name:`Interaction – cancel flow`,parameters:{controls:{disable:!0},a11y:{test:`off`},docs:{description:{story:`Opens popconfirm, clicks cancel button, verifies it closes.`}}},render:()=>({components:{BButton:c,BPopconfirm:l},setup(){let e=n(`idle`);function t(){e.value=`confirmed`}function r(){e.value=`cancelled`}return{status:e,onConfirm:t,onCancel:r}},template:`
      <div style="padding: 6rem; display: flex; gap: 2rem; justify-content: center; align-items: center;">
        <BPopconfirm title="Proceed?" @confirm="onConfirm" @cancel="onCancel">
          <BButton data-testid="cancel-trigger">Action</BButton>
        </BPopconfirm>
        <span data-testid="cancel-status">{{ status }}</span>
      </div>
    `}),play:async({canvasElement:e})=>{let t=m(e),n=t.getByTestId(`cancel-trigger`);await f.click(n),await p(()=>{d(document.querySelector(`.b-popconfirm__content[role="dialog"]`)).toBeTruthy()});let r=document.querySelectorAll(`.b-popconfirm__btn`);await f.click(r[0]),await p(()=>{d(t.getByTestId(`cancel-status`).textContent).toBe(`cancelled`)})}},T={name:`Interaction – keyboard Escape`,parameters:{controls:{disable:!0},a11y:{test:`off`},docs:{description:{story:`Opens popconfirm via click, then presses Escape to close it.`}}},render:()=>({components:{BButton:c,BPopconfirm:l},template:`
      <div style="padding: 6rem; display: flex; justify-content: center;">
        <BPopconfirm title="Are you sure?">
          <BButton data-testid="esc-trigger">Open Popconfirm</BButton>
        </BPopconfirm>
      </div>
    `}),play:async({canvasElement:e})=>{let t=m(e).getByTestId(`esc-trigger`);await f.click(t),await p(()=>{d(document.querySelector(`.b-popconfirm__content[role="dialog"]`)).toBeTruthy()}),await f.keyboard(`{Escape}`),await p(()=>{d(document.querySelector(`.b-popconfirm__content:popover-open`)).toBeNull()})}},E={name:`Theming (CSS vars)`,parameters:{controls:{disable:!0},a11y:{test:`off`},docs:{description:{story:"Override `--b-popconfirm-*` CSS custom properties to customize the popconfirm appearance. All tokens are defined on `:root` and can be scoped per element."},source:{code:`
<style>
.my-custom-popconfirm {
  --b-popconfirm-bg: #1a1a2e;
  --b-popconfirm-color: #eaeaea;
  --b-popconfirm-border-radius: 1rem;
  --b-popconfirm-icon-color: #faad14;
  --b-popconfirm-btn-primary-bg: #e74c3c;
}
</style>
        `}}},render:()=>({components:{BButton:c,BPopconfirm:l},template:`
      <div style="padding: 6rem; display: flex; gap: 2rem; justify-content: center;">
        <BPopconfirm title="Default theme. Delete?">
          <BButton>Default</BButton>
        </BPopconfirm>
        <div style="--b-popconfirm-bg: #1a1a2e; --b-popconfirm-color: #eaeaea; --b-popconfirm-arrow-color: #1a1a2e; --b-popconfirm-border-radius: 1rem; --b-popconfirm-btn-primary-bg: #e74c3c; --b-popconfirm-icon-color: #faad14;">
          <BPopconfirm title="Custom theme. Delete?">
            <BButton>Custom</BButton>
          </BPopconfirm>
        </div>
        <div style="--b-popconfirm-border-radius: 999px; --b-popconfirm-padding-x: 1.25rem; --b-popconfirm-btn-border-radius: 999px;">
          <BPopconfirm title="Rounded. Delete?">
            <BButton>Pill</BButton>
          </BPopconfirm>
        </div>
      </div>
    `})},D={name:`Edge case – controlled v-model`,parameters:{controls:{disable:!0},a11y:{test:`off`},docs:{description:{story:`Popconfirm visibility is controlled externally via v-model.`}}},render:()=>({components:{BButton:c,BPopconfirm:l},setup(){return{open:n(!1)}},template:`
      <div style="padding: 6rem; display: flex; gap: 2rem; justify-content: center; align-items: center;">
        <BButton @click="open = !open" data-testid="external-toggle">
          {{ open ? 'Hide' : 'Show' }} Popconfirm
        </BButton>
        <BPopconfirm v-model="open" title="Controlled popconfirm?">
          <span style="padding: 0.5rem; border: 1px dashed #ccc; border-radius: 0.25rem;">Target</span>
        </BPopconfirm>
        <span>Open: {{ open }}</span>
      </div>
    `}),play:async({canvasElement:e})=>{let t=m(e).getByTestId(`external-toggle`);await f.click(t),await p(()=>{d(document.querySelector(`.b-popconfirm__content[role="dialog"]`)).toBeTruthy()}),await f.click(t),await p(()=>{d(document.querySelector(`.b-popconfirm__content:popover-open`)).toBeNull()})}},O={name:`Edge case – long content`,parameters:{controls:{disable:!0},a11y:{test:`off`}},render:()=>({components:{BButton:c,BPopconfirm:l},template:`
      <div style="padding: 6rem; display: flex; justify-content: center;">
        <BPopconfirm
          title="Are you sure you want to permanently delete all selected items from the database including all associated metadata and references?"
          description="This is an extremely long description that is meant to test how the popconfirm handles overflow and wrapping of text content. It should wrap properly within the max-width constraint without breaking the layout or overflowing the container."
        >
          <BButton>Long Content</BButton>
        </BPopconfirm>
      </div>
    `})},k={name:`Snapshot – minimal`,parameters:{controls:{disable:!0},a11y:{test:`error`,context:{include:[`.b-popconfirm__toggle`,`.b-popconfirm__content`]}}},render:()=>({components:{BButton:c,BPopconfirm:l},template:`
      <div style="padding: 6rem; display: flex; justify-content: center;">
        <BPopconfirm title="Delete?">
          <BButton data-testid="open-snap">Open</BButton>
        </BPopconfirm>
      </div>
    `}),play:async({canvasElement:e})=>{let t=m(e);await f.click(t.getByTestId(`open-snap`)),await p(()=>{let e=document.querySelector(`.b-popconfirm__content`);d(e).toBeTruthy(),d(e.querySelector(`.b-popconfirm__inner`)).toBeTruthy(),d(e.querySelector(`.b-popconfirm__arrow`)).toBeTruthy(),d(e.querySelector(`.b-popconfirm__title`)).toBeTruthy(),d(e.querySelectorAll(`.b-popconfirm__btn`).length).toBe(2),d(e.getAttribute(`role`)).toBe(`dialog`)})}},A=[{token:`--b-popconfirm-bg`,defaultValue:`oklch(100% 0 0)`,description:`Background color of the popconfirm container.`},{token:`--b-popconfirm-color`,defaultValue:`oklch(20% 0.005 260 / 88%)`,description:`Primary text/title color.`},{token:`--b-popconfirm-description-color`,defaultValue:`oklch(20% 0.005 260 / 65%)`,description:`Color of the description text.`},{token:`--b-popconfirm-icon-color`,defaultValue:`oklch(75% 0.18 80)`,description:`Color of the leading warning icon.`},{token:`--b-popconfirm-arrow-color`,defaultValue:`oklch(100% 0 0)`,description:`Background color of the arrow (matches popup bg).`},{token:`--b-popconfirm-arrow-size`,defaultValue:`0.5rem`,description:`Size of the directional arrow.`},{token:`--b-popconfirm-shadow`,defaultValue:`0 6px 16px 0 oklch(0% 0 0 / 8%)`,description:`Box shadow under the popup.`},{token:`--b-popconfirm-border-radius`,defaultValue:`0.5rem`,description:`Corner radius of the popup container.`},{token:`--b-popconfirm-padding-x`,defaultValue:`1rem`,description:`Horizontal padding of the popup.`},{token:`--b-popconfirm-padding-y`,defaultValue:`0.75rem`,description:`Vertical padding of the popup.`},{token:`--b-popconfirm-gap`,defaultValue:`0.5rem`,description:`Gap between icon, content, and buttons.`},{token:`--b-popconfirm-font-size`,defaultValue:`0.875rem`,description:`Base font size inside the popup.`},{token:`--b-popconfirm-line-height`,defaultValue:`1.5`,description:`Line height of popup text.`},{token:`--b-popconfirm-title-font-weight`,defaultValue:`600`,description:`Font weight of the title.`},{token:`--b-popconfirm-max-width`,defaultValue:`20rem`,description:`Maximum width of the popup.`},{token:`--b-popconfirm-btn-font-size`,defaultValue:`0.75rem`,description:`Font size of the action buttons.`},{token:`--b-popconfirm-btn-padding-x`,defaultValue:`0.5rem`,description:`Horizontal padding of the action buttons.`},{token:`--b-popconfirm-btn-padding-y`,defaultValue:`0.25rem`,description:`Vertical padding of the action buttons.`},{token:`--b-popconfirm-btn-border-radius`,defaultValue:`0.375rem`,description:`Corner radius of action buttons.`},{token:`--b-popconfirm-btn-default-bg`,defaultValue:`oklch(100% 0 0)`,description:`Background color of the default (cancel) button.`},{token:`--b-popconfirm-btn-default-color`,defaultValue:`oklch(20% 0.005 260 / 88%)`,description:`Text color of the default (cancel) button.`},{token:`--b-popconfirm-btn-default-border`,defaultValue:`oklch(85% 0.005 260)`,description:`Border color of the default (cancel) button.`},{token:`--b-popconfirm-btn-primary-bg`,defaultValue:`oklch(62.3% 0.214 259.815)`,description:`Background color of the primary (confirm) button.`},{token:`--b-popconfirm-btn-primary-color`,defaultValue:`oklch(100% 0 0)`,description:`Text color of the primary (confirm) button.`},{token:`--b-popconfirm-transition-duration`,defaultValue:`200ms`,description:`Open/close animation duration.`}],j={name:`Design Tokens`,parameters:{controls:{disable:!0},docs:{description:{story:`Reference table of every <code>--b-popconfirm-*</code> CSS custom property consumers can override to retheme the component.`}}},render:()=>({components:{BPopconfirm:l,BButton:c},setup:()=>({tokens:A}),template:`
      <div style="font-family:sans-serif;padding:1rem;max-width:1100px;margin:0 auto;">
        <h2 style="margin:0 0 8px;">BPopconfirm — Design Tokens</h2>
        <p style="margin:0 0 24px;color:#595959;">
          All tokens scoped to <code>.b-popconfirm</code>. Override inline on the trigger element or via a CSS class.
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
          Four tokens overridden inline (background, color, border, primary button bg).
        </p>
        <BPopconfirm
          title="Themed popconfirm"
          description="All colours driven by CSS custom properties."
          :style="{
            '--b-popconfirm-bg': 'oklch(96% 0.04 290)',
            '--b-popconfirm-color': 'oklch(35% 0.18 290)',
            '--b-popconfirm-arrow-color': 'oklch(96% 0.04 290)',
            '--b-popconfirm-btn-primary-bg': 'oklch(50% 0.18 290)',
          }"
        >
          <BButton>Hover me</BButton>
        </BPopconfirm>
      </div>
    `})},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    title: 'Are you sure you want to delete this?',
    description: 'This action cannot be undone.',
    okText: 'Yes',
    cancelText: 'No',
    okType: 'primary' as const,
    trigger: 'click' as const,
    placement: 'top-center' as const,
    arrow: true,
    disabled: false,
    showCancel: true,
    destroyTooltipOnHide: false,
    zIndex: 1060
  },
  render: (args: any) => ({
    components: {
      BButton,
      BPopconfirm
    },
    setup() {
      const open = ref(args.modelValue ?? undefined);
      const argsRef = toRef(() => args.modelValue);
      watch(argsRef, v => {
        open.value = v;
      });
      function onConfirm() {
        console.log('Confirmed!');
      }
      function onCancel() {
        console.log('Cancelled!');
      }
      return {
        args,
        open,
        onConfirm,
        onCancel
      };
    },
    template: \`
      <div style="padding: 6rem; display: flex; justify-content: center;">
        <BPopconfirm v-bind="args" v-model="open" @confirm="onConfirm" @cancel="onCancel">
          <BButton>Delete</BButton>
        </BPopconfirm>
      </div>
    \`
  }),
  parameters: {
    a11y: {
      test: 'off'
    }
  }
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  name: 'All Placements',
  parameters: {
    controls: {
      disable: true
    },
    a11y: {
      test: 'off'
    },
    docs: {
      source: {
        code: \`
<BPopconfirm title="Confirm?" placement="top-left"><BButton>TL</BButton></BPopconfirm>
<BPopconfirm title="Confirm?" placement="top-center"><BButton>TC</BButton></BPopconfirm>
<!-- … 12 placements total -->
        \`
      }
    }
  },
  render: () => ({
    components: {
      BButton,
      BPopconfirm
    },
    template: \`
      <div style="padding: 8rem 4rem; display: grid; grid-template-columns: repeat(4, 1fr); gap: 2rem; justify-items: center;">
        <BPopconfirm title="Top Left?" placement="top-left"><BButton>Top Left</BButton></BPopconfirm>
        <BPopconfirm title="Top Center?" placement="top-center"><BButton>Top Center</BButton></BPopconfirm>
        <BPopconfirm title="Top Right?" placement="top-right"><BButton>Top Right</BButton></BPopconfirm>
        <div></div>

        <BPopconfirm title="Left Top?" placement="left-top"><BButton>Left Top</BButton></BPopconfirm>
        <div></div>
        <div></div>
        <BPopconfirm title="Right Top?" placement="right-top"><BButton>Right Top</BButton></BPopconfirm>

        <BPopconfirm title="Left Center?" placement="left-center"><BButton>Left Center</BButton></BPopconfirm>
        <div></div>
        <div></div>
        <BPopconfirm title="Right Center?" placement="right-center"><BButton>Right Center</BButton></BPopconfirm>

        <BPopconfirm title="Left Bottom?" placement="left-bottom"><BButton>Left Bottom</BButton></BPopconfirm>
        <div></div>
        <div></div>
        <BPopconfirm title="Right Bottom?" placement="right-bottom"><BButton>Right Bottom</BButton></BPopconfirm>

        <div></div>
        <BPopconfirm title="Bottom Left?" placement="bottom-left"><BButton>Bottom Left</BButton></BPopconfirm>
        <BPopconfirm title="Bottom Center?" placement="bottom-center"><BButton>Bottom Center</BButton></BPopconfirm>
        <BPopconfirm title="Bottom Right?" placement="bottom-right"><BButton>Bottom Right</BButton></BPopconfirm>
      </div>
    \`
  })
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  name: 'Button Variants',
  parameters: {
    controls: {
      disable: true
    },
    a11y: {
      test: 'off'
    }
  },
  render: () => ({
    components: {
      BButton,
      BPopconfirm
    },
    template: \`
      <div style="padding: 6rem; display: flex; gap: 2rem; justify-content: center;">
        <BPopconfirm title="Delete?" ok-type="primary"><BButton>Primary</BButton></BPopconfirm>
        <BPopconfirm title="Delete?" ok-type="default"><BButton>Default</BButton></BPopconfirm>
        <BPopconfirm title="Delete?" ok-type="dashed"><BButton>Dashed</BButton></BPopconfirm>
        <BPopconfirm title="Delete?" ok-type="text"><BButton>Text</BButton></BPopconfirm>
        <BPopconfirm title="Delete?" ok-type="link"><BButton>Link</BButton></BPopconfirm>
      </div>
    \`
  })
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  name: 'With Description',
  parameters: {
    controls: {
      disable: true
    },
    a11y: {
      test: 'off'
    }
  },
  render: () => ({
    components: {
      BButton,
      BPopconfirm
    },
    template: \`
      <div style="padding: 6rem; display: flex; gap: 2rem; justify-content: center;">
        <BPopconfirm title="Delete this file?" description="This action cannot be undone. The file will be permanently removed.">
          <BButton>Delete File</BButton>
        </BPopconfirm>
      </div>
    \`
  })
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  name: 'Custom Button Text',
  parameters: {
    controls: {
      disable: true
    },
    a11y: {
      test: 'off'
    }
  },
  render: () => ({
    components: {
      BButton,
      BPopconfirm
    },
    template: \`
      <div style="padding: 6rem; display: flex; gap: 2rem; justify-content: center;">
        <BPopconfirm title="Discard changes?" ok-text="Discard" cancel-text="Keep Editing">
          <BButton>Close Editor</BButton>
        </BPopconfirm>
        <BPopconfirm title="Submit form?" ok-text="Submit" :show-cancel="false">
          <BButton>Quick Submit</BButton>
        </BPopconfirm>
      </div>
    \`
  })
}`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  name: 'Disabled',
  parameters: {
    controls: {
      disable: true
    },
    a11y: {
      test: 'off'
    }
  },
  render: () => ({
    components: {
      BButton,
      BPopconfirm
    },
    template: \`
      <div style="padding: 6rem; display: flex; gap: 2rem; justify-content: center;">
        <BPopconfirm title="Delete?" :disabled="true">
          <BButton>Disabled Popconfirm</BButton>
        </BPopconfirm>
        <BPopconfirm title="Delete?" :disabled="false">
          <BButton>Enabled Popconfirm</BButton>
        </BPopconfirm>
      </div>
    \`
  })
}`,...x.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  name: 'Accessibility (roles & keyboard)',
  parameters: {
    controls: {
      disable: true
    },
    a11y: {
      test: 'error',
      context: {
        include: ['.b-popconfirm__toggle', '.b-popconfirm__content']
      }
    },
    docs: {
      description: {
        story: 'The popconfirm uses \`role="dialog"\` with \`aria-labelledby\` pointing to the title and \`aria-describedby\` to the description. ' + 'Focus is trapped within the popconfirm buttons. ' + 'The icon and arrow are \`aria-hidden="true"\`. ' + 'Escape key dismisses the popconfirm and returns focus.\\n\\n' + '**Testing:** axe-core runs after the play function. Manual ARIA assertions provide defense-in-depth.'
      }
    }
  },
  render: () => ({
    components: {
      BButton,
      BPopconfirm
    },
    template: \`
      <div style="padding: 6rem; display: flex; justify-content: center;">
        <BPopconfirm
          title="Delete this item?"
          description="This action is irreversible."
          data-testid="a11y-popconfirm"
        >
          <BButton data-testid="a11y-trigger">Delete</BButton>
        </BPopconfirm>
      </div>
    \`
  }),
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);

    // Open popconfirm via click
    const trigger = canvas.getByTestId('a11y-trigger');
    await userEvent.click(trigger);
    await waitFor(() => {
      const dialog = document.querySelector('.b-popconfirm__content[role="dialog"]');
      expect(dialog).toBeTruthy();
    });
    const dialogEl = document.querySelector('.b-popconfirm__content[role="dialog"]')!;

    // role="dialog"
    expect(dialogEl.getAttribute('role')).toBe('dialog');

    // aria-modal="false"
    expect(dialogEl.getAttribute('aria-modal')).toBe('false');

    // aria-labelledby points to title
    const labelledBy = dialogEl.getAttribute('aria-labelledby');
    expect(labelledBy).toBeTruthy();
    const titleEl = document.getElementById(labelledBy!);
    expect(titleEl).toBeTruthy();
    expect(titleEl!.textContent).toBe('Delete this item?');

    // aria-describedby points to description
    const describedBy = dialogEl.getAttribute('aria-describedby');
    expect(describedBy).toBeTruthy();
    const descEl = document.getElementById(describedBy!);
    expect(descEl).toBeTruthy();
    expect(descEl!.textContent).toBe('This action is irreversible.');

    // Icon is aria-hidden
    const icon = dialogEl.querySelector('.b-popconfirm__icon');
    expect(icon).toBeTruthy();
    expect(icon!.getAttribute('aria-hidden')).toBe('true');

    // Arrow is aria-hidden
    const arrow = dialogEl.querySelector('.b-popconfirm__arrow');
    if (arrow) {
      expect(arrow.getAttribute('aria-hidden')).toBe('true');
    }

    // Buttons exist
    const buttons = dialogEl.querySelectorAll('.b-popconfirm__btn');
    expect(buttons.length).toBe(2);

    // Keyboard: Escape closes
    await userEvent.keyboard('{Escape}');
    await waitFor(() => {
      expect(document.querySelector('.b-popconfirm__content:popover-open')).toBeNull();
    });

    // Re-open for axe-core scan
    await userEvent.click(trigger);
    await waitFor(() => {
      expect(document.querySelector('.b-popconfirm__content[role="dialog"]')).toBeTruthy();
    });
  }
}`,...S.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  name: 'Interaction – confirm flow',
  parameters: {
    controls: {
      disable: true
    },
    a11y: {
      test: 'off'
    },
    docs: {
      description: {
        story: 'Opens popconfirm, clicks confirm button, verifies it closes.'
      }
    }
  },
  render: () => ({
    components: {
      BButton,
      BPopconfirm
    },
    setup() {
      const status = ref('idle');
      function onConfirm() {
        status.value = 'confirmed';
      }
      function onCancel() {
        status.value = 'cancelled';
      }
      return {
        status,
        onConfirm,
        onCancel
      };
    },
    template: \`
      <div style="padding: 6rem; display: flex; gap: 2rem; justify-content: center; align-items: center;">
        <BPopconfirm title="Proceed?" @confirm="onConfirm" @cancel="onCancel">
          <BButton data-testid="confirm-trigger">Action</BButton>
        </BPopconfirm>
        <span data-testid="status">{{ status }}</span>
      </div>
    \`
  }),
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const trigger = canvas.getByTestId('confirm-trigger');

    // Open
    await userEvent.click(trigger);
    await waitFor(() => {
      expect(document.querySelector('.b-popconfirm__content[role="dialog"]')).toBeTruthy();
    });

    // Click confirm (Yes button - second button)
    const buttons = document.querySelectorAll('.b-popconfirm__btn');
    await userEvent.click(buttons[1]);
    await waitFor(() => {
      expect(canvas.getByTestId('status').textContent).toBe('confirmed');
    });
  }
}`,...C.parameters?.docs?.source}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  name: 'Interaction – cancel flow',
  parameters: {
    controls: {
      disable: true
    },
    a11y: {
      test: 'off'
    },
    docs: {
      description: {
        story: 'Opens popconfirm, clicks cancel button, verifies it closes.'
      }
    }
  },
  render: () => ({
    components: {
      BButton,
      BPopconfirm
    },
    setup() {
      const status = ref('idle');
      function onConfirm() {
        status.value = 'confirmed';
      }
      function onCancel() {
        status.value = 'cancelled';
      }
      return {
        status,
        onConfirm,
        onCancel
      };
    },
    template: \`
      <div style="padding: 6rem; display: flex; gap: 2rem; justify-content: center; align-items: center;">
        <BPopconfirm title="Proceed?" @confirm="onConfirm" @cancel="onCancel">
          <BButton data-testid="cancel-trigger">Action</BButton>
        </BPopconfirm>
        <span data-testid="cancel-status">{{ status }}</span>
      </div>
    \`
  }),
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const trigger = canvas.getByTestId('cancel-trigger');

    // Open
    await userEvent.click(trigger);
    await waitFor(() => {
      expect(document.querySelector('.b-popconfirm__content[role="dialog"]')).toBeTruthy();
    });

    // Click cancel (No button - first button)
    const buttons = document.querySelectorAll('.b-popconfirm__btn');
    await userEvent.click(buttons[0]);
    await waitFor(() => {
      expect(canvas.getByTestId('cancel-status').textContent).toBe('cancelled');
    });
  }
}`,...w.parameters?.docs?.source}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  name: 'Interaction – keyboard Escape',
  parameters: {
    controls: {
      disable: true
    },
    a11y: {
      test: 'off'
    },
    docs: {
      description: {
        story: 'Opens popconfirm via click, then presses Escape to close it.'
      }
    }
  },
  render: () => ({
    components: {
      BButton,
      BPopconfirm
    },
    template: \`
      <div style="padding: 6rem; display: flex; justify-content: center;">
        <BPopconfirm title="Are you sure?">
          <BButton data-testid="esc-trigger">Open Popconfirm</BButton>
        </BPopconfirm>
      </div>
    \`
  }),
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const trigger = canvas.getByTestId('esc-trigger');
    await userEvent.click(trigger);
    await waitFor(() => {
      expect(document.querySelector('.b-popconfirm__content[role="dialog"]')).toBeTruthy();
    });
    await userEvent.keyboard('{Escape}');
    await waitFor(() => {
      expect(document.querySelector('.b-popconfirm__content:popover-open')).toBeNull();
    });
  }
}`,...T.parameters?.docs?.source}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  name: 'Theming (CSS vars)',
  parameters: {
    controls: {
      disable: true
    },
    a11y: {
      test: 'off'
    },
    docs: {
      description: {
        story: 'Override \`--b-popconfirm-*\` CSS custom properties to customize the popconfirm appearance. ' + 'All tokens are defined on \`:root\` and can be scoped per element.'
      },
      source: {
        code: \`
<style>
.my-custom-popconfirm {
  --b-popconfirm-bg: #1a1a2e;
  --b-popconfirm-color: #eaeaea;
  --b-popconfirm-border-radius: 1rem;
  --b-popconfirm-icon-color: #faad14;
  --b-popconfirm-btn-primary-bg: #e74c3c;
}
</style>
        \`
      }
    }
  },
  render: () => ({
    components: {
      BButton,
      BPopconfirm
    },
    template: \`
      <div style="padding: 6rem; display: flex; gap: 2rem; justify-content: center;">
        <BPopconfirm title="Default theme. Delete?">
          <BButton>Default</BButton>
        </BPopconfirm>
        <div style="--b-popconfirm-bg: #1a1a2e; --b-popconfirm-color: #eaeaea; --b-popconfirm-arrow-color: #1a1a2e; --b-popconfirm-border-radius: 1rem; --b-popconfirm-btn-primary-bg: #e74c3c; --b-popconfirm-icon-color: #faad14;">
          <BPopconfirm title="Custom theme. Delete?">
            <BButton>Custom</BButton>
          </BPopconfirm>
        </div>
        <div style="--b-popconfirm-border-radius: 999px; --b-popconfirm-padding-x: 1.25rem; --b-popconfirm-btn-border-radius: 999px;">
          <BPopconfirm title="Rounded. Delete?">
            <BButton>Pill</BButton>
          </BPopconfirm>
        </div>
      </div>
    \`
  })
}`,...E.parameters?.docs?.source}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  name: 'Edge case – controlled v-model',
  parameters: {
    controls: {
      disable: true
    },
    a11y: {
      test: 'off'
    },
    docs: {
      description: {
        story: 'Popconfirm visibility is controlled externally via v-model.'
      }
    }
  },
  render: () => ({
    components: {
      BButton,
      BPopconfirm
    },
    setup() {
      const open = ref(false);
      return {
        open
      };
    },
    template: \`
      <div style="padding: 6rem; display: flex; gap: 2rem; justify-content: center; align-items: center;">
        <BButton @click="open = !open" data-testid="external-toggle">
          {{ open ? 'Hide' : 'Show' }} Popconfirm
        </BButton>
        <BPopconfirm v-model="open" title="Controlled popconfirm?">
          <span style="padding: 0.5rem; border: 1px dashed #ccc; border-radius: 0.25rem;">Target</span>
        </BPopconfirm>
        <span>Open: {{ open }}</span>
      </div>
    \`
  }),
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const externalToggle = canvas.getByTestId('external-toggle');

    // Open via external button
    await userEvent.click(externalToggle);
    await waitFor(() => {
      expect(document.querySelector('.b-popconfirm__content[role="dialog"]')).toBeTruthy();
    });

    // Close via external button
    await userEvent.click(externalToggle);
    await waitFor(() => {
      expect(document.querySelector('.b-popconfirm__content:popover-open')).toBeNull();
    });
  }
}`,...D.parameters?.docs?.source}}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
  name: 'Edge case – long content',
  parameters: {
    controls: {
      disable: true
    },
    a11y: {
      test: 'off'
    }
  },
  render: () => ({
    components: {
      BButton,
      BPopconfirm
    },
    template: \`
      <div style="padding: 6rem; display: flex; justify-content: center;">
        <BPopconfirm
          title="Are you sure you want to permanently delete all selected items from the database including all associated metadata and references?"
          description="This is an extremely long description that is meant to test how the popconfirm handles overflow and wrapping of text content. It should wrap properly within the max-width constraint without breaking the layout or overflowing the container."
        >
          <BButton>Long Content</BButton>
        </BPopconfirm>
      </div>
    \`
  })
}`,...O.parameters?.docs?.source}}},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  name: 'Snapshot – minimal',
  parameters: {
    controls: {
      disable: true
    },
    a11y: {
      test: 'error',
      context: {
        include: ['.b-popconfirm__toggle', '.b-popconfirm__content']
      }
    }
  },
  render: () => ({
    components: {
      BButton,
      BPopconfirm
    },
    template: \`
      <div style="padding: 6rem; display: flex; justify-content: center;">
        <BPopconfirm title="Delete?">
          <BButton data-testid="open-snap">Open</BButton>
        </BPopconfirm>
      </div>
    \`
  }),
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    await userEvent.click(canvas.getByTestId('open-snap'));
    await waitFor(() => {
      const dialog = document.querySelector('.b-popconfirm__content');
      expect(dialog).toBeTruthy();
      expect(dialog!.querySelector('.b-popconfirm__inner')).toBeTruthy();
      expect(dialog!.querySelector('.b-popconfirm__arrow')).toBeTruthy();
      expect(dialog!.querySelector('.b-popconfirm__title')).toBeTruthy();
      expect(dialog!.querySelectorAll('.b-popconfirm__btn').length).toBe(2);
      expect(dialog!.getAttribute('role')).toBe('dialog');
    });
  }
}`,...k.parameters?.docs?.source}}},j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  name: 'Design Tokens',
  parameters: {
    controls: {
      disable: true
    },
    docs: {
      description: {
        story: 'Reference table of every <code>--b-popconfirm-*</code> CSS custom property ' + 'consumers can override to retheme the component.'
      }
    }
  },
  render: () => ({
    components: {
      BPopconfirm,
      BButton
    },
    setup: () => ({
      tokens: DESIGN_TOKENS
    }),
    template: \`
      <div style="font-family:sans-serif;padding:1rem;max-width:1100px;margin:0 auto;">
        <h2 style="margin:0 0 8px;">BPopconfirm — Design Tokens</h2>
        <p style="margin:0 0 24px;color:#595959;">
          All tokens scoped to <code>.b-popconfirm</code>. Override inline on the trigger element or via a CSS class.
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
          Four tokens overridden inline (background, color, border, primary button bg).
        </p>
        <BPopconfirm
          title="Themed popconfirm"
          description="All colours driven by CSS custom properties."
          :style="{
            '--b-popconfirm-bg': 'oklch(96% 0.04 290)',
            '--b-popconfirm-color': 'oklch(35% 0.18 290)',
            '--b-popconfirm-arrow-color': 'oklch(96% 0.04 290)',
            '--b-popconfirm-btn-primary-bg': 'oklch(50% 0.18 290)',
          }"
        >
          <BButton>Hover me</BButton>
        </BPopconfirm>
      </div>
    \`
  })
}`,...j.parameters?.docs?.source}}},M=[`Playground`,`AllPlacements`,`ButtonVariants`,`WithDescription`,`CustomButtonText`,`Disabled`,`Accessibility`,`InteractionConfirmFlow`,`InteractionCancelFlow`,`InteractionKeyboardEscape`,`Theming`,`EdgeCaseControlled`,`EdgeCaseLongContent`,`SnapshotMinimal`,`DesignTokens`]}))();export{S as Accessibility,_ as AllPlacements,v as ButtonVariants,b as CustomButtonText,j as DesignTokens,x as Disabled,D as EdgeCaseControlled,O as EdgeCaseLongContent,w as InteractionCancelFlow,C as InteractionConfirmFlow,T as InteractionKeyboardEscape,g as Playground,k as SnapshotMinimal,E as Theming,y as WithDescription,M as __namedExportsOrder,h as default};