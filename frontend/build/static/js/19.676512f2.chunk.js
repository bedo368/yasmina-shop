(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[19],{149:function(e,a,t){"use strict";var n=t(1),r=t(0),l=t.n(r),o=t(4),s=t.n(o);a.a=function(e){return l.a.forwardRef((function(a,t){return l.a.createElement("div",Object(n.a)({},a,{ref:t,className:s()(a.className,e)}))}))}},150:function(e,a,t){"use strict";var n=t(0),r=t.n(n),l=t(152),o=function(e){var a=e.variant,t=e.children;return r.a.createElement(l.a,{variant:a},t)};o.defaultProps={variant:"info"},a.a=o},151:function(e,a,t){"use strict";var n=t(1),r=t(2),l=t(4),o=t.n(l),s=t(0),c=t.n(s),u=t(5),i=["xl","lg","md","sm","xs"],d=c.a.forwardRef((function(e,a){var t=e.bsPrefix,l=e.className,s=e.noGutters,d=e.as,m=void 0===d?"div":d,p=Object(r.a)(e,["bsPrefix","className","noGutters","as"]),f=Object(u.a)(t,"row"),E=f+"-cols",b=[];return i.forEach((function(e){var a,t=p[e];delete p[e];var n="xs"!==e?"-"+e:"";null!=(a=null!=t&&"object"===typeof t?t.cols:t)&&b.push(""+E+n+"-"+a)})),c.a.createElement(m,Object(n.a)({ref:a},p,{className:o.a.apply(void 0,[l,f,s&&"no-gutters"].concat(b))}))}));d.displayName="Row",d.defaultProps={noGutters:!1},a.a=d},152:function(e,a,t){"use strict";var n,r=t(1),l=t(2),o=t(4),s=t.n(o),c=t(0),u=t.n(c),i=t(21),d=t(11),m=t(5),p=t(64),f=t(31),E=t(65),b=((n={})[f.b]="show",n[f.a]="show",n),h=u.a.forwardRef((function(e,a){var t=e.className,n=e.children,o=Object(l.a)(e,["className","children"]),i=Object(c.useCallback)((function(e){Object(E.a)(e),o.onEnter&&o.onEnter(e)}),[o]);return u.a.createElement(f.e,Object(r.a)({ref:a,addEndListener:p.a},o,{onEnter:i}),(function(e,a){return u.a.cloneElement(n,Object(r.a)({},a,{className:s()("fade",t,n.props.className,b[e])}))}))}));h.defaultProps={in:!1,timeout:300,mountOnEnter:!1,unmountOnExit:!1,appear:!1},h.displayName="Fade";var v=h,O=t(6),P=t.n(O),w={label:P.a.string.isRequired,onClick:P.a.func},j=u.a.forwardRef((function(e,a){var t=e.label,n=e.onClick,o=e.className,c=Object(l.a)(e,["label","onClick","className"]);return u.a.createElement("button",Object(r.a)({ref:a,type:"button",className:s()("close",o),onClick:n},c),u.a.createElement("span",{"aria-hidden":"true"},"\xd7"),u.a.createElement("span",{className:"sr-only"},t))}));j.displayName="CloseButton",j.propTypes=w,j.defaultProps={label:"Close"};var y=j,C=t(149),R=t(20),N=t(30),S=Object(C.a)("h4");S.displayName="DivStyledAsH4";var g=Object(R.a)("alert-heading",{Component:S}),I=Object(R.a)("alert-link",{Component:N.a}),U={show:!0,transition:v,closeLabel:"Close alert"},_=u.a.forwardRef((function(e,a){var t=Object(i.a)(e,{show:"onClose"}),n=t.bsPrefix,o=t.show,c=t.closeLabel,p=t.className,f=t.children,E=t.variant,b=t.onClose,h=t.dismissible,O=t.transition,P=Object(l.a)(t,["bsPrefix","show","closeLabel","className","children","variant","onClose","dismissible","transition"]),w=Object(m.a)(n,"alert"),j=Object(d.a)((function(e){b&&b(!1,e)})),C=!0===O?v:O,R=u.a.createElement("div",Object(r.a)({role:"alert"},C?P:void 0,{ref:a,className:s()(p,w,E&&w+"-"+E,h&&w+"-dismissible")}),h&&u.a.createElement(y,{onClick:j,label:c}),f);return C?u.a.createElement(C,Object(r.a)({unmountOnExit:!0},P,{ref:void 0,in:o}),R):o?R:null}));_.displayName="Alert",_.defaultProps=U,_.Link=I,_.Heading=g;a.a=_},190:function(e,a,t){"use strict";t.r(a);var n=t(68),r=t(3),l=t(67),o=t(0),s=t.n(o),c=t(151),u=t(87),i=t(146),d=t(88),m=t(26),p=t(150),f=t(66),E=t(27),b=t.n(E),h=t(43),v=t(24),O=t(44),P=t.n(O),w=t(8);a.default=function e(a){var t=a.location,E=a.history,O=Object(m.b)(),j=Object(m.c)((function(e){return e.userReducer})).userInfo,y=Object(m.c)((function(e){return e.userProfileReducer})),C=y.userProfileInfo,R=y.getUserProlieFetchState,N=y.userProfileErrorMessage,S=Object(o.useState)(!1),g=Object(l.a)(S,2),I=g[0],U=g[1],_=Object(o.useState)({email:"",newPassword:"",name:"",oldPassword:""}),L=Object(l.a)(_,2),k=L[0],T=L[1],x=k.email,A=k.newPassword,F=k.name,G=k.oldPassword,D=t.search?t.search.split("=")[1]:"/",q=function(e){var a=e.target,t=a.name,l=a.value;T((function(e){return Object(r.a)(Object(r.a)({},e),{},Object(n.a)({},t,l))}))};Object(o.useEffect)((function(){(null===C||void 0===C?void 0:C.name)?T((function(e){return Object(r.a)(Object(r.a)({},e),{},{email:C.email,name:C.name})})):j&&O(function(){var e=Object(h.a)(b.a.mark((function e(a,t){var n,r,l,o;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,n=t().userReducer.userInfo.token,a({type:v.a.USER_GET_PROFILE_START}),e.next=6,P()({method:"POST",url:"/graphql",data:{query:"\n        query{\n            getUserProfile{\n                name\n                email\n                isAdmin\n            }\n        }\n      "},headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(n)}});case 6:r=e.sent,l=r.data,a({type:v.a.USER_GET_PROFILE_SUCCESS,payload:l.data.getUserProfile}),e.next=15;break;case 11:e.prev=11,e.t0=e.catch(0),o=e.t0.response.data.errors?e.t0.response.data.errors[0].message:e.t0.response.data,a({type:v.a.USER_GET_PROFILE_FAIL,payload:o});case 15:case"end":return e.stop()}}),e,null,[[0,11]])})));return function(a,t){return e.apply(this,arguments)}}()),j||E.push("/")}),[j,C,O,e]),Object(o.useEffect)((function(){j||E.push(D)}),[E,j]);return s.a.createElement("div",null,I?s.a.createElement(c.a,null,s.a.createElement(u.a,{md:6},s.a.createElement("h2",null," User Profile "),(N||N)&&s.a.createElement(p.a,{variant:"danger"},N," "),R&&s.a.createElement(f.a,null),s.a.createElement(i.a,{onSubmit:function(e){e.preventDefault(),O(function(e,a,t,n){return function(){var r=Object(h.a)(b.a.mark((function r(l,o){var s,c,u,i,d;return b.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:if(n){r.next=3;break}return l({type:v.a.USER_UPDATE_PROFILE_FAIL,payload:"enter your old password "}),r.abrupt("return");case 3:return r.prev=3,s=o().userReducer.userInfo.token,l({type:v.a.USER_UPDATE_PROFILE_START}),c='\n    mutation{\n          updateUserProfile(email:"'.concat(a,'" , password:"').concat(t,'" , name:"').concat(e,'" , oldPassword:"').concat(n,'" ){\n                name\n                email\n                isAdmin\n            }\n        }\n      '),r.next=9,P()({method:"POST",url:"/graphql",data:{query:c},headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(s)}});case 9:u=r.sent,i=u.data,l({type:v.a.USER_UPDATE_PROFILE_SUCCESS,payload:i.data.updateUserProfile}),l({type:w.a.UPDATE_USER_INFO,payload:i.data.updateUserProfile}),localStorage.setItem("userInfo",JSON.stringify(o().userReducer.userInfo)),r.next=20;break;case 16:r.prev=16,r.t0=r.catch(3),d=r.t0.response.data.errors?r.t0.response.data.errors[0].message:r.t0.response.data?r.t0.response.data:"error happend",l({type:v.a.USER_UPDATE_PROFILE_FAIL,payload:d});case 20:case"end":return r.stop()}}),r,null,[[3,16]])})));return function(e,a){return r.apply(this,arguments)}}()}(F,x,A,G)),T((function(e){return Object(r.a)(Object(r.a)({},e),{},{newPassword:"",oldPassword:""})})),U(!1)}},s.a.createElement(i.a.Group,{controlId:"name"},s.a.createElement(i.a.Label,null,"Name"),s.a.createElement(i.a.Control,{type:"name",placeholder:"Enter name",name:"name",value:F,onChange:q})),s.a.createElement(i.a.Group,{controlId:"email"},s.a.createElement(i.a.Label,null,"Email address"),s.a.createElement(i.a.Control,{type:"email",placeholder:"Enter email",name:"email",value:x,onChange:q})),s.a.createElement(i.a.Group,{controlId:"newPassword"},s.a.createElement(i.a.Label,null,"newPassword"),s.a.createElement(i.a.Control,{type:"password",placeholder:"Enter newPassword",name:"newPassword",value:A,onChange:q})),s.a.createElement(i.a.Group,{controlId:"oldPassword"},s.a.createElement(i.a.Label,null,"oldPassword"),s.a.createElement(i.a.Control,{type:"password",placeholder:"Enter oldPassword",name:"oldPassword",value:G,onChange:q,required:!0})),s.a.createElement(d.a,{type:"submit"}," update")))):s.a.createElement(c.a,null,s.a.createElement(u.a,{md:6,className:"pt-5"},s.a.createElement("h2",null," User Profile "),(N||N)&&s.a.createElement(p.a,{variant:"danger"},N," "),R&&s.a.createElement(f.a,null),s.a.createElement("div",{className:"pt-5"},s.a.createElement("h4",null," ",s.a.createElement("strong",null,"Name:")," ",F," "),s.a.createElement("h4",null," ",s.a.createElement("strong",null,"Email:")," ",x," "),s.a.createElement(d.a,{className:"mt-2",type:"button",onClick:function(){U(!0)}}," ","EDIT")))))}}}]);
//# sourceMappingURL=19.676512f2.chunk.js.map