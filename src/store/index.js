/**
 * Create the store with dynamic reducers
 */

import {createStore} from 'redux';
import createReducer from "./reducers";

export default function configureStore(initialState = {}) {


    const store = createStore(
        createReducer(),
        initialState,
        // composeEnhancers(...enhancers),
    );

    store.injectedReducers = {}; // Reducer registry


    if (module.hot) {
        module.hot.accept('./reducers', () => {
            store.replaceReducer(createReducer(store.injectedReducers));
        });
    }

    return store

}
