import {createStore,combineReducers} from 'redux';
import { bookReducer } from './reducers/bookReducer';

const rootReducer = combineReducers({
    books: bookReducer,
})
export const store = createStore(rootReducer)