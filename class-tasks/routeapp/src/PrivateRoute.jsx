import React from 'react';
import { Navigate } from 'react-router-dom';

export const PrivateRoute = ({children}) => {
    const loggedIn = true;

    if(loggedIn) {
        return children;
    }
    else{
        return <Navigate to="/login"/>
    }
}
