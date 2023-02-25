import{k as g,B as z,i as X,C as Y,m as Z,D as J,E as k,G as ee,x as L,z as te,H as re}from"./index.3fb06026.js";var C;const b=typeof window<"u",ne=e=>typeof e=="function",ae=e=>typeof e=="string",oe=()=>{};b&&((C=window==null?void 0:window.navigator)==null?void 0:C.userAgent)&&/iP(ad|hone|od)/.test(window.navigator.userAgent);function E(e){return typeof e=="function"?e():X(e)}function ie(e,t){function r(...n){return new Promise((a,i)=>{Promise.resolve(e(()=>t.apply(this,n),{fn:t,thisArg:this,args:n})).then(a).catch(i)})}return r}const B=e=>e();function se(e=B){const t=g(!0);function r(){t.value=!1}function n(){t.value=!0}const a=(...i)=>{t.value&&e(...i)};return{isActive:z(t),pause:r,resume:n,eventFilter:a}}function ue(e){return e}function M(e){return k()?(ee(e),!0):!1}function le(e,t=!0){Y()?Z(e):t?e():J(e)}function ce(e,t,r={}){const{immediate:n=!0}=r,a=g(!1);let i=null;function y(){i&&(clearTimeout(i),i=null)}function p(){a.value=!1,y()}function d(...u){y(),a.value=!0,i=setTimeout(()=>{a.value=!1,i=null,e(...u)},E(t))}return n&&(a.value=!0,b&&d()),M(p),{isPending:z(a),start:d,stop:p}}var F=Object.getOwnPropertySymbols,fe=Object.prototype.hasOwnProperty,pe=Object.prototype.propertyIsEnumerable,de=(e,t)=>{var r={};for(var n in e)fe.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&F)for(var n of F(e))t.indexOf(n)<0&&pe.call(e,n)&&(r[n]=e[n]);return r};function ve(e,t,r={}){const n=r,{eventFilter:a=B}=n,i=de(n,["eventFilter"]);return L(e,ie(a,t),i)}var ye=Object.defineProperty,me=Object.defineProperties,Oe=Object.getOwnPropertyDescriptors,P=Object.getOwnPropertySymbols,H=Object.prototype.hasOwnProperty,G=Object.prototype.propertyIsEnumerable,T=(e,t,r)=>t in e?ye(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,_e=(e,t)=>{for(var r in t||(t={}))H.call(t,r)&&T(e,r,t[r]);if(P)for(var r of P(t))G.call(t,r)&&T(e,r,t[r]);return e},we=(e,t)=>me(e,Oe(t)),ge=(e,t)=>{var r={};for(var n in e)H.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&P)for(var n of P(e))t.indexOf(n)<0&&G.call(e,n)&&(r[n]=e[n]);return r};function be(e,t,r={}){const n=r,{eventFilter:a}=n,i=ge(n,["eventFilter"]),{eventFilter:y,pause:p,resume:d,isActive:u}=se(a);return{stop:ve(e,t,we(_e({},i),{eventFilter:y})),pause:p,resume:d,isActive:u}}function Se(e){var t;const r=E(e);return(t=r==null?void 0:r.$el)!=null?t:r}const I=b?window:void 0;b&&window.document;const he=b?window.navigator:void 0;b&&window.location;function U(...e){let t,r,n,a;if(ae(e[0])||Array.isArray(e[0])?([r,n,a]=e,t=I):[t,r,n,a]=e,!t)return oe;Array.isArray(r)||(r=[r]),Array.isArray(n)||(n=[n]);const i=[],y=()=>{i.forEach(l=>l()),i.length=0},p=(l,v,O)=>(l.addEventListener(v,O,a),()=>l.removeEventListener(v,O,a)),d=L(()=>Se(t),l=>{y(),l&&i.push(...r.flatMap(v=>n.map(O=>p(l,v,O))))},{immediate:!0,flush:"post"}),u=()=>{d(),y()};return M(u),u}function Pe(e,t=!1){const r=g(),n=()=>r.value=Boolean(e());return n(),le(n,t),r}function Ve(e={}){const{navigator:t=he,read:r=!1,source:n,copiedDuring:a=1500,legacy:i=!1}=e,y=["copy","cut"],p=Pe(()=>t&&"clipboard"in t),d=te(()=>p.value||i),u=g(""),l=g(!1),v=ce(()=>l.value=!1,a);function O(){p.value?t.clipboard.readText().then(s=>{u.value=s}):u.value=m()}if(d.value&&r)for(const s of y)U(s,O);async function S(s=E(n)){d.value&&s!=null&&(p.value?await t.clipboard.writeText(s):_(s),u.value=s,l.value=!0,v.start())}function _(s){const c=document.createElement("textarea");c.value=s!=null?s:"",c.style.position="absolute",c.style.opacity="0",document.body.appendChild(c),c.select(),document.execCommand("copy"),c.remove()}function m(){var s,c,h;return(h=(c=(s=document==null?void 0:document.getSelection)==null?void 0:s.call(document))==null?void 0:c.toString())!=null?h:""}return{isSupported:d,text:u,copied:l,copy:S}}const $=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},j="__vueuse_ssr_handlers__";$[j]=$[j]||{};const Ie=$[j];function Ee(e,t){return Ie[e]||t}function $e(e){return e==null?"any":e instanceof Set?"set":e instanceof Map?"map":e instanceof Date?"date":typeof e=="boolean"?"boolean":typeof e=="string"?"string":typeof e=="object"?"object":Number.isNaN(e)?"any":"number"}var je=Object.defineProperty,x=Object.getOwnPropertySymbols,Ne=Object.prototype.hasOwnProperty,Ae=Object.prototype.propertyIsEnumerable,D=(e,t,r)=>t in e?je(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,Q=(e,t)=>{for(var r in t||(t={}))Ne.call(t,r)&&D(e,r,t[r]);if(x)for(var r of x(t))Ae.call(t,r)&&D(e,r,t[r]);return e};const Ce={boolean:{read:e=>e==="true",write:e=>String(e)},object:{read:e=>JSON.parse(e),write:e=>JSON.stringify(e)},number:{read:e=>Number.parseFloat(e),write:e=>String(e)},any:{read:e=>e,write:e=>String(e)},string:{read:e=>e,write:e=>String(e)},map:{read:e=>new Map(JSON.parse(e)),write:e=>JSON.stringify(Array.from(e.entries()))},set:{read:e=>new Set(JSON.parse(e)),write:e=>JSON.stringify(Array.from(e))},date:{read:e=>new Date(e),write:e=>e.toISOString()}};function Fe(e,t,r,n={}){var a;const{flush:i="pre",deep:y=!0,listenToStorageChanges:p=!0,writeDefaults:d=!0,mergeDefaults:u=!1,shallow:l,window:v=I,eventFilter:O,onError:S=o=>{console.error(o)}}=n,_=(l?re:g)(t);if(!r)try{r=Ee("getDefaultStorage",()=>{var o;return(o=I)==null?void 0:o.localStorage})()}catch(o){S(o)}if(!r)return _;const m=E(t),s=$e(m),c=(a=n.serializer)!=null?a:Ce[s],{pause:h,resume:N}=be(_,()=>K(_.value),{flush:i,deep:y,eventFilter:O});return v&&p&&U(v,"storage",A),A(),_;function K(o){try{if(o==null)r.removeItem(e);else{const f=c.write(o),w=r.getItem(e);w!==f&&(r.setItem(e,f),v&&(v==null||v.dispatchEvent(new StorageEvent("storage",{key:e,oldValue:w,newValue:f,storageArea:r}))))}}catch(f){S(f)}}function q(o){const f=o?o.newValue:r.getItem(e);if(f==null)return d&&m!==null&&r.setItem(e,c.write(m)),m;if(!o&&u){const w=c.read(f);return ne(u)?u(w,m):s==="object"&&!Array.isArray(w)?Q(Q({},m),w):w}else return typeof f!="string"?f:c.read(f)}function A(o){if(!(o&&o.storageArea!==r)){if(o&&o.key==null){_.value=m;return}if(!(o&&o.key!==e)){h();try{_.value=q(o)}catch(f){S(f)}finally{o?J(N):N()}}}}}function ze(e,t,r={}){const{window:n=I}=r;return Fe(e,t,n==null?void 0:n.localStorage,r)}var W;(function(e){e.UP="UP",e.RIGHT="RIGHT",e.DOWN="DOWN",e.LEFT="LEFT",e.NONE="NONE"})(W||(W={}));var Te=Object.defineProperty,R=Object.getOwnPropertySymbols,xe=Object.prototype.hasOwnProperty,De=Object.prototype.propertyIsEnumerable,V=(e,t,r)=>t in e?Te(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,Qe=(e,t)=>{for(var r in t||(t={}))xe.call(t,r)&&V(e,r,t[r]);if(R)for(var r of R(t))De.call(t,r)&&V(e,r,t[r]);return e};const We={easeInSine:[.12,0,.39,0],easeOutSine:[.61,1,.88,1],easeInOutSine:[.37,0,.63,1],easeInQuad:[.11,0,.5,0],easeOutQuad:[.5,1,.89,1],easeInOutQuad:[.45,0,.55,1],easeInCubic:[.32,0,.67,0],easeOutCubic:[.33,1,.68,1],easeInOutCubic:[.65,0,.35,1],easeInQuart:[.5,0,.75,0],easeOutQuart:[.25,1,.5,1],easeInOutQuart:[.76,0,.24,1],easeInQuint:[.64,0,.78,0],easeOutQuint:[.22,1,.36,1],easeInOutQuint:[.83,0,.17,1],easeInExpo:[.7,0,.84,0],easeOutExpo:[.16,1,.3,1],easeInOutExpo:[.87,0,.13,1],easeInCirc:[.55,0,1,.45],easeOutCirc:[0,.55,.45,1],easeInOutCirc:[.85,0,.15,1],easeInBack:[.36,0,.66,-.56],easeOutBack:[.34,1.56,.64,1],easeInOutBack:[.68,-.6,.32,1.6]};Qe({linear:ue},We);export{ze as a,Ve as b,Fe as u};
