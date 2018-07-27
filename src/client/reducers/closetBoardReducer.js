import { WEATHER, LOCATION } from '../actions/closetBoardActions';

const initialState = {
  weather: 'Allow geolcation and then click button that appears',
  location: { error: 'Waiting for location...' }
};

export function closetBoardReducer(state = initialState, action) {
  switch (action.type) {
    case WEATHER:
      return Object.assign({}, state, {
        weather: action.forecast
      });
    case LOCATION:
      return Object.assign({}, state, {
        location: action.location
      });
    default:
      return state;
  }
}
