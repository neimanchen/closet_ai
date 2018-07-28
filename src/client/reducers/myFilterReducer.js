import {
  SELECTED_ITEM_CATEGORIES,
  SELECTED_ITEM_COLORS,
  SELECTED_ITEM_BRANDS,
  SELECTED_SEASONS,
  ITEM_CATEGORIES,
  ITEM_COLORS,
  ITEM_BRANDS,
  ITEM_SEASONS,
} from '../actions/myFilterActions';

// TODO: this is temporary, need to figure out what the default state will be
const initialState = {
  itemCategories: [],
  itemColors: [],
  itemBrands: [],
  itemSeasons: [],
  selectedItemCategories: [],
  selectedItemColors: [],
  selectedItemBrands: [],
  selectedSeasons: [],
};

export function myFilterReducer(state = initialState, action) {
  switch (action.type) {
    case SELECTED_ITEM_CATEGORIES:
      return Object.assign({}, state, {
        selectedItemCategories: action.categories
      });
    case SELECTED_ITEM_COLORS:
      return Object.assign({}, state, {
        selectedItemColors: action.colors
      });
    case SELECTED_ITEM_BRANDS:
      return Object.assign({}, state, {
        selectedItemBrands: action.brands
      });
    case SELECTED_SEASONS:
      return Object.assign({}, state, {
        selectedSeasons: action.seasons
      });
    case ITEM_CATEGORIES:
      return Object.assign({}, state, {
        itemCategories: action.categories
      });
    case ITEM_COLORS:
      return Object.assign({}, state, {
        itemColors: action.colors
      });
    case ITEM_BRANDS:
      return Object.assign({}, state, {
        itemBrands: action.brands
      });
    case ITEM_SEASONS:
      return Object.assign({}, state, {
        itemSeasons: action.seasons
      });
    default:
      return state;
  }
}

