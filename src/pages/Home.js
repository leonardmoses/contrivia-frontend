import Header from "../components/Header";
import React from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";

function Home() {
    return (
        <div>
            <Header />
            <h1>Home Page Content.</h1>
        </div>
    )
}


export default Home;