import React from 'react';
import { useContext,useState } from 'react';
import { AuthContext} from './AuthContextProvider';
import { Login } from '../pages/Login';
import { Navigate } from 'react-router-dom';

export const PrivateRouteProvider = ({children}) => {
    const {isAuthenticated} = useContext(AuthContext);

    if(isAuthenticated){
        return children;
    }
    return <Navigate to='/login'/>
}
