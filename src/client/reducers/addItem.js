import {ADD_ITEM} from '../actions/addItem';

// TODO: this is temporary, need to figure out what the default state will be
const initialState = {
  items: [ {a: 1, b: 2}]
};

function getUpdatedItems(items, action) {
  var updatedItems = items;
  updatedItems.push(action.item);
  return updatedItems;
}

export function addItem(state = initialState, action) {
  switch (action.type) {
    case ADD_ITEM:
      return Object.assign({}, state, {
        items: getUpdatedItems(state.items, action)
      });
    default:
      return state
  }
}

//TODO: this is temporary, as we add more reducers we can remove this one.
export function theDefaultReducer(state = [{c: 4}], action) {
  return state;
}

