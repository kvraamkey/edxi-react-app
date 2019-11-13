/**
 * Combine all reducers in this file and export the combined reducers.
 */

import {combineReducers} from "redux";

/**
 * Merges the main reducer with the router state and dynamically injected reducers
 */
const injectedReducers = {};
const reducers = require.context('./../containers', true, /reducer\.js$/);

reducers.keys().forEach(key => {
    Object.keys(reducers(key)).forEach(function (k) {
        injectedReducers[k] = reducers(key)[k];
    });
})

export default function createReducer() {
    const rootReducer = combineReducers({...injectedReducers});

    return rootReducer;
}
