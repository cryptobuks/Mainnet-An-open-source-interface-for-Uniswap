import { ChainId, ETHER } from '@uniswap/sdk'
import React, { useState, useEffect } from 'react'
import { isMobile, isTablet } from 'react-device-detect'
import { Text } from 'rebass'
// import { Link } from 'react-router-dom'
import styled from 'styled-components'
// import Logo from '../../assets/svg/logo.svg'
// import LogoDark from '../../assets/svg/logo_white.svg'
// import Wordmark from '../../assets/svg/wordmark.svg'
// import WordmarkDark from '../../assets/svg/wordmark_white.svg'
import { useActiveWeb3React } from '../../hooks'
// import { useDarkModeManager } from '../../state/user/hooks'
import { useETHBalances } from '../../state/wallet/hooks'
import Logos from '../../utils/icons'
import { YellowCard } from '../Card'
// import Settings from '../Settings'
// import Menu from '../Menu'
import Select from 'react-dropdown-select'
import { RowBetween } from '../Row'
import Web3Status from '../Web3Status'
import { useWeb3React } from '@web3-react/core'
import Web3Utils from 'web3-utils'
// import VersionSwitch from './VersionSwitch'
import { navBanners } from '../../constants/swap-data/data'
const HeaderFrame = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
  width: 100%;
  top: 0;
  position: relative;
  z-index: 2;
  ${({ theme }) => theme.mediaWidth.upToExtraSmall`
    padding: 12px 0 0 0;
    width: calc(100%);
    position: relative;
  `};
`

export const HeaderElement = styled.div`
  display: flex;
  align-items: center;
  @media screen and (max-width: 768px) {
    margin-bottom: 10px;
  }
`
const HeaderElementWrap = styled.div`
  display: flex;
  align-items: center;

  ${({ theme }) => theme.mediaWidth.upToSmall`
    margin-top: 0.5rem;
`};
`
const AccountElement = styled.div<{ active: boolean }>`
  display: flex;
  flex-direction: row;
  align-items: center;
  background-color: ${({ theme, active }) => (!active ? theme.bg1 : theme.bg3)};
  border-radius: 12px;
  white-space: nowrap;
  width: 100%;

  :focus {
    border: 1px solid blue;
  }
`

const TestnetWrapper = styled.div`
  white-space: nowrap;
  width: fit-content;
  margin-left: 10px;
  pointer-events: auto;
`

const NetworkCard = styled(YellowCard)`
  width: fit-content;
  margin-right: 10px;
  border-radius: 12px;
  padding: 8px 12px;
`
const HeaderControls = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;

  ${({ theme }) => theme.mediaWidth.upToSmall`
    flex-direction: column;
    align-items: flex-end;
  `};
`

const BalanceText = styled(Text)`
  ${({ theme }) => theme.mediaWidth.upToExtraSmall`
    display: none;
  `};
`
const Seprator = styled.li`
  width: 100%;
  border-radius: 0 !important;
  height: 2px;
  border-bottom: 1px solid #616161;
  margin-top: 0 !important;
  pointer-events: none;
`
// const SepratorBlank = styled.li`
//   width: 100%;
//   border-radius: 0 !important;
//   height: 2px;
//   border-bottom: none;
//   margin-top: 0 !important;
//   pointer-events: none;
// `

