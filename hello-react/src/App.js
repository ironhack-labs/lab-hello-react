// src/App.js
import "./App.css";
import ironhackLogo from "./images/ironhack-logo-xs.png";
import menu from "./images/menu-top-xs.png";
import icon1 from "./images/icon1.png";
import icon2 from "./images/icon2.png";
import icon3 from "./images/icon3.png";
import icon4 from "./images/icon4.png";

const heading = (
  <div className="top">
    <img src={ironhackLogo} alt="iron hack logo" className="logo" />
    <img src={menu} alt="menu" className="menu" />
  </div>
);

const section = (
  <div className="blackGround section">
    <h1>Say hello to ReactJS</h1>
  </div>
);

const section1 = (
  <div className="blackGround section">
    <p className="titleText">
      You will learn how to use the most popular frontend library, and become a
      super ninja developer.
    </p>
  </div>
);

const section2 = (
  <div className="blackGround section">
    <button>Awesome!</button>
  </div>
);

const section3 = (
  <div className="row section3">
    <div className="col">
      <img src={icon1} alt="icon1" className="icon" />
      <h4>Declarative</h4>
      <p>React makes it painless to create interactive UIs.</p>
    </div>
    <div className="col">
      <img src={icon2} alt="icon2" className="icon" />
      <h4>Components</h4>
      <p>Build encapsulated components that manage their state</p>
    </div>
    <div className="col">
      <img src={icon3} alt="icon3" className="icon" />
      <h4>Single-way</h4>
      <p>A set of immutable values are passed to the component's.</p>
    </div>
    <div className="col">
      <img src={icon4} alt="icon4" className="icon" />
      <h4>JSX</h4>
      <p>Statically-typed, designed to run on modern browsers.</p>
    </div>
  </div>
);

function App() {
  return (
    <div className="App">
      {heading} {section} {section1} {section2} {section3}
    </div>
  );
}
export default App;
