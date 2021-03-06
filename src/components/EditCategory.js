import React from "react";
import { useState } from "react"


function EditCategory(props) {

    const id = props.match.params.id;
    const category = props.category;
    const catId = category.find(p => p._id === id);

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

    return (
        <div className="EditCat">
            <form className="form" onSubmit={handleSubmit}>
                <input
                    type="text"
                    value={formData.catName}
                    name="catName"
                    placeholder="Update Category Name"
                    onChange={handleChange}
                />
                <input
                    type="text"
                    value={formData.question}
                    name="question"
                    placeholder="question"
                    onChange={handleChange}
                />
                <input
                    type="text"
                    value={formData.answer}
                    name="answer"
                    placeholder="answer"
                    onChange={handleChange}
                />
                <input
                    type="number"
                    value={formData.difficulty}
                    min="1"
                    max="5"
                    name="difficulty"
                    placeholder="difficulty"
                    onChange={handleChange}
                />
                <input type="submit" value="Update" />
            </form>

            <button className="button" id="deleteButton" onClick={removeCategory}>DELETE</button>
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

export default EditCategory;

