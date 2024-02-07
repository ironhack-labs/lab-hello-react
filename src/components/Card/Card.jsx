import "./Card.css";

export default function Card(props) {
  const { image, headline, text } = props;
  return (
    <div className="card">
      <img src={image} alt="Icon" />
      <h3>{headline}</h3>
      <p>{text}</p>
    </div>
  );
}