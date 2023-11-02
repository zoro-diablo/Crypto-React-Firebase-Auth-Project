import React, { useState } from 'react'
import CoinItem from './CoinItem'
import { useContext } from 'react'
import { ThemeContext } from '../context/ThemeContext'

const CoinSearch = ({ coins }) => {
  const [searchText, setSearchText] = useState('')
  const [currentPage, setCurrentPage] = useState(1)
  const coinsPerPage = 20
  const totalPages = Math.ceil(coins.length / coinsPerPage)
  const { theme } = useContext(ThemeContext)

  return (
    <div className='rounded-div-two my-4 '>
      <div className='flex flex-col md:flex-row justify-between pt-4 pb-6 text-center md:text-right'>
        <h1 className='text-2xl font-semibold my-2 font-mono'>Crypto Market</h1>
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
        <div
          onClick={() => setCurrentPage((old) => Math.max(old - 1, 1))}
          className={
            theme === 'dark'
              ? 'cursor-pointer transition-all bg-violet-700 text-white px-8 py-2 rounded-lg border-cyan-600 border-b-[4px] hover:brightness-110 hover:-translate-y-[1px] hover:border-b-[6px] active:border-b-[2px] active:brightness-90 active:translate-y-[2px] my-3'
              : 'cursor-pointer transition-all bg-slate-900 text-white px-8 py-2 rounded-lg border-cyan-600 border-b-[4px] hover:brightness-110 hover:-translate-y-[1px] hover:border-b-[6px] active:border-b-[2px] active:brightness-90 active:translate-y-[2px] my-3'
          }
        >
          Previous
        </div>
        <div className='self-center mx-4 font-bold border border-gray-500 border-[2]  px-3 py-2 rounded'>
          {currentPage}
        </div>
        <div
          onClick={() => setCurrentPage((old) => Math.min(old + 1, totalPages))}
          className={
            theme === 'dark'
              ? 'cursor-pointer transition-all bg-violet-700 text-white px-10 py-2 rounded-lg border-cyan-600 border-b-[4px] hover:brightness-110 hover:-translate-y-[1px] hover:border-b-[6px] active:border-b-[2px] active:brightness-90 active:translate-y-[2px] my-3'
              : 'cursor-pointer transition-all bg-slate-900 text-white px-10 py-2 rounded-lg border-cyan-600 border-b-[4px] hover:brightness-110 hover:-translate-y-[1px] hover:border-b-[6px] active:border-b-[2px] active:brightness-90 active:translate-y-[2px] my-3'
          }
        >
          Next
        </div>
      </div>
    </div>
  )
}

export default CoinSearch
