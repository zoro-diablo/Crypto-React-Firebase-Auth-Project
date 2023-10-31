import React,{useState} from 'react'
import { AiFillStar, AiOutlineStar } from 'react-icons/ai'
import { Sparklines, SparklinesLine } from 'react-sparklines'
import { Link } from 'react-router-dom'
import { AiFillCaretDown, AiFillCaretUp } from 'react-icons/ai'
import {UserAuth} from '../context/AuthContext'
import {db} from '../firebase'
import { arrayUnion,doc,updateDoc, } from 'firebase/firestore'

const CoinItem = ({ coin }) => {

  const [savedCoin,setSavedCoin] = useState(false)
  const {user} = UserAuth()

  const coinPath = doc(db, 'users', `${user?.email}`)
  const saveCoin = async () => {
    if (user?.email) {
      setSavedCoin(true)
      await updateDoc(coinPath, {
        watchList: arrayUnion({
          id: coin.id,
          name: coin.name,
          image: coin.image,
          rank: coin.market_cap_rank,
          symbol: coin.symbol,
        }),
      })
    } else {
      alert('Please sign in to save a coin to your watch list')
    }
  }

  const [hovered,setHovered] = useState(false)

  return (
    <tr
      className={`h-[80px] border-b overflow-hidden ${
        hovered ? 'custom-div' : ''
      }`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <td>
        {savedCoin ? (
          <AiFillStar className='text-yellow-400' />
        ) : (
          <AiOutlineStar onClick={saveCoin} />
        )}
      </td>
      <td>{coin.market_cap_rank}</td>
      <td>
        <Link to={`/coin/${coin.id}`}>
          <div className='flex items-center'>
            <img
              className='w-6 mr-2 rounded-full'
              src={coin.image}
              alt={coin.id}
            />
            <p className='hidden sm:table-cell'>{coin.name}</p>
          </div>
        </Link>
      </td>
      <td>{coin.symbol.toUpperCase()}</td>
      <td>₹{coin.current_price.toLocaleString()}</td>
      <td>
        {coin.price_change_percentage_24h > 0 ? (
          <div className='text-green-600'>
            <div className='hidden lg:block mr-2'>
              <AiFillCaretUp className='float-left' />
            </div>
            {coin.price_change_percentage_24h.toFixed(2)}%
          </div>
        ) : (
          <div className='text-red-600'>
            <div className='hidden lg:block mr-2'>
              <AiFillCaretDown className='float-left' />
            </div>
            {coin.price_change_percentage_24h.toFixed(2)}%
          </div>
        )}
      </td>
      <td className='w-[180px] hidden md:table-cell'>
        ₹{coin.total_volume.toLocaleString()}
      </td>
      <td className='w-[180px] hidden sm:table-cell'>
        ₹{coin.market_cap.toLocaleString()}
      </td>
      <td>
        <Sparklines data={coin.sparkline_in_7d.price}>
          <SparklinesLine
            color={coin.price_change_percentage_24h > 0 ? '#16c784' : '#ea3943'}
          />
        </Sparklines>
      </td>
    </tr>
  )
}

export default CoinItem
