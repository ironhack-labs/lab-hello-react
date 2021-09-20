
function Card(props) {
    return (
<div>
<img src={props.cards.image}></img>
   <h2>{props.cards.title}</h2>
   <p>{props.cards.description}</p>
</div>

    )};

export default Card;

