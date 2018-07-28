import { takeLatest, call, put, all } from 'redux-saga/effects';
import fetchContactData from './services';
import { GET_CONTACT_DATA, STORE_CONTACT_DATA } from './actions';

function* getContactData() {
  const response = yield call(fetchContactData);
  const contactData = response.data;

  yield put({ type: STORE_CONTACT_DATA, contactData });
}

export default function* watcherSaga() {
  yield all([
    takeLatest(GET_CONTACT_DATA, getContactData),
  ]);
}
