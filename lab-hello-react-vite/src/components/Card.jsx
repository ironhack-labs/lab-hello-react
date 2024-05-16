function Card({ src, cardTitle, cardText }) {
  return (
    <div className="card">
      <div className="card-img">
        <img src={src} alt="card-img" />
      </div>
      <h3 className="card-title">{cardTitle}</h3>
      <p className="card-text">{cardText}</p>
    </div>
  );
}
export default Card;
