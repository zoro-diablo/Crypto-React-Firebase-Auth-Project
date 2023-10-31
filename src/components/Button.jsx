import React from 'react'
import { useContext } from 'react'
import { ThemeContext } from '../context/ThemeContext'

const Button = ({ buttonText }) => {
  const { theme } = useContext(ThemeContext)

  return (
    <button
      className={
        theme === 'dark'
          ? 'flex justify-center items-center gap-2 w-full h-12 cursor-pointer rounded-md shadow-sm text-white font-semibold bg-gradient-to-r from-violet-600 via-violet-500 to-violet-400 hover:shadow-lg hover:shadow-violet-500 hover:scale-105 duration-300 hover:from-violet-400 hover:to-violet-600'
          : 'flex justify-center items-center gap-2 w-full h-12 cursor-pointer rounded-md shadow-2xl text-white font-semibold bg-gradient-to-r from-black via-gray-900 to-black hover:shadow-xl hover:shadow-gray-600 hover:scale-105 duration-300'
      }
    >
      {buttonText}
    </button>
  )
}

export default Button
