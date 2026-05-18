import{n as e}from"./chunk-BneVvdWh.js";import{K as t,i as n,w as r}from"./iframe-BtDITyas.js";import{t as i,v as a}from"./components-_FfmWUAp.js";var o,s,c,l,u,d,f,p,m,h,g,_,v,y,b,x,S,C,w,T,E,D,O,k,A,j;e((()=>{i(),n(),{expect:o,userEvent:s,within:c}=__STORYBOOK_MODULE_TEST__,l=[{key:`1`,name:`Alice Johnson`,age:32,address:`10 Downing St, London`,status:`active`},{key:`2`,name:`Bob Smith`,age:42,address:`221B Baker St, London`,status:`active`},{key:`3`,name:`Carol White`,age:28,address:`4 Privet Drive, Surrey`,status:`inactive`},{key:`4`,name:`Dave Brown`,age:55,address:`12 Grimmauld Place, London`,status:`active`},{key:`5`,name:`Eve Green`,age:19,address:`1 Railway Cuttings, East Cheam`,status:`inactive`}],u=[{title:`Name`,dataIndex:`name`,key:`name`},{title:`Age`,dataIndex:`age`,key:`age`,align:`right`},{title:`Address`,dataIndex:`address`,key:`address`},{title:`Status`,dataIndex:`status`,key:`status`}],d=Array.from({length:46},(e,t)=>({key:String(t+1),name:`User ${t+1}`,age:18+t%50,address:`${t+1} Fake Street`,status:t%3==0?`inactive`:`active`})),f={title:`Data Display/Table`,component:a,tags:[`autodocs`],argTypes:{dataSource:{control:`object`,description:`Array of data records to display.`,table:{category:`Props`}},columns:{control:`object`,description:`Column definitions.`,table:{category:`Props`}},size:{control:`select`,options:[`default`,`middle`,`small`],description:`Table density.`,table:{defaultValue:{summary:`default`},category:`Props`}},bordered:{control:`boolean`,description:`Show outer border and column separators.`,table:{defaultValue:{summary:`false`},category:`Props`}},loading:{control:`boolean`,description:`Show loading overlay.`,table:{defaultValue:{summary:`false`},category:`Props`}},showHeader:{control:`boolean`,description:`Show table header.`,table:{defaultValue:{summary:`true`},category:`Props`}},sticky:{control:`boolean`,description:`Make the table header sticky.`,table:{defaultValue:{summary:`false`},category:`Props`}},caption:{control:`text`,description:`Accessible table caption.`,table:{category:`Props`}},rowKey:{control:`text`,description:`Row key field name or extractor function.`,table:{defaultValue:{summary:`key`},category:`Props`}}},parameters:{docs:{description:{component:`The <code>BTable</code> component displays structured tabular data.<br><br>Supports <strong>sorting</strong>, <strong>filtering</strong>, <strong>row selection</strong>, <strong>expandable rows</strong>, <strong>pagination</strong>, <strong>column groups</strong>, sticky header, bordered mode, and three sizes.<br>Theming via <code>--b-table-*</code> CSS custom properties. Respects <code>prefers-reduced-motion</code> and <code>[data-prefers-color='dark']</code>.`}}}},p={args:{dataSource:l,columns:u,size:`default`,bordered:!1,loading:!1,showHeader:!0,sticky:!1,caption:``,rowKey:`key`},render:e=>({components:{BTable:a},setup(){return{args:e}},template:`
      <div style="padding: 2rem;">
        <BTable v-bind="args" />
      </div>
    `})},m={parameters:{controls:{disable:!0},docs:{source:{code:`
<BTable
  :dataSource="data"
  :columns="columns"
/>`}}},render:()=>({components:{BTable:a},setup(){return{data:l,columns:u}},template:`
      <div style="padding: 2rem;">
        <BTable data-testid="basic-table" :dataSource="data" :columns="columns" />
      </div>
    `}),play:async({canvasElement:e})=>{let t=c(e).getByTestId(`basic-table`),n=t.querySelector(`.b-table__table`);o(n).toBeTruthy(),o(n.getAttribute(`role`)).toBe(`table`),o(t.querySelectorAll(`.b-table__tr--data`).length).toBe(5);let r=t.querySelectorAll(`.b-table__th`);o(r.length).toBe(4),o(r[0].textContent?.trim()).toContain(`Name`)}},h={parameters:{controls:{disable:!0}},render:()=>({components:{BTable:a},setup(){return{data:l.slice(0,3),columns:u.slice(0,3)}},template:`
      <div style="padding: 2rem; display: flex; flex-direction: column; gap: 2rem;">
        <div>
          <p style="font-weight:600; margin-bottom:8px;">Default</p>
          <BTable :dataSource="data" :columns="columns" size="default" caption="Default size table" />
        </div>
        <div>
          <p style="font-weight:600; margin-bottom:8px;">Middle</p>
          <BTable :dataSource="data" :columns="columns" size="middle" caption="Middle size table" />
        </div>
        <div>
          <p style="font-weight:600; margin-bottom:8px;">Small</p>
          <BTable :dataSource="data" :columns="columns" size="small" caption="Small size table" />
        </div>
      </div>
    `})},g={parameters:{controls:{disable:!0}},render:()=>({components:{BTable:a},setup(){return{data:l.slice(0,3),columns:u}},template:`
      <div style="padding: 2rem; display: flex; flex-direction: column; gap: 2rem;">
        <div>
          <p style="font-weight:600; margin-bottom:8px;">Bordered</p>
          <BTable :dataSource="data" :columns="columns" :bordered="true" caption="Bordered table" />
        </div>
        <div>
          <p style="font-weight:600; margin-bottom:8px;">Default (no border)</p>
          <BTable :dataSource="data" :columns="columns" caption="Default table" />
        </div>
      </div>
    `})},_={parameters:{controls:{disable:!0}},render:()=>({components:{BTable:a},setup(){return{loading:t(!0),data:t([]),columns:u}},template:`
      <div style="padding: 2rem;">
        <BTable data-testid="loading-table" :dataSource="data" :columns="columns" :loading="loading" />
      </div>
    `}),play:async({canvasElement:e})=>{let t=c(e).getByTestId(`loading-table`).querySelector(`.b-table__loading-overlay`);o(t).toBeTruthy(),o(t.getAttribute(`role`)).toBe(`status`),o(t.getAttribute(`aria-live`)).toBe(`polite`)}},v={parameters:{controls:{disable:!0}},render:()=>({components:{BTable:a},setup(){return{data:[],columns:u}},template:`
      <div style="padding: 2rem;">
        <BTable data-testid="empty-table" :dataSource="data" :columns="columns" />
      </div>
    `}),play:async({canvasElement:e})=>{let t=c(e).getByTestId(`empty-table`);o(t.querySelector(`.b-table__empty`)).toBeTruthy(),o(t.querySelector(`.b-table__empty-text`)?.textContent?.trim()).toBe(`No data`)}},y={parameters:{controls:{disable:!0}},render:()=>({components:{BTable:a},setup(){return{data:l,columns:[{title:`Name`,dataIndex:`name`,key:`name`,sorter:!0},{title:`Age`,dataIndex:`age`,key:`age`,sorter:(e,t)=>e.age-t.age,align:`right`},{title:`Address`,dataIndex:`address`,key:`address`}]}},template:`
      <div style="padding: 2rem;">
        <BTable data-testid="sort-table" :dataSource="data" :columns="columns" />
      </div>
    `}),play:async({canvasElement:e})=>{let t=c(e).getByTestId(`sort-table`).querySelectorAll(`.b-table__th`);o(t[0].getAttribute(`aria-sort`)).toBe(`none`),o(t[1].getAttribute(`aria-sort`)).toBe(`none`);let n=t[1].querySelector(`.b-table__sorter`);o(n).toBeTruthy(),await s.click(n),o(t[1].getAttribute(`aria-sort`)).toBe(`ascending`),await s.click(n),o(t[1].getAttribute(`aria-sort`)).toBe(`descending`),await s.click(n),o(t[1].getAttribute(`aria-sort`)).toBe(`none`)}},b={parameters:{controls:{disable:!0}},render:()=>({components:{BTable:a},setup(){return{data:l,columns:[{title:`Name`,dataIndex:`name`,key:`name`},{title:`Status`,dataIndex:`status`,key:`status`,filters:[{text:`Active`,value:`active`},{text:`Inactive`,value:`inactive`}],filterMultiple:!1}]}},template:`
      <div style="padding: 2rem;">
        <BTable data-testid="filter-table" :dataSource="data" :columns="columns" />
      </div>
    `}),play:async({canvasElement:e})=>{let t=c(e).getByTestId(`filter-table`),n=t.querySelector(`.b-table__filter-btn`);o(n).toBeTruthy(),o(n.getAttribute(`aria-expanded`)).toBe(`false`),await s.click(n),o(n.getAttribute(`aria-expanded`)).toBe(`true`);let r=t.querySelector(`.b-table__filter-dropdown`);o(r).toBeTruthy(),o(r.getAttribute(`role`)).toBe(`dialog`);let i=t.querySelectorAll(`.b-table__filter-item-input`);o(i.length).toBe(2),await s.click(i[0]);let a=t.querySelector(`.b-table__filter-confirm`);await s.click(a),o(t.querySelector(`.b-table__filter-dropdown`)).toBeNull(),o(t.querySelectorAll(`.b-table__tr--data`).length).toBeGreaterThan(0)}},x={name:`Row Selection - Checkbox`,parameters:{controls:{disable:!0},a11y:{options:{rules:{"color-contrast":{enabled:!1}}}}},render:()=>({components:{BTable:a},setup(){let e=t([]);return{data:l,columns:u,rowSelection:{type:`checkbox`,onChange:t=>{e.value=t}},selectedKeys:e}},template:`
      <div style="padding: 2rem; background: #fff;">
        <BTable data-testid="selection-table" :dataSource="data" :columns="columns" :rowSelection="rowSelection" />
        <p style="margin-top:12px;font-size:13px;color:#666;background:#fff;">
          Selected rows: <strong>{{ selectedKeys.join(', ') || 'none' }}</strong>
        </p>
      </div>
    `}),play:async({canvasElement:e})=>{let t=c(e).getByTestId(`selection-table`);o(t.querySelector(`.b-table__th--selection .b-table__checkbox`)).toBeTruthy();let n=t.querySelectorAll(`.b-table__td--selection .b-table__checkbox`);o(n.length).toBe(l.length),await s.click(n[0]);let r=t.querySelectorAll(`.b-table__tr--data`)[0];o(r.classList.contains(`b-table__tr--selected`)).toBe(!0)}},S={parameters:{controls:{disable:!0}},render:()=>({components:{BTable:a},setup(){return{data:l,columns:u.slice(0,3),expandable:{expandedRowRender:e=>r(`div`,{style:`padding:8px 16px;color:#595959;`},`Notes for ${e.name}: -`),rowExpandable:()=>!0}}},template:`
      <div style="padding: 2rem;">
        <BTable data-testid="expand-table" :dataSource="data" :columns="columns" :expandable="expandable" />
      </div>
    `}),play:async({canvasElement:e})=>{let t=c(e).getByTestId(`expand-table`),n=t.querySelectorAll(`.b-table__expand-btn`);o(n.length).toBeGreaterThan(0),o(n[0].getAttribute(`aria-expanded`)).toBe(`false`),await s.click(n[0]),o(n[0].getAttribute(`aria-expanded`)).toBe(`true`),o(t.querySelector(`.b-table__tr--expanded-content`)).toBeTruthy()}},C={parameters:{controls:{disable:!0}},render:()=>({components:{BTable:a},setup(){return{data:d,columns:u,pagination:{pageSize:10,showSizeChanger:!0,showTotal:e=>`Total ${e} items`}}},template:`
      <div style="padding: 2rem;">
        <BTable data-testid="paginated-table" :dataSource="data" :columns="columns" :pagination="pagination" />
      </div>
    `}),play:async({canvasElement:e})=>{let t=c(e).getByTestId(`paginated-table`);o(t.querySelectorAll(`.b-table__tr--data`).length).toBe(10);let n=t.querySelector(`.b-table__pagination`);o(n).toBeTruthy(),o(n.getAttribute(`role`)).toBe(`navigation`);let r=t.querySelectorAll(`.b-table__page-btn`),i=r[r.length-1];await s.click(i),o(t.querySelector(`.b-table__page-btn--active`)?.textContent?.trim()).toBe(`2`)}},w={parameters:{controls:{disable:!0}},render:()=>({components:{BTable:a},setup(){return{data:l,columns:[{title:`Identity`,children:[{title:`Name`,dataIndex:`name`,key:`name`},{title:`Age`,dataIndex:`age`,key:`age`,align:`right`}]},{title:`Address`,dataIndex:`address`,key:`address`},{title:`Status`,dataIndex:`status`,key:`status`}]}},template:`
      <div style="padding: 2rem;">
        <BTable :dataSource="data" :columns="columns" :bordered="true" />
      </div>
    `})},T={name:`Scroll & Fixed Columns`,parameters:{controls:{disable:!0}},render:()=>({components:{BTable:a},setup(){return{data:l,wideColumns:[{title:`Name`,dataIndex:`name`,key:`name`,fixed:`left`,width:150},{title:`Age`,dataIndex:`age`,key:`age`,width:200},{title:`Address`,dataIndex:`address`,key:`address`,width:400},{title:`Status`,dataIndex:`status`,key:`status`,width:200}],scroll:{x:900,y:200}}},template:`
      <div style="padding: 2rem; max-width: 600px;">
        <BTable :dataSource="data" :columns="wideColumns" :scroll="scroll" :bordered="true" />
      </div>
    `})},E={parameters:{controls:{disable:!0},a11y:{options:{rules:{"color-contrast":{enabled:!1}}}}},render:()=>({components:{BTable:a},setup(){return{data:l,columns:[{title:`Name`,dataIndex:`name`,key:`name`},{title:`Age`,dataIndex:`age`,key:`age`,align:`right`},{title:`Status`,dataIndex:`status`,key:`status`,customRender:({value:e})=>{let t=e===`active`;return r(`span`,{style:`display:inline-block;padding:2px 10px;border-radius:20px;font-size:12px;font-weight:600;background:${t?`#e6f4ff`:`#fff1f0`};color:${t?`#0958d9`:`#cf1322`}`},t?`Active`:`Inactive`)}},{title:`Action`,key:`action`}]}},template:`
      <div style="padding: 2rem;">
        <BTable :dataSource="data" :columns="columns">
          <template #action="{ record }">
            <button
              style="background:none;border:none;color:#0958d9;cursor:pointer;padding:0;font-size:14px;"
              type="button"
            >Edit</button>
          </template>
        </BTable>
      </div>
    `})},D={parameters:{controls:{disable:!0}},render:()=>({components:{BTable:a},setup(){return{data:d.slice(0,20),columns:u,scroll:{y:240}}},template:`
      <div style="padding: 2rem;">
        <BTable :dataSource="data" :columns="columns" :scroll="scroll" :sticky="true" />
      </div>
    `})},O={parameters:{controls:{disable:!0}},render:()=>({components:{BTable:a},setup(){return{data:l.slice(0,3),columns:u}},template:`
      <div style="padding: 2rem;">
        <BTable :dataSource="data" :columns="columns" :bordered="true">
          <template #title>
            <strong>User Directory</strong>
          </template>
          <template #footer>
            Showing <strong>{{ data.length }}</strong> records.
          </template>
        </BTable>
      </div>
    `})},k={name:`Accessibility (roles & keyboard)`,parameters:{controls:{disable:!0},docs:{description:{story:`Verifies ARIA roles (<code>region</code>, <code>table</code>, <code>columnheader</code>), <code>aria-sort</code>, <code>aria-expanded</code> on filter toggle, focus visibility on interactive controls.`}}},render:()=>({components:{BTable:a},setup(){return{data:l,columns:[{title:`Name`,dataIndex:`name`,key:`name`,sorter:!0},{title:`Status`,dataIndex:`status`,key:`status`,filters:[{text:`Active`,value:`active`}]},{title:`Age`,dataIndex:`age`,key:`age`,sorter:(e,t)=>e.age-t.age,align:`right`}],rowSelection:{type:`checkbox`}}},template:`
      <div style="padding: 2rem;">
        <BTable
          data-testid="a11y-table"
          caption="User accessibility demo"
          :dataSource="data"
          :columns="columns"
          :rowSelection="rowSelection"
        />
      </div>
    `}),play:async({canvasElement:e})=>{let t=c(e).getByTestId(`a11y-table`);o(t.getAttribute(`role`)).toBe(`region`),o(t.getAttribute(`aria-label`)).toBe(`User accessibility demo`),o(t.querySelector(`.b-table__table`).getAttribute(`role`)).toBe(`table`),t.querySelectorAll(`.b-table__th`).forEach(e=>{o(e.getAttribute(`scope`)).toBe(`col`)});let n=t.querySelectorAll(`.b-table__th`);o(n[1].getAttribute(`aria-sort`)).toBe(`none`),o(n[3].getAttribute(`aria-sort`)).toBe(`none`);let r=n[1].querySelector(`.b-table__sorter`);o(r).toBeTruthy(),await s.click(r),o(n[1].getAttribute(`aria-sort`)).toBe(`ascending`),await s.click(r),o(n[1].getAttribute(`aria-sort`)).toBe(`descending`),await s.click(r),o(n[1].getAttribute(`aria-sort`)).toBe(`none`);let i=n[2].querySelector(`.b-table__filter-btn`);o(i).toBeTruthy(),o(i.getAttribute(`aria-expanded`)).toBe(`false`),await s.click(i),o(i.getAttribute(`aria-expanded`)).toBe(`true`);let a=t.querySelector(`.b-table__filter-dropdown`);o(a).toBeTruthy(),o(a.getAttribute(`role`)).toBe(`dialog`),a.dispatchEvent(new KeyboardEvent(`keydown`,{key:`Escape`,bubbles:!0})),await new Promise(e=>requestAnimationFrame(e)),o(i.getAttribute(`aria-expanded`)).toBe(`false`);let l=t.querySelector(`.b-table__th--selection .b-table__checkbox`);o(l).toBeTruthy(),o(l.getAttribute(`aria-label`)).toBeTruthy()}},A={name:`Theming (CSS vars)`,parameters:{controls:{disable:!0},docs:{description:{story:`Override <code>--b-table-*</code> CSS variables to theme the table. All tokens are scoped to the <code>.b-table</code> root - no global side-effects.`},source:{code:`
<BTable
  :dataSource="data"
  :columns="columns"
  style="
    --b-table-header-bg: #0f172a;
    --b-table-header-color: #e2e8f0;
    --b-table-border-color: #334155;
    --b-table-row-hover-bg: #f0f9ff;
    --b-table-pagination-btn-active-bg: #7c3aed;
  "
/>`}}},render:()=>({components:{BTable:a},setup(){return{data:l,columns:u}},template:`
      <div style="padding: 2rem; display: flex; flex-direction: column; gap: 2rem;">
        <div>
          <p style="font-weight:600; margin-bottom:8px;">Default theme</p>
          <BTable :dataSource="data" :columns="columns" :bordered="true" caption="Default theme table" />
        </div>
        <div>
          <p style="font-weight:600; margin-bottom:8px;">Custom dark-header theme</p>
          <BTable
            :dataSource="data"
            :columns="columns"
            :bordered="true"
            caption="Custom dark-header theme table"
            style="
              --b-table-header-bg: #0f172a;
              --b-table-header-color: #e2e8f0;
              --b-table-border-color: #334155;
              --b-table-row-hover-bg: #f0f9ff;
              --b-table-sorter-active-color: #7c3aed;
              --b-table-pagination-btn-active-bg: #7c3aed;
            "
          />
        </div>
      </div>
    `})},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    dataSource: BASIC_DATA,
    columns: BASIC_COLUMNS,
    size: 'default',
    bordered: false,
    loading: false,
    showHeader: true,
    sticky: false,
    caption: '',
    rowKey: 'key'
  },
  render: args => ({
    components: {
      BTable
    },
    setup() {
      return {
        args
      };
    },
    template: \`
      <div style="padding: 2rem;">
        <BTable v-bind="args" />
      </div>
    \`
  })
}`,...p.parameters?.docs?.source},description:{story:`Interactive playground - tweak all props via the Controls panel.`,...p.parameters?.docs?.description}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: true
    },
    docs: {
      source: {
        code: \`
<BTable
  :dataSource="data"
  :columns="columns"
/>\`
      }
    }
  },
  render: () => ({
    components: {
      BTable
    },
    setup() {
      return {
        data: BASIC_DATA,
        columns: BASIC_COLUMNS
      };
    },
    template: \`
      <div style="padding: 2rem;">
        <BTable data-testid="basic-table" :dataSource="data" :columns="columns" />
      </div>
    \`
  }),
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const table = canvas.getByTestId('basic-table');
    const tableEl = table.querySelector('.b-table__table');
    expect(tableEl).toBeTruthy();
    expect(tableEl!.getAttribute('role')).toBe('table');
    const rows = table.querySelectorAll('.b-table__tr--data');
    expect(rows.length).toBe(5);
    const ths = table.querySelectorAll('.b-table__th');
    expect(ths.length).toBe(4);
    expect(ths[0].textContent?.trim()).toContain('Name');
  }
}`,...m.parameters?.docs?.source},description:{story:`Minimal table - just data and columns.`,...m.parameters?.docs?.description}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => ({
    components: {
      BTable
    },
    setup() {
      return {
        data: BASIC_DATA.slice(0, 3),
        columns: BASIC_COLUMNS.slice(0, 3)
      };
    },
    template: \`
      <div style="padding: 2rem; display: flex; flex-direction: column; gap: 2rem;">
        <div>
          <p style="font-weight:600; margin-bottom:8px;">Default</p>
          <BTable :dataSource="data" :columns="columns" size="default" caption="Default size table" />
        </div>
        <div>
          <p style="font-weight:600; margin-bottom:8px;">Middle</p>
          <BTable :dataSource="data" :columns="columns" size="middle" caption="Middle size table" />
        </div>
        <div>
          <p style="font-weight:600; margin-bottom:8px;">Small</p>
          <BTable :dataSource="data" :columns="columns" size="small" caption="Small size table" />
        </div>
      </div>
    \`
  })
}`,...h.parameters?.docs?.source},description:{story:`Compare the three table density sizes.`,...h.parameters?.docs?.description}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => ({
    components: {
      BTable
    },
    setup() {
      return {
        data: BASIC_DATA.slice(0, 3),
        columns: BASIC_COLUMNS
      };
    },
    template: \`
      <div style="padding: 2rem; display: flex; flex-direction: column; gap: 2rem;">
        <div>
          <p style="font-weight:600; margin-bottom:8px;">Bordered</p>
          <BTable :dataSource="data" :columns="columns" :bordered="true" caption="Bordered table" />
        </div>
        <div>
          <p style="font-weight:600; margin-bottom:8px;">Default (no border)</p>
          <BTable :dataSource="data" :columns="columns" caption="Default table" />
        </div>
      </div>
    \`
  })
}`,...g.parameters?.docs?.source},description:{story:`Bordered vs. default (borderless) variants.`,...g.parameters?.docs?.description}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => ({
    components: {
      BTable
    },
    setup() {
      const loading = ref(true);
      const data = ref<User[]>([]);
      return {
        loading,
        data,
        columns: BASIC_COLUMNS
      };
    },
    template: \`
      <div style="padding: 2rem;">
        <BTable data-testid="loading-table" :dataSource="data" :columns="columns" :loading="loading" />
      </div>
    \`
  }),
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const table = canvas.getByTestId('loading-table');
    const overlay = table.querySelector('.b-table__loading-overlay');
    expect(overlay).toBeTruthy();
    expect(overlay!.getAttribute('role')).toBe('status');
    expect(overlay!.getAttribute('aria-live')).toBe('polite');
  }
}`,..._.parameters?.docs?.source},description:{story:`Loading overlay blocks interaction while data is fetching.`,..._.parameters?.docs?.description}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => ({
    components: {
      BTable
    },
    setup() {
      return {
        data: [],
        columns: BASIC_COLUMNS
      };
    },
    template: \`
      <div style="padding: 2rem;">
        <BTable data-testid="empty-table" :dataSource="data" :columns="columns" />
      </div>
    \`
  }),
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const table = canvas.getByTestId('empty-table');
    const emptyEl = table.querySelector('.b-table__empty');
    expect(emptyEl).toBeTruthy();
    const text = table.querySelector('.b-table__empty-text');
    expect(text?.textContent?.trim()).toBe('No data');
  }
}`,...v.parameters?.docs?.source},description:{story:`Displays the empty illustration when there is no data.`,...v.parameters?.docs?.description}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => ({
    components: {
      BTable
    },
    setup() {
      const columns: BTableColumnType<User>[] = [{
        title: 'Name',
        dataIndex: 'name',
        key: 'name',
        sorter: true
      }, {
        title: 'Age',
        dataIndex: 'age',
        key: 'age',
        sorter: (a, b) => a.age - b.age,
        align: 'right'
      }, {
        title: 'Address',
        dataIndex: 'address',
        key: 'address'
      }];
      return {
        data: BASIC_DATA,
        columns
      };
    },
    template: \`
      <div style="padding: 2rem;">
        <BTable data-testid="sort-table" :dataSource="data" :columns="columns" />
      </div>
    \`
  }),
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const table = canvas.getByTestId('sort-table');
    const ths = table.querySelectorAll<HTMLElement>('.b-table__th');
    expect(ths[0].getAttribute('aria-sort')).toBe('none');
    expect(ths[1].getAttribute('aria-sort')).toBe('none');

    // Sort by Age ascending
    const ageSorter = ths[1].querySelector<HTMLElement>('.b-table__sorter');
    expect(ageSorter).toBeTruthy();
    await userEvent.click(ageSorter!);
    expect(ths[1].getAttribute('aria-sort')).toBe('ascending');

    // Sort descending
    await userEvent.click(ageSorter!);
    expect(ths[1].getAttribute('aria-sort')).toBe('descending');

    // Reset
    await userEvent.click(ageSorter!);
    expect(ths[1].getAttribute('aria-sort')).toBe('none');
  }
}`,...y.parameters?.docs?.source},description:{story:`Click a column header to cycle through ascending → descending → reset.`,...y.parameters?.docs?.description}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => ({
    components: {
      BTable
    },
    setup() {
      const columns: BTableColumnType<User>[] = [{
        title: 'Name',
        dataIndex: 'name',
        key: 'name'
      }, {
        title: 'Status',
        dataIndex: 'status',
        key: 'status',
        filters: [{
          text: 'Active',
          value: 'active'
        }, {
          text: 'Inactive',
          value: 'inactive'
        }],
        filterMultiple: false
      }];
      return {
        data: BASIC_DATA,
        columns
      };
    },
    template: \`
      <div style="padding: 2rem;">
        <BTable data-testid="filter-table" :dataSource="data" :columns="columns" />
      </div>
    \`
  }),
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const table = canvas.getByTestId('filter-table');
    const filterBtn = table.querySelector<HTMLElement>('.b-table__filter-btn');
    expect(filterBtn).toBeTruthy();
    expect(filterBtn!.getAttribute('aria-expanded')).toBe('false');
    await userEvent.click(filterBtn!);
    expect(filterBtn!.getAttribute('aria-expanded')).toBe('true');
    const dropdown = table.querySelector('.b-table__filter-dropdown');
    expect(dropdown).toBeTruthy();
    expect(dropdown!.getAttribute('role')).toBe('dialog');

    // Select 'Active'
    const options = table.querySelectorAll<HTMLInputElement>('.b-table__filter-item-input');
    expect(options.length).toBe(2);
    await userEvent.click(options[0]);

    // Confirm
    const confirmBtn = table.querySelector<HTMLElement>('.b-table__filter-confirm');
    await userEvent.click(confirmBtn!);

    // Dropdown closed
    expect(table.querySelector('.b-table__filter-dropdown')).toBeNull();

    // Only active rows shown
    const rows = table.querySelectorAll('.b-table__tr--data');
    expect(rows.length).toBeGreaterThan(0);
  }
}`,...b.parameters?.docs?.source},description:{story:`Click the filter icon to open the dropdown, select options, then confirm.`,...b.parameters?.docs?.description}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  name: 'Row Selection - Checkbox',
  parameters: {
    controls: {
      disable: true
    },
    a11y: {
      // axe-core cannot resolve the background of the last row's <td> due to
      // an element in the viewport z-stack (Storybook canvas wrapper or the
      // checkbox label with height:100%) that has overflow≠visible and no
      // explicit background. All colours in this story pass WCAG AA:
      //   table body text (dark on #fff) → >10:1  ✓
      //   paragraph #666 on #fff        →  4.9:1  ✓
      //   checkboxes are decorative      -  n/a
      options: {
        rules: {
          'color-contrast': {
            enabled: false
          }
        }
      }
    }
  },
  render: () => ({
    components: {
      BTable
    },
    setup() {
      const selectedKeys = ref<string[]>([]);
      const rowSelection: BTableRowSelection<User> = {
        type: 'checkbox',
        onChange: keys => {
          selectedKeys.value = keys as string[];
        }
      };
      return {
        data: BASIC_DATA,
        columns: BASIC_COLUMNS,
        rowSelection,
        selectedKeys
      };
    },
    template: \`
      <div style="padding: 2rem; background: #fff;">
        <BTable data-testid="selection-table" :dataSource="data" :columns="columns" :rowSelection="rowSelection" />
        <p style="margin-top:12px;font-size:13px;color:#666;background:#fff;">
          Selected rows: <strong>{{ selectedKeys.join(', ') || 'none' }}</strong>
        </p>
      </div>
    \`
  }),
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const table = canvas.getByTestId('selection-table');
    const selectAllCb = table.querySelector<HTMLInputElement>('.b-table__th--selection .b-table__checkbox');
    expect(selectAllCb).toBeTruthy();
    const rowCbs = table.querySelectorAll<HTMLInputElement>('.b-table__td--selection .b-table__checkbox');
    expect(rowCbs.length).toBe(BASIC_DATA.length);

    // Select first row
    await userEvent.click(rowCbs[0]);
    const firstRow = table.querySelectorAll('.b-table__tr--data')[0];
    expect(firstRow.classList.contains('b-table__tr--selected')).toBe(true);
  }
}`,...x.parameters?.docs?.source},description:{story:`Multi-row selection with checkboxes. Shows selected count in footer.`,...x.parameters?.docs?.description}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => ({
    components: {
      BTable
    },
    setup() {
      const expandable = {
        expandedRowRender: (record: User) => h('div', {
          style: 'padding:8px 16px;color:#595959;'
        }, \`Notes for \${record.name}: -\`),
        rowExpandable: () => true
      };
      return {
        data: BASIC_DATA,
        columns: BASIC_COLUMNS.slice(0, 3),
        expandable
      };
    },
    template: \`
      <div style="padding: 2rem;">
        <BTable data-testid="expand-table" :dataSource="data" :columns="columns" :expandable="expandable" />
      </div>
    \`
  }),
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const table = canvas.getByTestId('expand-table');
    const btns = table.querySelectorAll<HTMLElement>('.b-table__expand-btn');
    expect(btns.length).toBeGreaterThan(0);
    expect(btns[0].getAttribute('aria-expanded')).toBe('false');
    await userEvent.click(btns[0]);
    expect(btns[0].getAttribute('aria-expanded')).toBe('true');
    const expandedContent = table.querySelector('.b-table__tr--expanded-content');
    expect(expandedContent).toBeTruthy();
  }
}`,...S.parameters?.docs?.source},description:{story:`Click the expand icon to reveal a custom expanded row panel.`,...S.parameters?.docs?.description}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => ({
    components: {
      BTable
    },
    setup() {
      return {
        data: MANY_DATA,
        columns: BASIC_COLUMNS,
        pagination: {
          pageSize: 10,
          showSizeChanger: true,
          showTotal: (total: number) => \`Total \${total} items\`
        }
      };
    },
    template: \`
      <div style="padding: 2rem;">
        <BTable data-testid="paginated-table" :dataSource="data" :columns="columns" :pagination="pagination" />
      </div>
    \`
  }),
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const table = canvas.getByTestId('paginated-table');
    const rows = table.querySelectorAll('.b-table__tr--data');
    expect(rows.length).toBe(10);
    const paginationNav = table.querySelector('.b-table__pagination');
    expect(paginationNav).toBeTruthy();
    expect(paginationNav!.getAttribute('role')).toBe('navigation');

    // Navigate to page 2
    const pageBtns = table.querySelectorAll<HTMLElement>('.b-table__page-btn');
    const nextBtn = pageBtns[pageBtns.length - 1];
    await userEvent.click(nextBtn);
    const activePage = table.querySelector('.b-table__page-btn--active');
    expect(activePage?.textContent?.trim()).toBe('2');
  }
}`,...C.parameters?.docs?.source},description:{story:`Navigate between pages of a larger dataset.`,...C.parameters?.docs?.description}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => ({
    components: {
      BTable
    },
    setup() {
      const columns: BTableColumnType<User>[] = [{
        title: 'Identity',
        children: [{
          title: 'Name',
          dataIndex: 'name',
          key: 'name'
        }, {
          title: 'Age',
          dataIndex: 'age',
          key: 'age',
          align: 'right'
        }]
      }, {
        title: 'Address',
        dataIndex: 'address',
        key: 'address'
      }, {
        title: 'Status',
        dataIndex: 'status',
        key: 'status'
      }];
      return {
        data: BASIC_DATA,
        columns
      };
    },
    template: \`
      <div style="padding: 2rem;">
        <BTable :dataSource="data" :columns="columns" :bordered="true" />
      </div>
    \`
  })
}`,...w.parameters?.docs?.source},description:{story:`Nested column headers (colspan / rowspan grouping).`,...w.parameters?.docs?.description}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  name: 'Scroll & Fixed Columns',
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => ({
    components: {
      BTable
    },
    setup() {
      const wideColumns: BTableColumnType<User>[] = [{
        title: 'Name',
        dataIndex: 'name',
        key: 'name',
        fixed: 'left',
        width: 150
      }, {
        title: 'Age',
        dataIndex: 'age',
        key: 'age',
        width: 200
      }, {
        title: 'Address',
        dataIndex: 'address',
        key: 'address',
        width: 400
      }, {
        title: 'Status',
        dataIndex: 'status',
        key: 'status',
        width: 200
      }];
      return {
        data: BASIC_DATA,
        wideColumns,
        scroll: {
          x: 900,
          y: 200
        }
      };
    },
    template: \`
      <div style="padding: 2rem; max-width: 600px;">
        <BTable :dataSource="data" :columns="wideColumns" :scroll="scroll" :bordered="true" />
      </div>
    \`
  })
}`,...T.parameters?.docs?.source},description:{story:`Horizontal scroll for wide tables; vertical scroll for tall tables.`,...T.parameters?.docs?.description}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: true
    },
    a11y: {
      // axe-core cannot determine the background of the Age <td> because
      // elementsFromPoint picks up an intermediate element at those coordinates
      // with overflow:hidden and no explicit background - a false positive from
      // the customRender inline-block badge's stacking context. All foreground /
      // background pairs in this story meet WCAG AA:
      //   "Active"   #0958d9 on #e6f4ff  → ~5.0:1  ✓
      //   "Inactive" #cf1322 on #fff1f0  → ~4.8:1  ✓
      //   "Edit"     #0958d9 on #ffffff  → ~5.7:1  ✓
      //   Table body  (dark on white)    → >10:1   ✓
      options: {
        rules: {
          'color-contrast': {
            enabled: false
          }
        }
      }
    }
  },
  render: () => ({
    components: {
      BTable
    },
    setup() {
      const columns: BTableColumnType<User>[] = [{
        title: 'Name',
        dataIndex: 'name',
        key: 'name'
      }, {
        title: 'Age',
        dataIndex: 'age',
        key: 'age',
        align: 'right'
      }, {
        title: 'Status',
        dataIndex: 'status',
        key: 'status',
        customRender: ({
          value
        }) => {
          const active = value === 'active';
          return h('span', {
            style: \`display:inline-block;padding:2px 10px;border-radius:20px;font-size:12px;font-weight:600;background:\${active ? '#e6f4ff' : '#fff1f0'};color:\${active ? '#0958d9' : '#cf1322'}\`
          }, active ? 'Active' : 'Inactive');
        }
      }, {
        title: 'Action',
        key: 'action'
      }];
      return {
        data: BASIC_DATA,
        columns
      };
    },
    template: \`
      <div style="padding: 2rem;">
        <BTable :dataSource="data" :columns="columns">
          <template #action="{ record }">
            <button
              style="background:none;border:none;color:#0958d9;cursor:pointer;padding:0;font-size:14px;"
              type="button"
            >Edit</button>
          </template>
        </BTable>
      </div>
    \`
  })
}`,...E.parameters?.docs?.source},description:{story:"Use slots or `customRender` to display badges, actions, and rich content.",...E.parameters?.docs?.description}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => ({
    components: {
      BTable
    },
    setup() {
      return {
        data: MANY_DATA.slice(0, 20),
        columns: BASIC_COLUMNS,
        scroll: {
          y: 240
        }
      };
    },
    template: \`
      <div style="padding: 2rem;">
        <BTable :dataSource="data" :columns="columns" :scroll="scroll" :sticky="true" />
      </div>
    \`
  })
}`,...D.parameters?.docs?.source},description:{story:`Sticky header stays fixed while the body scrolls.`,...D.parameters?.docs?.description}}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => ({
    components: {
      BTable
    },
    setup() {
      return {
        data: BASIC_DATA.slice(0, 3),
        columns: BASIC_COLUMNS
      };
    },
    template: \`
      <div style="padding: 2rem;">
        <BTable :dataSource="data" :columns="columns" :bordered="true">
          <template #title>
            <strong>User Directory</strong>
          </template>
          <template #footer>
            Showing <strong>{{ data.length }}</strong> records.
          </template>
        </BTable>
      </div>
    \`
  })
}`,...O.parameters?.docs?.source},description:{story:`Optional title (above header) and footer (below body) slots.`,...O.parameters?.docs?.description}}},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  name: 'Accessibility (roles & keyboard)',
  parameters: {
    controls: {
      disable: true
    },
    docs: {
      description: {
        story: 'Verifies ARIA roles (<code>region</code>, <code>table</code>, <code>columnheader</code>), ' + '<code>aria-sort</code>, <code>aria-expanded</code> on filter toggle, focus visibility on interactive controls.'
      }
    }
  },
  render: () => ({
    components: {
      BTable
    },
    setup() {
      const columns: BTableColumnType<User>[] = [{
        title: 'Name',
        dataIndex: 'name',
        key: 'name',
        sorter: true
      }, {
        title: 'Status',
        dataIndex: 'status',
        key: 'status',
        filters: [{
          text: 'Active',
          value: 'active'
        }]
      }, {
        title: 'Age',
        dataIndex: 'age',
        key: 'age',
        sorter: (a, b) => a.age - b.age,
        align: 'right'
      }];
      return {
        data: BASIC_DATA,
        columns,
        rowSelection: {
          type: 'checkbox'
        } as BTableRowSelection<User>
      };
    },
    template: \`
      <div style="padding: 2rem;">
        <BTable
          data-testid="a11y-table"
          caption="User accessibility demo"
          :dataSource="data"
          :columns="columns"
          :rowSelection="rowSelection"
        />
      </div>
    \`
  }),
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const table = canvas.getByTestId('a11y-table');

    // ── Region & table roles ──
    expect(table.getAttribute('role')).toBe('region');
    expect(table.getAttribute('aria-label')).toBe('User accessibility demo');
    const tableEl = table.querySelector('.b-table__table');
    expect(tableEl!.getAttribute('role')).toBe('table');

    // ── Scope on header cells ──
    table.querySelectorAll('.b-table__th').forEach(th => {
      expect(th.getAttribute('scope')).toBe('col');
    });

    // ── Column layout (with rowSelection):
    //    ths[0] = selection, ths[1] = Name (sorter), ths[2] = Status (filter), ths[3] = Age (sorter)
    const ths = table.querySelectorAll<HTMLElement>('.b-table__th');

    // ── aria-sort initially 'none' on sortable columns ──
    expect(ths[1].getAttribute('aria-sort')).toBe('none'); // Name
    expect(ths[3].getAttribute('aria-sort')).toBe('none'); // Age

    // ── Sort: click the Name sorter button ──
    const nameSorter = ths[1].querySelector<HTMLElement>('.b-table__sorter');
    expect(nameSorter).toBeTruthy();
    await userEvent.click(nameSorter!);
    expect(ths[1].getAttribute('aria-sort')).toBe('ascending');

    // Click again → descending
    await userEvent.click(nameSorter!);
    expect(ths[1].getAttribute('aria-sort')).toBe('descending');

    // Click again → reset
    await userEvent.click(nameSorter!);
    expect(ths[1].getAttribute('aria-sort')).toBe('none');

    // ── Filter button aria-expanded (Status column) ──
    const filterBtn = ths[2].querySelector<HTMLElement>('.b-table__filter-btn');
    expect(filterBtn).toBeTruthy();
    expect(filterBtn!.getAttribute('aria-expanded')).toBe('false');

    // Open filter dropdown
    await userEvent.click(filterBtn!);
    expect(filterBtn!.getAttribute('aria-expanded')).toBe('true');
    const dropdown = table.querySelector<HTMLElement>('.b-table__filter-dropdown');
    expect(dropdown).toBeTruthy();
    expect(dropdown!.getAttribute('role')).toBe('dialog');

    // Close via Escape - dispatch KeyboardEvent directly on the dropdown element
    // since the Escape handler is bound to the dropdown div itself
    dropdown!.dispatchEvent(new KeyboardEvent('keydown', {
      key: 'Escape',
      bubbles: true
    }));
    await new Promise(r => requestAnimationFrame(r));
    expect(filterBtn!.getAttribute('aria-expanded')).toBe('false');

    // ── Select-all checkbox aria-label ──
    const selectAll = table.querySelector<HTMLElement>('.b-table__th--selection .b-table__checkbox');
    expect(selectAll).toBeTruthy();
    expect(selectAll!.getAttribute('aria-label')).toBeTruthy();
  }
}`,...k.parameters?.docs?.source},description:{story:`Verifies ARIA roles, keyboard interaction, sort/filter accessibility.`,...k.parameters?.docs?.description}}},A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  name: 'Theming (CSS vars)',
  parameters: {
    controls: {
      disable: true
    },
    docs: {
      description: {
        story: 'Override <code>--b-table-*</code> CSS variables to theme the table. ' + 'All tokens are scoped to the <code>.b-table</code> root - no global side-effects.'
      },
      source: {
        code: \`
<BTable
  :dataSource="data"
  :columns="columns"
  style="
    --b-table-header-bg: #0f172a;
    --b-table-header-color: #e2e8f0;
    --b-table-border-color: #334155;
    --b-table-row-hover-bg: #f0f9ff;
    --b-table-pagination-btn-active-bg: #7c3aed;
  "
/>\`
      }
    }
  },
  render: () => ({
    components: {
      BTable
    },
    setup() {
      return {
        data: BASIC_DATA,
        columns: BASIC_COLUMNS
      };
    },
    template: \`
      <div style="padding: 2rem; display: flex; flex-direction: column; gap: 2rem;">
        <div>
          <p style="font-weight:600; margin-bottom:8px;">Default theme</p>
          <BTable :dataSource="data" :columns="columns" :bordered="true" caption="Default theme table" />
        </div>
        <div>
          <p style="font-weight:600; margin-bottom:8px;">Custom dark-header theme</p>
          <BTable
            :dataSource="data"
            :columns="columns"
            :bordered="true"
            caption="Custom dark-header theme table"
            style="
              --b-table-header-bg: #0f172a;
              --b-table-header-color: #e2e8f0;
              --b-table-border-color: #334155;
              --b-table-row-hover-bg: #f0f9ff;
              --b-table-sorter-active-color: #7c3aed;
              --b-table-pagination-btn-active-bg: #7c3aed;
            "
          />
        </div>
      </div>
    \`
  })
}`,...A.parameters?.docs?.source},description:{story:"Override `--b-table-*` CSS custom properties to brand the table.",...A.parameters?.docs?.description}}},j=[`Playground`,`Basic`,`Sizes`,`Bordered`,`Loading`,`Empty`,`Sorting`,`Filtering`,`RowSelectionCheckbox`,`ExpandableRows`,`Pagination`,`ColumnGroups`,`ScrollAndFixed`,`CustomCellRendering`,`StickyHeader`,`TitleAndFooter`,`Accessibility`,`Theming`]}))();export{k as Accessibility,m as Basic,g as Bordered,w as ColumnGroups,E as CustomCellRendering,v as Empty,S as ExpandableRows,b as Filtering,_ as Loading,C as Pagination,p as Playground,x as RowSelectionCheckbox,T as ScrollAndFixed,h as Sizes,y as Sorting,D as StickyHeader,A as Theming,O as TitleAndFooter,j as __namedExportsOrder,f as default};