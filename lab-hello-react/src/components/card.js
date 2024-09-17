function Card(props) {
    console.log(props)
  return (
    <div>
      <img src={props.card.img} className="imagen" alt="" />
      <h3>{props.card.title}</h3>
      <p>{props.card.description}</p>
    </div>
  );
}

export default Card;
