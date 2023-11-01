import React, { useContext } from 'react'
import { HiSun, HiMoon } from 'react-icons/hi'
import { ThemeContext } from '../context/ThemeContext'

const ThemeToggle = () => {
  const { theme, setTheme } = useContext(ThemeContext)

  return (
    <div className='flex items-center'>
      {theme === 'dark' ? (
        <HiSun className='text-primary text-2xl mr-2' />
      ) : (
        <HiMoon className='text-primary text-2xl mr-1' color='#1d1d1c3' />
      )}
      <label className='relative inline-flex items-center cursor-pointer'>
        <input
          type='checkbox'
          value=''
          className='sr-only peer'
          onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
        />
        <div className="group peer ring-0 bg-gradient-to-bl from-violet-200 via-violet-600 to-violet-800 rounded-full outline-none duration-1000 after:duration-300 w-14 h-7 shadow-md peer-focus:outline-none after:content-[''] after:rounded-full after:absolute after:[background:#131415] peer-checked:after:rotate-180 after:[background:conic-gradient(from 135deg, #b2a9a9, #b2a8a8, #ffffff, #d7dbd9, #ffffff, #b2a8a8)] after:outline-none after:h-5 after:w-5 after:top-1 after:left-1 peer-checked:after:translate-x-7 peer-hover:after:scale-95 peer-checked:bg-gradient-to-r peer-checked:from-emerald-400 peer-checked:to-emerald-700"></div>
      </label>
    </div>
  )
}

export default ThemeToggle
