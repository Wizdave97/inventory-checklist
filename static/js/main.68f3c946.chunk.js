(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{158:function(e,t,n){e.exports=n.p+"static/media/logo.7f4c41ff.svg"},5443:function(e,t,n){e.exports=n(5602)},5448:function(e,t,n){},5449:function(e,t,n){},5602:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),o=n(20),i=n.n(o),c=(n(5448),n(33)),u=n(34),l=n(36),s=n(35),d=n(37),m=(n(5449),n(18)),p=n(52),h=n.n(p),f=n(13),g=n(62),v=n.n(g),y=n(24),E=n(158),b=n.n(E),w=Object(f.withStyles)(function(e){return{root:{flexWrap:"wrap"},title:{flexGrow:1},button:{margin:e.spacing.unit,"@media screen and (max-width:600px)":{display:"none"}},logo:{width:"60px",height:"54px",boxSizing:"border-box",padding:"2px"},img:{width:"100%",height:"50px"},hamburger:{margin:e.spacing.unit,"@media screen and (min-width:600px)":{display:"none"}},"@media screen and (max-width:464px)":{title:{fontSize:"1.4em"},logo:{width:"40px"}},activePage:{color:e.palette.secondary.light,borderColor:e.palette.secondary.light}}})(function(e){var t=e.classes,n=window.location.pathname;return a.a.createElement(m.a,{position:"fixed"},a.a.createElement(m.q,{className:t.root},a.a.createElement("div",{className:t.logo},a.a.createElement("img",{className:t.img,src:b.a,alt:"inventory control"})),a.a.createElement(m.r,{variant:"h4",className:t.title,color:"inherit"},"Inventory Checklist"),e.authState?a.a.createElement(h.a,{in:!0,timeout:{enter:10,exit:10}},a.a.createElement(a.a.Fragment,null,a.a.createElement(m.b,{variant:"outlined",classes:"/inventory"===n&&0===e.active?{root:t.activePage}:{root:""},onClick:function(){return e.clicked(0)},color:"inherit",className:t.button,component:y.b,to:"/inventory",size:"medium"},"Inventory"),a.a.createElement(m.b,{variant:"outlined",classes:"/addInventory"===n&&1===e.active?{root:t.activePage}:{root:""},onClick:function(){return e.clicked(1)},color:"inherit",className:t.button,component:y.b,to:"/addInventory",size:"medium"},"Add Inventory"),a.a.createElement(m.b,{variant:"outlined",onClick:function(){return e.onLogOut()},color:"inherit",className:t.button,component:y.b,to:"/auth",size:"medium"},"Log Out"),a.a.createElement(m.k,{onClick:function(){return e.onToggleSideDrawer()},className:t.hamburger,color:"secondary","aria-label":"Menu"},a.a.createElement(v.a,null)))):""))}),I=n(96),O=Object(f.withStyles)(function(e){return{root:{width:"100%",height:"100%",zIndex:1500,position:"absolute",top:0,opacity:.5,backgroundColor:"black",transtion:"opacity 0.3s ease-out"}}})(function(e){var t=e.classes;return a.a.createElement("div",{id:"back-drop",onClick:function(){return e.onToggleSideDrawer()},className:t.root})}),S=Object(f.withStyles)(function(e){return{root:{minHeight:"100%",position:"absolute",width:"50%",zIndex:2e3,top:0,right:0,transition:"width 0.3s ease-out"},link:{textDecoration:"none",color:e.palette.primary.dark},activePage:{color:e.palette.secondary.light},"@media screen and (min-width:599px)":{root:{display:"none"}}}})(function(e){var t=e.classes,n=window.location.pathname;return a.a.createElement(a.a.Fragment,null,a.a.createElement(m.i,{in:!0,timeout:{enter:10,exit:10}},a.a.createElement(a.a.Fragment,null,a.a.createElement(O,{onToggleSideDrawer:e.onToggleSideDrawer}),a.a.createElement(m.o,{id:"side-drawer",className:t.root,square:!0},a.a.createElement(m.n,null,a.a.createElement(m.m,{onClick:function(){return e.onToggleSideDrawer()}},a.a.createElement(I.b,null)),a.a.createElement(y.c,{className:t.link,to:"/inventory"},a.a.createElement(m.m,{classes:"/inventory"===n?{root:t.activePage}:{root:""}},"Inventory")),a.a.createElement(y.c,{className:t.link,to:"/addInventory"},a.a.createElement(m.m,{classes:"/addInventory"===n?{root:t.activePage}:{root:""}},"Add Inventory")),a.a.createElement(m.m,{className:t.link,onClick:function(){return e.onLogOut()}},"Log Out"))))))}),T=Object(f.withStyles)(function(e){return{root:{display:"flex",flexWrap:"wrap",height:"60px",width:"100%",background:e.palette.primary.dark},"@media screen and (min-width:900px)":{root:{width:"900px",marginLeft:"auto",marginRight:"auto"}}}})(function(e){var t=e.classes;return a.a.createElement("div",{className:t.root})}),x=function(e){function t(){var e,n;Object(c.a)(this,t);for(var r=arguments.length,a=new Array(r),o=0;o<r;o++)a[o]=arguments[o];return(n=Object(l.a)(this,(e=Object(s.a)(t)).call.apply(e,[this].concat(a)))).state={active:0,showSideDrawer:!1},n.handleClick=function(e){n.setState({active:e})},n.toggleSideDrawer=function(){n.setState(function(e){return{showSideDrawer:!e.showSideDrawer}})},n}return Object(d.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this.props.classes;return a.a.createElement(a.a.Fragment,null,a.a.createElement(w,{onToggleSideDrawer:this.toggleSideDrawer,onLogOut:this.props.onLogOut,authState:this.props.authState,clicked:this.handleClick,active:this.state.active}),this.state.showSideDrawer?a.a.createElement(S,{onToggleSideDrawer:this.toggleSideDrawer,onLogOut:this.props.onLogOut}):null,a.a.createElement("main",{className:e.main,style:{padding:8}},a.a.createElement(m.j,{justify:"center",container:!0,spacing:16,className:e.container},this.props.children)),a.a.createElement(T,null))}}]),t}(r.Component),N=Object(f.withStyles)(function(e){return{main:{minHeight:"calc(100% - 60px)",marginTop:"75px",display:"flex",flexWrap:"wrap",boxSizing:"border-box"},container:{height:"100%"},"@media screen and (min-width:900px)":{main:{width:"900px",marginLeft:"auto",marginRight:"auto"}},"@media screen and (min-width:602px) and (max-width:819px)":{main:{marginTop:"110px"}},"@media screen and (max-width:344px)":{main:{marginTop:"122px"}}}})(x),k=n(30),A=n(53),C=n(94),D=function(e){return function(t){function n(){var e,t;Object(c.a)(this,n);for(var r=arguments.length,a=new Array(r),o=0;o<r;o++)a[o]=arguments[o];return(t=Object(l.a)(this,(e=Object(s.a)(n)).call.apply(e,[this].concat(a)))).state={component:null},t}return Object(d.a)(n,t),Object(u.a)(n,[{key:"componentDidMount",value:function(){var t=this;e().then(function(e){t.setState({component:e.default})})}},{key:"render",value:function(){var e=this.state.component;return e?a.a.createElement(e,this.props):null}}]),n}(r.Component)},j=D(function(){return n.e(6).then(n.bind(null,5608))}),_=D(function(){return n.e(3).then(n.bind(null,5609))}),L=D(function(){return n.e(5).then(n.bind(null,5610))}),F=D(function(){return n.e(4).then(n.bind(null,5611))}),R=D(function(){return n.e(7).then(n.bind(null,5612))}),P=function(e){function t(){return Object(c.a)(this,t),Object(l.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){this.props.onAutoSignup()}},{key:"render",value:function(){var e=a.a.createElement(k.d,null,a.a.createElement(k.b,{exact:!0,path:"/auth",component:R}),a.a.createElement(k.a,{to:"/auth"}));return this.props.isAuthenticated&&(e=a.a.createElement(k.d,null,a.a.createElement(k.b,{exact:!0,path:"/inventory",component:j}),a.a.createElement(k.b,{exact:!0,path:"/addInventory",component:_}),a.a.createElement(k.b,{exact:!0,path:"/viewItem/:id",component:L}),a.a.createElement(k.b,{exact:!0,path:"/editItem/:id",component:F}),a.a.createElement(k.b,{exact:!0,path:"/auth",component:R}))),a.a.createElement(N,{onLogOut:this.props.onLogOut,authState:this.props.isAuthenticated},e)}}]),t}(r.Component),U=Object(k.f)(Object(A.b)(function(e){return{isAuthenticated:null!==e.auth.idToken}},function(e){return{onLogOut:function(){return e(Object(C.b)())},onAutoSignup:function(){return e(Object(C.c)())}}})(P)),Y=n(31),V=n(161);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var z=n(97),M=n(157),H=n(50),q=n(9),J=function(e,t){return Object(H.a)({},e,t)},W={inventory:null,loading:!1,error:null,selectedItem:null,addInventory:!1,addInventorySuccess:!1,addInventoryFail:!1,deleteInventoryFail:!1,updateInventory:!1,updateInventorySuccess:!1,updateInventoryFail:!1},Q=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:W,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case q.l:return J(e,{loading:!0});case q.n:return J(e,{inventory:t.value,loading:!1,error:!1});case q.m:return J(e,{loading:!1,error:!0});case q.a:return J(e,{addInventory:!0});case q.d:return J(e,{addInventory:!1,addInventorySuccess:!0,addInventoryFail:!1});case q.c:return J(e,{addInventory:!1,addInventoryFail:!0});case q.q:return J(e,{updateInventory:!0});case q.t:return J(e,{updateInventory:!1,updateInventorySuccess:!0,updateInventoryFail:!1});case q.s:return J(e,{updateInventory:!1,updateInventoryFail:!0});case q.o:return function(e,t){for(var n=J(e,{}),r=n.inventory,a=0;a<r.length;a++)if(r[a][0]===t){var o=Number(r[a][1].quantity);return r[a][1].quantity=o+1,J(e,n)}}(e,t.value);case q.p:return e;case q.i:return function(e,t){for(var n=J(e,{}),r=n.inventory,a=0;a<r.length;a++)if(r[a][0]===t){var o=Number(r[a][1].quantity);return o<1?J(e,n):(r[a][1].quantity=o-1,J(e,n))}}(e,t.value);case q.j:return function(e,t){var n=Object(H.a)({},e,{inventory:Object(M.a)(e.inventory)}),r=n.inventory,a=[],o=!0,i=!1,c=void 0;try{for(var u,l=r[Symbol.iterator]();!(o=(u=l.next()).done);o=!0){var s=u.value,d=Object(z.a)(s,2),m=d[0],p=d[1];t!==m&&a.push([m,p])}}catch(h){i=!0,c=h}finally{try{o||null==l.return||l.return()}finally{if(i)throw c}}return J(e,Object(H.a)({},n,{inventory:a}))}(e,t.value);case q.k:return J(e,{deleteInventoryFail:!0});case q.b:return J(e,{addInventorySuccess:!1});case q.r:return J(e,{updateInventorySuccess:!1});default:return e}},G={idToken:null,localId:null,loading:!1,error:null},B=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:G,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case q.g:return J(e,{loading:!0});case q.h:return function(e,t){return J(e,{idToken:t.value.idToken,localId:t.value.localId,loading:!1,error:null})}(e,t);case q.e:return function(e,t){if(!t.value.error)return J(e,{error:"A network error occured, please retry",loading:!1});switch(t.error.message){case"EMAIL_EXISTS":return J(e,{error:"This email exists on our servers already",loading:!1});case"INVALID_EMAIL":return J(e,{error:"The email provided is invalid",loading:!1});default:return e}}(e,t);case q.f:return J(e,{idToken:null,localId:null});default:return e}},K=n(63),Z=Object(Y.c)({auth:B,inventory:Q}),X=Y.d,$=Object(Y.e)(Z,X(Object(Y.a)(V.a))),ee=Object(f.createMuiTheme)({overrides:{MuiButton:{text:{color:"black",background:"white"}}},typography:{useNextVariants:!0},spacing:{unit:8},palette:{type:"light",primary:{main:"#fafafa"},secondary:{main:"#ff8f00"},error:{main:K.red[500]}}});i.a.render(a.a.createElement(A.a,{store:$},a.a.createElement(y.a,null,a.a.createElement(f.MuiThemeProvider,{theme:ee},a.a.createElement(U,null)))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},9:function(e,t,n){"use strict";n.d(t,"l",function(){return r}),n.d(t,"a",function(){return a}),n.d(t,"c",function(){return o}),n.d(t,"d",function(){return i}),n.d(t,"b",function(){return c}),n.d(t,"q",function(){return u}),n.d(t,"s",function(){return l}),n.d(t,"t",function(){return s}),n.d(t,"r",function(){return d}),n.d(t,"g",function(){return m}),n.d(t,"h",function(){return p}),n.d(t,"e",function(){return h}),n.d(t,"f",function(){return f}),n.d(t,"j",function(){return g}),n.d(t,"k",function(){return v}),n.d(t,"m",function(){return y}),n.d(t,"n",function(){return E}),n.d(t,"o",function(){return b}),n.d(t,"p",function(){return w}),n.d(t,"i",function(){return I});var r="FETCH_INVENTORY",a="ADD_INVENTORY",o="ADD_INVENTORY_FAIL",i="ADD_INVENTORY_SUCCESS",c="ADD_INVENTORY_COMPLETE",u="UPDATE_INVENTORY",l="UPDATE_INVENTORY_FAIL",s="UPDATE_INVENTORY_SUCCESS",d="UPDATE_INVENTORY_COMPLETE",m="AUTH_START",p="AUTH_SUCCESS",h="AUTH_FAIL",f="AUTH_LOGOUT",g="DELETE_INVENTORY",v="DELETE_INVENTORY_FAIL",y="FETCH_INVENTORY_FAIL",E="FETCH_INVENTORY_SUCCESS",b="INCREASE_QUANTITY",w="INCREASE_QUANTITY_FAIL",I="DECREASE_QUANTITY"},94:function(e,t,n){"use strict";n.d(t,"b",function(){return a}),n.d(t,"a",function(){return u}),n.d(t,"c",function(){return l});var r=n(9),a=function(){return localStorage.inventoryChecklist="",{type:r.f}},o=function(e){return function(t){setTimeout(function(){t(a())},1e3*e)}},i=function(e){return{type:r.h,value:e}},c=function(e){return{type:r.e,value:e}},u=function(e,t){return function(n){n({type:r.g});var a="https://www.googleapis.com/identitytoolkit/v3/relyingparty/verifyPassword?key=\n    AIzaSyC2lWC3RgazQDLGKPiscZObn5nwnJzs9F0";t&&(a="https://www.googleapis.com/identitytoolkit/v3/relyingparty/signupNewUser?key=\n    AIzaSyC2lWC3RgazQDLGKPiscZObn5nwnJzs9F0"),fetch(a,{method:"POST",body:JSON.stringify(e)}).then(function(e){return e.json()}).then(function(e){e.error?n(c(e)):(localStorage.inventoryChecklist=JSON.stringify({idToken:e.idToken,localId:e.localId,expiresIn:new Date((new Date).getTime()+1e3*e.expiresIn)}),n(i(e)),n(o(e.expiresIn)))}).catch(function(e){return n(c(e))})}},l=function(){return function(e){if(localStorage.inventoryChecklist){var t=JSON.parse(localStorage.inventoryChecklist),n=(new Date).getTime(),r=new Date(t.expiresIn).getTime()-n;r>0?(e(i(t)),e(o(r/1e3))):e(a())}else e(a())}}}},[[5443,1,2]]]);
//# sourceMappingURL=main.68f3c946.chunk.js.map