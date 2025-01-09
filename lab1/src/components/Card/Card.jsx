import './Card.css'

function Card({ title, description, imgSrc }) {
  return (
    <div className="card">
     <img src={imgSrc} alt="icon" />
     <div className='card-text'>
      <h2>{title}</h2>
      <p>{description}</p>

     </div>

    
    </div>
  )
}

export default Card;