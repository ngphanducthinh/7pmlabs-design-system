import{d as b,a as i,b as l,e as r,n as a,f as p,g as f,o as n}from"./vue.esm-bundler-6fb7cc6f.js";import{B as d,a as t}from"./Enums-fae195b3.js";const m=["disabled"],y={class:"ds-flex ds-items-center ds-justify-center"},g={class:"ds-flex ds-items-center"},x=b({__name:"BButton",props:{type:{default:d.Secondary},prependIcon:{default:""},appendIcon:{default:""},size:{default:t.Medium},disabled:{type:Boolean,default:!1}},setup(u){const s=u,c=i(()=>{let e="ds-font-semibold ds-text-center ";switch(e+="disabled:ds-cursor-not-allowed ",s.type){case d.Primary:default:e+="ds-bg-gradient-to-r ds-from-primary-f-stop enabled:hover:ds-from-primary-f/90 enabled:hover:ds-to-primary-t/90 disabled:ds-text-black/40 ds-rounded-lg ds-text-white ",e+=s.disabled?"ds-bg-gray-150 ":"ds-from-primary-f ds-to-primary-t ";break;case d.Secondary:e+="ds-rounded-lg ds-bg-transparent ds-text-primary-t enabled:hover:ds-bg-[#e6f0fe] disabled:ds-text-black/[0.4] ",e+=s.disabled?"ds-border-inner-secondary--disabled ":"ds-border-inner-secondary ";break;case d.Additional:e+="ds-rounded-lg ds-bg-transparent ds-text-black/[0.85] enabled:hover:ds-bg-gray-150 disabled:ds-text-black/[0.4] ",e+=s.disabled?"ds-border-inner-additional--disabled ":"ds-border-inner-additional ";break;case d.Clear:e+="ds-rounded-lg ds-bg-transparent ds-text-primary-t enabled:hover:ds-bg-[#e6f0fe] disabled:ds-text-black/[0.4] ";break;case d.Icon:e+="ds-bg-gradient-to-r ds-from-primary-f-stop enabled:hover:ds-from-primary-f/90 enabled:hover:ds-to-primary-t/90 disabled:ds-text-black/40 ds-rounded-full ds-rounded-full ds-text-white ",e+=s.disabled?"disabled:ds-bg-gray-150 ":"ds-from-primary-f ds-to-primary-t ";break}switch(s.size){case t.Small:e+=s.type!==d.Icon?"ds-text-sm ds-leading-4 ds-py-2 ds-px-3 ":"ds-text-base ds-leading-4 ds-h-8 ds-w-8 ";break;case t.Medium:default:e+=s.type!==d.Icon?"ds-text-sm ds-leading-4 ds-py-3.5 lg:ds-py-3 ds-px-4 ":"ds-text-2xl ds-leading-4 ds-h-11 ds-w-11 lg:ds-h-10 lg:ds-w-10 ";break}return e}),o=i(()=>{let e="";switch(s.size){case t.Small:e+="ds-h-[8px] ds-w-[16px] ";break;case t.Medium:default:e+="ds-h-[8px] ds-w-[16px] ";break}return e});return(e,h)=>(n(),l("button",{type:"button",class:a(c.value),disabled:e.disabled},[r("div",y,[e.prependIcon?(n(),l("div",{key:0,class:a(["ds-relative ds-mr-2",o.value])},[r("span",{class:a(["ds-absolute -ds-bottom-[3px] ds-left-0 ds-text-[16px]",e.prependIcon])},null,2)],2)):p("",!0),r("div",g,[f(e.$slots,"default")]),e.appendIcon?(n(),l("div",{key:1,class:a(["ds-relative ds-ml-2",o.value])},[r("span",{class:a(["ds-absolute -ds-bottom-[3px] ds-left-0 ds-text-[16px]",e.appendIcon])},null,2)],2)):p("",!0)])],10,m))}});x.__docgenInfo={exportName:"default",displayName:"BButton",description:"",tags:{},props:[{name:"type",required:!1,type:{name:"TSLiteralType"},defaultValue:{func:!1,value:"BButtonType.Secondary"}},{name:"prependIcon",required:!1,type:{name:"string"},defaultValue:{func:!1,value:"''"}},{name:"appendIcon",required:!1,type:{name:"string"},defaultValue:{func:!1,value:"''"}},{name:"size",required:!1,type:{name:"TSLiteralType"},defaultValue:{func:!1,value:"BButtonSize.Medium"}},{name:"disabled",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"false"}}],slots:[{name:"default"}],sourceFiles:["/Users/thinhnguyen/Downloads/Projects/7PMLabs/7pmlabs-design-system/src/components/BButton.vue"]};export{x as _};
//# sourceMappingURL=BButton-08333e6f.js.map