import { STORE_ABOUT_DATA, STORE_RECOMMENDATIONS_DATA } from './actions';

const initialState = {
  aboutData: {
    intro: '',
    age: 0,
    residence: '',
    freelance: '',
    address: '',
    services: [],
    pricings: []
  },
  recommendationsData: []
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case STORE_ABOUT_DATA:
      return { ...state, aboutData: action.aboutData };
    case STORE_RECOMMENDATIONS_DATA:
      return { ...state, recommendationsData: action.recommendationsData };
    default:
      return state;
  }
}
