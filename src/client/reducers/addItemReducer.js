import {
  UPDATE_ITEM,
  UPDATE_IMAGE_URL,
  UPDATE_BARCODE,
  UPDATE_SCANNED_STATUS,
  UPDATE_SCANNED_RESULTS,
  UPDATE_STYLES,
  UPLOAD_ITEM_SUCCESS,
  UPLOAD_ITEM_FAIL
} from '../actions/addItemActions';

const initialState = {
  item: null,
  imageURL: '',
  barcode: '',
  status: false,
  results: [],
  styles: []
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
      });
    case UPDATE_SCANNED_STATUS:
      return Object.assign({}, state, {
        status: action.status
      });
    case UPDATE_SCANNED_RESULTS:
      return Object.assign({}, state, {
        results: action.results
      });
    case UPDATE_STYLES:
      return Object.assign({}, state, {
        styles: action.styles
      })
    default:
      return state;
  }
}