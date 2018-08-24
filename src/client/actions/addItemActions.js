/*
* action types
*/
export const UPDATE_ITEM = 'UPDATE_ITEM';
export const UPDATE_IMAGE_URL = 'UPDATE_IMAGE_URL';
export const UPDATE_BARCODE = 'UPDATE_BARCODE';
export const UPDATE_SCANNED_STATUS = 'UPDATE_SCANNED_STATUS';
export const UPDATE_SCANNED_RESULTS = 'UPDATE_SCANNED_RESULTS';
export const UPDATE_STYLES = 'UPDATE_STYLES';
export const UPDATE_COLORS = 'UPDATE_COLORS';
export const UPLOAD_ITEM_SUCCESS = 'UPLOAD_ITEM_SUCCESS';
export const UPLOAD_ITEM_FAIL = 'UPLOAD_ITEM_FAIL';
export const UPDATE_MODAL_STATE = 'UPDATE_MODAL_STATE';

/*
 * action creators
 */
export function updateItem(item) {
  return {
    type: UPDATE_ITEM,
    item
  };
}

export function updateImageURL(url) {
  return {
    type: UPDATE_IMAGE_URL,
    url
  };
}

export function updateBarcode(barcode) {
  return {
    type: UPDATE_BARCODE,
    barcode
  };
}

export function updateScannedStatus(status) {
  return {
    type: UPDATE_SCANNED_STATUS,
    status
  };
}

export function updateScannedResults(results) {
  return {
    type: UPDATE_SCANNED_RESULTS,
    results
  };
}

export function updateStyles(styles) {
  return {
    type: UPDATE_STYLES,
    styles,
  };
}

export function updateColors(colors) {
  return {
    type: UPDATE_COLORS,
    colors
  }
}

export function uploadSuccess({data}) {
  return {
    type: UPLOAD_ITEM_SUCCESS,
    data,
  };
}

export function uploadFail(error) {
  return {
    type: UPLOAD_ITEM_FAIL,
    error
  };
}

export function updateModalState(modalState) {
  return {
    type: UPDATE_MODAL_STATE,
    modalState
  }
}
