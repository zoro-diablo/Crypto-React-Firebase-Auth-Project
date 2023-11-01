import React from 'react'
import { AiFillLock, AiOutlineMail } from 'react-icons/ai'
import { Link } from 'react-router-dom'
import Button from './Button'

const AuthForm = ({
  heading,
  account,
  type,
  handleSubmit,
  error,
  setEmail,
  setPassword,
  buttonText,
}) => {
  return (
    <div>
      <link
        href='https://fonts.googleapis.com/css2?family=Bakbak+One&display=swap'
        rel='stylesheet'
      ></link>
      <div className='max-w-[400px] mx-auto min-h-[600px] px-4 py-20 '>
        <h1
          className='text-4xl mr-3 font-extrabold text-center font-sans pb-5 tracking-wider hover:text-violet-600 duration-500 ease-in-out'
          style={{ fontFamily: 'Bakbak One, cursive' }}
        >
          {heading}
        </h1>
        {error ? <p className='bg-red-300 p-3 my-2'>{error}</p> : null}
        <form onSubmit={handleSubmit}>
          <div className='my-4'>
            <label className='font-semibold'>Email</label>
            <div className='my-2 w-full relative rounded-2xl shadow-xl'>
              <input
                onChange={(e) => setEmail(e.target.value)}
                className='w-full py-[11px] px-6 bg-primary border text-lg border-input rounded-2xl font-bold '
                type='email'
              />
              <AiOutlineMail
                className='absolute right-4 top-4 text-gray-400'
                size={20}
              />
            </div>
          </div>
          <div className='my-4'>
            <label className='font-semibold'>Password</label>
            <div className='my-2 w-full relative rounded-2xl shadow-xl'>
              <input
                onChange={(e) => setPassword(e.target.value)}
                className='w-full py-[11px] px-6 bg-primary border text-lg border-input rounded-2xl font-bold '
                type='password'
              />
              <AiFillLock
                className='absolute right-4 top-4 text-gray-400'
                size={20}
              />
            </div>
          </div>
          <div className='mt-10'>
            <Button buttonText={buttonText} />
          </div>
        </form>
        <p className='my-4'>
          {account}{' '}
          <Link
            to={type === 'Sign Up' ? '/signup' : '/signin'}
            className='text-accent font-bold ml-3'
          >
            {type === 'Sign Up' ? 'Sign Up' : 'Log In'}
          </Link>
        </p>
      </div>
    </div>
  )
}

export default AuthForm