const NETWORK_LABELS: { [chainId in ChainId]: string | null } = {
  [ChainId.MAINNET]: null,
  [ChainId.ROPSTEN]: 'ROPSTEN',
  [ChainId.RINKEBY]: 'RINKEBY',
  [ChainId.GOERIL]: 'GOERIL',
  [ChainId.KOVAN]: 'KOVAN',
  [ChainId.ARBITRUM_RINKEBY]: 'ARBITRUM_RINKEBY',
  [ChainId.ARBITRUM]: 'ARBITRUM',
  [ChainId.AVALANCHE_FUJI_TESTNET]: 'AVALANCHE_FUJI_TESTNET',
  [ChainId.AVALANCHE_CMAINNET]: 'AVALANCHE_CMAINNET',
  [ChainId.FANTOM_TESTNET]: 'FANTOM_TESTNET',
  [ChainId.FANTOM]: 'FANTOM',
  [ChainId.BNBTESTNET]: 'BNBTESTNET',
  [ChainId.BNB]: 'BNB',
  [ChainId.OPTIMISM_GOERLI]: 'OPTIMISM_GOERLI',
  [ChainId.OPTIMISM]: 'OPTIMISM',
  [ChainId.POLYGON]: 'POLYGON',
  [ChainId.MUMBAI]: 'MUMBAI',
  [ChainId.HARMONY]: 'HARMONY',
  [ChainId.HARMONY_TESTNET]: 'HARMONY_TESTNET',
  [ChainId.HECO]: 'HECO',
  [ChainId.HECO_TESTNET]: 'HECO_TESTNET',
  [ChainId.CELO]: 'CELO',
  [ChainId.CELO_TESTNET]: 'CELO_TESTNET',
  [ChainId.ETHClassic]: 'ETHClassic'
}

const rpc: any = {
  1: 'etherscan.io',
  3: 'ropsten.etherscan.io',
  4: 'rinkeby.etherscan.io',
  5: 'goerli.etherscan.io',
  42: 'kovan.etherscan.io',
  97: 'testnet.bscscan.com',
  56: 'bscscan.com',
  421611: 'rinkeby-explorer.arbitrum.io',
  42161: 'arbiscan.io',
  43113: 'testnet.snowtrace.io',
  43114: 'snowtrace.io',
  4002: 'testnet.ftmscan.com',
  250: 'ftmscan.com',
  420: 'goeril-optimistic.etherscan.io',
  10: 'optimistic.etherscan.io',
  137: 'polygonscan.com',
  80001: 'mumbai.polygonscan.com',
  1666600000: 'explorer.harmony.one',
  1666700000: 'explorer.pops.one',
  128: 'hecoinfo.com',
  256: 'scan-testnet.hecochain.com',
  61: 'blockscout.com/etc/mainnet',
  42220: 'celoscan.io/',
  44787:  'https://alfajores.celoscan.io/',
}

