"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[4994],{15680:(e,t,a)=>{a.d(t,{xA:()=>u,yg:()=>g});var n=a(96540);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=n.createContext({}),c=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},u=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=c(a),p=r,g=d["".concat(l,".").concat(p)]||d[p]||m[p]||o;return a?n.createElement(g,i(i({ref:t},u),{},{components:a})):n.createElement(g,i({ref:t},u))}));function g(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=p;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[d]="string"==typeof e?e:r,i[1]=s;for(var c=2;c<o;c++)i[c]=a[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}p.displayName="MDXCreateElement"},3514:(e,t,a)=>{a.d(t,{A:()=>y});var n=a(96540),r=a(20053),o=a(84142),i=a(75489),s=a(16654),l=a(21312);const c={cardContainer:"cardContainer_fWXF",cardTitle:"cardTitle_rnsV",cardDescription:"cardDescription_PWke"};function u(e){var t=e.href,a=e.children;return n.createElement(i.A,{href:t,className:(0,r.A)("card padding--lg",c.cardContainer)},a)}function d(e){var t=e.href,a=e.icon,o=e.title,i=e.description;return n.createElement(u,{href:t},n.createElement("h2",{className:(0,r.A)("text--truncate",c.cardTitle),title:o},a," ",o),i&&n.createElement("p",{className:(0,r.A)("text--truncate",c.cardDescription),title:i},i))}function m(e){var t,a=e.item,r=(0,o._o)(a);return r?n.createElement(d,{href:r,icon:"\ud83d\uddc3\ufe0f",title:a.label,description:null!=(t=a.description)?t:(0,l.T)({message:"{count} items",id:"theme.docs.DocCard.categoryDescription",description:"The default description for a category card in the generated index about how many items this category includes"},{count:a.items.length})}):null}function p(e){var t,a,r=e.item,i=(0,s.A)(r.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",l=(0,o.cC)(null!=(t=r.docId)?t:void 0);return n.createElement(d,{href:r.href,icon:i,title:r.label,description:null!=(a=r.description)?a:null==l?void 0:l.description})}function g(e){var t=e.item;switch(t.type){case"link":return n.createElement(p,{item:t});case"category":return n.createElement(m,{item:t});default:throw new Error("unknown item type "+JSON.stringify(t))}}function f(e){var t=e.className,a=(0,o.$S)();return n.createElement(y,{items:a.items,className:t})}function y(e){var t=e.items,a=e.className;if(!t)return n.createElement(f,e);var i=(0,o.d1)(t);return n.createElement("section",{className:(0,r.A)("row",a)},i.map((function(e,t){return n.createElement("article",{key:t,className:"col col--6 margin-bottom--lg"},n.createElement(g,{item:e}))})))}},31361:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>d,contentTitle:()=>c,default:()=>f,frontMatter:()=>l,metadata:()=>u,toc:()=>m});var n=a(58168),r=a(98587),o=(a(96540),a(15680)),i=a(3514),s=["components"],l={id:"kusama-getting-started",title:"Interact with Kusama",sidebar_label:"Home",description:"Reference point for Kusama content.",keywords:["getting started","introduction","kusama","interact"],slug:"../../kusama-getting-started"},c=void 0,u={unversionedId:"general/kusama/kusama-getting-started",id:"general/kusama/kusama-getting-started",title:"Interact with Kusama",description:"Reference point for Kusama content.",source:"@site/../docs/general/kusama/kusama-getting-started.md",sourceDirName:"general/kusama",slug:"/kusama-getting-started",permalink:"/docs/kusama-getting-started",draft:!1,editUrl:"https://github.com/w3f/polkadot-wiki/edit/master/docs/general/kusama/kusama-getting-started.md",tags:[],version:"current",lastUpdatedBy:"Filippo",lastUpdatedAt:1725372361,formattedLastUpdatedAt:"Sep 3, 2024",frontMatter:{id:"kusama-getting-started",title:"Interact with Kusama",sidebar_label:"Home",description:"Reference point for Kusama content.",keywords:["getting started","introduction","kusama","interact"],slug:"../../kusama-getting-started"},sidebar:"docs",previous:{title:"Voting for Councillors",permalink:"/docs/maintain/maintain-guides-how-to-vote-councillor"},next:{title:"Timeline",permalink:"/docs/kusama-timeline"}},d={},m=[{value:"Polkadot&#39;s Canary Network",id:"polkadots-canary-network",level:3},{value:"What can I do with my KSM?",id:"what-can-i-do-with-my-ksm",level:3},{value:"Kusama Gifts",id:"kusama-gifts",level:3}],p={toc:m},g="wrapper";function f(e){var t=e.components,a=(0,r.A)(e,s);return(0,o.yg)(g,(0,n.A)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,o.yg)("h3",{id:"polkadots-canary-network"},"Polkadot's Canary Network"),(0,o.yg)("p",null,"Kusama is a ",(0,o.yg)("em",{parentName:"p"},"canary network")," for Polkadot; an earlier release of the code that is available first\nand holds real economic value. For developers, Kusama is a proving ground for runtime upgrades,\non-chain governance, and parachains."),(0,o.yg)("admonition",{title:"No Promises",type:"info"},(0,o.yg)("p",{parentName:"admonition"},"Kusama is owned by those who hold the Kusama tokens (KSM). There's no central kill switch and all\nchanges are made through the protocol's on-chain governance."),(0,o.yg)("p",{parentName:"admonition"},"The network is a permissionless and anyone can come along and start using it. Those who participated\nin the Polkadot sale can claim a proportional amount of KSM through the\n",(0,o.yg)("a",{parentName:"p",href:"/docs/learn-guides-claims"},"Kusama Claims process"),"."),(0,o.yg)("p",{parentName:"admonition"},"Kusama is experimental. ",(0,o.yg)("strong",{parentName:"p"},"Expect Chaos"),".")),(0,o.yg)("admonition",{title:"As a KSM holder",type:"tip"},(0,o.yg)("p",{parentName:"admonition"},"You can interact with all the features of the Kusama network such as staking (i.e. validating or\nnominating), governance, parachain auctions, basic transfers and everything else.")),(0,o.yg)(i.A,{mdxType:"DocCardList"}),(0,o.yg)("h3",{id:"what-can-i-do-with-my-ksm"},"What can I do with my KSM?"),(0,o.yg)("p",null,"KSM is the native token of the Kusama Network. KSM can be used for transaction fees, staking,\ngovernance, acquisition of a parachain slot and for enabling several key functionalities on Kusama.\nSee more information on ",(0,o.yg)("a",{parentName:"p",href:"/docs/chain-state-values"},"the Chain State Values page"),"."),(0,o.yg)("p",null,"KSM has utility in ",(0,o.yg)("a",{parentName:"p",href:"/docs/learn-polkadot-opengov"},"Kusama's OpenGov")," where you can\n",(0,o.yg)("a",{parentName:"p",href:"/docs/learn-polkadot-opengov#voting-on-a-referendum"},"vote"),",\n",(0,o.yg)("a",{parentName:"p",href:"/docs/learn-polkadot-opengov#multirole-delegation"},"delegate your voting power"),", and place\ndeposits for your referenda or referenda proposed by others. KSM can also enable you to participate\nin programs like the ",(0,o.yg)("a",{parentName:"p",href:"/docs/thousand-validators"},"Thousand Validators Programme"),"."),(0,o.yg)("h3",{id:"kusama-gifts"},"Kusama Gifts"),(0,o.yg)("p",null,"Kusama Gifts provide an easy way to:"),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},"Onboard friends or family who are curious about blockchain but haven\u2019t made the leap yet."),(0,o.yg)("li",{parentName:"ul"},"Share your love of Kusama and send any amount of KSM."),(0,o.yg)("li",{parentName:"ul"},"Say \u2018thank you\u2019 or send someone tokens when you don\u2019t know their address."),(0,o.yg)("li",{parentName:"ul"},"Get friends and family set up to participate in crowdloans.")),(0,o.yg)("p",null,"Learn more about how you can create and send Kusama Gifts\n",(0,o.yg)("a",{parentName:"p",href:"https://polkadot.network/blog/introducing-polkadot-kusama-gifts/"},"here"),"."),(0,o.yg)("p",null,"While Kusama does not support smart contracts natively, building apps on it is still possible (e.g.\n",(0,o.yg)("a",{parentName:"p",href:"https://rmrk.app"},"RMRK.app"),"). If you're interested in diving deeper into ",(0,o.yg)("em",{parentName:"p"},"proper")," development,\nhowever, check out the ",(0,o.yg)("a",{parentName:"p",href:"build-index"},"builders guide"),"."))}f.isMDXComponent=!0}}]);