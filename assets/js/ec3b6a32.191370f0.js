"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[8832],{56870:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>h,frontMatter:()=>o,metadata:()=>a,toc:()=>c});const a=JSON.parse('{"id":"learn/learn-nft","title":"NFTs","description":"The NFT Landscape of the Polkadot Ecosystem.","source":"@site/../docs/learn/learn-nft.md","sourceDirName":"learn","slug":"/learn-nft","permalink":"/docs/learn-nft","draft":false,"unlisted":false,"editUrl":"https://github.com/w3f/polkadot-wiki/edit/master/docs/learn/learn-nft.md","tags":[],"version":"current","lastUpdatedBy":"electrocosmic","lastUpdatedAt":1739887653000,"frontMatter":{"id":"learn-nft","title":"NFTs","sidebar_label":"Introduction to NFTs","description":"The NFT Landscape of the Polkadot Ecosystem.","keywords":["NFT","non-fungible token","NFT 2.0"],"slug":"../learn-nft"},"sidebar":"docs","previous":{"title":"Teleporting Assets","permalink":"/docs/learn-teleport"},"next":{"title":"Network Participants","permalink":"/docs/learn-participants-index"}}');var i=n(74848),s=n(28453);const o={id:"learn-nft",title:"NFTs",sidebar_label:"Introduction to NFTs",description:"The NFT Landscape of the Polkadot Ecosystem.",keywords:["NFT","non-fungible token","NFT 2.0"],slug:"../learn-nft"},r=void 0,l={},c=[{value:"Fungibility",id:"fungibility",level:2},{value:"NFT Anatomy",id:"nft-anatomy",level:2},{value:"NFT Purpose",id:"nft-purpose",level:2},{value:"NFT Standards",id:"nft-standards",level:2},{value:"Birth of NFTs - The EVM Domain",id:"birth-of-nfts---the-evm-domain",level:2},{value:"NFTs in Polkadot &amp; Kusama",id:"nfts-in-polkadot--kusama",level:2},{value:"Cross-Chain Transfers",id:"cross-chain-transfers",level:2},{value:"What\u2019s Next From Here?",id:"whats-next-from-here",level:2}];function d(e){const t={a:"a",admonition:"admonition",em:"em",h2:"h2",img:"img",li:"li",p:"p",strong:"strong",ul:"ul",...(0,s.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.p,{children:"This page is a high-level overview of NFTs in the blockchain space and the various approaches to\nNFTs within the Polkadot ecosystem."}),"\n",(0,i.jsx)(t.h2,{id:"fungibility",children:"Fungibility"}),"\n",(0,i.jsx)(t.p,{children:"NFT stands for non-fungible token. Fungibility is defined as interchangeability inside of a group.\nAll valid issued $1 notes are a group to itself. A $1 note is always interchangeable with any other\n$1 note. It is not, however, interchangeable with $20, $50 or $100 dollar notes (these are separate\nnote groups)."}),"\n",(0,i.jsx)(t.p,{children:"A fungible item may be unique. In the currency note example, each issued note has a serial number\nmaking it a unique member of the group"}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{src:"https://www.investopedia.com/thmb/Nr-RLORu5CX_lIWZfLmV5X0eIrc=/613x345/smart/filters:no_upscale%28%29/Clipboard01-d20f6eb9351e4f36a46e11fd87b53b2d.jpg",alt:"one dollar"})}),"\n",(0,i.jsx)(t.p,{children:"A case where a fungible item is not unique is a simple plastic betting chip. Each chip in its\npristine state is indistinguishable from any other chip and each is interchangeable within its own\ngroup."}),"\n",(0,i.jsx)(t.p,{children:"On the other hand, an NFT is unique and has features that allow for its uniqueness."}),"\n",(0,i.jsx)(t.h2,{id:"nft-anatomy",children:"NFT Anatomy"}),"\n",(0,i.jsx)(t.p,{children:"Every NFT has three common components irrespective of the chain it belongs to or originates from\nthat make it unique."}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"Identity"}),": Defined via a property, address or a contract."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"Ownership"}),": Determined via a contract or a wallet address."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"Metadata"}),": Can be a single reference to an off-chain object (digital asset or contract) or, in\ncase of advanced NFTs, an elaborate data structure containing both on-chain data and off-chain\nreferences."]}),"\n"]}),"\n",(0,i.jsx)(t.h2,{id:"nft-purpose",children:"NFT Purpose"}),"\n",(0,i.jsx)(t.p,{children:"What purpose does a unique digital asset provide? The answer to this question lies in the two\ndistinct ways an NFT is utilized."}),"\n",(0,i.jsx)(t.p,{children:"The first is the use of NFTs as a speculative store of value derived from their uniqueness (rarity,\nimplied, or intrinsic worth). This initial novelty aspect of NFTs initiated an era of collectibles\nand tradeables and instantiated the appearance of the mass markets where NFTs were traded as a\ncommodity. This is also recognized as the era of the simple NFT, otherwise known as static NFT. The\nUniques pallet was created to facilitate this implementation of the NFT."}),"\n",(0,i.jsxs)(t.p,{children:["The second implementation is as a utility. As mentioned, when we define an NFT, it can store data\non-chain. By convention, we call this NFT component the NFT\u2019s ",(0,i.jsx)(t.em,{children:"metadata"}),". Generally, an NFT is an\nindependent, sovereign data record. This is where the utility aspect of an NFT lies. An NFT can be a\ndigital key, a collection of documents, an atomic data fragment, or a unique personal set of related\nassets and information that can be owned. An example of NFT utility is the\n",(0,i.jsx)(t.a,{href:"https://kodadot.xyz/ahp/collection/244",children:"OG WUD Burn NFT Collection"})," where each NFT grants some\nbenefits within the ",(0,i.jsx)(t.a,{href:"https://flappywud.lol/",children:"FlappyWUD game"}),"."]}),"\n",(0,i.jsx)(t.p,{children:"These two roles are not mutually exclusive. An NFT can be a store of value only, a value-less\nutility token exclusively, or both at the same time if it has worth on the market as a utility token\nor, inversely, if it is primarily a token of worth with additional utility."}),"\n",(0,i.jsx)(t.p,{children:"It is the utility aspect of the NFTs that has been the driving force behind the development of and\ntransition to the advanced NFT concept central to Polkadot\u2019s NFTs pallet development."}),"\n",(0,i.jsx)(t.h2,{id:"nft-standards",children:"NFT Standards"}),"\n",(0,i.jsxs)(t.p,{children:["Due to its heterogeneous nature, the Polkadot ecosystem supports differing implementations of NFTs.\nPolkadot\u2019s core blockchain technology is based on Substrate. Accordingly, NFTs created in\nsubstrate-based context are called \u201cnative\u201d NFTs. Native NFTs are created through dedicated methods\navailable in pallets, collections of functions written as Wasm code. Polkadot Uniques and NFTs\npallets and Unique Network\u2019s NFT utility pallet bundle provide a way to do this. Here a common\nstandard for metadata may provide direct interoperability and efforts in that direction are being\nmade through the XCM initiative\n(",(0,i.jsx)(t.a,{href:"https://polkadot-fellows.github.io/RFCs/approved/0125-xcm-asset-metadata.html#rfc-0125-xcm-asset-metadata",children:"RFC-0125: XCM Asset Metadata"}),")."]}),"\n",(0,i.jsxs)(t.p,{children:["Polkadot\u2019s Ink! language for writing contracts in Substrate provides a separate mechanism for\ncreating NFTs. Astar has been spearheading this effort and one example of this is their\n",(0,i.jsx)(t.a,{href:"https://github.com/w3f/PSPs/blob/master/PSPs/psp-34.md",children:"PSP34"})," (Polkadot Standards Proposals)\ninitiative for standardizing NFTs using the Contracts pallet."]}),"\n",(0,i.jsx)(t.p,{children:"The availability of Ethereum Virtual Machines (EVM) in the Polkadot ecosystem provides yet another\nway to create and manage NFTs using Solidity contracts just like on the Ethereum network. Such NFTs\nare built in adherence to the corresponding ERC standards adopted from the Ethereum network."}),"\n",(0,i.jsx)(t.h2,{id:"birth-of-nfts---the-evm-domain",children:"Birth of NFTs - The EVM Domain"}),"\n",(0,i.jsx)(t.p,{children:'A general-purpose blockchain is not built to natively support the concept of NFTs. It is only\nnatively aware and optimized for its own native fungible tokens, and implementations built on such a\nchain are essentially "special case smart contracts".'}),"\n",(0,i.jsx)(t.p,{children:'For example, Ethereum is a general-purpose blockchain that does not have the concept of "tokens" at\nall (fungible or not) built-in. Tokens in Ethereum are essentially spreadsheets of information to be\ninterpreted and read in a certain way by various user interfaces via an executable code named a\n\u201csmart contract\u201d. An agreement on the structure of such a construct is declared a standard and is\ndesignated by the Ethereum Request For Comments (ERC) document.'}),"\n",(0,i.jsxs)(t.p,{children:["The core NFT EVM standard is defined in ",(0,i.jsx)(t.a,{href:"https://eips.ethereum.org/EIPS/eip-721",children:"ERC721"}),", but there\nare extended implementations that introduce some aspects of advanced NFT features like\n",(0,i.jsx)(t.a,{href:"https://ethereum.org/en/developers/docs/standards/tokens/erc-1155/",children:"ERC1155"}),"."]}),"\n",(0,i.jsx)(t.p,{children:"This approach\u2019s significant shortcoming is its inability to combine standards implicitly. This\nintroduces the necessity of creating custom contract implementations for specialized use cases where\none might desire combined features. Each ERC that provides an advanced NFT feature is an isolated\nsubset. As will be shown later, this is not the case for Polkadot native NFTs."}),"\n",(0,i.jsx)(t.p,{children:"A blockchain must provide a mechanism for overcoming these limitations to facilitate the creation of\nadvanced NFT tokens, as we will see in the upcoming section."}),"\n",(0,i.jsxs)(t.p,{children:["A typical\n",(0,i.jsx)(t.a,{href:"https://opensea.io/assets/ethereum/0x2127fe7ffce4380459cced92f2d4793f3af094a4/12598",children:"NFT on Ethereum"}),(0,i.jsx)(t.a,{href:"https://wiki.polkadot.network/docs/learn-nft#a-typical-nft-on-ethereum",children:"\u200b"}),"**"]}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{alt:"samurai nft",src:n(1769).A+"",width:"506",height:"507"})}),"\n",(0,i.jsx)(t.p,{children:"For the sake of reference, we can refer to these as static NFTs that are almost exclusively\nimage-based collectibles of varying rarity."}),"\n",(0,i.jsx)(t.h2,{id:"nfts-in-polkadot--kusama",children:"NFTs in Polkadot & Kusama"}),"\n",(0,i.jsx)(t.p,{children:"As mentioned, standardized pallets provide a decentralized processing mechanism through Wasm\ncontracts, specifically optimized for an NFT implementation\u2019s advanced functionality. Two examples\nare the Polkadot NFTs pallet and the Unique Network\u2019s collection of NFT utility pallets. This\napproach allows any parachain in the ecosystem to access advanced NFT features without building a\ncontract framework from scratch."}),"\n",(0,i.jsx)(t.p,{children:"With the introduction of NFT capabilities to the cross-chain messaging format (XCM), a direct\ninter-chain NFT transfer solution is becoming a reality."}),"\n",(0,i.jsxs)(t.p,{children:["A critical aspect of NFT interoperability hinges on the ability of differing networks to agree on a\ncommon metadata format. This greatly simplifies interoperability and removes the need for metadata\nconversion steps. In this regard, an effort is underway to make this a reality in this proposal\n",(0,i.jsx)(t.a,{href:"https://polkadot-fellows.github.io/RFCs/approved/0125-xcm-asset-metadata.html#rfc-0125-xcm-asset-metadata",children:"RFC-0125: XCM Asset Metadata"}),"."]}),"\n",(0,i.jsx)(t.p,{children:"The other option of building a framework of Solidity contracts as the scaffolding for advanced\nfeatures within an EVM is also viable. Still, it is hampered by the necessity of using bridging\nmechanisms for cross-chain transfers and a lack of a derivative NFT solution. This approach exhibits\nmuch less efficient transaction processing than the native substrate solutions."}),"\n",(0,i.jsx)(t.admonition,{type:"info",children:(0,i.jsxs)(t.p,{children:["See ",(0,i.jsx)(t.a,{href:"/docs/learn-nft-projects",children:"this page"})," for more information about specific NFT project on Polkadot\nand Kusama."]})}),"\n",(0,i.jsx)(t.h2,{id:"cross-chain-transfers",children:"Cross-Chain Transfers"}),"\n",(0,i.jsx)(t.p,{children:"Transfer of NFTs across chains is one of the most engaging issues in blockchain. In terms of the\nmechanism through which a transfer of the NFT can occur on the Polkadot network, two distinct\napproaches exist:"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:"Asset teleportation"}),"\n",(0,i.jsx)(t.li,{children:"Asset reservation via sovereign account mechanism - derivative NFTs"}),"\n"]}),"\n",(0,i.jsx)(t.p,{children:"Cross-chain transfers within the Polkadot Substrate ecosystem are exclusively executed through the\nXCM (Cross-Consensus Messaging) system. This system provides native, trustless security at the\nprotocol level, eliminating the need for external bridge solutions. The XCM implementation\nsignificantly enhances security by removing the trustful aspect of the transactions, which is\ntypically required by bridge architectures and represents potential points of failure and security\nrisk in cross-chain communication."}),"\n",(0,i.jsx)(t.p,{children:"NFT transfers can be decomposed into two independently transferable components:"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:"core asset properties, consisting of identity and ownership data, and"}),"\n",(0,i.jsx)(t.li,{children:"optional metadata attributes."}),"\n"]}),"\n",(0,i.jsxs)(t.p,{children:["In certain cross-chain operations, such as staking, complete NFT teleportation is unnecessary. This\nwas demonstrated through a successful\n",(0,i.jsx)(t.a,{href:"https://unique.network/blog/unique-network-cross-chain-nft-proof-of-concept-is-here/",children:"XCM implementation between Unique Network and Acala"}),",\nwhere a derivative NFT was created on the Acala chain representing the original NFT from Unique\nNetwork. The derivative implementation required only core asset properties, as metadata transfer was\nnonessential for staking and collateral use cases where only identity and ownership verification are\nrequired."]}),"\n",(0,i.jsx)(t.p,{children:"Teleportation, i.e., a complete transfer of identity ownership and metadata, may be the optimal\nsolution for a complete asset migration and the only available option for bridging mechanisms."}),"\n",(0,i.jsx)(t.p,{children:"Bridging to and from Substrate chains and EVM chains takes much effort but is a highly desired\nfeature in the NFT industry. Merging the collector and customer base has significant implications,\nso multiple projects focus on making this possible."}),"\n",(0,i.jsx)(t.h2,{id:"whats-next-from-here",children:"What\u2019s Next From Here?"}),"\n",(0,i.jsx)(t.p,{children:"Utility NFTs are at a very early adoption stage."}),"\n",(0,i.jsx)(t.p,{children:"If you consider an NFT an ownable, universal digital encapsulation of data, it has a role as\nsignificant as that of a smart contract. Real-world asset tokenization, tradable digital coupons,\nvirtual digital keys and badges, bundles of utility, resource, and accomplishment tokens, data\nwrappers\u2026 a likely advent of the era of discovery lays ahead."})]})}function h(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},1769:(e,t,n)=>{n.d(t,{A:()=>a});const a=n.p+"assets/images/samurai-830479330323f7feeae0b981479ad9cc.png"},28453:(e,t,n)=>{n.d(t,{R:()=>o,x:()=>r});var a=n(96540);const i={},s=a.createContext(i);function o(e){const t=a.useContext(s);return a.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),a.createElement(s.Provider,{value:t},e.children)}}}]);