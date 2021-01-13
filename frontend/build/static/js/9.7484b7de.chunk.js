(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[9],{150:function(e,n,a){"use strict";var t=a(1),r=a(0),i=a.n(r),o=a(4),s=a.n(o);n.a=function(e){return i.a.forwardRef((function(n,a){return i.a.createElement("div",Object(t.a)({},n,{ref:a,className:s()(n.className,e)}))}))}},151:function(e,n,a){"use strict";var t=a(0),r=a.n(t),i=a(153),o=function(e){var n=e.variant,a=e.children;return r.a.createElement(i.a,{variant:n},a)};o.defaultProps={variant:"info"},n.a=o},152:function(e,n,a){"use strict";var t=a(1),r=a(2),i=a(4),o=a.n(i),s=a(0),l=a.n(s),d=a(5),c=["xl","lg","md","sm","xs"],u=l.a.forwardRef((function(e,n){var a=e.bsPrefix,i=e.className,s=e.noGutters,u=e.as,m=void 0===u?"div":u,p=Object(r.a)(e,["bsPrefix","className","noGutters","as"]),v=Object(d.a)(a,"row"),f=v+"-cols",E=[];return c.forEach((function(e){var n,a=p[e];delete p[e];var t="xs"!==e?"-"+e:"";null!=(n=null!=a&&"object"===typeof a?a.cols:a)&&E.push(""+f+t+"-"+n)})),l.a.createElement(m,Object(t.a)({ref:n},p,{className:o.a.apply(void 0,[i,v,s&&"no-gutters"].concat(E))}))}));u.displayName="Row",u.defaultProps={noGutters:!1},n.a=u},153:function(e,n,a){"use strict";var t,r=a(1),i=a(2),o=a(4),s=a.n(o),l=a(0),d=a.n(l),c=a(22),u=a(11),m=a(5),p=a(64),v=a(31),f=a(65),E=((t={})[v.b]="show",t[v.a]="show",t),b=d.a.forwardRef((function(e,n){var a=e.className,t=e.children,o=Object(i.a)(e,["className","children"]),c=Object(l.useCallback)((function(e){Object(f.a)(e),o.onEnter&&o.onEnter(e)}),[o]);return d.a.createElement(v.e,Object(r.a)({ref:n,addEndListener:p.a},o,{onEnter:c}),(function(e,n){return d.a.cloneElement(t,Object(r.a)({},n,{className:s()("fade",a,t.props.className,E[e])}))}))}));b.defaultProps={in:!1,timeout:300,mountOnEnter:!1,unmountOnExit:!1,appear:!1},b.displayName="Fade";var y=b,h=a(6),O=a.n(h),A={label:O.a.string.isRequired,onClick:O.a.func},_=d.a.forwardRef((function(e,n){var a=e.label,t=e.onClick,o=e.className,l=Object(i.a)(e,["label","onClick","className"]);return d.a.createElement("button",Object(r.a)({ref:n,type:"button",className:s()("close",o),onClick:t},l),d.a.createElement("span",{"aria-hidden":"true"},"\xd7"),d.a.createElement("span",{className:"sr-only"},a))}));_.displayName="CloseButton",_.propTypes=A,_.defaultProps={label:"Close"};var j=_,S=a(150),g=a(21),w=a(30),R=Object(S.a)("h4");R.displayName="DivStyledAsH4";var I=Object(g.a)("alert-heading",{Component:R}),U=Object(g.a)("alert-link",{Component:w.a}),P={show:!0,transition:y,closeLabel:"Close alert"},F=d.a.forwardRef((function(e,n){var a=Object(c.a)(e,{show:"onClose"}),t=a.bsPrefix,o=a.show,l=a.closeLabel,p=a.className,v=a.children,f=a.variant,E=a.onClose,b=a.dismissible,h=a.transition,O=Object(i.a)(a,["bsPrefix","show","closeLabel","className","children","variant","onClose","dismissible","transition"]),A=Object(m.a)(t,"alert"),_=Object(u.a)((function(e){E&&E(!1,e)})),S=!0===h?y:h,g=d.a.createElement("div",Object(r.a)({role:"alert"},S?O:void 0,{ref:n,className:s()(p,A,f&&A+"-"+f,b&&A+"-dismissible")}),b&&d.a.createElement(j,{onClick:_,label:l}),v);return S?d.a.createElement(S,Object(r.a)({unmountOnExit:!0},O,{ref:void 0,in:o}),g):o?g:null}));F.displayName="Alert",F.defaultProps=P,F.Link=U,F.Heading=I;n.a=F},154:function(e,n,a){"use strict";var t=a(0),r=a.n(t),i=a(145),o=a(152),s=a(87);n.a=function(e){var n=e.children;return r.a.createElement(i.a,null,r.a.createElement(o.a,{className:"justify-content-md-center"},r.a.createElement(s.a,{xs:12,md:6},n)))}},163:function(e,n,a){"use strict";a.d(n,"b",(function(){return d})),a.d(n,"c",(function(){return c})),a.d(n,"a",(function(){return u})),a.d(n,"d",(function(){return m}));var t=a(27),r=a.n(t),i=a(43),o=a(44),s=a.n(o),l=a(16),d=function(){return function(){var e=Object(i.a)(r.a.mark((function e(n,a){var t,i,o,d;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t=a().userReducer.userInfo.token,n({type:l.a.GET_USER_LIST_START}),"\n          query{\n            getAllUsersForAdmin{\n                  _id\n                  name\n                  email\n                  isAdmin\n                  isOwner\n              }\n          }\n        ",e.next=6,s()({method:"POST",url:"/graphql",data:{query:"\n          query{\n            getAllUsersForAdmin{\n                  _id\n                  name\n                  email\n                  isAdmin\n                  isOwner\n              }\n          }\n        "},headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(t)}});case 6:i=e.sent,o=i.data,n({type:l.a.GET_USER_LIST_SUCCESS,payload:o.data.getAllUsersForAdmin}),e.next=15;break;case 11:e.prev=11,e.t0=e.catch(0),d=e.t0.response.data.errors?e.t0.response.data.errors[0].message:e.t0.response.data,n({type:l.a.GET_USER_LIST_FAIL,payload:d});case 15:case"end":return e.stop()}}),e,null,[[0,11]])})));return function(n,a){return e.apply(this,arguments)}}()},c=function(e){return function(){var n=Object(i.a)(r.a.mark((function n(a,t){var i,o,d,c,u,m,p,v;return r.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,i=t().userReducer.userInfo.token,"\n          mutation removeUserById($id:String!){\n            removeUserById(id :$id){\n                  _id\n                  \n               \n              }\n          }\n        ",n.next=5,s.a.post("/graphql",{query:"\n          mutation removeUserById($id:String!){\n            removeUserById(id :$id){\n                  _id\n                  \n               \n              }\n          }\n        ",variables:{id:e}},{headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(i)}});case 5:o=n.sent,d=o.data,a({type:l.a.REMOVE_USER_FROM_DATA,payload:d.data.removeUserById._id}),n.next=14;break;case 10:n.prev=10,n.t0=n.catch(0),v=(null===n.t0||void 0===n.t0||null===(c=n.t0.response)||void 0===c?void 0:c.data.errors)?null===n.t0||void 0===n.t0||null===(u=n.t0.response)||void 0===u||null===(m=u.data)||void 0===m?void 0:m.errors[0].message:null===n.t0||void 0===n.t0||null===(p=n.t0.response)||void 0===p?void 0:p.data,a({type:l.a.REMOVE_USER_FAIL,payload:v});case 14:case"end":return n.stop()}}),n,null,[[0,10]])})));return function(e,a){return n.apply(this,arguments)}}()},u=function(e){return function(){var n=Object(i.a)(r.a.mark((function n(a,t){var i,o,d,c,u,m,p,v;return r.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,a({type:l.a.GET_USER_PROFILE_START_FOR_ADMIN}),i=t().userReducer.userInfo.token,"\n          query getUserByIdForAdmin($id:String!){\n            getUserByIdForAdmin(id :$id){\n                  _id\n                  name\n                  email\n                  isAdmin\n                  ordersList{\n                    _id\n                  }\n              }\n          }\n        ",n.next=6,s.a.post("/graphql",{query:"\n          query getUserByIdForAdmin($id:String!){\n            getUserByIdForAdmin(id :$id){\n                  _id\n                  name\n                  email\n                  isAdmin\n                  ordersList{\n                    _id\n                  }\n              }\n          }\n        ",variables:{id:e}},{headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(i)}});case 6:o=n.sent,d=o.data,a({type:l.a.GET_USER_PROFILE_SUCCESS_FOR_ADMIN,payload:d.data.getUserByIdForAdmin}),n.next=15;break;case 11:n.prev=11,n.t0=n.catch(0),v=(null===n.t0||void 0===n.t0||null===(c=n.t0.response)||void 0===c?void 0:c.data.errors)?null===n.t0||void 0===n.t0||null===(u=n.t0.response)||void 0===u||null===(m=u.data)||void 0===m?void 0:m.errors[0].message:null===n.t0||void 0===n.t0||null===(p=n.t0.response)||void 0===p?void 0:p.data,a({type:l.a.GET_USER_PROFILE_FAIL_FOR_ADMIN,payload:v});case 15:case"end":return n.stop()}}),n,null,[[0,11]])})));return function(e,a){return n.apply(this,arguments)}}()},m=function(e){var n=e.id,a=e.adminPassword,t=e.isAdmin,o=e.name,d=e.email;return function(){var e=Object(i.a)(r.a.mark((function e(i,c){var u,m,p,v,f,E,b,y;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,i({type:l.a.UPDATE_PROFILE_START_FOR_ADMIN}),u=c().userReducer.userInfo.token,"\n          query updateUserProfileForAdmin($id:String! , $name:String , $email:String , $adminPassword:String! , $isAdmin: Boolean! ){\n            updateUserProfileForAdmin(id :$id name:$name , email:$email , adminPassword:$adminPassword , isAdmin: $isAdmin){\n                  _id\n                  name\n                  email\n                  isAdmin\n                  ordersList{\n                    _id\n                  }\n              }\n          }\n        ",e.next=6,s.a.post("/graphql",{query:"\n          query updateUserProfileForAdmin($id:String! , $name:String , $email:String , $adminPassword:String! , $isAdmin: Boolean! ){\n            updateUserProfileForAdmin(id :$id name:$name , email:$email , adminPassword:$adminPassword , isAdmin: $isAdmin){\n                  _id\n                  name\n                  email\n                  isAdmin\n                  ordersList{\n                    _id\n                  }\n              }\n          }\n        ",variables:{id:n,adminPassword:a,isAdmin:t,name:o,email:d}},{headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(u)}});case 6:m=e.sent,p=m.data,i({type:l.a.UPDATE_PROFILE_SUCCESS_FOR_ADMIN,payload:p.data.updateUserProfileForAdmin}),e.next=15;break;case 11:e.prev=11,e.t0=e.catch(0),y=(null===e.t0||void 0===e.t0||null===(v=e.t0.response)||void 0===v?void 0:v.data.errors)?null===e.t0||void 0===e.t0||null===(f=e.t0.response)||void 0===f||null===(E=f.data)||void 0===E?void 0:E.errors[0].message:null===e.t0||void 0===e.t0||null===(b=e.t0.response)||void 0===b?void 0:b.data,i({type:l.a.GET_USER_PROFILE_FAIL_FOR_ADMIN,payload:y});case 15:case"end":return e.stop()}}),e,null,[[0,11]])})));return function(n,a){return e.apply(this,arguments)}}()}},177:function(e,n,a){"use strict";a.r(n);var t=a(68),r=a(3),i=a(67),o=a(0),s=a.n(o),l=a(152),d=a(87),c=a(147),u=a(88),m=a(19),p=a(151),v=a(66),f=a(163),E=a(35),b=a(154);n.default=function(e){var n=e.match,a=e.history,y=Object(m.b)(),h=Object(m.c)((function(e){return e.adminReducer})),O=h.UserForAdminError,A=h.getUserFetchState,_=h.UserForAdmin,j=h.updateUserState,S=h.updateUserSuccess,g=Object(o.useState)({email:"",name:"",adminPassword:""}),w=Object(i.a)(g,2),R=w[0],I=w[1],U=Object(o.useState)(!1),P=Object(i.a)(U,2),F=P[0],C=P[1],N=R.email,k=R.name,$=R.adminPassword,L=function(e){var n=e.target,a=n.name,i=n.value;I((function(e){return Object(r.a)(Object(r.a)({},e),{},Object(t.a)({},a,i))}))};return Object(o.useEffect)((function(){(null===_||void 0===_?void 0:_.name)||j?(I((function(e){return Object(r.a)(Object(r.a)({},e),{},{email:null===_||void 0===_?void 0:_.email,name:null===_||void 0===_?void 0:_.name})})),C(null===_||void 0===_?void 0:_.isAdmin)):y(Object(f.a)(n.params.userid))}),[_,y]),Object(o.useEffect)((function(){S&&a.push("/admin/userlist"),I((function(e){return Object(r.a)(Object(r.a)({},e),{},{email:null===_||void 0===_?void 0:_.email,name:null===_||void 0===_?void 0:_.name})})),C(null===_||void 0===_?void 0:_.isAdmin)}),[j,S]),s.a.createElement(b.a,null,s.a.createElement(E.Link,{to:"/admin/userlist",className:"btn btn-light my-3"}," ","Go Back"),A?s.a.createElement(v.a,null):O?s.a.createElement(p.a,{variant:"danger"},O):s.a.createElement(l.a,null,s.a.createElement(d.a,{md:12},s.a.createElement("h2",null," Edit User "),s.a.createElement(c.a,{onSubmit:function(e){e.preventDefault(),y(Object(f.d)({name:k,email:N,adminPassword:$,id:n.params.userid,isAdmin:F}))}},s.a.createElement(c.a.Group,{controlId:"name"},s.a.createElement(c.a.Label,null,"Name"),s.a.createElement(c.a.Control,{type:"name",placeholder:"Enter user name",name:"name",value:k,onChange:L})),s.a.createElement(c.a.Group,{controlId:"email"},s.a.createElement(c.a.Label,null,"Email address"),s.a.createElement(c.a.Control,{type:"email",placeholder:"Enter user email",name:"email",value:N,onChange:L})),s.a.createElement(c.a.Group,{controlId:"email"},s.a.createElement(c.a.Check,{type:"checkbox",label:"Is Admin",name:"isAdmin",checked:F,onChange:function(e){C(e.target.checked)}})),s.a.createElement(c.a.Group,{controlId:"adminPassword"},s.a.createElement(c.a.Label,null,"Enter your password"),s.a.createElement(c.a.Control,{type:"password",placeholder:"Enter your password",name:"adminPassword",value:$,onChange:L,required:!0})),s.a.createElement(u.a,{type:"submit"}," update")))))}}}]);
//# sourceMappingURL=9.7484b7de.chunk.js.map