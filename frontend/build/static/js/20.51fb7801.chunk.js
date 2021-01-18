(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[20],{154:function(e,t,n){"use strict";var a=n(1),r=n(2),o=n(4),c=n.n(o),i=n(0),u=n.n(i),p=n(5),d=["xl","lg","md","sm","xs"],l=u.a.forwardRef((function(e,t){var n=e.bsPrefix,o=e.className,i=e.noGutters,l=e.as,s=void 0===l?"div":l,m=Object(r.a)(e,["bsPrefix","className","noGutters","as"]),g=Object(p.a)(n,"row"),b=g+"-cols",y=[];return d.forEach((function(e){var t,n=m[e];delete m[e];var a="xs"!==e?"-"+e:"";null!=(t=null!=n&&"object"===typeof n?n.cols:n)&&y.push(""+b+a+"-"+t)})),u.a.createElement(s,Object(a.a)({ref:t},m,{className:c.a.apply(void 0,[o,g,i&&"no-gutters"].concat(y))}))}));l.displayName="Row",l.defaultProps={noGutters:!1},t.a=l},160:function(e,t,n){"use strict";n.d(t,"b",(function(){return d})),n.d(t,"a",(function(){return l})),n.d(t,"c",(function(){return s}));var a=n(27),r=n.n(a),o=n(44),c=n(45),i=n.n(c),u=n(28),p=function(e){return{type:u.a.FETCH_PRODUCT_FAIL,payload:e}},d=function(e){return function(t){t({type:u.a.FETCH_PRODUCT_START});i()({method:"POST",data:{query:"\n     query getProductById($id: String!) {\n        getProductById(id : $id) {\n         _id\n         name\n         image\n         brand\n         price\n         rating\n         numReviews\n         category\n         description\n         countInStock\n         top\n         reviews{\n           _id \n           creator{\n             name\n           }\n         }\n         \n         \n       }\n     }\n     ",variables:{id:e}},url:"/graphql"}).then((function(e){var n;t((n=e.data.data.getProductById,{type:u.a.FETCH_PRODUCT_SUCCESS,payload:n}))})).catch((function(e){var n=e.response.data.errors?e.response.data.errors[0].message:e.response.data;t(p(n))}))}},l=function(e){var t=e.name,n=e.image,a=e.brand,c=e.price,d=e.category,l=e.description,s=e.countInStock,m=e.imageUpload,g=e.top;return function(){var e=Object(o.a)(r.a.mark((function e(o,b){var y,f,h;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:y=b().userReducer.userInfo.token,f={headers:{"Content-Type":"multipart/form-data",Authorization:"Bearer ".concat(y)}},o({type:u.a.CLEAR_PRODUCT}),o({type:u.a.FETCH_PRODUCT_START}),h="\n  mutation createProduct($name :String!, $description:String!,$image:String!,$category:String!, $brand:String!,$countInStock:Float!,   $price:Float! , $top:Boolean) {\n    createProduct( name :$name,  description:$description, image:$image ,category:$category,  brand:$brand, countInStock:$countInStock,    price:$price , top :$top) {\n      _id\n      name\n      image\n      brand\n      price\n      rating\n      numReviews\n      category\n      description\n      countInStock\n      \n    }\n  }\n  ",n?i()({method:"POST",data:{query:h,variables:{name:t,image:n,brand:a,price:Number(c),category:d,description:l,countInStock:Number(s),top:g}},url:"/graphql",headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(y)}}).then((function(e){o({type:u.a.CREATE_NEW_PRODUCT,payload:e.data.data.createProduct})})).then((function(){o({type:u.a.CLEAR_PRODUCT})})).catch((function(e){var t=e.response.data.errors?e.response.data.errors[0].message:e.response.data;o(p(t))})):i.a.post("/upload",m,f).then((function(e){i()({method:"POST",data:{query:h,variables:{name:t,image:e.data,brand:a,price:Number(c),category:d,description:l,countInStock:Number(s),top:g}},url:"/graphql",headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(y)}}).then((function(e){o({type:u.a.CREATE_NEW_PRODUCT,payload:e.data.data.createProduct})})).then((function(){o({type:u.a.CLEAR_PRODUCT})})).catch((function(e){var t=e.response.data.errors?e.response.data.errors[0].message:e.response.data;o(p(t))}))}));case 6:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}()},s=function(e){var t=e._id,n=e.name,a=e.image,c=e.brand,d=e.price,l=e.category,s=e.description,m=e.countInStock,g=(e.imageUpload,e.top);return function(){var e=Object(o.a)(r.a.mark((function e(o,b){var y;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:y=b().userReducer.userInfo.token,{headers:{"Content-Type":"multipart/form-data",Authorization:"Bearer ".concat(y)}},g=1==g,o({type:u.a.CLEAR_PRODUCT}),o({type:u.a.FETCH_PRODUCT_START}),"\n  mutation updateProduct($name :String, $description:String,$image:String,$category:String, $brand:String,$countInStock:Float,   $price:Float , $_id:String! $top:Boolean) {\n    updateProduct( _id:$_id ,name :$name,  description:$description, image:$image ,category:$category,  brand:$brand, countInStock:$countInStock,    price:$price top:$top) {\n      _id\n      name\n      image\n      brand\n      price\n      rating\n      numReviews\n      category\n      description\n      countInStock\n    }\n  }\n  ",i()({method:"POST",data:{query:"\n  mutation updateProduct($name :String, $description:String,$image:String,$category:String, $brand:String,$countInStock:Float,   $price:Float , $_id:String! $top:Boolean) {\n    updateProduct( _id:$_id ,name :$name,  description:$description, image:$image ,category:$category,  brand:$brand, countInStock:$countInStock,    price:$price top:$top) {\n      _id\n      name\n      image\n      brand\n      price\n      rating\n      numReviews\n      category\n      description\n      countInStock\n    }\n  }\n  ",variables:{_id:t,name:n,brand:c,price:Number(d),category:l,description:s,countInStock:Number(m),image:a,top:g}},url:"/graphql",headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(y)}}).then((function(e){o({type:u.a.CLEAR_PRODUCT}),o({type:u.a.UPDATE_PRODUCT,action:e.data.data.updateProduct})})).catch((function(e){var t=e.response.data.errors?e.response.data.errors[0].message:e.response.data;o(p(t))}));case 7:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}()}},173:function(e,t,n){},181:function(e,t,n){"use strict";n.r(t);var a=n(69),r=n(3),o=n(27),c=n.n(o),i=n(44),u=n(68),p=n(0),d=n.n(p),l=n(154),s=n(88),m=n(149),g=n(89),b=n(67),y=n(19),f=(n(173),n(160));t.default=function(e){var t=e.history,n=Object(y.c)((function(e){return e.productReducer})),o=Object(y.b)(),h=n.createProductState,E=n.loading;Object(p.useEffect)((function(){h&&!E&&t.push("/admin/productslist")}),[h,o,E]);var S=Object(p.useState)({name:"",price:"",image:"",brand:"",description:"",countInStock:"",category:""}),$=Object(u.a)(S,2),C=$[0],v=$[1],I=Object(p.useState)(null),T=Object(u.a)(I,2),O=T[0],k=T[1],P=function(){var e=Object(i.a)(c.a.mark((function e(t){var n,a;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n=t.target.files[0],(a=new FormData).append("image",n),k(a);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),_=C.name,R=C.price,j=C.image,w=C.brand,U=C.description,A=C.countInStock,D=C.category,N=function(e){var t=e.target,n=t.name,o=t.value;v((function(e){return Object(r.a)(Object(r.a)({},e),{},Object(a.a)({},n,o))}))},F=Object(p.useState)(!1),x=Object(u.a)(F,2),L=x[0],B=x[1];return d.a.createElement("div",{className:"create-product"},E&&d.a.createElement(b.a,null),d.a.createElement("h2",null,"create new product"),d.a.createElement("section",{className:"product-info"},d.a.createElement(l.a,null,d.a.createElement(s.a,{md:6},d.a.createElement(m.a,{onSubmit:function(e){e.preventDefault(),o(Object(f.a)({name:_,price:R,image:j,brand:w,description:U,countInStock:A,category:D,imageUpload:O,top:L}))}},d.a.createElement(m.a.Group,{controlId:"name"},d.a.createElement(m.a.Label,null,"Name"),d.a.createElement(m.a.Control,{type:"text",placeholder:"Enter name",name:"name",value:_,onChange:N})),d.a.createElement(m.a.Group,{controlId:"price"},d.a.createElement(m.a.Label,null,"price"),d.a.createElement(m.a.Control,{type:"Number",placeholder:"Enter price",name:"price",value:R,onChange:N})),d.a.createElement(m.a.Group,{controlId:"email"},d.a.createElement(m.a.Check,{type:"checkbox",label:"Top",name:"top",onChange:function(e){B(e.target.checked)}})),d.a.createElement(m.a.Group,{controlId:"image"},d.a.createElement(m.a.Label,null,"image"),d.a.createElement(m.a.Control,{type:"text",placeholder:"Enter image",name:"image",value:j,onChange:N}),d.a.createElement(m.a.File,{label:"chose file ",custom:!0,onChange:P})),d.a.createElement(m.a.Group,{controlId:"brand"},d.a.createElement(m.a.Label,null,"brand"),d.a.createElement(m.a.Control,{type:"text",placeholder:"Enter brand",name:"brand",value:w,onChange:N})),d.a.createElement(m.a.Group,{controlId:"description"},d.a.createElement(m.a.Label,null,"description"),d.a.createElement(m.a.Control,{type:"description",placeholder:"Enter description",name:"description",value:U,onChange:N}),d.a.createElement(m.a.Group,{controlId:"category"},d.a.createElement(m.a.Label,null,"category"),d.a.createElement(m.a.Control,{type:"text",placeholder:"Enter category",name:"category",value:D,onChange:N}))),d.a.createElement(m.a.Group,{controlId:"countInStock"},d.a.createElement(m.a.Label,null,"count In Stuck"),d.a.createElement(m.a.Control,{type:"number",placeholder:"Enter countInStock",name:"countInStock",value:A,onChange:N})),d.a.createElement(g.a,{type:"submit"}," Create"))))))}}}]);
//# sourceMappingURL=20.51fb7801.chunk.js.map