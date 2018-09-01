import { takeLatest, call, put, all } from 'redux-saga/effects';
import { fetchAboutData, fetchRecommendationsData } from './services';
import {
  GET_ABOUT_DATA,
  GET_RECOMMENDATIONS_DATA,
  STORE_ABOUT_DATA,
  STORE_RECOMMENDATIONS_DATA
} from './actions';

function* getAboutData() {
  const response = yield call(fetchAboutData);
  const aboutData = response.data;

  yield put({ type: STORE_ABOUT_DATA, aboutData });
}

function* getRecommendationsData() {
  const response = yield call(fetchRecommendationsData);
  const recommendationsData = response.data;

  yield put({ type: STORE_RECOMMENDATIONS_DATA, recommendationsData });
}

export default function* watcherSaga() {
  yield all([takeLatest(GET_ABOUT_DATA, getAboutData)]);
  yield all([takeLatest(GET_RECOMMENDATIONS_DATA, getRecommendationsData)]);
}
