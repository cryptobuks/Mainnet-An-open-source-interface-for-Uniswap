/* eslint-disable @typescript-eslint/camelcase */
import React, { useEffect } from 'react'
import styled from 'styled-components'
import { isMobile, isTablet } from 'react-device-detect'
import Marquee from 'react-fast-marquee'
import { Swiper, SwiperSlide } from 'swiper/react'
import { HotIcon } from '../components/Icon/Icons'
import './globals.css';
import './swiper.css'
import './test.css'
import './nav.scss'
import './scrollbar.scss';
import './range-slider.css'; 
import 'tailwindcss/tailwind.css'
import { banners, tickerItems } from '../constants/swap-data/data'
import { InfluxDB } from "@influxdata/influxdb-client";
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper'
// import { UniswapTradingview, Dex } from 'uniswap-tradingview'
// import TradingView from '../utils/tradingview/main'

import TopCurrencyTable from 'src/components/CurrencyTable';
import Favorites from 'src/components/favorites'
import ComparisonChart from 'src/components/retro-comparision-chart'
import Tricker from 'src/components/tricker'
export const MainWrapper = styled.div`
width: 100%;
  .d-none{
    display: none !important;
  }
`
export const BodyWrapper = styled.div`
  position: relative;
  max-width: 480px;
  margin: 0 auto;
  width: 100%;
  background: ${({ theme }) => theme.bg1};
  box-shadow: 0px 0px 1px rgba(0, 0, 0, 0.01), 0px 4px 8px rgba(0, 0, 0, 0.04), 0px 16px 24px rgba(0, 0, 0, 0.04),
    0px 24px 32px rgba(0, 0, 0, 0.01);
  padding: 1rem;

`

// const columns = [
//   {
//     name: 'Date',
//     selector: (row: { date: any }) => row.date,
//     sortable: true
//   },
//   {
//     name: 'Type',
//     selector: (row: { type: any }) => row.type,
//     sortable: true
//   },
//   {
//     name: 'Price USD',
//     selector: (row: { usd: any }) => row.usd,
//     sortable: true
//   },
//   {
//     name: 'Amount USDT',
//     selector: (row: { amount: any }) => row.amount,
//     sortable: true
//   },
//   {
//     name: 'Price WBRISE',
//     selector: (row: { WBRISE: any }) => row.WBRISE,
//     sortable: true
//   }
// ]

// const data = [
//   {
//     WBRISE: 0,
//     id: '62b262bd-deb1-4c3b-91c8-d0b666ecf0d5',
//     usd: '$2,579.76',
//     amount: '$2,912.39',
//     type: 'buy',
//     date: '2019-08-28T11:32:39 -05:-30'
//   },
//   {
//     WBRISE: 1,
//     id: '6a211f88-9a73-44b0-a8de-030d77bae45b',
//     usd: '$1,613.51',
//     amount: '$2,289.06',
//     type: 'buy',
//     date: '2014-01-06T11:34:04 -04:-30'
//   },
//   {
//     WBRISE: 2,
//     id: 'a95cfa80-a1db-4bdd-9dff-54b7600e21ce',
//     usd: '$3,106.79',
//     amount: '$2,933.92',
//     type: 'sell',
//     date: '2017-06-25T10:55:15 -05:-30'
//   },
//   {
//     WBRISE: 0,
//     id: '222bba03-f23e-4fa9-9a39-dc086244a66f',
//     usd: '$3,360.33',
//     amount: '$1,183.99',
//     type: 'buy',
//     date: '2022-03-20T03:01:19 -04:-30'
//   },
//   {
//     WBRISE: 1,
//     id: '3b5886c4-5f6e-4bd6-b26a-94d9da3b987c',
//     usd: '$2,278.56',
//     amount: '$2,473.84',
//     type: 'sell',
//     date: '2020-07-25T11:32:27 -05:-30'
//   },
//   {
//     WBRISE: 2,
//     id: 'e2f97ca2-4297-4d95-bd8a-5e6aa3ad9c55',
//     usd: '$2,407.50',
//     amount: '$3,471.47',
//     type: 'buy',
//     date: '2017-04-18T11:24:25 -05:-30'
//   },
//   {
//     WBRISE: 3,
//     id: '196eb22d-ed55-4fd1-b1d9-392c4b7b2743',
//     usd: '$2,930.11',
//     amount: '$2,698.76',
//     type: 'sell',
//     date: '2018-03-19T11:48:50 -04:-30'
//   },
//   {
//     WBRISE: 4,
//     id: '929ae237-c2b8-4cd1-9cb7-1322d6c92f41',
//     usd: '$3,618.76',
//     amount: '$1,646.86',
//     type: 'buy',
//     date: '2021-06-20T07:44:47 -05:-30'
//   },
//   {
//     WBRISE: 5,
//     id: '03c461d8-c13f-4be6-81f1-d28c91366486',
//     usd: '$3,752.24',
//     amount: '$3,993.58',
//     type: 'buy',
//     date: '2015-12-05T09:53:54 -04:-30'
//   },
//   {
//     WBRISE: 6,
//     id: 'e885eb6b-bc10-4a07-b0cb-0b412750bfd9',
//     usd: '$1,886.35',
//     amount: '$1,677.64',
//     type: 'buy',
//     date: '2018-11-28T08:54:10 -04:-30'
//   },
//   {
//     WBRISE: 3,
//     id: '95f88b26-1113-46c9-a19c-b4979571c1ab',
//     usd: '$3,384.54',
//     amount: '$3,596.54',
//     type: 'sell',
//     date: '2015-07-13T06:35:11 -05:-30'
//   },
//   {
//     WBRISE: 4,
//     id: '4efe9a62-262a-4811-8b7d-938fbaec153b',
//     usd: '$2,079.94',
//     amount: '$1,716.35',
//     type: 'sell',
//     date: '2016-02-10T02:48:34 -04:-30'
//   },
//   {
//     WBRISE: 5,
//     id: 'd1ddb8be-e987-49ff-ae13-7405be5a4a31',
//     usd: '$3,155.75',
//     amount: '$3,359.41',
//     type: 'sell',
//     date: '2015-12-13T10:37:19 -04:-30'
//   }
// ]
// createTheme('dark', {
//   text: {
//     primary: '#fff',
//     secondary: 'rgba(255,255,255,.42)'
//   },
//   background: {
//     default: 'transparent'
//   },
//   context: {
//     background: '#cb4b16',
//     text: '#FFFFFF'
//   },
//   divider: {
//     default: '#23323c'
//   },
//   action: {
//     button: 'rgba(0,0,0,.54)',
//     hover: '#23323C',
//     disabled: 'rgba(0,0,0,.12)'
//   }
// })
// const customStyles = {
//   rows: {
//     style: {
//       minHeight: '36px' // override the row height
//     }
//   },
//   headCells: {
//     style: {
//       paddingLeft: '8px', // override the cell padding for head cells
//       paddingRight: '8px',
//       color: '#818ea3',
//       fontWeight: 700,
//       fontSize: '14px',
//       backgroundColor: '#0d1321'
//     }
//   },
//   cells: {
//     style: {
//       paddingLeft: '8px', // override the cell padding for data cells
//       paddingRight: '8px'
//     }
//   }
// }

