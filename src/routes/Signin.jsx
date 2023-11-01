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
      setError(e.message)
      console.log(e.message)
    }
  }

  return (
    <AuthForm
      heading='Log In'
      account='Dont have an account?'
      type='Sign up'
      handleSubmit={handleSubmit}
      error={error}
      setEmail={setEmail}
      setPassword={setPassword}
      buttonText='Log In'
    />
  )
}

export default Signin
