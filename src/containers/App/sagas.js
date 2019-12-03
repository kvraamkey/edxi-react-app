import { all, put, takeLatest } from "@redux-saga/core/effects";


function* fetchNews() {
    try {
        const json = yield fetch('https://newsapi.org/v1/articles?source=cnn&apiKey=c39a26d9c12f48dba2a5c00e35684ecc')
            .then(response => response.json());
        yield put({ type: "NEWS_RECEIVED", payload: json });
    }
    catch (e) {
        yield put({ type: "NEWS_ERROR", payload: e.message });
    }
}

export function* newsSaga() {
    yield all([
        yield takeLatest('GET_NEWS', fetchNews),
    ]);
}