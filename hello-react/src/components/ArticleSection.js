import React, { Component } from "react";
import ArticleSectionCard from "./ArticleSectionCard";
import declarativeImg from "../images/icon1.png";
import componentsImg from "../images/icon2.png";
import singleWayImg from "../images/icon3.png";
import jaxImg from "../images/icon4.png";

class ArticleSection extends Component {
  render() {
    return (
      <div className="article-section-wrapper">
        <div className="article-section">
          <ArticleSectionCard
            image={declarativeImg}
            title="Declerative"
            text="React makes it painless to create interactive UIs"
          />
          <ArticleSectionCard
            image={componentsImg}
            title="Components"
            text="Build encapsulated components that manage their state."
          />
          <ArticleSectionCard
            image={singleWayImg}
            title="Single-Way"
            text="A set of immutable values are passed to the component's"
          />
          <ArticleSectionCard
            image={jaxImg}
            title="JSX"
            text="Statically-typed designed to run on modern browsers"
          />
        </div>
      </div>
    );
  }
}

export default ArticleSection;
