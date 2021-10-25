import React from "react";
import { useState } from "react"
import { Link } from "react-router-dom"

function CategoryShow(props) {

    const id = props.match.params.id;
    const category = props.category;
    const catId = category.find(p => p._id === id);
    const eyeD = catId._id;

    // state for form
    // const [editForm, setEditForm] = useState(catId);
    // const [editQuestion, setEditQuestion] = useState(catId);

    const [formData, setFormData] = useState({
        catName: catId.catName,
        question: catId.question,
        answer: catId.answer,
        difficulty: catId.difficulty,
    });

    //#region state for complex schema
    // const [formData, setFormData] = useState({
    //     catName: catId.catName,
    //     question: catId.catInfo[0].question,
    //     answer: catId.catInfo[0].answer,
    // });
    //#endregion
    
    
    // handleChange function for form
    const handleChange = event => {
        console.log(event.target.name)
        setFormData({ ...formData, [event.target.name]: event.target.value });
    }

    // const handleChangeQuestion = event => {
    //     setEditQuestion({ ...editQuestion, [event.target.name]: event.target.value });
    // }

    // handlesubmit for form
    const handleSubmit = event => {
        event.preventDefault();
        props.updateCategory(formData, catId._id);
        // props.updateCategory(editQuestion, catId._id);
        console.log(formData)
        // redirect Category back to index
        props.history.push("/category");
    }

    // handlesubmit for form
    const handleSubmit2 = event => {
        event.preventDefault();
        props.updateCategory(formData, catId._id.catInfo);
        // props.updateCategory(editQuestion, catId._id);
        console.log(formData)
        // redirect Category back to index
        props.history.push("/category");
    }

    //delete function for catId
    const removeCategory = () => {
        props.deleteCategory(catId._id);
        // redirect Category back to index
        props.history.push("/category");
    }
    //#region display function for looping through Q & A
    // const display = () => {
    //     return props.category.map((element) => (
    //         <div key={element._id} className="catName">
    //             <h2>Question: {catId.catInfo[0].question}</h2>
    //             <h2>Answer: {catId.catInfo[0].answer}</h2>
    //         </div>
    //     ));
    // };
    //#endregion

    const toCatEdit = () => {
        return (

            <div className="button" id="editButton">
                <Link to={`/category/${catId._id}/edit`}><button>Edit Questions</button></Link>
            </div>
        )
    };


    return (
        <div className="EditCat">
            <div className="editButton">{toCatEdit()}</div>
            <div className="catId">
                <div className="catName">
                    <h1>{catId.catName}</h1>
                </div>
                <div className="question">
                    <h2>Question: <span>{catId.question}</span></h2>
                    <h2>Answer: <span>{catId.answer}</span></h2>
                    <h2>Difficulty (1-5): <span>{catId.difficulty}</span></h2>

                </div>
            </div>
        </div>
    )
}

export default CategoryShow;

