import "./App.css";
import logo from "./images/ironhack-logo-xs.png";
import menuTop from "./images/menu-top-xs.png";
import icon1 from "./images/icon1.png";
import icon2 from "./images/icon2.png";
import icon3 from "./images/icon3.png";
import icon4 from "./images/icon4.png";
const h1 = <h1>Say hello to ReactJS</h1>;
const p = (
  <p className="justify-content">
    You will learn how to use the most popular frontend library, and become a
    super Ninja developer. <br></br>
  </p>
);

const button = <button className="style-button">Awesome!</button>;

function App() {
  return (
    <div className="App">
      <div className="background">
        <nav className="navbar">
          <img src={logo} alt="logo"></img>
          <img src={menuTop} alt="menu"></img>
        </nav>

        {h1}
        {p}
        {button}
      </div>
      <div className="container">
        <div className="row">
          <div className="col">
            <div className="card">
              <img src={icon1} alt="icon1"></img>
              <h2>Declarative</h2>
              <p className="p-component">
                React makes it painless to create interactive UIs.
              </p>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <div className="card">
              <img src={icon2} alt="icon2"></img>
              <h2>Components</h2>
              <p className="p-component">
                Build encapsulated components that manage their state.
              </p>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <div className="card">
              <img src={icon3} alt="icon3"></img>
              <h2>Single-Way</h2>
              <p className="p-component">
                A set of immutable values are passed to the component's.
              </p>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <div className="card">
              <img src={icon4} alt="icon4"></img>
              <h2>JSX</h2>
              <p className="p-component">
                Statically-typed, designed to run on modern browsers.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default App;
