import React from 'react'
import { createContext,useState,useEffect } from 'react'

export const AuthContext = createContext();

export const AuthContextProvider = ({children}) => {
    const [isloggedIn,setLoggedIn] = useState(false);
    const [token, setToken] = useState(null);

    // useEffect with an empty dependency array to run only on mount
    useEffect(() => {
        const storedToken = localStorage.getItem('token');
        console.log(storedToken);
        if (storedToken) {
            setLoggedIn(true);
            setToken(storedToken);
        } else {
            setLoggedIn(false);
            setToken(null);
        }
    }, []); // Empty dependency array ensures this runs only once on mount

    return (
        <AuthContext.Provider value={[isloggedIn,setLoggedIn,token,setToken]}>
            {children}
        </AuthContext.Provider>
    )
}
