import { actionTypes } from './actions';

export const itemsReducer = (state = [], action) => {
  switch (action.type) {
    case actionTypes.ADD_ITEM:
      return [...state, action.payload];
    case actionTypes.REMOVE_ITEM:
      return state.filter(item => item.id !== action.payload);
    default:
      return state;
  }
};

