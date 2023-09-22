import PropTypes from "prop-types";

function Cards({ text = "", title = "", URLImg = "" }) {
  return (
    <div className="card border border-0 d-flex align-items-start">
      <img src={URLImg} className="card-img-top img-cards" alt={title} />
      <div className="card-body">
        <h5 className="card-title fw-bold fs-3">{title}</h5>
        <p className="card-text text-secondary">{text}</p>
      </div>
    </div>
  );
}

export default Cards;

Cards.propTypes = {
  text: PropTypes.string,
  title: PropTypes.string,
  URLImg: PropTypes.string,
};
