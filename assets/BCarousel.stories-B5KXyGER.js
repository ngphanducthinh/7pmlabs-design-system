import{n as e}from"./chunk-BneVvdWh.js";import{X as t,i as n}from"./iframe-By7LT0M0.js";import{_t as r,t as i}from"./components-DGiLIoKr.js";function a(e,t=`Slide ${e+1}`){return`
    <div style="
      ${d[e%d.length]}
      height: 220px;
      display: flex;
      align-items: center;
      justify-content: center;
      color: white;
      font: 600 32px sans-serif;
      letter-spacing: 0.05em;
    ">${t}</div>`}var o,s,c,l,u,d,f,p,m,h,g,_,v,y,b,x,S,C,w,T,E,D;e((()=>{i(),n(),{expect:o,fn:s,userEvent:c,within:l}=__STORYBOOK_MODULE_TEST__,u={title:`Data Display/Carousel`,component:r,tags:[`autodocs`],argTypes:{modelValue:{control:{type:`number`,min:0},description:`Active slide index (controlled).`,table:{category:`Two-Way Binding Props`}},defaultActiveIndex:{control:{type:`number`,min:0},description:`Initial active slide index for uncontrolled usage.`,table:{defaultValue:{summary:`0`},category:`Props`}},arrows:{control:`boolean`,description:`Show prev/next navigation arrows.`,table:{defaultValue:{summary:`false`},category:`Props`}},autoplay:{control:`boolean`,description:"Auto-advance to the next slide. Pass `{ dotDuration: true }` to display a progress bar inside the active dot.",table:{defaultValue:{summary:`false`},category:`Props`}},autoplaySpeed:{control:{type:`number`,min:100,step:100},description:`Milliseconds between automatic transitions.`,table:{defaultValue:{summary:`3000`},category:`Props`}},speed:{control:{type:`number`,min:0,step:50},description:`Slide transition duration in milliseconds.`,table:{defaultValue:{summary:`500`},category:`Props`}},easing:{control:`text`,description:`CSS easing function used for transitions.`,table:{defaultValue:{summary:`linear`},category:`Props`}},effect:{control:`select`,options:[`scrollx`,`fade`],description:`Transition effect.`,table:{defaultValue:{summary:`scrollx`},category:`Props`}},fade:{control:`boolean`,description:'Shorthand for `effect="fade"`.',table:{defaultValue:{summary:`false`},category:`Props`}},dots:{control:`boolean`,description:`Render the dot indicators.`,table:{defaultValue:{summary:`true`},category:`Props`}},dotPlacement:{control:`select`,options:[`top`,`bottom`,`start`,`end`],description:`Position of the dots indicator.`,table:{defaultValue:{summary:`bottom`},category:`Props`}},dotsClassName:{control:`text`,description:`Optional CSS class added to the dots list.`,table:{category:`Props`}},draggable:{control:`boolean`,description:`Allow dragging slides with a pointer.`,table:{defaultValue:{summary:`false`},category:`Props`}},infinite:{control:`boolean`,description:`Wrap navigation at the edges.`,table:{defaultValue:{summary:`true`},category:`Props`}},adaptiveHeight:{control:`boolean`,description:`Track the active slide's intrinsic height.`,table:{defaultValue:{summary:`false`},category:`Props`}},waitForAnimate:{control:`boolean`,description:`Ignore navigation requests during in-flight transitions.`,table:{defaultValue:{summary:`false`},category:`Props`}},pauseOnHover:{control:`boolean`,description:`Pause autoplay while the pointer hovers the carousel.`,table:{defaultValue:{summary:`true`},category:`Props`}},ariaLabel:{control:`text`,description:`Accessible label for the root region.`,table:{defaultValue:{summary:`Carousel`},category:`Props`}}},parameters:{docs:{description:{component:`The <code>BCarousel</code> component cycles through a series of slides. Supports horizontal scroll and fade <strong>effects</strong>, configurable <strong>dots</strong> placement, <strong>arrows</strong>, <strong>autoplay</strong>, pointer <strong>dragging</strong>, and infinite/clamped looping. Theming via <code>--b-carousel-*</code> CSS custom properties. Respects <code>prefers-reduced-motion</code> and dark mode.`}}}},d=[`background: oklch(40% 0.2 265);`,`background: oklch(40% 0.18 160);`,`background: oklch(40% 0.2 25);`,`background: oklch(35% 0.05 260);`],f={args:{arrows:!1,autoplay:!1,autoplaySpeed:3e3,speed:500,dots:!0,dotPlacement:`bottom`,draggable:!1,fade:!1,infinite:!0,pauseOnHover:!0,waitForAnimate:!1},render:e=>({components:{BCarousel:r},setup(){return{args:e}},template:`
      <div style="max-width: 600px; margin: 2rem auto;">
        <BCarousel v-bind="args">
          <div v-html='${JSON.stringify(a(0))}'></div>
          <div v-html='${JSON.stringify(a(1))}'></div>
          <div v-html='${JSON.stringify(a(2))}'></div>
          <div v-html='${JSON.stringify(a(3))}'></div>
        </BCarousel>
      </div>
    `})},p={parameters:{controls:{disable:!0},docs:{source:{code:`<BCarousel>
  <div>Slide 1</div>
  <div>Slide 2</div>
  <div>Slide 3</div>
</BCarousel>`}}},render:()=>({components:{BCarousel:r},template:`
      <div style="max-width: 600px; margin: 2rem auto;">
        <BCarousel data-testid="basic">
          <div v-html='${JSON.stringify(a(0))}'></div>
          <div v-html='${JSON.stringify(a(1))}'></div>
          <div v-html='${JSON.stringify(a(2))}'></div>
        </BCarousel>
      </div>
    `}),play:async({canvasElement:e})=>{let t=l(e).getByTestId(`basic`);o(t.classList.contains(`b-carousel`)).toBe(!0),o(t.getAttribute(`role`)).toBe(`region`);let n=t.querySelectorAll(`.b-carousel__slide`);o(n.length).toBe(3),o(n[0].classList.contains(`b-carousel__slide--active`)).toBe(!0)}},m={name:`With Arrows`,parameters:{controls:{disable:!0},docs:{source:{code:`<BCarousel arrows>...</BCarousel>`}}},render:()=>({components:{BCarousel:r},template:`
      <div style="max-width: 600px; margin: 2rem auto;">
        <BCarousel data-testid="arrows" arrows>
          <div v-html='${JSON.stringify(a(0))}'></div>
          <div v-html='${JSON.stringify(a(1))}'></div>
          <div v-html='${JSON.stringify(a(2))}'></div>
        </BCarousel>
      </div>
    `}),play:async({canvasElement:e})=>{let t=l(e).getByTestId(`arrows`),n=t.querySelector(`.b-carousel__arrow--next`);o(n).toBeTruthy(),o(n.getAttribute(`aria-label`)).toBe(`Next slide`),await c.click(n),o(t.querySelectorAll(`.b-carousel__slide`)[1].classList.contains(`b-carousel__slide--active`)).toBe(!0)}},h={name:`Effect: Fade`,parameters:{controls:{disable:!0},docs:{source:{code:`<BCarousel fade>...</BCarousel>`}}},render:()=>({components:{BCarousel:r},template:`
      <div style="max-width: 600px; margin: 2rem auto;">
        <BCarousel data-testid="fade" fade arrows>
          <div v-html='${JSON.stringify(a(0,`Fade A`))}'></div>
          <div v-html='${JSON.stringify(a(1,`Fade B`))}'></div>
          <div v-html='${JSON.stringify(a(2,`Fade C`))}'></div>
        </BCarousel>
      </div>
    `}),play:async({canvasElement:e})=>{o(l(e).getByTestId(`fade`).classList.contains(`b-carousel--effect-fade`)).toBe(!0)}},g={parameters:{controls:{disable:!0},docs:{source:{code:`<BCarousel autoplay :autoplay-speed="2000">...</BCarousel>`}}},render:()=>({components:{BCarousel:r},template:`
      <div style="max-width: 600px; margin: 2rem auto;">
        <BCarousel data-testid="autoplay" autoplay :autoplay-speed="2000">
          <div v-html='${JSON.stringify(a(0))}'></div>
          <div v-html='${JSON.stringify(a(1))}'></div>
          <div v-html='${JSON.stringify(a(2))}'></div>
        </BCarousel>
      </div>
    `})},_={name:`Autoplay (Dot Progress)`,parameters:{controls:{disable:!0},docs:{source:{code:`<BCarousel :autoplay="{ dotDuration: true }" :autoplay-speed="2500">...</BCarousel>`}}},render:()=>({components:{BCarousel:r},template:`
      <div style="max-width: 600px; margin: 2rem auto;">
        <BCarousel
          data-testid="autoplay-progress"
          :autoplay="{ dotDuration: true }"
          :autoplay-speed="2500"
        >
          <div v-html='${JSON.stringify(a(0))}'></div>
          <div v-html='${JSON.stringify(a(1))}'></div>
          <div v-html='${JSON.stringify(a(2))}'></div>
        </BCarousel>
      </div>
    `}),play:async({canvasElement:e})=>{o(l(e).getByTestId(`autoplay-progress`).querySelector(`.b-carousel__dot--active`)?.classList.contains(`b-carousel__dot--progress`)).toBe(!0)}},v={name:`Dot Placement`,parameters:{controls:{disable:!0},docs:{source:{code:`<BCarousel dot-placement="top|bottom|start|end">...</BCarousel>`}}},render:()=>({components:{BCarousel:r},template:`
      <div style="display:grid;grid-template-columns:1fr 1fr;gap:2rem;padding:2rem;">
        <div>
          <p style="font:600 12px sans-serif;color:#666;margin:0 0 8px;">Top</p>
          <BCarousel dot-placement="top" aria-label="Carousel with dots on top">
            <div v-html='${JSON.stringify(a(0))}'></div>
            <div v-html='${JSON.stringify(a(1))}'></div>
          </BCarousel>
        </div>
        <div>
          <p style="font:600 12px sans-serif;color:#666;margin:0 0 8px;">Bottom (default)</p>
          <BCarousel dot-placement="bottom" aria-label="Carousel with dots on bottom">
            <div v-html='${JSON.stringify(a(0))}'></div>
            <div v-html='${JSON.stringify(a(1))}'></div>
          </BCarousel>
        </div>
        <div>
          <p style="font:600 12px sans-serif;color:#666;margin:0 0 8px;">Start</p>
          <BCarousel dot-placement="start" aria-label="Carousel with dots at start">
            <div v-html='${JSON.stringify(a(0))}'></div>
            <div v-html='${JSON.stringify(a(1))}'></div>
          </BCarousel>
        </div>
        <div>
          <p style="font:600 12px sans-serif;color:#666;margin:0 0 8px;">End</p>
          <BCarousel dot-placement="end" aria-label="Carousel with dots at end">
            <div v-html='${JSON.stringify(a(0))}'></div>
            <div v-html='${JSON.stringify(a(1))}'></div>
          </BCarousel>
        </div>
      </div>
    `})},y={parameters:{controls:{disable:!0},docs:{source:{code:`<BCarousel draggable arrows>...</BCarousel>`}}},render:()=>({components:{BCarousel:r},template:`
      <div style="max-width: 600px; margin: 2rem auto;">
        <p style="font:13px sans-serif;color:#666;margin:0 0 12px;">
          Click and drag the slide horizontally.
        </p>
        <BCarousel data-testid="draggable" draggable arrows>
          <div v-html='${JSON.stringify(a(0))}'></div>
          <div v-html='${JSON.stringify(a(1))}'></div>
          <div v-html='${JSON.stringify(a(2))}'></div>
        </BCarousel>
      </div>
    `}),play:async({canvasElement:e})=>{o(l(e).getByTestId(`draggable`).classList.contains(`b-carousel--draggable`)).toBe(!0)}},b={name:`Controlled (v-model)`,parameters:{controls:{disable:!0},docs:{source:{code:`<BCarousel v-model="active">...</BCarousel>`}}},render:()=>({components:{BCarousel:r},setup(){return{active:t(0)}},template:`
      <div style="max-width: 600px; margin: 2rem auto;">
        <div style="display:flex;gap:.5rem;margin:0 0 12px;">
          <button data-testid="ctrl-0" @click="active = 0">1</button>
          <button data-testid="ctrl-1" @click="active = 1">2</button>
          <button data-testid="ctrl-2" @click="active = 2">3</button>
          <span style="margin-left:auto;font:13px sans-serif;color:#666;">
            Active: <code data-testid="ctrl-active">{{ active }}</code>
          </span>
        </div>
        <BCarousel data-testid="controlled" v-model="active">
          <div v-html='${JSON.stringify(a(0))}'></div>
          <div v-html='${JSON.stringify(a(1))}'></div>
          <div v-html='${JSON.stringify(a(2))}'></div>
        </BCarousel>
      </div>
    `}),play:async({canvasElement:e})=>{let t=l(e);await c.click(t.getByTestId(`ctrl-2`)),o(t.getByTestId(`ctrl-active`).textContent).toBe(`2`),o(t.getByTestId(`controlled`).querySelectorAll(`.b-carousel__slide`)[2].classList.contains(`b-carousel__slide--active`)).toBe(!0)}},x={name:`Custom Dot`,parameters:{controls:{disable:!0},docs:{source:{code:`<BCarousel>
  <template #dot="{ index, active }">
    <span :class="active ? 'on' : 'off'">{{ index + 1 }}</span>
  </template>
</BCarousel>`}}},render:()=>({components:{BCarousel:r},template:`
      <div style="max-width: 600px; margin: 2rem auto;">
        <BCarousel data-testid="custom-dot">
          <div v-html='${JSON.stringify(a(0))}'></div>
          <div v-html='${JSON.stringify(a(1))}'></div>
          <div v-html='${JSON.stringify(a(2))}'></div>
          <template #dot="{ index, active }">
            <span aria-hidden="true" style="
              display:inline-flex;align-items:center;justify-content:center;
              width:24px;height:24px;border-radius:50%;font:600 11px sans-serif;
            " :style="active
              ? 'background:white;color:black'
              : 'background:rgba(255,255,255,.3);color:white'">{{ index + 1 }}</span>
          </template>
        </BCarousel>
      </div>
    `}),play:async({canvasElement:e})=>{let t=l(e).getByTestId(`custom-dot`).querySelectorAll(`.b-carousel__dot span`);o(t.length).toBe(3),o(t[0].textContent).toBe(`1`)}},S={name:`Accessibility (roles, ARIA, keyboard)`,parameters:{controls:{disable:!0},docs:{description:{story:`Verifies <code>role="region"</code>, <code>aria-roledescription="carousel"</code>, <code>role="group"</code> on slides, <code>role="tablist"/"tab"</code> on dots, a polite live region announcing the active slide, and arrow-key navigation.`}}},render:()=>({components:{BCarousel:r},template:`
      <div style="max-width: 600px; margin: 2rem auto;">
        <BCarousel data-testid="a11y" arrows>
          <div v-html='${JSON.stringify(a(0))}'></div>
          <div v-html='${JSON.stringify(a(1))}'></div>
          <div v-html='${JSON.stringify(a(2))}'></div>
        </BCarousel>
      </div>
    `}),play:async({canvasElement:e})=>{let t=l(e).getByTestId(`a11y`);o(t.getAttribute(`role`)).toBe(`region`),o(t.getAttribute(`aria-roledescription`)).toBe(`carousel`);let n=t.querySelectorAll(`.b-carousel__slide`);n.forEach(e=>{o(e.getAttribute(`role`)).toBe(`group`),o(e.getAttribute(`aria-roledescription`)).toBe(`slide`)}),o(n[0].getAttribute(`aria-hidden`)).toBeNull(),o(n[1].getAttribute(`aria-hidden`)).toBe(`true`),o(t.querySelector(`.b-carousel__dots`).getAttribute(`role`)).toBe(`tablist`);let r=t.querySelectorAll(`.b-carousel__dot`);o(r[0].getAttribute(`aria-selected`)).toBe(`true`),o(r[0].getAttribute(`tabindex`)).toBe(`0`),o(r[1].getAttribute(`tabindex`)).toBe(`-1`);let i=t.querySelector(`.b-carousel__sr-only`);o(i.getAttribute(`aria-live`)).toBe(`polite`),o(i.textContent?.trim()).toBe(`Slide 1 of 3`),r[0].focus(),await c.keyboard(`{ArrowRight}`),o(t.querySelectorAll(`.b-carousel__dot`)[1].getAttribute(`aria-selected`)).toBe(`true`),o(t.querySelector(`.b-carousel__arrow--prev`).getAttribute(`aria-label`)).toBe(`Previous slide`)}},C={name:`Interaction - full flow`,parameters:{controls:{disable:!0},docs:{description:{story:`Drives click navigation, dot click, and emits assertions on beforeChange / update:modelValue / afterChange.`}}},args:{"onUpdate:modelValue":s(),onBeforeChange:s(),onAfterChange:s()},render:e=>({components:{BCarousel:r},setup(){return{args:e}},template:`
      <div style="max-width: 600px; margin: 2rem auto;">
        <BCarousel data-testid="ix" v-bind="args" arrows :speed="100">
          <div v-html='${JSON.stringify(a(0))}'></div>
          <div v-html='${JSON.stringify(a(1))}'></div>
          <div v-html='${JSON.stringify(a(2))}'></div>
        </BCarousel>
      </div>
    `}),play:async({canvasElement:e,args:t})=>{let n=l(e).getByTestId(`ix`),r=n.querySelectorAll(`.b-carousel__slide`);o(r[0].classList.contains(`b-carousel__slide--active`)).toBe(!0);let i=n.querySelector(`.b-carousel__arrow--next`);await c.click(i),o(t[`onUpdate:modelValue`]).toHaveBeenCalledWith(1),o(t.onBeforeChange).toHaveBeenCalledWith(0,1);let a=n.querySelectorAll(`.b-carousel__dot`)[2];await c.click(a),r=n.querySelectorAll(`.b-carousel__slide`),o(r[2].classList.contains(`b-carousel__slide--active`)).toBe(!0)}},w={name:`Theming (CSS variables)`,parameters:{controls:{disable:!0},docs:{description:{story:`Override CSS custom properties to retheme the carousel. Below example overrides arrow size, dot active width, and dot offset.`}}},render:()=>({components:{BCarousel:r},template:`
      <div style="max-width: 600px; margin: 2rem auto;">
        <BCarousel
          data-testid="theming"
          arrows
          style="
            --b-carousel-arrow-size: 24px;
            --b-carousel-dot-active-width: 40px;
            --b-carousel-dot-height: 5px;
            --b-carousel-dot-offset: 20px;
            --b-carousel-arrow-bg: oklch(50% 0.22 295 / 80%);
          "
        >
          <div v-html='${JSON.stringify(a(0,`Themed`))}'></div>
          <div v-html='${JSON.stringify(a(1,`Themed`))}'></div>
          <div v-html='${JSON.stringify(a(2,`Themed`))}'></div>
        </BCarousel>
      </div>
    `}),play:async({canvasElement:e})=>{let t=l(e).getByTestId(`theming`);o(t.style.getPropertyValue(`--b-carousel-arrow-size`)).toBe(`24px`),o(t.style.getPropertyValue(`--b-carousel-dot-active-width`)).toBe(`40px`)}},T=[{token:`--b-carousel-arrow-offset`,defaultValue:`8px`,description:`Arrow offset to the carousel's edge (AntD: arrowOffset).`},{token:`--b-carousel-arrow-size`,defaultValue:`16px`,description:`Size of the arrow icon (AntD: arrowSize).`},{token:`--b-carousel-dot-active-width`,defaultValue:`24px`,description:`Width of the active dot (AntD: dotActiveWidth).`},{token:`--b-carousel-dot-gap`,defaultValue:`4px`,description:`Gap between dot indicators (AntD: dotGap).`},{token:`--b-carousel-dot-height`,defaultValue:`3px`,description:`Height of the dot indicator (AntD: dotHeight).`},{token:`--b-carousel-dot-offset`,defaultValue:`12px`,description:`Dots offset to the carousel's edge (AntD: dotOffset).`},{token:`--b-carousel-dot-width`,defaultValue:`16px`,description:`Width of an inactive dot (AntD: dotWidth).`},{token:`--b-carousel-arrow-color`,defaultValue:`oklch(100% 0 0)`,description:`Color of the arrow icon.`},{token:`--b-carousel-arrow-bg`,defaultValue:`oklch(20% 0.005 260 / 45%)`,description:`Arrow button background.`},{token:`--b-carousel-arrow-bg-hover`,defaultValue:`oklch(20% 0.005 260 / 70%)`,description:`Arrow button background on hover.`},{token:`--b-carousel-arrow-disabled-opacity`,defaultValue:`0.3`,description:`Opacity applied to disabled arrow buttons.`},{token:`--b-carousel-dot-color`,defaultValue:`oklch(100% 0 0 / 60%)`,description:`Color of inactive dots.`},{token:`--b-carousel-dot-active-color`,defaultValue:`oklch(100% 0 0)`,description:`Color of the active dot.`},{token:`--b-carousel-bg`,defaultValue:`oklch(20% 0.005 260)`,description:`Background of the viewport.`},{token:`--b-carousel-radius`,defaultValue:`4px`,description:`Border-radius of the viewport.`},{token:`--b-carousel-focus-ring`,defaultValue:`0 0 0 2px oklch(54.6% 0.245 262.881 / 50%)`,description:`Focus ring used on arrows and dots.`},{token:`--b-carousel-speed`,defaultValue:`500ms`,description:"Slide transition duration. Driven by the `speed` prop."},{token:`--b-carousel-easing`,defaultValue:`linear`,description:"CSS easing function. Driven by the `easing` prop."},{token:`--b-carousel-autoplay-duration`,defaultValue:`3000ms`,description:"Used by the dot progress animation. Driven by `autoplaySpeed`."}],E={name:`Design Tokens`,parameters:{controls:{disable:!0},docs:{description:{story:`Reference table of every <code>--b-carousel-*</code> CSS custom property that consumers can override to retheme the component.`}}},render:()=>({components:{BCarousel:r},setup(){return{tokens:T}},template:`
      <div style="font-family:sans-serif;padding:2rem;max-width:1000px;margin:0 auto;">
        <h2 style="margin:0 0 8px;">BCarousel - Design Tokens</h2>
        <p style="margin:0 0 24px;color:#595959;">
          All tokens scoped to <code>.b-carousel</code>. Override inline or via a CSS class.
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
          Three tokens overridden inline (arrow color, dot active color, dot active width).
        </p>
        <BCarousel
          arrows
          style="
            --b-carousel-arrow-bg: oklch(55% 0.22 145 / 80%);
            --b-carousel-dot-active-color: oklch(70% 0.22 145);
            --b-carousel-dot-active-width: 36px;
          "
        >
          <div v-html='${JSON.stringify(a(0,`Token A`))}'></div>
          <div v-html='${JSON.stringify(a(1,`Token B`))}'></div>
          <div v-html='${JSON.stringify(a(2,`Token C`))}'></div>
        </BCarousel>
      </div>
    `})},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    arrows: false,
    autoplay: false,
    autoplaySpeed: 3000,
    speed: 500,
    dots: true,
    dotPlacement: 'bottom',
    draggable: false,
    fade: false,
    infinite: true,
    pauseOnHover: true,
    waitForAnimate: false
  },
  render: args => ({
    components: {
      BCarousel
    },
    setup() {
      return {
        args
      };
    },
    template: \`
      <div style="max-width: 600px; margin: 2rem auto;">
        <BCarousel v-bind="args">
          <div v-html='\${JSON.stringify(slide(0))}'></div>
          <div v-html='\${JSON.stringify(slide(1))}'></div>
          <div v-html='\${JSON.stringify(slide(2))}'></div>
          <div v-html='\${JSON.stringify(slide(3))}'></div>
        </BCarousel>
      </div>
    \`
  })
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: true
    },
    docs: {
      source: {
        code: \`<BCarousel>
  <div>Slide 1</div>
  <div>Slide 2</div>
  <div>Slide 3</div>
</BCarousel>\`
      }
    }
  },
  render: () => ({
    components: {
      BCarousel
    },
    template: \`
      <div style="max-width: 600px; margin: 2rem auto;">
        <BCarousel data-testid="basic">
          <div v-html='\${JSON.stringify(slide(0))}'></div>
          <div v-html='\${JSON.stringify(slide(1))}'></div>
          <div v-html='\${JSON.stringify(slide(2))}'></div>
        </BCarousel>
      </div>
    \`
  }),
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const root = canvas.getByTestId('basic');
    expect(root.classList.contains('b-carousel')).toBe(true);
    expect(root.getAttribute('role')).toBe('region');
    const slides = root.querySelectorAll('.b-carousel__slide');
    expect(slides.length).toBe(3);
    expect(slides[0].classList.contains('b-carousel__slide--active')).toBe(true);
  }
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  name: 'With Arrows',
  parameters: {
    controls: {
      disable: true
    },
    docs: {
      source: {
        code: \`<BCarousel arrows>...</BCarousel>\`
      }
    }
  },
  render: () => ({
    components: {
      BCarousel
    },
    template: \`
      <div style="max-width: 600px; margin: 2rem auto;">
        <BCarousel data-testid="arrows" arrows>
          <div v-html='\${JSON.stringify(slide(0))}'></div>
          <div v-html='\${JSON.stringify(slide(1))}'></div>
          <div v-html='\${JSON.stringify(slide(2))}'></div>
        </BCarousel>
      </div>
    \`
  }),
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const root = canvas.getByTestId('arrows');
    const nextBtn = root.querySelector('.b-carousel__arrow--next') as HTMLElement;
    expect(nextBtn).toBeTruthy();
    expect(nextBtn.getAttribute('aria-label')).toBe('Next slide');
    await userEvent.click(nextBtn);
    expect(root.querySelectorAll('.b-carousel__slide')[1].classList.contains('b-carousel__slide--active')).toBe(true);
  }
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  name: 'Effect: Fade',
  parameters: {
    controls: {
      disable: true
    },
    docs: {
      source: {
        code: \`<BCarousel fade>...</BCarousel>\`
      }
    }
  },
  render: () => ({
    components: {
      BCarousel
    },
    template: \`
      <div style="max-width: 600px; margin: 2rem auto;">
        <BCarousel data-testid="fade" fade arrows>
          <div v-html='\${JSON.stringify(slide(0, 'Fade A'))}'></div>
          <div v-html='\${JSON.stringify(slide(1, 'Fade B'))}'></div>
          <div v-html='\${JSON.stringify(slide(2, 'Fade C'))}'></div>
        </BCarousel>
      </div>
    \`
  }),
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const root = canvas.getByTestId('fade');
    expect(root.classList.contains('b-carousel--effect-fade')).toBe(true);
  }
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: true
    },
    docs: {
      source: {
        code: \`<BCarousel autoplay :autoplay-speed="2000">...</BCarousel>\`
      }
    }
  },
  render: () => ({
    components: {
      BCarousel
    },
    template: \`
      <div style="max-width: 600px; margin: 2rem auto;">
        <BCarousel data-testid="autoplay" autoplay :autoplay-speed="2000">
          <div v-html='\${JSON.stringify(slide(0))}'></div>
          <div v-html='\${JSON.stringify(slide(1))}'></div>
          <div v-html='\${JSON.stringify(slide(2))}'></div>
        </BCarousel>
      </div>
    \`
  })
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  name: 'Autoplay (Dot Progress)',
  parameters: {
    controls: {
      disable: true
    },
    docs: {
      source: {
        code: \`<BCarousel :autoplay="{ dotDuration: true }" :autoplay-speed="2500">...</BCarousel>\`
      }
    }
  },
  render: () => ({
    components: {
      BCarousel
    },
    template: \`
      <div style="max-width: 600px; margin: 2rem auto;">
        <BCarousel
          data-testid="autoplay-progress"
          :autoplay="{ dotDuration: true }"
          :autoplay-speed="2500"
        >
          <div v-html='\${JSON.stringify(slide(0))}'></div>
          <div v-html='\${JSON.stringify(slide(1))}'></div>
          <div v-html='\${JSON.stringify(slide(2))}'></div>
        </BCarousel>
      </div>
    \`
  }),
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const root = canvas.getByTestId('autoplay-progress');
    const activeDot = root.querySelector('.b-carousel__dot--active');
    expect(activeDot?.classList.contains('b-carousel__dot--progress')).toBe(true);
  }
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  name: 'Dot Placement',
  parameters: {
    controls: {
      disable: true
    },
    docs: {
      source: {
        code: \`<BCarousel dot-placement="top|bottom|start|end">...</BCarousel>\`
      }
    }
  },
  render: () => ({
    components: {
      BCarousel
    },
    template: \`
      <div style="display:grid;grid-template-columns:1fr 1fr;gap:2rem;padding:2rem;">
        <div>
          <p style="font:600 12px sans-serif;color:#666;margin:0 0 8px;">Top</p>
          <BCarousel dot-placement="top" aria-label="Carousel with dots on top">
            <div v-html='\${JSON.stringify(slide(0))}'></div>
            <div v-html='\${JSON.stringify(slide(1))}'></div>
          </BCarousel>
        </div>
        <div>
          <p style="font:600 12px sans-serif;color:#666;margin:0 0 8px;">Bottom (default)</p>
          <BCarousel dot-placement="bottom" aria-label="Carousel with dots on bottom">
            <div v-html='\${JSON.stringify(slide(0))}'></div>
            <div v-html='\${JSON.stringify(slide(1))}'></div>
          </BCarousel>
        </div>
        <div>
          <p style="font:600 12px sans-serif;color:#666;margin:0 0 8px;">Start</p>
          <BCarousel dot-placement="start" aria-label="Carousel with dots at start">
            <div v-html='\${JSON.stringify(slide(0))}'></div>
            <div v-html='\${JSON.stringify(slide(1))}'></div>
          </BCarousel>
        </div>
        <div>
          <p style="font:600 12px sans-serif;color:#666;margin:0 0 8px;">End</p>
          <BCarousel dot-placement="end" aria-label="Carousel with dots at end">
            <div v-html='\${JSON.stringify(slide(0))}'></div>
            <div v-html='\${JSON.stringify(slide(1))}'></div>
          </BCarousel>
        </div>
      </div>
    \`
  })
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: true
    },
    docs: {
      source: {
        code: \`<BCarousel draggable arrows>...</BCarousel>\`
      }
    }
  },
  render: () => ({
    components: {
      BCarousel
    },
    template: \`
      <div style="max-width: 600px; margin: 2rem auto;">
        <p style="font:13px sans-serif;color:#666;margin:0 0 12px;">
          Click and drag the slide horizontally.
        </p>
        <BCarousel data-testid="draggable" draggable arrows>
          <div v-html='\${JSON.stringify(slide(0))}'></div>
          <div v-html='\${JSON.stringify(slide(1))}'></div>
          <div v-html='\${JSON.stringify(slide(2))}'></div>
        </BCarousel>
      </div>
    \`
  }),
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const root = canvas.getByTestId('draggable');
    expect(root.classList.contains('b-carousel--draggable')).toBe(true);
  }
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  name: 'Controlled (v-model)',
  parameters: {
    controls: {
      disable: true
    },
    docs: {
      source: {
        code: \`<BCarousel v-model="active">...</BCarousel>\`
      }
    }
  },
  render: () => ({
    components: {
      BCarousel
    },
    setup() {
      const active = ref(0);
      return {
        active
      };
    },
    template: \`
      <div style="max-width: 600px; margin: 2rem auto;">
        <div style="display:flex;gap:.5rem;margin:0 0 12px;">
          <button data-testid="ctrl-0" @click="active = 0">1</button>
          <button data-testid="ctrl-1" @click="active = 1">2</button>
          <button data-testid="ctrl-2" @click="active = 2">3</button>
          <span style="margin-left:auto;font:13px sans-serif;color:#666;">
            Active: <code data-testid="ctrl-active">{{ active }}</code>
          </span>
        </div>
        <BCarousel data-testid="controlled" v-model="active">
          <div v-html='\${JSON.stringify(slide(0))}'></div>
          <div v-html='\${JSON.stringify(slide(1))}'></div>
          <div v-html='\${JSON.stringify(slide(2))}'></div>
        </BCarousel>
      </div>
    \`
  }),
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    await userEvent.click(canvas.getByTestId('ctrl-2'));
    expect(canvas.getByTestId('ctrl-active').textContent).toBe('2');
    expect(canvas.getByTestId('controlled').querySelectorAll('.b-carousel__slide')[2].classList.contains('b-carousel__slide--active')).toBe(true);
  }
}`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  name: 'Custom Dot',
  parameters: {
    controls: {
      disable: true
    },
    docs: {
      source: {
        code: \`<BCarousel>
  <template #dot="{ index, active }">
    <span :class="active ? 'on' : 'off'">{{ index + 1 }}</span>
  </template>
</BCarousel>\`
      }
    }
  },
  render: () => ({
    components: {
      BCarousel
    },
    template: \`
      <div style="max-width: 600px; margin: 2rem auto;">
        <BCarousel data-testid="custom-dot">
          <div v-html='\${JSON.stringify(slide(0))}'></div>
          <div v-html='\${JSON.stringify(slide(1))}'></div>
          <div v-html='\${JSON.stringify(slide(2))}'></div>
          <template #dot="{ index, active }">
            <span aria-hidden="true" style="
              display:inline-flex;align-items:center;justify-content:center;
              width:24px;height:24px;border-radius:50%;font:600 11px sans-serif;
            " :style="active
              ? 'background:white;color:black'
              : 'background:rgba(255,255,255,.3);color:white'">{{ index + 1 }}</span>
          </template>
        </BCarousel>
      </div>
    \`
  }),
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const root = canvas.getByTestId('custom-dot');
    const customSpans = root.querySelectorAll('.b-carousel__dot span');
    expect(customSpans.length).toBe(3);
    expect(customSpans[0].textContent).toBe('1');
  }
}`,...x.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  name: 'Accessibility (roles, ARIA, keyboard)',
  parameters: {
    controls: {
      disable: true
    },
    docs: {
      description: {
        story: 'Verifies <code>role="region"</code>, <code>aria-roledescription="carousel"</code>, ' + '<code>role="group"</code> on slides, <code>role="tablist"/"tab"</code> on dots, ' + 'a polite live region announcing the active slide, and arrow-key navigation.'
      }
    }
  },
  render: () => ({
    components: {
      BCarousel
    },
    template: \`
      <div style="max-width: 600px; margin: 2rem auto;">
        <BCarousel data-testid="a11y" arrows>
          <div v-html='\${JSON.stringify(slide(0))}'></div>
          <div v-html='\${JSON.stringify(slide(1))}'></div>
          <div v-html='\${JSON.stringify(slide(2))}'></div>
        </BCarousel>
      </div>
    \`
  }),
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const root = canvas.getByTestId('a11y');

    // Region semantics
    expect(root.getAttribute('role')).toBe('region');
    expect(root.getAttribute('aria-roledescription')).toBe('carousel');

    // Slides as groups
    const slides = root.querySelectorAll('.b-carousel__slide');
    slides.forEach(s => {
      expect(s.getAttribute('role')).toBe('group');
      expect(s.getAttribute('aria-roledescription')).toBe('slide');
    });
    expect(slides[0].getAttribute('aria-hidden')).toBeNull();
    expect(slides[1].getAttribute('aria-hidden')).toBe('true');

    // Dots as tablist
    const dotsList = root.querySelector('.b-carousel__dots') as HTMLElement;
    expect(dotsList.getAttribute('role')).toBe('tablist');
    const dots = root.querySelectorAll('.b-carousel__dot');
    expect(dots[0].getAttribute('aria-selected')).toBe('true');
    expect(dots[0].getAttribute('tabindex')).toBe('0');
    expect(dots[1].getAttribute('tabindex')).toBe('-1');

    // Live region
    const live = root.querySelector('.b-carousel__sr-only') as HTMLElement;
    expect(live.getAttribute('aria-live')).toBe('polite');
    expect(live.textContent?.trim()).toBe('Slide 1 of 3');

    // Keyboard navigation on dots
    (dots[0] as HTMLElement).focus();
    await userEvent.keyboard('{ArrowRight}');
    const updated = root.querySelectorAll('.b-carousel__dot');
    expect(updated[1].getAttribute('aria-selected')).toBe('true');

    // Arrow buttons
    const prev = root.querySelector('.b-carousel__arrow--prev') as HTMLElement;
    expect(prev.getAttribute('aria-label')).toBe('Previous slide');
  }
}`,...S.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  name: 'Interaction - full flow',
  parameters: {
    controls: {
      disable: true
    },
    docs: {
      description: {
        story: 'Drives click navigation, dot click, and emits assertions on beforeChange / update:modelValue / afterChange.'
      }
    }
  },
  args: {
    'onUpdate:modelValue': fn(),
    onBeforeChange: fn(),
    onAfterChange: fn()
  } as unknown as Story['args'],
  render: args => ({
    components: {
      BCarousel
    },
    setup() {
      return {
        args
      };
    },
    template: \`
      <div style="max-width: 600px; margin: 2rem auto;">
        <BCarousel data-testid="ix" v-bind="args" arrows :speed="100">
          <div v-html='\${JSON.stringify(slide(0))}'></div>
          <div v-html='\${JSON.stringify(slide(1))}'></div>
          <div v-html='\${JSON.stringify(slide(2))}'></div>
        </BCarousel>
      </div>
    \`
  }),
  play: async ({
    canvasElement,
    args
  }) => {
    const canvas = within(canvasElement);
    const root = canvas.getByTestId('ix');

    // Initial state
    let slides = root.querySelectorAll('.b-carousel__slide');
    expect(slides[0].classList.contains('b-carousel__slide--active')).toBe(true);

    // Click next arrow
    const nextBtn = root.querySelector('.b-carousel__arrow--next') as HTMLElement;
    await userEvent.click(nextBtn);
    expect(args['onUpdate:modelValue']).toHaveBeenCalledWith(1);
    expect(args.onBeforeChange).toHaveBeenCalledWith(0, 1);

    // Click last dot
    const lastDot = root.querySelectorAll('.b-carousel__dot')[2] as HTMLElement;
    await userEvent.click(lastDot);
    slides = root.querySelectorAll('.b-carousel__slide');
    expect(slides[2].classList.contains('b-carousel__slide--active')).toBe(true);
  }
}`,...C.parameters?.docs?.source}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  name: 'Theming (CSS variables)',
  parameters: {
    controls: {
      disable: true
    },
    docs: {
      description: {
        story: 'Override CSS custom properties to retheme the carousel. ' + 'Below example overrides arrow size, dot active width, and dot offset.'
      }
    }
  },
  render: () => ({
    components: {
      BCarousel
    },
    template: \`
      <div style="max-width: 600px; margin: 2rem auto;">
        <BCarousel
          data-testid="theming"
          arrows
          style="
            --b-carousel-arrow-size: 24px;
            --b-carousel-dot-active-width: 40px;
            --b-carousel-dot-height: 5px;
            --b-carousel-dot-offset: 20px;
            --b-carousel-arrow-bg: oklch(50% 0.22 295 / 80%);
          "
        >
          <div v-html='\${JSON.stringify(slide(0, 'Themed'))}'></div>
          <div v-html='\${JSON.stringify(slide(1, 'Themed'))}'></div>
          <div v-html='\${JSON.stringify(slide(2, 'Themed'))}'></div>
        </BCarousel>
      </div>
    \`
  }),
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const root = canvas.getByTestId('theming') as HTMLElement;
    expect(root.style.getPropertyValue('--b-carousel-arrow-size')).toBe('24px');
    expect(root.style.getPropertyValue('--b-carousel-dot-active-width')).toBe('40px');
  }
}`,...w.parameters?.docs?.source}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  name: 'Design Tokens',
  parameters: {
    controls: {
      disable: true
    },
    docs: {
      description: {
        story: 'Reference table of every <code>--b-carousel-*</code> CSS custom property ' + 'that consumers can override to retheme the component.'
      }
    }
  },
  render: () => ({
    components: {
      BCarousel
    },
    setup() {
      return {
        tokens: DESIGN_TOKENS
      };
    },
    template: \`
      <div style="font-family:sans-serif;padding:2rem;max-width:1000px;margin:0 auto;">
        <h2 style="margin:0 0 8px;">BCarousel - Design Tokens</h2>
        <p style="margin:0 0 24px;color:#595959;">
          All tokens scoped to <code>.b-carousel</code>. Override inline or via a CSS class.
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
          Three tokens overridden inline (arrow color, dot active color, dot active width).
        </p>
        <BCarousel
          arrows
          style="
            --b-carousel-arrow-bg: oklch(55% 0.22 145 / 80%);
            --b-carousel-dot-active-color: oklch(70% 0.22 145);
            --b-carousel-dot-active-width: 36px;
          "
        >
          <div v-html='\${JSON.stringify(slide(0, 'Token A'))}'></div>
          <div v-html='\${JSON.stringify(slide(1, 'Token B'))}'></div>
          <div v-html='\${JSON.stringify(slide(2, 'Token C'))}'></div>
        </BCarousel>
      </div>
    \`
  })
}`,...E.parameters?.docs?.source}}},D=[`Playground`,`Basic`,`WithArrows`,`FadeEffect`,`Autoplay`,`AutoplayWithProgress`,`DotPlacements`,`Draggable`,`Controlled`,`CustomDot`,`Accessibility`,`InteractionTests`,`Theming`,`DesignTokens`]}))();export{S as Accessibility,g as Autoplay,_ as AutoplayWithProgress,p as Basic,b as Controlled,x as CustomDot,E as DesignTokens,v as DotPlacements,y as Draggable,h as FadeEffect,C as InteractionTests,f as Playground,w as Theming,m as WithArrows,D as __namedExportsOrder,u as default};