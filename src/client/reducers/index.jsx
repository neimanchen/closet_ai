import { combineReducers } from 'redux';
import { myClosetReducer as closet } from './myClosetReducer.js';
import { closetBoardReducer as closetBoard } from './closetBoardReducer.js';
import { createOutfitsReducer as createOutfits } from './createOutfitsReducer.js';

const reducers = combineReducers({
  closet,
  closetBoard,
  createOutfits
});

export default reducers;
