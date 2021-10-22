import React from "react";
import { useState } from "react"
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";


function New(props) {

    // state to hold formData
    const [newForm, setNewForm] = useState({
        catName: "",
    });

    // handleChange function for form
    const handleChange = (event) => {
        setNewForm({ ...newForm, [event.target.name]: event.target.value });
    };

    // handle submit function for form
    const handleSubmit = (event) => {
        event.preventDefault();
        props.createCategory(newForm);
        setNewForm({
            catName: ""
        });
    };

    // loaded function
    const loaded = () => {
        return props.category.map((element) => (
            <div key={element._id} className="element">
                <h1>{element.catName}</h1>
            </div>
        ));
    };

    const loading = () => {
        return <h1>Loading...</h1>;
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
 
                    name="catName"
                    placeholder="Name New Category"
                    onChange={handleChange}
                />
                <input type="submit" value="Create" />
            </form>
            {props.category ? loaded() : loading()}
        </div>
    )
}

export default New;