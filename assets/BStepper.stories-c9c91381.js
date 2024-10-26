import{_ as B}from"./BButton-972c772c.js";import{e as k,f as S,o as n,c as r,h as w,F as c,x as h,n as f,r as v,j as C,t as I,a as _}from"./vue.esm-bundler-ceeda665.js";import"./Enums-b5cac340.js";const L={class:"ds-flex"},V=["onClick"],l=k({__name:"BStepper",props:{headers:{},modelValue:{}},emits:["update:modelValue"],setup(d,{emit:o}){const e=d,m=o,p=S({get(){return e.modelValue},set(t){m("update:modelValue",t)}}),b=(t,u)=>{t.clickable&&(p.value=u)};return(t,u)=>(n(),r("div",null,[w("ul",L,[(n(!0),r(c,null,h(e.headers,(s,a)=>(n(),r("li",{key:s.text,class:f([{"ds-cursor-pointer":s.clickable,"ds-pointer-events-none ds-text-black/40":s.disabled,"ds-text-primary-t":a<p.value,"after:ds-border-1 after:content-[``] ds-flex-auto after:ds-mx-3 after:ds-h-1 after:ds-w-full after:ds-border-b after:ds-border-gray-200":a<t.headers.length-1},"ds-flex ds-items-center ds-whitespace-nowrap ds-text-sm ds-font-medium"]),onClick:$=>b(s,a)},[v(t.$slots,`step-header-${a}`,{text:s.text},()=>[C(I(s.text),1)])],10,V))),128))]),(n(!0),r(c,null,h(t.headers,(s,a)=>(n(),r("div",{key:s.text,class:f({"ds-hidden":p.value!==a})},[v(t.$slots,`step-content-${a}`)],2))),128))]))}});l.__docgenInfo={exportName:"default",displayName:"BStepper",description:"",tags:{},props:[{name:"headers",description:"Array of header objects.",required:!0,type:{name:"Array",elements:[{name:"BStepperHeader"}]}},{name:"modelValue",description:"Index of step.",required:!0,type:{name:"number"}}],events:[{name:"update:modelValue",type:{names:["number"]},description:"Update value, param: <code>value: number</code>",properties:[{type:{names:["mixed"]},description:"e"},{type:{names:["mixed"]},name:"value"}],tags:[{title:"param",type:{name:"mixed"},description:"e"},{title:"param",type:{name:"mixed"},name:"value"}]}],slots:[{name:"`step-header-${i}`",scoped:!0,bindings:[{name:"name",title:"binding"},{name:"text",title:"binding"}]},{name:"`step-content-${i}`",scoped:!0,bindings:[{name:"name",title:"binding"}]}],sourceFiles:["/home/runner/work/design-system/design-system/src/components/BStepper.vue"]};const T={title:"Components/Stepper",parameters:{docs:{description:{component:"The <code>BStepper</code> component displays progress through numbered steps."}}},component:l,tags:["autodocs"],args:{headers:[],modelValue:0}},i={render:d=>({components:{BStepper:l,BButton:B},setup(){const o=[{text:"Step 01"},{text:"Step 02"},{text:"Step 03"},{text:"Step 04"}],e=_(0);return{args:d,headers:o,step:e,previous:()=>{e.value!==0&&e.value--},next:()=>{e.value>=o.length-1||e.value++}}},template:`
      <BStepper
        v-bind="args"
        v-model="step"
        :headers="headers"
      >
        <template #step-header-3="{ text }">
          <i class="fa-solid fa-party-horn ds-pr-1" />
          <span>{{ text }}</span>
        </template>

        <template #step-content-0>
          <div class="ds-mt-4">It is a long established fact that a reader will be distracted by the readable content of
            a page when
            looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of
            letters, as opposed to using 'Content here, content here', making it look like readable English.
          </div>
        </template>
        <template #step-content-1>
          <div class="ds-mt-4">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
            has been the
            industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and
            scrambled it to make a type specimen book.
          </div>
        </template>
        <template #step-content-2>
          <div class="ds-mt-4">Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a
            piece of classical
            Latin literature from 45 BC, making it over 2000 years old.
          </div>
        </template>
        <template #step-content-3>
          <div class="ds-mt-4">Complete.</div>
        </template>
      </BStepper>
      <div class="ds-flex ds-justify-between ds-mt-4">
        <BButton @click="previous">Previous</BButton>
        <BButton type="primary" @click="next">Next</BButton>
      </div>
    `}),args:{}};var y,g,x;i.parameters={...i.parameters,docs:{...(y=i.parameters)==null?void 0:y.docs,source:{originalSource:`{
  render: (args: any) => ({
    components: {
      BStepper,
      BButton
    },
    setup() {
      const headers: BStepperHeader[] = [{
        text: 'Step 01'
      }, {
        text: 'Step 02'
      }, {
        text: 'Step 03'
      }, {
        text: 'Step 04'
      }];
      const step = ref(0);
      const previous = () => {
        if (step.value === 0) {
          return;
        }
        step.value--;
      };
      const next = () => {
        if (step.value >= headers.length - 1) {
          return;
        }
        step.value++;
      };
      return {
        args,
        headers,
        step,
        previous,
        next
      };
    },
    template: \`
      <BStepper
        v-bind="args"
        v-model="step"
        :headers="headers"
      >
        <template #step-header-3="{ text }">
          <i class="fa-solid fa-party-horn ds-pr-1" />
          <span>{{ text }}</span>
        </template>

        <template #step-content-0>
          <div class="ds-mt-4">It is a long established fact that a reader will be distracted by the readable content of
            a page when
            looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of
            letters, as opposed to using 'Content here, content here', making it look like readable English.
          </div>
        </template>
        <template #step-content-1>
          <div class="ds-mt-4">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
            has been the
            industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and
            scrambled it to make a type specimen book.
          </div>
        </template>
        <template #step-content-2>
          <div class="ds-mt-4">Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a
            piece of classical
            Latin literature from 45 BC, making it over 2000 years old.
          </div>
        </template>
        <template #step-content-3>
          <div class="ds-mt-4">Complete.</div>
        </template>
      </BStepper>
      <div class="ds-flex ds-justify-between ds-mt-4">
        <BButton @click="previous">Previous</BButton>
        <BButton type="primary" @click="next">Next</BButton>
      </div>
    \`
  }),
  args: {}
}`,...(x=(g=i.parameters)==null?void 0:g.docs)==null?void 0:x.source}}};const D=["Default"];export{i as Default,D as __namedExportsOrder,T as default};
