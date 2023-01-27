import { Bitcoin } from 'src/components/Icon/bitcoin';
import { Ethereum } from 'src/components/Icon/ethereum';
import { Tether } from 'src/components/Icon/tether';
import { Bnb } from 'src/components/Icon/bnb';
import { Usdc } from 'src/components/Icon/usdc';
import { Cardano } from 'src/components/Icon/cardano';
import { Doge } from 'src/components/Icon/doge';

export const coinList = [
  {
    icon: <Bitcoin />,
    code: 'BTC',
    name: 'Bitcoin',
    price: 19076.29,
  },
  {
    icon: <Ethereum />,
    code: 'ETH',
    name: 'Ethereum',
    price: 1053.28,
  },
  {
    icon: <Tether />,
    code: 'USDT',
    name: 'Tether USD',
    price: 0.999,
  },
  {
    icon: <Bnb />,
    code: 'BNB',
    name: 'Binance Coin',
    price: 214.96,
  },
  {
    icon: <Usdc />,
    code: 'USDC',
    name: 'USD Coin',
    price: 1.001,
  },
  {
    icon: <Cardano />,
    code: 'ADA',
    name: 'Cardano',
    price: 0.448,
  },
  {
    icon: <Doge />,
    code: 'DOGE',
    name: 'Doge Coin',
    price: 0.065,
  },
];
