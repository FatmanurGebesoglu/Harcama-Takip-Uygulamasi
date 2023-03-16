import { useState, useEffect } from 'react'
import { auth } from '../firebase/config'
import { useAuthContext } from './useAuthContext'

import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth'

export const useSignup = () => {

  const { dispatch } = useAuthContext();
  const [iptal, setIptal] = useState(false)
  const [hata, setHata] = useState(null)
  const [bekliyor, setBekliyor] = useState(false)

  useEffect(() => {
    return () => setIptal(true)
  }, [])

  const signup = async (email, password, displayName) => {

    setHata(null)
    setBekliyor(true)

    try {
      // signup
      const res = await createUserWithEmailAndPassword(auth, email, password)
      console.log(res.user)

      if (!res) {
        throw new Error('Üye işleminde hata oluştu')
      }

      await updateProfile(res.user, { displayName })


      dispatch({ type: 'LOGIN', payload: res.user })
      if (!iptal) {
        setBekliyor(false)
        setHata(null)
      }
    }
    catch (err) {
      if (!iptal) {
        console.log(err.message)
        setHata(err.message)
        setBekliyor(false)
      }
    }
  }

  return { signup, hata, bekliyor }
}