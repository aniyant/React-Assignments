import { createStore, combineReducers } from "redux";
import cartReducer from "./cart";
import themeReducer from "./theme";
import userReducer from "./user";

// Combining reducers
const rootReducer = combineReducers({
  theme: themeReducer,
  cart: cartReducer,
  user: userReducer,
});

// Creating the store
const store = createStore(rootReducer);

export default store;
