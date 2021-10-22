import { useState } from "react"

function Show(props) {

    const id = props.match.params.id;
    const category = props.category;
    const catName = category.find(p => p._id === id);



    return (
        <div className="catName">
            <h1>{catName.name}</h1>

        </div>
    )
}

export default Show;