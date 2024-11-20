import React from "react";

function Article(props) {
  const { article } = props;

  return (
    <article className="article">
      <img src={article.image} alt="each article has its simbol" />
      <h2>{article.title}</h2>
      <p>{article.text}</p>
    </article>
  );
}

export default Article;
