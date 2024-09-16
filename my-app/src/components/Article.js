import React from 'react';

function Article (props) {
    
    const { article } = props;
    
    return (
        <article>
          <img src={article.image} alt="each article has it's simbol"/>
          <h2>{article.title}</h2>
          <p>{article.text}</p>
        </article>
    );
}

export default Article;