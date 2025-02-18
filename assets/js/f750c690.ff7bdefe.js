"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[3261],{3809:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>r,contentTitle:()=>o,default:()=>h,frontMatter:()=>a,metadata:()=>i,toc:()=>c});const i=JSON.parse('{"id":"learn/learn-nft-pallets","title":"NFT Pallets","description":"Functionalities of the NFT Pallets in the Polkadot Ecosystem.","source":"@site/../docs/learn/learn-nft-pallets.md","sourceDirName":"learn","slug":"/learn-nft-pallets","permalink":"/docs/learn-nft-pallets","draft":false,"unlisted":false,"editUrl":"https://github.com/w3f/polkadot-wiki/edit/master/docs/learn/learn-nft-pallets.md","tags":[],"version":"current","lastUpdatedBy":"electrocosmic","lastUpdatedAt":1739887669000,"frontMatter":{"id":"learn-nft-pallets","title":"NFT Pallets","sidebar_label":"NFT Pallets","description":"Functionalities of the NFT Pallets in the Polkadot Ecosystem.","keywords":["NFT","non-fungible token","NFT 2.0","nfts","NFT pallets"],"slug":"../learn-nft-pallets"},"sidebar":"docs","previous":{"title":"Advanced Staking Concepts","permalink":"/docs/learn-staking-advanced"},"next":{"title":"Cryptography","permalink":"/docs/learn-cryptography"}}');var s=t(74848),l=t(28453);const a={id:"learn-nft-pallets",title:"NFT Pallets",sidebar_label:"NFT Pallets",description:"Functionalities of the NFT Pallets in the Polkadot Ecosystem.",keywords:["NFT","non-fungible token","NFT 2.0","nfts","NFT pallets"],slug:"../learn-nft-pallets"},o=void 0,r={},c=[{value:"NFTs Pallet",id:"nfts-pallet",level:2},{value:"Roles",id:"roles",level:3},{value:"Attributes",id:"attributes",level:3},{value:"Creating a Collection",id:"creating-a-collection",level:3},{value:"Minting an NFT",id:"minting-an-nft",level:3},{value:"Uploading Files and Metadata",id:"uploading-files-and-metadata",level:3},{value:"Using Apillon",id:"using-apillon",level:4},{value:"Alternative - Using Pinata",id:"alternative---using-pinata",level:4},{value:"Other Actions",id:"other-actions",level:3},{value:"Work in Progress",id:"work-in-progress",level:3},{value:"Uniques Pallet",id:"uniques-pallet",level:2}];function d(e){const n={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",h4:"h4",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,l.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.p,{children:["NFT ",(0,s.jsx)(n.a,{href:"/docs/learn-transactions#pallets-and-extrinsics",children:"pallets"})," allow developers to easily implement\nNFT-related actions within their dApp."]}),"\n",(0,s.jsx)(n.p,{children:"Polkadot as a decentralized ecosystem currently has 5 NFT Pallets for developers to choose from:"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Uniques"}),": It is compact, simple and therefore a good candidate for parachains that want native NFT functionality for a  limited number of use cases."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"NFTs"}),": Utilized among others by ",(0,s.jsx)(n.a,{href:"./learn-assets",children:"AssetHub"})," and ",(0,s.jsx)(n.a,{href:"https://mythicalgames.com/",children:"Mythical Games"}),". Has the largest number of NFTs and transactions. It is fairly rich in functionalities and is the pallet of choice for use in a wide range of use cases by dApps that deploy to AssetHub (see ",(0,s.jsx)(n.a,{href:"./learn-nft-projects#kodadot",children:"KodaDot"})," for example)."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Uniques"}),": The first NFT pallet created for Polkadot. It includes features like Nested NFTs, Dynamic NFTs, Re-Fungibile (fractionalised) NFTs, transaction fee sponsoring as well as full interoperability between it's EVM and Substrate. See ",(0,s.jsx)(n.a,{href:"https://unique.network/developer/#why-unique",children:"https://unique.network/developer/#why-unique"})," for a more comprehensive overview."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"ORML"}),": It was nitially created to serve as a simple pallet for NFTs, but was overtaken by the Uniques pallet in adoption and is currently only used by the ",(0,s.jsx)(n.a,{href:"https://acala.network/",children:"Acala parachain"}),"."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"NFT Manager"}),": It is another simple NFT pallet used only by its creator - the ",(0,s.jsx)(n.a,{href:"https://aventus.io/",children:"Aventus Network"}),"."]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["For detailed comparison of pallets see ",(0,s.jsx)(n.a,{href:"https://docs.google.com/presentation/d/1J6kJ5lQSAnHTre3j7-J6fH34kk8TQ4apif-CCHjQo3o/edit?usp=sharing",children:"NFT Pallets in the Polkadot ecosystem"})]}),"\n",(0,s.jsxs)(n.p,{children:["Below are the introductory technical descriptions of the two main pallets - NFTs pallet, used on AssetHub, and Uniques pallet. These two pallets are used by many parachains to date that may wish to implement NFTs. For further information on Unique Network see ",(0,s.jsx)(n.a,{href:"https://unique.network/learn/",children:"NFT Pallets in the Polkadot Ecosystem"}),". ",(0,s.jsx)(n.strong,{children:"ORML"})," and ",(0,s.jsx)(n.strong,{children:"NFT Managers"})," are examples of custom-built NFT pallets for parachain-specific use cases."]}),"\n",(0,s.jsx)(n.h2,{id:"nfts-pallet",children:"NFTs Pallet"}),"\n",(0,s.jsx)(n.admonition,{title:"For Developers Only",type:"info",children:(0,s.jsx)(n.p,{children:"The information presented here below is for developers. A user-friendly portal for NFTs, DEX and\nAssets is under construction."})}),"\n",(0,s.jsxs)(n.p,{children:["NFTs is a\n",(0,s.jsx)(n.a,{href:"https://github.com/paritytech/polkadot-sdk/tree/master/substrate/frame/nfts#readme",children:"FRAME pallet"}),"\nthat provides a multitude of functions to interact with NFTs."]}),"\n",(0,s.jsxs)(n.p,{children:["The pallet comes with a new way to configure NFTs, as well as configure collections and items.\nPallet-level ",(0,s.jsx)(n.a,{href:"https://github.com/paritytech/substrate/pull/12367",children:"feature flags"})," allow disabling\nfunctionalities not needed in the runtime."]}),"\n",(0,s.jsxs)(n.p,{children:["Polkadot JS API for NFTs FRAME pallet can be found\n",(0,s.jsx)(n.a,{href:"https://polkadot.js.org/docs/substrate/extrinsics#nfts",children:"here"}),"."]}),"\n",(0,s.jsx)(n.h3,{id:"roles",children:"Roles"}),"\n",(0,s.jsx)(n.p,{children:"Setting up a collection implies different roles with different permissions:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Owner:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"destroy collection (to destroy the collection, there should be 0 items left)."}),"\n",(0,s.jsx)(n.li,{children:"redeposit: re-evaluate the deposit on some items."}),"\n",(0,s.jsx)(n.li,{children:"set team: change the collection\u2019s Issuer, Admin, Freezer."}),"\n",(0,s.jsx)(n.li,{children:"set collection max supply: set the maximum number of items for a collection."}),"\n",(0,s.jsx)(n.li,{children:"lock collection: this can include making a collection\u2019s items non-transferable, fixing its max\nsupply, and locking collection metadata and attributes."}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Admin:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"set attributes and metadata of a collection."}),"\n",(0,s.jsx)(n.li,{children:"set attributes pre-signed: set attributes for an item by providing the Admin pre-signed\napproval."}),"\n",(0,s.jsxs)(n.li,{children:["lock item properties: lock item metadata and ",(0,s.jsx)(n.a,{href:"#attributes",children:"attributes"}),"."]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Freezer:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"lock item transfer: disallow further item transfers."}),"\n",(0,s.jsx)(n.li,{children:"unlock item transfer: lift a previous lock to transfer an item."}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Issuer"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"mint"}),"\n",(0,s.jsx)(n.li,{children:"force mint (with custom item configuration)."}),"\n",(0,s.jsx)(n.li,{children:"mint pre-signed: mint an item by providing the Issuer pre-signed approval."}),"\n",(0,s.jsx)(n.li,{children:"update mint settings."}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["Those roles can also be set to ",(0,s.jsx)(n.code,{children:"none"})," without the ability to change them back. This is useful when a\ncollection is created and all the items are minted. Now, by setting roles to ",(0,s.jsx)(n.code,{children:"none"})," we remove the\npossibility of minting any more items, changing the metadata, or disallowing some item's transfer."]}),"\n",(0,s.jsx)(n.h3,{id:"attributes",children:"Attributes"}),"\n",(0,s.jsx)(n.p,{children:"An item can hold the following types of attributes:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"System attributes."})," These attributes can only be set or unset by the pallet. Examples include\nlocking an item for runtimes that use the fractionalization pallet. This is also how users can\nmint from a collection if they hold a valid item from another collection (the system attribute\n",(0,s.jsx)(n.code,{children:"UsedToClaim"})," is set)."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Collection owner\u2019s attributes."})," These are attributes that can only be set or unset by the\ncollection's admin."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"User attributes."})," These are attributes used to store various user-defined settings/values that\ncan only be changed by the NFT's owner. No other account can restrict modifying those attributes."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"External attributes."})," These are attributes that an NFT owner can use to allow external services\n(e.g. oracles, smart contracts on another chain, etc..) to set or modify."]}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"creating-a-collection",children:"Creating a Collection"}),"\n",(0,s.jsxs)(n.p,{children:["You can use the NFTs pallet to create NFT collections. In the Polkadot-JS UI, go to Developer >\nExtrinsic and select the ",(0,s.jsx)(n.code,{children:"nfts.create"})," extrinsic. When you create a collection, you must specify who\nthe admin is. Then, under ",(0,s.jsx)(n.code,{children:"config: PalletNftsCollectionConfig"}),", you can configure your collection by\nspecifying different settings:"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"settings"})," you can specify (in a bitflag-format) settings for your collection:"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"Transferrable items"}),": When disabled, the items will be non-transferrable (good for soul-bound\nNFTs),"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"Unlocked metadata"}),": When disabled, the metadata will be locked,"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"Unlocked attributes"}),": When disabled, the attributes in the ",(0,s.jsx)(n.code,{children:"CollectionOwner"})," namespace will be\nlocked,"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"Unlocked max supply"}),": allows to change the max supply until it gets locked (i.e. the\npossibility to change the supply for a limited amount of time),"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"Deposit required"}),": when disabled, no mint deposit will be taken for items. This option can be\nset by a super-user only."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.admonition,{type:"info",children:(0,s.jsxs)(n.p,{children:["Note that currently, Polkadot-JS UI does not support bitflags. Leave the settings field as it is.\nEverything is unlocked by default (bitflag value ",(0,s.jsx)(n.code,{children:"0"}),")."]})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"maxSupply"})," (toggle option) allows you to specify the maximum number of items that can be minted."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"mintSettings: PalletNftsMintSettings"})," allows you to specify different settings for your\ncollection.","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"mintType"})," gives you the possibility to specify who can mint in your collection:","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"\xccssuer"}),": only you can mint in your collection."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"Public"}),": everyone can mint in your collection."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"HoderOf"}),": only holders of items in another collection can mint in your collection. This\nrequires knowledge about the ID of the other collection. This avoids looping through all\nexisting collections and spamming RPC nodes with requests to find available IDs."]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"price"})," (toggle option) allows you to specify the price of the items."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"startBlock"}),"and ",(0,s.jsx)(n.code,{children:"endBlock"})," give you the possibility to specify a time frame during which the\ncollection's configuration is valid (i.e. all options within\n",(0,s.jsx)(n.code,{children:"config: PalletNftsCollectionConfig"}),")."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.a,{href:"https://github.com/paritytech/substrate/pull/12483",children:"other mint settings"})," include:","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"wave minting, for example mint X number of items that go to collection owners and Y number of\nitems for the public"}),"\n",(0,s.jsx)(n.li,{children:"force mint: minting bypassing mint settings"}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.admonition,{type:"info",children:(0,s.jsx)(n.p,{children:"The user can decide to lock an item or collection\u2019s metadata, attributes, and settings. Also, a\nlocking mechanism can prevent unauthorized and unprivileged transfers (unprivileged actions can be\nre-allowed anytime)."})}),"\n",(0,s.jsxs)(n.p,{children:["With all these options, one can decide to modify the price of the collection's items and who can\nmint, receive or buy items in that collection. Time constraints are available with ",(0,s.jsx)(n.code,{children:"startBlock"})," and\n",(0,s.jsx)(n.code,{children:"endBlock"})," parameters. It is thus possible, for example, to create a schedule in which holders of\nitems in collection A (",(0,s.jsx)(n.code,{children:"HolderOf"})," parameter) will be able to claim a limited number of NFTs from\nCollection X (",(0,s.jsx)(n.code,{children:"maxSupply"})," parameter) only within a specific time frame."]}),"\n",(0,s.jsxs)(n.p,{children:["In Collection X, people can mint the number of NFTs they have in Collection A. It's a one-to-one\nratio. So if they have 3 nfts in collection A, they can mint 3 nfts in collection X. Each time they\nuse one nft in Collection A, the said NFT will have an attribute that will block its further use to\nmint in Collection X. But it will be possible to mint in another collection Y if it also uses\ncollection A as a ",(0,s.jsx)(n.code,{children:"HolderOf"}),"."]}),"\n",(0,s.jsx)(n.p,{children:"You can modify the parameters, so anyone can buy more NFTs from Collection X. To buy an NFT you must\npay the item price + transaction fee. Even if the item is free, the transaction fee always apply."}),"\n",(0,s.jsx)(n.p,{children:"This can be useful for events such as Hackathons where participants who bought a ticket receive the\nNFT ticket from Collection A. Then, all holders of at least one item in Collection A (i.e. all\nticket holders) will be given free avatar NFT from Collection X within the event schedule. After the\nevent, any additional remaining items in Collection X can be made available to the public through a\nmarketplace."}),"\n",(0,s.jsx)(n.p,{children:"The requirement to get the free avatar is to hold at least one NFT in Collection A. One can only\nclaim the avatar specifying which NFT (i.e. the ID) they own in Collection A. The same NFT cannot be\nused twice. Holders of multiple NFTs in Collection A (for example, participants in multiple\nHackathons) can claim multiple avatars specific to each event."}),"\n",(0,s.jsx)(n.admonition,{title:"Time frame must be updated",type:"warning",children:(0,s.jsxs)(n.p,{children:["Someone trying to mint an NFT outside the specified time frame will trigger a ",(0,s.jsx)(n.code,{children:"NoConfig"})," error, as\nthe collection\u2019s admin has specified no configuration after the time frame ends. The collection's\nadmin must call the ",(0,s.jsx)(n.code,{children:"updateMintSettings"})," extrinsic and add a new schedule or disable the block\nnumber option."]})}),"\n",(0,s.jsxs)(n.p,{children:["After you minted an NFT, check which NFT IDs you own under which collection. In the Polkadot-JS UI\ngo to Developer > Chain State > Storage, select the ",(0,s.jsx)(n.code,{children:"nfts.account"})," extrinsic, and specify the\naccount owning the NFT and the collection ID. You can also see all your collections by selecting the\n",(0,s.jsx)(n.code,{children:"collectionAccount"})," extrinsic."]}),"\n",(0,s.jsx)(n.p,{children:"When a new collection is created, a new ID will be generated and assigned to it. When a collection\nis destroyed, no one can pick up the collection ID again (including the owner)."}),"\n",(0,s.jsx)(n.h3,{id:"minting-an-nft",children:"Minting an NFT"}),"\n",(0,s.jsxs)(n.p,{children:["You can mint an NFT using the ",(0,s.jsx)(n.code,{children:"nfts.mint"})," extrinsic. You must then specify the following:"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"collection"}),", the collection ID where you want to mint"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"item"}),", the item ID"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"mintTo"}),", the account"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"witnessData"})," (toggle option), you can specify if you own an NFT in another collection"]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"Creating an item usually involves setting some attributes specific to that item."}),"\n",(0,s.jsx)(n.h3,{id:"uploading-files-and-metadata",children:"Uploading Files and Metadata"}),"\n",(0,s.jsx)(n.h4,{id:"using-apillon",children:"Using Apillon"}),"\n",(0,s.jsx)(n.p,{children:"When you have a collection ID and an item ID you need to:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Open an account on ",(0,s.jsx)(n.a,{href:"https://app.apillon.io/",children:"Apillon"})," and create a new project."]}),"\n",(0,s.jsxs)(n.li,{children:["Navigate to ",(0,s.jsx)(n.a,{href:"https://app.apillon.io/dashboard/service/storage",children:"the Apillon Storage service"})," and\ncreate a new storage bucket. Upload the file you want to mint to the bucket."]}),"\n",(0,s.jsxs)(n.li,{children:["After the file has been uploaded and pinned to IPFS, click on the file to open its details and\ncopy the\n",(0,s.jsx)(n.a,{href:"https://docs.ipfs.tech/concepts/content-addressing/#what-is-a-cid",children:"Content Identifier (CID)"}),".\nThis unique string of letters and numbers will act as a marker to link the data uploaded onto\n",(0,s.jsx)(n.a,{href:"https://ipfs.tech/#how",children:"IPFS"})," to the collection or item ID you own."]}),"\n",(0,s.jsx)(n.li,{children:"Prepare the JSON metadata file and add your CID (see below):"}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:'{\n    "name":"Your Collection Name",\n    "description":"Collection\'s Description",\n    "image":"Your Collection CID"\n}\n'})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Upload the metadata file to Apillon Storage and get the updated CID."}),"\n"]}),"\n",(0,s.jsx)(n.h4,{id:"alternative---using-pinata",children:"Alternative - Using Pinata"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Open an account on ",(0,s.jsx)(n.a,{href:"https://www.pinata.cloud/",children:"Pinata"}),"."]}),"\n",(0,s.jsxs)(n.li,{children:["Follow\n",(0,s.jsx)(n.a,{href:"https://docs.pinata.cloud/what-can-i-learn-here/pinning-your-first-file-with-pinata",children:"these steps"}),"\nto upload the file you want to mint."]}),"\n",(0,s.jsxs)(n.li,{children:["After uploading your file, get the\n",(0,s.jsx)(n.a,{href:"https://docs.ipfs.tech/concepts/content-addressing/#what-is-a-cid",children:"Content Identifier (CID)"}),".\nThis unique string of letters and numbers will act as a marker to link the data uploaded onto\n",(0,s.jsx)(n.a,{href:"https://ipfs.tech/#how",children:"IPFS"})," to the collection or item ID you own."]}),"\n",(0,s.jsx)(n.li,{children:"Prepare the metadata file and add your CID (see below):"}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:'{\n    "name":"Your Collection Name",\n    "description":"Collection\'s Description",\n    "image":"Your Collection CID"\n}\n'})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Upload the metadata file to Pinata and get the updated CID."}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["After minting your NFT on the Polkadot-JS UI, you can add the CID. Go to Developer > Extrinsics and\nselect the ",(0,s.jsx)(n.code,{children:"nfts.setCollectionMetadata"})," (for collections) or ",(0,s.jsx)(n.code,{children:"nfts.setMetadata"})," (for single NFTs)\nextrinsic. Under the ",(0,s.jsx)(n.code,{children:"data: Bytes"})," field you can enter the CID or upload the metadata file."]}),"\n",(0,s.jsx)(n.p,{children:"The collection can be created and its item minted before uploading the NFT file and related\nmetadata. The minting process on-chain will assign a collection and item ID to your account. Those\nIDs will later be populated with NFT files, metadata, and attributes. Once you upload the NFT files\nand related data, the above-mentioned extrinsics can be used to update a collection or item."}),"\n",(0,s.jsx)(n.admonition,{title:"NFT/DEX/Asset Portal",type:"info",children:(0,s.jsx)(n.p,{children:'With the new NFT/DEX/Asset portal, all the above steps will be executed "under the hood" and the\nuser will not have to worry about all technicalities.'})}),"\n",(0,s.jsx)(n.h3,{id:"other-actions",children:"Other Actions"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Buying an item up for sale."}),"\n",(0,s.jsx)(n.li,{children:"Burning (i.e., destroy) items or a single item (burning must be signed either by the admin of the\ncollection or the owner)."}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.a,{href:"https://github.com/paritytech/substrate/pull/12702",children:"Smart attributes"})," allow an NFT owner to grant\npermission to other entities (another account, an application, an oracle, etc.) to update\nattributes of an NFT. An example could be that all Polkadot fellowship members have an NFT badge\nthat gets updated over time (sort of a rank) with a consequent upgrade in membership permissions."]}),"\n",(0,s.jsxs)(n.li,{children:["A collection is managed by the\n",(0,s.jsx)(n.a,{href:"/docs/learn-assets#creation-and-management",children:"Issuer, the Admin, and the Freezer"}),". Those roles can\nbe changed anytime."]}),"\n",(0,s.jsx)(n.li,{children:"Setting metadata for an item or collection (metadata includes all essential information about the\nitem or the collection). Metadata could consist of any arbitrary data like the IPFS hash."}),"\n",(0,s.jsx)(n.li,{children:"Setting or re-setting the price of an item."}),"\n",(0,s.jsx)(n.li,{children:"Clearing attributes and metadata of a collection or an item."}),"\n",(0,s.jsx)(n.li,{children:"Changing the owner of an item or a collection."}),"\n",(0,s.jsxs)(n.li,{children:["Transferring an item, as well as creating and canceling transfer approvals of a specific item, or\nan ",(0,s.jsx)(n.a,{href:"https://github.com/paritytech/substrate/pull/12285",children:"atomic swap"}),"."]}),"\n",(0,s.jsx)(n.li,{children:"Transferring ownership of an item."}),"\n",(0,s.jsx)(n.li,{children:"Delegating accounts: Delegated accounts can approve changes to an item's attributes and transfer\nan item. The item owner always has control and can decide to cancel approvals from a delegated\naccount."}),"\n",(0,s.jsx)(n.li,{children:"One can also execute pending atomic swaps created by a counterpart."}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"work-in-progress",children:"Work in Progress"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.a,{href:"https://github.com/paritytech/substrate/pull/12565",children:"NFTs fractionalization"})," will allow the user to:"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Take ownership of an NFT from the ",(0,s.jsx)(n.a,{href:"#nfts-pallet",children:"pallet-nfts"})]}),"\n",(0,s.jsxs)(n.li,{children:["Create a new asset in ",(0,s.jsx)(n.a,{href:"https://polkadot.js.org/docs/substrate/extrinsics#assets",children:"pallet-assets"})]}),"\n",(0,s.jsx)(n.li,{children:"Mint the input amount to the previous owner of the NFT as the beneficiary"}),"\n",(0,s.jsx)(n.li,{children:"Mass minting: Minting multiple items in one single transaction. This will require the user to\nprovide a .csv file with two columns: NFT ID and CID of metadata."}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"uniques-pallet",children:"Uniques Pallet"}),"\n",(0,s.jsx)(n.admonition,{type:"info",children:(0,s.jsxs)(n.p,{children:["The Uniques Pallet is deprecated. Everything related to NFTs will be covered by the\n",(0,s.jsx)(n.a,{href:"#nfts-pallet",children:"NFTs Pallet"}),"."]})}),"\n",(0,s.jsxs)(n.p,{children:["Uniques is a\n",(0,s.jsx)(n.a,{href:"https://github.com/paritytech/polkadot-sdk/tree/master/substrate/frame/uniques",children:"FRAME pallet"}),"\ndeployed on the Asset Hub system parachain. It implements the most basic kind of NFT -- a data\nrecord referencing some metadata. This metadata reference is mutable until frozen, so NFTs and their\nclasses (entities derived from) are mutable unless specifically made immutable by the issuer."]}),"\n",(0,s.jsx)(n.p,{children:"Uniques takes a very bare-bones approach on purpose to keep the Asset Hub chain a simple\nbalance-keeping chain for both fungible and non-fungibles."}),"\n",(0,s.jsxs)(n.p,{children:["These NFTs can be viewed and interacted with on ",(0,s.jsx)(n.a,{href:"https://singular.app",children:"RMRK's Singular platform"}),", by\nswitching the top right menu from Kusama to the Asset Hub."]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"nft-hub",src:t(52991).A+"",width:"2110",height:"617"})}),"\n",(0,s.jsxs)(n.p,{children:["They can also be interacted with directly through the\n",(0,s.jsx)(n.a,{href:"https://polkadot.js.org/apps/?rpc=wss%3A%2F%2Fkusama-asset-hub-rpc.polkadot.io#/extrinsics",children:"extrinsics tab of the Asset Hub"}),":"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"uniques.png",src:t(17147).A+"",width:"997",height:"608"})})]})}function h(e={}){const{wrapper:n}={...(0,l.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},52991:(e,n,t)=>{t.d(n,{A:()=>i});const i=t.p+"assets/images/hub-nft-48ec78c3fcc8199d7d9164959424d5e3.png"},17147:(e,n,t)=>{t.d(n,{A:()=>i});const i=t.p+"assets/images/uniques-cd3bd4a76bd57ef0e79de4a0b36aa237.png"},28453:(e,n,t)=>{t.d(n,{R:()=>a,x:()=>o});var i=t(96540);const s={},l=i.createContext(s);function a(e){const n=i.useContext(l);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),i.createElement(l.Provider,{value:n},e.children)}}}]);