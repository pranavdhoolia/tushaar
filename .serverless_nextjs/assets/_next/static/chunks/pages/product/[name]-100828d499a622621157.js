_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[15],{"+EKt":function(e,t,r){"use strict";r.r(t),r.d(t,"__N_SSG",(function(){return x}));var n=r("rePB"),c=r("nKUr"),i=r("q1tI"),s=r("VnCb"),o=r("CIUX"),l=r("xY5u"),a=r("QQR7");function d(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function b(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?d(Object(r),!0).forEach((function(t){Object(n.a)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):d(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var u=function(e){var t=Object(i.useState)(1),r=t[0],n=t[1],s=e.product,d=s.price,b=s.image,u=s.name,x=s.description,j=e.context.addToCart;return Object(c.jsx)(c.Fragment,{children:Object(c.jsxs)("div",{className:"py-12 flex flex-1 flex-col md:flex-row w-full my-0 mx-auto",children:[Object(c.jsx)("div",{className:"w-full md:w-1/2 h-112 flex flex-1 bg-light hover:bg-light-200",children:Object(c.jsx)("div",{className:"py-16 p10 flex flex-1 justify-center items-center",children:Object(c.jsx)(l.a,{src:b,alt:"Inventory item",className:"max-h-full"})})}),Object(c.jsxs)("div",{className:"pt-2 px-0 md:px-10 pb-8 w-full md:w-1/2",children:[Object(c.jsx)("h1",{className:"text-5xl font-light",children:u}),Object(c.jsxs)("h2",{className:"text-2xl tracking-wide py-8",children:["$",d]}),Object(c.jsx)("p",{className:"text-gray-600 text-sm",children:x}),Object(c.jsx)("div",{className:"my-6",children:Object(c.jsx)(a.a,{increment:function(){n(r+1)},decrement:function(){1!==r&&n(r-1)},numberOfitems:r})}),Object(c.jsx)(o.a,{full:!0,title:"Add to Cart",onClick:function(){return function(e){e.quantity=r,j(e)}(s)}})]})]})})};var x=!0;t.default=function(e){return Object(c.jsx)(s.a,{children:Object(c.jsx)(s.b.Consumer,{children:function(t){return Object(c.jsx)(u,b(b({},e),{},{context:t}))}})})}},"CH/H":function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/product/[name]",function(){return r("+EKt")}])},CIUX:function(e,t,r){"use strict";r.d(t,"a",(function(){return c}));var n=r("nKUr");r("q1tI");function c(e){var t=e.title,r=e.onClick,c=e.full,i="text-sm font-bold tracking-wider bg-transparent hover:bg-black text-black font-semibold hover:text-white py-4 px-12 border-2 border-black hover:border-transparent";return void 0!==c&&c&&(i="".concat(i," w-full")),Object(n.jsx)("button",{onClick:r,className:i,children:Object(n.jsx)("div",{children:t})})}},QQR7:function(e,t,r){"use strict";r.d(t,"a",(function(){return c}));var n=r("nKUr");r("q1tI");function c(e){var t=e.increment,r=e.decrement,c=e.numberOfitems,i=e.hideQuantityLabel;return Object(n.jsxs)("div",{className:"flex items-center",children:[!i&&Object(n.jsx)("div",{className:"px-2 text-xs",children:"QUANTITY"}),Object(n.jsx)("button",{className:" w-10 h-10 text-xl md:w-8 md:h-8 md:text-sm  cursor-pointer text-center border pb-.5 hover:bg-gray-900 hover:text-white focus:outline-none ",onClick:t,children:"+"}),Object(n.jsx)("p",{className:" w-10 h-10 pt-2 text-base md:w-8 md:h-8 md:pt-2 md:text-xs m-0 border-t border-b text-center",children:c}),Object(n.jsx)("button",{className:" w-10 h-10 text-2xl md:w-8 md:h-8 md:text-sm cursor-pointer text-center border pb-.5 hover:bg-gray-900 hover:text-white focus:outline-none ",onClick:r,children:"-"})]})}}},[["CH/H",0,2,3,1,4,5]]]);