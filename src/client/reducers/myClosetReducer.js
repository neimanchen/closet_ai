import {CURRENT_MENU_ITEM} from '../actions/myClosetActions';

// TODO: this is temporary, need to figure out what the default state will be
const initialState = {
  currentMenuItem: 'MyCloset'
};

export function myClosetReducer(state = initialState, action) {
  switch (action.type) {
    case CURRENT_MENU_ITEM:
      return Object.assign({}, state, {
        currentMenuItem: action.item
      });
    default:
      return state;
  }
}

//TODO: this is temporary, as we add more reducers we can remove this one.
export function theDefaultReducer(state = [{c: 4}], action) {
  return state;
}

