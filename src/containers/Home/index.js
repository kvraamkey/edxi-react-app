import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {getNews, getUsers} from "containers/Home/action";

export default function HomePage() {
    const store = useSelector(store => store.HomeReducer);
    const dispatch = useDispatch();
    // const renders = React.useRef(0);

    useEffect(() => {
        dispatch(getNews());
    }, [dispatch])

    return (
        <div className="edxi_appContent_page">
            <button onClick={() => dispatch(getUsers())}>Press to see news</button>
            {store.loading && <h1>LOADING</h1>}
            {!store.loading && <pre>{JSON.stringify(store, null, 2)}</pre>}
        </div>
    )
}
