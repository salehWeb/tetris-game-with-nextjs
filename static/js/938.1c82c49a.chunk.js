"use strict";(self.webpackChunkclient=self.webpackChunkclient||[]).push([[938],{8938:function(e,t,n){n.r(t),n.d(t,{default:function(){return j}});var r=n(5861),s=n(885),c=n(7757),a=n.n(c),i=n(2791),o=n(292),u=n(921),l=n(2426),x=n.n(l),p=n(1830),f=n.n(p),h=n(3853),d=n(184),m=function(e){var t=e.item,n=e.index,c=e.setUsers,u=e.users,l=(0,i.useState)(!1),p=(0,s.Z)(l,2),m=p[0],j=p[1],y=function(){var e=(0,r.Z)(a().mark((function e(t){return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:j(!0),f().fire({title:"Do you want to delete user",showCancelButton:!0,showConfirmButton:!0,confirmButtonText:"Delete"}).then(function(){var e=(0,r.Z)(a().mark((function e(n){return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!n.isConfirmed){e.next=5;break}return e.next=3,(0,o.On)(t).then(function(){var e=(0,r.Z)(a().mark((function e(n){return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f().fire({icon:"success",title:"success",text:"".concat(n.data.msg)});case 2:j(!1),c(u.filter((function(e){return e._id!==t})));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()).catch(function(){var e=(0,r.Z)(a().mark((function e(n){return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f().fire({icon:"error",title:"Filed",text:"".concat(n.data.msg)});case 2:j(!1),c(u.filter((function(e){return e._id!==t})));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}());case 3:e.next=7;break;case 5:j(!1),f().fire("Changes are not saved","","info");case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}());case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return(0,d.jsxs)("tr",{className:"".concat(Math.round(n/2)===n/2?"bg-white hover:bg-gray-50":"bg-gray-100 hover:bg-white"," border-b"),children:[(0,d.jsx)("th",{scope:"row",className:"px-5 py-[10px] font-medium text-gray-900 whitespace-nowrap",children:t.name}),(0,d.jsx)("td",{className:"px-5 py-[10px]",children:t.email}),(0,d.jsx)("td",{className:"px-5 py-[10px]",children:x()(t.createdAt).fromNow()}),m?(0,d.jsx)("td",{onClick:function(){return y(t._id)},className:" px-5 py-[10px] text-lg text-right",children:(0,d.jsx)(h.hT1,{className:"font-medium text-gray-600 hover:underline"})}):(0,d.jsx)("td",{onClick:function(){return y(t._id)},className:" px-5 py-[10px] text-lg text-right",children:(0,d.jsx)(h.hT1,{className:"font-medium cursor-pointer text-red-600  hover:text-red-500"})})]},t._id+n)},j=function(){var e=(0,i.useState)([]),t=(0,s.Z)(e,2),n=t[0],c=t[1],l=function(){var e=(0,r.Z)(a().mark((function e(){return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,o.jR)().then((function(e){c(e.data)}));case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return(0,i.useEffect)((function(){l()}),[]),(0,d.jsx)("div",{className:"min-h-[60vh] flex justify-center items-center",children:n.length>0?(0,d.jsx)("div",{className:"relative overflow-x-auto shadow-md sm:rounded-lg flex ",children:(0,d.jsxs)("table",{className:"w-full text-sm text-left text-gray-500",children:[(0,d.jsx)("thead",{className:"text-xs text-gray-300 uppercase bg-gray-700",children:(0,d.jsxs)("tr",{children:[(0,d.jsx)("th",{scope:"col",className:"px-5 py-[10px]",children:"user name"}),(0,d.jsx)("th",{scope:"col",className:"px-5 py-[10px]",children:"email"}),(0,d.jsx)("th",{scope:"col",className:"px-5 py-[10px]",children:"join at"}),(0,d.jsx)("th",{scope:"col",className:"px-5 py-[10px]",children:(0,d.jsx)("span",{className:"sr-only",children:"Delete"})})]})}),(0,d.jsx)("tbody",{children:n.length>=1&&n.map((function(e,t){return(0,d.jsx)(m,{item:e,index:t,setUsers:c,users:n},e._id)}))})]})}):(0,d.jsx)("div",{className:"flex items-center justify-center max-h-[30vh]",children:(0,d.jsx)(u.aN,{})})})}}}]);
//# sourceMappingURL=938.1c82c49a.chunk.js.map