import React from 'react'
import { HomeIcon } from 'src/components/Icon/home';
import { DiskIcon } from 'src/components/Icon/disk';
import { PlusCircle } from 'src/components/Icon/plus-circle';
import { BookIcon } from 'src/components/Icon/book';
import { Unlocked } from 'src/components/Icon/unlocked';
import { ExchangeIcon } from 'src/components/Icon/exchange';
import { VoteIcon } from 'src/components/Icon/vote-icon';
import { CompassIcon } from 'src/components/Icon/compass';
import { HistoryIcon } from 'src/components/Icon/history';



export const menuItems = [
  {
    name: 'Home',
    icon: <HomeIcon />,
    href: "#",
  },
  {
    name: 'Swap',
    icon: <ExchangeIcon />,
    href: "#",
  },
  {
    name: 'Liquidity ',
    icon: <BookIcon />,
    href: "#",
  },
 
  {
    name: 'Lock Token',
    icon: <DiskIcon />,
    href: "#",
  },
  {
    name: 'Private Sall',
    icon: <Unlocked />,
    href: "#",
  },
  {
    name: 'Presale Token',
    icon: <VoteIcon />,
    href: "#",
  },

  {
    name: 'Telegram Bot',
    icon: <HistoryIcon />,
    href: "#",
  },

  {
    name: 'Airdrop',
    icon: <CompassIcon />,
    href: "#",
  },

  {
    name: 'Your Adv',
    icon: <PlusCircle />,
    href: "#",
  },
];
