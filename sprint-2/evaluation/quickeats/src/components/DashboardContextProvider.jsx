import React from 'react'
import { useEffect } from 'react';
import { createContext } from 'react';
import { useContext,useState } from 'react';

export const DashboardContext = createContext();

export const DashboardContextProvider = ({children}) => {
    const [dashboardData,setDashboardData] = useState();
    
    useEffect(()=>{
        fetch("http://localhost:3000/data")
        .then((res)=> res.json())
        .then((data)=> setDashboardData(data))
        .catch((error)=> console.error(error));
    },[]);
    // console.log("auth"+ dashboardData)
  return (
    <DashboardContext.Provider value={{dashboardData,setDashboardData}} >
        {children};
    </DashboardContext.Provider> 
  )
}
