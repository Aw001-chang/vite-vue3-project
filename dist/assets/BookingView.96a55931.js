import{u as w,s as g,f as y,o as c,c as r,b as k,i as t,a as s,M as x,N as C,O as L,t as o,F as v,g as N,L as V,h as B,w as a,d as b,P as T}from"./index.3fb06026.js";const D={class:"container-lg"},j={class:"row justify-content-center"},F=s("div",{class:"col-lg-10"},[s("div",{class:"text-center seperation-top seperation-bottom"},[s("div",{class:"h3 pb-2"},"\u67E5\u8A62\u8A02\u55AE")])],-1),I={class:"col-12 text-center seperation-top seperation-bottom"},O={class:"row justify-content-center"},R={class:"col-sm-4 col-12"},U={class:"input-group mb-3"},$={key:0,class:"row justify-content-center seperation-bottom"},M={class:"col-lg-10"},q={class:"row"},E={class:"col-12 mb-4 border-bottom pb-3"},P={class:"col-12 mb-5"},S=s("div",{class:"fs-4 fw-bold mb-4"},"\u8A02\u8CFC\u5546\u54C1:",-1),z=["src"],A={class:"fs-5 fw-bold text-end mt-3"},G={class:"col-12"},H={class:"row"},J=s("div",{class:"fs-4 fw-bold mb-4"},"\u6536\u4EF6\u4EBA\u8CC7\u8A0A:",-1),K={class:"border-bottom p-3"},Q=s("div",{class:"mb-2 fw-bold"},"\u6536\u4EF6\u4EBA\u59D3\u540D:",-1),W={class:"border-bottom p-3"},X=s("div",{class:"mb-2 fw-bold"},"\u6536\u4EF6\u4EBA\u96FB\u8A71:",-1),Y={class:"border-bottom p-3"},Z=s("div",{class:"mb-2 fw-bold"},"\u6536\u4EF6\u4EBA\u96FB\u5B50\u4FE1\u7BB1:",-1),ss={class:"border-bottom p-3"},ts=s("div",{class:"mb-2 fw-bold"},"\u6536\u4EF6\u4EBA\u5730\u5740:",-1),os={class:"p-3"},es=s("div",{class:"mb-2 fw-bold"},"\u5099\u8A3B:",-1),ls={__name:"BookingView",setup(ds){const _=w(),{orderList:d,inputOrderID:i,isLoading:m,orderUser:l,isNull:p}=g(_),{getOrder:h}=_;return(u,n)=>{const f=y("Loading");return c(),r(v,null,[k(f,{active:t(m)},null,8,["active"]),s("div",D,[s("div",j,[F,s("div",I,[s("div",O,[s("div",R,[s("div",U,[x(s("input",{"onUpdate:modelValue":n[0]||(n[0]=e=>L(i)?i.value=e:null),type:"text",class:"form-control",placeholder:"\u8ACB\u8F38\u5165\u8A02\u55AE\u7DE8\u865F","aria-label":"Recipient's username","aria-describedby":"button-addon2"},null,512),[[C,t(i),void 0,{trim:!0}]]),s("button",{onClick:n[1]||(n[1]=e=>t(h)(t(i))),class:"btn btn-outline-secondary",type:"button",id:"button-addon2"},"\u67E5\u8A62\u8A02\u55AE ")])])])])]),t(p)?(c(),r("div",$,[s("div",M,[s("div",q,[s("div",E,[s("div",null,"\u8A02\u55AE\u7DE8\u865F:\xA0"+o(t(d).id),1),s("div",null,"\u8A02\u8CFC\u65E5\u671F:\xA0"+o(u.$filter.date(t(d).create_at)),1)]),s("div",P,[S,(c(!0),r(v,null,N(t(d).products,e=>(c(),B(T,{key:e},{orderImage:a(()=>[s("img",{src:e.product.imageUrl,class:"d-block",alt:""},null,8,z)]),orderTitle:a(()=>[b(o(e.product.title),1)]),orderFinalTotal:a(()=>[b(o(e.product.price),1)]),orderDelete:a(()=>[s("div",null,"x\xA0"+o(e.qty),1)]),_:2},1024))),128)),s("div",A,"\u7E3D\u91D1\u984D:"+o(u.$filter.currency(t(d).total)),1)]),s("div",G,[s("div",H,[J,s("div",K,[Q,s("div",null,o(t(l).name),1)]),s("div",W,[X,s("div",null,o(t(l).tel),1)]),s("div",Y,[Z,s("div",null,o(t(l).email),1)]),s("div",ss,[ts,s("div",null,o(t(l).address),1)]),s("div",os,[es,s("div",null,o(t(d).message),1)])])])])])])):V("",!0)])],64)}}};export{ls as default};