/**
 * Create the store with dynamic reducers
 */

import {createStore} from 'redux';
import reducers from "./reducers";

export default function configureStore(initialState = {}) {

    const store = createStore(
        reducers(),
        initialState,
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
        // composeEnhancers(...enhancers),
    );

    store.injectedReducers = {}; // Reducer registry


    if (module.hot) {
        module.hot.accept('./reducers', () => {
            store.replaceReducer(reducers(store.injectedReducers));
        });
    }

    return store

}
