(this["webpackJsonpmy-react-website"]=this["webpackJsonpmy-react-website"]||[]).push([[0],{17:function(e,t,a){},40:function(e,t,a){},42:function(e,t,a){"use strict";a.r(t);var s=a(1),c=a.n(s),n=a(12),i=a.n(n),l=(a(17),a(18),a(19),a(40),a(0)),r=function(){return Object(l.jsx)("footer",{className:"bg-dark text-center text-white p-2 mt-3",children:"\xa9 DWWM - M2i"})},o=a(4),d=function(){var e=Object(s.useState)([]),t=Object(o.a)(e,2),a=t[0],c=t[1];Object(s.useEffect)((function(){fetch("https://html-learning.com/dwwm2i/dekpo/public/pictures/list?limit=3").then((function(e){return e.json()})).then((function(e){console.log(e),c(e)}))}),[]);var n=0;return Object(l.jsxs)("div",{id:"carouselExampleCaptions",className:"carousel slide","data-bs-ride":"carousel",children:[Object(l.jsxs)("div",{className:"carousel-indicators",children:[Object(l.jsx)("button",{type:"button","data-bs-target":"#carouselExampleCaptions","data-bs-slide-to":"0",className:"active","aria-current":"true","aria-label":"Slide 1"}),Object(l.jsx)("button",{type:"button","data-bs-target":"#carouselExampleCaptions","data-bs-slide-to":"1","aria-label":"Slide 2"}),Object(l.jsx)("button",{type:"button","data-bs-target":"#carouselExampleCaptions","data-bs-slide-to":"2","aria-label":"Slide 3"})]}),Object(l.jsx)("div",{className:"carousel-inner",children:a.map((function(e){return n++,Object(l.jsxs)("div",{className:"carousel-item "+(1===n?"active":""),children:[Object(l.jsx)("img",{src:e.url,className:"d-block w-100",alt:e.title}),Object(l.jsxs)("div",{className:"carousel-caption d-none d-sm-block",children:[Object(l.jsx)("h5",{children:e.title}),Object(l.jsx)("p",{children:e.description})]})]},e.id)}))}),Object(l.jsxs)("button",{className:"carousel-control-prev",type:"button","data-bs-target":"#carouselExampleCaptions","data-bs-slide":"prev",children:[Object(l.jsx)("span",{className:"carousel-control-prev-icon","aria-hidden":"true"}),Object(l.jsx)("span",{className:"visually-hidden",children:"Previous"})]}),Object(l.jsxs)("button",{className:"carousel-control-next",type:"button","data-bs-target":"#carouselExampleCaptions","data-bs-slide":"next",children:[Object(l.jsx)("span",{className:"carousel-control-next-icon","aria-hidden":"true"}),Object(l.jsx)("span",{className:"visually-hidden",children:"Next"})]})]})},j=function(){return Object(l.jsx)("section",{children:Object(l.jsxs)("div",{className:"container-fluid",children:[Object(l.jsx)("div",{className:"row",children:Object(l.jsx)("h1",{children:"Home"})}),Object(l.jsxs)("div",{className:"row",children:[Object(l.jsx)("div",{className:"col-12 col-md-6",children:Object(l.jsx)(d,{})}),Object(l.jsx)("div",{className:"col-12 col-md-6",children:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."})]})]})})},b=function(e){var t=e.limit,a=e.count,s=e.page,c=e.nextPage;return Object(l.jsx)("nav",{children:Object(l.jsxs)("ul",{className:"pagination justify-content-center",children:[Object(l.jsx)("li",{className:"page-item "+(s<2?"disabled":""),children:Object(l.jsx)("a",{className:"page-link",href:"#",onClick:function(){return c(s-1)},children:"Previous"})}),s-2>0?Object(l.jsx)("li",{className:"page-item",children:Object(l.jsx)("a",{className:"page-link",href:"#",onClick:function(){return c(s-2)},children:s-2})}):"",s-1>0?Object(l.jsx)("li",{className:"page-item",children:Object(l.jsx)("a",{className:"page-link",href:"#",onClick:function(){return c(s-1)},children:s-1})}):"",Object(l.jsx)("li",{className:"page-item active",children:Object(l.jsx)("a",{className:"page-link",href:"#",onClick:function(){return c(s)},children:s})}),s*t<a?Object(l.jsx)("li",{className:"page-item",children:Object(l.jsx)("a",{className:"page-link",href:"#",onClick:function(){return c(s+1)},children:s+1})}):"",(s+1)*t<a?Object(l.jsx)("li",{className:"page-item",children:Object(l.jsx)("a",{className:"page-link",href:"#",onClick:function(){return c(s+2)},children:s+2})}):"",Object(l.jsx)("li",{className:"page-item "+(s*t>=a?"disabled":""),children:Object(l.jsx)("a",{className:"page-link",href:"#",onClick:function(){return c(s+1)},children:"Next"})})]})})},m=function(){var e=Object(s.useState)([]),t=Object(o.a)(e,2),a=t[0],c=t[1],n=Object(s.useState)(1),i=Object(o.a)(n,2),r=i[0],d=i[1],j=Object(s.useState)(0),m=Object(o.a)(j,2),u=m[0],h=m[1];Object(s.useEffect)((function(){fetch("https://html-learning.com/dwwm2i/dekpo/public/pictures/count").then((function(e){return e.json()})).then((function(e){console.log("Total: ",e.count),h(e.count)})),fetch("https://html-learning.com/dwwm2i/dekpo/public/pictures/list?page="+r+"&limit=6").then((function(e){return e.json()})).then((function(e){console.log("Items: ",e),c(e)}))}),[r]);var p=function(e){d(e),console.log(6*e)},x=function(){return Object(l.jsx)("div",{className:"row",children:a.map((function(e){return Object(l.jsxs)("div",{className:"col-12 col-md-4 mb-2 text-center",children:[Object(l.jsx)("img",{className:"img-fluid",src:e.url,alt:"Cabane"}),Object(l.jsx)("h2",{className:"h5",children:e.title})]},e.id)}))})};return Object(l.jsx)("section",{children:Object(l.jsxs)("div",{className:"container-fluid",children:[Object(l.jsx)("div",{className:"row",children:Object(l.jsx)("h1",{children:"Gallery"})}),Object(l.jsx)(b,{limit:6,count:u,page:r,nextPage:p}),Object(l.jsx)(x,{}),Object(l.jsx)(b,{limit:6,count:u,page:r,nextPage:p})]})})},u=function(){return Object(l.jsx)("section",{children:Object(l.jsxs)("div",{className:"container-fluid",children:[Object(l.jsx)("div",{className:"row",children:Object(l.jsx)("h1",{children:"Contact"})}),Object(l.jsxs)("div",{className:"row",children:[Object(l.jsx)("div",{className:"col-12",children:Object(l.jsx)("iframe",{title:"map",src:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5648408.552307045!2d-1.6075042511671231!3d46.269866038236074!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x478af4ae98246ab9%3A0x373e98de47360574!2sM2i%20Formation!5e0!3m2!1sfr!2sfr!4v1636035139478!5m2!1sfr!2sfr",width:"100%",height:"450",loading:"lazy"})}),Object(l.jsx)("div",{className:"col-12",children:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."})]})]})})},h=a(5),p=a.p+"static/media/logo.6ce24c58.svg",x=function(){return Object(l.jsx)("header",{children:Object(l.jsx)("nav",{className:"navbar navbar-expand-lg navbar-dark bg-dark",children:Object(l.jsxs)("div",{className:"container-fluid",children:[Object(l.jsx)(h.b,{className:"navbar-brand",to:"/ReactSmallSite/",children:Object(l.jsx)("img",{src:p,alt:"React Logo",width:"50"})}),Object(l.jsx)("button",{className:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation",children:Object(l.jsx)("span",{className:"navbar-toggler-icon"})}),Object(l.jsx)("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent",children:Object(l.jsxs)("ul",{className:"navbar-nav me-auto mb-2 mb-lg-0",children:[Object(l.jsx)("li",{className:"nav-item",children:Object(l.jsx)(h.b,{exact:"true",className:"nav-link",to:"/ReactSmallSite/",children:"Home"})}),Object(l.jsx)("li",{className:"nav-item",children:Object(l.jsx)(h.b,{className:"nav-link",to:"/ReactSmallSite/gallery",children:"Gallery"})}),Object(l.jsx)("li",{className:"nav-item",children:Object(l.jsx)(h.b,{className:"nav-link",to:"/ReactSmallSite/contact",children:"Contact"})})]})})]})})})},O=a(2);var g=function(){return Object(l.jsxs)("div",{children:[Object(l.jsxs)(h.a,{children:[Object(l.jsx)(x,{}),Object(l.jsxs)(O.c,{children:[Object(l.jsx)(O.a,{path:"/ReactSmallSite/",element:Object(l.jsx)(j,{})}),Object(l.jsx)(O.a,{path:"/ReactSmallSite/contact",element:Object(l.jsx)(u,{})}),Object(l.jsx)(O.a,{path:"/ReactSmallSite/gallery",element:Object(l.jsx)(m,{})})]})]}),Object(l.jsx)(r,{})]})},f=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,43)).then((function(t){var a=t.getCLS,s=t.getFID,c=t.getFCP,n=t.getLCP,i=t.getTTFB;a(e),s(e),c(e),n(e),i(e)}))};i.a.render(Object(l.jsx)(c.a.StrictMode,{children:Object(l.jsx)(g,{})}),document.getElementById("root")),f()}},[[42,1,2]]]);
//# sourceMappingURL=main.6456d575.chunk.js.map