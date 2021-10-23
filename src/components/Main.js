import { useState } from "react"
import "../index.css"

function Main(props) {

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
                <h3>{element.catName}</h3>
                <h3>{element.catInfo.question}</h3>
                <h3>{element.catInfo.answer}</h3>
            </div>
        ));
    };

    const loading = () => {
        return <h1>Loading...</h1>;
    };
    
    return (
        <div className="Main">
            {props.category ? loaded() : loading()}
        </div>

    )

}

export default Main;