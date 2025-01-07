"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[1032,3889],{99563:(e,r,n)=>{n.d(r,{A:()=>g});n(96540);var t=n(34164),a=n(93751),u=n(56289),l=n(81430),o=n(22887),i=n(50539),s=n(9303);const c={cardContainer:"cardContainer_fWXF",cardTitle:"cardTitle_rnsV",cardDescription:"cardDescription_PWke"};var d=n(74848);function f(e){var r=e.href,n=e.children;return(0,d.jsx)(u.A,{href:r,className:(0,t.A)("card padding--lg",c.cardContainer),children:n})}function m(e){var r=e.href,n=e.icon,a=e.title,u=e.description;return(0,d.jsxs)(f,{href:r,children:[(0,d.jsxs)(s.A,{as:"h2",className:(0,t.A)("text--truncate",c.cardTitle),title:a,children:[n," ",a]}),u&&(0,d.jsx)("p",{className:(0,t.A)("text--truncate",c.cardDescription),title:u,children:u})]})}function v(e){var r,n,t=e.item,u=(0,a.Nr)(t),o=(n=(0,l.W)().selectMessage,function(e){return n(e,(0,i.T)({message:"1 item|{count} items",id:"theme.docs.DocCard.categoryDescription.plurals",description:"The default description for a category card in the generated index about how many items this category includes"},{count:e}))});return u?(0,d.jsx)(m,{href:u,icon:"\ud83d\uddc3\ufe0f",title:t.label,description:null!=(r=t.description)?r:o(t.items.length)}):null}function h(e){var r,n,t=e.item,u=(0,o.A)(t.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",l=(0,a.cC)(null!=(r=t.docId)?r:void 0);return(0,d.jsx)(m,{href:t.href,icon:u,title:t.label,description:null!=(n=t.description)?n:null==l?void 0:l.description})}function p(e){var r=e.item;switch(r.type){case"link":return(0,d.jsx)(h,{item:r});case"category":return(0,d.jsx)(v,{item:r});default:throw new Error("unknown item type "+JSON.stringify(r))}}function b(e){var r=e.className,n=(0,a.$S)();return(0,d.jsx)(g,{items:n.items,className:r})}function g(e){var r=e.items,n=e.className;if(!r)return(0,d.jsx)(b,Object.assign({},e));var u=(0,a.d1)(r);return(0,d.jsx)("section",{className:(0,t.A)("row",n),children:u.map((function(e,r){return(0,d.jsx)("article",{className:"col col--6 margin-bottom--lg",children:(0,d.jsx)(p,{item:e})},r)}))})}},79329:(e,r,n)=>{n.d(r,{A:()=>l});n(96540);var t=n(34164);const a={tabItem:"tabItem_Ymn6"};var u=n(74848);function l(e){var r=e.children,n=e.hidden,l=e.className;return(0,u.jsx)("div",{role:"tabpanel",className:(0,t.A)(a.tabItem,l),hidden:n,children:r})}},65537:(e,r,n)=>{n.d(r,{A:()=>j});var t=n(96540),a=n(34164),u=n(65627),l=n(56347),o=n(50372),i=n(30604),s=n(11861),c=n(99349);function d(e){var r,n;return null!=(r=null==(n=t.Children.toArray(e).filter((function(e){return"\n"!==e})).map((function(e){if(!e||(0,t.isValidElement)(e)&&((r=e.props)&&"object"==typeof r&&"value"in r))return e;var r;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})))?void 0:n.filter(Boolean))?r:[]}function f(e){var r=e.values,n=e.children;return(0,t.useMemo)((function(){var e=null!=r?r:function(e){return d(e).map((function(e){var r=e.props;return{value:r.value,label:r.label,attributes:r.attributes,default:r.default}}))}(n);return function(e){var r=(0,s.XI)(e,(function(e,r){return e.value===r.value}));if(r.length>0)throw new Error('Docusaurus error: Duplicate values "'+r.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.')}(e),e}),[r,n])}function m(e){var r=e.value;return e.tabValues.some((function(e){return e.value===r}))}function v(e){var r=e.queryString,n=void 0!==r&&r,a=e.groupId,u=(0,l.W6)(),o=function(e){var r=e.queryString,n=void 0!==r&&r,t=e.groupId;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=t?t:null}({queryString:n,groupId:a});return[(0,i.aZ)(o),(0,t.useCallback)((function(e){if(o){var r=new URLSearchParams(u.location.search);r.set(o,e),u.replace(Object.assign({},u.location,{search:r.toString()}))}}),[o,u])]}function h(e){var r,n,a,u,l=e.defaultValue,i=e.queryString,s=void 0!==i&&i,d=e.groupId,h=f(e),p=(0,t.useState)((function(){return function(e){var r,n=e.defaultValue,t=e.tabValues;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!m({value:n,tabValues:t}))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+n+'" but none of its children has the corresponding value. Available values are: '+t.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");return n}var a=null!=(r=t.find((function(e){return e.default})))?r:t[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:l,tabValues:h})})),b=p[0],g=p[1],x=v({queryString:s,groupId:d}),y=x[0],w=x[1],j=(r=function(e){return e?"docusaurus.tab."+e:null}({groupId:d}.groupId),n=(0,c.Dv)(r),a=n[0],u=n[1],[a,(0,t.useCallback)((function(e){r&&u.set(e)}),[r,u])]),A=j[0],I=j[1],N=function(){var e=null!=y?y:A;return m({value:e,tabValues:h})?e:null}();return(0,o.A)((function(){N&&g(N)}),[N]),{selectedValue:b,selectValue:(0,t.useCallback)((function(e){if(!m({value:e,tabValues:h}))throw new Error("Can't select invalid tab value="+e);g(e),w(e),I(e)}),[w,I,h]),tabValues:h}}var p=n(9136);const b={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var g=n(74848);function x(e){var r=e.className,n=e.block,t=e.selectedValue,l=e.selectValue,o=e.tabValues,i=[],s=(0,u.a_)().blockElementScrollPositionUntilNextRender,c=function(e){var r=e.currentTarget,n=i.indexOf(r),a=o[n].value;a!==t&&(s(r),l(a))},d=function(e){var r,n=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":var t,a=i.indexOf(e.currentTarget)+1;n=null!=(t=i[a])?t:i[0];break;case"ArrowLeft":var u,l=i.indexOf(e.currentTarget)-1;n=null!=(u=i[l])?u:i[i.length-1]}null==(r=n)||r.focus()};return(0,g.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.A)("tabs",{"tabs--block":n},r),children:o.map((function(e){var r=e.value,n=e.label,u=e.attributes;return(0,g.jsx)("li",Object.assign({role:"tab",tabIndex:t===r?0:-1,"aria-selected":t===r,ref:function(e){i.push(e)},onKeyDown:d,onClick:c},u,{className:(0,a.A)("tabs__item",b.tabItem,null==u?void 0:u.className,{"tabs__item--active":t===r}),children:null!=n?n:r}),r)}))})}function y(e){var r=e.lazy,n=e.children,u=e.selectedValue,l=(Array.isArray(n)?n:[n]).filter(Boolean);if(r){var o=l.find((function(e){return e.props.value===u}));return o?(0,t.cloneElement)(o,{className:(0,a.A)("margin-top--md",o.props.className)}):null}return(0,g.jsx)("div",{className:"margin-top--md",children:l.map((function(e,r){return(0,t.cloneElement)(e,{key:r,hidden:e.props.value!==u})}))})}function w(e){var r=h(e);return(0,g.jsxs)("div",{className:(0,a.A)("tabs-container",b.tabList),children:[(0,g.jsx)(x,Object.assign({},r,e)),(0,g.jsx)(y,Object.assign({},r,e))]})}function j(e){var r=(0,p.A)();return(0,g.jsx)(w,Object.assign({},e,{children:d(e.children)}),String(r))}},81430:(e,r,n)=>{n.d(r,{W:()=>s});var t=n(96540),a=n(40797),u=["zero","one","two","few","many","other"];function l(e){return u.filter((function(r){return e.includes(r)}))}var o={locale:"en",pluralForms:l(["one","other"]),select:function(e){return 1===e?"one":"other"}};function i(){var e=(0,a.A)().i18n.currentLocale;return(0,t.useMemo)((function(){try{return r=e,n=new Intl.PluralRules(r),{locale:r,pluralForms:l(n.resolvedOptions().pluralCategories),select:function(e){return n.select(e)}}}catch(t){return console.error('Failed to use Intl.PluralRules for locale "'+e+'".\nDocusaurus will fallback to the default (English) implementation.\nError: '+t.message+"\n"),o}var r,n}),[e])}function s(){var e=i();return{selectMessage:function(r,n){return function(e,r,n){var t=e.split("|");if(1===t.length)return t[0];t.length>n.pluralForms.length&&console.error("For locale="+n.locale+", a maximum of "+n.pluralForms.length+" plural forms are expected ("+n.pluralForms.join(",")+"), but the message contains "+t.length+": "+e);var a=n.select(r),u=n.pluralForms.indexOf(a);return t[Math.min(u,t.length-1)]}(n,r,e)}}}},28453:(e,r,n)=>{n.d(r,{R:()=>l,x:()=>o});var t=n(96540);const a={},u=t.createContext(a);function l(e){const r=t.useContext(u);return t.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function o(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:l(e.components),t.createElement(u.Provider,{value:r},e.children)}}}]);