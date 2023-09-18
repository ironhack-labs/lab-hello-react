import "./App.css";
import logo from "../src/assets/ironhack-logo-xs.png";
import burger from "../src/assets/menu-top-xs.png";
import logo1 from "./assets/icon1.png";
import logo2 from "./assets/icon2.png";
import logo3 from "./assets/icon3.png";
import logo4 from "./assets/icon4.png";

function App() {
  return (
    <div className="App">
      <div className= "top-part">
        <nav>
          <ul>
            <li>
              <img src={logo} alt="" />
            </li>
            <li>
              <img src={burger} alt="" />
            </li>
          </ul>
        </nav>

        <h1>Say hello to ReactJS</h1>
        <p>
          You will learn how to use the most popular frontend library, and
          become a super Ninja developer
        </p>
        <button>Awesome!</button>
      </div>
      <div className="bottom-part">
        <div>
          <img src={logo1} alt="" />
          <h3>Declaration</h3>
          <p>React makes it painless to create interactive UIs</p>
        </div>
        <div>
          <img src={logo2} alt="" />
          <h3>Components</h3>
          <p>Build encapsulated components that manage their state</p>
        </div>
        <div>
          <img src={logo3} alt="" />
          <h3>Single-Way</h3>
          <p>A set of immutable values are passed to the components</p>
        </div>
        <div>
          <img src={logo4} alt="" />
          <h3>JSX</h3>
          <p> Statically-typed, designed to run on modern browsers</p>
        </div>
      </div>
    </div>
  );
}

export default App;
