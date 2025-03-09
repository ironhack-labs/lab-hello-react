export default function Square({ icon, title, content }) {
  return (
    <div className="square">
      <div className="squareLogo">
        <img src={icon} />
      </div>
      <div className="squareText">
        <h2>{title}</h2>
        <p>{content}</p>
      </div>
    </div>
  );
}
