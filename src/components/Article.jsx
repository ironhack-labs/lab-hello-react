import React from "react";

function Article(props) {
  return (
    <div className="container">
      <img className="icon" src={props.src} alt={props.alt}></img>
      <h3 className="title">{props.text}</h3>
      <p className="description">{props.text2}</p>
    </div>
  );
}

export default Article;
