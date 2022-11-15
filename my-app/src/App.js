// src/App.js
import "./App.css";
import React from "react";
import Navbar from "./components/Navbar";
import Article from "./components/Article";

const articleArray = [
  {
    image:
      "https://education-team-2020.s3.eu-west-1.amazonaws.com/web-dev/labs/landing-page/icon1.png",
    title: "Declarative",
    text: "React makes it painless to create interactive UIs.",
  },
  {
    image:
      "https://education-team-2020.s3.eu-west-1.amazonaws.com/web-dev/labs/landing-page/icon2.png",
    title: "Components",
    text: "Build encapsulated components that manage their state.",
  },
  {
    image:
      "https://education-team-2020.s3.eu-west-1.amazonaws.com/web-dev/labs/landing-page/icon3.png",
    title: "Single-Way",
    text: "A set of immutable values are passed to the component's.",
  },
  {
    image:
      "https://education-team-2020.s3.eu-west-1.amazonaws.com/web-dev/labs/landing-page/icon4.png",
    title: "JSX",
    text: "Statically-typed designed to run on modern browsers.",
  },
];

function App() {
  return (
    <div className="App">
      <Navbar />
      <div>
        {articleArray.map((article) => (
          <Article article={article} />
        ))}
      </div>
    </div>
  );
}

export default App;
