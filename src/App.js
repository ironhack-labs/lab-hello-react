import "./App.css";
import icon1 from "./images/icon1.png";
import icon2 from "./images/icon2.png";
import icon3 from "./images/icon3.png";
import icon4 from "./images/icon4.png";
import ironhackLogoXs from "./images/ironhack-logo-xs.png";
import menuTopxs from "./images/menu-top-xs.png";

function App() {
  return (
    <div className="App">
      <div className="hero">
        <div className="navbar">
          <img src={ironhackLogoXs} />
          <img src={menuTopxs} id="menuTop" />
        </div>
        <div className="heroContent">
          <h1>Say hello to ReactJS</h1>
          <h2>
            You will learn how to use the most popular frontend library, and
            become a super Ninja developer.
          </h2>
          <button href="#">Awesome!</button>
        </div>
      </div>
      <div className="featuresContainer">
        <div className="features">
          <img src={icon1}></img>
          <h3>Declarative</h3>
          <p>React makes it painless to create interactive UIs.</p>
        </div>
        <div className="features">
          <img src={icon2}></img>
          <h3>Components</h3>
          <p>Build encapsulated camponents that manage their sate.</p>
        </div>
        <div className="features">
          <img src={icon3}></img>
          <h3>Single-Way</h3>
          <p>A set of inmutable values are passed to the component´s.</p>
        </div>
        <div className="features">
          <img src={icon4}></img>
          <h3>JSX</h3>
          <p>statically-types designed to run on modern browsers.</p>
        </div>
      </div>
    </div>
  );
}
export default App;
