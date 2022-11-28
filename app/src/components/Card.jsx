export default function Card({ imgUrl, title, text }) {
  return (
    <div className="card">
      <img src={imgUrl} alt={title} />
      <h3>{title}</h3>
      <p>{text}</p>
    </div>
  );
}
