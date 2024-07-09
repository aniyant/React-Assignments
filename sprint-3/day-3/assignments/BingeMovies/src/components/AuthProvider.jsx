import React from 'react'
import { useEffect } from 'react';
import { createContext } from 'react'

export const AuthContext = createContext();

const LOGIN = "SET_LOGIN";
const LOGIN_ERROR = "LOGIN_ERROR";
const LOGOUT = "LOGOUT";

initialData = {
    isAuthenticated:false,
    isLoginError:false,
    username: '',
    password: ''
}
export const AuthReducer = (state=initialData,action) =>{
    switch(action.type){
        case SET_LOGIN:
            return {
                isAuthenticated:true,
                isLoginError:false,
                username:action.payload.username,
                password:action.payload.password
            }
        case LOGIN_ERROR:
            return {
               ...state,
                isAuthenticated:false,
                isLoginError:true
            }
        case LOGOUT:
            return {
                isAuthenticated:false,
                isLoginError:false,
                username: '',
                password: ''
            }
        default:
            state;   
    }
}

export const AuthProvider = ({children}) => {
    const [auth,dispatch] = useReducer(AuthReducer,initialData);

    useEffect(()=>{
        const auth = JSON.parse(localStorage.getItem("auth"));
        if(auth){
            dispatch({
                type:SET_LOGIN,
                payload:{
                    username:auth.username,
                    password:auth.password
                }
            })
        }
        else{
            dispatch({
                type:LOGIN_ERROR
            })
        }
    },[])

    const login = (username,password) => {
        if(username == "admin" && password == "admin") {
            localStorage.setItem("auth",JSON.stringify(username));
            dispatch({
                type:SET_LOGIN,
                payload:{
                    username,
                    password
                }
            })
        }
        else{
            dispatch({
                type:LOGIN_ERROR
            })
        }
    }
    const logout = () => {
       localStorage.removeItem('auth');
       dispatch({
           type:LOGIN_ERROR
       })
    }

  return (
    <AuthContext.Provider value={{auth,login,logout}}>
        {children}
    </AuthContext.Provider>
  )
}
