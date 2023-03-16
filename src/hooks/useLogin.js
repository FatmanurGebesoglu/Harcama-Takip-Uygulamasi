import { useState } from 'react'
import { auth } from '../firebase/config'
import { useAuthContext } from './useAuthContext'

import {signInWithEmailAndPassword} from 'firebase/auth'

export const useLogin = () => {

  const {dispatch} = useAuthContext();
 
  const [hata, setHata] = useState(null)
  const [bekliyor, setBekliyor] = useState(false)

  const login = async (email, password) => {

    setHata(null)
    setBekliyor(true)
  
    try {
      
      const res = await signInWithEmailAndPassword(auth,email, password)
      console.log(res.user)

      if (!res) {
        throw new Error('Giriş işleminde hata oluştu')
      }

      


      dispatch({type: 'LOGIN', payload:res.user})
      setBekliyor(false)
      setHata(null)
    } 
    catch(err) {
      console.log(err.message)
      setHata(err.message)
      setBekliyor(false)
    }
  }

  return { login, hata, bekliyor }
}