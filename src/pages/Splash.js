
import React from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import Home from "./Home";

function Splash() {
    return (
        <div>
            <h1>Welcome To Contrivia</h1>
            <Link to="/home">Home</Link>
            <Switch>
                <Route path="/home">
                    <Home />
                </Route>
            </Switch>
            
        </div>
    )
}


export default Splash;