import React from 'react'

import icon1Img from "../assets/icon1.png"
import icon2Img from "../assets/icon2.png"
import icon3Img from "../assets/icon3.png"
import icon4Img from "../assets/icon4.png"     


function Body(
      
) {
  return (
    <section className="articles-container">
      <article className="article">
      <img  src={icon1Img} alt="ironhack" />
        <h2>Declarative</h2>
        <p className="pArticle">React makes it <br/>painles to create <br/>interactive UIs.</p>
      </article>

      <article className="article">
      <img  src={icon2Img} alt="ironhack" />
        <h2>Components</h2>
        <p className="pArticle">Build encapsulated <br/>components that <br/>manage their state.</p>
      </article>

      <article className="article">
      <img  src={icon3Img} alt="ironhack" />
        <h2>Single-way</h2>
        <p className="pArticle">A set of immutable <br/>values are passed to <br/>the component's</p>
      </article>
      <article className="article">
      <img  src={icon4Img} alt="ironhack" />
        <h2>JSX</h2>
        <p className="pArticle">Statically-typed, <br/>designed to run on <br/>modern browsers.</p>
      </article>
    </section>
  );
}
export default Body;
