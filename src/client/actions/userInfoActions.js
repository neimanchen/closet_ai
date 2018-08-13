/*
* action types
*/
export const UPDATE_FIRST_NAME = 'UPDATE_FIRST_NAME';
export const UPDATE_LAST_NAME = 'UPDATE_LAST_NAME';
export const UPDATE_EMAIL = 'UPDATE_EMAIL';
export const UPDATE_HASH = 'UPDATE_HASH';
export const UPDATE_GENDER = 'UPDATE_GENDER';
export const UPDATE_ZIP = 'UPDATE_ZIP';
export const UPDATE_WORK_ZIP = 'UPDATE_WORK_ZIP';
export const UPDATE_BIRTH_DATE = 'UPDATE_BIRTH_DATE';
export const UPDATE_CLOSET_IDS_FOLLOWED = 'UPDATE_CLOSET_IDS_FOLLOWED';

/*
 * action creators
 */
export function updateFirstName(firstName) {
  return {
    type: UPDATE_FIRST_NAME,
    firstName
  };
}

export function updateLastName(lastName) {
  return {
    type: UPDATE_LAST_NAME,
    lastName
  };
}
export function updateEmail(email) {
  return {
    type: UPDATE_EMAIL,
    email
  };
}

export function updateHash(hash) {
  return {
    type: UPDATE_HASH,
    hash
  }
}

export function updateGender({gender}) {
  return {
    type: UPDATE_GENDER,
    gender,
  };
}

export function updateZip(zip) {
  return {
    type: UPDATE_ZIP,
    zip
  };
}

export function updateWorkZip(workZip) {
  return {
    type: UPDATE_WORK_ZIP,
    workZip
  };
}

export function updateBirthDate(birthDate) {
  return {
    type: UPDATE_BIRTH_DATE,
    birthDate
  };
}

export function updateClosetIdsFollowed(closetIdsFollowed) {
  return {
    type: UPDATE_CLOSET_IDS_FOLLOWED,
    closetIdsFollowed
  };
}
