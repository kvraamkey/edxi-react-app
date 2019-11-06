/**
 *
 * App
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */

import React from 'react';
import {Button} from "components/Button";

export default function App() {
    return (
        <div className="App">
            <header className="App-header">
                <Button/>
                <p>
                    Edit <code>src/App.js</code> and save to reload.
                </p>
                <a className="App-link"
                   href="https://reactjs.org"
                   target="_blank"
                   rel="noopener noreferrer">Learn React
                </a>
            </header>
        </div>
    )
}
