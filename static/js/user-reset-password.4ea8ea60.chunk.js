(this["webpackJsonpgogo-react"]=this["webpackJsonpgogo-react"]||[]).push([[9],{231:function(e,a,s){"use strict";s.r(a);var t=s(98),r=s(1),n=s.n(r),o=s(124),l=s(125),c=s(155),m=s(215),i=s(216),d=s(122),w=s(68),u=s(127),b=s(33),E=s(94),g=s(92),p=s(5),P=s(110);const N=e=>{const a=e.newPassword,s=e.newPasswordAgain,t={};return s&&a!==s&&(t.newPasswordAgain="Please check your new password"),t};a.default=Object(b.b)(({authUser:e})=>({newPassword:e.newPassword,resetPasswordCode:e.resetPasswordCode,loading:e.loading,error:e.error}),{resetPasswordAction:p.B})(({location:e,history:a,loading:s,error:b,resetPasswordAction:p})=>{const h=Object(r.useState)(""),f=Object(t.a)(h,1)[0],v=Object(r.useState)(""),x=Object(t.a)(v,1)[0];Object(r.useEffect)(()=>{b?P.b.warning(b,"Forgot Password Error",3e3,null,null,""):s||"success"!==f||P.b.success("Please login with your new password.","Reset Password Success",3e3,null,null,"")},[b,s,f]);const y={newPassword:f,newPasswordAgain:x};return n.a.createElement(o.a,{className:"h-100"},n.a.createElement(E.a,{xxs:"12",md:"10",className:"mx-auto my-auto"},n.a.createElement(l.a,{className:"auth-card"},n.a.createElement("div",{className:"position-relative image-side "}),n.a.createElement("div",{className:"form-side"},n.a.createElement(w.b,{to:"/",className:"white"},n.a.createElement("span",{className:"logo-single"})),n.a.createElement(c.a,{className:"mb-4"},n.a.createElement(g.a,{id:"user.reset-password"})),n.a.createElement(u.c,{validate:N,initialValues:y,onSubmit:t=>{if(!s){const s=new URLSearchParams(e.search).get("oobCode");s?""!==t.newPassword&&p({newPassword:t.newPassword,resetPasswordCode:s,history:a}):P.b.warning("Please check your email url.","Reset Password Error",3e3,null,null,"")}}},({errors:e,touched:a})=>n.a.createElement(u.b,{className:"av-tooltip tooltip-label-bottom"},n.a.createElement(m.a,{className:"form-group has-float-label"},n.a.createElement(i.a,null,n.a.createElement(g.a,{id:"user.new-password"})),n.a.createElement(u.a,{className:"form-control",name:"newPassword",type:"password"})),n.a.createElement(m.a,{className:"form-group has-float-label"},n.a.createElement(i.a,null,n.a.createElement(g.a,{id:"user.new-password-again"})),n.a.createElement(u.a,{className:"form-control",name:"newPasswordAgain",type:"password"}),e.newPasswordAgain&&a.newPasswordAgain&&n.a.createElement("div",{className:"invalid-feedback d-block"},e.newPasswordAgain)),n.a.createElement("div",{className:"d-flex justify-content-between align-items-center"},n.a.createElement(w.b,{to:"/user/login"},n.a.createElement(g.a,{id:"user.login-title"})),n.a.createElement(d.a,{color:"primary",className:"btn-shadow btn-multiple-state ".concat(s?"show-spinner":""),size:"lg"},n.a.createElement("span",{className:"spinner d-inline-block"},n.a.createElement("span",{className:"bounce1"}),n.a.createElement("span",{className:"bounce2"}),n.a.createElement("span",{className:"bounce3"})),n.a.createElement("span",{className:"label"},n.a.createElement(g.a,{id:"user.reset-password-button"}))))))))))})},92:function(e,a,s){"use strict";var t=s(1),r=s.n(t),n=s(118),o=s(102);a.a=Object(o.c)(e=>r.a.createElement(n.a,e),{withRef:!1})},94:function(e,a,s){"use strict";s.d(a,"a",(function(){return o})),s.d(a,"b",(function(){return l}));var t=s(1),r=s.n(t),n=s(123);const o=e=>r.a.createElement(n.a,Object.assign({},e,{widths:["xxs","xs","sm","md","lg","xl","xxl"]})),l=({className:e})=>r.a.createElement("div",{className:"separator ".concat(e)})}}]);
//# sourceMappingURL=user-reset-password.4ea8ea60.chunk.js.map