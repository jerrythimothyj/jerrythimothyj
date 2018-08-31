import { STORE_WORKS_DATA } from './actions';

const initialState = {
  worksData: []
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case STORE_WORKS_DATA:
      return { ...state, worksData: action.worksData };
    default:
      return state;
  }
}
