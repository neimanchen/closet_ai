/*
* action types
*/

export const UPDATE_WEATHER = 'UPDATE_WEATHER';
export const UPDATE_RECENTLY_ADDED_OUTFITS = 'UPDATE_RECENTLY_ADDED_OUTFITS';
export const UPDATE_RECOMMENDED_OUTFITS = 'UPDATE_RECOMMENDED_OUTFITS';
export const UPDATE_UNWORN_ITEMS = 'UPDATE_UNWORN_ITEMS';
export const WEATHER = 'WEATHER';
export const LOCATION = 'LOCATION';

/*
 * action creators
 */
export function updateWeather(forecast) {
  return {
    type: UPDATE_WEATHER,
    forecast
  };
}

export function updateRecentlyAddedOutfits(outfits) {
  return {
    type: UPDATE_RECENTLY_ADDED_OUTFITS,
    outfits
  };
}

export function updateRecommendedOutfits(outfit) {
  return {
    type: UPDATE_RECOMMENDED_OUTFITS,
    outfit
  };
}

export function updateUnwornItems(unwornItems) {
  return {
    type: UPDATE_UNWORN_ITEMS,
    unwornItems
  }
}

export function updateLocation(location) {
  return {
    type: LOCATION,
    location
  };
}
