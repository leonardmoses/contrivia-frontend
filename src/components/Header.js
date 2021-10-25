import React from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";


function Header(props) {
    return (
        <nav className="nav">
            <h1>Contrivia</h1>
            <ul>
                <li><Link to="/category"><button>Category</button></Link></li>
                <li><Link to="/new"><button>New</button></Link></li>
            </ul>
        </nav>
    );
}

export default Header;