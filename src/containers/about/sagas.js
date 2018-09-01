import { takeLatest, call, put, all } from 'redux-saga/effects';
import fetchRecommendationsData from './services';
import {
  GET_RECOMMENDATIONS_DATA,
  STORE_RECOMMENDATIONS_DATA
} from './actions';

function* getRecommendationsData() {
  const response = yield call(fetchRecommendationsData);
  const recommendationsData = response.data;

  yield put({ type: STORE_RECOMMENDATIONS_DATA, recommendationsData });
}

export default function* watcherSaga() {
  yield all([takeLatest(GET_RECOMMENDATIONS_DATA, getRecommendationsData)]);
}
