(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[11],{151:function(e,a,t){"use strict";var n=t(0),r=t.n(n),o=t(153),c=function(e){var a=e.variant,t=e.children;return r.a.createElement(o.a,{variant:a},t)};c.defaultProps={variant:"info"},a.a=c},156:function(e,a,t){"use strict";var n=t(70),r=t(0),o=t.n(r),c=t(169),s=t(14);a.a=function(e){var a=e.isOwner,t=void 0!==a&&a,r=e.pages,i=e.page,l=e.isAdmin,u=void 0!==l&&l,d=e.keyword,m=void 0===d?"":d;return r>1&&o.a.createElement(c.a,{className:"mt-5 mx-auto"},Object(n.a)(Array(r).keys()).map((function(e){return o.a.createElement(s.LinkContainer,{key:e+1,to:t?"/owner/productslist/page/".concat(e+1):u?"/admin/productslist/page/".concat(e+1):m?"/search/".concat(m,"/page/").concat(e+1):"/page/".concat(e+1)},o.a.createElement(c.a.Item,{active:e+1===i},e+1))})))}},157:function(e,a,t){"use strict";t.d(a,"b",(function(){return m})),t.d(a,"c",(function(){return p})),t.d(a,"a",(function(){return f}));var n=t(27),r=t.n(n),o=t(43),c=t(44),s=t.n(c),i=(t(28),t(29)),l=function(){return{type:i.a.FETCH_PRODUCTS_START}},u=function(e){return{type:i.a.FETCH_PRODUCTS_SUCCESS,payload:e}},d=function(e){return{type:i.a.FETCH_PRODUCTS_FAIL,payload:e}},m=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"";return function(n){n(l());var r='\n     query{\n       getAllProducts(keyword:"'.concat(e,'" , pageNumber:').concat(a,' , category:"').concat(t,'") {\n       \n         products{\n          _id\n          name\n          image\n          brand\n          price\n          rating\n          numReviews\n          category\n          description\n          countInStock\n          top\n         }\n         pages\n         pageNumber\n         \n         \n       },\n       getCategories\n     }\n     ');s()({method:"POST",data:{query:r},url:"/graphql"}).then((function(e){n(u(e.data.data))})).catch((function(e){var a=e.response.data.errors?e.response.data.errors[0].message:e.response.data;n(d(a))}))}},p=function(e){var a=e.id;return function(){var e=Object(o.a)(r.a.mark((function e(t,n){var o,c,l,u,d,m;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,"\n     mutation($id:String!){\n      removeProductById(id:$id) {\n         _id\n         \n       }\n     }\n     ",o=n().userReducer.userInfo.token,e.next=5,s.a.post("/graphql",{query:"\n     mutation($id:String!){\n      removeProductById(id:$id) {\n         _id\n         \n       }\n     }\n     ",variables:{id:a}},{headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(o)}});case 5:c=e.sent,t({type:i.a.REMOVE_PRODUCT_SUCCESS,payload:c.data.data.removeProductById}),e.next=13;break;case 9:e.prev=9,e.t0=e.catch(0),m=(null===e.t0||void 0===e.t0||null===(l=e.t0.response)||void 0===l?void 0:l.data.errors)?null===e.t0||void 0===e.t0||null===(u=e.t0.response)||void 0===u||null===(d=u.data)||void 0===d?void 0:d.errors[0].message:"this is not your product",t({type:i.a.REMOVE_PRODUCT_FAIL,payload:m});case 13:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(a,t){return e.apply(this,arguments)}}()},f=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;return function(a,t){var n=t().userReducer.userInfo.token;a(l());var r=Number(e),o="\n     query{\n      getAdminProducts( pageNumber:".concat(r,") {\n        products{\n         _id\n         name\n         image\n         brand\n         price\n         rating\n         numReviews\n         category\n         description\n         countInStock\n         top\n         }\n         pages\n         pageNumber\n         \n       }\n     }\n     ");s()({method:"POST",url:"/graphql",data:{query:o},headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(n)}}).then((function(e){a({type:"FETCH_MYADMIN_PRODUCTS",payload:e.data.data.getAdminProducts})})).catch((function(e){a(d(""))}))}}},166:function(e,a,t){"use strict";var n=t(0),r=t.n(n),o=(t(167),function(e){var a=e.value,t=e.text,n=e.color;return r.a.createElement("div",{className:"rating"},r.a.createElement("span",null,r.a.createElement("i",{style:{color:n},className:a>=1?"fas fa-star":a>=.5?"fas fa-star-half-alt":"far fa-star"})),r.a.createElement("span",null,r.a.createElement("i",{style:{color:n},className:a>=2?"fas fa-star":a>=1.5?"fas fa-star-half-alt":"far fa-star"})),r.a.createElement("span",null,r.a.createElement("i",{style:{color:n},className:a>=3?"fas fa-star":a>=2.5?"fas fa-star-half-alt":"far fa-star"})),r.a.createElement("span",null,r.a.createElement("i",{style:{color:n},className:a>=4?"fas fa-star":a>=3.5?"fas fa-star-half-alt":"far fa-star"})),r.a.createElement("span",null,r.a.createElement("i",{style:{color:n},className:a>=5?"fas fa-star":a>=4.5?"fas fa-star-half-alt":"far fa-star"})),r.a.createElement("span",null,t&&t))});o.defaultProps={color:"#f8e825"},a.a=o},167:function(e,a,t){},190:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),o=t(152),c=t(87),s=t(145),i=t(161),l=t(166),u=t(35),d=function(e){var a=e.product,t=e.Home;return r.a.createElement(i.a,{className:"my-2 p-4 rounded mx-auto  ",style:t&&{backgroundColor:"rgb(173, 12, 100)",color:"white"}},r.a.createElement(u.Link,{to:"/product/".concat(null===a||void 0===a?void 0:a._id)},r.a.createElement(i.a.Img,{src:null===a||void 0===a?void 0:a.image,variant:"top",style:{maxHeight:"300px",minHeight:"300px"}})),r.a.createElement(i.a.Body,null,r.a.createElement(u.Link,{to:"/product/".concat(null===a||void 0===a?void 0:a._id)},r.a.createElement(i.a.Title,{as:"div",className:"mx-auto",style:{color:"white",alignSelf:"flex-end"}}," ",null===a||void 0===a?void 0:a.name," ")),r.a.createElement(i.a.Text,null,r.a.createElement("div",{className:"my-3"},r.a.createElement(l.a,{value:null===a||void 0===a?void 0:a.rating,text:"".concat(null===a||void 0===a?void 0:a.numReviews,"reviews")}))),r.a.createElement(i.a.Text,{as:"h3"},"$",null===a||void 0===a?void 0:a.price)))},m=t(157),p=t(19),f=t(66),v=t(151),g=t(156),y=t(189),E=t(159),h=t(44),T=t.n(h),b=t(55),_=function(){var e=Object(p.b)(),a=Object(p.c)((function(e){return e.topProductReducer})),t=a.products,o=a.loading,c=a.errMassege;return Object(n.useEffect)((function(){e((function(e){e({type:b.a.FETCH_TOP_PRODUCTS_START}),T()({method:"POST",data:{query:"\n     query{\n      getTopProduct {\n       \n         \n          _id\n          name\n          image\n          brand\n          price\n          rating\n          numReviews\n          category\n          description\n          countInStock\n        \n         \n         \n       }\n     }\n     "},url:"/graphql"}).then((function(a){e({type:b.a.FETCH_TOP_PRODUCTS_SUCCESS,payload:a.data.data.getTopProduct})})).catch((function(a){var t=a.response.data.errors?a.response.data.errors[0].message:a.response.data;e({payload:t,type:b.a.FETCH_TOP_PRODUCTS_FAIL})}))}))}),[e]),o?r.a.createElement(f.a,null):c?"":r.a.createElement(y.a,{pause:"hover",className:"bg-dark"},null===t||void 0===t?void 0:t.map((function(e){return r.a.createElement(y.a.Item,{key:e._id},r.a.createElement(u.Link,{to:"/product/".concat(e._id)},r.a.createElement(E.a,{src:e.image,fluid:!0}),r.a.createElement(y.a.Caption,{className:"casousel-caption"},r.a.createElement("h2",null,e.name," "))))})))};a.default=function(e){var a=e.match,t=Object(p.b)(),i=Object(p.c)((function(e){return e.productsReducer})),l=i.products,u=i.loading,f=i.errMessage,y=i.pages,E=i.pageNumber;return Object(n.useEffect)((function(){t(Object(m.b)(a.params.keyword,Number(a.params.pageNumber)||1,a.params.categoryID))}),[t,a.params.keyword,a.params.pageNumber,a.params.categoryID]),r.a.createElement(r.a.Fragment,null,!a.params.keyword&&r.a.createElement(_,null),u?"":f?r.a.createElement(v.a,{variant:"danger"}," ",f," "):r.a.createElement("div",{style:{width:"100%"}},r.a.createElement(o.a,{style:{display:"flex",alignContent:"space-evenly"}},null===l||void 0===l?void 0:l.map((function(e){return r.a.createElement(c.a,{key:e._id,style:{}},r.a.createElement(d,{product:e,Home:!0}))}))),r.a.createElement(s.a,{style:{width:"100%",display:"flex",alignItems:"center",justifyItems:"center"}},r.a.createElement(g.a,{style:{alignSelf:"center"},pages:y,page:E,keyword:a.params.keyword?a.params.keyword:""}))))}}}]);
//# sourceMappingURL=11.79b2eb70.chunk.js.map