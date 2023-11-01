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
      <div className='max-w-[400px] mx-auto min-h-[600px] px-4 py-20 '>
        <h1 className='text-2xl font-bold'>{heading}</h1>
        {error ? <p className='bg-red-300 p-3 my-2'>{error}</p> : null}
        <form onSubmit={handleSubmit}>
          <div className='my-4'>
            <label>Email</label>
            <div className='my-2 w-full relative rounded-2xl shadow-xl'>
              <input
                onChange={(e) => setEmail(e.target.value)}
                className='w-full p-2 bg-primary border border-input rounded-2xl'
                type='email'
              />
              <AiOutlineMail className='absolute right-2 top-3 text-gray-400' />
            </div>
          </div>
          <div className='my-4'>
            <label>Password</label>
            <div className='my-2 w-full relative rounded-2xl shadow-xl'>
              <input
                onChange={(e) => setPassword(e.target.value)}
                className='w-full p-2 bg-primary border border-input rounded-2xl'
                type='password'
              />
              <AiFillLock className='absolute right-2 top-3 text-gray-400' />
            </div>
          </div>
          <Button buttonText={buttonText} />
        </form>
        <p className='my-4'>
          {account}{' '}
          <Link to='/signin' className='text-accent'>
            {type}
          </Link>
        </p>
      </div>
    </div>
  )
}

export default AuthForm
