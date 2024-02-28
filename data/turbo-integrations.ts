export const integrationCategories = [
  "general",
  "protocols",
  "services",
] as const

interface TurboIntegration {
  name: string
  href: string
  url: string
  description: string
  imgLight: string
  imgDark: string
  category: (typeof integrationCategories)[number]
}

export const turboIntegrations = {
  siwe: {
    name: "SIWE",
    href: "/integration/sign-in-with-ethereum",
    url: "https://login.xyz/",
    description:
      "Sign-In with Ethereum is Web3 authentication using an Ethereum account.",
    category: "general",
    imgLight: "/integrations/siwe.svg",
    imgDark: "/integrations/siwe.svg",
  },
  erc20: {
    name: "ERC20",
    href: "/integration/erc20",
    url: "https://eips.ethereum.org/EIPS/eip-20",
    description: "ERC20 is a standard for fungible tokens on EVM chains",
    category: "protocols",
    imgLight: "/integrations/erc20.png",
    imgDark: "/integrations/erc20.png",
  },
  erc721: {
    name: "ERC721",
    href: "/integration/erc721",
    url: "https://eips.ethereum.org/EIPS/eip-721",
    description: "ERC721 is a standard for non-fungible tokens on EVM chains",
    category: "protocols",
    imgLight: "/integrations/erc721-icon.png",
    imgDark: "/integrations/erc721-icon.png",
  },
  erc1155: {
    name: "ERC1155",
    href: "/integration/erc1155",
    url: "https://eips.ethereum.org/EIPS/eip-1155",
    description: "ERC1155 is a multi-token standard on EVM chains",
    category: "protocols",
    imgLight: "/integrations/erc1155-icon.png",
    imgDark: "/integrations/erc1155-icon.png",
  },
  etherscan: {
    name: "Etherscan",
    href: "/integration/etherscan",
    url: "https://etherscan.io",
    description:
      "Etherscan is the leading block explorer and search, API & analytics platform for Ethereum.",
    category: "general",
    imgLight: "/integrations/etherscan-light.svg",
    imgDark: "/integrations/etherscan-dark.svg",
  },
  litProtocol: {
    name: "Lit Protocol",
    href: "/integration/lit-protocol",
    url: "https://litprotocol.com/",
    description:
      "Lit is distributed key management for encryption, signing, and compute.",
    category: "services",
    imgLight: "/integrations/lit-protocol.png",
    imgDark: "/integrations/lit-protocol.png",
  },
  connext: {
    name: "Connext",
    href: "/integration/connext",
    url: "https://docs.connext.network/",
    description:
      "Connext is a modular protocol for securely passing funds and data between chains.",
    category: "protocols",
    imgLight: "/integrations/connext.png",
    imgDark: "/integrations/connext.png",
  },
  push_protocol: {
    name: "Push Protocol",
    href: "/integration/push-protocol",
    url: "https://push.org/",
    description:
      "Push Protocol is a web3 communication network, enabling cross-chain notifications and messaging for dapps, wallets, and services.",
    category: "protocols",
    imgLight: "/integrations/push.svg",
    imgDark: "/integrations/push.svg",
  },
  aave: {
    name: "Aave",
    href: "/integration/aave",
    url: "https://docs.aave.com/hub/",
    description: "Aave is a decentralized non-custodial liquidity protocol.",
    category: "protocols",
    imgLight: "/integrations/aave.png",
    imgDark: "/integrations/aave.png",
  },
  arweave: {
    name: "Arweave",
    href: "/integration/arweave",
    url: "https://arwiki.arweave.dev",
    description:
      "Arweave is the first protocol that enables permanent data storage. Its design allows anyone to preserve data forever with just a single, one-time fee.",
    category: "protocols",
    imgLight: "/integrations/arweave-light.png",
    imgDark: "/integrations/arweave-dark.png",
  },
  lensProtocol: {
    name: "Lens Protocol",
    href: "/integration/lens-protocol",
    url: "https://www.lens.xyz/",
    description: "Lens Protocol is the social layer for Web3",
    category: "protocols",
    imgLight: "/integrations/lensprotocol-light.svg",
    imgDark: "/integrations/lensprotocol-dark.svg",
  },
  gitcoinPassport: {
    name: "Gitcoin Passport",
    href: "/integration/gitcoin-passport",
    url: "https://docs.passport.gitcoin.co/overview/introducing-gitcoin-passport",
    description:
      "Gitcoin Passport is an identity verification application. It enables you to collect verifiable credentials that prove your identity and trustworthiness without exposing personally identifying information.",
    category: "services",
    imgLight: "/integrations/gitcoin-passport.svg",
    imgDark: "/integrations/gitcoin-passport.svg",
  },
} as const
