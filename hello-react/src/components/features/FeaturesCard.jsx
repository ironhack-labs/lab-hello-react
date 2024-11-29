function FeaturesCard ( { src, title, description}) {
    return (
        <div style = {{ maxWidth: "150px"}}>
            <img src= { src } alt={title} className="img-fluid"/>
            <h3> {title} </h3>
            <p> {description} </p>
        </div>
    )
}

export default FeaturesCard;