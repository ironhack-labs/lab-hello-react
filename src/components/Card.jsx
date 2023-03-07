const Card = (props) => {
  return (
    <div className="card-container">
      <div className="card-img">
        <img src={props.img} alt={props.title} />
      </div>
      <div className="text-card">
        <h2>{props.title}</h2>
        <p>{props.text}</p>
      </div>
    </div>
  );
};

export default Card;
