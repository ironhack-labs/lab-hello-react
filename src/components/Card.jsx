import React from "react";

const Card = (props) => {
  const { title, imageUrl, description } = props.content;
  return (
    <div className="card">
      <div className="card-top">
        <img src={imageUrl} alt="" />
      </div>
      <div className="card-bottom">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default Card;
