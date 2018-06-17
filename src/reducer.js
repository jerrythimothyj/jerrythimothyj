import { combineReducers } from 'redux'
import profile from './containers/profile/reducer';
import resume from './containers/resume/reducer';

export default combineReducers({
    profile,
    resume
})