function ReactCards(props){
    console.log("props", props)
    return(
        <div>
            <img src={props.image}></img>
            <h2>{props.title}</h2>
            <span>{props.text}</span>
        </div>
    );
}

export default ReactCards