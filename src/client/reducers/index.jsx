import { combineReducers } from 'redux';
import { myClosetReducer as closet, theDefaultReducer } from './myClosetReducer.js';
import { closetBoardReducer as closetBoard } from './closetBoardReducer.js';

const reducers = combineReducers({
  closet,
  closetBoard,
  theDefaultReducer
});


export default reducers;
