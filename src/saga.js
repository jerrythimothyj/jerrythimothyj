import { all, call } from "redux-saga/effects";
import profile from './containers/profile/sagas';
import resume from './containers/resume/sagas';


export default function* saga() {
    yield all([
        call(profile),
        call(resume)
    ])
}