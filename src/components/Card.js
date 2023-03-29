// React Component <Card />

function Card(props) {
  return (
    <div>
      <img src={props.imageUrl} alt='icon1' />
      <h2>{props.title}</h2>
      <h4>{props.description}</h4>
    </div>
  );
}

export default Card;
