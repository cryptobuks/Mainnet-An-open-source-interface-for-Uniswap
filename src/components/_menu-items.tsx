import { HomeIcon } from './Icon/home';
import { DiskIcon } from './Icon/disk';
import { PlusCircle } from './Icon/plus-circle';
import { BookIcon } from './Icon/book';
import { Unlocked } from './Icon/unlocked';
import { ExchangeIcon } from './Icon/exchange';
import { VoteIcon } from './Icon/vote-icon';
import { CompassIcon } from './Icon/compass';
import { HistoryIcon } from './Icon/history';
import React from 'react'


export const menuItems = [
  {
    name: 'Home',
    icon: <HomeIcon />,
    href:"/",
  },
  {
    name: 'Swap',
    icon: <ExchangeIcon />,
    href:"/",
  },
  {
    name: 'Liquidity ',
    icon: <BookIcon />,
    href:"/",
  },
 
  {
    name: 'Lock Token',
    icon: <DiskIcon />,
    href:"/",
  },
  {
    name: 'Private Sall',
    icon: <Unlocked />,
    href:"/",
  },
  {
    name: 'Presale Token',
    icon: <VoteIcon />,
    href:"/",
  },

  {
    name: 'Telegram Bot',
    icon: <HistoryIcon />,
    href:"/",
  },

  {
    name: 'Airdrop',
    icon: <CompassIcon />,
    href:"/",
  },

  {
    name: 'Your Adv',
    icon: <PlusCircle />,
    href:"/",
  },
];
