// SavedCoin.js
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { doc, onSnapshot, updateDoc } from 'firebase/firestore'
import { db } from '../firebase'
import { UserAuth } from '../context/AuthContext'
import Card from './Card'
import CardLoader from './CardLoader'

const SavedCoin = ({ sendDataToParent }) => {
  const [coins, setCoins] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const { user } = UserAuth()

  setTimeout(()=>{
    setIsLoading(false)
  },2000)

  useEffect(() => {
    onSnapshot(doc(db, 'users', `${user?.email}`), (doc) => {
      setCoins(doc.data()?.watchList)
    })
  }, [user?.email])

  const coinPath = doc(db, 'users', `${user?.email}`)
  const deleteCoin = async (passedid) => {
    try {
      const result = coins.filter((item) => item.id !== passedid)
      await updateDoc(coinPath, {
        watchList: result,
      })
    } catch (e) {
      console.log(e.message)
    }
  }

  useEffect(() => {
    let coinCount = coins?.length
    sendDataToParent(coinCount)
  }, [coins, sendDataToParent])

  return (
    <div>
      <div className='mx-4'>
        {coins?.length === 0 ? (
          <p>
            You don't have any coins saved. Please save a coin to add it to your
            watch list. <Link to='/'>Click here to search coins.</Link>
          </p>
        ) : (
          <div className='w-full border-collapse text-center'>
            <div className='grid mb-3 grid-cols-2 md:grid-cols-4 gap-2 '>
              {coins?.map((coin, kkp) => (
                <div>
                  {isLoading ? (
                    <div className='h-full w-full flex items-center justify-center'>
                      <CardLoader />
                    </div>
                  ) : (
                    <Card coin={coin} deleteCoin={deleteCoin} key={kkp} />
                  )}
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default SavedCoin