//console.log('NETWORK_LABELS', NETWORK_LABELS, rpc)
const customDropdownRenderer = (data: any) => {
  const { methods } = data
  return (
    <ul>
      {data.props.options.map(
        (item: {
          value: number
          logo: string
          label: boolean | React.ReactChild | React.ReactFragment | React.ReactPortal | null | undefined
        }) => {
          return (
            <>
              {item.label === 'ROPSTEN' ? (
                <>
                  {/* <SepratorBlank />
                  <SepratorBlank />
                  <SepratorBlank />
                  <SepratorBlank /> */}
                  <Seprator></Seprator>
                  <Seprator></Seprator> <Seprator />
                </>
              ) : null}
              <li onClick={() => methods.addItem(item)} key={item.value}>
                <img src={Logos[`${item.logo?.toLowerCase()}.png`]} />
                {item.label}
              </li>
            </>
          )
        }
      )}
    </ul>
  )
}
const customContentRenderer = (data: any) => {
  const item = data.state.values[0]
  return (
    <div className="dropdown_select" key={item.label}>
      <p>
        <img src={Logos[`${item.logo?.toLowerCase()}.png`]} />
        {item.label}
      </p>
    </div>
  )
}
const options = [
  { value: [ChainId.MAINNET][0], label: 'ETH', logo: 'Ether' },
  { value: [ChainId.BNB][0], label: 'BNB', logo: 'BNB' },
  { value: [ChainId.AVALANCHE_CMAINNET][0], label: 'AVALANCHE', logo: 'Avalanche' },
  { value: [ChainId.POLYGON][0], label: 'POLYGON', logo: 'POLYGON' },
  { value: [ChainId.FANTOM][0], label: 'FANTOM', logo: 'FANTOM' },
  // { value: [ChainId.HECO][0], label: 'HECO', logo: 'heco' },
  { value: [ChainId.OPTIMISM][0], label: 'OPTIMISM', logo: 'OPTIMISM' },
  // { value: [ChainId.HARMONY][0], label: 'HARMONY', logo: 'Ether' },
  { value: [ChainId.CELO][0], label: 'CELO', logo: 'CELO' },
  { value: [ChainId.ETHClassic][0], label: 'ETHClassic', logo: 'ethc' },
  { value: [ChainId.ARBITRUM][0], label: 'ARBITRUM', logo: 'arbit' },
  // { value: [ChainId.HARMONY_TESTNET][0], label: 'HARMONY TESTNET', logo: 'Ether' },
  { value: [ChainId.ROPSTEN][0], label: 'ROPSTEN', logo: 'Ether' },
  { value: [ChainId.FANTOM_TESTNET][0], label: 'FANTOM TESTNET', logo: 'FANTOM' },
  { value: [ChainId.RINKEBY][0], label: 'RINKEBY', logo: 'Ether' },
  { value: [ChainId.GOERIL][0], label: 'GOERIL', logo: 'Ether' },
  { value: [ChainId.KOVAN][0], label: 'KOVAN', logo: 'Ether' },
  { value: [ChainId.ARBITRUM_RINKEBY][0], label: 'RINKEBY', logo: 'arbit' },
  // { value: [ChainId.HECO_TESTNET][0], label: 'HECO TESTNET', logo: 'heco' },
  { value: [ChainId.AVALANCHE_FUJI_TESTNET][0], label: 'FUJI', logo: 'Avalanche' },
  { value: [ChainId.BNBTESTNET][0], label: 'BNB TESTNET', logo: 'BNB' },
  { value: [ChainId.OPTIMISM_GOERLI][0], label: 'OPTIMISM GOERIL', logo: 'OPTIMISM' },
  { value: [ChainId.CELO_TESTNET][0], label: 'CELO TESTNET', logo: 'CELO' },
  { value: [ChainId.MUMBAI][0], label: 'MUMBAI', logo: 'POLYGON' }
]
export default function Header() {
  const { account, chainId } = useActiveWeb3React()

  //tt.connector.handleChainChanged({ chainId: 97 })
  const userEthBalance = useETHBalances(account ? [account] : [])?.[account ?? '']
  const [coin, setCoin] = useState([])
  const { library } = useWeb3React()
  //console.log('PROVIDER', Web3Utils)
  const switchNetwork = async (data: any) => {
    try {
      await library.provider
        .request({
          method: 'wallet_switchEthereumChain',
          params: [{ chainId: Web3Utils.toHex(data.value.toString()) }]
        })
        .then(async () => {
          localStorage.setItem('chainId', data.value.toString())
          window.location.reload()
        })
    } catch (switchError) {
      console.log(switchError)
      //4902 error code indicates the chain is missing on the wallet
      if (switchError.code === 4902) {
        try {
          const url = rpc[Number(data.value)]
          await library.provider.request({
            method: 'wallet_addEthereumChain',
            params: [
              {
                chainId: Web3Utils.toHex(data.toString()),
                rpcUrls: url,
                chainName: data.label
              }
            ]
          })
        } catch (error) {
          console.error(error)
        }
      }
    }
  }
  const setCoinValue = async (data: any) => {
    //console.log(activate)

    const chainId: string | null | number = data.value || localStorage.getItem('chainId')

    const network: any = options.filter(item => {
      return item.value === Number(chainId)
    })

    if (data.value) {
      switchNetwork(data)
    }
    setCoin(network)
  }
  useEffect(() => {
    const chainId = localStorage.getItem('chainId')
    setCoinValue({ value: chainId })
    //console.log('acoin is', coin)
  }, [])
  return (
    <HeaderFrame>
      {isMobile || isTablet ? (
        <>
          <span style={{ height: '50px', display: 'block' }}></span>
          <div className="mobile-nav">
            <HeaderElement>
              <div id="network_switcher">
                {coin.length > 0 ? (
                  <Select
                    options={options}
                    values={[...coin]}
                    contentRenderer={customContentRenderer}
                    onChange={value => setCoinValue(value[0])}
                    dropdownRenderer={customDropdownRenderer}
                  />
                ) : (
                  <Select
                    options={options}
                    values={[
                      {
                        value: 1,
                        label: 'ETH',
                        logo: 'Ether'
                      }
                    ]}
                    contentRenderer={customContentRenderer}
                    onChange={value => setCoinValue(value[0])}
                    dropdownRenderer={customDropdownRenderer}
                  />
                )}
              </div>
            </HeaderElement>
            {/* <button onClick={() => setOpen(false)}>
              <img
                alt="svgImg"
                src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHg9IjBweCIgeT0iMHB4Igp3aWR0aD0iMzAiIGhlaWdodD0iMzAiCnZpZXdCb3g9IjAgMCAxNzIgMTcyIgpzdHlsZT0iIGZpbGw6IzAwMDAwMDsiPjxnIHRyYW5zZm9ybT0iIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9Im5vbnplcm8iIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIxIiBzdHJva2UtbGluZWNhcD0iYnV0dCIgc3Ryb2tlLWxpbmVqb2luPSJtaXRlciIgc3Ryb2tlLW1pdGVybGltaXQ9IjEwIiBzdHJva2UtZGFzaGFycmF5PSIiIHN0cm9rZS1kYXNob2Zmc2V0PSIwIiBmb250LWZhbWlseT0ibm9uZSIgZm9udC13ZWlnaHQ9Im5vbmUiIGZvbnQtc2l6ZT0ibm9uZSIgdGV4dC1hbmNob3I9Im5vbmUiIHN0eWxlPSJtaXgtYmxlbmQtbW9kZTogbm9ybWFsIj48cGF0aCBkPSJNMCwxNzJ2LTE3MmgxNzJ2MTcyeiIgZmlsbD0ibm9uZSI+PC9wYXRoPjxnIGlkPSJvcmlnaW5hbC1pY29uIiBmaWxsPSIjZmZmZmZmIj48cGF0aCBkPSJNMTcuMiw0MC4xMzMzM2MtMi4wNjc2NSwtMC4wMjkyNCAtMy45OTA4NywxLjA1NzA5IC01LjAzMzIyLDIuODQzYy0xLjA0MjM2LDEuNzg1OTIgLTEuMDQyMzYsMy45OTQ3NCAwLDUuNzgwNjZjMS4wNDIzNiwxLjc4NTkyIDIuOTY1NTgsMi44NzIyNSA1LjAzMzIyLDIuODQzaDEzNy42YzIuMDY3NjUsMC4wMjkyNCAzLjk5MDg3LC0xLjA1NzA5IDUuMDMzMjIsLTIuODQzYzEuMDQyMzYsLTEuNzg1OTIgMS4wNDIzNiwtMy45OTQ3NCAwLC01Ljc4MDY2Yy0xLjA0MjM2LC0xLjc4NTkyIC0yLjk2NTU4LC0yLjg3MjI1IC01LjAzMzIyLC0yLjg0M3pNMTcuMiw4MC4yNjY2N2MtMi4wNjc2NSwtMC4wMjkyNCAtMy45OTA4NywxLjA1NzA5IC01LjAzMzIyLDIuODQzYy0xLjA0MjM2LDEuNzg1OTIgLTEuMDQyMzYsMy45OTQ3NCAwLDUuNzgwNjZjMS4wNDIzNiwxLjc4NTkyIDIuOTY1NTgsMi44NzIyNSA1LjAzMzIyLDIuODQzaDEzNy42YzIuMDY3NjUsMC4wMjkyNCAzLjk5MDg3LC0xLjA1NzA5IDUuMDMzMjIsLTIuODQzYzEuMDQyMzYsLTEuNzg1OTIgMS4wNDIzNiwtMy45OTQ3NCAwLC01Ljc4MDY2Yy0xLjA0MjM2LC0xLjc4NTkyIC0yLjk2NTU4LC0yLjg3MjI1IC01LjAzMzIyLC0yLjg0M3pNMTcuMiwxMjAuNGMtMi4wNjc2NSwtMC4wMjkyNCAtMy45OTA4NywxLjA1NzA5IC01LjAzMzIyLDIuODQzYy0xLjA0MjM2LDEuNzg1OTIgLTEuMDQyMzYsMy45OTQ3NCAwLDUuNzgwNjZjMS4wNDIzNiwxLjc4NTkyIDIuOTY1NTgsMi44NzIyNSA1LjAzMzIyLDIuODQzaDEzNy42YzIuMDY3NjUsMC4wMjkyNCAzLjk5MDg3LC0xLjA1NzA5IDUuMDMzMjIsLTIuODQzYzEuMDQyMzYsLTEuNzg1OTIgMS4wNDIzNiwtMy45OTQ3NCAwLC01Ljc4MDY2Yy0xLjA0MjM2LC0xLjc4NTkyIC0yLjk2NTU4LC0yLjg3MjI1IC01LjAzMzIyLC0yLjg0M3oiPjwvcGF0aD48L2c+PHBhdGggZD0iIiBmaWxsPSJub25lIj48L3BhdGg+PHBhdGggZD0iIiBmaWxsPSJub25lIj48L3BhdGg+PHBhdGggZD0iIiBmaWxsPSJub25lIj48L3BhdGg+PHBhdGggZD0iIiBmaWxsPSJub25lIj48L3BhdGg+PC9nPjwvZz48L3N2Zz4="
              />
            </button> */}
          </div>
        </>
      ) : null}

      <a className="top-banner" href={navBanners.link}>
        <img src={navBanners.imgUrl} />
      </a>
      

      <RowBetween
        style={
          !isMobile && !isTablet
            ? { alignItems: 'center', width: '100%', justifyContent: 'space-between' }
            : { flexDirection: 'column', alignItems: 'center', width: '100%', justifyContent: 'space-between' }
        }
        padding={isMobile ? '1rem 1rem 0 0px' : '1rem'}
      >
        {!isMobile && !isTablet ? (
          <HeaderElement>
            <div id="network_switcher">
              {coin.length > 0 ? (
                <Select
                  options={options}
                  values={[...coin]}
                  contentRenderer={customContentRenderer}
                  onChange={value => setCoinValue(value[0])}
                  dropdownRenderer={customDropdownRenderer}
                />
              ) : (
                <Select
                  options={options}
                  values={[
                    {
                      value: 1,
                      label: 'ETH',
                      logo: 'Ether'
                    }
                  ]}
                  contentRenderer={customContentRenderer}
                  onChange={value => setCoinValue(value[0])}
                  dropdownRenderer={customDropdownRenderer}
                />
              )}
            </div>
          </HeaderElement>
        ) : null}
        <HeaderControls>
          <HeaderElement>
            <TestnetWrapper>
              {!isMobile ||
                (!isTablet && chainId && NETWORK_LABELS[chainId] && (
                  <NetworkCard>{NETWORK_LABELS[chainId]}</NetworkCard>
                ))}
            </TestnetWrapper>
            <AccountElement active={!!account} style={{ pointerEvents: 'auto' }}>
              {account && userEthBalance ? (
                <BalanceText style={{ flexShrink: 0 }} pl="0.75rem" pr="0.5rem" fontWeight={500}>
                  {userEthBalance?.toSignificant(4)} {ETHER.symbol}
                </BalanceText>
              ) : null}
              <Web3Status />
            </AccountElement>
          </HeaderElement>
          <HeaderElementWrap>
            {/* <VersionSwitch /> */}
            {/* <Settings /> */}
            {/* <Menu /> */}
          </HeaderElementWrap>
        </HeaderControls>
      </RowBetween>
    </HeaderFrame>
  )
}
