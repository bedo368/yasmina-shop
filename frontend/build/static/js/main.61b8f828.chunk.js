(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{101:function(e,t,a){},102:function(e,t,a){},103:function(e,t,a){},130:function(e,t,a){"use strict";a.r(t);var r=a(0),n=a.n(r),c=a(16),E=a.n(c),o=(a(101),a(102),a(82)),s=a(94),l=a(57),_=(a(103),function(e){e.history,Object(s.a)(e,["history"]);return n.a.createElement("div",{className:"footer "},n.a.createElement("footer",{className:"page-footer font-small text-light  pt-4"},n.a.createElement("div",{className:"container"},n.a.createElement("ul",{className:"list-unstyled list-inline text-center py-2"},n.a.createElement("li",{className:"list-inline-item"},n.a.createElement("h5",{className:"mb-1"},"Have something for us ")),n.a.createElement("li",{className:"list-inline-item"},n.a.createElement("a",{href:"mailto: abc@example.com"}," ",n.a.createElement("button",{className:" bg-info btn btn-outline-white btn-light"},"Contact us"))))),n.a.createElement("div",{className:"footer-copyright text-center py-3"},"\xa9 2020 Copyright:")))}),u=a(140),S=a(136),R=a(137),i=a(139),d=a(17),O=a(26),T=a(45),p=a(64),I=a(138),U=a(85),m=function(e){var t=e.history,a=Object(r.useState)(""),c=Object(p.a)(a,2),E=c[0],o=c[1];return n.a.createElement(I.a,{onSubmit:function(e){e.preventDefault(),E.trim()?t.push("/search/".concat(E)):t.push("/"),o("")},className:"m-auto pb-1"},n.a.createElement(I.a.Control,{type:"text",style:{width:"70%",display:"inline-block"},placeholder:"find products...",className:"mr-sm-2 ml-sm-5",value:E,onChange:function(e){o(e.target.value)}}),n.a.createElement(U.a,{type:"submit",variant:"outline-success",className:"p-2 px-3"},"search"))},C=a(7),A=function(){var e=Object(O.c)((function(e){return e.userReducer})).userInfo,t=Object(O.b)();return n.a.createElement("div",{className:"bg-dark"},n.a.createElement(u.a,{bg:"dark",className:"pb-3 pt-1",variant:"dark",expand:"lg",collapseOnSelect:!0},n.a.createElement(S.a,null,n.a.createElement(d.LinkContainer,{to:"/"},n.a.createElement(u.a.Brand,null,"shop")),n.a.createElement(u.a.Toggle,{"aria-controls":"basic-navbar-nav"}),n.a.createElement(u.a.Collapse,{id:"basic-navbar-nav"},n.a.createElement(R.a,{className:"ml-auto"},n.a.createElement(d.LinkContainer,{to:"/cart"},n.a.createElement(R.a.Link,null," ",n.a.createElement("i",{className:"fas fa-shopping-cart"})," Cart")),e?n.a.createElement(i.a,{title:e.name,id:"username"},n.a.createElement(d.LinkContainer,{to:"/profile"},n.a.createElement(i.a.Item,null,"profile")),n.a.createElement(d.LinkContainer,{to:"/user/orders"},n.a.createElement(i.a.Item,null,"My orders")),n.a.createElement(i.a.Item,{onClick:function(){t(Object(T.c)())}},"Logout")):n.a.createElement(d.LinkContainer,{to:"/login"},n.a.createElement(R.a.Link,null,"sign in")),(null===e||void 0===e?void 0:e.isAdmin)&&n.a.createElement(i.a,{title:"admin"},n.a.createElement(d.LinkContainer,{to:"/admin/userlist"},n.a.createElement(i.a.Item,null,"Users list")),(null===e||void 0===e?void 0:e.isOwner)&&n.a.createElement(d.LinkContainer,{to:"/owner/productslist"},n.a.createElement(i.a.Item,null," all Products List")),n.a.createElement(d.LinkContainer,{to:"/admin/productslist"},n.a.createElement(i.a.Item,null,"My Products List")),n.a.createElement(d.LinkContainer,{to:"/admin/orderlist"},n.a.createElement(i.a.Item,null,"Order List"))))))),n.a.createElement(S.a,null,n.a.createElement(C.d,{render:function(e){var t=e.history;return n.a.createElement(m,{history:t})}})))},D=a(35),P=Object(r.lazy)((function(){return a.e(4).then(a.bind(null,164))})),f=Object(r.lazy)((function(){return a.e(16).then(a.bind(null,165))})),g=Object(r.lazy)((function(){return a.e(13).then(a.bind(null,166))})),b=Object(r.lazy)((function(){return a.e(10).then(a.bind(null,167))})),h=Object(r.lazy)((function(){return a.e(6).then(a.bind(null,168))})),L=Object(r.lazy)((function(){return a.e(20).then(a.bind(null,169))})),F=Object(r.lazy)((function(){return a.e(5).then(a.bind(null,170))})),y=Object(r.lazy)((function(){return a.e(21).then(a.bind(null,171))})),j=Object(r.lazy)((function(){return a.e(12).then(a.bind(null,172))})),M=Object(r.lazy)((function(){return a.e(14).then(a.bind(null,173))})),N=Object(r.lazy)((function(){return a.e(19).then(a.bind(null,182))})),G=Object(r.lazy)((function(){return a.e(18).then(a.bind(null,174))})),v=Object(r.lazy)((function(){return a.e(17).then(a.bind(null,175))})),H=Object(r.lazy)((function(){return a.e(7).then(a.bind(null,176))})),k=Object(r.lazy)((function(){return Promise.all([a.e(9),a.e(11)]).then(a.bind(null,181))})),w=Object(r.lazy)((function(){return a.e(3).then(a.bind(null,177))})),V=Object(r.lazy)((function(){return a.e(8).then(a.bind(null,178))})),x=Object(r.lazy)((function(){return a.e(15).then(a.bind(null,179))}));var Y=function(e){Object(o.a)(e);var t=Object(O.b)();return console.log("ss"),t(Object(T.a)()),n.a.createElement(D.BrowserRouter,null,n.a.createElement(A,null),n.a.createElement("main",{className:"py-3"},n.a.createElement(S.a,null,n.a.createElement(r.Suspense,{fallback:n.a.createElement(l.a,null)},n.a.createElement(C.d,{path:"/",component:k,exact:!0}),n.a.createElement(C.d,{path:"/page/:pageNumber",component:k,exact:!0}),n.a.createElement(C.d,{path:"/search/:keyword/page/:pageNumber",component:k,exact:!0}),n.a.createElement(C.d,{path:"/search/:keyword",component:k,exact:!0}),n.a.createElement(C.d,{path:"/product/:id",component:w}),n.a.createElement(C.d,{path:"/cart/:id?",component:V}),n.a.createElement(C.d,{path:"/login",component:x}),n.a.createElement(C.d,{path:"/register",component:M}),n.a.createElement(C.d,{path:"/profile",component:N}),n.a.createElement(C.d,{path:"/user/orders",component:g}),n.a.createElement(C.d,{path:"/admin/orderlist",component:j}),n.a.createElement(C.d,{path:"/shipping",component:G}),n.a.createElement(C.d,{path:"/payment",component:v}),n.a.createElement(C.d,{path:"/placeorder",component:H}),n.a.createElement(C.d,{path:"/order/:id",component:P}),n.a.createElement(C.d,{path:"/admin/userlist",component:f}),n.a.createElement(C.d,{path:"/owner/productslist",component:h,exact:!0}),n.a.createElement(C.d,{path:"/owner/productslist/page/:pagenumber",component:h}),n.a.createElement(C.d,{path:"/admin/productslist",component:F,exact:!0}),n.a.createElement(C.d,{path:"/admin/productslist/page/:pagenumber",component:F,exact:!0}),n.a.createElement(C.d,{path:"/admin/updateproduct/:id",component:y}),n.a.createElement(C.d,{path:"/admin/user/:userid/edit",component:b}),n.a.createElement(C.d,{path:"/create/product",component:L})))),n.a.createElement(_,null))},z=a(22),J=a(90),B=a(91),W=a(3),q=a(29),K={products:null,loading:!1,errMessage:""},Q=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:K,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case q.a.FETCH_PRODUCTS_START:return Object(W.a)(Object(W.a)({},e),{},{loading:!0});case q.a.FETCH_PRODUCTS_SUCCESS:return Object(W.a)(Object(W.a)({},e),{},{loading:!1,products:t.payload.products,errMessage:null,pages:t.payload.pages,pageNumber:t.payload.pageNumber});case q.a.FETCH_PRODUCTS_FAIL:return Object(W.a)(Object(W.a)({},e),{},{loading:!1,errMessage:t.payload,products:[]});case q.a.REMOVE_PRODUCT_SUCCESS:return Object(W.a)(Object(W.a)({},e),{},{products:e.products.filter((function(e){return e._id!==t.payload._id})),removeProductError:null});case"FETCH_MYADMIN_PRODUCTS":return Object(W.a)(Object(W.a)({},e),{},{loading:!1,products:t.payload.products,pages:t.payload.pages,errMessage:null,pageNumber:t.payload.pageNumber});case q.a.REMOVE_PRODUCT_FAIL:return Object(W.a)(Object(W.a)({},e),{},{removeProductError:t.payload});default:return e}},X=a(28),Z={product:{},loading:!1,errMessage:"",createProductState:!1,getState:!1,productUpdated:!1},$=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Z,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case X.a.FETCH_PRODUCT_START:return Object(W.a)(Object(W.a)({},e),{},{loading:!0,createProductState:!1,errMessage:""});case X.a.FETCH_PRODUCT_SUCCESS:return Object(W.a)(Object(W.a)({},e),{},{loading:!1,product:t.payload,errMessage:null,createProductState:!1,getState:!0,productUpdated:!1});case X.a.CREATE_NEW_PRODUCT:return Object(W.a)(Object(W.a)({},e),{},{createProductState:!0,loading:!1,product:t.payload,errMessage:null,productUpdated:!1});case X.a.UPDATE_PRODUCT:return Object(W.a)(Object(W.a)({},e),{},{product:t.payload,productUpdated:!0});case X.a.CLEAR_PRODUCT:return Z;case X.a.FETCH_PRODUCT_FAIL:return Object(W.a)(Object(W.a)({},e),{},{loading:!1,errMessage:t.payload,createProductState:!1,productUpdated:!1});case"CLEAR_ERROR_MASSAGE":return Object(W.a)(Object(W.a)({},e),{},{errMessage:void 0,productUpdated:!1});default:return e}},ee=a(32),te=a(67),ae=function(e,t){var a=t.payload._id;return e.cartItems.find((function(e){return e._id===a}))?Object(W.a)(Object(W.a)({},e),{},{cartItems:e.cartItems.map((function(e){return e._id===a?Object(W.a)({},t.payload):e}))}):Object(W.a)(Object(W.a)({},e),{},{cartItems:[].concat(Object(te.a)(e.cartItems),[t.payload])})},re={cartItems:localStorage.getItem("cartItems")?JSON.parse(localStorage.getItem("cartItems")):[],shippingAddress:localStorage.getItem("shippingAddress")?JSON.parse(localStorage.getItem("shippingAddress")):null,paymentMethod:localStorage.getItem("paymentMethod")?JSON.parse(localStorage.getItem("paymentMethod")):null},ne=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:re,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case ee.a.CART_ADD_ITEM:return ae(e,t);case ee.a.CART_REMOVE_ITEM:return Object(W.a)(Object(W.a)({},e),{},{cartItems:e.cartItems.filter((function(e){return e._id!==t.payload}))});case ee.a.SAVE_SHIPPING_ADDRESS:return Object(W.a)(Object(W.a)({},e),{},{shippingAddress:t.payload});case ee.a.SAVE_PAYMENT_METHOD:return Object(W.a)(Object(W.a)({},e),{},{paymentMethod:t.payload});case ee.a.EMPTY_CART_ITEMS:return Object(W.a)(Object(W.a)({},e),{},{cartItems:[]});default:return e}},ce=a(8),Ee={userInfo:localStorage.getItem("userInfo")?JSON.parse(localStorage.getItem("userInfo")):{token:null},fetchState:!1,errorMassage:""},oe=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ee,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case ce.a.USER_LOGIN_START:return Object(W.a)(Object(W.a)({},e),{},{fetchState:!0});case ce.a.USER_LOGIN_SUCCESS:return Object(W.a)(Object(W.a)({},e),{},{userInfo:t.payload,errorMassage:"",fetchState:!1});case ce.a.USER_LOGIN_FAIL:return localStorage.setItem("userInfo",null),{errorMassage:t.payload,fetchState:!1,userInfo:null};case ce.a.LOGOUT:return{errorMassage:"",fetchState:!1,userInfo:null};case ce.a.USER_REGISTER_START:return Object(W.a)(Object(W.a)({},e),{},{fetchState:!0});case ce.a.USER_REGISTER_SUCCESS:return Object(W.a)(Object(W.a)({},e),{},{userInfo:t.payload,errorMassage:"",fetchState:!1});case ce.a.USER_REGISTER_FAIL:return localStorage.setItem("userInfo",null),{errorMassage:t.payload,fetchState:!1,userInfo:null};case ce.a.UPDATE_USER_INFO:return Object(W.a)(Object(W.a)({},e),{},{userInfo:Object(W.a)(Object(W.a)({},e.userInfo),t.payload)});default:return e}},se=a(33),le=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{orderDetail:null,orderDetailFetchState:!0},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case se.a.CREATE_ORDER_START:return{fetchOrderState:!0};case se.a.CREATE_ORDER_SUCCESS:return{fetchOrderState:!1,success:!0,orders:t.payload};case se.a.ORDER_DETAIL_START:return{orderDetailFetchState:!0};case se.a.ORDER_DETAIL_SUCCESS:return{orderDetailFetchState:!1,orderDetail:t.payload};case se.a.ORDER_DETAIL_FAIL:return{orderDetailFetchState:!1,orderDetailErrorMassge:t.payload};default:return e}},_e=a(24),ue={getUserProlieFetchState:!1,userProfileInfo:{},userProfileErrorMessage:""},Se=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ue,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case _e.a.USER_GET_PROFILE_START:return Object(W.a)(Object(W.a)({},e),{},{getUserProlieFetchState:!0});case _e.a.USER_GET_PROFILE_SUCCESS:return{getUserProlieFetchState:!1,userProfileInfo:t.payload,userProfileErrorMessage:null};case _e.a.USER_GET_PROFILE_FAIL:return localStorage.setItem("userInfo",null),Object(W.a)(Object(W.a)({},e),{},{userProfileErrorMessage:t.payload,userProfileInfo:null});case _e.a.USER_UPDATE_PROFILE_START:return Object(W.a)(Object(W.a)({},e),{},{getUserProlieFetchState:!0});case _e.a.USER_UPDATE_PROFILE_SUCCESS:return{getUserProlieFetchState:!1,userProfileInfo:t.payload,userProfileErrorMessage:null};case _e.a.USER_UPDATE_PROFILE_FAIL:return Object(W.a)(Object(W.a)({},e),{},{userProfileErrorMessage:t.payload,getUserProlieFetchState:!1});case _e.a.USER_PROFILE_RESET:return Object(W.a)({},ue);default:return e}},Re={ORDER_PAY_START:"ORDER_PAY_START",ORDER_PAY_SUCCESS:"ORDER_PAY_SUCCESS",ORDER_PAY_FAIL:"ORDER_PAY_FAIL",ORDER_PAY_RESET:"ORDER_PAY_RESET"},ie=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.payload){case Re.ORDER_PAY_START:return{loading:!0};case Re.ORDER_PAY_SUCCESS:return{loading:!1,success:!0};case Re.ORDER_PAY_FAIL:return{loading:!1,error:t.payload};case Re.ORDER_PAY_RESET:return{};default:return e}},de=a(38),Oe=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{LogedInUserOrdersFetchState:!0},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case de.a.GET_LOGED_IN_USER_ORDERS_START:return{LogedInUserOrdersFetchState:!0};case de.a.GET_LOGED_IN_USER_ORDERS_SUCCESS:return{LogedInUserOrdersFetchState:!1,ordersList:t.payload};case de.a.GET_LOGED_IN_USER_ORDERS_FAIL:return{LogedInUserOrdersFetchState:!1,LogedInUserErrorMessage:t.payload};case de.a.REMOVR_ORDER:return Object(W.a)(Object(W.a)({},e),{},{ordersList:e.ordersList.filter((function(e){return String(e._id)!==String(t.payload._id)}))});default:return e}},Te=a(15),pe={usersFetchState:!0,usersList:[],getUserFetchState:!0},Ie=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:pe,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case Te.a.GET_USER_LIST_START:return{usersFetchState:!0};case Te.a.GET_USER_LIST_SUCCESS:return{usersFetchState:!1,usersList:t.payload};case Te.a.GET_USER_LIST_FAIL:return{usersFetchState:!1,usersListErrorMessage:t.payload};case"REMOVE_USER_FROM_DATA":return{usersList:e.usersList.filter((function(e){return e._id!==t.payload}))};case Te.a.REMOVE_USER_FAIL:return Object(W.a)(Object(W.a)({},e),{},{deleteUserErrorMessage:t.payload});case Te.a.GET_USER_PROFILE_START_FOR_ADMIN:return Object(W.a)({},pe);case Te.a.GET_USER_PROFILE_SUCCESS_FOR_ADMIN:return Object(W.a)(Object(W.a)({},pe),{},{getUserFetchState:!1,UserForAdmin:t.payload});case Te.a.GET_USER_PROFILE_FAIL_FOR_ADMIN:return Object(W.a)(Object(W.a)({},pe),{},{UserForAdminError:t.payload,getUserFetchState:!1});case Te.a.UPDATE_PROFILE_START_FOR_ADMIN:return Object(W.a)(Object(W.a)({},pe),{},{updateUserState:!0});case Te.a.UPDATE_PROFILE_SUCCESS_FOR_ADMIN:return Object(W.a)(Object(W.a)({},pe),{},{getUserFetchState:!1,UserForAdmin:t.payload,updateUserSuccess:!0,updateUserState:!1});case Te.a.REST_ADMIN:return pe;default:return e}},Ue=a(54),me={products:null,loading:!1,errMessage:""},Ce=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:me,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case Ue.a.FETCH_TOP_PRODUCTS_START:return Object(W.a)(Object(W.a)({},e),{},{loading:!0});case Ue.a.FETCH_TOP_PRODUCTS_SUCCESS:return Object(W.a)(Object(W.a)({},e),{},{loading:!1,products:t.payload,errMessage:null});case Ue.a.FETCH_TOP_PRODUCTS_FAIL:return Object(W.a)(Object(W.a)({},e),{},{loading:!1,errMessage:t.payload,products:[]});default:return e}},Ae=Object(z.combineReducers)({productsReducer:Q,productReducer:$,cartReducer:ne,userReducer:oe,userProfileReducer:Se,orderReducer:le,orderPayReducer:ie,getLogedInUserOrdersReducer:Oe,adminReducer:Ie,topProductReducer:Ce}),De=[J.a],Pe=Object(z.createStore)(Ae,Object(B.composeWithDevTools)(z.applyMiddleware.apply(void 0,De)));E.a.render(n.a.createElement(O.a,{store:Pe},n.a.createElement(Y,null)),document.getElementById("root"))},15:function(e,t,a){"use strict";t.a={GET_USER_LIST_START:"GET_USER_LIST_START",GET_USER_LIST_SUCCESS:"GET_USER_LIST_SUCCESS",GET_USER_LIST_FAIL:"GET_USER_LIST_FAIL",REST_ADMIN:"REST_ADMIN",REMOVE_USER_FROM_DATA:"REMOVE_USER_FROM_DATA",REMOVE_USER_FAIL:"REMOVE_USER_FAIL",GET_USER_PROFILE_START_FOR_ADMIN:"GET_USER_PROFILE_START_FOR_ADMIN",GET_USER_PROFILE_SUCCESS_FOR_ADMIN:"GET_USER_PROFILE_SUCCESS_FOR_ADMIN",GET_USER_PROFILE_FAIL_FOR_ADMIN:"GET_USER_PROFILE_FAIL_FOR_ADMIN",UPDATE_PROFILE_START_FOR_ADMIN:"UPDATE_PROFILE_START_FOR_ADMIN",UPDATE_PROFILE_SUCCESS_FOR_ADMIN:"UPDATE_PROFILE_SUCCESS_FOR_ADMIN"}},24:function(e,t,a){"use strict";t.a={USER_GET_PROFILE_START:"USER_GET_PROFILE_START",USER_GET_PROFILE_SUCCESS:"USER_GET_PROFILE_SUCCESS",USER_GET_PROFILE_FAIL:"USER_GET_PROFILE_FAIL",USER_UPDATE_PROFILE_FAIL:"USER_UPDATE_PROFILE_FAIL",USER_UPDATE_PROFILE_START:"USER_UPDATE_PROFILE_START",USER_UPDATE_PROFILE_SUCCESS:"USER_UPDATE_PROFILE_SUCCESS",USER_PROFILE_RESET:"USER_PROFILE_RESET"}},28:function(e,t,a){"use strict";t.a={FETCH_PRODUCT_START:"FETCH_PRODUCT_START",FETCH_PRODUCT_SUCCESS:"FETCH_PRODUCT_SUCCESS",FETCH_PRODUCT_FAIL:"FETCH_PRODUCT_FAIL",CREATE_NEW_PRODUCT:"CREATE_NEW_PRODUCT",UPDATE_PRODUCT:"UPDATE_PRODUCT",CLEAR_PRODUCT:"CLEAR_PRODUCT"}},29:function(e,t,a){"use strict";t.a={FETCH_PRODUCTS_START:"FETCH_PRODUCTS_START",FETCH_PRODUCTS_SUCCESS:"FETCH_PRODUCTS_SUCCESS",FETCH_PRODUCTS_FAIL:"FETCH_PRODUCTS_FAIL",REMOVE_PRODUCT_START:"REMOVE_PRODUCT_START",REMOVE_PRODUCT_SUCCESS:"REMOVE_PRODUCT_SUCCESS",REMOVE_PRODUCT_FAIL:"REMOVE_PRODUCT_FAIL",FETCH_MYADMIN_PRODUCTS:"FETCH_MYADMIN_PRODUCTS"}},32:function(e,t,a){"use strict";t.a={CART_ADD_ITEM:"CART_ADD_ITEM",CART_REMOVE_ITEM:"CART_REMOVE_ITEM",SAVE_SHIPPING_ADDRESS:"SAVE_SHIPPING_ADDRESS",SAVE_PAYMENT_METHOD:"SAVE_PAYMENT_METHOD",EMPTY_CART_ITEMS:"EMPTY_CART_ITEMS"}},33:function(e,t,a){"use strict";t.a={CREATE_ORDER_START:"CREATE_ORDER_START",CREATE_ORDER_SUCCESS:"CREATE_ORDER_SUCCESS",CREATE_ORDER_FAIL:"CREATE_ORDER_FAIL",ORDER_DETAIL_START:"ORDER_DETAIL_START",ORDER_DETAIL_SUCCESS:"ORDER_DETAIL_SUCCESS",ORDER_DETAIL_FAIL:"ORDER_DETAIL_FAIL"}},38:function(e,t,a){"use strict";t.a={GET_LOGED_IN_USER_ORDERS_START:"GET_LOGED_IN_USER_ORDERS_START",GET_LOGED_IN_USER_ORDERS_SUCCESS:"GET_LOGED_IN_USER_ORDERS_SUCCESS",GET_LOGED_IN_USER_ORDERS_FAIL:"GET_LOGED_IN_USER_ORDERS_FAIL",REMOVR_ORDER:"REMOVR_ORDER"}},45:function(e,t,a){"use strict";a.d(t,"b",(function(){return l})),a.d(t,"c",(function(){return _})),a.d(t,"d",(function(){return u})),a.d(t,"a",(function(){return S}));var r=a(27),n=a.n(r),c=a(43),E=a(8),o=a(44),s=a.n(o),l=function(e,t){return function(){var a=Object(c.a)(n.a.mark((function a(r,c){var o,l,_;return n.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,r({type:E.a.USER_LOGIN_START}),a.next=4,s()({method:"POST",url:"/login",data:{email:e,password:t},headers:{"Content-Type":"application/json"}});case 4:o=a.sent,l=o.data,r({type:E.a.USER_LOGIN_SUCCESS,payload:l}),localStorage.setItem("userInfo",JSON.stringify(l)),a.next=15;break;case 10:a.prev=10,a.t0=a.catch(0),_=a.t0.response.data.message?a.t0.response.data.message:"error happend",r({type:E.a.USER_LOGIN_FAIL,payload:_}),localStorage.setItem("userInfo",null);case 15:case"end":return a.stop()}}),a,null,[[0,10]])})));return function(e,t){return a.apply(this,arguments)}}()},_=function(){return function(e){e({type:E.a.LOGOUT}),e({type:"USER_PROFILE_RESET"}),localStorage.setItem("userInfo",null),e({type:"REST_ADMIN"})}},u=function(e,t,a){return function(){var r=Object(c.a)(n.a.mark((function r(c,o){var l,_,u;return n.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,c({type:E.a.USER_REGISTER_START}),r.next=4,s()({method:"POST",url:"/register",data:{email:t,password:a,name:e},headers:{"Content-Type":"application/json"}});case 4:l=r.sent,_=l.data,c({type:E.a.USER_REGISTER_SUCCESS,payload:_}),localStorage.setItem("userInfo",JSON.stringify(_)),r.next=15;break;case 10:r.prev=10,r.t0=r.catch(0),u=r.t0.response.data.message?r.t0.response.data.message:"error happend",c({type:E.a.USER_REGISTER_FAIL,payload:u}),localStorage.setItem("userInfo",null);case 15:case"end":return r.stop()}}),r,null,[[0,10]])})));return function(e,t){return r.apply(this,arguments)}}()},S=function(){return function(){var e=Object(c.a)(n.a.mark((function e(t,a){var r,c;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:c=null===(r=a().userReducer.userInfo)||void 0===r?void 0:r.token,s()({method:"POST",url:"/checktoken",headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(c)}}).then((function(e){t({type:E.a.USER_REGISTER_SUCCESS,payload:e.data})})).catch((function(e){e.response.data.message&&e.response.data.message;t({type:E.a.LOGOUT}),localStorage.setItem("userInfo",null)}));case 2:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}()}},54:function(e,t,a){"use strict";t.a={FETCH_TOP_PRODUCTS_SUCCESS:"FETCH_TOP_PRODUCTS_SUCCESS",FETCH_TOP_PRODUCTS_FAIL:"FETCH_TOP_PRODUCTS_FAIL",FETCH_TOP_PRODUCTS_START:"FETCH_TOP_PRODUCTS_START"}},57:function(e,t,a){"use strict";var r=a(0),n=a.n(r),c=a(131);t.a=function(){return n.a.createElement(c.a,{animation:"border",role:"status",style:{width:"100px",height:"100px",margin:"auto",display:"block"}},n.a.createElement("span",{className:"sr-only"},"Loading..."))}},8:function(e,t,a){"use strict";t.a={USER_LOGIN_START:"USER_LOGIN_START",USER_LOGIN_SUCCESS:"USER_LOGIN_SUCCESS",USER_LOGIN_FAIL:"USER_LOGIN_FAIL",LOGOUT:"LOGOUT",USER_REGISTER_START:"USER_REGISTER_START",USER_REGISTER_SUCCESS:"USER_REGISTER_SUCCESS",USER_REGISTER_FAIL:"USER_REGISTER_FAIL",UPDATE_USER_INFO:"UPDATE_USER_INFO"}},96:function(e,t,a){e.exports=a(130)}},[[96,1,2]]]);
//# sourceMappingURL=main.61b8f828.chunk.js.map