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
      <div class="main">
        <div class="main-img">
          <img src={logo} alt="ironhack logo"></img>
          <img src={menu} class="menu-img" alt="menu logo"></img>
        </div>
        <div class="main-text">
          <h1>Say hello to ReactJS</h1>
          <p>
            You will learn how to use the most popular frontend library, and
            become a super Ninja developer
          </p>
          <button class="btn">Awesome!</button>
        </div>
      </div>
      <div class="benefits">
        <div class="card">
          <img src={icon1} alt="create icon"></img>
          <h4>Declarative</h4>
          <p>React makes it painless to create interactive UIs</p>
        </div>
        <div class="card">
          <img src={icon2} alt="components icon"></img>
          <h4>Components</h4>
          <p>Build encapsulated components that manage their state.</p>
        </div>
        <div class="card">
          <img src={icon3} alt="single-way icon"></img>
          <h4>Single-Way</h4>
          <p>A set of immutable values are passed to the components.</p>
        </div>
        <div class="card">
          <img src={icon4} alt="JSX icon"></img>
          <h4>JSX</h4>
          <p>Statically-typed designed to run on modern browsers.</p>
        </div>
      </div>
    </div>
  );
}

export default App;
