import {createStore,combineReducers} from 'redux';
import { todoReducer } from './TodoReducer';

const rootReducer = combineReducers({
    todos: todoReducer,
});

export const store = createStore(rootReducer);
console.log(store.getState());

