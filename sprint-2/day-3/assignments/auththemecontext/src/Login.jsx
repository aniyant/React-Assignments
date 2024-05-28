import React from 'react'
import { useContext } from 'react'
import { AuthContext } from './AuthContext'; 

export const Login = () => {
    const [isloggedIn,setLoggedIn] = useContext(AuthContext);
    const handleLogin = () => {
        setLoggedIn(!isloggedIn);
    }
    console.log(isloggedIn);
    return (
        <div>
        <button onClick={handleLogin}>{isloggedIn?"Login":"Logout"}</button>
        {isloggedIn?<h1>Hello, you are logged in.</h1>:<h1>Hello, you are logged out.</h1> }
        </div>
    )

}
