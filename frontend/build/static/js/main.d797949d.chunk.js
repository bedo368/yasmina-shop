(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[1],{100:function(e,t,a){},127:function(e,t,a){"use strict";a.r(t);var r=a(0),n=a.n(r),c=a(16),E=a.n(c),o=(a(99),a(100),a(81)),_=a(133),s=a(82),l=function(){return n.a.createElement("div",null,n.a.createElement(_.a,null,n.a.createElement(s.a,{className:"text-center py-3"},"footer")))},u=a(138),S=a(134),R=a(135),d=a(137),i=a(17),O=a(25),T=a(45),p=a(63),I=a(136),U=a(84),C=function(e){var t=e.history,a=Object(r.useState)(""),c=Object(p.a)(a,2),E=c[0],o=c[1];return n.a.createElement(I.a,{onSubmit:function(e){e.preventDefault(),E.trim()?t.push("/search/".concat(E)):t.push("/"),o("")},className:"m-auto pb-1"},n.a.createElement(I.a.Control,{type:"text",style:{width:"70%",display:"inline-block"},placeholder:"find products...",className:"mr-sm-2 ml-sm-5",value:E,onChange:function(e){o(e.target.value)}}),n.a.createElement(U.a,{type:"submit",variant:"outline-success",className:"p-2"},"search"))},A=a(7),m=function(){var e=Object(O.c)((function(e){return e.userReducer})).userInfo,t=Object(O.b)();return n.a.createElement("div",{className:"bg-dark"},n.a.createElement(u.a,{bg:"dark",className:"py-3",variant:"dark",expand:"lg",collapseOnSelect:!0},n.a.createElement(S.a,null,n.a.createElement(i.LinkContainer,{to:"/"},n.a.createElement(u.a.Brand,null,"shop")),n.a.createElement(u.a.Toggle,{"aria-controls":"basic-navbar-nav"}),n.a.createElement(u.a.Collapse,{id:"basic-navbar-nav"},n.a.createElement(R.a,{className:"ml-auto"},n.a.createElement(i.LinkContainer,{to:"/cart"},n.a.createElement(R.a.Link,null," ",n.a.createElement("i",{className:"fas fa-shopping-cart"})," Cart")),e?n.a.createElement(d.a,{title:e.name,id:"username"},n.a.createElement(i.LinkContainer,{to:"/profile"},n.a.createElement(d.a.Item,null,"profile")),n.a.createElement(i.LinkContainer,{to:"/user/orders"},n.a.createElement(d.a.Item,null,"My orders")),n.a.createElement(d.a.Item,{onClick:function(){t(Object(T.c)())}},"Logout")):n.a.createElement(i.LinkContainer,{to:"/login"},n.a.createElement(R.a.Link,null,"sign in")),(null===e||void 0===e?void 0:e.isAdmin)&&n.a.createElement(d.a,{title:"admin"},n.a.createElement(i.LinkContainer,{to:"/admin/userlist"},n.a.createElement(d.a.Item,null,"Users list")),(null===e||void 0===e?void 0:e.isOwner)&&n.a.createElement(i.LinkContainer,{to:"/owner/productslist"},n.a.createElement(d.a.Item,null," all Products List")),n.a.createElement(i.LinkContainer,{to:"/admin/productslist"},n.a.createElement(d.a.Item,null,"My Products List")),n.a.createElement(i.LinkContainer,{to:"/admin/orderlist"},n.a.createElement(d.a.Item,null,"Order List"))))))),n.a.createElement(S.a,null,n.a.createElement(A.d,{render:function(e){var t=e.history;return n.a.createElement(C,{history:t})}})))},D=a(34),P=a(62),L=Object(r.lazy)((function(){return a.e(5).then(a.bind(null,161))})),g=Object(r.lazy)((function(){return a.e(15).then(a.bind(null,162))})),F=Object(r.lazy)((function(){return a.e(14).then(a.bind(null,163))})),f=Object(r.lazy)((function(){return a.e(12).then(a.bind(null,164))})),b=Object(r.lazy)((function(){return a.e(7).then(a.bind(null,165))})),h=Object(r.lazy)((function(){return a.e(19).then(a.bind(null,166))})),y=Object(r.lazy)((function(){return a.e(6).then(a.bind(null,167))})),j=Object(r.lazy)((function(){return a.e(20).then(a.bind(null,168))})),M=Object(r.lazy)((function(){return a.e(13).then(a.bind(null,169))})),G=Object(r.lazy)((function(){return a.e(16).then(a.bind(null,170))})),N=Object(r.lazy)((function(){return a.e(0).then(a.bind(null,171))})),v=Object(r.lazy)((function(){return a.e(0).then(a.bind(null,171))})),H=Object(r.lazy)((function(){return a.e(18).then(a.bind(null,172))})),k=Object(r.lazy)((function(){return a.e(8).then(a.bind(null,173))})),w=Object(r.lazy)((function(){return Promise.all([a.e(11),a.e(10)]).then(a.bind(null,178))})),V=Object(r.lazy)((function(){return a.e(4).then(a.bind(null,174))})),Y=Object(r.lazy)((function(){return a.e(9).then(a.bind(null,175))})),x=Object(r.lazy)((function(){return a.e(17).then(a.bind(null,176))}));var z=function(e){Object(o.a)(e);var t=Object(O.b)();return console.log("ss"),t(Object(T.a)()),n.a.createElement(D.BrowserRouter,null,n.a.createElement(m,null),n.a.createElement("main",{className:"py-3"},n.a.createElement(S.a,null,n.a.createElement(r.Suspense,{fallback:n.a.createElement(P.a,null)},n.a.createElement(A.d,{path:"/",component:w,exact:!0}),n.a.createElement(A.d,{path:"/page/:pageNumber",component:w,exact:!0}),n.a.createElement(A.d,{path:"/search/:keyword/page/:pageNumber",component:w,exact:!0}),n.a.createElement(A.d,{path:"/search/:keyword",component:w,exact:!0}),n.a.createElement(A.d,{path:"/product/:id",component:V}),n.a.createElement(A.d,{path:"/cart/:id?",component:Y}),n.a.createElement(A.d,{path:"/login",component:x}),n.a.createElement(A.d,{path:"/register",component:G}),n.a.createElement(A.d,{path:"/profile",component:N}),n.a.createElement(A.d,{path:"/user/orders",component:F}),n.a.createElement(A.d,{path:"/admin/orderlist",component:M}),n.a.createElement(A.d,{path:"/shipping",component:v}),n.a.createElement(A.d,{path:"/payment",component:H}),n.a.createElement(A.d,{path:"/placeorder",component:k}),n.a.createElement(A.d,{path:"/order/:id",component:L}),n.a.createElement(A.d,{path:"/admin/userlist",component:g}),n.a.createElement(A.d,{path:"/owner/productslist",component:b,exact:!0}),n.a.createElement(A.d,{path:"/owner/productslist/page/:pagenumber",component:b}),n.a.createElement(A.d,{path:"/admin/productslist",component:y,exact:!0}),n.a.createElement(A.d,{path:"/admin/productslist/page/:pagenumber",component:y,exact:!0}),n.a.createElement(A.d,{path:"/admin/updateproduct/:id",component:j}),n.a.createElement(A.d,{path:"/admin/user/:userid/edit",component:f}),n.a.createElement(A.d,{path:"/create/product",component:h})))),n.a.createElement(l,null))},J=a(22),B=a(89),W=a(90),q=a(3),K=a(28),Q={products:null,loading:!1,errMessage:""},X=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Q,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case K.a.FETCH_PRODUCTS_START:return Object(q.a)(Object(q.a)({},e),{},{loading:!0});case K.a.FETCH_PRODUCTS_SUCCESS:return Object(q.a)(Object(q.a)({},e),{},{loading:!1,products:t.payload.products,errMessage:null,pages:t.payload.pages,pageNumber:t.payload.pageNumber});case K.a.FETCH_PRODUCTS_FAIL:return Object(q.a)(Object(q.a)({},e),{},{loading:!1,errMessage:t.payload,products:[]});case K.a.REMOVE_PRODUCT_SUCCESS:return Object(q.a)(Object(q.a)({},e),{},{products:e.products.filter((function(e){return e._id!==t.payload._id})),removeProductError:null});case"FETCH_MYADMIN_PRODUCTS":return Object(q.a)(Object(q.a)({},e),{},{loading:!1,products:t.payload.products,pages:t.payload.pages,errMessage:null,pageNumber:t.payload.pageNumber});case K.a.REMOVE_PRODUCT_FAIL:return Object(q.a)(Object(q.a)({},e),{},{removeProductError:t.payload});default:return e}},Z=a(27),$={product:{},loading:!1,errMessage:"",createProductState:!1,getState:!1,productUpdated:!1},ee=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:$,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case Z.a.FETCH_PRODUCT_START:return Object(q.a)(Object(q.a)({},e),{},{loading:!0,createProductState:!1,errMessage:""});case Z.a.FETCH_PRODUCT_SUCCESS:return Object(q.a)(Object(q.a)({},e),{},{loading:!1,product:t.payload,errMessage:null,createProductState:!1,getState:!0,productUpdated:!1});case Z.a.CREATE_NEW_PRODUCT:return Object(q.a)(Object(q.a)({},e),{},{createProductState:!0,loading:!1,product:t.payload,errMessage:null,productUpdated:!1});case Z.a.UPDATE_PRODUCT:return Object(q.a)(Object(q.a)({},e),{},{product:t.payload,productUpdated:!0});case Z.a.CLEAR_PRODUCT:return $;case Z.a.FETCH_PRODUCT_FAIL:return Object(q.a)(Object(q.a)({},e),{},{loading:!1,errMessage:t.payload,createProductState:!1,productUpdated:!1});case"CLEAR_ERROR_MASSAGE":return Object(q.a)(Object(q.a)({},e),{},{errMessage:void 0,productUpdated:!1});default:return e}},te=a(31),ae=a(66),re=function(e,t){var a=t.payload._id;return e.cartItems.find((function(e){return e._id===a}))?Object(q.a)(Object(q.a)({},e),{},{cartItems:e.cartItems.map((function(e){return e._id===a?Object(q.a)({},t.payload):e}))}):Object(q.a)(Object(q.a)({},e),{},{cartItems:[].concat(Object(ae.a)(e.cartItems),[t.payload])})},ne={cartItems:localStorage.getItem("cartItems")?JSON.parse(localStorage.getItem("cartItems")):[],shippingAddress:localStorage.getItem("shippingAddress")?JSON.parse(localStorage.getItem("shippingAddress")):null,paymentMethod:localStorage.getItem("paymentMethod")?JSON.parse(localStorage.getItem("paymentMethod")):null},ce=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ne,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case te.a.CART_ADD_ITEM:return re(e,t);case te.a.CART_REMOVE_ITEM:return Object(q.a)(Object(q.a)({},e),{},{cartItems:e.cartItems.filter((function(e){return e._id!==t.payload}))});case te.a.SAVE_SHIPPING_ADDRESS:return Object(q.a)(Object(q.a)({},e),{},{shippingAddress:t.payload});case te.a.SAVE_PAYMENT_METHOD:return Object(q.a)(Object(q.a)({},e),{},{paymentMethod:t.payload});case te.a.EMPTY_CART_ITEMS:return Object(q.a)(Object(q.a)({},e),{},{cartItems:[]});default:return e}},Ee=a(8),oe={userInfo:localStorage.getItem("userInfo")?JSON.parse(localStorage.getItem("userInfo")):{token:null},fetchState:!1,errorMassage:""},_e=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:oe,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case Ee.a.USER_LOGIN_START:return Object(q.a)(Object(q.a)({},e),{},{fetchState:!0});case Ee.a.USER_LOGIN_SUCCESS:return Object(q.a)(Object(q.a)({},e),{},{userInfo:t.payload,errorMassage:"",fetchState:!1});case Ee.a.USER_LOGIN_FAIL:return localStorage.setItem("userInfo",null),{errorMassage:t.payload,fetchState:!1,userInfo:null};case Ee.a.LOGOUT:return{errorMassage:"",fetchState:!1,userInfo:null};case Ee.a.USER_REGISTER_START:return Object(q.a)(Object(q.a)({},e),{},{fetchState:!0});case Ee.a.USER_REGISTER_SUCCESS:return Object(q.a)(Object(q.a)({},e),{},{userInfo:t.payload,errorMassage:"",fetchState:!1});case Ee.a.USER_REGISTER_FAIL:return localStorage.setItem("userInfo",null),{errorMassage:t.payload,fetchState:!1,userInfo:null};case Ee.a.UPDATE_USER_INFO:return Object(q.a)(Object(q.a)({},e),{},{userInfo:Object(q.a)(Object(q.a)({},e.userInfo),t.payload)});default:return e}},se=a(32),le=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{orderDetail:null,orderDetailFetchState:!0},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case se.a.CREATE_ORDER_START:return{fetchOrderState:!0};case se.a.CREATE_ORDER_SUCCESS:return{fetchOrderState:!1,success:!0,orders:t.payload};case se.a.ORDER_DETAIL_START:return{orderDetailFetchState:!0};case se.a.ORDER_DETAIL_SUCCESS:return{orderDetailFetchState:!1,orderDetail:t.payload};case se.a.ORDER_DETAIL_FAIL:return{orderDetailFetchState:!1,orderDetailErrorMassge:t.payload};default:return e}},ue={USER_GET_PROFILE_START:"USER_GET_PROFILE_START",USER_GET_PROFILE_SUCCESS:"USER_GET_PROFILE_SUCCESS",USER_GET_PROFILE_FAIL:"USER_GET_PROFILE_FAIL",USER_UPDATE_PROFILE_FAIL:"USER_UPDATE_PROFILE_FAIL",USER_UPDATE_PROFILE_START:"USER_UPDATE_PROFILE_START",USER_UPDATE_PROFILE_SUCCESS:"USER_UPDATE_PROFILE_SUCCESS",USER_PROFILE_RESET:"USER_PROFILE_RESET"},Se={getUserProlieFetchState:!1,userProfileInfo:{},userProfileErrorMessage:""},Re=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Se,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case ue.USER_GET_PROFILE_START:return Object(q.a)(Object(q.a)({},e),{},{getUserProlieFetchState:!0});case ue.USER_GET_PROFILE_SUCCESS:return{getUserProlieFetchState:!1,userProfileInfo:t.payload,userProfileErrorMessage:null};case ue.USER_GET_PROFILE_FAIL:return localStorage.setItem("userInfo",null),Object(q.a)(Object(q.a)({},e),{},{userProfileErrorMessage:t.payload,userProfileInfo:null});case ue.USER_UPDATE_PROFILE_START:return Object(q.a)(Object(q.a)({},e),{},{getUserProlieFetchState:!0});case ue.USER_UPDATE_PROFILE_SUCCESS:return{getUserProlieFetchState:!1,userProfileInfo:t.payload,userProfileErrorMessage:null};case ue.USER_UPDATE_PROFILE_FAIL:return Object(q.a)(Object(q.a)({},e),{},{userProfileErrorMessage:t.payload,getUserProlieFetchState:!1});case ue.USER_PROFILE_RESET:return Object(q.a)({},Se);default:return e}},de={ORDER_PAY_START:"ORDER_PAY_START",ORDER_PAY_SUCCESS:"ORDER_PAY_SUCCESS",ORDER_PAY_FAIL:"ORDER_PAY_FAIL",ORDER_PAY_RESET:"ORDER_PAY_RESET"},ie=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.payload){case de.ORDER_PAY_START:return{loading:!0};case de.ORDER_PAY_SUCCESS:return{loading:!1,success:!0};case de.ORDER_PAY_FAIL:return{loading:!1,error:t.payload};case de.ORDER_PAY_RESET:return{};default:return e}},Oe=a(37),Te=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{LogedInUserOrdersFetchState:!0},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case Oe.a.GET_LOGED_IN_USER_ORDERS_START:return{LogedInUserOrdersFetchState:!0};case Oe.a.GET_LOGED_IN_USER_ORDERS_SUCCESS:return{LogedInUserOrdersFetchState:!1,ordersList:t.payload};case Oe.a.GET_LOGED_IN_USER_ORDERS_FAIL:return{LogedInUserOrdersFetchState:!1,LogedInUserErrorMessage:t.payload};case Oe.a.REMOVR_ORDER:return Object(q.a)(Object(q.a)({},e),{},{ordersList:e.ordersList.filter((function(e){return String(e._id)!==String(t.payload._id)}))});default:return e}},pe=a(15),Ie={usersFetchState:!0,usersList:[],getUserFetchState:!0},Ue=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ie,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case pe.a.GET_USER_LIST_START:return{usersFetchState:!0};case pe.a.GET_USER_LIST_SUCCESS:return{usersFetchState:!1,usersList:t.payload};case pe.a.GET_USER_LIST_FAIL:return{usersFetchState:!1,usersListErrorMessage:t.payload};case"REMOVE_USER_FROM_DATA":return{usersList:e.usersList.filter((function(e){return e._id!==t.payload}))};case pe.a.REMOVE_USER_FAIL:return Object(q.a)(Object(q.a)({},e),{},{deleteUserErrorMessage:t.payload});case pe.a.GET_USER_PROFILE_START_FOR_ADMIN:return Object(q.a)({},Ie);case pe.a.GET_USER_PROFILE_SUCCESS_FOR_ADMIN:return Object(q.a)(Object(q.a)({},Ie),{},{getUserFetchState:!1,UserForAdmin:t.payload});case pe.a.GET_USER_PROFILE_FAIL_FOR_ADMIN:return Object(q.a)(Object(q.a)({},Ie),{},{UserForAdminError:t.payload,getUserFetchState:!1});case pe.a.UPDATE_PROFILE_START_FOR_ADMIN:return Object(q.a)(Object(q.a)({},Ie),{},{updateUserState:!0});case pe.a.UPDATE_PROFILE_SUCCESS_FOR_ADMIN:return Object(q.a)(Object(q.a)({},Ie),{},{getUserFetchState:!1,UserForAdmin:t.payload,updateUserSuccess:!0,updateUserState:!1});case pe.a.REST_ADMIN:return Ie;default:return e}},Ce=a(54),Ae={products:null,loading:!1,errMessage:""},me=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ae,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case Ce.a.FETCH_TOP_PRODUCTS_START:return Object(q.a)(Object(q.a)({},e),{},{loading:!0});case Ce.a.FETCH_TOP_PRODUCTS_SUCCESS:return Object(q.a)(Object(q.a)({},e),{},{loading:!1,products:t.payload,errMessage:null});case Ce.a.FETCH_TOP_PRODUCTS_FAIL:return Object(q.a)(Object(q.a)({},e),{},{loading:!1,errMessage:t.payload,products:[]});default:return e}},De=Object(J.combineReducers)({productsReducer:X,productReducer:ee,cartReducer:ce,userReducer:_e,userProfileReducer:Re,orderReducer:le,orderPayReducer:ie,getLogedInUserOrdersReducer:Te,adminReducer:Ue,topProductReducer:me}),Pe=[B.a],Le=Object(J.createStore)(De,Object(W.composeWithDevTools)(J.applyMiddleware.apply(void 0,Pe)));E.a.render(n.a.createElement(O.a,{store:Le},n.a.createElement(z,null)),document.getElementById("root"))},15:function(e,t,a){"use strict";t.a={GET_USER_LIST_START:"GET_USER_LIST_START",GET_USER_LIST_SUCCESS:"GET_USER_LIST_SUCCESS",GET_USER_LIST_FAIL:"GET_USER_LIST_FAIL",REST_ADMIN:"REST_ADMIN",REMOVE_USER_FROM_DATA:"REMOVE_USER_FROM_DATA",REMOVE_USER_FAIL:"REMOVE_USER_FAIL",GET_USER_PROFILE_START_FOR_ADMIN:"GET_USER_PROFILE_START_FOR_ADMIN",GET_USER_PROFILE_SUCCESS_FOR_ADMIN:"GET_USER_PROFILE_SUCCESS_FOR_ADMIN",GET_USER_PROFILE_FAIL_FOR_ADMIN:"GET_USER_PROFILE_FAIL_FOR_ADMIN",UPDATE_PROFILE_START_FOR_ADMIN:"UPDATE_PROFILE_START_FOR_ADMIN",UPDATE_PROFILE_SUCCESS_FOR_ADMIN:"UPDATE_PROFILE_SUCCESS_FOR_ADMIN"}},27:function(e,t,a){"use strict";t.a={FETCH_PRODUCT_START:"FETCH_PRODUCT_START",FETCH_PRODUCT_SUCCESS:"FETCH_PRODUCT_SUCCESS",FETCH_PRODUCT_FAIL:"FETCH_PRODUCT_FAIL",CREATE_NEW_PRODUCT:"CREATE_NEW_PRODUCT",UPDATE_PRODUCT:"UPDATE_PRODUCT",CLEAR_PRODUCT:"CLEAR_PRODUCT"}},28:function(e,t,a){"use strict";t.a={FETCH_PRODUCTS_START:"FETCH_PRODUCTS_START",FETCH_PRODUCTS_SUCCESS:"FETCH_PRODUCTS_SUCCESS",FETCH_PRODUCTS_FAIL:"FETCH_PRODUCTS_FAIL",REMOVE_PRODUCT_START:"REMOVE_PRODUCT_START",REMOVE_PRODUCT_SUCCESS:"REMOVE_PRODUCT_SUCCESS",REMOVE_PRODUCT_FAIL:"REMOVE_PRODUCT_FAIL",FETCH_MYADMIN_PRODUCTS:"FETCH_MYADMIN_PRODUCTS"}},31:function(e,t,a){"use strict";t.a={CART_ADD_ITEM:"CART_ADD_ITEM",CART_REMOVE_ITEM:"CART_REMOVE_ITEM",SAVE_SHIPPING_ADDRESS:"SAVE_SHIPPING_ADDRESS",SAVE_PAYMENT_METHOD:"SAVE_PAYMENT_METHOD",EMPTY_CART_ITEMS:"EMPTY_CART_ITEMS"}},32:function(e,t,a){"use strict";t.a={CREATE_ORDER_START:"CREATE_ORDER_START",CREATE_ORDER_SUCCESS:"CREATE_ORDER_SUCCESS",CREATE_ORDER_FAIL:"CREATE_ORDER_FAIL",ORDER_DETAIL_START:"ORDER_DETAIL_START",ORDER_DETAIL_SUCCESS:"ORDER_DETAIL_SUCCESS",ORDER_DETAIL_FAIL:"ORDER_DETAIL_FAIL"}},37:function(e,t,a){"use strict";t.a={GET_LOGED_IN_USER_ORDERS_START:"GET_LOGED_IN_USER_ORDERS_START",GET_LOGED_IN_USER_ORDERS_SUCCESS:"GET_LOGED_IN_USER_ORDERS_SUCCESS",GET_LOGED_IN_USER_ORDERS_FAIL:"GET_LOGED_IN_USER_ORDERS_FAIL",REMOVR_ORDER:"REMOVR_ORDER"}},45:function(e,t,a){"use strict";a.d(t,"b",(function(){return s})),a.d(t,"c",(function(){return l})),a.d(t,"d",(function(){return u})),a.d(t,"a",(function(){return S}));var r=a(26),n=a.n(r),c=a(43),E=a(8),o=a(44),_=a.n(o),s=function(e,t){return function(){var a=Object(c.a)(n.a.mark((function a(r,c){var o,s,l;return n.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,r({type:E.a.USER_LOGIN_START}),a.next=4,_()({method:"POST",url:"/login",data:{email:e,password:t},headers:{"Content-Type":"application/json"}});case 4:o=a.sent,s=o.data,r({type:E.a.USER_LOGIN_SUCCESS,payload:s}),localStorage.setItem("userInfo",JSON.stringify(s)),a.next=15;break;case 10:a.prev=10,a.t0=a.catch(0),l=a.t0.response.data.message?a.t0.response.data.message:"error happend",r({type:E.a.USER_LOGIN_FAIL,payload:l}),localStorage.setItem("userInfo",null);case 15:case"end":return a.stop()}}),a,null,[[0,10]])})));return function(e,t){return a.apply(this,arguments)}}()},l=function(){return function(e){e({type:E.a.LOGOUT}),e({type:"USER_PROFILE_RESET"}),localStorage.setItem("userInfo",null),e({type:"REST_ADMIN"})}},u=function(e,t,a){return function(){var r=Object(c.a)(n.a.mark((function r(c,o){var s,l,u;return n.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,c({type:E.a.USER_REGISTER_START}),r.next=4,_()({method:"POST",url:"/register",data:{email:t,password:a,name:e},headers:{"Content-Type":"application/json"}});case 4:s=r.sent,l=s.data,c({type:E.a.USER_REGISTER_SUCCESS,payload:l}),localStorage.setItem("userInfo",JSON.stringify(l)),r.next=15;break;case 10:r.prev=10,r.t0=r.catch(0),u=r.t0.response.data.message?r.t0.response.data.message:"error happend",c({type:E.a.USER_REGISTER_FAIL,payload:u}),localStorage.setItem("userInfo",null);case 15:case"end":return r.stop()}}),r,null,[[0,10]])})));return function(e,t){return r.apply(this,arguments)}}()},S=function(){return function(){var e=Object(c.a)(n.a.mark((function e(t,a){var r,c;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:c=null===(r=a().userReducer.userInfo)||void 0===r?void 0:r.token,_()({method:"POST",url:"/checktoken",headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(c)}}).then((function(e){t({type:E.a.USER_REGISTER_SUCCESS,payload:e.data})})).catch((function(e){e.response.data.message&&e.response.data.message;t({type:E.a.LOGOUT}),localStorage.setItem("userInfo",null)}));case 2:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}()}},54:function(e,t,a){"use strict";t.a={FETCH_TOP_PRODUCTS_SUCCESS:"FETCH_TOP_PRODUCTS_SUCCESS",FETCH_TOP_PRODUCTS_FAIL:"FETCH_TOP_PRODUCTS_FAIL",FETCH_TOP_PRODUCTS_START:"FETCH_TOP_PRODUCTS_START"}},62:function(e,t,a){"use strict";var r=a(0),n=a.n(r),c=a(128);t.a=function(){return n.a.createElement(c.a,{animation:"border",role:"status",style:{width:"100px",height:"100px",margin:"auto",display:"block"}},n.a.createElement("span",{className:"sr-only"},"Loading..."))}},8:function(e,t,a){"use strict";t.a={USER_LOGIN_START:"USER_LOGIN_START",USER_LOGIN_SUCCESS:"USER_LOGIN_SUCCESS",USER_LOGIN_FAIL:"USER_LOGIN_FAIL",LOGOUT:"LOGOUT",USER_REGISTER_START:"USER_REGISTER_START",USER_REGISTER_SUCCESS:"USER_REGISTER_SUCCESS",USER_REGISTER_FAIL:"USER_REGISTER_FAIL",UPDATE_USER_INFO:"UPDATE_USER_INFO"}},94:function(e,t,a){e.exports=a(127)},99:function(e,t,a){}},[[94,2,3]]]);
//# sourceMappingURL=main.d797949d.chunk.js.map