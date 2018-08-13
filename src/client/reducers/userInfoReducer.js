import { UPDATE_FIRST_NAME, UPDATE_LAST_NAME, UPDATE_EMAIL, UPDATE_HASH, UPDATE_GENDER, UPDATE_ZIP, UPDATE_WORK_ZIP, UPDATE_BIRTH_DATE, UPDATE_CLOSET_IDS_FOLLOWED } from '../actions/userInfoActions';

const initialState = {
  firstName: '',
  lastName: '',
  email: '',
  hash: '',
  gender: '',
  zip: 0,
  workZip: 0,
  birthDate: '',
  closetIdsFollowed: []
};

export function userInfoReducer(state = initialState, action) {
  switch (action.type) {
    case UPDATE_FIRST_NAME:
      return Object.assign({}, state, {
        firstName: action.firstName
      });
    case UPDATE_LAST_NAME:
      return Object.assign({}, state, {
        lastName: action.lastName
      });
    case UPDATE_EMAIL:
      return Object.assign({}, state, {
        email: action.email
      });
    case UPDATE_HASH:
      return Object.assign({}, state, {
        hash: action.hash
      });
    case UPDATE_GENDER:
      return Object.assign({}, state, {
        gender: action.gender
      });
    case UPDATE_ZIP:
      return Object.assign({}, state, {
        zip: action.zip
      });
    case UPDATE_WORK_ZIP:
      return Object.assign({}, state, {
        workZip: action.workZip
      });
    case UPDATE_BIRTH_DATE:
      return Object.assign({}, state, {
        birthDate: action.birthDate
      });
    case UPDATE_CLOSET_IDS_FOLLOWED:
      return Object.assign({}, state, {
        closetIdsFollowed: action.closetIdsFollowed
      });
    default:
      return state;
  }
}
