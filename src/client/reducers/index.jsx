import { combineReducers } from 'redux'
import { addItem, theDefaultReducer } from './addItem.js'

const reducers = combineReducers({
  addItem,
  theDefaultReducer
});


export default reducers;
