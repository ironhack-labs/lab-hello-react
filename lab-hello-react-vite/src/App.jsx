// src/App.jsx
import "./App.css";
import logo from "./assets/ironhack-logo-xs.png";
import menu from "./assets/menu-top-xs.png";
import icon1 from "./assets/icon1.png";
import icon2 from "./assets/icon2.png";
import icon3 from "./assets/icon3.png";
import icon4 from "./assets/icon4.png";

function App() {
  return (
    <div className="App">
      <nav>
        <img src={logo} alt="" />
        <img src={menu} alt="" />
      </nav>
      <div className="landing">
        <h1>
          Say Hello to
          <br /> ReactJS
        </h1>
        <p>
          You will learn how to use
          <br /> the most popular frontend library, <br />
          and become a super Ninja developer.
        </p>
        <button>Awesome!</button>
      </div>
      <div className="features">
        <div>
          <img src={icon1} alt="" />
          <h2>Declarative</h2>
          <p>React makes it <br/>painless to create <br/>interactive UI's</p>
        </div>

        <div>
          <img src={icon2} alt="" />
          <h2>Components</h2>
          <p>Build encapsulated <br/>components that <br/>manage their state.</p>
        </div>

        <div>
          <img src={icon3} alt="" />
          <h2>Single-Way</h2>
          <p>A set of immutable <br/>values are passed to <br/>the component's</p>
        </div>

        <div>
          <img src={icon4} alt="" />
          <h2>JSX</h2>
          <p>Statically-typed, <br/>designed to run on <br/>modern browsers</p>
        </div>
      </div>
    </div>
  );
}

export default App;
