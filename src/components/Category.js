import { useState } from "react"

function Category(props) {

    // state to hold formData
    const [newForm, setNewForm] = useState({
        catName: "",
        question: "",
        answer: ""
    });

    // loaded function
    const loaded = () => {
        return props.category.map((element) => (
            <div key={element._id} className="catName">
                <h2>{element.catName}</h2>
            </div>
        ));
    };

    const loading = () => {
        return <h1>Loading...</h1>;
    };

    return (
        <div className="Category">
            <div className="Categoryh1">
                <h1>Select a Category</h1>
            </div>
            <div className="catListBox">
                <div className="catList">
                    {props.category ? loaded() : loading()}
                </div>
            </div>

        </div>

    )

}

export default Category;