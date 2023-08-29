import ironhackLogo from "./images/ironhack-logo.png";
import menu from "./images/menu.png";
import icon1 from "./images/icon1.png";
import icon2 from "./images/icon2.png";
import icon3 from "./images/icon3.png";
import icon4 from "./images/icon4.png";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="main-container">
        <nav className="nav-container">
          <img src={ironhackLogo} alt="ironhackLogo" />
          <img src={menu} alt="menu" className="menu-logo" />
        </nav>
        <div className="title-container">
          <h1>Say hello to ReactJS</h1>
          <h4>
            You will learn how to use the most popular frontend library, and
            become a super Ninja developer.
          </h4>
          <button>Awesome!</button>
        </div>
      </div>
      <div className="items-container">
        <div className="item">
          <img src={icon1} alt="icon-1" />
          <h3>Declarative</h3>
          <p>React makes it painless to create interactive UIs.</p>
        </div>
        <div className="item">
          <img src={icon2} alt="icon-2" />
          <h3>Components</h3>
          <p>Build encapsulated components that manage their state.</p>
        </div>
        <div className="item">
          <img src={icon3} alt="icon-3" />
          <h3>Single-Way</h3>
          <p>A set og immutable values are passed to the components.</p>
        </div>
        <div className="item">
          <img src={icon4} alt="icon-4" />
          <h3>JSX</h3>
          <p>Statically-typed, designed to run on modern browsers.</p>
        </div>
      </div>
    </div>
  );
}

export default App;
