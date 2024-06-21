import actionType from "./actionTypes";

function themeReducer(state = "light-mode", action) {
  switch (action.type) {
    case actionType.SET_THEME:
      return action.payload;
    default:
      return state;
  }
}

export default themeReducer;
