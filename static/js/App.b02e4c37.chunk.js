(this["webpackJsonpgogo-react"]=this["webpackJsonpgogo-react"]||[]).push([[1],{110:function(e,t,a){"use strict";a.d(t,"a",(function(){return N})),a.d(t,"b",(function(){return C}));var n=a(1),s=a.n(n),o=a(243),r=a(235),c=a(89),i=a.n(c);const l=({title:e,type:t,message:a,customClassName:o,timeOut:r,onClick:c,onRequestHide:l})=>{const u=()=>{l&&l()};Object(n.useEffect)(()=>{let e=null;return 0!==r&&(e=setTimeout(u,r)),()=>{e&&clearTimeout(e)}},[]);const m=i()(["notification","notification-".concat(t),o]),d=e?s.a.createElement("h4",{className:"title"},e):null;return s.a.createElement("div",{className:m,onClick:()=>(c&&c(),void u())},s.a.createElement("div",{className:"notification-message",role:"alert"},d,s.a.createElement("div",{className:"message"},a)))};l.defaultProps={type:"info",title:null,message:null,timeOut:5e3,onClick:()=>{},onRequestHide:()=>{},customClassName:""};var u=l;class m extends s.a.Component{constructor(...e){super(...e),this.handleRequestHide=e=>()=>{const t=this.props.onRequestHide;t&&t(e)}}render(){const e=this.props,t=e.notifications,a=e.enterTimeout,n=e.leaveTimeout,c=i()("notification-container",{"notification-container-empty":0===t.length});return s.a.createElement("div",{className:c},s.a.createElement(o.a,null,t.map(e=>{const t=e.id||(new Date).getTime();return s.a.createElement(r.a,{classNames:"notification",key:t,timeout:{exit:n,enter:a}},s.a.createElement(u,{key:t,type:e.type,title:e.title,message:e.message,timeOut:e.timeOut,onClick:e.onClick,onRequestHide:this.handleRequestHide(e),customClassName:e.customClassName}))})))}}m.defaultProps={notifications:[],onRequestHide:()=>{},enterTimeout:400,leaveTimeout:400};var d=m,h=a(162);const p="change",g="primary",f="secondary",b="info",E="success",y="warning",k="error";class v extends h.EventEmitter{constructor(){super(),this.listNotify=[]}create(e){const t={id:"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,e=>{const t=16*Math.random()|0;return("x"===e?t:3&t|8).toString(16)}),type:"info",title:null,message:null,timeOut:5e3,customClassName:""};e.priority?this.listNotify.unshift(Object.assign(t,e)):this.listNotify.push(Object.assign(t,e)),this.emitChange()}primary(e,t,a,n,s,o){this.create({type:g,message:e,title:t,timeOut:a,onClick:n,priority:s,customClassName:o})}secondary(e,t,a,n,s,o){this.create({type:f,message:e,title:t,timeOut:a,onClick:n,priority:s,customClassName:o})}info(e,t,a,n,s,o){this.create({type:b,message:e,title:t,timeOut:a,onClick:n,priority:s,customClassName:o})}success(e,t,a,n,s,o){this.create({type:E,message:e,title:t,timeOut:a,onClick:n,priority:s,customClassName:o})}warning(e,t,a,n,s,o){this.create({type:y,message:e,title:t,timeOut:a,onClick:n,priority:s,customClassName:o})}error(e,t,a,n,s,o){this.create({type:k,message:e,title:t,timeOut:a,onClick:n,priority:s,customClassName:o})}remove(e){this.listNotify=this.listNotify.filter(t=>e.id!==t.id),this.emitChange()}emitChange(){this.emit(p,this.listNotify)}addChangeListener(e){this.addListener(p,e)}removeChangeListener(e){this.removeListener(p,e)}}var C=new v;class x extends s.a.Component{constructor(e){super(e),this.componentWillUnmount=()=>{C.removeChangeListener(this.handleStoreChange)},this.handleStoreChange=e=>{this.setState({notifications:e})},this.handleRequestHide=e=>{C.remove(e)},C.addChangeListener(this.handleStoreChange),this.state={notifications:[]}}render(){const e=this.state.notifications,t=this.props,a=t.enterTimeout,n=t.leaveTimeout;return s.a.createElement(d,{enterTimeout:a,leaveTimeout:n,notifications:e,onRequestHide:this.handleRequestHide})}}x.defaultProps={enterTimeout:400,leaveTimeout:400};var N=x},128:function(e,t){e.exports={"general.copyright":"Gogo React \xa9 2018 All Rights Reserved.","unauthorized.title":"Unauthorized Access Attempt","unauthorized.detail":"You are not authorized to view the page you are trying to access.","user.login-title":"Login","user.register":"Registrarse","user.forgot-password":"Recuperar contrase\xf1a","user.email":"E-mail","user.password":"Contrase\xf1a","user.forgot-password-question":"Recuperar contrase\xf1a","user.fullname":"Nombre","user.login-button":"Ingresar","user.register-button":"Registrarse","user.reset-password-button":"RESET","user.buy":"BUY","user.username":"Username","menu.home":"Home","menu.app":"Home","menu.dashboards":"Dashboards","menu.gogo":"Links","menu.start":"Links","menu.second-menu":"Second Menu","menu.second":"Second","menu.ui":"UI","menu.charts":"Charts","menu.chat":"Chat","menu.survey":"Survey","menu.todo":"Todo","menu.search":"Search","menu.docs":"Docs","menu.blank-page":"Blank Page","pages.error-title":"Ooops... looks like an error occurred!","pages.error-code":"Error code","pages.go-back-home":"GO BACK HOME"}},161:function(e,t){e.exports={"general.copyright":"Gogo React \xa9 Todos los derechos reservados.","unauthorized.title":"Unauthorized Access Attempt","unauthorized.detail":"You are not authorized to view the page you are trying to access.","user.login-title":"Iniciar sesi\xf3n","user.register":"Registro","user.forgot-password":"Se te olvid\xf3 tu contrase\xf1a","user.email":"Email","user.password":"Contrase\xf1a","user.forgot-password-question":"\xbfContrase\xf1a olvidada?","user.fullname":"Nombre completo","user.login-button":"INICIAR SESI\xd3N","user.register-button":"REGISTRO","user.reset-password-button":"REINICIAR","user.buy":"COMPRAR","user.username":"Nombre de Usuario","menu.home":"Inicio","menu.app":"Inicio","menu.dashboards":"Tableros","menu.gogo":"Links","menu.start":"Gotly","menu.second-menu":"Segundo men\xfa","menu.second":"Segundo","menu.ui":"IU","menu.charts":"Gr\xe1ficos","menu.chat":"Chatea","menu.survey":"Encuesta","menu.todo":"Notas","menu.search":"Buscar...","menu.docs":"Docs","menu.blank-page":"Blank Page","layouts.error-title":"Vaya, parece que ha ocurrido un error!","layouts.error-code":"C\xf3digo de error","layouts.go-back-home":"REGRESAR A INICIO"}},234:function(e,t,a){"use strict";a.r(t);var n=a(1),s=a.n(n),o=a(33),r=a(68),c=a(28),i=a(233),l=(a(18),a(3)),u=a(128),m=a.n(u);var d={messages:Object(l.a)({},m.a),locale:"en-US"},h=a(161),p=a.n(h);var g={en:d,es:{messages:Object(l.a)({},p.a),locale:"es-ES"},enrtl:{messages:Object(l.a)({},m.a),locale:"en-US"}},f=a(98),b=a(215),E=a(216),y=a(240),k=a(6),v=a(11);var C=()=>{const e=Object(n.useRef)(),t=Object(n.useState)(!1),a=Object(f.a)(t,2),o=a[0],r=a[1],c=Object(n.useState)(Object(v.a)()),i=Object(f.a)(c,1)[0],l=Object(n.useState)(Object(v.c)()),u=Object(f.a)(l,2),m=u[0],d=u[1];Object(n.useEffect)(()=>{"flat"===m?document.body.classList.remove("rounded"):document.body.classList.add("rounded"),Object(v.h)(m),o&&r(!1)},[m]);const h=t=>{if(o){const a=e.current;if(a.contains(t.target)||a===t.target)return;r(!1)}};Object(n.useEffect)(()=>(["click","touchstart"].forEach(e=>document.addEventListener(e,h,!1)),()=>{["click","touchstart"].forEach(e=>document.removeEventListener(e,h,!1))}),[o]);const p=(e,t)=>{e.preventDefault(),Object(v.f)(t),r(!1),setTimeout(()=>{window.location.reload()},500)};return s.a.createElement("div",{ref:e,className:"theme-colors ".concat(o?"shown":"")},s.a.createElement("div",{className:"p-4"},s.a.createElement("p",{className:"text-muted mb-2"},"Light Theme"),s.a.createElement("div",{className:"d-flex flex-row justify-content-between mb-3"},k.b.slice(0,5).map(e=>s.a.createElement("a",{key:"light.".concat(e),href:"#light.".concat(e),className:"theme-color theme-color-".concat(e," ").concat(i==="light.".concat(e)?"active":""),onClick:t=>p(t,"light.".concat(e))},s.a.createElement("span",null," ")))),s.a.createElement("div",{className:"d-flex flex-row justify-content-between mb-4"},k.b.slice(5,10).map(e=>s.a.createElement("a",{key:"light.".concat(e),href:"#light.".concat(e),className:"theme-color theme-color-".concat(e," ").concat(i==="light.".concat(e)?"active":""),onClick:t=>p(t,"light.".concat(e))},s.a.createElement("span",null," ")))),s.a.createElement("p",{className:"text-muted mb-2"},"Dark Theme"),s.a.createElement("div",{className:"d-flex flex-row justify-content-between mb-3"},k.b.slice(0,5).map(e=>s.a.createElement("a",{key:"dark.".concat(e),href:"#dark.".concat(e),className:"theme-color theme-color-".concat(e," ").concat(i==="dark.".concat(e)?"active":""),onClick:t=>p(t,"dark.".concat(e))},s.a.createElement("span",null," ")))),s.a.createElement("div",{className:"d-flex flex-row justify-content-between"},k.b.slice(5,10).map(e=>s.a.createElement("a",{key:"dark.".concat(e),href:"#dark.".concat(e),className:"theme-color theme-color-".concat(e," ").concat(i==="dark.".concat(e)?"active":""),onClick:t=>p(t,"dark.".concat(e))},s.a.createElement("span",null," "))))),s.a.createElement("div",{className:" pb-0 pl-4 pt-4"},s.a.createElement(b.a,null,s.a.createElement(E.a,{for:"radiusRadio"},"Border Radius "),s.a.createElement("div",null,s.a.createElement(y.a,{type:"radio",name:"radiusRadio",id:"rounded",label:"Rounded",inline:!0,defaultChecked:"rounded"===m,onChange:()=>d("rounded")}),s.a.createElement(y.a,{type:"radio",name:"radiusRadio",id:"flat",label:"Flat",inline:!0,defaultChecked:"flat"===m,onChange:()=>d("flat")})))))},x=a(110),N=a(35);const O=s.a.lazy(()=>Promise.all([a.e(20),a.e(10)]).then(a.bind(null,237))),R=s.a.lazy(()=>Promise.all([a.e(17),a.e(11)]).then(a.bind(null,232))),w=s.a.lazy(()=>a.e(13).then(a.bind(null,238))),j=s.a.lazy(()=>a.e(12).then(a.bind(null,224))),S=s.a.lazy(()=>a.e(12).then(a.bind(null,225)));class L extends s.a.Component{constructor(e){super(e),this.state={links:[]};Object(v.e)().isRtl?(document.body.classList.add("rtl"),document.body.classList.remove("ltr")):(document.body.classList.add("ltr"),document.body.classList.remove("rtl"))}fetchLinks(){fetch("http://localhost:3001/links").then(e=>e.json()).then(e=>{this.setState({links:e})})}componentDidMount(){this.fetchLinks()}render(){const e=this.props.locale,t=g[e];return s.a.createElement("div",{className:"h-100"},s.a.createElement(i.a,{locale:t.locale,messages:t.messages},s.a.createElement(s.a.Fragment,null,s.a.createElement(x.a,null),k.k&&s.a.createElement(C,null),s.a.createElement(n.Suspense,{fallback:s.a.createElement("div",{className:"loading"})},s.a.createElement(r.a,null,s.a.createElement(c.d,null,s.a.createElement(N.a,{path:k.a,component:R,roles:[N.b.Admin,N.b.Editor]}),s.a.createElement(c.b,{path:"/user",render:e=>s.a.createElement(w,e)}),s.a.createElement(c.b,{path:"/error",exact:!0,render:e=>s.a.createElement(j,e)}),s.a.createElement(c.b,{path:"/unauthorized",exact:!0,render:e=>s.a.createElement(S,e)}),s.a.createElement(c.b,{path:"/",exact:!0,render:e=>s.a.createElement(O,e)}),s.a.createElement(r.a,null,this.state.links.map(e=>s.a.createElement(c.b,{key:e.id,path:"/"+e.targetLink,component:()=>(window.location.href=e.sourceLink,null)}))),s.a.createElement(c.a,{to:"/error"})))))))}}t.default=Object(o.b)(({authUser:e,settings:t})=>({currentUser:e.currentUser,locale:t.locale}),{})(L)}}]);
//# sourceMappingURL=App.b02e4c37.chunk.js.map