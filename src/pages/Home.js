import React from "react";
import { useEffect, useState } from "react"
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import Header from "../components/Header";
import Main from "../components/Main";
import New from "../components/New";
import Splash from "./Splash";
import EditCategory from "../components/EditCategory";
import Category from "../components/Category";

function Home() {

    // create state to hold category data
    const [category, setCategory] = useState();

    // create a var URL to be passed into when making API call
    // const URL = "https://contrivia-backend.herokuapp.com/";
    const URL = "http://localhost:4000/";

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
    const createCategory = async (triviaCat) => {
        // make post request to create category
        await fetch(URL + 'trivia', {
            method: "POST",
            //so that it knows it's json data
            headers: {
                "Content-Type": "Application/json",
            },
            //stringify will convert into json format
            body: JSON.stringify(triviaCat),
        });
        // update list of category
        getCategory();
    };

    // we need this function to update the data
    const updateCategory = async (triviaCat, id) => {
        // make put request to create category
        await fetch(URL + "trivia/" + id, {
            method: "PUT",
            //so that it knows it's json data
            headers: {
                "Content-Type": "Application/json",
            },
            //stringify will convert into json format
            body: JSON.stringify(triviaCat),
        });
        // update list of category
        getCategory();
    }

    // we need this to delete a triviaCat
    const deleteCategory = async id => {
        // make delete request to create category
        await fetch(URL + "trivia/" + id, {
            method: "DELETE",
        })
        // update list of category
        getCategory();
    }

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
                <Route
                    path="/new"
                    render={(rp) => (
                        <New
                        category={category}
                        createCategory={createCategory}
                        {...rp}
                        />
                    )}
                />
                <Route
                    path="/category/:id"
                    render={(rp) => (
                        <EditCategory
                        category={category}
                        updateCategory={updateCategory}
                        deleteCategory={deleteCategory}
                        {...rp}
                        />
                    )}
                />
                <Route path="/category">
                    <Category category={category}/>
                </Route>
            </Switch>
        </div>
    )
}


export default Home;