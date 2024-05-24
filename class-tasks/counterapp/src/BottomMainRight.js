import { useContext } from "react";
import {ThemeContextProvider} from './App'
// components/BottomMainRight.jsx
function BottomMainRight({isloggedIn}) {
    const [theme, setTheme] = useContext();
    return (
    <>
    <button onClick={()=>{setTheme("green")}}>Theme Green</button>
    <div>User is logged in {isloggedIn}</div>
    </>
    );
  }
  
  export default BottomMainRight;
  