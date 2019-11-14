/**
 * Create the store with dynamic reducers
 */

import {applyMiddleware, compose, createStore} from 'redux';
import createSagaMiddleware from 'redux-saga'

import reducers from "./reducers";
import rootSaga from './sagas'

const sagaMiddleware = createSagaMiddleware();

export default function configureStore(initialState) {

    const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

    // const middlewares = [sagaMiddleware];

    const enhancers = [applyMiddleware(sagaMiddleware)];

    let store = createStore(
        reducers(),
        initialState,
        composeEnhancers(...enhancers),
    );

    sagaMiddleware.run(rootSaga);

    return store;

}