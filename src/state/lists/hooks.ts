import { ChainId, Token } from '@uniswap/sdk'
import { Tags, TokenInfo, TokenList } from '@uniswap/token-lists'
import { useMemo } from 'react'
import { useSelector } from 'react-redux'
import { AppState } from '../index'

import arbitrum from '../../constants/tokens/arbitrum.json'
import avax from '../../constants/tokens/avax.json'
import bsc from '../../constants/tokens/bsc.json'
import ethereum from '../../constants/tokens/ethereum.json'
import ftm from '../../constants/tokens/ftm.json'
import ftmtest from '../../constants/tokens/ftmtest.json'
import fuji from '../../constants/tokens/fuji.json'
import goeril from '../../constants/tokens/goerli.json'
import kovan from '../../constants/tokens/kovan.json'
import mumbai from '../../constants/tokens/mumbai.json'
import optimism from '../../constants/tokens/optimism.json'
import rinkeby from '../../constants/tokens/rinkeby.json'
import ropsten from '../../constants/tokens/ropsten.json'
import polygon from '../../constants/tokens/polygon.json'
import harmony from '../../constants/tokens/harmony.json'
import heco from '../../constants/tokens/heco.json'
import celo from '../../constants/tokens/celo.json'
type TagDetails = Tags[keyof Tags]
export interface TagInfo extends TagDetails {
  id: string
}
// export interface TokenListNew extends TokenList {
//   readonly name: string
//   readonly timestamp?: string | any
//   readonly version?: Version | any
//   readonly tokens: TokenInfo[]
//   readonly keywords?: string[]
//   readonly tags?: Tags
//   readonly logoURI?: string | any
// }

/**
 * Token instances created from token info.
 */
export class WrappedTokenInfo extends Token {
  public readonly tokenInfo: TokenInfo
  public readonly tags: TagInfo[]
  constructor(tokenInfo: TokenInfo, tags: TagInfo[]) {
    super(tokenInfo.chainId, tokenInfo.address, tokenInfo.decimals, tokenInfo.symbol, tokenInfo.name)
    this.tokenInfo = tokenInfo
    this.tags = tags
  }
  public get logoURI(): string | undefined {
    return this.tokenInfo.logoURI
  }
}

export type TokenAddressMap = Readonly<{ [chainId in ChainId]: Readonly<{ [tokenAddress: string]: WrappedTokenInfo }> }>

/**
 * An empty result, useful as a default.
 */
const EMPTY_LIST: TokenAddressMap = {
  [ChainId.MAINNET]: {},
  [ChainId.ROPSTEN]: {},
  [ChainId.RINKEBY]: {},
  [ChainId.GOERIL]: {},
  [ChainId.KOVAN]: {},
  [ChainId.ARBITRUM_RINKEBY]: {},
  [ChainId.ARBITRUM]: {},
  [ChainId.AVALANCHE_FUJI_TESTNET]: {},
  [ChainId.AVALANCHE_CMAINNET]: {},
  [ChainId.FANTOM_TESTNET]: {},
  [ChainId.FANTOM]: {},
  [ChainId.BNBTESTNET]: {},
  [ChainId.BNB]: {},
  [ChainId.OPTIMISM_GOERLI]: {},
  [ChainId.OPTIMISM]: {},
  [ChainId.POLYGON]: {},
  [ChainId.MUMBAI]: {},
  [ChainId.HARMONY]: {},
  [ChainId.HARMONY_TESTNET]: {},
  [ChainId.HECO]: {},
  [ChainId.HECO_TESTNET]: {},
  [ChainId.CELO]: {},
  [ChainId.CELO_TESTNET]: {},
  [ChainId.ETHClassic]: {}
}
let tokenList: any
if (Number(localStorage.getItem('chainId')) === 4) {
  tokenList = rinkeby
} else if (Number(localStorage.getItem('chainId')) === 97) {
  tokenList = bsc
} else if (Number(localStorage.getItem('chainId')) === 56) {
  tokenList = bsc
} else if (Number(localStorage.getItem('chainId')) === 42161 || Number(localStorage.getItem('chainId')) === 42161) {
  tokenList = arbitrum
} else if (Number(localStorage.getItem('chainId')) === 43113) {
  tokenList = fuji
} else if (Number(localStorage.getItem('chainId')) === 43114) {
  tokenList = avax
} else if (Number(localStorage.getItem('chainId')) === 4002) {
  tokenList = ftmtest
} else if (Number(localStorage.getItem('chainId')) === 250) {
  tokenList = ftm
} else if (Number(localStorage.getItem('chainId')) === 5) {
  tokenList = goeril
} else if (Number(localStorage.getItem('chainId')) === 421611) {
  tokenList = rinkeby
} else if (Number(localStorage.getItem('chainId')) === 3) {
  tokenList = ropsten
} else if (Number(localStorage.getItem('chainId')) === 42) {
  tokenList = kovan
} else if (Number(localStorage.getItem('chainId')) === 420) {
  tokenList = optimism
} else if (Number(localStorage.getItem('chainId')) === 10) {
  tokenList = optimism
} else if (Number(localStorage.getItem('chainId')) === 137) {
  tokenList = polygon
} else if (Number(localStorage.getItem('chainId')) === 80001) {
  tokenList = mumbai
} else if (Number(localStorage.getItem('chainId')) === 1666600000) {
  tokenList = harmony
} else if (Number(localStorage.getItem('chainId')) === 1666700000) {
  tokenList = harmony
} else if (Number(localStorage.getItem('chainId')) === 128) {
  tokenList = heco
} else if (Number(localStorage.getItem('chainId')) === 256) {
  tokenList = heco
} else if (Number(localStorage.getItem('chainId')) === 61) {
  tokenList = ethereum
}
else if (Number(localStorage.getItem('chainId')) === 42220) {
  tokenList = celo
}
else if (Number(localStorage.getItem('chainId')) === 44787) {
  tokenList = celo
}
else {
  tokenList = ethereum
}
//console.log('LIIIIIIIISSSSSTTTTT', tokenList)
const listCache: WeakMap<TokenList, TokenAddressMap> | null =
  typeof WeakMap !== 'undefined' ? new WeakMap<TokenList, TokenAddressMap>() : null

