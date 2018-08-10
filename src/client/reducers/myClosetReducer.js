import {
  CURRENT_MENU_ITEM,
  SELECTED_ITEMS,
  CLOSET_CATEGORIES,
  OUTFIT_CATEGORIES,
  FILTERED_STATE,
} from '../actions/myClosetActions';

// TODO: this is temporary, need to figure out what the default state will be
const initialState = {
  currentMenuItem: 'All Items',
  selectedItems: [],
  closetCategories: [],
  outfitCategories: [],
  filteredState: false,
};

export function myClosetReducer(state = initialState, action) {
  switch (action.type) {
    case CURRENT_MENU_ITEM:
      return Object.assign({}, state, {
        currentMenuItem: action.item,
      });
    case SELECTED_ITEMS:
      return Object.assign({}, state, {
        selectedItems: action.items
      });
    case CLOSET_CATEGORIES:
      return Object.assign({}, state, {
        closetCategories: action.categories
      });

    case OUTFIT_CATEGORIES:
      return Object.assign({}, state, {
        outfitCategories: action.categories
      });
    case FILTERED_STATE:
      return Object.assign({}, state, {
        filteredState: action.isFiltered
      });
    default:
      return state;
  }
}

