import{j as B,k as l,o as f,d as _,l as q,w as C,A as w,m as k,n as M,t as R,u as T,p as D,b as E}from"./vue.esm-bundler-54bcf90c.js";import{u as I}from"./Validation-f8e18c0f.js";import{u as N}from"./vue-i18n.esm-bundler-b9c4299e.js";import{_ as P}from"./BErrorMessage-113e84a8.js";import{_ as $}from"./BLabel-39893328.js";import{v as j}from"./v4-a960c1f4.js";const F=["id","autocomplete","disabled","placeholder","readonly","rows"],n=B({__name:"BTextarea",props:{inputId:{default:""},inputCssClass:{default:""},modelValue:{},validationRules:{default:void 0},label:{default:""},placeholder:{default:""},autocomplete:{type:Boolean,default:!1},disabled:{type:Boolean,default:!1},readonly:{type:Boolean,default:!1},rows:{default:3},required:{type:Boolean,default:!1},requiredErrorMessage:{default:""},hideDetails:{type:Boolean,default:!1}},emits:["update:modelValue"],setup(t,{expose:r,emit:v}){const a=t,{t:b}=N(),g={validateRule:e=>typeof e=="number"?!!e:!!(e&&(e!=null&&e.trim())),errorMessage:()=>a.requiredErrorMessage||b("ds.global.field_required")},d=l(()=>a.inputId||`id-${j()}`),o=l({get(){return a.modelValue},set(e){v("update:modelValue",e)}}),V=l(()=>[{"ds-cursor-not-allowed ds-bg-[#f2f2f2] ds-text-black/40":a.disabled,"ds-text-black/[0.85]":!a.disabled,"ds-border-error focus:ds-ring-1 focus:ds-ring-error":!u.value.valid,"ds-border-black/[0.1] focus:ds-border-focus focus:ds-ring-1 focus:ds-ring-focus":u.value.valid},a.inputCssClass]),x=l(()=>{let e=[];return a.required&&e.push(g),a.validationRules&&(e=e.concat(a.validationRules)),e.length?e:void 0}),{validate:y,validationResult:u}=I(d.value,o,x.value);return r({validate:y}),(e,i)=>(f(),_("div",null,[q($,{id:d.value,label:e.label,required:e.required},null,8,["id","label","required"]),C(k("textarea",{id:d.value,"onUpdate:modelValue":i[0]||(i[0]=h=>o.value=h),autocomplete:a.autocomplete?"on":"off",class:M([V.value,"ds-block ds-w-full ds-rounded-lg ds-border ds-px-3 ds-py-1 ds-text-sm ds-drop-shadow-light"]),disabled:a.disabled,placeholder:a.placeholder,readonly:a.readonly,rows:a.rows},null,10,F),[[w,o.value]]),e.hideDetails?D("",!0):(f(),R(P,{key:0,"error-message":T(u).errorMessage(),class:"ds-mt-1"},null,8,["error-message"]))]))}});n.__docgenInfo={exportName:"default",displayName:"BTextarea",description:"",tags:{},expose:[{name:"validate"}],props:[{name:"inputId",defaultValue:{func:!1,value:"''"}},{name:"inputCssClass",defaultValue:{func:!1,value:"''"}},{name:"validationRules",defaultValue:{func:!1,value:"undefined"}},{name:"label",defaultValue:{func:!1,value:"''"}},{name:"placeholder",defaultValue:{func:!1,value:"''"}},{name:"autocomplete",defaultValue:{func:!1,value:"false"}},{name:"disabled",defaultValue:{func:!1,value:"false"}},{name:"readonly",defaultValue:{func:!1,value:"false"}},{name:"rows",defaultValue:{func:!1,value:"3"}},{name:"required",defaultValue:{func:!1,value:"false"}},{name:"requiredErrorMessage",defaultValue:{func:!1,value:"''"}},{name:"hideDetails",defaultValue:{func:!1,value:"false"}}],events:[{name:"update:modelValue"}],sourceFiles:["/Users/thinhnguyen/Downloads/Projects/7PMLabs/7pmlabs-design-system/src/components/BTextarea.vue"]};const G={title:"7PMLabs/Textarea",component:n,tags:["autodocs"],args:{inputId:"",inputCssClass:"",validationRules:void 0,label:"",placeholder:"",autocomplete:!1,disabled:!1,readonly:!1,rows:3,required:!1,requiredErrorMessage:"",hideDetails:!1}},s={render:t=>({components:{BTextarea:n},setup(){const r=E("");return{args:t,text:r}},template:`
      <BTextarea v-bind="args"  v-model="text" />
    `}),args:{modelValue:""}};var c,m,p;s.parameters={...s.parameters,docs:{...(c=s.parameters)==null?void 0:c.docs,source:{originalSource:`{
  render: (args: any) => ({
    components: {
      BTextarea
    },
    setup() {
      const text = ref('');
      return {
        args,
        text
      };
    },
    template: \`
      <BTextarea v-bind="args"  v-model="text" />
    \`
  }),
  args: {
    modelValue: ''
  }
}`,...(p=(m=s.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};const H=["Default"];export{s as Default,H as __namedExportsOrder,G as default};
//# sourceMappingURL=BTextarea.stories-fd6827a1.js.map
