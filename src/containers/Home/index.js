import React from 'react';
import App from "containers/App";
import {useSelector} from "react-redux";

export default function HomePage() {
    const store = useSelector(store => store.HomeReducer);
    const renders = React.useRef(0);
    return (
        <div className="page">
            <p>{store.name}</p>
            <div>renders: {renders.current++}</div>
            <App/>
        </div>
    )
}
