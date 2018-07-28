import { takeLatest, call, put, all } from 'redux-saga/effects';
import fetchResumeData from './services';
import { GET_RESUME_DATA, STORE_RESUME_DATA } from './actions';

function* getResumeData() {
  const response = yield call(fetchResumeData);
  const resumeData = response.data;

  yield put({ type: STORE_RESUME_DATA, resumeData });
}

export default function* watcherSaga() {
  yield all([
    takeLatest(GET_RESUME_DATA, getResumeData),
  ]);
}
