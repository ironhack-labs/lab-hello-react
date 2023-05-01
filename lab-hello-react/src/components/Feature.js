function Feature(props) {
  return (
    <div className="feature-item">
      <img src={props.img} alt="feature" />
      <h3>{props.headline}</h3>
      <p>{props.text}</p>
    </div>
  );
}

export default Feature;
