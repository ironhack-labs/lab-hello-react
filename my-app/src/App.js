// src/App.js
import "./App.css";
import ironhackLogo from "./images/logo.png";
import avocadoMenu from "./images/avocado-menu.png";
import wrench from "./images/wrench.png";
import laptop from "./images/laptop.png";
import gear from "./images/gear.png";
import codingLaptop from "./images/code-in-laptop.png";

function App() {
  return (
    <div className="App">
      <div class="header">
        <img class="ironhack-logo" src={ironhackLogo} alt="logo" />
        <img class="avocado-toast" src={avocadoMenu} alt="navigation-menu" />
      </div>
      <h1>Say hello to ReactJS</h1>
      <h3>
        You will learn how to use the most popular frontend library and become a super ninja
        developer.
      </h3>
      <div class="white-box">
        <h2>Awesome!</h2>
      </div>
      <div class="white-space">
        <div class="footer-item">
          <img src={wrench} alt="wrench-icon" />
          <h4>Declarative</h4>
          <p>React makes it painless to create interactive UIs.</p>
        </div>
        <div class="footer-item">
          <img src={laptop} alt="laptop-icon" />
          <h4>Components</h4>
          <p>Build encapsulated components that manage their state.</p>
        </div>
        <div class="footer-item">
          <img src={gear} alt="gear-icon" />
          <h4>Single-Way</h4>
          <p>A set of immutable values are passed to the component's.</p>
        </div>
        <div class="footer-item">
          <img src={codingLaptop} alt="coding-laptop" />
          <h4>JSX</h4>
          <p>Statically typed, designed to run on modern browsers.</p>
        </div>
      </div>
    </div>
  );
}
export default App;
