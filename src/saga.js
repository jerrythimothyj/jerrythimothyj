import { all, call } from 'redux-saga/effects';
import profile from './containers/profile/sagas';
import resume from './containers/resume/sagas';
import blog from './containers/blog/sagas';


export default function* saga() {
  yield all([
    call(profile),
    call(resume),
    call(blog),
  ]);
}
