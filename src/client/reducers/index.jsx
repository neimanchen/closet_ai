import { combineReducers } from 'redux';
import { myClosetReducer as closet } from './myClosetReducer.js';
import { myFilterReducer as filter } from './myFilterReducer';
import { closetBoardReducer as closetBoard } from './closetBoardReducer.js';
import { createOutfitsReducer as createOutfits } from './createOutfitsReducer.js';

const reducers = combineReducers({
  closet,
  filter,
  closetBoard,
  createOutfits
});

export default reducers;
