
function Card (props) {
    return (
        <div className="declarativeCard">
          <img src={props.image} alt="declarative icon"/>
          <p>{props.information}</p>
        </div>

    )
}

export default Card;