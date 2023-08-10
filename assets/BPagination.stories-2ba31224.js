import{j as V,k as P,d as w,m as a,n as t,t as o,w as i,x as d,o as z,b as S}from"./vue.esm-bundler-0b71992c.js";import{c as p}from"./Enums-9e395f7e.js";const $={class:"ds-inline-flex ds-space-x-1"},x=a("i",{class:"fa-solid fa-angle-left"},null,-1),D=[x],M=a("i",{class:"fa-solid fa-angle-right"},null,-1),j=[M],N=1,k="...",b=V({__name:"BPagination",props:{modelValue:{},numberOfPages:{},border:{type:Boolean,default:!1},transparent:{type:Boolean,default:!1},size:{default:p.Medium}},emits:["update:modelValue","change"],setup(v,{emit:u}){const c=v,e=P({get(){return c.modelValue+1},set(s){u("update:modelValue",s-1)}}),l=P(()=>{let s=`
  ds-flex ds-items-center ds-justify-center
  ds-rounded-lg `;switch(c.border&&(s+="ds-border ds-border-gray-300 "),c.size){case p.Small:s+="ds-w-8 ds-h-8 ";break;case p.Medium:default:s+="ds-w-10 ds-h-10 ";break}return s}),m=s=>{e.value=s,u("change",e.value)},h=()=>{e.value>1&&(e.value--,u("change",e.value))},C=()=>{e.value<c.numberOfPages&&(e.value++,u("change",e.value))},r=(s=!0)=>s?"ds-text-white ds-bg-primary-t ":`ds-text-gray-500 hover:ds-bg-primary-t/10 ${c.transparent?"ds-bg-transparent":"ds-bg-white"}`;return(s,n)=>(z(),w("nav",null,[a("ul",$,[a("li",{class:t([[l.value,r(!1)],"ds-ml-0 ds-cursor-pointer"]),onClick:h},D,2),a("li",{class:t([[r(e.value===1),l.value],"ds-cursor-pointer"]),onClick:n[0]||(n[0]=g=>m(1))},[a("a",null,o(N))],2),i(a("li",{class:t([[l.value],"ds-cursor-default"])},[a("a",null,o(k))],2),[[d,e.value>3]]),i(a("li",{class:t([[l.value,r(!1)],"ds-cursor-pointer"]),onClick:n[1]||(n[1]=g=>m(e.value-1))},[a("a",null,o(e.value-1),1)],2),[[d,e.value>2]]),i(a("li",{class:t([[l.value,r()],"ds-cursor-pointer"]),onClick:n[2]||(n[2]=g=>m(e.value))},[a("a",null,o(e.value),1)],2),[[d,e.value!==1&&e.value!==s.numberOfPages]]),i(a("li",{class:t([[l.value,r(!1)],"ds-cursor-pointer"]),onClick:n[3]||(n[3]=g=>m(e.value+1))},[a("a",null,o(e.value+1),1)],2),[[d,e.value<s.numberOfPages-1]]),i(a("li",{class:t([[l.value],"ds-cursor-default"])},[a("a",null,o(k))],2),[[d,e.value<s.numberOfPages-2]]),i(a("li",{class:t([[l.value,r(e.value===s.numberOfPages)],"ds-cursor-pointer"]),onClick:n[4]||(n[4]=g=>m(s.numberOfPages))},[a("a",null,o(s.numberOfPages),1)],2),[[d,s.numberOfPages>1]]),a("li",{class:t([[l.value,r(!1)],"ds-cursor-pointer"]),onClick:C},j,2)])]))}});b.__docgenInfo={exportName:"default",displayName:"BPagination",description:"",tags:{},props:[{name:"border",defaultValue:{func:!1,value:"false"}},{name:"transparent",defaultValue:{func:!1,value:"false"}},{name:"size",defaultValue:{func:!1,value:"BPaginationSize.Medium"}}],events:[{name:"update:modelValue"},{name:"change"}],sourceFiles:["/Users/thinhnguyen/Downloads/Projects/7PMLabs/7pmlabs-design-system/src/components/BPagination.vue"]};const I={title:"Components/Pagination",component:b,tags:["autodocs"],argTypes:{size:{control:"select",options:Object.values(p)}},args:{border:!1,transparent:!1,size:p.Medium}},f={render:v=>({components:{BPagination:b},setup(){const u=S(0);return{args:v,page:u}},template:`
      <BPagination v-bind="args" v-model="page" />
    `}),args:{modelValue:0,numberOfPages:10}};var B,y,O;f.parameters={...f.parameters,docs:{...(B=f.parameters)==null?void 0:B.docs,source:{originalSource:`{
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
}`,...(O=(y=f.parameters)==null?void 0:y.docs)==null?void 0:O.source}}};const T=["Default"];export{f as Default,T as __namedExportsOrder,I as default};
//# sourceMappingURL=BPagination.stories-2ba31224.js.map
