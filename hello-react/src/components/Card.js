function Card(props) {
    return (
        <div className="card border-0 d-flex d-column justify-content-center">
            <img src={props.image} id='icon'class="" alt="..."/>
            <div className="card-body">
                <h3 className="card-title">{props.title}</h3>
                <p className="card-text">{props.text}</p>
            </div>
        </div>
    )
}

export default Card