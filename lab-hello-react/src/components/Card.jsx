
function Card(props) {
    console.log("props", props)
  return <div>
    <img src={props.img} alt={props.tittle} height="250" width="300"/>
    <h2>{props.tittle}</h2>
    <p>{props.paragraph}</p>
  </div>;
}

export default Card;
