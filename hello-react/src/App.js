import "./App.css";
import "./components/Header.jsx";
import Header from "./components/Header.jsx";
import Headline from "./components/Headline";
import Button from "./components/Button";
import Article from "./components/Article";
import icon1 from "./images/icon1.png";
import icon2 from "./images/icon2.png";
import icon3 from "./images/icon3.png";
import icon4 from "./images/icon4.png";

function App() {
  return (
    <div className="App">
      <section className="head">
        <Header />
        <div className="content">
          <Headline />
          <p>
            You will learn how to use the most popular frontend library, and
            become a super Ninja developer.
          </p>
          <Button />
        </div>
      </section>
      <section className="icon">
        <Article
          src={icon1}
          text="Declarative"
          p="React makes it painless to create interactive UIs."
        />
        <Article
          src={icon2}
          text="Components"
          p="Build encapsulated components that manage their state."
        />
        <Article
          src={icon3}
          text="Single-Way"
          p="A set of immutable values are passed to the component's."
        />
        <Article
          src={icon4}
          text="JSX"
          p="Statically-typed, designed to run on modern browsers."
        />
      </section>
    </div>
  );
}

export default App;
