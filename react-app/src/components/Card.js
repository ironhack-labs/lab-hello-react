function Card(props){
  const {imgUrl, heading, text} = props

  return(
    <div className="Card">
      <img height={200} width={200} src={imgUrl}/>
      <h2>{heading}</h2>
      <p>{text}</p>
    </div>
  )
}
export default Card