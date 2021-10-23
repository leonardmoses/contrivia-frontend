
import React from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import Home from "./Home";

function Splash() {
    return (
        <div className="Splash">
            <h1>Welcome to ConTriva</h1>
            <h2>where you can create your own trivia.</h2>
            <Link to="/home">
                <button className="button">Lets Begin</button>
            </Link>
            <Switch>
                <Route path="/home">
                    <Home />
                </Route>
            </Switch>
            
        </div>
    )
}


export default Splash;