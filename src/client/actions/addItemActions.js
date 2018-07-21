/*
* action types
*/
export const ITEM = 'ITEM';

/*
 * action creators
 */
export function updateItem(item) {
  return {
    type: ITEM,
    item
  };
}
