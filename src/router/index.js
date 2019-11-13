import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import HomePage from "containers/Home";
import AboutPage from "containers/About";

const AppRouter = () => (
    <React.Fragment>
        <header className="edxi_appHeader">
            <div className="edxi_appHeader_logo">
                <img src={"http://localhost:3000/images/Logo.png"} alt="cloud prism" width={250}/>
            </div>
            <div className="edxi_appHeader_logUser">
                <img className="edxi_appHeader_logUser_avatar" src={"http://localhost:3000/images/avatar.png"} alt="A"/>
                <div className="edxi_appHeader_logUser_name">Prabhu Rangasamy</div>
            </div>
        </header>
        <main className="edxi_appContent">
            <Router>
                <Switch>
                    <Route exact path="/" component={HomePage}/>
                    <Route path="/about" component={AboutPage}/>
                </Switch>
            </Router>
        </main>
    </React.Fragment>
);

export default AppRouter;