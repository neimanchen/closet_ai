import { combineReducers } from 'redux';
import { myClosetReducer as closet, theDefaultReducer } from './myClosetReducer.js';

const reducers = combineReducers({
  closet,
  theDefaultReducer
});


export default reducers;
