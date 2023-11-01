function Functionality(props) {
  return (
    <div className="functionality">
      <img src={props.imageSrc} />
      <h3>{props.title}</h3>
      <p>{props.text}</p>
    </div>
  );
}

export default Functionality;
