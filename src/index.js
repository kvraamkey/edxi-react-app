/**
 * app.js
 *
 * This is the entry file for the application, only setup and boilerplate
 * code.
 */

// Import all the third party stuff
import React from 'react';
import {render} from 'react-dom';
import {Provider} from 'react-redux'

// Import root app
// import App from './containers/App';
import configureStore from "./store";
import AppRouter from "./router";

const initialState = {};
const store = configureStore(initialState);

render(
    <Provider store={store}>
        <AppRouter/>
    </Provider>,
    document.getElementById("edxi")
)

