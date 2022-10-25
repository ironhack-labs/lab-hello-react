function Card({ image, title, text }) {
  return (
    <div className="card">
      <img className="icon" src={image} alt="cardImage" />
      <div className="card-text">
        <h3>{title}</h3>
        <p>{text}</p>
      </div>
    </div>
  );
}

export default Card;
