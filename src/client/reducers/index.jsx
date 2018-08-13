import { combineReducers } from 'redux';
import { myClosetReducer as closet } from './myClosetReducer.js';
import { myFilterReducer as filter } from './myFilterReducer';
import { closetBoardReducer as closetBoard } from './closetBoardReducer.js';
import { createOutfitsReducer as createOutfits } from './createOutfitsReducer.js';
import { modalReducer as item } from './modalReducer.js';
import { addItemReducer as addItem } from './addItemReducer.js';
import { reducer as formReducer } from 'redux-form';
import { userInfoReducer as userInfo } from './userInfoReducer';

const reducers = combineReducers({
  closet,
  filter,
  closetBoard,
  createOutfits,
  item,
  addItem,
  userInfo,
  form: formReducer
});

export default reducers;
