import React from 'react'
import { useContext } from 'react'
import { ThemeContext } from '../context/ThemeContext'

const SignOutButton = ({ signoutbutton }) => {
  const { theme } = useContext(ThemeContext)

  return (
    <div
      className={
        theme === 'dark'
          ? 'bg-red-950 text-red-400 border border-red-400 border-b-4 font-medium overflow-hidden relative px-4 py-2 rounded-md hover:brightness-150 hover:border-t-4 hover:border-b active:opacity-75 outline-none duration-300 group'
          : 'bg-white text-red-900 border border-red-900 border-b-4 font-medium overflow-hidden relative px-4 py-2 rounded-md hover:brightness-150 hover:border-t-4 hover:border-b active:opacity-75 outline-none duration-300 group'
      }
    >
      <span
        className={
          theme === 'dark'
            ? 'bg-red-400 shadow-red-400 absolute -top-[150%] left-0 inline-flex w-80 h-[5px] rounded-md opacity-50 group-hover:top-[150%] duration-500 shadow-[0 0 10px 10px rgba(0,0,0,0.3)]'
            : 'bg-red-400 shadow-red-400 absolute -top-[150%] left-0 inline-flex w-80 h-[5px] rounded-md opacity-50 group-hover:top-[150%] duration-500 shadow-[0 0 10px 10px rgba(0,0,0,0.3)]'
        }
      ></span>
      {signoutbutton}
    </div>
  )
}

export default SignOutButton
