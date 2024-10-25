import{o as m,c as h,g as n,d as E,e as I,m as T,q as ie,b as de,k as C,j as f,l as b,E as ue,f as D,R as me,T as ce,a as _,u as V,F as pe,s as ge,z as q,h as ve,t as fe,G as _e,H as ye}from"./vue.esm-bundler-d9761a11.js";import{F as S}from"./Common-74b424b5.js";import{u as he}from"./vue-i18n-adecd10a.js";import{_ as $}from"./_plugin-vue_export-helper-c27b6911.js";import{l as ke,u as Ie}from"./ComponentHelper-8c2ae0a5.js";import{B as we}from"./BOverlay-b94b8bd2.js";import{u as be}from"./Validation-7273bacc.js";import{_ as xe}from"./BLabel-e58d6a83.js";import{_ as Be}from"./BButton-f87fd02d.js";import{_ as Ve}from"./BErrorMessage-fca9dec1.js";import{i as Ce}from"./isEmpty-125c046a.js";import{v as De}from"./v4-4a60fe23.js";import"./Enums-b5cac340.js";import"./_getTag-a6d04ccb.js";const N={},Fe={class:"ds-absolute ds-rounded-full ds-bg-black/20"},Re=n("div",{class:"ds-flex ds-h-full ds-w-full ds-items-center ds-justify-center"},[n("svg",{class:"ds-h-5 ds-w-5 ds-cursor-pointer ds-fill-white hover:ds-fill-white/60",viewBox:"0 0 512 512",xmlns:"http://www.w3.org/2000/svg"},[n("path",{d:"M0 256C0 114.6 114.6 0 256 0C397.4 0 512 114.6 512 256C512 397.4 397.4 512 256 512C114.6 512 0 397.4 0 256zM175 208.1L222.1 255.1L175 303C165.7 312.4 165.7 327.6 175 336.1C184.4 346.3 199.6 346.3 208.1 336.1L255.1 289.9L303 336.1C312.4 346.3 327.6 346.3 336.1 336.1C346.3 327.6 346.3 312.4 336.1 303L289.9 255.1L336.1 208.1C346.3 199.6 346.3 184.4 336.1 175C327.6 165.7 312.4 165.7 303 175L255.1 222.1L208.1 175C199.6 165.7 184.4 165.7 175 175C165.7 184.4 165.7 199.6 175 208.1V208.1z"})])],-1),Pe=[Re];function qe(r,c){return m(),h("div",Fe,Pe)}const F=$(N,[["render",qe]]);N.__docgenInfo={displayName:"BImagePickerCloseButton",description:"",tags:{},sourceFiles:["/home/runner/work/design-system/design-system/src/components/BImagePicker/BImagePickerCloseButton.vue"]};const A=E({__name:"BImagePreview",props:{modelValue:{type:Boolean},url:{}},emits:["update:modelValue"],setup(r,{emit:c}){const p=r,s=c,i=I({get(){return p.modelValue},set(d){s("update:modelValue",d)}});T(i,d=>{d?ke():Ie()});const g=()=>{i.value=!1},v=d=>{d.key==="Escape"&&g()};return ie(()=>{document.addEventListener("keydown",v)}),de(()=>{document.removeEventListener("keydown",v)}),(d,t)=>(m(),C(ce,{to:"body"},[f(me,{name:"fade"},{default:b(()=>[i.value?(m(),C(we,{key:0},{default:b(()=>[f(F,{class:"ds-right-4 ds-top-4 ds-h-8 ds-w-8",onClick:g}),n("div",{style:ue({backgroundImage:`url('${p.url}')`,height:"calc(100vh - 16px)",width:"calc(100vw - 16px)"}),class:"ds-bg-contain ds-bg-center ds-bg-no-repeat"},null,4)]),_:1})):D("",!0)]),_:1})]))}});A.__docgenInfo={exportName:"default",displayName:"BImagePreview",description:"",tags:{},props:[{name:"modelValue",required:!0,type:{name:"boolean"}},{name:"url",required:!0,type:{name:"string"}}],events:[{name:"update:modelValue",type:{names:["boolean"]},description:"Update value, param: <code>value: boolean</code>",properties:[{type:{names:["mixed"]},description:"e"},{type:{names:["mixed"]},name:"value"}],tags:[{title:"param",type:{name:"mixed"},description:"e"},{title:"param",type:{name:"mixed"},name:"value"}]}],sourceFiles:["/home/runner/work/design-system/design-system/src/components/BImagePicker/BImagePreview.vue"]};const Se=r=>(_e("data-v-8033e228"),r=r(),ye(),r),Le={class:"b-image-picker ds-w-full"},ze={class:"ds-gap-2 ds-space-y-4 ds-rounded-lg ds-bg-white ds-p-4 ds-drop-shadow"},Me={key:0,class:"ds-flex ds-flex-wrap ds-justify-center ds-gap-1"},Ee=["onClick","onDragenter","onDragstart","onDrop"],Te=["src"],$e=["src"],Ne={class:"ds-flex ds-flex-wrap ds-justify-center"},Ae=Se(()=>n("svg",{class:"ds-h-4 ds-w-4 ds-fill-primary-t",viewBox:"0 0 512 512",xmlns:"http://www.w3.org/2000/svg"},[n("path",{d:"M447.1 32h-384C28.64 32-.0091 60.65-.0091 96v320c0 35.35 28.65 64 63.1 64h384c35.35 0 64-28.65 64-64V96C511.1 60.65 483.3 32 447.1 32zM111.1 96c26.51 0 48 21.49 48 48S138.5 192 111.1 192s-48-21.49-48-48S85.48 96 111.1 96zM446.1 407.6C443.3 412.8 437.9 416 432 416H82.01c-6.021 0-11.53-3.379-14.26-8.75c-2.73-5.367-2.215-11.81 1.334-16.68l70-96C142.1 290.4 146.9 288 152 288s9.916 2.441 12.93 6.574l32.46 44.51l93.3-139.1C293.7 194.7 298.7 192 304 192s10.35 2.672 13.31 7.125l128 192C448.6 396 448.9 402.3 446.1 407.6z"})],-1)),je=["accept","multiple"],j=E({__name:"BImagePicker",props:{inputId:{default:""},modelValue:{},label:{default:""},multiple:{type:Boolean,default:!1},maxFileSize:{default:20},hideDetails:{type:Boolean,default:!1},required:{type:Boolean,default:!1},requiredErrorMessage:{default:""},validationRules:{default:void 0}},emits:["change","update:modelValue"],setup(r,{expose:c,emit:p}){const s=r,i=p,{t:g}=he(),v=_(null),d=_(0),t=I({get(){return s.modelValue},set(e){i("update:modelValue",e)}}),x=_(!0),B=_(!0),k=_({visible:!1,url:""}),R=I(()=>S.join(", ")),O=I(()=>s.inputId||`id-${De()}`),H={validateRule:e=>!!e&&e.length>0,errorMessage:()=>s.requiredErrorMessage||g("ds.global.field_required")},G={validateRule:()=>x.value,errorMessage:()=>g("ds.components.base.image_picker.file_types_valid",{types:R.value})},J={validateRule:()=>B.value,errorMessage:()=>g("ds.components.base.image_picker.file_size_valid",{size:s.maxFileSize})},K=I(()=>{let e=[];return s.required&&e.push(H),s.validationRules&&(e=e.concat(s.validationRules)),e.push(G),e.push(J),e.length?e:void 0}),{validate:y,validationResult:Q}=be(O.value,t,K.value),W=(e,a)=>{d.value=e,a.target.classList.add("dragging"),a.dataTransfer.effectAllowed="move",a.dataTransfer.setData("index",e.toString())},X=e=>{e.target.classList.remove("dragging")},Y=(e,a)=>{const l=a.target;d.value!==e&&l.classList.add("dropped-target")},Z=e=>{e.preventDefault(),e.dataTransfer.dropEffect="move"},ee=e=>{e.target.classList.remove("dropped-target")},ae=(e,a)=>{a.preventDefault(),a.target.classList.remove("dropped-target");const o=parseInt(a.dataTransfer.getData("index")),u=t.value[o];t.value.splice(o,1),t.value.splice(e,0,u),i("change"),y()},se=()=>{var e;(e=v.value)==null||e.click()},te=e=>{let a=e.target.files||e.dataTransfer.files;a.length&&(le(a),v.value&&(v.value.value=null))},le=e=>{Array.from(e).forEach(a=>{if(x.value=S.includes(a.type),B.value=oe(a.size)<=s.maxFileSize,x.value&&B.value){let l=new FileReader;l.onload=o=>{s.multiple?t.value.push({url:o.target.result,file:a,type:a.type}):t.value={url:o.target.result,file:a,type:a.type},i("change"),y()},l.readAsDataURL(a)}else y()})},re=e=>{t.value.splice(e,1),i("change"),y()},ne=()=>{t.value={},i("change"),y()},oe=e=>e/1024**2,P=e=>{k.value.url=e.url||"",k.value.visible=!0};return c({validate:y}),(e,a)=>(m(),h("div",Le,[f(xe,{label:s.label},null,8,["label"]),n("div",ze,[V(Ce)(t.value)?D("",!0):(m(),h("div",Me,[s.multiple?(m(!0),h(pe,{key:0},ge(t.value,(l,o)=>(m(),h("div",{key:l.url,class:"b-image-picker__draggable ds-h-full ds-cursor-pointer ds-rounded-lg ds-transition-all hover:ds-ring-2 hover:ds-ring-primary-t",draggable:"true",onClick:u=>P(l),onDragend:X,onDragenter:u=>Y(o,u),onDragleave:ee,onDragover:Z,onDragstart:u=>W(o,u),onDrop:u=>ae(o,u)},[n("img",{src:l.url,alt:"image",class:"ds-h-full ds-w-full ds-rounded-lg"},null,8,Te),f(F,{class:"ds-right-1 ds-top-1 ds-h-8 ds-w-8",onClick:q(u=>re(o),["stop"])},null,8,["onClick"])],40,Ee))),128)):(m(),h("div",{key:1,class:"b-image-picker__draggable ds-h-full ds-cursor-pointer ds-rounded-lg ds-transition-all hover:ds-ring-2 hover:ds-ring-primary-t",draggable:"true",onClick:a[0]||(a[0]=l=>P(t.value))},[n("img",{src:t.value.url,alt:"image",class:"ds-h-full ds-w-full ds-rounded-lg"},null,8,$e),f(F,{class:"ds-right-1 ds-top-1 ds-h-8 ds-w-8",onClick:q(ne,["stop"])})]))])),n("div",Ne,[f(Be,{onClick:se},{default:b(()=>[ve(fe(V(g)("ds.components.base.image_picker.select_image")),1)]),appendIcon:b(()=>[Ae]),_:1}),n("input",{ref_key:"inputRef",ref:v,accept:R.value,multiple:s.multiple,class:"ds-hidden",type:"file",onChange:te},null,40,je)])]),s.hideDetails?D("",!0):(m(),C(Ve,{key:0,"error-message":V(Q).errorMessage(),class:"ds-mt-1"},null,8,["error-message"])),f(A,{modelValue:k.value.visible,"onUpdate:modelValue":a[1]||(a[1]=l=>k.value.visible=l),url:k.value.url},null,8,["modelValue","url"])]))}});const U=$(j,[["__scopeId","data-v-8033e228"]]);j.__docgenInfo={exportName:"default",displayName:"BImagePicker",description:"",tags:{},expose:[{name:"validate"}],props:[{name:"inputId",required:!1,type:{name:"string"},defaultValue:{func:!1,value:"''"}},{name:"modelValue",description:"Empty object <code>multiple: false</code> or empty array <code>multiple: true</code>.",required:!0,type:{name:"union",elements:[{name:"FileItemRead"},{name:"Array",elements:[{name:"FileItemRead"}]}]}},{name:"label",required:!1,type:{name:"string"},defaultValue:{func:!1,value:"''"}},{name:"multiple",description:"Allow to pick multiple images, v-model expects an array.",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"maxFileSize",description:"Maximum file size in MB.",required:!1,type:{name:"number"},defaultValue:{func:!1,value:"20"}},{name:"hideDetails",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"required",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"requiredErrorMessage",required:!1,type:{name:"string"},defaultValue:{func:!1,value:"''"}},{name:"validationRules",required:!1,type:{name:"Array",elements:[{name:"ValidationRule"}]},defaultValue:{func:!1,value:"undefined"}}],events:[{name:"change",description:"Value has been changed",properties:[{type:{names:["mixed"]},description:"e"}],tags:[{title:"param",type:{name:"mixed"},description:"e"}]},{name:"update:modelValue",type:{names:["union"],elements:[{name:"FileItemRead"},{name:"Array",elements:[{name:"FileItemRead"}]}]},description:"Update value, param: <code>value: FileItemRead | FileItemRead[]</code>",properties:[{type:{names:["mixed"]},description:"e"},{type:{names:["mixed"]},name:"value"}],tags:[{title:"param",type:{name:"mixed"},description:"e"},{title:"param",type:{name:"mixed"},name:"value"}]}],sourceFiles:["/home/runner/work/design-system/design-system/src/components/BImagePicker/BImagePicker.vue"]};const ta={title:"Components/ImagePicker",parameters:{docs:{description:{component:"The <code>BImagePicker</code> component allow to pick single or multiple images from your machine."}}},component:U,tags:["autodocs"],argTypes:{},args:{inputId:"",label:"",multiple:!1,maxFileSize:20,hideDetails:!1,required:!1,requiredErrorMessage:"",validationRules:void 0}},w={render:r=>({components:{BImagePicker:U},setup(){const c=_({}),p=_([]);return T(()=>r.multiple,()=>{c.value={},p.value=[]}),{args:r,image:c,images:p}},template:`
      <BImagePicker v-if="args.multiple" v-bind="args" v-model="images" />
      <BImagePicker v-else v-bind="args" v-model="image" />
    `}),args:{}};var L,z,M;w.parameters={...w.parameters,docs:{...(L=w.parameters)==null?void 0:L.docs,source:{originalSource:`{
  render: (args: any) => ({
    components: {
      BImagePicker
    },
    setup() {
      const image = ref<FileItemRead>({});
      const images = ref<FileItemRead[]>([]);
      watch(() => args.multiple, () => {
        image.value = {};
        images.value = [];
      });
      return {
        args,
        image,
        images
      };
    },
    template: \`
      <BImagePicker v-if="args.multiple" v-bind="args" v-model="images" />
      <BImagePicker v-else v-bind="args" v-model="image" />
    \`
  }),
  args: {}
}`,...(M=(z=w.parameters)==null?void 0:z.docs)==null?void 0:M.source}}};const la=["Default"];export{w as Default,la as __namedExportsOrder,ta as default};
