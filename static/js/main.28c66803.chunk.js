(this["webpackJsonpgoit-react-hw-02-phonebook"]=this["webpackJsonpgoit-react-hw-02-phonebook"]||[]).push([[0],[,,,,function(t,e,n){t.exports={item:"ContactItem_item__2UQfu",name:"ContactItem_name__o3UvV",number:"ContactItem_number__3kk0G",button:"ContactItem_button__2EYmf",buttonDelete:"ContactItem_buttonDelete__3M5AN"}},,function(t,e,n){t.exports={section:"Section_section__1M-6N",card:"Section_card__X4bkV",title:"Section_title__2w7VU"}},function(t,e,n){t.exports={form:"ContactsInputForm_form__2GhfW",label:"ContactsInputForm_label__3wETq"}},,function(t,e,n){t.exports={title:"Filter_title__2YfVF",input:"Filter_input__83fOf"}},,function(t,e,n){t.exports={button:"Button_button__yZ-NJ",buttonDelete:"Button_buttonDelete__1fK3O"}},function(t,e,n){t.exports={list:"Contacts_list__1V_PZ"}},function(t,e,n){t.exports={title:"Notification_title__2yjhm"}},,,,,,,,,function(t,e,n){},function(t,e,n){"use strict";n.r(e);var a=n(1),c=n(10),r=n.n(c),i=n(15),o=n(2),s=n(6),l=n.n(s),u=n(0),m=function(t){var e=t.title,n=t.children;return Object(u.jsx)("div",{className:l.a.section,children:Object(u.jsxs)("div",{className:l.a.card,children:[Object(u.jsx)("h2",{className:l.a.title,children:e}),n]})})};m.defaultProps={title:"",children:[]};var b=m,j=n(25),d=n(11),f=n.n(d),_=function(t){var e=t.title,n=t.type;return Object(u.jsx)("button",{className:f.a.button,type:n,children:e})};_.defaultProps={title:"Button submit",type:"submit"};var p=_,x=n(7),O=n.n(x),h=function(t){var e=t.contacts,n=t.onSubmitForm,c=Object(a.useState)(""),r=Object(o.a)(c,2),i=r[0],s=r[1],l=Object(a.useState)(""),m=Object(o.a)(l,2),b=m[0],d=m[1],f=function(t){var e=t.target,n=e.value;"name"===e.name?s(n):d(n)};return Object(u.jsxs)("form",{className:O.a.form,onSubmit:function(t){if(t.preventDefault(),b&&i){var a=i.toLowerCase().trim();if(e.find((function(t){return t.name.toLowerCase().includes(a)})))alert("".concat(i," is already in contacts"));else{var c={id:Object(j.a)(),name:i,number:b};n(c),s(""),d("")}}},children:[Object(u.jsxs)("label",{className:O.a.label,children:["Name",Object(u.jsx)("input",{type:"text",name:"name",value:i,placeholder:"Enter contact",onChange:f})]}),Object(u.jsxs)("label",{className:O.a.label,children:["Number",Object(u.jsx)("input",{type:"tel",name:"number",value:b,placeholder:"Enter number phone",onChange:f})]}),Object(u.jsx)(p,{title:"Add contact"})]})},v=n(9),N=n.n(v),C=function(t){var e=t.text,n=t.filter,a=t.onInputFindChange;return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)("p",{className:N.a.title,children:e}),Object(u.jsx)("input",{className:N.a.input,type:"text",name:"filter",value:n,onChange:function(t){var e=t.target.value;a(e)}})]})};C.defaultProps={text:"",filter:""};var g=C,F=n(14),y=n(4),S=n.n(y),D=function(t){var e=t.name,n=t.number,a=t.id,c=t.onDelete;return Object(u.jsxs)("li",{className:S.a.item,children:[Object(u.jsx)(F.a,{}),Object(u.jsxs)("span",{className:S.a.name,children:[e,":"]}),Object(u.jsx)("span",{className:S.a.number,children:n}),Object(u.jsx)("button",{className:S.a.buttonDelete,type:"button",onClick:function(){return c(a)},children:"Delete"})]})},w=n(12),I=n.n(w),k=function(t){var e=t.contacts,n=t.onDelete;return Object(u.jsx)("ul",{className:I.a.list,children:e.map((function(t){var e=t.id,a=t.name,c=t.number;return Object(u.jsx)(u.Fragment,{children:Object(u.jsx)(D,{id:e,name:a,number:c,onDelete:n},e)})}))})},E=n(13),P=n.n(E),V=function(t){var e=t.message;return Object(u.jsx)("p",{className:P.a.title,children:e})};V.defaultProps={message:""};var B=V,L=function(){var t=Object(a.useState)([{id:"id-1",name:"Rosie Simpson",number:"459-12-56"},{id:"id-2",name:"Hermione Kline",number:"443-89-12"},{id:"id-3",name:"Eden Clements",number:"645-17-79"},{id:"id-4",name:"Annie Copeland",number:"227-91-26"}]),e=Object(o.a)(t,2),n=e[0],c=e[1],r=Object(a.useState)(""),s=Object(o.a)(r,2),l=s[0],m=s[1];return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)(b,{title:"Phonebook",children:Object(u.jsx)(h,{contacts:n,onSubmitForm:function(t){c((function(e){return[].concat(Object(i.a)(e),[t])})),m("")}})}),Object(u.jsx)(b,{title:"Contacts",children:n.length>0?Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)(g,{text:"Find contacts by name",filter:l,onInputFindChange:function(t){return m(t.trim())}}),Object(u.jsx)(k,{contacts:function(){var t=l.toLowerCase();return n.filter((function(e){return e.name.toLowerCase().includes(t)}))}(),onDelete:function(t){return c((function(e){return e.filter((function(e){return e.id!==t}))}))}})]}):Object(u.jsx)(B,{message:"No contacts"})})]})};n(21),n(22);r.a.render(Object(u.jsx)(a.StrictMode,{children:Object(u.jsx)(L,{})}),document.getElementById("root"))}],[[23,1,2]]]);
//# sourceMappingURL=main.28c66803.chunk.js.map