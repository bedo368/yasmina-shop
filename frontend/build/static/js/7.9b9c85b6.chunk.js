(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[7],{152:function(e,a,t){"use strict";var n=t(1),r=t(0),c=t.n(r),s=t(4),i=t.n(s);a.a=function(e){return c.a.forwardRef((function(a,t){return c.a.createElement("div",Object(n.a)({},a,{ref:t,className:i()(a.className,e)}))}))}},153:function(e,a,t){"use strict";var n=t(0),r=t.n(n),c=t(155),s=function(e){var a=e.variant,t=e.children;return r.a.createElement(c.a,{variant:a},t)};s.defaultProps={variant:"info"},a.a=s},154:function(e,a,t){"use strict";var n=t(1),r=t(2),c=t(4),s=t.n(c),i=t(0),o=t.n(i),l=t(5),u=["xl","lg","md","sm","xs"],d=o.a.forwardRef((function(e,a){var t=e.bsPrefix,c=e.className,i=e.noGutters,d=e.as,m=void 0===d?"div":d,p=Object(r.a)(e,["bsPrefix","className","noGutters","as"]),f=Object(l.a)(t,"row"),v=f+"-cols",b=[];return u.forEach((function(e){var a,t=p[e];delete p[e];var n="xs"!==e?"-"+e:"";null!=(a=null!=t&&"object"===typeof t?t.cols:t)&&b.push(""+v+n+"-"+a)})),o.a.createElement(m,Object(n.a)({ref:a},p,{className:s.a.apply(void 0,[c,f,i&&"no-gutters"].concat(b))}))}));d.displayName="Row",d.defaultProps={noGutters:!1},a.a=d},155:function(e,a,t){"use strict";var n,r=t(1),c=t(2),s=t(4),i=t.n(s),o=t(0),l=t.n(o),u=t(22),d=t(11),m=t(5),p=t(65),f=t(31),v=t(66),b=((n={})[f.b]="show",n[f.a]="show",n),E=l.a.forwardRef((function(e,a){var t=e.className,n=e.children,s=Object(c.a)(e,["className","children"]),u=Object(o.useCallback)((function(e){Object(v.a)(e),s.onEnter&&s.onEnter(e)}),[s]);return l.a.createElement(f.e,Object(r.a)({ref:a,addEndListener:p.a},s,{onEnter:u}),(function(e,a){return l.a.cloneElement(n,Object(r.a)({},a,{className:i()("fade",t,n.props.className,b[e])}))}))}));E.defaultProps={in:!1,timeout:300,mountOnEnter:!1,unmountOnExit:!1,appear:!1},E.displayName="Fade";var h=E,g=t(6),y=t.n(g),N={label:y.a.string.isRequired,onClick:y.a.func},O=l.a.forwardRef((function(e,a){var t=e.label,n=e.onClick,s=e.className,o=Object(c.a)(e,["label","onClick","className"]);return l.a.createElement("button",Object(r.a)({ref:a,type:"button",className:i()("close",s),onClick:n},o),l.a.createElement("span",{"aria-hidden":"true"},"\xd7"),l.a.createElement("span",{className:"sr-only"},t))}));O.displayName="CloseButton",O.propTypes=N,O.defaultProps={label:"Close"};var j=O,C=t(152),w=t(21),P=t(30),k=Object(C.a)("h4");k.displayName="DivStyledAsH4";var R=Object(w.a)("alert-heading",{Component:k}),x=Object(w.a)("alert-link",{Component:P.a}),_={show:!0,transition:h,closeLabel:"Close alert"},S=l.a.forwardRef((function(e,a){var t=Object(u.a)(e,{show:"onClose"}),n=t.bsPrefix,s=t.show,o=t.closeLabel,p=t.className,f=t.children,v=t.variant,b=t.onClose,E=t.dismissible,g=t.transition,y=Object(c.a)(t,["bsPrefix","show","closeLabel","className","children","variant","onClose","dismissible","transition"]),N=Object(m.a)(n,"alert"),O=Object(d.a)((function(e){b&&b(!1,e)})),C=!0===g?h:g,w=l.a.createElement("div",Object(r.a)({role:"alert"},C?y:void 0,{ref:a,className:i()(p,N,v&&N+"-"+v,E&&N+"-dismissible")}),E&&l.a.createElement(j,{onClick:O,label:o}),f);return C?l.a.createElement(C,Object(r.a)({unmountOnExit:!0},y,{ref:void 0,in:s}),w):s?w:null}));S.displayName="Alert",S.defaultProps=_,S.Link=x,S.Heading=R;a.a=S},158:function(e,a,t){"use strict";var n=t(71),r=t(0),c=t.n(r),s=t(171),i=t(15);a.a=function(e){var a=e.isOwner,t=void 0!==a&&a,r=e.pages,o=e.page,l=e.isAdmin,u=void 0!==l&&l,d=e.keyword,m=void 0===d?"":d;return r>1&&c.a.createElement(s.a,{className:"mt-5 mx-auto"},Object(n.a)(Array(r).keys()).map((function(e){return c.a.createElement(i.LinkContainer,{key:e+1,onClick:function(){window.scrollTo({top:400,behavior:"auto"})},to:t?"/owner/productslist/page/".concat(e+1):u?"/admin/productslist/page/".concat(e+1):m?"/search/".concat(m,"/page/").concat(e+1):"/page/".concat(e+1)},c.a.createElement(s.a.Item,{active:e+1===o},e+1))})))}},159:function(e,a,t){"use strict";t.d(a,"b",(function(){return m})),t.d(a,"c",(function(){return p})),t.d(a,"a",(function(){return f}));var n=t(27),r=t.n(n),c=t(44),s=t(45),i=t.n(s),o=(t(28),t(29)),l=function(){return{type:o.a.FETCH_PRODUCTS_START}},u=function(e){return{type:o.a.FETCH_PRODUCTS_SUCCESS,payload:e}},d=function(e){return{type:o.a.FETCH_PRODUCTS_FAIL,payload:e}},m=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"";return function(n){n(l());var r='\n     query{\n       getAllProducts(keyword:"'.concat(e,'" , pageNumber:').concat(a,' , category:"').concat(t,'") {\n       \n         products{\n          _id\n          name\n          image\n          brand\n          price\n          rating\n          numReviews\n          category\n          description\n          countInStock\n          top\n          reviews{\n            _id \n            creator{\n              name\n            }\n          }\n         }\n         pages\n         pageNumber\n         \n         \n       },\n       getCategories\n     }\n     ');i()({method:"POST",data:{query:r},url:"/graphql"}).then((function(e){n(u(e.data.data))})).catch((function(e){var a=e.response.data.errors?e.response.data.errors[0].message:e.response.data;n(d(a))}))}},p=function(e){var a=e.id;return function(){var e=Object(c.a)(r.a.mark((function e(t,n){var c,s,l,u,d,m;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,"\n     mutation($id:String!){\n      removeProductById(id:$id) {\n         _id\n         \n       }\n     }\n     ",c=n().userReducer.userInfo.token,e.next=5,i.a.post("/graphql",{query:"\n     mutation($id:String!){\n      removeProductById(id:$id) {\n         _id\n         \n       }\n     }\n     ",variables:{id:a}},{headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(c)}});case 5:s=e.sent,t({type:o.a.REMOVE_PRODUCT_SUCCESS,payload:s.data.data.removeProductById}),e.next=13;break;case 9:e.prev=9,e.t0=e.catch(0),m=(null===e.t0||void 0===e.t0||null===(l=e.t0.response)||void 0===l?void 0:l.data.errors)?null===e.t0||void 0===e.t0||null===(u=e.t0.response)||void 0===u||null===(d=u.data)||void 0===d?void 0:d.errors[0].message:"this is not your product",t({type:o.a.REMOVE_PRODUCT_FAIL,payload:m});case 13:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(a,t){return e.apply(this,arguments)}}()},f=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;return function(a,t){var n=t().userReducer.userInfo.token;a(l());var r=Number(e),c="\n     query{\n      getAdminProducts( pageNumber:".concat(r,") {\n        products{\n         _id\n         name\n         image\n         brand\n         price\n         rating\n         numReviews\n         category\n         description\n         countInStock\n         top\n         }\n         pages\n         pageNumber\n         \n       }\n     }\n     ");i()({method:"POST",url:"/graphql",data:{query:c},headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(n)}}).then((function(e){a({type:"FETCH_MYADMIN_PRODUCTS",payload:e.data.data.getAdminProducts})})).catch((function(e){a(d(""))}))}}},162:function(e,a,t){"use strict";var n=t(1),r=t(2),c=t(4),s=t.n(c),i=t(0),o=t.n(i),l=t(5),u=o.a.forwardRef((function(e,a){var t=e.bsPrefix,c=e.className,i=e.striped,u=e.bordered,d=e.borderless,m=e.hover,p=e.size,f=e.variant,v=e.responsive,b=Object(r.a)(e,["bsPrefix","className","striped","bordered","borderless","hover","size","variant","responsive"]),E=Object(l.a)(t,"table"),h=s()(c,E,f&&E+"-"+f,p&&E+"-"+p,i&&E+"-striped",u&&E+"-bordered",d&&E+"-borderless",m&&E+"-hover"),g=o.a.createElement("table",Object(n.a)({},b,{className:h,ref:a}));if(v){var y=E+"-responsive";return"string"===typeof v&&(y=y+"-"+v),o.a.createElement("div",{className:y},g)}return g}));a.a=u},171:function(e,a,t){"use strict";var n=t(1),r=t(2),c=t(4),s=t.n(c),i=t(0),o=t.n(i),l=t(5),u=t(30),d=o.a.forwardRef((function(e,a){var t=e.active,c=e.disabled,i=e.className,l=e.style,d=e.activeLabel,m=e.children,p=Object(r.a)(e,["active","disabled","className","style","activeLabel","children"]),f=t||c?"span":u.a;return o.a.createElement("li",{ref:a,style:l,className:s()(i,"page-item",{active:t,disabled:c})},o.a.createElement(f,Object(n.a)({className:"page-link",disabled:c},p),m,t&&d&&o.a.createElement("span",{className:"sr-only"},d)))}));d.defaultProps={active:!1,disabled:!1,activeLabel:"(current)"},d.displayName="PageItem";var m=d;function p(e,a,t){function n(e){var n=e.children,c=Object(r.a)(e,["children"]);return o.a.createElement(d,c,o.a.createElement("span",{"aria-hidden":"true"},n||a),o.a.createElement("span",{className:"sr-only"},t))}return void 0===t&&(t=e),n.displayName=e,n}var f=p("First","\xab"),v=p("Prev","\u2039","Previous"),b=p("Ellipsis","\u2026","More"),E=p("Next","\u203a"),h=p("Last","\xbb"),g=o.a.forwardRef((function(e,a){var t=e.bsPrefix,c=e.className,i=e.children,u=e.size,d=Object(r.a)(e,["bsPrefix","className","children","size"]),m=Object(l.a)(t,"pagination");return o.a.createElement("ul",Object(n.a)({ref:a},d,{className:s()(c,m,u&&m+"-"+u)}),i)}));g.First=f,g.Prev=v,g.Ellipsis=b,g.Item=m,g.Next=E,g.Last=h;a.a=g},180:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),c=t(154),s=t(88),i=t(89),o=t(162),l=t(147),u=t(19),d=t(35),m=t(67),p=t(153),f=t(158),v=t(159);a.default=function(e){var a=e.history,t=e.match,b=Object(u.b)(),E=Object(u.c)((function(e){return e.userReducer})).userInfo,h=Object(u.c)((function(e){return e.productsReducer})),g=h.loading,y=h.products,N=h.errMessage,O=h.removeProductError,j=h.pageNumber,C=h.pages;return Object(n.useEffect)((function(){E&&E.isAdmin?b(Object(v.b)("",t.params.pagenumber)):a.push("/login")}),[b,E,t.params.pagenumber]),r.a.createElement(r.a.Fragment,null,O&&r.a.createElement(p.a,{variant:"danger"},O),r.a.createElement(c.a,{className:"align-items-center"},r.a.createElement(s.a,null,r.a.createElement("h1",null,"Products")),r.a.createElement(s.a,{className:"text-right"},r.a.createElement(i.a,{className:"my-3",onClick:function(){a.push("/create/product")}},r.a.createElement("i",{className:"fas fa-plus"}," ")," Create Product"))),g?r.a.createElement(m.a,null):N?r.a.createElement(p.a,{variant:"danger"},N):r.a.createElement(o.a,{striped:!0,bordered:!0,hover:!0,responsive:!0,className:"table-sm"},r.a.createElement("thead",null,r.a.createElement("th",null,"name"),r.a.createElement("th",null,"Price"),r.a.createElement("th",null,"Category"),r.a.createElement("th",null,"Brand")),r.a.createElement("tbody",null,null===y||void 0===y?void 0:y.map((function(e){return r.a.createElement("tr",{key:e._id},r.a.createElement(d.Link,{to:"/product/".concat(e._id)}," ",r.a.createElement("td",null," ",e.name)),r.a.createElement("td",null,e.price),r.a.createElement("td",null,e.category),r.a.createElement("td",null,e.brand),r.a.createElement("td",null,r.a.createElement(i.a,{className:"btn-sm btn-light",onClick:function(){a.push("/admin/updateproduct/".concat(e._id,"/edit"))}},r.a.createElement("i",{className:"fas fa-edit mx-1"})),r.a.createElement(i.a,{variant:"danger",className:"btn-sm mx-1",onClick:function(){var a;a=e._id,window.confirm("are you sure")&&b(Object(v.c)({id:a}))}},r.a.createElement("i",{className:"fas fa-trash"}))))})))),r.a.createElement(l.a,{style:{width:"100%",display:"flex"}},r.a.createElement(f.a,{style:{alignSelf:"center"},isOwner:!0,pages:C,page:j,keyword:t.params.keyword?t.params.keyword:""})))}}}]);
//# sourceMappingURL=7.9b9c85b6.chunk.js.map