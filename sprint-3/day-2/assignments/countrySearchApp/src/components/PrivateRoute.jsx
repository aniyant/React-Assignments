import React, { useContext } from 'react';
import { AuthContext } from './AuthProvider';
import { Navigate } from 'react-router-dom';

export const PrivateRoute = ({children}) => {
    const {state} = useContext(AuthContext);

    if(state.isAuthenticated){
        return children;
    }
    return <Navigate to='/login'/>
}
