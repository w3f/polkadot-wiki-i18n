"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[6011],{46986:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>u,contentTitle:()=>c,default:()=>p,frontMatter:()=>l,metadata:()=>r,toc:()=>d});const r=JSON.parse('{"id":"learn/learn-guides-assets","title":"Polkadot-JS Guides about Asset Hub","description":"Polkadot-JS Guides about Asset Hub.","source":"@site/../docs/learn/learn-guides-assets.md","sourceDirName":"learn","slug":"/learn-guides-assets","permalink":"/docs/learn-guides-assets","draft":false,"unlisted":false,"editUrl":"https://github.com/w3f/polkadot-wiki/edit/master/docs/learn/learn-guides-assets.md","tags":[],"version":"current","lastUpdatedBy":"Filippo","lastUpdatedAt":1729847256000,"frontMatter":{"id":"learn-guides-assets","title":"Polkadot-JS Guides about Asset Hub","sidebar_label":"Asset Hub Guides","description":"Polkadot-JS Guides about Asset Hub.","keywords":["asset hub","assets","statemine","statemint","polkadot-js"],"slug":"../learn-guides-assets"},"sidebar":"docs","previous":{"title":"Polkadot Vault Guides","permalink":"/docs/learn-guides-vault"},"next":{"title":"Create Asset Guides","permalink":"/docs/learn-guides-assets-create"}}');var n=s(74848),a=s(28453),o=s(76732),i=s(99563);const l={id:"learn-guides-assets",title:"Polkadot-JS Guides about Asset Hub",sidebar_label:"Asset Hub Guides",description:"Polkadot-JS Guides about Asset Hub.",keywords:["asset hub","assets","statemine","statemint","polkadot-js"],slug:"../learn-guides-assets"},c=void 0,u={},d=[];function m(e){return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(o.A,{message:"Polkadot-JS is for developers and power users only. If you need help using the Polkadot-JS UI, you can contact the\n[Polkadot Support Team](https://support.polkadot.network/support/home). For more user-friendly tools\nsee the [wallets](./wallets-index), [apps](./apps-index) and [dashboard](./dashboards-index) pages."}),"\n",(0,n.jsx)(i.A,{})]})}function p(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(m,{...e})}):m()}},76732:(e,t,s)=>{s.d(t,{A:()=>a});var r=s(96540),n=s(74848);const a=function(e){var t,s=e.message,a=(0,r.useState)(!0),o=a[0],i=a[1];return(0,n.jsx)(n.Fragment,{children:o&&(0,n.jsxs)("div",{className:"message-box",children:[(0,n.jsx)("button",{className:"close-button",onClick:function(){i(!1)},children:"\u2716 "}),(0,n.jsx)("div",{className:"message-content",dangerouslySetInnerHTML:{__html:(t=s,t.replace(/\[(.*?)\]\((.*?)\)/g,'<a href="$2">$1</a>'))}})]})})}},99563:(e,t,s)=>{s.d(t,{A:()=>x});s(96540);var r=s(34164),n=s(93751),a=s(56289),o=s(81430),i=s(22887),l=s(50539),c=s(9303);const u={cardContainer:"cardContainer_fWXF",cardTitle:"cardTitle_rnsV",cardDescription:"cardDescription_PWke"};var d=s(74848);function m(e){var t=e.href,s=e.children;return(0,d.jsx)(a.A,{href:t,className:(0,r.A)("card padding--lg",u.cardContainer),children:s})}function p(e){var t=e.href,s=e.icon,n=e.title,a=e.description;return(0,d.jsxs)(m,{href:t,children:[(0,d.jsxs)(c.A,{as:"h2",className:(0,r.A)("text--truncate",u.cardTitle),title:n,children:[s," ",n]}),a&&(0,d.jsx)("p",{className:(0,r.A)("text--truncate",u.cardDescription),title:a,children:a})]})}function f(e){var t,s,r=e.item,a=(0,n.Nr)(r),i=(s=(0,o.W)().selectMessage,function(e){return s(e,(0,l.T)({message:"1 item|{count} items",id:"theme.docs.DocCard.categoryDescription.plurals",description:"The default description for a category card in the generated index about how many items this category includes"},{count:e}))});return a?(0,d.jsx)(p,{href:a,icon:"\ud83d\uddc3\ufe0f",title:r.label,description:null!=(t=r.description)?t:i(r.items.length)}):null}function h(e){var t,s,r=e.item,a=(0,i.A)(r.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",o=(0,n.cC)(null!=(t=r.docId)?t:void 0);return(0,d.jsx)(p,{href:r.href,icon:a,title:r.label,description:null!=(s=r.description)?s:null==o?void 0:o.description})}function g(e){var t=e.item;switch(t.type){case"link":return(0,d.jsx)(h,{item:t});case"category":return(0,d.jsx)(f,{item:t});default:throw new Error("unknown item type "+JSON.stringify(t))}}function b(e){var t=e.className,s=(0,n.$S)();return(0,d.jsx)(x,{items:s.items,className:t})}function x(e){var t=e.items,s=e.className;if(!t)return(0,d.jsx)(b,Object.assign({},e));var a=(0,n.d1)(t);return(0,d.jsx)("section",{className:(0,r.A)("row",s),children:a.map((function(e,t){return(0,d.jsx)("article",{className:"col col--6 margin-bottom--lg",children:(0,d.jsx)(g,{item:e})},t)}))})}},81430:(e,t,s)=>{s.d(t,{W:()=>c});var r=s(96540),n=s(40797),a=["zero","one","two","few","many","other"];function o(e){return a.filter((function(t){return e.includes(t)}))}var i={locale:"en",pluralForms:o(["one","other"]),select:function(e){return 1===e?"one":"other"}};function l(){var e=(0,n.A)().i18n.currentLocale;return(0,r.useMemo)((function(){try{return t=e,s=new Intl.PluralRules(t),{locale:t,pluralForms:o(s.resolvedOptions().pluralCategories),select:function(e){return s.select(e)}}}catch(r){return console.error('Failed to use Intl.PluralRules for locale "'+e+'".\nDocusaurus will fallback to the default (English) implementation.\nError: '+r.message+"\n"),i}var t,s}),[e])}function c(){var e=l();return{selectMessage:function(t,s){return function(e,t,s){var r=e.split("|");if(1===r.length)return r[0];r.length>s.pluralForms.length&&console.error("For locale="+s.locale+", a maximum of "+s.pluralForms.length+" plural forms are expected ("+s.pluralForms.join(",")+"), but the message contains "+r.length+": "+e);var n=s.select(t),a=s.pluralForms.indexOf(n);return r[Math.min(a,r.length-1)]}(s,t,e)}}}},28453:(e,t,s)=>{s.d(t,{R:()=>o,x:()=>i});var r=s(96540);const n={},a=r.createContext(n);function o(e){const t=r.useContext(a);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:o(e.components),r.createElement(a.Provider,{value:t},e.children)}}}]);