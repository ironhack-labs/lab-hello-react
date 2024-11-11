// src/App.jsx
import "./App.css";
import ironhackLogo from "./assets/ironhack-logo-xs.png";
import menuIcon from "./assets/menu-top-xs.png";
import icon1 from "./assets/icon1.png";
import icon2 from "./assets/icon2.png";
import icon3 from "./assets/icon3.png";
import icon4 from "./assets/icon4.png";

function App() {
  return (
    <div className="App">
      <div className="main">
        <nav className="navbar">
          <img src={ironhackLogo} className="ironhackLogo" />
          <img src={menuIcon} className="menuIcon" />
        </nav>
        <h1 className="heading">
          Say hello to
          <br />
          ReactJS
        </h1>
        <p className="text-info">
          You will learn how to use
          <br />
          the most popular frontend library,
          <br />
          and become a super Ninja developer.
        </p>
        <button className="main-btn">Awesome!</button>
      </div>
      <div className="more-info">
        <div className="info-boxes">
          <img src={icon1} className="icon1" />
          <h3>Declarative</h3>
          <p>
            React makes it
            <br />
            painless to create
            <br />
            interactive UIs.
          </p>
        </div>
        <div className="info-boxes">
          <img src={icon2} className="icon2" />
          <h3>Components</h3>
          <p>
            Build encapsulated
            <br />
            components that
            <br />
            manage their state
          </p>
        </div>
        <div className="info-boxes">
          <img src={icon3} className="icon3" />
          <h3>Single-Way</h3>
          <p>
            A set of inmutable
            <br />
            values are passed to
            <br />
            the components.
          </p>
        </div>
        <div className="info-boxes">
          <img src={icon4} className="icon4" />
          <h3>JSX</h3>
          <p>
            Statically-typed,
            <br />
            designed to run on
            <br />
            modern browsers
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;
