import React from "react";

function ArticleSectionCard(props) {
  return (
    <div>
      <img src={props.image} alt="" />
      <h2>{props.title}</h2>
      <p>{props.text}</p>
    </div>
  );
}

export default ArticleSectionCard;
