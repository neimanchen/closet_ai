/*
* action types
*/
export const UPDATE_SELECTED_OUTFIT_ITEMS = 'UPDATE_SELECTED_OUTFIT_ITEMS';

/*
 * action creators
 */
export function updateSelectedOutfitItems(items) {
  return {
    type: UPDATE_SELECTED_OUTFIT_ITEMS,
    items
  };
}
