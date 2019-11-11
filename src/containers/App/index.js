/**
 *
 * App
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */

import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {counterIncrement} from "./action";

export default function App() {
    const countReducer = useSelector(store => store.countReducer);

    const dispatch = useDispatch();

    console.log(`COUNTER: ${countReducer}`);
    return (
        <div className="App">
            <header className="App-header">
                <p>counter:{countReducer}</p>
                <button onClick={()=>dispatch(counterIncrement(1))}>Increment</button>
            </header>
        </div>
    )
}
