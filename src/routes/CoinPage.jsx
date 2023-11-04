import React, { useState, useEffect } from 'react'
import axios from 'axios'
import {
  Sparklines,
  SparklinesLine,
  SparklinesSpots,
  SparklinesReferenceLine,
} from 'react-sparklines'
import SmallLoader from '../components/SmallLoader'
import { FaTwitter, FaFacebook, FaReddit, FaGithub } from 'react-icons/fa'
import DOMPurify from 'dompurify'
import { useParams } from 'react-router-dom'
import { useContext } from 'react'
import { ThemeContext } from '../context/ThemeContext'

const CoinPage = () => {
  const [coin, setCoin] = useState({})
  const params = useParams()
  const { theme } = useContext(ThemeContext)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const url = `https://api.coingecko.com/api/v3/coins/${params.coinId}?localization=false&sparkline=true`

    axios
      .get(url)
      .then((response) => {
        setCoin(response.data)
        setIsLoading(false)
      })
      .catch((error) => {
        console.error('Axios Error:', error)
        setIsLoading(false)
      })
  }, [params.coinId])

  return (
    <div
      className={`rounded-coin-page mx-auto my-12 py-8 ${
        theme === 'dark'
          ? 'bg-gradient-to-tl from-gray-900 to-gray-950 hover:from-gray-800 hover:to-gray-950 border-r-2 border-t-2 border-gray-900'
          : 'brightness-100 bg-gradient-to-tl from-slate-100 to-white hover:from-slate-100 hover:to-white border-r-2 border-t-2 border-slate-200'
      } rounded-lg overflow-hidden`}
    >
      <div className='mx-5'>
        <div className='flex py-8'>
          <div className='flex'>
            {isLoading ? (
              <SmallLoader />
            ) : (
              <img className='w-20 mr-8' src={coin.image?.large} alt='/' />
            )}
            <div className='my-auto'>
              <p className='text-3xl font-bold'>{coin.name}</p>
              <p className='mt-1 font-semibold'>
                ({coin.symbol?.toUpperCase()} / INR)
              </p>
            </div>
          </div>
        </div>
        <div className='grid md:grid-cols-2 gap-8'>
          <div>
            <div className='flex justify-between font-sans'>
              {coin.market_data?.current_price ? (
                <p className='text-4xl font-bold mr-2'>
                  ₹{coin.market_data.current_price.inr.toLocaleString()}
                </p>
              ) : null}
              <p className='my-auto font-bold'>7 Day</p>
            </div>
            <div>
              {coin.market_data?.sparkline_7d ? (
                <Sparklines
                  data={coin.market_data.sparkline_7d.price}
                  margin={6}
                >
                  <SparklinesLine
                    style={{ strokeWidth: '1', stroke: 'teal', fill: 'none' }}
                  />
                  <SparklinesSpots
                    size={2}
                    style={{
                      stroke: '#336aff',
                      strokeWidth: '1',
                      fill: 'white',
                    }}
                  />
                  <SparklinesReferenceLine
                    style={{
                      stroke: 'red',
                      strokeOpacity: 0.75,
                      strokeDasharray: '2, 2',
                    }}
                  />
                </Sparklines>
              ) : null}
            </div>
            <div className='flex justify-between py-4'>
              <div>
                <p className='text-gray-500 text-sm font-mono'>Market Cap</p>
                {coin.market_data?.market_cap ? (
                  <p className='font-bold'>
                    ₹{coin.market_data.market_cap.inr.toLocaleString()}
                  </p>
                ) : null}
              </div>
              <div>
                <p className='text-gray-500 text-sm font-mono text-right'>
                  Volume (24h)
                </p>
                {coin.market_data?.total_volume ? (
                  <p className='font-bold'>
                    ₹{coin.market_data.total_volume.inr.toLocaleString()}
                  </p>
                ) : null}
              </div>
            </div>
            <div className='flex justify-between py-4'>
              <div>
                <p className='text-gray-500 text-sm font-mono text-left'>
                  24h High
                </p>
                {coin.market_data?.high_24h ? (
                  <p className='font-bold'>
                    ₹{coin.market_data.high_24h.inr.toLocaleString()}
                  </p>
                ) : null}
              </div>
              <div>
                <p className='text-gray-500 text-sm font-mono text-right'>
                  24h Low
                </p>
                {coin.market_data?.low_24h ? (
                  <p className='font-bold'>
                    ₹{coin.market_data.low_24h.inr.toLocaleString()}
                  </p>
                ) : null}
              </div>
            </div>
          </div>
          <div>
            <p className='text-xl font-bold'>Market Stats</p>
            <div className='flex justify-between py-4'>
              <div className='md:mr-24'>
                <p className='text-gray-500 text-sm font-mono '>Market Rank</p>
                <p className='font-bold'>{coin.market_cap_rank}</p>
              </div>
              <div className='mx-auto'>
                <p className='text-gray-500 text-sm font-mono'>
                  Hashing Algorithm
                </p>
                <p className='font-bold'>{coin.hashing_algorithm || 'Null'}</p>
              </div>
              <div className=' mx-auto'>
                <p className='text-gray-500 text-sm font-mono'>Trust Score</p>
                <div className='font-bold'>
                  {coin.tickers ? coin.liquidity_score.toFixed(2) : null}
                </div>
              </div>
            </div>
            <div className='flex justify-between py-4'>
              <div>
                <p className='text-gray-500 text-sm font-mono'>
                  Price Change (24h)
                </p>
                {coin.market_data ? (
                  <p className='font-bold'>
                    {coin.market_data.price_change_percentage_24h.toFixed(2)}%
                  </p>
                ) : null}
              </div>
              <div>
                <p className='text-gray-500 text-sm font-mono'>
                  Price Change (7d)
                </p>
                {coin.market_data ? (
                  <p className='font-bold'>
                    {coin.market_data.price_change_percentage_7d.toFixed(2)}%
                  </p>
                ) : null}
              </div>
              <div>
                <p className='text-gray-500 text-sm font-mono'>
                  Price Change (14d)
                </p>
                {coin.market_data ? (
                  <p className='font-bold'>
                    {coin.market_data.price_change_percentage_14d.toFixed(2)}%
                  </p>
                ) : null}
              </div>
            </div>
            <div className='flex justify-between py-4'>
              <div>
                <p className='text-gray-500 text-sm font-mono'>
                  Price Change (30d)
                </p>
                {coin.market_data ? (
                  <p className='font-bold'>
                    {coin.market_data.price_change_percentage_30d.toFixed(2)}%
                  </p>
                ) : null}
              </div>
              <div>
                <p className='text-gray-500 text-sm font-mono'>
                  Price Change (60d)
                </p>
                {coin.market_data ? (
                  <p className='font-bold'>
                    {coin.market_data.price_change_percentage_60d.toFixed(2)}%
                  </p>
                ) : null}
              </div>
              <div className='mr-2'>
                <p className='text-gray-500 text-sm font-mono '>
                  Price Change (1y)
                </p>
                {coin.market_data ? (
                  <p className='font-bold'>
                    {coin.market_data.price_change_percentage_1y.toFixed(2)}%
                  </p>
                ) : null}
              </div>
            </div>
            <div className='flex justify-around p-8 text-accent'>
              <FaTwitter size={30} />
              <FaFacebook size={30} />
              <FaReddit size={30} />
              <FaGithub size={30} />
            </div>
          </div>
        </div>
        {/* Description */}
        <div className='py-4'>
          <p className='text-xl font-bold'>About {coin.name}</p>
          <p
            className='mt-6'
            dangerouslySetInnerHTML={{
              __html: DOMPurify.sanitize(
                coin.description ? coin.description.en : ''
              ),
            }}
          ></p>
        </div>
      </div>
    </div>
  )
}

export default CoinPage
