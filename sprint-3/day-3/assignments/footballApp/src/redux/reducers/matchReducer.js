import { actionTypes } from "./actionTypes";

const initialState = {
    loading:false,
    error:false,
    matches:[],
    searchQuery:"",
}

export const matchReducer = (state=initialState, action) => {
    switch (action.type) {
        case actionTypes.FETCH_MATCH_REQUEST:
            return {
                loading:true,
                error:false,
                matches:[],
                searchQuery:""
            }
        case actionTypes.FETCH_MATCH_SUCCESS:
            return {
                loading:false,
                error:false,
                matches:action.payload,
                searchQuery:'',
            }
        case actionTypes.FETCH_MATCH_FAILURE:
            return {
                loading:false,
                error:true,
                matches:[],
                searchQuery:'',
            }
        case actionTypes.SET_SEARCH_QUERY:
            return{
                ...state,
                searchQuery:action.payload
            }
        default:
            return state;
    }   
}