
import React from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";

function Splash() {
    return (
        <div>
            <h1>Welcome To Contrivia</h1>
            <Link to="/home">Home</Link>
        </div>
    )
}


export default Splash;