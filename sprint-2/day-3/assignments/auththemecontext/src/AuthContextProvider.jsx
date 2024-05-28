import React, { Children } from 'react'
import { AuthContext } from './AuthContext'
import { useState } from 'react';


export const AuthContextProvider = ({children}) => {
    const [isloggedIn,setLoggedIn] = useState(false); 

  return (
    <AuthContext.Provider value={[isloggedIn,setLoggedIn]}>
        {children}
    </AuthContext.Provider>
  )
}
