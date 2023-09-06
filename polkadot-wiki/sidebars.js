module.exports = {
  docs: [
    {
      type: "category",
      label: "General",
      link: {
        type: 'generated-index',
        title: 'General',
        description: 'General Information to get started with Polkadot and Web3.',
        slug: '/general-index',
      },
      items: [
        "general/getting-started",
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
            "general/scams",
            "general/how-to-dyor",
          ],
        },
        {
          type: "category",
          label: "Wallets",
          description: 'Wallet Options in the Polkadot Ecosystem.',
          link: {
            type: 'generated-index',
            title: 'Wallets',
            description: 'Explore the different wallet options in the Polkadot and Kusama ecosystems.',
            slug: '/wallets-index',
          },
          items: [
            "general/wallets-and-extensions",
            "general/ledger",
            "general/polkadot-vault",
            "general/polkadotjs-ui",
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
        "general/polkadotjs",
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
          label: "Programmes",
          description: 'Programmes and Initiatives within the Polkadot Ecosystem.',
          link: {
            type: 'generated-index',
            title: 'Programmes',
            description: 'Learn about different programmes and initiatives within the Polkadot and Kusama ecosystems.',
            slug: '/programmes-index',
          },
          items: [
            "general/grants",
            "general/bug-bounty",
            "general/ambassadors",
            "general/builders-program",
            "general/doc-thousand-validators",
            "general/doc-thousand-contributors",
            "general/dev-heroes",
          ],
        },
        "general/research",
        "general/metadata",
        "general/faq",
        "general/glossary",
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
          label: "Basics",
          description: 'Staking, Accounts, Transactions, Tokens and NFTs, and Governance.',
          link: {
            type: 'generated-index',
            title: 'Basic concepts about Polkadot',
            description: 'Everything about staking, accounts, transactions, tokens and NFTs.',
            slug: '/learn-basics-index',
          },
          items: [
            {
              type: "category",
              label: "Accounts",
              description: 'Basic Accounts, Identity, Multi-signature, and Proxies.',
              link: {
                type: 'generated-index',
                title: 'Accounts',
                description: 'Everything about accounts and native account abstraction on Polkadot.',
                slug: '/learn-accounts-index',
              },
              items: [
                "learn/learn-accounts",
                "learn/learn-account-generation",
                "learn/learn-identity",
                "learn/learn-account-multisig",
                'learn/learn-proxies',
              ],
            },
            {
              type: "category",
              label: "Transactions",
              description: 'Extrinsics, Balance Transfers, and Fees.',
              link: {
                type: 'generated-index',
                title: 'Transactions',
                description: 'Everything about transactions between Polkadot accounts.',
                slug: '/learn-transactions-index',
              },
              items: [
                "learn/learn-extrinsics",
                "learn/learn-balance-transfers",
                "learn/learn-transaction-fees",
              ],
            },
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
                "learn/learn-assets",
                "learn/learn-DOT",
                "learn/learn-teleport",
              ],
            },
            {
              type: "category",
              label: "NFTs",
              description: 'Intro to NFTs and NFT Projects.',
              link: {
                type: 'generated-index',
                title: 'NFTs',
                description: 'Everything about NFTs on Polkadot.',
                slug: '/learn-nft-index',
              },
              items: [
                "learn/learn-nft",
                "learn/learn-nft-projects",
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
                "learn/learn-polkadot-opengov",
                "learn/learn-polkadot-opengov-treasury",
                "learn/learn-consensus",
              ],
            },
            {
              type: "category",
              label: "Staking",
              description: 'Staking Philosophy and Mechanics.',
              link: {
                type: 'generated-index',
                title: 'Staking on Polkadot',
                description: 'Staking Philosophy and Mechanics on Polkadot.',
                slug: '/learn-staking-index',
              },
              items: [
                "learn/learn-staking",
                "learn/learn-nomination-pools",
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
            'learn/learn-account-advanced',
            "learn/learn-staking-advanced",
            "learn/learn-nft-pallets",
            "learn/learn-cryptography",
            'learn/learn-phragmen',
            {
              type: "category",
              label: "How-to Guides",
              description: 'Advanced Guides about Staking, Asset Hub, Vault App, and more.',
              link: {
                type: 'generated-index',
                title: 'Advanced Guides',
                description: 'Advanced how-to guides.',
                slug: '/learn-guides-index',
              },
              items: [
                {
                  type: "category",
                  label: "Staking",
                  description: 'Advanced How-to Guides about Staking.',
                  link: {
                    type: 'generated-index',
                    title: 'Advanced Guides for Staking',
                    description: 'Advanced how-to guides about Staking.',
                    slug: '/learn-guides-staking-index',
                  },
                  items: [
                    "learn/learn-guides-staking",
                    "learn/learn-guides-staking-pools",
                  ],
                },
                "learn/learn-guides-polkadot-opengov",
                "learn/learn-guides-treasury",
                "learn/learn-guides-identity",
                {
                  type: "category",
                  label: "Asset Hub",
                  description: 'Advanced How-to Guides about the Asset Hub.',
                  link: {
                    type: 'generated-index',
                    title: 'Advanced Guides for Asset Hub',
                    description: 'Advanced how-to guides about the Asset Hub.',
                    slug: '/learn-guides-assets-index',
                  },
                  items: [
                    "learn/learn-guides-assets-create",
                    "learn/learn-guides-assets-ledger",
                  ],
                },
                "learn/learn-guides-vault",
              ],
            },
          ],
        },
        {
          type: "category",
          label: "Architecture",
          description: "Nominators, Validators, Collators, Parachains, and more.",
          link: {
            type: 'generated-index',
            title: "Polkadot's Architecture",
            description: "Everything about Polkadot's Architecture.",
            slug: '/learn-architecture-index',
          },
          items: [
            "learn/learn-architecture",
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
            "learn/learn-bridges",
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
            "learn/learn-parathreads",
          ],
        },
        {
          type: "category",
          label: "Archive",
          description: "Implementations no longer live on Polkadot.",
          link: {
            type: 'generated-index',
            title: "Archive",
            description: "Implementations no longer live on Polkadot.",
            slug: '/learn-archive-index',
          },
          items: [
            "learn/learn-governance",
            "learn/learn-treasury",
            "learn/learn-launch",
            "learn/learn-redenomination",
            "learn/learn-controller",
          ],
        },
        {
          type: "category",
          label: "XCM Docs",
          description: "In-depth documentation about Cross-Chain Messaging (XCM) on Polkadot.",
          link: {
            type: 'generated-index',
            title: "XCM Documentation",
            description: "In-depth documentation about Cross-Chain Messaging (XCM) on Polkadot.",
            slug: '/learn-xcm-docs-index',
          },
          items: [
            "learn/xcm/learn-xcm-docs-intro",
            {
              type: "category",
              label: "Overview",
              description: "Overview to the XCM Documentation.",
              link: {
                type: 'generated-index',
                title: "Overview",
                description: "Overview to the XCM Documentation.",
                slug: '/learn-xcm-docs-overview-index',
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
                slug: '/learn-xcm-docs-quickstart-index',
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
              description: "Learn about XCM Fundamentals.",
              link: {
                type: 'generated-index',
                title: "Fundamentals",
                description: "Learn about XCM Fundamentals.",
                slug: '/learn-xcm-docs-fundamentals-index',
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
                    slug: '/learn-xcm-docs-multilocation-index',
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
              description: "A Journey through XCM.",
              link: {
                type: 'generated-index',
                title: "A Journey through XCM",
                description: "A Journey through XCM",
                slug: '/learn-xcm-docs-journey-index',
              },
              items: [
                "learn/xcm/journey/learn-xcm-docs-journey-summary",
                {
                  type: "category",
                  label: "Transfers",
                  description: "A Journey through XCM.",
                  link: {
                    type: 'generated-index',
                    title: "Transfers",
                    description: "Transferring Assets between Consensus Systems with XCM.",
                    slug: '/learn-xcm-docs-transfers-index',
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
          ],
        },
      ],
    },
    {
      type: "category",
      label: "Build",
      items: [
        "build/build-index",
        {
          type: "category",
          label: "Development Guide",
          items: [
            "build/build-guide",
            "build/build-parachains",
            "build/build-storage",
            "build/build-smart-contracts",
            "build/build-oracle",
            "build/build-data",
            "build/build-substrate",
            "build/build-ss58-registry",
            "build/build-hrmp-channels",
          ],
        },
        {
          type: "category",
          label: "Integration Guide",
          items: [
            "build/build-integration",
            "build/build-protocol-info",
            "build/build-integrate-assets",
            "build/build-node-management",
            "build/build-node-interaction",
            "build/build-transaction-construction",
          ],
        },
        {
          type: "category",
          label: "Tools",
          items: ["build/build-tools-index", "build/build-open-source"],
        },
        {
          type: "category",
          label: "Resources",
          items: ["build/build-hackathon"],
        },
      ],
    },
    {
      type: "category",
      label: "Maintain",
      items: [
        "maintain/maintain-index",
        "maintain/maintain-polkadot-parameters",
        "maintain/maintain-endpoints",
        {
          type: "category",
          label: "Nodes and Dapps",
          items: [
            "maintain/maintain-sync",
            "maintain/maintain-bootnode",
            "maintain/maintain-rpc",
            "maintain/maintain-wss",
            "maintain/maintain-networks",
            "maintain/maintain-errors",
          ],
        },
        "maintain/maintain-guides-how-to-nominate-polkadot",
        {
          type: "category",
          label: "Validator Guides",
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
          label: "Governance Guides",
          items: [
            "maintain/maintain-guides-democracy",
            "maintain/maintain-guides-polkadot-opengov",
            "maintain/maintain-guides-how-to-join-council",
            "maintain/maintain-guides-how-to-vote-councillor",
          ],
        },
      ],
    },
  ],
};
