import { takeLatest, call, put, all } from 'redux-saga/effects';
import fetchWorksData from './services';
import { GET_WORKS_DATA, STORE_WORKS_DATA } from './actions';

function* getWorksData() {
  const response = yield call(fetchWorksData);
  const worksData = response.data;

  yield put({ type: STORE_WORKS_DATA, worksData });
}

export default function* watcherSaga() {
  yield all([takeLatest(GET_WORKS_DATA, getWorksData)]);
}
