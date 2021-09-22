function Card (props) {
    return (
        <div className="declarativeCard">
          <img src={props.image} alt="declarative icon"/>
          <h3>{props.title}</h3>      
          <p>{props.information}</p>
        </div>

    )
}
export default Card;