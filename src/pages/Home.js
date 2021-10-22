import React from "react";
import { useEffect, useState } from "react"
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import Header from "../components/Header";
import Main from "../components/Main";
import New from "../components/New";
import Splash from "./Splash";
import Edit from "../components/EditCategory";

function Home() {

    // create state to hold category data
    const [category, setCategory] = useState(null);

    // create a var URL to be passed into when making API call
    const URL = "https://contrivia-backend.herokuapp.com/";

    // create function to make api call
    const getCategory = async () => {
        // make api call and get response   
        const response = await fetch(URL + 'trivia');
        // turn response into javascript object
        const data = await response.json();
        // set the about state to the data
        setCategory(data);
    };

    //we need this function when we fill out a form. 
    const createCategory = async (cat) => {
        // make post request to create category
        await fetch(URL + 'trivia', {
            method: "POST",
            //so that it knows it's json data
            headers: {
                "Content-Type": "Application/json",
            },
            //stringify will convert into json format
            body: JSON.stringify(cat),
        });
        // update list of category
        getCategory();
    };

    // make an initial call for the data inside a useEffect, so it only happens once on component load. [] means run once. 
    useEffect(() => getCategory(), []);

    return (
        <div>
            <Header />
            <Switch>
                <Route exact path="/Splash">
                    <Splash />
                </Route>
                <Route path="/main">
                    <Main category={category} />
                </Route>
                <Route path="/new">
                    <New category={category} createCategory={createCategory} />
                </Route>
                <Route path="/edit">
                    <Edit />
                </Route>

            </Switch>
        </div>
    )
}


export default Home;