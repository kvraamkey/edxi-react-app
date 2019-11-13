/**
 *
 * App
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */

import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {counterIncrement} from "containers/App/action";

export default function App() {
    const store = useSelector(store => store.countReducer);
    const dispatch = useDispatch();

    return (
        <div className="App">
            <header className="App-header">
                <p>counter: {store.name} {store.count}</p>
                <button className="btn" onClick={() => dispatch(counterIncrement(1))}>Increment</button>
                <button className="btn btn-blue" onClick={() => dispatch({type: 'DECREMENT'}, 1)}>DECREMENT</button>
            </header>
        </div>
    )
}
