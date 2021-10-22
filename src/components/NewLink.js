import React from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";

function NewLink() {
    return (
        <div>
            <Link to="/new">New Category</Link>
        </div>
    )
}


export default NewLink;