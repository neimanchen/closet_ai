/*
* action types
*/
export const MODAL_DISPLAY_STATE = 'MODAL_DISPLAY_STATE';
export const CURRENTLY_DISPLAYED_ITEM = 'CURRENTLY_DISPLAYED_ITEM';
export const EDIT_ITEM_NAME_TOGGLE = 'EDIT_ITEM_NAME_TOGGLE';
export const EDIT_ITEM_BRAND_TOGGLE = 'EDIT_ITEM_BRAND_TOGGLE';
export const EDIT_ITEM_DESCRIPTION_TOGGLE = 'EDIT_ITEM_DESCRIPTION_TOGGLE';
export const EDIT_ITEM_PRICE_TOGGLE = 'EDIT_ITEM_PRICE_TOGGLE';
export const EDIT_ITEM_CATEGORY_TOGGLE = 'EDIT_ITEM_CATEGORY_TOGGLE';
export const EDIT_ITEM_PURCHASE_DATE_TOGGLE = 'EDIT_ITEM_PURCHASE_DATE_TOGGLE';
export const EDIT_ITEM_COLOR_TOGGLE = 'EDIT_ITEM_COLOR_TOGGLE';


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

export function toggleItemNameField(value) {
  return {
    type: EDIT_ITEM_NAME_TOGGLE,
    value,
  };
}

export function toggleItemBrandField(value) {
  return {
    type: EDIT_ITEM_BRAND_TOGGLE,
    value,
  };
}

export function toggleItemDescriptionField(value) {
  return {
    type: EDIT_ITEM_DESCRIPTION_TOGGLE,
    value,
  };
}

export function toggleItemPriceField(value) {
  return {
    type: EDIT_ITEM_PRICE_TOGGLE,
    value,
  };
}

export function toggleItemPurchaseDateField(value) {
  return {
    type: EDIT_ITEM_PURCHASE_DATE_TOGGLE,
    value,
  };
}

export function toggleItemCategoryField(value) {
  return {
    type: EDIT_ITEM_CATEGORY_TOGGLE,
    value,
  };
}

export function toggleItemColorField(value) {
  return {
    type: EDIT_ITEM_COLOR_TOGGLE,
    value,
  };
}
