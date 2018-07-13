/*
* action types
*/
export const CURRENT_MENU_ITEM = 'CURRENT_MENU_ITEM';

/*
 * action creators
 */
export function updateSelectedMenuItem(item) {
  return {
    type: CURRENT_MENU_ITEM,
    item
  };
}
