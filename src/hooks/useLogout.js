import { useState } from 'react'
import { auth } from '../firebase/config'
import { useAuthContext } from './useAuthContext'

import {signOut} from 'firebase/auth'

export const useLogout = () => {

  const {dispatch} = useAuthContext();
 
  const [hata, setHata] = useState(null)
  const [bekliyor, setBekliyor] = useState(false)

  const logout = async () => {

    setHata(null)
    setBekliyor(true)
  
    try {
      
        await signOut(auth)

      dispatch({type: 'LOGOUT'})

      setBekliyor(false)
      setHata(null)
    } 
    catch(err) {
      console.log(err.message)
      setHata(err.message)
      setBekliyor(false)
    }
  }

  return { logout, hata, bekliyor }
}