/*
* action types
*/
export const MODAL_DISPLAY_STATE = 'MODAL_DISPLAY_STATE';
export const CURRENTLY_DISPLAYED_ITEM = 'CURRENTLY_DISPLAYED_ITEM';
export const EDIT_ITEM_NAME = 'EDIT_ITEM_NAME';
export const EDIT_ITEM_BRAND = 'EDIT_ITEM_BRAND';
export const EDIT_ITEM_DESCRIPTION = 'EDIT_ITEM_DESCRIPTION';
export const EDIT_ITEM_PRICE = 'EDIT_ITEM_PRICE';
export const EDIT_ITEM_CATEGORY = 'EDIT_ITEM_CATEGORY';
export const EDIT_ITEM_PURCHASE_DATE = 'EDIT_ITEM_PURCHASE_DATE';

/*
 * action creators
 */
export function updatedModalState(isModalDisplayed, item) {
  return {
    type: MODAL_DISPLAY_STATE,
    isModalDisplayed,
    item
  };
}
