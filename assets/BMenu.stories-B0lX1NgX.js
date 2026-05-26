import{n as e}from"./chunk-BneVvdWh.js";import{X as t,i as n}from"./iframe-DtrVnC0E.js";import{G as r,t as i}from"./components-B32Ts1jj.js";var a,o,s,c,l,u,d,f,p,m,h,g,_,v,y,b,x,S,C,w,T,E;e((()=>{i(),n(),{expect:a,userEvent:o,waitFor:s,within:c}=__STORYBOOK_MODULE_TEST__,l={title:`Navigation/Menu`,component:r,tags:[`autodocs`],argTypes:{mode:{control:`select`,options:[`inline`,`vertical`,`horizontal`],description:`Menu display mode.`,table:{defaultValue:{summary:`inline`}}},theme:{control:`select`,options:[`light`,`dark`],description:`Color theme.`,table:{defaultValue:{summary:`light`}}},selectable:{control:`boolean`,description:`Whether items can be selected.`,table:{defaultValue:{summary:`true`}}},multiple:{control:`boolean`,description:`Allow multiple items to be selected.`,table:{defaultValue:{summary:`false`}}},inlineCollapsed:{control:`boolean`,description:`Collapsed state in inline mode.`,table:{defaultValue:{summary:`false`}}},inlineIndent:{control:`number`,description:`Indent (px) per level for inline mode.`,table:{defaultValue:{summary:`24`}}},triggerSubMenuAction:{control:`select`,options:[`hover`,`click`],description:`Action to trigger submenu open.`,table:{defaultValue:{summary:`hover`}}},selectedKeys:{control:`object`,description:`Currently selected keys (controlled).`,table:{category:`Two-Way Binding Props`}},openKeys:{control:`object`,description:`Currently opened submenu keys (controlled).`,table:{category:`Two-Way Binding Props`}}},parameters:{docs:{description:{component:`The <code>BMenu</code> component provides a navigation menu with support for inline, vertical, and horizontal modes. Supports nested submenus, item groups, dividers, and both controlled and uncontrolled patterns.<br><br>Features: multi-level nesting, keyboard navigation, selection state, dark theme, collapsed mode.`}}}},u=[{key:`home`,label:`Home`,icon:`🏠`},{key:`about`,label:`About`,icon:`📖`},{key:`contact`,label:`Contact`,icon:`✉️`},{key:`settings`,label:`Settings`,icon:`⚙️`}],d=[{key:`home`,label:`Home`,icon:`🏠`},{key:`products`,label:`Products`,icon:`📦`,children:[{key:`electronics`,label:`Electronics`},{key:`clothing`,label:`Clothing`},{key:`furniture`,label:`Furniture`,children:[{key:`tables`,label:`Tables`},{key:`chairs`,label:`Chairs`}]}]},{key:`services`,label:`Services`,icon:`🔧`,children:[{key:`consulting`,label:`Consulting`},{key:`development`,label:`Development`}]},{key:`contact`,label:`Contact`,icon:`✉️`}],f=[{type:`group`,key:`general`,label:`General`,children:[{key:`dashboard`,label:`Dashboard`,icon:`📊`},{key:`analytics`,label:`Analytics`,icon:`📈`}]},{type:`divider`},{type:`group`,key:`settings`,label:`Settings`,children:[{key:`profile`,label:`Profile`,icon:`👤`},{key:`security`,label:`Security`,icon:`🔒`},{key:`notifications`,label:`Notifications`,icon:`🔔`}]}],p=[{key:`edit`,label:`Edit`,icon:`✏️`},{key:`duplicate`,label:`Duplicate`,icon:`📋`},{type:`divider`},{key:`delete`,label:`Delete`,icon:`🗑️`,danger:!0}],m={args:{mode:`inline`,theme:`light`,selectable:!0,multiple:!1,inlineCollapsed:!1,inlineIndent:24,items:d},render:e=>({components:{BMenu:r},setup:()=>({args:e,selected:t([`home`]),open:t([`products`])}),template:`
      <div style="width: 256px;">
        <BMenu
          v-bind="args"
          v-model:selected-keys="selected"
          v-model:open-keys="open"
        />
      </div>
      <p style="margin-top: 12px; font-size: 12px; color: #666;">
        Selected: {{ selected.join(', ') }} | Open: {{ open.join(', ') }}
      </p>
    `})},h={args:{mode:`horizontal`,items:d},render:e=>({components:{BMenu:r},setup:()=>({args:e,selected:t([`home`])}),template:`
      <BMenu v-bind="args" v-model:selected-keys="selected" />
      <p style="margin-top: 12px; font-size: 12px; color: #666;">Selected: {{ selected.join(', ') }}</p>
    `})},g={args:{mode:`vertical`,items:d},render:e=>({components:{BMenu:r},setup:()=>({args:e,selected:t([`home`])}),template:`
      <div style="width: 256px;">
        <BMenu v-bind="args" v-model:selected-keys="selected" />
      </div>
      <p style="margin-top: 12px; font-size: 12px; color: #666;">Selected: {{ selected.join(', ') }}</p>
    `})},_={render:()=>({components:{BMenu:r},setup:()=>({collapsed:t(!1),selected:t([`home`]),items:d}),template:`
      <div>
        <button @click="collapsed = !collapsed" style="margin-bottom: 16px; padding: 4px 12px; cursor: pointer;">
          {{ collapsed ? 'Expand' : 'Collapse' }}
        </button>
        <div :style="{ width: collapsed ? '80px' : '256px', transition: 'width 200ms' }">
          <BMenu
            mode="inline"
            :inline-collapsed="collapsed"
            :items="items"
            v-model:selected-keys="selected"
          />
        </div>
      </div>
    `})},v={args:{items:f},render:e=>({components:{BMenu:r},setup:()=>({args:e}),template:`
      <div style="width: 256px;">
        <BMenu v-bind="args" />
      </div>
    `})},y={args:{items:p},render:e=>({components:{BMenu:r},setup:()=>({args:e}),template:`
      <div style="width: 256px;">
        <BMenu v-bind="args" />
      </div>
    `})},b={args:{multiple:!0,items:u,defaultSelectedKeys:[`home`,`about`]},render:e=>({components:{BMenu:r},setup:()=>({args:e,selected:t([`home`,`about`])}),template:`
      <div style="width: 256px;">
        <BMenu v-bind="args" v-model:selected-keys="selected" />
        <p style="margin-top: 12px; font-size: 12px; color: #666;">Selected: {{ selected.join(', ') }}</p>
      </div>
    `})},x={args:{items:d,defaultSelectedKeys:[`home`]},render:e=>({components:{BMenu:r},setup:()=>({args:e}),template:`
      <div style="width: 256px;">
        <BMenu v-bind="args" />
      </div>
    `}),play:async({canvasElement:e})=>{let t=e.querySelector(`[role="menu"]`);a(t).toBeTruthy(),a(t?.getAttribute(`aria-orientation`)).toBe(`vertical`);let n=e.querySelectorAll(`[role="menuitemradio"]`);a(n.length).toBeGreaterThan(0);let r=n[0];a(r.getAttribute(`tabindex`)).toBe(`0`),a(e.querySelector(`[aria-checked="true"]`)).toBeTruthy();let i=e.querySelector(`[aria-haspopup="true"]`);a(i).toBeTruthy(),a(i?.getAttribute(`aria-expanded`)).toBe(`false`),i&&(await o.click(i),await s(()=>{a(i?.getAttribute(`aria-expanded`)).toBe(`true`)})),await s(()=>{a(e.querySelectorAll(`[role="menu"]`).length).toBeGreaterThan(1)})}},S={args:{items:u,defaultSelectedKeys:[`home`]},render:e=>({components:{BMenu:r},setup:()=>({args:e}),template:`
      <div style="display: flex; gap: 40px; flex-wrap: wrap;">
        <div>
          <p style="margin-bottom: 8px; font-size: 12px; color: #666;">Default</p>
          <div style="width: 220px;">
            <BMenu v-bind="args" />
          </div>
        </div>

        <div class="custom-menu-theme-1">
          <p style="margin-bottom: 8px; font-size: 12px; color: #666;">Purple accent</p>
          <div style="width: 220px;">
            <BMenu v-bind="args" />
          </div>
        </div>

        <div class="custom-menu-theme-2">
          <p style="margin-bottom: 8px; font-size: 12px; color: #666;">Rounded & warm</p>
          <div style="width: 220px;">
            <BMenu v-bind="args" />
          </div>
        </div>

        <div class="custom-menu-theme-3">
          <p style="margin-bottom: 8px; font-size: 12px; color: #666;">Compact</p>
          <div style="width: 180px;">
            <BMenu v-bind="args" />
          </div>
        </div>
      </div>

      <style>
        .custom-menu-theme-1 .b-menu {
          --b-menu-item-selected-bg: #f3e8ff;
          --b-menu-item-selected-color: #7c3aed;
          --b-menu-item-hover-bg: #faf5ff;
        }
        .custom-menu-theme-2 .b-menu {
          --b-menu-item-border-radius: 20px;
          --b-menu-item-selected-bg: #fff7ed;
          --b-menu-item-selected-color: #ea580c;
          --b-menu-item-hover-bg: #fffbeb;
        }
        .custom-menu-theme-3 .b-menu {
          --b-menu-item-height: 32px;
          --b-menu-item-border-radius: 4px;
          --b-menu-item-margin-block: 2px;
          --b-menu-item-padding-inline: 12px;
        }
      </style>
    `})},C={args:{items:d},render:e=>({components:{BMenu:r},setup:()=>({args:e,selected:t([]),openKeys:t([])}),template:`
      <div style="width: 256px;">
        <BMenu v-bind="args" v-model:selected-keys="selected" v-model:open-keys="openKeys" />
        <p data-testid="selected">Selected: {{ selected.join(', ') }}</p>
        <p data-testid="open">Open: {{ openKeys.join(', ') }}</p>
      </div>
    `}),play:async({canvasElement:e})=>{let t=c(e);a(t.getByTestId(`selected`).textContent).toContain(`Selected:`);let n=e.querySelector(`[data-menu-key="home"]`);a(n).toBeTruthy(),await o.click(n),await s(()=>{a(t.getByTestId(`selected`).textContent).toContain(`home`)});let r=e.querySelector(`[data-menu-key="products"] .b-menu-submenu__title`);a(r).toBeTruthy(),await o.click(r),await s(()=>{a(t.getByTestId(`open`).textContent).toContain(`products`)}),await s(async()=>{let t=e.querySelector(`[data-menu-key="electronics"]`);a(t).toBeTruthy(),await o.click(t)}),await s(()=>{a(t.getByTestId(`selected`).textContent).toContain(`electronics`)})}},w={args:{items:[{key:`active`,label:`Active Item`},{key:`disabled1`,label:`Disabled Item`,disabled:!0},{key:`sub-disabled`,label:`Disabled SubMenu`,disabled:!0,children:[{key:`child`,label:`Child`}]},{key:`normal`,label:`Normal Item`}]},render:e=>({components:{BMenu:r},setup:()=>({args:e}),template:`
      <div style="width: 256px;">
        <BMenu v-bind="args" />
      </div>
    `})},T={render:()=>({setup:()=>({tokens:[{variable:`--b-menu-item-bg`,default:`#ffffff`,description:`Menu item background`},{variable:`--b-menu-item-color`,default:`rgba(0,0,0,0.88)`,description:`Menu item text color`},{variable:`--b-menu-item-hover-bg`,default:`rgba(0,0,0,0.06)`,description:`Item background on hover`},{variable:`--b-menu-item-hover-color`,default:`rgba(0,0,0,0.88)`,description:`Item text color on hover`},{variable:`--b-menu-item-active-bg`,default:`#e6f4ff`,description:`Item background when active`},{variable:`--b-menu-item-selected-bg`,default:`#e6f4ff`,description:`Selected item background`},{variable:`--b-menu-item-selected-color`,default:`#0958d9`,description:`Selected item text color`},{variable:`--b-menu-item-disabled-color`,default:`rgba(0,0,0,0.25)`,description:`Disabled item text color`},{variable:`--b-menu-item-height`,default:`40px`,description:`Menu item height`},{variable:`--b-menu-item-border-radius`,default:`8px`,description:`Menu item border radius`},{variable:`--b-menu-item-margin-block`,default:`4px`,description:`Vertical margin between items`},{variable:`--b-menu-item-margin-inline`,default:`4px`,description:`Horizontal margin of items`},{variable:`--b-menu-item-padding-inline`,default:`16px`,description:`Horizontal padding inside items`},{variable:`--b-menu-icon-size`,default:`14px`,description:`Icon size`},{variable:`--b-menu-icon-margin-inline-end`,default:`10px`,description:`Spacing between icon and label`},{variable:`--b-menu-group-title-color`,default:`rgba(0,0,0,0.65)`,description:`Group title text color`},{variable:`--b-menu-group-title-font-size`,default:`14px`,description:`Group title font size`},{variable:`--b-menu-group-title-line-height`,default:`1.5714`,description:`Group title line height`},{variable:`--b-menu-danger-item-color`,default:`#cf1322`,description:`Danger item text color`},{variable:`--b-menu-danger-item-hover-color`,default:`#cf1322`,description:`Danger item hover color`},{variable:`--b-menu-danger-item-active-bg`,default:`#fff2f0`,description:`Danger item active background`},{variable:`--b-menu-danger-item-selected-bg`,default:`#fff2f0`,description:`Danger item selected background`},{variable:`--b-menu-danger-item-selected-color`,default:`#cf1322`,description:`Danger item selected color`},{variable:`--b-menu-sub-menu-item-bg`,default:`rgba(0,0,0,0.02)`,description:`Submenu content background`},{variable:`--b-menu-sub-menu-item-border-radius`,default:`4px`,description:`Submenu item border radius`},{variable:`--b-menu-sub-menu-item-selected-color`,default:`#0958d9`,description:`Submenu title color when child selected`},{variable:`--b-menu-popup-bg`,default:`#ffffff`,description:`Popup menu background`},{variable:`--b-menu-popup-shadow`,default:`0 6px 16px ...`,description:`Popup box shadow`},{variable:`--b-menu-popup-border-radius`,default:`8px`,description:`Popup border radius`},{variable:`--b-menu-popup-z-index`,default:`1050`,description:`Popup z-index`},{variable:`--b-menu-dropdown-width`,default:`160px`,description:`Popup menu min-width`},{variable:`--b-menu-collapsed-width`,default:`80px`,description:`Menu width when collapsed`},{variable:`--b-menu-collapsed-icon-size`,default:`16px`,description:`Icon size when collapsed`},{variable:`--b-menu-active-bar-height`,default:`2px`,description:`Horizontal mode active indicator height`},{variable:`--b-menu-active-bar-width`,default:`3px`,description:`Vertical mode active indicator width`},{variable:`--b-menu-horizontal-line-height`,default:`46px`,description:`Horizontal menu item line height`},{variable:`--b-menu-horizontal-item-hover-bg`,default:`transparent`,description:`Horizontal item hover background`},{variable:`--b-menu-horizontal-item-hover-color`,default:`#0958d9`,description:`Horizontal item hover color`},{variable:`--b-menu-horizontal-item-selected-bg`,default:`transparent`,description:`Horizontal item selected background`},{variable:`--b-menu-horizontal-item-selected-color`,default:`#0958d9`,description:`Horizontal item selected color`},{variable:`--b-menu-horizontal-item-border-radius`,default:`0`,description:`Horizontal item border radius`},{variable:`--b-menu-transition-duration`,default:`200ms`,description:`Animation transition duration`}]}),template:`
      <div style="font-family:sans-serif;padding:1rem;max-width:1100px;margin:0 auto;">
        <h3 style="margin: 0 0 16px; font-size: 16px; font-weight: 600;">BMenu Design Tokens</h3>
        <p style="margin: 0 0 16px; font-size: 13px; color: #555;">
          Override these CSS variables on <code>.b-menu</code> or an ancestor to customize the menu appearance.
        </p>
        <table style="width:100%;border-collapse:collapse;font-size:13px;">
          <thead>
            <tr style="background:oklch(96% 0.002 260);">
              <th style="text-align:left;padding:10px 12px;border-bottom:1px solid oklch(85% 0.005 260);">Variable</th>
              <th style="text-align:left;padding:10px 12px;border-bottom:1px solid oklch(85% 0.005 260);">Default</th>
              <th style="text-align:left;padding:10px 12px;border-bottom:1px solid oklch(85% 0.005 260);">Description</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="token in tokens" :key="token.variable" style="border-bottom:1px solid oklch(94% 0.003 260);">
              <td style="padding:8px 12px;font-family:monospace;font-size:12px;color:#86198f;white-space:nowrap;"><code>{{ token.variable }}</code></td>
              <td style="padding:8px 12px;font-family:monospace;font-size:12px;color:#595959;">{{ token.default }}</td>
              <td style="padding:8px 12px;color:#555;">{{ token.description }}</td>
            </tr>
          </tbody>
        </table>
      </div>
    `})},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    mode: 'inline',
    theme: 'light',
    selectable: true,
    multiple: false,
    inlineCollapsed: false,
    inlineIndent: 24,
    items: nestedItems
  },
  render: args => ({
    components: {
      BMenu
    },
    setup: () => {
      const selected = ref<string[]>(['home']);
      const open = ref<string[]>(['products']);
      return {
        args,
        selected,
        open
      };
    },
    template: \`
      <div style="width: 256px;">
        <BMenu
          v-bind="args"
          v-model:selected-keys="selected"
          v-model:open-keys="open"
        />
      </div>
      <p style="margin-top: 12px; font-size: 12px; color: #666;">
        Selected: {{ selected.join(', ') }} | Open: {{ open.join(', ') }}
      </p>
    \`
  })
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    mode: 'horizontal',
    items: nestedItems
  },
  render: args => ({
    components: {
      BMenu
    },
    setup: () => {
      const selected = ref<string[]>(['home']);
      return {
        args,
        selected
      };
    },
    template: \`
      <BMenu v-bind="args" v-model:selected-keys="selected" />
      <p style="margin-top: 12px; font-size: 12px; color: #666;">Selected: {{ selected.join(', ') }}</p>
    \`
  })
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    mode: 'vertical',
    items: nestedItems
  },
  render: args => ({
    components: {
      BMenu
    },
    setup: () => {
      const selected = ref<string[]>(['home']);
      return {
        args,
        selected
      };
    },
    template: \`
      <div style="width: 256px;">
        <BMenu v-bind="args" v-model:selected-keys="selected" />
      </div>
      <p style="margin-top: 12px; font-size: 12px; color: #666;">Selected: {{ selected.join(', ') }}</p>
    \`
  })
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      BMenu
    },
    setup: () => {
      const collapsed = ref(false);
      const selected = ref<string[]>(['home']);
      const items = nestedItems;
      return {
        collapsed,
        selected,
        items
      };
    },
    template: \`
      <div>
        <button @click="collapsed = !collapsed" style="margin-bottom: 16px; padding: 4px 12px; cursor: pointer;">
          {{ collapsed ? 'Expand' : 'Collapse' }}
        </button>
        <div :style="{ width: collapsed ? '80px' : '256px', transition: 'width 200ms' }">
          <BMenu
            mode="inline"
            :inline-collapsed="collapsed"
            :items="items"
            v-model:selected-keys="selected"
          />
        </div>
      </div>
    \`
  })
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  args: {
    items: groupedItems
  },
  render: args => ({
    components: {
      BMenu
    },
    setup: () => ({
      args
    }),
    template: \`
      <div style="width: 256px;">
        <BMenu v-bind="args" />
      </div>
    \`
  })
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  args: {
    items: dangerItems
  },
  render: args => ({
    components: {
      BMenu
    },
    setup: () => ({
      args
    }),
    template: \`
      <div style="width: 256px;">
        <BMenu v-bind="args" />
      </div>
    \`
  })
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  args: {
    multiple: true,
    items: basicItems,
    defaultSelectedKeys: ['home', 'about']
  },
  render: args => ({
    components: {
      BMenu
    },
    setup: () => {
      const selected = ref<string[]>(['home', 'about']);
      return {
        args,
        selected
      };
    },
    template: \`
      <div style="width: 256px;">
        <BMenu v-bind="args" v-model:selected-keys="selected" />
        <p style="margin-top: 12px; font-size: 12px; color: #666;">Selected: {{ selected.join(', ') }}</p>
      </div>
    \`
  })
}`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  args: {
    items: nestedItems,
    defaultSelectedKeys: ['home']
  },
  render: args => ({
    components: {
      BMenu
    },
    setup: () => ({
      args
    }),
    template: \`
      <div style="width: 256px;">
        <BMenu v-bind="args" />
      </div>
    \`
  }),
  play: async ({
    canvasElement
  }) => {
    // Verify menu role
    const menu = canvasElement.querySelector('[role="menu"]');
    expect(menu).toBeTruthy();
    expect(menu?.getAttribute('aria-orientation')).toBe('vertical');

    // Verify menu items have correct role (menuitemradio when selectable)
    const items = canvasElement.querySelectorAll('[role="menuitemradio"]');
    expect(items.length).toBeGreaterThan(0);

    // Verify tabindex on non-disabled items
    const firstItem = items[0] as HTMLElement;
    expect(firstItem.getAttribute('tabindex')).toBe('0');

    // Verify selected item has aria-checked
    const selectedItem = canvasElement.querySelector('[aria-checked="true"]');
    expect(selectedItem).toBeTruthy();

    // Verify submenu title has aria-haspopup and aria-expanded
    const submenuTitle = canvasElement.querySelector('[aria-haspopup="true"]');
    expect(submenuTitle).toBeTruthy();
    expect(submenuTitle?.getAttribute('aria-expanded')).toBe('false');

    // Open submenu via keyboard
    if (submenuTitle) {
      await userEvent.click(submenuTitle as HTMLElement);
      await waitFor(() => {
        expect(submenuTitle?.getAttribute('aria-expanded')).toBe('true');
      });
    }

    // Verify nested menu also has role="menu"
    await waitFor(() => {
      const nestedMenus = canvasElement.querySelectorAll('[role="menu"]');
      expect(nestedMenus.length).toBeGreaterThan(1);
    });
  }
}`,...x.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  args: {
    items: basicItems,
    defaultSelectedKeys: ['home']
  },
  render: args => ({
    components: {
      BMenu
    },
    setup: () => ({
      args
    }),
    template: \`
      <div style="display: flex; gap: 40px; flex-wrap: wrap;">
        <div>
          <p style="margin-bottom: 8px; font-size: 12px; color: #666;">Default</p>
          <div style="width: 220px;">
            <BMenu v-bind="args" />
          </div>
        </div>

        <div class="custom-menu-theme-1">
          <p style="margin-bottom: 8px; font-size: 12px; color: #666;">Purple accent</p>
          <div style="width: 220px;">
            <BMenu v-bind="args" />
          </div>
        </div>

        <div class="custom-menu-theme-2">
          <p style="margin-bottom: 8px; font-size: 12px; color: #666;">Rounded & warm</p>
          <div style="width: 220px;">
            <BMenu v-bind="args" />
          </div>
        </div>

        <div class="custom-menu-theme-3">
          <p style="margin-bottom: 8px; font-size: 12px; color: #666;">Compact</p>
          <div style="width: 180px;">
            <BMenu v-bind="args" />
          </div>
        </div>
      </div>

      <style>
        .custom-menu-theme-1 .b-menu {
          --b-menu-item-selected-bg: #f3e8ff;
          --b-menu-item-selected-color: #7c3aed;
          --b-menu-item-hover-bg: #faf5ff;
        }
        .custom-menu-theme-2 .b-menu {
          --b-menu-item-border-radius: 20px;
          --b-menu-item-selected-bg: #fff7ed;
          --b-menu-item-selected-color: #ea580c;
          --b-menu-item-hover-bg: #fffbeb;
        }
        .custom-menu-theme-3 .b-menu {
          --b-menu-item-height: 32px;
          --b-menu-item-border-radius: 4px;
          --b-menu-item-margin-block: 2px;
          --b-menu-item-padding-inline: 12px;
        }
      </style>
    \`
  })
}`,...S.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  args: {
    items: nestedItems
  },
  render: args => ({
    components: {
      BMenu
    },
    setup: () => {
      const selected = ref<string[]>([]);
      const openKeys = ref<string[]>([]);
      return {
        args,
        selected,
        openKeys
      };
    },
    template: \`
      <div style="width: 256px;">
        <BMenu v-bind="args" v-model:selected-keys="selected" v-model:open-keys="openKeys" />
        <p data-testid="selected">Selected: {{ selected.join(', ') }}</p>
        <p data-testid="open">Open: {{ openKeys.join(', ') }}</p>
      </div>
    \`
  }),
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);

    // Initially nothing selected
    expect(canvas.getByTestId('selected').textContent).toContain('Selected:');

    // Click first item
    const homeItem = canvasElement.querySelector('[data-menu-key="home"]') as HTMLElement;
    expect(homeItem).toBeTruthy();
    await userEvent.click(homeItem);
    await waitFor(() => {
      expect(canvas.getByTestId('selected').textContent).toContain('home');
    });

    // Open submenu
    const productsTitle = canvasElement.querySelector('[data-menu-key="products"] .b-menu-submenu__title') as HTMLElement;
    expect(productsTitle).toBeTruthy();
    await userEvent.click(productsTitle);
    await waitFor(() => {
      expect(canvas.getByTestId('open').textContent).toContain('products');
    });

    // Select nested item
    await waitFor(async () => {
      const electronicsItem = canvasElement.querySelector('[data-menu-key="electronics"]') as HTMLElement;
      expect(electronicsItem).toBeTruthy();
      await userEvent.click(electronicsItem);
    });
    await waitFor(() => {
      expect(canvas.getByTestId('selected').textContent).toContain('electronics');
    });
  }
}`,...C.parameters?.docs?.source}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  args: {
    items: [{
      key: 'active',
      label: 'Active Item'
    }, {
      key: 'disabled1',
      label: 'Disabled Item',
      disabled: true
    }, {
      key: 'sub-disabled',
      label: 'Disabled SubMenu',
      disabled: true,
      children: [{
        key: 'child',
        label: 'Child'
      }]
    }, {
      key: 'normal',
      label: 'Normal Item'
    }]
  },
  render: args => ({
    components: {
      BMenu
    },
    setup: () => ({
      args
    }),
    template: \`
      <div style="width: 256px;">
        <BMenu v-bind="args" />
      </div>
    \`
  })
}`,...w.parameters?.docs?.source}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  render: () => ({
    setup: () => {
      const tokens = [{
        variable: '--b-menu-item-bg',
        default: '#ffffff',
        description: 'Menu item background'
      }, {
        variable: '--b-menu-item-color',
        default: 'rgba(0,0,0,0.88)',
        description: 'Menu item text color'
      }, {
        variable: '--b-menu-item-hover-bg',
        default: 'rgba(0,0,0,0.06)',
        description: 'Item background on hover'
      }, {
        variable: '--b-menu-item-hover-color',
        default: 'rgba(0,0,0,0.88)',
        description: 'Item text color on hover'
      }, {
        variable: '--b-menu-item-active-bg',
        default: '#e6f4ff',
        description: 'Item background when active'
      }, {
        variable: '--b-menu-item-selected-bg',
        default: '#e6f4ff',
        description: 'Selected item background'
      }, {
        variable: '--b-menu-item-selected-color',
        default: '#0958d9',
        description: 'Selected item text color'
      }, {
        variable: '--b-menu-item-disabled-color',
        default: 'rgba(0,0,0,0.25)',
        description: 'Disabled item text color'
      }, {
        variable: '--b-menu-item-height',
        default: '40px',
        description: 'Menu item height'
      }, {
        variable: '--b-menu-item-border-radius',
        default: '8px',
        description: 'Menu item border radius'
      }, {
        variable: '--b-menu-item-margin-block',
        default: '4px',
        description: 'Vertical margin between items'
      }, {
        variable: '--b-menu-item-margin-inline',
        default: '4px',
        description: 'Horizontal margin of items'
      }, {
        variable: '--b-menu-item-padding-inline',
        default: '16px',
        description: 'Horizontal padding inside items'
      }, {
        variable: '--b-menu-icon-size',
        default: '14px',
        description: 'Icon size'
      }, {
        variable: '--b-menu-icon-margin-inline-end',
        default: '10px',
        description: 'Spacing between icon and label'
      }, {
        variable: '--b-menu-group-title-color',
        default: 'rgba(0,0,0,0.65)',
        description: 'Group title text color'
      }, {
        variable: '--b-menu-group-title-font-size',
        default: '14px',
        description: 'Group title font size'
      }, {
        variable: '--b-menu-group-title-line-height',
        default: '1.5714',
        description: 'Group title line height'
      }, {
        variable: '--b-menu-danger-item-color',
        default: '#cf1322',
        description: 'Danger item text color'
      }, {
        variable: '--b-menu-danger-item-hover-color',
        default: '#cf1322',
        description: 'Danger item hover color'
      }, {
        variable: '--b-menu-danger-item-active-bg',
        default: '#fff2f0',
        description: 'Danger item active background'
      }, {
        variable: '--b-menu-danger-item-selected-bg',
        default: '#fff2f0',
        description: 'Danger item selected background'
      }, {
        variable: '--b-menu-danger-item-selected-color',
        default: '#cf1322',
        description: 'Danger item selected color'
      }, {
        variable: '--b-menu-sub-menu-item-bg',
        default: 'rgba(0,0,0,0.02)',
        description: 'Submenu content background'
      }, {
        variable: '--b-menu-sub-menu-item-border-radius',
        default: '4px',
        description: 'Submenu item border radius'
      }, {
        variable: '--b-menu-sub-menu-item-selected-color',
        default: '#0958d9',
        description: 'Submenu title color when child selected'
      }, {
        variable: '--b-menu-popup-bg',
        default: '#ffffff',
        description: 'Popup menu background'
      }, {
        variable: '--b-menu-popup-shadow',
        default: '0 6px 16px ...',
        description: 'Popup box shadow'
      }, {
        variable: '--b-menu-popup-border-radius',
        default: '8px',
        description: 'Popup border radius'
      }, {
        variable: '--b-menu-popup-z-index',
        default: '1050',
        description: 'Popup z-index'
      }, {
        variable: '--b-menu-dropdown-width',
        default: '160px',
        description: 'Popup menu min-width'
      }, {
        variable: '--b-menu-collapsed-width',
        default: '80px',
        description: 'Menu width when collapsed'
      }, {
        variable: '--b-menu-collapsed-icon-size',
        default: '16px',
        description: 'Icon size when collapsed'
      }, {
        variable: '--b-menu-active-bar-height',
        default: '2px',
        description: 'Horizontal mode active indicator height'
      }, {
        variable: '--b-menu-active-bar-width',
        default: '3px',
        description: 'Vertical mode active indicator width'
      }, {
        variable: '--b-menu-horizontal-line-height',
        default: '46px',
        description: 'Horizontal menu item line height'
      }, {
        variable: '--b-menu-horizontal-item-hover-bg',
        default: 'transparent',
        description: 'Horizontal item hover background'
      }, {
        variable: '--b-menu-horizontal-item-hover-color',
        default: '#0958d9',
        description: 'Horizontal item hover color'
      }, {
        variable: '--b-menu-horizontal-item-selected-bg',
        default: 'transparent',
        description: 'Horizontal item selected background'
      }, {
        variable: '--b-menu-horizontal-item-selected-color',
        default: '#0958d9',
        description: 'Horizontal item selected color'
      }, {
        variable: '--b-menu-horizontal-item-border-radius',
        default: '0',
        description: 'Horizontal item border radius'
      }, {
        variable: '--b-menu-transition-duration',
        default: '200ms',
        description: 'Animation transition duration'
      }];
      return {
        tokens
      };
    },
    template: \`
      <div style="font-family:sans-serif;padding:1rem;max-width:1100px;margin:0 auto;">
        <h3 style="margin: 0 0 16px; font-size: 16px; font-weight: 600;">BMenu Design Tokens</h3>
        <p style="margin: 0 0 16px; font-size: 13px; color: #555;">
          Override these CSS variables on <code>.b-menu</code> or an ancestor to customize the menu appearance.
        </p>
        <table style="width:100%;border-collapse:collapse;font-size:13px;">
          <thead>
            <tr style="background:oklch(96% 0.002 260);">
              <th style="text-align:left;padding:10px 12px;border-bottom:1px solid oklch(85% 0.005 260);">Variable</th>
              <th style="text-align:left;padding:10px 12px;border-bottom:1px solid oklch(85% 0.005 260);">Default</th>
              <th style="text-align:left;padding:10px 12px;border-bottom:1px solid oklch(85% 0.005 260);">Description</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="token in tokens" :key="token.variable" style="border-bottom:1px solid oklch(94% 0.003 260);">
              <td style="padding:8px 12px;font-family:monospace;font-size:12px;color:#86198f;white-space:nowrap;"><code>{{ token.variable }}</code></td>
              <td style="padding:8px 12px;font-family:monospace;font-size:12px;color:#595959;">{{ token.default }}</td>
              <td style="padding:8px 12px;color:#555;">{{ token.description }}</td>
            </tr>
          </tbody>
        </table>
      </div>
    \`
  })
}`,...T.parameters?.docs?.source}}},E=[`Playground`,`Horizontal`,`Vertical`,`Collapsed`,`ItemGroups`,`DangerItems`,`MultipleSelection`,`Accessibility`,`Theming`,`InteractionTest`,`DisabledItems`,`DesignTokens`]}))();export{x as Accessibility,_ as Collapsed,y as DangerItems,T as DesignTokens,w as DisabledItems,h as Horizontal,C as InteractionTest,v as ItemGroups,b as MultipleSelection,m as Playground,S as Theming,g as Vertical,E as __namedExportsOrder,l as default};