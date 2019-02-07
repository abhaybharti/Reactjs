import { createStore } from 'redux';
import  combineReducers  from '../reducers';
import initialState from '../models/index'

const store = createStore(combineReducers,initialState);
console.log(store.getState());
export default store;