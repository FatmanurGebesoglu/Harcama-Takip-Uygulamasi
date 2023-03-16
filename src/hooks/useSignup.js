import { useState } from 'react'
import { auth } from '../firebase/config'
import { useAuthContext } from './useAuthContext'

import {createUserWithEmailAndPassword,updateProfile} from 'firebase/auth'

export const useSignup = () => {

  const {dispatch} = useAuthContext();
 
  const [hata, setHata] = useState(null)
  const [bekliyor, setBekliyor] = useState(false)

  const signup = async (email, password, displayName) => {

    setHata(null)
    setBekliyor(true)
  
    try {
      // signup
      const res = await createUserWithEmailAndPassword(auth,email, password)
      console.log(res.user)

      if (!res) {
        throw new Error('Üye işleminde hata oluştu')
      }

      await updateProfile(res.user,{displayName})


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

  return { signup, hata, bekliyor }
}