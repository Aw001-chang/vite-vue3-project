import{C as w,B as y,j as x,o as a,a as r,d as b,E as s,b as t,w as i,R as k,T as C,U as T,k as V,t as o,F as m,G as B,P as L,e as _,H as N,V as j}from"./index.d43e4991.js";import{S as D}from"./sectionTitle.a41f2cfe.js";const R={class:"container-lg"},U={class:"row justify-content-center"},F={class:"col-lg-10"},I={class:"col-12 text-center seperation-top seperation-bottom"},S={class:"row justify-content-center"},$={class:"col-lg-4 col-md-6 col-sm-8 col-12"},E={class:"input-group mb-3"},M={key:0,class:"row justify-content-center seperation-bottom"},O={class:"col-lg-10"},q={class:"row"},G={class:"col-12 mb-4 border-bottom pb-3"},H={class:"col-12 mb-5"},P=t("div",{class:"fs-4 fw-bold mb-4 text-orange-800"},"\u8A02\u8CFC\u5546\u54C1:",-1),z=["src"],A={class:"fs-5 fw-bold text-end mt-3 text-red-600"},J={class:"col-12"},K={class:"row"},Q=t("div",{class:"fs-4 fw-bold mb-4 text-orange-800"},"\u6536\u4EF6\u4EBA\u8CC7\u8A0A:",-1),W={class:"border-bottom p-3"},X=t("div",{class:"mb-2 fw-bold"},"\u6536\u4EF6\u4EBA\u59D3\u540D:",-1),Y={class:"border-bottom p-3"},Z=t("div",{class:"mb-2 fw-bold"},"\u6536\u4EF6\u4EBA\u96FB\u8A71:",-1),tt={class:"border-bottom p-3"},st=t("div",{class:"mb-2 fw-bold"},"\u6536\u4EF6\u4EBA\u96FB\u5B50\u4FE1\u7BB1:",-1),ot={class:"border-bottom p-3"},et=t("div",{class:"mb-2 fw-bold"},"\u6536\u4EF6\u4EBA\u5730\u5740:",-1),dt={class:"p-3"},it=t("div",{class:"mb-2 fw-bold"},"\u5099\u8A3B:",-1),at={__name:"BookingView",setup(lt){const u=w(),{orderList:d,inputOrderID:l,isLoading:p,orderUser:n,isNull:h}=y(u),{getOrder:f}=u;return(v,c)=>{const g=x("Loading");return a(),r(m,null,[b(g,{active:s(p)},null,8,["active"]),t("div",R,[t("div",U,[t("div",F,[b(D,null,{sectionTitle:i(()=>[_("\u67E5\u8A62\u8A02\u55AE")]),_:1})]),t("div",I,[t("div",S,[t("div",$,[t("div",E,[k(t("input",{"onUpdate:modelValue":c[0]||(c[0]=e=>T(l)?l.value=e:null),type:"text",class:"form-control",placeholder:"\u8ACB\u8F38\u5165\u8A02\u55AE\u7DE8\u865F","aria-label":"Recipient's username","aria-describedby":"button-addon2"},null,512),[[C,s(l),void 0,{trim:!0}]]),t("button",{onClick:c[1]||(c[1]=V(e=>s(f)(s(l)),["prevent"])),class:"btn btn-outline-primary",type:"button"},"\u67E5\u8A62\u8A02\u55AE ")])])])])]),s(h)?(a(),r("div",M,[t("div",O,[t("div",q,[t("div",G,[t("div",null,"\u8A02\u55AE\u7DE8\u865F:\xA0"+o(s(d).id),1),t("div",null,"\u8A02\u8CFC\u65E5\u671F:\xA0"+o(v.$filter.date(s(d).create_at)),1)]),t("div",H,[P,(a(!0),r(m,null,B(s(d).products,e=>(a(),N(j,{key:e},{orderImage:i(()=>[t("img",{src:e.product.imageUrl,class:"d-block",alt:""},null,8,z)]),orderTitle:i(()=>[_(o(e.product.title),1)]),orderFinalTotal:i(()=>[_(o(e.product.price),1)]),orderDelete:i(()=>[t("div",null,"x\xA0"+o(e.qty),1)]),_:2},1024))),128)),t("div",A," \u7E3D\u91D1\u984D:\xA0"+o(v.$filter.currency(s(d).total)),1)]),t("div",J,[t("div",K,[Q,t("div",W,[X,t("div",null,o(s(n).name),1)]),t("div",Y,[Z,t("div",null,o(s(n).tel),1)]),t("div",tt,[st,t("div",null,o(s(n).email),1)]),t("div",ot,[et,t("div",null,o(s(n).address),1)]),t("div",dt,[it,t("div",null,o(s(d).message),1)])])])])])])):L("",!0)])],64)}}};export{at as default};