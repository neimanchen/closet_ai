import {WEATHER} from '../actions/closetBoardActions';

const initialState = {
  weather: 'Click the button to get weather, I put this in a button because there is only 25 calls a day'
};

export function closetBoardReducer(state = initialState, action) {
  switch (action.type) {
    case WEATHER:
      return Object.assign({}, state, {
        weather: action.forecast
      });
    default:
      return state;
  }
}


