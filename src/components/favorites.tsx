import React from 'react'
import cn from 'classnames';
import { TopPoolsData } from '../data/static/token-data';
import CurrencySwapIcons from './ui/currency-swap-icons';
import { CoinList } from './ui/currency-swap-icons';
import { useLayout } from '../hooks/use-layout';
import { LAYOUT_OPTIONS } from '../lib/constants';
import TopupButton from './ui/topup-button';
import OverviewChart from './ui/overview-chart';

interface TopPoolsProps {
  limit?: number;
}

export default function Favorites({ limit }: TopPoolsProps) {
  const { layout } = useLayout();
  return (
    <div
      className={cn(
        'rounded-lg bg-white shadow-card dark:bg-light-dark flex-auto w-1 ',
        {
          'w-full lg:w-[49%]': layout === LAYOUT_OPTIONS.RETRO,
        }
      )}
    >
      <div className="p-6">

      <h3 className="mb-6 text-base font-medium uppercase">FAVORITES </h3>
      <div className="rounded-lg bg-white  shadow-card dark:bg-light-dark sm:p-8">
        <span className="col-span-2">Your favorite list is empty!
          Start building your favorite list by adding this pair.</span>
      </div>
      <TopupButton className='mb-44' />
      </div>
      <OverviewChart />
    </div>
  );
}
