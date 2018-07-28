import { STORE_CONTACT_DATA } from './actions';

const initialState = {
  contactData: {
    address: '',
    phone: '',
    email: '',
    freelance: '',
  },
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case STORE_CONTACT_DATA:
      return { ...state, contactData: action.contactData };
    default:
      return state;
  }
}
