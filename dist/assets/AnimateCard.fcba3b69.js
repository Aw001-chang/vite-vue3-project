import{H as w,h as n,I as A,s as f,J as $,K as C,_ as u,L as I,o as h,a as p,b as s,r as c,M as S,d as l}from"./index.13e0b9c3.js";import{a as G}from"./index.23f264cd.js";const F=w("goodsAll",()=>{const e=n(!1),t=n(G("recentWatched",[])),d=n([]),o=async()=>{try{const a="https://vue3-course-api.hexschool.io/api/anpo/products/all";e.value=!0;const r=await $.get(a);e.value=!1,d.value=r.data.products,d.value.reverse()}catch(a){console.log(a.response)}},i=n([]),g=n({}),m=async(a=1)=>{try{const r=`https://vue3-course-api.hexschool.io/api/anpo/products?page=${a}`;e.value=!0;const v=await $.get(r);e.value=!1,i.value=v.data.products,g.value=v.data.pagination}catch(r){console.log(r.response)}C()},x=A(),y=a=>{x.push(`goodInfomation/${a}`),t.value.push(a),localStorage.setItem("recentWatched",a)},b=()=>{t.value.length=0,localStorage.removeItem("recentWatched")};return f(o),f(m),{isLoading:e,goodsAll:d,getGoodId:y,goods:i,pagination:g,WatchedData:t,clearStorage:b,getGoods:m}});const P={class:"card border-0 mb-5"},T={class:"card-img"},W={class:"card-body px-0 text-orange-900"},B={class:"card-title text-2-line text-2-line-height fw-normal"},R={class:"card-text"},V={class:"btns d-flex w-100"},k={__name:"GoodCard",async setup(e){let t,d;return[t,d]=I(()=>new Promise(o=>setTimeout(o,1e3))),await t,d(),(o,i)=>(h(),p("div",P,[s("div",T,[c(o.$slots,"goodImage",{},void 0,!0)]),s("div",W,[s("h5",B,[c(o.$slots,"goodTitle",{},void 0,!0)]),s("p",R,[c(o.$slots,"goodPrice",{},void 0,!0)]),s("div",V,[c(o.$slots,"myCollect",{},void 0,!0),c(o.$slots,"goodToCart",{},void 0,!0)])])]))}},O=u(k,[["__scopeId","data-v-442545f9"]]);const L={class:"placeholder"},M={__name:"AnimatedPlaceholder",props:{height:{type:String},width:{type:String},borderRadius:{type:String}},setup(e){return S(t=>({ae1ce918:e.height,"03f3944e":e.width,"517f6f2a":e.borderRadius})),(t,d)=>(h(),p("div",L))}},_=u(M,[["__scopeId","data-v-a1f8a8ca"]]);const N={class:"card mb-4"},D={class:"card-img"},E={class:"card-body body-placeholder"},H={class:"card-title text-2-line text-2-line-height"},J={class:"card-text"},K={class:"btns d-flex w-100"},j={__name:"AnimateCard",setup(e){return(t,d)=>(h(),p("div",N,[s("div",D,[l(_,{height:"200px",width:"100%"})]),s("div",E,[s("h5",H,[l(_,{height:"18px",width:"70%","border-radius":"8px"})]),s("p",J,[l(_,{height:"12px",width:"40%","border-radius":"8px"})]),s("div",K,[c(t.$slots,"myCollect",{},void 0,!0),c(t.$slots,"goodToCart",{},void 0,!0)])])]))}},Q=u(j,[["__scopeId","data-v-b88311e0"]]);export{Q as A,O as G,F as u};
