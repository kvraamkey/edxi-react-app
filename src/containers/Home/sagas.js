import {all, put, takeLatest} from 'redux-saga/effects'


function* fetchUsers() {
    const json = yield fetch('http://jsonplaceholder.typicode.com/users')
        .then(response => response.json());
    yield put({type: "USERS_RECEIVED", payload:json});
}

export function* userSagas() {
    yield all([
        yield takeLatest('GET_USERS', fetchUsers)
    ]);
}