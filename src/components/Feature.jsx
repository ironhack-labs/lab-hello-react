import "./Feature.css";

export function Feature(props) {
  return (
    <div className="feature">
      <img className="feature__img" src={props.src} alt="Feature icon" />
      <h3 className="feature__title">{props.title}</h3>
      <p className="feature__description">{props.description}</p>
    </div>
  );
}
