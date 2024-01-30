import{r as h}from"./index-c013ead5.js";import{u as d}from"./index-dc1d5b46.js";import"./_commonjsHelpers-725317a4.js";var a={exports:{}},t={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var u=h,x=Symbol.for("react.element"),f=Symbol.for("react.fragment"),j=Object.prototype.hasOwnProperty,y=u.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,_={key:!0,ref:!0,__self:!0,__source:!0};function m(r,e,c){var s,o={},i=null,p=null;c!==void 0&&(i=""+c),e.key!==void 0&&(i=""+e.key),e.ref!==void 0&&(p=e.ref);for(s in e)j.call(e,s)&&!_.hasOwnProperty(s)&&(o[s]=e[s]);if(r&&r.defaultProps)for(s in e=r.defaultProps,e)o[s]===void 0&&(o[s]=e[s]);return{$$typeof:x,type:r,key:i,ref:p,props:o,_owner:y.current}}t.Fragment=f;t.jsx=m;t.jsxs=m;a.exports=t;var n=a.exports;function l(r){const e=Object.assign({h1:"h1",a:"a",p:"p",code:"code",h2:"h2",pre:"pre"},d(),r.components);return n.jsxs(n.Fragment,{children:[n.jsx(e.h1,{id:"7pmlabsdesign-system",children:n.jsx(e.a,{href:"https://www.npmjs.com/package/@7pmlabs/design-system",target:"_blank",rel:"nofollow noopener noreferrer",children:"@7pmlabs/design-system"})}),`
`,n.jsxs(e.p,{children:["In case, you also use ",n.jsx(e.a,{href:"https://tailwindcss.com/docs/installation",target:"_blank",rel:"nofollow noopener noreferrer",children:"Tailwind CSS"})," in your project, do not import ",n.jsx(e.code,{children:"@import 'tailwindcss/base';"})," unless it causes broken styles."]}),`
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
`})})]})}function C(r={}){const{wrapper:e}=Object.assign({},d(),r.components);return e?n.jsx(e,Object.assign({},r,{children:n.jsx(l,r)})):l(r)}export{C as default};
