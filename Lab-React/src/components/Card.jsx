
import PropTypes from 'prop-types';

const Card = ({ title, description, image }) => {
    return (
        <div className="card flex">
            <h2>{title}</h2>
            <p>{description}</p>
            <img src={image} alt="Card"/>
        </div>
    )
};
Card.propTypes = {
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
  };
  

export default Card
