import "./App.css";
import Button from "./components/Button";
import Card from "./components/Card";
import Navbar from "./components/Navbar";
import icon1 from "./images/icon1.png";
import icon2 from "./images/icon2.png";
import icon3 from "./images/icon3.png";
import icon4 from "./images/icon4.png";

const heading = (
  <h1>
    Say hello to
    <br />
    ReactJS
  </h1>
);

// function Navbar({menu}) {
//   return (
//     <nav>
//       <img src={menu}>/>
//     </nav>
//   );
// }

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="App-header">
        <div className="container">
          {heading}
          <h5>
            You will learn how to use
            <br /> the most popular forntend library,
            <br /> and become a super Ninja developer.
          </h5>
          <Button />
        </div>
      </div>
      <div id="main">
        <div className="gallery">
          <Card
            image={icon1}
            title="Declarative"
            text="React makes it painless to create interactive UIs."
          />
          <Card
            image={icon2}
            title="Components"
            text="Build encapsulated components that manage their state."
          />
          <Card
            image={icon3}
            title="Single-Way"
            text="A set of immutable values are passe to the component's."
          />
          <Card
            image={icon4}
            title="JSX"
            text="Statically-typed, designed to run on modern browsers."
          />
        </div>
      </div>
    </div>
  );
}

export default App;
