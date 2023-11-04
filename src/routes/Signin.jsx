import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { UserAuth } from '../context/AuthContext'
import AuthForm from '../components/AuthForm'

const Signin = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const navigate = useNavigate()
  const { signIn } = UserAuth()

const handleSubmit = async (e) => {
  e.preventDefault()
  setError('')
  try {
    await signIn(email, password)
    navigate('/account')
  } catch (e) {
    const errorCode = e.code.split('/')[1] 
    setError(errorCode)
    setError(errorCode.charAt(0).toUpperCase() + errorCode.slice(1))
    setTimeout(() => setError(''), 3000)
    console.log(e.message)
  }
}


  return (
    <AuthForm
      heading='LOG IN'
      account='Dont have an account?'
      type='Sign Up'
      handleSubmit={handleSubmit}
      error={error}
      setEmail={setEmail}
      setPassword={setPassword}
      buttonText='Log In'
      isSignedIn={true}
    />
  )
}

export default Signin
