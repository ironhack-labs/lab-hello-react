import "./App.css";
import ReactLogo from "./assets/react.svg";
import logo from "./assets/ironhack-logo-xs.png";
import menuBurger from "./assets/menu-top-xs.png";
import icon1 from "./assets/icon1.png";
import icon2 from "./assets/icon2.png";
import icon3 from "./assets/icon3.png";
import icon4 from "./assets/icon4.png";

function App() {
  return (
    <div className="App">
      <div className="header">
        <img src={logo} className="logo" alt="logo" />
        <button className="btn-menu">
          <img src={menuBurger} alt="menu burger" />
        </button>
      </div>

      <main className="main-content">
        <h1 className="main-title">Say hello to ReactJS</h1>
        <p className="main-text">
          You will learn how to use the most popular frontend library, and
          become a super Ninja developer.
        </p>
        <button className="btn-action">Awesome!</button>
        <img src={ReactLogo} className="bg-logo logo-1" alt="react" />
        <img src={ReactLogo} className="bg-logo logo-2" alt="react" />
        <img src={ReactLogo} className="bg-logo logo-3" alt="react" />
      </main>

      <section className="cards">
        <div className="card">
          <img src={icon1} className="card-icon" alt="icon1" />
          <h2>Declarative</h2>
          <p className="card-text">
            React makes it painless to create interactive UIs.
          </p>
        </div>
        <div className="card">
          <img src={icon2} className="card-icon" alt="icon2" />
          <h2>Components</h2>
          <p className="card-text">
            Build encapsulated components that manage their state.
          </p>
        </div>
        <div className="card">
          <img src={icon3} className="card-icon" alt="icon3" />
          <h2>Single-Way</h2>
          <p className="card-text">
            A set of immutable values are passed to the components.
          </p>
        </div>
        <div className="card">
          <img src={icon4} className="card-icon" alt="icon4" />
          <h2>JSX</h2>
          <p className="card-text">
            Statically-typed, designed to run on modern browsers.
          </p>
        </div>
      </section>
    </div>
  );
}

export default App;
