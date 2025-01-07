"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[2047],{55159:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>d,contentTitle:()=>c,default:()=>m,frontMatter:()=>i,metadata:()=>n,toc:()=>u});const n=JSON.parse('{"id":"learn/learn-polkadotjs","title":"Polkadot-JS","description":"Overview of Polkadot-JS.","source":"@site/../docs/learn/learn-polkadotjs.md","sourceDirName":"learn","slug":"/learn-polkadotjs","permalink":"/docs/learn-polkadotjs","draft":false,"unlisted":false,"editUrl":"https://github.com/w3f/polkadot-wiki/edit/master/docs/learn/learn-polkadotjs.md","tags":[],"version":"current","lastUpdatedBy":"Filippo","lastUpdatedAt":1729847256000,"frontMatter":{"id":"learn-polkadotjs","title":"Polkadot-JS","sidebar_label":"Polkadot-JS","description":"Overview of Polkadot-JS.","keywords":["polkadot-js","polkadot js"],"slug":"../learn-polkadotjs"},"sidebar":"docs","previous":{"title":"NPoS Election Algorithms","permalink":"/docs/learn-phragmen"},"next":{"title":"Polkadot-JS Tooling","permalink":"/docs/polkadotjs"}}');var o=r(74848),a=r(28453),s=r(76732),l=r(99563);const i={id:"learn-polkadotjs",title:"Polkadot-JS",sidebar_label:"Polkadot-JS",description:"Overview of Polkadot-JS.",keywords:["polkadot-js","polkadot js"],slug:"../learn-polkadotjs"},c=void 0,d={},u=[];function p(e){return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(s.A,{message:"Polkadot-JS is for developers and power users only. If you need help using the Polkadot-JS UI, you can contact the\n[Polkadot Support Team](https://support.polkadot.network/support/home). For more user-friendly tools\nsee the [wallets](./wallets-index), [apps](./apps-index) and [dashboard](./dashboards-index) pages."}),"\n",(0,o.jsx)(l.A,{})]})}function m(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(p,{...e})}):p()}},76732:(e,t,r)=>{r.d(t,{A:()=>a});var n=r(96540),o=r(74848);const a=function(e){var t,r=e.message,a=(0,n.useState)(!0),s=a[0],l=a[1];return(0,o.jsx)(o.Fragment,{children:s&&(0,o.jsxs)("div",{className:"message-box",children:[(0,o.jsx)("button",{className:"close-button",onClick:function(){l(!1)},children:"\u2716 "}),(0,o.jsx)("div",{className:"message-content",dangerouslySetInnerHTML:{__html:(t=r,t.replace(/\[(.*?)\]\((.*?)\)/g,'<a href="$2">$1</a>'))}})]})})}},99563:(e,t,r)=>{r.d(t,{A:()=>j});r(96540);var n=r(34164),o=r(93751),a=r(56289),s=r(81430),l=r(22887),i=r(50539),c=r(9303);const d={cardContainer:"cardContainer_fWXF",cardTitle:"cardTitle_rnsV",cardDescription:"cardDescription_PWke"};var u=r(74848);function p(e){var t=e.href,r=e.children;return(0,u.jsx)(a.A,{href:t,className:(0,n.A)("card padding--lg",d.cardContainer),children:r})}function m(e){var t=e.href,r=e.icon,o=e.title,a=e.description;return(0,u.jsxs)(p,{href:t,children:[(0,u.jsxs)(c.A,{as:"h2",className:(0,n.A)("text--truncate",d.cardTitle),title:o,children:[r," ",o]}),a&&(0,u.jsx)("p",{className:(0,n.A)("text--truncate",d.cardDescription),title:a,children:a})]})}function f(e){var t,r,n=e.item,a=(0,o.Nr)(n),l=(r=(0,s.W)().selectMessage,function(e){return r(e,(0,i.T)({message:"1 item|{count} items",id:"theme.docs.DocCard.categoryDescription.plurals",description:"The default description for a category card in the generated index about how many items this category includes"},{count:e}))});return a?(0,u.jsx)(m,{href:a,icon:"\ud83d\uddc3\ufe0f",title:n.label,description:null!=(t=n.description)?t:l(n.items.length)}):null}function h(e){var t,r,n=e.item,a=(0,l.A)(n.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",s=(0,o.cC)(null!=(t=n.docId)?t:void 0);return(0,u.jsx)(m,{href:n.href,icon:a,title:n.label,description:null!=(r=n.description)?r:null==s?void 0:s.description})}function k(e){var t=e.item;switch(t.type){case"link":return(0,u.jsx)(h,{item:t});case"category":return(0,u.jsx)(f,{item:t});default:throw new Error("unknown item type "+JSON.stringify(t))}}function g(e){var t=e.className,r=(0,o.$S)();return(0,u.jsx)(j,{items:r.items,className:t})}function j(e){var t=e.items,r=e.className;if(!t)return(0,u.jsx)(g,Object.assign({},e));var a=(0,o.d1)(t);return(0,u.jsx)("section",{className:(0,n.A)("row",r),children:a.map((function(e,t){return(0,u.jsx)("article",{className:"col col--6 margin-bottom--lg",children:(0,u.jsx)(k,{item:e})},t)}))})}},81430:(e,t,r)=>{r.d(t,{W:()=>c});var n=r(96540),o=r(40797),a=["zero","one","two","few","many","other"];function s(e){return a.filter((function(t){return e.includes(t)}))}var l={locale:"en",pluralForms:s(["one","other"]),select:function(e){return 1===e?"one":"other"}};function i(){var e=(0,o.A)().i18n.currentLocale;return(0,n.useMemo)((function(){try{return t=e,r=new Intl.PluralRules(t),{locale:t,pluralForms:s(r.resolvedOptions().pluralCategories),select:function(e){return r.select(e)}}}catch(n){return console.error('Failed to use Intl.PluralRules for locale "'+e+'".\nDocusaurus will fallback to the default (English) implementation.\nError: '+n.message+"\n"),l}var t,r}),[e])}function c(){var e=i();return{selectMessage:function(t,r){return function(e,t,r){var n=e.split("|");if(1===n.length)return n[0];n.length>r.pluralForms.length&&console.error("For locale="+r.locale+", a maximum of "+r.pluralForms.length+" plural forms are expected ("+r.pluralForms.join(",")+"), but the message contains "+n.length+": "+e);var o=r.select(t),a=r.pluralForms.indexOf(o);return n[Math.min(a,n.length-1)]}(r,t,e)}}}},28453:(e,t,r)=>{r.d(t,{R:()=>s,x:()=>l});var n=r(96540);const o={},a=n.createContext(o);function s(e){const t=n.useContext(a);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:s(e.components),n.createElement(a.Provider,{value:t},e.children)}}}]);