import{_ as b}from"./BButton-5b130f15.js";import{j as B,k,o as a,b as r,l as S,F as c,D as h,n as v,d as f,q as w,t as C,e as I}from"./vue.esm-bundler-e1583b10.js";import"./Enums-5b02df9b.js";const _={class:"ds-flex"},L=["onClick"],l=B({__name:"BStepper",props:{headers:{},modelValue:{}},emits:["update:modelValue"],setup(d,{emit:o}){const e=d,p=k({get(){return e.modelValue},set(t){o("update:modelValue",t)}}),m=(t,u)=>{t.clickable&&(p.value=u)};return(t,u)=>(a(),r("div",null,[S("ul",_,[(a(!0),r(c,null,h(e.headers,(n,s)=>(a(),r("li",{key:n.text,class:v([{"ds-cursor-pointer":n.clickable,"ds-pointer-events-none ds-text-black/40":n.disabled,"ds-text-primary-t":s<p.value,"after:ds-border-1 after:content-[``] ds-flex-auto after:ds-mx-3 after:ds-h-1 after:ds-w-full after:ds-border-b after:ds-border-gray-200":s<t.headers.length-1},"ds-flex ds-items-center ds-whitespace-nowrap ds-text-sm ds-font-medium"]),onClick:V=>m(n,s)},[f(t.$slots,`step-header-${s}`,{text:n.text},()=>[w(C(n.text),1)])],10,L))),128))]),(a(!0),r(c,null,h(t.headers,(n,s)=>(a(),r("div",{key:n.text,class:v({"ds-hidden":p.value!==s})},[f(t.$slots,`step-content-${s}`)],2))),128))]))}});l.__docgenInfo={exportName:"default",displayName:"BStepper",description:"",tags:{},props:[{name:"headers",description:"Array of header objects.",required:!0,type:{name:"Array",elements:[{name:"BStepperHeader"}]}},{name:"modelValue",description:"Index of step.",required:!0,type:{name:"number"}}],events:[{name:"update:modelValue",type:{names:["number"]},description:"Update value, param: <code>value: number</code>",properties:[{type:{names:["mixed"]},description:"e"},{type:{names:["mixed"]},name:"value"}],tags:[{title:"param",type:{name:"mixed"},description:"e"},{title:"param",type:{name:"mixed"},name:"value"}]}],slots:[{name:"`step-header-${i}`",scoped:!0,bindings:[{name:"name",title:"binding"},{name:"text",title:"binding"}]},{name:"`step-content-${i}`",scoped:!0,bindings:[{name:"name",title:"binding"}]}],sourceFiles:["/home/runner/work/design-system/design-system/src/components/BStepper.vue"]};const D={title:"Components/Stepper",parameters:{docs:{description:{component:"The <code>BStepper</code> component displays progress through numbered steps."}}},component:l,tags:["autodocs"],args:{headers:[],modelValue:0}},i={render:d=>({components:{BStepper:l,BButton:b},setup(){const o=[{text:"Step 01"},{text:"Step 02"},{text:"Step 03"},{text:"Step 04"}],e=I(0);return{args:d,headers:o,step:e,previous:()=>{e.value!==0&&e.value--},next:()=>{e.value>=o.length-1||e.value++}}},template:`
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
}`,...(x=(g=i.parameters)==null?void 0:g.docs)==null?void 0:x.source}}};const E=["Default"];export{i as Default,E as __namedExportsOrder,D as default};
