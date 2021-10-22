import React from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import New from "./New";
import NewLink from "./NewLink";

function Header(props) {
    return (
        <nav className="nav">
            <h1>Contrivia</h1>
            <Link to="/main">
                <div>main</div>
            </Link>
            <Link to="/new">
                <div>new</div>
            </Link>
        </nav>
    );
}

export default Header;