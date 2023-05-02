import "./App.css";
import icon1 from "./images/icon1.png";
import icon2 from "./images/icon2.png";
import icon3 from "./images/icon3.png";
import icon4 from "./images/icon4.png";
import Navbar from "./components/Navbar";
import Feature from "./components/Feature";

function App() {
  return (
    <div className="App">
      <Navbar />

      <div className="content">
        <h1>Say hello to ReactJS</h1>
        <p>
          You will learn how to use the most popular frontd library, and become
          a super Ninja developer.
        </p>
        <button>Awesome!</button>
      </div>

      <div className="features">
        <Feature
          img={icon1}
          headline="Declarative"
          text="React makes it painless to create interactive UIs."
        />
        <Feature
          img={icon2}
          headline="Components"
          text="Build encapsulated components that manage their state."
        />
        <Feature
          img={icon3}
          headline="Single-Way"
          text="A set of immutable values are passed to the components."
        />
        <Feature
          img={icon4}
          headline="JSX"
          text="Statically-typed, design to run on modern browsers."
        />
      </div>
    </div>
  );
}

export default App;
