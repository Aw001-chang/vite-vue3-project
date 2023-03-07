import{h as _,O as H,C as Y,P as Z,s as k,q as J,Q as ee,R as te,n as L,z as re,T as ne}from"./index.5ece6270.js";var C;const h=typeof window<"u",ae=e=>typeof e=="function",oe=e=>typeof e=="string",ie=()=>{};h&&((C=window==null?void 0:window.navigator)==null?void 0:C.userAgent)&&/iP(ad|hone|od)/.test(window.navigator.userAgent);function $(e){return typeof e=="function"?e():Y(e)}function se(e,t){function r(...n){return new Promise((a,o)=>{Promise.resolve(e(()=>t.apply(this,n),{fn:t,thisArg:this,args:n})).then(a).catch(o)})}return r}const M=e=>e();function ue(e=M){const t=_(!0);function r(){t.value=!1}function n(){t.value=!0}const a=(...o)=>{t.value&&e(...o)};return{isActive:H(t),pause:r,resume:n,eventFilter:a}}function le(e){return e}function B(e){return ee()?(te(e),!0):!1}function U(e,t=!0){Z()?k(e):t?e():J(e)}function ce(e,t,r={}){const{immediate:n=!0}=r,a=_(!1);let o=null;function c(){o&&(clearTimeout(o),o=null)}function l(){a.value=!1,c()}function s(...f){c(),a.value=!0,o=setTimeout(()=>{a.value=!1,o=null,e(...f)},$(t))}return n&&(a.value=!0,h&&s()),B(l),{isPending:H(a),start:s,stop:l}}var F=Object.getOwnPropertySymbols,fe=Object.prototype.hasOwnProperty,pe=Object.prototype.propertyIsEnumerable,de=(e,t)=>{var r={};for(var n in e)fe.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&F)for(var n of F(e))t.indexOf(n)<0&&pe.call(e,n)&&(r[n]=e[n]);return r};function ve(e,t,r={}){const n=r,{eventFilter:a=M}=n,o=de(n,["eventFilter"]);return L(e,se(a,t),o)}var ye=Object.defineProperty,me=Object.defineProperties,Oe=Object.getOwnPropertyDescriptors,I=Object.getOwnPropertySymbols,G=Object.prototype.hasOwnProperty,q=Object.prototype.propertyIsEnumerable,x=(e,t,r)=>t in e?ye(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,we=(e,t)=>{for(var r in t||(t={}))G.call(t,r)&&x(e,r,t[r]);if(I)for(var r of I(t))q.call(t,r)&&x(e,r,t[r]);return e},_e=(e,t)=>me(e,Oe(t)),ge=(e,t)=>{var r={};for(var n in e)G.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&I)for(var n of I(e))t.indexOf(n)<0&&q.call(e,n)&&(r[n]=e[n]);return r};function he(e,t,r={}){const n=r,{eventFilter:a}=n,o=ge(n,["eventFilter"]),{eventFilter:c,pause:l,resume:s,isActive:f}=ue(a);return{stop:ve(e,t,_e(we({},o),{eventFilter:c})),pause:l,resume:s,isActive:f}}function be(e){var t;const r=$(e);return(t=r==null?void 0:r.$el)!=null?t:r}const S=h?window:void 0;h&&window.document;const Se=h?window.navigator:void 0;h&&window.location;function E(...e){let t,r,n,a;if(oe(e[0])||Array.isArray(e[0])?([r,n,a]=e,t=S):[t,r,n,a]=e,!t)return ie;Array.isArray(r)||(r=[r]),Array.isArray(n)||(n=[n]);const o=[],c=()=>{o.forEach(p=>p()),o.length=0},l=(p,y,O)=>(p.addEventListener(y,O,a),()=>p.removeEventListener(y,O,a)),s=L(()=>be(t),p=>{c(),p&&o.push(...r.flatMap(y=>n.map(O=>l(p,y,O))))},{immediate:!0,flush:"post"}),f=()=>{s(),c()};return B(f),f}function Pe(e,t=!1){const r=_(),n=()=>r.value=Boolean(e());return n(),U(n,t),r}function Re(e={}){const{navigator:t=Se,read:r=!1,source:n,copiedDuring:a=1500,legacy:o=!1}=e,c=["copy","cut"],l=Pe(()=>t&&"clipboard"in t),s=re(()=>l.value||o),f=_(""),p=_(!1),y=ce(()=>p.value=!1,a);function O(){l.value?t.clipboard.readText().then(u=>{f.value=u}):f.value=m()}if(s.value&&r)for(const u of c)E(u,O);async function b(u=$(n)){s.value&&u!=null&&(l.value?await t.clipboard.writeText(u):w(u),f.value=u,p.value=!0,y.start())}function w(u){const d=document.createElement("textarea");d.value=u!=null?u:"",d.style.position="absolute",d.style.opacity="0",document.body.appendChild(d),d.select(),document.execCommand("copy"),d.remove()}function m(){var u,d,P;return(P=(d=(u=document==null?void 0:document.getSelection)==null?void 0:u.call(document))==null?void 0:d.toString())!=null?P:""}return{isSupported:s,text:f,copied:p,copy:b}}const j=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},N="__vueuse_ssr_handlers__";j[N]=j[N]||{};const Ie=j[N];function Ee(e,t){return Ie[e]||t}function $e(e){return e==null?"any":e instanceof Set?"set":e instanceof Map?"map":e instanceof Date?"date":typeof e=="boolean"?"boolean":typeof e=="string"?"string":typeof e=="object"?"object":Number.isNaN(e)?"any":"number"}var je=Object.defineProperty,W=Object.getOwnPropertySymbols,Ne=Object.prototype.hasOwnProperty,Ae=Object.prototype.propertyIsEnumerable,Q=(e,t,r)=>t in e?je(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,D=(e,t)=>{for(var r in t||(t={}))Ne.call(t,r)&&Q(e,r,t[r]);if(W)for(var r of W(t))Ae.call(t,r)&&Q(e,r,t[r]);return e};const Te={boolean:{read:e=>e==="true",write:e=>String(e)},object:{read:e=>JSON.parse(e),write:e=>JSON.stringify(e)},number:{read:e=>Number.parseFloat(e),write:e=>String(e)},any:{read:e=>e,write:e=>String(e)},string:{read:e=>e,write:e=>String(e)},map:{read:e=>new Map(JSON.parse(e)),write:e=>JSON.stringify(Array.from(e.entries()))},set:{read:e=>new Set(JSON.parse(e)),write:e=>JSON.stringify(Array.from(e))},date:{read:e=>new Date(e),write:e=>e.toISOString()}};function Ce(e,t,r,n={}){var a;const{flush:o="pre",deep:c=!0,listenToStorageChanges:l=!0,writeDefaults:s=!0,mergeDefaults:f=!1,shallow:p,window:y=S,eventFilter:O,onError:b=i=>{console.error(i)}}=n,w=(p?ne:_)(t);if(!r)try{r=Ee("getDefaultStorage",()=>{var i;return(i=S)==null?void 0:i.localStorage})()}catch(i){b(i)}if(!r)return w;const m=$(t),u=$e(m),d=(a=n.serializer)!=null?a:Te[u],{pause:P,resume:A}=he(w,()=>K(w.value),{flush:o,deep:c,eventFilter:O});return y&&l&&E(y,"storage",T),T(),w;function K(i){try{if(i==null)r.removeItem(e);else{const v=d.write(i),g=r.getItem(e);g!==v&&(r.setItem(e,v),y&&(y==null||y.dispatchEvent(new StorageEvent("storage",{key:e,oldValue:g,newValue:v,storageArea:r}))))}}catch(v){b(v)}}function X(i){const v=i?i.newValue:r.getItem(e);if(v==null)return s&&m!==null&&r.setItem(e,d.write(m)),m;if(!i&&f){const g=d.read(v);return ae(f)?f(g,m):u==="object"&&!Array.isArray(g)?D(D({},m),g):g}else return typeof v!="string"?v:d.read(v)}function T(i){if(!(i&&i.storageArea!==r)){if(i&&i.key==null){w.value=m;return}if(!(i&&i.key!==e)){P();try{w.value=X(i)}catch(v){b(v)}finally{i?J(A):A()}}}}}function Ve(e,t,r={}){const{window:n=S}=r;return Ce(e,t,n==null?void 0:n.localStorage,r)}var z;(function(e){e.UP="UP",e.RIGHT="RIGHT",e.DOWN="DOWN",e.LEFT="LEFT",e.NONE="NONE"})(z||(z={}));var Fe=Object.defineProperty,R=Object.getOwnPropertySymbols,xe=Object.prototype.hasOwnProperty,We=Object.prototype.propertyIsEnumerable,V=(e,t,r)=>t in e?Fe(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,Qe=(e,t)=>{for(var r in t||(t={}))xe.call(t,r)&&V(e,r,t[r]);if(R)for(var r of R(t))We.call(t,r)&&V(e,r,t[r]);return e};const De={easeInSine:[.12,0,.39,0],easeOutSine:[.61,1,.88,1],easeInOutSine:[.37,0,.63,1],easeInQuad:[.11,0,.5,0],easeOutQuad:[.5,1,.89,1],easeInOutQuad:[.45,0,.55,1],easeInCubic:[.32,0,.67,0],easeOutCubic:[.33,1,.68,1],easeInOutCubic:[.65,0,.35,1],easeInQuart:[.5,0,.75,0],easeOutQuart:[.25,1,.5,1],easeInOutQuart:[.76,0,.24,1],easeInQuint:[.64,0,.78,0],easeOutQuint:[.22,1,.36,1],easeInOutQuint:[.83,0,.17,1],easeInExpo:[.7,0,.84,0],easeOutExpo:[.16,1,.3,1],easeInOutExpo:[.87,0,.13,1],easeInCirc:[.55,0,1,.45],easeOutCirc:[0,.55,.45,1],easeInOutCirc:[.85,0,.15,1],easeInBack:[.36,0,.66,-.56],easeOutBack:[.34,1.56,.64,1],easeInOutBack:[.68,-.6,.32,1.6]};Qe({linear:le},De);function He(e={}){const{window:t=S,initialWidth:r=1/0,initialHeight:n=1/0,listenOrientation:a=!0,includeScrollbar:o=!0}=e,c=_(r),l=_(n),s=()=>{t&&(o?(c.value=t.innerWidth,l.value=t.innerHeight):(c.value=t.document.documentElement.clientWidth,l.value=t.document.documentElement.clientHeight))};return s(),U(s),E("resize",s,{passive:!0}),a&&E("orientationchange",s,{passive:!0}),{width:c,height:l}}export{Ce as a,Ve as b,He as c,Re as u};
