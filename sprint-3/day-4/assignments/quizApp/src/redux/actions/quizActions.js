import axios from 'axios';

export const FETCH_QUIZ_REQUEST = 'FETCH_QUIZ_REQUEST';
export const FETCH_QUIZ_SUCCESS = 'FETCH_QUIZ_SUCCESS';
export const FETCH_QUIZ_FAILURE = 'FETCH_QUIZ_FAILURE';

const baseUrl = "https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-quiz"

export const fetchQuiz = () => {
  return async (dispatch) => {
    dispatch({ type: FETCH_QUIZ_REQUEST });
    try {
      const response = await axios.get(baseUrl);
      dispatch({ type: FETCH_QUIZ_SUCCESS, payload: response.data.data });
    } catch (error) {
      dispatch({ type: FETCH_QUIZ_FAILURE, error: error.message });
    }
  };
};
