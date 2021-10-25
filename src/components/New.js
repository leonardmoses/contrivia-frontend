import React from "react";
import { useState } from "react"
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";


function New(props) {

    // state to hold formData
    const [newForm, setNewForm] = useState({
        catName: "",
        question: "",
        answer: ""
    });

    // handleChange function for form
    const handleChange = (event) => {
        setNewForm({ ...newForm, [event.target.name]: event.target.value });
    };

    // handle submit function for form
    const handleSubmit = (event) => {
        event.preventDefault();
        props.createCategory(newForm);
        props.history.push("/category");
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
        <div className="New">
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="catName"
                    placeholder="Name New Category"
                    onChange={handleChange}
                />
                <input
                    type="text"
                    name="question"
                    placeholder="Enter the Question"
                    onChange={handleChange}
                />
                <input
                    type="text"
                    name="answer"
                    placeholder="Enter the Answer"
                    onChange={handleChange}
                />
                <input type="submit" value="Create" />
            </form>

            <div className="Category">
                <div className="Categoryh1">
                    <h1>List of existing Categories</h1>
                </div>
                <div className="catListBox">
                    <div className="catList">
                        {props.category ? loaded() : loading()}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default New;