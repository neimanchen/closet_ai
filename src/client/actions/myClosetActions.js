/*
* action types
*/
export const CURRENT_MENU_ITEM = 'CURRENT_MENU_ITEM';
export const CLOSET_CATEGORIES = 'CLOSET_CATEGORIES';
export const OUTFIT_CATEGORIES = 'OUTFIT_CATEGORIES';
export const SELECTED_ITEMS = 'SELECTED_ITEMS';
export const FILTERED_STATE = 'FILTERED_STATE';

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

export function updateSelectedItems(items) {
  return {
    type: SELECTED_ITEMS,
    items
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
