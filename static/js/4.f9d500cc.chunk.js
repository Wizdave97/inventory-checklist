(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{5603:function(e,t,n){"use strict";var a=n(0),r=n.n(a),i=n(5604),o=n.n(i);t.a=function(){return r.a.createElement("div",{className:o.a.Loader},"Loading...")}},5604:function(e,t,n){e.exports={Loader:"Spinner_Loader__Kn1Z5",load2:"Spinner_load2__otO50"}},5605:function(e,t,n){"use strict";n.d(t,"b",function(){return o}),n.d(t,"j",function(){return c}),n.d(t,"a",function(){return l}),n.d(t,"i",function(){return s}),n.d(t,"g",function(){return h}),n.d(t,"h",function(){return m}),n.d(t,"d",function(){return p}),n.d(t,"c",function(){return f}),n.d(t,"f",function(){return d}),n.d(t,"e",function(){return y});var a=n(9),r=function(e){return{type:e}},i=function(e){return{type:e,value:arguments.length>1&&void 0!==arguments[1]?arguments[1]:null}},o=function(){return{type:a.b}},u=function(e){return{type:e}},c=function(){return{type:a.r}},l=function(e,t){return function(n){n(r(a.a));var i="https://soup-kitchen-8a966.firebaseio.com/inventory.json?auth=".concat(t);fetch(i,{method:"POST",body:JSON.stringify(e)}).then(function(e){return e.json()}).then(function(e){n(r(a.d))}).catch(function(e){n(r(a.c))})}},s=function(e,t,n){return function(r){r(u(a.q));var i="https://soup-kitchen-8a966.firebaseio.com/inventory/".concat(n,".json?auth=").concat(t);fetch(i,{method:"PATCH",body:JSON.stringify(e)}).then(function(e){return e.json()}).then(function(e){r(u(a.t))}).catch(function(e){r(u(a.s))})}},h=function(e,t){return{type:e,value:t}},m=function(e,t,n){return n=Number(n),function(r){var i="https://soup-kitchen-8a966.firebaseio.com/inventory/".concat(e,"/.json?auth=").concat(t);fetch(i,{method:"PATCH",body:JSON.stringify({quantity:n})}).then(function(e){}).catch(function(t){r(h(a.p,e))})}},p=function(e,t,n){return n=Number(n),function(r){var i="https://soup-kitchen-8a966.firebaseio.com/inventory/".concat(e,"/.json?auth=").concat(t);fetch(i,{method:"PATCH",body:JSON.stringify({quantity:n})}).then(function(e){}).catch(function(t){r(h(a.p,e))})}},f=function(e,t){return{type:e,value:t}},d=function(e,t){return function(n){n(i(a.l));var r="?auth=".concat(e,'&orderBy="userId"&equalTo="').concat(t,'"'),o="https://soup-kitchen-8a966.firebaseio.com/inventory.json".concat(r);fetch(o).then(function(e){return e.json()}).then(function(e){var t=Object.entries(e);n(i(a.n,t))}).catch(function(e){return n(i(a.m))})}},v=function(e,t){return{type:e,value:t}},y=function(e,t){return function(n){var r="https://soup-kitchen-8a966.firebaseio.com/inventory/".concat(e,".json?auth=").concat(t);fetch(r,{method:"DELETE"}).then(function(t){n(v(a.j,e))}).catch(function(t){n(v(a.k,e))})}}},5606:function(e,t){var n=/^(?:submit|button|image|reset|file)$/i,a=/^(?:input|select|textarea|keygen)/i,r=/(\[[^\[\]]*\])/g;function i(e,t,n){if(t.match(r)){!function e(t,n,a){if(0===n.length)return t=a;var r=n.shift(),i=r.match(/^\[(.+?)\]$/);if("[]"===r)return t=t||[],Array.isArray(t)?t.push(e(null,n,a)):(t._values=t._values||[],t._values.push(e(null,n,a))),t;if(i){var o=i[1],u=+o;isNaN(u)?(t=t||{})[o]=e(t[o],n,a):(t=t||[])[u]=e(t[u],n,a)}else t[r]=e(t[r],n,a);return t}(e,function(e){var t=[],n=new RegExp(r),a=/^([^\[\]]*)/.exec(e);for(a[1]&&t.push(a[1]);null!==(a=n.exec(e));)t.push(a[1]);return t}(t),n)}else{var a=e[t];a?(Array.isArray(a)||(e[t]=[a]),e[t].push(n)):e[t]=n}return e}function o(e,t,n){return n=n.replace(/(\r)?\n/g,"\r\n"),n=(n=encodeURIComponent(n)).replace(/%20/g,"+"),e+(e?"&":"")+encodeURIComponent(t)+"="+n}e.exports=function(e,t){"object"!=typeof t?t={hash:!!t}:void 0===t.hash&&(t.hash=!0);for(var r=t.hash?{}:"",u=t.serializer||(t.hash?i:o),c=e&&e.elements?e.elements:[],l=Object.create(null),s=0;s<c.length;++s){var h=c[s];if((t.disabled||!h.disabled)&&h.name&&a.test(h.nodeName)&&!n.test(h.type)){var m=h.name,p=h.value;if("checkbox"!==h.type&&"radio"!==h.type||h.checked||(p=void 0),t.empty){if("checkbox"!==h.type||h.checked||(p=""),"radio"===h.type&&(l[h.name]||h.checked?h.checked&&(l[h.name]=!0):l[h.name]=!1),void 0==p&&"radio"==h.type)continue}else if(!p)continue;if("select-multiple"!==h.type)r=u(r,m,p);else{p=[];for(var f=h.options,d=!1,v=0;v<f.length;++v){var y=f[v],g=t.empty&&!y.value,b=y.value||g;y.selected&&b&&(d=!0,r=t.hash&&"[]"!==m.slice(m.length-2)?u(r,m+"[]",y.value):u(r,m,y.value))}!d&&t.empty&&(r=u(r,m,""))}}}if(t.empty)for(var m in l)l[m]||(r=u(r,m,""));return r}},5611:function(e,t,n){"use strict";n.r(t);var a=n(156),r=n(50),i=n(97),o=n(33),u=n(34),c=n(36),l=n(35),s=n(37),h=n(0),m=n.n(h),p=n(18),f=n(13),d=n(5606),v=n.n(d),y=n(53),g=n(5605),b=n(5603),j=["Oz","Kg","Units","Lbs"],x=["utensils","fruit","vegetables","cereal","meat","grain","liquid","spice","equipment"],E=function(e){function t(){var e,n;Object(o.a)(this,t);for(var u=arguments.length,s=new Array(u),h=0;h<u;h++)s[h]=arguments[h];return(n=Object(c.a)(this,(e=Object(l.a)(t)).call.apply(e,[this].concat(s)))).state={inventory:null},n.autoFillOnMount=function(){return n.props.inventory.map(function(e){var t=Object(i.a)(e,2),a=t[0],r=t[1];a!==n.props.match.params.id||n.setState({inventory:r})})},n.handleUnitChange=function(e){n.setState(function(t){return{inventory:Object(r.a)({},t.inventory,{unit:e.target.value})}})},n.handleTextFieldChange=function(e,t){e.persist(),n.setState(function(n){return{inventory:Object(r.a)({},n.inventory,Object(a.a)({},t,e.target.value))}})},n.handleCategoryChange=function(e){n.setState(function(t){return{inventory:Object(r.a)({},t.inventory,{category:e})}})},n.submitHandler=function(e){e.preventDefault();var t=document.getElementById("inventory"),a=v()(t,{hash:!0});a=Object(r.a)({},a,{userId:n.props.auth.localId}),n.props.onSubmitForm(a,n.props.auth.idToken,n.props.match.params.id)},n}return Object(s.a)(t,e),Object(u.a)(t,[{key:"componentDidUpdate",value:function(){this.props.updateInventorySuccess&&(this.props.onUpdateInventoryComplete(),this.props.history.push("/inventory"))}},{key:"componentDidMount",value:function(){this.autoFillOnMount()}},{key:"render",value:function(){var e=this,t=this.state.inventory,n=this.props.classes,a=m.a.createElement(m.a.Fragment,null,m.a.createElement(p.r,{variant:"h3",gutterBottom:!0,color:"secondary",align:"center"},"Edit Inventory Item"),m.a.createElement("form",{id:"inventory",action:"",className:n.root,onSubmit:function(t){return e.submitHandler(t)}},m.a.createElement(p.p,{required:!0,className:n.textField,label:"Item Name",id:"itemName",name:"item_name",placeholder:"Item Name",fullWidth:!0,margin:"normal",value:t?t.item_name:"",variant:"outlined",onChange:function(t){return e.handleTextFieldChange(t,"item_name")}}),m.a.createElement(p.p,{required:!0,name:"quantity",className:n.textField,label:"Quantity",id:"quantity",placeholder:"Item Quantity",fullWidth:!0,value:t?t.quantity:"",margin:"normal",variant:"outlined",onChange:function(t){return e.handleTextFieldChange(t,"quantity")}}),m.a.createElement(p.p,{required:!0,name:"unit",className:n.textField,select:!0,label:"Select",fullWidth:!0,margin:"normal",value:t?t.unit:"",SelectProps:{MenuProps:{className:n.menu}},helperText:"Please select your currency",variant:"outlined",onChange:function(t){return e.handleUnitChange(t)}},j.map(function(e){return m.a.createElement(p.m,{key:e,value:e},e)})),m.a.createElement(p.p,{required:!0,name:"category",className:n.textField,select:!0,label:"Select",fullWidth:!0,margin:"normal",value:t?t.category:"",SelectProps:{MenuProps:{className:n.menu}},helperText:"Please select category",variant:"outlined",onChange:function(t){return e.handleCategoryChange(t.target.value)}},x.map(function(e){return m.a.createElement(p.m,{key:e,value:e},e)})),m.a.createElement(p.p,{name:"image_url",className:n.textField,label:"Image Url",type:"url",placeholder:"Image Url",margin:"normal",value:t?t.image_url:"",fullWidth:!0,variant:"outlined",onChange:function(t){return e.handleTextFieldChange(t,"image_url")}}),m.a.createElement(p.b,{type:"submit",className:n.button,color:"secondary",variant:"contained",size:"large",fullWidth:!0},"Submit"))),r=a;return this.props.updateInventory&&(r=m.a.createElement(b.a,null)),this.props.updateInventorySuccess&&(r=m.a.createElement(m.a.Fragment,null,a)),this.props.updateInventoryFail&&(r=m.a.createElement(m.a.Fragment,null,m.a.createElement(p.r,{variant:"h5",color:"error"},"An Error occured while submitting the form"),a)),m.a.createElement(p.j,{item:!0,xs:12,sm:6},m.a.createElement(p.o,{square:!0,color:"secondary"},r))}}]),t}(h.Component);t.default=Object(y.b)(function(e){return{updateInventory:e.inventory.updateInventory,updateInventoryFail:e.inventory.updateInventoryFail,updateInventorySuccess:e.inventory.updateInventorySuccess,inventory:e.inventory.inventory,auth:e.auth}},function(e){return{onSubmitForm:function(t,n,a){return e(g.i(t,n,a))},onUpdateInventoryComplete:function(){return e(g.j())}}})(Object(f.withStyles)(function(e){return{root:{width:"100%",display:"flex",flexWrap:"wrap",padding:"5",boxSizing:"border-box"},textField:{marginRight:e.spacing.unit,marginLeft:e.spacing.unit},button:{marginRight:e.spacing.unit,marginLeft:e.spacing.unit,marginBottom:e.spacing.unit},menu:{width:200}}})(E))}}]);
//# sourceMappingURL=4.f9d500cc.chunk.js.map