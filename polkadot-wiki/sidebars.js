module.exports = {
  docs: [
    {
      type: "category",
      label: "Explore",
      description: 'Wallets and Apps in the Polkadot Ecosystem.',
      link: {
        type: 'generated-index',
        title: 'Explore',
        description: 'Explore Wallets, Apps and Programs in Polkadot and Kusama ecosystems.',
        slug: '/explore-index',
      },
      items: [
        "general/getting-started",
        {
          type: "category",
          label: "Wallets",
          description: 'Beginner friendly wallets with advanced features.',
          link: {
            type: 'generated-index',
            title: 'Wallets',
            description: 'Explore the different wallets and applications in the Polkadot and Kusama ecosystems.',
            slug: '/wallets-index',
          },
          items: [
            {
              type: 'link',
              label: 'Polkadot Ecosystem Wallets',
              description: 'Wallets listed on official Polkadot website.',
              href: 'https://polkadot.network/ecosystem/wallets/',
            },
            "general/wallets-and-extensions",
            "general/ledger",
            "general/polkadot-vault",
          ],
        },
        {
          type: "category",
          label: "Apps",
          description: 'Apps for Staking, Governance, Multisigs, NFTs and many more use cases.',
          link: {
            type: 'generated-index',
            title: 'Apps',
            description: 'Explore the different applications in the Polkadot and Kusama ecosystems.',
            slug: '/apps-index',
          },
          items: [
            {
              type: 'link',
              label: 'Polkadot Ecosystem Apps',
              description: 'Apps listed on official Polkadot website.',
              href: 'https://polkadot.network/ecosystem/dapps/',
            },
            {
              type: 'link',
              label: 'DotAppStore',
              description: 'Apps upvoted by the community.',
              href: 'https://dotappstore.com/',
            },
            "general/staking-apps",
            "general/governance-apps",
            "general/multisig-apps",
            "learn/learn-nft-projects",
            "general/parachains-apps",
          ],
        },
        {
          type: "category",
          label: "Dashboards",
          description: 'Dashboards in the Polkadot Ecosystem.',
          link: {
            type: 'generated-index',
            title: 'Dashboards',
            description: 'Explore the different dashboards in the Polkadot and Kusama ecosystems.',
            slug: '/dashboards-index',
          },
          items: [
            "general/staking-dashboard",
          ],
        },
        {
          type: "category",
          label: "Community & Contributors",
          description: 'Polkadot Community and Wiki Contributors.',
          link: {
            type: 'generated-index',
            title: 'Community & Contributors',
            description: 'Learn about how to participate in the Polkadot community and how to contribute to the Polkadot Wiki.',
            slug: '/community-index',
          },
          items: [
            "general/community",
            "general/contributing",
            "general/contributors",
          ],
        },
        {
          type: "category",
          label: "Programs",
          description: 'Programs for Grants, Bounties, Ambassadors and many more inititatives.',
          link: {
            type: 'generated-index',
            title: 'Programs',
            description: 'Learn about different programs and initiatives within the Polkadot and Kusama ecosystems.',
            slug: '/programs-index',
          },
          items: [
            "general/decentralized-futures",
            "general/decentralized-voices",
            "general/grants",
            "general/bug-bounty",
            "general/ambassadors",
            "general/alpha-program",
            "general/doc-thousand-validators",
            "general/doc-thousand-contributors",
            "general/dev-heroes",
          ],
        },
        "general/metadata",
      ],
    },
    {
      type: "category",
      label: "Learn",
      link: {
        type: 'generated-index',
        title: 'Learn about Polkadot',
        description: 'Learn about the technology behind the Polkadot ecosystem, and the tools you can use to become a participant of Web3.',
        slug: '/learn-index',
      },
      items: [
        {
          type: "category",
          label: "General",
          description: 'General Information to get started with Polkadot and Web3.',
          link: {
            type: 'generated-index',
            title: 'General',
            description: 'General Information to get started with Polkadot and Web3.',
            slug: '/general-index',
          },
          items: [
            "general/web3-and-polkadot",
            {
              type: "category",
              label: "Polkadot Vision",
              description: "Polkadot's Vision revealed by Gavin Wood at Decoded 2023.",
              link: {
                type: 'generated-index',
                title: 'Polkadot Vision',
                description: "Polkadot's Vision revealed by Gavin Wood at Decoded 2023.",
                slug: '/polkadot-vision-index',
              },
              items: [
                "general/polkadot-v1",
                "general/polkadot-direction",
              ],
            },
            {
              type: "category",
              label: "Stay Safe",
              description: 'Good-practices to Stay Safe while Surfing in Web3.',
              link: {
                type: 'generated-index',
                title: 'Stay Safe',
                description: 'Learn about good-practices to stay safe while surfing in Web3.',
                slug: '/stay-safe-index',
              },
              items: [
                "general/how-to-dyor",
                "general/scams",
                "general/transaction-attacks",
              ],
            },
            "general/start-building",
            "general/research",
            "general/faq",
            "general/glossary",
          ],
        },
        {
          type: "category",
          label: "Basics",
          description: 'Staking, Accounts, Transactions, Tokens and NFTs, and Governance.',
          link: {
            type: 'generated-index',
            title: 'Basic concepts about Polkadot',
            description: 'Everything about staking, accounts, OpenGov, treasury, transactions, tokens and NFTs.',
            slug: '/learn-basics-index',
          },
          items: [
            {
              type: "category",
              label: "Accounts",
              description: 'Basic Accounts, Identity, Multi-signature, and Proxies.',
              link: {
                type: 'doc',
                id: "learn/learn-accounts"
              },
              items: [
                "learn/learn-account-abstraction",
                "learn/learn-identity",
                "learn/learn-account-multisig",
                "learn/learn-proxies",
                "learn/learn-proxies-pure",
              ],
            },
            {
              type: "category",
              label: "Transactions",
              description: 'Extrinsics, Balance Transfers, and Fees.',
              link: {
                type: 'doc',
                id: "learn/learn-transactions",
              },
              items: [
                "learn/learn-transaction-fees",
              ],
            },
            {
              type: "category",
              label: "Staking",
              description: 'Mechanics of Staking.',
              link: {
                type: 'generated-index',
                title: 'Staking on Polkadot',
                description: 'Mechanics of Staking on Polkadot.',
                slug: '/learn-staking-index',
              },
              items: [
                "learn/learn-staking",
                "learn/learn-nomination-pools",
              ],
            },
            {
              type: "category",
              label: "Polkadot OpenGov",
              description: 'Everything about Polkadot OpenGov.',
              link: {
                type: 'generated-index',
                title: 'Polkadot OpenGov',
                description: 'Everything about Polkadot OpenGov.',
                slug: '/learn-polkadot-opengov-index',
              },
              items: [
                "learn/learn-polkadot-opengov",
                "learn/learn-polkadot-opengov-origins",
                "learn/learn-polkadot-technical-fellowship",
                {
                  type: 'link',
                  label: 'OpenGov.Watch',
                  description: 'Community-maintained Support Pages about Polkadot OpenGov.',
                  href: 'https://www.opengov.watch/',
                },
              ],
            },
            "learn/learn-polkadot-opengov-treasury",
            {
              type: "category",
              label: "Tokens and Assets",
              description: 'DOT Token, Asset Hub, and Teleports.',
              link: {
                type: 'generated-index',
                title: 'Tokens and Assets',
                description: 'Everything about tokens and assets on Polkadot.',
                slug: '/learn-assets-index',
              },
              items: [
                "learn/learn-DOT",
                "learn/learn-inflation",
                {
                  type: "category",
                  label: "Asset Hub",
                  description: 'Fungible Tokens and NFTs on Polkadot.',
                  link: {
                    type: 'doc',
                    id: "learn/learn-assets",
                  },
                  items: [
                    "learn/learn-asset-conversion-assethub",,
                  ],
                },
                "learn/learn-teleport",
                "learn/learn-nft",
              ],
            },
            {
              type: "category",
              label: "Network Participants",
              description: "Participants in the Polkadot Ecosystem.",
              link: {
                type: 'generated-index',
                title: "Participants in the Polkadot Ecosystem",
                description: "Learn about collators, nominators and validators.",
                slug: '/learn-participants-index',
              },
              items: [
                "learn/learn-collator",
                "learn/learn-nominator",
                "learn/learn-validator",
              ],
            },
            {
              type: "category",
              label: "Components",
              description: 'OpenGov, Treasury, WASM, Runtime Upgrades, and more.',
              link: {
                type: 'generated-index',
                title: 'Components',
                description: 'Key components of the Polkadot ecosystem.',
                slug: '/learn-components-index',
              },
              items: [
                "learn/learn-polkadot-host",
                'learn/learn-wasm',
                "learn/learn-runtime-upgrades",
              ],
            },
          ],
        },
        {
          type: "category",
          label: "Advanced",
          description: 'Advanced Concepts & Guides about Accounts, Staking, and NFTs.',
          link: {
            type: 'generated-index',
            title: 'Advanced Concepts',
            description: 'Advanced concepts to better understand Polkadot.',
            slug: '/learn-advanced-index',
          },
          items: [
            {
              type: "category",
              label: "Polkadot-JS",
              description: 'Overview of Polkadot-JS.',
              link: {
                type: 'doc',
                id: "learn/learn-polkadotjs",
              },
              items: [
                "general/polkadotjs",
                "general/polkadotjs-ui",
                {
                  type: "category",
                  label: "Polkadot-JS Guides",
                  description: 'Polkadot-JS Guides about Staking, Asset Hub, Vault App, and more.',
                  link: {
                    type: 'doc',
                    id: "learn/learn-polkadot-js-guides",
                  },
                  items: [
                    {
                      type: "category",
                      label: "Account Guides",
                      description: 'Polkadot-JS Guides about Accounts.',
                      link: {
                        type: 'doc',
                        id: "learn/learn-guides-accounts",
                      },
                      items: [
                        "learn/learn-guides-accounts-multisig",
                        "learn/learn-guides-accounts-proxy",
                        "learn/learn-guides-accounts-proxy-pure",
                      ],
                    },
                    "learn/learn-guides-transfers",
                    {
                      type: "category",
                      label: "Staking Guides",
                      description: 'Polkadot-JS Guides about Staking.',
                      link: {
                        type: 'doc',
                        id: 'learn/learn-guides-staking',
                      },
                      items: [
                        "learn/learn-guides-nominator",
                        "learn/learn-guides-staking-pools",
                      ],
                    },
                    "learn/learn-guides-polkadot-opengov",
                    "learn/learn-guides-treasury",
                    "learn/learn-guides-bounties",
                    "learn/learn-guides-identity",
                    "learn/learn-guides-ledger",
                    "learn/learn-guides-vault",
                    {
                      type: "category",
                      label: "Asset Hub Guides",
                      description: 'Polkadot-JS Guides about Asset Hub.',
                      link: {
                        type: 'doc',
                        id: 'learn/learn-guides-assets',
                      },
                      items: [
                        "learn/learn-guides-assets-create",
                        "learn/learn-guides-assets-ledger",
                        "learn/learn-guides-asset-conversion",
                      ],
                    },
                    {
                      type: "category",
                      label: "Bridge Hub Guides",
                      description: 'Polkadot-JS Guides for Bridge Hub.',
                      link: {
                        type: 'doc',
                        id: 'learn/learn-guides-bridges',
                      },
                      items: [
                        "learn/learn-guides-dot-ksm-bridge",
                      ],
                    },
                  ],
                },
              ],
            },
            {
              type: "category",
              label: "Architecture",
              description: "Nominators, Validators, Collators, Parachains, and more.",
              link: {
                type: 'doc',
                id: 'learn/learn-architecture',
              },
              items: [
                "learn/learn-consensus",
                {
                  type: "category",
                  label: "Parachains",
                  description: "Parachains' Protocol, Auctions, Crowdloans, and more.",
                  link: {
                    type: 'generated-index',
                    title: "Polkadot's Parachains",
                    description: "Everything about Polkadot's Parachains.",
                    slug: '/learn-parachains-index',
                  },
                  items: [
                    "learn/learn-parachains",
                    "learn/learn-parachains-protocol",
                    "learn/learn-system-chains",
                    "learn/learn-auction",
                    "learn/learn-crowdloans",
                    "learn/learn-parachains-faq",
                  ],
                },
                "learn/learn-async-backing",
                {
                  type: "category",
                  label: "Agile Coretime",
                  description: "Concepts, Implementation and Tutorials on Agile Coretime.",
                  link: {
                    type: 'generated-index',
                    title: "Agile Coretime",
                    description: "Concepts, Implementation and Tutorials on Agile Coretime.",
                    slug: '/learn-agile-coretime-index',
                  },
                  items: [
                    "learn/learn-agile-coretime",
                    "learn/learn-guides-coretime-marketplaces",
                    "learn/learn-guides-coretime-parachains",
                  ],
                },
                {
                  type: "category",
                  label: "Bridges",
                  description: "Bridging Polkadot to other Blockchain Protocols.",
                  link: {
                    type: 'doc',
                    id: "learn/learn-bridges",
                  },
                  items: [
                    "learn/learn-bridge-hub",
                    "learn/learn-dot-ksm-bridge",
                    "learn/learn-hyperbridge",
                  ],
                },
                {
                  type: "category",
                  label: "Cross Consensus Messaging (XCM)",
                  description: "Polkadot's Cross-Consensus Messaging Format (XCM).",
                  link: {
                    type: 'generated-index',
                    title: "Polkadot's XCM",
                    description: "Polkadot's Cross-Consensus Messaging Format (XCM).",
                    slug: '/learn-xcm-index',
                  },
                  items: [
                    'learn/learn-xcm',
                    'learn/learn-xcm-pallet',
                    'learn/learn-xcm-usecases',
                    'learn/learn-xcm-transport',
                    'learn/learn-xcvm',
                    'learn/learn-xcm-instructions',
                  ],
                },
              ],
            },
            'learn/learn-account-advanced',
            "learn/learn-staking-advanced",
            "learn/learn-nft-pallets",
            "learn/learn-cryptography",
            'learn/learn-phragmen',
          ],
        },
        {
          type: "category",
          label: "XCM Docs",
          description: "In-depth documentation about the Polkadot's Cross-Chain Messaging (XCM).",
          link: {
            type: 'generated-index',
            title: "XCM Documentation",
            description: "In-depth documentation about the Polkadot's Cross-Chain Messaging (XCM).",
            slug: 'learn/xcm',
          },
          items: [
            "learn/xcm/learn-xcm-docs-intro",
            {
              type: "category",
              label: "Overview",
              description: "Overview of the XCM Documentation.",
              link: {
                type: 'generated-index',
                title: "Overview",
                description: "Overview of the XCM Documentation.",
                slug: '/learn/xcm/overview',
              },
              items: [
                "learn/xcm/overview/learn-xcm-docs-overview-summary",
                "learn/xcm/overview/learn-xcm-docs-overview-intro",
                "learn/xcm/overview/learn-xcm-docs-overview-format",
                "learn/xcm/overview/learn-xcm-docs-overview-xcvm",
                "learn/xcm/overview/learn-xcm-docs-overview-architecture",
              ],
            },
            {
              type: "category",
              label: "Quickstart",
              description: "Start Diving into XCM.",
              link: {
                type: 'generated-index',
                title: "Quickstart",
                description: "Start Diving into XCM.",
                slug: '/learn/xcm/quickstart',
              },
              items: [
                "learn/xcm/quickstart/learn-xcm-docs-quickstart-summary",
                "learn/xcm/quickstart/learn-xcm-docs-quickstart-simulator",
                "learn/xcm/quickstart/learn-xcm-docs-quickstart-first-look",
              ],
            },
            {
              type: "category",
              label: "Fundamentals",
              description: "Fundamental Concepts about XCM.",
              link: {
                type: 'generated-index',
                title: "Fundamentals",
                description: "Fundamental Concepts about XCM.",
                slug: '/learn/xcm/fundamentals',
              },
              items: [
                "learn/xcm/fundamentals/learn-xcm-docs-fundamentals-summary",
                {
                  type: "category",
                  label: "MultiLocation",
                  description: "The MultiLocation Type.",
                  link: {
                    type: 'generated-index',
                    title: "MultiLocation",
                    description: "The MultiLocation Type.",
                    slug: '/learn/xcm/fundamentals/multilocation',
                  },
                  items: [
                    "learn/xcm/fundamentals/multilocation/learn-xcm-docs-multilocation-summary",
                    "learn/xcm/fundamentals/multilocation/learn-xcm-docs-multilocation-junctions",
                    "learn/xcm/fundamentals/multilocation/learn-xcm-docs-multilocation-example",
                  ],
                },
                "learn/xcm/fundamentals/learn-xcm-docs-fundamentals-multiasset",
                "learn/xcm/fundamentals/learn-xcm-docs-fundamentals-xcvm",
                "learn/xcm/fundamentals/learn-xcm-docs-fundamentals-fees",
              ],
            },
            {
              type: "category",
              label: "A Journey through XCM",
              description: "A Practical Introduction to the XCM Features",
              link: {
                type: 'generated-index',
                title: "A Journey through XCM",
                description: "A Practical Introduction to the XCM Features.",
                slug: '/learn/xcm/journey',
              },
              items: [
                "learn/xcm/journey/learn-xcm-docs-journey-summary",
                {
                  type: "category",
                  label: "Transfers",
                  description: "Transferring Assets between Consensus Systems with XCM.",
                  link: {
                    type: 'generated-index',
                    title: "Transfers",
                    description: "Transferring Assets between Consensus Systems with XCM.",
                    slug: '/learn/xcm/journey/transfers',
                  },
                  items: [
                    "learn/xcm/journey/transfers/learn-xcm-docs-transfers-summary",
                    "learn/xcm/journey/transfers/learn-xcm-docs-transfers-teleport",
                    "learn/xcm/journey/transfers/learn-xcm-docs-transfers-reserve",
                  ],
                },
                "learn/xcm/journey/learn-xcm-docs-journey-fees",
                "learn/xcm/journey/learn-xcm-docs-journey-transact",
                "learn/xcm/journey/learn-xcm-docs-journey-origin",
                "learn/xcm/journey/learn-xcm-docs-journey-register",
                "learn/xcm/journey/learn-xcm-docs-journey-holding",
                "learn/xcm/journey/learn-xcm-docs-journey-assets",
                "learn/xcm/journey/learn-xcm-docs-journey-expectations",
                "learn/xcm/journey/learn-xcm-docs-journey-queries",
                "learn/xcm/journey/learn-xcm-docs-journey-version",
                "learn/xcm/journey/locks/learn-xcm-docs-journey-locks",
                "learn/xcm/journey/learn-xcm-docs-journey-channels",
              ],
            },
            "learn/xcm/executor_config/learn-xcm-docs-config-deep-dive",
            "learn/xcm/learn-xcm-docs-testing",
            {
              type: "category",
              label: "References",
              description: "XCVM Registers and Glossary",
              link: {
                type: 'generated-index',
                title: "References",
                description: "References.",
                slug: '/learn/xcm/references',
              },
              items: [
                "learn/xcm/reference/learn-xcm-docs-reference-xcvm-registers",
                "learn/xcm/reference/learn-xcm-docs-reference-glossary",
              ],
            },
          ],
        },
        {
          type: "category",
          label: "Polkadot Comparisons",
          description: "Comparison between Polkadot and other Networks. ",
          link: {
            type: 'generated-index',
            title: "Polkadot Comparisons",
            description: "Comparison between Polkadot and other Networks. ",
            slug: '/learn-comparisons-index',
          },
          items: [
            'learn/learn-comparisons-kusama',
            'learn/learn-comparisons-ethereum-2',
            'learn/learn-comparisons-cosmos',
            'learn/learn-comparisons-avalanche',
            'learn/learn-comparisons',
            'learn/learn-comparisons-rollups'
          ],
        },
        "learn/learn-video-tutorials",
        {
          type: "category",
          label: "Future Implementations",
          description: "Implementations that will be deployed on Polkadot.",
          link: {
            type: 'generated-index',
            title: "Future Implementations",
            description: "Implementations that will be deployed on Polkadot.",
            slug: '/learn-future-implementations-index',
          },
          items: [
            'learn/learn-spree',
            "learn/learn-elastic-scaling",
            "learn/learn-sassafras",
            {
              type: "category",
              label: "JAM",
              description: "Polkadot's Join & Accumulate Machine.",
              link: {
                type: 'generated-index',
                title: "JAM",
                description: "Polkadot's Join & Accumulate Machine.",
                slug: '/learn-jam',
              },
              items: [
                "learn/learn-jam-chain",
                "learn/learn-jam-faq",
              ],
            },
          ],
        },
        {
          type: "category",
          label: "Archive",
          description: "Implementations no longer live on Polkadot.",
          link: {
            type: 'doc',
            id: "learn/learn-archive",
          },
          items: [
            "learn/archive/learn-governance",
            "learn/archive/learn-treasury",
            "learn/archive/learn-launch",
            "learn/archive/learn-redenomination",
            "learn/archive/learn-controller",
          ],
        },
      ],
    },
    {
      type: "category",
      label: "Build",
      link: {
        type: 'doc',
        id: "build/build-guide"
      },
      items: [
        {
          type: "category",
          label: "Client-side Development",
          link: {
            type: 'generated-index',
            title: "Client-side Development",
            description: "Learn about different options for building client-side apps on Polkadot.",
            slug: '/build-client-index',
          },
          items: [
            "build/build-client-side",
            "build/build-light-clients",
            "build/build-node-interaction",
          ],
        },
        "build/build-smart-contracts",
        {
          type: "category",
          label: "Protocol Development",
          link: {
            type: 'generated-index',
            title: "Protocol & Parachain Development",
            description: "Learn how to get started with building parachains, solo-chains, and other aspects of protocol development.",
            slug: '/build-protocol-index',
          },
          items: [
            "build/build-protocol-info",
            "build/build-integrate-assets",
            "build/build-hrmp-channels"
          ],
        },
        "build/build-network-overview",
        {
          type: "category",
          label: "Tooling",
          link: {
            type: 'doc',
            id: "build/build-tools-index"
          },
          items: [
            "build/build-data",
            "build/build-open-source",
          ],
        },
        {
          type: "doc",
          id: "build/build-hackathon",
        },
        {
          type: "category",
          label: "Build Archive",
          link: {
            type: 'generated-index',
            title: "Archived Build Resources",
            description: "Archived build resources for building on Polkadot",
            slug: '/build-archive-index',
          },
          items: [
            "build/build-transaction-construction",
            "build/build-integration",
            "build/build-node-management",
            "build/build-parachains"
          ],
        },
      ],
    },
    {
      type: "category",
      label: "Maintain",
      link: {
        type: 'doc',
        id: "maintain/maintain-index",
      },
      items: [
        "maintain/maintain-polkadot-parameters",
        {
          type: "category",
          label: "Nodes and Dapps",
          description: 'Learn how to set up a node.',
          link: {
            type: 'generated-index',
            title: "Nodes and Dapps",
            description: "Learn how to set up a node.",
            slug: '/maintain-node-index',
          },
          items: [
            "maintain/maintain-endpoints",
            "maintain/maintain-sync",
            "maintain/maintain-bootnode",
            "maintain/maintain-rpc",
            "maintain/maintain-wss",
            "maintain/maintain-networks",
            "maintain/maintain-errors",
          ],
        },
        {
          type: "category",
          label: "Collator Guides",
          description: "Guides for Collator Nodes.",
          link: {
            type: 'generated-index',
            title: "Collator Guides",
            description: "Guides for Collator Nodes.",
            slug: '/maintain-collator-index',
          },
          items: [
            "maintain/maintain-guides-async-backing",
          ],
        },
        {
          type: "category",
          label: "Validator Guides",
          description: "Guides for Validator Nodes.",
          link: {
            type: 'generated-index',
            title: "Validator Guides",
            description: "Guides for Validator Nodes.",
            slug: '/maintain-validator-index',
          },
          items: [
            "maintain/maintain-guides-how-to-validate-polkadot",
            "maintain/maintain-guides-validator-payout",
            "maintain/maintain-guides-how-to-systemd",
            "maintain/maintain-guides-secure-validator",
            "maintain/maintain-guides-how-to-upgrade",
            "maintain/maintain-guides-how-to-monitor-your-node",
            "maintain/maintain-guides-how-to-chill",
            "maintain/maintain-guides-how-to-stop-validating",
            "maintain/doc-maintain-guides-validator-community",
            "maintain/maintain-guides-avoid-slashing",
          ],
        },
        {
          type: "category",
          label: "Archive",
          description: 'Basic Accounts, Identity, Multi-signature, and Proxies.',
          link: {
            type: 'doc',
            id: "maintain/maintain-archive"
          },
          items: [
            "maintain/archive/maintain-guides-democracy",
            "maintain/archive/maintain-guides-how-to-join-council",
            "maintain/archive/maintain-guides-how-to-vote-councillor",
          ],
        },
      ],
    },
  ],
};
