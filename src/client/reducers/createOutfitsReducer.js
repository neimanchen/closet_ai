import { UPDATE_SELECTED_OUTFIT_ITEMS } from '../actions/createOutfitsActions.js';

const initialState = {
  selectedItems: []
};

export function createOutfitsReducer(state = initialState, action) {
  switch (action.type) {
    case UPDATE_SELECTED_OUTFIT_ITEMS:
      return Object.assign({}, state, {
        selectedItems: action.items
      });
    default:
      return state;
  }
}
