import{n as e}from"./chunk-BneVvdWh.js";import{X as t,i as n}from"./iframe-CuxZAc4v.js";import{n as r,t as i}from"./BTree-CxJ_XlrD.js";var a,o,s,c,l,u,d,f,p,m,h,g,_,v,y,b,x,S,C,w,T,E,D,O,k,A,j,M;e((()=>{n(),r(),{expect:a,fireEvent:o,userEvent:s,waitFor:c,within:l}=__STORYBOOK_MODULE_TEST__,u=[{key:`0-0`,title:`Parent 0-0`,children:[{key:`0-0-0`,title:`Child 0-0-0`,children:[{key:`0-0-0-0`,title:`Leaf 0-0-0-0`},{key:`0-0-0-1`,title:`Leaf 0-0-0-1`}]},{key:`0-0-1`,title:`Child 0-0-1`,children:[{key:`0-0-1-0`,title:`Leaf 0-0-1-0`},{key:`0-0-1-1`,title:`Leaf 0-0-1-1`,disabled:!0}]}]},{key:`0-1`,title:`Parent 0-1`,children:[{key:`0-1-0`,title:`Child 0-1-0`},{key:`0-1-1`,title:`Child 0-1-1`}]},{key:`0-2`,title:`Leaf 0-2`,isLeaf:!0}],d={title:`Data Display/Tree`,component:i,tags:[`autodocs`],argTypes:{checkedKeys:{control:`object`,table:{category:`Two-Way Binding Props`,type:{summary:`BTreeNodeKey[] | BTreeCheckedKeys`}}},selectedKeys:{control:`object`,table:{category:`Two-Way Binding Props`,type:{summary:`BTreeNodeKey[]`}}},expandedKeys:{control:`object`,table:{category:`Two-Way Binding Props`,type:{summary:`BTreeNodeKey[]`}}},loadedKeys:{control:`object`,table:{category:`Two-Way Binding Props`,type:{summary:`BTreeNodeKey[]`}}},checkable:{control:`boolean`,table:{defaultValue:{summary:`false`}}},checkStrictly:{control:`boolean`,table:{defaultValue:{summary:`false`}}},multiple:{control:`boolean`,table:{defaultValue:{summary:`false`}}},selectable:{control:`boolean`,table:{defaultValue:{summary:`true`}}},disabled:{control:`boolean`,table:{defaultValue:{summary:`false`}}},showIcon:{control:`boolean`,table:{defaultValue:{summary:`false`}}},showLine:{control:`boolean`,table:{defaultValue:{summary:`false`}}},blockNode:{control:`boolean`,table:{defaultValue:{summary:`false`}}},draggable:{control:`boolean`,table:{defaultValue:{summary:`false`}}},defaultExpandAll:{control:`boolean`,table:{defaultValue:{summary:`false`}}},directory:{control:`boolean`,table:{defaultValue:{summary:`false`}}},expandAction:{control:`select`,options:[`click`,`doubleClick`,!1],table:{defaultValue:{summary:`click`}}},height:{control:{type:`number`,min:100,max:600,step:50},table:{defaultValue:{summary:`undefined`}}},treeData:{control:`object`}},parameters:{docs:{description:{component:`A hierarchical list structure component, re-implementing Ant Design Tree with Vue 3 idiomatic patterns, full keyboard navigation, and ARIA tree roles.`}},a11y:{test:`error`}}},f={args:{treeData:u,defaultExpandAll:!0,checkable:!1,showLine:!1,showIcon:!1,blockNode:!1,disabled:!1,multiple:!1},render:e=>({components:{BTree:i},setup(){return{args:e}},template:`<BTree v-bind="args" style="max-width: 320px;" />`})},p={parameters:{controls:{disable:!0}},render:()=>({components:{BTree:i},setup(){return{data:u}},template:`
      <BTree
        :tree-data="data"
        :default-expanded-keys="['0-0', '0-0-0']"
        :default-selected-keys="['0-0-0-0']"
        style="max-width: 320px;"
      />
    `})},m={parameters:{controls:{disable:!0}},render:()=>({components:{BTree:i},setup(){return{data:u}},template:`
      <BTree
        :tree-data="data"
        checkable
        :default-expanded-keys="['0-0']"
        :default-checked-keys="['0-0-0-0', '0-0-0-1']"
        style="max-width: 320px;"
      />
    `})},h={parameters:{controls:{disable:!0}},render:()=>({components:{BTree:i},setup(){return{data:u}},template:`
      <BTree
        :tree-data="data"
        show-line
        :default-expanded-keys="['0-0', '0-0-0']"
        style="max-width: 320px;"
      />
    `})},g={parameters:{controls:{disable:!0}},render:()=>({components:{BTree:i},setup(){return{data:u}},template:`
      <div style="display: flex; gap: 2rem;">
        <div>
          <p style="margin-bottom: 8px; font-size: 12px; color: #767676">expandAction: click (default)</p>
          <BTree :tree-data="data" directory expand-action="click" style="max-width: 240px;" />
        </div>
        <div>
          <p style="margin-bottom: 8px; font-size: 12px; color: #767676">expandAction: doubleClick</p>
          <BTree :tree-data="data" directory expand-action="doubleClick" style="max-width: 240px;" />
        </div>
      </div>
    `})},_={parameters:{controls:{disable:!0}},render:()=>({components:{BTree:i},setup(){return{data:u}},template:`
      <BTree
        :tree-data="data"
        multiple
        :default-expanded-keys="['0-0']"
        style="max-width: 320px;"
      />
    `})},v={parameters:{controls:{disable:!0}},render:()=>({components:{BTree:i},setup(){return{data:u}},template:`
      <div style="display: flex; gap: 2rem;">
        <div>
          <p style="margin-bottom: 8px; font-size: 12px; color: #767676">Entire tree disabled</p>
          <BTree :tree-data="data" disabled :default-expanded-keys="['0-0']" style="max-width: 240px;" />
        </div>
        <div>
          <p style="margin-bottom: 8px; font-size: 12px; color: #767676">Individual node disabled</p>
          <BTree :tree-data="data" :default-expanded-keys="['0-0', '0-0-1']" style="max-width: 240px;" />
        </div>
      </div>
    `})},y={parameters:{controls:{disable:!0}},render:()=>({components:{BTree:i},setup(){return{data:u}},template:`
      <BTree
        :tree-data="data"
        block-node
        :default-expanded-keys="['0-0']"
        style="max-width: 320px;"
      />
    `})},b={parameters:{controls:{disable:!0}},render:()=>({components:{BTree:i},setup(){return{expandedKeys:t([`0-0`]),selectedKeys:t([]),checkedKeys:t([]),data:u}},template:`
      <div>
        <div style="margin-bottom: 12px; font-size: 12px; color: #767676;">
          <div>Selected: {{ selectedKeys.join(', ') || 'none' }}</div>
          <div>Expanded: {{ expandedKeys.join(', ') }}</div>
          <div>Checked: {{ checkedKeys.join(', ') || 'none' }}</div>
        </div>
        <BTree
          :tree-data="data"
          checkable
          v-model:expanded-keys="expandedKeys"
          v-model:selected-keys="selectedKeys"
          v-model:checked-keys="checkedKeys"
          style="max-width: 320px;"
        />
      </div>
    `})},x={parameters:{controls:{disable:!0}},render:()=>({components:{BTree:i},setup(){let e=t([{key:`node-1`,title:`Expand to load children`},{key:`node-2`,title:`Another async parent`}]);async function n(t){await new Promise(e=>setTimeout(e,1e3));let n=[{key:`${t.key}-1`,title:`${t.title} – Child 1`,isLeaf:!0},{key:`${t.key}-2`,title:`${t.title} – Child 2`,isLeaf:!0}];e.value=e.value.map(e=>e.key===t.key?{...e,children:n}:e)}return{treeData:e,loadData:n}},template:`
      <BTree
        :tree-data="treeData"
        :load-data="loadData"
        style="max-width: 320px;"
      />
    `})},S={parameters:{controls:{disable:!0}},render:()=>({components:{BTree:i},setup(){return{data:u}},template:`
      <BTree
        :tree-data="data"
        :default-expanded-keys="['0-0']"
        style="max-width: 320px;"
      >
        <template #title="{ node }">
          <span>
            {{ node.title }}
            <span
              v-if="node.isLeaf"
              style="margin-left: 4px; font-size: 10px; color: #595959; background: #f0f0f0; padding: 1px 4px; border-radius: 3px;"
            >leaf</span>
          </span>
        </template>
      </BTree>
    `})},C={parameters:{controls:{disable:!0}},render:()=>({components:{BTree:i},setup(){return{data:u}},template:`
      <div>
        <p style="margin-bottom: 12px; font-size: 13px;">
          Use <kbd>Up</kbd> <kbd>Down</kbd> to navigate,
          <kbd>Right</kbd> to expand,
          <kbd>Left</kbd> to collapse,
          <kbd>Enter</kbd>/<kbd>Space</kbd> to select,
          <kbd>Home</kbd>/<kbd>End</kbd> to jump.
        </p>
        <BTree
          :tree-data="data"
          checkable
          :default-expanded-keys="['0-0']"
          style="max-width: 320px;"
          aria-label="File tree"
        />
      </div>
    `}),play:async({canvasElement:e})=>{let t=l(e),n=t.getByRole(`tree`);a(n).toBeDefined();let r=t.getAllByRole(`treeitem`);a(r.length).toBeGreaterThan(0),a(r.filter(e=>e.getAttribute(`aria-level`)===`1`).length).toBeGreaterThan(0),a(r.find(e=>e.getAttribute(`aria-expanded`)!==null)).toBeDefined(),t.getAllByRole(`checkbox`).forEach(e=>{let t=e.getAttribute(`aria-checked`);a([`true`,`false`,`mixed`]).toContain(t)}),a(r.filter(e=>e.getAttribute(`tabindex`)===`0`)).toHaveLength(1),await s.click(n),await s.keyboard(`{ArrowDown}`),e.querySelectorAll(`.b-tree__switcher`).forEach(e=>{a(e.getAttribute(`aria-hidden`)).toBe(`true`)})}},w={parameters:{controls:{disable:!0},docs:{description:{story:`Override CSS custom properties directly on the component to theme it without global styles.`}}},render:()=>({components:{BTree:i},setup(){return{data:u}},template:`
      <div style="display: flex; gap: 2rem; flex-wrap: wrap;">
        <div>
          <p style="margin-bottom: 8px; font-size: 12px; color: #767676">Default</p>
          <BTree :tree-data="data" :default-expanded-keys="['0-0']" style="max-width: 240px;" />
        </div>

        <div>
          <p style="margin-bottom: 8px; font-size: 12px; color: #767676">Purple theme</p>
          <BTree
            :tree-data="data"
            :default-expanded-keys="['0-0']"
            :style="{
              '--b-tree-node-selected-bg': 'oklch(90% 0.08 300)',
              '--b-tree-node-selected-color': 'oklch(25% 0.1 300)',
              '--b-tree-checkbox-checked-bg': 'oklch(55% 0.22 300)',
              '--b-tree-checkbox-checked-border': 'oklch(55% 0.22 300)',
              '--b-tree-title-filtered-color': 'oklch(55% 0.22 300)',
            }"
            style="max-width: 240px;"
          />
        </div>

        <div>
          <p style="margin-bottom: 8px; font-size: 12px; color: #767676">Compact (custom indent + height)</p>
          <BTree
            :tree-data="data"
            :default-expanded-keys="['0-0']"
            :style="{
              '--b-tree-node-height': '18px',
              '--b-tree-indent-size': '16px',
              '--b-tree-font-size': '12px',
            }"
            style="max-width: 240px;"
          />
        </div>
      </div>
    `})},T={name:`Interaction: Expand and Collapse`,parameters:{controls:{disable:!0}},render:()=>({components:{BTree:i},setup(){return{data:u}},template:`<BTree :tree-data="data" style="max-width: 320px;" />`}),play:async({canvasElement:e})=>{let t=l(e),n=t.getAllByRole(`treeitem`);a(n).toHaveLength(3);let r=e.querySelector(`.b-tree__switcher`);await s.click(r),n=t.getAllByRole(`treeitem`),a(n.length).toBeGreaterThan(3),await s.click(r),n=t.getAllByRole(`treeitem`),a(n).toHaveLength(3)}},E={name:`Interaction: Node Selection`,parameters:{controls:{disable:!0}},render:()=>({components:{BTree:i},setup(){return{data:u}},template:`<BTree :tree-data="data" style="max-width: 320px;" />`}),play:async({canvasElement:e})=>{let t=l(e).getByText(`Leaf 0-2`);await s.click(t);let n=t.closest(`[role="treeitem"]`);a(n.classList.contains(`b-tree__node--selected`)).toBe(!0),a(n.getAttribute(`aria-selected`)).toBe(`true`)}},D={name:`Interaction: Checkboxes`,parameters:{controls:{disable:!0}},render:()=>({components:{BTree:i},setup(){return{data:u}},template:`<BTree :tree-data="data" checkable :default-expanded-keys="['0-0', '0-0-0']" style="max-width: 320px;" />`}),play:async({canvasElement:e})=>{let t=l(e),n=t.getByText(`Leaf 0-0-0-0`).closest(`[role="treeitem"]`).querySelector(`[role="checkbox"]`);a(n.getAttribute(`aria-checked`)).toBe(`false`),await s.click(n),a(n.getAttribute(`aria-checked`)).toBe(`true`),a(t.getByText(`Child 0-0-0`).closest(`[role="treeitem"]`).querySelector(`[role="checkbox"]`).getAttribute(`aria-checked`)).toBe(`mixed`)}},O={name:`Interaction: Keyboard Navigation`,parameters:{controls:{disable:!0}},render:()=>({components:{BTree:i},setup(){return{data:u}},template:`<BTree :tree-data="data" style="max-width: 320px;" />`}),play:async({canvasElement:e})=>{let t=l(e),n=t.getByRole(`tree`),r=t.getAllByRole(`treeitem`);await s.click(r[0]),await s.keyboard(`{ArrowDown}`),a(t.getAllByRole(`treeitem`)[1].getAttribute(`tabindex`)).toBe(`0`),await s.keyboard(`{ArrowUp}`),await s.keyboard(`{ArrowRight}`),a(t.getAllByRole(`treeitem`).length).toBeGreaterThan(3),await s.keyboard(`{End}`);let i=t.getAllByRole(`treeitem`),o=i[i.length-1];a(o.getAttribute(`tabindex`)).toBe(`0`),a(n).toBeInTheDocument()}},k={parameters:{controls:{disable:!0},docs:{description:{story:"Drag a node and drop it onto another to reorder the tree. The `drop` event provides `dragNode`, `node` (drop target), `dropPosition`, and `dropToGap`."}}},render:()=>({components:{BTree:i},setup(){let e=t([{key:`A`,title:`Folder A`,children:[{key:`A-1`,title:`File A-1`,isLeaf:!0},{key:`A-2`,title:`File A-2`,isLeaf:!0}]},{key:`B`,title:`Folder B`,children:[{key:`B-1`,title:`File B-1`,isLeaf:!0},{key:`B-2`,title:`File B-2`,isLeaf:!0}]},{key:`C`,title:`Loose File C`,isLeaf:!0}]),n=t(null);function r(e,t){let n=null;return{list:e.filter(e=>e.key===t?(n=e,!1):!0).map(e=>{if(e.children?.length){let i=r(e.children,t);if(i.removed)return n=i.removed,{...e,children:i.list}}return e}),removed:n}}function i(e,t,n,r,a){return e.flatMap(e=>e.key===t?!r&&e.children!==void 0?[{...e,children:[...e.children??[],n]}]:a<0?[n,e]:[e,n]:e.children?.length?[{...e,children:i(e.children,t,n,r,a)}]:[e])}function a({node:t,dragNode:a,dropPosition:o,dropToGap:s}){n.value=`"${a.title}" → ${s?`beside`:`into`} "${t.title}"`;let{list:c,removed:l}=r(e.value,a.key);l&&(e.value=i(c,t.key,l,s,o))}return{treeData:e,lastDrop:n,onDrop:a}},template:`
      <div>
        <p style="margin-bottom: 8px; font-size: 12px; color: #767676;">
          Drag any node onto another to move it inside that folder.
        </p>
        <BTree
          :tree-data="treeData"
          draggable
          :default-expanded-keys="['A', 'B']"
          block-node
          style="max-width: 320px;"
          @drop="onDrop"
        />
        <p
          v-if="lastDrop"
          style="margin-top: 10px; font-size: 12px; color: #555; font-style: italic;"
        >
          Last drop: {{ lastDrop }}
        </p>
      </div>
    `}),play:async({canvasElement:e})=>{let t=l(e).getAllByRole(`treeitem`);t.forEach(e=>{a(e.getAttribute(`draggable`)).toBe(`true`)});let n=t[0];o.dragStart(n),await c(()=>a(n.classList.contains(`b-tree__node--dragging`)).toBe(!0)),o.dragEnd(n),await c(()=>a(n.classList.contains(`b-tree__node--dragging`)).toBe(!1))}},A=[{token:`--b-tree-node-hover-bg`,defaultValue:`oklch(95% 0.003 264)`,description:`Background of a hovered node (AntD: nodeHoverBg).`},{token:`--b-tree-node-hover-color`,defaultValue:`oklch(20% 0.014 264)`,description:`Text color of a hovered node (AntD: nodeHoverColor).`},{token:`--b-tree-node-selected-bg`,defaultValue:`oklch(94% 0.08 254)`,description:`Background of a selected node (AntD: nodeSelectedBg).`},{token:`--b-tree-node-selected-color`,defaultValue:`oklch(20% 0.014 264)`,description:`Text color of a selected node (AntD: nodeSelectedColor).`},{token:`--b-tree-directory-selected-bg`,defaultValue:`oklch(55% 0.22 260)`,description:`Background of the selected node in directory mode (AntD: directoryNodeSelectedBg).`},{token:`--b-tree-directory-selected-color`,defaultValue:`oklch(100% 0 0)`,description:`Text color of the selected node in directory mode (AntD: directoryNodeSelectedColor).`},{token:`--b-tree-indent-size`,defaultValue:`24px`,description:`Indent width per level (AntD: indentSize).`},{token:`--b-tree-switcher-size`,defaultValue:`24px`,description:`Width of the expand/collapse switcher (AntD: switcherSize).`},{token:`--b-tree-node-height`,defaultValue:`24px`,description:`Height of each node title (AntD: titleHeight).`},{token:`--b-tree-border-radius`,defaultValue:`6px`,description:`Corner radius applied to interactive node states.`},{token:`--b-tree-font-size`,defaultValue:`14px`,description:`Base font size of tree text.`},{token:`--b-tree-gap`,defaultValue:`4px`,description:`Gap between switcher, checkbox, icon, and title.`},{token:`--b-tree-icon-size`,defaultValue:`14px`,description:`Size of node icons.`},{token:`--b-tree-line-color`,defaultValue:`oklch(88% 0.006 264)`,description:`Color of connecting lines in showLine mode.`},{token:`--b-tree-title-color`,defaultValue:`oklch(20% 0.014 264)`,description:`Default node title color.`},{token:`--b-tree-title-filtered-color`,defaultValue:`oklch(55% 0.22 260)`,description:`Color used to highlight nodes that match a filter.`},{token:`--b-tree-switcher-color`,defaultValue:`oklch(55% 0.008 264)`,description:`Color of the expand/collapse chevron.`},{token:`--b-tree-node-disabled-color`,defaultValue:`oklch(70% 0.005 264)`,description:`Text color of disabled nodes.`},{token:`--b-tree-checkbox-bg`,defaultValue:`oklch(100% 0 0)`,description:`Background of the node checkbox.`},{token:`--b-tree-checkbox-border`,defaultValue:`oklch(75% 0.008 264)`,description:`Border of the node checkbox.`},{token:`--b-tree-checkbox-checked-bg`,defaultValue:`oklch(55% 0.22 260)`,description:`Background of a checked node checkbox.`},{token:`--b-tree-checkbox-checked-border`,defaultValue:`oklch(55% 0.22 260)`,description:`Border of a checked node checkbox.`},{token:`--b-tree-checkbox-indeterminate-bg`,defaultValue:`oklch(55% 0.22 260)`,description:`Background of the indeterminate state.`},{token:`--b-tree-checkbox-size`,defaultValue:`16px`,description:`Size of the node checkbox.`},{token:`--b-tree-spin-duration`,defaultValue:`700ms`,description:`Duration of the loading spinner rotation.`},{token:`--b-tree-transition-duration`,defaultValue:`200ms`,description:`Duration of color/background transitions.`}],j={name:`Design Tokens`,parameters:{controls:{disable:!0},docs:{description:{story:`Reference table of every <code>--b-tree-*</code> CSS custom property consumers can override to retheme the component.`}}},render:()=>({components:{BTree:i},setup:()=>({tokens:A,treeData:[{key:`0`,title:`Root`,children:[{key:`0-0`,title:`Child A`},{key:`0-1`,title:`Child B`}]}],expandedKeys:[`0`]}),template:`
      <div style="font-family:sans-serif;padding:1rem;max-width:1100px;margin:0 auto;">
        <h2 style="margin:0 0 8px;">BTree - Design Tokens</h2>
        <p style="margin:0 0 24px;color:#595959;">
          All tokens scoped to <code>.b-tree</code>. Override inline or via a CSS class.
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
          Four tokens overridden inline (selected bg, hover bg, indent, radius).
        </p>
        <BTree
          :tree-data="treeData"
          :expanded-keys="expandedKeys"
          style="
            --b-tree-node-selected-bg: oklch(94% 0.06 145);
            --b-tree-node-selected-color: oklch(30% 0.12 145);
            --b-tree-node-hover-bg: oklch(96% 0.04 145);
            --b-tree-indent-size: 32px;
            --b-tree-border-radius: 12px;
          "
        />
      </div>
    `})},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    treeData: sampleData,
    defaultExpandAll: true,
    checkable: false,
    showLine: false,
    showIcon: false,
    blockNode: false,
    disabled: false,
    multiple: false
  },
  render: args => ({
    components: {
      BTree
    },
    setup() {
      return {
        args
      };
    },
    template: \`<BTree v-bind="args" style="max-width: 320px;" />\`
  })
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => ({
    components: {
      BTree
    },
    setup() {
      return {
        data: sampleData
      };
    },
    template: \`
      <BTree
        :tree-data="data"
        :default-expanded-keys="['0-0', '0-0-0']"
        :default-selected-keys="['0-0-0-0']"
        style="max-width: 320px;"
      />
    \`
  })
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => ({
    components: {
      BTree
    },
    setup() {
      return {
        data: sampleData
      };
    },
    template: \`
      <BTree
        :tree-data="data"
        checkable
        :default-expanded-keys="['0-0']"
        :default-checked-keys="['0-0-0-0', '0-0-0-1']"
        style="max-width: 320px;"
      />
    \`
  })
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => ({
    components: {
      BTree
    },
    setup() {
      return {
        data: sampleData
      };
    },
    template: \`
      <BTree
        :tree-data="data"
        show-line
        :default-expanded-keys="['0-0', '0-0-0']"
        style="max-width: 320px;"
      />
    \`
  })
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => ({
    components: {
      BTree
    },
    setup() {
      return {
        data: sampleData
      };
    },
    template: \`
      <div style="display: flex; gap: 2rem;">
        <div>
          <p style="margin-bottom: 8px; font-size: 12px; color: #767676">expandAction: click (default)</p>
          <BTree :tree-data="data" directory expand-action="click" style="max-width: 240px;" />
        </div>
        <div>
          <p style="margin-bottom: 8px; font-size: 12px; color: #767676">expandAction: doubleClick</p>
          <BTree :tree-data="data" directory expand-action="doubleClick" style="max-width: 240px;" />
        </div>
      </div>
    \`
  })
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => ({
    components: {
      BTree
    },
    setup() {
      return {
        data: sampleData
      };
    },
    template: \`
      <BTree
        :tree-data="data"
        multiple
        :default-expanded-keys="['0-0']"
        style="max-width: 320px;"
      />
    \`
  })
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => ({
    components: {
      BTree
    },
    setup() {
      return {
        data: sampleData
      };
    },
    template: \`
      <div style="display: flex; gap: 2rem;">
        <div>
          <p style="margin-bottom: 8px; font-size: 12px; color: #767676">Entire tree disabled</p>
          <BTree :tree-data="data" disabled :default-expanded-keys="['0-0']" style="max-width: 240px;" />
        </div>
        <div>
          <p style="margin-bottom: 8px; font-size: 12px; color: #767676">Individual node disabled</p>
          <BTree :tree-data="data" :default-expanded-keys="['0-0', '0-0-1']" style="max-width: 240px;" />
        </div>
      </div>
    \`
  })
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => ({
    components: {
      BTree
    },
    setup() {
      return {
        data: sampleData
      };
    },
    template: \`
      <BTree
        :tree-data="data"
        block-node
        :default-expanded-keys="['0-0']"
        style="max-width: 320px;"
      />
    \`
  })
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => ({
    components: {
      BTree
    },
    setup() {
      const expandedKeys = ref<BTreeNodeKey[]>(['0-0']);
      const selectedKeys = ref<BTreeNodeKey[]>([]);
      const checkedKeys = ref<BTreeNodeKey[]>([]);
      return {
        expandedKeys,
        selectedKeys,
        checkedKeys,
        data: sampleData
      };
    },
    template: \`
      <div>
        <div style="margin-bottom: 12px; font-size: 12px; color: #767676;">
          <div>Selected: {{ selectedKeys.join(', ') || 'none' }}</div>
          <div>Expanded: {{ expandedKeys.join(', ') }}</div>
          <div>Checked: {{ checkedKeys.join(', ') || 'none' }}</div>
        </div>
        <BTree
          :tree-data="data"
          checkable
          v-model:expanded-keys="expandedKeys"
          v-model:selected-keys="selectedKeys"
          v-model:checked-keys="checkedKeys"
          style="max-width: 320px;"
        />
      </div>
    \`
  })
}`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => ({
    components: {
      BTree
    },
    setup() {
      const treeData = ref<BTreeNodeData[]>([{
        key: 'node-1',
        title: 'Expand to load children'
      }, {
        key: 'node-2',
        title: 'Another async parent'
      }]);
      async function loadData(node: BTreeNodeData) {
        await new Promise<void>(resolve => setTimeout(resolve, 1000));
        const newChildren: BTreeNodeData[] = [{
          key: \`\${node.key}-1\`,
          title: \`\${node.title} – Child 1\`,
          isLeaf: true
        }, {
          key: \`\${node.key}-2\`,
          title: \`\${node.title} – Child 2\`,
          isLeaf: true
        }];
        treeData.value = treeData.value.map(n => n.key === node.key ? {
          ...n,
          children: newChildren
        } : n);
      }
      return {
        treeData,
        loadData
      };
    },
    template: \`
      <BTree
        :tree-data="treeData"
        :load-data="loadData"
        style="max-width: 320px;"
      />
    \`
  })
}`,...x.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => ({
    components: {
      BTree
    },
    setup() {
      return {
        data: sampleData
      };
    },
    template: \`
      <BTree
        :tree-data="data"
        :default-expanded-keys="['0-0']"
        style="max-width: 320px;"
      >
        <template #title="{ node }">
          <span>
            {{ node.title }}
            <span
              v-if="node.isLeaf"
              style="margin-left: 4px; font-size: 10px; color: #595959; background: #f0f0f0; padding: 1px 4px; border-radius: 3px;"
            >leaf</span>
          </span>
        </template>
      </BTree>
    \`
  })
}`,...S.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => ({
    components: {
      BTree
    },
    setup() {
      return {
        data: sampleData
      };
    },
    template: \`
      <div>
        <p style="margin-bottom: 12px; font-size: 13px;">
          Use <kbd>Up</kbd> <kbd>Down</kbd> to navigate,
          <kbd>Right</kbd> to expand,
          <kbd>Left</kbd> to collapse,
          <kbd>Enter</kbd>/<kbd>Space</kbd> to select,
          <kbd>Home</kbd>/<kbd>End</kbd> to jump.
        </p>
        <BTree
          :tree-data="data"
          checkable
          :default-expanded-keys="['0-0']"
          style="max-width: 320px;"
          aria-label="File tree"
        />
      </div>
    \`
  }),
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const tree = canvas.getByRole('tree');

    // 1. Role checks
    expect(tree).toBeDefined();
    const items = canvas.getAllByRole('treeitem');
    expect(items.length).toBeGreaterThan(0);

    // 2. ARIA level on root items
    const rootItems = items.filter(el => el.getAttribute('aria-level') === '1');
    expect(rootItems.length).toBeGreaterThan(0);

    // 3. aria-expanded on parent nodes
    const parent = items.find(el => el.getAttribute('aria-expanded') !== null)!;
    expect(parent).toBeDefined();

    // 4. Checkboxes have correct role and aria-checked
    const checkboxes = canvas.getAllByRole('checkbox');
    checkboxes.forEach(cb => {
      const checked = cb.getAttribute('aria-checked');
      expect(['true', 'false', 'mixed']).toContain(checked);
    });

    // 5. Roving tabindex: exactly one item has tabindex=0
    const tabItems = items.filter(el => el.getAttribute('tabindex') === '0');
    expect(tabItems).toHaveLength(1);

    // 6. Keyboard: ArrowDown moves focus
    await userEvent.click(tree);
    await userEvent.keyboard('{ArrowDown}');

    // 7. Switcher icons are aria-hidden
    const switchers = canvasElement.querySelectorAll('.b-tree__switcher');
    switchers.forEach(s => {
      expect(s.getAttribute('aria-hidden')).toBe('true');
    });
  }
}`,...C.parameters?.docs?.source}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: true
    },
    docs: {
      description: {
        story: 'Override CSS custom properties directly on the component to theme it without global styles.'
      }
    }
  },
  render: () => ({
    components: {
      BTree
    },
    setup() {
      return {
        data: sampleData
      };
    },
    template: \`
      <div style="display: flex; gap: 2rem; flex-wrap: wrap;">
        <div>
          <p style="margin-bottom: 8px; font-size: 12px; color: #767676">Default</p>
          <BTree :tree-data="data" :default-expanded-keys="['0-0']" style="max-width: 240px;" />
        </div>

        <div>
          <p style="margin-bottom: 8px; font-size: 12px; color: #767676">Purple theme</p>
          <BTree
            :tree-data="data"
            :default-expanded-keys="['0-0']"
            :style="{
              '--b-tree-node-selected-bg': 'oklch(90% 0.08 300)',
              '--b-tree-node-selected-color': 'oklch(25% 0.1 300)',
              '--b-tree-checkbox-checked-bg': 'oklch(55% 0.22 300)',
              '--b-tree-checkbox-checked-border': 'oklch(55% 0.22 300)',
              '--b-tree-title-filtered-color': 'oklch(55% 0.22 300)',
            }"
            style="max-width: 240px;"
          />
        </div>

        <div>
          <p style="margin-bottom: 8px; font-size: 12px; color: #767676">Compact (custom indent + height)</p>
          <BTree
            :tree-data="data"
            :default-expanded-keys="['0-0']"
            :style="{
              '--b-tree-node-height': '18px',
              '--b-tree-indent-size': '16px',
              '--b-tree-font-size': '12px',
            }"
            style="max-width: 240px;"
          />
        </div>
      </div>
    \`
  })
}`,...w.parameters?.docs?.source}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  name: 'Interaction: Expand and Collapse',
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => ({
    components: {
      BTree
    },
    setup() {
      return {
        data: sampleData
      };
    },
    template: \`<BTree :tree-data="data" style="max-width: 320px;" />\`
  }),
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);

    // Initial: 3 top-level nodes
    let items = canvas.getAllByRole('treeitem');
    expect(items).toHaveLength(3);

    // Click switcher to expand Parent 0-0
    const firstSwitcher = canvasElement.querySelector('.b-tree__switcher')!;
    await userEvent.click(firstSwitcher);
    items = canvas.getAllByRole('treeitem');
    expect(items.length).toBeGreaterThan(3);

    // Click again to collapse
    await userEvent.click(firstSwitcher);
    items = canvas.getAllByRole('treeitem');
    expect(items).toHaveLength(3);
  }
}`,...T.parameters?.docs?.source}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  name: 'Interaction: Node Selection',
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => ({
    components: {
      BTree
    },
    setup() {
      return {
        data: sampleData
      };
    },
    template: \`<BTree :tree-data="data" style="max-width: 320px;" />\`
  }),
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const leafNode = canvas.getByText('Leaf 0-2');
    await userEvent.click(leafNode);
    const nodeItem = leafNode.closest('[role="treeitem"]')!;
    expect(nodeItem.classList.contains('b-tree__node--selected')).toBe(true);
    expect(nodeItem.getAttribute('aria-selected')).toBe('true');
  }
}`,...E.parameters?.docs?.source}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  name: 'Interaction: Checkboxes',
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => ({
    components: {
      BTree
    },
    setup() {
      return {
        data: sampleData
      };
    },
    template: \`<BTree :tree-data="data" checkable :default-expanded-keys="['0-0', '0-0-0']" style="max-width: 320px;" />\`
  }),
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);

    // Check Leaf 0-0-0-0
    const leaf = canvas.getByText('Leaf 0-0-0-0');
    const nodeItem = leaf.closest('[role="treeitem"]')!;
    const checkbox = nodeItem.querySelector('[role="checkbox"]')!;
    expect(checkbox.getAttribute('aria-checked')).toBe('false');
    await userEvent.click(checkbox);
    expect(checkbox.getAttribute('aria-checked')).toBe('true');

    // Parent should become indeterminate (only one of two leaves checked)
    const parent000 = canvas.getByText('Child 0-0-0').closest('[role="treeitem"]')!;
    const parentCheckbox = parent000.querySelector('[role="checkbox"]')!;
    expect(parentCheckbox.getAttribute('aria-checked')).toBe('mixed');
  }
}`,...D.parameters?.docs?.source}}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
  name: 'Interaction: Keyboard Navigation',
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => ({
    components: {
      BTree
    },
    setup() {
      return {
        data: sampleData
      };
    },
    template: \`<BTree :tree-data="data" style="max-width: 320px;" />\`
  }),
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const tree = canvas.getByRole('tree');

    // Focus the first treeitem directly so keyboard events are routed to it
    const initialItems = canvas.getAllByRole('treeitem');
    await userEvent.click(initialItems[0]);

    // ArrowDown: focus moves to second node
    await userEvent.keyboard('{ArrowDown}');
    const afterDown = canvas.getAllByRole('treeitem');
    expect(afterDown[1].getAttribute('tabindex')).toBe('0');

    // ArrowRight: move back up then expand the first node
    await userEvent.keyboard('{ArrowUp}');
    await userEvent.keyboard('{ArrowRight}');
    const afterExpand = canvas.getAllByRole('treeitem');
    expect(afterExpand.length).toBeGreaterThan(3);

    // End: jump to last visible node
    await userEvent.keyboard('{End}');
    const finalItems = canvas.getAllByRole('treeitem');
    const lastItem = finalItems[finalItems.length - 1];
    expect(lastItem.getAttribute('tabindex')).toBe('0');

    // Sanity: tree still mounted
    expect(tree).toBeInTheDocument();
  }
}`,...O.parameters?.docs?.source}}},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: true
    },
    docs: {
      description: {
        story: 'Drag a node and drop it onto another to reorder the tree. ' + 'The \`drop\` event provides \`dragNode\`, \`node\` (drop target), \`dropPosition\`, and \`dropToGap\`.'
      }
    }
  },
  render: () => ({
    components: {
      BTree
    },
    setup() {
      const treeData = ref<BTreeNodeData[]>([{
        key: 'A',
        title: 'Folder A',
        children: [{
          key: 'A-1',
          title: 'File A-1',
          isLeaf: true
        }, {
          key: 'A-2',
          title: 'File A-2',
          isLeaf: true
        }]
      }, {
        key: 'B',
        title: 'Folder B',
        children: [{
          key: 'B-1',
          title: 'File B-1',
          isLeaf: true
        }, {
          key: 'B-2',
          title: 'File B-2',
          isLeaf: true
        }]
      }, {
        key: 'C',
        title: 'Loose File C',
        isLeaf: true
      }]);
      const lastDrop = ref<string | null>(null);
      function removeNode(nodes: BTreeNodeData[], key: BTreeNodeKey): {
        list: BTreeNodeData[];
        removed: BTreeNodeData | null;
      } {
        let removed: BTreeNodeData | null = null;
        const list = nodes.filter(n => {
          if (n.key === key) {
            removed = n;
            return false;
          }
          return true;
        }).map(n => {
          if (n.children?.length) {
            const sub = removeNode(n.children, key);
            if (sub.removed) {
              removed = sub.removed;
              return {
                ...n,
                children: sub.list
              };
            }
          }
          return n;
        });
        return {
          list,
          removed
        };
      }
      function insertNode(nodes: BTreeNodeData[], targetKey: BTreeNodeKey, node: BTreeNodeData, dropToGap: boolean, dropPosition: number): BTreeNodeData[] {
        return nodes.flatMap(n => {
          if (n.key === targetKey) {
            if (!dropToGap && n.children !== undefined) {
              // Drop inside
              return [{
                ...n,
                children: [...(n.children ?? []), node]
              }];
            }
            // Drop before or after
            return dropPosition < 0 ? [node, n] : [n, node];
          }
          if (n.children?.length) {
            return [{
              ...n,
              children: insertNode(n.children, targetKey, node, dropToGap, dropPosition)
            }];
          }
          return [n];
        });
      }
      function onDrop({
        node,
        dragNode,
        dropPosition,
        dropToGap
      }: {
        node: BTreeNodeData;
        dragNode: BTreeNodeData;
        dropPosition: number;
        dropToGap: boolean;
      }) {
        lastDrop.value = \`"\${dragNode.title}" → \${dropToGap ? 'beside' : 'into'} "\${node.title}"\`;
        const {
          list,
          removed
        } = removeNode(treeData.value, dragNode.key);
        if (!removed) return;
        treeData.value = insertNode(list, node.key, removed, dropToGap, dropPosition);
      }
      return {
        treeData,
        lastDrop,
        onDrop
      };
    },
    template: \`
      <div>
        <p style="margin-bottom: 8px; font-size: 12px; color: #767676;">
          Drag any node onto another to move it inside that folder.
        </p>
        <BTree
          :tree-data="treeData"
          draggable
          :default-expanded-keys="['A', 'B']"
          block-node
          style="max-width: 320px;"
          @drop="onDrop"
        />
        <p
          v-if="lastDrop"
          style="margin-top: 10px; font-size: 12px; color: #555; font-style: italic;"
        >
          Last drop: {{ lastDrop }}
        </p>
      </div>
    \`
  }),
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);

    // All nodes are draggable
    const items = canvas.getAllByRole('treeitem');
    items.forEach(item => {
      expect(item.getAttribute('draggable')).toBe('true');
    });

    // dragstart fires on the first node and applies the dragging class
    const firstNode = items[0];
    fireEvent.dragStart(firstNode);
    await waitFor(() => expect(firstNode.classList.contains('b-tree__node--dragging')).toBe(true));

    // dragend clears the dragging class
    fireEvent.dragEnd(firstNode);
    await waitFor(() => expect(firstNode.classList.contains('b-tree__node--dragging')).toBe(false));
  }
}`,...k.parameters?.docs?.source}}},j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  name: 'Design Tokens',
  parameters: {
    controls: {
      disable: true
    },
    docs: {
      description: {
        story: 'Reference table of every <code>--b-tree-*</code> CSS custom property ' + 'consumers can override to retheme the component.'
      }
    }
  },
  render: () => ({
    components: {
      BTree
    },
    setup: () => {
      const treeData: BTreeNodeData[] = [{
        key: '0',
        title: 'Root',
        children: [{
          key: '0-0',
          title: 'Child A'
        }, {
          key: '0-1',
          title: 'Child B'
        }]
      }];
      return {
        tokens: DESIGN_TOKENS,
        treeData,
        expandedKeys: ['0'] as BTreeNodeKey[]
      };
    },
    template: \`
      <div style="font-family:sans-serif;padding:1rem;max-width:1100px;margin:0 auto;">
        <h2 style="margin:0 0 8px;">BTree - Design Tokens</h2>
        <p style="margin:0 0 24px;color:#595959;">
          All tokens scoped to <code>.b-tree</code>. Override inline or via a CSS class.
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
          Four tokens overridden inline (selected bg, hover bg, indent, radius).
        </p>
        <BTree
          :tree-data="treeData"
          :expanded-keys="expandedKeys"
          style="
            --b-tree-node-selected-bg: oklch(94% 0.06 145);
            --b-tree-node-selected-color: oklch(30% 0.12 145);
            --b-tree-node-hover-bg: oklch(96% 0.04 145);
            --b-tree-indent-size: 32px;
            --b-tree-border-radius: 12px;
          "
        />
      </div>
    \`
  })
}`,...j.parameters?.docs?.source}}},M=[`Playground`,`Basic`,`Checkable`,`ShowLines`,`Directory`,`MultipleSelection`,`Disabled`,`BlockNode`,`Controlled`,`AsyncLoading`,`CustomTitleSlot`,`Accessibility`,`Theming`,`InteractionExpand`,`InteractionSelect`,`InteractionCheckbox`,`InteractionKeyboard`,`Draggable`,`DesignTokens`]}))();export{C as Accessibility,x as AsyncLoading,p as Basic,y as BlockNode,m as Checkable,b as Controlled,S as CustomTitleSlot,j as DesignTokens,g as Directory,v as Disabled,k as Draggable,D as InteractionCheckbox,T as InteractionExpand,O as InteractionKeyboard,E as InteractionSelect,_ as MultipleSelection,f as Playground,h as ShowLines,w as Theming,M as __namedExportsOrder,d as default};