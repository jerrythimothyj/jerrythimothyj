import {STORE_RESUME_DATA} from './actions';

const initialState = {
  resumeData: null
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case STORE_RESUME_DATA:
      return { ...state, resumeData: action.resumeData };
    default:
      return state;
  }
}