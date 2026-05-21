import{n as e}from"./chunk-BneVvdWh.js";import{$ as t,H as n,K as r,M as i,P as a,S as o,U as s,Y as c,Z as l,_ as u,a as d,b as f,d as p,h as m,i as h,v as g,x as _}from"./iframe-BV620yWV.js";import{A as v,h as y,m as b}from"./types-CV_3xB-y.js";import{M as x,t as S}from"./components-CBHFLACH.js";import{n as C,t as w}from"./_plugin-vue_export-helper-BEVtQ-EV.js";import{d as T,f as ee,p as E,u as D}from"./BFloatButtonGroup-CjU3lqSJ.js";import{n as te}from"./BInput-CZc5BDW1.js";import{n as ne}from"./BSelect-DqvGUpXE.js";var O,k=e((()=>{O=typeof global==`object`&&global&&global.Object===Object&&global})),A,j,M=e((()=>{k(),A=typeof self==`object`&&self&&self.Object===Object&&self,j=O||A||Function(`return this`)()})),N,re=e((()=>{M(),N=j.Symbol}));function ie(e){var t=ae.call(e,F),n=e[F];try{e[F]=void 0;var r=!0}catch{}var i=oe.call(e);return r&&(t?e[F]=n:delete e[F]),i}var P,ae,oe,F,se=e((()=>{re(),P=Object.prototype,ae=P.hasOwnProperty,oe=P.toString,F=N?N.toStringTag:void 0}));function ce(e){return le.call(e)}var le,ue=e((()=>{le=Object.prototype.toString}));function de(e){return e==null?e===void 0?pe:fe:I&&I in Object(e)?ie(e):ce(e)}var fe,pe,I,me=e((()=>{re(),se(),ue(),fe=`[object Null]`,pe=`[object Undefined]`,I=N?N.toStringTag:void 0}));function he(e){return typeof e==`object`&&!!e}var ge=e((()=>{}));function _e(e){return typeof e==`symbol`||he(e)&&de(e)==L}var L,ve=e((()=>{me(),ge(),L=`[object Symbol]`}));function ye(e){for(var t=e.length;t--&&R.test(e.charAt(t)););return t}var R,be=e((()=>{R=/\s/}));function xe(e){return e&&e.slice(0,ye(e)+1).replace(z,``)}var z,Se=e((()=>{be(),z=/^\s+/}));function B(e){var t=typeof e;return e!=null&&(t==`object`||t==`function`)}var Ce=e((()=>{}));function we(e){if(typeof e==`number`)return e;if(_e(e))return V;if(B(e)){var t=typeof e.valueOf==`function`?e.valueOf():e;e=B(t)?t+``:t}if(typeof e!=`string`)return e===0?e:+e;e=xe(e);var n=Ee.test(e);return n||De.test(e)?Oe(e.slice(2),n?2:8):Te.test(e)?V:+e}var V,Te,Ee,De,Oe,ke=e((()=>{Se(),Ce(),ve(),V=NaN,Te=/^[-+]0x[0-9a-f]+$/i,Ee=/^0b[01]+$/i,De=/^0o[0-7]+$/i,Oe=parseInt})),H,Ae=e((()=>{M(),H=function(){return j.Date.now()}}));function je(e,t,n){var r,i,a,o,s,c,l=0,u=!1,d=!1,f=!0;if(typeof e!=`function`)throw TypeError(Me);t=we(t)||0,B(n)&&(u=!!n.leading,d=`maxWait`in n,a=d?Ne(we(n.maxWait)||0,t):a,f=`trailing`in n?!!n.trailing:f);function p(t){var n=r,a=i;return r=i=void 0,l=t,o=e.apply(a,n),o}function m(e){return l=e,s=setTimeout(_,t),u?p(e):o}function h(e){var n=e-c,r=e-l,i=t-n;return d?Pe(i,a-r):i}function g(e){var n=e-c,r=e-l;return c===void 0||n>=t||n<0||d&&r>=a}function _(){var e=H();if(g(e))return v(e);s=setTimeout(_,h(e))}function v(e){return s=void 0,f&&r?p(e):(r=i=void 0,o)}function y(){s!==void 0&&clearTimeout(s),l=0,r=c=i=s=void 0}function b(){return s===void 0?o:v(H())}function x(){var e=H(),n=g(e);if(r=arguments,i=this,c=e,n){if(s===void 0)return m(c);if(d)return clearTimeout(s),s=setTimeout(_,t),p(c)}return s===void 0&&(s=setTimeout(_,t)),o}return x.cancel=y,x.flush=b,x}var Me,Ne,Pe,Fe=e((()=>{Ce(),Ae(),ke(),Me=`Expected a function`,Ne=Math.max,Pe=Math.min})),Ie=e((()=>{Fe()})),Le,Re,ze,Be,Ve,He,Ue,We,Ge,Ke,qe,Je,Ye,Xe,Ze,U,W,G,Qe=e((()=>{h(),S(),E(),v(),Ie(),T(),Le={class:`b:grid b:grid-cols-1 b:gap-y-6`},Re={class:`b:flex b:flex-wrap b:items-end b:gap-4 b:rounded-xl b:border b:border-gray-200 b:bg-gray-50 b:px-4 b:py-3`},ze={class:`b:flex b:min-w-56 b:flex-1 b:flex-col b:gap-1`},Be={class:`b:flex b:flex-col b:gap-1`},Ve={class:`b:flex b:flex-col b:gap-1`},He={class:`b:ml-auto b:self-end b:pb-0.5 b:text-right`},Ue={class:`b:text-sm b:font-semibold b:text-gray-700`},We={class:`b:ml-1 b:text-sm b:text-gray-600`},Ge={class:`b:text-xs b:text-gray-600`},Ke={key:0,class:`icon-grid`},qe=[`title`,`onClick`],Je={key:0,class:`b:absolute b:inset-0 b:z-10 b:flex b:items-center b:justify-center b:rounded-xl`},Ye={class:`b:line-clamp-2 b:h-8 b:w-full b:text-center b:text-xs b:leading-tight b:text-gray-600 b:transition-colors b:group-hover:text-primary`},Xe={key:1,class:`b:flex b:flex-col b:items-center b:gap-3 b:py-20 b:text-gray-600`},Ze={class:`b:m-0 b:text-base`},U={key:2,class:`b:flex b:w-full b:justify-center`},W=180,G=o({__name:`Icons`,setup(e){let o=r(``),h=r(b.Large),v=r(y.Regular),S=Object.values(ee),C=r([]),w=r(1),T=r(S.length),E=r(null),O=async e=>{try{await navigator.clipboard.writeText(e),E.value=e,setTimeout(()=>{E.value===e&&(E.value=null)},1500)}catch{}},k=je(()=>{w.value=1,A()},300),A=()=>{let e=S.filter(e=>e.toLowerCase().includes(o.value.toLowerCase()));T.value=e.length,C.value=e.slice((w.value-1)*W,w.value*W).map(e=>({name:e}))};n([h,v],A),A();let j=Object.values(y).map(e=>({label:e,value:e})),M=Object.values(b).map(e=>({label:e,value:e}));return(e,n)=>(i(),g(`div`,Le,[m(`div`,Re,[m(`div`,ze,[n[5]||=m(`label`,{class:`b:text-xs b:font-medium b:tracking-wide b:text-gray-500 b:uppercase`},`Search`,-1),_(c(te),{modelValue:o.value,"onUpdate:modelValue":[n[0]||=e=>o.value=e,c(k)],placeholder:`e.g. arrow, home, star…`},null,8,[`modelValue`,`onUpdate:modelValue`])]),m(`div`,Be,[n[6]||=m(`label`,{class:`b:text-xs b:font-medium b:tracking-wide b:text-gray-500 b:uppercase`},`Variant`,-1),_(c(ne),{modelValue:v.value,"onUpdate:modelValue":n[1]||=e=>v.value=e,options:c(j)},null,8,[`modelValue`,`options`])]),m(`div`,Ve,[n[7]||=m(`label`,{class:`b:text-xs b:font-medium b:tracking-wide b:text-gray-500 b:uppercase`},`Size`,-1),_(c(ne),{modelValue:h.value,"onUpdate:modelValue":n[2]||=e=>h.value=e,options:c(M)},null,8,[`modelValue`,`options`])]),m(`div`,He,[m(`span`,Ue,t(T.value.toLocaleString()),1),m(`span`,We,`icon`+t(T.value===1?``:`s`),1),o.value?(i(),g(p,{key:0},[n[10]||=m(`br`,null,null,-1),m(`span`,Ge,[n[8]||=f(`matching "`,-1),m(`em`,null,t(o.value),1),n[9]||=f(`"`,-1)])],64)):u(``,!0)])]),C.value.length?(i(),g(`div`,Ke,[(i(!0),g(p,null,a(C.value,e=>(i(),g(`button`,{key:e.name,class:l([`icon-cell b:group b:relative b:flex b:cursor-pointer b:flex-col b:items-center b:justify-center b:gap-2 b:rounded-xl b:border b:bg-white b:px-2 b:py-4 b:transition-all b:duration-150`,E.value===e.name?`b:border-primary b:bg-primary/5`:`b:border-transparent b:hover:border-primary/40 b:hover:shadow-sm`]),title:`Click to copy: ${e.name}`,onClick:t=>O(e.name)},[_(d,{name:`fade`},{default:s(()=>[E.value===e.name?(i(),g(`div`,Je,[...n[11]||=[m(`span`,{class:`b:text-xs b:font-bold b:text-primary`},`Copied!`,-1)]])):u(``,!0)]),_:2},1024),m(`div`,{class:l(E.value===e.name?`b:opacity-20`:`b:transition-transform b:duration-150 b:group-hover:scale-110`)},[_(D,{icon:e.name,size:h.value,variant:v.value},null,8,[`icon`,`size`,`variant`])],2),m(`span`,Ye,t(e.name),1)],10,qe))),128))])):(i(),g(`div`,Xe,[_(D,{icon:`magnifying-glass`,size:c(b).XXLarge},null,8,[`size`]),m(`p`,Ze,`No icons found for "`+t(o.value)+`"`,1),m(`button`,{class:`b:cursor-pointer b:border-none b:bg-transparent b:text-sm b:text-primary b:underline`,onClick:n[3]||=e=>{o.value=``,w.value=1,A()}},` Clear search `)])),T.value>W?(i(),g(`div`,U,[_(c(x),{modelValue:w.value,"onUpdate:modelValue":n[4]||=e=>w.value=e,"page-size":W,total:T.value,onChange:A},null,8,[`modelValue`,`total`])])):u(``,!0)]))}})})),$e=e((()=>{})),et,tt=e((()=>{Qe(),Qe(),$e(),C(),et=w(G,[[`__scopeId`,`data-v-cb11c1a8`]]),G.__docgenInfo=Object.assign({displayName:G.name??G.__name},{exportName:`default`,displayName:`Icons`,description:``,tags:{},sourceFiles:[`/home/runner/work/design-system/design-system/src/stories/General/Icons.vue`]})})),nt,K,q,J,Y,X,Z,Q,$;e((()=>{T(),v(),tt(),nt={title:`General/Icons`,component:D,tags:[`autodocs`],argTypes:{icon:{control:`text`,description:'Icon identifier — matches the SVG filename (e.g. `"home"`, `"arrow-right"`).',table:{category:`Props`}},variant:{control:`select`,options:Object.values(y),description:`Visual style of the icon.`,table:{defaultValue:{summary:`regular`},category:`Props`}},size:{control:`select`,options:Object.values(b),description:`Preset size of the icon.`,table:{defaultValue:{summary:`md`},category:`Props`}},color:{control:`text`,description:"Theme token (`primary`, `success`, `failure`, `warning`, `info`, `secondary`) or any CSS color value. Defaults to `currentColor`.",table:{defaultValue:{summary:`currentColor`},category:`Props`}},rotate:{control:`number`,description:"Rotation angle in degrees applied via CSS `transform`.",table:{defaultValue:{summary:`0`},category:`Props`}},width:{control:`text`,description:'Override width, e.g. `"2rem"`, `"24px"`. Takes precedence over `size`.',table:{category:`Props`}},height:{control:`text`,description:'Override height, e.g. `"2rem"`, `"24px"`. Takes precedence over `size`.',table:{category:`Props`}},brand:{control:`boolean`,description:"Set `true` to load from the `brands/` folder (`BIconBrandName` values).",table:{defaultValue:{summary:`false`},category:`Props`}},decorative:{control:`boolean`,description:'When `true`, sets `aria-hidden="true"` (icon is purely visual). Set `false` and provide `ariaLabel` for meaningful icons.',table:{defaultValue:{summary:`true`},category:`Props`}},ariaLabel:{control:`text`,description:"Accessible label when the icon is meaningful (`decorative: false`).",table:{category:`Props`}}},parameters:{docs:{description:{component:`The <code>BIcon</code> component renders SVG icons fetched at runtime from the static assets folder — icons are <strong>not</strong> bundled as JS chunks.<br><br>Icons come in <strong>9 variants</strong>: <code>regular</code>, <code>solid</code>, <code>light</code>, <code>thin</code>, <code>duotone</code>, <code>sharp-light</code>, <code>sharp-regular</code>, <code>sharp-solid</code>, <code>sharp-thin</code>.<br>Colors accept <strong>theme tokens</strong> (<code>primary</code>, <code>success</code>…) or any CSS color value.<br>Use <code>decorative: false</code> + <code>ariaLabel</code> for icons that convey meaning to screen-reader users.`}}}},K={icon:`house`},q={args:{icon:`house`,variant:y.Regular,size:b.XLarge,color:`currentColor`,rotate:0,brand:!1,decorative:!0},render:e=>({components:{BIcon:D},setup(){return{args:e}},template:`<BIcon v-bind="args" />`})},J={args:K,parameters:{controls:{disable:!0},docs:{source:{code:`<BIcon icon="star" size="xs" />
<BIcon icon="star" size="sm" />
<BIcon icon="star" />
<BIcon icon="star" size="lg" />
<BIcon icon="star" size="xl" />
<BIcon icon="star" size="xxl" />`}}},render:()=>({components:{BIcon:D},setup(){return{sizes:Object.values(b)}},template:`
      <div style="display:flex;align-items:flex-end;gap:1.5rem;padding:2rem;flex-wrap:wrap;">
        <div v-for="s in sizes" :key="s" style="display:flex;flex-direction:column;align-items:center;gap:0.5rem;">
          <BIcon icon="star" :size="s" />
          <span style="font-size:11px;color:#595959;">{{ s }}</span>
        </div>
      </div>
    `})},Y={args:K,parameters:{controls:{disable:!0},docs:{source:{code:`<BIcon icon="bookmark" variant="regular" />
<BIcon icon="bookmark" variant="solid" />
<BIcon icon="bookmark" variant="light" />
<BIcon icon="bookmark" variant="thin" />
<BIcon icon="bookmark" variant="duotone" />`}}},render:()=>({components:{BIcon:D},setup(){return{variants:Object.values(y)}},template:`
      <div style="display:flex;flex-wrap:wrap;gap:2rem;padding:2rem;">
        <div v-for="v in variants" :key="v" style="display:flex;flex-direction:column;align-items:center;gap:0.5rem;">
          <BIcon icon="bookmark" :variant="v" size="xl" />
          <span style="font-size:11px;color:#595959;">{{ v }}</span>
        </div>
      </div>
    `})},X={args:K,parameters:{controls:{disable:!0},docs:{source:{code:`<BIcon icon="circle-check" color="primary" size="xl" />
<BIcon icon="circle-check" color="success" size="xl" />
<BIcon icon="circle-check" color="failure" size="xl" />
<BIcon icon="circle-check" color="warning" size="xl" />
<BIcon icon="circle-check" color="info" size="xl" />
<BIcon icon="circle-check" color="#f97316" size="xl" />`}}},render:()=>({components:{BIcon:D},setup(){return{tokens:[`primary`,`secondary`,`success`,`failure`,`warning`,`info`],custom:[`#f97316`,`oklch(60% 0.2 180)`,`#8b5cf6`]}},template:`
      <div style="display:flex;flex-direction:column;gap:1.5rem;padding:2rem;">
        <div>
          <p style="font-size:12px;color:#595959;margin:0 0 8px;">Theme tokens</p>
          <div style="display:flex;gap:1.5rem;flex-wrap:wrap;align-items:center;">
            <div v-for="c in tokens" :key="c" style="display:flex;flex-direction:column;align-items:center;gap:0.5rem;">
              <BIcon icon="circle-check" :color="c" size="xl" variant="solid" />
              <span style="font-size:11px;color:#595959;">{{ c }}</span>
            </div>
          </div>
        </div>
        <div>
          <p style="font-size:12px;color:#595959;margin:0 0 8px;">Custom CSS colors</p>
          <div style="display:flex;gap:1.5rem;flex-wrap:wrap;align-items:center;">
            <div v-for="c in custom" :key="c" style="display:flex;flex-direction:column;align-items:center;gap:0.5rem;">
              <BIcon icon="circle-check" :color="c" size="xl" variant="solid" />
              <span style="font-size:11px;color:#595959;">{{ c }}</span>
            </div>
          </div>
        </div>
      </div>
    `})},Z={args:K,parameters:{controls:{disable:!0},docs:{source:{code:`<BIcon icon="arrow-right" :rotate="0" />
<BIcon icon="arrow-right" :rotate="90" />
<BIcon icon="arrow-right" :rotate="180" />
<BIcon icon="arrow-right" :rotate="270" />`}}},render:()=>({components:{BIcon:D},setup(){return{angles:[0,45,90,135,180,225,270,315]}},template:`
      <div style="display:flex;flex-wrap:wrap;gap:2rem;padding:2rem;align-items:center;">
        <div v-for="a in angles" :key="a" style="display:flex;flex-direction:column;align-items:center;gap:0.5rem;">
          <BIcon icon="arrow-right" size="xl" :rotate="a" />
          <span style="font-size:11px;color:#595959;">{{ a }}°</span>
        </div>
      </div>
    `})},Q={name:`List of Icons`,args:K,parameters:{controls:{disable:!0},docs:{description:{story:`Browse the full icon library. Use the search box to filter by name and the dropdowns to preview different variants and sizes. <strong>Click any icon</strong> to copy its name to the clipboard.`}}},render:()=>({components:{Icons:et},template:`<Icons />`})},q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
  args: {
    icon: 'house' as any,
    variant: BIconVariant.Regular,
    size: BIconSize.XLarge,
    color: 'currentColor',
    rotate: 0,
    brand: false,
    decorative: true
  },
  render: args => ({
    components: {
      BIcon
    },
    setup() {
      return {
        args
      };
    },
    template: \`<BIcon v-bind="args" />\`
  })
}`,...q.parameters?.docs?.source},description:{story:`Interactive playground — tweak all props via the Controls panel.`,...q.parameters?.docs?.description}}},J.parameters={...J.parameters,docs:{...J.parameters?.docs,source:{originalSource:`{
  args: baseArgs,
  parameters: {
    controls: {
      disable: true
    },
    docs: {
      source: {
        code: \`<BIcon icon="star" size="xs" />
<BIcon icon="star" size="sm" />
<BIcon icon="star" />
<BIcon icon="star" size="lg" />
<BIcon icon="star" size="xl" />
<BIcon icon="star" size="xxl" />\`
      }
    }
  },
  render: () => ({
    components: {
      BIcon
    },
    setup() {
      return {
        sizes: Object.values(BIconSize)
      };
    },
    template: \`
      <div style="display:flex;align-items:flex-end;gap:1.5rem;padding:2rem;flex-wrap:wrap;">
        <div v-for="s in sizes" :key="s" style="display:flex;flex-direction:column;align-items:center;gap:0.5rem;">
          <BIcon icon="star" :size="s" />
          <span style="font-size:11px;color:#595959;">{{ s }}</span>
        </div>
      </div>
    \`
  })
}`,...J.parameters?.docs?.source},description:{story:"All six preset sizes from `xs` to `xxl`.",...J.parameters?.docs?.description}}},Y.parameters={...Y.parameters,docs:{...Y.parameters?.docs,source:{originalSource:`{
  args: baseArgs,
  parameters: {
    controls: {
      disable: true
    },
    docs: {
      source: {
        code: \`<BIcon icon="bookmark" variant="regular" />
<BIcon icon="bookmark" variant="solid" />
<BIcon icon="bookmark" variant="light" />
<BIcon icon="bookmark" variant="thin" />
<BIcon icon="bookmark" variant="duotone" />\`
      }
    }
  },
  render: () => ({
    components: {
      BIcon
    },
    setup() {
      return {
        variants: Object.values(BIconVariant)
      };
    },
    template: \`
      <div style="display:flex;flex-wrap:wrap;gap:2rem;padding:2rem;">
        <div v-for="v in variants" :key="v" style="display:flex;flex-direction:column;align-items:center;gap:0.5rem;">
          <BIcon icon="bookmark" :variant="v" size="xl" />
          <span style="font-size:11px;color:#595959;">{{ v }}</span>
        </div>
      </div>
    \`
  })
}`,...Y.parameters?.docs?.source},description:{story:`All nine icon variants on the same icon for direct comparison.`,...Y.parameters?.docs?.description}}},X.parameters={...X.parameters,docs:{...X.parameters?.docs,source:{originalSource:`{
  args: baseArgs,
  parameters: {
    controls: {
      disable: true
    },
    docs: {
      source: {
        code: \`<BIcon icon="circle-check" color="primary" size="xl" />
<BIcon icon="circle-check" color="success" size="xl" />
<BIcon icon="circle-check" color="failure" size="xl" />
<BIcon icon="circle-check" color="warning" size="xl" />
<BIcon icon="circle-check" color="info" size="xl" />
<BIcon icon="circle-check" color="#f97316" size="xl" />\`
      }
    }
  },
  render: () => ({
    components: {
      BIcon
    },
    setup() {
      const tokens = ['primary', 'secondary', 'success', 'failure', 'warning', 'info'];
      const custom = ['#f97316', 'oklch(60% 0.2 180)', '#8b5cf6'];
      return {
        tokens,
        custom
      };
    },
    template: \`
      <div style="display:flex;flex-direction:column;gap:1.5rem;padding:2rem;">
        <div>
          <p style="font-size:12px;color:#595959;margin:0 0 8px;">Theme tokens</p>
          <div style="display:flex;gap:1.5rem;flex-wrap:wrap;align-items:center;">
            <div v-for="c in tokens" :key="c" style="display:flex;flex-direction:column;align-items:center;gap:0.5rem;">
              <BIcon icon="circle-check" :color="c" size="xl" variant="solid" />
              <span style="font-size:11px;color:#595959;">{{ c }}</span>
            </div>
          </div>
        </div>
        <div>
          <p style="font-size:12px;color:#595959;margin:0 0 8px;">Custom CSS colors</p>
          <div style="display:flex;gap:1.5rem;flex-wrap:wrap;align-items:center;">
            <div v-for="c in custom" :key="c" style="display:flex;flex-direction:column;align-items:center;gap:0.5rem;">
              <BIcon icon="circle-check" :color="c" size="xl" variant="solid" />
              <span style="font-size:11px;color:#595959;">{{ c }}</span>
            </div>
          </div>
        </div>
      </div>
    \`
  })
}`,...X.parameters?.docs?.source},description:{story:`Theme tokens and custom CSS color values.`,...X.parameters?.docs?.description}}},Z.parameters={...Z.parameters,docs:{...Z.parameters?.docs,source:{originalSource:`{
  args: baseArgs,
  parameters: {
    controls: {
      disable: true
    },
    docs: {
      source: {
        code: \`<BIcon icon="arrow-right" :rotate="0" />
<BIcon icon="arrow-right" :rotate="90" />
<BIcon icon="arrow-right" :rotate="180" />
<BIcon icon="arrow-right" :rotate="270" />\`
      }
    }
  },
  render: () => ({
    components: {
      BIcon
    },
    setup() {
      return {
        angles: [0, 45, 90, 135, 180, 225, 270, 315]
      };
    },
    template: \`
      <div style="display:flex;flex-wrap:wrap;gap:2rem;padding:2rem;align-items:center;">
        <div v-for="a in angles" :key="a" style="display:flex;flex-direction:column;align-items:center;gap:0.5rem;">
          <BIcon icon="arrow-right" size="xl" :rotate="a" />
          <span style="font-size:11px;color:#595959;">{{ a }}°</span>
        </div>
      </div>
    \`
  })
}`,...Z.parameters?.docs?.source},description:{story:"Use `rotate` to spin an icon to any angle — useful for directional icons.",...Z.parameters?.docs?.description}}},Q.parameters={...Q.parameters,docs:{...Q.parameters?.docs,source:{originalSource:`{
  name: 'List of Icons',
  args: baseArgs,
  parameters: {
    controls: {
      disable: true
    },
    docs: {
      description: {
        story: 'Browse the full icon library. Use the search box to filter by name and the dropdowns to preview different variants and sizes. ' + '<strong>Click any icon</strong> to copy its name to the clipboard.'
      }
    }
  },
  render: () => ({
    components: {
      Icons
    },
    template: \`<Icons />\`
  })
}`,...Q.parameters?.docs?.source},description:{story:`Browse and search the full icon library. Click any icon to copy its name to the clipboard.`,...Q.parameters?.docs?.description}}},$=[`Default`,`Sizes`,`Variants`,`Colors`,`Rotate`,`ListOfIcons`]}))();export{X as Colors,q as Default,Q as ListOfIcons,Z as Rotate,J as Sizes,Y as Variants,$ as __namedExportsOrder,nt as default};