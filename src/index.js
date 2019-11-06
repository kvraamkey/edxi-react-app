/**
 * app.js
 *
 * This is the entry file for the application, only setup and boilerplate
 * code.
 */

// Import all the third party stuff
import React from 'react';
import {render} from 'react-dom';

// Import root app
import App from './containers/App';

const moundNode = document.getElementById("edxi");

function renderApp() {
    render(<App/>, moundNode)
}

renderApp();

