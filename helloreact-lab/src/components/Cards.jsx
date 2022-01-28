function Cards(props){
    return (
        <div>
            <img src={props.image}/>
            <h1>{props.title}</h1>
            <span>{props.description}</span>
        </div>
    );
}

export default Cards;