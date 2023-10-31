import React, { useState } from 'react'
import CoinItem from './CoinItem'

const CoinSearch = ({ coins }) => {
  const [searchText, setSearchText] = useState('')
  const [currentPage, setCurrentPage] = useState(1)
  const coinsPerPage = 20
  const totalPages = Math.ceil(coins.length / coinsPerPage)

  return (
    <div className='rounded-div-two my-4 '>
      <div className='flex flex-col md:flex-row justify-between pt-4 pb-6 text-center md:text-right'>
        <h1 className='text-2xl font-bold my-2'>Search Crypto</h1>
        <form>
          <input
            className='w-full bg-primary border border-input px-4 py-2 rounded-2xl shadow-xl'
            onChange={(e) => setSearchText(e.target.value)}
            type='text'
            placeholder='Search a coin'
          />
        </form>
      </div>

      <table className='w-full border-collapse text-center font-mono'>
        <thead>
          <tr className='border-b'>
            <th></th>
            <th className='px-4'>#</th>
            <th className='text-left'>Coin</th>
            <th></th>
            <th>Price</th>
            <th>24h</th>
            <th className='hidden md:table-cell'>24h Volume</th>
            <th className='hidden sm:table-cell'>Market Cap</th>
            <th>Last 7 days</th>
          </tr>
        </thead>
        <tbody>
          {coins
            .filter((value) => {
              if (searchText === '') {
                return true // Keep all items when searchText is empty
              } else if (
                value.name.toLowerCase().includes(searchText.toLowerCase())
              ) {
                return true // Keep items that match the search
              }
              return false // Filter out items that don't match the search
            })
            .slice((currentPage - 1) * coinsPerPage, currentPage * coinsPerPage)
            .map((coin) => (
              <CoinItem key={coin.id} coin={coin} />
            ))}
        </tbody>
      </table>

      <div className='flex justify-center '>
        <button
          onClick={() => setCurrentPage((old) => Math.max(old - 1, 1))}
          className='py-2 px-4 bg-button text-btnText my-2 ml-2 rounded-2xl shadow-lg hover:shadow-2xl font-bold'
        >
          Previous
        </button>
        <div className='self-center mx-4 font-bold border border-gray-500 border-[2]  px-3 py-2 rounded'>{currentPage}</div>
        <button
          onClick={() => setCurrentPage((old) => Math.min(old + 1, totalPages))}
          className='py-2 px-4 bg-button text-btnText my-2 ml-2 rounded-2xl shadow-lg hover:shadow-2xl font-bold'
        >
          Next
        </button>
      </div>
    </div>
  )
}

export default CoinSearch
