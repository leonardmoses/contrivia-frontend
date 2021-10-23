import React from "react";
import { useState } from "react"
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";


function EditCategory(props) {

    const id = props.match.params.id;
    const category = props.category;
    const person = category.find(p => p._id === id);

    // state for form
    const [editForm, setEditForm] = useState(person);

    // handleChange function for form
    const handleChange = event => {
        setEditForm({ ...editForm, [event.target.name]: event.target.value });
    }

    // handlesubmit for form
    const handleSubmit = event => {
        event.preventDefault();
        props.updatePeople(editForm, person._id);
        console.log(person.name)
        // redirect people back to index
        props.history.push("/");
    }

    //delete function for person
    const removePerson = () => {
        props.deletePeople(person._id);
        // redirect people back to index
        props.history.push("/");
    }


    return (
        <div>
            <h1>Edit page</h1>
        </div>
    )
}

export default EditCategory;