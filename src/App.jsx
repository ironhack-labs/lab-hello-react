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
      <header>
        <div id="nav-bar">
          <img src={logo} alt="ironhack-logo" id="ironhack-logo" />
          <img src={menu} alt="menu-logo" id="menu-logo" />
        </div>
        <h1>Say hello to ReactJS</h1>
        <h2>
          You will learn how to use the most popular frontend library, and
          become a super Ninja developer.
        </h2>
        <button>Awesome!</button>
      </header>
      <main>
        <div id="cards">
          <div className="card" id="card-1">
            <img src={icon1} alt="" />
            <h3>Declarative</h3>
            <p>React makes it painless to create interactive UIs.</p>
          </div>
          <div className="card" id="card-1">
            <img src={icon2} alt="" />
            <h3>Components</h3>
            <p>Built encapsuled components that manage their state.</p>
          </div>
          <div className="card" id="card-1">
            <img src={icon3} alt="" />
            <h3>Single-Way</h3>
            <p>A set of immutable values are passed to the components.</p>
          </div>
          <div className="card" id="card-1">
            <img src={icon4} alt="" />
            <h3>JSX</h3>
            <p>Statically-typed, designed to run on modern browsers.</p>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
