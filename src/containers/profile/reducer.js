import {STORE_PROFILE_DATA} from './actions';

const initialState = {
  profileData: null
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case STORE_PROFILE_DATA:
      return { ...state, profileData: action.profileData };
    default:
      return state;
  }
}