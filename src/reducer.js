import { combineReducers } from 'redux';
import profile from './containers/profile/reducer';
import resume from './containers/resume/reducer';
import blog from './containers/blog/reducer';

export default combineReducers({
  profile,
  resume,
  blog,
});
