import { UPDATE_ITEM, UPDATE_IMAGE_URL, UPDATE_BARCODE, UPLOAD_ITEM_SUCCESS, UPLOAD_ITEM_FAIL } from '../actions/addItemActions';

const initialState = {
  item: null,
  imageURL: '',
  barcode: ''
}

export function addItemReducer(state = initialState, action) {
  switch (action.type) {
    case UPDATE_ITEM:
      return Object.assign({}, state, {
        item: action.item
      });
    case UPDATE_IMAGE_URL:
      return Object.assign({}, state, {
        imageURL: action.url
      });
    case UPDATE_BARCODE:
      return Object.assign({}, state, {
        barcode: action.barcode
      })
    default:
      return state;
  }
}