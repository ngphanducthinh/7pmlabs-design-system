import{r as h}from"./index-8a57d176.js";import{u as d}from"./index-fb728868.js";import"./_commonjsHelpers-725317a4.js";var a={exports:{}},o={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var u=h,x=Symbol.for("react.element"),f=Symbol.for("react.fragment"),j=Object.prototype.hasOwnProperty,y=u.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,_={key:!0,ref:!0,__self:!0,__source:!0};function m(s,e,c){var r,t={},i=null,l=null;c!==void 0&&(i=""+c),e.key!==void 0&&(i=""+e.key),e.ref!==void 0&&(l=e.ref);for(r in e)j.call(e,r)&&!_.hasOwnProperty(r)&&(t[r]=e[r]);if(s&&s.defaultProps)for(r in e=s.defaultProps,e)t[r]===void 0&&(t[r]=e[r]);return{$$typeof:x,type:s,key:i,ref:l,props:t,_owner:y.current}}o.Fragment=f;o.jsx=m;o.jsxs=m;a.exports=o;var n=a.exports;function p(s){const e={a:"a",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...d(),...s.components};return n.jsxs(n.Fragment,{children:[n.jsx(e.h1,{id:"7pmlabs-design-system",children:n.jsx(e.a,{href:"https://www.npmjs.com/package/@7pmlabs/design-system",rel:"nofollow",children:"7PMLabs Design System"})}),`
`,n.jsx(e.p,{children:"UI Library with beautifully handcrafted Vue Components."}),`
`,n.jsxs(e.p,{children:["In case, you also use ",n.jsx(e.a,{href:"https://tailwindcss.com/docs/installation",rel:"nofollow",children:"Tailwind CSS"})," in your project, do not import ",n.jsx(e.code,{children:"@import 'tailwindcss/base';"})," unless it causes broken styles."]}),`
`,n.jsx(e.h2,{id:"getting-started",children:"Getting started"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{children:`npm i @7pmlabs/design-system
`})}),`
`,n.jsx(e.h2,{id:"usage",children:"Usage"}),`
`,n.jsx(e.p,{children:"Import CSS & plugin in main.ts:"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{children:`import '@7pmlabs/design-system/style.css';

const app = createApp(App);
...
app.use(ds, { i18n });
`})}),`
`,n.jsx(e.p,{children:"Import & use component:"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{children:`import { BButton } from '@7pmlabs/design-system';

<BButton>Click me!</BButton>
`})}),`
`,n.jsx(e.h2,{id:"color-customization",children:"Color Customization"}),`
`,n.jsx(e.p,{children:"CSS Variables:"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{children:`--ds-colors-primary-f: 6 182 212; // #06b6d4
--ds-colors-primary-t: 59 130 246; // #3b82f6
--ds-colors-focus: 86 221 214; // #56ddd6

--ds-colors-primary-f-stop: 0%;
--ds-colors-primary-t-stop: 100%;
`})})]})}function C(s={}){const{wrapper:e}={...d(),...s.components};return e?n.jsx(e,{...s,children:n.jsx(p,{...s})}):p(s)}export{C as default};
