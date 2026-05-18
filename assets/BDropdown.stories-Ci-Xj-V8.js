import{n as e}from"./chunk-BneVvdWh.js";import{K as t,i as n}from"./iframe-BtDITyas.js";import{F as r,I as i,L as a,R as o,t as s}from"./components-_FfmWUAp.js";var c,l,u,d,f,p,m,h,g,_,v,y,b,x,S,C,w,T,E,D,O;e((()=>{s(),o(),n(),{expect:c,userEvent:l,waitFor:u,within:d}=__STORYBOOK_MODULE_TEST__,f={title:`Navigation/Dropdown`,component:r,tags:[`autodocs`],argTypes:{trigger:{control:`select`,options:Object.values(a),description:`The trigger mode which executes the dropdown action.`,table:{defaultValue:{summary:a.Hover}}},placement:{control:`select`,options:Object.values(i),description:`Placement of popup menu.`,table:{defaultValue:{summary:i.BottomLeft}}},arrow:{control:`boolean`,description:`Whether to show the dropdown chevron indicator next to the trigger.`,table:{defaultValue:{summary:`false`}}},disabled:{control:`boolean`,description:`Whether the dropdown menu is disabled.`,table:{defaultValue:{summary:`false`}}},destroyOnHidden:{control:`boolean`,description:`Whether to destroy popup on hide.`,table:{defaultValue:{summary:`false`}}},mouseEnterDelay:{control:`number`,description:`Delay in ms before showing on mouseenter.`,table:{defaultValue:{summary:`100`}}},mouseLeaveDelay:{control:`number`,description:`Delay in ms before hiding on mouseleave.`,table:{defaultValue:{summary:`100`}}},modelValue:{control:`boolean`,description:`Controlled open state (bind with v-model).`,table:{category:`Two-Way Binding Props`}}},parameters:{docs:{description:{component:`The <code>BDropdown</code> component displays a dropdown menu triggered by user interaction.<br><br>Supports hover, click, and context menu triggers. Menu items can be grouped, include dividers, and support danger/disabled/selected states.<br>Uses the native HTML <code>popover</code> attribute and CSS Anchor Positioning.`}}}},p={items:[{key:`1`,label:`1st menu item`},{key:`2`,label:`2nd menu item`},{key:`3`,label:`3rd menu item`,disabled:!0},{key:`4`,label:`4th menu item`,danger:!0}]},m={items:[{key:`group1`,label:``,type:`group`,title:`Group 1`,children:[{key:`1`,label:`Option 1`},{key:`2`,label:`Option 2`}]},{key:`div`,label:``,type:`divider`},{key:`group2`,label:``,type:`group`,title:`Group 2`,children:[{key:`3`,label:`Option 3`},{key:`4`,label:`Option 4`}]}]},h={items:[{key:`1`,label:`Option A`},{key:`2`,label:`Option B`},{key:`3`,label:`Option C`}],selectable:!0,selectedKeys:[`2`]},g={args:{trigger:`hover`,placement:`bottomLeft`,arrow:!1,disabled:!1,destroyOnHidden:!1,mouseEnterDelay:100,mouseLeaveDelay:100,menu:p},render:e=>({components:{BDropdown:r},setup:()=>({args:e}),template:`
      <div style="padding: 100px; display: flex; justify-content: center;">
        <BDropdown v-bind="args" v-slot="{ triggerProps }">
          <a href="#" @click.prevent v-bind="triggerProps">Hover me</a>
        </BDropdown>
      </div>
    `})},_={args:{trigger:`click`,menu:p},render:e=>({components:{BDropdown:r},setup:()=>({args:e}),template:`
      <div style="padding: 100px; display: flex; justify-content: center;">
        <BDropdown v-bind="args" v-slot="{ triggerProps }">
          <button type="button" v-bind="triggerProps">Click me</button>
        </BDropdown>
      </div>
    `}),play:async({canvasElement:e})=>{let t=d(e).getByText(`Click me`);await l.click(t),await u(()=>{let e=document.querySelector(`[role="menu"]`);c(e).toBeTruthy(),c(e?.querySelector(`[role="menuitem"]`)).toBeTruthy()})}},v={args:{trigger:`contextMenu`,menu:p},render:e=>({components:{BDropdown:r},setup:()=>({args:e}),template:`
      <div style="padding: 100px; display: flex; justify-content: center;">
        <BDropdown v-bind="args" v-slot="{ triggerProps }">
          <div v-bind="triggerProps" role="button" tabindex="0" style="padding: 40px; border: 2px dashed #ccc; border-radius: 8px; text-align: center; color: #666;">
            Right-click this area
          </div>
        </BDropdown>
      </div>
    `})},y={render:()=>({components:{BDropdown:r},setup:()=>({placements:Object.values(i),menu:p}),template:`
      <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 60px; padding: 120px 80px;">
        <div v-for="p in placements" :key="p" style="display: flex; justify-content: center;">
          <BDropdown :placement="p" trigger="click" :menu="menu" v-slot="{ triggerProps }">
            <button type="button" v-bind="triggerProps" style="min-width: 120px;">{{ p }}</button>
          </BDropdown>
        </div>
      </div>
    `})},b={args:{arrow:!0,trigger:`click`,menu:p},render:e=>({components:{BDropdown:r},setup:()=>({args:e}),template:`
      <div style="padding: 100px; display: flex; justify-content: center;">
        <BDropdown v-bind="args" v-slot="{ triggerProps }">
          <button type="button" v-bind="triggerProps">With Arrow</button>
        </BDropdown>
      </div>
    `})},x={args:{trigger:`click`,menu:m},render:e=>({components:{BDropdown:r},setup:()=>({args:e}),template:`
      <div style="padding: 100px; display: flex; justify-content: center;">
        <BDropdown v-bind="args" v-slot="{ triggerProps }">
          <button type="button" v-bind="triggerProps">Grouped Items</button>
        </BDropdown>
      </div>
    `})},S={args:{trigger:`click`,menu:h},render:e=>({components:{BDropdown:r},setup:()=>({args:e}),template:`
      <div style="padding: 100px; display: flex; justify-content: center;">
        <BDropdown v-bind="args" v-slot="{ triggerProps }">
          <button type="button" v-bind="triggerProps">Selectable</button>
        </BDropdown>
      </div>
    `})},C={args:{trigger:`click`,menu:p},render:e=>({components:{BDropdown:r},setup:()=>({args:e}),template:`
      <div style="padding: 100px; display: flex; justify-content: center;">
        <BDropdown v-bind="args" v-slot="{ triggerProps }">
          <button type="button" v-bind="triggerProps">Accessible Dropdown</button>
        </BDropdown>
      </div>
    `}),play:async({canvasElement:e})=>{let t=d(e).getByText(`Accessible Dropdown`);c(t.getAttribute(`aria-haspopup`)).toBe(`menu`),c(t.getAttribute(`aria-expanded`)).toBe(`false`),await l.click(t),await u(()=>{c(t.getAttribute(`aria-expanded`)).toBe(`true`)}),await u(()=>{c(document.querySelector(`[role="menu"]`)).toBeTruthy()}),await u(()=>{let e=document.querySelectorAll(`[role="menuitem"]`);c(e.length).toBeGreaterThan(0),c(Array.from(e).find(e=>e.getAttribute(`aria-disabled`)===`true`)).toBeTruthy()})}},w={args:{trigger:`click`,menu:p},render:e=>({components:{BDropdown:r},setup:()=>({args:e}),template:`
      <div style="padding: 100px; display: flex; gap: 40px; flex-wrap: wrap;">
        <div>
          <p style="margin-bottom: 8px; font-size: 12px; color: #666;">Default</p>
          <BDropdown v-bind="args" v-slot="{ triggerProps }">
            <button type="button" v-bind="triggerProps">Default Theme</button>
          </BDropdown>
        </div>

        <div class="custom-dropdown-theme-1">
          <p style="margin-bottom: 8px; font-size: 12px; color: #666;">Custom: Purple accent</p>
          <BDropdown v-bind="args" v-slot="{ triggerProps }">
            <button type="button" v-bind="triggerProps">Purple Theme</button>
          </BDropdown>
        </div>

        <div class="custom-dropdown-theme-2">
          <p style="margin-bottom: 8px; font-size: 12px; color: #666;">Custom: Compact</p>
          <BDropdown v-bind="args" v-slot="{ triggerProps }">
            <button type="button" v-bind="triggerProps">Compact Theme</button>
          </BDropdown>
        </div>

        <div class="custom-dropdown-theme-3">
          <p style="margin-bottom: 8px; font-size: 12px; color: #666;">Custom: Large rounded</p>
          <BDropdown v-bind="args" v-slot="{ triggerProps }">
            <button type="button" v-bind="triggerProps">Large Rounded</button>
          </BDropdown>
        </div>
      </div>

      <style>
        .custom-dropdown-theme-1 .b-dropdown {
          --b-dropdown-item-selected-bg: #f3e8ff;
          --b-dropdown-item-selected-color: #7c3aed;
          --b-dropdown-item-hover-bg: #faf5ff;
        }
        .custom-dropdown-theme-2 .b-dropdown {
          --b-dropdown-padding-block: 2px;
          --b-dropdown-item-padding-y: 2px;
          --b-dropdown-item-padding-x: 8px;
          --b-dropdown-font-size: 12px;
          --b-dropdown-border-radius: 4px;
        }
        .custom-dropdown-theme-3 .b-dropdown {
          --b-dropdown-border-radius: 16px;
          --b-dropdown-item-border-radius: 12px;
          --b-dropdown-item-padding-y: 10px;
          --b-dropdown-font-size: 16px;
        }
      </style>
    `})},T={args:{trigger:`click`,menu:p},render:e=>({components:{BDropdown:r},setup:()=>{let n=t(`none`);return{args:e,lastClicked:n,onMenuClick:e=>{n.value=String(e.key)}}},template:`
      <div style="padding: 100px; display: flex; flex-direction: column; align-items: center; gap: 16px;">
        <BDropdown v-bind="args" @menu-click="onMenuClick" v-slot="{ triggerProps }">
          <button type="button" data-testid="dropdown-trigger" v-bind="triggerProps">Open Menu</button>
        </BDropdown>
        <p data-testid="last-clicked">Last clicked: {{ lastClicked }}</p>
      </div>
    `}),play:async({canvasElement:e})=>{let t=d(e),n=t.getByTestId(`dropdown-trigger`);c(n.getAttribute(`aria-expanded`)).toBe(`false`),await l.click(n),await u(()=>{c(n.getAttribute(`aria-expanded`)).toBe(`true`)}),await u(async()=>{let e=document.querySelectorAll(`[role="menuitem"]`);c(e.length).toBeGreaterThan(0),await l.click(e[0])}),await u(()=>{c(t.getByTestId(`last-clicked`).textContent).toContain(`1`),c(n.getAttribute(`aria-expanded`)).toBe(`false`)})}},E={args:{trigger:`click`,disabled:!0,menu:p},render:e=>({components:{BDropdown:r},setup:()=>({args:e}),template:`
      <div style="padding: 100px; display: flex; justify-content: center;">
        <BDropdown v-bind="args" v-slot="{ triggerProps }">
          <button type="button" v-bind="triggerProps">Disabled Dropdown</button>
        </BDropdown>
      </div>
    `})},D={args:{trigger:`click`},render:e=>({components:{BDropdown:r},setup:()=>({args:e}),template:`
      <div style="padding: 100px; display: flex; justify-content: center;">
        <BDropdown v-bind="args">
          <template #default="{ triggerProps }">
            <button type="button" v-bind="triggerProps">Custom Content</button>
          </template>
          <template #overlay>
            <div style="padding: 16px; min-width: 200px;">
              <h4 style="margin: 0 0 8px;">Custom Overlay</h4>
              <p style="margin: 0; color: #666;">This is custom dropdown content using the overlay slot.</p>
              <button type="button" style="margin-top: 12px;">Action</button>
            </div>
          </template>
        </BDropdown>
      </div>
    `})},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    trigger: 'hover' as const,
    placement: 'bottomLeft' as const,
    arrow: false,
    disabled: false,
    destroyOnHidden: false,
    mouseEnterDelay: 100,
    mouseLeaveDelay: 100,
    menu: basicMenu
  },
  render: args => ({
    components: {
      BDropdown
    },
    setup: () => ({
      args
    }),
    template: \`
      <div style="padding: 100px; display: flex; justify-content: center;">
        <BDropdown v-bind="args" v-slot="{ triggerProps }">
          <a href="#" @click.prevent v-bind="triggerProps">Hover me</a>
        </BDropdown>
      </div>
    \`
  })
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  args: {
    trigger: 'click' as const,
    menu: basicMenu
  },
  render: args => ({
    components: {
      BDropdown
    },
    setup: () => ({
      args
    }),
    template: \`
      <div style="padding: 100px; display: flex; justify-content: center;">
        <BDropdown v-bind="args" v-slot="{ triggerProps }">
          <button type="button" v-bind="triggerProps">Click me</button>
        </BDropdown>
      </div>
    \`
  }),
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const trigger = canvas.getByText('Click me');
    await userEvent.click(trigger);
    await waitFor(() => {
      const menu = document.querySelector('[role="menu"]');
      expect(menu).toBeTruthy();
      expect(menu?.querySelector('[role="menuitem"]')).toBeTruthy();
    });
  }
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  args: {
    trigger: 'contextMenu' as const,
    menu: basicMenu
  },
  render: args => ({
    components: {
      BDropdown
    },
    setup: () => ({
      args
    }),
    template: \`
      <div style="padding: 100px; display: flex; justify-content: center;">
        <BDropdown v-bind="args" v-slot="{ triggerProps }">
          <div v-bind="triggerProps" role="button" tabindex="0" style="padding: 40px; border: 2px dashed #ccc; border-radius: 8px; text-align: center; color: #666;">
            Right-click this area
          </div>
        </BDropdown>
      </div>
    \`
  })
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      BDropdown
    },
    setup: () => {
      const placements = Object.values(BDropdownPlacement);
      const menu = basicMenu;
      return {
        placements,
        menu
      };
    },
    template: \`
      <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 60px; padding: 120px 80px;">
        <div v-for="p in placements" :key="p" style="display: flex; justify-content: center;">
          <BDropdown :placement="p" trigger="click" :menu="menu" v-slot="{ triggerProps }">
            <button type="button" v-bind="triggerProps" style="min-width: 120px;">{{ p }}</button>
          </BDropdown>
        </div>
      </div>
    \`
  })
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  args: {
    arrow: true,
    trigger: 'click' as const,
    menu: basicMenu
  },
  render: args => ({
    components: {
      BDropdown
    },
    setup: () => ({
      args
    }),
    template: \`
      <div style="padding: 100px; display: flex; justify-content: center;">
        <BDropdown v-bind="args" v-slot="{ triggerProps }">
          <button type="button" v-bind="triggerProps">With Arrow</button>
        </BDropdown>
      </div>
    \`
  })
}`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  args: {
    trigger: 'click' as const,
    menu: groupedMenu
  },
  render: args => ({
    components: {
      BDropdown
    },
    setup: () => ({
      args
    }),
    template: \`
      <div style="padding: 100px; display: flex; justify-content: center;">
        <BDropdown v-bind="args" v-slot="{ triggerProps }">
          <button type="button" v-bind="triggerProps">Grouped Items</button>
        </BDropdown>
      </div>
    \`
  })
}`,...x.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  args: {
    trigger: 'click' as const,
    menu: selectableMenu
  },
  render: args => ({
    components: {
      BDropdown
    },
    setup: () => ({
      args
    }),
    template: \`
      <div style="padding: 100px; display: flex; justify-content: center;">
        <BDropdown v-bind="args" v-slot="{ triggerProps }">
          <button type="button" v-bind="triggerProps">Selectable</button>
        </BDropdown>
      </div>
    \`
  })
}`,...S.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  args: {
    trigger: 'click' as const,
    menu: basicMenu
  },
  render: args => ({
    components: {
      BDropdown
    },
    setup: () => ({
      args
    }),
    template: \`
      <div style="padding: 100px; display: flex; justify-content: center;">
        <BDropdown v-bind="args" v-slot="{ triggerProps }">
          <button type="button" v-bind="triggerProps">Accessible Dropdown</button>
        </BDropdown>
      </div>
    \`
  }),
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const trigger = canvas.getByText('Accessible Dropdown');

    // Verify ARIA attributes on the trigger element itself
    expect(trigger.getAttribute('aria-haspopup')).toBe('menu');
    expect(trigger.getAttribute('aria-expanded')).toBe('false');

    // Open via click
    await userEvent.click(trigger);
    await waitFor(() => {
      expect(trigger.getAttribute('aria-expanded')).toBe('true');
    });

    // Verify menu element exists with correct role
    await waitFor(() => {
      const menu = document.querySelector('[role="menu"]');
      expect(menu).toBeTruthy();
    });

    // Verify menu items have correct roles
    await waitFor(() => {
      const items = document.querySelectorAll('[role="menuitem"]');
      expect(items.length).toBeGreaterThan(0);

      // Disabled item has aria-disabled
      const disabledItem = Array.from(items).find(el => el.getAttribute('aria-disabled') === 'true');
      expect(disabledItem).toBeTruthy();
    });
  }
}`,...C.parameters?.docs?.source}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  args: {
    trigger: 'click' as const,
    menu: basicMenu
  },
  render: args => ({
    components: {
      BDropdown
    },
    setup: () => ({
      args
    }),
    template: \`
      <div style="padding: 100px; display: flex; gap: 40px; flex-wrap: wrap;">
        <div>
          <p style="margin-bottom: 8px; font-size: 12px; color: #666;">Default</p>
          <BDropdown v-bind="args" v-slot="{ triggerProps }">
            <button type="button" v-bind="triggerProps">Default Theme</button>
          </BDropdown>
        </div>

        <div class="custom-dropdown-theme-1">
          <p style="margin-bottom: 8px; font-size: 12px; color: #666;">Custom: Purple accent</p>
          <BDropdown v-bind="args" v-slot="{ triggerProps }">
            <button type="button" v-bind="triggerProps">Purple Theme</button>
          </BDropdown>
        </div>

        <div class="custom-dropdown-theme-2">
          <p style="margin-bottom: 8px; font-size: 12px; color: #666;">Custom: Compact</p>
          <BDropdown v-bind="args" v-slot="{ triggerProps }">
            <button type="button" v-bind="triggerProps">Compact Theme</button>
          </BDropdown>
        </div>

        <div class="custom-dropdown-theme-3">
          <p style="margin-bottom: 8px; font-size: 12px; color: #666;">Custom: Large rounded</p>
          <BDropdown v-bind="args" v-slot="{ triggerProps }">
            <button type="button" v-bind="triggerProps">Large Rounded</button>
          </BDropdown>
        </div>
      </div>

      <style>
        .custom-dropdown-theme-1 .b-dropdown {
          --b-dropdown-item-selected-bg: #f3e8ff;
          --b-dropdown-item-selected-color: #7c3aed;
          --b-dropdown-item-hover-bg: #faf5ff;
        }
        .custom-dropdown-theme-2 .b-dropdown {
          --b-dropdown-padding-block: 2px;
          --b-dropdown-item-padding-y: 2px;
          --b-dropdown-item-padding-x: 8px;
          --b-dropdown-font-size: 12px;
          --b-dropdown-border-radius: 4px;
        }
        .custom-dropdown-theme-3 .b-dropdown {
          --b-dropdown-border-radius: 16px;
          --b-dropdown-item-border-radius: 12px;
          --b-dropdown-item-padding-y: 10px;
          --b-dropdown-font-size: 16px;
        }
      </style>
    \`
  })
}`,...w.parameters?.docs?.source}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  args: {
    trigger: 'click' as const,
    menu: basicMenu
  },
  render: args => ({
    components: {
      BDropdown
    },
    setup: () => {
      const lastClicked = ref('none');
      const onMenuClick = (info: {
        key: string | number;
      }) => {
        lastClicked.value = String(info.key);
      };
      return {
        args,
        lastClicked,
        onMenuClick
      };
    },
    template: \`
      <div style="padding: 100px; display: flex; flex-direction: column; align-items: center; gap: 16px;">
        <BDropdown v-bind="args" @menu-click="onMenuClick" v-slot="{ triggerProps }">
          <button type="button" data-testid="dropdown-trigger" v-bind="triggerProps">Open Menu</button>
        </BDropdown>
        <p data-testid="last-clicked">Last clicked: {{ lastClicked }}</p>
      </div>
    \`
  }),
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const trigger = canvas.getByTestId('dropdown-trigger');

    // Initially closed
    expect(trigger.getAttribute('aria-expanded')).toBe('false');

    // Open
    await userEvent.click(trigger);
    await waitFor(() => {
      expect(trigger.getAttribute('aria-expanded')).toBe('true');
    });

    // Click first item
    await waitFor(async () => {
      const items = document.querySelectorAll('[role="menuitem"]');
      expect(items.length).toBeGreaterThan(0);
      await userEvent.click(items[0] as HTMLElement);
    });

    // Verify event fired and menu closed
    await waitFor(() => {
      expect(canvas.getByTestId('last-clicked').textContent).toContain('1');
      expect(trigger.getAttribute('aria-expanded')).toBe('false');
    });
  }
}`,...T.parameters?.docs?.source}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  args: {
    trigger: 'click' as const,
    disabled: true,
    menu: basicMenu
  },
  render: args => ({
    components: {
      BDropdown
    },
    setup: () => ({
      args
    }),
    template: \`
      <div style="padding: 100px; display: flex; justify-content: center;">
        <BDropdown v-bind="args" v-slot="{ triggerProps }">
          <button type="button" v-bind="triggerProps">Disabled Dropdown</button>
        </BDropdown>
      </div>
    \`
  })
}`,...E.parameters?.docs?.source}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  args: {
    trigger: 'click' as const
  },
  render: args => ({
    components: {
      BDropdown
    },
    setup: () => ({
      args
    }),
    template: \`
      <div style="padding: 100px; display: flex; justify-content: center;">
        <BDropdown v-bind="args">
          <template #default="{ triggerProps }">
            <button type="button" v-bind="triggerProps">Custom Content</button>
          </template>
          <template #overlay>
            <div style="padding: 16px; min-width: 200px;">
              <h4 style="margin: 0 0 8px;">Custom Overlay</h4>
              <p style="margin: 0; color: #666;">This is custom dropdown content using the overlay slot.</p>
              <button type="button" style="margin-top: 12px;">Action</button>
            </div>
          </template>
        </BDropdown>
      </div>
    \`
  })
}`,...D.parameters?.docs?.source}}},O=[`Playground`,`ClickTrigger`,`ContextMenuTrigger`,`AllPlacements`,`WithArrow`,`GroupedMenu`,`SelectableMenu`,`Accessibility`,`Theming`,`InteractionTest`,`Disabled`,`CustomOverlay`]}))();export{C as Accessibility,y as AllPlacements,_ as ClickTrigger,v as ContextMenuTrigger,D as CustomOverlay,E as Disabled,x as GroupedMenu,T as InteractionTest,g as Playground,S as SelectableMenu,w as Theming,b as WithArrow,O as __namedExportsOrder,f as default};