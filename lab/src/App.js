import './App.css';
import logo from "./images/ironhack-logo-xs.png"
import icon1 from "./images/icon1.png";
import icon2 from "./images/icon2.png";
import icon3 from "./images/icon3.png";
import icon4 from "./images/icon4.png";
import menu from "./images/menu-top-xs.png";
import reactLogo from './logo.svg';

function App() {
  return (
    <div className="App">
      <main>
        <nav>
          <img src={logo} alt="logo" class="logo" />
          <img src={menu} className="toggle" alt="menu" />
        </nav>

        <section className="content">
          <div>
            <h1>Say hello to ReactJS</h1>
            <p>
            You will learn how to use the most popular frontend library, and become a super Ninja developer.
            </p>
            <button>Awesome!</button>
          </div>

          <div className="logo-panel">
            <img src={reactLogo} alt ="react-logo" />
          </div>
        </section>
      </main>

      <section className="cards">
        <div className="card">
          <img src={icon1} alt="illustration" />
          <h4 className="card-title">Declarative</h4>
          <p>React makes it painless to create interactive UIs.</p>
        </div>

        <div className="card">
          <img src={icon2} alt="illustration" />
          <h4 className="card-title">Components</h4>
          <p>Build encapsulated components that manage their state.</p>
        </div>

        <div className="card">
          <img src={icon3} alt="illustration" />
          <h4 className="card-title">Single-Way</h4>
          <p>A set of immutable values are passed to the components.</p>
        </div>

        <div className="card">
          <img src={icon4} alt="illustration" />
          <h4 className="card-title">JSX</h4>
          <p>Statically-typed, design to run on modern browsers.</p>
        </div>
      </section>
    </div>
  );
}

export default App;
