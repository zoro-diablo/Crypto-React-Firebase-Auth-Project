import React from 'react'
import { AiFillCloseCircle } from 'react-icons/ai'
import { Link } from 'react-router-dom'
import {BsFillArrowUpCircleFill} from 'react-icons/bs'
import {BsFillArrowDownCircleFill} from 'react-icons/bs'

const Card = ({ coin, deleteCoin }) => {
  return (
    <div className='relative group cursor-pointer group overflow-hidden text-gray-50 h-62 w-56  rounded-2xl hover:duration-700 duration-700'>
      <div className='w-56 h-48 bg-gradient-to-r from-indigo-500 text-gray-800'>
        <div className='flex flex-row justify-between'>
          <Link to={`/coin/${coin.id}`}>
            <p className='font-bold text-2xl text-white mr-2 m-2'>
              #{coin?.rank}
            </p>
          </Link>
          <AiFillCloseCircle
            size={20}
            className='m-3 cursor-pointer bg-white rounded-full hover:bg-red-600'
            onClick={() => deleteCoin(coin.id)}
          />
        </div>
        <Link to={`/coin/${coin.id}`}>
          <img src={coin?.image} className='w-20 mx-auto my-4' alt='/' />
        </Link>
      </div>
      <div className='absolute bg-gray-50 -bottom-24 w-56 p-3 flex flex-col gap-1 group-hover:-bottom-0 group-hover:duration-600 duration-500'>
        <span className='text-accent font-bold text-xs'>
          <Link to={`/coin/${coin.id}`}>{coin?.symbol.toUpperCase()}</Link>
        </span>
        <Link to={`/coin/${coin.id}`}>
          <span className='text-gray-800 font-bold text-xl'>{coin?.name}</span>
        </Link>
        {coin.upordown > 0 ? (
          <div className='flex w-full items-center justify-center'>
            <p className='text-green-800 font-semibold mx-2'>
              {coin?.upordown.toFixed(2)}%{' '}
            </p>
            <BsFillArrowUpCircleFill className='text-green-500 my-auto' />
          </div>
        ) : (
          <div className='flex w-full items-center justify-center'>
            <p className='text-red-800 font-semibold mx-2'>
              {coin?.upordown.toFixed(2)}%{' '}
            </p>
            <BsFillArrowDownCircleFill className='text-red-500 my-auto' />
          </div>
        )}
      </div>
    </div>
  )
}

export default Card
