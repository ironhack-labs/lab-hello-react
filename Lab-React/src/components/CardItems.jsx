// import PropTypes from 'prop-types';

const CardItems = (props) => {
  return (
    <div className="flex justify-evenly mt-32 mb-32 flex-wrap">
      {props.children}
    </div>
  );
};

export default CardItems;
