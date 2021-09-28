(this["webpackJsonpreact-complete-guide"]=this["webpackJsonpreact-complete-guide"]||[]).push([[0],[,,,,,,,,,,,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(8),c=n.n(a),l=(n(14),n(5)),s=n(2),i=n(1),r=n(7),u=(n(15),n(16),n(0)),j=function(e){var t=e.onSaveExpenseData,n=Object(i.useState)(""),a=Object(s.a)(n,2),c=a[0],l=a[1],r=Object(i.useState)(""),j=Object(s.a)(r,2),o=j[0],d=j[1],b=Object(i.useState)(""),x=Object(s.a)(b,2),v=x[0],h=x[1];return Object(u.jsxs)("form",{onSubmit:function(e){e.preventDefault();var n={title:c,amount:o,date:new Date(v)};t(n),l(""),d(""),h("")},children:[Object(u.jsxs)("div",{className:"new-expense__controls",children:[Object(u.jsxs)("div",{className:"new-expense__control",children:[Object(u.jsx)("label",{htmlFor:"title",children:"Title"}),Object(u.jsx)("input",{type:"text",onChange:function(e){l(e.target.value)},value:c})]}),Object(u.jsxs)("div",{className:"new-expense__control",children:[Object(u.jsx)("label",{htmlFor:"amount",children:"Amount"}),Object(u.jsx)("input",{type:"number",min:"0.00",step:"0.01",onChange:function(e){d(e.target.value)},value:o})]}),Object(u.jsxs)("div",{className:"new-expense__control",children:[Object(u.jsx)("label",{htmlFor:"date",children:"Date"}),Object(u.jsx)("input",{type:"date",min:"2019-01-01",max:"2022-12-31",onChange:function(e){h(e.target.value)},value:v})]})]}),Object(u.jsx)("div",{className:"new-expense__actions",children:Object(u.jsx)("button",{type:"submit",children:"Add Expense"})})]})},o=function(e){var t=e.onAddExpense;return Object(u.jsx)("div",{className:"new-expense",children:Object(u.jsx)(j,{onSaveExpenseData:function(e){var n=Object(r.a)(Object(r.a)({},e),{},{id:Math.random().toString()});t(n)}})})},d=(n(18),function(e){var t=e.onChangeFilter,n=e.selected;return Object(u.jsx)("div",{className:"expenses-filter",children:Object(u.jsxs)("div",{className:"expenses-filter__control",children:[Object(u.jsx)("label",{children:"Filter by year"}),Object(u.jsxs)("select",{value:n,onChange:function(e){t(e.target.value)},children:[Object(u.jsx)("option",{value:"2022",children:"2022"}),Object(u.jsx)("option",{value:"2021",children:"2021"}),Object(u.jsx)("option",{value:"2020",children:"2020"}),Object(u.jsx)("option",{value:"2019",children:"2019"})]})]})})}),b=(n(19),function(e){var t="card "+e.className;return Object(u.jsx)("div",{className:t,children:e.children})}),x=(n(20),n(21),function(e){var t=e.date,n=t.toLocaleString("en-US",{month:"long"}),a=t.toLocaleString("en-US",{day:"2-digit"}),c=t.getFullYear();return Object(u.jsxs)("div",{children:[Object(u.jsx)("div",{className:"expense-date__month",children:n}),Object(u.jsx)("div",{className:"expense-date__year",children:c}),Object(u.jsx)("div",{className:"expense-date__day",children:a})]})}),v=(n(22),function(e){var t=e.title,n=e.date,a=e.amount;return Object(u.jsx)("li",{children:Object(u.jsxs)(b,{className:"expense-item",children:[Object(u.jsx)(x,{date:n}),Object(u.jsxs)("div",{className:"expense-item__description",children:[Object(u.jsx)("h2",{children:t}),Object(u.jsxs)("div",{className:"expense-item__price",children:["$",a]})]})]})})}),h=function(e){var t=e.items;return 0===t.length?Object(u.jsx)("h2",{className:"expenses-list__fallback",children:"No expenses found."}):Object(u.jsx)("ul",{className:"expenses-list",children:t.map((function(e){return Object(u.jsx)(v,{title:e.title,amount:e.amount,date:e.date},e.id)}))})},O=n(9),m=(n(23),n(24),function(e){var t=e.label,n=e.value,a=e.maxValue,c="0%";return a>0&&(c=Math.round(n/a*100)+"%"),Object(u.jsxs)("div",{className:"chart-bar",children:[Object(u.jsx)("div",{className:"chart-bar__inner",children:Object(u.jsx)("div",{className:"chart-bar__fill",style:{height:c}})}),Object(u.jsx)("div",{className:"chart-bar__label",children:t})]})}),p=function(e){var t=e.dataPoints,n=t.map((function(e){return e.value})),a=Math.max.apply(Math,Object(l.a)(n));return Object(u.jsx)("div",{className:"chart",children:t.map((function(e){return Object(u.jsx)(m,{value:e.value,maxValue:a,label:e.label},e.label)}))})},f=function(e){var t,n=e.expenses,a=[{label:"Jan",value:0},{label:"Feb",value:0},{label:"Mar",value:0},{label:"Apr",value:0},{label:"May",value:0},{label:"Jun",value:0},{label:"Jul",value:0},{label:"Aug",value:0},{label:"Sep",value:0},{label:"Oct",value:0},{label:"Nov",value:0},{label:"Dec",value:0}],c=Object(O.a)(n);try{for(c.s();!(t=c.n()).done;){var l=t.value;a[l.date.getMonth()].value+=l.amount}}catch(s){c.e(s)}finally{c.f()}return Object(u.jsx)(p,{dataPoints:a})},_=(n(25),function(e){var t=e.items,n=Object(i.useState)("2020"),a=Object(s.a)(n,2),c=a[0],l=a[1],r=t.filter((function(e){return e.date.getFullYear().toString()===c}));return Object(u.jsxs)(b,{className:"expenses",children:[Object(u.jsx)(d,{selected:c,onChangeFilter:function(e){l(e)}}),Object(u.jsx)(f,{expenses:r}),Object(u.jsx)(h,{items:r})]})}),N=[{id:"e1",title:"Toilet Paper",amount:94.12,date:new Date(2020,7,14)},{id:"e2",title:"New TV",amount:799.49,date:new Date(2021,2,12)},{id:"e3",title:"Car Insurance",amount:294.67,date:new Date(2021,2,28)},{id:"e4",title:"New Desk (Wooden)",amount:450,date:new Date(2021,5,12)}],g=function(){var e=Object(i.useState)(N),t=Object(s.a)(e,2),n=t[0],a=t[1];return Object(u.jsxs)("div",{children:[Object(u.jsx)(o,{onAddExpense:function(e){a((function(t){return[e].concat(Object(l.a)(t))}))}}),Object(u.jsx)(_,{items:n})]})};c.a.render(Object(u.jsx)(g,{}),document.getElementById("root"))}],[[26,1,2]]]);
//# sourceMappingURL=main.c0d8d3fe.chunk.js.map