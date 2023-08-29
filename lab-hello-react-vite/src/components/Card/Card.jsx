//requiriendo el css
import './Card.css';

function Card(props) {
    // eslint-disable-next-line react/prop-types
    const { img, title, description } = props;
  
    return (
      <div className="card">
        <img src={img} alt="" />
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
    )


}

export default Card;