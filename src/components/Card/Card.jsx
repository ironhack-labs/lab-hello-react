function Card(props) {
  console.log(props)
  return (
    <div className="card">
      <img src={props.data.src} alt={"small logo"} />
      <h3>{props.data.header}</h3>
      <h4>{props.data.text}</h4>
    </div>
  )
}

export default Card