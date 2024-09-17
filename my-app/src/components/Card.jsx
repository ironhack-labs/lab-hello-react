import './Card.css';

function Card(props) {
    const {image, title, description} = props;
  return (
    <div className='card'>
        <img src={image} alt="icon" />
        <h2>{title}</h2>
        <p>{description}</p>
    </div>
  )
}

export default Card