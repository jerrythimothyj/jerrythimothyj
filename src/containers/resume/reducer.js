import { STORE_RESUME_DATA } from './actions';

const initialState = {
  resumeData: {
    educations: [],
    experiences: [],
    skills: {
      primary: [],
      secondary: [],
      databases: [],
      tools: [],
      multimedia: [],
      testing: []
    }
  }
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case STORE_RESUME_DATA:
      return { ...state, resumeData: action.resumeData };
    default:
      return state;
  }
}
