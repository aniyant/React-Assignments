import actionType from "./actionTypes";

// User Reducer
function userReducer(state = { username: null, loggedIn: false }, action) {
  switch (action.type) {
    case actionType.UPDATE_USER:
      return { ...state, ...action.payload };
    default:
      return state;
  }
}

export default userReducer;
