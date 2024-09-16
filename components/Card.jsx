function Card({ img, title, description })  {
  return (
    <div id="card">
      <img src={img} alt="" />
      <h2>{title}</h2>
      <p>{description}</p>
    </div>

  )
}

export default Card