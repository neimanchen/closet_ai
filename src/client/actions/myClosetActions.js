/*
* action types
*/
export const CURRENT_MENU_ITEM = 'CURRENT_MENU_ITEM';
export const CLOSET_CATEGORIES = 'CLOSET_CATEGORIES';
export const OUTFIT_CATEGORIES = 'OUTFIT_CATEGORIES';
export const SELECTED_ITEMS = 'SELECTED_ITEMS';
export const FILTERED_STATE = 'FILTERED_STATE';
export const MODAL_DISPLAY_STATE = 'MODAL_DISPLAY_STATE';
export const ALL_ITEMS = 'ALL_ITEMS';
export const CURRENTLY_DISPLAYED_ITEM = 'CURRENTLY_DISPLAYED_ITEM';

/*
 * action creators
 */
export function updateSelectedMenuItem(item) {
  return {
    type: CURRENT_MENU_ITEM,
    item
  };
}

export function updateFilteredState(isFiltered) {
  return {
    type: FILTERED_STATE,
    isFiltered
  };
}

function updateSelectedItemsEffect(items) {
  return {
    type: SELECTED_ITEMS,
    items
  };
}

export function updateSelectedItems(items) {
  return (dispatch) => {
    dispatch(updateSelectedItemsEffect(items));
    return Promise.resolve();
  };
}

export function updateAllItems(itemsObj, itemsArray) {
  return {
    type: ALL_ITEMS,
    itemsObj,
    itemsArray,
  };
}

export function updateClosetCategories(categories) {
  return {
    type: CLOSET_CATEGORIES,
    categories
  };
}

export function updateOutfitCategories(categories) {
  return {
    type: OUTFIT_CATEGORIES,
    categories
  };
}

export function updatedModalState(isModalDisplayed, item) {
  return {
    type: MODAL_DISPLAY_STATE,
    isModalDisplayed,
    item
  };
}
