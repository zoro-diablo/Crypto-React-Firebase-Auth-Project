import React, { useState } from 'react'
import CoinSearch from '../components/CoinSearch'
import Trending from '../components/Trending'
import Loader from '../components/Loader'

const Home = ({ coins }) => {
  const [isLoading, setIsLoading] = useState(true)


  setTimeout(() => {
    setIsLoading(false)
  }, 2000) 
  return (
    <div>
      {isLoading ? (
     
        <div className='absolute flex h-full items-center justify-center  w-full'>
          <Loader />
        </div>
      ) : (
        <CoinSearch coins={coins} />
      )}
      <Trending />
    </div>
  )
}

export default Home
