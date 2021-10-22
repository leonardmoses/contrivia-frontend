import React from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import Header from "../components/Header";
import Main from "../components/Main";
import New from "../components/New";
import Splash from "./Splash";

function Home() {
    return (
        <div>
            <Header />
            <Switch>
                <Route exact path="/Splash">
                    <Splash />
                </Route>
                <Route path="/main">
                    <Main />
                </Route>
                <Route path="/new">
                    <New />
                </Route>

            </Switch>
        </div>
    )
}


export default Home;