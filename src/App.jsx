import "./App.css";
import Button from "./components/Button";
import NavBar from "./components/NavBar";
import icon1 from "./assets/icon1.png";
import icon2 from "./assets/icon2.png";
import icon3 from "./assets/icon3.png";
import icon4 from "./assets/icon4.png";
import Square from "./components/Square";

function App() {
  return (
    <div className="App">
      <NavBar></NavBar>
      <div className="textContent">
        <h1>Say hello to REACTJS</h1>
        <p>
          You will learn how to use the most popular frontend library, and
          become a super Ninja developper.
        </p>
        <Button value="Awesome!"></Button>
      </div>
      <div className="displaySquares">
        <Square
          icon={icon1}
          title="Declarative"
          content="React makes it painless to create interactive UIs."
        ></Square>
        <Square
          icon={icon2}
          title="Components"
          content="Build encapsulated components that manage their state."
        ></Square>
        <Square
          icon={icon3}
          title="Single-Way"
          content="A set of immutable values are passed to the component's."
        ></Square>
        <Square
          icon={icon4}
          title="JSX"
          content="Statically-typed, designed to run on modern browsers."
        ></Square>
      </div>
    </div>
  );
}

export default App;
