import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

const Trending = () => {
  const [trending, setTrending] = useState([])

  const url = 'https://api.coingecko.com/api/v3/search/trending'

  useEffect(() => {
    axios
      .get(url)
      .then((response) => {
        setTrending(response.data.coins)
      })
      .catch((error) => {
        console.error('Axios Error:', error)
      })
  }, [])

  return (
    <div className='rounded-div mr-12 py-8 text-primary'>
      <h1 className='text-2xl font-bold py-2 ml-7 mb-2 font-mono'>
        Trending Coins
      </h1>
      <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-5 mx-5'>
        {trending.map((coin, idx) => (
          <div
            key={idx}
            className='rounded-div flex justify-between p-4 mx-5 hover:scale-105 ease-in duration-300'
          >
            {/* Use Link to navigate to the specific coin's page */}
            <Link to={`/coin/${coin.item.id}`}>
              <div className='flex w-full items-center justify-between mx-5'>
                <div className='flex'>
                  <img
                    className='mr-4 rounded-full'
                    src={coin.item.small}
                    alt='/'
                  />
                  <div>
                    <p className='font-bold'>{coin.item.name}</p>
                    <p>{coin.item.symbol}</p>
                  </div>
                </div>
                <div className='flex items-center'>
                  <img
                    className='w-4 mr-2'
                    src='https://assets.coingecko.com/coins/images/1/large/bitcoin.png?1547033579'
                    alt='/'
                  />
                  <p>{coin.item.price_btc.toFixed(7)}</p>
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Trending
