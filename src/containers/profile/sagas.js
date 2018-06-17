import { takeLatest, call, put, all } from "redux-saga/effects";
import fetchDog from './services'
import {API_CALL_REQUEST, API_CALL_SUCCESS, API_CALL_FAILURE} from './actions';

function* workerSaga() {
    try {
        const response = yield call(fetchDog);
        const dog = response.data.message;

        yield put({ type: API_CALL_SUCCESS, dog });

    } catch (error) {
        yield put({ type: API_CALL_FAILURE, error });
    }
}

export default function* watcherSaga() {
    yield all([
        takeLatest(API_CALL_REQUEST, workerSaga)
    ]);
}
