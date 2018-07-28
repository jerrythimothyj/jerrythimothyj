import { STORE_BLOG_DATA } from './actions';

const initialState = {
  blogData: null,
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case STORE_BLOG_DATA:
      return { ...state, blogData: action.blogData };
    default:
      return state;
  }
}
