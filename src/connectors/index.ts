import { Web3Provider } from '@ethersproject/providers'
import { InjectedConnector } from '@web3-react/injected-connector'
import { WalletConnectConnector } from '@web3-react/walletconnect-connector'
import { WalletLinkConnector } from '@web3-react/walletlink-connector'
import { PortisConnector } from '@web3-react/portis-connector'

import { FortmaticConnector } from './Fortmatic'
import { NetworkConnector } from './NetworkConnector'

const NETWORK_URL = process.env.REACT_APP_NETWORK_URL
const FORMATIC_KEY = process.env.REACT_APP_FORTMATIC_KEY
const PORTIS_ID = process.env.REACT_APP_PORTIS_ID

export const NETWORK_CHAIN_ID: number = parseInt(process.env.REACT_APP_CHAIN_ID ?? '1')

if (typeof NETWORK_URL === 'undefined') {
  throw new Error(`REACT_APP_NETWORK_URL must be a defined environment variable`)
}

export const network = new NetworkConnector({
  urls: { [NETWORK_CHAIN_ID]: NETWORK_URL }
})

let networkLibrary: Web3Provider | undefined
export function getNetworkLibrary(): Web3Provider {
  return (networkLibrary = networkLibrary ?? new Web3Provider(network.provider as any))
}

export const injected = new InjectedConnector({
  supportedChainIds: [
    1,
    97,
    56,
    4,
    421611,
    42161,
    43113,
    43114,
    4002,
    250,
    5,
    3,
    42,
    420,
    10,
    137,
    80001,
    1666600000,
    1666700000,
    128,
    256,
    42220,
    44787,
    61
  ]
})
// mainnet only
export const walletconnect = new WalletConnectConnector({
  rpc: {
    1: 'https://mainnet.infura.io/v3/14664547ed6d4aceb94c5801b7c739b3',
    97: 'https://data-seed-prebsc-1-s1.binance.org:8545/',
    56: 'https://bsc-dataseed1.binance.org/',
    4: 'https://rinkeby.infura.io/v3/14664547ed6d4aceb94c5801b7c739b3',
    421611: 'https://arbitrum-rinkeby.infura.io/v3/14664547ed6d4aceb94c5801b7c739b3',
    42161: 'https://arbitrum-mainnet.infura.io/v3/14664547ed6d4aceb94c5801b7c739b3',
    43113: 'https://api.avax-test.network/ext/bc/C/rpc',
    43114: 'https://api.avax.network/ext/bc/C/rpc',
    4002: 'https://rpc.testnet.fantom.network/',
    250: 'https://rpc.ftm.tools/',
    5: 'https://GOERIL.infura.io/v3/14664547ed6d4aceb94c5801b7c739b3',
    3: 'https://ropsten.infura.io/v3/14664547ed6d4aceb94c5801b7c739b3',
    42: 'https://kovan.infura.io/v3/14664547ed6d4aceb94c5801b7c739b3',
    420: 'https://goerli.optimism.io/',
    10: 'https://mainnet.optimism.io',
    137: 'https://polygon-rpc.com/',
    80001: 'https://rpc-mumbai.maticvigil.com/',
    1666600000: 'https://api.harmony.one',
    1666700000: 'https://api.s0.b.hmny.io',
    128: 'https://http-mainnet.hecochain.com/',
    256: 'https://http-testnet.hecochain.com/',
    61: 'https://www.ethercluster.com/etc',
    42220: 'https://rpc.ankr.com/celo',
    44787: 'https://alfajores-forno.celo-testnet.org'
  },
  bridge: 'https://bridge.walletconnect.org',
  qrcode: true
  //pollingInterval: 15000
})

// mainnet only
export const fortmatic = new FortmaticConnector({
  apiKey: FORMATIC_KEY ?? '',
  chainId: 1
})

// mainnet only
export const portis = new PortisConnector({
  dAppId: PORTIS_ID ?? '',
  networks: [1]
})

// mainnet only
export const walletlink = new WalletLinkConnector({
  url: NETWORK_URL,
  appName: 'AzurSwap',
  appLogoUrl:
    'https://mpng.pngfly.com/20181202/bex/kisspng-emoji-domain-unicorn-pin-badges-sticker-unicorn-tumblr-emoji-unicorn-iphoneemoji-5c046729264a77.5671679315437924251569.jpg'
})
