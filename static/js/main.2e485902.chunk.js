(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,,function(e,t,a){e.exports=a(32)},,,,,,,,function(e,t,a){},,function(e,t,a){},,function(e,t,a){},,function(e,t,a){},,function(e,t,a){},,function(e,t,a){},,function(e,t,a){},,function(e,t,a){},,function(e,t,a){},,function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),l=a(5),o=a.n(l),r=(a(14),a(2)),u=a(1),s=function(e,t){var a=c.a.useState(!1),n=Object(u.a)(a,2),l=n[0],o=n[1],r=c.a.useState(!0),s=Object(u.a)(r,2),i=s[0],m=s[1],d=c.a.useState(t),f=Object(u.a)(d,2),E=f[0],v=f[1];c.a.useEffect(function(){setTimeout(function(){try{var a,n=localStorage.getItem(e);n?a=JSON.parse(n):(localStorage.setItem(e,JSON.stringify(t)),a=t),v(a)}catch(l){o(l)}finally{m(!1)}},1e3)},[]);return{item:E,saveItem:function(t){try{localStorage.setItem(e,JSON.stringify(t)),v(t)}catch(l){o(l)}},loading:i,error:l}},i=c.a.createContext(),m=function(e){var t=s("todoList",[]),a=t.item,n=t.saveItem,l=t.loading,o=t.error,m=c.a.useState(""),d=Object(u.a)(m,2),f=d[0],E=d[1],v=c.a.useState(!1),p=Object(u.a)(v,2),g=p[0],b=p[1],h=a.filter(function(e){return!!e.completed}).length,N=a.length,T=[];T=!f.length>=1?a:a.filter(function(e){var t=e.text.toLowerCase(),a=f.toLowerCase();return t.includes(a)});return c.a.createElement(i.Provider,{value:{loading:l,error:o,totalTodos:N,completedTodos:h,searchValue:f,setSearchValue:E,searchedTodos:T,completeTodo:function(e){var t=a.findIndex(function(t){return t.text===e}),c=Object(r.a)(a);c[t].completed=!c[t].completed,n(c)},deleteTodo:function(e){var t=a.findIndex(function(t){return t.text===e}),c=Object(r.a)(a);c.splice(t,1),n(c)},toggleModal:g,setToggleModal:b,addToDo:function(e){var t=Object(r.a)(a);t.push({text:e,completed:!1}),n(t)}}},e.children)},d=(a(16),function(){var e=c.a.useContext(i),t=e.totalTodos,a=e.completedTodos;return c.a.createElement("h2",{className:"titulo"}," Has complentado ",a," de ",t," To Do's")});a(18);var f=function(){var e=c.a.useContext(i),t=e.searchValue,a=e.setSearchValue;return c.a.createElement("input",{className:"inputsearch",value:t,onChange:function(e){a(e.target.value)},placeholder:"Serach here..."})};a(20);var E=function(e){return c.a.createElement("section",null,c.a.createElement("ul",{className:"lista"},e.children))};a(22);var v=function(e){var t=e.prop,a=e.onComplete,n=e.onDelete;return c.a.createElement("li",{className:"item"},c.a.createElement("span",{className:"icon icon-check ".concat(t.completed?"icon-check-active":"icon-check-false"),onClick:a},c.a.createElement("i",{className:"las la-check"})),c.a.createElement("p",{className:"item-p ".concat(t.completed&&"item-p-complete")},t.text),c.a.createElement("span",{className:"delete",onClick:n},c.a.createElement("i",{className:"las la-trash"})))};a(24);var p=function(e){var t=e.setToggleModal;return c.a.createElement("div",{className:"box-boton"},c.a.createElement("button",{className:"boton",onClick:function(){t(function(e){return!e})}},c.a.createElement("i",{class:"las la-plus"})))},g=(a(26),function(){return c.a.createElement("div",{className:"load-container"},c.a.createElement("div",{className:"load-background"},c.a.createElement("div",{className:"bar"}),c.a.createElement("div",{className:"mask thick"}),c.a.createElement("div",{className:"bar"}),c.a.createElement("div",{className:"mask thick"}),c.a.createElement("div",{className:"bar"}),c.a.createElement("div",{className:"mask thick"}),c.a.createElement("div",{className:"bar"})))}),b=function(){return c.a.createElement("div",{className:"sindata-container"},c.a.createElement("p",null,"\xa1Crea tu primer TODO!"))},h=function(){return c.a.createElement("div",{className:"sindata-container"},c.a.createElement("p",null,"Desesp\xe9rate, hubo un error..."))},N=(a(28),function(){var e=c.a.useState(""),t=Object(u.a)(e,2),a=t[0],n=t[1],l=c.a.useContext(i),o=l.addToDo,r=l.setToggleModal;return c.a.createElement("form",{onSubmit:function(e){e.preventDefault(),a.trim()&&(o(a),r(!1))}},c.a.createElement("label",null,"Escribe tu nuevo TODO"),c.a.createElement("textarea",{value:a,onChange:function(e){n(e.target.value)},placeholder:"Escribe un nuevo To Do..."}),c.a.createElement("div",{className:"button-container"},c.a.createElement("button",{type:"button",className:"todoform-button todoform-button-cancel",onClick:function(){r(!1)}},"Cancelar"),c.a.createElement("button",{type:"submit",className:"todoform-button todoform-button-add"},"A\xf1adir")))}),T=a(3),k=a.n(T),x=(a(30),function(e){var t=e.children;return k.a.createPortal(c.a.createElement("div",{className:"modal-container"},c.a.createElement("div",{className:"modal-body"},t)),document.getElementById("modal"))}),C=function(){var e=c.a.useContext(i),t=e.error,a=e.loading,n=e.searchedTodos,l=e.completeTodo,o=e.deleteTodo,r=e.toggleModal,u=e.setToggleModal;return c.a.createElement(c.a.Fragment,null,c.a.createElement(d,null),c.a.createElement(f,null),c.a.createElement(E,null,t&&c.a.createElement(h,null),a&&c.a.createElement(g,null),!a&&!n.length&&c.a.createElement(b,null),n.map(function(e){return c.a.createElement(v,{key:e.text,prop:e,onComplete:function(){return l(e.text)},onDelete:function(){return o(e.text)}})})),r&&c.a.createElement(x,null,c.a.createElement(N,null)),c.a.createElement(p,{setToggleModal:u}))};var O=function(){return c.a.createElement(m,null,c.a.createElement(C,null))};o.a.createRoot(document.getElementById("root")).render(c.a.createElement(O,null))}],[[6,2,1]]]);
//# sourceMappingURL=main.2e485902.chunk.js.map