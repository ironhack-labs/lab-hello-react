import React from "react";

const articles = (props) => {
  return (
    <article>
      <img src={props.img} alt="" />
      <h3>{props.title}</h3>
      <p>{props.text}</p>
    </article>
  );
};

export default articles;