(this["webpackJsonpmy-react-website"]=this["webpackJsonpmy-react-website"]||[]).push([[0],{21:function(e,t,s){},44:function(e,t,s){},46:function(e,t,s){"use strict";s.r(t);var c=s(2),a=s.n(c),n=s(15),i=s.n(n),l=(s(21),s(22),s(23),s(44),s(1)),r=function(){return Object(l.jsx)("footer",{className:"bg-dark text-center text-white p-2 mt-3",children:"\xa9 DWWM - M2i"})},o=s(7),j=s.p+"static/media/logo.6ce24c58.svg",d=s(5),b=function(){return Object(l.jsx)("header",{children:Object(l.jsx)("nav",{className:"navbar navbar-expand-lg navbar-dark bg-dark",children:Object(l.jsxs)("div",{className:"container-fluid",children:[Object(l.jsx)(o.b,{className:"navbar-brand",to:"/ReactSmallSite/",children:Object(l.jsx)("img",{src:j,alt:"React Logo",width:"50"})}),Object(l.jsx)("button",{className:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation",children:Object(l.jsx)("span",{className:"navbar-toggler-icon"})}),Object(l.jsx)("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent",children:Object(l.jsxs)("ul",{className:"navbar-nav me-auto mb-2 mb-lg-0",children:[Object(l.jsx)("li",{className:"nav-item",children:Object(l.jsx)(o.b,{exact:"true",className:"nav-link",to:d.HOMEPAGE+"/",children:"Home"})}),Object(l.jsx)("li",{className:"nav-item",children:Object(l.jsx)(o.b,{className:"nav-link",to:d.HOMEPAGE+"/gallery",children:"Gallery"})}),Object(l.jsx)("li",{className:"nav-item",children:Object(l.jsx)(o.b,{className:"nav-link",to:d.HOMEPAGE+"/contact",children:"Contact"})})]})})]})})})},u=s(4),m=function(){var e=Object(c.useState)([]),t=Object(u.a)(e,2),s=t[0],a=t[1];Object(c.useEffect)((function(){fetch(d.API_URL+"/pictures/list?limit=3").then((function(e){return e.json()})).then((function(e){console.log(e),a(e)}))}),[]);var n=0;return Object(l.jsxs)("div",{id:"carouselExampleCaptions",className:"carousel slide","data-bs-ride":"carousel",children:[Object(l.jsxs)("div",{className:"carousel-indicators",children:[Object(l.jsx)("button",{type:"button","data-bs-target":"#carouselExampleCaptions","data-bs-slide-to":"0",className:"active","aria-current":"true","aria-label":"Slide 1"}),Object(l.jsx)("button",{type:"button","data-bs-target":"#carouselExampleCaptions","data-bs-slide-to":"1","aria-label":"Slide 2"}),Object(l.jsx)("button",{type:"button","data-bs-target":"#carouselExampleCaptions","data-bs-slide-to":"2","aria-label":"Slide 3"})]}),Object(l.jsx)("div",{className:"carousel-inner",children:s.map((function(e){return n++,Object(l.jsxs)("div",{className:"carousel-item "+(1===n?"active":""),children:[Object(l.jsx)("img",{src:e.url,className:"d-block w-100",alt:e.title}),Object(l.jsxs)("div",{className:"carousel-caption d-none d-sm-block",children:[Object(l.jsx)("h5",{children:e.title}),Object(l.jsx)("p",{children:e.description})]})]},e.id)}))}),Object(l.jsxs)("button",{className:"carousel-control-prev",type:"button","data-bs-target":"#carouselExampleCaptions","data-bs-slide":"prev",children:[Object(l.jsx)("span",{className:"carousel-control-prev-icon","aria-hidden":"true"}),Object(l.jsx)("span",{className:"visually-hidden",children:"Previous"})]}),Object(l.jsxs)("button",{className:"carousel-control-next",type:"button","data-bs-target":"#carouselExampleCaptions","data-bs-slide":"next",children:[Object(l.jsx)("span",{className:"carousel-control-next-icon","aria-hidden":"true"}),Object(l.jsx)("span",{className:"visually-hidden",children:"Next"})]})]})},h=function(){return Object(l.jsx)("section",{children:Object(l.jsxs)("div",{className:"container-fluid",children:[Object(l.jsx)("div",{className:"row",children:Object(l.jsx)("h1",{children:"Home"})}),Object(l.jsxs)("div",{className:"row",children:[Object(l.jsx)("div",{className:"col-12 col-md-6",children:Object(l.jsx)(m,{})}),Object(l.jsx)("div",{className:"col-12 col-md-6",children:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."})]})]})})},x=s(3),O=function(e){var t=e.galleryData,s=e.page;return Object(l.jsx)("div",{className:"row",children:t.map((function(e){return Object(l.jsxs)("div",{className:"col-12 col-md-4 mb-2 text-center",children:[Object(l.jsx)(o.b,{to:d.HOMEPAGE+"/picture/"+e.id+"/"+s,children:Object(l.jsx)("img",{className:"img-fluid thumb",src:e.url,alt:e.title})}),Object(l.jsx)("h2",{className:"h5",children:e.title})]},e.id)}))})},p=function(e){var t=e.limit,s=e.count,c=e.page,a=e.nextPage;return Object(l.jsx)("nav",{children:Object(l.jsxs)("ul",{className:"pagination justify-content-center",children:[Object(l.jsx)("li",{className:"page-item "+(c<2?"disabled":""),children:Object(l.jsx)("a",{className:"page-link",href:"#",onClick:function(){return a(c-1)},children:"Previous"})}),c-2>0?Object(l.jsx)("li",{className:"page-item",children:Object(l.jsx)("a",{className:"page-link",href:"#",onClick:function(){return a(c-2)},children:c-2})}):"",c-1>0?Object(l.jsx)("li",{className:"page-item",children:Object(l.jsx)("a",{className:"page-link",href:"#",onClick:function(){return a(c-1)},children:c-1})}):"",Object(l.jsx)("li",{className:"page-item active",children:Object(l.jsx)("a",{className:"page-link",href:"#",onClick:function(){return a(c)},children:c})}),c*t<s?Object(l.jsx)("li",{className:"page-item",children:Object(l.jsx)("a",{className:"page-link",href:"#",onClick:function(){return a(c+1)},children:c+1})}):"",(c+1)*t<s?Object(l.jsx)("li",{className:"page-item",children:Object(l.jsx)("a",{className:"page-link",href:"#",onClick:function(){return a(c+2)},children:c+2})}):"",Object(l.jsx)("li",{className:"page-item "+(c*t>=s?"disabled":""),children:Object(l.jsx)("a",{className:"page-link",href:"#",onClick:function(){return a(c+1)},children:"Next"})})]})})},g=function(){var e=Object(x.g)().p;void 0===e&&(e=1);var t=Object(c.useState)([]),s=Object(u.a)(t,2),a=s[0],n=s[1],i=Object(c.useState)(parseInt(e)),r=Object(u.a)(i,2),o=r[0],j=r[1],b=Object(c.useState)(0),m=Object(u.a)(b,2),h=m[0],g=m[1];Object(c.useEffect)((function(){fetch(d.API_URL+"/pictures/count").then((function(e){return e.json()})).then((function(e){console.log("Total: ",e.count),g(e.count)})),fetch(d.API_URL+"/pictures/list?page="+o+"&limit=6").then((function(e){return e.json()})).then((function(e){console.log("Items: ",e),n(e)}))}),[o]);var f=function(e){j(e),console.log(6*e)};return Object(l.jsx)("section",{children:Object(l.jsxs)("div",{className:"container-fluid",children:[Object(l.jsx)("div",{className:"row",children:Object(l.jsx)("h1",{children:"Gallery"})}),Object(l.jsx)(p,{limit:6,count:h,page:o,nextPage:f}),Object(l.jsx)(O,{galleryData:a,page:o}),Object(l.jsx)(p,{limit:6,count:h,page:o,nextPage:f})]})})},f=function(){return Object(l.jsx)("section",{children:Object(l.jsxs)("div",{className:"container-fluid",children:[Object(l.jsx)("div",{className:"row",children:Object(l.jsx)("h1",{children:"Contact"})}),Object(l.jsxs)("div",{className:"row",children:[Object(l.jsx)("div",{className:"col-12",children:Object(l.jsx)("iframe",{title:"map",src:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5648408.552307045!2d-1.6075042511671231!3d46.269866038236074!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x478af4ae98246ab9%3A0x373e98de47360574!2sM2i%20Formation!5e0!3m2!1sfr!2sfr!4v1636035139478!5m2!1sfr!2sfr",width:"100%",height:"450",loading:"lazy"})}),Object(l.jsx)("div",{className:"col-12",children:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."})]})]})})},v=s(16),N=s(11),k=function(){var e=Object(x.g)(),t=e.id,s=e.p,a=Object(c.useState)({}),n=Object(u.a)(a,2),i=n[0],r=n[1],j=Object(c.useState)([]),b=Object(u.a)(j,2),m=b[0],h=b[1],O=Object(c.useState)(!1),p=Object(u.a)(O,2),g=p[0],f=p[1],k=function(){fetch(d.API_URL+"/picture/"+t).then((function(e){return e.json()})).then((function(e){console.log("Picture: ",e),r(e),console.log(Object.entries(e.date_created)),h(Object.entries(e.date_created)[0][1].substr(0,19))}))};Object(c.useEffect)((function(){k()}),[]);return Object(l.jsx)("section",{children:Object(l.jsxs)("div",{className:"container-fluid",children:[Object(l.jsx)("div",{className:"row",children:Object(l.jsx)("h2",{children:Object(l.jsxs)(o.b,{className:"dark",to:d.HOMEPAGE+"/gallery/"+s,children:[Object(l.jsx)(v.a,{color:"#212529"}),Object(l.jsx)("span",{children:"Go Back"})]})})}),Object(l.jsxs)("div",{className:"row",children:[Object(l.jsx)("div",{className:"col-12",children:Object(l.jsx)("img",{className:"img-fluid full",src:i.url,alt:i.title})}),Object(l.jsx)("div",{className:"col-12",children:Object(l.jsxs)("h5",{className:"d-flex justify-content-between",children:[Object(l.jsxs)("span",{children:["Author: ",i.author]}),Object(l.jsxs)("span",{children:["Created: ",m]})]})}),Object(l.jsx)("div",{className:"col-12",children:Object(l.jsxs)("h1",{className:"d-flex justify-content-between",children:[i.title,Object(l.jsxs)("a",{href:"#",className:i.likes>0?"liked":"dark",onClick:function(e){e.preventDefault();fetch(d.API_URL+"/picture/"+t+"/like",{method:"POST"}).then((function(e){return e.json()})).then((function(e){f(!0),k(),console.log("Like: ",e)}))},children:[i.likes>0?i.likes:null,g?Object(l.jsx)(N.b,{}):Object(l.jsx)(N.a,{})]})]})}),Object(l.jsx)("div",{className:"col-12",children:Object(l.jsx)("p",{children:i.description})})]})]})})};var y=function(){return Object(l.jsxs)("div",{children:[Object(l.jsxs)(o.a,{children:[Object(l.jsx)(b,{}),Object(l.jsxs)(x.c,{children:[Object(l.jsx)(x.a,{path:"/ReactSmallSite/",element:Object(l.jsx)(h,{})}),Object(l.jsx)(x.a,{path:"/ReactSmallSite/contact",element:Object(l.jsx)(f,{})}),Object(l.jsx)(x.a,{path:"/ReactSmallSite/gallery",element:Object(l.jsx)(g,{})}),Object(l.jsx)(x.a,{path:"/ReactSmallSite/gallery/:p",element:Object(l.jsx)(g,{})}),Object(l.jsx)(x.a,{path:"/ReactSmallSite/picture/:id/:p",element:Object(l.jsx)(k,{})})]})]}),Object(l.jsx)(r,{})]})},w=function(e){e&&e instanceof Function&&s.e(3).then(s.bind(null,47)).then((function(t){var s=t.getCLS,c=t.getFID,a=t.getFCP,n=t.getLCP,i=t.getTTFB;s(e),c(e),a(e),n(e),i(e)}))};i.a.render(Object(l.jsx)(a.a.StrictMode,{children:Object(l.jsx)(y,{})}),document.getElementById("root")),w()},5:function(e){e.exports=JSON.parse('{"API_URL":"https://html-learning.com/dwwm2i/dekpo/public","HOMEPAGE":"/ReactSmallSite"}')}},[[46,1,2]]]);
//# sourceMappingURL=main.44ed0c0f.chunk.js.map