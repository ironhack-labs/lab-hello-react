import "./App.css";
import logo from "./images/ironhack-logo-xs.png";
import icon from "./images/menu-top-xs.png";
import declare from "./images/icon1.png";
import components from "./images/icon2.png";
import single from "./images/icon3.png";
import jsx from "./images/icon4.png";

const App = () => {
  return (
    <div className="App">
      <div className="TopContainer">
        <nav className="NavBar">
          <img src={logo} />
        </nav>
        <nav className="NavBar2">
          <img src={icon} />
        </nav>
        <h1 className="Header">Say hello to ReactJS</h1>
        <p className="Text">
          You will learn how to use the most populat frontend library, and
          become a super Ninja developer.
        </p>
        <button className="Btn">Awesome!</button>
      </div>
      <div className="BottomContainer AllItems">
        <div className="Item">
          <img src={declare} />
          <h3>Declarative</h3>
          <p>React makes it painless to create interactive UIs.</p>
        </div>
        <div className="Item2">
          <img src={components} />
          <h3>Components</h3>
          <p>Build encapsulated components that manage their state.</p>
        </div>
        <div className="Item3">
          <img src={single} />
          <h3>Single-Way</h3>
          <p>A set of immutable values are passed to the component's.</p>
        </div>
        <div className="Item4">
          <img src={jsx} />
          <h3>JSX</h3>
          <p>Statically-typed, designed to run on modern browsers.</p>
        </div>
      </div>
    </div>
  );
};

export default App;
