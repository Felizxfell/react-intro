(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,,function(e,t,a){e.exports=a(32)},,,,,,,,function(e,t,a){},,function(e,t,a){},,function(e,t,a){},,function(e,t,a){},,function(e,t,a){},,function(e,t,a){},,function(e,t,a){},,function(e,t,a){},,function(e,t,a){},,function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),c=a(5),l=a.n(c),r=(a(14),a(2)),u=a(1),s=function(e,t){var a=o.a.useState(!1),n=Object(u.a)(a,2),c=n[0],l=n[1],r=o.a.useState(!0),s=Object(u.a)(r,2),i=s[0],m=s[1],d=o.a.useState(t),f=Object(u.a)(d,2),E=f[0],v=f[1];o.a.useEffect(function(){setTimeout(function(){try{var a,n=localStorage.getItem(e);n?a=JSON.parse(n):(localStorage.setItem(e,JSON.stringify(t)),a=t),v(a)}catch(c){l(c)}finally{m(!1)}},1e3)});return{item:E,saveItem:function(t){try{localStorage.setItem(e,JSON.stringify(t)),v(t)}catch(c){l(c)}},loading:i,error:c}},i=o.a.createContext(),m=function(e){var t=s("todoList",[]),a=t.item,n=t.saveItem,c=t.loading,l=t.error,m=o.a.useState(""),d=Object(u.a)(m,2),f=d[0],E=d[1],v=o.a.useState(!1),p=Object(u.a)(v,2),g=p[0],b=p[1],h=a.filter(function(e){return!!e.completed}).length,N=a.length,T=[];T=!f.length>=1?a:a.filter(function(e){var t=e.text.toLowerCase(),a=f.toLowerCase();return t.includes(a)});return o.a.createElement(i.Provider,{value:{loading:c,error:l,totalTodos:N,completedTodos:h,searchValue:f,setSearchValue:E,searchedTodos:T,completeTodo:function(e){var t=a.findIndex(function(t){return t.text===e}),o=Object(r.a)(a);o[t].completed=!0,n(o)},deleteTodo:function(e){var t=a.findIndex(function(t){return t.text===e}),o=Object(r.a)(a);o.splice(t,1),n(o)},toggleModal:g,setToggleModal:b,addToDo:function(e){var t=Object(r.a)(a);t.push({text:e,completed:!1}),n(t)}}},e.children)},d=(a(16),function(){var e=o.a.useContext(i),t=e.totalTodos,a=e.completedTodos;return o.a.createElement("h2",{className:"titulo"}," Has complentado ",a," de ",t," To Do's")});a(18);var f=function(){var e=o.a.useContext(i),t=e.searchValue,a=e.setSearchValue;return o.a.createElement("input",{className:"inputsearch",value:t,onChange:function(e){a(e.target.value)},placeholder:"Serach here..."})};a(20);var E=function(e){return o.a.createElement("section",null,o.a.createElement("ul",{className:"lista"},e.children))};a(22);var v=function(e){var t=e.prop,a=e.onComplete,n=e.onDelete;return o.a.createElement("li",{className:"item"},o.a.createElement("span",{className:"icon icon-check ".concat(t.completed&&"icon-check-active"),onClick:a},o.a.createElement("i",{className:"las la-check"})),o.a.createElement("p",{className:"item-p ".concat(t.completed&&"item-p-complete")},t.text),o.a.createElement("span",{className:"delete",onClick:n},o.a.createElement("i",{className:"las la-trash"})))};a(24);var p=function(e){var t=e.setToggleModal;return o.a.createElement("div",{className:"box-boton"},o.a.createElement("button",{className:"boton",onClick:function(){t(function(e){return!e})}},"+"))},g=(a(26),function(){return o.a.createElement("div",{className:"load-container"},o.a.createElement("div",{className:"load-background"},o.a.createElement("div",{className:"bar"}),o.a.createElement("div",{className:"mask thick"}),o.a.createElement("div",{className:"bar"}),o.a.createElement("div",{className:"mask thick"}),o.a.createElement("div",{className:"bar"}),o.a.createElement("div",{className:"mask thick"}),o.a.createElement("div",{className:"bar"})))}),b=function(){return o.a.createElement("div",{className:"sindata-container"},o.a.createElement("p",null,"\xa1Crea tu primer TODO!"))},h=function(){return o.a.createElement("div",{className:"sindata-container"},o.a.createElement("p",null,"Desesp\xe9rate, hubo un error..."))},N=(a(28),function(){var e=o.a.useState(""),t=Object(u.a)(e,2),a=t[0],n=t[1],c=o.a.useContext(i),l=c.addToDo,r=c.setToggleModal;return o.a.createElement("form",{onSubmit:function(e){e.preventDefault(),a.trim()&&(l(a),r(!1))}},o.a.createElement("label",null,"Escribe tu nuevo TODO"),o.a.createElement("textarea",{value:a,onChange:function(e){n(e.target.value)},placeholder:"Escribe un nuevo To Do..."}),o.a.createElement("div",{className:"button-container"},o.a.createElement("button",{type:"button",className:"todoform-button todoform-button-cancel",onClick:function(){r(!1)}},"Cancelar"),o.a.createElement("button",{type:"submit",className:"todoform-button todoform-button-add"},"A\xf1adir")))}),T=a(3),x=a.n(T),k=(a(30),function(e){var t=e.children;return x.a.createPortal(o.a.createElement("div",{className:"modal-container"},o.a.createElement("div",{className:"modal-body"},t)),document.getElementById("modal"))}),C=function(){var e=o.a.useContext(i),t=e.error,a=e.loading,n=e.searchedTodos,c=e.completeTodo,l=e.deleteTodo,r=e.toggleModal,u=e.setToggleModal;return o.a.createElement(o.a.Fragment,null,o.a.createElement(d,null),o.a.createElement(f,null),o.a.createElement(E,null,t&&o.a.createElement(h,null),a&&o.a.createElement(g,null),!a&&!n.length&&o.a.createElement(b,null),n.map(function(e){return o.a.createElement(v,{key:e.text,prop:e,onComplete:function(){return c(e.text)},onDelete:function(){return l(e.text)}})})),r&&o.a.createElement(k,null,o.a.createElement(N,null)),o.a.createElement(p,{setToggleModal:u}))};var O=function(){return o.a.createElement(m,null,o.a.createElement(C,null))};l.a.createRoot(document.getElementById("root")).render(o.a.createElement(O,null))}],[[6,2,1]]]);
//# sourceMappingURL=main.59d1a9a2.chunk.js.map