// const conditionalRowStyles = [
//   {
//     when: (row: { type: string }) => row.type === 'buy',
//     style: {
//       color: 'rgba(63, 195, 128, 0.9)',
//       '&:hover': {
//         cursor: 'pointer'
//       }
//     }
//   },
//   {
//     when: (row: { type: string }) => row.type === 'sell',
//     style: {
//       color: '#ea3943',
//       '&:hover': {
//         cursor: 'pointer'
//       }
//     }
//   }
// ]
/**
 * The styled container element that wraps the content of most pages and the tabs.
 */
export default function AppBody({ children }: { children: React.ReactNode }) {
  const getData = async ( t="0x55d398326f99059ff775485246999027b3197955") => {
    const token = "M6lZJYgygHhLfcWJSK6EQbkyFFK6mUQ1OPmbBgBI7inUhk52olVI4iVf8JVn7L8TPDEpKYwzZJ6RCWdnizQmjw=="
    const org = "abba";
    const bucket = "default";
    const url = "http://82.115.18.68:8068";

      const query = `from(bucket: "${bucket}")
        |> range(start: -24h)
        |> filter(fn: (r) => r["_measurement"] == "transfer")
        |> filter(fn: (r) => r["token"] == "${t}")
        `
      const res:{[key:string]:{
          token:string
          symbol:string
          name:string
          to:string
          from:string
          tokenValue:string
          otherSymbolName:string
          amount:string
        }|any}={}

        const queryApi = await new InfluxDB({ url, token ,transportOptions: {rejectUnauthorized: false}}).getQueryApi(org);
      await queryApi.queryRows(query, {
          next(row, tableMeta) {
              const o = tableMeta.toObject(row);
              const item=res[o._time] || {}
              item[o._field]=o._value
              res[o._time]=item
          },
          complete() {                
            alert()              
          },
          error(error:Error) {
            console.log("query failed- ", error)
          }
      });
      console.log('res is' , res)
      return res

  }
  useEffect(() => {
    getData('0x55d398326f99059ff775485246999027b3197955');
    document.body.classList.add('app-page')
    return () => {
      document.body.classList.remove('app-page')
    }
  }, [])
  let num = 4
  if (isMobile && !isTablet) {
    num = 1
  } else if (isTablet) {
    num = 2
  }

  return (
    // <section id="main_wrap">
    <MainWrapper className='rounded-lg pt-8 mt-8'>
      <section id="content_wrapper">
        <div className="header-hot-pairs">
         
         
          <Tricker />
        </div>
        <div className="promo_box d-none">
          <Swiper
            modules={[Navigation, Pagination, Scrollbar, A11y]}
            spaceBetween={15}
            navigation
            slidesPerView={num}
            onSlideChange={() => console.log('slide change')}
            onSwiper={swiper => console.log(swiper)}
          >
            {banners.map((item, index) => {
              return (
                <SwiperSlide key={index}>
                  <a href={item.link} target="_blank" rel="noreferrer">
                    <img src={item.imgUrl} />
                  </a>
                </SwiperSlide>
              )
            })}
          </Swiper>
        </div>
        <div className="swap_wrapper">
          <section className="swap_box_wrapper flex  w-full flex-col lg:flex-row ">
            <BodyWrapper className='roundend-lg'>
              {children}
            </BodyWrapper>
            <ComparisonChart  />
            <Favorites />
          </section>
          
          <TopCurrencyTable />
  
        </div>
      </section>
    </MainWrapper>
  )
}
