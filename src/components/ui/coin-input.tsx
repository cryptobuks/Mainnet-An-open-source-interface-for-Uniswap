import React, { useMemo } from 'react'
import type { CoinTypes } from 'src/types';
import { useState, useRef } from 'react';
//@ts-ignore
import { motion, AnimatePresence } from 'framer-motion/dist/framer-motion';
import cn from 'classnames';
import { ChevronDown } from 'src/components/Icon/chevron-down';
import { useClickAway } from 'src/hooks/use-click-away';
import { useLockBodyScroll } from 'src/hooks/use-lock-body-scroll';
// import { coinList } from '@/data/static/coin-list';
import { ChainId, ETHER } from '@uniswap/sdk'
import Logos from '../../utils/icons'
import CoinSelectView from 'src/components/ui/coin-select-view'
const options = [
  { value: String([ChainId.MAINNET][0]), label: 'ETH', logo: 'Ether' },
  { value: String([ChainId.BNB][0]), label: 'BNB', logo: 'BNB' },
  { value: String([ChainId.AVALANCHE_CMAINNET][0]), label: 'AVALANCHE', logo: 'Avalanche' },
  { value: String([ChainId.POLYGON][0]), label: 'POLYGON', logo: 'POLYGON' },
  { value: String([ChainId.FANTOM][0]), label: 'FANTOM', logo: 'FANTOM' },
  // { value: String([ChainId.HECO][0]), label: 'HECO', logo: 'heco' },
  { value: String([ChainId.OPTIMISM][0]), label: 'OPTIMISM', logo: 'OPTIMISM' },
  // { value: String([ChainId.HARMONY][0]), label: 'HARMONY', logo: 'Ether' },
  { value: String([ChainId.CELO][0]), label: 'CELO', logo: 'CELO' },
  { value: String([ChainId.ETHClassic][0]), label: 'ETHClassic', logo: 'ethc' },
  { value: String([ChainId.ARBITRUM][0]), label: 'ARBITRUM', logo: 'arbit' },
  // { value: String([ChainId.HARMONY_TESTNET][0]), label: 'HARMONY TESTNET', logo: 'Ether' },
  { value: String([ChainId.ROPSTEN][0]), label: 'ROPSTEN', logo: 'Ether' },
  { value: String([ChainId.FANTOM_TESTNET][0]), label: 'FANTOM TESTNET', logo: 'FANTOM' },
  { value: String([ChainId.RINKEBY][0]), label: 'RINKEBY', logo: 'Ether' },
  { value: String([ChainId.GOERIL][0]), label: 'GOERIL', logo: 'Ether' },
  { value: String([ChainId.KOVAN][0]), label: 'KOVAN', logo: 'Ether' },
  { value: String([ChainId.ARBITRUM_RINKEBY][0]), label: 'RINKEBY', logo: 'arbit' },
  // { value: String([ChainId.HECO_TESTNET][0]), label: 'HECO TESTNET', logo: 'heco' },
  { value: String([ChainId.AVALANCHE_FUJI_TESTNET][0]), label: 'FUJI', logo: 'Avalanche' },
  { value: String([ChainId.BNBTESTNET][0]), label: 'BNB TESTNET', logo: 'BNB' },
  { value: String([ChainId.OPTIMISM_GOERLI][0]), label: 'OPTIMISM GOERIL', logo: 'OPTIMISM' },
  { value: String([ChainId.CELO_TESTNET][0]), label: 'CELO TESTNET', logo: 'CELO' },
  { value: String([ChainId.MUMBAI][0]), label: 'MUMBAI', logo: 'POLYGON' }
]

interface CoinInputTypes extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  exchangeRate?: number;
  defaultCoinIndex?: number;
  className?: string;
  getCoinValue: (param: { coin: string; value: string }) => void;
}

const decimalPattern = /^[0-9]*[.,]?[0-9]*$/;

export default function CoinInput({
  label,
  getCoinValue,
  defaultCoinIndex = 0,
  exchangeRate,
  className,
  ...rest
}: CoinInputTypes) {
  let [value, setValue] = useState('');
  const coinList:CoinTypes[]= useMemo(() => {
    return options.map(item => {return  {
      icon: <img className="w-4 mr-2" src={Logos[`${item.logo?.toLowerCase()}.png`]}/>,
      code: item.label,
      name: item.value,
      price: Math.ceil(Math.random()*10000)/100,
   }})
  }, [options])
  console.log(coinList);
  
  let [selectedCoin, setSelectedCoin] = useState<CoinTypes>(coinList[defaultCoinIndex]);
  let [visibleCoinList, setVisibleCoinList] = useState(false);
  const modalContainerRef = useRef<HTMLDivElement>(null);
  useClickAway(modalContainerRef, () => {
    setVisibleCoinList(false);
  });
  useLockBodyScroll(visibleCoinList);
  const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    // if (event.target.value.match(decimalPattern)) {
    //   setValue(event.target.value);
    //   let param = { coin: selectedCoin.code, value: event.target.value };
    //   getCoinValue && getCoinValue(param);
    // }
  };
  function handleSelectedCoin(coin: CoinTypes) {
    setSelectedCoin(coin);
    setVisibleCoinList(false);
  }
  return (
    <>
      <div
        className={cn(
          'group flex min-h-[70px] rounded-lg border border-gray-200 transition-colors duration-200 hover:border-gray-900 dark:border-gray-700 dark:hover:border-gray-600',
          className
        )}
      >
        <div className="min-w-[80px] border-r border-gray-200 p-3 transition-colors duration-200 group-hover:border-gray-900 dark:border-gray-700 dark:group-hover:border-gray-600">
          <span className="mb-1.5 block text-xs uppercase text-gray-600 dark:text-gray-400">
            {label}
          </span>
          <button
            onClick={() => setVisibleCoinList(true)}
            className="flex items-center font-medium outline-none dark:text-gray-100"
          >
            {selectedCoin?.icon}{' '}
            <span className="ltr:ml-2 rtl:mr-2">{selectedCoin?.code} </span>
            <ChevronDown className="ltr:ml-1.5 rtl:mr-1.5" />
          </button>
        </div>
        <div className="flex flex-1 flex-col text-right">
          <input
            type="text"
            value={value}
            placeholder="0.0"
            inputMode="decimal"
            onChange={handleOnChange}
            className="w-full rounded-tr-lg rounded-br-lg border-0 pb-0.5 text-right text-lg outline-none focus:ring-0 dark:bg-light-dark"
            {...rest}
          />
          <span className="font-xs px-3 text-gray-400">
            = ${exchangeRate ? exchangeRate : '0.00'}
          </span>
        </div>
      </div>

      <AnimatePresence>
        {visibleCoinList && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-50 overflow-y-auto overflow-x-hidden bg-gray-700 bg-opacity-60 p-4 text-center backdrop-blur xs:p-5"
          >
            {/* This element is to trick the browser into centering the modal contents. */}
            <span
              className="inline-block h-full align-middle"
              aria-hidden="true"
            >
              &#8203;
            </span>
            <motion.div
              initial={{ scale: 1.05 }}
              animate={{ scale: 1 }}
              exit={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
              ref={modalContainerRef}
              className="inline-block text-left align-middle"
            >
              <CoinSelectView
                onSelect={(selectedCoin) => handleSelectedCoin(selectedCoin)}
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

CoinInput.displayName = 'CoinInput';
