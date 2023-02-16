function FunctionalitiesCard(props) {
  return (
    <div>
      <h2>{props.functionality}</h2>
      <img src={props.src} alt="functionalityIcon" width={"200px"} />
      <p>{props.description}</p>
    </div>
  );
}

export default FunctionalitiesCard;
