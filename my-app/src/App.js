import logo from "./images/ironhack-logo-xs.png";
import icon from "./images/menu-top-xs.png";
import icon1 from "./images/icon1.png";
import icon2 from "./images/icon2.png";
import icon3 from "./images/icon3.png";
import icon4 from "./images/icon4.png";

import "./App.css";

function App() {
  return (
    <div className="App">
      <header>
        <img className="Ironhack-logo" src={logo} alt="Ironhack logo" />
        <img className="icon" src={icon} alt="nav menu icon" />
        <h1>Say hello to ReactJS</h1>
        <p>
          You will learn how to use the most popular frontend library and become a super Ninja
          developer.
        </p>

        <button>Awesome!</button>
      </header>
      <body>
        <div className="bodyDiv">
          <img src={icon1} alt="Icon" />
          <h3>Declarative</h3>
          <p>React makes it painless to create interactive UIs.</p>
        </div>
        <div className="bodyDiv">
          <img src={icon2} alt="Icon" />
          <h3>Components</h3>
          <p>Build encapsulated components that manage their state.</p>
        </div>
        <div className="bodyDiv">
          <img src={icon3} alt="Icon" />
          <h3>Single-Way</h3>
          <p>A set of immutable values are passed to the component's.</p>
        </div>
        <div className="bodyDiv">
          <img src={icon4} alt="Icon" />
          <h3>JSX</h3>
          <p>Statically-typed, designed to run on modern browsers.</p>
        </div>
      </body>
    </div>
  );
}
export default App;
