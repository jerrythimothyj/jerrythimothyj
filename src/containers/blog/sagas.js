import { takeLatest, call, put, all } from 'redux-saga/effects';
import fetchBlogData from './services';
import { GET_BLOG_DATA, STORE_BLOG_DATA } from './actions';

function* getBlogData() {
  const response = yield call(fetchBlogData);
  const blogData = response.data;

  yield put({ type: STORE_BLOG_DATA, blogData });
}

export default function* watcherSaga() {
  yield all([
    takeLatest(GET_BLOG_DATA, getBlogData),
  ]);
}
