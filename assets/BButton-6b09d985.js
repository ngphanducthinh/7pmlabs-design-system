import{j as m,k as p,d as r,l as t,n as l,e as n,m as c,o}from"./vue.esm-bundler-d836205b.js";import{a as d,b as a}from"./Enums-6a2836ab.js";const f=["disabled"],y={class:"ds-flex ds-items-center ds-justify-center"},g={class:"ds-absolute -ds-bottom-[3px] ds-left-0 ds-text-[16px]"},x={class:"ds-flex ds-items-center"},h={class:"ds-absolute -ds-bottom-[3px] ds-left-0 ds-text-[16px]"},k=m({__name:"BButton",props:{type:{default:d.Secondary},size:{default:a.Medium},disabled:{type:Boolean,default:!1}},setup(b){const s=b,u=p(()=>{let e="ds-font-semibold ds-text-center ";switch(e+="disabled:ds-cursor-not-allowed ",s.type){case d.Primary:default:e+="ds-bg-gradient-to-r ds-from-primary-f-stop enabled:hover:ds-from-primary-f/90 enabled:hover:ds-to-primary-t/90 disabled:ds-text-black/40 ds-rounded-lg ds-text-white ",e+=s.disabled?"ds-bg-gray-150 ":"ds-from-primary-f ds-to-primary-t ";break;case d.Secondary:e+="ds-rounded-lg ds-bg-transparent ds-text-primary-t enabled:hover:ds-bg-[#e6f0fe] disabled:ds-text-black/[0.4] ",e+=s.disabled?"ds-border-inner-secondary--disabled ":"ds-border-inner-secondary ";break;case d.Additional:e+="ds-rounded-lg ds-bg-transparent ds-text-black/[0.85] enabled:hover:ds-bg-gray-150 disabled:ds-text-black/[0.4] ",e+=s.disabled?"ds-border-inner-additional--disabled ":"ds-border-inner-additional ";break;case d.Clear:e+="ds-rounded-lg ds-bg-transparent ds-text-primary-t enabled:hover:ds-bg-[#e6f0fe] disabled:ds-text-black/[0.4] ";break;case d.Icon:e+="ds-bg-gradient-to-r ds-from-primary-f-stop enabled:hover:ds-from-primary-f/90 enabled:hover:ds-to-primary-t/90 disabled:ds-text-black/40 ds-rounded-full ds-rounded-full ds-text-white ",e+=s.disabled?"disabled:ds-bg-gray-150 ":"ds-from-primary-f ds-to-primary-t ";break}switch(s.size){case a.Small:e+=s.type!==d.Icon?"ds-text-sm ds-leading-4 ds-py-2 ds-px-3 ":"ds-text-base ds-leading-4 ds-h-8 ds-w-8 ";break;case a.Medium:default:e+=s.type!==d.Icon?"ds-text-sm ds-leading-4 ds-py-3.5 lg:ds-py-3 ds-px-4 ":"ds-text-2xl ds-leading-4 ds-h-11 ds-w-11 lg:ds-h-10 lg:ds-w-10 ";break}return e}),i=p(()=>{let e="";switch(s.size){case a.Small:e+="ds-h-[8px] ds-w-[16px] ";break;case a.Medium:default:e+="ds-h-[8px] ds-w-[16px] ";break}return e});return(e,v)=>(o(),r("button",{class:l(u.value),disabled:e.disabled,type:"button"},[t("div",y,[e.$slots.prependIcon?(o(),r("div",{key:0,class:l([i.value,"ds-relative ds-mr-2"])},[t("span",g,[n(e.$slots,"prependIcon")])],2)):c("",!0),t("div",x,[n(e.$slots,"default")]),e.$slots.appendIcon?(o(),r("div",{key:1,class:l([i.value,"ds-relative ds-ml-2"])},[t("span",h,[n(e.$slots,"appendIcon")])],2)):c("",!0)])],10,f))}});k.__docgenInfo={exportName:"default",displayName:"BButton",description:"",tags:{},props:[{name:"type",required:!1,type:{name:"TSLiteralType"},defaultValue:{func:!1,value:"BButtonType.Secondary"}},{name:"size",required:!1,type:{name:"TSLiteralType"},defaultValue:{func:!1,value:"BButtonSize.Medium"}},{name:"disabled",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"false"}}],slots:[{name:"prependIcon"},{name:"default"},{name:"appendIcon"}],sourceFiles:["/home/runner/work/design-system/design-system/src/components/BButton.vue"]};export{k as _};
//# sourceMappingURL=BButton-6b09d985.js.map
