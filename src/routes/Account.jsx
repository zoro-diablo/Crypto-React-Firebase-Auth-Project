// Account.js
import React, { useState } from 'react'
import SavedCoin from '../components/SavedCoin'
import { UserAuth } from '../context/AuthContext'
import { Navigate, useNavigate } from 'react-router-dom'
import { useContext } from 'react'
import { ThemeContext } from '../context/ThemeContext'
import photo from '../assets/user-icon-design-isolated-on-white-background-vector-29226751.jpg'
import darkphoto from '../assets/download.png'

const Account = () => {
  const { user } = UserAuth()
  const navigate = useNavigate()

  const [childData, setChildData] = useState(null)

  const receiveDataFromChild = (data) => {
    setChildData(data)
  }

  const handleSignOut = async () => {
    try {
      navigate('/')
    } catch (e) {
      console.log(e.message)
    }
  }

  const { theme } = useContext(ThemeContext)

  if (user) {
    return (
      <div className='max-w-[1140px] mx-auto mt-5'>
        <div
          className={
            theme === 'dark'
              ? 'card m-auto text-accent w-full sm:w-[clamp(1120px,80%,150px)] hover:brightness-90 transition-all group bg-gradient-to-tl from-gray-900 to-gray-950 hover:from-gray-800 hover:to-gray-950 border-r-2 border-t-2 border-gray-900 rounded-lg overflow-hidden'
              : ' border-2 card m-auto text-accent w-full sm:w-[clamp(1120px,80%,150px)] hover:brightness-90 transition-all group bg-gradient-to-tl from-gray-200 to-white hover:from-gray-100 hover:to-white border-r-2 border-t-2 border-gray-200 rounded-lg overflow-hidden'
          }
        >
          <div className='px-4 py-6 sm:px-8 sm:py-10 grid sm:grid-cols-3'>
            <div className='sm:col-span-1 text-center flex'>
              <div className='w-20 h-20 rounded-full overflow-hidden mb-4 transform translate-y-0 shadow-lg transition-transform duration-300 group hover:translate-y-1 hover:shadow-xl hover:shadow-violet-900 absolute'>
                <img
                  src={theme === 'dark' ? darkphoto : photo}
                  alt='Profile'
                  className='w-full object-cover'
                />
              </div>

              <div className='uppercase font-bold text-xl sm:text-2xl my-auto mx-auto'>
                {user?.email ? user.email.split('@')[0] : 'Guest'}
              </div>
            </div>
            <div className='sm:col-span-1 text-center'>
              <div className='text-accent'>
                <div className='mt-5'>
                  <p className='font-bold text-4xl'>{childData}</p>
                  <p className='text-lg font-bold mt-2 sm:text-base'>
                    Coins Wishlisted
                  </p>
                </div>
              </div>
            </div>

            <div className='sm:col-span-1 text-center'>
              <div className='text-accent'>
                <div className='mt-5'>
                  <button className='relative group overflow-hidden border-2 px-8 py-2 border-violet-500 rounded-md'>
                    <span
                      className='font-bold text-white text-lg relative z-10 group-hover:text-violet-500 duration-500'
                      onClick={handleSignOut}
                    >
                      Home
                    </span>
                    <span className='absolute top-0 left-0 w-full bg-violet-500 duration-500 group-hover:-translate-x-full h-full'></span>
                    <span className='absolute top-0 left-0 w-full bg-violet-500 duration-500 group-hover:translate-x-full h-full'></span>

                    <span className='absolute top-0 left-0 w-full bg-violet-500 duration-500 delay-300 group-hover:-translate-y-full h-full'></span>
                    <span className='absolute delay-300 top-0 left-0 w-full bg-violet-500 duration-500 group-hover:translate-y-full h-full'></span>
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className='h-2 w-full bg-gradient-to-l via-violet-500 group-hover:blur-xl blur-2xl m-auto rounded transition-all absolute bottom-0'></div>
          <div className='h-0.5 group-hover:w-full bg-gradient-to-l via-purple-950 group-hover:via-violet-500 w-[70%] m-auto rounded transition-all'></div>
        </div>

        <div
          className='flex justfiy-between items-center my-12 py-8 rounded-div'
          className={
            theme === 'dark'
              ? 'flex justfiy-between items-center  rounded-div mx-auto my-12 py-8 hover:brightness-90 transition-all group bg-gradient-to-tl from-gray-900 to-gray-950 '
              : 'flex justfiy-between items-center  rounded-div mx-auto my-12 py-8 brightness-100 transition-all group bg-gradient-to-tl from-slate-100 to-white '
          }
        >
          <div className='w-full min-h-[300px]'>
            <h1 className='text-2xl font-bold py-4 mx-5'>Watch List</h1>
            <SavedCoin sendDataToParent={receiveDataFromChild} />
          </div>
        </div>
      </div>
    )
  } else {
    return <Navigate to='/signin' />
  }
}

export default Account
