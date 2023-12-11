import{j as C,k as P,d as V,l as s,n as t,t as o,w as i,y as d,o as z,b as x}from"./vue.esm-bundler-d836205b.js";import{c as m}from"./Enums-6a2836ab.js";const S={class:"ds-inline-flex ds-space-x-1"},M=s("svg",{class:"ds-h-4 ds-w-4 ds-fill-black/80",viewBox:"0 0 320 512",xmlns:"http://www.w3.org/2000/svg"},[s("path",{d:"M41.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.3 256 246.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z"})],-1),$=[M],q=s("svg",{class:"ds-h-4 ds-w-4 ds-fill-black/80",viewBox:"0 0 320 512",xmlns:"http://www.w3.org/2000/svg"},[s("path",{d:"M278.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-160 160c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L210.7 256 73.4 118.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l160 160z"})],-1),T=[q],D=1,w="...",b=C({__name:"BPagination",props:{modelValue:{},numberOfPages:{},border:{type:Boolean,default:!1},transparent:{type:Boolean,default:!1},size:{default:m.Medium}},emits:["change","update:modelValue"],setup(v,{emit:u}){const c=v,e=P({get(){return c.modelValue+1},set(a){u("update:modelValue",a-1)}}),l=P(()=>{let a=`
  ds-flex ds-items-center ds-justify-center
  ds-rounded-lg `;switch(c.border&&(a+="ds-border ds-border-gray-300 "),c.size){case m.Small:a+="ds-w-8 ds-h-8 ";break;case m.Medium:default:a+="ds-w-10 ds-h-10 ";break}return a}),p=a=>{e.value=a,u("change",e.value)},h=()=>{e.value>1&&(e.value--,u("change",e.value))},O=()=>{e.value<c.numberOfPages&&(e.value++,u("change",e.value))},r=(a=!0)=>a?"ds-text-white ds-bg-primary-t ":`ds-text-black/80 hover:ds-bg-primary-t/10 ${c.transparent?"ds-bg-transparent":"ds-bg-white"}`;return(a,n)=>(z(),V("nav",null,[s("ul",S,[s("li",{class:t([[l.value,r(!1)],"ds-ml-0 ds-cursor-pointer"]),onClick:h},$,2),s("li",{class:t([[r(e.value===1),l.value],"ds-cursor-pointer"]),onClick:n[0]||(n[0]=g=>p(1))},[s("a",null,o(D))],2),i(s("li",{class:t([[l.value],"ds-cursor-default"])},[s("a",null,o(w))],2),[[d,e.value>3]]),i(s("li",{class:t([[l.value,r(!1)],"ds-cursor-pointer"]),onClick:n[1]||(n[1]=g=>p(e.value-1))},[s("a",null,o(e.value-1),1)],2),[[d,e.value>2]]),i(s("li",{class:t([[l.value,r()],"ds-cursor-pointer"]),onClick:n[2]||(n[2]=g=>p(e.value))},[s("a",null,o(e.value),1)],2),[[d,e.value!==1&&e.value!==a.numberOfPages]]),i(s("li",{class:t([[l.value,r(!1)],"ds-cursor-pointer"]),onClick:n[3]||(n[3]=g=>p(e.value+1))},[s("a",null,o(e.value+1),1)],2),[[d,e.value<a.numberOfPages-1]]),i(s("li",{class:t([[l.value],"ds-cursor-default"])},[s("a",null,o(w))],2),[[d,e.value<a.numberOfPages-2]]),i(s("li",{class:t([[l.value,r(e.value===a.numberOfPages)],"ds-cursor-pointer"]),onClick:n[4]||(n[4]=g=>p(a.numberOfPages))},[s("a",null,o(a.numberOfPages),1)],2),[[d,a.numberOfPages>1]]),s("li",{class:t([[l.value,r(!1)],"ds-cursor-pointer"]),onClick:O},T,2)])]))}});b.__docgenInfo={exportName:"default",displayName:"BPagination",description:"",tags:{},props:[{name:"modelValue",description:"Start by 1.",required:!0,type:{name:"number"}},{name:"numberOfPages",required:!0,type:{name:"number"}},{name:"border",description:"Bordered buttons.",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"transparent",description:"Transparent background buttons.",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"size",required:!1,type:{name:"TSLiteralType"},defaultValue:{func:!1,value:"BPaginationSize.Medium"}}],sourceFiles:["/home/runner/work/design-system/design-system/src/components/BPagination.vue"]};const E={title:"Components/Pagination",component:b,tags:["autodocs"],argTypes:{size:{control:"select",options:Object.values(m)}},args:{border:!1,transparent:!1,size:m.Medium}},f={render:v=>({components:{BPagination:b},setup(){const u=x(0);return{args:v,page:u}},template:`
      <BPagination v-bind="args" v-model="page" />
    `}),args:{modelValue:0,numberOfPages:10}};var k,y,B;f.parameters={...f.parameters,docs:{...(k=f.parameters)==null?void 0:k.docs,source:{originalSource:`{
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
}`,...(B=(y=f.parameters)==null?void 0:y.docs)==null?void 0:B.source}}};const L=["Default"];export{f as Default,L as __namedExportsOrder,E as default};
//# sourceMappingURL=BPagination.stories-358304ba.js.map
