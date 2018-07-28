import { takeLatest, call, put, all } from 'redux-saga/effects';
import fetchProfileData from './services';
import { GET_PROFILE_DATA, STORE_PROFILE_DATA } from './actions';

function* getProfileData() {
  const response = yield call(fetchProfileData);
  const profileData = response.data;

  yield put({ type: STORE_PROFILE_DATA, profileData });
}

export default function* watcherSaga() {
  yield all([
    takeLatest(GET_PROFILE_DATA, getProfileData),
  ]);
}
