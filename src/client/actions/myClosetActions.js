/*
* action types
*/
export const CURRENT_MENU_ITEM = 'CURRENT_MENU_ITEM';
export const CLOSET_CATEGORIES = 'CLOSET_CATEGORIES';
export const SELECTED_ITEM_CATEGORIES = 'SELECTED_ITEM_CATEGORIES';
export const OUTFIT_CATEGORIES = 'OUTFIT_CATEGORIES';
export const SELECTED_SEASONS = 'SELECTED_SEASONS';
export const ITEM_COLORS = 'ITEM_COLORS';
export const SELECTED_ITEM_COLORS = 'SELECTED_ITEM_COLORS';
export const ITEM_BRANDS = 'ITEM_BRANDS';
export const SELECTED_ITEM_BRANDS = 'SELECTED_ITEM_BRANDS';
export const ITEM_CATEGORIES = 'ITEM_CATEGORIES';
export const ITEM_SEASONS = 'ITEM_SEASONS';
/*
 * action creators
 */
export function updateSelectedMenuItem(item) {
  return {
    type: CURRENT_MENU_ITEM,
    item
  };
}

export function updateClosetCategories(categories) {
  return {
    type: CLOSET_CATEGORIES,
    categories
  };
}

export function updateItemCategories(categories) {
  return {
    type: ITEM_CATEGORIES,
    categories
  };
}

export function updateItemSeasons(seasons) {
  return {
    type: ITEM_SEASONS,
    seasons
  };
}


export function updateSelectedCategories(categories) {
  return {
    type: SELECTED_ITEM_CATEGORIES,
    categories
  };
}

export function updateOutfitCategories(categories) {
  return {
    type: OUTFIT_CATEGORIES,
    categories
  };
}

export function updateSelectedSeasons(seasons) {
  return {
    type: SELECTED_SEASONS,
    seasons
  };
}

export function updateItemColors(colors) {
  return {
    type: ITEM_COLORS,
    colors
  };
}

export function updateSelectedColors(colors) {
  return {
    type: SELECTED_ITEM_COLORS,
    colors
  };
}

export function updateItemBrands(brands) {
  return {
    type: ITEM_BRANDS,
    brands
  };
}

export function updateSelectedBrands(brands) {
  return {
    type: SELECTED_ITEM_BRANDS,
    brands
  };
}
