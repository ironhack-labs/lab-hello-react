// import PropTypes from "prop-types";

const Card = ({ title, description, image }) => {
  return (
    <div className="card flex flex-col items-start justify-between gap-4">
      <div className="flex justify-center">
        <img className="w-32 " src={image} alt="Card" />
      </div>
      <div className="w-44">
        <h2 className="text-bold">{title}</h2>
        <p>{description}</p>
      </div>
    </div>
  );
};
// Card.propTypes = {
//   title: PropTypes.string.isRequired,
//   description: PropTypes.string.isRequired,
//   image: PropTypes.string.isRequired,
// };

export default Card;
