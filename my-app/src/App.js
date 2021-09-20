import "./App.css";

import logo from "./images/ironhack-logo-xs.png";
import icon1 from "./images/icon1.png";
import icon2 from "./images/icon2.png";
import icon3 from "./images/icon3.png";
import icon4 from "./images/icon4.png";

export default App;

function App() {
  return (
    <div className="App">
      <div class="header">
        <img src={logo} alt=""></img>
        <img scr="" alt=""></img>
        <div>
          <h1>Say Hello to ReactJS</h1>
          <p>
            You will learn how to use the most popular frontend library and
            become a super Ninja developer
          </p>
          <button>Awesome!</button>
        </div>
      </div>
      <div className="images">
        <div>
          <img src={icon1} alt=""></img>
          <h2>Declarative</h2>
          <p>React makes it painless to create interactive UIs</p>
        </div>
        <div>
          <img src={icon2} alt=""></img>
          <h2>Components</h2>
          <p>Build encapsulated components that manage their state</p>
        </div>
        <div>
          <img src={icon3} alt=""></img>
          <h2>Single-Way</h2>
          <p>A set of immutable values are passed to the component's</p>
        </div>
        <div>
          <img src={icon4} alt=""></img>
          <h2>JSX</h2>
          <p>Statically-types, designed to run on modern browsers.</p>
        </div>
      </div>
    </div>
  );
}
