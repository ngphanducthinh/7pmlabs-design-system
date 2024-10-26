import{j as n}from"./jsx-runtime-414c8829.js";import{u as t}from"./index-876fed6d.js";import"./_commonjsHelpers-725317a4.js";function o(e){const s={a:"a",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...t(),...e.components};return n.jsxs(n.Fragment,{children:[n.jsx(s.h1,{id:"7pmlabs-design-system",children:n.jsx(s.a,{href:"https://www.npmjs.com/package/@7pmlabs/design-system",rel:"nofollow",children:"7PMLabs Design System"})}),`
`,n.jsx(s.p,{children:"UI Library with beautifully handcrafted Vue Components."}),`
`,n.jsxs(s.p,{children:["In case, you also use ",n.jsx(s.a,{href:"https://tailwindcss.com/docs/installation",rel:"nofollow",children:"Tailwind CSS"})," in your project, do not import ",n.jsx(s.code,{children:"@import 'tailwindcss/base';"})," unless it causes broken styles."]}),`
`,n.jsx(s.h2,{id:"getting-started",children:"Getting started"}),`
`,n.jsx(s.pre,{children:n.jsx(s.code,{children:`npm i @7pmlabs/design-system
`})}),`
`,n.jsx(s.h2,{id:"usage",children:"Usage"}),`
`,n.jsx(s.p,{children:"Import CSS & plugin in main.ts:"}),`
`,n.jsx(s.pre,{children:n.jsx(s.code,{children:`import '@7pmlabs/design-system/style.css';
import ds from '@7pmlabs/design-system';

const app = createApp(App);
...
app.use(ds, { i18n });
`})}),`
`,n.jsx(s.p,{children:"Import & use component:"}),`
`,n.jsx(s.pre,{children:n.jsx(s.code,{children:`import { BButton } from '@7pmlabs/design-system';

<BButton>Click me!</BButton>
`})}),`
`,n.jsx(s.h2,{id:"color-customization",children:"Color Customization"}),`
`,n.jsx(s.p,{children:"CSS Variables:"}),`
`,n.jsx(s.pre,{children:n.jsx(s.code,{children:`--ds-colors-primary-f: 6 182 212; // #06b6d4
--ds-colors-primary-t: 59 130 246; // #3b82f6
--ds-colors-focus: 86 221 214; // #56ddd6

--ds-colors-primary-f-stop: 0%;
--ds-colors-primary-t-stop: 100%;
`})})]})}function c(e={}){const{wrapper:s}={...t(),...e.components};return s?n.jsx(s,{...e,children:n.jsx(o,{...e})}):o(e)}export{c as default};
