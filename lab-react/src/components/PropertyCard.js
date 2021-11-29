const PropertyCard = (props) => {
  return (
    <div className="PropertyCard">
      <img src={props.property.image} alt={props.property.title}/>
      <h4>{props.property.title}</h4>
      <p>{props.property.description}</p>
    </div>
  );
};

export default PropertyCard;
