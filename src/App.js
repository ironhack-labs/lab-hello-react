// src/App.js
import "./App.css";
import Article from "./components/Article";
import Button from "./components/Button";
import Heading from "./components/Heading";
import Navbar from "./components/Navbar.jsx";

import icon1 from "./images/icon1.png";
import icon2 from "./images/icon2.png";
import icon3 from "./images/icon3.png";
import icon4 from "./images/icon4.png";

function App() {
  return (
    <div className="app">
      <div className="top">
        <Navbar />
        <section class="main">
          <Heading />
          <Button text="Awesome!" className="btn" />
        </section>
      </div>
      <section class="points">
        <Article
          src={icon1}
          text="Declarative"
          text2="React makes it painless to create interactive UIs."
        />
        <Article
          src={icon2}
          text="Components"
          text2="Build encapsulated components that manage their state"
        />
        <Article
          src={icon3}
          text="Single-Way"
          text2="A set of immutable values are passed to the component's"
        />
        <Article
          src={icon4}
          text="JSX"
          text2="Statically-typed designed to run on modern browsers"
        />
      </section>
    </div>
  );
}
export default App;
