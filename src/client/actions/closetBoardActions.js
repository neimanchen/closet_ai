/*
* action types
*/
export const WEATHER = 'WEATHER';

/*
 * action creators
 */
export function updateWeather(forecast) {
  return {
    type: WEATHER,
    forecast
  };
}
