(this["webpackJsonpgoit-react-hw-02-phonebook"]=this["webpackJsonpgoit-react-hw-02-phonebook"]||[]).push([[0],{1:function(e,t,n){e.exports={container:"Phonebook_container__16PO1",phonebookContainer:"Phonebook_phonebookContainer__GPtDU",lableContact:"Phonebook_lableContact__3bNdh",inputContact:"Phonebook_inputContact__3fRSI",contactsContainer:"Phonebook_contactsContainer__27UP4",list:"Phonebook_list__2ToeB",item:"Phonebook_item__1RKjj",number:"Phonebook_number__4kMEx",button:"Phonebook_button__3DEbT",findLable:"Phonebook_findLable__2l0GM",find:"Phonebook_find__3EOzE"}},10:function(e){e.exports=JSON.parse('[{"id":"id-1","name":"Rosie Simpson","number":"459-12-56"},{"id":"id-2","name":"Hermione Kline","number":"443-89-12"},{"id":"id-3","name":"Eden Clements","number":"645-17-79"},{"id":"id-4","name":"Annie Copeland","number":"227-91-26"}]')},16:function(e,t,n){},20:function(e,t,n){"use strict";n.r(t);var a=n(3),o=n.n(a),r=n(9),c=n.n(r),i=(n(16),n(11)),s=n(4),u=n(5),l=n(7),b=n(6),d=n(22),m=n(10),h=n(1),j=n.n(h),p=n(2),f=n.n(p),C=n(0);function g(e){var t=e.name,n=e.number;return Object(C.jsxs)("p",{children:[Object(C.jsx)("span",{className:j.a.name,children:t}),":",Object(C.jsx)("span",{className:j.a.number,children:n})]})}g.prototype={name:f.a.string.isRequired,number:f.a.number.isRequired},f.a.checkPropTypes(g);var O=g;function v(e){var t=e.contacts,n=e.deleteContact;return console.log(t),Object(C.jsx)("ul",{className:j.a.list,children:t.map((function(e){var t=e.id,a=e.name,o=e.number;return Object(C.jsxs)("li",{className:j.a.item,children:[Object(C.jsx)(O,{name:a,number:o}),Object(C.jsx)("button",{className:j.a.button,type:"button",onClick:function(){return n(t)},children:"Delete"})]},t)}))})}v.prototype={id:f.a.string.isRequired,name:f.a.string.isRequired,number:f.a.number.isRequired,deleteContact:f.a.func.isRequired},f.a.checkPropTypes(v);var _=v,x=function(e){Object(l.a)(n,e);var t=Object(b.a)(n);function n(){var e;Object(s.a)(this,n);for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return(e=t.call.apply(t,[this].concat(o))).state={name:"",number:""},e.handleChange=function(t){console.log(t.currentTarget.name),"name"===t.currentTarget.name&&e.setState({name:t.currentTarget.value}),"number"===t.currentTarget.name&&e.setState({number:t.currentTarget.value})},e.handleSubmit=function(t){t.preventDefault();var n=e.state,a=n.name,o=n.number;if(console.log(e.props.contacts),e.props.contacts.find((function(e){return e.name===a})))return alert("".concat(a,"is alredy in contacts"));e.props.addContact(a,o),e.setState({name:"",number:""})},e}return Object(u.a)(n,[{key:"render",value:function(){var e=this.state,t=e.name,n=e.number;return Object(C.jsxs)("form",{onSubmit:this.handleSubmit,children:[Object(C.jsxs)("label",{className:j.a.lableContact,children:["Name",Object(C.jsx)("input",{className:j.a.inputContact,type:"text",name:"name",value:t,onChange:this.handleChange,pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",required:!0})]}),Object(C.jsxs)("label",{className:j.a.lableContact,children:["Number",Object(C.jsx)("input",{className:j.a.inputContact,type:"tel",name:"number",value:n,onChange:this.handleChange,pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0446\u0438\u0444\u0440 \u0438 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u043f\u0440\u043e\u0431\u0435\u043b\u044b, \u0442\u0438\u0440\u0435, \u043a\u0440\u0443\u0433\u043b\u044b\u0435 \u0441\u043a\u043e\u0431\u043a\u0438 \u0438 \u043c\u043e\u0436\u0435\u0442 \u043d\u0430\u0447\u0438\u043d\u0430\u0442\u044c\u0441\u044f \u0441 +",required:!0})]}),Object(C.jsx)("button",{className:j.a.button,type:"submit",children:"Add contact"})]})}}]),n}(a.Component);x.defaultProps={name:"",number:""};var k=x;function P(e){var t=e.value,n=e.onChange;return Object(C.jsxs)("label",{className:j.a.findLable,children:["Find contacts by name",Object(C.jsx)("input",{className:j.a.find,type:"text",value:t,onChange:n})]})}P.prototype={filter:f.a.string.isRequired,onChange:f.a.func.isRequired},f.a.checkPropTypes(P);var y=P,N=function(e){Object(l.a)(n,e);var t=Object(b.a)(n);function n(){var e;Object(s.a)(this,n);for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return(e=t.call.apply(t,[this].concat(o))).state={contacts:m,filter:""},e.addContact=function(t,n){var a={id:Object(d.a)(),name:t,number:n};e.setState((function(e){return{contacts:[a].concat(Object(i.a)(e.contacts))}}))},e.changeFilter=function(t){console.log(t.currentTarget.value),e.setState({filter:t.currentTarget.value})},e.getVisibleContact=function(){var t=e.state,n=t.filter,a=t.contacts;console.log(a);var o=n.toLowerCase();return a.filter((function(e){return e.name.toLowerCase().includes(o)}))},e.deleteContact=function(t){e.setState((function(e){return{contacts:e.contacts.filter((function(e){return e.id!==t}))}}))},e}return Object(u.a)(n,[{key:"render",value:function(){var e=this.state.filter,t=this.getVisibleContact();return Object(C.jsxs)("div",{className:j.a.container,children:[Object(C.jsxs)("div",{className:j.a.phonebookContainer,children:[Object(C.jsx)("h1",{children:"Phonebook"}),Object(C.jsx)(k,{addContact:this.addContact,contacts:this.state.contacts})]}),Object(C.jsxs)("div",{className:j.a.contactsContainer,children:[Object(C.jsx)("h2",{children:"Contacts"}),Object(C.jsx)(y,{value:e,onChange:this.changeFilter}),Object(C.jsx)(_,{contacts:t,deleteContact:this.deleteContact})]})]})}}]),n}(a.Component),S=N,T=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,23)).then((function(t){var n=t.getCLS,a=t.getFID,o=t.getFCP,r=t.getLCP,c=t.getTTFB;n(e),a(e),o(e),r(e),c(e)}))};c.a.render(Object(C.jsx)(o.a.StrictMode,{children:Object(C.jsx)(S,{})}),document.getElementById("root")),T()}},[[20,1,2]]]);
//# sourceMappingURL=main.044422c4.chunk.js.map