export function listToTokenMap(list: TokenList): TokenAddressMap {
  // const result = listCache?.get(list)
  // if (result) return result

  const map = list.tokens.reduce<TokenAddressMap>(
    (tokenMap, tokenInfo) => {
      const tags: TagInfo[] =
        tokenInfo.tags
          ?.map(tagId => {
            if (!list.tags?.[tagId]) return undefined
            return { ...list.tags[tagId], id: tagId }
          })
          ?.filter((x): x is TagInfo => Boolean(x)) ?? []
      const token = new WrappedTokenInfo(tokenInfo, tags)
      if (tokenMap[token.chainId][token.address] !== undefined) throw Error('Duplicate tokens.')
      return {
        ...tokenMap,
        [token.chainId]: {
          ...tokenMap[token.chainId],
          [token.address]: token
        }
      }
    },
    { ...EMPTY_LIST }
  )
  listCache?.set(list, map)
  return map
}

export function useTokenList(url: string | undefined): TokenAddressMap {
  const lists = useSelector<AppState, AppState['lists']['byUrl']>(state => state.lists.byUrl)
  return useMemo(() => {
    if (!url) return listToTokenMap(tokenList)
    const current = lists[url]?.current
    if (!current) return listToTokenMap(tokenList)
    try {
      return listToTokenMap(tokenList)
    } catch (error) {
      console.error('Could not show token list due to error', error)
      return listToTokenMap(tokenList)
    }
  }, [lists, url])
}

export function useSelectedListUrl(): string | undefined {
  return useSelector<AppState, AppState['lists']['selectedListUrl']>(state => state.lists.selectedListUrl)
}

export function useSelectedTokenList(): TokenAddressMap {
  return useTokenList(useSelectedListUrl())
}

export function useSelectedListInfo(): { current: TokenList | null; pending: TokenList | null; loading: boolean } {
  const selectedUrl = useSelectedListUrl()
  const listsByUrl = useSelector<AppState, AppState['lists']['byUrl']>(state => state.lists.byUrl)
  const list = selectedUrl ? listsByUrl[selectedUrl] : undefined
  return {
    current: list?.current ?? null,
    pending: list?.pendingUpdate ?? null,
    loading: list?.loadingRequestId !== null
  }
}

// returns all downloaded current lists
export function useAllLists(): TokenList[] {
  const lists = useSelector<AppState, AppState['lists']['byUrl']>(state => state.lists.byUrl)
  return useMemo(
    () =>
      Object.keys(lists)
        .map(url => lists[url].current)
        .filter((l): l is TokenList => Boolean(l)),
    [lists]
  )
}
