import './Card.css';


function Card({ title, image, text }) {
    return (
        <div className="card-container">
            <img className="card-image" src={image} />
            <h2 className="card-title">{title}</h2>
            <p className="card-text">{text}</p>
        </div>
    )
}

export default Card;