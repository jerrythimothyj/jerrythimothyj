import { all, call } from "redux-saga/effects";
import watcherSaga from './containers/profile/sagas';


export default function* saga() {
    yield all([
        call(watcherSaga)
    ])
}