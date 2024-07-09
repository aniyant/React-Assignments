import { actionTypes } from "./actionTypes";

const initialState = [];

export const likedReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ADD_TO_LIKED_MATCHES:
        console.log(action.payload);
        console.log([...state,action.payload]);
      return [
        ...state,
        action.payload,
      ];
    case actionTypes.REMOVE_LIKED_MATCH:
      return state.filter((match) => match.matchId !== action.payload);
    default:
      return state;
  }
};