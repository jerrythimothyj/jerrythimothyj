import { combineReducers } from 'redux';
import profile from './containers/profile/reducer';
import resume from './containers/resume/reducer';
import blog from './containers/blog/reducer';
import contacts from './containers/contacts/reducer';
import works from './containers/works/reducer';
import about from './containers/about/reducer';

export default combineReducers({
  profile,
  resume,
  blog,
  contacts,
  works,
  about
});
