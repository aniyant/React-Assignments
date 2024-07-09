import {combineReducers, createStore} from 'redux';
import { matchReducer} from './reducers/matchReducer';
import { likedReducer } from './reducers/likedReducer';

const rootReducer = combineReducers({
    matchState: matchReducer,
    LikedState: likedReducer,
})

export const store = createStore(rootReducer)