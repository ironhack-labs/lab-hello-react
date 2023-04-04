function Card(props) {
  return (
    <div className="card" style={{width: "18rem"}}>
      <img src={props.image} className="card-img-top" style={{height: "auto", width: "80px"}} alt="..."/>
        <div className="card-body">
          <h5 className="card-title">{props.title}</h5>
          <p className="card-text">{props.description}</p>
        </div>
    </div>
  )
}

export default Card