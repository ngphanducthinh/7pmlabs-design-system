import{n as e}from"./chunk-BneVvdWh.js";import{X as t,i as n}from"./iframe-CuxZAc4v.js";import{K as r,t as i}from"./components-De-VN3a5.js";function a(e,t=80,n=160){return Array.from({length:e},(e,r)=>({key:r,height:t+Math.round(Math.sin(r*1.5)*n*.5+n*.5),data:{color:l[r%l.length],label:`Item ${r+1}`}}))}var o,s,c,l,u,d,f,p,m,h,g,_,v,y,b,x;e((()=>{i(),n(),{expect:o,userEvent:s}=__STORYBOOK_MODULE_TEST__,c={title:`Layout/Masonry`,component:r,tags:[`autodocs`],argTypes:{columns:{control:{type:`number`,min:1,max:6,step:1},description:`Number of columns. Also accepts a responsive breakpoint map.`,table:{defaultValue:{summary:`3`},category:`Props`}},gutter:{control:{type:`number`,min:0,max:48,step:4},description:`Gap between items (px). Accepts a number, [colGap, rowGap] tuple, or a responsive map.`,table:{defaultValue:{summary:`0`},category:`Props`}},fresh:{control:`boolean`,description:`Monitor each item's size via ResizeObserver and reflow on change.`,table:{defaultValue:{summary:`false`},category:`Props`}},items:{control:`object`,description:"Array of `BMasonryItem` objects to render.",table:{category:`Props`}},classNames:{control:!1,description:"Customise CSS classes on `root`, `column`, or `item` semantic elements.",table:{category:`Props`}},styles:{control:!1,description:"Customise inline styles on `root`, `column`, or `item` semantic elements.",table:{category:`Props`}},onLayoutChange:{table:{category:`Events`},description:`Fires when the masonry layout recalculates.`}},parameters:{docs:{description:{component:`The <code>BMasonry</code> component implements a Pinterest-style masonry layout. Items are distributed into columns using a "shortest column first" algorithm, ensuring the layout stays as balanced as possible.<br><br>Accepts a fixed column count or a responsive breakpoint map. Supports per-item column pinning, custom gutter (col/row gaps), ResizeObserver-based re-flow (<code>fresh</code>), and full CSS variable theming.`}}}},l=[`oklch(75% 0.15 20)`,`oklch(80% 0.12 140)`,`oklch(78% 0.14 260)`,`oklch(82% 0.10 55)`,`oklch(76% 0.13 310)`,`oklch(80% 0.11 190)`,`oklch(74% 0.16 30)`,`oklch(79% 0.12 100)`],u=`
  <template #item="{ item }">
    <div
      :style="{
        background: item.data.color,
        height: item.height + 'px',
        borderRadius: '8px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: 'oklch(15% 0.02 260)',
        fontWeight: 600,
        fontSize: '14px',
      }"
    >
      {{ item.data.label }}
    </div>
  </template>
`,d={args:{columns:3,gutter:16,items:a(9)},render:e=>({components:{BMasonry:r},setup(){return{args:e}},template:`
      <div style="padding: 24px; background: #f5f5f5; border-radius: 12px;">
        <BMasonry v-bind="args">${u}</BMasonry>
      </div>
    `})},f={name:`Responsive Columns`,parameters:{docs:{description:{story:"Pass a breakpoint map to `columns` to change the column count at different viewport widths."}}},render:()=>({components:{BMasonry:r},setup(){return{items:a(8),columns:{xs:1,sm:2,md:3,lg:4}}},template:`
      <div style="padding: 24px; background: #f5f5f5; border-radius: 12px;">
        <p style="margin-bottom: 16px; font-size: 13px; color: #666;">
          Columns: xs=1 / sm=2 / md=3 / lg=4 - resize the preview panel to see changes.
        </p>
        <BMasonry :columns="columns" :gutter="12" :items="items">${u}</BMasonry>
      </div>
    `})},p={name:`Gutter Variants`,parameters:{docs:{description:{story:"Show `gutter` as a fixed number, a `[colGap, rowGap]` tuple, or zero."}}},render:()=>({components:{BMasonry:r},setup(){return{itemsA:a(6),itemsB:a(6),itemsC:a(6)}},template:`
      <div style="display: flex; flex-direction: column; gap: 32px; padding: 24px;">
        <div>
          <h4 style="margin-bottom:8px">gutter=0 (default)</h4>
          <BMasonry :columns="3" :gutter="0" :items="itemsA">${u}</BMasonry>
        </div>
        <div>
          <h4 style="margin-bottom:8px">gutter=16 (uniform)</h4>
          <BMasonry :columns="3" :gutter="16" :items="itemsB">${u}</BMasonry>
        </div>
        <div>
          <h4 style="margin-bottom:8px">gutter=[24, 8] (col=24, row=8)</h4>
          <BMasonry :columns="3" :gutter="[24, 8]" :items="itemsC">${u}</BMasonry>
        </div>
      </div>
    `})},m={name:`Column Pinning`,parameters:{docs:{description:{story:"Use the `column` property on an item (1-based) to pin it to a specific column, regardless of column heights."}}},render:()=>({components:{BMasonry:r},setup(){return{items:[{key:1,height:120,data:{color:l[0],label:`Pinned col 1`},column:1},{key:2,height:80,data:{color:l[1],label:`Auto col`}},{key:3,height:160,data:{color:l[2],label:`Pinned col 3`},column:3},{key:4,height:100,data:{color:l[3],label:`Auto col`}},{key:5,height:90,data:{color:l[4],label:`Pinned col 1`},column:1},{key:6,height:130,data:{color:l[5],label:`Auto col`}}]}},template:`
      <div style="padding: 24px; background: #f5f5f5; border-radius: 12px;">
        <BMasonry :columns="3" :gutter="16" :items="items">${u}</BMasonry>
      </div>
    `})},h={name:`layoutChange Event`,parameters:{docs:{description:{story:"The `layoutChange` event fires with `{ columns, columnMap }` after each layout calculation."}}},render:()=>({components:{BMasonry:r},setup(){let e=a(6),n=t(null);function r(e){n.value=e}return{items:e,lastPayload:n,onLayoutChange:r}},template:`
      <div style="padding: 24px;">
        <BMasonry :columns="3" :gutter="12" :items="items" @layout-change="onLayoutChange">${u}</BMasonry>
        <pre style="margin-top: 16px; padding: 12px; background: #1e1e1e; color: #d4d4d4; border-radius: 8px; font-size: 12px; overflow: auto;">{{ JSON.stringify(lastPayload, null, 2) }}</pre>
      </div>
    `})},g={name:`Accessibility`,parameters:{docs:{description:{story:'Verify ARIA roles: the root carries `role="list"`, columns carry `role="presentation"`, and each item carries `role="listitem"`. Tab through items to confirm focusability of inner content.'}}},render:()=>({components:{BMasonry:r},setup(){return{items:a(4)}},template:`
      <div style="padding: 24px;">
        <BMasonry :columns="2" :gutter="16" :items="items">
          <template #item="{ item }">
            <div
              role="img"
              tabindex="0"
              :style="{
                background: item.data.color,
                height: item.height + 'px',
                borderRadius: '8px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'oklch(15% 0.02 260)',
                fontWeight: 600,
                fontSize: '14px',
              }"
              :aria-label="item.data.label"
            >
              {{ item.data.label }}
            </div>
          </template>
        </BMasonry>
      </div>
    `}),play:async({canvasElement:e})=>{let t=e.querySelector(`[role="list"]`);o(t).toBeTruthy(),o(t?.getAttribute(`aria-label`)).toBeTruthy(),o(e.querySelectorAll(`[role="listitem"]`).length).toBe(4),o(e.querySelectorAll(`[role="presentation"]`).length).toBeGreaterThan(0),await s.tab();let n=document.activeElement;o(n?.getAttribute(`aria-label`)).toBeTruthy()}},_={name:`Theming (CSS Variables)`,parameters:{docs:{description:{story:"Override the scoped CSS variables on `.b-masonry` to customise the layout. This story overrides `--b-masonry-item-border-radius`, `--b-masonry-item-transition-duration`, and `--b-masonry-item-bg`."}}},render:()=>({components:{BMasonry:r},setup(){return{items:a(6)}},template:`
      <div style="padding: 24px; background: #0f0f0f; border-radius: 12px;">
        <BMasonry
          :columns="3"
          :gutter="20"
          :items="items"
          :styles="{
            root: {
              '--b-masonry-item-border-radius': '16px',
              '--b-masonry-item-transition-duration': '400ms',
              '--b-masonry-item-bg': 'oklch(25% 0.03 260)',
            }
          }"
        >
          <template #item="{ item }">
            <div
              :style="{
                height: item.height + 'px',
                borderRadius: 'var(--b-masonry-item-border-radius)',
                background: 'var(--b-masonry-item-bg)',
                border: '1px solid oklch(40% 0.05 260)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: item.data.color,
                fontWeight: 700,
                fontSize: '13px',
              }"
            >
              {{ item.data.label }}
            </div>
          </template>
        </BMasonry>
      </div>
    `})},v={name:`Interaction Tests`,args:{columns:3,gutter:16,items:a(9)},render:e=>({components:{BMasonry:r},setup(){let n=t(null);return{args:e,layoutPayload:n,onLayoutChange:e=>{n.value=e}}},template:`
      <div>
        <BMasonry v-bind="args" @layout-change="onLayoutChange">
          <template #item="{ item }">
            <div
              :data-testid="'item-' + item.key"
              :style="{
                background: item.data.color,
                height: item.height + 'px',
                borderRadius: '8px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'oklch(15% 0.02 260)',
                fontWeight: 600,
              }"
            >{{ item.data.label }}</div>
          </template>
        </BMasonry>
        <div data-testid="layout-output" style="display:none">{{ JSON.stringify(layoutPayload) }}</div>
      </div>
    `}),play:async({canvasElement:e})=>{let t=e.querySelectorAll(`[role="listitem"]`);o(t.length).toBe(9),o(e.querySelectorAll(`[role="presentation"]`).length).toBe(3);for(let e of Array.from(t))o(e).toBeVisible();let n=e.querySelector(`[role="list"]`);o(n).toBeTruthy(),o(e.querySelectorAll(`[data-masonry-key]`).length).toBe(9);let r=n?.getAttribute(`style`)??``;o(r).toContain(`--b-masonry-columns`),o(r).toContain(`--b-masonry-col-gap`)}},y=[{token:`--b-masonry-columns`,defaultValue:`3`,description:"Number of columns (also driven by the `columns` prop)."},{token:`--b-masonry-col-gap`,defaultValue:`1rem`,description:`Horizontal gap between columns.`},{token:`--b-masonry-row-gap`,defaultValue:`1rem`,description:`Vertical gap between items within a column.`},{token:`--b-masonry-item-bg`,defaultValue:`transparent`,description:`Background color of individual items.`},{token:`--b-masonry-item-border-radius`,defaultValue:`0`,description:`Corner radius of individual items.`},{token:`--b-masonry-item-transition-duration`,defaultValue:`300ms`,description:`Duration of item enter/move/leave transitions.`},{token:`--b-masonry-item-transition-timing`,defaultValue:`cubic-bezier(0.4, 0, 0.2, 1)`,description:`Easing curve of item transitions.`}],b={name:`Design Tokens`,parameters:{controls:{disable:!0},docs:{description:{story:`Reference table of every <code>--b-masonry-*</code> CSS custom property consumers can override to retheme the component. BMasonry has no AntD equivalent; all tokens are local.`}}},render:()=>({components:{BMasonry:r},setup(){return{tokens:y,items:Array.from({length:6}).map((e,t)=>({key:String(t+1),height:60+t*23%80}))}},template:`
      <div style="font-family:sans-serif;padding:1rem;max-width:1100px;margin:0 auto;">
        <h2 style="margin:0 0 8px;">BMasonry - Design Tokens</h2>
        <p style="margin:0 0 24px;color:#595959;">
          All tokens scoped to <code>.b-masonry</code>. Override inline or via a CSS class.
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
          Two tokens overridden inline (item bg, border radius).
        </p>
        <BMasonry
          :columns="3"
          :gutter="16"
          :items="items"
          style="
            --b-masonry-item-bg: oklch(96% 0.04 290);
            --b-masonry-item-border-radius: 12px;
          "
        >
          <template #item="{ item }">
            <div :style="{ height: item.height + 'px', padding: '12px', color: 'oklch(35% 0.18 290)' }">
              Item {{ item.key }}
            </div>
          </template>
        </BMasonry>
      </div>
    `})},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    columns: 3,
    gutter: 16,
    items: makeItems(9)
  },
  render: args => ({
    components: {
      BMasonry
    },
    setup() {
      return {
        args
      };
    },
    template: \`
      <div style="padding: 24px; background: #f5f5f5; border-radius: 12px;">
        <BMasonry v-bind="args">\${cardTemplate}</BMasonry>
      </div>
    \`
  })
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  name: 'Responsive Columns',
  parameters: {
    docs: {
      description: {
        story: 'Pass a breakpoint map to \`columns\` to change the column count at different viewport widths.'
      }
    }
  },
  render: () => ({
    components: {
      BMasonry
    },
    setup() {
      const items = makeItems(8);
      const columns = {
        xs: 1,
        sm: 2,
        md: 3,
        lg: 4
      };
      return {
        items,
        columns
      };
    },
    template: \`
      <div style="padding: 24px; background: #f5f5f5; border-radius: 12px;">
        <p style="margin-bottom: 16px; font-size: 13px; color: #666;">
          Columns: xs=1 / sm=2 / md=3 / lg=4 - resize the preview panel to see changes.
        </p>
        <BMasonry :columns="columns" :gutter="12" :items="items">\${cardTemplate}</BMasonry>
      </div>
    \`
  })
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  name: 'Gutter Variants',
  parameters: {
    docs: {
      description: {
        story: 'Show \`gutter\` as a fixed number, a \`[colGap, rowGap]\` tuple, or zero.'
      }
    }
  },
  render: () => ({
    components: {
      BMasonry
    },
    setup() {
      return {
        itemsA: makeItems(6),
        itemsB: makeItems(6),
        itemsC: makeItems(6)
      };
    },
    template: \`
      <div style="display: flex; flex-direction: column; gap: 32px; padding: 24px;">
        <div>
          <h4 style="margin-bottom:8px">gutter=0 (default)</h4>
          <BMasonry :columns="3" :gutter="0" :items="itemsA">\${cardTemplate}</BMasonry>
        </div>
        <div>
          <h4 style="margin-bottom:8px">gutter=16 (uniform)</h4>
          <BMasonry :columns="3" :gutter="16" :items="itemsB">\${cardTemplate}</BMasonry>
        </div>
        <div>
          <h4 style="margin-bottom:8px">gutter=[24, 8] (col=24, row=8)</h4>
          <BMasonry :columns="3" :gutter="[24, 8]" :items="itemsC">\${cardTemplate}</BMasonry>
        </div>
      </div>
    \`
  })
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  name: 'Column Pinning',
  parameters: {
    docs: {
      description: {
        story: 'Use the \`column\` property on an item (1-based) to pin it to a specific column, ' + 'regardless of column heights.'
      }
    }
  },
  render: () => ({
    components: {
      BMasonry
    },
    setup() {
      const items: BMasonryItem[] = [{
        key: 1,
        height: 120,
        data: {
          color: COLORS[0],
          label: 'Pinned col 1'
        },
        column: 1
      }, {
        key: 2,
        height: 80,
        data: {
          color: COLORS[1],
          label: 'Auto col'
        }
      }, {
        key: 3,
        height: 160,
        data: {
          color: COLORS[2],
          label: 'Pinned col 3'
        },
        column: 3
      }, {
        key: 4,
        height: 100,
        data: {
          color: COLORS[3],
          label: 'Auto col'
        }
      }, {
        key: 5,
        height: 90,
        data: {
          color: COLORS[4],
          label: 'Pinned col 1'
        },
        column: 1
      }, {
        key: 6,
        height: 130,
        data: {
          color: COLORS[5],
          label: 'Auto col'
        }
      }];
      return {
        items
      };
    },
    template: \`
      <div style="padding: 24px; background: #f5f5f5; border-radius: 12px;">
        <BMasonry :columns="3" :gutter="16" :items="items">\${cardTemplate}</BMasonry>
      </div>
    \`
  })
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  name: 'layoutChange Event',
  parameters: {
    docs: {
      description: {
        story: 'The \`layoutChange\` event fires with \`{ columns, columnMap }\` after each layout calculation.'
      }
    }
  },
  render: () => ({
    components: {
      BMasonry
    },
    setup() {
      const items = makeItems(6);
      const lastPayload = ref<BMasonryLayoutChangePayload | null>(null);
      function onLayoutChange(p: BMasonryLayoutChangePayload) {
        lastPayload.value = p;
      }
      return {
        items,
        lastPayload,
        onLayoutChange
      };
    },
    template: \`
      <div style="padding: 24px;">
        <BMasonry :columns="3" :gutter="12" :items="items" @layout-change="onLayoutChange">\${cardTemplate}</BMasonry>
        <pre style="margin-top: 16px; padding: 12px; background: #1e1e1e; color: #d4d4d4; border-radius: 8px; font-size: 12px; overflow: auto;">{{ JSON.stringify(lastPayload, null, 2) }}</pre>
      </div>
    \`
  })
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  name: 'Accessibility',
  parameters: {
    docs: {
      description: {
        story: 'Verify ARIA roles: the root carries \`role="list"\`, columns carry \`role="presentation"\`, ' + 'and each item carries \`role="listitem"\`. Tab through items to confirm focusability of inner content.'
      }
    }
  },
  render: () => ({
    components: {
      BMasonry
    },
    setup() {
      return {
        items: makeItems(4)
      };
    },
    template: \`
      <div style="padding: 24px;">
        <BMasonry :columns="2" :gutter="16" :items="items">
          <template #item="{ item }">
            <div
              role="img"
              tabindex="0"
              :style="{
                background: item.data.color,
                height: item.height + 'px',
                borderRadius: '8px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'oklch(15% 0.02 260)',
                fontWeight: 600,
                fontSize: '14px',
              }"
              :aria-label="item.data.label"
            >
              {{ item.data.label }}
            </div>
          </template>
        </BMasonry>
      </div>
    \`
  }),
  play: async ({
    canvasElement
  }) => {
    // Root has role=list
    const list = canvasElement.querySelector('[role="list"]');
    expect(list).toBeTruthy();
    expect(list?.getAttribute('aria-label')).toBeTruthy();

    // Each item wrapper has role=listitem
    const listItems = canvasElement.querySelectorAll('[role="listitem"]');
    expect(listItems.length).toBe(4);

    // Columns have role=presentation (not exposed to AT)
    const cols = canvasElement.querySelectorAll('[role="presentation"]');
    expect(cols.length).toBeGreaterThan(0);

    // Tab through focusable items
    await userEvent.tab();
    const focused = document.activeElement;
    expect(focused?.getAttribute('aria-label')).toBeTruthy();
  }
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  name: 'Theming (CSS Variables)',
  parameters: {
    docs: {
      description: {
        story: 'Override the scoped CSS variables on \`.b-masonry\` to customise the layout. ' + 'This story overrides \`--b-masonry-item-border-radius\`, \`--b-masonry-item-transition-duration\`, ' + 'and \`--b-masonry-item-bg\`.'
      }
    }
  },
  render: () => ({
    components: {
      BMasonry
    },
    setup() {
      return {
        items: makeItems(6)
      };
    },
    template: \`
      <div style="padding: 24px; background: #0f0f0f; border-radius: 12px;">
        <BMasonry
          :columns="3"
          :gutter="20"
          :items="items"
          :styles="{
            root: {
              '--b-masonry-item-border-radius': '16px',
              '--b-masonry-item-transition-duration': '400ms',
              '--b-masonry-item-bg': 'oklch(25% 0.03 260)',
            }
          }"
        >
          <template #item="{ item }">
            <div
              :style="{
                height: item.height + 'px',
                borderRadius: 'var(--b-masonry-item-border-radius)',
                background: 'var(--b-masonry-item-bg)',
                border: '1px solid oklch(40% 0.05 260)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: item.data.color,
                fontWeight: 700,
                fontSize: '13px',
              }"
            >
              {{ item.data.label }}
            </div>
          </template>
        </BMasonry>
      </div>
    \`
  })
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  name: 'Interaction Tests',
  args: {
    columns: 3,
    gutter: 16,
    items: makeItems(9)
  },
  render: args => ({
    components: {
      BMasonry
    },
    setup() {
      const layoutPayload = ref<BMasonryLayoutChangePayload | null>(null);
      return {
        args,
        layoutPayload,
        onLayoutChange: (p: BMasonryLayoutChangePayload) => {
          layoutPayload.value = p;
        }
      };
    },
    template: \`
      <div>
        <BMasonry v-bind="args" @layout-change="onLayoutChange">
          <template #item="{ item }">
            <div
              :data-testid="'item-' + item.key"
              :style="{
                background: item.data.color,
                height: item.height + 'px',
                borderRadius: '8px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'oklch(15% 0.02 260)',
                fontWeight: 600,
              }"
            >{{ item.data.label }}</div>
          </template>
        </BMasonry>
        <div data-testid="layout-output" style="display:none">{{ JSON.stringify(layoutPayload) }}</div>
      </div>
    \`
  }),
  play: async ({
    canvasElement
  }) => {
    // ── 1. Correct item count ─────────────────────────────────────────────────
    const items = canvasElement.querySelectorAll('[role="listitem"]');
    expect(items.length).toBe(9);

    // ── 2. Three columns rendered ─────────────────────────────────────────────
    const cols = canvasElement.querySelectorAll('[role="presentation"]');
    expect(cols.length).toBe(3);

    // ── 3. Each item is visible ───────────────────────────────────────────────
    for (const item of Array.from(items)) {
      expect(item).toBeVisible();
    }

    // ── 4. ARIA list structure ────────────────────────────────────────────────
    const list = canvasElement.querySelector('[role="list"]');
    expect(list).toBeTruthy();

    // ── 5. data-masonry-key set on each listitem ──────────────────────────────
    const withKey = canvasElement.querySelectorAll('[data-masonry-key]');
    expect(withKey.length).toBe(9);

    // ── 6. CSS vars injected on root ──────────────────────────────────────────
    const rootStyle = (list as HTMLElement)?.getAttribute('style') ?? '';
    expect(rootStyle).toContain('--b-masonry-columns');
    expect(rootStyle).toContain('--b-masonry-col-gap');
  }
}`,...v.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  name: 'Design Tokens',
  parameters: {
    controls: {
      disable: true
    },
    docs: {
      description: {
        story: 'Reference table of every <code>--b-masonry-*</code> CSS custom property ' + 'consumers can override to retheme the component. ' + 'BMasonry has no AntD equivalent; all tokens are local.'
      }
    }
  },
  render: () => ({
    components: {
      BMasonry
    },
    setup() {
      const items = Array.from({
        length: 6
      }).map((_, i) => ({
        key: String(i + 1),
        height: 60 + i * 23 % 80
      }));
      return {
        tokens: DESIGN_TOKENS,
        items
      };
    },
    template: \`
      <div style="font-family:sans-serif;padding:1rem;max-width:1100px;margin:0 auto;">
        <h2 style="margin:0 0 8px;">BMasonry - Design Tokens</h2>
        <p style="margin:0 0 24px;color:#595959;">
          All tokens scoped to <code>.b-masonry</code>. Override inline or via a CSS class.
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
          Two tokens overridden inline (item bg, border radius).
        </p>
        <BMasonry
          :columns="3"
          :gutter="16"
          :items="items"
          style="
            --b-masonry-item-bg: oklch(96% 0.04 290);
            --b-masonry-item-border-radius: 12px;
          "
        >
          <template #item="{ item }">
            <div :style="{ height: item.height + 'px', padding: '12px', color: 'oklch(35% 0.18 290)' }">
              Item {{ item.key }}
            </div>
          </template>
        </BMasonry>
      </div>
    \`
  })
}`,...b.parameters?.docs?.source}}},x=[`Playground`,`ResponsiveColumns`,`GutterVariants`,`ColumnPinning`,`LayoutChangeEvent`,`Accessibility`,`Theming`,`InteractionTests`,`DesignTokens`]}))();export{g as Accessibility,m as ColumnPinning,b as DesignTokens,p as GutterVariants,v as InteractionTests,h as LayoutChangeEvent,d as Playground,f as ResponsiveColumns,_ as Theming,x as __namedExportsOrder,c as default};