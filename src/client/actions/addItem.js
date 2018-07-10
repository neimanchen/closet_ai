/*
* action types
*/
export const ADD_ITEM = 'ADD_ITEM'



/*
 * action creators
 */
export function addItem(item) {
  return {
    type: ADD_ITEM,
    item
  }
}
