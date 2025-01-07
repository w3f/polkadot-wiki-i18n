"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[4840],{68188:(e,a,n)=>{n.r(a),n.d(a,{assets:()=>c,contentTitle:()=>r,default:()=>p,frontMatter:()=>l,metadata:()=>t,toc:()=>h});const t=JSON.parse('{"id":"learn/learn-elastic-scaling","title":"Parallel Computing","description":"How the Polkadot Cloud achieves parallel computation to boost throughput.","source":"@site/../docs/learn/learn-elastic-scaling.md","sourceDirName":"learn","slug":"/learn-elastic-scaling","permalink":"/docs/learn-elastic-scaling","draft":false,"unlisted":false,"editUrl":"https://github.com/w3f/polkadot-wiki/edit/master/docs/learn/learn-elastic-scaling.md","tags":[],"version":"current","lastUpdatedBy":"Filippo","lastUpdatedAt":1731316364000,"frontMatter":{"id":"learn-elastic-scaling","title":"Parallel Computing","sidebar_label":"Parallel Computing","description":"How the Polkadot Cloud achieves parallel computation to boost throughput.","keywords":["elastic scaling","parachains","coretime","blockspace","parallel computing"],"slug":"../learn-elastic-scaling"},"sidebar":"docs","previous":{"title":"Coretime for Parachains","permalink":"/docs/learn-guides-coretime-parachains"},"next":{"title":"Parachains","permalink":"/docs/learn-parachains-index"}}');var i=n(74848),s=n(28453),o=n(76732);const l={id:"learn-elastic-scaling",title:"Parallel Computing",sidebar_label:"Parallel Computing",description:"How the Polkadot Cloud achieves parallel computation to boost throughput.",keywords:["elastic scaling","parachains","coretime","blockspace","parallel computing"],slug:"../learn-elastic-scaling"},r=void 0,c={},h=[{value:"Technical Considerations",id:"technical-considerations",level:2}];function d(e){const a={a:"a",code:"code",h2:"h2",p:"p",pre:"pre",strong:"strong",...(0,s.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(o.A,{message:"To fully follow the material on this page, it is recommended to be familiar with the primary stages\nof the [Parachain Protocol](./learn-parachains-protocol)."}),"\n",(0,i.jsxs)(a.p,{children:[(0,i.jsx)(a.a,{href:"https://en.wikipedia.org/wiki/Parallel_computing",children:"Parallel computing"})," involves performing many\ncalculations or processes simultaneously by dividing tasks into sub-tasks that run on multiple\nprocessors or cores. This is essential for high-performance computing tasks, where many operations\nare executed in parallel to speed up processing."]}),"\n",(0,i.jsxs)(a.p,{children:["Polkadot uses ",(0,i.jsx)(a.a,{href:"/docs/learn-async-backing",children:"pipelining"})," and\n",(0,i.jsx)(a.a,{href:"/docs/learn-agile-coretime",children:"multi-threading"})," to increase throughput and achieve concurrency,\nrespectively. Polkadot also provides throughput boost via parallel computation for a single task\nwith ",(0,i.jsx)(a.strong,{children:"elastic scaling"}),": parachains can use multiple cores to include multiple parablocks within\nthe same relay chain block."]}),"\n",(0,i.jsx)(a.p,{children:"The relay chain receives a sequence of parachain blocks on multiple cores, which are validated and\nchecked if all their state roots line up during their inclusion, but assume they\u2019re unrelated\nparachain blocks during backing, availability, and approvals. With elastic scaling implemented, a\nparachain's throughput depends upon its collator infrastructure."}),"\n",(0,i.jsxs)(a.p,{children:["The ",(0,i.jsx)(a.a,{href:"https://github.com/paritytech/polkadot-sdk/issues/1829",children:"elastic scaling implementation"})," will be\nrolled out in multiple phases. In the first phase, elastic scaling is set to work on parachains with\na trusted/permissioned collator set. With this restriction, it is possible to launch elastic scaling\nwithout changing the candidate receipt. After successfully implementing the first phase, changes can\nbe made to the candidate receipt so the collator set can be untrusted/permissionless again. The\nfinal phase will feature full integration with the Cumulus framework, enabling parachains to be\nconfigured to access multiple cores continuously."]}),"\n",(0,i.jsx)(a.p,{children:"Take, for example, a parachain that wants to submit four parablocks to the relay chain. Without\nelastic scaling, it will take 24 seconds to include all of them through one core. Remember that a\ncore is occupied after backing and before inclusion, i.e., for the whole data availability process.\nA block cannot enter a core before the previous block has been declared available."}),"\n",(0,i.jsx)(a.pre,{children:(0,i.jsx)(a.code,{children:"              R1 <----- R2 <----- R3 <----- R4 <----- R5\n\nC1    |P1     B          I\n      |P2                B         I\n      |P3                          B         I\n      |P4                                    B         I\n\n"})}),"\n",(0,i.jsx)(a.p,{children:"The diagram above shows how the backing and inclusion of parablocks (P) happen within the same relay\nchain block (R). With one core (C1), a parablock is included every 6 seconds. Note how P4 is\nincluded after 30 seconds (not 24 seconds) because when P1 was pushed to the relay chain for being\nbacked, there was no previous parablock."}),"\n",(0,i.jsx)(a.p,{children:"With elastic scaling, it will take just 12 seconds (3-second block time) to include all four\nparablocks using two cores."}),"\n",(0,i.jsx)(a.pre,{children:(0,i.jsx)(a.code,{children:"              R1 <----- R2 <----- R3\n\nC1    |P1     B          I\n      |P2                B         I\nC2    |P3     B          I\n      |P4                B         I\n\n"})}),"\n",(0,i.jsx)(a.p,{children:"The diagram above shows how four parablocks are backed and included in the relay chain using two\ncores (C1 and C2). Note how P2 and P4 are included after 18 seconds (not 12 seconds) because when P1\nand P3 were pushed to the relay chain for being backed, there were no other parablocks before them."}),"\n",(0,i.jsx)(a.h2,{id:"technical-considerations",children:"Technical Considerations"}),"\n",(0,i.jsx)(a.p,{children:"If the pace per core on the relay chain will not change (backing and inclusion every 6 seconds per\ncore), on the parachain side, collators will need to increase the parablock production rate to push\nP1 and P2 to the two relay chain cores."}),"\n",(0,i.jsx)(a.p,{children:"Assuming a constant number of cores, from the relay chain side, elastic scaling will not see major\nupgrades as a parachain will use multiple existing cores instead of just one. However, from the\nparachain side, collators must produce more parablocks per unit of time, implying that technical\nspecifications for collators will likely increase."}),"\n",(0,i.jsxs)(a.p,{children:["For more advanced technical challenges, see the\n",(0,i.jsx)(a.a,{href:"https://github.com/paritytech/polkadot-sdk/issues/1829",children:"Elastic Scaling GitHub PR"}),"."]})]})}function p(e={}){const{wrapper:a}={...(0,s.R)(),...e.components};return a?(0,i.jsx)(a,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},76732:(e,a,n)=>{n.d(a,{A:()=>s});var t=n(96540),i=n(74848);const s=function(e){var a,n=e.message,s=(0,t.useState)(!0),o=s[0],l=s[1];return(0,i.jsx)(i.Fragment,{children:o&&(0,i.jsxs)("div",{className:"message-box",children:[(0,i.jsx)("button",{className:"close-button",onClick:function(){l(!1)},children:"\u2716 "}),(0,i.jsx)("div",{className:"message-content",dangerouslySetInnerHTML:{__html:(a=n,a.replace(/\[(.*?)\]\((.*?)\)/g,'<a href="$2">$1</a>'))}})]})})}},28453:(e,a,n)=>{n.d(a,{R:()=>o,x:()=>l});var t=n(96540);const i={},s=t.createContext(i);function o(e){const a=t.useContext(s);return t.useMemo((function(){return"function"==typeof e?e(a):{...a,...e}}),[a,e])}function l(e){let a;return a=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),t.createElement(s.Provider,{value:a},e.children)}}}]);