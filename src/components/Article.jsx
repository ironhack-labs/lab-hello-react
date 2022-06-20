import React from "react";

const Article = props => {
  return (
    <article>
      <img src={props.img} alt="" />
      <h2>{props.heading}</h2>
      <p>{props.text}</p>
    </article>
  );
};


export default Article;