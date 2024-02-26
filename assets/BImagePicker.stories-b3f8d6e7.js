import{e as m,f as _,l as o,j as z,k,z as E,B as oe,o as ie,x as B,s as g,y as w,L as de,m as C,X as ue,T as me,b as v,u as R,F as ce,D as pe,G as P,q as ge,t as ve,M as fe,N as ye}from"./vue.esm-bundler-25cc370e.js";import{F as q}from"./Common-c3b475f1.js";import{u as _e}from"./vue-i18n.esm-bundler-46b98d98.js";import{_ as T}from"./_plugin-vue_export-helper-c27b6911.js";import{l as he,u as ke}from"./ComponentHelper-d29c08d8.js";import{B as Ie}from"./BOverlay-e4c15742.js";import{u as we}from"./Validation-8b897068.js";import{_ as be}from"./BLabel-92e0795f.js";import{_ as xe}from"./BButton-a3c587ee.js";import{_ as Be}from"./BErrorMessage-1944ec7b.js";import{i as Ce}from"./isEmpty-125c046a.js";import{v as Ve}from"./v4-a960c1f4.js";import"./Enums-5b02df9b.js";import"./_getTag-a6d04ccb.js";const $={},De={class:"ds-absolute ds-rounded-full ds-bg-black/20"},Fe=o("div",{class:"ds-flex ds-h-full ds-w-full ds-items-center ds-justify-center"},[o("svg",{class:"ds-h-5 ds-w-5 ds-cursor-pointer ds-fill-white hover:ds-fill-white/60",viewBox:"0 0 512 512",xmlns:"http://www.w3.org/2000/svg"},[o("path",{d:"M0 256C0 114.6 114.6 0 256 0C397.4 0 512 114.6 512 256C512 397.4 397.4 512 256 512C114.6 512 0 397.4 0 256zM175 208.1L222.1 255.1L175 303C165.7 312.4 165.7 327.6 175 336.1C184.4 346.3 199.6 346.3 208.1 336.1L255.1 289.9L303 336.1C312.4 346.3 327.6 346.3 336.1 336.1C346.3 327.6 346.3 312.4 336.1 303L289.9 255.1L336.1 208.1C346.3 199.6 346.3 184.4 336.1 175C327.6 165.7 312.4 165.7 303 175L255.1 222.1L208.1 175C199.6 165.7 184.4 165.7 175 175C165.7 184.4 165.7 199.6 175 208.1V208.1z"})])],-1),Re=[Fe];function Pe(r,c){return m(),_("div",De,Re)}const V=T($,[["render",Pe]]);$.__docgenInfo={displayName:"BImagePickerCloseButton",description:"",tags:{},sourceFiles:["/home/runner/work/design-system/design-system/src/components/BImagePicker/BImagePickerCloseButton.vue"]};const N=z({__name:"BImagePreview",props:{modelValue:{type:Boolean},url:{}},emits:["update:modelValue"],setup(r,{emit:c}){const n=r,s=k({get(){return n.modelValue},set(d){c("update:modelValue",d)}});E(s,d=>{d?he():ke()});const f=()=>{s.value=!1},p=d=>{d.key==="Escape"&&f()};return oe(()=>{document.addEventListener("keydown",p)}),ie(()=>{document.removeEventListener("keydown",p)}),(d,t)=>(m(),B(me,{to:"body"},[g(ue,{name:"fade"},{default:w(()=>[s.value?(m(),B(Ie,{key:0},{default:w(()=>[g(V,{class:"ds-right-4 ds-top-4 ds-h-8 ds-w-8",onClick:f}),o("div",{style:de({backgroundImage:`url('${n.url}')`,height:"calc(100vh - 16px)",width:"calc(100vw - 16px)"}),class:"ds-bg-contain ds-bg-center ds-bg-no-repeat"},null,4)]),_:1})):C("",!0)]),_:1})]))}});N.__docgenInfo={exportName:"default",displayName:"BImagePreview",description:"",tags:{},props:[{name:"modelValue",required:!0,type:{name:"boolean"}},{name:"url",required:!0,type:{name:"string"}}],events:[{name:"update:modelValue",type:{names:["boolean"]},description:"Update value, param: <code>value: boolean</code>",properties:[{type:{names:["mixed"]},description:"e"},{type:{names:["mixed"]},name:"value"}],tags:[{title:"param",type:{name:"mixed"},description:"e"},{title:"param",type:{name:"mixed"},name:"value"}]}],sourceFiles:["/home/runner/work/design-system/design-system/src/components/BImagePicker/BImagePreview.vue"]};const qe=r=>(fe("data-v-77676d6f"),r=r(),ye(),r),Le={class:"b-image-picker ds-w-full"},Se={class:"ds-gap-2 ds-space-y-4 ds-rounded-lg ds-bg-white ds-p-4 ds-drop-shadow"},Me={key:0,class:"ds-flex ds-flex-wrap ds-justify-center ds-gap-1"},ze=["onClick","onDragenter","onDragstart","onDrop"],Ee=["src"],Te=["src"],$e={class:"ds-flex ds-flex-wrap ds-justify-center"},Ne=qe(()=>o("svg",{class:"ds-absolute -ds-bottom-[3px] ds-left-0 ds-h-4 ds-w-4 ds-fill-primary-t",viewBox:"0 0 512 512",xmlns:"http://www.w3.org/2000/svg"},[o("path",{d:"M447.1 32h-384C28.64 32-.0091 60.65-.0091 96v320c0 35.35 28.65 64 63.1 64h384c35.35 0 64-28.65 64-64V96C511.1 60.65 483.3 32 447.1 32zM111.1 96c26.51 0 48 21.49 48 48S138.5 192 111.1 192s-48-21.49-48-48S85.48 96 111.1 96zM446.1 407.6C443.3 412.8 437.9 416 432 416H82.01c-6.021 0-11.53-3.379-14.26-8.75c-2.73-5.367-2.215-11.81 1.334-16.68l70-96C142.1 290.4 146.9 288 152 288s9.916 2.441 12.93 6.574l32.46 44.51l93.3-139.1C293.7 194.7 298.7 192 304 192s10.35 2.672 13.31 7.125l128 192C448.6 396 448.9 402.3 446.1 407.6z"})],-1)),Ae=["accept","multiple"],A=z({__name:"BImagePicker",props:{inputId:{default:""},modelValue:{},label:{default:""},multiple:{type:Boolean,default:!1},maxFileSize:{default:20},hideDetails:{type:Boolean,default:!1},required:{type:Boolean,default:!1},requiredErrorMessage:{default:""},validationRules:{default:void 0}},emits:["change","update:modelValue"],setup(r,{expose:c,emit:n}){const s=r,{t:f}=_e(),p=v(null),d=v(0),t=k({get(){return s.modelValue},set(e){n("update:modelValue",e)}}),b=v(!0),x=v(!0),h=v({visible:!1,url:""}),D=k(()=>q.join(", ")),U=k(()=>s.inputId||`id-${Ve()}`),O={validateRule:e=>!!e&&e.length>0,errorMessage:()=>s.requiredErrorMessage||f("ds.global.field_required")},G={validateRule:()=>b.value,errorMessage:()=>f("ds.components.base.image_picker.file_types_valid",{types:D.value})},H={validateRule:()=>x.value,errorMessage:()=>f("ds.components.base.image_picker.file_size_valid",{size:s.maxFileSize})},X=k(()=>{let e=[];return s.required&&e.push(O),s.validationRules&&(e=e.concat(s.validationRules)),e.push(G),e.push(H),e.length?e:void 0}),{validate:y,validationResult:J}=we(U.value,t,X.value),K=(e,a)=>{d.value=e,a.target.classList.add("dragging"),a.dataTransfer.effectAllowed="move",a.dataTransfer.setData("index",e.toString())},Q=e=>{e.target.classList.remove("dragging")},W=(e,a)=>{const l=a.target;d.value!==e&&l.classList.add("dropped-target")},Y=e=>{e.preventDefault(),e.dataTransfer.dropEffect="move"},Z=e=>{e.target.classList.remove("dropped-target")},ee=(e,a)=>{a.preventDefault(),a.target.classList.remove("dropped-target");const i=parseInt(a.dataTransfer.getData("index")),u=t.value[i];t.value.splice(i,1),t.value.splice(e,0,u),n("change"),y()},ae=()=>{var e;(e=p.value)==null||e.click()},se=e=>{let a=e.target.files||e.dataTransfer.files;a.length&&(te(a),p.value&&(p.value.value=null))},te=e=>{Array.from(e).forEach(a=>{if(b.value=q.includes(a.type),x.value=ne(a.size)<=s.maxFileSize,b.value&&x.value){let l=new FileReader;l.onload=i=>{s.multiple?t.value.push({url:i.target.result,file:a,type:a.type}):t.value={url:i.target.result,file:a,type:a.type},n("change"),y()},l.readAsDataURL(a)}else y()})},le=e=>{t.value.splice(e,1),n("change"),y()},re=()=>{t.value={},n("change"),y()},ne=e=>e/1024**2,F=e=>{h.value.url=e.url||"",h.value.visible=!0};return c({validate:y}),(e,a)=>(m(),_("div",Le,[g(be,{label:s.label},null,8,["label"]),o("div",Se,[R(Ce)(t.value)?C("",!0):(m(),_("div",Me,[s.multiple?(m(!0),_(ce,{key:0},pe(t.value,(l,i)=>(m(),_("div",{key:l.url,class:"b-image-picker__draggable ds-h-full ds-cursor-pointer ds-rounded-lg ds-transition-all hover:ds-ring-2 hover:ds-ring-primary-t",draggable:"true",onClick:u=>F(l),onDragend:Q,onDragenter:u=>W(i,u),onDragleave:Z,onDragover:Y,onDragstart:u=>K(i,u),onDrop:u=>ee(i,u)},[o("img",{src:l.url,alt:"image",class:"ds-h-full ds-w-full ds-rounded-lg"},null,8,Ee),g(V,{class:"ds-right-1 ds-top-1 ds-h-8 ds-w-8",onClick:P(u=>le(i),["stop"])},null,8,["onClick"])],40,ze))),128)):(m(),_("div",{key:1,class:"b-image-picker__draggable ds-h-full ds-cursor-pointer ds-rounded-lg ds-transition-all hover:ds-ring-2 hover:ds-ring-primary-t",draggable:"true",onClick:a[0]||(a[0]=l=>F(t.value))},[o("img",{src:t.value.url,alt:"image",class:"ds-h-full ds-w-full ds-rounded-lg"},null,8,Te),g(V,{class:"ds-right-1 ds-top-1 ds-h-8 ds-w-8",onClick:P(re,["stop"])},null,8,["onClick"])]))])),o("div",$e,[g(xe,{onClick:ae},{default:w(()=>[ge(ve(e.$t("ds.components.base.image_picker.select_image")),1)]),appendIcon:w(()=>[Ne]),_:1}),o("input",{ref_key:"inputRef",ref:p,accept:D.value,multiple:s.multiple,class:"ds-hidden",type:"file",onChange:se},null,40,Ae)])]),s.hideDetails?C("",!0):(m(),B(Be,{key:0,"error-message":R(J).errorMessage(),class:"ds-mt-1"},null,8,["error-message"])),g(N,{modelValue:h.value.visible,"onUpdate:modelValue":a[1]||(a[1]=l=>h.value.visible=l),url:h.value.url},null,8,["modelValue","url"])]))}});const j=T(A,[["__scopeId","data-v-77676d6f"]]);A.__docgenInfo={exportName:"default",displayName:"BImagePicker",description:"",tags:{},expose:[{name:"validate"}],props:[{name:"inputId",required:!1,type:{name:"string"},defaultValue:{func:!1,value:"''"}},{name:"modelValue",description:"Empty object <code>multiple: false</code> or empty array <code>multiple: true</code>.",required:!0,type:{name:"union",elements:[{name:"FileItemRead"},{name:"Array",elements:[{name:"FileItemRead"}]}]}},{name:"label",required:!1,type:{name:"string"},defaultValue:{func:!1,value:"''"}},{name:"multiple",description:"Allow to pick multiple images, v-model expects an array.",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"maxFileSize",description:"Maximum file size in MB.",required:!1,type:{name:"number"},defaultValue:{func:!1,value:"20"}},{name:"hideDetails",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"required",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"requiredErrorMessage",required:!1,type:{name:"string"},defaultValue:{func:!1,value:"''"}},{name:"validationRules",required:!1,type:{name:"Array",elements:[{name:"ValidationRule"}]},defaultValue:{func:!1,value:"undefined"}}],events:[{name:"change",description:"Value has been changed",properties:[{type:{names:["mixed"]},description:"e"}],tags:[{title:"param",type:{name:"mixed"},description:"e"}]},{name:"update:modelValue",type:{names:["union"],elements:[{name:"FileItemRead"},{name:"Array",elements:[{name:"FileItemRead"}]}]},description:"Update value, param: <code>value: FileItemRead | FileItemRead[]</code>",properties:[{type:{names:["mixed"]},description:"e"},{type:{names:["mixed"]},name:"value"}],tags:[{title:"param",type:{name:"mixed"},description:"e"},{title:"param",type:{name:"mixed"},name:"value"}]}],sourceFiles:["/home/runner/work/design-system/design-system/src/components/BImagePicker/BImagePicker.vue"]};const sa={title:"Components/ImagePicker",parameters:{docs:{description:{component:"The <code>BImagePicker</code> component allow to pick single or multiple images from your machine."}}},component:j,tags:["autodocs"],argTypes:{},args:{inputId:"",label:"",multiple:!1,maxFileSize:20,hideDetails:!1,required:!1,requiredErrorMessage:"",validationRules:void 0}},I={render:r=>({components:{BImagePicker:j},setup(){const c=v({}),n=v([]);return E(()=>r.multiple,()=>{c.value={},n.value=[]}),{args:r,image:c,images:n}},template:`
      <BImagePicker v-if="args.multiple" v-bind="args" v-model="images" />
      <BImagePicker v-else v-bind="args" v-model="image" />
    `}),args:{}};var L,S,M;I.parameters={...I.parameters,docs:{...(L=I.parameters)==null?void 0:L.docs,source:{originalSource:`{
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
}`,...(M=(S=I.parameters)==null?void 0:S.docs)==null?void 0:M.source}}};const ta=["Default"];export{I as Default,ta as __namedExportsOrder,sa as default};