import "./TextCard.css";

function TextCard(title, description, button) {
  return (
    <div className="textDiv">
      <h1>{title}</h1>
      <p>{description}</p>
      <button>{button}</button>
    </div>
  );
}

export default TextCard;
