import React, { Children } from 'react'
import { ThemeContext } from './ThemeContext'; 
import { useState } from 'react';

const ThemeContextProvider = ({children}) => {
    const [theme,setTheme] = useState("grey"); 

  return (
    <ThemeContext.Provider value={[theme,setTheme]}>
        {children}
    </ThemeContext.Provider>
  )
}

export default ThemeContextProvider;
