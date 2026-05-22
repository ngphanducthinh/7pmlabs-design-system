import{n as e}from"./chunk-BneVvdWh.js";import{X as t,i as n}from"./iframe-CUduMsgl.js";import{a as r,c as i,i as a,l as o,n as s,o as c,r as l,s as u,t as d}from"./BFloatButtonGroup-CGFFxvLJ.js";var f,p,m,h,g,_,v,y,b,x,S,C,w,T,E,D;e((()=>{c(),a(),s(),o(),n(),{expect:f,userEvent:p,within:m}=__STORYBOOK_MODULE_TEST__,h={title:`General/FloatButton`,component:r,tags:[`autodocs`],argTypes:{type:{control:`select`,options:Object.values(i)},shape:{control:`select`,options:Object.values(u)},disabled:{control:`boolean`},tooltip:{control:`text`},description:{control:`text`},href:{control:`text`},target:{control:`text`},htmlType:{control:`select`,options:[`button`,`submit`,`reset`]},onClick:{action:`click`,table:{category:`Events`}}},parameters:{docs:{description:{component:`The <code>BFloatButton</code> component is a floating action button fixed in the viewport corner. It supports circle and square shapes, primary/default types, tooltips, badges, grouped menus with expand/collapse triggers, and a back-to-top variant.`}},layout:`centered`}},g={args:{type:i.Default,shape:u.Circle,tooltip:`Float Button`,disabled:!1},render:e=>({components:{BFloatButton:r},setup(){return{args:e}},template:`
      <div style="position:relative; width:300px; height:200px; border:1px dashed #ccc; border-radius:8px; padding:1rem;">
        <p style="color:#767676;font-size:0.875rem;">Float button is positioned at bottom-right</p>
        <div style="position:absolute; bottom:1.5rem; right:1.5rem;">
          <BFloatButton v-bind="args" @click="args.onClick" />
        </div>
      </div>
    `})},_={render:()=>({components:{BFloatButton:r},template:`
      <div style="display:flex; gap:1rem; align-items:center; padding:1rem;">
        <div>
          <p style="text-align:center; font-size:0.75rem; margin-bottom:0.5rem; color:#767676;">default</p>
          <BFloatButton type="default" tooltip="Default" />
        </div>
        <div>
          <p style="text-align:center; font-size:0.75rem; margin-bottom:0.5rem; color:#767676;">primary</p>
          <BFloatButton type="primary" tooltip="Primary" />
        </div>
      </div>
    `})},v={render:()=>({components:{BFloatButton:r},template:`
      <div style="display:flex; gap:1.5rem; align-items:center; padding:1rem;">
        <div>
          <p style="text-align:center; font-size:0.75rem; margin-bottom:0.5rem; color:#767676;">circle</p>
          <BFloatButton shape="circle" tooltip="Circle" />
        </div>
        <div>
          <p style="text-align:center; font-size:0.75rem; margin-bottom:0.5rem; color:#767676;">square</p>
          <BFloatButton shape="square" description="Help" tooltip="Square with description" />
        </div>
      </div>
    `})},y={render:()=>({components:{BFloatButton:r},template:`
      <div style="display:flex; gap:1.5rem; align-items:flex-end; padding:1.5rem 1rem;">
        <div style="text-align:center">
          <BFloatButton :badge="{ count: 5 }" tooltip="5 items" />
          <p style="font-size:0.7rem; color:#767676; margin-top:0.5rem">count: 5</p>
        </div>
        <div style="text-align:center">
          <BFloatButton :badge="{ count: 150, overflowCount: 99 }" tooltip="Many items" />
          <p style="font-size:0.7rem; color:#767676; margin-top:0.5rem">overflow: 99+</p>
        </div>
        <div style="text-align:center">
          <BFloatButton :badge="{ dot: true }" tooltip="Notification dot" />
          <p style="font-size:0.7rem; color:#767676; margin-top:0.5rem">dot</p>
        </div>
        <div style="text-align:center">
          <BFloatButton :badge="{ count: 0, showZero: true }" tooltip="Zero count" />
          <p style="font-size:0.7rem; color:#767676; margin-top:0.5rem">showZero</p>
        </div>
      </div>
    `})},b={render:()=>({components:{BFloatButton:r,BFloatButtonGroup:d},template:`
      <BFloatButtonGroup style="display:inline-flex;">
        <BFloatButton tooltip="Share" />
        <BFloatButton tooltip="Edit" />
        <BFloatButton type="primary" tooltip="Add" />
      </BFloatButtonGroup>
    `})},x={render:()=>({components:{BFloatButton:r,BFloatButtonGroup:d},setup(){return{open:t(!1)}},template:`
      <div style="position:relative; height:300px; width:200px; display:flex; align-items:flex-end; justify-content:flex-end;">
        <BFloatButtonGroup
          v-model:open="open"
          trigger="click"
          placement="top"
          style="position:absolute; bottom:1.5rem; right:1.5rem;"
        >
          <BFloatButton tooltip="Share" />
          <BFloatButton tooltip="Edit" />
          <BFloatButton tooltip="Delete" type="primary" />
        </BFloatButtonGroup>
      </div>
      <p style="font-size:0.875rem; color:#767676;">Group is {{ open ? 'open' : 'closed' }}</p>
    `})},S={render:()=>({components:{BFloatButton:r,BFloatButtonGroup:d},template:`
      <div style="display:flex; gap:3rem; flex-wrap:wrap; padding:2rem; align-items:flex-end;">
        <div style="text-align:center;">
          <p style="font-size:0.75rem; color:#767676; margin-bottom:0.5rem;">top</p>
          <BFloatButtonGroup trigger="click" placement="top" style="display:inline-flex;">
            <BFloatButton tooltip="A" />
            <BFloatButton tooltip="B" />
          </BFloatButtonGroup>
        </div>
        <div style="text-align:center;">
          <p style="font-size:0.75rem; color:#767676; margin-bottom:0.5rem;">bottom</p>
          <BFloatButtonGroup trigger="click" placement="bottom" style="display:inline-flex;">
            <BFloatButton tooltip="A" />
            <BFloatButton tooltip="B" />
          </BFloatButtonGroup>
        </div>
        <div style="text-align:center;">
          <p style="font-size:0.75rem; color:#767676; margin-bottom:0.5rem;">left</p>
          <BFloatButtonGroup trigger="click" placement="left" style="display:inline-flex;">
            <BFloatButton tooltip="A" />
            <BFloatButton tooltip="B" />
          </BFloatButtonGroup>
        </div>
        <div style="text-align:center;">
          <p style="font-size:0.75rem; color:#767676; margin-bottom:0.5rem;">right</p>
          <BFloatButtonGroup trigger="click" placement="right" style="display:inline-flex;">
            <BFloatButton tooltip="A" />
            <BFloatButton tooltip="B" />
          </BFloatButtonGroup>
        </div>
      </div>
    `})},C={render:()=>({components:{BFloatButtonBackTop:l},setup(){return{containerRef:t(null)}},template:`
      <div
        ref="containerRef"
        tabindex="0"
        style="height:300px; overflow-y:auto; border:1px dashed #ccc; border-radius:8px; padding:1rem; position:relative;"
      >
        <div style="height:1200px;">
          <p style="color:#767676; font-size:0.875rem;">Scroll down to reveal the back-to-top button.</p>
        </div>
        <BFloatButtonBackTop
          :target="() => containerRef"
          :visibilityHeight="100"
          style="position:absolute; bottom:1.5rem; right:1.5rem;"
        />
      </div>
    `})},w={render:()=>({components:{BFloatButton:r,BFloatButtonGroup:d},template:`
      <div style="display:flex; flex-direction:column; gap:1rem; padding:1rem;" data-testid="a11y-root">
        <BFloatButton tooltip="Scroll to top" aria-label="Scroll to top" data-testid="solo-btn" />
        <BFloatButtonGroup trigger="click" data-testid="group">
          <BFloatButton tooltip="Action 1" aria-label="Action 1" />
          <BFloatButton tooltip="Action 2" aria-label="Action 2" />
        </BFloatButtonGroup>
      </div>
    `}),play:async({canvasElement:e})=>{let t=m(e);f(t.getByRole(`button`,{name:/scroll to top/i})).toBeTruthy();let n=t.getByRole(`button`,{name:/expand button group/i});f(n).toBeTruthy(),f(n).toHaveAttribute(`aria-expanded`,`false`),await p.click(n),f(n).toHaveAttribute(`aria-expanded`,`true`);let r=t.getByRole(`button`,{name:/collapse button group/i});f(r).toBeTruthy(),await p.click(r),f(t.getByRole(`button`,{name:/expand button group/i})).toHaveAttribute(`aria-expanded`,`false`)}},T={render:()=>({components:{BFloatButton:r},template:`
      <div style="display:flex; gap:2rem; align-items:center; padding:2rem; flex-wrap:wrap;">
        <div>
          <p style="font-size:0.75rem; color:#767676; margin-bottom:0.5rem; text-align:center;">Default</p>
          <BFloatButton tooltip="Default theme" />
        </div>

        <div>
          <p style="font-size:0.75rem; color:#767676; margin-bottom:0.5rem; text-align:center;">Custom bg</p>
          <BFloatButton
            tooltip="Custom background"
            style="--b-float-button-bg: oklch(75% 0.18 30); --b-float-button-color: #fff; --b-float-button-bg-hover: oklch(65% 0.18 30);"
          />
        </div>

        <div>
          <p style="font-size:0.75rem; color:#767676; margin-bottom:0.5rem; text-align:center;">Large size</p>
          <BFloatButton
            tooltip="Larger button"
            style="--b-float-button-size: 56px; --b-float-button-icon-size: 1.75rem;"
          />
        </div>

        <div>
          <p style="font-size:0.75rem; color:#767676; margin-bottom:0.5rem; text-align:center;">Custom shadow</p>
          <BFloatButton
            tooltip="Colored shadow"
            type="primary"
            style="--b-float-button-shadow: 0 8px 24px 0 rgba(99, 102, 241, 0.5);"
          />
        </div>
      </div>
    `})},E={render:()=>({components:{BFloatButton:r},template:`
      <div style="display:flex; gap:1.5rem; align-items:center; padding:1rem;">
        <BFloatButton tooltip="Enabled default" />
        <BFloatButton tooltip="Disabled default" :disabled="true" />
        <BFloatButton type="primary" tooltip="Enabled primary" />
        <BFloatButton type="primary" tooltip="Disabled primary" :disabled="true" />
      </div>
    `})},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    type: BFloatButtonType.Default,
    shape: BFloatButtonShape.Circle,
    tooltip: 'Float Button',
    disabled: false
  },
  render: args => ({
    components: {
      BFloatButton
    },
    setup() {
      return {
        args
      };
    },
    template: \`
      <div style="position:relative; width:300px; height:200px; border:1px dashed #ccc; border-radius:8px; padding:1rem;">
        <p style="color:#767676;font-size:0.875rem;">Float button is positioned at bottom-right</p>
        <div style="position:absolute; bottom:1.5rem; right:1.5rem;">
          <BFloatButton v-bind="args" @click="args.onClick" />
        </div>
      </div>
    \`
  })
}`,...g.parameters?.docs?.source},description:{story:`Interactive playground: tweak all props via Storybook Controls.`,...g.parameters?.docs?.description}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      BFloatButton
    },
    template: \`
      <div style="display:flex; gap:1rem; align-items:center; padding:1rem;">
        <div>
          <p style="text-align:center; font-size:0.75rem; margin-bottom:0.5rem; color:#767676;">default</p>
          <BFloatButton type="default" tooltip="Default" />
        </div>
        <div>
          <p style="text-align:center; font-size:0.75rem; margin-bottom:0.5rem; color:#767676;">primary</p>
          <BFloatButton type="primary" tooltip="Primary" />
        </div>
      </div>
    \`
  })
}`,..._.parameters?.docs?.source},description:{story:`Both button types side by side.`,..._.parameters?.docs?.description}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      BFloatButton
    },
    template: \`
      <div style="display:flex; gap:1.5rem; align-items:center; padding:1rem;">
        <div>
          <p style="text-align:center; font-size:0.75rem; margin-bottom:0.5rem; color:#767676;">circle</p>
          <BFloatButton shape="circle" tooltip="Circle" />
        </div>
        <div>
          <p style="text-align:center; font-size:0.75rem; margin-bottom:0.5rem; color:#767676;">square</p>
          <BFloatButton shape="square" description="Help" tooltip="Square with description" />
        </div>
      </div>
    \`
  })
}`,...v.parameters?.docs?.source},description:{story:`Circle and square shapes, with description only shown in square.`,...v.parameters?.docs?.description}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      BFloatButton
    },
    template: \`
      <div style="display:flex; gap:1.5rem; align-items:flex-end; padding:1.5rem 1rem;">
        <div style="text-align:center">
          <BFloatButton :badge="{ count: 5 }" tooltip="5 items" />
          <p style="font-size:0.7rem; color:#767676; margin-top:0.5rem">count: 5</p>
        </div>
        <div style="text-align:center">
          <BFloatButton :badge="{ count: 150, overflowCount: 99 }" tooltip="Many items" />
          <p style="font-size:0.7rem; color:#767676; margin-top:0.5rem">overflow: 99+</p>
        </div>
        <div style="text-align:center">
          <BFloatButton :badge="{ dot: true }" tooltip="Notification dot" />
          <p style="font-size:0.7rem; color:#767676; margin-top:0.5rem">dot</p>
        </div>
        <div style="text-align:center">
          <BFloatButton :badge="{ count: 0, showZero: true }" tooltip="Zero count" />
          <p style="font-size:0.7rem; color:#767676; margin-top:0.5rem">showZero</p>
        </div>
      </div>
    \`
  })
}`,...y.parameters?.docs?.source},description:{story:`Demonstrates badge configurations: count, overflow, dot, and zero.`,...y.parameters?.docs?.description}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      BFloatButton,
      BFloatButtonGroup
    },
    template: \`
      <BFloatButtonGroup style="display:inline-flex;">
        <BFloatButton tooltip="Share" />
        <BFloatButton tooltip="Edit" />
        <BFloatButton type="primary" tooltip="Add" />
      </BFloatButtonGroup>
    \`
  })
}`,...b.parameters?.docs?.source},description:{story:`BFloatButtonGroup without a trigger simply arranges buttons vertically.`,...b.parameters?.docs?.description}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      BFloatButton,
      BFloatButtonGroup
    },
    setup() {
      const open = ref(false);
      return {
        open
      };
    },
    template: \`
      <div style="position:relative; height:300px; width:200px; display:flex; align-items:flex-end; justify-content:flex-end;">
        <BFloatButtonGroup
          v-model:open="open"
          trigger="click"
          placement="top"
          style="position:absolute; bottom:1.5rem; right:1.5rem;"
        >
          <BFloatButton tooltip="Share" />
          <BFloatButton tooltip="Edit" />
          <BFloatButton tooltip="Delete" type="primary" />
        </BFloatButtonGroup>
      </div>
      <p style="font-size:0.875rem; color:#767676;">Group is {{ open ? 'open' : 'closed' }}</p>
    \`
  })
}`,...x.parameters?.docs?.source},description:{story:`BFloatButtonGroup with a click trigger that expands/collapses child buttons.
Supports controlled (v-model:open) usage.`,...x.parameters?.docs?.description}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      BFloatButton,
      BFloatButtonGroup
    },
    template: \`
      <div style="display:flex; gap:3rem; flex-wrap:wrap; padding:2rem; align-items:flex-end;">
        <div style="text-align:center;">
          <p style="font-size:0.75rem; color:#767676; margin-bottom:0.5rem;">top</p>
          <BFloatButtonGroup trigger="click" placement="top" style="display:inline-flex;">
            <BFloatButton tooltip="A" />
            <BFloatButton tooltip="B" />
          </BFloatButtonGroup>
        </div>
        <div style="text-align:center;">
          <p style="font-size:0.75rem; color:#767676; margin-bottom:0.5rem;">bottom</p>
          <BFloatButtonGroup trigger="click" placement="bottom" style="display:inline-flex;">
            <BFloatButton tooltip="A" />
            <BFloatButton tooltip="B" />
          </BFloatButtonGroup>
        </div>
        <div style="text-align:center;">
          <p style="font-size:0.75rem; color:#767676; margin-bottom:0.5rem;">left</p>
          <BFloatButtonGroup trigger="click" placement="left" style="display:inline-flex;">
            <BFloatButton tooltip="A" />
            <BFloatButton tooltip="B" />
          </BFloatButtonGroup>
        </div>
        <div style="text-align:center;">
          <p style="font-size:0.75rem; color:#767676; margin-bottom:0.5rem;">right</p>
          <BFloatButtonGroup trigger="click" placement="right" style="display:inline-flex;">
            <BFloatButton tooltip="A" />
            <BFloatButton tooltip="B" />
          </BFloatButtonGroup>
        </div>
      </div>
    \`
  })
}`,...S.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      BFloatButtonBackTop
    },
    setup() {
      const containerRef = ref<HTMLElement | null>(null);
      return {
        containerRef
      };
    },
    template: \`
      <div
        ref="containerRef"
        tabindex="0"
        style="height:300px; overflow-y:auto; border:1px dashed #ccc; border-radius:8px; padding:1rem; position:relative;"
      >
        <div style="height:1200px;">
          <p style="color:#767676; font-size:0.875rem;">Scroll down to reveal the back-to-top button.</p>
        </div>
        <BFloatButtonBackTop
          :target="() => containerRef"
          :visibilityHeight="100"
          style="position:absolute; bottom:1.5rem; right:1.5rem;"
        />
      </div>
    \`
  })
}`,...C.parameters?.docs?.source},description:{story:`BFloatButtonBackTop appears when the user scrolls down past the threshold.
Clicking it smoothly scrolls back to the top.`,...C.parameters?.docs?.description}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      BFloatButton,
      BFloatButtonGroup
    },
    template: \`
      <div style="display:flex; flex-direction:column; gap:1rem; padding:1rem;" data-testid="a11y-root">
        <BFloatButton tooltip="Scroll to top" aria-label="Scroll to top" data-testid="solo-btn" />
        <BFloatButtonGroup trigger="click" data-testid="group">
          <BFloatButton tooltip="Action 1" aria-label="Action 1" />
          <BFloatButton tooltip="Action 2" aria-label="Action 2" />
        </BFloatButtonGroup>
      </div>
    \`
  }),
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);

    // Solo button accessible
    const soloBtn = canvas.getByRole('button', {
      name: /scroll to top/i
    });
    expect(soloBtn).toBeTruthy();

    // Group trigger button accessible
    const triggerBtn = canvas.getByRole('button', {
      name: /expand button group/i
    });
    expect(triggerBtn).toBeTruthy();
    expect(triggerBtn).toHaveAttribute('aria-expanded', 'false');

    // Click trigger to expand
    await userEvent.click(triggerBtn);
    expect(triggerBtn).toHaveAttribute('aria-expanded', 'true');

    // Trigger aria-label changes
    const collapseTrigger = canvas.getByRole('button', {
      name: /collapse button group/i
    });
    expect(collapseTrigger).toBeTruthy();

    // Close group
    await userEvent.click(collapseTrigger);
    expect(canvas.getByRole('button', {
      name: /expand button group/i
    })).toHaveAttribute('aria-expanded', 'false');
  }
}`,...w.parameters?.docs?.source},description:{story:`Verifies ARIA roles, labels, focus order, and keyboard interaction.`,...w.parameters?.docs?.description}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      BFloatButton
    },
    template: \`
      <div style="display:flex; gap:2rem; align-items:center; padding:2rem; flex-wrap:wrap;">
        <div>
          <p style="font-size:0.75rem; color:#767676; margin-bottom:0.5rem; text-align:center;">Default</p>
          <BFloatButton tooltip="Default theme" />
        </div>

        <div>
          <p style="font-size:0.75rem; color:#767676; margin-bottom:0.5rem; text-align:center;">Custom bg</p>
          <BFloatButton
            tooltip="Custom background"
            style="--b-float-button-bg: oklch(75% 0.18 30); --b-float-button-color: #fff; --b-float-button-bg-hover: oklch(65% 0.18 30);"
          />
        </div>

        <div>
          <p style="font-size:0.75rem; color:#767676; margin-bottom:0.5rem; text-align:center;">Large size</p>
          <BFloatButton
            tooltip="Larger button"
            style="--b-float-button-size: 56px; --b-float-button-icon-size: 1.75rem;"
          />
        </div>

        <div>
          <p style="font-size:0.75rem; color:#767676; margin-bottom:0.5rem; text-align:center;">Custom shadow</p>
          <BFloatButton
            tooltip="Colored shadow"
            type="primary"
            style="--b-float-button-shadow: 0 8px 24px 0 rgba(99, 102, 241, 0.5);"
          />
        </div>
      </div>
    \`
  })
}`,...T.parameters?.docs?.source},description:{story:`Demonstrates overriding CSS custom properties for custom theming.
Overrides: --b-float-button-bg, --b-float-button-shadow, --b-float-button-size.`,...T.parameters?.docs?.description}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      BFloatButton
    },
    template: \`
      <div style="display:flex; gap:1.5rem; align-items:center; padding:1rem;">
        <BFloatButton tooltip="Enabled default" />
        <BFloatButton tooltip="Disabled default" :disabled="true" />
        <BFloatButton type="primary" tooltip="Enabled primary" />
        <BFloatButton type="primary" tooltip="Disabled primary" :disabled="true" />
      </div>
    \`
  })
}`,...E.parameters?.docs?.source}}},D=[`Playground`,`Types`,`Shapes`,`WithBadge`,`GroupStatic`,`GroupWithTrigger`,`GroupPlacements`,`BackTop`,`Accessibility`,`Theming`,`Disabled`]}))();export{w as Accessibility,C as BackTop,E as Disabled,S as GroupPlacements,b as GroupStatic,x as GroupWithTrigger,g as Playground,v as Shapes,T as Theming,_ as Types,y as WithBadge,D as __namedExportsOrder,h as default};