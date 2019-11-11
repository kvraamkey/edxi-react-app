import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import HomePage from "containers/Home";
import AboutPage from "containers/About";

const AppRouter = () => (
    <Router>
        <Switch>
            <Route exact path="/" component={HomePage}/>
            <Route path="/about" component={AboutPage}/>
        </Switch>
    </Router>
);

export default AppRouter;