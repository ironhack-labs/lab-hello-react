const Card = (image, cardTitle, cardText) => {
  return (
    <div className="card mx-4">
      <img className="card-img-top" src={image} alt="card-icon"/>
      <div className="card-body">
        <h5 className="card-title">{cardTitle}</h5>
        <p className="card-text">{cardText}</p>
      </div>
    </div>
  )
}

export default Card