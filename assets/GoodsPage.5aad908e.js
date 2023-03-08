import{H as O,h as y,n as H,_ as L,A as S,s as R,o as n,a as i,b as t,G as b,C as e,j as u,t as C,F as x,D as T,p as q,k as J,B as K,z as Q,i as W,d as v,w as s,U as G,e as $,E as N,S as w}from"./index.13e0b9c3.js";import{u as X,A as D,G as E}from"./AnimateCard.fcba3b69.js";import{u as Y}from"./collection.51878035.js";import{S as Z}from"./sectionTitle.72206221.js";import"./index.23f264cd.js";const V=O("categorySelect",()=>{const a=y("\u5168\u90E8"),_=y(["\u82B1\u675F","\u76C6\u82B1","\u8AB2\u7A0B"]),l=y(null),d=y({active:!0}),c=y("\u5168\u90E8"),r=()=>{l.value=null,d.value.active=!0},g=p=>{d.value.active=!1,l.value=p};return H(l,p=>{p!==null?c.value=p:c.value="\u5168\u90E8"}),{defaultBtn:a,categoryBtn:_,isActive:l,isDefault:d,selectTitle:c,defaultSelected:r,isSelected:g}});const ee={class:"category-btns container py-3 mt-5"},te={class:"d-flex justify-content-center align-items-center"},oe=["onClick"],se={__name:"Category",setup(a){const _=V(),{defaultBtn:l,categoryBtn:d,isActive:c,isDefault:r}=S(_),{defaultSelected:g,isSelected:p}=_;return R(g),(A,m)=>(n(),i("div",ee,[t("div",te,[t("button",{class:b([e(r),"btn me-2"]),onClick:m[0]||(m[0]=u((...f)=>e(g)&&e(g)(...f),["prevent"])),type:"button"},C(e(l)),3),(n(!0),i(x,null,T(e(d),f=>(n(),i("button",{key:f,class:b([{active:f===e(c)},"btn me-2"]),onClick:u(B=>e(p)(f),["prevent"]),type:"button"},C(f),11,oe))),128))])]))}},ne=L(se,[["__scopeId","data-v-09cc3d1c"]]);const M=a=>(q("data-v-18b55b9c"),a=a(),J(),a),ae={class:"text-center seperation-bottom"},le={"aria-label":"Page navigation"},ce={class:"pagination"},ie={class:"page-item"},re=M(()=>t("span",{"aria-hidden":"true"},"\xAB",-1)),de=[re],ue=["onClick"],_e={class:"page-item"},ge=M(()=>t("span",{"aria-hidden":"true"},"\xBB",-1)),pe=[ge],fe={__name:"Pagination",props:["pages"],emits:["emit-pages"],setup(a,{emit:_}){const l=d=>{_("emit-pages",d)};return(d,c)=>(n(),i("div",ae,[t("nav",le,[t("ul",ce,[t("li",ie,[t("a",{class:b([{disabled:!a.pages.has_pre},"page-link text-toffee"]),onClick:c[0]||(c[0]=u(r=>l(a.pages.current_page-1),["prevent"])),href:"#","aria-label":"Previous"},de,2)]),(n(!0),i(x,null,T(a.pages.total_pages,r=>(n(),i("li",{key:r,class:"page-item"},[t("a",{class:b([{active:r===a.pages.current_page},"page-link text-toffee"]),onClick:u(g=>l(r),["prevent"]),href:"#"},C(r),11,ue)]))),128)),t("li",_e,[t("a",{class:b([{disabled:!a.pages.has_next},"page-link text-toffee"]),onClick:c[1]||(c[1]=u(r=>l(a.pages.current_page+1),["prevent"])),href:"#","aria-label":"Next"},pe,2)])])])]))}},ve=L(fe,[["__scopeId","data-v-18b55b9c"]]),Ce={class:"container-sm"},be={key:0,class:"row"},me=["onClick","src"],he=["onClick"],ke=t("i",{class:"bi bi-bookmark"},null,-1),ye=[ke],$e=["onClick"],xe={key:1,class:"row"},Se=["onClick","src"],Te=["onClick"],Pe=t("i",{class:"bi bi-bookmark"},null,-1),Ae=[Pe],Be=["onClick"],Le={__name:"GoodsPage",setup(a){const _=Y(),{collectID:l}=S(_),{addMyCollection:d}=_,c=X(),{goodsAll:r,goods:g,isLoading:p,pagination:A}=S(c),{getGoodId:m,getGoods:f}=c,B=V(),{selectTitle:U,isActive:P}=S(B),j=K(),{addToCart:I}=j,z=Q(()=>r.value.filter(h=>{if(P.value===h.category)return h}));return(h,Ie)=>{const F=W("Loading");return n(),i(x,null,[v(F,{active:e(p)},null,8,["active"]),v(ne),v(Z,null,{sectionTitle:s(()=>[$(C(e(U)),1)]),_:1}),t("section",Ce,[e(P)===null?(n(),i("div",be,[(n(!0),i(x,null,T(e(g),o=>(n(),i("div",{key:o.id,class:"col-lg-3 col-md-4 col-sm-6 col-12"},[(n(),N(w,null,{fallback:s(()=>[v(D)]),default:s(()=>[v(E,null,{goodImage:s(()=>[t("img",{onClick:u(k=>e(m)(o.id),["prevent"]),src:o.imageUrl,class:"card-img-top",alt:""},null,8,me)]),goodTitle:s(()=>[$(C(o.title),1)]),goodPrice:s(()=>[$("NT$\xA0"+C(h.$filter.currency(o.price)),1)]),myCollect:s(()=>[t("a",{onClick:u(k=>e(d)(o,o.id),["prevent"]),href:"#",class:b(["btn me-2",e(l).indexOf(o.id)>-1?"btn-toffee":"btn-outline-toffee"])},ye,10,he)]),goodToCart:s(()=>[t("button",{type:"button",onClick:u(k=>e(I)(o.id,1),["prevent"]),class:"btn btn-outline-toffee flex-fill"},"\u52A0\u5165\u8CFC\u7269\u8ECA",8,$e)]),_:2},1024)]),_:2},1024))]))),128)),v(ve,{pages:e(A),onEmitPages:e(f)},null,8,["pages","onEmitPages"])])):G("",!0),e(P)!==null?(n(),i("div",xe,[(n(!0),i(x,null,T(e(z),o=>(n(),i("div",{key:o.id,class:"col-lg-3 col-md-4 col-sm-6 col-12"},[(n(),N(w,null,{fallback:s(()=>[v(D)]),default:s(()=>[v(E,null,{goodImage:s(()=>[t("img",{onClick:u(k=>e(m)(o.id),["prevent"]),src:o.imageUrl,class:"card-img-top",alt:""},null,8,Se)]),goodTitle:s(()=>[$(C(o.title),1)]),goodPrice:s(()=>[$("NT$\xA0"+C(h.$filter.currency(o.price)),1)]),myCollect:s(()=>[t("a",{onClick:u(k=>e(d)(o,o.id),["prevent"]),href:"#",class:b(["btn me-2",e(l).indexOf(o.id)>-1?"btn-toffee":"btn-outline-toffee"])},Ae,10,Te)]),goodToCart:s(()=>[t("button",{type:"button",onClick:u(k=>e(I)(o.id,1),["prevent"]),class:"btn btn-outline-toffee flex-fill"},"\u52A0\u5165\u8CFC\u7269\u8ECA",8,Be)]),_:2},1024)]),_:2},1024))]))),128))])):G("",!0)])],64)}}};export{Le as default};