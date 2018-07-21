import {
  CURRENT_MENU_ITEM,
  SELECTED_ITEMS,
  CLOSET_CATEGORIES,
  SELECTED_ITEM_CATEGORIES,
  OUTFIT_CATEGORIES,
  ITEM_COLORS,
  SELECTED_ITEM_COLORS,
  ITEM_BRANDS,
  SELECTED_ITEM_BRANDS,
  SELECTED_SEASONS,
  ITEM_CATEGORIES,
  ITEM_SEASONS, FILTERED_STATE
} from '../actions/myClosetActions';

// TODO: this is temporary, need to figure out what the default state will be
const initialState = {
  currentMenuItem: 'All Items',
  itemSeasons: [],
  itemCategories: [],
  closetCategories: [],
  outfitCategories: [],
  itemColors: [],
  itemBrands: [],
  selectedItemColors: [],
  selectedItemBrands: [],
  selectedItemCategories: [],
  selectedSeasons: [],
  selectedItems: [],
  filteredState: false
};

export function myClosetReducer(state = initialState, action) {
  switch (action.type) {
    case CURRENT_MENU_ITEM:
      return Object.assign({}, state, {
        currentMenuItem: action.item,
      });
    case CLOSET_CATEGORIES:
      return Object.assign({}, state, {
        closetCategories: action.categories
      });
    case SELECTED_ITEM_CATEGORIES:
      return Object.assign({}, state, {
        selectedItemCategories: action.categories
      });
    case ITEM_CATEGORIES:
      return Object.assign({}, state, {
        itemCategories: action.categories
      });
    case OUTFIT_CATEGORIES:
      return Object.assign({}, state, {
        outfitCategories: action.categories
      });
    case ITEM_COLORS:
      return Object.assign({}, state, {
        itemColors: action.colors
      });
    case SELECTED_ITEM_COLORS:
      return Object.assign({}, state, {
        selectedItemColors: action.colors
      });
    case ITEM_BRANDS:
      return Object.assign({}, state, {
        itemBrands: action.brands
      });
    case SELECTED_ITEM_BRANDS:
      return Object.assign({}, state, {
        selectedItemBrands: action.brands
      });
    case SELECTED_SEASONS:
      return Object.assign({}, state, {
        selectedSeasons: action.seasons
      });
    case ITEM_SEASONS:
      return Object.assign({}, state, {
        itemSeasons: action.seasons
      });
    case SELECTED_ITEMS:
      return Object.assign({}, state, {
        selectedItems: action.items
      });
    case FILTERED_STATE:
      return Object.assign({}, state, {
        filteredState: action.isFiltered
      })
    default:
      return state;
  }
}

