function Card(props){
    return(
        <div>
            <img src={props.src} alt='react-icon' />
            <h2>{props.title}</h2>
            <p>{props.description}</p>
        </div>
    )
}

export default Card;