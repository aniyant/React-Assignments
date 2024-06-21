// import "./styles.css";
import React from "react";
import { Provider } from "react-redux";
import store from "./redux/store";
import Sidebar from "./components/sidebar";
import Cart from "./components/cart";
import User from "./components/user";
import ThemeSwitch from "./components/theme";

export default function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Sidebar />
      </div>
      <div class="main-content">
        <ThemeSwitch />
        <Cart />
        <User />
      </div>
    </Provider>
  );
}
