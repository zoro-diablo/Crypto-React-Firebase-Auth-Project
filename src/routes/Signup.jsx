import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { UserAuth } from '../context/AuthContext'
import AuthForm from '../components/AuthForm'

const Signup = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const navigate = useNavigate()
  const { signUp } = UserAuth()

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError('')
    try {
      await signUp(email, password)
      navigate('/account')
    } catch (e) {
     const errorCode = e.code.split('/')[1] // Get the error code after "auth/"
     setError(errorCode)
     setError(errorCode.charAt(0).toUpperCase() + errorCode.slice(1))
     setTimeout(() => setError(''), 3000)
      console.log(e.message)
    }
  }

  return (
    <AuthForm
      heading='SIGN UP'
      account='Already have an account?'
      type='Log In'
      handleSubmit={handleSubmit}
      error={error}
      setEmail={setEmail}
      setPassword={setPassword}
      buttonText='Sign Up'
    />
  )
}

export default Signup
