import './Cards.css';

function Cards(props) {
    const {image, title, description} = props;
  return (
    <div className="card">
        <img className="card-img" src={image} alt="img" />
        <h2 className="card-title">{title}</h2>
        <p>{description}</p>
    </div>
  )
}

export default Cards