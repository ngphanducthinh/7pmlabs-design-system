import{j as n,k as d,o as t,b as o,d as i,q as c,t as l,l as u}from"./vue.esm-bundler-109c6e5d.js";const m={class:"ds-min-h-[1rem]"},p={key:0,class:"ds-text-xs ds-text-red-500"},g=n({__name:"BErrorMessage",props:{errorMessage:{type:[String,Function],default:""}},setup(a){const e=a,s=d(()=>typeof e.errorMessage=="function"?e.errorMessage():e.errorMessage);return(r,f)=>(t(),o("div",m,[s.value||r.$slots.default?(t(),o("div",p,[i(r.$slots,"default",{},()=>[c(l(s.value),1)])])):u("",!0)]))}});g.__docgenInfo={exportName:"default",displayName:"BErrorMessage",description:"",tags:{},props:[{name:"errorMessage",description:"A text or a function returning a text.",required:!1,type:{name:"union",elements:[{name:"string"},{name:"ErrorMessageFunction"}]},defaultValue:{func:!1,value:"''"}}],slots:[{name:"default"}],sourceFiles:["/home/runner/work/design-system/design-system/src/components/BErrorMessage.vue"]};export{g as _};