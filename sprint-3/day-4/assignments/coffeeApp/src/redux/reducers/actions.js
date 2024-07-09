import axios from 'axios';

const baseUrl = "https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-coffee"

export const actionTypes = {
  FETCH_COFFEE_REQUEST: 'FETCH_COFFEE_REQUEST',
  FETCH_COFFEE_SUCCESS: 'FETCH_COFFEE_SUCCESS',
  FETCH_COFFEE_FAILURE: 'FETCH_COFFEE_FAILURE',
  SET_SORT_ORDER: 'SET_SORT_ORDER',
};

export const fetchCoffee = () => {
  return async (dispatch) => {
    dispatch({ type: actionTypes.FETCH_COFFEE_REQUEST });

    try {
      const response = await axios.get(baseUrl);
      dispatch({
        type: actionTypes.FETCH_COFFEE_SUCCESS,
        payload: response.data.data,
      });
    } catch (error) {
      dispatch({
        type: actionTypes.FETCH_COFFEE_FAILURE,
        payload: error.message,
      });
    }
  };
};

export const setSortOrder = (sortOrder) => ({
  type: actionTypes.SET_SORT_ORDER,
  payload: sortOrder,
});
