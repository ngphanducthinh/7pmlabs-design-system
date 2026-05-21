import{n as e}from"./chunk-BneVvdWh.js";import{K as t,i as n}from"./iframe-BV620yWV.js";import{r,t as i}from"./BCheckbox-DSW0FZ43.js";import{a,c as o,i as s,l as c,n as l,o as ee,r as u,s as te,t as ne}from"./BForm-CouQxBl0.js";import{n as d,t as re}from"./BInput-CZc5BDW1.js";import{n as ie,t as ae}from"./BRadio-DF-S07bt.js";import{n as oe,t as se}from"./BSelect-DqvGUpXE.js";import{n as ce,t as le}from"./BSwitch-DCHAw3MK.js";var f,ue,p,m,de=e((()=>{(function(e){e.assertEqual=e=>{};function t(e){}e.assertIs=t;function n(e){throw Error()}e.assertNever=n,e.arrayToEnum=e=>{let t={};for(let n of e)t[n]=n;return t},e.getValidEnumValues=t=>{let n=e.objectKeys(t).filter(e=>typeof t[t[e]]!=`number`),r={};for(let e of n)r[e]=t[e];return e.objectValues(r)},e.objectValues=t=>e.objectKeys(t).map(function(e){return t[e]}),e.objectKeys=typeof Object.keys==`function`?e=>Object.keys(e):e=>{let t=[];for(let n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.push(n);return t},e.find=(e,t)=>{for(let n of e)if(t(n))return n},e.isInteger=typeof Number.isInteger==`function`?e=>Number.isInteger(e):e=>typeof e==`number`&&Number.isFinite(e)&&Math.floor(e)===e;function r(e,t=` | `){return e.map(e=>typeof e==`string`?`'${e}'`:e).join(t)}e.joinValues=r,e.jsonStringifyReplacer=(e,t)=>typeof t==`bigint`?t.toString():t})(f||={}),(function(e){e.mergeShapes=(e,t)=>({...e,...t})})(ue||={}),p=f.arrayToEnum([`string`,`nan`,`number`,`integer`,`float`,`boolean`,`date`,`bigint`,`symbol`,`function`,`undefined`,`null`,`array`,`object`,`unknown`,`promise`,`void`,`never`,`map`,`set`]),m=e=>{switch(typeof e){case`undefined`:return p.undefined;case`string`:return p.string;case`number`:return Number.isNaN(e)?p.nan:p.number;case`boolean`:return p.boolean;case`function`:return p.function;case`bigint`:return p.bigint;case`symbol`:return p.symbol;case`object`:return Array.isArray(e)?p.array:e===null?p.null:e.then&&typeof e.then==`function`&&e.catch&&typeof e.catch==`function`?p.promise:typeof Map<`u`&&e instanceof Map?p.map:typeof Set<`u`&&e instanceof Set?p.set:typeof Date<`u`&&e instanceof Date?p.date:p.object;default:return p.unknown}}})),h,g,fe=e((()=>{de(),h=f.arrayToEnum([`invalid_type`,`invalid_literal`,`custom`,`invalid_union`,`invalid_union_discriminator`,`invalid_enum_value`,`unrecognized_keys`,`invalid_arguments`,`invalid_return_type`,`invalid_date`,`invalid_string`,`too_small`,`too_big`,`invalid_intersection_types`,`not_multiple_of`,`not_finite`]),g=class e extends Error{get errors(){return this.issues}constructor(e){super(),this.issues=[],this.addIssue=e=>{this.issues=[...this.issues,e]},this.addIssues=(e=[])=>{this.issues=[...this.issues,...e]};let t=new.target.prototype;Object.setPrototypeOf?Object.setPrototypeOf(this,t):this.__proto__=t,this.name=`ZodError`,this.issues=e}format(e){let t=e||function(e){return e.message},n={_errors:[]},r=e=>{for(let i of e.issues)if(i.code===`invalid_union`)i.unionErrors.map(r);else if(i.code===`invalid_return_type`)r(i.returnTypeError);else if(i.code===`invalid_arguments`)r(i.argumentsError);else if(i.path.length===0)n._errors.push(t(i));else{let e=n,r=0;for(;r<i.path.length;){let n=i.path[r];r===i.path.length-1?(e[n]=e[n]||{_errors:[]},e[n]._errors.push(t(i))):e[n]=e[n]||{_errors:[]},e=e[n],r++}}};return r(this),n}static assert(t){if(!(t instanceof e))throw Error(`Not a ZodError: ${t}`)}toString(){return this.message}get message(){return JSON.stringify(this.issues,f.jsonStringifyReplacer,2)}get isEmpty(){return this.issues.length===0}flatten(e=e=>e.message){let t={},n=[];for(let r of this.issues)if(r.path.length>0){let n=r.path[0];t[n]=t[n]||[],t[n].push(e(r))}else n.push(e(r));return{formErrors:n,fieldErrors:t}}get formErrors(){return this.flatten()}},g.create=e=>new g(e)})),_,pe=e((()=>{fe(),de(),_=(e,t)=>{let n;switch(e.code){case h.invalid_type:n=e.received===p.undefined?`Required`:`Expected ${e.expected}, received ${e.received}`;break;case h.invalid_literal:n=`Invalid literal value, expected ${JSON.stringify(e.expected,f.jsonStringifyReplacer)}`;break;case h.unrecognized_keys:n=`Unrecognized key(s) in object: ${f.joinValues(e.keys,`, `)}`;break;case h.invalid_union:n=`Invalid input`;break;case h.invalid_union_discriminator:n=`Invalid discriminator value. Expected ${f.joinValues(e.options)}`;break;case h.invalid_enum_value:n=`Invalid enum value. Expected ${f.joinValues(e.options)}, received '${e.received}'`;break;case h.invalid_arguments:n=`Invalid function arguments`;break;case h.invalid_return_type:n=`Invalid function return type`;break;case h.invalid_date:n=`Invalid date`;break;case h.invalid_string:typeof e.validation==`object`?`includes`in e.validation?(n=`Invalid input: must include "${e.validation.includes}"`,typeof e.validation.position==`number`&&(n=`${n} at one or more positions greater than or equal to ${e.validation.position}`)):`startsWith`in e.validation?n=`Invalid input: must start with "${e.validation.startsWith}"`:`endsWith`in e.validation?n=`Invalid input: must end with "${e.validation.endsWith}"`:f.assertNever(e.validation):n=e.validation===`regex`?`Invalid`:`Invalid ${e.validation}`;break;case h.too_small:n=e.type===`array`?`Array must contain ${e.exact?`exactly`:e.inclusive?`at least`:`more than`} ${e.minimum} element(s)`:e.type===`string`?`String must contain ${e.exact?`exactly`:e.inclusive?`at least`:`over`} ${e.minimum} character(s)`:e.type===`number`||e.type===`bigint`?`Number must be ${e.exact?`exactly equal to `:e.inclusive?`greater than or equal to `:`greater than `}${e.minimum}`:e.type===`date`?`Date must be ${e.exact?`exactly equal to `:e.inclusive?`greater than or equal to `:`greater than `}${new Date(Number(e.minimum))}`:`Invalid input`;break;case h.too_big:n=e.type===`array`?`Array must contain ${e.exact?`exactly`:e.inclusive?`at most`:`less than`} ${e.maximum} element(s)`:e.type===`string`?`String must contain ${e.exact?`exactly`:e.inclusive?`at most`:`under`} ${e.maximum} character(s)`:e.type===`number`?`Number must be ${e.exact?`exactly`:e.inclusive?`less than or equal to`:`less than`} ${e.maximum}`:e.type===`bigint`?`BigInt must be ${e.exact?`exactly`:e.inclusive?`less than or equal to`:`less than`} ${e.maximum}`:e.type===`date`?`Date must be ${e.exact?`exactly`:e.inclusive?`smaller than or equal to`:`smaller than`} ${new Date(Number(e.maximum))}`:`Invalid input`;break;case h.custom:n=`Invalid input`;break;case h.invalid_intersection_types:n=`Intersection results could not be merged`;break;case h.not_multiple_of:n=`Number must be a multiple of ${e.multipleOf}`;break;case h.not_finite:n=`Number must be finite`;break;default:n=t.defaultError,f.assertNever(e)}return{message:n}}}));function me(){return he}var he,ge=e((()=>{pe(),he=_}));function v(e,t){let n=me(),r=_e({issueData:t,data:e.data,path:e.path,errorMaps:[e.common.contextualErrorMap,e.schemaErrorMap,n,n===_?void 0:_].filter(e=>!!e)});e.common.issues.push(r)}var _e,y,b,ve,x,ye,be,S,C,xe=e((()=>{ge(),pe(),_e=e=>{let{data:t,path:n,errorMaps:r,issueData:i}=e,a=[...n,...i.path||[]],o={...i,path:a};if(i.message!==void 0)return{...i,path:a,message:i.message};let s=``,c=r.filter(e=>!!e).slice().reverse();for(let e of c)s=e(o,{data:t,defaultError:s}).message;return{...i,path:a,message:s}},y=class e{constructor(){this.value=`valid`}dirty(){this.value===`valid`&&(this.value=`dirty`)}abort(){this.value!==`aborted`&&(this.value=`aborted`)}static mergeArray(e,t){let n=[];for(let r of t){if(r.status===`aborted`)return b;r.status===`dirty`&&e.dirty(),n.push(r.value)}return{status:e.value,value:n}}static async mergeObjectAsync(t,n){let r=[];for(let e of n){let t=await e.key,n=await e.value;r.push({key:t,value:n})}return e.mergeObjectSync(t,r)}static mergeObjectSync(e,t){let n={};for(let r of t){let{key:t,value:i}=r;if(t.status===`aborted`||i.status===`aborted`)return b;t.status===`dirty`&&e.dirty(),i.status===`dirty`&&e.dirty(),t.value!==`__proto__`&&(i.value!==void 0||r.alwaysSet)&&(n[t.value]=i.value)}return{status:e.value,value:n}}},b=Object.freeze({status:`aborted`}),ve=e=>({status:`dirty`,value:e}),x=e=>({status:`valid`,value:e}),ye=e=>e.status===`aborted`,be=e=>e.status===`dirty`,S=e=>e.status===`valid`,C=e=>typeof Promise<`u`&&e instanceof Promise})),Se=e((()=>{})),w,Ce=e((()=>{(function(e){e.errToObj=e=>typeof e==`string`?{message:e}:e||{},e.toString=e=>typeof e==`string`?e:e?.message})(w||={})}));function T(e){if(!e)return{};let{errorMap:t,invalid_type_error:n,required_error:r,description:i}=e;if(t&&(n||r))throw Error(`Can't use "invalid_type_error" or "required_error" in conjunction with custom error map.`);return t?{errorMap:t,description:i}:{errorMap:(t,i)=>{let{message:a}=e;return t.code===`invalid_enum_value`?{message:a??i.defaultError}:i.data===void 0?{message:a??r??i.defaultError}:t.code===`invalid_type`?{message:a??n??i.defaultError}:{message:i.defaultError}},description:i}}function we(e){let t=`[0-5]\\d`;e.precision?t=`${t}\\.\\d{${e.precision}}`:e.precision??(t=`${t}(\\.\\d+)?`);let n=e.precision?`+`:`?`;return`([01]\\d|2[0-3]):[0-5]\\d(:${t})${n}`}function Te(e){return RegExp(`^${we(e)}$`)}function Ee(e){let t=`${Xe}T${we(e)}`,n=[];return n.push(e.local?`Z?`:`Z`),e.offset&&n.push(`([+-]\\d{2}:?\\d{2})`),t=`${t}(${n.join(`|`)})`,RegExp(`^${t}$`)}function De(e,t){return!!((t===`v4`||!t)&&We.test(e)||(t===`v6`||!t)&&Ke.test(e))}function Oe(e,t){if(!ze.test(e))return!1;try{let[n]=e.split(`.`);if(!n)return!1;let r=n.replace(/-/g,`+`).replace(/_/g,`/`).padEnd(n.length+(4-n.length%4)%4,`=`),i=JSON.parse(atob(r));return!(typeof i!=`object`||!i||`typ`in i&&i?.typ!==`JWT`||!i.alg||t&&i.alg!==t)}catch{return!1}}function ke(e,t){return!!((t===`v4`||!t)&&Ge.test(e)||(t===`v6`||!t)&&qe.test(e))}function Ae(e,t){let n=(e.toString().split(`.`)[1]||``).length,r=(t.toString().split(`.`)[1]||``).length,i=n>r?n:r;return Number.parseInt(e.toFixed(i).replace(`.`,``))%Number.parseInt(t.toFixed(i).replace(`.`,``))/10**i}function E(e){if(e instanceof M){let t={};for(let n in e.shape){let r=e.shape[n];t[n]=L.create(E(r))}return new M({...e._def,shape:()=>t})}else if(e instanceof j)return new j({...e._def,type:E(e.element)});else if(e instanceof L)return L.create(E(e.unwrap()));else if(e instanceof R)return R.create(E(e.unwrap()));else if(e instanceof P)return P.create(e.items.map(e=>E(e)));else return e}function je(e,t){let n=m(e),r=m(t);if(e===t)return{valid:!0,data:e};if(n===p.object&&r===p.object){let n=f.objectKeys(t),r=f.objectKeys(e).filter(e=>n.indexOf(e)!==-1),i={...e,...t};for(let n of r){let r=je(e[n],t[n]);if(!r.valid)return{valid:!1};i[n]=r.data}return{valid:!0,data:i}}else if(n===p.array&&r===p.array){if(e.length!==t.length)return{valid:!1};let n=[];for(let r=0;r<e.length;r++){let i=e[r],a=t[r],o=je(i,a);if(!o.valid)return{valid:!1};n.push(o.data)}return{valid:!0,data:n}}else if(n===p.date&&r===p.date&&+e==+t)return{valid:!0,data:e};else return{valid:!1}}function Me(e,t){return new _t({values:e,typeName:z.ZodEnum,...T(t)})}var D,Ne,O,Pe,Fe,Ie,Le,Re,ze,Be,Ve,He,Ue,We,Ge,Ke,qe,Je,Ye,Xe,Ze,Qe,$e,et,tt,nt,rt,it,at,ot,k,A,st,j,M,ct,N,lt,ut,P,dt,ft,pt,mt,ht,gt,_t,vt,F,I,L,R,yt,bt,xt,St,Ct,wt,z,B,Tt,Et=e((()=>{fe(),ge(),Ce(),xe(),de(),D=class{constructor(e,t,n,r){this._cachedPath=[],this.parent=e,this.data=t,this._path=n,this._key=r}get path(){return this._cachedPath.length||(Array.isArray(this._key)?this._cachedPath.push(...this._path,...this._key):this._cachedPath.push(...this._path,this._key)),this._cachedPath}},Ne=(e,t)=>{if(S(t))return{success:!0,data:t.value};if(!e.common.issues.length)throw Error(`Validation failed but no issues detected.`);return{success:!1,get error(){return this._error||=new g(e.common.issues),this._error}}},O=class{get description(){return this._def.description}_getType(e){return m(e.data)}_getOrReturnCtx(e,t){return t||{common:e.parent.common,data:e.data,parsedType:m(e.data),schemaErrorMap:this._def.errorMap,path:e.path,parent:e.parent}}_processInputParams(e){return{status:new y,ctx:{common:e.parent.common,data:e.data,parsedType:m(e.data),schemaErrorMap:this._def.errorMap,path:e.path,parent:e.parent}}}_parseSync(e){let t=this._parse(e);if(C(t))throw Error(`Synchronous parse encountered promise.`);return t}_parseAsync(e){let t=this._parse(e);return Promise.resolve(t)}parse(e,t){let n=this.safeParse(e,t);if(n.success)return n.data;throw n.error}safeParse(e,t){let n={common:{issues:[],async:t?.async??!1,contextualErrorMap:t?.errorMap},path:t?.path||[],schemaErrorMap:this._def.errorMap,parent:null,data:e,parsedType:m(e)};return Ne(n,this._parseSync({data:e,path:n.path,parent:n}))}"~validate"(e){let t={common:{issues:[],async:!!this[`~standard`].async},path:[],schemaErrorMap:this._def.errorMap,parent:null,data:e,parsedType:m(e)};if(!this[`~standard`].async)try{let n=this._parseSync({data:e,path:[],parent:t});return S(n)?{value:n.value}:{issues:t.common.issues}}catch(e){e?.message?.toLowerCase()?.includes(`encountered`)&&(this[`~standard`].async=!0),t.common={issues:[],async:!0}}return this._parseAsync({data:e,path:[],parent:t}).then(e=>S(e)?{value:e.value}:{issues:t.common.issues})}async parseAsync(e,t){let n=await this.safeParseAsync(e,t);if(n.success)return n.data;throw n.error}async safeParseAsync(e,t){let n={common:{issues:[],contextualErrorMap:t?.errorMap,async:!0},path:t?.path||[],schemaErrorMap:this._def.errorMap,parent:null,data:e,parsedType:m(e)},r=this._parse({data:e,path:n.path,parent:n});return Ne(n,await(C(r)?r:Promise.resolve(r)))}refine(e,t){let n=e=>typeof t==`string`||t===void 0?{message:t}:typeof t==`function`?t(e):t;return this._refinement((t,r)=>{let i=e(t),a=()=>r.addIssue({code:h.custom,...n(t)});return typeof Promise<`u`&&i instanceof Promise?i.then(e=>e?!0:(a(),!1)):i?!0:(a(),!1)})}refinement(e,t){return this._refinement((n,r)=>e(n)?!0:(r.addIssue(typeof t==`function`?t(n,r):t),!1))}_refinement(e){return new I({schema:this,typeName:z.ZodEffects,effect:{type:`refinement`,refinement:e}})}superRefine(e){return this._refinement(e)}constructor(e){this.spa=this.safeParseAsync,this._def=e,this.parse=this.parse.bind(this),this.safeParse=this.safeParse.bind(this),this.parseAsync=this.parseAsync.bind(this),this.safeParseAsync=this.safeParseAsync.bind(this),this.spa=this.spa.bind(this),this.refine=this.refine.bind(this),this.refinement=this.refinement.bind(this),this.superRefine=this.superRefine.bind(this),this.optional=this.optional.bind(this),this.nullable=this.nullable.bind(this),this.nullish=this.nullish.bind(this),this.array=this.array.bind(this),this.promise=this.promise.bind(this),this.or=this.or.bind(this),this.and=this.and.bind(this),this.transform=this.transform.bind(this),this.brand=this.brand.bind(this),this.default=this.default.bind(this),this.catch=this.catch.bind(this),this.describe=this.describe.bind(this),this.pipe=this.pipe.bind(this),this.readonly=this.readonly.bind(this),this.isNullable=this.isNullable.bind(this),this.isOptional=this.isOptional.bind(this),this[`~standard`]={version:1,vendor:`zod`,validate:e=>this[`~validate`](e)}}optional(){return L.create(this,this._def)}nullable(){return R.create(this,this._def)}nullish(){return this.nullable().optional()}array(){return j.create(this)}promise(){return F.create(this,this._def)}or(e){return ct.create([this,e],this._def)}and(e){return ut.create(this,e,this._def)}transform(e){return new I({...T(this._def),schema:this,typeName:z.ZodEffects,effect:{type:`transform`,transform:e}})}default(e){let t=typeof e==`function`?e:()=>e;return new yt({...T(this._def),innerType:this,defaultValue:t,typeName:z.ZodDefault})}brand(){return new St({typeName:z.ZodBranded,type:this,...T(this._def)})}catch(e){let t=typeof e==`function`?e:()=>e;return new bt({...T(this._def),innerType:this,catchValue:t,typeName:z.ZodCatch})}describe(e){let t=this.constructor;return new t({...this._def,description:e})}pipe(e){return Ct.create(this,e)}readonly(){return wt.create(this)}isOptional(){return this.safeParse(void 0).success}isNullable(){return this.safeParse(null).success}},Pe=/^c[^\s-]{8,}$/i,Fe=/^[0-9a-z]+$/,Ie=/^[0-9A-HJKMNP-TV-Z]{26}$/i,Le=/^[0-9a-fA-F]{8}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{12}$/i,Re=/^[a-z0-9_-]{21}$/i,ze=/^[A-Za-z0-9-_]+\.[A-Za-z0-9-_]+\.[A-Za-z0-9-_]*$/,Be=/^[-+]?P(?!$)(?:(?:[-+]?\d+Y)|(?:[-+]?\d+[.,]\d+Y$))?(?:(?:[-+]?\d+M)|(?:[-+]?\d+[.,]\d+M$))?(?:(?:[-+]?\d+W)|(?:[-+]?\d+[.,]\d+W$))?(?:(?:[-+]?\d+D)|(?:[-+]?\d+[.,]\d+D$))?(?:T(?=[\d+-])(?:(?:[-+]?\d+H)|(?:[-+]?\d+[.,]\d+H$))?(?:(?:[-+]?\d+M)|(?:[-+]?\d+[.,]\d+M$))?(?:[-+]?\d+(?:[.,]\d+)?S)?)??$/,Ve=/^(?!\.)(?!.*\.\.)([A-Z0-9_'+\-\.]*)[A-Z0-9_+-]@([A-Z0-9][A-Z0-9\-]*\.)+[A-Z]{2,}$/i,He=`^(\\p{Extended_Pictographic}|\\p{Emoji_Component})+$`,We=/^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])$/,Ge=/^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\/(3[0-2]|[12]?[0-9])$/,Ke=/^(([0-9a-fA-F]{1,4}:){7,7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:)|fe80:(:[0-9a-fA-F]{0,4}){0,4}%[0-9a-zA-Z]{1,}|::(ffff(:0{1,4}){0,1}:){0,1}((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])|([0-9a-fA-F]{1,4}:){1,4}:((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9]))$/,qe=/^(([0-9a-fA-F]{1,4}:){7,7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:)|fe80:(:[0-9a-fA-F]{0,4}){0,4}%[0-9a-zA-Z]{1,}|::(ffff(:0{1,4}){0,1}:){0,1}((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])|([0-9a-fA-F]{1,4}:){1,4}:((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9]))\/(12[0-8]|1[01][0-9]|[1-9]?[0-9])$/,Je=/^([0-9a-zA-Z+/]{4})*(([0-9a-zA-Z+/]{2}==)|([0-9a-zA-Z+/]{3}=))?$/,Ye=/^([0-9a-zA-Z-_]{4})*(([0-9a-zA-Z-_]{2}(==)?)|([0-9a-zA-Z-_]{3}(=)?))?$/,Xe=`((\\d\\d[2468][048]|\\d\\d[13579][26]|\\d\\d0[48]|[02468][048]00|[13579][26]00)-02-29|\\d{4}-((0[13578]|1[02])-(0[1-9]|[12]\\d|3[01])|(0[469]|11)-(0[1-9]|[12]\\d|30)|(02)-(0[1-9]|1\\d|2[0-8])))`,Ze=RegExp(`^${Xe}$`),Qe=class e extends O{_parse(e){if(this._def.coerce&&(e.data=String(e.data)),this._getType(e)!==p.string){let t=this._getOrReturnCtx(e);return v(t,{code:h.invalid_type,expected:p.string,received:t.parsedType}),b}let t=new y,n;for(let r of this._def.checks)if(r.kind===`min`)e.data.length<r.value&&(n=this._getOrReturnCtx(e,n),v(n,{code:h.too_small,minimum:r.value,type:`string`,inclusive:!0,exact:!1,message:r.message}),t.dirty());else if(r.kind===`max`)e.data.length>r.value&&(n=this._getOrReturnCtx(e,n),v(n,{code:h.too_big,maximum:r.value,type:`string`,inclusive:!0,exact:!1,message:r.message}),t.dirty());else if(r.kind===`length`){let i=e.data.length>r.value,a=e.data.length<r.value;(i||a)&&(n=this._getOrReturnCtx(e,n),i?v(n,{code:h.too_big,maximum:r.value,type:`string`,inclusive:!0,exact:!0,message:r.message}):a&&v(n,{code:h.too_small,minimum:r.value,type:`string`,inclusive:!0,exact:!0,message:r.message}),t.dirty())}else if(r.kind===`email`)Ve.test(e.data)||(n=this._getOrReturnCtx(e,n),v(n,{validation:`email`,code:h.invalid_string,message:r.message}),t.dirty());else if(r.kind===`emoji`)Ue||=new RegExp(He,`u`),Ue.test(e.data)||(n=this._getOrReturnCtx(e,n),v(n,{validation:`emoji`,code:h.invalid_string,message:r.message}),t.dirty());else if(r.kind===`uuid`)Le.test(e.data)||(n=this._getOrReturnCtx(e,n),v(n,{validation:`uuid`,code:h.invalid_string,message:r.message}),t.dirty());else if(r.kind===`nanoid`)Re.test(e.data)||(n=this._getOrReturnCtx(e,n),v(n,{validation:`nanoid`,code:h.invalid_string,message:r.message}),t.dirty());else if(r.kind===`cuid`)Pe.test(e.data)||(n=this._getOrReturnCtx(e,n),v(n,{validation:`cuid`,code:h.invalid_string,message:r.message}),t.dirty());else if(r.kind===`cuid2`)Fe.test(e.data)||(n=this._getOrReturnCtx(e,n),v(n,{validation:`cuid2`,code:h.invalid_string,message:r.message}),t.dirty());else if(r.kind===`ulid`)Ie.test(e.data)||(n=this._getOrReturnCtx(e,n),v(n,{validation:`ulid`,code:h.invalid_string,message:r.message}),t.dirty());else if(r.kind===`url`)try{new URL(e.data)}catch{n=this._getOrReturnCtx(e,n),v(n,{validation:`url`,code:h.invalid_string,message:r.message}),t.dirty()}else r.kind===`regex`?(r.regex.lastIndex=0,r.regex.test(e.data)||(n=this._getOrReturnCtx(e,n),v(n,{validation:`regex`,code:h.invalid_string,message:r.message}),t.dirty())):r.kind===`trim`?e.data=e.data.trim():r.kind===`includes`?e.data.includes(r.value,r.position)||(n=this._getOrReturnCtx(e,n),v(n,{code:h.invalid_string,validation:{includes:r.value,position:r.position},message:r.message}),t.dirty()):r.kind===`toLowerCase`?e.data=e.data.toLowerCase():r.kind===`toUpperCase`?e.data=e.data.toUpperCase():r.kind===`startsWith`?e.data.startsWith(r.value)||(n=this._getOrReturnCtx(e,n),v(n,{code:h.invalid_string,validation:{startsWith:r.value},message:r.message}),t.dirty()):r.kind===`endsWith`?e.data.endsWith(r.value)||(n=this._getOrReturnCtx(e,n),v(n,{code:h.invalid_string,validation:{endsWith:r.value},message:r.message}),t.dirty()):r.kind===`datetime`?Ee(r).test(e.data)||(n=this._getOrReturnCtx(e,n),v(n,{code:h.invalid_string,validation:`datetime`,message:r.message}),t.dirty()):r.kind===`date`?Ze.test(e.data)||(n=this._getOrReturnCtx(e,n),v(n,{code:h.invalid_string,validation:`date`,message:r.message}),t.dirty()):r.kind===`time`?Te(r).test(e.data)||(n=this._getOrReturnCtx(e,n),v(n,{code:h.invalid_string,validation:`time`,message:r.message}),t.dirty()):r.kind===`duration`?Be.test(e.data)||(n=this._getOrReturnCtx(e,n),v(n,{validation:`duration`,code:h.invalid_string,message:r.message}),t.dirty()):r.kind===`ip`?De(e.data,r.version)||(n=this._getOrReturnCtx(e,n),v(n,{validation:`ip`,code:h.invalid_string,message:r.message}),t.dirty()):r.kind===`jwt`?Oe(e.data,r.alg)||(n=this._getOrReturnCtx(e,n),v(n,{validation:`jwt`,code:h.invalid_string,message:r.message}),t.dirty()):r.kind===`cidr`?ke(e.data,r.version)||(n=this._getOrReturnCtx(e,n),v(n,{validation:`cidr`,code:h.invalid_string,message:r.message}),t.dirty()):r.kind===`base64`?Je.test(e.data)||(n=this._getOrReturnCtx(e,n),v(n,{validation:`base64`,code:h.invalid_string,message:r.message}),t.dirty()):r.kind===`base64url`?Ye.test(e.data)||(n=this._getOrReturnCtx(e,n),v(n,{validation:`base64url`,code:h.invalid_string,message:r.message}),t.dirty()):f.assertNever(r);return{status:t.value,value:e.data}}_regex(e,t,n){return this.refinement(t=>e.test(t),{validation:t,code:h.invalid_string,...w.errToObj(n)})}_addCheck(t){return new e({...this._def,checks:[...this._def.checks,t]})}email(e){return this._addCheck({kind:`email`,...w.errToObj(e)})}url(e){return this._addCheck({kind:`url`,...w.errToObj(e)})}emoji(e){return this._addCheck({kind:`emoji`,...w.errToObj(e)})}uuid(e){return this._addCheck({kind:`uuid`,...w.errToObj(e)})}nanoid(e){return this._addCheck({kind:`nanoid`,...w.errToObj(e)})}cuid(e){return this._addCheck({kind:`cuid`,...w.errToObj(e)})}cuid2(e){return this._addCheck({kind:`cuid2`,...w.errToObj(e)})}ulid(e){return this._addCheck({kind:`ulid`,...w.errToObj(e)})}base64(e){return this._addCheck({kind:`base64`,...w.errToObj(e)})}base64url(e){return this._addCheck({kind:`base64url`,...w.errToObj(e)})}jwt(e){return this._addCheck({kind:`jwt`,...w.errToObj(e)})}ip(e){return this._addCheck({kind:`ip`,...w.errToObj(e)})}cidr(e){return this._addCheck({kind:`cidr`,...w.errToObj(e)})}datetime(e){return typeof e==`string`?this._addCheck({kind:`datetime`,precision:null,offset:!1,local:!1,message:e}):this._addCheck({kind:`datetime`,precision:e?.precision===void 0?null:e?.precision,offset:e?.offset??!1,local:e?.local??!1,...w.errToObj(e?.message)})}date(e){return this._addCheck({kind:`date`,message:e})}time(e){return typeof e==`string`?this._addCheck({kind:`time`,precision:null,message:e}):this._addCheck({kind:`time`,precision:e?.precision===void 0?null:e?.precision,...w.errToObj(e?.message)})}duration(e){return this._addCheck({kind:`duration`,...w.errToObj(e)})}regex(e,t){return this._addCheck({kind:`regex`,regex:e,...w.errToObj(t)})}includes(e,t){return this._addCheck({kind:`includes`,value:e,position:t?.position,...w.errToObj(t?.message)})}startsWith(e,t){return this._addCheck({kind:`startsWith`,value:e,...w.errToObj(t)})}endsWith(e,t){return this._addCheck({kind:`endsWith`,value:e,...w.errToObj(t)})}min(e,t){return this._addCheck({kind:`min`,value:e,...w.errToObj(t)})}max(e,t){return this._addCheck({kind:`max`,value:e,...w.errToObj(t)})}length(e,t){return this._addCheck({kind:`length`,value:e,...w.errToObj(t)})}nonempty(e){return this.min(1,w.errToObj(e))}trim(){return new e({...this._def,checks:[...this._def.checks,{kind:`trim`}]})}toLowerCase(){return new e({...this._def,checks:[...this._def.checks,{kind:`toLowerCase`}]})}toUpperCase(){return new e({...this._def,checks:[...this._def.checks,{kind:`toUpperCase`}]})}get isDatetime(){return!!this._def.checks.find(e=>e.kind===`datetime`)}get isDate(){return!!this._def.checks.find(e=>e.kind===`date`)}get isTime(){return!!this._def.checks.find(e=>e.kind===`time`)}get isDuration(){return!!this._def.checks.find(e=>e.kind===`duration`)}get isEmail(){return!!this._def.checks.find(e=>e.kind===`email`)}get isURL(){return!!this._def.checks.find(e=>e.kind===`url`)}get isEmoji(){return!!this._def.checks.find(e=>e.kind===`emoji`)}get isUUID(){return!!this._def.checks.find(e=>e.kind===`uuid`)}get isNANOID(){return!!this._def.checks.find(e=>e.kind===`nanoid`)}get isCUID(){return!!this._def.checks.find(e=>e.kind===`cuid`)}get isCUID2(){return!!this._def.checks.find(e=>e.kind===`cuid2`)}get isULID(){return!!this._def.checks.find(e=>e.kind===`ulid`)}get isIP(){return!!this._def.checks.find(e=>e.kind===`ip`)}get isCIDR(){return!!this._def.checks.find(e=>e.kind===`cidr`)}get isBase64(){return!!this._def.checks.find(e=>e.kind===`base64`)}get isBase64url(){return!!this._def.checks.find(e=>e.kind===`base64url`)}get minLength(){let e=null;for(let t of this._def.checks)t.kind===`min`&&(e===null||t.value>e)&&(e=t.value);return e}get maxLength(){let e=null;for(let t of this._def.checks)t.kind===`max`&&(e===null||t.value<e)&&(e=t.value);return e}},Qe.create=e=>new Qe({checks:[],typeName:z.ZodString,coerce:e?.coerce??!1,...T(e)}),$e=class e extends O{constructor(){super(...arguments),this.min=this.gte,this.max=this.lte,this.step=this.multipleOf}_parse(e){if(this._def.coerce&&(e.data=Number(e.data)),this._getType(e)!==p.number){let t=this._getOrReturnCtx(e);return v(t,{code:h.invalid_type,expected:p.number,received:t.parsedType}),b}let t,n=new y;for(let r of this._def.checks)r.kind===`int`?f.isInteger(e.data)||(t=this._getOrReturnCtx(e,t),v(t,{code:h.invalid_type,expected:`integer`,received:`float`,message:r.message}),n.dirty()):r.kind===`min`?(r.inclusive?e.data<r.value:e.data<=r.value)&&(t=this._getOrReturnCtx(e,t),v(t,{code:h.too_small,minimum:r.value,type:`number`,inclusive:r.inclusive,exact:!1,message:r.message}),n.dirty()):r.kind===`max`?(r.inclusive?e.data>r.value:e.data>=r.value)&&(t=this._getOrReturnCtx(e,t),v(t,{code:h.too_big,maximum:r.value,type:`number`,inclusive:r.inclusive,exact:!1,message:r.message}),n.dirty()):r.kind===`multipleOf`?Ae(e.data,r.value)!==0&&(t=this._getOrReturnCtx(e,t),v(t,{code:h.not_multiple_of,multipleOf:r.value,message:r.message}),n.dirty()):r.kind===`finite`?Number.isFinite(e.data)||(t=this._getOrReturnCtx(e,t),v(t,{code:h.not_finite,message:r.message}),n.dirty()):f.assertNever(r);return{status:n.value,value:e.data}}gte(e,t){return this.setLimit(`min`,e,!0,w.toString(t))}gt(e,t){return this.setLimit(`min`,e,!1,w.toString(t))}lte(e,t){return this.setLimit(`max`,e,!0,w.toString(t))}lt(e,t){return this.setLimit(`max`,e,!1,w.toString(t))}setLimit(t,n,r,i){return new e({...this._def,checks:[...this._def.checks,{kind:t,value:n,inclusive:r,message:w.toString(i)}]})}_addCheck(t){return new e({...this._def,checks:[...this._def.checks,t]})}int(e){return this._addCheck({kind:`int`,message:w.toString(e)})}positive(e){return this._addCheck({kind:`min`,value:0,inclusive:!1,message:w.toString(e)})}negative(e){return this._addCheck({kind:`max`,value:0,inclusive:!1,message:w.toString(e)})}nonpositive(e){return this._addCheck({kind:`max`,value:0,inclusive:!0,message:w.toString(e)})}nonnegative(e){return this._addCheck({kind:`min`,value:0,inclusive:!0,message:w.toString(e)})}multipleOf(e,t){return this._addCheck({kind:`multipleOf`,value:e,message:w.toString(t)})}finite(e){return this._addCheck({kind:`finite`,message:w.toString(e)})}safe(e){return this._addCheck({kind:`min`,inclusive:!0,value:-(2**53-1),message:w.toString(e)})._addCheck({kind:`max`,inclusive:!0,value:2**53-1,message:w.toString(e)})}get minValue(){let e=null;for(let t of this._def.checks)t.kind===`min`&&(e===null||t.value>e)&&(e=t.value);return e}get maxValue(){let e=null;for(let t of this._def.checks)t.kind===`max`&&(e===null||t.value<e)&&(e=t.value);return e}get isInt(){return!!this._def.checks.find(e=>e.kind===`int`||e.kind===`multipleOf`&&f.isInteger(e.value))}get isFinite(){let e=null,t=null;for(let n of this._def.checks)if(n.kind===`finite`||n.kind===`int`||n.kind===`multipleOf`)return!0;else n.kind===`min`?(t===null||n.value>t)&&(t=n.value):n.kind===`max`&&(e===null||n.value<e)&&(e=n.value);return Number.isFinite(t)&&Number.isFinite(e)}},$e.create=e=>new $e({checks:[],typeName:z.ZodNumber,coerce:e?.coerce||!1,...T(e)}),et=class e extends O{constructor(){super(...arguments),this.min=this.gte,this.max=this.lte}_parse(e){if(this._def.coerce)try{e.data=BigInt(e.data)}catch{return this._getInvalidInput(e)}if(this._getType(e)!==p.bigint)return this._getInvalidInput(e);let t,n=new y;for(let r of this._def.checks)r.kind===`min`?(r.inclusive?e.data<r.value:e.data<=r.value)&&(t=this._getOrReturnCtx(e,t),v(t,{code:h.too_small,type:`bigint`,minimum:r.value,inclusive:r.inclusive,message:r.message}),n.dirty()):r.kind===`max`?(r.inclusive?e.data>r.value:e.data>=r.value)&&(t=this._getOrReturnCtx(e,t),v(t,{code:h.too_big,type:`bigint`,maximum:r.value,inclusive:r.inclusive,message:r.message}),n.dirty()):r.kind===`multipleOf`?e.data%r.value!==BigInt(0)&&(t=this._getOrReturnCtx(e,t),v(t,{code:h.not_multiple_of,multipleOf:r.value,message:r.message}),n.dirty()):f.assertNever(r);return{status:n.value,value:e.data}}_getInvalidInput(e){let t=this._getOrReturnCtx(e);return v(t,{code:h.invalid_type,expected:p.bigint,received:t.parsedType}),b}gte(e,t){return this.setLimit(`min`,e,!0,w.toString(t))}gt(e,t){return this.setLimit(`min`,e,!1,w.toString(t))}lte(e,t){return this.setLimit(`max`,e,!0,w.toString(t))}lt(e,t){return this.setLimit(`max`,e,!1,w.toString(t))}setLimit(t,n,r,i){return new e({...this._def,checks:[...this._def.checks,{kind:t,value:n,inclusive:r,message:w.toString(i)}]})}_addCheck(t){return new e({...this._def,checks:[...this._def.checks,t]})}positive(e){return this._addCheck({kind:`min`,value:BigInt(0),inclusive:!1,message:w.toString(e)})}negative(e){return this._addCheck({kind:`max`,value:BigInt(0),inclusive:!1,message:w.toString(e)})}nonpositive(e){return this._addCheck({kind:`max`,value:BigInt(0),inclusive:!0,message:w.toString(e)})}nonnegative(e){return this._addCheck({kind:`min`,value:BigInt(0),inclusive:!0,message:w.toString(e)})}multipleOf(e,t){return this._addCheck({kind:`multipleOf`,value:e,message:w.toString(t)})}get minValue(){let e=null;for(let t of this._def.checks)t.kind===`min`&&(e===null||t.value>e)&&(e=t.value);return e}get maxValue(){let e=null;for(let t of this._def.checks)t.kind===`max`&&(e===null||t.value<e)&&(e=t.value);return e}},et.create=e=>new et({checks:[],typeName:z.ZodBigInt,coerce:e?.coerce??!1,...T(e)}),tt=class extends O{_parse(e){if(this._def.coerce&&(e.data=!!e.data),this._getType(e)!==p.boolean){let t=this._getOrReturnCtx(e);return v(t,{code:h.invalid_type,expected:p.boolean,received:t.parsedType}),b}return x(e.data)}},tt.create=e=>new tt({typeName:z.ZodBoolean,coerce:e?.coerce||!1,...T(e)}),nt=class e extends O{_parse(e){if(this._def.coerce&&(e.data=new Date(e.data)),this._getType(e)!==p.date){let t=this._getOrReturnCtx(e);return v(t,{code:h.invalid_type,expected:p.date,received:t.parsedType}),b}if(Number.isNaN(e.data.getTime()))return v(this._getOrReturnCtx(e),{code:h.invalid_date}),b;let t=new y,n;for(let r of this._def.checks)r.kind===`min`?e.data.getTime()<r.value&&(n=this._getOrReturnCtx(e,n),v(n,{code:h.too_small,message:r.message,inclusive:!0,exact:!1,minimum:r.value,type:`date`}),t.dirty()):r.kind===`max`?e.data.getTime()>r.value&&(n=this._getOrReturnCtx(e,n),v(n,{code:h.too_big,message:r.message,inclusive:!0,exact:!1,maximum:r.value,type:`date`}),t.dirty()):f.assertNever(r);return{status:t.value,value:new Date(e.data.getTime())}}_addCheck(t){return new e({...this._def,checks:[...this._def.checks,t]})}min(e,t){return this._addCheck({kind:`min`,value:e.getTime(),message:w.toString(t)})}max(e,t){return this._addCheck({kind:`max`,value:e.getTime(),message:w.toString(t)})}get minDate(){let e=null;for(let t of this._def.checks)t.kind===`min`&&(e===null||t.value>e)&&(e=t.value);return e==null?null:new Date(e)}get maxDate(){let e=null;for(let t of this._def.checks)t.kind===`max`&&(e===null||t.value<e)&&(e=t.value);return e==null?null:new Date(e)}},nt.create=e=>new nt({checks:[],coerce:e?.coerce||!1,typeName:z.ZodDate,...T(e)}),rt=class extends O{_parse(e){if(this._getType(e)!==p.symbol){let t=this._getOrReturnCtx(e);return v(t,{code:h.invalid_type,expected:p.symbol,received:t.parsedType}),b}return x(e.data)}},rt.create=e=>new rt({typeName:z.ZodSymbol,...T(e)}),it=class extends O{_parse(e){if(this._getType(e)!==p.undefined){let t=this._getOrReturnCtx(e);return v(t,{code:h.invalid_type,expected:p.undefined,received:t.parsedType}),b}return x(e.data)}},it.create=e=>new it({typeName:z.ZodUndefined,...T(e)}),at=class extends O{_parse(e){if(this._getType(e)!==p.null){let t=this._getOrReturnCtx(e);return v(t,{code:h.invalid_type,expected:p.null,received:t.parsedType}),b}return x(e.data)}},at.create=e=>new at({typeName:z.ZodNull,...T(e)}),ot=class extends O{constructor(){super(...arguments),this._any=!0}_parse(e){return x(e.data)}},ot.create=e=>new ot({typeName:z.ZodAny,...T(e)}),k=class extends O{constructor(){super(...arguments),this._unknown=!0}_parse(e){return x(e.data)}},k.create=e=>new k({typeName:z.ZodUnknown,...T(e)}),A=class extends O{_parse(e){let t=this._getOrReturnCtx(e);return v(t,{code:h.invalid_type,expected:p.never,received:t.parsedType}),b}},A.create=e=>new A({typeName:z.ZodNever,...T(e)}),st=class extends O{_parse(e){if(this._getType(e)!==p.undefined){let t=this._getOrReturnCtx(e);return v(t,{code:h.invalid_type,expected:p.void,received:t.parsedType}),b}return x(e.data)}},st.create=e=>new st({typeName:z.ZodVoid,...T(e)}),j=class e extends O{_parse(e){let{ctx:t,status:n}=this._processInputParams(e),r=this._def;if(t.parsedType!==p.array)return v(t,{code:h.invalid_type,expected:p.array,received:t.parsedType}),b;if(r.exactLength!==null){let e=t.data.length>r.exactLength.value,i=t.data.length<r.exactLength.value;(e||i)&&(v(t,{code:e?h.too_big:h.too_small,minimum:i?r.exactLength.value:void 0,maximum:e?r.exactLength.value:void 0,type:`array`,inclusive:!0,exact:!0,message:r.exactLength.message}),n.dirty())}if(r.minLength!==null&&t.data.length<r.minLength.value&&(v(t,{code:h.too_small,minimum:r.minLength.value,type:`array`,inclusive:!0,exact:!1,message:r.minLength.message}),n.dirty()),r.maxLength!==null&&t.data.length>r.maxLength.value&&(v(t,{code:h.too_big,maximum:r.maxLength.value,type:`array`,inclusive:!0,exact:!1,message:r.maxLength.message}),n.dirty()),t.common.async)return Promise.all([...t.data].map((e,n)=>r.type._parseAsync(new D(t,e,t.path,n)))).then(e=>y.mergeArray(n,e));let i=[...t.data].map((e,n)=>r.type._parseSync(new D(t,e,t.path,n)));return y.mergeArray(n,i)}get element(){return this._def.type}min(t,n){return new e({...this._def,minLength:{value:t,message:w.toString(n)}})}max(t,n){return new e({...this._def,maxLength:{value:t,message:w.toString(n)}})}length(t,n){return new e({...this._def,exactLength:{value:t,message:w.toString(n)}})}nonempty(e){return this.min(1,e)}},j.create=(e,t)=>new j({type:e,minLength:null,maxLength:null,exactLength:null,typeName:z.ZodArray,...T(t)}),M=class e extends O{constructor(){super(...arguments),this._cached=null,this.nonstrict=this.passthrough,this.augment=this.extend}_getCached(){if(this._cached!==null)return this._cached;let e=this._def.shape();return this._cached={shape:e,keys:f.objectKeys(e)},this._cached}_parse(e){if(this._getType(e)!==p.object){let t=this._getOrReturnCtx(e);return v(t,{code:h.invalid_type,expected:p.object,received:t.parsedType}),b}let{status:t,ctx:n}=this._processInputParams(e),{shape:r,keys:i}=this._getCached(),a=[];if(!(this._def.catchall instanceof A&&this._def.unknownKeys===`strip`))for(let e in n.data)i.includes(e)||a.push(e);let o=[];for(let e of i){let t=r[e],i=n.data[e];o.push({key:{status:`valid`,value:e},value:t._parse(new D(n,i,n.path,e)),alwaysSet:e in n.data})}if(this._def.catchall instanceof A){let e=this._def.unknownKeys;if(e===`passthrough`)for(let e of a)o.push({key:{status:`valid`,value:e},value:{status:`valid`,value:n.data[e]}});else if(e===`strict`)a.length>0&&(v(n,{code:h.unrecognized_keys,keys:a}),t.dirty());else if(e!==`strip`)throw Error(`Internal ZodObject error: invalid unknownKeys value.`)}else{let e=this._def.catchall;for(let t of a){let r=n.data[t];o.push({key:{status:`valid`,value:t},value:e._parse(new D(n,r,n.path,t)),alwaysSet:t in n.data})}}return n.common.async?Promise.resolve().then(async()=>{let e=[];for(let t of o){let n=await t.key,r=await t.value;e.push({key:n,value:r,alwaysSet:t.alwaysSet})}return e}).then(e=>y.mergeObjectSync(t,e)):y.mergeObjectSync(t,o)}get shape(){return this._def.shape()}strict(t){return w.errToObj,new e({...this._def,unknownKeys:`strict`,...t===void 0?{}:{errorMap:(e,n)=>{let r=this._def.errorMap?.(e,n).message??n.defaultError;return e.code===`unrecognized_keys`?{message:w.errToObj(t).message??r}:{message:r}}}})}strip(){return new e({...this._def,unknownKeys:`strip`})}passthrough(){return new e({...this._def,unknownKeys:`passthrough`})}extend(t){return new e({...this._def,shape:()=>({...this._def.shape(),...t})})}merge(t){return new e({unknownKeys:t._def.unknownKeys,catchall:t._def.catchall,shape:()=>({...this._def.shape(),...t._def.shape()}),typeName:z.ZodObject})}setKey(e,t){return this.augment({[e]:t})}catchall(t){return new e({...this._def,catchall:t})}pick(t){let n={};for(let e of f.objectKeys(t))t[e]&&this.shape[e]&&(n[e]=this.shape[e]);return new e({...this._def,shape:()=>n})}omit(t){let n={};for(let e of f.objectKeys(this.shape))t[e]||(n[e]=this.shape[e]);return new e({...this._def,shape:()=>n})}deepPartial(){return E(this)}partial(t){let n={};for(let e of f.objectKeys(this.shape)){let r=this.shape[e];t&&!t[e]?n[e]=r:n[e]=r.optional()}return new e({...this._def,shape:()=>n})}required(t){let n={};for(let e of f.objectKeys(this.shape))if(t&&!t[e])n[e]=this.shape[e];else{let t=this.shape[e];for(;t instanceof L;)t=t._def.innerType;n[e]=t}return new e({...this._def,shape:()=>n})}keyof(){return Me(f.objectKeys(this.shape))}},M.create=(e,t)=>new M({shape:()=>e,unknownKeys:`strip`,catchall:A.create(),typeName:z.ZodObject,...T(t)}),M.strictCreate=(e,t)=>new M({shape:()=>e,unknownKeys:`strict`,catchall:A.create(),typeName:z.ZodObject,...T(t)}),M.lazycreate=(e,t)=>new M({shape:e,unknownKeys:`strip`,catchall:A.create(),typeName:z.ZodObject,...T(t)}),ct=class extends O{_parse(e){let{ctx:t}=this._processInputParams(e),n=this._def.options;function r(e){for(let t of e)if(t.result.status===`valid`)return t.result;for(let n of e)if(n.result.status===`dirty`)return t.common.issues.push(...n.ctx.common.issues),n.result;let n=e.map(e=>new g(e.ctx.common.issues));return v(t,{code:h.invalid_union,unionErrors:n}),b}if(t.common.async)return Promise.all(n.map(async e=>{let n={...t,common:{...t.common,issues:[]},parent:null};return{result:await e._parseAsync({data:t.data,path:t.path,parent:n}),ctx:n}})).then(r);{let e,r=[];for(let i of n){let n={...t,common:{...t.common,issues:[]},parent:null},a=i._parseSync({data:t.data,path:t.path,parent:n});if(a.status===`valid`)return a;a.status===`dirty`&&!e&&(e={result:a,ctx:n}),n.common.issues.length&&r.push(n.common.issues)}if(e)return t.common.issues.push(...e.ctx.common.issues),e.result;let i=r.map(e=>new g(e));return v(t,{code:h.invalid_union,unionErrors:i}),b}}get options(){return this._def.options}},ct.create=(e,t)=>new ct({options:e,typeName:z.ZodUnion,...T(t)}),N=e=>e instanceof ht?N(e.schema):e instanceof I?N(e.innerType()):e instanceof gt?[e.value]:e instanceof _t?e.options:e instanceof vt?f.objectValues(e.enum):e instanceof yt?N(e._def.innerType):e instanceof it?[void 0]:e instanceof at?[null]:e instanceof L?[void 0,...N(e.unwrap())]:e instanceof R?[null,...N(e.unwrap())]:e instanceof St||e instanceof wt?N(e.unwrap()):e instanceof bt?N(e._def.innerType):[],lt=class e extends O{_parse(e){let{ctx:t}=this._processInputParams(e);if(t.parsedType!==p.object)return v(t,{code:h.invalid_type,expected:p.object,received:t.parsedType}),b;let n=this.discriminator,r=t.data[n],i=this.optionsMap.get(r);return i?t.common.async?i._parseAsync({data:t.data,path:t.path,parent:t}):i._parseSync({data:t.data,path:t.path,parent:t}):(v(t,{code:h.invalid_union_discriminator,options:Array.from(this.optionsMap.keys()),path:[n]}),b)}get discriminator(){return this._def.discriminator}get options(){return this._def.options}get optionsMap(){return this._def.optionsMap}static create(t,n,r){let i=new Map;for(let e of n){let n=N(e.shape[t]);if(!n.length)throw Error(`A discriminator value for key \`${t}\` could not be extracted from all schema options`);for(let r of n){if(i.has(r))throw Error(`Discriminator property ${String(t)} has duplicate value ${String(r)}`);i.set(r,e)}}return new e({typeName:z.ZodDiscriminatedUnion,discriminator:t,options:n,optionsMap:i,...T(r)})}},ut=class extends O{_parse(e){let{status:t,ctx:n}=this._processInputParams(e),r=(e,r)=>{if(ye(e)||ye(r))return b;let i=je(e.value,r.value);return i.valid?((be(e)||be(r))&&t.dirty(),{status:t.value,value:i.data}):(v(n,{code:h.invalid_intersection_types}),b)};return n.common.async?Promise.all([this._def.left._parseAsync({data:n.data,path:n.path,parent:n}),this._def.right._parseAsync({data:n.data,path:n.path,parent:n})]).then(([e,t])=>r(e,t)):r(this._def.left._parseSync({data:n.data,path:n.path,parent:n}),this._def.right._parseSync({data:n.data,path:n.path,parent:n}))}},ut.create=(e,t,n)=>new ut({left:e,right:t,typeName:z.ZodIntersection,...T(n)}),P=class e extends O{_parse(e){let{status:t,ctx:n}=this._processInputParams(e);if(n.parsedType!==p.array)return v(n,{code:h.invalid_type,expected:p.array,received:n.parsedType}),b;if(n.data.length<this._def.items.length)return v(n,{code:h.too_small,minimum:this._def.items.length,inclusive:!0,exact:!1,type:`array`}),b;!this._def.rest&&n.data.length>this._def.items.length&&(v(n,{code:h.too_big,maximum:this._def.items.length,inclusive:!0,exact:!1,type:`array`}),t.dirty());let r=[...n.data].map((e,t)=>{let r=this._def.items[t]||this._def.rest;return r?r._parse(new D(n,e,n.path,t)):null}).filter(e=>!!e);return n.common.async?Promise.all(r).then(e=>y.mergeArray(t,e)):y.mergeArray(t,r)}get items(){return this._def.items}rest(t){return new e({...this._def,rest:t})}},P.create=(e,t)=>{if(!Array.isArray(e))throw Error(`You must pass an array of schemas to z.tuple([ ... ])`);return new P({items:e,typeName:z.ZodTuple,rest:null,...T(t)})},dt=class e extends O{get keySchema(){return this._def.keyType}get valueSchema(){return this._def.valueType}_parse(e){let{status:t,ctx:n}=this._processInputParams(e);if(n.parsedType!==p.object)return v(n,{code:h.invalid_type,expected:p.object,received:n.parsedType}),b;let r=[],i=this._def.keyType,a=this._def.valueType;for(let e in n.data)r.push({key:i._parse(new D(n,e,n.path,e)),value:a._parse(new D(n,n.data[e],n.path,e)),alwaysSet:e in n.data});return n.common.async?y.mergeObjectAsync(t,r):y.mergeObjectSync(t,r)}get element(){return this._def.valueType}static create(t,n,r){return n instanceof O?new e({keyType:t,valueType:n,typeName:z.ZodRecord,...T(r)}):new e({keyType:Qe.create(),valueType:t,typeName:z.ZodRecord,...T(n)})}},ft=class extends O{get keySchema(){return this._def.keyType}get valueSchema(){return this._def.valueType}_parse(e){let{status:t,ctx:n}=this._processInputParams(e);if(n.parsedType!==p.map)return v(n,{code:h.invalid_type,expected:p.map,received:n.parsedType}),b;let r=this._def.keyType,i=this._def.valueType,a=[...n.data.entries()].map(([e,t],a)=>({key:r._parse(new D(n,e,n.path,[a,`key`])),value:i._parse(new D(n,t,n.path,[a,`value`]))}));if(n.common.async){let e=new Map;return Promise.resolve().then(async()=>{for(let n of a){let r=await n.key,i=await n.value;if(r.status===`aborted`||i.status===`aborted`)return b;(r.status===`dirty`||i.status===`dirty`)&&t.dirty(),e.set(r.value,i.value)}return{status:t.value,value:e}})}else{let e=new Map;for(let n of a){let r=n.key,i=n.value;if(r.status===`aborted`||i.status===`aborted`)return b;(r.status===`dirty`||i.status===`dirty`)&&t.dirty(),e.set(r.value,i.value)}return{status:t.value,value:e}}}},ft.create=(e,t,n)=>new ft({valueType:t,keyType:e,typeName:z.ZodMap,...T(n)}),pt=class e extends O{_parse(e){let{status:t,ctx:n}=this._processInputParams(e);if(n.parsedType!==p.set)return v(n,{code:h.invalid_type,expected:p.set,received:n.parsedType}),b;let r=this._def;r.minSize!==null&&n.data.size<r.minSize.value&&(v(n,{code:h.too_small,minimum:r.minSize.value,type:`set`,inclusive:!0,exact:!1,message:r.minSize.message}),t.dirty()),r.maxSize!==null&&n.data.size>r.maxSize.value&&(v(n,{code:h.too_big,maximum:r.maxSize.value,type:`set`,inclusive:!0,exact:!1,message:r.maxSize.message}),t.dirty());let i=this._def.valueType;function a(e){let n=new Set;for(let r of e){if(r.status===`aborted`)return b;r.status===`dirty`&&t.dirty(),n.add(r.value)}return{status:t.value,value:n}}let o=[...n.data.values()].map((e,t)=>i._parse(new D(n,e,n.path,t)));return n.common.async?Promise.all(o).then(e=>a(e)):a(o)}min(t,n){return new e({...this._def,minSize:{value:t,message:w.toString(n)}})}max(t,n){return new e({...this._def,maxSize:{value:t,message:w.toString(n)}})}size(e,t){return this.min(e,t).max(e,t)}nonempty(e){return this.min(1,e)}},pt.create=(e,t)=>new pt({valueType:e,minSize:null,maxSize:null,typeName:z.ZodSet,...T(t)}),mt=class e extends O{constructor(){super(...arguments),this.validate=this.implement}_parse(e){let{ctx:t}=this._processInputParams(e);if(t.parsedType!==p.function)return v(t,{code:h.invalid_type,expected:p.function,received:t.parsedType}),b;function n(e,n){return _e({data:e,path:t.path,errorMaps:[t.common.contextualErrorMap,t.schemaErrorMap,me(),_].filter(e=>!!e),issueData:{code:h.invalid_arguments,argumentsError:n}})}function r(e,n){return _e({data:e,path:t.path,errorMaps:[t.common.contextualErrorMap,t.schemaErrorMap,me(),_].filter(e=>!!e),issueData:{code:h.invalid_return_type,returnTypeError:n}})}let i={errorMap:t.common.contextualErrorMap},a=t.data;if(this._def.returns instanceof F){let e=this;return x(async function(...t){let o=new g([]),s=await e._def.args.parseAsync(t,i).catch(e=>{throw o.addIssue(n(t,e)),o}),c=await Reflect.apply(a,this,s);return await e._def.returns._def.type.parseAsync(c,i).catch(e=>{throw o.addIssue(r(c,e)),o})})}else{let e=this;return x(function(...t){let o=e._def.args.safeParse(t,i);if(!o.success)throw new g([n(t,o.error)]);let s=Reflect.apply(a,this,o.data),c=e._def.returns.safeParse(s,i);if(!c.success)throw new g([r(s,c.error)]);return c.data})}}parameters(){return this._def.args}returnType(){return this._def.returns}args(...t){return new e({...this._def,args:P.create(t).rest(k.create())})}returns(t){return new e({...this._def,returns:t})}implement(e){return this.parse(e)}strictImplement(e){return this.parse(e)}static create(t,n,r){return new e({args:t||P.create([]).rest(k.create()),returns:n||k.create(),typeName:z.ZodFunction,...T(r)})}},ht=class extends O{get schema(){return this._def.getter()}_parse(e){let{ctx:t}=this._processInputParams(e);return this._def.getter()._parse({data:t.data,path:t.path,parent:t})}},ht.create=(e,t)=>new ht({getter:e,typeName:z.ZodLazy,...T(t)}),gt=class extends O{_parse(e){if(e.data!==this._def.value){let t=this._getOrReturnCtx(e);return v(t,{received:t.data,code:h.invalid_literal,expected:this._def.value}),b}return{status:`valid`,value:e.data}}get value(){return this._def.value}},gt.create=(e,t)=>new gt({value:e,typeName:z.ZodLiteral,...T(t)}),_t=class e extends O{_parse(e){if(typeof e.data!=`string`){let t=this._getOrReturnCtx(e),n=this._def.values;return v(t,{expected:f.joinValues(n),received:t.parsedType,code:h.invalid_type}),b}if(this._cache||=new Set(this._def.values),!this._cache.has(e.data)){let t=this._getOrReturnCtx(e),n=this._def.values;return v(t,{received:t.data,code:h.invalid_enum_value,options:n}),b}return x(e.data)}get options(){return this._def.values}get enum(){let e={};for(let t of this._def.values)e[t]=t;return e}get Values(){let e={};for(let t of this._def.values)e[t]=t;return e}get Enum(){let e={};for(let t of this._def.values)e[t]=t;return e}extract(t,n=this._def){return e.create(t,{...this._def,...n})}exclude(t,n=this._def){return e.create(this.options.filter(e=>!t.includes(e)),{...this._def,...n})}},_t.create=Me,vt=class extends O{_parse(e){let t=f.getValidEnumValues(this._def.values),n=this._getOrReturnCtx(e);if(n.parsedType!==p.string&&n.parsedType!==p.number){let e=f.objectValues(t);return v(n,{expected:f.joinValues(e),received:n.parsedType,code:h.invalid_type}),b}if(this._cache||=new Set(f.getValidEnumValues(this._def.values)),!this._cache.has(e.data)){let e=f.objectValues(t);return v(n,{received:n.data,code:h.invalid_enum_value,options:e}),b}return x(e.data)}get enum(){return this._def.values}},vt.create=(e,t)=>new vt({values:e,typeName:z.ZodNativeEnum,...T(t)}),F=class extends O{unwrap(){return this._def.type}_parse(e){let{ctx:t}=this._processInputParams(e);return t.parsedType!==p.promise&&t.common.async===!1?(v(t,{code:h.invalid_type,expected:p.promise,received:t.parsedType}),b):x((t.parsedType===p.promise?t.data:Promise.resolve(t.data)).then(e=>this._def.type.parseAsync(e,{path:t.path,errorMap:t.common.contextualErrorMap})))}},F.create=(e,t)=>new F({type:e,typeName:z.ZodPromise,...T(t)}),I=class extends O{innerType(){return this._def.schema}sourceType(){return this._def.schema._def.typeName===z.ZodEffects?this._def.schema.sourceType():this._def.schema}_parse(e){let{status:t,ctx:n}=this._processInputParams(e),r=this._def.effect||null,i={addIssue:e=>{v(n,e),e.fatal?t.abort():t.dirty()},get path(){return n.path}};if(i.addIssue=i.addIssue.bind(i),r.type===`preprocess`){let e=r.transform(n.data,i);if(n.common.async)return Promise.resolve(e).then(async e=>{if(t.value===`aborted`)return b;let r=await this._def.schema._parseAsync({data:e,path:n.path,parent:n});return r.status===`aborted`?b:r.status===`dirty`||t.value===`dirty`?ve(r.value):r});{if(t.value===`aborted`)return b;let r=this._def.schema._parseSync({data:e,path:n.path,parent:n});return r.status===`aborted`?b:r.status===`dirty`||t.value===`dirty`?ve(r.value):r}}if(r.type===`refinement`){let e=e=>{let t=r.refinement(e,i);if(n.common.async)return Promise.resolve(t);if(t instanceof Promise)throw Error(`Async refinement encountered during synchronous parse operation. Use .parseAsync instead.`);return e};if(n.common.async===!1){let r=this._def.schema._parseSync({data:n.data,path:n.path,parent:n});return r.status===`aborted`?b:(r.status===`dirty`&&t.dirty(),e(r.value),{status:t.value,value:r.value})}else return this._def.schema._parseAsync({data:n.data,path:n.path,parent:n}).then(n=>n.status===`aborted`?b:(n.status===`dirty`&&t.dirty(),e(n.value).then(()=>({status:t.value,value:n.value}))))}if(r.type===`transform`)if(n.common.async===!1){let e=this._def.schema._parseSync({data:n.data,path:n.path,parent:n});if(!S(e))return b;let a=r.transform(e.value,i);if(a instanceof Promise)throw Error(`Asynchronous transform encountered during synchronous parse operation. Use .parseAsync instead.`);return{status:t.value,value:a}}else return this._def.schema._parseAsync({data:n.data,path:n.path,parent:n}).then(e=>S(e)?Promise.resolve(r.transform(e.value,i)).then(e=>({status:t.value,value:e})):b);f.assertNever(r)}},I.create=(e,t,n)=>new I({schema:e,typeName:z.ZodEffects,effect:t,...T(n)}),I.createWithPreprocess=(e,t,n)=>new I({schema:t,effect:{type:`preprocess`,transform:e},typeName:z.ZodEffects,...T(n)}),L=class extends O{_parse(e){return this._getType(e)===p.undefined?x(void 0):this._def.innerType._parse(e)}unwrap(){return this._def.innerType}},L.create=(e,t)=>new L({innerType:e,typeName:z.ZodOptional,...T(t)}),R=class extends O{_parse(e){return this._getType(e)===p.null?x(null):this._def.innerType._parse(e)}unwrap(){return this._def.innerType}},R.create=(e,t)=>new R({innerType:e,typeName:z.ZodNullable,...T(t)}),yt=class extends O{_parse(e){let{ctx:t}=this._processInputParams(e),n=t.data;return t.parsedType===p.undefined&&(n=this._def.defaultValue()),this._def.innerType._parse({data:n,path:t.path,parent:t})}removeDefault(){return this._def.innerType}},yt.create=(e,t)=>new yt({innerType:e,typeName:z.ZodDefault,defaultValue:typeof t.default==`function`?t.default:()=>t.default,...T(t)}),bt=class extends O{_parse(e){let{ctx:t}=this._processInputParams(e),n={...t,common:{...t.common,issues:[]}},r=this._def.innerType._parse({data:n.data,path:n.path,parent:{...n}});return C(r)?r.then(e=>({status:`valid`,value:e.status===`valid`?e.value:this._def.catchValue({get error(){return new g(n.common.issues)},input:n.data})})):{status:`valid`,value:r.status===`valid`?r.value:this._def.catchValue({get error(){return new g(n.common.issues)},input:n.data})}}removeCatch(){return this._def.innerType}},bt.create=(e,t)=>new bt({innerType:e,typeName:z.ZodCatch,catchValue:typeof t.catch==`function`?t.catch:()=>t.catch,...T(t)}),xt=class extends O{_parse(e){if(this._getType(e)!==p.nan){let t=this._getOrReturnCtx(e);return v(t,{code:h.invalid_type,expected:p.nan,received:t.parsedType}),b}return{status:`valid`,value:e.data}}},xt.create=e=>new xt({typeName:z.ZodNaN,...T(e)}),St=class extends O{_parse(e){let{ctx:t}=this._processInputParams(e),n=t.data;return this._def.type._parse({data:n,path:t.path,parent:t})}unwrap(){return this._def.type}},Ct=class e extends O{_parse(e){let{status:t,ctx:n}=this._processInputParams(e);if(n.common.async)return(async()=>{let e=await this._def.in._parseAsync({data:n.data,path:n.path,parent:n});return e.status===`aborted`?b:e.status===`dirty`?(t.dirty(),ve(e.value)):this._def.out._parseAsync({data:e.value,path:n.path,parent:n})})();{let e=this._def.in._parseSync({data:n.data,path:n.path,parent:n});return e.status===`aborted`?b:e.status===`dirty`?(t.dirty(),{status:`dirty`,value:e.value}):this._def.out._parseSync({data:e.value,path:n.path,parent:n})}}static create(t,n){return new e({in:t,out:n,typeName:z.ZodPipeline})}},wt=class extends O{_parse(e){let t=this._def.innerType._parse(e),n=e=>(S(e)&&(e.value=Object.freeze(e.value)),e);return C(t)?t.then(e=>n(e)):n(t)}unwrap(){return this._def.innerType}},wt.create=(e,t)=>new wt({innerType:e,typeName:z.ZodReadonly,...T(t)}),M.lazycreate,(function(e){e.ZodString=`ZodString`,e.ZodNumber=`ZodNumber`,e.ZodNaN=`ZodNaN`,e.ZodBigInt=`ZodBigInt`,e.ZodBoolean=`ZodBoolean`,e.ZodDate=`ZodDate`,e.ZodSymbol=`ZodSymbol`,e.ZodUndefined=`ZodUndefined`,e.ZodNull=`ZodNull`,e.ZodAny=`ZodAny`,e.ZodUnknown=`ZodUnknown`,e.ZodNever=`ZodNever`,e.ZodVoid=`ZodVoid`,e.ZodArray=`ZodArray`,e.ZodObject=`ZodObject`,e.ZodUnion=`ZodUnion`,e.ZodDiscriminatedUnion=`ZodDiscriminatedUnion`,e.ZodIntersection=`ZodIntersection`,e.ZodTuple=`ZodTuple`,e.ZodRecord=`ZodRecord`,e.ZodMap=`ZodMap`,e.ZodSet=`ZodSet`,e.ZodFunction=`ZodFunction`,e.ZodLazy=`ZodLazy`,e.ZodLiteral=`ZodLiteral`,e.ZodEnum=`ZodEnum`,e.ZodEffects=`ZodEffects`,e.ZodNativeEnum=`ZodNativeEnum`,e.ZodOptional=`ZodOptional`,e.ZodNullable=`ZodNullable`,e.ZodDefault=`ZodDefault`,e.ZodCatch=`ZodCatch`,e.ZodPromise=`ZodPromise`,e.ZodBranded=`ZodBranded`,e.ZodPipeline=`ZodPipeline`,e.ZodReadonly=`ZodReadonly`})(z||={}),B=Qe.create,$e.create,xt.create,et.create,tt.create,nt.create,rt.create,it.create,at.create,ot.create,k.create,A.create,st.create,j.create,M.create,M.strictCreate,ct.create,lt.create,ut.create,P.create,dt.create,ft.create,pt.create,mt.create,ht.create,Tt=gt.create,_t.create,vt.create,F.create,I.create,L.create,R.create,I.createWithPreprocess,Ct.create})),Dt=e((()=>{ge(),xe(),Se(),de(),Et(),fe()})),Ot=e((()=>{Dt(),Dt()})),V,H,U,kt,At,W,G,K,q,J,Y,X,Z,Q,$,jt;e((()=>{i(),o(),ne(),te(),re(),ae(),se(),le(),n(),Ot(),{expect:V,userEvent:H,waitFor:U,within:kt}=__STORYBOOK_MODULE_TEST__,At={title:`Data Entry/Form`,component:u,tags:[`autodocs`],argTypes:{layout:{control:`select`,options:Object.values(a),description:`Form layout mode.`,table:{defaultValue:{summary:a.Horizontal}}},labelAlign:{control:`select`,options:Object.values(s),description:`Label text alignment.`,table:{defaultValue:{summary:s.Right}}},labelWidth:{control:`text`,description:`Fixed width for all labels.`},colon:{control:`boolean`,description:`Display colon after label (horizontal layout only).`,table:{defaultValue:{summary:`true`}}},disabled:{control:`boolean`,description:`Disable all form controls.`,table:{defaultValue:{summary:`false`}}},requiredMark:{control:`select`,options:[!0,!1,ee.Optional],description:`How required/optional marks are displayed.`,table:{defaultValue:{summary:`true`}}},model:{control:`object`,description:`Form data model object.`,table:{category:`Two-Way Binding Props`}}},parameters:{docs:{description:{component:`<code>BForm</code> provides form layout, validation (via Zod schemas), and submission handling. Use with <code>BFormItem</code> for field-level labels, validation status, and error messaging. Supports horizontal, vertical, and inline layouts.`}}}},W={args:{layout:`horizontal`,labelAlign:`right`,colon:!0,disabled:!1},render:e=>({components:{BForm:u,BFormItem:l,BInput:d,BSelect:oe,BRadioGroup:ie,BSwitch:ce,BDatePicker:c,BCheckbox:r},setup:()=>({args:e,formModel:t({username:``,email:``,password:``,role:``,gender:``,birthDate:``,notifications:!0,bio:``,agree:!1}),schemas:{username:B().min(3,`Username must be at least 3 characters`),email:B().email(`Please enter a valid email`),password:B().min(8,`Password must be at least 8 characters`),role:B().min(1,`Please select a role`),gender:B().min(1,`Please select a gender`),birthDate:B().min(1,`Please select a date`),bio:B().max(200,`Bio cannot exceed 200 characters`),agree:Tt(!0,{errorMap:()=>({message:`You must accept the terms`})})},roleOptions:[{label:`Developer`,value:`developer`},{label:`Designer`,value:`designer`},{label:`Product Manager`,value:`pm`},{label:`QA Engineer`,value:`qa`}],genderOptions:[{label:`Male`,value:`male`},{label:`Female`,value:`female`},{label:`Other`,value:`other`}],onFinish:e=>{alert(`Form submitted:\n${JSON.stringify(e,null,2)}`)}}),template:`
      <div style="padding: 40px; max-width: 560px;">
        <BForm v-bind="args" :model="formModel" label-width="120px" @finish="onFinish">
          <BFormItem name="username" label="Username" :schema="schemas.username" :required="true">
            <template #default="{ id }">
              <BInput v-model="formModel.username" :id="id" placeholder="Enter username" />
            </template>
          </BFormItem>
          <BFormItem name="email" label="Email" :schema="schemas.email" :required="true">
            <template #default="{ id }">
              <BInput v-model="formModel.email" :id="id" placeholder="Enter email" />
            </template>
          </BFormItem>
          <BFormItem name="password" label="Password" :schema="schemas.password" :required="true">
            <template #default="{ id }">
              <BInput v-model="formModel.password" :id="id" type="password" placeholder="Enter password" />
            </template>
          </BFormItem>
          <BFormItem name="role" label="Role" :schema="schemas.role" :required="true">
            <template #default="{ id }">
              <BSelect v-model="formModel.role" :id="id" :options="roleOptions" placeholder="Select a role" />
            </template>
          </BFormItem>
          <BFormItem name="gender" label="Gender" :schema="schemas.gender" :required="true">
            <BRadioGroup v-model="formModel.gender" :options="genderOptions" />
          </BFormItem>
          <BFormItem name="birthDate" label="Birth Date" :schema="schemas.birthDate">
            <template #default="{ id }">
              <BDatePicker v-model="formModel.birthDate" :id="id" placeholder="Select date" />
            </template>
          </BFormItem>
          <BFormItem name="bio" label="Bio" :schema="schemas.bio">
            <template #default="{ id }">
              <BInput v-model="formModel.bio" :id="id" type="textarea" placeholder="Tell us about yourself" />
            </template>
          </BFormItem>
          <BFormItem name="notifications" label="Notifications">
            <BSwitch v-model="formModel.notifications" aria-label="Enable notifications" />
          </BFormItem>
          <BFormItem name="agree" label=" " :schema="schemas.agree" :colon="false">
            <BCheckbox v-model="formModel.agree">I agree to the terms and conditions</BCheckbox>
          </BFormItem>
          <BFormItem label=" " :colon="false">
            <div style="display: flex; gap: 8px;">
              <button type="submit" style="padding: 6px 16px; background: #0958d9; color: white; border: none; border-radius: 6px; cursor: pointer;">
                Submit
              </button>
              <button type="reset" style="padding: 6px 16px; border: 1px solid #d9d9d9; border-radius: 6px; cursor: pointer;">
                Reset
              </button>
            </div>
          </BFormItem>
        </BForm>
      </div>
    `})},G={render:()=>({components:{BForm:u,BFormItem:l,BInput:d},setup:()=>({h:t({name:``,email:``}),v:t({name:``,email:``}),i:t({name:``,email:``})}),template:`
      <div style="padding: 40px; display: flex; flex-direction: column; gap: 40px; max-width: 600px;">
        <div>
          <h4 style="margin-bottom: 12px;">Horizontal (default)</h4>
          <BForm layout="horizontal" :model="h" label-width="80px">
            <BFormItem name="name" label="Name"><BInput v-model="h.name" placeholder="Name" /></BFormItem>
            <BFormItem name="email" label="Email"><BInput v-model="h.email" placeholder="Email" /></BFormItem>
          </BForm>
        </div>
        <div>
          <h4 style="margin-bottom: 12px;">Vertical</h4>
          <BForm layout="vertical" :model="v">
            <BFormItem name="name" label="Name"><BInput v-model="v.name" placeholder="Name" /></BFormItem>
            <BFormItem name="email" label="Email"><BInput v-model="v.email" placeholder="Email" /></BFormItem>
          </BForm>
        </div>
        <div>
          <h4 style="margin-bottom: 12px;">Inline</h4>
          <BForm layout="inline" :model="i">
            <BFormItem name="name" label="Name"><BInput v-model="i.name" placeholder="Name" /></BFormItem>
            <BFormItem name="email" label="Email"><BInput v-model="i.email" placeholder="Email" /></BFormItem>
            <BFormItem>
              <button type="submit" style="padding: 4px 12px; border: 1px solid #d9d9d9; border-radius: 6px; cursor: pointer;">Search</button>
            </BFormItem>
          </BForm>
        </div>
      </div>
    `})},K={render:()=>({components:{BForm:u,BFormItem:l,BInput:d},setup:()=>({formModel:t({required:``,email:``,minLen:``,pattern:``}),formRef:t(null),schemas:{required:B().min(1,`This field is required`),email:B().email(`Not a valid email address`),minLen:B().min(5,`Must be at least 5 characters`),pattern:B().regex(/^[A-Z]*$/,`Only uppercase letters allowed`)}}),template:`
      <div style="padding: 40px; max-width: 500px;">
        <BForm ref="formRef" :model="formModel" layout="vertical">
          <BFormItem name="required" label="Required Field" :schema="schemas.required" :required="true">
            <template #default="{ id }">
              <BInput v-model="formModel.required" :id="id" placeholder="Cannot be empty" />
            </template>
          </BFormItem>
          <BFormItem name="email" label="Email" :schema="schemas.email">
            <template #default="{ id }">
              <BInput v-model="formModel.email" :id="id" placeholder="Enter email" />
            </template>
          </BFormItem>
          <BFormItem name="minLen" label="Min Length (5)" :schema="schemas.minLen">
            <template #default="{ id }">
              <BInput v-model="formModel.minLen" :id="id" placeholder="At least 5 chars" />
            </template>
          </BFormItem>
          <BFormItem name="pattern" label="Uppercase Only" :schema="schemas.pattern">
            <template #default="{ id }">
              <BInput v-model="formModel.pattern" :id="id" placeholder="A-Z only" />
            </template>
          </BFormItem>
          <BFormItem>
            <div style="display: flex; gap: 8px;">
              <button type="submit" style="padding: 6px 16px; background: #0958d9; color: white; border: none; border-radius: 6px; cursor: pointer;">Validate</button>
              <button type="button" @click="formRef?.resetFields()" style="padding: 6px 16px; border: 1px solid #d9d9d9; border-radius: 6px; cursor: pointer;">Reset</button>
            </div>
          </BFormItem>
        </BForm>
      </div>
    `})},q={render:()=>({components:{BForm:u,BFormItem:l,BInput:d},setup:()=>({m1:t({name:``,email:``}),m2:t({name:``,email:``}),nameSchema:B().min(1,`Required`)}),template:`
      <div style="padding: 40px; display: flex; gap: 40px; max-width: 800px;">
        <div style="flex: 1;">
          <h4 style="margin-bottom: 12px;">requiredMark: true (default)</h4>
          <BForm layout="vertical" :model="m1" :required-mark="true">
            <BFormItem name="name" label="Name" :schema="nameSchema" :required="true">
              <BInput v-model="m1.name" placeholder="Required" />
            </BFormItem>
            <BFormItem name="email" label="Email">
              <BInput v-model="m1.email" placeholder="Optional" />
            </BFormItem>
          </BForm>
        </div>
        <div style="flex: 1;">
          <h4 style="margin-bottom: 12px;">requiredMark: "optional"</h4>
          <BForm layout="vertical" :model="m2" required-mark="optional">
            <BFormItem name="name" label="Name" :schema="nameSchema" :required="true">
              <BInput v-model="m2.name" placeholder="Required" />
            </BFormItem>
            <BFormItem name="email" label="Email">
              <BInput v-model="m2.email" placeholder="Optional" />
            </BFormItem>
          </BForm>
        </div>
      </div>
    `})},J={render:()=>({components:{BForm:u,BFormItem:l,BInput:d},setup:()=>({m:t({success:`Good`,warning:`Hmm`,error:`Bad`,validating:`Loading...`})}),template:`
      <div style="padding: 40px; max-width: 500px;">
        <BForm layout="vertical" :model="m">
          <BFormItem name="success" label="Success" validate-status="success" :has-feedback="true" help="Looks good!">
            <template #default="{ id }">
              <BInput v-model="m.success" :id="id" />
            </template>
          </BFormItem>
          <BFormItem name="warning" label="Warning" validate-status="warning" :has-feedback="true" help="This might need attention">
            <template #default="{ id }">
              <BInput v-model="m.warning" :id="id" />
            </template>
          </BFormItem>
          <BFormItem name="error" label="Error" validate-status="error" :has-feedback="true" help="Please fix this field">
            <template #default="{ id }">
              <BInput v-model="m.error" :id="id" />
            </template>
          </BFormItem>
          <BFormItem name="validating" label="Validating" validate-status="validating" :has-feedback="true" help="Checking...">
            <template #default="{ id }">
              <BInput v-model="m.validating" :id="id" />
            </template>
          </BFormItem>
        </BForm>
      </div>
    `})},Y={render:()=>({components:{BForm:u,BFormItem:l,BInput:d},setup:()=>({formModel:t({username:``,email:``}),schemas:{username:B().min(1,`Username is required`),email:B().email(`Invalid email`)}}),template:`
      <div style="padding: 40px; max-width: 500px;">
        <BForm name="accessible-form" :model="formModel" layout="vertical">
          <BFormItem name="username" label="Username" :schema="schemas.username" :required="true" tooltip="Your unique login name">
            <template #default="{ id }">
              <BInput v-model="formModel.username" :id="id" placeholder="Enter username" />
            </template>
          </BFormItem>
          <BFormItem name="email" label="Email" :schema="schemas.email" extra="We will never share your email">
            <template #default="{ id }">
              <BInput v-model="formModel.email" :id="id" placeholder="Enter email" />
            </template>
          </BFormItem>
          <BFormItem>
            <button type="submit" style="padding: 6px 16px; background: #0958d9; color: white; border: none; border-radius: 6px; cursor: pointer;">Submit</button>
          </BFormItem>
        </BForm>
      </div>
    `}),play:async({canvasElement:e})=>{let t=kt(e),n=e.querySelector(`form`);V(n).toBeTruthy(),V(n.getAttribute(`role`)).toBe(`form`),V(n.getAttribute(`aria-label`)).toBe(`accessible-form`),V(e.querySelectorAll(`.b-form-item`)[0].getAttribute(`role`)).toBe(`group`);let r=e.querySelector(`.b-form-item__required-mark`);V(r).toBeTruthy(),V(r.getAttribute(`aria-hidden`)).toBe(`true`),V(e.querySelector(`.b-form-item__tooltip`)).toBeTruthy();let i=t.getByRole(`button`,{name:/submit/i});await H.click(i),await U(()=>{let t=e.querySelector(`.b-form-item__help`);V(t).toBeTruthy(),V(t.getAttribute(`role`)).toBe(`alert`),V(t.getAttribute(`aria-live`)).toBe(`polite`)});let a=e.querySelectorAll(`input`);a[0].focus(),V(document.activeElement).toBe(a[0]),await H.tab(),V(document.activeElement).toBe(a[1])}},X={render:()=>({components:{BForm:u,BFormItem:l,BInput:d},setup:()=>({m1:t({name:``}),m2:t({name:``}),m3:t({name:``}),nameSchema:B().min(1,`Required`)}),template:`
      <div style="padding: 40px; display: flex; gap: 40px; flex-wrap: wrap;">
        <div>
          <p style="margin-bottom: 8px; font-size: 12px; color: #666;">Default</p>
          <BForm layout="vertical" :model="m1">
            <BFormItem name="name" label="Name" :schema="nameSchema" :required="true">
              <BInput v-model="m1.name" placeholder="Default" />
            </BFormItem>
            <BFormItem><button type="submit" style="padding: 4px 12px; border: 1px solid #d9d9d9; border-radius: 6px;">Submit</button></BFormItem>
          </BForm>
        </div>

        <div class="custom-form-theme-purple">
          <p style="margin-bottom: 8px; font-size: 12px; color: #666;">Purple theme</p>
          <BForm layout="vertical" :model="m2">
            <BFormItem name="name" label="Name" :schema="nameSchema" :required="true">
              <BInput v-model="m2.name" placeholder="Purple" />
            </BFormItem>
            <BFormItem><button type="submit" style="padding: 4px 12px; border: 1px solid #d9d9d9; border-radius: 6px;">Submit</button></BFormItem>
          </BForm>
        </div>

        <div class="custom-form-theme-green">
          <p style="margin-bottom: 8px; font-size: 12px; color: #666;">Green theme</p>
          <BForm layout="vertical" :model="m3">
            <BFormItem name="name" label="Name" :schema="nameSchema" :required="true">
              <BInput v-model="m3.name" placeholder="Green" />
            </BFormItem>
            <BFormItem><button type="submit" style="padding: 4px 12px; border: 1px solid #d9d9d9; border-radius: 6px;">Submit</button></BFormItem>
          </BForm>
        </div>
      </div>

      <style>
        .custom-form-theme-purple .b-form {
          --b-form-label-color: #7c3aed;
          --b-form-label-required-mark-color: #a855f7;
          --b-form-error-color: #9333ea;
        }
        .custom-form-theme-green .b-form {
          --b-form-label-color: #16a34a;
          --b-form-label-required-mark-color: #22c55e;
          --b-form-error-color: #dc2626;
        }
      </style>
    `})},Z={render:()=>({components:{BForm:u,BFormItem:l,BInput:d,BSelect:oe},setup:()=>{let e=t({username:``,email:``,password:``,confirmPassword:``,phone:``,website:``,role:``}),n=t(!1);return{formModel:e,submitted:n,schemas:{username:B().min(3,`Username must be at least 3 characters`).max(20,`Username cannot exceed 20 characters`).regex(/^[a-z0-9_]+$/,`Only lowercase letters, numbers, and underscores`),email:B().min(1,`Email is required`).email(`Invalid email format`),password:B().min(8,`Password must be at least 8 characters`).regex(/[A-Z]/,`Must contain at least one uppercase letter`).regex(/[0-9]/,`Must contain at least one number`).regex(/[^A-Za-z0-9]/,`Must contain at least one special character`),confirmPassword:B().min(1,`Please confirm your password`),phone:B().min(1,`Phone number is required`).regex(/^\+?[0-9]{10,15}$/,`Enter a valid phone number (10-15 digits)`),website:B().refine(e=>e===``||/^https?:\/\/.+\..+/.test(e),{message:`Must be a valid URL starting with http:// or https://`}),role:B().min(1,`Please select a role`)},roleOptions:[{label:`Developer`,value:`developer`},{label:`Designer`,value:`designer`},{label:`Product Manager`,value:`pm`}],onFinish:()=>{n.value=!0}}},template:`
      <div style="padding: 40px; max-width: 520px;">
        <BForm :model="formModel" layout="vertical" @finish="onFinish">
          <BFormItem name="username" label="Username" :schema="schemas.username" :required="true">
            <template #default="{ id }">
              <BInput v-model="formModel.username" :id="id" placeholder="lowercase letters, numbers, underscores" />
            </template>
          </BFormItem>
          <BFormItem name="email" label="Email" :schema="schemas.email" :required="true">
            <template #default="{ id }">
              <BInput v-model="formModel.email" :id="id" placeholder="you@example.com" />
            </template>
          </BFormItem>
          <BFormItem name="password" label="Password" :schema="schemas.password" :required="true">
            <template #default="{ id }">
              <BInput v-model="formModel.password" :id="id" type="password" placeholder="Min 8 chars, uppercase, number, special" />
            </template>
          </BFormItem>
          <BFormItem name="confirmPassword" label="Confirm Password" :schema="schemas.confirmPassword" :required="true">
            <template #default="{ id }">
              <BInput v-model="formModel.confirmPassword" :id="id" type="password" placeholder="Re-enter password" />
            </template>
          </BFormItem>
          <BFormItem name="phone" label="Phone" :schema="schemas.phone" :required="true">
            <template #default="{ id }">
              <BInput v-model="formModel.phone" :id="id" placeholder="+1234567890" />
            </template>
          </BFormItem>
          <BFormItem name="website" label="Website" :schema="schemas.website">
            <template #default="{ id }">
              <BInput v-model="formModel.website" :id="id" placeholder="https://example.com" />
            </template>
          </BFormItem>
          <BFormItem name="role" label="Role" :schema="schemas.role" :required="true">
            <template #default="{ id }">
              <BSelect v-model="formModel.role" :id="id" :options="roleOptions" placeholder="Select a role" />
            </template>
          </BFormItem>
          <BFormItem>
            <button type="submit" style="padding: 6px 16px; background: #0958d9; color: white; border: none; border-radius: 6px; cursor: pointer;">Register</button>
          </BFormItem>
        </BForm>
        <p data-testid="submitted" style="margin-top: 12px; font-size: 12px;">Submitted: {{ submitted }}</p>
      </div>
    `}),play:async({canvasElement:e})=>{let t=kt(e),n=t.getByRole(`button`,{name:/register/i});await H.click(n),await U(()=>{V(e.querySelectorAll(`.b-form-item__help--error`).length).toBeGreaterThanOrEqual(5),V(e.textContent).toContain(`Username must be at least 3 characters`),V(e.textContent).toContain(`Email is required`),V(e.textContent).toContain(`Password must be at least 8 characters`),V(e.textContent).toContain(`Phone number is required`),V(e.textContent).toContain(`Please select a role`)});let r=e.querySelectorAll(`input`);await H.type(r[0],`Bad User!`),await H.click(n),await U(()=>{V(e.textContent).toContain(`Only lowercase letters, numbers, and underscores`)}),await H.clear(r[0]),await H.type(r[0],`good_user`),await H.type(r[1],`not-an-email`),await H.click(n),await U(()=>{V(e.textContent).toContain(`Invalid email format`)}),await H.clear(r[1]),await H.type(r[1],`user@test.com`),await H.type(r[2],`weakpass`),await H.click(n),await U(()=>{V(e.textContent).toContain(`Must contain at least one uppercase letter`)}),await H.clear(r[2]),await H.type(r[2],`Str0ng!Pass`),await H.type(r[3],`Str0ng!Pass`),await H.type(r[4],`+1234567890`);let i=e.querySelector(`.b-select`);i&&await H.click(i),await U(()=>{let t=e.querySelector(`.b-select__option`);t&&H.click(t)}),await H.click(n),await U(()=>{V(t.getByTestId(`submitted`).textContent).toContain(`true`)})}},Q={render:()=>({components:{BForm:u,BFormItem:l,BInput:d},setup:()=>({formModel:t({name:``,email:``}),formRef:t(null),nameItemRef:t(null),emailItemRef:t(null),schemas:{name:B().min(1,`Name is required`),email:B().email(`Invalid email`)}}),template:`
      <div style="padding: 40px; max-width: 500px;">
        <BForm ref="formRef" :model="formModel" layout="vertical">
          <BFormItem ref="nameItemRef" name="name" label="Name" :schema="schemas.name" :required="true">
            <template #default="{ id, onBlur }">
              <BInput v-model="formModel.name" :id="id" placeholder="Type to see dirty state" @blur="onBlur" />
            </template>
          </BFormItem>
          <BFormItem ref="emailItemRef" name="email" label="Email" :schema="schemas.email">
            <template #default="{ id, onBlur }">
              <BInput v-model="formModel.email" :id="id" placeholder="Focus then blur for touched" @blur="onBlur" />
            </template>
          </BFormItem>
          <BFormItem>
            <div style="display: flex; gap: 8px;">
              <button type="submit" style="padding: 6px 16px; background: #0958d9; color: white; border: none; border-radius: 6px; cursor: pointer;">Submit</button>
              <button type="button" @click="formRef?.resetFields()" style="padding: 6px 16px; border: 1px solid #d9d9d9; border-radius: 6px; cursor: pointer;">Reset</button>
            </div>
          </BFormItem>
        </BForm>
        <div style="margin-top: 16px; padding: 12px; background: #f5f5f5; border-radius: 6px; font-size: 12px; font-family: monospace;">
          <p><strong>Name field:</strong> dirty={{ nameItemRef?.dirty?.value ?? false }}, touched={{ nameItemRef?.touched?.value ?? false }}</p>
          <p><strong>Email field:</strong> dirty={{ emailItemRef?.dirty?.value ?? false }}, touched={{ emailItemRef?.touched?.value ?? false }}</p>
          <p><strong>Form valid:</strong> {{ formRef?.isValid }}</p>
        </div>
      </div>
    `})},$={render:()=>({template:`
      <div style="padding: 40px; font-family: monospace; font-size: 13px; max-width: 900px;">
        <h3 style="margin-bottom: 16px; font-size: 16px; font-family: sans-serif;">BForm Design Tokens</h3>
        <p style="margin-bottom: 16px; font-size: 13px; font-family: sans-serif; color: #666;">
          Override these CSS variables on <code>.b-form</code> or an ancestor to customize the component appearance.
        </p>
        <table style="width: 100%; border-collapse: collapse; background: #ffffff;">
          <thead>
            <tr style="border-bottom: 2px solid #e5e7eb;">
              <th style="text-align: left; padding: 8px 12px;">Variable</th>
              <th style="text-align: left; padding: 8px 12px;">Default</th>
              <th style="text-align: left; padding: 8px 12px;">Description</th>
            </tr>
          </thead>
          <tbody>
            <tr style="border-bottom: 1px solid #f3f4f6;">
              <td style="padding: 8px 12px;">--b-form-item-margin-bottom</td>
              <td style="padding: 8px 12px;">24px</td>
              <td style="padding: 8px 12px;">Standard spacing below form items</td>
            </tr>
            <tr style="border-bottom: 1px solid #f3f4f6;">
              <td style="padding: 8px 12px;">--b-form-inline-item-margin-bottom</td>
              <td style="padding: 8px 12px;">0</td>
              <td style="padding: 8px 12px;">Spacing below items in inline layout</td>
            </tr>
            <tr style="border-bottom: 1px solid #f3f4f6;">
              <td style="padding: 8px 12px;">--b-form-label-color</td>
              <td style="padding: 8px 12px;">rgba(0, 0, 0, 0.88)</td>
              <td style="padding: 8px 12px;">Text color for labels</td>
            </tr>
            <tr style="border-bottom: 1px solid #f3f4f6;">
              <td style="padding: 8px 12px;">--b-form-label-font-size</td>
              <td style="padding: 8px 12px;">14px</td>
              <td style="padding: 8px 12px;">Font size for labels</td>
            </tr>
            <tr style="border-bottom: 1px solid #f3f4f6;">
              <td style="padding: 8px 12px;">--b-form-label-height</td>
              <td style="padding: 8px 12px;">32px</td>
              <td style="padding: 8px 12px;">Height of label elements</td>
            </tr>
            <tr style="border-bottom: 1px solid #f3f4f6;">
              <td style="padding: 8px 12px;">--b-form-label-colon-margin-inline-start</td>
              <td style="padding: 8px 12px;">2px</td>
              <td style="padding: 8px 12px;">Left margin before label colon</td>
            </tr>
            <tr style="border-bottom: 1px solid #f3f4f6;">
              <td style="padding: 8px 12px;">--b-form-label-colon-margin-inline-end</td>
              <td style="padding: 8px 12px;">8px</td>
              <td style="padding: 8px 12px;">Right margin after label colon</td>
            </tr>
            <tr style="border-bottom: 1px solid #f3f4f6;">
              <td style="padding: 8px 12px;">--b-form-label-required-mark-color</td>
              <td style="padding: 8px 12px;">#cf1322</td>
              <td style="padding: 8px 12px;">Color of the required asterisk</td>
            </tr>
            <tr style="border-bottom: 1px solid #f3f4f6;">
              <td style="padding: 8px 12px;">--b-form-vertical-label-margin</td>
              <td style="padding: 8px 12px;">0</td>
              <td style="padding: 8px 12px;">Margin for labels in vertical layout</td>
            </tr>
            <tr style="border-bottom: 1px solid #f3f4f6;">
              <td style="padding: 8px 12px;">--b-form-vertical-label-padding</td>
              <td style="padding: 8px 12px;">0 0 8px</td>
              <td style="padding: 8px 12px;">Padding for labels in vertical layout</td>
            </tr>
            <tr style="border-bottom: 1px solid #f3f4f6;">
              <td style="padding: 8px 12px;">--b-form-help-color</td>
              <td style="padding: 8px 12px;">rgba(0, 0, 0, 0.65)</td>
              <td style="padding: 8px 12px;">Color for help/extra text</td>
            </tr>
            <tr style="border-bottom: 1px solid #f3f4f6;">
              <td style="padding: 8px 12px;">--b-form-error-color</td>
              <td style="padding: 8px 12px;">#cf1322</td>
              <td style="padding: 8px 12px;">Color for error messages</td>
            </tr>
            <tr style="border-bottom: 1px solid #f3f4f6;">
              <td style="padding: 8px 12px;">--b-form-warning-color</td>
              <td style="padding: 8px 12px;">#874d00</td>
              <td style="padding: 8px 12px;">Color for warning messages</td>
            </tr>
            <tr>
              <td style="padding: 8px 12px;">--b-form-success-color</td>
              <td style="padding: 8px 12px;">#52c41a</td>
              <td style="padding: 8px 12px;">Color for success feedback</td>
            </tr>
          </tbody>
        </table>
      </div>
    `})},W.parameters={...W.parameters,docs:{...W.parameters?.docs,source:{originalSource:`{
  args: {
    layout: 'horizontal',
    labelAlign: 'right',
    colon: true,
    disabled: false
  },
  render: args => ({
    components: {
      BForm,
      BFormItem,
      BInput,
      BSelect,
      BRadioGroup,
      BSwitch,
      BDatePicker,
      BCheckbox
    },
    setup: () => {
      const formModel = ref({
        username: '',
        email: '',
        password: '',
        role: '',
        gender: '',
        birthDate: '',
        notifications: true,
        bio: '',
        agree: false
      });
      const schemas = {
        username: z.string().min(3, 'Username must be at least 3 characters'),
        email: z.string().email('Please enter a valid email'),
        password: z.string().min(8, 'Password must be at least 8 characters'),
        role: z.string().min(1, 'Please select a role'),
        gender: z.string().min(1, 'Please select a gender'),
        birthDate: z.string().min(1, 'Please select a date'),
        bio: z.string().max(200, 'Bio cannot exceed 200 characters'),
        agree: z.literal(true, {
          errorMap: () => ({
            message: 'You must accept the terms'
          })
        })
      };
      const roleOptions = [{
        label: 'Developer',
        value: 'developer'
      }, {
        label: 'Designer',
        value: 'designer'
      }, {
        label: 'Product Manager',
        value: 'pm'
      }, {
        label: 'QA Engineer',
        value: 'qa'
      }];
      const genderOptions = [{
        label: 'Male',
        value: 'male'
      }, {
        label: 'Female',
        value: 'female'
      }, {
        label: 'Other',
        value: 'other'
      }];
      const onFinish = (values: Record<string, unknown>) => {
        alert(\`Form submitted:\\n\${JSON.stringify(values, null, 2)}\`);
      };
      return {
        args,
        formModel,
        schemas,
        roleOptions,
        genderOptions,
        onFinish
      };
    },
    template: \`
      <div style="padding: 40px; max-width: 560px;">
        <BForm v-bind="args" :model="formModel" label-width="120px" @finish="onFinish">
          <BFormItem name="username" label="Username" :schema="schemas.username" :required="true">
            <template #default="{ id }">
              <BInput v-model="formModel.username" :id="id" placeholder="Enter username" />
            </template>
          </BFormItem>
          <BFormItem name="email" label="Email" :schema="schemas.email" :required="true">
            <template #default="{ id }">
              <BInput v-model="formModel.email" :id="id" placeholder="Enter email" />
            </template>
          </BFormItem>
          <BFormItem name="password" label="Password" :schema="schemas.password" :required="true">
            <template #default="{ id }">
              <BInput v-model="formModel.password" :id="id" type="password" placeholder="Enter password" />
            </template>
          </BFormItem>
          <BFormItem name="role" label="Role" :schema="schemas.role" :required="true">
            <template #default="{ id }">
              <BSelect v-model="formModel.role" :id="id" :options="roleOptions" placeholder="Select a role" />
            </template>
          </BFormItem>
          <BFormItem name="gender" label="Gender" :schema="schemas.gender" :required="true">
            <BRadioGroup v-model="formModel.gender" :options="genderOptions" />
          </BFormItem>
          <BFormItem name="birthDate" label="Birth Date" :schema="schemas.birthDate">
            <template #default="{ id }">
              <BDatePicker v-model="formModel.birthDate" :id="id" placeholder="Select date" />
            </template>
          </BFormItem>
          <BFormItem name="bio" label="Bio" :schema="schemas.bio">
            <template #default="{ id }">
              <BInput v-model="formModel.bio" :id="id" type="textarea" placeholder="Tell us about yourself" />
            </template>
          </BFormItem>
          <BFormItem name="notifications" label="Notifications">
            <BSwitch v-model="formModel.notifications" aria-label="Enable notifications" />
          </BFormItem>
          <BFormItem name="agree" label=" " :schema="schemas.agree" :colon="false">
            <BCheckbox v-model="formModel.agree">I agree to the terms and conditions</BCheckbox>
          </BFormItem>
          <BFormItem label=" " :colon="false">
            <div style="display: flex; gap: 8px;">
              <button type="submit" style="padding: 6px 16px; background: #0958d9; color: white; border: none; border-radius: 6px; cursor: pointer;">
                Submit
              </button>
              <button type="reset" style="padding: 6px 16px; border: 1px solid #d9d9d9; border-radius: 6px; cursor: pointer;">
                Reset
              </button>
            </div>
          </BFormItem>
        </BForm>
      </div>
    \`
  })
}`,...W.parameters?.docs?.source}}},G.parameters={...G.parameters,docs:{...G.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      BForm,
      BFormItem,
      BInput
    },
    setup: () => {
      const h = ref({
        name: '',
        email: ''
      });
      const v = ref({
        name: '',
        email: ''
      });
      const i = ref({
        name: '',
        email: ''
      });
      return {
        h,
        v,
        i
      };
    },
    template: \`
      <div style="padding: 40px; display: flex; flex-direction: column; gap: 40px; max-width: 600px;">
        <div>
          <h4 style="margin-bottom: 12px;">Horizontal (default)</h4>
          <BForm layout="horizontal" :model="h" label-width="80px">
            <BFormItem name="name" label="Name"><BInput v-model="h.name" placeholder="Name" /></BFormItem>
            <BFormItem name="email" label="Email"><BInput v-model="h.email" placeholder="Email" /></BFormItem>
          </BForm>
        </div>
        <div>
          <h4 style="margin-bottom: 12px;">Vertical</h4>
          <BForm layout="vertical" :model="v">
            <BFormItem name="name" label="Name"><BInput v-model="v.name" placeholder="Name" /></BFormItem>
            <BFormItem name="email" label="Email"><BInput v-model="v.email" placeholder="Email" /></BFormItem>
          </BForm>
        </div>
        <div>
          <h4 style="margin-bottom: 12px;">Inline</h4>
          <BForm layout="inline" :model="i">
            <BFormItem name="name" label="Name"><BInput v-model="i.name" placeholder="Name" /></BFormItem>
            <BFormItem name="email" label="Email"><BInput v-model="i.email" placeholder="Email" /></BFormItem>
            <BFormItem>
              <button type="submit" style="padding: 4px 12px; border: 1px solid #d9d9d9; border-radius: 6px; cursor: pointer;">Search</button>
            </BFormItem>
          </BForm>
        </div>
      </div>
    \`
  })
}`,...G.parameters?.docs?.source}}},K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      BForm,
      BFormItem,
      BInput
    },
    setup: () => {
      const formModel = ref({
        required: '',
        email: '',
        minLen: '',
        pattern: ''
      });
      const formRef = ref<InstanceType<typeof BForm> | null>(null);
      const schemas = {
        required: z.string().min(1, 'This field is required'),
        email: z.string().email('Not a valid email address'),
        minLen: z.string().min(5, 'Must be at least 5 characters'),
        pattern: z.string().regex(/^[A-Z]*$/, 'Only uppercase letters allowed')
      };
      return {
        formModel,
        formRef,
        schemas
      };
    },
    template: \`
      <div style="padding: 40px; max-width: 500px;">
        <BForm ref="formRef" :model="formModel" layout="vertical">
          <BFormItem name="required" label="Required Field" :schema="schemas.required" :required="true">
            <template #default="{ id }">
              <BInput v-model="formModel.required" :id="id" placeholder="Cannot be empty" />
            </template>
          </BFormItem>
          <BFormItem name="email" label="Email" :schema="schemas.email">
            <template #default="{ id }">
              <BInput v-model="formModel.email" :id="id" placeholder="Enter email" />
            </template>
          </BFormItem>
          <BFormItem name="minLen" label="Min Length (5)" :schema="schemas.minLen">
            <template #default="{ id }">
              <BInput v-model="formModel.minLen" :id="id" placeholder="At least 5 chars" />
            </template>
          </BFormItem>
          <BFormItem name="pattern" label="Uppercase Only" :schema="schemas.pattern">
            <template #default="{ id }">
              <BInput v-model="formModel.pattern" :id="id" placeholder="A-Z only" />
            </template>
          </BFormItem>
          <BFormItem>
            <div style="display: flex; gap: 8px;">
              <button type="submit" style="padding: 6px 16px; background: #0958d9; color: white; border: none; border-radius: 6px; cursor: pointer;">Validate</button>
              <button type="button" @click="formRef?.resetFields()" style="padding: 6px 16px; border: 1px solid #d9d9d9; border-radius: 6px; cursor: pointer;">Reset</button>
            </div>
          </BFormItem>
        </BForm>
      </div>
    \`
  })
}`,...K.parameters?.docs?.source}}},q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      BForm,
      BFormItem,
      BInput
    },
    setup: () => {
      const m1 = ref({
        name: '',
        email: ''
      });
      const m2 = ref({
        name: '',
        email: ''
      });
      const nameSchema = z.string().min(1, 'Required');
      return {
        m1,
        m2,
        nameSchema
      };
    },
    template: \`
      <div style="padding: 40px; display: flex; gap: 40px; max-width: 800px;">
        <div style="flex: 1;">
          <h4 style="margin-bottom: 12px;">requiredMark: true (default)</h4>
          <BForm layout="vertical" :model="m1" :required-mark="true">
            <BFormItem name="name" label="Name" :schema="nameSchema" :required="true">
              <BInput v-model="m1.name" placeholder="Required" />
            </BFormItem>
            <BFormItem name="email" label="Email">
              <BInput v-model="m1.email" placeholder="Optional" />
            </BFormItem>
          </BForm>
        </div>
        <div style="flex: 1;">
          <h4 style="margin-bottom: 12px;">requiredMark: "optional"</h4>
          <BForm layout="vertical" :model="m2" required-mark="optional">
            <BFormItem name="name" label="Name" :schema="nameSchema" :required="true">
              <BInput v-model="m2.name" placeholder="Required" />
            </BFormItem>
            <BFormItem name="email" label="Email">
              <BInput v-model="m2.email" placeholder="Optional" />
            </BFormItem>
          </BForm>
        </div>
      </div>
    \`
  })
}`,...q.parameters?.docs?.source}}},J.parameters={...J.parameters,docs:{...J.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      BForm,
      BFormItem,
      BInput
    },
    setup: () => {
      const m = ref({
        success: 'Good',
        warning: 'Hmm',
        error: 'Bad',
        validating: 'Loading...'
      });
      return {
        m
      };
    },
    template: \`
      <div style="padding: 40px; max-width: 500px;">
        <BForm layout="vertical" :model="m">
          <BFormItem name="success" label="Success" validate-status="success" :has-feedback="true" help="Looks good!">
            <template #default="{ id }">
              <BInput v-model="m.success" :id="id" />
            </template>
          </BFormItem>
          <BFormItem name="warning" label="Warning" validate-status="warning" :has-feedback="true" help="This might need attention">
            <template #default="{ id }">
              <BInput v-model="m.warning" :id="id" />
            </template>
          </BFormItem>
          <BFormItem name="error" label="Error" validate-status="error" :has-feedback="true" help="Please fix this field">
            <template #default="{ id }">
              <BInput v-model="m.error" :id="id" />
            </template>
          </BFormItem>
          <BFormItem name="validating" label="Validating" validate-status="validating" :has-feedback="true" help="Checking...">
            <template #default="{ id }">
              <BInput v-model="m.validating" :id="id" />
            </template>
          </BFormItem>
        </BForm>
      </div>
    \`
  })
}`,...J.parameters?.docs?.source}}},Y.parameters={...Y.parameters,docs:{...Y.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      BForm,
      BFormItem,
      BInput
    },
    setup: () => {
      const formModel = ref({
        username: '',
        email: ''
      });
      const schemas = {
        username: z.string().min(1, 'Username is required'),
        email: z.string().email('Invalid email')
      };
      return {
        formModel,
        schemas
      };
    },
    template: \`
      <div style="padding: 40px; max-width: 500px;">
        <BForm name="accessible-form" :model="formModel" layout="vertical">
          <BFormItem name="username" label="Username" :schema="schemas.username" :required="true" tooltip="Your unique login name">
            <template #default="{ id }">
              <BInput v-model="formModel.username" :id="id" placeholder="Enter username" />
            </template>
          </BFormItem>
          <BFormItem name="email" label="Email" :schema="schemas.email" extra="We will never share your email">
            <template #default="{ id }">
              <BInput v-model="formModel.email" :id="id" placeholder="Enter email" />
            </template>
          </BFormItem>
          <BFormItem>
            <button type="submit" style="padding: 6px 16px; background: #0958d9; color: white; border: none; border-radius: 6px; cursor: pointer;">Submit</button>
          </BFormItem>
        </BForm>
      </div>
    \`
  }),
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const form = canvasElement.querySelector('form');
    expect(form).toBeTruthy();
    expect(form!.getAttribute('role')).toBe('form');
    expect(form!.getAttribute('aria-label')).toBe('accessible-form');
    const formItems = canvasElement.querySelectorAll('.b-form-item');
    expect(formItems[0].getAttribute('role')).toBe('group');
    const requiredMark = canvasElement.querySelector('.b-form-item__required-mark');
    expect(requiredMark).toBeTruthy();
    expect(requiredMark!.getAttribute('aria-hidden')).toBe('true');
    const tooltip = canvasElement.querySelector('.b-form-item__tooltip');
    expect(tooltip).toBeTruthy();
    const submitBtn = canvas.getByRole('button', {
      name: /submit/i
    });
    await userEvent.click(submitBtn);
    await waitFor(() => {
      const helpEl = canvasElement.querySelector('.b-form-item__help');
      expect(helpEl).toBeTruthy();
      expect(helpEl!.getAttribute('role')).toBe('alert');
      expect(helpEl!.getAttribute('aria-live')).toBe('polite');
    });
    const inputs = canvasElement.querySelectorAll('input');
    (inputs[0] as HTMLInputElement).focus();
    expect(document.activeElement).toBe(inputs[0]);
    await userEvent.tab();
    expect(document.activeElement).toBe(inputs[1]);
  }
}`,...Y.parameters?.docs?.source}}},X.parameters={...X.parameters,docs:{...X.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      BForm,
      BFormItem,
      BInput
    },
    setup: () => {
      const m1 = ref({
        name: ''
      });
      const m2 = ref({
        name: ''
      });
      const m3 = ref({
        name: ''
      });
      const nameSchema = z.string().min(1, 'Required');
      return {
        m1,
        m2,
        m3,
        nameSchema
      };
    },
    template: \`
      <div style="padding: 40px; display: flex; gap: 40px; flex-wrap: wrap;">
        <div>
          <p style="margin-bottom: 8px; font-size: 12px; color: #666;">Default</p>
          <BForm layout="vertical" :model="m1">
            <BFormItem name="name" label="Name" :schema="nameSchema" :required="true">
              <BInput v-model="m1.name" placeholder="Default" />
            </BFormItem>
            <BFormItem><button type="submit" style="padding: 4px 12px; border: 1px solid #d9d9d9; border-radius: 6px;">Submit</button></BFormItem>
          </BForm>
        </div>

        <div class="custom-form-theme-purple">
          <p style="margin-bottom: 8px; font-size: 12px; color: #666;">Purple theme</p>
          <BForm layout="vertical" :model="m2">
            <BFormItem name="name" label="Name" :schema="nameSchema" :required="true">
              <BInput v-model="m2.name" placeholder="Purple" />
            </BFormItem>
            <BFormItem><button type="submit" style="padding: 4px 12px; border: 1px solid #d9d9d9; border-radius: 6px;">Submit</button></BFormItem>
          </BForm>
        </div>

        <div class="custom-form-theme-green">
          <p style="margin-bottom: 8px; font-size: 12px; color: #666;">Green theme</p>
          <BForm layout="vertical" :model="m3">
            <BFormItem name="name" label="Name" :schema="nameSchema" :required="true">
              <BInput v-model="m3.name" placeholder="Green" />
            </BFormItem>
            <BFormItem><button type="submit" style="padding: 4px 12px; border: 1px solid #d9d9d9; border-radius: 6px;">Submit</button></BFormItem>
          </BForm>
        </div>
      </div>

      <style>
        .custom-form-theme-purple .b-form {
          --b-form-label-color: #7c3aed;
          --b-form-label-required-mark-color: #a855f7;
          --b-form-error-color: #9333ea;
        }
        .custom-form-theme-green .b-form {
          --b-form-label-color: #16a34a;
          --b-form-label-required-mark-color: #22c55e;
          --b-form-error-color: #dc2626;
        }
      </style>
    \`
  })
}`,...X.parameters?.docs?.source}}},Z.parameters={...Z.parameters,docs:{...Z.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      BForm,
      BFormItem,
      BInput,
      BSelect
    },
    setup: () => {
      const formModel = ref({
        username: '',
        email: '',
        password: '',
        confirmPassword: '',
        phone: '',
        website: '',
        role: ''
      });
      const submitted = ref(false);
      const schemas = {
        username: z.string().min(3, 'Username must be at least 3 characters').max(20, 'Username cannot exceed 20 characters').regex(/^[a-z0-9_]+$/, 'Only lowercase letters, numbers, and underscores'),
        email: z.string().min(1, 'Email is required').email('Invalid email format'),
        password: z.string().min(8, 'Password must be at least 8 characters').regex(/[A-Z]/, 'Must contain at least one uppercase letter').regex(/[0-9]/, 'Must contain at least one number').regex(/[^A-Za-z0-9]/, 'Must contain at least one special character'),
        confirmPassword: z.string().min(1, 'Please confirm your password'),
        phone: z.string().min(1, 'Phone number is required').regex(/^\\+?[0-9]{10,15}$/, 'Enter a valid phone number (10-15 digits)'),
        website: z.string().refine(val => val === '' || /^https?:\\/\\/.+\\..+/.test(val), {
          message: 'Must be a valid URL starting with http:// or https://'
        }),
        role: z.string().min(1, 'Please select a role')
      };
      const roleOptions = [{
        label: 'Developer',
        value: 'developer'
      }, {
        label: 'Designer',
        value: 'designer'
      }, {
        label: 'Product Manager',
        value: 'pm'
      }];
      const onFinish = () => {
        submitted.value = true;
      };
      return {
        formModel,
        submitted,
        schemas,
        roleOptions,
        onFinish
      };
    },
    template: \`
      <div style="padding: 40px; max-width: 520px;">
        <BForm :model="formModel" layout="vertical" @finish="onFinish">
          <BFormItem name="username" label="Username" :schema="schemas.username" :required="true">
            <template #default="{ id }">
              <BInput v-model="formModel.username" :id="id" placeholder="lowercase letters, numbers, underscores" />
            </template>
          </BFormItem>
          <BFormItem name="email" label="Email" :schema="schemas.email" :required="true">
            <template #default="{ id }">
              <BInput v-model="formModel.email" :id="id" placeholder="you@example.com" />
            </template>
          </BFormItem>
          <BFormItem name="password" label="Password" :schema="schemas.password" :required="true">
            <template #default="{ id }">
              <BInput v-model="formModel.password" :id="id" type="password" placeholder="Min 8 chars, uppercase, number, special" />
            </template>
          </BFormItem>
          <BFormItem name="confirmPassword" label="Confirm Password" :schema="schemas.confirmPassword" :required="true">
            <template #default="{ id }">
              <BInput v-model="formModel.confirmPassword" :id="id" type="password" placeholder="Re-enter password" />
            </template>
          </BFormItem>
          <BFormItem name="phone" label="Phone" :schema="schemas.phone" :required="true">
            <template #default="{ id }">
              <BInput v-model="formModel.phone" :id="id" placeholder="+1234567890" />
            </template>
          </BFormItem>
          <BFormItem name="website" label="Website" :schema="schemas.website">
            <template #default="{ id }">
              <BInput v-model="formModel.website" :id="id" placeholder="https://example.com" />
            </template>
          </BFormItem>
          <BFormItem name="role" label="Role" :schema="schemas.role" :required="true">
            <template #default="{ id }">
              <BSelect v-model="formModel.role" :id="id" :options="roleOptions" placeholder="Select a role" />
            </template>
          </BFormItem>
          <BFormItem>
            <button type="submit" style="padding: 6px 16px; background: #0958d9; color: white; border: none; border-radius: 6px; cursor: pointer;">Register</button>
          </BFormItem>
        </BForm>
        <p data-testid="submitted" style="margin-top: 12px; font-size: 12px;">Submitted: {{ submitted }}</p>
      </div>
    \`
  }),
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const submitBtn = canvas.getByRole('button', {
      name: /register/i
    });

    // Step 1: Submit empty form — should show multiple required errors
    await userEvent.click(submitBtn);
    await waitFor(() => {
      expect(canvasElement.querySelectorAll('.b-form-item__help--error').length).toBeGreaterThanOrEqual(5);
      expect(canvasElement.textContent).toContain('Username must be at least 3 characters');
      expect(canvasElement.textContent).toContain('Email is required');
      expect(canvasElement.textContent).toContain('Password must be at least 8 characters');
      expect(canvasElement.textContent).toContain('Phone number is required');
      expect(canvasElement.textContent).toContain('Please select a role');
    });

    // Step 2: Type invalid username (uppercase, spaces) — regex error
    const inputs = canvasElement.querySelectorAll('input');
    await userEvent.type(inputs[0], 'Bad User!');
    await userEvent.click(submitBtn);
    await waitFor(() => {
      expect(canvasElement.textContent).toContain('Only lowercase letters, numbers, and underscores');
    });

    // Step 3: Fix username, type invalid email
    await userEvent.clear(inputs[0]);
    await userEvent.type(inputs[0], 'good_user');
    await userEvent.type(inputs[1], 'not-an-email');
    await userEvent.click(submitBtn);
    await waitFor(() => {
      expect(canvasElement.textContent).toContain('Invalid email format');
    });

    // Step 4: Fix email, type weak password (no uppercase, no number, no special)
    await userEvent.clear(inputs[1]);
    await userEvent.type(inputs[1], 'user@test.com');
    await userEvent.type(inputs[2], 'weakpass');
    await userEvent.click(submitBtn);
    await waitFor(() => {
      expect(canvasElement.textContent).toContain('Must contain at least one uppercase letter');
    });

    // Step 5: Fix password with strong one, add confirm, valid phone, select role
    await userEvent.clear(inputs[2]);
    await userEvent.type(inputs[2], 'Str0ng!Pass');
    await userEvent.type(inputs[3], 'Str0ng!Pass');
    await userEvent.type(inputs[4], '+1234567890');

    // Select a role via the BSelect
    const selectTrigger = canvasElement.querySelector('.b-select');
    if (selectTrigger) await userEvent.click(selectTrigger);
    await waitFor(() => {
      const option = canvasElement.querySelector('.b-select__option');
      if (option) userEvent.click(option);
    });

    // Step 6: Submit valid form
    await userEvent.click(submitBtn);
    await waitFor(() => {
      expect(canvas.getByTestId('submitted').textContent).toContain('true');
    });
  }
}`,...Z.parameters?.docs?.source}}},Q.parameters={...Q.parameters,docs:{...Q.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      BForm,
      BFormItem,
      BInput
    },
    setup: () => {
      const formModel = ref({
        name: '',
        email: ''
      });
      const formRef = ref<InstanceType<typeof BForm> | null>(null);
      const nameItemRef = ref<InstanceType<typeof BFormItem> | null>(null);
      const emailItemRef = ref<InstanceType<typeof BFormItem> | null>(null);
      const schemas = {
        name: z.string().min(1, 'Name is required'),
        email: z.string().email('Invalid email')
      };
      return {
        formModel,
        formRef,
        nameItemRef,
        emailItemRef,
        schemas
      };
    },
    template: \`
      <div style="padding: 40px; max-width: 500px;">
        <BForm ref="formRef" :model="formModel" layout="vertical">
          <BFormItem ref="nameItemRef" name="name" label="Name" :schema="schemas.name" :required="true">
            <template #default="{ id, onBlur }">
              <BInput v-model="formModel.name" :id="id" placeholder="Type to see dirty state" @blur="onBlur" />
            </template>
          </BFormItem>
          <BFormItem ref="emailItemRef" name="email" label="Email" :schema="schemas.email">
            <template #default="{ id, onBlur }">
              <BInput v-model="formModel.email" :id="id" placeholder="Focus then blur for touched" @blur="onBlur" />
            </template>
          </BFormItem>
          <BFormItem>
            <div style="display: flex; gap: 8px;">
              <button type="submit" style="padding: 6px 16px; background: #0958d9; color: white; border: none; border-radius: 6px; cursor: pointer;">Submit</button>
              <button type="button" @click="formRef?.resetFields()" style="padding: 6px 16px; border: 1px solid #d9d9d9; border-radius: 6px; cursor: pointer;">Reset</button>
            </div>
          </BFormItem>
        </BForm>
        <div style="margin-top: 16px; padding: 12px; background: #f5f5f5; border-radius: 6px; font-size: 12px; font-family: monospace;">
          <p><strong>Name field:</strong> dirty={{ nameItemRef?.dirty?.value ?? false }}, touched={{ nameItemRef?.touched?.value ?? false }}</p>
          <p><strong>Email field:</strong> dirty={{ emailItemRef?.dirty?.value ?? false }}, touched={{ emailItemRef?.touched?.value ?? false }}</p>
          <p><strong>Form valid:</strong> {{ formRef?.isValid }}</p>
        </div>
      </div>
    \`
  })
}`,...Q.parameters?.docs?.source}}},$.parameters={...$.parameters,docs:{...$.parameters?.docs,source:{originalSource:`{
  render: () => ({
    template: \`
      <div style="padding: 40px; font-family: monospace; font-size: 13px; max-width: 900px;">
        <h3 style="margin-bottom: 16px; font-size: 16px; font-family: sans-serif;">BForm Design Tokens</h3>
        <p style="margin-bottom: 16px; font-size: 13px; font-family: sans-serif; color: #666;">
          Override these CSS variables on <code>.b-form</code> or an ancestor to customize the component appearance.
        </p>
        <table style="width: 100%; border-collapse: collapse; background: #ffffff;">
          <thead>
            <tr style="border-bottom: 2px solid #e5e7eb;">
              <th style="text-align: left; padding: 8px 12px;">Variable</th>
              <th style="text-align: left; padding: 8px 12px;">Default</th>
              <th style="text-align: left; padding: 8px 12px;">Description</th>
            </tr>
          </thead>
          <tbody>
            <tr style="border-bottom: 1px solid #f3f4f6;">
              <td style="padding: 8px 12px;">--b-form-item-margin-bottom</td>
              <td style="padding: 8px 12px;">24px</td>
              <td style="padding: 8px 12px;">Standard spacing below form items</td>
            </tr>
            <tr style="border-bottom: 1px solid #f3f4f6;">
              <td style="padding: 8px 12px;">--b-form-inline-item-margin-bottom</td>
              <td style="padding: 8px 12px;">0</td>
              <td style="padding: 8px 12px;">Spacing below items in inline layout</td>
            </tr>
            <tr style="border-bottom: 1px solid #f3f4f6;">
              <td style="padding: 8px 12px;">--b-form-label-color</td>
              <td style="padding: 8px 12px;">rgba(0, 0, 0, 0.88)</td>
              <td style="padding: 8px 12px;">Text color for labels</td>
            </tr>
            <tr style="border-bottom: 1px solid #f3f4f6;">
              <td style="padding: 8px 12px;">--b-form-label-font-size</td>
              <td style="padding: 8px 12px;">14px</td>
              <td style="padding: 8px 12px;">Font size for labels</td>
            </tr>
            <tr style="border-bottom: 1px solid #f3f4f6;">
              <td style="padding: 8px 12px;">--b-form-label-height</td>
              <td style="padding: 8px 12px;">32px</td>
              <td style="padding: 8px 12px;">Height of label elements</td>
            </tr>
            <tr style="border-bottom: 1px solid #f3f4f6;">
              <td style="padding: 8px 12px;">--b-form-label-colon-margin-inline-start</td>
              <td style="padding: 8px 12px;">2px</td>
              <td style="padding: 8px 12px;">Left margin before label colon</td>
            </tr>
            <tr style="border-bottom: 1px solid #f3f4f6;">
              <td style="padding: 8px 12px;">--b-form-label-colon-margin-inline-end</td>
              <td style="padding: 8px 12px;">8px</td>
              <td style="padding: 8px 12px;">Right margin after label colon</td>
            </tr>
            <tr style="border-bottom: 1px solid #f3f4f6;">
              <td style="padding: 8px 12px;">--b-form-label-required-mark-color</td>
              <td style="padding: 8px 12px;">#cf1322</td>
              <td style="padding: 8px 12px;">Color of the required asterisk</td>
            </tr>
            <tr style="border-bottom: 1px solid #f3f4f6;">
              <td style="padding: 8px 12px;">--b-form-vertical-label-margin</td>
              <td style="padding: 8px 12px;">0</td>
              <td style="padding: 8px 12px;">Margin for labels in vertical layout</td>
            </tr>
            <tr style="border-bottom: 1px solid #f3f4f6;">
              <td style="padding: 8px 12px;">--b-form-vertical-label-padding</td>
              <td style="padding: 8px 12px;">0 0 8px</td>
              <td style="padding: 8px 12px;">Padding for labels in vertical layout</td>
            </tr>
            <tr style="border-bottom: 1px solid #f3f4f6;">
              <td style="padding: 8px 12px;">--b-form-help-color</td>
              <td style="padding: 8px 12px;">rgba(0, 0, 0, 0.65)</td>
              <td style="padding: 8px 12px;">Color for help/extra text</td>
            </tr>
            <tr style="border-bottom: 1px solid #f3f4f6;">
              <td style="padding: 8px 12px;">--b-form-error-color</td>
              <td style="padding: 8px 12px;">#cf1322</td>
              <td style="padding: 8px 12px;">Color for error messages</td>
            </tr>
            <tr style="border-bottom: 1px solid #f3f4f6;">
              <td style="padding: 8px 12px;">--b-form-warning-color</td>
              <td style="padding: 8px 12px;">#874d00</td>
              <td style="padding: 8px 12px;">Color for warning messages</td>
            </tr>
            <tr>
              <td style="padding: 8px 12px;">--b-form-success-color</td>
              <td style="padding: 8px 12px;">#52c41a</td>
              <td style="padding: 8px 12px;">Color for success feedback</td>
            </tr>
          </tbody>
        </table>
      </div>
    \`
  })
}`,...$.parameters?.docs?.source}}},jt=[`Playground`,`Layouts`,`Validation`,`RequiredMarkVariants`,`ValidateStatus`,`Accessibility`,`Theming`,`InteractionTest`,`DirtyTouchedState`,`DesignTokens`]}))();export{Y as Accessibility,$ as DesignTokens,Q as DirtyTouchedState,Z as InteractionTest,G as Layouts,W as Playground,q as RequiredMarkVariants,X as Theming,J as ValidateStatus,K as Validation,jt as __namedExportsOrder,At as default};