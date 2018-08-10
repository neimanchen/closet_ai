import {
  MODAL_DISPLAY_STATE,
} from '../actions/modalActions';

// TODO: this is temporary, need to figure out what the default state will be
const initialState = {
  isModalDisplayed: false,
  currentModalItem: {},
};

export function modalReducer(state = initialState, action) {
  switch (action.type) {
    case MODAL_DISPLAY_STATE:
      return Object.assign({}, state, {
        currentModalItem: action.item,
        isModalDisplayed: action.isModalDisplayed,
      });
    default:
      return state;
  }
}

