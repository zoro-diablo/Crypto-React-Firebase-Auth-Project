import React, { useState, useContext } from 'react'
import { AiOutlineMail } from 'react-icons/ai'
import { UserAuth } from '../context/AuthContext'
import { ThemeContext } from '../context/ThemeContext'

const PasswordResetPage = () => {
  const { resetPassword } = UserAuth()
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [error, setError] = useState('')
  const { theme } = useContext(ThemeContext)
  const [isPasswordReset, setIsPasswordReset] = useState(false) 

  const handleResetPassword = async () => {
    try {
      setError('')
      setMessage('')

      if (email === '') {
        throw new Error('Email is required.')
      }

      console.log('Attempting password reset for email:', email)

      await resetPassword(email)

      console.log('Password reset email sent successfully.')

      setMessage('Password reset email sent. Check your inbox!')
      setIsPasswordReset(true) 

      
    } catch (error) {
      console.error('Error during password reset:', error)
      setError(error.message)

  
      setTimeout(() => {
        setError('')
      }, 3000)
    }
  }

  return (
    <div>
      <link
        href='https://fonts.googleapis.com/css2?family=Bakbak+One&display=swap'
        rel='stylesheet'
      ></link>
      <div className='max-w-[400px] mx-auto min-h-[600px] px-4 py-20'>
        <h1
          className='text-4xl mr-3 font-bold text-center font-sans pb-5 tracking-wider hover:text-violet-600 duration-500 ease-in-out'
          style={{ fontFamily: 'Bakbak One, cursive' }}
        >
          Password Reset
        </h1>
        <div className='my-4'>
          <label className='font-semibold'>Email</label>
          <div className='my-2 w-full relative rounded-2xl shadow-xl'>
            <input
              onChange={(e) => setEmail(e.target.value)}
              className='w-full py-[11px] px-6 bg-primary border text-lg border-input rounded-2xl font-bold'
              type='email'
            />
            <AiOutlineMail
              className='absolute right-4 top-4 text-gray-400'
              size={20}
            />
          </div>
        </div>
        {error && (
          <p className='text-red-600 text-base font-semibold mt-1 ml-3'>
            {error}
          </p>
        )}
        {message && (
          <p className='text-green-600 text-base font-semibold mt-1 ml-3'>
            {message}
          </p>
        )}
        <div className='mt-10'>
          <button
            className={
              theme === 'dark'
                ? 'flex justify-center items-center gap-2 w-full h-12 cursor-pointer rounded-md shadow-sm text-white font-semibold bg-gradient-to-r from-violet-600 via-violet-500 to-violet-400 hover:shadow-lg hover:shadow-violet-500 hover:scale-105 duration-300 hover:from-violet-400 hover:to-violet-600'
                : 'flex justify-center items-center gap-2 w-full h-12 cursor-pointer rounded-md shadow-2xl text-white font-semibold bg-gradient-to-r from-black via-gray-900 to-black hover:shadow-xl hover:shadow-gray-600 hover:scale-105 duration-300'
            }
            onClick={
              isPasswordReset
                ? () => window.history.back()
                : handleResetPassword
            }
          >
            {isPasswordReset ? 'Go Back' : 'Reset Password'}
          </button>
        </div>
      </div>
    </div>
  )
}

export default PasswordResetPage
