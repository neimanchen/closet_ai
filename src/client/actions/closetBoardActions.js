/*
* action types
*/
export const WEATHER = 'WEATHER';
export const LOCATION = 'LOCATION';

/*
 * action creators
 */
export function updateWeather(forecast) {
  return {
    type: WEATHER,
    forecast
  };
}
export function updateLocation(location) {
  return {
    type: LOCATION,
    location
  };
}
