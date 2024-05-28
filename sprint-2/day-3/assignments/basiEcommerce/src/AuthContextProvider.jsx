import React,{createContext,useState} from 'react'

export const AuthContext = createContext();

export const AuthContextProvider = ({children}) => {
    const [isloggedIn,setLoggedIn] = useState(false); 

  return (
    <AuthContext.Provider value={[isloggedIn,setLoggedIn]}>
        {children}
    </AuthContext.Provider>
  )
}
