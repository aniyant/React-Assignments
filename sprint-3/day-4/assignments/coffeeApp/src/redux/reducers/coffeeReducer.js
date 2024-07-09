import { actionTypes } from './actions';

const initialState = {
  isLoading: false,
  error: null,
  coffeeList: [],
  sortOrder: 'asc',
};

const coffeeReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_COFFEE_REQUEST:
      return {
        ...state,
        isLoading: true,
        error: null,
      };
    case actionTypes.FETCH_COFFEE_SUCCESS:
      return {
        ...state,
        isLoading: false,
        coffeeList: action.payload,
      };
    case actionTypes.FETCH_COFFEE_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };
    case actionTypes.SET_SORT_ORDER:
      return {
        ...state,
        sortOrder: action.payload,
      };
    default:
      return state;
  }
};

export default coffeeReducer;
