import React, { createContext, useEffect, useReducer } from 'react'
import { AuthReducer } from '../reducers/AuthReducer';

export const AuthContext = createContext();

const initialState = {
    isAuthenticated: false,
    user:{username:"", password:""},
}

export const AuthProvider = ({children}) => {
    const [state, dispatch] = useReducer(AuthReducer,initialState);

    useEffect(() => {
        const user = JSON.parse(localStorage.getItem('user'));

        if(user){
            dispatch({type:'LOGIN',payload:user});
        };
    },[])

    const login = (user) => {
        if(user.username=='admin' && user.password=='admin'){
            localStorage.setItem('user',JSON.stringify(user));
            dispatch({type:'LOGIN',payload:user})
        }
    }

    const logout = () => {
        localStorage.removeItem('user');
        dispatch({type:'LOGOUT'});
    }
    console.log(state)
    return (
        <AuthContext.Provider value={{state,login,logout}}>
            {children}
        </AuthContext.Provider>
    )
}
