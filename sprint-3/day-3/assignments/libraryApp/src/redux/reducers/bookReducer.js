import { actionTypes } from "./actionTypes"

export const bookReducer = (state = [],action) => {
    switch (action.type) {
        case actionTypes.ADD_BOOK:
            return [
               ...state,
                action.payload,
            ]
        case actionTypes.REMOVE_BOOK:
            return state.filter((book) => book.id!== action.payload);
        case actionTypes.UPDATE_BOOK:
            return state.map((book) => {
                if (book.id === action.payload.id) {
                    return {
                       ...book,
                        ...action.payload
                    }
                }
                return book;
            });
        case actionTypes.SEARCH_BOOK:
            return state.filter((book) => {
                if (book.title.toLowerCase().includes(action.payload.toLowerCase())) {
                    return book;
                }
            });
     
        default:
            return state;
    }
}