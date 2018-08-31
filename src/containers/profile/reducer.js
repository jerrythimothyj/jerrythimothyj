import { STORE_PROFILE_DATA } from './actions';

const initialState = {
  profileData: {
    name: '',
    designation: '',
    github: '',
    linkedin: '',
    facebook: '',
    resume_link: ''
  }
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case STORE_PROFILE_DATA:
      return { ...state, profileData: action.profileData };
    default:
      return state;
  }
}
