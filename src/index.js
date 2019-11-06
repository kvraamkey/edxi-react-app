/**
 * app.js
 *
 * This is the entry file for the application, only setup and boilerplate
 * code.
 */


// Import all the third party stuff
import React from 'react';
import {render} from 'react-dom';
import * as serviceWorker from './serviceWorker';

// Import root app
import App from './App';

const moundNode = document.getElementById("edxi");

function renderApp() {
    render(<App/>, moundNode)
}

renderApp();

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
