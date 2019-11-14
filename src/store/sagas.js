import {all, fork} from 'redux-saga/effects'

const injectedSagas = [];
const sagas = require.context('./../containers', true, /sagas\.js$/);

sagas.keys().forEach(key => {
    injectedSagas.push(...Object.values(sagas(key)))
})


console.log(injectedSagas);

export default function* rootSaga() {
    yield all(injectedSagas.map(fork));
}