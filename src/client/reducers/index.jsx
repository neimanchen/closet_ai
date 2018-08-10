import { combineReducers } from 'redux';
import { myClosetReducer as closet } from './myClosetReducer.js';
import { myFilterReducer as filter } from './myFilterReducer';
import { closetBoardReducer as closetBoard } from './closetBoardReducer.js';
import { createOutfitsReducer as createOutfits } from './createOutfitsReducer.js';
import { modalReducer as item } from './modalReducer.js';

const reducers = combineReducers({
  closet,
  filter,
  closetBoard,
  createOutfits,
  item,
});

export default reducers;
