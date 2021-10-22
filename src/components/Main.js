

function Main(props) {

    // loaded function
    const loaded = () => {
        return props.category.map((element) => (
            <div key={element._id} className="catName">
                <h3>{element.catName}</h3>
            </div>
        ));
    };

    const loading = () => {
        return <h1>Loading...</h1>;
    };

    return props.category ? loaded() : loading()
        

}

export default Main;