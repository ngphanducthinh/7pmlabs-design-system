import{b as l,f as n,g as u}from"./vue.esm-bundler-54bcf90c.js";const v="formValidation";function c(o,i,r){const e=l({validate:()=>{},fieldValue:i,valid:!0,errorMessage:()=>""}),a=n(v,void 0);a&&(a[o]=e),u(()=>{a&&delete a[o]});const s=()=>{if(r){e.value.valid=!0,e.value.errorMessage=()=>"";for(let t=0;t<r.length;t++)if(!r[t].validateRule(i.value)){e.value.valid=!1,e.value.errorMessage=r[t].errorMessage;return}}};return e.value.validate=s,{validate:s,validationResult:e}}export{c as u};
//# sourceMappingURL=Validation-f8e18c0f.js.map
