function Card(props) {
    console.log(props);
    return (
      <div className="imagen">
        <img src={props.card.img} alt="imagen"></img>
        <h4>{props.card.title}</h4>
        <p>{props.card.descripcion}</p>
      </div>
    );
  }
  export default Card;