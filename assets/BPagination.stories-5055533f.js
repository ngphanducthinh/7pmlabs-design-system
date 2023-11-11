import{j as V,k as P,d as w,l as a,n as t,t as o,w as i,y as d,o as z,b as S}from"./vue.esm-bundler-f0a4de28.js";import{c as g}from"./Enums-fb1fa8e1.js";const $={class:"ds-inline-flex ds-space-x-1"},x=a("i",{class:"fa-solid fa-angle-left"},null,-1),D=[x],M=a("i",{class:"fa-solid fa-angle-right"},null,-1),N=[M],j=1,k="...",b=V({__name:"BPagination",props:{modelValue:{},numberOfPages:{},border:{type:Boolean,default:!1},transparent:{type:Boolean,default:!1},size:{default:g.Medium}},emits:["update:modelValue","change"],setup(v,{emit:u}){const c=v,e=P({get(){return c.modelValue+1},set(s){u("update:modelValue",s-1)}}),l=P(()=>{let s=`
  ds-flex ds-items-center ds-justify-center
  ds-rounded-lg `;switch(c.border&&(s+="ds-border ds-border-gray-300 "),c.size){case g.Small:s+="ds-w-8 ds-h-8 ";break;case g.Medium:default:s+="ds-w-10 ds-h-10 ";break}return s}),m=s=>{e.value=s,u("change",e.value)},C=()=>{e.value>1&&(e.value--,u("change",e.value))},h=()=>{e.value<c.numberOfPages&&(e.value++,u("change",e.value))},r=(s=!0)=>s?"ds-text-white ds-bg-primary-t ":`ds-text-gray-500 hover:ds-bg-primary-t/10 ${c.transparent?"ds-bg-transparent":"ds-bg-white"}`;return(s,n)=>(z(),w("nav",null,[a("ul",$,[a("li",{class:t([[l.value,r(!1)],"ds-ml-0 ds-cursor-pointer"]),onClick:C},D,2),a("li",{class:t([[r(e.value===1),l.value],"ds-cursor-pointer"]),onClick:n[0]||(n[0]=p=>m(1))},[a("a",null,o(j))],2),i(a("li",{class:t([[l.value],"ds-cursor-default"])},[a("a",null,o(k))],2),[[d,e.value>3]]),i(a("li",{class:t([[l.value,r(!1)],"ds-cursor-pointer"]),onClick:n[1]||(n[1]=p=>m(e.value-1))},[a("a",null,o(e.value-1),1)],2),[[d,e.value>2]]),i(a("li",{class:t([[l.value,r()],"ds-cursor-pointer"]),onClick:n[2]||(n[2]=p=>m(e.value))},[a("a",null,o(e.value),1)],2),[[d,e.value!==1&&e.value!==s.numberOfPages]]),i(a("li",{class:t([[l.value,r(!1)],"ds-cursor-pointer"]),onClick:n[3]||(n[3]=p=>m(e.value+1))},[a("a",null,o(e.value+1),1)],2),[[d,e.value<s.numberOfPages-1]]),i(a("li",{class:t([[l.value],"ds-cursor-default"])},[a("a",null,o(k))],2),[[d,e.value<s.numberOfPages-2]]),i(a("li",{class:t([[l.value,r(e.value===s.numberOfPages)],"ds-cursor-pointer"]),onClick:n[4]||(n[4]=p=>m(s.numberOfPages))},[a("a",null,o(s.numberOfPages),1)],2),[[d,s.numberOfPages>1]]),a("li",{class:t([[l.value,r(!1)],"ds-cursor-pointer"]),onClick:h},N,2)])]))}});b.__docgenInfo={exportName:"default",displayName:"BPagination",description:"",tags:{},props:[{name:"border",defaultValue:{func:!1,value:"false"}},{name:"transparent",defaultValue:{func:!1,value:"false"}},{name:"size",defaultValue:{func:!1,value:"BPaginationSize.Medium"}}],events:[{name:"update:modelValue"},{name:"change"}],sourceFiles:["/home/runner/work/design-system/design-system/src/components/BPagination.vue"]};const I={title:"Components/Pagination",component:b,tags:["autodocs"],argTypes:{size:{control:"select",options:Object.values(g)}},args:{border:!1,transparent:!1,size:g.Medium}},f={render:v=>({components:{BPagination:b},setup(){const u=S(0);return{args:v,page:u}},template:`
      <BPagination v-bind="args" v-model="page" />
    `}),args:{modelValue:0,numberOfPages:10}};var y,B,O;f.parameters={...f.parameters,docs:{...(y=f.parameters)==null?void 0:y.docs,source:{originalSource:`{
  render: (args: any) => ({
    components: {
      BPagination
    },
    setup() {
      const page = ref(0);
      return {
        args,
        page
      };
    },
    template: \`
      <BPagination v-bind="args" v-model="page" />
    \`
  }),
  args: {
    modelValue: 0,
    numberOfPages: 10
  }
}`,...(O=(B=f.parameters)==null?void 0:B.docs)==null?void 0:O.source}}};const T=["Default"];export{f as Default,T as __namedExportsOrder,I as default};
//# sourceMappingURL=BPagination.stories-5055533f.js.map
