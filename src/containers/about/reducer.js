import { STORE_RECOMMENDATIONS_DATA } from './actions';

const initialState = {
  recommendationsData: []
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case STORE_RECOMMENDATIONS_DATA:
      return { ...state, recommendationsData: action.recommendationsData };
    default:
      return state;
  }
}
