import { all, call } from 'redux-saga/effects';
import profile from './containers/profile/sagas';
import resume from './containers/resume/sagas';
import blog from './containers/blog/sagas';
import contacts from './containers/contacts/sagas';
import works from './containers/works/sagas';
import recommendations from './containers/about/sagas';

export default function* saga() {
  yield all([
    call(profile),
    call(resume),
    call(blog),
    call(contacts),
    call(works),
    call(recommendations)
  ]);
}
