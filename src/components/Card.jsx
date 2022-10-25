function Card({ img, heading, text }) {
  return (
    <div className="card">
      <img src={img} alt="" />
      <h2>{heading}</h2>
      <p>{text}</p>
    </div>
  );
}
export default Card;
