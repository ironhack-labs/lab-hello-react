function Card(props) {
  return (
    <div className="card " style={{ width: "11rem" }}>
      <img src={props.img} className="card-img-top" alt="..." />
      <div className="card-body mt-2">
        <h5 className="card-title">{props.title}</h5>
        <p className="card-text">{props.text}</p>
      </div>
    </div>
  )
}

export default Card