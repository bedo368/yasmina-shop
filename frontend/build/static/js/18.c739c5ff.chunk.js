(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[18],{143:function(e,t,a){"use strict";var n=a(1),r=a(2),c=a(4),l=a.n(c),o=a(0),i=a.n(o),u=a(5),s=["xl","lg","md","sm","xs"],m=i.a.forwardRef((function(e,t){var a=e.bsPrefix,c=e.className,o=e.noGutters,m=e.as,d=void 0===m?"div":m,p=Object(r.a)(e,["bsPrefix","className","noGutters","as"]),E=Object(u.a)(a,"row"),f=E+"-cols",y=[];return s.forEach((function(e){var t,a=p[e];delete p[e];var n="xs"!==e?"-"+e:"";null!=(t=null!=a&&"object"===typeof a?a.cols:a)&&y.push(""+f+n+"-"+t)})),i.a.createElement(d,Object(n.a)({ref:t},p,{className:l.a.apply(void 0,[c,E,o&&"no-gutters"].concat(y))}))}));m.displayName="Row",m.defaultProps={noGutters:!1},t.a=m},145:function(e,t,a){"use strict";var n=a(0),r=a.n(n),c=a(136),l=a(143),o=a(84);t.a=function(e){var t=e.children;return r.a.createElement(c.a,null,r.a.createElement(l.a,{className:"justify-content-md-center"},r.a.createElement(o.a,{xs:12,md:6},t)))}},146:function(e,t,a){"use strict";a.d(t,"a",(function(){return o})),a.d(t,"b",(function(){return i})),a.d(t,"d",(function(){return u})),a.d(t,"c",(function(){return s}));var n=a(27),r=a.n(n),c=a(43),l=a(32),o=function(e,t){return function(){var a=Object(c.a)(r.a.mark((function a(n,c){var o,i,u,s,m;return r.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:o=e._id,i=e.name,u=e.image,s=e.price,m=e.countInStock,n({type:l.a.CART_ADD_ITEM,payload:{_id:o,name:i,image:u,price:s,countInStock:m,qty:Number(t)}}),localStorage.setItem("cartItems",JSON.stringify(c().cartReducer.cartItems));case 3:case"end":return a.stop()}}),a)})));return function(e,t){return a.apply(this,arguments)}}()},i=function(e){return function(){var t=Object(c.a)(r.a.mark((function t(a,n){return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:a({type:l.a.CART_REMOVE_ITEM,payload:e}),localStorage.setItem("cartItems",JSON.stringify(n().cartReducer.cartItems));case 2:case"end":return t.stop()}}),t)})));return function(e,a){return t.apply(this,arguments)}}()},u=function(e){return function(t){t({type:l.a.SAVE_SHIPPING_ADDRESS,payload:e}),localStorage.setItem("shippingAddress",JSON.stringify(e))}},s=function(e){return function(t,a){t({type:l.a.SAVE_PAYMENT_METHOD,payload:e}),localStorage.setItem("paymentMethod",JSON.stringify(a().cartReducer.paymentMethod))}}},156:function(e,t,a){"use strict";var n=a(0),r=a.n(n),c=a(137),l=a(17);t.a=function(e){var t=e.step1,a=e.step2,n=e.step3,o=e.step4;return r.a.createElement(c.a,{className:"justify-content-center mb-4"},r.a.createElement(c.a.Item,null,t?r.a.createElement(l.LinkContainer,{to:"/login"},r.a.createElement(c.a.Link,null,"Sign In")):r.a.createElement(c.a.Link,{disabled:!0},"Sign In")),r.a.createElement(c.a.Item,null,a?r.a.createElement(l.LinkContainer,{to:"/shipping"},r.a.createElement(c.a.Link,null,"Shipping")):r.a.createElement(c.a.Link,{disabled:!0},"Shipping")),r.a.createElement(c.a.Item,null,n?r.a.createElement(l.LinkContainer,{to:"/payment"},r.a.createElement(c.a.Link,null,"Payment Method")):r.a.createElement(c.a.Link,{disabled:!0},"Payment Method")),r.a.createElement(c.a.Item,null,o?r.a.createElement(l.LinkContainer,{to:"/placeOrder"},r.a.createElement(c.a.Link,null,"Sign In")):r.a.createElement(c.a.Link,{disabled:!0},"Sign In")))}},174:function(e,t,a){"use strict";a.r(t);var n=a(65),r=a(3),c=a(64),l=a(0),o=a.n(l),i=a(138),u=a(85),s=a(26),m=a(145),d=a(146),p=a(156);t.default=function(e){var t=e.history,a=Object(s.b)(),E=Object(l.useState)({address:"",city:"",postalCode:"",country:""}),f=Object(c.a)(E,2),y=f[0],b=f[1],h=y.address,v=y.city,g=y.postalCode,I=y.country,S=function(e){var t=e.target,a=t.value,c=t.name;b((function(e){return Object(r.a)(Object(r.a)({},e),{},Object(n.a)({},c,a))}))};return o.a.createElement(m.a,null,o.a.createElement(p.a,{step1:!0,step2:!0}),o.a.createElement("h1",null,"Shipping "),o.a.createElement(i.a,{onSubmit:function(e){e.preventDefault();var n={address:h,city:v,postalCode:g,country:I};a(Object(d.d)(n)),t.push("/payment")}},o.a.createElement(i.a.Group,{controlId:"address"},o.a.createElement(i.a.Label,null," address"),o.a.createElement(i.a.Control,{type:"text",placeholder:"Enter address",name:"address",value:h,onChange:S,required:!0})),o.a.createElement(i.a.Group,{controlId:"address"},o.a.createElement(i.a.Label,null," city"),o.a.createElement(i.a.Control,{type:"text",placeholder:"Enter city",name:"city",value:v,onChange:S,required:!0})),o.a.createElement(i.a.Group,{controlId:"postalCode"},o.a.createElement(i.a.Label,null," postalCode"),o.a.createElement(i.a.Control,{type:"text",placeholder:"Enter postalCode",name:"postalCode",value:g,onChange:S,required:!0})),o.a.createElement(i.a.Group,{controlId:"country"},o.a.createElement(i.a.Label,null," country"),o.a.createElement(i.a.Control,{type:"text",placeholder:"Enter country",name:"country",value:I,onChange:S,required:!0})),o.a.createElement(u.a,{type:"submit",variant:"primary"},"Continue")))}}}]);
//# sourceMappingURL=18.c739c5ff.chunk.js.map