import "./App.css";
import ironHackLogo from "./assets/ironhack-logo-xs.png";
import hamburgerMenu from "./assets/menu-top-xs.png";
import iconOne from "./assets/icon1.png";
import iconTwo from "./assets/icon2.png";
import iconThree from "./assets/icon3.png";
import iconFour from "./assets/icon4.png";

// src/App.jsx
import "./App.css";

function App() {
  return (
    <div className="App">
      <header>
        <nav>
          <img src={ironHackLogo} alt="" />
          <img src={hamburgerMenu} alt="" />
        </nav>
        <article>
          <h1>Say hello to ReactJS</h1>
          <p>
            You will learn how to use the most popular frontend library, and
            become a super Ninja developer.
          </p>
          <button>Awesome!</button>
        </article>
      </header>
      <div className="container">
        <div>
          <img src={iconOne} alt="" />
          <h2>Declarative</h2>
          <p>React makes it painless to create interactive Uls.</p>
        </div>
        <div>
          <img src={iconTwo} alt="" />
          <h2>Components</h2>
          <p>Build encapsulated components that manage their state.</p>
        </div>
        <div>
          <img src={iconThree} alt="" />
          <h2>Single-Way</h2>
          <p>A set of immutable values are passed to the component's.</p>
        </div>
        <div>
          <img src={iconFour} alt="" />
          <h2>JSX</h2>
          <p>Statically-typed, designed to run on modern browsers.</p>
        </div>
      </div>
    </div>
  );
}

export default App;
