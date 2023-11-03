import React, { useState, useEffect, useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import ThemeToggle from './ThemeToggle'
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai'
import { UserAuth } from '../context/AuthContext'
import logo from '../assets/White logo.gif'
import logoTwo from '../assets/Dark logo.gif'
import { ThemeContext } from '../context/ThemeContext'
import SignOutButton from './SignOutButton'


const Navbar = () => {
  const [nav, setNav] = useState(false)

  const { user, logout } = UserAuth()
  const navigate = useNavigate()

  const handleNav = () => {
    if (!nav) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'auto'
    }
    setNav(!nav)
  }

  useEffect(() => {
    return () => {
      document.body.style.overflow = 'auto'
    }
  }, [])

  const { theme } = useContext(ThemeContext)

  const handleSignOut = async () => {
    try {
      await logout()
      navigate('/')
    } catch (error) {
      console.log(error.message)
    }
  }

  return (
    <div className='rounded-div-three flex items-center justify-between h-20 font-bold mt-2'>
      <Link to='/'>
        <h1 className='text-2xl ml-3 flex font-bold '>
          <img
            src={theme === 'dark' ? logoTwo : logo}
            alt='logo'
            className='w-[50%]'
          />
        </h1>
      </Link>
      <div className='hidden absolute right-60 mx-5 md:block'>
        <ThemeToggle />
      </div>

      {user?.email ? (
        <div className='flex'>
          <Link to='/account' className='p-4 mx-2 hidden md:block'>
            Account
          </Link>
          <button onClick={handleSignOut} className='mx-1'>
            <SignOutButton signoutbutton='Sign Out' />
          </button>
        </div>
      ) : (
        <div className='hidden md:block mr-3'>
          <Link to='/signin' className='p-4 hover:text-accent'>
            Log In
          </Link>
          <Link to='/signup'>
            <button
              className={`${
                theme === 'dark'
                  ? 'bg-violet-950 text-violet-400 border-violet-400'
                  : 'bg-white text-emerald-950 border-teal-950'
              } border  border-b-4 font-medium overflow-hidden relative px-4 py-2 rounded-md hover:brightness-150 hover:border-t-4 hover:border-b active:opacity-75 outline-none duration-300 group`}
            >
              <span className='bg-violet-400 shadow-violet-400 absolute -top-[150%] left-0 inline-flex w-80 h-[5px] rounded-md opacity-50 group-hover:top-[150%] duration-500 shadow-[0_0_10px_10px_rgba(0,0,0,0.3)]'></span>
              Sign Up
            </button>
          </Link>
        </div>
      )}

      {/* Menu Icon */}
      <div onClick={handleNav} className='block md:hidden cursor-pointer z-10'>
        {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
      </div>

      {/* Mobile Menu */}
      <div
        className={
          nav
            ? 'md:hidden fixed left-0 top-20 flex flex-col items-center justify-between w-full h-[90%] bg-primary ease-in duration-300 z-10'
            : 'fixed left-[-100%] top-20 h-[90%] flex flex-col items-center justify-between ease-in duration-300'
        }
      >
        <ul className='w-full p-4'>
          <li onClick={handleNav} className='border-b py-6'>
            <Link to='/'>Home</Link>
          </li>
          <li onClick={handleNav} className='border-b py-6'>
            <Link to='/account'>Account</Link>
          </li>
          <li className='py-6'>
            <ThemeToggle />
          </li>
        </ul>
        <div className='flex flex-col w-full p-4'>
          <Link to='/signin'>
            <button
              onClick={handleNav}
              className='w-full my-2 p-3 bg-primary text-primary border border-secondary rounded-2xl shadow-xl '
            >
              Log In
            </button>
          </Link>
          <Link to='/signup'>
            <button
              onClick={handleNav}
              className='w-full my-2 p-3 bg-button text-btnText rounded-2xl shadow-xl '
            >
              Sign Up
            </button>
          </Link>
        </div>
        
      </div>
      
    </div>
  )
}

export default Navbar
