import { combineReducers } from 'redux';
import { myClosetReducer as closet } from './myClosetReducer.js';
import { closetBoardReducer as closetBoard } from './closetBoardReducer.js';

const reducers = combineReducers({
  closet,
  closetBoard
});

export default reducers;
