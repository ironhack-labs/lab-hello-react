// import "./Feature.css";

/* eslint-disable react/prop-types */
function Feature(props) {
  const { icon, title, text } = props;

  return (
    <div className="card">
      <img src={icon} alt="icon" />
      <h3>{title} </h3>
      <p> {text}</p>
    </div>
  );
}

export default Feature;
