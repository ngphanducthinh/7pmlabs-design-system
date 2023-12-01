import{j as h,k as P,d as w,l as a,n as r,t as o,w as i,y as d,o as z,b as S}from"./vue.esm-bundler-d836205b.js";import{c as p}from"./Enums-6a2836ab.js";const $={class:"ds-inline-flex ds-space-x-1"},q=a("i",{class:"fa-solid fa-angle-left"},null,-1),T=[q],x=a("i",{class:"fa-solid fa-angle-right"},null,-1),D=[x],M=1,y="...",b=h({__name:"BPagination",props:{modelValue:{},numberOfPages:{},border:{type:Boolean,default:!1},transparent:{type:Boolean,default:!1},size:{default:p.Medium}},emits:["update:modelValue","change"],setup(v,{emit:u}){const c=v,e=P({get(){return c.modelValue+1},set(s){u("update:modelValue",s-1)}}),l=P(()=>{let s=`
  ds-flex ds-items-center ds-justify-center
  ds-rounded-lg `;switch(c.border&&(s+="ds-border ds-border-gray-300 "),c.size){case p.Small:s+="ds-w-8 ds-h-8 ";break;case p.Medium:default:s+="ds-w-10 ds-h-10 ";break}return s}),m=s=>{e.value=s,u("change",e.value)},C=()=>{e.value>1&&(e.value--,u("change",e.value))},V=()=>{e.value<c.numberOfPages&&(e.value++,u("change",e.value))},t=(s=!0)=>s?"ds-text-white ds-bg-primary-t ":`ds-text-gray-500 hover:ds-bg-primary-t/10 ${c.transparent?"ds-bg-transparent":"ds-bg-white"}`;return(s,n)=>(z(),w("nav",null,[a("ul",$,[a("li",{class:r([[l.value,t(!1)],"ds-ml-0 ds-cursor-pointer"]),onClick:C},T,2),a("li",{class:r([[t(e.value===1),l.value],"ds-cursor-pointer"]),onClick:n[0]||(n[0]=f=>m(1))},[a("a",null,o(M))],2),i(a("li",{class:r([[l.value],"ds-cursor-default"])},[a("a",null,o(y))],2),[[d,e.value>3]]),i(a("li",{class:r([[l.value,t(!1)],"ds-cursor-pointer"]),onClick:n[1]||(n[1]=f=>m(e.value-1))},[a("a",null,o(e.value-1),1)],2),[[d,e.value>2]]),i(a("li",{class:r([[l.value,t()],"ds-cursor-pointer"]),onClick:n[2]||(n[2]=f=>m(e.value))},[a("a",null,o(e.value),1)],2),[[d,e.value!==1&&e.value!==s.numberOfPages]]),i(a("li",{class:r([[l.value,t(!1)],"ds-cursor-pointer"]),onClick:n[3]||(n[3]=f=>m(e.value+1))},[a("a",null,o(e.value+1),1)],2),[[d,e.value<s.numberOfPages-1]]),i(a("li",{class:r([[l.value],"ds-cursor-default"])},[a("a",null,o(y))],2),[[d,e.value<s.numberOfPages-2]]),i(a("li",{class:r([[l.value,t(e.value===s.numberOfPages)],"ds-cursor-pointer"]),onClick:n[4]||(n[4]=f=>m(s.numberOfPages))},[a("a",null,o(s.numberOfPages),1)],2),[[d,s.numberOfPages>1]]),a("li",{class:r([[l.value,t(!1)],"ds-cursor-pointer"]),onClick:V},D,2)])]))}});b.__docgenInfo={exportName:"default",displayName:"BPagination",description:"",tags:{},props:[{name:"modelValue",description:"Start by 1.",required:!0,type:{name:"number"}},{name:"numberOfPages",required:!0,type:{name:"number"}},{name:"border",description:"Bordered buttons.",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"transparent",description:"Transparent background buttons.",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"size",required:!1,type:{name:"TSLiteralType"},defaultValue:{func:!1,value:"BPaginationSize.Medium"}}],events:[{name:"update:modelValue"},{name:"change"}],sourceFiles:["/home/runner/work/design-system/design-system/src/components/BPagination.vue"]};const _={title:"Components/Pagination",component:b,tags:["autodocs"],argTypes:{size:{control:"select",options:Object.values(p)}},args:{border:!1,transparent:!1,size:p.Medium}},g={render:v=>({components:{BPagination:b},setup(){const u=S(0);return{args:v,page:u}},template:`
      <BPagination v-bind="args" v-model="page" />
    `}),args:{modelValue:0,numberOfPages:10}};var k,B,O;g.parameters={...g.parameters,docs:{...(k=g.parameters)==null?void 0:k.docs,source:{originalSource:`{
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
}`,...(O=(B=g.parameters)==null?void 0:B.docs)==null?void 0:O.source}}};const E=["Default"];export{g as Default,E as __namedExportsOrder,_ as default};
//# sourceMappingURL=BPagination.stories-d3b31be4.js.map
