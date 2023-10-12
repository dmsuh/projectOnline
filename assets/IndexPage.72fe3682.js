import{i as re,w as N,o as ie,e as se,a8 as Pe,g as G,r as A,a as x,a9 as Te,aa as Ae,ab as Ie,t as Oe,f as Y,x as De,ac as Ne,M as je,h as k,D as ee,Z as be,ad as ze,d as W,ae as Ue,af as Ke,s as Le,c as ye,E as ke,j as J,m as Ze,L as He,ag as Qe,U as Ye,a1 as We,V as de,W as Xe,X as ne,ah as fe,a4 as xe,_ as Ce,a3 as Je,$ as ce,a0 as we,Y as te,a2 as Me}from"./index.bb9d502d.js";import{a as Ge,b as et,u as tt}from"./use-dark.6f30377e.js";import{w as nt}from"./vue-yandex-maps.esm.f976663f.js";function lt({validate:e,resetValidation:t,requiresQForm:i}){const u=re(Pe,!1);if(u!==!1){const{props:f,proxy:d}=G();Object.assign(d,{validate:e,resetValidation:t}),N(()=>f.disable,c=>{c===!0?(typeof t=="function"&&t(),u.unbindComponent(d)):u.bindComponent(d)}),ie(()=>{f.disable!==!0&&u.bindComponent(d)}),se(()=>{f.disable!==!0&&u.unbindComponent(d)})}else i===!0&&console.error("Parent QForm not found on useFormChild()!")}const Se=/^#[0-9a-fA-F]{3}([0-9a-fA-F]{3})?$/,_e=/^#[0-9a-fA-F]{4}([0-9a-fA-F]{4})?$/,Re=/^#([0-9a-fA-F]{3}|[0-9a-fA-F]{4}|[0-9a-fA-F]{6}|[0-9a-fA-F]{8})$/,le=/^rgb\(((0|[1-9][\d]?|1[\d]{0,2}|2[\d]?|2[0-4][\d]|25[0-5]),){2}(0|[1-9][\d]?|1[\d]{0,2}|2[\d]?|2[0-4][\d]|25[0-5])\)$/,oe=/^rgba\(((0|[1-9][\d]?|1[\d]{0,2}|2[\d]?|2[0-4][\d]|25[0-5]),){2}(0|[1-9][\d]?|1[\d]{0,2}|2[\d]?|2[0-4][\d]|25[0-5]),(0|0\.[0-9]+[1-9]|0\.[1-9]+|1)\)$/,ve={date:e=>/^-?[\d]+\/[0-1]\d\/[0-3]\d$/.test(e),time:e=>/^([0-1]?\d|2[0-3]):[0-5]\d$/.test(e),fulltime:e=>/^([0-1]?\d|2[0-3]):[0-5]\d:[0-5]\d$/.test(e),timeOrFulltime:e=>/^([0-1]?\d|2[0-3]):[0-5]\d(:[0-5]\d)?$/.test(e),email:e=>/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(e),hexColor:e=>Se.test(e),hexaColor:e=>_e.test(e),hexOrHexaColor:e=>Re.test(e),rgbColor:e=>le.test(e),rgbaColor:e=>oe.test(e),rgbOrRgbaColor:e=>le.test(e)||oe.test(e),hexOrRgbColor:e=>Se.test(e)||le.test(e),hexaOrRgbaColor:e=>_e.test(e)||oe.test(e),anyColor:e=>Re.test(e)||le.test(e)||oe.test(e)},ot=[!0,!1,"ondemand"],at={modelValue:{},error:{type:Boolean,default:null},errorMessage:String,noErrorIcon:Boolean,rules:Array,reactiveRules:Boolean,lazyRules:{type:[Boolean,String],validator:e=>ot.includes(e)}};function rt(e,t){const{props:i,proxy:u}=G(),f=A(!1),d=A(null),c=A(null);lt({validate:T,resetValidation:B});let v=0,b;const _=x(()=>i.rules!==void 0&&i.rules!==null&&i.rules.length!==0),C=x(()=>i.disable!==!0&&_.value===!0),y=x(()=>i.error===!0||f.value===!0),H=x(()=>typeof i.errorMessage=="string"&&i.errorMessage.length!==0?i.errorMessage:d.value);N(()=>i.modelValue,()=>{U()}),N(()=>i.reactiveRules,D=>{D===!0?b===void 0&&(b=N(()=>i.rules,()=>{U(!0)})):b!==void 0&&(b(),b=void 0)},{immediate:!0}),N(e,D=>{D===!0?c.value===null&&(c.value=!1):c.value===!1&&(c.value=!0,C.value===!0&&i.lazyRules!=="ondemand"&&t.value===!1&&O())});function B(){v++,t.value=!1,c.value=null,f.value=!1,d.value=null,O.cancel()}function T(D=i.modelValue){if(C.value!==!0)return!0;const F=++v,Q=t.value!==!0?()=>{c.value=!0}:()=>{},z=(R,M)=>{R===!0&&Q(),f.value=R,d.value=M||null,t.value=!1},j=[];for(let R=0;R<i.rules.length;R++){const M=i.rules[R];let $;if(typeof M=="function"?$=M(D,ve):typeof M=="string"&&ve[M]!==void 0&&($=ve[M](D)),$===!1||typeof $=="string")return z(!0,$),!1;$!==!0&&$!==void 0&&j.push($)}return j.length===0?(z(!1),!0):(t.value=!0,Promise.all(j).then(R=>{if(R===void 0||Array.isArray(R)===!1||R.length===0)return F===v&&z(!1),!0;const M=R.find($=>$===!1||typeof $=="string");return F===v&&z(M!==void 0,M),M===void 0},R=>(F===v&&(console.error(R),z(!0)),!1)))}function U(D){C.value===!0&&i.lazyRules!=="ondemand"&&(c.value===!0||i.lazyRules!==!0&&D!==!0)&&O()}const O=Te(T,0);return se(()=>{b!==void 0&&b(),O.cancel()}),Object.assign(u,{resetValidation:B,validate:T}),Ae(u,"hasError",()=>y.value),{isDirtyModel:c,hasRules:_,hasError:y,errorMessage:H,validate:T,resetValidation:B}}const qe=/^on[A-Z]/;function ut(e,t){const i={listeners:A({}),attributes:A({})};function u(){const f={},d={};for(const c in e)c!=="class"&&c!=="style"&&qe.test(c)===!1&&(f[c]=e[c]);for(const c in t.props)qe.test(c)===!0&&(d[c]=t.props[c]);i.attributes.value=f,i.listeners.value=d}return Ie(u),u(),i}let ge,ae=0;const P=new Array(256);for(let e=0;e<256;e++)P[e]=(e+256).toString(16).substring(1);const it=(()=>{const e=typeof crypto!="undefined"?crypto:typeof window!="undefined"?window.crypto||window.msCrypto:void 0;if(e!==void 0){if(e.randomBytes!==void 0)return e.randomBytes;if(e.getRandomValues!==void 0)return t=>{const i=new Uint8Array(t);return e.getRandomValues(i),i}}return t=>{const i=[];for(let u=t;u>0;u--)i.push(Math.floor(Math.random()*256));return i}})(),Fe=4096;function st(){(ge===void 0||ae+16>Fe)&&(ae=0,ge=it(Fe));const e=Array.prototype.slice.call(ge,ae,ae+=16);return e[6]=e[6]&15|64,e[8]=e[8]&63|128,P[e[0]]+P[e[1]]+P[e[2]]+P[e[3]]+"-"+P[e[4]]+P[e[5]]+"-"+P[e[6]]+P[e[7]]+"-"+P[e[8]]+P[e[9]]+"-"+P[e[10]]+P[e[11]]+P[e[12]]+P[e[13]]+P[e[14]]+P[e[15]]}let me=[],dt=[];function Be(e){dt.length===0?e():me.push(e)}function ft(e){me=me.filter(t=>t!==e)}function he(e){return e===void 0?`f_${st()}`:e}function pe(e){return e!=null&&(""+e).length!==0}const ct={...Ge,...at,label:String,stackLabel:Boolean,hint:String,hideHint:Boolean,prefix:String,suffix:String,labelColor:String,color:String,bgColor:String,filled:Boolean,outlined:Boolean,borderless:Boolean,standout:[Boolean,String],square:Boolean,loading:Boolean,labelSlot:Boolean,bottomSlots:Boolean,hideBottomSpace:Boolean,rounded:Boolean,dense:Boolean,itemAligned:Boolean,counter:Boolean,clearable:Boolean,clearIcon:String,disable:Boolean,readonly:Boolean,autofocus:Boolean,for:String,maxlength:[Number,String]},vt=["update:modelValue","clear","focus","blur","popupShow","popupHide"];function gt(){const{props:e,attrs:t,proxy:i,vnode:u}=G();return{isDark:et(e,i.$q),editable:x(()=>e.disable!==!0&&e.readonly!==!0),innerLoading:A(!1),focused:A(!1),hasPopupOpen:!1,splitAttrs:ut(t,u),targetUid:A(he(e.for)),rootRef:A(null),targetRef:A(null),controlRef:A(null)}}function mt(e){const{props:t,emit:i,slots:u,attrs:f,proxy:d}=G(),{$q:c}=d;let v=null;e.hasValue===void 0&&(e.hasValue=x(()=>pe(t.modelValue))),e.emitValue===void 0&&(e.emitValue=n=>{i("update:modelValue",n)}),e.controlEvents===void 0&&(e.controlEvents={onFocusin:a,onFocusout:o}),Object.assign(e,{clearValue:s,onControlFocusin:a,onControlFocusout:o,focus:M}),e.computedCounter===void 0&&(e.computedCounter=x(()=>{if(t.counter!==!1){const n=typeof t.modelValue=="string"||typeof t.modelValue=="number"?(""+t.modelValue).length:Array.isArray(t.modelValue)===!0?t.modelValue.length:0,p=t.maxlength!==void 0?t.maxlength:t.maxValues;return n+(p!==void 0?" / "+p:"")}}));const{isDirtyModel:b,hasRules:_,hasError:C,errorMessage:y,resetValidation:H}=rt(e.focused,e.innerLoading),B=e.floatingLabel!==void 0?x(()=>t.stackLabel===!0||e.focused.value===!0||e.floatingLabel.value===!0):x(()=>t.stackLabel===!0||e.focused.value===!0||e.hasValue.value===!0),T=x(()=>t.bottomSlots===!0||t.hint!==void 0||_.value===!0||t.counter===!0||t.error!==null),U=x(()=>t.filled===!0?"filled":t.outlined===!0?"outlined":t.borderless===!0?"borderless":t.standout?"standout":"standard"),O=x(()=>`q-field row no-wrap items-start q-field--${U.value}`+(e.fieldClass!==void 0?` ${e.fieldClass.value}`:"")+(t.rounded===!0?" q-field--rounded":"")+(t.square===!0?" q-field--square":"")+(B.value===!0?" q-field--float":"")+(F.value===!0?" q-field--labeled":"")+(t.dense===!0?" q-field--dense":"")+(t.itemAligned===!0?" q-field--item-aligned q-item-type":"")+(e.isDark.value===!0?" q-field--dark":"")+(e.getControl===void 0?" q-field--auto-height":"")+(e.focused.value===!0?" q-field--focused":"")+(C.value===!0?" q-field--error":"")+(C.value===!0||e.focused.value===!0?" q-field--highlighted":"")+(t.hideBottomSpace!==!0&&T.value===!0?" q-field--with-bottom":"")+(t.disable===!0?" q-field--disabled":t.readonly===!0?" q-field--readonly":"")),D=x(()=>"q-field__control relative-position row no-wrap"+(t.bgColor!==void 0?` bg-${t.bgColor}`:"")+(C.value===!0?" text-negative":typeof t.standout=="string"&&t.standout.length!==0&&e.focused.value===!0?` ${t.standout}`:t.color!==void 0?` text-${t.color}`:"")),F=x(()=>t.labelSlot===!0||t.label!==void 0),Q=x(()=>"q-field__label no-pointer-events absolute ellipsis"+(t.labelColor!==void 0&&C.value!==!0?` text-${t.labelColor}`:"")),z=x(()=>({id:e.targetUid.value,editable:e.editable.value,focused:e.focused.value,floatingLabel:B.value,modelValue:t.modelValue,emitValue:e.emitValue})),j=x(()=>{const n={for:e.targetUid.value};return t.disable===!0?n["aria-disabled"]="true":t.readonly===!0&&(n["aria-readonly"]="true"),n});N(()=>t.for,n=>{e.targetUid.value=he(n)});function R(){const n=document.activeElement;let p=e.targetRef!==void 0&&e.targetRef.value;p&&(n===null||n.id!==e.targetUid.value)&&(p.hasAttribute("tabindex")===!0||(p=p.querySelector("[tabindex]")),p&&p!==n&&p.focus({preventScroll:!0}))}function M(){Be(R)}function $(){ft(R);const n=document.activeElement;n!==null&&e.rootRef.value.contains(n)&&n.blur()}function a(n){v!==null&&(clearTimeout(v),v=null),e.editable.value===!0&&e.focused.value===!1&&(e.focused.value=!0,i("focus",n))}function o(n,p){v!==null&&clearTimeout(v),v=setTimeout(()=>{v=null,!(document.hasFocus()===!0&&(e.hasPopupOpen===!0||e.controlRef===void 0||e.controlRef.value===null||e.controlRef.value.contains(document.activeElement)!==!1))&&(e.focused.value===!0&&(e.focused.value=!1,i("blur",n)),p!==void 0&&p())})}function s(n){Oe(n),c.platform.is.mobile!==!0?(e.targetRef!==void 0&&e.targetRef.value||e.rootRef.value).focus():e.rootRef.value.contains(document.activeElement)===!0&&document.activeElement.blur(),t.type==="file"&&(e.inputRef.value.value=null),i("update:modelValue",null),i("clear",t.modelValue),Y(()=>{H(),c.platform.is.mobile!==!0&&(b.value=!1)})}function r(){const n=[];return u.prepend!==void 0&&n.push(k("div",{class:"q-field__prepend q-field__marginal row no-wrap items-center",key:"prepend",onClick:ee},u.prepend())),n.push(k("div",{class:"q-field__control-container col relative-position row no-wrap q-anchor--skip"},m())),C.value===!0&&t.noErrorIcon===!1&&n.push(S("error",[k(be,{name:c.iconSet.field.error,color:"negative"})])),t.loading===!0||e.innerLoading.value===!0?n.push(S("inner-loading-append",u.loading!==void 0?u.loading():[k(ze,{color:t.color})])):t.clearable===!0&&e.hasValue.value===!0&&e.editable.value===!0&&n.push(S("inner-clearable-append",[k(be,{class:"q-field__focusable-action",tag:"button",name:t.clearIcon||c.iconSet.field.clear,tabindex:0,type:"button","aria-hidden":null,role:null,onClick:s})])),u.append!==void 0&&n.push(k("div",{class:"q-field__append q-field__marginal row no-wrap items-center",key:"append",onClick:ee},u.append())),e.getInnerAppend!==void 0&&n.push(S("inner-append",e.getInnerAppend())),e.getControlChild!==void 0&&n.push(e.getControlChild()),n}function m(){const n=[];return t.prefix!==void 0&&t.prefix!==null&&n.push(k("div",{class:"q-field__prefix no-pointer-events row items-center"},t.prefix)),e.getShadowControl!==void 0&&e.hasShadow.value===!0&&n.push(e.getShadowControl()),e.getControl!==void 0?n.push(e.getControl()):u.rawControl!==void 0?n.push(u.rawControl()):u.control!==void 0&&n.push(k("div",{ref:e.targetRef,class:"q-field__native row",tabindex:-1,...e.splitAttrs.attributes.value,"data-autofocus":t.autofocus===!0||void 0},u.control(z.value))),F.value===!0&&n.push(k("div",{class:Q.value},W(u.label,t.label))),t.suffix!==void 0&&t.suffix!==null&&n.push(k("div",{class:"q-field__suffix no-pointer-events row items-center"},t.suffix)),n.concat(W(u.default))}function g(){let n,p;C.value===!0?y.value!==null?(n=[k("div",{role:"alert"},y.value)],p=`q--slot-error-${y.value}`):(n=W(u.error),p="q--slot-error"):(t.hideHint!==!0||e.focused.value===!0)&&(t.hint!==void 0?(n=[k("div",t.hint)],p=`q--slot-hint-${t.hint}`):(n=W(u.hint),p="q--slot-hint"));const L=t.counter===!0||u.counter!==void 0;if(t.hideBottomSpace===!0&&L===!1&&n===void 0)return;const w=k("div",{key:p,class:"q-field__messages col"},n);return k("div",{class:"q-field__bottom row items-start q-field__bottom--"+(t.hideBottomSpace!==!0?"animated":"stale"),onClick:ee},[t.hideBottomSpace===!0?w:k(Ue,{name:"q-transition--field-message"},()=>w),L===!0?k("div",{class:"q-field__counter"},u.counter!==void 0?u.counter():e.computedCounter.value):null])}function S(n,p){return p===null?null:k("div",{key:n,class:"q-field__append q-field__marginal row no-wrap items-center q-anchor--skip"},p)}let h=!1;return De(()=>{h=!0}),Ne(()=>{h===!0&&t.autofocus===!0&&d.focus()}),ie(()=>{je.value===!0&&t.for===void 0&&(e.targetUid.value=he()),t.autofocus===!0&&d.focus()}),se(()=>{v!==null&&clearTimeout(v)}),Object.assign(d,{focus:M,blur:$}),function(){const p=e.getControl===void 0&&u.control===void 0?{...e.splitAttrs.attributes.value,"data-autofocus":t.autofocus===!0||void 0,...j.value}:j.value;return k("label",{ref:e.rootRef,class:[O.value,f.class],style:f.style,...p},[u.before!==void 0?k("div",{class:"q-field__before q-field__marginal row no-wrap items-center",onClick:ee},u.before()):null,k("div",{class:"q-field__inner relative-position col self-stretch"},[k("div",{ref:e.controlRef,class:D.value,tabindex:-1,...e.controlEvents},r()),T.value===!0?g():null]),u.after!==void 0?k("div",{class:"q-field__after q-field__marginal row no-wrap items-center",onClick:ee},u.after()):null])}}const Ve={date:"####/##/##",datetime:"####/##/## ##:##",time:"##:##",fulltime:"##:##:##",phone:"(###) ### - ####",card:"#### #### #### ####"},ue={"#":{pattern:"[\\d]",negate:"[^\\d]"},S:{pattern:"[a-zA-Z]",negate:"[^a-zA-Z]"},N:{pattern:"[0-9a-zA-Z]",negate:"[^0-9a-zA-Z]"},A:{pattern:"[a-zA-Z]",negate:"[^a-zA-Z]",transform:e=>e.toLocaleUpperCase()},a:{pattern:"[a-zA-Z]",negate:"[^a-zA-Z]",transform:e=>e.toLocaleLowerCase()},X:{pattern:"[0-9a-zA-Z]",negate:"[^0-9a-zA-Z]",transform:e=>e.toLocaleUpperCase()},x:{pattern:"[0-9a-zA-Z]",negate:"[^0-9a-zA-Z]",transform:e=>e.toLocaleLowerCase()}},$e=Object.keys(ue);$e.forEach(e=>{ue[e].regex=new RegExp(ue[e].pattern)});const ht=new RegExp("\\\\([^.*+?^${}()|([\\]])|([.*+?^${}()|[\\]])|(["+$e.join("")+"])|(.)","g"),Ee=/[.*+?^${}()|[\]\\]/g,V=String.fromCharCode(1),pt={mask:String,reverseFillMask:Boolean,fillMask:[Boolean,String],unmaskedValue:Boolean};function yt(e,t,i,u){let f,d,c,v,b,_;const C=A(null),y=A(B());function H(){return e.autogrow===!0||["textarea","text","search","url","tel","password"].includes(e.type)}N(()=>e.type+e.autogrow,U),N(()=>e.mask,a=>{if(a!==void 0)O(y.value,!0);else{const o=M(y.value);U(),e.modelValue!==o&&t("update:modelValue",o)}}),N(()=>e.fillMask+e.reverseFillMask,()=>{C.value===!0&&O(y.value,!0)}),N(()=>e.unmaskedValue,()=>{C.value===!0&&O(y.value)});function B(){if(U(),C.value===!0){const a=j(M(e.modelValue));return e.fillMask!==!1?$(a):a}return e.modelValue}function T(a){if(a<f.length)return f.slice(-a);let o="",s=f;const r=s.indexOf(V);if(r>-1){for(let m=a-s.length;m>0;m--)o+=V;s=s.slice(0,r)+o+s.slice(r)}return s}function U(){if(C.value=e.mask!==void 0&&e.mask.length!==0&&H(),C.value===!1){v=void 0,f="",d="";return}const a=Ve[e.mask]===void 0?e.mask:Ve[e.mask],o=typeof e.fillMask=="string"&&e.fillMask.length!==0?e.fillMask.slice(0,1):"_",s=o.replace(Ee,"\\$&"),r=[],m=[],g=[];let S=e.reverseFillMask===!0,h="",n="";a.replace(ht,(E,l,q,Z,K)=>{if(Z!==void 0){const I=ue[Z];g.push(I),n=I.negate,S===!0&&(m.push("(?:"+n+"+)?("+I.pattern+"+)?(?:"+n+"+)?("+I.pattern+"+)?"),S=!1),m.push("(?:"+n+"+)?("+I.pattern+")?")}else if(q!==void 0)h="\\"+(q==="\\"?"":q),g.push(q),r.push("([^"+h+"]+)?"+h+"?");else{const I=l!==void 0?l:K;h=I==="\\"?"\\\\\\\\":I.replace(Ee,"\\\\$&"),g.push(I),r.push("([^"+h+"]+)?"+h+"?")}});const p=new RegExp("^"+r.join("")+"("+(h===""?".":"[^"+h+"]")+"+)?"+(h===""?"":"["+h+"]*")+"$"),L=m.length-1,w=m.map((E,l)=>l===0&&e.reverseFillMask===!0?new RegExp("^"+s+"*"+E):l===L?new RegExp("^"+E+"("+(n===""?".":n)+"+)?"+(e.reverseFillMask===!0?"$":s+"*")):new RegExp("^"+E));c=g,v=E=>{const l=p.exec(e.reverseFillMask===!0?E:E.slice(0,g.length+1));l!==null&&(E=l.slice(1).join(""));const q=[],Z=w.length;for(let K=0,I=E;K<Z;K++){const X=w[K].exec(I);if(X===null)break;I=I.slice(X.shift().length),q.push(...X)}return q.length!==0?q.join(""):E},f=g.map(E=>typeof E=="string"?E:V).join(""),d=f.split(V).join(o)}function O(a,o,s){const r=u.value,m=r.selectionEnd,g=r.value.length-m,S=M(a);o===!0&&U();const h=j(S),n=e.fillMask!==!1?$(h):h,p=y.value!==n;r.value!==n&&(r.value=n),p===!0&&(y.value=n),document.activeElement===r&&Y(()=>{if(n===d){const w=e.reverseFillMask===!0?d.length:0;r.setSelectionRange(w,w,"forward");return}if(s==="insertFromPaste"&&e.reverseFillMask!==!0){const w=r.selectionEnd;let E=m-1;for(let l=b;l<=E&&l<w;l++)f[l]!==V&&E++;F.right(r,E);return}if(["deleteContentBackward","deleteContentForward"].indexOf(s)>-1){const w=e.reverseFillMask===!0?m===0?n.length>h.length?1:0:Math.max(0,n.length-(n===d?0:Math.min(h.length,g)+1))+1:m;r.setSelectionRange(w,w,"forward");return}if(e.reverseFillMask===!0)if(p===!0){const w=Math.max(0,n.length-(n===d?0:Math.min(h.length,g+1)));w===1&&m===1?r.setSelectionRange(w,w,"forward"):F.rightReverse(r,w)}else{const w=n.length-g;r.setSelectionRange(w,w,"backward")}else if(p===!0){const w=Math.max(0,f.indexOf(V),Math.min(h.length,m)-1);F.right(r,w)}else{const w=m-1;F.right(r,w)}});const L=e.unmaskedValue===!0?M(n):n;String(e.modelValue)!==L&&i(L,!0)}function D(a,o,s){const r=j(M(a.value));o=Math.max(0,f.indexOf(V),Math.min(r.length,o)),b=o,a.setSelectionRange(o,s,"forward")}const F={left(a,o){const s=f.slice(o-1).indexOf(V)===-1;let r=Math.max(0,o-1);for(;r>=0;r--)if(f[r]===V){o=r,s===!0&&o++;break}if(r<0&&f[o]!==void 0&&f[o]!==V)return F.right(a,0);o>=0&&a.setSelectionRange(o,o,"backward")},right(a,o){const s=a.value.length;let r=Math.min(s,o+1);for(;r<=s;r++)if(f[r]===V){o=r;break}else f[r-1]===V&&(o=r);if(r>s&&f[o-1]!==void 0&&f[o-1]!==V)return F.left(a,s);a.setSelectionRange(o,o,"forward")},leftReverse(a,o){const s=T(a.value.length);let r=Math.max(0,o-1);for(;r>=0;r--)if(s[r-1]===V){o=r;break}else if(s[r]===V&&(o=r,r===0))break;if(r<0&&s[o]!==void 0&&s[o]!==V)return F.rightReverse(a,0);o>=0&&a.setSelectionRange(o,o,"backward")},rightReverse(a,o){const s=a.value.length,r=T(s),m=r.slice(0,o+1).indexOf(V)===-1;let g=Math.min(s,o+1);for(;g<=s;g++)if(r[g-1]===V){o=g,o>0&&m===!0&&o--;break}if(g>s&&r[o-1]!==void 0&&r[o-1]!==V)return F.leftReverse(a,s);a.setSelectionRange(o,o,"forward")}};function Q(a){t("click",a),_=void 0}function z(a){if(t("keydown",a),Ke(a)===!0||a.altKey===!0)return;const o=u.value,s=o.selectionStart,r=o.selectionEnd;if(a.shiftKey||(_=void 0),a.keyCode===37||a.keyCode===39){a.shiftKey&&_===void 0&&(_=o.selectionDirection==="forward"?s:r);const m=F[(a.keyCode===39?"right":"left")+(e.reverseFillMask===!0?"Reverse":"")];if(a.preventDefault(),m(o,_===s?r:s),a.shiftKey){const g=o.selectionStart;o.setSelectionRange(Math.min(_,g),Math.max(_,g),"forward")}}else a.keyCode===8&&e.reverseFillMask!==!0&&s===r?(F.left(o,s),o.setSelectionRange(o.selectionStart,r,"backward")):a.keyCode===46&&e.reverseFillMask===!0&&s===r&&(F.rightReverse(o,r),o.setSelectionRange(s,o.selectionEnd,"forward"))}function j(a){if(a==null||a==="")return"";if(e.reverseFillMask===!0)return R(a);const o=c;let s=0,r="";for(let m=0;m<o.length;m++){const g=a[s],S=o[m];if(typeof S=="string")r+=S,g===S&&s++;else if(g!==void 0&&S.regex.test(g))r+=S.transform!==void 0?S.transform(g):g,s++;else return r}return r}function R(a){const o=c,s=f.indexOf(V);let r=a.length-1,m="";for(let g=o.length-1;g>=0&&r>-1;g--){const S=o[g];let h=a[r];if(typeof S=="string")m=S+m,h===S&&r--;else if(h!==void 0&&S.regex.test(h))do m=(S.transform!==void 0?S.transform(h):h)+m,r--,h=a[r];while(s===g&&h!==void 0&&S.regex.test(h));else return m}return m}function M(a){return typeof a!="string"||v===void 0?typeof a=="number"?v(""+a):a:v(a)}function $(a){return d.length-a.length<=0?a:e.reverseFillMask===!0&&a.length!==0?d.slice(0,-a.length)+a:a+d.slice(a.length)}return{innerValue:y,hasMask:C,moveCursorForPaste:D,updateMaskValue:O,onMaskedKeydown:z,onMaskedClick:Q}}const bt={name:String};function kt(e){return x(()=>e.name||e.for)}function xt(e,t){function i(){const u=e.modelValue;try{const f="DataTransfer"in window?new DataTransfer:"ClipboardEvent"in window?new ClipboardEvent("").clipboardData:void 0;return Object(u)===u&&("length"in u?Array.from(u):[u]).forEach(d=>{f.items.add(d)}),{files:f.files}}catch{return{files:void 0}}}return t===!0?x(()=>{if(e.type==="file")return i()}):x(i)}const Ct=/[\u3000-\u303f\u3040-\u309f\u30a0-\u30ff\uff00-\uff9f\u4e00-\u9faf\u3400-\u4dbf]/,wt=/[\u4e00-\u9fff\u3400-\u4dbf\u{20000}-\u{2a6df}\u{2a700}-\u{2b73f}\u{2b740}-\u{2b81f}\u{2b820}-\u{2ceaf}\uf900-\ufaff\u3300-\u33ff\ufe30-\ufe4f\uf900-\ufaff\u{2f800}-\u{2fa1f}]/u,Mt=/[\u3131-\u314e\u314f-\u3163\uac00-\ud7a3]/,St=/[a-z0-9_ -]$/i;function _t(e){return function(i){if(i.type==="compositionend"||i.type==="change"){if(i.target.qComposing!==!0)return;i.target.qComposing=!1,e(i)}else i.type==="compositionupdate"&&i.target.qComposing!==!0&&typeof i.data=="string"&&(Le.is.firefox===!0?St.test(i.data)===!1:Ct.test(i.data)===!0||wt.test(i.data)===!0||Mt.test(i.data)===!0)===!0&&(i.target.qComposing=!0)}}var Rt=ye({name:"QInput",inheritAttrs:!1,props:{...ct,...pt,...bt,modelValue:{required:!1},shadowText:String,type:{type:String,default:"text"},debounce:[String,Number],autogrow:Boolean,inputClass:[Array,String,Object],inputStyle:[Array,String,Object]},emits:[...vt,"paste","change","keydown","click","animationend"],setup(e,{emit:t,attrs:i}){const{proxy:u}=G(),{$q:f}=u,d={};let c=NaN,v,b,_=null,C;const y=A(null),H=kt(e),{innerValue:B,hasMask:T,moveCursorForPaste:U,updateMaskValue:O,onMaskedKeydown:D,onMaskedClick:F}=yt(e,t,h,y),Q=xt(e,!0),z=x(()=>pe(B.value)),j=_t(g),R=gt(),M=x(()=>e.type==="textarea"||e.autogrow===!0),$=x(()=>M.value===!0||["text","search","url","tel","password"].includes(e.type)),a=x(()=>{const l={...R.splitAttrs.listeners.value,onInput:g,onPaste:m,onChange:p,onBlur:L,onFocus:ke};return l.onCompositionstart=l.onCompositionupdate=l.onCompositionend=j,T.value===!0&&(l.onKeydown=D,l.onClick=F),e.autogrow===!0&&(l.onAnimationend=S),l}),o=x(()=>{const l={tabindex:0,"data-autofocus":e.autofocus===!0||void 0,rows:e.type==="textarea"?6:void 0,"aria-label":e.label,name:H.value,...R.splitAttrs.attributes.value,id:R.targetUid.value,maxlength:e.maxlength,disabled:e.disable===!0,readonly:e.readonly===!0};return M.value===!1&&(l.type=e.type),e.autogrow===!0&&(l.rows=1),l});N(()=>e.type,()=>{y.value&&(y.value.value=e.modelValue)}),N(()=>e.modelValue,l=>{if(T.value===!0){if(b===!0&&(b=!1,String(l)===c))return;O(l)}else B.value!==l&&(B.value=l,e.type==="number"&&d.hasOwnProperty("value")===!0&&(v===!0?v=!1:delete d.value));e.autogrow===!0&&Y(n)}),N(()=>e.autogrow,l=>{l===!0?Y(n):y.value!==null&&i.rows>0&&(y.value.style.height="auto")}),N(()=>e.dense,()=>{e.autogrow===!0&&Y(n)});function s(){Be(()=>{const l=document.activeElement;y.value!==null&&y.value!==l&&(l===null||l.id!==R.targetUid.value)&&y.value.focus({preventScroll:!0})})}function r(){y.value!==null&&y.value.select()}function m(l){if(T.value===!0&&e.reverseFillMask!==!0){const q=l.target;U(q,q.selectionStart,q.selectionEnd)}t("paste",l)}function g(l){if(!l||!l.target)return;if(e.type==="file"){t("update:modelValue",l.target.files);return}const q=l.target.value;if(l.target.qComposing===!0){d.value=q;return}if(T.value===!0)O(q,!1,l.inputType);else if(h(q),$.value===!0&&l.target===document.activeElement){const{selectionStart:Z,selectionEnd:K}=l.target;Z!==void 0&&K!==void 0&&Y(()=>{l.target===document.activeElement&&q.indexOf(l.target.value)===0&&l.target.setSelectionRange(Z,K)})}e.autogrow===!0&&n()}function S(l){t("animationend",l),n()}function h(l,q){C=()=>{_=null,e.type!=="number"&&d.hasOwnProperty("value")===!0&&delete d.value,e.modelValue!==l&&c!==l&&(c=l,q===!0&&(b=!0),t("update:modelValue",l),Y(()=>{c===l&&(c=NaN)})),C=void 0},e.type==="number"&&(v=!0,d.value=l),e.debounce!==void 0?(_!==null&&clearTimeout(_),d.value=l,_=setTimeout(C,e.debounce)):C()}function n(){requestAnimationFrame(()=>{const l=y.value;if(l!==null){const q=l.parentNode.style,{scrollTop:Z}=l,{overflowY:K,maxHeight:I}=f.platform.is.firefox===!0?{}:window.getComputedStyle(l),X=K!==void 0&&K!=="scroll";X===!0&&(l.style.overflowY="hidden"),q.marginBottom=l.scrollHeight-1+"px",l.style.height="1px",l.style.height=l.scrollHeight+"px",X===!0&&(l.style.overflowY=parseInt(I,10)<l.scrollHeight?"auto":"hidden"),q.marginBottom="",l.scrollTop=Z}})}function p(l){j(l),_!==null&&(clearTimeout(_),_=null),C!==void 0&&C(),t("change",l.target.value)}function L(l){l!==void 0&&ke(l),_!==null&&(clearTimeout(_),_=null),C!==void 0&&C(),v=!1,b=!1,delete d.value,e.type!=="file"&&setTimeout(()=>{y.value!==null&&(y.value.value=B.value!==void 0?B.value:"")})}function w(){return d.hasOwnProperty("value")===!0?d.value:B.value!==void 0?B.value:""}se(()=>{L()}),ie(()=>{e.autogrow===!0&&n()}),Object.assign(R,{innerValue:B,fieldClass:x(()=>`q-${M.value===!0?"textarea":"input"}`+(e.autogrow===!0?" q-textarea--autogrow":"")),hasShadow:x(()=>e.type!=="file"&&typeof e.shadowText=="string"&&e.shadowText.length!==0),inputRef:y,emitValue:h,hasValue:z,floatingLabel:x(()=>z.value===!0&&(e.type!=="number"||isNaN(B.value)===!1)||pe(e.displayValue)),getControl:()=>k(M.value===!0?"textarea":"input",{ref:y,class:["q-field__native q-placeholder",e.inputClass],style:e.inputStyle,...o.value,...a.value,...e.type!=="file"?{value:w()}:Q.value}),getShadowControl:()=>k("div",{class:"q-field__native q-field__shadow absolute-bottom no-pointer-events"+(M.value===!0?"":" text-no-wrap")},[k("span",{class:"invisible"},w()),k("span",e.shadowText)])});const E=mt(R);return Object.assign(u,{focus:s,select:r,getNativeElement:()=>y.value}),Ae(u,"nativeEl",()=>y.value),E}}),qt=ye({name:"QNoSsr",props:{tag:{type:String,default:"div"},placeholder:String},setup(e,{slots:t}){const i=tt();return()=>{const u={};if(i.value===!0){const d=W(t.default);return d===void 0?d:d.length>1?k(e.tag,u,d):d[0]}u.class="q-no-ssr-placeholder";const f=W(t.placeholder);if(f!==void 0)return f.length>1?k(e.tag,u,f):f[0];if(e.placeholder!==void 0)return k(e.tag,u,e.placeholder)}}}),Ft=ye({name:"QPage",props:{padding:Boolean,styleFn:Function},setup(e,{slots:t}){const{proxy:{$q:i}}=G(),u=re(Ze,J);if(u===J)return console.error("QPage needs to be a deep child of QLayout"),J;if(re(He,J)===J)return console.error("QPage needs to be child of QPageContainer"),J;const d=x(()=>{const v=(u.header.space===!0?u.header.size:0)+(u.footer.space===!0?u.footer.size:0);if(typeof e.styleFn=="function"){const b=u.isContainer.value===!0?u.containerHeight.value:i.screen.height;return e.styleFn(v,b)}return{minHeight:u.isContainer.value===!0?u.containerHeight.value-v+"px":i.screen.height===0?v!==0?`calc(100vh - ${v}px)`:"100vh":i.screen.height-v+"px"}}),c=x(()=>`q-page${e.padding===!0?" q-layout-padding":""}`);return()=>k("main",{class:c.value,style:d.value},W(t.default))}});function Vt(){return re(Qe)}const Et={key:0},At={key:1},Tt=Ye({__name:"IndexPage",setup(e){const t=Vt(),i=A(null),u=A(null),f=async()=>{console.log("\u0412\u044B\u0432\u043E\u0434")},d=A({});A([{id:1,content:"ct1"},{id:2,content:"ct2"},{id:3,content:"ct3"},{id:4,content:"ct4"},{id:5,content:"ct5"}]),A({totalCount:1200});const c=v=>{console.log(v)};return ie(async()=>{await navigator.geolocation.getCurrentPosition(function(b){},function(b){b.PERMISSION_DENIED&&t.notify({message:'"\u0412\u044B\u043A\u043B\u044E\u0447\u0435\u043D\u0430 \u0433\u0435\u043E\u043B\u043E\u043A\u0430\u0446\u0438\u044F"',color:"warning"})}),await nt({lang:"en_US"}),t.platform.is.desktop?(ymaps.geolocation.get().then(b=>{console.log(b)}),console.log("ymaps")):t.platform.is.mobile&&ymaps.geolocation.get().then(b=>{console.log(b)},b=>{t.notify(b)})}),(v,b)=>{const _=We("yandex-map");return de(),Xe(Ft,{class:"row items-center justify-evenly"},{default:ne(()=>[fe(t).platform.is.desktop?(de(),xe("label",Et," \u0412\u0435\u0431 \u0412\u0435\u0440\u0441\u0438\u044F")):Ce("",!0),fe(t).platform.is.mobile?(de(),xe("label",At," \u041C\u043E\u044E\u0438\u043B\u044C\u043D\u0430\u044F \u0432\u0435\u0440\u0441\u0438\u044F")):Ce("",!0),Je("div",null,[ce(we(d.value)+" "+we(fe(t).dark)+" ",1),te(Rt,{label:"\u0412\u0412\u0435\u0434\u0438\u0442\u0435 \u0433\u043E\u0440\u043E\u0434",modelValue:i.value,"onUpdate:modelValue":b[0]||(b[0]=C=>i.value=C)},null,8,["modelValue"]),te(Me,{onClick:f},{default:ne(()=>[ce("\u041F\u043E\u043B\u0443\u0447\u0438\u0442\u044C \u0433\u043E\u0440\u043E\u0434\u0430")]),_:1}),te(Me,{onClick:v.initNotify},{default:ne(()=>[ce("test")]),_:1},8,["onClick"])]),te(qt,null,{default:ne(()=>[te(_,{onCreated:c,ref_key:"map",ref:u,class:"full-width",style:{height:"500px"},coords:[32,50]},null,512)]),_:1})]),_:1})}}});export{Tt as default};
