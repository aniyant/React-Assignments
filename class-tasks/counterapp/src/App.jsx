// App.jsx
import { useState } from "react";
import {Navbar} from "./Navbar";
import Main from "./Main";
import Footer from "./Footer";
import "./App.css";

export function ThemeContextProvider({ children }) {
  const [theme, setTheme] = React.useState("white");
  return (
    <ThemeContext.Provider value={{ theme, setTheme}}>
      {children}
    </ThemeContext.Provider>
  );
}

const App = () => {
  const isLoggedIn = useState(true);

  return (
    <>
      <Navbar />
      <Main isLoggedIn={isLoggedIn} />
      <Footer />
    </>
  );
}

export default App;
