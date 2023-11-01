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
      setError(e.message)
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
