

function Column({content}) {
  return (
    <div className="column">
        <img src={content.image} alt={content.alt} />
        <h2>{content.title}</h2>
        <p>{content.description}</p>
    </div>
  )
}

export default Column