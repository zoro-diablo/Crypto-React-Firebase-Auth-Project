import { createContext, useContext, useState, useEffect } from 'react'
import { auth, db } from '../firebase'
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from 'firebase/auth'

import { doc, setDoc } from 'firebase/firestore'

const UserContext = createContext()

export const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState({})

  const signUp = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        var user = userCredential.user
        console.log(`Your registered email is ${user.email}.`)
        // ...
        return setDoc(doc(db, 'users', email), {
          watchList: [],
        })
      })
      .catch((error) => {
        var errorCode = error.code
        var errorMessage

        switch (errorCode) {
          case 'auth/email-already-in-use':
            errorMessage =
              'This email is already in use. Please use a different email.'
            break
          case 'auth/invalid-email':
            errorMessage =
              'The email address is not valid. Please enter a valid email address.'
            break
          case 'auth/operation-not-allowed':
            errorMessage =
              'Email/password accounts are not enabled. Enable email/password in Firebase Console, under the Auth tab.'
            break
          case 'auth/weak-password':
            errorMessage =
              'The password is too weak. Please enter a stronger password.'
            break
          default:
            errorMessage = error.message
        }

        console.log(errorMessage)
      })
  }

  const signIn = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password)
  }

  const logout = () => {
    return signOut(auth)
  }

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser)
    })
    return () => {
      unsubscribe()
    }
  }, [])

  return (
    <UserContext.Provider value={{ signUp, signIn, logout, user }}>
      {children}
    </UserContext.Provider>
  )
}

export const UserAuth = () => {
  return useContext(UserContext)
}
