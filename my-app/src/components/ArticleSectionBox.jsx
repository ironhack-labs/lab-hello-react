import React from "react";

function ArticleSectionBox(props) {
  return (
    <div className="article-section-box">
      <img src={props.image} alt="" />
      <h2>{props.title}</h2>
      <p>{props.text}</p>
    </div>
  );
}

export default ArticleSectionBox;
