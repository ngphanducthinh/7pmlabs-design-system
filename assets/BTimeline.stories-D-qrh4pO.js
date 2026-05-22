import{n as e}from"./chunk-BneVvdWh.js";import{X as t,i as n}from"./iframe-CkqcGmpM.js";import{f as r,p as i,t as a}from"./components-CTy29wV5.js";var o,s,c,l,u,d,f,p,m,h,g,_,v,y,b,x,S,C,w,T,E;e((()=>{a(),n(),{expect:o,within:s}=__STORYBOOK_MODULE_TEST__,c={title:`Data Display/Timeline`,component:i,tags:[`autodocs`],argTypes:{mode:{control:`select`,options:[`start`,`alternate`,`end`],description:`Controls which side labels/content appear on.`,table:{defaultValue:{summary:`start`},category:`Props`}},variant:{control:`select`,options:[`filled`,`outlined`],description:"Dot style - `filled` (solid circle) or `outlined` (hollow ring).",table:{defaultValue:{summary:`filled`},category:`Props`}},orientation:{control:`select`,options:[`vertical`,`horizontal`],description:`Layout direction.`,table:{defaultValue:{summary:`vertical`},category:`Props`}},pending:{control:`text`,description:"Show a pending ghost item at the bottom. `true` = default spinner, `string` = spinner + text.",table:{defaultValue:{summary:`false`},category:`Props`}},pendingDot:{control:`text`,description:`Custom dot content for the pending item.`,table:{category:`Props`}},reverse:{control:`boolean`,description:`Whether to reverse item order (newest first).`,table:{defaultValue:{summary:`false`},category:`Props`}},items:{control:`object`,description:"Data-driven items. Each item: `{ content?, title?, color?, icon?, loading?, placement?, className?, style? }`.",table:{category:`Props`}}},parameters:{docs:{description:{component:`The <code>BTimeline</code> component visualizes a sequence of events in chronological order.<br><br>Supports three <strong>modes</strong> (<code>start</code>, <code>end</code>, <code>alternate</code>), four <strong>preset dot colors</strong> plus arbitrary CSS colors, a <strong>pending</strong> ghost tail item with a spinner, <strong>reverse</strong> order, custom <strong>dot</strong> content (slot or prop), and a <strong>title</strong> on the opposing side in alternate/end mode.<br>Use the <code>&lt;BTimelineItem&gt;</code> sub-component for rich slot-based content, or pass the <code>items</code> array prop for data-driven usage.<br>Theming via <code>--b-timeline-*</code> CSS custom properties. Respects <code>prefers-reduced-motion</code>.`}}}},l=[{content:`Create a services site 2015-09-01`,color:`blue`},{content:`Solve initial network problems 2015-09-01`,color:`green`},{content:`Technical testing 2015-09-01`,color:`red`},{content:`Network problems being solved 2015-09-01`,color:`gray`}],u={args:{mode:`start`,variant:`filled`,orientation:`vertical`,pending:!1,reverse:!1,items:l},render:e=>({components:{BTimeline:i},setup(){return{args:e}},template:`
      <div style="padding: 2rem; max-width: 500px;">
        <BTimeline v-bind="args" />
      </div>
    `})},d={parameters:{controls:{disable:!0},docs:{source:{code:`<BTimeline :items="[
  { content: 'Create a services site', color: 'blue' },
  { content: 'Solve initial network problems', color: 'green' },
  { content: 'Technical testing', color: 'red' },
]" />`}}},render:()=>({components:{BTimeline:i},setup(){return{BASIC_ITEMS:l}},template:`
      <div style="padding: 2rem; max-width: 500px;">
        <BTimeline data-testid="basic" :items="BASIC_ITEMS" />
      </div>
    `}),play:async({canvasElement:e})=>{let t=s(e).getByTestId(`basic`);o(t.tagName).toBe(`OL`),o(t.getAttribute(`aria-label`)).toBe(`Timeline`),o(t.querySelectorAll(`.b-timeline-item`).length).toBe(4),o(t.classList.contains(`b-timeline--start`)).toBe(!0)}},f={name:`Dot Colors`,parameters:{controls:{disable:!0},docs:{source:{code:`<BTimeline :items="[
  { content: 'Blue (default)', color: 'blue' },
  { content: 'Green - success', color: 'green' },
  { content: 'Red - error', color: 'red' },
  { content: 'Gray - neutral', color: 'gray' },
  { content: 'Custom CSS color', color: 'oklch(60% 0.2 300)' },
]" />`}}},render:()=>({components:{BTimeline:i},setup(){return{colorItems:[{content:`Blue (default)`,color:`blue`},{content:`Green - success`,color:`green`},{content:`Red - error`,color:`red`},{content:`Gray - neutral`,color:`gray`},{content:`Custom purple (oklch)`,color:`oklch(60% 0.2 300)`}]}},template:`
      <div style="padding: 2rem; max-width: 500px;">
        <BTimeline data-testid="colors" :items="colorItems" />
      </div>
    `}),play:async({canvasElement:e})=>{let t=s(e).getByTestId(`colors`).querySelectorAll(`.b-timeline-item`);o(t[0].classList.contains(`b-timeline-item--blue`)).toBe(!0),o(t[1].classList.contains(`b-timeline-item--green`)).toBe(!0),o(t[2].classList.contains(`b-timeline-item--red`)).toBe(!0),o(t[3].classList.contains(`b-timeline-item--gray`)).toBe(!0),o(t[4].classList.contains(`b-timeline-item--custom`)).toBe(!0),o(t[4].style.getPropertyValue(`--b-timeline-item-dot-color`)).toBeTruthy()}},p={name:`Mode: Alternate`,parameters:{controls:{disable:!0},docs:{source:{code:`<BTimeline mode="alternate" :items="items" />`}}},render:()=>({components:{BTimeline:i},setup(){return{altItems:[{content:`Create a services site`,title:`2015-09-01`,color:`blue`},{content:`Solve initial network problems`,title:`2015-09-01`,color:`green`},{content:`Technical testing`,title:`2015-09-01`,color:`red`},{content:`Network problems being solved`,title:`2015-09-01`,color:`gray`}]}},template:`
      <div style="padding: 2rem; max-width: 600px;">
        <BTimeline data-testid="alternate" mode="alternate" :items="altItems" />
      </div>
    `}),play:async({canvasElement:e})=>{let t=s(e).getByTestId(`alternate`);o(t.classList.contains(`b-timeline--alternate`)).toBe(!0);let n=t.querySelectorAll(`.b-timeline-item`);o(n[0].classList.contains(`b-timeline-item--left`)).toBe(!0),o(n[1].classList.contains(`b-timeline-item--right`)).toBe(!0),o(n[2].classList.contains(`b-timeline-item--left`)).toBe(!0),o(n[3].classList.contains(`b-timeline-item--right`)).toBe(!0)}},m={name:`Mode: End`,parameters:{controls:{disable:!0},docs:{source:{code:`<BTimeline mode="end" :items="items" />`}}},render:()=>({components:{BTimeline:i},setup(){return{BASIC_ITEMS:l}},template:`
      <div style="padding: 2rem; max-width: 500px;">
        <BTimeline data-testid="right" mode="end" :items="BASIC_ITEMS" />
      </div>
    `}),play:async({canvasElement:e})=>{let t=s(e).getByTestId(`right`);o(t.classList.contains(`b-timeline--end`)).toBe(!0),t.querySelectorAll(`.b-timeline-item`).forEach(e=>{o(e.classList.contains(`b-timeline-item--right`)).toBe(!0)})}},h={parameters:{controls:{disable:!0},docs:{source:{code:`<BTimeline :items="items" pending="Ongoing task..." />`}}},render:()=>({components:{BTimeline:i},setup(){return{BASIC_ITEMS:l}},template:`
      <div style="padding: 2rem; max-width: 500px;">
        <BTimeline data-testid="pending" :items="BASIC_ITEMS" pending="Recording..." />
      </div>
    `}),play:async({canvasElement:e})=>{let t=s(e).getByTestId(`pending`);o(t.classList.contains(`b-timeline--pending`)).toBe(!0);let n=t.querySelector(`.b-timeline-item--pending`);o(n).not.toBeNull(),o(n.getAttribute(`aria-label`)).toBe(`Pending`),o(t.querySelector(`.b-timeline-item__dot--pending-spinner`)).not.toBeNull()}},g={name:`Custom Dot`,parameters:{controls:{disable:!0},docs:{source:{code:`<BTimeline :items="[
  { content: 'Checked in', icon: '✓', color: 'green' },
  { content: 'Flagged', icon: '⚑', color: 'red' },
]" />`}}},render:()=>({components:{BTimeline:i},setup(){return{dotItems:[{content:`Checked in`,icon:`✓`,color:`green`},{content:`Flagged`,icon:`⚑`,color:`red`},{content:`Star event`,icon:`★`,color:`blue`}]}},template:`
      <div style="padding: 2rem; max-width: 500px;">
        <BTimeline data-testid="custom-dot" :items="dotItems" />
      </div>
    `}),play:async({canvasElement:e})=>{let t=s(e).getByTestId(`custom-dot`).querySelectorAll(`.b-timeline-item__dot--custom`);o(t.length).toBe(3),o(t[0].dataset.icon).toBe(`✓`),o(t[1].dataset.icon).toBe(`⚑`),o(t[2].dataset.icon).toBe(`★`)}},_={name:`With Labels`,parameters:{controls:{disable:!0},docs:{source:{code:`<BTimeline mode="alternate" :items="[
  { title: '2015-09-01', content: 'Create services site', color: 'blue' },
  { title: '2015-09-01', content: 'Network issues resolved', color: 'green' },
]" />`}}},render:()=>({components:{BTimeline:i},setup(){return{labelItems:[{title:`2015-09-01 09:12`,content:`Create services site`,color:`blue`},{title:`2015-09-01 10:05`,content:`Solve initial network problems`,color:`green`},{title:`2015-09-01 14:30`,content:`Technical testing`,color:`red`},{title:`2015-09-01 16:45`,content:`Network problems being solved`,color:`gray`}]}},template:`
      <div style="padding: 2rem; max-width: 640px;">
        <BTimeline data-testid="labels" mode="alternate" :items="labelItems" />
      </div>
    `}),play:async({canvasElement:e})=>{let t=s(e).getByTestId(`labels`).querySelectorAll(`.b-timeline-item__label`);o(t.length).toBe(4),o(t[0].textContent?.trim()).toBe(`2015-09-01 09:12`)}},v={parameters:{controls:{disable:!0},docs:{source:{code:`<BTimeline :items="items" reverse />`}}},render:()=>({components:{BTimeline:i},setup(){return{BASIC_ITEMS:l,rv:t(!1)}},template:`
      <div style="padding: 2rem; max-width: 500px;">
        <div style="margin-bottom:1rem;display:flex;gap:0.75rem;align-items:center;">
          <label style="font-size:13px;cursor:pointer;display:flex;align-items:center;gap:6px;">
            <input type="checkbox" v-model="rv" />
            Reverse order
          </label>
        </div>
        <BTimeline data-testid="reverse" :items="BASIC_ITEMS" :reverse="rv" />
      </div>
    `}),play:async({canvasElement:e})=>{o(s(e).getByTestId(`reverse`).querySelectorAll(`.b-timeline-item__content`)[0].textContent?.trim()).toBe(`Create a services site 2015-09-01`)}},y={name:`Slot-based (BTimelineItem)`,parameters:{controls:{disable:!0},docs:{source:{code:`<BTimeline>
  <BTimelineItem color="blue">
    <template #label>09:00</template>
    <strong>Meeting kick-off</strong>
    <p style="font-size:12px;color:#767676;">All hands call</p>
  </BTimelineItem>
  <BTimelineItem color="green" icon="✓">
    Deployment complete
  </BTimelineItem>
</BTimeline>`}}},render:()=>({components:{BTimeline:i,BTimelineItem:r},template:`
      <div style="padding: 2rem; max-width: 500px;">
        <BTimeline data-testid="slot-based">
          <BTimelineItem color="blue">
            <template #label>09:00</template>
            <strong>Meeting kick-off</strong>
            <p style="margin:4px 0 0;font-size:12px;color:#767676;">All hands call</p>
          </BTimelineItem>
          <BTimelineItem color="green" icon="✓">
            Deployment complete
          </BTimelineItem>
          <BTimelineItem color="red" icon="⚑">
            Alert triggered
          </BTimelineItem>
          <BTimelineItem color="gray">
            Incident resolved
          </BTimelineItem>
        </BTimeline>
      </div>
    `}),play:async({canvasElement:e})=>{let t=s(e).getByTestId(`slot-based`),n=t.querySelectorAll(`.b-timeline-item`);o(n.length).toBe(4),o(n[0].classList.contains(`b-timeline-item--blue`)).toBe(!0),o(n[1].classList.contains(`b-timeline-item--green`)).toBe(!0),o(t.querySelectorAll(`.b-timeline-item__dot--custom`).length).toBeGreaterThanOrEqual(1)}},b={name:`Accessibility (roles & structure)`,parameters:{controls:{disable:!0},docs:{description:{story:`Verifies that the timeline renders as an <code>&lt;ol&gt;</code> list, items are <code>&lt;li&gt;</code> elements, decorative elements are <code>aria-hidden</code>, and the pending item has <code>aria-label="Pending"</code>.`}}},render:()=>({components:{BTimeline:i},setup(){return{BASIC_ITEMS:l}},template:`
      <div style="padding: 2rem; max-width: 500px;">
        <BTimeline data-testid="a11y" :items="BASIC_ITEMS" pending="In progress" />
      </div>
    `}),play:async({canvasElement:e})=>{let t=s(e).getByTestId(`a11y`);o(t.tagName).toBe(`OL`),o(t.getAttribute(`aria-label`)).toBe(`Timeline`),t.querySelectorAll(`.b-timeline-item`).forEach(e=>{o(e.tagName).toBe(`LI`)}),t.querySelectorAll(`.b-timeline-item__dot-wrapper`).forEach(e=>{o(e.getAttribute(`aria-hidden`)).toBe(`true`)}),t.querySelectorAll(`.b-timeline-item__tail`).forEach(e=>{o(e.getAttribute(`aria-hidden`)).toBe(`true`)});let n=t.querySelector(`.b-timeline-item--pending`);o(n).not.toBeNull(),o(n.getAttribute(`aria-label`)).toBe(`Pending`)}},x={name:`Design Tokens`,parameters:{controls:{disable:!0},docs:{description:{story:`All <code>--b-timeline-*</code> CSS custom properties with a live side-by-side preview. The left column shows the default value; the right column shows the token overridden.`}}},render:()=>({components:{BTimeline:i},setup(){return{items2:[{content:`First event`,color:`blue`},{content:`Second event`,color:`blue`}],items3:[{content:`First event`,color:`blue`},{content:`Second event`,color:`blue`},{content:`Third event`,color:`blue`}]}},template:`
<div style="font-family:sans-serif;padding:2rem;display:flex;flex-direction:column;gap:2.5rem;max-width:900px;">

  <!-- ── tailWidth / --b-timeline-line-width ── -->
  <div>
    <p style="margin:0 0 4px;font-size:13px;font-weight:600;">--b-timeline-line-width</p>
    <p style="margin:0 0 12px;font-size:12px;color:#595959;">Ant Design: <code>tailWidth</code> - width of the connecting line. Default: <code>2px</code></p>
    <div style="display:flex;gap:3rem;align-items:flex-start;">
      <div style="flex:1;">
        <p style="margin:0 0 6px;font-size:12px;color:#595959;text-transform:uppercase;letter-spacing:.05em;">Default (2px)</p>
        <BTimeline :items="items3" />
      </div>
      <div style="flex:1;">
        <p style="margin:0 0 6px;font-size:12px;color:#595959;text-transform:uppercase;letter-spacing:.05em;">Overridden (5px)</p>
        <BTimeline :items="items3" style="--b-timeline-line-width:5px;" />
      </div>
    </div>
  </div>

  <!-- ── tailColor / --b-timeline-line-color ── -->
  <div>
    <p style="margin:0 0 4px;font-size:13px;font-weight:600;">--b-timeline-line-color</p>
    <p style="margin:0 0 12px;font-size:12px;color:#595959;">Ant Design: <code>tailColor</code> - color of the connecting line. Default: light gray</p>
    <div style="display:flex;gap:3rem;align-items:flex-start;">
      <div style="flex:1;">
        <p style="margin:0 0 6px;font-size:12px;color:#595959;text-transform:uppercase;letter-spacing:.05em;">Default</p>
        <BTimeline :items="items3" />
      </div>
      <div style="flex:1;">
        <p style="margin:0 0 6px;font-size:12px;color:#595959;text-transform:uppercase;letter-spacing:.05em;">Overridden (blue tint)</p>
        <BTimeline :items="items3" style="--b-timeline-line-color:oklch(75% 0.12 262);" />
      </div>
    </div>
  </div>

  <!-- ── dotSize / --b-timeline-dot-size ── -->
  <div>
    <p style="margin:0 0 4px;font-size:13px;font-weight:600;">--b-timeline-dot-size</p>
    <p style="margin:0 0 12px;font-size:12px;color:#595959;">Ant Design: <code>dotSize</code> - diameter of the dot circle. Default: <code>10px</code></p>
    <div style="display:flex;gap:3rem;align-items:flex-start;">
      <div style="flex:1;">
        <p style="margin:0 0 6px;font-size:12px;color:#595959;text-transform:uppercase;letter-spacing:.05em;">Default (10px)</p>
        <BTimeline :items="items3" />
      </div>
      <div style="flex:1;">
        <p style="margin:0 0 6px;font-size:12px;color:#595959;text-transform:uppercase;letter-spacing:.05em;">Overridden (18px)</p>
        <BTimeline :items="items3" style="--b-timeline-dot-size:18px;" />
      </div>
    </div>
  </div>

  <!-- ── dotBorderWidth / --b-timeline-dot-border-width ── -->
  <div>
    <p style="margin:0 0 4px;font-size:13px;font-weight:600;">--b-timeline-dot-border-width</p>
    <p style="margin:0 0 12px;font-size:12px;color:#595959;">Ant Design: <code>dotBorderWidth</code> - border thickness used in <code>outlined</code> variant. Default: <code>2px</code></p>
    <div style="display:flex;gap:3rem;align-items:flex-start;">
      <div style="flex:1;">
        <p style="margin:0 0 6px;font-size:12px;color:#595959;text-transform:uppercase;letter-spacing:.05em;">Default (2px)</p>
        <BTimeline variant="outlined" :items="items3" />
      </div>
      <div style="flex:1;">
        <p style="margin:0 0 6px;font-size:12px;color:#595959;text-transform:uppercase;letter-spacing:.05em;">Overridden (4px)</p>
        <BTimeline variant="outlined" :items="items3" style="--b-timeline-dot-border-width:4px;" />
      </div>
    </div>
  </div>

  <!-- ── itemPaddingBottom / --b-timeline-item-padding-bottom ── -->
  <div>
    <p style="margin:0 0 4px;font-size:13px;font-weight:600;">--b-timeline-item-padding-bottom</p>
    <p style="margin:0 0 12px;font-size:12px;color:#595959;">Ant Design: <code>itemPaddingBottom</code> - vertical gap between items. Default: <code>20px</code></p>
    <div style="display:flex;gap:3rem;align-items:flex-start;">
      <div style="flex:1;">
        <p style="margin:0 0 6px;font-size:12px;color:#595959;text-transform:uppercase;letter-spacing:.05em;">Default (20px)</p>
        <BTimeline :items="items3" />
      </div>
      <div style="flex:1;">
        <p style="margin:0 0 6px;font-size:12px;color:#595959;text-transform:uppercase;letter-spacing:.05em;">Overridden (48px)</p>
        <BTimeline :items="items3" style="--b-timeline-item-padding-bottom:48px;" />
      </div>
    </div>
  </div>

  <!-- ── Preset dot colors ── -->
  <div>
    <p style="margin:0 0 4px;font-size:13px;font-weight:600;">--b-timeline-color-{blue|green|red|gray}</p>
    <p style="margin:0 0 12px;font-size:12px;color:#595959;">Preset dot colors. Override to retheme each preset without changing item <code>color</code> props.</p>
    <div style="display:flex;gap:3rem;align-items:flex-start;">
      <div style="flex:1;">
        <p style="margin:0 0 6px;font-size:12px;color:#595959;text-transform:uppercase;letter-spacing:.05em;">Default</p>
        <BTimeline :items="[
          { content: 'Blue', color: 'blue' },
          { content: 'Green', color: 'green' },
          { content: 'Red', color: 'red' },
          { content: 'Gray', color: 'gray' },
        ]" />
      </div>
      <div style="flex:1;">
        <p style="margin:0 0 6px;font-size:12px;color:#595959;text-transform:uppercase;letter-spacing:.05em;">Overridden (purple theme)</p>
        <BTimeline :items="[
          { content: 'Blue → purple', color: 'blue' },
          { content: 'Green → teal', color: 'green' },
          { content: 'Red → orange', color: 'red' },
          { content: 'Gray → slate', color: 'gray' },
        ]" style="
          --b-timeline-color-blue: oklch(55% 0.22 310);
          --b-timeline-color-green: oklch(55% 0.15 195);
          --b-timeline-color-red: oklch(60% 0.18 55);
          --b-timeline-color-gray: oklch(50% 0.04 240);
        " />
      </div>
    </div>
  </div>

  <!-- ── Label typography ── -->
  <div>
    <p style="margin:0 0 4px;font-size:13px;font-weight:600;">--b-timeline-label-color / --b-timeline-label-font-size</p>
    <p style="margin:0 0 12px;font-size:12px;color:#595959;">Color and size of the label text shown on the opposing side (alternate mode).</p>
    <div style="display:flex;gap:3rem;align-items:flex-start;">
      <div style="flex:1;">
        <p style="margin:0 0 6px;font-size:12px;color:#595959;text-transform:uppercase;letter-spacing:.05em;">Default</p>
        <BTimeline mode="alternate" :items="[
          { content: 'Deploy', title: '09:00', color: 'blue' },
          { content: 'Review', title: '11:30', color: 'green' },
          { content: 'Release', title: '15:00', color: 'red' },
        ]" />
      </div>
      <div style="flex:1;">
        <p style="margin:0 0 6px;font-size:12px;color:#595959;text-transform:uppercase;letter-spacing:.05em;">Overridden</p>
        <BTimeline mode="alternate" :items="[
          { content: 'Deploy', title: '09:00', color: 'blue' },
          { content: 'Review', title: '11:30', color: 'green' },
          { content: 'Release', title: '15:00', color: 'red' },
        ]" style="
          --b-timeline-label-color: oklch(54.6% 0.245 262.881);
          --b-timeline-label-font-size: 12px;
        " />
      </div>
    </div>
  </div>

  <!-- ── Content typography ── -->
  <div>
    <p style="margin:0 0 4px;font-size:13px;font-weight:600;">--b-timeline-content-color / --b-timeline-content-font-size</p>
    <p style="margin:0 0 12px;font-size:12px;color:#595959;">Color and size of the main content text.</p>
    <div style="display:flex;gap:3rem;align-items:flex-start;">
      <div style="flex:1;">
        <p style="margin:0 0 6px;font-size:12px;color:#595959;text-transform:uppercase;letter-spacing:.05em;">Default (14px)</p>
        <BTimeline :items="items2" />
      </div>
      <div style="flex:1;">
        <p style="margin:0 0 6px;font-size:12px;color:#595959;text-transform:uppercase;letter-spacing:.05em;">Overridden (16px, muted)</p>
        <BTimeline :items="items2" style="
          --b-timeline-content-font-size: 16px;
          --b-timeline-content-color: oklch(55% 0.02 260);
        " />
      </div>
    </div>
  </div>

  <!-- ── Spinner ── -->
  <div>
    <p style="margin:0 0 4px;font-size:13px;font-weight:600;">--b-timeline-spinner-size / --b-timeline-spinner-duration</p>
    <p style="margin:0 0 12px;font-size:12px;color:#595959;">Controls the pending spinner size and animation speed.</p>
    <div style="display:flex;gap:3rem;align-items:flex-start;">
      <div style="flex:1;">
        <p style="margin:0 0 6px;font-size:12px;color:#595959;text-transform:uppercase;letter-spacing:.05em;">Default (14px, 700ms)</p>
        <BTimeline :items="items2" :pending="true" />
      </div>
      <div style="flex:1;">
        <p style="margin:0 0 6px;font-size:12px;color:#595959;text-transform:uppercase;letter-spacing:.05em;">Overridden (20px, 300ms)</p>
        <BTimeline :items="items2" :pending="true" style="
          --b-timeline-spinner-size: 20px;
          --b-timeline-spinner-duration: 300ms;
          --b-timeline-spinner-accent-color: oklch(52% 0.17 145);
        " />
      </div>
    </div>
  </div>

  <!-- ── custom-dot font size ── -->
  <div>
    <p style="margin:0 0 4px;font-size:13px;font-weight:600;">--b-timeline-custom-dot-font-size</p>
    <p style="margin:0 0 12px;font-size:12px;color:#595959;">Font size of emoji / text custom dots. Default: <code>20px</code></p>
    <div style="display:flex;gap:3rem;align-items:flex-start;">
      <div style="flex:1;">
        <p style="margin:0 0 6px;font-size:12px;color:#595959;text-transform:uppercase;letter-spacing:.05em;">Default (20px)</p>
        <BTimeline :items="[
          { content: 'Checked in', icon: '✓', color: 'green' },
          { content: 'Star event', icon: '★', color: 'blue' },
        ]" />
      </div>
      <div style="flex:1;">
        <p style="margin:0 0 6px;font-size:12px;color:#595959;text-transform:uppercase;letter-spacing:.05em;">Overridden (28px)</p>
        <BTimeline :items="[
          { content: 'Checked in', icon: '✓', color: 'green' },
          { content: 'Star event', icon: '★', color: 'blue' },
        ]" style="--b-timeline-custom-dot-font-size:28px;" />
      </div>
    </div>
  </div>

</div>
    `})},S={name:`Variant: Filled vs Outlined`,parameters:{controls:{disable:!0},docs:{source:{code:`<!-- Filled (default) -->
<BTimeline variant="filled" :items="items" />

<!-- Outlined -->
<BTimeline variant="outlined" :items="items" />`}}},render:()=>({components:{BTimeline:i},setup(){return{BASIC_ITEMS:l}},template:`
      <div style="padding: 2rem; display: flex; gap: 3rem; flex-wrap: wrap;">
        <div>
          <p style="font-size:12px;color:#666;margin:0 0 12px;font-weight:600;">Filled (default)</p>
          <BTimeline data-testid="filled" variant="filled" :items="BASIC_ITEMS" style="max-width:280px;" />
        </div>
        <div>
          <p style="font-size:12px;color:#666;margin:0 0 12px;font-weight:600;">Outlined</p>
          <BTimeline data-testid="outlined" variant="outlined" :items="BASIC_ITEMS" style="max-width:280px;" />
        </div>
      </div>
    `}),play:async({canvasElement:e})=>{let t=s(e);o(t.getByTestId(`filled`).classList.contains(`b-timeline--filled`)).toBe(!0),o(t.getByTestId(`outlined`).classList.contains(`b-timeline--outlined`)).toBe(!0)}},C={name:`Orientation: Horizontal`,parameters:{controls:{disable:!0},docs:{source:{code:`<BTimeline orientation="horizontal" :items="items" />`}}},render:()=>({components:{BTimeline:i},setup(){return{steps:[{content:`Order placed`,color:`blue`},{content:`Processing`,color:`green`},{content:`Shipped`,color:`blue`},{content:`Delivered`,color:`gray`}]}},template:`
      <div style="padding: 2rem;">
        <BTimeline data-testid="horizontal" orientation="horizontal" :items="steps" />
      </div>
    `}),play:async({canvasElement:e})=>{let t=s(e).getByTestId(`horizontal`);o(t.classList.contains(`b-timeline--horizontal`)).toBe(!0),o(t.querySelectorAll(`.b-timeline-item`).length).toBe(4)}},w={name:`Per-item Placement`,parameters:{controls:{disable:!0},docs:{source:{code:`<BTimeline mode="start" :items="[
  { content: 'Default (start side)', color: 'blue' },
  { content: 'Pinned to end', color: 'green', placement: 'end' },
  { content: 'Default again', color: 'red' },
  { content: 'Also pinned to end', color: 'gray', placement: 'end' },
]" />`}}},render:()=>({components:{BTimeline:i},setup(){return{mixedItems:[{content:`Default (start side)`,color:`blue`},{content:`Pinned to end side`,color:`green`,placement:`end`},{content:`Default again`,color:`red`},{content:`Also pinned to end`,color:`gray`,placement:`end`}]}},template:`
      <div style="padding: 2rem; max-width: 600px;">
        <BTimeline data-testid="placement" mode="alternate" :items="mixedItems" />
      </div>
    `}),play:async({canvasElement:e})=>{let t=s(e).getByTestId(`placement`).querySelectorAll(`.b-timeline-item`);o(t[1].classList.contains(`b-timeline-item--right`)).toBe(!0),o(t[3].classList.contains(`b-timeline-item--right`)).toBe(!0)}},T={name:`Interaction – full flow`,parameters:{controls:{disable:!0},docs:{description:{story:`Automated play function verifying item rendering, color classes, pending state, and label rendering.`}}},render:()=>({components:{BTimeline:i},setup(){return{items:[{content:`Alpha event`,color:`blue`,title:`T+0`},{content:`Beta event`,color:`green`,title:`T+1`},{content:`Gamma event`,color:`red`,icon:`★`,title:`T+2`},{content:`Delta event`,color:`gray`,title:`T+3`}],reverse:t(!1)}},template:`
      <div style="padding: 2rem; max-width: 640px;">
        <div style="margin-bottom:1rem;">
          <button data-testid="toggle-reverse" @click="reverse = !reverse">Toggle reverse</button>
        </div>
        <BTimeline data-testid="int" :items="items" mode="alternate" :reverse="reverse" />
      </div>
    `}),play:async({canvasElement:e})=>{let t=s(e),n=t.getByTestId(`int`);o(n.classList.contains(`b-timeline--alternate`)).toBe(!0);let r=n.querySelectorAll(`.b-timeline-item`);o(r.length).toBe(4),o(r[0].classList.contains(`b-timeline-item--blue`)).toBe(!0),o(r[1].classList.contains(`b-timeline-item--green`)).toBe(!0),o(r[2].classList.contains(`b-timeline-item--red`)).toBe(!0),o(r[3].classList.contains(`b-timeline-item--gray`)).toBe(!0),o(r[0].classList.contains(`b-timeline-item--left`)).toBe(!0),o(r[1].classList.contains(`b-timeline-item--right`)).toBe(!0),o(r[2].querySelector(`.b-timeline-item__dot--custom`)?.dataset.icon).toBe(`★`);let i=n.querySelectorAll(`.b-timeline-item__label`);o(i.length).toBe(4),o(i[0].textContent?.trim()).toBe(`T+0`),await t.getByTestId(`toggle-reverse`).click(),await new Promise(e=>setTimeout(e,50)),o(n.querySelectorAll(`.b-timeline-item`)[3].querySelector(`.b-timeline-item__content`)?.textContent?.trim()).toBe(`Alpha event`)}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    mode: 'start',
    variant: 'filled',
    orientation: 'vertical',
    pending: false,
    reverse: false,
    items: BASIC_ITEMS
  },
  render: args => ({
    components: {
      BTimeline
    },
    setup() {
      return {
        args
      };
    },
    template: \`
      <div style="padding: 2rem; max-width: 500px;">
        <BTimeline v-bind="args" />
      </div>
    \`
  })
}`,...u.parameters?.docs?.source},description:{story:`Interactive playground - tweak all props via the Controls panel.`,...u.parameters?.docs?.description}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: true
    },
    docs: {
      source: {
        code: \`<BTimeline :items="[
  { content: 'Create a services site', color: 'blue' },
  { content: 'Solve initial network problems', color: 'green' },
  { content: 'Technical testing', color: 'red' },
]" />\`
      }
    }
  },
  render: () => ({
    components: {
      BTimeline
    },
    setup() {
      return {
        BASIC_ITEMS
      };
    },
    template: \`
      <div style="padding: 2rem; max-width: 500px;">
        <BTimeline data-testid="basic" :items="BASIC_ITEMS" />
      </div>
    \`
  }),
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const el = canvas.getByTestId('basic');
    expect(el.tagName).toBe('OL');
    expect(el.getAttribute('aria-label')).toBe('Timeline');
    const items = el.querySelectorAll('.b-timeline-item');
    expect(items.length).toBe(4);
    expect(el.classList.contains('b-timeline--start')).toBe(true);
  }
}`,...d.parameters?.docs?.source},description:{story:`Default timeline with data-driven items.`,...d.parameters?.docs?.description}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  name: 'Dot Colors',
  parameters: {
    controls: {
      disable: true
    },
    docs: {
      source: {
        code: \`<BTimeline :items="[
  { content: 'Blue (default)', color: 'blue' },
  { content: 'Green - success', color: 'green' },
  { content: 'Red - error', color: 'red' },
  { content: 'Gray - neutral', color: 'gray' },
  { content: 'Custom CSS color', color: 'oklch(60% 0.2 300)' },
]" />\`
      }
    }
  },
  render: () => ({
    components: {
      BTimeline
    },
    setup() {
      const colorItems: BTimelineItemData[] = [{
        content: 'Blue (default)',
        color: 'blue'
      }, {
        content: 'Green - success',
        color: 'green'
      }, {
        content: 'Red - error',
        color: 'red'
      }, {
        content: 'Gray - neutral',
        color: 'gray'
      }, {
        content: 'Custom purple (oklch)',
        color: 'oklch(60% 0.2 300)'
      }];
      return {
        colorItems
      };
    },
    template: \`
      <div style="padding: 2rem; max-width: 500px;">
        <BTimeline data-testid="colors" :items="colorItems" />
      </div>
    \`
  }),
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const el = canvas.getByTestId('colors');
    const items = el.querySelectorAll('.b-timeline-item');
    expect(items[0].classList.contains('b-timeline-item--blue')).toBe(true);
    expect(items[1].classList.contains('b-timeline-item--green')).toBe(true);
    expect(items[2].classList.contains('b-timeline-item--red')).toBe(true);
    expect(items[3].classList.contains('b-timeline-item--gray')).toBe(true);
    expect(items[4].classList.contains('b-timeline-item--custom')).toBe(true);
    expect((items[4] as HTMLElement).style.getPropertyValue('--b-timeline-item-dot-color')).toBeTruthy();
  }
}`,...f.parameters?.docs?.source},description:{story:`Preset colors: blue, green, red, gray. Plus a custom CSS color.`,...f.parameters?.docs?.description}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  name: 'Mode: Alternate',
  parameters: {
    controls: {
      disable: true
    },
    docs: {
      source: {
        code: \`<BTimeline mode="alternate" :items="items" />\`
      }
    }
  },
  render: () => ({
    components: {
      BTimeline
    },
    setup() {
      const altItems: BTimelineItemData[] = [{
        content: 'Create a services site',
        title: '2015-09-01',
        color: 'blue'
      }, {
        content: 'Solve initial network problems',
        title: '2015-09-01',
        color: 'green'
      }, {
        content: 'Technical testing',
        title: '2015-09-01',
        color: 'red'
      }, {
        content: 'Network problems being solved',
        title: '2015-09-01',
        color: 'gray'
      }];
      return {
        altItems
      };
    },
    template: \`
      <div style="padding: 2rem; max-width: 600px;">
        <BTimeline data-testid="alternate" mode="alternate" :items="altItems" />
      </div>
    \`
  }),
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const el = canvas.getByTestId('alternate');
    expect(el.classList.contains('b-timeline--alternate')).toBe(true);
    const items = el.querySelectorAll('.b-timeline-item');
    expect(items[0].classList.contains('b-timeline-item--left')).toBe(true);
    expect(items[1].classList.contains('b-timeline-item--right')).toBe(true);
    expect(items[2].classList.contains('b-timeline-item--left')).toBe(true);
    expect(items[3].classList.contains('b-timeline-item--right')).toBe(true);
  }
}`,...p.parameters?.docs?.source},description:{story:`Alternate mode - content and labels alternate sides of the line.`,...p.parameters?.docs?.description}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  name: 'Mode: End',
  parameters: {
    controls: {
      disable: true
    },
    docs: {
      source: {
        code: \`<BTimeline mode="end" :items="items" />\`
      }
    }
  },
  render: () => ({
    components: {
      BTimeline
    },
    setup() {
      return {
        BASIC_ITEMS
      };
    },
    template: \`
      <div style="padding: 2rem; max-width: 500px;">
        <BTimeline data-testid="right" mode="end" :items="BASIC_ITEMS" />
      </div>
    \`
  }),
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const el = canvas.getByTestId('right');
    expect(el.classList.contains('b-timeline--end')).toBe(true);
    el.querySelectorAll('.b-timeline-item').forEach(item => {
      expect(item.classList.contains('b-timeline-item--right')).toBe(true);
    });
  }
}`,...m.parameters?.docs?.source},description:{story:`End mode - all content on the left of the line.`,...m.parameters?.docs?.description}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: true
    },
    docs: {
      source: {
        code: \`<BTimeline :items="items" pending="Ongoing task..." />\`
      }
    }
  },
  render: () => ({
    components: {
      BTimeline
    },
    setup() {
      return {
        BASIC_ITEMS
      };
    },
    template: \`
      <div style="padding: 2rem; max-width: 500px;">
        <BTimeline data-testid="pending" :items="BASIC_ITEMS" pending="Recording..." />
      </div>
    \`
  }),
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const el = canvas.getByTestId('pending');
    expect(el.classList.contains('b-timeline--pending')).toBe(true);
    const pendingItem = el.querySelector('.b-timeline-item--pending');
    expect(pendingItem).not.toBeNull();
    expect(pendingItem!.getAttribute('aria-label')).toBe('Pending');
    expect(el.querySelector('.b-timeline-item__dot--pending-spinner')).not.toBeNull();
  }
}`,...h.parameters?.docs?.source},description:{story:`Timeline with a pending ghost item - shows a spinner at the tail.`,...h.parameters?.docs?.description}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  name: 'Custom Dot',
  parameters: {
    controls: {
      disable: true
    },
    docs: {
      source: {
        code: \`<BTimeline :items="[
  { content: 'Checked in', icon: '✓', color: 'green' },
  { content: 'Flagged', icon: '⚑', color: 'red' },
]" />\`
      }
    }
  },
  render: () => ({
    components: {
      BTimeline
    },
    setup() {
      const dotItems: BTimelineItemData[] = [{
        content: 'Checked in',
        icon: '✓',
        color: 'green'
      }, {
        content: 'Flagged',
        icon: '⚑',
        color: 'red'
      }, {
        content: 'Star event',
        icon: '★',
        color: 'blue'
      }];
      return {
        dotItems
      };
    },
    template: \`
      <div style="padding: 2rem; max-width: 500px;">
        <BTimeline data-testid="custom-dot" :items="dotItems" />
      </div>
    \`
  }),
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const el = canvas.getByTestId('custom-dot');
    const customDots = el.querySelectorAll('.b-timeline-item__dot--custom');
    expect(customDots.length).toBe(3);
    expect((customDots[0] as HTMLElement).dataset.icon).toBe('✓');
    expect((customDots[1] as HTMLElement).dataset.icon).toBe('⚑');
    expect((customDots[2] as HTMLElement).dataset.icon).toBe('★');
  }
}`,...g.parameters?.docs?.source},description:{story:`Override the dot with a custom string/icon (data-driven or via slot).`,...g.parameters?.docs?.description}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  name: 'With Labels',
  parameters: {
    controls: {
      disable: true
    },
    docs: {
      source: {
        code: \`<BTimeline mode="alternate" :items="[
  { title: '2015-09-01', content: 'Create services site', color: 'blue' },
  { title: '2015-09-01', content: 'Network issues resolved', color: 'green' },
]" />\`
      }
    }
  },
  render: () => ({
    components: {
      BTimeline
    },
    setup() {
      const labelItems: BTimelineItemData[] = [{
        title: '2015-09-01 09:12',
        content: 'Create services site',
        color: 'blue'
      }, {
        title: '2015-09-01 10:05',
        content: 'Solve initial network problems',
        color: 'green'
      }, {
        title: '2015-09-01 14:30',
        content: 'Technical testing',
        color: 'red'
      }, {
        title: '2015-09-01 16:45',
        content: 'Network problems being solved',
        color: 'gray'
      }];
      return {
        labelItems
      };
    },
    template: \`
      <div style="padding: 2rem; max-width: 640px;">
        <BTimeline data-testid="labels" mode="alternate" :items="labelItems" />
      </div>
    \`
  }),
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const el = canvas.getByTestId('labels');
    const labels = el.querySelectorAll('.b-timeline-item__label');
    expect(labels.length).toBe(4);
    expect(labels[0].textContent?.trim()).toBe('2015-09-01 09:12');
  }
}`,..._.parameters?.docs?.source},description:{story:`Items with labels shown on the opposing side (best with alternate mode).`,..._.parameters?.docs?.description}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: true
    },
    docs: {
      source: {
        code: \`<BTimeline :items="items" reverse />\`
      }
    }
  },
  render: () => ({
    components: {
      BTimeline
    },
    setup() {
      const rv = ref(false);
      return {
        BASIC_ITEMS,
        rv
      };
    },
    template: \`
      <div style="padding: 2rem; max-width: 500px;">
        <div style="margin-bottom:1rem;display:flex;gap:0.75rem;align-items:center;">
          <label style="font-size:13px;cursor:pointer;display:flex;align-items:center;gap:6px;">
            <input type="checkbox" v-model="rv" />
            Reverse order
          </label>
        </div>
        <BTimeline data-testid="reverse" :items="BASIC_ITEMS" :reverse="rv" />
      </div>
    \`
  }),
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const el = canvas.getByTestId('reverse');
    const contents = el.querySelectorAll('.b-timeline-item__content');
    // Default (not reversed): first content matches first item
    expect(contents[0].textContent?.trim()).toBe('Create a services site 2015-09-01');
  }
}`,...v.parameters?.docs?.source},description:{story:`Reverse order - newest items appear first.`,...v.parameters?.docs?.description}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  name: 'Slot-based (BTimelineItem)',
  parameters: {
    controls: {
      disable: true
    },
    docs: {
      source: {
        code: \`<BTimeline>
  <BTimelineItem color="blue">
    <template #label>09:00</template>
    <strong>Meeting kick-off</strong>
    <p style="font-size:12px;color:#767676;">All hands call</p>
  </BTimelineItem>
  <BTimelineItem color="green" icon="✓">
    Deployment complete
  </BTimelineItem>
</BTimeline>\`
      }
    }
  },
  render: () => ({
    components: {
      BTimeline,
      BTimelineItem
    },
    template: \`
      <div style="padding: 2rem; max-width: 500px;">
        <BTimeline data-testid="slot-based">
          <BTimelineItem color="blue">
            <template #label>09:00</template>
            <strong>Meeting kick-off</strong>
            <p style="margin:4px 0 0;font-size:12px;color:#767676;">All hands call</p>
          </BTimelineItem>
          <BTimelineItem color="green" icon="✓">
            Deployment complete
          </BTimelineItem>
          <BTimelineItem color="red" icon="⚑">
            Alert triggered
          </BTimelineItem>
          <BTimelineItem color="gray">
            Incident resolved
          </BTimelineItem>
        </BTimeline>
      </div>
    \`
  }),
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const el = canvas.getByTestId('slot-based');
    const items = el.querySelectorAll('.b-timeline-item');
    expect(items.length).toBe(4);
    expect(items[0].classList.contains('b-timeline-item--blue')).toBe(true);
    expect(items[1].classList.contains('b-timeline-item--green')).toBe(true);
    // Custom dot via slot
    const customDots = el.querySelectorAll('.b-timeline-item__dot--custom');
    expect(customDots.length).toBeGreaterThanOrEqual(1);
  }
}`,...y.parameters?.docs?.source},description:{story:"Rich content using `<BTimelineItem>` children in the default slot.",...y.parameters?.docs?.description}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  name: 'Accessibility (roles & structure)',
  parameters: {
    controls: {
      disable: true
    },
    docs: {
      description: {
        story: 'Verifies that the timeline renders as an <code>&lt;ol&gt;</code> list, ' + 'items are <code>&lt;li&gt;</code> elements, decorative elements are <code>aria-hidden</code>, ' + 'and the pending item has <code>aria-label="Pending"</code>.'
      }
    }
  },
  render: () => ({
    components: {
      BTimeline
    },
    setup() {
      return {
        BASIC_ITEMS
      };
    },
    template: \`
      <div style="padding: 2rem; max-width: 500px;">
        <BTimeline data-testid="a11y" :items="BASIC_ITEMS" pending="In progress" />
      </div>
    \`
  }),
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const el = canvas.getByTestId('a11y');

    // Semantic list
    expect(el.tagName).toBe('OL');
    expect(el.getAttribute('aria-label')).toBe('Timeline');

    // All items are <li>
    el.querySelectorAll('.b-timeline-item').forEach(item => {
      expect(item.tagName).toBe('LI');
    });

    // Decorative elements are aria-hidden
    el.querySelectorAll('.b-timeline-item__dot-wrapper').forEach(el => {
      expect(el.getAttribute('aria-hidden')).toBe('true');
    });
    el.querySelectorAll('.b-timeline-item__tail').forEach(el => {
      expect(el.getAttribute('aria-hidden')).toBe('true');
    });

    // Pending item
    const pendingItem = el.querySelector('.b-timeline-item--pending');
    expect(pendingItem).not.toBeNull();
    expect(pendingItem!.getAttribute('aria-label')).toBe('Pending');
  }
}`,...b.parameters?.docs?.source},description:{story:`Verifies semantic roles, ARIA attributes, and list structure.`,...b.parameters?.docs?.description}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  name: 'Design Tokens',
  parameters: {
    controls: {
      disable: true
    },
    docs: {
      description: {
        story: 'All <code>--b-timeline-*</code> CSS custom properties with a live ' + 'side-by-side preview. The left column shows the default value; ' + 'the right column shows the token overridden.'
      }
    }
  },
  render: () => ({
    components: {
      BTimeline
    },
    setup() {
      const items2 = [{
        content: 'First event',
        color: 'blue'
      }, {
        content: 'Second event',
        color: 'blue'
      }];
      const items3 = [{
        content: 'First event',
        color: 'blue'
      }, {
        content: 'Second event',
        color: 'blue'
      }, {
        content: 'Third event',
        color: 'blue'
      }];
      return {
        items2,
        items3
      };
    },
    template: \`
<div style="font-family:sans-serif;padding:2rem;display:flex;flex-direction:column;gap:2.5rem;max-width:900px;">

  <!-- ── tailWidth / --b-timeline-line-width ── -->
  <div>
    <p style="margin:0 0 4px;font-size:13px;font-weight:600;">--b-timeline-line-width</p>
    <p style="margin:0 0 12px;font-size:12px;color:#595959;">Ant Design: <code>tailWidth</code> - width of the connecting line. Default: <code>2px</code></p>
    <div style="display:flex;gap:3rem;align-items:flex-start;">
      <div style="flex:1;">
        <p style="margin:0 0 6px;font-size:12px;color:#595959;text-transform:uppercase;letter-spacing:.05em;">Default (2px)</p>
        <BTimeline :items="items3" />
      </div>
      <div style="flex:1;">
        <p style="margin:0 0 6px;font-size:12px;color:#595959;text-transform:uppercase;letter-spacing:.05em;">Overridden (5px)</p>
        <BTimeline :items="items3" style="--b-timeline-line-width:5px;" />
      </div>
    </div>
  </div>

  <!-- ── tailColor / --b-timeline-line-color ── -->
  <div>
    <p style="margin:0 0 4px;font-size:13px;font-weight:600;">--b-timeline-line-color</p>
    <p style="margin:0 0 12px;font-size:12px;color:#595959;">Ant Design: <code>tailColor</code> - color of the connecting line. Default: light gray</p>
    <div style="display:flex;gap:3rem;align-items:flex-start;">
      <div style="flex:1;">
        <p style="margin:0 0 6px;font-size:12px;color:#595959;text-transform:uppercase;letter-spacing:.05em;">Default</p>
        <BTimeline :items="items3" />
      </div>
      <div style="flex:1;">
        <p style="margin:0 0 6px;font-size:12px;color:#595959;text-transform:uppercase;letter-spacing:.05em;">Overridden (blue tint)</p>
        <BTimeline :items="items3" style="--b-timeline-line-color:oklch(75% 0.12 262);" />
      </div>
    </div>
  </div>

  <!-- ── dotSize / --b-timeline-dot-size ── -->
  <div>
    <p style="margin:0 0 4px;font-size:13px;font-weight:600;">--b-timeline-dot-size</p>
    <p style="margin:0 0 12px;font-size:12px;color:#595959;">Ant Design: <code>dotSize</code> - diameter of the dot circle. Default: <code>10px</code></p>
    <div style="display:flex;gap:3rem;align-items:flex-start;">
      <div style="flex:1;">
        <p style="margin:0 0 6px;font-size:12px;color:#595959;text-transform:uppercase;letter-spacing:.05em;">Default (10px)</p>
        <BTimeline :items="items3" />
      </div>
      <div style="flex:1;">
        <p style="margin:0 0 6px;font-size:12px;color:#595959;text-transform:uppercase;letter-spacing:.05em;">Overridden (18px)</p>
        <BTimeline :items="items3" style="--b-timeline-dot-size:18px;" />
      </div>
    </div>
  </div>

  <!-- ── dotBorderWidth / --b-timeline-dot-border-width ── -->
  <div>
    <p style="margin:0 0 4px;font-size:13px;font-weight:600;">--b-timeline-dot-border-width</p>
    <p style="margin:0 0 12px;font-size:12px;color:#595959;">Ant Design: <code>dotBorderWidth</code> - border thickness used in <code>outlined</code> variant. Default: <code>2px</code></p>
    <div style="display:flex;gap:3rem;align-items:flex-start;">
      <div style="flex:1;">
        <p style="margin:0 0 6px;font-size:12px;color:#595959;text-transform:uppercase;letter-spacing:.05em;">Default (2px)</p>
        <BTimeline variant="outlined" :items="items3" />
      </div>
      <div style="flex:1;">
        <p style="margin:0 0 6px;font-size:12px;color:#595959;text-transform:uppercase;letter-spacing:.05em;">Overridden (4px)</p>
        <BTimeline variant="outlined" :items="items3" style="--b-timeline-dot-border-width:4px;" />
      </div>
    </div>
  </div>

  <!-- ── itemPaddingBottom / --b-timeline-item-padding-bottom ── -->
  <div>
    <p style="margin:0 0 4px;font-size:13px;font-weight:600;">--b-timeline-item-padding-bottom</p>
    <p style="margin:0 0 12px;font-size:12px;color:#595959;">Ant Design: <code>itemPaddingBottom</code> - vertical gap between items. Default: <code>20px</code></p>
    <div style="display:flex;gap:3rem;align-items:flex-start;">
      <div style="flex:1;">
        <p style="margin:0 0 6px;font-size:12px;color:#595959;text-transform:uppercase;letter-spacing:.05em;">Default (20px)</p>
        <BTimeline :items="items3" />
      </div>
      <div style="flex:1;">
        <p style="margin:0 0 6px;font-size:12px;color:#595959;text-transform:uppercase;letter-spacing:.05em;">Overridden (48px)</p>
        <BTimeline :items="items3" style="--b-timeline-item-padding-bottom:48px;" />
      </div>
    </div>
  </div>

  <!-- ── Preset dot colors ── -->
  <div>
    <p style="margin:0 0 4px;font-size:13px;font-weight:600;">--b-timeline-color-{blue|green|red|gray}</p>
    <p style="margin:0 0 12px;font-size:12px;color:#595959;">Preset dot colors. Override to retheme each preset without changing item <code>color</code> props.</p>
    <div style="display:flex;gap:3rem;align-items:flex-start;">
      <div style="flex:1;">
        <p style="margin:0 0 6px;font-size:12px;color:#595959;text-transform:uppercase;letter-spacing:.05em;">Default</p>
        <BTimeline :items="[
          { content: 'Blue', color: 'blue' },
          { content: 'Green', color: 'green' },
          { content: 'Red', color: 'red' },
          { content: 'Gray', color: 'gray' },
        ]" />
      </div>
      <div style="flex:1;">
        <p style="margin:0 0 6px;font-size:12px;color:#595959;text-transform:uppercase;letter-spacing:.05em;">Overridden (purple theme)</p>
        <BTimeline :items="[
          { content: 'Blue → purple', color: 'blue' },
          { content: 'Green → teal', color: 'green' },
          { content: 'Red → orange', color: 'red' },
          { content: 'Gray → slate', color: 'gray' },
        ]" style="
          --b-timeline-color-blue: oklch(55% 0.22 310);
          --b-timeline-color-green: oklch(55% 0.15 195);
          --b-timeline-color-red: oklch(60% 0.18 55);
          --b-timeline-color-gray: oklch(50% 0.04 240);
        " />
      </div>
    </div>
  </div>

  <!-- ── Label typography ── -->
  <div>
    <p style="margin:0 0 4px;font-size:13px;font-weight:600;">--b-timeline-label-color / --b-timeline-label-font-size</p>
    <p style="margin:0 0 12px;font-size:12px;color:#595959;">Color and size of the label text shown on the opposing side (alternate mode).</p>
    <div style="display:flex;gap:3rem;align-items:flex-start;">
      <div style="flex:1;">
        <p style="margin:0 0 6px;font-size:12px;color:#595959;text-transform:uppercase;letter-spacing:.05em;">Default</p>
        <BTimeline mode="alternate" :items="[
          { content: 'Deploy', title: '09:00', color: 'blue' },
          { content: 'Review', title: '11:30', color: 'green' },
          { content: 'Release', title: '15:00', color: 'red' },
        ]" />
      </div>
      <div style="flex:1;">
        <p style="margin:0 0 6px;font-size:12px;color:#595959;text-transform:uppercase;letter-spacing:.05em;">Overridden</p>
        <BTimeline mode="alternate" :items="[
          { content: 'Deploy', title: '09:00', color: 'blue' },
          { content: 'Review', title: '11:30', color: 'green' },
          { content: 'Release', title: '15:00', color: 'red' },
        ]" style="
          --b-timeline-label-color: oklch(54.6% 0.245 262.881);
          --b-timeline-label-font-size: 12px;
        " />
      </div>
    </div>
  </div>

  <!-- ── Content typography ── -->
  <div>
    <p style="margin:0 0 4px;font-size:13px;font-weight:600;">--b-timeline-content-color / --b-timeline-content-font-size</p>
    <p style="margin:0 0 12px;font-size:12px;color:#595959;">Color and size of the main content text.</p>
    <div style="display:flex;gap:3rem;align-items:flex-start;">
      <div style="flex:1;">
        <p style="margin:0 0 6px;font-size:12px;color:#595959;text-transform:uppercase;letter-spacing:.05em;">Default (14px)</p>
        <BTimeline :items="items2" />
      </div>
      <div style="flex:1;">
        <p style="margin:0 0 6px;font-size:12px;color:#595959;text-transform:uppercase;letter-spacing:.05em;">Overridden (16px, muted)</p>
        <BTimeline :items="items2" style="
          --b-timeline-content-font-size: 16px;
          --b-timeline-content-color: oklch(55% 0.02 260);
        " />
      </div>
    </div>
  </div>

  <!-- ── Spinner ── -->
  <div>
    <p style="margin:0 0 4px;font-size:13px;font-weight:600;">--b-timeline-spinner-size / --b-timeline-spinner-duration</p>
    <p style="margin:0 0 12px;font-size:12px;color:#595959;">Controls the pending spinner size and animation speed.</p>
    <div style="display:flex;gap:3rem;align-items:flex-start;">
      <div style="flex:1;">
        <p style="margin:0 0 6px;font-size:12px;color:#595959;text-transform:uppercase;letter-spacing:.05em;">Default (14px, 700ms)</p>
        <BTimeline :items="items2" :pending="true" />
      </div>
      <div style="flex:1;">
        <p style="margin:0 0 6px;font-size:12px;color:#595959;text-transform:uppercase;letter-spacing:.05em;">Overridden (20px, 300ms)</p>
        <BTimeline :items="items2" :pending="true" style="
          --b-timeline-spinner-size: 20px;
          --b-timeline-spinner-duration: 300ms;
          --b-timeline-spinner-accent-color: oklch(52% 0.17 145);
        " />
      </div>
    </div>
  </div>

  <!-- ── custom-dot font size ── -->
  <div>
    <p style="margin:0 0 4px;font-size:13px;font-weight:600;">--b-timeline-custom-dot-font-size</p>
    <p style="margin:0 0 12px;font-size:12px;color:#595959;">Font size of emoji / text custom dots. Default: <code>20px</code></p>
    <div style="display:flex;gap:3rem;align-items:flex-start;">
      <div style="flex:1;">
        <p style="margin:0 0 6px;font-size:12px;color:#595959;text-transform:uppercase;letter-spacing:.05em;">Default (20px)</p>
        <BTimeline :items="[
          { content: 'Checked in', icon: '✓', color: 'green' },
          { content: 'Star event', icon: '★', color: 'blue' },
        ]" />
      </div>
      <div style="flex:1;">
        <p style="margin:0 0 6px;font-size:12px;color:#595959;text-transform:uppercase;letter-spacing:.05em;">Overridden (28px)</p>
        <BTimeline :items="[
          { content: 'Checked in', icon: '✓', color: 'green' },
          { content: 'Star event', icon: '★', color: 'blue' },
        ]" style="--b-timeline-custom-dot-font-size:28px;" />
      </div>
    </div>
  </div>

</div>
    \`
  })
}`,...x.parameters?.docs?.source},description:{story:"Every `--b-timeline-*` CSS custom property with a live preview showing\nwhat each token controls. Override any of them inline or via a class.",...x.parameters?.docs?.description}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  name: 'Variant: Filled vs Outlined',
  parameters: {
    controls: {
      disable: true
    },
    docs: {
      source: {
        code: \`<!-- Filled (default) -->
<BTimeline variant="filled" :items="items" />

<!-- Outlined -->
<BTimeline variant="outlined" :items="items" />\`
      }
    }
  },
  render: () => ({
    components: {
      BTimeline
    },
    setup() {
      return {
        BASIC_ITEMS
      };
    },
    template: \`
      <div style="padding: 2rem; display: flex; gap: 3rem; flex-wrap: wrap;">
        <div>
          <p style="font-size:12px;color:#666;margin:0 0 12px;font-weight:600;">Filled (default)</p>
          <BTimeline data-testid="filled" variant="filled" :items="BASIC_ITEMS" style="max-width:280px;" />
        </div>
        <div>
          <p style="font-size:12px;color:#666;margin:0 0 12px;font-weight:600;">Outlined</p>
          <BTimeline data-testid="outlined" variant="outlined" :items="BASIC_ITEMS" style="max-width:280px;" />
        </div>
      </div>
    \`
  }),
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByTestId('filled').classList.contains('b-timeline--filled')).toBe(true);
    expect(canvas.getByTestId('outlined').classList.contains('b-timeline--outlined')).toBe(true);
  }
}`,...S.parameters?.docs?.source},description:{story:'`variant="filled"` (default) renders solid dots.\n`variant="outlined"` renders hollow ring dots.',...S.parameters?.docs?.description}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  name: 'Orientation: Horizontal',
  parameters: {
    controls: {
      disable: true
    },
    docs: {
      source: {
        code: \`<BTimeline orientation="horizontal" :items="items" />\`
      }
    }
  },
  render: () => ({
    components: {
      BTimeline
    },
    setup() {
      const steps: BTimelineItemData[] = [{
        content: 'Order placed',
        color: 'blue'
      }, {
        content: 'Processing',
        color: 'green'
      }, {
        content: 'Shipped',
        color: 'blue'
      }, {
        content: 'Delivered',
        color: 'gray'
      }];
      return {
        steps
      };
    },
    template: \`
      <div style="padding: 2rem;">
        <BTimeline data-testid="horizontal" orientation="horizontal" :items="steps" />
      </div>
    \`
  }),
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const el = canvas.getByTestId('horizontal');
    expect(el.classList.contains('b-timeline--horizontal')).toBe(true);
    expect(el.querySelectorAll('.b-timeline-item').length).toBe(4);
  }
}`,...C.parameters?.docs?.source},description:{story:'`orientation="horizontal"` lays items left-to-right with a horizontal connecting line.',...C.parameters?.docs?.description}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  name: 'Per-item Placement',
  parameters: {
    controls: {
      disable: true
    },
    docs: {
      source: {
        code: \`<BTimeline mode="start" :items="[
  { content: 'Default (start side)', color: 'blue' },
  { content: 'Pinned to end', color: 'green', placement: 'end' },
  { content: 'Default again', color: 'red' },
  { content: 'Also pinned to end', color: 'gray', placement: 'end' },
]" />\`
      }
    }
  },
  render: () => ({
    components: {
      BTimeline
    },
    setup() {
      const mixedItems: BTimelineItemData[] = [{
        content: 'Default (start side)',
        color: 'blue'
      }, {
        content: 'Pinned to end side',
        color: 'green',
        placement: 'end'
      }, {
        content: 'Default again',
        color: 'red'
      }, {
        content: 'Also pinned to end',
        color: 'gray',
        placement: 'end'
      }];
      return {
        mixedItems
      };
    },
    template: \`
      <div style="padding: 2rem; max-width: 600px;">
        <BTimeline data-testid="placement" mode="alternate" :items="mixedItems" />
      </div>
    \`
  }),
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const el = canvas.getByTestId('placement');
    const items = el.querySelectorAll('.b-timeline-item');
    // Items 1 and 3 are pinned to 'end' → right side
    expect(items[1].classList.contains('b-timeline-item--right')).toBe(true);
    expect(items[3].classList.contains('b-timeline-item--right')).toBe(true);
  }
}`,...w.parameters?.docs?.source},description:{story:"`item.placement` overrides the global mode for a single item,\npinning it to `'start'` or `'end'` regardless of the timeline mode.",...w.parameters?.docs?.description}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  name: 'Interaction – full flow',
  parameters: {
    controls: {
      disable: true
    },
    docs: {
      description: {
        story: 'Automated play function verifying item rendering, color classes, pending state, and label rendering.'
      }
    }
  },
  render: () => ({
    components: {
      BTimeline
    },
    setup() {
      const items: BTimelineItemData[] = [{
        content: 'Alpha event',
        color: 'blue',
        title: 'T+0'
      }, {
        content: 'Beta event',
        color: 'green',
        title: 'T+1'
      }, {
        content: 'Gamma event',
        color: 'red',
        icon: '★',
        title: 'T+2'
      }, {
        content: 'Delta event',
        color: 'gray',
        title: 'T+3'
      }];
      const reverse = ref(false);
      return {
        items,
        reverse
      };
    },
    template: \`
      <div style="padding: 2rem; max-width: 640px;">
        <div style="margin-bottom:1rem;">
          <button data-testid="toggle-reverse" @click="reverse = !reverse">Toggle reverse</button>
        </div>
        <BTimeline data-testid="int" :items="items" mode="alternate" :reverse="reverse" />
      </div>
    \`
  }),
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const el = canvas.getByTestId('int');

    // ── Initial render ──────────────────────────────
    expect(el.classList.contains('b-timeline--alternate')).toBe(true);
    const items = el.querySelectorAll('.b-timeline-item');
    expect(items.length).toBe(4);

    // Colors
    expect(items[0].classList.contains('b-timeline-item--blue')).toBe(true);
    expect(items[1].classList.contains('b-timeline-item--green')).toBe(true);
    expect(items[2].classList.contains('b-timeline-item--red')).toBe(true);
    expect(items[3].classList.contains('b-timeline-item--gray')).toBe(true);

    // Alternate positioning
    expect(items[0].classList.contains('b-timeline-item--left')).toBe(true);
    expect(items[1].classList.contains('b-timeline-item--right')).toBe(true);

    // Custom dot on item 2
    const customDot = items[2].querySelector('.b-timeline-item__dot--custom') as HTMLElement | null;
    expect(customDot?.dataset.icon).toBe('★');

    // Labels visible in alternate mode
    const labels = el.querySelectorAll('.b-timeline-item__label');
    expect(labels.length).toBe(4);
    expect(labels[0].textContent?.trim()).toBe('T+0');

    // ── Toggle reverse ──────────────────────────────
    const toggleBtn = canvas.getByTestId('toggle-reverse');
    await toggleBtn.click();
    await new Promise(r => setTimeout(r, 50));
    const reversedItems = el.querySelectorAll('.b-timeline-item');
    // After reverse, last item content should be Alpha
    expect(reversedItems[3].querySelector('.b-timeline-item__content')?.textContent?.trim()).toBe('Alpha event');
  }
}`,...T.parameters?.docs?.source},description:{story:`Automated play function covering key interactions.`,...T.parameters?.docs?.description}}},E=[`Playground`,`Basic`,`DotColors`,`ModeAlternate`,`ModeRight`,`Pending`,`CustomDot`,`WithLabels`,`Reverse`,`SlotBased`,`Accessibility`,`Theming`,`Variant`,`Horizontal`,`PerItemPlacement`,`InteractionTests`]}))();export{b as Accessibility,d as Basic,g as CustomDot,f as DotColors,C as Horizontal,T as InteractionTests,p as ModeAlternate,m as ModeRight,h as Pending,w as PerItemPlacement,u as Playground,v as Reverse,y as SlotBased,x as Theming,S as Variant,_ as WithLabels,E as __namedExportsOrder,c as default};