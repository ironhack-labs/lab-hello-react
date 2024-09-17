import React, { Component } from "react";
import ArticleSectionBox from "./ArticleSectionBox";
import declarativeImg from "../images/icon1.png";
import componentsImg from "../images/icon2.png";
import singleWayImg from "../images/icon3.png";
import jsxImg from "../images/icon4.png";

class ArticleSection extends Component {
  render() {
    return (
      <div className="article-section-wrapper">
        <div className="article-section">
          <ArticleSectionBox
            image={declarativeImg}
            title="Declarative"
            text="React makes it painless to create interactive UI's."
          />
          <ArticleSectionBox
            image={componentsImg}
            title="Components"
            text="Build encapsulated components that manage their state."
          />
          <ArticleSectionBox
            image={singleWayImg}
            title="Single-Way"
            text="A set of immutable values are passed to the components."
          />
          <ArticleSectionBox
            image={jsxImg}
            title="JSX"
            text="Statically-typed designed to run on modern browsers."
          />
        </div>
      </div>
    );
  }
}

export default ArticleSection;
