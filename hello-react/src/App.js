import "./App.css";
import icon1 from "./images/icon1.png";
import icon2 from "./images/icon2.png";
import icon3 from "./images/icon3.png";
import icon4 from "./images/icon4.png";
import logo from "./images/ironhack-logo-xs.png";
import menu from "./images/menu-top-xs.png";

function App() {
  return (
    <div className="App">
      <div className="main-div">
        <div className="nav">
          <div className="nav-logo">
            <img src={logo} alt="Ironhack logo" width="45" height="45" />
          </div>
          <div className="nav-image">
            <img src={menu} alt="Menu" width="15" height="15" />
          </div>
        </div>
        <div className="main-box">
          <h1>Say hello to</h1>
          <h1>ReactJS</h1>
          <p>You will learn how to use</p>
          <p>the most popular frontend library</p>
          <p>and become a super Ninja developer</p>
          <button>Awesome!</button>
        </div>
      </div>
      <div className="cards-div">
        <div className="card">
          <div className="card-image">
            <img src={icon1} alt="declarative icon" width="120" height="120" />
          </div>
          <div className="card-title">
            <h2>Declarative</h2>
          </div>
          <div className="card-content">
            <p>React makes it painless to create interactive UIs.</p>
          </div>
        </div>
        <div className="card">
          <div className="card-image">
            <img src={icon2} alt="components icon" width="120" height="120" />
          </div>
          <div className="card-title">
            <h2>Components</h2>
          </div>
          <div className="card-content">
            <p>Build encapsulated components that manage their state.</p>
          </div>
        </div>
        <div className="card">
          <div className="card-image">
            <img src={icon3} alt="single way icon" width="120" height="120" />
          </div>
          <div className="card-title">
            <h2>Single-Way</h2>
          </div>
          <div className="card-content">
            <p>A set of immutable values are passed to the components.</p>
          </div>
        </div>
        <div className="card">
          <div className="card-image">
            <img src={icon4} alt="JSX icon" width="120" height="120" />
          </div>
          <div className="card-title">
            <h2>JSX</h2>
          </div>
          <div className="card-content">
            <p>Statically-typed, designed to run on modern browsers.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
